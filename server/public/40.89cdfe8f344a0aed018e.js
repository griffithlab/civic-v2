(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "04ex":
/*!*************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-add/evidence-submit/evidence-submit.page.ts ***!
  \*************************************************************************************/
/*! exports provided: EvidenceSubmitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmitPage", function() { return EvidenceSubmitPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _forms_evidence_forms_evidence_submit_evidence_submit_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../forms/evidence/forms/evidence-submit/evidence-submit.form */ "YDXd");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");







const _c0 = function () { return { rows: 1 }; };
const _c1 = function () { return { rows: 3 }; };
const _c2 = function () { return { rows: 4 }; };
const _c3 = function () { return { rows: 5 }; };
let EvidenceSubmitPage = /*@__PURE__*/ (() => {
    class EvidenceSubmitPage {
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
    EvidenceSubmitPage.ɵfac = function EvidenceSubmitPage_Factory(t) { return new (t || EvidenceSubmitPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    EvidenceSubmitPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceSubmitPage, selectors: [["cvc-evidence-submit"]], decls: 14, vars: 9, consts: [[3, "nzGutter"], ["nzSpan", "16"], ["nzSpan", "8"], ["nzTitle", "Instructions", "nz-type", "inner"], ["nzDirection", "vertical", 2, "width", "100%"], [3, "nzParagraph"]], template: function EvidenceSubmitPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cvc-evidence-submit-form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-col", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-card", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-space", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-skeleton", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-skeleton", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-skeleton", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-space-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-skeleton", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _forms_evidence_forms_evidence_submit_evidence_submit_form__WEBPACK_IMPORTED_MODULE_3__["EvidenceSubmitForm"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__["NzSkeletonComponent"]], styles: [""] });
    return EvidenceSubmitPage;
})();


/***/ }),

/***/ "C1lD":
/*!*******************************************************************!*\
  !*** ./src/app/forms/genes/types/gene-input/gene-input.module.ts ***!
  \*******************************************************************/
/*! exports provided: GeneInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInputModule", function() { return GeneInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gene_input_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gene-input.type */ "GYVa");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const formlyConfig = {
    types: [_gene_input_type__WEBPACK_IMPORTED_MODULE_1__["GeneInputType"]],
};
let GeneInputModule = /*@__PURE__*/ (() => {
    class GeneInputModule {
    }
    GeneInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: GeneInputModule });
    GeneInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function GeneInputModule_Factory(t) { return new (t || GeneInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ReactiveComponentModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__["NzTypographyModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcGeneTagModule"],
            ]] });
    return GeneInputModule;
})();


/***/ }),

/***/ "CWBv":
/*!********************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-submit/evidence-submit.module.ts ***!
  \********************************************************************************/
/*! exports provided: EvidenceSubmitFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmitFormModule", function() { return EvidenceSubmitFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_forms_diseases_types_disease_input_disease_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/forms/diseases/types/disease-input/disease-input.module */ "Jt89");
/* harmony import */ var _app_forms_phenotypes_types_phenotype_input_phenotype_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/forms/phenotypes/types/phenotype-input/phenotype-input.module */ "wcLL");
/* harmony import */ var _types_rating_input_rating_input_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/rating-input/rating-input.module */ "v7T7");
/* harmony import */ var _app_forms_drugs_types_drug_input_drug_input_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/drugs/types/drug-input/drug-input.module */ "/Gp8");
/* harmony import */ var _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/sources/types/source-input/source-input.module */ "J/XB");
/* harmony import */ var _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/forms/shared/types/multi-field/multi-field.module */ "XuDB");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_submit_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./evidence-submit.service */ "vgox");
/* harmony import */ var _app_forms_genes_types_gene_input_gene_input_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/forms/genes/types/gene-input/gene-input.module */ "C1lD");
/* harmony import */ var _app_forms_variants_types_variant_input_variant_input_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/forms/variants/types/variant-input/variant-input.module */ "dk/x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























let EvidenceSubmitFormModule = /*@__PURE__*/ (() => {
    class EvidenceSubmitFormModule {
    }
    EvidenceSubmitFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: EvidenceSubmitFormModule });
    EvidenceSubmitFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function EvidenceSubmitFormModule_Factory(t) { return new (t || EvidenceSubmitFormModule)(); }, providers: [_evidence_submit_service__WEBPACK_IMPORTED_MODULE_18__["EvidenceItemSubmitService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_15__["NgxJsonViewerModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__["NzAlertModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzGridModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__["FormlyModule"].forChild(),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_9__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_8__["CvcFormErrorsAlertModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_7__["CvcFormButtonsModule"],
                _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_6__["MultiFieldModule"],
                _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_5__["SourceInputModule"],
                _app_forms_drugs_types_drug_input_drug_input_module__WEBPACK_IMPORTED_MODULE_4__["DrugInputModule"],
                _types_rating_input_rating_input_module__WEBPACK_IMPORTED_MODULE_3__["RatingInputModule"],
                _app_forms_phenotypes_types_phenotype_input_phenotype_input_module__WEBPACK_IMPORTED_MODULE_2__["PhenotypeInputModule"],
                _app_forms_diseases_types_disease_input_disease_input_module__WEBPACK_IMPORTED_MODULE_1__["DiseaseInputModule"],
                _app_forms_genes_types_gene_input_gene_input_module__WEBPACK_IMPORTED_MODULE_19__["GeneInputModule"],
                _app_forms_variants_types_variant_input_variant_input_module__WEBPACK_IMPORTED_MODULE_20__["VariantInputModule"],
            ]] });
    return EvidenceSubmitFormModule;
})();


/***/ }),

/***/ "Ffxz":
/*!***************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-add/evidence-submit/evidence-submit.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EvidenceSubmitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmitModule", function() { return EvidenceSubmitModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_forms_evidence_forms_evidence_submit_evidence_submit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/evidence/forms/evidence-submit/evidence-submit.module */ "CWBv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let EvidenceSubmitModule = /*@__PURE__*/ (() => {
    class EvidenceSubmitModule {
    }
    EvidenceSubmitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EvidenceSubmitModule });
    EvidenceSubmitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function EvidenceSubmitModule_Factory(t) { return new (t || EvidenceSubmitModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__["NzSkeletonModule"],
                _app_forms_evidence_forms_evidence_submit_evidence_submit_module__WEBPACK_IMPORTED_MODULE_5__["EvidenceSubmitFormModule"],
            ]] });
    return EvidenceSubmitModule;
})();


/***/ }),

/***/ "GYVa":
/*!*****************************************************************!*\
  !*** ./src/app/forms/genes/types/gene-input/gene-input.type.ts ***!
  \*****************************************************************/
/*! exports provided: GeneInputComponent, GeneInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInputComponent", function() { return GeneInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInputType", function() { return GeneInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/genes/gene-tag/gene-tag.component */ "S0Et");













function GeneInputComponent_ng_container_0_ng_container_2_nz_option_3_nz_space_item_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r8.gene.geneAliases.join(", "));
    }
}
function GeneInputComponent_ng_container_0_ng_container_2_nz_option_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GeneInputComponent_ng_container_0_ng_container_2_nz_option_3_nz_space_item_4_Template, 3, 1, "nz-space-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", opt_r8.tooltip)("nzValue", opt_r8.gene);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", opt_r8.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", opt_r8.gene.geneAliases.length > 0);
    }
}
function GeneInputComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GeneInputComponent_ng_container_0_ng_container_2_nz_option_3_Template, 5, 4, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const genes_r6 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, genes_r6), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", genes_r6);
    }
}
function GeneInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " No gene found in CIViC that matches the string provided. ");
    }
}
function GeneInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function GeneInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GeneInputComponent_ng_container_0_ng_container_2_Template, 4, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GeneInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.genes$);
    }
}
function GeneInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cvc-gene-tag", 9);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gene", ctx_r2.formControl.value);
    }
}
let GeneInputComponent = /*@__PURE__*/ (() => {
    class GeneInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(geneTypeaheadQuery) {
            super();
            this.geneTypeaheadQuery = geneTypeaheadQuery;
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Genes',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        ngOnInit() {
            this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: "" });
            this.genes$ = this.queryRef
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data', 'geneTypeahead'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((genes) => {
                return genes.map((g) => {
                    let aliases = g.geneAliases.length > 0 ? `Aliases: ${g.geneAliases.join(', ')}` : "";
                    return {
                        value: g.id,
                        tooltip: `${g.name} (${g.entrezId}) ${aliases}`,
                        label: `${g.name} (${g.entrezId})`,
                        gene: g,
                    };
                });
            }));
        }
        ngAfterViewInit() {
            this.to.onSearch = (value) => {
                this.to.fieldValue = value;
                this.to.fieldLength = value.length;
                if (value.length < this.to.minLengthSearch ||
                    value.length > this.to.maxLength) {
                    return;
                }
                this.queryRef.refetch({ entrezSymbol: value });
            };
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    GeneInputComponent.ɵfac = function GeneInputComponent_Factory(t) { return new (t || GeneInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["GeneTypeaheadGQL"])); };
    GeneInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GeneInputComponent, selectors: [["cvc-gene-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["geneListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], [4, "ngrxLet"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-typography", "", "nzType", "secondary"], [3, "gene"]], template: function GeneInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GeneInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GeneInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__["NzTypographyComponent"], _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcGeneTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [""] });
    return GeneInputComponent;
})();
const GeneInputType = {
    name: 'gene-input',
    component: GeneInputComponent,
};


/***/ }),

/***/ "HAPh":
/*!******************************************************************!*\
  !*** ./src/app/views/evidence/evidence-add/evidence-add.view.ts ***!
  \******************************************************************/
/*! exports provided: EvidenceAddView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceAddView", function() { return EvidenceAddView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let EvidenceAddView = /*@__PURE__*/ (() => {
    class EvidenceAddView {
        constructor() { }
        ngOnInit() {
        }
    }
    EvidenceAddView.ɵfac = function EvidenceAddView_Factory(t) { return new (t || EvidenceAddView)(); };
    EvidenceAddView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceAddView, selectors: [["evidence-add"]], decls: 10, vars: 0, consts: [["displayName", "New"], [1, "site-page-header"], ["cvcFlaggableOptions", ""], ["nz-icon", "", "nzType", "civic:evidence"], [1, "content"]], template: function EvidenceAddView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-section-navigation", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-page-header-title", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add New Evidence ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-page-header-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit and review new evidence items ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_1__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderSubtitleDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return EvidenceAddView;
})();


/***/ }),

/***/ "JgnG":
/*!**************************************************************************!*\
  !*** ./src/app/forms/variants/types/variant-input/variant-input.type.ts ***!
  \**************************************************************************/
/*! exports provided: VariantInputComponent, VariantInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantInputComponent", function() { return VariantInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantInputType", function() { return VariantInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/variants/variant-tag/variant-tag.component */ "ifvR");








function VariantInputComponent_ng_container_0_nz_option_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", opt_r6.label)("nzValue", opt_r6.variant);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", opt_r6.variant.name, " ");
    }
}
function VariantInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " No variant found in CIViC that matches the string provided. ");
    }
}
function VariantInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnSearch", function VariantInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VariantInputComponent_ng_container_0_nz_option_2_Template, 2, 3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VariantInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.to.optionList);
    }
}
function VariantInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-variant-tag", 6);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("variant", ctx_r2.formControl.value);
    }
}
let VariantInputComponent = /*@__PURE__*/ (() => {
    class VariantInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(variantTypeaheadQuery, changeDetectorRef) {
            super();
            this.variantTypeaheadQuery = variantTypeaheadQuery;
            this.changeDetectorRef = changeDetectorRef;
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Variants',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
        }
        ngAfterViewInit() {
            this.to.onSearch = (value) => {
                this.to.fieldValue = value;
                this.to.fieldLength = value.length;
                if (value.length < this.to.minLengthSearch ||
                    value.length > this.to.maxLength) {
                    return;
                }
                this.variantTypeaheadQuery
                    .fetch({ name: value })
                    .subscribe(({ data: { variants } }) => {
                    this.to.optionList = variants.nodes.map((g) => {
                        return {
                            value: g.id,
                            label: g.name,
                            variant: g
                        };
                    });
                    // TODO implement this search as an observable to avoid detectChanges
                    this.changeDetectorRef.detectChanges();
                });
            };
        }
    }
    VariantInputComponent.ɵfac = function VariantInputComponent_Factory(t) { return new (t || VariantInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["VariantTypeaheadGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    VariantInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariantInputComponent, selectors: [["cvc-variant-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["variantListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [3, "variant"]], template: function VariantInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VariantInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VariantInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzOptionComponent"], _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_6__["CvcVariantTagComponent"]], styles: [""], changeDetection: 0 });
    return VariantInputComponent;
})();
const VariantInputType = {
    name: 'variant-input',
    component: VariantInputComponent,
};


/***/ }),

/***/ "MnlO":
/*!********************************************************************!*\
  !*** ./src/app/views/evidence/evidence-add/evidence-add.module.ts ***!
  \********************************************************************/
/*! exports provided: EvidenceAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceAddModule", function() { return EvidenceAddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evidence_add_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-add-routing.module */ "e9pV");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let EvidenceAddModule = /*@__PURE__*/ (() => {
    class EvidenceAddModule {
    }
    EvidenceAddModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EvidenceAddModule });
    EvidenceAddModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function EvidenceAddModule_Factory(t) { return new (t || EvidenceAddModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _evidence_add_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvidenceAddRoutingModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__["CvcSectionNavigationModule"],
            ]] });
    return EvidenceAddModule;
})();


/***/ }),

/***/ "YDXd":
/*!******************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-submit/evidence-submit.form.ts ***!
  \******************************************************************************/
/*! exports provided: EvidenceSubmitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmitForm", function() { return EvidenceSubmitForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_core_utilities_enum_formatters_format_evidence_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/enum-formatters/format-evidence-enum */ "JroN");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/forms/shared/input-formatters */ "Tdft");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _evidence_submit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evidence-submit.service */ "vgox");
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
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");


























function EvidenceSubmitForm_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
    }
}
function EvidenceSubmitForm_nz_form_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "cvc-org-selector-btn-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedOrgChange", function EvidenceSubmitForm_nz_form_item_3_Template_cvc_org_selector_btn_group_selectedOrgChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Submit Evidence ");
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
function EvidenceSubmitForm_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
    }
}
function EvidenceSubmitForm_ng_template_6_ng_container_0_nz_form_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "cvc-form-errors-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const errors_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errors", errors_r11);
    }
}
function EvidenceSubmitForm_ng_template_6_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EvidenceSubmitForm_ng_template_6_ng_container_0_nz_form_item_1_Template, 2, 1, "nz-form-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const errors_r11 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", errors_r11.length > 0);
    }
}
function EvidenceSubmitForm_ng_template_6_ng_container_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "its details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
}
function EvidenceSubmitForm_ng_template_6_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "nz-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EvidenceSubmitForm_ng_template_6_ng_container_2_ng_template_2_Template, 5, 0, "ng-template", 12, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDescription", _r14);
    }
}
function EvidenceSubmitForm_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EvidenceSubmitForm_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EvidenceSubmitForm_ng_template_6_ng_container_2_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r4.submitError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx_r4.submitSuccess$));
    }
}
function EvidenceSubmitForm_ngx_json_viewer_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-json-viewer", 15);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("json", ctx_r5.formGroup.value);
    }
}
function EvidenceSubmitForm_ngx_json_viewer_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-json-viewer", 15);
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("json", ctx_r6.formModel);
    }
}
let EvidenceSubmitForm = /*@__PURE__*/ (() => {
    class EvidenceSubmitForm {
        constructor(submitService, viewerService, submittableFieldsGQL) {
            this.submitService = submitService;
            this.viewerService = viewerService;
            this.submittableFieldsGQL = submittableFieldsGQL;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
            this.formOptions = {};
            this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((v) => {
                this.organizations = v.organizations;
                this.mostRecentOrg = v.mostRecentOrg;
            });
            this.submitError$ = this.submitService.submitError$;
            this.isSubmitting$ = this.submitService.isSubmitting$;
            this.submitSuccess$ = this.submitService.submitSuccess$;
            this.formFields = [
                {
                    key: 'id',
                    type: 'input',
                    hide: true
                },
                {
                    key: 'fields.gene',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Gene',
                        addText: 'Specify a Gene',
                        maxCount: 1,
                    },
                    fieldArray: {
                        type: 'gene-input',
                        templateOptions: {
                            required: true,
                        },
                    },
                },
                {
                    key: 'fields.variant',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Variant',
                        addText: 'Specify a Variant',
                        maxCount: 1,
                    },
                    fieldArray: {
                        type: 'variant-input',
                        templateOptions: {
                            required: true,
                        },
                    },
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
                    key: 'fields.source',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Source',
                        addText: 'Add a Source',
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
                        required: true
                    }
                },
                {
                    key: 'fields.evidenceLevel',
                    type: 'select',
                    templateOptions: {
                        label: 'Evidence Level',
                        required: true,
                        placeholder: 'Please select an Evidence Level',
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
                        required: false,
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
                        required: false,
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
            // // fetch latest revisable field values, update form fields
            // this.submittableFieldsGQL.fetch({ evidenceId: this.evidenceId })
            //   .subscribe(({ data: { evidenceItem } }) => {
            //     if (evidenceItem) {
            //       this.formModel = this.toFormModel(evidenceItem);
            //     } else {
            //       // TODO: handle errors with subscribe({complete, error})
            //       console.error('Evidence Revise form could not retrieve evidence item.');
            //     }
            //     if (this.formOptions.updateInitialValue) {
            //       this.formOptions.updateInitialValue();
            //     }
            //   });
        }
        // toFormModel(evidence: SubmittableEvidenceFieldsFragment): FormModel {
        //   return <FormModel>{
        //     id: evidence.id,
        //     // comment: '',
        //     organizationId: undefined,
        //     fields: {
        //       ...evidence,
        //       source: [evidence.source], // wrapping an array so multi-field will display source properly until we write a single-source option
        //       drugs: evidence.drugs.length > 0 ? evidence.drugs : [],
        //       disease: [evidence.disease],
        //     },
        //   }
        // }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
        submitEvidence(formModel) {
            this.submitService
                .submit(this.toSubmitInput(formModel));
        }
        toSubmitInput(model) {
            var _a;
            const fields = model.fields;
            return Object.assign(Object.assign({}, model), { fields: {
                    variantOrigin: fields.variantOrigin,
                    description: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableString"](fields.description),
                    variantId: fields.variant[0].id,
                    sourceId: fields.source[0].id,
                    evidenceType: fields.evidenceType,
                    evidenceDirection: fields.evidenceDirection,
                    clinicalSignificance: fields.clinicalSignificance,
                    diseaseId: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableInt"]((_a = fields.disease[0]) === null || _a === void 0 ? void 0 : _a.id),
                    evidenceLevel: fields.evidenceLevel,
                    phenotypeIds: fields.phenotypes ? fields.phenotypes.map((ph) => { return ph.id; }) : [],
                    rating: +fields.evidenceRating,
                    drugIds: fields.drugs ? fields.drugs.map((dr) => { return dr.id; }) : [],
                    drugInteractionType: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableDrugInteractionTypeInput"](fields.drugInteractionType)
                }, organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.submitService.cleanup();
        }
    }
    EvidenceSubmitForm.ɵfac = function EvidenceSubmitForm_Factory(t) { return new (t || EvidenceSubmitForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_evidence_submit_service__WEBPACK_IMPORTED_MODULE_8__["EvidenceItemSubmitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_9__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EvidenceSubmittableFieldsGQL"])); };
    EvidenceSubmitForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EvidenceSubmitForm, selectors: [["cvc-evidence-submit-form"]], decls: 17, vars: 12, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], [4, "ngTemplateOutlet"], [3, "form", "fields", "model", "options", "modelChange"], [4, "ngIf"], ["formMessages", ""], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], [3, "json", 4, "ngIf"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"], [3, "errors"], ["nzType", "success", "nzMessage", "Suggested Revision Submitted", "nzShowIcon", "", 3, "nzDescription"], ["nzSize", "small"], ["successMessage", ""], ["routerLink", "../../"], [3, "json"]], template: function EvidenceSubmitForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function EvidenceSubmitForm_Template_form_ngSubmit_0_listener() { return ctx.submitEvidence(ctx.formModel); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EvidenceSubmitForm_ng_container_1_Template, 1, 0, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "formly-form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("modelChange", function EvidenceSubmitForm_Template_formly_form_modelChange_2_listener($event) { return ctx.formModel = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EvidenceSubmitForm_nz_form_item_3_Template, 6, 2, "nz-form-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, EvidenceSubmitForm_ng_container_5_Template, 1, 0, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, EvidenceSubmitForm_ng_template_6_Template, 4, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, EvidenceSubmitForm_ngx_json_viewer_10_Template, 1, 1, "ngx-json-viewer", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "formModel");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "To speed up form updates, comment out or remove this formModel debug block.");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, EvidenceSubmitForm_ngx_json_viewer_16_Template, 1, 1, "ngx-json-viewer", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.formGroup)("fields", ctx.formFields)("model", ctx.formModel)("options", ctx.formOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 10, ctx.submitSuccess$));
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__["FormlyForm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_15__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_18__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_20__["CvcFormErrorsAlertComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__["NzAlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_23__["NgxJsonViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [""] });
    return EvidenceSubmitForm;
})();


/***/ }),

/***/ "dk/x":
/*!****************************************************************************!*\
  !*** ./src/app/forms/variants/types/variant-input/variant-input.module.ts ***!
  \****************************************************************************/
/*! exports provided: VariantInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantInputModule", function() { return VariantInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _variant_input_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-input.type */ "JgnG");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const formlyConfig = {
    types: [_variant_input_type__WEBPACK_IMPORTED_MODULE_1__["VariantInputType"]],
};
let VariantInputModule = /*@__PURE__*/ (() => {
    class VariantInputModule {
    }
    VariantInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: VariantInputModule });
    VariantInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function VariantInputModule_Factory(t) { return new (t || VariantInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcVariantTagModule"],
            ]] });
    return VariantInputModule;
})();


/***/ }),

/***/ "e9pV":
/*!****************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-add/evidence-add-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EvidenceAddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceAddRoutingModule", function() { return EvidenceAddRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_add_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-add.view */ "HAPh");
/* harmony import */ var _evidence_submit_evidence_submit_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-submit/evidence-submit.module */ "Ffxz");
/* harmony import */ var _evidence_submit_evidence_submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidence-submit/evidence-submit.page */ "04ex");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _evidence_add_view__WEBPACK_IMPORTED_MODULE_1__["EvidenceAddView"],
        children: [
            { path: '', redirectTo: 'submit', pathMatch: 'full' },
            {
                path: 'submit',
                component: _evidence_submit_evidence_submit_page__WEBPACK_IMPORTED_MODULE_3__["EvidenceSubmitPage"],
                data: {
                    breadcrumb: 'Submit New Evidence',
                },
            },
        ],
    },
];
let EvidenceAddRoutingModule = /*@__PURE__*/ (() => {
    class EvidenceAddRoutingModule {
    }
    EvidenceAddRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvidenceAddRoutingModule });
    EvidenceAddRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function EvidenceAddRoutingModule_Factory(t) { return new (t || EvidenceAddRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _evidence_submit_evidence_submit_module__WEBPACK_IMPORTED_MODULE_2__["EvidenceSubmitModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return EvidenceAddRoutingModule;
})();


/***/ }),

/***/ "vgox":
/*!*********************************************************************************!*\
  !*** ./src/app/forms/evidence/forms/evidence-submit/evidence-submit.service.ts ***!
  \*********************************************************************************/
/*! exports provided: EvidenceItemSubmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceItemSubmitService", function() { return EvidenceItemSubmitService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");





let EvidenceItemSubmitService = /*@__PURE__*/ (() => {
    class EvidenceItemSubmitService {
        constructor(submitEvidenceItemGQL, networkErrorService) {
            this.submitEvidenceItemGQL = submitEvidenceItemGQL;
            this.networkErrorService = networkErrorService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            this.isSubmitting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitError$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        submit(submitEvidenceItemInput) {
            this.isSubmitting$.next(true);
            this.submitEvidenceItemGQL.mutate({ input: submitEvidenceItemInput })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { this.isSubmitting$.next(false); }))
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
    EvidenceItemSubmitService.ɵfac = function EvidenceItemSubmitService_Factory(t) { return new (t || EvidenceItemSubmitService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["SubmitEvidenceItemGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_4__["NetworkErrorsService"])); };
    EvidenceItemSubmitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EvidenceItemSubmitService, factory: EvidenceItemSubmitService.ɵfac });
    return EvidenceItemSubmitService;
})();


/***/ })

}]);