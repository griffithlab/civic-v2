(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "V/pu":
/*!**********************************************************************!*\
  !*** ./src/app/views/diseases/diseases-home/diseases-home.module.ts ***!
  \**********************************************************************/
/*! exports provided: DiseasesHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesHomeModule", function() { return DiseasesHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_diseases_diseases_table_diseases_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/diseases/diseases-table/diseases-table.module */ "eZGx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let DiseasesHomeModule = /*@__PURE__*/ (() => {
    class DiseasesHomeModule {
    }
    DiseasesHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DiseasesHomeModule });
    DiseasesHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function DiseasesHomeModule_Factory(t) { return new (t || DiseasesHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                _app_components_diseases_diseases_table_diseases_table_module__WEBPACK_IMPORTED_MODULE_4__["CvcDiseasesTableModule"],
            ]] });
    return DiseasesHomeModule;
})();


/***/ }),

/***/ "VJHB":
/*!*****************************************************************************!*\
  !*** ./src/app/views/diseases/diseases-detail/diseases-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DiseasesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesDetailComponent", function() { return DiseasesDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");












function DiseasesDetailComponent_ng_container_0_nz_page_header_extra_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "cvc-link-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const disease_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", disease_r1.diseaseUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "DOID:" + disease_r1.doid, " ");
    }
}
function DiseasesDetailComponent_ng_container_0_nz_descriptions_item_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const disease_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", disease_r1.diseaseAliases.join(", "), " ");
    }
}
function DiseasesDetailComponent_ng_container_0_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DiseasesDetailComponent_ng_container_0_nz_page_header_extra_7_Template, 3, 2, "nz-page-header-extra", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-descriptions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DiseasesDetailComponent_ng_container_0_nz_descriptions_item_11_Template, 2, 1, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const disease_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", disease_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", disease_r1.doid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", disease_r1.diseaseAliases.length > 0);
    }
}
let DiseasesDetailComponent = /*@__PURE__*/ (() => {
    class DiseasesDetailComponent {
        constructor(route, gql) {
            this.route = route;
            this.gql = gql;
            this.routeSub = this.route.params.subscribe((params) => {
                this.diseaseId = +params.diseaseId;
                this.queryRef = this.gql.watch({
                    diseaseId: this.diseaseId
                });
                let observable = this.queryRef.valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.disease$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'disease'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    DiseasesDetailComponent.ɵfac = function DiseasesDetailComponent_Factory(t) { return new (t || DiseasesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["DiseaseDetailGQL"])); };
    DiseasesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DiseasesDetailComponent, selectors: [["cvc-diseases-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "site-page-header"], ["nzDirection", "horizontal"], ["nz-icon", "", "nzType", "civic:disease"], [1, "content"], ["nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Aliases", "nzSpan", "2", 4, "ngIf"], ["tooltip", "View on disease-ontology.org", 3, "href"], ["nzTitle", "Aliases", "nzSpan", "2"]], template: function DiseasesDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DiseasesDetailComponent_ng_container_0_Template, 13, 4, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.disease$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderTitleDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderContentDirective"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderExtraDirective"], _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcLinkTagComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsItemComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return DiseasesDetailComponent;
})();


/***/ }),

/***/ "cQhL":
/*!*******************************************************************************!*\
  !*** ./src/app/views/diseases/diseases-summary/diseases-summary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DiseasesSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesSummaryComponent", function() { return DiseasesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/assertions/assertions-table/assertions-table.component */ "zI+k");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");









function DiseasesSummaryComponent_nz_space_0_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Disease Assertions ");
    }
}
function DiseasesSummaryComponent_nz_space_0_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Disease Evidence ");
    }
}
function DiseasesSummaryComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-assertions-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DiseasesSummaryComponent_nz_space_0_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-evidence-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiseasesSummaryComponent_nz_space_0_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diseaseId", ctx_r0.diseaseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diseaseId", ctx_r0.diseaseId);
    }
}
let DiseasesSummaryComponent = /*@__PURE__*/ (() => {
    class DiseasesSummaryComponent {
        constructor(route) {
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.diseaseId = +params.diseaseId;
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    DiseasesSummaryComponent.ɵfac = function DiseasesSummaryComponent_Factory(t) { return new (t || DiseasesSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    DiseasesSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiseasesSummaryComponent, selectors: [["cvc-diseases-summary"]], decls: 1, vars: 1, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], [3, "cvcTitle"], [3, "diseaseId"], ["assertionsCardTitle", ""], ["evidenceCardTitle", ""], ["nz-icon", "", "nzType", "civic:disease"]], template: function DiseasesSummaryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DiseasesSummaryComponent_nz_space_0_Template, 11, 4, "nz-space", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diseaseId);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceItemComponent"], _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__["CvcEntityTableCardComponent"], _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_5__["CvcAssertionsTableComponent"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__["CvcEvidenceTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return DiseasesSummaryComponent;
})();


/***/ }),

/***/ "eZGx":
/*!*****************************************************************************!*\
  !*** ./src/app/components/diseases/diseases-table/diseases-table.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CvcDiseasesTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcDiseasesTableModule", function() { return CvcDiseasesTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









let CvcDiseasesTableModule = /*@__PURE__*/ (() => {
    class CvcDiseasesTableModule {
    }
    CvcDiseasesTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CvcDiseasesTableModule });
    CvcDiseasesTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CvcDiseasesTableModule_Factory(t) { return new (t || CvcDiseasesTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzToolTipModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__["CvcClearableInputFilterModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcLinkTagModule"],
                _cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcDiseaseTagModule"],
            ]] });
    return CvcDiseasesTableModule;
})();


/***/ }),

/***/ "enHt":
/*!********************************************************************************!*\
  !*** ./src/app/components/diseases/diseases-table/diseases-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: CvcDiseasesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcDiseasesTableComponent", function() { return CvcDiseasesTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");
/* harmony import */ var _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ "9A8T");














function CvcDiseasesTableComponent_tr_32_cvc_link_tag_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cvc-link-tag", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const d_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", d_r2.diseaseUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "DOID:" + d_r2.doid, " ");
    }
}
function CvcDiseasesTableComponent_tr_32_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " -- ");
    }
}
function CvcDiseasesTableComponent_tr_32_span_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const gene_r8 = ctx.$implicit;
        const isLast_r9 = ctx.last;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", gene_r8, "", isLast_r9 ? "" : ", ", " ");
    }
}
function CvcDiseasesTableComponent_tr_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-disease-tag", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CvcDiseasesTableComponent_tr_32_cvc_link_tag_4_Template, 2, 2, "cvc-link-tag", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CvcDiseasesTableComponent_tr_32_ng_template_5_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CvcDiseasesTableComponent_tr_32_span_9_Template, 2, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const d_r2 = ctx.$implicit;
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disease", d_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", d_r2.doid)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", d_r2.geneNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r2.geneCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r2.variantCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r2.evidenceItemCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r2.assertionCount, " ");
    }
}
let CvcDiseasesTableComponent = /*@__PURE__*/ (() => {
    class CvcDiseasesTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.pageSize = 25;
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["DiseasesSortColumns"];
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({ first: this.pageSize });
            this.data$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
                return {
                    data: r.data,
                    loading: r.loading,
                    networkStatus: r.networkStatus
                };
            }));
            this.isLoading$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.diseases$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'browseDiseases', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map(e => e.node);
            }));
            this.pageInfo$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'browseDiseases', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        refresh() {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch({
                name: this.nameInput,
                geneNames: this.geneNameInput,
                doid: this.doidInput
            });
        }
        onSortChanged(e) {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch({ sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e) });
        }
        onModelChanged() {
            this.debouncedQuery.next();
        }
        ngOnDestroy() {
            this.debouncedQuery.unsubscribe();
        }
        loadMore(cursor) {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.fetchMore({
                variables: {
                    first: this.pageSize,
                    after: cursor
                }
            });
        }
    }
    CvcDiseasesTableComponent.ɵfac = function CvcDiseasesTableComponent_Factory(t) { return new (t || CvcDiseasesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["BrowseDiseasesGQL"])); };
    CvcDiseasesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcDiseasesTableComponent, selectors: [["cvc-diseases-table"]], decls: 33, vars: 27, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["diseasesTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "20%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "30%"], ["nzWidth", "8%", 3, "nzColumnKey", "nzSortFn"], ["nz-icon", "", "nzType", "civic:gene", "nz-tooltip", "", "nzTooltipTitle", "Gene Count"], ["nz-icon", "", "nzType", "civic:variant", "nz-tooltip", "", "nzTooltipTitle", "Variant Count"], ["nz-icon", "", "nzType", "civic:evidence", "nz-tooltip", "", "nzTooltipTitle", "Evidence Count"], ["nz-icon", "", "nzType", "civic:assertion", "nz-tooltip", "", "nzTooltipTitle", "Assertion Count"], ["placeholderText", "Name", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "DOID", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Gene Name", 3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngFor", "ngForOf"], [3, "disease"], ["tooltip", "View on disease-ontology.org", 3, "href", 4, "ngIf", "ngIfElse"], ["noDoid", ""], ["nz-typography", ""], ["tooltip", "View on disease-ontology.org", 3, "href"]], template: function CvcDiseasesTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcDiseasesTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " DOID ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Genes ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "cvc-clearable-input-filter", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcDiseasesTableComponent_Template_cvc_clearable_input_filter_inputModelChange_22_listener($event) { return ctx.nameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "cvc-clearable-input-filter", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcDiseasesTableComponent_Template_cvc_clearable_input_filter_inputModelChange_24_listener($event) { return ctx.doidInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "cvc-clearable-input-filter", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcDiseasesTableComponent_Template_cvc_clearable_input_filter_inputModelChange_26_listener($event) { return ctx.geneNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CvcDiseasesTableComponent_tr_32_Template, 18, 8, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 23, ctx.diseases$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 25, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Name)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Doid)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.GeneCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.VariantCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceItemCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.AssertionCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.nameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.doidInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.geneNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzTooltipDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_8__["CvcClearableInputFilterComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcDiseaseTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcLinkTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcDiseasesTableComponent;
})();


/***/ }),

/***/ "fVEG":
/*!********************************************************************!*\
  !*** ./src/app/views/diseases/diseases-home/diseases-home.page.ts ***!
  \********************************************************************/
/*! exports provided: DiseasesHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesHomePage", function() { return DiseasesHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_diseases_diseases_table_diseases_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/diseases/diseases-table/diseases-table.component */ "enHt");





let DiseasesHomePage = /*@__PURE__*/ (() => {
    class DiseasesHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    DiseasesHomePage.ɵfac = function DiseasesHomePage_Factory(t) { return new (t || DiseasesHomePage)(); };
    DiseasesHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiseasesHomePage, selectors: [["diseases-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:disease"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function DiseasesHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Diseases ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-diseases-table");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_diseases_diseases_table_diseases_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcDiseasesTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return DiseasesHomePage;
})();


/***/ }),

/***/ "jjTn":
/*!***************************************************!*\
  !*** ./src/app/views/diseases/diseases.module.ts ***!
  \***************************************************/
/*! exports provided: DiseasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesModule", function() { return DiseasesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _diseases_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diseases-routing.module */ "qJhT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/icons-provider.module */ "Hhmg");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../evidence/evidence.module */ "DiSq");
/* harmony import */ var _sources_sources_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../sources/sources-routing.module */ "2LVS");
/* harmony import */ var _variants_variants_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../variants/variants-routing.module */ "gFx1");
/* harmony import */ var _diseases_home_diseases_home_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./diseases-home/diseases-home.module */ "V/pu");
/* harmony import */ var _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/assertions/assertions-table/assertions-table.module */ "IpA2");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");







































let DiseasesModule = /*@__PURE__*/ (() => {
    class DiseasesModule {
    }
    DiseasesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: DiseasesModule });
    DiseasesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ factory: function DiseasesModule_Factory(t) { return new (t || DiseasesModule)(); }, imports: [[
                _diseases_routing_module__WEBPACK_IMPORTED_MODULE_1__["DiseasesRoutingModule"],
                _diseases_home_diseases_home_module__WEBPACK_IMPORTED_MODULE_31__["DiseasesHomeModule"],
                _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__["CvcAssertionsTableModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_33__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_34__["CvcEntityTableCardModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_35__["CvcLinkTagModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _sources_sources_routing_module__WEBPACK_IMPORTED_MODULE_29__["SourcesRoutingModule"],
                _variants_variants_routing_module__WEBPACK_IMPORTED_MODULE_30__["VariantsRoutingModule"],
                _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_3__["IconsProviderModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__["NzCommentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__["NzDescriptionsModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__["NzPageHeaderModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_17__["NzPopoverModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_20__["NzSpaceModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_21__["NzSpinModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_19__["NzSkeletonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__["NzTabsModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_24__["NzTagModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_26__["NzTypographyModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_27__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_36__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_27__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_28__["EvidenceModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__["NzSelectModule"],
            ]] });
    return DiseasesModule;
})();


/***/ }),

/***/ "qJhT":
/*!***********************************************************!*\
  !*** ./src/app/views/diseases/diseases-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DiseasesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesRoutingModule", function() { return DiseasesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _diseases_detail_diseases_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diseases-detail/diseases-detail.component */ "VJHB");
/* harmony import */ var _diseases_home_diseases_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diseases-home/diseases-home.page */ "fVEG");
/* harmony import */ var _diseases_summary_diseases_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diseases-summary/diseases-summary.component */ "cQhL");
/* harmony import */ var _diseases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diseases.component */ "xHDo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _diseases_component__WEBPACK_IMPORTED_MODULE_4__["DiseasesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _diseases_home_diseases_home_page__WEBPACK_IMPORTED_MODULE_2__["DiseasesHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
            {
                path: ':diseaseId',
                component: _diseases_detail_diseases_detail_component__WEBPACK_IMPORTED_MODULE_1__["DiseasesDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME'
                },
                children: [
                    { path: '', redirectTo: 'summary', pathMatch: 'full' },
                    {
                        path: 'summary',
                        component: _diseases_summary_diseases_summary_component__WEBPACK_IMPORTED_MODULE_3__["DiseasesSummaryComponent"],
                        data: {
                            breadcrumb: 'Summary'
                        }
                    }
                ]
            }
        ]
    }
];
let DiseasesRoutingModule = /*@__PURE__*/ (() => {
    class DiseasesRoutingModule {
    }
    DiseasesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DiseasesRoutingModule });
    DiseasesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function DiseasesRoutingModule_Factory(t) { return new (t || DiseasesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return DiseasesRoutingModule;
})();


/***/ }),

/***/ "xHDo":
/*!******************************************************!*\
  !*** ./src/app/views/diseases/diseases.component.ts ***!
  \******************************************************/
/*! exports provided: DiseasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesComponent", function() { return DiseasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let DiseasesComponent = /*@__PURE__*/ (() => {
    class DiseasesComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    DiseasesComponent.ɵfac = function DiseasesComponent_Factory(t) { return new (t || DiseasesComponent)(); };
    DiseasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiseasesComponent, selectors: [["app-diseases"]], decls: 1, vars: 0, template: function DiseasesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return DiseasesComponent;
})();


/***/ })

}]);