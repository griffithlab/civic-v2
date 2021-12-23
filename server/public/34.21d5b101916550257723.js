(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "3lFz":
/*!**************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-home/variant-groups-home.page.ts ***!
  \**************************************************************************************/
/*! exports provided: VariantGroupsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsHomePage", function() { return VariantGroupsHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_variant_groups_variant_groups_table_variant_groups_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/variant-groups/variant-groups-table/variant-groups-table.component */ "IOp3");





let VariantGroupsHomePage = /*@__PURE__*/ (() => {
    class VariantGroupsHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    VariantGroupsHomePage.ɵfac = function VariantGroupsHomePage_Factory(t) { return new (t || VariantGroupsHomePage)(); };
    VariantGroupsHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariantGroupsHomePage, selectors: [["variant-groups-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:variantgroup"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function VariantGroupsHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Variant Groups ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-variant-groups-table");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_variant_groups_variant_groups_table_variant_groups_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcVariantGroupsTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return VariantGroupsHomePage;
})();


/***/ }),

/***/ "6BKN":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/tab-navigation/tab-navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: CvcTabNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcTabNavigationComponent", function() { return CvcTabNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






const _c0 = ["tabBarExtraContent"];
function CvcTabNavigationComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 5);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tabBarExtraContent || null);
    }
}
function CvcTabNavigationComponent_nz_tab_5_a_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tab_r3.routeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", tab_r3.iconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r3.tabLabel, " ");
    }
}
function CvcTabNavigationComponent_nz_tab_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcTabNavigationComponent_nz_tab_5_a_1_Template, 3, 3, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let CvcTabNavigationComponent = /*@__PURE__*/ (() => {
    class CvcTabNavigationComponent {
        constructor(router) {
            this.router = router;
            this.selectedTabIndex = this.getActivatedRouteIndex(this.router.url);
        }
        getActivatedRouteIndex(url) {
            var _a;
            return (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.findIndex((path) => url.includes(path.routeName));
        }
    }
    CvcTabNavigationComponent.ɵfac = function CvcTabNavigationComponent_Factory(t) { return new (t || CvcTabNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    CvcTabNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcTabNavigationComponent, selectors: [["cvc-tab-navigation"]], contentQueries: function CvcTabNavigationComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabBarExtraContent = _t.first);
            }
        }, inputs: { entity: "entity", tabs: "tabs" }, decls: 6, vars: 3, consts: [["id", "section-tabs"], ["nzSpan", "24"], ["nzLinkRouter", "", "nzType", "card", "nzSize", "small", 3, "nzSelectedIndex", "nzTabBarExtraContent"], ["extraTpl", ""], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["nz-tab-link", "", 3, "routerLink", 4, "nzTabLink"], ["nz-tab-link", "", 3, "routerLink"], ["nz-icon", "", 3, "nzType"]], template: function CvcTabNavigationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tabset", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcTabNavigationComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcTabNavigationComponent_nz_tab_5_Template, 2, 0, "nz-tab", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedTabIndex)("nzTabBarExtraContent", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabLinkTemplateDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcTabNavigationComponent;
})();


/***/ }),

/***/ "7cCT":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/variant-groups/variant-groups-table/variant-groups-table.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CvcVariantGroupsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantGroupsTableModule", function() { return CvcVariantGroupsTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/components/shared/tag-list/tag-list.module */ "iNrY");
/* harmony import */ var _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/components/shared/tag-overflow/tag-overflow.module */ "2WDp");
/* harmony import */ var _variant_group_tag_variant_group_tag_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../variant-group-tag/variant-group-tag.module */ "GEEJ");
/* harmony import */ var _app_components_shared_details_navigation_details_navigation_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/components/shared/details-navigation/details-navigation.module */ "J31z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























let CvcVariantGroupsTableModule = /*@__PURE__*/ (() => {
    class CvcVariantGroupsTableModule {
    }
    CvcVariantGroupsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: CvcVariantGroupsTableModule });
    CvcVariantGroupsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function CvcVariantGroupsTableModule_Factory(t) { return new (t || CvcVariantGroupsTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
                _app_components_shared_details_navigation_details_navigation_module__WEBPACK_IMPORTED_MODULE_22__["CvcDetailsNavigationModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_11__["CvcClearableInputFilterModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["CvcPipesModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcGeneTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcVariantTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_15__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_16__["CvcDrugTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_17__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_18__["CvcEvidenceTagModule"],
                _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_19__["CvcTagListModule"],
                _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_20__["CvcTagOverflowModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_11__["CvcClearableInputFilterModule"],
                _variant_group_tag_variant_group_tag_module__WEBPACK_IMPORTED_MODULE_21__["CvcVariantGroupTagModule"]
            ]] });
    return CvcVariantGroupsTableModule;
})();


/***/ }),

/***/ "AcuH":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-flags/variant-groups-flags.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VariantGroupsFlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsFlagsComponent", function() { return VariantGroupsFlagsComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_flags_flag_list_and_filter_flag_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/flags/flag-list-and-filter/flag-list-and-filter.component */ "SJ3B");




let VariantGroupsFlagsComponent = /*@__PURE__*/ (() => {
    class VariantGroupsFlagsComponent {
        constructor(route) {
            this.route = route;
            const variantGroupId = +this.route.snapshot.params['variantGroupId'];
            this.flaggable = {
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlaggableEntities"].VariantGroup,
                id: variantGroupId
            };
        }
    }
    VariantGroupsFlagsComponent.ɵfac = function VariantGroupsFlagsComponent_Factory(t) { return new (t || VariantGroupsFlagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    VariantGroupsFlagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariantGroupsFlagsComponent, selectors: [["cvc-variant-groups-flags"]], decls: 1, vars: 1, consts: [[3, "flaggable"]], template: function VariantGroupsFlagsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-flag-list-and-filter", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flaggable", ctx.flaggable);
            }
        }, directives: [_components_flags_flag_list_and_filter_flag_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__["CvcFlagListAndFilterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return VariantGroupsFlagsComponent;
})();


/***/ }),

/***/ "Bgpb":
/*!***************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups.module.ts ***!
  \***************************************************************/
/*! exports provided: VariantGroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsModule", function() { return VariantGroupsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _variant_groups_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-groups-routing.module */ "UFO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../evidence/evidence.module */ "DiSq");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _variant_groups_home_variant_groups_home_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./variant-groups-home/variant-groups-home.module */ "wjqW");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module */ "7vSn");
/* harmony import */ var _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/shared/participant-list/participant-list.module */ "VwQC");
/* harmony import */ var _app_components_comments_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/comments/comment-list/comment-list.module */ "aFVg");
/* harmony import */ var _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/flags/flag-list-and-filter/flag-list-and-filter.module */ "VrgM");
/* harmony import */ var _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/flags/flaggable/flaggable.module */ "Ze44");
/* harmony import */ var _app_components_shared_empty_revisable_empty_revisable_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/components/shared/empty-revisable/empty-revisable.module */ "ILDz");
/* harmony import */ var _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/components/shared/tab-navigation/tab-navigation.module */ "ol2S");
/* harmony import */ var _app_components_shared_contributor_avatars_contributor_avatars_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/components/shared/contributor-avatars/contributor-avatars.module */ "+Qq2");
/* harmony import */ var _app_components_shared_entity_subscription_button_entity_subscription_button_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @app/components/shared/entity-subscription-button/entity-subscription-button.module */ "jLYH");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");











































let VariantGroupsModule = /*@__PURE__*/ (() => {
    class VariantGroupsModule {
    }
    VariantGroupsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({ type: VariantGroupsModule });
    VariantGroupsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({ factory: function VariantGroupsModule_Factory(t) { return new (t || VariantGroupsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_3__["ReactiveComponentModule"],
                _variant_groups_routing_module__WEBPACK_IMPORTED_MODULE_1__["VariantGroupsRoutingModule"],
                _variant_groups_home_variant_groups_home_module__WEBPACK_IMPORTED_MODULE_29__["VariantGroupsHomeModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_28__["CvcSectionNavigationModule"],
                _app_components_shared_empty_revisable_empty_revisable_module__WEBPACK_IMPORTED_MODULE_36__["CvcEmptyRevisableModule"],
                _app_forms_shared_components_org_selector_btn_group_org_selector_btn_group_module__WEBPACK_IMPORTED_MODULE_31__["CvcOrgSelectorBtnGroupModule"],
                _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_32__["CvcParticipantListModule"],
                _app_components_comments_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_33__["CvcCommentListModule"],
                _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_34__["CvcFlagListAndFilterModule"],
                _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_35__["CvcFlaggableModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_8__["NzCommentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__["NzListModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_16__["NzPopoverModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__["NzSpaceModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__["NzSpinModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_18__["NzSkeletonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTableModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__["NzTabsModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__["NzTagModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_25__["NzTypographyModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_40__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_37__["CvcTabNavigationModule"],
                _app_components_shared_contributor_avatars_contributor_avatars_module__WEBPACK_IMPORTED_MODULE_38__["CvcContributorAvatarsModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_27__["EvidenceModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__["NzSelectModule"],
                _app_components_shared_entity_subscription_button_entity_subscription_button_module__WEBPACK_IMPORTED_MODULE_39__["CvcEntitySubscriptionButtonModule"]
            ]] });
    return VariantGroupsModule;
})();


/***/ }),

/***/ "CXCi":
/*!****************************************************!*\
  !*** ./node_modules/rxjs-spy/operators/tag/esm.js ***!
  \****************************************************/
/*! exports provided: tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "EZHI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return ___WEBPACK_IMPORTED_MODULE_0__["tag"]; });



/***/ }),

/***/ "CgKE":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-comments/variant-groups-comments.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VariantGroupsCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsCommentsComponent", function() { return VariantGroupsCommentsComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/comments/comment-list/comment-list.component */ "NCHN");




let VariantGroupsCommentsComponent = /*@__PURE__*/ (() => {
    class VariantGroupsCommentsComponent {
        constructor(route) {
            this.route = route;
            const variantGroupId = +this.route.snapshot.params['variantGroupId'];
            this.commentable = {
                id: variantGroupId,
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["CommentableEntities"].VariantGroup
            };
        }
    }
    VariantGroupsCommentsComponent.ɵfac = function VariantGroupsCommentsComponent_Factory(t) { return new (t || VariantGroupsCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    VariantGroupsCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariantGroupsCommentsComponent, selectors: [["cvc-variant-groups-comments"]], decls: 1, vars: 1, consts: [[3, "commentable"]], template: function VariantGroupsCommentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-comment-list", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("commentable", ctx.commentable);
            }
        }, directives: [_components_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_3__["CvcCommentListComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return VariantGroupsCommentsComponent;
})();


/***/ }),

/***/ "Don1":
/*!********************************************!*\
  !*** ./node_modules/rxjs-spy/esm/index.js ***!
  \********************************************/
/*! exports provided: BasePlugin, CyclePlugin, DebugPlugin, Deck, GraphPlugin, LetPlugin, LogPlugin, PausePlugin, SnapshotPlugin, StackTracePlugin, StatsPlugin, create, defaultLogger, detect, getGraphRef, getMappedStackTrace, getSnapshotRef, getStackTrace, getStackTraceRef, inferPath, inferType, matches, operators, plugins, toLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return BasePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclePlugin", function() { return CyclePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPlugin", function() { return DebugPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deck", function() { return Deck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPlugin", function() { return GraphPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetPlugin", function() { return LetPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPlugin", function() { return LogPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PausePlugin", function() { return PausePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotPlugin", function() { return SnapshotPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackTracePlugin", function() { return StackTracePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPlugin", function() { return StatsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLogger", function() { return defaultLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return detect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphRef", function() { return getGraphRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMappedStackTrace", function() { return getMappedStackTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnapshotRef", function() { return getSnapshotRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackTrace", function() { return getStackTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackTraceRef", function() { return getStackTraceRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferPath", function() { return inferPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferType", function() { return inferType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLogger", function() { return toLogger; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
var noop_ = function noop_() {};

var hook_ = noop_;
function detect(id) {
  hook_(id);
}
function hook(hook) {
  hook_ = hook || noop_;
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

/*tslint:disable:no-console no-invalid-this*/
var defaultLogger = console;
function toLogger(partialLogger) {
  if (partialLogger.error && partialLogger.group && partialLogger.groupCollapsed && partialLogger.groupEnd && partialLogger.warn) {
    return partialLogger;
  }

  var spaces = 2;
  var indent = 0;
  return {
    error: function error(message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      call.apply(void 0, ["error", message].concat(args));
    },
    group: function group(title) {
      call("log", title);
      indent += spaces;
    },
    groupCollapsed: function groupCollapsed(title) {
      call("log", title);
      indent += spaces;
    },
    groupEnd: function groupEnd() {
      indent = Math.max(0, indent - spaces);
    },
    log: function log(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      call.apply(void 0, ["log", message].concat(args));
    },
    warn: function warn(message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      call.apply(void 0, ["warn", message].concat(args));
    }
  };

  function call(method, message) {
    var _ref;

    var padding = " ".repeat(indent);

    if (message) {
      message = padding + message;
    } else {
      message = padding;
    }

    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    (_ref = partialLogger[method] || partialLogger.log).call.apply(_ref, [partialLogger, message].concat(args));
  }
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
var idSymbol = Symbol("id");
var lastId = 0;
function identify(instance) {
  var id = instance[idSymbol] = instance[idSymbol] || (++lastId).toString();
  return id;
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function isSubscriptionRef(subscriberRef) {
  return subscriberRef && subscriberRef["subscription"];
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function inferPath(observable) {
  var _ref = observable,
      source = _ref.source;

  if (source) {
    return "".concat(inferPath(source), "/").concat(inferType(observable));
  }

  return "/".concat(inferType(observable));
}
function inferType(observable) {
  var _ref2 = observable,
      operator = _ref2.operator;
  var prototype = Object.getPrototypeOf(operator ? operator : observable);

  if (prototype.constructor && prototype.constructor.name) {
    var name = prototype.constructor.name;
    name = "".concat(name.charAt(0).toLowerCase()).concat(name.substring(1));
    return name.replace(/^(\w+)(Observable|Operator)$/, function (match, p) {
      return p;
    });
  }

  return "unknown";
}
function isObservable(arg) {
  return arg && arg.subscribe;
} // This is included because - although there is an "rxjs/Observer.js" in the
// RxJS NPM distribution - there is no "Rx.Observer" (and, therefore, no
// "Rx.Observer.empty") in the bundle:

var empty = {
  closed: true,
  error: function error(_error) {
    throw _error;
  },
  next: function next(value) {},
  complete: function complete() {}
};
var SubscriberSymbol = Symbol["for"]("rxSubscriber"); // https://github.com/ReactiveX/rxjs/blob/master/src/util/toSubscriber.ts
//
// toSubscriber is not part of the RxJS bundle's public API, so if it were to
// be imported using a Rollup CommonJS plugin, it would need to be included in
// the spy's bundle - but the other RxJS modules should not be included. This
// seems too complicated, for the moment.

function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
      return nextOrObserver;
    }

    if (nextOrObserver[SubscriberSymbol]) {
      return nextOrObserver[SubscriberSymbol]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](empty);
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function matches(arg, match, value) {
  var observable;
  var subscriber = undefined;
  var subscription = undefined;

  if (isObservable(arg)) {
    observable = arg;
  } else {
    observable = arg.observable;
    subscriber = arg.subscriber;
    subscription = isSubscriptionRef(arg) ? arg.subscription : undefined;
  }

  if (isObservable(match)) {
    return observable === match;
  }

  var observableId = identify(observable);
  var subscriberId = subscriber ? identify(subscriber) : undefined;
  var subscriptionId = subscription ? identify(subscription) : undefined;
  var tag = value || read(observable);

  if (typeof match === "function") {
    return match(tag, observable);
  }

  if (typeof match === "string") {
    return match === observableId || match === subscriberId || match === subscriptionId || match === tag;
  }

  if (tag === undefined) {
    return false;
  }

  return match.test(tag);
}
function read(observable) {
  var operator = observable["operator"];

  if (!operator) {
    return undefined;
  }

  var tag = operator["tag"];

  if (!tag) {
    return undefined;
  }

  return tag;
}
function toString(match) {
  if (isObservable(match)) {
    return "[Observable]";
  } else if (typeof match === "function") {
    return "[Function]";
  }

  return match.toString();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
var BasePlugin = /*#__PURE__*/function () {
  function BasePlugin(name) {
    _classCallCheck(this, BasePlugin);

    this.name = name;
  }

  _createClass(BasePlugin, [{
    key: "afterComplete",
    value: function afterComplete(ref) {}
  }, {
    key: "afterError",
    value: function afterError(ref, error) {}
  }, {
    key: "afterNext",
    value: function afterNext(ref, value) {}
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {}
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {}
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {}
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {}
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {}
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {}
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {}
  }, {
    key: "flush",
    value: function flush() {}
  }, {
    key: "select",
    value: function select(ref) {
      return undefined;
    }
  }, {
    key: "teardown",
    value: function teardown() {}
  }]);

  return BasePlugin;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var stackframe = createCommonjsModule(function (module, exports) {
  (function (root, factory) {

    /* istanbul ignore next */

    {
      module.exports = factory();
    }
  })(commonjsGlobal, function () {

    function _isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
      return function () {
        return this[p];
      };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];
    var objectProps = ['evalOrigin'];
    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);

    function StackFrame(obj) {
      if (!obj) return;

      for (var i = 0; i < props.length; i++) {
        if (obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }

    StackFrame.prototype = {
      getArgs: function getArgs() {
        return this.args;
      },
      setArgs: function setArgs(v) {
        if (Object.prototype.toString.call(v) !== '[object Array]') {
          throw new TypeError('Args must be an Array');
        }

        this.args = v;
      },
      getEvalOrigin: function getEvalOrigin() {
        return this.evalOrigin;
      },
      setEvalOrigin: function setEvalOrigin(v) {
        if (v instanceof StackFrame) {
          this.evalOrigin = v;
        } else if (v instanceof Object) {
          this.evalOrigin = new StackFrame(v);
        } else {
          throw new TypeError('Eval Origin must be an Object or StackFrame');
        }
      },
      toString: function toString() {
        var fileName = this.getFileName() || '';
        var lineNumber = this.getLineNumber() || '';
        var columnNumber = this.getColumnNumber() || '';
        var functionName = this.getFunctionName() || '';

        if (this.getIsEval()) {
          if (fileName) {
            return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
          }

          return '[eval]:' + lineNumber + ':' + columnNumber;
        }

        if (functionName) {
          return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
        }

        return fileName + ':' + lineNumber + ':' + columnNumber;
      }
    };

    StackFrame.fromString = function StackFrame$$fromString(str) {
      var argsStartIndex = str.indexOf('(');
      var argsEndIndex = str.lastIndexOf(')');
      var functionName = str.substring(0, argsStartIndex);
      var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
      var locationString = str.substring(argsEndIndex + 1);

      if (locationString.indexOf('@') === 0) {
        var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
        var fileName = parts[1];
        var lineNumber = parts[2];
        var columnNumber = parts[3];
      }

      return new StackFrame({
        functionName: functionName,
        args: args || undefined,
        fileName: fileName,
        lineNumber: lineNumber || undefined,
        columnNumber: columnNumber || undefined
      });
    };

    for (var i = 0; i < booleanProps.length; i++) {
      StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

      StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
        return function (v) {
          this[p] = Boolean(v);
        };
      }(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
      StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

      StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
        return function (v) {
          if (!_isNumber(v)) {
            throw new TypeError(p + ' must be a Number');
          }

          this[p] = Number(v);
        };
      }(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
      StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

      StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
        return function (v) {
          this[p] = String(v);
        };
      }(stringProps[k]);
    }

    return StackFrame;
  });
});

var errorStackParser = createCommonjsModule(function (module, exports) {
  (function (root, factory) {

    /* istanbul ignore next */

    {
      module.exports = factory(stackframe);
    }
  })(commonjsGlobal, function ErrorStackParser(StackFrame) {

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
    return {
      /**
       * Given an Error object, extract the most information from it.
       *
       * @param {Error} error object
       * @return {Array} of StackFrames
       */
      parse: function ErrorStackParser$$parse(error) {
        if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
          return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
          return this.parseV8OrIE(error);
        } else if (error.stack) {
          return this.parseFFOrSafari(error);
        } else {
          throw new Error('Cannot parse given Error object');
        }
      },
      // Separate line and column numbers from a string of the form: (URI:Line:Column)
      extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
        // Fail-fast but return locations like "(native)"
        if (urlLike.indexOf(':') === -1) {
          return [urlLike];
        }

        var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
        return [parts[1], parts[2] || undefined, parts[3] || undefined];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function (line) {
          if (line.indexOf('(eval ') > -1) {
            // Throw away eval information until we implement stacktrace.js/stackframe#8
            line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
          }

          var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '('); // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
          // case it has spaces in it, as the string is split on \s+ later on

          var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/); // remove the parenthesized location from the line, if it was matched

          sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
          var tokens = sanitizedLine.split(/\s+/).slice(1); // if a location was matched, pass it to extractLocation() otherwise pop the last token

          var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
          var functionName = tokens.join(' ') || undefined;
          var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
          return new StackFrame({
            functionName: functionName,
            fileName: fileName,
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function (line) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          if (line.indexOf(' > eval') > -1) {
            line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
          }

          if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
            // Safari eval frames only have function names and nothing else
            return new StackFrame({
              functionName: line
            });
          } else {
            var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
            var matches = line.match(functionNameRegex);
            var functionName = matches && matches[1] ? matches[1] : undefined;
            var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
            return new StackFrame({
              functionName: functionName,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
          return this.parseOpera9(e);
        } else if (!e.stack) {
          return this.parseOpera10(e);
        } else {
          return this.parseOpera11(e);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split('\n');
        var result = [];

        for (var i = 2, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);

          if (match) {
            result.push(new StackFrame({
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }

        return result;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split('\n');
        var result = [];

        for (var i = 0, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);

          if (match) {
            result.push(new StackFrame({
              functionName: match[3] || undefined,
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }

        return result;
      },
      // Opera 10.65+ Error.stack very similar to FF/Safari
      parseOpera11: function ErrorStackParser$$parseOpera11(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function (line) {
          var tokens = line.split('@');
          var locationParts = this.extractLocation(tokens.pop());
          var functionCall = tokens.shift() || '';
          var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
          var argsRaw;

          if (functionCall.match(/\(([^)]*)\)/)) {
            argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
          }

          var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
          return new StackFrame({
            functionName: functionName,
            args: args,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      }
    };
  });
});

var util = createCommonjsModule(function (module, exports) {
  /* -*- Mode: js; js-indent-level: 2; -*- */

  /*
   * Copyright 2011 Mozilla Foundation and contributors
   * Licensed under the New BSD license. See LICENSE or:
   * http://opensource.org/licenses/BSD-3-Clause
   */

  /**
   * This is a helper function for getting values from parameter/options
   * objects.
   *
   * @param args The object we are extracting values from
   * @param name The name of the property we are getting.
   * @param defaultValue An optional value to return if the property is missing
   * from the object. If this is not specified and the property is missing, an
   * error will be thrown.
   */
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }

  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;

  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);

    if (!match) {
      return null;
    }

    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }

  exports.urlParse = urlParse;

  function urlGenerate(aParsedUrl) {
    var url = '';

    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ':';
    }

    url += '//';

    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + '@';
    }

    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }

    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }

    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }

    return url;
  }

  exports.urlGenerate = urlGenerate;
  /**
   * Normalizes a path, or the path portion of a URL:
   *
   * - Replaces consecutive slashes with one slash.
   * - Removes unnecessary '.' parts.
   * - Removes unnecessary '<dir>/..' parts.
   *
   * Based on code in the Node.js 'path' core module.
   *
   * @param aPath The path or url to normalize.
   */

  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);

    if (url) {
      if (!url.path) {
        return aPath;
      }

      path = url.path;
    }

    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);

    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];

      if (part === '.') {
        parts.splice(i, 1);
      } else if (part === '..') {
        up++;
      } else if (up > 0) {
        if (part === '') {
          // The first part is blank if the path is absolute. Trying to go
          // above the root is a no-op. Therefore we can remove all '..' parts
          // directly after the root.
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }

    path = parts.join('/');

    if (path === '') {
      path = isAbsolute ? '/' : '.';
    }

    if (url) {
      url.path = path;
      return urlGenerate(url);
    }

    return path;
  }

  exports.normalize = normalize;
  /**
   * Joins two paths/URLs.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be joined with the root.
   *
   * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
   *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
   *   first.
   * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
   *   is updated with the result and aRoot is returned. Otherwise the result
   *   is returned.
   *   - If aPath is absolute, the result is aPath.
   *   - Otherwise the two paths are joined with a slash.
   * - Joining for example 'http://' and 'www.example.com' is also supported.
   */

  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }

    if (aPath === "") {
      aPath = ".";
    }

    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);

    if (aRootUrl) {
      aRoot = aRootUrl.path || '/';
    } // `join(foo, '//www.example.org')`


    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }

      return urlGenerate(aPathUrl);
    }

    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    } // `join('http://', 'www.example.com')`


    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }

    var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }

    return joined;
  }

  exports.join = join;

  exports.isAbsolute = function (aPath) {
    return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
  };
  /**
   * Make a path relative to a URL or another path.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be made relative to aRoot.
   */


  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }

    aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.

    var level = 0;

    while (aPath.indexOf(aRoot + '/') !== 0) {
      var index = aRoot.lastIndexOf("/");

      if (index < 0) {
        return aPath;
      } // If the only part of the root that is left is the scheme (i.e. http://,
      // file:///, etc.), one or more slashes (/), or simply nothing at all, we
      // have exhausted all components, so the path is not relative to the root.


      aRoot = aRoot.slice(0, index);

      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }

      ++level;
    } // Make sure we add a "../" for each component we removed from the root.


    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }

  exports.relative = relative;

  var supportsNullProto = function () {
    var obj = Object.create(null);
    return !('__proto__' in obj);
  }();

  function identity(s) {
    return s;
  }
  /**
   * Because behavior goes wacky when you set `__proto__` on objects, we
   * have to prefix all the strings in our set with an arbitrary character.
   *
   * See https://github.com/mozilla/source-map/pull/31 and
   * https://github.com/mozilla/source-map/issues/30
   *
   * @param String aStr
   */


  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return '$' + aStr;
    }

    return aStr;
  }

  exports.toSetString = supportsNullProto ? identity : toSetString;

  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }

    return aStr;
  }

  exports.fromSetString = supportsNullProto ? identity : fromSetString;

  function isProtoString(s) {
    if (!s) {
      return false;
    }

    var length = s.length;

    if (length < 9
    /* "__proto__".length */
    ) {
        return false;
      }

    if (s.charCodeAt(length - 1) !== 95
    /* '_' */
    || s.charCodeAt(length - 2) !== 95
    /* '_' */
    || s.charCodeAt(length - 3) !== 111
    /* 'o' */
    || s.charCodeAt(length - 4) !== 116
    /* 't' */
    || s.charCodeAt(length - 5) !== 111
    /* 'o' */
    || s.charCodeAt(length - 6) !== 114
    /* 'r' */
    || s.charCodeAt(length - 7) !== 112
    /* 'p' */
    || s.charCodeAt(length - 8) !== 95
    /* '_' */
    || s.charCodeAt(length - 9) !== 95
    /* '_' */
    ) {
        return false;
      }

    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36
      /* '$' */
      ) {
          return false;
        }
    }

    return true;
  }
  /**
   * Comparator between two mappings where the original positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same original source/line/column, but different generated
   * line and column the same. Useful when searching for a mapping with a
   * stubbed out mapping.
   */


  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = mappingA.source - mappingB.source;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;

    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedLine - mappingB.generatedLine;

    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  }

  exports.compareByOriginalPositions = compareByOriginalPositions;
  /**
   * Comparator between two mappings with deflated source and name indices where
   * the generated positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same generated line and column, but different
   * source/name/original line and column the same. Useful when searching for a
   * mapping with a stubbed out mapping.
   */

  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;

    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }

    cmp = mappingA.source - mappingB.source;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;

    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  }

  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }

    if (aStr1 > aStr2) {
      return 1;
    }

    return -1;
  }
  /**
   * Comparator between two mappings with inflated source and name strings where
   * the generated positions are compared.
   */


  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = strcmp(mappingA.source, mappingB.source);

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;

    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;

    if (cmp !== 0) {
      return cmp;
    }

    return strcmp(mappingA.name, mappingB.name);
  }

  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
});

var binarySearch = createCommonjsModule(function (module, exports) {
  /* -*- Mode: js; js-indent-level: 2; -*- */

  /*
   * Copyright 2011 Mozilla Foundation and contributors
   * Licensed under the New BSD license. See LICENSE or:
   * http://opensource.org/licenses/BSD-3-Clause
   */
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  /**
   * Recursive implementation of binary search.
   *
   * @param aLow Indices here and lower do not contain the needle.
   * @param aHigh Indices here and higher do not contain the needle.
   * @param aNeedle The element being searched for.
   * @param aHaystack The non-empty array being searched.
   * @param aCompare Function which takes two elements and returns -1, 0, or 1.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   */

  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);

    if (cmp === 0) {
      // Found the element we are looking for.
      return mid;
    } else if (cmp > 0) {
      // Our needle is greater than aHaystack[mid].
      if (aHigh - mid > 1) {
        // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      } // The exact needle element was not found in this haystack. Determine if
      // we are in termination case (3) or (2) and return the appropriate thing.


      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      // Our needle is less than aHaystack[mid].
      if (mid - aLow > 1) {
        // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      } // we are in termination case (3) or (2) and return the appropriate thing.


      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  /**
   * This is an implementation of binary search which will always try and return
   * the index of the closest element if there is no exact hit. This is because
   * mappings between original and generated line/col pairs are single points,
   * and there is an implicit region between each of them, so a miss just means
   * that you aren't on the very start of a region.
   *
   * @param aNeedle The element you are looking for.
   * @param aHaystack The array that is being searched.
   * @param aCompare A function which takes the needle and an element in the
   *     array and returns -1, 0, or 1 depending on whether the needle is less
   *     than, equal to, or greater than the element, respectively.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
   */


  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }

    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

    if (index < 0) {
      return -1;
    } // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.


    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }

      --index;
    }

    return index;
  };
});

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var has = Object.prototype.hasOwnProperty;
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);

  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;
var arraySet = {
  ArraySet: ArraySet_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

var encode = function encode(number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


var decode = function decode(charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

var base64 = {
  encode: encode,
  decode: decode
};

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


var decode$1 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
  encode: encode$1,
  decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


var quickSort_1 = function quickSort_1(ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
  quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var ArraySet$1 = arraySet.ArraySet;
var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function get() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);

    if (source != null && sourceRoot != null) {
      source = util.join(sourceRoot, source);
    }

    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };

  if (this.sourceRoot != null) {
    needle.source = util.relative(this.sourceRoot, needle.source);
  }

  if (!this._sources.has(needle.source)) {
    return [];
  }

  needle.source = this._sources.indexOf(needle.source);
  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

var SourceMapConsumer_1 = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */

BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file; // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64Vlq.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort$1(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);

        if (this.sourceRoot != null) {
          source = util.join(this.sourceRoot, source);
        }
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  if (this.sourceRoot != null) {
    aSource = util.relative(this.sourceRoot, aSource);
  }

  if (this._sources.has(aSource)) {
    return this.sourcesContent[this._sources.indexOf(aSource)];
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + aSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');

  if (this.sourceRoot != null) {
    source = util.relative(this.sourceRoot, source);
  }

  if (!this._sources.has(source)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  source = this._sources.indexOf(source);
  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      if (section.consumer.sourceRoot !== null) {
        source = util.join(section.consumer.sourceRoot, source);
      }

      this._sources.add(source);

      source = this._sources.indexOf(source);

      var name = section.consumer._names.at(mapping.name);

      this._names.add(name);

      name = this._names.indexOf(name); // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.

      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
};

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;
var sourceMapConsumer = {
  SourceMapConsumer: SourceMapConsumer_1,
  BasicSourceMapConsumer: BasicSourceMapConsumer_1,
  IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var stacktraceGps = createCommonjsModule(function (module, exports) {
  (function (root, factory) {

    /* istanbul ignore next */

    {
      module.exports = factory(sourceMapConsumer, stackframe);
    }
  })(commonjsGlobal, function (SourceMap, StackFrame) {
    /**
     * Make a X-Domain request to url and callback.
     *
     * @param {String} url
     * @returns {Promise} with response text if fulfilled
     */

    function _xdr(url) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('get', url);
        req.onerror = reject;

        req.onreadystatechange = function onreadystatechange() {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 300 || url.substr(0, 7) === 'file://' && req.responseText) {
              resolve(req.responseText);
            } else {
              reject(new Error('HTTP status: ' + req.status + ' retrieving ' + url));
            }
          }
        };

        req.send();
      });
    }
    /**
     * Convert a Base64-encoded string into its original representation.
     * Used for inline sourcemaps.
     *
     * @param {String} b64str Base-64 encoded string
     * @returns {String} original representation of the base64-encoded string.
     */


    function _atob(b64str) {
      if (typeof window !== 'undefined' && window.atob) {
        return window.atob(b64str);
      } else {
        throw new Error('You must supply a polyfill for window.atob in this environment');
      }
    }

    function _parseJson(string) {
      if (typeof JSON !== 'undefined' && JSON.parse) {
        return JSON.parse(string);
      } else {
        throw new Error('You must supply a polyfill for JSON.parse in this environment');
      }
    }

    function _findFunctionName(source, lineNumber
    /*, columnNumber*/
    ) {
      var syntaxes = [// {name} = function ({args}) TODO args capture
      /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, // function {name}({args}) m[1]=name m[2]=args
      /function\s+([^('"`]*?)\s*\(([^)]*)\)/, // {name} = eval()
      /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, // fn_name() {
      /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/, // {name} = () => {
      /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/];
      var lines = source.split('\n'); // Walk backwards in the source lines until we find the line which matches one of the patterns above

      var code = '';
      var maxLines = Math.min(lineNumber, 20);

      for (var i = 0; i < maxLines; ++i) {
        // lineNo is 1-based, source[] is 0-based
        var line = lines[lineNumber - i - 1];
        var commentPos = line.indexOf('//');

        if (commentPos >= 0) {
          line = line.substr(0, commentPos);
        }

        if (line) {
          code = line + code;
          var len = syntaxes.length;

          for (var index = 0; index < len; index++) {
            var m = syntaxes[index].exec(code);

            if (m && m[1]) {
              return m[1];
            }
          }
        }
      }

      return undefined;
    }

    function _ensureSupportedEnvironment() {
      if (typeof Object.defineProperty !== 'function' || typeof Object.create !== 'function') {
        throw new Error('Unable to consume source maps in older browsers');
      }
    }

    function _ensureStackFrameIsLegit(stackframe) {
      if (_typeof(stackframe) !== 'object') {
        throw new TypeError('Given StackFrame is not an object');
      } else if (typeof stackframe.fileName !== 'string') {
        throw new TypeError('Given file name is not a String');
      } else if (typeof stackframe.lineNumber !== 'number' || stackframe.lineNumber % 1 !== 0 || stackframe.lineNumber < 1) {
        throw new TypeError('Given line number must be a positive integer');
      } else if (typeof stackframe.columnNumber !== 'number' || stackframe.columnNumber % 1 !== 0 || stackframe.columnNumber < 0) {
        throw new TypeError('Given column number must be a non-negative integer');
      }

      return true;
    }

    function _findSourceMappingURL(source) {
      var sourceMappingUrlRegExp = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/mg;
      var lastSourceMappingUrl;
      var matchSourceMappingUrl; // eslint-disable-next-line no-cond-assign

      while (matchSourceMappingUrl = sourceMappingUrlRegExp.exec(source)) {
        lastSourceMappingUrl = matchSourceMappingUrl[1];
      }

      if (lastSourceMappingUrl) {
        return lastSourceMappingUrl;
      } else {
        throw new Error('sourceMappingURL not found');
      }
    }

    function _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache) {
      return new Promise(function (resolve, reject) {
        var loc = sourceMapConsumer.originalPositionFor({
          line: stackframe.lineNumber,
          column: stackframe.columnNumber
        });

        if (loc.source) {
          // cache mapped sources
          var mappedSource = sourceMapConsumer.sourceContentFor(loc.source);

          if (mappedSource) {
            sourceCache[loc.source] = mappedSource;
          }

          resolve( // given stackframe and source location, update stackframe
          new StackFrame({
            functionName: loc.name || stackframe.functionName,
            args: stackframe.args,
            fileName: loc.source,
            lineNumber: loc.line,
            columnNumber: loc.column
          }));
        } else {
          reject(new Error('Could not get original source for given stackframe and source map'));
        }
      });
    }
    /**
     * @constructor
     * @param {Object} opts
     *      opts.sourceCache = {url: "Source String"} => preload source cache
     *      opts.sourceMapConsumerCache = {/path/file.js.map: SourceMapConsumer}
     *      opts.offline = True to prevent network requests.
     *              Best effort without sources or source maps.
     *      opts.ajax = Promise returning function to make X-Domain requests
     */


    return function StackTraceGPS(opts) {
      if (!(this instanceof StackTraceGPS)) {
        return new StackTraceGPS(opts);
      }

      opts = opts || {};
      this.sourceCache = opts.sourceCache || {};
      this.sourceMapConsumerCache = opts.sourceMapConsumerCache || {};
      this.ajax = opts.ajax || _xdr;
      this._atob = opts.atob || _atob;

      this._get = function _get(location) {
        return new Promise(function (resolve, reject) {
          var isDataUrl = location.substr(0, 5) === 'data:';

          if (this.sourceCache[location]) {
            resolve(this.sourceCache[location]);
          } else if (opts.offline && !isDataUrl) {
            reject(new Error('Cannot make network requests in offline mode'));
          } else {
            if (isDataUrl) {
              // data URLs can have parameters.
              // see http://tools.ietf.org/html/rfc2397
              var supportedEncodingRegexp = /^data:application\/json;([\w=:"-]+;)*base64,/;
              var match = location.match(supportedEncodingRegexp);

              if (match) {
                var sourceMapStart = match[0].length;
                var encodedSource = location.substr(sourceMapStart);

                var source = this._atob(encodedSource);

                this.sourceCache[location] = source;
                resolve(source);
              } else {
                reject(new Error('The encoding of the inline sourcemap is not supported'));
              }
            } else {
              var xhrPromise = this.ajax(location, {
                method: 'get'
              }); // Cache the Promise to prevent duplicate in-flight requests

              this.sourceCache[location] = xhrPromise;
              xhrPromise.then(resolve, reject);
            }
          }
        }.bind(this));
      };
      /**
       * Creating SourceMapConsumers is expensive, so this wraps the creation of a
       * SourceMapConsumer in a per-instance cache.
       *
       * @param {String} sourceMappingURL = URL to fetch source map from
       * @param {String} defaultSourceRoot = Default source root for source map if undefined
       * @returns {Promise} that resolves a SourceMapConsumer
       */


      this._getSourceMapConsumer = function _getSourceMapConsumer(sourceMappingURL, defaultSourceRoot) {
        return new Promise(function (resolve) {
          if (this.sourceMapConsumerCache[sourceMappingURL]) {
            resolve(this.sourceMapConsumerCache[sourceMappingURL]);
          } else {
            var sourceMapConsumerPromise = new Promise(function (resolve, reject) {
              return this._get(sourceMappingURL).then(function (sourceMapSource) {
                if (typeof sourceMapSource === 'string') {
                  sourceMapSource = _parseJson(sourceMapSource.replace(/^\)\]\}'/, ''));
                }

                if (typeof sourceMapSource.sourceRoot === 'undefined') {
                  sourceMapSource.sourceRoot = defaultSourceRoot;
                }

                resolve(new SourceMap.SourceMapConsumer(sourceMapSource));
              }, reject);
            }.bind(this));
            this.sourceMapConsumerCache[sourceMappingURL] = sourceMapConsumerPromise;
            resolve(sourceMapConsumerPromise);
          }
        }.bind(this));
      };
      /**
       * Given a StackFrame, enhance function name and use source maps for a
       * better StackFrame.
       *
       * @param {StackFrame} stackframe object
       * @returns {Promise} that resolves with with source-mapped StackFrame
       */


      this.pinpoint = function StackTraceGPS$$pinpoint(stackframe) {
        return new Promise(function (resolve, reject) {
          this.getMappedLocation(stackframe).then(function (mappedStackFrame) {
            function resolveMappedStackFrame() {
              resolve(mappedStackFrame);
            }

            this.findFunctionName(mappedStackFrame).then(resolve, resolveMappedStackFrame) // eslint-disable-next-line no-unexpected-multiline
            ['catch'](resolveMappedStackFrame);
          }.bind(this), reject);
        }.bind(this));
      };
      /**
       * Given a StackFrame, guess function name from location information.
       *
       * @param {StackFrame} stackframe
       * @returns {Promise} that resolves with enhanced StackFrame.
       */


      this.findFunctionName = function StackTraceGPS$$findFunctionName(stackframe) {
        return new Promise(function (resolve, reject) {
          _ensureStackFrameIsLegit(stackframe);

          this._get(stackframe.fileName).then(function getSourceCallback(source) {
            var lineNumber = stackframe.lineNumber;
            var columnNumber = stackframe.columnNumber;

            var guessedFunctionName = _findFunctionName(source, lineNumber); // Only replace functionName if we found something


            if (guessedFunctionName) {
              resolve(new StackFrame({
                functionName: guessedFunctionName,
                args: stackframe.args,
                fileName: stackframe.fileName,
                lineNumber: lineNumber,
                columnNumber: columnNumber
              }));
            } else {
              resolve(stackframe);
            }
          }, reject)['catch'](reject);
        }.bind(this));
      };
      /**
       * Given a StackFrame, seek source-mapped location and return new enhanced StackFrame.
       *
       * @param {StackFrame} stackframe
       * @returns {Promise} that resolves with enhanced StackFrame.
       */


      this.getMappedLocation = function StackTraceGPS$$getMappedLocation(stackframe) {
        return new Promise(function (resolve, reject) {
          _ensureSupportedEnvironment();

          _ensureStackFrameIsLegit(stackframe);

          var sourceCache = this.sourceCache;
          var fileName = stackframe.fileName;

          this._get(fileName).then(function (source) {
            var sourceMappingURL = _findSourceMappingURL(source);

            var isDataUrl = sourceMappingURL.substr(0, 5) === 'data:';
            var defaultSourceRoot = fileName.substring(0, fileName.lastIndexOf('/') + 1);

            if (sourceMappingURL[0] !== '/' && !isDataUrl && !/^https?:\/\/|^\/\//i.test(sourceMappingURL)) {
              sourceMappingURL = defaultSourceRoot + sourceMappingURL;
            }

            return this._getSourceMapConsumer(sourceMappingURL, defaultSourceRoot).then(function (sourceMapConsumer) {
              return _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache).then(resolve)['catch'](function () {
                resolve(stackframe);
              });
            });
          }.bind(this), reject)['catch'](reject);
        }.bind(this));
      };
    };
  });
});

var StackTraceGps = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), stacktraceGps, {
    'default': stacktraceGps
}));

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

/*tslint:disable:no-use-before-declare*/
function hide() {
  return function hideOperation(source) {
    return source.lift(new HideOperator());
  };
}

var HideOperator = /*#__PURE__*/function () {
  // It would be better if this were a symbol. However ...
  // error TS1166: A computed property name in a class property declaration must directly refer to a built-in symbol.
  function HideOperator() {
    _classCallCheck(this, HideOperator);

    _defineProperty(this, "hide", true);
  }

  _createClass(HideOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);

  return HideOperator;
}();

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

/*tslint:disable:no-use-before-declare*/
function tag(tag) {
  return function tagOperation(source) {
    return source.lift(new TagOperator(tag));
  };
}

var TagOperator = /*#__PURE__*/function () {
  // It would be better if this were a symbol. However ...
  // error TS1166: A computed property name in a class property declaration must directly refer to a built-in symbol.
  function TagOperator(tag) {
    _classCallCheck(this, TagOperator);

    _defineProperty(this, "tag", void 0);

    this.tag = tag;
  }

  _createClass(TagOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);

  return TagOperator;
}();

var stackTraceRefSymbol = Symbol("stackTraceRef");
function getMappedStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.mappedStackTrace : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
}
function getStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.stackTrace : [];
}
function getStackTraceRef(ref) {
  return ref[stackTraceRefSymbol];
}

function setStackTraceRef(ref, value) {
  ref[stackTraceRefSymbol] = value;
  return value;
}

var StackTracePlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(StackTracePlugin, _BasePlugin);

  var _super = _createSuper(StackTracePlugin);

  function StackTracePlugin() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sourceMaps = _ref.sourceMaps,
        sourceMaps = _ref$sourceMaps === void 0 ? false : _ref$sourceMaps;

    _classCallCheck(this, StackTracePlugin);

    _this = _super.call(this, "stackTrace");

    _defineProperty(_assertThisInitialized(_this), "sourceCache_", void 0);

    _defineProperty(_assertThisInitialized(_this), "sourceMaps_", void 0);

    _this.sourceCache_ = {};
    _this.sourceMaps_ = sourceMaps;
    return _this;
  }

  _createClass(StackTracePlugin, [{
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var _this2 = this;

      var stackFrames = this.getStackFrames_();

      if (this.sourceMaps_ && typeof window !== "undefined" && window.location.protocol !== "file:") {
        setStackTraceRef(ref, {
          mappedStackTrace: Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
            var gps = new StackTraceGps({
              sourceCache: _this2.sourceCache_
            });
            return Promise.all(stackFrames.map(function (stackFrame) {
              return gps.pinpoint(stackFrame)["catch"](function () {
                return stackFrame;
              });
            }));
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1), hide()),
          stackTrace: stackFrames
        });
      } else {
        setStackTraceRef(ref, {
          mappedStackTrace: Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(stackFrames).pipe(hide()),
          stackTrace: stackFrames
        });
      }
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.sourceCache_ = {};
    }
  }, {
    key: "getStackFrames_",
    value: function getStackFrames_() {
      /* tslint:disable:no-implicit-any-catch */
      try {
        throw new Error();
      } catch (error) {
        var core = true;
        return errorStackParser.parse(error).filter(function (stackFrame) {
          var result = !core;

          if (/coreSubscribe_/.test(stackFrame.functionName || "")) {
            core = false;
          }

          return result;
        });
      }
    }
  }]);

  return StackTracePlugin;
}(BasePlugin);

var cycleDetectedSymbol = Symbol("cycleDetected");
var cycleWarnedSymbol = Symbol("cycleWarned");
var CyclePlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(CyclePlugin, _BasePlugin);

  var _super = _createSuper(CyclePlugin);

  function CyclePlugin(spy, partialLogger) {
    var _this;

    _classCallCheck(this, CyclePlugin);

    _this = _super.call(this, "cycle");

    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);

    _defineProperty(_assertThisInitialized(_this), "nexts_", []);

    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);

    _this.logger_ = toLogger(partialLogger);
    _this.spy_ = spy;
    return _this;
  }

  _createClass(CyclePlugin, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var nexts_ = this.nexts_;
      nexts_.pop();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var logger_ = this.logger_,
          nexts_ = this.nexts_,
          spy_ = this.spy_;
      var observable = ref.observable,
          subscription = ref.subscription;

      if (nexts_.indexOf(ref) !== -1) {
        if (!subscription[cycleDetectedSymbol]) {
          subscription[cycleDetectedSymbol] = true;

          if (nexts_.findIndex(function (n) {
            return n.subscription[cycleWarnedSymbol];
          }) === -1) {
            subscription[cycleWarnedSymbol] = true;
            var stackFrames = getStackTrace(ref);

            if (stackFrames.length === 0) {
              spy_.warnOnce(console, "Stack tracing is not enabled; add the StackTracePlugin before the CyclePlugin.");
            }

            var stackTrace = stackFrames.length ? "; subscribed at\n".concat(stackFrames.join("\n")) : "";
            var type = inferType(observable);
            logger_.warn("Cyclic next detected; type = ".concat(type, "; value = ").concat(value).concat(stackTrace));
          }
        }
      }

      nexts_.push(ref);
    }
  }]);

  return CyclePlugin;
}(BasePlugin);

var DebugPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(DebugPlugin, _BasePlugin);

  var _super = _createSuper(DebugPlugin);

  function DebugPlugin(match, notifications) {
    var _this;

    _classCallCheck(this, DebugPlugin);

    _this = _super.call(this, "debug(".concat(toString(match), ")"));

    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);

    _defineProperty(_assertThisInitialized(_this), "matcher_", void 0);

    _this.notifications_ = notifications;

    _this.matcher_ = function (ref, notification) {
      return matches(ref, match) && _this.notifications_.indexOf(notification) !== -1;
    };

    return _this;
  }

  _createClass(DebugPlugin, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var matcher_ = this.matcher_;

      if (matcher_(ref, "complete")) {
        debugger;
      }
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var matcher_ = this.matcher_;

      if (matcher_(ref, "error")) {
        debugger;
      }
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var matcher_ = this.matcher_;

      if (matcher_(ref, "next")) {
        debugger;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var matcher_ = this.matcher_;

      if (matcher_(ref, "subscribe")) {
        debugger;
      }
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var matcher_ = this.matcher_;

      if (matcher_(ref, "unsubscribe")) {
        debugger;
      }
    }
  }]);

  return DebugPlugin;
}(BasePlugin);

var graphRefSymbol = Symbol("graphRef");
function getGraphRef(ref) {
  return ref[graphRefSymbol];
}

function setGraphRef(ref, value) {
  ref[graphRefSymbol] = value;
  return value;
}

var GraphPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(GraphPlugin, _BasePlugin);

  var _super = _createSuper(GraphPlugin);

  function GraphPlugin() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$keptDuration = _ref.keptDuration,
        keptDuration = _ref$keptDuration === void 0 ? 30000 : _ref$keptDuration;

    _classCallCheck(this, GraphPlugin);

    _this = _super.call(this, "graph");

    _defineProperty(_assertThisInitialized(_this), "flushIntervalId_", void 0);

    _defineProperty(_assertThisInitialized(_this), "flushQueue_", void 0);

    _defineProperty(_assertThisInitialized(_this), "keptDuration_", void 0);

    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);

    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);

    _this.flushIntervalId_ = undefined;
    _this.flushQueue_ = [];
    _this.keptDuration_ = keptDuration;
    _this.notifications_ = [];
    _this.sentinel_ = {
      depth: 0,
      flattened: false,
      flattenings: [],
      flatteningsFlushed: 0,
      link: undefined,
      rootSink: undefined,
      sentinel: undefined,
      sink: undefined,
      sources: [],
      sourcesFlushed: 0
    };
    _this.sentinel_.link = _this.sentinel_;
    _this.sentinel_.sentinel = _this.sentinel_;
    return _this;
  }

  _createClass(GraphPlugin, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
      this.flush_(ref);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "next",
        ref: ref
      });
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var notifications_ = this.notifications_,
          sentinel_ = this.sentinel_;
      var graphRef = setGraphRef(ref, {
        depth: 1,
        flattened: false,
        flattenings: [],
        flatteningsFlushed: 0,
        link: sentinel_,
        rootSink: undefined,
        sentinel: sentinel_,
        sink: undefined,
        sources: [],
        sourcesFlushed: 0
      });
      var length = notifications_.length;

      if (length > 0 && notifications_[length - 1].notification === "next") {
        var sinkRef = notifications_[length - 1].ref;
        var sinkGraphRef = getGraphRef(sinkRef);
        sinkGraphRef.flattenings.push(ref);
        graphRef.link = sinkGraphRef;
        graphRef.flattened = true;
        graphRef.rootSink = sinkGraphRef.rootSink || sinkRef;
        graphRef.sink = sinkRef;
      } else {
        for (var n = length - 1; n > -1; --n) {
          if (notifications_[n].notification === "subscribe") {
            var _sinkRef = notifications_[length - 1].ref;

            var _sinkGraphRef = getGraphRef(_sinkRef);

            _sinkGraphRef.sources.push(ref);

            graphRef.depth = _sinkGraphRef.depth + 1;
            graphRef.link = _sinkGraphRef;
            graphRef.rootSink = _sinkGraphRef.rootSink || _sinkRef;
            graphRef.sink = _sinkRef;
            break;
          }
        }
      }

      if (graphRef.link === graphRef.sentinel) {
        graphRef.sentinel.sources.push(ref);
      }

      notifications_.push({
        notification: "subscribe",
        ref: ref
      });
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "unsubscribe",
        ref: ref
      });
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.flushIntervalId_ !== undefined) {
        clearInterval(this.flushIntervalId_);
        this.flushIntervalId_ = undefined;
      }
    }
  }, {
    key: "flush_",
    value: function flush_(ref) {
      var _this2 = this;

      var graphRef = getGraphRef(ref);
      var flattenings = graphRef.flattenings,
          sources = graphRef.sources;

      if (!ref.unsubscribed || !flattenings.every(function (ref) {
        return ref.unsubscribed;
      }) || !sources.every(function (ref) {
        return ref.unsubscribed;
      })) {
        return;
      }

      var keptDuration_ = this.keptDuration_;
      var link = graphRef.link;

      var flush = function flush() {
        var flattenings = link.flattenings,
            sources = link.sources;
        var flatteningIndex = flattenings.indexOf(ref);

        if (flatteningIndex !== -1) {
          flattenings.splice(flatteningIndex, 1);
          ++link.flatteningsFlushed;
        }

        var sourceIndex = sources.indexOf(ref);

        if (sourceIndex !== -1) {
          sources.splice(sourceIndex, 1);
          ++link.sourcesFlushed;
        }
      };

      if (keptDuration_ === 0) {
        flush();
      } else if (keptDuration_ > 0 && keptDuration_ < Infinity) {
        this.flushQueue_.push({
          due: Date.now() + keptDuration_,
          flush: flush
        });

        if (this.flushIntervalId_ === undefined) {
          this.flushIntervalId_ = setInterval(function () {
            var now = Date.now();
            _this2.flushQueue_ = _this2.flushQueue_.filter(function (q) {
              if (q.due > now) {
                return true;
              }

              q.flush();
              return false;
            });

            if (_this2.flushQueue_.length === 0) {
              clearInterval(_this2.flushIntervalId_);
              _this2.flushIntervalId_ = undefined;
            }
          }, keptDuration_);
        }
      }
    }
  }]);

  return GraphPlugin;
}(BasePlugin);

var LetPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(LetPlugin, _BasePlugin);

  var _super = _createSuper(LetPlugin);

  function LetPlugin(match, select) {
    var _this;

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$complete = _ref.complete,
        complete = _ref$complete === void 0 ? true : _ref$complete;

    _classCallCheck(this, LetPlugin);

    _this = _super.call(this, "let(".concat(toString(match), ")"));

    _defineProperty(_assertThisInitialized(_this), "match_", void 0);

    _defineProperty(_assertThisInitialized(_this), "select_", void 0);

    _this.match_ = match;
    _this.select_ = complete ? select : function (source) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"], select(source));
    };
    return _this;
  }

  _createClass(LetPlugin, [{
    key: "select",
    value: function select(ref) {
      var match_ = this.match_,
          select_ = this.select_;

      if (matches(ref, match_)) {
        return select_;
      }

      return undefined;
    }
  }]);

  return LetPlugin;
}(BasePlugin);

var LogPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(LogPlugin, _BasePlugin);

  var _super = _createSuper(LogPlugin);

  function LogPlugin(spy, tagMatch) {
    var _this;

    _classCallCheck(this, LogPlugin);

    _this = _super.call(this, "log(".concat(toString(tagMatch), ")"));

    _defineProperty(_assertThisInitialized(_this), "auditor_", void 0);

    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);

    _defineProperty(_assertThisInitialized(_this), "notificationMatch_", void 0);

    _defineProperty(_assertThisInitialized(_this), "tagMatch_", void 0);

    _this.auditor_ = spy.auditor;
    _this.tagMatch_ = tagMatch;
    var defaultMatch = /.+/;

    switch (arguments.length <= 2 ? 0 : arguments.length - 2) {
      case 0:
        _this.notificationMatch_ = defaultMatch;
        _this.logger_ = toLogger(defaultLogger);
        break;

      case 1:
        if (typeof (arguments.length <= 2 ? undefined : arguments[2]) === "function") {
          _this.notificationMatch_ = arguments.length <= 2 ? undefined : arguments[2];
          _this.logger_ = toLogger(defaultLogger);
        } else {
          _this.notificationMatch_ = defaultMatch;
          _this.logger_ = toLogger(arguments.length <= 2 ? undefined : arguments[2]);
        }

        break;

      default:
        _this.notificationMatch_ = arguments.length <= 2 ? undefined : arguments[2];
        _this.logger_ = toLogger(arguments.length <= 3 ? undefined : arguments[3]);
        break;
    }

    return _this;
  }

  _createClass(LogPlugin, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      this.log_(ref, "complete");
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      this.log_(ref, "error", error);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      this.log_(ref, "next", value);
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      this.log_(ref, "subscribe");
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      this.log_(ref, "unsubscribe");
    }
  }, {
    key: "log_",
    value: function log_(ref, notification, param) {
      var _this2 = this;

      var auditor_ = this.auditor_,
          notificationMatch_ = this.notificationMatch_,
          tagMatch_ = this.tagMatch_;

      if (matches(ref, tagMatch_) && matches(ref, notificationMatch_, notification)) {
        auditor_.audit(this, function (ignored) {
          var logger_ = _this2.logger_;
          var observable = ref.observable;
          var tag = read(observable);
          var type = inferType(observable);
          var matching = typeof tagMatch_ === "string" ? "" : "; matching ".concat(toString(tagMatch_));
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          var description = tag ? "Tag = ".concat(tag, "; notification = ").concat(notification).concat(matching).concat(audit) : "Type = ".concat(type, "; notification = ").concat(notification).concat(matching).concat(audit);

          switch (notification) {
            case "error":
              logger_.error("".concat(description, "; error ="), param);
              break;

            case "next":
              logger_.log("".concat(description, "; value ="), param);
              break;

            default:
              logger_.log(description);
              break;
          }
        });
      }
    }
  }]);

  return LogPlugin;
}(BasePlugin);

var Deck = /*#__PURE__*/function () {
  function Deck(match) {
    _classCallCheck(this, Deck);

    _defineProperty(this, "teardown", void 0);

    _defineProperty(this, "match_", void 0);

    _defineProperty(this, "paused_", true);

    _defineProperty(this, "states_", new Map());

    _defineProperty(this, "stats_", void 0);

    this.match_ = match;
    this.stats_ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
  }

  _createClass(Deck, [{
    key: "clear",
    value: function clear() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return true;
      };
      this.states_.forEach(function (state) {
        state.notifications_ = state.notifications_.filter(function (notification) {
          return !predicate(notification);
        });
      });
      this.broadcast_();
    }
  }, {
    key: "log",
    value: function log() {
      var partialLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLogger;
      var logger = toLogger(partialLogger);
      logger.group("Deck matching ".concat(toString(this.match_)));
      logger.log("Paused =", this.paused_);
      this.states_.forEach(function (state) {
        logger.group("Observable; tag = ".concat(state.tag_));
        logger.log("Notifications =", state.notifications_);
        logger.groupEnd();
      });
      logger.groupEnd();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused_ = true;
      this.broadcast_();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.states_.forEach(function (state) {
        while (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.paused_ = false;
      this.broadcast_();
    }
  }, {
    key: "select",
    value: function select(ref) {
      var _this = this;

      var observable = ref.observable;
      return function (source) {
        var state = _this.states_.get(observable);

        if (state) {
          state.subscription_.unsubscribe();
        } else {
          state = {
            notifications_: [],
            subject_: new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](),
            subscription_: undefined,
            tag_: read(observable)
          };

          _this.states_.set(observable, state);
        }

        state.subscription_ = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["materialize"])(), hide()).subscribe({
          next: function next(notification) {
            if (_this.paused_) {
              state.notifications_.push(notification);
            } else {
              state.subject_.next(notification);
            }

            _this.broadcast_();
          }
        });

        _this.broadcast_();

        return state.subject_.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["dematerialize"])());
      };
    }
  }, {
    key: "skip",
    value: function skip() {
      this.states_.forEach(function (state) {
        if (state.notifications_.length > 0) {
          state.notifications_.shift();
        }
      });
      this.broadcast_();
    }
  }, {
    key: "step",
    value: function step() {
      this.states_.forEach(function (state) {
        if (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.broadcast_();
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.states_.forEach(function (state) {
        if (state.subscription_) {
          state.subscription_.unsubscribe();
          state.subscription_ = undefined;
        }
      });
      this.broadcast_();
    }
  }, {
    key: "broadcast_",
    value: function broadcast_() {
      var paused_ = this.paused_,
          states_ = this.states_,
          stats_ = this.stats_;
      var notifications = 0;
      states_.forEach(function (state) {
        return notifications += state.notifications_.length;
      });
      stats_.next({
        notifications: notifications,
        paused: paused_
      });
    }
  }, {
    key: "stats",
    get: function get() {
      return this.stats_.asObservable();
    }
  }, {
    key: "paused",
    get: function get() {
      return this.paused_;
    }
  }]);

  return Deck;
}();
var PausePlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(PausePlugin, _BasePlugin);

  var _super = _createSuper(PausePlugin);

  function PausePlugin(match) {
    var _this2;

    _classCallCheck(this, PausePlugin);

    _this2 = _super.call(this, "pause(".concat(toString(match), ")"));

    _defineProperty(_assertThisInitialized(_this2), "match_", void 0);

    _defineProperty(_assertThisInitialized(_this2), "deck_", void 0);

    _this2.deck_ = new Deck(match);
    _this2.match_ = match;
    return _this2;
  }

  _createClass(PausePlugin, [{
    key: "select",
    value: function select(ref) {
      var deck_ = this.deck_,
          match_ = this.match_;

      if (matches(ref, match_)) {
        return deck_.select(ref);
      }

      return undefined;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var deck_ = this.deck_;

      if (deck_) {
        deck_.resume();
        deck_.unsubscribe();
      }
    }
  }, {
    key: "deck",
    get: function get() {
      var deck_ = this.deck_;
      return deck_;
    }
  }, {
    key: "match",
    get: function get() {
      var match_ = this.match_;
      return match_;
    }
  }]);

  return PausePlugin;
}(BasePlugin);

var snapshotRefSymbol = Symbol("snapshotRef");
function getSnapshotRef(ref) {
  return ref[snapshotRefSymbol];
}

function mapStackTraces(snapshots) {
  var observables = [Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null)];
  snapshots.forEach(function (snapshot) {
    if (snapshot.subscriptions) {
      snapshot.subscriptions.forEach(mapSubscriptionStackTraces);
    } else {
      mapSubscriptionStackTraces(snapshot);
    }
  });
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(undefined), hide());

  function mapSubscriptionStackTraces(subscriptionSnapshot) {
    observables.push(subscriptionSnapshot.mappedStackTrace);

    if (subscriptionSnapshot.rootSink) {
      observables.push(subscriptionSnapshot.rootSink.mappedStackTrace);
    }
  }
}

function setSnapshotRef(ref, value) {
  ref[snapshotRefSymbol] = value;
  return value;
}

var SnapshotPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(SnapshotPlugin, _BasePlugin);

  var _super = _createSuper(SnapshotPlugin);

  function SnapshotPlugin(spy) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$keptValues = _ref.keptValues,
        keptValues = _ref$keptValues === void 0 ? 4 : _ref$keptValues;

    _classCallCheck(this, SnapshotPlugin);

    _this = _super.call(this, "snapshot");

    _defineProperty(_assertThisInitialized(_this), "keptValues_", void 0);

    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);

    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);

    _this.keptValues_ = keptValues;
    _this.sentinel_ = undefined;
    _this.spy_ = spy;
    return _this;
  }

  _createClass(SnapshotPlugin, [{
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.unsubscribed = true;
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.complete = true;
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.error = error;
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var tick = this.spy_.tick;
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = tick;
      snapshotRef.values.push({
        tick: tick,
        timestamp: Date.now(),
        value: value
      });
      var keptValues_ = this.keptValues_;
      var count = snapshotRef.values.length - keptValues_;

      if (count > 0) {
        snapshotRef.values.splice(0, count);
        snapshotRef.valuesFlushed += count;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      setSnapshotRef(ref, {
        complete: false,
        error: undefined,
        tick: this.spy_.tick,
        timestamp: Date.now(),
        unsubscribed: false,
        values: [],
        valuesFlushed: 0
      });
      var graphRef = getGraphRef(ref);

      if (graphRef) {
        this.sentinel_ = graphRef.sentinel;
      } else {
        this.spy_.warnOnce(console, "Graphing is not enabled; add the GraphPlugin before the SnapshotPlugin.");
      }
    }
  }, {
    key: "snapshotAll",
    value: function snapshotAll() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          since = _ref2.since;

      var observables = new Map();
      var subscribers = new Map();
      var subscriptions = new Map();
      var subscriptionRefs = this.getSubscriptionRefs_();
      subscriptionRefs.forEach(function (unused, ref) {
        var _subscriberSnapshot$v;

        var observable = ref.observable,
            subscriber = ref.subscriber,
            subscription = ref.subscription;
        var graphRef = getGraphRef(ref);
        var flatteningsFlushed = graphRef.flatteningsFlushed,
            sourcesFlushed = graphRef.sourcesFlushed;
        var snapshotRef = getSnapshotRef(ref);
        var complete = snapshotRef.complete,
            error = snapshotRef.error,
            tick = snapshotRef.tick,
            timestamp = snapshotRef.timestamp,
            unsubscribed = snapshotRef.unsubscribed,
            values = snapshotRef.values,
            valuesFlushed = snapshotRef.valuesFlushed;
        var subscriptionSnapshot = {
          complete: complete,
          error: error,
          flattenings: new Map(),
          flatteningsFlushed: flatteningsFlushed,
          id: identify(ref),
          mappedStackTrace: getMappedStackTrace(ref),
          observable: observable,
          rootSink: undefined,
          sink: undefined,
          sources: new Map(),
          sourcesFlushed: sourcesFlushed,
          stackTrace: getStackTrace(ref),
          subscriber: subscriber,
          subscription: subscription,
          tick: tick,
          timestamp: timestamp,
          unsubscribed: unsubscribed
        };
        subscriptions.set(subscription, subscriptionSnapshot);
        var subscriberSnapshot = subscribers.get(subscriber);

        if (!subscriberSnapshot) {
          subscriberSnapshot = {
            id: identify(subscriber),
            subscriber: subscriber,
            subscriptions: new Map(),
            tick: tick,
            values: [],
            valuesFlushed: 0
          };
          subscribers.set(subscriber, subscriberSnapshot);
        }

        subscriberSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        subscriberSnapshot.tick = Math.max(subscriberSnapshot.tick, tick);

        (_subscriberSnapshot$v = subscriberSnapshot.values).push.apply(_subscriberSnapshot$v, _toConsumableArray(values));

        subscriberSnapshot.valuesFlushed += valuesFlushed;
        var observableSnapshot = observables.get(observable);

        if (!observableSnapshot) {
          observableSnapshot = {
            id: identify(observable),
            observable: observable,
            path: inferPath(observable),
            subscriptions: new Map(),
            tag: read(observable),
            tick: tick,
            type: inferType(observable)
          };
          observables.set(observable, observableSnapshot);
        }

        observableSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        observableSnapshot.tick = Math.max(observableSnapshot.tick, tick);
      });
      subscriptionRefs.forEach(function (unused, ref) {
        var graphRef = getGraphRef(ref);
        var subscriptionSnapshot = subscriptions.get(ref.subscription);

        if (graphRef.sink) {
          subscriptionSnapshot.sink = subscriptions.get(graphRef.sink.subscription);
        }

        if (graphRef.rootSink) {
          subscriptionSnapshot.rootSink = subscriptions.get(graphRef.rootSink.subscription);
        }

        graphRef.flattenings.forEach(function (m) {
          return subscriptionSnapshot.flattenings.set(m.subscription, subscriptions.get(m.subscription));
        });
        graphRef.sources.forEach(function (s) {
          return subscriptionSnapshot.sources.set(s.subscription, subscriptions.get(s.subscription));
        });
      });
      subscribers.forEach(function (subscriberSnapshot) {
        subscriberSnapshot.values.sort(function (a, b) {
          return a.tick - b.tick;
        });
      });

      if (since !== undefined) {
        observables.forEach(function (value, key) {
          if (value.tick <= since.tick) {
            observables["delete"](key);
          }
        });
        subscribers.forEach(function (value, key) {
          if (value.tick <= since.tick) {
            subscribers["delete"](key);
          }
        });
        subscriptions.forEach(function (value, key) {
          if (value.tick <= since.tick) {
            subscriptions["delete"](key);
          }
        });
      }

      return {
        mapStackTraces: mapStackTraces,
        observables: observables,
        subscribers: subscribers,
        subscriptions: subscriptions,
        tick: this.spy_.tick
      };
    }
  }, {
    key: "snapshotObservable",
    value: function snapshotObservable(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.observables.get(ref.observable);
    }
  }, {
    key: "snapshotSubscriber",
    value: function snapshotSubscriber(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.subscribers.get(ref.subscriber);
    }
  }, {
    key: "addSubscriptionRefs_",
    value: function addSubscriptionRefs_(ref, map) {
      var _this2 = this;

      map.set(ref, true);
      var graphRef = getGraphRef(ref);
      graphRef.flattenings.forEach(function (m) {
        return _this2.addSubscriptionRefs_(m, map);
      });
      graphRef.sources.forEach(function (s) {
        return _this2.addSubscriptionRefs_(s, map);
      });
    }
  }, {
    key: "getSubscriptionRefs_",
    value: function getSubscriptionRefs_() {
      var _this3 = this;

      var sentinel_ = this.sentinel_;
      var map = new Map();

      if (sentinel_) {
        sentinel_.sources.forEach(function (ref) {
          return _this3.addSubscriptionRefs_(ref, map);
        });
      }

      return map;
    }
  }]);

  return SnapshotPlugin;
}(BasePlugin);

var StatsPlugin = /*#__PURE__*/function (_BasePlugin) {
  _inherits(StatsPlugin, _BasePlugin);

  var _super = _createSuper(StatsPlugin);

  function StatsPlugin(spy) {
    var _this;

    _classCallCheck(this, StatsPlugin);

    _this = _super.call(this, "stats");

    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);

    _defineProperty(_assertThisInitialized(_this), "stats_", void 0);

    _defineProperty(_assertThisInitialized(_this), "time_", void 0);

    _this.spy_ = spy;
    _this.stats_ = {
      completes: 0,
      errors: 0,
      flattenedSubscribes: 0,
      leafSubscribes: 0,
      maxDepth: 0,
      nexts: 0,
      rootSubscribes: 0,
      subscribes: 0,
      tick: 0,
      timespan: 0,
      totalDepth: 0,
      unsubscribes: 0
    };
    _this.time_ = 0;
    return _this;
  }

  _createClass(StatsPlugin, [{
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var stats_ = this.stats_;
      var graphRef = getGraphRef(ref);

      if (graphRef) {
        var depth = graphRef.depth,
            flattened = graphRef.flattened,
            flattenings = graphRef.flattenings,
            flatteningsFlushed = graphRef.flatteningsFlushed,
            rootSink = graphRef.rootSink,
            sources = graphRef.sources,
            sourcesFlushed = graphRef.sourcesFlushed;

        if (!rootSink) {
          stats_.rootSubscribes += 1;
        }

        if (flattened) {
          stats_.flattenedSubscribes += 1;
        }

        if (flattenings.length + flatteningsFlushed + sources.length + sourcesFlushed === 0) {
          if (stats_.maxDepth < depth) {
            stats_.maxDepth = depth;
          }

          stats_.leafSubscribes += 1;
          stats_.totalDepth += depth;
        }
      }
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var stats_ = this.stats_;
      ++stats_.completes;
      this.all_();
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var stats_ = this.stats_;
      ++stats_.errors;
      this.all_();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var stats_ = this.stats_;
      ++stats_.nexts;
      this.all_();
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.subscribes;
      this.all_();
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.unsubscribes;
      this.all_();
    }
  }, {
    key: "all_",
    value: function all_() {
      var spy_ = this.spy_,
          stats_ = this.stats_,
          time_ = this.time_;

      if (time_ === 0) {
        this.time_ = Date.now();
      } else {
        stats_.timespan = Date.now() - time_;
      }

      stats_.tick = spy_.tick;
    }
  }, {
    key: "stats",
    get: function get() {
      var stats_ = this.stats_;
      return _objectSpread2({}, stats_);
    }
  }]);

  return StatsPlugin;
}(BasePlugin);

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
var Auditor = /*#__PURE__*/function () {
  function Auditor(duration) {
    _classCallCheck(this, Auditor);

    this.duration = duration;

    _defineProperty(this, "queue_", []);

    _defineProperty(this, "timeoutId_", void 0);
  }

  _createClass(Auditor, [{
    key: "audit",
    value: function audit(source, task) {
      var duration = this.duration,
          queue_ = this.queue_;

      if (duration <= 0) {
        task(0);
      } else {
        var queued = {
          ignored: 0,
          source: source,
          task: task,
          timestamp: Date.now()
        };
        var index = queue_.findIndex(function (q) {
          return q.source === source;
        });

        if (index !== -1) {
          var _queue_$index = queue_[index],
              _ignored = _queue_$index.ignored,
              timestamp = _queue_$index.timestamp;
          queued.ignored += _ignored + 1;
          queued.timestamp = timestamp;
          queue_.splice(index, 1);
        }

        queue_.push(queued);
        this.wait_();
      }
    }
  }, {
    key: "wait_",
    value: function wait_() {
      var _this = this;

      var duration = this.duration,
          queue_ = this.queue_;

      if (this.timeoutId_ === undefined && queue_.length > 0) {
        var queued = queue_[0];
        this.timeoutId_ = setTimeout(function () {
          var before = Date.now() - duration;

          while (queue_.length > 0 && queue_[0].timestamp <= before) {
            var dequeued = queue_.shift();
            dequeued.task(dequeued.ignored);
          }

          _this.timeoutId_ = undefined;

          _this.wait_();
        }, Math.max(0, queued.timestamp + duration - Date.now()));
      }
    }
  }]);

  return Auditor;
}();

var Detector = /*#__PURE__*/function () {
  function Detector(spy) {
    _classCallCheck(this, Detector);

    _defineProperty(this, "detectorRecords_", void 0);

    _defineProperty(this, "snapshotPlugin_", void 0);

    _defineProperty(this, "spy_", void 0);

    this.detectorRecords_ = new Map();
    this.snapshotPlugin_ = spy.find(SnapshotPlugin);
    this.spy_ = spy;
  }

  _createClass(Detector, [{
    key: "detect",
    value: function detect(id) {
      var detectorRecords_ = this.detectorRecords_,
          snapshotPlugin_ = this.snapshotPlugin_,
          spy_ = this.spy_;

      if (!snapshotPlugin_) {
        spy_.warnOnce(console, "Snapshotting is not enabled.");
        return undefined;
      }

      var detectorRecord = detectorRecords_.get(id);
      var snapshotRecord = this.record_(snapshotPlugin_.snapshotAll());

      if (detectorRecord) {
        detectorRecord.snapshotRecords.push(snapshotRecord);
      } else {
        detectorRecord = {
          snapshotRecords: [snapshotRecord]
        };
        detectorRecords_.set(id, detectorRecord);
      }

      if (detectorRecord.snapshotRecords.length > 2) {
        detectorRecord.snapshotRecords.shift();
      }

      if (detectorRecord.snapshotRecords.length < 2) {
        return undefined;
      }

      var _detectorRecord$snaps = _slicedToArray(detectorRecord.snapshotRecords, 2),
          previous = _detectorRecord$snaps[0],
          current = _detectorRecord$snaps[1];

      return this.compare_(id, previous, current);
    }
  }, {
    key: "compare_",
    value: function compare_(id, previous, current) {
      var subscriptions = [];
      var unsubscriptions = [];
      var flatteningSubscriptions = [];
      var flatteningUnsubscriptions = [];
      var previousSubscriptions = previous.rootSubscriptions;
      var currentSubscriptions = current.rootSubscriptions;
      previousSubscriptions.forEach(function (previous, key) {
        if (!currentSubscriptions.has(key)) {
          unsubscriptions.push(previous);
        }
      });
      currentSubscriptions.forEach(function (current, key) {
        var previous = previousSubscriptions.get(key);

        if (previous) {
          var previousFlattenings = previous.flattenings;
          var currentFlattenings = current.flattenings;
          previousFlattenings.forEach(function (flattening, key) {
            if (!currentFlattenings.has(key)) {
              flatteningUnsubscriptions.push(flattening);
            }
          });
          currentFlattenings.forEach(function (flattening, key) {
            if (!previousFlattenings.has(key)) {
              flatteningSubscriptions.push(flattening);
            }
          });
        } else {
          subscriptions.push(current);
        }
      });

      if (flatteningSubscriptions.length === 0 && flatteningUnsubscriptions.length === 0 && subscriptions.length === 0 && unsubscriptions.length === 0) {
        return undefined;
      }

      return {
        flatteningSubscriptions: flatteningSubscriptions,
        flatteningUnsubscriptions: flatteningUnsubscriptions,
        subscriptions: subscriptions.map(function (s) {
          return s.subscriptionSnapshot;
        }),
        unsubscriptions: unsubscriptions.map(function (s) {
          return s.subscriptionSnapshot;
        })
      };
    }
  }, {
    key: "findFlatteningSubscriptions_",
    value: function findFlatteningSubscriptions_(snapshot, subscriptionRecord) {
      var flattenings = subscriptionRecord.flattenings,
          subscriptionSnapshot = subscriptionRecord.subscriptionSnapshot;
      snapshot.subscriptions.forEach(function (s) {
        if (s.rootSink === subscriptionSnapshot) {
          s.flattenings.forEach(function (f) {
            var subscription = f.subscription;

            if (!subscription.closed) {
              flattenings.set(subscription, f);
            }
          });
        }
      });
    }
  }, {
    key: "findRootSubscriptions_",
    value: function findRootSubscriptions_(snapshot, rootSubscriptions) {
      var _this = this;

      snapshot.observables.forEach(function (observableSnapshot) {
        observableSnapshot.subscriptions.forEach(function (subscriptionSnapshot) {
          var complete = subscriptionSnapshot.complete,
              error = subscriptionSnapshot.error,
              sink = subscriptionSnapshot.sink,
              subscription = subscriptionSnapshot.subscription;

          if (!complete && !error && !sink && !subscription.closed) {
            var subscriptionRecord = {
              flattenings: new Map(),
              subscriptionSnapshot: subscriptionSnapshot
            };

            _this.findFlatteningSubscriptions_(snapshot, subscriptionRecord);

            rootSubscriptions.set(subscription, subscriptionRecord);
          }
        });
      });
    }
  }, {
    key: "record_",
    value: function record_(snapshot) {
      var rootSubscriptions = new Map();
      this.findRootSubscriptions_(snapshot, rootSubscriptions);
      return {
        rootSubscriptions: rootSubscriptions,
        snapshot: snapshot
      };
    }
  }]);

  return Detector;
}();

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function hidden(observable) {
  var operator = observable["operator"];
  return Boolean(operator && operator["hide"]);
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function wrap(core) {
  var deprecation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return {
    deck: function deck(call) {
      deprecation();
      var pausePlugins = core.findAll(PausePlugin);

      if (call === undefined) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(pausePlugins.length, " Deck(s)"));
        pausePlugins.forEach(function (pausePlugin, index) {
          return logger.log("".concat(index + 1, " pause(").concat(pausePlugin.name, ")"));
        });
        logger.groupEnd();
      } else {
        var pausePlugin = pausePlugins[call - 1];
        return pausePlugin ? pausePlugin.deck : undefined;
      }
    },
    debug: function debug() {
      deprecation();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      core.debug.apply(core, args);
    },
    detect: function detect$1() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      deprecation();

      detect(id);
    },
    flush: function flush() {
      deprecation();
      core.flush();
    },
    inferPath: inferPath,
    inferType: inferType,
    "let": function _let() {
      deprecation();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      core["let"].apply(core, args);
    },
    log: function log() {
      deprecation();

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      core.log.apply(core, args);
    },
    maxLogged: function maxLogged() {
      deprecation();

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      core.maxLogged.apply(core, args);
    },
    pause: function pause() {
      deprecation();

      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return core.pause.apply(core, args);
    },
    query: function query() {
      deprecation();

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      core.query.apply(core, args);
    },
    show: function show() {
      deprecation();

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      core.show.apply(core, args);
    },
    stats: function stats() {
      deprecation();
      core.stats();
    },
    undo: function undo() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      if (args.length === 0) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(core.undos.length, " undo(s)"));
        core.undos.forEach(function (undo, index) {
          return logger.log("".concat(index + 1, " ").concat(undo.name));
        });
        logger.groupEnd();
      } else {
        args.map(function (at) {
          return core.undos[at - 1];
        }).filter(Boolean).forEach(function (undo) {
          return core.unplug(undo);
        });
      }
    }
  };
}

/*tslint:disable-next-line:deprecation*/
var observableSubscribe = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.subscribe;
var previousWindow = {};
var SpyCore = /*#__PURE__*/function () {
  function SpyCore() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SpyCore);

    _defineProperty(this, "auditor_", void 0);

    _defineProperty(this, "defaultLogger_", void 0);

    _defineProperty(this, "maxLogged_", 20);

    _defineProperty(this, "plugins_", void 0);

    _defineProperty(this, "pluginsSubject_", void 0);

    _defineProperty(this, "teardown_", void 0);

    _defineProperty(this, "tick_", void 0);

    _defineProperty(this, "undos_", void 0);

    _defineProperty(this, "warned_", void 0);

    if (SpyCore.spy_) {
      throw new Error("Already spying on Observable.prototype.subscribe.");
    }

    if (options.warning) {
      /*tslint:disable-next-line:no-console*/
      console.warn("Spying on Observable.prototype.subscribe.");
    }

    SpyCore.spy_ = this;
    /*tslint:disable-next-line:deprecation*/

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.subscribe = SpyCore.coreSubscribe_;
    this.auditor_ = new Auditor(options.audit || 0);
    this.defaultLogger_ = options.defaultLogger || defaultLogger;

    if (options.defaultPlugins === false) {
      this.plugins_ = [];
    } else {
      this.plugins_ = [new StackTracePlugin(options), new GraphPlugin(options), new SnapshotPlugin(this, options), new CyclePlugin(this, this.defaultLogger_), new StatsPlugin(this)];
    }

    this.pluginsSubject_ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.plugins_);
    this.tick_ = 0;
    this.undos_ = [];
    this.warned_ = {};
    var detector = new Detector(this);
    hook(function (id) {
      return _this.detect_(id, detector);
    });

    if (typeof window !== "undefined") {
      [options.global || "spy", "rxSpy"].forEach(function (key) {
        if (window.hasOwnProperty(key)) {
          _this.defaultLogger_.log("Overwriting window.".concat(key));

          previousWindow[key] = window[key];
        }

        window[key] = wrap(_this, key === "rxSpy" ? function () {
          return _this.warnOnce(_this.defaultLogger_, "window.".concat(key, " is deprecated and has been renamed; use window.spy instead"));
        } : undefined);
      });
    }

    this.teardown_ = function () {
      if (typeof window !== "undefined") {
        [options.global || "spy", "rxSpy"].forEach(function (key) {
          if (previousWindow.hasOwnProperty(key)) {
            _this.defaultLogger_.log("Restoring window.".concat(key));

            window[key] = previousWindow[key];
            delete previousWindow[key];
          } else {
            delete window[key];
          }
        });
      }

      hook(undefined);

      _this.plugins_.forEach(function (plugin) {
        return plugin.teardown();
      });

      _this.plugins_ = [];

      _this.pluginsSubject_.next(_this.plugins_);

      _this.undos_ = [];
      SpyCore.spy_ = undefined;
      /*tslint:disable-next-line:deprecation*/

      rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.subscribe = observableSubscribe;
    };
  }

  _createClass(SpyCore, [{
    key: "debug",
    value: function debug(match) {
      for (var _len = arguments.length, notifications = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        notifications[_key - 1] = arguments[_key];
      }

      if (notifications.length === 0) {
        notifications = ["complete", "error", "next", "subscribe", "unsubscribe"];
      }

      return this.plug(new DebugPlugin(match, notifications));
    }
  }, {
    key: "find",
    value: function find(ctor) {
      var found = this.plugins_.find(function (plugin) {
        return plugin instanceof ctor;
      });
      return found ? found : undefined;
    }
  }, {
    key: "findAll",
    value: function findAll(ctor) {
      return ctor ? this.plugins_.filter(function (plugin) {
        return plugin instanceof ctor;
      }) : this.plugins_;
    }
  }, {
    key: "flush",
    value: function flush() {
      this.plugins_.forEach(function (plugin) {
        return plugin.flush();
      });
    }
  }, {
    key: "let",
    value: function _let(match, select, options) {
      return this.plug(new LetPlugin(match, select, options));
    }
  }, {
    key: "log",
    value: function log() {
      var tagMatch = /.+/;
      var notificationMatch = /.+/;
      var partialLogger = this.defaultLogger_;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (args.length === 1) {
        var arg = args[0];

        if (typeof arg.log === "function") {
          partialLogger = arg;
        } else {
          tagMatch = arg;
        }
      } else if (args.length === 2) {
        var _arg;

        tagMatch = args[0];
        _arg = args[1];

        if (typeof _arg.log === "function") {
          partialLogger = _arg;
        } else {
          notificationMatch = _arg;
        }
      } else if (args.length === 3) {
        tagMatch = args[0];
        notificationMatch = args[1];
        partialLogger = args[2];
      }

      return this.plug(new LogPlugin(this, tagMatch, notificationMatch, partialLogger));
    }
  }, {
    key: "maxLogged",
    value: function maxLogged(value) {
      this.maxLogged_ = Math.max(value, 1);
    }
  }, {
    key: "pause",
    value: function pause(match) {
      var pausePlugin = new PausePlugin(match);
      var teardown = this.plug(pausePlugin);
      var deck = pausePlugin.deck;
      deck.teardown = teardown;
      return deck;
    }
  }, {
    key: "plug",
    value: function plug() {
      var _this$plugins_,
          _this$undos_,
          _this2 = this;

      for (var _len3 = arguments.length, plugins = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        plugins[_key3] = arguments[_key3];
      }

      (_this$plugins_ = this.plugins_).push.apply(_this$plugins_, plugins);

      this.pluginsSubject_.next(this.plugins_);

      (_this$undos_ = this.undos_).push.apply(_this$undos_, plugins);

      return function () {
        return _this2.unplug.apply(_this2, plugins);
      };
    }
  }, {
    key: "query",
    value: function query(predicate, partialLogger) {
      var _this3 = this;

      var snapshotPlugin = this.find(SnapshotPlugin);

      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }

      var snapshot = snapshotPlugin.snapshotAll();
      var observableSnapshots = Array.from(snapshot.observables.values());
      var logger = toLogger(partialLogger || this.defaultLogger_);
      snapshot.mapStackTraces(observableSnapshots).subscribe(function () {
        var found = [];
        observableSnapshots.forEach(function (observableSnapshot) {
          var find;
          var subscriptions = observableSnapshot.subscriptions;
          subscriptions.forEach(function (subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);

            if (subscriberSnapshot) {
              if (predicate({
                complete: subscriptionSnapshot.complete,
                error: subscriptionSnapshot.error,
                incomplete: !subscriptionSnapshot.complete && !subscriptionSnapshot.error,
                path: observableSnapshot.path,
                root: subscriptionSnapshot.sink === subscriptionSnapshot.rootSink,
                tag: observableSnapshot.tag,
                type: observableSnapshot.type,
                unsubscribed: subscriptionSnapshot.unsubscribed
              })) {
                if (!find) {
                  find = {
                    observable: observableSnapshot,
                    subs: []
                  };
                }

                find.subs.push({
                  subscriber: subscriberSnapshot,
                  subscription: subscriptionSnapshot
                });
              }
            }
          });

          if (find) {
            found.push(find);
          }
        });
        var maxLogged_ = _this3.maxLogged_;
        var notLogged = found.length > maxLogged_ ? found.length - maxLogged_ : 0;

        if (notLogged) {
          found.splice(maxLogged_, notLogged);
        }

        logger.group("".concat(found.length + notLogged, " snapshot(s) found"));
        var observableGroupMethod = found.length > 3 ? "groupCollapsed" : "group";
        found.forEach(function (find) {
          var observableSnapshot = find.observable;
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subs = find.subs;
          var subscriberGroupMethod = find.subs.length > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subs.length, " subscriber(s)"));
          subs.forEach(function (sub) {
            var subscriptionSnapshot = sub.subscription;
            var subscriberSnapshot = sub.subscriber;
            var values = subscriberSnapshot.values,
                valuesFlushed = subscriberSnapshot.valuesFlushed;
            logger[subscriberGroupMethod].call(logger, "Subscriber");
            logger.log("Value count =", values.length + valuesFlushed);

            if (values.length > 0) {
              logger.log("Last value =", values[values.length - 1].value);
            }

            logSubscription(logger, subscriptionSnapshot);
            var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function (otherSubscriptionSnapshot) {
              return otherSubscriptionSnapshot !== subscriptionSnapshot;
            });
            otherSubscriptions.forEach(function (otherSubscriptionSnapshot) {
              logger.groupCollapsed("Other subscription");
              logSubscription(logger, otherSubscriptionSnapshot);
              logger.groupEnd();
            });
            logger.groupEnd();
          });
          logger.groupEnd();
          logger.groupEnd();
        });

        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }

        logger.groupEnd();
      });
    }
  }, {
    key: "show",
    value: function show(match, partialLogger) {
      var anyTagged = /.+/;

      if (!match) {
        match = anyTagged;
      } else if (typeof match.log === "function") {
        partialLogger = match;
        match = anyTagged;
      }

      var snapshotPlugin = this.find(SnapshotPlugin);

      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }

      var snapshot = snapshotPlugin.snapshotAll();
      var matched = Array.from(snapshot.observables.values()).filter(function (observableSnapshot) {
        return matches(observableSnapshot.observable, match);
      });
      var logger = toLogger(partialLogger || this.defaultLogger_);
      var maxLogged_ = this.maxLogged_;
      var notLogged = matched.length > maxLogged_ ? matched.length - maxLogged_ : 0;

      if (notLogged) {
        matched.splice(maxLogged_, notLogged);
      }

      snapshot.mapStackTraces(matched).subscribe(function () {
        logger.group("".concat(matched.length + notLogged, " snapshot(s) matching ").concat(toString(match)));
        var observableGroupMethod = matched.length > 3 ? "groupCollapsed" : "group";
        matched.forEach(function (observableSnapshot) {
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subscriptions = observableSnapshot.subscriptions;
          var subscriberGroupMethod = subscriptions.size > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subscriptions.size, " subscriber(s)"));
          subscriptions.forEach(function (subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);

            if (subscriberSnapshot) {
              var values = subscriberSnapshot.values,
                  valuesFlushed = subscriberSnapshot.valuesFlushed;
              logger[subscriberGroupMethod].call(logger, "Subscriber");
              logger.log("Value count =", values.length + valuesFlushed);

              if (values.length > 0) {
                logger.log("Last value =", values[values.length - 1].value);
              }

              logSubscription(logger, subscriptionSnapshot);
              var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function (otherSubscriptionSnapshot) {
                return otherSubscriptionSnapshot !== subscriptionSnapshot;
              });
              otherSubscriptions.forEach(function (otherSubscriptionSnapshot) {
                logger.groupCollapsed("Other subscription");
                logSubscription(logger, otherSubscriptionSnapshot);
                logger.groupEnd();
              });
              logger.groupEnd();
            } else {
              logger.warn("Cannot find subscriber snapshot");
            }
          });
          logger.groupEnd();
          logger.groupEnd();
        });

        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }

        logger.groupEnd();
      });
    }
  }, {
    key: "stats",
    value: function stats(partialLogger) {
      var statsPlugin = this.find(StatsPlugin);

      if (!statsPlugin) {
        this.warnOnce(console, "Stats are not enabled.");
        return;
      }

      var stats = statsPlugin.stats;
      var leafSubscribes = stats.leafSubscribes,
          maxDepth = stats.maxDepth,
          flattenedSubscribes = stats.flattenedSubscribes,
          rootSubscribes = stats.rootSubscribes,
          totalDepth = stats.totalDepth;
      var logger = toLogger(partialLogger || this.defaultLogger_);
      logger.group("Stats");
      logger.log("Subscribes =", stats.subscribes);

      if (rootSubscribes > 0) {
        logger.log("Root subscribes =", rootSubscribes);
      }

      if (leafSubscribes > 0) {
        logger.log("Leaf subscribes =", leafSubscribes);
      }

      if (flattenedSubscribes > 0) {
        logger.log("Flattened subscribes =", flattenedSubscribes);
      }

      logger.log("Unsubscribes =", stats.unsubscribes);
      logger.log("Nexts =", stats.nexts);
      logger.log("Errors =", stats.errors);
      logger.log("Completes =", stats.completes);

      if (maxDepth > 0) {
        logger.log("Max. depth =", maxDepth);
        logger.log("Avg. depth =", (totalDepth / leafSubscribes).toFixed(1));
      }

      logger.log("Tick =", stats.tick);
      logger.log("Timespan =", stats.timespan);
      logger.groupEnd();
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.teardown_) {
        this.teardown_();
        this.teardown_ = undefined;
      }
    }
  }, {
    key: "unplug",
    value: function unplug() {
      var _this4 = this;

      for (var _len4 = arguments.length, plugins = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        plugins[_key4] = arguments[_key4];
      }

      plugins.forEach(function (plugin) {
        plugin.teardown();
        _this4.plugins_ = _this4.plugins_.filter(function (p) {
          return p !== plugin;
        });

        _this4.pluginsSubject_.next(_this4.plugins_);

        _this4.undos_ = _this4.undos_.filter(function (u) {
          return u !== plugin;
        });
      });
    }
    /** @deprecated Use warnOnce */

  }, {
    key: "warn",
    value: function warn(logger, message) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      this.warnOnce.apply(this, [logger, message].concat(args));
    }
  }, {
    key: "warnOnce",
    value: function warnOnce(logger, message) {
      if (!this.warned_[message]) {
        var _toLogger;

        for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
          args[_key6 - 2] = arguments[_key6];
        }

        (_toLogger = toLogger(logger)).warn.apply(_toLogger, [message].concat(args));

        this.warned_[message] = true;
      }
    }
    /*tslint:disable-next-line:member-ordering*/

  }, {
    key: "detect_",
    value: function detect_(id, detector) {
      var auditor_ = this.auditor_,
          defaultLogger_ = this.defaultLogger_;
      auditor_.audit(id, function (ignored) {
        var detected = detector.detect(id);
        var logger = toLogger(defaultLogger_);

        if (detected) {
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          logger.group("Subscription changes detected; id = '".concat(id, "'").concat(audit));
          detected.subscriptions.forEach(function (s) {
            logSubscription(logger, "Subscription", s);
          });
          detected.unsubscriptions.forEach(function (s) {
            logSubscription(logger, "Unsubscription", s);
          });
          detected.flatteningSubscriptions.forEach(function (s) {
            logSubscription(logger, "Flattening subscription", s);
          });
          detected.flatteningUnsubscriptions.forEach(function (s) {
            logSubscription(logger, "Flattening unsubscription", s);
          });
          logger.groupEnd();
        }

        function logSubscription(logger, name, subscription) {
          logger.group(name);
          logger.log("Root subscribe", subscription.rootSink ? subscription.rootSink.stackTrace : subscription.stackTrace);
          logger.log("Subscribe", subscription.stackTrace);
          logger.groupEnd();
        }
      });
    }
  }, {
    key: "auditor",
    get: function get() {
      return this.auditor_;
    }
  }, {
    key: "tick",
    get: function get() {
      return this.tick_;
    }
  }, {
    key: "undos",
    get: function get() {
      return _toConsumableArray(this.undos_);
    }
  }, {
    key: "version",
    get: function get() {
      return "7.5.3";
    }
  }], [{
    key: "coreSubscribe_",
    value: function coreSubscribe_() {
      /*tslint:disable-next-line:no-invalid-this*/
      var observable = this;
      var spy_ = SpyCore.spy_;

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      if (!spy_) {
        return observableSubscribe.apply(observable, args);
      }

      if (hidden(observable)) {
        SpyCore.spy_ = undefined;

        try {
          return observableSubscribe.apply(observable, args);
        } finally {
          SpyCore.spy_ = spy_;
        }
      }

      var notify_ = function notify_(before, block, after) {
        ++spy_.tick_;
        spy_.plugins_.forEach(before);
        block();
        spy_.plugins_.forEach(after);
      };

      var subscriber = toSubscriber.apply(undefined, args);
      var ref = {
        observable: observable,
        subscriber: subscriber,
        subscription: new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"](),
        timestamp: Date.now(),
        unsubscribed: false
      };
      identify(observable);
      identify(subscriber);
      identify(ref);
      var subscriberUnsubscribe = subscriber.unsubscribe;

      subscriber.unsubscribe = function () {
        if (!subscriber.closed) {
          notify_(function (plugin) {
            return plugin.beforeUnsubscribe(ref);
          }, function () {
            ref.subscription.unsubscribe();
            ref.unsubscribed = true;
            subscriberUnsubscribe.call(subscriber);
          }, function (plugin) {
            return plugin.afterUnsubscribe(ref);
          });
        } else {
          subscriberUnsubscribe.call(subscriber);
        }
      };

      var postSelectObserver = {
        complete: function complete() {
          notify_(function (plugin) {
            return plugin.beforeComplete(ref);
          }, function () {
            return subscriber.complete();
          }, function (plugin) {
            return plugin.afterComplete(ref);
          });
        },
        error: function error(_error) {
          notify_(function (plugin) {
            return plugin.beforeError(ref, _error);
          }, function () {
            return subscriber.error(_error);
          }, function (plugin) {
            return plugin.afterError(ref, _error);
          });
        },
        next: function next(value) {
          notify_(function (plugin) {
            return plugin.beforeNext(ref, value);
          }, function () {
            return subscriber.next(value);
          }, function (plugin) {
            return plugin.afterNext(ref, value);
          });
        }
      };
      var preSelectObserver = {
        complete: function complete() {
          this.completed = true;

          if (this.preSelectSubject) {
            this.preSelectSubject.complete();
          } else {
            this.postSelectObserver.complete();
          }
        },
        completed: false,
        error: function error(_error2) {
          this.errored = true;

          if (this.preSelectSubject) {
            this.preSelectSubject.error(_error2);
          } else {
            this.postSelectObserver.error(_error2);
          }
        },
        errored: false,
        "let": function _let(plugins) {
          var selectors = plugins.map(function (plugin) {
            return plugin.select(ref);
          }).filter(Boolean);

          if (selectors.length > 0) {
            if (!this.preSelectSubject) {
              this.preSelectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            }

            if (this.postSelectSubscription) {
              this.postSelectSubscription.unsubscribe();
            }

            var _source = this.preSelectSubject.asObservable();

            selectors.forEach(function (selector) {
              return _source = selector(_source);
            });
            this.postSelectSubscription = _source.pipe(hide()).subscribe(postSelectObserver);
          } else if (this.postSelectSubscription) {
            this.postSelectSubscription.unsubscribe();
            this.postSelectSubscription = undefined;
            this.preSelectSubject = undefined;
          }
        },
        next: function next(value) {
          if (this.preSelectSubject) {
            this.preSelectSubject.next(value);
          } else {
            this.postSelectObserver.next(value);
          }
        },
        postSelectObserver: postSelectObserver,
        postSelectSubscription: undefined,
        preSelectSubject: undefined,
        unsubscribe: function unsubscribe() {
          if (!this.unsubscribed) {
            this.unsubscribed = true;

            if (!this.completed && !this.errored) {
              if (this.postSelectSubscription) {
                this.postSelectSubscription.unsubscribe();
                this.postSelectSubscription = undefined;
              }
            }
          }
        },
        unsubscribed: false
      };
      subscriber.add(spy_.pluginsSubject_.pipe(hide()).subscribe({
        next: function next(plugins) {
          return preSelectObserver["let"](plugins);
        }
      }));
      notify_(function (plugin) {
        return plugin.beforeSubscribe(ref);
      }, function () {
        subscriber.add(observableSubscribe.call(observable, preSelectObserver));
        subscriber.add(function () {
          return preSelectObserver.unsubscribe();
        });
      }, function (plugin) {
        return plugin.afterSubscribe(ref);
      });
      return subscriber;
    }
  }]);

  return SpyCore;
}();

_defineProperty(SpyCore, "spy_", undefined);

function logStackTrace(logger, subscriptionSnapshot) {
  var mappedStackTrace = subscriptionSnapshot.mappedStackTrace,
      rootSink = subscriptionSnapshot.rootSink;
  var mapped = rootSink ? rootSink.mappedStackTrace : mappedStackTrace;
  mapped.subscribe(function (stackTrace) {
    return logger.log("Root subscribe", stackTrace);
  });
}

function logSubscription(logger, subscriptionSnapshot) {
  var complete = subscriptionSnapshot.complete,
      error = subscriptionSnapshot.error,
      unsubscribed = subscriptionSnapshot.unsubscribed;
  logger.log("State =", complete ? "complete" : error ? "error" : "incomplete");

  if (error) {
    logger.error("Error =", error);
  }

  if (unsubscribed) {
    logger.log("Unsubscribed =", true);
  }

  logStackTrace(logger, subscriptionSnapshot);
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new SpyCore(options);
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
var plugins = {
  CyclePlugin: CyclePlugin,
  DebugPlugin: DebugPlugin,
  GraphPlugin: GraphPlugin,
  LetPlugin: LetPlugin,
  LogPlugin: LogPlugin,
  PausePlugin: PausePlugin,
  SnapshotPlugin: SnapshotPlugin,
  StackTracePlugin: StackTracePlugin,
  StatsPlugin: StatsPlugin
};
var operators = {
  hide: hide,
  tag: tag
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "EZHI":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-spy/esm/operators/index.js ***!
  \******************************************************/
/*! exports provided: hide, tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

/*tslint:disable:no-use-before-declare*/
function hide() {
  return function hideOperation(source) {
    return source.lift(new HideOperator());
  };
}

var HideOperator = /*#__PURE__*/function () {
  // It would be better if this were a symbol. However ...
  // error TS1166: A computed property name in a class property declaration must directly refer to a built-in symbol.
  function HideOperator() {
    _classCallCheck(this, HideOperator);

    _defineProperty(this, "hide", true);
  }

  _createClass(HideOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);

  return HideOperator;
}();

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

/*tslint:disable:no-use-before-declare*/
function tag(tag) {
  return function tagOperation(source) {
    return source.lift(new TagOperator(tag));
  };
}

var TagOperator = /*#__PURE__*/function () {
  // It would be better if this were a symbol. However ...
  // error TS1166: A computed property name in a class property declaration must directly refer to a built-in symbol.
  function TagOperator(tag) {
    _classCallCheck(this, TagOperator);

    _defineProperty(this, "tag", void 0);

    this.tag = tag;
  }

  _createClass(TagOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);

  return TagOperator;
}();


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "IOp3":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/variant-groups/variant-groups-table/variant-groups-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CvcVariantGroupsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantGroupsTableComponent", function() { return CvcVariantGroupsTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var _variant_group_tag_variant_group_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../variant-group-tag/variant-group-tag.component */ "Lirz");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/component */ "9A8T");















function CvcVariantGroupsTableComponent_ng_container_0_tr_27_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const variant_r7 = ctx.$implicit;
        const isLast_r8 = ctx.last;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", variant_r7, "", isLast_r8 ? "" : ", ", " ");
    }
}
function CvcVariantGroupsTableComponent_ng_container_0_tr_27_span_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const gene_r9 = ctx.$implicit;
        const isLast_r10 = ctx.last;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", gene_r9, "", isLast_r10 ? "" : ", ", " ");
    }
}
function CvcVariantGroupsTableComponent_ng_container_0_tr_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-variant-group-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CvcVariantGroupsTableComponent_ng_container_0_tr_27_span_5_Template, 2, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CvcVariantGroupsTableComponent_ng_container_0_tr_27_span_8_Template, 2, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const vg_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("variantgroup", vg_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", vg_r4.variantNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", vg_r4.geneNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", vg_r4.variantCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", vg_r4.evidenceItemCount, " ");
    }
}
function CvcVariantGroupsTableComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcVariantGroupsTableComponent_ng_container_0_Template_thead_nzSortOrderChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onSortChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Genes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "cvc-clearable-input-filter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcVariantGroupsTableComponent_ng_container_0_Template_cvc_clearable_input_filter_inputModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.nameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "cvc-clearable-input-filter", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcVariantGroupsTableComponent_ng_container_0_Template_cvc_clearable_input_filter_inputModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.variantNameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "cvc-clearable-input-filter", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcVariantGroupsTableComponent_ng_container_0_Template_cvc_clearable_input_filter_inputModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.geneNameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CvcVariantGroupsTableComponent_ng_container_0_tr_27_Template, 13, 5, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 17, ctx_r0.variantGroups$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 19, ctx_r0.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx_r0.sortColumns.Name)("nzSortFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx_r0.sortColumns.VariantCount)("nzSortFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx_r0.sortColumns.EvidenceItemCount)("nzSortFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx_r0.nameInput)("onInputChanged", ctx_r0.textInputCallback);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx_r0.variantNameInput)("onInputChanged", ctx_r0.textInputCallback);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx_r0.geneNameInput)("onInputChanged", ctx_r0.textInputCallback);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r2.data);
    }
}
const _c0 = function (a0) { return { value: a0 }; };
let CvcVariantGroupsTableComponent = /*@__PURE__*/ (() => {
    class CvcVariantGroupsTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.pageSize = 25;
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["VariantGroupsSortColumns"];
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
            this.variantGroups$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'browseVariantGroups', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map(e => e.node);
            }));
            this.pageInfo$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'browseVariantGroups', 'pageInfo'));
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
                variantNames: this.variantNameInput
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
    CvcVariantGroupsTableComponent.ɵfac = function CvcVariantGroupsTableComponent_Factory(t) { return new (t || CvcVariantGroupsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["BrowseVariantGroupsGQL"])); };
    CvcVariantGroupsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcVariantGroupsTableComponent, selectors: [["cvc-variant-groups-table"]], decls: 2, vars: 5, consts: [[4, "ngIf"], [3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["variantGroupsTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "20%", 3, "nzColumnKey", "nzSortFn"], ["nzWidth", "30%"], ["nzWidth", "10%", 3, "nzColumnKey", "nzSortFn"], ["nz-icon", "", "nzType", "civic:variant", "nz-tooltip", "", "nzTooltipTitle", "Variant Count"], ["nz-icon", "", "nzType", "civic:evidence", "nz-tooltip", "", "nzTooltipTitle", "Evidence Count"], ["placeholderText", "Name", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Variant Name", 3, "inputModel", "onInputChanged", "inputModelChange"], ["placeholderText", "Gene Name", 3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngFor", "ngForOf"], [3, "variantgroup"], ["nz-typography", ""]], template: function CvcVariantGroupsTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CvcVariantGroupsTableComponent_ng_container_0_Template, 28, 21, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.data$)));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzThAddOnComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_10__["CvcClearableInputFilterComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _variant_group_tag_variant_group_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcVariantGroupTagComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__["NzTypographyComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_13__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcVariantGroupsTableComponent;
})();


/***/ }),

/***/ "UFO5":
/*!***********************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VariantGroupsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsRoutingModule", function() { return VariantGroupsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _variant_groups_comments_variant_groups_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-groups-comments/variant-groups-comments.component */ "CgKE");
/* harmony import */ var _variant_groups_detail_variant_groups_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-groups-detail/variant-groups-detail.component */ "crtf");
/* harmony import */ var _variant_groups_flags_variant_groups_flags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant-groups-flags/variant-groups-flags.component */ "AcuH");
/* harmony import */ var _variant_groups_home_variant_groups_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant-groups-home/variant-groups-home.page */ "3lFz");
/* harmony import */ var _variant_groups_revisions_variant_groups_revisions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variant-groups-revisions/variant-groups-revisions.component */ "kvZU");
/* harmony import */ var _variant_groups_summary_variant_groups_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variant-groups-summary/variant-groups-summary.component */ "mObm");
/* harmony import */ var _variant_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variant-groups.component */ "hBJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _variant_groups_component__WEBPACK_IMPORTED_MODULE_7__["VariantGroupsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _variant_groups_home_variant_groups_home_page__WEBPACK_IMPORTED_MODULE_4__["VariantGroupsHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
            {
                path: ':variantGroupId',
                component: _variant_groups_detail_variant_groups_detail_component__WEBPACK_IMPORTED_MODULE_2__["VariantGroupsDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
                },
                children: [
                    { path: '', redirectTo: 'summary', pathMatch: 'full' },
                    {
                        path: 'summary',
                        component: _variant_groups_summary_variant_groups_summary_component__WEBPACK_IMPORTED_MODULE_6__["VariantGroupsSummaryComponent"],
                        data: {
                            breadcrumb: 'Summary'
                        }
                    },
                    {
                        path: 'comments',
                        component: _variant_groups_comments_variant_groups_comments_component__WEBPACK_IMPORTED_MODULE_1__["VariantGroupsCommentsComponent"],
                        data: {
                            breadcrumb: 'Comments'
                        }
                    },
                    {
                        path: 'revisions',
                        component: _variant_groups_revisions_variant_groups_revisions_component__WEBPACK_IMPORTED_MODULE_5__["VariantGroupsRevisionsComponent"],
                        data: {
                            breadcrumb: 'Revisions'
                        }
                    },
                    {
                        path: 'flags',
                        component: _variant_groups_flags_variant_groups_flags_component__WEBPACK_IMPORTED_MODULE_3__["VariantGroupsFlagsComponent"],
                        data: {
                            breadcrumb: 'Flags'
                        }
                    },
                ]
            }
        ]
    }
];
let VariantGroupsRoutingModule = /*@__PURE__*/ (() => {
    class VariantGroupsRoutingModule {
    }
    VariantGroupsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: VariantGroupsRoutingModule });
    VariantGroupsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function VariantGroupsRoutingModule_Factory(t) { return new (t || VariantGroupsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return VariantGroupsRoutingModule;
})();


/***/ }),

/***/ "ZQzU":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-revisions/variant-groups-revisions.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: VariantGroupsRevisionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsRevisionsService", function() { return VariantGroupsRevisionsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_spy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-spy */ "Don1");
/* harmony import */ var rxjs_spy_operators_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-spy/operators/tag */ "CXCi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "E3Zs");


 // debug
 // debug



let VariantGroupsRevisionsService = /*@__PURE__*/ (() => {
    class VariantGroupsRevisionsService {
        constructor(gql, log) {
            this.gql = gql;
            this.log = log;
            this.initialFirst = 10;
            this.fetchMoreSize = 10;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            this.spy = Object(rxjs_spy__WEBPACK_IMPORTED_MODULE_2__["create"])(); // debug
        }
        createQuery(vars) {
            this.initialQueryVars = {
                variantGroupId: vars.variantGroupId,
                first: vars.first ? vars.first : this.initialFirst,
                before: vars.before ? vars.before : undefined,
                after: vars.after ? vars.after : undefined
            };
            this.queryRef = this.gql.watch(this.initialQueryVars);
            this.result$ = this.queryRef.valueChanges;
            this.isLoading$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true));
            this.pageInfo$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'variantGroup', 'revisions', 'pageInfo'));
            // provide static local pageInfo
            this.pageInfo$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1))
                .subscribe((info) => { this.pageInfo = info; });
            this.queryErrors$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('errors'));
            this.networkError$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('error'));
            this.spy.log('revisions$'); // debug
            this.revisions$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a, _b; return (_b = (_a = data.variantGroup) === null || _a === void 0 ? void 0 : _a.revisions) === null || _b === void 0 ? void 0 : _b.edges; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
            this.uniqueRevisors$ = this.result$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => { var _a, _b; return (_b = (_a = data.variantGroup) === null || _a === void 0 ? void 0 : _a.revisions) === null || _b === void 0 ? void 0 : _b.uniqueRevisors; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
            this.revisionFields$ = this.result$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ data }) => {
                var _a, _b;
                return (_b = (_a = data.variantGroup) === null || _a === void 0 ? void 0 : _a.revisions) === null || _b === void 0 ? void 0 : _b.revisedFieldNames.map((f, i) => {
                    return Object.assign(Object.assign({}, f), { id: i });
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
            this.revisions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$), Object(rxjs_spy_operators_tag__WEBPACK_IMPORTED_MODULE_3__["tag"])('revisions$')).subscribe(); // debug
            return this.queryRef;
        }
        fieldNameSelected(field) {
            var _a;
            if (this.initialQueryVars) {
                this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { originatingUserId: (_a = this.currentVariables()) === null || _a === void 0 ? void 0 : _a.originatingUserId, fieldName: field === null || field === void 0 ? void 0 : field.name }));
            }
        }
        revisorSelected(u) {
            var _a;
            if (this.initialQueryVars) {
                this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { fieldName: (_a = this.currentVariables()) === null || _a === void 0 ? void 0 : _a.fieldName, originatingUserId: u === null || u === void 0 ? void 0 : u.id }));
            }
        }
        //TOO test this with filtering in place
        fetchMore() {
            this.queryRef.fetchMore({
                variables: Object.assign(Object.assign({}, this.currentVariables()), { last: this.fetchMoreSize, before: this.pageInfo.startCursor }),
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.spy.teardown();
        }
        //TODO - Sigh, fix this when the new angular-apollo comes out
        currentVariables() {
            return this.queryRef['obsQuery'].variables;
        }
    }
    VariantGroupsRevisionsService.ɵfac = function VariantGroupsRevisionsService_Factory(t) { return new (t || VariantGroupsRevisionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_5__["VariantGroupRevisionsGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"])); };
    VariantGroupsRevisionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VariantGroupsRevisionsService, factory: VariantGroupsRevisionsService.ɵfac });
    return VariantGroupsRevisionsService;
})();


/***/ }),

/***/ "crtf":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-detail/variant-groups-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VariantGroupsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsDetailComponent", function() { return VariantGroupsDetailComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var _components_flags_flaggable_flaggable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/flags/flaggable/flaggable.component */ "sMOw");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _components_flags_flaggable_flaggable_options_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/flags/flaggable/flaggable-options.directive */ "Qdkw");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/shared/tab-navigation/tab-navigation.component */ "6BKN");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _components_shared_entity_subscription_button_entity_subscription_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/shared/entity-subscription-button/entity-subscription-button.component */ "rTZz");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_shared_contributor_avatars_contributor_avatars_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/shared/contributor-avatars/contributor-avatars.component */ "vm1A");





















function VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_button_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Revise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", _r11.isActive ? "primary" : "default");
    }
}
function VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_button_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Flag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", _r12.isActive ? "primary" : "default");
    }
}
function VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_cvc_entity_subscription_button_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-entity-subscription-button", 18);
    }
    if (rf & 2) {
        const viewer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet;
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewer", viewer_r7)("subscribableId", ctx_r10.subscribable.id);
    }
}
function VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_button_2_Template, 3, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_button_4_Template, 3, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_cvc_entity_subscription_button_6_Template, 1, 2, "cvc-entity-subscription-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const viewer_r7 = ctx.ngrxLet;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r7.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r7.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r7.signedIn && ctx_r6.subscribable);
    }
}
function VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_nz_space_1_Template, 7, 3, "nz-space", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r2.viewer$);
    }
}
function VariantGroupsDetailComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-contributor-avatars", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subscribable", ctx_r4.subscribable);
    }
}
function VariantGroupsDetailComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-page-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-page-header-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VariantGroupsDetailComponent_ng_container_0_nz_page_header_extra_8_Template, 2, 1, "nz-page-header-extra", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "cvc-tab-navigation", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VariantGroupsDetailComponent_ng_container_0_ng_template_11_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const variantGroup_r1 = ctx.ngIf;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayName", variantGroup_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r0.flagsTotal$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", variantGroup_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.viewer$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tabs", ctx_r0.tabs);
    }
}
let VariantGroupsDetailComponent = /*@__PURE__*/ (() => {
    class VariantGroupsDetailComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            this.viewer$ = this.viewerService.viewer$;
            this.routeSub = this.route.params.subscribe((params) => {
                let observable = this.gql.watch({ variantGroupId: +params.variantGroupId }).valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true));
                this.variantGroup$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'variantGroup'));
                this.commentsTotal$ = this.variantGroup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('comments', 'totalCount'));
                this.flagsTotal$ = this.variantGroup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('flags', 'totalCount'));
                this.revisionsTotal$ = this.variantGroup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('revisions', 'totalCount'));
                this.subscribable = {
                    id: +params.variantGroupId,
                    entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].VariantGroup
                };
            });
            this.tabs = [
                {
                    routeName: 'summary',
                    iconName: 'pic-left',
                    tabLabel: 'Summary'
                },
                {
                    routeName: 'comments',
                    iconName: 'civic:comment',
                    tabLabel: 'Comments'
                },
                {
                    routeName: 'revisions',
                    iconName: 'civic:revision',
                    tabLabel: 'Revisions'
                },
                {
                    routeName: 'flags',
                    iconName: 'civic:flag',
                    tabLabel: 'Flags'
                }
            ];
        }
        ngOnInit() {
        }
    }
    VariantGroupsDetailComponent.ɵfac = function VariantGroupsDetailComponent_Factory(t) { return new (t || VariantGroupsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["VariantGroupDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    VariantGroupsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VariantGroupsDetailComponent, selectors: [["cvc-variant-groups-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], ["cvcFlaggable", "", 3, "flags"], [1, "site-page-header"], ["cvcFlaggableOptions", ""], ["nz-icon", "", "nzType", "civic:variantgroup"], [4, "ngrxLet"], [3, "tabs"], ["tabBarExtraContent", ""], [1, "content"], ["nzDirection", "horizontal", "nzSize", "small", 4, "ngrxLet"], ["nzDirection", "horizontal", "nzSize", "small"], ["routerLink", "suggest-revision", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType", 4, "ngIf"], ["routerLink", "flags", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType", 4, "ngIf"], ["typename", "Variant", 3, "viewer", "subscribableId", 4, "ngIf"], ["routerLink", "suggest-revision", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType"], ["rlaComments", "routerLinkActive"], ["routerLink", "flags", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType"], ["typename", "Variant", 3, "viewer", "subscribableId"], ["id", "contributors-col"], [3, "subscribable"]], template: function VariantGroupsDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VariantGroupsDetailComponent_ng_container_0_Template, 15, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.variantGroup$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__["CvcSectionNavigationComponent"], _components_flags_flaggable_flaggable_component__WEBPACK_IMPORTED_MODULE_7__["CvcFlaggableComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderTitleDirective"], _components_flags_flaggable_flaggable_options_directive__WEBPACK_IMPORTED_MODULE_9__["CvcFlaggableOptionsDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _ngrx_component__WEBPACK_IMPORTED_MODULE_12__["LetDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderContentDirective"], _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_13__["CvcTabNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderExtraDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__["NzSpaceItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _components_shared_entity_subscription_button_entity_subscription_button_component__WEBPACK_IMPORTED_MODULE_17__["CvcEntitySubscriptionButtonComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzColDirective"], _components_shared_contributor_avatars_contributor_avatars_component__WEBPACK_IMPORTED_MODULE_19__["CvcContributorAvatarsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _ngrx_component__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return VariantGroupsDetailComponent;
})();


/***/ }),

/***/ "hBJB":
/*!******************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups.component.ts ***!
  \******************************************************************/
/*! exports provided: VariantGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsComponent", function() { return VariantGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let VariantGroupsComponent = /*@__PURE__*/ (() => {
    class VariantGroupsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    VariantGroupsComponent.ɵfac = function VariantGroupsComponent_Factory(t) { return new (t || VariantGroupsComponent)(); };
    VariantGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariantGroupsComponent, selectors: [["app-variant-groups"]], decls: 1, vars: 0, template: function VariantGroupsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return VariantGroupsComponent;
})();


/***/ }),

/***/ "kvZU":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-revisions/variant-groups-revisions.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VariantGroupsRevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsRevisionsComponent", function() { return VariantGroupsRevisionsComponent; });
/* harmony import */ var _variant_groups_revisions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-groups-revisions.service */ "ZQzU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/participant-list/participant-list.component */ "DGRq");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _forms_shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../forms/shared/components/org-selector-btn-group/org-selector-btn-group.component */ "qPVO");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _forms_shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../forms/shared/components/org-selector-btn-group/org-selector-btn.directive */ "XyyK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-timeago */ "twue");






















function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r19);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_4_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r17);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-space", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "cvc-org-selector-btn-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedOrgChange", function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_6_Template_cvc_org_selector_btn_group_selectedOrgChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Reject Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "cvc-org-selector-btn-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedOrgChange", function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_6_Template_cvc_org_selector_btn_group_selectedOrgChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.mostRecentOrg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Accept Revision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedOrg", ctx_r12.mostRecentOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedOrg", ctx_r12.mostRecentOrg);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const revision_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" RID", revision_r8.node.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", revision_r8.node.linkoutData.name, " Updated");
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-space", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const revision_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, revision_r8.node.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](revision_r8.node.status);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TODO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "create cvc-variant-group-description-revision component to display here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TODO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "create cvc-variant-group-sources-revision component to display here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_3_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nz-card-meta", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_6_Template, 11, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_8_Template, 4, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_10_Template, 8, 4, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_12_Template, 4, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_ng_template_14_Template, 4, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const revision_r8 = ctx.$implicit;
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r13)("nzExtra", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", revision_r8.node.fieldName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "source_ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDescription", _r11);
    }
}
function VariantGroupsRevisionsComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VariantGroupsRevisionsComponent_ng_container_2_ng_template_3_Template, 16, 6, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const revisions_r5 = ctx.ngIf;
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDataSource", revisions_r5)("nzRenderItem", _r6);
    }
}
function VariantGroupsRevisionsComponent_ng_template_7_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-avatar", 30);
    }
    if (rf & 2) {
        const user_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", user_r28.profileImagePath);
    }
}
function VariantGroupsRevisionsComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-avatar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const user_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, user_r28.username.charAt(0)));
    }
}
function VariantGroupsRevisionsComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VariantGroupsRevisionsComponent_ng_template_7_nz_avatar_0_Template, 1, 1, "nz-avatar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VariantGroupsRevisionsComponent_ng_template_7_ng_template_1_Template, 2, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r28 = ctx.$implicit;
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r28.profileImagePath)("ngIfElse", _r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r28.username);
    }
}
function VariantGroupsRevisionsComponent_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const field_r34 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r34.displayName);
    }
}
let VariantGroupsRevisionsComponent = /*@__PURE__*/ (() => {
    class VariantGroupsRevisionsComponent {
        constructor(variantGroupsRevisionsService, route) {
            this.variantGroupsRevisionsService = variantGroupsRevisionsService;
            this.route = route;
            this.variantGroupId = +this.route.snapshot.params['variantGroupId'];
            this.service = variantGroupsRevisionsService;
        }
        ngOnInit() {
            this.service.createQuery({ variantGroupId: this.variantGroupId });
        }
        onFieldNameSelected(field) {
            this.service.fieldNameSelected(field);
        }
        onRevisorSelected(user) {
            this.service.revisorSelected(user);
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
        }
    }
    VariantGroupsRevisionsComponent.ɵfac = function VariantGroupsRevisionsComponent_Factory(t) { return new (t || VariantGroupsRevisionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_variant_groups_revisions_service__WEBPACK_IMPORTED_MODULE_0__["VariantGroupsRevisionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    VariantGroupsRevisionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariantGroupsRevisionsComponent, selectors: [["cvc-variant-groups-revisions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_variant_groups_revisions_service__WEBPACK_IMPORTED_MODULE_0__["VariantGroupsRevisionsService"]])], decls: 13, vars: 10, consts: [[3, "nzGutter"], ["nzSpan", "18"], [4, "ngIf"], ["nzSpan", "6"], ["listTitle", "Revisors", 3, "participantList", "participantSelectedEvent"], ["itemTemplate", ""], ["listTitle", "Fields Revised", 3, "participantList", "participantSelectedEvent"], ["nzTitle", "Revisions", 1, "card-list"], [1, "revision-list", 3, "nzDataSource", "nzRenderItem"], ["revision", ""], ["nzType", "inner", "nzSize", "small", 2, "width", "100%", 3, "nzTitle", "nzExtra"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "nzDescription"], ["moderationButtons", ""], ["revCardHeaderTitle", ""], ["revCardHeaderExtra", ""], ["revDiffDescription", ""], ["revDiffSourceIds", ""], [4, "ngTemplateOutlet"], ["nz-row", "", 2, "margin-top", "1em"], ["nz-col", "", "nzSpan", "24", 2, "text-align", "right"], ["nzDirection", "horizontal"], [3, "selectedOrg", "selectedOrgChange"], ["type", "submit", "nz-button", "", "cvcOrgSelectorBtn", "", "nzType", "primary", "nzSize", "small"], ["nz-icon", "", "nzType", "civic:revision"], ["nzSize", "small"], ["nz-typography", "", "nzType", "secondary"], ["nz-comment-avatar", "", 3, "nzSrc", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", 3, "nzText"]], template: function VariantGroupsRevisionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VariantGroupsRevisionsComponent_ng_container_2_Template, 5, 2, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "cvc-participant-list", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("participantSelectedEvent", function VariantGroupsRevisionsComponent_Template_cvc_participant_list_participantSelectedEvent_5_listener($event) { return ctx.onRevisorSelected($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VariantGroupsRevisionsComponent_ng_template_7_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "cvc-participant-list", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("participantSelectedEvent", function VariantGroupsRevisionsComponent_Template_cvc_participant_list_participantSelectedEvent_9_listener($event) { return ctx.onFieldNameSelected($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VariantGroupsRevisionsComponent_ng_template_11_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.service.revisions$));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, ctx.service.uniqueRevisors$));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx.service.revisionFields$));
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_5__["CvcParticipantListComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardMetaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceItemComponent"], _forms_shared_components_org_selector_btn_group_org_selector_btn_group_component__WEBPACK_IMPORTED_MODULE_9__["CvcOrgSelectorBtnGroupComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], _forms_shared_components_org_selector_btn_group_org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_12__["CvcOrgSelectorBtnDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__["NzTypographyComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__["NzTagComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_17__["NzAvatarComponent"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_18__["NzCommentAvatarDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_19__["PushPipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_20__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return VariantGroupsRevisionsComponent;
})();


/***/ }),

/***/ "mObm":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-summary/variant-groups-summary.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: VariantGroupsSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsSummaryComponent", function() { return VariantGroupsSummaryComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_shared_empty_revisable_empty_revisable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/shared/empty-revisable/empty-revisable.component */ "LGOj");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");













function VariantGroupsSummaryComponent_nz_space_0_p_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const variantGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzEllipsisRows", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](variantGroup_r1.description);
    }
}
function VariantGroupsSummaryComponent_nz_space_0_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-empty-revisable", 11);
    }
}
function VariantGroupsSummaryComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-descriptions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VariantGroupsSummaryComponent_nz_space_0_p_8_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, VariantGroupsSummaryComponent_nz_space_0_ng_template_9_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Variant Menu Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const variantGroup_r1 = ctx.ngIf;
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColumn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", variantGroup_r1.description)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    }
}
let VariantGroupsSummaryComponent = /*@__PURE__*/ (() => {
    class VariantGroupsSummaryComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.viewer$ = this.viewerService.viewer$;
                let queryRef = this.gql.watch({ variantGroupId: +params.variantGroupId });
                let observable = queryRef.valueChanges;
                this.subscribableEntity = {
                    id: +params.variantGroupId,
                    entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribableEntities"].VariantGroup,
                };
                this.variantGroup$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'variantGroup'));
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'));
                this.myVariantGroupInfo$ = this.variantGroup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('myVariantGroupInfoDetails'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((info) => JSON.parse(String(info))));
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    VariantGroupsSummaryComponent.ɵfac = function VariantGroupsSummaryComponent_Factory(t) { return new (t || VariantGroupsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["VariantGroupsSummaryGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    VariantGroupsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VariantGroupsSummaryComponent, selectors: [["cvc-variant-groups-summary"]], decls: 2, vars: 3, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], [3, "nzGutter"], ["nzSpan", "12"], ["nzDirection", "vertical"], ["nzLayout", "vertical", "nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Description"], ["nz-typography", "", "nzEllipsis", "", "nzExpandable", "", 3, "nzEllipsisRows", 4, "ngIf", "ngIfElse"], ["noDescription", ""], [3, "nzSpan"], ["nz-typography", "", "nzEllipsis", "", "nzExpandable", "", 3, "nzEllipsisRows"], ["notification", "No description provided"]], template: function VariantGroupsSummaryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VariantGroupsSummaryComponent_nz_space_0_Template, 16, 6, "nz-space", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.variantGroup$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__["NzTypographyComponent"], _components_shared_empty_revisable_empty_revisable_component__WEBPACK_IMPORTED_MODULE_10__["CvcEmptyRevisableComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return VariantGroupsSummaryComponent;
})();


/***/ }),

/***/ "ol2S":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/tab-navigation/tab-navigation.module.ts ***!
  \***************************************************************************/
/*! exports provided: CvcTabNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcTabNavigationModule", function() { return CvcTabNavigationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CvcTabNavigationModule = /*@__PURE__*/ (() => {
    class CvcTabNavigationModule {
    }
    CvcTabNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CvcTabNavigationModule });
    CvcTabNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CvcTabNavigationModule_Factory(t) { return new (t || CvcTabNavigationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabsModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponentModule"],
            ]] });
    return CvcTabNavigationModule;
})();


/***/ }),

/***/ "wjqW":
/*!****************************************************************************************!*\
  !*** ./src/app/views/variant-groups/variant-groups-home/variant-groups-home.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VariantGroupsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsHomeModule", function() { return VariantGroupsHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _app_components_variant_groups_variant_groups_table_variant_groups_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/variant-groups/variant-groups-table/variant-groups-table.module */ "7cCT");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let VariantGroupsHomeModule = /*@__PURE__*/ (() => {
    class VariantGroupsHomeModule {
    }
    VariantGroupsHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: VariantGroupsHomeModule });
    VariantGroupsHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function VariantGroupsHomeModule_Factory(t) { return new (t || VariantGroupsHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _app_components_variant_groups_variant_groups_table_variant_groups_table_module__WEBPACK_IMPORTED_MODULE_3__["CvcVariantGroupsTableModule"]
            ]] });
    return VariantGroupsHomeModule;
})();


/***/ })

}]);