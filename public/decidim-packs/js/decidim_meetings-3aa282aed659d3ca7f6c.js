!function(){var t={6027:function(t,e,n){var i={"./decidim/gamification/badges/decidim_gamification_badges_attended_meetings.svg":98157,"./decidim/meetings/decidim_meetings.svg":82920};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id=6027},98157:function(t,e,n){"use strict";t.exports=n.p+"media/images/decidim_gamification_badges_attended_meetings-0a385f1bbe5a6e378d14.svg"},82920:function(t,e,n){"use strict";t.exports=n.p+"media/images/decidim_meetings-f1cb40f132fbc2fa9a00.svg"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/decidim-packs/",function(){"use strict";function t(t,e,n){var i="".concat(t,"Name");if(n[i])return n[i];var o=e.attr("name"),r=/\[[^\]]+\]$/;return o.match(r)?o.replace(r,"[".concat(t,"]")):t}function e(e,n,i){var o=$.extend({},n),r=e.attr("id").split("_");r.pop();var a="".concat(r.join("_")),l="latitude",u="longitude";e.length>0&&(l=t("latitude",e,o),u=t("longitude",e,o));var c=$.extend({latitudeId:"".concat(a,"_latitude"),longitudeId:"".concat(a,"_longitude"),latitudeName:l,longitudeName:u},n),s=!1,d=function(t){!function(){var t=$("#".concat(c.latitudeId));t.length<1&&(t=$('<input type="hidden" name="'.concat(c.latitudeName,'" id="').concat(c.latitudeId,'" />')),e.after(t));var n=$("#".concat(c.longitudeId));n.length<1&&(n=$('<input type="hidden" name="'.concat(c.longitudeName,'" id="').concat(c.longitudeId,'" />')),e.after(n))}(),$("#".concat(c.latitudeId)).val(t[0]).attr("value",t[0]),$("#".concat(c.longitudeId)).val(t[1]).attr("value",t[1])};e.on("change.decidim",(function(){s||($("#".concat(c.latitudeId)).val("").removeAttr("value"),$("#".concat(c.longitudeId)).val("").removeAttr("value"))})),e.on("geocoder-suggest-coordinates.decidim",(function(t,e){d(e),s=!0,i(e)}));var f="".concat(e.data("coordinates")).split(",").map(parseFloat);Array.isArray(f)&&2===f.length&&d(f)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,a=void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===i(a)?a:String(a)),o)}var r,a}var r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.controllerField=e.controllerField,this.wrapperSelector=e.wrapperSelector,this.dependentFieldsSelector=e.dependentFieldsSelector,this.dependentInputSelector=e.dependentInputSelector,this.enablingCondition=e.enablingCondition,this._bindEvent(),this._run()}var e,n,i;return e=t,(n=[{key:"_run",value:function(){var t=this.controllerField,e=t.parents(this.wrapperSelector).find(this.dependentFieldsSelector),n=e.find(this.dependentInputSelector);this.enablingCondition(t)?(n.prop("disabled",!1),e.show()):(n.prop("disabled",!0),e.hide())}},{key:"_bindEvent",value:function(){var t=this;this.controllerField.on("change",(function(){t._run()}))}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===a(r)?r:String(r)),i)}var o,r}$((function(){var t=$("#meeting_address");t.length>0&&e(t);var n,i=$(".meetings_form");if(i.length>0){var o=i.find("#meeting_type_of_meeting"),a=i.find(".field[data-meeting-type='online']"),l=i.find(".field[data-meeting-type='in_person']"),u=i.find(".field[data-meeting-type='online-access-level']"),c=function(t,e,n){var i=t.val();"hybrid"===i?e.show():(e.hide(),i===n&&e.show())};o.on("change",(function(t){var e=$(t.target),n=$("#meeting_iframe_embed_type").val();c(e,a,"online"),c(e,l,"in_person"),"none"===n?u.hide():c(e,u,"online")})),c(o,a,"online"),c(o,l,"in_person");var s=i.find("#meeting_registration_type"),d=i.find("#meeting_registration_terms"),f=i.find("#meeting_registration_url"),p=i.find("#meeting_available_slots");s.on("change",(function(t){var e=$(t.target);c(e,p,"on_this_platform"),c(e,d,"on_this_platform"),c(e,f,"on_different_platform")})),c(s,p,"on_this_platform"),c(s,d,"on_this_platform"),c(s,f,"on_different_platform"),n={controllerField:$("#meeting_iframe_embed_type"),wrapperSelector:".iframe-fields",dependentFieldsSelector:".iframe-fields--access-level",dependentInputSelector:"input",enablingCondition:function(t){return"none"!==t.val()}},new r(n)}}));var u=window.$,c="open",s=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$element=e,this.$counter=i,this.questionsUrl=n.questionsUrl,this.pollingInterval=n.pollingInterval||5e3,this.mounted=!1,this.questions={}}var e,n,i;return e=t,(n=[{key:"isMounted",value:function(){return this.mounted}},{key:"mountComponent",value:function(){this.$element.length>0&&!this.mounted&&(this.mounted=!0,this._fetchQuestions())}},{key:"unmountComponent",value:function(){this.mounted&&(this.mounted=!1,this._stopPolling(),this.$element.html(""))}},{key:"_fetchQuestions",value:function(){var t=this;this._storeQuestionState(this.$element),u.ajax({url:this.questionsUrl,method:"GET",contentType:"application/javascript"}).done((function(){t._updateCounter(),t._setQuestionsState(t.$element),t._pollQuestions()}))}},{key:"_storeQuestionState",value:function(t){var e=this;u("[data-question]",t).each((function(t,n){var i=u(n),o=i.data("question");!0===i[0].open?e.questions[o]=c:e.questions[o]="closed"}))}},{key:"_setQuestionsState",value:function(t){var e=this;u("[data-question]",t).each((function(t,n){e._setQuestionState(u(n))}))}},{key:"_setQuestionState",value:function(t){var e=t.data("question"),n=this.questions[e];n?n===c&&t.prop(c,!0):t.addClass("is-new")}},{key:"_pollQuestions",value:function(){var t=this;this._stopPolling(),this.pollTimeout=setTimeout((function(){t._fetchQuestions()}),this.pollingInterval)}},{key:"_stopPolling",value:function(){this.pollTimeout&&clearTimeout(this.pollTimeout)}},{key:"_updateCounter",value:function(){if(this.$counter){var t=this.$element.find("details").length;this.$counter.html("(".concat(t,")"))}}}])&&l(e.prototype,n),i&&l(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),d="is-open";function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===f(r)?r:String(r)),i)}var o,r}$((function(){var t=$("[data-decidim-meetings-poll]"),e=$("#visible-questions-count");if(t.length){var n=new s(t,t.data("decidim-meetings-poll"),e);$(".meeting-polls__action-list").on("click",(function(e){e.preventDefault(),n.isMounted()?($(e.target).removeClass(d),t.removeClass(d),n.unmountComponent()):($(e.target).addClass(d),t.addClass(d),n.mountComponent())}))}var i=$("[data-decidim-admin-meetings-poll]");if(i.length){var o=new s(i,i.data("decidim-admin-meetings-poll"));$(".meeting-polls__action-administrate").on("click",(function(t){t.preventDefault(),o.isMounted()?($(t.target).removeClass(d),i.removeClass(d),o.unmountComponent()):($(t.target).addClass(d),i.addClass(d),o.mountComponent())}))}}));var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapperField=e.wrapperField,this.controllerFieldSelector=e.controllerFieldSelector,this.dependentInputSelector=e.dependentInputSelector,this.controllerSelector=this.wrapperField.find(this.controllerFieldSelector),this._bindEvent(),this._run()}var e,n,i;return e=t,(n=[{key:"_run",value:function(){var t=this;this.controllerSelector.each((function(e,n){var i=$(n),o=i.is(":checked");i.parents("div.collection-input").find(t.dependentInputSelector).prop("disabled",!o)}))}},{key:"_bindEvent",value:function(){var t=this;this.controllerSelector.on("change",(function(){t._run()}))}}])&&p(e.prototype,n),i&&p(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===v(r)?r:String(r)),i)}var o,r}var y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapperField=e.wrapperField,this._bindEvent(),this._order(),this._normalize()}var e,n,i;return e=t,(n=[{key:"_order",value:function(){var t=$(this.wrapperField).find(".collection-input").length;$(this.wrapperField).find(".collection-input").each((function(e,n){for(var i=$(n).find("input[name$=\\[position\\]]"),o=i.val()?parseInt(i.val(),10):t,r=$(n).next();r.length>0;){var a=r.find("input[name$=\\[position\\]]");o>(a.val()?parseInt(a.val(),10):t)&&r.insertBefore($(n)),r=r.next()}}))}},{key:"_findLastPosition",value:function(){var t=0;return $(this.wrapperField).find(".collection-input").each((function(e,n){var i=$(n).find("input[name$=\\[position\\]]"),o=parseInt(i.val(),10);o>t&&(t=o)})),t}},{key:"_normalize",value:function(){$(this.wrapperField).find(".collection-input .position").each((function(t,e){var n=$(e).parent().find("input[name$=\\[position\\]]");n.val()&&(n.val(t),n.prop("disabled",!1),$(e).html("".concat(t+1,". ")))}))}},{key:"_bindEvent",value:function(){var t=this;$(this.wrapperField).find("input[type=checkbox]").on("change",(function(e){var n=$(e.target).parents("label"),i=n.find(".position"),o=n.find("input[name$=\\[position\\]]"),r=t._findLastPosition();e.target.checked?(o.val(r+1),o.prop("disabled",!1),i.html(r+1)):(o.val(""),o.prop("disabled",!0),i.html("")),t._order(),t._normalize()}))}}])&&m(e.prototype,n),i&&m(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==b(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===b(r)?r:String(r)),i)}var o,r}function _(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var S=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.wrapperField=e.wrapperField,this.type=e.type,this.conditionQuestion=e.conditionQuestion,this.answerOption=e.answerOption,this.mandatory=e.mandatory,this.value=e.value,this.onFulfilled=e.onFulfilled,this.bindEvent()}return _(t,[{key:"bindEvent",value:function(){this.checkCondition(),this.getInputsToListen().on("change",this.checkCondition.bind(this))}},{key:"getInputValue",value:function(){var t=$(".question[data-question-id='".concat(this.conditionQuestion,"']")),e=t.find("textarea, input[type='text']:not([name$=\\[custom_body\\]])");if(e.length)return e.val();var n=[];return t.find(".radio-button-collection, .check-box-collection").find(".collection-input").each((function(t,e){var i=$(e).find("input[name$=\\[body\\]]");if(i.is(":checked")){var o=$(e).find("input[name$=\\[custom_body\\]]").val(),r=i.val(),a=$(e).find("input[name$=\\[answer_option_id\\]]").val();n.push({id:a,value:r,text:o})}})),n}},{key:"getInputsToListen",value:function(){var t=$(".question[data-question-id='".concat(this.conditionQuestion,"']")),e=t.find("textarea, input[type='text']:not([name$=\\[custom_body\\]])");return e.length?e:t.find(".collection-input").find("input:not([type='hidden'])")}},{key:"checkAnsweredCondition",value:function(t){return"object"!==b(t)?Boolean(t):Boolean(t.some((function(t){return t.value})))}},{key:"checkNotAnsweredCondition",value:function(t){return!this.checkAnsweredCondition(t)}},{key:"checkEqualCondition",value:function(t){var e=this;return!!t.length&&t.some((function(t){return t.id===e.answerOption.toString()}))}},{key:"checkNotEqualCondition",value:function(t){var e=this;return!!t.length&&t.every((function(t){return t.id!==e.answerOption.toString()}))}},{key:"checkMatchCondition",value:function(t){var e=new RegExp(this.value,"i");return"object"!==b(t)?Boolean(t.match(e)):t.some((function(t){return t.text?t.text.match(e):t.value.match(e)}))}},{key:"checkCondition",value:function(){var t=this.getInputValue(),e=!1;switch(this.type){case"answered":e=this.checkAnsweredCondition(t);break;case"not_answered":e=this.checkNotAnsweredCondition(t);break;case"equal":e=this.checkEqualCondition(t);break;case"not_equal":e=this.checkNotEqualCondition(t);break;case"match":e=this.checkMatchCondition(t);break;default:e=!1}this.onFulfilled(e)}}]),t}(),k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.wrapperField=e.wrapperField,this.conditions={},this.showCount=0,this.initializeConditions()}return _(t,[{key:"initializeConditions",value:function(){var t=this;this.wrapperField.find(".display-condition").each((function(e,n){var i=$(n),o=i.data("id");t.conditions[o]={},t.conditions[o]=new S({wrapperField:t.wrapperField,type:i.data("type"),conditionQuestion:i.data("condition"),answerOption:i.data("option"),mandatory:i.data("mandatory"),value:i.data("value"),onFulfilled:function(e){t.onFulfilled(o,e)}})}))}},{key:"mustShow",value:function(){var t=Object.values(this.conditions),e=t.filter((function(t){return t.mandatory})),n=t.filter((function(t){return!t.mandatory}));return e.length?e.every((function(t){return t.fulfilled})):n.some((function(t){return t.fulfilled}))}},{key:"onFulfilled",value:function(t,e){this.conditions[t].fulfilled=e,this.mustShow()?this.showQuestion():this.hideQuestion()}},{key:"showQuestion",value:function(){this.wrapperField.fadeIn(),this.wrapperField.find("input, textarea").prop("disabled",null),this.showCount++}},{key:"hideQuestion",value:function(){this.showCount?this.wrapperField.fadeOut():this.wrapperField.hide(),this.wrapperField.find("input, textarea").prop("disabled","disabled")}}]),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function C(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==F(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===F(r)?r:String(r)),i)}var o,r}var x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapperField=e.wrapperField,this.alertElement=e.alertElement,this.controllerFieldSelector=e.controllerFieldSelector,this.controllerCollectionSelector=e.controllerCollectionSelector,this.maxChoices=e.maxChoices,this.controllerSelector=this.wrapperField.find(this.controllerFieldSelector),this._bindEvent(),this._run()}var e,n,i;return e=t,(n=[{key:"_run",value:function(){var t=this,e=this.wrapperField.find(this.controllerCollectionSelector),n=!1;e.each((function(e,i){var o=$(i).find(t.controllerFieldSelector).filter((function(t,e){return $(e).is(":checked")}));n=n||o.length>t.maxChoices})),n?this.alertElement.show():this.alertElement.hide()}},{key:"_bindEvent",value:function(){var t=this;this.controllerSelector.on("change",(function(){t._run()}))}}])&&C(e.prototype,n),i&&C(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();$((function(){$(".radio-button-collection, .check-box-collection").each((function(t,e){var n;n={wrapperField:$(e),controllerFieldSelector:"input[type=radio], input[type=checkbox]",dependentInputSelector:"input[type=text], input[type=hidden]"},new h(n)})),$.unique($(".check-box-collection").parents(".answer")).each((function(t,e){var n,i=$(e).data("max-choices");i&&(n={wrapperField:$(e),controllerFieldSelector:"input[type=checkbox]",controllerCollectionSelector:".check-box-collection",alertElement:$(e).find(".max-choices-alert"),maxChoices:i},new x(n))})),$(".sortable-check-box-collection").each((function(t,e){var n;n={wrapperField:$(e)},new y(n)})),$(".answer-questionnaire .question[data-conditioned='true']").each((function(t,e){var n;n={wrapperField:$(e)},new k(n)}));var t=$("form.answer-questionnaire");if(t.length>0){t.find("input, textarea, select").on("change",(function(){t.data("changed",!0)}));var e=t.data("safe-path").split("?")[0];$(document).on("click","a",(function(t){window.exitUrl=t.currentTarget.href})),$(document).on("submit","form",(function(t){window.exitUrl=t.currentTarget.action})),window.addEventListener("beforeunload",(function(n){var i=window.exitUrl,o=t.data("changed");window.exitUrl=null,!o||i&&i.includes(e)||(n.returnValue=!0)}))}})),n(6027)}()}();
//# sourceMappingURL=decidim_meetings-3aa282aed659d3ca7f6c.js.map