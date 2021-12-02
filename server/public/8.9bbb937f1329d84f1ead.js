(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "/CHw":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shared/clearable-input-filter/clearable-input-filter.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CvcClearableInputFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcClearableInputFilterModule", function() { return CvcClearableInputFilterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CvcClearableInputFilterModule = /*@__PURE__*/ (() => {
    class CvcClearableInputFilterModule {
    }
    CvcClearableInputFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CvcClearableInputFilterModule });
    CvcClearableInputFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CvcClearableInputFilterModule_Factory(t) { return new (t || CvcClearableInputFilterModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputModule"],
            ]] });
    return CvcClearableInputFilterModule;
})();


/***/ }),

/***/ "4dRX":
/*!********************************************************************************!*\
  !*** ./src/app/components/evidence/evidence-table/evidence-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: CvcEvidenceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEvidenceTableComponent", function() { return CvcEvidenceTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../evidence-tag/evidence-tag.component */ "PH4A");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../diseases/cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/tag-list/tag-list.component */ "Eb1f");
/* harmony import */ var _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../drugs/cvc-drug-tag/cvc-drug-tag.component */ "an+6");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../core/pipes/evidence-enum-display-type */ "N9dV");

























function CvcEvidenceTableComponent_th_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Gene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx_r1.sortColumns.GeneSymbol)("nzSortFn", true);
    }
}
function CvcEvidenceTableComponent_th_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Variant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx_r2.sortColumns.VariantName)("nzSortFn", true);
    }
}
function CvcEvidenceTableComponent_th_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "cvc-clearable-input-filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_th_31_Template_cvc_clearable_input_filter_inputModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.geneSymbolInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx_r3.geneSymbolInput)("onInputChanged", ctx_r3.textInputCallback);
    }
}
function CvcEvidenceTableComponent_th_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "cvc-clearable-input-filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_th_32_Template_cvc_clearable_input_filter_inputModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.variantNameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx_r4.variantNameInput)("onInputChanged", ctx_r4.textInputCallback);
    }
}
function CvcEvidenceTableComponent_tr_106_td_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-gene-tag", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("gene", eid_r11.gene);
    }
}
function CvcEvidenceTableComponent_tr_106_td_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-variant-tag", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("variant", eid_r11.variant);
    }
}
function CvcEvidenceTableComponent_tr_106_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-disease-tag", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disease", eid_r11.disease);
    }
}
function CvcEvidenceTableComponent_tr_106_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CvcEvidenceTableComponent_tr_106_p_10_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-drug-tag", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const drug_r25 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("drug", drug_r25);
    }
}
function CvcEvidenceTableComponent_tr_106_p_10_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, eid_r11.drugInteractionType), ") ");
    }
}
function CvcEvidenceTableComponent_tr_106_p_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "cvc-tag-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CvcEvidenceTableComponent_tr_106_p_10_span_2_Template, 2, 1, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CvcEvidenceTableComponent_tr_106_p_10_span_3_Template, 3, 3, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", eid_r11.drugs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", eid_r11.drugs.length > 1);
    }
}
function CvcEvidenceTableComponent_tr_106_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CvcEvidenceTableComponent_tr_106_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-evidence-tag", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CvcEvidenceTableComponent_tr_106_td_3_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CvcEvidenceTableComponent_tr_106_td_4_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CvcEvidenceTableComponent_tr_106_ng_container_6_Template, 2, 1, "ng-container", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CvcEvidenceTableComponent_tr_106_ng_template_7_Template, 2, 0, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CvcEvidenceTableComponent_tr_106_p_10_Template, 4, 2, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CvcEvidenceTableComponent_tr_106_ng_template_11_Template, 2, 0, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const eid_r11 = ctx.$implicit;
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("evidence", eid_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.displayGeneAndVariant);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.displayGeneAndVariant);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", eid_r11.disease)("ngIfElse", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", eid_r11.drugs.length > 0)("ngIfElse", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", eid_r11.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", eid_r11.evidenceLevel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 18, eid_r11.evidenceType, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 21, eid_r11.evidenceType));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 23, eid_r11.evidenceDirection, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 26, eid_r11.evidenceDirection));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 28, eid_r11.clinicalSignificance, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 31, eid_r11.clinicalSignificance));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](31, 33, eid_r11.variantOrigin, "icon-name"))("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 36, eid_r11.variantOrigin));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", eid_r11.evidenceRating, " ");
    }
}
function CvcEvidenceTableComponent_ng_container_107_tr_1_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvcEvidenceTableComponent_ng_container_107_tr_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const pageInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngrxLet; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.loadMore(pageInfo_r28.endCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CvcEvidenceTableComponent_ng_container_107_tr_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CvcEvidenceTableComponent_ng_container_107_tr_1_button_2_Template, 2, 0, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pageInfo_r28.hasNextPage);
    }
}
function CvcEvidenceTableComponent_ng_container_107_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CvcEvidenceTableComponent_ng_container_107_tr_1_Template, 3, 1, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r28 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pageInfo_r28.hasNextPage);
    }
}
let CvcEvidenceTableComponent = /*@__PURE__*/ (() => {
    class CvcEvidenceTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.displayGeneAndVariant = true;
            this.initialPageSize = 25;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.tableView = true;
            this.fetchMorePageSize = 25;
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EvidenceSortColumns"];
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({
                first: this.initialPageSize,
                variantId: this.variantId,
                assertionId: this.assertionId,
                organizationId: this.organizationId,
                userId: this.userId,
                phenotypeId: this.phenotypeId,
                diseaseId: this.diseaseId,
                drugId: this.drugId,
                sourceId: this.sourceId,
                clinicalTrialId: this.clinicalTrialId,
                cardView: !this.tableView
            });
            let observable = this.queryRef.valueChanges;
            this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.evidence$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'evidenceItems', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.totalCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'evidenceItems', 'totalCount'));
            this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'evidenceItems', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        loadMore(afterCursor) {
            this.queryRef.fetchMore({
                variables: {
                    first: this.fetchMorePageSize,
                    after: afterCursor
                },
            });
        }
        refresh() {
            var eid;
            if (this.eidInput)
                if (this.eidInput.toUpperCase().startsWith('EID')) {
                    eid = +(this.eidInput.toUpperCase().replace('EID', ''));
                }
                else {
                    eid = +this.eidInput;
                }
            else {
                eid = undefined;
            }
            this.queryRef.refetch({
                id: eid,
                diseaseName: this.diseaseNameInput,
                drugName: this.drugNameInput,
                description: this.descriptionInput,
                evidenceLevel: this.evidenceLevelInput ? this.evidenceLevelInput : undefined,
                evidenceType: this.evidenceTypeInput ? this.evidenceTypeInput : undefined,
                evidenceDirection: this.evidenceDirectionInput ? this.evidenceDirectionInput : undefined,
                clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
                variantOrigin: this.variantOriginInput ? this.variantOriginInput : undefined,
                rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined,
                geneSymbol: this.geneSymbolInput ? this.geneSymbolInput : undefined,
                variantName: this.variantNameInput ? this.variantNameInput : undefined,
                cardView: !this.tableView
            });
        }
        onModelChanged() { this.debouncedQuery.next(); }
        onSortChanged(e) {
            this.queryRef.refetch({ sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e), cardView: !this.tableView });
        }
        ngOnDestroy() { this.debouncedQuery.unsubscribe(); }
    }
    CvcEvidenceTableComponent.ɵfac = function CvcEvidenceTableComponent_Factory(t) { return new (t || CvcEvidenceTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EvidenceBrowseGQL"])); };
    CvcEvidenceTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcEvidenceTableComponent, selectors: [["cvc-evidence-table"]], inputs: { variantId: "variantId", assertionId: "assertionId", organizationId: "organizationId", userId: "userId", phenotypeId: "phenotypeId", diseaseId: "diseaseId", drugId: "drugId", sourceId: "sourceId", clinicalTrialId: "clinicalTrialId", displayGeneAndVariant: "displayGeneAndVariant" }, decls: 108, vars: 60, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["evidenceTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "5%", "nz-tooltip", "", "nzTooltipTitle", "Evidence ID", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "10%", "nz-tooltip", "", "nzTooltipTitle", "Entrez Gene Symbol", 3, "nzColumnKey", "nzSortFn", 4, "ngIf"], ["nzWidth", "10%", "nz-tooltip", "", "nzTooltipTitle", "Variant Name", 3, "nzColumnKey", "nzSortFn", 4, "ngIf"], ["nzWidth", "20%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Evidence Level", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Evidence Type", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Evidence Direction", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Clinical Significance", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Variant Origin", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "5%", "nzAlign", "center", "nz-tooltip", "", "nzTooltipTitle", "Rating", 3, "nzColumnKey", "nzSortFn"], [3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngIf"], ["nzAlign", "center"], ["nzAllowClear", "", "nzPlaceHolder", "All", 3, "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], ["nzValue", "A", "nzLabel", "A"], ["nzValue", "B", "nzLabel", "B"], ["nzValue", "C", "nzLabel", "C"], ["nzValue", "D", "nzLabel", "D"], ["nzValue", "E", "nzLabel", "E"], ["nzValue", "PREDICTIVE", "nzLabel", "Predictive"], ["nzValue", "PROGNOSTIC", "nzLabel", "Prognostic"], ["nzValue", "DIAGNOSTIC", "nzLabel", "Diagnostic"], ["nzValue", "PREDISPOSING", "nzLabel", "Predisposing"], ["nzValue", "ONCOGENIC", "nzLabel", "Oncogenic"], ["nzValue", "FUNCTIONAL", "nzLabel", "Functional"], ["nzValue", "SUPPORTS", "nzLabel", "Supports"], ["nzValue", "DOES_NOT_SUPPORT", "nzLabel", "Does not Support"], ["nzValue", "NA", "nzLabel", "N/A"], ["nzWidth", "5%", "nzAlign", "center"], ["nzLabel", "Predictive"], ["nzValue", "SENSITIVITYRESPONSE", "nzLabel", "Sensitivity/Response"], ["nzValue", "RESISTANCE", "nzLabel", "Resistance"], ["nzValue", "ADVERSE_RESPONSE", "nzLabel", "Adverse Response"], ["nzValue", "REDUCED SENSITIVITY", "nzLabel", "Reduced Sensitivity"], ["nzLabel", "Prognostic"], ["nzValue", "BETTER_OUTCOME", "nzLabel", "Better Outcome"], ["nzValue", "POOR_OUTCOME", "nzLabel", "Poor Outcome"], ["nzLabel", "Diagnostic"], ["nzValue", "POSITIVE", "nzLabel", "Positive"], ["nzValue", "NEGATIVE", "nzLabel", "Negative"], ["nzLabel", "Predisposing"], ["nzLabel", "Oncogenic"], ["nzLabel", "Functional"], ["nzValue", "GAIN_OF_FUNCTION", "nzLabel", "Gain of Function"], ["nzValue", "LOSS_OF_FUNCTION", "nzLabel", "Loss of Function"], ["nzValue", "UNALTERED_FUNCTION", "nzLabel", "Unaltered Function"], ["nzValue", "NEOMORPHIC", "nzLabel", "Neomorphic"], ["nzValue", "DOMINANT_NEGATIVE", "nzLabel", "Dominant Negative"], ["nzValue", "UNKNOWN", "nzLabel", "Unknown"], ["nzValue", "SOMATIC", "nzLabel", "Somatic"], ["nzValue", "RARE_GERMLINE", "nzLabel", "Rare Germline"], ["nzValue", "COMMON_GERMLINE", "nzLabel", "Common Germline"], ["nzValue", "UNKNOWN", "nzLabel", "Unkown"], ["nzValue", "GERMLINE_OR_SOMATIC", "nzLabel", "Germline or Somatic"], ["nzLabel", "1", 3, "nzValue"], ["nzLabel", "2", 3, "nzValue"], ["nzLabel", "3", 3, "nzValue"], ["nzLabel", "4", 3, "nzValue"], ["nzLabel", "5", 3, "nzValue"], [4, "ngFor", "ngForOf"], [4, "ngrxLet"], ["nzWidth", "10%", "nz-tooltip", "", "nzTooltipTitle", "Entrez Gene Symbol", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "10%", "nz-tooltip", "", "nzTooltipTitle", "Variant Name", 3, "nzColumnKey", "nzSortFn"], [3, "evidence"], [4, "ngIf", "ngIfElse"], ["diseaseElse", ""], ["nz-typography", "", 4, "ngIf", "ngIfElse"], ["drugsElse", ""], ["nz-icon", "", "nzType", "align-left", "nz-tooltip", "", "nzTooltipPlacement", "top", 3, "nzTooltipTitle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipPlacement", "top", 3, "nzType", "nzTooltipTitle"], ["nz-icon", "", "nzType", "star", "nzTheme", "fill", "nz-tooltip", "", "nzTooltipPlacement", "top"], [3, "gene"], [3, "variant"], [3, "disease"], ["nz-typography", ""], [3, "drug"], ["colspan", "20"], ["nz-button", "", "nzBlock", "", 3, "click", 4, "ngIf"], ["nz-button", "", "nzBlock", "", 3, "click"]], template: function CvcEvidenceTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcEvidenceTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " EID ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CvcEvidenceTableComponent_th_8_Template, 2, 2, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CvcEvidenceTableComponent_th_9_Template, 2, 2, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Diseases ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Drugs ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Description ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " EL ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " ET ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " ED ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " CS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " VO ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " R ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "cvc-clearable-input-filter", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_Template_cvc_clearable_input_filter_inputModelChange_30_listener($event) { return ctx.eidInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CvcEvidenceTableComponent_th_31_Template, 2, 2, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CvcEvidenceTableComponent_th_32_Template, 2, 2, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "cvc-clearable-input-filter", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_Template_cvc_clearable_input_filter_inputModelChange_34_listener($event) { return ctx.diseaseNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "cvc-clearable-input-filter", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_Template_cvc_clearable_input_filter_inputModelChange_36_listener($event) { return ctx.drugNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "cvc-clearable-input-filter", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcEvidenceTableComponent_Template_cvc_clearable_input_filter_inputModelChange_38_listener($event) { return ctx.descriptionInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_40_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_40_listener($event) { return ctx.evidenceLevelInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "nz-option", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "nz-option", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "nz-option", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "nz-option", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "nz-option", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_47_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_47_listener($event) { return ctx.evidenceTypeInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "nz-option", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "nz-option", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "nz-option", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "nz-option", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "nz-option", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "nz-option", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_55_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_55_listener($event) { return ctx.evidenceDirectionInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "nz-option", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "nz-option", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_60_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_60_listener($event) { return ctx.clinicalSignificanceInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "nz-option-group", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "nz-option", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "nz-option", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "nz-option", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "nz-option", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "nz-option-group", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "nz-option", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "nz-option", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "nz-option-group", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "nz-option", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "nz-option", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "nz-option-group", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "nz-option-group", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "nz-option-group", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "nz-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, ", ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "nz-option", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, ", ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "nz-option", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, ", ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "nz-option", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, ", ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "nz-option", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, ", ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "nz-option", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "th", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_91_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_91_listener($event) { return ctx.variantOriginInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "nz-option", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "nz-option", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "nz-option", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "nz-option", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "nz-option", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "nz-option", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "th", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "nz-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_99_listener() { return ctx.onModelChanged(); })("ngModelChange", function CvcEvidenceTableComponent_Template_nz_select_ngModelChange_99_listener($event) { return ctx.evidenceRatingInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "nz-option", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "nz-option", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "nz-option", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "nz-option", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "nz-option", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, CvcEvidenceTableComponent_tr_106_Template, 36, 38, "tr", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, CvcEvidenceTableComponent_ng_container_107_Template, 2, 1, "ng-container", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 56, ctx.evidence$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 58, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Id)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayGeneAndVariant);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayGeneAndVariant);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.DiseaseName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.DrugName)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Description)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceLevel)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceType)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceDirection)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.ClinicalSignificance)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.VariantOrigin)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceRating)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.eidInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayGeneAndVariant);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayGeneAndVariant);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.diseaseNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.drugNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.descriptionInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("ngModel", ctx.evidenceLevelInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("ngModel", ctx.evidenceTypeInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.evidenceDirectionInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("ngModel", ctx.clinicalSignificanceInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("ngModel", ctx.variantOriginInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMatchSelectWidth", false)("ngModel", ctx.evidenceRatingInput);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.pageInfo$);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzCellAlignDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_8__["CvcClearableInputFilterComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionGroupComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ngrx_component__WEBPACK_IMPORTED_MODULE_11__["LetDirective"], _evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_12__["CvcEvidenceTagComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_15__["CvcGeneTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_16__["CvcVariantTagComponent"], _diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_17__["CvcDiseaseTagComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_18__["NzTypographyComponent"], _shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_19__["CvcTagListComponent"], _drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_20__["CvcDrugTagComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__["NzWaveDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_23__["EvidenceEnumDisplayPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcEvidenceTableComponent;
})();


/***/ }),

/***/ "iBKJ":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/shared/clearable-input-filter/clearable-input-filter.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CvcClearableInputFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcClearableInputFilterComponent", function() { return CvcClearableInputFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CvcClearableInputFilterComponent_ng_template_2_i_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcClearableInputFilterComponent_ng_template_2_i_0_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r3.inputVal = undefined; return ctx_r3.onModelUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcClearableInputFilterComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcClearableInputFilterComponent_ng_template_2_i_0_Template, 1, 0, "i", 3);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.inputVal);
    }
}
let CvcClearableInputFilterComponent = /*@__PURE__*/ (() => {
    class CvcClearableInputFilterComponent {
        constructor() {
            this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        onModelUpdated() {
            if (this.inputVal) {
                this.inputModelChange.emit(this.inputVal);
            }
            else {
                this.inputModelChange.emit(undefined);
            }
            if (this.onInputChanged) {
                this.onInputChanged();
            }
        }
    }
    CvcClearableInputFilterComponent.ɵfac = function CvcClearableInputFilterComponent_Factory(t) { return new (t || CvcClearableInputFilterComponent)(); };
    CvcClearableInputFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcClearableInputFilterComponent, selectors: [["cvc-clearable-input-filter"]], inputs: { placeholderText: "placeholderText", onInputChanged: "onInputChanged", inputModel: "inputModel" }, outputs: { inputModelChange: "inputModelChange" }, decls: 4, vars: 3, consts: [[3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "ngModel", "ngModelChange"], ["clearTmpl", ""], ["nz-icon", "", "class", "ant-input-clear-icon", "nzTheme", "fill", "nzType", "close-circle", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzTheme", "fill", "nzType", "close-circle", 1, "ant-input-clear-icon", 3, "click"]], template: function CvcClearableInputFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-group", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvcClearableInputFilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.inputVal = $event; })("ngModelChange", function CvcClearableInputFilterComponent_Template_input_ngModelChange_1_listener() { return ctx.onModelUpdated(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcClearableInputFilterComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderText ? ctx.placeholderText : "")("ngModel", ctx.inputVal);
            }
        }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcClearableInputFilterComponent;
})();


/***/ }),

/***/ "kfgc":
/*!*****************************************************************************!*\
  !*** ./src/app/components/evidence/evidence-table/evidence-table.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CvcEvidenceTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEvidenceTableModule", function() { return CvcEvidenceTableModule; });
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
/* harmony import */ var _evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/components/shared/tag-list/tag-list.module */ "iNrY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















let CvcEvidenceTableModule = /*@__PURE__*/ (() => {
    class CvcEvidenceTableModule {
    }
    CvcEvidenceTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: CvcEvidenceTableModule });
    CvcEvidenceTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function CvcEvidenceTableModule_Factory(t) { return new (t || CvcEvidenceTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__["NzButtonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__["NzTypographyModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__["CvcPipesModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_9__["CvcGeneTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_11__["CvcVariantTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_12__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcDrugTagModule"],
                _evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcEvidenceTagModule"],
                _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_19__["CvcTagListModule"],
                _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_8__["CvcTagOverflowModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_16__["CvcClearableInputFilterModule"],
            ]] });
    return CvcEvidenceTableModule;
})();


/***/ })

}]);