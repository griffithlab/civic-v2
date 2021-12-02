(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "5G4A":
/*!*******************************************************************************!*\
  !*** ./src/app/core/utilities/enum-formatters/format-reference-build-enum.ts ***!
  \*******************************************************************************/
/*! exports provided: formatReferenceBuildEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatReferenceBuildEnum", function() { return formatReferenceBuildEnum; });
function formatReferenceBuildEnum(value) {
    switch (value) {
        case 'GRCH37':
            return 'GRCh37 (hg19)';
        case 'GRCH38':
            return 'GRCh38 (hg38)';
        case 'NCBI36':
            return 'NCBI36 (hg18)';
        default:
            return value;
    }
}


/***/ }),

/***/ "5WaR":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-popover/variant-type-popover.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CvcVariantTypePopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypePopoverModule", function() { return CvcVariantTypePopoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcVariantTypePopoverModule = /*@__PURE__*/ (() => {
    class CvcVariantTypePopoverModule {
    }
    CvcVariantTypePopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcVariantTypePopoverModule });
    CvcVariantTypePopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcVariantTypePopoverModule_Factory(t) { return new (t || CvcVariantTypePopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__["NzDescriptionsModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcLinkTagModule"],
            ]] });
    return CvcVariantTypePopoverModule;
})();


/***/ }),

/***/ "6Ijx":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/variants/forms/variant-revise/variant-revise.service.ts ***!
  \*******************************************************************************/
/*! exports provided: VariantReviseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantReviseService", function() { return VariantReviseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/entitytype-to-typename */ "wmZe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");






let VariantReviseService = /*@__PURE__*/ (() => {
    class VariantReviseService {
        constructor(suggestVariantRevisionGQL, networkErrorService) {
            this.suggestVariantRevisionGQL = suggestVariantRevisionGQL;
            this.networkErrorService = networkErrorService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            this.isSubmitting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitError$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        suggest(suggestVariantRevisionInput) {
            this.storeObj = {
                id: suggestVariantRevisionInput.id,
                __typename: Object(_app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__["entityTypeToTypename"])('Variant')
            };
            this.isSubmitting$.next(true);
            this.suggestVariantRevisionGQL.mutate({ input: suggestVariantRevisionInput }, {
                update: (cache, { data: { suggestVariantRevision } }) => {
                    cache.modify({
                        id: cache.identify(this.storeObj),
                        fields: {
                            revisions(existingRevisionConnection = []) {
                                // const newConnection = {
                                //   __typeName: 'RevisionConnection',
                                //   node: {
                                //     __ref: cache.identify(suggestVariantRevision.variant.revisions)
                                //   }
                                // };
                                return suggestVariantRevision.variant.revisions;
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
    VariantReviseService.ɵfac = function VariantReviseService_Factory(t) { return new (t || VariantReviseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["SuggestVariantRevisionGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"])); };
    VariantReviseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VariantReviseService, factory: VariantReviseService.ɵfac });
    return VariantReviseService;
})();


/***/ }),

/***/ "8p2u":
/*!*****************************************************************************************!*\
  !*** ./src/app/forms/variant-types/types/variant-type-input/variant-type-input.type.ts ***!
  \*****************************************************************************************/
/*! exports provided: VariantTypeInputComponent, VariantTypeInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeInputComponent", function() { return VariantTypeInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeInputType", function() { return VariantTypeInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _components_variant_types_variant_type_tag_variant_type_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/variant-types/variant-type-tag/variant-type-tag.component */ "H2p9");











function VariantTypeInputComponent_ng_container_0_ng_container_2_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("nzLabel", "", opt_r8.name, " (", opt_r8.soid, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", opt_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", opt_r8.name, " (", opt_r8.soid, ") ");
    }
}
function VariantTypeInputComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VariantTypeInputComponent_ng_container_0_ng_container_2_nz_option_1_Template, 2, 5, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const variantTypes_r6 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", variantTypes_r6);
    }
}
function VariantTypeInputComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " No variant type found in CIViC that matches the string provided. ");
    }
}
function VariantTypeInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function VariantTypeInputComponent_ng_container_0_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.to.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VariantTypeInputComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VariantTypeInputComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("nzPlaceHolder", !ctx_r0.to.placeholder ? null : ctx_r0.to.placeholder)("nzNotFoundContent", _r4)("nzShowArrow", ctx_r0.to.showArrow)("nzFilterOption", ctx_r0.to.filterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.variantTypes$);
    }
}
function VariantTypeInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cvc-variant-type-tag", 7);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("variantType", ctx_r2.formControl.value);
    }
}
let VariantTypeInputComponent = /*@__PURE__*/ (() => {
    class VariantTypeInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(variantTypeTypeaheadQuery) {
            super();
            this.variantTypeTypeaheadQuery = variantTypeTypeaheadQuery;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search Variant Types',
                    showArrow: false,
                    onSearch: () => { },
                    minLengthSearch: 1,
                    optionList: [],
                },
            };
        }
        ngOnInit() {
            this.queryRef = this.variantTypeTypeaheadQuery.watch({ name: '' });
            this.variantTypes$ = this.queryRef.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data', 'variantTypeTypeahead'));
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
    VariantTypeInputComponent.ɵfac = function VariantTypeInputComponent_Factory(t) { return new (t || VariantTypeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["VariantTypeTypeaheadGQL"])); };
    VariantTypeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VariantTypeInputComponent, selectors: [["cvc-variant-type-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["drugListItem", ""], ["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "nzOnSearch"], [4, "ngrxLet"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [3, "variantType"]], template: function VariantTypeInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VariantTypeInputComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VariantTypeInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], _components_variant_types_variant_type_tag_variant_type_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcVariantTypeTagComponent"]], styles: [""] });
    return VariantTypeInputComponent;
})();
const VariantTypeInputType = {
    name: 'variant-type-input',
    component: VariantTypeInputComponent,
};


/***/ }),

/***/ "9l0T":
/*!**********************************************************************************!*\
  !*** ./src/app/views/variants/variants-revise/variants-revise-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: VariantsReviseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsReviseRoutingModule", function() { return VariantsReviseRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _variants_revise_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants-revise.view */ "sCTR");
/* harmony import */ var _variants_suggest_variants_suggest_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variants-suggest/variants-suggest.module */ "ufh7");
/* harmony import */ var _variants_suggest_variants_suggest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants-suggest/variants-suggest.page */ "e9d+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '',
        component: _variants_revise_view__WEBPACK_IMPORTED_MODULE_1__["VariantsReviseView"],
        data: { breadcrumb: 'Revise' },
        children: [
            { path: '', redirectTo: 'suggest', pathMatch: 'full' },
            {
                path: 'suggest',
                component: _variants_suggest_variants_suggest_page__WEBPACK_IMPORTED_MODULE_3__["VariantsSuggestPage"],
                data: {
                    breadcrumb: 'Suggest Revision'
                }
            }
        ]
    }
];
let VariantsReviseRoutingModule = /*@__PURE__*/ (() => {
    class VariantsReviseRoutingModule {
    }
    VariantsReviseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VariantsReviseRoutingModule });
    VariantsReviseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function VariantsReviseRoutingModule_Factory(t) { return new (t || VariantsReviseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _variants_suggest_variants_suggest_module__WEBPACK_IMPORTED_MODULE_2__["VariantsSuggestModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return VariantsReviseRoutingModule;
})();


/***/ }),

/***/ "Fj+6":
/*!****************************************************************************!*\
  !*** ./src/app/forms/variants/forms/variant-revise/variant-revise.form.ts ***!
  \****************************************************************************/
/*! exports provided: VariantReviseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantReviseForm", function() { return VariantReviseForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/input-formatters */ "Tdft");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _app_core_utilities_enum_formatters_format_reference_build_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/utilities/enum-formatters/format-reference-build-enum */ "5G4A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _variant_revise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./variant-revise.service */ "6Ijx");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-errors-alert/form-errors-alert.component */ "IjnV");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");


























function VariantReviseForm_ng_container_1_nz_form_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "cvc-form-errors-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const errors_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errors", errors_r3);
    }
}
function VariantReviseForm_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VariantReviseForm_ng_container_1_nz_form_item_1_Template, 2, 1, "nz-form-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const errors_r3 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", errors_r3.length > 0);
    }
}
function VariantReviseForm_ng_container_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View it on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Revisions Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " or suggest another revision below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
}
function VariantReviseForm_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VariantReviseForm_ng_container_3_ng_template_2_Template, 5, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDescription", _r6);
    }
}
function VariantReviseForm_nz_form_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "cvc-org-selector-btn-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedOrgChange", function VariantReviseForm_nz_form_item_6_Template_cvc_org_selector_btn_group_selectedOrgChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Suggest Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedOrg", ctx_r2.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r2.formGroup.valid);
    }
}
let VariantReviseForm = /*@__PURE__*/ (() => {
    class VariantReviseForm {
        constructor(revisionService, viewerService, revisableFieldsGQL) {
            this.revisionService = revisionService;
            this.viewerService = viewerService;
            this.revisableFieldsGQL = revisableFieldsGQL;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
            this.formOptions = {};
            // subscribing to viewer$ and setting local org, mostRecentOrg
            // so that mostRecentOrg can be updated by org-selector's selectOrg events
            this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
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
                    hide: true,
                },
                {
                    key: 'fields.description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Description',
                        placeholder: 'Enter a description for this variant.',
                        required: false
                    }
                },
                {
                    key: 'fields.sources',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Sources',
                        addText: 'Add another Source',
                    },
                    fieldArray: {
                        type: 'source-input',
                        templateOptions: {
                            required: true
                        }
                    }
                },
                {
                    key: 'fields.variantAliases',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Variant Aliases',
                        addText: 'Add an Alias',
                    },
                    fieldArray: {
                        type: 'input',
                        templateOptions: {
                            required: true,
                            placeholder: 'Add Alias'
                        }
                    }
                },
                {
                    key: 'fields.hgvsDescriptions',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'HGVS Descriptions',
                        addText: 'Add an HGVS Description'
                    },
                    fieldArray: {
                        type: 'input',
                        templateOptions: {
                            required: true,
                            placeholder: 'Enter an HGVS string'
                        }
                    }
                },
                {
                    key: 'fields.clinvarIds',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'ClinVar IDs',
                        addText: 'Add a ClinVar ID'
                    },
                    fieldArray: {
                        type: 'input',
                        templateOptions: {
                            required: true,
                            placeholder: 'Enter a ClinVar ID'
                        }
                    }
                },
                {
                    key: 'fields.variantTypes',
                    type: 'multi-field',
                    templateOptions: {
                        label: 'Variant Types',
                        addText: 'Add a Variant Type'
                    },
                    fieldArray: {
                        type: 'variant-type-input',
                        templateOptions: {
                            required: true
                        }
                    }
                },
                {
                    template: '<h3>Primary Coordinates</h3>',
                },
                {
                    key: 'fields.referenceBuild',
                    type: 'select',
                    defaultValue: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["ReferenceBuild"].Grch37,
                    templateOptions: {
                        label: 'Reference Build',
                        required: false,
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_5__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["ReferenceBuild"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_reference_build_enum__WEBPACK_IMPORTED_MODULE_6__["formatReferenceBuildEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'fields.ensemblVersion',
                    type: 'input',
                    templateOptions: {
                        label: 'Ensembl Version',
                    },
                    validators: {
                        validation: ['ensembl']
                    }
                },
                {
                    key: 'fields.fivePrimeCoordinates.chromosome',
                    type: 'select',
                    defaultValue: undefined,
                    templateOptions: {
                        label: 'Chromosome',
                        required: false,
                        options: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["Chromosomes"]
                    },
                },
                {
                    key: 'fields.fivePrimeCoordinates.start',
                    type: 'input',
                    templateOptions: {
                        label: 'Start',
                    },
                    validators: {
                        validation: ['integer']
                    }
                },
                {
                    key: 'fields.fivePrimeCoordinates.stop',
                    type: 'input',
                    templateOptions: {
                        label: 'Stop',
                    },
                    validators: {
                        validation: ['integer']
                    }
                },
                {
                    key: 'fields.fivePrimeCoordinates.representativeTranscript',
                    type: 'input',
                    templateOptions: {
                        label: 'Representative Transcript',
                    },
                },
                {
                    template: '<h3>Secondary Coordinates</h3>',
                },
                {
                    key: 'fields.threePrimeCoordinates.chromosome',
                    type: 'select',
                    defaultValue: undefined,
                    templateOptions: {
                        label: 'Chromosome',
                        required: false,
                        options: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["Chromosomes"]
                    },
                },
                {
                    key: 'fields.threePrimeCoordinates.start',
                    type: 'input',
                    templateOptions: {
                        label: 'Start',
                    },
                    validators: {
                        validation: ['integer']
                    }
                },
                {
                    key: 'fields.threePrimeCoordinates.stop',
                    type: 'input',
                    templateOptions: {
                        label: 'Stop',
                    },
                    validators: {
                        validation: ['integer']
                    }
                },
                {
                    key: 'fields.threePrimeCoordinates.representativeTranscript',
                    type: 'input',
                    templateOptions: {
                        label: 'Representative Transcript',
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
            // reset form upon successful submit
            this.submitSuccess$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                .subscribe(s => {
                if (s && this.formOptions.resetModel) {
                    this.formOptions.resetModel();
                }
            });
        }
        ngOnInit() {
            // fetch latest revisable field values, update form fields
            this.revisableFieldsGQL.fetch({ variantId: this.variantId })
                .subscribe(({ data: { variant } }) => {
                if (variant) {
                    this.formModel = this.toFormModel(variant);
                }
                else {
                    // TODO: handle errors with subscribe({complete, error})
                    console.error('Could not retrieve variant.');
                }
                if (this.formOptions.updateInitialValue) {
                    this.formOptions.updateInitialValue();
                }
            });
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
        submitRevision(formModel) {
            this.revisionService
                .suggest(this.toRevisionInput(formModel));
        }
        toFormModel(variant) {
            var _a, _b;
            return {
                id: variant.id,
                fields: Object.assign(Object.assign({}, variant), {
                    // TODO: probably incorrect - assuming root ref/var bases can be plucked from
                    // fivePrimeCoordinates
                    referenceBases: (_a = variant.fivePrimeCoordinates) === null || _a === void 0 ? void 0 : _a.referenceBases, variantBases: (_b = variant.fivePrimeCoordinates) === null || _b === void 0 ? void 0 : _b.variantBases
                }),
                comment: '',
                organizationId: undefined
            };
        }
        toRevisionInput(model) {
            const fields = model.fields;
            return Object.assign(Object.assign({}, model), { fields: {
                    name: fields.name,
                    geneId: fields.gene.id,
                    ensemblVersion: +fields.ensemblVersion,
                    description: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toNullableString"](fields.description),
                    clinvarIds: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toClinvarInput"](fields.clinvarIds),
                    primaryCoordinates: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toCoordinateInput"](fields.fivePrimeCoordinates),
                    secondaryCoordinates: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toCoordinateInput"](fields.threePrimeCoordinates),
                    referenceBases: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toNullableString"](fields.referenceBases),
                    variantBases: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toNullableString"](fields.variantBases),
                    referenceBuild: _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_4__["toNullableReferenceBuildInput"](fields.referenceBuild),
                    hgvsDescriptions: fields.hgvsDescriptions,
                    sourceIds: model.fields.sources.map((s) => { return +s.id; }),
                    variantTypeIds: model.fields.variantTypes.map((vt) => { return +vt.id; }),
                    aliases: model.fields.variantAliases,
                }, organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.revisionService.cleanup();
        }
    }
    VariantReviseForm.ɵfac = function VariantReviseForm_Factory(t) { return new (t || VariantReviseForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_variant_revise_service__WEBPACK_IMPORTED_MODULE_8__["VariantReviseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_9__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["VariantRevisableFieldsGQL"])); };
    VariantReviseForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VariantReviseForm, selectors: [["cvc-variant-revise-form"]], inputs: { variantId: "variantId" }, decls: 8, vars: 14, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "form", "fields", "model", "options", "modelChange"], [3, "errors"], ["nzType", "success", "nzMessage", "Suggested Revision Submitted", "nzShowIcon", "", 3, "nzDescription"], ["nzSize", "small"], ["successMessage", ""], ["routerLink", "../revisions"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"]], template: function VariantReviseForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function VariantReviseForm_Template_form_ngSubmit_0_listener() { return ctx.submitRevision(ctx.formModel); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VariantReviseForm_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, VariantReviseForm_ng_container_3_Template, 4, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "formly-form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("modelChange", function VariantReviseForm_Template_formly_form_modelChange_5_listener($event) { return ctx.formModel = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, VariantReviseForm_nz_form_item_6_Template, 6, 2, "nz-form-item", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, ctx.submitError$));
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 10, ctx.submitSuccess$));
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.formGroup)("fields", ctx.formFields)("model", ctx.formModel)("options", ctx.formOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, ctx.submitSuccess$));
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__["FormlyForm"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_14__["CvcFormErrorsAlertComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__["NzAlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_17__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_18__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_21__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [""] });
    return VariantReviseForm;
})();


/***/ }),

/***/ "T5cm":
/*!******************************************************************************!*\
  !*** ./src/app/forms/variants/forms/variant-revise/variant-revise.module.ts ***!
  \******************************************************************************/
/*! exports provided: VariantReviseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantReviseModule", function() { return VariantReviseModule; });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _variant_revise_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./variant-revise.service */ "6Ijx");
/* harmony import */ var _app_forms_variant_types_types_variant_type_input_variant_type_input_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/forms/variant-types/types/variant-type-input/variant-type-input.module */ "TKYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















let VariantReviseModule = /*@__PURE__*/ (() => {
    class VariantReviseModule {
    }
    VariantReviseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: VariantReviseModule });
    VariantReviseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function VariantReviseModule_Factory(t) { return new (t || VariantReviseModule)(); }, providers: [_variant_revise_service__WEBPACK_IMPORTED_MODULE_14__["VariantReviseService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_13__["NgxJsonViewerModule"],
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
                _app_forms_variant_types_types_variant_type_input_variant_type_input_module__WEBPACK_IMPORTED_MODULE_15__["VariantTypeInputModule"],
            ]] });
    return VariantReviseModule;
})();


/***/ }),

/***/ "TKYv":
/*!*******************************************************************************************!*\
  !*** ./src/app/forms/variant-types/types/variant-type-input/variant-type-input.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: VariantTypeInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeInputModule", function() { return VariantTypeInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _variant_type_input_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-type-input.type */ "8p2u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/variant-types/variant-type-tag/variant-type-tag.module */ "XIlT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const formlyConfig = {
    types: [_variant_type_input_type__WEBPACK_IMPORTED_MODULE_1__["VariantTypeInputType"]]
};
let VariantTypeInputModule = /*@__PURE__*/ (() => {
    class VariantTypeInputModule {
    }
    VariantTypeInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: VariantTypeInputModule });
    VariantTypeInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function VariantTypeInputModule_Factory(t) { return new (t || VariantTypeInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponentModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                _app_components_variant_types_variant_type_tag_variant_type_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcVariantTypeTagModule"]
            ]] });
    return VariantTypeInputModule;
})();


/***/ }),

/***/ "XIlT":
/*!**************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-tag/variant-type-tag.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcVariantTypeTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypeTagModule", function() { return CvcVariantTypeTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _app_components_variant_types_variant_type_popover_variant_type_popover_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/variant-types/variant-type-popover/variant-type-popover.module */ "5WaR");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcVariantTypeTagModule = /*@__PURE__*/ (() => {
    class CvcVariantTypeTagModule {
    }
    CvcVariantTypeTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcVariantTypeTagModule });
    CvcVariantTypeTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcVariantTypeTagModule_Factory(t) { return new (t || CvcVariantTypeTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverModule"],
                _app_components_variant_types_variant_type_popover_variant_type_popover_module__WEBPACK_IMPORTED_MODULE_3__["CvcVariantTypePopoverModule"],
            ]] });
    return CvcVariantTypeTagModule;
})();


/***/ }),

/***/ "e9d+":
/*!******************************************************************************************!*\
  !*** ./src/app/views/variants/variants-revise/variants-suggest/variants-suggest.page.ts ***!
  \******************************************************************************************/
/*! exports provided: VariantsSuggestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsSuggestPage", function() { return VariantsSuggestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _forms_variants_forms_variant_revise_variant_revise_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../forms/variants/forms/variant-revise/variant-revise.form */ "Fj+6");








function VariantsSuggestPage_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-variant-revise-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variantId", ctx_r0.variantId);
    }
}
function VariantsSuggestPage_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading Variant...");
    }
}
const _c0 = function () { return { rows: 1 }; };
const _c1 = function () { return { rows: 3 }; };
const _c2 = function () { return { rows: 4 }; };
const _c3 = function () { return { rows: 5 }; };
let VariantsSuggestPage = /*@__PURE__*/ (() => {
    class VariantsSuggestPage {
        constructor(route) {
            this.route = route;
            this.routeParams$ = this.route.params.subscribe((params) => {
                this.variantId = +params.variantId;
            });
        }
        ngOnDestroy() {
            this.routeParams$.unsubscribe();
        }
    }
    VariantsSuggestPage.ɵfac = function VariantsSuggestPage_Factory(t) { return new (t || VariantsSuggestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    VariantsSuggestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariantsSuggestPage, selectors: [["cvc-variants-suggest"]], decls: 16, vars: 11, consts: [[3, "nzGutter"], ["nzSpan", "16"], [4, "ngIf", "ngIfElse"], ["loadingVariant", ""], ["nzSpan", "8"], ["nzTitle", "Instructions", "nz-type", "inner"], ["nzDirection", "vertical", 2, "width", "100%"], [3, "nzParagraph"], [3, "variantId"]], template: function VariantsSuggestPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VariantsSuggestPage_ng_container_2_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VariantsSuggestPage_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variantId)("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__["NzSkeletonComponent"], _forms_variants_forms_variant_revise_variant_revise_form__WEBPACK_IMPORTED_MODULE_7__["VariantReviseForm"]], styles: [""] });
    return VariantsSuggestPage;
})();


/***/ }),

/***/ "sCTR":
/*!************************************************************************!*\
  !*** ./src/app/views/variants/variants-revise/variants-revise.view.ts ***!
  \************************************************************************/
/*! exports provided: VariantsReviseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsReviseView", function() { return VariantsReviseView; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








function VariantsReviseView_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-page-header-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " REVISE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-page-header-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const variant_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", variant_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", variant_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", variant_r1.name, " ");
    }
}
let VariantsReviseView = /*@__PURE__*/ (() => {
    class VariantsReviseView {
        constructor(gql, route) {
            this.gql = gql;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                let observable = this.gql.watch({ variantId: +params.variantId }).valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.variant$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'variant'));
                this.commentsTotal$ = this.variant$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('comments', 'totalCount'));
                this.flagsTotal$ = this.variant$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('flags', 'totalCount'));
                this.revisionsTotal$ = this.variant$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('revisions', 'totalCount'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    VariantsReviseView.ɵfac = function VariantsReviseView_Factory(t) { return new (t || VariantsReviseView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["VariantDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    VariantsReviseView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariantsReviseView, selectors: [["cvc-variants-revise"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], [1, "site-page-header"], ["cvcFlaggableOptions", ""], ["nz-icon", "", "nzType", "civic:variant"], [1, "content"]], template: function VariantsReviseView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VariantsReviseView_ng_container_0_Template, 12, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.variant$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderSubtitleDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return VariantsReviseView;
})();


/***/ }),

/***/ "ufh7":
/*!********************************************************************************************!*\
  !*** ./src/app/views/variants/variants-revise/variants-suggest/variants-suggest.module.ts ***!
  \********************************************************************************************/
/*! exports provided: VariantsSuggestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsSuggestModule", function() { return VariantsSuggestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _app_forms_variants_forms_variant_revise_variant_revise_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/forms/variants/forms/variant-revise/variant-revise.module */ "T5cm");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let VariantsSuggestModule = /*@__PURE__*/ (() => {
    class VariantsSuggestModule {
    }
    VariantsSuggestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: VariantsSuggestModule });
    VariantsSuggestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function VariantsSuggestModule_Factory(t) { return new (t || VariantsSuggestModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__["NzSkeletonModule"],
                _app_forms_variants_forms_variant_revise_variant_revise_module__WEBPACK_IMPORTED_MODULE_2__["VariantReviseModule"],
            ]] });
    return VariantsSuggestModule;
})();


/***/ }),

/***/ "wdCO":
/*!**************************************************************************!*\
  !*** ./src/app/views/variants/variants-revise/variants-revise.module.ts ***!
  \**************************************************************************/
/*! exports provided: VariantsReviseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsReviseModule", function() { return VariantsReviseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _variants_revise_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants-revise-routing.module */ "9l0T");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let VariantsReviseModule = /*@__PURE__*/ (() => {
    class VariantsReviseModule {
    }
    VariantsReviseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: VariantsReviseModule });
    VariantsReviseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function VariantsReviseModule_Factory(t) { return new (t || VariantsReviseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _variants_revise_routing_module__WEBPACK_IMPORTED_MODULE_1__["VariantsReviseRoutingModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_3__["CvcSectionNavigationModule"],
            ]] });
    return VariantsReviseModule;
})();


/***/ })

}]);