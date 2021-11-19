(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "3/1E":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js ***!
  \**************************************************************************************/
/*! exports provided: NzPaginationComponent, NzPaginationDefaultComponent, NzPaginationItemComponent, NzPaginationModule, NzPaginationOptionsComponent, NzPaginationSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationComponent", function() { return NzPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationDefaultComponent", function() { return NzPaginationDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationItemComponent", function() { return NzPaginationItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationModule", function() { return NzPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationOptionsComponent", function() { return NzPaginationOptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationSimpleComponent", function() { return NzPaginationSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */









function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1.template);
    }
}
function NzPaginationComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
    }
}
const _c0 = ["containerTemplate"];
function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r2.total, ctx_r2.ranges));
    }
}
function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.jumpPage($event); })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.jumpDiff($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const page_r6 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index)("direction", ctx_r3.dir);
    }
}
function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.onPageIndexChange($event); })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.onPageSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
    }
}
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
    }
}
const _c2 = ["nz-pagination-item", ""];
function NzPaginationItemComponent_ng_template_0_a_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().page;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r4);
    }
}
function NzPaginationItemComponent_ng_template_0_button_2_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
    }
}
function NzPaginationItemComponent_ng_template_0_button_2_i_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
    }
}
function NzPaginationItemComponent_ng_template_0_button_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_i_2_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_2_i_3_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r6.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
    }
}
function NzPaginationItemComponent_ng_template_0_button_3_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
    }
}
function NzPaginationItemComponent_ng_template_0_button_3_i_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
    }
}
function NzPaginationItemComponent_ng_template_0_button_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_3_i_2_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_i_3_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template, 1, 0, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r15.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r16.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u2022\u2022\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "prev_5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "next_5");
    }
}
function NzPaginationItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template, 6, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);
    }
}
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_a_1_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_Template, 4, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_Template, 4, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzPaginationItemComponent_ng_template_0_ng_container_4_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const type_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "next");
    }
}
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { $implicit: a0, page: a1 }; };
const _c4 = ["nz-pagination-options", ""];
function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 4);
    }
    if (rf & 2) {
        const option_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", option_r3.label)("nzValue", option_r3.value);
    }
}
function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onPageSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
    }
}
function NzPaginationOptionsComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.jumpToPageViaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.jump_to, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.page, " ");
    }
}
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.prePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.jumpToPageViaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.locale.prev_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.lastIndex, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
    }
}
const NZ_CONFIG_MODULE_NAME = 'pagination';
let NzPaginationComponent = /*@__PURE__*/ (() => {
    class NzPaginationComponent {
        constructor(i18n, cdr, breakpointService, nzConfigService, directionality, elementRef) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.breakpointService = breakpointService;
            this.nzConfigService = nzConfigService;
            this.directionality = directionality;
            this.elementRef = elementRef;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.nzShowTotal = null;
            this.nzItemRender = null;
            this.nzSize = 'default';
            this.nzPageSizeOptions = [10, 20, 30, 40];
            this.nzShowSizeChanger = false;
            this.nzShowQuickJumper = false;
            this.nzSimple = false;
            this.nzDisabled = false;
            this.nzResponsive = false;
            this.nzHideOnSinglePage = false;
            this.nzTotal = 0;
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
            this.showPagination = true;
            this.size = 'default';
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-pagination');
        }
        validatePageIndex(value, lastIndex) {
            if (value > lastIndex) {
                return lastIndex;
            }
            else if (value < 1) {
                return 1;
            }
            else {
                return value;
            }
        }
        onPageIndexChange(index) {
            const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
            const validIndex = this.validatePageIndex(index, lastIndex);
            if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
                this.nzPageIndex = validIndex;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
        }
        onPageSizeChange(size) {
            this.nzPageSize = size;
            this.nzPageSizeChange.emit(size);
            const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
            if (this.nzPageIndex > lastIndex) {
                this.onPageIndexChange(lastIndex);
            }
        }
        onTotalChange(total) {
            const lastIndex = this.getLastIndex(total, this.nzPageSize);
            if (this.nzPageIndex > lastIndex) {
                Promise.resolve().then(() => this.onPageIndexChange(lastIndex));
            }
        }
        getLastIndex(total, pageSize) {
            return Math.ceil(total / pageSize);
        }
        ngOnInit() {
            var _a;
            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.locale = this.i18n.getLocaleData('Pagination');
                this.cdr.markForCheck();
            });
            this.total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(total => {
                this.onTotalChange(total);
            });
            this.breakpointService
                .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["gridResponsiveMap"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
                .subscribe(bp => {
                if (this.nzResponsive) {
                    this.size = bp === ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointEnum"].xs ? 'small' : 'default';
                    this.cdr.markForCheck();
                }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        ngOnChanges(changes) {
            const { nzHideOnSinglePage, nzTotal, nzPageSize, nzSize } = changes;
            if (nzTotal) {
                this.total$.next(this.nzTotal);
            }
            if (nzHideOnSinglePage || nzTotal || nzPageSize) {
                this.showPagination = (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) || (this.nzTotal > 0 && !this.nzHideOnSinglePage);
            }
            if (nzSize) {
                this.size = nzSize.currentValue;
            }
        }
    }
    NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    NzPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPaginationComponent, selectors: [["nz-pagination"]], hostVars: 8, hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzShowSizeChanger: "nzShowSizeChanger", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzDisabled: "nzDisabled", nzResponsive: "nzResponsive", nzHideOnSinglePage: "nzHideOnSinglePage", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 18, consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]], template: function NzPaginationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-pagination-simple", 1, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) { return ctx.onPageIndexChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-pagination-default", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) { return ctx.onPageIndexChange($event); })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) { return ctx.onPageSizeChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPagination);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], NzPaginationSimpleComponent, NzPaginationDefaultComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NzPaginationComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzSimple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzResponsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzTotal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageSize", void 0);
    return NzPaginationComponent;
})();
let NzPaginationDefaultComponent = /*@__PURE__*/ (() => {
    class NzPaginationDefaultComponent {
        constructor(cdr, renderer, elementRef, directionality) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.nzSize = 'default';
            this.itemRender = null;
            this.showTotal = null;
            this.disabled = false;
            this.showSizeChanger = false;
            this.showQuickJumper = false;
            this.total = 0;
            this.pageIndex = 1;
            this.pageSize = 10;
            this.pageSizeOptions = [10, 20, 30, 40];
            this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.ranges = [0, 0];
            this.listOfPageItem = [];
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.updateRtlStyle();
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.updateRtlStyle();
        }
        updateRtlStyle() {
            if (this.dir === 'rtl') {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        jumpPage(index) {
            this.onPageIndexChange(index);
        }
        jumpDiff(diff) {
            this.jumpPage(this.pageIndex + diff);
        }
        trackByPageItem(_, value) {
            return `${value.type}-${value.index}`;
        }
        onPageIndexChange(index) {
            this.pageIndexChange.next(index);
        }
        onPageSizeChange(size) {
            this.pageSizeChange.next(size);
        }
        getLastIndex(total, pageSize) {
            return Math.ceil(total / pageSize);
        }
        buildIndexes() {
            const lastIndex = this.getLastIndex(this.total, this.pageSize);
            this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
        }
        getListOfPageItem(pageIndex, lastIndex) {
            const concatWithPrevNext = (listOfPage) => {
                const prevItem = {
                    type: 'prev',
                    disabled: pageIndex === 1
                };
                const nextItem = {
                    type: 'next',
                    disabled: pageIndex === lastIndex
                };
                return [prevItem, ...listOfPage, nextItem];
            };
            const generatePage = (start, end) => {
                const list = [];
                for (let i = start; i <= end; i++) {
                    list.push({
                        index: i,
                        type: 'page'
                    });
                }
                return list;
            };
            if (lastIndex <= 9) {
                return concatWithPrevNext(generatePage(1, lastIndex));
            }
            else {
                const generateRangeItem = (selected, last) => {
                    let listOfRange = [];
                    const prevFiveItem = {
                        type: 'prev_5'
                    };
                    const nextFiveItem = {
                        type: 'next_5'
                    };
                    const firstPageItem = generatePage(1, 1);
                    const lastPageItem = generatePage(lastIndex, lastIndex);
                    if (selected < 4) {
                        listOfRange = [...generatePage(2, 5), nextFiveItem];
                    }
                    else if (selected < last - 3) {
                        listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
                    }
                    else {
                        listOfRange = [prevFiveItem, ...generatePage(last - 4, last - 1)];
                    }
                    return [...firstPageItem, ...listOfRange, ...lastPageItem];
                };
                return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
            }
        }
        ngOnChanges(changes) {
            const { pageIndex, pageSize, total } = changes;
            if (pageIndex || pageSize || total) {
                this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
                this.buildIndexes();
            }
        }
    }
    NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) { return new (t || NzPaginationDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzPaginationDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPaginationDefaultComponent, selectors: [["nz-pagination-default"]], viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            }
        }, inputs: { nzSize: "nzSize", itemRender: "itemRender", showTotal: "showTotal", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]], template: function NzPaginationDefaultComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], NzPaginationItemComponent, NzPaginationOptionsComponent]; }, encapsulation: 2, changeDetection: 0 });
    return NzPaginationDefaultComponent;
})();
let NzPaginationItemComponent = /*@__PURE__*/ (() => {
    class NzPaginationItemComponent {
        constructor() {
            this.active = false;
            this.index = null;
            this.disabled = false;
            this.direction = 'ltr';
            this.type = null;
            this.itemRender = null;
            this.diffIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.gotoIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.title = null;
        }
        clickItem() {
            if (!this.disabled) {
                if (this.type === 'page') {
                    this.gotoIndex.emit(this.index);
                }
                else {
                    this.diffIndex.emit({
                        next: 1,
                        prev: -1,
                        prev_5: -5,
                        next_5: 5
                    }[this.type]);
                }
            }
        }
        ngOnChanges(changes) {
            var _a, _b, _c, _d;
            const { locale, index, type } = changes;
            if (locale || index || type) {
                this.title = {
                    page: `${this.index}`,
                    next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
                    prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
                    prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
                    next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
                }[this.type];
            }
        }
    }
    NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) { return new (t || NzPaginationItemComponent)(); };
    NzPaginationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPaginationItemComponent, selectors: [["li", "nz-pagination-item", ""]], hostVars: 19, hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationItemComponent_click_HostBindingHandler() { return ctx.clickItem(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
            }
        }, inputs: { active: "active", index: "index", disabled: "disabled", direction: "direction", type: "type", itemRender: "itemRender", locale: "locale" }, outputs: { diffIndex: "diffIndex", gotoIndex: "gotoIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c2, decls: 3, vars: 5, consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "ant-pagination-item-link", 3, "disabled", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "disabled"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "right"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "ngSwitch"], ["class", "ant-pagination-item-container", 4, "ngSwitchDefault"], [1, "ant-pagination-item-container"], [3, "ngSwitch", 4, "ngSwitchCase"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"]], template: function NzPaginationItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationItemComponent_ng_template_0_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemRender || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, ctx.type, ctx.index));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzPaginationItemComponent;
})();
let NzPaginationOptionsComponent = /*@__PURE__*/ (() => {
    class NzPaginationOptionsComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzSize = 'default';
            this.disabled = false;
            this.showSizeChanger = false;
            this.showQuickJumper = false;
            this.total = 0;
            this.pageIndex = 1;
            this.pageSize = 10;
            this.pageSizeOptions = [];
            this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.listOfPageSizeOption = [];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-pagination-options');
        }
        onPageSizeChange(size) {
            if (this.pageSize !== size) {
                this.pageSizeChange.next(size);
            }
        }
        jumpToPageViaInput($event) {
            const target = $event.target;
            const index = Math.floor(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(target.value, this.pageIndex));
            this.pageIndexChange.next(index);
            target.value = '';
        }
        trackByOption(_, option) {
            return option.value;
        }
        ngOnChanges(changes) {
            const { pageSize, pageSizeOptions, locale } = changes;
            if (pageSize || pageSizeOptions || locale) {
                this.listOfPageSizeOption = [...new Set([...this.pageSizeOptions, this.pageSize])].map(item => {
                    return {
                        value: item,
                        label: `${item} ${this.locale.items_per_page}`
                    };
                });
            }
        }
    }
    NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) { return new (t || NzPaginationOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    NzPaginationOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPaginationOptionsComponent, selectors: [["div", "nz-pagination-options", ""]], inputs: { nzSize: "nzSize", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c4, decls: 2, vars: 2, consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]], template: function NzPaginationOptionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSizeChanger);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showQuickJumper);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"]], encapsulation: 2, changeDetection: 0 });
    return NzPaginationOptionsComponent;
})();
let NzPaginationSimpleComponent = /*@__PURE__*/ (() => {
    class NzPaginationSimpleComponent {
        constructor(cdr, renderer, elementRef, directionality) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.itemRender = null;
            this.disabled = false;
            this.total = 0;
            this.pageIndex = 1;
            this.pageSize = 10;
            this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.lastIndex = 0;
            this.isFirstIndex = false;
            this.isLastIndex = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.updateRtlStyle();
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.updateRtlStyle();
        }
        updateRtlStyle() {
            if (this.dir === 'rtl') {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        jumpToPageViaInput($event) {
            const target = $event.target;
            const index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(target.value, this.pageIndex);
            this.onPageIndexChange(index);
            target.value = `${this.pageIndex}`;
        }
        prePage() {
            this.onPageIndexChange(this.pageIndex - 1);
        }
        nextPage() {
            this.onPageIndexChange(this.pageIndex + 1);
        }
        onPageIndexChange(index) {
            this.pageIndexChange.next(index);
        }
        updateBindingValue() {
            this.lastIndex = Math.ceil(this.total / this.pageSize);
            this.isFirstIndex = this.pageIndex === 1;
            this.isLastIndex = this.pageIndex === this.lastIndex;
        }
        ngOnChanges(changes) {
            const { pageIndex, total, pageSize } = changes;
            if (pageIndex || total || pageSize) {
                this.updateBindingValue();
            }
        }
    }
    NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) { return new (t || NzPaginationSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzPaginationSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPaginationSimpleComponent, selectors: [["nz-pagination-simple"]], viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            }
        }, inputs: { itemRender: "itemRender", disabled: "disabled", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "direction", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "direction", "itemRender", "click"]], template: function NzPaginationSimpleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
        }, directives: [NzPaginationItemComponent], encapsulation: 2, changeDetection: 0 });
    return NzPaginationSimpleComponent;
})();
let NzPaginationModule = /*@__PURE__*/ (() => {
    class NzPaginationModule {
    }
    NzPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzPaginationModule });
    NzPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"]]] });
    return NzPaginationModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzPaginationModule, { declarations: function () { return [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"]]; }, exports: function () { return [NzPaginationComponent]; } }); })();
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

//# sourceMappingURL=ng-zorro-antd-pagination.js.map


/***/ }),

/***/ "4xsP":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js ***!
  \*********************************************************************************/
/*! exports provided: NzSpaceComponent, NzSpaceItemComponent, NzSpaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceComponent", function() { return NzSpaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceItemComponent", function() { return NzSpaceItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceModule", function() { return NzSpaceModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const _c0 = ["*"];
const spaceSize = {
    small: 8,
    middle: 16,
    large: 24
};
let NzSpaceItemComponent = /*@__PURE__*/ (() => {
    class NzSpaceItemComponent {
        constructor(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
        }
        setDirectionAndSize(direction, size) {
            const marginSize = typeof size === 'string' ? spaceSize[size] : size;
            if (direction === 'horizontal') {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-bottom');
                this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${marginSize}px`);
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-right');
                this.renderer.setStyle(this.elementRef.nativeElement, 'margin-bottom', `${marginSize}px`);
            }
        }
        ngOnInit() { }
    }
    NzSpaceItemComponent.ɵfac = function NzSpaceItemComponent_Factory(t) { return new (t || NzSpaceItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    NzSpaceItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSpaceItemComponent, selectors: [["nz-space-item"], ["", "nz-space-item", ""]], hostAttrs: [1, "ant-space-item"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzSpaceItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzSpaceItemComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'space';
let NzSpaceComponent = /*@__PURE__*/ (() => {
    class NzSpaceComponent {
        constructor(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzDirection = 'horizontal';
            this.nzSize = 'small';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        updateSpaceItems() {
            if (this.nzSpaceItemComponents) {
                this.nzSpaceItemComponents.forEach(item => {
                    item.setDirectionAndSize(this.nzDirection, this.nzSize);
                });
            }
        }
        ngOnChanges() {
            this.updateSpaceItems();
            this.mergedAlign = this.nzAlign === undefined && this.nzDirection === 'horizontal' ? 'center' : this.nzAlign;
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        ngAfterViewInit() {
            this.nzSpaceItemComponents.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.updateSpaceItems();
            });
        }
    }
    NzSpaceComponent.ɵfac = function NzSpaceComponent_Factory(t) { return new (t || NzSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"])); };
    NzSpaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSpaceComponent, selectors: [["nz-space"], ["", "nz-space", ""]], contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzSpaceItemComponent, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzSpaceItemComponents = _t);
            }
        }, hostAttrs: [1, "ant-space"], hostVars: 12, hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
            }
        }, inputs: { nzDirection: "nzDirection", nzSize: "nzSize", nzAlign: "nzAlign" }, exportAs: ["NzSpace"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzSpaceComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSpaceComponent.prototype, "nzSize", void 0);
    return NzSpaceComponent;
})();
let NzSpaceModule = /*@__PURE__*/ (() => {
    class NzSpaceModule {
    }
    NzSpaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzSpaceModule });
    NzSpaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzSpaceModule_Factory(t) { return new (t || NzSpaceModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return NzSpaceModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzSpaceModule, { declarations: function () { return [NzSpaceComponent, NzSpaceItemComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NzSpaceComponent, NzSpaceItemComponent]; } }); })();
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

//# sourceMappingURL=ng-zorro-antd-space.js.map


/***/ }),

/***/ "TaO5":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js ***!
  \************************************************************************************/
/*! exports provided: NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxComponent", function() { return NzCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxGroupComponent", function() { return NzCheckboxGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxModule", function() { return NzCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxWrapperComponent", function() { return NzCheckboxWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-checkbox", ""];
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const o_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onCheckedChange(o_r1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const o_r1 = ctx.$implicit;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](o_r1.label);
    }
}
let NzCheckboxWrapperComponent = /*@__PURE__*/ (() => {
    class NzCheckboxWrapperComponent {
        constructor(renderer, elementRef) {
            this.nzOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.checkboxList = [];
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        addCheckbox(value) {
            this.checkboxList.push(value);
        }
        removeCheckbox(value) {
            this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
        }
        onChange() {
            const listOfCheckedValue = this.checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
            this.nzOnChange.emit(listOfCheckedValue);
        }
    }
    NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    NzCheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzCheckboxWrapperComponent;
})();
let NzCheckboxComponent = /*@__PURE__*/ (() => {
    class NzCheckboxComponent {
        constructor(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
            this.elementRef = elementRef;
            this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.directionality = directionality;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this.onChange = () => { };
            this.onTouched = () => { };
            this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.nzValue = null;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzChecked = false;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-checkbox-wrapper');
        }
        hostClick(e) {
            e.preventDefault();
            this.focus();
            this.innerCheckedChange(!this.nzChecked);
        }
        innerCheckedChange(checked) {
            if (!this.nzDisabled) {
                this.nzChecked = checked;
                this.onChange(this.nzChecked);
                this.nzCheckedChange.emit(this.nzChecked);
                if (this.nzCheckboxWrapperComponent) {
                    this.nzCheckboxWrapperComponent.onChange();
                }
            }
        }
        writeValue(value) {
            this.nzChecked = value;
            this.cdr.markForCheck();
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        setDisabledState(disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        }
        focus() {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        }
        blur() {
            this.inputElement.nativeElement.blur();
        }
        ngOnInit() {
            var _a;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
                if (!focusOrigin) {
                    Promise.resolve().then(() => this.onTouched());
                }
            });
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.addCheckbox(this);
            }
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterViewInit() {
            if (this.nzAutoFocus) {
                this.focus();
            }
        }
        ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.removeCheckbox(this);
            }
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
    NzCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
            }
        }, hostVars: 4, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxComponent),
                    multi: true
                }
            ])], attrs: _c2, ngContentSelectors: _c0, decls: 6, vars: 10, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]], template: function NzCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 1, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzChecked", void 0);
    return NzCheckboxComponent;
})();
let NzCheckboxGroupComponent = /*@__PURE__*/ (() => {
    class NzCheckboxGroupComponent {
        constructor(elementRef, focusMonitor, cdr, directionality) {
            this.elementRef = elementRef;
            this.focusMonitor = focusMonitor;
            this.cdr = cdr;
            this.directionality = directionality;
            this.onChange = () => { };
            this.onTouched = () => { };
            this.options = [];
            this.nzDisabled = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-checkbox-group');
        }
        trackByOption(_, option) {
            return option.value;
        }
        onCheckedChange(option, checked) {
            option.checked = checked;
            this.onChange(this.options);
        }
        ngOnInit() {
            var _a;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
                if (!focusOrigin) {
                    Promise.resolve().then(() => this.onTouched());
                }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef);
            this.destroy$.next();
            this.destroy$.complete();
        }
        writeValue(value) {
            this.options = value;
            this.cdr.markForCheck();
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        setDisabledState(disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        }
    }
    NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
    NzCheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], hostVars: 2, hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-group-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxGroupComponent),
                    multi: true
                }
            ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], NzCheckboxComponent], encapsulation: 2 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
    return NzCheckboxGroupComponent;
})();
let NzCheckboxModule = /*@__PURE__*/ (() => {
    class NzCheckboxModule {
    }
    NzCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzCheckboxModule });
    NzCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]] });
    return NzCheckboxModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzCheckboxModule, { declarations: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]; }, exports: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-checkbox.js.map


/***/ }),

/***/ "bE2y":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js ***!
  \*********************************************************************************/
/*! exports provided: NzRadioButtonDirective, NzRadioComponent, NzRadioGroupComponent, NzRadioModule, NzRadioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioButtonDirective", function() { return NzRadioButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioComponent", function() { return NzRadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioGroupComponent", function() { return NzRadioGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioModule", function() { return NzRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioService", function() { return NzRadioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */



const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-radio", ""];
let NzRadioButtonDirective = /*@__PURE__*/ (() => {
    class NzRadioButtonDirective {
    }
    NzRadioButtonDirective.ɵfac = function NzRadioButtonDirective_Factory(t) { return new (t || NzRadioButtonDirective)(); };
    NzRadioButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzRadioButtonDirective, selectors: [["", "nz-radio-button", ""]] });
    return NzRadioButtonDirective;
})();
let NzRadioService = /*@__PURE__*/ (() => {
    class NzRadioService {
        constructor() {
            this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
            this.touched$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
            this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        }
        touch() {
            this.touched$.next();
        }
        select(value) {
            this.selected$.next(value);
        }
        setDisabled(value) {
            this.disabled$.next(value);
        }
        setName(value) {
            this.name$.next(value);
        }
    }
    NzRadioService.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); };
    NzRadioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NzRadioService, factory: NzRadioService.ɵfac });
    return NzRadioService;
})();
let NzRadioGroupComponent = /*@__PURE__*/ (() => {
    class NzRadioGroupComponent {
        constructor(cdr, nzRadioService, elementRef, directionality) {
            this.cdr = cdr;
            this.nzRadioService = nzRadioService;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.value = null;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.onChange = () => { };
            this.onTouched = () => { };
            this.nzDisabled = false;
            this.nzButtonStyle = 'outline';
            this.nzSize = 'default';
            this.nzName = null;
            this.dir = 'ltr';
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-radio-group');
        }
        ngOnInit() {
            var _a;
            this.nzRadioService.selected$.subscribe(value => {
                if (this.value !== value) {
                    this.value = value;
                    this.onChange(this.value);
                }
            });
            this.nzRadioService.touched$.subscribe(() => {
                Promise.resolve().then(() => this.onTouched());
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnChanges(changes) {
            const { nzDisabled, nzName } = changes;
            if (nzDisabled) {
                this.nzRadioService.setDisabled(this.nzDisabled);
            }
            if (nzName) {
                this.nzRadioService.setName(this.nzName);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        writeValue(value) {
            this.value = value;
            this.nzRadioService.select(value);
            this.cdr.markForCheck();
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        setDisabledState(isDisabled) {
            this.nzDisabled = isDisabled;
            this.nzRadioService.setDisabled(isDisabled);
            this.cdr.markForCheck();
        }
    }
    NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
    NzRadioGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], hostVars: 8, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzDisabled: "nzDisabled", nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                NzRadioService,
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NzRadioGroupComponent),
                    multi: true
                }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzRadioGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
})();
let NzRadioComponent = /*@__PURE__*/ (() => {
    class NzRadioComponent {
        constructor(elementRef, cdr, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective) {
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.directionality = directionality;
            this.nzRadioService = nzRadioService;
            this.nzRadioButtonDirective = nzRadioButtonDirective;
            this.isNgModel = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.isChecked = false;
            this.name = null;
            this.isRadioButton = !!this.nzRadioButtonDirective;
            this.onChange = () => { };
            this.onTouched = () => { };
            this.nzValue = null;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.dir = 'ltr';
        }
        onHostClick(event) {
            /** prevent label click triggered twice. **/
            event.stopPropagation();
            event.preventDefault();
            if (!this.nzDisabled && !this.isChecked) {
                if (this.nzRadioService) {
                    this.nzRadioService.select(this.nzValue);
                }
                if (this.isNgModel) {
                    this.isChecked = true;
                    this.onChange(true);
                }
            }
        }
        focus() {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        }
        blur() {
            this.inputElement.nativeElement.blur();
        }
        setDisabledState(disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        }
        writeValue(value) {
            this.isChecked = value;
            this.cdr.markForCheck();
        }
        registerOnChange(fn) {
            this.isNgModel = true;
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        ngOnInit() {
            var _a;
            if (this.nzRadioService) {
                this.nzRadioService.name$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(name => {
                    this.name = name;
                    this.cdr.markForCheck();
                });
                this.nzRadioService.disabled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(disabled => {
                    this.nzDisabled = disabled;
                    this.cdr.markForCheck();
                });
                this.nzRadioService.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(value => {
                    this.isChecked = this.nzValue === value;
                    this.cdr.markForCheck();
                });
            }
            this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
                if (!focusOrigin) {
                    Promise.resolve().then(() => this.onTouched());
                    if (this.nzRadioService) {
                        this.nzRadioService.touch();
                    }
                }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterViewInit() {
            if (this.nzAutoFocus) {
                this.focus();
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.focusMonitor.stopMonitoring(this.elementRef);
        }
    }
    NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioButtonDirective, 8)); };
    NzRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzRadioComponent, selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
            }
        }, hostVars: 16, hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
            }
        }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NzRadioComponent),
                    multi: true
                }
            ])], attrs: _c2, ngContentSelectors: _c0, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]], template: function NzRadioComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
})();
let NzRadioModule = /*@__PURE__*/ (() => {
    class NzRadioModule {
    }
    NzRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzRadioModule });
    NzRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]] });
    return NzRadioModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzRadioModule, { declarations: function () { return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]; }, exports: function () { return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-radio.js.map


/***/ }),

/***/ "rMZv":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js ***!
  \*********************************************************************************/
/*! exports provided: NzCellAlignDirective, NzCellBreakWordDirective, NzCellEllipsisDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzRowExpandButtonDirective, NzRowIndentDirective, NzTableCellDirective, NzTableComponent, NzTableContentComponent, NzTableDataService, NzTableFilterComponent, NzTableFixedRowComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTableModule, NzTableSelectionComponent, NzTableSortersComponent, NzTableStyleService, NzTableTitleFooterComponent, NzTableVirtualScrollDirective, NzTbodyComponent, NzTdAddOnComponent, NzThAddOnComponent, NzThMeasureDirective, NzThSelectionComponent, NzTheadComponent, NzTrDirective, NzTrExpandDirective, NzTrMeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellAlignDirective", function() { return NzCellAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellBreakWordDirective", function() { return NzCellBreakWordDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellEllipsisDirective", function() { return NzCellEllipsisDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellFixedDirective", function() { return NzCellFixedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFilterTriggerComponent", function() { return NzFilterTriggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRowExpandButtonDirective", function() { return NzRowExpandButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRowIndentDirective", function() { return NzRowIndentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableCellDirective", function() { return NzTableCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableComponent", function() { return NzTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableContentComponent", function() { return NzTableContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableDataService", function() { return NzTableDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableFilterComponent", function() { return NzTableFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableFixedRowComponent", function() { return NzTableFixedRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableInnerDefaultComponent", function() { return NzTableInnerDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableInnerScrollComponent", function() { return NzTableInnerScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableModule", function() { return NzTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableSelectionComponent", function() { return NzTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableSortersComponent", function() { return NzTableSortersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableStyleService", function() { return NzTableStyleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableTitleFooterComponent", function() { return NzTableTitleFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableVirtualScrollDirective", function() { return NzTableVirtualScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTbodyComponent", function() { return NzTbodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTdAddOnComponent", function() { return NzTdAddOnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThAddOnComponent", function() { return NzThAddOnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThMeasureDirective", function() { return NzThMeasureDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThSelectionComponent", function() { return NzThSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTheadComponent", function() { return NzTheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrDirective", function() { return NzTrDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrExpandDirective", function() { return NzTrExpandDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrMeasureComponent", function() { return NzTrMeasureComponent; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "/Kk4");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






















const _c0 = ["*"];
function NzTableFilterComponent_ng_template_1_Template(rf, ctx) { }
function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.check(f_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", f_r4.checked);
    }
}
function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.check(f_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", f_r4.checked);
    }
}
function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const f_r4 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.check(f_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const f_r4 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelected", f_r4.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.filterMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.filterMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](f_r4.text);
    }
}
function NzTableFilterComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-filter-trigger", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onVisibleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.locale.filterReset);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.locale.filterConfirm);
    }
}
function NzTableSelectionComponent_label_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onCheckedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
    }
}
function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() { const selection_r6 = ctx.$implicit; return selection_r6.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const selection_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", selection_r6.text, " ");
    }
}
function NzTableSelectionComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSelections);
    }
}
function NzTableSortersComponent_ng_template_1_Template(rf, ctx) { }
function NzTableSortersComponent_i_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 5);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sortOrder == "ascend");
    }
}
function NzTableSortersComponent_i_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.sortOrder == "descend");
    }
}
const _c1 = ["nzChecked", ""];
function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nz-row-indent", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onExpandChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("indentSize", ctx_r0.nzIndentSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
    }
}
function NzTdAddOnComponent_label_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onCheckedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
    }
}
const _c2 = ["nzColumnKey", ""];
function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onFilterValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
    }
}
function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) { }
function NzThAddOnComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
    }
}
function NzThAddOnComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1, 1);
    }
}
function NzThAddOnComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-sorters", 7);
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
    }
}
function NzThAddOnComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0, 2);
    }
}
const _c3 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
const _c4 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
const _c5 = ["nzSelections", ""];
const _c6 = ["nz-table-content", ""];
function NzTableContentComponent_col_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "col");
    }
    if (rf & 2) {
        const width_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", width_r3)("min-width", width_r3);
    }
}
function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableContentComponent_thead_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.theadTemplate);
    }
}
function NzTableContentComponent_ng_template_2_Template(rf, ctx) { }
const _c7 = ["tdElement"];
const _c8 = ["nz-table-fixed-row", ""];
function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzTableFixedRowComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r1.hostWidth$), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    }
}
function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
}
const _c9 = ["tableHeaderElement"];
const _c10 = ["tableBodyElement"];
function NzTableInnerScrollComponent_ng_container_0_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r3.bodyStyleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r3.scrollX)("listOfColWidth", ctx_r3.listOfColWidth)("contentTemplate", ctx_r3.contentTemplate);
    }
}
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template(rf, ctx) { }
const _c11 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r8 = ctx.$implicit;
        const i_r9 = ctx.index;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.virtualTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c11, item_r8, i_r9));
    }
}
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template, 2, 5, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx_r4.data.length ? ctx_r4.scrollY : ctx_r4.noDateVirtualHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemSize", ctx_r4.virtualItemSize)("maxBufferPx", ctx_r4.virtualMaxBufferPx)("minBufferPx", ctx_r4.virtualMinBufferPx);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r4.scrollX)("listOfColWidth", ctx_r4.listOfColWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkVirtualForOf", ctx_r4.data)("cdkVirtualForTrackBy", ctx_r4.virtualForTrackBy);
    }
}
function NzTableInnerScrollComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_div_4_Template, 3, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template, 5, 9, "cdk-virtual-scroll-viewport", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.headerStyleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.virtualTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.virtualTemplate);
    }
}
function NzTableInnerScrollComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.bodyStyleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
    }
}
function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
}
function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-title-footer", 11);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.nzTitle);
    }
}
function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-inner-scroll", 12);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
    }
}
function NzTableComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-inner-default", 13);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
    }
}
function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-title-footer", 14);
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footer", ctx_r6.nzFooter);
    }
}
function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
}
function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.onPageSizeChange($event); })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.onPageIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
    }
}
function NzTableComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 11, "nz-pagination", 15);
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.nzShowPagination && ctx_r9.showPagination && ctx_r9.data.length);
    }
}
function NzTableComponent_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
}
function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.onListOfAutoWidthChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const listOfMeasureColumn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listOfMeasureColumn", listOfMeasureColumn_r2);
    }
}
function NzTbodyComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const listOfMeasureColumn_r2 = ctx.ngIf;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
    }
}
function NzTbodyComponent_tr_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nz-embed-empty", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("specificContent", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.noResult$));
    }
}
const _c12 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
}
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTheadComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    }
}
function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.title);
    }
}
function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.footer);
    }
}
const _c13 = ["nz-table-measure-row", ""];
function NzTrMeasureComponent_td_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td", 1, 2);
    }
}
let NzFilterTriggerComponent = /*@__PURE__*/ (() => {
    class NzFilterTriggerComponent {
        constructor(cdr, elementRef) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.nzActive = false;
            this.nzVisible = false;
            this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-filter-trigger-container');
        }
        onVisibleChange(visible) {
            this.nzVisible = visible;
            this.nzVisibleChange.next(visible);
        }
        onFilterClick($event) {
            $event.stopPropagation();
        }
        hide() {
            this.nzVisible = false;
            this.cdr.markForCheck();
        }
        show() {
            this.nzVisible = true;
            this.cdr.markForCheck();
        }
    }
    NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) { return new (t || NzFilterTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzFilterTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFilterTriggerComponent, selectors: [["nz-filter-trigger"]], hostVars: 2, hostBindings: function NzFilterTriggerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-filter-trigger-container-open", ctx.nzVisible);
            }
        }, inputs: { nzActive: "nzActive", nzVisible: "nzVisible", nzDropdownMenu: "nzDropdownMenu" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzFilterTrigger"], ngContentSelectors: _c0, decls: 2, vars: 7, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange", "click"]], template: function NzFilterTriggerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) { return ctx.onVisibleChange($event); })("click", function NzFilterTriggerComponent_Template_span_click_0_listener($event) { return ctx.onFilterClick($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
            }
        }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzFilterTriggerComponent;
})();
let NzTableFilterComponent = /*@__PURE__*/ (() => {
    class NzTableFilterComponent {
        constructor(cdr, i18n, elementRef) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.elementRef = elementRef;
            this.contentTemplate = null;
            this.customFilter = false;
            this.extraTemplate = null;
            this.filterMultiple = true;
            this.listOfFilter = [];
            this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.isChanged = false;
            this.isChecked = false;
            this.isVisible = false;
            this.listOfParsedFilter = [];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-filter-column');
        }
        trackByValue(_, item) {
            return item.value;
        }
        check(filter) {
            this.isChanged = true;
            if (this.filterMultiple) {
                this.listOfParsedFilter = this.listOfParsedFilter.map(item => {
                    if (item === filter) {
                        return Object.assign(Object.assign({}, item), { checked: !filter.checked });
                    }
                    else {
                        return item;
                    }
                });
                filter.checked = !filter.checked;
            }
            else {
                this.listOfParsedFilter = this.listOfParsedFilter.map(item => {
                    return Object.assign(Object.assign({}, item), { checked: item === filter });
                });
            }
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        }
        confirm() {
            this.isVisible = false;
            this.emitFilterData();
        }
        reset() {
            this.isChanged = true;
            this.isVisible = false;
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
            this.emitFilterData();
        }
        onVisibleChange(value) {
            this.isVisible = value;
            if (!value) {
                this.emitFilterData();
            }
        }
        emitFilterData() {
            if (this.isChanged) {
                const listOfChecked = this.listOfParsedFilter.filter(item => item.checked).map(item => item.value);
                if (this.filterMultiple) {
                    this.filterChange.emit(listOfChecked);
                }
                else {
                    this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
                }
                this.isChanged = false;
            }
        }
        parseListOfFilter(listOfFilter, reset) {
            return listOfFilter.map(item => {
                const checked = reset ? false : !!item.byDefault;
                return { text: item.text, value: item.value, checked };
            });
        }
        getCheckedStatus(listOfParsedFilter) {
            return listOfParsedFilter.some(item => item.checked);
        }
        ngOnInit() {
            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.locale = this.i18n.getLocaleData('Table');
                this.cdr.markForCheck();
            });
        }
        ngOnChanges(changes) {
            const { listOfFilter } = changes;
            if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
                this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
                this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) { return new (t || NzTableFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTableFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableFilterComponent, selectors: [["nz-table-filter"]], inputs: { contentTemplate: "contentTemplate", customFilter: "customFilter", extraTemplate: "extraTemplate", filterMultiple: "filterMultiple", listOfFilter: "listOfFilter" }, outputs: { filterChange: "filterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[1, "ant-table-filter-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]], template: function NzTableFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__["NzWaveDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuItemDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"]], encapsulation: 2, changeDetection: 0 });
    return NzTableFilterComponent;
})();
let NzRowExpandButtonDirective = /*@__PURE__*/ (() => {
    class NzRowExpandButtonDirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.expand = false;
            this.spaceMode = false;
            this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-row-expand-icon');
        }
        onHostClick() {
            if (!this.spaceMode) {
                this.expand = !this.expand;
                this.expandChange.next(this.expand);
            }
        }
    }
    NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) { return new (t || NzRowExpandButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzRowExpandButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzRowExpandButtonDirective, selectors: [["button", "nz-row-expand-button", ""]], hostVars: 7, hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzRowExpandButtonDirective_click_HostBindingHandler() { return ctx.onHostClick(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("type", "button");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
            }
        }, inputs: { expand: "expand", spaceMode: "spaceMode" }, outputs: { expandChange: "expandChange" } });
    return NzRowExpandButtonDirective;
})();
let NzRowIndentDirective = /*@__PURE__*/ (() => {
    class NzRowIndentDirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.indentSize = 0;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-row-indent');
        }
    }
    NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) { return new (t || NzRowIndentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzRowIndentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzRowIndentDirective, selectors: [["nz-row-indent"]], hostVars: 2, hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-left", ctx.indentSize, "px");
            }
        }, inputs: { indentSize: "indentSize" } });
    return NzRowIndentDirective;
})();
let NzTableSelectionComponent = /*@__PURE__*/ (() => {
    class NzTableSelectionComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.listOfSelections = [];
            this.checked = false;
            this.disabled = false;
            this.indeterminate = false;
            this.showCheckbox = false;
            this.showRowSelection = false;
            this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-selection');
        }
        onCheckedChange(checked) {
            this.checked = checked;
            this.checkedChange.emit(checked);
        }
    }
    NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) { return new (t || NzTableSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableSelectionComponent, selectors: [["nz-table-selection"]], inputs: { listOfSelections: "listOfSelections", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", showCheckbox: "showCheckbox", showRowSelection: "showRowSelection" }, outputs: { checkedChange: "checkedChange" }, decls: 2, vars: 2, consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]], template: function NzTableSelectionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showRowSelection);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuItemDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzTableSelectionComponent;
})();
let NzTableSortersComponent = /*@__PURE__*/ (() => {
    class NzTableSortersComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.sortDirections = ['ascend', 'descend', null];
            this.sortOrder = null;
            this.contentTemplate = null;
            this.isUp = false;
            this.isDown = false;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-column-sorters');
        }
        ngOnChanges(changes) {
            const { sortDirections } = changes;
            if (sortDirections) {
                this.isUp = this.sortDirections.indexOf('ascend') !== -1;
                this.isDown = this.sortDirections.indexOf('descend') !== -1;
            }
        }
    }
    NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) { return new (t || NzTableSortersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTableSortersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableSortersComponent, selectors: [["nz-table-sorters"]], inputs: { sortDirections: "sortDirections", sortOrder: "sortOrder", contentTemplate: "contentTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 5, consts: [[3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]], template: function NzTableSortersComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUp);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDown);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzTableSortersComponent;
})();
let NzCellFixedDirective = /*@__PURE__*/ (() => {
    class NzCellFixedDirective {
        constructor(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.nzRight = false;
            this.nzLeft = false;
            this.colspan = null;
            this.colSpan = null;
            this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.isAutoLeft = false;
            this.isAutoRight = false;
            this.isFixedLeft = false;
            this.isFixedRight = false;
            this.isFixed = false;
        }
        setAutoLeftWidth(autoLeft) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
        }
        setAutoRightWidth(autoRight) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
        }
        setIsFirstRight(isFirstRight) {
            this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
        }
        setIsLastLeft(isLastLeft) {
            this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
        }
        setFixClass(flag, className) {
            // the setFixClass function may call many times, so remove it first.
            this.renderer.removeClass(this.elementRef.nativeElement, className);
            if (flag) {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            }
        }
        ngOnChanges() {
            this.setIsFirstRight(false);
            this.setIsLastLeft(false);
            this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
            this.isAutoRight = this.nzRight === '' || this.nzRight === true;
            this.isFixedLeft = this.nzLeft !== false;
            this.isFixedRight = this.nzRight !== false;
            this.isFixed = this.isFixedLeft || this.isFixedRight;
            const validatePx = (value) => {
                if (typeof value === 'string' && value !== '') {
                    return value;
                }
                else {
                    return null;
                }
            };
            this.setAutoLeftWidth(validatePx(this.nzLeft));
            this.setAutoRightWidth(validatePx(this.nzRight));
            this.changes$.next();
        }
    }
    NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) { return new (t || NzCellFixedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzCellFixedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzCellFixedDirective, selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]], hostVars: 6, hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("position", ctx.isFixed ? "sticky" : null);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
            }
        }, inputs: { nzRight: "nzRight", nzLeft: "nzLeft", colspan: "colspan", colSpan: "colSpan" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
    return NzCellFixedDirective;
})();
let NzTableStyleService = /*@__PURE__*/ (() => {
    class NzTableStyleService {
        constructor() {
            this.theadTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.hasFixLeft$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.hasFixRight$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.listOfThWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]([]);
            this.tableWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]([]);
            this.manualWidthConfigPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([widthConfig, listOfWidth]) => (widthConfig.length ? widthConfig : listOfWidth)));
            this.listOfAutoWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.listOfListOfThWidthPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(
            /** init with manual width **/
            this.manualWidthConfigPx$, Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([autoWidth, manualWidth]) => {
                /** use autoWidth until column length match **/
                if (autoWidth.length === manualWidth.length) {
                    return autoWidth.map((width, index) => {
                        if (width === '0px') {
                            return manualWidth[index] || null;
                        }
                        else {
                            return manualWidth[index] || width;
                        }
                    });
                }
                else {
                    return manualWidth;
                }
            })));
            this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(list => list.map(width => parseInt(width, 10))));
            this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
        }
        setTheadTemplate(template) {
            this.theadTemplate$.next(template);
        }
        setHasFixLeft(hasFixLeft) {
            this.hasFixLeft$.next(hasFixLeft);
        }
        setHasFixRight(hasFixRight) {
            this.hasFixRight$.next(hasFixRight);
        }
        setTableWidthConfig(widthConfig) {
            this.tableWidthConfigPx$.next(widthConfig);
        }
        setListOfTh(listOfTh) {
            let columnCount = 0;
            listOfTh.forEach(th => {
                columnCount += (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
            });
            const listOfThPx = listOfTh.map(item => item.nzWidth);
            this.columnCount$.next(columnCount);
            this.listOfThWidthConfigPx$.next(listOfThPx);
        }
        setListOfMeasureColumn(listOfTh) {
            const listOfKeys = [];
            listOfTh.forEach(th => {
                const length = (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
                for (let i = 0; i < length; i++) {
                    listOfKeys.push(`measure_key_${i}`);
                }
            });
            this.listOfMeasureColumn$.next(listOfKeys);
        }
        setListOfAutoWidth(listOfAutoWidth) {
            this.listOfAutoWidthPx$.next(listOfAutoWidth.map(width => `${width}px`));
        }
        setShowEmpty(showEmpty) {
            this.showEmpty$.next(showEmpty);
        }
        setNoResult(noResult) {
            this.noResult$.next(noResult);
        }
        setScroll(scrollX, scrollY) {
            const enableAutoMeasure = !!(scrollX || scrollY);
            if (!enableAutoMeasure) {
                this.setListOfAutoWidth([]);
            }
            this.enableAutoMeasure$.next(enableAutoMeasure);
        }
    }
    NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) { return new (t || NzTableStyleService)(); };
    NzTableStyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NzTableStyleService, factory: NzTableStyleService.ɵfac });
    return NzTableStyleService;
})();
let NzTableCellDirective = /*@__PURE__*/ (() => {
    class NzTableCellDirective {
        constructor(nzTableStyleService) {
            this.isInsideTable = false;
            this.isInsideTable = !!nzTableStyleService;
        }
    }
    NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) { return new (t || NzTableCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
    NzTableCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzTableCellDirective, selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostVars: 2, hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell", ctx.isInsideTable);
            }
        } });
    return NzTableCellDirective;
})();
let NzTdAddOnComponent = /*@__PURE__*/ (() => {
    class NzTdAddOnComponent {
        constructor() {
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzIndentSize = 0;
            this.nzShowExpand = false;
            this.nzShowCheckbox = false;
            this.nzExpand = false;
            this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.isNzShowExpandChanged = false;
            this.isNzShowCheckboxChanged = false;
        }
        onCheckedChange(checked) {
            this.nzChecked = checked;
            this.nzCheckedChange.emit(checked);
        }
        onExpandChange(expand) {
            this.nzExpand = expand;
            this.nzExpandChange.emit(expand);
        }
        ngOnChanges(changes) {
            const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
            const { nzExpand, nzChecked, nzShowExpand, nzShowCheckbox } = changes;
            if (nzShowExpand) {
                this.isNzShowExpandChanged = true;
            }
            if (nzShowCheckbox) {
                this.isNzShowCheckboxChanged = true;
            }
            if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
                this.nzShowExpand = true;
            }
            if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
                this.nzShowCheckbox = true;
            }
        }
    }
    NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) { return new (t || NzTdAddOnComponent)(); };
    NzTdAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTdAddOnComponent, selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]], hostVars: 4, hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
            }
        }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzIndentSize: "nzIndentSize", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzExpand: "nzExpand" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], attrs: _c1, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]], template: function NzTdAddOnComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowCheckbox);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzRowIndentDirective, NzRowExpandButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTdAddOnComponent.prototype, "nzExpand", void 0);
    return NzTdAddOnComponent;
})();
let NzThAddOnComponent = /*@__PURE__*/ (() => {
    class NzThAddOnComponent {
        constructor(cdr) {
            this.cdr = cdr;
            this.manualClickOrder$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.calcOperatorChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.nzFilterValue = null;
            this.sortOrder = null;
            this.sortDirections = ['ascend', 'descend', null];
            this.sortOrderChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.isNzShowSortChanged = false;
            this.isNzShowFilterChanged = false;
            this.nzFilterMultiple = true;
            this.nzSortOrder = null;
            this.nzSortPriority = false;
            this.nzSortDirections = ['ascend', 'descend', null];
            this.nzFilters = [];
            this.nzSortFn = null;
            this.nzFilterFn = null;
            this.nzShowSort = false;
            this.nzShowFilter = false;
            this.nzCustomFilter = false;
            this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        }
        getNextSortDirection(sortDirections, current) {
            const index = sortDirections.indexOf(current);
            if (index === sortDirections.length - 1) {
                return sortDirections[0];
            }
            else {
                return sortDirections[index + 1];
            }
        }
        emitNextSortValue() {
            if (this.nzShowSort) {
                const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
                this.setSortOrder(nextOrder);
                this.manualClickOrder$.next(this);
            }
        }
        setSortOrder(order) {
            this.sortOrderChange$.next(order);
        }
        clearSortOrder() {
            if (this.sortOrder !== null) {
                this.setSortOrder(null);
            }
        }
        onFilterValueChange(value) {
            this.nzFilterChange.emit(value);
            this.nzFilterValue = value;
            this.updateCalcOperator();
        }
        updateCalcOperator() {
            this.calcOperatorChange$.next();
        }
        ngOnInit() {
            this.sortOrderChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(order => {
                if (this.sortOrder !== order) {
                    this.sortOrder = order;
                    this.nzSortOrderChange.emit(order);
                }
                this.updateCalcOperator();
                this.cdr.markForCheck();
            });
        }
        ngOnChanges(changes) {
            const { nzSortDirections, nzFilters, nzSortOrder, nzSortFn, nzFilterFn, nzSortPriority, nzFilterMultiple, nzShowSort, nzShowFilter } = changes;
            if (nzSortDirections) {
                if (this.nzSortDirections && this.nzSortDirections.length) {
                    this.sortDirections = this.nzSortDirections;
                }
            }
            if (nzSortOrder) {
                this.sortOrder = this.nzSortOrder;
                this.setSortOrder(this.nzSortOrder);
            }
            if (nzShowSort) {
                this.isNzShowSortChanged = true;
            }
            if (nzShowFilter) {
                this.isNzShowFilterChanged = true;
            }
            const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
            if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
                this.nzShowSort = true;
            }
            if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
                this.nzShowFilter = true;
            }
            if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
                const listOfValue = this.nzFilters.filter(item => item.byDefault).map(item => item.value);
                this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
            }
            if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
                this.updateCalcOperator();
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) { return new (t || NzThAddOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
    NzThAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzThAddOnComponent, selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]], hostVars: 4, hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzThAddOnComponent_click_HostBindingHandler() { return ctx.emitNextSortValue(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
            }
        }, inputs: { nzFilterMultiple: "nzFilterMultiple", nzSortOrder: "nzSortOrder", nzSortPriority: "nzSortPriority", nzSortDirections: "nzSortDirections", nzFilters: "nzFilters", nzSortFn: "nzSortFn", nzFilterFn: "nzFilterFn", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzCustomFilter: "nzCustomFilter", nzColumnKey: "nzColumnKey" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortOrderChange: "nzSortOrderChange", nzFilterChange: "nzFilterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], attrs: _c2, ngContentSelectors: _c4, decls: 9, vars: 2, consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]], template: function NzThAddOnComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzTableFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], NzTableSortersComponent], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzShowSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
    return NzThAddOnComponent;
})();
let NzThMeasureDirective = /*@__PURE__*/ (() => {
    class NzThMeasureDirective {
        constructor(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.nzWidth = null;
            this.colspan = null;
            this.colSpan = null;
            this.rowspan = null;
            this.rowSpan = null;
        }
        ngOnChanges(changes) {
            const { nzWidth, colspan, rowspan, colSpan, rowSpan } = changes;
            if (colspan || colSpan) {
                const col = this.colspan || this.colSpan;
                if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["isNil"])(col)) {
                    this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', `${col}`);
                }
                else {
                    this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
                }
            }
            if (rowspan || rowSpan) {
                const row = this.rowspan || this.rowSpan;
                if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["isNil"])(row)) {
                    this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', `${row}`);
                }
                else {
                    this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
                }
            }
            if (nzWidth || colspan) {
                this.changes$.next();
            }
        }
    }
    NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) { return new (t || NzThMeasureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzThMeasureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzThMeasureDirective, selectors: [["th"]], inputs: { nzWidth: "nzWidth", colspan: "colspan", colSpan: "colSpan", rowspan: "rowspan", rowSpan: "rowSpan" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
    return NzThMeasureDirective;
})();
let NzThSelectionComponent = /*@__PURE__*/ (() => {
    class NzThSelectionComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzSelections = [];
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzShowCheckbox = false;
            this.nzShowRowSelection = false;
            this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.isNzShowExpandChanged = false;
            this.isNzShowCheckboxChanged = false;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-selection-column');
        }
        onCheckedChange(checked) {
            this.nzChecked = checked;
            this.nzCheckedChange.emit(checked);
        }
        ngOnChanges(changes) {
            const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
            const { nzChecked, nzSelections, nzShowExpand, nzShowCheckbox } = changes;
            if (nzShowExpand) {
                this.isNzShowExpandChanged = true;
            }
            if (nzShowCheckbox) {
                this.isNzShowCheckboxChanged = true;
            }
            if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
                this.nzShowRowSelection = true;
            }
            if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
                this.nzShowCheckbox = true;
            }
        }
    }
    NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) { return new (t || NzThSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzThSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzThSelectionComponent, selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]], inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzShowCheckbox: "nzShowCheckbox", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], attrs: _c5, ngContentSelectors: _c0, decls: 2, vars: 6, consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]], template: function NzThSelectionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table-selection", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) { return ctx.onCheckedChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
            }
        }, directives: [NzTableSelectionComponent], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
    return NzThSelectionComponent;
})();
let NzCellAlignDirective = /*@__PURE__*/ (() => {
    class NzCellAlignDirective {
        constructor() {
            this.nzAlign = null;
        }
    }
    NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) { return new (t || NzCellAlignDirective)(); };
    NzCellAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzCellAlignDirective, selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]], hostVars: 2, hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("text-align", ctx.nzAlign);
            }
        }, inputs: { nzAlign: "nzAlign" } });
    return NzCellAlignDirective;
})();
let NzCellEllipsisDirective = /*@__PURE__*/ (() => {
    class NzCellEllipsisDirective {
        constructor() {
            this.nzEllipsis = true;
        }
    }
    NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) { return new (t || NzCellEllipsisDirective)(); };
    NzCellEllipsisDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzCellEllipsisDirective, selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]], hostVars: 2, hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-ellipsis", ctx.nzEllipsis);
            }
        }, inputs: { nzEllipsis: "nzEllipsis" } });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);
    return NzCellEllipsisDirective;
})();
let NzCellBreakWordDirective = /*@__PURE__*/ (() => {
    class NzCellBreakWordDirective {
        constructor() {
            this.nzBreakWord = true;
        }
    }
    NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) { return new (t || NzCellBreakWordDirective)(); };
    NzCellBreakWordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzCellBreakWordDirective, selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]], hostVars: 2, hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("word-break", ctx.nzBreakWord ? "break-all" : "");
            }
        }, inputs: { nzBreakWord: "nzBreakWord" } });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);
    return NzCellBreakWordDirective;
})();
let NzTableContentComponent = /*@__PURE__*/ (() => {
    class NzTableContentComponent {
        constructor() {
            this.tableLayout = 'auto';
            this.theadTemplate = null;
            this.contentTemplate = null;
            this.listOfColWidth = [];
            this.scrollX = null;
        }
    }
    NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) { return new (t || NzTableContentComponent)(); };
    NzTableContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableContentComponent, selectors: [["table", "nz-table-content", ""]], hostVars: 8, hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-fixed", ctx.scrollX);
            }
        }, inputs: { tableLayout: "tableLayout", theadTemplate: "theadTemplate", contentTemplate: "contentTemplate", listOfColWidth: "listOfColWidth", scrollX: "scrollX" }, attrs: _c6, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]], template: function NzTableContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfColWidth);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.theadTemplate);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
    return NzTableContentComponent;
})();
let NzTableFixedRowComponent = /*@__PURE__*/ (() => {
    class NzTableFixedRowComponent {
        constructor(nzTableStyleService, renderer) {
            this.nzTableStyleService = nzTableStyleService;
            this.renderer = renderer;
            this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](null);
            this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](false);
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        }
        ngOnInit() {
            if (this.nzTableStyleService) {
                const { enableAutoMeasure$, hostWidth$ } = this.nzTableStyleService;
                enableAutoMeasure$.subscribe(this.enableAutoMeasure$);
                hostWidth$.subscribe(this.hostWidth$);
            }
        }
        ngAfterViewInit() {
            this.nzTableStyleService.columnCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(count => {
                this.renderer.setAttribute(this.tdElement.nativeElement, 'colspan', `${count}`);
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) { return new (t || NzTableFixedRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"])); };
    NzTableFixedRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableFixedRowComponent, selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]], viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tdElement = _t.first);
            }
        }, attrs: _c8, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]], template: function NzTableFixedRowComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return NzTableFixedRowComponent;
})();
let NzTableInnerDefaultComponent = /*@__PURE__*/ (() => {
    class NzTableInnerDefaultComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.tableLayout = 'auto';
            this.listOfColWidth = [];
            this.theadTemplate = null;
            this.contentTemplate = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-container');
        }
    }
    NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) { return new (t || NzTableInnerDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTableInnerDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableInnerDefaultComponent, selectors: [["nz-table-inner-default"]], inputs: { tableLayout: "tableLayout", listOfColWidth: "listOfColWidth", theadTemplate: "theadTemplate", contentTemplate: "contentTemplate" }, decls: 2, vars: 4, consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]], template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
            }
        }, directives: [NzTableContentComponent], encapsulation: 2, changeDetection: 0 });
    return NzTableInnerDefaultComponent;
})();
let NzTableInnerScrollComponent = /*@__PURE__*/ (() => {
    class NzTableInnerScrollComponent {
        constructor(renderer, ngZone, platform, resizeService, elementRef) {
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.platform = platform;
            this.resizeService = resizeService;
            this.elementRef = elementRef;
            this.data = [];
            this.scrollX = null;
            this.scrollY = null;
            this.contentTemplate = null;
            this.widthConfig = [];
            this.listOfColWidth = [];
            this.theadTemplate = null;
            this.virtualTemplate = null;
            this.virtualItemSize = 0;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            this.virtualForTrackBy = index => index;
            this.headerStyleMap = {};
            this.bodyStyleMap = {};
            this.verticalScrollBarWidth = 0;
            this.noDateVirtualHeight = '182px';
            this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.scroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-container');
        }
        setScrollPositionClassName(clear = false) {
            const { scrollWidth, scrollLeft, clientWidth } = this.tableBodyElement.nativeElement;
            const leftClassName = 'ant-table-ping-left';
            const rightClassName = 'ant-table-ping-right';
            if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
                this.renderer.removeClass(this.tableMainElement, leftClassName);
                this.renderer.removeClass(this.tableMainElement, rightClassName);
            }
            else if (scrollLeft === 0) {
                this.renderer.removeClass(this.tableMainElement, leftClassName);
                this.renderer.addClass(this.tableMainElement, rightClassName);
            }
            else if (scrollWidth === scrollLeft + clientWidth) {
                this.renderer.removeClass(this.tableMainElement, rightClassName);
                this.renderer.addClass(this.tableMainElement, leftClassName);
            }
            else {
                this.renderer.addClass(this.tableMainElement, leftClassName);
                this.renderer.addClass(this.tableMainElement, rightClassName);
            }
        }
        ngOnChanges(changes) {
            const { scrollX, scrollY, data } = changes;
            if (scrollX || scrollY) {
                const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
                this.headerStyleMap = {
                    overflowX: 'hidden',
                    overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
                };
                this.bodyStyleMap = {
                    overflowY: this.scrollY ? 'scroll' : 'hidden',
                    overflowX: this.scrollX ? 'auto' : null,
                    maxHeight: this.scrollY
                };
                this.scroll$.next();
            }
            if (data) {
                this.data$.next();
            }
        }
        ngAfterViewInit() {
            if (this.platform.isBrowser) {
                this.ngZone.runOutsideAngular(() => {
                    const scrollEvent$ = this.scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(this.tableBodyElement.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                    const resize$ = this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                    const data$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                    const setClassName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(scrollEvent$, resize$, data$, this.scroll$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                    setClassName$.subscribe(() => this.setScrollPositionClassName());
                    scrollEvent$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(() => !!this.scrollY))
                        .subscribe(() => (this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft));
                });
            }
        }
        ngOnDestroy() {
            this.setScrollPositionClassName(true);
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) { return new (t || NzTableInnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTableInnerScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableInnerScrollComponent, selectors: [["nz-table-inner-scroll"]], viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c9, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c10, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], 1, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableHeaderElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableBodyElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
            }
        }, inputs: { data: "data", scrollX: "scrollX", scrollY: "scrollY", contentTemplate: "contentTemplate", widthConfig: "widthConfig", listOfColWidth: "listOfColWidth", theadTemplate: "theadTemplate", virtualTemplate: "virtualTemplate", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", verticalScrollBarWidth: "verticalScrollBarWidth", tableMainElement: "tableMainElement" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-table-content", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-content"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"]], template: function NzTableInnerScrollComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableInnerScrollComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableInnerScrollComponent_div_1_Template, 4, 5, "div", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrollY);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.scrollY);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], NzTableContentComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], NzTbodyComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
    return NzTableInnerScrollComponent;
})();
let NzTableVirtualScrollDirective = /*@__PURE__*/ (() => {
    class NzTableVirtualScrollDirective {
        constructor(templateRef) {
            this.templateRef = templateRef;
        }
    }
    NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) { return new (t || NzTableVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])); };
    NzTableVirtualScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzTableVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
    return NzTableVirtualScrollDirective;
})();
let NzTableDataService = /*@__PURE__*/ (() => {
    class NzTableDataService {
        constructor() {
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.pageIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](1);
            this.frontPagination$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](true);
            this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](10);
            this.listOfData$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]([]);
            this.pageIndexDistinct$ = this.pageIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])());
            this.pageSizeDistinct$ = this.pageSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])());
            this.listOfCalcOperator$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]([]);
            this.queryParams$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([
                this.pageIndexDistinct$,
                this.pageSizeDistinct$,
                this.listOfCalcOperator$
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([pageIndex, pageSize, listOfCalc]) => {
                return {
                    pageIndex,
                    pageSize,
                    sort: listOfCalc
                        .filter(item => item.sortFn)
                        .map(item => {
                        return {
                            key: item.key,
                            value: item.sortOrder
                        };
                    }),
                    filter: listOfCalc
                        .filter(item => item.filterFn)
                        .map(item => {
                        return {
                            key: item.key,
                            value: item.filterValue
                        };
                    })
                };
            }));
            this.listOfDataAfterCalc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.listOfData$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([listOfData, listOfCalcOperator]) => {
                let listOfDataAfterCalc = [...listOfData];
                const listOfFilterOperator = listOfCalcOperator.filter(item => {
                    const { filterValue, filterFn } = item;
                    const isReset = filterValue === null || filterValue === undefined || (Array.isArray(filterValue) && filterValue.length === 0);
                    return !isReset && typeof filterFn === 'function';
                });
                for (const item of listOfFilterOperator) {
                    const { filterFn, filterValue } = item;
                    listOfDataAfterCalc = listOfDataAfterCalc.filter(data => filterFn(filterValue, data));
                }
                const listOfSortOperator = listOfCalcOperator
                    .filter(item => item.sortOrder !== null && typeof item.sortFn === 'function')
                    .sort((a, b) => +b.sortPriority - +a.sortPriority);
                if (listOfCalcOperator.length) {
                    listOfDataAfterCalc.sort((record1, record2) => {
                        for (const item of listOfSortOperator) {
                            const { sortFn, sortOrder } = item;
                            if (sortFn && sortOrder) {
                                const compareResult = sortFn(record1, record2, sortOrder);
                                if (compareResult !== 0) {
                                    return sortOrder === 'ascend' ? compareResult : -compareResult;
                                }
                            }
                        }
                        return 0;
                    });
                }
                return listOfDataAfterCalc;
            }));
            this.listOfFrontEndCurrentPageData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(value => {
                const [pageIndex, pageSize, listOfData] = value;
                const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
                return pageIndex <= maxPageIndex;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([pageIndex, pageSize, listOfData]) => {
                return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
            }));
            this.listOfCurrentPageData$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(pagination => (pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfData$)));
            this.total$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(pagination => (pagination ? this.listOfDataAfterCalc$ : this.listOfData$)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(list => list.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])());
        }
        updatePageSize(size) {
            this.pageSize$.next(size);
        }
        updateFrontPagination(pagination) {
            this.frontPagination$.next(pagination);
        }
        updatePageIndex(index) {
            this.pageIndex$.next(index);
        }
        updateListOfData(list) {
            this.listOfData$.next(list);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTableDataService.ɵfac = function NzTableDataService_Factory(t) { return new (t || NzTableDataService)(); };
    NzTableDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NzTableDataService, factory: NzTableDataService.ɵfac });
    return NzTableDataService;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'table';
let NzTableComponent = /*@__PURE__*/ (() => {
    class NzTableComponent {
        constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
            this.elementRef = elementRef;
            this.nzResizeObserver = nzResizeObserver;
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.nzTableStyleService = nzTableStyleService;
            this.nzTableDataService = nzTableDataService;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzTableLayout = 'auto';
            this.nzShowTotal = null;
            this.nzItemRender = null;
            this.nzTitle = null;
            this.nzFooter = null;
            this.nzNoResult = undefined;
            this.nzPageSizeOptions = [10, 20, 30, 40, 50];
            this.nzVirtualItemSize = 0;
            this.nzVirtualMaxBufferPx = 200;
            this.nzVirtualMinBufferPx = 100;
            this.nzVirtualForTrackBy = index => index;
            this.nzLoadingDelay = 0;
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
            this.nzTotal = 0;
            this.nzWidthConfig = [];
            this.nzData = [];
            this.nzPaginationPosition = 'bottom';
            this.nzScroll = { x: null, y: null };
            this.nzFrontPagination = true;
            this.nzTemplateMode = false;
            this.nzShowPagination = true;
            this.nzLoading = false;
            this.nzOuterBordered = false;
            this.nzLoadingIndicator = null;
            this.nzBordered = false;
            this.nzSize = 'default';
            this.nzShowSizeChanger = false;
            this.nzHideOnSinglePage = false;
            this.nzShowQuickJumper = false;
            this.nzSimple = false;
            this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzQueryParams = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.nzCurrentPageDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            /** public data for ngFor tr */
            this.data = [];
            this.scrollX = null;
            this.scrollY = null;
            this.theadTemplate = null;
            this.listOfAutoColWidth = [];
            this.listOfManualColWidth = [];
            this.hasFixLeft = false;
            this.hasFixRight = false;
            this.showPagination = true;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](false);
            this.templateMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](false);
            this.dir = 'ltr';
            this.verticalScrollBarWidth = 0;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-wrapper');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.cdr.markForCheck();
            });
        }
        onPageSizeChange(size) {
            this.nzTableDataService.updatePageSize(size);
        }
        onPageIndexChange(index) {
            this.nzTableDataService.updatePageIndex(index);
        }
        ngOnInit() {
            var _a;
            const { pageIndexDistinct$, pageSizeDistinct$, listOfCurrentPageData$, total$, queryParams$ } = this.nzTableDataService;
            const { theadTemplate$, hasFixLeft$, hasFixRight$ } = this.nzTableStyleService;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            queryParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(this.nzQueryParams);
            pageIndexDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(pageIndex => {
                if (pageIndex !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex;
                    this.nzPageIndexChange.next(pageIndex);
                }
            });
            pageSizeDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(pageSize => {
                if (pageSize !== this.nzPageSize) {
                    this.nzPageSize = pageSize;
                    this.nzPageSizeChange.next(pageSize);
                }
            });
            total$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(() => this.nzFrontPagination))
                .subscribe(total => {
                if (total !== this.nzTotal) {
                    this.nzTotal = total;
                    this.cdr.markForCheck();
                }
            });
            listOfCurrentPageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(data => {
                this.data = data;
                this.nzCurrentPageDataChange.next(data);
                this.cdr.markForCheck();
            });
            theadTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(theadTemplate => {
                this.theadTemplate = theadTemplate;
                this.cdr.markForCheck();
            });
            hasFixLeft$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(hasFixLeft => {
                this.hasFixLeft = hasFixLeft;
                this.cdr.markForCheck();
            });
            hasFixRight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(hasFixRight => {
                this.hasFixRight = hasFixRight;
                this.cdr.markForCheck();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([total$, this.loading$, this.templateMode$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([total, loading, templateMode]) => total === 0 && !loading && !templateMode), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                .subscribe(empty => {
                this.nzTableStyleService.setShowEmpty(empty);
            });
            this.verticalScrollBarWidth = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["measureScrollbar"])('vertical');
            this.nzTableStyleService.listOfListOfThWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(listOfWidth => {
                this.listOfAutoColWidth = listOfWidth;
                this.cdr.markForCheck();
            });
            this.nzTableStyleService.manualWidthConfigPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(listOfWidth => {
                this.listOfManualColWidth = listOfWidth;
                this.cdr.markForCheck();
            });
        }
        ngOnChanges(changes) {
            const { nzScroll, nzPageIndex, nzPageSize, nzFrontPagination, nzData, nzWidthConfig, nzNoResult, nzLoading, nzTemplateMode } = changes;
            if (nzPageIndex) {
                this.nzTableDataService.updatePageIndex(this.nzPageIndex);
            }
            if (nzPageSize) {
                this.nzTableDataService.updatePageSize(this.nzPageSize);
            }
            if (nzData) {
                this.nzData = this.nzData || [];
                this.nzTableDataService.updateListOfData(this.nzData);
            }
            if (nzFrontPagination) {
                this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
            }
            if (nzScroll) {
                this.setScrollOnChanges();
            }
            if (nzWidthConfig) {
                this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
            }
            if (nzLoading) {
                this.loading$.next(this.nzLoading);
            }
            if (nzTemplateMode) {
                this.templateMode$.next(this.nzTemplateMode);
            }
            if (nzNoResult) {
                this.nzTableStyleService.setNoResult(this.nzNoResult);
            }
            this.updateShowPagination();
        }
        ngAfterViewInit() {
            this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([entry]) => {
                const { width } = entry.target.getBoundingClientRect();
                const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
                return Math.floor(width - scrollBarWidth);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                .subscribe(this.nzTableStyleService.hostWidth$);
            if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
                this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        setScrollOnChanges() {
            this.scrollX = (this.nzScroll && this.nzScroll.x) || null;
            this.scrollY = (this.nzScroll && this.nzScroll.y) || null;
            this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
        }
        updateShowPagination() {
            this.showPagination =
                (this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize) ||
                    (this.nzData.length > 0 && !this.nzHideOnSinglePage) ||
                    (!this.nzFrontPagination && this.nzTotal > this.nzPageSize);
        }
    }
    NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
    NzTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzTableVirtualScrollDirective, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nzVirtualScrollDirective = _t.first);
            }
        }, viewQuery: function NzTableComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](NzTableInnerScrollComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nzTableInnerScrollComponent = _t.first);
            }
        }, hostVars: 2, hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-wrapper-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzTableLayout: "nzTableLayout", nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzTotal: "nzTotal", nzWidthConfig: "nzWidthConfig", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzOuterBordered: "nzOuterBordered", nzLoadingIndicator: "nzLoadingIndicator", nzBordered: "nzBordered", nzSize: "nzSize", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzQueryParams: "nzQueryParams", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NzTableStyleService, NzTableDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 14, vars: 27, consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]], template: function NzTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-spin", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", _r4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzFooter);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
            }
        }, directives: function () { return [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationComponent"]]; }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzFrontPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzTemplateMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzShowPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzOuterBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Object)
    ], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Boolean)
    ], NzTableComponent.prototype, "nzBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", String)
    ], NzTableComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Boolean)
    ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_21__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_20__["__metadata"])("design:type", Boolean)
    ], NzTableComponent.prototype, "nzSimple", void 0);
    return NzTableComponent;
})();
let NzTbodyComponent = /*@__PURE__*/ (() => {
    class NzTbodyComponent {
        constructor(nzTableStyleService) {
            this.nzTableStyleService = nzTableStyleService;
            this.isInsideTable = false;
            this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](false);
            this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"](undefined);
            this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]([]);
            this.isInsideTable = !!this.nzTableStyleService;
            if (this.nzTableStyleService) {
                const { showEmpty$, noResult$, listOfMeasureColumn$ } = this.nzTableStyleService;
                noResult$.subscribe(this.noResult$);
                listOfMeasureColumn$.subscribe(this.listOfMeasureColumn$);
                showEmpty$.subscribe(this.showEmpty$);
            }
        }
        onListOfAutoWidthChange(listOfAutoWidth) {
            this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
        }
    }
    NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) { return new (t || NzTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
    NzTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTbodyComponent, selectors: [["tbody"]], hostVars: 2, hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-tbody", ctx.isInsideTable);
            }
        }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]], template: function NzTbodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.listOfMeasureColumn$));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.showEmpty$));
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzTrMeasureComponent, NzTableFixedRowComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmbedEmptyComponent"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]]; }, encapsulation: 2, changeDetection: 0 });
    return NzTbodyComponent;
})();
let NzTrDirective = /*@__PURE__*/ (() => {
    class NzTrDirective {
        constructor(nzTableStyleService) {
            this.nzTableStyleService = nzTableStyleService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.listOfFixedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.listOfColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["ReplaySubject"](1);
            this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(list => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...[this.listOfFixedColumns$, ...list.map((c) => c.changes$)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["flatMap"])(() => this.listOfFixedColumns$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
            this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(list => list.filter(item => item.nzLeft !== false)));
            this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(list => list.filter(item => item.nzRight !== false)));
            this.listOfColumnsChanges$ = this.listOfColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(list => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...[this.listOfColumns$, ...list.map((c) => c.changes$)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["flatMap"])(() => this.listOfColumns$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
            this.isInsideTable = false;
            this.isInsideTable = !!nzTableStyleService;
        }
        ngAfterContentInit() {
            if (this.nzTableStyleService) {
                this.listOfCellFixedDirective.changes
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(this.listOfCellFixedDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                    .subscribe(this.listOfFixedColumns$);
                this.listOfNzThDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(this.listOfNzThDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$)).subscribe(this.listOfColumns$);
                /** set last left and first right **/
                this.listOfFixedLeftColumnChanges$.subscribe(listOfFixedLeft => {
                    listOfFixedLeft.forEach(cell => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
                });
                this.listOfFixedRightColumnChanges$.subscribe(listOfFixedRight => {
                    listOfFixedRight.forEach(cell => cell.setIsFirstRight(cell === listOfFixedRight[0]));
                });
                /** calculate fixed nzLeft and nzRight **/
                Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).subscribe(([listOfAutoWidth, listOfLeftCell]) => {
                    listOfLeftCell.forEach((cell, index) => {
                        if (cell.isAutoLeft) {
                            const currentArray = listOfLeftCell.slice(0, index);
                            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
                            const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
                            cell.setAutoLeftWidth(`${width}px`);
                        }
                    });
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).subscribe(([listOfAutoWidth, listOfRightCell]) => {
                    listOfRightCell.forEach((_, index) => {
                        const cell = listOfRightCell[listOfRightCell.length - index - 1];
                        if (cell.isAutoRight) {
                            const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
                            const width = listOfAutoWidth
                                .slice(listOfAutoWidth.length - count, listOfAutoWidth.length)
                                .reduce((pre, cur) => pre + cur, 0);
                            cell.setAutoRightWidth(`${width}px`);
                        }
                    });
                });
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
    NzTrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]], contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzThMeasureDirective, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzCellFixedDirective, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzThDirective = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfCellFixedDirective = _t);
            }
        }, hostVars: 2, hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-row", ctx.isInsideTable);
            }
        } });
    return NzTrDirective;
})();
let NzTheadComponent = /*@__PURE__*/ (() => {
    class NzTheadComponent {
        constructor(elementRef, renderer, nzTableStyleService, nzTableDataService) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzTableStyleService = nzTableStyleService;
            this.nzTableDataService = nzTableDataService;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            this.isInsideTable = false;
            this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.isInsideTable = !!this.nzTableStyleService;
        }
        ngOnInit() {
            if (this.nzTableStyleService) {
                this.nzTableStyleService.setTheadTemplate(this.templateRef);
            }
        }
        ngAfterContentInit() {
            if (this.nzTableStyleService) {
                const firstTableRow$ = this.listOfNzTrDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(this.listOfNzTrDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(item => item && item.first));
                const listOfColumnsChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(firstTableRow => (firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                listOfColumnsChanges$.subscribe(data => this.nzTableStyleService.setListOfTh(data));
                /** TODO: need reset the measure row when scrollX change **/
                this.nzTableStyleService.enableAutoMeasure$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(enable => (enable ? listOfColumnsChanges$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["of"])([]))))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                    .subscribe(data => this.nzTableStyleService.setListOfMeasureColumn(data));
                const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(firstTr => (firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(firstTr => (firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                listOfFixedLeftColumnChanges$.subscribe(listOfFixedLeftColumn => {
                    this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
                });
                listOfFixedRightColumnChanges$.subscribe(listOfFixedRightColumn => {
                    this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
                });
            }
            if (this.nzTableDataService) {
                const listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(this.listOfNzThAddOnComponent));
                const manualSort$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...this.listOfNzThAddOnComponent.map(th => th.manualClickOrder$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$));
                manualSort$.subscribe((data) => {
                    const emitValue = { key: data.nzColumnKey, value: data.sortOrder };
                    this.nzSortOrderChange.emit(emitValue);
                    if (data.nzSortFn && data.nzSortPriority === false) {
                        this.listOfNzThAddOnComponent.filter(th => th !== data).forEach(th => th.clearSortOrder());
                    }
                });
                const listOfCalcOperator$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(list => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...[listOfColumn$, ...list.map((c) => c.calcOperatorChange$)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["mergeMap"])(() => listOfColumn$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(list => list
                    .filter(item => !!item.nzSortFn || !!item.nzFilterFn)
                    .map(item => {
                    const { nzSortFn, sortOrder, nzFilterFn, nzFilterValue, nzSortPriority, nzColumnKey } = item;
                    return {
                        key: nzColumnKey,
                        sortFn: nzSortFn,
                        sortPriority: nzSortPriority,
                        sortOrder: sortOrder,
                        filterFn: nzFilterFn,
                        filterValue: nzFilterValue
                    };
                })), 
                // TODO: after checked error here
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0));
                listOfCalcOperator$.subscribe(list => {
                    this.nzTableDataService.listOfCalcOperator$.next(list);
                });
            }
        }
        ngAfterViewInit() {
            if (this.nzTableStyleService) {
                this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableDataService, 8)); };
    NzTheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzTrDirective, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzThAddOnComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzTrDirective = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzThAddOnComponent = _t);
            }
        }, viewQuery: function NzTheadComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c12, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
            }
        }, outputs: { nzSortOrderChange: "nzSortOrderChange" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isInsideTable);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
    return NzTheadComponent;
})();
let NzTableTitleFooterComponent = /*@__PURE__*/ (() => {
    class NzTableTitleFooterComponent {
        constructor() {
            this.title = null;
            this.footer = null;
        }
    }
    NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) { return new (t || NzTableTitleFooterComponent)(); };
    NzTableTitleFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTableTitleFooterComponent, selectors: [["nz-table-title-footer"]], hostVars: 4, hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
            }
        }, inputs: { title: "title", footer: "footer" }, decls: 2, vars: 2, consts: [[4, "nzStringTemplateOutlet"]], template: function NzTableTitleFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.footer);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzTableTitleFooterComponent;
})();
let NzTrExpandDirective = /*@__PURE__*/ (() => {
    class NzTrExpandDirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzExpand = true;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-expanded-row');
        }
    }
    NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) { return new (t || NzTrExpandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTrExpandDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzTrExpandDirective, selectors: [["tr", "nzExpand", ""]], hostVars: 1, hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("hidden", !ctx.nzExpand);
            }
        }, inputs: { nzExpand: "nzExpand" } });
    return NzTrExpandDirective;
})();
let NzTrMeasureComponent = /*@__PURE__*/ (() => {
    class NzTrMeasureComponent {
        constructor(nzResizeObserver, ngZone, elementRef) {
            this.nzResizeObserver = nzResizeObserver;
            this.ngZone = ngZone;
            this.elementRef = elementRef;
            this.listOfMeasureColumn = [];
            this.listOfAutoWidth = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-table-measure-now');
        }
        trackByFunc(_, key) {
            return key;
        }
        ngAfterViewInit() {
            this.listOfTdElement.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(this.listOfTdElement))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(list => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["combineLatest"])(list.toArray().map((item) => {
                    return this.nzResizeObserver.observe(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(([entry]) => {
                        const { width } = entry.target.getBoundingClientRect();
                        return Math.floor(width);
                    }));
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["debounceTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.destroy$))
                .subscribe(data => {
                this.ngZone.run(() => {
                    this.listOfAutoWidth.next(data);
                });
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) { return new (t || NzTrMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
    NzTrMeasureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzTrMeasureComponent, selectors: [["tr", "nz-table-measure-row", ""]], viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfTdElement = _t);
            }
        }, inputs: { listOfMeasureColumn: "listOfMeasureColumn" }, outputs: { listOfAutoWidth: "listOfAutoWidth" }, attrs: _c13, decls: 1, vars: 2, consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]], template: function NzTrMeasureComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
    return NzTrMeasureComponent;
})();
let NzTableModule = /*@__PURE__*/ (() => {
    class NzTableModule {
    }
    NzTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NzTableModule });
    NzTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"],
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"],
                ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
                ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationModule"],
                ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserversModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"],
                ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]
            ]] });
    return NzTableModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzTableModule, { declarations: function () { return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent]; }, imports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"],
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"],
                ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
                ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationModule"],
                ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserversModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"],
                ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]];
        }, exports: function () { return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]; } });
})();
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

//# sourceMappingURL=ng-zorro-antd-table.js.map


/***/ }),

/***/ "zAKX":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js ***!
  \**********************************************************************************/
/*! exports provided: NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzOptionItemGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectComponent, NzSelectItemComponent, NzSelectModule, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzSelectTopControlComponent, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionComponent", function() { return NzOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionContainerComponent", function() { return NzOptionContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionGroupComponent", function() { return NzOptionGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemComponent", function() { return NzOptionItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemGroupComponent", function() { return NzOptionItemGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectArrowComponent", function() { return NzSelectArrowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectClearComponent", function() { return NzSelectClearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectComponent", function() { return NzSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectItemComponent", function() { return NzSelectItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectModule", function() { return NzSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectPlaceholderComponent", function() { return NzSelectPlaceholderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectSearchComponent", function() { return NzSelectSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectTopControlComponent", function() { return NzSelectTopControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */















const _c0 = ["*"];
function NzOptionContainerComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
    }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
    }
    if (rf & 2) {
        const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
    }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onItemHover($event); })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
    }
}
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
    }
}
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
function NzOptionComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
}
const _c1 = ["inputElement"];
const _c2 = ["mirrorElement"];
function NzSelectSearchComponent_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
    }
}
function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
    }
}
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select-search", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onInputValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);
    }
}
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@zoomMotion.done", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_animation_zoomMotion_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onAnimationEnd(); })("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onDeleteItem(item_r8.contentTemplateOutletContext); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r8 = ctx.$implicit;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
    }
}
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 9, "nz-select-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onInputValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
    }
}
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
    }
}
function NzSelectComponent_nz_select_clear_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_2_Template_nz_select_clear_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClearSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r1.nzClearIcon);
    }
}
function NzSelectComponent_nz_select_arrow_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 6);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r2.nzLoading)("search", ctx_r2.nzOpen && ctx_r2.nzShowSearch)("suffixIcon", ctx_r2.nzSuffixIcon);
    }
}
function NzSelectComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onKeyDown($event); })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onItemClick($event); })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nzScrollToBottom.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
    }
}
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
    }
}
function NzOptionItemComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
    }
}
function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzOptionItemComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
    }
}
function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
    }
}
function NzOptionItemComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
    }
}
function NzSelectArrowComponent_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
    }
}
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
    }
}
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
    }
}
function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
    }
}
function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const suffixIcon_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
    }
}
function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
    }
}
function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
    }
}
function NzSelectClearComponent_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
    }
}
function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
    }
}
function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
    }
}
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
    }
}
function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
    }
}
function NzSelectItemComponent_span_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
    }
}
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
    }
}
let NzOptionGroupComponent = /*@__PURE__*/ (() => {
    class NzOptionGroupComponent {
        constructor() {
            this.nzLabel = null;
            this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        ngOnChanges() {
            this.changes.next();
        }
    }
    NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
    NzOptionGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzOptionGroupComponent;
})();
let NzOptionContainerComponent = /*@__PURE__*/ (() => {
    class NzOptionContainerComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.notFoundContent = undefined;
            this.menuItemSelectedIcon = null;
            this.dropdownRender = null;
            this.activatedValue = null;
            this.listOfSelectedValue = [];
            this.mode = 'default';
            this.matchWidth = true;
            this.itemSize = 32;
            this.maxItemLength = 8;
            this.listOfContainerItem = [];
            this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.scrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.scrolledIndex = 0;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-dropdown');
        }
        onItemClick(value) {
            this.itemClick.emit(value);
        }
        onItemHover(value) {
            // TODO: keydown.enter won't activate this value
            this.activatedValue = value;
        }
        trackValue(_index, option) {
            return option.key;
        }
        onScrolledIndexChange(index) {
            this.scrolledIndex = index;
            if (index === this.listOfContainerItem.length - this.maxItemLength) {
                this.scrollToBottom.emit();
            }
        }
        scrollToActivatedValue() {
            const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));
            if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
                this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
            }
        }
        ngOnChanges(changes) {
            const { listOfContainerItem, activatedValue } = changes;
            if (listOfContainerItem || activatedValue) {
                this.scrollToActivatedValue();
            }
        }
        ngAfterViewInit() {
            setTimeout(() => this.scrollToActivatedValue());
        }
    }
    NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzOptionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionContainerComponent, selectors: [["nz-option-container"]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
            }
        }, inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["nzOptionContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]], template: function NzOptionContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfContainerItem.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.matchWidth);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dropdownRender);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgTemplateOutlet"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchCase"], NzOptionItemGroupComponent, NzOptionItemComponent]; }, encapsulation: 2, changeDetection: 0 });
    return NzOptionContainerComponent;
})();
let NzOptionComponent = /*@__PURE__*/ (() => {
    class NzOptionComponent {
        constructor(nzOptionGroupComponent) {
            this.nzOptionGroupComponent = nzOptionGroupComponent;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.groupLabel = null;
            this.nzLabel = null;
            this.nzValue = null;
            this.nzDisabled = false;
            this.nzHide = false;
            this.nzCustomContent = false;
        }
        ngOnInit() {
            if (this.nzOptionGroupComponent) {
                this.nzOptionGroupComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => {
                    this.groupLabel = this.nzOptionGroupComponent.nzLabel;
                });
            }
        }
        ngOnChanges() {
            this.changes.next();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8)); };
    NzOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            }
        }, inputs: { nzLabel: "nzLabel", nzValue: "nzValue", nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent" }, exportAs: ["nzOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzOptionComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzOptionComponent.prototype, "nzHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzOptionComponent.prototype, "nzCustomContent", void 0);
    return NzOptionComponent;
})();
let NzSelectSearchComponent = /*@__PURE__*/ (() => {
    class NzSelectSearchComponent {
        constructor(elementRef, renderer, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.focusMonitor = focusMonitor;
            this.disabled = false;
            this.mirrorSync = false;
            this.showInput = true;
            this.focusTrigger = false;
            this.value = '';
            this.autofocus = false;
            this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.isComposingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-selection-search');
        }
        setCompositionState(isComposing) {
            this.isComposingChange.next(isComposing);
        }
        onValueChange(value) {
            this.value = value;
            this.valueChange.next(value);
            if (this.mirrorSync) {
                this.syncMirrorWidth();
            }
        }
        clearInputValue() {
            const inputDOM = this.inputElement.nativeElement;
            inputDOM.value = '';
            this.onValueChange('');
        }
        syncMirrorWidth() {
            const mirrorDOM = this.mirrorElement.nativeElement;
            const hostDOM = this.elementRef.nativeElement;
            const inputDOM = this.inputElement.nativeElement;
            this.renderer.removeStyle(hostDOM, 'width');
            mirrorDOM.innerHTML = this.renderer.createText(`${inputDOM.value}&nbsp;`);
            this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
        }
        focus() {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        }
        blur() {
            this.inputElement.nativeElement.blur();
        }
        ngOnChanges(changes) {
            const inputDOM = this.inputElement.nativeElement;
            const { focusTrigger, showInput } = changes;
            if (showInput) {
                if (this.showInput) {
                    this.renderer.removeAttribute(inputDOM, 'readonly');
                }
                else {
                    this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
                }
            }
            // IE11 cannot input value if focused before removing readonly
            if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
                inputDOM.focus();
            }
        }
        ngAfterViewInit() {
            if (this.mirrorSync) {
                this.syncMirrorWidth();
            }
            if (this.autofocus) {
                this.focus();
            }
        }
    }
    NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) { return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"])); };
    NzSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectSearchComponent, selectors: [["nz-select-search"]], viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
            }
        }, inputs: { disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"], useValue: false }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]], template: function NzSelectSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onValueChange($event); })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() { return ctx.setCompositionState(true); })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() { return ctx.setCompositionState(false); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.autofocus ? "autofocus" : null);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"]], encapsulation: 2, changeDetection: 0 });
    return NzSelectSearchComponent;
})();
let NzSelectTopControlComponent = /*@__PURE__*/ (() => {
    class NzSelectTopControlComponent {
        constructor(elementRef, noAnimation) {
            this.elementRef = elementRef;
            this.noAnimation = noAnimation;
            this.showSearch = false;
            this.placeHolder = null;
            this.open = false;
            this.maxTagCount = Infinity;
            this.autofocus = false;
            this.disabled = false;
            this.mode = 'default';
            this.customTemplate = null;
            this.maxTagPlaceholder = null;
            this.removeIcon = null;
            this.listOfTopItem = [];
            this.tokenSeparators = [];
            this.tokenize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.inputValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.listOfSlicedItem = [];
            this.isShowPlaceholder = true;
            this.isShowSingleLabel = false;
            this.isComposing = false;
            this.inputValue = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-selector');
        }
        onHostKeydown(e) {
            const inputValue = e.target.value;
            if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["BACKSPACE"] && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
                e.preventDefault();
                this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
            }
        }
        updateTemplateVariable() {
            const isSelectedValueEmpty = this.listOfTopItem.length === 0;
            this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
            this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        }
        isComposingChange(isComposing) {
            this.isComposing = isComposing;
            this.updateTemplateVariable();
        }
        onInputValueChange(value) {
            if (value !== this.inputValue) {
                this.inputValue = value;
                this.updateTemplateVariable();
                this.inputValueChange.emit(value);
                this.tokenSeparate(value, this.tokenSeparators);
            }
        }
        tokenSeparate(inputValue, tokenSeparators) {
            const includesSeparators = (str, separators) => {
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < separators.length; ++i) {
                    if (str.lastIndexOf(separators[i]) > 0) {
                        return true;
                    }
                }
                return false;
            };
            const splitBySeparators = (str, separators) => {
                const reg = new RegExp(`[${separators.join()}]`);
                const array = str.split(reg).filter(token => token);
                return [...new Set(array)];
            };
            if (inputValue &&
                inputValue.length &&
                tokenSeparators.length &&
                this.mode !== 'default' &&
                includesSeparators(inputValue, tokenSeparators)) {
                const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
                this.tokenize.next(listOfLabel);
            }
        }
        clearInputValue() {
            if (this.nzSelectSearchComponent) {
                this.nzSelectSearchComponent.clearInputValue();
            }
        }
        focus() {
            if (this.nzSelectSearchComponent) {
                this.nzSelectSearchComponent.focus();
            }
        }
        blur() {
            if (this.nzSelectSearchComponent) {
                this.nzSelectSearchComponent.blur();
            }
        }
        trackValue(_index, option) {
            return option.nzValue;
        }
        onDeleteItem(item) {
            if (!this.disabled && !item.nzDisabled) {
                this.deleteItem.next(item);
            }
        }
        onAnimationEnd() {
            this.animationEnd.next();
        }
        ngOnChanges(changes) {
            const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
            if (listOfTopItem) {
                this.updateTemplateVariable();
            }
            if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
                const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => {
                    return {
                        nzLabel: o.nzLabel,
                        nzValue: o.nzValue,
                        nzDisabled: o.nzDisabled,
                        contentTemplateOutlet: this.customTemplate,
                        contentTemplateOutletContext: o
                    };
                });
                if (this.listOfTopItem.length > this.maxTagCount) {
                    const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                    const listOfSelectedValue = this.listOfTopItem.map(item => item.nzValue);
                    const exceededItem = {
                        nzLabel: exceededLabel,
                        nzValue: '$$__nz_exceeded_item',
                        nzDisabled: true,
                        contentTemplateOutlet: this.maxTagPlaceholder,
                        contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                    };
                    listOfSlicedItem.push(exceededItem);
                }
                this.listOfSlicedItem = listOfSlicedItem;
            }
        }
    }
    NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], 9)); };
    NzSelectTopControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectTopControlComponent, selectors: [["nz-select-top-control"]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
            }
        }, hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) { return ctx.onHostKeydown($event); });
            }
        }, inputs: { showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", animationEnd: "animationEnd", deleteItem: "deleteItem" }, exportAs: ["nzSelectTopControl"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]], template: function NzSelectTopControlComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 7, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 8, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], NzSelectSearchComponent, NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], NzSelectPlaceholderComponent]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["zoomMotion"]] }, changeDetection: 0 });
    return NzSelectTopControlComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const defaultFilterOption = (searchValue, item) => {
    if (item && item.nzLabel) {
        return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
};
const ɵ0 = defaultFilterOption;
const NZ_CONFIG_MODULE_NAME = 'select';
let NzSelectComponent = /*@__PURE__*/ (() => {
    class NzSelectComponent {
        constructor(nzConfigService, cdr, elementRef, platform, focusMonitor, directionality, noAnimation) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.platform = platform;
            this.focusMonitor = focusMonitor;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzSize = 'default';
            this.nzOptionHeightPx = 32;
            this.nzOptionOverflowSize = 8;
            this.nzDropdownClassName = null;
            this.nzDropdownMatchSelectWidth = true;
            this.nzDropdownStyle = null;
            this.nzNotFoundContent = undefined;
            this.nzPlaceHolder = null;
            this.nzMaxTagCount = Infinity;
            this.nzDropdownRender = null;
            this.nzCustomTemplate = null;
            this.nzSuffixIcon = null;
            this.nzClearIcon = null;
            this.nzRemoveIcon = null;
            this.nzMenuItemSelectedIcon = null;
            this.nzTokenSeparators = [];
            this.nzMaxTagPlaceholder = null;
            this.nzMaxMultipleCount = Infinity;
            this.nzMode = 'default';
            this.nzFilterOption = defaultFilterOption;
            this.compareWith = (o1, o2) => o1 === o2;
            this.nzAllowClear = false;
            this.nzBorderless = false;
            this.nzShowSearch = false;
            this.nzLoading = false;
            this.nzAutoFocus = false;
            this.nzAutoClearSearchValue = true;
            this.nzServerSearch = false;
            this.nzDisabled = false;
            this.nzOpen = false;
            this.nzOptions = [];
            this.nzOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.listOfValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
            this.listOfTemplateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
            this.listOfTagAndTemplateItem = [];
            this.searchValue = '';
            this.isReactiveDriven = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.onChange = () => { };
            this.onTouched = () => { };
            this.dropDownPosition = 'bottom';
            this.triggerWidth = null;
            this.listOfContainerItem = [];
            this.listOfTopItem = [];
            this.activatedValue = null;
            this.listOfValue = [];
            this.focused = false;
            this.dir = 'ltr';
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select');
        }
        set nzShowArrow(value) {
            this._nzShowArrow = value;
        }
        get nzShowArrow() {
            return this._nzShowArrow === undefined ? this.nzMode === 'default' : this._nzShowArrow;
        }
        generateTagItem(value) {
            return {
                nzValue: value,
                nzLabel: value,
                type: 'item'
            };
        }
        onItemClick(value) {
            this.activatedValue = value;
            if (this.nzMode === 'default') {
                if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                    this.updateListOfValue([value]);
                }
                this.setOpenState(false);
            }
            else {
                const targetIndex = this.listOfValue.findIndex(o => this.compareWith(o, value));
                if (targetIndex !== -1) {
                    const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
                    this.updateListOfValue(listOfValueAfterRemoved);
                }
                else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                    const listOfValueAfterAdded = [...this.listOfValue, value];
                    this.updateListOfValue(listOfValueAfterAdded);
                }
                this.focus();
                if (this.nzAutoClearSearchValue) {
                    this.clearInput();
                }
            }
        }
        onItemDelete(item) {
            const listOfSelectedValue = this.listOfValue.filter(v => !this.compareWith(v, item.nzValue));
            this.updateListOfValue(listOfSelectedValue);
            this.clearInput();
        }
        onHostClick() {
            if ((this.nzOpen && this.nzShowSearch) || this.nzDisabled) {
                return;
            }
            this.setOpenState(!this.nzOpen);
        }
        updateListOfContainerItem() {
            let listOfContainerItem = this.listOfTagAndTemplateItem
                .filter(item => !item.nzHide)
                .filter(item => {
                if (!this.nzServerSearch && this.searchValue) {
                    return this.nzFilterOption(this.searchValue, item);
                }
                else {
                    return true;
                }
            });
            if (this.nzMode === 'tags' && this.searchValue) {
                const matchedItem = this.listOfTagAndTemplateItem.find(item => item.nzLabel === this.searchValue);
                if (!matchedItem) {
                    const tagItem = this.generateTagItem(this.searchValue);
                    listOfContainerItem = [tagItem, ...listOfContainerItem];
                    this.activatedValue = tagItem.nzValue;
                }
                else {
                    this.activatedValue = matchedItem.nzValue;
                }
            }
            const activatedItem = listOfContainerItem.find(item => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
            this.activatedValue = (activatedItem && activatedItem.nzValue) || null;
            let listOfGroupLabel = [];
            if (this.isReactiveDriven) {
                listOfGroupLabel = [...new Set(this.nzOptions.filter(o => o.groupLabel).map(o => o.groupLabel))];
            }
            else {
                if (this.listOfNzOptionGroupComponent) {
                    listOfGroupLabel = this.listOfNzOptionGroupComponent.map(o => o.nzLabel);
                }
            }
            /** insert group item **/
            listOfGroupLabel.forEach(label => {
                const index = listOfContainerItem.findIndex(item => label === item.groupLabel);
                if (index > -1) {
                    const groupItem = { groupLabel: label, type: 'group', key: label };
                    listOfContainerItem.splice(index, 0, groupItem);
                }
            });
            this.listOfContainerItem = [...listOfContainerItem];
            this.updateCdkConnectedOverlayPositions();
        }
        clearInput() {
            this.nzSelectTopControlComponent.clearInputValue();
        }
        updateListOfValue(listOfValue) {
            const covertListToModel = (list, mode) => {
                if (mode === 'default') {
                    if (list.length > 0) {
                        return list[0];
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return list;
                }
            };
            const model = covertListToModel(listOfValue, this.nzMode);
            if (this.value !== model) {
                this.listOfValue = listOfValue;
                this.listOfValue$.next(listOfValue);
                this.value = model;
                this.onChange(this.value);
            }
        }
        onTokenSeparate(listOfLabel) {
            const listOfMatchedValue = this.listOfTagAndTemplateItem
                .filter(item => listOfLabel.findIndex(label => label === item.nzLabel) !== -1)
                .map(item => item.nzValue)
                .filter(item => this.listOfValue.findIndex(v => this.compareWith(v, item)) === -1);
            if (this.nzMode === 'multiple') {
                this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
            }
            else if (this.nzMode === 'tags') {
                const listOfUnMatchedLabel = listOfLabel.filter(label => this.listOfTagAndTemplateItem.findIndex(item => item.nzLabel === label) === -1);
                this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
            }
            this.clearInput();
        }
        onOverlayKeyDown(e) {
            if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]) {
                this.setOpenState(false);
            }
        }
        onKeyDown(e) {
            if (this.nzDisabled) {
                return;
            }
            const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter(item => item.type === 'item').filter(item => !item.nzDisabled);
            const activatedIndex = listOfFilteredOptionNotDisabled.findIndex(item => this.compareWith(item.nzValue, this.activatedValue));
            switch (e.keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]:
                    e.preventDefault();
                    if (this.nzOpen) {
                        const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                        this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]:
                    e.preventDefault();
                    if (this.nzOpen) {
                        const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                        this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                    e.preventDefault();
                    if (this.nzOpen) {
                        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isNotNil"])(this.activatedValue)) {
                            this.onItemClick(this.activatedValue);
                        }
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
                    if (!this.nzOpen) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"]:
                    this.setOpenState(false);
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]:
                    /**
                     * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                     */
                    break;
                default:
                    if (!this.nzOpen) {
                        this.setOpenState(true);
                    }
            }
        }
        setOpenState(value) {
            if (this.nzOpen !== value) {
                this.nzOpen = value;
                this.nzOpenChange.emit(value);
                this.onOpenChange();
                this.cdr.markForCheck();
            }
        }
        onOpenChange() {
            this.updateCdkConnectedOverlayStatus();
            this.clearInput();
        }
        onInputValueChange(value) {
            this.searchValue = value;
            this.updateListOfContainerItem();
            this.nzOnSearch.emit(value);
            this.updateCdkConnectedOverlayPositions();
        }
        onClearSelection() {
            this.updateListOfValue([]);
        }
        onClickOutside(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
                this.setOpenState(false);
            }
        }
        focus() {
            this.nzSelectTopControlComponent.focus();
        }
        blur() {
            this.nzSelectTopControlComponent.blur();
        }
        onPositionChange(position) {
            this.dropDownPosition = position.connectionPair.originY;
        }
        updateCdkConnectedOverlayStatus() {
            if (this.platform.isBrowser && this.originElement.nativeElement) {
                this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
            }
        }
        updateCdkConnectedOverlayPositions() {
            if (this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }
        writeValue(modelValue) {
            /** https://github.com/angular/angular/issues/14988 **/
            if (this.value !== modelValue) {
                this.value = modelValue;
                const covertModelToList = (model, mode) => {
                    if (model === null || model === undefined) {
                        return [];
                    }
                    else if (mode === 'default') {
                        return [model];
                    }
                    else {
                        return model;
                    }
                };
                const listOfValue = covertModelToList(modelValue, this.nzMode);
                this.listOfValue = listOfValue;
                this.listOfValue$.next(listOfValue);
                this.cdr.markForCheck();
            }
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        setDisabledState(disabled) {
            this.nzDisabled = disabled;
            if (disabled) {
                this.setOpenState(false);
            }
            this.cdr.markForCheck();
        }
        ngOnChanges(changes) {
            const { nzOpen, nzDisabled, nzOptions } = changes;
            if (nzOpen) {
                this.onOpenChange();
            }
            if (nzDisabled && this.nzDisabled) {
                this.setOpenState(false);
            }
            if (nzOptions) {
                this.isReactiveDriven = true;
                const listOfOptions = this.nzOptions || [];
                const listOfTransformedItem = listOfOptions.map(item => {
                    return {
                        template: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? item.label : null,
                        nzLabel: typeof item.label === 'string' ? item.label : null,
                        nzValue: item.value,
                        nzDisabled: item.disabled || false,
                        nzHide: item.hide || false,
                        nzCustomContent: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
                        groupLabel: item.groupLabel || null,
                        type: 'item',
                        key: item.value
                    };
                });
                this.listOfTemplateItem$.next(listOfTransformedItem);
            }
        }
        ngOnInit() {
            var _a;
            this.focusMonitor
                .monitor(this.elementRef, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(focusOrigin => {
                if (!focusOrigin) {
                    this.focused = false;
                    this.cdr.markForCheck();
                    this.nzBlur.emit();
                    Promise.resolve().then(() => {
                        this.onTouched();
                    });
                }
                else {
                    this.focused = true;
                    this.cdr.markForCheck();
                    this.nzFocus.emit();
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.listOfValue$, this.listOfTemplateItem$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
                const listOfTagItem = listOfSelectedValue
                    .filter(() => this.nzMode === 'tags')
                    .filter(value => listOfTemplateItem.findIndex(o => this.compareWith(o.nzValue, value)) === -1)
                    .map(value => this.listOfTopItem.find(o => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
                this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
                this.listOfTopItem = this.listOfValue
                    .map(v => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find(item => this.compareWith(v, item.nzValue)))
                    .filter(item => !!item);
                this.updateListOfContainerItem();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterViewInit() {
            this.updateCdkConnectedOverlayStatus();
        }
        ngAfterContentInit() {
            if (!this.isReactiveDriven) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...[
                    this.listOfNzOptionComponent.changes,
                    this.listOfNzOptionGroupComponent.changes,
                    ...this.listOfNzOptionComponent.map(option => option.changes),
                    ...this.listOfNzOptionGroupComponent.map(option => option.changes)
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                    .subscribe(() => {
                    const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map(item => {
                        const { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel } = item;
                        return { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel, type: 'item', key: nzValue };
                    });
                    this.listOfTemplateItem$.next(listOfOptionInterface);
                    this.cdr.markForCheck();
                });
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], 9)); };
    NzSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
            }
        }, viewQuery: function NzSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectTopControlComponent, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzOptionGroupComponent, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectTopControlComponent, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
            }
        }, hostVars: 24, hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectComponent_click_HostBindingHandler() { return ctx.onHostClick(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzSize: "nzSize", nzOptionHeightPx: "nzOptionHeightPx", nzOptionOverflowSize: "nzOptionOverflowSize", nzDropdownClassName: "nzDropdownClassName", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzTokenSeparators: "nzTokenSeparators", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzMaxMultipleCount: "nzMaxMultipleCount", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzAllowClear: "nzAllowClear", nzBorderless: "nzBorderless", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzServerSearch: "nzServerSearch", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzOptions: "nzOptions", nzShowArrow: "nzShowArrow" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NzSelectComponent),
                    multi: true
                }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 22, consts: [["cdkOverlayOrigin", "", 3, "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "animationEnd", "deleteItem", "keydown"], ["origin", "cdkOverlayOrigin"], [3, "clearIcon", "clear", 4, "ngIf"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "overlayKeydown", "overlayOutsideClick", "detach", "positionChange"], [3, "clearIcon", "clear"], [3, "loading", "search", "suffixIcon"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]], template: function NzSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) { return ctx.onInputValueChange($event); })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) { return ctx.onTokenSeparate($event); })("animationEnd", function NzSelectComponent_Template_nz_select_top_control_animationEnd_0_listener() { return ctx.updateCdkConnectedOverlayPositions(); })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) { return ctx.onItemDelete($event); })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) { return ctx.onKeyDown($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_clear_2_Template, 1, 1, "nz-select-clear", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_arrow_3_Template, 1, 3, "nz-select-arrow", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayKeydown", function NzSelectComponent_Template_ng_template_overlayKeydown_4_listener($event) { return ctx.onOverlayKeyDown($event); })("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) { return ctx.onClickOutside($event); })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() { return ctx.setOpenState(false); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) { return ctx.onPositionChange($event); });
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
            }
        }, directives: function () { return [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], NzSelectTopControlComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzConnectedOverlayDirective"], NzSelectClearComponent, NzSelectArrowComponent, NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgStyle"]]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["slideMotion"]] }, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzAllowClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzBorderless", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzShowSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzServerSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], NzSelectComponent.prototype, "nzOpen", void 0);
    return NzSelectComponent;
})();
let NzOptionItemGroupComponent = /*@__PURE__*/ (() => {
    class NzOptionItemGroupComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.nzLabel = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-group');
        }
    }
    NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) { return new (t || NzOptionItemGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzOptionItemGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemGroupComponent, selectors: [["nz-option-item-group"]], inputs: { nzLabel: "nzLabel" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzOptionItemGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzOptionItemGroupComponent;
})();
let NzOptionItemComponent = /*@__PURE__*/ (() => {
    class NzOptionItemComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.selected = false;
            this.activated = false;
            this.grouped = false;
            this.customContent = false;
            this.template = null;
            this.disabled = false;
            this.showState = false;
            this.label = null;
            this.value = null;
            this.activatedValue = null;
            this.listOfSelectedValue = [];
            this.icon = null;
            this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-option');
        }
        onHostMouseEnter() {
            if (!this.disabled) {
                this.itemHover.next(this.value);
            }
        }
        onHostClick() {
            if (!this.disabled) {
                this.itemClick.next(this.value);
            }
        }
        ngOnChanges(changes) {
            const { value, activatedValue, listOfSelectedValue } = changes;
            if (value || listOfSelectedValue) {
                this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
            }
            if (value || activatedValue) {
                this.activated = this.compareWith(this.activatedValue, this.value);
            }
        }
    }
    NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) { return new (t || NzOptionItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemComponent, selectors: [["nz-option-item"]], hostVars: 9, hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() { return ctx.onHostMouseEnter(); })("click", function NzOptionItemComponent_click_HostBindingHandler() { return ctx.onHostClick(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
            }
        }, inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzOptionItemComponent;
})();
let NzSelectArrowComponent = /*@__PURE__*/ (() => {
    class NzSelectArrowComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.loading = false;
            this.search = false;
            this.suffixIcon = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-arrow');
        }
    }
    NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) { return new (t || NzSelectArrowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSelectArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectArrowComponent, selectors: [["nz-select-arrow"]], hostVars: 2, hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow-loading", ctx.loading);
            }
        }, inputs: { loading: "loading", search: "search", suffixIcon: "suffixIcon" }, decls: 3, vars: 2, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzSelectArrowComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzSelectArrowComponent;
})();
let NzSelectClearComponent = /*@__PURE__*/ (() => {
    class NzSelectClearComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.clearIcon = null;
            this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-clear');
        }
        onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clear.emit(e);
        }
    }
    NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) { return new (t || NzSelectClearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSelectClearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectClearComponent, selectors: [["nz-select-clear"]], hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
            }
        }, inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, decls: 1, vars: 2, consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]], template: function NzSelectClearComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzSelectClearComponent;
})();
let NzSelectItemComponent = /*@__PURE__*/ (() => {
    class NzSelectItemComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.disabled = false;
            this.label = null;
            this.deletable = false;
            this.removeIcon = null;
            this.contentTemplateOutletContext = null;
            this.contentTemplateOutlet = null;
            this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-selection-item');
        }
        onDelete(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!this.disabled) {
                this.delete.next(e);
            }
        }
    }
    NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) { return new (t || NzSelectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectItemComponent, selectors: [["nz-select-item"]], hostVars: 3, hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item-disabled", ctx.disabled);
            }
        }, inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, decls: 2, vars: 5, consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzSelectItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzSelectItemComponent;
})();
let NzSelectPlaceholderComponent = /*@__PURE__*/ (() => {
    class NzSelectPlaceholderComponent {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.placeholder = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-select-selection-placeholder');
        }
    }
    NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) { return new (t || NzSelectPlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSelectPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectPlaceholderComponent, selectors: [["nz-select-placeholder"]], inputs: { placeholder: "placeholder" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzSelectPlaceholderComponent;
})();
let NzSelectModule = /*@__PURE__*/ (() => {
    class NzSelectModule {
    }
    NzSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSelectModule });
    NzSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["NzI18nModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmptyModule"],
                ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"],
                ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"],
                ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]
            ]] });
    return NzSelectModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSelectModule, { declarations: function () { return [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent]; }, imports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["NzI18nModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconModule"],
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"],
                ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmptyModule"],
                ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"],
                ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"],
                ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]];
        }, exports: function () { return [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]; } });
})();
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

//# sourceMappingURL=ng-zorro-antd-select.js.map


/***/ })

}]);