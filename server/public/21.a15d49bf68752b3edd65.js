(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "H2p9":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-tag/variant-type-tag.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CvcVariantTypeTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypeTagComponent", function() { return CvcVariantTypeTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _variant_type_popover_variant_type_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../variant-type-popover/variant-type-popover.component */ "qOXT");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function CvcVariantTypeTagComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function CvcVariantTypeTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcVariantTypeTagComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/variant-types/", ctx_r0.variantType.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcVariantTypeTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template(rf, ctx) { }
function CvcVariantTypeTagComponent_ng_template_1_nz_tag_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantTypeTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverMouseEnterDelay", 0.5)("nzPopoverContent", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcVariantTypeTagComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-variant-type-popover", 10);
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variantTypeId", ctx_r12.variantType.id);
    }
}
function CvcVariantTypeTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantTypeTagComponent_ng_template_1_nz_tag_0_Template, 2, 3, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantTypeTagComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.enablePopover)("ngIfElse", _r5);
    }
}
function CvcVariantTypeTagComponent_ng_template_3_ng_template_0_Template(rf, ctx) { }
function CvcVariantTypeTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantTypeTagComponent_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcVariantTypeTagComponent_ng_template_5_ng_template_1_Template(rf, ctx) { }
function CvcVariantTypeTagComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantTypeTagComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcVariantTypeTagComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.variantType.name, "\n");
    }
}
let CvcVariantTypeTagComponent = /*@__PURE__*/ (() => {
    class CvcVariantTypeTagComponent {
        constructor() {
            this.linked = true;
            this.enablePopover = true;
        }
        ngOnInit() {
            if (this.variantType === undefined) {
                throw new Error('cvc-variant-type-tag requires LinkableVariantType input, none supplied.');
            }
        }
    }
    CvcVariantTypeTagComponent.ɵfac = function CvcVariantTypeTagComponent_Factory(t) { return new (t || CvcVariantTypeTagComponent)(); };
    CvcVariantTypeTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcVariantTypeTagComponent, selectors: [["cvc-variant-type-tag"]], inputs: { variantType: "variantType", linked: "linked", enablePopover: "enablePopover" }, decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["tag", ""], ["unlinked", ""], ["noPopover", ""], ["tagContent", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-popover", "", "nzPopoverPlacement", "right", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent", 4, "ngIf", "ngIfElse"], ["variantTypePopover", ""], ["nz-popover", "", "nzPopoverPlacement", "right", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent"], [3, "variantTypeId"], ["nz-icon", "", "nzType", "civic-varianttype", "nzTheme", "twotone", "nzTwotoneColor", "#33B358"]], template: function CvcVariantTypeTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcVariantTypeTagComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcVariantTypeTagComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcVariantTypeTagComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcVariantTypeTagComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcVariantTypeTagComponent_ng_template_7_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linked)("ngIfElse", _r3);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], _variant_type_popover_variant_type_popover_component__WEBPACK_IMPORTED_MODULE_5__["CvcVariantTypePopoverComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcVariantTypeTagComponent;
})();


/***/ }),

/***/ "qOXT":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/variant-types/variant-type-popover/variant-type-popover.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CvcVariantTypePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcVariantTypePopoverComponent", function() { return CvcVariantTypePopoverComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");









function CvcVariantTypePopoverComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const vt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vt_r1.name, " ");
    }
}
function CvcVariantTypePopoverComponent_ng_container_1_ng_template_4_cvc_link_tag_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cvc-link-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const vt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", vt_r1.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vt_r1.soid, " ");
    }
}
function CvcVariantTypePopoverComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CvcVariantTypePopoverComponent_ng_container_1_ng_template_4_cvc_link_tag_0_Template, 2, 2, "cvc-link-tag", 8);
    }
    if (rf & 2) {
        const vt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vt_r1.soid != "N/A");
    }
}
function CvcVariantTypePopoverComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CvcVariantTypePopoverComponent_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcVariantTypePopoverComponent_ng_container_1_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-descriptions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const vt_r1 = ctx.ngIf;
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r2)("nzExtra", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vt_r1.variantCount, " ");
    }
}
let CvcVariantTypePopoverComponent = /*@__PURE__*/ (() => {
    class CvcVariantTypePopoverComponent {
        constructor(gql) {
            this.gql = gql;
        }
        ngOnInit() {
            if (this.variantTypeId == undefined) {
                throw new Error("cvc-variant-type-popover requires valid variantTypeId input.");
            }
            this.variantType$ = this.gql.watch({ variantTypeId: this.variantTypeId })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.variantTypePopover));
        }
    }
    CvcVariantTypePopoverComponent.ɵfac = function CvcVariantTypePopoverComponent_Factory(t) { return new (t || CvcVariantTypePopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["VariantTypePopoverGQL"])); };
    CvcVariantTypePopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcVariantTypePopoverComponent, selectors: [["cvc-variant-type-popover"]], inputs: { variantTypeId: "variantTypeId" }, decls: 3, vars: 3, consts: [["id", "popover-content"], [4, "ngIf"], ["nzBordered", "false", "id", "card-content", 3, "nzTitle", "nzExtra"], ["cardTitle", ""], ["linkout", ""], ["nzSize", "small", "nzBordered", "true", 3, "nzColumn"], ["nzTitle", "Variants", "nzSpan", "2"], ["nz-icon", "", "nzType", "civic-varianttype", 1, "variant-type-tag-icon"], ["tooltip", "View on SequenceOntology.org", 3, "href", 4, "ngIf"], ["tooltip", "View on SequenceOntology.org", 3, "href"]], template: function CvcVariantTypePopoverComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvcVariantTypePopoverComponent_ng_container_1_Template, 9, 4, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.variantType$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__["NzDescriptionsItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_7__["CvcLinkTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: -8px -12px;\n}\n[_nghost-%COMP%]     .ant-card-body {\n  padding: 0;\n  margin-top: 1px;\n}\n[_nghost-%COMP%]     .ant-descriptions-view {\n  border: none;\n}\n[_nghost-%COMP%]     #entity-child-counts {\n  border-top: 1px solid #f0f0f0;\n  padding: 8px;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space {\n  width: 100%;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag {\n  margin-right: 0;\n}\n.popover-text[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n#popover-content[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 500px;\n  min-height: 125px;\n}"] });
    return CvcVariantTypePopoverComponent;
})();


/***/ })

}]);