(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "0P7C":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/comments/types/comment-textarea/comment-textarea.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CommentTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentTextareaModule", function() { return CommentTextareaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_textarea_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-textarea.type */ "+hVB");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/ng-zorro-antd */ "vtEL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const formlyConfig = {
    types: [_comment_textarea_type__WEBPACK_IMPORTED_MODULE_1__["CommentTextareaType"]]
};
let CommentTextareaModule = /*@__PURE__*/ (() => {
    class CommentTextareaModule {
    }
    CommentTextareaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CommentTextareaModule });
    CommentTextareaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CommentTextareaModule_Factory(t) { return new (t || CommentTextareaModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forChild(formlyConfig),
                _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["FormlyNgZorroAntdModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
            ]] });
    return CommentTextareaModule;
})();


/***/ }),

/***/ "0o30":
/*!***************************************************************!*\
  !*** ./src/app/forms/flags/forms/flag-add/flag-add.module.ts ***!
  \***************************************************************/
/*! exports provided: CvcFlagAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagAddModule", function() { return CvcFlagAddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/forms/comments/forms/comment-input/comment-input.module */ "NV+7");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let CvcFlagAddModule = /*@__PURE__*/ (() => {
    class CvcFlagAddModule {
    }
    CvcFlagAddModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CvcFlagAddModule });
    CvcFlagAddModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function CvcFlagAddModule_Factory(t) { return new (t || CvcFlagAddModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveComponentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__["NzAlertModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__["NzSpinModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyModule"].forChild(),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_4__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_6__["CvcFormButtonsModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["CvcPipesModule"],
                _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_12__["CvcCommentInputModule"]
            ]] });
    return CvcFlagAddModule;
})();


/***/ }),

/***/ "1JjV":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/status-tag/status-tag.module.ts ***!
  \*******************************************************************/
/*! exports provided: CvcStatusTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcStatusTagModule", function() { return CvcStatusTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CvcStatusTagModule = /*@__PURE__*/ (() => {
    class CvcStatusTagModule {
    }
    CvcStatusTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CvcStatusTagModule });
    CvcStatusTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CvcStatusTagModule_Factory(t) { return new (t || CvcStatusTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
            ]] });
    return CvcStatusTagModule;
})();


/***/ }),

/***/ "5WaR":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-popover/variant-type-popover.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CvcVariantTypePopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypePopoverModule", function() { return CvcVariantTypePopoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcVariantTypePopoverModule = /*@__PURE__*/ (() => {
    class CvcVariantTypePopoverModule {
    }
    CvcVariantTypePopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcVariantTypePopoverModule });
    CvcVariantTypePopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcVariantTypePopoverModule_Factory(t) { return new (t || CvcVariantTypePopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__["NzDescriptionsModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcLinkTagModule"],
            ]] });
    return CvcVariantTypePopoverModule;
})();


/***/ }),

/***/ "5yiq":
/*!***********************************************************************!*\
  !*** ./src/app/forms/flags/forms/flag-resolve/flag-resolve.module.ts ***!
  \***********************************************************************/
/*! exports provided: CvcResolveFlagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcResolveFlagModule", function() { return CvcResolveFlagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/forms/comments/forms/comment-input/comment-input.module */ "NV+7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















let CvcResolveFlagModule = /*@__PURE__*/ (() => {
    class CvcResolveFlagModule {
    }
    CvcResolveFlagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CvcResolveFlagModule });
    CvcResolveFlagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function CvcResolveFlagModule_Factory(t) { return new (t || CvcResolveFlagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_10__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__["NzPopoverModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinModule"],
                _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_13__["CvcCommentInputModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_4__["CvcFormButtonsModule"],
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__["CvcOrgSelectorBtnGroupModule"],
            ]] });
    return CvcResolveFlagModule;
})();


/***/ }),

/***/ "GEEJ":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/variant-groups/variant-group-tag/variant-group-tag.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CvcVariantGroupTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantGroupTagModule", function() { return CvcVariantGroupTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcVariantGroupTagModule = /*@__PURE__*/ (() => {
    class CvcVariantGroupTagModule {
    }
    CvcVariantGroupTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcVariantGroupTagModule });
    CvcVariantGroupTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcVariantGroupTagModule_Factory(t) { return new (t || CvcVariantGroupTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            ]] });
    return CvcVariantGroupTagModule;
})();


/***/ }),

/***/ "JK0T":
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-mention.js ***!
  \**********************************************************************/
/*! exports provided: NZ_MENTION_TRIGGER_ACCESSOR, NzMentionComponent, NzMentionModule, NzMentionService, NzMentionSuggestionDirective, NzMentionTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_MENTION_TRIGGER_ACCESSOR", function() { return NZ_MENTION_TRIGGER_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionComponent", function() { return NzMentionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionModule", function() { return NzMentionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionService", function() { return NzMentionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionSuggestionDirective", function() { return NzMentionSuggestionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionTriggerDirective", function() { return NzMentionTriggerDirective; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */




const _c0 = ["items"];
function NzMentionComponent_ng_template_1_li_1_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
    }
}
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const suggestion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.suggestionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, suggestion_r4));
    }
}
function NzMentionComponent_ng_template_1_li_1_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    }
    if (rf & 2) {
        const suggestion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.nzValueWith(suggestion_r4));
    }
}
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const suggestion_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.selectSuggestion(suggestion_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_1_ng_container_2_Template, 2, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzMentionComponent_ng_template_1_li_1_ng_template_3_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.index;
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("focus", i_r5 === ctx_r2.activeIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.suggestionTemplate)("ngIfElse", _r8);
    }
}
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.nzNotFoundContent);
    }
}
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.nzLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.nzLoading);
    }
}
function NzMentionComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_1_Template, 5, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredSuggestions.length === 0);
    }
}
const _c2 = ["*"];
let NzMentionSuggestionDirective = /*@__PURE__*/ (() => {
    class NzMentionSuggestionDirective {
    }
    NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
    NzMentionSuggestionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });
    return NzMentionSuggestionDirective;
})();
let NzMentionService = /*@__PURE__*/ (() => {
    class NzMentionService {
        constructor() {
            this.triggerChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        triggerChanged() {
            return this.triggerChange$.asObservable();
        }
        registerTrigger(trigger) {
            if (this.trigger !== trigger) {
                this.trigger = trigger;
                this.triggerChange$.next(trigger);
            }
        }
        ngOnDestroy() {
            this.triggerChange$.complete();
        }
    }
    NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
    NzMentionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzMentionService, factory: NzMentionService.ɵfac });
    return NzMentionService;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzMentionTriggerDirective),
    multi: true
};
let NzMentionTriggerDirective = /*@__PURE__*/ (() => {
    class NzMentionTriggerDirective {
        constructor(el, nzMentionService) {
            this.el = el;
            this.nzMentionService = nzMentionService;
            this.onChange = () => { };
            this.onTouched = () => { };
            this.onFocusin = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }
        completeEvents() {
            this.onFocusin.complete();
            this.onBlur.complete();
            this.onInput.complete();
            this.onKeydown.complete();
            this.onClick.complete();
        }
        focus(caretPos) {
            this.el.nativeElement.focus();
            this.el.nativeElement.setSelectionRange(caretPos, caretPos);
        }
        insertMention(mention) {
            const value = this.el.nativeElement.value;
            const insertValue = mention.mention.trim() + ' ';
            const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
            this.el.nativeElement.value = newValue;
            this.focus(mention.startPos + insertValue.length + 1);
            this.onChange(newValue);
            this.value = newValue;
        }
        writeValue(value) {
            this.value = value;
            if (typeof value === 'string') {
                this.el.nativeElement.value = value;
            }
            else {
                this.el.nativeElement.value = '';
            }
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        ngAfterViewInit() {
            this.nzMentionService.registerTrigger(this);
        }
        ngOnDestroy() {
            this.completeEvents();
        }
    }
    NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzMentionService)); };
    NzMentionTriggerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostAttrs: ["autocomplete", "off"], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler() { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
            }
        }, exportAs: ["nzMentionTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NZ_MENTION_TRIGGER_ACCESSOR])] });
    return NzMentionTriggerDirective;
})();
let NzMentionComponent = /*@__PURE__*/ (() => {
    class NzMentionComponent {
        constructor(ngDocument, cdr, overlay, viewContainerRef, nzMentionService) {
            this.ngDocument = ngDocument;
            this.cdr = cdr;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.nzMentionService = nzMentionService;
            this.nzValueWith = value => value;
            this.nzPrefix = '@';
            this.nzLoading = false;
            this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
            this.nzPlacement = 'bottom';
            this.nzSuggestions = [];
            this.nzOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.nzOnSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.isOpen = false;
            this.filteredSuggestions = [];
            this.suggestionTemplate = null;
            this.activeIndex = -1;
            this.previousValue = null;
            this.cursorMention = null;
            this.overlayRef = null;
        }
        set suggestionChild(value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        }
        get triggerNativeElement() {
            return this.trigger.el.nativeElement;
        }
        get focusItemElement() {
            var _a;
            const itemArr = (_a = this.items) === null || _a === void 0 ? void 0 : _a.toArray();
            if (itemArr && itemArr[this.activeIndex]) {
                return itemArr[this.activeIndex].nativeElement;
            }
            return null;
        }
        ngOnInit() {
            this.nzMentionService.triggerChanged().subscribe(trigger => {
                this.trigger = trigger;
                this.bindTriggerEvents();
                this.closeDropdown();
                this.overlayRef = null;
            });
        }
        ngOnChanges(changes) {
            if (changes.hasOwnProperty('nzSuggestions')) {
                if (this.isOpen) {
                    this.previousValue = null;
                    this.activeIndex = -1;
                    this.resetDropdown(false);
                }
            }
        }
        ngOnDestroy() {
            this.closeDropdown();
        }
        closeDropdown() {
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.overlayOutsideClickSubscription.unsubscribe();
                this.isOpen = false;
                this.cdr.markForCheck();
            }
        }
        openDropdown() {
            this.attachOverlay();
            this.isOpen = true;
            this.cdr.markForCheck();
        }
        getMentions() {
            return this.trigger ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["getMentions"])(this.trigger.value, this.nzPrefix) : [];
        }
        selectSuggestion(suggestion) {
            const value = this.nzValueWith(suggestion);
            this.trigger.insertMention({
                mention: value,
                startPos: this.cursorMentionStart,
                endPos: this.cursorMentionEnd
            });
            this.nzOnSelect.emit(suggestion);
            this.closeDropdown();
            this.activeIndex = -1;
        }
        handleInput(event) {
            const target = event.target;
            this.trigger.onChange(target.value);
            this.trigger.value = target.value;
            this.resetDropdown();
        }
        handleKeydown(event) {
            const keyCode = event.keyCode;
            if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"] && this.activeIndex !== -1 && this.filteredSuggestions.length) {
                this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
                event.preventDefault();
            }
            else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["RIGHT_ARROW"]) {
                this.resetDropdown();
                event.stopPropagation();
            }
            else {
                if (this.isOpen && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"])) {
                    this.closeDropdown();
                    return;
                }
                if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]) {
                    this.setPreviousItemActive();
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) {
                    this.setNextItemActive();
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
        handleClick() {
            this.resetDropdown();
        }
        bindTriggerEvents() {
            this.trigger.onInput.subscribe((e) => this.handleInput(e));
            this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
            this.trigger.onClick.subscribe(() => this.handleClick());
        }
        suggestionsFilter(value, emit) {
            const suggestions = value.substring(1);
            /**
             * Should always emit (nzOnSearchChange) when value empty
             *
             * @[something]... @[empty]... @[empty]
             *     ^             ^           ^
             * preValue        preValue  (should emit)
             */
            if (this.previousValue === value && value !== this.cursorMention[0]) {
                return;
            }
            this.previousValue = value;
            if (emit) {
                this.nzOnSearchChange.emit({
                    value: this.cursorMention.substring(1),
                    prefix: this.cursorMention[0]
                });
            }
            const searchValue = suggestions.toLowerCase();
            this.filteredSuggestions = this.nzSuggestions.filter(suggestion => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
        }
        resetDropdown(emit = true) {
            this.resetCursorMention();
            if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
                this.closeDropdown();
                return;
            }
            this.suggestionsFilter(this.cursorMention, emit);
            const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
            this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
            this.openDropdown();
        }
        setNextItemActive() {
            this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
            this.cdr.markForCheck();
            this.scrollToFocusItem();
        }
        setPreviousItemActive() {
            this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
            this.cdr.markForCheck();
            this.scrollToFocusItem();
        }
        scrollToFocusItem() {
            if (this.focusItemElement) {
                this.focusItemElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }
        }
        canOpen() {
            const element = this.triggerNativeElement;
            return !element.readOnly && !element.disabled;
        }
        resetCursorMention() {
            const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
            const selectionStart = this.triggerNativeElement.selectionStart;
            const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
            let i = prefix.length;
            while (i >= 0) {
                const startPos = value.lastIndexOf(prefix[i], selectionStart);
                const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
                const mention = value.substring(startPos, endPos);
                if ((startPos > 0 && value[startPos - 1] !== ' ') || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(' ')) {
                    this.cursorMention = null;
                    this.cursorMentionStart = -1;
                    this.cursorMentionEnd = -1;
                }
                else {
                    this.cursorMention = mention;
                    this.cursorMentionStart = startPos;
                    this.cursorMentionEnd = endPos;
                    return;
                }
                i--;
            }
        }
        updatePositions() {
            const coordinates = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["getCaretCoordinates"])(this.triggerNativeElement, this.cursorMentionStart);
            const top = coordinates.top -
                this.triggerNativeElement.getBoundingClientRect().height -
                this.triggerNativeElement.scrollTop +
                (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
            const left = coordinates.left - this.triggerNativeElement.scrollLeft;
            this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
            if (this.nzPlacement === 'bottom') {
                this.positionStrategy.withPositions([...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_MENTION_BOTTOM_POSITIONS"]]);
            }
            if (this.nzPlacement === 'top') {
                this.positionStrategy.withPositions([...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_MENTION_TOP_POSITIONS"]]);
            }
            this.positionStrategy.apply();
        }
        subscribeOverlayOutsideClick() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.overlayRef.outsidePointerEvents(), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.ngDocument, 'touchend')).subscribe((event) => {
                var _a;
                const clickTarget = event.target;
                if (this.isOpen && clickTarget !== this.trigger.el.nativeElement && !((_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.overlayElement.contains(clickTarget))) {
                    this.closeDropdown();
                }
            });
        }
        attachOverlay() {
            if (!this.overlayRef) {
                this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](this.suggestionsTemp, this.viewContainerRef);
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
            }
            this.updatePositions();
        }
        getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                disposeOnNavigation: true
            });
        }
        getOverlayPosition() {
            const positions = [
                new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            ];
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.trigger.el)
                .withPositions(positions)
                .withFlexibleDimensions(false)
                .withPush(false);
            return this.positionStrategy;
        }
    }
    NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzMentionService)); };
    NzMentionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzMentionSuggestionDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.suggestionChild = _t.first);
            }
        }, viewQuery: function NzMentionComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.suggestionsTemp = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
            }
        }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NzMentionService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], ["items", ""], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)
    ], NzMentionComponent.prototype, "nzLoading", void 0);
    return NzMentionComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
let NzMentionModule = /*@__PURE__*/ (() => {
    class NzMentionModule {
    }
    NzMentionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzMentionModule });
    NzMentionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"]]] });
    return NzMentionModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzMentionModule, { declarations: function () { return [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"]]; }, exports: function () { return [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-mention.js.map


/***/ }),

/***/ "L0lH":
/*!****************************************************************!*\
  !*** ./src/app/components/flags/flag-list/flag-list.module.ts ***!
  \****************************************************************/
/*! exports provided: FlagListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagListModule", function() { return FlagListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/variant-types/variant-type-tag/variant-type-tag.module */ "XIlT");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/shared/status-tag/status-tag.module */ "1JjV");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_forms_flags_forms_flag_resolve_flag_resolve_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/forms/flags/forms/flag-resolve/flag-resolve.module */ "5yiq");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/components/comments/comment-body/comment-body.module */ "T7+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");


































let FlagListModule = /*@__PURE__*/ (() => {
    class FlagListModule {
    }
    FlagListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: FlagListModule });
    FlagListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ factory: function FlagListModule_Factory(t) { return new (t || FlagListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_7__["NzTagModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__["NzEmptyModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__["NzCheckboxModule"],
                ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__["NzToolTipModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_26__["NzPopoverModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__["NzIconModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_10__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_30__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_10__["TimeagoFormatter"] } }),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__["CvcOrgSelectorBtnGroupModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcSourceTagModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_11__["CvcUserTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_12__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcDrugTagModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcPhenotypeTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_15__["CvcVariantTagModule"],
                _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_16__["CvcVariantTypeTagModule"],
                _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_18__["CvcStatusTagModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__["NzButtonModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_23__["NzAlertModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_24__["ReactiveComponentModule"],
                _app_forms_flags_forms_flag_resolve_flag_resolve_module__WEBPACK_IMPORTED_MODULE_29__["CvcResolveFlagModule"],
                ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__["NzDividerModule"],
                _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_31__["CvcCommentBodyModule"]
            ]] });
    return FlagListModule;
})();


/***/ }),

/***/ "NV+7":
/*!****************************************************************************!*\
  !*** ./src/app/forms/comments/forms/comment-input/comment-input.module.ts ***!
  \****************************************************************************/
/*! exports provided: CvcCommentInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentInputModule", function() { return CvcCommentInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _types_comment_textarea_comment_textarea_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types/comment-textarea/comment-textarea.module */ "0P7C");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/comments/comment-body/comment-body.module */ "T7+J");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/mention */ "JK0T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















let CvcCommentInputModule = /*@__PURE__*/ (() => {
    class CvcCommentInputModule {
    }
    CvcCommentInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CvcCommentInputModule });
    CvcCommentInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function CvcCommentInputModule_Factory(t) { return new (t || CvcCommentInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_10__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinModule"],
                ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_13__["NzMentionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__["CvcFormErrorsAlertModule"],
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_6__["CvcFormButtonsModule"],
                _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_11__["CvcCommentBodyModule"],
                _types_comment_textarea_comment_textarea_module__WEBPACK_IMPORTED_MODULE_8__["CommentTextareaModule"],
            ]] });
    return CvcCommentInputModule;
})();


/***/ }),

/***/ "OwZK":
/*!**************************************************************************!*\
  !*** ./src/app/components/revisions/revision-tag/revision-tag.module.ts ***!
  \**************************************************************************/
/*! exports provided: CvcRevisionTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcRevisionTagModule", function() { return CvcRevisionTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcRevisionTagModule = /*@__PURE__*/ (() => {
    class CvcRevisionTagModule {
    }
    CvcRevisionTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcRevisionTagModule });
    CvcRevisionTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcRevisionTagModule_Factory(t) { return new (t || CvcRevisionTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["CvcPipesModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
            ]] });
    return CvcRevisionTagModule;
})();


/***/ }),

/***/ "Sou9":
/*!**************************************************************!*\
  !*** ./src/app/components/users/user-tag/user-tag.module.ts ***!
  \**************************************************************/
/*! exports provided: CvcUserTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcUserTagModule", function() { return CvcUserTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _user_popover_user_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-popover/user-popover.module */ "dBhZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcUserTagModule = /*@__PURE__*/ (() => {
    class CvcUserTagModule {
    }
    CvcUserTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcUserTagModule });
    CvcUserTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcUserTagModule_Factory(t) { return new (t || CvcUserTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _user_popover_user_popover_module__WEBPACK_IMPORTED_MODULE_5__["CvcUserPopoverModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            ]] });
    return CvcUserTagModule;
})();


/***/ }),

/***/ "T7+J":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments/comment-body/comment-body.module.ts ***!
  \*************************************************************************/
/*! exports provided: CvcCommentBodyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentBodyModule", function() { return CvcCommentBodyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/revisions/revision-tag/revision-tag.module */ "OwZK");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_variant_groups_variant_group_tag_variant_group_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/variant-groups/variant-group-tag/variant-group-tag.module */ "GEEJ");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












let CvcCommentBodyModule = /*@__PURE__*/ (() => {
    class CvcCommentBodyModule {
    }
    CvcCommentBodyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CvcCommentBodyModule });
    CvcCommentBodyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function CvcCommentBodyModule_Factory(t) { return new (t || CvcCommentBodyModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
                _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_1__["CvcRevisionTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcEvidenceTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcVariantTagModule"],
                _app_components_variant_groups_variant_group_tag_variant_group_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcVariantGroupTagModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcGeneTagModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_7__["CvcUserTagModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_8__["CvcOrganizationTagModule"],
            ]] });
    return CvcCommentBodyModule;
})();


/***/ }),

/***/ "VrgM":
/*!**************************************************************************************!*\
  !*** ./src/app/components/flags/flag-list-and-filter/flag-list-and-filter.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcFlagListAndFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagListAndFilterModule", function() { return CvcFlagListAndFilterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_forms_flags_forms_flag_add_flag_add_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/forms/flags/forms/flag-add/flag-add.module */ "0o30");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _flag_list_flag_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../flag-list/flag-list.module */ "L0lH");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/shared/participant-list/participant-list.module */ "VwQC");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















let CvcFlagListAndFilterModule = /*@__PURE__*/ (() => {
    class CvcFlagListAndFilterModule {
    }
    CvcFlagListAndFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: CvcFlagListAndFilterModule });
    CvcFlagListAndFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function CvcFlagListAndFilterModule_Factory(t) { return new (t || CvcFlagListAndFilterModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_16__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoFormatter"] } }),
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
                ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__["NzRadioModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcUserTagModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
                _app_forms_flags_forms_flag_add_flag_add_module__WEBPACK_IMPORTED_MODULE_9__["CvcFlagAddModule"],
                _flag_list_flag_list_module__WEBPACK_IMPORTED_MODULE_11__["FlagListModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
                _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_13__["CvcParticipantListModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_15__["NzSpaceModule"]
            ]] });
    return CvcFlagListAndFilterModule;
})();


/***/ }),

/***/ "VwQC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/participant-list/participant-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CvcParticipantListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcParticipantListModule", function() { return CvcParticipantListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcParticipantListModule = /*@__PURE__*/ (() => {
    class CvcParticipantListModule {
    }
    CvcParticipantListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcParticipantListModule });
    CvcParticipantListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcParticipantListModule_Factory(t) { return new (t || CvcParticipantListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"]
            ]] });
    return CvcParticipantListModule;
})();


/***/ }),

/***/ "XIlT":
/*!**************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-tag/variant-type-tag.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcVariantTypeTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypeTagModule", function() { return CvcVariantTypeTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _app_components_variant_types_variant_type_popover_variant_type_popover_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/variant-types/variant-type-popover/variant-type-popover.module */ "5WaR");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcVariantTypeTagModule = /*@__PURE__*/ (() => {
    class CvcVariantTypeTagModule {
    }
    CvcVariantTypeTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcVariantTypeTagModule });
    CvcVariantTypeTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcVariantTypeTagModule_Factory(t) { return new (t || CvcVariantTypeTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverModule"],
                _app_components_variant_types_variant_type_popover_variant_type_popover_module__WEBPACK_IMPORTED_MODULE_3__["CvcVariantTypePopoverModule"],
            ]] });
    return CvcVariantTypeTagModule;
})();


/***/ }),

/***/ "Ze44":
/*!****************************************************************!*\
  !*** ./src/app/components/flags/flaggable/flaggable.module.ts ***!
  \****************************************************************/
/*! exports provided: CvcFlaggableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlaggableModule", function() { return CvcFlaggableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcFlaggableModule = /*@__PURE__*/ (() => {
    class CvcFlaggableModule {
    }
    CvcFlaggableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcFlaggableModule });
    CvcFlaggableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcFlaggableModule_Factory(t) { return new (t || CvcFlaggableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__["NzBadgeModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__["NzTypographyModule"],
            ]] });
    return CvcFlaggableModule;
})();


/***/ }),

/***/ "dBhZ":
/*!**********************************************************************!*\
  !*** ./src/app/components/users/user-popover/user-popover.module.ts ***!
  \**********************************************************************/
/*! exports provided: CvcUserPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcUserPopoverModule", function() { return CvcUserPopoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/shared/tag-list/tag-list.module */ "iNrY");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var _app_components_users_user_avatar_user_avatar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/users/user-avatar/user-avatar.module */ "2XtQ");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











let CvcUserPopoverModule = /*@__PURE__*/ (() => {
    class CvcUserPopoverModule {
    }
    CvcUserPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CvcUserPopoverModule });
    CvcUserPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function CvcUserPopoverModule_Factory(t) { return new (t || CvcUserPopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_2__["NzDescriptionsModule"],
                ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_1__["CvcLinkTagModule"],
                _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_5__["CvcTagListModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcOrganizationTagModule"],
                _app_components_users_user_avatar_user_avatar_module__WEBPACK_IMPORTED_MODULE_7__["CvcUserAvatarModule"],
            ]] });
    return CvcUserPopoverModule;
})();


/***/ })

}]);