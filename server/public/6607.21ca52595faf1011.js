"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[6607],{1416:(I,h,i)=>{i.d(h,{Z:()=>a});var t=i(6814),m=i(4190),s=i(5106),v=i(6683),r=i(2840),n=i(279),f=i(3903),l=i(1403),u=i(5879);let a=(()=>{class o{}return o.\u0275fac=function(C){return new(C||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[t.ez,m.Bz,r.sL,f.L,v.S,s.g,l.Q,n.s]}),o})()},6278:(I,h,i)=>{i.d(h,{l:()=>T});var t=i(655),m=i(6223),s=i(2024),v=i(3684),r=i(1565),n=i(1791),f=i(1759);const a=(0,i(7745).Z)([{wrappers:["form-layout"],props:{submitLabel:"Submit Evidence Item",showDevPanel:!1},fieldGroup:[{key:"clientMutationId",props:{hidden:!0}},{key:"fields",wrappers:["form-card"],props:{title:"New Evidence Item"},fieldGroup:[{key:"molecularProfileId",type:"molecular-profile-select",props:{required:!0,tooltip:"A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated evidence.",watchVariantMolecularProfileId:!0}},{key:"sourceId",type:"source-select",props:{required:!0}},{key:"evidenceType",type:"type-select",props:{required:!0}},{key:"evidenceDirection",type:"direction-select",props:{required:!0}},{key:"significance",type:"significance-select",props:{required:!0}},{key:"diseaseId",type:"disease-select",props:{}},{key:"therapyIds",type:"therapy-multi-select",props:{}},{key:"therapyInteractionType",type:"interaction-select",props:{}},{key:"evidenceLevel",type:"level-select",props:{required:!0}},{key:"rating",type:"rating",props:{required:!0}},{key:"variantOrigin",type:"origin-select",props:{required:!0}},{key:"phenotypeIds",type:"phenotype-multi-select",props:{}},{key:"description",type:"textarea",wrappers:["form-field"],props:{tooltip:"Your original description of evidence from published literature detailing the association or lack of association between a variant and its predictive, prognostic, diagnostic, predisposing, functional or oncogenic value. ",placeholder:"Enter an Evidence Statement",extraType:"description",description:'Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',label:"Evidence Statement",required:!0,colSpan:24}}]},{wrappers:["form-footer"],fieldGroup:[{key:"comment",type:"textarea",props:{label:"Comment",required:!1,minLength:10}},{type:"cvc-cancel-button"},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Submit Evidence Item"}}]}]}],f.C);var _,o=i(7398),y=i(2181),C=i(5676),e=i(5879),S=i(313),D=i(7473),P=i(6814),O=i(4190),A=i(3903),q=i(5545),M=i(3599),L=i(4634),x=i(6822),$=i(8091);const w=function(p){return["/evidence",p,"summary"]};function F(p,d){if(1&p&&(e._uU(0," View your new EID "),e.TgZ(1,"a",5),e._uU(2,"here"),e.qZA(),e._uU(3,". You will be redirected shortly. ")),2&p){const c=e.oxw();e.xp6(1),e.Q6J("routerLink",e.VKq(1,w,c.newEvidenceId))}}function b(p,d){if(1&p&&e._UZ(0,"nz-alert",8),2&p){e.oxw();const c=e.MAs(3);e.Q6J("nzMessage",c)}}function U(p,d){if(1&p&&(e.TgZ(0,"p")(1,"strong"),e._uU(2," Evidence for this Molecular Profile has already been curated from this Source. Please double check that your Evidence has not already been entered. "),e.qZA()(),e._UZ(3,"cvc-evidence-table",9)),2&p){const c=e.oxw(2);e.xp6(3),e.Q6J("molecularProfileId",c.selectedMpId)("sourceId",c.selectedSourceId)}}function R(p,d){if(1&p&&(e.ynx(0),e.YNc(1,b,1,1,"nz-alert",6),e.YNc(2,U,4,2,"ng-template",null,7,e.W1O),e._UZ(4,"br"),e.BQk()),2&p){const c=d.ngIf;e.xp6(1),e.Q6J("ngIf",c>0)}}function N(p,d){if(1&p&&e._UZ(0,"nz-alert",8),2&p){e.oxw();const c=e.MAs(3);e.Q6J("nzMessage",c)}}function Q(p,d){if(1&p&&(e.TgZ(0,"p")(1,"strong"),e._uU(2," This Source has been marked as fully curated by an Editor. Please double check that your intended Evidence Item does not already exist. "),e.qZA()(),e._UZ(3,"cvc-evidence-table",11)),2&p){const c=e.oxw(2);e.xp6(3),e.Q6J("sourceId",c.selectedSourceId)}}function X(p,d){if(1&p&&(e.ynx(0),e.YNc(1,N,1,1,"nz-alert",6),e.YNc(2,Q,4,1,"ng-template",null,10,e.W1O),e._UZ(4,"br"),e.BQk()),2&p){const c=d.ngIf;e.xp6(1),e.Q6J("ngIf",c)}}let T=((_=class{constructor(d,c,g,E){this.submitEvidenceGQL=d,this.existingEvidenceGQL=c,this.fullyCuratedSourceGQL=g,this.form=new m.nJ({}),this.fields=a,this.model={fields:{}},this.state=new v._,this.options={formState:this.state},this.submitEvidenceMutator=new s.U(E)}ngOnInit(){this.countQueryRef=this.existingEvidenceGQL.watch({molecularProfileId:0,sourceId:0}),this.curatedQueryRef=this.fullyCuratedSourceGQL.watch({sourceId:0}),this.existingEvidenceCount$=this.countQueryRef?.valueChanges.pipe((0,o.U)(d=>d.data?.evidenceItems?.totalCount),(0,y.h)(C.ep),(0,n.t)(this)),this.fullyCuratedSource$=this.curatedQueryRef?.valueChanges.pipe((0,o.U)(d=>d.data?.source?.fullyCurated),(0,n.t)(this))}ngAfterViewInit(){this.state.formReady$.next(!0)}onSubmit(d){const c=(0,r.I9)(d);c&&(this.mutationState=this.submitEvidenceMutator.mutate(this.submitEvidenceGQL,{input:c},void 0,g=>{this.newEvidenceId=g.submitEvidence?.evidenceItem.id,this.newEvidenceUrl=`/evidence/${this.newEvidenceId}/summary`}))}onModelChange(d){d.fields.sourceId&&d.fields.molecularProfileId?(d.fields.sourceId!=this.selectedSourceId||d.fields.molecularProfileId!=this.selectedMpId)&&(this.selectedSourceId=d.fields.sourceId,this.selectedMpId=d.fields.molecularProfileId,this.countQueryRef?.refetch({molecularProfileId:d.fields.molecularProfileId,sourceId:d.fields.sourceId})):this.countQueryRef?.refetch({molecularProfileId:0,sourceId:0}),d.fields.sourceId?d.fields.sourceId!=this.selectedSourceId&&(this.selectedSourceId=d.fields.sourceId,this.curatedQueryRef?.refetch({sourceId:this.selectedSourceId})):(this.selectedSourceId=void 0,this.curatedQueryRef?.refetch({sourceId:0}))}ngOnDestroy(){this.options.formState.onDestroy()}}).\u0275fac=function(d){return new(d||_)(e.Y36(S.WFw),e.Y36(S.vxe),e.Y36(S.s4d),e.Y36(D.Y))},_.\u0275cmp=e.Xpm({type:_,selectors:[["cvc-evidence-submit-form"]],decls:9,vars:14,consts:[["entityType","Evidence Item",3,"mutationState","redirectUrl","successMessage"],["success",""],[4,"ngIf"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[2,"width","100%",3,"form","fields","model","options","modelChange"],[3,"routerLink"],["nzType","warning",3,"nzMessage",4,"ngIf"],["duplicateEvidenceAlert",""],["nzType","warning",3,"nzMessage"],["cvcHeight","150",3,"molecularProfileId","sourceId"],["fullyCuratedAlert",""],["cvcHeight","150",3,"sourceId"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,F,4,3,"ng-template",null,1,e.W1O),e.YNc(3,R,5,1,"ng-container",2),e.ALo(4,"ngrxPush"),e.YNc(5,X,5,1,"ng-container",2),e.ALo(6,"ngrxPush"),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit(c.model)}),e.TgZ(8,"formly-form",4),e.NdJ("modelChange",function(E){return c.model=E,c.onModelChange(E)}),e.qZA()()()),2&d){const g=e.MAs(2);e.Q6J("mutationState",c.mutationState)("redirectUrl",c.newEvidenceUrl)("successMessage",g),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,10,c.existingEvidenceCount$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(6,12,c.fullyCuratedSource$)),e.xp6(2),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options)}},dependencies:[P.O5,O.rH,A.r,m._Y,m.JL,m.sg,q.T7,M.Lr,L.F,x.a,$.fM],encapsulation:2,changeDetection:0}),_);T=(0,t.gn)([(0,n.c)()],T)},1759:(I,h,i)=>{i.d(h,{C:()=>m,w:()=>t});const t={geneId:void 0,variantId:void 0,significance:void 0,description:void 0,diseaseId:void 0,therapyIds:void 0,therapyInteractionType:void 0,evidenceDirection:void 0,evidenceLevel:void 0,evidenceType:void 0,molecularProfileId:void 0,phenotypeIds:void 0,rating:void 0,sourceId:void 0,variantOrigin:void 0},m={clientMutationId:void 0,fields:t,comment:void 0,organizationId:void 0}},8475:(I,h,i)=>{i.d(h,{lG:()=>f,yQ:()=>r});var t=i(2),m=i(313),s=i(8645),v=i(3742),r=(()=>((r=r||{}).EVIDENCE="Evidence",r.ASSERTION="Assertion",r))();class f{constructor(u){this.formReady$=new s.x,this.formLayout="vertical",this.validStates=new Map,this.typeOption$=new s.x,this.requiresTherapy$=new s.x,this.requiresDisease$=new s.x,this.requiresAcmgCode$=new s.x,this.requiresAmpLevel$=new s.x,this.requiresClingenCode$=new s.x,this.allowsFdaApproval$=new s.x,this.getTypeOptions=()=>this.entityName==r.ASSERTION?(0,v.o6)(m.uBv).map(a=>a):(0,v.o6)(m.kqt).map(a=>a),this.getSignificanceOptions=a=>this.validStates.get(a)?.significance||[],this.getInteractionOptions=()=>(0,v.o6)(m.wkr).map(a=>a),this.isValidSignificanceOption=(a,o)=>{const y=this.validStates.get(a);return!y||y.significance.includes(o)},this.getDirectionOptions=a=>this.validStates.get(a)?.entityDirection||[],this.isValidDirectionOption=(a,o)=>{const y=this.validStates.get(a);return!y||y.entityDirection.includes(o)},this.requiresTherapy=a=>{const o=this.validStates.get(a);return void 0===o||o.requiresTherapy},this.requiresDisease=a=>{const o=this.validStates.get(a);return void 0===o||o.requiresDisease},this.requiresAcmgCodes=a=>{const o=this.validStates.get(a);return void 0===o||o.requiresAcmgCodes},this.requiresAmpLevel=a=>{const o=this.validStates.get(a);return void 0===o||o.requiresAmpLevel},this.requiresClingenCodes=a=>{const o=this.validStates.get(a);return void 0===o||o.requiresClingenCodes},this.allowsFdaApproval=a=>{const o=this.validStates.get(a);return void 0===o||o.allowsFdaApproval},this.getOptionsFromEnums=a=>0===a.length?[]:a.map(o=>({value:o,label:(0,t.E)(o)})),this.fields={},this.options={},this.enums={},this.requires={},this.entityName=u,this.pluralNames=new Map,this.pluralNames.set(r.ASSERTION,"Assertions"),this.pluralNames.set(r.EVIDENCE,"Evidence")}onDestroy(){}}},3684:(I,h,i)=>{i.d(h,{_:()=>n});var t=i(313),m=i(1791),s=i(5619),v=i(1759),r=i(8475);class n extends r.lG{constructor(){super(r.yQ.EVIDENCE);const l=v.w;this.fields={molecularProfileId$:new s.X(l.molecularProfileId),variantId$:new s.X(l.variantId),variantMolecularProfile$:new s.X(void 0),geneId$:new s.X(l.geneId),evidenceType$:new s.X(l.evidenceType),evidenceLevel$:new s.X(l.evidenceLevel),evidenceDirection$:new s.X(l.evidenceDirection),significance$:new s.X(l.significance),variantOrigin$:new s.X(l.variantOrigin),diseaseId$:new s.X(l.diseaseId),therapyIds$:new s.X(l.therapyIds),therapyInteractionType$:new s.X(l.therapyInteractionType),rating$:new s.X(l.rating),phenotypeIds$:new s.X(l.phenotypeIds),sourceId$:new s.X(l.sourceId)},this.enums={entityType$:new s.X(this.getTypeOptions()),significance$:new s.X([]),direction$:new s.X([]),interaction$:new s.X(this.getInteractionOptions())},this.requires={requiresDisease$:new s.X(!1),requiresTherapy$:new s.X(!1),requiresTherapyInteractionType$:new s.X(!1),requiresClingenCodes$:new s.X(!1),requiresAcmgCodes$:new s.X(!1),requiresAmpLevel$:new s.X(!1),allowsFdaApproval$:new s.X(!1)},this.fields.evidenceType$.pipe((0,m.t)(this,"onDestroy")).subscribe(u=>{if(!u)return Object.entries(this.requires).forEach(([a,o])=>{o.next(!1)}),this.enums.significance$.next([]),void this.enums.direction$.next([]);this.enums.significance$.next(this.getSignificanceOptions(u)),this.enums.direction$.next(this.getDirectionOptions(u)),this.requires.requiresDisease$.next(this.requiresDisease(u)),this.requires.requiresTherapy$.next(this.requiresTherapy(u)),this.requires.requiresTherapyInteractionType$.next(this.requiresTherapy(u)),this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(u)),this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(u)),this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(u))}),this.fields.therapyIds$.pipe((0,m.t)(this,"onDestroy")).subscribe(u=>{this.requires.requiresTherapyInteractionType$.next(!!u&&u.length>1)}),this.validStates.set(t.kqt.Predictive,{entityType:t.kqt.Predictive,significance:[t.y1h.Sensitivityresponse,t.y1h.Resistance,t.y1h.AdverseResponse,t.y1h.ReducedSensitivity,t.y1h.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Diagnostic,{entityType:t.kqt.Diagnostic,significance:[t.y1h.Positive,t.y1h.Negative],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Prognostic,{entityType:t.kqt.Prognostic,significance:[t.y1h.BetterOutcome,t.y1h.PoorOutcome,t.y1h.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Oncogenic,{entityType:t.kqt.Oncogenic,significance:[t.y1h.Oncogenicity,t.y1h.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Predisposing,{entityType:t.kqt.Predisposing,significance:[t.y1h.Predisposition,t.y1h.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Functional,{entityType:t.kqt.Functional,significance:[t.y1h.GainOfFunction,t.y1h.LossOfFunction,t.y1h.UnalteredFunction,t.y1h.Neomorphic,t.y1h.DominantNegative,t.y1h.Unknown],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!1,requiresTherapy:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},7745:(I,h,i)=>{function t(m,s){const v=(n,f)=>{let l;for(let u of n)if(u.fieldGroup)l=v(u.fieldGroup,f);else if(u.key===f){l=u;break}return l},r=(n,f)=>{for(let l of Object.keys(f))if(f[l]instanceof Object&&!Array.isArray(f[l]))r(n,f[l]);else{const u=v(n,l);u&&(u.defaultValue=f[l])}return n};return r(m,s)}i.d(h,{Z:()=>t})},1565:(I,h,i)=>{i.d(h,{Ct:()=>s,I9:()=>v,ux:()=>m});var t=i(2701);function m(r){return{significance:r.significance,description:r.description,diseaseId:r.disease?.id,therapyIds:r.therapies.map(n=>n.id),therapyInteractionType:r.therapyInteractionType,evidenceDirection:r.evidenceDirection,evidenceLevel:r.evidenceLevel,evidenceType:r.evidenceType,molecularProfileId:r.molecularProfile.id,phenotypeIds:r.phenotypes.map(n=>n.id),rating:r.evidenceRating,sourceId:r.source.id,variantOrigin:r.variantOrigin}}function s(r,n){let f=v(n);if(f)return{id:r,comment:f.comment,organizationId:f.organizationId,fields:f.fields}}function v(r){const n=r.fields;if(![n.molecularProfileId,n.variantOrigin,n.sourceId,n.evidenceType,n.significance,n.evidenceLevel,n.evidenceDirection,n.rating].find(l=>void 0===l))return{fields:{molecularProfileId:n.molecularProfileId,variantOrigin:n.variantOrigin,sourceId:n.sourceId,evidenceType:n.evidenceType,significance:n.significance,evidenceLevel:n.evidenceLevel,evidenceDirection:n.evidenceDirection,rating:n.rating,description:t.xt(n.description),diseaseId:t.uP(n.diseaseId),phenotypeIds:n.phenotypeIds?n.phenotypeIds:[],therapyIds:n.therapyIds?n.therapyIds:[],therapyInteractionType:t.uP(n.therapyInteractionType)},organizationId:r.organizationId,comment:r.comment}}}}]);