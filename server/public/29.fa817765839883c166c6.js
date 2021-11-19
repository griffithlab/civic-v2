(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "6eh3":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/viewer-button/viewer-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: CvcViewerButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcViewerButtonComponent", function() { return CvcViewerButtonComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");










let CvcViewerButtonComponent = /*@__PURE__*/ (() => {
    class CvcViewerButtonComponent {
        constructor(queryService) {
            this.queryService = queryService;
            this.viewer$ = this.queryService.viewer$;
            this.username$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('username'));
            this.userId$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('id'));
            this.role$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('role'));
            this.avatarUrl$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('profileImagePath'));
        }
        signOut() {
            this.queryService.signOut();
        }
    }
    CvcViewerButtonComponent.ɵfac = function CvcViewerButtonComponent_Factory(t) { return new (t || CvcViewerButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"])); };
    CvcViewerButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcViewerButtonComponent, selectors: [["cvc-viewer-button"]], decls: 10, vars: 7, consts: [[3, "routerLink"], ["nz-button", "", "nzType", "primary", "nzValue", "small", "nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function CvcViewerButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-dropdown-menu", null, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CvcViewerButtonComponent_Template_li_click_8_listener() { return ctx.signOut(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sign Out");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.userId$), "");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, ctx.username$), " ");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuItemDirective"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}"] });
    return CvcViewerButtonComponent;
})();


/***/ }),

/***/ "Ff2k":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js ***!
  \********************************************************************************/
/*! exports provided: NzListComponent, NzListEmptyComponent, NzListFooterComponent, NzListGridDirective, NzListHeaderComponent, NzListItemActionComponent, NzListItemActionsComponent, NzListItemComponent, NzListItemExtraComponent, NzListItemMetaAvatarComponent, NzListItemMetaComponent, NzListItemMetaDescriptionComponent, NzListItemMetaTitleComponent, NzListLoadMoreDirective, NzListModule, NzListPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListComponent", function() { return NzListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListEmptyComponent", function() { return NzListEmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListFooterComponent", function() { return NzListFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListGridDirective", function() { return NzListGridDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListHeaderComponent", function() { return NzListHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemActionComponent", function() { return NzListItemActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemActionsComponent", function() { return NzListItemActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemComponent", function() { return NzListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemExtraComponent", function() { return NzListItemExtraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemMetaAvatarComponent", function() { return NzListItemMetaAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemMetaComponent", function() { return NzListItemMetaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemMetaDescriptionComponent", function() { return NzListItemMetaDescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListItemMetaTitleComponent", function() { return NzListItemMetaTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListLoadMoreDirective", function() { return NzListLoadMoreDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListModule", function() { return NzListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzListPaginationComponent", function() { return NzListPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








const _c0 = ["*"];
function NzListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 3);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.nzSrc);
    }
}
function NzListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!nzSrc"]);
    }
}
function NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-item-meta-avatar", 3);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.avatarStr);
    }
}
function NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.avatarTpl);
    }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
    }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
    }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nzDescription);
    }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzDescription);
    }
}
function NzListItemMetaComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template, 2, 1, "nz-list-item-meta-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template, 2, 1, "nz-list-item-meta-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzTitle && !ctx_r2.titleComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzDescription && !ctx_r2.descriptionComponent);
    }
}
const _c1 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
const _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
}
const _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) { }
function NzListItemActionsComponent_li_0_em_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 3);
    }
}
function NzListItemActionsComponent_li_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r1 = ctx.$implicit;
        const last_r2 = ctx.last;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", i_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
    }
}
function NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzListComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r10 = ctx.$implicit;
        const index_r11 = ctx.index;
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.nzRenderItem)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, item_r10, index_r11));
    }
}
function NzListComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_ng_template_0_ng_container_1_Template, 2, 5, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nzDataSource);
    }
}
function NzListComponent_nz_list_header_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.nzHeader);
    }
}
function NzListComponent_nz_list_header_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_header_2_ng_container_1_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzHeader);
    }
}
function NzListComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-height", 53, "px");
    }
}
function NzListComponent_div_7_div_1_ng_template_1_Template(rf, ctx) { }
function NzListComponent_div_7_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_div_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r15 = ctx.$implicit;
        const index_r16 = ctx.index;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", ctx_r14.nzGrid.span || null)("nzXs", ctx_r14.nzGrid.xs || null)("nzSm", ctx_r14.nzGrid.sm || null)("nzMd", ctx_r14.nzGrid.md || null)("nzLg", ctx_r14.nzGrid.lg || null)("nzXl", ctx_r14.nzGrid.xl || null)("nzXXl", ctx_r14.nzGrid.xxl || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.nzRenderItem)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, item_r15, index_r16));
    }
}
function NzListComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_div_7_div_1_Template, 2, 12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", ctx_r4.nzGrid.gutter || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.nzDataSource);
    }
}
function NzListComponent_nz_list_empty_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 14);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNoResult", ctx_r5.nzNoResult);
    }
}
function NzListComponent_nz_list_footer_9_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.nzFooter);
    }
}
function NzListComponent_nz_list_footer_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_footer_9_ng_container_1_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzFooter);
    }
}
function NzListComponent_ng_template_11_Template(rf, ctx) { }
function NzListComponent_nz_list_pagination_13_ng_template_1_Template(rf, ctx) { }
function NzListComponent_nz_list_pagination_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_pagination_13_ng_template_1_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.nzPagination);
    }
}
const _c5 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
const _c6 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 6);
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActions", ctx_r9.nzActions);
    }
}
function NzListItemComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_0_ul_0_Template, 1, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzActions && ctx_r1.nzActions.length > 0);
    }
}
function NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.nzContent);
    }
}
function NzListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r10.nzContent);
    }
}
function NzListItemComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzContent);
    }
}
function NzListItemComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3);
    }
}
function NzListItemComponent_ng_template_6_ng_template_0_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_template_6_ng_template_1_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_6_ng_template_2_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemComponent_ng_template_6_ng_template_3_Template, 0, 0, "ng-template", 9);
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    }
}
function NzListItemComponent_ng_container_8_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.nzExtra);
    }
}
function NzListItemComponent_ng_container_8_ng_template_5_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_container_8_ng_template_2_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemComponent_ng_container_8_ng_template_3_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template, 2, 1, "nz-list-item-extra", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzListItemComponent_ng_container_8_ng_template_5_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    }
}
const _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
const _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
let NzListItemMetaTitleComponent = /*@__PURE__*/ (() => {
    class NzListItemMetaTitleComponent {
    }
    NzListItemMetaTitleComponent.ɵfac = function NzListItemMetaTitleComponent_Factory(t) { return new (t || NzListItemMetaTitleComponent)(); };
    NzListItemMetaTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemMetaTitleComponent, selectors: [["nz-list-item-meta-title"]], exportAs: ["nzListItemMetaTitle"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-title"]], template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaTitleComponent;
})();
let NzListItemMetaDescriptionComponent = /*@__PURE__*/ (() => {
    class NzListItemMetaDescriptionComponent {
    }
    NzListItemMetaDescriptionComponent.ɵfac = function NzListItemMetaDescriptionComponent_Factory(t) { return new (t || NzListItemMetaDescriptionComponent)(); };
    NzListItemMetaDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemMetaDescriptionComponent, selectors: [["nz-list-item-meta-description"]], exportAs: ["nzListItemMetaDescription"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-description"]], template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaDescriptionComponent;
})();
let NzListItemMetaAvatarComponent = /*@__PURE__*/ (() => {
    class NzListItemMetaAvatarComponent {
    }
    NzListItemMetaAvatarComponent.ɵfac = function NzListItemMetaAvatarComponent_Factory(t) { return new (t || NzListItemMetaAvatarComponent)(); };
    NzListItemMetaAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemMetaAvatarComponent, selectors: [["nz-list-item-meta-avatar"]], inputs: { nzSrc: "nzSrc" }, exportAs: ["nzListItemMetaAvatar"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]], template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSrc);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzSrc);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarComponent"]], encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaAvatarComponent;
})();
let NzListItemMetaComponent = /*@__PURE__*/ (() => {
    class NzListItemMetaComponent {
        constructor(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.avatarStr = '';
            this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
        }
        set nzAvatar(value) {
            if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        }
    }
    NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    NzListItemMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemMetaDescriptionComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemMetaTitleComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descriptionComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleComponent = _t.first);
            }
        }, inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], ngContentSelectors: _c2, decls: 4, vars: 3, consts: [[3, "nzSrc", 4, "ngIf"], [4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [3, "nzSrc"], [3, "ngTemplateOutlet"], [1, "ant-list-item-meta-content"], [4, "nzStringTemplateOutlet"]], template: function NzListItemMetaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template, 1, 1, "nz-list-item-meta-avatar", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template, 2, 1, "nz-list-item-meta-avatar", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemMetaComponent_div_3_Template, 5, 2, "div", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatarStr);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatarTpl);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], NzListItemMetaAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], NzListItemMetaTitleComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], NzListItemMetaDescriptionComponent], encapsulation: 2, changeDetection: 0 });
    return NzListItemMetaComponent;
})();
let NzListItemExtraComponent = /*@__PURE__*/ (() => {
    class NzListItemExtraComponent {
        constructor() { }
    }
    NzListItemExtraComponent.ɵfac = function NzListItemExtraComponent_Factory(t) { return new (t || NzListItemExtraComponent)(); };
    NzListItemExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemExtraComponent, selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]], hostAttrs: [1, "ant-list-item-extra"], exportAs: ["nzListItemExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemExtraComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListItemExtraComponent;
})();
let NzListItemActionComponent = /*@__PURE__*/ (() => {
    class NzListItemActionComponent {
        constructor() { }
    }
    NzListItemActionComponent.ɵfac = function NzListItemActionComponent_Factory(t) { return new (t || NzListItemActionComponent)(); };
    NzListItemActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemActionComponent, selectors: [["nz-list-item-action"]], viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
            }
        }, exportAs: ["nzListItemAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemActionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListItemActionComponent;
})();
let NzListItemActionsComponent = /*@__PURE__*/ (() => {
    class NzListItemActionsComponent {
        constructor(ngZone, cdr) {
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.nzActions = [];
            this.actions = [];
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.inputActionChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.contentChildrenChanges$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => {
                if (this.nzListItemActions) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                }
                return this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.contentChildrenChanges$));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.contentChildrenChanges$, this.inputActionChanges$)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                if (this.nzActions.length) {
                    this.actions = this.nzActions;
                }
                else {
                    this.actions = this.nzListItemActions.map(action => action.templateRef);
                }
                this.cdr.detectChanges();
            });
        }
        ngOnChanges() {
            this.inputActionChanges$.next(null);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzListItemActionsComponent.ɵfac = function NzListItemActionsComponent_Factory(t) { return new (t || NzListItemActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    NzListItemActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemActionsComponent, selectors: [["ul", "nz-list-item-actions", ""]], contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemActionComponent, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListItemActions = _t);
            }
        }, hostAttrs: [1, "ant-list-item-action"], inputs: { nzActions: "nzActions" }, exportAs: ["nzListItemActions"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c3, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]], template: function NzListItemActionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2, changeDetection: 0 });
    return NzListItemActionsComponent;
})();
let NzListEmptyComponent = /*@__PURE__*/ (() => {
    class NzListEmptyComponent {
    }
    NzListEmptyComponent.ɵfac = function NzListEmptyComponent_Factory(t) { return new (t || NzListEmptyComponent)(); };
    NzListEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListEmptyComponent, selectors: [["nz-list-empty"]], hostAttrs: [1, "ant-list-empty-text"], inputs: { nzNoResult: "nzNoResult" }, exportAs: ["nzListHeader"], decls: 1, vars: 2, consts: [[3, "nzComponentName", "specificContent"]], template: function NzListEmptyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-embed-empty", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzComponentName", "list")("specificContent", ctx.nzNoResult);
            }
        }, directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__["NzEmbedEmptyComponent"]], encapsulation: 2, changeDetection: 0 });
    return NzListEmptyComponent;
})();
let NzListHeaderComponent = /*@__PURE__*/ (() => {
    class NzListHeaderComponent {
    }
    NzListHeaderComponent.ɵfac = function NzListHeaderComponent_Factory(t) { return new (t || NzListHeaderComponent)(); };
    NzListHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListHeaderComponent, selectors: [["nz-list-header"]], hostAttrs: [1, "ant-list-header"], exportAs: ["nzListHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListHeaderComponent;
})();
let NzListFooterComponent = /*@__PURE__*/ (() => {
    class NzListFooterComponent {
    }
    NzListFooterComponent.ɵfac = function NzListFooterComponent_Factory(t) { return new (t || NzListFooterComponent)(); };
    NzListFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListFooterComponent, selectors: [["nz-list-footer"]], hostAttrs: [1, "ant-list-footer"], exportAs: ["nzListFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListFooterComponent;
})();
let NzListPaginationComponent = /*@__PURE__*/ (() => {
    class NzListPaginationComponent {
    }
    NzListPaginationComponent.ɵfac = function NzListPaginationComponent_Factory(t) { return new (t || NzListPaginationComponent)(); };
    NzListPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListPaginationComponent, selectors: [["nz-list-pagination"]], hostAttrs: [1, "ant-list-pagination"], exportAs: ["nzListPagination"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListPaginationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzListPaginationComponent;
})();
let NzListLoadMoreDirective = /*@__PURE__*/ (() => {
    class NzListLoadMoreDirective {
    }
    NzListLoadMoreDirective.ɵfac = function NzListLoadMoreDirective_Factory(t) { return new (t || NzListLoadMoreDirective)(); };
    NzListLoadMoreDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzListLoadMoreDirective, selectors: [["nz-list-load-more"]], exportAs: ["nzListLoadMoreDirective"] });
    return NzListLoadMoreDirective;
})();
let NzListGridDirective = /*@__PURE__*/ (() => {
    class NzListGridDirective {
    }
    NzListGridDirective.ɵfac = function NzListGridDirective_Factory(t) { return new (t || NzListGridDirective)(); };
    NzListGridDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzListGridDirective, selectors: [["nz-list", "nzGrid", ""]], hostAttrs: [1, "ant-list-grid"] });
    return NzListGridDirective;
})();
let NzListComponent = /*@__PURE__*/ (() => {
    class NzListComponent {
        constructor(elementRef, directionality) {
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.nzBordered = false;
            this.nzGrid = '';
            this.nzItemLayout = 'horizontal';
            this.nzRenderItem = null;
            this.nzLoading = false;
            this.nzLoadMore = null;
            this.nzSize = 'default';
            this.nzSplit = true;
            this.hasSomethingAfterLastItem = false;
            this.dir = 'ltr';
            this.itemLayoutNotifySource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.nzItemLayout);
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-list');
        }
        get itemLayoutNotify$() {
            return this.itemLayoutNotifySource.asObservable();
        }
        ngOnInit() {
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
            });
        }
        getSomethingAfterLastItem() {
            return !!(this.nzLoadMore ||
                this.nzPagination ||
                this.nzFooter ||
                this.nzListFooterComponent ||
                this.nzListPaginationComponent ||
                this.nzListLoadMoreDirective);
        }
        ngOnChanges(changes) {
            if (changes.nzItemLayout) {
                this.itemLayoutNotifySource.next(this.nzItemLayout);
            }
        }
        ngOnDestroy() {
            this.itemLayoutNotifySource.unsubscribe();
            this.destroy$.next();
            this.destroy$.complete();
        }
        ngAfterContentInit() {
            this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
        }
    }
    NzListComponent.ɵfac = function NzListComponent_Factory(t) { return new (t || NzListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8)); };
    NzListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListComponent, selectors: [["nz-list"], ["", "nz-list", ""]], contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListFooterComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListPaginationComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListLoadMoreDirective, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListFooterComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListPaginationComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListLoadMoreDirective = _t.first);
            }
        }, hostVars: 16, hostBindings: function NzListComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
            }
        }, inputs: { nzBordered: "nzBordered", nzGrid: "nzGrid", nzItemLayout: "nzItemLayout", nzRenderItem: "nzRenderItem", nzLoading: "nzLoading", nzLoadMore: "nzLoadMore", nzSize: "nzSize", nzSplit: "nzSplit", nzDataSource: "nzDataSource", nzHeader: "nzHeader", nzFooter: "nzFooter", nzPagination: "nzPagination", nzNoResult: "nzNoResult" }, exportAs: ["nzList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c6, decls: 15, vars: 9, consts: [["itemsTpl", ""], [4, "ngIf"], [3, "nzSpinning"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], [3, "nzNoResult", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "nzNoResult"]], template: function NzListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListComponent_ng_template_0_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListComponent_nz_list_header_2_Template, 2, 1, "nz-list-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-spin", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzListComponent_div_6_Template, 1, 2, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzListComponent_div_7_Template, 2, 2, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzListComponent_nz_list_empty_8_Template, 1, 1, "nz-list-empty", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzListComponent_nz_list_footer_9_Template, 2, 1, "nz-list-footer", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzListComponent_ng_template_11_Template, 0, 0, "ng-template", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzListComponent_nz_list_pagination_13_Template, 2, 1, "nz-list-pagination", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 3);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzHeader);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.nzLoading);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzGrid && ctx.nzDataSource)("ngIfElse", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzFooter);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.nzLoadMore);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzPagination);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], NzListHeaderComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzListComponent.prototype, "nzBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzListComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], NzListComponent.prototype, "nzSplit", void 0);
    return NzListComponent;
})();
let NzListItemComponent = /*@__PURE__*/ (() => {
    class NzListItemComponent {
        constructor(elementRef, renderer, parentComp, cdr) {
            this.parentComp = parentComp;
            this.cdr = cdr;
            this.nzActions = [];
            this.nzExtra = null;
            this.nzNoFlex = false;
            renderer.addClass(elementRef.nativeElement, 'ant-list-item');
        }
        get isVerticalAndExtra() {
            return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.nzExtra);
        }
        ngAfterViewInit() {
            this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
                this.itemLayout = val;
                this.cdr.detectChanges();
            });
        }
        ngOnDestroy() {
            if (this.itemLayout$) {
                this.itemLayout$.unsubscribe();
            }
        }
    }
    NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzListComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    NzListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemExtraComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listItemExtraDirective = _t.first);
            }
        }, hostVars: 2, hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-list-item-no-flex", ctx.nzNoFlex);
            }
        }, inputs: { nzActions: "nzActions", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex", nzContent: "nzContent" }, exportAs: ["nzListItem"], ngContentSelectors: _c8, decls: 9, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"], ["nz-list-item-actions", "", 3, "nzActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]], template: function NzListItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
            }
            if (rf & 2) {
                const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r6);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], NzListItemActionsComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], NzListItemExtraComponent], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    NzListComponent,
    NzListHeaderComponent,
    NzListFooterComponent,
    NzListPaginationComponent,
    NzListEmptyComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzListItemMetaTitleComponent,
    NzListItemMetaDescriptionComponent,
    NzListItemMetaAvatarComponent,
    NzListItemActionsComponent,
    NzListItemActionComponent,
    NzListItemExtraComponent,
    NzListLoadMoreDirective,
    NzListGridDirective
];
let NzListModule = /*@__PURE__*/ (() => {
    class NzListModule {
    }
    NzListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzListModule });
    NzListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzListModule_Factory(t) { return new (t || NzListModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzGridModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__["NzEmptyModule"]]] });
    return NzListModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzListModule, { declarations: function () { return [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzGridModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__["NzEmptyModule"]]; }, exports: function () { return [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-list.js.map


/***/ }),

/***/ "Jioy":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-auto-complete.js ***!
  \*****************************************************************************************/
/*! exports provided: NZ_AUTOCOMPLETE_VALUE_ACCESSOR, NzAutocompleteComponent, NzAutocompleteModule, NzAutocompleteOptgroupComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzOptionSelectionChange, getNzAutocompleteMissingPanelError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return NZ_AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutocompleteComponent", function() { return NzAutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutocompleteModule", function() { return NzAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutocompleteOptgroupComponent", function() { return NzAutocompleteOptgroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutocompleteOptionComponent", function() { return NzAutocompleteOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutocompleteTriggerDirective", function() { return NzAutocompleteTriggerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionSelectionChange", function() { return NzOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNzAutocompleteMissingPanelError", function() { return getNzAutocompleteMissingPanelError; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */







function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
    }
}
const _c0 = [[["nz-auto-option"]]];
const _c1 = ["nz-auto-option"];
const _c2 = ["*"];
const _c3 = ["panel"];
const _c4 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-auto-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const option_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", option_r9)("nzLabel", option_r9 && option_r9.label ? option_r9.label : option_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r9 && option_r9.label ? option_r9.label : option_r9, " ");
    }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 3, "nz-auto-option", 7);
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.nzDataSource);
    }
}
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-select-dropdown-hidden", !ctx_r0.showPanel)("ant-select-dropdown-rtl", ctx_r0.dir === "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", "enter")("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzDataSource ? _r5 : _r3);
    }
}
let NzAutocompleteOptgroupComponent = /*@__PURE__*/ (() => {
    class NzAutocompleteOptgroupComponent {
        constructor() { }
    }
    NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
    NzAutocompleteOptgroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "ant-select-item", "ant-select-item-group"], [4, "nzStringTemplateOutlet"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzAutocompleteOptgroupComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzOptionSelectionChange {
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
let NzAutocompleteOptionComponent = /*@__PURE__*/ (() => {
    class NzAutocompleteOptionComponent {
        constructor(changeDetectorRef, element, nzAutocompleteOptgroupComponent) {
            this.changeDetectorRef = changeDetectorRef;
            this.element = element;
            this.nzAutocompleteOptgroupComponent = nzAutocompleteOptgroupComponent;
            this.nzDisabled = false;
            this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.mouseEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.active = false;
            this.selected = false;
        }
        select(emit = true) {
            this.selected = true;
            this.changeDetectorRef.markForCheck();
            if (emit) {
                this.emitSelectionChangeEvent();
            }
        }
        onMouseEnter() {
            this.mouseEntered.emit(this);
        }
        deselect() {
            this.selected = false;
            this.changeDetectorRef.markForCheck();
            this.emitSelectionChangeEvent();
        }
        /** Git display label */
        getLabel() {
            return this.nzLabel || this.nzValue.toString();
        }
        /** Set active (only styles) */
        setActiveStyles() {
            if (!this.active) {
                this.active = true;
                this.changeDetectorRef.markForCheck();
            }
        }
        /** Unset active (only styles) */
        setInactiveStyles() {
            if (this.active) {
                this.active = false;
                this.changeDetectorRef.markForCheck();
            }
        }
        scrollIntoViewIfNeeded() {
            Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["scrollIntoView"])(this.element.nativeElement);
        }
        selectViaInteraction() {
            if (!this.nzDisabled) {
                this.selected = !this.selected;
                if (this.selected) {
                    this.setActiveStyles();
                }
                else {
                    this.setInactiveStyles();
                }
                this.emitSelectionChangeEvent(true);
                this.changeDetectorRef.markForCheck();
            }
        }
        emitSelectionChangeEvent(isUserInput = false) {
            this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
        }
    }
    NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzAutocompleteOptgroupComponent, 8)); };
    NzAutocompleteOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostAttrs: ["role", "menuitem", 1, "ant-select-item", "ant-select-item-option"], hostVars: 10, hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() { return ctx.selectViaInteraction(); })("mouseenter", function NzAutocompleteOptionComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-select-item-option-grouped", ctx.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected", ctx.selected)("ant-select-item-option-active", ctx.active)("ant-select-item-option-disabled", ctx.nzDisabled);
            }
        }, inputs: { nzDisabled: "nzDisabled", nzValue: "nzValue", nzLabel: "nzLabel" }, outputs: { selectionChange: "selectionChange", mouseEntered: "mouseEntered" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c2, decls: 2, vars: 0, consts: [[1, "ant-select-item-option-content"]], template: function NzAutocompleteOptionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
})();
let NzAutocompleteComponent = /*@__PURE__*/ (() => {
    class NzAutocompleteComponent {
        constructor(changeDetectorRef, ngZone, directionality, noAnimation) {
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzDefaultActiveFirstOption = true;
            this.nzBackfill = false;
            this.compareWith = (o1, o2) => o1 === o2;
            this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            this.showPanel = true;
            this.isOpen = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            this.activeItemIndex = -1;
            this.selectionChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
            this.optionMouseEnterSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
            this.dataSourceChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
            /** Options changes listener */
            this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(() => {
                if (this.options) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map(option => option.selectionChange));
                }
                return this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => this.optionSelectionChanges));
            });
            this.optionMouseEnter = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(() => {
                if (this.options) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map(option => option.mouseEntered));
                }
                return this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => this.optionMouseEnter));
            });
        }
        /**
         * Options accessor, its source may be content or dataSource
         */
        get options() {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.changeDetectorRef.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterContentInit() {
            if (!this.nzDataSource) {
                this.optionsInit();
            }
        }
        ngAfterViewInit() {
            if (this.nzDataSource) {
                this.optionsInit();
            }
        }
        ngOnDestroy() {
            this.dataSourceChangeSubscription.unsubscribe();
            this.selectionChangeSubscription.unsubscribe();
            this.optionMouseEnterSubscription.unsubscribe();
            this.destroy$.next();
            this.destroy$.complete();
        }
        setVisibility() {
            this.showPanel = !!this.options.length;
            this.changeDetectorRef.markForCheck();
        }
        setActiveItem(index) {
            const activeItem = this.options.toArray()[index];
            if (activeItem && !activeItem.active) {
                this.activeItem = activeItem;
                this.activeItemIndex = index;
                this.clearSelectedOptions(this.activeItem);
                this.activeItem.setActiveStyles();
                this.changeDetectorRef.markForCheck();
            }
        }
        setNextItemActive() {
            const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
            this.setActiveItem(nextIndex);
        }
        setPreviousItemActive() {
            const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
            this.setActiveItem(previousIndex);
        }
        getOptionIndex(value) {
            return this.options.reduce((result, current, index) => {
                return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
            }, -1);
        }
        getOption(value) {
            return this.options.find(item => this.compareWith(value, item.nzValue)) || null;
        }
        optionsInit() {
            this.setVisibility();
            this.subscribeOptionChanges();
            const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
            // async
            this.dataSourceChangeSubscription = changes.subscribe(e => {
                if (!e.dirty && this.isOpen) {
                    setTimeout(() => this.setVisibility());
                }
                this.subscribeOptionChanges();
            });
        }
        /**
         * Clear the status of options
         */
        clearSelectedOptions(skip, deselect = false) {
            this.options.forEach(option => {
                if (option !== skip) {
                    if (deselect) {
                        option.deselect();
                    }
                    option.setInactiveStyles();
                }
            });
        }
        subscribeOptionChanges() {
            this.selectionChangeSubscription.unsubscribe();
            this.selectionChangeSubscription = this.optionSelectionChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((event) => event.isUserInput))
                .subscribe((event) => {
                event.source.select();
                event.source.setActiveStyles();
                this.activeItem = event.source;
                this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
                this.clearSelectedOptions(event.source, true);
                this.selectionChange.emit(event.source);
            });
            this.optionMouseEnterSubscription.unsubscribe();
            this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((event) => {
                event.setActiveStyles();
                this.activeItem = event;
                this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
                this.clearSelectedOptions(event);
            });
        }
    }
    NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], 9)); };
    NzAutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzAutocompleteOptionComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fromContentOptions = _t);
            }
        }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzAutocompleteOptionComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fromDataSourceOptions = _t);
            }
        }, inputs: { nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzWidth: "nzWidth", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "ngClass", "ngStyle", "nzNoAnimation"], ["panel", ""], [2, "max-height", "256px", "overflow-y", "auto", "overflow-anchor", "none"], [2, "display", "flex", "flex-direction", "column"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzAutocompleteComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NzAutocompleteOptionComponent], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__["slideMotion"]] }, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzAutocompleteTriggerDirective),
    multi: true
};
function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
let NzAutocompleteTriggerDirective = /*@__PURE__*/ (() => {
    class NzAutocompleteTriggerDirective {
        constructor(elementRef, overlay, viewContainerRef, nzInputGroupWhitSuffixOrPrefixDirective, document) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.nzInputGroupWhitSuffixOrPrefixDirective = nzInputGroupWhitSuffixOrPrefixDirective;
            this.document = document;
            this.onChange = () => { };
            this.onTouched = () => { };
            this.panelOpen = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            this.overlayRef = null;
            this.portal = null;
            this.previousValue = null;
        }
        /** Current active option */
        get activeOption() {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        }
        ngOnDestroy() {
            this.destroyPanel();
        }
        writeValue(value) {
            Promise.resolve(null).then(() => this.setTriggerValue(value));
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        setDisabledState(isDisabled) {
            const element = this.elementRef.nativeElement;
            element.disabled = isDisabled;
            this.closePanel();
        }
        openPanel() {
            this.previousValue = this.elementRef.nativeElement.value;
            this.attachOverlay();
            this.updateStatus();
        }
        closePanel() {
            if (this.panelOpen) {
                this.nzAutocomplete.isOpen = this.panelOpen = false;
                if (this.overlayRef && this.overlayRef.hasAttached()) {
                    this.selectionChangeSubscription.unsubscribe();
                    this.overlayOutsideClickSubscription.unsubscribe();
                    this.optionsChangeSubscription.unsubscribe();
                    this.overlayRef.dispose();
                    this.overlayRef = null;
                    this.portal = null;
                }
            }
        }
        handleKeydown(event) {
            const keyCode = event.keyCode;
            const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];
            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]) {
                event.preventDefault();
            }
            if (this.panelOpen && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["TAB"])) {
                // Reset value when tab / ESC close
                if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                    this.setTriggerValue(this.previousValue);
                }
                this.closePanel();
            }
            else if (this.panelOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]) {
                if (this.nzAutocomplete.showPanel && this.activeOption) {
                    event.preventDefault();
                    this.activeOption.selectViaInteraction();
                }
            }
            else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
                event.stopPropagation();
                event.preventDefault();
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]) {
                    this.nzAutocomplete.setPreviousItemActive();
                }
                else {
                    this.nzAutocomplete.setNextItemActive();
                }
                if (this.activeOption) {
                    this.activeOption.scrollIntoViewIfNeeded();
                }
                this.doBackfill();
            }
        }
        handleInput(event) {
            const target = event.target;
            const document = this.document;
            let value = target.value;
            if (target.type === 'number') {
                value = value === '' ? null : parseFloat(value);
            }
            if (this.previousValue !== value) {
                this.previousValue = value;
                this.onChange(value);
                if (this.canOpen() && document.activeElement === event.target) {
                    this.openPanel();
                }
            }
        }
        handleFocus() {
            if (this.canOpen()) {
                this.openPanel();
            }
        }
        handleBlur() {
            this.onTouched();
        }
        /**
         * Subscription data source changes event
         */
        subscribeOptionsChange() {
            const optionChanges = this.nzAutocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(() => this.positionStrategy.reapplyLastPosition()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(0));
            return optionChanges.subscribe(() => {
                this.resetActiveItem();
                if (this.panelOpen) {
                    this.overlayRef.updatePosition();
                }
            });
        }
        /**
         * Subscription option changes event and set the value
         */
        subscribeSelectionChange() {
            return this.nzAutocomplete.selectionChange.subscribe((option) => {
                this.setValueAndClose(option);
            });
        }
        subscribeOverlayOutsideClick() {
            return this.overlayRef.outsidePointerEvents()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((e) => !this.elementRef.nativeElement.contains(e.target)))
                .subscribe(() => {
                this.closePanel();
            });
        }
        attachOverlay() {
            if (!this.nzAutocomplete) {
                throw getNzAutocompleteMissingPanelError();
            }
            if (!this.portal && this.nzAutocomplete.template) {
                this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.nzAutocomplete.template, this.viewContainerRef);
            }
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.selectionChangeSubscription = this.subscribeSelectionChange();
                this.optionsChangeSubscription = this.subscribeOptionsChange();
                this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
                this.overlayRef
                    .detachments()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this.destroy$))
                    .subscribe(() => {
                    this.closePanel();
                });
            }
            this.nzAutocomplete.isOpen = this.panelOpen = true;
        }
        updateStatus() {
            if (this.overlayRef) {
                this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
            }
            this.nzAutocomplete.setVisibility();
            this.resetActiveItem();
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
        }
        destroyPanel() {
            if (this.overlayRef) {
                this.closePanel();
            }
        }
        getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
                positionStrategy: this.getOverlayPosition(),
                disposeOnNavigation: true,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                // default host element width
                width: this.nzAutocomplete.nzWidth || this.getHostWidth()
            });
        }
        getConnectedElement() {
            return this.nzInputGroupWhitSuffixOrPrefixDirective ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef : this.elementRef;
        }
        getHostWidth() {
            return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        getOverlayPosition() {
            const positions = [
                new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            ];
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.getConnectedElement())
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(positions)
                .withTransformOriginOn('.ant-select-dropdown');
            return this.positionStrategy;
        }
        resetActiveItem() {
            const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
            this.nzAutocomplete.clearSelectedOptions(null, true);
            if (index !== -1) {
                this.nzAutocomplete.setActiveItem(index);
                this.nzAutocomplete.activeItem.select(false);
            }
            else {
                this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
            }
        }
        setValueAndClose(option) {
            const value = option.nzValue;
            this.setTriggerValue(option.getLabel());
            this.onChange(value);
            this.elementRef.nativeElement.focus();
            this.closePanel();
        }
        setTriggerValue(value) {
            const option = this.nzAutocomplete.getOption(value);
            const displayValue = option ? option.getLabel() : value;
            this.elementRef.nativeElement.value = displayValue != null ? displayValue : '';
            if (!this.nzAutocomplete.nzBackfill) {
                this.previousValue = displayValue;
            }
        }
        doBackfill() {
            if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
                this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
            }
        }
        canOpen() {
            const element = this.elementRef.nativeElement;
            return !element.readOnly && !element.disabled;
        }
    }
    NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupWhitSuffixOrPrefixDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8)); };
    NzAutocompleteTriggerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
            }
        }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
    return NzAutocompleteTriggerDirective;
})();
let NzAutocompleteModule = /*@__PURE__*/ (() => {
    class NzAutocompleteModule {
    }
    NzAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzAutocompleteModule });
    NzAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"]]] });
    return NzAutocompleteModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzAutocompleteModule, { declarations: function () { return [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"]]; }, exports: function () { return [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-auto-complete.js.map


/***/ }),

/***/ "Kg4J":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/quicksearch/quicksearch-component.ts ***!
  \************************************************************************/
/*! exports provided: CvcQuicksearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcQuicksearchComponent", function() { return CvcQuicksearchComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");











function CvcQuicksearchComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 5);
    }
}
function CvcQuicksearchComponent_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-auto-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CvcQuicksearchComponent_ng_container_6_Template_nz_auto_option_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r5.searchQuery = ""; return ctx_r5.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const res_r4 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r3.urlForResult(res_r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", ctx_r3.urlForResult(res_r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r3.iconNameForResult(res_r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("innerHTML", res_r4.name, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("innerHTML", res_r4.matchingText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    }
}
let CvcQuicksearchComponent = /*@__PURE__*/ (() => {
    class CvcQuicksearchComponent {
        constructor(gql, router) {
            this.gql = gql;
            this.router = router;
            this.searchQuery = "";
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({ query: this.searchQuery });
            let observable = this.queryRef.valueChanges;
            this.searchResults$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'search'));
        }
        refresh() {
            this.queryRef.refetch({ query: this.searchQuery });
        }
        iconNameForResult(res) {
            switch (res.resultType) {
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SearchableEntities"].EvidenceItem:
                    return 'civic:evidence';
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SearchableEntities"].VariantGroup:
                    return 'civic:variantgroup';
                default:
                    return `civic:${res.resultType.toLowerCase()}`;
            }
        }
        urlForResult(res) {
            let name;
            switch (res.resultType) {
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SearchableEntities"].VariantGroup:
                    name = 'variant-groups';
                    break;
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SearchableEntities"].EvidenceItem:
                    name = 'evidence';
                    break;
                default:
                    name = `${res.resultType.toLowerCase()}s`;
            }
            return `/${name}/${res.id}/summary`;
        }
        quicksearchSelected(e) {
            let value = e.target.value;
            this.searchQuery = "";
            this.router.navigate([value]);
        }
    }
    CvcQuicksearchComponent.ɵfac = function CvcQuicksearchComponent_Factory(t) { return new (t || CvcQuicksearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["QuicksearchGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    CvcQuicksearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CvcQuicksearchComponent, selectors: [["cvc-quicksearch"]], decls: 8, vars: 6, consts: [["nzSize", "large", 3, "nzSuffix"], ["placeholder", "Quicksearch", "nz-input", "", 3, "ngModel", "nzAutocomplete", "ngModelChange", "keyup.enter"], ["suffixIcon", ""], ["auto", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "routerLink"], [3, "nzValue", "click"], ["nz-icon", "", 3, "nzType"], [3, "innerHTML"]], template: function CvcQuicksearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-input-group", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CvcQuicksearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchQuery = $event; })("ngModelChange", function CvcQuicksearchComponent_Template_input_ngModelChange_1_listener() { return ctx.refresh(); })("keyup.enter", function CvcQuicksearchComponent_Template_input_keyup_enter_1_listener($event) { return ctx.quicksearchSelected($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CvcQuicksearchComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-autocomplete", null, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CvcQuicksearchComponent_ng_container_6_Template, 8, 5, "ng-container", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSuffix", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchQuery)("nzAutocomplete", _r2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx.searchResults$));
            }
        }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_6__["NzAutocompleteTriggerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_6__["NzAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_6__["NzAutocompleteOptionComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: [""] });
    return CvcQuicksearchComponent;
})();


/***/ }),

/***/ "LY/y":
/*!*************************************************************************!*\
  !*** ./src/app/components/layout/viewer-button/viewer-button.module.ts ***!
  \*************************************************************************/
/*! exports provided: CvcViewerButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcViewerButtonModule", function() { return CvcViewerButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcViewerButtonModule = /*@__PURE__*/ (() => {
    class CvcViewerButtonModule {
    }
    CvcViewerButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcViewerButtonModule });
    CvcViewerButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcViewerButtonModule_Factory(t) { return new (t || CvcViewerButtonModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__["NzDropDownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]] });
    return CvcViewerButtonModule;
})();


/***/ }),

/***/ "Nqz0":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js ***!
  \************************************************************************************/
/*! exports provided: NzContextMenuService, NzContextMenuServiceModule, NzDropDownADirective, NzDropDownDirective, NzDropDownModule, NzDropdownButtonDirective, NzDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContextMenuService", function() { return NzContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContextMenuServiceModule", function() { return NzContextMenuServiceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownADirective", function() { return NzDropDownADirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownDirective", function() { return NzDropDownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownModule", function() { return NzDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropdownButtonDirective", function() { return NzDropdownButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropdownMenuComponent", function() { return NzDropdownMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");




















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r1.setMouseState(true); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.setMouseState(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ant-dropdown-rtl", ctx_r0.dir === "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("@slideMotion", "enter")("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
    }
}
const _c0 = ["*"];
const listOfPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].bottomLeft, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].bottomRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].topRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].topLeft];
let NzDropDownDirective = /*@__PURE__*/ (() => {
    class NzDropDownDirective {
        constructor(elementRef, overlay, renderer, viewContainerRef, platform) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.platform = platform;
            this.overlayRef = null;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef.nativeElement)
                .withLockedPosition()
                .withTransformOriginOn('.ant-dropdown');
            this.inputVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
            this.nzTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]('hover');
            this.overlayClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            this.nzDropdownMenu = null;
            this.nzTrigger = 'hover';
            this.nzMatchWidthElement = null;
            /**
             * @deprecated Not supported, use `nzHasBackDrop` instead.
             * @breaking-change 12.0.0
             */
            this.nzBackdrop = false;
            this.nzHasBackdrop = false;
            this.nzClickHide = true;
            this.nzDisabled = false;
            this.nzVisible = false;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzPlacement = 'bottomLeft';
            this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-dropdown-trigger');
        }
        setDropdownMenuValue(key, value) {
            if (this.nzDropdownMenu) {
                this.nzDropdownMenu.setValue(key, value);
            }
        }
        ngOnInit() { }
        ngAfterViewInit() {
            if (this.nzDropdownMenu) {
                const nativeElement = this.elementRef.nativeElement;
                /** host mouse state **/
                const hostMouseState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false)));
                /** menu mouse state **/
                const menuMouseState$ = this.nzDropdownMenu.mouseState$;
                /** merged mouse state **/
                const mergedMouseState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(menuMouseState$, hostMouseState$);
                /** host click state **/
                const hostClickState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(true));
                /** visible state switch by nzTrigger **/
                const visibleStateByTrigger$ = this.nzTrigger$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(trigger => {
                    if (trigger === 'hover') {
                        return mergedMouseState$;
                    }
                    else if (trigger === 'click') {
                        return hostClickState$;
                    }
                    else {
                        return rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
                    }
                }));
                const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this.nzClickHide), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false));
                const domTriggerVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => !this.nzDisabled));
                const visible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.inputVisible$, domTriggerVisible$);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(([visible, sub]) => visible || sub), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["auditTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this.platform.isBrowser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                    .subscribe((visible) => {
                    const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
                    const triggerWidth = element.getBoundingClientRect().width;
                    if (this.nzVisible !== visible) {
                        this.nzVisibleChange.emit(visible);
                    }
                    this.nzVisible = visible;
                    if (visible) {
                        /** set up overlayRef **/
                        if (!this.overlayRef) {
                            /** new overlay **/
                            this.overlayRef = this.overlay.create({
                                positionStrategy: this.positionStrategy,
                                minWidth: triggerWidth,
                                disposeOnNavigation: true,
                                hasBackdrop: (this.nzHasBackdrop || this.nzBackdrop) && this.nzTrigger === 'click',
                                scrollStrategy: this.overlay.scrollStrategies.reposition()
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(e => e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(e))))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                                .subscribe(this.overlayClose$);
                        }
                        else {
                            /** update overlay config **/
                            const overlayConfig = this.overlayRef.getConfig();
                            overlayConfig.minWidth = triggerWidth;
                        }
                        /** open dropdown with animation **/
                        this.positionStrategy.withPositions([ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"][this.nzPlacement], ...listOfPositions]);
                        /** reset portal if needed **/
                        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
                            this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.nzDropdownMenu.templateRef, this.viewContainerRef);
                        }
                        this.overlayRef.attach(this.portal);
                    }
                    else {
                        /** detach overlayRef if needed **/
                        if (this.overlayRef) {
                            this.overlayRef.detach();
                        }
                    }
                });
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
            }
        }
        ngOnChanges(changes) {
            const { nzVisible, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTrigger, nzBackdrop } = changes;
            if (nzTrigger) {
                this.nzTrigger$.next(this.nzTrigger);
            }
            if (nzVisible) {
                this.inputVisible$.next(this.nzVisible);
            }
            if (nzDisabled) {
                const nativeElement = this.elementRef.nativeElement;
                if (this.nzDisabled) {
                    this.renderer.setAttribute(nativeElement, 'disabled', '');
                    this.inputVisible$.next(false);
                }
                else {
                    this.renderer.removeAttribute(nativeElement, 'disabled');
                }
            }
            if (nzOverlayClassName) {
                this.setDropdownMenuValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzBackdrop) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__["warnDeprecation"])('`nzBackdrop` in dropdown component will be removed in 12.0.0, please use `nzHasBackdrop` instead.');
            }
        }
    }
    NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
    NzDropDownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzHasBackdrop: "nzHasBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDropDownDirective.prototype, "nzHasBackdrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    return NzDropDownDirective;
})();
let NzContextMenuServiceModule = /*@__PURE__*/ (() => {
    class NzContextMenuServiceModule {
    }
    NzContextMenuServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NzContextMenuServiceModule });
    NzContextMenuServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
    return NzContextMenuServiceModule;
})();
let NzDropDownADirective = /*@__PURE__*/ (() => {
    class NzDropDownADirective {
        constructor(elementRef) {
            this.elementRef = elementRef;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-dropdown-link');
        }
    }
    NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
    NzDropDownADirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]] });
    return NzDropDownADirective;
})();
let NzDropdownButtonDirective = /*@__PURE__*/ (() => {
    class NzDropdownButtonDirective {
        constructor(renderer, nzButtonGroupComponent, elementRef) {
            this.renderer = renderer;
            this.nzButtonGroupComponent = nzButtonGroupComponent;
            this.elementRef = elementRef;
        }
        ngAfterViewInit() {
            const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
            if (this.nzButtonGroupComponent && parentElement) {
                this.renderer.addClass(parentElement, 'ant-dropdown-button');
            }
        }
    }
    NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) { return new (t || NzDropdownButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonGroupComponent"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
    NzDropdownButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropdownButtonDirective, selectors: [["", "nz-button", "", "nz-dropdown", ""]] });
    return NzDropdownButtonDirective;
})();
let NzDropdownMenuComponent = /*@__PURE__*/ (() => {
    class NzDropdownMenuComponent {
        constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.nzMenuService = nzMenuService;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this.mouseState$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
            this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
            this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        }
        setMouseState(visible) {
            this.mouseState$.next(visible);
        }
        setValue(key, value) {
            this[key] = value;
            this.cdr.markForCheck();
        }
        ngOnInit() {
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngAfterContentInit() {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_15__["NzNoAnimationDirective"], 9)); };
    NzDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
            }
        }, exportAs: ["nzDropdownMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["MenuService"],
                /** menu is inside dropdown-menu component **/
                {
                    provide: ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzIsMenuInsideDropDownToken"],
                    useValue: true
                }
            ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_15__["NzNoAnimationDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_19__["slideMotion"]] }, changeDetection: 0 });
    return NzDropdownMenuComponent;
})();
let NzDropDownModule = /*@__PURE__*/ (() => {
    class NzDropDownModule {
    }
    NzDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NzDropDownModule });
    NzDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonModule"],
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
                ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_15__["NzNoAnimationModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"],
                ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
                NzContextMenuServiceModule,
                ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"]
            ], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuModule"]] });
    return NzDropDownModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NzDropDownModule, { declarations: function () { return [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]; }, imports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonModule"],
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
                ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_15__["NzNoAnimationModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"],
                ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"], NzContextMenuServiceModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"]];
        }, exports: function () { return [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuModule"], NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]; } });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const listOfPositions$1 = [
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
];
let NzContextMenuService = /*@__PURE__*/ (() => {
    class NzContextMenuService {
        constructor(overlay) {
            this.overlay = overlay;
            this.overlayRef = null;
            this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        }
        create($event, nzDropdownMenuComponent) {
            this.close(true);
            const { x, y } = $event;
            if ($event instanceof MouseEvent) {
                $event.preventDefault();
            }
            const positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo({ x, y })
                .withPositions(listOfPositions$1)
                .withTransformOriginOn('.ant-dropdown');
            this.overlayRef = this.overlay.create({
                positionStrategy,
                disposeOnNavigation: true,
                scrollStrategy: this.overlay.scrollStrategies.close()
            });
            this.closeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(nzDropdownMenuComponent.descendantMenuItemClick$, Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(event => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), 
            /** handle firefox contextmenu event **/
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(event => event.button !== 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))).subscribe(() => {
                this.close();
            });
            this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        }
        close(clear = false) {
            if (this.overlayRef) {
                this.overlayRef.detach();
                if (clear) {
                    this.overlayRef.dispose();
                }
                this.overlayRef = null;
                this.closeSubscription.unsubscribe();
            }
        }
    }
    NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"])); };
    NzContextMenuService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"])); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
    return NzContextMenuService;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-dropdown.js.map


/***/ }),

/***/ "Q8cG":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js ***!
  \********************************************************************************/
/*! exports provided: MenuDropDownTokenFactory, MenuGroupFactory, MenuService, MenuServiceFactory, NzIsMenuInsideDropDownToken, NzMenuDirective, NzMenuDividerDirective, NzMenuGroupComponent, NzMenuItemDirective, NzMenuModule, NzMenuServiceLocalToken, NzSubMenuComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent, NzSubmenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDropDownTokenFactory", function() { return MenuDropDownTokenFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupFactory", function() { return MenuGroupFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceFactory", function() { return MenuServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzIsMenuInsideDropDownToken", function() { return NzIsMenuInsideDropDownToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuDirective", function() { return NzMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuDividerDirective", function() { return NzMenuDividerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuGroupComponent", function() { return NzMenuGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuItemDirective", function() { return NzMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuModule", function() { return NzMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuServiceLocalToken", function() { return NzMenuServiceLocalToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubMenuComponent", function() { return NzSubMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubMenuTitleComponent", function() { return NzSubMenuTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuInlineChildComponent", function() { return NzSubmenuInlineChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuNoneInlineChildComponent", function() { return NzSubmenuNoneInlineChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuService", function() { return NzSubmenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */









const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_ng_content_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngIf", "!nzTitle"]);
    }
}
function NzSubMenuComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 6);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx_r2.mode)("nzOpen", ctx_r2.nzOpen)("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("menuClass", ctx_r2.nzMenuClassName)("templateOutlet", _r5);
    }
}
function NzSubMenuComponent_ng_template_4_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.setMouseEnterState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx_r7.theme)("mode", ctx_r7.mode)("nzOpen", ctx_r7.nzOpen)("position", ctx_r7.position)("nzDisabled", ctx_r7.nzDisabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.nzMenuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
    }
}
function NzSubMenuComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 10, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("positionChange", function NzSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onPositionChange($event); });
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPositions", ctx_r4.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx_r4.triggerWidth)("cdkConnectedOverlayOpen", ctx_r4.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
    }
}
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 1);
    }
}
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
const _c3 = ["titleElement"];
const _c4 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
    }
}
function NzMenuGroupComponent_ng_content_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 1, ["*ngIf", "!nzTitle"]);
    }
}
const _c5 = ["*", [["", "title", ""]]];
const _c6 = ["*", "[title]"];
const _c7 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 4);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
    }
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
    }
}
function NzSubMenuTitleComponent_span_3_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
    }
}
function NzSubMenuTitleComponent_span_3_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
    }
}
function NzSubMenuTitleComponent_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzSubMenuTitleComponent_span_3_i_1_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzSubMenuTitleComponent_span_3_i_2_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r2.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
    }
}
function NzSubMenuTitleComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
    }
}
const _c8 = ["*"];
const _c9 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) { }
const _c10 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) { }
let MenuService = /*@__PURE__*/ (() => {
    class MenuService {
        constructor() {
            /** all descendant menu click **/
            this.descendantMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** child menu item click **/
            this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('light');
            this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('vertical');
            this.inlineIndent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](24);
            this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        }
        onDescendantMenuItemClick(menu) {
            this.descendantMenuItemClick$.next(menu);
        }
        onChildMenuItemClick(menu) {
            this.childMenuItemClick$.next(menu);
        }
        setMode(mode) {
            this.mode$.next(mode);
        }
        setTheme(theme) {
            this.theme$.next(theme);
        }
        setInlineIndent(indent) {
            this.inlineIndent$.next(indent);
        }
    }
    MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });
    return MenuService;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzIsMenuInsideDropDownToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('NzIsInDropDownMenuToken');
const NzMenuServiceLocalToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('NzMenuServiceLocalToken');
let NzSubmenuService = /*@__PURE__*/ (() => {
    class NzSubmenuService {
        constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
            this.nzHostSubmenuService = nzHostSubmenuService;
            this.nzMenuService = nzMenuService;
            this.isMenuInsideDropDown = isMenuInsideDropDown;
            this.mode$ = this.nzMenuService.mode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(mode => {
                if (mode === 'inline') {
                    return 'inline';
                    /** if inside another submenu, set the mode to vertical **/
                }
                else if (mode === 'vertical' || this.nzHostSubmenuService) {
                    return 'vertical';
                }
                else {
                    return 'horizontal';
                }
            }));
            this.level = 1;
            this.isCurrentSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
            this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
            /** submenu title & overlay mouse enter status **/
            this.isMouseEnterTitleOrOverlay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            if (this.nzHostSubmenuService) {
                this.level = this.nzHostSubmenuService.level + 1;
            }
            /** close if menu item clicked **/
            const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => this.mode$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(mode => mode !== 'inline' || this.isMenuInsideDropDown), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(false));
            const isCurrentSubmenuOpen$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
            /** combine the child submenu status with current submenu status to calculate host submenu open **/
            const isSubMenuOpenWithDebounce$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
            isSubMenuOpenWithDebounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(data => {
                this.setOpenStateWithoutDebounce(data);
                if (this.nzHostSubmenuService) {
                    /** set parent submenu's child submenu open status **/
                    this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
                }
                else {
                    this.nzMenuService.isChildSubMenuOpen$.next(data);
                }
            });
        }
        /**
         * menu item inside submenu clicked
         * @param menu
         */
        onChildMenuItemClick(menu) {
            this.childMenuItemClick$.next(menu);
        }
        setOpenStateWithoutDebounce(value) {
            this.isCurrentSubMenuOpen$.next(value);
        }
        setMouseEnterTitleOrOverlayState(value) {
            this.isMouseEnterTitleOrOverlay$.next(value);
        }
    }
    NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NzSubmenuService, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NzIsMenuInsideDropDownToken)); };
    NzSubmenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
    return NzSubmenuService;
})();
let NzMenuItemDirective = /*@__PURE__*/ (() => {
    class NzMenuItemDirective {
        constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, routerLinkWithHref, router) {
            this.nzMenuService = nzMenuService;
            this.cdr = cdr;
            this.nzSubmenuService = nzSubmenuService;
            this.isMenuInsideDropDown = isMenuInsideDropDown;
            this.directionality = directionality;
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
            this.router = router;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
            this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.inlinePaddingLeft = null;
            this.dir = 'ltr';
            this.nzDisabled = false;
            this.nzSelected = false;
            this.nzDanger = false;
            this.nzMatchRouterExact = false;
            this.nzMatchRouter = false;
            if (router) {
                this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])).subscribe(() => {
                    this.updateRouterActive();
                });
            }
        }
        /** clear all item selected status except this */
        clickMenuItem(e) {
            if (this.nzDisabled) {
                e.preventDefault();
                e.stopPropagation();
            }
            else {
                this.nzMenuService.onDescendantMenuItemClick(this);
                if (this.nzSubmenuService) {
                    /** menu item inside the submenu **/
                    this.nzSubmenuService.onChildMenuItemClick(this);
                }
                else {
                    /** menu item inside the root menu **/
                    this.nzMenuService.onChildMenuItemClick(this);
                }
            }
        }
        setSelectedState(value) {
            this.nzSelected = value;
            this.selected$.next(value);
        }
        updateRouterActive() {
            if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
                return;
            }
            Promise.resolve().then(() => {
                const hasActiveLinks = this.hasActiveLinks();
                if (this.nzSelected !== hasActiveLinks) {
                    this.nzSelected = hasActiveLinks;
                    this.setSelectedState(this.nzSelected);
                    this.cdr.markForCheck();
                }
            });
        }
        hasActiveLinks() {
            const isActiveCheckFn = this.isLinkActive(this.router);
            return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
                (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
                this.listOfRouterLink.some(isActiveCheckFn) ||
                this.listOfRouterLinkWithHref.some(isActiveCheckFn));
        }
        isLinkActive(router) {
            return (link) => router.isActive(link.urlTree, this.nzMatchRouterExact);
        }
        ngOnInit() {
            var _a;
            /** store origin padding in padding */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(([mode, inlineIndent]) => {
                this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
            });
        }
        ngAfterContentInit() {
            this.listOfRouterLink.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => this.updateRouterActive());
            this.listOfRouterLinkWithHref.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => this.updateRouterActive());
            this.updateRouterActive();
        }
        ngOnChanges(changes) {
            if (changes.nzSelected) {
                this.setSelectedState(this.nzSelected);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzSubmenuService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], 8)); };
    NzMenuItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfRouterLink = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfRouterLinkWithHref = _t);
            }
        }, hostVars: 20, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
            }
        }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzDanger: "nzDanger", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter", nzPaddingLeft: "nzPaddingLeft" }, exportAs: ["nzMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
    return NzMenuItemDirective;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const listOfVerticalPositions = [
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].rightTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].right,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].rightBottom,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].leftTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].left,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].leftBottom
];
const listOfHorizontalPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["POSITION_MAP"].bottomLeft];
let NzSubMenuComponent = /*@__PURE__*/ (() => {
    class NzSubMenuComponent {
        constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
            this.nzMenuService = nzMenuService;
            this.cdr = cdr;
            this.nzSubmenuService = nzSubmenuService;
            this.platform = platform;
            this.isMenuInsideDropDown = isMenuInsideDropDown;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this.nzMenuClassName = '';
            this.nzPaddingLeft = null;
            this.nzTitle = null;
            this.nzIcon = null;
            this.nzOpen = false;
            this.nzDisabled = false;
            this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.cdkOverlayOrigin = null;
            this.listOfNzSubMenuComponent = null;
            this.listOfNzMenuItemDirective = null;
            this.level = this.nzSubmenuService.level;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.position = 'right';
            this.triggerWidth = null;
            this.theme = 'light';
            this.mode = 'vertical';
            this.inlinePaddingLeft = null;
            this.overlayPositions = listOfVerticalPositions;
            this.isSelected = false;
            this.isActive = false;
            this.dir = 'ltr';
        }
        /** set the submenu host open status directly **/
        setOpenStateWithoutDebounce(open) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(open);
        }
        toggleSubMenu() {
            this.setOpenStateWithoutDebounce(!this.nzOpen);
        }
        setMouseEnterState(value) {
            this.isActive = value;
            if (this.mode !== 'inline') {
                this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
            }
        }
        setTriggerWidth() {
            if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
                /** TODO: fast dom **/
                this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
            }
        }
        onPositionChange(position) {
            const placement = Object(ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["getPlacementName"])(position);
            if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
                this.position = 'right';
            }
            else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
                this.position = 'left';
            }
            this.cdr.markForCheck();
        }
        ngOnInit() {
            var _a;
            /** submenu theme update **/
            this.nzMenuService.theme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(theme => {
                this.theme = theme;
                this.cdr.markForCheck();
            });
            /** submenu mode update **/
            this.nzSubmenuService.mode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(mode => {
                this.mode = mode;
                if (mode === 'horizontal') {
                    this.overlayPositions = listOfHorizontalPositions;
                }
                else if (mode === 'vertical') {
                    this.overlayPositions = listOfVerticalPositions;
                }
                this.cdr.markForCheck();
            });
            /** inlineIndent update **/
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(([mode, inlineIndent]) => {
                this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
                this.cdr.markForCheck();
            });
            /** current submenu open status **/
            this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(open => {
                this.isActive = open;
                if (open !== this.nzOpen) {
                    this.setTriggerWidth();
                    this.nzOpen = open;
                    this.nzOpenChange.emit(this.nzOpen);
                    this.cdr.markForCheck();
                }
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.markForCheck();
            });
        }
        ngAfterContentInit() {
            this.setTriggerWidth();
            const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
            const changes = listOfNzMenuItemDirective.changes;
            const mergedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...[changes, ...listOfNzMenuItemDirective.map(menu => menu.selected$)]);
            changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(listOfNzMenuItemDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => mergedObservable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => listOfNzMenuItemDirective.some(e => e.nzSelected)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(selected => {
                this.isSelected = selected;
                this.cdr.markForCheck();
            });
        }
        ngOnChanges(changes) {
            const { nzOpen } = changes;
            if (nzOpen) {
                this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
                this.setTriggerWidth();
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzSubmenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], 9)); };
    NzSubMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
            }
        }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkOverlayOrigin"], 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
            }
        }, hostVars: 34, hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([NzSubmenuService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 9, consts: [["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["nz-submenu-none-inline-child", "", 3, "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function NzSubMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) { return ctx.setMouseEnterState($event); })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() { return ctx.toggleSubMenu(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzSubMenuComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzSubMenuComponent_div_3_Template, 1, 6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzSubMenuComponent_ng_template_4_Template, 1, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mode === "inline")("ngIfElse", _r3);
            }
        }, directives: function () { return [NzSubMenuTitleComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], NzSubmenuInlineChildComponent, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"], NzSubmenuNoneInlineChildComponent]; }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
    return NzSubMenuComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
let NzMenuDirective = /*@__PURE__*/ (() => {
    class NzMenuDirective {
        constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
            this.nzMenuService = nzMenuService;
            this.isMenuInsideDropDown = isMenuInsideDropDown;
            this.cdr = cdr;
            this.directionality = directionality;
            this.nzInlineIndent = 24;
            this.nzTheme = 'light';
            this.nzMode = 'vertical';
            this.nzInlineCollapsed = false;
            this.nzSelectable = !this.isMenuInsideDropDown;
            this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.actualMode = 'vertical';
            this.dir = 'ltr';
            this.inlineCollapsed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.nzInlineCollapsed);
            this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.nzMode);
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.listOfOpenedNzSubMenuComponent = [];
        }
        setInlineCollapsed(inlineCollapsed) {
            this.nzInlineCollapsed = inlineCollapsed;
            this.inlineCollapsed$.next(inlineCollapsed);
        }
        updateInlineCollapse() {
            if (this.listOfNzMenuItemDirective) {
                if (this.nzInlineCollapsed) {
                    this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                    this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
                }
                else {
                    this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(true));
                    this.listOfOpenedNzSubMenuComponent = [];
                }
            }
        }
        ngOnInit() {
            var _a;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.inlineCollapsed$, this.mode$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(([inlineCollapsed, mode]) => {
                this.actualMode = inlineCollapsed ? 'vertical' : mode;
                this.nzMenuService.setMode(this.actualMode);
                this.cdr.markForCheck();
            });
            this.nzMenuService.descendantMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(menu => {
                this.nzClick.emit(menu);
                if (this.nzSelectable && !menu.nzMatchRouter) {
                    this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
                }
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.nzMenuService.setMode(this.actualMode);
                this.cdr.markForCheck();
            });
        }
        ngAfterContentInit() {
            this.inlineCollapsed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.updateInlineCollapse();
                this.cdr.markForCheck();
            });
        }
        ngOnChanges(changes) {
            const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
            if (nzInlineCollapsed) {
                this.inlineCollapsed$.next(this.nzInlineCollapsed);
            }
            if (nzInlineIndent) {
                this.nzMenuService.setInlineIndent(this.nzInlineIndent);
            }
            if (nzTheme) {
                this.nzMenuService.setTheme(this.nzTheme);
            }
            if (nzMode) {
                this.mode$.next(this.nzMode);
                if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                    this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
                }
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
            }
        }, hostVars: 34, hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
            }
        }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
                {
                    provide: NzMenuServiceLocalToken,
                    useClass: MenuService
                },
                /** use the top level service **/
                {
                    provide: MenuService,
                    useFactory: MenuServiceFactory,
                    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), MenuService], NzMenuServiceLocalToken]
                },
                /** check if menu inside dropdown-menu component **/
                {
                    provide: NzIsMenuInsideDropDownToken,
                    useFactory: MenuDropDownTokenFactory,
                    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), NzIsMenuInsideDropDownToken]]
                }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzMenuDirective.prototype, "nzSelectable", void 0);
    return NzMenuDirective;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
let NzMenuGroupComponent = /*@__PURE__*/ (() => {
    class NzMenuGroupComponent {
        constructor(elementRef, renderer, isMenuInsideDropDown) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.isMenuInsideDropDown = isMenuInsideDropDown;
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
            this.renderer.addClass(elementRef.nativeElement, className);
        }
        ngAfterViewInit() {
            const ulElement = this.titleElement.nativeElement.nextElementSibling;
            if (ulElement) {
                /** add classname to ul **/
                const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
                this.renderer.addClass(ulElement, className);
            }
        }
    }
    NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken)); };
    NzMenuGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
            }
        }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
                /** check if menu inside dropdown-menu component **/
                {
                    provide: NzIsMenuInsideDropDownToken,
                    useFactory: MenuGroupFactory,
                    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), NzIsMenuInsideDropDownToken]]
                }
            ])], attrs: _c4, ngContentSelectors: _c6, decls: 5, vars: 6, consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"], [4, "ngIf"]], template: function NzMenuGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzMenuGroupComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
            }
        }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], encapsulation: 2, changeDetection: 0 });
    return NzMenuGroupComponent;
})();
let NzMenuDividerDirective = /*@__PURE__*/ (() => {
    class NzMenuDividerDirective {
        constructor(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
        }
    }
    NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
    NzMenuDividerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
    return NzMenuDividerDirective;
})();
let NzSubMenuTitleComponent = /*@__PURE__*/ (() => {
    class NzSubMenuTitleComponent {
        constructor(cdr, directionality) {
            this.cdr = cdr;
            this.directionality = directionality;
            this.nzIcon = null;
            this.nzTitle = null;
            this.isMenuInsideDropDown = false;
            this.nzDisabled = false;
            this.paddingLeft = null;
            this.mode = 'vertical';
            this.toggleSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
        ngOnInit() {
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        setMouseState(state) {
            if (!this.nzDisabled) {
                this.subMenuMouseState.next(state);
            }
        }
        clickTitle() {
            if (this.mode === 'inline' && !this.nzDisabled) {
                this.toggleSubMenu.emit();
            }
        }
    }
    NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzSubMenuTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSubMenuTitleComponent, selectors: [["", "nz-submenu-title", ""]], hostVars: 8, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
            }
        }, inputs: { nzIcon: "nzIcon", nzTitle: "nzTitle", isMenuInsideDropDown: "isMenuInsideDropDown", nzDisabled: "nzDisabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuTitle"], attrs: _c7, ngContentSelectors: _c8, decls: 6, vars: 4, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch"], ["nz-icon", "", "nzType", "left", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzSubMenuTitleComponent_span_3_Template, 3, 2, "span", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzSubMenuTitleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzIcon);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r3);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchDefault"]], encapsulation: 2, changeDetection: 0 });
    return NzSubMenuTitleComponent;
})();
let NzSubmenuInlineChildComponent = /*@__PURE__*/ (() => {
    class NzSubmenuInlineChildComponent {
        constructor(elementRef, renderer, directionality) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.directionality = directionality;
            this.templateOutlet = null;
            this.menuClass = '';
            this.mode = 'vertical';
            this.nzOpen = false;
            this.listOfCacheClassName = [];
            this.expandState = 'collapsed';
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
        }
        calcMotionState() {
            if (this.nzOpen) {
                this.expandState = 'expanded';
            }
            else {
                this.expandState = 'collapsed';
            }
        }
        ngOnInit() {
            var _a;
            this.calcMotionState();
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
            });
        }
        ngOnChanges(changes) {
            const { mode, nzOpen, menuClass } = changes;
            if (mode || nzOpen) {
                this.calcMotionState();
            }
            if (menuClass) {
                if (this.listOfCacheClassName.length) {
                    this.listOfCacheClassName
                        .filter(item => !!item)
                        .forEach(className => {
                        this.renderer.removeClass(this.elementRef.nativeElement, className);
                    });
                }
                if (this.menuClass) {
                    this.listOfCacheClassName = this.menuClass.split(' ');
                    this.listOfCacheClassName
                        .filter(item => !!item)
                        .forEach(className => {
                        this.renderer.addClass(this.elementRef.nativeElement, className);
                    });
                }
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzSubmenuInlineChildComponent.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) { return new (t || NzSubmenuInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzSubmenuInlineChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSubmenuInlineChildComponent, selectors: [["", "nz-submenu-inline-child", ""]], hostVars: 3, hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@collapseMotion", ctx.expandState);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-menu-rtl", ctx.dir === "rtl");
            }
        }, inputs: { templateOutlet: "templateOutlet", menuClass: "menuClass", mode: "mode", nzOpen: "nzOpen" }, exportAs: ["nzSubmenuInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c9, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["collapseMotion"]] }, changeDetection: 0 });
    return NzSubmenuInlineChildComponent;
})();
let NzSubmenuNoneInlineChildComponent = /*@__PURE__*/ (() => {
    class NzSubmenuNoneInlineChildComponent {
        constructor(elementRef, directionality) {
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.menuClass = '';
            this.theme = 'light';
            this.templateOutlet = null;
            this.isMenuInsideDropDown = false;
            this.mode = 'vertical';
            this.position = 'right';
            this.nzDisabled = false;
            this.nzOpen = false;
            this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.expandState = 'collapsed';
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-menu-submenu', 'ant-menu-submenu-popup');
        }
        setMouseState(state) {
            if (!this.nzDisabled) {
                this.subMenuMouseState.next(state);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        calcMotionState() {
            if (this.nzOpen) {
                if (this.mode === 'horizontal') {
                    this.expandState = 'bottom';
                }
                else if (this.mode === 'vertical') {
                    this.expandState = 'active';
                }
            }
            else {
                this.expandState = 'collapsed';
            }
        }
        ngOnInit() {
            var _a;
            this.calcMotionState();
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
            });
        }
        ngOnChanges(changes) {
            const { mode, nzOpen } = changes;
            if (mode || nzOpen) {
                this.calcMotionState();
            }
        }
    }
    NzSubmenuNoneInlineChildComponent.ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(t) { return new (t || NzSubmenuNoneInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzSubmenuNoneInlineChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSubmenuNoneInlineChildComponent, selectors: [["", "nz-submenu-none-inline-child", ""]], hostVars: 14, hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
            }
        }, inputs: { menuClass: "menuClass", theme: "theme", templateOutlet: "templateOutlet", isMenuInsideDropDown: "isMenuInsideDropDown", mode: "mode", position: "position", nzDisabled: "nzDisabled", nzOpen: "nzOpen" }, outputs: { subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuNoneInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c10, decls: 2, vars: 16, consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]], template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuClass);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomBigMotion"], ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]] }, changeDetection: 0 });
    return NzSubmenuNoneInlineChildComponent;
})();
let NzMenuModule = /*@__PURE__*/ (() => {
    class NzMenuModule {
    }
    NzMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzMenuModule });
    NzMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__["NzOutletModule"]]] });
    return NzMenuModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzMenuModule, { declarations: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__["NzOutletModule"]]; }, exports: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]; } }); })();
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

//# sourceMappingURL=ng-zorro-antd-menu.js.map


/***/ }),

/***/ "QlLE":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js ***!
  \*********************************************************************************/
/*! exports provided: NZ_EMPTY_COMPONENT_NAME, NzEmbedEmptyComponent, NzEmptyComponent, NzEmptyDefaultComponent, NzEmptyModule, NzEmptySimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_EMPTY_COMPONENT_NAME", function() { return NZ_EMPTY_COMPONENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmbedEmptyComponent", function() { return NzEmbedEmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyComponent", function() { return NzEmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyDefaultComponent", function() { return NzEmptyDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyModule", function() { return NzEmptyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptySimpleComponent", function() { return NzEmptySimpleComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 6);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundImage", "simple");
    }
}
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 7);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundImage", "simple");
    }
}
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty");
    }
}
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "small");
    }
}
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkPortalOutlet", ctx_r5.contentPortal);
    }
}
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.content, " ");
    }
}
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.contentType !== "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.contentType === "string");
    }
}
function NzEmptyComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.nzNotFoundImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r5.isContentString ? ctx_r5.nzNotFoundContent : "empty");
    }
}
function NzEmptyComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
    }
}
function NzEmptyComponent_nz_empty_default_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty-default");
    }
}
function NzEmptyComponent_nz_empty_simple_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty-simple");
    }
}
function NzEmptyComponent_p_4_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.isContentString ? ctx_r6.nzNotFoundContent : ctx_r6.locale["description"], " ");
    }
}
function NzEmptyComponent_p_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_p_4_ng_container_1_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzNotFoundContent);
    }
}
function NzEmptyComponent_div_5_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.nzNotFoundFooter, " ");
    }
}
function NzEmptyComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzNotFoundFooter);
    }
}
const NZ_EMPTY_COMPONENT_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('nz-empty-component-name');
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getEmptySize(componentName) {
    switch (componentName) {
        case 'table':
        case 'list':
            return 'normal';
        case 'select':
        case 'tree-select':
        case 'cascader':
        case 'transfer':
            return 'small';
        default:
            return '';
    }
}
let NzEmbedEmptyComponent = /*@__PURE__*/ (() => {
    class NzEmbedEmptyComponent {
        constructor(configService, viewContainerRef, cdr, injector) {
            this.configService = configService;
            this.viewContainerRef = viewContainerRef;
            this.cdr = cdr;
            this.injector = injector;
            this.contentType = 'string';
            this.size = '';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        ngOnChanges(changes) {
            if (changes.nzComponentName) {
                this.size = getEmptySize(changes.nzComponentName.currentValue);
            }
            if (changes.specificContent && !changes.specificContent.isFirstChange()) {
                this.content = changes.specificContent.currentValue;
                this.renderEmpty();
            }
        }
        ngOnInit() {
            this.subscribeDefaultEmptyContentChange();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        renderEmpty() {
            const content = this.content;
            if (typeof content === 'string') {
                this.contentType = 'string';
            }
            else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
                const context = { $implicit: this.nzComponentName };
                this.contentType = 'template';
                this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](content, this.viewContainerRef, context);
            }
            else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"]) {
                const injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
                    parent: this.injector,
                    providers: [{ provide: NZ_EMPTY_COMPONENT_NAME, useValue: this.nzComponentName }]
                });
                this.contentType = 'component';
                this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](content, this.viewContainerRef, injector);
            }
            else {
                this.contentType = 'string';
                this.contentPortal = undefined;
            }
            this.cdr.detectChanges();
        }
        subscribeDefaultEmptyContentChange() {
            this.configService
                .getConfigChangeEventForComponent('empty')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.content = this.specificContent || this.getUserDefaultEmptyContent();
                this.renderEmpty();
            });
        }
        getUserDefaultEmptyContent() {
            return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
        }
    }
    NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    NzEmbedEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content && ctx.specificContent !== null);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], NzEmptyComponent, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
    return NzEmbedEmptyComponent;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzEmptyDefaultImages = ['default', 'simple'];
let NzEmptyComponent = /*@__PURE__*/ (() => {
    class NzEmptyComponent {
        constructor(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.nzNotFoundImage = 'default';
            this.isContentString = false;
            this.isImageBuildIn = true;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        ngOnChanges(changes) {
            const { nzNotFoundContent, nzNotFoundImage } = changes;
            if (nzNotFoundContent) {
                const content = nzNotFoundContent.currentValue;
                this.isContentString = typeof content === 'string';
            }
            if (nzNotFoundImage) {
                const image = nzNotFoundImage.currentValue || 'default';
                this.isImageBuildIn = NzEmptyDefaultImages.findIndex(i => i === image) > -1;
            }
        }
        ngOnInit() {
            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.locale = this.i18n.getLocaleData('Empty');
                this.cdr.markForCheck();
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    NzEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostAttrs: [1, "ant-empty"], inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 5, consts: [[1, "ant-empty-image"], [4, "ngIf"], ["class", "ant-empty-description", 4, "ngIf"], ["class", "ant-empty-footer", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmptyComponent_nz_empty_default_2_Template, 1, 0, "nz-empty-default", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzEmptyComponent_nz_empty_simple_3_Template, 1, 0, "nz-empty-simple", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzEmptyComponent_p_4_Template, 2, 1, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NzEmptyComponent_div_5_Template, 2, 1, "div", 3);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isImageBuildIn);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage !== "simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage === "simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzNotFoundContent !== null);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzNotFoundFooter);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], NzEmptyDefaultComponent, NzEmptySimpleComponent]; }, encapsulation: 2, changeDetection: 0 });
    return NzEmptyComponent;
})();
let NzEmptyDefaultComponent = /*@__PURE__*/ (() => {
    class NzEmptyDefaultComponent {
    }
    NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) { return new (t || NzEmptyDefaultComponent)(); };
    NzEmptyDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptyDefaultComponent, selectors: [["nz-empty-default"]], exportAs: ["nzEmptyDefault"], decls: 12, vars: 0, consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]], template: function NzEmptyDefaultComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ellipse", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "g", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ellipse", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzEmptyDefaultComponent;
})();
let NzEmptySimpleComponent = /*@__PURE__*/ (() => {
    class NzEmptySimpleComponent {
    }
    NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) { return new (t || NzEmptySimpleComponent)(); };
    NzEmptySimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptySimpleComponent, selectors: [["nz-empty-simple"]], exportAs: ["nzEmptySimple"], decls: 6, vars: 0, consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]], template: function NzEmptySimpleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzEmptySimpleComponent;
})();
let NzEmptyModule = /*@__PURE__*/ (() => {
    class NzEmptyModule {
    }
    NzEmptyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzEmptyModule });
    NzEmptyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"]]] });
    return NzEmptyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzEmptyModule, { declarations: function () { return [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"]]; }, exports: function () { return [NzEmptyComponent, NzEmbedEmptyComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-empty.js.map


/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-routing.module */ "iKbT");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _app_components_layout_quicksearch_quicksearch_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/layout/quicksearch/quicksearch.module */ "Zfya");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_components_layout_login_button_login_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/layout/login-button/login-button.module */ "fJYW");
/* harmony import */ var _app_components_layout_viewer_button_viewer_button_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/layout/viewer-button/viewer-button.module */ "LY/y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













let LayoutModule = /*@__PURE__*/ (() => {
    class LayoutModule {
    }
    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: LayoutModule });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_1__["LayoutRoutingModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
                ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__["NzTypographyModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewerModule"],
                _app_components_layout_login_button_login_button_module__WEBPACK_IMPORTED_MODULE_10__["CvcLoginButtonModule"],
                _app_components_layout_viewer_button_viewer_button_module__WEBPACK_IMPORTED_MODULE_11__["CvcViewerButtonModule"],
                _app_components_layout_quicksearch_quicksearch_module__WEBPACK_IMPORTED_MODULE_8__["CvcQuicksearchModule"],
            ]] });
    return LayoutModule;
})();


/***/ }),

/***/ "WKFt":
/*!*********************************************************************************!*\
  !*** ./src/app/components/layout/auth-options-list/auth-options-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CvcAuthOptionsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAuthOptionsListModule", function() { return CvcAuthOptionsListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CvcAuthOptionsListModule = /*@__PURE__*/ (() => {
    class CvcAuthOptionsListModule {
    }
    CvcAuthOptionsListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CvcAuthOptionsListModule });
    CvcAuthOptionsListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CvcAuthOptionsListModule_Factory(t) { return new (t || CvcAuthOptionsListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__["NzListModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
            ]] });
    return CvcAuthOptionsListModule;
})();


/***/ }),

/***/ "ZE2D":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js ***!
  \**********************************************************************************/
/*! exports provided: NzAvatarComponent, NzAvatarModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAvatarComponent", function() { return NzAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAvatarModule", function() { return NzAvatarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NzAvatarGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





const _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 3);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
    }
}
function NzAvatarComponent_img_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.imgError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.nzSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("srcset", ctx_r1.nzSrcSet, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.nzAlt);
    }
}
function NzAvatarComponent_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.textStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.nzText);
    }
}
const _c1 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'avatar';
let NzAvatarComponent = /*@__PURE__*/ (() => {
    class NzAvatarComponent {
        constructor(nzConfigService, elementRef, cdr, platform) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.platform = platform;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzShape = 'circle';
            this.nzSize = 'default';
            this.nzGap = 4;
            this.nzError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            this.hasText = false;
            this.hasSrc = true;
            this.hasIcon = false;
            this.textStyles = {};
            this.classMap = {};
            this.customSize = null;
            this.el = this.elementRef.nativeElement;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-avatar');
        }
        imgError($event) {
            this.nzError.emit($event);
            if (!$event.defaultPrevented) {
                this.hasSrc = false;
                this.hasIcon = false;
                this.hasText = false;
                if (this.nzIcon) {
                    this.hasIcon = true;
                }
                else if (this.nzText) {
                    this.hasText = true;
                }
                this.cdr.detectChanges();
                this.setSizeStyle();
                this.notifyCalc();
            }
        }
        ngOnChanges() {
            this.hasText = !this.nzSrc && !!this.nzText;
            this.hasIcon = !this.nzSrc && !!this.nzIcon;
            this.hasSrc = !!this.nzSrc;
            this.setSizeStyle();
            this.notifyCalc();
        }
        calcStringSize() {
            if (!this.hasText) {
                return;
            }
            const childrenWidth = this.textEl.nativeElement.offsetWidth;
            const avatarWidth = this.el.getBoundingClientRect().width;
            const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
            const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
            this.textStyles = {
                transform: `scale(${scale}) translateX(-50%)`
            };
            if (this.customSize) {
                Object.assign(this.textStyles, {
                    lineHeight: this.customSize
                });
            }
            this.cdr.detectChanges();
        }
        notifyCalc() {
            // If use ngAfterViewChecked, always demands more computations, so......
            if (this.platform.isBrowser) {
                setTimeout(() => {
                    this.calcStringSize();
                });
            }
        }
        setSizeStyle() {
            if (typeof this.nzSize === 'number') {
                this.customSize = `${this.nzSize}px`;
            }
            else {
                this.customSize = null;
            }
            this.cdr.markForCheck();
        }
    }
    NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
    NzAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.textEl = _t.first);
            }
        }, hostVars: 20, hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
            }
        }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzGap: "nzGap", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzAvatarComponent_i_0_Template, 1, 1, "i", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzIcon && ctx.hasIcon);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzSrc && ctx.hasSrc);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzText && ctx.hasText);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzAvatarComponent.prototype, "nzGap", void 0);
    return NzAvatarComponent;
})();
let NzAvatarGroupComponent = /*@__PURE__*/ (() => {
    class NzAvatarGroupComponent {
    }
    NzAvatarGroupComponent.ɵfac = function NzAvatarGroupComponent_Factory(t) { return new (t || NzAvatarGroupComponent)(); };
    NzAvatarGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzAvatarGroupComponent, selectors: [["nz-avatar-group"]], hostAttrs: [1, "ant-avatar-group"], exportAs: ["nzAvatarGroup"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzAvatarGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzAvatarGroupComponent;
})();
let NzAvatarModule = /*@__PURE__*/ (() => {
    class NzAvatarModule {
    }
    NzAvatarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzAvatarModule });
    NzAvatarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]] });
    return NzAvatarModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzAvatarModule, { declarations: function () { return [NzAvatarComponent, NzAvatarGroupComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; }, exports: function () { return [NzAvatarComponent, NzAvatarGroupComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-avatar.js.map


/***/ }),

/***/ "Zfya":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/quicksearch/quicksearch.module.ts ***!
  \*********************************************************************/
/*! exports provided: CvcQuicksearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcQuicksearchModule", function() { return CvcQuicksearchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









let CvcQuicksearchModule = /*@__PURE__*/ (() => {
    class CvcQuicksearchModule {
    }
    CvcQuicksearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CvcQuicksearchModule });
    CvcQuicksearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CvcQuicksearchModule_Factory(t) { return new (t || CvcQuicksearchModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"],
            ]] });
    return CvcQuicksearchModule;
})();


/***/ }),

/***/ "Zlqf":
/*!*****************************************************!*\
  !*** ./src/app/core/utilities/encode-uri-string.ts ***!
  \*****************************************************/
/*! exports provided: encodeUriString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeUriString", function() { return encodeUriString; });
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}


/***/ }),

/***/ "aleN":
/*!************************************************************************************!*\
  !*** ./src/app/components/layout/auth-options-list/auth-options-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CvcAuthOptionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcAuthOptionsListComponent", function() { return CvcAuthOptionsListComponent; });
/* harmony import */ var _app_core_utilities_encode_uri_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/utilities/encode-uri-string */ "Zlqf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








let CvcAuthOptionsListComponent = /*@__PURE__*/ (() => {
    class CvcAuthOptionsListComponent {
        constructor(cookies) {
            this.cookies = cookies;
            this.location = Object(_app_core_utilities_encode_uri_string__WEBPACK_IMPORTED_MODULE_0__["encodeUriString"])(window.location.href);
            this.xsrfToken = this.cookies.get('XSRF-TOKEN');
        }
        ngOnInit() {
        }
    }
    CvcAuthOptionsListComponent.ɵfac = function CvcAuthOptionsListComponent_Factory(t) { return new (t || CvcAuthOptionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
    CvcAuthOptionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvcAuthOptionsListComponent, selectors: [["cvc-auth-options-list"]], decls: 18, vars: 6, consts: [["nzBordered", "false", "nzSplit", "false"], ["method", "post", 3, "action"], ["type", "hidden", "name", "authenticity_token", 3, "value"], ["type", "submit", "nz-button", "", "nzBlock", "", "nzType", "default", "nzSize", "large", "nzShape", "round"], ["nz-icon", "", "nzType", "google"], ["nz-icon", "", "nzType", "github"]], template: function CvcAuthOptionsListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sign In with a Google Account ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-list-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Sign In with an ORCID Account ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-list-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Sign In with a Github Account ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("action", "/api/auth/google_oauth2?origin=", ctx.location, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.xsrfToken);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("action", "/api/auth/orcid?origin=", ctx.location, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.xsrfToken);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("action", "/api/auth/github?origin=", ctx.location, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.xsrfToken);
            }
        }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return CvcAuthOptionsListComponent;
})();


/***/ }),

/***/ "fJYW":
/*!***********************************************************************!*\
  !*** ./src/app/components/layout/login-button/login-button.module.ts ***!
  \***********************************************************************/
/*! exports provided: CvcLoginButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcLoginButtonModule", function() { return CvcLoginButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _auth_options_list_auth_options_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-options-list/auth-options-list.module */ "WKFt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let CvcLoginButtonModule = /*@__PURE__*/ (() => {
    class CvcLoginButtonModule {
    }
    CvcLoginButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CvcLoginButtonModule });
    CvcLoginButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CvcLoginButtonModule_Factory(t) { return new (t || CvcLoginButtonModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
                ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalModule"],
                _auth_options_list_auth_options_list_module__WEBPACK_IMPORTED_MODULE_3__["CvcAuthOptionsListModule"],
            ]] });
    return CvcLoginButtonModule;
})();


/***/ }),

/***/ "fx0T":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/login-button/login-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: CvcLoginButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcLoginButtonComponent", function() { return CvcLoginButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _auth_options_list_auth_options_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-options-list/auth-options-list.component */ "aleN");






function CvcLoginButtonComponent_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cvc-auth-options-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
}
function CvcLoginButtonComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Sign In\n");
    }
}
function CvcLoginButtonComponent_ng_template_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcLoginButtonComponent_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let CvcLoginButtonComponent = /*@__PURE__*/ (() => {
    class CvcLoginButtonComponent {
        constructor() {
            this.authVisible = false;
        }
        ngOnInit() {
        }
        showAuth() {
            this.authVisible = true;
        }
        handleCancel() {
            this.authVisible = false;
        }
    }
    CvcLoginButtonComponent.ɵfac = function CvcLoginButtonComponent_Factory(t) { return new (t || CvcLoginButtonComponent)(); };
    CvcLoginButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcLoginButtonComponent, selectors: [["cvc-login-button"]], decls: 9, vars: 3, consts: [["nz-button", "", "nzType", "primary", "nzValue", "small", 3, "click"], [3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["loginModalTitle", ""], ["loginModalFooter", ""], ["nzType", "secondary"]], template: function CvcLoginButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcLoginButtonComponent_Template_button_click_0_listener() { return ctx.showAuth(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function CvcLoginButtonComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.authVisible = $event; })("nzOnCancel", function CvcLoginButtonComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.handleCancel(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcLoginButtonComponent_ng_container_4_Template, 4, 0, "ng-container", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcLoginButtonComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvcLoginButtonComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.authVisible)("nzTitle", _r1)("nzFooter", _r3);
            }
        }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalContentDirective"], _auth_options_list_auth_options_list_component__WEBPACK_IMPORTED_MODULE_5__["CvcAuthOptionsListComponent"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}"] });
    return CvcLoginButtonComponent;
})();


/***/ }),

/***/ "iKbT":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/layout.component */ "uswQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    // Redirects
    { path: '',
        pathMatch: 'full',
        redirectTo: '/welcome'
    },
    // Main Layout
    {
        path: '',
        component: _app_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            // Primary Views
            { path: 'assertions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(11), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(15), __webpack_require__.e(14), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! @app/views/assertions/assertions.module */ "XsWn")).then(m => m.AssertionsModule),
                data: {
                    breadcrumb: 'Assertions'
                }
            },
            { path: 'clinical-trials',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(23), __webpack_require__.e(27), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! @app/views/clinical-trials/clinical-trials.module */ "cd1E")).then(m => m.ClinicalTrialsModule),
                data: {
                    breadcrumb: 'Clinical Trials'
                }
            },
            { path: 'comments', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, /*! @app/views/comments/comments.module */ "UB9L")).then(m => m.CommentsModule),
                data: {
                    breadcrumb: 'Comments'
                }
            },
            { path: 'community',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! @app/views/community/community.module */ "GWlk")).then(m => m.CommunityModule),
                data: {
                    breadcrumb: 'Community'
                }
            },
            { path: 'diseases',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(15), __webpack_require__.e(17), __webpack_require__.e(20), __webpack_require__.e(23), __webpack_require__.e(24), __webpack_require__.e("common"), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! @app/views/diseases/diseases.module */ "jjTn")).then(m => m.DiseasesModule),
                data: {
                    breadcrumb: 'Diseases'
                }
            },
            { path: 'drugs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(15), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! @app/views/drugs/drugs.module */ "bduo")).then(m => m.DrugsModule),
                data: {
                    breadcrumb: 'Drugs'
                }
            },
            { path: 'evidence',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(10), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! @app/views/evidence/evidence.module */ "DiSq")).then(m => m.EvidenceModule),
                data: {
                    breadcrumb: 'Evidence'
                }
            },
            { path: 'flags',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! @app/views/flags/flags.module */ "Rmwg")).then(m => m.FlagsModule),
                data: {
                    breadcrumb: 'Flags'
                }
            },
            {
                path: 'genes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(8), __webpack_require__.e(20), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! @app/views/genes/genes.module */ "IAPA")).then(m => m.GenesModule),
                data: {
                    breadcrumb: 'Genes'
                }
            },
            { path: 'organizations',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(15), __webpack_require__.e(16), __webpack_require__.e(17), __webpack_require__.e(20), __webpack_require__.e(25), __webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! @app/views/organizations/organizations.module */ "W2PW")).then(m => m.OrganizationsModule),
                data: {
                    breadcrumb: 'Organizations'
                }
            },
            { path: 'phenotypes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(15), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, /*! @app/views/phenotypes/phenotypes.module */ "0qeB")).then(m => m.PhenotypesModule),
                data: {
                    breadcrumb: 'Phenotypes'
                }
            },
            { path: 'revisions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, /*! @app/views/revisions/revisions.module */ "wRBE")).then(m => m.RevisionsModule),
                data: {
                    breadcrumb: 'Revisions'
                }
            },
            { path: 'sources',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(23), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! @app/views/sources/sources.module */ "OhQ4")).then(m => m.SourcesModule),
                data: {
                    breadcrumb: 'Sources'
                }
            },
            { path: 'source-suggestions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, /*! @app/views/source-suggestions/source-suggestions.module */ "8AIl")).then(m => m.SourceSuggestionsModule),
                data: {
                    breadcrumb: 'SourceSuggestions'
                }
            },
            { path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(15), __webpack_require__.e(16), __webpack_require__.e(17), __webpack_require__.e(25), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! @app/views/users/users.module */ "QSsw")).then(m => m.UsersModule),
                data: {
                    breadcrumb: 'Users'
                }
            },
            { path: 'variant-groups',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e("common"), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! @app/views/variant-groups/variant-groups.module */ "Bgpb")).then(m => m.VariantGroupsModule),
                data: {
                    breadcrumb: 'Variant Groups'
                } },
            { path: 'variants',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(8), __webpack_require__.e(20), __webpack_require__.e(24), __webpack_require__.e("common"), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! @app/views/variants/variants.module */ "/5rf")).then(m => m.VariantsModule),
                data: {
                    breadcrumb: 'Variants'
                }
            },
            { path: 'variant-types',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(8), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(24), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, /*! @app/views/variant-types/variant-types.module */ "HbFb")).then(m => m.VariantTypesModule),
                data: {
                    breadcrumb: 'Variant Types'
                }
            },
            // Other App Views
            { path: 'welcome',
                loadChildren: () => __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! @app/views/welcome/welcome.module */ "6bkv")).then(m => m.WelcomeModule),
                data: {
                    breadcrumb: 'Welcome to CIViC'
                }
            },
            { path: 'statistics',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, /*! @app/views/statistics/statistics.module */ "gzb6")).then(m => m.StatisticsModule),
                data: {
                    breadcrumb: 'Statistics'
                }
            },
            { path: 'releases',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, /*! @app/views/releases/releases.module */ "buMc")).then(m => m.ReleasesModule),
                data: {
                    breadcrumb: 'Releases'
                }
            },
            { path: 'pages',
                loadChildren: () => __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! @app/views/pages/pages.module */ "TskO")).then(m => m.PagesModule),
                data: {
                    breadcrumb: 'Pages'
                }
            },
        ]
    },
];
let LayoutRoutingModule = /*@__PURE__*/ (() => {
    class LayoutRoutingModule {
    }
    LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
    LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return LayoutRoutingModule;
})();


/***/ }),

/***/ "l/kO":
/*!*******************************************!*\
  !*** ./src/app/generated/civic.apollo.ts ***!
  \*******************************************/
/*! exports provided: AmpLevel, AreaOfExpertise, AssertionClinicalSignificance, AssertionDirection, AssertionSortColumns, AssertionType, BooleanOperator, ClinicalTrialSortColumns, CoiStatus, CommentableEntities, DateSortColumns, DiseasesSortColumns, DrugInteraction, DrugSortColumns, EventAction, EvidenceClinicalSignificance, EvidenceDirection, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, FlagState, FlaggableEntities, GenesSortColumns, IntSearchOperator, ModeratedEntities, NotificationReason, OrganizationSortColumns, PhenotypeSortColumns, ReadStatus, ReferenceBuild, RevisionStatus, SearchableEntities, SortDirection, SourceSource, SourceSuggestionStatus, SourceSuggestionsSortColumns, SourcesSortColumns, StringSearchOperator, SubscribableEntities, VariantDisplayFilter, VariantGroupsSortColumns, VariantOrigin, VariantTypeSortColumns, VariantsSortColumns, AssertionPopoverFragmentDoc, AssertionBrowseTableRowFieldsFragmentDoc, ClinicalTrialPopoverFragmentDoc, CommentListNodeFragmentDoc, CommentPopoverFragmentDoc, BrowseDiseaseRowFieldsFragmentDoc, DrugBrowseTableRowFieldsFragmentDoc, EventFeedNodeFragmentDoc, EventFeedFragmentDoc, EvidencePopoverFragmentDoc, EvidenceGridFieldsFragmentDoc, FlagFragmentDoc, FlagListFragmentDoc, GenePopoverFragmentDoc, QuicksearchResultFragmentDoc, OrgPopoverFragmentDoc, OrganizationBrowseTableRowFieldsFragmentDoc, PhenotypeBrowseTableRowFieldsFragmentDoc, ValidationErrorFragmentDoc, RevisionFragmentDoc, ContributorFieldsFragmentDoc, SubscriptionIdFragmentDoc, BrowseSourceSuggestionRowFieldsFragmentDoc, SourcePopoverFragmentDoc, BrowseSourceRowFieldsFragmentDoc, PopoverUserFragmentDoc, BrowseVariantGroupRowFieldsFragmentDoc, VariantTypePopoverFragmentDoc, VariantTypeBrowseTableRowFieldsFragmentDoc, VariantPopoverFieldsFragmentDoc, MenuVariantFragmentDoc, RevisableEvidenceFieldsFragmentDoc, SubmittableEvidenceFieldsFragmentDoc, RevisableGeneFieldsFragmentDoc, GeneTypeaheadFieldsFragmentDoc, SourceTypeaheadResultFragmentDoc, CoordinateFieldsFragmentDoc, RevisableVariantFieldsFragmentDoc, VariantTypeaheadFieldsFragmentDoc, AssertionDetailFieldsFragmentDoc, AssertionSummaryFieldsFragmentDoc, EvidenceDetailFieldsFragmentDoc, EvidenceSummaryFieldsFragmentDoc, GeneDetailFieldsFragmentDoc, GeneSummaryFieldsFragmentDoc, OrganizationDetailFieldsFragmentDoc, OrganizationGroupsFieldsFragmentDoc, OrganizationMembersFieldsFragmentDoc, SourceDetailFieldsFragmentDoc, SourceSummaryFieldsFragmentDoc, UserDetailFieldsFragmentDoc, NotificationOrganizationFragmentDoc, NotificationOriginatingUsersFragmentDoc, NotificationFeedSubjectsFragmentDoc, NotificationNodeFragmentDoc, SubscribableFragmentDoc, VariantGroupDetailFieldsFragmentDoc, VariantGroupSummaryFieldsFragmentDoc, VariantDetailFieldsFragmentDoc, MyVariantInfoFieldsFragmentDoc, VariantSummaryFieldsFragmentDoc, AssertionPopoverDocument, AssertionPopoverGQL, AssertionsBrowseDocument, AssertionsBrowseGQL, ClinicalTrialPopoverDocument, ClinicalTrialPopoverGQL, ClinicalTrialsBrowseDocument, ClinicalTrialsBrowseGQL, CommentListDocument, CommentListGQL, CommentPopoverDocument, CommentPopoverGQL, DiseasePopoverDocument, DiseasePopoverGQL, BrowseDiseasesDocument, BrowseDiseasesGQL, DrugPopoverDocument, DrugPopoverGQL, DrugsBrowseDocument, DrugsBrowseGQL, EventFeedDocument, EventFeedGQL, EvidencePopoverDocument, EvidencePopoverGQL, EvidenceBrowseDocument, EvidenceBrowseGQL, FlagListDocument, FlagListGQL, GenePopoverDocument, GenePopoverGQL, BrowseGenesDocument, BrowseGenesGQL, QuicksearchDocument, QuicksearchGQL, OrgPopoverDocument, OrgPopoverGQL, OrganizationsBrowseDocument, OrganizationsBrowseGQL, PhenotypePopoverDocument, PhenotypePopoverGQL, PhenotypesBrowseDocument, PhenotypesBrowseGQL, AcceptRevisionDocument, AcceptRevisionGQL, RejectRevisionDocument, RejectRevisionGQL, ValidateRevisionsForAcceptanceDocument, ValidateRevisionsForAcceptanceGQL, RevisionsDocument, RevisionsGQL, ContributorAvatarsDocument, ContributorAvatarsGQL, SubscriptionForEntityDocument, SubscriptionForEntityGQL, BrowseSourceSuggestionsDocument, BrowseSourceSuggestionsGQL, UpdateSourceSuggestionStatusDocument, UpdateSourceSuggestionStatusGQL, SourcePopoverDocument, SourcePopoverGQL, BrowseSourcesDocument, BrowseSourcesGQL, UserPopoverDocument, UserPopoverGQL, BrowseVariantGroupsDocument, BrowseVariantGroupsGQL, VariantTypePopoverDocument, VariantTypePopoverGQL, VariantTypesBrowseDocument, VariantTypesBrowseGQL, VariantPopoverDocument, VariantPopoverGQL, VariantsMenuDocument, VariantsMenuGQL, BrowseVariantsDocument, BrowseVariantsGQL, ViewerBaseDocument, ViewerBaseGQL, ViewerFullDocument, ViewerFullGQL, AddCommentDocument, AddCommentGQL, DiseaseTypeaheadDocument, DiseaseTypeaheadGQL, DrugTypeaheadDocument, DrugTypeaheadGQL, EvidenceItemRevisableFieldsDocument, EvidenceItemRevisableFieldsGQL, SuggestEvidenceItemRevisionDocument, SuggestEvidenceItemRevisionGQL, EvidenceSubmittableFieldsDocument, EvidenceSubmittableFieldsGQL, SubmitEvidenceItemDocument, SubmitEvidenceItemGQL, FlagEntityDocument, FlagEntityGQL, ResolveFlagDocument, ResolveFlagGQL, GeneRevisableFieldsDocument, GeneRevisableFieldsGQL, SuggestGeneRevisionDocument, SuggestGeneRevisionGQL, GeneTypeaheadDocument, GeneTypeaheadGQL, PhenotypeTypeaheadDocument, PhenotypeTypeaheadGQL, CitationTypeaheadDocument, CitationTypeaheadGQL, CitationExistenceCheckDocument, CitationExistenceCheckGQL, CreateSourceStubDocument, CreateSourceStubGQL, VariantTypeTypeaheadDocument, VariantTypeTypeaheadGQL, VariantRevisableFieldsDocument, VariantRevisableFieldsGQL, SuggestVariantRevisionDocument, SuggestVariantRevisionGQL, VariantTypeaheadDocument, VariantTypeaheadGQL, AssertionDetailDocument, AssertionDetailGQL, AssertionSummaryDocument, AssertionSummaryGQL, ClinicalTrialDetailDocument, ClinicalTrialDetailGQL, DiseaseDetailDocument, DiseaseDetailGQL, DrugDetailDocument, DrugDetailGQL, EvidenceDetailDocument, EvidenceDetailGQL, EvidenceSummaryDocument, EvidenceSummaryGQL, GeneDetailDocument, GeneDetailGQL, GenesSummaryDocument, GenesSummaryGQL, OrganizationDetailDocument, OrganizationDetailGQL, OrganizationGroupsDocument, OrganizationGroupsGQL, OrganizationMembersDocument, OrganizationMembersGQL, PhenotypeDetailDocument, PhenotypeDetailGQL, SourceDetailDocument, SourceDetailGQL, SourceSummaryDocument, SourceSummaryGQL, UserDetailDocument, UserDetailGQL, UserNotificationsDocument, UserNotificationsGQL, UpdateNotificationStatusDocument, UpdateNotificationStatusGQL, UnsubscribeDocument, UnsubscribeGQL, SubscribeDocument, SubscribeGQL, VariantGroupDetailDocument, VariantGroupDetailGQL, VariantGroupRevisionsDocument, VariantGroupRevisionsGQL, VariantGroupsSummaryDocument, VariantGroupsSummaryGQL, VariantTypeDetailDocument, VariantTypeDetailGQL, VariantDetailDocument, VariantDetailGQL, VariantSummaryDocument, VariantSummaryGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpLevel", function() { return AmpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaOfExpertise", function() { return AreaOfExpertise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionClinicalSignificance", function() { return AssertionClinicalSignificance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionDirection", function() { return AssertionDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionSortColumns", function() { return AssertionSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionType", function() { return AssertionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanOperator", function() { return BooleanOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialSortColumns", function() { return ClinicalTrialSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoiStatus", function() { return CoiStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentableEntities", function() { return CommentableEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSortColumns", function() { return DateSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesSortColumns", function() { return DiseasesSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugInteraction", function() { return DrugInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugSortColumns", function() { return DrugSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAction", function() { return EventAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceClinicalSignificance", function() { return EvidenceClinicalSignificance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDirection", function() { return EvidenceDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceLevel", function() { return EvidenceLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSortColumns", function() { return EvidenceSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceStatus", function() { return EvidenceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceType", function() { return EvidenceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagState", function() { return FlagState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlaggableEntities", function() { return FlaggableEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesSortColumns", function() { return GenesSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSearchOperator", function() { return IntSearchOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratedEntities", function() { return ModeratedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationReason", function() { return NotificationReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationSortColumns", function() { return OrganizationSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeSortColumns", function() { return PhenotypeSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadStatus", function() { return ReadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceBuild", function() { return ReferenceBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionStatus", function() { return RevisionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableEntities", function() { return SearchableEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSource", function() { return SourceSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionStatus", function() { return SourceSuggestionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSuggestionsSortColumns", function() { return SourceSuggestionsSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesSortColumns", function() { return SourcesSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringSearchOperator", function() { return StringSearchOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribableEntities", function() { return SubscribableEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantDisplayFilter", function() { return VariantDisplayFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsSortColumns", function() { return VariantGroupsSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantOrigin", function() { return VariantOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeSortColumns", function() { return VariantTypeSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsSortColumns", function() { return VariantsSortColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionPopoverFragmentDoc", function() { return AssertionPopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionBrowseTableRowFieldsFragmentDoc", function() { return AssertionBrowseTableRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialPopoverFragmentDoc", function() { return ClinicalTrialPopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListNodeFragmentDoc", function() { return CommentListNodeFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPopoverFragmentDoc", function() { return CommentPopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseDiseaseRowFieldsFragmentDoc", function() { return BrowseDiseaseRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugBrowseTableRowFieldsFragmentDoc", function() { return DrugBrowseTableRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFeedNodeFragmentDoc", function() { return EventFeedNodeFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFeedFragmentDoc", function() { return EventFeedFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidencePopoverFragmentDoc", function() { return EvidencePopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceGridFieldsFragmentDoc", function() { return EvidenceGridFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagFragmentDoc", function() { return FlagFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagListFragmentDoc", function() { return FlagListFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenePopoverFragmentDoc", function() { return GenePopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicksearchResultFragmentDoc", function() { return QuicksearchResultFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgPopoverFragmentDoc", function() { return OrgPopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationBrowseTableRowFieldsFragmentDoc", function() { return OrganizationBrowseTableRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeBrowseTableRowFieldsFragmentDoc", function() { return PhenotypeBrowseTableRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorFragmentDoc", function() { return ValidationErrorFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionFragmentDoc", function() { return RevisionFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorFieldsFragmentDoc", function() { return ContributorFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionIdFragmentDoc", function() { return SubscriptionIdFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourceSuggestionRowFieldsFragmentDoc", function() { return BrowseSourceSuggestionRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePopoverFragmentDoc", function() { return SourcePopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourceRowFieldsFragmentDoc", function() { return BrowseSourceRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverUserFragmentDoc", function() { return PopoverUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseVariantGroupRowFieldsFragmentDoc", function() { return BrowseVariantGroupRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypePopoverFragmentDoc", function() { return VariantTypePopoverFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeBrowseTableRowFieldsFragmentDoc", function() { return VariantTypeBrowseTableRowFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantPopoverFieldsFragmentDoc", function() { return VariantPopoverFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVariantFragmentDoc", function() { return MenuVariantFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisableEvidenceFieldsFragmentDoc", function() { return RevisableEvidenceFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittableEvidenceFieldsFragmentDoc", function() { return SubmittableEvidenceFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisableGeneFieldsFragmentDoc", function() { return RevisableGeneFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneTypeaheadFieldsFragmentDoc", function() { return GeneTypeaheadFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceTypeaheadResultFragmentDoc", function() { return SourceTypeaheadResultFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateFieldsFragmentDoc", function() { return CoordinateFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisableVariantFieldsFragmentDoc", function() { return RevisableVariantFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeaheadFieldsFragmentDoc", function() { return VariantTypeaheadFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionDetailFieldsFragmentDoc", function() { return AssertionDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionSummaryFieldsFragmentDoc", function() { return AssertionSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailFieldsFragmentDoc", function() { return EvidenceDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSummaryFieldsFragmentDoc", function() { return EvidenceSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneDetailFieldsFragmentDoc", function() { return GeneDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneSummaryFieldsFragmentDoc", function() { return GeneSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailFieldsFragmentDoc", function() { return OrganizationDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationGroupsFieldsFragmentDoc", function() { return OrganizationGroupsFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationMembersFieldsFragmentDoc", function() { return OrganizationMembersFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDetailFieldsFragmentDoc", function() { return SourceDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSummaryFieldsFragmentDoc", function() { return SourceSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailFieldsFragmentDoc", function() { return UserDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationOrganizationFragmentDoc", function() { return NotificationOrganizationFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationOriginatingUsersFragmentDoc", function() { return NotificationOriginatingUsersFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationFeedSubjectsFragmentDoc", function() { return NotificationFeedSubjectsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationNodeFragmentDoc", function() { return NotificationNodeFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribableFragmentDoc", function() { return SubscribableFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupDetailFieldsFragmentDoc", function() { return VariantGroupDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupSummaryFieldsFragmentDoc", function() { return VariantGroupSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantDetailFieldsFragmentDoc", function() { return VariantDetailFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVariantInfoFieldsFragmentDoc", function() { return MyVariantInfoFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSummaryFieldsFragmentDoc", function() { return VariantSummaryFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionPopoverDocument", function() { return AssertionPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionPopoverGQL", function() { return AssertionPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionsBrowseDocument", function() { return AssertionsBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionsBrowseGQL", function() { return AssertionsBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialPopoverDocument", function() { return ClinicalTrialPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialPopoverGQL", function() { return ClinicalTrialPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsBrowseDocument", function() { return ClinicalTrialsBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsBrowseGQL", function() { return ClinicalTrialsBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListDocument", function() { return CommentListDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListGQL", function() { return CommentListGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPopoverDocument", function() { return CommentPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPopoverGQL", function() { return CommentPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasePopoverDocument", function() { return DiseasePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasePopoverGQL", function() { return DiseasePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseDiseasesDocument", function() { return BrowseDiseasesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseDiseasesGQL", function() { return BrowseDiseasesGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugPopoverDocument", function() { return DrugPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugPopoverGQL", function() { return DrugPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsBrowseDocument", function() { return DrugsBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsBrowseGQL", function() { return DrugsBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFeedDocument", function() { return EventFeedDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFeedGQL", function() { return EventFeedGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidencePopoverDocument", function() { return EvidencePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidencePopoverGQL", function() { return EvidencePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceBrowseDocument", function() { return EvidenceBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceBrowseGQL", function() { return EvidenceBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagListDocument", function() { return FlagListDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagListGQL", function() { return FlagListGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenePopoverDocument", function() { return GenePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenePopoverGQL", function() { return GenePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseGenesDocument", function() { return BrowseGenesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseGenesGQL", function() { return BrowseGenesGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicksearchDocument", function() { return QuicksearchDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicksearchGQL", function() { return QuicksearchGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgPopoverDocument", function() { return OrgPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgPopoverGQL", function() { return OrgPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsBrowseDocument", function() { return OrganizationsBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsBrowseGQL", function() { return OrganizationsBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypePopoverDocument", function() { return PhenotypePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypePopoverGQL", function() { return PhenotypePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesBrowseDocument", function() { return PhenotypesBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypesBrowseGQL", function() { return PhenotypesBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRevisionDocument", function() { return AcceptRevisionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRevisionGQL", function() { return AcceptRevisionGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectRevisionDocument", function() { return RejectRevisionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectRevisionGQL", function() { return RejectRevisionGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRevisionsForAcceptanceDocument", function() { return ValidateRevisionsForAcceptanceDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRevisionsForAcceptanceGQL", function() { return ValidateRevisionsForAcceptanceGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsDocument", function() { return RevisionsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsGQL", function() { return RevisionsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorAvatarsDocument", function() { return ContributorAvatarsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorAvatarsGQL", function() { return ContributorAvatarsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionForEntityDocument", function() { return SubscriptionForEntityDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionForEntityGQL", function() { return SubscriptionForEntityGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourceSuggestionsDocument", function() { return BrowseSourceSuggestionsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourceSuggestionsGQL", function() { return BrowseSourceSuggestionsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSourceSuggestionStatusDocument", function() { return UpdateSourceSuggestionStatusDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSourceSuggestionStatusGQL", function() { return UpdateSourceSuggestionStatusGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePopoverDocument", function() { return SourcePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePopoverGQL", function() { return SourcePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourcesDocument", function() { return BrowseSourcesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseSourcesGQL", function() { return BrowseSourcesGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPopoverDocument", function() { return UserPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPopoverGQL", function() { return UserPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseVariantGroupsDocument", function() { return BrowseVariantGroupsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseVariantGroupsGQL", function() { return BrowseVariantGroupsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypePopoverDocument", function() { return VariantTypePopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypePopoverGQL", function() { return VariantTypePopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypesBrowseDocument", function() { return VariantTypesBrowseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypesBrowseGQL", function() { return VariantTypesBrowseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantPopoverDocument", function() { return VariantPopoverDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantPopoverGQL", function() { return VariantPopoverGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsMenuDocument", function() { return VariantsMenuDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantsMenuGQL", function() { return VariantsMenuGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseVariantsDocument", function() { return BrowseVariantsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseVariantsGQL", function() { return BrowseVariantsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerBaseDocument", function() { return ViewerBaseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerBaseGQL", function() { return ViewerBaseGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerFullDocument", function() { return ViewerFullDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerFullGQL", function() { return ViewerFullGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentDocument", function() { return AddCommentDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentGQL", function() { return AddCommentGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseTypeaheadDocument", function() { return DiseaseTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseTypeaheadGQL", function() { return DiseaseTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugTypeaheadDocument", function() { return DrugTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugTypeaheadGQL", function() { return DrugTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceItemRevisableFieldsDocument", function() { return EvidenceItemRevisableFieldsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceItemRevisableFieldsGQL", function() { return EvidenceItemRevisableFieldsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestEvidenceItemRevisionDocument", function() { return SuggestEvidenceItemRevisionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestEvidenceItemRevisionGQL", function() { return SuggestEvidenceItemRevisionGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmittableFieldsDocument", function() { return EvidenceSubmittableFieldsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSubmittableFieldsGQL", function() { return EvidenceSubmittableFieldsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitEvidenceItemDocument", function() { return SubmitEvidenceItemDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitEvidenceItemGQL", function() { return SubmitEvidenceItemGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagEntityDocument", function() { return FlagEntityDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagEntityGQL", function() { return FlagEntityGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveFlagDocument", function() { return ResolveFlagDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveFlagGQL", function() { return ResolveFlagGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneRevisableFieldsDocument", function() { return GeneRevisableFieldsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneRevisableFieldsGQL", function() { return GeneRevisableFieldsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestGeneRevisionDocument", function() { return SuggestGeneRevisionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestGeneRevisionGQL", function() { return SuggestGeneRevisionGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneTypeaheadDocument", function() { return GeneTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneTypeaheadGQL", function() { return GeneTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeTypeaheadDocument", function() { return PhenotypeTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeTypeaheadGQL", function() { return PhenotypeTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationTypeaheadDocument", function() { return CitationTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationTypeaheadGQL", function() { return CitationTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationExistenceCheckDocument", function() { return CitationExistenceCheckDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationExistenceCheckGQL", function() { return CitationExistenceCheckGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSourceStubDocument", function() { return CreateSourceStubDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSourceStubGQL", function() { return CreateSourceStubGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeTypeaheadDocument", function() { return VariantTypeTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeTypeaheadGQL", function() { return VariantTypeTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantRevisableFieldsDocument", function() { return VariantRevisableFieldsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantRevisableFieldsGQL", function() { return VariantRevisableFieldsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestVariantRevisionDocument", function() { return SuggestVariantRevisionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestVariantRevisionGQL", function() { return SuggestVariantRevisionGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeaheadDocument", function() { return VariantTypeaheadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeaheadGQL", function() { return VariantTypeaheadGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionDetailDocument", function() { return AssertionDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionDetailGQL", function() { return AssertionDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionSummaryDocument", function() { return AssertionSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionSummaryGQL", function() { return AssertionSummaryGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialDetailDocument", function() { return ClinicalTrialDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialDetailGQL", function() { return ClinicalTrialDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseDetailDocument", function() { return DiseaseDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseDetailGQL", function() { return DiseaseDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailDocument", function() { return DrugDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailGQL", function() { return DrugDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailDocument", function() { return EvidenceDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceDetailGQL", function() { return EvidenceDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSummaryDocument", function() { return EvidenceSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceSummaryGQL", function() { return EvidenceSummaryGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneDetailDocument", function() { return GeneDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneDetailGQL", function() { return GeneDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesSummaryDocument", function() { return GenesSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesSummaryGQL", function() { return GenesSummaryGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailDocument", function() { return OrganizationDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailGQL", function() { return OrganizationDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationGroupsDocument", function() { return OrganizationGroupsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationGroupsGQL", function() { return OrganizationGroupsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationMembersDocument", function() { return OrganizationMembersDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationMembersGQL", function() { return OrganizationMembersGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeDetailDocument", function() { return PhenotypeDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhenotypeDetailGQL", function() { return PhenotypeDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDetailDocument", function() { return SourceDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDetailGQL", function() { return SourceDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSummaryDocument", function() { return SourceSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSummaryGQL", function() { return SourceSummaryGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailDocument", function() { return UserDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailGQL", function() { return UserDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationsDocument", function() { return UserNotificationsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationsGQL", function() { return UserNotificationsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationStatusDocument", function() { return UpdateNotificationStatusDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationStatusGQL", function() { return UpdateNotificationStatusGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeDocument", function() { return UnsubscribeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeGQL", function() { return UnsubscribeGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeDocument", function() { return SubscribeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeGQL", function() { return SubscribeGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupDetailDocument", function() { return VariantGroupDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupDetailGQL", function() { return VariantGroupDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupRevisionsDocument", function() { return VariantGroupRevisionsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupRevisionsGQL", function() { return VariantGroupRevisionsGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsSummaryDocument", function() { return VariantGroupsSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantGroupsSummaryGQL", function() { return VariantGroupsSummaryGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeDetailDocument", function() { return VariantTypeDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantTypeDetailGQL", function() { return VariantTypeDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantDetailDocument", function() { return VariantDetailDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantDetailGQL", function() { return VariantDetailGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSummaryDocument", function() { return VariantSummaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSummaryGQL", function() { return VariantSummaryGQL; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* eslint-disable */




var AmpLevel = /*@__PURE__*/ (function (AmpLevel) {
    AmpLevel["Na"] = "NA";
    AmpLevel["TierIii"] = "TIER_III";
    AmpLevel["TierIiLevelC"] = "TIER_II_LEVEL_C";
    AmpLevel["TierIiLevelD"] = "TIER_II_LEVEL_D";
    AmpLevel["TierIv"] = "TIER_IV";
    AmpLevel["TierILevelA"] = "TIER_I_LEVEL_A";
    AmpLevel["TierILevelB"] = "TIER_I_LEVEL_B";
    return AmpLevel;
})({});
var AreaOfExpertise = /*@__PURE__*/ (function (AreaOfExpertise) {
    AreaOfExpertise["ClinicalScientist"] = "CLINICAL_SCIENTIST";
    AreaOfExpertise["PatientAdvocate"] = "PATIENT_ADVOCATE";
    AreaOfExpertise["ResearchScientist"] = "RESEARCH_SCIENTIST";
    return AreaOfExpertise;
})({});
var AssertionClinicalSignificance = /*@__PURE__*/ (function (AssertionClinicalSignificance) {
    AssertionClinicalSignificance["AdverseResponse"] = "ADVERSE_RESPONSE";
    AssertionClinicalSignificance["Benign"] = "BENIGN";
    AssertionClinicalSignificance["BetterOutcome"] = "BETTER_OUTCOME";
    AssertionClinicalSignificance["LikelyBenign"] = "LIKELY_BENIGN";
    AssertionClinicalSignificance["LikelyPathogenic"] = "LIKELY_PATHOGENIC";
    AssertionClinicalSignificance["Na"] = "NA";
    AssertionClinicalSignificance["Negative"] = "NEGATIVE";
    AssertionClinicalSignificance["Pathogenic"] = "PATHOGENIC";
    AssertionClinicalSignificance["PoorOutcome"] = "POOR_OUTCOME";
    AssertionClinicalSignificance["Positive"] = "POSITIVE";
    AssertionClinicalSignificance["ReducedSensitivity"] = "REDUCED_SENSITIVITY";
    AssertionClinicalSignificance["Resistance"] = "RESISTANCE";
    AssertionClinicalSignificance["Sensitivityresponse"] = "SENSITIVITYRESPONSE";
    AssertionClinicalSignificance["UncertainSignificance"] = "UNCERTAIN_SIGNIFICANCE";
    return AssertionClinicalSignificance;
})({});
var AssertionDirection = /*@__PURE__*/ (function (AssertionDirection) {
    AssertionDirection["DoesNotSupport"] = "DOES_NOT_SUPPORT";
    AssertionDirection["Supports"] = "SUPPORTS";
    return AssertionDirection;
})({});
var AssertionSortColumns = /*@__PURE__*/ (function (AssertionSortColumns) {
    AssertionSortColumns["AmpLevel"] = "AMP_LEVEL";
    AssertionSortColumns["AssertionDirection"] = "ASSERTION_DIRECTION";
    AssertionSortColumns["AssertionType"] = "ASSERTION_TYPE";
    AssertionSortColumns["ClinicalSignificance"] = "CLINICAL_SIGNIFICANCE";
    AssertionSortColumns["DiseaseName"] = "DISEASE_NAME";
    AssertionSortColumns["DrugName"] = "DRUG_NAME";
    AssertionSortColumns["GeneName"] = "GENE_NAME";
    AssertionSortColumns["Id"] = "ID";
    AssertionSortColumns["Status"] = "STATUS";
    AssertionSortColumns["Summary"] = "SUMMARY";
    AssertionSortColumns["VariantName"] = "VARIANT_NAME";
    return AssertionSortColumns;
})({});
var AssertionType = /*@__PURE__*/ (function (AssertionType) {
    AssertionType["Diagnostic"] = "DIAGNOSTIC";
    AssertionType["Predictive"] = "PREDICTIVE";
    AssertionType["Predisposing"] = "PREDISPOSING";
    AssertionType["Prognostic"] = "PROGNOSTIC";
    return AssertionType;
})({});
var BooleanOperator = /*@__PURE__*/ (function (BooleanOperator) {
    BooleanOperator["And"] = "AND";
    BooleanOperator["Or"] = "OR";
    return BooleanOperator;
})({});
var ClinicalTrialSortColumns = /*@__PURE__*/ (function (ClinicalTrialSortColumns) {
    ClinicalTrialSortColumns["EvidenceItemCount"] = "EVIDENCE_ITEM_COUNT";
    ClinicalTrialSortColumns["Name"] = "NAME";
    ClinicalTrialSortColumns["NctId"] = "NCT_ID";
    ClinicalTrialSortColumns["SourceCount"] = "SOURCE_COUNT";
    return ClinicalTrialSortColumns;
})({});
var CoiStatus = /*@__PURE__*/ (function (CoiStatus) {
    CoiStatus["Conflict"] = "CONFLICT";
    CoiStatus["Expired"] = "EXPIRED";
    CoiStatus["Missing"] = "MISSING";
    CoiStatus["Valid"] = "VALID";
    return CoiStatus;
})({});
var CommentableEntities = /*@__PURE__*/ (function (CommentableEntities) {
    CommentableEntities["Assertion"] = "ASSERTION";
    CommentableEntities["EvidenceItem"] = "EVIDENCE_ITEM";
    CommentableEntities["Gene"] = "GENE";
    CommentableEntities["Variant"] = "VARIANT";
    CommentableEntities["VariantGroup"] = "VARIANT_GROUP";
    return CommentableEntities;
})({});
var DateSortColumns = /*@__PURE__*/ (function (DateSortColumns) {
    DateSortColumns["Created"] = "CREATED";
    DateSortColumns["LastModified"] = "LAST_MODIFIED";
    return DateSortColumns;
})({});
var DiseasesSortColumns = /*@__PURE__*/ (function (DiseasesSortColumns) {
    DiseasesSortColumns["AssertionCount"] = "ASSERTION_COUNT";
    DiseasesSortColumns["Doid"] = "DOID";
    DiseasesSortColumns["EvidenceItemCount"] = "EVIDENCE_ITEM_COUNT";
    DiseasesSortColumns["GeneCount"] = "GENE_COUNT";
    DiseasesSortColumns["Name"] = "NAME";
    DiseasesSortColumns["VariantCount"] = "VARIANT_COUNT";
    return DiseasesSortColumns;
})({});
var DrugInteraction = /*@__PURE__*/ (function (DrugInteraction) {
    DrugInteraction["Combination"] = "COMBINATION";
    DrugInteraction["Sequential"] = "SEQUENTIAL";
    DrugInteraction["Substitutes"] = "SUBSTITUTES";
    return DrugInteraction;
})({});
var DrugSortColumns = /*@__PURE__*/ (function (DrugSortColumns) {
    DrugSortColumns["AssertionCount"] = "ASSERTION_COUNT";
    DrugSortColumns["EvidenceItemCount"] = "EVIDENCE_ITEM_COUNT";
    DrugSortColumns["Name"] = "NAME";
    DrugSortColumns["NcitId"] = "NCIT_ID";
    return DrugSortColumns;
})({});
var EventAction = /*@__PURE__*/ (function (EventAction) {
    EventAction["Accepted"] = "ACCEPTED";
    EventAction["AssertionAccepted"] = "ASSERTION_ACCEPTED";
    EventAction["AssertionRejected"] = "ASSERTION_REJECTED";
    EventAction["AssertionSubmitted"] = "ASSERTION_SUBMITTED";
    EventAction["Commented"] = "COMMENTED";
    EventAction["CuratedSourceSuggestion"] = "CURATED_SOURCE_SUGGESTION";
    EventAction["Flagged"] = "FLAGGED";
    EventAction["FlagResolved"] = "FLAG_RESOLVED";
    EventAction["PublicationSuggested"] = "PUBLICATION_SUGGESTED";
    EventAction["Rejected"] = "REJECTED";
    EventAction["RejectedSourceSuggestion"] = "REJECTED_SOURCE_SUGGESTION";
    EventAction["RequeuedSourceSuggestion"] = "REQUEUED_SOURCE_SUGGESTION";
    EventAction["Reverted"] = "REVERTED";
    EventAction["RevisionAccepted"] = "REVISION_ACCEPTED";
    EventAction["RevisionRejected"] = "REVISION_REJECTED";
    EventAction["RevisionSuggested"] = "REVISION_SUGGESTED";
    EventAction["RevisionSuperseded"] = "REVISION_SUPERSEDED";
    EventAction["Submitted"] = "SUBMITTED";
    return EventAction;
})({});
var EvidenceClinicalSignificance = /*@__PURE__*/ (function (EvidenceClinicalSignificance) {
    EvidenceClinicalSignificance["AdverseResponse"] = "ADVERSE_RESPONSE";
    EvidenceClinicalSignificance["Benign"] = "BENIGN";
    EvidenceClinicalSignificance["BetterOutcome"] = "BETTER_OUTCOME";
    EvidenceClinicalSignificance["DominantNegative"] = "DOMINANT_NEGATIVE";
    EvidenceClinicalSignificance["GainOfFunction"] = "GAIN_OF_FUNCTION";
    EvidenceClinicalSignificance["LikelyBenign"] = "LIKELY_BENIGN";
    EvidenceClinicalSignificance["LikelyPathogenic"] = "LIKELY_PATHOGENIC";
    EvidenceClinicalSignificance["LossOfFunction"] = "LOSS_OF_FUNCTION";
    EvidenceClinicalSignificance["Na"] = "NA";
    EvidenceClinicalSignificance["Negative"] = "NEGATIVE";
    EvidenceClinicalSignificance["Neomorphic"] = "NEOMORPHIC";
    EvidenceClinicalSignificance["Pathogenic"] = "PATHOGENIC";
    EvidenceClinicalSignificance["PoorOutcome"] = "POOR_OUTCOME";
    EvidenceClinicalSignificance["Positive"] = "POSITIVE";
    EvidenceClinicalSignificance["ReducedSensitivity"] = "REDUCED_SENSITIVITY";
    EvidenceClinicalSignificance["Resistance"] = "RESISTANCE";
    EvidenceClinicalSignificance["Sensitivityresponse"] = "SENSITIVITYRESPONSE";
    EvidenceClinicalSignificance["UnalteredFunction"] = "UNALTERED_FUNCTION";
    EvidenceClinicalSignificance["UncertainSignificance"] = "UNCERTAIN_SIGNIFICANCE";
    EvidenceClinicalSignificance["Unknown"] = "UNKNOWN";
    return EvidenceClinicalSignificance;
})({});
var EvidenceDirection = /*@__PURE__*/ (function (EvidenceDirection) {
    EvidenceDirection["DoesNotSupport"] = "DOES_NOT_SUPPORT";
    EvidenceDirection["Na"] = "NA";
    EvidenceDirection["Supports"] = "SUPPORTS";
    return EvidenceDirection;
})({});
var EvidenceLevel = /*@__PURE__*/ (function (EvidenceLevel) {
    EvidenceLevel["A"] = "A";
    EvidenceLevel["B"] = "B";
    EvidenceLevel["C"] = "C";
    EvidenceLevel["D"] = "D";
    EvidenceLevel["E"] = "E";
    return EvidenceLevel;
})({});
var EvidenceSortColumns = /*@__PURE__*/ (function (EvidenceSortColumns) {
    EvidenceSortColumns["ClinicalSignificance"] = "CLINICAL_SIGNIFICANCE";
    EvidenceSortColumns["Description"] = "DESCRIPTION";
    EvidenceSortColumns["DiseaseName"] = "DISEASE_NAME";
    EvidenceSortColumns["DrugName"] = "DRUG_NAME";
    EvidenceSortColumns["EvidenceDirection"] = "EVIDENCE_DIRECTION";
    EvidenceSortColumns["EvidenceLevel"] = "EVIDENCE_LEVEL";
    EvidenceSortColumns["EvidenceRating"] = "EVIDENCE_RATING";
    EvidenceSortColumns["EvidenceType"] = "EVIDENCE_TYPE";
    EvidenceSortColumns["GeneSymbol"] = "GENE_SYMBOL";
    EvidenceSortColumns["Id"] = "ID";
    EvidenceSortColumns["Status"] = "STATUS";
    EvidenceSortColumns["VariantName"] = "VARIANT_NAME";
    EvidenceSortColumns["VariantOrigin"] = "VARIANT_ORIGIN";
    return EvidenceSortColumns;
})({});
var EvidenceStatus = /*@__PURE__*/ (function (EvidenceStatus) {
    EvidenceStatus["Accepted"] = "ACCEPTED";
    EvidenceStatus["Rejected"] = "REJECTED";
    EvidenceStatus["Submitted"] = "SUBMITTED";
    return EvidenceStatus;
})({});
var EvidenceType = /*@__PURE__*/ (function (EvidenceType) {
    EvidenceType["Diagnostic"] = "DIAGNOSTIC";
    EvidenceType["Functional"] = "FUNCTIONAL";
    EvidenceType["Oncogenic"] = "ONCOGENIC";
    EvidenceType["Predictive"] = "PREDICTIVE";
    EvidenceType["Predisposing"] = "PREDISPOSING";
    EvidenceType["Prognostic"] = "PROGNOSTIC";
    return EvidenceType;
})({});
var FlagState = /*@__PURE__*/ (function (FlagState) {
    FlagState["Open"] = "OPEN";
    FlagState["Resolved"] = "RESOLVED";
    return FlagState;
})({});
/** Enumeration of all entities in CIViC that can be flagged. */
var FlaggableEntities = /*@__PURE__*/ (function (FlaggableEntities) {
    FlaggableEntities["Assertion"] = "ASSERTION";
    FlaggableEntities["EvidenceItem"] = "EVIDENCE_ITEM";
    FlaggableEntities["Gene"] = "GENE";
    FlaggableEntities["Variant"] = "VARIANT";
    FlaggableEntities["VariantGroup"] = "VARIANT_GROUP";
    return FlaggableEntities;
})({});
var GenesSortColumns = /*@__PURE__*/ (function (GenesSortColumns) {
    GenesSortColumns["AssertionCount"] = "assertionCount";
    GenesSortColumns["DiseaseName"] = "diseaseName";
    GenesSortColumns["DrugName"] = "drugName";
    GenesSortColumns["EntrezSymbol"] = "entrezSymbol";
    GenesSortColumns["EvidenceItemCount"] = "evidenceItemCount";
    GenesSortColumns["GeneAlias"] = "geneAlias";
    GenesSortColumns["VariantCount"] = "variantCount";
    return GenesSortColumns;
})({});
var IntSearchOperator = /*@__PURE__*/ (function (IntSearchOperator) {
    /** Equal To */
    IntSearchOperator["Eq"] = "EQ";
    IntSearchOperator["Ge"] = "GE";
    IntSearchOperator["Gt"] = "GT";
    IntSearchOperator["Le"] = "LE";
    IntSearchOperator["Lt"] = "LT";
    IntSearchOperator["Ne"] = "NE";
    return IntSearchOperator;
})({});
/** Enumeration of all moderated CIViC entities. */
var ModeratedEntities = /*@__PURE__*/ (function (ModeratedEntities) {
    ModeratedEntities["Assertion"] = "ASSERTION";
    ModeratedEntities["EvidenceItem"] = "EVIDENCE_ITEM";
    ModeratedEntities["Gene"] = "GENE";
    ModeratedEntities["Variant"] = "VARIANT";
    return ModeratedEntities;
})({});
var NotificationReason = /*@__PURE__*/ (function (NotificationReason) {
    NotificationReason["Mention"] = "MENTION";
    NotificationReason["Subscription"] = "SUBSCRIPTION";
    return NotificationReason;
})({});
var OrganizationSortColumns = /*@__PURE__*/ (function (OrganizationSortColumns) {
    OrganizationSortColumns["Id"] = "ID";
    OrganizationSortColumns["Name"] = "NAME";
    return OrganizationSortColumns;
})({});
var PhenotypeSortColumns = /*@__PURE__*/ (function (PhenotypeSortColumns) {
    PhenotypeSortColumns["AssertionCount"] = "ASSERTION_COUNT";
    PhenotypeSortColumns["EvidenceItemCount"] = "EVIDENCE_ITEM_COUNT";
    PhenotypeSortColumns["HpoId"] = "HPO_ID";
    PhenotypeSortColumns["Name"] = "NAME";
    return PhenotypeSortColumns;
})({});
var ReadStatus = /*@__PURE__*/ (function (ReadStatus) {
    ReadStatus["Read"] = "READ";
    ReadStatus["Unread"] = "UNREAD";
    return ReadStatus;
})({});
var ReferenceBuild = /*@__PURE__*/ (function (ReferenceBuild) {
    ReferenceBuild["Grch37"] = "GRCH37";
    ReferenceBuild["Grch38"] = "GRCH38";
    ReferenceBuild["Ncbi36"] = "NCBI36";
    return ReferenceBuild;
})({});
var RevisionStatus = /*@__PURE__*/ (function (RevisionStatus) {
    RevisionStatus["Accepted"] = "ACCEPTED";
    RevisionStatus["New"] = "NEW";
    RevisionStatus["Rejected"] = "REJECTED";
    RevisionStatus["Superseded"] = "SUPERSEDED";
    return RevisionStatus;
})({});
var SearchableEntities = /*@__PURE__*/ (function (SearchableEntities) {
    SearchableEntities["Assertion"] = "ASSERTION";
    SearchableEntities["EvidenceItem"] = "EVIDENCE_ITEM";
    SearchableEntities["Gene"] = "GENE";
    SearchableEntities["Revision"] = "REVISION";
    SearchableEntities["Variant"] = "VARIANT";
    SearchableEntities["VariantGroup"] = "VARIANT_GROUP";
    return SearchableEntities;
})({});
var SortDirection = /*@__PURE__*/ (function (SortDirection) {
    SortDirection["Asc"] = "ASC";
    SortDirection["Desc"] = "DESC";
    return SortDirection;
})({});
var SourceSource = /*@__PURE__*/ (function (SourceSource) {
    SourceSource["Asco"] = "ASCO";
    SourceSource["Pubmed"] = "PUBMED";
    return SourceSource;
})({});
var SourceSuggestionStatus = /*@__PURE__*/ (function (SourceSuggestionStatus) {
    SourceSuggestionStatus["Curated"] = "CURATED";
    SourceSuggestionStatus["New"] = "NEW";
    SourceSuggestionStatus["Rejected"] = "REJECTED";
    return SourceSuggestionStatus;
})({});
var SourceSuggestionsSortColumns = /*@__PURE__*/ (function (SourceSuggestionsSortColumns) {
    SourceSuggestionsSortColumns["Citation"] = "CITATION";
    SourceSuggestionsSortColumns["CitationId"] = "CITATION_ID";
    SourceSuggestionsSortColumns["DiseaseName"] = "DISEASE_NAME";
    SourceSuggestionsSortColumns["GeneName"] = "GENE_NAME";
    SourceSuggestionsSortColumns["SourceType"] = "SOURCE_TYPE";
    SourceSuggestionsSortColumns["Submitter"] = "SUBMITTER";
    SourceSuggestionsSortColumns["VariantName"] = "VARIANT_NAME";
    return SourceSuggestionsSortColumns;
})({});
var SourcesSortColumns = /*@__PURE__*/ (function (SourcesSortColumns) {
    SourcesSortColumns["Authors"] = "AUTHORS";
    SourcesSortColumns["CitationId"] = "CITATION_ID";
    SourcesSortColumns["EvidenceCount"] = "EVIDENCE_COUNT";
    SourcesSortColumns["Journal"] = "JOURNAL";
    SourcesSortColumns["Name"] = "NAME";
    SourcesSortColumns["SourceType"] = "SOURCE_TYPE";
    SourcesSortColumns["Year"] = "YEAR";
    return SourcesSortColumns;
})({});
var StringSearchOperator = /*@__PURE__*/ (function (StringSearchOperator) {
    StringSearchOperator["Contains"] = "CONTAINS";
    StringSearchOperator["DoesNotContain"] = "DOES_NOT_CONTAIN";
    StringSearchOperator["Eq"] = "EQ";
    StringSearchOperator["Ne"] = "NE";
    StringSearchOperator["StartsWith"] = "STARTS_WITH";
    return StringSearchOperator;
})({});
/** Enumeration of all subscribable CIViC entities. */
var SubscribableEntities = /*@__PURE__*/ (function (SubscribableEntities) {
    SubscribableEntities["Assertion"] = "ASSERTION";
    SubscribableEntities["EvidenceItem"] = "EVIDENCE_ITEM";
    SubscribableEntities["Gene"] = "GENE";
    SubscribableEntities["Revision"] = "REVISION";
    SubscribableEntities["SourceSuggestion"] = "SOURCE_SUGGESTION";
    SubscribableEntities["Variant"] = "VARIANT";
    SubscribableEntities["VariantGroup"] = "VARIANT_GROUP";
    return SubscribableEntities;
})({});
var VariantDisplayFilter = /*@__PURE__*/ (function (VariantDisplayFilter) {
    /** Display all variants regardless of attached evience. */
    VariantDisplayFilter["All"] = "ALL";
    /** Display only variants which have at least one accepted evidence item. */
    VariantDisplayFilter["WithAccepted"] = "WITH_ACCEPTED";
    /** Display only variants which have evidence in either an accepted or submitted state. */
    VariantDisplayFilter["WithAcceptedOrSubmitted"] = "WITH_ACCEPTED_OR_SUBMITTED";
    /** Display variants which have at least one submited evidence item. */
    VariantDisplayFilter["WithSubmitted"] = "WITH_SUBMITTED";
    return VariantDisplayFilter;
})({});
var VariantGroupsSortColumns = /*@__PURE__*/ (function (VariantGroupsSortColumns) {
    VariantGroupsSortColumns["EvidenceItemCount"] = "EVIDENCE_ITEM_COUNT";
    VariantGroupsSortColumns["GeneNames"] = "GENE_NAMES";
    VariantGroupsSortColumns["Name"] = "NAME";
    VariantGroupsSortColumns["VariantCount"] = "VARIANT_COUNT";
    VariantGroupsSortColumns["VariantNames"] = "VARIANT_NAMES";
    return VariantGroupsSortColumns;
})({});
var VariantOrigin = /*@__PURE__*/ (function (VariantOrigin) {
    VariantOrigin["CommonGermline"] = "COMMON_GERMLINE";
    VariantOrigin["GermlineOrSomatic"] = "GERMLINE_OR_SOMATIC";
    VariantOrigin["Na"] = "NA";
    VariantOrigin["RareGermline"] = "RARE_GERMLINE";
    VariantOrigin["Somatic"] = "SOMATIC";
    VariantOrigin["Unknown"] = "UNKNOWN";
    return VariantOrigin;
})({});
var VariantTypeSortColumns = /*@__PURE__*/ (function (VariantTypeSortColumns) {
    VariantTypeSortColumns["Name"] = "NAME";
    VariantTypeSortColumns["Soid"] = "SOID";
    VariantTypeSortColumns["VariantCount"] = "VARIANT_COUNT";
    return VariantTypeSortColumns;
})({});
var VariantsSortColumns = /*@__PURE__*/ (function (VariantsSortColumns) {
    VariantsSortColumns["AssertionCount"] = "assertionCount";
    VariantsSortColumns["DiseaseName"] = "diseaseName";
    VariantsSortColumns["DrugName"] = "drugName";
    VariantsSortColumns["EntrezSymbol"] = "entrezSymbol";
    VariantsSortColumns["EvidenceItemCount"] = "evidenceItemCount";
    VariantsSortColumns["EvidenceScore"] = "evidenceScore";
    VariantsSortColumns["VariantName"] = "variantName";
    return VariantsSortColumns;
})({});
const AssertionPopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment assertionPopover on Assertion {
  id
  name
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  variantOrigin
  ampLevel
  acmgCodes {
    code
  }
  nccnGuideline
  fdaCompanionTest
  regulatoryApproval
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const AssertionBrowseTableRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment AssertionBrowseTableRowFields on Assertion {
  id
  name
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  disease {
    id
    name
  }
  drugs {
    id
    name
  }
  phenotypes @include(if: $cardView) {
    id
    name
  }
  drugInteractionType
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  ampLevel
  acmgCodes @include(if: $cardView) {
    code
  }
  fdaCompanionTest @include(if: $cardView)
  regulatoryApproval @include(if: $cardView)
  nccnGuideline @include(if: $cardView)
  variantOrigin @include(if: $cardView)
}
    `;
const ClinicalTrialPopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `;
const CommentListNodeFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment commentListNode on Comment {
  id
  title
  comment
  createdAt
  commenter {
    id
    username
    displayName
    name
    role
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
  }
}
    `;
const CommentPopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment commentPopover on Comment {
  id
  name
  createdAt
  title
  comment
  commenter {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  commentable {
    id
    name
    __typename
  }
}
    `;
const BrowseDiseaseRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  geneNames
  assertionCount
  evidenceItemCount
  variantCount
  geneCount
}
    `;
const DrugBrowseTableRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
}
    `;
const EventFeedNodeFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment eventFeedNode on Event {
  id
  action
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  originatingUser {
    id
    username
    displayName
    role
    profileImagePath(size: 32)
  }
  subject {
    name
    id
    ... on Source {
      citation
      sourceType
    }
    __typename
  }
  originatingObject {
    id
    name
    __typename
    ... on Revision {
      id
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `;
const EventFeedFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes
  uniqueParticipants {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations {
    id
    name
    profileImagePath(size: 32)
  }
  edges {
    cursor
    node {
      ...eventFeedNode
    }
  }
}
    ${EventFeedNodeFragmentDoc}`;
const EvidencePopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment evidencePopover on EvidenceItem {
  id
  name
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  evidenceRating
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  source {
    id
    citation
    sourceType
    displayType
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const EvidenceGridFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  disease {
    id
    name
  }
  drugs {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  phenotypes @include(if: $cardView) {
    id
    name
  }
  source @include(if: $cardView) {
    id
    citation
    citationId
    sourceType
    sourceUrl
    clinicalTrials {
      nctId
      id
    }
  }
  assertions @include(if: $cardView) {
    id
    name
  }
  status
  drugInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  clinicalSignificance
  variantOrigin
}
    `;
const FlagFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment flag on Flag {
  id
  state
  createdAt
  resolvedAt
  flaggable {
    id
    name
  }
  flaggingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  resolvingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  openComment {
    comment
  }
  resolutionComment {
    comment
  }
}
    `;
const FlagListFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment flagList on FlagConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  totalCount
  unfilteredCountForSubject
  uniqueFlaggingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  uniqueResolvingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  edges {
    node {
      ...flag
    }
  }
}
    ${FlagFragmentDoc}`;
const GenePopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment genePopover on Gene {
  id
  name
  officialName
  geneAliases
  variants {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `;
const QuicksearchResultFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `;
const OrgPopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `;
const OrganizationBrowseTableRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description @include(if: $cardView)
  profileImagePath(size: 256) @include(if: $cardView)
  url
  memberCount
  eventCount
  subGroups {
    name
    id
  }
  mostRecentEvent {
    createdAt
  }
  orgStatsHash @include(if: $cardView) {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `;
const PhenotypeBrowseTableRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
}
    `;
const ValidationErrorFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `;
const RevisionFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment revision on Revision {
  id
  revisionsetId
  createdAt
  resolvedAt
  fieldName
  currentValue
  suggestedValue
  linkoutData {
    name
    diffValue {
      ... on ObjectFieldDiff {
        currentObjects {
          id
          displayName
          displayType
          entityType
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
        }
      }
      ... on ScalarFieldDiff {
        left
        right
      }
    }
  }
  revisor {
    id
    displayName
    role
  }
  resolver {
    id
    displayName
    role
  }
  creationComment {
    comment
  }
  resolutionComment {
    comment
  }
  status
}
    `;
const ContributorFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment ContributorFields on ContributingUser {
  user {
    id
    profileImagePath(size: 12)
  }
  uniqueActions {
    action
    count
  }
  lastActionDate
  totalActionCount
}
    `;
const SubscriptionIdFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `;
const BrowseSourceSuggestionRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  geneName
  variantName
  diseaseName
  source {
    id
    citation
    citationId
    sourceType
    sourceUrl
    displayType
  }
  user {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  initialComment
  status
}
    `;
const SourcePopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment sourcePopover on SourcePopover {
  id
  name
  evidenceItemCount
  citation
  citationId
  displayType
  sourceUrl
  clinicalTrials {
    id
    nctId
  }
}
    `;
const BrowseSourceRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
}
    `;
const PopoverUserFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment popoverUser on User {
  id
  profileImagePath(size: 64)
  displayName
  bio
  role
  organizations {
    id
    name
  }
}
    `;
const BrowseVariantGroupRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `;
const VariantTypePopoverFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `;
const VariantTypeBrowseTableRowFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
}
    `;
const VariantPopoverFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment variantPopoverFields on Variant {
  id
  name
  description
  variantAliases
  alleleRegistryId
  evidenceItems {
    totalCount
  }
  gene {
    id
    name
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `;
const MenuVariantFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment menuVariant on Variant {
  id
  name
}
    `;
const RevisableEvidenceFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  variant {
    id
    name
  }
  variantOrigin
  description
  clinicalSignificance
  disease {
    id
    doid
    name
  }
  drugs {
    id
    ncitId
    name
  }
  drugInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    id
    hpoId
    name
  }
  evidenceRating
  source {
    id
    sourceType
    citationId
    citation
  }
}
    `;
const SubmittableEvidenceFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  clinicalSignificance
  evidenceLevel
  evidenceDirection
  evidenceRating
  drugInteractionType
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  source {
    id
    citation
    sourceType
  }
  phenotypes {
    id
    name
  }
  drugs {
    id
    name
  }
  disease {
    id
    name
  }
}
    `;
const RevisableGeneFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment RevisableGeneFields on Gene {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
}
    `;
const GeneTypeaheadFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `;
const SourceTypeaheadResultFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `;
const CoordinateFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `;
const RevisableVariantFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment RevisableVariantFields on Variant {
  id
  name
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  gene {
    id
    name
  }
  variantAliases
  alleleRegistryId
  clinvarIds
  ensemblVersion
  hgvsDescriptions
  referenceBuild
  variantTypes {
    id
    name
    soid
  }
  fivePrimeCoordinates {
    ...CoordinateFields
  }
  threePrimeCoordinates {
    ...CoordinateFields
  }
}
    ${CoordinateFieldsFragmentDoc}`;
const VariantTypeaheadFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `;
const AssertionDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment AssertionDetailFields on Assertion {
  id
  name
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const AssertionSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment AssertionSummaryFields on Assertion {
  id
  name
  summary
  description
  status
  variantOrigin
  disease {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
    alleleRegistryId
  }
  assertionType
  assertionDirection
  clinicalSignificance
  drugs {
    ncitId
    name
    id
  }
  phenotypes {
    id
    name
  }
  drugInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  nccnGuideline
  regulatoryApproval
  fdaCompanionTest
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `;
const EvidenceDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  variant {
    id
    name
  }
  gene {
    id
    name
  }
  assertions {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const EvidenceSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment EvidenceSummaryFields on EvidenceItem {
  id
  name
  description
  status
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  source {
    id
    citation
    citationId
    sourceType
    displayType
    sourceUrl
    ascoAbstractId
    clinicalTrials {
      nctId
      id
    }
  }
  evidenceRating
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `;
const GeneDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment GeneDetailFields on Gene {
  id
  name
  officialName
  entrezId
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const GeneSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment GeneSummaryFields on Gene {
  description
  entrezId
  geneAliases
  id
  name
  officialName
  sources {
    id
    citation
    sourceUrl
    displayType
    sourceType
  }
  variants {
    edges {
      node {
        id
        name
        description
      }
    }
  }
  myGeneInfoDetails
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `;
const OrganizationDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment OrganizationDetailFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 256)
  subGroups {
    id
    name
    profileImagePath(size: 12)
  }
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  orgAndSuborgsStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `;
const OrganizationGroupsFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment OrganizationGroupsFields on Organization {
  id
  name
  description
  profileImagePath(size: 12)
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `;
const OrganizationMembersFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 36)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
}
    `;
const SourceDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `;
const SourceSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment SourceSummaryFields on Source {
  displayType
  title
  abstract
  publicationDate
  citationId
  fullJournalTitle
  pmcId
  authorString
  clinicalTrials {
    nctId
    id
  }
}
    `;
const UserDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment UserDetailFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 36)
  role
  url
  bio
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
  }
  country {
    id
    name
  }
  statsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  mostRecentConflictOfInterestStatement {
    coiPresent
    coiStatement
    coiStatus
    createdAt
    expiresAt
  }
}
    `;
const NotificationOrganizationFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment notificationOrganization on Organization {
  id
  name
}
    `;
const NotificationOriginatingUsersFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `;
const NotificationFeedSubjectsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `;
const NotificationNodeFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment notificationNode on Notification {
  id
  type
  event {
    ...eventFeedNode
  }
  seen
  subscription {
    id
    subscribable {
      id
      name
      __typename
    }
  }
}
    ${EventFeedNodeFragmentDoc}`;
const SubscribableFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `;
const VariantGroupDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantGroupDetailFields on VariantGroup {
  id
  name
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const VariantGroupSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
}
    `;
const VariantDetailFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantDetailFields on Variant {
  id
  name
  gene {
    id
    name
  }
  variantAliases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
const MyVariantInfoFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  clinvarClinicalSignificance
  clinvarHgvsCoding
  clinvarHgvsGenomic
  clinvarHgvsNonCoding
  clinvarHgvsProtein
  clinvarId
  clinvarOmim
  cosmicId
  dbnsfpInterproDomain
  dbsnpRsid
  eglClass
  eglHgvs
  eglProtein
  eglTranscript
  exacAlleleCount
  exacAlleleFrequency
  exacAlleleNumber
  fathmmMklPrediction
  fathmmMklScore
  fathmmPrediction
  fathmmScore
  fitconsScore
  gerp
  gnomadExomeAlleleCount
  gnomadExomeAlleleFrequency
  gnomadExomeAlleleNumber
  gnomadExomeFilter
  gnomadGenomeAlleleCount
  gnomadGenomeAlleleFrequency
  gnomadGenomeAlleleNumber
  gnomadGenomeFilter
  lrtPrediction
  lrtScore
  metalrPrediction
  metalrScore
  metasvmPrediction
  metasvmScore
  mutationassessorPrediction
  mutationassessorScore
  mutationtasterPrediction
  mutationtasterScore
  phastcons100way
  phastcons30way
  phyloP100way
  phyloP30way
  polyphen2HdivPrediction
  polyphen2HdivScore
  polyphen2HvarPrediction
  polyphen2HvarScore
  proveanPrediction
  proveanScore
  revelScore
  siftPrediction
  siftScore
  siphy
  snpeffSnpEffect
  snpeffSnpImpact
}
    `;
const VariantSummaryFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    fragment VariantSummaryFields on Variant {
  id
  name
  description
  gene {
    id
    name
  }
  sources {
    id
    citation
    sourceUrl
    displayType
    sourceType
  }
  variantAliases
  alleleRegistryId
  variantTypes {
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  evidenceScore
  referenceBuild
  ensemblVersion
  fivePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
  }
  threePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  myVariantInfo {
    ...MyVariantInfoFields
  }
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${MyVariantInfoFieldsFragmentDoc}`;
const AssertionPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${AssertionPopoverFragmentDoc}`;
let AssertionPopoverGQL = /*@__PURE__*/ (() => {
    class AssertionPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = AssertionPopoverDocument;
        }
    }
    AssertionPopoverGQL.ɵfac = function AssertionPopoverGQL_Factory(t) { return new (t || AssertionPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AssertionPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssertionPopoverGQL, factory: AssertionPopoverGQL.ɵfac, providedIn: 'root' });
    return AssertionPopoverGQL;
})();
const AssertionsBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $cardView: Boolean!) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    drugName: $drugName
    id: $id
    summary: $summary
    assertionDirection: $assertionDirection
    clinicalSignificance: $clinicalSignificance
    assertionType: $assertionType
    variantId: $variantId
    sortBy: $sortBy
    ampLevel: $ampLevel
    geneName: $geneName
    variantName: $variantName
    evidenceId: $evidenceId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    drugId: $drugId
    diseaseId: $diseaseId
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...AssertionBrowseTableRowFields
      }
    }
  }
}
    ${AssertionBrowseTableRowFieldsFragmentDoc}`;
let AssertionsBrowseGQL = /*@__PURE__*/ (() => {
    class AssertionsBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = AssertionsBrowseDocument;
        }
    }
    AssertionsBrowseGQL.ɵfac = function AssertionsBrowseGQL_Factory(t) { return new (t || AssertionsBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AssertionsBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssertionsBrowseGQL, factory: AssertionsBrowseGQL.ɵfac, providedIn: 'root' });
    return AssertionsBrowseGQL;
})();
const ClinicalTrialPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ClinicalTrialPopoverFragmentDoc}`;
let ClinicalTrialPopoverGQL = /*@__PURE__*/ (() => {
    class ClinicalTrialPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ClinicalTrialPopoverDocument;
        }
    }
    ClinicalTrialPopoverGQL.ɵfac = function ClinicalTrialPopoverGQL_Factory(t) { return new (t || ClinicalTrialPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ClinicalTrialPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClinicalTrialPopoverGQL, factory: ClinicalTrialPopoverGQL.ɵfac, providedIn: 'root' });
    return ClinicalTrialPopoverGQL;
})();
const ClinicalTrialsBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ClinicalTrialsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $nctId: String, $sortBy: ClinicalTrialSort) {
  clinicalTrials(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    nctId: $nctId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        name
        nctId
        evidenceCount
        sourceCount
      }
    }
  }
}
    `;
let ClinicalTrialsBrowseGQL = /*@__PURE__*/ (() => {
    class ClinicalTrialsBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ClinicalTrialsBrowseDocument;
        }
    }
    ClinicalTrialsBrowseGQL.ɵfac = function ClinicalTrialsBrowseGQL_Factory(t) { return new (t || ClinicalTrialsBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ClinicalTrialsBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClinicalTrialsBrowseGQL, factory: ClinicalTrialsBrowseGQL.ɵfac, providedIn: 'root' });
    return ClinicalTrialsBrowseGQL;
})();
const CommentListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query CommentList($first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $subject: CommentableInput, $sortBy: DateSort) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    subject: $subject
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    uniqueCommenters {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    edges {
      cursor
      node {
        ...commentListNode
      }
    }
  }
}
    ${CommentListNodeFragmentDoc}`;
let CommentListGQL = /*@__PURE__*/ (() => {
    class CommentListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = CommentListDocument;
        }
    }
    CommentListGQL.ɵfac = function CommentListGQL_Factory(t) { return new (t || CommentListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    CommentListGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentListGQL, factory: CommentListGQL.ɵfac, providedIn: 'root' });
    return CommentListGQL;
})();
const CommentPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${CommentPopoverFragmentDoc}`;
let CommentPopoverGQL = /*@__PURE__*/ (() => {
    class CommentPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = CommentPopoverDocument;
        }
    }
    CommentPopoverGQL.ɵfac = function CommentPopoverGQL_Factory(t) { return new (t || CommentPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    CommentPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentPopoverGQL, factory: CommentPopoverGQL.ɵfac, providedIn: 'root' });
    return CommentPopoverGQL;
})();
const DiseasePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DiseasePopover($diseaseId: Int!) {
  diseasePopover(id: $diseaseId) {
    id
    name
    displayName
    doid
    diseaseUrl
    diseaseAliases
    assertionCount
    evidenceItemCount
    variantCount
  }
}
    `;
let DiseasePopoverGQL = /*@__PURE__*/ (() => {
    class DiseasePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DiseasePopoverDocument;
        }
    }
    DiseasePopoverGQL.ɵfac = function DiseasePopoverGQL_Factory(t) { return new (t || DiseasePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DiseasePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiseasePopoverGQL, factory: DiseasePopoverGQL.ɵfac, providedIn: 'root' });
    return DiseasePopoverGQL;
})();
const BrowseDiseasesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $geneNames: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    geneNames: $geneNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseDiseaseRowFields
      }
    }
  }
}
    ${BrowseDiseaseRowFieldsFragmentDoc}`;
let BrowseDiseasesGQL = /*@__PURE__*/ (() => {
    class BrowseDiseasesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseDiseasesDocument;
        }
    }
    BrowseDiseasesGQL.ɵfac = function BrowseDiseasesGQL_Factory(t) { return new (t || BrowseDiseasesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseDiseasesGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseDiseasesGQL, factory: BrowseDiseasesGQL.ɵfac, providedIn: 'root' });
    return BrowseDiseasesGQL;
})();
const DrugPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DrugPopover($drugId: Int!) {
  drugPopover(id: $drugId) {
    id
    name
    drugUrl
    ncitId
    drugAliases
    assertionCount
    evidenceItemCount
  }
}
    `;
let DrugPopoverGQL = /*@__PURE__*/ (() => {
    class DrugPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DrugPopoverDocument;
        }
    }
    DrugPopoverGQL.ɵfac = function DrugPopoverGQL_Factory(t) { return new (t || DrugPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DrugPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrugPopoverGQL, factory: DrugPopoverGQL.ɵfac, providedIn: 'root' });
    return DrugPopoverGQL;
})();
const DrugsBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DrugsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $sortBy: DrugSort) {
  drugs(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    ncitId: $ncitId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...DrugBrowseTableRowFields
      }
    }
  }
}
    ${DrugBrowseTableRowFieldsFragmentDoc}`;
let DrugsBrowseGQL = /*@__PURE__*/ (() => {
    class DrugsBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DrugsBrowseDocument;
        }
    }
    DrugsBrowseGQL.ɵfac = function DrugsBrowseGQL_Factory(t) { return new (t || DrugsBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DrugsBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrugsBrowseGQL, factory: DrugsBrowseGQL.ɵfac, providedIn: 'root' });
    return DrugsBrowseGQL;
})();
const EventFeedDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
  ) {
    ...eventFeed
  }
}
    ${EventFeedFragmentDoc}`;
let EventFeedGQL = /*@__PURE__*/ (() => {
    class EventFeedGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EventFeedDocument;
        }
    }
    EventFeedGQL.ɵfac = function EventFeedGQL_Factory(t) { return new (t || EventFeedGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EventFeedGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventFeedGQL, factory: EventFeedGQL.ɵfac, providedIn: 'root' });
    return EventFeedGQL;
})();
const EvidencePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${EvidencePopoverFragmentDoc}`;
let EvidencePopoverGQL = /*@__PURE__*/ (() => {
    class EvidencePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidencePopoverDocument;
        }
    }
    EvidencePopoverGQL.ɵfac = function EvidencePopoverGQL_Factory(t) { return new (t || EvidencePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidencePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidencePopoverGQL, factory: EvidencePopoverGQL.ɵfac, providedIn: 'root' });
    return EvidencePopoverGQL;
})();
const EvidenceBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $cardView: Boolean!) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    drugName: $drugName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    clinicalSignificance: $clinicalSignificance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    drugId: $drugId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    geneSymbol: $geneSymbol
    variantName: $variantName
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceGridFields
      }
    }
  }
}
    ${EvidenceGridFieldsFragmentDoc}`;
let EvidenceBrowseGQL = /*@__PURE__*/ (() => {
    class EvidenceBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidenceBrowseDocument;
        }
    }
    EvidenceBrowseGQL.ɵfac = function EvidenceBrowseGQL_Factory(t) { return new (t || EvidenceBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidenceBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceBrowseGQL, factory: EvidenceBrowseGQL.ɵfac, providedIn: 'root' });
    return EvidenceBrowseGQL;
})();
const FlagListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query FlagList($flaggable: FlaggableInput, $flaggingUserId: Int, $resolvingUserId: Int, $state: FlagState, $sortBy: DateSort, $first: Int, $last: Int, $before: String, $after: String) {
  flags(
    flaggable: $flaggable
    flaggingUserId: $flaggingUserId
    resolvingUserId: $resolvingUserId
    state: $state
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    ...flagList
  }
}
    ${FlagListFragmentDoc}`;
let FlagListGQL = /*@__PURE__*/ (() => {
    class FlagListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = FlagListDocument;
        }
    }
    FlagListGQL.ɵfac = function FlagListGQL_Factory(t) { return new (t || FlagListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    FlagListGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlagListGQL, factory: FlagListGQL.ɵfac, providedIn: 'root' });
    return FlagListGQL;
})();
const GenePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${GenePopoverFragmentDoc}`;
let GenePopoverGQL = /*@__PURE__*/ (() => {
    class GenePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = GenePopoverDocument;
        }
    }
    GenePopoverGQL.ɵfac = function GenePopoverGQL_Factory(t) { return new (t || GenePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    GenePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GenePopoverGQL, factory: GenePopoverGQL.ɵfac, providedIn: 'root' });
    return GenePopoverGQL;
})();
const BrowseGenesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    drugName: $drugName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    edges {
      cursor
      node {
        id
        entrezId
        name
        geneAliases
        diseases {
          name
          id
        }
        drugs {
          name
          id
        }
        variantCount
        evidenceItemCount
        assertionCount
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;
let BrowseGenesGQL = /*@__PURE__*/ (() => {
    class BrowseGenesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseGenesDocument;
        }
    }
    BrowseGenesGQL.ɵfac = function BrowseGenesGQL_Factory(t) { return new (t || BrowseGenesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseGenesGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseGenesGQL, factory: BrowseGenesGQL.ɵfac, providedIn: 'root' });
    return BrowseGenesGQL;
})();
const QuicksearchDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${QuicksearchResultFragmentDoc}`;
let QuicksearchGQL = /*@__PURE__*/ (() => {
    class QuicksearchGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = QuicksearchDocument;
        }
    }
    QuicksearchGQL.ɵfac = function QuicksearchGQL_Factory(t) { return new (t || QuicksearchGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    QuicksearchGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuicksearchGQL, factory: QuicksearchGQL.ɵfac, providedIn: 'root' });
    return QuicksearchGQL;
})();
const OrgPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${OrgPopoverFragmentDoc}`;
let OrgPopoverGQL = /*@__PURE__*/ (() => {
    class OrgPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = OrgPopoverDocument;
        }
    }
    OrgPopoverGQL.ɵfac = function OrgPopoverGQL_Factory(t) { return new (t || OrgPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    OrgPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrgPopoverGQL, factory: OrgPopoverGQL.ɵfac, providedIn: 'root' });
    return OrgPopoverGQL;
})();
const OrganizationsBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort, $cardView: Boolean!) {
  organizations(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $orgName
    id: $id
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationBrowseTableRowFields
      }
    }
  }
}
    ${OrganizationBrowseTableRowFieldsFragmentDoc}`;
let OrganizationsBrowseGQL = /*@__PURE__*/ (() => {
    class OrganizationsBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = OrganizationsBrowseDocument;
        }
    }
    OrganizationsBrowseGQL.ɵfac = function OrganizationsBrowseGQL_Factory(t) { return new (t || OrganizationsBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    OrganizationsBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganizationsBrowseGQL, factory: OrganizationsBrowseGQL.ɵfac, providedIn: 'root' });
    return OrganizationsBrowseGQL;
})();
const PhenotypePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
  }
}
    `;
let PhenotypePopoverGQL = /*@__PURE__*/ (() => {
    class PhenotypePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = PhenotypePopoverDocument;
        }
    }
    PhenotypePopoverGQL.ɵfac = function PhenotypePopoverGQL_Factory(t) { return new (t || PhenotypePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    PhenotypePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhenotypePopoverGQL, factory: PhenotypePopoverGQL.ɵfac, providedIn: 'root' });
    return PhenotypePopoverGQL;
})();
const PhenotypesBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query PhenotypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $hpoId: String, $sortBy: PhenotypeSort) {
  phenotypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    hpoId: $hpoId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...PhenotypeBrowseTableRowFields
      }
    }
  }
}
    ${PhenotypeBrowseTableRowFieldsFragmentDoc}`;
let PhenotypesBrowseGQL = /*@__PURE__*/ (() => {
    class PhenotypesBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = PhenotypesBrowseDocument;
        }
    }
    PhenotypesBrowseGQL.ɵfac = function PhenotypesBrowseGQL_Factory(t) { return new (t || PhenotypesBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    PhenotypesBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhenotypesBrowseGQL, factory: PhenotypesBrowseGQL.ɵfac, providedIn: 'root' });
    return PhenotypesBrowseGQL;
})();
const AcceptRevisionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;
let AcceptRevisionGQL = /*@__PURE__*/ (() => {
    class AcceptRevisionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = AcceptRevisionDocument;
        }
    }
    AcceptRevisionGQL.ɵfac = function AcceptRevisionGQL_Factory(t) { return new (t || AcceptRevisionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AcceptRevisionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AcceptRevisionGQL, factory: AcceptRevisionGQL.ɵfac, providedIn: 'root' });
    return AcceptRevisionGQL;
})();
const RejectRevisionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;
let RejectRevisionGQL = /*@__PURE__*/ (() => {
    class RejectRevisionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = RejectRevisionDocument;
        }
    }
    RejectRevisionGQL.ɵfac = function RejectRevisionGQL_Factory(t) { return new (t || RejectRevisionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    RejectRevisionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RejectRevisionGQL, factory: RejectRevisionGQL.ɵfac, providedIn: 'root' });
    return RejectRevisionGQL;
})();
const ValidateRevisionsForAcceptanceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ValidationErrorFragmentDoc}`;
let ValidateRevisionsForAcceptanceGQL = /*@__PURE__*/ (() => {
    class ValidateRevisionsForAcceptanceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ValidateRevisionsForAcceptanceDocument;
        }
    }
    ValidateRevisionsForAcceptanceGQL.ɵfac = function ValidateRevisionsForAcceptanceGQL_Factory(t) { return new (t || ValidateRevisionsForAcceptanceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ValidateRevisionsForAcceptanceGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ValidateRevisionsForAcceptanceGQL, factory: ValidateRevisionsForAcceptanceGQL.ɵfac, providedIn: 'root' });
    return ValidateRevisionsForAcceptanceGQL;
})();
const RevisionsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $revisionsetId: String, $status: RevisionStatus) {
  revisions(
    first: $first
    last: $last
    before: $before
    after: $after
    fieldName: $fieldName
    originatingUserId: $originatingUserId
    subject: $subject
    status: $status
    revisionsetId: $revisionsetId
  ) {
    totalCount
    unfilteredCountForSubject
    uniqueRevisors {
      username
      id
      profileImagePath(size: 32)
    }
    revisedFieldNames {
      name
      displayName
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...revision
      }
    }
  }
}
    ${RevisionFragmentDoc}`;
let RevisionsGQL = /*@__PURE__*/ (() => {
    class RevisionsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = RevisionsDocument;
        }
    }
    RevisionsGQL.ɵfac = function RevisionsGQL_Factory(t) { return new (t || RevisionsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    RevisionsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RevisionsGQL, factory: RevisionsGQL.ɵfac, providedIn: 'root' });
    return RevisionsGQL;
})();
const ContributorAvatarsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ContributorAvatars($subscribable: SubscribableInput!) {
  contributors(subscribable: $subscribable) {
    editors {
      ...ContributorFields
    }
    curators {
      ...ContributorFields
    }
  }
}
    ${ContributorFieldsFragmentDoc}`;
let ContributorAvatarsGQL = /*@__PURE__*/ (() => {
    class ContributorAvatarsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ContributorAvatarsDocument;
        }
    }
    ContributorAvatarsGQL.ɵfac = function ContributorAvatarsGQL_Factory(t) { return new (t || ContributorAvatarsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ContributorAvatarsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContributorAvatarsGQL, factory: ContributorAvatarsGQL.ɵfac, providedIn: 'root' });
    return ContributorAvatarsGQL;
})();
const SubscriptionForEntityDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${SubscriptionIdFragmentDoc}`;
let SubscriptionForEntityGQL = /*@__PURE__*/ (() => {
    class SubscriptionForEntityGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = SubscriptionForEntityDocument;
        }
    }
    SubscriptionForEntityGQL.ɵfac = function SubscriptionForEntityGQL_Factory(t) { return new (t || SubscriptionForEntityGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SubscriptionForEntityGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscriptionForEntityGQL, factory: SubscriptionForEntityGQL.ɵfac, providedIn: 'root' });
    return SubscriptionForEntityGQL;
})();
const BrowseSourceSuggestionsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $geneName: String, $variantName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    geneName: $geneName
    variantName: $variantName
    diseaseName: $diseaseName
    comment: $comment
    submitter: $submitter
    citation: $citation
    submitterId: $submitterId
    status: $status
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceSuggestionRowFields
      }
    }
  }
}
    ${BrowseSourceSuggestionRowFieldsFragmentDoc}`;
let BrowseSourceSuggestionsGQL = /*@__PURE__*/ (() => {
    class BrowseSourceSuggestionsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseSourceSuggestionsDocument;
        }
    }
    BrowseSourceSuggestionsGQL.ɵfac = function BrowseSourceSuggestionsGQL_Factory(t) { return new (t || BrowseSourceSuggestionsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseSourceSuggestionsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseSourceSuggestionsGQL, factory: BrowseSourceSuggestionsGQL.ɵfac, providedIn: 'root' });
    return BrowseSourceSuggestionsGQL;
})();
const UpdateSourceSuggestionStatusDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;
let UpdateSourceSuggestionStatusGQL = /*@__PURE__*/ (() => {
    class UpdateSourceSuggestionStatusGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = UpdateSourceSuggestionStatusDocument;
        }
    }
    UpdateSourceSuggestionStatusGQL.ɵfac = function UpdateSourceSuggestionStatusGQL_Factory(t) { return new (t || UpdateSourceSuggestionStatusGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UpdateSourceSuggestionStatusGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateSourceSuggestionStatusGQL, factory: UpdateSourceSuggestionStatusGQL.ɵfac, providedIn: 'root' });
    return UpdateSourceSuggestionStatusGQL;
})();
const SourcePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${SourcePopoverFragmentDoc}`;
let SourcePopoverGQL = /*@__PURE__*/ (() => {
    class SourcePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = SourcePopoverDocument;
        }
    }
    SourcePopoverGQL.ɵfac = function SourcePopoverGQL_Factory(t) { return new (t || SourcePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SourcePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SourcePopoverGQL, factory: SourcePopoverGQL.ɵfac, providedIn: 'root' });
    return SourcePopoverGQL;
})();
const BrowseSourcesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseSources($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int) {
  browseSources(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    year: $year
    sourceType: $sourceType
    citationId: $citationId
    author: $author
    journal: $journal
    clinicalTrialId: $clinicalTrialId
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${BrowseSourceRowFieldsFragmentDoc}`;
let BrowseSourcesGQL = /*@__PURE__*/ (() => {
    class BrowseSourcesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseSourcesDocument;
        }
    }
    BrowseSourcesGQL.ɵfac = function BrowseSourcesGQL_Factory(t) { return new (t || BrowseSourcesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseSourcesGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseSourcesGQL, factory: BrowseSourcesGQL.ɵfac, providedIn: 'root' });
    return BrowseSourcesGQL;
})();
const UserPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${PopoverUserFragmentDoc}`;
let UserPopoverGQL = /*@__PURE__*/ (() => {
    class UserPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = UserPopoverDocument;
        }
    }
    UserPopoverGQL.ɵfac = function UserPopoverGQL_Factory(t) { return new (t || UserPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UserPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserPopoverGQL, factory: UserPopoverGQL.ɵfac, providedIn: 'root' });
    return UserPopoverGQL;
})();
const BrowseVariantGroupsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseVariantGroups($first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantGroupsSort, $name: String, $geneNames: String, $variantNames: String) {
  browseVariantGroups(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    geneNames: $geneNames
    variantNames: $variantNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${BrowseVariantGroupRowFieldsFragmentDoc}`;
let BrowseVariantGroupsGQL = /*@__PURE__*/ (() => {
    class BrowseVariantGroupsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseVariantGroupsDocument;
        }
    }
    BrowseVariantGroupsGQL.ɵfac = function BrowseVariantGroupsGQL_Factory(t) { return new (t || BrowseVariantGroupsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseVariantGroupsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseVariantGroupsGQL, factory: BrowseVariantGroupsGQL.ɵfac, providedIn: 'root' });
    return BrowseVariantGroupsGQL;
})();
const VariantTypePopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${VariantTypePopoverFragmentDoc}`;
let VariantTypePopoverGQL = /*@__PURE__*/ (() => {
    class VariantTypePopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantTypePopoverDocument;
        }
    }
    VariantTypePopoverGQL.ɵfac = function VariantTypePopoverGQL_Factory(t) { return new (t || VariantTypePopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantTypePopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantTypePopoverGQL, factory: VariantTypePopoverGQL.ɵfac, providedIn: 'root' });
    return VariantTypePopoverGQL;
})();
const VariantTypesBrowseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantTypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $soid: String, $sortBy: VariantTypeSort) {
  variantTypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    soid: $soid
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...VariantTypeBrowseTableRowFields
      }
    }
  }
}
    ${VariantTypeBrowseTableRowFieldsFragmentDoc}`;
let VariantTypesBrowseGQL = /*@__PURE__*/ (() => {
    class VariantTypesBrowseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantTypesBrowseDocument;
        }
    }
    VariantTypesBrowseGQL.ɵfac = function VariantTypesBrowseGQL_Factory(t) { return new (t || VariantTypesBrowseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantTypesBrowseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantTypesBrowseGQL, factory: VariantTypesBrowseGQL.ɵfac, providedIn: 'root' });
    return VariantTypesBrowseGQL;
})();
const VariantPopoverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${VariantPopoverFieldsFragmentDoc}`;
let VariantPopoverGQL = /*@__PURE__*/ (() => {
    class VariantPopoverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantPopoverDocument;
        }
    }
    VariantPopoverGQL.ɵfac = function VariantPopoverGQL_Factory(t) { return new (t || VariantPopoverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantPopoverGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantPopoverGQL, factory: VariantPopoverGQL.ɵfac, providedIn: 'root' });
    return VariantPopoverGQL;
})();
const VariantsMenuDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantsMenu($geneId: Int, $variantName: String, $evidenceStatusFilter: VariantDisplayFilter, $first: Int, $last: Int, $before: String, $after: String) {
  variants(
    geneId: $geneId
    name: $variantName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuVariant
      }
    }
  }
}
    ${MenuVariantFragmentDoc}`;
let VariantsMenuGQL = /*@__PURE__*/ (() => {
    class VariantsMenuGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantsMenuDocument;
        }
    }
    VariantsMenuGQL.ɵfac = function VariantsMenuGQL_Factory(t) { return new (t || VariantsMenuGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantsMenuGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantsMenuGQL, factory: VariantsMenuGQL.ɵfac, providedIn: 'root' });
    return VariantsMenuGQL;
})();
const BrowseVariantsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $drugName: String, $variantAlias: String, $variantTypeId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    drugName: $drugName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        name
        evidenceScore
        evidenceItemCount
        geneId
        geneName
        diseases {
          id
          name
        }
        drugs {
          id
          name
        }
        aliases {
          name
        }
        assertionCount
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;
let BrowseVariantsGQL = /*@__PURE__*/ (() => {
    class BrowseVariantsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = BrowseVariantsDocument;
        }
    }
    BrowseVariantsGQL.ɵfac = function BrowseVariantsGQL_Factory(t) { return new (t || BrowseVariantsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    BrowseVariantsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseVariantsGQL, factory: BrowseVariantsGQL.ɵfac, providedIn: 'root' });
    return BrowseVariantsGQL;
})();
const ViewerBaseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ViewerBase {
  viewer {
    id
    username
    role
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
    events(first: 1) {
      nodes {
        id
        createdAt
        organization {
          id
          name
          profileImagePath(size: 32)
        }
      }
    }
  }
}
    `;
let ViewerBaseGQL = /*@__PURE__*/ (() => {
    class ViewerBaseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ViewerBaseDocument;
        }
    }
    ViewerBaseGQL.ɵfac = function ViewerBaseGQL_Factory(t) { return new (t || ViewerBaseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ViewerBaseGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewerBaseGQL, factory: ViewerBaseGQL.ɵfac, providedIn: 'root' });
    return ViewerBaseGQL;
})();
const ViewerFullDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ViewerFull {
  viewer {
    id
    username
    name
    email
    bio
    url
    role
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
  }
}
    `;
let ViewerFullGQL = /*@__PURE__*/ (() => {
    class ViewerFullGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ViewerFullDocument;
        }
    }
    ViewerFullGQL.ɵfac = function ViewerFullGQL_Factory(t) { return new (t || ViewerFullGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ViewerFullGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewerFullGQL, factory: ViewerFullGQL.ɵfac, providedIn: 'root' });
    return ViewerFullGQL;
})();
const AddCommentDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${CommentListNodeFragmentDoc}`;
let AddCommentGQL = /*@__PURE__*/ (() => {
    class AddCommentGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = AddCommentDocument;
        }
    }
    AddCommentGQL.ɵfac = function AddCommentGQL_Factory(t) { return new (t || AddCommentGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AddCommentGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AddCommentGQL, factory: AddCommentGQL.ɵfac, providedIn: 'root' });
    return AddCommentGQL;
})();
const DiseaseTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    doid
    diseaseAliases
  }
}
    `;
let DiseaseTypeaheadGQL = /*@__PURE__*/ (() => {
    class DiseaseTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DiseaseTypeaheadDocument;
        }
    }
    DiseaseTypeaheadGQL.ɵfac = function DiseaseTypeaheadGQL_Factory(t) { return new (t || DiseaseTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DiseaseTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiseaseTypeaheadGQL, factory: DiseaseTypeaheadGQL.ɵfac, providedIn: 'root' });
    return DiseaseTypeaheadGQL;
})();
const DrugTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;
let DrugTypeaheadGQL = /*@__PURE__*/ (() => {
    class DrugTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DrugTypeaheadDocument;
        }
    }
    DrugTypeaheadGQL.ɵfac = function DrugTypeaheadGQL_Factory(t) { return new (t || DrugTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DrugTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrugTypeaheadGQL, factory: DrugTypeaheadGQL.ɵfac, providedIn: 'root' });
    return DrugTypeaheadGQL;
})();
const EvidenceItemRevisableFieldsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${RevisableEvidenceFieldsFragmentDoc}`;
let EvidenceItemRevisableFieldsGQL = /*@__PURE__*/ (() => {
    class EvidenceItemRevisableFieldsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidenceItemRevisableFieldsDocument;
        }
    }
    EvidenceItemRevisableFieldsGQL.ɵfac = function EvidenceItemRevisableFieldsGQL_Factory(t) { return new (t || EvidenceItemRevisableFieldsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidenceItemRevisableFieldsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceItemRevisableFieldsGQL, factory: EvidenceItemRevisableFieldsGQL.ɵfac, providedIn: 'root' });
    return EvidenceItemRevisableFieldsGQL;
})();
const SuggestEvidenceItemRevisionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;
let SuggestEvidenceItemRevisionGQL = /*@__PURE__*/ (() => {
    class SuggestEvidenceItemRevisionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = SuggestEvidenceItemRevisionDocument;
        }
    }
    SuggestEvidenceItemRevisionGQL.ɵfac = function SuggestEvidenceItemRevisionGQL_Factory(t) { return new (t || SuggestEvidenceItemRevisionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SuggestEvidenceItemRevisionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuggestEvidenceItemRevisionGQL, factory: SuggestEvidenceItemRevisionGQL.ɵfac, providedIn: 'root' });
    return SuggestEvidenceItemRevisionGQL;
})();
const EvidenceSubmittableFieldsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${SubmittableEvidenceFieldsFragmentDoc}`;
let EvidenceSubmittableFieldsGQL = /*@__PURE__*/ (() => {
    class EvidenceSubmittableFieldsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidenceSubmittableFieldsDocument;
        }
    }
    EvidenceSubmittableFieldsGQL.ɵfac = function EvidenceSubmittableFieldsGQL_Factory(t) { return new (t || EvidenceSubmittableFieldsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidenceSubmittableFieldsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceSubmittableFieldsGQL, factory: EvidenceSubmittableFieldsGQL.ɵfac, providedIn: 'root' });
    return EvidenceSubmittableFieldsGQL;
})();
const SubmitEvidenceItemDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;
let SubmitEvidenceItemGQL = /*@__PURE__*/ (() => {
    class SubmitEvidenceItemGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = SubmitEvidenceItemDocument;
        }
    }
    SubmitEvidenceItemGQL.ɵfac = function SubmitEvidenceItemGQL_Factory(t) { return new (t || SubmitEvidenceItemGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SubmitEvidenceItemGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubmitEvidenceItemGQL, factory: SubmitEvidenceItemGQL.ɵfac, providedIn: 'root' });
    return SubmitEvidenceItemGQL;
})();
const FlagEntityDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;
let FlagEntityGQL = /*@__PURE__*/ (() => {
    class FlagEntityGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = FlagEntityDocument;
        }
    }
    FlagEntityGQL.ɵfac = function FlagEntityGQL_Factory(t) { return new (t || FlagEntityGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    FlagEntityGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlagEntityGQL, factory: FlagEntityGQL.ɵfac, providedIn: 'root' });
    return FlagEntityGQL;
})();
const ResolveFlagDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;
let ResolveFlagGQL = /*@__PURE__*/ (() => {
    class ResolveFlagGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = ResolveFlagDocument;
        }
    }
    ResolveFlagGQL.ɵfac = function ResolveFlagGQL_Factory(t) { return new (t || ResolveFlagGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ResolveFlagGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResolveFlagGQL, factory: ResolveFlagGQL.ɵfac, providedIn: 'root' });
    return ResolveFlagGQL;
})();
const GeneRevisableFieldsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${RevisableGeneFieldsFragmentDoc}`;
let GeneRevisableFieldsGQL = /*@__PURE__*/ (() => {
    class GeneRevisableFieldsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = GeneRevisableFieldsDocument;
        }
    }
    GeneRevisableFieldsGQL.ɵfac = function GeneRevisableFieldsGQL_Factory(t) { return new (t || GeneRevisableFieldsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    GeneRevisableFieldsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeneRevisableFieldsGQL, factory: GeneRevisableFieldsGQL.ɵfac, providedIn: 'root' });
    return GeneRevisableFieldsGQL;
})();
const SuggestGeneRevisionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
    clientMutationId
    gene {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;
let SuggestGeneRevisionGQL = /*@__PURE__*/ (() => {
    class SuggestGeneRevisionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = SuggestGeneRevisionDocument;
        }
    }
    SuggestGeneRevisionGQL.ɵfac = function SuggestGeneRevisionGQL_Factory(t) { return new (t || SuggestGeneRevisionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SuggestGeneRevisionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuggestGeneRevisionGQL, factory: SuggestGeneRevisionGQL.ɵfac, providedIn: 'root' });
    return SuggestGeneRevisionGQL;
})();
const GeneTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${GeneTypeaheadFieldsFragmentDoc}`;
let GeneTypeaheadGQL = /*@__PURE__*/ (() => {
    class GeneTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = GeneTypeaheadDocument;
        }
    }
    GeneTypeaheadGQL.ɵfac = function GeneTypeaheadGQL_Factory(t) { return new (t || GeneTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    GeneTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeneTypeaheadGQL, factory: GeneTypeaheadGQL.ɵfac, providedIn: 'root' });
    return GeneTypeaheadGQL;
})();
const PhenotypeTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;
let PhenotypeTypeaheadGQL = /*@__PURE__*/ (() => {
    class PhenotypeTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = PhenotypeTypeaheadDocument;
        }
    }
    PhenotypeTypeaheadGQL.ɵfac = function PhenotypeTypeaheadGQL_Factory(t) { return new (t || PhenotypeTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    PhenotypeTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhenotypeTypeaheadGQL, factory: PhenotypeTypeaheadGQL.ɵfac, providedIn: 'root' });
    return PhenotypeTypeaheadGQL;
})();
const CitationTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${SourceTypeaheadResultFragmentDoc}`;
let CitationTypeaheadGQL = /*@__PURE__*/ (() => {
    class CitationTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = CitationTypeaheadDocument;
        }
    }
    CitationTypeaheadGQL.ɵfac = function CitationTypeaheadGQL_Factory(t) { return new (t || CitationTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    CitationTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CitationTypeaheadGQL, factory: CitationTypeaheadGQL.ɵfac, providedIn: 'root' });
    return CitationTypeaheadGQL;
})();
const CitationExistenceCheckDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;
let CitationExistenceCheckGQL = /*@__PURE__*/ (() => {
    class CitationExistenceCheckGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = CitationExistenceCheckDocument;
        }
    }
    CitationExistenceCheckGQL.ɵfac = function CitationExistenceCheckGQL_Factory(t) { return new (t || CitationExistenceCheckGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    CitationExistenceCheckGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CitationExistenceCheckGQL, factory: CitationExistenceCheckGQL.ɵfac, providedIn: 'root' });
    return CitationExistenceCheckGQL;
})();
const CreateSourceStubDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;
let CreateSourceStubGQL = /*@__PURE__*/ (() => {
    class CreateSourceStubGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = CreateSourceStubDocument;
        }
    }
    CreateSourceStubGQL.ɵfac = function CreateSourceStubGQL_Factory(t) { return new (t || CreateSourceStubGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    CreateSourceStubGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateSourceStubGQL, factory: CreateSourceStubGQL.ɵfac, providedIn: 'root' });
    return CreateSourceStubGQL;
})();
const VariantTypeTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;
let VariantTypeTypeaheadGQL = /*@__PURE__*/ (() => {
    class VariantTypeTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantTypeTypeaheadDocument;
        }
    }
    VariantTypeTypeaheadGQL.ɵfac = function VariantTypeTypeaheadGQL_Factory(t) { return new (t || VariantTypeTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantTypeTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantTypeTypeaheadGQL, factory: VariantTypeTypeaheadGQL.ɵfac, providedIn: 'root' });
    return VariantTypeTypeaheadGQL;
})();
const VariantRevisableFieldsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${RevisableVariantFieldsFragmentDoc}`;
let VariantRevisableFieldsGQL = /*@__PURE__*/ (() => {
    class VariantRevisableFieldsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantRevisableFieldsDocument;
        }
    }
    VariantRevisableFieldsGQL.ɵfac = function VariantRevisableFieldsGQL_Factory(t) { return new (t || VariantRevisableFieldsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantRevisableFieldsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantRevisableFieldsGQL, factory: VariantRevisableFieldsGQL.ɵfac, providedIn: 'root' });
    return VariantRevisableFieldsGQL;
})();
const SuggestVariantRevisionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation SuggestVariantRevision($input: SuggestVariantRevisionInput!) {
  suggestVariantRevision(input: $input) {
    clientMutationId
    variant {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;
let SuggestVariantRevisionGQL = /*@__PURE__*/ (() => {
    class SuggestVariantRevisionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = SuggestVariantRevisionDocument;
        }
    }
    SuggestVariantRevisionGQL.ɵfac = function SuggestVariantRevisionGQL_Factory(t) { return new (t || SuggestVariantRevisionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SuggestVariantRevisionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuggestVariantRevisionGQL, factory: SuggestVariantRevisionGQL.ɵfac, providedIn: 'root' });
    return SuggestVariantRevisionGQL;
})();
const VariantTypeaheadDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantTypeahead($name: String!) {
  variants(name: $name, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${VariantTypeaheadFieldsFragmentDoc}`;
let VariantTypeaheadGQL = /*@__PURE__*/ (() => {
    class VariantTypeaheadGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantTypeaheadDocument;
        }
    }
    VariantTypeaheadGQL.ɵfac = function VariantTypeaheadGQL_Factory(t) { return new (t || VariantTypeaheadGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantTypeaheadGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantTypeaheadGQL, factory: VariantTypeaheadGQL.ɵfac, providedIn: 'root' });
    return VariantTypeaheadGQL;
})();
const AssertionDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${AssertionDetailFieldsFragmentDoc}`;
let AssertionDetailGQL = /*@__PURE__*/ (() => {
    class AssertionDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = AssertionDetailDocument;
        }
    }
    AssertionDetailGQL.ɵfac = function AssertionDetailGQL_Factory(t) { return new (t || AssertionDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AssertionDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssertionDetailGQL, factory: AssertionDetailGQL.ɵfac, providedIn: 'root' });
    return AssertionDetailGQL;
})();
const AssertionSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${AssertionSummaryFieldsFragmentDoc}`;
let AssertionSummaryGQL = /*@__PURE__*/ (() => {
    class AssertionSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = AssertionSummaryDocument;
        }
    }
    AssertionSummaryGQL.ɵfac = function AssertionSummaryGQL_Factory(t) { return new (t || AssertionSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    AssertionSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssertionSummaryGQL, factory: AssertionSummaryGQL.ɵfac, providedIn: 'root' });
    return AssertionSummaryGQL;
})();
const ClinicalTrialDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
  }
}
    `;
let ClinicalTrialDetailGQL = /*@__PURE__*/ (() => {
    class ClinicalTrialDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = ClinicalTrialDetailDocument;
        }
    }
    ClinicalTrialDetailGQL.ɵfac = function ClinicalTrialDetailGQL_Factory(t) { return new (t || ClinicalTrialDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    ClinicalTrialDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClinicalTrialDetailGQL, factory: ClinicalTrialDetailGQL.ɵfac, providedIn: 'root' });
    return ClinicalTrialDetailGQL;
})();
const DiseaseDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
  }
}
    `;
let DiseaseDetailGQL = /*@__PURE__*/ (() => {
    class DiseaseDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DiseaseDetailDocument;
        }
    }
    DiseaseDetailGQL.ɵfac = function DiseaseDetailGQL_Factory(t) { return new (t || DiseaseDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DiseaseDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiseaseDetailGQL, factory: DiseaseDetailGQL.ɵfac, providedIn: 'root' });
    return DiseaseDetailGQL;
})();
const DrugDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
  }
}
    `;
let DrugDetailGQL = /*@__PURE__*/ (() => {
    class DrugDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = DrugDetailDocument;
        }
    }
    DrugDetailGQL.ɵfac = function DrugDetailGQL_Factory(t) { return new (t || DrugDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    DrugDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrugDetailGQL, factory: DrugDetailGQL.ɵfac, providedIn: 'root' });
    return DrugDetailGQL;
})();
const EvidenceDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${EvidenceDetailFieldsFragmentDoc}`;
let EvidenceDetailGQL = /*@__PURE__*/ (() => {
    class EvidenceDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidenceDetailDocument;
        }
    }
    EvidenceDetailGQL.ɵfac = function EvidenceDetailGQL_Factory(t) { return new (t || EvidenceDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidenceDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceDetailGQL, factory: EvidenceDetailGQL.ɵfac, providedIn: 'root' });
    return EvidenceDetailGQL;
})();
const EvidenceSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${EvidenceSummaryFieldsFragmentDoc}`;
let EvidenceSummaryGQL = /*@__PURE__*/ (() => {
    class EvidenceSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = EvidenceSummaryDocument;
        }
    }
    EvidenceSummaryGQL.ɵfac = function EvidenceSummaryGQL_Factory(t) { return new (t || EvidenceSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    EvidenceSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceSummaryGQL, factory: EvidenceSummaryGQL.ɵfac, providedIn: 'root' });
    return EvidenceSummaryGQL;
})();
const GeneDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${GeneDetailFieldsFragmentDoc}`;
let GeneDetailGQL = /*@__PURE__*/ (() => {
    class GeneDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = GeneDetailDocument;
        }
    }
    GeneDetailGQL.ɵfac = function GeneDetailGQL_Factory(t) { return new (t || GeneDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    GeneDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeneDetailGQL, factory: GeneDetailGQL.ɵfac, providedIn: 'root' });
    return GeneDetailGQL;
})();
const GenesSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${GeneSummaryFieldsFragmentDoc}`;
let GenesSummaryGQL = /*@__PURE__*/ (() => {
    class GenesSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = GenesSummaryDocument;
        }
    }
    GenesSummaryGQL.ɵfac = function GenesSummaryGQL_Factory(t) { return new (t || GenesSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    GenesSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GenesSummaryGQL, factory: GenesSummaryGQL.ɵfac, providedIn: 'root' });
    return GenesSummaryGQL;
})();
const OrganizationDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${OrganizationDetailFieldsFragmentDoc}`;
let OrganizationDetailGQL = /*@__PURE__*/ (() => {
    class OrganizationDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = OrganizationDetailDocument;
        }
    }
    OrganizationDetailGQL.ɵfac = function OrganizationDetailGQL_Factory(t) { return new (t || OrganizationDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    OrganizationDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganizationDetailGQL, factory: OrganizationDetailGQL.ɵfac, providedIn: 'root' });
    return OrganizationDetailGQL;
})();
const OrganizationGroupsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${OrganizationGroupsFieldsFragmentDoc}`;
let OrganizationGroupsGQL = /*@__PURE__*/ (() => {
    class OrganizationGroupsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = OrganizationGroupsDocument;
        }
    }
    OrganizationGroupsGQL.ɵfac = function OrganizationGroupsGQL_Factory(t) { return new (t || OrganizationGroupsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    OrganizationGroupsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganizationGroupsGQL, factory: OrganizationGroupsGQL.ɵfac, providedIn: 'root' });
    return OrganizationGroupsGQL;
})();
const OrganizationMembersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query OrganizationMembers($organizationId: Int!) {
  organization(id: $organizationId) {
    members {
      edges {
        cursor
        node {
          ...OrganizationMembersFields
        }
      }
    }
  }
}
    ${OrganizationMembersFieldsFragmentDoc}`;
let OrganizationMembersGQL = /*@__PURE__*/ (() => {
    class OrganizationMembersGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = OrganizationMembersDocument;
        }
    }
    OrganizationMembersGQL.ɵfac = function OrganizationMembersGQL_Factory(t) { return new (t || OrganizationMembersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    OrganizationMembersGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganizationMembersGQL, factory: OrganizationMembersGQL.ɵfac, providedIn: 'root' });
    return OrganizationMembersGQL;
})();
const PhenotypeDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
  }
}
    `;
let PhenotypeDetailGQL = /*@__PURE__*/ (() => {
    class PhenotypeDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = PhenotypeDetailDocument;
        }
    }
    PhenotypeDetailGQL.ɵfac = function PhenotypeDetailGQL_Factory(t) { return new (t || PhenotypeDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    PhenotypeDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhenotypeDetailGQL, factory: PhenotypeDetailGQL.ɵfac, providedIn: 'root' });
    return PhenotypeDetailGQL;
})();
const SourceDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${SourceDetailFieldsFragmentDoc}`;
let SourceDetailGQL = /*@__PURE__*/ (() => {
    class SourceDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = SourceDetailDocument;
        }
    }
    SourceDetailGQL.ɵfac = function SourceDetailGQL_Factory(t) { return new (t || SourceDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SourceDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SourceDetailGQL, factory: SourceDetailGQL.ɵfac, providedIn: 'root' });
    return SourceDetailGQL;
})();
const SourceSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${SourceSummaryFieldsFragmentDoc}`;
let SourceSummaryGQL = /*@__PURE__*/ (() => {
    class SourceSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = SourceSummaryDocument;
        }
    }
    SourceSummaryGQL.ɵfac = function SourceSummaryGQL_Factory(t) { return new (t || SourceSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SourceSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SourceSummaryGQL, factory: SourceSummaryGQL.ɵfac, providedIn: 'root' });
    return SourceSummaryGQL;
})();
const UserDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${UserDetailFieldsFragmentDoc}`;
let UserDetailGQL = /*@__PURE__*/ (() => {
    class UserDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = UserDetailDocument;
        }
    }
    UserDetailGQL.ɵfac = function UserDetailGQL_Factory(t) { return new (t || UserDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UserDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserDetailGQL, factory: UserDetailGQL.ɵfac, providedIn: 'root' });
    return UserDetailGQL;
})();
const UserNotificationsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query UserNotifications($first: Int, $last: Int, $before: String, $after: String, $notificationReason: NotificationReason, $subscriptionId: Int, $originatingObject: SubscribableInput, $eventType: EventAction, $originatingUserId: Int, $organizationId: Int, $includeRead: Boolean) {
  notifications(
    first: $first
    last: $last
    before: $before
    after: $after
    notificationReason: $notificationReason
    subscriptionId: $subscriptionId
    originatingObject: $originatingObject
    eventType: $eventType
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    includeRead: $includeRead
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    notificationSubjects {
      ...notificationFeedSubjects
    }
    originatingUsers {
      ...notificationOriginatingUsers
    }
    organizations {
      ...notificationOrganization
    }
    eventTypes
    edges {
      node {
        ...notificationNode
      }
    }
  }
}
    ${NotificationFeedSubjectsFragmentDoc}
${NotificationOriginatingUsersFragmentDoc}
${NotificationOrganizationFragmentDoc}
${NotificationNodeFragmentDoc}`;
let UserNotificationsGQL = /*@__PURE__*/ (() => {
    class UserNotificationsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = UserNotificationsDocument;
        }
    }
    UserNotificationsGQL.ɵfac = function UserNotificationsGQL_Factory(t) { return new (t || UserNotificationsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UserNotificationsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserNotificationsGQL, factory: UserNotificationsGQL.ɵfac, providedIn: 'root' });
    return UserNotificationsGQL;
})();
const UpdateNotificationStatusDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${NotificationNodeFragmentDoc}`;
let UpdateNotificationStatusGQL = /*@__PURE__*/ (() => {
    class UpdateNotificationStatusGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = UpdateNotificationStatusDocument;
        }
    }
    UpdateNotificationStatusGQL.ɵfac = function UpdateNotificationStatusGQL_Factory(t) { return new (t || UpdateNotificationStatusGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UpdateNotificationStatusGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateNotificationStatusGQL, factory: UpdateNotificationStatusGQL.ɵfac, providedIn: 'root' });
    return UpdateNotificationStatusGQL;
})();
const UnsubscribeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${SubscribableFragmentDoc}`;
let UnsubscribeGQL = /*@__PURE__*/ (() => {
    class UnsubscribeGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = UnsubscribeDocument;
        }
    }
    UnsubscribeGQL.ɵfac = function UnsubscribeGQL_Factory(t) { return new (t || UnsubscribeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    UnsubscribeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsubscribeGQL, factory: UnsubscribeGQL.ɵfac, providedIn: 'root' });
    return UnsubscribeGQL;
})();
const SubscribeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;
let SubscribeGQL = /*@__PURE__*/ (() => {
    class SubscribeGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"] {
        constructor(apollo) {
            super(apollo);
            this.document = SubscribeDocument;
        }
    }
    SubscribeGQL.ɵfac = function SubscribeGQL_Factory(t) { return new (t || SubscribeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    SubscribeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscribeGQL, factory: SubscribeGQL.ɵfac, providedIn: 'root' });
    return SubscribeGQL;
})();
const VariantGroupDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${VariantGroupDetailFieldsFragmentDoc}`;
let VariantGroupDetailGQL = /*@__PURE__*/ (() => {
    class VariantGroupDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantGroupDetailDocument;
        }
    }
    VariantGroupDetailGQL.ɵfac = function VariantGroupDetailGQL_Factory(t) { return new (t || VariantGroupDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantGroupDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantGroupDetailGQL, factory: VariantGroupDetailGQL.ɵfac, providedIn: 'root' });
    return VariantGroupDetailGQL;
})();
const VariantGroupRevisionsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantGroupRevisions($variantGroupId: Int!, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int) {
  variantGroup(id: $variantGroupId) {
    id
    revisions(
      first: $first
      last: $last
      before: $before
      after: $after
      fieldName: $fieldName
      originatingUserId: $originatingUserId
    ) {
      totalCount
      uniqueRevisors {
        username
        id
        profileImagePath(size: 32)
      }
      revisedFieldNames {
        name
        displayName
      }
      edges {
        node {
          id
          revisionsetId
          createdAt
          fieldName
          currentValue
          suggestedValue
          linkoutData {
            name
            diffValue {
              ... on ObjectFieldDiff {
                addedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                removedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                keptObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
              }
              ... on ScalarFieldDiff {
                left
                right
              }
            }
          }
          revisor {
            id
            name
          }
          status
        }
      }
    }
  }
}
    `;
let VariantGroupRevisionsGQL = /*@__PURE__*/ (() => {
    class VariantGroupRevisionsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantGroupRevisionsDocument;
        }
    }
    VariantGroupRevisionsGQL.ɵfac = function VariantGroupRevisionsGQL_Factory(t) { return new (t || VariantGroupRevisionsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantGroupRevisionsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantGroupRevisionsGQL, factory: VariantGroupRevisionsGQL.ɵfac, providedIn: 'root' });
    return VariantGroupRevisionsGQL;
})();
const VariantGroupsSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${VariantGroupSummaryFieldsFragmentDoc}`;
let VariantGroupsSummaryGQL = /*@__PURE__*/ (() => {
    class VariantGroupsSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantGroupsSummaryDocument;
        }
    }
    VariantGroupsSummaryGQL.ɵfac = function VariantGroupsSummaryGQL_Factory(t) { return new (t || VariantGroupsSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantGroupsSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantGroupsSummaryGQL, factory: VariantGroupsSummaryGQL.ɵfac, providedIn: 'root' });
    return VariantGroupsSummaryGQL;
})();
const VariantTypeDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
  }
}
    `;
let VariantTypeDetailGQL = /*@__PURE__*/ (() => {
    class VariantTypeDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantTypeDetailDocument;
        }
    }
    VariantTypeDetailGQL.ɵfac = function VariantTypeDetailGQL_Factory(t) { return new (t || VariantTypeDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantTypeDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantTypeDetailGQL, factory: VariantTypeDetailGQL.ɵfac, providedIn: 'root' });
    return VariantTypeDetailGQL;
})();
const VariantDetailDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${VariantDetailFieldsFragmentDoc}`;
let VariantDetailGQL = /*@__PURE__*/ (() => {
    class VariantDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantDetailDocument;
        }
    }
    VariantDetailGQL.ɵfac = function VariantDetailGQL_Factory(t) { return new (t || VariantDetailGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantDetailGQL, factory: VariantDetailGQL.ɵfac, providedIn: 'root' });
    return VariantDetailGQL;
})();
const VariantSummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${VariantSummaryFieldsFragmentDoc}`;
let VariantSummaryGQL = /*@__PURE__*/ (() => {
    class VariantSummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"] {
        constructor(apollo) {
            super(apollo);
            this.document = VariantSummaryDocument;
        }
    }
    VariantSummaryGQL.ɵfac = function VariantSummaryGQL_Factory(t) { return new (t || VariantSummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
    VariantSummaryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariantSummaryGQL, factory: VariantSummaryGQL.ɵfac, providedIn: 'root' });
    return VariantSummaryGQL;
})();


/***/ }),

/***/ "lnp5":
/*!********************************************************!*\
  !*** ./src/app/core/services/viewer/viewer.service.ts ***!
  \********************************************************/
/*! exports provided: InitialViewer, ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialViewer", function() { return InitialViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const InitialViewer = {
    mostRecentOrg: undefined,
    signedIn: false,
    isAdmin: false,
    isEditor: false,
    isCurator: false,
    canCurate: false,
    canModerate: false
};
let ViewerService = /*@__PURE__*/ (() => {
    class ViewerService {
        constructor(viewerBaseGQL, http) {
            this.viewerBaseGQL = viewerBaseGQL;
            this.http = http;
            this.queryRef = this.viewerBaseGQL.watch();
            this.data$ = this.queryRef.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((r) => {
                return {
                    data: r.data,
                    loading: r.loading,
                    networkStatus: r.networkStatus
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
            this.isLoading$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
            this.viewer$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'viewer'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((v) => {
                return Object.assign(Object.assign({}, v), { signedIn: v === null ? false : true, signedOut: v === null ? true : false, canCurate: canCurate(v), canModerate: canModerate(v), isAdmin: isAdmin(v), isEditor: isEditor(v), isCurator: isCurator(v), organizations: v === null ? [] : v.organizations, mostRecentOrg: v === null ? undefined : mostRecentOrg(v) });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
            this.signedIn$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => v.signedIn));
            this.signedOut$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => v.signedOut));
            this.isAdmin$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => isAdmin(v)));
            this.isEditor$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => isEditor(v)));
            this.isCurator$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => isCurator(v)));
            this.canCurate$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => canCurate(v)));
            this.canModerate$ = this.viewer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => canModerate(v)));
            function isAdmin(v) {
                return (v && (v.role === 'admin')) ? true : false;
            }
            function isEditor(v) {
                return (v && (v.role === 'editor')) ? true : false;
            }
            function isCurator(v) {
                return (v && (v.role === 'curator')) ? true : false;
            }
            function canCurate(v) {
                return (v && (v.role === 'curator' || v.role === 'editor' || v.role === 'admin')) ? true : false;
            }
            function canModerate(v) {
                return (v && (v.role === 'editor' || v.role === 'admin')) ? true : false;
            }
            function mostRecentOrg(v) {
                var _a, _b, _c;
                return (_c = (_b = (_a = v.events) === null || _a === void 0 ? void 0 : _a.nodes) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.organization;
            }
        }
        // GET /sign_out with HttpClient, then refetch Viewer
        signOut() {
            this.http.get('/api/sign_out')
                .subscribe(d => {
                this.refetch();
            });
        }
        refetch() {
            this.queryRef.refetch();
        }
        ngOnDestroy() {
        }
    }
    ViewerService.ɵfac = function ViewerService_Factory(t) { return new (t || ViewerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["ViewerBaseGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    ViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ViewerService, factory: ViewerService.ɵfac, providedIn: 'root' });
    return ViewerService;
})();


/***/ }),

/***/ "qAZ0":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js ***!
  \********************************************************************************/
/*! exports provided: NzSpinComponent, NzSpinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpinComponent", function() { return NzSpinComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpinModule", function() { return NzSpinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");













function NzSpinComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzSpinComponent_div_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.nzTip);
    }
}
function NzSpinComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-spin-rtl", ctx_r2.dir === "rtl")("ant-spin-spinning", ctx_r2.isLoading)("ant-spin-lg", ctx_r2.nzSize === "large")("ant-spin-sm", ctx_r2.nzSize === "small")("ant-spin-show-text", ctx_r2.nzTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzIndicator || _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.nzTip);
    }
}
function NzSpinComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-spin-blur", ctx_r3.isLoading);
    }
}
const _c0 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'spin';
let NzSpinComponent = /*@__PURE__*/ (() => {
    class NzSpinComponent {
        constructor(nzConfigService, cdr, directionality) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzIndicator = null;
            this.nzSize = 'default';
            this.nzTip = null;
            this.nzDelay = 0;
            this.nzSimple = false;
            this.nzSpinning = true;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.spinning$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.nzSpinning);
            this.delay$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
            this.isLoading = false;
            this.dir = 'ltr';
        }
        ngOnInit() {
            var _a;
            const loading$ = this.delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.nzDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(delay => {
                if (delay === 0) {
                    return this.spinning$;
                }
                return this.spinning$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounce"])(spinning => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(spinning ? delay : 0)));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$));
            loading$.subscribe(loading => {
                this.isLoading = loading;
                this.cdr.markForCheck();
            });
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
        ngOnChanges(changes) {
            const { nzSpinning, nzDelay } = changes;
            if (nzSpinning) {
                this.spinning$.next(this.nzSpinning);
            }
            if (nzDelay) {
                this.delay$.next(this.nzDelay);
            }
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) { return new (t || NzSpinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzSpinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzSpinComponent, selectors: [["nz-spin"]], hostVars: 2, hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-spin-nested-loading", !ctx.nzSimple);
            }
        }, inputs: { nzIndicator: "nzIndicator", nzSize: "nzSize", nzTip: "nzTip", nzDelay: "nzDelay", nzSimple: "nzSimple", nzSpinning: "nzSpinning" }, exportAs: ["nzSpin"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["defaultTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]], template: function NzSpinComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzSpinComponent_div_2_Template, 4, 12, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzSpinComponent_div_3_Template, 2, 2, "div", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzSimple);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]], encapsulation: 2 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
})();
let NzSpinModule = /*@__PURE__*/ (() => {
    class NzSpinModule {
    }
    NzSpinModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzSpinModule });
    NzSpinModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzSpinModule_Factory(t) { return new (t || NzSpinModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]] });
    return NzSpinModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzSpinModule, { declarations: function () { return [NzSpinComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]; }, exports: function () { return [NzSpinComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-spin.js.map


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_layout_quicksearch_quicksearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/quicksearch/quicksearch-component */ "Kg4J");
/* harmony import */ var _components_layout_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/login-button/login-button.component */ "fx0T");
/* harmony import */ var _components_layout_viewer_button_viewer_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/viewer-button/viewer-button.component */ "6eh3");












function LayoutComponent_img_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
    }
}
function LayoutComponent_img_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 63);
    }
}
function LayoutComponent_cvc_login_button_131_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-login-button");
    }
}
function LayoutComponent_cvc_viewer_button_133_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-viewer-button");
    }
}
const _c0 = function (a0) { return { "is-collapsed": a0 }; };
let LayoutComponent = /*@__PURE__*/ (() => {
    class LayoutComponent {
        constructor(viewerService) {
            this.viewerService = viewerService;
            this.isCollapsed = false;
        }
        ngOnInit() {
            this.data$ = this.viewerService.data$;
            this.viewer$ = this.viewerService.viewer$;
            this.signedIn$ = this.viewerService.signedIn$;
            this.signedOut$ = this.viewerService.signedOut$;
            this.canCurate$ = this.viewerService.canCurate$;
            this.canModerate$ = this.viewerService.canModerate$;
        }
    }
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_1__["ViewerService"])); };
    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["cvc-layout"]], decls: 137, vars: 44, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzBreakpoint", "md", 1, "app-sider", 3, "nzWidth", "nzCollapsedWidth", "nzCollapsed", "nzTrigger", "nzCollapsedChange"], ["routerLink", "/"], [1, "sidebar-logo", 3, "ngClass"], ["src", "assets/images/civic-logo_sidebar-expanded.png", "alt", "CIViC - Clinical Interpretations of Variants in Cancer", 4, "ngIf"], ["src", "assets/images/civic-logo_sidebar-collapsed.png", "alt", "CIViC - Clinical Interpretations of Variants in Cancer", 4, "ngIf"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 1, "menu-group", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzSelected", "", "nzMatchRouter", "", 3, "nzTooltipTitle"], ["nz-icon", "", "nzType", "civic-assertion"], ["routerLink", "/assertions"], ["nz-icon", "", "nzType", "civic-evidence"], ["routerLink", "/evidence"], ["nz-icon", "", "nzType", "civic-gene"], ["routerLink", "/genes"], ["nz-icon", "", "nzType", "civic-variant"], ["routerLink", "/variants"], ["nz-icon", "", "nzType", "civic-variantgroup"], ["routerLink", "/variant-groups"], ["nz-icon", "", "nzType", "audit"], ["routerLink", "/clinical-trials"], ["nz-icon", "", "nzType", "civic-disease"], ["routerLink", "/diseases"], ["nz-icon", "", "nzType", "civic-intervention"], ["routerLink", "/drugs"], ["nz-icon", "", "nzType", "civic-phenotype"], ["routerLink", "/phenotypes"], ["nz-icon", "", "nzType", "civic-source"], ["routerLink", "/sources"], ["nz-icon", "", "nzType", "file-add"], ["routerLink", "/source-suggestions"], ["nz-icon", "", "nzType", "civic-varianttype"], ["routerLink", "/variant-types"], ["nz-icon", "", "nzType", "civic-revision"], ["routerLink", "/revisions"], ["nz-icon", "", "nzType", "civic-comment"], ["routerLink", "/comments"], ["nz-icon", "", "nzType", "civic-flag"], ["routerLink", "/flags"], ["nz-icon", "", "nzType", "global"], ["routerLink", "/community", "id", "main-community"], ["nz-icon", "", "nzType", "civic-curator"], ["routerLink", "/users", "id", "main-users"], ["nz-icon", "", "nzType", "civic-organization"], ["routerLink", "/organizations", "id", "main-organization"], ["nz-icon", "", "nzType", "download"], ["routerLink", "/releases", "id", "releases"], ["nz-icon", "", "nzType", "bar-chart"], ["routerLink", "/statistics", "id", "statistics"], [1, "right-layout", 3, "ngClass"], ["nz-row", ""], ["nz-col", "", "nzFlex", "40px"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], ["nz-col", "", "nzFlex", "300px", "id", "header-search"], ["nz-col", "", "nzFlex", "300px", "id", "header-menu"], ["nz-menu", "", "nzMode", "horizontal", "nzTheme", "dark"], ["nz-menu-item", "", "nzSelected", "", "nzMatchRouter", ""], ["routerLink", "/pages/about"], ["routerLink", "/pages/help"], ["routerLink", "/pages/contact"], ["nz-col", "", "nzFlex", "auto", "id", "header-viewer"], [4, "ngIf"], ["src", "assets/images/civic-logo_sidebar-expanded.png", "alt", "CIViC - Clinical Interpretations of Variants in Cancer"], ["src", "assets/images/civic-logo_sidebar-collapsed.png", "alt", "CIViC - Clinical Interpretations of Variants in Cancer"]], template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function LayoutComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.isCollapsed = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LayoutComponent_img_4_Template, 1, 0, "img", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LayoutComponent_img_5_Template, 1, 0, "img", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Assertions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Evidence");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Genes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Variants");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Variant Groups");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Clinical Trials");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Diseases");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Drugs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phenotypes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sources");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Source Suggestions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Variant Types");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Revisions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Comments");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Flags");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Community");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Users");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Organizations");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Data Releases");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Statistics");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nz-layout", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "nz-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_span_click_115_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "cvc-quicksearch");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "About CIViC");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Help");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Contact");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, LayoutComponent_cvc_login_button_131_Template, 1, 0, "cvc-login-button", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](132, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, LayoutComponent_cvc_viewer_button_133_Template, 1, 0, "cvc-viewer-button", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](134, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "nz-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 170)("nzCollapsedWidth", 80)("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.isCollapsed));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Assertions" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Evidence" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Genes" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Variants" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Variant Groups" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Clinical Trials" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Diseases" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Drugs" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Phenotypes" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Sources" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Source Suggestions" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Variant Types" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Revisions" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Comments" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Flags" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Community" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Users" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Organizations" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Data Releases" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Statistics" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.isCollapsed));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](132, 36, ctx.signedOut$));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](134, 38, ctx.signedIn$));
            }
        }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzSiderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuItemDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzHeaderComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], _components_layout_quicksearch_quicksearch_component__WEBPACK_IMPORTED_MODULE_9__["CvcQuicksearchComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_layout_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_10__["CvcLoginButtonComponent"], _components_layout_viewer_button_viewer_button_component__WEBPACK_IMPORTED_MODULE_11__["CvcViewerButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\nnz-sider[_ngcontent-%COMP%] {\n  width: 170px;\n  overflow: auto;\n  height: 100%;\n  position: fixed;\n  left: 0;\n}\n.right-layout[_ngcontent-%COMP%] {\n  margin-left: 170px;\n  width: 100%;\n  position: relative;\n  transition: all 0.2s, padding 0s;\n  background-color: #001529;\n}\n.right-layout.is-collapsed[_ngcontent-%COMP%] {\n  margin-left: 80px;\n}\n.menu-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 133px;\n  height: auto;\n  margin: 12px 16px;\n  transition: all 0.2s;\n}\n.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: auto;\n  margin: 12px 20px;\n  transition: all 0.2s;\n}\n.ant-layout-header[_ngcontent-%COMP%] {\n  height: 64px;\n  line-height: 64px;\n  padding: 0;\n  position: fixed;\n  width: calc(100% - 170px);\n  z-index: 10;\n  color: #d6e4ff;\n}\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  cursor: pointer;\n  color: #d6e4ff;\n  padding: 1em 1em 1em 0;\n}\n#header-menu[_ngcontent-%COMP%] {\n  text-align: right;\n  height: 64px;\n}\n#header-search[_ngcontent-%COMP%] {\n  height: 64px;\n  padding-right: 16px;\n}\n#header-viewer[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 1em;\n}\n.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d6e4ff;\n}\nnz-content[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  overflow: initial;\n  position: relative;\n  z-index: 1;\n  background-color: #273340;\n  border-top: 1px solid #3e5166;\n  border-left: 1px solid #3e5166;\n  padding: 12px;\n  border-top-left-radius: 16px;\n}"] });
    return LayoutComponent;
})();


/***/ }),

/***/ "yW9e":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js ***!
  \**********************************************************************************/
/*! exports provided: NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzLayoutModule, NzSiderComponent, ɵNzSiderTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContentComponent", function() { return NzContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFooterComponent", function() { return NzFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHeaderComponent", function() { return NzHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzLayoutComponent", function() { return NzLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzLayoutModule", function() { return NzLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSiderComponent", function() { return NzSiderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSiderTriggerComponent", function() { return NzSiderTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["*"];
function NzSiderComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSiderComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.setCollapsed(!ctx_r1.nzCollapsed); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matchBreakPoint", ctx_r0.matchBreakPoint)("nzCollapsedWidth", ctx_r0.nzCollapsedWidth)("nzCollapsed", ctx_r0.nzCollapsed)("nzBreakpoint", ctx_r0.nzBreakpoint)("nzReverseArrow", ctx_r0.nzReverseArrow)("nzTrigger", ctx_r0.nzTrigger)("nzZeroTrigger", ctx_r0.nzZeroTrigger)("siderWidth", ctx_r0.widthSetting);
    }
}
const _c1 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzZeroTrigger || _r4);
    }
}
function NzSiderTriggerComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzTrigger || _r2);
    }
}
function NzSiderTriggerComponent_ng_template_2_i_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r8.nzCollapsed ? "right" : "left");
    }
}
function NzSiderTriggerComponent_ng_template_2_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r9.nzCollapsed ? "left" : "right");
    }
}
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_template_2_i_0_Template, 1, 1, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_template_2_i_1_Template, 1, 1, "i", 4);
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.nzReverseArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzReverseArrow);
    }
}
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
    }
}
let NzContentComponent = /*@__PURE__*/ (() => {
    class NzContentComponent {
        constructor(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
        }
    }
    NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    NzContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzContentComponent;
})();
let NzFooterComponent = /*@__PURE__*/ (() => {
    class NzFooterComponent {
        constructor(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
        }
    }
    NzFooterComponent.ɵfac = function NzFooterComponent_Factory(t) { return new (t || NzFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    NzFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzFooterComponent, selectors: [["nz-footer"]], exportAs: ["nzFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzFooterComponent;
})();
let NzHeaderComponent = /*@__PURE__*/ (() => {
    class NzHeaderComponent {
        constructor(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
        }
    }
    NzHeaderComponent.ɵfac = function NzHeaderComponent_Factory(t) { return new (t || NzHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    NzHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzHeaderComponent, selectors: [["nz-header"]], exportAs: ["nzHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzHeaderComponent;
})();
let NzSiderComponent = /*@__PURE__*/ (() => {
    class NzSiderComponent {
        constructor(platform, cdr, breakpointService, elementRef) {
            this.platform = platform;
            this.cdr = cdr;
            this.breakpointService = breakpointService;
            this.elementRef = elementRef;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.nzMenuDirective = null;
            this.nzCollapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nzWidth = 200;
            this.nzTheme = 'dark';
            this.nzCollapsedWidth = 80;
            this.nzBreakpoint = null;
            this.nzZeroTrigger = null;
            this.nzTrigger = undefined;
            this.nzReverseArrow = false;
            this.nzCollapsible = false;
            this.nzCollapsed = false;
            this.matchBreakPoint = false;
            this.flexSetting = null;
            this.widthSetting = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-layout-sider');
        }
        updateStyleMap() {
            this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["toCssPixel"])(this.nzWidth);
            this.flexSetting = `0 0 ${this.widthSetting}`;
            this.cdr.markForCheck();
        }
        updateMenuInlineCollapsed() {
            if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
                this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
            }
        }
        setCollapsed(collapsed) {
            if (collapsed !== this.nzCollapsed) {
                this.nzCollapsed = collapsed;
                this.nzCollapsedChange.emit(collapsed);
                this.updateMenuInlineCollapsed();
                this.updateStyleMap();
                this.cdr.markForCheck();
            }
        }
        ngOnInit() {
            this.updateStyleMap();
            if (this.platform.isBrowser) {
                this.breakpointService
                    .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["siderResponsiveMap"], true)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                    .subscribe(map => {
                    const breakpoint = this.nzBreakpoint;
                    if (breakpoint) {
                        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["inNextTick"])().subscribe(() => {
                            this.matchBreakPoint = !map[breakpoint];
                            this.setCollapsed(this.matchBreakPoint);
                            this.cdr.markForCheck();
                        });
                    }
                });
            }
        }
        ngOnChanges(changes) {
            const { nzCollapsed, nzCollapsedWidth, nzWidth } = changes;
            if (nzCollapsed || nzCollapsedWidth || nzWidth) {
                this.updateStyleMap();
            }
            if (nzCollapsed) {
                this.updateMenuInlineCollapsed();
            }
        }
        ngAfterContentInit() {
            this.updateMenuInlineCollapsed();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzBreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSiderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderComponent, selectors: [["nz-sider"]], contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzMenuDirective = _t.first);
            }
        }, hostVars: 16, hostBindings: function NzSiderComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed);
            }
        }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click", 4, "ngIf"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click"]], template: function NzSiderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderComponent_div_2_Template, 1, 8, "div", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzCollapsible && ctx.nzTrigger !== null);
            }
        }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], NzSiderTriggerComponent]; }, encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsed", void 0);
    return NzSiderComponent;
})();
let NzLayoutComponent = /*@__PURE__*/ (() => {
    class NzLayoutComponent {
        constructor(elementRef, directionality) {
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.dir = 'ltr';
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-layout');
        }
        ngOnInit() {
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
    NzLayoutComponent.ɵfac = function NzLayoutComponent_Factory(t) { return new (t || NzLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
    NzLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzLayoutComponent, selectors: [["nz-layout"]], contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSiderComponent, 0);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzSiderComponent = _t);
            }
        }, hostVars: 4, hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
            }
        }, exportAs: ["nzLayout"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return NzLayoutComponent;
})();
let NzSiderTriggerComponent = /*@__PURE__*/ (() => {
    class NzSiderTriggerComponent {
        constructor() {
            this.nzCollapsed = false;
            this.nzReverseArrow = false;
            this.nzZeroTrigger = null;
            this.nzTrigger = undefined;
            this.matchBreakPoint = false;
            this.nzCollapsedWidth = null;
            this.siderWidth = null;
            this.nzBreakpoint = null;
            this.isZeroTrigger = false;
            this.isNormalTrigger = false;
        }
        updateTriggerType() {
            this.isZeroTrigger = this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
            this.isNormalTrigger = this.nzCollapsedWidth !== 0;
        }
        ngOnInit() {
            this.updateTriggerType();
        }
        ngOnChanges() {
            this.updateTriggerType();
        }
    }
    NzSiderTriggerComponent.ɵfac = function NzSiderTriggerComponent_Factory(t) { return new (t || NzSiderTriggerComponent)(); };
    NzSiderTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderTriggerComponent, selectors: [["", "nz-sider-trigger", ""]], hostVars: 10, hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
            }
        }, inputs: { nzCollapsed: "nzCollapsed", nzReverseArrow: "nzReverseArrow", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", matchBreakPoint: "matchBreakPoint", nzCollapsedWidth: "nzCollapsedWidth", siderWidth: "siderWidth", nzBreakpoint: "nzBreakpoint" }, exportAs: ["nzSiderTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c1, decls: 6, vars: 2, consts: [[4, "ngIf"], ["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderTriggerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderTriggerComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZeroTrigger);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNormalTrigger);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
    return NzSiderTriggerComponent;
})();
let NzLayoutModule = /*@__PURE__*/ (() => {
    class NzLayoutModule {
    }
    NzLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzLayoutModule });
    NzLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzLayoutModule_Factory(t) { return new (t || NzLayoutModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"]]] });
    return NzLayoutModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzLayoutModule, { declarations: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"]]; }, exports: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]; } }); })();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-zorro-antd-layout.js.map


/***/ })

}]);