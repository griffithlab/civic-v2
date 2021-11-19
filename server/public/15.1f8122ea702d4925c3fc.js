(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "IpA2":
/*!***********************************************************************************!*\
  !*** ./src/app/components/assertions/assertions-table/assertions-table.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CvcAssertionsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAssertionsTableModule", function() { return CvcAssertionsTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/tag-overflow/tag-overflow.module */ "2WDp");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/shared/tag-list/tag-list.module */ "iNrY");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















let CvcAssertionsTableModule = /*@__PURE__*/ (() => {
    class CvcAssertionsTableModule {
    }
    CvcAssertionsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: CvcAssertionsTableModule });
    CvcAssertionsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function CvcAssertionsTableModule_Factory(t) { return new (t || CvcAssertionsTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__["NzTypographyModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_15__["CvcClearableInputFilterModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["CvcPipesModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_9__["CvcGeneTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_11__["CvcVariantTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_12__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcDrugTagModule"],
                _assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_20__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_19__["CvcEvidenceTagModule"],
                _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_18__["CvcTagListModule"],
                _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_8__["CvcTagOverflowModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_15__["CvcClearableInputFilterModule"],
            ]] });
    return CvcAssertionsTableModule;
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

/***/ "zI+k":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assertions/assertions-table/assertions-table.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcAssertionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAssertionsTableComponent", function() { return CvcAssertionsTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assertions-tag/assertion-tag.component */ "u+rr");
/* harmony import */ var _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../diseases/cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../drugs/cvc-drug-tag/cvc-drug-tag.component */ "an+6");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/pipes/evidence-enum-display-type */ "N9dV");
/* harmony import */ var _core_pipes_if_empty_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/pipes/if-empty-pipe */ "40is");
/* harmony import */ var _core_pipes_amp_format_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../core/pipes/amp-format-pipe */ "ivbq");
























function CvcAssertionsTableComponent_tr_79_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-disease-tag", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const aid_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disease", aid_r2.disease);
    }
}
function CvcAssertionsTableComponent_tr_79_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CvcAssertionsTableComponent_tr_79_p_12_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-drug-tag", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const drug_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("drug", drug_r12);
    }
}
function CvcAssertionsTableComponent_tr_79_p_12_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const aid_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, aid_r2.drugInteractionType), ") ");
    }
}
function CvcAssertionsTableComponent_tr_79_p_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CvcAssertionsTableComponent_tr_79_p_12_span_1_Template, 2, 1, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CvcAssertionsTableComponent_tr_79_p_12_span_2_Template, 3, 3, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const aid_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", aid_r2.drugs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", aid_r2.drugs.length > 1);
    }
}
function CvcAssertionsTableComponent_tr_79_ng_template_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CvcAssertionsTableComponent_tr_79_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-assertion-tag", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "cvc-gene-tag", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "cvc-variant-tag", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CvcAssertionsTableComponent_tr_79_ng_container_8_Template, 2, 1, "ng-container", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CvcAssertionsTableComponent_tr_79_ng_template_9_Template, 2, 0, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CvcAssertionsTableComponent_tr_79_p_12_Template, 3, 2, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CvcAssertionsTableComponent_tr_79_ng_template_13_Template, 2, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "ifEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "formatAmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const aid_r2 = ctx.$implicit;
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("assertion", aid_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("gene", aid_r2.gene);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("variant", aid_r2.variant);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", aid_r2.disease.name)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", aid_r2.drugs.length > 0)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", aid_r2.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 15, aid_r2.assertionType, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 18, aid_r2.assertionType));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 20, aid_r2.assertionDirection, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 23, aid_r2.assertionDirection));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 25, aid_r2.clinicalSignificance, "icon-name"))("nzTooltipTitle", aid_r2.clinicalSignificanceevidenceEnumDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](30, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](31, 31, aid_r2.ampLevel, "compact"), "--"), " ");
    }
}
let CvcAssertionsTableComponent = /*@__PURE__*/ (() => {
    class CvcAssertionsTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.initialPageSize = 25;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.tableView = true;
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["AssertionSortColumns"];
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({
                first: this.initialPageSize,
                variantId: this.variantId,
                evidenceId: this.evidenceId,
                organizationId: this.organizationId,
                userId: this.userId,
                phenotypeId: this.phenotypeId,
                diseaseId: this.diseaseId,
                drugId: this.drugId,
                cardView: !this.tableView
            });
            let observable = this.queryRef.valueChanges;
            this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.assertions$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'assertions', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.totalCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'assertions', 'totalCount'));
            this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'assertions', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        refresh() {
            var aid;
            if (this.aidInput)
                if (this.aidInput.toUpperCase().startsWith('AID')) {
                    aid = +(this.aidInput.toUpperCase().replace('AID', ''));
                }
                else {
                    aid = +this.aidInput;
                }
            else {
                aid = undefined;
            }
            this.queryRef.refetch({
                id: aid,
                diseaseName: this.diseaseNameInput,
                geneName: this.geneNameInput,
                variantName: this.variantNameInput,
                drugName: this.drugNameInput,
                summary: this.summaryInput,
                assertionType: this.assertionTypeInput ? this.assertionTypeInput : undefined,
                assertionDirection: this.assertionDirectionInput ? this.assertionDirectionInput : undefined,
                clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
                ampLevel: this.ampLevelInput ? this.ampLevelInput : undefined,
                cardView: !this.tableView
            });
        }
        onModelChanged() { this.debouncedQuery.next(); }
        onSortChanged(e) {
            this.queryRef.refetch({ sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e), cardView: !this.tableView });
        }
        ngOnDestroy() { this.debouncedQuery.unsubscribe(); }
        loadMore(cursor) {
            this.queryRef.fetchMore({ variables: {
                    after: cursor
                } });
        }
    }
    CvcAssertionsTableComponent.ɵfac = function CvcAssertionsTableComponent_Factory(t) { return new (t || CvcAssertionsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["AssertionsBrowseGQL"])); };
    CvcAssertionsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcAssertionsTableComponent, selectors: [["cvc-assertions-table"]], inputs: { evidenceId: "evidenceId", variantId: "variantId", organizationId: "organizationId", userId: "userId", phenotypeId: "phenotypeId", diseaseId: "diseaseId", drugId: "drugId" }, decls: 80, vars: 45, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["assertionsTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "5%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "10%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "15%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Assertion Type", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Assertion Direction", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Clinical Significance", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "AMP/ASCO/CAP Category", 3, "nzColumnKey", "nzSortFn"], ["placeholderText", "Search AID", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search Gene", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search Variant", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search Disease", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search Drugs", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search Summary", 3, "inputModel", "onInputChanged", "inputModelChange"], ["nzWidth", "5%", "nzAlign", "center"], ["nzAllowClear", "", "nzPlaceHolder", "Choose", 3, "ngModel", "ngModelChange"], ["nzValue", "PREDICTIVE", "nzLabel", "Predictive"], ["nzValue", "PROGNOSTIC", "nzLabel", "Prognostic"], ["nzValue", "DIAGNOSTIC", "nzLabel", "Diagnostic"], ["nzValue", "PREDISPOSING", "nzLabel", "Predisposing"], ["nzValue", "SUPPORTS", "nzLabel", "Supports"], ["nzValue", "DOES_NOT_SUPPORT", "nzLabel", "Does not Support"], ["nzValue", "NA", "nzLabel", "N/A"], ["nzLabel", "Predictive"], ["nzValue", "SENSITIVITYRESPONSE", "nzLabel", "Sensitivity/Response"], ["nzValue", "RESISTANCE", "nzLabel", "Resistance"], ["nzValue", "ADVERSE_RESPONSE", "nzLabel", "Adverse Response"], ["nzValue", "REDUCED SENSITIVITY", "nzLabel", "Reduced Sensitivity"], ["nzLabel", "Prognostic"], ["nzValue", "BETTER_OUTCOME", "nzLabel", "Better Outcome"], ["nzValue", "POOR_OUTCOME", "nzLabel", "Poor Outcome"], ["nzLabel", "Diagnostic"], ["nzValue", "POSITIVE", "nzLabel", "Positive"], ["nzValue", "NEGATIVE", "nzLabel", "Negative"], ["nzLabel", "Predisposing"], ["nzValue", "PATHOGENIC", "nzLabel", "Pathogenic"], ["nzValue", "LIKELY_PATHOGENIC", "nzLabel", "Likely Pathogenic"], ["nzValue", "BENIGN", "nzLabel", "Benign"], ["nzValue", "LIKELY_BENIGN", "nzLabel", "Likely Benign"], ["nzValue", "UNCERTAIN_SIGNIFICANCE", "nzLabel", "Uncertain Significance"], ["nzValue", "TIER_I_LEVEL_A", "nzLabel", "Tier I Level A"], ["nzValue", "TIER_I_LEVEL_B", "nzLabel", "Tier I Level B"], ["nzValue", "TIER_II_LEVEL_C", "nzLabel", "Tier II Level C"], ["nzValue", "TIER_II_LEVEL_D", "nzLabel", "Tier II Level D"], ["nzValue", "TIER_III", "nzLabel", "Tier III"], [4, "ngFor", "ngForOf"], [3, "assertion"], [3, "gene"], [3, "variant"], [4, "ngIf", "ngIfElse"], ["diseaseElse", ""], ["nz-typography", "", 4, "ngIf", "ngIfElse"], ["drugsElse", ""], ["nzAlign", "center"], ["nz-icon", "", "nzType", "align-left", "nz-tooltip", "", "nzTooltipPlacement", "top", 3, "nzTooltipTitle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipPlacement", "top", 3, "nzType", "nzTooltipTitle"], [3, "disease"], ["nz-typography", ""], [4, "ngIf"], [3, "drug"]], template: function CvcAssertionsTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcAssertionsTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " AID ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Gene ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Variant ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Disease ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Drugs ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Summary ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " AT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " AD ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " CS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " CAT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "cvc-clearable-input-filter", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_28_listener($event) { return ctx.aidInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "cvc-clearable-input-filter", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_30_listener($event) { return ctx.geneNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "cvc-clearable-input-filter", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_32_listener($event) { return ctx.variantNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "cvc-clearable-input-filter", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_34_listener($event) { return ctx.diseaseNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "cvc-clearable-input-filter", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_36_listener($event) { return ctx.drugNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "cvc-clearable-input-filter", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcAssertionsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_38_listener($event) { return ctx.summaryInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_40_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_40_listener($event) { return ctx.assertionTypeInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "nz-option", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "nz-option", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "nz-option", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "nz-option", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_46_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_46_listener($event) { return ctx.assertionDirectionInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "nz-option", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "nz-option", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "nz-option", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_51_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_51_listener($event) { return ctx.clinicalSignificanceInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "nz-option-group", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "nz-option", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "nz-option", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "nz-option", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "nz-option", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "nz-option", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "nz-option-group", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "nz-option", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "nz-option", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "nz-option-group", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "nz-option", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "nz-option", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "nz-option-group", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "nz-option", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "nz-option", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "nz-option", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "nz-option", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "nz-option", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_72_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcAssertionsTableComponent_Template_nz_select_ngModelChange_72_listener($event) { return ctx.ampLevelInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "nz-option", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "nz-option", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "nz-option", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "nz-option", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "nz-option", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, CvcAssertionsTableComponent_tr_79_Template, 32, 34, "tr", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 41, ctx.assertions$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 43, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Id)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.GeneName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.VariantName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.DiseaseName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.DrugName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Summary)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.AssertionType)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.AssertionDirection)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.ClinicalSignificance)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.AmpLevel)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.aidInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.geneNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.variantNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.diseaseNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.drugNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.summaryInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assertionTypeInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assertionDirectionInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.clinicalSignificanceInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.ampLevelInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzCellAlignDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_7__["CvcClearableInputFilterComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionGroupComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcAssertionTagComponent"], _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_12__["CvcGeneTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_13__["CvcVariantTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_16__["CvcDiseaseTagComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__["NzTypographyComponent"], _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_18__["CvcDrugTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_19__["PushPipe"], _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_20__["EvidenceEnumDisplayPipe"], _core_pipes_if_empty_pipe__WEBPACK_IMPORTED_MODULE_21__["IfEmptyPipe"], _core_pipes_amp_format_pipe__WEBPACK_IMPORTED_MODULE_22__["AmpFormatPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcAssertionsTableComponent;
})();


/***/ })

}]);