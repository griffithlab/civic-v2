(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "JL65":
/*!********************************************************************************!*\
  !*** ./src/app/forms/shared/components/form-buttons/form-buttons.component.ts ***!
  \********************************************************************************/
/*! exports provided: CvcFormButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFormButtonsComponent", function() { return CvcFormButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
let CvcFormButtonsComponent = /*@__PURE__*/ (() => {
    class CvcFormButtonsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    CvcFormButtonsComponent.ɵfac = function CvcFormButtonsComponent_Factory(t) { return new (t || CvcFormButtonsComponent)(); };
    CvcFormButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcFormButtonsComponent, selectors: [["cvc-form-buttons"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "form-buttons"]], template: function CvcFormButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.form-buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}"] });
    return CvcFormButtonsComponent;
})();


/***/ }),

/***/ "XyyK":
/*!**********************************************************************************************!*\
  !*** ./src/app/forms/shared/components/org-selector-btn-group/org-selector-btn.directive.ts ***!
  \**********************************************************************************************/
/*! exports provided: CvcOrgSelectorBtnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrgSelectorBtnDirective", function() { return CvcOrgSelectorBtnDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let CvcOrgSelectorBtnDirective = /*@__PURE__*/ (() => {
    class CvcOrgSelectorBtnDirective {
        constructor(el) {
            this.el = el;
            this.observer = new MutationObserver(([record]) => {
                return this.disabled = record.target.disabled;
            });
            this.observer.observe(this.el.nativeElement, {
                attributeFilter: ['disabled'],
                childList: false,
                subtree: false
            });
        }
        ngOnDestroy() {
            this.observer.disconnect();
        }
    }
    CvcOrgSelectorBtnDirective.ɵfac = function CvcOrgSelectorBtnDirective_Factory(t) { return new (t || CvcOrgSelectorBtnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    CvcOrgSelectorBtnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CvcOrgSelectorBtnDirective, selectors: [["button", "cvcOrgSelectorBtn", ""]] });
    return CvcOrgSelectorBtnDirective;
})();


/***/ }),

/***/ "qPVO":
/*!****************************************************************************************************!*\
  !*** ./src/app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CvcOrgSelectorBtnGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrgSelectorBtnGroupComponent", function() { return CvcOrgSelectorBtnGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./org-selector-btn.directive */ "XyyK");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");














function CvcOrgSelectorBtnGroupComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-button-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.disabled)("nzDropdownMenu", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r5.mostRecentOrg == null ? null : ctx_r5.mostRecentOrg.profileImagePath)("nzSize", 10)("nzShape", "square");
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_li_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcOrgSelectorBtnGroupComponent_ng_container_2_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const org_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectOrg(org_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const org_r10 = ctx.$implicit;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", (ctx_r7.mostRecentOrg == null ? null : ctx_r7.mostRecentOrg.id) === org_r10.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", org_r10 == null ? null : org_r10.profileImagePath)("nzSize", 10)("nzShape", "square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", org_r10.name, " ");
    }
}
function CvcOrgSelectorBtnGroupComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcOrgSelectorBtnGroupComponent_ng_container_2_ng_container_2_Template, 9, 8, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcOrgSelectorBtnGroupComponent_ng_container_2_li_6_Template, 3, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const organizations_r3 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organizations_r3.length <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organizations_r3.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", organizations_r3);
    }
}
const _c0 = ["*"];
let CvcOrgSelectorBtnGroupComponent = /*@__PURE__*/ (() => {
    class CvcOrgSelectorBtnGroupComponent {
        constructor(viewerService) {
            this.viewerService = viewerService;
            this.selectedOrgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        get disabled() {
            return this.button.disabled;
        }
        selectOrg(org) {
            this.mostRecentOrg = org;
            this.selectedOrgChange.emit(org);
        }
        ngOnInit() {
            this.organizations$ = this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((v) => v.organizations));
            this.mostRecentOrg$ = this.viewerService.viewer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('mostRecentOrg'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((org) => {
                this.mostRecentOrg = org;
                if (org) {
                    this.selectedOrgChange.emit(org);
                }
            }));
            this.mostRecentOrg$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    CvcOrgSelectorBtnGroupComponent.ɵfac = function CvcOrgSelectorBtnGroupComponent_Factory(t) { return new (t || CvcOrgSelectorBtnGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"])); };
    CvcOrgSelectorBtnGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcOrgSelectorBtnGroupComponent, selectors: [["cvc-org-selector-btn-group"]], contentQueries: function CvcOrgSelectorBtnGroupComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _org_selector_btn_directive__WEBPACK_IMPORTED_MODULE_3__["CvcOrgSelectorBtnDirective"], 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
            }
        }, inputs: { selectedOrg: "selectedOrg" }, outputs: { selectedOrgChange: "selectedOrgChange" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["submitButton", ""], [4, "ngIf"], ["orgMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [3, "nzSize"], ["type", "button", "nz-button", "", "nzType", "primary", "nz-dropdown", "", 1, "org-dropdown-btn", 3, "disabled", "nzDropdownMenu"], ["nzDirection", "horizontal", 3, "nzSize"], [3, "nzSrc", "nzSize", "nzShape"], ["nz-icon", "", "nzType", "down"], ["nz-menu-item", "", 3, "nzSelected", "click"], [2, "background-color", "#f0f5ff", 3, "nzSrc", "nzSize", "nzShape"]], template: function CvcOrgSelectorBtnGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcOrgSelectorBtnGroupComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcOrgSelectorBtnGroupComponent_ng_container_2_Template, 7, 3, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.organizations$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_11__["NzSpaceComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__["NzAvatarComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}"] });
    return CvcOrgSelectorBtnGroupComponent;
})();


/***/ })

}]);