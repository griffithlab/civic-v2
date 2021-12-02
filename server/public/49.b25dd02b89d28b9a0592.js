(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "JUvs":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/pages-contact/pages-contact.component.ts ***!
  \**********************************************************************/
/*! exports provided: PagesContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesContactComponent", function() { return PagesContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let PagesContactComponent = /*@__PURE__*/ (() => {
    class PagesContactComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PagesContactComponent.ɵfac = function PagesContactComponent_Factory(t) { return new (t || PagesContactComponent)(); };
    PagesContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesContactComponent, selectors: [["cvc-pages-contact"]], decls: 4, vars: 0, template: function PagesContactComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact CIViC");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Port over the current contact page.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return PagesContactComponent;
})();


/***/ }),

/***/ "TskO":
/*!*********************************************!*\
  !*** ./src/app/views/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ "ZZGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PagesModule = /*@__PURE__*/ (() => {
    class PagesModule {
    }
    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__["PagesRoutingModule"]
            ]] });
    return PagesModule;
})();


/***/ }),

/***/ "ZZGF":
/*!*****************************************************!*\
  !*** ./src/app/views/pages/pages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_pages_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-about/pages-about.component */ "pCNa");
/* harmony import */ var _pages_contact_pages_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-contact/pages-contact.component */ "JUvs");
/* harmony import */ var _pages_help_pages_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-help/pages-help.component */ "v/ms");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "v4vR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
        children: [
            {
                path: 'about',
                component: _pages_about_pages_about_component__WEBPACK_IMPORTED_MODULE_1__["PagesAboutComponent"]
            },
            {
                path: 'help',
                component: _pages_help_pages_help_component__WEBPACK_IMPORTED_MODULE_3__["PagesHelpComponent"]
            },
            {
                path: 'contact',
                component: _pages_contact_pages_contact_component__WEBPACK_IMPORTED_MODULE_2__["PagesContactComponent"]
            },
        ]
    }
];
let PagesRoutingModule = /*@__PURE__*/ (() => {
    class PagesRoutingModule {
    }
    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PagesRoutingModule;
})();


/***/ }),

/***/ "pCNa":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/pages-about/pages-about.component.ts ***!
  \******************************************************************/
/*! exports provided: PagesAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesAboutComponent", function() { return PagesAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let PagesAboutComponent = /*@__PURE__*/ (() => {
    class PagesAboutComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PagesAboutComponent.ɵfac = function PagesAboutComponent_Factory(t) { return new (t || PagesAboutComponent)(); };
    PagesAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesAboutComponent, selectors: [["cvc-pages-about"]], decls: 4, vars: 0, template: function PagesAboutComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About CiVIC");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We can move over the existing about page here, and extend it to a tabbed interface to include acknowledgements, funding, pages.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return PagesAboutComponent;
})();


/***/ }),

/***/ "v/ms":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/pages-help/pages-help.component.ts ***!
  \****************************************************************/
/*! exports provided: PagesHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesHelpComponent", function() { return PagesHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let PagesHelpComponent = /*@__PURE__*/ (() => {
    class PagesHelpComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PagesHelpComponent.ɵfac = function PagesHelpComponent_Factory(t) { return new (t || PagesHelpComponent)(); };
    PagesHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesHelpComponent, selectors: [["cvc-pages-help"]], decls: 4, vars: 0, template: function PagesHelpComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Help Using or Understanding CIViC");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Links to readthedocs, civic-help list, other methods of getting assistance, asking questions.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return PagesHelpComponent;
})();


/***/ }),

/***/ "v4vR":
/*!************************************************!*\
  !*** ./src/app/views/pages/pages.component.ts ***!
  \************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let PagesComponent = /*@__PURE__*/ (() => {
    class PagesComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["cvc-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return PagesComponent;
})();


/***/ })

}]);