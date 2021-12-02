(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "GWlk":
/*!*****************************************************!*\
  !*** ./src/app/views/community/community.module.ts ***!
  \*****************************************************/
/*! exports provided: CommunityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityModule", function() { return CommunityModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _community_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-routing.module */ "aDmn");
/* harmony import */ var _community_home_community_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community-home/community-home.module */ "vxdo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CommunityModule = /*@__PURE__*/ (() => {
    class CommunityModule {
    }
    CommunityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CommunityModule });
    CommunityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CommunityModule_Factory(t) { return new (t || CommunityModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _community_routing_module__WEBPACK_IMPORTED_MODULE_1__["CommunityRoutingModule"],
                _community_home_community_home_module__WEBPACK_IMPORTED_MODULE_2__["CommunityHomeModule"],
            ]] });
    return CommunityModule;
})();


/***/ }),

/***/ "TVOF":
/*!***********************************************************************!*\
  !*** ./src/app/views/community/community-home/community-home.page.ts ***!
  \***********************************************************************/
/*! exports provided: CommunityHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityHomePage", function() { return CommunityHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");




let CommunityHomePage = /*@__PURE__*/ (() => {
    class CommunityHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    CommunityHomePage.ɵfac = function CommunityHomePage_Factory(t) { return new (t || CommunityHomePage)(); };
    CommunityHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommunityHomePage, selectors: [["community-home"]], decls: 10, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "global"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function CommunityHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CIViC Community ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User, organization leaderboards, news, etc.");
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
    return CommunityHomePage;
})();


/***/ }),

/***/ "aDmn":
/*!*************************************************************!*\
  !*** ./src/app/views/community/community-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CommunityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityRoutingModule", function() { return CommunityRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _community_home_community_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-home/community-home.page */ "TVOF");
/* harmony import */ var _community_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community.component */ "rK/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _community_component__WEBPACK_IMPORTED_MODULE_2__["CommunityComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _community_home_community_home_page__WEBPACK_IMPORTED_MODULE_1__["CommunityHomePage"]
            }
        ]
    }
];
let CommunityRoutingModule = /*@__PURE__*/ (() => {
    class CommunityRoutingModule {
    }
    CommunityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CommunityRoutingModule });
    CommunityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CommunityRoutingModule_Factory(t) { return new (t || CommunityRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CommunityRoutingModule;
})();


/***/ }),

/***/ "rK/g":
/*!********************************************************!*\
  !*** ./src/app/views/community/community.component.ts ***!
  \********************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let CommunityComponent = /*@__PURE__*/ (() => {
    class CommunityComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    CommunityComponent.ɵfac = function CommunityComponent_Factory(t) { return new (t || CommunityComponent)(); };
    CommunityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommunityComponent, selectors: [["cvc-community"]], decls: 1, vars: 0, template: function CommunityComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return CommunityComponent;
})();


/***/ }),

/***/ "vxdo":
/*!*************************************************************************!*\
  !*** ./src/app/views/community/community-home/community-home.module.ts ***!
  \*************************************************************************/
/*! exports provided: CommunityHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityHomeModule", function() { return CommunityHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CommunityHomeModule = /*@__PURE__*/ (() => {
    class CommunityHomeModule {
    }
    CommunityHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CommunityHomeModule });
    CommunityHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CommunityHomeModule_Factory(t) { return new (t || CommunityHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
            ]] });
    return CommunityHomeModule;
})();


/***/ })

}]);