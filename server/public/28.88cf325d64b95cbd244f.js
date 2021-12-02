(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "/Gp8":
/*!*******************************************************************!*\
  !*** ./src/app/forms/drugs/types/drug-input/drug-input.module.ts ***!
  \*******************************************************************/
/*! exports provided: DrugInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugInputModule", function() { return DrugInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _drug_input_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drug-input.type */ "K1W/");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const formlyConfig = {
    types: [_drug_input_type__WEBPACK_IMPORTED_MODULE_2__["DrugInputType"]],
};
let DrugInputModule = /*@__PURE__*/ (() => {
    class DrugInputModule {
    }
    DrugInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DrugInputModule });
    DrugInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function DrugInputModule_Factory(t) { return new (t || DrugInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ReactiveComponentModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__["NzTypographyModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcDrugTagModule"],
            ]] });
    return DrugInputModule;
})();


/***/ }),

/***/ "3cf3":
/*!********************************************************************************!*\
  !*** ./src/app/forms/phenotypes/types/phenotype-input/phenotype-input.type.ts ***!
  \********************************************************************************/
/*! exports provided: PhenotypeInputComponent, PhenotypeInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeInputComponent", function() { return PhenotypeInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeInputType", function() { return PhenotypeInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _components_phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/phenotypes/phenotype-tag/phenotype-tag.component */ "p+8w");











function PhenotypeInputComponent_ng_container_0_ng_container_2_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("nzLabel", "", opt_r8.name, " (", opt_r8.hpoId, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", opt_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", opt_r8.name, " (", opt_r8.hpoId, ") ");
    }
}
function PhenotypeInputComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PhenotypeInputComponent_ng_container_0_ng_container_2_nz_option_1_Template, 2, 5, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const phenotypes_r6 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", phenotypes_r6);
    }
}
function PhenotypeInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " No phenotype found in CIViC that matches the string provided. ");
    }
}
function PhenotypeInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function PhenotypeInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PhenotypeInputComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PhenotypeInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.phenotypes$);
    }
}
function PhenotypeInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cvc-phenotype-tag", 7);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("phenotype", ctx_r2.formControl.value);
    }
}
let PhenotypeInputComponent = /*@__PURE__*/ (() => {
    class PhenotypeInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(phenotypeTypeaheadQuery) {
            super();
            this.phenotypeTypeaheadQuery = phenotypeTypeaheadQuery;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Phenotypes',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
        }
        ngOnInit() {
            this.queryRef = this.phenotypeTypeaheadQuery.watch({ name: '' });
            this.phenotypes$ = this.queryRef.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data', 'phenotypeTypeahead'));
        }
        ngAfterViewInit() {
            this.to.onSearch = (value) => {
                var _a;
                this.to.fieldValue = value;
                this.to.fieldLength = value.length;
                if (value.length < this.to.minLengthSearch ||
                    value.length > this.to.maxLength) {
                    return;
                }
                (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch({ name: value });
            };
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    PhenotypeInputComponent.ɵfac = function PhenotypeInputComponent_Factory(t) { return new (t || PhenotypeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["PhenotypeTypeaheadGQL"])); };
    PhenotypeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PhenotypeInputComponent, selectors: [["cvc-phenotype-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["drugListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], [4, "ngrxLet"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [3, "phenotype"]], template: function PhenotypeInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PhenotypeInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PhenotypeInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], _components_phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcPhenotypeTagComponent"]], styles: [""] });
    return PhenotypeInputComponent;
})();
const PhenotypeInputType = {
    name: 'phenotype-input',
    component: PhenotypeInputComponent,
};


/***/ }),

/***/ "A90m":
/*!************************************************************************!*\
  !*** ./src/app/forms/evidence/types/rating-input/rating-input.type.ts ***!
  \************************************************************************/
/*! exports provided: RatingInputComponent, RatingInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function() { return RatingInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputType", function() { return RatingInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/rate */ "NDed");





let RatingInputComponent = /*@__PURE__*/ (() => {
    class RatingInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor() {
            super();
            this.defaultOptions = {};
        }
        updateField(e) {
            this.field.formControl.setValue(e);
        }
    }
    RatingInputComponent.ɵfac = function RatingInputComponent_Factory(t) { return new (t || RatingInputComponent)(); };
    RatingInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RatingInputComponent, selectors: [["cvc-rating-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [["type", "hidden", 3, "formControl", "formlyAttributes"], [3, "ngModel", "formlyAttributes", "ngModelChange"]], template: function RatingInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-rate", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RatingInputComponent_Template_nz_rate_ngModelChange_1_listener($event) { return ctx.updateField($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formControl)("formlyAttributes", ctx.field);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.formControl.value)("formlyAttributes", ctx.field);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_3__["NzRateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [""] });
    return RatingInputComponent;
})();
const RatingInputType = {
    name: 'rating-input',
    component: RatingInputComponent,
    wrappers: ['form-field'],
};


/***/ }),

/***/ "Jt89":
/*!****************************************************************************!*\
  !*** ./src/app/forms/diseases/types/disease-input/disease-input.module.ts ***!
  \****************************************************************************/
/*! exports provided: DiseaseInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseInputModule", function() { return DiseaseInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _disease_input_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disease-input.type */ "ZEbg");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const formlyConfig = {
    types: [_disease_input_type__WEBPACK_IMPORTED_MODULE_2__["DiseaseInputType"]],
};
let DiseaseInputModule = /*@__PURE__*/ (() => {
    class DiseaseInputModule {
    }
    DiseaseInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DiseaseInputModule });
    DiseaseInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function DiseaseInputModule_Factory(t) { return new (t || DiseaseInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ReactiveComponentModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcDiseaseTagModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__["NzTypographyModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceModule"]
            ]] });
    return DiseaseInputModule;
})();


/***/ }),

/***/ "K1W/":
/*!*****************************************************************!*\
  !*** ./src/app/forms/drugs/types/drug-input/drug-input.type.ts ***!
  \*****************************************************************/
/*! exports provided: DrugInputComponent, DrugInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugInputComponent", function() { return DrugInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugInputType", function() { return DrugInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/drugs/cvc-drug-tag/cvc-drug-tag.component */ "an+6");













function DrugInputComponent_ng_container_0_ng_container_2_nz_option_1_nz_space_item_4_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r8.drug.drugAliases.join(", "));
    }
}
function DrugInputComponent_ng_container_0_ng_container_2_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DrugInputComponent_ng_container_0_ng_container_2_nz_option_1_nz_space_item_4_Template, 3, 1, "nz-space-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", opt_r8.tooltip)("nzValue", opt_r8.drug);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", opt_r8.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", opt_r8.drug.drugAliases.length > 0);
    }
}
function DrugInputComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DrugInputComponent_ng_container_0_ng_container_2_nz_option_1_Template, 5, 4, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const drugs_r6 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", drugs_r6);
    }
}
function DrugInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " No drug found in CIViC that matches the string provided. ");
    }
}
function DrugInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function DrugInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DrugInputComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DrugInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.drugs$);
    }
}
function DrugInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cvc-drug-tag", 9);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("drug", ctx_r2.formControl.value);
    }
}
let DrugInputComponent = /*@__PURE__*/ (() => {
    class DrugInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(drugTypeaheadQuery) {
            super();
            this.drugTypeaheadQuery = drugTypeaheadQuery;
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Drugs',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        ngOnInit() {
            this.queryRef = this.drugTypeaheadQuery.watch({ name: "" });
            this.drugs$ = this.queryRef
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'drugTypeahead'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((drugs) => {
                return drugs.map((d) => {
                    let ncitId = d.ncitId ? `${d.ncitId}` : "no NCIt ID";
                    let aliases = d.drugAliases.length > 0 ? `Aliases: ${d.drugAliases.join(', ')}` : "";
                    return {
                        value: d.id,
                        tooltip: `${d.name} (${ncitId}) ${aliases}`,
                        label: `${d.name} (${ncitId})`,
                        drug: d,
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
                this.queryRef.refetch({ name: value });
            };
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    DrugInputComponent.ɵfac = function DrugInputComponent_Factory(t) { return new (t || DrugInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["DrugTypeaheadGQL"])); };
    DrugInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DrugInputComponent, selectors: [["cvc-drug-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["drugListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], [4, "ngrxLet"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-typography", "", "nzType", "secondary"], [3, "drug"]], template: function DrugInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DrugInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DrugInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__["NzTypographyComponent"], _components_drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcDrugTagComponent"]], styles: [""] });
    return DrugInputComponent;
})();
const DrugInputType = {
    name: 'drug-input',
    component: DrugInputComponent,
};


/***/ }),

/***/ "NDed":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-rate.js ***!
  \*******************************************************************/
/*! exports provided: NzRateComponent, NzRateItemComponent, NzRateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRateComponent", function() { return NzRateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRateItemComponent", function() { return NzRateItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRateModule", function() { return NzRateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onItemHover(i_r3, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onItemClick(i_r3, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r3 = ctx.index;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.starStyleArray[i_r3] || "")("nzTooltipTitle", ctx_r1.nzTooltips[i_r3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("allowHalf", ctx_r1.nzAllowHalf)("character", ctx_r1.nzCharacter);
    }
}
const _c1 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 4);
    }
}
const NZ_CONFIG_MODULE_NAME = 'rate';
let NzRateComponent = /*@__PURE__*/ (() => {
    class NzRateComponent {
        constructor(nzConfigService, renderer, cdr, directionality) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzAllowClear = true;
            this.nzAllowHalf = false;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.nzCount = 5;
            this.nzTooltips = [];
            this.nzOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.nzOnFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.nzOnHoverChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.nzOnKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.classMap = {};
            this.starArray = [];
            this.starStyleArray = [];
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this.hasHalf = false;
            this.hoverValue = 0;
            this.isFocused = false;
            this._value = 0;
            this.onChange = () => null;
            this.onTouched = () => null;
        }
        get nzValue() {
            return this._value;
        }
        set nzValue(input) {
            if (this._value === input) {
                return;
            }
            this._value = input;
            this.hasHalf = !Number.isInteger(input);
            this.hoverValue = Math.ceil(input);
        }
        ngOnChanges(changes) {
            const { nzAutoFocus, nzCount, nzValue } = changes;
            if (nzAutoFocus && !nzAutoFocus.isFirstChange()) {
                const el = this.ulElement.nativeElement;
                if (this.nzAutoFocus && !this.nzDisabled) {
                    this.renderer.setAttribute(el, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(el, 'autofocus');
                }
            }
            if (nzCount) {
                this.updateStarArray();
            }
            if (nzValue) {
                this.updateStarStyle();
            }
        }
        ngOnInit() {
            var _a;
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        onItemClick(index, isHalf) {
            if (this.nzDisabled) {
                return;
            }
            this.hoverValue = index + 1;
            const actualValue = isHalf ? index + 0.5 : index + 1;
            if (this.nzValue === actualValue) {
                if (this.nzAllowClear) {
                    this.nzValue = 0;
                    this.onChange(this.nzValue);
                }
            }
            else {
                this.nzValue = actualValue;
                this.onChange(this.nzValue);
            }
            this.updateStarStyle();
        }
        onItemHover(index, isHalf) {
            if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
                return;
            }
            this.hoverValue = index + 1;
            this.hasHalf = isHalf;
            this.nzOnHoverChange.emit(this.hoverValue);
            this.updateStarStyle();
        }
        onRateLeave() {
            this.hasHalf = !Number.isInteger(this.nzValue);
            this.hoverValue = Math.ceil(this.nzValue);
            this.updateStarStyle();
        }
        onFocus(e) {
            this.isFocused = true;
            this.nzOnFocus.emit(e);
        }
        onBlur(e) {
            this.isFocused = false;
            this.nzOnBlur.emit(e);
        }
        focus() {
            this.ulElement.nativeElement.focus();
        }
        blur() {
            this.ulElement.nativeElement.blur();
        }
        onKeyDown(e) {
            const oldVal = this.nzValue;
            if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.nzValue < this.nzCount) {
                this.nzValue += this.nzAllowHalf ? 0.5 : 1;
            }
            else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.nzValue > 0) {
                this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
            }
            if (oldVal !== this.nzValue) {
                this.onChange(this.nzValue);
                this.nzOnKeyDown.emit(e);
                this.updateStarStyle();
                this.cdr.markForCheck();
            }
        }
        updateStarArray() {
            this.starArray = Array(this.nzCount)
                .fill(0)
                .map((_, i) => i);
            this.updateStarStyle();
        }
        updateStarStyle() {
            this.starStyleArray = this.starArray.map(i => {
                const prefix = 'ant-rate-star';
                const value = i + 1;
                return {
                    [`${prefix}-full`]: value < this.hoverValue || (!this.hasHalf && value === this.hoverValue),
                    [`${prefix}-half`]: this.hasHalf && value === this.hoverValue,
                    [`${prefix}-active`]: this.hasHalf && value === this.hoverValue,
                    [`${prefix}-zero`]: value > this.hoverValue,
                    [`${prefix}-focused`]: this.hasHalf && value === this.hoverValue && this.isFocused
                };
            });
        }
        writeValue(value) {
            this.nzValue = value || 0;
            this.updateStarArray();
            this.cdr.markForCheck();
        }
        setDisabledState(isDisabled) {
            this.nzDisabled = isDisabled;
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }
    NzRateComponent.ɵfac = function NzRateComponent_Factory(t) { return new (t || NzRateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzRateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzRateComponent, selectors: [["nz-rate"]], viewQuery: function NzRateComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ulElement = _t.first);
            }
        }, inputs: { nzAllowClear: "nzAllowClear", nzAllowHalf: "nzAllowHalf", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzCount: "nzCount", nzTooltips: "nzTooltips", nzCharacter: "nzCharacter" }, outputs: { nzOnBlur: "nzOnBlur", nzOnFocus: "nzOnFocus", nzOnHoverChange: "nzOnHoverChange", nzOnKeyDown: "nzOnKeyDown" }, exportAs: ["nzRate"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzRateComponent),
                    multi: true
                }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTooltipTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]], template: function NzRateComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NzRateComponent_Template_ul_blur_0_listener($event) { return ctx.onBlur($event); })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) { return ctx.onFocus($event); })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) { ctx.onKeyDown($event); return $event.preventDefault(); })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) { ctx.onRateLeave(); return $event.stopPropagation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzRateComponent_li_2_Template, 2, 4, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-rate-disabled", ctx.nzDisabled)("ant-rate-rtl", ctx.dir === "rtl");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? -1 : 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.starArray);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzTooltipDirective"], NzRateItemComponent]; }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowHalf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzRateComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NzRateComponent.prototype, "nzCount", void 0);
    return NzRateComponent;
})();
let NzRateItemComponent = /*@__PURE__*/ (() => {
    class NzRateItemComponent {
        constructor() {
            this.allowHalf = false;
            this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }
        hoverRate(isHalf) {
            this.itemHover.next(isHalf && this.allowHalf);
        }
        clickRate(isHalf) {
            this.itemClick.next(isHalf && this.allowHalf);
        }
    }
    NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) { return new (t || NzRateItemComponent)(); };
    NzRateItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzRateItemComponent, selectors: [["", "nz-rate-item", ""]], inputs: { allowHalf: "allowHalf", character: "character" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, exportAs: ["nzRateItem"], attrs: _c1, decls: 6, vars: 2, consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]], template: function NzRateItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) { ctx.hoverRate(false); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_0_listener() { return ctx.clickRate(false); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) { ctx.hoverRate(true); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_2_listener() { return ctx.clickRate(true); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.character || _r2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.character || _r2);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzRateItemComponent.prototype, "allowHalf", void 0);
    return NzRateItemComponent;
})();
let NzRateModule = /*@__PURE__*/ (() => {
    class NzRateModule {
    }
    NzRateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzRateModule });
    NzRateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"]]] });
    return NzRateModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzRateModule, { declarations: function () { return [NzRateComponent, NzRateItemComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"]]; }, exports: function () { return [NzRateComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-rate.js.map


/***/ }),

/***/ "ZEbg":
/*!**************************************************************************!*\
  !*** ./src/app/forms/diseases/types/disease-input/disease-input.type.ts ***!
  \**************************************************************************/
/*! exports provided: DiseaseInputComponent, DiseaseInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseInputComponent", function() { return DiseaseInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseInputType", function() { return DiseaseInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/diseases/cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");













function DiseaseInputComponent_ng_container_0_ng_container_2_nz_option_1_nz_space_item_4_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r8.disease.diseaseAliases.join(", "));
    }
}
function DiseaseInputComponent_ng_container_0_ng_container_2_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DiseaseInputComponent_ng_container_0_ng_container_2_nz_option_1_nz_space_item_4_Template, 3, 1, "nz-space-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", opt_r8.tooltip)("nzValue", opt_r8.disease);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", opt_r8.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", opt_r8.disease.diseaseAliases.length > 0);
    }
}
function DiseaseInputComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DiseaseInputComponent_ng_container_0_ng_container_2_nz_option_1_Template, 5, 4, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const diseases_r6 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", diseases_r6);
    }
}
function DiseaseInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " No disease found in CIViC that matches the string provided. ");
    }
}
function DiseaseInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function DiseaseInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DiseaseInputComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DiseaseInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.diseases$);
    }
}
function DiseaseInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cvc-disease-tag", 9);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disease", ctx_r2.formControl.value);
    }
}
let DiseaseInputComponent = /*@__PURE__*/ (() => {
    class DiseaseInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(diseaseTypeaheadQuery) {
            super();
            this.diseaseTypeaheadQuery = diseaseTypeaheadQuery;
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Diseases',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        ngOnInit() {
            this.queryRef = this.diseaseTypeaheadQuery.watch({ name: "" });
            this.diseases$ = this.queryRef
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'diseaseTypeahead'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((diseases) => {
                return diseases.map((d) => {
                    let doid = d.doid ? `DOID:${d.doid}` : "no DOID";
                    let aliases = d.diseaseAliases.length > 0 ? `Aliases: ${d.diseaseAliases.join(', ')}` : "";
                    return {
                        value: d.id,
                        tooltip: `${d.name} (${doid}) ${aliases}`,
                        label: `${d.name} (${doid})`,
                        disease: d,
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
                this.queryRef.refetch({ name: value });
            };
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    DiseaseInputComponent.ɵfac = function DiseaseInputComponent_Factory(t) { return new (t || DiseaseInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["DiseaseTypeaheadGQL"])); };
    DiseaseInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DiseaseInputComponent, selectors: [["cvc-disease-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["diseaseListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], [4, "ngrxLet"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-typography", "", "nzType", "secondary"], [3, "disease"]], template: function DiseaseInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DiseaseInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DiseaseInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__["NzTypographyComponent"], _components_diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcDiseaseTagComponent"]], styles: [""] });
    return DiseaseInputComponent;
})();
const DiseaseInputType = {
    name: 'disease-input',
    component: DiseaseInputComponent,
};


/***/ }),

/***/ "v7T7":
/*!**************************************************************************!*\
  !*** ./src/app/forms/evidence/types/rating-input/rating-input.module.ts ***!
  \**************************************************************************/
/*! exports provided: RatingInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputModule", function() { return RatingInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rating_input_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating-input.type */ "A90m");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/rate */ "NDed");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const formlyConfig = {
    types: [_rating_input_type__WEBPACK_IMPORTED_MODULE_1__["RatingInputType"]]
};
let RatingInputModule = /*@__PURE__*/ (() => {
    class RatingInputModule {
    }
    RatingInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RatingInputModule });
    RatingInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RatingInputModule_Factory(t) { return new (t || RatingInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_3__["NzRateModule"],
            ]] });
    return RatingInputModule;
})();


/***/ }),

/***/ "wcLL":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/phenotypes/types/phenotype-input/phenotype-input.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PhenotypeInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeInputModule", function() { return PhenotypeInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _phenotype_input_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phenotype-input.type */ "3cf3");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const formlyConfig = {
    types: [_phenotype_input_type__WEBPACK_IMPORTED_MODULE_1__["PhenotypeInputType"]]
};
let PhenotypeInputModule = /*@__PURE__*/ (() => {
    class PhenotypeInputModule {
    }
    PhenotypeInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PhenotypeInputModule });
    PhenotypeInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function PhenotypeInputModule_Factory(t) { return new (t || PhenotypeInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcPhenotypeTagModule"],
            ]] });
    return PhenotypeInputModule;
})();


/***/ })

}]);