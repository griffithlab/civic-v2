(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "/Egh":
/*!*************************************************************************!*\
  !*** ./src/app/views/genes/genes-revise/genes-revise-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GenesReviseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesReviseRoutingModule", function() { return GenesReviseRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _genes_revise_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genes-revise.view */ "Eut0");
/* harmony import */ var _genes_suggest_genes_suggest_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genes-suggest/genes-suggest.module */ "lNf3");
/* harmony import */ var _genes_suggest_genes_suggest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genes-suggest/genes-suggest.page */ "d0kG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _genes_revise_view__WEBPACK_IMPORTED_MODULE_1__["GenesReviseView"],
        data: { breadcrumb: 'Revise' },
        children: [
            { path: '', redirectTo: 'suggest', pathMatch: 'full' },
            {
                path: 'suggest',
                component: _genes_suggest_genes_suggest_page__WEBPACK_IMPORTED_MODULE_3__["GenesSuggestPage"],
                data: {
                    breadcrumb: 'Suggest Revision'
                }
            }
        ]
    }
];
let GenesReviseRoutingModule = /*@__PURE__*/ (() => {
    class GenesReviseRoutingModule {
    }
    GenesReviseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GenesReviseRoutingModule });
    GenesReviseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function GenesReviseRoutingModule_Factory(t) { return new (t || GenesReviseRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                _genes_suggest_genes_suggest_module__WEBPACK_IMPORTED_MODULE_2__["GenesSuggestModule"]
            ]] });
    return GenesReviseRoutingModule;
})();


/***/ }),

/***/ "4OYD":
/*!*******************************************************************!*\
  !*** ./src/app/forms/genes/forms/gene-revise/gene-revise.form.ts ***!
  \*******************************************************************/
/*! exports provided: GeneReviseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneReviseForm", function() { return GeneReviseForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/forms/shared/input-formatters */ "Tdft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _gene_revise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gene-revise.service */ "9F8t");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/form-errors-alert/form-errors-alert.component */ "IjnV");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/form-buttons/form-buttons.component */ "JL65");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






















function GeneReviseForm_ng_container_1_nz_form_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cvc-form-errors-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const errors_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errors", errors_r3);
    }
}
function GeneReviseForm_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GeneReviseForm_ng_container_1_nz_form_item_1_Template, 2, 1, "nz-form-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const errors_r3 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", errors_r3.length > 0);
    }
}
function GeneReviseForm_ng_container_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View it on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Revisions Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " or suggest another revision below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function GeneReviseForm_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GeneReviseForm_ng_container_3_ng_template_2_Template, 5, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDescription", _r6);
    }
}
function GeneReviseForm_nz_form_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "cvc-form-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "cvc-org-selector-btn-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedOrgChange", function GeneReviseForm_nz_form_item_6_Template_cvc_org_selector_btn_group_selectedOrgChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Suggest Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedOrg", ctx_r2.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.formGroup.valid);
    }
}
let GeneReviseForm = /*@__PURE__*/ (() => {
    class GeneReviseForm {
        constructor(viewerService, revisionService, revisableFieldsGQL) {
            this.viewerService = viewerService;
            this.revisionService = revisionService;
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
                        placeholder: 'Enter a description for this gene.',
                        required: false,
                    },
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
                            required: true,
                        },
                    },
                },
                {
                    key: 'comment',
                    type: 'comment-textarea',
                    templateOptions: {
                        label: 'Comment',
                        placeholder: 'Please enter a comment describing your revision.',
                        required: true,
                        minLength: 10,
                    },
                },
            ];
            // reset form upon successful submit
            this.submitSuccess$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((s) => {
                if (s && this.formOptions.resetModel) {
                    this.formOptions.resetModel();
                }
            });
        }
        ngOnInit() {
            // fetch latest revisable field values, update form fields
            this.revisableFieldsGQL
                .fetch({ geneId: this.geneId })
                .subscribe(({ data: { gene } }) => {
                if (gene) {
                    this.formModel = this.toFormModel(gene);
                }
                else {
                    // TODO: handle errors with subscribe({complete, error})
                    console.error('Could not retrieve gene.');
                }
                if (this.formOptions.updateInitialValue) {
                    this.formOptions.updateInitialValue();
                }
            });
        }
        toFormModel(gene) {
            return {
                id: gene.id,
                fields: Object.assign({}, gene),
                comment: '',
            };
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
        submitRevision(model) {
            this.revisionService
                .suggest(this.toRevisionInput(model));
        }
        toRevisionInput(model) {
            return Object.assign(Object.assign({}, model), { fields: {
                    description: Object(_app_forms_shared_input_formatters__WEBPACK_IMPORTED_MODULE_3__["toNullableString"])(model.fields.description),
                    sourceIds: model.fields.sources.map((s) => { return +s.id; }),
                }, organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.revisionService.cleanup();
        }
    }
    GeneReviseForm.ɵfac = function GeneReviseForm_Factory(t) { return new (t || GeneReviseForm)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_5__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gene_revise_service__WEBPACK_IMPORTED_MODULE_6__["GeneSuggestRevisionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_7__["GeneRevisableFieldsGQL"])); };
    GeneReviseForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GeneReviseForm, selectors: [["cvc-gene-revise-form"]], inputs: { geneId: "geneId" }, decls: 8, vars: 14, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "form", "fields", "model", "options", "modelChange"], [3, "errors"], ["nzType", "success", "nzMessage", "Suggested Revision Submitted", "nzShowIcon", "", 3, "nzDescription"], ["nzSize", "small"], ["successMessage", ""], ["routerLink", "../revisions"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small", 3, "disabled"]], template: function GeneReviseForm_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function GeneReviseForm_Template_form_ngSubmit_0_listener() { return ctx.submitRevision(ctx.formModel); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GeneReviseForm_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GeneReviseForm_ng_container_3_Template, 4, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "formly-form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("modelChange", function GeneReviseForm_Template_formly_form_modelChange_5_listener($event) { return ctx.formModel = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GeneReviseForm_nz_form_item_6_Template, 6, 2, "nz-form-item", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 8, ctx.submitError$));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 10, ctx.submitSuccess$));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.formGroup)("fields", ctx.formFields)("model", ctx.formModel)("options", ctx.formOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, ctx.submitSuccess$));
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__["FormlyForm"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], _shared_components_form_errors_alert_form_errors_alert_component__WEBPACK_IMPORTED_MODULE_12__["CvcFormErrorsAlertComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__["NzAlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["CvcFormButtonsComponent"], _shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_16__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveDirective"], _shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_19__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return GeneReviseForm;
})();


/***/ }),

/***/ "9F8t":
/*!**********************************************************************!*\
  !*** ./src/app/forms/genes/forms/gene-revise/gene-revise.service.ts ***!
  \**********************************************************************/
/*! exports provided: GeneSuggestRevisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneSuggestRevisionService", function() { return GeneSuggestRevisionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/entitytype-to-typename */ "wmZe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");






let GeneSuggestRevisionService = /*@__PURE__*/ (() => {
    class GeneSuggestRevisionService {
        constructor(suggestGeneRevisionGQL, networkErrorService) {
            this.suggestGeneRevisionGQL = suggestGeneRevisionGQL;
            this.networkErrorService = networkErrorService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            this.isSubmitting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.submitError$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        suggest(suggestGeneRevisionInput) {
            this.storeObj = {
                id: suggestGeneRevisionInput.id,
                __typename: Object(_app_core_utilities_entitytype_to_typename__WEBPACK_IMPORTED_MODULE_1__["entityTypeToTypename"])('Gene')
            };
            this.isSubmitting$.next(true);
            this.suggestGeneRevisionGQL.mutate({ input: suggestGeneRevisionInput }, {
                update: (cache, { data: { suggestGeneRevision } }) => {
                    cache.modify({
                        id: cache.identify(this.storeObj),
                        fields: {
                            revisions(existingRevisionConnection = []) {
                                // const newConnection = {
                                //   __typeName: 'RevisionConnection',
                                //   node: {
                                //     __ref: cache.identify(suggestGeneRevision.gene.revisions)
                                //   }
                                // };
                                return suggestGeneRevision.gene.revisions;
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
    GeneSuggestRevisionService.ɵfac = function GeneSuggestRevisionService_Factory(t) { return new (t || GeneSuggestRevisionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_4__["SuggestGeneRevisionGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"])); };
    GeneSuggestRevisionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GeneSuggestRevisionService, factory: GeneSuggestRevisionService.ɵfac, providedIn: 'root' });
    return GeneSuggestRevisionService;
})();


/***/ }),

/***/ "Eut0":
/*!***************************************************************!*\
  !*** ./src/app/views/genes/genes-revise/genes-revise.view.ts ***!
  \***************************************************************/
/*! exports provided: GenesReviseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesReviseView", function() { return GenesReviseView; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








function GenesReviseView_ng_container_0_Template(rf, ctx) {
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
        const gene_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", gene_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gene_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gene_r1.officialName, " ");
    }
}
let GenesReviseView = /*@__PURE__*/ (() => {
    class GenesReviseView {
        constructor(gql, route) {
            this.gql = gql;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                let observable = this.gql.watch({ geneId: +params.geneId }).valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.gene$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'gene'));
                this.commentsTotal$ = this.gene$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('comments', 'totalCount'));
                this.flagsTotal$ = this.gene$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('flags', 'totalCount'));
                this.revisionsTotal$ = this.gene$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('revisions', 'totalCount'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    GenesReviseView.ɵfac = function GenesReviseView_Factory(t) { return new (t || GenesReviseView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["GeneDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    GenesReviseView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GenesReviseView, selectors: [["genes-revise"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], [1, "site-page-header"], ["cvcFlaggableOptions", ""], ["nz-icon", "", "nzType", "civic:gene"], [1, "content"]], template: function GenesReviseView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GenesReviseView_ng_container_0_Template, 12, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.gene$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderSubtitleDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return GenesReviseView;
})();


/***/ }),

/***/ "MrW/":
/*!*****************************************************************!*\
  !*** ./src/app/views/genes/genes-revise/genes-revise.module.ts ***!
  \*****************************************************************/
/*! exports provided: GenesReviseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesReviseModule", function() { return GenesReviseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _genes_revise_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genes-revise-routing.module */ "/Egh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let GenesReviseModule = /*@__PURE__*/ (() => {
    class GenesReviseModule {
    }
    GenesReviseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: GenesReviseModule });
    GenesReviseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function GenesReviseModule_Factory(t) { return new (t || GenesReviseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _genes_revise_routing_module__WEBPACK_IMPORTED_MODULE_5__["GenesReviseRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__["CvcSectionNavigationModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            ]] });
    return GenesReviseModule;
})();


/***/ }),

/***/ "WBE0":
/*!*********************************************************************!*\
  !*** ./src/app/forms/genes/forms/gene-revise/gene-revise.module.ts ***!
  \*********************************************************************/
/*! exports provided: GeneSuggestRevisionFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneSuggestRevisionFormModule", function() { return GeneSuggestRevisionFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/forms/shared/components/form-errors-alert/form-errors-alert.module */ "CtWS");
/* harmony import */ var _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/forms/shared/components/form-buttons/form-buttons.module */ "6fd8");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/forms/shared/types/multi-field/multi-field.module */ "XuDB");
/* harmony import */ var _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/forms/sources/types/source-input/source-input.module */ "J/XB");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let GeneSuggestRevisionFormModule = /*@__PURE__*/ (() => {
    class GeneSuggestRevisionFormModule {
    }
    GeneSuggestRevisionFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: GeneSuggestRevisionFormModule });
    GeneSuggestRevisionFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function GeneSuggestRevisionFormModule_Factory(t) { return new (t || GeneSuggestRevisionFormModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_13__["NgxJsonViewerModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzGridModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forChild(),
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_5__["CvcOrgSelectorBtnGroupModule"],
                _app_forms_shared_components_form_errors_alert_form_errors_alert_module__WEBPACK_IMPORTED_MODULE_8__["CvcFormErrorsAlertModule"],
                _app_forms_shared_components_form_buttons_form_buttons_module__WEBPACK_IMPORTED_MODULE_9__["CvcFormButtonsModule"],
                _app_forms_shared_types_multi_field_multi_field_module__WEBPACK_IMPORTED_MODULE_11__["MultiFieldModule"],
                _app_forms_sources_types_source_input_source_input_module__WEBPACK_IMPORTED_MODULE_12__["SourceInputModule"],
            ]] });
    return GeneSuggestRevisionFormModule;
})();


/***/ }),

/***/ "d0kG":
/*!******************************************************************************!*\
  !*** ./src/app/views/genes/genes-revise/genes-suggest/genes-suggest.page.ts ***!
  \******************************************************************************/
/*! exports provided: GenesSuggestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesSuggestPage", function() { return GenesSuggestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _forms_genes_forms_gene_revise_gene_revise_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../forms/genes/forms/gene-revise/gene-revise.form */ "4OYD");








function GenesSuggestPage_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-gene-revise-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("geneId", ctx_r0.geneId);
    }
}
function GenesSuggestPage_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading Gene...");
    }
}
function GenesSuggestPage_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading gene...");
    }
}
const _c0 = function () { return { rows: 1 }; };
const _c1 = function () { return { rows: 3 }; };
const _c2 = function () { return { rows: 4 }; };
const _c3 = function () { return { rows: 5 }; };
let GenesSuggestPage = /*@__PURE__*/ (() => {
    class GenesSuggestPage {
        constructor(route) {
            this.route = route;
            this.routeParams$ = this.route.params.subscribe((params) => {
                this.geneId = +params.geneId;
            });
        }
        ngOnDestroy() {
            this.routeParams$.unsubscribe();
        }
    }
    GenesSuggestPage.ɵfac = function GenesSuggestPage_Factory(t) { return new (t || GenesSuggestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    GenesSuggestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenesSuggestPage, selectors: [["cvc-genes-suggest"]], decls: 18, vars: 11, consts: [[3, "nzGutter"], ["nzSpan", "16"], [4, "ngIf", "ngIfElse"], ["loadingGene", ""], ["nzSpan", "8"], ["nzTitle", "Instructions", "nz-type", "inner"], ["nzDirection", "vertical", 2, "width", "100%"], [3, "nzParagraph"], [3, "geneId"]], template: function GenesSuggestPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenesSuggestPage_ng_container_2_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GenesSuggestPage_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GenesSuggestPage_ng_template_16_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.geneId)("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_6__["NzSkeletonComponent"], _forms_genes_forms_gene_revise_gene_revise_form__WEBPACK_IMPORTED_MODULE_7__["GeneReviseForm"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return GenesSuggestPage;
})();


/***/ }),

/***/ "lNf3":
/*!********************************************************************************!*\
  !*** ./src/app/views/genes/genes-revise/genes-suggest/genes-suggest.module.ts ***!
  \********************************************************************************/
/*! exports provided: GenesSuggestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesSuggestModule", function() { return GenesSuggestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _app_forms_genes_forms_gene_revise_gene_revise_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/forms/genes/forms/gene-revise/gene-revise.module */ "WBE0");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










let GenesSuggestModule = /*@__PURE__*/ (() => {
    class GenesSuggestModule {
    }
    GenesSuggestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: GenesSuggestModule });
    GenesSuggestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function GenesSuggestModule_Factory(t) { return new (t || GenesSuggestModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__["NzSkeletonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderModule"],
                _app_forms_genes_forms_gene_revise_gene_revise_module__WEBPACK_IMPORTED_MODULE_4__["GeneSuggestRevisionFormModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_8__["CvcSectionNavigationModule"],
            ]] });
    return GenesSuggestModule;
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