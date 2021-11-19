(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "OtHt":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-skeleton.js ***!
  \************************************************************************************/
/*! exports provided: NzSkeletonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementButtonComponent, NzSkeletonElementDirective, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent, NzSkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonComponent", function() { return NzSkeletonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementAvatarComponent", function() { return NzSkeletonElementAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementButtonComponent", function() { return NzSkeletonElementButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementDirective", function() { return NzSkeletonElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementImageComponent", function() { return NzSkeletonElementImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementInputComponent", function() { return NzSkeletonElementInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonModule", function() { return NzSkeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-skeleton-element", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx_r2.avatar.size || "default")("nzShape", ctx_r2.avatar.shape || "circle");
    }
}
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 7);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.toCSSUnit(ctx_r3.title.width));
    }
}
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li");
    }
    if (rf & 2) {
        const i_r7 = ctx.index;
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5.toCSSUnit(ctx_r5.widthList[i_r7]));
    }
}
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.rowsList);
    }
}
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 2, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.nzAvatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.nzParagraph);
    }
}
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
}
const _c0 = ["*"];
const _c1 = ["nzType", "button"];
const _c2 = ["nzType", "avatar"];
const _c3 = ["nzType", "input"];
const _c4 = ["nzType", "image"];
let NzSkeletonComponent = /*@__PURE__*/ (() => {
    class NzSkeletonComponent {
        constructor(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.nzActive = false;
            this.nzLoading = true;
            this.nzRound = false;
            this.nzTitle = true;
            this.nzAvatar = false;
            this.nzParagraph = true;
            this.rowsList = [];
            this.widthList = [];
            renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
        }
        toCSSUnit(value = '') {
            return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["toCssPixel"])(value);
        }
        getTitleProps() {
            const hasAvatar = !!this.nzAvatar;
            const hasParagraph = !!this.nzParagraph;
            let width = '';
            if (!hasAvatar && hasParagraph) {
                width = '38%';
            }
            else if (hasAvatar && hasParagraph) {
                width = '50%';
            }
            return Object.assign({ width }, this.getProps(this.nzTitle));
        }
        getAvatarProps() {
            const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
            const size = 'large';
            return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
        }
        getParagraphProps() {
            const hasAvatar = !!this.nzAvatar;
            const hasTitle = !!this.nzTitle;
            const basicProps = {};
            // Width
            if (!hasAvatar || !hasTitle) {
                basicProps.width = '61%';
            }
            // Rows
            if (!hasAvatar && hasTitle) {
                basicProps.rows = 3;
            }
            else {
                basicProps.rows = 2;
            }
            return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
        }
        getProps(prop) {
            return prop && typeof prop === 'object' ? prop : {};
        }
        getWidthList() {
            const { width, rows } = this.paragraph;
            let widthList = [];
            if (width && Array.isArray(width)) {
                widthList = width;
            }
            else if (width && !Array.isArray(width)) {
                widthList = [];
                widthList[rows - 1] = width;
            }
            return widthList;
        }
        updateProps() {
            this.title = this.getTitleProps();
            this.avatar = this.getAvatarProps();
            this.paragraph = this.getParagraphProps();
            this.rowsList = [...Array(this.paragraph.rows)];
            this.widthList = this.getWidthList();
            this.cdr.markForCheck();
        }
        ngOnInit() {
            this.updateProps();
        }
        ngOnChanges(changes) {
            if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
                this.updateProps();
            }
        }
    }
    NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostVars: 6, hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive)("ant-skeleton-round", !!ctx.nzRound);
            }
        }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzRound: "nzRound", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], ["nzType", "avatar", 3, "nzSize", "nzShape"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLoading);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzLoading);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzSkeletonElementDirective, NzSkeletonElementAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]]; }, encapsulation: 2, changeDetection: 0 });
    return NzSkeletonComponent;
})();
let NzSkeletonElementDirective = /*@__PURE__*/ (() => {
    class NzSkeletonElementDirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzActive = false;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-skeleton', 'ant-skeleton-element');
        }
    }
    NzSkeletonElementDirective.ɵfac = function NzSkeletonElementDirective_Factory(t) { return new (t || NzSkeletonElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSkeletonElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzSkeletonElementDirective, selectors: [["nz-skeleton-element"]], hostVars: 2, hostBindings: function NzSkeletonElementDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-active", ctx.nzActive);
            }
        }, inputs: { nzActive: "nzActive", nzType: "nzType" } });
    return NzSkeletonElementDirective;
})();
let NzSkeletonElementButtonComponent = /*@__PURE__*/ (() => {
    class NzSkeletonElementButtonComponent {
        constructor() {
            this.nzShape = 'default';
            this.nzSize = 'default';
        }
    }
    NzSkeletonElementButtonComponent.ɵfac = function NzSkeletonElementButtonComponent_Factory(t) { return new (t || NzSkeletonElementButtonComponent)(); };
    NzSkeletonElementButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementButtonComponent, selectors: [["nz-skeleton-element", "nzType", "button"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, attrs: _c1, decls: 1, vars: 8, consts: [[1, "ant-skeleton-button"]], template: function NzSkeletonElementButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-button-round", ctx.nzShape === "round")("ant-skeleton-button-circle", ctx.nzShape === "circle")("ant-skeleton-button-lg", ctx.nzSize === "large")("ant-skeleton-button-sm", ctx.nzSize === "small");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzSkeletonElementButtonComponent;
})();
let NzSkeletonElementAvatarComponent = /*@__PURE__*/ (() => {
    class NzSkeletonElementAvatarComponent {
        constructor() {
            this.nzShape = 'circle';
            this.nzSize = 'default';
            this.styleMap = {};
        }
        ngOnChanges(changes) {
            if (changes.nzSize && typeof this.nzSize === 'number') {
                const sideLength = `${this.nzSize}px`;
                this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
            }
            else {
                this.styleMap = {};
            }
        }
    }
    NzSkeletonElementAvatarComponent.ɵfac = function NzSkeletonElementAvatarComponent_Factory(t) { return new (t || NzSkeletonElementAvatarComponent)(); };
    NzSkeletonElementAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementAvatarComponent, selectors: [["nz-skeleton-element", "nzType", "avatar"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c2, decls: 1, vars: 9, consts: [[1, "ant-skeleton-avatar", 3, "ngStyle"]], template: function NzSkeletonElementAvatarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-avatar-square", ctx.nzShape === "square")("ant-skeleton-avatar-circle", ctx.nzShape === "circle")("ant-skeleton-avatar-lg", ctx.nzSize === "large")("ant-skeleton-avatar-sm", ctx.nzSize === "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleMap);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
    return NzSkeletonElementAvatarComponent;
})();
let NzSkeletonElementInputComponent = /*@__PURE__*/ (() => {
    class NzSkeletonElementInputComponent {
        constructor() {
            this.nzSize = 'default';
        }
    }
    NzSkeletonElementInputComponent.ɵfac = function NzSkeletonElementInputComponent_Factory(t) { return new (t || NzSkeletonElementInputComponent)(); };
    NzSkeletonElementInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementInputComponent, selectors: [["nz-skeleton-element", "nzType", "input"]], inputs: { nzSize: "nzSize" }, attrs: _c3, decls: 1, vars: 4, consts: [[1, "ant-skeleton-input"]], template: function NzSkeletonElementInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-input-lg", ctx.nzSize === "large")("ant-skeleton-input-sm", ctx.nzSize === "small");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzSkeletonElementInputComponent;
})();
let NzSkeletonElementImageComponent = /*@__PURE__*/ (() => {
    class NzSkeletonElementImageComponent {
    }
    NzSkeletonElementImageComponent.ɵfac = function NzSkeletonElementImageComponent_Factory(t) { return new (t || NzSkeletonElementImageComponent)(); };
    NzSkeletonElementImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementImageComponent, selectors: [["nz-skeleton-element", "nzType", "image"]], attrs: _c4, decls: 3, vars: 0, consts: [[1, "ant-skeleton-image"], ["viewBox", "0 0 1098 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-skeleton-image-svg"], ["d", "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", 1, "ant-skeleton-image-path"]], template: function NzSkeletonElementImageComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzSkeletonElementImageComponent;
})();
let NzSkeletonModule = /*@__PURE__*/ (() => {
    class NzSkeletonModule {
    }
    NzSkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSkeletonModule });
    NzSkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSkeletonModule_Factory(t) { return new (t || NzSkeletonModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
    return NzSkeletonModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSkeletonModule, { declarations: function () { return [NzSkeletonComponent, NzSkeletonElementDirective, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [NzSkeletonComponent, NzSkeletonElementDirective, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-skeleton.js.map


/***/ })

}]);