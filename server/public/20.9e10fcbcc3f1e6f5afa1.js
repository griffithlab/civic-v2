(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "+Qq2":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shared/contributor-avatars/contributor-avatars.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CvcContributorAvatarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcContributorAvatarsModule", function() { return CvcContributorAvatarsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _contributor_stack_contributor_stack_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contributor-stack/contributor-stack.module */ "rQDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CvcContributorAvatarsModule = /*@__PURE__*/ (() => {
    class CvcContributorAvatarsModule {
    }
    CvcContributorAvatarsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CvcContributorAvatarsModule });
    CvcContributorAvatarsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CvcContributorAvatarsModule_Factory(t) { return new (t || CvcContributorAvatarsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__["NzTypographyModule"],
                _contributor_stack_contributor_stack_module__WEBPACK_IMPORTED_MODULE_3__["CvcContributorStackModule"],
            ]] });
    return CvcContributorAvatarsModule;
})();


/***/ }),

/***/ "7ljW":
/*!************************************************************************!*\
  !*** ./src/app/forms/comments/forms/comment-add/comment-add.module.ts ***!
  \************************************************************************/
/*! exports provided: CvcCommentAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentAddModule", function() { return CvcCommentAddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _types_comment_textarea_comment_textarea_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/comment-textarea/comment-textarea.module */ "0P7C");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/comments/comment-body/comment-body.module */ "T7+J");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/mention */ "JK0T");
/* harmony import */ var _comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../comment-input/comment-input.module */ "NV+7");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















let CvcCommentAddModule = /*@__PURE__*/ (() => {
    class CvcCommentAddModule {
    }
    CvcCommentAddModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: CvcCommentAddModule });
    CvcCommentAddModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function CvcCommentAddModule_Factory(t) { return new (t || CvcCommentAddModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_11__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__["NzTabsModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__["NzSpinModule"],
                ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_14__["NzMentionModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__["NzAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forChild(),
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_5__["CvcFormErrorsAlertModule"],
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_6__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_7__["CvcFormButtonsModule"],
                _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_12__["CvcCommentBodyModule"],
                _types_comment_textarea_comment_textarea_module__WEBPACK_IMPORTED_MODULE_9__["CommentTextareaModule"],
                _comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_15__["CvcCommentInputModule"]
            ]] });
    return CvcCommentAddModule;
})();


/***/ }),

/***/ "8E5y":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/status-tag/status-tag.component.ts ***!
  \**********************************************************************/
/*! exports provided: CvcStatusTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcStatusTagComponent", function() { return CvcStatusTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");




function CvcStatusTagComponent_nz_tag_0_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
    }
}
function CvcStatusTagComponent_nz_tag_0_i_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
    }
}
function CvcStatusTagComponent_nz_tag_0_i_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
    }
}
function CvcStatusTagComponent_nz_tag_0_i_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
    }
}
function CvcStatusTagComponent_nz_tag_0_i_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
    }
}
function CvcStatusTagComponent_nz_tag_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcStatusTagComponent_nz_tag_0_i_2_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcStatusTagComponent_nz_tag_0_i_3_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcStatusTagComponent_nz_tag_0_i_4_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcStatusTagComponent_nz_tag_0_i_5_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcStatusTagComponent_nz_tag_0_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx_r0.tagStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.tagStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx_r0.status), "\n");
    }
}
let CvcStatusTagComponent = /*@__PURE__*/ (() => {
    class CvcStatusTagComponent {
        constructor() {
            this.statusColorMap = {
                'ACCEPTED': 'success',
                'REJECTED': 'error',
                'SUBMITTED': 'warning',
                'NEW': 'processing',
                'SUPERSEDED': 'default',
                'OPEN': 'error',
                'RESOLVED': 'default',
            };
        }
        ngOnInit() {
            if (this.status === undefined) {
                throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component");
            }
            this.tagStatus = this.statusColorMap[this.status];
        }
    }
    CvcStatusTagComponent.ɵfac = function CvcStatusTagComponent_Factory(t) { return new (t || CvcStatusTagComponent)(); };
    CvcStatusTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcStatusTagComponent, selectors: [["cvc-status-tag"]], inputs: { status: "status" }, decls: 1, vars: 1, consts: [[3, "nzColor", 4, "ngIf"], [3, "nzColor"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", ""]], template: function CvcStatusTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcStatusTagComponent_nz_tag_0_Template, 9, 10, "nz-tag", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagStatus);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: [""] });
    return CvcStatusTagComponent;
})();


/***/ }),

/***/ "DGRq":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/participant-list/participant-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CvcParticipantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcParticipantListComponent", function() { return CvcParticipantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");









const _c0 = ["itemTemplate"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template_nz_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onParticipantSelected(u_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-participant", u_r4.id == (ctx_r6.selectedItem == null ? null : ctx_r6.selectedItem.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, u_r4));
    }
}
function CvcParticipantListComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template, 2, 6, "nz-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.index;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 + 1 <= ctx_r1.defaultListSize);
    }
}
function CvcParticipantListComponent_ng_container_0_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onExpandClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Expand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcParticipantListComponent_ng_container_0_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onCollapseClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Collapse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcParticipantListComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcParticipantListComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcParticipantListComponent_ng_container_0_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcParticipantListComponent_ng_container_0_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx_r0.listTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.participantList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.participantList.length > ctx_r0.defaultListSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isExpanded);
    }
}
let CvcParticipantListComponent = /*@__PURE__*/ (() => {
    class CvcParticipantListComponent {
        constructor() {
            this.defaultListSize = 5;
            this.participantSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.isExpanded = false;
        }
        ngOnInit() {
            if (this.preselectedOption) {
                this.selectedItem = this.preselectedOption;
            }
        }
        onParticipantSelected(u) {
            var _a;
            if (u.id == ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
                this.selectedItem = undefined;
            }
            else {
                this.selectedItem = u;
            }
            this.participantSelectedEvent.emit(this.selectedItem);
        }
        onExpandClicked() {
            this.originalDefaultListSize = this.defaultListSize;
            this.defaultListSize = this.participantList.length;
            this.isExpanded = true;
        }
        onCollapseClicked() {
            if (this.originalDefaultListSize) {
                this.defaultListSize = this.originalDefaultListSize;
                this.isExpanded = false;
            }
        }
    }
    CvcParticipantListComponent.ɵfac = function CvcParticipantListComponent_Factory(t) { return new (t || CvcParticipantListComponent)(); };
    CvcParticipantListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcParticipantListComponent, selectors: [["cvc-participant-list"]], contentQueries: function CvcParticipantListComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplateRef = _t.first);
            }
        }, inputs: { participantList: "participantList", listTitle: "listTitle", defaultListSize: "defaultListSize", preselectedOption: "preselectedOption" }, outputs: { participantSelectedEvent: "participantSelectedEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-type", "inner", 2, "margin-bottom", "1em", 3, "nzTitle"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click", 4, "ngIf"], ["nzSize", "small", "class", "participant-list-item", 3, "selected-participant", "click", 4, "ngIf"], ["nzSize", "small", 1, "participant-list-item", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click"], ["nz-icon", "", "nzType", "vertical-align-bottom"], ["nz-icon", "", "nzType", "vertical-align-top"]], template: function CvcParticipantListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcParticipantListComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.participantList && ctx.participantList.length > 0);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: [".participant-list-item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #40a9ff;\n  cursor: pointer;\n}\n.participant-list-item[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin: 2px;\n}\n.selected-participant[_ngcontent-%COMP%] {\n  background: #40a9ff;\n  color: #fff;\n}"] });
    return CvcParticipantListComponent;
})();


/***/ }),

/***/ "FlBe":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comments/comment-display/comment-display.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CvcCommentDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentDisplayModule", function() { return CvcCommentDisplayModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment-body/comment-body.module */ "T7+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CvcCommentDisplayModule = /*@__PURE__*/ (() => {
    class CvcCommentDisplayModule {
    }
    CvcCommentDisplayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcCommentDisplayModule });
    CvcCommentDisplayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcCommentDisplayModule_Factory(t) { return new (t || CvcCommentDisplayModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__["NzCommentModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__["NzAvatarModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_3__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_4__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_3__["TimeagoFormatter"] } }),
                _comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_5__["CvcCommentBodyModule"]
            ]] });
    return CvcCommentDisplayModule;
})();


/***/ }),

/***/ "LMbe":
/*!**************************************************!*\
  !*** ./src/app/core/pipes/enum-to-title-pipe.ts ***!
  \**************************************************/
/*! exports provided: EnumToTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToTitlePipe", function() { return EnumToTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let EnumToTitlePipe = /*@__PURE__*/ (() => {
    class EnumToTitlePipe {
        transform(enum_text) {
            if (enum_text) {
                let str = enum_text.toLowerCase()
                    .replace(/_/g, ' ')
                    .split(' ');
                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                }
                return str.join(' ');
            }
            else {
                return "";
            }
        }
    }
    EnumToTitlePipe.ɵfac = function EnumToTitlePipe_Factory(t) { return new (t || EnumToTitlePipe)(); };
    EnumToTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumToTitle", type: EnumToTitlePipe, pure: true });
    return EnumToTitlePipe;
})();


/***/ }),

/***/ "LgFP":
/*!*************************************************************!*\
  !*** ./src/app/forms/flags/forms/flag-add/flag-add.form.ts ***!
  \*************************************************************/
/*! exports provided: CvcFlagAddForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagAddForm", function() { return CvcFlagAddForm; });
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../comments/forms/comment-input/comment-input.form */ "W80v");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _core_pipes_enum_to_title_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../core/pipes/enum-to-title-pipe */ "LMbe");
























function CvcFlagAddForm_nz_alert_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function CvcFlagAddForm_nz_alert_1_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.onSuccessBannerClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CvcFlagAddForm_nz_alert_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-alert", 9);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDescription", _r2);
    }
}
function CvcFlagAddForm_ng_template_3_li_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", error_r8, " ");
    }
}
function CvcFlagAddForm_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagAddForm_ng_template_3_li_1_Template, 2, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.errorMessages);
    }
}
function CvcFlagAddForm_ng_container_10_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function CvcFlagAddForm_ng_container_10_ng_container_3_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagAddForm_ng_container_10_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CvcFlagAddForm_ng_container_10_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagAddForm_ng_container_10_ng_container_3_1_Template, 1, 0, undefined, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    }
}
function CvcFlagAddForm_ng_container_10_ng_template_4_1_ng_template_0_Template(rf, ctx) { }
function CvcFlagAddForm_ng_container_10_ng_template_4_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagAddForm_ng_container_10_ng_template_4_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CvcFlagAddForm_ng_container_10_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagAddForm_ng_container_10_ng_template_4_1_Template, 1, 0, undefined, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    }
}
function CvcFlagAddForm_ng_container_10_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "enumToTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const viewer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx_r14.comment !== undefined && ctx_r14.comment.length >= 10) || !viewer_r9.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Flag ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r14.flaggable.entityType), " ");
    }
}
function CvcFlagAddForm_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "cvc-org-selector-btn-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedOrgChange", function CvcFlagAddForm_ng_container_10_Template_cvc_org_selector_btn_group_selectedOrgChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.onOrgSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CvcFlagAddForm_ng_container_10_ng_container_3_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CvcFlagAddForm_ng_container_10_ng_template_4_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CvcFlagAddForm_ng_container_10_ng_template_6_Template, 3, 4, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r9 = ctx.ngrxLet;
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", viewer_r9.signedIn)("ngIfElse", _r11);
    }
}
let CvcFlagAddForm = /*@__PURE__*/ (() => {
    class CvcFlagAddForm {
        constructor(gql, viewerService, networkErrorService) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.networkErrorService = networkErrorService;
            this.errorMessages = [];
            this.success = false;
            this.loading = false;
            this.comment = "";
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.addFlagMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
        }
        ngOnInit() {
            //For some reason this doesn't work to initially set the org id on entities without any flags.
            //It works on pages with one or more flags. Not sure why
            this.viewer$ = this.viewerService.viewer$;
            this.viewerService.viewer$.subscribe((v) => {
                this.selectedOrg = v.mostRecentOrg;
            });
            if (this.flaggable === undefined) {
                throw new Error("Must pass a flagggable into flag add component");
            }
        }
        onOrgSelected(org) {
            this.selectedOrg = org;
        }
        submitFlag() {
            var _a;
            this.errorMessages = [];
            let input = {
                comment: this.comment,
                subject: this.flaggable,
                organizationId: (_a = this.selectedOrg) === null || _a === void 0 ? void 0 : _a.id
            };
            let state = this.addFlagMutator.mutate(this.gql, { input: input });
            state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res) {
                    if (this.flagAddedCallback) {
                        this.flagAddedCallback();
                    }
                    this.success = true;
                    this.comment = '';
                }
            });
            state.submitError$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res.length > 0) {
                    this.errorMessages = res;
                }
            });
            state.isSubmitting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((loading) => {
                this.loading = loading;
            });
        }
        onSuccessBannerClose() {
            this.success = false;
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    CvcFlagAddForm.ɵfac = function CvcFlagAddForm_Factory(t) { return new (t || CvcFlagAddForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["FlagEntityGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__["NetworkErrorsService"])); };
    CvcFlagAddForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CvcFlagAddForm, selectors: [["cvc-flag-add"]], inputs: { flaggable: "flaggable", flagAddedCallback: "flagAddedCallback" }, decls: 11, vars: 5, consts: [["nzType", "inner"], ["nzBanner", "", "nzMessage", "Flag submitted", "nzType", "success", "nzCloseable", "", 3, "nzOnClose", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", "nzMessage", "Error Adding Flag", 3, "nzDescription", 4, "ngIf"], ["errorContents", ""], ["nz-form", "", "nzLayout", "vertical", 3, "ngSubmit"], [3, "comment", "commentChange"], ["nzTip", "Submitting", 3, "nzSpinning"], [4, "ngrxLet"], ["nzBanner", "", "nzMessage", "Flag submitted", "nzType", "success", "nzCloseable", "", 3, "nzOnClose"], ["nzType", "error", "nzShowIcon", "", "nzMessage", "Error Adding Flag", 3, "nzDescription"], [4, "ngFor", "ngForOf"], [3, "selectedOrgChange"], [4, "ngIf", "ngIfElse"], ["notSignedIn", ""], ["submitButton", ""], [4, "ngTemplateOutlet"], ["nz-tooltip", "", "nzTooltipTitle", "Must be signed in to flag entity."], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"]], template: function CvcFlagAddForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagAddForm_nz_alert_1_Template, 1, 0, "nz-alert", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CvcFlagAddForm_nz_alert_2_Template, 1, 1, "nz-alert", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CvcFlagAddForm_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CvcFlagAddForm_Template_form_ngSubmit_5_listener() { return ctx.submitFlag(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "cvc-comment-input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("commentChange", function CvcFlagAddForm_Template_cvc_comment_input_commentChange_6_listener($event) { return ctx.comment = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-spin", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-form-control");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CvcFlagAddForm_ng_container_10_Template, 8, 2, "ng-container", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.success);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessages.length > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("comment", ctx.comment);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpinning", ctx.loading);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.viewer$);
            }
        }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"], _comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_11__["CvcCommentInputForm"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], _ngrx_component__WEBPACK_IMPORTED_MODULE_14__["LetDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_16__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_17__["CvcOrgSelectorBtnGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__["NzTooltipDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_21__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"]], pipes: [_core_pipes_enum_to_title_pipe__WEBPACK_IMPORTED_MODULE_23__["EnumToTitlePipe"]], styles: [""] });
    return CvcFlagAddForm;
})();


/***/ }),

/***/ "Lirz":
/*!********************************************************************************************!*\
  !*** ./src/app/components/variant-groups/variant-group-tag/variant-group-tag.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CvcVariantGroupTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantGroupTagComponent", function() { return CvcVariantGroupTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






function CvcVariantGroupTagComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function CvcVariantGroupTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcVariantGroupTagComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/variant-groups/", ctx_r0.variantgroup.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcVariantGroupTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template(rf, ctx) { }
function CvcVariantGroupTagComponent_ng_template_1_nz_tag_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantGroupTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverMouseEnterDelay", 0.5)("nzPopoverContent", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcVariantGroupTagComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "variantgroup popover here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcVariantGroupTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantGroupTagComponent_ng_template_1_nz_tag_0_Template, 2, 3, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantGroupTagComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.enablePopover)("ngIfElse", _r3);
    }
}
function CvcVariantGroupTagComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CvcVariantGroupTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantGroupTagComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcVariantGroupTagComponent_ng_template_5_ng_template_0_Template(rf, ctx) { }
function CvcVariantGroupTagComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantGroupTagComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcVariantGroupTagComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.variantgroup.name, "\n");
    }
}
let CvcVariantGroupTagComponent = /*@__PURE__*/ (() => {
    class CvcVariantGroupTagComponent {
        constructor() {
            this.linked = true;
            this.enablePopover = true;
        }
        ngOnInit() {
            if (this.variantgroup === undefined) {
                throw new Error("Must pass a LinkableVariantgroup into the variantgroup tag component");
            }
        }
    }
    CvcVariantGroupTagComponent.ɵfac = function CvcVariantGroupTagComponent_Factory(t) { return new (t || CvcVariantGroupTagComponent)(); };
    CvcVariantGroupTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcVariantGroupTagComponent, selectors: [["cvc-variant-group-tag"]], inputs: { variantgroup: "variantgroup", linked: "linked", enablePopover: "enablePopover" }, decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["tag", ""], ["noPopover", ""], ["unlinked", ""], ["tagContent", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-popover", "", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent", 4, "ngIf", "ngIfElse"], ["popoverContent", ""], ["nz-popover", "", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent"], ["nz-icon", "", "nzType", "civic-variantgroup", "nzTheme", "twotone", "nzTwotoneColor", "#33B358"]], template: function CvcVariantGroupTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantGroupTagComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantGroupTagComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcVariantGroupTagComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcVariantGroupTagComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcVariantGroupTagComponent_ng_template_7_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linked)("ngIfElse", _r5);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcVariantGroupTagComponent;
})();


/***/ }),

/***/ "NCHN":
/*!****************************************************************************!*\
  !*** ./src/app/components/comments/comment-list/comment-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CvcCommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentListComponent", function() { return CvcCommentListComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _forms_comments_forms_comment_add_comment_add_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../forms/comments/forms/comment-add/comment-add.form */ "mfRL");
/* harmony import */ var _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/participant-list/participant-list.component */ "DGRq");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comment-display/comment-display.component */ "STyv");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/pipes/icon-name-for-subscribable-entity */ "lpb+");


















function CvcCommentListComponent_ng_container_0_nz_list_header_9_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CvcCommentListComponent_ng_container_0_nz_list_header_9_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const pageInfo_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.onLoadMore(pageInfo_r15.startCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Load older comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CvcCommentListComponent_ng_container_0_nz_list_header_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcCommentListComponent_ng_container_0_nz_list_header_9_div_1_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r15 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", pageInfo_r15.hasPreviousPage);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-comment-display", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const comment_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("comment", comment_r20);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_18_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 22);
    }
    if (rf & 2) {
        const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r21.profileImagePath);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_18_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r21.displayName.charAt(0)));
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcCommentListComponent_ng_container_0_ng_template_18_nz_avatar_0_Template, 1, 1, "nz-avatar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcCommentListComponent_ng_container_0_ng_template_18_ng_template_1_Template, 2, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r21 = ctx.$implicit;
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r21.profileImagePath)("ngIfElse", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r21.displayName);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_22_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 22);
    }
    if (rf & 2) {
        const user_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r27.profileImagePath);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_22_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r27.displayName.charAt(0)));
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcCommentListComponent_ng_container_0_ng_template_22_nz_avatar_0_Template, 1, 1, "nz-avatar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcCommentListComponent_ng_container_0_ng_template_22_ng_template_1_Template, 2, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r27 = ctx.$implicit;
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r27.profileImagePath)("ngIfElse", _r29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r27.displayName);
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const role_r33 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nzIcon", "civic-", role_r33.tag.displayName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", role_r33.tag.displayName, "s");
    }
}
function CvcCommentListComponent_ng_container_0_ng_template_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "iconNameForSubscribableEntity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const entity_r34 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, entity_r34.tag.tagType));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](entity_r34.tag.displayName);
    }
}
function CvcCommentListComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CvcCommentListComponent_ng_container_0_nz_list_header_9_Template, 2, 1, "nz-list-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CvcCommentListComponent_ng_container_0_ng_template_11_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "cvc-comment-add", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("commentAddedEvent", function CvcCommentListComponent_ng_container_0_Template_cvc_comment_add_commentAddedEvent_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.refreshList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "cvc-participant-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcCommentListComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.onCommenterSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CvcCommentListComponent_ng_container_0_ng_template_18_Template, 5, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "cvc-participant-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcCommentListComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.onMentionedUserSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CvcCommentListComponent_ng_container_0_ng_template_22_Template, 5, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "cvc-participant-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcCommentListComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.onMentionedRoleSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CvcCommentListComponent_ng_container_0_ng_template_26_Template, 3, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "cvc-participant-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcCommentListComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.onMentionedEntitySelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CvcCommentListComponent_ng_container_0_ng_template_30_Template, 4, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDataSource", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.comments$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 12, ctx_r0.loading$))("nzRenderItem", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 14, ctx_r0.pageInfo$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subject", ctx_r0.commentable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 16, ctx_r0.commenters$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 18, ctx_r0.mentionedUsers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, ctx_r0.mentionedRoles$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 22, ctx_r0.mentionedEntities$));
    }
}
function CvcCommentListComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cvc-comment-add", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("commentAddedEvent", function CvcCommentListComponent_ng_template_2_Template_cvc_comment_add_commentAddedEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.refreshList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subject", ctx_r2.commentable);
    }
}
let CvcCommentListComponent = /*@__PURE__*/ (() => {
    class CvcCommentListComponent {
        constructor(gql) {
            this.gql = gql;
            this.pageSize = 5;
        }
        ngOnInit() {
            this.queryRef$ = this.gql.watch({
                subject: this.commentable,
                last: this.pageSize,
                sortBy: {
                    column: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["DateSortColumns"].Created,
                    direction: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].Asc
                }
            });
            let results = this.queryRef$.valueChanges;
            this.pageInfo$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.pageInfo));
            this.loading$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ loading }) => loading));
            this.comments$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.edges.map((e) => e.node)));
            this.commenters$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.uniqueCommenters));
            this.mentionedUsers$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.mentionedUsers));
            this.mentionedRoles$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.mentionedRoles.map((t) => { return { id: `${t.entityId}-${t.tagType}`, tag: t }; })));
            this.mentionedEntities$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => data.comments.mentionedEntities.map((t) => { return { id: `${t.entityId}-${t.tagType}`, tag: t }; })));
            this.unfilteredCount$ = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'comments', 'unfilteredCountForSubject'));
        }
        onLoadMore(cursor) {
            this.queryRef$.fetchMore({
                variables: {
                    last: this.pageSize,
                    before: cursor,
                },
            });
        }
        onCommenterSelected(u) {
            this.queryRef$.refetch({
                originatingUserId: u === null || u === void 0 ? void 0 : u.id
            });
        }
        onMentionedUserSelected(u) {
            this.queryRef$.refetch({
                mentionedUserId: u === null || u === void 0 ? void 0 : u.id
            });
        }
        onMentionedRoleSelected(r) {
            if (r) {
                let enumVal = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["UserRole"][r.tag.displayName[0].toUpperCase() + r.tag.displayName.slice(1)];
                this.queryRef$.refetch({
                    mentionedRole: enumVal
                });
            }
            else {
                this.queryRef$.refetch({
                    mentionedRole: undefined
                });
            }
        }
        onMentionedEntitySelected(r) {
            if (r) {
                this.queryRef$.refetch({
                    mentionedEntity: { entityType: r.tag.tagType, id: r.tag.entityId }
                });
            }
            else {
                this.queryRef$.refetch({
                    mentionedEntity: undefined
                });
            }
        }
        refreshList() {
            this.queryRef$.refetch();
        }
    }
    CvcCommentListComponent.ɵfac = function CvcCommentListComponent_Factory(t) { return new (t || CvcCommentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["CommentListGQL"])); };
    CvcCommentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CvcCommentListComponent, selectors: [["cvc-comment-list"]], inputs: { commentable: "commentable" }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noComments", ""], [3, "nzGutter"], ["nzSpan", "18"], ["nzDirection", "vertical", 2, "width", "100%"], ["nzTitle", "Comments"], ["nzSize", "small", "nzItemLayout", "horizontal", 3, "nzDataSource", "nzLoading", "nzRenderItem"], [4, "ngIf"], ["comment", ""], ["id", "addComment", 3, "subject", "commentAddedEvent"], ["nzSpan", "6"], ["listTitle", "Commenters", 3, "participantList", "participantSelectedEvent"], ["itemTemplate", ""], ["listTitle", "Mentioned Users", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Mentioned Roles", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Mentioned Entities", 3, "participantList", "participantSelectedEvent"], ["nz-list-load-more", "", 4, "ngIf"], ["nz-list-load-more", ""], ["nz-button", "", "nzType", "link", "nzSize", "small", "nzBlock", "", 3, "click"], [3, "comment"], ["nz-comment-avatar", "", 3, "nzSrc", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", 3, "nzText"], [3, "nzIcon"], ["nz-icon", "", 3, "nzType"]], template: function CvcCommentListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcCommentListComponent_ng_container_0_Template, 32, 24, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CvcCommentListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.unfilteredCount$))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListComponent"], _forms_comments_forms_comment_add_comment_add_form__WEBPACK_IMPORTED_MODULE_8__["CvcCommentAddForm"], _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__["CvcParticipantListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListHeaderComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListItemComponent"], _comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_12__["CvcCommentDisplayComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__["NzAvatarComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_15__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_16__["IconNameForSubscribableEntity"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-list-header[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\nnz-list-header[_ngcontent-%COMP%]   [nz-list-load-more][_ngcontent-%COMP%] {\n  margin-top: -0.5em;\n  padding-bottom: 0.5em;\n}"] });
    return CvcCommentListComponent;
})();


/***/ }),

/***/ "OhKa":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/contributor-stack/contributor-stack.component.ts ***!
  \************************************************************************************/
/*! exports provided: CvcContributorStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcContributorStackComponent", function() { return CvcContributorStackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _users_user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/user-popover/user-popover.component */ "kzkU");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pipes/event-verbiage-pipe */ "3mrq");








function CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_ng_container_3_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
}
function CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "eventVerbiage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const a_r10 = ctx.$implicit;
        const isLast_r11 = ctx.last;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, a_r10.action, "contributor-card", a_r10.count), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r11);
    }
}
function CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contributions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_ng_container_3_Template, 4, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", u_r4.uniqueActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Contribution: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, u_r4.lastActionDate), " ");
    }
}
function CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-user-popover", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_ng_template_1_Template, 7, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", u_r4.user.id);
    }
}
function CvcContributorStackComponent_ng_container_0_a_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcContributorStackComponent_ng_container_0_a_1_ng_template_2_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const u_r4 = ctx.$implicit;
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", u_r4.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 14)("nzPopoverMouseEnterDelay", 0.5)("nzPopoverContent", _r5)("nzSrc", u_r4.user.profileImagePath);
    }
}
function CvcContributorStackComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcContributorStackComponent_ng_container_0_a_1_Template, 4, 5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sortedContributors);
    }
}
function CvcContributorStackComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " None\n");
    }
}
let CvcContributorStackComponent = /*@__PURE__*/ (() => {
    class CvcContributorStackComponent {
        ngOnInit() {
            if (this.contributors === undefined) {
                throw new Error("Must pass a list of contributors into the contributor stack");
            }
            this.sortedContributors = this.contributors.slice();
            this.sortedContributors.sort((n1, n2) => { return n2.totalActionCount - n1.totalActionCount; });
        }
    }
    CvcContributorStackComponent.ɵfac = function CvcContributorStackComponent_Factory(t) { return new (t || CvcContributorStackComponent)(); };
    CvcContributorStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcContributorStackComponent, selectors: [["cvc-contributor-stack"]], inputs: { contributors: "contributors" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noContributors", ""], ["class", "avatar", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "avatar", 3, "routerLink"], ["nz-popover", "", "nzPopoverTrigger", "hover", "nzPopoverPlacement", "bottomRight", "nzIcon", "user", "nzSize", "small", 3, "nzSize", "nzPopoverMouseEnterDelay", "nzPopoverContent", "nzSrc"], ["curatorPopover", ""], [3, "userId"], ["additionalMetadata", ""], ["nzHeader", "Activity"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function CvcContributorStackComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcContributorStackComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcContributorStackComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortedContributors && ctx.sortedContributors.length > 0)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__["NzAvatarComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], _users_user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__["CvcUserPopoverComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_7__["EventVerbiagePipe"]], styles: [""] });
    return CvcContributorStackComponent;
})();


/***/ }),

/***/ "Qdkw":
/*!***************************************************************************!*\
  !*** ./src/app/components/flags/flaggable/flaggable-options.directive.ts ***!
  \***************************************************************************/
/*! exports provided: CvcFlaggableOptionsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlaggableOptionsDirective", function() { return CvcFlaggableOptionsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let CvcFlaggableOptionsDirective = /*@__PURE__*/ (() => {
    class CvcFlaggableOptionsDirective {
        constructor() { }
    }
    CvcFlaggableOptionsDirective.ɵfac = function CvcFlaggableOptionsDirective_Factory(t) { return new (t || CvcFlaggableOptionsDirective)(); };
    CvcFlaggableOptionsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CvcFlaggableOptionsDirective, selectors: [["", "cvcFlaggableOptions", ""]] });
    return CvcFlaggableOptionsDirective;
})();


/***/ }),

/***/ "SJ3B":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/flags/flag-list-and-filter/flag-list-and-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CvcFlagListAndFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagListAndFilterComponent", function() { return CvcFlagListAndFilterComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _flag_list_flag_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flag-list/flag-list.component */ "UFZC");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _forms_flags_forms_flag_add_flag_add_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../forms/flags/forms/flag-add/flag-add.form */ "LgFP");
/* harmony import */ var _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/participant-list/participant-list.component */ "DGRq");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");















function CvcFlagListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CvcFlagListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const pageInfo_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.loadMore(pageInfo_r11 == null ? null : pageInfo_r11.endCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcFlagListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template, 3, 0, "nz-space-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r11 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", pageInfo_r11 == null ? null : pageInfo_r11.hasNextPage);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const state_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](state_r16.displayName);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 17);
    }
    if (rf & 2) {
        const user_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r17.profileImagePath);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r17.username.charAt(0)));
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_nz_avatar_0_Template, 1, 1, "nz-avatar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_ng_template_1_Template, 2, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r17 = ctx.$implicit;
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r17.profileImagePath)("ngIfElse", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r17.username);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 17);
    }
    if (rf & 2) {
        const user_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r23.profileImagePath);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r23.username.charAt(0)));
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_nz_avatar_0_Template, 1, 1, "nz-avatar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_ng_template_1_Template, 2, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r23 = ctx.$implicit;
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r23.profileImagePath)("ngIfElse", _r25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r23.username);
    }
}
function CvcFlagListAndFilterComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "cvc-flag-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CvcFlagListAndFilterComponent_ng_container_0_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "cvc-flag-add", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "cvc-participant-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcFlagListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.onStateSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CvcFlagListAndFilterComponent_ng_container_0_ng_template_12_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "cvc-participant-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcFlagListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.onFlaggingUsersSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CvcFlagListAndFilterComponent_ng_container_0_ng_template_16_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "cvc-participant-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function CvcFlagListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.onResolvingUsersSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CvcFlagListAndFilterComponent_ng_container_0_ng_template_20_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 10, ctx_r0.flags$))("flagResolvedCallback", ctx_r0.refresh);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.pageInfo$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flaggable", ctx_r0.flaggable)("flagAddedCallback", ctx_r0.refresh);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preselectedOption", ctx_r0.selectableStates[0])("participantList", ctx_r0.selectableStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 12, ctx_r0.uniqueFlaggingUsers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 14, ctx_r0.uniqueResolvingUsers$));
    }
}
function CvcFlagListAndFilterComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-flag-add", 7);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flaggable", ctx_r2.flaggable)("flagAddedCallback", ctx_r2.refresh);
    }
}
let CvcFlagListAndFilterComponent = /*@__PURE__*/ (() => {
    class CvcFlagListAndFilterComponent {
        constructor(gql) {
            this.gql = gql;
            this.defaultPageSize = 5;
            this.selectableStates = [
                { id: 1, displayName: 'Open', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlagState"].Open },
                { id: 2, displayName: 'Resolved', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlagState"].Resolved },
            ];
        }
        ngOnInit() {
            if (this.flaggable == undefined) {
                throw new Error('Must pass a flaggable into flag list');
            }
            this.queryRef = this.gql.watch({
                first: this.defaultPageSize,
                flaggable: this.flaggable,
                state: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlagState"].Open,
            });
            this.refresh = () => {
                this.queryRef.refetch();
            };
            this.results$ = this.queryRef.valueChanges;
            this.flags$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'flags', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.pageInfo$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'flags', 'pageInfo'));
            this.unfilteredCount$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'flags', 'unfilteredCountForSubject'));
            this.uniqueFlaggingUsers$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a; return (_a = data.flags) === null || _a === void 0 ? void 0 : _a.uniqueFlaggingUsers; }));
            this.uniqueResolvingUsers$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a; return (_a = data.flags) === null || _a === void 0 ? void 0 : _a.uniqueResolvingUsers; }));
        }
        onFlaggingUsersSelected(user) {
            this.queryRef.refetch({
                flaggable: { id: this.flaggable.id, entityType: this.flaggable.entityType },
                flaggingUserId: user ? user.id : undefined
            });
        }
        onResolvingUsersSelected(user) {
            this.queryRef.refetch({
                flaggable: { id: this.flaggable.id, entityType: this.flaggable.entityType },
                resolvingUserId: user ? user.id : undefined
            });
        }
        onStateSelected(state) {
            this.queryRef.refetch({
                flaggable: { id: this.flaggable.id, entityType: this.flaggable.entityType },
                state: state ? state.value : undefined
            });
        }
        loadMore(afterCursor) {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.fetchMore({
                variables: {
                    first: this.defaultPageSize,
                    after: afterCursor
                },
            });
        }
    }
    CvcFlagListAndFilterComponent.ɵfac = function CvcFlagListAndFilterComponent_Factory(t) { return new (t || CvcFlagListAndFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlagListGQL"])); };
    CvcFlagListAndFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CvcFlagListAndFilterComponent, selectors: [["cvc-flag-list-and-filter"]], inputs: { flaggable: "flaggable" }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noFlags", ""], [3, "nzGutter"], ["nzSpan", "18"], ["nzDirection", "vertical"], [3, "flags", "flagResolvedCallback"], [4, "ngrxLet"], [3, "flaggable", "flagAddedCallback"], ["nzSpan", "6"], ["listTitle", "Flag State", 3, "preselectedOption", "participantList", "participantSelectedEvent"], ["itemTemplate", ""], ["listTitle", "Flagging Users", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Resolving Users", 3, "participantList", "participantSelectedEvent"], [4, "ngIf"], ["nz-button", "", "nzBlock", "", "nzType", "default", 3, "click"], ["nz-comment-avatar", "", 3, "nzSrc", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", 3, "nzText"]], template: function CvcFlagListAndFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CvcFlagListAndFilterComponent_ng_container_0_Template, 22, 16, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CvcFlagListAndFilterComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.unfilteredCount$))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], _flag_list_flag_list_component__WEBPACK_IMPORTED_MODULE_6__["FlagListComponent"], _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["LetDirective"], _forms_flags_forms_flag_add_flag_add_form__WEBPACK_IMPORTED_MODULE_8__["CvcFlagAddForm"], _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__["CvcParticipantListComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__["NzAvatarComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_7__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return CvcFlagListAndFilterComponent;
})();


/***/ }),

/***/ "STyv":
/*!**********************************************************************************!*\
  !*** ./src/app/components/comments/comment-display/comment-display.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CvcCommentDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentDisplayComponent", function() { return CvcCommentDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment-body/comment-body.component */ "bY7t");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-timeago */ "twue");






function CvcCommentDisplayComponent_nz_avatar_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 4);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.comment.commenter.profileImagePath);
    }
}
function CvcCommentDisplayComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 5);
    }
}
let CvcCommentDisplayComponent = /*@__PURE__*/ (() => {
    class CvcCommentDisplayComponent {
        ngOnInit() {
            if (this.comment === undefined) {
                throw new Error('Must pass a comment into comment display component.');
            }
        }
    }
    CvcCommentDisplayComponent.ɵfac = function CvcCommentDisplayComponent_Factory(t) { return new (t || CvcCommentDisplayComponent)(); };
    CvcCommentDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcCommentDisplayComponent, selectors: [["cvc-comment-display"]], inputs: { comment: "comment" }, decls: 7, vars: 7, consts: [[3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", 3, "nzSrc", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], [3, "commentBodySegments"], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", "nzIcon", "civic:curator"]], template: function CvcCommentDisplayComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "timeago");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcCommentDisplayComponent_nz_avatar_2_Template, 1, 1, "nz-avatar", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentDisplayComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-comment-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "cvc-comment-body", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", ctx.comment.commenter.displayName)("nzDatetime", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.comment.createdAt));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment.commenter.profileImagePath)("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentBodySegments", ctx.comment.parsedComment);
            }
        }, directives: [ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__["NzCommentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__["NzCommentContentDirective"], _comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_3__["CvcCommentBodyComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarComponent"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_1__["NzCommentAvatarDirective"]], pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoPipe"]], styles: [""] });
    return CvcCommentDisplayComponent;
})();


/***/ }),

/***/ "UFZC":
/*!*******************************************************************!*\
  !*** ./src/app/components/flags/flag-list/flag-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: FlagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagListComponent", function() { return FlagListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../comments/comment-body/comment-body.component */ "bY7t");
/* harmony import */ var _forms_flags_forms_flag_resolve_flag_resolve_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../forms/flags/forms/flag-resolve/flag-resolve.form */ "pgmM");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/status-tag/status-tag.component */ "8E5y");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-timeago */ "twue");



















function FlagListComponent_nz_alert_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function FlagListComponent_nz_alert_0_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const error_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onErrorBannerClose(error_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMessage", error_r5);
    }
}
function FlagListComponent_nz_alert_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function FlagListComponent_nz_alert_1_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onSuccessBannerClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nzMessage", "Revision(s) successfully ", ctx_r1.success, ".");
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_cvc_comment_body_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-comment-body", 14);
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("commentBodySegments", flag_r11.openComment.parsedComment);
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-flag-resolve", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flag", flag_r11)("flagResolvedCallback", ctx_r13.flagResolvedCallback);
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-comment-body", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("commentBodySegments", flag_r11.resolutionComment.parsedComment);
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_cvc_user_tag_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-user-tag", 20);
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", flag_r11.resolvingUser);
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_ng_container_2_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Resolved By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_cvc_user_tag_5_Template, 1, 1, "cvc-user-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", flag_r11.resolutionComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", flag_r11.resolvingUser !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, flag_r11.resolvedAt), " ");
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" FID", flag_r11.id, " ");
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Flagged By");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "cvc-user-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "cvc-status-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const flag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", flag_r11.flaggingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, flag_r11.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", flag_r11.state);
    }
}
function FlagListComponent_ng_container_3_nz_space_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FlagListComponent_ng_container_3_nz_space_item_2_cvc_comment_body_2_Template, 1, 1, "cvc-comment-body", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FlagListComponent_ng_container_3_nz_space_item_2_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FlagListComponent_ng_container_3_nz_space_item_2_ng_template_5_Template, 8, 5, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FlagListComponent_ng_container_3_nz_space_item_2_ng_template_7_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FlagListComponent_ng_container_3_nz_space_item_2_ng_template_9_Template, 10, 5, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const flag_r11 = ctx.$implicit;
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r16)("nzExtra", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", flag_r11.openComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", flag_r11.state == "OPEN")("ngIfElse", _r14);
    }
}
function FlagListComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FlagListComponent_ng_container_3_nz_space_item_2_Template, 11, 5, "nz-space-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.flags);
    }
}
function FlagListComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-empty", 25);
    }
}
let FlagListComponent = /*@__PURE__*/ (() => {
    class FlagListComponent {
        constructor(viewerService) {
            this.viewerService = viewerService;
            this.isLoading = false;
            this.success = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }
        ngOnInit() {
            this.viewer$ = this.viewerService.viewer$;
            this.viewerService.viewer$.subscribe((v) => {
                this.mostRecentOrg = v.mostRecentOrg;
            });
        }
        setupMutationResultHandlers(state, successType) {
            state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res) {
                    this.isLoading = false;
                    //this.revisionMutationCompleted.emit();
                    this.errors = undefined;
                    this.success = successType;
                }
            });
            state.submitError$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res.length > 0) {
                    this.isLoading = false;
                    this.success = false;
                    this.errors = res;
                }
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        onErrorBannerClose(err) {
            var _a;
            this.errors = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.filter(e => e != err);
        }
        onSuccessBannerClose() {
            this.success = false;
        }
    }
    FlagListComponent.ɵfac = function FlagListComponent_Factory(t) { return new (t || FlagListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"])); };
    FlagListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FlagListComponent, selectors: [["cvc-flag-list"]], inputs: { flags: "flags", flagResolvedCallback: "flagResolvedCallback" }, decls: 6, vars: 4, consts: [["nzBanner", "", "nzType", "error", "nzCloseable", "", 3, "nzMessage", "nzOnClose", 4, "ngFor", "ngForOf"], ["nzBanner", "", "nzType", "success", "nzCloseable", "", 3, "nzMessage", "nzOnClose", 4, "ngIf"], ["nzTitle", "Flags", 1, "card-list"], [4, "ngIf", "ngIfElse"], ["noFlags", ""], ["nzBanner", "", "nzType", "error", "nzCloseable", "", 3, "nzMessage", "nzOnClose"], ["nzBanner", "", "nzType", "success", "nzCloseable", "", 3, "nzMessage", "nzOnClose"], ["nzDirection", "vertical"], [4, "ngFor", "ngForOf"], ["nzType", "inner", 3, "nzTitle", "nzExtra"], [3, "commentBodySegments", 4, "ngIf"], ["flagResolved", ""], ["flagCardHeaderTitle", ""], ["flagCardHeaderExtra", ""], [3, "commentBodySegments"], [3, "flag", "flagResolvedCallback"], ["nzSpan", "16"], [4, "ngIf"], ["nzSpan", "8", "nz-typography", "", "nzType", "secondary", 2, "text-align", "right"], [3, "user", 4, "ngIf"], [3, "user"], ["nz-icon", "", "nzType", "civic:flag"], ["nzSize", "small"], ["nz-typography", "", "nzType", "secondary"], [3, "status"], ["nzNotFoundImage", "simple", "nzNotFoundContent", "No Flags matching filters"]], template: function FlagListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FlagListComponent_nz_alert_0_Template, 1, 1, "nz-alert", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FlagListComponent_nz_alert_1_Template, 1, 1, "nz-alert", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-card", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FlagListComponent_ng_container_3_Template, 3, 1, "ng-container", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FlagListComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.errors);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flags && ctx.flags.length > 0)("ngIfElse", _r3);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__["NzAlertComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceItemComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerComponent"], _comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_9__["CvcCommentBodyComponent"], _forms_flags_forms_flag_resolve_flag_resolve_form__WEBPACK_IMPORTED_MODULE_10__["CvcFlagResolveForm"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzColDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__["NzTypographyComponent"], _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_13__["CvcUserTagComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], _shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_16__["CvcStatusTagComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__["NzEmptyComponent"]], pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_18__["TimeagoPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return FlagListComponent;
})();


/***/ }),

/***/ "W80v":
/*!**************************************************************************!*\
  !*** ./src/app/forms/comments/forms/comment-input/comment-input.form.ts ***!
  \**************************************************************************/
/*! exports provided: CvcCommentInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentInputForm", function() { return CvcCommentInputForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/mention */ "JK0T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _components_comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/comments/comment-body/comment-body.component */ "bY7t");














function CvcCommentInputForm_ng_container_0_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const entity_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r5.displayName);
    }
}
function CvcCommentInputForm_ng_container_0_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-spin", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
}
function CvcCommentInputForm_ng_container_0_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-comment-body", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const previewComment_r7 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentBodySegments", previewComment_r7);
    }
}
const _c0 = function () { return ["#", "@", "$"]; };
function CvcCommentInputForm_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-mention", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnSearchChange", function CvcCommentInputForm_ng_container_0_Template_nz_mention_nzOnSearchChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSearchChange($event); })("nzOnSelect", function CvcCommentInputForm_ng_container_0_Template_nz_mention_nzOnSelect_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.suggestions = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvcCommentInputForm_ng_container_0_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.commentText = $event; })("ngModelChange", function CvcCommentInputForm_ng_container_0_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onCommentChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcCommentInputForm_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function CvcCommentInputForm_ng_container_0_Template_nz_tab_nzClick_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onPreviewButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcCommentInputForm_ng_container_0_ng_container_7_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvcCommentInputForm_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r1 = ctx.ngrxLet;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAnimated", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuggestions", ctx_r0.suggestions)("nzPrefix", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("nzValueWith", ctx_r0.autoCompleteValueFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", viewer_r1 && viewer_r1.canCurate ? "Enter comment (minimum length 10. Use @ to mention users; # to link entities)" : "Please sign in")("ngModel", ctx_r0.commentText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", viewer_r1 && viewer_r1.canCurate ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx_r0.previewLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx_r0.previewComment$));
    }
}
let CvcCommentInputForm = /*@__PURE__*/ (() => {
    class CvcCommentInputForm {
        constructor(previewCommentGql, userTypeaheadGql, entityTypeaheadGql, viewerService) {
            this.previewCommentGql = previewCommentGql;
            this.userTypeaheadGql = userTypeaheadGql;
            this.entityTypeaheadGql = entityTypeaheadGql;
            this.viewerService = viewerService;
            this.commentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.suggestions = [];
            this.roleSuggestions = [{ displayName: 'admins', value: 'admins' }, { displayName: 'editors', value: 'editors' }];
        }
        ngOnInit() {
            this.viewer$ = this.viewerService.viewer$;
            this.commentText = this.comment;
            this.userTypeaheadQueryRef$ = this.userTypeaheadGql.watch({
                queryTerm: ''
            });
            this.userTypeaheadQueryRef$.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => data.userTypeahead), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((users) => this.suggestions = users.map((u) => { return { displayName: u.username, value: u.username }; }));
            this.entityTypeaheadQueryRef$ = this.entityTypeaheadGql.watch({
                queryTerm: ''
            });
            this.entityTypeaheadQueryRef$.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => data.entityTypeahead), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((tagEntities) => this.suggestions = tagEntities.map((t) => {
                return {
                    displayName: t.displayName,
                    value: this.tagForEntityTypeAndId(t.tagType, t.entityId)
                };
            }));
        }
        ngOnChanges() {
            this.commentText = this.comment;
        }
        autoCompleteValueFor(x) {
            return x.value;
        }
        tagForEntityTypeAndId(entityType, id) {
            switch (entityType) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].Gene):
                    return `GID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].Variant:
                    return `VID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].VariantGroup:
                    return `VGID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].EvidenceItem:
                    return `EID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].Assertion:
                    return `AID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].Revision:
                    return `RID${id}`;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["TaggableEntity"].Role:
                    return Object.keys(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["UserRole"])[id];
            }
        }
        resetForm() {
            this.commentText = '';
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        onPreviewButtonClicked() {
            if (this.commentText) {
                this.previewComment$ = this.previewCommentGql.watch({ commentText: this.commentText }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => { return data.previewCommentText; }));
                this.previewLoading$ = this.previewCommentGql.watch({ commentText: this.commentText }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ loading }) => { return loading; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            }
        }
        onSearchChange({ value, prefix }) {
            if (prefix === "@") {
                this.userTypeaheadQueryRef$.refetch({ queryTerm: value });
            }
            else if (prefix == '$') {
                this.suggestions = this.roleSuggestions.filter((role) => role.value.startsWith(value));
            }
            else {
                this.entityTypeaheadQueryRef$.refetch({ queryTerm: value });
            }
        }
        onCommentChanged(e) {
            this.commentChange.emit(e);
        }
    }
    CvcCommentInputForm.ɵfac = function CvcCommentInputForm_Factory(t) { return new (t || CvcCommentInputForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["PreviewCommentGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["UserTypeaheadGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EntityTypeaheadGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"])); };
    CvcCommentInputForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcCommentInputForm, selectors: [["cvc-comment-input"]], inputs: { comment: "comment" }, outputs: { commentChange: "commentChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngrxLet"], [3, "nzAnimated"], ["nzTitle", "Write"], ["nzNotFoundContent", "No matches...", 3, "nzSuggestions", "nzPrefix", "nzValueWith", "nzOnSearchChange", "nzOnSelect"], ["nzMentionTrigger", "", "nz-input", "", "rows", "4", 2, "width", "100%", 3, "placeholder", "ngModel", "ngModelChange"], [4, "nzMentionSuggestion"], ["nzTitle", "Preview", 3, "nzClick"], [4, "ngIf"], ["nzTip", "Loading..."], [3, "commentBodySegments"]], template: function CvcCommentInputForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcCommentInputForm_ng_container_0_Template, 11, 14, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx.viewer$);
            }
        }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabComponent"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_7__["NzMentionComponent"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_7__["NzMentionTriggerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_7__["NzMentionSuggestionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinComponent"], _components_comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_11__["CvcCommentBodyComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["PushPipe"]], styles: [":host {\n  display: block;\n}\nnz-space {\n  width: 100%;\n}\nnz-form-item:last-of-type {\n  margin-bottom: 0;\n}\n"], encapsulation: 2 });
    return CvcCommentInputForm;
})();


/***/ }),

/***/ "aFVg":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments/comment-list/comment-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: CvcCommentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentListModule", function() { return CvcCommentListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/participant-list/participant-list.module */ "VwQC");
/* harmony import */ var _comment_display_comment_display_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment-display/comment-display.module */ "FlBe");
/* harmony import */ var _app_forms_comments_forms_comment_add_comment_add_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/forms/comments/forms/comment-add/comment-add.module */ "7ljW");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















let CvcCommentListModule = /*@__PURE__*/ (() => {
    class CvcCommentListModule {
    }
    CvcCommentListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CvcCommentListModule });
    CvcCommentListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function CvcCommentListModule_Factory(t) { return new (t || CvcCommentListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["CvcPipesModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"],
                _app_forms_comments_forms_comment_add_comment_add_module__WEBPACK_IMPORTED_MODULE_10__["CvcCommentAddModule"],
                _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_8__["CvcParticipantListModule"],
                _comment_display_comment_display_module__WEBPACK_IMPORTED_MODULE_9__["CvcCommentDisplayModule"],
            ]] });
    return CvcCommentListModule;
})();


/***/ }),

/***/ "bY7t":
/*!****************************************************************************!*\
  !*** ./src/app/components/comments/comment-body/comment-body.component.ts ***!
  \****************************************************************************/
/*! exports provided: CvcCommentBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentBodyComponent", function() { return CvcCommentBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var _revisions_revision_tag_revision_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../revisions/revision-tag/revision-tag.component */ "urcv");
/* harmony import */ var _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var _variant_groups_variant_group_tag_variant_group_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../variant-groups/variant-group-tag/variant-group-tag.component */ "Lirz");
/* harmony import */ var _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../evidence/evidence-tag/evidence-tag.component */ "PH4A");
/* harmony import */ var _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assertions/assertions-tag/assertion-tag.component */ "u+rr");
/* harmony import */ var _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organizations/organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");












function CvcCommentBodyComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", c_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-user-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", c_r1);
    }
}
const _c0 = function (a0, a1) { return { id: a0, name: a1 }; };
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-revision-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("revision", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-gene-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gene", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-variant-tag", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-variant-group-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variantgroup", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-evidence-tag", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("evidence", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-assertion-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("assertion", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-organization-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("org", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, c_r1.entityId, c_r1.displayName));
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_span_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzType", "civic-", c_r1.displayName.slice(0, -1), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r1.displayName, "");
    }
}
function CvcCommentBodyComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_2_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_3_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_4_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_5_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_6_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_7_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_8_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvcCommentBodyComponent_ng_container_0_ng_container_3_span_9_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", c_r1.tagType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "REVISION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "GENE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "VARIANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "VARIANT_GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "EVIDENCE_ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ASSERTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ORGANIZATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ROLE");
    }
}
function CvcCommentBodyComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentBodyComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcCommentBodyComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentBodyComponent_ng_container_0_ng_container_3_Template, 10, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const c_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.__typename == "CommentTextSegment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.__typename == "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.__typename == "CommentTagSegment");
    }
}
let CvcCommentBodyComponent = /*@__PURE__*/ (() => {
    class CvcCommentBodyComponent {
        ngOnInit() {
            if (this.commentBodySegments === undefined) {
                throw new Error('Must pass a list of comment body segments into comment body component.');
            }
        }
    }
    CvcCommentBodyComponent.ɵfac = function CvcCommentBodyComponent_Factory(t) { return new (t || CvcCommentBodyComponent)(); };
    CvcCommentBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcCommentBodyComponent, selectors: [["cvc-comment-body"]], inputs: { commentBodySegments: "commentBodySegments" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "innerHtml"], [3, "user"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "revision"], [3, "gene"], [3, "variant"], [3, "variantgroup"], [3, "evidence"], [3, "assertion"], [3, "org"], ["nz-icon", "", "nzTheme", "twotone", "nzTwotoneColor", "#A0D8F5", 3, "nzType"]], template: function CvcCommentBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcCommentBodyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentBodySegments);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_2__["CvcUserTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _revisions_revision_tag_revision_tag_component__WEBPACK_IMPORTED_MODULE_3__["CvcRevisionTagComponent"], _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_4__["CvcGeneTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_5__["CvcVariantTagComponent"], _variant_groups_variant_group_tag_variant_group_tag_component__WEBPACK_IMPORTED_MODULE_6__["CvcVariantGroupTagComponent"], _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_7__["CvcEvidenceTagComponent"], _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcAssertionTagComponent"], _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcOrganizationTagComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], styles: [""] });
    return CvcCommentBodyComponent;
})();


/***/ }),

/***/ "ip/c":
/*!**********************************************************!*\
  !*** ./src/app/core/utilities/mutation-state-wrapper.ts ***!
  \**********************************************************/
/*! exports provided: MutatorWithState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutatorWithState", function() { return MutatorWithState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class MutatorWithState {
    constructor(networkErrorService) {
        this.networkErrorService = networkErrorService;
    }
    mutate(mutation, vars) {
        let destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        let stateVals = {
            isSubmitting$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            submitSuccess$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            submitError$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]),
            cleanup: () => { destroy$.next(); destroy$.complete(); }
        };
        stateVals.isSubmitting$.next(true);
        mutation.mutate(vars)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { stateVals.isSubmitting$.next(false); })).subscribe({
            error: (error) => {
                if (error.graphQLErrors.length > 0) {
                    stateVals.submitError$.next(error.graphQLErrors.map(e => e.message));
                }
                else if (error.networkError) {
                    this.networkErrorService.networkError$.next(error.networkError);
                }
                stateVals.cleanup();
            },
            complete: () => {
                stateVals.submitError$.next([]);
                stateVals.submitSuccess$.next(true);
                this.networkErrorService.networkError$.next(undefined);
                stateVals.cleanup();
            },
        });
        return stateVals;
    }
}


/***/ }),

/***/ "jLYH":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shared/entity-subscription-button/entity-subscription-button.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CvcEntitySubscriptionButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEntitySubscriptionButtonModule", function() { return CvcEntitySubscriptionButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcEntitySubscriptionButtonModule = /*@__PURE__*/ (() => {
    class CvcEntitySubscriptionButtonModule {
    }
    CvcEntitySubscriptionButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcEntitySubscriptionButtonModule });
    CvcEntitySubscriptionButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcEntitySubscriptionButtonModule_Factory(t) { return new (t || CvcEntitySubscriptionButtonModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzToolTipModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponentModule"]
            ]] });
    return CvcEntitySubscriptionButtonModule;
})();


/***/ }),

/***/ "mfRL":
/*!**********************************************************************!*\
  !*** ./src/app/forms/comments/forms/comment-add/comment-add.form.ts ***!
  \**********************************************************************/
/*! exports provided: CvcCommentAddForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentAddForm", function() { return CvcCommentAddForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comment-input/comment-input.form */ "W80v");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/form-errors-alert/form-errors-alert.component */ "IjnV");























function CvcCommentAddForm_nz_alert_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function CvcCommentAddForm_nz_alert_1_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSuccessBannerClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcCommentAddForm_nz_form_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-form-errors-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.errorMessages);
    }
}
let CvcCommentAddForm = /*@__PURE__*/ (() => {
    class CvcCommentAddForm {
        constructor(viewerService, addCommentGql, networkErrorService) {
            this.viewerService = viewerService;
            this.addCommentGql = addCommentGql;
            this.networkErrorService = networkErrorService;
            this.commentAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.success = false;
            this.errorMessages = [];
            this.loading = false;
            // subscribing to viewer$ and setting local org, mostRecentOrg
            // so that mostRecentOrg can be updated by org-selector's selectOrg events
            this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                .subscribe((v) => {
                this.organizations = v.organizations;
                this.mostRecentOrg = v.mostRecentOrg;
            });
            this.addCommentMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_3__["MutatorWithState"](networkErrorService);
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
        submitComment() {
            if (this.commentText) {
                this.errorMessages = [];
                let newCommentInput = {
                    body: this.commentText,
                    subject: this.subject,
                    organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id,
                };
                let state = this.addCommentMutator.mutate(this.addCommentGql, {
                    input: newCommentInput,
                });
                state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((res) => {
                    if (res) {
                        this.resetForm();
                        this.success = true;
                    }
                });
                state.submitError$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((errs) => {
                    if (errs) {
                        this.errorMessages = errs;
                        this.success = false;
                    }
                });
                state.isSubmitting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((loading) => {
                    this.loading = loading;
                });
            }
        }
        resetForm() {
            this.commentText = '';
            this.commentAddedEvent.emit();
        }
        onSuccessBannerClose() {
            this.resetForm();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    CvcCommentAddForm.ɵfac = function CvcCommentAddForm_Factory(t) { return new (t || CvcCommentAddForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_5__["AddCommentGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__["NetworkErrorsService"])); };
    CvcCommentAddForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcCommentAddForm, selectors: [["cvc-comment-add"]], inputs: { subject: "subject" }, outputs: { commentAddedEvent: "commentAddedEvent" }, decls: 12, vars: 6, consts: [["nzBanner", "", "nzMessage", "Comment submitted", "nzType", "success", "nzCloseable", "", 3, "nzOnClose", 4, "ngIf"], ["nz-form", "", "nzLayout", "vertical", 3, "ngSubmit"], [4, "ngIf"], [3, "comment", "commentChange"], ["nzTip", "Submitting", 3, "nzSpinning"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"], ["nzBanner", "", "nzMessage", "Comment submitted", "nzType", "success", "nzCloseable", "", 3, "nzOnClose"], [3, "errors"]], template: function CvcCommentAddForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentAddForm_nz_alert_1_Template, 1, 0, "nz-alert", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CvcCommentAddForm_Template_form_ngSubmit_2_listener() { return ctx.submitComment(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentAddForm_nz_form_item_3_Template, 2, 1, "nz-form-item", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "cvc-comment-input", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentChange", function CvcCommentAddForm_Template_cvc_comment_input_commentChange_4_listener($event) { return ctx.commentText = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-spin", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-control");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cvc-form-buttons");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "cvc-org-selector-btn-group", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedOrgChange", function CvcCommentAddForm_Template_cvc_org_selector_btn_group_selectedOrgChange_9_listener($event) { return ctx.mostRecentOrg = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add Comment ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessages.length > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", ctx.commentText);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.loading);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedOrg", ctx.mostRecentOrg);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || !(ctx.commentText !== undefined && ctx.commentText.length >= 10));
            }
        }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"], _comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_11__["CvcCommentInputForm"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_15__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_18__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_20__["NzAlertComponent"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_21__["CvcFormErrorsAlertComponent"]], styles: [":host {\n  display: block;\n}\nnz-space {\n  width: 100%;\n}\nnz-form-item:last-of-type {\n  margin-bottom: 0;\n}\n"], encapsulation: 2 });
    return CvcCommentAddForm;
})();


/***/ }),

/***/ "pgmM":
/*!*********************************************************************!*\
  !*** ./src/app/forms/flags/forms/flag-resolve/flag-resolve.form.ts ***!
  \*********************************************************************/
/*! exports provided: CvcFlagResolveForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagResolveForm", function() { return CvcFlagResolveForm; });
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../comments/forms/comment-input/comment-input.form */ "W80v");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");

























function CvcFlagResolveForm_nz_alert_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function CvcFlagResolveForm_nz_alert_0_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSuccessBannerClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_1_Template, 1, 0, undefined, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    }
}
function CvcFlagResolveForm_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", viewer_r8.isEditor || viewer_r8.isAdmin || ctx_r9.flag.flaggingUser.id === viewer_r8.id)("ngIfElse", _r12);
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_2_1_ng_template_0_Template(rf, ctx) { }
function CvcFlagResolveForm_ng_container_1_ng_template_2_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_ng_container_1_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_ng_template_2_1_Template, 1, 0, undefined, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_4_1_ng_template_0_Template(rf, ctx) { }
function CvcFlagResolveForm_ng_container_1_ng_template_4_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_ng_container_1_ng_template_4_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_ng_template_4_1_Template, 1, 0, undefined, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_6_button_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPopoverVisibleChange", function CvcFlagResolveForm_ng_container_1_ng_template_6_button_0_Template_button_nzPopoverVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r25.flagResolvePopoverVisible = $event; })("click", function CvcFlagResolveForm_ng_container_1_ng_template_6_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r27.flagResolvePopoverVisible = !ctx_r27.flagResolvePopoverVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Resolve Flag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const viewer_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngrxLet;
        const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPopoverTitle", _r2)("nzPopoverVisible", ctx_r24.flagResolvePopoverVisible)("nzPopoverContent", _r4)("nzPopoverTrigger", undefined)("disabled", !viewer_r8.signedIn || viewer_r8.isCurator && ctx_r24.flag.flaggingUser.id != viewer_r8.id);
    }
}
function CvcFlagResolveForm_ng_container_1_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_ng_container_1_ng_template_6_button_0_Template, 3, 5, "button", 12);
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r15.success);
    }
}
function CvcFlagResolveForm_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CvcFlagResolveForm_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CvcFlagResolveForm_ng_container_1_ng_template_4_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CvcFlagResolveForm_ng_container_1_ng_template_6_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r8 = ctx.ngrxLet;
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", viewer_r8.signedIn)("ngIfElse", _r10);
    }
}
const _c0 = function () { return { "float": "right" }; };
function CvcFlagResolveForm_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Resolve Flag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CvcFlagResolveForm_ng_template_2_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r29.flagResolvePopoverVisible = false; return ctx_r29.errorMessages = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
    }
}
function CvcFlagResolveForm_ng_template_4_nz_alert_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-alert", 25);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDescription", _r32);
    }
}
function CvcFlagResolveForm_ng_template_4_ng_template_1_li_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r35 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", error_r35, " ");
    }
}
function CvcFlagResolveForm_ng_template_4_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_template_4_ng_template_1_li_1_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r33.errorMessages);
    }
}
function CvcFlagResolveForm_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_ng_template_4_nz_alert_0_Template, 1, 1, "nz-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_template_4_ng_template_1_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CvcFlagResolveForm_ng_template_4_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.resolveFlag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "cvc-comment-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("commentChange", function CvcFlagResolveForm_ng_template_4_Template_cvc_comment_input_commentChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-spin", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "cvc-org-selector-btn-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedOrgChange", function CvcFlagResolveForm_ng_template_4_Template_cvc_org_selector_btn_group_selectedOrgChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.onOrgSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Resolve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.errorMessages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("comment", ctx_r5.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpinning", ctx_r5.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx_r5.comment !== undefined && ctx_r5.comment.length >= 10));
    }
}
let CvcFlagResolveForm = /*@__PURE__*/ (() => {
    class CvcFlagResolveForm {
        constructor(gql, viewerService, networkErrorService) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.networkErrorService = networkErrorService;
            this.errorMessages = [];
            this.loading = false;
            this.success = false;
            this.flagResolvePopoverVisible = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.resolveFlagMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
        }
        ngOnInit() {
            if (this.flag === undefined) {
                throw new Error('Must pass a Flag in to resolve component.');
            }
            this.viewer$ = this.viewerService.viewer$;
            this.viewerService.viewer$.subscribe((v) => {
                this.selectedOrg = v.mostRecentOrg;
            });
        }
        onOrgSelected(org) {
            this.selectedOrg = org;
        }
        resolveFlag() {
            var _a;
            if (this.comment) {
                this.errorMessages = [];
                let state = this.resolveFlagMutator.mutate(this.gql, {
                    input: {
                        id: this.flag.id,
                        comment: this.comment,
                        organizationId: (_a = this.selectedOrg) === null || _a === void 0 ? void 0 : _a.id
                    },
                });
                state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((res) => {
                    if (res) {
                        this.flagResolvePopoverVisible = false;
                        this.success = true;
                        if (this.flagResolvedCallback) {
                            this.flagResolvedCallback();
                        }
                    }
                });
                state.submitError$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((res) => {
                    if (res.length > 0) {
                        this.success = false;
                        this.errorMessages = res;
                    }
                });
                state.isSubmitting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((loading) => { this.loading = loading; });
            }
        }
        onSuccessBannerClose() {
            this.success = false;
            if (this.flagResolvedCallback) {
                this.flagResolvedCallback();
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    CvcFlagResolveForm.ɵfac = function CvcFlagResolveForm_Factory(t) { return new (t || CvcFlagResolveForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["ResolveFlagGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_6__["NetworkErrorsService"])); };
    CvcFlagResolveForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CvcFlagResolveForm, selectors: [["cvc-flag-resolve"]], inputs: { flag: "flag", flagResolvedCallback: "flagResolvedCallback" }, decls: 6, vars: 2, consts: [["nzBanner", "", "nzMessage", "Flag resolved.", "nzType", "success", "nzCloseable", "", 3, "nzOnClose", 4, "ngIf"], [4, "ngrxLet"], ["flagResolvePopoverTitleTemplate", ""], ["flagResolvePopoverContentTemplate", ""], ["nzBanner", "", "nzMessage", "Flag resolved.", "nzType", "success", "nzCloseable", "", 3, "nzOnClose"], [4, "ngIf", "ngIfElse"], ["notSignedIn", ""], ["noPermissions", ""], ["submitButton", ""], [4, "ngTemplateOutlet"], ["nz-tooltip", "", "nzTooltipTitle", "Must be signed in to resolve flag."], ["nz-tooltip", "", "nzTooltipTitle", "If you are not an editor, you can only resolve flags you opened."], ["nz-button", "", "nz-popover", "", "nzSize", "small", "nzPopoverPlacement", "bottom", 3, "nzPopoverTitle", "nzPopoverVisible", "nzPopoverContent", "nzPopoverTrigger", "disabled", "nzPopoverVisibleChange", "click", 4, "ngIf"], ["nz-button", "", "nz-popover", "", "nzSize", "small", "nzPopoverPlacement", "bottom", 3, "nzPopoverTitle", "nzPopoverVisible", "nzPopoverContent", "nzPopoverTrigger", "disabled", "nzPopoverVisibleChange", "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], [3, "ngStyle"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], ["nzType", "error", "nzShowIcon", "", "nzMessage", "Error Resolving Flag", 3, "nzDescription", 4, "ngIf"], ["errorContents", ""], ["nzType", "inner", 2, "width", "300px"], ["nz-form", "", "nzLayout", "vertical", 3, "ngSubmit"], [3, "comment", "commentChange"], ["nzTip", "Submitting", 3, "nzSpinning"], [3, "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"], ["nzType", "error", "nzShowIcon", "", "nzMessage", "Error Resolving Flag", 3, "nzDescription"], [4, "ngFor", "ngForOf"]], template: function CvcFlagResolveForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CvcFlagResolveForm_nz_alert_0_Template, 1, 0, "nz-alert", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CvcFlagResolveForm_ng_container_1_Template, 8, 2, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CvcFlagResolveForm_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CvcFlagResolveForm_ng_template_4_Template, 13, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.success);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.viewer$);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_14__["NzPopoverDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormDirective"], _comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_19__["CvcCommentInputForm"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__["NzSpinComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_22__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_23__["CvcOrgSelectorBtnGroupComponent"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_24__["CvcOrgSelectorBtnDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [""] });
    return CvcFlagResolveForm;
})();


/***/ }),

/***/ "rQDA":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shared/contributor-stack/contributor-stack.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CvcContributorStackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcContributorStackModule", function() { return CvcContributorStackModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _app_components_users_user_popover_user_popover_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/users/user-popover/user-popover.module */ "dBhZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CvcContributorStackModule = /*@__PURE__*/ (() => {
    class CvcContributorStackModule {
    }
    CvcContributorStackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CvcContributorStackModule });
    CvcContributorStackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CvcContributorStackModule_Factory(t) { return new (t || CvcContributorStackModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__["NzAvatarModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_3__["NzPopoverModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__["NzListModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["CvcPipesModule"],
                _app_components_users_user_popover_user_popover_module__WEBPACK_IMPORTED_MODULE_6__["CvcUserPopoverModule"]
            ]] });
    return CvcContributorStackModule;
})();


/***/ }),

/***/ "rTZz":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/shared/entity-subscription-button/entity-subscription-button.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CvcEntitySubscriptionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEntitySubscriptionButtonComponent", function() { return CvcEntitySubscriptionButtonComponent; });
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ "9A8T");














function CvcEntitySubscriptionButtonComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvcEntitySubscriptionButtonComponent_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.unsubscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r0.isSubmitting);
    }
}
function CvcEntitySubscriptionButtonComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvcEntitySubscriptionButtonComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r2.isSubmitting);
    }
}
let CvcEntitySubscriptionButtonComponent = /*@__PURE__*/ (() => {
    class CvcEntitySubscriptionButtonComponent {
        constructor(isSubscribedGQL, unsubscribeMutation, subscribeMutation, networkErrorService) {
            this.isSubscribedGQL = isSubscribedGQL;
            this.unsubscribeMutation = unsubscribeMutation;
            this.subscribeMutation = subscribeMutation;
            this.networkErrorService = networkErrorService;
            this.isSubmitting = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.unsubscribeMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
            this.subscribeMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
        }
        ngOnInit() {
            if (this.viewer === undefined) {
                throw new Error("Must pass in a viewer to the CvcEntitySubscriptionButtonComponent");
            }
            if (this.typename === undefined) {
                throw new Error("Must pass in a typename to the CvcEntitySubscriptionButtonComponent");
            }
            if (this.subscribableId === undefined) {
                throw new Error("Must pass in a subscribableId to the CvcEntitySubscriptionButtonComponent");
            }
            let entityType = this.typename;
            this.subscribable = {
                id: this.subscribableId,
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribableEntities"][entityType]
            };
            this.queryRef = this.isSubscribedGQL.watch({ subscribable: this.subscribable });
            this.existingSubscription$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => data.subscriptionForEntity));
        }
        subscribe() {
            if (this.subscribable) {
                this.isSubmitting = true;
                let state = this.subscribeMutator.mutate(this.subscribeMutation, {
                    input: { subscribables: [this.subscribable] }
                });
                state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((s) => {
                    var _a;
                    if (s) {
                        (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch();
                        this.isSubmitting = false;
                    }
                });
            }
        }
        unsubscribe() {
            if (this.subscribable) {
                this.isSubmitting = true;
                let state = this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
                    input: { subscribables: [this.subscribable] }
                });
                state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((s) => {
                    var _a;
                    if (s) {
                        (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch();
                        this.isSubmitting = false;
                    }
                });
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    CvcEntitySubscriptionButtonComponent.ɵfac = function CvcEntitySubscriptionButtonComponent_Factory(t) { return new (t || CvcEntitySubscriptionButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscriptionForEntityGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["UnsubscribeGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribeGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"])); };
    CvcEntitySubscriptionButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcEntitySubscriptionButtonComponent, selectors: [["cvc-entity-subscription-button"]], inputs: { viewer: "viewer", typename: "typename", subscribableId: "subscribableId" }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noSub", ""], ["nz-button", "", "nz-tooltip", "Unsubscribe", "nzSize", "small", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "bell", "nzTheme", "fill"], ["nz-button", "", "nz-tooltip", "Subscribe", "nzSize", "small", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "bell", "nzTheme", "outline"]], template: function CvcEntitySubscriptionButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CvcEntitySubscriptionButtonComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CvcEntitySubscriptionButtonComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.existingSubscription$))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcEntitySubscriptionButtonComponent;
})();


/***/ }),

/***/ "sMOw":
/*!*******************************************************************!*\
  !*** ./src/app/components/flags/flaggable/flaggable.component.ts ***!
  \*******************************************************************/
/*! exports provided: CvcFlaggableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlaggableComponent", function() { return CvcFlaggableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _flaggable_options_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flaggable-options.directive */ "Qdkw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");







const _c0 = ["cvcFlaggable", ""];
function CvcFlaggableComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
}
function CvcFlaggableComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function CvcFlaggableComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcFlaggableComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    }
}
function CvcFlaggableComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", _r7);
    }
}
function CvcFlaggableComponent_ng_container_3_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.flags, " open flags ");
    }
}
function CvcFlaggableComponent_ng_container_3_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function CvcFlaggableComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-ribbon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcFlaggableComponent_ng_container_3_ng_template_2_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcFlaggableComponent_ng_container_3_ng_template_4_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcFlaggableComponent_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzText", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    }
}
const _c1 = ["*"];
let CvcFlaggableComponent = /*@__PURE__*/ (() => {
    class CvcFlaggableComponent {
        constructor(renderer) {
            this.renderer = renderer;
        }
        ngOnChanges() {
            (this.flags && this.flags === 0) ? this.removeFlagged() : this.addFlagged();
        }
        ngAfterViewInit() {
            (this.flags && this.flags === 0) ? this.removeFlagged() : this.addFlagged();
        }
        addFlagged() {
            if (this.flaggedChild) {
                this.renderer.addClass(this.flaggedChild.nativeElement, 'flaggedChild');
            }
        }
        removeFlagged() {
            if (this.flaggedChild) {
                this.renderer.removeClass(this.flaggedChild.nativeElement, 'flaggedChild');
            }
        }
    }
    CvcFlaggableComponent.ɵfac = function CvcFlaggableComponent_Factory(t) { return new (t || CvcFlaggableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    CvcFlaggableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcFlaggableComponent, selectors: [["", "cvcFlaggable", ""]], contentQueries: function CvcFlaggableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _flaggable_options_directive__WEBPACK_IMPORTED_MODULE_1__["CvcFlaggableOptionsDirective"], 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.flaggedChild = _t.first);
            }
        }, inputs: { flags: "flags", entity: "entity" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [["flaggedContent", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["nzPlacement", "start", "nzColor", "#ff3333", 3, "nzText"], ["flaggedText", ""], ["flaggedTooltip", ""], ["routerLink", "flags", 2, "color", "#FFF"], ["nz-icon", "", "nzType", "flag", "nzTheme", "fill", "nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipColor", "#FF3333", 3, "nzTooltipTitle"]], template: function CvcFlaggableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcFlaggableComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcFlaggableComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcFlaggableComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flags === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flags);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__["ɵb"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"]], styles: [""] });
    return CvcFlaggableComponent;
})();


/***/ }),

/***/ "vm1A":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/contributor-avatars/contributor-avatars.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CvcContributorAvatarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcContributorAvatarsComponent", function() { return CvcContributorAvatarsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contributor_stack_contributor_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contributor-stack/contributor-stack.component */ "OhKa");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");







function CvcContributorAvatarsComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-contributor-stack", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const curators_r6 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contributors", curators_r6);
    }
}
function CvcContributorAvatarsComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " None ");
    }
}
function CvcContributorAvatarsComponent_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-contributor-stack", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const editors_r7 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contributors", editors_r7);
    }
}
function CvcContributorAvatarsComponent_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " None ");
    }
}
let CvcContributorAvatarsComponent = /*@__PURE__*/ (() => {
    class CvcContributorAvatarsComponent {
        constructor(gql) {
            this.gql = gql;
        }
        ngOnInit() {
            if (this.subscribable === undefined) {
                throw new Error('Must pass a subscribable into ContributorAvatars component.');
            }
            let observable = this.gql.watch({
                subscribable: this.subscribable,
            }).valueChanges;
            this.curators$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'contributors', 'curators'));
            this.editors$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'contributors', 'editors'));
        }
    }
    CvcContributorAvatarsComponent.ɵfac = function CvcContributorAvatarsComponent_Factory(t) { return new (t || CvcContributorAvatarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["ContributorAvatarsGQL"])); };
    CvcContributorAvatarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcContributorAvatarsComponent, selectors: [["cvc-contributor-avatars"]], inputs: { subscribable: "subscribable" }, decls: 14, vars: 8, consts: [["nz-typography", "", "nzType", "secondary", 1, "role-group-label"], [1, "role-group"], [4, "ngIf", "ngIfElse"], ["noCurators", ""], ["noEditors", ""], [3, "contributors"]], template: function CvcContributorAvatarsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Curators:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CvcContributorAvatarsComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CvcContributorAvatarsComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Editors:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CvcContributorAvatarsComponent_ng_container_10_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CvcContributorAvatarsComponent_ng_template_12_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
                const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.curators$))("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, ctx.editors$))("ngIfElse", _r4);
            }
        }, directives: [ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__["NzTypographyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _contributor_stack_contributor_stack_component__WEBPACK_IMPORTED_MODULE_5__["CvcContributorStackComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.role-group-label[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.role-group[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.role-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2px;\n}"] });
    return CvcContributorAvatarsComponent;
})();


/***/ })

}]);