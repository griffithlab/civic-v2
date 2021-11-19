(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "7tJp":
/*!************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-revise/evidence-revise.view.ts ***!
  \************************************************************************/
/*! exports provided: EvidenceReviseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReviseView", function() { return EvidenceReviseView; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/variants/variant-tag/variant-tag.component */ "ifvR");












function EvidenceReviseView_ng_container_0_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-space", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Parents:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-space-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "cvc-gene-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "cvc-variant-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](evidence_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/genes/", evidence_r1.gene.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gene", evidence_r1.gene);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/variants/", evidence_r1.variant.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("variant", evidence_r1.variant);
    }
}
function EvidenceReviseView_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EvidenceReviseView_ng_container_0_ng_template_2_Template, 11, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-page-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-page-header-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " REVISE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = ctx.ngIf;
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", evidence_r1.name)("relationsTpl", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", evidence_r1.name, " ");
    }
}
let EvidenceReviseView = /*@__PURE__*/ (() => {
    class EvidenceReviseView {
        constructor(gql, route) {
            this.gql = gql;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                let observable = this.gql.watch({ evidenceId: +params.evidenceId }).valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.evidence$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'evidenceItem'));
                this.commentsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('comments', 'totalCount'));
                this.flagsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('flags', 'totalCount'));
                this.revisionsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('revisions', 'totalCount'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    EvidenceReviseView.ɵfac = function EvidenceReviseView_Factory(t) { return new (t || EvidenceReviseView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    EvidenceReviseView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EvidenceReviseView, selectors: [["cvc-evidence-revise"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName", "relationsTpl"], ["evidenceRelations", ""], [1, "site-page-header"], ["cvcFlaggableOptions", ""], ["nz-icon", "", "nzType", "civic:evidence"], [1, "content"], ["nzDirection", "horizontal"], ["nz-typography", "", 1, "label"], [1, "tags"], [3, "routerLink"], [3, "gene"], [3, "variant"]], template: function EvidenceReviseView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EvidenceReviseView_ng_container_0_Template, 12, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.evidence$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__["NzTypographyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcGeneTagComponent"], _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcVariantTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return EvidenceReviseView;
})();


/***/ }),

/***/ "CZO/":
/*!**************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-revise/evidence-revise.module.ts ***!
  \**************************************************************************/
/*! exports provided: EvidenceReviseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReviseModule", function() { return EvidenceReviseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evidence_revise_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-revise-routing.module */ "ne3U");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










let EvidenceReviseModule = /*@__PURE__*/ (() => {
    class EvidenceReviseModule {
    }
    EvidenceReviseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EvidenceReviseModule });
    EvidenceReviseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function EvidenceReviseModule_Factory(t) { return new (t || EvidenceReviseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _evidence_revise_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvidenceReviseRoutingModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__["NzTypographyModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcGeneTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcVariantTagModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_4__["CvcSectionNavigationModule"],
            ]] });
    return EvidenceReviseModule;
})();


/***/ }),

/***/ "XLX5":
/*!*********************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-revise/evidence-revise.service.ts ***!
  \*********************************************************************************/
/*! exports provided: EvidenceItemReviseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceItemReviseService", function() { return EvidenceItemReviseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/entitytype-to-typename */ "wmZe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");






let EvidenceItemReviseService = /*@__PURE__*/ (() => {
    class EvidenceItemReviseService {
        constructor(suggestEvidenceItemRevisionGQL, networkErrorService) {
            this.suggestEvidenceItemRevisionGQL = suggestEvidenceItemRevisionGQL;
            this.networkErrorService = networkErrorService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            this.isSubmitting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitError$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        suggest(suggestEvidenceItemRevisionInput) {
            this.storeObj = {
                id: suggestEvidenceItemRevisionInput.id,
                __typename: Object(_app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__["entityTypeToTypename"])('EvidenceItem')
            };
            this.isSubmitting$.next(true);
            this.suggestEvidenceItemRevisionGQL.mutate({ input: suggestEvidenceItemRevisionInput }, {
                update: (cache, { data: { suggestEvidenceItemRevision } }) => {
                    cache.modify({
                        id: cache.identify(this.storeObj),
                        fields: {
                            revisions(existingRevisionConnection = []) {
                                // const newConnection = {
                                //   __typeName: 'RevisionConnection',
                                //   node: {
                                //     __ref: cache.identify(suggestEvidenceItemRevision.evidenceItem.revisions)
                                //   }
                                // };
                                return suggestEvidenceItemRevision.evidenceItem.revisions;
                                // return {
                                //   ...existingRevisionConnection,
                                //   edges: [
                                //     ...existingRevisionConnection.edges,
                                //   ]
                                // }
                            },
                        },
                    });
                }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => { this.isSubmitting$.next(false); }))
                .subscribe({
                error: (error) => {
                    if (error.graphQLErrors.length > 0) {
                        this.submitError$.next(error.graphQLErrors.map(e => e.message));
                    }
                    else if (error.networkError) {
                        this.networkErrorService.networkError$.next(error.networkError);
                    }
                },
                complete: () => {
                    this.submitError$.next([]);
                    this.submitSuccess$.next(true);
                    this.networkErrorService.networkError$.next(undefined);
                }
            });
        }
        cleanup() {
            this.submitError$.next([]);
            this.submitSuccess$.next(false);
            this.isSubmitting$.next(false);
            this.networkErrorService.networkError$.next(undefined);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    EvidenceItemReviseService.ɵfac = function EvidenceItemReviseService_Factory(t) { return new (t || EvidenceItemReviseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["SuggestEvidenceItemRevisionGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"])); };
    EvidenceItemReviseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EvidenceItemReviseService, factory: EvidenceItemReviseService.ɵfac });
    return EvidenceItemReviseService;
})();


/***/ }),

/***/ "cHfK":
/*!********************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-revise/evidence-revise.module.ts ***!
  \********************************************************************************/
/*! exports provided: EvidenceReviseFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReviseFormModule", function() { return EvidenceReviseFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/forms/sources/types/source-input/source-input.module */ "J/XB");
/* harmony import */ var _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/forms/shared/types/multi-field/multi-field.module */ "XuDB");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_revise_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./evidence-revise.service */ "XLX5");
/* harmony import */ var _types_rating_input_rating_input_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../types/rating-input/rating-input.module */ "v7T7");
/* harmony import */ var _app_forms_drugs_types_drug_input_drug_input_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/forms/drugs/types/drug-input/drug-input.module */ "/Gp8");
/* harmony import */ var _app_forms_phenotypes_types_phenotype_input_phenotype_input_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/forms/phenotypes/types/phenotype-input/phenotype-input.module */ "wcLL");
/* harmony import */ var _app_forms_diseases_types_disease_input_disease_input_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/forms/diseases/types/disease-input/disease-input.module */ "Jt89");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















let EvidenceReviseFormModule = /*@__PURE__*/ (() => {
    class EvidenceReviseFormModule {
    }
    EvidenceReviseFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: EvidenceReviseFormModule });
    EvidenceReviseFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ factory: function EvidenceReviseFormModule_Factory(t) { return new (t || EvidenceReviseFormModule)(); }, providers: [_evidence_revise_service__WEBPACK_IMPORTED_MODULE_14__["EvidenceItemReviseService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_11__["NgxJsonViewerModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forChild(),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__["CvcFormErrorsAlertModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_3__["CvcFormButtonsModule"],
                _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_2__["MultiFieldModule"],
                _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_1__["SourceInputModule"],
                _app_forms_drugs_types_drug_input_drug_input_module__WEBPACK_IMPORTED_MODULE_16__["DrugInputModule"],
                _types_rating_input_rating_input_module__WEBPACK_IMPORTED_MODULE_15__["RatingInputModule"],
                _app_forms_phenotypes_types_phenotype_input_phenotype_input_module__WEBPACK_IMPORTED_MODULE_17__["PhenotypeInputModule"],
                _app_forms_diseases_types_disease_input_disease_input_module__WEBPACK_IMPORTED_MODULE_18__["DiseaseInputModule"],
            ]] });
    return EvidenceReviseFormModule;
})();


/***/ }),

/***/ "dZ1x":
/*!******************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-revise/evidence-revise.form.ts ***!
  \******************************************************************************/
/*! exports provided: EvidenceReviseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReviseForm", function() { return EvidenceReviseForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/enum-formatters/format-evidence-enum */ "JroN");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/forms/shared/input-formatters */ "Tdft");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _evidence_revise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evidence-revise.service */ "XLX5");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/form-errors-alert/form-errors-alert.component */ "IjnV");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");

























function EvidenceReviseForm_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
    }
}
function EvidenceReviseForm_nz_form_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "cvc-org-selector-btn-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedOrgChange", function EvidenceReviseForm_nz_form_item_3_Template_cvc_org_selector_btn_group_selectedOrgChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Suggest Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedOrg", ctx_r1.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.formGroup.valid);
    }
}
function EvidenceReviseForm_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
    }
}
function EvidenceReviseForm_ng_template_6_ng_container_0_nz_form_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "cvc-form-errors-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const errors_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errors", errors_r9);
    }
}
function EvidenceReviseForm_ng_template_6_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EvidenceReviseForm_ng_template_6_ng_container_0_nz_form_item_1_Template, 2, 1, "nz-form-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const errors_r9 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", errors_r9.length > 0);
    }
}
function EvidenceReviseForm_ng_template_6_ng_container_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View it on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Revisions Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " or suggest another revision below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
}
function EvidenceReviseForm_ng_template_6_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "nz-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EvidenceReviseForm_ng_template_6_ng_container_2_ng_template_2_Template, 5, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDescription", _r12);
    }
}
function EvidenceReviseForm_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EvidenceReviseForm_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EvidenceReviseForm_ng_template_6_ng_container_2_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r4.submitError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx_r4.submitSuccess$));
    }
}
let EvidenceReviseForm = /*@__PURE__*/ (() => {
    class EvidenceReviseForm {
        constructor(revisionService, viewerService, revisableFieldsGQL) {
            this.revisionService = revisionService;
            this.viewerService = viewerService;
            this.revisableFieldsGQL = revisableFieldsGQL;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
            this.formOptions = {};
            // subscribing to viewer$ and setting local org, mostRecentOrg
            // so that mostRecentOrg can be updated by org-selector's selectOrg events
            this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((v) => {
                this.organizations = v.organizations;
                this.mostRecentOrg = v.mostRecentOrg;
            });
            this.submitError$ = this.revisionService.submitError$;
            this.isSubmitting$ = this.revisionService.isSubmitting$;
            this.submitSuccess$ = this.revisionService.submitSuccess$;
            this.formFields = [
                {
                    key: 'id',
                    type: 'input',
                    hide: true
                },
                {
                    key: 'fields.variantOrigin',
                    type: 'select',
                    templateOptions: {
                        label: 'Variant Origin',
                        required: true,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["VariantOrigin"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__["formatEvidenceEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'fields.description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Description',
                        placeholder: 'Enter a description for this evidence item.',
                        required: false
                    }
                },
                {
                    key: 'fields.source',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Source',
                        addText: 'Add another Source',
                        maxCount: 1,
                    },
                    fieldArray: {
                        type: 'source-input',
                        templateOptions: {
                            required: true,
                        },
                    },
                },
                {
                    key: 'fields.evidenceType',
                    type: 'select',
                    templateOptions: {
                        label: 'Evidence Type',
                        required: true,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__["formatEvidenceEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'fields.clinicalSignificance',
                    type: 'select',
                    templateOptions: {
                        label: 'Clinical Signficance',
                        required: true,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceClinicalSignificance"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__["formatEvidenceEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'fields.disease',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Disease',
                        addText: 'Add a Disease',
                        minLength: 1,
                        maxCount: 1,
                    },
                    fieldArray: {
                        type: 'disease-input',
                        templateOptions: {}
                    }
                },
                {
                    key: 'fields.description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Evidence Statement',
                        placeholder: 'Please enter statement describing this evidence item.',
                        required: false
                    }
                },
                {
                    key: 'fields.evidenceLevel',
                    type: 'select',
                    templateOptions: {
                        label: 'Evidence Level',
                        required: true,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceLevel"])
                            .map((value, key) => {
                            return { value: value, label: key };
                        })
                    }
                },
                {
                    key: 'fields.evidenceDirection',
                    type: 'select',
                    templateOptions: {
                        label: 'Evidence Direction',
                        placeholder: 'Please select an Evidence Direction',
                        required: true,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceDirection"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__["formatEvidenceEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'fields.drugs',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Drug(s)',
                        addText: 'Add a Drug',
                    },
                    fieldArray: {
                        type: 'drug-input',
                        templateOptions: {},
                    },
                },
                {
                    key: 'fields.drugInteractionType',
                    type: 'select',
                    templateOptions: {
                        label: 'Drug InteractionType',
                        required: false,
                        placeholder: 'Please select a Drug Interaction Type',
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["DrugInteraction"])
                            .map((value, key) => {
                            return { value: value, label: key };
                        })
                    }
                },
                {
                    key: 'fields.phenotypes',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Associated Phenotypes',
                        addText: 'Add a Phenoype'
                    },
                    fieldArray: {
                        type: 'phenotype-input',
                        templateOptions: {}
                    }
                },
                {
                    key: 'fields.evidenceRating',
                    type: 'rating-input',
                    templateOptions: {
                        label: 'Rating',
                    },
                },
                {
                    key: 'comment',
                    type: 'comment-textarea',
                    templateOptions: {
                        label: 'Comment',
                        placeholder: 'Please enter a comment describing your revision.',
                        required: true,
                        minLength: 10
                    },
                }
            ];
        }
        ngOnInit() {
            // fetch latest revisable field values, update form fields
            this.revisableFieldsGQL.fetch({ evidenceId: this.evidenceId })
                .subscribe(({ data: { evidenceItem } }) => {
                if (evidenceItem) {
                    this.formModel = this.toFormModel(evidenceItem);
                }
                else {
                    // TODO: handle errors with subscribe({complete, error})
                    console.error('Evidence Revise form could not retrieve evidence item.');
                }
                if (this.formOptions.updateInitialValue) {
                    this.formOptions.updateInitialValue();
                }
            });
        }
        toFormModel(evidence) {
            return {
                id: evidence.id,
                // comment: '',
                organizationId: undefined,
                fields: Object.assign(Object.assign({}, evidence), { source: [evidence.source], drugs: evidence.drugs.length > 0 ? evidence.drugs : [], disease: [evidence.disease] }),
            };
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
        submitRevision(formModel) {
            this.revisionService
                .suggest(this.toRevisionInput(formModel));
        }
        toRevisionInput(model) {
            const fields = model.fields;
            return Object.assign(Object.assign({}, model), { fields: {
                    variantOrigin: fields.variantOrigin,
                    description: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableString"](fields.description),
                    variantId: fields.variant.id,
                    sourceId: fields.source[0].id,
                    evidenceType: fields.evidenceType,
                    evidenceDirection: fields.evidenceDirection,
                    clinicalSignificance: fields.clinicalSignificance,
                    diseaseId: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableInt"](fields.disease[0].id),
                    evidenceLevel: fields.evidenceLevel,
                    phenotypeIds: fields.phenotypes.map((ph) => { return ph.id; }),
                    rating: +fields.evidenceRating,
                    drugIds: fields.drugs.map((dr) => { return dr.id; }),
                    drugInteractionType: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableDrugInteractionTypeInput"](fields.drugInteractionType)
                }, organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.revisionService.cleanup();
        }
    }
    EvidenceReviseForm.ɵfac = function EvidenceReviseForm_Factory(t) { return new (t || EvidenceReviseForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_evidence_revise_service__WEBPACK_IMPORTED_MODULE_8__["EvidenceItemReviseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_9__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceItemRevisableFieldsGQL"])); };
    EvidenceReviseForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EvidenceReviseForm, selectors: [["cvc-evidence-revise-form"]], inputs: { evidenceId: "evidenceId" }, decls: 8, vars: 10, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], [4, "ngTemplateOutlet"], [3, "form", "fields", "model", "options", "modelChange"], [4, "ngIf"], ["formMessages", ""], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"], [3, "errors"], ["nzType", "success", "nzMessage", "Suggested Revision Submitted", "nzShowIcon", "", 3, "nzDescription"], ["nzSize", "small"], ["successMessage", ""], ["routerLink", "../../revisions"]], template: function EvidenceReviseForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function EvidenceReviseForm_Template_form_ngSubmit_0_listener() { return ctx.submitRevision(ctx.formModel); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EvidenceReviseForm_ng_container_1_Template, 1, 0, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "formly-form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("modelChange", function EvidenceReviseForm_Template_formly_form_modelChange_2_listener($event) { return ctx.formModel = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EvidenceReviseForm_nz_form_item_3_Template, 6, 2, "nz-form-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, EvidenceReviseForm_ng_container_5_Template, 1, 0, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, EvidenceReviseForm_ng_template_6_Template, 4, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.formGroup)("fields", ctx.formFields)("model", ctx.formModel)("options", ctx.formOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 8, ctx.submitSuccess$));
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__["FormlyForm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_15__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_18__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_20__["CvcFormErrorsAlertComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__["NzAlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [""] });
    return EvidenceReviseForm;
})();


/***/ }),

/***/ "nSxN":
/*!******************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-revise/evidence-suggest/evidence-suggest.page.ts ***!
  \******************************************************************************************/
/*! exports provided: EvidenceSuggestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSuggestPage", function() { return EvidenceSuggestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _forms_evidence_forms_evidence_revise_evidence_revise_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../forms/evidence/forms/evidence-revise/evidence-revise.form */ "dZ1x");








function EvidenceSuggestPage_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-evidence-revise-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("evidenceId", ctx_r0.evidenceId);
    }
}
function EvidenceSuggestPage_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading Evidence...");
    }
}
const _c0 = function () { return { rows: 1 }; };
const _c1 = function () { return { rows: 3 }; };
const _c2 = function () { return { rows: 4 }; };
const _c3 = function () { return { rows: 5 }; };
let EvidenceSuggestPage = /*@__PURE__*/ (() => {
    class EvidenceSuggestPage {
        constructor(route) {
            this.route = route;
            this.routeParams$ = this.route.params.subscribe((params) => {
                this.evidenceId = +params.evidenceId;
            });
        }
        ngOnDestroy() {
            this.routeParams$.unsubscribe();
        }
    }
    EvidenceSuggestPage.ɵfac = function EvidenceSuggestPage_Factory(t) { return new (t || EvidenceSuggestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    EvidenceSuggestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceSuggestPage, selectors: [["cvc-evidence-suggest"]], decls: 16, vars: 11, consts: [[3, "nzGutter"], ["nzSpan", "16"], [4, "ngIf", "ngIfElse"], ["loadingEvidence", ""], ["nzSpan", "8"], ["nzTitle", "Instructions", "nz-type", "inner"], ["nzDirection", "vertical", 2, "width", "100%"], [3, "nzParagraph"], [3, "evidenceId"]], template: function EvidenceSuggestPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EvidenceSuggestPage_ng_container_2_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EvidenceSuggestPage_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-col", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-card", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-space", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-skeleton", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-skeleton", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-skeleton", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-skeleton", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evidenceId)("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__["NzSkeletonComponent"], _forms_evidence_forms_evidence_revise_evidence_revise_form__WEBPACK_IMPORTED_MODULE_7__["EvidenceReviseForm"]], styles: [""] });
    return EvidenceSuggestPage;
})();


/***/ }),

/***/ "ne3U":
/*!**********************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-revise/evidence-revise-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EvidenceReviseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReviseRoutingModule", function() { return EvidenceReviseRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_revise_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-revise.view */ "7tJp");
/* harmony import */ var _evidence_suggest_evidence_suggest_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-suggest/evidence-suggest.module */ "w/EH");
/* harmony import */ var _evidence_suggest_evidence_suggest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidence-suggest/evidence-suggest.page */ "nSxN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _evidence_revise_view__WEBPACK_IMPORTED_MODULE_1__["EvidenceReviseView"],
        data: { breadcrumb: 'Revise' },
        children: [
            { path: '', redirectTo: 'suggest', pathMatch: 'full' },
            {
                path: 'suggest',
                component: _evidence_suggest_evidence_suggest_page__WEBPACK_IMPORTED_MODULE_3__["EvidenceSuggestPage"],
                data: {
                    breadcrumb: 'Suggest Revision'
                }
            }
        ]
    }
];
let EvidenceReviseRoutingModule = /*@__PURE__*/ (() => {
    class EvidenceReviseRoutingModule {
    }
    EvidenceReviseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvidenceReviseRoutingModule });
    EvidenceReviseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function EvidenceReviseRoutingModule_Factory(t) { return new (t || EvidenceReviseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _evidence_suggest_evidence_suggest_module__WEBPACK_IMPORTED_MODULE_2__["EvidenceSuggestModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return EvidenceReviseRoutingModule;
})();


/***/ }),

/***/ "w/EH":
/*!********************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-revise/evidence-suggest/evidence-suggest.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EvidenceSuggestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSuggestModule", function() { return EvidenceSuggestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_forms_evidence_forms_evidence_revise_evidence_revise_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/forms/evidence/forms/evidence-revise/evidence-revise.module */ "cHfK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let EvidenceSuggestModule = /*@__PURE__*/ (() => {
    class EvidenceSuggestModule {
    }
    EvidenceSuggestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EvidenceSuggestModule });
    EvidenceSuggestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function EvidenceSuggestModule_Factory(t) { return new (t || EvidenceSuggestModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__["NzSkeletonModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"],
                _app_forms_evidence_forms_evidence_revise_evidence_revise_module__WEBPACK_IMPORTED_MODULE_6__["EvidenceReviseFormModule"],
            ]] });
    return EvidenceSuggestModule;
})();


/***/ }),

/***/ "wmZe":
/*!**********************************************************!*\
  !*** ./src/app/core/utilities/entitytype-to-typename.ts ***!
  \**********************************************************/
/*! exports provided: entityTypeToTypename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityTypeToTypename", function() { return entityTypeToTypename; });
function entityTypeToTypename(s) {
    return s
        .toLowerCase()
        .split('_')
        .map(n => n[0].toUpperCase() + n.substring(1)).join('');
}


/***/ })

}]);