(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "ViH0":
/*!*************************************************************!*\
  !*** ./src/app/views/revisions/revisions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RevisionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsRoutingModule", function() { return RevisionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _revisions_home_revisions_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revisions-home/revisions-home.page */ "fkBO");
/* harmony import */ var _revisions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revisions.component */ "bDur");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '', component: _revisions_component__WEBPACK_IMPORTED_MODULE_2__["RevisionsComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _revisions_home_revisions_home_page__WEBPACK_IMPORTED_MODULE_1__["RevisionsHomePage"],
                data: {
                    breadcrumb: 'Home'
                }
            },
        ]
    }
];
let RevisionsRoutingModule = /*@__PURE__*/ (() => {
    class RevisionsRoutingModule {
    }
    RevisionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RevisionsRoutingModule });
    RevisionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function RevisionsRoutingModule_Factory(t) { return new (t || RevisionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return RevisionsRoutingModule;
})();


/***/ }),

/***/ "bDur":
/*!********************************************************!*\
  !*** ./src/app/views/revisions/revisions.component.ts ***!
  \********************************************************/
/*! exports provided: RevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsComponent", function() { return RevisionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let RevisionsComponent = /*@__PURE__*/ (() => {
    class RevisionsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    RevisionsComponent.ɵfac = function RevisionsComponent_Factory(t) { return new (t || RevisionsComponent)(); };
    RevisionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisionsComponent, selectors: [["cvc-revisions"]], decls: 1, vars: 0, template: function RevisionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return RevisionsComponent;
})();


/***/ }),

/***/ "fkBO":
/*!***********************************************************************!*\
  !*** ./src/app/views/revisions/revisions-home/revisions-home.page.ts ***!
  \***********************************************************************/
/*! exports provided: RevisionsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsHomePage", function() { return RevisionsHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");




let RevisionsHomePage = /*@__PURE__*/ (() => {
    class RevisionsHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    RevisionsHomePage.ɵfac = function RevisionsHomePage_Factory(t) { return new (t || RevisionsHomePage)(); };
    RevisionsHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisionsHomePage, selectors: [["revisions-home"]], decls: 10, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:revision"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function RevisionsHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Revisions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Revisions table here.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return RevisionsHomePage;
})();


/***/ }),

/***/ "vz9B":
/*!*************************************************************************!*\
  !*** ./src/app/views/revisions/revisions-home/revisions-home.module.ts ***!
  \*************************************************************************/
/*! exports provided: RevisionsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsHomeModule", function() { return RevisionsHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let RevisionsHomeModule = /*@__PURE__*/ (() => {
    class RevisionsHomeModule {
    }
    RevisionsHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RevisionsHomeModule });
    RevisionsHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RevisionsHomeModule_Factory(t) { return new (t || RevisionsHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
            ]] });
    return RevisionsHomeModule;
})();


/***/ }),

/***/ "wRBE":
/*!*****************************************************!*\
  !*** ./src/app/views/revisions/revisions.module.ts ***!
  \*****************************************************/
/*! exports provided: RevisionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsModule", function() { return RevisionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _revisions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revisions-routing.module */ "ViH0");
/* harmony import */ var _revisions_home_revisions_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revisions-home/revisions-home.module */ "vz9B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RevisionsModule = /*@__PURE__*/ (() => {
    class RevisionsModule {
    }
    RevisionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RevisionsModule });
    RevisionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function RevisionsModule_Factory(t) { return new (t || RevisionsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _revisions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RevisionsRoutingModule"],
                _revisions_home_revisions_home_module__WEBPACK_IMPORTED_MODULE_2__["RevisionsHomeModule"],
            ]] });
    return RevisionsModule;
})();


/***/ })

}]);