(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "/TR0":
/*!*************************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ClinicalTrialsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsRoutingModule", function() { return ClinicalTrialsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clinical_trials_detail_clinical_trials_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-trials-detail/clinical-trials-detail.component */ "5m++");
/* harmony import */ var _clinical_trials_home_clinical_trials_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinical-trials-home/clinical-trials-home.page */ "0geK");
/* harmony import */ var _clinical_trials_summary_clinical_trials_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinical-trials-summary/clinical-trials-summary.component */ "aOX3");
/* harmony import */ var _clinical_trials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clinical-trials.component */ "nKpq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _clinical_trials_component__WEBPACK_IMPORTED_MODULE_4__["ClinicalTrialsComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _clinical_trials_home_clinical_trials_home_page__WEBPACK_IMPORTED_MODULE_2__["ClinicalTrialsHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
            {
                path: ':clinicalTrialId',
                component: _clinical_trials_detail_clinical_trials_detail_component__WEBPACK_IMPORTED_MODULE_1__["ClinicalTrialsDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME'
                },
                children: [
                    { path: '', redirectTo: 'summary', pathMatch: 'full' },
                    {
                        path: 'summary',
                        component: _clinical_trials_summary_clinical_trials_summary_component__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrialsSummaryComponent"],
                        data: {
                            breadcrumb: 'Summary'
                        }
                    }
                ]
            }
        ]
    }
];
let ClinicalTrialsRoutingModule = /*@__PURE__*/ (() => {
    class ClinicalTrialsRoutingModule {
    }
    ClinicalTrialsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClinicalTrialsRoutingModule });
    ClinicalTrialsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ClinicalTrialsRoutingModule_Factory(t) { return new (t || ClinicalTrialsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ClinicalTrialsRoutingModule;
})();


/***/ }),

/***/ "0geK":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials-home/clinical-trials-home.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClinicalTrialsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsHomePage", function() { return ClinicalTrialsHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_clinical_trials_clinical_trials_table_clinical_trials_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/clinical-trials/clinical-trials-table/clinical-trials-table.component */ "FkRS");





let ClinicalTrialsHomePage = /*@__PURE__*/ (() => {
    class ClinicalTrialsHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    ClinicalTrialsHomePage.ɵfac = function ClinicalTrialsHomePage_Factory(t) { return new (t || ClinicalTrialsHomePage)(); };
    ClinicalTrialsHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalTrialsHomePage, selectors: [["clinical-trials-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "audit"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function ClinicalTrialsHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Clinical Trials ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-clinical-trials-table");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_clinical_trials_clinical_trials_table_clinical_trials_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcClinicalTrialsTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return ClinicalTrialsHomePage;
})();


/***/ }),

/***/ "5m++":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials-detail/clinical-trials-detail.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ClinicalTrialsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsDetailComponent", function() { return ClinicalTrialsDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");










function ClinicalTrialsDetailComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-page-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "cvc-link-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const t_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", t_r1.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r1.nctId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r1.description, " ");
    }
}
let ClinicalTrialsDetailComponent = /*@__PURE__*/ (() => {
    class ClinicalTrialsDetailComponent {
        constructor(route, gql) {
            this.route = route;
            this.gql = gql;
            this.routeSub = this.route.params.subscribe((params) => {
                this.clinicalTrialId = +params.clinicalTrialId;
                this.queryRef = this.gql.watch({
                    clinicalTrialId: this.clinicalTrialId
                });
                let observable = this.queryRef.valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.clinicalTrial$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'clinicalTrial'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    ClinicalTrialsDetailComponent.ɵfac = function ClinicalTrialsDetailComponent_Factory(t) { return new (t || ClinicalTrialsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrialDetailGQL"])); };
    ClinicalTrialsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClinicalTrialsDetailComponent, selectors: [["cvc-clinical-trials-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "site-page-header"], ["nzDirection", "horizontal"], ["nz-icon", "", "nzType", "audit"], ["tooltip", "View on clinicaltrials.gov", 3, "href"], [1, "content"]], template: function ClinicalTrialsDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ClinicalTrialsDetailComponent_ng_container_0_Template, 14, 4, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.clinicalTrial$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderTitleDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderExtraDirective"], _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcLinkTagComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return ClinicalTrialsDetailComponent;
})();


/***/ }),

/***/ "FkRS":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/clinical-trials/clinical-trials-table/clinical-trials-table.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CvcClinicalTrialsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcClinicalTrialsTableComponent", function() { return CvcClinicalTrialsTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clinical_trial_tag_clinical_trial_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clinical-trial-tag/clinical-trial-tag.component */ "qO8z");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");











function CvcClinicalTrialsTableComponent_tr_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-clinical-trial-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const t_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("clinicalTrial", t_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", t_r2.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", t_r2.sourceCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", t_r2.evidenceCount, " ");
    }
}
let CvcClinicalTrialsTableComponent = /*@__PURE__*/ (() => {
    class CvcClinicalTrialsTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.initialPageSize = 25;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["ClinicalTrialSortColumns"];
            this.queryRef = this.gql.watch({
                first: this.initialPageSize
            });
            let observable = this.queryRef.valueChanges;
            this.clinicalTrials$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'clinicalTrials', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.totalCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'clinicalTrials', 'totalCount'));
            this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'clinicalTrials', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        onModelChanged() { this.debouncedQuery.next(); }
        onSortChanged(e) {
            this.queryRef.refetch({
                sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e)
            });
        }
        refresh() {
            this.queryRef.refetch({
                name: this.nameFilter,
                nctId: this.nctIdFilter
            });
        }
        ngOnDestroy() { this.debouncedQuery.unsubscribe(); }
        loadMore(cursor) {
            this.queryRef.fetchMore({ variables: {
                    after: cursor
                } });
        }
    }
    CvcClinicalTrialsTableComponent.ɵfac = function CvcClinicalTrialsTableComponent_Factory(t) { return new (t || CvcClinicalTrialsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["ClinicalTrialsBrowseGQL"])); };
    CvcClinicalTrialsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcClinicalTrialsTableComponent, selectors: [["cvc-clinical-trials-table"]], decls: 23, vars: 21, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["clinicalTrialsTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "15%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "65%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "10%", "nzRight", "", 3, "nzColumnKey", "nzSortFn"], ["nz-icon", "", "nzType", "civic:source", "nz-tooltip", "", "nzTooltipTitle", "Source count"], ["nz-icon", "", "nzType", "civic:evidence", "nz-tooltip", "", "nzTooltipTitle", "Evidence count"], ["placeholderText", "Search Name", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search NCT ID", 3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngFor", "ngForOf"], [3, "clinicalTrial"]], template: function CvcClinicalTrialsTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcClinicalTrialsTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " NCT ID ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "cvc-clearable-input-filter", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcClinicalTrialsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_16_listener($event) { return ctx.nameFilter = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "cvc-clearable-input-filter", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcClinicalTrialsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_18_listener($event) { return ctx.nctIdFilter = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CvcClinicalTrialsTableComponent_tr_22_Template, 9, 4, "tr", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 17, ctx.clinicalTrials$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 19, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.NctId)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Name)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.SourceCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceItemCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.nameFilter)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.nctIdFilter)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzCellFixedDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__["CvcClearableInputFilterComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _clinical_trial_tag_clinical_trial_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcClinicalTrialTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcClinicalTrialsTableComponent;
})();


/***/ }),

/***/ "Toos":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/clinical-trials/clinical-trials-table/clinical-trials-table.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CvcClinicalTrialsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcClinicalTrialsTableModule", function() { return CvcClinicalTrialsTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clinical-trial-tag/clinical-trial-tag.module */ "bluq");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcClinicalTrialsTableModule = /*@__PURE__*/ (() => {
    class CvcClinicalTrialsTableModule {
    }
    CvcClinicalTrialsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcClinicalTrialsTableModule });
    CvcClinicalTrialsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcClinicalTrialsTableModule_Factory(t) { return new (t || CvcClinicalTrialsTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__["CvcClearableInputFilterModule"],
                _clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcClinicalTrialTagModule"],
            ]] });
    return CvcClinicalTrialsTableModule;
})();


/***/ }),

/***/ "aOX3":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials-summary/clinical-trials-summary.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ClinicalTrialsSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsSummaryComponent", function() { return ClinicalTrialsSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_sources_sources_table_sources_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/sources/sources-table/sources-table.component */ "v6gb");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








function ClinicalTrialsSummaryComponent_nz_space_0_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clinical Trial Sources ");
    }
}
function ClinicalTrialsSummaryComponent_nz_space_0_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clinical Trial Evidence ");
    }
}
function ClinicalTrialsSummaryComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-sources-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClinicalTrialsSummaryComponent_nz_space_0_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-evidence-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClinicalTrialsSummaryComponent_nz_space_0_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clinicalTrialId", ctx_r0.clinicalTrialId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clinicalTrialId", ctx_r0.clinicalTrialId);
    }
}
let ClinicalTrialsSummaryComponent = /*@__PURE__*/ (() => {
    class ClinicalTrialsSummaryComponent {
        constructor(route) {
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.clinicalTrialId = +params.clinicalTrialId;
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    ClinicalTrialsSummaryComponent.ɵfac = function ClinicalTrialsSummaryComponent_Factory(t) { return new (t || ClinicalTrialsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ClinicalTrialsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalTrialsSummaryComponent, selectors: [["cvc-clinical-trials-summary"]], decls: 1, vars: 1, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], [3, "cvcTitle"], [3, "clinicalTrialId"], ["sourcesCardTitle", ""], ["evidenceCardTitle", ""], ["nz-icon", "", "nzType", "audit"], ["nz-icon", "", "nzType", "civic:evidence"]], template: function ClinicalTrialsSummaryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClinicalTrialsSummaryComponent_nz_space_0_Template, 11, 4, "nz-space", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clinicalTrialId);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceItemComponent"], _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__["CvcEntityTableCardComponent"], _components_sources_sources_table_sources_table_component__WEBPACK_IMPORTED_MODULE_5__["CvcSourcesTableComponent"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__["CvcEvidenceTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return ClinicalTrialsSummaryComponent;
})();


/***/ }),

/***/ "cd1E":
/*!*****************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClinicalTrialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsModule", function() { return ClinicalTrialsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _clinical_trials_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clinical-trials-routing.module */ "/TR0");
/* harmony import */ var _sources_sources_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sources/sources.module */ "OhQ4");
/* harmony import */ var _clinical_trials_home_clinical_trials_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinical-trials-home/clinical-trials-home.module */ "tRJJ");
/* harmony import */ var _app_components_sources_sources_table_sources_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/sources/sources-table/sources-table.module */ "jodX");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let ClinicalTrialsModule = /*@__PURE__*/ (() => {
    class ClinicalTrialsModule {
    }
    ClinicalTrialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: ClinicalTrialsModule });
    ClinicalTrialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function ClinicalTrialsModule_Factory(t) { return new (t || ClinicalTrialsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _clinical_trials_routing_module__WEBPACK_IMPORTED_MODULE_8__["ClinicalTrialsRoutingModule"],
                _clinical_trials_home_clinical_trials_home_module__WEBPACK_IMPORTED_MODULE_10__["ClinicalTrialsHomeModule"],
                _app_components_sources_sources_table_sources_table_module__WEBPACK_IMPORTED_MODULE_11__["CvcSourcesTableModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_12__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_13__["CvcEntityTableCardModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcLinkTagModule"],
                _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_1__["IconsProviderModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceModule"],
                _sources_sources_module__WEBPACK_IMPORTED_MODULE_9__["SourcesModule"],
            ]] });
    return ClinicalTrialsModule;
})();


/***/ }),

/***/ "nKpq":
/*!********************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials.component.ts ***!
  \********************************************************************/
/*! exports provided: ClinicalTrialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsComponent", function() { return ClinicalTrialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let ClinicalTrialsComponent = /*@__PURE__*/ (() => {
    class ClinicalTrialsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    ClinicalTrialsComponent.ɵfac = function ClinicalTrialsComponent_Factory(t) { return new (t || ClinicalTrialsComponent)(); };
    ClinicalTrialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalTrialsComponent, selectors: [["cvc-clinical-trials"]], decls: 1, vars: 0, template: function ClinicalTrialsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return ClinicalTrialsComponent;
})();


/***/ }),

/***/ "tRJJ":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/clinical-trials/clinical-trials-home/clinical-trials-home.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClinicalTrialsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsHomeModule", function() { return ClinicalTrialsHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_clinical_trials_clinical_trials_table_clinical_trials_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/clinical-trials/clinical-trials-table/clinical-trials-table.module */ "Toos");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let ClinicalTrialsHomeModule = /*@__PURE__*/ (() => {
    class ClinicalTrialsHomeModule {
    }
    ClinicalTrialsHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ClinicalTrialsHomeModule });
    ClinicalTrialsHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ClinicalTrialsHomeModule_Factory(t) { return new (t || ClinicalTrialsHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_3__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                _app_components_clinical_trials_clinical_trials_table_clinical_trials_table_module__WEBPACK_IMPORTED_MODULE_5__["CvcClinicalTrialsTableModule"],
            ]] });
    return ClinicalTrialsHomeModule;
})();


/***/ })

}]);