"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[6618],{5128:(X,E,t)=>{t.d(E,{K:()=>f});var C=t(177),c=t(8524),z=t(3953),e=t(9417),y=t(1011);const m={name:"comment-textarea",component:(()=>{class l extends c.PU{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(x,s)=>`Comments must be at least ${s.templateOptions?.minLength} characters in length.`}},templateOptions:{rows:4}}}static#t=this.\u0275fac=(()=>{let x;return function(P){return(x||(x=z.xGo(l)))(P||l)}})();static#n=this.\u0275cmp=z.VBU({type:l,selectors:[["comment-textarea-type"]],features:[z.Vt3],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(s,P){1&s&&z.nrm(0,"textarea",0),2&s&&z.Y8G("formControl",P.formControl)("formlyAttributes",P.field)},dependencies:[e.me,e.BC,e.l_,c.ch,y.Sy],encapsulation:2,changeDetection:0})}return l})(),wrappers:["form-field"]};var h=t(8927);let f=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#n=this.\u0275mod=z.$C({type:l});static#e=this.\u0275inj=z.G2t({imports:[C.MD,e.X1,c.qy.forChild({types:[m]}),h.PQ,y.j]})}return l})()},7480:(X,E,t)=>{function C(c,z){const e=(n,m)=>{let h;for(let f of n)if(f.fieldGroup)h=e(f.fieldGroup,m);else if(f.key===m){h=f;break}return h},y=(n,m)=>{for(let h of Object.keys(m))if(m[h]instanceof Object&&!Array.isArray(m[h]))y(n,m[h]);else{const f=e(n,h);f&&(f.defaultValue=m[h])}return n};return y(c,z)}t.d(E,{A:()=>C})},9065:(X,E,t)=>{t.r(E),t.d(E,{AssertionsReviseModule:()=>J});var C=t(177),c=t(1188),z=t(9172),e=t(6354),y=t(4608),n=t(3953),m=t(9145),h=t(1305),f=t(3062),l=t(7685),T=t(5103),x=t(7391),s=t(5473),P=t(9765),D=t(7529),F=t(2261),$=t(3075),U=t(1774);function G(o,I){if(1&o&&(n.j41(0,"span",12)(1,"strong"),n.EFF(2),n.k0s(),n.EFF(3," Parents:"),n.k0s()),2&o){const g=n.XpG(2).ngIf;n.R7$(2),n.JRh(g.name)}}function V(o,I){if(1&o&&(n.j41(0,"span",13),n.nrm(1,"cvc-molecular-profile-tag",14),n.k0s()),2&o){const g=n.XpG(2).ngIf;n.R7$(),n.Y8G("molecularProfile",g.molecularProfile)("enablePopover",!1)}}function N(o,I){1&o&&(n.j41(0,"nz-space",9),n.DNE(1,G,4,1,"span",10)(2,V,2,2,"span",11),n.k0s())}function S(o,I){1&o&&(n.j41(0,"div"),n.nrm(1,"router-outlet"),n.k0s())}function L(o,I){1&o&&(n.j41(0,"nz-row",15)(1,"div",16),n.nrm(2,"cvc-login-prompt"),n.k0s()())}function r(o,I){if(1&o&&(n.qex(0),n.nrm(1,"cvc-section-navigation",3),n.DNE(2,N,3,0,"ng-template",null,0,n.C5r),n.j41(4,"nz-page-header",4)(5,"nz-page-header-title",5),n.EFF(6," REVISE "),n.nrm(7,"i",6),n.nI1(8,"entityColor"),n.EFF(9),n.k0s(),n.j41(10,"nz-page-header-content")(11,"div",7),n.DNE(12,S,2,0,"div",8),n.nI1(13,"ngrxPush"),n.DNE(14,L,3,0,"ng-template",null,1,n.C5r),n.k0s()()(),n.bVm()),2&o){const g=I.ngIf,p=n.sdS(3),R=n.sdS(15),w=n.XpG();n.R7$(),n.Y8G("displayName",g.name)("relationsTpl",p),n.R7$(6),n.Y8G("nzTwotoneColor",n.bMT(8,6,"Assertion")),n.R7$(2),n.SpI(" ",g.name," "),n.R7$(3),n.Y8G("ngIf",n.bMT(13,8,w.isSignedIn$))("ngIfElse",R)}}let A=(()=>{class o{constructor(g,p,R){this.gql=g,this.route=p,this.viewerService=R,this.routeSub=this.route.params.subscribe(w=>{let H=this.gql.watch({assertionId:+w.assertionId}).valueChanges;this.loading$=H.pipe((0,y.E)("loading"),(0,z.Z)(!0)),this.assertion$=H.pipe((0,y.E)("data","assertion"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,e.T)(g=>g.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}static#t=this.\u0275fac=function(p){return new(p||o)(n.rXU(m.kKs),n.rXU(c.nX),n.rXU(h.q))};static#n=this.\u0275cmp=n.VBU({type:o,selectors:[["cvc-assertions-revise-view"]],decls:2,vars:3,consts:[["assertionRelations",""],["notSignedIn",""],[4,"ngIf"],[3,"displayName","relationsTpl"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzTheme","twotone","nzType","civic-assertion",3,"nzTwotoneColor"],[1,"content"],[4,"ngIf","ngIfElse"],["nzDirection","horizontal"],["nz-typography","","class","label",4,"nzSpaceItem"],["class","tags",4,"nzSpaceItem"],["nz-typography","",1,"label"],[1,"tags"],[3,"molecularProfile","enablePopover"],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(p,R){1&p&&(n.DNE(0,r,16,10,"ng-container",2),n.nI1(1,"async")),2&p&&n.Y8G("ngIf",n.bMT(1,1,R.assertion$))},dependencies:[C.bT,c.n3,f.WB,f.k9,f.zR,l.U5,l.Dq,T.Dn,x.Di,s.z,P.n,D.Uq,D.e,F.h,C.Jj,$.R,U.L9],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]})}return o})();var a=t(5703),d=t(1912),u=t(2090);let O=(()=>{class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#n=this.\u0275mod=n.$C({type:o});static#e=this.\u0275inj=n.G2t({imports:[C.MD,D.f3,a.Ti,d.i3,l.pc,u.B]})}return o})();var j=t(5847);function B(o,I){if(1&o&&(n.qex(0),n.nrm(1,"cvc-assertion-revise-form",2),n.bVm()),2&o){const g=n.XpG();n.R7$(),n.Y8G("assertionId",g.assertionId)}}function Y(o,I){1&o&&n.EFF(0,"Loading Assertion...")}const b=[{path:"",component:A,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class o{constructor(g){this.route=g,this.routeParams$=this.route.params.subscribe(p=>{this.assertionId=+p.assertionId})}ngOnDestroy(){this.routeParams$.unsubscribe()}static#t=this.\u0275fac=function(p){return new(p||o)(n.rXU(c.nX))};static#n=this.\u0275cmp=n.VBU({type:o,selectors:[["cvc-assertions-suggest-page"]],decls:3,vars:2,consts:[["loadingAssertion",""],[4,"ngIf","ngIfElse"],[3,"assertionId"]],template:function(p,R){if(1&p&&n.DNE(0,B,2,1,"ng-container",1)(1,Y,1,0,"ng-template",null,0,n.C5r),2&p){const w=n.sdS(2);n.Y8G("ngIf",R.assertionId)("ngIfElse",w)}},dependencies:[C.bT,j.Z],encapsulation:2})}return o})(),data:{breadcrumb:"Suggest Revision"}}]}];let M=(()=>{class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#n=this.\u0275mod=n.$C({type:o});static#e=this.\u0275inj=n.G2t({imports:[c.iI.forChild(b),O,c.iI]})}return o})();var v=t(4124),W=t(5128),K=t(3688),Q=t(996),Z=t(4917);let J=(()=>{class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#n=this.\u0275mod=n.$C({type:o});static#e=this.\u0275inj=n.G2t({imports:[C.MD,M,f.ZJ,l.pc,T.Y3,x.kT,l.pc,Z.i,Q.o,v.C,W.K,D.f3,K.A]})}return o})()},5629:(X,E,t)=>{t.r(E),t.d(E,{AssertionsModule:()=>Y});var C=t(177),c=t(1188),z=t(7391),e=t(3062),y=t(7529),n=t(7481),m=t(7660),h=t(5103),f=t(4124),l=t(513),T=t(7685),x=t(4917),s=t(3953);let P=(()=>{class i{static#t=this.\u0275fac=function(v){return new(v||i)};static#n=this.\u0275mod=s.$C({type:i});static#e=this.\u0275inj=s.G2t({imports:[C.MD,c.iI,h.Y3,z.kT,e.ZJ,y.f3,n.$,l.Zw,T.pc,x.i,m.u,f.C]})}return i})();var D=t(1305),F=t(1774),$=t(6389),U=t(5930),G=t(4441),V=t(9765),N=t(3075);function S(i,b){1&i&&(s.j41(0,"button",17),s.nrm(1,"i",18),s.EFF(2," Submit New Assertion "),s.k0s())}function L(i,b){if(1&i&&(s.qex(0),s.DNE(1,S,3,0,"button",16),s.bVm()),2&i){const M=b.ngrxLet;s.R7$(),s.Y8G("ngIf",M.signedIn)}}function r(i,b){if(1&i&&s.DNE(0,L,2,1,"ng-container",15),2&i){const M=s.XpG();s.Y8G("ngrxLet",M.viewer$)}}function A(i,b){1&i&&(s.j41(0,"a",19),s.nrm(1,"i",20),s.EFF(2," View Assertion Model Docs "),s.k0s())}function a(i,b){1&i&&(s.j41(0,"a",21),s.nrm(1,"i",20),s.EFF(2," View Assertion Curation Docs "),s.k0s())}const O=[{path:"",component:(()=>{class i{constructor(){}static#t=this.\u0275fac=function(v){return new(v||i)};static#n=this.\u0275cmp=s.VBU({type:i,selectors:[["app-assertions"]],decls:1,vars:0,template:function(v,W){1&v&&s.nrm(0,"router-outlet")},dependencies:[c.n3],encapsulation:2})}return i})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class i{constructor(M){this.viewerService=M,this.viewer$=this.viewerService.viewer$}ngOnInit(){}static#t=this.\u0275fac=function(v){return new(v||i)(s.rXU(D.q))};static#n=this.\u0275cmp=s.VBU({type:i,selectors:[["assertions-home"]],decls:22,vars:6,consts:[["assertionActions",""],[3,"actionsTpl"],[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-assertion",3,"nzTwotoneColor"],["nzFlex","0 1 600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/assertions.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/assertions.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],[3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Assertions"],[4,"ngrxLet"],["routerLink","/assertions/add/submit","nz-button","","nzSize","small",4,"ngIf"],["routerLink","/assertions/add/submit","nz-button","","nzSize","small"],["nz-icon","","nzType","plus-circle"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/assertions.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/assertions.html","target","_blank","nzSize","small","nzBlock",""]],template:function(v,W){if(1&v&&(s.nrm(0,"cvc-section-navigation",1),s.DNE(1,r,1,1,"ng-template",null,0,s.C5r),s.j41(3,"nz-page-header",2)(4,"nz-page-header-content")(5,"nz-row",3)(6,"nz-col",4),s.nrm(7,"i",5),s.nI1(8,"entityColor"),s.k0s(),s.j41(9,"nz-col",6)(10,"h2"),s.EFF(11,"Assertions"),s.k0s(),s.j41(12,"p",7),s.EFF(13," A CIViC Assertion summarizes a collection of Evidence Items that cover predictive/therapeutic, diagnostic, prognostic or predisposing clinical information for a variant in a specific cancer context. "),s.k0s()(),s.j41(14,"nz-col",8)(15,"nz-space",9),s.DNE(16,A,3,0,"a",10)(17,a,3,0,"a",11),s.k0s()()(),s.j41(18,"nz-row")(19,"nz-col",12)(20,"div",13),s.nrm(21,"cvc-assertions-table",14),s.k0s()()()()()),2&v){const K=s.sdS(2);s.Y8G("actionsTpl",K),s.R7$(7),s.Y8G("nzTwotoneColor",s.bMT(8,4,"Assertion")),s.R7$(5),s.Y8G("nzEllipsisRows",2),s.R7$(7),s.Y8G("nzSpan",24)}},dependencies:[C.bT,F.Nj,c.Wk,h.Dn,z.Di,e.WB,e.zR,y.Uq,y.e,l.aO,$.c,U.p,T.U5,T.Dq,G.z,V.n,N.R],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]})}return i})(),data:{breadcrumb:"Home"}},{path:"add",loadChildren:()=>Promise.all([t.e(2076),t.e(7240)]).then(t.bind(t,7240)).then(i=>i.AssertionAddModule),data:{breadcrumb:"Add"}},{path:":assertionId",data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",loadChildren:()=>Promise.all([t.e(8414),t.e(1110),t.e(6508),t.e(6161),t.e(4514),t.e(326),t.e(262),t.e(5384),t.e(394),t.e(4705)]).then(t.bind(t,4705)).then(i=>i.AssertionsDetailModule)},{path:"revise",loadChildren:()=>Promise.resolve().then(t.bind(t,9065)).then(i=>i.AssertionsReviseModule),data:{breadcrumb:"Revise"}}]}]},{path:"revise",loadChildren:()=>Promise.all([t.e(2076),t.e(7240)]).then(t.bind(t,7240)).then(i=>i.AssertionAddModule)}];let j=(()=>{class i{static#t=this.\u0275fac=function(v){return new(v||i)};static#n=this.\u0275mod=s.$C({type:i});static#e=this.\u0275inj=s.G2t({imports:[c.iI.forChild(O),P,c.iI]})}return i})();var B=t(9065);let Y=(()=>{class i{static#t=this.\u0275fac=function(v){return new(v||i)};static#n=this.\u0275mod=s.$C({type:i});static#e=this.\u0275inj=s.G2t({imports:[C.MD,j,B.AssertionsReviseModule]})}return i})()},7481:(X,E,t)=>{t.d(E,{$:()=>L,u:()=>S});var C=t(4707),c=t(7336),z=t(177),e=t(3953),y=t(9417),n=t(1413),m=t(3726),h=t(6977),f=t(6042),l=t(7806),T=t(5930),x=t(5103),s=t(851),P=t(8203);const D=["switchElement"];function F(r,A){1&r&&e.nrm(0,"span",8)}function $(r,A){if(1&r&&(e.qex(0),e.EFF(1),e.bVm()),2&r){const a=e.XpG(2);e.R7$(),e.JRh(a.nzCheckedChildren)}}function U(r,A){if(1&r&&(e.qex(0),e.DNE(1,$,2,1,"ng-container",9),e.bVm()),2&r){const a=e.XpG();e.R7$(),e.Y8G("nzStringTemplateOutlet",a.nzCheckedChildren)}}function G(r,A){if(1&r&&(e.qex(0),e.EFF(1),e.bVm()),2&r){const a=e.XpG(2);e.R7$(),e.JRh(a.nzUnCheckedChildren)}}function V(r,A){if(1&r&&e.DNE(0,G,2,1,"ng-container",9),2&r){const a=e.XpG();e.Y8G("nzStringTemplateOutlet",a.nzUnCheckedChildren)}}let S=(()=>{class r{updateValue(a){this.isChecked!==a&&(this.isChecked=a,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(a,d,u,O,j,B){this.nzConfigService=a,this.host=d,this.ngZone=u,this.cdr=O,this.focusMonitor=j,this.directionality=B,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new n.B,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe((0,h.Q)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,m.R)(this.host.nativeElement,"click").pipe((0,h.Q)(this.destroy$)).subscribe(a=>{a.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,m.R)(this.switchElement.nativeElement,"keydown").pipe((0,h.Q)(this.destroy$)).subscribe(a=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:d}=a;d!==c.UQ&&d!==c.LE&&d!==c.t6&&d!==c.Fm||(a.preventDefault(),this.ngZone.run(()=>{d===c.UQ?this.updateValue(!1):d===c.LE?this.updateValue(!0):(d===c.t6||d===c.Fm)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,h.Q)(this.destroy$)).subscribe(a=>{a||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(a){this.isChecked=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||a,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static#t=this.\u0275fac=function(d){return new(d||r)(e.rXU(f.yx),e.rXU(e.aKT),e.rXU(e.SKi),e.rXU(e.gRc),e.rXU(s.FN),e.rXU(P.dS,8))};static#n=this.\u0275cmp=e.VBU({type:r,selectors:[["nz-switch"]],viewQuery:function(d,u){if(1&d&&e.GBs(D,7),2&d){let O;e.mGM(O=e.lsd())&&(u.switchElement=O.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",e.L39],nzDisabled:[2,"nzDisabled","nzDisabled",e.L39],nzControl:[2,"nzControl","nzControl",e.L39],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],standalone:!0,features:[e.Jv_([{provide:y.kq,useExisting:(0,e.Rfq)(()=>r),multi:!0}]),e.GFd,e.aNF],decls:9,vars:16,consts:[["switchElement",""],["uncheckTemplate",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(d,u){if(1&d&&(e.j41(0,"button",2,0)(2,"span",3),e.DNE(3,F,1,0,"span",4),e.k0s(),e.j41(4,"span",5),e.DNE(5,U,2,1,"ng-container",6)(6,V,1,1,"ng-template",null,1,e.C5r),e.k0s(),e.nrm(8,"div",7),e.k0s()),2&d){const O=e.sdS(7);e.AVh("ant-switch-checked",u.isChecked)("ant-switch-loading",u.nzLoading)("ant-switch-disabled",u.nzDisabled)("ant-switch-small","small"===u.nzSize)("ant-switch-rtl","rtl"===u.dir),e.Y8G("disabled",u.nzDisabled)("nzWaveExtraNode",!0),e.BMQ("id",u.nzId),e.R7$(3),e.Y8G("ngIf",u.nzLoading),e.R7$(2),e.Y8G("ngIf",u.isChecked)("ngIfElse",O)}},dependencies:[T.o7,T.p,x.Y3,x.Dn,z.bT,l.C,l.m],encapsulation:2,changeDetection:0})}return(0,C.Cg)([(0,f.H4)()],r.prototype,"nzSize",void 0),r})(),L=(()=>{class r{static#t=this.\u0275fac=function(d){return new(d||r)};static#n=this.\u0275mod=e.$C({type:r});static#e=this.\u0275inj=e.G2t({imports:[S]})}return r})()}}]);