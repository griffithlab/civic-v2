(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "0qeB":
/*!*******************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes.module.ts ***!
  \*******************************************************/
/*! exports provided: PhenotypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesModule", function() { return PhenotypesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _phenotypes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phenotypes-routing.module */ "UjNh");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _phenotypes_home_phenotypes_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phenotypes-home/phenotypes-home.module */ "Z7jr");
/* harmony import */ var _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/assertions/assertions-table/assertions-table.module */ "IpA2");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let PhenotypesModule = /*@__PURE__*/ (() => {
    class PhenotypesModule {
    }
    PhenotypesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: PhenotypesModule });
    PhenotypesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function PhenotypesModule_Factory(t) { return new (t || PhenotypesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _phenotypes_home_phenotypes_home_module__WEBPACK_IMPORTED_MODULE_9__["PhenotypesHomeModule"],
                _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_10__["CvcAssertionsTableModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_11__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_12__["CvcEntityTableCardModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcLinkTagModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_8__["CvcSectionNavigationModule"],
                _phenotypes_routing_module__WEBPACK_IMPORTED_MODULE_1__["PhenotypesRoutingModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceModule"],
            ]] });
    return PhenotypesModule;
})();


/***/ }),

/***/ "Ao9D":
/*!***************************************************************************************!*\
  !*** ./src/app/components/assertions/assertions-popover/assertions-popover.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CvcAssertionsPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAssertionsPopoverModule", function() { return CvcAssertionsPopoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let CvcAssertionsPopoverModule = /*@__PURE__*/ (() => {
    class CvcAssertionsPopoverModule {
    }
    CvcAssertionsPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: CvcAssertionsPopoverModule });
    CvcAssertionsPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function CvcAssertionsPopoverModule_Factory(t) { return new (t || CvcAssertionsPopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveComponentModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_2__["NzDescriptionsModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__["NzTagModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcGeneTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcDiseaseTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcVariantTagModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_7__["CvcPhenotypeTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_8__["CvcDrugTagModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["CvcPipesModule"],
            ]] });
    return CvcAssertionsPopoverModule;
})();


/***/ }),

/***/ "I1iU":
/*!**************************************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes-home/phenotypes-home.page.ts ***!
  \**************************************************************************/
/*! exports provided: PhenotypesHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesHomePage", function() { return PhenotypesHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_phenotypes_phenotypes_table_phenotypes_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/phenotypes/phenotypes-table/phenotypes-table.component */ "S+dz");





let PhenotypesHomePage = /*@__PURE__*/ (() => {
    class PhenotypesHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    PhenotypesHomePage.ɵfac = function PhenotypesHomePage_Factory(t) { return new (t || PhenotypesHomePage)(); };
    PhenotypesHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhenotypesHomePage, selectors: [["phenotypes-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:phenotype"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function PhenotypesHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Phenotypes ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-phenotypes-table");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_phenotypes_phenotypes_table_phenotypes_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcPhenotypesTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return PhenotypesHomePage;
})();


/***/ }),

/***/ "QL2/":
/*!*******************************************************************************!*\
  !*** ./src/app/components/assertions/assertions-tag/assertions-tag.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CvcAssertionsTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAssertionsTagModule", function() { return CvcAssertionsTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _assertions_popover_assertions_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assertions-popover/assertions-popover.module */ "Ao9D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcAssertionsTagModule = /*@__PURE__*/ (() => {
    class CvcAssertionsTagModule {
    }
    CvcAssertionsTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcAssertionsTagModule });
    CvcAssertionsTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcAssertionsTagModule_Factory(t) { return new (t || CvcAssertionsTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_3__["NzPopoverModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _assertions_popover_assertions_popover_module__WEBPACK_IMPORTED_MODULE_5__["CvcAssertionsPopoverModule"]
            ]] });
    return CvcAssertionsTagModule;
})();


/***/ }),

/***/ "S+dz":
/*!**************************************************************************************!*\
  !*** ./src/app/components/phenotypes/phenotypes-table/phenotypes-table.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcPhenotypesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcPhenotypesTableComponent", function() { return CvcPhenotypesTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../phenotype-tag/phenotype-tag.component */ "p+8w");
/* harmony import */ var _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ "9A8T");












function CvcPhenotypesTableComponent_tr_22_cvc_link_tag_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cvc-link-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", p_r2.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r2.hpoId, " ");
    }
}
function CvcPhenotypesTableComponent_tr_22_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "--");
    }
}
function CvcPhenotypesTableComponent_tr_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-phenotype-tag", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CvcPhenotypesTableComponent_tr_22_cvc_link_tag_4_Template, 2, 2, "cvc-link-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CvcPhenotypesTableComponent_tr_22_ng_template_5_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const p_r2 = ctx.$implicit;
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("phenotype", p_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", p_r2.hpoId)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r2.evidenceCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r2.assertionCount, " ");
    }
}
let CvcPhenotypesTableComponent = /*@__PURE__*/ (() => {
    class CvcPhenotypesTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.initialPageSize = 25;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["PhenotypeSortColumns"];
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({
                first: this.initialPageSize
            });
            let observable = this.queryRef.valueChanges;
            this.phenotypes$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'phenotypes', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.totalCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'phenotypes', 'totalCount'));
            this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'phenotypes', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        onModelChanged() { this.debouncedQuery.next(); }
        onSortChanged(e) {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch({
                sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e)
            });
        }
        refresh() {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.refetch({
                name: this.hpoNameFilter,
                hpoId: this.hpoIdFilter
            });
        }
        ngOnDestroy() { this.debouncedQuery.unsubscribe(); }
        loadMore(cursor) {
            var _a;
            (_a = this.queryRef) === null || _a === void 0 ? void 0 : _a.fetchMore({
                variables: { after: cursor }
            });
        }
    }
    CvcPhenotypesTableComponent.ɵfac = function CvcPhenotypesTableComponent_Factory(t) { return new (t || CvcPhenotypesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["PhenotypesBrowseGQL"])); };
    CvcPhenotypesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcPhenotypesTableComponent, selectors: [["cvc-phenotypes-table"]], decls: 23, vars: 21, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["phenotypesTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "40%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "10%", "nzRight", "", 3, "nzColumnKey", "nzSortFn"], ["nz-icon", "", "nzType", "civic:evidence", "nz-tooltip", "", "nzTooltipTitle", "Evidence count"], ["nz-icon", "", "nzType", "civic:assertion", "nz-tooltip", "", "nzTooltipTitle", "Assertion count"], ["placeholderText", "Search Name", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Search HPO ID", 3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngFor", "ngForOf"], [3, "phenotype"], ["tooltip", "View in the HPO", 3, "href", 4, "ngIf", "ngIfElse"], ["noHpo", ""], ["tooltip", "View in the HPO", 3, "href"]], template: function CvcPhenotypesTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcPhenotypesTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " HPO ID ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "cvc-clearable-input-filter", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcPhenotypesTableComponent_Template_cvc_clearable_input_filter_inputModelChange_16_listener($event) { return ctx.hpoNameFilter = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "cvc-clearable-input-filter", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcPhenotypesTableComponent_Template_cvc_clearable_input_filter_inputModelChange_18_listener($event) { return ctx.hpoIdFilter = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CvcPhenotypesTableComponent_tr_22_Template, 11, 5, "tr", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 17, ctx.phenotypes$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 19, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Name)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.HpoId)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.EvidenceItemCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.AssertionCount)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.hpoNameFilter)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.hpoIdFilter)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzCellFixedDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__["CvcClearableInputFilterComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcPhenotypeTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcLinkTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_10__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return CvcPhenotypesTableComponent;
})();


/***/ }),

/***/ "UjNh":
/*!***************************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PhenotypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesRoutingModule", function() { return PhenotypesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _phenotypes_detail_phenotypes_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phenotypes-detail/phenotypes-detail.component */ "vvuX");
/* harmony import */ var _phenotypes_home_phenotypes_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phenotypes-home/phenotypes-home.page */ "I1iU");
/* harmony import */ var _phenotypes_summary_phenotypes_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phenotypes-summary/phenotypes-summary.component */ "uyp7");
/* harmony import */ var _phenotypes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phenotypes.component */ "uJj9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _phenotypes_component__WEBPACK_IMPORTED_MODULE_4__["PhenotypesComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _phenotypes_home_phenotypes_home_page__WEBPACK_IMPORTED_MODULE_2__["PhenotypesHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
            {
                path: ':phenotypeId',
                component: _phenotypes_detail_phenotypes_detail_component__WEBPACK_IMPORTED_MODULE_1__["PhenotypesDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME'
                },
                children: [
                    { path: '', redirectTo: 'summary', pathMatch: 'full' },
                    {
                        path: 'summary',
                        component: _phenotypes_summary_phenotypes_summary_component__WEBPACK_IMPORTED_MODULE_3__["PhenotypesSummaryComponent"],
                        data: {
                            breadcrumb: 'Summary'
                        }
                    }
                ]
            }
        ]
    }
];
let PhenotypesRoutingModule = /*@__PURE__*/ (() => {
    class PhenotypesRoutingModule {
    }
    PhenotypesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PhenotypesRoutingModule });
    PhenotypesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function PhenotypesRoutingModule_Factory(t) { return new (t || PhenotypesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PhenotypesRoutingModule;
})();


/***/ }),

/***/ "Z7jr":
/*!****************************************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes-home/phenotypes-home.module.ts ***!
  \****************************************************************************/
/*! exports provided: PhenotypesHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesHomeModule", function() { return PhenotypesHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _app_components_phenotypes_phenotypes_table_phenotypes_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/phenotypes/phenotypes-table/phenotypes-table.module */ "nzAk");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let PhenotypesHomeModule = /*@__PURE__*/ (() => {
    class PhenotypesHomeModule {
    }
    PhenotypesHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PhenotypesHomeModule });
    PhenotypesHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function PhenotypesHomeModule_Factory(t) { return new (t || PhenotypesHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                _app_components_phenotypes_phenotypes_table_phenotypes_table_module__WEBPACK_IMPORTED_MODULE_2__["CvcPhenotypesTableModule"]
            ]] });
    return PhenotypesHomeModule;
})();


/***/ }),

/***/ "nzAk":
/*!***********************************************************************************!*\
  !*** ./src/app/components/phenotypes/phenotypes-table/phenotypes-table.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CvcPhenotypesTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcPhenotypesTableModule", function() { return CvcPhenotypesTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcPhenotypesTableModule = /*@__PURE__*/ (() => {
    class CvcPhenotypesTableModule {
    }
    CvcPhenotypesTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcPhenotypesTableModule });
    CvcPhenotypesTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcPhenotypesTableModule_Factory(t) { return new (t || CvcPhenotypesTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponentModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_2__["CvcClearableInputFilterModule"],
                _phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcPhenotypeTagModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcLinkTagModule"],
            ]] });
    return CvcPhenotypesTableModule;
})();


/***/ }),

/***/ "uJj9":
/*!**********************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes.component.ts ***!
  \**********************************************************/
/*! exports provided: PhenotypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesComponent", function() { return PhenotypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let PhenotypesComponent = /*@__PURE__*/ (() => {
    class PhenotypesComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PhenotypesComponent.ɵfac = function PhenotypesComponent_Factory(t) { return new (t || PhenotypesComponent)(); };
    PhenotypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhenotypesComponent, selectors: [["cvc-phenotypes"]], decls: 1, vars: 0, template: function PhenotypesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return PhenotypesComponent;
})();


/***/ }),

/***/ "uyp7":
/*!*************************************************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes-summary/phenotypes-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PhenotypesSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesSummaryComponent", function() { return PhenotypesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/assertions/assertions-table/assertions-table.component */ "zI+k");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








function PhenotypesSummaryComponent_nz_space_0_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phenotype Assertions ");
    }
}
function PhenotypesSummaryComponent_nz_space_0_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phenotype Evidence ");
    }
}
function PhenotypesSummaryComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-assertions-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhenotypesSummaryComponent_nz_space_0_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cvc-entity-table-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-evidence-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PhenotypesSummaryComponent_nz_space_0_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phenotypeId", ctx_r0.phenotypeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phenotypeId", ctx_r0.phenotypeId);
    }
}
let PhenotypesSummaryComponent = /*@__PURE__*/ (() => {
    class PhenotypesSummaryComponent {
        constructor(route) {
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.phenotypeId = +params.phenotypeId;
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    PhenotypesSummaryComponent.ɵfac = function PhenotypesSummaryComponent_Factory(t) { return new (t || PhenotypesSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    PhenotypesSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhenotypesSummaryComponent, selectors: [["cvc-phenotypes-summary"]], decls: 1, vars: 1, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], [3, "cvcTitle"], [3, "phenotypeId"], ["assertionsCardTitle", ""], ["evidenceCardTitle", ""], ["nz-icon", "", "nzType", "civic:phenotype"]], template: function PhenotypesSummaryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhenotypesSummaryComponent_nz_space_0_Template, 11, 4, "nz-space", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phenotypeId);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceItemComponent"], _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_4__["CvcEntityTableCardComponent"], _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_5__["CvcAssertionsTableComponent"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_6__["CvcEvidenceTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return PhenotypesSummaryComponent;
})();


/***/ }),

/***/ "vvuX":
/*!***********************************************************************************!*\
  !*** ./src/app/views/phenotypes/phenotypes-detail/phenotypes-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PhenotypesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesDetailComponent", function() { return PhenotypesDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ "9A8T");











function PhenotypesDetailComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-space", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "cvc-link-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const phenotype_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", phenotype_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", phenotype_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", phenotype_r1.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", phenotype_r1.hpoId, " ");
    }
}
let PhenotypesDetailComponent = /*@__PURE__*/ (() => {
    class PhenotypesDetailComponent {
        constructor(route, gql) {
            this.route = route;
            this.gql = gql;
            this.routeSub = this.route.params.subscribe((params) => {
                this.phenotypeId = +params.phenotypeId;
                this.queryRef = this.gql.watch({
                    phenotypeId: this.phenotypeId
                });
                let observable = this.queryRef.valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.phenotype$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'phenotype'));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    PhenotypesDetailComponent.ɵfac = function PhenotypesDetailComponent_Factory(t) { return new (t || PhenotypesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_3__["PhenotypeDetailGQL"])); };
    PhenotypesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhenotypesDetailComponent, selectors: [["cvc-phenotypes-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], [1, "site-page-header"], ["nzDirection", "horizontal"], ["nz-icon", "", "nzType", "civic:phenotype"], ["tooltip", "View in the HPO", 3, "href"], [1, "content"]], template: function PhenotypesDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PhenotypesDetailComponent_ng_container_0_Template, 14, 4, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.phenotype$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderTitleDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderExtraDirective"], _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcLinkTagComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__["NzPageHeaderContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_10__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return PhenotypesDetailComponent;
})();


/***/ })

}]);