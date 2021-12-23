(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "/1cd":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/organizations/organization-card/organization-card.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CvcOrganizationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationCardComponent", function() { return CvcOrganizationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var _organization_avatar_organization_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organization-avatar/organization-avatar.component */ "fQnK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CvcOrganizationCardComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-organization-avatar", 7);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organization", ctx_r1.organization)("size", 64);
    }
}
let CvcOrganizationCardComponent = /*@__PURE__*/ (() => {
    class CvcOrganizationCardComponent {
        ngOnInit() {
            if (this.organization == undefined) {
                throw new Error("Must pass a organization into organization card");
            }
        }
    }
    CvcOrganizationCardComponent.ɵfac = function CvcOrganizationCardComponent_Factory(t) { return new (t || CvcOrganizationCardComponent)(); };
    CvcOrganizationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcOrganizationCardComponent, selectors: [["cvc-organization-card"]], inputs: { organization: "organization" }, decls: 48, vars: 46, consts: [[3, "nzTitle", "nzExtra"], ["avatar", ""], ["nz-row", "", 3, "nzGutter"], [3, "nzSpan"], ["nz-typography", ""], [3, "nzGutter"], [3, "nzValue", "nzTitle"], [3, "organization", "size"]], template: function CvcOrganizationCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcOrganizationCardComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Organization Statistics");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-row", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-col", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nz-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nz-statistic", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.organization.name)("nzExtra", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.organization.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 30, ctx.organization.orgStatsHash.comments))("nzTitle", "Comments");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 32, ctx.organization.orgStatsHash.revisions))("nzTitle", "Suggested Revisions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 34, ctx.organization.orgStatsHash.appliedRevisions))("nzTitle", "Applied Revisions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 36, ctx.organization.orgStatsHash.suggestedSources))("nzTitle", "Suggested Sources");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 38, ctx.organization.orgStatsHash.submittedEvidenceItems))("nzTitle", "Submitted Evidence");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 40, ctx.organization.orgStatsHash.acceptedEvidenceItems))("nzTitle", "Accepted Evidence");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 42, ctx.organization.orgStatsHash.submittedAssertions))("nzTitle", "Submitted Assertions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 44, ctx.organization.orgStatsHash.acceptedAssertions))("nzTitle", "Accepted Assertions");
            }
        }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__["NzTypographyComponent"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_4__["NzStatisticComponent"], _organization_avatar_organization_avatar_component__WEBPACK_IMPORTED_MODULE_5__["CvcOrganizationAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [""] });
    return CvcOrganizationCardComponent;
})();


/***/ }),

/***/ "/aZ0":
/*!****************************************************************************************!*\
  !*** ./src/app/components/organizations/organization-card/organization-card.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CvcOrganizationCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationCardModule", function() { return CvcOrganizationCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/phenotypes/phenotype-tag/phenotype-tag.module */ "4ykH");
/* harmony import */ var _app_components_evidence_evidence_rating_evidence_rating_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/evidence/evidence-rating/evidence-rating.module */ "jEMj");
/* harmony import */ var _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/drugs/cvc-drug-tag/cvc-drug-tag.module */ "h0k8");
/* harmony import */ var _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/diseases/cvc-disease-tag/cvc-disease-tag.module */ "g4Zv");
/* harmony import */ var _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module */ "bluq");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _app_components_organizations_organization_avatar_organization_avatar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/organizations/organization-avatar/organization-avatar.module */ "dYnZ");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














let CvcOrganizationCardModule = /*@__PURE__*/ (() => {
    class CvcOrganizationCardModule {
    }
    CvcOrganizationCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CvcOrganizationCardModule });
    CvcOrganizationCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function CvcOrganizationCardModule_Factory(t) { return new (t || CvcOrganizationCardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceModule"],
                ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_11__["NzTypographyModule"],
                ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_12__["NzStatisticModule"],
                _app_components_clinical_trials_clinical_trial_tag_clinical_trial_tag_module__WEBPACK_IMPORTED_MODULE_6__["CvcClinicalTrialTagModule"],
                _app_components_diseases_cvc_disease_tag_cvc_disease_tag_module__WEBPACK_IMPORTED_MODULE_5__["CvcDiseaseTagModule"],
                _app_components_drugs_cvc_drug_tag_cvc_drug_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcDrugTagModule"],
                _app_components_evidence_evidence_rating_evidence_rating_module__WEBPACK_IMPORTED_MODULE_3__["CvcEvidenceRatingModule"],
                _app_components_phenotypes_phenotype_tag_phenotype_tag_module__WEBPACK_IMPORTED_MODULE_2__["CvcPhenotypeTagModule"],
                _app_components_organizations_organization_avatar_organization_avatar_module__WEBPACK_IMPORTED_MODULE_10__["CvcOrganizationAvatarModule"],
                _app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["CvcPipesModule"],
            ]] });
    return CvcOrganizationCardModule;
})();


/***/ }),

/***/ "73KU":
/*!************************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-evidence/organizations-evidence.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrganizationsEvidenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsEvidenceComponent", function() { return OrganizationsEvidenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/evidence/evidence-table/evidence-table.component */ "4dRX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function OrganizationsEvidenceComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Organization Evidence\n");
    }
}
let OrganizationsEvidenceComponent = /*@__PURE__*/ (() => {
    class OrganizationsEvidenceComponent {
        constructor(route) {
            this.route = route;
            this.organizationId = +this.route.snapshot.params['organizationId'];
        }
    }
    OrganizationsEvidenceComponent.ɵfac = function OrganizationsEvidenceComponent_Factory(t) { return new (t || OrganizationsEvidenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    OrganizationsEvidenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsEvidenceComponent, selectors: [["cvc-organizations-evidence"]], decls: 4, vars: 2, consts: [[3, "cvcTitle"], [3, "organizationId"], ["evidenceCardTitle", ""], ["nz-icon", "", "nzType", "civic:evidence"]], template: function OrganizationsEvidenceComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-evidence-table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationsEvidenceComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organizationId", ctx.organizationId);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_evidence_evidence_table_evidence_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcEvidenceTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return OrganizationsEvidenceComponent;
})();


/***/ }),

/***/ "G46h":
/*!*********************************************************************!*\
  !*** ./src/app/views/organizations/organizations-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrganizationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsRoutingModule", function() { return OrganizationsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _organizations_assertions_organizations_assertions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizations-assertions/organizations-assertions.component */ "RFrZ");
/* harmony import */ var _organizations_detail_organizations_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organizations-detail/organizations-detail.component */ "Ihkp");
/* harmony import */ var _organizations_events_organizations_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organizations-events/organizations-events.component */ "qwsC");
/* harmony import */ var _organizations_evidence_organizations_evidence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organizations-evidence/organizations-evidence.component */ "73KU");
/* harmony import */ var _organizations_groups_organizations_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizations-groups/organizations-groups.component */ "tA9V");
/* harmony import */ var _organizations_home_organizations_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organizations-home/organizations-home.page */ "fOnE");
/* harmony import */ var _organizations_members_organizations_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organizations-members/organizations-members.component */ "bNvX");
/* harmony import */ var _organizations_source_suggestions_organizations_source_suggestions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organizations-source-suggestions/organizations-source-suggestions.component */ "td0o");
/* harmony import */ var _organizations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organizations.component */ "IC5F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    {
        path: '',
        component: _organizations_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationsComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: _organizations_home_organizations_home_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationsHomePage"]
            },
            {
                path: ':organizationId',
                component: _organizations_detail_organizations_detail_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationsDetailComponent"],
                data: {
                    breadcrumb: 'DISPLAYNAME'
                },
                children: [
                    { path: '', redirectTo: 'members', pathMatch: 'full' },
                    {
                        path: 'members',
                        component: _organizations_members_organizations_members_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationsMembersComponent"],
                        data: {
                            breadcrumb: 'Members'
                        }
                    },
                    {
                        path: 'groups',
                        component: _organizations_groups_organizations_groups_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationsGroupsComponent"],
                        data: {
                            breadcrumb: 'Child Organizations'
                        }
                    },
                    {
                        path: 'evidence',
                        component: _organizations_evidence_organizations_evidence_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationsEvidenceComponent"],
                        data: {
                            breadcrumb: 'Evidence'
                        }
                    },
                    {
                        path: 'assertions',
                        component: _organizations_assertions_organizations_assertions_component__WEBPACK_IMPORTED_MODULE_1__["OrganizationsAssertionsComponent"],
                        data: {
                            breadcrumb: 'Assertions'
                        }
                    },
                    {
                        path: 'activity',
                        component: _organizations_events_organizations_events_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationsEventsComponent"],
                        data: {
                            breadcrumb: 'Activity'
                        }
                    },
                    {
                        path: 'source-suggestions',
                        component: _organizations_source_suggestions_organizations_source_suggestions_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationsSourceSuggestionsComponent"],
                        data: {
                            breadcrumb: 'Source Suggestions'
                        }
                    }
                ]
            }
        ]
    }
];
let OrganizationsRoutingModule = /*@__PURE__*/ (() => {
    class OrganizationsRoutingModule {
    }
    OrganizationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: OrganizationsRoutingModule });
    OrganizationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function OrganizationsRoutingModule_Factory(t) { return new (t || OrganizationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return OrganizationsRoutingModule;
})();


/***/ }),

/***/ "IC5F":
/*!****************************************************************!*\
  !*** ./src/app/views/organizations/organizations.component.ts ***!
  \****************************************************************/
/*! exports provided: OrganizationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsComponent", function() { return OrganizationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let OrganizationsComponent = /*@__PURE__*/ (() => {
    class OrganizationsComponent {
        constructor() { }
    }
    OrganizationsComponent.ɵfac = function OrganizationsComponent_Factory(t) { return new (t || OrganizationsComponent)(); };
    OrganizationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsComponent, selectors: [["app-organizations"]], decls: 1, vars: 0, template: function OrganizationsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return OrganizationsComponent;
})();


/***/ }),

/***/ "Ihkp":
/*!********************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-detail/organizations-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrganizationsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsDetailComponent", function() { return OrganizationsDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared/section-navigation/section-navigation.component */ "Omhx");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/shared/link-tag/link-tag.component */ "tFHu");
/* harmony import */ var _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/shared/tab-navigation/tab-navigation.component */ "6BKN");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _components_organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/organizations/organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/component */ "9A8T");





















function OrganizationsDetailComponent_ng_container_0_span_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Excl. Child Organizations)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function OrganizationsDetailComponent_ng_container_0_p_65_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Organization Statistics (Incl. Child Organizations)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function OrganizationsDetailComponent_ng_container_0_nz_row_66_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organization_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 25, organization_r1.orgAndSuborgsStatsHash.comments))("nzTitle", "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 27, organization_r1.orgAndSuborgsStatsHash.revisions))("nzTitle", "Suggested Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 29, organization_r1.orgAndSuborgsStatsHash.appliedRevisions))("nzTitle", "Applied Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 31, organization_r1.orgAndSuborgsStatsHash.suggestedSources))("nzTitle", "Suggested Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 33, organization_r1.orgAndSuborgsStatsHash.submittedEvidenceItems))("nzTitle", "Submitted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 35, organization_r1.orgAndSuborgsStatsHash.acceptedEvidenceItems))("nzTitle", "Accepted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 37, organization_r1.orgAndSuborgsStatsHash.submittedAssertions))("nzTitle", "Submitted Assertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 39, organization_r1.orgAndSuborgsStatsHash.acceptedAssertions))("nzTitle", "Accepted Assertions");
    }
}
function OrganizationsDetailComponent_ng_container_0_nz_list_68_nz_list_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-organization-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const suborg_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("org", suborg_r8);
    }
}
function OrganizationsDetailComponent_ng_container_0_nz_list_68_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Child Organizations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrganizationsDetailComponent_ng_container_0_nz_list_68_nz_list_item_3_Template, 2, 1, "nz-list-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organization_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", organization_r1.subGroups);
    }
}
function OrganizationsDetailComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-section-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-space", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "cvc-link-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Organization Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "cvc-tab-navigation", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Organization Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OrganizationsDetailComponent_ng_container_0_span_30_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nz-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "nz-statistic", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, OrganizationsDetailComponent_ng_container_0_p_65_Template, 3, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, OrganizationsDetailComponent_ng_container_0_nz_row_66_Template, 33, 41, "nz-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, OrganizationsDetailComponent_ng_container_0_nz_list_68_Template, 4, 1, "nz-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const organization_r1 = ctx.ngIf;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayName", organization_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/organizatons/", organization_r1.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", organization_r1.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", organization_r1.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", ctx_r0.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzSrc", organization_r1.profileImagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](organization_r1.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", organization_r1.subGroups.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 40, organization_r1.orgStatsHash.comments))("nzTitle", "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 42, organization_r1.orgStatsHash.revisions))("nzTitle", "Suggested Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 44, organization_r1.orgStatsHash.appliedRevisions))("nzTitle", "Applied Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 46, organization_r1.orgStatsHash.suggestedSources))("nzTitle", "Suggested Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 48, organization_r1.orgStatsHash.submittedEvidenceItems))("nzTitle", "Submitted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 50, organization_r1.orgStatsHash.acceptedEvidenceItems))("nzTitle", "Accepted Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 52, organization_r1.orgStatsHash.submittedAssertions))("nzTitle", "Submitted Assertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 54, organization_r1.orgStatsHash.acceptedAssertions))("nzTitle", "Accepted Assertions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", organization_r1.subGroups.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", organization_r1.subGroups.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", organization_r1.subGroups.length > 0);
    }
}
let OrganizationsDetailComponent = /*@__PURE__*/ (() => {
    class OrganizationsDetailComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            const organizationId = +this.route.snapshot.params['organizationId'];
            this.queryRef = this.gql.watch({ organizationId: organizationId });
            let observable = this.queryRef.valueChanges;
            this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
            this.organization$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'organization'));
            this.viewer$ = this.viewerService.viewer$;
            this.tabs = [
                {
                    routeName: 'members',
                    tabLabel: 'Members',
                    iconName: 'pic-right'
                },
                {
                    routeName: 'groups',
                    tabLabel: 'Child Organizations',
                    iconName: 'civic:organization'
                },
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
            ];
        }
    }
    OrganizationsDetailComponent.ɵfac = function OrganizationsDetailComponent_Factory(t) { return new (t || OrganizationsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["OrganizationDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    OrganizationsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrganizationsDetailComponent, selectors: [["organizations-detail"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "displayName"], [1, "site-page-header"], ["nzDirection", "horizontal", "nzSize", "small"], ["nz-icon", "", "nzType", "civic:organization"], [3, "routerLink"], [3, "href"], [3, "tabs"], [1, "content"], ["nz-row", "", 3, "nzGutter"], [3, "nzSpan"], ["nz-image", "", "width", "121px", "height", "121px", "alt", "", 3, "nzSrc"], ["nz-typography", ""], [3, "nzGutter"], [3, "nzValue", "nzTitle"], ["nz-typography", "", 4, "ngIf"], [3, "nzGutter", 4, "ngIf"], ["nzBordered", "", "nzSize", "small", 4, "ngIf"], ["nzBordered", "", "nzSize", "small"], [4, "ngFor", "ngForOf"], [3, "org"]], template: function OrganizationsDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrganizationsDetailComponent_ng_container_0_Template, 70, 56, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.organization$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_shared_section_navigation_section_navigation_component__WEBPACK_IMPORTED_MODULE_6__["CvcSectionNavigationComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderTitleDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceItemComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _components_shared_link_tag_link_tag_component__WEBPACK_IMPORTED_MODULE_11__["CvcLinkTagComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderContentDirective"], _components_shared_tab_navigation_tab_navigation_component__WEBPACK_IMPORTED_MODULE_12__["CvcTabNavigationComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_14__["NzImageDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__["NzTypographyComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__["NzCardComponent"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_17__["NzStatisticComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__["NzListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__["NzListItemComponent"], _components_organizations_organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_19__["CvcOrganizationTagComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_20__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\nnz-page-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.card-list[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-list[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]   .card-grid-cell[_ngcontent-%COMP%] {\n  width: 50%;\n}\nnz-page-header-title.flagged[_ngcontent-%COMP%] {\n  padding-left: 0.75em;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  overflow: auto;\n  \n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #fff;\n  overflow: auto;\n  font-size: 13px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: table;\n  width: 100%;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0;\n  display: table-row;\n  margin: 0;\n  height: 1em;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.ins[_ngcontent-%COMP%] {\n  background: #ddf;\n  color: #008;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.del[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #b00;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #ffc;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  font-family: courier;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: normal;\n  background: #fcc;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: normal;\n  background: #99f;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.diff-comment[_ngcontent-%COMP%] {\n  display: none;\n}\n.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.diff-block-info[_ngcontent-%COMP%] {\n  background: none repeat scroll 0 0 gray;\n}"] });
    return OrganizationsDetailComponent;
})();


/***/ }),

/***/ "RFrZ":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-assertions/organizations-assertions.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OrganizationsAssertionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsAssertionsComponent", function() { return OrganizationsAssertionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/assertions/assertions-table/assertions-table.component */ "zI+k");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function OrganizationsAssertionsComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Organization Assertions\n");
    }
}
let OrganizationsAssertionsComponent = /*@__PURE__*/ (() => {
    class OrganizationsAssertionsComponent {
        constructor(route) {
            this.route = route;
            this.organizationId = +this.route.snapshot.params['organizationId'];
        }
    }
    OrganizationsAssertionsComponent.ɵfac = function OrganizationsAssertionsComponent_Factory(t) { return new (t || OrganizationsAssertionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    OrganizationsAssertionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsAssertionsComponent, selectors: [["cvc-organizations-assertions"]], decls: 4, vars: 2, consts: [[3, "cvcTitle"], [3, "organizationId"], ["assertionsCardTitle", ""], ["nz-icon", "", "nzType", "civic:assertion"]], template: function OrganizationsAssertionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-assertions-table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationsAssertionsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organizationId", ctx.organizationId);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_assertions_assertions_table_assertions_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcAssertionsTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return OrganizationsAssertionsComponent;
})();


/***/ }),

/***/ "W2PW":
/*!*************************************************************!*\
  !*** ./src/app/views/organizations/organizations.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsModule", function() { return OrganizationsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _organizations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizations-routing.module */ "G46h");
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
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var _organizations_home_organizations_home_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./organizations-home/organizations-home.module */ "org9");
/* harmony import */ var _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/components/assertions/assertions-table/assertions-table.module */ "IpA2");
/* harmony import */ var _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/components/shared/entity-table-card/entity-table-card.module */ "B2Tj");
/* harmony import */ var _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/components/evidence/evidence-table/evidence-table.module */ "kfgc");
/* harmony import */ var _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/components/shared/link-tag/link-tag.module */ "zcey");
/* harmony import */ var _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/components/organizations/organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var _app_components_organizations_organization_card_organization_card_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/components/organizations/organization-card/organization-card.module */ "/aZ0");
/* harmony import */ var _app_components_users_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/components/users/user-card/user-card.module */ "QFfB");
/* harmony import */ var _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @app/components/events/event-feed/event-feed.module */ "e5/R");
/* harmony import */ var _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @app/components/shared/tab-navigation/tab-navigation.module */ "ol2S");
/* harmony import */ var _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @app/components/shared/section-navigation/section-navigation.module */ "hFUy");
/* harmony import */ var _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module */ "b1zR");
/* harmony import */ var _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @app/core/utilities/timeago-formatter */ "8m6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");














































let OrganizationsModule = /*@__PURE__*/ (() => {
    class OrganizationsModule {
    }
    OrganizationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: OrganizationsModule });
    OrganizationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ factory: function OrganizationsModule_Factory(t) { return new (t || OrganizationsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _organizations_home_organizations_home_module__WEBPACK_IMPORTED_MODULE_31__["OrganizationsHomeModule"],
                _app_components_assertions_assertions_table_assertions_table_module__WEBPACK_IMPORTED_MODULE_32__["CvcAssertionsTableModule"],
                _app_components_evidence_evidence_table_evidence_table_module__WEBPACK_IMPORTED_MODULE_34__["CvcEvidenceTableModule"],
                _app_components_shared_entity_table_card_entity_table_card_module__WEBPACK_IMPORTED_MODULE_33__["CvcEntityTableCardModule"],
                _organizations_routing_module__WEBPACK_IMPORTED_MODULE_1__["OrganizationsRoutingModule"],
                _app_components_shared_link_tag_link_tag_module__WEBPACK_IMPORTED_MODULE_35__["CvcLinkTagModule"],
                _app_components_organizations_organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_36__["CvcOrganizationTagModule"],
                _app_components_organizations_organization_card_organization_card_module__WEBPACK_IMPORTED_MODULE_37__["CvcOrganizationCardModule"],
                _app_components_users_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_38__["CvcUserCardModule"],
                _app_components_events_event_feed_event_feed_module__WEBPACK_IMPORTED_MODULE_39__["CvcEventFeedModule"],
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
                _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveComponentModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoModule"].forChild({ formatter: { useClass: _app_core_utilities_timeago_formatter__WEBPACK_IMPORTED_MODULE_43__["CivicTimeagoFormatter"], provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_26__["TimeagoFormatter"] } }),
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_components_shared_tab_navigation_tab_navigation_module__WEBPACK_IMPORTED_MODULE_40__["CvcTabNavigationModule"],
                ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__["NzSelectModule"],
                _evidence_evidence_module__WEBPACK_IMPORTED_MODULE_28__["EvidenceModule"],
                ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__["NzImageModule"],
                ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_30__["NzStatisticModule"],
                _app_components_shared_section_navigation_section_navigation_module__WEBPACK_IMPORTED_MODULE_41__["CvcSectionNavigationModule"],
                _app_components_source_suggestions_source_suggestions_table_source_suggestions_table_module__WEBPACK_IMPORTED_MODULE_42__["CvcSourceSuggestionsTableModule"]
            ]] });
    return OrganizationsModule;
})();


/***/ }),

/***/ "Y90+":
/*!********************************************************************************************!*\
  !*** ./src/app/components/organizations/organizations-table/organizations-table.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CvcOrganizationsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationsTableModule", function() { return CvcOrganizationsTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/shared/clearable-input-filter/clearable-input-filter.module */ "/CHw");
/* harmony import */ var _organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organization-tag/organization-tag.module */ "8IoQ");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/shared/tag-overflow/tag-overflow.module */ "2WDp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CvcOrganizationsTableModule = /*@__PURE__*/ (() => {
    class CvcOrganizationsTableModule {
    }
    CvcOrganizationsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CvcOrganizationsTableModule });
    CvcOrganizationsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CvcOrganizationsTableModule_Factory(t) { return new (t || CvcOrganizationsTableModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponentModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
                _app_components_shared_clearable_input_filter_clearable_input_filter_module__WEBPACK_IMPORTED_MODULE_3__["CvcClearableInputFilterModule"],
                _organization_tag_organization_tag_module__WEBPACK_IMPORTED_MODULE_4__["CvcOrganizationTagModule"],
                _app_components_shared_tag_overflow_tag_overflow_module__WEBPACK_IMPORTED_MODULE_6__["CvcTagOverflowModule"]
            ]] });
    return CvcOrganizationsTableModule;
})();


/***/ }),

/***/ "YmcG":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/organizations/organizations-table/organizations-table.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CvcOrganizationsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationsTableComponent", function() { return CvcOrganizationsTableComponent; });
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/utilities/datatable-helpers */ "yUQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/clearable-input-filter/clearable-input-filter.component */ "iBKJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organization-tag/organization-tag.component */ "mgaf");
/* harmony import */ var _shared_tag_overflow_tag_overflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/tag-overflow/tag-overflow.component */ "lxmO");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/component */ "9A8T");












function CvcOrganizationsTableComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cvc-organization-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "cvc-tag-overflow", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organization_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("org", organization_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", organization_r2.memberCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxDisplayCount", 3)("tags", organization_r2.subGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", organization_r2.eventCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", organization_r2.mostRecentEvent.createdAt, " ");
    }
}
let CvcOrganizationsTableComponent = /*@__PURE__*/ (() => {
    class CvcOrganizationsTableComponent {
        constructor(gql) {
            this.gql = gql;
            this.initialPageSize = 25;
            this.debouncedQuery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.tableView = true;
            this.sortColumns = _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["OrganizationSortColumns"];
        }
        ngOnInit() {
            this.queryRef = this.gql.watch({
                first: this.initialPageSize,
                cardView: !this.tableView
            });
            let observable = this.queryRef.valueChanges;
            this.isLoading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true));
            this.organizations$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'organizations', 'edges'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((edges) => {
                return edges.map((e) => e.node);
            }));
            this.totalCount$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'organizations', 'totalCount'));
            this.pageInfo$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data', 'organizations', 'pageInfo'));
            this.debouncedQuery
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
                .subscribe((_) => this.refresh());
            this.textInputCallback = () => { this.debouncedQuery.next(); };
        }
        refresh() {
            this.queryRef.refetch({
                orgName: this.orgNameInput,
                id: this.idInput ? +this.idInput : undefined,
                cardView: !this.tableView
            });
        }
        onModelChanged() { this.debouncedQuery.next(); }
        onSortChanged(e) {
            this.queryRef.refetch({ sortBy: Object(_app_core_utilities_datatable_helpers__WEBPACK_IMPORTED_MODULE_1__["buildSortParams"])(e), cardView: !this.tableView });
        }
        ngOnDestroy() { this.debouncedQuery.unsubscribe(); }
    }
    CvcOrganizationsTableComponent.ɵfac = function CvcOrganizationsTableComponent_Factory(t) { return new (t || CvcOrganizationsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_0__["OrganizationsBrowseGQL"])); };
    CvcOrganizationsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CvcOrganizationsTableComponent, selectors: [["cvc-organizations-table"]], decls: 25, vars: 13, consts: [[3, "nzData", "nzLoading", "nzFrontPagination", "nzShowPagination"], ["organizationsTable", ""], [3, "nzSortOrderChange"], ["nzWidth", "25%", 3, "nzColumnKey", "nzSortFn"], ["placeholderText", "Search Name", 3, "inputModel", "onInputChanged", "inputModelChange"], [4, "ngFor", "ngForOf"], [3, "org"], ["tagType", "organization", 3, "maxDisplayCount", "tags"]], template: function CvcOrganizationsTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ngrxPush");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSortOrderChange", function CvcOrganizationsTableComponent_Template_thead_nzSortOrderChange_4_listener($event) { return ctx.onSortChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Members ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Sub Organizations ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Actions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Last Action ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "cvc-clearable-input-filter", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputModelChange", function CvcOrganizationsTableComponent_Template_cvc_clearable_input_filter_inputModelChange_18_listener($event) { return ctx.orgNameInput = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CvcOrganizationsTableComponent_tr_24_Template, 11, 6, "tr", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 9, ctx.organizations$))("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, ctx.isLoading$))("nzFrontPagination", false)("nzShowPagination", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColumnKey", ctx.sortColumns.Name)("nzSortFn", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.orgNameInput)("onInputChanged", ctx.textInputCallback);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r0.data);
            }
        }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThAddOnComponent"], _shared_clearable_input_filter_clearable_input_filter_component__WEBPACK_IMPORTED_MODULE_6__["CvcClearableInputFilterComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _organization_tag_organization_tag_component__WEBPACK_IMPORTED_MODULE_8__["CvcOrganizationTagComponent"], _shared_tag_overflow_tag_overflow_component__WEBPACK_IMPORTED_MODULE_9__["CvcTagOverflowComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_10__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return CvcOrganizationsTableComponent;
})();


/***/ }),

/***/ "bNvX":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-members/organizations-members.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OrganizationsMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsMembersComponent", function() { return OrganizationsMembersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/users/user-card/user-card.component */ "uQMG");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");










function OrganizationsMembersComponent_nz_space_0_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cvc-user-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const member_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", member_r3.node);
    }
}
function OrganizationsMembersComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrganizationsMembersComponent_nz_space_0_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const members_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", members_r1);
    }
}
let OrganizationsMembersComponent = /*@__PURE__*/ (() => {
    class OrganizationsMembersComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            const organizationId = +this.route.snapshot.params['organizationId'];
            this.queryRef = this.gql.watch({ organizationId: organizationId });
            let observable = this.queryRef.valueChanges;
            this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
            this.members$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'organization', 'members', 'edges'));
            this.viewer$ = this.viewerService.viewer$;
        }
    }
    OrganizationsMembersComponent.ɵfac = function OrganizationsMembersComponent_Factory(t) { return new (t || OrganizationsMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["OrganizationMembersGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    OrganizationsMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrganizationsMembersComponent, selectors: [["cvc-organizations-members"]], decls: 2, vars: 3, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan"], [3, "user"]], template: function OrganizationsMembersComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrganizationsMembersComponent_nz_space_0_Template, 4, 2, "nz-space", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.members$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_8__["CvcUserCardComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: [""] });
    return OrganizationsMembersComponent;
})();


/***/ }),

/***/ "dYnZ":
/*!********************************************************************************************!*\
  !*** ./src/app/components/organizations/organization-avatar/organization-avatar.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CvcOrganizationAvatarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationAvatarModule", function() { return CvcOrganizationAvatarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CvcOrganizationAvatarModule = /*@__PURE__*/ (() => {
    class CvcOrganizationAvatarModule {
    }
    CvcOrganizationAvatarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CvcOrganizationAvatarModule });
    CvcOrganizationAvatarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CvcOrganizationAvatarModule_Factory(t) { return new (t || CvcOrganizationAvatarModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarModule"],
            ]] });
    return CvcOrganizationAvatarModule;
})();


/***/ }),

/***/ "fOnE":
/*!***********************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-home/organizations-home.page.ts ***!
  \***********************************************************************************/
/*! exports provided: OrganizationsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsHomePage", function() { return OrganizationsHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_organizations_organizations_table_organizations_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/organizations/organizations-table/organizations-table.component */ "YmcG");





let OrganizationsHomePage = /*@__PURE__*/ (() => {
    class OrganizationsHomePage {
        constructor() { }
        ngOnInit() {
        }
    }
    OrganizationsHomePage.ɵfac = function OrganizationsHomePage_Factory(t) { return new (t || OrganizationsHomePage)(); };
    OrganizationsHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsHomePage, selectors: [["organizations-home"]], decls: 9, vars: 1, consts: [[1, "site-page-header"], ["nz-icon", "", "nzType", "civic:organization"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [1, "content"]], template: function OrganizationsHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-page-header-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Organizations ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cvc-organizations-table");
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
        }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _components_organizations_organizations_table_organizations_table_component__WEBPACK_IMPORTED_MODULE_4__["CvcOrganizationsTableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type {\n  background-color: white;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card {\n  width: 100%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell {\n  width: 50%;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged {\n  padding-left: 0.75em;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content {\n  padding-top: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child {\n  margin-right: 0 !important;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap {\n  padding-left: 16px;\n  padding-right: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab {\n  padding: 1px 8px;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon {\n  margin-right: 0;\n}\n[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content {\n  margin-right: 16px;\n}"] });
    return OrganizationsHomePage;
})();


/***/ }),

/***/ "fQnK":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/organizations/organization-avatar/organization-avatar.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CvcOrganizationAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcOrganizationAvatarComponent", function() { return CvcOrganizationAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");



function CvcOrganizationAvatarComponent_nz_avatar_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 2);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.organization.profileImagePath)("nzSize", ctx_r0.size);
    }
}
function CvcOrganizationAvatarComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "uppercase");
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.organization.name.charAt(0)));
    }
}
let CvcOrganizationAvatarComponent = /*@__PURE__*/ (() => {
    class CvcOrganizationAvatarComponent {
        ngOnInit() {
            if (this.organization === undefined) {
                throw new Error("Must supply an organization to use this component");
            }
            if (this.size === undefined) {
                this.size = "default";
            }
        }
    }
    CvcOrganizationAvatarComponent.ɵfac = function CvcOrganizationAvatarComponent_Factory(t) { return new (t || CvcOrganizationAvatarComponent)(); };
    CvcOrganizationAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcOrganizationAvatarComponent, selectors: [["cvc-organization-avatar"]], inputs: { organization: "organization", size: "size" }, decls: 3, vars: 2, consts: [["nz-comment-avatar", "", 3, "nzSrc", "nzSize", 4, "ngIf", "ngIfElse"], ["noAvatar", ""], ["nz-comment-avatar", "", 3, "nzSrc", "nzSize"], ["nz-comment-avatar", "", 3, "nzText"]], template: function CvcOrganizationAvatarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvcOrganizationAvatarComponent_nz_avatar_0_Template, 1, 2, "nz-avatar", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcOrganizationAvatarComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.organization.profileImagePath)("ngIfElse", _r1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__["NzAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [""] });
    return CvcOrganizationAvatarComponent;
})();


/***/ }),

/***/ "org9":
/*!*************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-home/organizations-home.module.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganizationsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsHomeModule", function() { return OrganizationsHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _app_components_organizations_organizations_table_organizations_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/organizations/organizations-table/organizations-table.module */ "Y90+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let OrganizationsHomeModule = /*@__PURE__*/ (() => {
    class OrganizationsHomeModule {
    }
    OrganizationsHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OrganizationsHomeModule });
    OrganizationsHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function OrganizationsHomeModule_Factory(t) { return new (t || OrganizationsHomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                _app_components_organizations_organizations_table_organizations_table_module__WEBPACK_IMPORTED_MODULE_4__["CvcOrganizationsTableModule"]
            ]] });
    return OrganizationsHomeModule;
})();


/***/ }),

/***/ "qwsC":
/*!********************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-events/organizations-events.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrganizationsEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsEventsComponent", function() { return OrganizationsEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/events/event-feed/event-feed.component */ "ktE2");



let OrganizationsEventsComponent = /*@__PURE__*/ (() => {
    class OrganizationsEventsComponent {
        constructor(route) {
            this.route = route;
            this.organizationId = +this.route.snapshot.params['organizationId'];
        }
    }
    OrganizationsEventsComponent.ɵfac = function OrganizationsEventsComponent_Factory(t) { return new (t || OrganizationsEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    OrganizationsEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsEventsComponent, selectors: [["cvc-organizations-events"]], decls: 1, vars: 1, consts: [["tagDisplay", "hideOrg", 3, "organizationId"]], template: function OrganizationsEventsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-event-feed", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organizationId", ctx.organizationId);
            }
        }, directives: [_components_events_event_feed_event_feed_component__WEBPACK_IMPORTED_MODULE_2__["CvcEventFeedComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return OrganizationsEventsComponent;
})();


/***/ }),

/***/ "tA9V":
/*!********************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-groups/organizations-groups.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrganizationsGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsGroupsComponent", function() { return OrganizationsGroupsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/generated/civic.apollo */ "l/kO");
/* harmony import */ var _app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/viewer/viewer.service */ "lnp5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _components_organizations_organization_card_organization_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/organizations/organization-card/organization-card.component */ "/1cd");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ "9A8T");










function OrganizationsGroupsComponent_nz_space_0_nz_row_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "cvc-organization-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organization_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("organization", organization_r3);
    }
}
function OrganizationsGroupsComponent_nz_space_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrganizationsGroupsComponent_nz_space_0_nz_row_3_Template, 3, 2, "nz-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const organizations_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", organizations_r1);
    }
}
let OrganizationsGroupsComponent = /*@__PURE__*/ (() => {
    class OrganizationsGroupsComponent {
        constructor(gql, viewerService, route) {
            this.gql = gql;
            this.viewerService = viewerService;
            this.route = route;
            const organizationId = +this.route.snapshot.params['organizationId'];
            this.queryRef = this.gql.watch({ organizationId: organizationId });
            let observable = this.queryRef.valueChanges;
            this.loading$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
            this.organizations$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'organization', 'subGroups'));
            this.viewer$ = this.viewerService.viewer$;
        }
    }
    OrganizationsGroupsComponent.ɵfac = function OrganizationsGroupsComponent_Factory(t) { return new (t || OrganizationsGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_generated_civic_apollo__WEBPACK_IMPORTED_MODULE_2__["OrganizationGroupsGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_viewer_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    OrganizationsGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrganizationsGroupsComponent, selectors: [["cvc-organizations-groups"]], decls: 2, vars: 3, consts: [["nzSize", "middle", "nzDirection", "vertical", "class", "space-align-block", 4, "ngIf"], ["nzSize", "middle", "nzDirection", "vertical", 1, "space-align-block"], ["nz-row", "", 3, "nzGutter"], [4, "ngFor", "ngForOf"], [3, "nzSpan"], [3, "organization"]], template: function OrganizationsGroupsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrganizationsGroupsComponent_nz_space_0_Template, 4, 2, "nz-space", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.organizations$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _components_organizations_organization_card_organization_card_component__WEBPACK_IMPORTED_MODULE_8__["CvcOrganizationCardComponent"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_9__["PushPipe"]], styles: [""] });
    return OrganizationsGroupsComponent;
})();


/***/ }),

/***/ "td0o":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/organizations/organizations-source-suggestions/organizations-source-suggestions.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OrganizationsSourceSuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsSourceSuggestionsComponent", function() { return OrganizationsSourceSuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/entity-table-card/entity-table-card.component */ "nJ+V");
/* harmony import */ var _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/source-suggestions/source-suggestions-table/source-suggestions-table.component */ "Ogji");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function OrganizationsSourceSuggestionsComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Organization Source Suggestions\n");
    }
}
let OrganizationsSourceSuggestionsComponent = /*@__PURE__*/ (() => {
    class OrganizationsSourceSuggestionsComponent {
        constructor(route) {
            this.route = route;
            this.userId = +this.route.snapshot.params['userId'];
        }
    }
    OrganizationsSourceSuggestionsComponent.ɵfac = function OrganizationsSourceSuggestionsComponent_Factory(t) { return new (t || OrganizationsSourceSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    OrganizationsSourceSuggestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationsSourceSuggestionsComponent, selectors: [["cvc-organizations-source-suggestions"]], decls: 4, vars: 1, consts: [[3, "cvcTitle"], ["sourceSuggestionCardTitle", ""], ["nz-icon", "", "nzType", "file-add"]], template: function OrganizationsSourceSuggestionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cvc-entity-table-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cvc-source-suggestions-table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationsSourceSuggestionsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cvcTitle", _r0);
            }
        }, directives: [_components_shared_entity_table_card_entity_table_card_component__WEBPACK_IMPORTED_MODULE_2__["CvcEntityTableCardComponent"], _components_source_suggestions_source_suggestions_table_source_suggestions_table_component__WEBPACK_IMPORTED_MODULE_3__["CvcSourceSuggestionsTableComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
    return OrganizationsSourceSuggestionsComponent;
})();


/***/ }),

/***/ "uQMG":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-card/user-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: CvcUserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcUserCardComponent", function() { return CvcUserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-avatar/user-avatar.component */ "j8OM");



function CvcUserCardComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cvc-user-avatar", 2);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r1.user)("size", 64);
    }
}
let CvcUserCardComponent = /*@__PURE__*/ (() => {
    class CvcUserCardComponent {
        ngOnInit() {
            if (this.user == undefined) {
                throw new Error("Must pass a user into user card");
            }
        }
    }
    CvcUserCardComponent.ɵfac = function CvcUserCardComponent_Factory(t) { return new (t || CvcUserCardComponent)(); };
    CvcUserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvcUserCardComponent, selectors: [["cvc-user-card"]], inputs: { user: "user" }, decls: 4, vars: 5, consts: [[3, "nzTitle", "nzExtra"], ["avatar", ""], [3, "user", "size"]], template: function CvcUserCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvcUserCardComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.user.displayName)("nzExtra", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Name: ", ctx.user.name, " Role: ", ctx.user.role, " ORCID iD: ", ctx.user.orcid, " ");
            }
        }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"], _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_2__["CvcUserAvatarComponent"]], styles: [""] });
    return CvcUserCardComponent;
})();


/***/ })

}]);