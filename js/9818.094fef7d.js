(self.webpackChunk = self.webpackChunk || []).push([
  [9818],
  {
    999818: function (e, t, a) {
      "use strict";
      a.d(t, {
        n: function () {
          return d;
        },
      });
      a(454090);
      var i = a(607176),
        n = a(619755);
      a(277193),
        a(368970),
        a(997133),
        a(910527),
        a(986601),
        a(449610),
        a(325748);
      var r = a(376453);
      (window.plupload = r),
        (window.measureSignFileList = []),
        (window.measureChecksInfo = []),
        (window.measureCompanyDocsByType = []);
      var o = "";
      function s() {
        "measureSupport" in ajxq &&
          n.each(ajxq.measureSupport, function (e, t) {
            "function" == typeof t.abort
              ? t.abort()
              : ajxq.measureSupport.splice(e, 1);
          });
      }
      function d(e, t, a) {
        for (var i in (n(".invalid-feedback.d-block").remove(), e)) {
          var r = a.find("#" + i);
          if ("SELECT" === r.prop("tagName"))
            r.parent().append(
              n("<span/>")
                .addClass("invalid-feedback d-block")
                .append(
                  n("<span/>")
                    .addClass("d-block")
                    .append(
                      n("<span/>").addClass("form-error-message").text(e[i])
                    )
                )
            );
          else if (
            "INPUT" === r.prop("tagName") &&
            "checkbox" === r.prop("type")
          ) {
            r.parent()
              .parent()
              .append(
                n("<span/>")
                  .addClass("invalid-feedback d-block")
                  .append(
                    n("<span/>")
                      .addClass("d-block")
                      .append(
                        n("<span/>").addClass("form-error-message").text(e[i])
                      )
                  )
              );
          } else if (r.length) {
            "DIV" === r.prop("tagName") &&
              "Требуется подписать файл" === e[i] &&
              (r.parent().find(".plUploadSign").show(),
              r.parent().find(".plUploadSign").parent().show());
            var o = r;
            o.parent().hasClass("customHide")
              ? o
                  .parent()
                  .parent()
                  .append(
                    n("<span/>")
                      .addClass("invalid-feedback d-block")
                      .append(
                        n("<span/>")
                          .addClass("d-block")
                          .append(
                            n("<span/>")
                              .addClass("form-error-message")
                              .text(e[i])
                          )
                      )
                  )
              : o.after(
                  n("<span/>")
                    .addClass("invalid-feedback d-block")
                    .append(
                      n("<span/>")
                        .addClass("d-block")
                        .append(
                          n("<span/>").addClass("form-error-message").text(e[i])
                        )
                    )
                );
          }
        }
        for (var s in t)
          a.find("div")
            .first()
            .before(
              n("<span/>")
                .addClass("invalid-feedback d-block")
                .append(
                  n("<span/>")
                    .addClass("d-block")
                    .append(
                      n("<span/>").addClass("form-error-message").text(t[s])
                    )
                )
            );
        if (n("#isStagedMeasure").length) {
          var d = n(".invalid-feedback.d-block:first").closest(
            ".measure_form_step_item"
          );
          d.length &&
            (d
              .find(".measure_form_step_item_button")
              .hasClass("mShowSendButtons") ||
              (n(".measure_form_step_item").hide(),
              d.show(),
              n(".bsContainerVis").hide())),
            n("#" + d.data("step") + "_stap_ind")
              .removeClass("completed")
              .addClass("active");
          var l = !1;
          n(".stage-nav-ind").each(function (e) {
            l && n(this).removeClass("active").removeClass("completed"),
              n(this).attr("id") == d.data("step") + "_stap_ind" && (l = !0);
          }),
            p();
        }
        n(".invalid-feedback.d-block").length &&
          n("#siteModal").animate(
            {
              scrollTop:
                n("#siteModal").scrollTop() +
                n(".invalid-feedback.d-block").first().offset().top -
                n(".invalid-feedback.d-block").first().height() / 2 -
                250,
            },
            500
          );
      }
      function l(e) {
        var t = n(e).parents("form").first(),
          a = n(t).find("[required]:visible"),
          i = !0,
          r = "#sendMeasureSupportRequest";
        return (
          n(a).each(function () {
            var e = n(this).val();
            if (n(this).attr("id") && n(this).attr("id").includes("Email"))
              if (icHelper.validateEmail(e))
                n(this).parent().find(".invalid-feedback").length > 0 &&
                  n(this).parent().find(".invalid-feedback").remove();
              else {
                if (n(this).parent().find(".invalid-feedback").length < 1) {
                  var t = icHelper.createError("Email указан некорректно");
                  n(this).after(t);
                }
                i = !1;
              }
            else if (!e || e.length < 1) {
              if (n(this).parent().find(".invalid-feedback").length < 1) {
                t = icHelper.createError("Необходимо заполнить поле");
                n(this).after(t);
              }
              i = !1;
            } else
              n(this).parent().find(".invalid-feedback").length > 0 &&
                n(this).parent().find(".invalid-feedback").remove();
          }),
          i
            ? (n(r).removeAttr("disabled"), n(".invalid-feedback").remove())
            : n(r).attr("disabled", !0),
          i
        );
      }
      function u(e) {
        icHelper.removeLoader(),
          400 === e.status
            ? (d(e.responseJSON.fields, e.responseJSON.global, n(this.formObj)),
              n.each(e.responseJSON.fields, function (e, t) {
                "measure_support_request_p3062237" == e &&
                  (n(document).on("click", "#close_alert", function () {
                    n("#siteModalAlert").modal("hide");
                  }),
                  icHelper.showModalAlert(
                    "Возникла ошибка взаимодействия с сервисом во время анализа списка сотрудников",
                    'Пожалуйста проверьте файл и попробуйте загрузить еще раз.<br><br><div class="text-center"><button class="btn btn-primary btn-yes" id="close_alert" >Хорошо</button></div>'
                  ));
              }))
            : 500 === e.status
            ? (icHelper.showModalAlert(
                "Ошибка",
                "Ошибка сервера, попробуйте отправить заявку позднее."
              ),
              i.T.sendError({
                response_status: e.status,
                response_text: e.responseText,
                measure_guid:
                  "undefined" != typeof originMeasureGuid && originMeasureGuid
                    ? originMeasureGuid
                    : n("#callMeasureForm").length
                    ? n("#callMeasureForm").attr("data-measureid")
                    : "не удалось определить",
              }))
            : (icHelper.showModalAlert("Ошибка", e.responseText),
              i.T.sendError({
                response_status: e.status,
                response_text: e.responseText,
                measure_guid:
                  "undefined" != typeof originMeasureGuid && originMeasureGuid
                    ? originMeasureGuid
                    : n("#callMeasureForm").length
                    ? n("#callMeasureForm").attr("data-measureid")
                    : "не удалось определить",
              }));
      }
      function c(e) {
        n("." + e + "measureModal").data("confirm-hide", 0);
        var t = n(".subsdies_sum_field");
        if (t.length)
          var a = setInterval(function () {
            if (localStorage.getItem("measure-support-calculated-sum")) {
              var e = localStorage.getItem("measure-support-calculated-sum");
              e &&
                (t.val(e),
                localStorage.removeItem("measure-support-calculated-sum"));
            }
          }, 1e3);
        "4c5b842a59f647eabfb508fb23c4a359" === e &&
          (n("#measure_support_request_p7087008").hide(),
          n("#measure_support_request_p7087008").val(clusterGuid),
          n("label[for='measure_support_request_p7087008']").hide(),
          n("#measure_support_request_p7087054").hide(),
          n("#spaces").on("change", function () {
            n("#measure_support_request_p7087054").val(n(this).val());
          })),
          n("#userCompanyHolder").data("usercompany") &&
            n
              .post(
                Routing.generate("company_documents_list_by_type", {
                  id: n("#userCompanyHolder").data("usercompany"),
                }),
                {
                  docTypeList: docTypeToRequest,
                }
              )
              .done(function (e) {
                window.measureCompanyDocsByType = e;
              }),
          icHelper.selectJs(),
          icHelper.textLength(),
          icHelper.selectInputTag(),
          n("#isStagedMeasure").length &&
            "last" !== n(".measure_stepper:visible").data("stepmode") &&
            (n("#measureBaseControls").hide(),
            n(".bsContainerVis").hide(),
            n("#formAdditionalInfoMessage").length &&
              n("#formAdditionalInfoMessage").hide()),
          n("." + e + "measureModal").on("hide.bs.modal", function (t) {
            if (1 != n("." + e + "measureModal").data("confirm-hide")) {
              if (
                (t.preventDefault(),
                t.stopImmediatePropagation(),
                "У вас пока нет опубликованных проектов" !==
                  n("#modalTitle").text())
              ) {
                var i =
                    "e6966ff629d5410bbc0745f9384cda3b" == e ||
                    ("8d9685bdf3c14a8dab70e2ea81d575f2" == e &&
                      window.location.href.indexOf("/aifactory-eng") > 0),
                  r = i
                    ? 'Application not submitted <div class="text_pod">When you close this window your data will be lost. Are you sure you want to proceed?</div>'
                    : 'Заявка не отправлена <div class="text_pod">При закрытии формы данные не будут сохранены. Вы действительно хотите<br> закрыть форму?</div>';
                icHelper.showModalConfirm(
                  r,
                  function () {
                    n("." + e + "measureModal").data("confirm-hide", 1),
                      n("." + e + "measureModal").modal("hide"),
                      n("." + e + "measureModal").data("confirm-hide", 0),
                      a && clearInterval(a);
                  },
                  function () {}
                ),
                  i && (n(".btn-yes").text("Yes"), n(".btn-no").text("No"));
              } else
                n("." + e + "measureModal").data("confirm-hide", 1),
                  n("." + e + "measureModal").modal("hide"),
                  n("." + e + "measureModal").data("confirm-hide", 0),
                  a && clearInterval(a);
              return !1;
            }
          }),
          n("body").trigger("needMask");
      }
      function m() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ".request_info";
        if (
          (window.measureMultiGroupHelper.init(),
          window.measureFormUI.addAlreadyUploadedToSignList(),
          n("#need_sign_list").trigger("updateCheckInfo"),
          "smev" in (e = window.measureChecksInfo) &&
            (n.each(e.smev.nocheck, function (e, t) {
              window.measureFileHelper.setSmevComplete(t.fieldname);
            }),
            n.each(e.smev.completeok, function (e, t) {
              window.measureFileHelper.setSmevComplete(t.fieldname);
            }),
            n.each(e.smev.inwork, function (e, t) {
              window.measureFileHelper.setFileIsChecking(
                t.fieldname,
                t.check_finish
              );
            }),
            n.each(e.smev.completeerror, function (e, t) {
              var a = n('.mSignItem[data-fieldid="' + t.fieldname + '"]')
                .find(".ii_validation")
                .find(".validation_ul");
              a.empty(),
                "not_allowed_file" in t && t.not_allowed_file
                  ? a.append(
                      n("<div/>").text(
                        "Тип документа не соответствует требованиям"
                      )
                    )
                  : a.append(
                      n("<div/>").text("Проверьте следующие документы:")
                    ),
                n.each(t.checkresult, function (e, t) {
                  console.log(t);
                  var i = t.file,
                    r = (n("<div/>"), n("<li/>").addClass("iierrli"));
                  r.append(
                    n("<div/>")
                      .html(
                        'Файл: <span class="iierrfilename_ov">' +
                          i.split(".").slice(0, -1).join(".") +
                          "</span>." +
                          i.split(".").pop()
                      )
                      .addClass("iierrfilename iierrlabel")
                  ),
                    n.each(t.errors, function (e, t) {
                      var a = t.page;
                      r.append(
                        n("<div/>")
                          .text("Страница: " + a)
                          .addClass("iierrpage iierrlabel")
                      ),
                        r.append(
                          n("<div/>")
                            .text("Отсутствует:")
                            .addClass("iierrlabel")
                        );
                      var i = n("<div/>").addClass("iierrlist");
                      n.each(t.errors, function (e, t) {
                        i.append(
                          n("<div/>")
                            .text("" + t)
                            .addClass("iierrlistitem")
                        );
                      }),
                        r.append(i);
                    }),
                    a.append(r);
                }),
                n('.mSignItem[data-fieldid="' + t.fieldname + '"]')
                  .find(".ii_validation")
                  .show(),
                n('.mSignItem[data-fieldid="' + t.fieldname + '"]')
                  .find(".checkInfoContainer")
                  .show();
            })),
          setTimeout(icHelper.cangeFileAdd(), 250),
          n(t).length > 0)
        )
          n(t).data("info");
        if (n(".cluster_residents").length > 0) {
          var a =
            '<div class="row">' + n(".cluster_residents").html() + "</div>";
          n(".members").html(a),
            n(".members .col-md-4")
              .addClass("col-md-12")
              .removeClass("col-md-4");
        }
        if (
          n("#cluster_name_form").length > 0 &&
          n(".cluster_name_h4").length > 0
        ) {
          var i = n(".cluster_name_h4").text();
          n("#cluster_name_form").val(i);
        }
        if (
          (n("[data-hideonstart='1']").closest(".form-group").hide(),
          n(".docBlockHolder").trigger("updateFilesContainers"),
          n(".callChangeOnLoad").trigger("change"),
          icHelper.blockAnimation2(),
          0 === n(".measure_form_step_item:visible").length)
        ) {
          var r = n(".stepTabs.active").attr("data-current");
          n("#" + r + "_step_cnt")
            .first()
            .show();
        }
        n("body").trigger("measure_form_loaded");
      }
      function p() {
        "first" === n(".measure_stepper:visible").data("stepmode") &&
          n(".mesStepPrev").hide(),
          "first" !== n(".measure_stepper:visible").data("stepmode") &&
            n(".mesStepPrev").show(),
          "last" === n(".measure_stepper:visible").data("stepmode") &&
            (n(".mesStepNext").hide(),
            n("#measureBaseControls").show(),
            n(".bsContainerVis").show(),
            n("#npContainer").hide()),
          "last" !== n(".measure_stepper:visible").data("stepmode") &&
            (n(".mesStepNext").show(),
            n("#npContainer").show(),
            n(".bsContainerVis").hide()),
          n(".ms_cont_flex").length &&
            n("html, body").animate(
              {
                scrollTop:
                  n(".ms_cont_flex").offset().top - n(".site_header").height(),
              },
              300
            );
      }
      function f(e) {
        var t = e.data().groupidcontrol;
        if (t) {
          var a = n('.groupId[value="' + t + '"]').closest(".form-group");
          a &&
            (e.is(":checked")
              ? (a.show(),
                a.find("input").removeAttr("disabled"),
                a.find("select").removeAttr("disabled"))
              : (a.hide(),
                a.find("input").attr("disabled", "disabled"),
                a.find("select").attr("disabled", "disabled")));
        }
      }
      (window.measurePageRequestDone = function (e) {
        var t = n("<div/>").html(n("#bootomInforErr").html()).css({
            "max-width": "80rem",
          }),
          a = n("<h3/>").text("Заявка успешно отправлена"),
          i = n("<div/>").addClass("modal_text_bottom2").css({
            "text-align": "center",
            "max-width": "80rem",
            "margin-bottom": "20px",
          }),
          r = "";
        e.guid && (r = e.guid);
        var s = n("<div/>")
            .html(
              "Ваша заявка отправлена. Вы сможете отслеживать статус <br/>заявки в разделе «Заявки» личного кабинета"
            )
            .css({
              "margin-bottom": "14px",
            }),
          d = n("<a/>")
            .attr({
              href: r
                ? Routing.generate("measureGoLk", {
                    guid: r,
                  })
                : Routing.generate("profile_list_requests"),
            })
            .addClass("btn btn-grad")
            .text("Перейти");
        "32e6277813ff47708df4cb749bfe3197" === o &&
          ((s = n("<div/>")
            .html(
              'Ваша заявка отправлена. Вы сможете отслеживать статус <br/>заявки в разделе «Новатор Москвы" личного кабинета'
            )
            .css({
              "margin-bottom": "14px",
            })),
          (d = n("<a/>")
            .attr({
              href: Routing.generate("physicalPersonNovator"),
            })
            .addClass("btn btn-grad")
            .text("Перейти"))),
          e.successScreen &&
            (s = n("<div/>").html(e.successScreen).css({
              "margin-bottom": "14px",
            })),
          i.append(s).append(d),
          "0c0aac2ed67b4ec8a59800f309bad601" === o
            ? icHelper.showModalAlertRedirectOnClose(
                "Заявка успешно отправлена",
                '<div style="text-align: center">' +
                  a.html() +
                  i.html() +
                  "</div>",
                location.href
              )
            : (n("#measureOnPageContent").empty(),
              n("#measureOnPageContent").append(a).append(i).append(t));
      }),
        (window.requestDone = function (e) {
          icHelper.hideModal(),
            n(".translated-form").length
              ? icHelper.showModalAlert(
                  '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Your application has been submitted</div><div class="tam_text tam_text1 fw500">We\'ll get in touch with you shortly</div>',
                  ""
                )
              : window.location.href.indexOf("investicionnaya-upakovka") > -1
              ? icHelper.showModalAlert(
                  '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Заявка принята</div><div class="tam_text tam_text1 fw500">Номер заявки отправлен Вам на электронную почту. Мы свяжемся с вами в ближайшее время<br>Если Вы не получили письмо, просьба связаться с сотрудником отдела upakovka@cluster.mos.ru</div>',
                  ""
                )
              : "a9adaf6b08b94280929a98ce073dc1f1" === o
              ? icHelper.showModalAlert(
                  '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Заявка на партнерство с программой StartHub.Moscow отправлена</div>',
                  ""
                )
              : "af9495d109f5485f9fef1560b016c950" === o ||
                "7f56a36ecde3462d96e383d4325be78a" === o
              ? icHelper.showModalAlert(
                  '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Заявка отправлена</div>',
                  ""
                )
              : (icHelper.showModalAlert(
                  '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Заявка отправлена</div>',
                  ""
                ),
                "7d96b7379ffe4e62b7070922c9995a75" === o &&
                  (n("form").find("input").val(""),
                  n("form").find("textarea").val(""),
                  n("form").find("select").val(""),
                  n("form").find("select").change())),
            (o = "");
        }),
        (window.novatorRequestDone = function () {
          icHelper.showModalAlert(
            '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Ваша заявка направлена!</div>',
            ""
          ),
            (window.location.href = Routing.generate("physicalPersonNovator"));
        }),
        (window.intcRequestDone = function () {
          icHelper.showModalAlert(
            '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Ваша заявка направлена!</div>',
            ""
          ),
            (window.location.href =
              "/innovacionnyy-nauchno-tehnologicheskiy-centr-mgu-vorobevy-gory");
        }),
        (window.startHubRequestDone = function () {
          icHelper.showModalAlert(
            '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Спасибо! Ваша заявка принята к рассмотрению, на Ваш электронный ящик направлено письмо- подтверждение. \n</div>',
            ""
          ),
            (window.location.href = "/starthub_moscow");
        }),
        (window.startHubInitialRequestDone = function () {
          icHelper.hideModal(),
            icHelper.showModalAlert(
              '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Шаг 1 успешно пройден</div><div class="tam_text tam_text1 fw500">Спасибо! На Ваш электронный ящик направлено письмо со ссылкой на форму заявки. Заполните заявку в удобное для Вас время до окончания срока приёма заявок. </div>',
              ""
            );
        }),
        (window.requestIframeMeasureDone = function (e) {
          if (n("#iframeMeasureHolder").length > 0) {
            var t = "Ваша заявка отправлена";
            (window.location.href.indexOf("moskovskiy-akselerator-buildtech") >
              0 ||
              window.location.href.indexOf(
                "moskovskiy-akselerator-engineeringtech"
              ) > 0 ||
              window.location.href.indexOf("moskovskiy-akselerator-rosatom") >
                0 ||
              window.location.href.indexOf("moskovskiy-akselerator-martech") >
                0 ||
              window.location.href.indexOf("edtechb2c") > 0 ||
              window.location.href.indexOf("industrial40") > 0) &&
              (n("#modalTitle").text(""),
              (t = "Спасибо! Ваша заявка отправлена!")),
              n("#iframeMeasureHolder")
                .attr("data-resultguid", e)
                .empty()
                .append(n("<h2/>").text(t));
          } else
            icHelper.removeLoader(),
              icHelper.showModal(
                n("#digital_pass7").html(),
                "Ваш запрос принят.<br>Результат рассмотрения Вашей заявки Вы<br> получите на указанный адрес электронной<br> почты в течение 12 часов",
                void 0,
                "digital_badges_modal digital_badges_modal2 modal_alert"
              );
        }),
        (window.measureAjaxSend = function (e, t) {
          var a = null,
            r = n(e).find('[type="submit"]'),
            s = "#request_for_resident",
            l = n(".intersectoralClusterBtn").attr("data-guid"),
            u = "";
          icHelper.beforeLoadMore(r, !0);
          n(e).attr("name");
          var c =
            !!n(e).attr("action") &&
            n(e)
              .attr("action")
              .match(/measure\/([^\/!?]+)/);
          if (
            (!c &&
              n(e).attr("action") &&
              (c = n(e)
                .attr("action")
                .match(/\/measure-supports\/request\/([^\/!?]+)?/)),
            "undefined" != typeof originMeasureGuid &&
              ("0494914bd6a94268a1de0b52d10d373b" === originMeasureGuid ||
                "7edd11d5c0654449bf5f87065036a127" === originMeasureGuid))
          ) {
            var m = n("#userProjects").val();
            n(e).find("input.ivestProjGuid").val(m);
          }
          if (
            n(e).attr("action").includes("e66e336fe1b84c8f862790a5aeaf1ed7")
          ) {
            var p = n(
              '.measureIasButton[data-measureid="e66e336fe1b84c8f862790a5aeaf1ed7"]'
            ).data().projectid;
            n(e).find('input[name="measure_support_request[p8037582]"]').val(p);
          }
          n(e).attr("action").includes("7d96b7379ffe4e62b7070922c9995a75") &&
            (o = "7d96b7379ffe4e62b7070922c9995a75"),
            n(e).attr("action").includes("b67c142e9a79467db70c53244233ca7c") ||
              n(e)
                .attr("action")
                .includes("fd094c36c88e4b0eb8abf286d205912b") ||
              n(e)
                .attr("action")
                .includes("3b978b054400450fb6a091e1d1adc0f5") ||
              n(e).attr("action").includes("eabbc0b915654625a8eb33b5b6aa46d1"),
            r.attr("disabled", "disabled"),
            "GET" === n(e).attr("method").toUpperCase()
              ? (a = e.serialize())
              : "POST" === n(e).attr("method").toUpperCase() &&
                (a = new FormData(e)),
            l && "undefined" !== l && (u = "&guid=" + l),
            "measureSupport" in ajxq &&
              n.each(ajxq.measureSupport, function (e, t) {
                "function" == typeof t.abort
                  ? t.abort()
                  : ajxq.measureSupport.splice(e, 1);
              }),
            n
              .ajax({
                method: n(e).attr("method"),
                global: !0,
                url: n(e).attr("action") + u,
                data: a,
                processData: !1,
                contentType: !1,
              })
              .done(function (e, a, i) {
                if (
                  ("undefined" != typeof originMeasureGuid &&
                    yametrika.goal(55621495, originMeasureGuid + "_form_send", {
                      lead: {
                        PAGE_PATH: originMeasureGuid,
                      },
                    }),
                  n("#siteModal").data("confirm-hide", 1),
                  r.length &&
                    202 !== i.status &&
                    (r.removeAttr("disabled"),
                    n(".modal.show").length &&
                      icHelper.afterLoadMore(r, "", !0)),
                  (202 !== i.status && 200 !== i.status) ||
                    ("function" == typeof t ? t(e) : window.location.reload()),
                  206 === i.status)
                ) {
                  var o = JSON.parse(e),
                    d = o.route,
                    l = o.title,
                    u = o.form_name;
                  n.get(d).done(function (e) {
                    icHelper.showModal(
                      e,
                      l,
                      void 0,
                      "modal800 modal_accordion"
                    ),
                      u && initDropZone(u);
                  });
                }
                n(s).length > 0 &&
                  (n(s).text("Вы подали заявку"),
                  n(s).attr("disabled", !0),
                  n(s).find("i").remove()),
                  icHelper.selectJs(),
                  icHelper.etpGpbInit();
              })
              .fail(function (t, a, o) {
                if (n("#isStagedMeasure").length) {
                  (m = n(".invalid-feedback.d-block:first").closest(
                    ".measure_form_step_item"
                  )).length &&
                    (m
                      .find(".measure_form_step_item_button")
                      .hasClass("mShowSendButtons") ||
                      (n(".measure_form_step_item").hide(),
                      m.show(),
                      n("#measureBaseControls").hide(),
                      n(".bsContainerVis").hide())),
                    n("#" + m.data("step") + "_stap_ind")
                      .removeClass("active1")
                      .addClass("active");
                  var s = !1;
                  n(".stage-nav-ind").each(function (e) {
                    s && n(this).removeClass("active").removeClass("active1"),
                      n(this).attr("id") == m.data("step") + "_stap_ind" &&
                        (s = !0);
                  });
                }
                if (
                  (n(".invalid-feedback.d-block").remove(),
                  n([document.documentElement, document.body]).animate(
                    {
                      scrollTop: n(e).offset().top - 100,
                    },
                    100
                  ),
                  n("#measurerequestContEdit").length &&
                    n("#measurerequestContEdit").is(":visible") &&
                    n("#measurerequestContEdit").trigger("click"),
                  r.length &&
                    (r.removeAttr("disabled"),
                    n(".modal.show").length &&
                      icHelper.afterLoadMore(r, "", !0)),
                  400 === t.status)
                )
                  d(t.responseJSON.fields, t.responseJSON.global, n(e));
                else if (500 === t.status) {
                  var l =
                      "Ошибка сервера, попробуйте отправить заявку позднее.",
                    u = "Ошибка",
                    c = t.responseJSON;
                  c &&
                    c.error &&
                    "Требуется авторизация" === c.error &&
                    ((l = "<center>" + c.error + "</center>"),
                    (u = "<b>Внимание!</b>")),
                    icHelper.showModalAlert(u, l),
                    i.T.sendError({
                      response_status: t.status,
                      response_text: t.responseText,
                      measure_guid:
                        "undefined" != typeof originMeasureGuid &&
                        originMeasureGuid
                          ? originMeasureGuid
                          : n("#callMeasureForm").length
                          ? n("#callMeasureForm").attr("data-measureid")
                          : "не удалось определить",
                    });
                } else
                  icHelper.showModalAlertRedirectOnClose(
                    "Ошибка",
                    t.responseText
                  ),
                    i.T.sendError({
                      response_status: t.status,
                      response_text: t.responseText,
                      measure_guid:
                        "undefined" != typeof originMeasureGuid &&
                        originMeasureGuid
                          ? originMeasureGuid
                          : n("#callMeasureForm").length
                          ? n("#callMeasureForm").attr("data-measureid")
                          : "не удалось определить",
                    });
                if (
                  (n(".krug_del").length && n(".krug_del").click(),
                  n("#isStagedMeasure").length)
                ) {
                  var m;
                  (m = n(".invalid-feedback.d-block:first").closest(
                    ".measure_form_step_item"
                  )).length &&
                    (m
                      .find(".measure_form_step_item_button")
                      .hasClass("mShowSendButtons") ||
                      ("last" === n(".measure_stepper:visible").data("stepmode")
                        ? (n(".mesStepNext").hide(),
                          n("#measureBaseControls").show(),
                          n(".bsContainerVis").show(),
                          n("#npContainer").hide())
                        : (n("#measureBaseControls").hide(),
                          n(".bsContainerVis").hide()))),
                    n("#" + m.data("step") + "_stap_ind")
                      .removeClass("active1")
                      .addClass("active");
                  s = !1;
                  n(".stage-nav-ind").each(function (e) {
                    s && n(this).removeClass("active").removeClass("active1"),
                      n(this).attr("id") == m.data("step") + "_stap_ind" &&
                        (s = !0);
                  });
                }
                if (n(".isStagedForm").length) {
                  var p = n(".invalid-feedback.d-block:first")
                    .closest(".tab-pane")
                    .attr("id");
                  n('.nav-item > a[href="#' + p + '"]').click();
                }
              })
              .always(function () {
                icHelper.removeLoader(),
                  n("#sendMeasureSupportRequest").removeAttr("disabled"),
                  n("#sendMeasureSupportRequest").hasClass(
                    "submitNovatorForm"
                  ) &&
                    n("#sendMeasureSupportRequest").attr(
                      "disabled",
                      "disabled"
                    ),
                  icHelper.afterLoadMore(r, "", !0);
              });
        }),
        (window.callbackCEDoneAll = function () {
          if (n(".form_bot_js").length) {
            n(".form_bot_js").hide();
            n(".form_bot_js")
              .parent()
              .append(
                '<div class="resultform_bot_js block_feedback_end"><div class="bfe_img"><img src="/build/img/sent_ico.svg"></div><div class="bfe_text">Ваше обращение принято и находится в обработке</div><div class="bfe_text1"> Мы свяжемся с вами в течение 2 рабочих дней по указанному телефону или почте</div><div class="bfe_btn"><a onclick="window.closeResultAll();return false;" class="btn btn-grad" data-dismiss="modal">Закрыть</a></div></div>'
              );
          }
        }),
        (window.closeResultAll = function () {
          n(".resultform_bot_js").length &&
            (n(".resultform_bot_js").remove(), n(".form_bot_js").show());
        }),
        (window.measureSaveDraft = function (e, t) {
          var a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "no",
            r = arguments.length > 3 ? arguments[3] : void 0;
          return (function (e) {
            e = document.getElementById("measure_ajax_form" + t);
            var o = new FormData(e),
              d = Routing.generate("measureSupportSaveDraft", {
                id: t,
                step: a,
              });
            "undefined" != typeof userdata &&
              userdata &&
              (d = Routing.generate("measureSupportSaveDraft", {
                id: t,
                userdata: userdata,
              })),
              s(),
              n
                .ajaxQueue(
                  {
                    method: "POST",
                    global: !0,
                    url: d,
                    data: o,
                    processData: !1,
                    contentType: !1,
                  },
                  "measureSupport"
                )
                .done(function (e) {
                  if ("check" in e) {
                    if (!0 === e.check.lock) {
                      s();
                      var o = "Ваша сессия истекла";
                      return (
                        "message" in e.check &&
                          e.check.message &&
                          (o = e.check.message),
                        icHelper.showModalAlert(
                          o,
                          '<div class="text-center"><button onclick="location = Routing.generate(\'myProfile\');" type="button" class="btn-light btn">Ок</button></div>'
                        ),
                        void i.T.sendError({
                          response_status: jqXHR.status,
                          response_text: jqXHR.responseText,
                          measure_guid:
                            "undefined" != typeof originMeasureGuid &&
                            originMeasureGuid
                              ? originMeasureGuid
                              : n("#callMeasureForm").length
                              ? n("#callMeasureForm").attr("data-measureid")
                              : "не удалось определить",
                        })
                      );
                    }
                    window.measureChecksInfo = e.check;
                  }
                  "dbFilesGuids" in e &&
                    measureFileHelper.updateWaitList(e.dbFilesGuids),
                    "no" !== a
                      ? (function (e, t, a) {
                          var i = "page";
                          "undefined" != typeof measureCurrentMode &&
                            null !== measureCurrentMode &&
                            (i = measureCurrentMode);
                          var r = Routing.generate("measureSupportRequest", {
                            id: queryGuid,
                            guid: e,
                            currentMode: i,
                            stp: t,
                          });
                          "frame" === i &&
                            "undefined" != typeof iframeuserdata &&
                            null !== iframeuserdata &&
                            (r = Routing.generate("iframeMeasure", {
                              id: queryGuid,
                              measureId: e,
                              currentMode: i,
                              stp: t,
                              userdata: iframeuserdata,
                              system_id: systemId,
                              timestamp: timestamp,
                              nonce: nonce,
                              signature: signature,
                            }));
                          n.get(r).done(function (e) {
                            icHelper.loaderSpin(),
                              (initMeasureGroups = n(e)
                                .find(".initgroupsinfodiv:first")
                                .html()),
                              n(e)
                                .find("[data-step]")
                                .each(function () {
                                  var e = n(this).data("step");
                                  n('[data-step="' + e + '"]').html(
                                    n(this).html()
                                  );
                                }),
                              c(queryGuid),
                              m(),
                              icHelper.removeLoader(),
                              "function" == typeof a && a();
                          });
                        })(t, a, r)
                      : "function" == typeof r && r();
                });
          })(e);
        }),
        (window.moveFileToInWork = function (e) {
          return !0;
        }),
        (window.backToFormHolder = function (e) {
          return !0;
        }),
        (window.moveToErrors = function (e) {
          return !0;
        }),
        n(document).on("click", ".btn-skipcheck", function () {
          var e = n(this);
          n.get(
            Routing.generate("measure_skip_field_check", {
              measure: e.data("measure"),
              field: e.data("apiparam"),
            })
          ),
            backToFormHolder(n('[data-ifn="' + e.data("apiparam") + '"]'));
        }),
        n(document).on("click", ".btn-changecheck", function () {
          var e = n(this),
            t = n('[data-ifn="' + e.data("apiparam") + '"]')
              .find(".ii_validation")
              .find(".validation_ul");
          n.get(
            Routing.generate("measure_skip_field_check", {
              measure: e.data("measure"),
              field: e.data("apiparam"),
            })
          ),
            t.empty(),
            n(this).closest(".fChkItem").find(".ii_validation").hide(),
            n(this).closest(".fChkItem").find(".krug_del").trigger("click"),
            backToFormHolder(n('[data-ifn="' + e.data("apiparam") + '"]'));
        }),
        n(document).on("stateUpdate", "#need_sign_list", function () {
          0 == n(this).find(".filelist").find(".mSignItem").length
            ? n(this).hide(500)
            : n(this).show(400);
        }),
        n(document).on("click", "#measureOnlineSign", function () {
          originMeasureGuid;
          var e = n(this),
            t = n(this).data("idx"),
            a = [],
            i = [];
          n("#requestInClGenFiles")
            .find(".measureGeneratedFile")
            .each(function () {
              var e = n(this).attr("href"),
                t = n(this).attr("data-ftype");
              i[t] = a[t] = icHelper.downloadFileByLink(
                e,
                function (e) {
                  return (a[t] = e), Promise.resolve(!0);
                },
                function () {
                  Promise.reject("Ошибка получения файла");
                }
              );
            }),
            Promise.all(i).then(function (i) {
              !(function () {
                n("#signaRIC").length &&
                  n([document.documentElement, document.body]).animate(
                    {
                      scrollTop: n("#signaRIC").offset().top - 100,
                    },
                    300
                  );
                e.attr("disabled", "disabled"),
                  new SignPluginBlitz(
                    n("#signaRIC"),
                    a,
                    function (e) {
                      var i = [],
                        r = Routing.generate("maesureSignXmlOnlineMethod", {
                          xml: t,
                        }),
                        o = Routing.generate("maesureSignPdfOnlineMethod", {
                          pdf: t,
                        }),
                        s = "";
                      for (var d in a)
                        (s =
                          "pdf" === d
                            ? o
                            : "xml" === d
                            ? r
                            : Routing.generate("measureMakeSignForRppBuilded", {
                                guid: d,
                              })),
                          (i[d] = n.ajax({
                            method: "POST",
                            global: !0,
                            data: {
                              sign: e.signatures[d],
                            },
                            url: s,
                          }));
                      Promise.all(i).then(
                        function (e) {
                          n("#measureOnlineSign").fadeOut(500),
                            n("#measureOnlineSign").removeAttr("disabled"),
                            n("#signInfoText").fadeOut(500),
                            n("#sendMeasureSupportRequest").show(),
                            n("#sendMeasureSupportRequest").attr(
                              "disabled",
                              !1
                            );
                        },
                        function (e) {
                          icHelper.showModalAlert(
                            "Ошибка подписания заявки, попробуйте еще раз"
                          );
                        }
                      );
                    },
                    function () {
                      icHelper.showModalAlert(
                        "Не удалось подписать файл",
                        error.message
                      );
                    }
                  ).init();
              })();
            });
        }),
        n(document).on("click", "#measureSignByList", function () {
          for (var e in (n("#measureSignHolder").empty().show(),
          window.measureSignFileList)) {
            var t = n('.mSignItem[data-remoteguid="' + e + '"]').length
              ? n('.mSignItem[data-remoteguid="' + e + '"]').data("fieldid")
              : n('.mSignItem[data-localguid="' + e + '"]').data("fieldid");
            n('[value="' + e + '"]')
              .closest(".form-group")
              .find('.iasFileHolderContainerCls[apiparam="' + t + '"]')
              .length || delete window.measureSignFileList[e];
          }
          new SignPluginBlitz(
            n("#measureSignHolder"),
            window.measureSignFileList,
            function (e) {
              for (var t in e.signatures) {
                var a = n('.mSignItem[data-remoteguid="' + t + '"]').length
                    ? n('.mSignItem[data-remoteguid="' + t + '"]').data(
                        "fieldid"
                      )
                    : n('.mSignItem[data-localguid="' + t + '"]').data(
                        "fieldid"
                      ),
                  i = n('[value="' + t + '"]')
                    .closest(".form-group")
                    .find('.iasFileHolderContainerCls[apiparam="' + a + '"]')
                    .attr("id")
                    .replace("holder_", ""),
                  r = e.signatures[t]
                    .replace(/\r?\n/g, "")
                    .replace("-----BEGIN CMS-----", "")
                    .replace("-----END CMS-----", ""),
                  o = new Blob([r], {
                    type: "text/plain",
                  });
                window["documentUploader_sign_" + i].addFile(o),
                  n('ul[data-localguid="' + t + '"]').length
                    ? n('ul[data-localguid="' + t + '"]')
                        .find(".signHold")
                        .text("Документ подписан")
                        .attr("data-signed", 1)
                    : n('ul[data-remoteguid="' + t + '"]')
                        .find(".signHold")
                        .text("Документ подписан")
                        .attr("data-signed", 1),
                  n("#signfile_" + i).hide(),
                  delete window.measureSignFileList[t];
              }
              n("#need_sign_list").trigger("stateUpdate"),
                n("#measureSignByList").closest(".doc_area_podpis").hide();
            },
            function () {
              icHelper.showModalAlert(
                "Не удалось подписать файл",
                error.message
              );
            }
          ).init();
        }),
        n(document).on("updateFilesContainers", ".docBlockHolder", function () {
          0 == n(this).find(".fChkItem").length
            ? n(this).hide(500)
            : n(this).show(400);
        }),
        n(document).on(
          "click",
          ".send-starthub-message, .continue-starthub-request",
          function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              n(this).attr("disabled", "disabled").addClass("in-process"),
              icHelper.loaderSpin(),
              n('#siteModal form[name="measure_support_request"]').length &&
                n('#siteModal form[name="measure_support_request"]').submit();
          }
        ),
        n(document).on("click", "#sendMeasureSupportRequest", function (e) {
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            n(this).attr("disabled", "disabled"),
            icHelper.loaderSpin(),
            "0494914bd6a94268a1de0b52d10d373b" === originMeasureGuid)
          ) {
            var t = n("#userProjects").val();
            n("input.ivestProjGuid").val(t);
          }
          n(this).data("target") && n("#" + n(this).data("target")).length
            ? n("#" + n(this).data("target")).submit()
            : n(this).parents("#iframeMeasureHolder").length
            ? n(this)
                .parents("#iframeMeasureHolder")
                .first()
                .find("form")
                .submit()
            : n('#siteModal form[name="measure_support_request"]').length
            ? n('#siteModal form[name="measure_support_request"]').submit()
            : n("#measure_ajax_form").submit();
          var a =
            !!n(this).parents("form").attr("action") &&
            n(this)
              .parents("form")
              .attr("action")
              .match(/measure\/([^\/!?]+)/);
          a &&
            ("f5d670c758e148a5a7ff5ce5c23948f9" === (a = a[1]) ||
              "0494914bd6a94268a1de0b52d10d373b" === a ||
              "0b1fa8c95728417caad38e32624b9bd1" === a ||
              "2599dccd3ff5425b8191f0e8900e531a" === a) &&
            icHelper.sendYM("form_request", function () {});
        }),
        n(document).on("click", "#measureIframeBuild", function () {
          var e = n(this).data("measure");
          n(this).attr("disabled", "disabled"), icHelper.loaderSpin();
          var t = n(this),
            a = n(this).data("idx"),
            i = document.getElementById("measure_ajax_form" + e),
            r = new FormData(i);
          n(".invalid-feedback.d-block").remove(),
            n
              .ajax({
                method: "POST",
                global: !0,
                url: Routing.generate("buildMeasureRequestData", {
                  measureId: e,
                  formIdx: a,
                }),
                data: r,
                processData: !1,
                contentType: !1,
                formObj: i,
              })
              .done(function (e) {
                n("#formLockerRequestIncluster").css("display", "flex"),
                  n("#requestInClGenFiles").empty(),
                  n.each(e.docLinks, function (e, t) {
                    n("#requestInClGenFiles").append(
                      n("<a/>")
                        .attr("href", t.url)
                        .attr("target", "_blank")
                        .attr("data-ftype", t.guid)
                        .text('Скачать документ "' + t.name + '"')
                        .addClass(
                          "text-under color_a newWindow measureGeneratedFile"
                        )
                    ),
                      n("#requestInClGenFiles").append(n("<br/>"));
                  }),
                  n("#requestInClGenFiles").append(
                    n('<div class="measure_mh"></div>')
                  ),
                  n("#measureIframeBuild").hide(),
                  1 == t.data("needsign")
                    ? (n("#measureOnlineSign").show(),
                      n("#measureOnlineSign").removeAttr("disabled"))
                    : (n("#sendMeasureSupportRequest").show(),
                      n("#sendMeasureSupportRequest").attr("disabled", !1)),
                  n("#signInfoText").show();
              })
              .fail(u)
              .always(function () {
                t.removeAttr("disabled"), icHelper.removeLoader();
              });
        }),
        n(document).on("click", ".ii_exp_but", function () {
          icHelper.loaderSpin();
          var e = "ii_exp_mes_";
          return (
            n
              .get(Routing.generate("measure_custom_exp_ii"))
              .done(function (t) {
                icHelper.showModal(
                  t,
                  "",
                  "#siteModal",
                  e + "measureModal modal_not_header",
                  function () {
                    n("." + e + "measureModal").data("confirm-hide", 0);
                    var t = new Date(),
                      a =
                        t.getFullYear() +
                        "-" +
                        ("0" + (t.getMonth() + 1)).slice(-2) +
                        "-" +
                        ("0" + t.getDate()).slice(-2),
                      i =
                        t.getFullYear() +
                        "-" +
                        ("0" + (t.getMonth() + 1)).slice(-2) +
                        "-" +
                        ("0" + (t.getDate() + 1)).slice(-2),
                      r = n("." + e + "measureModal").find("form");
                    r
                      .find('input[type="date"]')
                      .attr("onkeydown", "return false")
                      .attr("min", a),
                      r
                        .find(".cbxDtContainer")
                        .find('input[type="date"]')
                        .attr("max", "2025-07-01")
                        .attr("min", i),
                      n("." + e + "measureModal").on(
                        "hide.bs.modal",
                        function (t) {
                          if (
                            1 !=
                            n("." + e + "measureModal").data("confirm-hide")
                          )
                            return (
                              t.preventDefault(),
                              t.stopImmediatePropagation(),
                              icHelper.showModalConfirm(
                                'Заявка не отправлена <div class="text_pod">При закрытии формы данные не будут сохранены. Вы действительно хотите<br> закрыть форму?</div>',
                                function () {
                                  n("." + e + "measureModal").data(
                                    "confirm-hide",
                                    1
                                  ),
                                    n("." + e + "measureModal").modal("hide"),
                                    n("." + e + "measureModal").data(
                                      "confirm-hide",
                                      0
                                    );
                                },
                                function () {}
                              ),
                              !1
                            );
                        }
                      );
                  }
                ),
                  setTimeout(icHelper.cangeFileAdd(), 250);
              })
              .always(function () {
                icHelper.removeLoader();
              }),
            !1
          );
        }),
        n(document).on("change", ".showInnerDT", function () {
          this.checked
            ? n(this).closest(".cbxDtContainer").find(".cbxHiddenDt").show()
            : (n(this)
                .closest(".cbxDtContainer")
                .find("input[type='date']")
                .val(""),
              n(this).closest(".cbxDtContainer").find(".cbxHiddenDt").hide());
        }),
        n(document).on("click", ".measureFormAddMore", function () {
          var e = n(this)
            .closest(".measureFieldGroup")
            .find(".measureGoupedFieldItem:hidden")
            .first();
          n(this).before(e),
            e.show(),
            n(this)
              .closest(".measureFieldGroup")
              .find(".measureGoupedFieldItem:hidden")
              .first().length || n(this).hide();
        }),
        n(document).on("click", ".measureFormGroupHideItem", function () {
          var e = n(this).closest(".measureGoupedFieldItem");
          return (
            e.find(".removeMeasureFileUpload").each(function () {
              n(this).trigger("click");
            }),
            e.find("input").each(function () {
              n(this).val("");
            }),
            n(this)
              .closest(".measureFieldGroup")
              .find(".measureGoupedFieldItem:hidden")
              .first().length ||
              n(this)
                .closest(".measureFieldGroup")
                .find(".measureFormAddMore")
                .show(),
            e.hide(),
            !1
          );
        }),
        n(document).on("change", "select[data-optselect='1']", function () {
          var e = n(this).find("option:selected").html(),
            t = n(this).data("optgroup");
          -1 !== e.indexOf("Иное")
            ? n("[data-optgroup='" + t + "']")
                .not(n(this))
                .closest(".form-group")
                .show()
            : n("[data-optgroup='" + t + "']")
                .not(n(this))
                .closest(".form-group")
                .hide();
        }),
        n(document).on(
          "click",
          ".fund-request-btn, .angel-request-btn",
          function () {
            var e = n(this);
            if (!e.hasClass("measureIasButton")) {
              e.addClass("measureIasButton");
              var t = e.is(".fund-request-btn")
                  ? '<div class="div_txt">Вы подаете заявку на вступление в Клуб <div class="d-md-block d-none"></div>инвесторов МИК в качестве венчурного фонда. <div class="d-md-block d-none"></div>Если вы хотите подать заявку от <div class="d-md-block d-none"></div>имени бизнес-ангела, пожалуйста, авторизуйтесь <div class="d-md-block d-none"></div>как физическое лицо.</div>'
                  : '<div class="div_txt">Вы подаете заявку на вступление в Клуб <div class="d-md-block d-none"></div>инвесторов МИК в качестве бизнес-ангела. Если <div class="d-md-block d-none"></div>вы хотите подать заявку от имени венчурного <div class="d-md-block d-none"></div>фонда, пожалуйста, авторизуйтесь <div class="d-md-block d-none"></div>как юридическое лицо.</div>',
                a = e.is(".fund-request-btn")
                  ? "Вступить как фонд"
                  : "Вступить как бизнес-ангел",
                i = e.is(".fund-request-btn")
                  ? "fund-prepopup"
                  : "angel-prepopup",
                r =
                  '<br><br><div class="modal_btn modal_btn_alert btn_center"><button class="btn btn-grad btn-yes">' +
                  a +
                  "</button></div>";
              icHelper.showModalConfirm(
                "Уважаемый пользователь!",
                function () {
                  e.click().removeClass("measureIasButton");
                },
                function () {
                  e.removeClass("measureIasButton");
                },
                t + r,
                i
              );
            }
          }
        ),
        n(document).on(
          "keyup keydown",
          'input[data-dadataaddresssearch="1"]',
          function () {
            if (!(n(this).val().length < 3)) {
              var e = n(this),
                t = e.closest(".suggests_wrap"),
                a = ".loader_all";
              n.ajaxQ.abortAll(),
                t.addClass("suggests_open"),
                icHelper.loaderSpin(e.siblings(".suggests_list")),
                n(a).hide(),
                n(a).first().show(),
                n.ajax({
                  type: "post",
                  global: !0,
                  url: Routing.generate("getAddress", {
                    addr: e.val(),
                  }),
                  success: function (i) {
                    var r = JSON.parse(i),
                      o =
                        '<li value="none"><span class="">Выберите адрес:</span></li>';
                    n.each(r, function (t, a) {
                      o +=
                        '<li value="' +
                        a +
                        '" class="findAddr findAddrMeasure">' +
                        a.replace(
                          new RegExp(e.val(), "i"),
                          '<span class="sp_color">$&</span>'
                        ) +
                        "</li>";
                    }),
                      t.find("ul").html(o),
                      n(a).first().remove(),
                      n(a).length > 0 && n(a).first().show();
                  },
                  error: function (e) {
                    n(a).first().remove(),
                      n(a).length > 0 && n(a).first().show();
                  },
                });
            }
          }
        ),
        n(document).on("click", ".findAddrMeasure", function () {
          var e = n(this),
            t = e.closest(".suggests_wrap");
          e.parents(".suggests_wrap").find("input").val(e.attr("value")),
            t.find("ul").html(""),
            t.removeClass("suggests_open");
        }),
        n(document).on("click", ".measureBundleButton", function (e) {
          e.preventDefault();
          var t = n(this).attr("data-measureid"),
            a = n(this).attr("data-class"),
            i = {
              id: t,
              viewmode: "inline",
            },
            r = n(this).attr("data-basedparams");
          void 0 !== r &&
            !1 !== r &&
            (i.params = n(this).attr("data-basedparams"));
          var o = n(this).attr("data-viewmode");
          void 0 !== o &&
            !1 !== o &&
            (i.viewmode = n(this).attr("data-viewmode")),
            n
              .get(Routing.generate("measureBundleGetForm", i))
              .done(function (e) {
                console.log("Запрос бандла"),
                  icHelper.showModal(
                    e.content +
                      ' <div class="modal_text_bottom2" id="bootomInforErr"><span class="fwb">Внимание:</span> при возникновении технических неполадок, просьба сообщить об ошибке в службу поддержки на электронную почту <a href="mailto:support@i.moscow">support@i.moscow</a>. Пожалуйста, прикрепите к сообщению фото и видеозапись экрана, а также ИНН компании для увеличения скорости обработки запроса.</div>',
                    null,
                    null,
                    a
                  ),
                  n("#" + e.iframe_id).trigger("load");
              });
        }),
        n(document).on("click", ".measureIasButton", function (e) {
          e.preventDefault();
          var t = n(this);
          t.hasClass("btn_loader_modal_js") && icHelper.beforeLoad(t);
          var a = n(this).attr("data-measureid");
          o = a;
          var r,
            s = n(this).attr("data-customtitle"),
            d = n(this).attr("data-customTitleSub"),
            l = n(this).attr("data-guid"),
            u = n(this).data("mode") ? n(this).data("mode") : "modal";
          r = n(this).attr("data-class")
            ? "modal800 modal_tit_center " + n(this).attr("data-class")
            : "modal800 modal_tit_center ";
          var p = n(this).attr("data-checks");
          function f(e, a) {
            "page" === e
              ? n("#measureOnPageContent").html(a.draftQuestion)
              : icHelper.showModal(
                  a.draftQuestion,
                  "У вас есть черновик",
                  "#siteSubsModal",
                  r
                ),
              icHelper.removeLoader(),
              n(".continueDraft")
                .unbind("click")
                .click(function (e) {
                  var t = n(this).data("dguid");
                  icHelper.hideModal("siteSubsModal"),
                    n(".ms_cont").length
                      ? icHelper.loaderSpin(".ms_cont")
                      : icHelper.loaderSpin(),
                    h(t, !0);
                }),
              n(".createNewRequest")
                .unbind("click")
                .click(function (e) {
                  icHelper.loaderSpin();
                  var a = n(this).data("dguid"),
                    r = n(this).data("origin");
                  icHelper.hideModal("siteSubsModal"),
                    n
                      .get(
                        Routing.generate("measureSupportRecreateDraft", {
                          id: a,
                          measure: r,
                        })
                      )
                      .done(function (e) {
                        h(e.guid, !0);
                      })
                      .fail(function (e) {
                        icHelper.showModalAlert(
                          '<div class="tam_img tam_img2"><img src="/build/img/ico80_warn.svg"></div><div class="tam_tit">Возникла ошибка</div><div class="tam_text tam_text1 fw500 mb40m">Невозможно выполнить операцию, попробуйте обновить страницу и повторить попытку</div> <button class="btn btn-grad" data-dismiss="modal">Понятно</button>',
                          ""
                        ),
                          i.T.sendError({
                            response_status: e.status,
                            response_text: e.responseText,
                            measure_guid:
                              "undefined" != typeof originMeasureGuid &&
                              originMeasureGuid
                                ? originMeasureGuid
                                : n("#callMeasureForm").length
                                ? n("#callMeasureForm").attr("data-measureid")
                                : "не удалось определить",
                          }),
                          icHelper.removeLoader(),
                          !n(".ms_cont").length &&
                            t.hasClass("measure_loader_spin_js") &&
                            icHelper.loaderSpin();
                      });
                });
          }
          function h(e, o) {
            return (
              n
                .get(
                  Routing.generate("measureSupportRequest", {
                    id: e,
                    guid: l,
                    currentMode: u,
                  })
                )
                .done(function (e) {
                  var i = "Заявка на получение поддержки";
                  if (
                    (s && (i = s),
                    "page" === u
                      ? (n("#measureOnPageContent").html(e), c())
                      : icHelper.showModal(
                          e,
                          i,
                          "#siteModal",
                          a + "measureModal " + r,
                          function () {
                            c(),
                              t.hasClass("btn_loader_modal_js") &&
                                icHelper.afterLoadMore(t, "", !0);
                          }
                        ),
                    m(".request_info"),
                    "5168cd27787a489c866e55267be29b39" === a)
                  ) {
                    var o = document.createElement("div");
                    (o.innerHTML =
                      '<div class="nav-questions"><div class="q-top">Остались вопросы?</div><div class="op08"><a class="q-line" href="mailto:novator@mos.ru"><svg fill="#383B4A" class="svg-icon" width="16" height="16"><use xlink:href="/svg/all-icons2.svg#email"></use></svg>novator@mos.ru</a><a href="https://t.me/Moscow_Novator" class="q-line" ><svg class="svg-icon" width="16" height="16"><use xlink:href="/svg/all-icons.svg#telegram2"></use></svg>@Moscow_Novator</a></div></div>'),
                      document
                        .getElementsByClassName("form_flex_stage")[0]
                        .appendChild(o);
                  }
                  if ("b67602975ffd438da71baa525626a765" === a) {
                    var d = t.data().guid;
                    n("#measure_support_request_p10737873").val(d);
                  }
                  yametrika.goal(55621495, a + "_form_open");
                })
                .fail(function (e) {
                  412 === e.status
                    ? (icHelper.showModal(
                        e.responseText,
                        "",
                        "#siteModal",
                        "modal800 modal_tit_center "
                      ),
                      i.T.sendError({
                        response_status: e.status,
                        response_text: e.responseText,
                        measure_guid:
                          "undefined" != typeof originMeasureGuid &&
                          originMeasureGuid
                            ? originMeasureGuid
                            : n("#callMeasureForm").length
                            ? n("#callMeasureForm").attr("data-measureid")
                            : "не удалось определить",
                      }))
                    : (icHelper.showModalAlert(
                        '<div class="tam_img tam_img2"><img src="/build/img/ico80_warn.svg"></div><div class="tam_tit">Возникла ошибка</div><div class="tam_text tam_text1 fw500 mb40m">Невозможно выполнить операцию, попробуйте обновить страницу и повторить попытку</div> <button class="btn btn-grad" data-dismiss="modal">Понятно</button>',
                        ""
                      ),
                      i.T.sendError({
                        response_status: e.status,
                        response_text: e.responseText,
                        measure_guid:
                          "undefined" != typeof originMeasureGuid &&
                          originMeasureGuid
                            ? originMeasureGuid
                            : n("#callMeasureForm").length
                            ? n("#callMeasureForm").attr("data-measureid")
                            : "не удалось определить",
                      }));
                })
                .always(function () {
                  !n(".ms_cont").length && t.hasClass("measure_loader_spin_js")
                    ? setTimeout(function () {
                        icHelper.removeLoader();
                      }, 300)
                    : icHelper.removeLoader(),
                    t.hasClass("btn_loader_modal_js") &&
                      icHelper.afterLoadMore(t, "", !0);
                }),
              !1
            );
          }
          void 0 === p && (p = "none"),
            icHelper.loaderSpin(".ms_cont"),
            !n(".ms_cont").length &&
              t.hasClass("measure_loader_spin_js") &&
              icHelper.loaderSpin(),
            n.authAjax({
              url: Routing.generate("ajax_measure_before_form", {
                measureId: a,
                queryAccess: p,
              }),
              success: function (e) {
                if (!e.canSendMeasure) {
                  var i = n("<ul/>").addClass("");
                  n.each(e.user_type_restrict, function (e, t) {
                    var a = n("<li/>").text(t.name);
                    i.append(a);
                  });
                  var o = n("<div/>")
                    .addClass("modal_btn btn_center")
                    .append(
                      n("<div/>")
                        .append(
                          n("<div/>").text(
                            "Данная мера доступна только следующим категориям пользователей: "
                          )
                        )
                        .append(i)
                    )
                    .append(
                      n("<a/>")
                        .addClass("btn btn-grad")
                        .text("Вернуться")
                        .attr(
                          "href",
                          Routing.generate("measureSupportsCard", {
                            id: a,
                          })
                        )
                    );
                  return (
                    "page" === u
                      ? n("#measureOnPageContent").empty().append(o)
                      : icHelper.showModal(
                          o,
                          "У данной меры есть ограничения",
                          "#siteSubsModal",
                          r
                        ),
                    !1
                  );
                }
                if (
                  "accessControl" in e &&
                  "checkAccessResult" in e.accessControl
                ) {
                  var s = n("<div/>"),
                    l = n("<div/>"),
                    c = 0,
                    m = !1;
                  if (
                    (n.each(e.accessControl.checkAccessResult, function (e, t) {
                      !0 !== t.result &&
                        (c++,
                        l.append(n("<div/>").html(t.message)),
                        "canResume" in t && t.canResume && (m = !0));
                    }),
                    c > 0)
                  ) {
                    if ((s.append(l), m)) {
                      e.queryGuid, e.canSaveDraft;
                      var p = n("<button/>")
                        .text("Продолжить")
                        .addClass("btn btn-grad");
                      p.on("click", function () {
                        icHelper.loaderSpin(),
                          "old_draft" in e && e.old_draft
                            ? f(u, e)
                            : h(e.queryGuid, e.canSaveDraft),
                          "page" != u && icHelper.hideModal("siteSubsModal");
                      }),
                        s.append(p);
                    }
                    if ("page" === u) n("#measureOnPageContent").html(s);
                    else {
                      d && m && d,
                        icHelper.showModal(s, d, "#siteSubsModal", r),
                        t.hasClass("mesar_farms_addClass_a") &&
                          0 != n("#modalBody").lenght &&
                          n("#modalBody a").addClass("btn btn-grad mt-6");
                    }
                    return;
                  }
                }
                "activeRestrict" in e &&
                "RestrictionType" in e.activeRestrict &&
                -1 === e.queryGuid.indexOf("_drf") &&
                "62c70259146943c1b82db96151ce6485" !== a
                  ? "page" === u
                    ? n("#measureOnPageContent").html(e.activeRestrict.html)
                    : icHelper.showModal(
                        e.activeRestrict.html,
                        void 0,
                        void 0,
                        r + " modal_not_header modal_not_header3 modal_new_mes"
                      )
                  : "old_draft" in e && e.old_draft
                  ? f(u, e)
                  : h(e.queryGuid, e.canSaveDraft),
                  "ce22d6ce639b45788e4701613a25dfc5" === a &&
                    n(document).on("change", "#cluster", function () {
                      n("#measure_support_request_p13712340").val(
                        n(this).val()
                      );
                    }),
                  "2f30da51a03d49ccbba3e6611973336e" === a &&
                    n(document).on("change", "#modalBody", function () {
                      n("#measure_support_request_p20667151").val(
                        "258da89a196b4c1794da584d26552595"
                      );
                    });
              },
              error: function (e, t, a) {
                icHelper.removeLoader();
              },
              complete: function () {
                !n(".ms_cont").length &&
                  t.hasClass("measure_loader_spin_js") &&
                  icHelper.removeLoader();
              },
            });
        }),
        n(document).on("click", ".measureTabLinker", function () {
          var e = n(this).data("current"),
            t = n(".stage-nav-ind.active"),
            a = t.data("current");
          return (
            e &&
              n("#" + e + "_step_cnt").length &&
              (n("#" + a + "_step_cnt").hide(),
              n("#" + e + "_step_cnt").show(),
              t.removeClass("active"),
              n("#" + e + "_stap_ind").addClass("active")),
            p(),
            !1
          );
        }),
        n(document).on("click", ".mesStepNext", function () {
          icHelper.loaderSpin();
          var e = queryGuid,
            t = document.getElementById("measure_ajax_form" + queryGuid),
            a = n("#measure_ajax_form" + queryGuid).serialize(),
            i = n(".measure_form_step_item:visible").data("step"),
            r = n(".stage-nav-ind.active"),
            o = r.data("next"),
            d = r.data("current");
          r.data("prev");
          if (
            n("#measure_support_request_" + d).length &&
            1 == n("#measure_support_request_" + d).attr("preval")
          )
            return icHelper.removeLoader(), c(), void p();
          if (
            n("#measure_support_request_" + o).length &&
            1 == n("#measure_support_request_" + o).attr("preval")
          ) {
            var l = Routing.generate("measureSupportSaveDraft", {
              id: e,
            });
            "undefined" != typeof userdata &&
              userdata &&
              (l = Routing.generate("measureSupportSaveDraft", {
                id: guid,
                userdata: userdata,
              })),
              s(),
              n
                .ajax(
                  {
                    method: "POST",
                    global: !0,
                    url: l,
                    data: a,
                  },
                  "measureSupport"
                )
                .always(function () {
                  m();
                });
          } else m();
          function c(e) {
            o &&
              n("#" + o + "_step_cnt").length &&
              (n("#" + d + "_step_cnt").hide(),
              n("#" + o + "_step_cnt").show(),
              r.removeClass("active"),
              r.addClass("completed"),
              n("#" + o + "_stap_ind").addClass("active"),
              n("#" + o + "_step_cnt")
                .find(".measure_form_step_item_button")
                .hasClass("mShowSendButtons") &&
                (n("#measureBaseControls").show(),
                n(".bsContainerVis").show())),
              e &&
                "preValidation" in e &&
                n.each(e.preValidation, function (e, t) {
                  n.each(t, function (e, t) {
                    var a = n("#prevalidation_" + t.api);
                    if (a.length) {
                      "true" === t.value
                        ? (a.addClass("form_status_ico green"),
                          a.find(".fsi_coment").html(""))
                        : "false" === t.value &&
                          a.addClass("form_status_ico red");
                      var i = n("<div/>");
                      t.description &&
                        i.append(
                          n("<div/>")
                            .addClass("form-field-description")
                            .html(t.description)
                        ),
                        t.typeCb ||
                          (a.hasClass("green") ||
                            a.hasClass("red") ||
                            null === t.value ||
                            "" == t.value ||
                            a.addClass("not_ico"),
                          i.append(
                            n("<div/>")
                              .addClass("form-group")
                              .append(
                                n("<input/>")
                                  .attr({
                                    disabled: "disabled",
                                    type: "text",
                                  })
                                  .val(t.value)
                                  .addClass("form-control")
                              )
                          )),
                        a.find(".fsi_coment").empty().append(i);
                    }
                  });
                }),
              p(),
              icHelper.removeLoader();
          }
          function m() {
            n.ajax({
              method: "POST",
              global: !0,
              data: a,
              url: Routing.generate("measureSupportValidationStep", {
                id: e,
                step: i,
              }),
              formObj: t,
            })
              .done(function (t) {
                -1 !== e.search("_drf")
                  ? measureSaveDraft(
                      document.getElementById("measure_ajax_form" + e),
                      e,
                      i,
                      c.bind(window, t)
                    )
                  : c(t);
              })
              .fail(u)
              .always(function () {});
          }
        }),
        n(document).on("click", ".mesStepPrev", function () {
          var e = n(".stage-nav-ind.active"),
            t = e.data("prev"),
            a = e.data("current");
          n("#measureBaseControls").hide(),
            n(".bsContainerVis").hide(),
            n("#formAdditionalInfoMessage").length &&
              n("#formAdditionalInfoMessage").hide(),
            t &&
              n("#" + t + "_step_cnt").length &&
              (n("#" + a + "_step_cnt").hide(),
              n("#" + t + "_step_cnt").show(),
              e.removeClass("active"),
              n("#" + t + "_stap_ind").removeClass("active1"),
              n("#" + t + "_stap_ind").addClass("active")),
            p();
        }),
        n(document).on("click", ".info_ct .nav-item", function () {
          n(".info_ct .tab-pane").removeClass("show"),
            n(".info_ct .tab-pane").removeClass("active"),
            n(".info_ct .tab-pane").addClass("fade"),
            n(".info_ct .nav-link").removeClass("active"),
            n(".info_ct .nav-link").attr("aria-selected", !1),
            n("html, body").animate(
              {
                scrollTop: 0,
              },
              "smooth"
            );
          var e = n(this).children(".nav-link"),
            t = e.data("tabid");
          e.addClass("active"),
            e.attr("aria-selected", !0),
            n(t).removeClass("fade"),
            n(t).addClass("show active");
        }),
        n(document).on(
          "input",
          "#measure_support_request_p3062237",
          function () {
            n(this).val().replace("C:\\fakepath\\", "");
            var e = n(this)[0].files[0].type;
            n(this)[0].files[0].size;
            -1 ==
              [
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ].indexOf(e) &&
              (icHelper.showModalAlert("Допустимый формат файла XLSX"),
              n(this).val(null),
              n(".fileinput-button2-pod").html(""));
          }
        ),
        n(document).on("click", ".measureIframeIasButton", function () {
          var e = n(this).attr("data-measureid"),
            t = n(this).attr("data-customtitle"),
            a = n(this).attr("data-inn");
          null == a && (a = null);
          var i =
              window.location.pathname.includes("/moskovskiy-akselerator") ||
              n(this).hasClass("innovators-request-btn") ||
              n(this).hasClass("edtech-request-btn") ||
              n(this).hasClass("industrial-request-btn"),
            r = {
              measureId: e,
              inn: a,
              acceleration: i,
            },
            o = "modal800",
            s = this;
          if (
            n(".company_owner").length ||
            "809f7b99439b454f9652a72c6d2f4d2a" === e
          ) {
            o = "coworkingReuqest";
            var d = n(".company_owner").data("id"),
              l = n(s).data().park,
              u = n(s).data().parkname;
            r = {
              measureId: e,
              inn: a,
              acceleration: i,
              company: d,
              park: l,
              parkname: u,
            };
          }
          if ("8d4a4f39171647869466777a29838261" !== e)
            return (
              icHelper.loaderSpin(),
              n
                .get(Routing.generate("iframeMeasure", r))
                .done(function (a) {
                  var i = "Заявка на получение поддержки";
                  if (
                    (t && (i = t),
                    icHelper.showModal(a, i, void 0, "modal800"),
                    "bb88b85852324992bbf99d9de41890e3" === e &&
                      (n("#measure_support_request_Inn")
                        .parent()
                        .addClass("d-none"),
                      n("#measure_support_request_Inn").val(1234567890),
                      n(".form-group:not(.mb-0)").each(function () {
                        var e = n(this).find("input").val()
                            ? n(this).find("input").val().length
                            : 0,
                          t = n("<span>", {
                            class: "charCounter",
                          }).append(
                            n("<span>", {
                              text: e || 0,
                              class: "counterSpan",
                            }),
                            n("<span>", {
                              text: " / 100",
                            })
                          );
                        n(this).addClass("with_counter").append(t);
                      }),
                      n(".form-group input").addClass("input_length").attr({
                        maxlength: "100",
                      }),
                      n(document).on(
                        "keyup keydown keypress",
                        ".form-group input",
                        function () {
                          n(this)
                            .parent()
                            .find(".charCounter .counterSpan")
                            .text(n(this).val().length);
                        }
                      )),
                    "coworkingReuqest" === o)
                  ) {
                    var r = n(s).data().park;
                    n("#measure_support_request_p7087007").val(r),
                      n("#measure_support_request_p7087053").hide(),
                      icHelper.selectJs(),
                      n("#spaces").on("change", function () {
                        n("#measure_support_request_p7087053").val(
                          n(this).val()
                        );
                      });
                  }
                  -1 === window.location.href.indexOf("/gameinnovators") &&
                    -1 === window.location.href.indexOf("/edtechb2b") &&
                    -1 === window.location.href.indexOf("/edtechb2c") &&
                    -1 === window.location.href.indexOf("/industrial40") &&
                    window.location.href.indexOf("/tech_contests") > 0 &&
                    n("a:contains(Положением)").length &&
                    (n("a:contains(Положением)")
                      .parents(".label_input")
                      .first()
                      .find('[type="checkbox"]')
                      .prop("checked", !0),
                    n("a:contains(Положением)")
                      .parents(".label_input")
                      .first()
                      .find('[type="checkbox"]')
                      .on("click", function () {
                        return !1;
                      }),
                    n("a:contains(Положением)")
                      .parents(".label_input")
                      .first()
                      .find('[type="checkbox"]')
                      .hide(),
                    n("a:contains(Положением)")
                      .parents(".label_input")
                      .first()
                      .find(".sp_all")
                      .hide(),
                    n("a:contains(Положением)")
                      .parents(".form-check")
                      .first()
                      .hide()),
                    setTimeout(icHelper.cangeFileAdd(), 250);
                })
                .always(function () {
                  icHelper.removeLoader();
                })
                .fail(function (e, t, a) {
                  icHelper.showModalAlert("Возникла ошибка");
                }),
              !1
            );
        }),
        n(document).on("click", "#measurerequestContEdit", function () {
          n("#formLockerRequestIncluster").css("display", "none"),
            n("#requestInClGenFiles").empty(),
            n("#measureIframeBuild").show(),
            n("#measureOnlineSign").hide(),
            n("#signInfoText").hide(),
            n("#measureSignHolder").hide(),
            n("#sendMeasureSupportRequest").hide();
        }),
        n(document).on("change", "[data-iasdignreq=1]", function () {
          n(this);
          var e = n(this).attr("id") + "_sign",
            t = n(this).attr("id");
          n(this)
            .closest(".form-group")
            .find(".sign_holder_container")
            .remove(),
            n(this)
              .closest(".form-group")
              .append(n("<div/>").addClass("sign_holder_container"));
          var a = n(this).closest(".form-group").find(".sign_holder_container");
          if (n(this)[0].files[0]) {
            a.append(
              n("<div/>")
                .addClass("sign_text_top")
                .text(
                  "Добавленный файл требуется подписать электронной подписью."
                )
            );
            var i =
                "sign_" +
                n(this).attr("id") +
                Math.random().toString(36).substring(2) +
                Math.random().toString(36).substring(2),
              r =
                "upl_" +
                n(this).attr("id") +
                Math.random().toString(36).substring(2) +
                Math.random().toString(36).substring(2);
            a.append(
              n("<div/>")
                .addClass("modal_btn sing_modal_btn")
                .append(
                  n("<button/>")
                    .attr({
                      type: "button",
                      "data-targetfield": e,
                      "data-signcont": i,
                      "data-fileelid": t,
                      id: "measureFileOnlineSign" + r,
                    })
                    .addClass("btn-primary btn measureFileOnlineSign")
                    .text("Подписать")
                )
                .append(
                  n("<div/>").attr({
                    id: i,
                  })
                )
                .append(
                  n("<input/>")
                    .attr({
                      type: "file",
                      id: r,
                      "data-targetfield": e,
                    })
                    .css("display", "none")
                )
            ),
              n(document).on(
                "click",
                "#measureFileAppendSign" + r,
                function () {
                  n("#" + r).trigger("click");
                }
              ),
              n(document).on("change", "#" + r, function () {
                var e = n(this)[0].files[0],
                  t = new FileReader(),
                  i = n(this).data("targetfield");
                t.addEventListener("loadend", function (e) {
                  var t = e.srcElement.result;
                  n("#" + i).val(t),
                    a
                      .empty()
                      .append(
                        n("<div/>").text("Файл подписан (прикреплена подпись)")
                      );
                }),
                  t.readAsText(e);
              }),
              n(document).on(
                "click",
                "#measureFileOnlineSign" + r,
                function () {
                  var e = "#" + n(this).data("targetfield"),
                    t = "#" + n(this).data("signcont"),
                    i = "#" + n(this).data("fileelid"),
                    r = n(i)[0].files[0];
                  new SignPluginBlitz(
                    n(t),
                    r,
                    function (t) {
                      n(e).val(t.signature),
                        a.empty().append(n("<div/>").text("Файл подписан"));
                    },
                    function () {
                      a.empty().append(
                        n("<div/>").text("Не удалось подписать файл")
                      );
                    }
                  ).init();
                }
              );
          } else a.empty();
        }),
        n(document).on("click", ".measureFrameIasButton", function () {
          var e = n(this).attr("data-measureid"),
            t = n(this);
          icHelper.beforeLoadMore(t),
            n
              .get(
                Routing.generate("iframeMeasure", {
                  measureId: e,
                })
              )
              .done(function (e) {
                return (
                  icHelper.showModal(
                    e,
                    "",
                    null,
                    "modal_event_back_call modal800"
                  ),
                  icHelper.afterLoadMore(t, !1, !0),
                  !1
                );
              });
        }),
        n(document).on("keypress", "#measure_support_request_Inn", function () {
          var e = n(this).val();
          if (e && e.length > 11) return !1;
        }),
        n(document).ready(function () {
          if (
            (n("#measure_form_user_phone").mask("+7 (999) 999-9999"),
            n("#iframeMeasureHolder").length)
          ) {
            n("#isStagedMeasure").length &&
              (n("#measureBaseControls").hide(), n(".bsContainerVis").hide()),
              icHelper.selectJs();
            var e = n(".subsdies_sum_field");
            if (e.length)
              setInterval(function () {
                if (localStorage.getItem("measure-support-calculated-sum")) {
                  var t = localStorage.getItem(
                    "measure-support-calculated-sum"
                  );
                  t &&
                    (e.val(t),
                    localStorage.removeItem("measure-support-calculated-sum"));
                }
              }, 1e3);
          }
          n(document).on("click", ".submitForm", function () {
            if (!n(this).hasClass("forum")) {
              var e = n(this).hasClass("translated-form"),
                t = n("#measure_form_user_name").length
                  ? n("#measure_form_user_name").val()
                  : n("#measure_support_request_FirstName").val(),
                a = n("#measure_form_user_phone").length
                  ? n("#measure_form_user_phone").val()
                  : n("#measure_support_request_Phone").val(),
                i = n("#measure_form_user_comment").val(),
                r = n("#measure_support_request_Email")
                  ? n("#measure_support_request_Email").val()
                  : "no-email@no-email.ru",
                o = n("#measure_form_user_email").length
                  ? n("#measure_form_user_email").val()
                  : r,
                s =
                  n("#measure_form_user_inn").length &&
                  n("#measure_form_user_inn").val()
                    ? n("#measure_form_user_inn").val()
                    : "0000000000";
              if (
                (10 !== s.length && 12 !== s.length && (s = "0000000000"),
                n(this).hasClass("forum"))
              )
                (t = "no-name"), (a = "+7 (123) 123-4567");
              else if (n(this).hasClass("tracks")) {
                if (
                  ((o = n(".tracks_email").val()),
                  (t = "no-name"),
                  (a = "+7 (123) 123-4567"),
                  !icHelper.validateEmail(o))
                )
                  return icHelper.showModalAlert("Неверный email"), !1;
              } else {
                if (!t || t.length < 1)
                  return (
                    icHelper.showModalAlert(
                      e
                        ? "Name is not filled"
                        : '<div class="tam_tit">Форма не отправлена</div><div class="tam_text">Укажите имя контактного лица для отправки формы</div>'
                    ),
                    e && n("#modalBodyAlert").find(".btn-grad").text("Close"),
                    !1
                  );
                if (!a || a.length < 1)
                  return (
                    icHelper.showModalAlert(
                      e
                        ? "Phone is not filled"
                        : '<div class="tam_tit">Форма не отправлена</div><div class="tam_text">Укажите контактный номер телефона для отправки формы</div>'
                    ),
                    e && n("#modalBodyAlert").find(".btn-grad").text("Close"),
                    !1
                  );
                if (n("#measure_form_user_email").length && !o)
                  return icHelper.showModalAlert("Не заполнен email"), !1;
                if (
                  (n(this).hasClass("innovators-question") ||
                    n(this).hasClass("buildtech-question") ||
                    n(this).hasClass("check-comment-before")) &&
                  (!i || i.length < 1)
                )
                  return icHelper.showModalAlert("Не заполнен комментарий"), !1;
              }
              !(function (e, t, a) {
                icHelper.loaderSpin();
                var i = n(a)
                  .parents('form[name="measure_support_request"]')
                  .first();
                n(i).find("#measure_support_request_Email").val(t.email),
                  n(i)
                    .find("#measure_support_request_LastName")
                    .val("no-lastname"),
                  n(i)
                    .find("#measure_support_request_MiddleName")
                    .val("no-middlename"),
                  n(i).find("#measure_support_request_Inn").val(t.inn),
                  n(i).find("#measure_support_request_p6892760").val(t.type),
                  n(i).find("#measure_support_request_FirstName").val(t.name),
                  n(i).find("#measure_support_request_Phone").val(t.phone),
                  n(i).find("#measure_support_request_p6903950").val(t.comment),
                  n(i).find("#measure_support_request_p6978854").val(t.comment),
                  n(i).find("#measure_support_request_p7315573").val(t.comment),
                  n(i).find("#measure_support_request_p7347986").val(t.comment),
                  n(i).find("#measure_support_request_p7364032").val(t.comment),
                  n(i).find("#measure_support_request_p7372405").val(t.comment),
                  n(i).find("#measure_support_request_p7405425").val(t.comment),
                  n(i).find("#measure_support_request_p7396551").val(t.comment),
                  n(i).find("#measure_support_request_p7505266").val(t.comment),
                  n(i).find("#measure_support_request_p7505260").val(t.comment),
                  n(i).find("#measure_support_request_p6955849").val("0"),
                  n(i)
                    .find("#measure_support_request_p7081278")
                    .prop("checked", !0),
                  n(i).find("#measure_support_request_p7354019").val(t.name),
                  n(i).find("#measure_support_request_p7354611").val("no data"),
                  n(i).find("#measure_support_request_p7354612").val("no data"),
                  n(i).find("#measure_support_request_p7354613").val("no data"),
                  n(i).submit(),
                  "function" == typeof e && e(),
                  window.location.href.indexOf(
                    "/lending-pomeshcheniy-v-arendu-2"
                  ) > 0
                    ? icHelper.sendYM("form_footer", function () {})
                    : window.location.href.indexOf(
                        "/moskovskiy-akselerator-martech"
                      ) > 0
                    ? icHelper.sendYM("form_request", function () {})
                    : window.location.href.indexOf("/tech_contests") > 0
                    ? (window.location.href.indexOf("/gameinnovators"),
                      icHelper.sendYM("form_request", function () {}))
                    : window.location.href.indexOf("/kovorkingi-v-moskve") >
                        0 && icHelper.sendYM("form_request", function () {});
              })(
                function () {
                  n("#measure_form_user_name").val(""),
                    n("#measure_form_user_phone").val(""),
                    n("#measure_form_user_comment").val(""),
                    n("#measure_form_user_email").length &&
                      n("#measure_form_user_email").val(""),
                    n("#measure_form_user_inn").length &&
                      n("#measure_form_user_inn").val("");
                },
                {
                  name: t,
                  phone: a,
                  email: o,
                  type: "no-types",
                  comment: i,
                  inn: s,
                },
                this
              );
            }
          }),
            n(document).on("click", '[data-target="#more-info"]', function () {
              icHelper.loaderSpin(),
                n
                  .ajax({
                    method: "POST",
                    global: !0,
                    url: Routing.generate("getFormForInnovacionnyeResheniy", {
                      type: "requestForm",
                    }),
                    success: function (e) {
                      icHelper.showModal(e, "Расскажите о задаче");
                    },
                  })
                  .always(function () {
                    icHelper.removeLoader();
                  });
            }),
            n(document).on("click", '[data-target="#tell-more"]', function () {
              icHelper.loaderSpin(),
                n
                  .ajax({
                    method: "POST",
                    global: !0,
                    url: Routing.generate("getFormForInnovacionnyeResheniy", {
                      type: "shortForm",
                    }),
                    success: function (e) {
                      icHelper.showModal(e, "Расскажите о своем решении");
                    },
                  })
                  .always(function () {
                    icHelper.removeLoader();
                  });
            }),
            n(document).on("click", '[data-target="#tell-more2"]', function () {
              icHelper.loaderSpin();
              var e = n(this).data("form-type")
                ? n(this).data("form-type")
                : "shortForm";
              n.ajax({
                method: "POST",
                global: !0,
                url: Routing.generate("getFormForInnovacionnyeResheniy", {
                  type: e,
                }),
                success: function (e) {
                  icHelper.showModal(e, "Расскажите о своем решении");
                },
              }).always(function () {
                icHelper.removeLoader();
              });
            }),
            n(document).on("click", ".recall-novator-request", function () {
              icHelper.showModalConfirm(
                "Вы уверены, что хотите отозвать заявку?",
                function () {
                  n(".recall-request-novator-form")
                    .find("input[type='checkbox']")
                    .prop("checked", "checked"),
                    n(".recall-request-novator-form")
                      .find(".submitSubRequest")
                      .click(),
                    n(".modal_btn_alert").html(
                      '<button class="btn btn-grad" data-dismiss="modal">Ок</button>'
                    );
                }
              );
            }),
            n("#what-gives").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#provider";
              document.location = e;
            }),
            n("#how-can-help").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#customer";
              document.location = e;
            }),
            n("#criteria").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#criteria";
              document.location = e;
            }),
            n("#tell-more").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-provider";
              document.location = e;
            }),
            n("#more-info").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-customer";
              document.location = e;
            }),
            n(document).on("click", '[data-target="#more-info"]', function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-customer";
              document.location = e;
            }),
            n(document).on("click", '[data-target="#tell-more2"]', function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-provider";
              document.location = e;
            }),
            n(document).on("click", '[data-target="#tell-more"]', function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-provider";
              document.location = e;
            }),
            n("#tell-more2").on("shown.bs.modal", function () {
              var e =
                "https://" +
                window.location.hostname +
                window.location.pathname +
                "#form-list";
              document.location = e;
            }),
            n(document).on("click", ".btn.calculate", function (e) {
              e.preventDefault();
              var t = n(
                  "option:contains(2. Компенсация затрат на оплату коммунальных услуг)"
                ),
                a = t.parent("select"),
                i = t.attr("value"),
                r = n(a).val();
              r
                ? 2 === r.length || -1 === n.inArray(i, r)
                  ? window.open(
                      Routing.generate("measureSupportsCalculatorType", {
                        measureType: "equipment",
                        type: "own",
                        calcType: "accurate",
                      }),
                      "_blank"
                    )
                  : 1 === r.length &&
                    n.inArray(i, r) > -1 &&
                    window.open(
                      Routing.generate("measureSupportsCalculatorType", {
                        measureType: "communal",
                        type: "credit",
                        calcType: "accurate",
                      }),
                      "_blank"
                    )
                : window.open(
                    Routing.generate("measureSupportsCalculatorType", {
                      measureType: "equipment",
                      type: "leasing",
                      calcType: "accurate",
                    }),
                    "_blank"
                  );
            });
        }),
        n(document).on("click", ".ClickRequestСall", function () {
          var e = n(this);
          return (
            n.get(Routing.generate("premisesrentnew-form")).done(function (t) {
              var a = "#sendMeasureSupportRequest";
              icHelper.showModal(
                t.html,
                "<div class='div_tit'>Заказать обратный звонок</div><div class='div_text'>Заполните форму и мы свяжемся с вами, чтобы рассказать о доступных вариантах</div>",
                null,
                "modal_event_back_call modal800"
              );
              var i = e.data().check;
              i &&
                n("#measure_support_request_" + i)
                  .attr("checked", "checked")
                  .trigger("change"),
                n("#measure_support_request_MiddleName")
                  .parents(".form-group")
                  .hide(),
                n("#measure_support_request_Inn").parents(".form-group").hide();
              var r = Routing.generate("sonata_media_download", {
                id: t.fileid,
              });
              n("#measure_support_request_p7417225")
                .parents(".form-check")
                .find(".required")
                .html(
                  'Я даю <a class="color_blue text-decoration" href="' +
                    r +
                    '">согласие на обработку персональных данных</a>'
                ),
                icHelper.afterLoadMore(e, !1, !0),
                n(a).attr("type", ""),
                -1 === window.location.href.indexOf("/lending") &&
                  (n(a).off(),
                  n(a).on("click", function (e) {
                    if (!l()) return e.preventDefault(), !1;
                    n('form[name="measure_support_request"]').submit();
                  }));
            }),
            !1
          );
        }),
        n(document).on("click", ".ClickRequestСallKred", function () {
          var e = n(this);
          return (
            n
              .get(Routing.generate("kreditovanie-rid-form"))
              .done(function (t) {
                var a = "#sendMeasureSupportRequest";
                icHelper.showModal(
                  t.html,
                  "<div class='div_tit'>Кредитование под залог прав на РИД</div><div class='div_text'></div>",
                  null,
                  "modal_event_back_call modal800"
                );
                var i = Routing.generate("sonata_media_download", {
                  id: t.fileid,
                });
                n("#measure_support_request_p7421945")
                  .parents(".form-check")
                  .find(".required")
                  .html(
                    'Я даю <a class="color_blue text-decoration" href="' +
                      i +
                      '">согласие на обработку персональных данных</a>'
                  ),
                  icHelper.afterLoadMore(e, !1, !0),
                  n(a).attr("type", ""),
                  -1 === window.location.href.indexOf("/lending") &&
                    (n(a).off(),
                    n(a).on("click", function (e) {
                      if (!l()) return e.preventDefault(), !1;
                      n('form[name="measure_support_request"]').submit();
                    }));
              })
              .fail(function (e, t, a) {
                423 == e.status &&
                  (location.href = Routing.generate("connect_sudir_start"));
              }),
            !1
          );
        }),
        n(document).on("click", ".FormZayv", function () {
          var e = n(this);
          return (
            n
              .get(Routing.generate("registration-rights-ria-form"))
              .done(function (t) {
                var a = "#sendMeasureSupportRequest";
                icHelper.showModal(
                  t.html,
                  "<div class='div_tit'>Заявка на размещение услуг в сфере ИС</div><div class='div_text'></div>",
                  null,
                  "modal_event_back_call modal800"
                );
                var i = Routing.generate("sonata_media_download", {
                  id: t.file_ppd,
                });
                n("#measure_support_request_p7422956")
                  .parents(".form-check")
                  .find(".required")
                  .html(
                    'Я даю <a class="color_blue text-decoration" href="' +
                      i +
                      '">согласие на обработку персональных данных</a>'
                  );
                var r = Routing.generate("sonata_media_download", {
                  id: t.file_qt,
                });
                n("#measure_support_request_p7422591_guid")
                  .parents(".form-group")
                  .find(".form-field-description")
                  .html(
                    'Загрузите заполненный <a class="color_blue text-decoration" href="' +
                      r +
                      '">файл анкеты</a>'
                  ),
                  n("#measure_support_request_p7422591_guid")
                    .parents(".form-group")
                    .find(".form-field-description")
                    .css("opacity", "1"),
                  icHelper.afterLoadMore(e, !1, !0),
                  n(a).attr("type", ""),
                  -1 === window.location.href.indexOf("/lending") &&
                    (n(a).off(),
                    n(a).on("click", function (e) {
                      if (!l()) return e.preventDefault(), !1;
                      n('form[name="measure_support_request"]').submit();
                    }));
              })
              .fail(function (e, t, a) {
                423 == e.status &&
                  (location.href = Routing.generate("connect_sudir_start"));
              }),
            !1
          );
        }),
        n(document).on("click", ".FormZvon", function () {
          var e = n(this);
          return (
            n
              .get(Routing.generate("registration-rights-ria-form2"))
              .done(function (t) {
                var a = "#sendMeasureSupportRequest";
                icHelper.showModal(
                  t.html,
                  "<div class='div_tit'>Заказать обратный звонок</div><div class='div_text'></div>",
                  null,
                  "modal_event_back_call modal800"
                ),
                  n("#measure_support_request_MiddleName")
                    .parents(".form-group")
                    .hide(),
                  n("#measure_support_request_Inn")
                    .parents(".form-group")
                    .hide(),
                  n("#measure_support_request_LastName")
                    .parents(".form-group")
                    .hide(),
                  n("#measure_support_request_Email")
                    .parents(".form-group")
                    .hide(),
                  icHelper.afterLoadMore(e, !1, !0),
                  n(a).attr("type", ""),
                  -1 === window.location.href.indexOf("/lending") &&
                    (n(a).off(),
                    n(a).on("click", function (e) {
                      if (!l()) return e.preventDefault(), !1;
                      n('form[name="measure_support_request"]').submit();
                    }));
              })
              .fail(function (e, t, a) {}),
            !1
          );
        }),
        n(document).ready(function () {
          var e = n(".controlGroupActionShowHide");
          e.length > 0 && f(e),
            n(document).on(
              "change",
              ".controlGroupActionShowHide",
              function () {
                f(n(this));
              }
            );
        });
    },
    607176: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return r;
        },
      });
      var i = a(763279),
        n = a(619755),
        r = {
          sendError: function (e) {
            var t = r.jsUserData(),
              a = {};
            (a.clientData = (0, i.cv)(JSON.stringify(t))),
              (a.serverData = tlerrdata),
              (a.debugData = JSON.stringify(e));
            var o = Routing.generate("supprt_send_error", {
              sendErrorKey: tle_key,
            });
            n.post(o, a);
          },
          jsUserData: function () {
            var e = {},
              t = new Date();
            return (
              (e.client_time = t.toString()),
              navigator &&
                (void 0 !== navigator.language &&
                  (e.language = navigator.language),
                void 0 !== navigator.userAgent &&
                  (e.userAgent = navigator.userAgent),
                void 0 !== navigator.vendor && (e.vendor = navigator.vendor),
                void 0 !== navigator.userAgentData &&
                  void 0 !== navigator.userAgentData.platform &&
                  (e.platform = navigator.userAgentData.platform)),
              screen &&
                (void 0 !== screen.availHeight &&
                  (e.availHeight = screen.availHeight),
                void 0 !== screen.availWidth &&
                  (e.availWidth = screen.availWidth),
                void 0 !== screen.height && (e.height = screen.height),
                void 0 !== screen.width && (e.width = screen.width)),
              e
            );
          },
        };
    },
    763279: function (e, t, a) {
      "use strict";
      a.d(t, {
        DS: function () {
          return P;
        },
        cv: function () {
          return S;
        },
      });
      var i,
        n = "3.7.2",
        r = n,
        o = "function" == typeof atob,
        s = "function" == typeof btoa,
        d = "function" == typeof Buffer,
        l = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
        u = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
        c = Array.prototype.slice.call(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        ),
        m =
          ((i = {}),
          c.forEach(function (e, t) {
            return (i[e] = t);
          }),
          i),
        p =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        f = String.fromCharCode.bind(String),
        h =
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
        g = function (e) {
          return e.replace(/=/g, "").replace(/[+\/]/g, function (e) {
            return "+" == e ? "-" : "_";
          });
        },
        v = function (e) {
          return e.replace(/[^A-Za-z0-9\+\/]/g, "");
        },
        _ = function (e) {
          for (
            var t, a, i, n, r = "", o = e.length % 3, s = 0;
            s < e.length;

          ) {
            if (
              (a = e.charCodeAt(s++)) > 255 ||
              (i = e.charCodeAt(s++)) > 255 ||
              (n = e.charCodeAt(s++)) > 255
            )
              throw new TypeError("invalid character found");
            r +=
              c[((t = (a << 16) | (i << 8) | n) >> 18) & 63] +
              c[(t >> 12) & 63] +
              c[(t >> 6) & 63] +
              c[63 & t];
          }
          return o ? r.slice(0, o - 3) + "===".substring(o) : r;
        },
        b = s
          ? function (e) {
              return btoa(e);
            }
          : d
          ? function (e) {
              return Buffer.from(e, "binary").toString("base64");
            }
          : _,
        w = d
          ? function (e) {
              return Buffer.from(e).toString("base64");
            }
          : function (e) {
              for (var t = [], a = 0, i = e.length; a < i; a += 4096)
                t.push(f.apply(null, e.subarray(a, a + 4096)));
              return b(t.join(""));
            },
        y = function (e) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? g(w(e))
            : w(e);
        },
        C = function (e) {
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
        k = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        M = function (e) {
          return e.replace(k, C);
        },
        x = d
          ? function (e) {
              return Buffer.from(e, "utf8").toString("base64");
            }
          : u
          ? function (e) {
              return w(u.encode(e));
            }
          : function (e) {
              return b(M(e));
            },
        S = function (e) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? g(x(e))
            : x(e);
        },
        H = function (e) {
          return S(e, !0);
        },
        q =
          /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        I = function (e) {
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
        F = function (e) {
          return e.replace(q, I);
        },
        A = function (e) {
          if (((e = e.replace(/\s+/g, "")), !p.test(e)))
            throw new TypeError("malformed base64.");
          e += "==".slice(2 - (3 & e.length));
          for (var t, a, i, n = "", r = 0; r < e.length; )
            (t =
              (m[e.charAt(r++)] << 18) |
              (m[e.charAt(r++)] << 12) |
              ((a = m[e.charAt(r++)]) << 6) |
              (i = m[e.charAt(r++)])),
              (n +=
                64 === a
                  ? f((t >> 16) & 255)
                  : 64 === i
                  ? f((t >> 16) & 255, (t >> 8) & 255)
                  : f((t >> 16) & 255, (t >> 8) & 255, 255 & t));
          return n;
        },
        G = o
          ? function (e) {
              return atob(v(e));
            }
          : d
          ? function (e) {
              return Buffer.from(e, "base64").toString("binary");
            }
          : A,
        R = d
          ? function (e) {
              return h(Buffer.from(e, "base64"));
            }
          : function (e) {
              return h(G(e), function (e) {
                return e.charCodeAt(0);
              });
            },
        T = function (e) {
          return R(O(e));
        },
        D = d
          ? function (e) {
              return Buffer.from(e, "base64").toString("utf8");
            }
          : l
          ? function (e) {
              return l.decode(R(e));
            }
          : function (e) {
              return F(G(e));
            },
        O = function (e) {
          return v(
            e.replace(/[-_]/g, function (e) {
              return "-" == e ? "+" : "/";
            })
          );
        },
        B = function (e) {
          return D(O(e));
        },
        L = function (e) {
          return {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          };
        },
        j = function () {
          var e = function (e, t) {
            return Object.defineProperty(String.prototype, e, L(t));
          };
          e("fromBase64", function () {
            return B(this);
          }),
            e("toBase64", function (e) {
              return S(this, e);
            }),
            e("toBase64URI", function () {
              return S(this, !0);
            }),
            e("toBase64URL", function () {
              return S(this, !0);
            }),
            e("toUint8Array", function () {
              return T(this);
            });
        },
        E = function () {
          var e = function (e, t) {
            return Object.defineProperty(Uint8Array.prototype, e, L(t));
          };
          e("toBase64", function (e) {
            return y(this, e);
          }),
            e("toBase64URI", function () {
              return y(this, !0);
            }),
            e("toBase64URL", function () {
              return y(this, !0);
            });
        },
        P = {
          version: n,
          VERSION: r,
          atob: G,
          atobPolyfill: A,
          btoa: b,
          btoaPolyfill: _,
          fromBase64: B,
          toBase64: S,
          encode: S,
          encodeURI: H,
          encodeURL: H,
          utob: M,
          btou: F,
          decode: B,
          isValid: function (e) {
            if ("string" != typeof e) return !1;
            var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
            return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
          },
          fromUint8Array: y,
          toUint8Array: T,
          extendString: j,
          extendUint8Array: E,
          extendBuiltins: function () {
            j(), E();
          },
        };
    },
    986601: function (e, t, a) {
      var i = a(619755);
      i(document).on(
        "callToMassList",
        ".iasFileHolderContainerCls",
        function () {
          var e = i(this).closest(".form-group");
          if (
            e.find(".measureUploadedGuid").length &&
            !e.find(".measureUploadedGuid").data("needsign")
          )
            return console.log(123124125215), !1;
          var t = e.find(".measureUploadedFileName").val(),
            a = e.find(".measureUploadedIasDbGuid").val(),
            n = e.find(".measureUploadedGuid").val(),
            r = !!a,
            o = e.find("legend").text(),
            s = i(this).data("ifn"),
            d = i("#need_sign_list").find(".filelist"),
            l = i("<ul/>")
              .addClass("mSignItem")
              .attr({
                "data-remoteguid": a,
                "data-isremote": r,
                "data-remoteurl": r
                  ? e.find(".measureUploadedIasDbGuid").data("fileurl")
                  : "",
                "data-localguid": n,
                "data-fieldid": s,
              });
          r || measureFileHelper.addFileToWaitGuid(s, n);
          var u = i("<div/>")
            .addClass("ii_validation")
            .css("display", "none")
            .append(i("<div/>").addClass("ii_line"))
            .append(
              i("<div/>")
                .addClass("ii_messages")
                .css("padding", "0 15px 15px 15px")
                .append(
                  i("<div/>")
                    .addClass("file_st_red")
                    .append(
                      i("<span/>")
                        .append(i("<span/>").addClass("validation_ul_sp"))
                        .append(i("<ul>").addClass("new_ul validation_ul"))
                    )
                )
            );
          l.append(i("<div/>").text(o).addClass("signItemFieldName")),
            l.append(
              i("<div/>")
                .text("Файл: " + t)
                .addClass("signItemFileName")
            ),
            l.append(i("<div/>").addClass("signItemFileInfo"));
          var c = l.append(i("<div/>"));
          c
            .addClass("signItemFileStatus")
            .append(
              i("<div/>")
                .addClass("checkInfoContainer")
                .css("display", "none")
                .css("background", "#ffeded")
                .append(u)
            ),
            d.closest("form").data("isdraft") &&
              c.append(
                i("<span/>")
                  .addClass(
                    "file_st_green file_st_green_loader status_hold uploadWaitCheck"
                  )
                  .text("Проверка файла")
              ),
            c.append(
              i("<span/>")
                .addClass("file_st_green status_hold signHold")
                .text("Документ загружен")
            ),
            d.append(l),
            i("#measureSignByList").show(),
            i("#inPageNoFilesMessage").length &&
              i("#inPageNoFilesMessage").hide(),
            i("#need_sign_list").trigger("stateUpdate");
        }
      ),
        i(document).on("updateCheckInfo", "#need_sign_list", function () {
          i(this)
            .find(".mSignItem")
            .each(function () {
              i(this).data("remoteguid") &&
                i(this).find(".uploadWaitCheck").remove();
            });
        }),
        i(document).on("change", "[data-widgetcontrol]", function () {
          var e = i(this).val(),
            t = i(this).data("widgetcontrol"),
            a = "[data-" + t + "=legal]",
            n = "[data-" + t + "=physical]";
          console.log(e),
            "1882" == e &&
              ((a = "[data-" + t + "=physical]"),
              (n = "[data-" + t + "=legal]")),
            i(n).closest(".form-group").hide(),
            i(a).closest(".form-group").show();
        });
    },
    910527: function () {},
    449610: function (e, t, a) {
      var i = a(619755);
      (window.waitDbGuid = []),
        (window.measureFileHelper = {
          addFileToWaitGuid: function (e, t) {
            window.waitDbGuid[e] = t;
          },
          removeFileFromWaitList: function (e) {
            e in window.waitDbGuid && window.waitDbGuid.splice(e, 1);
          },
          setIasDbGuidForFile: function (e, t) {},
          isFileInList: function (e) {
            return e in window.waitDbGuid;
          },
          isSettingGuidComplete: function () {
            return 0 === window.waitDbGuid.length;
          },
          updateWaitList: function (e) {
            for (fieldId in e)
              measureFileHelper.removeFileFromWaitList(fieldId),
                i('div[data-ifn="' + fieldId + '"]')
                  .closest(".form-group")
                  .find(".measureUploadedIasDbGuid")
                  .attr("data-old") !== e[fieldId] &&
                  (i('div[data-ifn="' + fieldId + '"]')
                    .closest(".form-group")
                    .find(".measureUploadedIasDbGuid")
                    .val(e[fieldId]),
                  i('.mSignItem[data-fieldid="' + fieldId + '"]')
                    .data("remoteguid", e[fieldId])
                    .find(".uploadWaitCheck")
                    .remove());
          },
          setAlreadyUploadedToWait: function () {},
          preloadRemoteFormFiles: function (e) {
            var t = function () {
              var t = e[a],
                n = i('.mSignItem[data-fieldid="' + t + '"]').data("remoteurl"),
                r = i('.mSignItem[data-fieldid="' + t + '"]').data("remoteguid")
                  ? i('.mSignItem[data-fieldid="' + t + '"]').data("remoteguid")
                  : i('.mSignItem[data-fieldid="' + t + '"]').data("localguid");
              icHelper.downloadFileByLink(n, function (e) {
                (window.measureSignFileList[r] = e),
                  i("#measureSignByList").closest(".doc_area_podpis").show();
              });
            };
            for (var a in e) t();
          },
          showSmevErrors: function (e, t) {
            i.each(t, function (e, t) {
              var a = i('[data-ifn="' + t.fieldname + '"]')
                .find(".ii_validation")
                .find(".validation_ul");
              a.empty(),
                "not_allowed_file" in t &&
                  t.not_allowed_file &&
                  a.append(
                    i("<div/>").text(
                      "Тип документа не соответствует требованиям"
                    )
                  ),
                i.each(t.checkresult, function (e, t) {
                  var n = t.file,
                    r = (i("<div/>"), i("<li/>").addClass("iierrli"));
                  r.append(
                    i("<div/>")
                      .html(
                        'Файл: <span class="iierrfilename_ov">' +
                          n.split(".").slice(0, -1).join(".") +
                          "</span>." +
                          n.split(".").pop()
                      )
                      .addClass("iierrfilename iierrlabel")
                  ),
                    i.each(t.errors, function (e, t) {
                      var a = t.page;
                      r.append(
                        i("<div/>")
                          .text("Страница: " + a)
                          .addClass("iierrpage iierrlabel")
                      ),
                        r.append(
                          i("<div/>")
                            .text("Отсутствует:")
                            .addClass("iierrlabel")
                        );
                      var n = i("<div/>").addClass("iierrlist");
                      i.each(t.errors, function (e, t) {
                        n.append(
                          i("<div/>")
                            .text("" + t)
                            .addClass("iierrlistitem")
                        );
                      }),
                        r.append(n);
                    }),
                    a.append(r);
                }),
                a.closest(".ii_validation").show();
            });
          },
          setSmevComplete: function (e) {
            i('.mSignItem[data-ifn="' + e + '"]').data("remoteguid") &&
              (i('.mSignItem[data-ifn="' + e + '"]')
                .find(".signItemFileStatus")
                .append(
                  i("<span/>")
                    .addClass("file_st_green status_hold checkComplete")
                    .text("Файл обработан")
                ),
              i('.mSignItem[data-ifn="' + e + '"]').find(".uploadWaitCheck")
                .length &&
                i('.mSignItem[data-ifn="' + e + '"]')
                  .find(".uploadWaitCheck")
                  .remove());
          },
          setFileIsChecking: function (e, t) {
            if (
              !i('.mSignItem[data-fieldid="' + e + '"]').find(
                ".uploadWaitCheck"
              ).length &&
              i('.mSignItem[data-fieldid="' + e + '"]')
                .closest("form")
                .attr("id")
                .indexOf("_drf")
            ) {
              var a = icHelper.makeid(32);
              i('.mSignItem[data-fieldid="' + e + '"]').append(
                i("<span/>")
                  .addClass("file_st_green file_st_green_loader")
                  .text("Проверка файла")
                  .attr({
                    id: a,
                  })
              ),
                window.measureFormUI.addTimeoutToHide(a, t);
            }
          },
        }),
        (window.measureFormUI = {
          addAlreadyUploadedToSignList: function () {
            i(".iasFileHolderContainerCls").each(function () {
              var e = i(this).closest(".form-group"),
                t = e.find(".measureUploadedIasDbGuid").val();
              i(this).data("ifn");
              t &&
                e.find(".measureUploadedGuid").data("needsign") &&
                (e.find(".localSignGuid").val() ||
                  e.find(".iasSignGuid").val() ||
                  (e.find(".measureUploadedIasDbGuid").data("filesize") <
                    1003e5 &&
                    (i(this).trigger("callToMassList"),
                    (window.measureSignFileList[t] = e
                      .find(".measureUploadedIasDbGuid")
                      .data("fileurl")))));
            });
          },
          addTimeoutToHide: function (e, t) {
            var a = new Date(t).getTime() - new Date().getTime();
            setTimeout(function () {
              i("#" + e).remove();
            }, a);
          },
        });
    },
    325748: function (e, t, a) {
      var i = a(619755);
      function n(e, t) {
        var a =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!a) {
          if (
            Array.isArray(e) ||
            (a = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === a && e.constructor && (a = e.constructor.name);
              if ("Map" === a || "Set" === a) return Array.from(e);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return r(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            a && (e = a);
            var i = 0,
              n = function () {};
            return {
              s: n,
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
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          s = !0,
          d = !1;
        return {
          s: function () {
            a = a.call(e);
          },
          n: function () {
            var e = a.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (d = !0), (o = e);
          },
          f: function () {
            try {
              s || null == a.return || a.return();
            } finally {
              if (d) throw o;
            }
          },
        };
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
        return i;
      }
      var o = [],
        s = [];
      (window.measureMultiGroupHelper = {
        init: function () {
          if (((s = []), console.log(initMeasureGroups), initMeasureGroups)) {
            var e,
              t = [],
              a = n((o = JSON.parse(initMeasureGroups)));
            try {
              for (a.s(); !(e = a.n()).done; )
                (item = e.value),
                  i(".multiholder[data-multiplace=" + item + "]").length &&
                    t.push(item);
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            for (var r = 0, d = t; r < d.length; r++) {
              item = d[r];
              var l = i(".multiholder[data-multiplace=" + item + "]").find(
                  "div:first"
                ),
                u = i(".multiholder[data-multiplace=" + item + "]")
                  .find(".add-more-place:first")
                  .data("pn");
              window.measureMultiGroupHelper.addProtoToPlace(l, !0, u),
                s.push(item);
            }
            window.measureMultiGroupHelper.initChildGroups(),
              window.measureMultiGroupHelper.appendAddButton(),
              window.measureMultiGroupHelper.hideRmOnTopElements(),
              i("body").trigger("needMask");
          }
        },
        initChildGroups: function () {
          var e,
            t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            a = [],
            r = n(o);
          try {
            for (r.s(); !(e = r.n()).done; )
              (item = e.value),
                -1 === s.indexOf(item) &&
                  i(".multiholder[data-multiplace=" + item + "]").length &&
                  a.push(item);
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          for (var d = 0, l = a; d < l.length; d++) {
            item = l[d];
            var u = i(".multiholder[data-multiplace=" + item + "]").find(
                "div:first"
              ),
              c = i(".multiholder[data-multiplace=" + item + "]")
                .find(".add-more-place:first")
                .data("pn");
            window.measureMultiGroupHelper.addProtoToPlace(u, t, c),
              s.push(item);
          }
          i("body").trigger("needMask");
        },
        hideRmOnTopElements: function () {
          var e = window.measureMultiGroupHelper.getAllMultiTypesHash();
          for (item in e);
        },
        appendAddButton: function () {
          var e = window.measureMultiGroupHelper.getAllMultiTypesHash();
          for (item in e) {
            var t = e[item],
              a = i('.multiholder[data-typehash="' + t + '"]:last').data("bn");
            a || (a = "Добавить еще");
            var n = i("<button/>")
              .attr({
                type: "button",
                "data-hash": t,
                "data-counter": 1,
              })
              .addClass(
                "btn btn2-light btn-ico btn-ico2 btn-yes measureFormAddMoreMultiGroup"
              )
              .html(
                '<svg class="svg-icon stroke_un" width="12" height="12"><use xlink:href="/svg/all-icons2.svg#add"></use></svg>' +
                  a
              );
            i('.multiholder[data-typehash="' + t + '"]:last')
              .find(".add-more-place:last")
              .find("button").length ||
              (i('.multiholder[data-typehash="' + t + '"]:last').data(
                "parentid"
              ) ||
                i('.multiholder[data-typehash="' + t + '"]:last')
                  .find(".add-more-place:last")
                  .append(i("<hr/>")),
              i('.multiholder[data-typehash="' + t + '"]:last')
                .find(".add-more-place:last")
                .append(n));
          }
        },
        getAllMultiTypesHash: function () {
          var e = [];
          return (
            i("[data-ismulti=1]").each(function () {
              var t = i(this).data("typehash");
              -1 === e.indexOf(t) && e.push(t);
            }),
            e
          );
        },
        newGroupName: function () {
          return icHelper.md5(
            "a" +
              Math.floor(Math.floor(1e7 * Math.random()).toString()) +
              "a" +
              Math.floor(Math.floor(1e7 * Math.random()).toString()) +
              "a" +
              Math.floor(Math.floor(1e7 * Math.random()).toString())
          );
        },
        addProtoToPlace: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "__name__",
            n = e.closest(".multiholder"),
            r = n.data("label"),
            s = n.data("multiplace"),
            d = n
              .find(".proto-place[data-multiplace=" + s + "]")
              .find("div")
              .data("prototype"),
            l = i('div[data-pn="' + a + '"]')
              .has(e)
              .find(".measureFormAddMoreMultiGroup:first"),
            u = 0;
          l.length && (u = l.data("counter")),
            (d = (d = d.replace(new RegExp(a + "label__", "g"), r)).replace(
              new RegExp(a, "g"),
              u
            )),
            u++,
            l.length && (console.log(l, u), l.data("counter", u));
          var c = i(d);
          t ||
            (c.find("[id ^= remove_file_measure_support]").trigger("click"),
            i(c)
              .find("div.multiholder[data-typehash]:not(:first)")
              .closest(".form-group")
              .remove(),
            c.find("input[type=text], textarea").val(""),
            c
              .find("select")
              .removeClass("select2-hidden-accessible")
              .prop("selectedIndex", 0)
              .removeAttr("data-select2-id"),
            i(c).find("span.select2").remove(),
            i(c)
              .find("input.groupGuid")
              .each(function () {
                i(this).val(icHelper.guid(!1));
              }),
            c.find(".multiholder[data-multiplace]").each(function () {
              console.log(i(this).data("multiplace"));
              var e = icHelper.guid(!1);
              i(this).attr("data-multiplace", e), console.log(e), o.push(e);
            }),
            c
              .find("[id ^= remove_file_measure_support]")
              .addClass("multiCloned")),
            n
              .find(".form-place[data-multiplace=" + s + "]")
              .append(i("<div/>").addClass("groupItemElement").html(c)),
            !t &&
              c.find("div.multiholder").length &&
              (window.measureMultiGroupHelper.initChildGroups(!1),
              window.measureMultiGroupHelper.appendAddButton()),
            i("[data-onchangerule]").trigger("change"),
            icHelper.selectJs();
        },
      }),
        i(document).on("click", ".measureFormAddMoreMultiGroup", function () {
          var e = i(this).closest(".multiholder"),
            t =
              (e.data("multiplace"),
              e.find(".form-place > .groupItemElement").length),
            a = e.attr("data-duplicationlimit");
          a &&
            a > 0 &&
            a > t &&
            (window.measureMultiGroupHelper.addProtoToPlace(
              i(this),
              !1,
              i(this).parent().data("pn")
            ),
            i("body").trigger("needMask")),
            e.find(".form-place > .groupItemElement").length == a &&
              i(this).hide();
        }),
        i(document).on("click", ".rmGroup", function () {
          i(this)
            .closest(".multiholder")
            .find(".measureFormAddMoreMultiGroup")
            .show(),
            i(this)
              .closest(".parentalGroup")
              .find(".groupItemElement")
              .has(i(this))
              .find(
                '[data-holdrm="' +
                  i(this).data("rmh") +
                  '"] > .form-place > .groupItemElement'
              ).length > 1 ||
            i(
              '[data-holdrm="' +
                i(this).data("rmh") +
                '"] > .form-place > .groupItemElement'
            ).length > 1
              ? i(this).closest(".groupItemElement").remove()
              : (i(this)
                  .closest(".groupItemElement")
                  .find("input[type=text], textarea")
                  .val(""),
                i(this)
                  .closest(".groupItemElement")
                  .find("select")
                  .prop("selectedIndex", 0)
                  .trigger("change"));
        });
    },
    997133: function (e, t, a) {
      var i,
        n,
        r = a(619755);
      (n = (i = r)({})),
        (i.ajaxQueue = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = i.Deferred(),
            r = a.promise();
          function o(t) {
            i.ajax(e).done(a.resolve).fail(a.reject).then(t, t);
          }
          return (
            n.queue(o),
            (r.abort = function (t) {
              var s = n.queue(),
                d = i.inArray(o, s);
              return (
                d > -1 && s.splice(d, 1),
                a.rejectWith(e.context || e, [r, t, ""]),
                r
              );
            }),
            t && (t in ajxq || (ajxq[t] = []), ajxq[t].push(r)),
            r
          );
        });
    },
  },
]);
