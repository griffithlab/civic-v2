(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "0745":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/details-navigation/details-navigation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CvcDetailsNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcDetailsNavigationComponent", function() { return CvcDetailsNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _contributor_avatars_contributor_avatars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contributor-avatars/contributor-avatars.component */ "vm1A");





function CvcDetailsNavigationComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-contributor-avatars", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subscribable", ctx_r1.entity);
    }
}
function CvcDetailsNavigationComponent_a_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcDetailsNavigationComponent_a_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcDetailsNavigationComponent_a_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Revisions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcDetailsNavigationComponent_a_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Flags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let CvcDetailsNavigationComponent = /*@__PURE__*/ (() => {
    class CvcDetailsNavigationComponent {
        constructor(router) {
            this.router = router;
            this.tabs = ['summary', 'comments', 'revisions', 'flags'];
            this.selectedTabIndex = this.getActivatedRouteIndex(this.router.url);
        }
        getActivatedRouteIndex(url) {
            return this.tabs.findIndex((path) => url.includes(path));
        }
        ngOnInit() {
        }
    }
    CvcDetailsNavigationComponent.ɵfac = function CvcDetailsNavigationComponent_Factory(t) { return new (t || CvcDetailsNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    CvcDetailsNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcDetailsNavigationComponent, selectors: [["cvc-details-navigation"]], inputs: { entity: "entity" }, decls: 13, vars: 2, consts: [["id", "section-tabs"], ["nzSpan", "24"], ["nzType", "card", "nzSize", "small", 3, "nzSelectedIndex", "nzTabBarExtraContent"], ["actionsContributorsTpl", ""], ["nz-tab-link", "", "routerLink", "summary", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "comments", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "revisions", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "flags", 4, "nzTabLink"], ["id", "contributors-col"], [3, "subscribable"], ["nz-tab-link", "", "routerLink", "summary"], ["nz-icon", "", "nzType", "pic-left"], ["nz-tab-link", "", "routerLink", "comments"], ["nz-icon", "", "nzType", "civic-comment"], ["nz-tab-link", "", "routerLink", "revisions"], ["nz-icon", "", "nzType", "civic-revision"], ["nz-tab-link", "", "routerLink", "flags"], ["nz-icon", "", "nzType", "civic-flag"]], template: function CvcDetailsNavigationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tabset", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcDetailsNavigationComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcDetailsNavigationComponent_a_6_Template, 3, 0, "a", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvcDetailsNavigationComponent_a_8_Template, 3, 0, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-tab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CvcDetailsNavigationComponent_a_10_Template, 3, 0, "a", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-tab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CvcDetailsNavigationComponent_a_12_Template, 3, 0, "a", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedTabIndex)("nzTabBarExtraContent", _r0);
            }
        }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabLinkTemplateDirective"], _contributor_avatars_contributor_avatars_component__WEBPACK_IMPORTED_MODULE_4__["CvcContributorAvatarsComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcDetailsNavigationComponent;
})();


/***/ }),

/***/ "6K7H":
/*!************************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-revisions/evidence-revisions.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EvidenceRevisionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceRevisionsModule", function() { return EvidenceRevisionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_components_revisions_revisions_list_and_filter_revisions_list_and_filter_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module */ "zgtv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EvidenceRevisionsModule = /*@__PURE__*/ (() => {
    class EvidenceRevisionsModule {
    }
    EvidenceRevisionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvidenceRevisionsModule });
    EvidenceRevisionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EvidenceRevisionsModule_Factory(t) { return new (t || EvidenceRevisionsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _app_components_revisions_revisions_list_and_filter_revisions_list_and_filter_module__WEBPACK_IMPORTED_MODULE_1__["RevisionsListAndFilterModule"]
            ]] });
    return EvidenceRevisionsModule;
})();


/***/ }),

/***/ "9qxV":
/*!************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-detail.view.ts ***!
  \************************************************************************/
/*! exports provided: EvidenceDetailView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailView", function() { return EvidenceDetailView; });
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
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _components_shared_details_navigation_details_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/shared/details-navigation/details-navigation.component */ "0745");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _components_shared_entity_subscription_button_entity_subscription_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/shared/entity-subscription-button/entity-subscription-button.component */ "rTZz");























function EvidenceDetailView_ng_container_0_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Parents:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-space-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "cvc-gene-tag", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "cvc-variant-tag", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](evidence_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/genes/", evidence_r1.gene.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("gene", evidence_r1.gene);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/variants/", evidence_r1.variant.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("variant", evidence_r1.variant);
    }
}
function EvidenceDetailView_ng_container_0_nz_tag_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Flagged");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColor", "red");
    }
}
const _c0 = function (a1) { return ["/evidence", a1, "revise"]; };
function EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_button_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Revise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, evidence_r1.id))("nzType", _r13.isActive ? "primary" : "default");
    }
}
function EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_button_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Flag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", _r15.isActive ? "primary" : "default");
    }
}
function EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_cvc_entity_subscription_button_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cvc-entity-subscription-button", 26);
    }
    if (rf & 2) {
        const viewer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet;
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewer", viewer_r9)("subscribableId", ctx_r12.subscribable.id);
    }
}
function EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_button_2_Template, 3, 4, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_button_4_Template, 3, 1, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_cvc_entity_subscription_button_6_Template, 1, 2, "cvc-entity-subscription-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const viewer_r9 = ctx.ngrxLet;
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r9.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r9.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", viewer_r9.signedIn && ctx_r8.subscribable);
    }
}
function EvidenceDetailView_ng_container_0_nz_page_header_extra_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvidenceDetailView_ng_container_0_nz_page_header_extra_12_nz_space_1_Template, 7, 3, "nz-space", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r5.viewer$);
    }
}
const _c1 = function (a0) { return { "flagged": a0 }; };
function EvidenceDetailView_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvidenceDetailView_ng_container_0_ng_template_2_Template, 11, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-page-header-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nz-page-header-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EvidenceDetailView_ng_container_0_nz_tag_11_Template, 2, 1, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EvidenceDetailView_ng_container_0_nz_page_header_extra_12_Template, 2, 1, "nz-page-header-extra", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "cvc-details-navigation", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = ctx.ngIf;
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayName", evidence_r1.name)("relationsTpl", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx_r0.flagsTotal$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, evidence_r1.flags.totalCount > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", evidence_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.viewer$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("entity", ctx_r0.subscribable);
    }
}
let EvidenceDetailView = /*@__PURE__*/ (() => {
    class EvidenceDetailView {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.queryRef = this.gql.watch({ evidenceId: +params.evidenceId });
                let observable = this.queryRef.valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true));
                this.evidence$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'evidenceItem'));
                this.commentsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('comments', 'totalCount'));
                this.flagsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('flags', 'totalCount'));
                this.revisionsTotal$ = this.evidence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('revisions', 'totalCount'));
                this.subscribable = {
                    id: +params.evidenceId,
                    entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].EvidenceItem
                };
                this.viewer$ = this.viewerService.viewer$;
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    EvidenceDetailView.ɵfac = function EvidenceDetailView_Factory(t) { return new (t || EvidenceDetailView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EvidenceDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    EvidenceDetailView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EvidenceDetailView, selectors: [["evidence-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName", "relationsTpl"], ["evidenceRelations", ""], ["cvcFlaggable", "", 3, "flags"], [1, "site-page-header"], ["cvcFlaggableOptions", "", 3, "ngClass"], ["nz-icon", "", "nzType", "civic:evidence"], [3, "nzColor", 4, "ngIf"], [4, "ngrxLet"], [3, "entity"], [1, "content"], ["nzDirection", "horizontal"], ["nz-typography", "", 1, "label"], [1, "tags"], [3, "routerLink"], [3, "gene"], [3, "variant"], [3, "nzColor"], ["nzDirection", "horizontal", "nzSize", "small", 4, "ngrxLet"], ["nzDirection", "horizontal", "nzSize", "small"], ["routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "routerLink", "nzType", 4, "ngIf"], ["routerLink", "flags", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType", 4, "ngIf"], ["typename", "EvidenceItem", 3, "viewer", "subscribableId", 4, "ngIf"], ["routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "routerLink", "nzType"], ["rlaComments", "routerLinkActive"], ["routerLink", "flags", "routerLinkActive", "", "nz-button", "", "nzSize", "small", 3, "nzType"], ["typename", "EvidenceItem", 3, "viewer", "subscribableId"]], template: function EvidenceDetailView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EvidenceDetailView_ng_container_0_Template, 17, 12, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.evidence$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__["CvcSectionNavigationComponent"], _components_flags_flaggable_flaggable_component__WEBPACK_IMPORTED_MODULE_7__["CvcFlaggableComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderTitleDirective"], _components_flags_flaggable_flaggable_options_directive__WEBPACK_IMPORTED_MODULE_9__["CvcFlaggableOptionsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderTagDirective"], _ngrx_component__WEBPACK_IMPORTED_MODULE_12__["LetDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderContentDirective"], _components_shared_details_navigation_details_navigation_component__WEBPACK_IMPORTED_MODULE_13__["CvcDetailsNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__["NzSpaceItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__["NzTypographyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_16__["CvcGeneTagComponent"], _components_variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_17__["CvcVariantTagComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__["NzTagComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderExtraDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _components_shared_entity_subscription_button_entity_subscription_button_component__WEBPACK_IMPORTED_MODULE_21__["CvcEntitySubscriptionButtonComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return EvidenceDetailView;
})();


/***/ }),

/***/ "HdCE":
/*!********************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-comments/evidence-comments.page.ts ***!
  \********************************************************************************************/
/*! exports provided: EvidenceCommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceCommentsPage", function() { return EvidenceCommentsPage; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/comments/comment-list/comment-list.component */ "NCHN");




let EvidenceCommentsPage = /*@__PURE__*/ (() => {
    class EvidenceCommentsPage {
        constructor(route) {
            this.route = route;
            const evidenceId = +this.route.snapshot.params['evidenceId'];
            this.commentable = {
                id: evidenceId,
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["CommentableEntities"].EvidenceItem
            };
        }
    }
    EvidenceCommentsPage.ɵfac = function EvidenceCommentsPage_Factory(t) { return new (t || EvidenceCommentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    EvidenceCommentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EvidenceCommentsPage, selectors: [["cvc-evidence-comments"]], decls: 1, vars: 1, consts: [[3, "commentable"]], template: function EvidenceCommentsPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-comment-list", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("commentable", ctx.commentable);
            }
        }, directives: [_components_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_3__["CvcCommentListComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return EvidenceCommentsPage;
})();


/***/ }),

/***/ "JUHo":
/*!********************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-summary/evidence-summary.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EvidenceSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSummaryModule", function() { return EvidenceSummaryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_components_evidence_evidence_rating_evidence_rating_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/evidence/evidence-rating/evidence-rating.module */ "jEMj");
/* harmony import */ var _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/shared/status-tag/status-tag.module */ "1JjV");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module */ "bluq");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/events/event-feed/event-feed.module */ "e5/R");
/* harmony import */ var _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/assertions/assertions-table/assertions-table.module */ "IpA2");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/components/shared/tag-list/tag-list.module */ "iNrY");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























let EvidenceSummaryModule = /*@__PURE__*/ (() => {
    class EvidenceSummaryModule {
    }
    EvidenceSummaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: EvidenceSummaryModule });
    EvidenceSummaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function EvidenceSummaryModule_Factory(t) { return new (t || EvidenceSummaryModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__["NzTypographyModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["CvcPipesModule"],
                _app_components_evidence_evidence_rating_evidence_rating_module__WEBPACK_IMPORTED_MODULE_11__["CvcEvidenceRatingModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_22__["CvcDiseaseTagModule"],
                _app_components_shared_status_tag_status_tag_module__WEBPACK_IMPORTED_MODULE_12__["CvcStatusTagModule"],
                _app_components_shared_tag_list_tag_list_module__WEBPACK_IMPORTED_MODULE_21__["CvcTagListModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_13__["CvcUserTagModule"],
                _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_14__["CvcClinicalTrialTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_20__["CvcSourceTagModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_15__["CvcPhenotypeTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_16__["CvcDrugTagModule"],
                _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_17__["CvcEventFeedModule"],
                _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_18__["CvcAssertionsTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_19__["CvcEntityTableCardModule"],
            ]] });
    return EvidenceSummaryModule;
})();


/***/ }),

/***/ "VKR8":
/*!**************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-flags/evidence-flags.page.ts ***!
  \**************************************************************************************/
/*! exports provided: EvidenceFlagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceFlagsPage", function() { return EvidenceFlagsPage; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_flags_flag_list_and_filter_flag_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/flags/flag-list-and-filter/flag-list-and-filter.component */ "SJ3B");




let EvidenceFlagsPage = /*@__PURE__*/ (() => {
    class EvidenceFlagsPage {
        constructor(route) {
            this.route = route;
            const evidenceId = +this.route.snapshot.params['evidenceId'];
            this.flaggable = {
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["FlaggableEntities"].EvidenceItem,
                id: evidenceId
            };
        }
    }
    EvidenceFlagsPage.ɵfac = function EvidenceFlagsPage_Factory(t) { return new (t || EvidenceFlagsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    EvidenceFlagsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EvidenceFlagsPage, selectors: [["cvc-evidence-flags"]], decls: 1, vars: 1, consts: [[3, "flaggable"]], template: function EvidenceFlagsPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-flag-list-and-filter", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flaggable", ctx.flaggable);
            }
        }, directives: [_components_flags_flag_list_and_filter_flag_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__["CvcFlagListAndFilterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return EvidenceFlagsPage;
})();


/***/ }),

/***/ "bT9b":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-comments/evidence-comments.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EvidenceCommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceCommentsModule", function() { return EvidenceCommentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_components_comments_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/comments/comment-list/comment-list.module */ "aFVg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EvidenceCommentsModule = /*@__PURE__*/ (() => {
    class EvidenceCommentsModule {
    }
    EvidenceCommentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvidenceCommentsModule });
    EvidenceCommentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EvidenceCommentsModule_Factory(t) { return new (t || EvidenceCommentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _app_components_comments_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_1__["CvcCommentListModule"]
            ]] });
    return EvidenceCommentsModule;
})();


/***/ }),

/***/ "evuO":
/*!**************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-detail.module.ts ***!
  \**************************************************************************/
/*! exports provided: EvidenceDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailModule", function() { return EvidenceDetailModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/flags/flaggable/flaggable.module */ "Ze44");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_shared_details_navigation_details_navigation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/shared/details-navigation/details-navigation.module */ "J31z");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _evidence_detail_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./evidence-detail-routing.module */ "ixLw");
/* harmony import */ var _app_components_shared_entity_subscription_button_entity_subscription_button_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/shared/entity-subscription-button/entity-subscription-button.module */ "jLYH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















let EvidenceDetailModule = /*@__PURE__*/ (() => {
    class EvidenceDetailModule {
    }
    EvidenceDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: EvidenceDetailModule });
    EvidenceDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function EvidenceDetailModule_Factory(t) { return new (t || EvidenceDetailModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _evidence_detail_routing_module__WEBPACK_IMPORTED_MODULE_14__["EvidenceDetailRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__["NzTypographyModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_2__["CvcSectionNavigationModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcGeneTagModule"],
                _app_components_flags_flaggable_flaggable_module__WEBPACK_IMPORTED_MODULE_6__["CvcFlaggableModule"],
                _app_components_shared_details_navigation_details_navigation_module__WEBPACK_IMPORTED_MODULE_11__["CvcDetailsNavigationModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_12__["CvcVariantTagModule"],
                _app_components_shared_entity_subscription_button_entity_subscription_button_module__WEBPACK_IMPORTED_MODULE_15__["CvcEntitySubscriptionButtonModule"]
            ]] });
    return EvidenceDetailModule;
})();


/***/ }),

/***/ "ixLw":
/*!**********************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-detail-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EvidenceDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailRoutingModule", function() { return EvidenceDetailRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_detail_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-detail.view */ "9qxV");
/* harmony import */ var _evidence_comments_evidence_comments_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-comments/evidence-comments.module */ "bT9b");
/* harmony import */ var _evidence_comments_evidence_comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidence-comments/evidence-comments.page */ "HdCE");
/* harmony import */ var _evidence_flags_evidence_flags_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evidence-flags/evidence-flags.module */ "pkbv");
/* harmony import */ var _evidence_flags_evidence_flags_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evidence-flags/evidence-flags.page */ "VKR8");
/* harmony import */ var _evidence_revisions_evidence_revisions_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evidence-revisions/evidence-revisions.module */ "6K7H");
/* harmony import */ var _evidence_revisions_evidence_revisions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./evidence-revisions/evidence-revisions.page */ "v2cz");
/* harmony import */ var _evidence_summary_evidence_summary_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evidence-summary/evidence-summary.module */ "JUHo");
/* harmony import */ var _evidence_summary_evidence_summary_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./evidence-summary/evidence-summary.page */ "oXiv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    {
        path: '',
        component: _evidence_detail_view__WEBPACK_IMPORTED_MODULE_1__["EvidenceDetailView"],
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
            { path: '', redirectTo: 'summary', pathMatch: 'full' },
            {
                path: 'summary',
                component: _evidence_summary_evidence_summary_page__WEBPACK_IMPORTED_MODULE_9__["EvidenceSummaryPage"],
                data: {
                    breadcrumb: 'Summary'
                }
            },
            {
                path: 'comments',
                component: _evidence_comments_evidence_comments_page__WEBPACK_IMPORTED_MODULE_3__["EvidenceCommentsPage"],
                data: {
                    breadcrumb: 'Comments'
                }
            },
            {
                path: 'revisions',
                component: _evidence_revisions_evidence_revisions_page__WEBPACK_IMPORTED_MODULE_7__["EvidenceRevisionsPage"],
                data: {
                    breadcrumb: 'Revisions'
                }
            },
            {
                path: 'flags',
                component: _evidence_flags_evidence_flags_page__WEBPACK_IMPORTED_MODULE_5__["EvidenceFlagsPage"],
                data: {
                    breadcrumb: 'Flags'
                }
            }
        ]
    }
];
let EvidenceDetailRoutingModule = /*@__PURE__*/ (() => {
    class EvidenceDetailRoutingModule {
    }
    EvidenceDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: EvidenceDetailRoutingModule });
    EvidenceDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function EvidenceDetailRoutingModule_Factory(t) { return new (t || EvidenceDetailRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                _evidence_summary_evidence_summary_module__WEBPACK_IMPORTED_MODULE_8__["EvidenceSummaryModule"],
                _evidence_comments_evidence_comments_module__WEBPACK_IMPORTED_MODULE_2__["EvidenceCommentsModule"],
                _evidence_revisions_evidence_revisions_module__WEBPACK_IMPORTED_MODULE_6__["EvidenceRevisionsModule"],
                _evidence_flags_evidence_flags_module__WEBPACK_IMPORTED_MODULE_4__["EvidenceFlagsModule"],
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return EvidenceDetailRoutingModule;
})();


/***/ }),

/***/ "jrd9":
/*!**********************************************************************************!*\
  !*** ./src/app/components/evidence/evidence-rating/evidence-rating.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CvcEvidenceRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEvidenceRatingComponent", function() { return CvcEvidenceRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");



function CvcEvidenceRatingComponent_ng_container_0_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
    }
}
function CvcEvidenceRatingComponent_ng_container_0_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
    }
}
function CvcEvidenceRatingComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcEvidenceRatingComponent_ng_container_0_i_1_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEvidenceRatingComponent_ng_container_0_i_2_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filledStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.emptyStars);
    }
}
function CvcEvidenceRatingComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " --\n");
    }
}
let CvcEvidenceRatingComponent = /*@__PURE__*/ (() => {
    class CvcEvidenceRatingComponent {
        constructor() {
            this.filledStars = [];
            this.emptyStars = [];
        }
        ngOnInit() {
            if (this.starRating) {
                this.filledStars = Array(this.starRating);
                this.emptyStars = Array(5 - this.starRating);
            }
        }
    }
    CvcEvidenceRatingComponent.ɵfac = function CvcEvidenceRatingComponent_Factory(t) { return new (t || CvcEvidenceRatingComponent)(); };
    CvcEvidenceRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcEvidenceRatingComponent, selectors: [["cvc-evidence-rating"]], inputs: { starRating: "starRating" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noStars", ""], ["nzType", "star", "nzTheme", "fill", "nz-icon", "", 4, "ngFor", "ngForOf"], ["nzType", "star", "nzTheme", "outline", "nz-icon", "", 4, "ngFor", "ngForOf"], ["nzType", "star", "nzTheme", "fill", "nz-icon", ""], ["nzType", "star", "nzTheme", "outline", "nz-icon", ""]], template: function CvcEvidenceRatingComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcEvidenceRatingComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcEvidenceRatingComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.starRating)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"]], styles: [""] });
    return CvcEvidenceRatingComponent;
})();


/***/ }),

/***/ "oXiv":
/*!******************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-summary/evidence-summary.page.ts ***!
  \******************************************************************************************/
/*! exports provided: EvidenceSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSummaryPage", function() { return EvidenceSummaryPage; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _components_evidence_evidence_rating_evidence_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/evidence/evidence-rating/evidence-rating.component */ "jrd9");
/* harmony import */ var _components_shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/shared/status-tag/status-tag.component */ "8E5y");
/* harmony import */ var _components_users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var _components_sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/sources/source-tag/source-tag.component */ "2a8A");
/* harmony import */ var _components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/events/event-feed/event-feed.component */ "ktE2");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/assertions/assertions-table/assertions-table.component */ "zI+k");
/* harmony import */ var _components_clinical_trials_clinical_trial_tag_clinical_trial_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/clinical-trials/clinical-trial-tag/clinical-trial-tag.component */ "qO8z");
/* harmony import */ var _components_diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/diseases/cvc-disease-tag/cvc-disease-tag.component */ "/ZnJ");
/* harmony import */ var _components_shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/shared/tag-list/tag-list.component */ "Eb1f");
/* harmony import */ var _components_phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/phenotypes/phenotype-tag/phenotype-tag.component */ "p+8w");
/* harmony import */ var _components_drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/drugs/cvc-drug-tag/cvc-drug-tag.component */ "an+6");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../core/pipes/evidence-enum-display-type */ "N9dV");


























function EvidenceSummaryPage_nz_space_0_ng_container_33_nz_descriptions_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-descriptions-item", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-user-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", evidence_r1.acceptanceEvent.originatingUser);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_33_nz_descriptions_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-descriptions-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-user-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", evidence_r1.rejectionEvent.originatingUser);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvidenceSummaryPage_nz_space_0_ng_container_33_nz_descriptions_item_2_Template, 2, 1, "nz-descriptions-item", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EvidenceSummaryPage_nz_space_0_ng_container_33_nz_descriptions_item_3_Template, 2, 1, "nz-descriptions-item", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", evidence_r1.rejectionEvent === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_39_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-clinical-trial-tag", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const t_r22 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clinicalTrial", t_r22);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvidenceSummaryPage_nz_space_0_ng_container_39_ng_container_1_Template, 2, 1, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", evidence_r1.source.clinicalTrials);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "None Specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_44_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "cvc-disease-tag", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/diseases/", evidence_r1.disease.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disease", evidence_r1.disease);
    }
}
function EvidenceSummaryPage_nz_space_0_span_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_47_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-phenotype-tag", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ph_r26 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("phenotype", ph_r26);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_container_47_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "cvc-tag-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvidenceSummaryPage_nz_space_0_ng_container_47_ng_container_2_Template, 2, 1, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", evidence_r1.phenotypes);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_48_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "None Specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_54_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_55_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cvc-drug-tag", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const drug_r29 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("drug", drug_r29);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_55_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cvc-tag-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvidenceSummaryPage_nz_space_0_ng_template_55_ng_container_1_Template, 2, 1, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", evidence_r1.drugs);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Drug ");
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Drug ");
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "titlecase");
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Drugs (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, evidence_r1.drugInteractionType), ") ");
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_56_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_1_Template, 1, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_2_Template, 1, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EvidenceSummaryPage_nz_space_0_ng_template_56_ng_template_3_Template, 2, 3, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngPlural", evidence_r1.drugs.length);
    }
}
function EvidenceSummaryPage_nz_space_0_ng_template_65_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const evidence_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", evidence_r1.name, " Assertions ");
    }
}
function EvidenceSummaryPage_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-descriptions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-descriptions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-descriptions-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "evidenceEnumDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-descriptions-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-descriptions-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "cvc-evidence-rating", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nz-descriptions", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nz-descriptions-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "cvc-status-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "nz-descriptions-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "cvc-user-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, EvidenceSummaryPage_nz_space_0_ng_container_33_Template, 4, 3, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-descriptions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nz-descriptions-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "cvc-source-tag", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, EvidenceSummaryPage_nz_space_0_ng_container_39_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, EvidenceSummaryPage_nz_space_0_ng_container_40_Template, 3, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "nz-descriptions", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nz-descriptions-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, EvidenceSummaryPage_nz_space_0_ng_container_44_Template, 3, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, EvidenceSummaryPage_nz_space_0_span_45_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, EvidenceSummaryPage_nz_space_0_ng_container_47_Template, 3, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, EvidenceSummaryPage_nz_space_0_ng_template_48_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "nz-descriptions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, EvidenceSummaryPage_nz_space_0_ng_template_54_Template, 2, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, EvidenceSummaryPage_nz_space_0_ng_template_55_Template, 2, 1, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, EvidenceSummaryPage_nz_space_0_ng_template_56_Template, 4, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "cvc-event-feed", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "cvc-entity-table-card", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "cvc-assertions-table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, EvidenceSummaryPage_nz_space_0_ng_template_65_Template, 2, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const evidence_r1 = ctx.ngIf;
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzEllipsisRows", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](evidence_r1.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 31, evidence_r1.evidenceType), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 33, evidence_r1.evidenceDirection), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 35, evidence_r1.clinicalSignificance), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", evidence_r1.evidenceLevel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("starRating", evidence_r1.evidenceRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", evidence_r1.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", evidence_r1.submissionEvent.originatingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", evidence_r1.rejectionEvent !== null || evidence_r1.acceptanceEvent !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColumn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", evidence_r1.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", evidence_r1.source.clinicalTrials.length > 1 ? "Clinical Trials" : "Clinical Trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", evidence_r1.source.clinicalTrials.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", evidence_r1.source.clinicalTrials.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColumn", evidence_r1.disease.name !== undefined && evidence_r1.phenotypes.length > 0 ? 1 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", evidence_r1.disease.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !evidence_r1.disease.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", evidence_r1.phenotypes.length > 1 ? "Phenotypes" : "Phenotype");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", evidence_r1.phenotypes.length > 0)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngPlural", evidence_r1.drugs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subscribable", ctx_r0.subscribable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cvcTitle", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("evidenceId", evidence_r1.id);
    }
}
let EvidenceSummaryPage = /*@__PURE__*/ (() => {
    class EvidenceSummaryPage {
        constructor(gql, route) {
            this.gql = gql;
            this.route = route;
            var queryEvidenceId;
            if (this.evidenceId) {
                queryEvidenceId = this.evidenceId;
            }
            else {
                queryEvidenceId = +this.route.snapshot.params['evidenceId'];
            }
            if (queryEvidenceId == undefined) {
                throw new Error("Must pass in an evidence ID as an input or via the route.");
            }
            this.queryRef = this.gql.watch({ evidenceId: queryEvidenceId });
            let observable = this.queryRef.valueChanges;
            this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true));
            this.evidence$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'evidenceItem'));
            this.subscribable = {
                entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].EvidenceItem,
                id: queryEvidenceId
            };
        }
    }
    EvidenceSummaryPage.ɵfac = function EvidenceSummaryPage_Factory(t) { return new (t || EvidenceSummaryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EvidenceSummaryGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    EvidenceSummaryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EvidenceSummaryPage, selectors: [["cvc-evidence-summary"]], inputs: { evidenceId: "evidenceId" }, decls: 2, vars: 3, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], [3, "nzGutter"], [3, "nzSpan"], ["nzDirection", "vertical"], ["nzLayout", "vertical", "nzSize", "small", "nzBordered", "true"], ["nzTitle", "Description"], ["nz-typography", "", "nzEllipsis", "", "nzExpandable", "", 3, "nzEllipsisRows"], ["nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Type"], ["nzTitle", "Direction"], ["nzTitle", "Clinical Significance", "nzSpan", "2"], ["nzTitle", "Level"], ["nzTitle", "Rating"], [3, "starRating"], ["nzLayout", "horizontal", "nzSize", "small", "nzBordered", "true", 1, "status-tags"], ["nzTitle", "Status"], [3, "status"], ["nzTitle", "Submitted"], [3, "user"], [4, "ngIf"], ["nzTitle", "Source", "nzSpan", "2"], [3, "source"], [3, "nzTitle"], ["nzLayout", "vertical", "nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Disease"], ["nz-typography", "", "nzType", "secondary", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noPhenotypes", ""], [3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "other"], ["drugsTitle", ""], ["tagDisplay", "hideSubject", 3, "subscribable"], [3, "cvcTitle"], [3, "evidenceId"], ["assertionsCardTitle", ""], [3, "ngSwitch"], ["nzTitle", "Accepted", 4, "ngSwitchCase"], ["nzTitle", "Rejected", 4, "ngSwitchCase"], ["nzTitle", "Accepted"], ["nzTitle", "Rejected"], [4, "ngFor", "ngForOf"], [3, "clinicalTrial"], ["nz-typography", "", "nzType", "secondary"], [3, "routerLink"], [3, "disease"], [3, "phenotype"], [3, "drug"], ["ngPluralCase", "=1"], ["nz-icon", "", "nzType", "civic:assertion"]], template: function EvidenceSummaryPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EvidenceSummaryPage_nz_space_0_Template, 67, 37, "nz-space", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.evidence$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__["NzDescriptionsItemComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyComponent"], _components_evidence_evidence_rating_evidence_rating_component__WEBPACK_IMPORTED_MODULE_9__["CvcEvidenceRatingComponent"], _components_shared_status_tag_status_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcStatusTagComponent"], _components_users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcUserTagComponent"], _components_sources_source_tag_source_tag_component__WEBPACK_IMPORTED_MODULE_12__["CvcSourceTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgPluralCase"], _components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_13__["CvcEventFeedComponent"], _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_14__["CvcEntityTableCardComponent"], _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_15__["CvcAssertionsTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_clinical_trials_clinical_trial_tag_clinical_trial_tag_component__WEBPACK_IMPORTED_MODULE_16__["CvcClinicalTrialTagComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_diseases_cvc_disease_tag_cvc_disease_tag_component__WEBPACK_IMPORTED_MODULE_17__["CvcDiseaseTagComponent"], _components_shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_18__["CvcTagListComponent"], _components_phenotypes_phenotype_tag_phenotype_tag_component__WEBPACK_IMPORTED_MODULE_19__["CvcPhenotypeTagComponent"], _components_drugs_cvc_drug_tag_cvc_drug_tag_component__WEBPACK_IMPORTED_MODULE_20__["CvcDrugTagComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_23__["PushPipe"], _core_pipes_evidence_enum_display_type__WEBPACK_IMPORTED_MODULE_24__["EvidenceEnumDisplayPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [":[_nghost-%COMP%] {\n  display: block;\n}\nnz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.status-tags[_ngcontent-%COMP%]     nz-tag {\n  margin-right: 0;\n}\n.status-tags[_ngcontent-%COMP%]     .ant-descriptions-item-label {\n  white-space: nowrap;\n}"] });
    return EvidenceSummaryPage;
})();


/***/ }),

/***/ "pkbv":
/*!****************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-flags/evidence-flags.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EvidenceFlagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceFlagsModule", function() { return EvidenceFlagsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/flags/flag-list-and-filter/flag-list-and-filter.module */ "VrgM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let EvidenceFlagsModule = /*@__PURE__*/ (() => {
    class EvidenceFlagsModule {
    }
    EvidenceFlagsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EvidenceFlagsModule });
    EvidenceFlagsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function EvidenceFlagsModule_Factory(t) { return new (t || EvidenceFlagsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzGridModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__["NzSkeletonModule"],
                _app_components_flags_flag_list_and_filter_flag_list_and_filter_module__WEBPACK_IMPORTED_MODULE_5__["CvcFlagListAndFilterModule"],
            ]] });
    return EvidenceFlagsModule;
})();


/***/ }),

/***/ "v2cz":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/evidence/evidence-detail/evidence-revisions/evidence-revisions.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: EvidenceRevisionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceRevisionsPage", function() { return EvidenceRevisionsPage; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_revisions_revisions_list_and_filter_revisions_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/revisions/revisions-list-and-filter/revisions-list-and-filter.component */ "I3fy");




let EvidenceRevisionsPage = /*@__PURE__*/ (() => {
    class EvidenceRevisionsPage {
        constructor(route) {
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.eid = +params.evidenceId;
                this.entityType = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["ModeratedEntities"]['EvidenceItem'];
            });
        }
        ngOnDestroy() {
            this.routeSub.unsubscribe();
        }
    }
    EvidenceRevisionsPage.ɵfac = function EvidenceRevisionsPage_Factory(t) { return new (t || EvidenceRevisionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    EvidenceRevisionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EvidenceRevisionsPage, selectors: [["cvc-evidence-revisions"]], decls: 1, vars: 2, consts: [[3, "id", "entityType"]], template: function EvidenceRevisionsPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-revisions-list-and-filter", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.eid)("entityType", ctx.entityType);
            }
        }, directives: [_components_revisions_revisions_list_and_filter_revisions_list_and_filter_component__WEBPACK_IMPORTED_MODULE_3__["RevisionsListAndFilterComponent"]], styles: [""] });
    return EvidenceRevisionsPage;
})();


/***/ })

}]);