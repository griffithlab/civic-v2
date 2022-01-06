(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "D+sV":
/*!****************************************************************************!*\
  !*** ./src/app/components/revisions/revision-list/revision-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: RevisionListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionListModule", function() { return RevisionListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _revision_value_diff_revision_value_diff_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../revision-value-diff/revision-value-diff.module */ "dIH7");
/* harmony import */ var _revision_list_diff_revision_list_diff_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revision-list-diff/revision-list-diff.module */ "Pfrl");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/variant-types/variant-type-tag/variant-type-tag.module */ "XIlT");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/components/shared/status-tag/status-tag.module */ "1JjV");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/forms/comments/forms/comment-input/comment-input.module */ "NV+7");
/* harmony import */ var _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/components/comments/comment-body/comment-body.module */ "T7+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");







































let RevisionListModule = /*@__PURE__*/ (() => {
    class RevisionListModule {
    }
    RevisionListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: RevisionListModule });
    RevisionListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ factory: function RevisionListModule_Factory(t) { return new (t || RevisionListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__["NzTagModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__["NzTypographyModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmptyModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__["NzCheckboxModule"],
                ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__["NzPopoverModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_33__["NzDescriptionsModule"],
                ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_34__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoFormatter"] } }),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_7__["CvcOrgSelectorBtnGroupModule"],
                _revision_list_diff_revision_list_diff_module__WEBPACK_IMPORTED_MODULE_4__["RevisionListDiffModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcSourceTagModule"],
                _revision_value_diff_revision_value_diff_module__WEBPACK_IMPORTED_MODULE_3__["CvcRevisionValueDiffModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcUserTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_15__["CvcDrugTagModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_16__["CvcPhenotypeTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_17__["CvcVariantTagModule"],
                _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_18__["CvcVariantTypeTagModule"],
                _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_21__["CvcStatusTagModule"],
                _app_forms_comments_forms_comment_input_comment_input_module__WEBPACK_IMPORTED_MODULE_35__["CvcCommentInputModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_32__["CvcPipesModule"],
                _app_components_comments_comment_body_comment_body_module__WEBPACK_IMPORTED_MODULE_36__["CvcCommentBodyModule"],
                ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_19__["NzCollapseModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__["NzButtonModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_26__["NzAlertModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_27__["ReactiveComponentModule"]
            ]] });
    return RevisionListModule;
})();


/***/ }),

/***/ "I3fy":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RevisionsListAndFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsListAndFilterComponent", function() { return RevisionsListAndFilterComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _revision_list_revision_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../revision-list/revision-list.component */ "UPPz");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/participant-list/participant-list.component */ "DGRq");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");


















function RevisionsListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RevisionsListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const pageInfo_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.loadMore(pageInfo_r14 == null ? null : pageInfo_r14.endCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RevisionsListAndFilterComponent_ng_container_0_ng_container_7_nz_space_item_1_Template, 3, 0, "nz-space-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r14 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", pageInfo_r14 == null ? null : pageInfo_r14.hasNextPage);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_nz_space_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-tag", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function RevisionsListAndFilterComponent_ng_container_0_nz_space_9_Template_nz_tag_nzOnClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.onSetFilterClearClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Group: ", ctx_r5.filteredSet, "");
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const status_r21 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r21.displayName);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_15_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 19);
    }
    if (rf & 2) {
        const user_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r22.profileImagePath);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_15_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r22.username.charAt(0)));
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RevisionsListAndFilterComponent_ng_container_0_ng_template_15_nz_avatar_0_Template, 1, 1, "nz-avatar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RevisionsListAndFilterComponent_ng_container_0_ng_template_15_ng_template_1_Template, 2, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r22 = ctx.$implicit;
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r22.profileImagePath)("ngIfElse", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r22.username);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const field_r28 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](field_r28.displayName);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_23_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 19);
    }
    if (rf & 2) {
        const user_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", user_r29.profileImagePath);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_23_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, user_r29.username.charAt(0)));
    }
}
function RevisionsListAndFilterComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RevisionsListAndFilterComponent_ng_container_0_ng_template_23_nz_avatar_0_Template, 1, 1, "nz-avatar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RevisionsListAndFilterComponent_ng_container_0_ng_template_23_ng_template_1_Template, 2, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r29 = ctx.$implicit;
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r29.profileImagePath)("ngIfElse", _r31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r29.username);
    }
}
function RevisionsListAndFilterComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "cvc-revision-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("revisionSetSelectedEvent", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_revision_list_revisionSetSelectedEvent_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.onRevisionSetSelected($event); })("revisionMutationCompleted", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_revision_list_revisionMutationCompleted_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RevisionsListAndFilterComponent_ng_container_0_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RevisionsListAndFilterComponent_ng_container_0_nz_space_9_Template, 5, 1, "nz-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "cvc-participant-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.onStatusSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RevisionsListAndFilterComponent_ng_container_0_ng_template_11_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "cvc-participant-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.onRevisorSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RevisionsListAndFilterComponent_ng_container_0_ng_template_15_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "cvc-participant-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.onFieldNameSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RevisionsListAndFilterComponent_ng_container_0_ng_template_19_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "cvc-participant-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("participantSelectedEvent", function RevisionsListAndFilterComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.onResolverSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RevisionsListAndFilterComponent_ng_container_0_ng_template_23_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("revisions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, ctx_r0.revisions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.pageInfo$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.filteredSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preselectedOption", ctx_r0.selectableStatuses[0])("participantList", ctx_r0.selectableStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 11, ctx_r0.uniqueRevisors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 13, ctx_r0.revisionFields$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 15, ctx_r0.uniqueResolvers$));
    }
}
function RevisionsListAndFilterComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
}
function RevisionsListAndFilterComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-empty", 24);
    }
}
function RevisionsListAndFilterComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RevisionsListAndFilterComponent_ng_template_2_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RevisionsListAndFilterComponent_ng_template_2_ng_template_2_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r2.isLoading$))("ngIfElse", _r43);
    }
}
let RevisionsListAndFilterComponent = /*@__PURE__*/ (() => {
    class RevisionsListAndFilterComponent {
        constructor(gql, route) {
            this.gql = gql;
            this.route = route;
            this.filteredSet = undefined;
            this.selectableStatuses = [
                { id: 4, displayName: 'New', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionStatus"].New },
                { id: 1, displayName: 'Accepted', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionStatus"].Accepted },
                { id: 2, displayName: 'Rejected', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionStatus"].Rejected },
                { id: 3, displayName: 'Superseded', value: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionStatus"].Superseded },
            ];
            this.defaultPageSize = 10;
        }
        ngOnInit() {
            this.routeSub = this.route.params.subscribe((params) => {
                this.queryRef = this.gql.watch({
                    first: this.defaultPageSize,
                    subject: { id: this.id, entityType: this.entityType },
                    status: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionStatus"].New
                });
                let observable = this.queryRef.valueChanges;
                this.revisions$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'revisions', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((edges) => {
                    return edges.map((e) => e.node);
                }));
                this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.loading), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true));
                this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'revisions', 'pageInfo'));
                this.uniqueRevisors$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a; return (_a = data.revisions) === null || _a === void 0 ? void 0 : _a.uniqueRevisors; }));
                this.uniqueResolvers$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a; return (_a = data.revisions) === null || _a === void 0 ? void 0 : _a.uniqueResolvers; }));
                this.revisionFields$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => {
                    var _a;
                    return (_a = data.revisions) === null || _a === void 0 ? void 0 : _a.revisedFieldNames.map((f, i) => {
                        return Object.assign(Object.assign({}, f), { id: i });
                    });
                }));
                this.unfilteredCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'revisions', 'unfilteredCountForSubject'));
            });
        }
        ngOnDestroy() {
            var _a;
            (_a = this.routeSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
        onFieldNameSelected(field) {
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                fieldName: field ? field.name : undefined
            });
        }
        onRevisorSelected(user) {
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                originatingUserId: user ? user.id : undefined
            });
        }
        onResolverSelected(user) {
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                resolvingUserId: user ? user.id : undefined
            });
        }
        onStatusSelected(status) {
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                status: status ? status.value : undefined
            });
        }
        onRevisionSetSelected(revisionsetId) {
            this.filteredSet = revisionsetId;
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                revisionsetId: revisionsetId ? revisionsetId : undefined
            });
        }
        onSetFilterClearClicked() {
            this.filteredSet = undefined;
            this.queryRef.refetch({
                subject: { id: this.id, entityType: this.entityType },
                revisionsetId: undefined
            });
        }
        refresh() {
            this.queryRef.refetch();
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
    RevisionsListAndFilterComponent.ɵfac = function RevisionsListAndFilterComponent_Factory(t) { return new (t || RevisionsListAndFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["RevisionsGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    RevisionsListAndFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RevisionsListAndFilterComponent, selectors: [["cvc-revisions-list-and-filter"]], inputs: { id: "id", entityType: "entityType" }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noRevisions", ""], [3, "nzGutter"], ["nzSpan", "18"], ["nzDirection", "vertical"], [3, "revisions", "revisionSetSelectedEvent", "revisionMutationCompleted"], [4, "ngrxLet"], ["nzSpan", "6"], ["nzDirection", "vertical", 4, "ngIf"], ["listTitle", "Revision Status", 3, "preselectedOption", "participantList", "participantSelectedEvent"], ["itemTemplate", ""], ["listTitle", "Revisors", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Fields Revised", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Resolvers", 3, "participantList", "participantSelectedEvent"], [4, "ngIf"], ["nz-button", "", "nzBlock", "", "nzType", "default", 3, "click"], ["nzMode", "closeable", 3, "nzOnClose"], ["nz-comment-avatar", "", 3, "nzSrc", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", 3, "nzText"], ["noneFound", ""], ["nzJustify", "center"], ["nz-icon", "", "nzType", "loading", 2, "font-size", "32px"], ["nzNotFoundImage", "simple", "nzNotFoundContent", "Entity has no Revisions"]], template: function RevisionsListAndFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RevisionsListAndFilterComponent_ng_container_0_Template, 25, 17, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RevisionsListAndFilterComponent_ng_template_2_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.unfilteredCount$))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], _revision_list_revision_list_component__WEBPACK_IMPORTED_MODULE_7__["RevisionListComponent"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__["CvcParticipantListComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__["NzTagComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return RevisionsListAndFilterComponent;
})();


/***/ }),

/***/ "IvDN":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js ***!
  \************************************************************************************/
/*! exports provided: NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseComponent", function() { return NzCollapseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseModule", function() { return NzCollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapsePanelComponent", function() { return NzCollapsePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["*"];
function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const expandedIcon_r4 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", expandedIcon_r4 || "right")("nzRotate", ctx_r3.nzActive ? 90 : 0);
    }
}
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon);
    }
}
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzHeader);
    }
}
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nzExtra);
    }
}
function NzCollapsePanelComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
    }
}
const NZ_CONFIG_MODULE_NAME = 'collapse';
let NzCollapseComponent = /*@__PURE__*/ (() => {
    class NzCollapseComponent {
        constructor(nzConfigService, cdr, elementRef, directionality) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzAccordion = false;
            this.nzBordered = true;
            this.nzGhost = false;
            this.nzExpandIconPosition = 'left';
            this.dir = 'ltr';
            this.listOfNzCollapsePanelComponent = [];
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-collapse');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.cdr.markForCheck();
            });
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        addPanel(value) {
            this.listOfNzCollapsePanelComponent.push(value);
        }
        removePanel(value) {
            this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
        }
        click(collapse) {
            if (this.nzAccordion && !collapse.nzActive) {
                this.listOfNzCollapsePanelComponent
                    .filter(item => item !== collapse)
                    .forEach(item => {
                    if (item.nzActive) {
                        item.nzActive = false;
                        item.nzActiveChange.emit(item.nzActive);
                        item.markForCheck();
                    }
                });
            }
            collapse.nzActive = !collapse.nzActive;
            collapse.nzActiveChange.emit(collapse.nzActive);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8)); };
    NzCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapseComponent, selectors: [["nz-collapse"]], hostVars: 10, hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered", nzGhost: "nzGhost", nzExpandIconPosition: "nzExpandIconPosition" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCollapseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzCollapseComponent.prototype, "nzAccordion", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzCollapseComponent.prototype, "nzBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzCollapseComponent.prototype, "nzGhost", void 0);
    return NzCollapseComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME$1 = 'collapsePanel';
let NzCollapsePanelComponent = /*@__PURE__*/ (() => {
    class NzCollapsePanelComponent {
        constructor(nzConfigService, cdr, nzCollapseComponent, elementRef) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.nzCollapseComponent = nzCollapseComponent;
            this.elementRef = elementRef;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
            this.nzActive = false;
            this.nzDisabled = false;
            this.nzShowArrow = true;
            this.nzActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-collapse-item');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.cdr.markForCheck();
            });
        }
        clickHeader() {
            if (!this.nzDisabled) {
                this.nzCollapseComponent.click(this);
            }
        }
        markForCheck() {
            this.cdr.markForCheck();
        }
        ngOnInit() {
            this.nzCollapseComponent.addPanel(this);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.nzCollapseComponent.removePanel(this);
        }
    }
    NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzCollapseComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
    NzCollapsePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
            }
        }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 7, consts: [["role", "tab", 1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzCollapsePanelComponent_Template_div_click_0_listener() { return ctx.clickHeader(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.nzActive);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzHeader);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzExtra);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-content-active", ctx.nzActive);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["collapseMotion"]] }, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
    return NzCollapsePanelComponent;
})();
let NzCollapseModule = /*@__PURE__*/ (() => {
    class NzCollapseModule {
    }
    NzCollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzCollapseModule });
    NzCollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]] });
    return NzCollapseModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]; }, exports: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-collapse.js.map


/***/ }),

/***/ "Pfrl":
/*!**************************************************************************************!*\
  !*** ./src/app/components/revisions/revision-list-diff/revision-list-diff.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RevisionListDiffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionListDiffModule", function() { return RevisionListDiffModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let RevisionListDiffModule = /*@__PURE__*/ (() => {
    class RevisionListDiffModule {
    }
    RevisionListDiffModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RevisionListDiffModule });
    RevisionListDiffModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RevisionListDiffModule_Factory(t) { return new (t || RevisionListDiffModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceModule"]
            ]] });
    return RevisionListDiffModule;
})();


/***/ }),

/***/ "TYv7":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/revisions/revision-value-diff/revision-value-diff.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RevisionValueDiffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionValueDiffComponent", function() { return RevisionValueDiffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");


let RevisionValueDiffComponent = /*@__PURE__*/ (() => {
    class RevisionValueDiffComponent {
        constructor() { }
        ngOnInit() {
            if (this.left === undefined) {
                throw new Error("Must provide a left side of the diff.");
            }
            if (this.right === undefined) {
                throw new Error("Must provide a right side of the diff.");
            }
            if (this.entityType === undefined) {
                throw new Error("Must provide a diff.");
            }
        }
    }
    RevisionValueDiffComponent.ɵfac = function RevisionValueDiffComponent_Factory(t) { return new (t || RevisionValueDiffComponent)(); };
    RevisionValueDiffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisionValueDiffComponent, selectors: [["cvc-revision-value-diff"]], inputs: { currentValue: "currentValue", suggestedValue: "suggestedValue", left: "left", right: "right", entityType: "entityType" }, decls: 15, vars: 10, consts: [[3, "nzGutter"], [3, "nzSpan"], [3, "innerHtml"], [1, "diff", "suggested"], [1, "background"]], template: function RevisionValueDiffComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Original ", ctx.entityType, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.left, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.entityType, " Diff");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.right, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Revised ", ctx.entityType, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.suggestedValue, " ");
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]], styles: ["/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n}\n.diff {\n  overflow: auto;\n  width: 100%;\n}\n.diff .background {\n  padding: 4px 8px;\n}\n.diff.insertions .background {\n  background: #f6ffed;\n  color: #237804;\n}\n.diff.deletions .background {\n  background: #fff1f0;\n  color: #a8071a;\n}\n.diff.suggested .background {\n  background: #f0f5ff;\n  color: #10239e;\n}\n.diff.original .background {\n  background: #f0f5ff;\n  color: #10239e;\n}\n.diff del,\n.diff ins {\n  text-decoration: none;\n}\n.diff del strong {\n  font-weight: normal;\n  background: #fcc;\n}\n.diff ins strong {\n  font-weight: normal;\n  background: #9f9;\n}\n.diff .del {\n  font-weight: normal;\n  background: #fee;\n  color: #b00;\n}\n.diff .ins {\n  font-weight: normal;\n  background: #dfd;\n  color: #080;\n}\nul {\n  list-style: none;\n}\n"], encapsulation: 2 });
    return RevisionValueDiffComponent;
})();


/***/ }),

/***/ "UPPz":
/*!*******************************************************************************!*\
  !*** ./src/app/components/revisions/revision-list/revision-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RevisionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionListComponent", function() { return RevisionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var _revision_list_diff_revision_list_diff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../revision-list-diff/revision-list-diff.component */ "ueyT");
/* harmony import */ var _sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sources/source-tag/source-tag.component */ "2a8A");
/* harmony import */ var _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../diseases/cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");
/* harmony import */ var _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../drugs/cvc-drug-tag/cvc-drug-tag.component */ "an+6");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _variant_types_variant_type_tag_variant_type_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../variant-types/variant-type-tag/variant-type-tag.component */ "H2p9");
/* harmony import */ var _phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../phenotypes/phenotype-tag/phenotype-tag.component */ "p+8w");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var _revision_value_diff_revision_value_diff_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../revision-value-diff/revision-value-diff.component */ "TYv7");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../comments/comment-body/comment-body.component */ "bY7t");
/* harmony import */ var _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../shared/status-tag/status-tag.component */ "8E5y");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _forms_comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../forms/comments/forms/comment-input/comment-input.form */ "W80v");
/* harmony import */ var _forms_shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../forms/shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var _forms_shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../forms/shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _core_pipes_enum_to_title_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../core/pipes/enum-to-title-pipe */ "LMbe");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-timeago */ "twue");












































function RevisionListComponent_nz_alert_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function RevisionListComponent_nz_alert_0_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const error_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onErrorBannerClose(error_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", error_r5);
    }
}
function RevisionListComponent_nz_alert_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function RevisionListComponent_nz_alert_1_Template_nz_alert_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSuccessBannerClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzMessage", "Revision(s) successfully ", ctx_r1.success, ".");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-source-tag", 20);
    }
    if (rf & 2) {
        const item_r34 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("source", item_r34);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
const _c0 = function (a0, a1) { return { id: a0, name: a1 }; };
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-disease-tag", 22);
    }
    if (rf & 2) {
        const item_r38 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disease", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r38.id, item_r38.displayName));
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-drug-tag", 24);
    }
    if (rf & 2) {
        const item_r42 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("drug", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r42.id, item_r42.displayName));
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_4_ng_template_2_Template, 1, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_5_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r46 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.displayName, " ");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_5_ng_template_2_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_6_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r50 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.displayName, " ");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_7_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r54 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r54.displayName, " ");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_7_ng_template_2_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_8_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-variant-type-tag", 29);
    }
    if (rf & 2) {
        const item_r58 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variantType", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r58.id, item_r58.displayName));
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_8_ng_template_2_Template, 1, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_9_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-phenotype-tag", 31);
    }
    if (rf & 2) {
        const item_r62 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phenotype", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r62.id, item_r62.displayName));
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_9_ng_template_2_Template, 1, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_10_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-variant-tag", 33);
    }
    if (rf & 2) {
        const item_r66 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r66.id, item_r66.displayName));
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_10_ng_template_2_Template, 1, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_11_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-source-tag", 20);
    }
    if (rf & 2) {
        const item_r70 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("source", item_r70);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cvc-revision-list-diff", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_11_ng_template_2_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diffObject", revision_r15.linkoutData.diffValue);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-revision-value-diff", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", revision_r15.currentValue)("suggestedValue", revision_r15.suggestedValue)("left", revision_r15.linkoutData.diffValue.left)("right", revision_r15.linkoutData.diffValue.right)("entityType", revision_r15.linkoutData.name);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-comment-body", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentBodySegments", revision_r15.resolutionComment.parsedComment);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_cvc_user_tag_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-user-tag", 40);
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", revision_r15.resolver);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_ng_container_4_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-col", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "enumToTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_cvc_user_tag_8_Template, 1, 1, "cvc-user-tag", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", revision_r15.resolutionComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, revision_r15.status), " By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", revision_r15.resolver !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, revision_r15.resolvedAt), " ");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_nz_space_item_6_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-comment-body", 39);
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentBodySegments", revision_r15.creationComment.parsedComment);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_nz_space_item_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_nz_space_item_6_ng_template_2_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverContent", _r79);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_nz_space_item_6_Template, 4, 1, "nz-space-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" RID", revision_r15.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", revision_r15.linkoutData.name, " Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", revision_r15.creationComment);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_label_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 51);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", true);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_label_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 54);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", true);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_ng_template_1_Template_label_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.onRevisionCheckboxClicked($event, revision_r15.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_label_0_Template, 1, 1, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_ng_template_1_Template, 1, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
        const viewer_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", viewer_r10.isCurator && viewer_r10.id != revision_r15.revisor.id)("ngIfElse", _r88);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-divider", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_label_4_Template, 1, 1, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_ng_template_5_Template, 3, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const viewer_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !viewer_r10.signedIn)("ngIfElse", _r85);
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_Template_nz_space_click_0_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submitted By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cvc-user-tag", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cvc-status-tag", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-divider", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r97.onChangesetSelected(revision_r15.revisionsetId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Show Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_ng_container_15_Template, 7, 2, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", revision_r15.revisor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, revision_r15.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", revision_r15.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", revision_r15.status === "NEW");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_2_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_3_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_4_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_5_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_6_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_7_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_8_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_9_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_10_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_11_Template, 4, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_12_Template, 2, 5, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_container_13_Template, 11, 8, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_14_Template, 7, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_ng_template_16_Template, 16, 6, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const revision_r15 = ctx.$implicit;
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r28)("nzExtra", _r30)("nzActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", revision_r15.fieldName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "source_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "disease_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "drug_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "variant_alias_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "clinvar_entry_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "hgvs_expression_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "variant_type_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "phenotype_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "variant_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "source_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", revision_r15.status !== "NEW");
    }
}
function RevisionListComponent_ng_container_2_nz_collapse_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_container_2_nz_collapse_2_nz_collapse_panel_1_Template, 18, 15, "nz-collapse-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.untypedRevisons);
    }
}
function RevisionListComponent_ng_container_2_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 56);
    }
}
function RevisionListComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_nz_collapse_2_Template, 2, 1, "nz-collapse", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RevisionListComponent_ng_container_2_ng_template_3_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExtra", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.revisions && ctx_r2.revisions.length > 0)("ngIfElse", _r12);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_1_ng_template_0_Template(rf, ctx) { }
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_1_Template, 1, 0, undefined, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r114);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_1_ng_template_0_Template(rf, ctx) { }
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_1_Template, 1, 0, undefined, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r114);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzPopoverVisibleChange", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_8_Template_button_nzPopoverVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r125.validationPopoverVisible = $event; })("click", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r127.validationPopoverVisible = !ctx_r127.validationPopoverVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Review Selected Revisions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const viewer_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
        const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverTitle", _r117)("nzPopoverVisible", ctx_r115.validationPopoverVisible)("nzPopoverContent", _r119)("nzPopoverTrigger", undefined)("disabled", ctx_r115.selectedRevisionIds.length === 0 || !viewer_r110.signedIn);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_i_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 71);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverContent", _r106);
    }
}
const _c1 = function () { return { "float": "right" }; };
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Review Selected Revisions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_12_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r129.validationPopoverVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_i_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 80);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverContent", _r106);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cvc-comment-input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentChange", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template_cvc_comment_input_commentChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r132.revisionComment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cvc-org-selector-btn-group", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedOrgChange", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template_cvc_org_selector_btn_group_selectedOrgChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r134.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r135.onRejectRevisionsClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reject Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "cvc-org-selector-btn-group", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedOrgChange", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template_cvc_org_selector_btn_group_selectedOrgChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r136.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r137.onAcceptRevisionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Accept Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_i_14_Template, 1, 1, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const totalErrorCount_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
        const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", ctx_r120.revisionComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedOrg", ctx_r120.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r120.isLoading)("disabled", ctx_r120.revisionComment === undefined || ctx_r120.revisionComment.length < 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedOrg", ctx_r120.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r120.isLoading)("disabled", !(totalErrorCount_r108 == 0 && (ctx_r120.revisionComment === undefined || ctx_r120.revisionComment === "" || ctx_r120.revisionComment.length >= 10)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", totalErrorCount_r108 > 0);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-space", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_6_Template, 2, 1, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_8_Template, 3, 5, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_i_11_Template, 1, 1, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_12_Template, 3, 2, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_14_Template, 15, 8, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r110 = ctx.ngrxLet;
        const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const totalErrorCount_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", viewer_r110.signedIn)("ngIfElse", _r112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", totalErrorCount_r108 > 0);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 16, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r105.viewer$);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_2_nz_list_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r143 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r143);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_2_nz_list_item_2_Template, 2, 1, "nz-list-item", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const genericErrors_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", genericErrors_r104);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_4_nz_descriptions_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-descriptions-item", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const error_r146 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", error_r146.fieldName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r146.error);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-descriptions", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_4_nz_descriptions_item_2_Template, 2, 2, "nz-descriptions-item", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const validationErrors_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", validationErrors_r102);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_2_Template, 3, 1, "nz-card", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_nz_card_4_Template, 3, 1, "nz-card", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const genericErrors_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
        const validationErrors_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", genericErrors_r104.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", validationErrors_r102.length > 0);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_ng_template_2_Template, 5, 2, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r103.totalErrorCount$);
    }
}
function RevisionListComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_ng_template_3_ng_container_0_ng_container_1_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r101.genericErrors$);
    }
}
function RevisionListComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RevisionListComponent_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 2);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r4.validationErrors$);
    }
}
let RevisionListComponent = /*@__PURE__*/ (() => {
    class RevisionListComponent {
        constructor(viewerService, networkErrorService, acceptRevisionsGql, rejectRevisionsGql, validationGql) {
            this.viewerService = viewerService;
            this.networkErrorService = networkErrorService;
            this.acceptRevisionsGql = acceptRevisionsGql;
            this.rejectRevisionsGql = rejectRevisionsGql;
            this.validationGql = validationGql;
            this.selectedRevisionIds = [];
            this.isLoading = false;
            this.success = false;
            this.validationPopoverVisible = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.revisionSetSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.revisionMutationCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.acceptRevisionsMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_2__["MutatorWithState"](networkErrorService);
            this.rejectRevisionsMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_2__["MutatorWithState"](networkErrorService);
        }
        ngOnChanges(changes) {
            this.untypedRevisons = this.revisions;
            this.selectedRevisionIds = [];
            this.queryRef.refetch({
                ids: this.selectedRevisionIds
            });
        }
        ngOnInit() {
            this.viewer$ = this.viewerService.viewer$;
            this.viewerService.viewer$.subscribe((v) => {
                this.mostRecentOrg = v.mostRecentOrg;
            });
            this.queryRef = this.validationGql.watch({
                ids: []
            });
            this.genericErrors$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => { return data.validateRevisionsForAcceptance.genericErrors; }));
            this.validationErrors$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => { return data.validateRevisionsForAcceptance.validationErrors; }));
            this.totalErrorCount$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => { return data.validateRevisionsForAcceptance.genericErrors.length + data.validateRevisionsForAcceptance.validationErrors.length; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0));
            this.untypedRevisons = this.revisions;
        }
        onChangesetSelected(changesetId) {
            this.revisionSetSelectedEvent.emit(changesetId);
        }
        onRevisionCheckboxClicked(value, revisionId) {
            if (value) {
                this.selectedRevisionIds.push(revisionId);
            }
            else {
                this.selectedRevisionIds = this.selectedRevisionIds.filter((i) => i != revisionId);
            }
            this.queryRef.refetch({
                ids: this.selectedRevisionIds
            });
        }
        setupMutationResultHandlers(state, successType) {
            state.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res) {
                    this.isLoading = false;
                    this.revisionMutationCompleted.emit();
                    this.errors = undefined;
                    this.success = successType;
                    this.validationPopoverVisible = false;
                    this.selectedRevisionIds = [];
                }
            });
            state.submitError$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((res) => {
                if (res.length > 0) {
                    this.isLoading = false;
                    this.success = false;
                    this.errors = res;
                    this.validationPopoverVisible = false;
                    this.selectedRevisionIds = [];
                }
            });
        }
        onRejectRevisionsClicked() {
            var _a;
            if (this.revisionComment && this.revisionComment !== "") {
                this.isLoading = true;
                let state = this.rejectRevisionsMutator.mutate(this.rejectRevisionsGql, {
                    input: {
                        ids: this.selectedRevisionIds,
                        organizationId: (_a = this.mostRecentOrg) === null || _a === void 0 ? void 0 : _a.id,
                        comment: this.revisionComment
                    }
                });
                this.setupMutationResultHandlers(state, 'rejected');
            }
        }
        onAcceptRevisionClicked() {
            var _a;
            this.isLoading = true;
            let state = this.acceptRevisionsMutator.mutate(this.acceptRevisionsGql, {
                input: {
                    ids: this.selectedRevisionIds,
                    organizationId: (_a = this.mostRecentOrg) === null || _a === void 0 ? void 0 : _a.id,
                    comment: this.revisionComment === "" ? undefined : this.revisionComment
                }
            });
            this.setupMutationResultHandlers(state, 'accepted');
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
    RevisionListComponent.ɵfac = function RevisionListComponent_Factory(t) { return new (t || RevisionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_6__["AcceptRevisionGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_6__["RejectRevisionGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_6__["ValidateRevisionsForAcceptanceGQL"])); };
    RevisionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisionListComponent, selectors: [["cvc-revision-list"]], inputs: { revisions: "revisions" }, outputs: { revisionSetSelectedEvent: "revisionSetSelectedEvent", revisionMutationCompleted: "revisionMutationCompleted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [["nzBanner", "", "nzType", "error", "nzCloseable", "", 3, "nzMessage", "nzOnClose", 4, "ngFor", "ngForOf"], ["nzBanner", "", "nzType", "success", "nzCloseable", "", 3, "nzMessage", "nzOnClose", 4, "ngIf"], [4, "ngrxLet"], ["moderationButtons", ""], ["nzBanner", "", "nzType", "error", "nzCloseable", "", 3, "nzMessage", "nzOnClose"], ["nzBanner", "", "nzType", "success", "nzCloseable", "", 3, "nzMessage", "nzOnClose"], ["nzTitle", "Revisions", 1, "card-list", 3, "nzExtra"], ["class", "revision-list", 4, "ngIf", "ngIfElse"], ["noRevisions", ""], [1, "revision-list"], [3, "nzHeader", "nzExtra", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzExtra", "nzActive"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], ["revCardHeaderTitle", ""], ["revCardHeaderExtra", ""], ["entityType", "Sources", 3, "diffObject"], ["itemTemplate", ""], [3, "source"], ["entityType", "Disease", 3, "diffObject"], [3, "disease"], ["entityType", "Drugs", 3, "diffObject"], [3, "drug"], ["entityType", "Variant Aliases", 3, "diffObject"], ["entityType", "ClinVar Entries", 3, "diffObject"], ["entityType", "HGVS Expressions", 3, "diffObject"], ["entityType", "Variant Types", 3, "diffObject"], [3, "variantType"], ["entityType", "Phenotypes", 3, "diffObject"], [3, "phenotype"], ["entityType", "Variant", 3, "diffObject"], [3, "variant"], ["entityType", "Source", 3, "diffObject"], [3, "currentValue", "suggestedValue", "left", "right", "entityType"], ["nzSpan", "16"], ["nzSpan", "8", "nz-typography", "", "nzType", "secondary", 2, "text-align", "right"], [3, "user", 4, "ngIf"], [3, "commentBodySegments"], [3, "user"], ["nz-icon", "", "nzType", "civic:revision"], ["nz-popover", "", "nz-icon", "", "nzType", "comment", "nzTheme", "outline", 3, "nzPopoverContent"], ["creationCommentTemplate", ""], ["nzSize", "small", 3, "click"], ["nz-typography", "", "nzType", "secondary"], [3, "status"], ["nzType", "vertical"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-checkbox", "", "nz-tooltip", "", "nzTooltipTitle", "Must be signed in to manage revisions.", 3, "nzDisabled", 4, "ngIf", "ngIfElse"], ["loggedIn", ""], ["nz-checkbox", "", "nz-tooltip", "", "nzTooltipTitle", "Must be signed in to manage revisions.", 3, "nzDisabled"], ["nz-checkbox", "", "nz-tooltip", "", "nzTooltipTitle", "Curators may only reject their own revisions.", 3, "nzDisabled", 4, "ngIf", "ngIfElse"], ["canRevise", ""], ["nz-checkbox", "", "nz-tooltip", "", "nzTooltipTitle", "Curators may only reject their own revisions.", 3, "nzDisabled"], ["nz-checkbox", "", "nz-tooltip", "", "nzTooltipTitle", "Select Revision for Acceptance/Rejection", 3, "nzCheckedChange"], ["nzNotFoundImage", "simple", "nzNotFoundContent", "No Revisions matching filters"], ["validationErrorTemplate", ""], ["nz-row", "", 2, "margin-top", "1em"], ["nz-col", "", "nzSpan", "24", 2, "text-align", "right"], ["nzDirection", "horizontal"], [4, "ngIf", "ngIfElse"], ["notSignedIn", ""], ["submitButton", ""], ["nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "twotone", "nzTwotoneColor", "red", "nz-popover", "", "nzPopoverTitle", "Selected Revisions would result in an invalid entity", 3, "nzPopoverContent", 4, "ngIf"], ["validationPopoverTitleTemplate", ""], ["validationPopoverContentTemplate", ""], [4, "ngTemplateOutlet"], ["nz-tooltip", "", "nzTooltipTitle", "Must be signed in to manage revisions."], ["nz-button", "", "nz-popover", "", "nzSize", "small", "nzPopoverPlacement", "bottom", 3, "nzPopoverTitle", "nzPopoverVisible", "nzPopoverContent", "nzPopoverTrigger", "disabled", "nzPopoverVisibleChange", "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "twotone", "nzTwotoneColor", "red", "nz-popover", "", "nzPopoverTitle", "Selected Revisions would result in an invalid entity", 3, "nzPopoverContent"], [3, "ngStyle"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], ["nzDirection", "vertical"], [3, "comment", "commentChange"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzSize", "small", "nzDanger", "", 3, "nzLoading", "disabled", "click"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzSize", "small", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzTwotoneColor", "red", "nzType", "exclamation-circle", "nzTheme", "twotone", "nz-popover", "", "nzPopoverTitle", "Selected Revisions would result in an invalid entity", 3, "nzPopoverContent", 4, "ngIf"], ["nz-icon", "", "nzTwotoneColor", "red", "nzType", "exclamation-circle", "nzTheme", "twotone", "nz-popover", "", "nzPopoverTitle", "Selected Revisions would result in an invalid entity", 3, "nzPopoverContent"], ["nzTitle", "Errors", 4, "ngIf"], ["nzTitle", "Validation Errors", 4, "ngIf"], ["nzTitle", "Errors"], ["nzSize", "small"], [4, "ngFor", "ngForOf"], ["nzTitle", "Validation Errors"], ["nzBordered", ""], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"]], template: function RevisionListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RevisionListComponent_nz_alert_0_Template, 1, 1, "nz-alert", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListComponent_nz_alert_1_Template, 1, 1, "nz-alert", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RevisionListComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx.viewer$);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _revision_list_diff_revision_list_diff_component__WEBPACK_IMPORTED_MODULE_12__["RevisionListDiffComponent"], _sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_13__["CvcSourceTagComponent"], _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_14__["CvcDiseaseTagComponent"], _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_15__["CvcDrugTagComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__["NzTagComponent"], _variant_types_variant_type_tag_variant_type_tag_component__WEBPACK_IMPORTED_MODULE_17__["CvcVariantTypeTagComponent"], _phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_18__["CvcPhenotypeTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_19__["CvcVariantTagComponent"], _revision_value_diff_revision_value_diff_component__WEBPACK_IMPORTED_MODULE_20__["RevisionValueDiffComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__["NzColDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_23__["NzTypographyComponent"], _comments_comment_body_comment_body_component__WEBPACK_IMPORTED_MODULE_24__["CvcCommentBodyComponent"], _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_25__["CvcUserTagComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__["NzSpaceItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__["ɵNzTransitionPatchDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__["NzPopoverDirective"], _shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_30__["CvcStatusTagComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_31__["NzButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_32__["NzCheckboxComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_33__["NzTooltipDirective"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_34__["NzEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_35__["NzWaveDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _forms_comments_forms_comment_input_comment_input_form__WEBPACK_IMPORTED_MODULE_36__["CvcCommentInputForm"], _forms_shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_37__["CvcOrgSelectorBtnGroupComponent"], _forms_shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_38__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_39__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_39__["NzListItemComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_40__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_40__["NzDescriptionsItemComponent"]], pipes: [_core_pipes_enum_to_title_pipe__WEBPACK_IMPORTED_MODULE_41__["EnumToTitlePipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_42__["TimeagoPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-list[_ngcontent-%COMP%]   .kept[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}\nnz-list[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%] {\n  background-color: #f6ffed;\n  color: #135200;\n}\nnz-list[_ngcontent-%COMP%]   .removed[_ngcontent-%COMP%] {\n  background-color: #fff1f0;\n  color: #820014;\n}\nnz-list[_ngcontent-%COMP%]   .suggested[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}\nnz-list[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}"] });
    return RevisionListComponent;
})();


/***/ }),

/***/ "dIH7":
/*!****************************************************************************************!*\
  !*** ./src/app/components/revisions/revision-value-diff/revision-value-diff.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CvcRevisionValueDiffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcRevisionValueDiffModule", function() { return CvcRevisionValueDiffModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CvcRevisionValueDiffModule = /*@__PURE__*/ (() => {
    class CvcRevisionValueDiffModule {
    }
    CvcRevisionValueDiffModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CvcRevisionValueDiffModule });
    CvcRevisionValueDiffModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CvcRevisionValueDiffModule_Factory(t) { return new (t || CvcRevisionValueDiffModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
            ]] });
    return CvcRevisionValueDiffModule;
})();


/***/ }),

/***/ "ueyT":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/revisions/revision-list-diff/revision-list-diff.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RevisionListDiffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionListDiffComponent", function() { return RevisionListDiffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");





const _c0 = ["itemTemplate"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function RevisionListDiffComponent_nz_list_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r8 = ctx.$implicit;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r8));
    }
}
function RevisionListDiffComponent_nz_list_empty_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 12);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzNoResult", "No ", ctx_r1.entityType, "");
    }
}
function RevisionListDiffComponent_nz_list_8_nz_list_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r11 = ctx.$implicit;
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11));
    }
}
function RevisionListDiffComponent_nz_list_8_nz_list_empty_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 12);
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzNoResult", "No ", ctx_r10.entityType, " Removed");
    }
}
function RevisionListDiffComponent_nz_list_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListDiffComponent_nz_list_8_nz_list_item_1_Template, 3, 4, "nz-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListDiffComponent_nz_list_8_nz_list_empty_2_Template, 1, 1, "nz-list-empty", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzHeader", "Removed ", ctx_r2.entityType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.diffObject.removedObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.diffObject.removedObjects.length === 0);
    }
}
function RevisionListDiffComponent_nz_list_item_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r12 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r12));
    }
}
function RevisionListDiffComponent_nz_list_empty_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 12);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzNoResult", "No ", ctx_r4.entityType, " Added");
    }
}
function RevisionListDiffComponent_nz_list_14_nz_list_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r15 = ctx.$implicit;
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r15));
    }
}
function RevisionListDiffComponent_nz_list_14_nz_list_empty_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 12);
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzNoResult", "No ", ctx_r14.entityType, " Kept");
    }
}
function RevisionListDiffComponent_nz_list_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RevisionListDiffComponent_nz_list_14_nz_list_item_1_Template, 3, 4, "nz-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RevisionListDiffComponent_nz_list_14_nz_list_empty_2_Template, 1, 1, "nz-list-empty", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzHeader", "Kept ", ctx_r5.entityType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.diffObject.keptObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.diffObject.keptObjects.length === 0);
    }
}
function RevisionListDiffComponent_nz_list_item_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r16 = ctx.$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r16));
    }
}
function RevisionListDiffComponent_nz_list_empty_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 12);
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzNoResult", "No ", ctx_r7.entityType, "");
    }
}
let RevisionListDiffComponent = /*@__PURE__*/ (() => {
    class RevisionListDiffComponent {
        constructor() { }
        ngOnInit() {
            if (this.diffObject === undefined) {
                throw new Error("Must specify a diffObject.");
            }
            if (this.entityType === undefined) {
                throw new Error("Must specify an entityType.");
            }
        }
    }
    RevisionListDiffComponent.ɵfac = function RevisionListDiffComponent_Factory(t) { return new (t || RevisionListDiffComponent)(); };
    RevisionListDiffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisionListDiffComponent, selectors: [["cvc-revision-list-diff"]], contentQueries: function RevisionListDiffComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplateRef = _t.first);
            }
        }, inputs: { diffObject: "diffObject", entityType: "entityType" }, decls: 19, vars: 15, consts: [[3, "nzGutter"], [3, "nzSpan"], ["nzBordered", "", "nzType", "inner", "nzSize", "small", 3, "nzHeader"], ["ngClass", "current", 4, "ngFor", "ngForOf"], [3, "nzNoResult", 4, "ngIf"], ["nzDirection", "vertical"], ["nzBordered", "", "nzType", "inner", "nzSize", "small", 3, "nzHeader", 4, "ngIf"], ["ngClass", "added", 4, "ngFor", "ngForOf"], ["ngClass", "suggested", 4, "ngFor", "ngForOf"], ["ngClass", "current"], ["nz-typography", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoResult"], ["ngClass", "removed", 4, "ngFor", "ngForOf"], ["ngClass", "removed"], ["ngClass", "added"], ["ngClass", "kept", 4, "ngFor", "ngForOf"], ["ngClass", "kept"], ["ngClass", "suggested"]], template: function RevisionListDiffComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RevisionListDiffComponent_nz_list_item_3_Template, 3, 4, "nz-list-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RevisionListDiffComponent_nz_list_empty_4_Template, 1, 1, "nz-list-empty", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-space", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RevisionListDiffComponent_nz_list_8_Template, 3, 3, "nz-list", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RevisionListDiffComponent_nz_list_item_11_Template, 3, 4, "nz-list-item", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RevisionListDiffComponent_nz_list_empty_12_Template, 1, 1, "nz-list-empty", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RevisionListDiffComponent_nz_list_14_Template, 3, 3, "nz-list", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-list", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RevisionListDiffComponent_nz_list_item_17_Template, 3, 4, "nz-list-item", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RevisionListDiffComponent_nz_list_empty_18_Template, 1, 1, "nz-list-empty", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzHeader", "Original ", ctx.entityType, " List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diffObject.currentObjects);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diffObject.currentObjects.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diffObject.currentObjects.length > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzHeader", "Added ", ctx.entityType, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diffObject.addedObjects);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diffObject.addedObjects.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diffObject.currentObjects.length > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzHeader", "Revised ", ctx.entityType, " List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diffObject.suggestedObjects);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diffObject.suggestedObjects.length === 0);
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceItemComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListEmptyComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-list[_ngcontent-%COMP%]   .kept[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}\nnz-list[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%] {\n  background-color: #f6ffed;\n  color: #135200;\n}\nnz-list[_ngcontent-%COMP%]   .removed[_ngcontent-%COMP%] {\n  background-color: #fff1f0;\n  color: #820014;\n}\nnz-list[_ngcontent-%COMP%]   .suggested[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}\nnz-list[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background-color: #f0f5ff;\n  color: #061178;\n}\nnz-space[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return RevisionListDiffComponent;
})();


/***/ }),

/***/ "zgtv":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: RevisionsListAndFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsListAndFilterModule", function() { return RevisionsListAndFilterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/participant-list/participant-list.module */ "VwQC");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var _app_components_revisions_revision_list_revision_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/revisions/revision-list/revision-list.module */ "D+sV");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















let RevisionsListAndFilterModule = /*@__PURE__*/ (() => {
    class RevisionsListAndFilterModule {
    }
    RevisionsListAndFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: RevisionsListAndFilterModule });
    RevisionsListAndFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function RevisionsListAndFilterModule_Factory(t) { return new (t || RevisionsListAndFilterModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__["NzTagModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__["NzTypographyModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_8__["CvcParticipantListModule"],
                _app_components_revisions_revision_list_revision_list_module__WEBPACK_IMPORTED_MODULE_10__["RevisionListModule"],
            ]] });
    return RevisionsListAndFilterModule;
})();


/***/ })

}]);