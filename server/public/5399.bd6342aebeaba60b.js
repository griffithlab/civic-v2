"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5399],{5399:(N,h,e)=>{e.r(h),e.d(h,{VariantGroupsReviseModule:()=>Y});var o=e(177),m=e(3688),z=e(4124),y=e(4917),d=e(7529),l=e(5103),g=e(3062),u=e(7685),G=e(7391),s=e(1188),x=e(9172),C=e(6354),f=e(4608),t=e(3953),I=e(9145),M=e(1305),b=e(9765),P=e(2261),V=e(3075),O=e(1774);function S(n,p){1&n&&(t.j41(0,"div"),t.nrm(1,"router-outlet"),t.k0s())}function T(n,p){1&n&&(t.j41(0,"nz-row",8)(1,"div",9),t.nrm(2,"cvc-login-prompt"),t.k0s()())}function R(n,p){if(1&n&&(t.qex(0),t.nrm(1,"cvc-section-navigation",2),t.j41(2,"nz-page-header",3)(3,"nz-page-header-title",4),t.EFF(4," REVISE "),t.nrm(5,"i",5),t.nI1(6,"entityColor"),t.EFF(7),t.k0s(),t.j41(8,"nz-page-header-content")(9,"div",6),t.DNE(10,S,2,0,"div",7),t.nI1(11,"ngrxPush"),t.DNE(12,T,3,0,"ng-template",null,0,t.C5r),t.k0s()()(),t.bVm()),2&n){const r=p.ngIf,a=t.sdS(13),i=t.XpG();t.R7$(),t.Y8G("displayName",r.name),t.R7$(4),t.Y8G("nzTwotoneColor",t.bMT(6,5,"VariantGroup")),t.R7$(2),t.SpI(" ",r.name," "),t.R7$(3),t.Y8G("ngIf",t.bMT(11,7,i.isSignedIn$))("ngIfElse",a)}}let $=(()=>{class n{constructor(r,a,i){this.gql=r,this.route=a,this.viewerService=i,this.routeSub=this.route.params.subscribe(c=>{let v=this.gql.watch({variantGroupId:+c.variantGroupId}).valueChanges;this.loading$=v.pipe((0,f.E)("loading"),(0,x.Z)(!0)),this.variantGroup$=v.pipe((0,f.E)("data","variantGroup"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,C.T)(r=>r.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(I.IbX),t.rXU(s.nX),t.rXU(M.q))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["cvc-variant-groups-revise-view"]],decls:2,vars:3,consts:[["notSignedIn",""],[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzTheme","twotone","nzType","civic-variantgroup",3,"nzTwotoneColor"],[1,"content"],[4,"ngIf","ngIfElse"],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(a,i){1&a&&(t.DNE(0,R,14,9,"ng-container",1),t.nI1(1,"async")),2&a&&t.Y8G("ngIf",t.bMT(1,1,i.variantGroup$))},dependencies:[o.bT,s.n3,g.WB,g.k9,g.zR,l.Dn,b.n,P.h,d.Uq,d.e,o.Jj,V.R,O.L9],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]})}return n})();var E=e(7238);let F=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[o.MD,E.h]})}return n})();var w=e(7526);function D(n,p){if(1&n&&(t.qex(0),t.nrm(1,"cvc-variantgroup-revise-form",2),t.bVm()),2&n){const r=t.XpG();t.R7$(),t.Y8G("variantGroupId",r.variantGroupId)}}function X(n,p){1&n&&t.EFF(0,"Loading Variant Group...")}const j=[{path:"",component:$,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class n{constructor(r){this.route=r,this.routeParams$=this.route.params.subscribe(a=>{this.variantGroupId=+a.variantGroupId})}ngOnDestroy(){this.routeParams$.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(s.nX))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["cvc-variant-groups-suggest-page"]],decls:3,vars:2,consts:[["loadingVariantGroup",""],[4,"ngIf","ngIfElse"],[3,"variantGroupId"]],template:function(a,i){if(1&a&&t.DNE(0,D,2,1,"ng-container",1)(1,X,1,0,"ng-template",null,0,t.C5r),2&a){const c=t.sdS(2);t.Y8G("ngIf",i.variantGroupId)("ngIfElse",c)}},dependencies:[o.bT,w.T],encapsulation:2})}return n})(),data:{breadcrumb:"Suggest Revision"}}]}];let U=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[s.iI.forChild(j),F,s.iI]})}return n})(),Y=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[o.MD,U,g.ZJ,u.pc,l.Y3,G.kT,u.pc,y.i,z.C,m.A,d.f3]})}return n})()}}]);