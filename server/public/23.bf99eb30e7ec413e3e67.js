(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "+WH+":
/*!***********************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-input.type.ts ***!
  \***********************************************************************/
/*! exports provided: SourceInputComponent, SourceInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceInputComponent", function() { return SourceInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceInputType", function() { return SourceInputType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _source_selector_source_selector_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source-selector/source-selector.form */ "/Jmo");
/* harmony import */ var _components_sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/sources/source-tag/source-tag.component */ "2a8A");





function SourceInputComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "cvc-source-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sourceSelected", function SourceInputComponent_ng_container_0_Template_cvc_source_selector_sourceSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSourceSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
}
function SourceInputComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-source-tag", 3);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx_r2.formControl.value);
    }
}
let SourceInputComponent = /*@__PURE__*/ (() => {
    class SourceInputComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor() {
            super();
        }
        onSourceSelected(s) {
            console.log(s);
            this.formControl.setValue(s);
        }
    }
    SourceInputComponent.ɵfac = function SourceInputComponent_Factory(t) { return new (t || SourceInputComponent)(); };
    SourceInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SourceInputComponent, selectors: [["cvc-source-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["sourceListItem", ""], [3, "sourceSelected"], [3, "source"]], template: function SourceInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SourceInputComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SourceInputComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.formControl.value == null ? null : ctx.formControl.value.id))("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _source_selector_source_selector_form__WEBPACK_IMPORTED_MODULE_3__["SourceSelectorForm"], _components_sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_4__["CvcSourceTagComponent"]], styles: [""], changeDetection: 0 });
    return SourceInputComponent;
})();
const SourceInputType = {
    name: 'source-input',
    component: SourceInputComponent,
};


/***/ }),

/***/ "/Jmo":
/*!******************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector.form.ts ***!
  \******************************************************************************************/
/*! exports provided: sourceSelectorInitialValue, SourceSelectorForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceSelectorInitialValue", function() { return sourceSelectorInitialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorForm", function() { return SourceSelectorForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_enum_formatters_format_source_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/utilities/enum-formatters/format-source-type-enum */ "12xB");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");








const sourceSelectorInitialValue = {
    sourceType: undefined,
    citationId: undefined
};
let SourceSelectorForm = /*@__PURE__*/ (() => {
    class SourceSelectorForm {
        constructor() {
            this.sourceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.model = sourceSelectorInitialValue;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            this.options = {};
            this.fields = [
                { key: 'id' },
                {
                    key: 'citation',
                    defaultValue: ''
                },
                {
                    key: 'sourceType',
                    type: 'select',
                    className: 'source-type-field',
                    defaultValue: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["SourceSource"].Pubmed,
                    templateOptions: {
                        required: true,
                        placeholder: 'Select Type',
                        options: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_4__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["SourceSource"])
                            .map((value, key) => {
                            return { value: value, label: Object(_app_core_utilities_enum_formatters_format_source_type_enum__WEBPACK_IMPORTED_MODULE_3__["formatSourceTypeEnum"])(value) };
                        })
                    }
                },
                {
                    key: 'citationId',
                    className: 'citation-id-field',
                    type: 'source-selector-typeahead',
                    templateOptions: {
                        maxLength: 10,
                        required: true,
                        triggerParentSubmit: () => { this.onSubmit(); }
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.sourceType',
                        'templateOptions.placeholder': '!model.sourceType ? "Select source type before searching" : "Search " + model.sourceType + " sources"',
                        'templateOptions.sourceType': 'model.sourceType',
                        'templateOptions.sourceTypeKey': (model) => {
                            if (!model.sourceType) {
                                return;
                            }
                            return Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_4__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["SourceSource"]).getKeyOrThrow(model.sourceType);
                        }
                    }
                },
                {
                    type: 'multi-field-add-btn',
                    className: 'add-button',
                    templateOptions: {
                        label: 'Add Source',
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.citationId',
                    }
                }
            ];
        }
        ngOnInit() {
        }
        onSubmit() {
            console.log('source-select form submitted.');
            this.sourceSelected.emit(this.model);
        }
        ngOnDestroy() {
            console.log('source-selector onDestroy called.');
        }
    }
    SourceSelectorForm.ɵfac = function SourceSelectorForm_Factory(t) { return new (t || SourceSelectorForm)(); };
    SourceSelectorForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SourceSelectorForm, selectors: [["cvc-source-selector"]], outputs: { sourceSelected: "sourceSelected" }, decls: 2, vars: 5, consts: [["nz-form", "", "nzLayout", "horizontal", 3, "formGroup", "ngSubmit"], [1, "formly-form", 3, "model", "fields", "options", "form", "modelChange"]], template: function SourceSelectorForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SourceSelectorForm_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "formly-form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function SourceSelectorForm_Template_formly_form_modelChange_1_listener($event) { return ctx.model = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.model)("fields", ctx.fields)("options", ctx.options)("form", ctx.form);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyForm"]], styles: [":host {\n  display: block;\n}\ncvc-source-input .formly-form {\n  width: 100%;\n}\ncvc-source-input .source-type-field {\n  display: inline-block;\n  width: 10em;\n}\ncvc-source-input .citation-id-field {\n  display: inline-block;\n  margin-left: 0.5em;\n  width: calc(100% - 10em - 2*0.5em - 8em);\n}\ncvc-source-input .add-button {\n  display: inline-block;\n  margin-left: 0.5em;\n  width: 8em;\n}\n"], encapsulation: 2 });
    return SourceSelectorForm;
})();


/***/ }),

/***/ "5V0L":
/*!***********************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/mapEnumValue.js ***!
  \***********************************************************/
/*! exports provided: mapEnumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEnumValue", function() { return mapEnumValue; });
/* harmony import */ var _EnumValueMappee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumValueMappee */ "7I59");

function mapEnumValue(value) {
    if (value === null) {
        return new _EnumValueMappee__WEBPACK_IMPORTED_MODULE_0__["EnumValueMappeeWithNull"]();
    }
    else if (value === undefined) {
        return new _EnumValueMappee__WEBPACK_IMPORTED_MODULE_0__["EnumValueMappeeWithUndefined"]();
    }
    else {
        return new _EnumValueMappee__WEBPACK_IMPORTED_MODULE_0__["EnumValueMappee"](value);
    }
}
//# sourceMappingURL=mapEnumValue.js.map

/***/ }),

/***/ "5yrI":
/*!************************************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/createUnhandledEntryError.js ***!
  \************************************************************************/
/*! exports provided: createUnhandledEntryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnhandledEntryError", function() { return createUnhandledEntryError; });
function createUnhandledEntryError(unhandledValue) {
    return new Error("Unhandled value: " + unhandledValue);
}
//# sourceMappingURL=createUnhandledEntryError.js.map

/***/ }),

/***/ "6Bey":
/*!******************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/symbols.js ***!
  \******************************************************/
/*! exports provided: unhandledEntry, handleNull, handleUndefined, handleUnexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unhandledEntry", function() { return unhandledEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNull", function() { return handleNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleUndefined", function() { return handleUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleUnexpected", function() { return handleUnexpected; });
var unhandledEntry = Symbol("ts-enum-util:unhandledEntry");
var handleNull = Symbol("ts-enum-util:handleNull");
var handleUndefined = Symbol("ts-enum-util:handleUndefined");
var handleUnexpected = Symbol("ts-enum-util:handleUnexpected");
//# sourceMappingURL=symbols.js.map

/***/ }),

/***/ "7I59":
/*!**************************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/EnumValueMappee.js ***!
  \**************************************************************/
/*! exports provided: EnumValueMappee, EnumValueMappeeWithNull, EnumValueMappeeWithUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappee", function() { return EnumValueMappee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappeeWithNull", function() { return EnumValueMappeeWithNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappeeWithUndefined", function() { return EnumValueMappeeWithUndefined; });
/* harmony import */ var _createUnhandledEntryError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUnhandledEntryError */ "5yrI");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ "6Bey");


var EnumValueMappee = (function () {
    function EnumValueMappee(value) {
        this.value = value;
    }
    EnumValueMappee.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(this.value)) {
            return processEntry(mapper[this.value], this.value);
        }
        else if (mapper.hasOwnProperty(_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"])) {
            return processEntry(mapper[_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"]], this.value);
        }
        else {
            throw new Error("Unexpected value: " + this.value);
        }
    };
    return EnumValueMappee;
}());

var EnumValueMappeeWithNull = (function () {
    function EnumValueMappeeWithNull() {
    }
    EnumValueMappeeWithNull.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(_symbols__WEBPACK_IMPORTED_MODULE_1__["handleNull"])) {
            return processEntry(mapper[_symbols__WEBPACK_IMPORTED_MODULE_1__["handleNull"]], null);
        }
        else if (mapper.hasOwnProperty(_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"])) {
            return processEntry(mapper[_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"]], null);
        }
        else {
            throw new Error("Unexpected value: null");
        }
    };
    return EnumValueMappeeWithNull;
}());

var EnumValueMappeeWithUndefined = (function () {
    function EnumValueMappeeWithUndefined() {
    }
    EnumValueMappeeWithUndefined.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUndefined"])) {
            return processEntry(mapper[_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUndefined"]], undefined);
        }
        else if (mapper.hasOwnProperty(_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"])) {
            return processEntry(mapper[_symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"]], undefined);
        }
        else {
            throw new Error("Unexpected value: undefined");
        }
    };
    return EnumValueMappeeWithUndefined;
}());

function processEntry(entry, value) {
    if (entry === _symbols__WEBPACK_IMPORTED_MODULE_1__["unhandledEntry"]) {
        throw Object(_createUnhandledEntryError__WEBPACK_IMPORTED_MODULE_0__["createUnhandledEntryError"])(value);
    }
    else {
        return entry;
    }
}
//# sourceMappingURL=EnumValueMappee.js.map

/***/ }),

/***/ "Cn5k":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector-loader/source-selector-loader.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: SourceSelectorLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorLoaderModule", function() { return SourceSelectorLoaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let SourceSelectorLoaderModule = /*@__PURE__*/ (() => {
    class SourceSelectorLoaderModule {
    }
    SourceSelectorLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SourceSelectorLoaderModule });
    SourceSelectorLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function SourceSelectorLoaderModule_Factory(t) { return new (t || SourceSelectorLoaderModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_1__["NzSpaceModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_4__["CvcFormErrorsAlertModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ]] });
    return SourceSelectorLoaderModule;
})();


/***/ }),

/***/ "DIJx":
/*!**************************************************************************************************!*\
  !*** ./src/app/forms/shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: MultiFieldAddBtnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFieldAddBtnModule", function() { return MultiFieldAddBtnModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _multi_field_add_btn_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-field-add-btn.type */ "d4r5");
/* harmony import */ var _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/ng-zorro-antd */ "vtEL");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const formlyConfig = {
    types: [_multi_field_add_btn_type__WEBPACK_IMPORTED_MODULE_1__["MultiFieldAddBtnType"]]
};
let MultiFieldAddBtnModule = /*@__PURE__*/ (() => {
    class MultiFieldAddBtnModule {
    }
    MultiFieldAddBtnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MultiFieldAddBtnModule });
    MultiFieldAddBtnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function MultiFieldAddBtnModule_Factory(t) { return new (t || MultiFieldAddBtnModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forChild(formlyConfig),
                _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["FormlyNgZorroAntdModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ]] });
    return MultiFieldAddBtnModule;
})();


/***/ }),

/***/ "J/XB":
/*!*************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-input.module.ts ***!
  \*************************************************************************/
/*! exports provided: SourceInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceInputModule", function() { return SourceInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _source_input_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source-input.type */ "+WH+");
/* harmony import */ var _source_selector_source_selector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source-selector/source-selector.module */ "JzCq");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const formlyConfig = {
    types: [_source_input_type__WEBPACK_IMPORTED_MODULE_2__["SourceInputType"]]
};
let SourceInputModule = /*@__PURE__*/ (() => {
    class SourceInputModule {
    }
    SourceInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SourceInputModule });
    SourceInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SourceInputModule_Factory(t) { return new (t || SourceInputModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyModule"].forChild(formlyConfig),
                _source_selector_source_selector_module__WEBPACK_IMPORTED_MODULE_3__["SourceSelectorModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcSourceTagModule"],
            ]] });
    return SourceInputModule;
})();


/***/ }),

/***/ "JzCq":
/*!********************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SourceSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorModule", function() { return SourceSelectorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/ng-zorro-antd */ "vtEL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _source_selector_typeahead_source_selector_typeahead_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source-selector-typeahead/source-selector-typeahead.module */ "Py2y");
/* harmony import */ var _source_selector_loader_source_selector_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source-selector-loader/source-selector-loader.module */ "Cn5k");
/* harmony import */ var _app_forms_shared_types_multi_field_multi_field_add_btn_multi_field_add_btn_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/forms/shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.module */ "DIJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










let SourceSelectorModule = /*@__PURE__*/ (() => {
    class SourceSelectorModule {
    }
    SourceSelectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SourceSelectorModule });
    SourceSelectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function SourceSelectorModule_Factory(t) { return new (t || SourceSelectorModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forChild(),
                _ngx_formly_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["FormlyNgZorroAntdModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
                _source_selector_loader_source_selector_loader_module__WEBPACK_IMPORTED_MODULE_6__["SourceSelectorLoaderModule"],
                _source_selector_typeahead_source_selector_typeahead_module__WEBPACK_IMPORTED_MODULE_5__["SourceSelectorTypeaheadModule"],
                _app_forms_shared_types_multi_field_multi_field_add_btn_multi_field_add_btn_module__WEBPACK_IMPORTED_MODULE_7__["MultiFieldAddBtnModule"],
            ]] });
    return SourceSelectorModule;
})();


/***/ }),

/***/ "KFqD":
/*!*********************************************************!*\
  !*** ./src/app/forms/shared/input-formatters/shared.ts ***!
  \*********************************************************/
/*! exports provided: toNullableString, toNullableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNullableString", function() { return toNullableString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNullableInput", function() { return toNullableInput; });
function toNullableString(str) {
    let nStr = { value: undefined, unset: undefined };
    if (str && str.trim().length > 0) {
        nStr.value = str.trim();
    }
    else {
        nStr.unset = true;
    }
    return nStr;
}
function toNullableInput(x) {
    let nullable = { value: undefined, unset: undefined };
    if (x) {
        nullable.value = x;
    }
    else {
        nullable.unset = true;
    }
    return nullable;
}


/***/ }),

/***/ "ONVL":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector-typeahead/source-selector-typeahead.type.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SourceSelectorTypeaheadComponent, TypeaheadSelectorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorTypeaheadComponent", function() { return SourceSelectorTypeaheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadSelectorType", function() { return TypeaheadSelectorType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _source_selector_loader_source_selector_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../source-selector-loader/source-selector-loader.component */ "i93x");








function SourceSelectorTypeaheadComponent_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const opt_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", opt_r4.label)("nzValue", opt_r4.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", opt_r4.source.citation, " (", opt_r4.source.citationId, ") ");
    }
}
function SourceSelectorTypeaheadComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Citation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.model.citation, " ");
    }
}
function SourceSelectorTypeaheadComponent_ng_template_3_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Enter a ", ctx_r5.to.sourceTypeKey, " citation ID to search CIViC sources ");
    }
}
function SourceSelectorTypeaheadComponent_ng_template_3_cvc_source_loader_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cvc-source-loader", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelUpdate", function SourceSelectorTypeaheadComponent_ng_template_3_cvc_source_loader_2_Template_cvc_source_loader_modelUpdate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onModelUpdated($event); })("sourceTypeChange", function SourceSelectorTypeaheadComponent_ng_template_3_cvc_source_loader_2_Template_cvc_source_loader_sourceTypeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.model.sourceType = $event; })("citationIdChange", function SourceSelectorTypeaheadComponent_ng_template_3_cvc_source_loader_2_Template_cvc_source_loader_citationIdChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.to.fieldValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx_r6.model)("sourceType", ctx_r6.model.sourceType)("citationId", ctx_r6.to.fieldValue);
    }
}
function SourceSelectorTypeaheadComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SourceSelectorTypeaheadComponent_ng_template_3_div_1_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SourceSelectorTypeaheadComponent_ng_template_3_cvc_source_loader_2_Template, 1, 3, "cvc-source-loader", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r3.to.fieldLength > 0 && ctx_r3.to.fieldLength >= ctx_r3.to.minLengthSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
    }
}
let SourceSelectorTypeaheadComponent = /*@__PURE__*/ (() => {
    class SourceSelectorTypeaheadComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor(sourceTypeaheadQuery, changeDetectorRef) {
            super();
            this.sourceTypeaheadQuery = sourceTypeaheadQuery;
            this.changeDetectorRef = changeDetectorRef;
            this.selectedValue = null;
            this.nzFilterOption = () => true;
            this.defaultOptions = {
                templateOptions: {
                    placeholder: 'Search',
                    sourceType: undefined,
                    showArrow: false,
                    onSearch: () => { },
                    filterOption: () => { },
                    modelChange: () => { },
                    triggerParentSubmit: () => { },
                    minLengthSearch: 1,
                    // selector component doesn't update field value until it's valid
                    // storing its value and length (for various UI conditionals) here
                    fieldLength: 0,
                    fieldValue: '',
                    optionList: []
                },
            };
        }
        ngAfterViewInit() {
            // super.ngAfterViewInit(); NOTE: will be required with v6
            this.to.filterOption = () => true; // TODO: look up what this does
            this.to.modelChange = (e) => {
                // this gets called both when an existing source is selected,
                // and when source-loader triggers onModelUpdated() & patches the form
                if (this.to.optionList.length > 0) {
                    // update form model with selected source's id & citation
                    const { source } = this.to.optionList.find((opt) => opt.value === +e);
                    if (source) {
                        this.form.patchValue({ citation: source.citation, id: source.id });
                    }
                    else {
                        console.error('Could not find selected citation in list?');
                    }
                }
            };
            this.to.onSearch = (value) => {
                this.to.fieldValue = value;
                this.to.fieldLength = value.length;
                if (value.length < this.to.minLengthSearch || value.length > this.to.maxLength) {
                    return;
                }
                this.sourceTypeaheadQuery
                    .fetch({
                    sourceType: this.to.sourceType,
                    partialCitationId: +value
                })
                    .subscribe(({ data: { sourceTypeahead } }) => {
                    this.to.optionList = sourceTypeahead.map(s => {
                        return { value: s.citationId, label: s.citationId, source: s };
                    });
                    // TODO implement this search as an observable to avoid detectChanges
                    this.changeDetectorRef.detectChanges();
                });
            };
        }
        onModelUpdated(e) {
            this.form.patchValue(e);
            // TODO determine if detecteChanges() required here
            this.changeDetectorRef.detectChanges();
            this.to.triggerParentSubmit();
        }
    }
    SourceSelectorTypeaheadComponent.ɵfac = function SourceSelectorTypeaheadComponent_Factory(t) { return new (t || SourceSelectorTypeaheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["CitationTypeaheadGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    SourceSelectorTypeaheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SourceSelectorTypeaheadComponent, selectors: [["cvc-source-selector-typeahead"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [["nzShowSearch", "", "nzServerSearch", "", 3, "formControl", "formlyAttributes", "nzPlaceHolder", "nzNotFoundContent", "nzShowArrow", "nzFilterOption", "ngModelChange", "nzOnSearch"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-form-item-explain", 4, "ngIf"], ["sourceLoader", ""], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [1, "ant-form-item-explain"], [1, "source-citation"], [3, "ngSwitch"], ["class", "ant-form-item-explain", 4, "ngSwitchCase"], [3, "model", "sourceType", "citationId", "modelUpdate", "sourceTypeChange", "citationIdChange", 4, "ngSwitchCase"], [3, "model", "sourceType", "citationId", "modelUpdate", "sourceTypeChange", "citationIdChange"]], template: function SourceSelectorTypeaheadComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SourceSelectorTypeaheadComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.to.modelChange($event); })("nzOnSearch", function SourceSelectorTypeaheadComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.to.onSearch($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SourceSelectorTypeaheadComponent_nz_option_1_Template, 2, 4, "nz-option", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SourceSelectorTypeaheadComponent_div_2_Template, 4, 1, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SourceSelectorTypeaheadComponent_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formControl)("formlyAttributes", ctx.field)("nzPlaceHolder", !ctx.to.placeholder ? null : ctx.to.placeholder)("nzNotFoundContent", _r2)("nzShowArrow", ctx.to.showArrow)("nzFilterOption", ctx.to.filterOption);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.to.optionList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.citation.length > 0);
            }
        }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _source_selector_loader_source_selector_loader_component__WEBPACK_IMPORTED_MODULE_6__["SourceSelectorLoaderComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.loading-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.source-citation[_ngcontent-%COMP%] {\n  font-style: oblique;\n}"], changeDetection: 0 });
    return SourceSelectorTypeaheadComponent;
})();
const TypeaheadSelectorType = {
    name: 'source-selector-typeahead',
    component: SourceSelectorTypeaheadComponent,
    wrappers: ['form-field'],
};


/***/ }),

/***/ "Py2y":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector-typeahead/source-selector-typeahead.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: SourceSelectorTypeaheadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorTypeaheadModule", function() { return SourceSelectorTypeaheadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _source_selector_typeahead_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source-selector-typeahead.type */ "ONVL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _source_selector_loader_source_selector_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../source-selector-loader/source-selector-loader.module */ "Cn5k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const formlyConfig = {
    types: [_source_selector_typeahead_type__WEBPACK_IMPORTED_MODULE_2__["TypeaheadSelectorType"]]
};
let SourceSelectorTypeaheadModule = /*@__PURE__*/ (() => {
    class SourceSelectorTypeaheadModule {
    }
    SourceSelectorTypeaheadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SourceSelectorTypeaheadModule });
    SourceSelectorTypeaheadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function SourceSelectorTypeaheadModule_Factory(t) { return new (t || SourceSelectorTypeaheadModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectModule"],
                _source_selector_loader_source_selector_loader_module__WEBPACK_IMPORTED_MODULE_5__["SourceSelectorLoaderModule"]
            ]] });
    return SourceSelectorTypeaheadModule;
})();


/***/ }),

/***/ "SS1O":
/*!****************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/$enum.js ***!
  \****************************************************/
/*! exports provided: $enum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$enum", function() { return $enum; });
/* harmony import */ var _EnumWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumWrapper */ "pnaZ");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ "6Bey");
/* harmony import */ var _visitEnumValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitEnumValue */ "drHy");
/* harmony import */ var _mapEnumValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapEnumValue */ "5V0L");




var enumWrapperInstancesCache = new WeakMap();
function $enum(enumObj) {
    var result = enumWrapperInstancesCache.get(enumObj);
    if (!result) {
        result = new _EnumWrapper__WEBPACK_IMPORTED_MODULE_0__["EnumWrapper"](enumObj);
        enumWrapperInstancesCache.set(enumObj, result);
    }
    return result;
}
$enum.handleNull = _symbols__WEBPACK_IMPORTED_MODULE_1__["handleNull"];
$enum.handleUndefined = _symbols__WEBPACK_IMPORTED_MODULE_1__["handleUndefined"];
$enum.handleUnexpected = _symbols__WEBPACK_IMPORTED_MODULE_1__["handleUnexpected"];
$enum.unhandledEntry = _symbols__WEBPACK_IMPORTED_MODULE_1__["unhandledEntry"];
$enum.visitValue = _visitEnumValue__WEBPACK_IMPORTED_MODULE_2__["visitEnumValue"];
$enum.mapValue = _mapEnumValue__WEBPACK_IMPORTED_MODULE_3__["mapEnumValue"];
//# sourceMappingURL=$enum.js.map

/***/ }),

/***/ "Tdft":
/*!********************************************************!*\
  !*** ./src/app/forms/shared/input-formatters/index.ts ***!
  \********************************************************/
/*! exports provided: toNullableString, toNullableInput, toClinvarInput, toCoordinateInput, toNullableReferenceBuildInput, undefinedIfEmpty, Chromosomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "KFqD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNullableString", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["toNullableString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNullableInput", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["toNullableInput"]; });

/* harmony import */ var _variant_revise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-revise */ "fB+P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toClinvarInput", function() { return _variant_revise__WEBPACK_IMPORTED_MODULE_1__["toClinvarInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCoordinateInput", function() { return _variant_revise__WEBPACK_IMPORTED_MODULE_1__["toCoordinateInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNullableReferenceBuildInput", function() { return _variant_revise__WEBPACK_IMPORTED_MODULE_1__["toNullableReferenceBuildInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "undefinedIfEmpty", function() { return _variant_revise__WEBPACK_IMPORTED_MODULE_1__["undefinedIfEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chromosomes", function() { return _variant_revise__WEBPACK_IMPORTED_MODULE_1__["Chromosomes"]; });





/***/ }),

/***/ "XuDB":
/*!**********************************************************************!*\
  !*** ./src/app/forms/shared/types/multi-field/multi-field.module.ts ***!
  \**********************************************************************/
/*! exports provided: MultiFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFieldModule", function() { return MultiFieldModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _multi_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-field.type */ "MB5z");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const formlyConfig = {
    types: [_multi_field_type__WEBPACK_IMPORTED_MODULE_6__["MultiFieldType"]]
};
let MultiFieldModule = /*@__PURE__*/ (() => {
    class MultiFieldModule {
    }
    MultiFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MultiFieldModule });
    MultiFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function MultiFieldModule_Factory(t) { return new (t || MultiFieldModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyModule"].forChild(formlyConfig),
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
            ]] });
    return MultiFieldModule;
})();


/***/ }),

/***/ "d4r5":
/*!************************************************************************************************!*\
  !*** ./src/app/forms/shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.type.ts ***!
  \************************************************************************************************/
/*! exports provided: MultiFieldAddBtnComponent, MultiFieldAddBtnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFieldAddBtnComponent", function() { return MultiFieldAddBtnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFieldAddBtnType", function() { return MultiFieldAddBtnType; });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");





let MultiFieldAddBtnComponent = /*@__PURE__*/ (() => {
    class MultiFieldAddBtnComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["FieldType"] {
        constructor() { super(); }
    }
    MultiFieldAddBtnComponent.ɵfac = function MultiFieldAddBtnComponent_Factory(t) { return new (t || MultiFieldAddBtnComponent)(); };
    MultiFieldAddBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiFieldAddBtnComponent, selectors: [["cvc-multi-field-add-btn"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["type", "submit", "nz-button", "", "nzType", "primary", "nzSize", "small", "nzBlock", "", 3, "disabled"]], template: function MultiFieldAddBtnComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.to.disabled);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.to.label);
            }
        }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: [""], encapsulation: 2, changeDetection: 0 });
    return MultiFieldAddBtnComponent;
})();
const MultiFieldAddBtnType = {
    name: 'multi-field-add-btn',
    component: MultiFieldAddBtnComponent,
};


/***/ }),

/***/ "drHy":
/*!*************************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/visitEnumValue.js ***!
  \*************************************************************/
/*! exports provided: visitEnumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitEnumValue", function() { return visitEnumValue; });
/* harmony import */ var _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumValueVisitee */ "xBCc");

function visitEnumValue(value) {
    if (value === null) {
        return new _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_0__["EnumValueVisiteeWithNull"]();
    }
    else if (value === undefined) {
        return new _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_0__["EnumValueVisiteeWithUndefined"]();
    }
    else {
        return new _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_0__["EnumValueVisitee"](value);
    }
}
//# sourceMappingURL=visitEnumValue.js.map

/***/ }),

/***/ "fB+P":
/*!*****************************************************************!*\
  !*** ./src/app/forms/shared/input-formatters/variant-revise.ts ***!
  \*****************************************************************/
/*! exports provided: toClinvarInput, toCoordinateInput, toNullableReferenceBuildInput, undefinedIfEmpty, Chromosomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClinvarInput", function() { return toClinvarInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCoordinateInput", function() { return toCoordinateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNullableReferenceBuildInput", function() { return toNullableReferenceBuildInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedIfEmpty", function() { return undefinedIfEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chromosomes", function() { return Chromosomes; });
function toClinvarInput(ids) {
    let na, nf;
    if (ids && ids.includes('N/A')) {
        ids = undefined;
        nf = undefined;
        na = true;
    }
    else if (!ids) {
        ids = undefined;
        na = undefined;
        nf = true;
    }
    return {
        ids: ids ? ids.map(id => +id) : undefined,
        noneFound: nf,
        notApplicable: na
    };
}
function toCoordinateInput(coord) {
    return {
        chromosome: undefinedIfEmpty(coord.chromosome),
        representativeTranscript: undefinedIfEmpty(coord.representativeTranscript),
        start: coord.start ? +coord.start : undefined,
        stop: coord.stop ? +coord.stop : undefined,
    };
}
function toNullableReferenceBuildInput(build) {
    let nRefBuild = { value: undefined, unset: undefined };
    if (build) {
        nRefBuild.value = build;
    }
    else {
        nRefBuild.unset = true;
    }
    return nRefBuild;
}
function undefinedIfEmpty(inVal) {
    let outVal;
    if (inVal && inVal.length > 0) {
        outVal = inVal;
    }
    else {
        outVal = undefined;
    }
    return outVal;
}
const Chromosomes = [
    { value: undefined, label: '' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: 'X', label: 'X' },
    { value: 'Y', label: 'Y' },
    { value: 'MT', label: 'MT' }
];


/***/ }),

/***/ "gEWx":
/*!****************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/index.js ***!
  \****************************************************/
/*! exports provided: EnumWrapper, EnumValueVisitee, EnumValueVisiteeWithNull, EnumValueVisiteeWithUndefined, EnumValueMappee, EnumValueMappeeWithNull, EnumValueMappeeWithUndefined, $enum, mapEnumValue, visitEnumValue, unhandledEntry, handleNull, handleUndefined, handleUnexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnumWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumWrapper */ "pnaZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumWrapper", function() { return _EnumWrapper__WEBPACK_IMPORTED_MODULE_0__["EnumWrapper"]; });

/* harmony import */ var _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnumValueVisitee */ "xBCc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisitee", function() { return _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_1__["EnumValueVisitee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisiteeWithNull", function() { return _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_1__["EnumValueVisiteeWithNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisiteeWithUndefined", function() { return _EnumValueVisitee__WEBPACK_IMPORTED_MODULE_1__["EnumValueVisiteeWithUndefined"]; });

/* harmony import */ var _EnumValueMappee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnumValueMappee */ "7I59");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappee", function() { return _EnumValueMappee__WEBPACK_IMPORTED_MODULE_2__["EnumValueMappee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappeeWithNull", function() { return _EnumValueMappee__WEBPACK_IMPORTED_MODULE_2__["EnumValueMappeeWithNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumValueMappeeWithUndefined", function() { return _EnumValueMappee__WEBPACK_IMPORTED_MODULE_2__["EnumValueMappeeWithUndefined"]; });

/* harmony import */ var _$enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./$enum */ "SS1O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$enum", function() { return _$enum__WEBPACK_IMPORTED_MODULE_3__["$enum"]; });

/* harmony import */ var _mapEnumValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapEnumValue */ "5V0L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumValue", function() { return _mapEnumValue__WEBPACK_IMPORTED_MODULE_4__["mapEnumValue"]; });

/* harmony import */ var _visitEnumValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitEnumValue */ "drHy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitEnumValue", function() { return _visitEnumValue__WEBPACK_IMPORTED_MODULE_5__["visitEnumValue"]; });

/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbols */ "6Bey");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhandledEntry", function() { return _symbols__WEBPACK_IMPORTED_MODULE_6__["unhandledEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleNull", function() { return _symbols__WEBPACK_IMPORTED_MODULE_6__["handleNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleUndefined", function() { return _symbols__WEBPACK_IMPORTED_MODULE_6__["handleUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleUnexpected", function() { return _symbols__WEBPACK_IMPORTED_MODULE_6__["handleUnexpected"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "hF+2":
/*!*************************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/objectKeysUtil.js ***!
  \*************************************************************/
/*! exports provided: isNonNumericKey, getOwnEnumerableNonNumericKeysES6, getOwnEnumerableNonNumericKeysES5, getOwnEnumerableNonNumericKeysES3, getOwnEnumerableNonNumericKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNumericKey", function() { return isNonNumericKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnEnumerableNonNumericKeysES6", function() { return getOwnEnumerableNonNumericKeysES6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnEnumerableNonNumericKeysES5", function() { return getOwnEnumerableNonNumericKeysES5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnEnumerableNonNumericKeysES3", function() { return getOwnEnumerableNonNumericKeysES3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnEnumerableNonNumericKeys", function() { return getOwnEnumerableNonNumericKeys; });
function isNonNumericKey(key) {
    return key !== String(parseFloat(key));
}
function getOwnEnumerableNonNumericKeysES6(obj) {
    return Object.getOwnPropertyNames(obj).filter(function (key) {
        return obj.propertyIsEnumerable(key) && isNonNumericKey(key);
    });
}
function getOwnEnumerableNonNumericKeysES5(obj) {
    return Object.keys(obj).filter(isNonNumericKey);
}
function getOwnEnumerableNonNumericKeysES3(obj) {
    var result = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key) &&
            obj.propertyIsEnumerable(key) &&
            isNonNumericKey(key)) {
            result.push(key);
        }
    }
    return result;
}
var getOwnEnumerableNonNumericKeys = Object.getOwnPropertyNames
    ? getOwnEnumerableNonNumericKeysES6
    : Object.keys
        ? getOwnEnumerableNonNumericKeysES5
        : getOwnEnumerableNonNumericKeysES3;
//# sourceMappingURL=objectKeysUtil.js.map

/***/ }),

/***/ "i93x":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/forms/sources/types/source-input/source-selector/source-selector-loader/source-selector-loader.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SourceSelectorLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSelectorLoaderComponent", function() { return SourceSelectorLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/form-errors-alert/form-errors-alert.component */ "IjnV");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");















function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Found citation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.foundCitation);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_2_ng_template_2_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _r8);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " '");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "' created. ");
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.foundCitation);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_3_ng_template_2_Template, 4, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _r10);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_form_item_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-form-errors-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.createErrors);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_5_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onCreateSourceStub($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create\u00A0'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "'\u00A0 CIViC Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r6.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.foundCitation);
    }
}
function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SourceSelectorLoaderComponent_ng_container_0_nz_space_item_6_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onAcceptSource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Source to List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function SourceSelectorLoaderComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_2_Template, 4, 1, "nz-space-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_3_Template, 4, 1, "nz-space-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SourceSelectorLoaderComponent_ng_container_0_nz_form_item_4_Template, 2, 1, "nz-form-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_5_Template, 6, 2, "nz-space-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SourceSelectorLoaderComponent_ng_container_0_nz_space_item_6_Template, 3, 0, "nz-space-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.createSuccess === false && ctx_r0.createErrors.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.createSuccess === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.createErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.createSuccess === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.createSuccess === true);
    }
}
function SourceSelectorLoaderComponent_ng_template_1_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Source not known to CIViC, fetch citation from ", ctx_r16.sourceTypeKey, "? ");
    }
}
function SourceSelectorLoaderComponent_ng_template_1_span_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }
    if (rf & 2) {
        const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Citation not found for ", ctx_r19.sourceTypeKey, ": ", ctx_r19.citationId, ". ");
    }
}
function SourceSelectorLoaderComponent_ng_template_1_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SourceSelectorLoaderComponent_ng_template_1_span_3_ng_template_2_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _r18);
    }
}
function SourceSelectorLoaderComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SourceSelectorLoaderComponent_ng_template_1_span_2_Template, 3, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SourceSelectorLoaderComponent_ng_template_1_span_3_Template, 4, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SourceSelectorLoaderComponent_ng_template_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onExistenceQuery($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Fetch Citation for\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showPrompt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.existenceFail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r2.isChecking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.sourceTypeKey, " ", ctx_r2.citationId, "");
    }
}
let SourceSelectorLoaderComponent = /*@__PURE__*/ (() => {
    class SourceSelectorLoaderComponent {
        constructor(existenceCheckQuery, createSourceStubQuery, changeDetectorRef) {
            this.existenceCheckQuery = existenceCheckQuery;
            this.createSourceStubQuery = createSourceStubQuery;
            this.changeDetectorRef = changeDetectorRef;
            this.modelUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.citationIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.sourceTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.showPrompt = true;
            this.isChecking = false;
            this.existenceFail = false;
            this.existenceError = [];
            this.foundCitation = undefined;
            this.isCreating = false;
            this.createSuccess = false;
            this.createErrors = [];
        }
        set sourceType(type) {
            this._sourceType = type;
            this.sourceTypeKey = Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_3__["$enum"])(_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SourceSource"]).getKeyOrThrow(type);
        }
        get sourceType() {
            return this._sourceType;
        }
        onExistenceQuery(e) {
            if (e) {
                e.preventDefault();
            } // prevent form submit
            this.isChecking = true;
            this.foundCitation = undefined;
            this.existenceCheckQuery
                .fetch({
                sourceType: this.sourceType,
                citationId: +this.citationId
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                this.isChecking = false;
                // TODO figure out why this detectChanges call is necessary
                this.changeDetectorRef.detectChanges();
            }))
                .subscribe({
                next: ({ data: { remoteCitation } }) => {
                    if (remoteCitation !== null) {
                        this.foundCitation = remoteCitation;
                    }
                    else {
                        this.showPrompt = false;
                        this.existenceFail = true;
                    }
                },
                error: (error) => {
                    this.showPrompt = false;
                    this.existenceError = error.graphQLErrors.map(e => e.message);
                },
                complete: () => {
                    this.existenceError = [];
                }
            });
        }
        onCreateSourceStub(e) {
            // TODO determine if this preventDefault is actuall required
            if (e) {
                e.preventDefault();
            } // prevent form submit
            this.isCreating = true;
            this.createSuccess = false;
            this.createSourceStubQuery
                .mutate({
                input: {
                    citationId: +this.citationId,
                    sourceType: this.sourceType
                }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                this.isCreating = false;
                // TODO figure out why this detectChanges call is necessary
                this.changeDetectorRef.detectChanges();
            }))
                .subscribe({
                next: ({ data }) => {
                    var _a;
                    console.log(data);
                    const source = (_a = data === null || data === void 0 ? void 0 : data.addRemoteCitation) === null || _a === void 0 ? void 0 : _a.newSource;
                    this.sourceStub = source;
                    this.createSuccess = true;
                },
                error: (error) => {
                    this.showPrompt = false;
                    this.createSuccess = false;
                    this.createErrors = error.graphQLErrors.map(e => e.message);
                },
                complete: () => {
                    this.createErrors = [];
                }
            });
        }
        onAcceptSource(e) {
            if (e) {
                e.preventDefault();
            } // prevent form submit
            console.log('source accepted');
            const model = Object.assign(Object.assign({}, this.model), { id: this.sourceStub.id, citation: this.foundCitation, citationId: this.citationId });
            this.modelUpdate.emit(model);
        }
        ngAfterContentInit() {
            console.log('model');
        }
    }
    SourceSelectorLoaderComponent.ɵfac = function SourceSelectorLoaderComponent_Factory(t) { return new (t || SourceSelectorLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["CitationExistenceCheckGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["CreateSourceStubGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    SourceSelectorLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SourceSelectorLoaderComponent, selectors: [["cvc-source-loader"]], inputs: { model: "model", citationId: "citationId", sourceType: "sourceType" }, outputs: { modelUpdate: "modelUpdate", citationIdChange: "citationIdChange", sourceTypeChange: "sourceTypeChange" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["fetchCitation", ""], ["nzDirection", "vertical"], [4, "ngIf"], ["nzType", "info", "nzShowIcon", "", 3, "nzMessage"], ["foundCitationMsg", ""], ["nzType", "success", "nzShowIcon", "", 3, "nzMessage"], ["createdMsg", ""], [3, "errors"], ["type", "submit", "nz-button", "", "nzBlock", "", "nzType", "primary", "nzSize", "default", 3, "nzLoading", "click"], ["type", "submit", "nz-button", "", "nzBlock", "", "nzType", "primary", "nzSize", "default", 3, "click"], ["nz-typography", "", 4, "ngIf"], ["nz-typography", ""], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "twotone"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], ["existenceFail", ""]], template: function SourceSelectorLoaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SourceSelectorLoaderComponent_ng_container_0_Template, 7, 5, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SourceSelectorLoaderComponent_ng_template_1_Template, 9, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.foundCitation)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__["NzAlertComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_9__["CvcFormErrorsAlertComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-space-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}"] });
    return SourceSelectorLoaderComponent;
})();


/***/ }),

/***/ "pnaZ":
/*!**********************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/EnumWrapper.js ***!
  \**********************************************************/
/*! exports provided: EnumWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumWrapper", function() { return EnumWrapper; });
/* harmony import */ var _objectKeysUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectKeysUtil */ "hF+2");

var EnumWrapper = (function () {
    function EnumWrapper(enumObj) {
        this.enumObj = enumObj;
        this.keysList = Object.freeze(Object(_objectKeysUtil__WEBPACK_IMPORTED_MODULE_0__["getOwnEnumerableNonNumericKeys"])(enumObj));
        var length = this.keysList.length;
        var valuesList = new Array(length);
        var keysByValueMap = new Map();
        for (var index = 0; index < length; ++index) {
            var key = this.keysList[index];
            var value = enumObj[key];
            valuesList[index] = value;
            keysByValueMap.set(value, key);
            this[index] = Object.freeze([key, value]);
        }
        this.valuesList = Object.freeze(valuesList);
        this.keysByValueMap = keysByValueMap;
        this.size = this.length = length;
        Object.freeze(this);
    }
    EnumWrapper.prototype.toString = function () {
        return "[object EnumWrapper]";
    };
    EnumWrapper.prototype.keys = function () {
        var _a;
        var _this = this;
        var index = 0;
        return _a = {
                next: function () {
                    var isDone = index >= _this.length;
                    var result = {
                        done: isDone,
                        value: _this.keysList[index]
                    };
                    ++index;
                    return result;
                }
            },
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a;
    };
    EnumWrapper.prototype.values = function () {
        var _a;
        var _this = this;
        var index = 0;
        return _a = {
                next: function () {
                    var isDone = index >= _this.length;
                    var result = {
                        done: isDone,
                        value: _this.valuesList[index]
                    };
                    ++index;
                    return result;
                }
            },
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a;
    };
    EnumWrapper.prototype.entries = function () {
        var _a;
        var _this = this;
        var index = 0;
        return _a = {
                next: function () {
                    var isDone = index >= _this.length;
                    var result = {
                        done: isDone,
                        value: _this[index]
                    };
                    ++index;
                    return result;
                }
            },
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a;
    };
    EnumWrapper.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    EnumWrapper.prototype.forEach = function (iteratee, context) {
        var length = this.length;
        for (var index = 0; index < length; ++index) {
            var entry = this[index];
            iteratee.call(context, entry[1], entry[0], this, index);
        }
    };
    EnumWrapper.prototype.map = function (iteratee, context) {
        var length = this.length;
        var result = new Array(length);
        for (var index = 0; index < length; ++index) {
            var entry = this[index];
            result[index] = iteratee.call(context, entry[1], entry[0], this, index);
        }
        return result;
    };
    EnumWrapper.prototype.getKeys = function () {
        return this.keysList.slice();
    };
    EnumWrapper.prototype.getValues = function () {
        return this.valuesList.slice();
    };
    EnumWrapper.prototype.getEntries = function () {
        return Array.prototype.slice.call(this);
    };
    EnumWrapper.prototype.indexOfKey = function (key) {
        return this.keysList.indexOf(key);
    };
    EnumWrapper.prototype.indexOfValue = function (value) {
        return this.valuesList.indexOf(value);
    };
    EnumWrapper.prototype.isKey = function (key) {
        return (key != null &&
            Object(_objectKeysUtil__WEBPACK_IMPORTED_MODULE_0__["isNonNumericKey"])(key) &&
            this.enumObj.hasOwnProperty(key));
    };
    EnumWrapper.prototype.asKeyOrThrow = function (key) {
        if (this.isKey(key)) {
            return key;
        }
        else {
            throw new Error("Unexpected key: " + key + ". Expected one of: " + this.getValues());
        }
    };
    EnumWrapper.prototype.asKeyOrDefault = function (key, defaultKey) {
        if (this.isKey(key)) {
            return key;
        }
        else {
            return defaultKey;
        }
    };
    EnumWrapper.prototype.isValue = function (value) {
        return value != null && this.keysByValueMap.has(value);
    };
    EnumWrapper.prototype.asValueOrThrow = function (value) {
        if (this.isValue(value)) {
            return value;
        }
        else {
            throw new Error("Unexpected value: " + value + ". Expected one of: " + this.getValues());
        }
    };
    EnumWrapper.prototype.asValueOrDefault = function (value, defaultValue) {
        if (this.isValue(value)) {
            return value;
        }
        else {
            return defaultValue;
        }
    };
    EnumWrapper.prototype.getKeyOrThrow = function (value) {
        var result = value != null ? this.keysByValueMap.get(value) : undefined;
        if (result != null) {
            return result;
        }
        else {
            throw new Error("Unexpected value: " + value + ". Expected one of: " + this.getValues());
        }
    };
    EnumWrapper.prototype.getKeyOrDefault = function (value, defaultKey) {
        var result = value != null ? this.keysByValueMap.get(value) : undefined;
        if (result != null) {
            return result;
        }
        else {
            return defaultKey;
        }
    };
    EnumWrapper.prototype.getValueOrThrow = function (key) {
        return this.enumObj[this.asKeyOrThrow(key)];
    };
    EnumWrapper.prototype.getValueOrDefault = function (key, defaultValue) {
        if (this.isKey(key)) {
            return this.enumObj[key];
        }
        else {
            return defaultValue;
        }
    };
    return EnumWrapper;
}());

EnumWrapper.prototype[Symbol.toStringTag] = "EnumWrapper";
//# sourceMappingURL=EnumWrapper.js.map

/***/ }),

/***/ "xBCc":
/*!***************************************************************!*\
  !*** ./node_modules/ts-enum-util/dist/es/EnumValueVisitee.js ***!
  \***************************************************************/
/*! exports provided: EnumValueVisitee, EnumValueVisiteeWithNull, EnumValueVisiteeWithUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisitee", function() { return EnumValueVisitee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisiteeWithNull", function() { return EnumValueVisiteeWithNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumValueVisiteeWithUndefined", function() { return EnumValueVisiteeWithUndefined; });
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols */ "6Bey");
/* harmony import */ var _createUnhandledEntryError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createUnhandledEntryError */ "5yrI");


var EnumValueVisitee = (function () {
    function EnumValueVisitee(value) {
        this.value = value;
    }
    EnumValueVisitee.prototype.with = function (visitor) {
        if (visitor.hasOwnProperty(this.value)) {
            var handler = visitor[this.value];
            return processEntry(handler, this.value);
        }
        else if (visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]]) {
            return processEntry(visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]], this.value);
        }
        else {
            throw new Error("Unexpected value: " + this.value);
        }
    };
    return EnumValueVisitee;
}());

var EnumValueVisiteeWithNull = (function () {
    function EnumValueVisiteeWithNull() {
    }
    EnumValueVisiteeWithNull.prototype.with = function (visitor) {
        if (visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleNull"]]) {
            return processEntry(visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleNull"]], null);
        }
        else if (visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]]) {
            return processEntry(visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]], null);
        }
        else {
            throw new Error("Unexpected value: null");
        }
    };
    return EnumValueVisiteeWithNull;
}());

var EnumValueVisiteeWithUndefined = (function () {
    function EnumValueVisiteeWithUndefined() {
    }
    EnumValueVisiteeWithUndefined.prototype.with = function (visitor) {
        if (visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUndefined"]]) {
            return processEntry(visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUndefined"]], undefined);
        }
        else if (visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]]) {
            return processEntry(visitor[_symbols__WEBPACK_IMPORTED_MODULE_0__["handleUnexpected"]], undefined);
        }
        else {
            throw new Error("Unexpected value: undefined");
        }
    };
    return EnumValueVisiteeWithUndefined;
}());

function processEntry(entry, value) {
    if (entry === _symbols__WEBPACK_IMPORTED_MODULE_0__["unhandledEntry"]) {
        throw Object(_createUnhandledEntryError__WEBPACK_IMPORTED_MODULE_1__["createUnhandledEntryError"])(value);
    }
    else {
        return entry(value);
    }
}
//# sourceMappingURL=EnumValueVisitee.js.map

/***/ })

}]);