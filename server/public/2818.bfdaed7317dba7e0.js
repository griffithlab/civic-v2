"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[2818],{9390:(T,S,n)=>{n.d(S,{C:()=>m,w:()=>t});const t={featureId:void 0,variantId:void 0,significance:void 0,description:void 0,diseaseId:void 0,therapyIds:void 0,therapyInteractionType:void 0,evidenceDirection:void 0,evidenceLevel:void 0,evidenceType:void 0,molecularProfileId:void 0,phenotypeIds:void 0,rating:void 0,sourceId:void 0,variantOrigin:void 0},m={clientMutationId:void 0,fields:t,comment:void 0,organizationId:void 0}},4607:(T,S,n)=>{n.d(S,{lG:()=>f,yQ:()=>p});var t=n(2),m=n(313),o=n(8645),z=n(3742),p=function(r){return r.EVIDENCE="Evidence",r.ASSERTION="Assertion",r}(p||{});class f{constructor(d){this.formReady$=new o.x,this.formLayout="vertical",this.formMode="add",this.validStates=new Map,this.typeOption$=new o.x,this.requiresTherapy$=new o.x,this.requiresDisease$=new o.x,this.requiresAcmgCode$=new o.x,this.requiresAmpLevel$=new o.x,this.requiresClingenCode$=new o.x,this.allowsFdaApproval$=new o.x,this.getTypeOptions=()=>this.entityName==p.ASSERTION?(0,z.o6)(m.uBv).map(s=>s):(0,z.o6)(m.kqt).map(s=>s),this.getSignificanceOptions=s=>this.validStates.get(s)?.significance||[],this.getInteractionOptions=()=>(0,z.o6)(m.wkr).map(s=>s),this.isValidSignificanceOption=(s,l)=>{const y=this.validStates.get(s);return!y||y.significance.includes(l)},this.getDirectionOptions=s=>this.validStates.get(s)?.entityDirection||[],this.isValidDirectionOption=(s,l)=>{const y=this.validStates.get(s);return!y||y.entityDirection.includes(l)},this.requiresTherapy=s=>{const l=this.validStates.get(s);return void 0===l||l.requiresTherapy},this.requiresDisease=s=>{const l=this.validStates.get(s);return void 0===l||l.requiresDisease},this.requiresAcmgCodes=s=>{const l=this.validStates.get(s);return void 0===l||l.requiresAcmgCodes},this.requiresAmpLevel=s=>{const l=this.validStates.get(s);return void 0===l||l.requiresAmpLevel},this.requiresClingenCodes=s=>{const l=this.validStates.get(s);return void 0===l||l.requiresClingenCodes},this.allowsFdaApproval=s=>{const l=this.validStates.get(s);return void 0===l||l.allowsFdaApproval},this.getOptionsFromEnums=s=>0===s.length?[]:s.map(l=>({value:l,label:(0,t.E)(l)})),this.fields={},this.options={},this.enums={},this.requires={},this.entityName=d,this.pluralNames=new Map,this.pluralNames.set(p.ASSERTION,"Assertions"),this.pluralNames.set(p.EVIDENCE,"Evidence")}onDestroy(){}}},7382:(T,S,n)=>{n.d(S,{_:()=>a});var t=n(313),m=n(1791),o=n(5619),z=n(9390),p=n(4607);class a extends p.lG{constructor(){super(p.yQ.EVIDENCE);const r=z.w;this.fields={molecularProfileId$:new o.X(r.molecularProfileId),variantId$:new o.X(r.variantId),variantMolecularProfile$:new o.X(void 0),featureId$:new o.X(r.featureId),evidenceType$:new o.X(r.evidenceType),evidenceLevel$:new o.X(r.evidenceLevel),evidenceDirection$:new o.X(r.evidenceDirection),significance$:new o.X(r.significance),variantOrigin$:new o.X(r.variantOrigin),diseaseId$:new o.X(r.diseaseId),therapyIds$:new o.X(r.therapyIds),therapyInteractionType$:new o.X(r.therapyInteractionType),rating$:new o.X(r.rating),phenotypeIds$:new o.X(r.phenotypeIds),sourceId$:new o.X(r.sourceId)},this.enums={entityType$:new o.X(this.getTypeOptions()),significance$:new o.X([]),direction$:new o.X([]),interaction$:new o.X(this.getInteractionOptions())},this.requires={requiresDisease$:new o.X(!1),requiresTherapy$:new o.X(!1),requiresTherapyInteractionType$:new o.X(!1),requiresClingenCodes$:new o.X(!1),requiresAcmgCodes$:new o.X(!1),requiresAmpLevel$:new o.X(!1),allowsFdaApproval$:new o.X(!1)},this.fields.evidenceType$.pipe((0,m.t)(this,"onDestroy")).subscribe(d=>{if(!d)return Object.entries(this.requires).forEach(([s,l])=>{l.next(!1)}),this.enums.significance$.next([]),void this.enums.direction$.next([]);this.enums.significance$.next(this.getSignificanceOptions(d)),this.enums.direction$.next(this.getDirectionOptions(d)),this.requires.requiresDisease$.next(this.requiresDisease(d)),this.requires.requiresTherapy$.next(this.requiresTherapy(d)),this.requires.requiresTherapyInteractionType$.next(this.requiresTherapy(d)),this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(d)),this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(d)),this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(d))}),this.fields.therapyIds$.pipe((0,m.t)(this,"onDestroy")).subscribe(d=>{this.requires.requiresTherapyInteractionType$.next(!!d&&d.length>1)}),this.validStates.set(t.kqt.Predictive,{entityType:t.kqt.Predictive,significance:[t.y1h.Sensitivityresponse,t.y1h.Resistance,t.y1h.AdverseResponse,t.y1h.ReducedSensitivity,t.y1h.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Diagnostic,{entityType:t.kqt.Diagnostic,significance:[t.y1h.Positive,t.y1h.Negative],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Prognostic,{entityType:t.kqt.Prognostic,significance:[t.y1h.BetterOutcome,t.y1h.PoorOutcome,t.y1h.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Oncogenic,{entityType:t.kqt.Oncogenic,significance:[t.y1h.Oncogenicity,t.y1h.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Predisposing,{entityType:t.kqt.Predisposing,significance:[t.y1h.Predisposition,t.y1h.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Functional,{entityType:t.kqt.Functional,significance:[t.y1h.GainOfFunction,t.y1h.LossOfFunction,t.y1h.UnalteredFunction,t.y1h.Neomorphic,t.y1h.DominantNegative,t.y1h.Unknown],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!1,requiresTherapy:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},684:(T,S,n)=>{n.d(S,{K:()=>d});var t=n(6814),m=n(5545),o=n(9212),z=n(6223),p=n(824);const f={name:"comment-textarea",component:(()=>{class s extends m.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(y,_)=>`Comments must be at least ${_.templateOptions?.minLength} characters in length.`}},templateOptions:{rows:4}}}}return s.\u0275fac=(()=>{let l;return function(_){return(l||(l=o.n5z(s)))(_||s)}})(),s.\u0275cmp=o.Xpm({type:s,selectors:[["comment-textarea-type"]],features:[o.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(y,_){1&y&&o._UZ(0,"textarea",0),2&y&&o.Q6J("formControl",_.formControl)("formlyAttributes",_.field)},dependencies:[z.Fj,z.JJ,z.oH,m.JD,p.Zp],encapsulation:2,changeDetection:0}),s})(),wrappers:["form-field"]};var r=n(3599);let d=(()=>{class s{}return s.\u0275fac=function(y){return new(y||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[t.ez,z.UX,m.X0.forChild({types:[f]}),r.U5,p.o7]}),s})()},7570:(T,S,n)=>{function t(m,o){const z=(a,f)=>{let r;for(let d of a)if(d.fieldGroup)r=z(d.fieldGroup,f);else if(d.key===f){r=d;break}return r},p=(a,f)=>{for(let r of Object.keys(f))if(f[r]instanceof Object&&!Array.isArray(f[r]))p(a,f[r]);else{const d=z(a,r);d&&(d.defaultValue=f[r])}return a};return p(m,o)}n.d(S,{Z:()=>t})},2114:(T,S,n)=>{n.d(S,{Ct:()=>o,I9:()=>z,ux:()=>m});var t=n(1022);function m(p){return{significance:p.significance,description:p.description,diseaseId:p.disease?.id,therapyIds:p.therapies.map(a=>a.id),therapyInteractionType:p.therapyInteractionType,evidenceDirection:p.evidenceDirection,evidenceLevel:p.evidenceLevel,evidenceType:p.evidenceType,molecularProfileId:p.molecularProfile.id,phenotypeIds:p.phenotypes.map(a=>a.id),rating:p.evidenceRating,sourceId:p.source.id,variantOrigin:p.variantOrigin}}function o(p,a){let f=z(a);if(f)return{id:p,comment:f.comment,organizationId:f.organizationId,fields:f.fields}}function z(p){const a=p.fields;if(![a.molecularProfileId,a.variantOrigin,a.sourceId,a.evidenceType,a.significance,a.evidenceLevel,a.evidenceDirection,a.rating].find(r=>void 0===r))return{fields:{molecularProfileId:a.molecularProfileId,variantOrigin:a.variantOrigin,sourceId:a.sourceId,evidenceType:a.evidenceType,significance:a.significance,evidenceLevel:a.evidenceLevel,evidenceDirection:a.evidenceDirection,rating:a.rating,description:t.xt(a.description),diseaseId:t.uP(a.diseaseId),phenotypeIds:a.phenotypeIds?a.phenotypeIds:[],therapyIds:a.therapyIds?a.therapyIds:[],therapyInteractionType:t.uP(a.therapyInteractionType)},organizationId:p.organizationId,comment:p.comment}}},8287:(T,S,n)=>{n.r(S),n.d(S,{EvidenceReviseModule:()=>K});var t=n(6814),m=n(8603),o=n(2419),z=n(2524),p=n(684),a=n(95),f=n(8527),r=n(551),d=n(6254),s=n(2574),l=n(2392),y=n(4190),_=n(7921),k=n(7398),E=n(4223),e=n(9212),O=n(313),N=n(951),w=n(2606),M=n(3145),A=n(8178),u=n(8091),h=n(2616);function c(i,v){if(1&i&&(e.TgZ(0,"span",12)(1,"strong"),e._uU(2),e.qZA(),e._uU(3," Parents:"),e.qZA()),2&i){const g=e.oxw(2).ngIf;e.xp6(2),e.Oqu(g.name)}}function C(i,v){if(1&i&&(e.TgZ(0,"span",13),e._UZ(1,"cvc-molecular-profile-tag",14),e.qZA()),2&i){const g=e.oxw(2).ngIf;e.xp6(),e.Q6J("molecularProfile",g.molecularProfile)("enablePopover",!1)}}function P(i,v){1&i&&(e.TgZ(0,"nz-space",9),e.YNc(1,c,4,1,"span",10)(2,C,2,2,"span",11),e.qZA())}function $(i,v){1&i&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function L(i,v){1&i&&(e.TgZ(0,"nz-row",15)(1,"div",16),e._UZ(2,"cvc-login-prompt"),e.qZA()())}function R(i,v){if(1&i&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.YNc(2,P,3,0,"ng-template",null,2,e.W1O),e.TgZ(4,"nz-page-header",3)(5,"nz-page-header-title",4),e._uU(6," REVISE "),e._UZ(7,"i",5),e.ALo(8,"entityColor"),e._uU(9),e.qZA(),e.TgZ(10,"nz-page-header-content")(11,"div",6),e.YNc(12,$,2,0,"div",7),e.ALo(13,"ngrxPush"),e.YNc(14,L,3,0,"ng-template",null,8,e.W1O),e.qZA()()(),e.BQk()),2&i){const g=v.ngIf,I=e.MAs(3),x=e.MAs(15),D=e.oxw();e.xp6(),e.Q6J("displayName",g.name)("relationsTpl",I),e.xp6(6),e.Q6J("nzTwotoneColor",e.lcZ(8,6,"EvidenceItem")),e.xp6(2),e.hij(" ",g.name," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,8,D.isSignedIn$))("ngIfElse",x)}}let F=(()=>{class i{constructor(g,I,x){this.gql=g,this.route=I,this.viewerService=x,this.routeSub=this.route.params.subscribe(D=>{let q=this.gql.watch({evidenceId:+D.evidenceId}).valueChanges;this.loading$=q.pipe((0,E.j)("loading"),(0,_.O)(!0)),this.evidence$=q.pipe((0,E.j)("data","evidenceItem")),this.commentsTotal$=this.evidence$.pipe((0,E.j)("comments","totalCount")),this.flagsTotal$=this.evidence$.pipe((0,E.j)("flags","totalCount")),this.revisionsTotal$=this.evidence$.pipe((0,E.j)("revisions","totalCount"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,k.U)(g=>g.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}return i.\u0275fac=function(g){return new(g||i)(e.Y36(O.pHu),e.Y36(y.gz),e.Y36(N.a))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cvc-evidence-revise"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName","relationsTpl"],["evidenceRelations",""],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzDirection","horizontal"],["nz-typography","","class","label",4,"nzSpaceItem"],["class","tags",4,"nzSpaceItem"],["nz-typography","",1,"label"],[1,"tags"],[3,"molecularProfile","enablePopover"],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(g,I){1&g&&(e.YNc(0,R,16,10,"ng-container",0),e.ALo(1,"async")),2&g&&e.Q6J("ngIf",e.lcZ(1,1,I.evidence$))},dependencies:[t.O5,y.lC,d.$O,d.u9,d.u5,s.NU,s.$1,a.t3,a.SK,r.Ls,l.ZU,w.p,M.I,A.u,t.Ov,u.fM,h.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),i})();var B=n(2962),b=n(4139),U=n(1986);let X=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.ez,a.Jb,B.vh,b.H0,s.zf,U.A]}),i})();var Z=n(75);function V(i,v){if(1&i&&(e.ynx(0),e._UZ(1,"cvc-evidence-revise-form",2),e.BQk()),2&i){const g=e.oxw();e.xp6(),e.Q6J("evidenceId",g.evidenceId)}}function j(i,v){1&i&&e._uU(0,"Loading Evidence...")}const J=[{path:"",component:F,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class i{constructor(g){this.route=g,this.routeParams$=this.route.params.subscribe(I=>{this.evidenceId=+I.evidenceId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return i.\u0275fac=function(g){return new(g||i)(e.Y36(y.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cvc-evidence-suggest"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingEvidence",""],[3,"evidenceId"]],template:function(g,I){if(1&g&&e.YNc(0,V,2,1,"ng-container",0)(1,j,1,0,"ng-template",null,1,e.W1O),2&g){const x=e.MAs(2);e.Q6J("ngIf",I.evidenceId)("ngIfElse",x)}},dependencies:[t.O5,Z.r],encapsulation:2}),i})(),data:{breadcrumb:"Suggest Revision"}}]}];let W=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[y.Bz.forChild(J),X,y.Bz]}),i})(),K=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.ez,W,d.KJ,s.zf,a.Jb,r.PV,l.ZJ,s.zf,f.u,z.s,o.D,p.K,m.a]}),i})()},4139:(T,S,n)=>{n.d(S,{H0:()=>A});var t=n(9212),m=n(6814),o=n(9388);let A=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[o.vT,m.ez]}),u})()}}]);