"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[775],{5749:(L,x,n)=>{n.d(x,{m:()=>p});var t=n(5e3),m=n(9808),d=n(325),y=n(8481),z=n(3610),I=n(4850),M=n(712),h=n(7484),P=n(7881),O=n(1894),C=n(3098),f=n(6550),T=n(6949);const g=function(o,i){return{displayName:o,profileImagePath:i}};function A(o,i){if(1&o&&(t._UZ(0,"cvc-user-avatar",12),t.TgZ(1,"span",13),t._uU(2),t.qZA()),2&o){const r=t.oxw().ngIf;t.Q6J("user",t.WLB(2,g,r.name,r.profileImagePath)),t.xp6(2),t.Oqu(r.name)}}function D(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=i.ngIf;t.xp6(1),t.Oqu(r)}}function Z(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"cvc-link-tag",14),t._uU(2),t.qZA(),t.BQk()),2&o){const r=t.oxw().ngIf;t.xp6(1),t.Q6J("href",r.url),t.xp6(1),t.hij(" ",r.name," ")}}function U(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-card",4),t.YNc(2,A,3,5,"ng-template",null,5,t.W1O),t.TgZ(4,"nz-row"),t.TgZ(5,"nz-col",6),t.TgZ(6,"div",7),t.TgZ(7,"p",8),t.YNc(8,D,2,1,"span",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"nz-descriptions",10),t.TgZ(10,"nz-descriptions-item",11),t.YNc(11,Z,3,2,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const r=i.ngIf,R=t.MAs(3);t.oxw();const N=t.MAs(4),K=t.MAs(6);t.xp6(1),t.Q6J("nzTitle",R),t.xp6(7),t.Q6J("ngIf",r.description)("ngIfElse",N),t.xp6(1),t.Q6J("nzColumn",2),t.xp6(2),t.Q6J("ngIf",r.url)("ngIfElse",K)}}function u(o,i){1&o&&t._uU(0," Organization has not provided a description.\n")}function B(o,i){1&o&&t._uU(0," --\n")}let _=(()=>{class o{constructor(r){this.gql=r}ngOnInit(){if(void 0===this.orgId)throw new Error("cvc-org-popover requires orgId input.");this.org$=this.gql.watch({orgId:this.orgId}).valueChanges.pipe((0,I.U)(({data:r})=>r.organization))}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(M.X5f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-organization-popover"]],inputs:{orgId:"orgId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDesc",""],["noHomepage",""],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Homepage"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],[3,"href"]],template:function(r,R){1&r&&(t.TgZ(0,"div",0),t.YNc(1,U,12,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA(),t.YNc(3,u,1,0,"ng-template",null,2,t.W1O),t.YNc(5,B,1,0,"ng-template",null,3,t.W1O)),2&r&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,R.org$)))},directives:[m.O5,h.bd,P.L,O.SK,O.t3,C.R7,C.uj,f.l],pipes:[T.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),o})();var c=n(647);function s(o,i){}function a(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,s,0,0,"ng-template",6),t.qZA(),t.BQk()),2&o){const r=t.oxw(),R=t.MAs(2);t.xp6(1),t.MGl("routerLink","/organizations/",r.org.id,""),t.xp6(1),t.Q6J("ngTemplateOutlet",R)}}function l(o,i){}function v(o,i){if(1&o&&(t.TgZ(0,"nz-tag",9),t.YNc(1,l,0,0,"ng-template",6),t.qZA()),2&o){t.oxw();const r=t.MAs(2);t.oxw();const R=t.MAs(8);t.Q6J("nzPopoverContent",r),t.xp6(1),t.Q6J("ngTemplateOutlet",R)}}function E(o,i){if(1&o&&t._UZ(0,"cvc-organization-popover",11),2&o){const r=t.oxw(3);t.Q6J("orgId",r.org.id)}}function W(o,i){if(1&o&&t.YNc(0,E,1,1,"cvc-organization-popover",10),2&o){const r=t.oxw(2);t.Q6J("ngIf",r.enablePopover)}}function S(o,i){if(1&o&&(t.YNc(0,v,2,2,"nz-tag",7),t.YNc(1,W,1,1,"ng-template",null,8,t.W1O)),2&o){const r=t.oxw(),R=t.MAs(4);t.Q6J("ngIf",r.enablePopover)("ngIfElse",R)}}function Q(o,i){}function G(o,i){if(1&o&&(t.TgZ(0,"nz-tag"),t.YNc(1,Q,0,0,"ng-template",6),t.qZA()),2&o){t.oxw();const r=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",r)}}function J(o,i){}function Y(o,i){if(1&o&&t.YNc(0,J,0,0,"ng-template",6),2&o){t.oxw();const r=t.MAs(2);t.Q6J("ngTemplateOutlet",r)}}function e(o,i){if(1&o&&(t._UZ(0,"i",12),t._uU(1)),2&o){const r=t.oxw();t.xp6(1),t.hij(" ",r.org.name,"\n")}}let p=(()=>{class o{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.org)throw new Error("cvc-org-tag requires valid TagLinkableOrganization input, none provided.")}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-organization-tag"]],inputs:{org:"org",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverContent",4,"ngIf","ngIfElse"],["orgPopover",""],["nz-popover","",3,"nzPopoverContent"],[3,"orgId",4,"ngIf"],[3,"orgId"],["nz-icon","","nzType","civic-organization","nzTheme","twotone","nzTwotoneColor","#58A0C4"]],template:function(r,R){if(1&r&&(t.YNc(0,a,3,2,"ng-container",0),t.YNc(1,S,3,2,"ng-template",null,1,t.W1O),t.YNc(3,G,2,1,"ng-template",null,2,t.W1O),t.YNc(5,Y,1,1,"ng-template",null,3,t.W1O),t.YNc(7,e,2,1,"ng-template",null,4,t.W1O)),2&r){const N=t.MAs(6);t.Q6J("ngIf",R.linked)("ngIfElse",N)}},directives:[m.O5,d.yS,m.tP,y.j,z.lU,_,c.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),o})()},8766:(L,x,n)=>{n.d(x,{P:()=>C});var t=n(9808),m=n(6042),d=n(6949),y=n(404),z=n(7525),I=n(1825),M=n(4182),h=n(1894),P=n(8144),O=n(5e3);let C=(()=>{class f{}return f.\u0275fac=function(g){return new(g||f)},f.\u0275mod=O.oAB({type:f}),f.\u0275inj=O.cJS({imports:[[t.ez,M.u5,M.UX,m.sL,y.cg,z.j,P.zf,h.Jb,d.WG,I.A]]}),f})()},3997:(L,x,n)=>{n.d(x,{m:()=>U});var t=n(5e3),m=n(6123),d=n(712),y=n(8929),z=n(7625),I=n(9169),M=n(7525),h=n(8144),P=n(9808),O=n(8227),C=n(1793),f=n(6042),T=n(2643),g=n(2683);function A(u,B){if(1&u){const _=t.EpF();t.TgZ(0,"cvc-org-selector-btn-group",6),t.NdJ("selectedOrgChange",function(s){return t.CHM(_),t.oxw(2).mostRecentOrg=s}),t.TgZ(1,"button",7),t.NdJ("click",function(){t.CHM(_);const s=t.oxw(2);return s.moderate(s.evidenceStatuses.Accepted)}),t._uU(2),t.qZA(),t.qZA()}if(2&u){const _=t.oxw(2);t.Q6J("selectedOrg",_.mostRecentOrg),t.xp6(2),t.hij("Accept ",_.entityType,"")}}function D(u,B){1&u&&(t.ynx(0),t.YNc(1,A,3,2,"cvc-org-selector-btn-group",5),t.BQk())}function Z(u,B){if(1&u){const _=t.EpF();t.TgZ(0,"cvc-org-selector-btn-group",8),t.NdJ("selectedOrgChange",function(s){return t.CHM(_),t.oxw().mostRecentOrg=s}),t.TgZ(1,"button",9),t.NdJ("click",function(){t.CHM(_);const s=t.oxw();return s.moderate(s.evidenceStatuses.Rejected)}),t._uU(2),t.qZA(),t.qZA()}if(2&u){const _=t.oxw();t.Q6J("selectedOrg",_.mostRecentOrg),t.xp6(2),t.hij("Reject ",_.entityType,"")}}let U=(()=>{class u{constructor(_,c,s){this.revertEvidenceGQL=_,this.revertAssertionGQL=c,this.networkErrorService=s,this.rejectOnly=!1,this.onModerated=new t.vpe,this.evidenceStatuses=d.RTy,this.isSubmitting=!1,this.showConfirm=!1,this.destroy$=new y.xQ,this.moderateAssertionMutator=new m.U(s),this.moderateEvidenceMutator=new m.U(s)}moderate(_){var c,s;let a;this.isSubmitting=!0,a="EvidenceItem"===this.entityType?this.moderateEvidenceMutator.mutate(this.revertEvidenceGQL,{input:{evidenceItemId:this.entityId,organizationId:null===(c=this.mostRecentOrg)||void 0===c?void 0:c.id,newStatus:_}}):this.moderateAssertionMutator.mutate(this.revertAssertionGQL,{input:{assertionId:this.entityId,organizationId:null===(s=this.mostRecentOrg)||void 0===s?void 0:s.id,newStatus:_}}),a.submitSuccess$.pipe((0,z.R)(this.destroy$)).subscribe(l=>{l&&(this.isSubmitting=!1,this.showConfirm=!1,this.onModerated.emit(_))}),a.submitError$.pipe((0,z.R)(this.destroy$)).subscribe(l=>{l&&(this.isSubmitting=!1,this.showConfirm=!1,this.onModerated.emit(l))}),a.isSubmitting$.pipe((0,z.R)(this.destroy$)).subscribe(l=>{this.isSubmitting=l})}ngOnInit(){if(void 0===this.viewer)throw new Error("Must pass in a viewer to the CvcEntitySubscriptionButtonComponent");if(void 0===this.entityId)throw new Error("Must pass in an id to the CvcEntitySubscriptionButtonComponent");if(void 0===this.entityType)throw new Error("Must pass in an entityType to the CvcEntitySubscriptionButtonComponent");this.mostRecentOrg=this.viewer.mostRecentOrg}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(_){return new(_||u)(t.Y36(d.MYm),t.Y36(d._jb),t.Y36(I.Y))},u.\u0275cmp=t.Xpm({type:u,selectors:[["cvc-moderate-entity-buttons"]],inputs:{viewer:"viewer",entityType:"entityType",entityId:"entityId",rejectOnly:"rejectOnly"},outputs:{onModerated:"onModerated"},decls:5,vars:2,consts:[[1,"center"],[3,"nzSpinning"],["nzDirection","horizontal","nzSize","large"],[4,"ngIf"],["nzDanger","","nzType","primary",3,"selectedOrg","selectedOrgChange",4,"nzSpaceItem"],[3,"selectedOrg","selectedOrgChange",4,"nzSpaceItem"],[3,"selectedOrg","selectedOrgChange"],["cvcOrgSelectorBtn","","nzType","primary","nzSize","large","nz-button","",3,"click"],["nzDanger","","nzType","primary",3,"selectedOrg","selectedOrgChange"],["cvcOrgSelectorBtn","","nzDanger","","nzType","primary","nzSize","large","nz-button","",3,"click"]],template:function(_,c){1&_&&(t.TgZ(0,"div",0),t.TgZ(1,"nz-spin",1),t.TgZ(2,"nz-space",2),t.YNc(3,D,2,0,"ng-container",3),t.YNc(4,Z,3,2,"cvc-org-selector-btn-group",4),t.qZA(),t.qZA(),t.qZA()),2&_&&(t.xp6(1),t.Q6J("nzSpinning",c.isSubmitting),t.xp6(2),t.Q6J("ngIf",!c.rejectOnly))},directives:[M.W,h.NU,P.O5,h.$1,O.q,C.m,f.ix,T.dQ,g.w],styles:["[_nghost-%COMP%]{display:block}.center[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),u})()},8525:(L,x,n)=>{n.d(x,{e:()=>_});var t=n(5e3),m=n(6123),d=n(712),y=n(8929),z=n(7625),I=n(9169),M=n(6042),h=n(2643),P=n(2683),O=n(404),C=n(647),f=n(3640),T=n(7525),g=n(8144),A=n(8227),D=n(1793);function Z(c,s){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const a=t.oxw();t.xp6(1),t.hij("Revert this ",a.entityType," to Submitted?")}}function U(c,s){if(1&c){const a=t.EpF();t.TgZ(0,"span"),t.TgZ(1,"cvc-org-selector-btn-group",8),t.NdJ("selectedOrgChange",function(v){return t.CHM(a),t.oxw(2).mostRecentOrg=v}),t.TgZ(2,"button",9),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).revert()}),t._uU(3,"Revert"),t.qZA(),t.qZA(),t.qZA()}if(2&c){const a=t.oxw(2);t.xp6(1),t.Q6J("selectedOrg",a.mostRecentOrg)}}function u(c,s){if(1&c){const a=t.EpF();t.TgZ(0,"span"),t.TgZ(1,"button",10),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).showConfirm=!1}),t._uU(2,"Cancel"),t.qZA(),t.qZA()}}function B(c,s){if(1&c&&(t.TgZ(0,"nz-spin",5),t.TgZ(1,"nz-space",6),t.YNc(2,U,4,1,"span",7),t.YNc(3,u,3,0,"span",7),t.qZA(),t.qZA()),2&c){const a=t.oxw();t.Q6J("nzSpinning",a.isSubmitting)}}let _=(()=>{class c{constructor(a,l,v){this.revertEvidenceGQL=a,this.revertAssertionGQL=l,this.networkErrorService=v,this.onReverted=new t.vpe,this.isSubmitting=!1,this.showConfirm=!1,this.destroy$=new y.xQ,this.revertAssertionMutator=new m.U(v),this.revertEvidenceMutator=new m.U(v)}revert(){var a,l;let v;this.isSubmitting=!0,v="EvidenceItem"===this.entityType?this.revertEvidenceMutator.mutate(this.revertEvidenceGQL,{input:{evidenceItemId:this.entityId,organizationId:null===(a=this.mostRecentOrg)||void 0===a?void 0:a.id,newStatus:d.RTy.Submitted}}):this.revertAssertionMutator.mutate(this.revertAssertionGQL,{input:{assertionId:this.entityId,organizationId:null===(l=this.mostRecentOrg)||void 0===l?void 0:l.id,newStatus:d.RTy.Submitted}}),v.submitSuccess$.pipe((0,z.R)(this.destroy$)).subscribe(E=>{E&&(this.isSubmitting=!1,this.showConfirm=!1,this.onReverted.emit(!0))}),v.submitError$.pipe((0,z.R)(this.destroy$)).subscribe(E=>{E&&(this.isSubmitting=!1,this.showConfirm=!1,this.onReverted.emit(E))}),v.isSubmitting$.pipe((0,z.R)(this.destroy$)).subscribe(E=>{this.isSubmitting=E})}handleConfirmModalCancel(){this.showConfirm=!1}ngOnInit(){if(void 0===this.viewer)throw new Error("Must pass in a viewer to the CvcEntitySubscriptionButtonComponent");if(void 0===this.entityId)throw new Error("Must pass in an id to the CvcEntitySubscriptionButtonComponent");if(void 0===this.entityType)throw new Error("Must pass in an entityType to the CvcEntitySubscriptionButtonComponent");this.mostRecentOrg=this.viewer.mostRecentOrg}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return c.\u0275fac=function(a){return new(a||c)(t.Y36(d.MYm),t.Y36(d._jb),t.Y36(I.Y))},c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-revert-entity-button"]],inputs:{viewer:"viewer",entityType:"entityType",entityId:"entityId"},outputs:{onReverted:"onReverted"},decls:7,vars:5,consts:[["nz-button","","nz-tooltip","Revert to Submitted","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","undo"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["confirmModalTitle",""],["confirmModalContent",""],[3,"nzSpinning"],["nzDirection","horizontal"],[4,"nzSpaceItem"],[3,"selectedOrg","selectedOrgChange"],["cvcOrgSelectorBtn","","nzType","primary","nzSize","small","nz-button","",3,"click"],["nz-button","","nzSize","small",3,"click"]],template:function(a,l){if(1&a&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return l.showConfirm=!0}),t._UZ(1,"i",1),t.qZA(),t.TgZ(2,"nz-modal",2),t.NdJ("nzVisibleChange",function(E){return l.showConfirm=E})("nzOnCancel",function(){return l.handleConfirmModalCancel()}),t.YNc(3,Z,2,1,"ng-template",null,3,t.W1O),t.YNc(5,B,4,1,"ng-template",null,4,t.W1O),t.qZA()),2&a){const v=t.MAs(4),E=t.MAs(6);t.Q6J("nzLoading",l.isSubmitting),t.xp6(2),t.Q6J("nzVisible",l.showConfirm)("nzContent",E)("nzTitle",v)("nzFooter",null)}},directives:[M.ix,h.dQ,P.w,O.SY,C.Ls,f.du,T.W,g.NU,g.$1,A.q,D.m],styles:["[_nghost-%COMP%]{display:block}"]}),c})()},694:(L,x,n)=>{n.d(x,{G:()=>f});var t=n(9808),m=n(6042),d=n(6949),y=n(647),z=n(404),I=n(3640),M=n(7525),h=n(8144),P=n(1825),O=n(4182),C=n(5e3);let f=(()=>{class T{}return T.\u0275fac=function(A){return new(A||T)},T.\u0275mod=C.oAB({type:T}),T.\u0275inj=C.cJS({imports:[[t.ez,O.u5,O.UX,m.sL,y.PV,z.cg,I.Qp,M.j,h.zf,d.WG,P.A]]}),T})()},112:(L,x,n)=>{n.d(x,{u:()=>Y});var t=n(5e3),m=n(9808),d=n(325),y=n(8481),z=n(3610),I=n(4850),M=n(712),h=n(7484),P=n(3098),O=n(8664),C=n(6906),f=n(6949);function T(e,p){if(1&e&&(t._UZ(0,"i",7),t._uU(1)),2&e){const o=t.oxw().ngIf;t.xp6(1),t.hij(" ",o.name," ")}}function g(e,p){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"cvc-variant-tag",10),t.qZA()),2&e){const o=p.$implicit;t.xp6(1),t.Q6J("enablePopover",!1)("variant",o.node)}}function A(e,p){if(1&e&&(t.TgZ(0,"nz-descriptions-item",8),t.YNc(1,g,2,2,"span",9),t.qZA()),2&e){const o=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",o.variants.edges)}}function D(e,p){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"cvc-source-tag",12),t.qZA()),2&e){const o=p.$implicit;t.xp6(1),t.Q6J("enablePopover",!1)("source",o)}}function Z(e,p){if(1&e&&(t.TgZ(0,"nz-descriptions-item",11),t.YNc(1,D,2,2,"span",9),t.qZA()),2&e){const o=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",o.sources)}}function U(e,p){if(1&e&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,T,2,1,"ng-template",null,3,t.W1O),t._uU(4),t.TgZ(5,"nz-descriptions",4),t.YNc(6,A,2,1,"nz-descriptions-item",5),t.YNc(7,Z,2,1,"nz-descriptions-item",6),t.qZA(),t.qZA(),t.BQk()),2&e){const o=p.ngIf,i=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",i),t.xp6(3),t.hij(" ",o.description," "),t.xp6(1),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",o.variants.edges.length>0),t.xp6(1),t.Q6J("ngIf",o.sources.length>0)}}let u=(()=>{class e{constructor(o){this.gql=o}ngOnInit(){if(void 0===this.variantGroupId)throw new Error("Must pass a variant group ID into the variant group popover component.");this.variantGroup$=this.gql.watch({variantGroupId:this.variantGroupId}).valueChanges.pipe((0,I.U)(({data:o})=>o.variantGroup))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(M.Zo2))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-variant-group-popover"]],inputs:{variantGroupId:"variantGroupId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Variants","nzSpan","2",4,"ngIf"],["nzTitle","Sources","nzSpan","2",4,"ngIf"],["nz-icon","","nzType","civic:variant-group"],["nzTitle","Variants","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","variant"],["nzTitle","Sources","nzSpan","2"],[3,"enablePopover","source"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,U,8,5,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.variantGroup$)))},directives:[m.O5,h.bd,P.R7,P.uj,m.sg,O.I,C.T],pipes:[f.fM],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var B=n(647);function _(e,p){}function c(e,p){if(1&e&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,_,0,0,"ng-template",6),t.qZA(),t.BQk()),2&e){const o=t.oxw(),i=t.MAs(2);t.xp6(1),t.Q6J("routerLink",o.variantgroup.link),t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function s(e,p){}function a(e,p){if(1&e&&(t.TgZ(0,"nz-tag",9),t.YNc(1,s,0,0,"ng-template",6),t.qZA()),2&e){t.oxw();const o=t.MAs(2);t.oxw();const i=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",o),t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function l(e,p){if(1&e&&t._UZ(0,"cvc-variant-group-popover",11),2&e){const o=t.oxw(3);t.Q6J("variantGroupId",o.variantgroup.id)}}function v(e,p){if(1&e&&t.YNc(0,l,1,1,"cvc-variant-group-popover",10),2&e){const o=t.oxw(2);t.Q6J("ngIf",o.enablePopover)}}function E(e,p){if(1&e&&(t.YNc(0,a,2,3,"nz-tag",7),t.YNc(1,v,1,1,"ng-template",null,8,t.W1O)),2&e){const o=t.oxw(),i=t.MAs(4);t.Q6J("ngIf",o.enablePopover)("ngIfElse",i)}}function W(e,p){}function S(e,p){if(1&e&&(t.TgZ(0,"nz-tag"),t.YNc(1,W,0,0,"ng-template",6),t.qZA()),2&e){t.oxw();const o=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function Q(e,p){}function G(e,p){if(1&e&&t.YNc(0,Q,0,0,"ng-template",6),2&e){t.oxw();const o=t.MAs(2);t.Q6J("ngTemplateOutlet",o)}}function J(e,p){if(1&e&&(t._UZ(0,"i",12),t._uU(1)),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.variantgroup.name,"\n")}}let Y=(()=>{class e{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.variantgroup)throw new Error("Must pass a LinkableVariantgroup into the variantgroup tag component")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-variant-group-tag"]],inputs:{variantgroup:"variantgroup",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"variantGroupId",4,"ngIf"],[3,"variantGroupId"],["nz-icon","","nzType","civic-variantgroup","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(o,i){if(1&o&&(t.YNc(0,c,3,2,"ng-container",0),t.YNc(1,E,3,2,"ng-template",null,1,t.W1O),t.YNc(3,S,2,1,"ng-template",null,2,t.W1O),t.YNc(5,G,1,1,"ng-template",null,3,t.W1O),t.YNc(7,J,2,1,"ng-template",null,4,t.W1O)),2&o){const r=t.MAs(6);t.Q6J("ngIf",i.linked)("ngIfElse",r)}},directives:[m.O5,d.yS,m.tP,y.j,z.lU,u,B.Ls],styles:[""],changeDetection:0}),e})()},7677:(L,x,n)=>{n.d(x,{G:()=>T});var t=n(9808),m=n(325),d=n(3610),y=n(8481),z=n(647),I=n(9779),M=n(4867),h=n(7484),P=n(3098),O=n(6949),C=n(5e3);let f=(()=>{class g{}return g.\u0275fac=function(D){return new(D||g)},g.\u0275mod=C.oAB({type:g}),g.\u0275inj=C.cJS({imports:[[t.ez,O.WG,h.vh,P.q6,I.s,M.Q]]}),g})(),T=(()=>{class g{}return g.\u0275fac=function(D){return new(D||g)},g.\u0275mod=C.oAB({type:g}),g.\u0275inj=C.cJS({imports:[[t.ez,m.Bz,d.$6,y.X,z.PV,f]]}),g})()}}]);