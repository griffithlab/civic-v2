(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "3mrq":
/*!***************************************************!*\
  !*** ./src/app/core/pipes/event-verbiage-pipe.ts ***!
  \***************************************************/
/*! exports provided: EventVerbiagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventVerbiagePipe", function() { return EventVerbiagePipe; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EventVerbiagePipe = /*@__PURE__*/ (() => {
    class EventVerbiagePipe {
        transform(value, context = 'contributor-card', count = 0) {
            if (context === 'contributor-card') {
                return this.contributorVerbiage(value, count);
            }
            else if (context === 'action-filter') {
                return this.actionFilterVerbiage(value);
            }
            else {
                return this.eventFeedVerbiage(value);
            }
        }
        eventFeedVerbiage(a) {
            switch (a) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Commented):
                    return 'added comment';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuggested):
                    return 'suggested revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionAccepted):
                    return 'accepted revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionRejected):
                    return 'rejected revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuperseded):
                    return 'accepted superseding revision';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Flagged):
                    return 'opened new flag';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].FlagResolved):
                    return 'resolved flag';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionSubmitted):
                    return 'submitted assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionAccepted):
                    return 'accepted assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionRejected):
                    return 'rejected assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Submitted):
                    return 'submitted evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Accepted):
                    return 'accepted evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Rejected):
                    return 'rejected evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].PublicationSuggested):
                    return 'created source suggestion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].CuratedSourceSuggestion):
                    return 'finished curating source suggestion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RejectedSourceSuggestion):
                    return 'rejected source suggestion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RequeuedSourceSuggestion):
                    return 'requeued source suggestion';
                default:
                    throw new Error('Not handling all event action types yet');
            }
        }
        actionFilterVerbiage(a) {
            switch (a) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Commented):
                    return 'commented';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuggested):
                    return 'revision suggested';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionAccepted):
                    return 'revision accepted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionRejected):
                    return 'revision rejected';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuperseded):
                    return 'superseding revision accepted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Flagged):
                    return 'flag opened';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].FlagResolved):
                    return 'flag resolved';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionSubmitted):
                    return 'assertion submitted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionAccepted):
                    return 'assertion accepted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionRejected):
                    return 'assertion rejected';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Submitted):
                    return 'evidence item submitted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Accepted):
                    return 'evidence item accepted';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Rejected):
                    return 'evidence item rejected';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].PublicationSuggested):
                    return 'source suggestion created';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].CuratedSourceSuggestion):
                    return 'source suggestion curated';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RejectedSourceSuggestion):
                    return 'source suggestion rejected';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RequeuedSourceSuggestion):
                    return 'source suggestion requeued';
                default:
                    throw new Error('Not handling all event action types yet');
            }
        }
        contributorVerbiage(a, count) {
            switch (a) {
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Commented):
                    return (count == 1) ? 'left a comment on this entity' : `left ${count} comments on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuggested):
                    return (count == 1) ? 'suggested a revision to this entity' : `suggested ${count} revisions on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionAccepted):
                    return (count == 1) ? 'accepted a revision to this entity' : `accepted ${count} revisions on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionRejected):
                    return (count == 1) ? 'rejected a revision to this entity' : `rejected ${count} revisions on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RevisionSuperseded):
                    return (count == 1) ? 'accepted a superseding revision to this entity' : `accepted ${count} superseding revisions on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Flagged):
                    return (count == 1) ? 'opened new flag on this entity' : `opened ${count} new flags on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].FlagResolved):
                    return (count == 1) ? 'resolved a flag on this entity' : `resolved ${count} flags on this entity`;
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionSubmitted):
                    return 'submitted this assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionAccepted):
                    return 'accepted this assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].AssertionRejected):
                    return 'rejected this assertion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Submitted):
                    return 'submitted this evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Accepted):
                    return 'accepted this evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].Rejected):
                    return 'rejected this evidence item';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].PublicationSuggested):
                    return '';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].CuratedSourceSuggestion):
                    return 'finished curating this source suggestion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RejectedSourceSuggestion):
                    return 'rejected this source suggestion';
                case (_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["EventAction"].RequeuedSourceSuggestion):
                    return 'requeued this source suggestion';
                default:
                    throw new Error('Not handling all event action types yet');
            }
        }
    }
    EventVerbiagePipe.ɵfac = function EventVerbiagePipe_Factory(t) { return new (t || EventVerbiagePipe)(); };
    EventVerbiagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "eventVerbiage", type: EventVerbiagePipe, pure: true });
    return EventVerbiagePipe;
})();


/***/ }),

/***/ "I32T":
/*!******************************************************!*\
  !*** ./src/app/core/pipes/typename-to-route-pipe.ts ***!
  \******************************************************/
/*! exports provided: TypenameToRoutePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypenameToRoutePipe", function() { return TypenameToRoutePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let TypenameToRoutePipe = /*@__PURE__*/ (() => {
    class TypenameToRoutePipe {
        transform(n) {
            switch (n) {
                case ('Gene'):
                    return 'genes';
                case ('Variant'):
                    return 'variants';
                case ('Assertion'):
                    return 'assertions';
                case ('EvidenceItem'):
                    return 'evidence';
                case ('Source'):
                    return 'sources';
                case ('SourceSuggestion'):
                    return 'source-suggestions';
                default:
                    throw new Error('Not handling all typenames yet' + n);
            }
        }
    }
    TypenameToRoutePipe.ɵfac = function TypenameToRoutePipe_Factory(t) { return new (t || TypenameToRoutePipe)(); };
    TypenameToRoutePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "typenameToRoute", type: TypenameToRoutePipe, pure: true });
    return TypenameToRoutePipe;
})();


/***/ }),

/***/ "lpb+":
/*!*****************************************************************!*\
  !*** ./src/app/core/pipes/icon-name-for-subscribable-entity.ts ***!
  \*****************************************************************/
/*! exports provided: IconNameForSubscribableEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconNameForSubscribableEntity", function() { return IconNameForSubscribableEntity; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let IconNameForSubscribableEntity = /*@__PURE__*/ (() => {
    class IconNameForSubscribableEntity {
        transform(e) {
            switch (e) {
                case 'ASSERTION':
                case 'Assertion':
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].Assertion:
                    return 'civic:assertion';
                case 'EVIDENCE_ITEM':
                case 'EvidenceItem':
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].EvidenceItem:
                    return 'civic:evidence';
                case 'GENE':
                case 'Gene':
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].Gene:
                    return 'civic:gene';
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].Revision:
                case 'REVISION':
                case 'Revision':
                    return 'civic:revision';
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].Variant:
                case 'VARIANT':
                case 'Variant':
                    return 'civic:variant';
                case _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["SubscribableEntities"].VariantGroup:
                case 'VARIANT_GROUP':
                case 'VariantGrou':
                    return 'civic:variant-group';
                default:
                    console.log('String No icon name found for ' + e);
                    return 'border-outer';
            }
        }
    }
    IconNameForSubscribableEntity.ɵfac = function IconNameForSubscribableEntity_Factory(t) { return new (t || IconNameForSubscribableEntity)(); };
    IconNameForSubscribableEntity.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "iconNameForSubscribableEntity", type: IconNameForSubscribableEntity, pure: true });
    return IconNameForSubscribableEntity;
})();


/***/ }),

/***/ "urcv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/revisions/revision-tag/revision-tag.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CvcRevisionTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcRevisionTagComponent", function() { return CvcRevisionTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/typename-to-route-pipe */ "I32T");






function CvcRevisionTagComponent_ng_container_0_ng_template_4_Template(rf, ctx) { }
function CvcRevisionTagComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "typenameToRoute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvcRevisionTagComponent_ng_container_0_ng_template_4_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.subject.__typename), "/", ctx_r0.subject.id, "/revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
function CvcRevisionTagComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.revision.name, "\n");
    }
}
function CvcRevisionTagComponent_ng_template_3_ng_template_0_Template(rf, ctx) { }
function CvcRevisionTagComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcRevisionTagComponent_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 4);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    }
}
let CvcRevisionTagComponent = /*@__PURE__*/ (() => {
    class CvcRevisionTagComponent {
        constructor() { }
        ngOnInit() {
            if (this.revision === undefined) {
                throw new Error('cvc-revision-tag requires LinkableRevision input, none supplied.');
            }
        }
    }
    CvcRevisionTagComponent.ɵfac = function CvcRevisionTagComponent_Factory(t) { return new (t || CvcRevisionTagComponent)(); };
    CvcRevisionTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcRevisionTagComponent, selectors: [["cvc-revision-tag"]], inputs: { revision: "revision", subject: "subject" }, decls: 5, vars: 1, consts: [[4, "ngIfNoSubject", "ngIf"], ["revisionTemplate", ""], ["noSubject", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "civic-revision", "nzTheme", "twotone", "nzTwotoneColor", "#F0673A"]], template: function CvcRevisionTagComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcRevisionTagComponent_ng_container_0_Template, 5, 5, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcRevisionTagComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvcRevisionTagComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subject);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], pipes: [_core_pipes_typename_to_route_pipe__WEBPACK_IMPORTED_MODULE_5__["TypenameToRoutePipe"]], styles: [""] });
    return CvcRevisionTagComponent;
})();


/***/ })

}]);