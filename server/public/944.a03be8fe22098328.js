"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(de,W,o)=>{o.d(W,{H:()=>De});var t=o(6654),e=o(5e3),i=o(9808),s=o(325),I=o(8481),v=o(3610),a=o(3240),U=o(4850),c=o(2198),_=o(7630),C=o(7484),A=o(5017),O=o(3098),K=o(1894),N=o(8144),k=o(6949);function Y(te,pe){if(1&te&&(e._UZ(0,"i",11),e._uU(1)),2&te){const E=e.oxw().ngIf;e.xp6(1),e.hij(" ",E.officialName," ")}}function w(te,pe){if(1&te&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&te){const E=pe.$implicit;e.xp6(1),e.Oqu(E)}}function Z(te,pe){if(1&te&&(e.TgZ(0,"nz-descriptions-item",12),e.YNc(1,w,2,1,"nz-tag",13),e.qZA()),2&te){const E=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",E.geneAliases)}}function T(te,pe){if(1&te&&(e.TgZ(0,"a",14)(1,"nz-tag",15),e._UZ(2,"i",16),e._uU(3),e.qZA()()),2&te){const E=e.oxw().ngIf;e.MGl("routerLink","/genes/",E.id,"/flags"),e.xp6(3),e.hij(" Flags (",E.flags.totalCount,") ")}}function R(te,pe){if(1&te&&(e.TgZ(0,"a",14)(1,"nz-tag",17),e._UZ(2,"i",18),e._uU(3),e.qZA()()),2&te){const E=e.oxw().ngIf;e.MGl("routerLink","/genes/",E.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",E.revisions.totalCount,") ")}}function X(te,pe){if(1&te&&(e.TgZ(0,"a",14)(1,"nz-tag",19),e._UZ(2,"i",20),e._uU(3),e.qZA()()),2&te){const E=e.oxw().ngIf;e.MGl("routerLink","/genes/",E.id,"/comments"),e.xp6(3),e.hij(" Comments (",E.comments.totalCount,") ")}}function b(te,pe){if(1&te&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,Y,2,1,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4),e.YNc(5,Z,2,1,"nz-descriptions-item",5),e.TgZ(6,"nz-descriptions-item",6),e._uU(7),e.qZA()(),e.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),e.YNc(11,T,4,2,"a",10),e.YNc(12,R,4,2,"a",10),e.YNc(13,X,4,2,"a",10),e.qZA()()()(),e.BQk()),2&te){const E=pe.ngIf,ne=e.MAs(3);e.xp6(1),e.Q6J("nzTitle",ne),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",E.geneAliases.length>0),e.xp6(2),e.hij(" ",E.variants.totalCount," ")}}let F=(()=>{class te{constructor(E){this.gql=E}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,U.U)(({data:E})=>null==E?void 0:E.gene),(0,c.h)(a.ep))}}return te.\u0275fac=function(E){return new(E||te)(e.Y36(_.rJ8))},te.\u0275cmp=e.Xpm({type:te,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(E,ne){1&E&&(e.TgZ(0,"div",0),e.YNc(1,b,14,4,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&E&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,ne.gene$)))},directives:[i.O5,C.bd,A.Ls,O.R7,O.uj,i.sg,I.j,K.SK,K.t3,N.NU,N.$1,s.yS],pipes:[k.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),te})();var g=o(4557);function B(te,pe){}function G(te,pe){if(1&te&&(e.ynx(0),e.TgZ(1,"a",5),e.YNc(2,B,0,0,"ng-template",6),e.qZA(),e.BQk()),2&te){const E=e.oxw(),ne=e.MAs(2);e.xp6(1),e.Q6J("routerLink",E.gene.link),e.xp6(1),e.Q6J("ngTemplateOutlet",ne)}}function x(te,pe){}function L(te,pe){if(1&te){const E=e.EpF();e.TgZ(0,"nz-tag",9),e.NdJ("nzOnClose",function(Q){return e.CHM(E),e.oxw(2).itemClosed(Q)}),e.YNc(1,x,0,0,"ng-template",6),e.qZA()}if(2&te){e.oxw();const E=e.MAs(2),ne=e.oxw(),Q=e.MAs(8);e.Q6J("nzPopoverMouseEnterDelay",ne.onCloseClicked?0:.5)("nzPopoverContent",E)("nzMode",ne.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",Q)}}function l(te,pe){if(1&te&&e._UZ(0,"cvc-gene-popover",10),2&te){const E=e.oxw(2);e.Q6J("geneId",E.gene.id)}}function P(te,pe){if(1&te&&(e.YNc(0,L,2,4,"nz-tag",7),e.YNc(1,l,1,1,"ng-template",null,8,e.W1O)),2&te){const E=e.oxw(),ne=e.MAs(4);e.Q6J("ngIf",E.enablePopover)("ngIfElse",ne)}}function $(te,pe){}function y(te,pe){if(1&te){const E=e.EpF();e.TgZ(0,"nz-tag",11),e.NdJ("nzOnClose",function(Q){return e.CHM(E),e.oxw().itemClosed(Q)}),e.YNc(1,$,0,0,"ng-template",6),e.qZA()}if(2&te){const E=e.oxw(),ne=e.MAs(8);e.Q6J("nzMode",E.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",ne)}}function H(te,pe){}function ie(te,pe){if(1&te&&e.YNc(0,H,0,0,"ng-template",6),2&te){e.oxw();const E=e.MAs(2);e.Q6J("ngTemplateOutlet",E)}}function ue(te,pe){if(1&te&&(e.ynx(0),e._uU(1),e.ALo(2,"truncate"),e.BQk()),2&te){const E=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,E.gene.name,12)," ")}}function he(te,pe){if(1&te&&e._uU(0),2&te){const E=e.oxw(2);e.hij(" ",E.gene.name," ")}}function ze(te,pe){if(1&te&&(e._UZ(0,"i",12),e.YNc(1,ue,3,4,"ng-container",0),e.YNc(2,he,1,1,"ng-template",null,13,e.W1O)),2&te){const E=e.MAs(3),ne=e.oxw();e.xp6(1),e.Q6J("ngIf",ne.truncateLongName)("ngIfElse",E)}}let De=(()=>{class te extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return te.\u0275fac=function(E){return new(E||te)},te.\u0275cmp=e.Xpm({type:te,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[e.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(E,ne){if(1&E&&(e.YNc(0,G,3,2,"ng-container",0),e.YNc(1,P,3,2,"ng-template",null,1,e.W1O),e.YNc(3,y,2,2,"ng-template",null,2,e.W1O),e.YNc(5,ie,1,1,"ng-template",null,3,e.W1O),e.YNc(7,ze,4,2,"ng-template",null,4,e.W1O)),2&E){const Q=e.MAs(6);e.Q6J("ngIf",ne.linked)("ngIfElse",Q)}},directives:[i.O5,s.yS,i.tP,I.j,v.lU,F,A.Ls],pipes:[g.W],styles:[""],changeDetection:0}),te})()},3309:(de,W,o)=>{o.d(W,{U:()=>K});var t=o(9808),e=o(325),i=o(8481),s=o(5017),I=o(3610),v=o(7484),a=o(1894),U=o(3098),c=o(8144),_=o(6949),C=o(5e3);let A=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=C.oAB({type:N}),N.\u0275inj=C.cJS({imports:[[t.ez,e.Bz,_.WG,v.vh,a.Jb,U.q6,i.X,s.PV,c.zf]]}),N})();var O=o(6905);let K=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=C.oAB({type:N}),N.\u0275inj=C.cJS({imports:[[t.ez,e.Bz,i.X,I.$6,s.PV,O.s,A]]}),N})()},1912:(de,W,o)=>{o.d(W,{s:()=>K});var t=o(5e3),e=o(6042),i=o(2643),s=o(2683),I=o(3640),a=o(2160),U=o(3762),c=o(5017);let _=(()=>{class N{constructor(Y){this.cookies=Y,this.location=function v(N){return encodeURIComponent(N).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return N.\u0275fac=function(Y){return new(Y||N)(t.Y36(a.N))},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Y,w){1&Y&&(t.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),t._UZ(3,"input",2),t.TgZ(4,"button",3),t._UZ(5,"i",4),t._uU(6," Sign In with a Google Account "),t.qZA()()(),t.TgZ(7,"nz-list-item")(8,"form",1),t._UZ(9,"input",2),t.TgZ(10,"button",3),t._uU(11," Sign In with an ORCID Account "),t.qZA()()(),t.TgZ(12,"nz-list-item")(13,"form",1),t._UZ(14,"input",2),t.TgZ(15,"button",3),t._UZ(16,"i",5),t._uU(17," Sign In with a Github Account "),t.qZA()()()()),2&Y&&(t.xp6(2),t.MGl("action","/api/auth/google_oauth2?origin=",w.location,"",t.LSH),t.xp6(1),t.s9C("value",w.xsrfToken),t.xp6(5),t.MGl("action","/api/auth/orcid?origin=",w.location,"",t.LSH),t.xp6(1),t.s9C("value",w.xsrfToken),t.xp6(4),t.MGl("action","/api/auth/github?origin=",w.location,"",t.LSH),t.xp6(1),t.s9C("value",w.xsrfToken))},directives:[U.n_,U.AA,e.ix,i.dQ,s.w,c.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),N})();function C(N,k){1&N&&(t.ynx(0),t.TgZ(1,"p",5),t._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),t.qZA(),t._UZ(3,"cvc-auth-options-list"),t.BQk())}function A(N,k){1&N&&t._uU(0," Sign In / Sign Up\n")}function O(N,k){if(1&N){const Y=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){return t.CHM(Y),t.oxw().handleCancel()}),t._uU(1,"Cancel"),t.qZA()}}let K=(()=>{class N{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Y,w){if(1&Y&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return w.showAuth()}),t.TgZ(1,"span"),t._uU(2,"Sign In / Sign Up"),t.qZA()(),t.TgZ(3,"nz-modal",1),t.NdJ("nzVisibleChange",function(T){return w.authVisible=T})("nzOnCancel",function(){return w.handleCancel()}),t.YNc(4,C,4,0,"ng-container",2),t.qZA(),t.YNc(5,A,1,0,"ng-template",null,3,t.W1O),t.YNc(7,O,2,0,"ng-template",null,4,t.W1O)),2&Y){const Z=t.MAs(6),T=t.MAs(8);t.xp6(3),t.Q6J("nzVisible",w.authVisible)("nzTitle",Z)("nzFooter",T)}},directives:[e.ix,i.dQ,s.w,I.du,I.Hf,_],styles:["[_nghost-%COMP%]{display:inline-block}"]}),N})()},1844:(de,W,o)=>{o.d(W,{B:()=>U});var t=o(9808),e=o(6042),i=o(3640),s=o(3762),I=o(5017),v=o(5e3);let a=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({imports:[[t.ez,I.PV,s.Ph,e.sL]]}),c})(),U=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({imports:[[t.ez,e.sL,i.Qp,a]]}),c})()},7881:(de,W,o)=>{o.d(W,{L:()=>v});var t=o(5e3),e=o(9808),i=o(6699);function s(a,U){if(1&a&&t._UZ(0,"nz-avatar",2),2&a){const c=t.oxw();t.Q6J("nzSrc",c.user.profileImagePath)("nzShape",c.shape?c.shape:"circle")("nzSize",c.size)}}function I(a,U){if(1&a&&(t._UZ(0,"nz-avatar",3),t.ALo(1,"uppercase")),2&a){const c=t.oxw();t.Q6J("nzSize",c.size)("nzText",t.lcZ(1,2,c.user.displayName.charAt(0)))}}let v=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(c,_){if(1&c&&(t.YNc(0,s,1,3,"nz-avatar",0),t.YNc(1,I,2,4,"ng-template",null,1,t.W1O)),2&c){const C=t.MAs(2);t.Q6J("ngIf",_.user.profileImagePath)("ngIfElse",C)}},directives:[e.O5,i.Dz],pipes:[e.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(de,W,o)=>{o.d(W,{H:()=>s});var t=o(9808),e=o(6699),i=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(a){return new(a||I)},I.\u0275mod=i.oAB({type:I}),I.\u0275inj=i.cJS({imports:[[t.ez,e.Rt]]}),I})()},8926:(de,W,o)=>{o.d(W,{A:()=>i});var t=o(5e3),e=o(2313);let i=(()=>{class s{constructor(v){this.sanitizer=v}transform(v,a){if(!a||""==a)return v;const U=new RegExp(a,"gi"),c=v.match(U);if(!c)return v;let _=v.replace(U,`<span class='typeahead-match'>${c[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(_)}}return s.\u0275fac=function(v){return new(v||s)(t.Y36(e.H7,16))},s.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(de,W,o)=>{o.d(W,{s:()=>s});var t=o(9808),e=o(7742),i=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(a){return new(a||I)},I.\u0275mod=i.oAB({type:I}),I.\u0275inj=i.cJS({providers:[e.l],imports:[[t.ez]]}),I})()},7742:(de,W,o)=>{o.d(W,{l:()=>i});var t=o(6530),e=o(5e3);let i=(()=>{class s{transform(v){return v?(0,t.c)(v):""}}return s.\u0275fac=function(v){return new(v||s)},s.\u0275pipe=e.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(de,W,o)=>{o.d(W,{W:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(){}transform(I,v=25){if(I.length>v){let U=I.slice(0,v);var a=U.lastIndexOf(" ");return U.slice(0,a)+"\u2026"}return I}}return i.\u0275fac=function(I){return new(I||i)},i.\u0275pipe=t.Yjl({name:"truncate",type:i,pure:!0}),i})()},9350:(de,W,o)=>{o.d(W,{a:()=>_});var t=o(655),e=o(7630),i=o(4987),s=o(373),I=o(4850),v=o(1059),a=o(5154),U=o(5e3),c=o(520);let _=class{constructor(A,O){function K(T){return!(!T||T.role!==e.i44.Admin)}function N(T){return!(!T||T.role!==e.i44.Editor&&T.role!==e.i44.Admin)}function k(T){return!(!T||T.role!==e.i44.Curator)}function Y(T){return!(!T||T.role!==e.i44.Curator&&T.role!==e.i44.Editor&&T.role!==e.i44.Admin)}function w(T){var R,X;return!(!T||T.role!==e.i44.Editor&&T.role!==e.i44.Admin||!T.mostRecentConflictOfInterestStatement||(null===(R=T.mostRecentConflictOfInterestStatement)||void 0===R?void 0:R.coiStatus)!=e.Mgx.Conflict&&(null===(X=T.mostRecentConflictOfInterestStatement)||void 0===X?void 0:X.coiStatus)!=e.Mgx.Valid)}function Z(T){if(T.mostRecentOrganizationId)return T.organizations.find(R=>R.id===T.mostRecentOrganizationId)}this.viewerBaseGQL=A,this.http=O,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,I.U)(T=>Object.assign(Object.assign({},T),{signedIn:null!=T,signedOut:null==T,canCurate:Y(T),canModerate:w(T),isAdmin:K(T),isEditor:N(T),isCurator:k(T),organizations:null==T?[]:T.organizations,mostRecentOrg:null==T?void 0:Z(T),invalidCoi:N(T)&&(!T.mostRecentConflictOfInterestStatement||T.mostRecentConflictOfInterestStatement.coiStatus===e.Mgx.Expired||T.mostRecentConflictOfInterestStatement.coiStatus===e.Mgx.Missing)})),(0,v.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,I.U)(T=>T.signedIn)),this.signedOut$=this.viewer$.pipe((0,I.U)(T=>T.signedOut)),this.isAdmin$=this.viewer$.pipe((0,I.U)(T=>K(T))),this.isEditor$=this.viewer$.pipe((0,I.U)(T=>N(T))),this.isCurator$=this.viewer$.pipe((0,I.U)(T=>k(T))),this.canCurate$=this.viewer$.pipe((0,I.U)(T=>Y(T))),this.canModerate$=this.viewer$.pipe((0,I.U)(T=>w(T)))}signOut(){this.http.get("/api/sign_out").pipe((0,i.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};_.\u0275fac=function(A){return new(A||_)(U.LFG(e.Tt7),U.LFG(c.eN))},_.\u0275prov=U.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_=(0,t.gn)([(0,i.c)()],_)},6654:(de,W,o)=>{o.d(W,{a:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(I){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return i.\u0275fac=function(I){return new(I||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(I,v){},encapsulation:2}),i})()},915:(de,W,o)=>{function t(e){let i;if("NA"===e)i=["N/A"];else if("SENSITIVITYRESPONSE"===e)i=["Sensitivity","/","Response"];else{i=e.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<i.length;s++)i[s]=i[s].charAt(0).toUpperCase()+i[s].slice(1)}return i.join(" ")}o.d(W,{E:()=>t})},6530:(de,W,o)=>{function t(e){switch(e){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return e}}o.d(W,{c:()=>t})},6123:(de,W,o)=>{o.d(W,{U:()=>I});var t=o(8929),e=o(591),i=o(7625),s=o(537);class I{constructor(a){this.networkErrorService=a}mutate(a,U,c,_){let C=new t.xQ,A={isSubmitting$:new e.X(!1),submitSuccess$:new e.X(!1),submitError$:new e.X([]),cleanup:()=>{C.next(),C.complete()}};return A.isSubmitting$.next(!0),a.mutate(U,c).pipe((0,i.R)(C),(0,s.x)(()=>{A.isSubmitting$.next(!1)})).subscribe({next:O=>{O.data&&_&&_(O.data)},error:O=>{O.graphQLErrors.length>0?A.submitError$.next(O.graphQLErrors.map(K=>K.message)):O.networkError&&this.networkErrorService.networkError$.next(O.networkError),A.cleanup()},complete:()=>{A.submitError$.next([]),A.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),A.cleanup()}}),A}}},9397:(de,W,o)=>{o.d(W,{l:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(I){this.host=I,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return i.\u0275fac=function(I){return new(I||i)(t.Y36(t.SBq))},i.\u0275dir=t.lG2({type:i,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),i})()},8616:(de,W,o)=>{o.d(W,{Y:()=>i});var t=o(9808),e=o(5e3);let i=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez]]}),s})()},9180:(de,W,o)=>{o.d(W,{Z:()=>i});var t=o(5e3);const e=["*"];let i=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(v){return new(v||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:e,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(v,a){1&v&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(de,W,o)=>{o.d(W,{R:()=>i});var t=o(9808),e=o(5e3);let i=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez]]}),s})()},822:(de,W,o)=>{o.d(W,{V:()=>U});var t=o(5e3),e=o(9808),i=o(2359);function s(c,_){if(1&c&&t._UZ(0,"nz-alert",4),2&c){const C=t.oxw();t.Q6J("nzDescription",C.errors[0])}}function I(c,_){if(1&c&&t._UZ(0,"nz-alert",5),2&c){t.oxw();const C=t.MAs(3);t.Q6J("nzDescription",C)}}function v(c,_){if(1&c&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&c){const C=_.$implicit;t.xp6(1),t.Oqu(C)}}function a(c,_){if(1&c&&(t.TgZ(0,"ul",6),t.YNc(1,v,2,1,"li",7),t.qZA()),2&c){const C=t.oxw();t.xp6(1),t.Q6J("ngForOf",C.errors)}}let U=(()=>{class c{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return c.\u0275fac=function(C){return new(C||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(C,A){1&C&&(t.YNc(0,s,1,1,"nz-alert",0),t.YNc(1,I,1,1,"nz-alert",1),t.YNc(2,a,2,1,"ng-template",2,3,t.W1O)),2&C&&(t.Q6J("ngIf",1===A.errors.length),t.xp6(1),t.Q6J("ngIf",A.errors.length>1))},directives:[e.O5,i.r,e.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),c})()},7008:(de,W,o)=>{o.d(W,{B:()=>s});var t=o(9808),e=o(2359),i=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(a){return new(a||I)},I.\u0275mod=i.oAB({type:I}),I.\u0275inj=i.cJS({imports:[[t.ez,e.L]]}),I})()},6789:(de,W,o)=>{o.d(W,{_:()=>A});var t=o(9808),e=o(7484),i=o(1017),s=o(5482),I=o(6949),v=o(9552),a=o(8776),U=o(5017),c=o(404),_=o(5e3);let C=(()=>{class O{}return O.\u0275fac=function(N){return new(N||O)},O.\u0275mod=_.oAB({type:O}),O.\u0275inj=_.cJS({imports:[[t.ez,I.WG,a.X0,v.j,s.cD,U.PV,c.cg,i.s]]}),O})(),A=(()=>{class O{}return O.\u0275fac=function(N){return new(N||O)},O.\u0275mod=_.oAB({type:O}),O.\u0275inj=_.cJS({imports:[[t.ez,I.WG,a.X0,e.vh,v.j,s.cD,U.PV,c.cg,C,i.s]]}),O})()},1825:(de,W,o)=>{o.d(W,{A:()=>U});var t=o(9808),e=o(6042),i=o(6699),s=o(3677),I=o(8144),v=o(6949),a=o(5e3);let U=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[t.ez,v.WG,e.sL,i.Rt,s.b1,I.zf]]}),c})()},1793:(de,W,o)=>{o.d(W,{m:()=>a});var t=o(5e3),e=o(8929),i=o(5254),s=o(2198),I=o(4850),v=o(7625);let a=(()=>{class U{constructor(_){this.el=_,this.domChange=new t.vpe,this.destroy$=new e.xQ,this.changes=new MutationObserver(C=>{this.mutation$=(0,i.D)(C),this.disabledChange$=this.mutation$.pipe((0,s.h)(A=>"disabled"===A.attributeName),(0,I.U)(A=>({type:"disabled",change:A.target.disabled}))),this.disabledChange$.pipe((0,v.R)(this.destroy$)).subscribe(A=>{this.domChange.emit(A)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return U.\u0275fac=function(_){return new(_||U)(t.Y36(t.SBq))},U.\u0275dir=t.lG2({type:U,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),U})()},7905:(de,W,o)=>{o.d(W,{nT:()=>v,yQ:()=>s});var t=o(915),e=o(7630),i=o(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class v{constructor(U){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,i.o6)(e.uBv).map(c=>c):(0,i.o6)(e.kqt).map(c=>c),this.getSignificanceOptions=c=>{const _=this.validStates.get(c);return(null==_?void 0:_.clinicalSignificance)||[]},this.isValidSignificanceOption=(c,_)=>{const C=this.validStates.get(c);return!C||C.clinicalSignificance.includes(_)},this.getDirectionOptions=c=>{const _=this.validStates.get(c);return(null==_?void 0:_.entityDirection)||[]},this.isValidDirectionOption=(c,_)=>{const C=this.validStates.get(c);return!C||C.entityDirection.includes(_)},this.requiresDrug=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresDrug},this.requiresDisease=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresDisease},this.requiresAcmgCodes=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresAcmgCodes},this.requiresAmpLevel=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresAmpLevel},this.requiresClingenCodes=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresClingenCodes},this.allowsFdaApproval=c=>{const _=this.validStates.get(c);return void 0===_||_.allowsFdaApproval},this.getOptionsFromEnums=c=>0===c.length?[]:c.map(_=>({value:_,label:(0,t.E)(_)})),this.entityName=U,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(de,W,o)=>{o.d(W,{_:()=>i});var t=o(7630),e=o(7905);class i extends e.nT{constructor(){super(e.yQ.EVIDENCE),this.validStates.set(t.kqt.Predictive,{entityType:t.kqt.Predictive,clinicalSignificance:[t._Aq.Sensitivityresponse,t._Aq.Resistance,t._Aq.AdverseResponse,t._Aq.ReducedSensitivity,t._Aq.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Diagnostic,{entityType:t.kqt.Diagnostic,clinicalSignificance:[t._Aq.Positive,t._Aq.Negative],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Prognostic,{entityType:t.kqt.Prognostic,clinicalSignificance:[t._Aq.BetterOutcome,t._Aq.PoorOutcome,t._Aq.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Oncogenic,{entityType:t.kqt.Oncogenic,clinicalSignificance:[t._Aq.Oncogenicity,t._Aq.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Predisposing,{entityType:t.kqt.Predisposing,clinicalSignificance:[t._Aq.Predisposition,t._Aq.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Functional,{entityType:t.kqt.Functional,clinicalSignificance:[t._Aq.GainOfFunction,t._Aq.LossOfFunction,t._Aq.UnalteredFunction,t._Aq.Neomorphic,t._Aq.DominantNegative,t._Aq.Unknown],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(de,W,o)=>{o.d(W,{E:()=>K});var t=o(9808),e=o(3075),i=o(325),s=o(8776),I=o(304),v=o(6042),a=o(5e3),U=o(2643),c=o(2683);function _(N,k){if(1&N){const Y=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(Y),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function C(N,k){if(1&N&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&N){const Y=a.oxw();a.Q6J("routerLink",Y.redirectPath)}}const O={name:"cancel-button",component:(()=>{class N extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Y,w,Z,T;(null===(Y=this.field.templateOptions)||void 0===Y?void 0:Y.onClick)?this.callOnClick=null===(w=this.field.templateOptions)||void 0===w?void 0:w.onClick:(null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.redirectPath)&&(this.redirectPath=null===(T=this.field.templateOptions)||void 0===T?void 0:T.redirectPath)}}return N.\u0275fac=function(){let k;return function(w){return(k||(k=a.n5z(N)))(w||N)}}(),N.\u0275cmp=a.Xpm({type:N,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Y,w){if(1&Y&&(a.YNc(0,_,2,0,"button",0),a.YNc(1,C,2,1,"ng-template",null,1,a.W1O)),2&Y){const Z=a.MAs(2);a.Q6J("ngIf",w.callOnClick)("ngIfElse",Z)}},directives:[t.O5,v.ix,U.dQ,c.w,i.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),N})()};let K=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=a.oAB({type:N}),N.\u0275inj=a.cJS({imports:[[t.ez,e.u5,e.UX,v.sL,i.Bz,I.F,s.X0.forChild({types:[O]})]]}),N})()},4623:(de,W,o)=>{o.d(W,{K:()=>_});var t=o(9808),e=o(8776),i=o(5e3),s=o(1047),I=o(3075);const a={name:"comment-textarea",component:(()=>{class C extends e.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(O,K)=>{var N;return`Comments must be at least ${null===(N=K.templateOptions)||void 0===N?void 0:N.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return C.\u0275fac=function(){let A;return function(K){return(A||(A=i.n5z(C)))(K||C)}}(),C.\u0275cmp=i.Xpm({type:C,selectors:[["comment-textarea-type"]],features:[i.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(O,K){1&O&&i._UZ(0,"textarea",0),2&O&&i.Q6J("formControl",K.formControl)("formlyAttributes",K.field)},directives:[s.Zp,I.Fj,I.JJ,I.oH,e.VQ],styles:[""],changeDetection:0}),C})(),wrappers:["form-field"]};var U=o(4546),c=o(9139);let _=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=i.oAB({type:C}),C.\u0275inj=i.cJS({imports:[[t.ez,I.UX,e.X0.forChild({types:[a]}),c.u,U.U5,s.o7]]}),C})()},1605:(de,W,o)=>{o.d(W,{e:()=>Ae});var t=o(9808),e=o(3075),i=o(8776),s=o(3793),I=o(304),v=o(8054),a=o(5e3),U=o(1894),c=o(4546);let _=(()=>{class z{constructor(){console.log("FormCardDirective constructed.")}}return z.\u0275fac=function(D){return new(D||z)},z.\u0275dir=a.lG2({type:z,selectors:[["",8,"cvc-form-card-control"]]}),z})();var C=o(7484),A=o(404);function O(z,q){1&z&&a._UZ(0,"i",7)}function K(z,q){if(1&z&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,O,1,0,"i",6),a.qZA()),2&z){const D=a.oxw();a.Q6J("nzRequired",D.to.required&&!0!==D.to.hideRequiredMarker)("nzFor",D.id),a.xp6(1),a.hij(" ",D.to.label," "),a.xp6(1),a.Q6J("ngIf",D.to.helpText)}}function N(z,q){if(1&z&&a._UZ(0,"formly-validation-message",9),2&z){const D=a.oxw(2);a.Q6J("field",D.field)}}function k(z,q){if(1&z&&a.YNc(0,N,1,1,"formly-validation-message",8),2&z){const D=a.oxw();a.Q6J("ngIf",D.showError)}}let Y=(()=>{class z extends i.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return z.\u0275fac=function(D){return new(D||z)},z.\u0275cmp=a.Xpm({type:z,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(D,ce){if(1&D&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,K,3,4,"ng-template",null,3,a.W1O),a.YNc(7,k,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&D){const Ce=a.MAs(6),Se=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",ce.errorState)("nzErrorTip",Se),a.xp6(1),a.Q6J("nzTitle",Ce)("nzExtra",Se)}},directives:[U.SK,c.Nx,U.t3,c.Fd,_,C.bd,c.iK,t.O5,A.SY,i.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),z})();var w=o(5017),Z=o(1017);const T={wrappers:[{name:"form-card",component:Y}]};let R=(()=>{class z{}return z.\u0275fac=function(D){return new(D||z)},z.\u0275mod=a.oAB({type:z}),z.\u0275inj=a.cJS({imports:[[t.ez,e.UX,c.U5,C.vh,w.PV,A.cg,i.X0.forChild(T),Z.s]]}),z})();var X=o(655),b=o(373),F=o(2198),g=o(4850),B=o(3240),G=o(4987),x=o(7630),L=o(9397),l=o(6949),P=o(8144),$=o(3618),y=o(3193),H=o(8926);function ie(z,q){if(1&z&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&z){const D=a.oxw().$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.label,ce.to.searchString),a.oJD)}}function ue(z,q){if(1&z&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&z){const D=a.oxw(2).$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.gene.geneAliases.join(", "),ce.to.searchString),a.oJD)}}function he(z,q){1&z&&(a.ynx(0),a.YNc(1,ue,2,4,"span",11),a.BQk())}function ze(z,q){if(1&z&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,ie,2,4,"span",8),a.YNc(3,he,2,0,"ng-container",9),a.qZA()()),2&z){const D=q.$implicit;a.Q6J("nzLabel",D.tooltip)("nzValue",D.gene),a.xp6(3),a.Q6J("ngIf",D.gene.geneAliases.length>0)}}function De(z,q){if(1&z&&(a.ynx(0),a.YNc(1,ze,4,3,"nz-option",6),a.BQk()),2&z){const D=q.ngrxLet;a.xp6(1),a.Q6J("ngForOf",D)}}function te(z,q){1&z&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function pe(z,q){if(1&z){const D=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Ce){return a.CHM(D),a.oxw().to.onSearch(Ce)}),a.YNc(3,De,2,1,"ng-container",4),a.qZA(),a.YNc(4,te,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&z){const D=a.MAs(5),ce=a.oxw();a.xp6(1),a.Q6J("formControl",ce.formControl)("formlyAttributes",ce.field)("nzPlaceHolder",ce.to.placeholder?ce.to.placeholder:null)("nzNotFoundContent",D)("nzShowArrow",ce.to.showArrow)("nzFilterOption",ce.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",ce.genes$)}}function E(z,q){if(1&z&&a._UZ(0,"cvc-gene-tag",13),2&z){const D=a.oxw();a.Q6J("gene",D.formControl.value)}}let ne=class extends i.fS{constructor(q){super(),this.geneTypeaheadQuery=q,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,b.j)("data","geneTypeahead"),(0,F.h)(B.ep),(0,g.U)(q=>q.map(D=>{let ce=D.geneAliases.length>0?`Aliases: ${D.geneAliases.join(", ")}`:"";return{value:D.id,tooltip:`${D.name} (${D.entrezId}) ${ce}`,label:`${D.name} (${D.entrezId})`,gene:D}})))}ngAfterViewInit(){this.to.onSearch=q=>{q.length<this.to.minLengthSearch||(this.to.searchString=q,this.queryRef.refetch({entrezSymbol:q}))}}};ne.\u0275fac=function(q){return new(q||ne)(a.Y36(x.Q4m))},ne.\u0275cmp=a.Xpm({type:ne,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(q,D){if(1&q&&(a.YNc(0,pe,6,7,"ng-container",0),a.YNc(1,E,1,1,"ng-template",null,1,a.W1O)),2&q){const ce=a.MAs(2);a.Q6J("ngIf",!(null!=D.formControl.value&&D.formControl.value.id))("ngIfElse",ce)}},directives:[t.O5,v.Vq,L.l,e.JJ,e.oH,i.VQ,l.eJ,t.sg,v.Ip,P.NU,P.$1,$.ZU,y.H],pipes:[H.A],styles:[""]}),ne=(0,X.gn)([(0,G.c)()],ne);const Q={name:"cvc-gene-input",component:ne};var se=o(3309),ee=o(6905),ge=o(8616);let _e=(()=>{class z{}return z.\u0275fac=function(D){return new(D||z)},z.\u0275mod=a.oAB({type:z}),z.\u0275inj=a.cJS({imports:[[t.ez,e.UX,l.WG,i.X0.forChild({types:[Q]}),v.LV,P.zf,$.ZJ,se.U,ee.s,ge.Y]]}),z})();var Te=o(8390);const Ie={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ae=(()=>{class z{}return z.\u0275fac=function(D){return new(D||z)},z.\u0275mod=a.oAB({type:z}),z.\u0275inj=a.cJS({imports:[[t.ez,e.u5,e.UX,v.LV,I.F,s.F,i.X0.forChild({types:[Ie]}),_e,Te.N,R]]}),z})()},8390:(de,W,o)=>{o.d(W,{N:()=>G});var t=o(9808),e=o(3075),i=o(8776),s=o(4546),I=o(1047),v=o(5017),a=o(5e3),U=o(1894),c=o(8481),_=o(2683),C=o(6042),A=o(2643);function O(x,L){if(1&x){const l=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function($){return a.CHM(l),a.oxw().addField($)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&x){const l=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",l.errorState),a.xp6(3),a.hij(" ",l.to.addText," ")}}function K(x,L){if(1&x){const l=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function($){return a.CHM(l),a.oxw(4).addField($)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&x){const l=a.oxw(4);a.xp6(2),a.hij(" ",l.to.addText," ")}}function N(x,L){if(1&x&&(a.TgZ(0,"div",11),a.YNc(1,K,3,1,"nz-tag",12),a.qZA()),2&x){const l=a.oxw(2).$implicit,P=a.oxw();a.xp6(1),a.Q6J("ngIf",0==P.to.maxCount||P.to.maxCount>l.model.length)}}function k(x,L){if(1&x){const l=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(l);const $=a.oxw().index;return a.oxw().remove($)}),a.qZA()(),a.YNc(3,N,2,1,"div",10),a.BQk()}if(2&x){const l=a.oxw().last;a.xp6(3),a.Q6J("ngIf",l)}}function Y(x,L){if(1&x){const l=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(l);const $=a.oxw().index;return a.oxw().remove($)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function w(x,L){if(1&x&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,k,4,1,"ng-container",1),a.YNc(5,Y,4,0,"ng-container",1),a.qZA()()),2&x){const l=L.$implicit,P=L.index;a.xp6(2),a.Q6J("ngClass",l.model[P]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",l),a.xp6(1),a.Q6J("ngIf",l.model[P]),a.xp6(1),a.Q6J("ngIf",!l.model[P])}}const Z=function(x){return{hidden:x}},R={name:"multi-field",component:(()=>{class x extends i.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(l){l&&l.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return x.\u0275fac=function(l){return new(l||x)},x.\u0275cmp=a.Xpm({type:x,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(l,P){1&l&&(a.TgZ(0,"div",0),a.YNc(1,O,5,2,"nz-form-item",1),a.YNc(2,w,6,4,"nz-form-item",2),a.qZA()),2&l&&(a.Q6J("ngClass",a.VKq(3,Z,!0===P.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==P.field.fieldGroup?null:P.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",P.field.fieldGroup))},directives:[t.mk,t.O5,U.SK,s.Nx,U.t3,s.Fd,c.j,v.Ls,_.w,t.sg,i.cw,C.ix,A.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),x})()};function X(x,L){if(1&x&&a._UZ(0,"formly-validation-message",3),2&x){const l=a.oxw();a.Q6J("field",l.field)}}const F={name:"cvc-field-errors",component:(()=>{class x extends i.n2{get errorState(){return this.showError?"error":""}}return x.\u0275fac=function(){let L;return function(P){return(L||(L=a.n5z(x)))(P||x)}}(),x.\u0275cmp=a.Xpm({type:x,selectors:[["cvc-field-errors-wrapper"]],features:[a.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(l,P){if(1&l&&(a.TgZ(0,"nz-form-control",0)(1,"p"),a._uU(2),a.qZA(),a.GkF(3,null,1),a.YNc(5,X,1,1,"ng-template",null,2,a.W1O),a.qZA()),2&l){const $=a.MAs(6);a.Q6J("nzValidateStatus",P.errorState)("nzErrorTip",$),a.xp6(2),a.hij("errorState: ",P.errorState,"")}},directives:[U.t3,s.Fd,i.u_],encapsulation:2,changeDetection:0}),x})()};let g=(()=>{class x{}return x.\u0275fac=function(l){return new(l||x)},x.\u0275mod=a.oAB({type:x}),x.\u0275inj=a.cJS({imports:[[t.ez,e.UX,s.U5,i.X0.forChild({wrappers:[F]})]]}),x})();var B=o(1017);let G=(()=>{class x{}return x.\u0275fac=function(l){return new(l||x)},x.\u0275mod=a.oAB({type:x}),x.\u0275inj=a.cJS({imports:[[t.ez,e.u5,i.X0.forChild({types:[R]}),e.UX,g,s.U5,I.o7,v.PV,C.sL,B.s,c.X]]}),x})()},7462:(de,W,o)=>{o.d(W,{o:()=>U});var t=o(9808),e=o(8776),i=o(5e3),s=o(1047),I=o(3075);const a={name:"cvc-textarea",component:(()=>{class c extends e.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return c.\u0275fac=function(){let _;return function(A){return(_||(_=i.n5z(c)))(A||c)}}(),c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-textarea-base-type"]],features:[i.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(C,A){1&C&&i._UZ(0,"textarea",0),2&C&&i.Q6J("formControl",A.formControl)("formlyAttributes",A.field)("nzAutosize",A.to.autosize)("placeholder",A.to.placeholder)},directives:[s.Zp,I.Fj,s.rh,I.JJ,I.oH,e.VQ],styles:[""],changeDetection:0}),c})(),wrappers:["form-field"]};let U=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=i.oAB({type:c}),c.\u0275inj=i.cJS({imports:[[t.ez,I.u5,I.UX,e.X0.forChild({types:[a]}),s.o7]]}),c})()},5472:(de,W,o)=>{o.d(W,{r:()=>A});var t=o(9808),e=o(6949),i=o(8776),s=o(7484),I=o(5482),v=o(1894),a=o(1017),U=o(6789),c=o(5e3);const C={wrappers:[{name:"form-container",component:(()=>{class O extends i.n2{}return O.\u0275fac=function(){let K;return function(k){return(K||(K=c.n5z(O)))(k||O)}}(),O.\u0275cmp=c.Xpm({type:O,selectors:[["cvc-form-container-wrapper"]],features:[c.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(N,k){1&N&&(c.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),c.GkF(3,null,2),c.qZA()()()),2&N&&(c.xp6(2),c.Q6J("nzTitle",k.to.label))},directives:[v.SK,v.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),O})()}]};let A=(()=>{class O{}return O.\u0275fac=function(N){return new(N||O)},O.\u0275mod=c.oAB({type:O}),O.\u0275inj=c.cJS({imports:[[t.ez,e.WG,i.X0.forChild(C),v.Jb,s.vh,I.cD,U._,a.s]]}),O})()},7695:(de,W,o)=>{o.d(W,{C:()=>F});var t=o(9808),e=o(6949),i=o(8776),s=o(7484),I=o(5482),v=o(1894),a=o(1017),U=o(6789),c=o(5e3),_=o(9552),C=o(5017),A=o(404);function O(g,B){1&g&&c._UZ(0,"div",9),2&g&&c.Q6J("innerHtml",B.ngIf,c.oJD)}function K(g,B){1&g&&(c.TgZ(0,"div",10),c._uU(1,"Help not available for this field."),c.qZA())}function N(g,B){if(1&g&&(c.TgZ(0,"nz-collapse-panel",6),c.YNc(1,O,1,1,"div",7),c.YNc(2,K,2,0,"ng-template",null,8,c.W1O),c.qZA()),2&g){const G=B.ngIf,x=c.MAs(3),L=c.oxw().$implicit,l=c.MAs(3);c.Q6J("nzHeader",G)("nzActive",L.templateOptions.hasFocus)("nzExtra",l),c.xp6(1),c.Q6J("ngIf",null==L.templateOptions?null:L.templateOptions.helpText)("ngIfElse",x)}}function k(g,B){if(1&g&&c._UZ(0,"formly-validation-message",14),2&g){const G=c.oxw(4).$implicit;c.Q6J("field",G)}}function Y(g,B){if(1&g&&(c.ynx(0),c._UZ(1,"i",12),c.YNc(2,k,1,1,"ng-template",null,13,c.W1O),c.BQk()),2&g){const G=c.MAs(3);c.xp6(1),c.Q6J("nzTooltipTitle",G)}}function w(g,B){if(1&g&&(c.ynx(0),c.YNc(1,Y,4,1,"ng-container",11),c.BQk()),2&g){const G=B.ngIf;c.xp6(1),c.Q6J("ngIf","INVALID"===G)}}function Z(g,B){if(1&g&&(c.YNc(0,w,2,1,"ng-container",11),c.ALo(1,"ngrxPush")),2&g){const G=c.oxw().$implicit;c.Q6J("ngIf",c.lcZ(1,1,G.formControl.statusChanges))}}function T(g,B){if(1&g&&(c.ynx(0),c.YNc(1,N,4,5,"nz-collapse-panel",4),c.YNc(2,Z,2,3,"ng-template",null,5,c.W1O),c.BQk()),2&g){const G=B.$implicit;c.xp6(1),c.Q6J("ngIf",null==G.templateOptions?null:G.templateOptions.label)}}let R=(()=>{class g{constructor(){}ngOnInit(){}}return g.\u0275fac=function(G){return new(G||g)},g.\u0275cmp=c.Xpm({type:g,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(G,x){1&G&&(c.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),c.YNc(3,T,4,1,"ng-container",3),c.qZA()()()),2&G&&(c.Q6J("nzOffsetTop",0)("nzTarget",x.affixTo),c.xp6(2),c.Q6J("nzBordered",!1),c.xp6(1),c.Q6J("ngForOf",x.fieldGroup))},directives:[_.$,s.bd,I.yH,t.sg,t.O5,I.Zv,C.Ls,A.SY,i.u_],pipes:[e.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),g})();const b={name:"form-info",component:(()=>{class g extends i.n2{}return g.\u0275fac=function(){let B;return function(x){return(B||(B=c.n5z(g)))(x||g)}}(),g.\u0275cmp=c.Xpm({type:g,selectors:[["cvc-form-info-wrapper"]],features:[c.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(G,x){if(1&G&&(c.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),c.GkF(3,null,3),c.qZA()(),c.TgZ(5,"nz-col",1)(6,"div",null,4),c._UZ(8,"cvc-form-info-card",5),c.qZA()()()),2&G){const L=c.MAs(7);c.xp6(1),c.Q6J("nzSpan",16),c.xp6(1),c.Q6J("nzTitle",x.to.label),c.xp6(3),c.Q6J("nzSpan",8),c.xp6(3),c.Q6J("fieldGroup",x.field.fieldGroup)("affixTo",L)}},directives:[v.SK,v.t3,s.bd,R],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),g})()};let F=(()=>{class g{}return g.\u0275fac=function(G){return new(G||g)},g.\u0275mod=c.oAB({type:g}),g.\u0275inj=c.cJS({imports:[[t.ez,e.WG,i.X0.forChild({wrappers:[b]}),v.Jb,s.vh,I.cD,U._,a.s]]}),g})()},8785:(de,W,o)=>{o.d(W,{t:()=>X});var t=o(5e3),e=o(6123),i=o(8929),s=o(7625),I=o(7630),v=o(9169),a=o(7484),U=o(9808),c=o(2359),_=o(1894),C=o(4546),A=o(822),O=o(7525),K=o(3868),N=o(3075),k=o(6042),Y=o(2643),w=o(2683);function Z(b,F){1&b&&t._UZ(0,"nz-alert",7)}function T(b,F){if(1&b&&(t.TgZ(0,"nz-form-item"),t._UZ(1,"cvc-form-errors-alert",8),t.qZA()),2&b){const g=t.oxw();t.xp6(1),t.Q6J("errors",g.errorMessages)}}function R(b,F){if(1&b){const g=t.EpF();t.TgZ(0,"nz-form-item")(1,"textarea",9),t.NdJ("ngModelChange",function(G){return t.CHM(g),t.oxw().coiText=G}),t.qZA()()}if(2&b){const g=t.oxw();t.xp6(1),t.Q6J("ngModel",g.coiText)}}let X=(()=>{class b{constructor(g,B){this.updateCoiGql=g,this.coiUpdatedEvent=new t.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new i.xQ,this.updateCoiMutator=new e.U(B)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let B=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});B.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(G=>{G&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),B.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(G=>{G&&(this.errorMessages=G,this.success=!1)}),B.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(G=>{this.loading=G})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(g){return new(g||b)(t.Y36(I.IP1),t.Y36(v.Y))},b.\u0275cmp=t.Xpm({type:b,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(g,B){1&g&&(t.TgZ(0,"nz-card"),t.YNc(1,Z,1,0,"nz-alert",0),t.YNc(2,T,2,1,"nz-form-item",1),t.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),t.NdJ("ngModelChange",function(x){return B.coiStatus=x}),t.TgZ(6,"label",4),t._uU(7,"I do not have any potential conflicts of interest."),t.qZA(),t.TgZ(8,"label",5),t._uU(9,"I do have a potential conflict of interest."),t.qZA()()(),t.YNc(10,R,2,1,"nz-form-item",1),t.TgZ(11,"nz-form-item")(12,"button",6),t.NdJ("click",function(){return B.updateCoi()}),t._uU(13," Save Conflict of Interest Statement "),t.qZA()()()()),2&g&&(t.xp6(1),t.Q6J("ngIf",B.success),t.xp6(1),t.Q6J("ngIf",B.errorMessages.length>0),t.xp6(1),t.Q6J("nzSpinning",B.loading),t.xp6(2),t.Q6J("ngModel",B.coiStatus),t.xp6(5),t.Q6J("ngIf","coiPresent"===B.coiStatus),t.xp6(2),t.Q6J("disabled",B.loading||"coiPresent"===B.coiStatus&&(void 0===B.coiText||B.coiText.length<10)))},directives:[a.bd,U.O5,c.r,_.SK,C.Nx,A.V,O.W,K.Dg,N.JJ,N.On,K.Of,N.Fj,k.ix,Y.dQ,w.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),b})()},330:(de,W,o)=>{o.d(W,{e:()=>A});var t=o(9808),e=o(3075),i=o(6949),s=o(7484),I=o(2359),v=o(4546),a=o(7008),U=o(3868),c=o(7525),_=o(6042),C=o(5e3);let A=(()=>{class O{}return O.\u0275fac=function(N){return new(N||O)},O.\u0275mod=C.oAB({type:O}),O.\u0275inj=C.cJS({imports:[[t.ez,e.u5,v.U5,e.UX,i.WG,s.vh,I.L,U.aF,_.sL,c.j,a.B]]}),O})()},3434:(de,W,o)=>{o.d(W,{G:()=>X});var t=o(3075),e=o(8929),i=o(4024),s=o(6123),I=o(7625),v=o(5e3),a=o(7630),U=o(9169),c=o(325),_=o(7525),C=o(4546),A=o(9808),O=o(8776),K=o(1894),N=o(822),k=o(2359);function Y(b,F){1&b&&v.GkF(0)}function w(b,F){if(1&b&&(v.TgZ(0,"nz-form-item"),v._UZ(1,"cvc-form-errors-alert",6),v.qZA()),2&b){const g=v.oxw(2);v.xp6(1),v.Q6J("errors",g.errorMessages)}}function Z(b,F){if(1&b&&(v.TgZ(0,"p"),v._uU(1,"View "),v.TgZ(2,"a",10),v._uU(3,"its details"),v.qZA(),v._uU(4,"."),v.qZA()),2&b){const g=v.oxw(3);v.xp6(2),v.MGl("routerLink","/variants/",g.newId,"/summary")}}function T(b,F){if(1&b&&(v.ynx(0),v._UZ(1,"nz-alert",7),v.YNc(2,Z,5,1,"ng-template",8,9,v.W1O),v.BQk()),2&b){const g=v.MAs(3),B=v.oxw(2);v.xp6(1),v.Q6J("nzMessage",B.isNew?"Variant Created":"Variant Already Exists")("nzDescription",g)}}function R(b,F){if(1&b&&(v.YNc(0,w,2,1,"nz-form-item",5),v.YNc(1,T,4,2,"ng-container",5)),2&b){const g=v.oxw();v.Q6J("ngIf",g.errorMessages.length>0),v.xp6(1),v.Q6J("ngIf",g.success)}}let X=(()=>{class b{constructor(g,B,G){this.submitVariantGQL=g,this.networkErrorService=B,this.route=G,this.destroy$=new e.xQ,this.formGroup=new t.cw({}),this.formOptions={formState:new i._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(B),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(g){let B=null==g?void 0:g.fields.gene[0].id,G=null==g?void 0:g.fields.variant;if(B&&G){let L=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:B,name:G},{},l=>{this.newId=l.addVariant.variant.id,this.isNew=l.addVariant.new});L.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(l=>{l&&(this.success=!0)}),L.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(l=>{l&&(this.errorMessages=l,this.success=!1)}),L.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(l=>{this.loading=l})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(g){return new(g||b)(v.Y36(a.LUc),v.Y36(U.Y),v.Y36(c.gz))},b.\u0275cmp=v.Xpm({type:b,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(g,B){if(1&g&&(v.TgZ(0,"nz-spin",0)(1,"form",1),v.NdJ("ngSubmit",function(){return B.submitVariant(B.formModel)}),v.YNc(2,Y,1,0,"ng-container",2),v.TgZ(3,"formly-form",3),v.NdJ("modelChange",function(x){return B.formModel=x}),v.qZA()()(),v.YNc(4,R,2,2,"ng-template",null,4,v.W1O)),2&g){const G=v.MAs(5);v.Q6J("nzSpinning",B.loading),v.xp6(1),v.Q6J("formGroup",B.formGroup),v.xp6(1),v.Q6J("ngTemplateOutlet",G),v.xp6(1),v.Q6J("form",B.formGroup)("fields",B.formFields)("model",B.formModel)("options",B.formOptions)}},directives:[_.W,t._Y,t.JL,C.Lr,t.sg,A.tP,O.T7,A.O5,K.SK,C.Nx,N.V,k.r,c.yS],styles:[""]}),b})()},7058:(de,W,o)=>{o.d(W,{e:()=>$});var t=o(9808),e=o(4623),i=o(4375),s=o(7008),I=o(7695),v=o(8390),a=o(7462),U=o(8776),c=o(1017),_=o(2359),C=o(6042),A=o(4546),O=o(1894),K=o(3075),N=o(325),k=o(1605),Y=o(7525),w=o(5472),Z=o(4889),T=o(7484),R=o(8144),X=o(3618),b=o(5e3),F=o(9180),g=o(2643),B=o(1793),G=o(2683);const L={name:"submit-button",component:(()=>{class y extends U.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return y.\u0275fac=function(ie){return new(ie||y)},y.\u0275cmp=b.Xpm({type:y,selectors:[["cvc-submit-button-type"]],features:[b.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(ie,ue){1&ie&&(b.TgZ(0,"cvc-form-buttons")(1,"button",0),b._uU(2),b.qZA()()),2&ie&&(b.xp6(1),b.Q6J("disabled",!ue.form.valid),b.xp6(1),b.hij(" ",ue.to.submitLabel," "))},directives:[F.Z,C.ix,g.dQ,B.m,G.w],styles:[""],changeDetection:0}),y})()};var l=o(1825);let P=(()=>{class y{}return y.\u0275fac=function(ie){return new(ie||y)},y.\u0275mod=b.oAB({type:y}),y.\u0275inj=b.cJS({imports:[[t.ez,K.UX,U.X0.forChild({types:[L]}),C.sL,i.R,l.A]]}),y})(),$=(()=>{class y{}return y.\u0275fac=function(ie){return new(ie||y)},y.\u0275mod=b.oAB({type:y}),y.\u0275inj=b.cJS({imports:[[t.ez,N.Bz,K.UX,c.s,A.U5,_.L,O.Jb,C.sL,Y.j,T.vh,R.zf,X.ZJ,U.X0,s.B,i.R,I.C,v.N,a.o,e.K,k.e,w.r,Z.E,P,c.s]]}),y})()},7630:(de,W,o)=>{o.d(W,{$G1:()=>Go,A4J:()=>Bn,A94:()=>ir,AO2:()=>Y,B0s:()=>Ni,B97:()=>Sn,BQZ:()=>B,BTF:()=>nn,Bk6:()=>Rr,BnY:()=>Ci,Bo4:()=>is,Cp0:()=>X,D9L:()=>Ri,Del:()=>Nr,E8d:()=>_,EwB:()=>xi,F3s:()=>te,FB1:()=>Te,FId:()=>Oi,FJi:()=>ue,FKQ:()=>ni,FOU:()=>Fi,Fvz:()=>x,GB2:()=>gr,GYx:()=>Ro,Gbq:()=>d,Hmr:()=>po,IP1:()=>wi,IRu:()=>ge,IZ6:()=>kn,JDX:()=>ie,JQ3:()=>ci,KNk:()=>Yo,Kk:()=>Yt,Kmw:()=>To,L5n:()=>$n,LLl:()=>Mo,LUc:()=>zi,LiH:()=>Yr,Lr0:()=>Mr,MYm:()=>Un,Mgx:()=>C,NQC:()=>H,NbY:()=>gi,OHm:()=>In,OIL:()=>un,OfU:()=>A,P_b:()=>ot,Q4m:()=>Xo,Q_P:()=>Ti,Qtd:()=>Hr,Qzn:()=>Pn,R8w:()=>K,RMv:()=>pi,ROj:()=>Hi,RTy:()=>b,Rdc:()=>zo,SJD:()=>at,SWk:()=>Gi,SrV:()=>ze,Sx0:()=>R,T97:()=>jo,TNk:()=>Tr,TiL:()=>Kn,Tq1:()=>jt,Tt7:()=>Co,UIR:()=>Ne,UWf:()=>Zn,Ud2:()=>Xt,VZq:()=>An,Vj7:()=>Di,Vr2:()=>I,WFw:()=>Mi,WGV:()=>xr,WOS:()=>Or,WRV:()=>Jn,X5f:()=>_n,Xft:()=>nr,YMi:()=>en,Ybm:()=>rn,ZYZ:()=>go,Zhw:()=>Ho,Zo2:()=>oo,Zyn:()=>N,_Aq:()=>Z,_eC:()=>vi,_jb:()=>Vn,aw3:()=>ji,bgg:()=>Do,c$m:()=>Oo,cCu:()=>Dr,cEv:()=>qn,cMj:()=>cr,d4o:()=>Oe,dUU:()=>Ht,db2:()=>Fr,dwB:()=>vr,eY8:()=>an,ejK:()=>sr,fow:()=>P,fpJ:()=>si,fwG:()=>lo,g0X:()=>Gr,ghc:()=>hn,gtM:()=>di,h01:()=>O,huM:()=>Ie,i44:()=>ee,iGM:()=>No,iJT:()=>ns,iST:()=>wt,iXf:()=>qe,io:()=>yn,iwm:()=>i,jMx:()=>jr,jw9:()=>pe,k2T:()=>ii,k7O:()=>Wt,kQf:()=>bn,kQl:()=>E,kq9:()=>k,kqt:()=>g,kv3:()=>wo,l4w:()=>Wi,lYz:()=>y,lfy:()=>ei,m$d:()=>Wr,m55:()=>F,mII:()=>xo,mdl:()=>v,mpB:()=>se,nnL:()=>er,o71:()=>Q,oRL:()=>l,otH:()=>Ln,pHu:()=>zr,pP7:()=>z,q1D:()=>Xr,q8c:()=>fn,qP7:()=>_e,qf4:()=>ro,rJ8:()=>mn,rZD:()=>he,rzy:()=>ln,sBY:()=>Cr,sLD:()=>Qr,sfv:()=>G,tI1:()=>T,tJ6:()=>to,td:()=>re,ti:()=>En,tji:()=>Xi,tw_:()=>ao,u4i:()=>a,uBv:()=>U,ubO:()=>es,vMt:()=>Fo,vRc:()=>Wo,wJ2:()=>w,wRZ:()=>Qi,wbP:()=>Yi,wg3:()=>pr,wpb:()=>Ae,xlL:()=>$,xsC:()=>Qo,yic:()=>De,yqR:()=>wr,z8D:()=>dr,zwS:()=>vo});var t=o(9444),e=o(5e3),i=(()=>{return(n=i||(i={})).Na="NA",n.TierIii="TIER_III",n.TierIiLevelC="TIER_II_LEVEL_C",n.TierIiLevelD="TIER_II_LEVEL_D",n.TierIv="TIER_IV",n.TierILevelA="TIER_I_LEVEL_A",n.TierILevelB="TIER_I_LEVEL_B",i;var n})(),I=(()=>{return(n=I||(I={})).AdverseResponse="ADVERSE_RESPONSE",n.Benign="BENIGN",n.BetterOutcome="BETTER_OUTCOME",n.LikelyBenign="LIKELY_BENIGN",n.LikelyOncogenic="LIKELY_ONCOGENIC",n.LikelyPathogenic="LIKELY_PATHOGENIC",n.Na="NA",n.Negative="NEGATIVE",n.Oncogenic="ONCOGENIC",n.Pathogenic="PATHOGENIC",n.PoorOutcome="POOR_OUTCOME",n.Positive="POSITIVE",n.ReducedSensitivity="REDUCED_SENSITIVITY",n.Resistance="RESISTANCE",n.Sensitivityresponse="SENSITIVITYRESPONSE",n.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",I;var n})(),v=(()=>{return(n=v||(v={})).DoesNotSupport="DOES_NOT_SUPPORT",n.Supports="SUPPORTS",v;var n})(),a=(()=>{return(n=a||(a={})).AmpLevel="AMP_LEVEL",n.AssertionDirection="ASSERTION_DIRECTION",n.AssertionType="ASSERTION_TYPE",n.ClinicalSignificance="CLINICAL_SIGNIFICANCE",n.DiseaseName="DISEASE_NAME",n.DrugName="DRUG_NAME",n.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",n.GeneName="GENE_NAME",n.Id="ID",n.Status="STATUS",n.Summary="SUMMARY",n.VariantName="VARIANT_NAME",a;var n})(),U=(()=>{return(n=U||(U={})).Diagnostic="DIAGNOSTIC",n.Oncogenic="ONCOGENIC",n.Predictive="PREDICTIVE",n.Predisposing="PREDISPOSING",n.Prognostic="PROGNOSTIC",U;var n})(),_=(()=>{return(n=_||(_={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.Name="NAME",n.NctId="NCT_ID",n.SourceCount="SOURCE_COUNT",_;var n})(),C=(()=>{return(n=C||(C={})).Conflict="CONFLICT",n.Expired="EXPIRED",n.Missing="MISSING",n.Valid="VALID",C;var n})(),A=(()=>{return(n=A||(A={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Source="SOURCE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",A;var n})(),O=(()=>{return(n=O||(O={})).Created="CREATED",n.LastModified="LAST_MODIFIED",O;var n})(),K=(()=>{return(n=K||(K={})).AssertionCount="ASSERTION_COUNT",n.Doid="DOID",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.GeneCount="GENE_COUNT",n.Name="NAME",n.VariantCount="VARIANT_COUNT",K;var n})(),N=(()=>{return(n=N||(N={})).Combination="COMBINATION",n.Sequential="SEQUENTIAL",n.Substitutes="SUBSTITUTES",N;var n})(),k=(()=>{return(n=k||(k={})).AssertionCount="ASSERTION_COUNT",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.Name="NAME",n.NcitId="NCIT_ID",k;var n})(),Y=(()=>{return(n=Y||(Y={})).Accepted="ACCEPTED",n.AssertionAccepted="ASSERTION_ACCEPTED",n.AssertionRejected="ASSERTION_REJECTED",n.AssertionReverted="ASSERTION_REVERTED",n.AssertionSubmitted="ASSERTION_SUBMITTED",n.Commented="COMMENTED",n.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",n.Flagged="FLAGGED",n.FlagResolved="FLAG_RESOLVED",n.PublicationSuggested="PUBLICATION_SUGGESTED",n.Rejected="REJECTED",n.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",n.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",n.Reverted="REVERTED",n.RevisionAccepted="REVISION_ACCEPTED",n.RevisionRejected="REVISION_REJECTED",n.RevisionSuggested="REVISION_SUGGESTED",n.RevisionSuperseded="REVISION_SUPERSEDED",n.Submitted="SUBMITTED",Y;var n})(),w=(()=>{return(n=w||(w={})).Organization="ORGANIZATION",n.Subject="SUBJECT",n.Unscoped="UNSCOPED",n.User="USER",w;var n})(),Z=(()=>{return(n=Z||(Z={})).AdverseResponse="ADVERSE_RESPONSE",n.Benign="BENIGN",n.BetterOutcome="BETTER_OUTCOME",n.DominantNegative="DOMINANT_NEGATIVE",n.GainOfFunction="GAIN_OF_FUNCTION",n.LikelyBenign="LIKELY_BENIGN",n.LikelyPathogenic="LIKELY_PATHOGENIC",n.LossOfFunction="LOSS_OF_FUNCTION",n.Na="NA",n.Negative="NEGATIVE",n.Neomorphic="NEOMORPHIC",n.Oncogenicity="ONCOGENICITY",n.Pathogenic="PATHOGENIC",n.PoorOutcome="POOR_OUTCOME",n.Positive="POSITIVE",n.Predisposition="PREDISPOSITION",n.Protectiveness="PROTECTIVENESS",n.ReducedSensitivity="REDUCED_SENSITIVITY",n.Resistance="RESISTANCE",n.Sensitivityresponse="SENSITIVITYRESPONSE",n.UnalteredFunction="UNALTERED_FUNCTION",n.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",n.Unknown="UNKNOWN",Z;var n})(),T=(()=>{return(n=T||(T={})).DoesNotSupport="DOES_NOT_SUPPORT",n.Na="NA",n.Supports="SUPPORTS",T;var n})(),R=(()=>{return(n=R||(R={})).A="A",n.B="B",n.C="C",n.D="D",n.E="E",R;var n})(),X=(()=>{return(n=X||(X={})).ClinicalSignificance="CLINICAL_SIGNIFICANCE",n.Description="DESCRIPTION",n.DiseaseName="DISEASE_NAME",n.DrugName="DRUG_NAME",n.EvidenceDirection="EVIDENCE_DIRECTION",n.EvidenceLevel="EVIDENCE_LEVEL",n.EvidenceRating="EVIDENCE_RATING",n.EvidenceType="EVIDENCE_TYPE",n.GeneSymbol="GENE_SYMBOL",n.Id="ID",n.Status="STATUS",n.VariantName="VARIANT_NAME",n.VariantOrigin="VARIANT_ORIGIN",X;var n})(),b=(()=>{return(n=b||(b={})).Accepted="ACCEPTED",n.Rejected="REJECTED",n.Submitted="SUBMITTED",b;var n})(),F=(()=>{return(n=F||(F={})).Accepted="ACCEPTED",n.All="ALL",n.Rejected="REJECTED",n.Submitted="SUBMITTED",F;var n})(),g=(()=>{return(n=g||(g={})).Diagnostic="DIAGNOSTIC",n.Functional="FUNCTIONAL",n.Oncogenic="ONCOGENIC",n.Predictive="PREDICTIVE",n.Predisposing="PREDISPOSING",n.Prognostic="PROGNOSTIC",g;var n})(),B=(()=>{return(n=B||(B={})).Open="OPEN",n.Resolved="RESOLVED",B;var n})(),G=(()=>{return(n=G||(G={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",G;var n})(),x=(()=>{return(n=x||(x={})).AssertionCount="assertionCount",n.DiseaseName="diseaseName",n.DrugName="drugName",n.EntrezSymbol="entrezSymbol",n.EvidenceItemCount="evidenceItemCount",n.GeneAlias="geneAlias",n.VariantCount="variantCount",x;var n})(),l=(()=>{return(n=l||(l={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",l;var n})(),P=(()=>{return(n=P||(P={})).Mention="MENTION",n.Subscription="SUBSCRIPTION",P;var n})(),$=(()=>{return(n=$||($={})).Id="ID",n.Name="NAME",$;var n})(),y=(()=>{return(n=y||(y={})).AssertionCount="ASSERTION_COUNT",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.HpoId="HPO_ID",n.Name="NAME",y;var n})(),H=(()=>{return(n=H||(H={})).Read="READ",n.Unread="UNREAD",H;var n})(),ie=(()=>{return(n=ie||(ie={})).Grch37="GRCH37",n.Grch38="GRCH38",n.Ncbi36="NCBI36",ie;var n})(),ue=(()=>{return(n=ue||(ue={})).Accepted="ACCEPTED",n.New="NEW",n.Rejected="REJECTED",n.Superseded="SUPERSEDED",ue;var n})(),he=(()=>{return(n=he||(he={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",he;var n})(),ze=(()=>{return(n=ze||(ze={})).Asc="ASC",n.Desc="DESC",ze;var n})(),De=(()=>{return(n=De||(De={})).Asco="ASCO",n.Pubmed="PUBMED",De;var n})(),te=(()=>{return(n=te||(te={})).Curated="CURATED",n.New="NEW",n.Rejected="REJECTED",te;var n})(),pe=(()=>{return(n=pe||(pe={})).Citation="CITATION",n.CitationId="CITATION_ID",n.CreatedAt="CREATED_AT",n.DiseaseName="DISEASE_NAME",n.GeneName="GENE_NAME",n.SourceType="SOURCE_TYPE",n.Submitter="SUBMITTER",n.VariantName="VARIANT_NAME",pe;var n})(),E=(()=>{return(n=E||(E={})).Authors="AUTHORS",n.CitationId="CITATION_ID",n.EvidenceCount="EVIDENCE_COUNT",n.Journal="JOURNAL",n.Name="NAME",n.SourceType="SOURCE_TYPE",n.SuggestionCount="SUGGESTION_COUNT",n.Year="YEAR",E;var n})(),Q=(()=>{return(n=Q||(Q={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.SourceSuggestion="SOURCE_SUGGESTION",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",Q;var n})(),se=(()=>{return(n=se||(se={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.Role="ROLE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",se;var n})(),ee=(()=>{return(n=ee||(ee={})).Admin="ADMIN",n.Curator="CURATOR",n.Editor="EDITOR",ee;var n})(),ge=(()=>{return(n=ge||(ge={})).Id="ID",n.LastAction="LAST_ACTION",n.Name="NAME",n.Role="ROLE",ge;var n})(),_e=(()=>{return(n=_e||(_e={})).All="ALL",n.WithAccepted="WITH_ACCEPTED",n.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",n.WithSubmitted="WITH_SUBMITTED",_e;var n})(),Te=(()=>{return(n=Te||(Te={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.GeneNames="GENE_NAMES",n.Name="NAME",n.VariantCount="VARIANT_COUNT",n.VariantNames="VARIANT_NAMES",Te;var n})(),Oe=(()=>{return(n=Oe||(Oe={})).CoordinateEnd="COORDINATE_END",n.CoordinateStart="COORDINATE_START",n.Name="NAME",Oe;var n})(),Ie=(()=>{return(n=Ie||(Ie={})).CommonGermline="COMMON_GERMLINE",n.Na="NA",n.RareGermline="RARE_GERMLINE",n.Somatic="SOMATIC",n.Unknown="UNKNOWN",Ie;var n})(),Ae=(()=>{return(n=Ae||(Ae={})).Name="NAME",n.Soid="SOID",n.VariantCount="VARIANT_COUNT",Ae;var n})(),z=(()=>{return(n=z||(z={})).AssertionCount="assertionCount",n.DiseaseName="diseaseName",n.DrugName="drugName",n.EntrezSymbol="entrezSymbol",n.EvidenceItemCount="evidenceItemCount",n.EvidenceScore="evidenceScore",n.VariantName="variantName",z;var n})();const q=t.Ps`
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
  clingenCodes {
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
    `,D=t.Ps`
    fragment AssertionBrowseFields on Assertion {
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
  drugInteractionType
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  ampLevel
  evidenceItemsCount
  status
}
    `,ce=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ce=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Se=t.Ps`
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
    `,$e=t.Ps`
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
    `,Ge=t.Ps`
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
    `,Be=t.Ps`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,Pe=t.Ps`
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
    `,Re=t.Ps`
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
    ${Pe}`,be=t.Ps`
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
    `,Qe=t.Ps`
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
    `,xe=t.Ps`
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
    `,Ye=t.Ps`
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
    ${xe}`,Ze=t.Ps`
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
    `,We=t.Ps`
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
    `,Je=t.Ps`
    fragment BrowseGenesFields on BrowseGene {
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
    `,V=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,le=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,f=t.Ps`
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description
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
}
    `,m=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,ae=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,me=t.Ps`
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
    `,Me=t.Ps`
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
    `,Le=t.Ps`
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
    `,Ee=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Ue=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,Ve=t.Ps`
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
    `,je=t.Ps`
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
    `,Ke=t.Ps`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  sourceSuggestionCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
  link
}
    `,He=t.Ps`
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
    `,ke=t.Ps`
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
    `,et=t.Ps`
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
    `,it=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Xe=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,tt=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,st=t.Ps`
    fragment CoordinatesCardFields on Variant {
  id
  name
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
}
    `,rt=t.Ps`
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
    `,h=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,J=t.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
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
    `,M=t.Ps`
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
  clingenCodes {
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
    `,oe=t.Ps`
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
    `,ve=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,ye=t.Ps`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,dt=t.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,nt=t.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,at=t.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,qe=t.Ps`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,ct=t.Ps`
    fragment VariantTypeaheadFields on Variant {
  id
  name
  variantAliases
}
    `,ut=t.Ps`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,pt=(t.Ps`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,t.Ps`
    fragment RevisableEvidenceFields on EvidenceItem {
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
    `),we=t.Ps`
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
    `,mt=t.Ps`
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
    `,Nt=t.Ps`
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
    `,Pt=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,xt=t.Ps`
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
    ${Pt}`,Lt=t.Ps`
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
    `,Ft=t.Ps`
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
  clingenCodes {
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
    `,$t=t.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
}
    `,gt=t.Ps`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,ft=t.Ps`
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
    `,vt=t.Ps`
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
    `,ht=t.Ps`
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
    `,zt=t.Ps`
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
    `,Rt=t.Ps`
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
    `,bt=t.Ps`
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
    `,Gt=t.Ps`
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
    `,Bt=t.Ps`
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
    `,_t=t.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Ct=t.Ps`
    fragment SourceSummaryFields on Source {
  id
  citation
  displayType
  sourceUrl
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
    `,yt=t.Ps`
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
    `,Qt=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Tt=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,It=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,lt=t.Ps`
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
    ${Pe}`,Dt=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,St=t.Ps`
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
    `,Ot=t.Ps`
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
    `,Et=t.Ps`
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
    `,Mt=t.Ps`
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
    `,p=t.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  description
  gene {
    id
    name
    link
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
    ${Mt}`,j=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${q}`;let d=(()=>{class n extends t.AE{constructor(r){super(r),this.document=j}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const S=t.Ps`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatusFilter) {
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
        ...AssertionBrowseFields
      }
    }
  }
}
    ${D}`;let re=(()=>{class n extends t.AE{constructor(r){super(r),this.document=S}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fe=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ce}`;let Ne=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fe}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Fe=t.Ps`
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
    ${Ce}`;let ot=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Fe}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ut=t.Ps`
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
    ${Se}`;let wt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ut}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vt=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${$e}`;let Yt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Vt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zt=t.Ps`
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
    `;let Wt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Zt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Jt=t.Ps`
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
    ${Ge}`;let jt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Jt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Kt=t.Ps`
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
    `;let Ht=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Kt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const kt=t.Ps`
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
    ${Be}`;let Xt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=kt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qt=t.Ps`
    query EventFeedCount($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $includeAutomatedEvents: Boolean, $mode: EventFeedMode) {
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
    includeAutomatedEvents: $includeAutomatedEvents
  ) {
    unfilteredCount
  }
}
    `;let en=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const tn=t.Ps`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $includeAutomatedEvents: Boolean = true, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    includeAutomatedEvents: $includeAutomatedEvents
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${Re}`;let nn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=tn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const on=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${be}`;let rn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=on}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const sn=t.Ps`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $status: EvidenceStatusFilter) {
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
    ${Qe}`;let an=(()=>{class n extends t.AE{constructor(r){super(r),this.document=sn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const cn=t.Ps`
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
    ${Ye}`;let ln=(()=>{class n extends t.AE{constructor(r){super(r),this.document=cn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const dn=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Ze}`;let un=(()=>{class n extends t.AE{constructor(r){super(r),this.document=dn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const pn=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${We}`;let mn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=pn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const gn=t.Ps`
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
        ...BrowseGenesFields
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
    ${Je}`;let fn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=gn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const vn=t.Ps`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${V}`;let hn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=vn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const zn=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${le}`;let _n=(()=>{class n extends t.AE{constructor(r){super(r),this.document=zn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Cn=t.Ps`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort) {
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
    ${f}`;let yn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Cn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Tn=t.Ps`
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
    `;let In=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Tn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Dn=t.Ps`
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
    ${m}`;let Sn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Dn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const On=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let En=(()=>{class n extends t.mm{constructor(r){super(r),this.document=On}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Mn=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let An=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Mn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Nn=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ae}`;let Pn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Nn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const xn=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${me}`;let Ln=(()=>{class n extends t.AE{constructor(r){super(r),this.document=xn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Fn=t.Ps`
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
    ${Me}`;let $n=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Fn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Rn=t.Ps`
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
    ${Le}`;let bn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Rn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Gn=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Ee}`;let Bn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Gn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Qn=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Un=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Qn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const wn=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Vn=(()=>{class n extends t.mm{constructor(r){super(r),this.document=wn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Yn=t.Ps`
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
    ${Ue}`;let Zn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Yn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Wn=t.Ps`
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
    ${Ve}`;let Jn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Wn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const jn=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${je}`;let Kn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=jn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Hn=t.Ps`
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
    ${Ke}`;let kn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Hn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Xn=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${He}`;let qn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Xn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const eo=t.Ps`
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
    ${ke}`;let to=(()=>{class n extends t.AE{constructor(r){super(r),this.document=eo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const no=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${et}`;let oo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=no}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const io=t.Ps`
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
    ${it}`;let ro=(()=>{class n extends t.AE{constructor(r){super(r),this.document=io}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const so=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Xe}`;let ao=(()=>{class n extends t.AE{constructor(r){super(r),this.document=so}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const co=t.Ps`
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
    ${tt}`;let lo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=co}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const uo=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${st}`;let po=(()=>{class n extends t.AE{constructor(r){super(r),this.document=uo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const mo=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${rt}`;let go=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fo=t.Ps`
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
    ${h}`;let vo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ho=t.Ps`
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
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${J}`;let zo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ho}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _o=t.Ps`
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
    `;let Co=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_o}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yo=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let To=(()=>{class n extends t.AE{constructor(r){super(r),this.document=yo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Io=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${M}`;let Do=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Io}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const So=t.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Oo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=So}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Eo=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Mo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Eo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ao=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Se}`;let No=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ao}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Po=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${oe}`;let xo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Po}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Lo=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Fo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Lo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $o=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Ro=(()=>{class n extends t.AE{constructor(r){super(r),this.document=$o}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const bo=t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Go=(()=>{class n extends t.AE{constructor(r){super(r),this.document=bo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Bo=t.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Qo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Bo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Uo=t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let wo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Uo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vo=t.Ps`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${ve}`;let Yo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Vo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zo=t.Ps`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Wo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Zo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Jo=t.Ps`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${ye}`;let jo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Jo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ko=t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Ho=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ko}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ko=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${dt}`;let Xo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ko}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qo=t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let ei=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ti=t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let ni=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ti}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const oi=t.Ps`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let ii=(()=>{class n extends t.AE{constructor(r){super(r),this.document=oi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ri=t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let si=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ri}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ai=t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let ci=(()=>{class n extends t.mm{constructor(r){super(r),this.document=ai}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const li=t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let di=(()=>{class n extends t.AE{constructor(r){super(r),this.document=li}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ui=t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${at}`;let pi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=ui}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const mi=t.Ps`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let gi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fi=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;let vi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const hi=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${ut}`;let zi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=hi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;const _i=t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Ci=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_i}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yi=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${pt}`;let Ti=(()=>{class n extends t.AE{constructor(r){super(r),this.document=yi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ii=t.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Di=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ii}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Si=t.Ps`
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
    `;let Oi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Si}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${we}`;const Ei=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Mi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ei}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ai=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Ni=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ai}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Pi=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let xi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Pi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Li=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${mt}`;let Fi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Li}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $i=t.Ps`
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
    `;let Ri=(()=>{class n extends t.mm{constructor(r){super(r),this.document=$i}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const bi=t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Gi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=bi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Bi=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Qi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Bi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ui=t.Ps`
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
    `;let wi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ui}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vi=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Yi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Vi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zi=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Wi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Zi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ji=t.Ps`
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
    `;let ji=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ji}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ki=t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Nt}`;let Hi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ki}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ki=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Xi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=ki}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qi=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${xt}`;let er=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const tr=t.Ps`
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
    `;let nr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=tr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const or=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Lt}`;let ir=(()=>{class n extends t.AE{constructor(r){super(r),this.document=or}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const rr=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Ft}`;let sr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=rr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ar=t.Ps`
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
    `;let cr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ar}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const lr=t.Ps`
    query ClinicalTrialSummary($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;let dr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=lr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ur=t.Ps`
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
    `;let pr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ur}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${$t}`;const mr=t.Ps`
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
    `;let gr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fr=t.Ps`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${gt}`;let vr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const hr=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${ft}`;let zr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=hr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _r=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${vt}`;let Cr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_r}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yr=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${ht}`;let Tr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=yr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ir=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${zt}`;let Dr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ir}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Sr=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Rt}`;let Or=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Sr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Er=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${bt}`;let Mr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Er}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ar=t.Ps`
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
    ${Gt}`;let Nr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ar}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Pr=t.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let xr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Pr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Lr=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Bt}`;let Fr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Lr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $r=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${_t}`;let Rr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=$r}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const br=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ct}`;let Gr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=br}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Br=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${yt}`;let Qr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Br}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ur=t.Ps`
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
    ${It}
${Tt}
${Qt}
${lt}`;let wr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ur}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vr=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${lt}`;let Yr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Vr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zr=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Dt}`;let Wr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Zr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Jr=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let jr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Jr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Kr=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${St}`;let Hr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Kr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
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
    `;const kr=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ot}`;let Xr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=kr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qr=t.Ps`
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
    `;let es=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ts=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Et}`;let ns=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ts}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const os=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${p}`;let is=(()=>{class n extends t.AE{constructor(r){super(r),this.document=os}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},944:(de,W,o)=>{o.r(W),o.d(W,{LayoutModule:()=>Mt});var t=o(9808),e=o(325),i=o(5e3),s=o(9350),I=o(8929),v=o(7625),a=o(655),U=o(4090),c=o(1721),_=o(4219),C=o(925),A=o(5017),O=o(226),K=o(5113);const N=["*"],k=["nz-sider-trigger",""];function Y(p,j){}function w(p,j){if(1&p&&(i.ynx(0),i.YNc(1,Y,0,0,"ng-template",3),i.BQk()),2&p){const d=i.oxw(),S=i.MAs(5);i.xp6(1),i.Q6J("ngTemplateOutlet",d.nzZeroTrigger||S)}}function Z(p,j){}function T(p,j){if(1&p&&(i.ynx(0),i.YNc(1,Z,0,0,"ng-template",3),i.BQk()),2&p){const d=i.oxw(),S=i.MAs(3);i.xp6(1),i.Q6J("ngTemplateOutlet",d.nzTrigger||S)}}function R(p,j){if(1&p&&i._UZ(0,"i",5),2&p){const d=i.oxw(2);i.Q6J("nzType",d.nzCollapsed?"right":"left")}}function X(p,j){if(1&p&&i._UZ(0,"i",5),2&p){const d=i.oxw(2);i.Q6J("nzType",d.nzCollapsed?"left":"right")}}function b(p,j){if(1&p&&(i.YNc(0,R,1,1,"i",4),i.YNc(1,X,1,1,"i",4)),2&p){const d=i.oxw();i.Q6J("ngIf",!d.nzReverseArrow),i.xp6(1),i.Q6J("ngIf",d.nzReverseArrow)}}function F(p,j){1&p&&i._UZ(0,"i",6)}function g(p,j){if(1&p){const d=i.EpF();i.TgZ(0,"div",2),i.NdJ("click",function(){i.CHM(d);const re=i.oxw();return re.setCollapsed(!re.nzCollapsed)}),i.qZA()}if(2&p){const d=i.oxw();i.Q6J("matchBreakPoint",d.matchBreakPoint)("nzCollapsedWidth",d.nzCollapsedWidth)("nzCollapsed",d.nzCollapsed)("nzBreakpoint",d.nzBreakpoint)("nzReverseArrow",d.nzReverseArrow)("nzTrigger",d.nzTrigger)("nzZeroTrigger",d.nzZeroTrigger)("siderWidth",d.widthSetting)}}let B=(()=>{class p{constructor(d,S){this.elementRef=d,this.renderer=S,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.SBq),i.Y36(i.Qsj))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:N,decls:1,vars:0,template:function(d,S){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),x=(()=>{class p{constructor(d,S){this.elementRef=d,this.renderer=S,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.SBq),i.Y36(i.Qsj))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:N,decls:1,vars:0,template:function(d,S){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),L=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(d,S){2&d&&(i.Udp("width",S.isNormalTrigger?S.siderWidth:null),i.ekj("ant-layout-sider-trigger",S.isNormalTrigger)("ant-layout-sider-zero-width-trigger",S.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",S.isZeroTrigger&&S.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",S.isZeroTrigger&&!S.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[i.TTD],attrs:k,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(d,S){1&d&&(i.YNc(0,w,2,1,"ng-container",0),i.YNc(1,T,2,1,"ng-container",0),i.YNc(2,b,2,2,"ng-template",null,1,i.W1O),i.YNc(4,F,1,0,"ng-template",null,2,i.W1O)),2&d&&(i.Q6J("ngIf",S.isZeroTrigger),i.xp6(1),i.Q6J("ngIf",S.isNormalTrigger))},directives:[t.O5,t.tP,A.Ls],encapsulation:2,changeDetection:0}),p})(),l=(()=>{class p{constructor(d,S,re){this.platform=d,this.cdr=S,this.breakpointService=re,this.destroy$=new I.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new i.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,c.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(d){d!==this.nzCollapsed&&(this.nzCollapsed=d,this.nzCollapsedChange.emit(d),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(U.ow,!0).pipe((0,v.R)(this.destroy$)).subscribe(d=>{const S=this.nzBreakpoint;S&&(0,c.ov)().subscribe(()=>{this.matchBreakPoint=!d[S],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(d){const{nzCollapsed:S,nzCollapsedWidth:re,nzWidth:fe}=d;(S||re||fe)&&this.updateStyleMap(),S&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(C.t4),i.Y36(i.sBO),i.Y36(U.r3))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(d,S,re){if(1&d&&i.Suo(re,_.wO,5),2&d){let fe;i.iGM(fe=i.CRH())&&(S.nzMenuDirective=fe.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(d,S){2&d&&(i.Udp("flex",S.flexSetting)("max-width",S.widthSetting)("min-width",S.widthSetting)("width",S.widthSetting),i.ekj("ant-layout-sider-zero-width",S.nzCollapsed&&0===S.nzCollapsedWidth)("ant-layout-sider-light","light"===S.nzTheme)("ant-layout-sider-dark","dark"===S.nzTheme)("ant-layout-sider-collapsed",S.nzCollapsed)("ant-layout-sider-has-trigger",S.nzCollapsible&&null!==S.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[i.TTD],ngContentSelectors:N,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(d,S){1&d&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA(),i.YNc(2,g,1,8,"div",1)),2&d&&(i.xp6(2),i.Q6J("ngIf",S.nzCollapsible&&null!==S.nzTrigger))},directives:[L,t.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,c.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsed",void 0),p})(),P=(()=>{class p{constructor(d){this.directionality=d,this.dir="ltr",this.destroy$=new I.xQ}ngOnInit(){var d;this.dir=this.directionality.value,null===(d=this.directionality.change)||void 0===d||d.pipe((0,v.R)(this.destroy$)).subscribe(S=>{this.dir=S})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(O.Is,8))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(d,S,re){if(1&d&&i.Suo(re,l,4),2&d){let fe;i.iGM(fe=i.CRH())&&(S.listOfNzSiderComponent=fe)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(d,S){2&d&&i.ekj("ant-layout-rtl","rtl"===S.dir)("ant-layout-has-sider",S.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:N,decls:1,vars:0,template:function(d,S){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),$=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[O.vT,t.ez,A.PV,K.xu,C.ud]]}),p})();var y=o(404),H=o(1894),ie=o(7630),ue=o(8054),he=o(353),ze=o(8514),De=o(8896),pe=o(5254),E=o(3240),ne=o(1307),Q=o(3164),se=o(7545),ee=o(4850),ge=o(2198),_e=o(5778),Te=o(3075),Oe=o(3618),Ie=o(6949);function Ae(p,j){if(1&p&&(i.TgZ(0,"span",7),i._uU(1," \u2014 "),i._UZ(2,"span",5),i.qZA()),2&p){const d=i.oxw().$implicit;i.xp6(2),i.s9C("innerHTML",d.result.matchingText,i.oJD)}}function z(p,j){if(1&p&&(i.TgZ(0,"nz-option",3),i._UZ(1,"i",4)(2,"span",5),i.YNc(3,Ae,3,1,"span",6),i.qZA()),2&p){const d=j.$implicit,S=i.oxw();i.Q6J("nzLabel",d.text)("nzValue",d.result),i.xp6(1),i.Q6J("nzType",S.iconNameForResult(d.result)),i.xp6(1),i.s9C("innerHTML",d.result.name,i.oJD),i.xp6(1),i.Q6J("ngIf",d.result.matchingText)}}function q(p,j){1&p&&(i.TgZ(0,"nz-option",8),i._UZ(1,"i",9),i._uU(2," Loading Data... "),i.qZA())}let D=(()=>{class p{constructor(d,S){this.gql=d,this.router=S,this.onSearch$=new I.xQ,this.onSelect$=new I.xQ,this.response$=this.onSearch$.pipe((0,ne.T)(1),(0,Q.p)(300,he.z,{leading:!1,trailing:!0}),(0,se.w)(Ne=>function te(p,j=De.E,d=De.E){return(0,ze.P)(()=>p()?j:d)}(()=>void 0===this.queryRef,(0,ze.P)(()=>re(Ne)),(0,ze.P)(()=>fe(Ne))))),this.isLoading$=this.response$.pipe((0,ee.U)(Ne=>Ne.loading),(0,ge.h)(E.ep),(0,_e.x)()),this.result$=this.response$.pipe((0,ee.U)(Ne=>{var Fe;return null===(Fe=Ne.data)||void 0===Fe?void 0:Fe.search}),(0,ge.h)(E.ep)),this.option$=this.result$.pipe((0,ee.U)(Ne=>{const Fe=[];return Ne.forEach(ot=>{ot&&Fe.push({text:ot.name,value:ot.id.toString(),result:ot})}),Fe})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const re=Ne=>(this.queryRef=this.gql.watch({query:Ne}),this.queryRef.valueChanges),fe=Ne=>(0,pe.D)(this.queryRef.refetch({query:Ne}))}set selectedOpt(d){this._selectedOpt=d}get selectedOpt(){return this._selectedOpt}iconNameForResult(d){return d.resultType===ie.rZD.EvidenceItem?"civic:evidence":`civic:${d.resultType.toLowerCase()}`}urlForResult(d){let S;switch(d.resultType){case ie.rZD.VariantGroup:S="variant-groups";break;case ie.rZD.EvidenceItem:S="evidence";break;default:S=`${d.resultType.toLowerCase()}s`}return`/${S}/${d.id}/summary`}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(ie.ghc),i.Y36(e.F0))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(d,S){if(1&d&&i.Gf(ue.Vq,7),2&d){let re;i.iGM(re=i.CRH())&&(S.selectNode=re.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(d,S){1&d&&(i.TgZ(0,"nz-select",0),i.NdJ("ngModelChange",function(fe){return S.selectedOpt=fe})("ngModelChange",function(fe){return S.onSelect$.next(fe)})("nzOnSearch",function(fe){return S.onSearch$.next(fe)}),i.YNc(1,z,4,5,"nz-option",1),i.ALo(2,"ngrxPush"),i.YNc(3,q,3,0,"nz-option",2),i.ALo(4,"ngrxPush"),i.qZA()),2&d&&(i.Q6J("ngModel",S.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,6,S.option$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(4,8,S.isLoading$)))},directives:[ue.Vq,Te.JJ,Te.On,t.sg,ue.Ip,A.Ls,t.O5,Oe.ZU],pipes:[Ie.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var ce=o(1912),Ce=o(1059),Se=o(2340),$e=o(8144),Ge=o(6042),Be=o(2643),Pe=o(2683),Re=o(3677),be=o(4401),Qe=o(7881),xe=o(3640),Ye=o(8785),Ze=o(3434);function We(p,j){if(1&p&&(i.TgZ(0,"button",26),i._uU(1," Add "),i._UZ(2,"i",27),i.qZA()),2&p){i.oxw(2);const d=i.MAs(15);i.Q6J("nzDropdownMenu",d)}}const Je=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function V(p,j){if(1&p&&(i.TgZ(0,"nz-badge",28)(1,"button",29),i._UZ(2,"i",30),i.qZA()()),2&p){const d=i.oxw().ngrxLet,S=i.oxw().ngIf;i.Q6J("nzCount",d)("nzOverflowCount",999)("nzStyle",i.DdM(4,Je)),i.xp6(1),i.MGl("routerLink","/users/",S.id,"/notifications")}}const le=function(p){return{"update-coi":p}};function f(p,j){if(1&p&&i._UZ(0,"cvc-user-avatar",36),2&p){const d=i.oxw(3).ngIf;i.Q6J("user",d)("size",22)("ngClass",i.VKq(3,le,d.invalidCoi))}}function m(p,j){if(1&p&&(i.TgZ(0,"div",37),i._uU(1),i.qZA()),2&p){const d=i.oxw(3).ngIf;i.xp6(1),i.Oqu(d.username)}}function ae(p,j){1&p&&i._UZ(0,"i",27)}function me(p,j){if(1&p&&(i.TgZ(0,"button",31)(1,"nz-space",32),i.YNc(2,f,1,5,"cvc-user-avatar",33),i.YNc(3,m,2,1,"div",34),i.YNc(4,ae,1,0,"i",35),i.qZA()()),2&p){i.oxw(2);const d=i.MAs(3);i.Q6J("nzDropdownMenu",d)}}function Me(p,j){1&p&&(i.TgZ(0,"nz-space",22),i.YNc(1,We,3,1,"button",23),i.YNc(2,V,3,5,"nz-badge",24),i.YNc(3,me,5,1,"button",25),i.qZA())}function Le(p,j){if(1&p){const d=i.EpF();i.TgZ(0,"li",17)(1,"button",38),i.NdJ("click",function(){return i.CHM(d),i.oxw(2).coiUpdateModalVisible=!0}),i._UZ(2,"i",39),i._uU(3," Please update COI statement "),i.qZA()()}}function Ee(p,j){1&p&&i._UZ(0,"li",14)}function Ue(p,j){1&p&&(i.TgZ(0,"li",40)(1,"a",41),i._uU(2," Admin Console "),i.qZA()())}function Ve(p,j){1&p&&(i.TgZ(0,"li",42)(1,"a",43),i._uU(2," Background Workers "),i.qZA()())}function je(p,j){if(1&p){const d=i.EpF();i.TgZ(0,"li",17)(1,"a",44),i.NdJ("click",function(){return i.CHM(d),i.oxw(2).addVariantModalVisible=!0}),i._uU(2," Variant "),i.qZA()()}}const Ke=function(p){return["/users",p]};function He(p,j){if(1&p){const d=i.EpF();i.ynx(0),i.YNc(1,Me,4,0,"nz-space",6),i.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),i.YNc(5,Le,4,0,"li",9),i.YNc(6,Ee,1,0,"li",10),i.TgZ(7,"li",11),i._uU(8," Your Profile "),i.qZA(),i.YNc(9,Ue,3,0,"li",12),i.YNc(10,Ve,3,0,"li",13),i._UZ(11,"li",14),i.TgZ(12,"li",15),i.NdJ("click",function(){return i.CHM(d),i.oxw().signOut()}),i._uU(13,"Sign Out"),i.qZA()()(),i.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),i._uU(19," Evidence Item "),i.qZA()(),i.TgZ(20,"li",17)(21,"a",19),i._uU(22," Assertion "),i.qZA()(),i.TgZ(23,"li",17)(24,"a",20),i._uU(25," Source Suggestion "),i.qZA()(),i.YNc(26,je,3,0,"li",9),i.TgZ(27,"li",17)(28,"a",21),i._uU(29," Variant Group "),i.qZA()()()(),i.BQk()}if(2&p){const d=j.ngIf,S=i.oxw();i.xp6(1),i.Q6J("ngrxLet",S.unreadCount$),i.xp6(4),i.Q6J("ngIf",d.invalidCoi),i.xp6(1),i.Q6J("ngIf",d.invalidCoi),i.xp6(1),i.Q6J("routerLink",i.VKq(7,Ke,d.id)),i.xp6(2),i.Q6J("ngIf",d.isAdmin),i.xp6(1),i.Q6J("ngIf",d.isAdmin),i.xp6(16),i.Q6J("ngIf",d.isEditor)}}function ke(p,j){1&p&&(i.TgZ(0,"span"),i._uU(1,"Update your Conflict of Interest Statement"),i.qZA())}function et(p,j){if(1&p){const d=i.EpF();i.TgZ(0,"cvc-user-coi-form",45),i.NdJ("coiUpdatedEvent",function(){return i.CHM(d),i.oxw().coiUpdated()}),i.qZA()}}function it(p,j){1&p&&(i.TgZ(0,"span"),i._uU(1,"Add New Variant"),i.qZA())}function Xe(p,j){1&p&&i._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class p{constructor(d,S){this.queryService=d,this.unreadCountGql=S,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Se.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,Ce.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,Ce.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(s.a),i.Y36(ie.Kmw))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(d,S){if(1&d&&(i.YNc(0,He,30,9,"ng-container",0),i.ALo(1,"ngrxPush"),i.TgZ(2,"nz-modal",1),i.NdJ("nzVisibleChange",function(fe){return S.coiUpdateModalVisible=fe})("nzOnCancel",function(){return S.handleCoiModalCancel()}),i.YNc(3,ke,2,0,"ng-template",null,2,i.W1O),i.YNc(5,et,1,0,"ng-template",null,3,i.W1O),i.qZA(),i.TgZ(7,"nz-modal",1),i.NdJ("nzVisibleChange",function(fe){return S.addVariantModalVisible=fe})("nzOnCancel",function(){return S.addVariantModalVisible=!1}),i.YNc(8,it,2,0,"ng-template",null,4,i.W1O),i.YNc(10,Xe,1,0,"ng-template",null,5,i.W1O),i.qZA()),2&d){const re=i.MAs(4),fe=i.MAs(6),Ne=i.MAs(9),Fe=i.MAs(11);i.Q6J("ngIf",i.lcZ(1,9,S.viewer$)),i.xp6(2),i.Q6J("nzVisible",S.coiUpdateModalVisible)("nzContent",fe)("nzTitle",re)("nzFooter",null),i.xp6(5),i.Q6J("nzVisible",S.addVariantModalVisible)("nzContent",Fe)("nzTitle",Ne)("nzFooter",null)}},directives:[t.O5,Ie.eJ,$e.NU,$e.$1,Ge.ix,Be.dQ,Pe.w,Re.wA,Re.cm,A.Ls,be.x7,e.rH,Qe.L,t.mk,Re.RR,_.wO,_.r9,_.YV,e.yS,xe.du,Ye.t,Ze.G],pipes:[Ie.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function st(p,j){1&p&&i._UZ(0,"img",58)}function rt(p,j){1&p&&i._UZ(0,"img",59)}function h(p,j){1&p&&i._UZ(0,"cvc-login-button")}function J(p,j){1&p&&i._UZ(0,"cvc-viewer-button")}const M=function(p){return{"is-collapsed":p}},ve=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(d){this.viewerService=d,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(s.a))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-layout"]],decls:124,vars:46,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(d,S){1&d&&(i.TgZ(0,"nz-layout",0)(1,"nz-sider",1),i.NdJ("nzCollapsedChange",function(fe){return S.isCollapsed=fe}),i.TgZ(2,"a",2)(3,"div",3),i.YNc(4,st,1,0,"img",4),i.YNc(5,rt,1,0,"img",5),i.qZA()(),i.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),i._UZ(10,"i",9),i.TgZ(11,"span")(12,"a",10),i._uU(13,"Assertions"),i.qZA()()(),i.TgZ(14,"li",8),i._UZ(15,"i",11),i.TgZ(16,"span")(17,"a",12),i._uU(18,"Evidence"),i.qZA()()(),i.TgZ(19,"li",8),i._UZ(20,"i",13),i.TgZ(21,"span")(22,"a",14),i._uU(23,"Genes"),i.qZA()()(),i.TgZ(24,"li",8),i._UZ(25,"i",15),i.TgZ(26,"span")(27,"a",16),i._uU(28,"Variants"),i.qZA()()(),i.TgZ(29,"li",8),i._UZ(30,"i",17),i.TgZ(31,"span")(32,"a",18),i._uU(33,"Variant Groups"),i.qZA()()()()(),i.TgZ(34,"li",8),i._UZ(35,"i",19),i.TgZ(36,"span")(37,"a",20),i._uU(38,"Clinical Trials"),i.qZA()()(),i.TgZ(39,"li",8),i._UZ(40,"i",21),i.TgZ(41,"span")(42,"a",22),i._uU(43,"Diseases"),i.qZA()()(),i.TgZ(44,"li",8),i._UZ(45,"i",23),i.TgZ(46,"span")(47,"a",24),i._uU(48,"Drugs"),i.qZA()()(),i.TgZ(49,"li",8),i._UZ(50,"i",25),i.TgZ(51,"span")(52,"a",26),i._uU(53,"Phenotypes"),i.qZA()()(),i.TgZ(54,"li",8),i._UZ(55,"i",27),i.TgZ(56,"span")(57,"a",28),i._uU(58,"Sources"),i.qZA()()(),i.TgZ(59,"li",8),i._UZ(60,"i",29),i.TgZ(61,"span")(62,"a",30),i._uU(63,"Variant Types"),i.qZA()()(),i.TgZ(64,"li",7)(65,"ul")(66,"li",8),i._UZ(67,"i",31),i.TgZ(68,"span")(69,"a",32),i._uU(70," Activity "),i.qZA()()(),i.TgZ(71,"li",8),i._UZ(72,"i",33),i.TgZ(73,"span")(74,"a",34),i._uU(75,"Queues"),i.qZA()()()()(),i.TgZ(76,"li",7)(77,"ul")(78,"li",8),i._UZ(79,"i",35),i.TgZ(80,"span")(81,"a",36),i._uU(82,"Contributors"),i.qZA()()(),i.TgZ(83,"li",8),i._UZ(84,"i",37),i.TgZ(85,"span")(86,"a",38),i._uU(87,"Organizations"),i.qZA()()()()(),i.TgZ(88,"li",7)(89,"ul")(90,"li",8),i._UZ(91,"i",39),i.TgZ(92,"span")(93,"a",40),i._uU(94,"Data Releases"),i.qZA()()()()()(),i.TgZ(95,"div",41),i._UZ(96,"img",42)(97,"img",43),i.qZA()(),i.TgZ(98,"nz-layout",44)(99,"nz-header")(100,"div",45)(101,"div",46)(102,"span",47),i.NdJ("click",function(){return S.isCollapsed=!S.isCollapsed}),i._UZ(103,"i",48),i.qZA()(),i.TgZ(104,"div",49),i._UZ(105,"cvc-quicksearch"),i.qZA(),i.TgZ(106,"div",50)(107,"ul",51)(108,"li",52)(109,"a",53),i._uU(110,"Home"),i.qZA()(),i.TgZ(111,"li",52)(112,"a",54),i._uU(113,"About CIViC"),i.qZA()(),i.TgZ(114,"li",52)(115,"a",55),i._uU(116,"Help"),i.qZA()()()(),i.TgZ(117,"div",56),i.YNc(118,h,1,0,"cvc-login-button",57),i.ALo(119,"async"),i.YNc(120,J,1,0,"cvc-viewer-button",57),i.ALo(121,"async"),i.qZA()()(),i.TgZ(122,"nz-content"),i._UZ(123,"router-outlet"),i.qZA()()()),2&d&&(i.xp6(1),i.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",S.isCollapsed)("nzTrigger",null),i.xp6(2),i.Q6J("ngClass",i.VKq(38,M,S.isCollapsed)),i.xp6(1),i.Q6J("ngIf",!S.isCollapsed),i.xp6(1),i.Q6J("ngIf",S.isCollapsed),i.xp6(1),i.Q6J("ngClass",i.VKq(40,M,S.isCollapsed))("nzInlineCollapsed",S.isCollapsed),i.xp6(1),i.Q6J("nzTitle",S.isCollapsed?"KNOW":"KNOWLEDGEBASE"),i.xp6(2),i.Q6J("nzTooltipTitle",S.isCollapsed?"Assertions":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Evidence":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Genes":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Variants":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Variant Groups":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Clinical Trials":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Diseases":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Drugs":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Phenotypes":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Sources":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Variant Types":""),i.xp6(5),i.Q6J("nzTitle",S.isCollapsed?"CURATE":"CURATION"),i.xp6(2),i.Q6J("nzTooltipTitle",S.isCollapsed?"Activity":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Pending Queues":""),i.xp6(5),i.Q6J("nzTitle",S.isCollapsed?"COMM":"COMMUNITY"),i.xp6(2),i.Q6J("nzTooltipTitle",S.isCollapsed?"Users":""),i.xp6(5),i.Q6J("nzTooltipTitle",S.isCollapsed?"Organizations":""),i.xp6(5),i.Q6J("nzTitle",S.isCollapsed?"RES":"RESOURCES"),i.xp6(2),i.Q6J("nzTooltipTitle",S.isCollapsed?"Data Releases":""),i.xp6(5),i.Q6J("ngClass",i.VKq(42,M,S.isCollapsed)),i.xp6(3),i.Q6J("ngClass",i.VKq(44,M,S.isCollapsed)),i.xp6(5),i.Q6J("nzType",S.isCollapsed?"menu-unfold":"menu-fold"),i.xp6(15),i.Q6J("ngIf",i.lcZ(119,34,S.signedOut$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(121,36,S.signedIn$)))},directives:[P,l,e.yS,t.mk,t.O5,_.wO,_.uA,_.r9,y.SY,A.Ls,x,H.SK,H.t3,D,ce.s,tt,B,e.lC],pipes:[t.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(3200)]).then(o.bind(o,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(1192),o.e(7142),o.e(1838)]).then(o.bind(o,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(7434)]).then(o.bind(o,233)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(8592),o.e(8918)]).then(o.bind(o,1592)).then(p=>p.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(1192),o.e(4111)]).then(o.bind(o,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(8482),o.e(9160),o.e(681)]).then(o.bind(o,681)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(9160),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(8592),o.e(402)]).then(o.bind(o,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(2033),o.e(3278),o.e(7142),o.e(8592),o.e(6754)]).then(o.bind(o,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(3278),o.e(3456)]).then(o.bind(o,7563)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(9160),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(8482),o.e(79)]).then(o.bind(o,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(4025),o.e(8482),o.e(9160),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(4025),o.e(8482),o.e(9160),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(8945),o.e(4025),o.e(9931),o.e(9397),o.e(6724),o.e(9716),o.e(376),o.e(5715)]).then(o.bind(o,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let ye=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[e.Bz.forChild(ve)],e.Bz]}),p})();var dt=o(1017),nt=o(1047),at=o(4546),qe=o(2845),ct=o(4832),ut=o(969),At=o(2994),pt=o(8583),we=o(1159),mt=o(7429);const _t={provide:Te.JU,useExisting:(0,i.Gpc)(()=>yt),multi:!0};let yt=(()=>{class p{constructor(d,S,re,fe,Ne,Fe){this.ngZone=d,this.elementRef=S,this.overlay=re,this.viewContainerRef=fe,this.nzInputGroupWhitSuffixOrPrefixDirective=Ne,this.document=Fe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new I.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,v.R)(this.destroy$)).subscribe(d=>{"void"===d.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(d){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(d)))}registerOnChange(d){this.onChange=d}registerOnTouched(d){this.onTouched=d}setDisabledState(d){this.elementRef.nativeElement.disabled=d,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(d){const S=d.keyCode,re=S===we.LH||S===we.JH;S===we.hY&&d.preventDefault(),!this.panelOpen||S!==we.hY&&S!==we.Mf?this.panelOpen&&S===we.K5?this.nzAutocomplete.showPanel&&(d.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&re&&this.nzAutocomplete.showPanel&&(d.stopPropagation(),d.preventDefault(),S===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(d){const S=d.target,re=this.document;let fe=S.value;"number"===S.type&&(fe=""===fe?null:parseFloat(fe)),this.previousValue!==fe&&(this.previousValue=fe,this.onChange(fe),this.canOpen()&&re.activeElement===d.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,At.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,pt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(d=>{this.setValueAndClose(d)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ge.h)(d=>!this.elementRef.nativeElement.contains(d.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Ct(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new mt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const d=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(d).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const d=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==d?(this.nzAutocomplete.setActiveItem(d),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(d){const S=d.nzValue;this.setTriggerValue(d.getLabel()),this.onChange(S),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(d){const S=this.nzAutocomplete.getOption(d),re=S?S.getLabel():d;this.elementRef.nativeElement.value=null!=re?re:"",this.nzAutocomplete.nzBackfill||(this.previousValue=re)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const d=this.elementRef.nativeElement;return!d.readOnly&&!d.disabled}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(qe.aV),i.Y36(i.s_b),i.Y36(nt.ke,8),i.Y36(t.K0,8))},p.\u0275dir=i.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(d,S){1&d&&i.NdJ("focusin",function(){return S.handleFocus()})("blur",function(){return S.handleBlur()})("input",function(fe){return S.handleInput(fe)})("keydown",function(fe){return S.handleKeydown(fe)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[i._Bn([_t])]}),p})(),Tt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[O.vT,t.ez,qe.U8,Te.u5,ut.T,ct.g,nt.o7]]}),p})(),It=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,Te.u5,e.Bz,Ie.WG,Oe.ZJ,ue.LV,nt.o7,at.U5,A.PV,Tt]]}),p})();var lt=o(1844),Dt=o(5473),St=o(330),Ot=o(7058);let Et=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,Ie.WG,Re.b1,e.Bz,Ge.sL,$e.zf,A.PV,be.mS,y.cg,xe.Qp,Dt.H,St.e,Ot.e]]}),p})(),Mt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,ye,A.PV,H.Jb,$,_.ip,y.cg,Oe.ZJ,dt.s,lt.B,Et,It]]}),p})()},3240:(de,W,o)=>{function t(a){return null!=a}o.d(W,{ep:()=>t,lm:()=>e});const e=t},373:(de,W,o)=>{o.d(W,{j:()=>e});var t=o(4850);function e(...s){const I=s.length;if(0===I)throw new Error("list of properties cannot be empty.");return v=>(0,t.U)(function i(s,I){return a=>{let U=a;for(let c=0;c<I;c++){const _=null!=U?U[s[c]]:void 0;if(void 0===_)return;U=_}return U}}(s,I))(v)}},3164:(de,W,o)=>{o.d(W,{p:()=>a});var t=o(3489),e=o(353);const i={leading:!0,trailing:!1};function a(C,A=e.P,O=i){return K=>K.lift(new U(C,A,O.leading,O.trailing))}class U{constructor(A,O,K,N){this.duration=A,this.scheduler=O,this.leading=K,this.trailing=N}call(A,O){return O.subscribe(new c(A,this.duration,this.scheduler,this.leading,this.trailing))}}class c extends t.L{constructor(A,O,K,N,k){super(A),this.duration=O,this.scheduler=K,this.leading=N,this.trailing=k,this._hasTrailingValue=!1,this._trailingValue=null}_next(A){this.throttled?this.trailing&&(this._trailingValue=A,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(_,this.duration,{subscriber:this})),this.leading?this.destination.next(A):this.trailing&&(this._trailingValue=A,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const A=this.throttled;A&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),A.unsubscribe(),this.remove(A),this.throttled=null)}}function _(C){const{subscriber:A}=C;A.clearThrottle()}},444:(de,W,o)=>{function t(F){return F!==String(parseFloat(F))}o.d(W,{o6:()=>b});var I=Object.getOwnPropertyNames?function e(F){return Object.getOwnPropertyNames(F).filter(function(g){return F.propertyIsEnumerable(g)&&t(g)})}:Object.keys?function i(F){return Object.keys(F).filter(t)}:function s(F){var g=[];for(var B in F)F.hasOwnProperty(B)&&F.propertyIsEnumerable(B)&&t(B)&&g.push(B);return g},v=function(){function F(g){this.enumObj=g,this.keysList=Object.freeze(I(g));for(var B=this.keysList.length,G=new Array(B),x=new Map,L=0;L<B;++L){var l=this.keysList[L],P=g[l];G[L]=P,x.set(P,l),this[L]=Object.freeze([l,P])}this.valuesList=Object.freeze(G),this.keysByValueMap=x,this.size=this.length=B,Object.freeze(this)}return F.prototype.toString=function(){return"[object EnumWrapper]"},F.prototype.keys=function(){var g,B=this,G=0;return(g={next:function(){var L={done:G>=B.length,value:B.keysList[G]};return++G,L}})[Symbol.iterator]=function(){return this},g},F.prototype.values=function(){var g,B=this,G=0;return(g={next:function(){var L={done:G>=B.length,value:B.valuesList[G]};return++G,L}})[Symbol.iterator]=function(){return this},g},F.prototype.entries=function(){var g,B=this,G=0;return(g={next:function(){var L={done:G>=B.length,value:B[G]};return++G,L}})[Symbol.iterator]=function(){return this},g},F.prototype[Symbol.iterator]=function(){return this.entries()},F.prototype.forEach=function(g,B){for(var G=this.length,x=0;x<G;++x){var L=this[x];g.call(B,L[1],L[0],this,x)}},F.prototype.map=function(g,B){for(var G=this.length,x=new Array(G),L=0;L<G;++L){var l=this[L];x[L]=g.call(B,l[1],l[0],this,L)}return x},F.prototype.getKeys=function(){return this.keysList.slice()},F.prototype.getValues=function(){return this.valuesList.slice()},F.prototype.getEntries=function(){return Array.prototype.slice.call(this)},F.prototype.indexOfKey=function(g){return this.keysList.indexOf(g)},F.prototype.indexOfValue=function(g){return this.valuesList.indexOf(g)},F.prototype.isKey=function(g){return null!=g&&t(g)&&this.enumObj.hasOwnProperty(g)},F.prototype.asKeyOrThrow=function(g){if(this.isKey(g))return g;throw new Error("Unexpected key: "+g+". Expected one of: "+this.getValues())},F.prototype.asKeyOrDefault=function(g,B){return this.isKey(g)?g:B},F.prototype.isValue=function(g){return null!=g&&this.keysByValueMap.has(g)},F.prototype.asValueOrThrow=function(g){if(this.isValue(g))return g;throw new Error("Unexpected value: "+g+". Expected one of: "+this.getValues())},F.prototype.asValueOrDefault=function(g,B){return this.isValue(g)?g:B},F.prototype.getKeyOrThrow=function(g){var B=null!=g?this.keysByValueMap.get(g):void 0;if(null!=B)return B;throw new Error("Unexpected value: "+g+". Expected one of: "+this.getValues())},F.prototype.getKeyOrDefault=function(g,B){var G=null!=g?this.keysByValueMap.get(g):void 0;return null!=G?G:B},F.prototype.getValueOrThrow=function(g){return this.enumObj[this.asKeyOrThrow(g)]},F.prototype.getValueOrDefault=function(g,B){return this.isKey(g)?this.enumObj[g]:B},F}();v.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),U=Symbol("ts-enum-util:handleNull"),c=Symbol("ts-enum-util:handleUndefined"),_=Symbol("ts-enum-util:handleUnexpected");function C(F){return new Error("Unhandled value: "+F)}var A=function(){function F(g){this.value=g}return F.prototype.with=function(g){if(g.hasOwnProperty(this.value))return N(g[this.value],this.value);if(g[_])return N(g[_],this.value);throw new Error("Unexpected value: "+this.value)},F}(),O=function(){function F(){}return F.prototype.with=function(g){if(g[U])return N(g[U],null);if(g[_])return N(g[_],null);throw new Error("Unexpected value: null")},F}(),K=function(){function F(){}return F.prototype.with=function(g){if(g[c])return N(g[c],void 0);if(g[_])return N(g[_],void 0);throw new Error("Unexpected value: undefined")},F}();function N(F,g){if(F===a)throw C(g);return F(g)}var k=function(){function F(g){this.value=g}return F.prototype.with=function(g){if(g.hasOwnProperty(this.value))return Z(g[this.value],this.value);if(g.hasOwnProperty(_))return Z(g[_],this.value);throw new Error("Unexpected value: "+this.value)},F}(),Y=function(){function F(){}return F.prototype.with=function(g){if(g.hasOwnProperty(U))return Z(g[U],null);if(g.hasOwnProperty(_))return Z(g[_],null);throw new Error("Unexpected value: null")},F}(),w=function(){function F(){}return F.prototype.with=function(g){if(g.hasOwnProperty(c))return Z(g[c],void 0);if(g.hasOwnProperty(_))return Z(g[_],void 0);throw new Error("Unexpected value: undefined")},F}();function Z(F,g){if(F===a)throw C(g);return F}var X=new WeakMap;function b(F){var g=X.get(F);return g||(g=new v(F),X.set(F,g)),g}b.handleNull=U,b.handleUndefined=c,b.handleUnexpected=_,b.unhandledEntry=a,b.visitValue=function T(F){return null===F?new O:void 0===F?new K:new A(F)},b.mapValue=function R(F){return null===F?new Y:void 0===F?new w:new k(F)}},4987:(de,W,o)=>{o.d(W,{c:()=>F,t:()=>P});var t=o(8929),e=o(2654),v=(o(5254),o(8896),o(8139),o(5e3)),_=(o(1709),o(7770),o(7221),o(7625));const C=v.GuJ,O=Symbol("__destroy"),K=Symbol("__decoratorApplied");function N(y){return"string"==typeof y?Symbol(`__destroy__${y}`):O}function Y(y,H){y[H]||(y[H]=new t.xQ)}function w(y,H){y[H]&&(y[H].next(),y[H].complete(),y[H]=null)}function Z(y){y instanceof e.w&&y.unsubscribe()}function R(y,H){return function(){var ie;if(y&&y.call(this),w(this,N()),H.arrayName&&function T(y){Array.isArray(y)&&y.forEach(Z)}(this[H.arrayName]),H.checkProperties)for(const ue in this)(null===(ie=H.blackList)||void 0===ie?void 0:ie.includes(ue))||Z(this[ue])}}function F(y={}){return H=>{!function A(y){return!!y[C]}(H)?function X(y,H){y.prototype.ngOnDestroy=R(y.prototype.ngOnDestroy,H)}(H,y):function b(y,H){const ie=y.\u0275pipe;ie.onDestroy=R(ie.onDestroy,H)}(H,y),function k(y){y.prototype[K]=!0}(H)}}function P(y,H){return ie=>{const ue=N(H);return"string"==typeof H?function l(y,H,ie){const ue=y[H];Y(y,ie),y[H]=function(){ue.apply(this,arguments),w(this,ie),y[H]=ue}}(y,H,ue):Y(y,ue),ie.pipe((0,_.R)(y[ue]))}}Symbol("CheckerHasBeenSet")},9552:(de,W,o)=>{o.d(W,{$:()=>B,j:()=>G});var t=o(655),e=o(9808),i=o(5e3),s=o(2654),I=o(839),v=o(8929),a=o(6787),U=o(3753),c=o(7625),_=o(4850),C=o(3164),A=o(9439),O=o(1721),K=o(4090),N=o(925),k=o(5577),Y=o(226);const w=["fixedEl"],Z=["*"];var T=(()=>{return(x=T||(T={})).resize="resize",x.scroll="scroll",x.touchstart="touchstart",x.touchmove="touchmove",x.touchend="touchend",x.pageshow="pageshow",x.load="LOAD",T;var x})();function X(x){return function R(x){return"undefined"!=typeof window&&x===window}(x)?{top:0,left:0,bottom:0}:x.getBoundingClientRect()}const F="ant-affix";let B=(()=>{class x{constructor(l,P,$,y,H,ie,ue,he,ze,De){this.nzConfigService=$,this.scrollSrv=y,this.ngZone=H,this.platform=ie,this.renderer=ue,this.nzResizeObserver=he,this.cdr=ze,this.directionality=De,this._nzModuleName="affix",this.nzChange=new i.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new I.t(1),this.destroy$=new v.xQ,this.placeholderNode=l.nativeElement,this.document=P}get target(){const l=this.nzTarget;return("string"==typeof l?this.document.querySelector(l):l)||window}ngOnInit(){var l;null===(l=this.directionality.change)||void 0===l||l.pipe((0,c.R)(this.destroy$)).subscribe(P=>{this.dir=P,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(l){const{nzOffsetBottom:P,nzOffsetTop:$,nzTarget:y}=l;(P||$)&&this.offsetChanged$.next(),y&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const l=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(T).map(P=>(0,U.R)(this.target,P)),this.offsetChanged$.pipe((0,_.U)(()=>({}))),this.nzResizeObserver.observe(l)).pipe((0,C.p)(20,void 0,{trailing:!0}),(0,c.R)(this.destroy$)).subscribe(P=>this.updatePosition(P))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(l,P){const $=l.getBoundingClientRect(),y=X(P),H=this.scrollSrv.getScroll(P,!0),ie=this.scrollSrv.getScroll(P,!1),ue=this.document.body;return{top:$.top-y.top+H-(ue.clientTop||0),left:$.left-y.left+ie-(ue.clientLeft||0),width:$.width,height:$.height}}setAffixStyle(l,P){const $=this.affixStyle,y=this.target===window;if("scroll"===l.type&&$&&P&&y||(0,O.wU)($,P))return;const H=!!P,ie=this.fixedEl.nativeElement;this.renderer.setStyle(ie,"cssText",(0,O.GM)(P)),this.affixStyle=P,H?ie.classList.add(F):ie.classList.remove(F),this.updateRtlClass(),(P&&!$||!P&&$)&&this.nzChange.emit(H)}setPlaceholderStyle(l){(0,O.wU)(l,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,O.GM)(l)),this.placeholderStyle=l)}syncPlaceholderStyle(l){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const P={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(l,Object.assign(Object.assign({},this.affixStyle),P)),this.setPlaceholderStyle(P)}updatePosition(l){if(!this.platform.isBrowser)return;const P=this.target;let $=this.nzOffsetTop;const y=this.scrollSrv.getScroll(P,!0),H=this.getOffset(this.placeholderNode,P),ie=this.fixedEl.nativeElement,ue={width:ie.offsetWidth,height:ie.offsetHeight},he={top:!1,bottom:!1};"number"!=typeof $&&"number"!=typeof this.nzOffsetBottom?(he.top=!0,$=0):(he.top="number"==typeof $,he.bottom="number"==typeof this.nzOffsetBottom);const ze=X(P),De=P.innerHeight||P.clientHeight;if(y>=H.top-$&&he.top){const te=H.width;this.setAffixStyle(l,{position:"fixed",top:ze.top+$,left:ze.left+H.left,width:te}),this.setPlaceholderStyle({width:te,height:ue.height})}else if(y<=H.top+ue.height+this.nzOffsetBottom-De&&he.bottom){const te=P===window?0:window.innerHeight-ze.bottom,pe=H.width;this.setAffixStyle(l,{position:"fixed",bottom:te+this.nzOffsetBottom,left:ze.left+H.left,width:pe}),this.setPlaceholderStyle({width:pe,height:H.height})}else l.type===T.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(l,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(l),this.setPlaceholderStyle();"resize"===l.type&&this.syncPlaceholderStyle(l)}updateRtlClass(){const l=this.fixedEl.nativeElement;"rtl"===this.dir&&l.classList.contains(F)?l.classList.add(`${F}-rtl`):l.classList.remove(`${F}-rtl`)}}return x.\u0275fac=function(l){return new(l||x)(i.Y36(i.SBq),i.Y36(e.K0),i.Y36(A.jY),i.Y36(K.MF),i.Y36(i.R0b),i.Y36(N.t4),i.Y36(i.Qsj),i.Y36(k.D3),i.Y36(i.sBO),i.Y36(Y.Is,8))},x.\u0275cmp=i.Xpm({type:x,selectors:[["nz-affix"]],viewQuery:function(l,P){if(1&l&&i.Gf(w,7),2&l){let $;i.iGM($=i.CRH())&&(P.fixedEl=$.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[i.TTD],ngContentSelectors:Z,decls:3,vars:0,consts:[["fixedEl",""]],template:function(l,P){1&l&&(i.F$t(),i.TgZ(0,"div",null,0),i.Hsn(2),i.qZA())},encapsulation:2,changeDetection:0}),(0,t.gn)([(0,A.oS)(),(0,O.Rn)(void 0)],x.prototype,"nzOffsetTop",void 0),(0,t.gn)([(0,A.oS)(),(0,O.Rn)(void 0)],x.prototype,"nzOffsetBottom",void 0),x})(),G=(()=>{class x{}return x.\u0275fac=function(l){return new(l||x)},x.\u0275mod=i.oAB({type:x}),x.\u0275inj=i.cJS({imports:[[Y.vT,e.ez,N.ud]]}),x})()},6699:(de,W,o)=>{o.d(W,{Dz:()=>N,Rt:()=>Y});var t=o(655),e=o(5e3),i=o(9439),s=o(1721),I=o(925),v=o(9808),a=o(5017),U=o(226);const c=["textEl"];function _(w,Z){if(1&w&&e._UZ(0,"i",3),2&w){const T=e.oxw();e.Q6J("nzType",T.nzIcon)}}function C(w,Z){if(1&w){const T=e.EpF();e.TgZ(0,"img",4),e.NdJ("error",function(X){return e.CHM(T),e.oxw().imgError(X)}),e.qZA()}if(2&w){const T=e.oxw();e.Q6J("src",T.nzSrc,e.LSH),e.uIk("srcset",T.nzSrcSet,e.LSH)("alt",T.nzAlt)}}function A(w,Z){if(1&w&&(e.TgZ(0,"span",5,6),e._uU(2),e.qZA()),2&w){const T=e.oxw();e.Q6J("ngStyle",T.textStyles),e.xp6(2),e.Oqu(T.nzText)}}let N=(()=>{class w{constructor(T,R,X,b){this.nzConfigService=T,this.elementRef=R,this.cdr=X,this.platform=b,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new e.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(T){this.nzError.emit(T),T.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const T=this.textEl.nativeElement.offsetWidth,R=this.el.getBoundingClientRect().width,X=2*this.nzGap<R?2*this.nzGap:8;this.textStyles={transform:`scale(${R-X<T?(R-X)/T:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return w.\u0275fac=function(T){return new(T||w)(e.Y36(i.jY),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.t4))},w.\u0275cmp=e.Xpm({type:w,selectors:[["nz-avatar"]],viewQuery:function(T,R){if(1&T&&e.Gf(c,5),2&T){let X;e.iGM(X=e.CRH())&&(R.textEl=X.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(T,R){2&T&&(e.Udp("width",R.customSize)("height",R.customSize)("line-height",R.customSize)("font-size",R.hasIcon&&R.customSize?R.nzSize/2:null,"px"),e.ekj("ant-avatar-lg","large"===R.nzSize)("ant-avatar-sm","small"===R.nzSize)("ant-avatar-square","square"===R.nzShape)("ant-avatar-circle","circle"===R.nzShape)("ant-avatar-icon",R.nzIcon)("ant-avatar-image",R.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[e.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(T,R){1&T&&(e.YNc(0,_,1,1,"i",0),e.YNc(1,C,1,3,"img",1),e.YNc(2,A,3,2,"span",2)),2&T&&(e.Q6J("ngIf",R.nzIcon&&R.hasIcon),e.xp6(1),e.Q6J("ngIf",R.nzSrc&&R.hasSrc),e.xp6(1),e.Q6J("ngIf",R.nzText&&R.hasText))},directives:[v.O5,a.Ls,v.PC],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,i.oS)()],w.prototype,"nzShape",void 0),(0,t.gn)([(0,i.oS)()],w.prototype,"nzSize",void 0),(0,t.gn)([(0,i.oS)(),(0,s.Rn)()],w.prototype,"nzGap",void 0),w})(),Y=(()=>{class w{}return w.\u0275fac=function(T){return new(T||w)},w.\u0275mod=e.oAB({type:w}),w.\u0275inj=e.cJS({imports:[[U.vT,v.ez,a.PV,I.ud]]}),w})()},4401:(de,W,o)=>{o.d(W,{F9:()=>x,mS:()=>L,x7:()=>G});var t=o(655),e=o(5e3),i=o(8929),s=o(7625),I=o(8076),v=o(9439),a=o(1721),U=o(226),c=o(4832),_=o(9808),C=o(969),A=o(7144);function O(l,P){if(1&l&&(e.TgZ(0,"p",6),e._uU(1),e.qZA()),2&l){const $=P.$implicit,y=e.oxw(2).index,H=e.oxw(2);e.ekj("current",$===H.countArray[y]),e.xp6(1),e.hij(" ",$," ")}}function K(l,P){if(1&l&&(e.ynx(0),e.YNc(1,O,2,3,"p",5),e.BQk()),2&l){const $=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",$.countSingleArray)}}function N(l,P){if(1&l&&(e.TgZ(0,"span",3),e.YNc(1,K,2,1,"ng-container",4),e.qZA()),2&l){const $=P.index,y=e.oxw(2);e.Udp("transform","translateY("+100*-y.countArray[$]+"%)"),e.Q6J("nzNoAnimation",y.noAnimation),e.xp6(1),e.Q6J("ngIf",!y.nzDot&&void 0!==y.countArray[$])}}function k(l,P){if(1&l&&(e.ynx(0),e.YNc(1,N,2,4,"span",2),e.BQk()),2&l){const $=e.oxw();e.xp6(1),e.Q6J("ngForOf",$.maxNumberArray)}}function Y(l,P){if(1&l&&e._uU(0),2&l){const $=e.oxw();e.hij("",$.nzOverflowCount,"+")}}function w(l,P){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const $=e.oxw(2);e.xp6(1),e.Oqu($.nzText)}}function Z(l,P){if(1&l&&(e.ynx(0),e._UZ(1,"span",2),e.TgZ(2,"span",3),e.YNc(3,w,2,1,"ng-container",1),e.qZA(),e.BQk()),2&l){const $=e.oxw();e.xp6(1),e.Gre("ant-badge-status-dot ant-badge-status-",$.nzStatus||$.presetColor,""),e.Udp("background",!$.presetColor&&$.nzColor),e.Q6J("ngStyle",$.nzStyle),e.xp6(2),e.Q6J("nzStringTemplateOutlet",$.nzText)}}function T(l,P){if(1&l&&e._UZ(0,"nz-badge-sup",5),2&l){const $=e.oxw(2);e.Q6J("nzOffset",$.nzOffset)("nzSize",$.nzSize)("nzTitle",$.nzTitle)("nzStyle",$.nzStyle)("nzDot",$.nzDot)("nzOverflowCount",$.nzOverflowCount)("disableAnimation",!!($.nzStandalone||$.nzStatus||$.nzColor||null!=$.noAnimation&&$.noAnimation.nzNoAnimation))("nzCount",$.nzCount)("noAnimation",!(null==$.noAnimation||!$.noAnimation.nzNoAnimation))}}function R(l,P){if(1&l&&(e.ynx(0),e.YNc(1,T,1,9,"nz-badge-sup",4),e.BQk()),2&l){const $=e.oxw();e.xp6(1),e.Q6J("ngIf",$.showSup)}}const X=["*"];function b(l,P){if(1&l&&(e.ynx(0),e.TgZ(1,"span",3),e._uU(2),e.qZA(),e.BQk()),2&l){const $=e.oxw();e.xp6(2),e.Oqu($.nzText)}}const F=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let g=(()=>{class l{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.nzSize="default",this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges($){const{nzOverflowCount:y,nzCount:H}=$;H&&"number"==typeof H.currentValue&&(this.count=Math.max(0,H.currentValue),this.countArray=this.count.toString().split("").map(ie=>+ie)),y&&this.generateMaxNumberArray()}}return l.\u0275fac=function($){return new($||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:17,hostBindings:function($,y){2&$&&(e.uIk("title",null===y.nzTitle?"":y.nzTitle||y.nzCount),e.d8E("@.disabled",y.disableAnimation)("@zoomBadgeMotion",void 0),e.Akn(y.nzStyle),e.Udp("right",y.nzOffset&&y.nzOffset[0]?-y.nzOffset[0]:null,"px")("margin-top",y.nzOffset&&y.nzOffset[1]?y.nzOffset[1]:null,"px"),e.ekj("ant-badge-count",!y.nzDot)("ant-badge-count-sm","small"===y.nzSize)("ant-badge-dot",y.nzDot)("ant-badge-multiple-words",y.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation",nzSize:"nzSize"},exportAs:["nzBadgeSup"],features:[e.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function($,y){if(1&$&&(e.YNc(0,k,2,1,"ng-container",0),e.YNc(1,Y,1,1,"ng-template",null,1,e.W1O)),2&$){const H=e.MAs(2);e.Q6J("ngIf",y.count<=y.nzOverflowCount)("ngIfElse",H)}},directives:[_.O5,_.sg,c.P],encapsulation:2,data:{animation:[I.Ev]},changeDetection:0}),l})(),G=(()=>{class l{constructor($,y,H,ie,ue,he){this.nzConfigService=$,this.renderer=y,this.cdr=H,this.elementRef=ie,this.directionality=ue,this.noAnimation=he,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new i.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null,this.nzSize="default"}ngOnInit(){var $;null===($=this.directionality.change)||void 0===$||$.pipe((0,s.R)(this.destroy$)).subscribe(y=>{this.dir=y,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges($){const{nzColor:y,nzShowDot:H,nzDot:ie,nzCount:ue,nzShowZero:he}=$;y&&(this.presetColor=this.nzColor&&-1!==F.indexOf(this.nzColor)?this.nzColor:null),(H||ie||ue||he)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function($){return new($||l)(e.Y36(v.jY),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(U.Is,8),e.Y36(c.P,9))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function($,y){2&$&&e.ekj("ant-badge-status",y.nzStatus)("ant-badge-not-a-wrapper",!!(y.nzStandalone||y.nzStatus||y.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset",nzSize:"nzSize"},exportAs:["nzBadge"],features:[e.TTD],ngContentSelectors:X,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzSize","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzSize","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function($,y){1&$&&(e.F$t(),e.YNc(0,Z,4,7,"ng-container",0),e.Hsn(1),e.YNc(2,R,2,1,"ng-container",1)),2&$&&(e.Q6J("ngIf",y.nzStatus||y.nzColor),e.xp6(2),e.Q6J("nzStringTemplateOutlet",y.nzCount))},directives:[g,_.O5,_.PC,C.f],encapsulation:2,data:{animation:[I.Ev]},changeDetection:0}),(0,t.gn)([(0,a.yF)()],l.prototype,"nzShowZero",void 0),(0,t.gn)([(0,a.yF)()],l.prototype,"nzShowDot",void 0),(0,t.gn)([(0,a.yF)()],l.prototype,"nzStandalone",void 0),(0,t.gn)([(0,a.yF)()],l.prototype,"nzDot",void 0),(0,t.gn)([(0,v.oS)()],l.prototype,"nzOverflowCount",void 0),(0,t.gn)([(0,v.oS)()],l.prototype,"nzColor",void 0),l})(),x=(()=>{class l{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges($){const{nzColor:y}=$;y&&(this.presetColor=this.nzColor&&-1!==F.indexOf(this.nzColor)?this.nzColor:null)}}return l.\u0275fac=function($){return new($||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[e.TTD],ngContentSelectors:X,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"],[1,"ant-ribbon-text"]],template:function($,y){1&$&&(e.F$t(),e.Hsn(0),e.TgZ(1,"div",0),e.YNc(2,b,3,1,"ng-container",1),e._UZ(3,"div",2),e.qZA()),2&$&&(e.xp6(1),e.Tol(y.presetColor&&"ant-ribbon-color-"+y.presetColor),e.Udp("background-color",!y.presetColor&&y.nzColor),e.ekj("ant-ribbon-placement-end","end"===y.nzPlacement)("ant-ribbon-placement-start","start"===y.nzPlacement),e.xp6(1),e.Q6J("nzStringTemplateOutlet",y.nzText),e.xp6(1),e.Udp("color",!y.presetColor&&y.nzColor))},directives:[C.f],encapsulation:2,changeDetection:0}),l})(),L=(()=>{class l{}return l.\u0275fac=function($){return new($||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[U.vT,_.ez,A.Q8,C.T,c.g]]}),l})()},7484:(de,W,o)=>{o.d(W,{_i:()=>ue,bd:()=>De,vh:()=>pe});var t=o(655),e=o(5e3),i=o(1721),s=o(8929),I=o(7625),v=o(9439),a=o(226),U=o(9808),c=o(969);function _(E,ne){1&E&&e.Hsn(0)}const C=["*"];function A(E,ne){1&E&&(e.TgZ(0,"div",4),e._UZ(1,"div",5),e.qZA()),2&E&&e.Q6J("ngClass",ne.$implicit)}function O(E,ne){if(1&E&&(e.TgZ(0,"div",2),e.YNc(1,A,2,1,"div",3),e.qZA()),2&E){const Q=ne.$implicit;e.xp6(1),e.Q6J("ngForOf",Q)}}function K(E,ne){if(1&E&&(e.ynx(0),e._uU(1),e.BQk()),2&E){const Q=e.oxw(3);e.xp6(1),e.Oqu(Q.nzTitle)}}function N(E,ne){if(1&E&&(e.TgZ(0,"div",11),e.YNc(1,K,2,1,"ng-container",12),e.qZA()),2&E){const Q=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",Q.nzTitle)}}function k(E,ne){if(1&E&&(e.ynx(0),e._uU(1),e.BQk()),2&E){const Q=e.oxw(3);e.xp6(1),e.Oqu(Q.nzExtra)}}function Y(E,ne){if(1&E&&(e.TgZ(0,"div",13),e.YNc(1,k,2,1,"ng-container",12),e.qZA()),2&E){const Q=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",Q.nzExtra)}}function w(E,ne){}function Z(E,ne){if(1&E&&(e.ynx(0),e.YNc(1,w,0,0,"ng-template",14),e.BQk()),2&E){const Q=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Q.listOfNzCardTabComponent.template)}}function T(E,ne){if(1&E&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,N,2,1,"div",8),e.YNc(3,Y,2,1,"div",9),e.qZA(),e.YNc(4,Z,2,1,"ng-container",10),e.qZA()),2&E){const Q=e.oxw();e.xp6(2),e.Q6J("ngIf",Q.nzTitle),e.xp6(1),e.Q6J("ngIf",Q.nzExtra),e.xp6(1),e.Q6J("ngIf",Q.listOfNzCardTabComponent)}}function R(E,ne){}function X(E,ne){if(1&E&&(e.TgZ(0,"div",15),e.YNc(1,R,0,0,"ng-template",14),e.qZA()),2&E){const Q=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",Q.nzCover)}}function b(E,ne){1&E&&(e.ynx(0),e.Hsn(1),e.BQk())}function F(E,ne){1&E&&e._UZ(0,"nz-card-loading")}function g(E,ne){}function B(E,ne){if(1&E&&(e.TgZ(0,"li")(1,"span"),e.YNc(2,g,0,0,"ng-template",14),e.qZA()()),2&E){const Q=ne.$implicit,se=e.oxw(2);e.Udp("width",100/se.nzActions.length,"%"),e.xp6(2),e.Q6J("ngTemplateOutlet",Q)}}function G(E,ne){if(1&E&&(e.TgZ(0,"ul",16),e.YNc(1,B,3,3,"li",17),e.qZA()),2&E){const Q=e.oxw();e.xp6(1),e.Q6J("ngForOf",Q.nzActions)}}let ie=(()=>{class E{constructor(){this.nzHoverable=!0}}return E.\u0275fac=function(Q){return new(Q||E)},E.\u0275dir=e.lG2({type:E,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(Q,se){2&Q&&e.ekj("ant-card-hoverable",se.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,t.gn)([(0,i.yF)()],E.prototype,"nzHoverable",void 0),E})(),ue=(()=>{class E{}return E.\u0275fac=function(Q){return new(Q||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["nz-card-tab"]],viewQuery:function(Q,se){if(1&Q&&e.Gf(e.Rgc,7),2&Q){let ee;e.iGM(ee=e.CRH())&&(se.template=ee.first)}},exportAs:["nzCardTab"],ngContentSelectors:C,decls:1,vars:0,template:function(Q,se){1&Q&&(e.F$t(),e.YNc(0,_,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),E})(),he=(()=>{class E{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return E.\u0275fac=function(Q){return new(Q||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(Q,se){1&Q&&(e.TgZ(0,"div",0),e.YNc(1,O,2,1,"div",1),e.qZA()),2&Q&&(e.xp6(1),e.Q6J("ngForOf",se.listOfLoading))},directives:[U.sg,U.mk],encapsulation:2,changeDetection:0}),E})(),De=(()=>{class E{constructor(Q,se,ee){this.nzConfigService=Q,this.cdr=se,this.directionality=ee,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,I.R)(this.destroy$)).subscribe(se=>{this.dir=se,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(Q){return new(Q||E)(e.Y36(v.jY),e.Y36(e.sBO),e.Y36(a.Is,8))},E.\u0275cmp=e.Xpm({type:E,selectors:[["nz-card"]],contentQueries:function(Q,se,ee){if(1&Q&&(e.Suo(ee,ue,5),e.Suo(ee,ie,4)),2&Q){let ge;e.iGM(ge=e.CRH())&&(se.listOfNzCardTabComponent=ge.first),e.iGM(ge=e.CRH())&&(se.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(Q,se){2&Q&&e.ekj("ant-card-loading",se.nzLoading)("ant-card-bordered",!1===se.nzBorderless&&se.nzBordered)("ant-card-hoverable",se.nzHoverable)("ant-card-small","small"===se.nzSize)("ant-card-contain-grid",se.listOfNzCardGridDirective&&se.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===se.nzType)("ant-card-contain-tabs",!!se.listOfNzCardTabComponent)("ant-card-rtl","rtl"===se.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:C,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(Q,se){if(1&Q&&(e.F$t(),e.YNc(0,T,5,3,"div",0),e.YNc(1,X,2,1,"div",1),e.TgZ(2,"div",2),e.YNc(3,b,2,0,"ng-container",3),e.YNc(4,F,1,0,"ng-template",null,4,e.W1O),e.qZA(),e.YNc(6,G,2,1,"ul",5)),2&Q){const ee=e.MAs(5);e.Q6J("ngIf",se.nzTitle||se.nzExtra||se.listOfNzCardTabComponent),e.xp6(1),e.Q6J("ngIf",se.nzCover),e.xp6(1),e.Q6J("ngStyle",se.nzBodyStyle),e.xp6(1),e.Q6J("ngIf",!se.nzLoading)("ngIfElse",ee),e.xp6(3),e.Q6J("ngIf",se.nzActions.length)}},directives:[he,U.O5,c.f,U.tP,U.PC,U.sg],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],E.prototype,"nzBordered",void 0),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],E.prototype,"nzBorderless",void 0),(0,t.gn)([(0,i.yF)()],E.prototype,"nzLoading",void 0),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],E.prototype,"nzHoverable",void 0),(0,t.gn)([(0,v.oS)()],E.prototype,"nzSize",void 0),E})(),pe=(()=>{class E{}return E.\u0275fac=function(Q){return new(Q||E)},E.\u0275mod=e.oAB({type:E}),E.\u0275inj=e.cJS({imports:[[U.ez,c.T],a.vT]}),E})()},5577:(de,W,o)=>{o.d(W,{D3:()=>v,y7:()=>U});var t=o(5e3),e=o(3191),i=o(2916),s=o(8929);let I=(()=>{class c{create(C){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(C)}}return c.\u0275fac=function(C){return new(C||c)},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),v=(()=>{class c{constructor(C){this.nzResizeObserverFactory=C,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((C,A)=>this.cleanupObserver(A))}observe(C){const A=(0,e.fI)(C);return new i.y(O=>{const N=this.observeElement(A).subscribe(O);return()=>{N.unsubscribe(),this.unobserveElement(A)}})}observeElement(C){if(this.observedElements.has(C))this.observedElements.get(C).count++;else{const A=new s.xQ,O=this.nzResizeObserverFactory.create(K=>A.next(K));O&&O.observe(C),this.observedElements.set(C,{observer:O,stream:A,count:1})}return this.observedElements.get(C).stream}unobserveElement(C){this.observedElements.has(C)&&(this.observedElements.get(C).count--,this.observedElements.get(C).count||this.cleanupObserver(C))}cleanupObserver(C){if(this.observedElements.has(C)){const{observer:A,stream:O}=this.observedElements.get(C);A&&A.disconnect(),O.complete(),this.observedElements.delete(C)}}}return c.\u0275fac=function(C){return new(C||c)(t.LFG(I))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),U=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({providers:[I]}),c})()},5482:(de,W,o)=>{o.d(W,{Zv:()=>g,cD:()=>B,yH:()=>b});var t=o(655),e=o(5e3),i=o(3753),s=o(7625),I=o(2198),v=o(8076),a=o(9439),U=o(4090),c=o(1721),_=o(226),C=o(4832),A=o(9808),O=o(969),K=o(5017);const N=["*"],k=["collapseHeader"];function Y(G,x){if(1&G&&(e.ynx(0),e._UZ(1,"i",7),e.BQk()),2&G){const L=x.$implicit,l=e.oxw(2);e.xp6(1),e.Q6J("nzType",L||"right")("nzRotate",l.nzActive?90:0)}}function w(G,x){if(1&G&&(e.TgZ(0,"div"),e.YNc(1,Y,2,2,"ng-container",3),e.qZA()),2&G){const L=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",L.nzExpandedIcon)}}function Z(G,x){if(1&G&&(e.ynx(0),e._uU(1),e.BQk()),2&G){const L=e.oxw();e.xp6(1),e.Oqu(L.nzHeader)}}function T(G,x){if(1&G&&(e.ynx(0),e._uU(1),e.BQk()),2&G){const L=e.oxw(2);e.xp6(1),e.Oqu(L.nzExtra)}}function R(G,x){if(1&G&&(e.TgZ(0,"div",8),e.YNc(1,T,2,1,"ng-container",3),e.qZA()),2&G){const L=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",L.nzExtra)}}const X="collapse";let b=(()=>{class G{constructor(L,l,P,$){this.nzConfigService=L,this.cdr=l,this.directionality=P,this.destroy$=$,this._nzModuleName=X,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(X).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var L;null===(L=this.directionality.change)||void 0===L||L.pipe((0,s.R)(this.destroy$)).subscribe(l=>{this.dir=l,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(L){this.listOfNzCollapsePanelComponent.push(L)}removePanel(L){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(L),1)}click(L){this.nzAccordion&&!L.nzActive&&this.listOfNzCollapsePanelComponent.filter(l=>l!==L).forEach(l=>{l.nzActive&&(l.nzActive=!1,l.nzActiveChange.emit(l.nzActive),l.markForCheck())}),L.nzActive=!L.nzActive,L.nzActiveChange.emit(L.nzActive)}}return G.\u0275fac=function(L){return new(L||G)(e.Y36(a.jY),e.Y36(e.sBO),e.Y36(_.Is,8),e.Y36(U.kn))},G.\u0275cmp=e.Xpm({type:G,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(L,l){2&L&&e.ekj("ant-collapse-icon-position-left","left"===l.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===l.nzExpandIconPosition)("ant-collapse-ghost",l.nzGhost)("ant-collapse-borderless",!l.nzBordered)("ant-collapse-rtl","rtl"===l.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[e._Bn([U.kn])],ngContentSelectors:N,decls:1,vars:0,template:function(L,l){1&L&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],G.prototype,"nzAccordion",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],G.prototype,"nzBordered",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],G.prototype,"nzGhost",void 0),G})();const F="collapsePanel";let g=(()=>{class G{constructor(L,l,P,$,y,H){this.nzConfigService=L,this.ngZone=l,this.cdr=P,this.destroy$=$,this.nzCollapseComponent=y,this.noAnimation=H,this._nzModuleName=F,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new e.vpe,this.nzConfigService.getConfigChangeEventForComponent(F).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,i.R)(this.collapseHeader.nativeElement,"click").pipe((0,I.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return G.\u0275fac=function(L){return new(L||G)(e.Y36(a.jY),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(U.kn),e.Y36(b,1),e.Y36(C.P,8))},G.\u0275cmp=e.Xpm({type:G,selectors:[["nz-collapse-panel"]],viewQuery:function(L,l){if(1&L&&e.Gf(k,7),2&L){let P;e.iGM(P=e.CRH())&&(l.collapseHeader=P.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(L,l){2&L&&e.ekj("ant-collapse-no-arrow",!l.nzShowArrow)("ant-collapse-item-active",l.nzActive)("ant-collapse-item-disabled",l.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[e._Bn([U.kn])],ngContentSelectors:N,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(L,l){1&L&&(e.F$t(),e.TgZ(0,"div",0,1),e.YNc(2,w,2,1,"div",2),e.YNc(3,Z,2,1,"ng-container",3),e.YNc(4,R,2,1,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e.Hsn(7),e.qZA()()),2&L&&(e.uIk("aria-expanded",l.nzActive),e.xp6(2),e.Q6J("ngIf",l.nzShowArrow),e.xp6(1),e.Q6J("nzStringTemplateOutlet",l.nzHeader),e.xp6(1),e.Q6J("ngIf",l.nzExtra),e.xp6(1),e.ekj("ant-collapse-content-active",l.nzActive),e.Q6J("@.disabled",null==l.noAnimation?null:l.noAnimation.nzNoAnimation)("@collapseMotion",l.nzActive?"expanded":"hidden"))},directives:[A.O5,O.f,K.Ls],encapsulation:2,data:{animation:[v.J_]},changeDetection:0}),(0,t.gn)([(0,c.yF)()],G.prototype,"nzActive",void 0),(0,t.gn)([(0,c.yF)()],G.prototype,"nzDisabled",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],G.prototype,"nzShowArrow",void 0),G})(),B=(()=>{class G{}return G.\u0275fac=function(L){return new(L||G)},G.\u0275mod=e.oAB({type:G}),G.\u0275inj=e.cJS({imports:[[_.vT,A.ez,K.PV,O.T,C.g]]}),G})()},3098:(de,W,o)=>{o.d(W,{R7:()=>Ie,q6:()=>Ae,uj:()=>_e});var t=o(226),e=o(925),i=o(9808),s=o(5e3),I=o(969),v=o(655),a=o(8929),U=o(6787),c=o(1721),_=o(7625),C=o(1059),A=o(7545),O=o(7138),K=o(2994),N=o(9439),k=o(948),Y=o(4090);function w(z,q){1&z&&s.Hsn(0)}const Z=["*"];function T(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzTitle)}}function R(z,q){if(1&z&&(s.TgZ(0,"div",6),s.YNc(1,T,2,1,"ng-container",7),s.qZA()),2&z){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function X(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzExtra)}}function b(z,q){if(1&z&&(s.TgZ(0,"div",8),s.YNc(1,X,2,1,"ng-container",7),s.qZA()),2&z){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function F(z,q){if(1&z&&(s.TgZ(0,"div",3),s.YNc(1,R,2,1,"div",4),s.YNc(2,b,2,1,"div",5),s.qZA()),2&z){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",D.nzTitle),s.xp6(1),s.Q6J("ngIf",D.nzExtra)}}function g(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function B(z,q){}function G(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,g,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,B,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&z){const D=s.oxw().$implicit,ce=s.oxw(3);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(2),s.Q6J("ngTemplateOutlet",D.content)}}function x(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function L(z,q){if(1&z&&(s.TgZ(0,"td",14),s.YNc(1,x,2,1,"ng-container",7),s.qZA()),2&z){const D=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function l(z,q){}function P(z,q){if(1&z&&(s.ynx(0),s.YNc(1,L,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,l,0,0,"ng-template",16),s.qZA(),s.BQk()),2&z){const D=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(1),s.Q6J("colSpan",2*D.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function $(z,q){if(1&z&&(s.ynx(0),s.YNc(1,G,7,5,"ng-container",2),s.YNc(2,P,4,3,"ng-container",2),s.BQk()),2&z){const D=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}function y(z,q){if(1&z&&(s.TgZ(0,"tr",10),s.YNc(1,$,3,2,"ng-container",11),s.qZA()),2&z){const D=q.$implicit;s.xp6(1),s.Q6J("ngForOf",D)}}function H(z,q){if(1&z&&(s.ynx(0),s.YNc(1,y,2,1,"tr",9),s.BQk()),2&z){const D=s.oxw();s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ie(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function ue(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ie,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&z){const D=q.$implicit,ce=s.oxw(4);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function he(z,q){}function ze(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,he,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&z){const D=q.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(3),s.Q6J("ngTemplateOutlet",D.content)}}function De(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,ue,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,ze,5,2,"ng-container",11),s.qZA(),s.BQk()),2&z){const D=q.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function te(z,q){if(1&z&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&z){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function pe(z,q){if(1&z&&(s.ynx(0),s._uU(1),s.BQk()),2&z){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function E(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,pe,2,1,"ng-container",7),s.qZA(),s.BQk()),2&z){const D=q.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function ne(z,q){}function Q(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,ne,0,0,"ng-template",16),s.qZA(),s.BQk()),2&z){const D=q.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function se(z,q){if(1&z&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,E,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Q,3,2,"ng-container",11),s.qZA(),s.BQk()),2&z){const D=q.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function ee(z,q){if(1&z&&(s.ynx(0),s.YNc(1,se,5,2,"ng-container",11),s.BQk()),2&z){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ge(z,q){if(1&z&&(s.ynx(0),s.YNc(1,te,2,1,"ng-container",2),s.YNc(2,ee,2,1,"ng-container",2),s.BQk()),2&z){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}let _e=(()=>{class z{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return z.\u0275fac=function(D){return new(D||z)},z.\u0275cmp=s.Xpm({type:z,selectors:[["nz-descriptions-item"]],viewQuery:function(D,ce){if(1&D&&s.Gf(s.Rgc,7),2&D){let Ce;s.iGM(Ce=s.CRH())&&(ce.content=Ce.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Z,decls:1,vars:0,template:function(D,ce){1&D&&(s.F$t(),s.YNc(0,w,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,v.gn)([(0,c.Rn)()],z.prototype,"nzSpan",void 0),z})();const Oe={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let Ie=(()=>{class z{constructor(D,ce,Ce,Se){this.nzConfigService=D,this.cdr=ce,this.breakpointService=Ce,this.directionality=Se,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Oe,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Y.G_.md,this.destroy$=new a.xQ}ngOnInit(){var D;this.dir=this.directionality.value,null===(D=this.directionality.change)||void 0===D||D.pipe((0,_.R)(this.destroy$)).subscribe(ce=>{this.dir=ce})}ngOnChanges(D){D.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const D=this.items.changes.pipe((0,C.O)(this.items),(0,_.R)(this.destroy$));(0,U.T)(D,D.pipe((0,A.w)(()=>(0,U.T)(...this.items.map(ce=>ce.inputChange$)).pipe((0,O.e)(16)))),this.breakpointService.subscribe(Y.WV).pipe((0,K.b)(ce=>this.breakpoint=ce))).pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let D=[],ce=0;const Ce=this.realColumn=this.getColumn(),Se=this.items.toArray(),$e=Se.length,Ge=[],Be=()=>{Ge.push(D),D=[],ce=0};for(let Pe=0;Pe<$e;Pe++){const Re=Se[Pe],{nzTitle:be,content:Qe,nzSpan:xe}=Re;ce+=xe,ce>=Ce?(ce>Ce&&(0,k.ZK)(`"nzColumn" is ${Ce} but we have row length ${ce}`),D.push({title:be,content:Qe,span:Ce-(ce-xe)}),Be()):Pe===$e-1?(D.push({title:be,content:Qe,span:Ce-(ce-xe)}),Be()):D.push({title:be,content:Qe,span:xe})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return z.\u0275fac=function(D){return new(D||z)(s.Y36(N.jY),s.Y36(s.sBO),s.Y36(Y.r3),s.Y36(t.Is,8))},z.\u0275cmp=s.Xpm({type:z,selectors:[["nz-descriptions"]],contentQueries:function(D,ce,Ce){if(1&D&&s.Suo(Ce,_e,4),2&D){let Se;s.iGM(Se=s.CRH())&&(ce.items=Se)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(D,ce){2&D&&s.ekj("ant-descriptions-bordered",ce.nzBordered)("ant-descriptions-middle","middle"===ce.nzSize)("ant-descriptions-small","small"===ce.nzSize)("ant-descriptions-rtl","rtl"===ce.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(D,ce){1&D&&(s.YNc(0,F,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,H,2,1,"ng-container",2),s.YNc(5,ge,3,2,"ng-container",2),s.qZA()()()),2&D&&(s.Q6J("ngIf",ce.nzTitle||ce.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ce.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ce.nzLayout))},directives:[i.O5,I.f,i.sg,i.tP],encapsulation:2,changeDetection:0}),(0,v.gn)([(0,c.yF)(),(0,N.oS)()],z.prototype,"nzBordered",void 0),(0,v.gn)([(0,N.oS)()],z.prototype,"nzColumn",void 0),(0,v.gn)([(0,N.oS)()],z.prototype,"nzSize",void 0),(0,v.gn)([(0,N.oS)(),(0,c.yF)()],z.prototype,"nzColon",void 0),z})(),Ae=(()=>{class z{}return z.\u0275fac=function(D){return new(D||z)},z.\u0275mod=s.oAB({type:z}),z.\u0275inj=s.cJS({imports:[[t.vT,i.ez,I.T,e.ud]]}),z})()},3677:(de,W,o)=>{o.d(W,{RR:()=>te,b1:()=>pe,cm:()=>ue,wA:()=>De});var t=o(655),e=o(1159),i=o(7429),s=o(5e3),I=o(8929),v=o(591),a=o(6787),U=o(3753),c=o(8896),_=o(6053),C=o(7604),A=o(4850),O=o(7545),K=o(2198),N=o(7138),k=o(5778),Y=o(7625),w=o(9439),Z=o(6950),T=o(1721),R=o(2845),X=o(925),b=o(226),F=o(9808),g=o(3075),B=o(6042),G=o(4832),x=o(969),L=o(5017),l=o(4219),P=o(8076);function $(Q,se){if(1&Q){const ee=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(_e){return s.CHM(ee),s.oxw().onAnimationEvent(_e)})("mouseenter",function(){return s.CHM(ee),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(ee),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&Q){const ee=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===ee.dir),s.Q6J("ngClass",ee.nzOverlayClassName)("ngStyle",ee.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)("nzNoAnimation",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)}}const y=["*"],ie=[Z.yW.bottomLeft,Z.yW.bottomRight,Z.yW.topRight,Z.yW.topLeft];let ue=(()=>{class Q{constructor(ee,ge,_e,Te,Oe,Ie){this.nzConfigService=ee,this.elementRef=ge,this.overlay=_e,this.renderer=Te,this.viewContainerRef=Oe,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new I.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new v.X(!1),this.nzTrigger$=new v.X("hover"),this.overlayClose$=new I.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(ee,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(ee,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const ee=this.elementRef.nativeElement,ge=(0,a.T)((0,U.R)(ee,"mouseenter").pipe((0,C.h)(!0)),(0,U.R)(ee,"mouseleave").pipe((0,C.h)(!1))),Te=(0,a.T)(this.nzDropdownMenu.mouseState$,ge),Oe=(0,U.R)(ee,"click").pipe((0,A.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,O.w)(D=>"hover"===D?Te:"click"===D?Oe:c.E)),Ae=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,K.h)(()=>this.nzClickHide),(0,C.h)(!1)),z=(0,a.T)(Ie,Ae,this.overlayClose$).pipe((0,K.h)(()=>!this.nzDisabled)),q=(0,a.T)(this.inputVisible$,z);(0,_.aj)([q,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,A.U)(([D,ce])=>D||ce),(0,N.e)(150),(0,k.x)(),(0,K.h)(()=>this.platform.isBrowser),(0,Y.R)(this.destroy$)).subscribe(D=>{const Ce=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:ee).getBoundingClientRect().width;this.nzVisible!==D&&this.nzVisibleChange.emit(D),this.nzVisible=D,D?(this.overlayRef?this.overlayRef.getConfig().minWidth=Ce:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Ce,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,K.h)(Se=>!this.elementRef.nativeElement.contains(Se.target))),this.overlayRef.keydownEvents().pipe((0,K.h)(Se=>Se.keyCode===e.hY&&!(0,e.Vb)(Se)))).pipe((0,Y.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Z.yW[this.nzPlacement],...ie]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new i.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Y.R)(this.destroy$)).subscribe(D=>{"void"===D.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(ee){const{nzVisible:ge,nzDisabled:_e,nzOverlayClassName:Te,nzOverlayStyle:Oe,nzTrigger:Ie}=ee;if(Ie&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),_e){const Ae=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ae,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ae,"disabled")}Te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Oe&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return Q.\u0275fac=function(ee){return new(ee||Q)(s.Y36(w.jY),s.Y36(s.SBq),s.Y36(R.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(X.t4))},Q.\u0275dir=s.lG2({type:Q,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,t.gn)([(0,w.oS)(),(0,T.yF)()],Q.prototype,"nzBackdrop",void 0),(0,t.gn)([(0,T.yF)()],Q.prototype,"nzClickHide",void 0),(0,t.gn)([(0,T.yF)()],Q.prototype,"nzDisabled",void 0),(0,t.gn)([(0,T.yF)()],Q.prototype,"nzVisible",void 0),Q})(),he=(()=>{class Q{}return Q.\u0275fac=function(ee){return new(ee||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({}),Q})(),De=(()=>{class Q{constructor(ee,ge,_e){this.renderer=ee,this.nzButtonGroupComponent=ge,this.elementRef=_e}ngAfterViewInit(){const ee=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&ee&&this.renderer.addClass(ee,"ant-dropdown-button")}}return Q.\u0275fac=function(ee){return new(ee||Q)(s.Y36(s.Qsj),s.Y36(B.fY,9),s.Y36(s.SBq))},Q.\u0275dir=s.lG2({type:Q,selectors:[["","nz-button","","nz-dropdown",""]]}),Q})(),te=(()=>{class Q{constructor(ee,ge,_e,Te,Oe,Ie,Ae){this.cdr=ee,this.elementRef=ge,this.renderer=_e,this.viewContainerRef=Te,this.nzMenuService=Oe,this.directionality=Ie,this.noAnimation=Ae,this.mouseState$=new v.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new I.xQ}onAnimationEvent(ee){this.animationStateChange$.emit(ee)}setMouseState(ee){this.mouseState$.next(ee)}setValue(ee,ge){this[ee]=ge,this.cdr.markForCheck()}ngOnInit(){var ee;null===(ee=this.directionality.change)||void 0===ee||ee.pipe((0,Y.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Q.\u0275fac=function(ee){return new(ee||Q)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(l.hl),s.Y36(b.Is,8),s.Y36(G.P,9))},Q.\u0275cmp=s.Xpm({type:Q,selectors:[["nz-dropdown-menu"]],viewQuery:function(ee,ge){if(1&ee&&s.Gf(s.Rgc,7),2&ee){let _e;s.iGM(_e=s.CRH())&&(ge.templateRef=_e.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([l.hl,{provide:l.Cc,useValue:!0}])],ngContentSelectors:y,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(ee,ge){1&ee&&(s.F$t(),s.YNc(0,$,2,7,"ng-template"))},directives:[F.mk,F.PC,G.P],encapsulation:2,data:{animation:[P.mF]},changeDetection:0}),Q})(),pe=(()=>{class Q{}return Q.\u0275fac=function(ee){return new(ee||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[[b.vT,F.ez,R.U8,g.u5,B.sL,l.ip,L.PV,G.g,X.ud,Z.e4,he,x.T],l.ip]}),Q})();new R.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new R.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new R.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new R.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(de,W,o)=>{o.d(W,{AA:()=>tt,I2:()=>je,IO:()=>ae,Ph:()=>rt,n_:()=>Xe,t4:()=>Ke,yi:()=>Le,yw:()=>Ee});var t=o(5e3),e=o(6699),i=o(9808),s=o(969),I=o(655),v=o(1721),a=o(8929),U=o(8514),c=o(1086),_=o(6787),C=o(2916),A=o(591),O=o(2986),K=o(7545),N=o(7625),k=o(4090),Y=o(685),w=o(226),Z=o(7525),T=o(1894);const R=["*"];function X(h,J){if(1&h&&t._UZ(0,"nz-avatar",3),2&h){const M=t.oxw();t.Q6J("nzSrc",M.nzSrc)}}function b(h,J){1&h&&t.Hsn(0,0,["*ngIf","!nzSrc"])}function F(h,J){if(1&h&&t._UZ(0,"nz-list-item-meta-avatar",3),2&h){const M=t.oxw();t.Q6J("nzSrc",M.avatarStr)}}function g(h,J){if(1&h&&(t.TgZ(0,"nz-list-item-meta-avatar"),t.GkF(1,4),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",M.avatarTpl)}}function B(h,J){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const M=t.oxw(3);t.xp6(1),t.Oqu(M.nzTitle)}}function G(h,J){if(1&h&&(t.TgZ(0,"nz-list-item-meta-title"),t.YNc(1,B,2,1,"ng-container",6),t.qZA()),2&h){const M=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzTitle)}}function x(h,J){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const M=t.oxw(3);t.xp6(1),t.Oqu(M.nzDescription)}}function L(h,J){if(1&h&&(t.TgZ(0,"nz-list-item-meta-description"),t.YNc(1,x,2,1,"ng-container",6),t.qZA()),2&h){const M=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzDescription)}}function l(h,J){if(1&h&&(t.TgZ(0,"div",5),t.YNc(1,G,2,1,"nz-list-item-meta-title",1),t.YNc(2,L,2,1,"nz-list-item-meta-description",1),t.Hsn(3,1),t.Hsn(4,2),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("ngIf",M.nzTitle&&!M.titleComponent),t.xp6(1),t.Q6J("ngIf",M.nzDescription&&!M.descriptionComponent)}}const P=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],$=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function y(h,J){1&h&&t.Hsn(0)}const H=["nz-list-item-actions",""];function ie(h,J){}function ue(h,J){1&h&&t._UZ(0,"em",3)}function he(h,J){if(1&h&&(t.TgZ(0,"li"),t.YNc(1,ie,0,0,"ng-template",1),t.YNc(2,ue,1,0,"em",2),t.qZA()),2&h){const M=J.$implicit,oe=J.last;t.xp6(1),t.Q6J("ngTemplateOutlet",M),t.xp6(1),t.Q6J("ngIf",!oe)}}function ze(h,J){}const De=function(h,J){return{$implicit:h,index:J}};function te(h,J){if(1&h&&(t.ynx(0),t.YNc(1,ze,0,0,"ng-template",9),t.BQk()),2&h){const M=J.$implicit,oe=J.index,ve=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",t.WLB(2,De,M,oe))}}function pe(h,J){if(1&h&&(t.TgZ(0,"div",7),t.YNc(1,te,2,5,"ng-container",8),t.Hsn(2,4),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("ngForOf",M.nzDataSource)}}function E(h,J){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const M=t.oxw(2);t.xp6(1),t.Oqu(M.nzHeader)}}function ne(h,J){if(1&h&&(t.TgZ(0,"nz-list-header"),t.YNc(1,E,2,1,"ng-container",10),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzHeader)}}function Q(h,J){1&h&&t._UZ(0,"div"),2&h&&t.Udp("min-height",53,"px")}function se(h,J){}function ee(h,J){if(1&h&&(t.TgZ(0,"div",13),t.YNc(1,se,0,0,"ng-template",9),t.qZA()),2&h){const M=J.$implicit,oe=J.index,ve=t.oxw(2);t.Q6J("nzSpan",ve.nzGrid.span||null)("nzXs",ve.nzGrid.xs||null)("nzSm",ve.nzGrid.sm||null)("nzMd",ve.nzGrid.md||null)("nzLg",ve.nzGrid.lg||null)("nzXl",ve.nzGrid.xl||null)("nzXXl",ve.nzGrid.xxl||null),t.xp6(1),t.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",t.WLB(9,De,M,oe))}}function ge(h,J){if(1&h&&(t.TgZ(0,"div",11),t.YNc(1,ee,2,12,"div",12),t.qZA()),2&h){const M=t.oxw();t.Q6J("nzGutter",M.nzGrid.gutter||null),t.xp6(1),t.Q6J("ngForOf",M.nzDataSource)}}function _e(h,J){if(1&h&&t._UZ(0,"nz-list-empty",14),2&h){const M=t.oxw();t.Q6J("nzNoResult",M.nzNoResult)}}function Te(h,J){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const M=t.oxw(2);t.xp6(1),t.Oqu(M.nzFooter)}}function Oe(h,J){if(1&h&&(t.TgZ(0,"nz-list-footer"),t.YNc(1,Te,2,1,"ng-container",10),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzFooter)}}function Ie(h,J){}function Ae(h,J){}function z(h,J){if(1&h&&(t.TgZ(0,"nz-list-pagination"),t.YNc(1,Ae,0,0,"ng-template",6),t.qZA()),2&h){const M=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",M.nzPagination)}}const q=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],D=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ce(h,J){if(1&h&&t._UZ(0,"ul",6),2&h){const M=t.oxw(2);t.Q6J("nzActions",M.nzActions)}}function Ce(h,J){if(1&h&&(t.YNc(0,ce,1,1,"ul",5),t.Hsn(1)),2&h){const M=t.oxw();t.Q6J("ngIf",M.nzActions&&M.nzActions.length>0)}}function Se(h,J){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const M=t.oxw(3);t.xp6(1),t.Oqu(M.nzContent)}}function $e(h,J){if(1&h&&(t.ynx(0),t.YNc(1,Se,2,1,"ng-container",8),t.BQk()),2&h){const M=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzContent)}}function Ge(h,J){if(1&h&&(t.Hsn(0,1),t.Hsn(1,2),t.YNc(2,$e,2,1,"ng-container",7)),2&h){const M=t.oxw();t.xp6(2),t.Q6J("ngIf",M.nzContent)}}function Be(h,J){1&h&&t.Hsn(0,3)}function Pe(h,J){}function Re(h,J){}function be(h,J){}function Qe(h,J){}function xe(h,J){if(1&h&&(t.YNc(0,Pe,0,0,"ng-template",9),t.YNc(1,Re,0,0,"ng-template",9),t.YNc(2,be,0,0,"ng-template",9),t.YNc(3,Qe,0,0,"ng-template",9)),2&h){const M=t.oxw(),oe=t.MAs(3),ve=t.MAs(5),ye=t.MAs(1);t.Q6J("ngTemplateOutlet",oe),t.xp6(1),t.Q6J("ngTemplateOutlet",M.nzExtra),t.xp6(1),t.Q6J("ngTemplateOutlet",ve),t.xp6(1),t.Q6J("ngTemplateOutlet",ye)}}function Ye(h,J){}function Ze(h,J){}function We(h,J){}function Je(h,J){if(1&h&&(t.TgZ(0,"nz-list-item-extra"),t.YNc(1,We,0,0,"ng-template",9),t.qZA()),2&h){const M=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",M.nzExtra)}}function V(h,J){}function le(h,J){if(1&h&&(t.ynx(0),t.TgZ(1,"div",10),t.YNc(2,Ye,0,0,"ng-template",9),t.YNc(3,Ze,0,0,"ng-template",9),t.qZA(),t.YNc(4,Je,2,1,"nz-list-item-extra",7),t.YNc(5,V,0,0,"ng-template",9),t.BQk()),2&h){const M=t.oxw(),oe=t.MAs(3),ve=t.MAs(1),ye=t.MAs(5);t.xp6(2),t.Q6J("ngTemplateOutlet",oe),t.xp6(1),t.Q6J("ngTemplateOutlet",ve),t.xp6(1),t.Q6J("ngIf",M.nzExtra),t.xp6(1),t.Q6J("ngTemplateOutlet",ye)}}const f=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ae=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(M,oe){1&M&&(t.F$t(),t.TgZ(0,"h4",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),h})(),me=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(M,oe){1&M&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),h})(),Me=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:R,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(M,oe){1&M&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,X,1,1,"nz-avatar",1),t.YNc(2,b,1,0,"ng-content",2),t.qZA()),2&M&&(t.xp6(1),t.Q6J("ngIf",oe.nzSrc),t.xp6(1),t.Q6J("ngIf",!oe.nzSrc))},directives:[e.Dz,i.O5],encapsulation:2,changeDetection:0}),h})(),Le=(()=>{class h{constructor(M,oe){this.elementRef=M,this.renderer=oe,this.avatarStr="",this.renderer.addClass(M.nativeElement,"ant-list-item-meta")}set nzAvatar(M){M instanceof t.Rgc?(this.avatarStr="",this.avatarTpl=M):this.avatarStr=M}}return h.\u0275fac=function(M){return new(M||h)(t.Y36(t.SBq),t.Y36(t.Qsj))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(M,oe,ve){if(1&M&&(t.Suo(ve,me,5),t.Suo(ve,ae,5)),2&M){let ye;t.iGM(ye=t.CRH())&&(oe.descriptionComponent=ye.first),t.iGM(ye=t.CRH())&&(oe.titleComponent=ye.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:$,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(M,oe){1&M&&(t.F$t(P),t.YNc(0,F,1,1,"nz-list-item-meta-avatar",0),t.YNc(1,g,2,1,"nz-list-item-meta-avatar",1),t.Hsn(2),t.YNc(3,l,5,2,"div",2)),2&M&&(t.Q6J("ngIf",oe.avatarStr),t.xp6(1),t.Q6J("ngIf",oe.avatarTpl),t.xp6(2),t.Q6J("ngIf",oe.nzTitle||oe.nzDescription||oe.descriptionComponent||oe.titleComponent))},directives:[Me,ae,me,i.O5,i.tP,s.f],encapsulation:2,changeDetection:0}),h})(),Ee=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:R,decls:1,vars:0,template:function(M,oe){1&M&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),Ue=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-action"]],viewQuery:function(M,oe){if(1&M&&t.Gf(t.Rgc,5),2&M){let ve;t.iGM(ve=t.CRH())&&(oe.templateRef=ve.first)}},exportAs:["nzListItemAction"],ngContentSelectors:R,decls:1,vars:0,template:function(M,oe){1&M&&(t.F$t(),t.YNc(0,y,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),h})(),Ve=(()=>{class h{constructor(M,oe,ve){this.ngZone=M,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,U.P)(()=>this.nzListItemActions?(0,c.of)(null):this.ngZone.onStable.pipe((0,O.q)(1),this.enterZone(),(0,K.w)(()=>this.contentChildrenChanges$))),(0,_.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,N.R)(ve)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ye=>ye.templateRef),oe.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return M=>new C.y(oe=>M.subscribe({next:ve=>this.ngZone.run(()=>oe.next(ve))}))}}return h.\u0275fac=function(M){return new(M||h)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(k.kn))},h.\u0275cmp=t.Xpm({type:h,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(M,oe,ve){if(1&M&&t.Suo(ve,Ue,4),2&M){let ye;t.iGM(ye=t.CRH())&&(oe.nzListItemActions=ye)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[t._Bn([k.kn]),t.TTD],attrs:H,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(M,oe){1&M&&t.YNc(0,he,3,2,"li",0),2&M&&t.Q6J("ngForOf",oe.actions)},directives:[i.sg,i.tP,i.O5],encapsulation:2,changeDetection:0}),h})(),je=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(M,oe){1&M&&t._UZ(0,"nz-embed-empty",0),2&M&&t.Q6J("nzComponentName","list")("specificContent",oe.nzNoResult)},directives:[Y.gB],encapsulation:2,changeDetection:0}),h})(),Ke=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(M,oe){1&M&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),He=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:R,decls:1,vars:0,template:function(M,oe){1&M&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),ke=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:R,decls:1,vars:0,template:function(M,oe){1&M&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),et=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275dir=t.lG2({type:h,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),h})(),Xe=(()=>{class h{constructor(M){this.directionality=M,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new A.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var M;this.dir=this.directionality.value,null===(M=this.directionality.change)||void 0===M||M.pipe((0,N.R)(this.destroy$)).subscribe(oe=>{this.dir=oe})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(M){M.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return h.\u0275fac=function(M){return new(M||h)(t.Y36(w.Is,8))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(M,oe,ve){if(1&M&&(t.Suo(ve,He,5),t.Suo(ve,ke,5),t.Suo(ve,et,5)),2&M){let ye;t.iGM(ye=t.CRH())&&(oe.nzListFooterComponent=ye.first),t.iGM(ye=t.CRH())&&(oe.nzListPaginationComponent=ye.first),t.iGM(ye=t.CRH())&&(oe.nzListLoadMoreDirective=ye.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(M,oe){2&M&&t.ekj("ant-list-rtl","rtl"===oe.dir)("ant-list-vertical","vertical"===oe.nzItemLayout)("ant-list-lg","large"===oe.nzSize)("ant-list-sm","small"===oe.nzSize)("ant-list-split",oe.nzSplit)("ant-list-bordered",oe.nzBordered)("ant-list-loading",oe.nzLoading)("ant-list-something-after-last-item",oe.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[t.TTD],ngContentSelectors:D,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(M,oe){if(1&M&&(t.F$t(q),t.YNc(0,pe,3,1,"ng-template",null,0,t.W1O),t.YNc(2,ne,2,1,"nz-list-header",1),t.Hsn(3),t.TgZ(4,"nz-spin",2),t.ynx(5),t.YNc(6,Q,1,2,"div",3),t.YNc(7,ge,2,2,"div",4),t.YNc(8,_e,1,1,"nz-list-empty",5),t.BQk(),t.qZA(),t.YNc(9,Oe,2,1,"nz-list-footer",1),t.Hsn(10,1),t.YNc(11,Ie,0,0,"ng-template",6),t.Hsn(12,2),t.YNc(13,z,2,1,"nz-list-pagination",1),t.Hsn(14,3)),2&M){const ve=t.MAs(1);t.xp6(2),t.Q6J("ngIf",oe.nzHeader),t.xp6(2),t.Q6J("nzSpinning",oe.nzLoading),t.xp6(2),t.Q6J("ngIf",oe.nzLoading&&oe.nzDataSource&&0===oe.nzDataSource.length),t.xp6(1),t.Q6J("ngIf",oe.nzGrid&&oe.nzDataSource)("ngIfElse",ve),t.xp6(1),t.Q6J("ngIf",!oe.nzLoading&&oe.nzDataSource&&0===oe.nzDataSource.length),t.xp6(1),t.Q6J("ngIf",oe.nzFooter),t.xp6(2),t.Q6J("ngTemplateOutlet",oe.nzLoadMore),t.xp6(2),t.Q6J("ngIf",oe.nzPagination)}},directives:[Ke,Z.W,je,He,ke,i.sg,i.tP,i.O5,s.f,T.SK,T.t3],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,v.yF)()],h.prototype,"nzBordered",void 0),(0,I.gn)([(0,v.yF)()],h.prototype,"nzLoading",void 0),(0,I.gn)([(0,v.yF)()],h.prototype,"nzSplit",void 0),h})(),tt=(()=>{class h{constructor(M,oe,ve,ye){this.parentComp=ve,this.cdr=ye,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,oe.addClass(M.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(M=>{this.itemLayout=M,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return h.\u0275fac=function(M){return new(M||h)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Xe),t.Y36(t.sBO))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(M,oe,ve){if(1&M&&t.Suo(ve,Ee,5),2&M){let ye;t.iGM(ye=t.CRH())&&(oe.listItemExtraDirective=ye.first)}},hostVars:2,hostBindings:function(M,oe){2&M&&t.ekj("ant-list-item-no-flex",oe.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(M,oe){if(1&M&&(t.F$t(f),t.YNc(0,Ce,2,1,"ng-template",null,0,t.W1O),t.YNc(2,Ge,3,1,"ng-template",null,1,t.W1O),t.YNc(4,Be,1,0,"ng-template",null,2,t.W1O),t.YNc(6,xe,4,4,"ng-template",null,3,t.W1O),t.YNc(8,le,6,4,"ng-container",4)),2&M){const ve=t.MAs(7);t.xp6(8),t.Q6J("ngIf",oe.isVerticalAndExtra)("ngIfElse",ve)}},directives:[Ve,Ee,i.O5,s.f,i.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,v.yF)()],h.prototype,"nzNoFlex",void 0),h})(),rt=(()=>{class h{}return h.\u0275fac=function(M){return new(M||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[[w.vT,i.ez,Z.j,T.Jb,e.Rt,s.T,Y.Xo]]}),h})()},4219:(de,W,o)=>{o.d(W,{Cc:()=>z,YV:()=>We,hl:()=>D,ip:()=>Je,r9:()=>Ce,uA:()=>Ze,wO:()=>xe});var t=o(655),e=o(5e3),i=o(8929),s=o(591),I=o(6787),v=o(6053),a=o(4850),U=o(1709),c=o(2198),_=o(7604),C=o(7138),A=o(5778),O=o(7625),K=o(1059),N=o(7545),k=o(1721),Y=o(325),w=o(226),Z=o(2845),T=o(6950),R=o(925),X=o(4832),b=o(9808),F=o(5017),g=o(969),B=o(8076);const G=["nz-submenu-title",""];function x(V,le){if(1&V&&e._UZ(0,"i",4),2&V){const f=e.oxw();e.Q6J("nzType",f.nzIcon)}}function L(V,le){if(1&V&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&V){const f=e.oxw();e.xp6(2),e.Oqu(f.nzTitle)}}function l(V,le){1&V&&e._UZ(0,"i",8)}function P(V,le){1&V&&e._UZ(0,"i",9)}function $(V,le){if(1&V&&(e.TgZ(0,"span",5),e.YNc(1,l,1,0,"i",6),e.YNc(2,P,1,0,"i",7),e.qZA()),2&V){const f=e.oxw();e.Q6J("ngSwitch",f.dir),e.xp6(1),e.Q6J("ngSwitchCase","rtl")}}function y(V,le){1&V&&e._UZ(0,"i",10)}const H=["*"],ie=["nz-submenu-inline-child",""];function ue(V,le){}const he=["nz-submenu-none-inline-child",""];function ze(V,le){}const De=["nz-submenu",""];function te(V,le){1&V&&e.Hsn(0,0,["*ngIf","!nzTitle"])}function pe(V,le){if(1&V&&e._UZ(0,"div",6),2&V){const f=e.oxw(),m=e.MAs(7);e.Q6J("mode",f.mode)("nzOpen",f.nzOpen)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("menuClass",f.nzMenuClassName)("templateOutlet",m)}}function E(V,le){if(1&V){const f=e.EpF();e.TgZ(0,"div",8),e.NdJ("subMenuMouseState",function(ae){return e.CHM(f),e.oxw(2).setMouseEnterState(ae)}),e.qZA()}if(2&V){const f=e.oxw(2),m=e.MAs(7);e.Q6J("theme",f.theme)("mode",f.mode)("nzOpen",f.nzOpen)("position",f.position)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("templateOutlet",m)("menuClass",f.nzMenuClassName)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)}}function ne(V,le){if(1&V){const f=e.EpF();e.YNc(0,E,1,10,"ng-template",7),e.NdJ("positionChange",function(ae){return e.CHM(f),e.oxw().onPositionChange(ae)})}if(2&V){const f=e.oxw(),m=e.MAs(1);e.Q6J("cdkConnectedOverlayPositions",f.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",f.triggerWidth)("cdkConnectedOverlayOpen",f.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function Q(V,le){1&V&&e.Hsn(0,1)}const se=[[["","title",""]],"*"],ee=["[title]","*"],ge=["titleElement"],_e=["nz-menu-group",""];function Te(V,le){if(1&V&&(e.ynx(0),e._uU(1),e.BQk()),2&V){const f=e.oxw();e.xp6(1),e.Oqu(f.nzTitle)}}function Oe(V,le){1&V&&e.Hsn(0,1,["*ngIf","!nzTitle"])}const Ie=["*",[["","title",""]]],Ae=["*","[title]"],z=new e.OlP("NzIsInDropDownMenuToken"),q=new e.OlP("NzMenuServiceLocalToken");let D=(()=>{class V{constructor(){this.descendantMenuItemClick$=new i.xQ,this.childMenuItemClick$=new i.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(f){this.descendantMenuItemClick$.next(f)}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setMode(f){this.mode$.next(f)}setTheme(f){this.theme$.next(f)}setInlineIndent(f){this.inlineIndent$.next(f)}}return V.\u0275fac=function(f){return new(f||V)},V.\u0275prov=e.Yz7({token:V,factory:V.\u0275fac}),V})(),ce=(()=>{class V{constructor(f,m,ae){this.nzHostSubmenuService=f,this.nzMenuService=m,this.isMenuInsideDropDown=ae,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Ee=>"inline"===Ee?"inline":"vertical"===Ee||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new i.xQ,this.childMenuItemClick$=new i.xQ,this.destroy$=new i.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const me=this.childMenuItemClick$.pipe((0,U.zg)(()=>this.mode$),(0,c.h)(Ee=>"inline"!==Ee||this.isMenuInsideDropDown),(0,_.h)(!1)),Me=(0,I.T)(this.isMouseEnterTitleOrOverlay$,me);(0,v.aj)([this.isChildSubMenuOpen$,Me]).pipe((0,a.U)(([Ee,Ue])=>Ee||Ue),(0,C.e)(150),(0,A.x)(),(0,O.R)(this.destroy$)).pipe((0,A.x)()).subscribe(Ee=>{this.setOpenStateWithoutDebounce(Ee),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Ee):this.nzMenuService.isChildSubMenuOpen$.next(Ee)})}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setOpenStateWithoutDebounce(f){this.isCurrentSubMenuOpen$.next(f)}setMouseEnterTitleOrOverlayState(f){this.isMouseEnterTitleOrOverlay$.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(f){return new(f||V)(e.LFG(V,12),e.LFG(D),e.LFG(z))},V.\u0275prov=e.Yz7({token:V,factory:V.\u0275fac}),V})(),Ce=(()=>{class V{constructor(f,m,ae,me,Me,Le,Ee,Ue){this.nzMenuService=f,this.cdr=m,this.nzSubmenuService=ae,this.isMenuInsideDropDown=me,this.directionality=Me,this.routerLink=Le,this.routerLinkWithHref=Ee,this.router=Ue,this.destroy$=new i.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new i.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,O.R)(this.destroy$),(0,c.h)(Ve=>Ve instanceof Y.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(f){this.nzDisabled?(f.preventDefault(),f.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(f){this.nzSelected=f,this.selected$.next(f)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const f=this.hasActiveLinks();this.nzSelected!==f&&(this.nzSelected=f,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const f=this.isLinkActive(this.router);return this.routerLink&&f(this.routerLink)||this.routerLinkWithHref&&f(this.routerLinkWithHref)||this.listOfRouterLink.some(f)||this.listOfRouterLinkWithHref.some(f)}isLinkActive(f){return m=>f.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var f;(0,v.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,O.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,O.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,O.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(f){f.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(D),e.Y36(e.sBO),e.Y36(ce,8),e.Y36(z),e.Y36(w.Is,8),e.Y36(Y.rH,8),e.Y36(Y.yS,8),e.Y36(Y.F0,8))},V.\u0275dir=e.lG2({type:V,selectors:[["","nz-menu-item",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,Y.rH,5),e.Suo(ae,Y.yS,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfRouterLink=me),e.iGM(me=e.CRH())&&(m.listOfRouterLinkWithHref=me)}},hostVars:20,hostBindings:function(f,m){1&f&&e.NdJ("click",function(me){return m.clickMenuItem(me)}),2&f&&(e.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),e.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[e.TTD]}),(0,t.gn)([(0,k.yF)()],V.prototype,"nzDisabled",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzSelected",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzDanger",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzMatchRouterExact",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzMatchRouter",void 0),V})(),Se=(()=>{class V{constructor(f,m){this.cdr=f,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new e.vpe,this.subMenuMouseState=new e.vpe,this.dir="ltr",this.destroy$=new i.xQ}ngOnInit(){var f;this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(e.sBO),e.Y36(w.Is,8))},V.\u0275cmp=e.Xpm({type:V,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(f,m){1&f&&e.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&f&&(e.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),e.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:G,ngContentSelectors:H,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(f,m){if(1&f&&(e.F$t(),e.YNc(0,x,1,1,"i",0),e.YNc(1,L,3,1,"ng-container",1),e.Hsn(2),e.YNc(3,$,3,2,"span",2),e.YNc(4,y,1,0,"ng-template",null,3,e.W1O)),2&f){const ae=e.MAs(5);e.Q6J("ngIf",m.nzIcon),e.xp6(1),e.Q6J("nzStringTemplateOutlet",m.nzTitle),e.xp6(2),e.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ae)}},directives:[b.O5,F.Ls,g.f,b.RF,b.n9,b.ED],encapsulation:2,changeDetection:0}),V})(),$e=(()=>{class V{constructor(f,m,ae){this.elementRef=f,this.renderer=m,this.directionality=ae,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new i.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(f){const{mode:m,nzOpen:ae,menuClass:me}=f;(m||ae)&&this.calcMotionState(),me&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.removeClass(this.elementRef.nativeElement,Me)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.addClass(this.elementRef.nativeElement,Me)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(w.Is,8))},V.\u0275cmp=e.Xpm({type:V,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(f,m){2&f&&(e.d8E("@collapseMotion",m.expandState),e.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[e.TTD],attrs:ie,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(f,m){1&f&&e.YNc(0,ue,0,0,"ng-template",0),2&f&&e.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[b.tP],encapsulation:2,data:{animation:[B.J_]},changeDetection:0}),V})(),Ge=(()=>{class V{constructor(f){this.directionality=f,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new e.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new i.xQ}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(f){const{mode:m,nzOpen:ae}=f;(m||ae)&&this.calcMotionState()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(w.Is,8))},V.\u0275cmp=e.Xpm({type:V,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(f,m){1&f&&e.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&f&&(e.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),e.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[e.TTD],attrs:he,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(f,m){1&f&&(e.TgZ(0,"div",0),e.YNc(1,ze,0,0,"ng-template",1),e.qZA()),2&f&&(e.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),e.Q6J("ngClass",m.menuClass),e.xp6(1),e.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[b.mk,b.tP],encapsulation:2,data:{animation:[B.$C,B.mF]},changeDetection:0}),V})();const Be=[T.yW.rightTop,T.yW.right,T.yW.rightBottom,T.yW.leftTop,T.yW.left,T.yW.leftBottom],Pe=[T.yW.bottomLeft];let Re=(()=>{class V{constructor(f,m,ae,me,Me,Le,Ee){this.nzMenuService=f,this.cdr=m,this.nzSubmenuService=ae,this.platform=me,this.isMenuInsideDropDown=Me,this.directionality=Le,this.noAnimation=Ee,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new e.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new i.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(f){this.nzSubmenuService.setOpenStateWithoutDebounce(f)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(f){this.isActive=f,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(f)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(f){const m=(0,T.d_)(f);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var f;this.nzMenuService.theme$.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Pe:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,v.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,O.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const f=this.listOfNzMenuItemDirective,m=f.changes,ae=(0,I.T)(m,...f.map(me=>me.selected$));m.pipe((0,K.O)(f),(0,N.w)(()=>ae),(0,K.O)(!0),(0,a.U)(()=>f.some(me=>me.nzSelected)),(0,O.R)(this.destroy$)).subscribe(me=>{this.isSelected=me,this.cdr.markForCheck()})}ngOnChanges(f){const{nzOpen:m}=f;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(D),e.Y36(e.sBO),e.Y36(ce),e.Y36(R.t4),e.Y36(z),e.Y36(w.Is,8),e.Y36(X.P,9))},V.\u0275cmp=e.Xpm({type:V,selectors:[["","nz-submenu",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,V,5),e.Suo(ae,Ce,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfNzSubMenuComponent=me),e.iGM(me=e.CRH())&&(m.listOfNzMenuItemDirective=me)}},viewQuery:function(f,m){if(1&f&&e.Gf(Z.xu,7,e.SBq),2&f){let ae;e.iGM(ae=e.CRH())&&(m.cdkOverlayOrigin=ae.first)}},hostVars:34,hostBindings:function(f,m){2&f&&e.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[e._Bn([ce]),e.TTD],attrs:De,ngContentSelectors:ee,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(f,m){if(1&f&&(e.F$t(se),e.TgZ(0,"div",0,1),e.NdJ("subMenuMouseState",function(me){return m.setMouseEnterState(me)})("toggleSubMenu",function(){return m.toggleSubMenu()}),e.YNc(2,te,1,0,"ng-content",2),e.qZA(),e.YNc(3,pe,1,6,"div",3),e.YNc(4,ne,1,5,"ng-template",null,4,e.W1O),e.YNc(6,Q,1,0,"ng-template",null,5,e.W1O)),2&f){const ae=e.MAs(5);e.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),e.xp6(2),e.Q6J("ngIf",!m.nzTitle),e.xp6(1),e.Q6J("ngIf","inline"===m.mode)("ngIfElse",ae)}},directives:[Se,$e,Ge,Z.xu,b.O5,X.P,Z.pI],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,k.yF)()],V.prototype,"nzOpen",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzDisabled",void 0),V})();function be(V,le){return V||le}function Qe(V){return V||!1}let xe=(()=>{class V{constructor(f,m,ae,me){this.nzMenuService=f,this.isMenuInsideDropDown=m,this.cdr=ae,this.directionality=me,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new e.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new i.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(f){this.nzInlineCollapsed=f,this.inlineCollapsed$.next(f)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(f=>f.nzOpen),this.listOfNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var f;(0,v.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,O.R)(this.destroy$)).subscribe(([m,ae])=>{this.actualMode=m?"vertical":ae,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ae=>ae.setSelectedState(ae===m))}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,O.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,O.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(f){const{nzInlineCollapsed:m,nzInlineIndent:ae,nzTheme:me,nzMode:Me}=f;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ae&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),me&&this.nzMenuService.setTheme(this.nzTheme),Me&&(this.mode$.next(this.nzMode),!f.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Le=>Le.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(D),e.Y36(z),e.Y36(e.sBO),e.Y36(w.Is,8))},V.\u0275dir=e.lG2({type:V,selectors:[["","nz-menu",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,Ce,5),e.Suo(ae,Re,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfNzMenuItemDirective=me),e.iGM(me=e.CRH())&&(m.listOfNzSubMenuComponent=me)}},hostVars:34,hostBindings:function(f,m){2&f&&e.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[e._Bn([{provide:q,useClass:D},{provide:D,useFactory:be,deps:[[new e.tp0,new e.FiY,D],q]},{provide:z,useFactory:Qe,deps:[[new e.tp0,new e.FiY,z]]}]),e.TTD]}),(0,t.gn)([(0,k.yF)()],V.prototype,"nzInlineCollapsed",void 0),(0,t.gn)([(0,k.yF)()],V.prototype,"nzSelectable",void 0),V})();function Ye(V){return V||!1}let Ze=(()=>{class V{constructor(f,m,ae){this.elementRef=f,this.renderer=m,this.isMenuInsideDropDown=ae,this.renderer.addClass(f.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const f=this.titleElement.nativeElement.nextElementSibling;f&&this.renderer.addClass(f,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(z))},V.\u0275cmp=e.Xpm({type:V,selectors:[["","nz-menu-group",""]],viewQuery:function(f,m){if(1&f&&e.Gf(ge,5),2&f){let ae;e.iGM(ae=e.CRH())&&(m.titleElement=ae.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[e._Bn([{provide:z,useFactory:Ye,deps:[[new e.tp0,new e.FiY,z]]}])],attrs:_e,ngContentSelectors:Ae,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(f,m){1&f&&(e.F$t(Ie),e.TgZ(0,"div",null,0),e.YNc(2,Te,2,1,"ng-container",1),e.YNc(3,Oe,1,0,"ng-content",2),e.qZA(),e.Hsn(4)),2&f&&(e.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),e.xp6(2),e.Q6J("nzStringTemplateOutlet",m.nzTitle),e.xp6(1),e.Q6J("ngIf",!m.nzTitle))},directives:[g.f,b.O5],encapsulation:2,changeDetection:0}),V})(),We=(()=>{class V{constructor(f,m){this.elementRef=f,this.renderer=m,this.renderer.addClass(f.nativeElement,"ant-dropdown-menu-item-divider")}}return V.\u0275fac=function(f){return new(f||V)(e.Y36(e.SBq),e.Y36(e.Qsj))},V.\u0275dir=e.lG2({type:V,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),V})(),Je=(()=>{class V{}return V.\u0275fac=function(f){return new(f||V)},V.\u0275mod=e.oAB({type:V}),V.\u0275inj=e.cJS({imports:[[w.vT,b.ez,R.ud,Z.U8,F.PV,X.g,g.T]]}),V})()},3610:(de,W,o)=>{o.d(W,{$6:()=>T,lU:()=>w});var t=o(655),e=o(5e3),i=o(8076),s=o(9439),I=o(1721),v=o(404),a=o(4832),U=o(226),c=o(2845),_=o(6950),C=o(9808),A=o(969);function O(R,X){if(1&R&&(e.ynx(0),e._uU(1),e.BQk()),2&R){const b=e.oxw(3);e.xp6(1),e.Oqu(b.nzTitle)}}function K(R,X){if(1&R&&(e.TgZ(0,"div",10),e.YNc(1,O,2,1,"ng-container",9),e.qZA()),2&R){const b=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",b.nzTitle)}}function N(R,X){if(1&R&&(e.ynx(0),e._uU(1),e.BQk()),2&R){const b=e.oxw(2);e.xp6(1),e.Oqu(b.nzContent)}}function k(R,X){if(1&R&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"span",5),e.qZA(),e.TgZ(4,"div",6)(5,"div"),e.YNc(6,K,2,1,"div",7),e.TgZ(7,"div",8),e.YNc(8,N,2,1,"ng-container",9),e.qZA()()()()()),2&R){const b=e.oxw();e.ekj("ant-popover-rtl","rtl"===b.dir),e.Q6J("ngClass",b._classMap)("ngStyle",b.nzOverlayStyle)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),e.xp6(6),e.Q6J("ngIf",b.nzTitle),e.xp6(2),e.Q6J("nzStringTemplateOutlet",b.nzContent)}}let w=(()=>{class R extends v.Mg{constructor(b,F,g,B,G,x){super(b,F,g,B,G,x),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new e.vpe,this.componentRef=this.hostView.createComponent(Z)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return R.\u0275fac=function(b){return new(b||R)(e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(e._Vd),e.Y36(e.Qsj),e.Y36(a.P,9),e.Y36(s.jY))},R.\u0275dir=e.lG2({type:R,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(b,F){2&b&&e.ekj("ant-popover-open",F.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[e.qOj]}),(0,t.gn)([(0,I.yF)()],R.prototype,"arrowPointAtCenter",void 0),(0,t.gn)([(0,s.oS)()],R.prototype,"nzPopoverBackdrop",void 0),R})(),Z=(()=>{class R extends v.XK{constructor(b,F,g){super(b,F,g),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,v.pu)(this.nzTitle)&&(0,v.pu)(this.nzContent)}}return R.\u0275fac=function(b){return new(b||R)(e.Y36(e.sBO),e.Y36(U.Is,8),e.Y36(a.P,9))},R.\u0275cmp=e.Xpm({type:R,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[e.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(b,F){1&b&&(e.YNc(0,k,9,9,"ng-template",0,1,e.W1O),e.NdJ("overlayOutsideClick",function(B){return F.onClickOutside(B)})("detach",function(){return F.hide()})("positionChange",function(B){return F.onPositionChange(B)})),2&b&&e.Q6J("cdkConnectedOverlayHasBackdrop",F.hasBackdrop)("cdkConnectedOverlayOrigin",F.origin)("cdkConnectedOverlayPositions",F._positions)("cdkConnectedOverlayOpen",F._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",F.nzArrowPointAtCenter)},directives:[c.pI,_.hQ,C.mk,C.PC,a.P,C.O5,A.f],encapsulation:2,data:{animation:[i.$C]},changeDetection:0}),R})(),T=(()=>{class R{}return R.\u0275fac=function(b){return new(b||R)},R.\u0275mod=e.oAB({type:R}),R.\u0275inj=e.cJS({imports:[[U.vT,C.ez,c.U8,A.T,_.e4,a.g,v.cg]]}),R})()},8144:(de,W,o)=>{o.d(W,{$1:()=>K,NU:()=>Y,zf:()=>w});var t=o(226),e=o(9808),i=o(5e3),s=o(655),I=o(8929),v=o(7625),a=o(9439),U=o(1721);function c(Z,T){}const _=function(Z){return{$implicit:Z}};function C(Z,T){if(1&Z&&(i.TgZ(0,"span",4),i.YNc(1,c,0,0,"ng-template",5),i.qZA()),2&Z){const R=i.oxw(),X=R.last,b=R.index,F=i.oxw();i.Udp("margin-bottom","vertical"===F.nzDirection?X?null:F.spaceSize:null,"px")("margin-right","horizontal"===F.nzDirection?X?null:F.spaceSize:null,"px"),i.xp6(1),i.Q6J("ngTemplateOutlet",F.nzSplit)("ngTemplateOutletContext",i.VKq(6,_,b))}}function A(Z,T){if(1&Z&&(i.TgZ(0,"div",1),i.GkF(1,2),i.qZA(),i.YNc(2,C,2,8,"span",3)),2&Z){const R=T.$implicit,X=T.last,b=i.oxw();i.Udp("margin-bottom","vertical"===b.nzDirection?X?null:b.spaceSize:null,"px")("margin-right","horizontal"===b.nzDirection?X?null:b.spaceSize:null,"px"),i.xp6(1),i.Q6J("ngTemplateOutlet",R),i.xp6(1),i.Q6J("ngIf",b.nzSplit&&!X)}}const O=["*"];let K=(()=>{class Z{constructor(){}}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275dir=i.lG2({type:Z,selectors:[["","nzSpaceItem",""]]}),Z})();const k={small:8,middle:16,large:24};let Y=(()=>{class Z{constructor(R,X){this.nzConfigService=R,this.cdr=X,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=k.small,this.destroy$=new I.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?k[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Z.\u0275fac=function(R){return new(R||Z)(i.Y36(a.jY),i.Y36(i.sBO))},Z.\u0275cmp=i.Xpm({type:Z,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(R,X,b){if(1&R&&i.Suo(b,K,4,i.Rgc),2&R){let F;i.iGM(F=i.CRH())&&(X.items=F)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(R,X){2&R&&(i.Udp("flex-wrap",X.nzWrap?"wrap":null),i.ekj("ant-space-horizontal","horizontal"===X.nzDirection)("ant-space-vertical","vertical"===X.nzDirection)("ant-space-align-start","start"===X.mergedAlign)("ant-space-align-end","end"===X.mergedAlign)("ant-space-align-center","center"===X.mergedAlign)("ant-space-align-baseline","baseline"===X.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[i.TTD],ngContentSelectors:O,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(R,X){1&R&&(i.F$t(),i.Hsn(0),i.YNc(1,A,3,6,"ng-template",0)),2&R&&(i.xp6(1),i.Q6J("ngForOf",X.items))},directives:[e.sg,e.tP,e.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,U.yF)()],Z.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],Z.prototype,"nzSize",void 0),Z})(),w=(()=>{class Z{}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275mod=i.oAB({type:Z}),Z.\u0275inj=i.cJS({imports:[[t.vT,e.ez]]}),Z})()},7525:(de,W,o)=>{o.d(W,{W:()=>G,j:()=>x});var t=o(655),e=o(5e3),i=o(8929),s=o(591),I=o(839),v=o(8723),a=o(1177);class c{constructor(l){this.durationSelector=l}call(l,P){return P.subscribe(new _(l,this.durationSelector))}}class _ extends a.Ds{constructor(l,P){super(l),this.durationSelector=P,this.hasValue=!1}_next(l){try{const P=this.durationSelector.call(this,l);P&&this._tryNext(l,P)}catch(P){this.destination.error(P)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(l,P){let $=this.durationSubscription;this.value=l,this.hasValue=!0,$&&($.unsubscribe(),this.remove($)),$=(0,a.ft)(P,new a.IY(this)),$&&!$.closed&&this.add(this.durationSubscription=$)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const l=this.value,P=this.durationSubscription;P&&(this.durationSubscription=void 0,P.unsubscribe(),this.remove(P)),this.value=void 0,this.hasValue=!1,super._next(l)}}}var C=o(1059),A=o(5778),O=o(7545),K=o(7625),N=o(9439),k=o(1721),Y=o(226),w=o(9808),Z=o(7144);function T(L,l){1&L&&(e.TgZ(0,"span",3),e._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),e.qZA())}function R(L,l){}function X(L,l){if(1&L&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&L){const P=e.oxw(2);e.xp6(1),e.Oqu(P.nzTip)}}function b(L,l){if(1&L&&(e.TgZ(0,"div")(1,"div",5),e.YNc(2,R,0,0,"ng-template",6),e.YNc(3,X,2,1,"div",7),e.qZA()()),2&L){const P=e.oxw(),$=e.MAs(1);e.xp6(1),e.ekj("ant-spin-rtl","rtl"===P.dir)("ant-spin-spinning",P.isLoading)("ant-spin-lg","large"===P.nzSize)("ant-spin-sm","small"===P.nzSize)("ant-spin-show-text",P.nzTip),e.xp6(1),e.Q6J("ngTemplateOutlet",P.nzIndicator||$),e.xp6(1),e.Q6J("ngIf",P.nzTip)}}function F(L,l){if(1&L&&(e.TgZ(0,"div",9),e.Hsn(1),e.qZA()),2&L){const P=e.oxw();e.ekj("ant-spin-blur",P.isLoading)}}const g=["*"],B="spin";let G=(()=>{class L{constructor(P,$,y){this.nzConfigService=P,this.cdr=$,this.directionality=y,this._nzModuleName=B,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new i.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new I.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var P;this.delay$.pipe((0,C.O)(this.nzDelay),(0,A.x)(),(0,O.w)(y=>0===y?this.spinning$:this.spinning$.pipe(function U(L){return l=>l.lift(new c(L))}(H=>(0,v.H)(H?y:0)))),(0,K.R)(this.destroy$)).subscribe(y=>{this.isLoading=y,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(B).pipe((0,K.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(P=this.directionality.change)||void 0===P||P.pipe((0,K.R)(this.destroy$)).subscribe(y=>{this.dir=y,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(P){const{nzSpinning:$,nzDelay:y}=P;$&&this.spinning$.next(this.nzSpinning),y&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return L.\u0275fac=function(P){return new(P||L)(e.Y36(N.jY),e.Y36(e.sBO),e.Y36(Y.Is,8))},L.\u0275cmp=e.Xpm({type:L,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(P,$){2&P&&e.ekj("ant-spin-nested-loading",!$.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[e.TTD],ngContentSelectors:g,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(P,$){1&P&&(e.F$t(),e.YNc(0,T,5,0,"ng-template",null,0,e.W1O),e.YNc(2,b,4,12,"div",1),e.YNc(3,F,2,2,"div",2)),2&P&&(e.xp6(2),e.Q6J("ngIf",$.isLoading),e.xp6(1),e.Q6J("ngIf",!$.nzSimple))},directives:[w.O5,w.tP],encapsulation:2}),(0,t.gn)([(0,N.oS)()],L.prototype,"nzIndicator",void 0),(0,t.gn)([(0,k.Rn)()],L.prototype,"nzDelay",void 0),(0,t.gn)([(0,k.yF)()],L.prototype,"nzSimple",void 0),(0,t.gn)([(0,k.yF)()],L.prototype,"nzSpinning",void 0),L})(),x=(()=>{class L{}return L.\u0275fac=function(P){return new(P||L)},L.\u0275mod=e.oAB({type:L}),L.\u0275inj=e.cJS({imports:[[Y.vT,w.ez,Z.Q8]]}),L})()},8481:(de,W,o)=>{o.d(W,{X:()=>K,j:()=>O});var t=o(655),e=o(5e3),i=o(8929),s=o(7625),I=o(8693),v=o(1721),a=o(226),U=o(9808),c=o(5017),_=o(3075);function C(N,k){if(1&N){const Y=e.EpF();e.TgZ(0,"i",1),e.NdJ("click",function(Z){return e.CHM(Y),e.oxw().closeTag(Z)}),e.qZA()}}const A=["*"];let O=(()=>{class N{constructor(Y,w,Z,T){this.cdr=Y,this.renderer=w,this.elementRef=Z,this.directionality=T,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new e.vpe,this.nzCheckedChange=new e.vpe,this.dir="ltr",this.destroy$=new i.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Y){this.nzOnClose.emit(Y),Y.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Y=this.elementRef.nativeElement,w=new RegExp(`(ant-tag-(?:${[...I.uf,...I.Bh].join("|")}))`,"g"),Z=Y.classList.toString(),T=[];let R=w.exec(Z);for(;null!==R;)T.push(R[1]),R=w.exec(Z);Y.classList.remove(...T)}setPresetColor(){const Y=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,I.o2)(this.nzColor)||(0,I.M8)(this.nzColor)),this.isPresetColor&&Y.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Y;null===(Y=this.directionality.change)||void 0===Y||Y.pipe((0,s.R)(this.destroy$)).subscribe(w=>{this.dir=w,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Y){const{nzColor:w}=Y;w&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(Y){return new(Y||N)(e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(a.Is,8))},N.\u0275cmp=e.Xpm({type:N,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Y,w){1&Y&&e.NdJ("click",function(){return w.updateCheckedStatus()}),2&Y&&(e.Udp("background-color",w.isPresetColor?"":w.nzColor),e.ekj("ant-tag-has-color",w.nzColor&&!w.isPresetColor)("ant-tag-checkable","checkable"===w.nzMode)("ant-tag-checkable-checked",w.nzChecked)("ant-tag-rtl","rtl"===w.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[e.TTD],ngContentSelectors:A,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Y,w){1&Y&&(e.F$t(),e.Hsn(0),e.YNc(1,C,1,0,"i",0)),2&Y&&(e.xp6(1),e.Q6J("ngIf","closeable"===w.nzMode))},directives:[U.O5,c.Ls],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,v.yF)()],N.prototype,"nzChecked",void 0),N})(),K=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[[a.vT,U.ez,_.u5,c.PV]]}),N})()}}]);