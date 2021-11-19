(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "7/OE":
/*!*************************************************!*\
  !*** ./src/app/views/evidence/evidence.view.ts ***!
  \*************************************************/
/*! exports provided: EvidenceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceView", function() { return EvidenceView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let EvidenceView = /*@__PURE__*/ (() => {
    class EvidenceView {
        constructor() { }
    }
    EvidenceView.ɵfac = function EvidenceView_Factory(t) { return new (t || EvidenceView)(); };
    EvidenceView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceView, selectors: [["app-evidence"]], decls: 1, vars: 0, template: function EvidenceView_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return EvidenceView;
})();


/***/ }),

/***/ "Cygq":
/*!**********************************************************************!*\
  !*** ./src/app/views/evidence/evidence-home/evidence-home.module.ts ***!
  \**********************************************************************/
/*! exports provided: EvidenceHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceHomeModule", function() { return EvidenceHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/switch */ "DQmg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












let EvidenceHomeModule = /*@__PURE__*/ (() => {
    class EvidenceHomeModule {
    }
    EvidenceHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: EvidenceHomeModule });
    EvidenceHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function EvidenceHomeModule_Factory(t) { return new (t || EvidenceHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_8__["NzSwitchModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_1__["CvcSectionNavigationModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcGeneTagModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_5__["CvcEvidenceTableModule"],
            ]] });
    return EvidenceHomeModule;
})();


/***/ }),

/***/ "DiSq":
/*!***************************************************!*\
  !*** ./src/app/views/evidence/evidence.module.ts ***!
  \***************************************************/
/*! exports provided: EvidenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceModule", function() { return EvidenceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evidence_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-routing.module */ "eDJH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EvidenceModule = /*@__PURE__*/ (() => {
    class EvidenceModule {
    }
    EvidenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvidenceModule });
    EvidenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EvidenceModule_Factory(t) { return new (t || EvidenceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _evidence_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvidenceRoutingModule"],
            ]] });
    return EvidenceModule;
})();


/***/ }),

/***/ "eDJH":
/*!***********************************************************!*\
  !*** ./src/app/views/evidence/evidence-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EvidenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceRoutingModule", function() { return EvidenceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evidence_home_evidence_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evidence-home/evidence-home.module */ "Cygq");
/* harmony import */ var _evidence_home_evidence_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-home/evidence-home.page */ "hsW8");
/* harmony import */ var _evidence_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidence.view */ "7/OE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _evidence_view__WEBPACK_IMPORTED_MODULE_3__["EvidenceView"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _evidence_home_evidence_home_page__WEBPACK_IMPORTED_MODULE_2__["EvidenceHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(11), __webpack_require__.e(21), __webpack_require__.e(26), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, /*! @app/views/evidence/evidence-add/evidence-add.module */ "MnlO")).then((m) => m.EvidenceAddModule),
                data: { breadcrumb: 'Add' }
            },
            {
                path: ':evidenceId',
                data: { breadcrumb: 'DISPLAYNAME' },
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(12), __webpack_require__.e(15), __webpack_require__.e(14), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e("common"), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! @app/views/evidence/evidence-detail/evidence-detail.module */ "evuO")).then((m) => m.EvidenceDetailModule),
                    },
                    {
                        path: 'revise',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(11), __webpack_require__.e(21), __webpack_require__.e(26), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! @app/views/evidence/evidence-revise/evidence-revise.module */ "CZO/")).then((m) => m.EvidenceReviseModule),
                        data: { breadcrumb: 'Revise' }
                    },
                ]
            },
        ]
    }
];
let EvidenceRoutingModule = /*@__PURE__*/ (() => {
    class EvidenceRoutingModule {
    }
    EvidenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvidenceRoutingModule });
    EvidenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function EvidenceRoutingModule_Factory(t) { return new (t || EvidenceRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                _evidence_home_evidence_home_module__WEBPACK_IMPORTED_MODULE_1__["EvidenceHomeModule"]
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return EvidenceRoutingModule;
})();


/***/ }),

/***/ "hsW8":
/*!********************************************************************!*\
  !*** ./src/app/views/evidence/evidence-home/evidence-home.page.ts ***!
  \********************************************************************/
/*! exports provided: EvidenceHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceHomePage", function() { return EvidenceHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");













function EvidenceHomePage_ng_template_1_ng_container_0_button_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit New Evidence ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function EvidenceHomePage_ng_template_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvidenceHomePage_ng_template_1_ng_container_0_button_1_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const viewer_r4 = ctx.ngrxLet;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", viewer_r4.signedIn);
    }
}
function EvidenceHomePage_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EvidenceHomePage_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 5);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r1.viewer$);
    }
}
function EvidenceHomePage_nz_row_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-evidence-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
    }
}
let EvidenceHomePage = /*@__PURE__*/ (() => {
    class EvidenceHomePage {
        constructor(viewerService) {
            this.viewerService = viewerService;
            this.tableView = true;
            this.viewer$ = this.viewerService.viewer$;
        }
        ngOnInit() { }
    }
    EvidenceHomePage.ɵfac = function EvidenceHomePage_Factory(t) { return new (t || EvidenceHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_1__["ViewerService"])); };
    EvidenceHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceHomePage, selectors: [["evidence-home"]], decls: 9, vars: 2, consts: [[3, "actionsTpl"], ["evidenceActions", ""], [1, "site-page-header"], ["nz-icon", "", "nzType", "civic:evidence"], [4, "ngIf"], [4, "ngrxLet"], ["routerLink", "/evidence/add/submit", "nz-button", "", "nzSize", "small", 4, "ngIf"], ["routerLink", "/evidence/add/submit", "nz-button", "", "nzSize", "small"], ["nz-icon", "", "nzType", "plus-circle"], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function EvidenceHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-section-navigation", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvidenceHomePage_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-page-header", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " CIViC Evidence ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EvidenceHomePage_nz_row_8_Template, 4, 1, "nz-row", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionsTpl", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView);
            }
        }, directives: [_components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_2__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderTitleDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["LetDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzColDirective"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_12__["CvcEvidenceTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return EvidenceHomePage;
})();


/***/ })

}]);