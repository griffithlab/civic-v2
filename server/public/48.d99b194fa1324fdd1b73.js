(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "6hbG":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/source-suggestions/source-suggestions-home/source-suggestions-home.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: SourceSuggestionsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsHomeModule", function() { return SourceSuggestionsHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module */ "b1zR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SourceSuggestionsHomeModule = /*@__PURE__*/ (() => {
    class SourceSuggestionsHomeModule {
    }
    SourceSuggestionsHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SourceSuggestionsHomeModule });
    SourceSuggestionsHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SourceSuggestionsHomeModule_Factory(t) { return new (t || SourceSuggestionsHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_4__["CvcSourceSuggestionsTableModule"],
            ]] });
    return SourceSuggestionsHomeModule;
})();


/***/ }),

/***/ "8AIl":
/*!***********************************************************************!*\
  !*** ./src/app/views/source-suggestions/source-suggestions.module.ts ***!
  \***********************************************************************/
/*! exports provided: SourceSuggestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsModule", function() { return SourceSuggestionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../evidence/evidence.module */ "DiSq");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module */ "bluq");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/flags/flag-list-and-filter/flag-list-and-filter.module */ "VrgM");
/* harmony import */ var _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/flags/flaggable/flaggable.module */ "Ze44");
/* harmony import */ var _source_suggestions_home_source_suggestions_home_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./source-suggestions-home/source-suggestions-home.module */ "6hbG");
/* harmony import */ var _source_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./source-suggestions-routing.module */ "9tx2");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");









































let SourceSuggestionsModule = /*@__PURE__*/ (() => {
    class SourceSuggestionsModule {
    }
    SourceSuggestionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: SourceSuggestionsModule });
    SourceSuggestionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ factory: function SourceSuggestionsModule_Factory(t) { return new (t || SourceSuggestionsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _source_suggestions_home_source_suggestions_home_module__WEBPACK_IMPORTED_MODULE_36__["SourceSuggestionsHomeModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_29__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_30__["CvcEntityTableCardModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_31__["CvcLinkTagModule"],
                _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_32__["CvcClinicalTrialTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_33__["CvcSourceTagModule"],
                _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_34__["CvcFlagListAndFilterModule"],
                _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_35__["CvcFlaggableModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_27__["CvcSectionNavigationModule"],
                _source_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_37__["SourceSuggestionsRoutingModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__["NzAvatarModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_4__["NzBadgeModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_7__["NzCommentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__["NzListModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__["NzPageHeaderModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_15__["NzPopoverModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__["NzSpaceModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_16__["NzSkeletonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__["NzTableModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__["NzTabsModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__["NzTagModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_23__["NzTypographyModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_24__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_38__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_24__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_25__["EvidenceModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"]
            ]] });
    return SourceSuggestionsModule;
})();


/***/ }),

/***/ "9tx2":
/*!*******************************************************************************!*\
  !*** ./src/app/views/source-suggestions/source-suggestions-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SourceSuggestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsRoutingModule", function() { return SourceSuggestionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _source_suggestions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source-suggestions.component */ "nU3k");
/* harmony import */ var _source_suggestions_home_source_suggestions_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source-suggestions-home/source-suggestions-home.page */ "qFLC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _source_suggestions_component__WEBPACK_IMPORTED_MODULE_1__["SourceSuggestionsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _source_suggestions_home_source_suggestions_home_page__WEBPACK_IMPORTED_MODULE_2__["SourceSuggestionsHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
        ]
    }
];
let SourceSuggestionsRoutingModule = /*@__PURE__*/ (() => {
    class SourceSuggestionsRoutingModule {
    }
    SourceSuggestionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SourceSuggestionsRoutingModule });
    SourceSuggestionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SourceSuggestionsRoutingModule_Factory(t) { return new (t || SourceSuggestionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SourceSuggestionsRoutingModule;
})();


/***/ }),

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

/***/ "nU3k":
/*!**************************************************************************!*\
  !*** ./src/app/views/source-suggestions/source-suggestions.component.ts ***!
  \**************************************************************************/
/*! exports provided: SourceSuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsComponent", function() { return SourceSuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let SourceSuggestionsComponent = /*@__PURE__*/ (() => {
    class SourceSuggestionsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    SourceSuggestionsComponent.ɵfac = function SourceSuggestionsComponent_Factory(t) { return new (t || SourceSuggestionsComponent)(); };
    SourceSuggestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SourceSuggestionsComponent, selectors: [["app-source-suggestions"]], decls: 1, vars: 0, template: function SourceSuggestionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return SourceSuggestionsComponent;
})();


/***/ }),

/***/ "qFLC":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/source-suggestions/source-suggestions-home/source-suggestions-home.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: SourceSuggestionsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsHomePage", function() { return SourceSuggestionsHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/source-suggestions/source-suggestions-table/source-suggestions-table.component */ "Ogji");





let SourceSuggestionsHomePage = /*@__PURE__*/ (() => {
    class SourceSuggestionsHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    SourceSuggestionsHomePage.ɵfac = function SourceSuggestionsHomePage_Factory(t) { return new (t || SourceSuggestionsHomePage)(); };
    SourceSuggestionsHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SourceSuggestionsHomePage, selectors: [["source-suggestions-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "file-add"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function SourceSuggestionsHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Source Suggestions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-source-suggestions-table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
            }
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcSourceSuggestionsTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return SourceSuggestionsHomePage;
})();


/***/ })

}]);