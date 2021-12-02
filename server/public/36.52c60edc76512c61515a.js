(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "/Z76":
/*!************************************************************************!*\
  !*** ./src/app/views/users/users-evidence/users-evidence.component.ts ***!
  \************************************************************************/
/*! exports provided: UsersEvidenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEvidenceComponent", function() { return UsersEvidenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function UsersEvidenceComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Evidence\n");
    }
}
let UsersEvidenceComponent = /*@__PURE__*/ (() => {
    class UsersEvidenceComponent {
        constructor(route) {
            this.route = route;
            this.userId = +this.route.snapshot.params['userId'];
        }
    }
    UsersEvidenceComponent.ɵfac = function UsersEvidenceComponent_Factory(t) { return new (t || UsersEvidenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    UsersEvidenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersEvidenceComponent, selectors: [["cvc-users-evidence"]], decls: 4, vars: 2, consts: [[3, "cvcTitle"], [3, "userId"], ["evidenceCardTitle", ""], ["nz-icon", "", "nzType", "civic:evidence"]], template: function UsersEvidenceComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-evidence-table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersEvidenceComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx.userId);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcEvidenceTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return UsersEvidenceComponent;
})();


/***/ }),

/***/ "DGRq":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/participant-list/participant-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CvcParticipantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcParticipantListComponent", function() { return CvcParticipantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");









const _c0 = ["itemTemplate"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template_nz_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onParticipantSelected(u_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-participant", u_r4.id == (ctx_r6.selectedItem == null ? null : ctx_r6.selectedItem.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.itemTemplateRef || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, u_r4));
    }
}
function CvcParticipantListComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcParticipantListComponent_ng_container_0_ng_container_3_nz_list_item_1_Template, 2, 6, "nz-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.index;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 + 1 <= ctx_r1.defaultListSize);
    }
}
function CvcParticipantListComponent_ng_container_0_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onExpandClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Expand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcParticipantListComponent_ng_container_0_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvcParticipantListComponent_ng_container_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onCollapseClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Collapse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CvcParticipantListComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcParticipantListComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcParticipantListComponent_ng_container_0_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvcParticipantListComponent_ng_container_0_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx_r0.listTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.participantList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.participantList.length > ctx_r0.defaultListSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isExpanded);
    }
}
let CvcParticipantListComponent = /*@__PURE__*/ (() => {
    class CvcParticipantListComponent {
        constructor() {
            this.defaultListSize = 5;
            this.participantSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.isExpanded = false;
        }
        ngOnInit() {
            if (this.preselectedOption) {
                this.selectedItem = this.preselectedOption;
            }
        }
        onParticipantSelected(u) {
            var _a;
            if (u.id == ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
                this.selectedItem = undefined;
            }
            else {
                this.selectedItem = u;
            }
            this.participantSelectedEvent.emit(this.selectedItem);
        }
        onExpandClicked() {
            this.originalDefaultListSize = this.defaultListSize;
            this.defaultListSize = this.participantList.length;
            this.isExpanded = true;
        }
        onCollapseClicked() {
            if (this.originalDefaultListSize) {
                this.defaultListSize = this.originalDefaultListSize;
                this.isExpanded = false;
            }
        }
    }
    CvcParticipantListComponent.ɵfac = function CvcParticipantListComponent_Factory(t) { return new (t || CvcParticipantListComponent)(); };
    CvcParticipantListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcParticipantListComponent, selectors: [["cvc-participant-list"]], contentQueries: function CvcParticipantListComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplateRef = _t.first);
            }
        }, inputs: { participantList: "participantList", listTitle: "listTitle", defaultListSize: "defaultListSize", preselectedOption: "preselectedOption" }, outputs: { participantSelectedEvent: "participantSelectedEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-type", "inner", 2, "margin-bottom", "1em", 3, "nzTitle"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click", 4, "ngIf"], ["nzSize", "small", "class", "participant-list-item", 3, "selected-participant", "click", 4, "ngIf"], ["nzSize", "small", 1, "participant-list-item", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click"], ["nz-icon", "", "nzType", "vertical-align-bottom"], ["nz-icon", "", "nzType", "vertical-align-top"]], template: function CvcParticipantListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcParticipantListComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.participantList && ctx.participantList.length > 0);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: [".participant-list-item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #40a9ff;\n  cursor: pointer;\n}\n.participant-list-item[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin: 2px;\n}\n.selected-participant[_ngcontent-%COMP%] {\n  background: #40a9ff;\n  color: #fff;\n}"] });
    return CvcParticipantListComponent;
})();


/***/ }),

/***/ "DLNn":
/*!**********************************************************************************!*\
  !*** ./src/app/views/users/users-notifications/users-notifications.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UsersNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersNotificationsComponent", function() { return UsersNotificationsComponent; });
/* harmony import */ var _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/utilities/mutation-state-wrapper */ "ip/c");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/network-errors.service */ "CVmQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _components_shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/shared/participant-list/participant-list.component */ "DGRq");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var _components_events_event_timeline_item_event_timeline_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/events/event-timeline-item/event-timeline-item.component */ "itd6");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/pipes/event-verbiage-pipe */ "3mrq");
/* harmony import */ var _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/pipes/icon-name-for-subscribable-entity */ "lpb+");























function UsersNotificationsComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const reason_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", reason_r16.iconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", reason_r16.displayName, " ");
    }
}
function UsersNotificationsComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "eventVerbiage");
    }
    if (rf & 2) {
        const action_r17 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, action_r17.id, "action-filter"), " ");
    }
}
function UsersNotificationsComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "iconNameForSubscribableEntity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const subject_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, subject_r18.subjectWithCount.subject.__typename));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", subject_r18.subjectWithCount.subject.name, " (", subject_r18.subjectWithCount.occuranceCount, ") ");
    }
}
function UsersNotificationsComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r19 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r19.displayName, " ");
    }
}
function UsersNotificationsComponent_ng_container_0_ng_template_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organization_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", organization_r20.name, " ");
    }
}
function UsersNotificationsComponent_ng_container_0_ng_template_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_ng_template_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.bulkMarkRead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Mark as read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_ng_template_32_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.bulkMarkUnread(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Mark as unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_ng_template_32_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.bulkUnsubscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Unsubscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Check all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersNotificationsComponent_ng_container_0_ng_template_32_Template_label_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.allChecked = $event; })("nzCheckedChange", function UsersNotificationsComponent_ng_container_0_ng_template_32_Template_label_nzCheckedChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.onCheckAllCheckBoxClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r13.bulkMarkEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r13.bulkMarkEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r13.bulkMarkEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.allChecked)("nzIndeterminate", ctx_r13.someChecked);
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 31);
    }
    if (rf & 2) {
        const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", item_r28.key.type === "SUBSCRIPTION" ? "book" : "notification")("nzTheme", item_r28.key.seen ? "outline" : "twotone");
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r38.markAsUnread(item_r28.key.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r41.markAsRead(item_r28.key.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r44.unsubscribe(item_r28.key.subscription.subscribable.id, item_r28.key.subscription.subscribable.__typename); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("nzTooltipTitle", "You received this notification because you are subscribed to ", item_r28.key.subscription.subscribable.name, ". Click to unsubscribe.");
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-timeline-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_2_Template, 1, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "cvc-event-timeline-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-col", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_9_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-col", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_container_12_Template, 3, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_ng_template_13_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_Template_label_ngModelChange_15_listener($event) { const item_r28 = ctx.$implicit; return item_r28.value.checked = $event; })("nzCheckedChange", function UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_Template_label_nzCheckedChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const item_r28 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r49.onNotificationCheckBoxClicked(item_r28.key.id, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const item_r28 = ctx.$implicit;
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDot", _r29)("nzColor", item_r28.key.seen ? "gray" : "blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("event", item_r28.key.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.key.seen)("ngIfElse", _r32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.key.subscription)("ngIfElse", _r35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.value.checked);
    }
}
function UsersNotificationsComponent_ng_container_0_nz_timeline_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UsersNotificationsComponent_ng_container_0_nz_timeline_36_ng_container_1_Template, 16, 8, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const notifications_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, notifications_r1));
    }
}
function UsersNotificationsComponent_ng_container_0_ng_container_37_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_ng_container_37_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const pageInfo_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r54.fetchMore(pageInfo_r52.endCursor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Load More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function UsersNotificationsComponent_ng_container_0_ng_container_37_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UsersNotificationsComponent_ng_container_0_ng_container_37_div_1_Template, 3, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pageInfo_r52 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pageInfo_r52.hasNextPage);
    }
}
function UsersNotificationsComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-button-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r57.setIncludeRead(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersNotificationsComponent_ng_container_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r59.setIncludeRead(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "cvc-participant-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("participantSelectedEvent", function UsersNotificationsComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r60.onNotificationReasonSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UsersNotificationsComponent_ng_container_0_ng_template_12_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "cvc-participant-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("participantSelectedEvent", function UsersNotificationsComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r61.onActionSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UsersNotificationsComponent_ng_container_0_ng_template_16_Template, 2, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "cvc-participant-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("participantSelectedEvent", function UsersNotificationsComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r62.onNotificationSubjectSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, UsersNotificationsComponent_ng_container_0_ng_template_20_Template, 4, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "cvc-participant-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("participantSelectedEvent", function UsersNotificationsComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.onOriginatingUserSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, UsersNotificationsComponent_ng_container_0_ng_template_24_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "cvc-participant-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("participantSelectedEvent", function UsersNotificationsComponent_ng_container_0_Template_cvc_participant_list_participantSelectedEvent_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r64.onOrganizationSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UsersNotificationsComponent_ng_container_0_ng_template_28_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "nz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, UsersNotificationsComponent_ng_container_0_ng_template_32_Template, 11, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "nz-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, UsersNotificationsComponent_ng_container_0_nz_timeline_36_Template, 3, 3, "nz-timeline", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, UsersNotificationsComponent_ng_container_0_ng_container_37_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const notifications_r1 = ctx.ngIf;
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r0.includeReadInput ? "default" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r0.includeReadInput ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("participantList", ctx_r0.notificationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 12, ctx_r0.actions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 14, ctx_r0.notificationSubjects$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 16, ctx_r0.originatingUsers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("participantList", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 18, ctx_r0.organizations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzExtra", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notifications_r1.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 20, ctx_r0.pageInfo$));
    }
}
let UsersNotificationsComponent = /*@__PURE__*/ (() => {
    class UsersNotificationsComponent {
        constructor(route, gql, networkErrorService, updateNotificationStatusMuation, unsubscribeMutation) {
            this.route = route;
            this.gql = gql;
            this.networkErrorService = networkErrorService;
            this.updateNotificationStatusMuation = updateNotificationStatusMuation;
            this.unsubscribeMutation = unsubscribeMutation;
            this.notificationState = new Map();
            this.includeReadInput = false;
            this.bulkMarkEnabled = false;
            this.allChecked = false;
            this.someChecked = false;
            this.notificationTypes = [
                { id: 1, type: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["NotificationReason"].Mention, iconName: 'notification', displayName: 'Mentioned' },
                { id: 2, type: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["NotificationReason"].Subscription, iconName: 'book', displayName: 'Subscribed' },
            ];
            this.userId = +this.route.snapshot.params['userId'];
            this.updateNotificationStatusMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
            this.unsubscribeMutator = new _app_core_utilities_mutation_state_wrapper__WEBPACK_IMPORTED_MODULE_0__["MutatorWithState"](networkErrorService);
        }
        ngOnInit() {
            this.initialQueryVars = {
                includeRead: this.includeReadInput
            };
            this.queryRef = this.gql.watch(this.initialQueryVars);
            this.results$ = this.queryRef.valueChanges;
            this.pageInfo$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => data.notifications.pageInfo));
            /*     this.notifications$ = this.results$.pipe(
                  map(({ data }) => {
                    return data.notifications.edges.map(e => {
                      if (e.node){
                        this.notificationState.set(e.node, {checked: false} )
                      }
                      return e.node
                    })
                  })
                ) */
            this.notificationStateObservable$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => {
                let checkedMap = new Map();
                data.notifications.edges.forEach(e => {
                    if (e.node) {
                        let initialChecked = { checked: false };
                        checkedMap.set(e.node, initialChecked);
                        this.notificationState.set(e.node, initialChecked);
                    }
                });
                return checkedMap;
            }));
            this.notificationSubjects$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => {
                return data.notifications.notificationSubjects.map((ns) => {
                    return { id: `${ns.subject.__typename}:${ns.subject.id}`, subjectWithCount: ns };
                });
            }));
            this.originatingUsers$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => {
                return data.notifications.originatingUsers;
            }));
            this.actions$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => data.notifications.eventTypes.map((et) => { return { id: et }; })));
            this.organizations$ = this.results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => {
                return data.notifications.organizations;
            }));
        }
        fetchMore(endCursor) {
            this.queryRef.fetchMore({
                variables: {
                    after: endCursor,
                }
            });
        }
        setIncludeRead(includeRead) {
            this.includeReadInput = includeRead;
            this.queryRef.refetch({
                includeRead: this.includeReadInput
            });
        }
        onNotificationReasonSelected(r) {
            this.queryRef.refetch({
                notificationReason: r ? r.type : undefined
            });
        }
        onNotificationSubjectSelected(s) {
            let orgObj = undefined;
            if (s !== undefined) {
                let entityType = s.subjectWithCount.subject.__typename;
                orgObj = {
                    id: s.subjectWithCount.subject.id,
                    entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribableEntities"][entityType]
                };
            }
            this.queryRef.refetch({
                originatingObject: orgObj
            });
        }
        onOriginatingUserSelected(s) {
            this.queryRef.refetch({
                originatingUserId: s === null || s === void 0 ? void 0 : s.id
            });
        }
        onActionSelected(a) {
            this.queryRef.refetch({
                eventType: a ? a.id : undefined
            });
        }
        onOrganizationSelected(s) {
            this.queryRef.refetch({
                organizationId: s === null || s === void 0 ? void 0 : s.id
            });
        }
        markAsRead(id) {
            this.updateNotificationStatusMutator.mutate(this.updateNotificationStatusMuation, {
                input: {
                    ids: [id],
                    newStatus: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["ReadStatus"].Read
                }
            });
        }
        markAsUnread(id) {
            this.updateNotificationStatusMutator.mutate(this.updateNotificationStatusMuation, {
                input: {
                    ids: [id],
                    newStatus: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["ReadStatus"].Unread
                }
            });
        }
        unsubscribe(id, typename) {
            let entityType = typename;
            this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
                input: {
                    subscribables: [{ id: id, entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribableEntities"][entityType] }]
                }
            });
        }
        onNotificationCheckBoxClicked(notificationId, newVal) {
            let key = Array.from(this.notificationState.keys()).find(e => e.id === notificationId);
            if (key) {
                let foo = this.notificationState.get(key);
                if (foo) {
                    foo.checked = newVal;
                }
            }
            if (newVal) {
                this.bulkMarkEnabled = true;
                if (Array.from(this.notificationState.values()).every(e => e.checked)) {
                    this.allChecked = true;
                    this.someChecked = false;
                }
                else {
                    this.someChecked = true;
                }
            }
            else {
                if (Array.from(this.notificationState.values()).some(e => e.checked)) {
                    this.bulkMarkEnabled = true;
                    this.allChecked = false;
                    if (Array.from(this.notificationState.values()).every(e => !e.checked)) {
                        this.someChecked = false;
                    }
                    else {
                        this.someChecked = true;
                    }
                }
                else {
                    this.bulkMarkEnabled = false;
                    this.allChecked = false;
                    this.someChecked = false;
                }
            }
        }
        onCheckAllCheckBoxClicked(newVal) {
            if (newVal) {
                this.checkAll();
            }
            else {
                this.uncheckAll();
            }
        }
        getCheckedIds() {
            let ids = [];
            this.notificationState.forEach((checked, notification) => {
                if (checked.checked) {
                    ids.push(notification.id);
                }
            });
            return ids;
        }
        checkAll() {
            this.queryRef.refetch().then(() => {
                this.notificationState.forEach((checkedState, _) => {
                    checkedState.checked = true;
                });
            });
            this.allChecked = true;
            this.someChecked = false;
            this.bulkMarkEnabled = true;
        }
        uncheckAll() {
            this.queryRef.refetch().then(() => {
                this.notificationState.forEach((checkedState, _) => {
                    checkedState.checked = false;
                });
            });
            this.allChecked = false;
            this.someChecked = false;
            this.bulkMarkEnabled = false;
        }
        bulkMarkRead() {
            this.updateNotificationStatusMutator.mutate(this.updateNotificationStatusMuation, {
                input: {
                    ids: this.getCheckedIds(),
                    newStatus: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["ReadStatus"].Read
                }
            });
            this.uncheckAll();
        }
        bulkMarkUnread() {
            this.updateNotificationStatusMutator.mutate(this.updateNotificationStatusMuation, {
                input: {
                    ids: this.getCheckedIds(),
                    newStatus: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["ReadStatus"].Unread
                }
            });
            this.uncheckAll();
        }
        bulkUnsubscribe() {
            let subscribables = [];
            this.notificationState.forEach((checked, notification) => {
                if (checked.checked && notification.subscription) {
                    let entityType = notification.subscription.subscribable.__typename;
                    subscribables.push({
                        id: notification.subscription.subscribable.id,
                        entityType: _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["SubscribableEntities"][entityType]
                    });
                }
            });
            this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
                input: { subscribables: subscribables }
            }).submitSuccess$.subscribe((res) => {
                if (res) {
                    this.queryRef.refetch();
                }
            });
            this.uncheckAll();
        }
    }
    UsersNotificationsComponent.ɵfac = function UsersNotificationsComponent_Factory(t) { return new (t || UsersNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["UserNotificationsGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_network_errors_service__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["UpdateNotificationStatusGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_1__["UnsubscribeGQL"])); };
    UsersNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UsersNotificationsComponent, selectors: [["cvc-users-notifications"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "nzGutter"], ["nzSpan", "4"], ["nzSize", "small"], ["nz-button", "", "nzShape", "round", 3, "nzType", "click"], ["nzSpan", "24"], ["listTitle", "Notification Reason", 3, "participantList", "participantSelectedEvent"], ["itemTemplate", ""], ["listTitle", "Action", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Subject", 3, "participantList", "participantSelectedEvent"], ["listTitle", "User", 3, "participantList", "participantSelectedEvent"], ["listTitle", "Organization", 3, "participantList", "participantSelectedEvent"], ["nzSpan", "20"], ["nzTitle", "Notifications", "id", "card-content", 3, "nzExtra"], ["bulkOperations", ""], ["nzSpan", "24", 1, "timeline"], ["nz-icon", "", 3, "nzType"], ["nz-button", "", "nzSize", "small", 3, "disabled", "click"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "bell"], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange", "nzCheckedChange"], [4, "ngFor", "ngForOf"], [3, "nzDot", "nzColor"], ["timelineDotTemplate", ""], ["nzFlex", "auto"], [3, "event"], ["nzFlex", "50px"], [4, "ngIf", "ngIfElse"], ["unread", ""], ["noSubscriptionButton", ""], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", "nzCheckedChange"], ["nz-icon", "", 1, "item-icon", 3, "nzType", "nzTheme"], ["nz-tooltip", "", "nzTooltipTitle", "Mark as unread.", "nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], ["nz-icon", "", "nzType", "undo"], ["nz-tooltip", "", "nzTooltipTitle", "Mark as read.", "nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], ["nz-tooltip", "", "nz-button", "", "nzType", "default", "nzShape", "circle", 3, "nzTooltipTitle", "click"], ["nz-tooltip", "", "nzTooltipTitle", "You are no longer subscribed to the entity that triggered this notification.", "nz-button", "", "nzType", "default", "nzShape", "circle", "disabled", ""], ["nz-list-load-more", "", 4, "ngIf"], ["nz-list-load-more", ""], ["nz-button", "", "nzType", "default", "nzSize", "small", "nzBlock", "", 3, "click"]], template: function UsersNotificationsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UsersNotificationsComponent_ng_container_0_Template, 39, 22, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.notificationStateObservable$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], _components_shared_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__["CvcParticipantListComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__["NzTimelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__["NzTimelineItemComponent"], _components_events_event_timeline_item_event_timeline_item_component__WEBPACK_IMPORTED_MODULE_17__["CvcEventTimelineItemComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__["NzTooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ngrx_component__WEBPACK_IMPORTED_MODULE_19__["PushPipe"], _core_pipes_event_verbiage_pipe__WEBPACK_IMPORTED_MODULE_20__["EventVerbiagePipe"], _core_pipes_icon_name_for_subscribable_entity__WEBPACK_IMPORTED_MODULE_21__["IconNameForSubscribableEntity"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.timeline[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-left: 6px;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .timeline-item[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.read-notification[_ngcontent-%COMP%] {\n  background-color: gray;\n}\nnz-timeline[_ngcontent-%COMP%]     ul li:last-child {\n  padding-bottom: 0;\n}\nnz-timeline[_ngcontent-%COMP%]     ul li:last-child .ant-timeline-item-content {\n  min-height: 0;\n  padding-bottom: 8px;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.comment-title[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n.comment-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.comment-card[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return UsersNotificationsComponent;
})();


/***/ }),

/***/ "DeBq":
/*!*************************************************************!*\
  !*** ./src/app/views/users/users-home/users-home.module.ts ***!
  \*************************************************************/
/*! exports provided: UsersHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersHomeModule", function() { return UsersHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let UsersHomeModule = /*@__PURE__*/ (() => {
    class UsersHomeModule {
    }
    UsersHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersHomeModule });
    UsersHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function UsersHomeModule_Factory(t) { return new (t || UsersHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
            ]] });
    return UsersHomeModule;
})();


/***/ }),

/***/ "F2hy":
/*!********************************************************************************************!*\
  !*** ./src/app/views/users/users-source-suggestions/users-source-suggestions.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UsersSourceSuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSourceSuggestionsComponent", function() { return UsersSourceSuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/source-suggestions/source-suggestions-table/source-suggestions-table.component */ "Ogji");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function UsersSourceSuggestionsComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Source Suggestions\n");
    }
}
let UsersSourceSuggestionsComponent = /*@__PURE__*/ (() => {
    class UsersSourceSuggestionsComponent {
        constructor(route) {
            this.route = route;
            this.userId = +this.route.snapshot.params['userId'];
        }
    }
    UsersSourceSuggestionsComponent.ɵfac = function UsersSourceSuggestionsComponent_Factory(t) { return new (t || UsersSourceSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    UsersSourceSuggestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersSourceSuggestionsComponent, selectors: [["cvc-users-source-suggestions"]], decls: 4, vars: 2, consts: [[3, "cvcTitle"], [3, "submitterId"], ["sourceSuggestionCardTitle", ""], ["nz-icon", "", "nzType", "file-add"]], template: function UsersSourceSuggestionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-source-suggestions-table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersSourceSuggestionsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submitterId", ctx.userId);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcSourceSuggestionsTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return UsersSourceSuggestionsComponent;
})();


/***/ }),

/***/ "IH80":
/*!***********************************************************!*\
  !*** ./src/app/views/users/users-home/users-home.page.ts ***!
  \***********************************************************/
/*! exports provided: UsersHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersHomePage", function() { return UsersHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");




let UsersHomePage = /*@__PURE__*/ (() => {
    class UsersHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    UsersHomePage.ɵfac = function UsersHomePage_Factory(t) { return new (t || UsersHomePage)(); };
    UsersHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersHomePage, selectors: [["users-home"]], decls: 10, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:user"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function UsersHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CIViC Users ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Users table here.");
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
    return UsersHomePage;
})();


/***/ }),

/***/ "QSsw":
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-routing.module */ "VY+B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/icons-provider.module */ "Hhmg");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../evidence/evidence.module */ "DiSq");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/image */ "C/7j");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "OvZZ");
/* harmony import */ var _users_home_users_home_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./users-home/users-home.module */ "DeBq");
/* harmony import */ var _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/assertions/assertions-table/assertions-table.module */ "IpA2");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var _app_components_users_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/components/users/user-card/user-card.module */ "QFfB");
/* harmony import */ var _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/components/events/event-feed/event-feed.module */ "e5/R");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @app/components/shared/tab-navigation/tab-navigation.module */ "ol2S");
/* harmony import */ var _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module */ "b1zR");
/* harmony import */ var _app_components_events_event_timeline_item_event_timeline_item_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @app/components/events/event-timeline-item/event-timeline-item-module */ "q/Zg");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @app/components/genes/gene-tag/gene-tag.module */ "8h9q");
/* harmony import */ var _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @app/components/assertions/assertions-tag/assertions-tag.module */ "QL2/");
/* harmony import */ var _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @app/components/evidence/evidence-tag/evidence-tag.module */ "+xoZ");
/* harmony import */ var _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @app/components/variants/variant-tag/variant-tag.module */ "cNUt");
/* harmony import */ var _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @app/components/shared/participant-list/participant-list.module */ "VwQC");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/core */ "fXoL");





















































let UsersModule = /*@__PURE__*/ (() => {
    class UsersModule {
    }
    UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdefineNgModule"]({ type: UsersModule });
    UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_1__["UsersRoutingModule"],
                _users_home_users_home_module__WEBPACK_IMPORTED_MODULE_31__["UsersHomeModule"],
                _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__["CvcAssertionsTableModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_34__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_33__["CvcEntityTableCardModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_35__["CvcOrganizationTagModule"],
                _app_components_users_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_36__["CvcUserCardModule"],
                _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_37__["CvcEventFeedModule"],
                _app_icons_provider_module__WEBPACK_IMPORTED_MODULE_3__["IconsProviderModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"],
                ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"],
                ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__["NzCommentModule"],
                ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
                ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__["NzDescriptionsModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzGridModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__["NzPageHeaderModule"],
                ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_17__["NzPopoverModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__["NzSpaceModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__["NzSpinModule"],
                ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_18__["NzSkeletonModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTableModule"],
                ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__["NzTabsModule"],
                ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__["NzTagModule"],
                ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_25__["NzTypographyModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_49__["NzCheckboxModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_50__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_38__["CvcSectionNavigationModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__["NzSelectModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_28__["EvidenceModule"],
                ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__["NzImageModule"],
                ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_30__["NzStatisticModule"],
                _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_39__["CvcTabNavigationModule"],
                _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_40__["CvcSourceSuggestionsTableModule"],
                _app_components_events_event_timeline_item_event_timeline_item_module__WEBPACK_IMPORTED_MODULE_41__["CvcEventTimelineItemModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_42__["CvcPipesModule"],
                ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__["NzTimelineModule"],
                _app_components_genes_gene_tag_gene_tag_module__WEBPACK_IMPORTED_MODULE_44__["CvcGeneTagModule"],
                _app_components_assertions_assertions_tag_assertions_tag_module__WEBPACK_IMPORTED_MODULE_45__["CvcAssertionsTagModule"],
                _app_components_evidence_evidence_tag_evidence_tag_module__WEBPACK_IMPORTED_MODULE_46__["CvcEvidenceTagModule"],
                _app_components_variants_variant_tag_variant_tag_module__WEBPACK_IMPORTED_MODULE_47__["CvcVariantTagModule"],
                _app_components_shared_participant_list_participant_list_module__WEBPACK_IMPORTED_MODULE_48__["CvcParticipantListModule"]
            ]] });
    return UsersModule;
})();


/***/ }),

/***/ "VY+B":
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_assertions_users_assertions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-assertions/users-assertions.component */ "oTyK");
/* harmony import */ var _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-detail/users-detail.component */ "XIkG");
/* harmony import */ var _users_events_users_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-events/users-events.component */ "pjqq");
/* harmony import */ var _users_evidence_users_evidence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-evidence/users-evidence.component */ "/Z76");
/* harmony import */ var _users_home_users_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-home/users-home.page */ "IH80");
/* harmony import */ var _users_notifications_users_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-notifications/users-notifications.component */ "DLNn");
/* harmony import */ var _users_source_suggestions_users_source_suggestions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-source-suggestions/users-source-suggestions.component */ "F2hy");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.component */ "xSMm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _users_home_users_home_page__WEBPACK_IMPORTED_MODULE_5__["UsersHomePage"]
            },
            {
                path: ':userId',
                component: _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_2__["UsersDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME'
                },
                children: [
                    //  {path: '', redirectTo: 'badges', pathMatch: 'full'},
                    //  {
                    //    path: 'badges',
                    //    component: UsersBadgesComponent
                    //  },
                    {
                        path: 'evidence',
                        component: _users_evidence_users_evidence_component__WEBPACK_IMPORTED_MODULE_4__["UsersEvidenceComponent"],
                        data: {
                            breadcrumb: 'Evidence'
                        }
                    },
                    {
                        path: 'assertions',
                        component: _users_assertions_users_assertions_component__WEBPACK_IMPORTED_MODULE_1__["UsersAssertionsComponent"],
                        data: {
                            breadcrumb: 'Assertions'
                        }
                    },
                    {
                        path: 'activity',
                        component: _users_events_users_events_component__WEBPACK_IMPORTED_MODULE_3__["UsersEventsComponent"],
                        data: {
                            breadcrumb: 'Activity'
                        }
                    },
                    {
                        path: 'source-suggestions',
                        component: _users_source_suggestions_users_source_suggestions_component__WEBPACK_IMPORTED_MODULE_7__["UsersSourceSuggestionsComponent"],
                        data: {
                            breadcrumb: 'Source Suggestions'
                        }
                    },
                    {
                        path: 'notifications',
                        component: _users_notifications_users_notifications_component__WEBPACK_IMPORTED_MODULE_6__["UsersNotificationsComponent"],
                        data: {
                            breadcrumb: 'Notifications'
                        }
                    },
                ]
            }
        ]
    }
];
let UsersRoutingModule = /*@__PURE__*/ (() => {
    class UsersRoutingModule {
    }
    UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
    UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return UsersRoutingModule;
})();


/***/ }),

/***/ "VwQC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/participant-list/participant-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CvcParticipantListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcParticipantListModule", function() { return CvcParticipantListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CvcParticipantListModule = /*@__PURE__*/ (() => {
    class CvcParticipantListModule {
    }
    CvcParticipantListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CvcParticipantListModule });
    CvcParticipantListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CvcParticipantListModule_Factory(t) { return new (t || CvcParticipantListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__["NzListModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"]
            ]] });
    return CvcParticipantListModule;
})();


/***/ }),

/***/ "XIkG":
/*!********************************************************************!*\
  !*** ./src/app/views/users/users-detail/users-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetailComponent", function() { return UsersDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/shared/tab-navigation/tab-navigation.component */ "6BKN");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/users/user-card/user-card.component */ "uQMG");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "OvZZ");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _components_organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/organizations/organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/component */ "9A8T");




















function UsersDetailComponent_ng_container_0_nz_list_99_nz_list_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-organization-tag", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const org_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("org", org_r4);
    }
}
function UsersDetailComponent_ng_container_0_nz_list_99_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Organizations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UsersDetailComponent_ng_container_0_nz_list_99_nz_list_item_3_Template, 2, 1, "nz-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", user_r1.organizations);
    }
}
function UsersDetailComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "cvc-tab-navigation", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "cvc-user-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Biography: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Role:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Username:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Area of Expertise:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Country:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Editor's Conflict of Interest Statement:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Satus:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Created:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Expires:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Statement:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "User Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](81, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](93, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "nz-statistic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "nz-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, UsersDetailComponent_ng_container_0_nz_list_99_Template, 4, 1, "nz-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const user_r1 = ctx.ngIf;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", user_r1.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/user/", user_r1.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", ctx_r0.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.role, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.areaOfExpertise, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.country.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.mostRecentConflictOfInterestStatement.coiStatus, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.mostRecentConflictOfInterestStatement.createdAt, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.mostRecentConflictOfInterestStatement.expiresAt, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r1.mostRecentConflictOfInterestStatement.coiStatement, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 48, user_r1.statsHash.comments))("nzTitle", "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 50, user_r1.statsHash.revisions))("nzTitle", "Suggested Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 52, user_r1.statsHash.appliedRevisions))("nzTitle", "Applied Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](81, 54, user_r1.statsHash.suggestedSources))("nzTitle", "Suggested Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 56, user_r1.statsHash.submittedEvidenceItems))("nzTitle", "Submitted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 58, user_r1.statsHash.acceptedEvidenceItems))("nzTitle", "Accepted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](93, 60, user_r1.statsHash.submittedAssertions))("nzTitle", "Submitted Assertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 62, user_r1.statsHash.acceptedAssertions))("nzTitle", "Accepted Assertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.organizations.length > 0);
    }
}
let UsersDetailComponent = /*@__PURE__*/ (() => {
    class UsersDetailComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            this.routeSub = this.route.params.subscribe((params) => {
                this.queryRef = this.gql.watch({ userId: +params.userId });
                let observable = this.queryRef.valueChanges;
                this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
                this.user$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'user'));
                this.viewerSub = this.viewerService.viewer$.subscribe((v => {
                    if (v.id === +params.userId) {
                        let notificationTab = {
                            routeName: 'notifications',
                            tabLabel: 'Notifications',
                            iconName: 'bell'
                        };
                        this.tabs.push(notificationTab);
                    }
                }));
            });
            this.tabs = [
                {
                    routeName: 'activity',
                    tabLabel: 'Activity',
                    iconName: 'civic:event'
                },
                {
                    routeName: 'evidence',
                    tabLabel: 'Evidence Items',
                    iconName: 'civic:evidence'
                },
                {
                    routeName: 'assertions',
                    tabLabel: 'Assertions',
                    iconName: 'civic:assertion'
                },
                {
                    routeName: 'source-suggestions',
                    tabLabel: 'Source Suggestions',
                    iconName: 'file-add'
                },
                {
                    routeName: 'badges',
                    tabLabel: 'Badges',
                    iconName: 'safety-certificate'
                },
            ];
        }
        ngOnDestroy() {
            var _a;
            this.routeSub.unsubscribe();
            (_a = this.viewerSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
    }
    UsersDetailComponent.ɵfac = function UsersDetailComponent_Factory(t) { return new (t || UsersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["UserDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    UsersDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersDetailComponent, selectors: [["users-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], [1, "site-page-header"], ["nz-icon", "", "nzType", "civic:user"], [3, "routerLink"], [3, "tabs"], [1, "content"], ["nz-row", "", 3, "nzGutter"], [3, "nzSpan"], [3, "user"], [3, "nzGutter"], ["nz-typography", ""], [3, "nzValue", "nzTitle"], ["nzBordered", "", "nzSize", "small", 4, "ngIf"], ["nzBordered", "", "nzSize", "small"], [4, "ngFor", "ngForOf"], [3, "org"]], template: function UsersDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UsersDetailComponent_ng_container_0_Template, 101, 64, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.user$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderContentDirective"], _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_10__["CvcTabNavigationComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_11__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_11__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzColDirective"], _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_13__["CvcUserCardComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_14__["NzTypographyComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__["NzCardComponent"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_16__["NzStatisticComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__["NzListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__["NzListItemComponent"], _components_organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_18__["CvcOrganizationTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_19__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return UsersDetailComponent;
})();


/***/ }),

/***/ "ip/c":
/*!**********************************************************!*\
  !*** ./src/app/core/utilities/mutation-state-wrapper.ts ***!
  \**********************************************************/
/*! exports provided: MutatorWithState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutatorWithState", function() { return MutatorWithState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class MutatorWithState {
    constructor(networkErrorService) {
        this.networkErrorService = networkErrorService;
    }
    mutate(mutation, vars) {
        let destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        let stateVals = {
            isSubmitting$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            submitSuccess$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            submitError$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]),
            cleanup: () => { destroy$.next(); destroy$.complete(); }
        };
        stateVals.isSubmitting$.next(true);
        mutation.mutate(vars)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { stateVals.isSubmitting$.next(false); })).subscribe({
            error: (error) => {
                if (error.graphQLErrors.length > 0) {
                    stateVals.submitError$.next(error.graphQLErrors.map(e => e.message));
                }
                else if (error.networkError) {
                    this.networkErrorService.networkError$.next(error.networkError);
                }
                stateVals.cleanup();
            },
            complete: () => {
                stateVals.submitError$.next([]);
                stateVals.submitSuccess$.next(true);
                this.networkErrorService.networkError$.next(undefined);
                stateVals.cleanup();
            },
        });
        return stateVals;
    }
}


/***/ }),

/***/ "oTyK":
/*!****************************************************************************!*\
  !*** ./src/app/views/users/users-assertions/users-assertions.component.ts ***!
  \****************************************************************************/
/*! exports provided: UsersAssertionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAssertionsComponent", function() { return UsersAssertionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/assertions/assertions-table/assertions-table.component */ "zI+k");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function UsersAssertionsComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Assertions\n");
    }
}
let UsersAssertionsComponent = /*@__PURE__*/ (() => {
    class UsersAssertionsComponent {
        constructor(route) {
            this.route = route;
            this.userId = +this.route.snapshot.params['userId'];
        }
    }
    UsersAssertionsComponent.ɵfac = function UsersAssertionsComponent_Factory(t) { return new (t || UsersAssertionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    UsersAssertionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersAssertionsComponent, selectors: [["cvc-users-assertions"]], decls: 4, vars: 2, consts: [[3, "cvcTitle"], [3, "userId"], ["assertionsCardTitle", ""], ["nz-icon", "", "nzType", "civic:assertion"]], template: function UsersAssertionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-assertions-table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersAssertionsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx.userId);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcAssertionsTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return UsersAssertionsComponent;
})();


/***/ }),

/***/ "pjqq":
/*!********************************************************************!*\
  !*** ./src/app/views/users/users-events/users-events.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEventsComponent", function() { return UsersEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/events/event-feed/event-feed.component */ "ktE2");



let UsersEventsComponent = /*@__PURE__*/ (() => {
    class UsersEventsComponent {
        constructor(route) {
            this.route = route;
            this.userId = +this.route.snapshot.params['userId'];
        }
    }
    UsersEventsComponent.ɵfac = function UsersEventsComponent_Factory(t) { return new (t || UsersEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    UsersEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersEventsComponent, selectors: [["cvc-users-events"]], decls: 1, vars: 1, consts: [["tagDisplay", "hideUser", 3, "userId"]], template: function UsersEventsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-event-feed", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx.userId);
            }
        }, directives: [_components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_2__["CvcEventFeedComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return UsersEventsComponent;
})();


/***/ }),

/***/ "xSMm":
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let UsersComponent = /*@__PURE__*/ (() => {
    class UsersComponent {
        constructor() { }
    }
    UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 1, vars: 0, template: function UsersComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return UsersComponent;
})();


/***/ })

}]);