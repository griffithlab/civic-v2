(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "5vDB":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \***********************************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");






/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */



function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzText);
    }
}
function NzDividerComponent_span_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
    }
}
let NzDividerComponent = /*@__PURE__*/ (() => {
    class NzDividerComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzType = 'horizontal';
            this.nzOrientation = 'center';
            this.nzDashed = false;
            this.nzPlain = false;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-divider');
        }
    }
    NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
    NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 16, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
            }
        }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzPlain: "nzPlain", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDividerComponent.prototype, "nzDashed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDividerComponent.prototype, "nzPlain", void 0);
    return NzDividerComponent;
})();
let NzDividerModule = /*@__PURE__*/ (() => {
    class NzDividerModule {
    }
    NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
    NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]] });
    return NzDividerModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]; }, exports: function () { return [NzDividerComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-divider.js.map


/***/ }),

/***/ "SKKP":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js ***!
  \*********************************************************************************/
/*! exports provided: NzBadgeComponent, NzBadgeModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBadgeComponent", function() { return NzBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBadgeModule", function() { return NzBadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NzBadgeSupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NzRibbonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzBadgeComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.nzText);
    }
}
function NzBadgeComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzBadgeComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", !ctx_r0.presetColor && ctx_r0.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.nzStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
    }
}
function NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-badge-sup", 5);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzOffset", ctx_r3.nzOffset)("nzTitle", ctx_r3.nzTitle)("nzStyle", ctx_r3.nzStyle)("nzDot", ctx_r3.nzDot)("nzOverflowCount", ctx_r3.nzOverflowCount)("disableAnimation", !!(ctx_r3.nzStandalone || ctx_r3.nzStatus || ctx_r3.nzColor))("nzCount", ctx_r3.nzCount);
    }
}
function NzBadgeComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template, 1, 7, "nz-badge-sup", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showSup);
    }
}
const _c0 = ["*"];
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const p_r8 = ctx.$implicit;
        const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("current", p_r8 === ctx_r7.countArray[i_r5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", p_r8, " ");
    }
}
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template, 2, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.countSingleArray);
    }
}
function NzBadgeSupComponent_ng_container_0_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.index;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", "translateY(" + -ctx_r3.countArray[i_r5] * 100 + "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.nzDot && ctx_r3.countArray[i_r5] !== undefined);
    }
}
function NzBadgeSupComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeSupComponent_ng_container_0_span_1_Template, 2, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.maxNumberArray);
    }
}
function NzBadgeSupComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.nzOverflowCount, "+");
    }
}
function NzRibbonComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nzText);
    }
}
const badgePresetColors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
];
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'badge';
let NzBadgeComponent = /*@__PURE__*/ (() => {
    class NzBadgeComponent {
        constructor(nzConfigService, renderer, cdr, elementRef, directionality) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.showSup = false;
            this.presetColor = null;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this.nzShowZero = false;
            this.nzShowDot = true;
            this.nzStandalone = false;
            this.nzDot = false;
            this.nzOverflowCount = 99;
            this.nzColor = undefined;
            this.nzStyle = null;
            this.nzText = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-badge');
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.prepareBadgeForRtl();
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.prepareBadgeForRtl();
        }
        ngOnChanges(changes) {
            const { nzColor, nzShowDot, nzDot, nzCount, nzShowZero } = changes;
            if (nzColor) {
                this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
            if (nzShowDot || nzDot || nzCount || nzShowZero) {
                this.showSup = (this.nzShowDot && this.nzDot) || this.nzCount > 0 || (this.nzCount <= 0 && this.nzShowZero);
            }
        }
        prepareBadgeForRtl() {
            if (this.isRtlLayout) {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-rtl');
            }
        }
        get isRtlLayout() {
            return this.dir === 'rtl';
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzBadgeComponent, selectors: [["nz-badge"]], hostVars: 4, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
            }
        }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzStandalone: "nzStandalone", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzColor: "nzColor", nzStyle: "nzStyle", nzText: "nzText", nzTitle: "nzTitle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", 4, "ngIf"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount"]], template: function NzBadgeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzBadgeComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzStatus || ctx.nzColor);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzCount);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], NzBadgeSupComponent]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__["zoomBadgeMotion"]] }, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzBadgeComponent.prototype, "nzStandalone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
})();
let NzBadgeSupComponent = /*@__PURE__*/ (() => {
    class NzBadgeSupComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzStyle = null;
            this.nzDot = false;
            this.nzOverflowCount = 99;
            this.disableAnimation = false;
            this.maxNumberArray = [];
            this.countArray = [];
            this.count = 0;
            this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-scroll-number');
        }
        generateMaxNumberArray() {
            this.maxNumberArray = this.nzOverflowCount.toString().split('');
        }
        ngOnInit() {
            this.generateMaxNumberArray();
        }
        ngOnChanges(changes) {
            const { nzOverflowCount, nzCount } = changes;
            if (nzCount && typeof nzCount.currentValue === 'number') {
                this.count = Math.max(0, nzCount.currentValue);
                this.countArray = this.count
                    .toString()
                    .split('')
                    .map(item => +item);
            }
            if (nzOverflowCount) {
                this.generateMaxNumberArray();
            }
        }
    }
    NzBadgeSupComponent.ɵfac = function NzBadgeSupComponent_Factory(t) { return new (t || NzBadgeSupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    NzBadgeSupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzBadgeSupComponent, selectors: [["nz-badge-sup"]], hostVars: 15, hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.nzStyle);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-badge-count", !ctx.nzDot)("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
            }
        }, inputs: { nzStyle: "nzStyle", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", disableAnimation: "disableAnimation", nzOffset: "nzOffset", nzTitle: "nzTitle", nzCount: "nzCount" }, exportAs: ["nzBadgeSup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["overflowTemplate", ""], ["class", "ant-scroll-number-only", 3, "transform", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only"], [4, "ngIf"], ["class", "ant-scroll-number-only-unit", 3, "current", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only-unit"]], template: function NzBadgeSupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzBadgeSupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeSupComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.count <= ctx.nzOverflowCount)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__["zoomBadgeMotion"]] }, changeDetection: 0 });
    return NzBadgeSupComponent;
})();
let NzRibbonComponent = /*@__PURE__*/ (() => {
    class NzRibbonComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzPlacement = 'end';
            this.nzText = null;
            this.presetColor = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-ribbon-wrapper');
        }
        ngOnChanges(changes) {
            const { nzColor } = changes;
            if (nzColor) {
                this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
        }
    }
    NzRibbonComponent.ɵfac = function NzRibbonComponent_Factory(t) { return new (t || NzRibbonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    NzRibbonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzRibbonComponent, selectors: [["nz-ribbon"]], inputs: { nzPlacement: "nzPlacement", nzText: "nzText", nzColor: "nzColor" }, exportAs: ["nzRibbon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 4, vars: 11, consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"]], template: function NzRibbonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzRibbonComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", !ctx.presetColor && ctx.nzColor);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzText);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", !ctx.presetColor && ctx.nzColor);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzRibbonComponent;
})();
let NzBadgeModule = /*@__PURE__*/ (() => {
    class NzBadgeModule {
    }
    NzBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzBadgeModule });
    NzBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"]]] });
    return NzBadgeModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzBadgeModule, { declarations: function () { return [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"]]; }, exports: function () { return [NzBadgeComponent, NzRibbonComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-badge.js.map


/***/ }),

/***/ "UPlJ":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/user-tag/user-tag.component.ts ***!
  \*****************************************************************/
/*! exports provided: CvcUserTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcUserTagComponent", function() { return CvcUserTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-popover/user-popover.component */ "kzkU");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function CvcUserTagComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function CvcUserTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcUserTagComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcUserTagComponent_ng_template_1_ng_template_1_Template(rf, ctx) { }
function CvcUserTagComponent_ng_template_1_ng_template_2_cvc_user_popover_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-user-popover", 10);
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r13.user.id);
    }
}
function CvcUserTagComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcUserTagComponent_ng_template_1_ng_template_2_cvc_user_popover_0_Template, 1, 1, "cvc-user-popover", 9);
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.enablePopover);
    }
}
function CvcUserTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcUserTagComponent_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcUserTagComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverMouseEnterDelay", 0.5)("nzPopoverContent", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcUserTagComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CvcUserTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcUserTagComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcUserTagComponent_ng_template_5_ng_template_0_Template(rf, ctx) { }
function CvcUserTagComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcUserTagComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcUserTagComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r8.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.user.displayName, "\n");
    }
}
let CvcUserTagComponent = /*@__PURE__*/ (() => {
    class CvcUserTagComponent {
        constructor() {
            this.linked = true;
            this.enablePopover = true;
        }
        ngOnInit() {
            if (this.user === undefined) {
                throw new Error('cvc-user-tag component requires valid user input.');
            }
            switch (this.user.role) {
                case 'admin':
                    this.icon = 'civic-admin';
                    break;
                case 'editor':
                    this.icon = 'civic-editor';
                    break;
                case 'curator':
                    this.icon = 'civic-curator';
                    break;
                default:
                    this.icon = 'civic-curator';
            }
        }
    }
    CvcUserTagComponent.ɵfac = function CvcUserTagComponent_Factory(t) { return new (t || CvcUserTagComponent)(); };
    CvcUserTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcUserTagComponent, selectors: [["cvc-user-tag"]], inputs: { user: "user", linked: "linked", enablePopover: "enablePopover" }, decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["tag", ""], ["noPopover", ""], ["unlinked", ""], ["tagContent", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-popover", "", "nzPopoverTrigger", "hover", "nzPopoverPlacement", "topCenter", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent"], ["userPopover", ""], [3, "userId", 4, "ngIf"], [3, "userId"], ["nz-icon", "", "nzTheme", "twotone", "nzTwotoneColor", "#A0D8F5", 3, "nzType"]], template: function CvcUserTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcUserTagComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcUserTagComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcUserTagComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcUserTagComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcUserTagComponent_ng_template_7_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linked)("ngIfElse", _r5);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__["CvcUserPopoverComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], styles: [""] });
    return CvcUserTagComponent;
})();


/***/ }),

/***/ "ZVAZ":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-comment.js ***!
  \***********************************************************************************/
/*! exports provided: NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentComponent, NzCommentContentDirective, NzCommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentActionComponent", function() { return NzCommentActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentActionHostDirective", function() { return NzCommentActionHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentAvatarDirective", function() { return NzCommentAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentComponent", function() { return NzCommentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentContentDirective", function() { return NzCommentContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentModule", function() { return NzCommentModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */




function NzCommentActionComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    }
}
const _c0 = ["*"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.nzAuthor);
    }
}
function NzCommentComponent_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzAuthor);
    }
}
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.nzDatetime);
    }
}
function NzCommentComponent_span_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDatetime);
    }
}
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const action_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCommentActionHost", action_r6.content);
    }
}
function NzCommentComponent_ul_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.actions);
    }
}
const _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
const _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
let NzCommentAvatarDirective = /*@__PURE__*/ (() => {
    class NzCommentAvatarDirective {
    }
    NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
    NzCommentAvatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
    return NzCommentAvatarDirective;
})();
let NzCommentContentDirective = /*@__PURE__*/ (() => {
    class NzCommentContentDirective {
    }
    NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
    NzCommentContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostAttrs: [1, "ant-comment-content-detail"], exportAs: ["nzCommentContent"] });
    return NzCommentContentDirective;
})();
let NzCommentActionHostDirective = /*@__PURE__*/ (() => {
    class NzCommentActionHostDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"] {
        constructor(componentFactoryResolver, viewContainerRef) {
            super(componentFactoryResolver, viewContainerRef);
        }
        ngOnInit() {
            super.ngOnInit();
        }
        ngOnDestroy() {
            super.ngOnDestroy();
        }
        ngAfterViewInit() {
            this.attach(this.nzCommentActionHost);
        }
    }
    NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
    NzCommentActionHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
    return NzCommentActionHostDirective;
})();
let NzCommentActionComponent = /*@__PURE__*/ (() => {
    class NzCommentActionComponent {
        constructor(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
            this.contentPortal = null;
        }
        get content() {
            return this.contentPortal;
        }
        ngOnInit() {
            this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.implicitContent, this.viewContainerRef);
        }
    }
    NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
    NzCommentActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.implicitContent = _t.first);
            }
        }, exportAs: ["nzCommentAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzCommentActionComponent;
})();
let NzCommentComponent = /*@__PURE__*/ (() => {
    class NzCommentComponent {
        constructor(cdr, directionality) {
            this.cdr = cdr;
            this.directionality = directionality;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) { return new (t || NzCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
    NzCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCommentComponent, selectors: [["nz-comment"]], contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzCommentActionComponent, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.actions = _t);
            }
        }, hostVars: 4, hostBindings: function NzCommentComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzAuthor: "nzAuthor", nzDatetime: "nzDatetime" }, exportAs: ["nzComment"], ngContentSelectors: _c2, decls: 11, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]], template: function NzCommentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzAuthor);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzDatetime);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.actions == null ? null : ctx.actions.length);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NzCommentActionHostDirective], encapsulation: 2, changeDetection: 0 });
    return NzCommentComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
let NzCommentModule = /*@__PURE__*/ (() => {
    class NzCommentModule {
    }
    NzCommentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzCommentModule });
    NzCommentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]] });
    return NzCommentModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCommentModule, { declarations: function () { return [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]; }, exports: function () { return [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-comment.js.map


/***/ }),

/***/ "kzkU":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-popover/user-popover.component.ts ***!
  \*************************************************************************/
/*! exports provided: CvcUserPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcUserPopoverComponent", function() { return CvcUserPopoverComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-avatar/user-avatar.component */ "j8OM");
/* harmony import */ var _shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tag-list/tag-list.component */ "Eb1f");
/* harmony import */ var _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organizations/organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");












const _c0 = ["additionalMetadata"];
function CvcUserPopoverComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-user-avatar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5.displayName);
    }
}
function CvcUserPopoverComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    }
    if (rf & 2) {
        const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, user_r5.role), " ");
    }
}
function CvcUserPopoverComponent_ng_container_1_span_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const bio_r15 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bio_r15);
    }
}
function CvcUserPopoverComponent_ng_container_1_cvc_tag_list_15_cvc_organization_tag_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-organization-tag", 18);
    }
    if (rf & 2) {
        const o_r17 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("org", o_r17);
    }
}
function CvcUserPopoverComponent_ng_container_1_cvc_tag_list_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cvc-tag-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvcUserPopoverComponent_ng_container_1_cvc_tag_list_15_cvc_organization_tag_1_Template, 1, 2, "cvc-organization-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", user_r5.organizations);
    }
}
function CvcUserPopoverComponent_ng_container_1_nz_divider_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-divider");
    }
}
const _c1 = function (a0) { return { $implicit: a0 }; };
function CvcUserPopoverComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CvcUserPopoverComponent_ng_container_1_ng_template_2_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcUserPopoverComponent_ng_container_1_ng_template_4_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CvcUserPopoverComponent_ng_container_1_span_10_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-descriptions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-descriptions-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CvcUserPopoverComponent_ng_container_1_cvc_tag_list_15_Template, 2, 1, "cvc-tag-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CvcUserPopoverComponent_ng_container_1_nz_divider_17_Template, 1, 0, "nz-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const user_r5 = ctx.ngIf;
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r6)("nzExtra", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r5.bio)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r5.organizations.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.metadataTemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.metadataTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, user_r5));
    }
}
function CvcUserPopoverComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " User has not provided a biography.\n");
    }
}
function CvcUserPopoverComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
let CvcUserPopoverComponent = /*@__PURE__*/ (() => {
    class CvcUserPopoverComponent {
        constructor(gql) {
            this.gql = gql;
        }
        ngOnInit() {
            if (this.userId == undefined) {
                throw new Error("Must pass an id into user hovercard");
            }
            this.user$ = this.gql.watch({ userId: this.userId })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.user));
        }
    }
    CvcUserPopoverComponent.ɵfac = function CvcUserPopoverComponent_Factory(t) { return new (t || CvcUserPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["UserPopoverGQL"])); };
    CvcUserPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcUserPopoverComponent, selectors: [["cvc-user-popover"]], contentQueries: function CvcUserPopoverComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.metadataTemplateRef = _t.first);
            }
        }, inputs: { userId: "userId" }, decls: 7, vars: 3, consts: [["id", "popover-content"], [4, "ngIf"], ["noBio", ""], ["noOrganizations", ""], ["nzBordered", "false", "id", "card-content", 3, "nzTitle", "nzExtra"], ["cardTitle", ""], ["cardExtra", ""], ["nzSpan", "24"], [1, "popover-text"], ["nz-typography", ""], [4, "ngIf", "ngIfElse"], ["nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Organizations"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "default", 3, "user"], ["nz-typography", "", "nzStyle", "default", 1, "display-name"], ["nz-icon", "", "nzType", "civic-admin"], [3, "enablePopover", "org", 4, "ngFor", "ngForOf"], [3, "enablePopover", "org"], ["nz-typography", "", "nzStyle", "secondary"]], template: function CvcUserPopoverComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvcUserPopoverComponent_ng_container_1_Template, 19, 12, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CvcUserPopoverComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CvcUserPopoverComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.user$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__["CvcUserAvatarComponent"], _shared_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_8__["CvcTagListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcOrganizationTagComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: -8px -12px;\n}\n[_nghost-%COMP%]     .ant-card-body {\n  padding: 0;\n  margin-top: 1px;\n}\n[_nghost-%COMP%]     .ant-descriptions-view {\n  border: none;\n}\n[_nghost-%COMP%]     #entity-child-counts {\n  border-top: 1px solid #f0f0f0;\n  padding: 8px;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space {\n  width: 100%;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag {\n  margin-right: 0;\n}\n.popover-text[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n#popover-content[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 500px;\n  min-height: 125px;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.display-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-weight: normal;\n}"] });
    return CvcUserPopoverComponent;
})();


/***/ }),

/***/ "oyxB":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js ***!
  \********************************************************************************/
/*! exports provided: NZ_TAB_SET, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLinkDirective, NzTabLinkTemplateDirective, NzTabSetComponent, NzTabsModule, ɵNzTabAddButtonComponent, ɵNzTabBodyComponent, ɵNzTabCloseButtonComponent, ɵNzTabNavBarComponent, ɵNzTabNavItemDirective, ɵNzTabNavOperationComponent, ɵNzTabScrollListDirective, ɵNzTabsInkBarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_TAB_SET", function() { return NZ_TAB_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabChangeEvent", function() { return NzTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabComponent", function() { return NzTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabDirective", function() { return NzTabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLinkDirective", function() { return NzTabLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLinkTemplateDirective", function() { return NzTabLinkTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabSetComponent", function() { return NzTabSetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabsModule", function() { return NzTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabAddButtonComponent", function() { return NzTabAddButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabBodyComponent", function() { return NzTabBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabCloseButtonComponent", function() { return NzTabCloseButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavBarComponent", function() { return NzTabNavBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavItemDirective", function() { return NzTabNavItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavOperationComponent", function() { return NzTabNavOperationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabScrollListDirective", function() { return NzTabScrollListDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabsInkBarDirective", function() { return NzTabsInkBarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "ejfv");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "/Kk4");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */












function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const icon_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
    }
}
const _c0 = ["contentTemplate"];
function NzTabComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
}
function NzTabComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
    }
}
const _c1 = [[["", "nz-tab-link", ""]], "*"];
const _c2 = ["[nz-tab-link]", "*"];
function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.tab.label);
    }
}
const _c3 = function () { return { visible: false }; };
function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSelect(item_r5); })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onContextmenu(item_r5, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    }
}
function NzTabNavOperationComponent_ul_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
    }
}
function NzTabNavOperationComponent_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addClicked.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r3.addIcon);
    }
}
const _c4 = function () { return { minWidth: "46px" }; };
const _c5 = ["navWarp"];
const _c6 = ["navList"];
function NzTabNavBarComponent_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addClicked.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r2.addIcon);
    }
}
function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzTabNavBarComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraTemplate);
    }
}
const _c7 = ["*"];
const _c8 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
    }
}
function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const icon_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
    }
}
function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.label);
    }
}
function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onClose(i_r4, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeIcon", tab_r3.nzCloseIcon);
    }
}
const _c9 = function () { return { visible: true }; };
function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.clickNavItem(tab_r3, i_r4); })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tab_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.contextmenuNavItem(tab_r3, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tab_r3 = ctx.$implicit;
        const i_r4 = ctx.index;
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.nzDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
    }
}
function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabs-nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.nzTabListScroll.emit($event); })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setSelectedIndex($event); })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
    }
}
function NzTabSetComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
    }
    if (rf & 2) {
        const tab_r19 = ctx.$implicit;
        const i_r20 = ctx.index;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r1.nzSelectedIndex == i_r20 && !ctx_r1.nzHideAll)("content", tab_r19.content)("forceRender", tab_r19.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
    }
}
let NzTabAddButtonComponent = /*@__PURE__*/ (() => {
    class NzTabAddButtonComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.addIcon = 'plus';
            this.element = this.elementRef.nativeElement;
        }
        getElementWidth() {
            var _a;
            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
        }
        getElementHeight() {
            var _a;
            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        }
    }
    NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) { return new (t || NzTabAddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzTabAddButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabAddButtonComponent, selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabAddButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.addIcon);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]], encapsulation: 2 });
    return NzTabAddButtonComponent;
})();
let NzTabsInkBarDirective = /*@__PURE__*/ (() => {
    class NzTabsInkBarDirective {
        constructor(elementRef, ngZone, animationMode) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.animationMode = animationMode;
            this.position = 'horizontal';
            this.animated = true;
        }
        get _animated() {
            return this.animationMode !== 'NoopAnimations' && this.animated;
        }
        alignToElement(element) {
            this.ngZone.runOutsideAngular(() => {
                Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(() => this.setStyles(element));
            });
        }
        setStyles(element) {
            const inkBar = this.elementRef.nativeElement;
            if (this.position === 'horizontal') {
                inkBar.style.top = '';
                inkBar.style.height = '';
                inkBar.style.left = this.getLeftPosition(element);
                inkBar.style.width = this.getElementWidth(element);
            }
            else {
                inkBar.style.left = '';
                inkBar.style.width = '';
                inkBar.style.top = this.getTopPosition(element);
                inkBar.style.height = this.getElementHeight(element);
            }
        }
        getLeftPosition(element) {
            return element ? (element.offsetLeft || 0) + 'px' : '0';
        }
        getElementWidth(element) {
            return element ? (element.offsetWidth || 0) + 'px' : '0';
        }
        getTopPosition(element) {
            return element ? (element.offsetTop || 0) + 'px' : '0';
        }
        getElementHeight(element) {
            return element ? (element.offsetHeight || 0) + 'px' : '0';
        }
    }
    NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8)); };
    NzTabsInkBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabsInkBarDirective, selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]], hostAttrs: [1, "ant-tabs-ink-bar"], hostVars: 2, hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx._animated);
            }
        }, inputs: { position: "position", animated: "animated" } });
    return NzTabsInkBarDirective;
})();
let NzTabLinkTemplateDirective = /*@__PURE__*/ (() => {
    class NzTabLinkTemplateDirective {
        constructor(templateRef) {
            this.templateRef = templateRef;
        }
    }
    NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) { return new (t || NzTabLinkTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1)); };
    NzTabLinkTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLinkTemplateDirective, selectors: [["ng-template", "nzTabLink", ""]], exportAs: ["nzTabLinkTemplate"] });
    return NzTabLinkTemplateDirective;
})();
let NzTabLinkDirective = /*@__PURE__*/ (() => {
    class NzTabLinkDirective {
        constructor(routerLink, routerLinkWithHref) {
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
        }
    }
    NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], 10)); };
    NzTabLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
    return NzTabLinkDirective;
})();
let NzTabDirective = /*@__PURE__*/ (() => {
    class NzTabDirective {
    }
    NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
    NzTabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });
    return NzTabDirective;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
const NZ_TAB_SET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NZ_TAB_SET');
let NzTabComponent = /*@__PURE__*/ (() => {
    class NzTabComponent {
        constructor(closestTabSet) {
            this.closestTabSet = closestTabSet;
            this.nzTitle = '';
            this.nzClosable = false;
            this.nzCloseIcon = 'close';
            this.nzDisabled = false;
            this.nzForceRender = false;
            this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.template = null;
            this.isActive = false;
            this.position = null;
            this.origin = null;
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }
        get content() {
            return this.template || this.contentTemplate;
        }
        get label() {
            var _a;
            return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
        }
        ngOnChanges(changes) {
            const { nzTitle, nzDisabled, nzForceRender } = changes;
            if (nzTitle || nzDisabled || nzForceRender) {
                this.stateChanges.next();
            }
        }
        ngOnDestroy() {
            this.stateChanges.complete();
        }
    }
    NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NZ_TAB_SET)); };
    NzTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkTemplateDirective, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabLinkTemplateDirective = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
            }
        }, viewQuery: function NzTabComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
            }
        }, inputs: { nzTitle: "nzTitle", nzClosable: "nzClosable", nzCloseIcon: "nzCloseIcon", nzDisabled: "nzDisabled", nzForceRender: "nzForceRender" }, outputs: { nzSelect: "nzSelect", nzDeselect: "nzDeselect", nzClick: "nzClick", nzContextmenu: "nzContextmenu" }, exportAs: ["nzTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function NzTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabComponent.prototype, "nzClosable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabComponent.prototype, "nzForceRender", void 0);
    return NzTabComponent;
})();
let NzTabNavItemDirective = /*@__PURE__*/ (() => {
    class NzTabNavItemDirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.disabled = false;
            this.active = false;
            this.el = elementRef.nativeElement;
            this.parentElement = this.el.parentElement;
        }
        focus() {
            this.el.focus();
        }
        get width() {
            return this.parentElement.offsetWidth;
        }
        get height() {
            return this.parentElement.offsetHeight;
        }
        get left() {
            return this.parentElement.offsetLeft;
        }
        get top() {
            return this.parentElement.offsetTop;
        }
    }
    NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) { return new (t || NzTabNavItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzTabNavItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabNavItemDirective, selectors: [["", "nzTabNavItem", ""]], inputs: { disabled: "disabled", active: "active", tab: "tab" } });
    return NzTabNavItemDirective;
})();
let NzTabNavOperationComponent = /*@__PURE__*/ (() => {
    class NzTabNavOperationComponent {
        constructor(cdr, elementRef) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.items = [];
            this.addable = false;
            this.addIcon = 'plus';
            this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.closeAnimationWaitTimeoutId = -1;
            this.menuOpened = false;
            this.element = this.elementRef.nativeElement;
        }
        onSelect(item) {
            if (!item.disabled) {
                // ignore nzCanDeactivate
                item.tab.nzClick.emit();
                this.selected.emit(item);
            }
        }
        onContextmenu(item, e) {
            if (!item.disabled) {
                item.tab.nzContextmenu.emit(e);
            }
        }
        showItems() {
            clearTimeout(this.closeAnimationWaitTimeoutId);
            this.menuOpened = true;
            this.cdr.markForCheck();
        }
        menuVisChange(visible) {
            if (!visible) {
                this.closeAnimationWaitTimeoutId = setTimeout(() => {
                    this.menuOpened = false;
                    this.cdr.markForCheck();
                }, 150);
            }
        }
        getElementWidth() {
            var _a;
            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
        }
        getElementHeight() {
            var _a;
            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        }
        ngOnDestroy() {
            clearTimeout(this.closeAnimationWaitTimeoutId);
        }
    }
    NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) { return new (t || NzTabNavOperationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzTabNavOperationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabNavOperationComponent, selectors: [["nz-tab-nav-operation"]], hostAttrs: [1, "ant-tabs-nav-operations"], hostVars: 2, hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
            }
        }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["nzTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "addIcon", "click"]], template: function NzTabNavOperationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1)("nzOverlayStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4))("nzMatchWidthElement", null);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpened);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addable);
            }
        }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuItemDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
    return NzTabNavOperationComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_8__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"];
const CSS_TRANSFORM_TIME = 150;
let NzTabNavBarComponent = /*@__PURE__*/ (() => {
    class NzTabNavBarComponent {
        constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.viewportRuler = viewportRuler;
            this.nzResizeObserver = nzResizeObserver;
            this.dir = dir;
            this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.position = 'horizontal';
            this.addable = false;
            this.hideBar = false;
            this.addIcon = 'plus';
            this.inkBarAnimated = true;
            this.translate = null;
            this.transformX = 0;
            this.transformY = 0;
            this.pingLeft = false;
            this.pingRight = false;
            this.pingTop = false;
            this.pingBottom = false;
            this.hiddenItems = [];
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
            this._selectedIndex = 0;
            this.wrapperWidth = 0;
            this.wrapperHeight = 0;
            this.scrollListWidth = 0;
            this.scrollListHeight = 0;
            this.operationWidth = 0;
            this.operationHeight = 0;
            this.addButtonWidth = 0;
            this.addButtonHeight = 0;
            this.selectedIndexChanged = false;
            this.lockAnimationTimeoutId = -1;
            this.cssTransformTimeWaitingId = -1;
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
            if (this._selectedIndex !== newValue) {
                this._selectedIndex = value;
                this.selectedIndexChanged = true;
                if (this.keyManager) {
                    this.keyManager.updateActiveItem(value);
                }
            }
        }
        /** Tracks which element has focus; used for keyboard navigation */
        get focusIndex() {
            return this.keyManager ? this.keyManager.activeItemIndex : 0;
        }
        /** When the focus index is set, we must manually send focus to the correct label */
        set focusIndex(value) {
            if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
                return;
            }
            this.keyManager.setActiveItem(value);
        }
        get showAddButton() {
            return this.hiddenItems.length === 0 && this.addable;
        }
        ngOnInit() { }
        ngAfterViewInit() {
            const dirChange = this.dir ? this.dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
            const resize = this.viewportRuler.change(150);
            const realign = () => {
                this.updateScrollListPosition();
                this.alignInkBarToSelectedTab();
            };
            this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusKeyManager"](this.items)
                .withHorizontalOrientation(this.getLayoutDirection())
                .withWrap();
            this.keyManager.updateActiveItem(0);
            Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(realign);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["auditTime"])(16, RESIZE_SCHEDULER))
                .subscribe(() => {
                realign();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(dirChange, resize, this.items.changes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                Promise.resolve().then(realign);
                this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
            });
            this.keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(newFocusIndex => {
                this.indexFocused.emit(newFocusIndex);
                this.setTabFocus(newFocusIndex);
                this.scrollToTab(this.keyManager.activeItem);
            });
        }
        ngAfterContentChecked() {
            if (this.selectedIndexChanged) {
                this.updateScrollListPosition();
                this.alignInkBarToSelectedTab();
                this.selectedIndexChanged = false;
                this.cdr.markForCheck();
            }
        }
        ngOnDestroy() {
            clearTimeout(this.lockAnimationTimeoutId);
            clearTimeout(this.cssTransformTimeWaitingId);
            this.destroy$.next();
            this.destroy$.complete();
        }
        onSelectedFromMenu(tab) {
            const tabIndex = this.items.toArray().findIndex(e => e === tab);
            if (tabIndex !== -1) {
                this.keyManager.updateActiveItem(tabIndex);
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this.scrollToTab(tab);
                }
            }
        }
        onOffsetChange(e) {
            if (this.position === 'horizontal') {
                if (this.lockAnimationTimeoutId === -1) {
                    if (this.transformX >= 0 && e.x > 0) {
                        return;
                    }
                    if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                        return;
                    }
                }
                e.event.preventDefault();
                this.transformX = this.clampTransformX(this.transformX + e.x);
                this.setTransform(this.transformX, 0);
            }
            else {
                if (this.lockAnimationTimeoutId === -1) {
                    if (this.transformY >= 0 && e.y > 0) {
                        return;
                    }
                    if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                        return;
                    }
                }
                e.event.preventDefault();
                this.transformY = this.clampTransformY(this.transformY + e.y);
                this.setTransform(0, this.transformY);
            }
            this.lockAnimation();
            this.setVisibleRange();
            this.setPingStatus();
        }
        handleKeydown(event) {
            const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
            if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event) || !inNavigationList) {
                return;
            }
            switch (event.keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                    this.lockAnimation();
                    this.keyManager.onKeydown(event);
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
                    if (this.focusIndex !== this.selectedIndex) {
                        this.selectFocusedIndex.emit(this.focusIndex);
                    }
                    break;
                default:
                    this.keyManager.onKeydown(event);
            }
        }
        isValidIndex(index) {
            if (!this.items) {
                return true;
            }
            const tab = this.items ? this.items.toArray()[index] : null;
            return !!tab && !tab.disabled;
        }
        scrollToTab(tab) {
            if (!this.items.find(e => e === tab)) {
                return;
            }
            const tabs = this.items.toArray();
            if (this.position === 'horizontal') {
                let newTransform = this.transformX;
                if (this.getLayoutDirection() === 'rtl') {
                    const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                    if (right < this.transformX) {
                        newTransform = right;
                    }
                    else if (right + tab.width > this.transformX + this.wrapperWidth) {
                        newTransform = right + tab.width - this.wrapperWidth;
                    }
                }
                else if (tab.left < -this.transformX) {
                    newTransform = -tab.left;
                }
                else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                    newTransform = -(tab.left + tab.width - this.wrapperWidth);
                }
                this.transformX = newTransform;
                this.transformY = 0;
                this.setTransform(newTransform, 0);
            }
            else {
                let newTransform = this.transformY;
                if (tab.top < -this.transformY) {
                    newTransform = -tab.top;
                }
                else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                    newTransform = -(tab.top + tab.height - this.wrapperHeight);
                }
                this.transformY = newTransform;
                this.transformX = 0;
                this.setTransform(0, newTransform);
            }
            clearTimeout(this.cssTransformTimeWaitingId);
            this.cssTransformTimeWaitingId = setTimeout(() => {
                this.setVisibleRange();
            }, CSS_TRANSFORM_TIME);
        }
        lockAnimation() {
            if (this.lockAnimationTimeoutId === -1) {
                this.ngZone.runOutsideAngular(() => {
                    this.navListRef.nativeElement.style.transition = 'none';
                    this.lockAnimationTimeoutId = setTimeout(() => {
                        this.navListRef.nativeElement.style.transition = '';
                        this.lockAnimationTimeoutId = -1;
                    }, CSS_TRANSFORM_TIME);
                });
            }
        }
        setTransform(x, y) {
            this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
        }
        clampTransformX(transform) {
            const scrollWidth = this.wrapperWidth - this.scrollListWidth;
            if (this.getLayoutDirection() === 'rtl') {
                return Math.max(Math.min(scrollWidth, transform), 0);
            }
            else {
                return Math.min(Math.max(scrollWidth, transform), 0);
            }
        }
        clampTransformY(transform) {
            return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
        }
        updateScrollListPosition() {
            this.resetSizes();
            this.transformX = this.clampTransformX(this.transformX);
            this.transformY = this.clampTransformY(this.transformY);
            this.setVisibleRange();
            this.setPingStatus();
            if (this.keyManager) {
                this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
                if (this.keyManager.activeItem) {
                    this.scrollToTab(this.keyManager.activeItem);
                }
            }
        }
        resetSizes() {
            this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
            this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
            this.operationWidth = this.operationRef.getElementWidth();
            this.operationHeight = this.operationRef.getElementHeight();
            this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
            this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
            this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
            this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
        }
        alignInkBarToSelectedTab() {
            const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
            const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
            if (selectedItemElement) {
                /**
                 * .ant-tabs-nav-list - Target offset parent element
                 *   └──.ant-tabs-tab
                 *        └──.ant-tabs-tab-btn - Currently focused element
                 */
                this.inkBar.alignToElement(selectedItemElement.parentElement);
            }
        }
        setPingStatus() {
            const ping = {
                top: false,
                right: false,
                bottom: false,
                left: false
            };
            const navWarp = this.navWarpRef.nativeElement;
            if (this.position === 'horizontal') {
                if (this.getLayoutDirection() === 'rtl') {
                    ping.right = this.transformX > 0;
                    ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
                }
                else {
                    ping.left = this.transformX < 0;
                    ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                }
            }
            else {
                ping.top = this.transformY < 0;
                ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
            }
            Object.keys(ping).forEach(pos => {
                const className = `ant-tabs-nav-wrap-ping-${pos}`;
                if (ping[pos]) {
                    navWarp.classList.add(className);
                }
                else {
                    navWarp.classList.remove(className);
                }
            });
        }
        setVisibleRange() {
            let unit;
            let position;
            let transformSize;
            let basicSize;
            let tabContentSize;
            let addSize;
            const tabs = this.items.toArray();
            const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
            const getOffset = (index) => {
                let offset;
                const size = tabs[index] || DEFAULT_SIZE;
                if (position === 'right') {
                    offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
                }
                else {
                    offset = size[position];
                }
                return offset;
            };
            if (this.position === 'horizontal') {
                unit = 'width';
                basicSize = this.wrapperWidth;
                tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
                addSize = this.addButtonWidth;
                transformSize = Math.abs(this.transformX);
                if (this.getLayoutDirection() === 'rtl') {
                    position = 'right';
                    this.pingRight = this.transformX > 0;
                    this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
                }
                else {
                    this.pingLeft = this.transformX < 0;
                    this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                    position = 'left';
                }
            }
            else {
                unit = 'height';
                basicSize = this.wrapperHeight;
                tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
                addSize = this.addButtonHeight;
                position = 'top';
                transformSize = -this.transformY;
                this.pingTop = this.transformY < 0;
                this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
            }
            let mergedBasicSize = basicSize;
            if (tabContentSize + addSize > basicSize) {
                mergedBasicSize = basicSize - addSize;
            }
            if (!tabs.length) {
                this.hiddenItems = [];
                this.cdr.markForCheck();
                return;
            }
            const len = tabs.length;
            let endIndex = len;
            for (let i = 0; i < len; i += 1) {
                const offset = getOffset(i);
                const size = tabs[i] || DEFAULT_SIZE;
                if (offset + size[unit] > transformSize + mergedBasicSize) {
                    endIndex = i - 1;
                    break;
                }
            }
            let startIndex = 0;
            for (let i = len - 1; i >= 0; i -= 1) {
                const offset = getOffset(i);
                if (offset < transformSize) {
                    startIndex = i + 1;
                    break;
                }
            }
            const startHiddenTabs = tabs.slice(0, startIndex);
            const endHiddenTabs = tabs.slice(endIndex + 1);
            this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
            this.cdr.markForCheck();
        }
        getLayoutDirection() {
            return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        setTabFocus(_tabIndex) { }
        ngOnChanges(changes) {
            const { position } = changes;
            // The first will be aligning in ngAfterViewInit
            if (position && !position.isFirstChange()) {
                this.alignInkBarToSelectedTab();
                this.lockAnimation();
                this.updateScrollListPosition();
            }
        }
    }
    NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) { return new (t || NzTabNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
    NzTabNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabNavBarComponent, selectors: [["nz-tabs-nav"]], contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabNavItemDirective, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
            }
        }, viewQuery: function NzTabNavBarComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavOperationComponent, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabAddButtonComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabsInkBarDirective, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navWarpRef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListRef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.operationRef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBtnRef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkBar = _t.first);
            }
        }, hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"], hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
            }
        }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", selectedIndex: "selectedIndex", extraTemplate: "extraTemplate" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["nzTabsNav"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c7, decls: 9, vars: 16, consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["nzTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]], template: function NzTabNavBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab-nav-operation", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraTemplate);
            }
        }, directives: function () { return [NzTabScrollListDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], NzTabsInkBarDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
    return NzTabNavBarComponent;
})();
let NzTabBodyComponent = /*@__PURE__*/ (() => {
    class NzTabBodyComponent {
        constructor() {
            this.content = null;
            this.active = false;
            this.tabPaneAnimated = true;
            this.forceRender = false;
        }
    }
    NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
    NzTabBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostAttrs: [1, "ant-tabs-tabpane"], hostVars: 12, hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active);
            }
        }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c8, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
    return NzTabBodyComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
let NzTabScrollListDirective = /*@__PURE__*/ (() => {
    class NzTabScrollListDirective {
        constructor(ngZone, elementRef) {
            this.ngZone = ngZone;
            this.elementRef = elementRef;
            this.lastWheelDirection = null;
            this.lastWheelTimestamp = 0;
            this.lastTimestamp = 0;
            this.lastTimeDiff = 0;
            this.lastMixedWheel = 0;
            this.lastWheelPrevent = false;
            this.touchPosition = null;
            this.lastOffset = null;
            this.motion = -1;
            this.unsubscribe = () => void 0;
            this.offsetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onTouchEnd = (e) => {
                if (!this.touchPosition) {
                    return;
                }
                const lastOffset = this.lastOffset;
                const lastTimeDiff = this.lastTimeDiff;
                this.lastOffset = this.touchPosition = null;
                if (lastOffset) {
                    const distanceX = lastOffset.x / lastTimeDiff;
                    const distanceY = lastOffset.y / lastTimeDiff;
                    const absX = Math.abs(distanceX);
                    const absY = Math.abs(distanceY);
                    // Skip swipe if low distance
                    if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                        return;
                    }
                    let currentX = distanceX;
                    let currentY = distanceY;
                    this.motion = window.setInterval(() => {
                        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                            window.clearInterval(this.motion);
                            return;
                        }
                        currentX *= SPEED_OFF_MULTIPLE;
                        currentY *= SPEED_OFF_MULTIPLE;
                        this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
                    }, REFRESH_INTERVAL);
                }
            };
            this.onTouchMove = (e) => {
                if (!this.touchPosition) {
                    return;
                }
                e.preventDefault();
                const { screenX, screenY } = e.touches[0];
                const offsetX = screenX - this.touchPosition.x;
                const offsetY = screenY - this.touchPosition.y;
                this.onOffset(offsetX, offsetY, e);
                const now = Date.now();
                this.lastTimeDiff = now - this.lastTimestamp;
                this.lastTimestamp = now;
                this.lastOffset = { x: offsetX, y: offsetY };
                this.touchPosition = { x: screenX, y: screenY };
            };
            this.onTouchStart = (e) => {
                const { screenX, screenY } = e.touches[0];
                this.touchPosition = { x: screenX, y: screenY };
                window.clearInterval(this.motion);
            };
            this.onWheel = (e) => {
                const { deltaX, deltaY } = e;
                let mixed;
                const absX = Math.abs(deltaX);
                const absY = Math.abs(deltaY);
                if (absX === absY) {
                    mixed = this.lastWheelDirection === 'x' ? deltaX : deltaY;
                }
                else if (absX > absY) {
                    mixed = deltaX;
                    this.lastWheelDirection = 'x';
                }
                else {
                    mixed = deltaY;
                    this.lastWheelDirection = 'y';
                }
                // Optimize mac touch scroll
                const now = Date.now();
                const absMixed = Math.abs(mixed);
                if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
                    this.lastWheelPrevent = false;
                }
                this.onOffset(-mixed, -mixed, e);
                if (e.defaultPrevented || this.lastWheelPrevent) {
                    this.lastWheelPrevent = true;
                }
                this.lastWheelTimestamp = now;
                this.lastMixedWheel = absMixed;
            };
        }
        ngOnInit() {
            this.unsubscribe = this.ngZone.runOutsideAngular(() => {
                const el = this.elementRef.nativeElement;
                const wheel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'wheel');
                const touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchstart');
                const touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchmove');
                const touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchend');
                const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
                subscription.add(this.subscribeWrap('wheel', wheel$, this.onWheel));
                subscription.add(this.subscribeWrap('touchstart', touchstart$, this.onTouchStart));
                subscription.add(this.subscribeWrap('touchmove', touchmove$, this.onTouchMove));
                subscription.add(this.subscribeWrap('touchend', touchend$, this.onTouchEnd));
                return () => {
                    subscription.unsubscribe();
                };
            });
        }
        subscribeWrap(type, observable, handler) {
            return observable.subscribe(event => {
                this.tabScroll.emit({
                    type,
                    event
                });
                if (!event.defaultPrevented) {
                    handler(event);
                }
            });
        }
        onOffset(x, y, event) {
            this.ngZone.run(() => {
                this.offsetChange.emit({
                    x,
                    y,
                    event
                });
            });
        }
        ngOnDestroy() {
            this.unsubscribe();
        }
    }
    NzTabScrollListDirective.ɵfac = function NzTabScrollListDirective_Factory(t) { return new (t || NzTabScrollListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzTabScrollListDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabScrollListDirective, selectors: [["", "nzTabScrollList", ""]], outputs: { offsetChange: "offsetChange", tabScroll: "tabScroll" } });
    return NzTabScrollListDirective;
})();
let NzTabCloseButtonComponent = /*@__PURE__*/ (() => {
    class NzTabCloseButtonComponent {
        constructor() {
            this.closeIcon = 'close';
        }
    }
    NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) { return new (t || NzTabCloseButtonComponent)(); };
    NzTabCloseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabCloseButtonComponent, selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabCloseButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.closeIcon);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]], encapsulation: 2 });
    return NzTabCloseButtonComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabChangeEvent {
}
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;
let NzTabSetComponent = /*@__PURE__*/ (() => {
    class NzTabSetComponent {
        constructor(nzConfigService, cdr, directionality, router) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.directionality = directionality;
            this.router = router;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzTabPosition = 'top';
            this.nzCanDeactivate = null;
            this.nzAddIcon = 'plus';
            this.nzTabBarStyle = null;
            this.nzType = 'line';
            this.nzSize = 'default';
            this.nzAnimated = true;
            this.nzTabBarGutter = undefined;
            this.nzHideAdd = false;
            this.nzCentered = false;
            this.nzHideAll = false;
            this.nzLinkRouter = false;
            this.nzLinkExact = true;
            this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.nzSelectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzTabListScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // Pick up only direct descendants under ivy rendering engine
            // We filter out only the tabs that belong to this tab set in `tabs`.
            this.allTabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
            // All the direct tabs for this tab set
            this.tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
            this.indexToSelect = 0;
            this.selectedIndex = null;
            this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
            this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
            this.canDeactivateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
            this.tabSetId = nextId++;
        }
        get nzSelectedIndex() {
            return this.selectedIndex;
        }
        set nzSelectedIndex(value) {
            this.indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);
        }
        get position() {
            return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
        }
        get addable() {
            return this.nzType === 'editable-card' && !this.nzHideAdd;
        }
        get closable() {
            return this.nzType === 'editable-card';
        }
        get line() {
            return this.nzType === 'line';
        }
        get inkBarAnimated() {
            return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
        }
        get tabPaneAnimated() {
            return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
        }
        ngOnInit() {
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.tabs.destroy();
            this.tabLabelSubscription.unsubscribe();
            this.tabsSubscription.unsubscribe();
            this.canDeactivateSubscription.unsubscribe();
        }
        ngAfterContentInit() {
            Promise.resolve().then(() => {
                this.setUpRouter();
            });
            this.subscribeToTabLabels();
            this.subscribeToAllTabChanges();
            // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.
            this.tabsSubscription = this.tabs.changes.subscribe(() => {
                const indexToSelect = this.clampTabIndex(this.indexToSelect);
                // Maintain the previously-selected tab if a new tab is added or removed and there is no
                // explicit change that selects a different tab.
                if (indexToSelect === this.selectedIndex) {
                    const tabs = this.tabs.toArray();
                    for (let i = 0; i < tabs.length; i++) {
                        if (tabs[i].isActive) {
                            // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                            // adding a tab within the `nzSelectedIndexChange` event.
                            this.indexToSelect = this.selectedIndex = i;
                            break;
                        }
                    }
                }
                this.subscribeToTabLabels();
                this.cdr.markForCheck();
            });
        }
        ngAfterContentChecked() {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this.selectedIndex !== indexToSelect) {
                const isFirstRun = this.selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(() => {
                    this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.tabs.forEach((tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this.selectedIndex;
                }
            });
            if (this.selectedIndex !== indexToSelect) {
                this.selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
        onClose(index, e) {
            e.preventDefault();
            e.stopPropagation();
            this.nzClose.emit({ index });
        }
        onAdd() {
            this.nzAdd.emit();
        }
        clampTabIndex(index) {
            return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
        }
        createChangeEvent(index) {
            const event = new NzTabChangeEvent();
            event.index = index;
            if (this.tabs && this.tabs.length) {
                event.tab = this.tabs.toArray()[index];
                this.tabs.forEach((tab, i) => {
                    if (i !== index) {
                        tab.nzDeselect.emit();
                    }
                });
                event.tab.nzSelect.emit();
            }
            return event;
        }
        subscribeToTabLabels() {
            if (this.tabLabelSubscription) {
                this.tabLabelSubscription.unsubscribe();
            }
            this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
        }
        subscribeToAllTabChanges() {
            this.allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this.allTabs)).subscribe((tabs) => {
                this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
                this.tabs.notifyOnChanges();
            });
        }
        canDeactivateFun(pre, next) {
            if (typeof this.nzCanDeactivate === 'function') {
                const observable = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["wrapIntoObservable"])(this.nzCanDeactivate(pre, next));
                return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
            }
        }
        clickNavItem(tab, index) {
            if (!tab.nzDisabled) {
                // ignore nzCanDeactivate
                tab.nzClick.emit();
                this.setSelectedIndex(index);
            }
        }
        contextmenuNavItem(tab, e) {
            if (!tab.nzDisabled) {
                // ignore nzCanDeactivate
                tab.nzContextmenu.emit(e);
            }
        }
        setSelectedIndex(index) {
            this.canDeactivateSubscription.unsubscribe();
            this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
                if (can) {
                    this.nzSelectedIndex = index;
                    this.tabNavBarRef.focusIndex = index;
                    this.cdr.markForCheck();
                }
            });
        }
        getTabIndex(tab, index) {
            if (tab.nzDisabled) {
                return null;
            }
            return this.selectedIndex === index ? 0 : -1;
        }
        getTabContentId(i) {
            return `nz-tabs-${this.tabSetId}-tab-${i}`;
        }
        setUpRouter() {
            if (this.nzLinkRouter) {
                if (!this.router) {
                    throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__["PREFIX"]} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
                }
                this.router.events
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0))
                    .subscribe(() => {
                    this.updateRouterActive();
                    this.cdr.markForCheck();
                });
            }
        }
        updateRouterActive() {
            if (this.router.navigated) {
                const index = this.findShouldActiveTabIndex();
                if (index !== this.selectedIndex) {
                    this.setSelectedIndex(index);
                    this.nzSelectedIndexChange.emit(index);
                }
                this.nzHideAll = index === -1;
            }
        }
        findShouldActiveTabIndex() {
            const tabs = this.tabs.toArray();
            const isActive = this.isLinkActive(this.router);
            return tabs.findIndex(tab => {
                const c = tab.linkDirective;
                return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
            });
        }
        isLinkActive(router) {
            return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
        }
        getTabContentMarginValue() {
            return -(this.nzSelectedIndex || 0) * 100;
        }
        getTabContentMarginLeft() {
            if (this.tabPaneAnimated) {
                if (this.dir !== 'rtl') {
                    return this.getTabContentMarginValue() + '%';
                }
            }
            return '';
        }
        getTabContentMarginRight() {
            if (this.tabPaneAnimated) {
                if (this.dir === 'rtl') {
                    return this.getTabContentMarginValue() + '%';
                }
            }
            return '';
        }
    }
    NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], 8)); };
    NzTabSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.allTabs = _t);
            }
        }, viewQuery: function NzTabSetComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavBarComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabNavBarRef = _t.first);
            }
        }, hostAttrs: [1, "ant-tabs"], hostVars: 24, hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
            }
        }, inputs: { nzTabPosition: "nzTabPosition", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd" }, exportAs: ["nzTabset"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: NZ_TAB_SET,
                    useExisting: NzTabSetComponent
                }
            ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["nz-tab-close-button", "", 3, "closeIcon", "click"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function NzTabSetComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_div_3_Template, 1, 4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], NzTabNavBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], NzTabNavItemDirective, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["CdkMonitorFocus"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabCloseButtonComponent, NzTabBodyComponent], encapsulation: 2 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)
    ], NzTabSetComponent.prototype, "nzType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)
    ], NzTabSetComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabSetComponent.prototype, "nzAnimated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Number)
    ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)
    ], NzTabSetComponent.prototype, "nzHideAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)
    ], NzTabSetComponent.prototype, "nzCentered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabSetComponent.prototype, "nzHideAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
    return NzTabSetComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    NzTabSetComponent,
    NzTabComponent,
    NzTabNavBarComponent,
    NzTabNavItemDirective,
    NzTabsInkBarDirective,
    NzTabScrollListDirective,
    NzTabNavOperationComponent,
    NzTabAddButtonComponent,
    NzTabCloseButtonComponent,
    NzTabDirective,
    NzTabBodyComponent,
    NzTabLinkDirective,
    NzTabLinkTemplateDirective
];
let NzTabsModule = /*@__PURE__*/ (() => {
    class NzTabsModule {
    }
    NzTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTabsModule });
    NzTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]
            ]] });
    return NzTabsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTabsModule, { declarations: function () { return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]; }, imports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]];
        }, exports: function () { return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]; } });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-tabs.js.map


/***/ })

}]);