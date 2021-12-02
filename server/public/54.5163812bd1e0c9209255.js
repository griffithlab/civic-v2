(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "4niF":
/*!***********************************************************!*\
  !*** ./src/app/views/releases/releases-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReleasesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesRoutingModule", function() { return ReleasesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _releases_main_releases_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./releases-main/releases-main.component */ "uop/");
/* harmony import */ var _releases_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./releases.component */ "TH/z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _releases_component__WEBPACK_IMPORTED_MODULE_2__["ReleasesComponent"],
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            {
                path: 'main',
                component: _releases_main_releases_main_component__WEBPACK_IMPORTED_MODULE_1__["ReleasesMainComponent"]
            }
        ]
    }
];
let ReleasesRoutingModule = /*@__PURE__*/ (() => {
    class ReleasesRoutingModule {
    }
    ReleasesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReleasesRoutingModule });
    ReleasesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReleasesRoutingModule_Factory(t) { return new (t || ReleasesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ReleasesRoutingModule;
})();


/***/ }),

/***/ "TH/z":
/*!******************************************************!*\
  !*** ./src/app/views/releases/releases.component.ts ***!
  \******************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let ReleasesComponent = /*@__PURE__*/ (() => {
    class ReleasesComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    ReleasesComponent.ɵfac = function ReleasesComponent_Factory(t) { return new (t || ReleasesComponent)(); };
    ReleasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReleasesComponent, selectors: [["cvc-releases"]], decls: 1, vars: 0, template: function ReleasesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return ReleasesComponent;
})();


/***/ }),

/***/ "buMc":
/*!***************************************************!*\
  !*** ./src/app/views/releases/releases.module.ts ***!
  \***************************************************/
/*! exports provided: ReleasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesModule", function() { return ReleasesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _releases_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./releases-routing.module */ "4niF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










let ReleasesModule = /*@__PURE__*/ (() => {
    class ReleasesModule {
    }
    ReleasesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ReleasesModule });
    ReleasesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function ReleasesModule_Factory(t) { return new (t || ReleasesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _releases_routing_module__WEBPACK_IMPORTED_MODULE_8__["ReleasesRoutingModule"],
                _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_1__["IconsProviderModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_3__["NzPageHeaderModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceModule"]
            ]] });
    return ReleasesModule;
})();


/***/ }),

/***/ "uop/":
/*!*************************************************************************!*\
  !*** ./src/app/views/releases/releases-main/releases-main.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReleasesMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesMainComponent", function() { return ReleasesMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");




let ReleasesMainComponent = /*@__PURE__*/ (() => {
    class ReleasesMainComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    ReleasesMainComponent.ɵfac = function ReleasesMainComponent_Factory(t) { return new (t || ReleasesMainComponent)(); };
    ReleasesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReleasesMainComponent, selectors: [["cvc-releases-main"]], decls: 10, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "download"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function ReleasesMainComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Data Releases ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data releases browse table goes here.");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return ReleasesMainComponent;
})();


/***/ })

}]);