(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "0X8K":
/*!***********************************************************************!*\
  !*** ./src/app/components/comments/comment-tag/comment-tag.module.ts ***!
  \***********************************************************************/
/*! exports provided: CvcCommentTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentTagModule", function() { return CvcCommentTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _comment_popover_comment_popover_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment-popover/comment-popover.module */ "EOWM");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CvcCommentTagModule = /*@__PURE__*/ (() => {
    class CvcCommentTagModule {
    }
    CvcCommentTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CvcCommentTagModule });
    CvcCommentTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CvcCommentTagModule_Factory(t) { return new (t || CvcCommentTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["CvcPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__["NzPopoverModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                _comment_popover_comment_popover_module__WEBPACK_IMPORTED_MODULE_2__["CvcCommentPopoverModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"]
            ]] });
    return CvcCommentTagModule;
})();


/***/ }),

/***/ "D08S":
/*!**************************************************************************!*\
  !*** ./src/app/components/comments/comment-tag/comment-tag.component.ts ***!
  \**************************************************************************/
/*! exports provided: CvcCommentTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentTagComponent", function() { return CvcCommentTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _comment_popover_comment_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment-popover/comment-popover.component */ "i0Ea");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pipes/typename-to-route-pipe */ "I32T");








function CvcCommentTagComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
function CvcCommentTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "typenameToRoute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentTagComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.subject.__typename), "/", ctx_r0.subject.id, "/comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcCommentTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template(rf, ctx) { }
function CvcCommentTagComponent_ng_template_1_nz_tag_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentTagComponent_ng_template_1_nz_tag_0_ng_template_1_Template, 0, 0, "ng-template", 6);
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
function CvcCommentTagComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-comment-popover", 10);
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentId", ctx_r12.comment.id);
    }
}
function CvcCommentTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcCommentTagComponent_ng_template_1_nz_tag_0_Template, 2, 3, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentTagComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.enablePopover)("ngIfElse", _r3);
    }
}
function CvcCommentTagComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CvcCommentTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentTagComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcCommentTagComponent_ng_template_5_ng_template_0_Template(rf, ctx) { }
function CvcCommentTagComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcCommentTagComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
}
function CvcCommentTagComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.comment.name, "\n");
    }
}
let CvcCommentTagComponent = /*@__PURE__*/ (() => {
    class CvcCommentTagComponent {
        constructor() {
            this.enablePopover = true;
        }
        ngOnInit() {
            if (this.comment === undefined) {
                throw new Error('cvc-comment-tag requires LinkableComment input, none supplied.');
            }
        }
    }
    CvcCommentTagComponent.ɵfac = function CvcCommentTagComponent_Factory(t) { return new (t || CvcCommentTagComponent)(); };
    CvcCommentTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcCommentTagComponent, selectors: [["cvc-comment-tag"]], inputs: { comment: "comment", subject: "subject", enablePopover: "enablePopover" }, decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["tag", ""], ["noPopover", ""], ["unlinked", ""], ["tagContent", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-popover", "", "nzPopoverPlacement", "right", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent", 4, "ngIf", "ngIfElse"], ["commentPopover", ""], ["nz-popover", "", "nzPopoverPlacement", "right", "nzPopoverTrigger", "hover", 3, "nzPopoverMouseEnterDelay", "nzPopoverContent"], [3, "commentId"], ["nz-icon", "", "nzType", "civic-comment", "nzTheme", "twotone", "nzTwotoneColor", "#44D8EF"]], template: function CvcCommentTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcCommentTagComponent_ng_container_0_Template, 4, 5, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcCommentTagComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcCommentTagComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcCommentTagComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcCommentTagComponent_ng_template_7_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subject)("ngIfElse", _r5);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], _comment_popover_comment_popover_component__WEBPACK_IMPORTED_MODULE_5__["CvcCommentPopoverComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], pipes: [_core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_7__["TypenameToRoutePipe"]], styles: [""] });
    return CvcCommentTagComponent;
})();


/***/ }),

/***/ "EOWM":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comments/comment-popover/comment-popover.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CvcCommentPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentPopoverModule", function() { return CvcCommentPopoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













let CvcCommentPopoverModule = /*@__PURE__*/ (() => {
    class CvcCommentPopoverModule {
    }
    CvcCommentPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CvcCommentPopoverModule });
    CvcCommentPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function CvcCommentPopoverModule_Factory(t) { return new (t || CvcCommentPopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_9__["CvcGeneTagModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcUserTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_3__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcEvidenceTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcEvidenceTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcVariantTagModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_6__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_10__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_6__["TimeagoFormatter"] } }),
            ]] });
    return CvcCommentPopoverModule;
})();


/***/ }),

/***/ "IXp7":
/*!**************************************************************!*\
  !*** ./src/app/components/flags/flag-tag/flag-tag.module.ts ***!
  \**************************************************************/
/*! exports provided: CvcFlagTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagTagModule", function() { return CvcFlagTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcFlagTagModule = /*@__PURE__*/ (() => {
    class CvcFlagTagModule {
    }
    CvcFlagTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcFlagTagModule });
    CvcFlagTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcFlagTagModule_Factory(t) { return new (t || CvcFlagTagModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__["NzTagModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["CvcPipesModule"]
            ]] });
    return CvcFlagTagModule;
})();


/***/ }),

/***/ "YNW6":
/*!*****************************************************************!*\
  !*** ./src/app/components/flags/flag-tag/flag-tag.component.ts ***!
  \*****************************************************************/
/*! exports provided: CvcFlagTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFlagTagComponent", function() { return CvcFlagTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/typename-to-route-pipe */ "I32T");






function CvcFlagTagComponent_ng_container_0_ng_template_4_Template(rf, ctx) { }
function CvcFlagTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "typenameToRoute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcFlagTagComponent_ng_container_0_ng_template_4_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.subject.__typename), "/", ctx_r0.subject.id, "/flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcFlagTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.flag.name, "\n");
    }
}
function CvcFlagTagComponent_ng_template_3_ng_template_0_Template(rf, ctx) { }
function CvcFlagTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcFlagTagComponent_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 4);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
let CvcFlagTagComponent = /*@__PURE__*/ (() => {
    class CvcFlagTagComponent {
        constructor() { }
        ngOnInit() {
            if (this.flag === undefined) {
                throw new Error('cvc-flag-tag requires LinkableFlag input, none supplied.');
            }
        }
    }
    CvcFlagTagComponent.ɵfac = function CvcFlagTagComponent_Factory(t) { return new (t || CvcFlagTagComponent)(); };
    CvcFlagTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcFlagTagComponent, selectors: [["cvc-flag-tag"]], inputs: { flag: "flag", subject: "subject" }, decls: 5, vars: 1, consts: [[4, "ngIfNoSubject", "ngIf"], ["flagTemplate", ""], ["noSubject", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "civic-flag", "nzTheme", "twotone", "nzTwotoneColor", "#E24759"]], template: function CvcFlagTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcFlagTagComponent_ng_container_0_Template, 5, 5, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcFlagTagComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcFlagTagComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subject);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], pipes: [_core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_5__["TypenameToRoutePipe"]], styles: [""] });
    return CvcFlagTagComponent;
})();


/***/ }),

/***/ "YXbD":
/*!***************************************************************************!*\
  !*** ./src/app/components/events/event-timeline/event-timeline.module.ts ***!
  \***************************************************************************/
/*! exports provided: CvcEventTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventTimelineModule", function() { return CvcEventTimelineModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_components_comments_comment_tag_comment_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/comments/comment-tag/comment-tag.module */ "0X8K");
/* harmony import */ var _app_components_flags_flag_tag_flag_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/flags/flag-tag/flag-tag.module */ "IXp7");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/components/revisions/revision-tag/revision-tag.module */ "OwZK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _event_timeline_item_event_timeline_item_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../event-timeline-item/event-timeline-item-module */ "q/Zg");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























let CvcEventTimelineModule = /*@__PURE__*/ (() => {
    class CvcEventTimelineModule {
    }
    CvcEventTimelineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: CvcEventTimelineModule });
    CvcEventTimelineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function CvcEventTimelineModule_Factory(t) { return new (t || CvcEventTimelineModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__["NzTypographyModule"],
                ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_14__["NzTimelineModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzGridModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_13__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_20__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_13__["TimeagoFormatter"] } }),
                _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_16__["CvcRevisionTagModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcUserTagModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["CvcPipesModule"],
                _app_components_comments_comment_tag_comment_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcCommentTagModule"],
                _app_components_flags_flag_tag_flag_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcFlagTagModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_7__["CvcGeneTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_8__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_9__["CvcEvidenceTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_10__["CvcVariantTagModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_11__["CvcOrganizationTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_18__["CvcSourceTagModule"],
                _event_timeline_item_event_timeline_item_module__WEBPACK_IMPORTED_MODULE_19__["CvcEventTimelineItemModule"],
            ]] });
    return CvcEventTimelineModule;
})();


/***/ }),

/***/ "bGJW":
/*!************************************************************!*\
  !*** ./src/app/core/pipes/preposition-for-subject-pipe.ts ***!
  \************************************************************/
/*! exports provided: PrepositionForSubjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepositionForSubjectPipe", function() { return PrepositionForSubjectPipe; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PrepositionForSubjectPipe = /*@__PURE__*/ (() => {
    class PrepositionForSubjectPipe {
        transform(action) {
            switch (action) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Commented):
                    return 'to';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuggested):
                    return 'to';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionAccepted):
                    return 'to';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionRejected):
                    return 'to';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuperseded):
                    return 'to';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Flagged):
                    return 'on';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].FlagResolved):
                    return 'on';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].PublicationSuggested):
                    return '';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].CuratedSourceSuggestion):
                    return '';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RejectedSourceSuggestion):
                    return '';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RequeuedSourceSuggestion):
                    return '';
                default:
                    throw new Error('Not handling all event action types yet ' + action);
            }
        }
    }
    PrepositionForSubjectPipe.ɵfac = function PrepositionForSubjectPipe_Factory(t) { return new (t || PrepositionForSubjectPipe)(); };
    PrepositionForSubjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "prepositionForSubject", type: PrepositionForSubjectPipe, pure: true });
    return PrepositionForSubjectPipe;
})();


/***/ }),

/***/ "bbWt":
/*!***************************************************************!*\
  !*** ./src/app/core/pipes/icon-name-for-event-action-pipe.ts ***!
  \***************************************************************/
/*! exports provided: IconNameForEventActionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconNameForEventActionPipe", function() { return IconNameForEventActionPipe; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let IconNameForEventActionPipe = /*@__PURE__*/ (() => {
    class IconNameForEventActionPipe {
        transform(a) {
            switch (a) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Commented):
                    return 'civic-comment';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuggested):
                    return 'civic-revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionAccepted):
                    return 'civic-revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionRejected):
                    return 'civic-revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuperseded):
                    return 'civic-revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Flagged):
                    return 'civic-flag';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].FlagResolved):
                    return 'civic-flag';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionSubmitted):
                    return 'civic-assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionAccepted):
                    return 'civic-assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionRejected):
                    return 'civic-assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Submitted):
                    return 'civic-evidence';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Accepted):
                    return 'civic-evidence';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Rejected):
                    return 'civic-evidence';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].PublicationSuggested):
                    return 'file-add';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].CuratedSourceSuggestion):
                    return 'file-add';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RejectedSourceSuggestion):
                    return 'file-add';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RequeuedSourceSuggestion):
                    return 'file-add';
                default:
                    throw new Error('Not handling all event action types yet' + a);
            }
        }
    }
    IconNameForEventActionPipe.ɵfac = function IconNameForEventActionPipe_Factory(t) { return new (t || IconNameForEventActionPipe)(); };
    IconNameForEventActionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "iconNameForEventAction", type: IconNameForEventActionPipe, pure: true });
    return IconNameForEventActionPipe;
})();


/***/ }),

/***/ "e5/R":
/*!*******************************************************************!*\
  !*** ./src/app/components/events/event-feed/event-feed.module.ts ***!
  \*******************************************************************/
/*! exports provided: CvcEventFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventFeedModule", function() { return CvcEventFeedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _event_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-feed.component */ "ktE2");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _event_timeline_event_timeline_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../event-timeline/event-timeline.module */ "YXbD");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _event_timeline_event_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../event-timeline/event-timeline.component */ "i/5l");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/pipes/icon-name-for-subscribable-entity */ "lpb+");




























let CvcEventFeedModule = /*@__PURE__*/ (() => {
    class CvcEventFeedModule {
    }
    CvcEventFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CvcEventFeedModule });
    CvcEventFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function CvcEventFeedModule_Factory(t) { return new (t || CvcEventFeedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
                ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_7__["NzSwitchModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                _event_timeline_event_timeline_module__WEBPACK_IMPORTED_MODULE_10__["CvcEventTimelineModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["CvcPipesModule"]
            ]] });
    return CvcEventFeedModule;
})();
_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_event_feed_component__WEBPACK_IMPORTED_MODULE_1__["CvcEventFeedComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_7__["NzSwitchComponent"], _event_timeline_event_timeline_component__WEBPACK_IMPORTED_MODULE_15__["CvcEventTimelineComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"]], [_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["PushPipe"], _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_17__["IconNameForSubscribableEntity"]]);


/***/ }),

/***/ "i/5l":
/*!******************************************************************************!*\
  !*** ./src/app/components/events/event-timeline/event-timeline.component.ts ***!
  \******************************************************************************/
/*! exports provided: CvcEventTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventTimelineComponent", function() { return CvcEventTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var _event_timeline_item_event_timeline_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-timeline-item/event-timeline-item.component */ "itd6");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _core_pipes_icon_name_for_event_action_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/pipes/icon-name-for-event-action-pipe */ "bbWt");







function CvcEventTimelineComponent_nz_timeline_0_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "iconNameForEventAction");
    }
    if (rf & 2) {
        const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, event_r2.action));
    }
}
function CvcEventTimelineComponent_nz_timeline_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-timeline-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineComponent_nz_timeline_0_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cvc-event-timeline-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const event_r2 = ctx.$implicit;
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDot", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r2)("tagDisplay", ctx_r1.tagDisplay);
    }
}
function CvcEventTimelineComponent_nz_timeline_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcEventTimelineComponent_nz_timeline_0_ng_container_1_Template, 5, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.events);
    }
}
let CvcEventTimelineComponent = /*@__PURE__*/ (() => {
    class CvcEventTimelineComponent {
        constructor() {
            this.tagDisplay = "displayAll";
        }
        ngOnInit() {
            if (this.events === undefined) {
                throw new Error('cvc-feed-item component requires array of EventFeedNodeFragment input.');
            }
        }
    }
    CvcEventTimelineComponent.ɵfac = function CvcEventTimelineComponent_Factory(t) { return new (t || CvcEventTimelineComponent)(); };
    CvcEventTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcEventTimelineComponent, selectors: [["cvc-event-timeline"]], inputs: { events: "events", tagDisplay: "tagDisplay" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzDot"], ["timelineDotTemplate", ""], [3, "event", "tagDisplay"], ["nz-icon", "", "nzTheme", "twotone", 1, "item-icon", 3, "nzType"]], template: function CvcEventTimelineComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcEventTimelineComponent_nz_timeline_0_Template, 2, 1, "nz-timeline", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.events == null ? null : ctx.events.length);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_2__["NzTimelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_2__["NzTimelineItemComponent"], _event_timeline_item_event_timeline_item_component__WEBPACK_IMPORTED_MODULE_3__["CvcEventTimelineItemComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], pipes: [_core_pipes_icon_name_for_event_action_pipe__WEBPACK_IMPORTED_MODULE_6__["IconNameForEventActionPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .timeline-item[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\nnz-timeline[_ngcontent-%COMP%]     ul li:last-child {\n  padding-bottom: 0;\n}\nnz-timeline[_ngcontent-%COMP%]     ul li:last-child .ant-timeline-item-content {\n  min-height: 0;\n  padding-bottom: 8px;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.comment-title[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n.comment-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.comment-card[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return CvcEventTimelineComponent;
})();


/***/ }),

/***/ "i0Ea":
/*!**********************************************************************************!*\
  !*** ./src/app/components/comments/comment-popover/comment-popover.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CvcCommentPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcCommentPopoverComponent", function() { return CvcCommentPopoverComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assertions/assertions-tag/assertion-tag.component */ "u+rr");
/* harmony import */ var _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../evidence/evidence-tag/evidence-tag.component */ "PH4A");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-timeago */ "twue");













function CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_gene_tag_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-gene-tag", 15);
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("gene", c_r1.commentable);
    }
}
function CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_assertion_tag_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-assertion-tag", 16);
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("assertion", c_r1.commentable);
    }
}
function CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_evidence_tag_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-evidence-tag", 17);
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("evidence", c_r1.commentable);
    }
}
function CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_variant_tag_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cvc-variant-tag", 18);
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("variant", c_r1.commentable);
    }
}
function CvcCommentPopoverComponent_ng_container_1_ng_template_2_span_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.commentable.name);
    }
}
function CvcCommentPopoverComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-user-tag", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "commented on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_gene_tag_4_Template, 1, 2, "cvc-gene-tag", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_assertion_tag_5_Template, 1, 2, "cvc-assertion-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_evidence_tag_6_Template, 1, 2, "cvc-evidence-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CvcCommentPopoverComponent_ng_container_1_ng_template_2_cvc_variant_tag_7_Template, 1, 2, "cvc-variant-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CvcCommentPopoverComponent_ng_container_1_ng_template_2_span_8_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enablePopover", false)("user", c_r1.commenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", c_r1.commentable.__typename);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Gene");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Assertion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "EvidenceItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, c_r1.createdAt), " ");
    }
}
function CvcCommentPopoverComponent_ng_container_1_p_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.title);
    }
}
function CvcCommentPopoverComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CvcCommentPopoverComponent_ng_container_1_ng_template_2_Template, 11, 10, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CvcCommentPopoverComponent_ng_container_1_p_7_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const c_r1 = ctx.ngIf;
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", c_r1.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.comment, " ");
    }
}
let CvcCommentPopoverComponent = /*@__PURE__*/ (() => {
    class CvcCommentPopoverComponent {
        constructor(gql) {
            this.gql = gql;
        }
        ngOnInit() {
            if (this.commentId == undefined) {
                throw new Error("cvc-comment-popover requires valid commentId input.");
            }
            this.comment$ = this.gql.watch({ commentId: this.commentId })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'comment'));
        }
    }
    CvcCommentPopoverComponent.ɵfac = function CvcCommentPopoverComponent_Factory(t) { return new (t || CvcCommentPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["CommentPopoverGQL"])); };
    CvcCommentPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcCommentPopoverComponent, selectors: [["cvc-comment-popover"]], inputs: { commentId: "commentId" }, decls: 3, vars: 3, consts: [["id", "popover-content"], [4, "ngIf"], ["nzBordered", "false", "id", "card-content", 3, "nzTitle"], ["cardTitle", ""], ["nzSpan", "24"], [1, "popover-text"], ["nz-typography", "", 4, "ngIf"], [1, "comment-card-title"], [3, "enablePopover", "user"], [3, "ngSwitch"], [3, "enablePopover", "gene", 4, "ngSwitchCase"], [3, "enablePopover", "assertion", 4, "ngSwitchCase"], [3, "enablePopover", "evidence", 4, "ngSwitchCase"], [3, "enablePopover", "variant", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "enablePopover", "gene"], [3, "enablePopover", "assertion"], [3, "enablePopover", "evidence"], [3, "enablePopover", "variant"], ["nz-typography", ""]], template: function CvcCommentPopoverComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvcCommentPopoverComponent_ng_container_1_Template, 10, 3, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.comment$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_6__["CvcUserTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_7__["CvcGeneTagComponent"], _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcAssertionTagComponent"], _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcEvidenceTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcVariantTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: -8px -12px;\n}\n[_nghost-%COMP%]     .ant-card-body {\n  padding: 0;\n  margin-top: 1px;\n}\n[_nghost-%COMP%]     .ant-descriptions-view {\n  border: none;\n}\n[_nghost-%COMP%]     #entity-child-counts {\n  border-top: 1px solid #f0f0f0;\n  padding: 8px;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space {\n  width: 100%;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag {\n  margin-right: 0;\n}\n.popover-text[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n#popover-content[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 500px;\n  min-height: 125px;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.comment-card-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n}"] });
    return CvcCommentPopoverComponent;
})();


/***/ }),

/***/ "itd6":
/*!****************************************************************************************!*\
  !*** ./src/app/components/events/event-timeline-item/event-timeline-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CvcEventTimelineItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventTimelineItemComponent", function() { return CvcEventTimelineItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/user-tag/user-tag.component */ "UPlJ");
/* harmony import */ var _revisions_revision_tag_revision_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../revisions/revision-tag/revision-tag.component */ "urcv");
/* harmony import */ var _comments_comment_tag_comment_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comments/comment-tag/comment-tag.component */ "D08S");
/* harmony import */ var _flags_flag_tag_flag_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../flags/flag-tag/flag-tag.component */ "YNW6");
/* harmony import */ var _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../genes/gene-tag/gene-tag.component */ "S0Et");
/* harmony import */ var _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assertions/assertions-tag/assertion-tag.component */ "u+rr");
/* harmony import */ var _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../evidence/evidence-tag/evidence-tag.component */ "PH4A");
/* harmony import */ var _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../variants/variant-tag/variant-tag.component */ "ifvR");
/* harmony import */ var _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../organizations/organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var _core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/pipes/event-verbiage-pipe */ "3mrq");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _core_pipes_preposition_for_subject_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/pipes/preposition-for-subject-pipe */ "bGJW");

















function CvcEventTimelineItemComponent_nz_row_0_cvc_user_tag_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-user-tag", 10);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r3.event.originatingUser);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_2_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prepositionForSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r12.event.action), "\u00A0");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-revision-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_2_span_2_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("revision", object_r7)("subject", ctx_r8.event.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.tagDisplay != "hideSubject");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_3_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prepositionForSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r14.event.action), "\u00A0");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-comment-tag", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_3_span_2_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", object_r7)("subject", ctx_r9.event.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.tagDisplay != "hideSubject");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_4_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prepositionForSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r16.event.action), "\u00A0");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-flag-tag", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_4_span_2_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flag", object_r7)("subject", ctx_r10.event.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.tagDisplay != "hideSubject");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_5_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prepositionForSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r18.event.action), "\u00A0");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_5_span_2_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", object_r7.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.tagDisplay != "hideSubject");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_2_Template, 3, 3, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_3_Template, 3, 3, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_4_Template, 3, 3, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_span_5_Template, 3, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const object_r7 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", object_r7.__typename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Revision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "SourceSuggestion");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_gene_tag_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-gene-tag", 22);
    }
    if (rf & 2) {
        const subject_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gene", subject_r20);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_assertion_tag_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-assertion-tag", 23);
    }
    if (rf & 2) {
        const subject_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("assertion", subject_r20);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_evidence_tag_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-evidence-tag", 24);
    }
    if (rf & 2) {
        const subject_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("evidence", subject_r20);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_variant_tag_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-variant-tag", 25);
    }
    if (rf & 2) {
        const subject_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", subject_r20);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_span_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const subject_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r20.name);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_gene_tag_1_Template, 1, 1, "cvc-gene-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_assertion_tag_2_Template, 1, 1, "cvc-assertion-tag", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_evidence_tag_3_Template, 1, 1, "cvc-evidence-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_cvc_variant_tag_4_Template, 1, 1, "cvc-variant-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_span_5_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_span_6_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const subject_r20 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", subject_r20.__typename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Gene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Assertion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "EvidenceItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Source");
    }
}
function CvcEventTimelineItemComponent_nz_row_0_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "for\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-organization-tag", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const org_r32 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("org", org_r32);
    }
}
function CvcEventTimelineItemComponent_nz_row_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvcEventTimelineItemComponent_nz_row_0_cvc_user_tag_2_Template, 1, 1, "cvc-user-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "eventVerbiage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvcEventTimelineItemComponent_nz_row_0_ng_container_6_Template, 6, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcEventTimelineItemComponent_nz_row_0_ng_container_7_Template, 7, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvcEventTimelineItemComponent_nz_row_0_ng_container_8_Template, 4, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tagDisplay != "hideUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, ctx_r0.event.action, "feed"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.originatingObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tagDisplay != "hideSubject" && ctx_r0.event.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tagDisplay != "hideOrg" && ctx_r0.event.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx_r0.event.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, ctx_r0.event.createdAt), " ");
    }
}
function CvcEventTimelineItemComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Event database entry is malformed and cannot be displayed\n");
    }
}
let CvcEventTimelineItemComponent = /*@__PURE__*/ (() => {
    class CvcEventTimelineItemComponent {
        constructor() {
            this.tagDisplay = "displayAll";
        }
        ngOnInit() {
            if (this.event === undefined) {
                throw new Error('cvc-timeline-item component requires an EventFeedNodeFragment input.');
            }
        }
    }
    CvcEventTimelineItemComponent.ɵfac = function CvcEventTimelineItemComponent_Factory(t) { return new (t || CvcEventTimelineItemComponent)(); };
    CvcEventTimelineItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcEventTimelineItemComponent, selectors: [["cvc-event-timeline-item"]], inputs: { event: "event", tagDisplay: "tagDisplay" }, decls: 3, vars: 2, consts: [["class", "timeline-item", 4, "ngIf", "ngIfElse"], ["noOriginating", ""], [1, "timeline-item"], ["nzFlex", "auto", 1, "description"], [3, "user", 4, "ngIf"], ["nz-typography", ""], [4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], ["nzFlex", "100px", 1, "timestamp"], ["nz-tooltip", "", "nzTooltipPlacement", "top", 3, "nzTooltipTitle"], [3, "user"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "revision", "subject"], ["nz-typography", "", 4, "ngIf"], [3, "comment", "subject"], [3, "flag", "subject"], [3, "gene", 4, "ngSwitchCase"], [3, "assertion", 4, "ngSwitchCase"], [3, "evidence", 4, "ngSwitchCase"], [3, "variant", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "gene"], [3, "assertion"], [3, "evidence"], [3, "variant"], [3, "org"]], template: function CvcEventTimelineItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcEventTimelineItemComponent_nz_row_0_Template, 14, 14, "nz-row", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcEventTimelineItemComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.originatingObject)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__["NzTypographyComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], _users_user_tag_user_tag_component__WEBPACK_IMPORTED_MODULE_5__["CvcUserTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _revisions_revision_tag_revision_tag_component__WEBPACK_IMPORTED_MODULE_6__["CvcRevisionTagComponent"], _comments_comment_tag_comment_tag_component__WEBPACK_IMPORTED_MODULE_7__["CvcCommentTagComponent"], _flags_flag_tag_flag_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcFlagTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _genes_gene_tag_gene_tag_component__WEBPACK_IMPORTED_MODULE_9__["CvcGeneTagComponent"], _assertions_assertions_tag_assertion_tag_component__WEBPACK_IMPORTED_MODULE_10__["CvcAssertionTagComponent"], _evidence_evidence_tag_evidence_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcEvidenceTagComponent"], _variants_variant_tag_variant_tag_component__WEBPACK_IMPORTED_MODULE_12__["CvcVariantTagComponent"], _organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_13__["CvcOrganizationTagComponent"]], pipes: [_core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_14__["EventVerbiagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_15__["TimeagoPipe"], _core_pipes_preposition_for_subject_pipe__WEBPACK_IMPORTED_MODULE_16__["PrepositionForSubjectPipe"]], styles: [""] });
    return CvcEventTimelineItemComponent;
})();


/***/ }),

/***/ "ktE2":
/*!**********************************************************************!*\
  !*** ./src/app/components/events/event-feed/event-feed.component.ts ***!
  \**********************************************************************/
/*! exports provided: CvcEventFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventFeedComponent", function() { return CvcEventFeedComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");



function CvcEventFeedComponent_ng_container_0_ng_template_2_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "iconNameForSubscribableEntity");
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r8.subscribable.entityType));
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CvcEventFeedComponent_ng_container_0_ng_template_2_i_0_Template, 2, 3, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.subscribable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.subscribableName, " Events ");
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_option_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 12);
    }
    if (rf & 2) {
        const a_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", a_r13.id)("nzValue", a_r13.id);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_nz_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 12);
    }
    if (rf & 2) {
        const p_r15 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", p_r15.displayName)("nzValue", p_r15.id);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.onParticipantSelected($event); })("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.participantFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_nz_option_4_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.participantFilter)("nzDropdownMatchSelectWidth", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx_r10.participants$));
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_nz_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 12);
    }
    if (rf & 2) {
        const o_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", o_r20.name)("nzValue", o_r20.id);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.onOrganizationSelected($event); })("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.organizationFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_nz_option_4_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.organizationFilter)("nzDropdownMatchSelectWidth", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx_r11.organizations$));
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_span_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Show Child Events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-switch", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_span_11_Template_nz_switch_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.showChildren = $event; })("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_span_11_Template_nz_switch_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.onShowChildrenToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.showChildren);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.onActionSelected($event); })("ngModelChange", function CvcEventFeedComponent_ng_container_0_ng_template_4_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.actionFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CvcEventFeedComponent_ng_container_0_ng_template_4_nz_option_7_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_9_Template, 6, 5, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CvcEventFeedComponent_ng_container_0_ng_template_4_nz_form_item_10_Template, 6, 5, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CvcEventFeedComponent_ng_container_0_ng_template_4_span_11_Template, 3, 1, "span", 0);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.actionFilter)("nzDropdownMatchSelectWidth", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, ctx_r5.actions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.organizationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.subscribable);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-event-timeline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const events_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("events", events_r1)("tagDisplay", ctx_r6.tagDisplay);
    }
}
function CvcEventFeedComponent_ng_container_0_ng_container_9_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CvcEventFeedComponent_ng_container_0_ng_container_9_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const pageInfo_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.fetchMore(pageInfo_r31.endCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function CvcEventFeedComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvcEventFeedComponent_ng_container_0_ng_container_9_div_1_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r31 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", pageInfo_r31.hasNextPage);
    }
}
function CvcEventFeedComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CvcEventFeedComponent_ng_container_0_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CvcEventFeedComponent_ng_container_0_ng_template_4_Template, 12, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CvcEventFeedComponent_ng_container_0_ng_container_8_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CvcEventFeedComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const events_r1 = ctx.ngIf;
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r2)("nzExtra", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", events_r1.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, ctx_r0.pageInfo$));
    }
}
let CvcEventFeedComponent = /*@__PURE__*/ (() => {
    class CvcEventFeedComponent {
        constructor(gql) {
            this.gql = gql;
            this.tagDisplay = "displayAll";
            this.pageSize = 5;
            this.participantFilter = 'ALL';
            this.organizationFilter = 'ALL';
            this.actionFilter = 'ALL';
            this.showChildren = false;
        }
        ngOnInit() {
            this.initialQueryVars = {
                subject: this.subscribable,
                organizationId: this.organizationId,
                originatingUserId: this.userId,
                first: this.pageSize,
            };
            this.queryRef = this.gql.watch(this.initialQueryVars, {});
            this.results$ = this.queryRef.valueChanges;
            this.pageInfo$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.events.pageInfo));
            this.events$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => {
                return data.events.edges.map(e => e.node);
            }));
            this.participants$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.events.uniqueParticipants));
            this.organizations$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.events.participatingOrganizations));
            this.actions$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data.events.eventTypes.map((et) => { return { id: et }; })));
        }
        fetchMore(endCursor) {
            this.queryRef.fetchMore({
                variables: {
                    first: this.pageSize,
                    after: endCursor,
                }
            });
        }
        onParticipantSelected(u) {
            this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { originatingUserId: u === 'ALL' ? undefined : u }));
        }
        onOrganizationSelected(o) {
            this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { organizationId: o === 'ALL' ? undefined : o }));
        }
        //onActionSelected(a: 'ALL' | Maybe<SelectableAction>) {
        onActionSelected(a) {
            console.log(a);
            this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { eventType: a === 'ALL' ? undefined : a }));
        }
        onShowChildrenToggle() {
            console.log(this.showChildren);
            let newSubscribable;
            if (this.subscribable) {
                newSubscribable = {
                    id: this.subscribable.id,
                    entityType: this.subscribable.entityType,
                    includeChildren: this.showChildren
                };
                if (this.showChildren) {
                    this.tagDisplay = 'displayAll';
                }
                else {
                    this.tagDisplay = 'hideSubject';
                }
            }
            else {
                newSubscribable = undefined;
            }
            this.queryRef.refetch(Object.assign(Object.assign({}, this.initialQueryVars), { subject: newSubscribable }));
        }
    }
    CvcEventFeedComponent.ɵfac = function CvcEventFeedComponent_Factory(t) { return new (t || CvcEventFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["EventFeedGQL"])); };
    CvcEventFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcEventFeedComponent, selectors: [["cvc-event-feed"]], inputs: { subscribable: "subscribable", subscribableName: "subscribableName", organizationId: "organizationId", userId: "userId", tagDisplay: "tagDisplay" }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["id", "card-content", 3, "nzTitle", "nzExtra"], ["cardTitle", ""], ["cardExtra", ""], [3, "nzGutter"], ["nzSpan", "24", 1, "timeline"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-form", "", "nzLayout", "inline", "id", "event-filters"], ["nzSize", "small", "id", "action-filter", "name", "selectedAction", 3, "ngModel", "nzDropdownMatchSelectWidth", "ngModelChange"], ["nzLabel", "All Actions", "nzValue", "ALL"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nzSize", "small", "id", "participant-filter", "name", "selectedParticipant", 3, "ngModel", "nzDropdownMatchSelectWidth", "ngModelChange"], ["nzLabel", "All Curators", "nzValue", "ALL"], ["nzSize", "small", "id", "organization-filter", "name", "selectedOrganization", 3, "ngModel", "nzDropdownMatchSelectWidth", "ngModelChange"], ["nzLabel", "All Organizations", "nzValue", "ALL"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], [3, "events", "tagDisplay"], ["nz-list-load-more", "", 4, "ngIf"], ["nz-list-load-more", ""], ["nz-button", "", "nzType", "default", "nzSize", "small", "nzBlock", "", 3, "click"]], template: function CvcEventFeedComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CvcEventFeedComponent_ng_container_0_Template, 11, 7, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.events$));
            }
        }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.timeline[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-left: 6px;\n}\n#event-filters[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n#event-filters[_ngcontent-%COMP%]   #participant-filter[_ngcontent-%COMP%] {\n  width: 200px;\n}\n#event-filters[_ngcontent-%COMP%]   #organization-filter[_ngcontent-%COMP%] {\n  width: 250px;\n}"] });
    return CvcEventFeedComponent;
})();


/***/ }),

/***/ "ncdi":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-timeline.js ***!
  \************************************************************************************/
/*! exports provided: NzTimelineComponent, NzTimelineItemComponent, NzTimelineModule, TimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimelineComponent", function() { return NzTimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimelineItemComponent", function() { return NzTimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimelineModule", function() { return NzTimelineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





const _c0 = ["template"];
function NzTimelineItemComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nzDot);
    }
}
function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimelineItemComponent_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-item-right", (ctx_r1.nzPosition || ctx_r1.position) === "right")("ant-timeline-item-left", (ctx_r1.nzPosition || ctx_r1.position) === "left")("ant-timeline-item-last", ctx_r1.isLast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r1.borderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-item-head-red", ctx_r1.nzColor === "red")("ant-timeline-item-head-blue", ctx_r1.nzColor === "blue")("ant-timeline-item-head-green", ctx_r1.nzColor === "green")("ant-timeline-item-head-gray", ctx_r1.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r1.nzDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDot);
    }
}
const _c1 = ["*"];
function NzTimelineComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
}
function NzTimelineComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTimelineComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r5.template);
    }
}
function NzTimelineComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.nzPendingDot, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.nzPendingDot);
    }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.isPendingBoolean ? "" : ctx_r9.nzPending, " ");
    }
}
function NzTimelineComponent_ng_template_4_li_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzPendingDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzPending);
    }
}
function NzTimelineComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTimelineComponent_ng_template_4_li_0_Template, 6, 2, "li", 5);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nzPending);
    }
}
let TimelineService = /*@__PURE__*/ (() => {
    class TimelineService {
        constructor() {
            this.check$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        }
        markForCheck() {
            this.check$.next();
        }
    }
    TimelineService.ɵfac = function TimelineService_Factory(t) { return new (t || TimelineService)(); };
    TimelineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimelineService, factory: TimelineService.ɵfac });
    return TimelineService;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const TimelineModes = ['left', 'alternate', 'right', 'custom'];
const TimelinePositions = ['left', 'right'];
const TimelineTimeDefaultColors = ['red', 'blue', 'green', 'grey', 'gray'];
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isDefaultColor(color) {
    return TimelineTimeDefaultColors.findIndex(i => i === color) !== -1;
}
let NzTimelineItemComponent = /*@__PURE__*/ (() => {
    class NzTimelineItemComponent {
        constructor(cdr, timelineService) {
            this.cdr = cdr;
            this.timelineService = timelineService;
            this.nzColor = 'blue';
            this.isLast = false;
            this.borderColor = null;
        }
        ngOnChanges(changes) {
            this.timelineService.markForCheck();
            if (changes.nzColor) {
                this.updateCustomColor();
            }
        }
        detectChanges() {
            this.cdr.detectChanges();
        }
        updateCustomColor() {
            this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
        }
    }
    NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimelineService)); };
    NzTimelineItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            }
        }, inputs: { nzColor: "nzColor", nzPosition: "nzPosition", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTimelineItemComponent_ng_template_0_Template, 6, 19, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzTimelineItemComponent;
})();
let NzTimelineComponent = /*@__PURE__*/ (() => {
    class NzTimelineComponent {
        constructor(cdr, timelineService, directionality) {
            this.cdr = cdr;
            this.timelineService = timelineService;
            this.directionality = directionality;
            this.nzMode = 'left';
            this.nzReverse = false;
            this.isPendingBoolean = false;
            this.timelineItems = [];
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        ngOnChanges(changes) {
            const { nzMode, nzReverse, nzPending } = changes;
            if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
                this.updateChildren();
            }
            if (nzPending) {
                this.isPendingBoolean = nzPending.currentValue === true;
            }
        }
        ngOnInit() {
            var _a;
            this.timelineService.check$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.cdr.markForCheck();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterContentInit() {
            this.updateChildren();
            this.listOfItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.updateChildren();
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        updateChildren() {
            if (this.listOfItems && this.listOfItems.length) {
                const length = this.listOfItems.length;
                this.listOfItems.forEach((item, index) => {
                    item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                    item.position = getInferredTimelineItemPosition(index, this.nzMode);
                    item.detectChanges();
                });
                this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
            }
            this.cdr.markForCheck();
        }
    }
    NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimelineService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
    NzTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTimelineItemComponent, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfItems = _t);
            }
        }, inputs: { nzMode: "nzMode", nzReverse: "nzReverse", nzPending: "nzPending", nzPendingDot: "nzPendingDot" }, exportAs: ["nzTimeline"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TimelineService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 7, vars: 13, consts: [[1, "ant-timeline"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pendingTemplate", ""], [3, "ngTemplateOutlet"], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimelineComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimelineComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTimelineComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzReverse);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzReverse);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzTimelineComponent;
})();
function simpleChangeActivated(simpleChange) {
    return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
    return mode === 'custom'
        ? undefined
        : mode === 'left'
            ? 'left'
            : mode === 'right'
                ? 'right'
                : mode === 'alternate' && index % 2 === 0
                    ? 'left'
                    : 'right';
}
let NzTimelineModule = /*@__PURE__*/ (() => {
    class NzTimelineModule {
    }
    NzTimelineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTimelineModule });
    NzTimelineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]] });
    return NzTimelineModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTimelineModule, { declarations: function () { return [NzTimelineItemComponent, NzTimelineComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]; }, exports: function () { return [NzTimelineItemComponent, NzTimelineComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-timeline.js.map


/***/ }),

/***/ "q/Zg":
/*!*************************************************************************************!*\
  !*** ./src/app/components/events/event-timeline-item/event-timeline-item-module.ts ***!
  \*************************************************************************************/
/*! exports provided: CvcEventTimelineItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcEventTimelineItemModule", function() { return CvcEventTimelineItemModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/users/user-tag/user-tag.module */ "Sou9");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_components_comments_comment_tag_comment_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/comments/comment-tag/comment-tag.module */ "0X8K");
/* harmony import */ var _app_components_flags_flag_tag_flag_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/flags/flag-tag/flag-tag.module */ "IXp7");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/revisions/revision-tag/revision-tag.module */ "OwZK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/sources/source-tag/source-tag.module */ "5WKN");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















let CvcEventTimelineItemModule = /*@__PURE__*/ (() => {
    class CvcEventTimelineItemModule {
    }
    CvcEventTimelineItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: CvcEventTimelineItemModule });
    CvcEventTimelineItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ factory: function CvcEventTimelineItemModule_Factory(t) { return new (t || CvcEventTimelineItemModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__["NzTypographyModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzGridModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_13__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_18__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_13__["TimeagoFormatter"] } }),
                _app_components_revisions_revision_tag_revision_tag_module__WEBPACK_IMPORTED_MODULE_15__["CvcRevisionTagModule"],
                _app_components_users_user_tag_user_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcUserTagModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["CvcPipesModule"],
                _app_components_comments_comment_tag_comment_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcCommentTagModule"],
                _app_components_flags_flag_tag_flag_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcFlagTagModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_7__["CvcGeneTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_8__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_9__["CvcEvidenceTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_10__["CvcVariantTagModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_11__["CvcOrganizationTagModule"],
                _app_components_sources_source_tag_source_tag_module__WEBPACK_IMPORTED_MODULE_17__["CvcSourceTagModule"]
            ]] });
    return CvcEventTimelineItemModule;
})();


/***/ })

}]);