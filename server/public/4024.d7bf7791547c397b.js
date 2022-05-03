"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{3193:(ze,ee,o)=>{o.d(ee,{H:()=>xe});var i=o(6654),t=o(5e3),n=o(9808),s=o(325),A=o(8481),_=o(3610),c=o(4850),W=o(712),d=o(7484),E=o(647),D=o(3098),F=o(1894),L=o(8144),ne=o(6949);function b(oe,Ce){if(1&oe&&(t._UZ(0,"i",11),t._uU(1)),2&oe){const pe=t.oxw().ngIf;t.xp6(1),t.hij(" ",pe.officialName," ")}}function ie(oe,Ce){if(1&oe&&(t.TgZ(0,"nz-tag"),t._uU(1),t.qZA()),2&oe){const pe=Ce.$implicit;t.xp6(1),t.Oqu(pe)}}function j(oe,Ce){if(1&oe&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,ie,2,1,"nz-tag",13),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",pe.geneAliases)}}function V(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/flags"),t.xp6(3),t.hij(" Flags (",pe.flags.totalCount,") ")}}function Y(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",pe.revisions.totalCount,") ")}}function N(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/comments"),t.xp6(3),t.hij(" Comments (",pe.comments.totalCount,") ")}}function U(oe,Ce){if(1&oe&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,b,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,j,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,V,4,2,"a",10),t.YNc(12,Y,4,2,"a",10),t.YNc(13,N,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&oe){const pe=Ce.ngIf,Me=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",Me),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",pe.geneAliases.length>0),t.xp6(2),t.hij(" ",pe.variants.totalCount," ")}}let se=(()=>{class oe{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:pe})=>pe.gene))}}return oe.\u0275fac=function(pe){return new(pe||oe)(t.Y36(W.rJ8))},oe.\u0275cmp=t.Xpm({type:oe,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,Me){1&pe&&(t.TgZ(0,"div",0),t.YNc(1,U,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&pe&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Me.gene$)))},directives:[n.O5,d.bd,E.Ls,D.R7,D.uj,n.sg,A.j,F.SK,F.t3,L.NU,L.$1,s.yS],pipes:[ne.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),oe})();var B=o(4557);function I(oe,Ce){}function h(oe,Ce){if(1&oe&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,I,0,0,"ng-template",6),t.qZA(),t.BQk()),2&oe){const pe=t.oxw(),Me=t.MAs(2);t.xp6(1),t.Q6J("routerLink",pe.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function x(oe,Ce){}function $(oe,Ce){if(1&oe){const pe=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(H){return t.CHM(pe),t.oxw(2).itemClosed(H)}),t.YNc(1,x,0,0,"ng-template",6),t.qZA()}if(2&oe){t.oxw();const pe=t.MAs(2),Me=t.oxw(),H=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",Me.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzMode",Me.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",H)}}function O(oe,Ce){if(1&oe&&t._UZ(0,"cvc-gene-popover",10),2&oe){const pe=t.oxw(2);t.Q6J("geneId",pe.gene.id)}}function w(oe,Ce){if(1&oe&&(t.YNc(0,$,2,4,"nz-tag",7),t.YNc(1,O,1,1,"ng-template",null,8,t.W1O)),2&oe){const pe=t.oxw(),Me=t.MAs(4);t.Q6J("ngIf",pe.enablePopover)("ngIfElse",Me)}}function u(oe,Ce){}function R(oe,Ce){if(1&oe){const pe=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(H){return t.CHM(pe),t.oxw().itemClosed(H)}),t.YNc(1,u,0,0,"ng-template",6),t.qZA()}if(2&oe){const pe=t.oxw(),Me=t.MAs(8);t.Q6J("nzMode",pe.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function G(oe,Ce){}function K(oe,Ce){if(1&oe&&t.YNc(0,G,0,0,"ng-template",6),2&oe){t.oxw();const pe=t.MAs(2);t.Q6J("ngTemplateOutlet",pe)}}function _e(oe,Ce){if(1&oe&&(t.ynx(0),t._uU(1),t.ALo(2,"truncate"),t.BQk()),2&oe){const pe=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,pe.gene.name,12)," ")}}function Te(oe,Ce){if(1&oe&&t._uU(0),2&oe){const pe=t.oxw(2);t.hij(" ",pe.gene.name," ")}}function Ae(oe,Ce){if(1&oe&&(t._UZ(0,"i",12),t.YNc(1,_e,3,4,"ng-container",0),t.YNc(2,Te,1,1,"ng-template",null,13,t.W1O)),2&oe){const pe=t.MAs(3),Me=t.oxw();t.xp6(1),t.Q6J("ngIf",Me.truncateLongName)("ngIfElse",pe)}}let xe=(()=>{class oe extends i.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return oe.\u0275fac=function(pe){return new(pe||oe)},oe.\u0275cmp=t.Xpm({type:oe,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(pe,Me){if(1&pe&&(t.YNc(0,h,3,2,"ng-container",0),t.YNc(1,w,3,2,"ng-template",null,1,t.W1O),t.YNc(3,R,2,2,"ng-template",null,2,t.W1O),t.YNc(5,K,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Ae,4,2,"ng-template",null,4,t.W1O)),2&pe){const H=t.MAs(6);t.Q6J("ngIf",Me.linked)("ngIfElse",H)}},directives:[n.O5,s.yS,n.tP,A.j,_.lU,se,E.Ls],pipes:[B.W],styles:[""],changeDetection:0}),oe})()},3309:(ze,ee,o)=>{o.d(ee,{U:()=>ne});var i=o(9808),t=o(325),n=o(8481),s=o(647),A=o(3610),_=o(7484),c=o(1894),W=o(3098),d=o(8144),E=o(6949),D=o(5e3);let F=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=D.oAB({type:b}),b.\u0275inj=D.cJS({imports:[[i.ez,t.Bz,E.WG,_.vh,c.Jb,W.q6,n.X,s.PV,d.zf]]}),b})();var L=o(9444);let ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=D.oAB({type:b}),b.\u0275inj=D.cJS({imports:[[i.ez,t.Bz,n.X,A.$6,s.PV,L.s,F]]}),b})()},1912:(ze,ee,o)=>{o.d(ee,{s:()=>ne});var i=o(5e3),t=o(6042),n=o(2643),s=o(2683),A=o(3640),c=o(2160),W=o(3762),d=o(647);let E=(()=>{class b{constructor(j){this.cookies=j,this.location=function _(b){return encodeURIComponent(b).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return b.\u0275fac=function(j){return new(j||b)(i.Y36(c.N))},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(j,V){1&j&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&j&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken))},directives:[W.n_,W.AA,t.ix,n.dQ,s.w,d.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),b})();function D(b,ie){1&b&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function F(b,ie){1&b&&i._uU(0," Sign In / Sign Up\n")}function L(b,ie){if(1&b){const j=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(j),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let ne=(()=>{class b{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return b.\u0275fac=function(j){return new(j||b)},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(j,V){if(1&j&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return V.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In / Sign Up"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(N){return V.authVisible=N})("nzOnCancel",function(){return V.handleCancel()}),i.YNc(4,D,4,0,"ng-container",2),i.qZA(),i.YNc(5,F,1,0,"ng-template",null,3,i.W1O),i.YNc(7,L,2,0,"ng-template",null,4,i.W1O)),2&j){const Y=i.MAs(6),N=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",V.authVisible)("nzTitle",Y)("nzFooter",N)}},directives:[t.ix,n.dQ,s.w,A.du,A.Hf,E],styles:["[_nghost-%COMP%]{display:inline-block}"]}),b})()},1844:(ze,ee,o)=>{o.d(ee,{B:()=>W});var i=o(9808),t=o(6042),n=o(3640),s=o(3762),A=o(647),_=o(5e3);let c=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,A.PV,s.Ph,t.sL]]}),d})(),W=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Qp,c]]}),d})()},7881:(ze,ee,o)=>{o.d(ee,{L:()=>_});var i=o(5e3),t=o(9808),n=o(6699);function s(c,W){if(1&c&&i._UZ(0,"nz-avatar",2),2&c){const d=i.oxw();i.Q6J("nzSrc",d.user.profileImagePath)("nzShape",d.shape?d.shape:"circle")("nzSize",d.size)}}function A(c,W){if(1&c&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&c){const d=i.oxw();i.Q6J("nzSize",d.size)("nzText",i.lcZ(1,2,d.user.displayName.charAt(0)))}}let _=(()=>{class c{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(d,E){if(1&d&&(i.YNc(0,s,1,3,"nz-avatar",0),i.YNc(1,A,2,4,"ng-template",null,1,i.W1O)),2&d){const D=i.MAs(2);i.Q6J("ngIf",E.user.profileImagePath)("ngIfElse",D)}},directives:[t.O5,n.Dz],pipes:[t.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),c})()},5473:(ze,ee,o)=>{o.d(ee,{H:()=>s});var i=o(9808),t=o(6699),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({imports:[[i.ez,t.Rt]]}),A})()},8926:(ze,ee,o)=>{o.d(ee,{A:()=>n});var i=o(5e3),t=o(2313);let n=(()=>{class s{constructor(_){this.sanitizer=_}transform(_,c){if(!c||""==c)return _;const W=new RegExp(c,"gi"),d=_.match(W);if(!d)return _;let E=_.replace(W,`<span class='typeahead-match'>${d[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(E)}}return s.\u0275fac=function(_){return new(_||s)(i.Y36(t.H7,16))},s.\u0275pipe=i.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},9444:(ze,ee,o)=>{o.d(ee,{s:()=>s});var i=o(9808),t=o(7742),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({providers:[t.l],imports:[[i.ez]]}),A})()},7742:(ze,ee,o)=>{o.d(ee,{l:()=>n});var i=o(6530),t=o(5e3);let n=(()=>{class s{transform(_){return _?(0,i.c)(_):""}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275pipe=t.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ze,ee,o)=>{o.d(ee,{W:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){}transform(A,_=25){if(A.length>_){let W=A.slice(0,_);var c=W.lastIndexOf(" ");return W.slice(0,c)+"\u2026"}return A}}return n.\u0275fac=function(A){return new(A||n)},n.\u0275pipe=i.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ze,ee,o)=>{o.d(ee,{a:()=>d});var i=o(4850),t=o(5154),n=o(373),s=o(1059),A=o(712),_=o(5e3),c=o(520);const W={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let d=(()=>{class E{constructor(F,L){function ne(N){return!(!N||N.role!==A.i44.Admin)}function b(N){return!(!N||N.role!==A.i44.Editor&&N.role!==A.i44.Admin)}function ie(N){return!(!N||N.role!==A.i44.Curator)}function j(N){return!(!N||N.role!==A.i44.Curator&&N.role!==A.i44.Editor&&N.role!==A.i44.Admin)}function V(N){var U,se;return!(!N||N.role!==A.i44.Editor&&N.role!==A.i44.Admin||!N.mostRecentConflictOfInterestStatement||(null===(U=N.mostRecentConflictOfInterestStatement)||void 0===U?void 0:U.coiStatus)!=A.Mgx.Conflict&&(null===(se=N.mostRecentConflictOfInterestStatement)||void 0===se?void 0:se.coiStatus)!=A.Mgx.Valid)}function Y(N){if(N.mostRecentOrganizationId)return N.organizations.find(U=>U.id===N.mostRecentOrganizationId)}this.viewerBaseGQL=F,this.http=L,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(N=>({data:N.data,loading:N.loading,networkStatus:N.networkStatus})),(0,t.d)(1)),this.isLoading$=this.data$.pipe((0,n.j)("loading"),(0,s.O)(!0)),this.viewer$=this.data$.pipe((0,n.j)("data","viewer"),(0,i.U)(N=>Object.assign(Object.assign({},N),{signedIn:null!==N,signedOut:null===N,canCurate:j(N),canModerate:V(N),isAdmin:ne(N),isEditor:b(N),isCurator:ie(N),organizations:null===N?[]:N.organizations,mostRecentOrg:null===N?void 0:Y(N),invalidCoi:b(N)&&(!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement.coiStatus===A.Mgx.Expired||N.mostRecentConflictOfInterestStatement.coiStatus===A.Mgx.Missing)})),(0,s.O)(W),(0,t.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(N=>N.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(N=>N.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(N=>ne(N))),this.isEditor$=this.viewer$.pipe((0,i.U)(N=>b(N))),this.isCurator$=this.viewer$.pipe((0,i.U)(N=>ie(N))),this.canCurate$=this.viewer$.pipe((0,i.U)(N=>j(N))),this.canModerate$=this.viewer$.pipe((0,i.U)(N=>V(N)))}signOut(){this.http.get("/api/sign_out").subscribe(F=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return E.\u0275fac=function(F){return new(F||E)(_.LFG(A.Tt7),_.LFG(c.eN))},E.\u0275prov=_.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},6654:(ze,ee,o)=>{o.d(ee,{a:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(A){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(A){return new(A||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(A,_){},encapsulation:2}),n})()},915:(ze,ee,o)=>{function i(t){let n;if("NA"===t)n=["N/A"];else if("SENSITIVITYRESPONSE"===t)n=["Sensitivity","/","Response"];else{n=t.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}o.d(ee,{E:()=>i})},6530:(ze,ee,o)=>{function i(t){switch(t){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return t}}o.d(ee,{c:()=>i})},6123:(ze,ee,o)=>{o.d(ee,{U:()=>A});var i=o(8929),t=o(591),n=o(7625),s=o(537);class A{constructor(c){this.networkErrorService=c}mutate(c,W,d,E){let D=new i.xQ,F={isSubmitting$:new t.X(!1),submitSuccess$:new t.X(!1),submitError$:new t.X([]),cleanup:()=>{D.next(),D.complete()}};return F.isSubmitting$.next(!0),c.mutate(W,d).pipe((0,n.R)(D),(0,s.x)(()=>{F.isSubmitting$.next(!1)})).subscribe({next:L=>{L.data&&E&&E(L.data)},error:L=>{L.graphQLErrors.length>0?F.submitError$.next(L.graphQLErrors.map(ne=>ne.message)):L.networkError&&this.networkErrorService.networkError$.next(L.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},9180:(ze,ee,o)=>{o.d(ee,{Z:()=>n});var i=o(5e3);const t=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(_,c){1&_&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ze,ee,o)=>{o.d(ee,{R:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},822:(ze,ee,o)=>{o.d(ee,{V:()=>W});var i=o(5e3),t=o(9808),n=o(2359);function s(d,E){if(1&d&&i._UZ(0,"nz-alert",4),2&d){const D=i.oxw();i.Q6J("nzDescription",D.errors[0])}}function A(d,E){if(1&d&&i._UZ(0,"nz-alert",5),2&d){i.oxw();const D=i.MAs(3);i.Q6J("nzDescription",D)}}function _(d,E){if(1&d&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&d){const D=E.$implicit;i.xp6(1),i.Oqu(D)}}function c(d,E){if(1&d&&(i.TgZ(0,"ul",6),i.YNc(1,_,2,1,"li",7),i.qZA()),2&d){const D=i.oxw();i.xp6(1),i.Q6J("ngForOf",D.errors)}}let W=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(D){return new(D||d)},d.\u0275cmp=i.Xpm({type:d,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(D,F){1&D&&(i.YNc(0,s,1,1,"nz-alert",0),i.YNc(1,A,1,1,"nz-alert",1),i.YNc(2,c,2,1,"ng-template",2,3,i.W1O)),2&D&&(i.Q6J("ngIf",1===F.errors.length),i.xp6(1),i.Q6J("ngIf",F.errors.length>1))},directives:[t.O5,n.r,t.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),d})()},7008:(ze,ee,o)=>{o.d(ee,{B:()=>s});var i=o(9808),t=o(2359),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({imports:[[i.ez,t.L]]}),A})()},6789:(ze,ee,o)=>{o.d(ee,{_:()=>F});var i=o(9808),t=o(7484),n=o(5109),s=o(5482),A=o(6949),_=o(9552),c=o(8776),W=o(647),d=o(404),E=o(5e3);let D=(()=>{class L{}return L.\u0275fac=function(b){return new(b||L)},L.\u0275mod=E.oAB({type:L}),L.\u0275inj=E.cJS({imports:[[i.ez,A.WG,c.X0,_.j,s.cD,W.PV,d.cg,n.s]]}),L})(),F=(()=>{class L{}return L.\u0275fac=function(b){return new(b||L)},L.\u0275mod=E.oAB({type:L}),L.\u0275inj=E.cJS({imports:[[i.ez,A.WG,c.X0,t.vh,_.j,s.cD,W.PV,d.cg,D,n.s]]}),L})()},1825:(ze,ee,o)=>{o.d(ee,{A:()=>c});var i=o(9808),t=o(6042),n=o(6699),s=o(3677),A=o(8144),_=o(5e3);let c=(()=>{class W{}return W.\u0275fac=function(E){return new(E||W)},W.\u0275mod=_.oAB({type:W}),W.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Rt,s.b1,A.zf]]}),W})()},1793:(ze,ee,o)=>{o.d(ee,{m:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(A){this.el=A,this.observer=new MutationObserver(([_])=>this.disabled=_.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return n.\u0275fac=function(A){return new(A||n)(i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(A,_){2&A&&i.ekj("ant-btn-dangerous",_.nzDanger)}}),n})()},7905:(ze,ee,o)=>{o.d(ee,{yQ:()=>s,nT:()=>_});var i=o(915),t=o(712),n=o(444),s=(()=>{return(c=s||(s={})).EVIDENCE="Evidence",c.ASSERTION="Assertion",s;var c})();class _{constructor(W){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(t.uBv).map(d=>d):(0,n.o6)(t.kqt).map(d=>d),this.getSignificanceOptions=d=>{const E=this.validStates.get(d);return(null==E?void 0:E.clinicalSignificance)||[]},this.isValidSignificanceOption=(d,E)=>{const D=this.validStates.get(d);return!D||D.clinicalSignificance.includes(E)},this.getDirectionOptions=d=>{const E=this.validStates.get(d);return(null==E?void 0:E.entityDirection)||[]},this.isValidDirectionOption=(d,E)=>{const D=this.validStates.get(d);return!D||D.entityDirection.includes(E)},this.requiresDrug=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresDrug},this.requiresDisease=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresDisease},this.requiresAcmgCodes=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresAcmgCodes},this.requiresAmpLevel=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresAmpLevel},this.allowsFdaApproval=d=>{const E=this.validStates.get(d);return void 0===E||E.allowsFdaApproval},this.getOptionsFromEnums=d=>0===d.length?[]:d.map(E=>({value:E,label:(0,i.E)(E)})),this.entityName=W,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},6064:(ze,ee,o)=>{o.d(ee,{_:()=>n});var i=o(712),t=o(7905);class n extends t.nT{constructor(){super(t.yQ.EVIDENCE),this.validStates.set(i.kqt.Predictive,{entityType:i.kqt.Predictive,clinicalSignificance:[i._Aq.Sensitivityresponse,i._Aq.Resistance,i._Aq.AdverseResponse,i._Aq.ReducedSensitivity,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Diagnostic,{entityType:i.kqt.Diagnostic,clinicalSignificance:[i._Aq.Positive,i._Aq.Negative],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Prognostic,{entityType:i.kqt.Prognostic,clinicalSignificance:[i._Aq.BetterOutcome,i._Aq.PoorOutcome,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Oncogenic,{entityType:i.kqt.Oncogenic,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Predisposing,{entityType:i.kqt.Predisposing,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Functional,{entityType:i.kqt.Functional,clinicalSignificance:[i._Aq.GainOfFunction,i._Aq.LossOfFunction,i._Aq.UnalteredFunction,i._Aq.Neomorphic,i._Aq.DominantNegative,i._Aq.Unknown],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ze,ee,o)=>{o.d(ee,{E:()=>ne});var i=o(9808),t=o(4182),n=o(325),s=o(8776),A=o(304),_=o(6042),c=o(5e3),W=o(2643),d=o(2683);function E(b,ie){if(1&b){const j=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(j),c.oxw().callOnClick()}),c._uU(1," Cancel\n"),c.qZA()}}function D(b,ie){if(1&b&&(c.TgZ(0,"button",3),c._uU(1," Cancel "),c.qZA()),2&b){const j=c.oxw();c.Q6J("routerLink",j.redirectPath)}}const L={name:"cancel-button",component:(()=>{class b extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var j,V,Y,N;(null===(j=this.field.templateOptions)||void 0===j?void 0:j.onClick)?this.callOnClick=null===(V=this.field.templateOptions)||void 0===V?void 0:V.onClick:(null===(Y=this.field.templateOptions)||void 0===Y?void 0:Y.redirectPath)&&(this.redirectPath=null===(N=this.field.templateOptions)||void 0===N?void 0:N.redirectPath)}}return b.\u0275fac=function(){let ie;return function(V){return(ie||(ie=c.n5z(b)))(V||b)}}(),b.\u0275cmp=c.Xpm({type:b,selectors:[["cvc-cancel-button"]],features:[c.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(j,V){if(1&j&&(c.YNc(0,E,2,0,"button",0),c.YNc(1,D,2,1,"ng-template",null,1,c.W1O)),2&j){const Y=c.MAs(2);c.Q6J("ngIf",V.callOnClick)("ngIfElse",Y)}},directives:[i.O5,_.ix,W.dQ,d.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),b})()};let ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=c.oAB({type:b}),b.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.sL,n.Bz,A.F,s.X0.forChild({types:[L]})]]}),b})()},4623:(ze,ee,o)=>{o.d(ee,{K:()=>E});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),A=o(4182);const c={name:"comment-textarea",component:(()=>{class D extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(L,ne)=>{var b;return`Comments must be at least ${null===(b=ne.templateOptions)||void 0===b?void 0:b.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return D.\u0275fac=function(){let F;return function(ne){return(F||(F=n.n5z(D)))(ne||D)}}(),D.\u0275cmp=n.Xpm({type:D,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(L,ne){1&L&&n._UZ(0,"textarea",0),2&L&&n.Q6J("formControl",ne.formControl)("formlyAttributes",ne.field)},directives:[s.Zp,A.Fj,A.JJ,A.oH,t.VQ],styles:[""],changeDetection:0}),D})(),wrappers:["form-field"]};var W=o(4546),d=o(9139);let E=(()=>{class D{}return D.\u0275fac=function(L){return new(L||D)},D.\u0275mod=n.oAB({type:D}),D.\u0275inj=n.cJS({imports:[[i.ez,A.UX,t.X0.forChild({types:[c]}),d.u,W.U5,s.o7]]}),D})()},1605:(ze,ee,o)=>{o.d(ee,{e:()=>Pe});var i=o(9808),t=o(4182),n=o(8776),s=o(3793),A=o(304),_=o(8054),c=o(5e3),W=o(1894),d=o(4546);let E=(()=>{class re{constructor(){console.log("FormCardDirective constructed.")}}return re.\u0275fac=function(de){return new(de||re)},re.\u0275dir=c.lG2({type:re,selectors:[["",8,"cvc-form-card-control"]]}),re})();var D=o(7484),F=o(404);function L(re,Ee){1&re&&c._UZ(0,"i",7)}function ne(re,Ee){if(1&re&&(c.TgZ(0,"nz-form-label",5),c._uU(1),c.YNc(2,L,1,0,"i",6),c.qZA()),2&re){const de=c.oxw();c.Q6J("nzRequired",de.to.required&&!0!==de.to.hideRequiredMarker)("nzFor",de.id),c.xp6(1),c.hij(" ",de.to.label," "),c.xp6(1),c.Q6J("ngIf",de.to.helpText)}}function b(re,Ee){if(1&re&&c._UZ(0,"formly-validation-message",9),2&re){const de=c.oxw(2);c.Q6J("field",de.field)}}function ie(re,Ee){if(1&re&&c.YNc(0,b,1,1,"formly-validation-message",8),2&re){const de=c.oxw();c.Q6J("ngIf",de.showError)}}let j=(()=>{class re extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return re.\u0275fac=function(de){return new(de||re)},re.\u0275cmp=c.Xpm({type:re,selectors:[["form-card-wrapper"]],features:[c.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(de,Oe){if(1&de&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",0),c.TgZ(2,"nz-card",1),c.GkF(3,null,2),c.qZA(),c.YNc(5,ne,3,4,"ng-template",null,3,c.W1O),c.YNc(7,ie,1,1,"ng-template",null,4,c.W1O),c.qZA(),c.qZA()),2&de){const Q=c.MAs(6),fe=c.MAs(8);c.xp6(1),c.Q6J("nzValidateStatus",Oe.errorState)("nzErrorTip",fe),c.xp6(1),c.Q6J("nzTitle",Q)("nzExtra",fe)}},directives:[W.SK,d.Nx,W.t3,d.Fd,E,D.bd,d.iK,i.O5,F.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),re})();var V=o(647),Y=o(5109);const N={wrappers:[{name:"form-card",component:j}]};let U=(()=>{class re{}return re.\u0275fac=function(de){return new(de||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,d.U5,D.vh,V.PV,F.cg,n.X0.forChild(N),Y.s]]}),re})();var se=o(8929),B=o(7625),I=o(373),h=o(4850),x=o(712),$=o(6949),O=o(8144),w=o(3618),u=o(3193),R=o(8926);function G(re,Ee){if(1&re&&(c._UZ(0,"span",10),c.ALo(1,"highlightTypeahead")),2&re){const de=c.oxw().$implicit,Oe=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,de.label,Oe.to.searchString),c.oJD)}}function K(re,Ee){if(1&re&&(c._UZ(0,"span",12),c.ALo(1,"highlightTypeahead")),2&re){const de=c.oxw(2).$implicit,Oe=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,de.gene.geneAliases.join(", "),Oe.to.searchString),c.oJD)}}function _e(re,Ee){1&re&&(c.ynx(0),c.YNc(1,K,2,4,"span",11),c.BQk())}function Te(re,Ee){if(1&re&&(c.TgZ(0,"nz-option",7),c.TgZ(1,"nz-space"),c.YNc(2,G,2,4,"span",8),c.YNc(3,_e,2,0,"ng-container",9),c.qZA(),c.qZA()),2&re){const de=Ee.$implicit;c.Q6J("nzLabel",de.tooltip)("nzValue",de.gene),c.xp6(3),c.Q6J("ngIf",de.gene.geneAliases.length>0)}}function Ae(re,Ee){if(1&re&&(c.ynx(0),c._uU(1),c.ALo(2,"json"),c.YNc(3,Te,4,3,"nz-option",6),c.BQk()),2&re){const de=Ee.ngrxLet;c.xp6(1),c.hij(" ",c.lcZ(2,2,de)," "),c.xp6(2),c.Q6J("ngForOf",de)}}function xe(re,Ee){1&re&&c._uU(0," No gene found in CIViC that matches the string provided. ")}function oe(re,Ee){if(1&re){const de=c.EpF();c.ynx(0),c.TgZ(1,"nz-select",2,3),c.NdJ("nzOnSearch",function(Q){return c.CHM(de),c.oxw().to.onSearch(Q)}),c.YNc(3,Ae,4,4,"ng-container",4),c.qZA(),c.YNc(4,xe,1,0,"ng-template",null,5,c.W1O),c.BQk()}if(2&re){const de=c.MAs(5),Oe=c.oxw();c.xp6(1),c.Q6J("formControl",Oe.formControl)("formlyAttributes",Oe.field)("nzPlaceHolder",Oe.to.placeholder?Oe.to.placeholder:null)("nzNotFoundContent",de)("nzShowArrow",Oe.to.showArrow)("nzFilterOption",Oe.to.filterOption),c.xp6(2),c.Q6J("ngrxLet",Oe.genes$)}}function Ce(re,Ee){if(1&re&&c._UZ(0,"cvc-gene-tag",13),2&re){const de=c.oxw();c.Q6J("gene",de.formControl.value)}}const Me={name:"cvc-gene-input",component:(()=>{class re extends n.fS{constructor(de){super(),this.geneTypeaheadQuery=de,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}},this.destroy$=new se.xQ}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,B.R)(this.destroy$),(0,I.j)("data","geneTypeahead"),(0,h.U)(de=>de.map(Oe=>{let Q=Oe.geneAliases.length>0?`Aliases: ${Oe.geneAliases.join(", ")}`:"";return{value:Oe.id,tooltip:`${Oe.name} (${Oe.entrezId}) ${Q}`,label:`${Oe.name} (${Oe.entrezId})`,gene:Oe}})))}ngAfterViewInit(){this.to.onSearch=de=>{de.length<this.to.minLengthSearch||(this.to.searchString=de,this.queryRef.refetch({entrezSymbol:de}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return re.\u0275fac=function(de){return new(de||re)(c.Y36(x.Q4m))},re.\u0275cmp=c.Xpm({type:re,selectors:[["cvc-gene-input"]],features:[c.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(de,Oe){if(1&de&&(c.YNc(0,oe,6,7,"ng-container",0),c.YNc(1,Ce,1,1,"ng-template",null,1,c.W1O)),2&de){const Q=c.MAs(2);c.Q6J("ngIf",!(null!=Oe.formControl.value&&Oe.formControl.value.id))("ngIfElse",Q)}},directives:[i.O5,_.Vq,t.JJ,t.oH,n.VQ,$.eJ,i.sg,_.Ip,O.NU,O.$1,w.ZU,u.H],pipes:[i.Ts,R.A],styles:[""]}),re})()};var H=o(3309),he=o(9444);let k=(()=>{class re{}return re.\u0275fac=function(de){return new(de||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,$.WG,n.X0.forChild({types:[Me]}),_.LV,O.zf,w.ZJ,H.U,he.s]]}),re})();var ge=o(8390);const Ne={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Pe=(()=>{class re{}return re.\u0275fac=function(de){return new(de||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.LV,A.F,s.F,n.X0.forChild({types:[Ne]}),k,ge.N,U]]}),re})()},8390:(ze,ee,o)=>{o.d(ee,{N:()=>$});var i=o(9808),t=o(4182),n=o(8776),s=o(4546),A=o(1047),_=o(647),c=o(5e3),W=o(1894),d=o(8481),E=o(2683),D=o(6042),F=o(2643);function L(O,w){if(1&O){const u=c.EpF();c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",3),c.TgZ(2,"nz-tag",4),c.NdJ("click",function(G){return c.CHM(u),c.oxw().addField(G)}),c._UZ(3,"i",5),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&O){const u=c.oxw();c.xp6(1),c.Q6J("nzValidateStatus",u.errorState),c.xp6(3),c.hij(" ",u.to.addText," ")}}function ne(O,w){if(1&O){const u=c.EpF();c.TgZ(0,"nz-tag",4),c.NdJ("click",function(G){return c.CHM(u),c.oxw(4).addField(G)}),c._UZ(1,"i",5),c._uU(2),c.qZA()}if(2&O){const u=c.oxw(4);c.xp6(2),c.hij(" ",u.to.addText," ")}}function b(O,w){if(1&O&&(c.TgZ(0,"div",11),c.YNc(1,ne,3,1,"nz-tag",12),c.qZA()),2&O){const u=c.oxw(2).$implicit,R=c.oxw();c.xp6(1),c.Q6J("ngIf",0==R.to.maxCount||R.to.maxCount>u.model.length)}}function ie(O,w){if(1&O){const u=c.EpF();c.ynx(0),c.TgZ(1,"nz-tag",8),c.TgZ(2,"i",9),c.NdJ("click",function(){c.CHM(u);const G=c.oxw().index;return c.oxw().remove(G)}),c.qZA(),c.qZA(),c.YNc(3,b,2,1,"div",10),c.BQk()}if(2&O){const u=c.oxw().last;c.xp6(3),c.Q6J("ngIf",u)}}function j(O,w){if(1&O){const u=c.EpF();c.ynx(0),c.TgZ(1,"div",13),c.TgZ(2,"button",14),c.NdJ("click",function(){c.CHM(u);const G=c.oxw().index;return c.oxw().remove(G)}),c._UZ(3,"i",15),c.qZA(),c.qZA(),c.BQk()}}function V(O,w){if(1&O&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c._UZ(3,"formly-field",7),c.qZA(),c.YNc(4,ie,4,1,"ng-container",1),c.YNc(5,j,4,0,"ng-container",1),c.qZA(),c.qZA()),2&O){const u=w.$implicit,R=w.index;c.xp6(2),c.Q6J("ngClass",u.model[R]?"selected-field-col":"default-field-col"),c.xp6(1),c.Q6J("field",u),c.xp6(1),c.Q6J("ngIf",u.model[R]),c.xp6(1),c.Q6J("ngIf",!u.model[R])}}const Y=function(O){return{hidden:O}},U={name:"multi-field",component:(()=>{class O extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(u){u&&u.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return O.\u0275fac=function(u){return new(u||O)},O.\u0275cmp=c.Xpm({type:O,selectors:[["cvc-multi-field-type"]],features:[c.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(u,R){1&u&&(c.TgZ(0,"div",0),c.YNc(1,L,5,2,"nz-form-item",1),c.YNc(2,V,6,4,"nz-form-item",2),c.qZA()),2&u&&(c.Q6J("ngClass",c.VKq(3,Y,!0===R.to.hidden)),c.xp6(1),c.Q6J("ngIf",0===(null==R.field.fieldGroup?null:R.field.fieldGroup.length)),c.xp6(1),c.Q6J("ngForOf",R.field.fieldGroup))},directives:[i.mk,i.O5,W.SK,s.Nx,W.t3,s.Fd,d.j,_.Ls,E.w,i.sg,n.cw,D.ix,F.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),O})()};function se(O,w){if(1&O&&c._UZ(0,"formly-validation-message",3),2&O){const u=c.oxw();c.Q6J("field",u.field)}}const I={name:"cvc-field-errors",component:(()=>{class O extends n.n2{get errorState(){return this.showError?"error":""}}return O.\u0275fac=function(){let w;return function(R){return(w||(w=c.n5z(O)))(R||O)}}(),O.\u0275cmp=c.Xpm({type:O,selectors:[["cvc-field-errors-wrapper"]],features:[c.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(u,R){if(1&u&&(c.TgZ(0,"nz-form-control",0),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.GkF(3,null,1),c.YNc(5,se,1,1,"ng-template",null,2,c.W1O),c.qZA()),2&u){const G=c.MAs(6);c.Q6J("nzValidateStatus",R.errorState)("nzErrorTip",G),c.xp6(2),c.hij("errorState: ",R.errorState,"")}},directives:[W.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),O})()};let h=(()=>{class O{}return O.\u0275fac=function(u){return new(u||O)},O.\u0275mod=c.oAB({type:O}),O.\u0275inj=c.cJS({imports:[[i.ez,t.UX,s.U5,n.X0.forChild({wrappers:[I]})]]}),O})();var x=o(5109);let $=(()=>{class O{}return O.\u0275fac=function(u){return new(u||O)},O.\u0275mod=c.oAB({type:O}),O.\u0275inj=c.cJS({imports:[[i.ez,t.u5,n.X0.forChild({types:[U]}),t.UX,h,s.U5,A.o7,_.PV,D.sL,x.s,d.X]]}),O})()},7462:(ze,ee,o)=>{o.d(ee,{o:()=>W});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),A=o(4182);const c={name:"cvc-textarea",component:(()=>{class d extends t.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return d.\u0275fac=function(){let E;return function(F){return(E||(E=n.n5z(d)))(F||d)}}(),d.\u0275cmp=n.Xpm({type:d,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(D,F){1&D&&n._UZ(0,"textarea",0),2&D&&n.Q6J("formControl",F.formControl)("formlyAttributes",F.field)("nzAutosize",F.to.autosize)("placeholder",F.to.placeholder)},directives:[s.Zp,A.Fj,s.rh,A.JJ,A.oH,t.VQ],styles:[""],changeDetection:0}),d})(),wrappers:["form-field"]};let W=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[[i.ez,A.u5,A.UX,t.X0.forChild({types:[c]}),s.o7]]}),d})()},5472:(ze,ee,o)=>{o.d(ee,{r:()=>F});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),A=o(5482),_=o(1894),c=o(5109),W=o(6789),d=o(5e3);const D={wrappers:[{name:"form-container",component:(()=>{class L extends n.n2{}return L.\u0275fac=function(){let ne;return function(ie){return(ne||(ne=d.n5z(L)))(ie||L)}}(),L.\u0275cmp=d.Xpm({type:L,selectors:[["cvc-form-container-wrapper"]],features:[d.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(b,ie){1&b&&(d.TgZ(0,"nz-row"),d.TgZ(1,"nz-col",0),d.TgZ(2,"nz-card",1),d.GkF(3,null,2),d.qZA(),d.qZA(),d.qZA()),2&b&&(d.xp6(2),d.Q6J("nzTitle",ie.to.label))},directives:[_.SK,_.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),L})()}]};let F=(()=>{class L{}return L.\u0275fac=function(b){return new(b||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild(D),_.Jb,s.vh,A.cD,W._,c.s]]}),L})()},7695:(ze,ee,o)=>{o.d(ee,{C:()=>I});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),A=o(5482),_=o(1894),c=o(5109),W=o(6789),d=o(5e3),E=o(9552),D=o(647),F=o(404);function L(h,x){1&h&&d._UZ(0,"div",9),2&h&&d.Q6J("innerHtml",x.ngIf,d.oJD)}function ne(h,x){1&h&&(d.TgZ(0,"div",10),d._uU(1,"Help not available for this field."),d.qZA())}function b(h,x){if(1&h&&(d.TgZ(0,"nz-collapse-panel",6),d.YNc(1,L,1,1,"div",7),d.YNc(2,ne,2,0,"ng-template",null,8,d.W1O),d.qZA()),2&h){const $=x.ngIf,O=d.MAs(3),w=d.oxw().$implicit,u=d.MAs(3);d.Q6J("nzHeader",$)("nzActive",w.templateOptions.hasFocus)("nzExtra",u),d.xp6(1),d.Q6J("ngIf",null==w.templateOptions?null:w.templateOptions.helpText)("ngIfElse",O)}}function ie(h,x){if(1&h&&d._UZ(0,"formly-validation-message",14),2&h){const $=d.oxw(4).$implicit;d.Q6J("field",$)}}function j(h,x){if(1&h&&(d.ynx(0),d._UZ(1,"i",12),d.YNc(2,ie,1,1,"ng-template",null,13,d.W1O),d.BQk()),2&h){const $=d.MAs(3);d.xp6(1),d.Q6J("nzTooltipTitle",$)}}function V(h,x){if(1&h&&(d.ynx(0),d.YNc(1,j,4,1,"ng-container",11),d.BQk()),2&h){const $=x.ngIf;d.xp6(1),d.Q6J("ngIf","INVALID"===$)}}function Y(h,x){if(1&h&&(d.YNc(0,V,2,1,"ng-container",11),d.ALo(1,"ngrxPush")),2&h){const $=d.oxw().$implicit;d.Q6J("ngIf",d.lcZ(1,1,$.formControl.statusChanges))}}function N(h,x){if(1&h&&(d.ynx(0),d.YNc(1,b,4,5,"nz-collapse-panel",4),d.YNc(2,Y,2,3,"ng-template",null,5,d.W1O),d.BQk()),2&h){const $=x.$implicit;d.xp6(1),d.Q6J("ngIf",null==$.templateOptions?null:$.templateOptions.label)}}let U=(()=>{class h{constructor(){}ngOnInit(){}}return h.\u0275fac=function($){return new($||h)},h.\u0275cmp=d.Xpm({type:h,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function($,O){1&$&&(d.TgZ(0,"nz-affix",0),d.TgZ(1,"nz-card",1),d.TgZ(2,"nz-collapse",2),d.YNc(3,N,4,1,"ng-container",3),d.qZA(),d.qZA(),d.qZA()),2&$&&(d.Q6J("nzOffsetTop",0)("nzTarget",O.affixTo),d.xp6(2),d.Q6J("nzBordered",!1),d.xp6(1),d.Q6J("ngForOf",O.fieldGroup))},directives:[E.$,s.bd,A.yH,i.sg,i.O5,A.Zv,D.Ls,F.SY,n.u_],pipes:[t.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),h})();const B={name:"form-info",component:(()=>{class h extends n.n2{}return h.\u0275fac=function(){let x;return function(O){return(x||(x=d.n5z(h)))(O||h)}}(),h.\u0275cmp=d.Xpm({type:h,selectors:[["cvc-form-info-wrapper"]],features:[d.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function($,O){if(1&$&&(d.TgZ(0,"nz-row",0),d.TgZ(1,"nz-col",1),d.TgZ(2,"nz-card",2),d.GkF(3,null,3),d.qZA(),d.qZA(),d.TgZ(5,"nz-col",1),d.TgZ(6,"div",null,4),d._UZ(8,"cvc-form-info-card",5),d.qZA(),d.qZA(),d.qZA()),2&$){const w=d.MAs(7);d.xp6(1),d.Q6J("nzSpan",16),d.xp6(1),d.Q6J("nzTitle",O.to.label),d.xp6(3),d.Q6J("nzSpan",8),d.xp6(3),d.Q6J("fieldGroup",O.field.fieldGroup)("affixTo",w)}},directives:[_.SK,_.t3,s.bd,U],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),h})()};let I=(()=>{class h{}return h.\u0275fac=function($){return new($||h)},h.\u0275mod=d.oAB({type:h}),h.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild({wrappers:[B]}),_.Jb,s.vh,A.cD,W._,c.s]]}),h})()},8785:(ze,ee,o)=>{o.d(ee,{t:()=>se});var i=o(5e3),t=o(6123),n=o(8929),s=o(7625),A=o(712),_=o(9169),c=o(7484),W=o(9808),d=o(2359),E=o(1894),D=o(4546),F=o(822),L=o(7525),ne=o(3868),b=o(4182),ie=o(6042),j=o(2643),V=o(2683);function Y(B,I){1&B&&i._UZ(0,"nz-alert",7)}function N(B,I){if(1&B&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&B){const h=i.oxw();i.xp6(1),i.Q6J("errors",h.errorMessages)}}function U(B,I){if(1&B){const h=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function($){return i.CHM(h),i.oxw().coiText=$}),i.qZA(),i.qZA()}if(2&B){const h=i.oxw();i.xp6(1),i.Q6J("ngModel",h.coiText)}}let se=(()=>{class B{constructor(h,x){this.updateCoiGql=h,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new t.U(x)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let x=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});x.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe($=>{$&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),x.submitError$.pipe((0,s.R)(this.destroy$)).subscribe($=>{$&&(this.errorMessages=$,this.success=!1)}),x.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe($=>{this.loading=$})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return B.\u0275fac=function(h){return new(h||B)(i.Y36(A.IP1),i.Y36(_.Y))},B.\u0275cmp=i.Xpm({type:B,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(h,x){1&h&&(i.TgZ(0,"nz-card"),i.YNc(1,Y,1,0,"nz-alert",0),i.YNc(2,N,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(O){return x.coiStatus=O}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,U,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return x.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&h&&(i.xp6(1),i.Q6J("ngIf",x.success),i.xp6(1),i.Q6J("ngIf",x.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",x.loading),i.xp6(2),i.Q6J("ngModel",x.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===x.coiStatus),i.xp6(2),i.Q6J("disabled",x.loading||"coiPresent"===x.coiStatus&&(void 0===x.coiText||x.coiText.length<10)))},directives:[c.bd,W.O5,d.r,E.SK,D.Nx,F.V,L.W,ne.Dg,b.JJ,b.On,ne.Of,b.Fj,ie.ix,j.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),B})()},330:(ze,ee,o)=>{o.d(ee,{e:()=>F});var i=o(9808),t=o(4182),n=o(6949),s=o(7484),A=o(2359),_=o(4546),c=o(7008),W=o(3868),d=o(7525),E=o(6042),D=o(5e3);let F=(()=>{class L{}return L.\u0275fac=function(b){return new(b||L)},L.\u0275mod=D.oAB({type:L}),L.\u0275inj=D.cJS({imports:[[i.ez,t.u5,_.U5,t.UX,n.WG,s.vh,A.L,W.aF,E.sL,d.j,c.B]]}),L})()},3434:(ze,ee,o)=>{o.d(ee,{G:()=>se});var i=o(4182),t=o(8929),n=o(6064),s=o(6123),A=o(7625),_=o(5e3),c=o(712),W=o(9169),d=o(325),E=o(7525),D=o(4546),F=o(9808),L=o(8776),ne=o(1894),b=o(822),ie=o(2359);function j(B,I){1&B&&_.GkF(0)}function V(B,I){if(1&B&&(_.TgZ(0,"nz-form-item"),_._UZ(1,"cvc-form-errors-alert",6),_.qZA()),2&B){const h=_.oxw(2);_.xp6(1),_.Q6J("errors",h.errorMessages)}}function Y(B,I){if(1&B&&(_.TgZ(0,"p"),_._uU(1,"View "),_.TgZ(2,"a",10),_._uU(3,"its details"),_.qZA(),_._uU(4,"."),_.qZA()),2&B){const h=_.oxw(3);_.xp6(2),_.MGl("routerLink","/variants/",h.newId,"/summary")}}function N(B,I){if(1&B&&(_.ynx(0),_._UZ(1,"nz-alert",7),_.YNc(2,Y,5,1,"ng-template",8,9,_.W1O),_.BQk()),2&B){const h=_.MAs(3),x=_.oxw(2);_.xp6(1),_.Q6J("nzMessage",x.isNew?"Variant Created":"Variant Already Exists")("nzDescription",h)}}function U(B,I){if(1&B&&(_.YNc(0,V,2,1,"nz-form-item",5),_.YNc(1,N,4,2,"ng-container",5)),2&B){const h=_.oxw();_.Q6J("ngIf",h.errorMessages.length>0),_.xp6(1),_.Q6J("ngIf",h.success)}}let se=(()=>{class B{constructor(h,x,$){this.submitVariantGQL=h,this.networkErrorService=x,this.route=$,this.destroy$=new t.xQ,this.formGroup=new i.cw({}),this.formOptions={formState:new n._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(x),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(h){let x=null==h?void 0:h.fields.gene[0].id,$=null==h?void 0:h.fields.variant;if(x&&$){let w=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:x,name:$},{},u=>{this.newId=u.addVariant.variant.id,this.isNew=u.addVariant.new});w.submitSuccess$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{u&&(this.success=!0)}),w.submitError$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{u&&(this.errorMessages=u,this.success=!1)}),w.isSubmitting$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{this.loading=u})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return B.\u0275fac=function(h){return new(h||B)(_.Y36(c.LUc),_.Y36(W.Y),_.Y36(d.gz))},B.\u0275cmp=_.Xpm({type:B,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(h,x){if(1&h&&(_.TgZ(0,"nz-spin",0),_.TgZ(1,"form",1),_.NdJ("ngSubmit",function(){return x.submitVariant(x.formModel)}),_.YNc(2,j,1,0,"ng-container",2),_.TgZ(3,"formly-form",3),_.NdJ("modelChange",function(O){return x.formModel=O}),_.qZA(),_.qZA(),_.qZA(),_.YNc(4,U,2,2,"ng-template",null,4,_.W1O)),2&h){const $=_.MAs(5);_.Q6J("nzSpinning",x.loading),_.xp6(1),_.Q6J("formGroup",x.formGroup),_.xp6(1),_.Q6J("ngTemplateOutlet",$),_.xp6(1),_.Q6J("form",x.formGroup)("fields",x.formFields)("model",x.formModel)("options",x.formOptions)}},directives:[E.W,i._Y,i.JL,D.Lr,i.sg,F.tP,L.T7,F.O5,ne.SK,D.Nx,b.V,ie.r,d.yS],styles:[""]}),B})()},7058:(ze,ee,o)=>{o.d(ee,{e:()=>G});var i=o(9808),t=o(4623),n=o(4375),s=o(7008),A=o(7695),_=o(8390),c=o(7462),W=o(8776),d=o(5109),E=o(2359),D=o(6042),F=o(4546),L=o(1894),ne=o(4182),b=o(325),ie=o(1605),j=o(7525),V=o(5472),Y=o(4889),N=o(7484),U=o(8144),se=o(3618),B=o(5e3),I=o(9180),h=o(2643),x=o(1793),$=o(2683);const w={name:"submit-button",component:(()=>{class K extends W.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275cmp=B.Xpm({type:K,selectors:[["cvc-submit-button-type"]],features:[B.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Te,Ae){1&Te&&(B.TgZ(0,"cvc-form-buttons"),B.TgZ(1,"button",0),B._uU(2),B.qZA(),B.qZA()),2&Te&&(B.xp6(1),B.Q6J("disabled",!Ae.form.valid),B.xp6(1),B.hij(" ",Ae.to.submitLabel," "))},directives:[I.Z,D.ix,h.dQ,x.m,$.w],styles:[""],changeDetection:0}),K})()};var u=o(1825);let R=(()=>{class K{}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275mod=B.oAB({type:K}),K.\u0275inj=B.cJS({imports:[[i.ez,ne.UX,W.X0.forChild({types:[w]}),D.sL,n.R,u.A]]}),K})(),G=(()=>{class K{}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275mod=B.oAB({type:K}),K.\u0275inj=B.cJS({imports:[[i.ez,b.Bz,ne.UX,d.s,F.U5,E.L,L.Jb,D.sL,j.j,N.vh,U.zf,se.ZJ,W.X0,s.B,n.R,A.C,_.N,c.o,t.K,ie.e,V.r,Y.E,R,d.s]]}),K})()},712:(ze,ee,o)=>{o.d(ee,{ti:()=>si,$G1:()=>gr,iGM:()=>sr,KNk:()=>zr,T97:()=>Tr,RMv:()=>Ur,LUc:()=>Wr,iwm:()=>ve,Vr2:()=>g,A94:()=>Ls,mdl:()=>me,Gbq:()=>go,bgg:()=>er,u4i:()=>ye,ejK:()=>Fs,uBv:()=>Re,td:()=>ho,Tq1:()=>Mo,q8c:()=>Jo,WRV:()=>Oi,IZ6:()=>Ni,qf4:()=>Bi,Rdc:()=>Ji,gtM:()=>Br,fpJ:()=>Fr,k2T:()=>Lr,UWf:()=>Ei,cMj:()=>Rs,UIR:()=>zo,E8d:()=>$e,P_b:()=>Co,Mgx:()=>Ge,iST:()=>To,Kk:()=>Eo,OfU:()=>ke,kQf:()=>hi,l4w:()=>Cs,JQ3:()=>Rr,db2:()=>sa,h01:()=>Je,wg3:()=>Bs,k7O:()=>Oo,kv3:()=>hr,R8w:()=>qe,GB2:()=>Us,Zyn:()=>rt,dUU:()=>No,kq9:()=>ct,vRc:()=>Cr,Ud2:()=>Lo,dwB:()=>Qs,GYx:()=>pr,AO2:()=>Ze,YMi:()=>Fo,BTF:()=>Ro,wJ2:()=>ot,eY8:()=>Uo,_Aq:()=>ut,pHu:()=>Vs,tI1:()=>st,FId:()=>es,Q_P:()=>Kr,Sx0:()=>y,Ybm:()=>Bo,Cp0:()=>q,RTy:()=>P,sBY:()=>Ws,kqt:()=>le,Zhw:()=>Er,B0s:()=>is,rzy:()=>Qo,OIL:()=>Vo,BQZ:()=>Se,sfv:()=>Fe,TNk:()=>Js,rJ8:()=>Wo,FOU:()=>cs,Q4m:()=>Or,Fvz:()=>mt,cCu:()=>Ks,_jb:()=>Ti,MYm:()=>Ci,oRL:()=>gt,lfy:()=>Mr,fow:()=>ft,X5f:()=>Xo,WOS:()=>Xs,Lr0:()=>ea,Del:()=>na,xlL:()=>ht,io:()=>ei,WGV:()=>ia,OHm:()=>ni,lYz:()=>vt,FKQ:()=>Nr,B97:()=>ii,mII:()=>cr,ghc:()=>Ko,NQC:()=>zt,JDX:()=>_t,VZq:()=>ci,EwB:()=>ss,otH:()=>pi,FJi:()=>Ct,L5n:()=>gi,rZD:()=>yt,SrV:()=>Tt,Bk6:()=>ca,TiL:()=>Mi,yic:()=>It,SJD:()=>nn,F3s:()=>Et,jw9:()=>Dt,g0X:()=>ua,iXf:()=>bn,NbY:()=>Qr,kQl:()=>Ot,LLl:()=>ir,WFw:()=>ns,tji:()=>Os,o71:()=>St,jMx:()=>Ca,A4J:()=>zi,c$m:()=>nr,Vj7:()=>Xr,D9L:()=>us,SWk:()=>ps,aw3:()=>Ts,Xft:()=>Ns,mpB:()=>Mt,m$d:()=>za,IP1:()=>hs,LiH:()=>ha,wRZ:()=>gs,wbP:()=>zs,sLD:()=>pa,yqR:()=>ga,cEv:()=>Li,i44:()=>At,vMt:()=>ur,tJ6:()=>Fi,IRu:()=>Nt,Qzn:()=>ui,iJT:()=>Ma,qP7:()=>at,Qtd:()=>Ta,Zo2:()=>Ri,ROj:()=>Es,FB1:()=>Bt,q1D:()=>Ea,d4o:()=>xt,huM:()=>Lt,ZYZ:()=>Vi,nnL:()=>Ms,Bo4:()=>Na,ubO:()=>Oa,tw_:()=>Ui,wpb:()=>Pt,BnY:()=>Jr,_eC:()=>Vr,fwG:()=>Qi,zwS:()=>Wi,pP7:()=>Ft,Tt7:()=>Ki,Kmw:()=>Xi});var i=o(655);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}var s=o(9245);function A(e,a){for(var M,r=/\r\n|[\n\r]/g,f=1,S=a+1;(M=r.exec(e.body))&&M.index<a;)f+=1,S=a+1-(M.index+M[0].length);return{line:f,column:S}}function _(e){return c(e.source,A(e.source,e.start))}function c(e,a){var r=e.locationOffset.column-1,f=d(r)+e.body,S=a.line-1,Z=a.line+(e.locationOffset.line-1),ae=a.column+(1===a.line?r:0),Le="".concat(e.name,":").concat(Z,":").concat(ae,"\n"),Ue=f.split(/\r\n|[\n\r]/g),it=Ue[S];if(it.length>120){for(var bt=Math.floor(ae/80),Ut=ae%80,je=[],Qe=0;Qe<it.length;Qe+=80)je.push(it.slice(Qe,Qe+80));return Le+W([["".concat(Z),je[0]]].concat(je.slice(1,bt+1).map(function(wt){return["",wt]}),[[" ",d(Ut-1)+"^"],["",je[bt+1]]]))}return Le+W([["".concat(Z-1),Ue[S-1]],["".concat(Z),it],["",d(ae-1)+"^"],["".concat(Z+1),Ue[S+1]]])}function W(e){var a=e.filter(function(f){return void 0!==f[1]}),r=Math.max.apply(Math,a.map(function(f){return f[0].length}));return a.map(function(f){var M=f[1];return function E(e,a){return d(e-a.length)+a}(r,f[0])+(M?" | "+M:" |")}).join("\n")}function d(e){return Array(e+1).join(" ")}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function L(e,a){for(var r=0;r<a.length;r++){var f=a[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(e,f.key,f)}}function j(e,a){return!a||"object"!==D(a)&&"function"!=typeof a?V(e):a}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){var a="function"==typeof Map?new Map:void 0;return Y=function(f){if(null===f||!function se(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(f))return f;if("function"!=typeof f)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(f))return a.get(f);a.set(f,S)}function S(){return N(f,arguments,I(this).constructor)}return S.prototype=Object.create(f.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),B(S,f)},Y(e)}function N(e,a,r){return(N=U()?Reflect.construct:function(S,M,Z){var X=[null];X.push.apply(X,M);var Le=new(Function.bind.apply(S,X));return Z&&B(Le,Z.prototype),Le}).apply(null,arguments)}function U(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function B(e,a){return(B=Object.setPrototypeOf||function(f,S){return f.__proto__=S,f})(e,a)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}var h=function(e){!function b(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&B(e,a)}(r,e);var a=function ie(e){var a=U();return function(){var S,f=I(e);if(a){var M=I(this).constructor;S=Reflect.construct(f,arguments,M)}else S=f.apply(this,arguments);return j(this,S)}}(r);function r(f,S,M,Z,X,ae,Le){var Ue,it,bt,Ut,je;(function F(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r),je=a.call(this,f);var Xt,Qe=Array.isArray(S)?0!==S.length?S:void 0:S?[S]:void 0,wt=M;!wt&&Qe&&(wt=null===(Xt=Qe[0].loc)||void 0===Xt?void 0:Xt.source);var Zt,Rt=Z;!Rt&&Qe&&(Rt=Qe.reduce(function(dt,$t){return $t.loc&&dt.push($t.loc.start),dt},[])),Rt&&0===Rt.length&&(Rt=void 0),Z&&M?Zt=Z.map(function(dt){return A(M,dt)}):Qe&&(Zt=Qe.reduce(function(dt,$t){return $t.loc&&dt.push(A($t.loc.source,$t.loc.start)),dt},[]));var Vt=Le;if(null==Vt&&null!=ae){var sn=ae.extensions;(function n(e){return"object"==t(e)&&null!==e})(sn)&&(Vt=sn)}return Object.defineProperties(V(je),{name:{value:"GraphQLError"},message:{value:f,enumerable:!0,writable:!0},locations:{value:null!==(Ue=Zt)&&void 0!==Ue?Ue:void 0,enumerable:null!=Zt},path:{value:null!=X?X:void 0,enumerable:null!=X},nodes:{value:null!=Qe?Qe:void 0},source:{value:null!==(it=wt)&&void 0!==it?it:void 0},positions:{value:null!==(bt=Rt)&&void 0!==bt?bt:void 0},originalError:{value:ae},extensions:{value:null!==(Ut=Vt)&&void 0!==Ut?Ut:void 0,enumerable:null!=Vt}}),(null==ae?void 0:ae.stack)?(Object.defineProperty(V(je),"stack",{value:ae.stack,writable:!0,configurable:!0}),j(je)):(Error.captureStackTrace?Error.captureStackTrace(V(je),r):Object.defineProperty(V(je),"stack",{value:Error().stack,writable:!0,configurable:!0}),je)}return function ne(e,a,r){a&&L(e.prototype,a),r&&L(e,r)}(r,[{key:"toString",value:function(){return function x(e){var a=e.message;if(e.nodes)for(var r=0,f=e.nodes;r<f.length;r++){var S=f[r];S.loc&&(a+="\n\n"+_(S.loc))}else if(e.source&&e.locations)for(var M=0,Z=e.locations;M<Z.length;M++)a+="\n\n"+c(e.source,Z[M]);return a}(this)}},{key:s.YF,get:function(){return"Object"}}]),r}(Y(Error));function $(e,a,r){return new h("Syntax Error: ".concat(r),void 0,e,[a])}var O=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),w=o(848),u=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),R=o(6261),G=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),K=o(2032),_e=function(){function e(r){var f=new w.WU(u.SOF,0,0,0,0,null);this.source=r,this.lastToken=f,this.token=f,this.line=1,this.lineStart=0}var a=e.prototype;return a.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},a.lookahead=function(){var f=this.token;if(f.kind!==u.EOF)do{var S;f=null!==(S=f.next)&&void 0!==S?S:f.next=xe(this,f)}while(f.kind===u.COMMENT);return f},e}();function Ae(e){return isNaN(e)?u.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function xe(e,a){for(var r=e.source,f=r.body,S=f.length,M=a.end;M<S;){var Z=f.charCodeAt(M),X=e.line,ae=1+M-e.lineStart;switch(Z){case 65279:case 9:case 32:case 44:++M;continue;case 10:++M,++e.line,e.lineStart=M;continue;case 13:10===f.charCodeAt(M+1)?M+=2:++M,++e.line,e.lineStart=M;continue;case 33:return new w.WU(u.BANG,M,M+1,X,ae,a);case 35:return Ce(r,M,X,ae,a);case 36:return new w.WU(u.DOLLAR,M,M+1,X,ae,a);case 38:return new w.WU(u.AMP,M,M+1,X,ae,a);case 40:return new w.WU(u.PAREN_L,M,M+1,X,ae,a);case 41:return new w.WU(u.PAREN_R,M,M+1,X,ae,a);case 46:if(46===f.charCodeAt(M+1)&&46===f.charCodeAt(M+2))return new w.WU(u.SPREAD,M,M+3,X,ae,a);break;case 58:return new w.WU(u.COLON,M,M+1,X,ae,a);case 61:return new w.WU(u.EQUALS,M,M+1,X,ae,a);case 64:return new w.WU(u.AT,M,M+1,X,ae,a);case 91:return new w.WU(u.BRACKET_L,M,M+1,X,ae,a);case 93:return new w.WU(u.BRACKET_R,M,M+1,X,ae,a);case 123:return new w.WU(u.BRACE_L,M,M+1,X,ae,a);case 124:return new w.WU(u.PIPE,M,M+1,X,ae,a);case 125:return new w.WU(u.BRACE_R,M,M+1,X,ae,a);case 34:return 34===f.charCodeAt(M+1)&&34===f.charCodeAt(M+2)?he(r,M,X,ae,a,e):H(r,M,X,ae,a);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return pe(r,M,Z,X,ae,a);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return ue(r,M,X,ae,a)}throw $(r,M,oe(Z))}return new w.WU(u.EOF,S,S,e.line,1+M-e.lineStart,a)}function oe(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Ae(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Ae(e),".")}function Ce(e,a,r,f,S){var Z,M=e.body,X=a;do{Z=M.charCodeAt(++X)}while(!isNaN(Z)&&(Z>31||9===Z));return new w.WU(u.COMMENT,a,X,r,f,S,M.slice(a+1,X))}function pe(e,a,r,f,S,M){var Z=e.body,X=r,ae=a,Le=!1;if(45===X&&(X=Z.charCodeAt(++ae)),48===X){if((X=Z.charCodeAt(++ae))>=48&&X<=57)throw $(e,ae,"Invalid number, unexpected digit after 0: ".concat(Ae(X),"."))}else ae=Me(e,ae,X),X=Z.charCodeAt(ae);if(46===X&&(Le=!0,X=Z.charCodeAt(++ae),ae=Me(e,ae,X),X=Z.charCodeAt(ae)),(69===X||101===X)&&(Le=!0,(43===(X=Z.charCodeAt(++ae))||45===X)&&(X=Z.charCodeAt(++ae)),ae=Me(e,ae,X),X=Z.charCodeAt(ae)),46===X||function Ne(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(X))throw $(e,ae,"Invalid number, expected digit but got: ".concat(Ae(X),"."));return new w.WU(Le?u.FLOAT:u.INT,a,ae,f,S,M,Z.slice(a,ae))}function Me(e,a,r){var f=e.body,S=a,M=r;if(M>=48&&M<=57){do{M=f.charCodeAt(++S)}while(M>=48&&M<=57);return S}throw $(e,S,"Invalid number, expected digit but got: ".concat(Ae(M),"."))}function H(e,a,r,f,S){for(var M=e.body,Z=a+1,X=Z,ae=0,Le="";Z<M.length&&!isNaN(ae=M.charCodeAt(Z))&&10!==ae&&13!==ae;){if(34===ae)return Le+=M.slice(X,Z),new w.WU(u.STRING,a,Z+1,r,f,S,Le);if(ae<32&&9!==ae)throw $(e,Z,"Invalid character within String: ".concat(Ae(ae),"."));if(++Z,92===ae){switch(Le+=M.slice(X,Z-1),ae=M.charCodeAt(Z)){case 34:Le+='"';break;case 47:Le+="/";break;case 92:Le+="\\";break;case 98:Le+="\b";break;case 102:Le+="\f";break;case 110:Le+="\n";break;case 114:Le+="\r";break;case 116:Le+="\t";break;case 117:var Ue=k(M.charCodeAt(Z+1),M.charCodeAt(Z+2),M.charCodeAt(Z+3),M.charCodeAt(Z+4));if(Ue<0){var it=M.slice(Z+1,Z+5);throw $(e,Z,"Invalid character escape sequence: \\u".concat(it,"."))}Le+=String.fromCharCode(Ue),Z+=4;break;default:throw $(e,Z,"Invalid character escape sequence: \\".concat(String.fromCharCode(ae),"."))}X=++Z}}throw $(e,Z,"Unterminated string.")}function he(e,a,r,f,S,M){for(var Z=e.body,X=a+3,ae=X,Le=0,Ue="";X<Z.length&&!isNaN(Le=Z.charCodeAt(X));){if(34===Le&&34===Z.charCodeAt(X+1)&&34===Z.charCodeAt(X+2))return Ue+=Z.slice(ae,X),new w.WU(u.BLOCK_STRING,a,X+3,r,f,S,(0,K.W7)(Ue));if(Le<32&&9!==Le&&10!==Le&&13!==Le)throw $(e,X,"Invalid character within String: ".concat(Ae(Le),"."));10===Le?(++X,++M.line,M.lineStart=X):13===Le?(10===Z.charCodeAt(X+1)?X+=2:++X,++M.line,M.lineStart=X):92===Le&&34===Z.charCodeAt(X+1)&&34===Z.charCodeAt(X+2)&&34===Z.charCodeAt(X+3)?(Ue+=Z.slice(ae,X)+'"""',ae=X+=4):++X}throw $(e,X,"Unterminated string.")}function k(e,a,r,f){return ge(e)<<12|ge(a)<<8|ge(r)<<4|ge(f)}function ge(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function ue(e,a,r,f,S){for(var M=e.body,Z=M.length,X=a+1,ae=0;X!==Z&&!isNaN(ae=M.charCodeAt(X))&&(95===ae||ae>=48&&ae<=57||ae>=65&&ae<=90||ae>=97&&ae<=122);)++X;return new w.WU(u.NAME,a,X,r,f,S,M.slice(a,X))}var de=function(){function e(r,f){var S=(0,R.T)(r)?r:new R.H(r);this._lexer=new _e(S),this._options=f}var a=e.prototype;return a.parseName=function(){var f=this.expectToken(u.NAME);return{kind:O.NAME,value:f.value,loc:this.loc(f)}},a.parseDocument=function(){var f=this._lexer.token;return{kind:O.DOCUMENT,definitions:this.many(u.SOF,this.parseDefinition,u.EOF),loc:this.loc(f)}},a.parseDefinition=function(){if(this.peek(u.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(u.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},a.parseOperationDefinition=function(){var f=this._lexer.token;if(this.peek(u.BRACE_L))return{kind:O.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(f)};var M,S=this.parseOperationType();return this.peek(u.NAME)&&(M=this.parseName()),{kind:O.OPERATION_DEFINITION,operation:S,name:M,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseOperationType=function(){var f=this.expectToken(u.NAME);switch(f.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(f)},a.parseVariableDefinitions=function(){return this.optionalMany(u.PAREN_L,this.parseVariableDefinition,u.PAREN_R)},a.parseVariableDefinition=function(){var f=this._lexer.token;return{kind:O.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(u.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(u.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(f)}},a.parseVariable=function(){var f=this._lexer.token;return this.expectToken(u.DOLLAR),{kind:O.VARIABLE,name:this.parseName(),loc:this.loc(f)}},a.parseSelectionSet=function(){var f=this._lexer.token;return{kind:O.SELECTION_SET,selections:this.many(u.BRACE_L,this.parseSelection,u.BRACE_R),loc:this.loc(f)}},a.parseSelection=function(){return this.peek(u.SPREAD)?this.parseFragment():this.parseField()},a.parseField=function(){var M,Z,f=this._lexer.token,S=this.parseName();return this.expectOptionalToken(u.COLON)?(M=S,Z=this.parseName()):Z=S,{kind:O.FIELD,alias:M,name:Z,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(u.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(f)}},a.parseArguments=function(f){return this.optionalMany(u.PAREN_L,f?this.parseConstArgument:this.parseArgument,u.PAREN_R)},a.parseArgument=function(){var f=this._lexer.token,S=this.parseName();return this.expectToken(u.COLON),{kind:O.ARGUMENT,name:S,value:this.parseValueLiteral(!1),loc:this.loc(f)}},a.parseConstArgument=function(){var f=this._lexer.token;return{kind:O.ARGUMENT,name:this.parseName(),value:(this.expectToken(u.COLON),this.parseValueLiteral(!0)),loc:this.loc(f)}},a.parseFragment=function(){var f=this._lexer.token;this.expectToken(u.SPREAD);var S=this.expectOptionalKeyword("on");return!S&&this.peek(u.NAME)?{kind:O.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(f)}:{kind:O.INLINE_FRAGMENT,typeCondition:S?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseFragmentDefinition=function(){var f,S=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(f=this._options)||void 0===f?void 0:f.experimentalFragmentVariables)?{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(S)}:{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(S)}},a.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},a.parseValueLiteral=function(f){var S=this._lexer.token;switch(S.kind){case u.BRACKET_L:return this.parseList(f);case u.BRACE_L:return this.parseObject(f);case u.INT:return this._lexer.advance(),{kind:O.INT,value:S.value,loc:this.loc(S)};case u.FLOAT:return this._lexer.advance(),{kind:O.FLOAT,value:S.value,loc:this.loc(S)};case u.STRING:case u.BLOCK_STRING:return this.parseStringLiteral();case u.NAME:switch(this._lexer.advance(),S.value){case"true":return{kind:O.BOOLEAN,value:!0,loc:this.loc(S)};case"false":return{kind:O.BOOLEAN,value:!1,loc:this.loc(S)};case"null":return{kind:O.NULL,loc:this.loc(S)};default:return{kind:O.ENUM,value:S.value,loc:this.loc(S)}}case u.DOLLAR:if(!f)return this.parseVariable()}throw this.unexpected()},a.parseStringLiteral=function(){var f=this._lexer.token;return this._lexer.advance(),{kind:O.STRING,value:f.value,block:f.kind===u.BLOCK_STRING,loc:this.loc(f)}},a.parseList=function(f){var S=this,M=this._lexer.token;return{kind:O.LIST,values:this.any(u.BRACKET_L,function(){return S.parseValueLiteral(f)},u.BRACKET_R),loc:this.loc(M)}},a.parseObject=function(f){var S=this,M=this._lexer.token;return{kind:O.OBJECT,fields:this.any(u.BRACE_L,function(){return S.parseObjectField(f)},u.BRACE_R),loc:this.loc(M)}},a.parseObjectField=function(f){var S=this._lexer.token,M=this.parseName();return this.expectToken(u.COLON),{kind:O.OBJECT_FIELD,name:M,value:this.parseValueLiteral(f),loc:this.loc(S)}},a.parseDirectives=function(f){for(var S=[];this.peek(u.AT);)S.push(this.parseDirective(f));return S},a.parseDirective=function(f){var S=this._lexer.token;return this.expectToken(u.AT),{kind:O.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(f),loc:this.loc(S)}},a.parseTypeReference=function(){var S,f=this._lexer.token;return this.expectOptionalToken(u.BRACKET_L)?(S=this.parseTypeReference(),this.expectToken(u.BRACKET_R),S={kind:O.LIST_TYPE,type:S,loc:this.loc(f)}):S=this.parseNamedType(),this.expectOptionalToken(u.BANG)?{kind:O.NON_NULL_TYPE,type:S,loc:this.loc(f)}:S},a.parseNamedType=function(){var f=this._lexer.token;return{kind:O.NAMED_TYPE,name:this.parseName(),loc:this.loc(f)}},a.parseTypeSystemDefinition=function(){var f=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(f.kind===u.NAME)switch(f.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(f)},a.peekDescription=function(){return this.peek(u.STRING)||this.peek(u.BLOCK_STRING)},a.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},a.parseSchemaDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("schema");var M=this.parseDirectives(!0),Z=this.many(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);return{kind:O.SCHEMA_DEFINITION,description:S,directives:M,operationTypes:Z,loc:this.loc(f)}},a.parseOperationTypeDefinition=function(){var f=this._lexer.token,S=this.parseOperationType();this.expectToken(u.COLON);var M=this.parseNamedType();return{kind:O.OPERATION_TYPE_DEFINITION,operation:S,type:M,loc:this.loc(f)}},a.parseScalarTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("scalar");var M=this.parseName(),Z=this.parseDirectives(!0);return{kind:O.SCALAR_TYPE_DEFINITION,description:S,name:M,directives:Z,loc:this.loc(f)}},a.parseObjectTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("type");var M=this.parseName(),Z=this.parseImplementsInterfaces(),X=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:O.OBJECT_TYPE_DEFINITION,description:S,name:M,interfaces:Z,directives:X,fields:ae,loc:this.loc(f)}},a.parseImplementsInterfaces=function(){var f;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLImplementsInterfaces)){var S=[];this.expectOptionalToken(u.AMP);do{S.push(this.parseNamedType())}while(this.expectOptionalToken(u.AMP)||this.peek(u.NAME));return S}return this.delimitedMany(u.AMP,this.parseNamedType)},a.parseFieldsDefinition=function(){var f;return!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLEmptyFields)&&this.peek(u.BRACE_L)&&this._lexer.lookahead().kind===u.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(u.BRACE_L,this.parseFieldDefinition,u.BRACE_R)},a.parseFieldDefinition=function(){var f=this._lexer.token,S=this.parseDescription(),M=this.parseName(),Z=this.parseArgumentDefs();this.expectToken(u.COLON);var X=this.parseTypeReference(),ae=this.parseDirectives(!0);return{kind:O.FIELD_DEFINITION,description:S,name:M,arguments:Z,type:X,directives:ae,loc:this.loc(f)}},a.parseArgumentDefs=function(){return this.optionalMany(u.PAREN_L,this.parseInputValueDef,u.PAREN_R)},a.parseInputValueDef=function(){var f=this._lexer.token,S=this.parseDescription(),M=this.parseName();this.expectToken(u.COLON);var X,Z=this.parseTypeReference();this.expectOptionalToken(u.EQUALS)&&(X=this.parseValueLiteral(!0));var ae=this.parseDirectives(!0);return{kind:O.INPUT_VALUE_DEFINITION,description:S,name:M,type:Z,defaultValue:X,directives:ae,loc:this.loc(f)}},a.parseInterfaceTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("interface");var M=this.parseName(),Z=this.parseImplementsInterfaces(),X=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:O.INTERFACE_TYPE_DEFINITION,description:S,name:M,interfaces:Z,directives:X,fields:ae,loc:this.loc(f)}},a.parseUnionTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("union");var M=this.parseName(),Z=this.parseDirectives(!0),X=this.parseUnionMemberTypes();return{kind:O.UNION_TYPE_DEFINITION,description:S,name:M,directives:Z,types:X,loc:this.loc(f)}},a.parseUnionMemberTypes=function(){return this.expectOptionalToken(u.EQUALS)?this.delimitedMany(u.PIPE,this.parseNamedType):[]},a.parseEnumTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("enum");var M=this.parseName(),Z=this.parseDirectives(!0),X=this.parseEnumValuesDefinition();return{kind:O.ENUM_TYPE_DEFINITION,description:S,name:M,directives:Z,values:X,loc:this.loc(f)}},a.parseEnumValuesDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseEnumValueDefinition,u.BRACE_R)},a.parseEnumValueDefinition=function(){var f=this._lexer.token,S=this.parseDescription(),M=this.parseName(),Z=this.parseDirectives(!0);return{kind:O.ENUM_VALUE_DEFINITION,description:S,name:M,directives:Z,loc:this.loc(f)}},a.parseInputObjectTypeDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("input");var M=this.parseName(),Z=this.parseDirectives(!0),X=this.parseInputFieldsDefinition();return{kind:O.INPUT_OBJECT_TYPE_DEFINITION,description:S,name:M,directives:Z,fields:X,loc:this.loc(f)}},a.parseInputFieldsDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseInputValueDef,u.BRACE_R)},a.parseTypeSystemExtension=function(){var f=this._lexer.lookahead();if(f.kind===u.NAME)switch(f.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(f)},a.parseSchemaExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var S=this.parseDirectives(!0),M=this.optionalMany(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);if(0===S.length&&0===M.length)throw this.unexpected();return{kind:O.SCHEMA_EXTENSION,directives:S,operationTypes:M,loc:this.loc(f)}},a.parseScalarTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var S=this.parseName(),M=this.parseDirectives(!0);if(0===M.length)throw this.unexpected();return{kind:O.SCALAR_TYPE_EXTENSION,name:S,directives:M,loc:this.loc(f)}},a.parseObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var S=this.parseName(),M=this.parseImplementsInterfaces(),Z=this.parseDirectives(!0),X=this.parseFieldsDefinition();if(0===M.length&&0===Z.length&&0===X.length)throw this.unexpected();return{kind:O.OBJECT_TYPE_EXTENSION,name:S,interfaces:M,directives:Z,fields:X,loc:this.loc(f)}},a.parseInterfaceTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var S=this.parseName(),M=this.parseImplementsInterfaces(),Z=this.parseDirectives(!0),X=this.parseFieldsDefinition();if(0===M.length&&0===Z.length&&0===X.length)throw this.unexpected();return{kind:O.INTERFACE_TYPE_EXTENSION,name:S,interfaces:M,directives:Z,fields:X,loc:this.loc(f)}},a.parseUnionTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var S=this.parseName(),M=this.parseDirectives(!0),Z=this.parseUnionMemberTypes();if(0===M.length&&0===Z.length)throw this.unexpected();return{kind:O.UNION_TYPE_EXTENSION,name:S,directives:M,types:Z,loc:this.loc(f)}},a.parseEnumTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var S=this.parseName(),M=this.parseDirectives(!0),Z=this.parseEnumValuesDefinition();if(0===M.length&&0===Z.length)throw this.unexpected();return{kind:O.ENUM_TYPE_EXTENSION,name:S,directives:M,values:Z,loc:this.loc(f)}},a.parseInputObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var S=this.parseName(),M=this.parseDirectives(!0),Z=this.parseInputFieldsDefinition();if(0===M.length&&0===Z.length)throw this.unexpected();return{kind:O.INPUT_OBJECT_TYPE_EXTENSION,name:S,directives:M,fields:Z,loc:this.loc(f)}},a.parseDirectiveDefinition=function(){var f=this._lexer.token,S=this.parseDescription();this.expectKeyword("directive"),this.expectToken(u.AT);var M=this.parseName(),Z=this.parseArgumentDefs(),X=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var ae=this.parseDirectiveLocations();return{kind:O.DIRECTIVE_DEFINITION,description:S,name:M,arguments:Z,repeatable:X,locations:ae,loc:this.loc(f)}},a.parseDirectiveLocations=function(){return this.delimitedMany(u.PIPE,this.parseDirectiveLocation)},a.parseDirectiveLocation=function(){var f=this._lexer.token,S=this.parseName();if(void 0!==G[S.value])return S;throw this.unexpected(f)},a.loc=function(f){var S;if(!0!==(null===(S=this._options)||void 0===S?void 0:S.noLocation))return new w.Ye(f,this._lexer.lastToken,this._lexer.source)},a.peek=function(f){return this._lexer.token.kind===f},a.expectToken=function(f){var S=this._lexer.token;if(S.kind===f)return this._lexer.advance(),S;throw $(this._lexer.source,S.start,"Expected ".concat(Q(f),", found ").concat(Oe(S),"."))},a.expectOptionalToken=function(f){var S=this._lexer.token;if(S.kind===f)return this._lexer.advance(),S},a.expectKeyword=function(f){var S=this._lexer.token;if(S.kind!==u.NAME||S.value!==f)throw $(this._lexer.source,S.start,'Expected "'.concat(f,'", found ').concat(Oe(S),"."));this._lexer.advance()},a.expectOptionalKeyword=function(f){var S=this._lexer.token;return S.kind===u.NAME&&S.value===f&&(this._lexer.advance(),!0)},a.unexpected=function(f){var S=null!=f?f:this._lexer.token;return $(this._lexer.source,S.start,"Unexpected ".concat(Oe(S),"."))},a.any=function(f,S,M){this.expectToken(f);for(var Z=[];!this.expectOptionalToken(M);)Z.push(S.call(this));return Z},a.optionalMany=function(f,S,M){if(this.expectOptionalToken(f)){var Z=[];do{Z.push(S.call(this))}while(!this.expectOptionalToken(M));return Z}return[]},a.many=function(f,S,M){this.expectToken(f);var Z=[];do{Z.push(S.call(this))}while(!this.expectOptionalToken(M));return Z},a.delimitedMany=function(f,S){this.expectOptionalToken(f);var M=[];do{M.push(S.call(this))}while(this.expectOptionalToken(f));return M},e}();function Oe(e){var a=e.value;return Q(e.kind)+(null!=a?' "'.concat(a,'"'):"")}function Q(e){return function Te(e){return e===u.BANG||e===u.DOLLAR||e===u.AMP||e===u.PAREN_L||e===u.PAREN_R||e===u.SPREAD||e===u.COLON||e===u.EQUALS||e===u.AT||e===u.BRACKET_L||e===u.BRACKET_R||e===u.BRACE_L||e===u.PIPE||e===u.BRACE_R}(e)?'"'.concat(e,'"'):e}var fe=new Map,J=new Map,Ie=!0,be=!1;function Be(e){return e.replace(/[\s,]+/g," ").trim()}function Ve(e){var a=Be(e);if(!fe.has(a)){var r=function Pe(e,a){return new de(e,a).parseDocument()}(e,{experimentalFragmentVariables:be,allowLegacyFragmentVariables:be});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");fe.set(a,function Ke(e){var a=new Set(e.definitions);a.forEach(function(f){f.loc&&delete f.loc,Object.keys(f).forEach(function(S){var M=f[S];M&&"object"==typeof M&&a.add(M)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(function nt(e){var a=new Set,r=[];return e.definitions.forEach(function(f){if("FragmentDefinition"===f.kind){var S=f.name.value,M=function tt(e){return Be(e.source.body.substring(e.start,e.end))}(f.loc),Z=J.get(S);Z&&!Z.has(M)?Ie&&console.warn("Warning: fragment with name "+S+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):Z||J.set(S,Z=new Set),Z.add(M),a.has(M)||(a.add(M),r.push(f))}else r.push(f)}),(0,i.pi)((0,i.pi)({},e),{definitions:r})}(r)))}return fe.get(a)}function C(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var f=e[0];return a.forEach(function(S,M){f+=S&&"Document"===S.kind?S.loc.source.body:S,f+=e[M+1]}),Ve(f)}var e,we_gql=C;(e=C||(C={})).gql=we_gql,e.resetCaches=function He(){fe.clear(),J.clear()},e.disableFragmentWarnings=function Xe(){Ie=!1},e.enableExperimentalFragmentVariables=function Ye(){be=!0},e.disableExperimentalFragmentVariables=function lt(){be=!1},C.default=C;var v=o(9298),l=o(5e3),ve=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(ve||(ve={})),ve))(),g=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(g||(g={})),g))(),me=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(me||(me={})),me))(),ye=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ye||(ye={})),ye))(),Re=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(Re||(Re={})),Re))(),$e=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}($e||($e={})),$e))(),Ge=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Ge||(Ge={})),Ge))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),qe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(qe||(qe={})),qe))(),rt=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(rt||(rt={})),rt))(),ct=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(ct||(ct={})),ct))(),Ze=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Ze||(Ze={})),Ze))(),ot=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(ot||(ot={})),ot))(),ut=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ut||(ut={})),ut))(),st=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(st||(st={})),st))(),y=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(y||(y={})),y))(),q=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(q||(q={})),q))(),P=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(P||(P={})),P))(),le=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(le||(le={})),le))(),Se=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(Se||(Se={})),Se))(),Fe=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Fe||(Fe={})),Fe))(),mt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(zt||(zt={})),zt))(),_t=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(_t||(_t={})),_t))(),Ct=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Ct||(Ct={})),Ct))(),yt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(yt||(yt={})),yt))(),Tt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(It||(It={})),It))(),Et=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Et||(Et={})),Et))(),Dt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.CreatedAt="CREATED_AT",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Dt||(Dt={})),Dt))(),Ot=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Ot||(Ot={})),Ot))(),St=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(St||(St={})),St))(),Mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Mt||(Mt={})),Mt))(),At=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(At||(At={})),At))(),Nt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Nt||(Nt={})),Nt))(),at=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(at||(at={})),at))(),Bt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(Bt||(Bt={})),Bt))(),xt=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(xt||(xt={})),xt))(),Lt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Lt||(Lt={})),Lt))(),Pt=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(Pt||(Pt={})),Pt))(),Ft=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(Ft||(Ft={})),Ft))();const Yt=C`
    fragment assertionPopover on Assertion {
  id
  name
  status
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  variantOrigin
  ampLevel
  acmgCodes {
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
  drugs {
    id
    name
    link
  }
  drugInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
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
    `,Wt=C`
    fragment AssertionBrowseTableRowFields on Assertion {
  id
  name
  link
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  disease {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  phenotypes @include(if: $cardView) {
    id
    name
    link
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
  regulatoryApprovalLastUpdated @include(if: $cardView)
  nccnGuideline @include(if: $cardView) {
    id
    name
  }
  variantOrigin @include(if: $cardView)
  evidenceItemsCount
  status
}
    `,kt=C`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Jt=C`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Qt=C`
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
  parsedComment {
    __typename
    ... on CommentTagSegment {
      entityId
      displayName
      tagType
      status
      link
      __typename
    }
    ... on CommentTextSegment {
      text
    }
    ... on User {
      id
      displayName
      role
    }
  }
}
    `,jt=C`
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
    link
    __typename
  }
}
    `,Kt=C`
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
  link
}
    `,Ht=C`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,m=C`
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
    link
    ... on Source {
      citation
      sourceType
    }
    ... on EvidenceItem {
      status
    }
    ... on Assertion {
      status
    }
    __typename
  }
  originatingObject {
    id
    name
    link
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
    `,te=C`
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes @include(if: $showFilters)
  unfilteredCount
  uniqueParticipants @include(if: $showFilters) {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations @include(if: $showFilters) {
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
    ${m}`,p=C`
    fragment evidencePopover on EvidenceItem {
  id
  name
  status
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
    link
  }
  drugInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  evidenceRating
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  source {
    id
    citation
    sourceType
    displayType
    link
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
    `,T=C`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  phenotypes @include(if: $cardView) {
    id
    name
    link
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
    link
  }
  assertions @include(if: $cardView) {
    id
    name
    link
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
    `,De=C`
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
    ${C`
    fragment flag on Flag {
  id
  state
  createdAt
  resolvedAt
  flaggable {
    id
    name
    link
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
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
}
    `}`,et=C`
    fragment flagPopover on Flag {
  id
  name
  state
  flaggingUser {
    id
    displayName
    role
  }
  flaggable {
    id
    link
    name
  }
  createdAt
  openComment {
    comment
  }
}
    `,Gt=C`
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
    `,an=C`
    fragment GeneBrowseTableRowFields on BrowseGene {
  id
  entrezId
  name
  link
  geneAliases
  diseases {
    name
    id
    link
  }
  drugs {
    name
    id
    link
  }
  variantCount
  evidenceItemCount
  assertionCount
}
    `,cn=C`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,ln=C`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,un=C`
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
    `,dn=C`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,pn=C`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,mn=C`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  revisor {
    id
    displayName
    role
  }
  subject {
    id
    link
    name
  }
  createdAt
  linkoutData {
    name
  }
}
    `,gn=C`
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
          link
          deleted
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
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
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  status
}
    `,fn=C`
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
    `,hn=C`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,vn=C`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,zn=C`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  disease {
    id
    name
    link
  }
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
  reason
  createdAt
}
    `,_n=C`
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
    link
  }
}
    `,Cn=C`
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
  link
}
    `,yn=C`
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
    `,Tn=C`
    fragment UserBrowseTableRowFields on User {
  id
  name
  displayName
  organizations {
    id
    name
  }
  role
  statsHash {
    submittedEvidenceItems
    revisions
  }
  mostRecentActionTimestamp
}
    `,In=C`
    fragment variantGroupPopoverFields on VariantGroup {
  id
  name
  description
  variants {
    edges {
      node {
        id
        name
        link
      }
    }
  }
  sources {
    id
    citation
    sourceType
    link
  }
}
    `,En=C`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Dn=C`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,On=C`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Sn=C`
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
    link
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
    `,Mn=C`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,An=C`
    fragment VariantGridFields on BrowseVariant {
  id
  name
  link
  evidenceScore
  evidenceItemCount
  geneId
  geneName
  geneLink
  diseases {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  aliases {
    name
  }
  assertionCount
}
    `,Nn=C`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
  variant {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  variantOrigin
  clinicalSignificance
  disease {
    id
    doid
    name
    displayName
    link
  }
  drugs {
    id
    ncitId
    name
    link
  }
  drugInteractionType
  assertionDirection
  assertionType
  phenotypes {
    id
    hpoId
    name
  }
  ampLevel
  acmgCodes {
    id
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  fdaCompanionTest
  evidenceItems {
    id
    name
    link
    status
  }
}
    `,xn=C`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    status
    __typename
  }
  ... on CommentTextSegment {
    text
    __typename
  }
  ... on User {
    id
    displayName
    role
    __typename
  }
}
    `,Ln=C`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Pn=C`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,Fn=C`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,tn=C`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,nn=C`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,bn=C`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,on=C`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Rn=C`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,$n=(C`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,C`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  variant {
    id
    name
    link
  }
  variantOrigin
  description
  clinicalSignificance
  disease {
    id
    doid
    name
    displayName
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
    `),Bn=C`
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
    `,Gn=C`
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
    `,Un=C`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `,Qn=C`
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
  primaryCoordinates {
    ...CoordinateFields
  }
  secondaryCoordinates {
    ...CoordinateFields
  }
  referenceBases
  variantBases
}
    ${C`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `}`,Zn=C`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
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
    `,Vn=C`
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
    link
  }
  gene {
    id
    name
    link
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
    link
    id
  }
  phenotypes {
    id
    name
    link
  }
  drugInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
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
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Yn=C`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,Wn=C`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  variant {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  assertions {
    id
    name
    link
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
    `,kn=C`
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
    link
  }
  drugInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  source {
    id
    citation
    citationId
    sourceType
    displayType
    sourceUrl
    ascoAbstractId
    link
    clinicalTrials {
      nctId
      id
    }
  }
  evidenceRating
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
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
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Jn=C`
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
    `,jn=C`
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
    `,Kn=C`
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
    `,Hn=C`
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
  subGroups {
    id
    name
    profileImagePath(size: 12)
  }
}
    `,Xn=C`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 32)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
  }
}
    `,qn=C`
    fragment Release on DataRelease {
  name
  geneTsv {
    filename
    path
  }
  variantTsv {
    filename
    path
  }
  variantGroupTsv {
    filename
    path
  }
  evidenceTsv {
    filename
    path
  }
  assertionTsv {
    filename
    path
  }
  acceptedVariantsVcf {
    filename
    path
  }
  acceptedAndSubmittedVariantsVcf {
    filename
    path
  }
}
    `,eo=C`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,to=C`
    fragment SourceSummaryFields on Source {
  id
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
    `,no=C`
    fragment UserDetailFields on User {
  id
  name
  displayName
  username
  email
  profileImagePath(size: 128)
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
    id
    coiPresent
    coiStatement
    coiStatus
    createdAt
    expiresAt
  }
}
    `,oo=C`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,io=C`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,ro=C`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,rn=C`
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
    ${m}`,so=C`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,ao=C`
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
    `,co=C`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
  sources {
    id
    link
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
        link
        description
      }
    }
  }
}
    `,lo=C`
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
    `,po=C`
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
    id
    link
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  evidenceScore
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
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
    ${C`
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
    `}`,mo=C`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Yt}`;let go=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fo=C`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatus, $cardView: Boolean!) {
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
    status: $status
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
    ${Wt}`;let ho=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=C`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${kt}`;let zo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=C`
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
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...BrowseClinicalTrialsRowFields
      }
    }
  }
}
    ${Jt}`;let Co=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=C`
    query CommentList($first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $mentionedUserId: Int, $mentionedRole: UserRole, $mentionedEntity: TaggableEntityInput, $subject: CommentableInput, $sortBy: DateSort) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    mentionedUserId: $mentionedUserId
    mentionedRole: $mentionedRole
    mentionedEntity: $mentionedEntity
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
    mentionedUsers {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedRoles {
      displayName
      entityId
      tagType
      link
    }
    mentionedEntities {
      displayName
      entityId
      tagType
      link
    }
    unfilteredCountForSubject
    edges {
      cursor
      node {
        ...commentListNode
      }
    }
  }
}
    ${Qt}`;let To=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=C`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${jt}`;let Eo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Io}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=C`
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
    link
  }
}
    `;let Oo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Do}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=C`
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
    ${Kt}`;let Mo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=So}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=C`
    query DrugPopover($drugId: Int!) {
  drugPopover(id: $drugId) {
    id
    name
    drugUrl
    ncitId
    drugAliases
    assertionCount
    evidenceItemCount
    link
  }
}
    `;let No=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ao}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xo=C`
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
    filteredCount
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
    ${Ht}`;let Lo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=C`
    query EventFeedCount($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    mode: $mode
  ) {
    unfilteredCount
  }
}
    `;let Fo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Po}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bo=C`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${te}`;let Ro=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $o=C`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${p}`;let Bo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Go=C`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $status: EvidenceStatus, $cardView: Boolean!) {
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
    status: $status
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
    ${T}`;let Uo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Go}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=C`
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
    ${De}`;let Qo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=C`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${et}`;let Vo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=C`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Gt}`;let Wo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=C`
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
        ...GeneBrowseTableRowFields
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
    ${an}`;let Jo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ko}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=C`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${cn}`;let Ko=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=C`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${ln}`;let Xo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ho}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=C`
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
    ${un}`;let ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ti=C`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    link
  }
}
    `;let ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ti}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=C`
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
    filteredCount
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
    ${dn}`;let ii=(()=>{class e extends v.AE{constructor(r){super(r),this.document=oi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ri=C`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let si=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ri}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ai=C`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ci=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const li=C`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${pn}`;let ui=(()=>{class e extends v.AE{constructor(r){super(r),this.document=li}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const di=C`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${mn}`;let pi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mi=C`
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $resolvingUserId: Int, $revisionsetId: String, $status: RevisionStatus) {
  revisions(
    first: $first
    last: $last
    before: $before
    after: $after
    fieldName: $fieldName
    originatingUserId: $originatingUserId
    resolvingUserId: $resolvingUserId
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
    uniqueResolvers {
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
    ${gn}`;let gi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=C`
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
    ${fn}`;let hi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vi=C`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${hn}`;let zi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _i=C`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Ci=(()=>{class e extends v.mm{constructor(r){super(r),this.document=_i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yi=C`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Ti=(()=>{class e extends v.mm{constructor(r){super(r),this.document=yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ii=C`
    query CivicStats {
  timepointStats {
    assertions {
      ...TimepointCount
    }
    diseases {
      ...TimepointCount
    }
    comments {
      ...TimepointCount
    }
    drugs {
      ...TimepointCount
    }
    evidenceItems {
      ...TimepointCount
    }
    genes {
      ...TimepointCount
    }
    revisions {
      ...TimepointCount
    }
    sources {
      ...TimepointCount
    }
    users {
      ...TimepointCount
    }
    variants {
      ...TimepointCount
    }
  }
}
    ${vn}`;let Ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ii}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=C`
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
    ${zn}`;let Oi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Si=C`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${_n}`;let Mi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Si}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=C`
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
    ${Cn}`;let Ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=C`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${yn}`;let Li=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=C`
    query UsersBrowse($first: Int, $last: Int, $before: String, $after: String, $userName: String, $orgName: OrganizationFilter, $userRole: UserRole, $sortBy: UsersSort) {
  users(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $userName
    organization: $orgName
    role: $userRole
    sortBy: $sortBy
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...UserBrowseTableRowFields
      }
    }
  }
}
    ${Tn}`;let Fi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=C`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${In}`;let Ri=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=C`
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
    ${En}`;let Bi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=C`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Dn}`;let Ui=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wi=C`
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
    filteredCount
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
    ${On}`;let Qi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=C`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Sn}`;let Vi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yi=C`
    query VariantsMenu($geneId: Int, $variantName: String, $evidenceStatusFilter: VariantDisplayFilter, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
    name: $variantName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
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
    ${Mn}`;let Wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=C`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $drugName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    drugName: $drugName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
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
        ...VariantGridFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${An}`;let Ji=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ki}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ji=C`
    query ViewerBase {
  viewer {
    id
    username
    role
    displayName
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
    mostRecentConflictOfInterestStatement {
      coiStatus
    }
    mostRecentOrganizationId
  }
}
    `;let Ki=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ji}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hi=C`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Xi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qi=C`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${Nn}`;let er=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=C`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let nr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=tr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const or=C`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let ir=(()=>{class e extends v.mm{constructor(r){super(r),this.document=or}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=C`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Qt}`;let sr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=rr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=C`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${xn}`;let cr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=C`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let ur=(()=>{class e extends v.AE{constructor(r){super(r),this.document=lr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=C`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let pr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=C`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let gr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=C`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let hr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=C`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Ln}`;let zr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=C`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Cr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=C`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${Pn}`;let Tr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=C`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Er=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ir}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=C`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Fn}`;let Or=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=C`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Mr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=C`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Nr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xr=C`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${tn}`;let Lr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=C`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Fr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const br=C`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Rr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=br}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $r=C`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Br=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gr=C`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${nn}`;let Ur=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Gr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=C`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${tn}`;let Qr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zr=C`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${on}`;let Vr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=C`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Rn}`;let Wr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${on}`;const kr=C`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Jr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=kr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=C`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${$n}`;let Kr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=C`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Xr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Hr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=C`
    query EvidenceFieldsFromSourceSuggestion($sourceId: Int, $geneId: Int, $variantId: Int, $diseaseId: Int) {
  sourceSuggestionValues(
    geneId: $geneId
    variantId: $variantId
    diseaseId: $diseaseId
    sourceId: $sourceId
  ) {
    gene {
      id
      name
      link
    }
    variant {
      id
      name
      link
    }
    disease {
      id
      name
      link
    }
    source {
      id
      sourceType
      citationId
      citation
      link
    }
  }
}
    `;let es=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Bn}`;const ts=C`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let ns=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ts}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const os=C`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let is=(()=>{class e extends v.mm{constructor(r){super(r),this.document=os}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=C`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let ss=(()=>{class e extends v.mm{constructor(r){super(r),this.document=rs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=C`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Gn}`;let cs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=as}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=C`
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
    `;let us=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ls}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=C`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let ps=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=C`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let gs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ms}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=C`
    mutation UpdateCoi($input: UpdateCoiInput!) {
  updateCoi(input: $input) {
    coiStatement {
      coiPresent
      coiStatus
      createdAt
      id
    }
  }
}
    `;let hs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=fs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=C`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let zs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=C`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Cs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=C`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      id
      fieldName
    }
  }
}
    `;let Ts=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=C`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Un}`;let Es=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Is}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=C`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Os=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=C`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Qn}`;let Ms=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ss}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const As=C`
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
    `;let Ns=(()=>{class e extends v.mm{constructor(r){super(r),this.document=As}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xs=C`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Zn}`;let Ls=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=C`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Vn}`;let Fs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ps}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bs=C`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;let Rs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $s=C`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
    link
  }
}
    `;let Bs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gs=C`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
    link
  }
}
    `;let Us=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=C`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${Yn}`;let Qs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ws}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zs=C`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Wn}`;let Vs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ys=C`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${kn}`;let Ws=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ks=C`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Jn}`;let Js=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ks}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=C`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${jn}`;let Ks=(()=>{class e extends v.AE{constructor(r){super(r),this.document=js}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hs=C`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Kn}`;let Xs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qs=C`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Hn}`;let ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ta=C`
    query OrganizationMembers($organizationId: Int!, $first: Int, $last: Int, $before: String, $after: String) {
  users(
    organization: {id: $organizationId}
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationMembersFields
      }
    }
  }
}
    ${Xn}`;let na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ta}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oa=C`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let ia=(()=>{class e extends v.AE{constructor(r){super(r),this.document=oa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ra=C`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${qn}`;let sa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ra}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const aa=C`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${eo}`;let ca=(()=>{class e extends v.AE{constructor(r){super(r),this.document=aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const la=C`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${to}`;let ua=(()=>{class e extends v.AE{constructor(r){super(r),this.document=la}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const da=C`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${no}`;let pa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=da}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ma=C`
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
    ${ro}
${io}
${oo}
${rn}`;let ga=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ma}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fa=C`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${rn}`;let ha=(()=>{class e extends v.mm{constructor(r){super(r),this.document=fa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const va=C`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${so}`;let za=(()=>{class e extends v.mm{constructor(r){super(r),this.document=va}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _a=C`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Ca=(()=>{class e extends v.mm{constructor(r){super(r),this.document=_a}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ya=C`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${ao}`;let Ta=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ya}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
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
    `;const Ia=C`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${co}`;let Ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ia}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Da=C`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
    link
  }
}
    `;let Oa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Da}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sa=C`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${lo}`;let Ma=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Aa=C`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${po}`;let Na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(ze,ee,o)=>{o.r(ee),o.d(ee,{LayoutModule:()=>Ht});var i=o(9808),t=o(325),n=o(5e3),s=o(9350),A=o(8929),_=o(7625),c=o(655),W=o(4090),d=o(1721),E=o(4219),D=o(925),F=o(647),L=o(226),ne=o(5113);const b=["*"],ie=["nz-sider-trigger",""];function j(m,te){}function V(m,te){if(1&m&&(n.ynx(0),n.YNc(1,j,0,0,"ng-template",3),n.BQk()),2&m){const p=n.oxw(),T=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzZeroTrigger||T)}}function Y(m,te){}function N(m,te){if(1&m&&(n.ynx(0),n.YNc(1,Y,0,0,"ng-template",3),n.BQk()),2&m){const p=n.oxw(),T=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzTrigger||T)}}function U(m,te){if(1&m&&n._UZ(0,"i",5),2&m){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"right":"left")}}function se(m,te){if(1&m&&n._UZ(0,"i",5),2&m){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"left":"right")}}function B(m,te){if(1&m&&(n.YNc(0,U,1,1,"i",4),n.YNc(1,se,1,1,"i",4)),2&m){const p=n.oxw();n.Q6J("ngIf",!p.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",p.nzReverseArrow)}}function I(m,te){1&m&&n._UZ(0,"i",6)}function h(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(p);const ce=n.oxw();return ce.setCollapsed(!ce.nzCollapsed)}),n.qZA()}if(2&m){const p=n.oxw();n.Q6J("matchBreakPoint",p.matchBreakPoint)("nzCollapsedWidth",p.nzCollapsedWidth)("nzCollapsed",p.nzCollapsed)("nzBreakpoint",p.nzBreakpoint)("nzReverseArrow",p.nzReverseArrow)("nzTrigger",p.nzTrigger)("nzZeroTrigger",p.nzZeroTrigger)("siderWidth",p.widthSetting)}}let x=(()=>{class m{constructor(p,T){this.elementRef=p,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),O=(()=>{class m{constructor(p,T){this.elementRef=p,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),w=(()=>{class m{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return m.\u0275fac=function(p){return new(p||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(p,T){2&p&&(n.Udp("width",T.isNormalTrigger?T.siderWidth:null),n.ekj("ant-layout-sider-trigger",T.isNormalTrigger)("ant-layout-sider-zero-width-trigger",T.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",T.isZeroTrigger&&T.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",T.isZeroTrigger&&!T.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:ie,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(p,T){1&p&&(n.YNc(0,V,2,1,"ng-container",0),n.YNc(1,N,2,1,"ng-container",0),n.YNc(2,B,2,2,"ng-template",null,1,n.W1O),n.YNc(4,I,1,0,"ng-template",null,2,n.W1O)),2&p&&(n.Q6J("ngIf",T.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",T.isNormalTrigger))},directives:[i.O5,i.tP,F.Ls],encapsulation:2,changeDetection:0}),m})(),u=(()=>{class m{constructor(p,T,ce){this.platform=p,this.cdr=T,this.breakpointService=ce,this.destroy$=new A.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,d.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(p){p!==this.nzCollapsed&&(this.nzCollapsed=p,this.nzCollapsedChange.emit(p),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(W.ow,!0).pipe((0,_.R)(this.destroy$)).subscribe(p=>{const T=this.nzBreakpoint;T&&(0,d.ov)().subscribe(()=>{this.matchBreakPoint=!p[T],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(p){const{nzCollapsed:T,nzCollapsedWidth:ce,nzWidth:De}=p;(T||ce||De)&&this.updateStyleMap(),T&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(D.t4),n.Y36(n.sBO),n.Y36(W.r3))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-sider"]],contentQueries:function(p,T,ce){if(1&p&&n.Suo(ce,E.wO,5),2&p){let De;n.iGM(De=n.CRH())&&(T.nzMenuDirective=De.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(p,T){2&p&&(n.Udp("flex",T.flexSetting)("max-width",T.widthSetting)("min-width",T.widthSetting)("width",T.widthSetting),n.ekj("ant-layout-sider-zero-width",T.nzCollapsed&&0===T.nzCollapsedWidth)("ant-layout-sider-light","light"===T.nzTheme)("ant-layout-sider-dark","dark"===T.nzTheme)("ant-layout-sider-collapsed",T.nzCollapsed)("ant-layout-sider-has-trigger",T.nzCollapsible&&null!==T.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:b,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(p,T){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,h,1,8,"div",1)),2&p&&(n.xp6(2),n.Q6J("ngIf",T.nzCollapsible&&null!==T.nzTrigger))},directives:[w,i.O5],encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzReverseArrow",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzCollapsible",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzCollapsed",void 0),m})(),R=(()=>{class m{constructor(p){this.directionality=p,this.dir="ltr",this.destroy$=new A.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(L.Is,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-layout"]],contentQueries:function(p,T,ce){if(1&p&&n.Suo(ce,u,4),2&p){let De;n.iGM(De=n.CRH())&&(T.listOfNzSiderComponent=De)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(p,T){2&p&&n.ekj("ant-layout-rtl","rtl"===T.dir)("ant-layout-has-sider",T.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),G=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[L.vT,i.ez,F.PV,ne.xu,D.ud]]}),m})();var K=o(404),_e=o(1894),Te=o(712),Ae=o(373),xe=o(1047),oe=o(4182),Ce=o(2845),pe=o(4832),Me=o(969),H=o(3753),he=o(2654),k=o(8514),ge=o(6787),ue=o(2198),Ne=o(2868),Pe=o(6792),re=o(2986),Ee=o(7545),de=o(1159),Oe=o(7429),Q=o(8076);function fe(m,te){if(1&m&&(n.ynx(0),n._uU(1),n.BQk()),2&m){const p=n.oxw();n.xp6(1),n.Oqu(p.nzLabel)}}const J=[[["nz-auto-option"]]],Ie=["nz-auto-option"],be=["*"],Be=["panel"],tt=["content"];function nt(m,te){}function Ke(m,te){1&m&&n.YNc(0,nt,0,0,"ng-template")}function Ve(m,te){1&m&&n.Hsn(0)}function C(m,te){if(1&m&&(n.TgZ(0,"nz-auto-option",8),n._uU(1),n.qZA()),2&m){const p=te.$implicit;n.Q6J("nzValue",p)("nzLabel",p&&p.label?p.label:p),n.xp6(1),n.hij(" ",p&&p.label?p.label:p," ")}}function He(m,te){if(1&m&&n.YNc(0,C,2,3,"nz-auto-option",7),2&m){const p=n.oxw(2);n.Q6J("ngForOf",p.nzDataSource)}}function Xe(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"div",0,1),n.NdJ("@slideMotion.done",function(ce){return n.CHM(p),n.oxw().onAnimationEvent(ce)}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.YNc(4,Ke,1,0,void 0,4),n.qZA(),n.qZA(),n.qZA(),n.YNc(5,Ve,1,0,"ng-template",null,5,n.W1O),n.YNc(7,He,1,1,"ng-template",null,6,n.W1O)}if(2&m){const p=n.MAs(6),T=n.MAs(8),ce=n.oxw();n.ekj("ant-select-dropdown-hidden",!ce.showPanel)("ant-select-dropdown-rtl","rtl"===ce.dir),n.Q6J("ngClass",ce.nzOverlayClassName)("ngStyle",ce.nzOverlayStyle)("nzNoAnimation",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation),n.xp6(4),n.Q6J("ngTemplateOutlet",ce.nzDataSource?T:p)}}let Ye=(()=>{class m{constructor(){}}return m.\u0275fac=function(p){return new(p||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ie,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(p,T){1&p&&(n.F$t(J),n.TgZ(0,"div",0),n.YNc(1,fe,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&p&&(n.xp6(1),n.Q6J("nzStringTemplateOutlet",T.nzLabel))},directives:[Me.f],encapsulation:2,changeDetection:0}),m})();class lt{constructor(te,p=!1){this.source=te,this.isUserInput=p}}let we=(()=>{class m{constructor(p,T,ce,De){this.ngZone=p,this.changeDetectorRef=T,this.element=ce,this.nzAutocompleteOptgroupComponent=De,this.nzDisabled=!1,this.selectionChange=new n.vpe,this.mouseEntered=new n.vpe,this.active=!1,this.selected=!1,this.destroy$=new A.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,H.R)(this.element.nativeElement,"mouseenter").pipe((0,ue.h)(()=>this.mouseEntered.observers.length>0),(0,_.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,H.R)(this.element.nativeElement,"mousedown").pipe((0,_.R)(this.destroy$)).subscribe(p=>p.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(p=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),p&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,d.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(p=!1){this.selectionChange.emit(new lt(this,p))}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(Ye,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(p,T){1&p&&n.NdJ("click",function(){return T.selectViaInteraction()}),2&p&&(n.uIk("aria-selected",T.selected.toString())("aria-disabled",T.nzDisabled.toString()),n.ekj("ant-select-item-option-grouped",T.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",T.selected)("ant-select-item-option-active",T.active)("ant-select-item-option-disabled",T.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:be,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(p,T){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzDisabled",void 0),m})();const pt={provide:oe.JU,useExisting:(0,n.Gpc)(()=>l),multi:!0};let l=(()=>{class m{constructor(p,T,ce,De,et){this.elementRef=p,this.overlay=T,this.viewContainerRef=ce,this.nzInputGroupWhitSuffixOrPrefixDirective=De,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new A.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,_.R)(this.destroy$)).subscribe(p=>{"void"===p.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(p){Promise.resolve(null).then(()=>this.setTriggerValue(p))}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}setDisabledState(p){this.elementRef.nativeElement.disabled=p,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(p){const T=p.keyCode,ce=T===de.LH||T===de.JH;T===de.hY&&p.preventDefault(),!this.panelOpen||T!==de.hY&&T!==de.Mf?this.panelOpen&&T===de.K5?this.nzAutocomplete.showPanel&&(p.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&ce&&this.nzAutocomplete.showPanel&&(p.stopPropagation(),p.preventDefault(),T===de.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(p){const T=p.target,ce=this.document;let De=T.value;"number"===T.type&&(De=""===De?null:parseFloat(De)),this.previousValue!==De&&(this.previousValue=De,this.onChange(De),this.canOpen()&&ce.activeElement===p.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Ne.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Pe.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(p=>{this.setValueAndClose(p)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ue.h)(p=>!this.elementRef.nativeElement.contains(p.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function v(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Oe.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Ce.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const p=[new Ce.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Ce.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(p).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const p=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==p?(this.nzAutocomplete.setActiveItem(p),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(p){const T=p.nzValue;this.setTriggerValue(p.getLabel()),this.onChange(T),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(p){const T=this.nzAutocomplete.getOption(p),ce=T?T.getLabel():p;this.elementRef.nativeElement.value=null!=ce?ce:"",this.nzAutocomplete.nzBackfill||(this.previousValue=ce)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const p=this.elementRef.nativeElement;return!p.readOnly&&!p.disabled}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(Ce.aV),n.Y36(n.s_b),n.Y36(xe.ke,8),n.Y36(i.K0,8))},m.\u0275dir=n.lG2({type:m,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(p,T){1&p&&n.NdJ("focusin",function(){return T.handleFocus()})("blur",function(){return T.handleBlur()})("input",function(De){return T.handleInput(De)})("keydown",function(De){return T.handleKeydown(De)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([pt])]}),m})(),ve=(()=>{class m{constructor(p,T,ce,De){this.changeDetectorRef=p,this.ngZone=T,this.directionality=ce,this.noAnimation=De,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Gt)=>et===Gt,this.selectionChange=new n.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new A.xQ,this.animationStateChange=new n.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=he.w.EMPTY,this.optionMouseEnterSubscription=he.w.EMPTY,this.dataSourceChangeSubscription=he.w.EMPTY,this.optionSelectionChanges=(0,k.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ee.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,k.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ee.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var p;null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(p){this.animationStateChange.emit(p)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(p){const T=this.options.get(p);T&&!T.active?(this.activeItem=T,this.activeItemIndex=p,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(p){return this.options.reduce((T,ce,De)=>-1===T?this.compareWith(p,ce.nzValue)?De:-1:T,-1)}getOption(p){return this.options.find(T=>this.compareWith(p,T.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(T=>{!T.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(p,T=!1){this.options.forEach(ce=>{ce!==p&&(T&&ce.deselect(),ce.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,ue.h)(p=>p.isUserInput)).subscribe(p=>{p.source.select(),p.source.setActiveStyles(),this.activeItem=p.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p.source,!0),this.selectionChange.emit(p.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(p=>{p.setActiveStyles(),this.activeItem=p,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p)})}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36(L.Is,8),n.Y36(pe.P,9))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-autocomplete"]],contentQueries:function(p,T,ce){if(1&p&&n.Suo(ce,we,5),2&p){let De;n.iGM(De=n.CRH())&&(T.fromContentOptions=De)}},viewQuery:function(p,T){if(1&p&&(n.Gf(n.Rgc,5),n.Gf(Be,5),n.Gf(tt,5),n.Gf(we,5)),2&p){let ce;n.iGM(ce=n.CRH())&&(T.template=ce.first),n.iGM(ce=n.CRH())&&(T.panel=ce.first),n.iGM(ce=n.CRH())&&(T.content=ce.first),n.iGM(ce=n.CRH())&&(T.fromDataSourceOptions=ce)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:be,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(p,T){1&p&&(n.F$t(),n.YNc(0,Xe,9,10,"ng-template"))},directives:[we,i.mk,i.PC,pe.P,i.tP,i.sg],encapsulation:2,data:{animation:[Q.mF]},changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzDefaultActiveFirstOption",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzBackfill",void 0),m})(),z=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[L.vT,i.ez,Ce.U8,oe.u5,Me.T,pe.g,xe.o7]]}),m})();var g=o(6949);function me(m,te){1&m&&n._UZ(0,"i",5)}function ye(m,te){if(1&m){const p=n.EpF();n.ynx(0),n.TgZ(1,"a",6),n.TgZ(2,"nz-auto-option",7),n.NdJ("click",function(){n.CHM(p);const ce=n.oxw();return ce.searchQuery="",ce.refresh()}),n.TgZ(3,"span"),n._UZ(4,"i",8),n._uU(5," \xa0 "),n._UZ(6,"span",9),n._UZ(7,"br"),n._UZ(8,"span",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const p=te.$implicit,T=n.oxw();n.xp6(1),n.Q6J("routerLink",T.urlForResult(p)),n.xp6(1),n.Q6J("nzValue",T.urlForResult(p)),n.xp6(2),n.Q6J("nzType",T.iconNameForResult(p)),n.xp6(2),n.s9C("innerHTML",p.name,n.oJD),n.xp6(2),n.s9C("innerHTML",p.matchingText,n.oJD)}}let Re=(()=>{class m{constructor(p,T){this.gql=p,this.router=T,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,Ae.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(p){switch(p.resultType){case Te.rZD.EvidenceItem:return"civic:evidence";case Te.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${p.resultType.toLowerCase()}`}}urlForResult(p){let T;switch(p.resultType){case Te.rZD.VariantGroup:T="variant-groups";break;case Te.rZD.EvidenceItem:T="evidence";break;default:T=`${p.resultType.toLowerCase()}s`}return`/${T}/${p.id}/summary`}quicksearchSelected(p){let T=p.target.value;this.searchQuery="",this.router.navigate([T])}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(Te.ghc),n.Y36(t.F0))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(p,T){if(1&p&&(n.TgZ(0,"nz-input-group",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(De){return T.searchQuery=De})("ngModelChange",function(){return T.refresh()})("keyup.enter",function(De){return T.quicksearchSelected(De)}),n.qZA(),n.qZA(),n.YNc(2,me,1,0,"ng-template",null,2,n.W1O),n.TgZ(4,"nz-autocomplete",null,3),n.YNc(6,ye,9,5,"ng-container",4),n.ALo(7,"ngrxPush"),n.qZA()),2&p){const ce=n.MAs(3),De=n.MAs(5);n.Q6J("nzSuffix",ce),n.xp6(1),n.Q6J("ngModel",T.searchQuery)("nzAutocomplete",De),n.xp6(5),n.Q6J("ngForOf",n.lcZ(7,4,T.searchResults$))}},directives:[xe.gB,xe.ke,xe.Zp,oe.Fj,l,oe.JJ,oe.On,F.Ls,ve,i.sg,t.yS,we],pipes:[g.fM],styles:[""]}),m})();var We=o(1912),$e=o(4850),Ge=o(1059),ke=o(2340),Je=o(8144),qe=o(6042),rt=o(2643),ct=o(2683),Ze=o(3677),ot=o(4401),ut=o(7881),st=o(3640),y=o(8785),q=o(3434);function P(m,te){if(1&m&&(n.TgZ(0,"button",25),n._uU(1," Add "),n._UZ(2,"i",26),n.qZA()),2&m){n.oxw(2);const p=n.MAs(14);n.Q6J("nzDropdownMenu",p)}}const le=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function Se(m,te){if(1&m&&(n.TgZ(0,"nz-badge",27),n.TgZ(1,"button",28),n._UZ(2,"i",29),n.qZA(),n.qZA()),2&m){const p=n.oxw().ngrxLet,T=n.oxw().ngIf;n.Q6J("nzCount",p)("nzOverflowCount",999)("nzStyle",n.DdM(4,le)),n.xp6(1),n.MGl("routerLink","/users/",T.id,"/notifications")}}const Fe=function(m){return{"update-coi":m}};function mt(m,te){if(1&m&&n._UZ(0,"cvc-user-avatar",35),2&m){const p=n.oxw(3).ngIf;n.Q6J("user",p)("size",22)("ngClass",n.VKq(3,Fe,p.invalidCoi))}}function qt(m,te){if(1&m&&(n.TgZ(0,"div",36),n._uU(1),n.qZA()),2&m){const p=n.oxw(3).ngIf;n.xp6(1),n.Oqu(p.username)}}function gt(m,te){1&m&&n._UZ(0,"i",26)}function ft(m,te){if(1&m&&(n.TgZ(0,"button",30),n.TgZ(1,"nz-space",31),n.YNc(2,mt,1,5,"cvc-user-avatar",32),n.YNc(3,qt,2,1,"div",33),n.YNc(4,gt,1,0,"i",34),n.qZA(),n.qZA()),2&m){n.oxw(2);const p=n.MAs(3);n.Q6J("nzDropdownMenu",p)}}function ht(m,te){1&m&&(n.TgZ(0,"nz-space",21),n.YNc(1,P,3,1,"button",22),n.YNc(2,Se,3,5,"nz-badge",23),n.YNc(3,ft,5,1,"button",24),n.qZA())}function vt(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"li",16),n.TgZ(1,"button",37),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",38),n._uU(3," Please update COI statement "),n.qZA(),n.qZA()}}function zt(m,te){1&m&&n._UZ(0,"li",13)}function _t(m,te){1&m&&(n.TgZ(0,"li",39),n.TgZ(1,"a",40),n._uU(2," Admin Console "),n.qZA(),n.qZA())}function Ct(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"li",16),n.TgZ(1,"a",41),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA(),n.qZA()}}const yt=function(m){return["/users",m]};function Tt(m,te){if(1&m){const p=n.EpF();n.ynx(0),n.YNc(1,ht,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7),n.TgZ(4,"ul",8),n.YNc(5,vt,4,0,"li",9),n.YNc(6,zt,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,_t,3,0,"li",12),n._UZ(10,"li",13),n.TgZ(11,"li",14),n.NdJ("click",function(){return n.CHM(p),n.oxw().signOut()}),n._uU(12,"Sign Out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"nz-dropdown-menu",null,15),n.TgZ(15,"ul",8),n.TgZ(16,"li",16),n.TgZ(17,"a",17),n._uU(18," Evidence Item "),n.qZA(),n.qZA(),n.TgZ(19,"li",16),n.TgZ(20,"a",18),n._uU(21," Assertion "),n.qZA(),n.qZA(),n.TgZ(22,"li",16),n.TgZ(23,"a",19),n._uU(24," Source Suggestion "),n.qZA(),n.qZA(),n.YNc(25,Ct,3,0,"li",9),n.TgZ(26,"li",16),n.TgZ(27,"a",20),n._uU(28," Variant Group "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const p=te.ngIf,T=n.oxw();n.xp6(1),n.Q6J("ngrxLet",T.unreadCount$),n.xp6(4),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(6,yt,p.id)),n.xp6(2),n.Q6J("ngIf",p.isAdmin),n.xp6(16),n.Q6J("ngIf",p.isEditor)}}function It(m,te){1&m&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function Et(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"cvc-user-coi-form",42),n.NdJ("coiUpdatedEvent",function(){return n.CHM(p),n.oxw().coiUpdated()}),n.qZA()}}function Dt(m,te){1&m&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Ot(m,te){1&m&&n._UZ(0,"cvc-variant-submit-form")}let en=(()=>{class m{constructor(p,T){this.queryService=p,this.unreadCountGql=T,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,$e.U)(({data:ce})=>ce.notifications.unreadCount),(0,Ge.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,$e.U)(({data:ce})=>ce.notifications.unreadCount),(0,Ge.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(s.a),n.Y36(Te.Kmw))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(p,T){if(1&p&&(n.YNc(0,Tt,29,8,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(De){return T.coiUpdateModalVisible=De})("nzOnCancel",function(){return T.handleCoiModalCancel()}),n.YNc(3,It,2,0,"ng-template",null,2,n.W1O),n.YNc(5,Et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(De){return T.addVariantModalVisible=De})("nzOnCancel",function(){return T.addVariantModalVisible=!1}),n.YNc(8,Dt,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Ot,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&p){const ce=n.MAs(4),De=n.MAs(6),et=n.MAs(9),Gt=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,T.viewer$)),n.xp6(2),n.Q6J("nzVisible",T.coiUpdateModalVisible)("nzContent",De)("nzTitle",ce)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",T.addVariantModalVisible)("nzContent",Gt)("nzTitle",et)("nzFooter",null)}},directives:[i.O5,g.eJ,Je.NU,Je.$1,qe.ix,rt.dQ,ct.w,Ze.wA,Ze.cm,F.Ls,ot.x7,t.rH,ut.L,i.mk,Ze.RR,E.wO,E.r9,E.YV,t.yS,st.du,y.t,q.G],pipes:[g.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),m})();function St(m,te){1&m&&n._UZ(0,"img",58)}function Mt(m,te){1&m&&n._UZ(0,"img",59)}function At(m,te){1&m&&n._UZ(0,"cvc-login-button")}function Nt(m,te){1&m&&n._UZ(0,"cvc-viewer-button")}const at=function(m){return{"is-collapsed":m}},xt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class m{constructor(p){this.viewerService=p,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(s.a))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-layout"]],decls:124,vars:46,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(p,T){1&p&&(n.TgZ(0,"nz-layout",0),n.TgZ(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(De){return T.isCollapsed=De}),n.TgZ(2,"a",2),n.TgZ(3,"div",3),n.YNc(4,St,1,0,"img",4),n.YNc(5,Mt,1,0,"img",5),n.qZA(),n.qZA(),n.TgZ(6,"ul",6),n.TgZ(7,"li",7),n.TgZ(8,"ul"),n.TgZ(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span"),n.TgZ(12,"a",10),n._uU(13,"Assertions"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span"),n.TgZ(17,"a",12),n._uU(18,"Evidence"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span"),n.TgZ(22,"a",14),n._uU(23,"Genes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span"),n.TgZ(27,"a",16),n._uU(28,"Variants"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span"),n.TgZ(32,"a",18),n._uU(33,"Variant Groups"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span"),n.TgZ(37,"a",20),n._uU(38,"Clinical Trials"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span"),n.TgZ(42,"a",22),n._uU(43,"Diseases"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span"),n.TgZ(47,"a",24),n._uU(48,"Drugs"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span"),n.TgZ(52,"a",26),n._uU(53,"Phenotypes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span"),n.TgZ(57,"a",28),n._uU(58,"Sources"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span"),n.TgZ(62,"a",30),n._uU(63,"Variant Types"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(64,"li",7),n.TgZ(65,"ul"),n.TgZ(66,"li",8),n._UZ(67,"i",31),n.TgZ(68,"span"),n.TgZ(69,"a",32),n._uU(70," Activity "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span"),n.TgZ(74,"a",34),n._uU(75,"Queues"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"li",7),n.TgZ(77,"ul"),n.TgZ(78,"li",8),n._UZ(79,"i",35),n.TgZ(80,"span"),n.TgZ(81,"a",36),n._uU(82,"Contributors"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span"),n.TgZ(86,"a",38),n._uU(87,"Organizations"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(88,"li",7),n.TgZ(89,"ul"),n.TgZ(90,"li",8),n._UZ(91,"i",39),n.TgZ(92,"span"),n.TgZ(93,"a",40),n._uU(94,"Data Releases"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(95,"div",41),n._UZ(96,"img",42),n._UZ(97,"img",43),n.qZA(),n.qZA(),n.TgZ(98,"nz-layout",44),n.TgZ(99,"nz-header"),n.TgZ(100,"div",45),n.TgZ(101,"div",46),n.TgZ(102,"span",47),n.NdJ("click",function(){return T.isCollapsed=!T.isCollapsed}),n._UZ(103,"i",48),n.qZA(),n.qZA(),n.TgZ(104,"div",49),n._UZ(105,"cvc-quicksearch"),n.qZA(),n.TgZ(106,"div",50),n.TgZ(107,"ul",51),n.TgZ(108,"li",52),n.TgZ(109,"a",53),n._uU(110,"Home"),n.qZA(),n.qZA(),n.TgZ(111,"li",52),n.TgZ(112,"a",54),n._uU(113,"About CIViC"),n.qZA(),n.qZA(),n.TgZ(114,"li",52),n.TgZ(115,"a",55),n._uU(116,"Help"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(117,"div",56),n.YNc(118,At,1,0,"cvc-login-button",57),n.ALo(119,"async"),n.YNc(120,Nt,1,0,"cvc-viewer-button",57),n.ALo(121,"async"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(122,"nz-content"),n._UZ(123,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&p&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",T.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(38,at,T.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!T.isCollapsed),n.xp6(1),n.Q6J("ngIf",T.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(40,at,T.isCollapsed))("nzInlineCollapsed",T.isCollapsed),n.xp6(1),n.Q6J("nzTitle",T.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(42,at,T.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(44,at,T.isCollapsed)),n.xp6(5),n.Q6J("nzType",T.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(119,34,T.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(121,36,T.signedIn$)))},directives:[R,u,t.yS,i.mk,i.O5,E.wO,E.uA,E.r9,K.SY,F.Ls,O,_e.SK,_e.t3,Re,We.s,en,x,t.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),m})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(136)]).then(o.bind(o,136)).then(m=>m.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7717),o.e(1838)]).then(o.bind(o,1838)).then(m=>m.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(233)]).then(o.bind(o,233)).then(m=>m.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1592)]).then(o.bind(o,1592)).then(m=>m.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7727)]).then(o.bind(o,7727)).then(m=>m.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(3664),o.e(392),o.e(681)]).then(o.bind(o,681)).then(m=>m.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(m=>m.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1076)]).then(o.bind(o,1076)).then(m=>m.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(3278),o.e(2033),o.e(7717),o.e(8592),o.e(7465)]).then(o.bind(o,9802)).then(m=>m.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(3278),o.e(97)]).then(o.bind(o,7563)).then(m=>m.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(m=>m.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(3664),o.e(79)]).then(o.bind(o,79)).then(m=>m.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(m=>m.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(m=>m.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(5193),o.e(4025),o.e(9001),o.e(2826),o.e(6724),o.e(9716),o.e(376),o.e(6113)]).then(o.bind(o,4340)).then(m=>m.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(m=>m.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(m=>m.PagesModule),data:{breadcrumb:"Pages"}}]}];let Lt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[t.Bz.forChild(xt)],t.Bz]}),m})();var Pt=o(3618),Ft=o(5109),Yt=o(4546);let Wt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,oe.u5,t.Bz,g.WG,xe.o7,Yt.U5,F.PV,z]]}),m})();var kt=o(1844),Jt=o(5473),Qt=o(330),jt=o(7058);let Kt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,g.WG,Ze.b1,t.Bz,qe.sL,Je.zf,F.PV,ot.mS,K.cg,st.Qp,Jt.H,Qt.e,jt.e]]}),m})(),Ht=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,Lt,F.PV,_e.Jb,G,E.ip,K.cg,Pt.ZJ,Ft.s,kt.B,Kt,Wt]]}),m})()},6792:(ze,ee,o)=>{o.d(ee,{g:()=>A});var i=o(353),n=o(3489),s=o(9312);function A(d,E=i.P){const F=function t(d){return d instanceof Date&&!isNaN(+d)}(d)?+d-E.now():Math.abs(d);return L=>L.lift(new _(F,E))}class _{constructor(E,D){this.delay=E,this.scheduler=D}call(E,D){return D.subscribe(new c(E,this.delay,this.scheduler))}}class c extends n.L{constructor(E,D,F){super(E),this.delay=D,this.scheduler=F,this.queue=[],this.active=!1,this.errored=!1}static dispatch(E){const D=E.source,F=D.queue,L=E.scheduler,ne=E.destination;for(;F.length>0&&F[0].time-L.now()<=0;)F.shift().notification.observe(ne);if(F.length>0){const b=Math.max(0,F[0].time-L.now());this.schedule(E,b)}else this.unsubscribe(),D.active=!1}_schedule(E){this.active=!0,this.destination.add(E.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:E}))}scheduleNotification(E){if(!0===this.errored)return;const D=this.scheduler,F=new W(D.now()+this.delay,E);this.queue.push(F),!1===this.active&&this._schedule(D)}_next(E){this.scheduleNotification(s.P.createNext(E))}_error(E){this.errored=!0,this.queue=[],this.destination.error(E),this.unsubscribe()}_complete(){this.scheduleNotification(s.P.createComplete()),this.unsubscribe()}}class W{constructor(E,D){this.time=E,this.notification=D}}},373:(ze,ee,o)=>{o.d(ee,{j:()=>t});var i=o(4850);function t(...s){const A=s.length;if(0===A)throw new Error("list of properties cannot be empty.");return _=>(0,i.U)(function n(s,A){return c=>{let W=c;for(let d=0;d<A;d++){const E=null!=W?W[s[d]]:void 0;if(void 0===E)return;W=E}return W}}(s,A))(_)}},3164:(ze,ee,o)=>{o.d(ee,{p:()=>c});var i=o(3489),t=o(353);const n={leading:!0,trailing:!1};function c(D,F=t.P,L=n){return ne=>ne.lift(new W(D,F,L.leading,L.trailing))}class W{constructor(F,L,ne,b){this.duration=F,this.scheduler=L,this.leading=ne,this.trailing=b}call(F,L){return L.subscribe(new d(F,this.duration,this.scheduler,this.leading,this.trailing))}}class d extends i.L{constructor(F,L,ne,b,ie){super(F),this.duration=L,this.scheduler=ne,this.leading=b,this.trailing=ie,this._hasTrailingValue=!1,this._trailingValue=null}_next(F){this.throttled?this.trailing&&(this._trailingValue=F,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(E,this.duration,{subscriber:this})),this.leading?this.destination.next(F):this.trailing&&(this._trailingValue=F,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const F=this.throttled;F&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),F.unsubscribe(),this.remove(F),this.throttled=null)}}function E(D){const{subscriber:F}=D;F.clearThrottle()}},444:(ze,ee,o)=>{function i(I){return I!==String(parseFloat(I))}o.d(ee,{o6:()=>B});var A=Object.getOwnPropertyNames?function t(I){return Object.getOwnPropertyNames(I).filter(function(h){return I.propertyIsEnumerable(h)&&i(h)})}:Object.keys?function n(I){return Object.keys(I).filter(i)}:function s(I){var h=[];for(var x in I)I.hasOwnProperty(x)&&I.propertyIsEnumerable(x)&&i(x)&&h.push(x);return h},_=function(){function I(h){this.enumObj=h,this.keysList=Object.freeze(A(h));for(var x=this.keysList.length,$=new Array(x),O=new Map,w=0;w<x;++w){var u=this.keysList[w],R=h[u];$[w]=R,O.set(R,u),this[w]=Object.freeze([u,R])}this.valuesList=Object.freeze($),this.keysByValueMap=O,this.size=this.length=x,Object.freeze(this)}return I.prototype.toString=function(){return"[object EnumWrapper]"},I.prototype.keys=function(){var h,x=this,$=0;return(h={next:function(){var w={done:$>=x.length,value:x.keysList[$]};return++$,w}})[Symbol.iterator]=function(){return this},h},I.prototype.values=function(){var h,x=this,$=0;return(h={next:function(){var w={done:$>=x.length,value:x.valuesList[$]};return++$,w}})[Symbol.iterator]=function(){return this},h},I.prototype.entries=function(){var h,x=this,$=0;return(h={next:function(){var w={done:$>=x.length,value:x[$]};return++$,w}})[Symbol.iterator]=function(){return this},h},I.prototype[Symbol.iterator]=function(){return this.entries()},I.prototype.forEach=function(h,x){for(var $=this.length,O=0;O<$;++O){var w=this[O];h.call(x,w[1],w[0],this,O)}},I.prototype.map=function(h,x){for(var $=this.length,O=new Array($),w=0;w<$;++w){var u=this[w];O[w]=h.call(x,u[1],u[0],this,w)}return O},I.prototype.getKeys=function(){return this.keysList.slice()},I.prototype.getValues=function(){return this.valuesList.slice()},I.prototype.getEntries=function(){return Array.prototype.slice.call(this)},I.prototype.indexOfKey=function(h){return this.keysList.indexOf(h)},I.prototype.indexOfValue=function(h){return this.valuesList.indexOf(h)},I.prototype.isKey=function(h){return null!=h&&i(h)&&this.enumObj.hasOwnProperty(h)},I.prototype.asKeyOrThrow=function(h){if(this.isKey(h))return h;throw new Error("Unexpected key: "+h+". Expected one of: "+this.getValues())},I.prototype.asKeyOrDefault=function(h,x){return this.isKey(h)?h:x},I.prototype.isValue=function(h){return null!=h&&this.keysByValueMap.has(h)},I.prototype.asValueOrThrow=function(h){if(this.isValue(h))return h;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},I.prototype.asValueOrDefault=function(h,x){return this.isValue(h)?h:x},I.prototype.getKeyOrThrow=function(h){var x=null!=h?this.keysByValueMap.get(h):void 0;if(null!=x)return x;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},I.prototype.getKeyOrDefault=function(h,x){var $=null!=h?this.keysByValueMap.get(h):void 0;return null!=$?$:x},I.prototype.getValueOrThrow=function(h){return this.enumObj[this.asKeyOrThrow(h)]},I.prototype.getValueOrDefault=function(h,x){return this.isKey(h)?this.enumObj[h]:x},I}();_.prototype[Symbol.toStringTag]="EnumWrapper";var c=Symbol("ts-enum-util:unhandledEntry"),W=Symbol("ts-enum-util:handleNull"),d=Symbol("ts-enum-util:handleUndefined"),E=Symbol("ts-enum-util:handleUnexpected");function D(I){return new Error("Unhandled value: "+I)}var F=function(){function I(h){this.value=h}return I.prototype.with=function(h){if(h.hasOwnProperty(this.value))return b(h[this.value],this.value);if(h[E])return b(h[E],this.value);throw new Error("Unexpected value: "+this.value)},I}(),L=function(){function I(){}return I.prototype.with=function(h){if(h[W])return b(h[W],null);if(h[E])return b(h[E],null);throw new Error("Unexpected value: null")},I}(),ne=function(){function I(){}return I.prototype.with=function(h){if(h[d])return b(h[d],void 0);if(h[E])return b(h[E],void 0);throw new Error("Unexpected value: undefined")},I}();function b(I,h){if(I===c)throw D(h);return I(h)}var ie=function(){function I(h){this.value=h}return I.prototype.with=function(h){if(h.hasOwnProperty(this.value))return Y(h[this.value],this.value);if(h.hasOwnProperty(E))return Y(h[E],this.value);throw new Error("Unexpected value: "+this.value)},I}(),j=function(){function I(){}return I.prototype.with=function(h){if(h.hasOwnProperty(W))return Y(h[W],null);if(h.hasOwnProperty(E))return Y(h[E],null);throw new Error("Unexpected value: null")},I}(),V=function(){function I(){}return I.prototype.with=function(h){if(h.hasOwnProperty(d))return Y(h[d],void 0);if(h.hasOwnProperty(E))return Y(h[E],void 0);throw new Error("Unexpected value: undefined")},I}();function Y(I,h){if(I===c)throw D(h);return I}var se=new WeakMap;function B(I){var h=se.get(I);return h||(h=new _(I),se.set(I,h)),h}B.handleNull=W,B.handleUndefined=d,B.handleUnexpected=E,B.unhandledEntry=c,B.visitValue=function N(I){return null===I?new L:void 0===I?new ne:new F(I)},B.mapValue=function U(I){return null===I?new j:void 0===I?new V:new ie(I)}},9552:(ze,ee,o)=>{o.d(ee,{$:()=>x,j:()=>$});var i=o(655),t=o(9808),n=o(5e3),s=o(2654),A=o(839),_=o(8929),c=o(6787),W=o(3753),d=o(7625),E=o(4850),D=o(3164),F=o(9439),L=o(1721),ne=o(4090),b=o(925),ie=o(5577),j=o(226);const V=["fixedEl"],Y=["*"];var N=(()=>{return(O=N||(N={})).resize="resize",O.scroll="scroll",O.touchstart="touchstart",O.touchmove="touchmove",O.touchend="touchend",O.pageshow="pageshow",O.load="LOAD",N;var O})();function se(O){return function U(O){return"undefined"!=typeof window&&O===window}(O)?{top:0,left:0,bottom:0}:O.getBoundingClientRect()}const I="ant-affix";let x=(()=>{class O{constructor(u,R,G,K,_e,Te,Ae,xe,oe,Ce){this.nzConfigService=G,this.scrollSrv=K,this.ngZone=_e,this.platform=Te,this.renderer=Ae,this.nzResizeObserver=xe,this.cdr=oe,this.directionality=Ce,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new A.t(1),this.destroy$=new _.xQ,this.placeholderNode=u.nativeElement,this.document=R}get target(){const u=this.nzTarget;return("string"==typeof u?this.document.querySelector(u):u)||window}ngOnInit(){var u;null===(u=this.directionality.change)||void 0===u||u.pipe((0,d.R)(this.destroy$)).subscribe(R=>{this.dir=R,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(u){const{nzOffsetBottom:R,nzOffsetTop:G,nzTarget:K}=u;(R||G)&&this.offsetChanged$.next(),K&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const u=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,c.T)(...Object.keys(N).map(R=>(0,W.R)(this.target,R)),this.offsetChanged$.pipe((0,E.U)(()=>({}))),this.nzResizeObserver.observe(u)).pipe((0,D.p)(20,void 0,{trailing:!0}),(0,d.R)(this.destroy$)).subscribe(R=>this.updatePosition(R))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(u,R){const G=u.getBoundingClientRect(),K=se(R),_e=this.scrollSrv.getScroll(R,!0),Te=this.scrollSrv.getScroll(R,!1),Ae=this.document.body;return{top:G.top-K.top+_e-(Ae.clientTop||0),left:G.left-K.left+Te-(Ae.clientLeft||0),width:G.width,height:G.height}}setAffixStyle(u,R){const G=this.affixStyle,K=this.target===window;if("scroll"===u.type&&G&&R&&K||(0,L.wU)(G,R))return;const _e=!!R,Te=this.fixedEl.nativeElement;this.renderer.setStyle(Te,"cssText",(0,L.GM)(R)),this.affixStyle=R,_e?Te.classList.add(I):Te.classList.remove(I),this.updateRtlClass(),(R&&!G||!R&&G)&&this.nzChange.emit(_e)}setPlaceholderStyle(u){(0,L.wU)(u,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,L.GM)(u)),this.placeholderStyle=u)}syncPlaceholderStyle(u){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const R={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),R)),this.setPlaceholderStyle(R)}updatePosition(u){if(!this.platform.isBrowser)return;const R=this.target;let G=this.nzOffsetTop;const K=this.scrollSrv.getScroll(R,!0),_e=this.getOffset(this.placeholderNode,R),Te=this.fixedEl.nativeElement,Ae={width:Te.offsetWidth,height:Te.offsetHeight},xe={top:!1,bottom:!1};"number"!=typeof G&&"number"!=typeof this.nzOffsetBottom?(xe.top=!0,G=0):(xe.top="number"==typeof G,xe.bottom="number"==typeof this.nzOffsetBottom);const oe=se(R),Ce=R.innerHeight||R.clientHeight;if(K>=_e.top-G&&xe.top){const pe=_e.width;this.setAffixStyle(u,{position:"fixed",top:oe.top+G,left:oe.left+_e.left,width:pe}),this.setPlaceholderStyle({width:pe,height:Ae.height})}else if(K<=_e.top+Ae.height+this.nzOffsetBottom-Ce&&xe.bottom){const pe=R===window?0:window.innerHeight-oe.bottom,Me=_e.width;this.setAffixStyle(u,{position:"fixed",bottom:pe+this.nzOffsetBottom,left:oe.left+_e.left,width:Me}),this.setPlaceholderStyle({width:Me,height:_e.height})}else u.type===N.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(u),this.setPlaceholderStyle();"resize"===u.type&&this.syncPlaceholderStyle(u)}updateRtlClass(){const u=this.fixedEl.nativeElement;"rtl"===this.dir&&u.classList.contains(I)?u.classList.add(`${I}-rtl`):u.classList.remove(`${I}-rtl`)}}return O.\u0275fac=function(u){return new(u||O)(n.Y36(n.SBq),n.Y36(t.K0),n.Y36(F.jY),n.Y36(ne.MF),n.Y36(n.R0b),n.Y36(b.t4),n.Y36(n.Qsj),n.Y36(ie.D3),n.Y36(n.sBO),n.Y36(j.Is,8))},O.\u0275cmp=n.Xpm({type:O,selectors:[["nz-affix"]],viewQuery:function(u,R){if(1&u&&n.Gf(V,7),2&u){let G;n.iGM(G=n.CRH())&&(R.fixedEl=G.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:Y,decls:3,vars:0,consts:[["fixedEl",""]],template:function(u,R){1&u&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,F.oS)(),(0,L.Rn)(void 0)],O.prototype,"nzOffsetTop",void 0),(0,i.gn)([(0,F.oS)(),(0,L.Rn)(void 0)],O.prototype,"nzOffsetBottom",void 0),O})(),$=(()=>{class O{}return O.\u0275fac=function(u){return new(u||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[j.vT,t.ez,b.ud]]}),O})()},6699:(ze,ee,o)=>{o.d(ee,{Dz:()=>b,Rt:()=>j});var i=o(655),t=o(5e3),n=o(9439),s=o(1721),A=o(925),_=o(9808),c=o(647),W=o(226);const d=["textEl"];function E(V,Y){if(1&V&&t._UZ(0,"i",3),2&V){const N=t.oxw();t.Q6J("nzType",N.nzIcon)}}function D(V,Y){if(1&V){const N=t.EpF();t.TgZ(0,"img",4),t.NdJ("error",function(se){return t.CHM(N),t.oxw().imgError(se)}),t.qZA()}if(2&V){const N=t.oxw();t.Q6J("src",N.nzSrc,t.LSH),t.uIk("srcset",N.nzSrcSet,t.LSH)("alt",N.nzAlt)}}function F(V,Y){if(1&V&&(t.TgZ(0,"span",5,6),t._uU(2),t.qZA()),2&V){const N=t.oxw();t.Q6J("ngStyle",N.textStyles),t.xp6(2),t.Oqu(N.nzText)}}let b=(()=>{class V{constructor(N,U,se,B){this.nzConfigService=N,this.elementRef=U,this.cdr=se,this.platform=B,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new t.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(N){this.nzError.emit(N),N.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const N=this.textEl.nativeElement.offsetWidth,U=this.el.getBoundingClientRect().width,se=2*this.nzGap<U?2*this.nzGap:8;this.textStyles={transform:`scale(${U-se<N?(U-se)/N:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(N){return new(N||V)(t.Y36(n.jY),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(A.t4))},V.\u0275cmp=t.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(N,U){if(1&N&&t.Gf(d,5),2&N){let se;t.iGM(se=t.CRH())&&(U.textEl=se.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(N,U){2&N&&(t.Udp("width",U.customSize)("height",U.customSize)("line-height",U.customSize)("font-size",U.hasIcon&&U.customSize?U.nzSize/2:null,"px"),t.ekj("ant-avatar-lg","large"===U.nzSize)("ant-avatar-sm","small"===U.nzSize)("ant-avatar-square","square"===U.nzShape)("ant-avatar-circle","circle"===U.nzShape)("ant-avatar-icon",U.nzIcon)("ant-avatar-image",U.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[t.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(N,U){1&N&&(t.YNc(0,E,1,1,"i",0),t.YNc(1,D,1,3,"img",1),t.YNc(2,F,3,2,"span",2)),2&N&&(t.Q6J("ngIf",U.nzIcon&&U.hasIcon),t.xp6(1),t.Q6J("ngIf",U.nzSrc&&U.hasSrc),t.xp6(1),t.Q6J("ngIf",U.nzText&&U.hasText))},directives:[_.O5,c.Ls,_.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,n.oS)()],V.prototype,"nzShape",void 0),(0,i.gn)([(0,n.oS)()],V.prototype,"nzSize",void 0),(0,i.gn)([(0,n.oS)(),(0,s.Rn)()],V.prototype,"nzGap",void 0),V})(),j=(()=>{class V{}return V.\u0275fac=function(N){return new(N||V)},V.\u0275mod=t.oAB({type:V}),V.\u0275inj=t.cJS({imports:[[W.vT,_.ez,c.PV,A.ud]]}),V})()},4401:(ze,ee,o)=>{o.d(ee,{x7:()=>$,mS:()=>w,F9:()=>O});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8076),_=o(9439),c=o(1721),W=o(226),d=o(4832),E=o(9808),D=o(969),F=o(7144);function L(u,R){if(1&u&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&u){const G=R.$implicit,K=t.oxw(2).index,_e=t.oxw(2);t.ekj("current",G===_e.countArray[K]),t.xp6(1),t.hij(" ",G," ")}}function ne(u,R){if(1&u&&(t.ynx(0),t.YNc(1,L,2,3,"p",5),t.BQk()),2&u){const G=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",G.countSingleArray)}}function b(u,R){if(1&u&&(t.TgZ(0,"span",3),t.YNc(1,ne,2,1,"ng-container",4),t.qZA()),2&u){const G=R.index,K=t.oxw(2);t.Udp("transform","translateY("+100*-K.countArray[G]+"%)"),t.Q6J("nzNoAnimation",K.noAnimation),t.xp6(1),t.Q6J("ngIf",!K.nzDot&&void 0!==K.countArray[G])}}function ie(u,R){if(1&u&&(t.ynx(0),t.YNc(1,b,2,4,"span",2),t.BQk()),2&u){const G=t.oxw();t.xp6(1),t.Q6J("ngForOf",G.maxNumberArray)}}function j(u,R){if(1&u&&t._uU(0),2&u){const G=t.oxw();t.hij("",G.nzOverflowCount,"+")}}function V(u,R){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const G=t.oxw(2);t.xp6(1),t.Oqu(G.nzText)}}function Y(u,R){if(1&u&&(t.ynx(0),t._UZ(1,"span",2),t.TgZ(2,"span",3),t.YNc(3,V,2,1,"ng-container",1),t.qZA(),t.BQk()),2&u){const G=t.oxw();t.xp6(1),t.Gre("ant-badge-status-dot ant-badge-status-",G.nzStatus||G.presetColor,""),t.Udp("background",!G.presetColor&&G.nzColor),t.Q6J("ngStyle",G.nzStyle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",G.nzText)}}function N(u,R){if(1&u&&t._UZ(0,"nz-badge-sup",5),2&u){const G=t.oxw(2);t.Q6J("nzOffset",G.nzOffset)("nzTitle",G.nzTitle)("nzStyle",G.nzStyle)("nzDot",G.nzDot)("nzOverflowCount",G.nzOverflowCount)("disableAnimation",!!(G.nzStandalone||G.nzStatus||G.nzColor||null!=G.noAnimation&&G.noAnimation.nzNoAnimation))("nzCount",G.nzCount)("noAnimation",!(null==G.noAnimation||!G.noAnimation.nzNoAnimation))}}function U(u,R){if(1&u&&(t.ynx(0),t.YNc(1,N,1,8,"nz-badge-sup",4),t.BQk()),2&u){const G=t.oxw();t.xp6(1),t.Q6J("ngIf",G.showSup)}}const se=["*"];function B(u,R){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const G=t.oxw();t.xp6(1),t.Oqu(G.nzText)}}const I=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let h=(()=>{class u{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(G){const{nzOverflowCount:K,nzCount:_e}=G;_e&&"number"==typeof _e.currentValue&&(this.count=Math.max(0,_e.currentValue),this.countArray=this.count.toString().split("").map(Te=>+Te)),K&&this.generateMaxNumberArray()}}return u.\u0275fac=function(G){return new(G||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(G,K){2&G&&(t.uIk("title",null===K.nzTitle?"":K.nzTitle||K.nzCount),t.d8E("@.disabled",K.disableAnimation)("@zoomBadgeMotion",void 0),t.Akn(K.nzStyle),t.Udp("right",K.nzOffset&&K.nzOffset[0]?-K.nzOffset[0]:null,"px")("margin-top",K.nzOffset&&K.nzOffset[1]?K.nzOffset[1]:null,"px"),t.ekj("ant-badge-count",!K.nzDot)("ant-badge-dot",K.nzDot)("ant-badge-multiple-words",K.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[t.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(G,K){if(1&G&&(t.YNc(0,ie,2,1,"ng-container",0),t.YNc(1,j,1,1,"ng-template",null,1,t.W1O)),2&G){const _e=t.MAs(2);t.Q6J("ngIf",K.count<=K.nzOverflowCount)("ngIfElse",_e)}},directives:[E.O5,E.sg,d.P],encapsulation:2,data:{animation:[A.Ev]},changeDetection:0}),u})(),$=(()=>{class u{constructor(G,K,_e,Te,Ae,xe){this.nzConfigService=G,this.renderer=K,this.cdr=_e,this.elementRef=Te,this.directionality=Ae,this.noAnimation=xe,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(K=>{this.dir=K,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(G){const{nzColor:K,nzShowDot:_e,nzDot:Te,nzCount:Ae,nzShowZero:xe}=G;K&&(this.presetColor=this.nzColor&&-1!==I.indexOf(this.nzColor)?this.nzColor:null),(_e||Te||Ae||xe)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(G){return new(G||u)(t.Y36(_.jY),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(W.Is,8),t.Y36(d.P,9))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(G,K){2&G&&t.ekj("ant-badge-status",K.nzStatus)("ant-badge-not-a-wrapper",!!(K.nzStandalone||K.nzStatus||K.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[t.TTD],ngContentSelectors:se,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(G,K){1&G&&(t.F$t(),t.YNc(0,Y,4,7,"ng-container",0),t.Hsn(1),t.YNc(2,U,2,1,"ng-container",1)),2&G&&(t.Q6J("ngIf",K.nzStatus||K.nzColor),t.xp6(2),t.Q6J("nzStringTemplateOutlet",K.nzCount))},directives:[h,E.O5,E.PC,D.f],encapsulation:2,data:{animation:[A.Ev]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowZero",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowDot",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzStandalone",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzDot",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzColor",void 0),u})(),O=(()=>{class u{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(G){const{nzColor:K}=G;K&&(this.presetColor=this.nzColor&&-1!==I.indexOf(this.nzColor)?this.nzColor:null)}}return u.\u0275fac=function(G){return new(G||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[t.TTD],ngContentSelectors:se,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(G,K){1&G&&(t.F$t(),t.Hsn(0),t.TgZ(1,"div",0),t.YNc(2,B,2,1,"ng-container",1),t._UZ(3,"div",2),t.qZA()),2&G&&(t.xp6(1),t.Tol(K.presetColor&&"ant-ribbon-color-"+K.presetColor),t.Udp("background-color",!K.presetColor&&K.nzColor),t.ekj("ant-ribbon-placement-end","end"===K.nzPlacement)("ant-ribbon-placement-start","start"===K.nzPlacement),t.xp6(1),t.Q6J("nzStringTemplateOutlet",K.nzText),t.xp6(1),t.Udp("color",!K.presetColor&&K.nzColor))},directives:[D.f],encapsulation:2,changeDetection:0}),u})(),w=(()=>{class u{}return u.\u0275fac=function(G){return new(G||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[W.vT,E.ez,F.Q8,D.T,d.g]]}),u})()},7484:(ze,ee,o)=>{o.d(ee,{bd:()=>Ce,vh:()=>Me,_i:()=>Ae});var i=o(655),t=o(5e3),n=o(1721),s=o(8929),A=o(7625),_=o(9439),c=o(226),W=o(9808),d=o(969);function E(H,he){1&H&&t.Hsn(0)}const D=["*"];function F(H,he){1&H&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA()),2&H&&t.Q6J("ngClass",he.$implicit)}function L(H,he){if(1&H&&(t.TgZ(0,"div",2),t.YNc(1,F,2,1,"div",3),t.qZA()),2&H){const k=he.$implicit;t.xp6(1),t.Q6J("ngForOf",k)}}function ne(H,he){if(1&H&&(t.ynx(0),t._uU(1),t.BQk()),2&H){const k=t.oxw(3);t.xp6(1),t.Oqu(k.nzTitle)}}function b(H,he){if(1&H&&(t.TgZ(0,"div",11),t.YNc(1,ne,2,1,"ng-container",12),t.qZA()),2&H){const k=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",k.nzTitle)}}function ie(H,he){if(1&H&&(t.ynx(0),t._uU(1),t.BQk()),2&H){const k=t.oxw(3);t.xp6(1),t.Oqu(k.nzExtra)}}function j(H,he){if(1&H&&(t.TgZ(0,"div",13),t.YNc(1,ie,2,1,"ng-container",12),t.qZA()),2&H){const k=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",k.nzExtra)}}function V(H,he){}function Y(H,he){if(1&H&&(t.ynx(0),t.YNc(1,V,0,0,"ng-template",14),t.BQk()),2&H){const k=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",k.listOfNzCardTabComponent.template)}}function N(H,he){if(1&H&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.YNc(2,b,2,1,"div",8),t.YNc(3,j,2,1,"div",9),t.qZA(),t.YNc(4,Y,2,1,"ng-container",10),t.qZA()),2&H){const k=t.oxw();t.xp6(2),t.Q6J("ngIf",k.nzTitle),t.xp6(1),t.Q6J("ngIf",k.nzExtra),t.xp6(1),t.Q6J("ngIf",k.listOfNzCardTabComponent)}}function U(H,he){}function se(H,he){if(1&H&&(t.TgZ(0,"div",15),t.YNc(1,U,0,0,"ng-template",14),t.qZA()),2&H){const k=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",k.nzCover)}}function B(H,he){1&H&&(t.ynx(0),t.Hsn(1),t.BQk())}function I(H,he){1&H&&t._UZ(0,"nz-card-loading")}function h(H,he){}function x(H,he){if(1&H&&(t.TgZ(0,"li"),t.TgZ(1,"span"),t.YNc(2,h,0,0,"ng-template",14),t.qZA(),t.qZA()),2&H){const k=he.$implicit,ge=t.oxw(2);t.Udp("width",100/ge.nzActions.length,"%"),t.xp6(2),t.Q6J("ngTemplateOutlet",k)}}function $(H,he){if(1&H&&(t.TgZ(0,"ul",16),t.YNc(1,x,3,3,"li",17),t.qZA()),2&H){const k=t.oxw();t.xp6(1),t.Q6J("ngForOf",k.nzActions)}}let Te=(()=>{class H{constructor(){this.nzHoverable=!0}}return H.\u0275fac=function(k){return new(k||H)},H.\u0275dir=t.lG2({type:H,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(k,ge){2&k&&t.ekj("ant-card-hoverable",ge.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,n.yF)()],H.prototype,"nzHoverable",void 0),H})(),Ae=(()=>{class H{}return H.\u0275fac=function(k){return new(k||H)},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card-tab"]],viewQuery:function(k,ge){if(1&k&&t.Gf(t.Rgc,7),2&k){let ue;t.iGM(ue=t.CRH())&&(ge.template=ue.first)}},exportAs:["nzCardTab"],ngContentSelectors:D,decls:1,vars:0,template:function(k,ge){1&k&&(t.F$t(),t.YNc(0,E,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),H})(),xe=(()=>{class H{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return H.\u0275fac=function(k){return new(k||H)},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(k,ge){1&k&&(t.TgZ(0,"div",0),t.YNc(1,L,2,1,"div",1),t.qZA()),2&k&&(t.xp6(1),t.Q6J("ngForOf",ge.listOfLoading))},directives:[W.sg,W.mk],encapsulation:2,changeDetection:0}),H})(),Ce=(()=>{class H{constructor(k,ge,ue){this.nzConfigService=k,this.cdr=ge,this.directionality=ue,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,A.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var k;null===(k=this.directionality.change)||void 0===k||k.pipe((0,A.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return H.\u0275fac=function(k){return new(k||H)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(c.Is,8))},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card"]],contentQueries:function(k,ge,ue){if(1&k&&(t.Suo(ue,Ae,5),t.Suo(ue,Te,4)),2&k){let Ne;t.iGM(Ne=t.CRH())&&(ge.listOfNzCardTabComponent=Ne.first),t.iGM(Ne=t.CRH())&&(ge.listOfNzCardGridDirective=Ne)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(k,ge){2&k&&t.ekj("ant-card-loading",ge.nzLoading)("ant-card-bordered",!1===ge.nzBorderless&&ge.nzBordered)("ant-card-hoverable",ge.nzHoverable)("ant-card-small","small"===ge.nzSize)("ant-card-contain-grid",ge.listOfNzCardGridDirective&&ge.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===ge.nzType)("ant-card-contain-tabs",!!ge.listOfNzCardTabComponent)("ant-card-rtl","rtl"===ge.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:D,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(k,ge){if(1&k&&(t.F$t(),t.YNc(0,N,5,3,"div",0),t.YNc(1,se,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,B,2,0,"ng-container",3),t.YNc(4,I,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(6,$,2,1,"ul",5)),2&k){const ue=t.MAs(5);t.Q6J("ngIf",ge.nzTitle||ge.nzExtra||ge.listOfNzCardTabComponent),t.xp6(1),t.Q6J("ngIf",ge.nzCover),t.xp6(1),t.Q6J("ngStyle",ge.nzBodyStyle),t.xp6(1),t.Q6J("ngIf",!ge.nzLoading)("ngIfElse",ue),t.xp6(3),t.Q6J("ngIf",ge.nzActions.length)}},directives:[xe,W.O5,d.f,W.tP,W.PC,W.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzBorderless",void 0),(0,i.gn)([(0,n.yF)()],H.prototype,"nzLoading",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzHoverable",void 0),(0,i.gn)([(0,_.oS)()],H.prototype,"nzSize",void 0),H})(),Me=(()=>{class H{}return H.\u0275fac=function(k){return new(k||H)},H.\u0275mod=t.oAB({type:H}),H.\u0275inj=t.cJS({imports:[[W.ez,d.T],c.vT]}),H})()},5577:(ze,ee,o)=>{o.d(ee,{D3:()=>_,y7:()=>W});var i=o(5e3),t=o(3191),n=o(2916),s=o(8929);let A=(()=>{class d{create(D){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(D)}}return d.\u0275fac=function(D){return new(D||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),_=(()=>{class d{constructor(D){this.nzResizeObserverFactory=D,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((D,F)=>this.cleanupObserver(F))}observe(D){const F=(0,t.fI)(D);return new n.y(L=>{const b=this.observeElement(F).subscribe(L);return()=>{b.unsubscribe(),this.unobserveElement(F)}})}observeElement(D){if(this.observedElements.has(D))this.observedElements.get(D).count++;else{const F=new s.xQ,L=this.nzResizeObserverFactory.create(ne=>F.next(ne));L&&L.observe(D),this.observedElements.set(D,{observer:L,stream:F,count:1})}return this.observedElements.get(D).stream}unobserveElement(D){this.observedElements.has(D)&&(this.observedElements.get(D).count--,this.observedElements.get(D).count||this.cleanupObserver(D))}cleanupObserver(D){if(this.observedElements.has(D)){const{observer:F,stream:L}=this.observedElements.get(D);F&&F.disconnect(),L.complete(),this.observedElements.delete(D)}}}return d.\u0275fac=function(D){return new(D||d)(i.LFG(A))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),W=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({providers:[A]}),d})()},5482:(ze,ee,o)=>{o.d(ee,{yH:()=>N,cD:()=>B,Zv:()=>se});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8076),_=o(9439),c=o(1721),W=o(226),d=o(4832),E=o(9808),D=o(969),F=o(647);const L=["*"];function ne(I,h){if(1&I&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&I){const x=h.$implicit,$=t.oxw(2);t.xp6(1),t.Q6J("nzType",x||"right")("nzRotate",$.nzActive?90:0)}}function b(I,h){if(1&I&&(t.TgZ(0,"div"),t.YNc(1,ne,2,2,"ng-container",2),t.qZA()),2&I){const x=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",x.nzExpandedIcon)}}function ie(I,h){if(1&I&&(t.ynx(0),t._uU(1),t.BQk()),2&I){const x=t.oxw();t.xp6(1),t.Oqu(x.nzHeader)}}function j(I,h){if(1&I&&(t.ynx(0),t._uU(1),t.BQk()),2&I){const x=t.oxw(2);t.xp6(1),t.Oqu(x.nzExtra)}}function V(I,h){if(1&I&&(t.TgZ(0,"div",7),t.YNc(1,j,2,1,"ng-container",2),t.qZA()),2&I){const x=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",x.nzExtra)}}const Y="collapse";let N=(()=>{class I{constructor(x,$,O){this.nzConfigService=x,this.cdr=$,this.directionality=O,this._nzModuleName=Y,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(Y).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var x;null===(x=this.directionality.change)||void 0===x||x.pipe((0,s.R)(this.destroy$)).subscribe($=>{this.dir=$,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(x){this.listOfNzCollapsePanelComponent.push(x)}removePanel(x){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(x),1)}click(x){this.nzAccordion&&!x.nzActive&&this.listOfNzCollapsePanelComponent.filter($=>$!==x).forEach($=>{$.nzActive&&($.nzActive=!1,$.nzActiveChange.emit($.nzActive),$.markForCheck())}),x.nzActive=!x.nzActive,x.nzActiveChange.emit(x.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return I.\u0275fac=function(x){return new(x||I)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(W.Is,8))},I.\u0275cmp=t.Xpm({type:I,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(x,$){2&x&&t.ekj("ant-collapse-icon-position-left","left"===$.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===$.nzExpandIconPosition)("ant-collapse-ghost",$.nzGhost)("ant-collapse-borderless",!$.nzBordered)("ant-collapse-rtl","rtl"===$.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:L,decls:1,vars:0,template:function(x,$){1&x&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],I.prototype,"nzAccordion",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],I.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],I.prototype,"nzGhost",void 0),I})();const U="collapsePanel";let se=(()=>{class I{constructor(x,$,O,w){this.nzConfigService=x,this.cdr=$,this.nzCollapseComponent=O,this.noAnimation=w,this._nzModuleName=U,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(U).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return I.\u0275fac=function(x){return new(x||I)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(N,1),t.Y36(d.P,8))},I.\u0275cmp=t.Xpm({type:I,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(x,$){2&x&&t.ekj("ant-collapse-no-arrow",!$.nzShowArrow)("ant-collapse-item-active",$.nzActive)("ant-collapse-item-disabled",$.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:L,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(x,$){1&x&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return $.clickHeader()}),t.YNc(1,b,2,1,"div",1),t.YNc(2,ie,2,1,"ng-container",2),t.YNc(3,V,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&x&&(t.uIk("aria-expanded",$.nzActive),t.xp6(1),t.Q6J("ngIf",$.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",$.nzHeader),t.xp6(1),t.Q6J("ngIf",$.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",$.nzActive),t.Q6J("@.disabled",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)("@collapseMotion",$.nzActive?"expanded":"hidden"))},directives:[E.O5,D.f,F.Ls],encapsulation:2,data:{animation:[A.J_]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],I.prototype,"nzActive",void 0),(0,i.gn)([(0,c.yF)()],I.prototype,"nzDisabled",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],I.prototype,"nzShowArrow",void 0),I})(),B=(()=>{class I{}return I.\u0275fac=function(x){return new(x||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[[W.vT,E.ez,F.PV,D.T,d.g]]}),I})()},3098:(ze,ee,o)=>{o.d(ee,{R7:()=>de,uj:()=>Pe,q6:()=>Oe});var i=o(226),t=o(925),n=o(9808),s=o(5e3),A=o(969),_=o(655),c=o(8929),W=o(6787),d=o(1721),E=o(7625),D=o(1059),F=o(7545),L=o(7138),ne=o(2868),b=o(9439),ie=o(948),j=o(4090);function V(Q,fe){1&Q&&s.Hsn(0)}const Y=["*"];function N(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw(3);s.xp6(1),s.Oqu(J.nzTitle)}}function U(Q,fe){if(1&Q&&(s.TgZ(0,"div",6),s.YNc(1,N,2,1,"ng-container",7),s.qZA()),2&Q){const J=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.nzTitle)}}function se(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw(3);s.xp6(1),s.Oqu(J.nzExtra)}}function B(Q,fe){if(1&Q&&(s.TgZ(0,"div",8),s.YNc(1,se,2,1,"ng-container",7),s.qZA()),2&Q){const J=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.nzExtra)}}function I(Q,fe){if(1&Q&&(s.TgZ(0,"div",3),s.YNc(1,U,2,1,"div",4),s.YNc(2,B,2,1,"div",5),s.qZA()),2&Q){const J=s.oxw();s.xp6(1),s.Q6J("ngIf",J.nzTitle),s.xp6(1),s.Q6J("ngIf",J.nzExtra)}}function h(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function x(Q,fe){}function $(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,h,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,x,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&Q){const J=s.oxw().$implicit,Ie=s.oxw(3);s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Ie.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title),s.xp6(2),s.Q6J("ngTemplateOutlet",J.content)}}function O(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function w(Q,fe){if(1&Q&&(s.TgZ(0,"td",14),s.YNc(1,O,2,1,"ng-container",7),s.qZA()),2&Q){const J=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function u(Q,fe){}function R(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,w,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,u,0,0,"ng-template",16),s.qZA(),s.BQk()),2&Q){const J=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title),s.xp6(1),s.Q6J("colSpan",2*J.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",J.content)}}function G(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,$,7,5,"ng-container",2),s.YNc(2,R,4,3,"ng-container",2),s.BQk()),2&Q){const J=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!J.nzBordered),s.xp6(1),s.Q6J("ngIf",J.nzBordered)}}function K(Q,fe){if(1&Q&&(s.TgZ(0,"tr",10),s.YNc(1,G,3,2,"ng-container",11),s.qZA()),2&Q){const J=fe.$implicit;s.xp6(1),s.Q6J("ngForOf",J)}}function _e(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,K,2,1,"tr",9),s.BQk()),2&Q){const J=s.oxw();s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function Te(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw().$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function Ae(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,Te,2,1,"ng-container",7),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit,Ie=s.oxw(4);s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Ie.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function xe(Q,fe){}function oe(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",15),s.YNc(4,xe,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(3),s.Q6J("ngTemplateOutlet",J.content)}}function Ce(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,Ae,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,oe,5,2,"ng-container",11),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit;s.xp6(2),s.Q6J("ngForOf",J),s.xp6(2),s.Q6J("ngForOf",J)}}function pe(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,Ce,5,2,"ng-container",11),s.BQk()),2&Q){const J=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function Me(Q,fe){if(1&Q&&(s.ynx(0),s._uU(1),s.BQk()),2&Q){const J=s.oxw().$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function H(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,Me,2,1,"ng-container",7),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function he(Q,fe){}function k(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,he,0,0,"ng-template",16),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(1),s.Q6J("ngTemplateOutlet",J.content)}}function ge(Q,fe){if(1&Q&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,H,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,k,3,2,"ng-container",11),s.qZA(),s.BQk()),2&Q){const J=fe.$implicit;s.xp6(2),s.Q6J("ngForOf",J),s.xp6(2),s.Q6J("ngForOf",J)}}function ue(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,ge,5,2,"ng-container",11),s.BQk()),2&Q){const J=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function Ne(Q,fe){if(1&Q&&(s.ynx(0),s.YNc(1,pe,2,1,"ng-container",2),s.YNc(2,ue,2,1,"ng-container",2),s.BQk()),2&Q){const J=s.oxw();s.xp6(1),s.Q6J("ngIf",!J.nzBordered),s.xp6(1),s.Q6J("ngIf",J.nzBordered)}}let Pe=(()=>{class Q{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new c.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return Q.\u0275fac=function(J){return new(J||Q)},Q.\u0275cmp=s.Xpm({type:Q,selectors:[["nz-descriptions-item"]],viewQuery:function(J,Ie){if(1&J&&s.Gf(s.Rgc,7),2&J){let be;s.iGM(be=s.CRH())&&(Ie.content=be.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Y,decls:1,vars:0,template:function(J,Ie){1&J&&(s.F$t(),s.YNc(0,V,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.Rn)()],Q.prototype,"nzSpan",void 0),Q})();const Ee={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let de=(()=>{class Q{constructor(J,Ie,be,Be){this.nzConfigService=J,this.cdr=Ie,this.breakpointService=be,this.directionality=Be,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Ee,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=j.G_.md,this.destroy$=new c.xQ}ngOnInit(){var J;this.dir=this.directionality.value,null===(J=this.directionality.change)||void 0===J||J.pipe((0,E.R)(this.destroy$)).subscribe(Ie=>{this.dir=Ie})}ngOnChanges(J){J.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const J=this.items.changes.pipe((0,D.O)(this.items),(0,E.R)(this.destroy$));(0,W.T)(J,J.pipe((0,F.w)(()=>(0,W.T)(...this.items.map(Ie=>Ie.inputChange$)).pipe((0,L.e)(16)))),this.breakpointService.subscribe(j.WV).pipe((0,ne.b)(Ie=>this.breakpoint=Ie))).pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let J=[],Ie=0;const be=this.realColumn=this.getColumn(),Be=this.items.toArray(),tt=Be.length,nt=[],Ke=()=>{nt.push(J),J=[],Ie=0};for(let Ve=0;Ve<tt;Ve++){const C=Be[Ve],{nzTitle:He,content:Xe,nzSpan:Ye}=C;Ie+=Ye,Ie>=be?(Ie>be&&(0,ie.ZK)(`"nzColumn" is ${be} but we have row length ${Ie}`),J.push({title:He,content:Xe,span:be-(Ie-Ye)}),Ke()):Ve===tt-1?(J.push({title:He,content:Xe,span:be-(Ie-Ye)}),Ke()):J.push({title:He,content:Xe,span:Ye})}this.itemMatrix=nt}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return Q.\u0275fac=function(J){return new(J||Q)(s.Y36(b.jY),s.Y36(s.sBO),s.Y36(j.r3),s.Y36(i.Is,8))},Q.\u0275cmp=s.Xpm({type:Q,selectors:[["nz-descriptions"]],contentQueries:function(J,Ie,be){if(1&J&&s.Suo(be,Pe,4),2&J){let Be;s.iGM(Be=s.CRH())&&(Ie.items=Be)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(J,Ie){2&J&&s.ekj("ant-descriptions-bordered",Ie.nzBordered)("ant-descriptions-middle","middle"===Ie.nzSize)("ant-descriptions-small","small"===Ie.nzSize)("ant-descriptions-rtl","rtl"===Ie.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(J,Ie){1&J&&(s.YNc(0,I,3,2,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"table"),s.TgZ(3,"tbody"),s.YNc(4,_e,2,1,"ng-container",2),s.YNc(5,Ne,3,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&J&&(s.Q6J("ngIf",Ie.nzTitle||Ie.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===Ie.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===Ie.nzLayout))},directives:[n.O5,A.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.yF)(),(0,b.oS)()],Q.prototype,"nzBordered",void 0),(0,_.gn)([(0,b.oS)()],Q.prototype,"nzColumn",void 0),(0,_.gn)([(0,b.oS)()],Q.prototype,"nzSize",void 0),(0,_.gn)([(0,b.oS)(),(0,d.yF)()],Q.prototype,"nzColon",void 0),Q})(),Oe=(()=>{class Q{}return Q.\u0275fac=function(J){return new(J||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[[i.vT,n.ez,A.T,t.ud]]}),Q})()},3677:(ze,ee,o)=>{o.d(ee,{cm:()=>Ae,b1:()=>Me,wA:()=>Ce,RR:()=>pe});var i=o(655),t=o(1159),n=o(7429),s=o(5e3),A=o(8929),_=o(591),c=o(6787),W=o(3753),d=o(8896),E=o(6053),D=o(7604),F=o(4850),L=o(7545),ne=o(2198),b=o(7138),ie=o(5778),j=o(7625),V=o(9439),Y=o(6950),N=o(1721),U=o(2845),se=o(925),B=o(226),I=o(9808),h=o(4182),x=o(6042),$=o(4832),O=o(969),w=o(647),u=o(4219),R=o(8076);function G(k,ge){if(1&k){const ue=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Pe){return s.CHM(ue),s.oxw().onAnimationEvent(Pe)})("mouseenter",function(){return s.CHM(ue),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(ue),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&k){const ue=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===ue.dir),s.Q6J("ngClass",ue.nzOverlayClassName)("ngStyle",ue.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==ue.noAnimation?null:ue.noAnimation.nzNoAnimation)("nzNoAnimation",null==ue.noAnimation?null:ue.noAnimation.nzNoAnimation)}}const K=["*"],Te=[Y.yW.bottomLeft,Y.yW.bottomRight,Y.yW.topRight,Y.yW.topLeft];let Ae=(()=>{class k{constructor(ue,Ne,Pe,re,Ee,de){this.nzConfigService=ue,this.elementRef=Ne,this.overlay=Pe,this.renderer=re,this.viewContainerRef=Ee,this.platform=de,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new A.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new _.X(!1),this.nzTrigger$=new _.X("hover"),this.overlayClose$=new A.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(ue,Ne){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(ue,Ne)}ngAfterViewInit(){if(this.nzDropdownMenu){const ue=this.elementRef.nativeElement,Ne=(0,c.T)((0,W.R)(ue,"mouseenter").pipe((0,D.h)(!0)),(0,W.R)(ue,"mouseleave").pipe((0,D.h)(!1))),re=(0,c.T)(this.nzDropdownMenu.mouseState$,Ne),Ee=(0,W.R)(ue,"click").pipe((0,F.U)(()=>!this.nzVisible)),de=this.nzTrigger$.pipe((0,L.w)(J=>"hover"===J?re:"click"===J?Ee:d.E)),Oe=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,ne.h)(()=>this.nzClickHide),(0,D.h)(!1)),Q=(0,c.T)(de,Oe,this.overlayClose$).pipe((0,ne.h)(()=>!this.nzDisabled)),fe=(0,c.T)(this.inputVisible$,Q);(0,E.aj)([fe,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,F.U)(([J,Ie])=>J||Ie),(0,b.e)(150),(0,ie.x)(),(0,ne.h)(()=>this.platform.isBrowser),(0,j.R)(this.destroy$)).subscribe(J=>{const be=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:ue).getBoundingClientRect().width;this.nzVisible!==J&&this.nzVisibleChange.emit(J),this.nzVisible=J,J?(this.overlayRef?this.overlayRef.getConfig().minWidth=be:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:be,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,c.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,ne.h)(Be=>!this.elementRef.nativeElement.contains(Be.target))),this.overlayRef.keydownEvents().pipe((0,ne.h)(Be=>Be.keyCode===t.hY&&!(0,t.Vb)(Be)))).pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Y.yW[this.nzPlacement],...Te]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,j.R)(this.destroy$)).subscribe(J=>{"void"===J.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(ue){const{nzVisible:Ne,nzDisabled:Pe,nzOverlayClassName:re,nzOverlayStyle:Ee,nzTrigger:de}=ue;if(de&&this.nzTrigger$.next(this.nzTrigger),Ne&&this.inputVisible$.next(this.nzVisible),Pe){const Oe=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Oe,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Oe,"disabled")}re&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Ee&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return k.\u0275fac=function(ue){return new(ue||k)(s.Y36(V.jY),s.Y36(s.SBq),s.Y36(U.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(se.t4))},k.\u0275dir=s.lG2({type:k,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,i.gn)([(0,V.oS)(),(0,N.yF)()],k.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,N.yF)()],k.prototype,"nzClickHide",void 0),(0,i.gn)([(0,N.yF)()],k.prototype,"nzDisabled",void 0),(0,i.gn)([(0,N.yF)()],k.prototype,"nzVisible",void 0),k})(),xe=(()=>{class k{}return k.\u0275fac=function(ue){return new(ue||k)},k.\u0275mod=s.oAB({type:k}),k.\u0275inj=s.cJS({}),k})(),Ce=(()=>{class k{constructor(ue,Ne,Pe){this.renderer=ue,this.nzButtonGroupComponent=Ne,this.elementRef=Pe}ngAfterViewInit(){const ue=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&ue&&this.renderer.addClass(ue,"ant-dropdown-button")}}return k.\u0275fac=function(ue){return new(ue||k)(s.Y36(s.Qsj),s.Y36(x.fY,9),s.Y36(s.SBq))},k.\u0275dir=s.lG2({type:k,selectors:[["","nz-button","","nz-dropdown",""]]}),k})(),pe=(()=>{class k{constructor(ue,Ne,Pe,re,Ee,de,Oe){this.cdr=ue,this.elementRef=Ne,this.renderer=Pe,this.viewContainerRef=re,this.nzMenuService=Ee,this.directionality=de,this.noAnimation=Oe,this.mouseState$=new _.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new A.xQ}onAnimationEvent(ue){this.animationStateChange$.emit(ue)}setMouseState(ue){this.mouseState$.next(ue)}setValue(ue,Ne){this[ue]=Ne,this.cdr.markForCheck()}ngOnInit(){var ue;null===(ue=this.directionality.change)||void 0===ue||ue.pipe((0,j.R)(this.destroy$)).subscribe(Ne=>{this.dir=Ne,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return k.\u0275fac=function(ue){return new(ue||k)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(u.hl),s.Y36(B.Is,8),s.Y36($.P,9))},k.\u0275cmp=s.Xpm({type:k,selectors:[["nz-dropdown-menu"]],viewQuery:function(ue,Ne){if(1&ue&&s.Gf(s.Rgc,7),2&ue){let Pe;s.iGM(Pe=s.CRH())&&(Ne.templateRef=Pe.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([u.hl,{provide:u.Cc,useValue:!0}])],ngContentSelectors:K,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(ue,Ne){1&ue&&(s.F$t(),s.YNc(0,G,2,7,"ng-template"))},directives:[I.mk,I.PC,$.P],encapsulation:2,data:{animation:[R.mF]},changeDetection:0}),k})(),Me=(()=>{class k{}return k.\u0275fac=function(ue){return new(ue||k)},k.\u0275mod=s.oAB({type:k}),k.\u0275inj=s.cJS({imports:[[B.vT,I.ez,U.U8,h.u5,x.sL,u.ip,w.PV,$.g,se.ud,Y.e4,xe,O.T],u.ip]}),k})();new U.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new U.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new U.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new U.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ze,ee,o)=>{o.d(ee,{n_:()=>Ze,I2:()=>Ge,t4:()=>ke,AA:()=>ot,yw:()=>Re,yi:()=>ye,IO:()=>z,Ph:()=>st});var i=o(5e3),t=o(6699),n=o(9808),s=o(969),A=o(655),_=o(1721),c=o(8929),W=o(8514),d=o(1086),E=o(6787),D=o(591),F=o(2986),L=o(7545),ne=o(7625),b=o(685),ie=o(226),j=o(7525),V=o(1894);const Y=["*"];function N(y,q){if(1&y&&i._UZ(0,"nz-avatar",3),2&y){const P=i.oxw();i.Q6J("nzSrc",P.nzSrc)}}function U(y,q){1&y&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function se(y,q){if(1&y&&i._UZ(0,"nz-list-item-meta-avatar",3),2&y){const P=i.oxw();i.Q6J("nzSrc",P.avatarStr)}}function B(y,q){if(1&y&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",P.avatarTpl)}}function I(y,q){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const P=i.oxw(3);i.xp6(1),i.Oqu(P.nzTitle)}}function h(y,q){if(1&y&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,I,2,1,"ng-container",6),i.qZA()),2&y){const P=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",P.nzTitle)}}function x(y,q){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const P=i.oxw(3);i.xp6(1),i.Oqu(P.nzDescription)}}function $(y,q){if(1&y&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,x,2,1,"ng-container",6),i.qZA()),2&y){const P=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",P.nzDescription)}}function O(y,q){if(1&y&&(i.TgZ(0,"div",5),i.YNc(1,h,2,1,"nz-list-item-meta-title",1),i.YNc(2,$,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.nzTitle&&!P.titleComponent),i.xp6(1),i.Q6J("ngIf",P.nzDescription&&!P.descriptionComponent)}}const w=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],u=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function R(y,q){1&y&&i.Hsn(0)}const G=["nz-list-item-actions",""];function K(y,q){}function _e(y,q){1&y&&i._UZ(0,"em",3)}function Te(y,q){if(1&y&&(i.TgZ(0,"li"),i.YNc(1,K,0,0,"ng-template",1),i.YNc(2,_e,1,0,"em",2),i.qZA()),2&y){const P=q.$implicit,le=q.last;i.xp6(1),i.Q6J("ngTemplateOutlet",P),i.xp6(1),i.Q6J("ngIf",!le)}}function Ae(y,q){}const xe=function(y,q){return{$implicit:y,index:q}};function oe(y,q){if(1&y&&(i.ynx(0),i.YNc(1,Ae,0,0,"ng-template",9),i.BQk()),2&y){const P=q.$implicit,le=q.index,Se=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",Se.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,xe,P,le))}}function Ce(y,q){if(1&y&&(i.TgZ(0,"div",7),i.YNc(1,oe,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("ngForOf",P.nzDataSource)}}function pe(y,q){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const P=i.oxw(2);i.xp6(1),i.Oqu(P.nzHeader)}}function Me(y,q){if(1&y&&(i.TgZ(0,"nz-list-header"),i.YNc(1,pe,2,1,"ng-container",10),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",P.nzHeader)}}function H(y,q){1&y&&i._UZ(0,"div"),2&y&&i.Udp("min-height",53,"px")}function he(y,q){}function k(y,q){if(1&y&&(i.TgZ(0,"div",13),i.YNc(1,he,0,0,"ng-template",9),i.qZA()),2&y){const P=q.$implicit,le=q.index,Se=i.oxw(2);i.Q6J("nzSpan",Se.nzGrid.span||null)("nzXs",Se.nzGrid.xs||null)("nzSm",Se.nzGrid.sm||null)("nzMd",Se.nzGrid.md||null)("nzLg",Se.nzGrid.lg||null)("nzXl",Se.nzGrid.xl||null)("nzXXl",Se.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",Se.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,xe,P,le))}}function ge(y,q){if(1&y&&(i.TgZ(0,"div",11),i.YNc(1,k,2,12,"div",12),i.qZA()),2&y){const P=i.oxw();i.Q6J("nzGutter",P.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",P.nzDataSource)}}function ue(y,q){if(1&y&&i._UZ(0,"nz-list-empty",14),2&y){const P=i.oxw();i.Q6J("nzNoResult",P.nzNoResult)}}function Ne(y,q){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const P=i.oxw(2);i.xp6(1),i.Oqu(P.nzFooter)}}function Pe(y,q){if(1&y&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,Ne,2,1,"ng-container",10),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",P.nzFooter)}}function re(y,q){}function Ee(y,q){}function de(y,q){if(1&y&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Ee,0,0,"ng-template",6),i.qZA()),2&y){const P=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",P.nzPagination)}}const Oe=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Q=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function fe(y,q){if(1&y&&i._UZ(0,"ul",6),2&y){const P=i.oxw(2);i.Q6J("nzActions",P.nzActions)}}function J(y,q){if(1&y&&(i.YNc(0,fe,1,1,"ul",5),i.Hsn(1)),2&y){const P=i.oxw();i.Q6J("ngIf",P.nzActions&&P.nzActions.length>0)}}function Ie(y,q){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const P=i.oxw(3);i.xp6(1),i.Oqu(P.nzContent)}}function be(y,q){if(1&y&&(i.ynx(0),i.YNc(1,Ie,2,1,"ng-container",8),i.BQk()),2&y){const P=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",P.nzContent)}}function Be(y,q){if(1&y&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,be,2,1,"ng-container",7)),2&y){const P=i.oxw();i.xp6(2),i.Q6J("ngIf",P.nzContent)}}function tt(y,q){1&y&&i.Hsn(0,3)}function nt(y,q){}function Ke(y,q){}function Ve(y,q){}function C(y,q){}function He(y,q){if(1&y&&(i.YNc(0,nt,0,0,"ng-template",9),i.YNc(1,Ke,0,0,"ng-template",9),i.YNc(2,Ve,0,0,"ng-template",9),i.YNc(3,C,0,0,"ng-template",9)),2&y){const P=i.oxw(),le=i.MAs(3),Se=i.MAs(5),Fe=i.MAs(1);i.Q6J("ngTemplateOutlet",le),i.xp6(1),i.Q6J("ngTemplateOutlet",P.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Se),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}function Xe(y,q){}function Ye(y,q){}function lt(y,q){}function we(y,q){if(1&y&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,lt,0,0,"ng-template",9),i.qZA()),2&y){const P=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",P.nzExtra)}}function pt(y,q){}function v(y,q){if(1&y&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,Xe,0,0,"ng-template",9),i.YNc(3,Ye,0,0,"ng-template",9),i.qZA(),i.YNc(4,we,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&y){const P=i.oxw(),le=i.MAs(3),Se=i.MAs(1),Fe=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",le),i.xp6(1),i.Q6J("ngTemplateOutlet",Se),i.xp6(1),i.Q6J("ngIf",P.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}const l=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],ve=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let z=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:Y,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(P,le){1&P&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),g=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:Y,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(P,le){1&P&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),me=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:Y,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(P,le){1&P&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,N,1,1,"nz-avatar",1),i.YNc(2,U,1,0,"ng-content",2),i.qZA()),2&P&&(i.xp6(1),i.Q6J("ngIf",le.nzSrc),i.xp6(1),i.Q6J("ngIf",!le.nzSrc))},directives:[t.Dz,n.O5],encapsulation:2,changeDetection:0}),y})(),ye=(()=>{class y{constructor(P,le){this.elementRef=P,this.renderer=le,this.avatarStr="",this.renderer.addClass(P.nativeElement,"ant-list-item-meta")}set nzAvatar(P){P instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=P):this.avatarStr=P}}return y.\u0275fac=function(P){return new(P||y)(i.Y36(i.SBq),i.Y36(i.Qsj))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(P,le,Se){if(1&P&&(i.Suo(Se,g,5),i.Suo(Se,z,5)),2&P){let Fe;i.iGM(Fe=i.CRH())&&(le.descriptionComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.titleComponent=Fe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:u,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(P,le){1&P&&(i.F$t(w),i.YNc(0,se,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,B,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,O,5,2,"div",2)),2&P&&(i.Q6J("ngIf",le.avatarStr),i.xp6(1),i.Q6J("ngIf",le.avatarTpl),i.xp6(2),i.Q6J("ngIf",le.nzTitle||le.nzDescription||le.descriptionComponent||le.titleComponent))},directives:[me,z,g,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),y})(),Re=(()=>{class y{constructor(){}}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:Y,decls:1,vars:0,template:function(P,le){1&P&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),We=(()=>{class y{constructor(){}}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-action"]],viewQuery:function(P,le){if(1&P&&i.Gf(i.Rgc,5),2&P){let Se;i.iGM(Se=i.CRH())&&(le.templateRef=Se.first)}},exportAs:["nzListItemAction"],ngContentSelectors:Y,decls:1,vars:0,template:function(P,le){1&P&&(i.F$t(),i.YNc(0,R,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),y})(),$e=(()=>{class y{constructor(P,le){this.ngZone=P,this.cdr=le,this.nzActions=[],this.actions=[],this.destroy$=new c.xQ,this.inputActionChanges$=new c.xQ,this.contentChildrenChanges$=(0,W.P)(()=>this.nzListItemActions?(0,d.of)(null):this.ngZone.onStable.asObservable().pipe((0,F.q)(1),(0,L.w)(()=>this.contentChildrenChanges$))),(0,E.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,ne.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Se=>Se.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return y.\u0275fac=function(P){return new(P||y)(i.Y36(i.R0b),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(P,le,Se){if(1&P&&i.Suo(Se,We,4),2&P){let Fe;i.iGM(Fe=i.CRH())&&(le.nzListItemActions=Fe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:G,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(P,le){1&P&&i.YNc(0,Te,3,2,"li",0),2&P&&i.Q6J("ngForOf",le.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),y})(),Ge=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(P,le){1&P&&i._UZ(0,"nz-embed-empty",0),2&P&&i.Q6J("nzComponentName","list")("specificContent",le.nzNoResult)},directives:[b.gB],encapsulation:2,changeDetection:0}),y})(),ke=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:Y,decls:1,vars:0,template:function(P,le){1&P&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Je=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:Y,decls:1,vars:0,template:function(P,le){1&P&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),qe=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:Y,decls:1,vars:0,template:function(P,le){1&P&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),rt=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275dir=i.lG2({type:y,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),y})(),Ze=(()=>{class y{constructor(P){this.directionality=P,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new D.X(this.nzItemLayout),this.destroy$=new c.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var P;this.dir=this.directionality.value,null===(P=this.directionality.change)||void 0===P||P.pipe((0,ne.R)(this.destroy$)).subscribe(le=>{this.dir=le})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(P){P.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return y.\u0275fac=function(P){return new(P||y)(i.Y36(ie.Is,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(P,le,Se){if(1&P&&(i.Suo(Se,Je,5),i.Suo(Se,qe,5),i.Suo(Se,rt,5)),2&P){let Fe;i.iGM(Fe=i.CRH())&&(le.nzListFooterComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.nzListPaginationComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.nzListLoadMoreDirective=Fe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(P,le){2&P&&i.ekj("ant-list-rtl","rtl"===le.dir)("ant-list-vertical","vertical"===le.nzItemLayout)("ant-list-lg","large"===le.nzSize)("ant-list-sm","small"===le.nzSize)("ant-list-split",le.nzSplit)("ant-list-bordered",le.nzBordered)("ant-list-loading",le.nzLoading)("ant-list-something-after-last-item",le.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:Q,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(P,le){if(1&P&&(i.F$t(Oe),i.YNc(0,Ce,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Me,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,H,1,2,"div",3),i.YNc(7,ge,2,2,"div",4),i.YNc(8,ue,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Pe,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,re,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,de,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&P){const Se=i.MAs(1);i.xp6(2),i.Q6J("ngIf",le.nzHeader),i.xp6(2),i.Q6J("nzSpinning",le.nzLoading),i.xp6(2),i.Q6J("ngIf",le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",le.nzGrid&&le.nzDataSource)("ngIfElse",Se),i.xp6(1),i.Q6J("ngIf",!le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",le.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",le.nzLoadMore),i.xp6(2),i.Q6J("ngIf",le.nzPagination)}},directives:[ke,j.W,Ge,Je,qe,n.sg,n.tP,n.O5,s.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,A.gn)([(0,_.yF)()],y.prototype,"nzBordered",void 0),(0,A.gn)([(0,_.yF)()],y.prototype,"nzLoading",void 0),(0,A.gn)([(0,_.yF)()],y.prototype,"nzSplit",void 0),y})(),ot=(()=>{class y{constructor(P,le,Se,Fe){this.parentComp=Se,this.cdr=Fe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,le.addClass(P.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(P=>{this.itemLayout=P,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return y.\u0275fac=function(P){return new(P||y)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ze),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(P,le,Se){if(1&P&&i.Suo(Se,Re,5),2&P){let Fe;i.iGM(Fe=i.CRH())&&(le.listItemExtraDirective=Fe.first)}},hostVars:2,hostBindings:function(P,le){2&P&&i.ekj("ant-list-item-no-flex",le.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:ve,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(P,le){if(1&P&&(i.F$t(l),i.YNc(0,J,2,1,"ng-template",null,0,i.W1O),i.YNc(2,Be,3,1,"ng-template",null,1,i.W1O),i.YNc(4,tt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,He,4,4,"ng-template",null,3,i.W1O),i.YNc(8,v,6,4,"ng-container",4)),2&P){const Se=i.MAs(7);i.xp6(8),i.Q6J("ngIf",le.isVerticalAndExtra)("ngIfElse",Se)}},directives:[$e,Re,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,A.gn)([(0,_.yF)()],y.prototype,"nzNoFlex",void 0),y})(),st=(()=>{class y{}return y.\u0275fac=function(P){return new(P||y)},y.\u0275mod=i.oAB({type:y}),y.\u0275inj=i.cJS({imports:[[ie.vT,n.ez,j.j,V.Jb,t.Rt,s.T,b.Xo]]}),y})()},4219:(ze,ee,o)=>{o.d(ee,{hl:()=>J,Cc:()=>Q,wO:()=>Ye,YV:()=>pt,uA:()=>we,r9:()=>be,ip:()=>v});var i=o(655),t=o(5e3),n=o(8929),s=o(591),A=o(6787),_=o(6053),c=o(4850),W=o(1709),d=o(2198),E=o(7604),D=o(7138),F=o(5778),L=o(7625),ne=o(1059),b=o(7545),ie=o(1721),j=o(325),V=o(226),Y=o(2845),N=o(6950),U=o(925),se=o(4832),B=o(9808),I=o(647),h=o(969),x=o(8076);const $=["nz-submenu-title",""];function O(l,ve){if(1&l&&t._UZ(0,"i",4),2&l){const z=t.oxw();t.Q6J("nzType",z.nzIcon)}}function w(l,ve){if(1&l&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&l){const z=t.oxw();t.xp6(2),t.Oqu(z.nzTitle)}}function u(l,ve){1&l&&t._UZ(0,"i",8)}function R(l,ve){1&l&&t._UZ(0,"i",9)}function G(l,ve){if(1&l&&(t.TgZ(0,"span",5),t.YNc(1,u,1,0,"i",6),t.YNc(2,R,1,0,"i",7),t.qZA()),2&l){const z=t.oxw();t.Q6J("ngSwitch",z.dir),t.xp6(1),t.Q6J("ngSwitchCase","rtl")}}function K(l,ve){1&l&&t._UZ(0,"i",10)}const _e=["*"],Te=["nz-submenu-inline-child",""];function Ae(l,ve){}const xe=["nz-submenu-none-inline-child",""];function oe(l,ve){}const Ce=["nz-submenu",""];function pe(l,ve){1&l&&t.Hsn(0,0,["*ngIf","!nzTitle"])}function Me(l,ve){if(1&l&&t._UZ(0,"div",6),2&l){const z=t.oxw(),g=t.MAs(7);t.Q6J("mode",z.mode)("nzOpen",z.nzOpen)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("menuClass",z.nzMenuClassName)("templateOutlet",g)}}function H(l,ve){if(1&l){const z=t.EpF();t.TgZ(0,"div",8),t.NdJ("subMenuMouseState",function(me){return t.CHM(z),t.oxw(2).setMouseEnterState(me)}),t.qZA()}if(2&l){const z=t.oxw(2),g=t.MAs(7);t.Q6J("theme",z.theme)("mode",z.mode)("nzOpen",z.nzOpen)("position",z.position)("nzDisabled",z.nzDisabled)("isMenuInsideDropDown",z.isMenuInsideDropDown)("templateOutlet",g)("menuClass",z.nzMenuClassName)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)}}function he(l,ve){if(1&l){const z=t.EpF();t.YNc(0,H,1,10,"ng-template",7),t.NdJ("positionChange",function(me){return t.CHM(z),t.oxw().onPositionChange(me)})}if(2&l){const z=t.oxw(),g=t.MAs(1);t.Q6J("cdkConnectedOverlayPositions",z.overlayPositions)("cdkConnectedOverlayOrigin",g)("cdkConnectedOverlayWidth",z.triggerWidth)("cdkConnectedOverlayOpen",z.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function k(l,ve){1&l&&t.Hsn(0,1)}const ge=[[["","title",""]],"*"],ue=["[title]","*"],Ne=["titleElement"],Pe=["nz-menu-group",""];function re(l,ve){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const z=t.oxw();t.xp6(1),t.Oqu(z.nzTitle)}}function Ee(l,ve){1&l&&t.Hsn(0,1,["*ngIf","!nzTitle"])}const de=["*",[["","title",""]]],Oe=["*","[title]"],Q=new t.OlP("NzIsInDropDownMenuToken"),fe=new t.OlP("NzMenuServiceLocalToken");let J=(()=>{class l{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(z){this.descendantMenuItemClick$.next(z)}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setMode(z){this.mode$.next(z)}setTheme(z){this.theme$.next(z)}setInlineIndent(z){this.inlineIndent$.next(z)}}return l.\u0275fac=function(z){return new(z||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Ie=(()=>{class l{constructor(z,g,me){this.nzHostSubmenuService=z,this.nzMenuService=g,this.isMenuInsideDropDown=me,this.mode$=this.nzMenuService.mode$.pipe((0,c.U)($e=>"inline"===$e?"inline":"vertical"===$e||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ye=this.childMenuItemClick$.pipe((0,W.zg)(()=>this.mode$),(0,d.h)($e=>"inline"!==$e||this.isMenuInsideDropDown),(0,E.h)(!1)),Re=(0,A.T)(this.isMouseEnterTitleOrOverlay$,ye);(0,_.aj)([this.isChildSubMenuOpen$,Re]).pipe((0,c.U)(([$e,Ge])=>$e||Ge),(0,D.e)(150),(0,F.x)(),(0,L.R)(this.destroy$)).pipe((0,F.x)()).subscribe($e=>{this.setOpenStateWithoutDebounce($e),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next($e):this.nzMenuService.isChildSubMenuOpen$.next($e)})}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setOpenStateWithoutDebounce(z){this.isCurrentSubMenuOpen$.next(z)}setMouseEnterTitleOrOverlayState(z){this.isMouseEnterTitleOrOverlay$.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.LFG(l,12),t.LFG(J),t.LFG(Q))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),be=(()=>{class l{constructor(z,g,me,ye,Re,We,$e,Ge){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=me,this.isMenuInsideDropDown=ye,this.directionality=Re,this.routerLink=We,this.routerLinkWithHref=$e,this.router=Ge,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ge&&this.router.events.pipe((0,L.R)(this.destroy$),(0,d.h)(ke=>ke instanceof j.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(z){this.nzDisabled?(z.preventDefault(),z.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(z){this.nzSelected=z,this.selected$.next(z)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const z=this.hasActiveLinks();this.nzSelected!==z&&(this.nzSelected=z,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const z=this.isLinkActive(this.router);return this.routerLink&&z(this.routerLink)||this.routerLinkWithHref&&z(this.routerLinkWithHref)||this.listOfRouterLink.some(z)||this.listOfRouterLinkWithHref.some(z)}isLinkActive(z){return g=>z.isActive(g.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var z;(0,_.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,L.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,L.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,L.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(z){z.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(J),t.Y36(t.sBO),t.Y36(Ie,8),t.Y36(Q),t.Y36(V.Is,8),t.Y36(j.rH,8),t.Y36(j.yS,8),t.Y36(j.F0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-item",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,j.rH,5),t.Suo(me,j.yS,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfRouterLink=ye),t.iGM(ye=t.CRH())&&(g.listOfRouterLinkWithHref=ye)}},hostVars:20,hostBindings:function(z,g){1&z&&t.NdJ("click",function(ye){return g.clickMenuItem(ye)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.nzPaddingLeft||g.inlinePaddingLeft,"px")("padding-right","rtl"===g.dir?g.nzPaddingLeft||g.inlinePaddingLeft:null,"px"),t.ekj("ant-dropdown-menu-item",g.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",g.isMenuInsideDropDown&&g.nzSelected)("ant-dropdown-menu-item-danger",g.isMenuInsideDropDown&&g.nzDanger)("ant-dropdown-menu-item-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-item",!g.isMenuInsideDropDown)("ant-menu-item-selected",!g.isMenuInsideDropDown&&g.nzSelected)("ant-menu-item-danger",!g.isMenuInsideDropDown&&g.nzDanger)("ant-menu-item-disabled",!g.isMenuInsideDropDown&&g.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[t.TTD]}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDisabled",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzSelected",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDanger",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzMatchRouter",void 0),l})(),Be=(()=>{class l{constructor(z,g){this.cdr=z,this.directionality=g,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new t.vpe,this.subMenuMouseState=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var z;this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.sBO),t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(z,g){1&z&&t.NdJ("click",function(){return g.clickTitle()})("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.paddingLeft,"px")("padding-right","rtl"===g.dir?g.paddingLeft:null,"px"),t.ekj("ant-dropdown-menu-submenu-title",g.isMenuInsideDropDown)("ant-menu-submenu-title",!g.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:$,ngContentSelectors:_e,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(z,g){if(1&z&&(t.F$t(),t.YNc(0,O,1,1,"i",0),t.YNc(1,w,3,1,"ng-container",1),t.Hsn(2),t.YNc(3,G,3,2,"span",2),t.YNc(4,K,1,0,"ng-template",null,3,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("ngIf",g.nzIcon),t.xp6(1),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(2),t.Q6J("ngIf",g.isMenuInsideDropDown)("ngIfElse",me)}},directives:[B.O5,I.Ls,h.f,B.RF,B.n9,B.ED],encapsulation:2,changeDetection:0}),l})(),tt=(()=>{class l{constructor(z,g,me){this.elementRef=z,this.renderer=g,this.directionality=me,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:me,menuClass:ye}=z;(g||me)&&this.calcMotionState(),ye&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Re=>!!Re).forEach(Re=>{this.renderer.removeClass(this.elementRef.nativeElement,Re)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Re=>!!Re).forEach(Re=>{this.renderer.addClass(this.elementRef.nativeElement,Re)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(z,g){2&z&&(t.d8E("@collapseMotion",g.expandState),t.ekj("ant-menu-rtl","rtl"===g.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[t.TTD],attrs:Te,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&t.YNc(0,Ae,0,0,"ng-template",0),2&z&&t.Q6J("ngTemplateOutlet",g.templateOutlet)},directives:[B.tP],encapsulation:2,data:{animation:[x.J_]},changeDetection:0}),l})(),nt=(()=>{class l{constructor(z){this.directionality=z,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new t.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:me}=z;(g||me)&&this.calcMotionState()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(z,g){1&z&&t.NdJ("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.d8E("@slideMotion",g.expandState)("@zoomBigMotion",g.expandState),t.ekj("ant-menu-light","light"===g.theme)("ant-menu-dark","dark"===g.theme)("ant-menu-submenu-placement-bottom","horizontal"===g.mode)("ant-menu-submenu-placement-right","vertical"===g.mode&&"right"===g.position)("ant-menu-submenu-placement-left","vertical"===g.mode&&"left"===g.position)("ant-menu-submenu-rtl","rtl"===g.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[t.TTD],attrs:xe,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&(t.TgZ(0,"div",0),t.YNc(1,oe,0,0,"ng-template",1),t.qZA()),2&z&&(t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-menu",!g.isMenuInsideDropDown)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown)("ant-menu-vertical",!g.isMenuInsideDropDown)("ant-dropdown-menu-sub",g.isMenuInsideDropDown)("ant-menu-sub",!g.isMenuInsideDropDown)("ant-menu-rtl","rtl"===g.dir),t.Q6J("ngClass",g.menuClass),t.xp6(1),t.Q6J("ngTemplateOutlet",g.templateOutlet))},directives:[B.mk,B.tP],encapsulation:2,data:{animation:[x.$C,x.mF]},changeDetection:0}),l})();const Ke=[N.yW.rightTop,N.yW.right,N.yW.rightBottom,N.yW.leftTop,N.yW.left,N.yW.leftBottom],Ve=[N.yW.bottomLeft];let C=(()=>{class l{constructor(z,g,me,ye,Re,We,$e){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=me,this.platform=ye,this.isMenuInsideDropDown=Re,this.directionality=We,this.noAnimation=$e,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new t.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ke,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(z){this.nzSubmenuService.setOpenStateWithoutDebounce(z)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(z){this.isActive=z,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(z)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(z){const g=(0,N.d_)(z);"rightTop"===g||"rightBottom"===g||"right"===g?this.position="right":("leftTop"===g||"leftBottom"===g||"left"===g)&&(this.position="left")}ngOnInit(){var z;this.nzMenuService.theme$.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.theme=g,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.mode=g,"horizontal"===g?this.overlayPositions=Ve:"vertical"===g&&(this.overlayPositions=Ke),this.cdr.markForCheck()}),(0,_.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,L.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.isActive=g,g!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=g,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const z=this.listOfNzMenuItemDirective,g=z.changes,me=(0,A.T)(g,...z.map(ye=>ye.selected$));g.pipe((0,ne.O)(z),(0,b.w)(()=>me),(0,ne.O)(!0),(0,c.U)(()=>z.some(ye=>ye.nzSelected)),(0,L.R)(this.destroy$)).subscribe(ye=>{this.isSelected=ye,this.cdr.markForCheck()})}ngOnChanges(z){const{nzOpen:g}=z;g&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(J),t.Y36(t.sBO),t.Y36(Ie),t.Y36(U.t4),t.Y36(Q),t.Y36(V.Is,8),t.Y36(se.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,l,5),t.Suo(me,be,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfNzSubMenuComponent=ye),t.iGM(ye=t.CRH())&&(g.listOfNzMenuItemDirective=ye)}},viewQuery:function(z,g){if(1&z&&t.Gf(Y.xu,7,t.SBq),2&z){let me;t.iGM(me=t.CRH())&&(g.cdkOverlayOrigin=me.first)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu-submenu",g.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-dropdown-menu-submenu-open",g.isMenuInsideDropDown&&g.nzOpen)("ant-dropdown-menu-submenu-selected",g.isMenuInsideDropDown&&g.isSelected)("ant-dropdown-menu-submenu-vertical",g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-dropdown-menu-submenu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-dropdown-menu-submenu-inline",g.isMenuInsideDropDown&&"inline"===g.mode)("ant-dropdown-menu-submenu-active",g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu",!g.isMenuInsideDropDown)("ant-menu-submenu-disabled",!g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-submenu-open",!g.isMenuInsideDropDown&&g.nzOpen)("ant-menu-submenu-selected",!g.isMenuInsideDropDown&&g.isSelected)("ant-menu-submenu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-menu-submenu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-menu-submenu-inline",!g.isMenuInsideDropDown&&"inline"===g.mode)("ant-menu-submenu-active",!g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu-rtl","rtl"===g.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[t._Bn([Ie]),t.TTD],attrs:Ce,ngContentSelectors:ue,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(z,g){if(1&z&&(t.F$t(ge),t.TgZ(0,"div",0,1),t.NdJ("subMenuMouseState",function(ye){return g.setMouseEnterState(ye)})("toggleSubMenu",function(){return g.toggleSubMenu()}),t.YNc(2,pe,1,0,"ng-content",2),t.qZA(),t.YNc(3,Me,1,6,"div",3),t.YNc(4,he,1,5,"ng-template",null,4,t.W1O),t.YNc(6,k,1,0,"ng-template",null,5,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("nzIcon",g.nzIcon)("nzTitle",g.nzTitle)("mode",g.mode)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("paddingLeft",g.nzPaddingLeft||g.inlinePaddingLeft),t.xp6(2),t.Q6J("ngIf",!g.nzTitle),t.xp6(1),t.Q6J("ngIf","inline"===g.mode)("ngIfElse",me)}},directives:[Be,tt,nt,Y.xu,B.O5,se.P,Y.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzOpen",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDisabled",void 0),l})();function He(l,ve){return l||ve}function Xe(l){return l||!1}let Ye=(()=>{class l{constructor(z,g,me,ye){this.nzMenuService=z,this.isMenuInsideDropDown=g,this.cdr=me,this.directionality=ye,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new t.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(z){this.nzInlineCollapsed=z,this.inlineCollapsed$.next(z)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(z=>z.nzOpen),this.listOfNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var z;(0,_.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,L.R)(this.destroy$)).subscribe(([g,me])=>{this.actualMode=g?"vertical":me,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.nzClick.emit(g),this.nzSelectable&&!g.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(me=>me.setSelectedState(me===g))}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,L.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,L.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(z){const{nzInlineCollapsed:g,nzInlineIndent:me,nzTheme:ye,nzMode:Re}=z;g&&this.inlineCollapsed$.next(this.nzInlineCollapsed),me&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ye&&this.nzMenuService.setTheme(this.nzTheme),Re&&(this.mode$.next(this.nzMode),!z.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(We=>We.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(J),t.Y36(Q),t.Y36(t.sBO),t.Y36(V.Is,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,be,5),t.Suo(me,C,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfNzMenuItemDirective=ye),t.iGM(ye=t.CRH())&&(g.listOfNzSubMenuComponent=ye)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-dropdown-menu-root",g.isMenuInsideDropDown)("ant-dropdown-menu-light",g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-dropdown-menu-dark",g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-dropdown-menu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-dropdown-menu-inline",g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-dropdown-menu-inline-collapsed",g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu",!g.isMenuInsideDropDown)("ant-menu-root",!g.isMenuInsideDropDown)("ant-menu-light",!g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-menu-dark",!g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-menu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-menu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-menu-inline",!g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-menu-inline-collapsed",!g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu-rtl","rtl"===g.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[t._Bn([{provide:fe,useClass:J},{provide:J,useFactory:He,deps:[[new t.tp0,new t.FiY,J],fe]},{provide:Q,useFactory:Xe,deps:[[new t.tp0,new t.FiY,Q]]}]),t.TTD]}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzSelectable",void 0),l})();function lt(l){return l||!1}let we=(()=>{class l{constructor(z,g,me){this.elementRef=z,this.renderer=g,this.isMenuInsideDropDown=me,this.renderer.addClass(z.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const z=this.titleElement.nativeElement.nextElementSibling;z&&this.renderer.addClass(z,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Q))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-menu-group",""]],viewQuery:function(z,g){if(1&z&&t.Gf(Ne,5),2&z){let me;t.iGM(me=t.CRH())&&(g.titleElement=me.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[t._Bn([{provide:Q,useFactory:lt,deps:[[new t.tp0,new t.FiY,Q]]}])],attrs:Pe,ngContentSelectors:Oe,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(z,g){1&z&&(t.F$t(de),t.TgZ(0,"div",null,0),t.YNc(2,re,2,1,"ng-container",1),t.YNc(3,Ee,1,0,"ng-content",2),t.qZA(),t.Hsn(4)),2&z&&(t.ekj("ant-menu-item-group-title",!g.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",g.isMenuInsideDropDown),t.xp6(2),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(1),t.Q6J("ngIf",!g.nzTitle))},directives:[h.f,B.O5],encapsulation:2,changeDetection:0}),l})(),pt=(()=>{class l{constructor(z,g){this.elementRef=z,this.renderer=g,this.renderer.addClass(z.nativeElement,"ant-dropdown-menu-item-divider")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(z){return new(z||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[V.vT,B.ez,U.ud,Y.U8,I.PV,se.g,h.T]]}),l})()},3610:(ze,ee,o)=>{o.d(ee,{lU:()=>V,$6:()=>N});var i=o(655),t=o(5e3),n=o(8076),s=o(9439),A=o(1721),_=o(404),c=o(4832),W=o(226),d=o(2845),E=o(6950),D=o(9808),F=o(969);function L(U,se){if(1&U&&(t.ynx(0),t._uU(1),t.BQk()),2&U){const B=t.oxw(3);t.xp6(1),t.Oqu(B.nzTitle)}}function ne(U,se){if(1&U&&(t.TgZ(0,"div",10),t.YNc(1,L,2,1,"ng-container",9),t.qZA()),2&U){const B=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",B.nzTitle)}}function b(U,se){if(1&U&&(t.ynx(0),t._uU(1),t.BQk()),2&U){const B=t.oxw(2);t.xp6(1),t.Oqu(B.nzContent)}}function ie(U,se){if(1&U&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,ne,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,b,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&U){const B=t.oxw();t.ekj("ant-popover-rtl","rtl"===B.dir),t.Q6J("ngClass",B._classMap)("ngStyle",B.nzOverlayStyle)("@.disabled",null==B.noAnimation?null:B.noAnimation.nzNoAnimation)("nzNoAnimation",null==B.noAnimation?null:B.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",B.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",B.nzContent)}}let V=(()=>{class U extends _.Mg{constructor(B,I,h,x,$,O){super(B,I,h,x,$,O),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(Y)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return U.\u0275fac=function(B){return new(B||U)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(c.P,9),t.Y36(s.jY))},U.\u0275dir=t.lG2({type:U,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(B,I){2&B&&t.ekj("ant-popover-open",I.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,i.gn)([(0,A.yF)()],U.prototype,"arrowPointAtCenter",void 0),(0,i.gn)([(0,s.oS)()],U.prototype,"nzPopoverBackdrop",void 0),U})(),Y=(()=>{class U extends _.XK{constructor(B,I,h){super(B,I,h),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,_.pu)(this.nzTitle)&&(0,_.pu)(this.nzContent)}}return U.\u0275fac=function(B){return new(B||U)(t.Y36(t.sBO),t.Y36(W.Is,8),t.Y36(c.P,9))},U.\u0275cmp=t.Xpm({type:U,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(B,I){1&B&&(t.YNc(0,ie,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(x){return I.onClickOutside(x)})("detach",function(){return I.hide()})("positionChange",function(x){return I.onPositionChange(x)})),2&B&&t.Q6J("cdkConnectedOverlayHasBackdrop",I.hasBackdrop)("cdkConnectedOverlayOrigin",I.origin)("cdkConnectedOverlayPositions",I._positions)("cdkConnectedOverlayOpen",I._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",I.nzArrowPointAtCenter)},directives:[d.pI,E.hQ,D.mk,D.PC,c.P,D.O5,F.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),U})(),N=(()=>{class U{}return U.\u0275fac=function(B){return new(B||U)},U.\u0275mod=t.oAB({type:U}),U.\u0275inj=t.cJS({imports:[[W.vT,D.ez,d.U8,F.T,E.e4,c.g,_.cg]]}),U})()},8144:(ze,ee,o)=>{o.d(ee,{NU:()=>j,$1:()=>ne,zf:()=>V});var i=o(226),t=o(9808),n=o(5e3),s=o(655),A=o(8929),_=o(7625),c=o(9439),W=o(1721);function d(Y,N){}const E=function(Y){return{$implicit:Y}};function D(Y,N){if(1&Y&&(n.TgZ(0,"span",4),n.YNc(1,d,0,0,"ng-template",5),n.qZA()),2&Y){const U=n.oxw(),se=U.last,B=U.index,I=n.oxw();n.Udp("margin-bottom","vertical"===I.nzDirection?se?null:I.spaceSize:null,"px")("margin-right","horizontal"===I.nzDirection?se?null:I.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",I.nzSplit)("ngTemplateOutletContext",n.VKq(6,E,B))}}function F(Y,N){if(1&Y&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,D,2,8,"span",3)),2&Y){const U=N.$implicit,se=N.last,B=n.oxw();n.Udp("margin-bottom","vertical"===B.nzDirection?se?null:B.spaceSize:null,"px")("margin-right","horizontal"===B.nzDirection?se?null:B.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",U),n.xp6(1),n.Q6J("ngIf",B.nzSplit&&!se)}}const L=["*"];let ne=(()=>{class Y{constructor(){}}return Y.\u0275fac=function(U){return new(U||Y)},Y.\u0275dir=n.lG2({type:Y,selectors:[["","nzSpaceItem",""]]}),Y})();const ie={small:8,middle:16,large:24};let j=(()=>{class Y{constructor(U,se){this.nzConfigService=U,this.cdr=se,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=ie.small,this.destroy$=new A.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?ie[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Y.\u0275fac=function(U){return new(U||Y)(n.Y36(c.jY),n.Y36(n.sBO))},Y.\u0275cmp=n.Xpm({type:Y,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(U,se,B){if(1&U&&n.Suo(B,ne,4,n.Rgc),2&U){let I;n.iGM(I=n.CRH())&&(se.items=I)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(U,se){2&U&&(n.Udp("flex-wrap",se.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===se.nzDirection)("ant-space-vertical","vertical"===se.nzDirection)("ant-space-align-start","start"===se.mergedAlign)("ant-space-align-end","end"===se.mergedAlign)("ant-space-align-center","center"===se.mergedAlign)("ant-space-align-baseline","baseline"===se.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:L,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(U,se){1&U&&(n.F$t(),n.Hsn(0),n.YNc(1,F,3,6,"ng-template",0)),2&U&&(n.xp6(1),n.Q6J("ngForOf",se.items))},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,W.yF)()],Y.prototype,"nzWrap",void 0),(0,s.gn)([(0,c.oS)()],Y.prototype,"nzSize",void 0),Y})(),V=(()=>{class Y{}return Y.\u0275fac=function(U){return new(U||Y)},Y.\u0275mod=n.oAB({type:Y}),Y.\u0275inj=n.cJS({imports:[[i.vT,t.ez]]}),Y})()},7525:(ze,ee,o)=>{o.d(ee,{W:()=>$,j:()=>O});var i=o(655),t=o(5e3),n=o(8929),s=o(591),A=o(839),_=o(8723),c=o(1177);class d{constructor(u){this.durationSelector=u}call(u,R){return R.subscribe(new E(u,this.durationSelector))}}class E extends c.Ds{constructor(u,R){super(u),this.durationSelector=R,this.hasValue=!1}_next(u){try{const R=this.durationSelector.call(this,u);R&&this._tryNext(u,R)}catch(R){this.destination.error(R)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(u,R){let G=this.durationSubscription;this.value=u,this.hasValue=!0,G&&(G.unsubscribe(),this.remove(G)),G=(0,c.ft)(R,new c.IY(this)),G&&!G.closed&&this.add(this.durationSubscription=G)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const u=this.value,R=this.durationSubscription;R&&(this.durationSubscription=void 0,R.unsubscribe(),this.remove(R)),this.value=void 0,this.hasValue=!1,super._next(u)}}}var D=o(1059),F=o(5778),L=o(7545),ne=o(7625),b=o(9439),ie=o(1721),j=o(226),V=o(9808),Y=o(7144);function N(w,u){1&w&&(t.TgZ(0,"span",3),t._UZ(1,"i",4),t._UZ(2,"i",4),t._UZ(3,"i",4),t._UZ(4,"i",4),t.qZA())}function U(w,u){}function se(w,u){if(1&w&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&w){const R=t.oxw(2);t.xp6(1),t.Oqu(R.nzTip)}}function B(w,u){if(1&w&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.YNc(2,U,0,0,"ng-template",6),t.YNc(3,se,2,1,"div",7),t.qZA(),t.qZA()),2&w){const R=t.oxw(),G=t.MAs(1);t.xp6(1),t.ekj("ant-spin-rtl","rtl"===R.dir)("ant-spin-spinning",R.isLoading)("ant-spin-lg","large"===R.nzSize)("ant-spin-sm","small"===R.nzSize)("ant-spin-show-text",R.nzTip),t.xp6(1),t.Q6J("ngTemplateOutlet",R.nzIndicator||G),t.xp6(1),t.Q6J("ngIf",R.nzTip)}}function I(w,u){if(1&w&&(t.TgZ(0,"div",9),t.Hsn(1),t.qZA()),2&w){const R=t.oxw();t.ekj("ant-spin-blur",R.isLoading)}}const h=["*"],x="spin";let $=(()=>{class w{constructor(R,G,K){this.nzConfigService=R,this.cdr=G,this.directionality=K,this._nzModuleName=x,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new A.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var R;this.delay$.pipe((0,D.O)(this.nzDelay),(0,F.x)(),(0,L.w)(K=>0===K?this.spinning$:this.spinning$.pipe(function W(w){return u=>u.lift(new d(w))}(_e=>(0,_.H)(_e?K:0)))),(0,ne.R)(this.destroy$)).subscribe(K=>{this.isLoading=K,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(x).pipe((0,ne.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(R=this.directionality.change)||void 0===R||R.pipe((0,ne.R)(this.destroy$)).subscribe(K=>{this.dir=K,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(R){const{nzSpinning:G,nzDelay:K}=R;G&&this.spinning$.next(this.nzSpinning),K&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(R){return new(R||w)(t.Y36(b.jY),t.Y36(t.sBO),t.Y36(j.Is,8))},w.\u0275cmp=t.Xpm({type:w,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(R,G){2&R&&t.ekj("ant-spin-nested-loading",!G.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[t.TTD],ngContentSelectors:h,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(R,G){1&R&&(t.F$t(),t.YNc(0,N,5,0,"ng-template",null,0,t.W1O),t.YNc(2,B,4,12,"div",1),t.YNc(3,I,2,2,"div",2)),2&R&&(t.xp6(2),t.Q6J("ngIf",G.isLoading),t.xp6(1),t.Q6J("ngIf",!G.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,i.gn)([(0,b.oS)()],w.prototype,"nzIndicator",void 0),(0,i.gn)([(0,ie.Rn)()],w.prototype,"nzDelay",void 0),(0,i.gn)([(0,ie.yF)()],w.prototype,"nzSimple",void 0),(0,i.gn)([(0,ie.yF)()],w.prototype,"nzSpinning",void 0),w})(),O=(()=>{class w{}return w.\u0275fac=function(R){return new(R||w)},w.\u0275mod=t.oAB({type:w}),w.\u0275inj=t.cJS({imports:[[j.vT,V.ez,Y.Q8]]}),w})()},8481:(ze,ee,o)=>{o.d(ee,{j:()=>L,X:()=>ne});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8693),_=o(1721),c=o(226),W=o(9808),d=o(647),E=o(4182);function D(b,ie){if(1&b){const j=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(Y){return t.CHM(j),t.oxw().closeTag(Y)}),t.qZA()}}const F=["*"];let L=(()=>{class b{constructor(j,V,Y,N){this.cdr=j,this.renderer=V,this.elementRef=Y,this.directionality=N,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(j){this.nzOnClose.emit(j),j.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const j=this.elementRef.nativeElement,V=new RegExp(`(ant-tag-(?:${[...A.uf,...A.Bh].join("|")}))`,"g"),Y=j.classList.toString(),N=[];let U=V.exec(Y);for(;null!==U;)N.push(U[1]),U=V.exec(Y);j.classList.remove(...N)}setPresetColor(){const j=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,A.o2)(this.nzColor)||(0,A.M8)(this.nzColor)),this.isPresetColor&&j.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var j;null===(j=this.directionality.change)||void 0===j||j.pipe((0,s.R)(this.destroy$)).subscribe(V=>{this.dir=V,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(j){const{nzColor:V}=j;V&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(j){return new(j||b)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c.Is,8))},b.\u0275cmp=t.Xpm({type:b,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(j,V){1&j&&t.NdJ("click",function(){return V.updateCheckedStatus()}),2&j&&(t.Udp("background-color",V.isPresetColor?"":V.nzColor),t.ekj("ant-tag-has-color",V.nzColor&&!V.isPresetColor)("ant-tag-checkable","checkable"===V.nzMode)("ant-tag-checkable-checked",V.nzChecked)("ant-tag-rtl","rtl"===V.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:F,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(j,V){1&j&&(t.F$t(),t.Hsn(0),t.YNc(1,D,1,0,"i",0)),2&j&&(t.xp6(1),t.Q6J("ngIf","closeable"===V.nzMode))},directives:[W.O5,d.Ls],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.yF)()],b.prototype,"nzChecked",void 0),b})(),ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[[c.vT,W.ez,E.u5,d.PV]]}),b})()}}]);