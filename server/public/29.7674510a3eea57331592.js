(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "B2Tj":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shared/entity-table-card/entity-table-card.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CvcEntityTableCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEntityTableCardModule", function() { return CvcEntityTableCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CvcEntityTableCardModule = /*@__PURE__*/ (() => {
    class CvcEntityTableCardModule {
    }
    CvcEntityTableCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CvcEntityTableCardModule });
    CvcEntityTableCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CvcEntityTableCardModule_Factory(t) { return new (t || CvcEntityTableCardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"]
            ]] });
    return CvcEntityTableCardModule;
})();


/***/ }),

/***/ "OhQ4":
/*!*************************************************!*\
  !*** ./src/app/views/sources/sources.module.ts ***!
  \*************************************************/
/*! exports provided: SourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesModule", function() { return SourcesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sources_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources-routing.module */ "2LVS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../evidence/evidence.module */ "DiSq");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _sources_home_sources_home_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sources-home/sources-home.module */ "w0zX");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module */ "bluq");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/components/flags/flag-list-and-filter/flag-list-and-filter.module */ "VrgM");
/* harmony import */ var _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/components/flags/flaggable/flaggable.module */ "Ze44");
/* harmony import */ var _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module */ "b1zR");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "fXoL");










































let SourcesModule = /*@__PURE__*/ (() => {
    class SourcesModule {
    }
    SourcesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({ type: SourcesModule });
    SourcesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({ factory: function SourcesModule_Factory(t) { return new (t || SourcesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _sources_home_sources_home_module__WEBPACK_IMPORTED_MODULE_30__["SourcesHomeModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_31__["CvcEvidenceTableModule"],
                _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_38__["CvcSourceSuggestionsTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_32__["CvcEntityTableCardModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_33__["CvcLinkTagModule"],
                _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_34__["CvcClinicalTrialTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_35__["CvcSourceTagModule"],
                _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_36__["CvcFlagListAndFilterModule"],
                _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_37__["CvcFlaggableModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_28__["CvcSectionNavigationModule"],
                _sources_routing_module__WEBPACK_IMPORTED_MODULE_1__["SourcesRoutingModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_8__["NzCommentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__["NzListModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_16__["NzPopoverModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_18__["NzSpaceModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__["NzSpinModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_17__["NzSkeletonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__["NzTableModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__["NzTabsModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__["NzTagModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_24__["NzTypographyModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_3__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_25__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_39__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_25__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_26__["EvidenceModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__["NzSelectModule"]
            ]] });
    return SourcesModule;
})();


/***/ }),

/***/ "b1zR":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CvcSourceSuggestionsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcSourceSuggestionsTableModule", function() { return CvcSourceSuggestionsTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









let CvcSourceSuggestionsTableModule = /*@__PURE__*/ (() => {
    class CvcSourceSuggestionsTableModule {
    }
    CvcSourceSuggestionsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CvcSourceSuggestionsTableModule });
    CvcSourceSuggestionsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CvcSourceSuggestionsTableModule_Factory(t) { return new (t || CvcSourceSuggestionsTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponentModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__["NzSelectModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__["CvcClearableInputFilterModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcUserTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_7__["CvcSourceTagModule"]
            ]] });
    return CvcSourceSuggestionsTableModule;
})();


/***/ }),

/***/ "jodX":
/*!**************************************************************************!*\
  !*** ./src/app/components/sources/sources-table/sources-table.module.ts ***!
  \**************************************************************************/
/*! exports provided: CvcSourcesTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcSourcesTableModule", function() { return CvcSourcesTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CvcSourcesTableModule = /*@__PURE__*/ (() => {
    class CvcSourcesTableModule {
    }
    CvcSourcesTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CvcSourcesTableModule });
    CvcSourcesTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CvcSourcesTableModule_Factory(t) { return new (t || CvcSourcesTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__["NzSelectModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__["CvcClearableInputFilterModule"],
                _source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcSourceTagModule"],
            ]] });
    return CvcSourcesTableModule;
})();


/***/ }),

/***/ "nJ+V":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/entity-table-card/entity-table-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: CvcEntityTableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEntityTableCardComponent", function() { return CvcEntityTableCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");


const _c0 = ["*"];
let CvcEntityTableCardComponent = /*@__PURE__*/ (() => {
    class CvcEntityTableCardComponent {
        constructor() {
            this.cvcTitle = undefined;
        }
        ngOnInit() {
        }
    }
    CvcEntityTableCardComponent.ɵfac = function CvcEntityTableCardComponent_Factory(t) { return new (t || CvcEntityTableCardComponent)(); };
    CvcEntityTableCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcEntityTableCardComponent, selectors: [["cvc-entity-table-card"]], inputs: { cvcTitle: "cvcTitle" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "nzTitle"], [1, "card-content"]], template: function CvcEntityTableCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.cvcTitle);
            }
        }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.card-content[_ngcontent-%COMP%] {\n  margin-top: -11px;\n  margin-bottom: -13px;\n  margin-left: -12px;\n  margin-right: -12px;\n}"] });
    return CvcEntityTableCardComponent;
})();


/***/ }),

/***/ "w0zX":
/*!*******************************************************************!*\
  !*** ./src/app/views/sources/sources-home/sources-home.module.ts ***!
  \*******************************************************************/
/*! exports provided: SourcesHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesHomeModule", function() { return SourcesHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_sources_sources_table_sources_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/sources/sources-table/sources-table.module */ "jodX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SourcesHomeModule = /*@__PURE__*/ (() => {
    class SourcesHomeModule {
    }
    SourcesHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SourcesHomeModule });
    SourcesHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SourcesHomeModule_Factory(t) { return new (t || SourcesHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                _app_components_sources_sources_table_sources_table_module__WEBPACK_IMPORTED_MODULE_4__["CvcSourcesTableModule"],
            ]] });
    return SourcesHomeModule;
})();


/***/ })

}]);