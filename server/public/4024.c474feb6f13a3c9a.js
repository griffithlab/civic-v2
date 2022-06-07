"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{3193:(ze,q,o)=>{o.d(q,{H:()=>xe});var i=o(6654),t=o(5e3),n=o(9808),s=o(325),D=o(8481),_=o(3610),c=o(4850),Y=o(712),d=o(7484),E=o(647),T=o(3098),M=o(1894),x=o(8144),te=o(6949);function R(oe,Ce){if(1&oe&&(t._UZ(0,"i",11),t._uU(1)),2&oe){const pe=t.oxw().ngIf;t.xp6(1),t.hij(" ",pe.officialName," ")}}function ie(oe,Ce){if(1&oe&&(t.TgZ(0,"nz-tag"),t._uU(1),t.qZA()),2&oe){const pe=Ce.$implicit;t.xp6(1),t.Oqu(pe)}}function j(oe,Ce){if(1&oe&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,ie,2,1,"nz-tag",13),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",pe.geneAliases)}}function Z(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/flags"),t.xp6(3),t.hij(" Flags (",pe.flags.totalCount,") ")}}function V(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",pe.revisions.totalCount,") ")}}function P(oe,Ce){if(1&oe&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&oe){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/comments"),t.xp6(3),t.hij(" Comments (",pe.comments.totalCount,") ")}}function G(oe,Ce){if(1&oe&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,R,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,j,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,Z,4,2,"a",10),t.YNc(12,V,4,2,"a",10),t.YNc(13,P,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&oe){const pe=Ce.ngIf,Ae=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",Ae),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",pe.geneAliases.length>0),t.xp6(2),t.hij(" ",pe.variants.totalCount," ")}}let se=(()=>{class oe{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:pe})=>pe.gene))}}return oe.\u0275fac=function(pe){return new(pe||oe)(t.Y36(Y.rJ8))},oe.\u0275cmp=t.Xpm({type:oe,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,Ae){1&pe&&(t.TgZ(0,"div",0),t.YNc(1,G,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&pe&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Ae.gene$)))},directives:[n.O5,d.bd,E.Ls,T.R7,T.uj,n.sg,D.j,M.SK,M.t3,x.NU,x.$1,s.yS],pipes:[te.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),oe})();var $=o(4557);function O(oe,Ce){}function m(oe,Ce){if(1&oe&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,O,0,0,"ng-template",6),t.qZA(),t.BQk()),2&oe){const pe=t.oxw(),Ae=t.MAs(2);t.xp6(1),t.Q6J("routerLink",pe.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Ae)}}function A(oe,Ce){}function L(oe,Ce){if(1&oe){const pe=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(K){return t.CHM(pe),t.oxw(2).itemClosed(K)}),t.YNc(1,A,0,0,"ng-template",6),t.qZA()}if(2&oe){t.oxw();const pe=t.MAs(2),Ae=t.oxw(),K=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",Ae.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzMode",Ae.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",K)}}function b(oe,Ce){if(1&oe&&t._UZ(0,"cvc-gene-popover",10),2&oe){const pe=t.oxw(2);t.Q6J("geneId",pe.gene.id)}}function J(oe,Ce){if(1&oe&&(t.YNc(0,L,2,4,"nz-tag",7),t.YNc(1,b,1,1,"ng-template",null,8,t.W1O)),2&oe){const pe=t.oxw(),Ae=t.MAs(4);t.Q6J("ngIf",pe.enablePopover)("ngIfElse",Ae)}}function u(oe,Ce){}function U(oe,Ce){if(1&oe){const pe=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(K){return t.CHM(pe),t.oxw().itemClosed(K)}),t.YNc(1,u,0,0,"ng-template",6),t.qZA()}if(2&oe){const pe=t.oxw(),Ae=t.MAs(8);t.Q6J("nzMode",pe.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",Ae)}}function B(oe,Ce){}function X(oe,Ce){if(1&oe&&t.YNc(0,B,0,0,"ng-template",6),2&oe){t.oxw();const pe=t.MAs(2);t.Q6J("ngTemplateOutlet",pe)}}function _e(oe,Ce){if(1&oe&&(t.ynx(0),t._uU(1),t.ALo(2,"truncate"),t.BQk()),2&oe){const pe=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,pe.gene.name,12)," ")}}function Te(oe,Ce){if(1&oe&&t._uU(0),2&oe){const pe=t.oxw(2);t.hij(" ",pe.gene.name," ")}}function Me(oe,Ce){if(1&oe&&(t._UZ(0,"i",12),t.YNc(1,_e,3,4,"ng-container",0),t.YNc(2,Te,1,1,"ng-template",null,13,t.W1O)),2&oe){const pe=t.MAs(3),Ae=t.oxw();t.xp6(1),t.Q6J("ngIf",Ae.truncateLongName)("ngIfElse",pe)}}let xe=(()=>{class oe extends i.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return oe.\u0275fac=function(pe){return new(pe||oe)},oe.\u0275cmp=t.Xpm({type:oe,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(pe,Ae){if(1&pe&&(t.YNc(0,m,3,2,"ng-container",0),t.YNc(1,J,3,2,"ng-template",null,1,t.W1O),t.YNc(3,U,2,2,"ng-template",null,2,t.W1O),t.YNc(5,X,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Me,4,2,"ng-template",null,4,t.W1O)),2&pe){const K=t.MAs(6);t.Q6J("ngIf",Ae.linked)("ngIfElse",K)}},directives:[n.O5,s.yS,n.tP,D.j,_.lU,se,E.Ls],pipes:[$.W],styles:[""],changeDetection:0}),oe})()},3309:(ze,q,o)=>{o.d(q,{U:()=>te});var i=o(9808),t=o(325),n=o(8481),s=o(647),D=o(3610),_=o(7484),c=o(1894),Y=o(3098),d=o(8144),E=o(6949),T=o(5e3);let M=(()=>{class R{}return R.\u0275fac=function(j){return new(j||R)},R.\u0275mod=T.oAB({type:R}),R.\u0275inj=T.cJS({imports:[[i.ez,t.Bz,E.WG,_.vh,c.Jb,Y.q6,n.X,s.PV,d.zf]]}),R})();var x=o(9444);let te=(()=>{class R{}return R.\u0275fac=function(j){return new(j||R)},R.\u0275mod=T.oAB({type:R}),R.\u0275inj=T.cJS({imports:[[i.ez,t.Bz,n.X,D.$6,s.PV,x.s,M]]}),R})()},1912:(ze,q,o)=>{o.d(q,{s:()=>te});var i=o(5e3),t=o(6042),n=o(2643),s=o(2683),D=o(3640),c=o(2160),Y=o(3762),d=o(647);let E=(()=>{class R{constructor(j){this.cookies=j,this.location=function _(R){return encodeURIComponent(R).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return R.\u0275fac=function(j){return new(j||R)(i.Y36(c.N))},R.\u0275cmp=i.Xpm({type:R,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(j,Z){1&j&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&j&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken))},directives:[Y.n_,Y.AA,t.ix,n.dQ,s.w,d.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),R})();function T(R,ie){1&R&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function M(R,ie){1&R&&i._uU(0," Sign In / Sign Up\n")}function x(R,ie){if(1&R){const j=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(j),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let te=(()=>{class R{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return R.\u0275fac=function(j){return new(j||R)},R.\u0275cmp=i.Xpm({type:R,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(j,Z){if(1&j&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return Z.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In / Sign Up"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(P){return Z.authVisible=P})("nzOnCancel",function(){return Z.handleCancel()}),i.YNc(4,T,4,0,"ng-container",2),i.qZA(),i.YNc(5,M,1,0,"ng-template",null,3,i.W1O),i.YNc(7,x,2,0,"ng-template",null,4,i.W1O)),2&j){const V=i.MAs(6),P=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",Z.authVisible)("nzTitle",V)("nzFooter",P)}},directives:[t.ix,n.dQ,s.w,D.du,D.Hf,E],styles:["[_nghost-%COMP%]{display:inline-block}"]}),R})()},1844:(ze,q,o)=>{o.d(q,{B:()=>Y});var i=o(9808),t=o(6042),n=o(3640),s=o(3762),D=o(647),_=o(5e3);let c=(()=>{class d{}return d.\u0275fac=function(T){return new(T||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,D.PV,s.Ph,t.sL]]}),d})(),Y=(()=>{class d{}return d.\u0275fac=function(T){return new(T||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Qp,c]]}),d})()},7881:(ze,q,o)=>{o.d(q,{L:()=>_});var i=o(5e3),t=o(9808),n=o(6699);function s(c,Y){if(1&c&&i._UZ(0,"nz-avatar",2),2&c){const d=i.oxw();i.Q6J("nzSrc",d.user.profileImagePath)("nzShape",d.shape?d.shape:"circle")("nzSize",d.size)}}function D(c,Y){if(1&c&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&c){const d=i.oxw();i.Q6J("nzSize",d.size)("nzText",i.lcZ(1,2,d.user.displayName.charAt(0)))}}let _=(()=>{class c{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(d,E){if(1&d&&(i.YNc(0,s,1,3,"nz-avatar",0),i.YNc(1,D,2,4,"ng-template",null,1,i.W1O)),2&d){const T=i.MAs(2);i.Q6J("ngIf",E.user.profileImagePath)("ngIfElse",T)}},directives:[t.O5,n.Dz],pipes:[t.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),c})()},5473:(ze,q,o)=>{o.d(q,{H:()=>s});var i=o(9808),t=o(6699),n=o(5e3);let s=(()=>{class D{}return D.\u0275fac=function(c){return new(c||D)},D.\u0275mod=n.oAB({type:D}),D.\u0275inj=n.cJS({imports:[[i.ez,t.Rt]]}),D})()},8926:(ze,q,o)=>{o.d(q,{A:()=>n});var i=o(5e3),t=o(2313);let n=(()=>{class s{constructor(_){this.sanitizer=_}transform(_,c){if(!c||""==c)return _;const Y=new RegExp(c,"gi"),d=_.match(Y);if(!d)return _;let E=_.replace(Y,`<span class='typeahead-match'>${d[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(E)}}return s.\u0275fac=function(_){return new(_||s)(i.Y36(t.H7,16))},s.\u0275pipe=i.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},9444:(ze,q,o)=>{o.d(q,{s:()=>s});var i=o(9808),t=o(7742),n=o(5e3);let s=(()=>{class D{}return D.\u0275fac=function(c){return new(c||D)},D.\u0275mod=n.oAB({type:D}),D.\u0275inj=n.cJS({providers:[t.l],imports:[[i.ez]]}),D})()},7742:(ze,q,o)=>{o.d(q,{l:()=>n});var i=o(6530),t=o(5e3);let n=(()=>{class s{transform(_){return _?(0,i.c)(_):""}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275pipe=t.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ze,q,o)=>{o.d(q,{W:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){}transform(D,_=25){if(D.length>_){let Y=D.slice(0,_);var c=Y.lastIndexOf(" ");return Y.slice(0,c)+"\u2026"}return D}}return n.\u0275fac=function(D){return new(D||n)},n.\u0275pipe=i.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ze,q,o)=>{o.d(q,{a:()=>d});var i=o(4850),t=o(5154),n=o(373),s=o(1059),D=o(712),_=o(5e3),c=o(520);const Y={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let d=(()=>{class E{constructor(M,x){function te(P){return!(!P||P.role!==D.i44.Admin)}function R(P){return!(!P||P.role!==D.i44.Editor&&P.role!==D.i44.Admin)}function ie(P){return!(!P||P.role!==D.i44.Curator)}function j(P){return!(!P||P.role!==D.i44.Curator&&P.role!==D.i44.Editor&&P.role!==D.i44.Admin)}function Z(P){var G,se;return!(!P||P.role!==D.i44.Editor&&P.role!==D.i44.Admin||!P.mostRecentConflictOfInterestStatement||(null===(G=P.mostRecentConflictOfInterestStatement)||void 0===G?void 0:G.coiStatus)!=D.Mgx.Conflict&&(null===(se=P.mostRecentConflictOfInterestStatement)||void 0===se?void 0:se.coiStatus)!=D.Mgx.Valid)}function V(P){if(P.mostRecentOrganizationId)return P.organizations.find(G=>G.id===P.mostRecentOrganizationId)}this.viewerBaseGQL=M,this.http=x,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(P=>({data:P.data,loading:P.loading,networkStatus:P.networkStatus})),(0,t.d)(1)),this.isLoading$=this.data$.pipe((0,n.j)("loading"),(0,s.O)(!0)),this.viewer$=this.data$.pipe((0,n.j)("data","viewer"),(0,i.U)(P=>Object.assign(Object.assign({},P),{signedIn:null!==P,signedOut:null===P,canCurate:j(P),canModerate:Z(P),isAdmin:te(P),isEditor:R(P),isCurator:ie(P),organizations:null===P?[]:P.organizations,mostRecentOrg:null===P?void 0:V(P),invalidCoi:R(P)&&(!P.mostRecentConflictOfInterestStatement||P.mostRecentConflictOfInterestStatement.coiStatus===D.Mgx.Expired||P.mostRecentConflictOfInterestStatement.coiStatus===D.Mgx.Missing)})),(0,s.O)(Y),(0,t.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(P=>P.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(P=>P.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(P=>te(P))),this.isEditor$=this.viewer$.pipe((0,i.U)(P=>R(P))),this.isCurator$=this.viewer$.pipe((0,i.U)(P=>ie(P))),this.canCurate$=this.viewer$.pipe((0,i.U)(P=>j(P))),this.canModerate$=this.viewer$.pipe((0,i.U)(P=>Z(P)))}signOut(){this.http.get("/api/sign_out").subscribe(M=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return E.\u0275fac=function(M){return new(M||E)(_.LFG(D.Tt7),_.LFG(c.eN))},E.\u0275prov=_.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},6654:(ze,q,o)=>{o.d(q,{a:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(D){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(D){return new(D||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(D,_){},encapsulation:2}),n})()},915:(ze,q,o)=>{function i(t){let n;if("NA"===t)n=["N/A"];else if("SENSITIVITYRESPONSE"===t)n=["Sensitivity","/","Response"];else{n=t.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}o.d(q,{E:()=>i})},6530:(ze,q,o)=>{function i(t){switch(t){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return t}}o.d(q,{c:()=>i})},6123:(ze,q,o)=>{o.d(q,{U:()=>D});var i=o(8929),t=o(591),n=o(7625),s=o(537);class D{constructor(c){this.networkErrorService=c}mutate(c,Y,d,E){let T=new i.xQ,M={isSubmitting$:new t.X(!1),submitSuccess$:new t.X(!1),submitError$:new t.X([]),cleanup:()=>{T.next(),T.complete()}};return M.isSubmitting$.next(!0),c.mutate(Y,d).pipe((0,n.R)(T),(0,s.x)(()=>{M.isSubmitting$.next(!1)})).subscribe({next:x=>{x.data&&E&&E(x.data)},error:x=>{x.graphQLErrors.length>0?M.submitError$.next(x.graphQLErrors.map(te=>te.message)):x.networkError&&this.networkErrorService.networkError$.next(x.networkError),M.cleanup()},complete:()=>{M.submitError$.next([]),M.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),M.cleanup()}}),M}}},9180:(ze,q,o)=>{o.d(q,{Z:()=>n});var i=o(5e3);const t=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(_,c){1&_&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ze,q,o)=>{o.d(q,{R:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},822:(ze,q,o)=>{o.d(q,{V:()=>Y});var i=o(5e3),t=o(9808),n=o(2359);function s(d,E){if(1&d&&i._UZ(0,"nz-alert",4),2&d){const T=i.oxw();i.Q6J("nzDescription",T.errors[0])}}function D(d,E){if(1&d&&i._UZ(0,"nz-alert",5),2&d){i.oxw();const T=i.MAs(3);i.Q6J("nzDescription",T)}}function _(d,E){if(1&d&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&d){const T=E.$implicit;i.xp6(1),i.Oqu(T)}}function c(d,E){if(1&d&&(i.TgZ(0,"ul",6),i.YNc(1,_,2,1,"li",7),i.qZA()),2&d){const T=i.oxw();i.xp6(1),i.Q6J("ngForOf",T.errors)}}let Y=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(T){return new(T||d)},d.\u0275cmp=i.Xpm({type:d,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(T,M){1&T&&(i.YNc(0,s,1,1,"nz-alert",0),i.YNc(1,D,1,1,"nz-alert",1),i.YNc(2,c,2,1,"ng-template",2,3,i.W1O)),2&T&&(i.Q6J("ngIf",1===M.errors.length),i.xp6(1),i.Q6J("ngIf",M.errors.length>1))},directives:[t.O5,n.r,t.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),d})()},7008:(ze,q,o)=>{o.d(q,{B:()=>s});var i=o(9808),t=o(2359),n=o(5e3);let s=(()=>{class D{}return D.\u0275fac=function(c){return new(c||D)},D.\u0275mod=n.oAB({type:D}),D.\u0275inj=n.cJS({imports:[[i.ez,t.L]]}),D})()},6789:(ze,q,o)=>{o.d(q,{_:()=>M});var i=o(9808),t=o(7484),n=o(5109),s=o(5482),D=o(6949),_=o(9552),c=o(8776),Y=o(647),d=o(404),E=o(5e3);let T=(()=>{class x{}return x.\u0275fac=function(R){return new(R||x)},x.\u0275mod=E.oAB({type:x}),x.\u0275inj=E.cJS({imports:[[i.ez,D.WG,c.X0,_.j,s.cD,Y.PV,d.cg,n.s]]}),x})(),M=(()=>{class x{}return x.\u0275fac=function(R){return new(R||x)},x.\u0275mod=E.oAB({type:x}),x.\u0275inj=E.cJS({imports:[[i.ez,D.WG,c.X0,t.vh,_.j,s.cD,Y.PV,d.cg,T,n.s]]}),x})()},1825:(ze,q,o)=>{o.d(q,{A:()=>Y});var i=o(9808),t=o(6042),n=o(6699),s=o(3677),D=o(8144),_=o(6949),c=o(5e3);let Y=(()=>{class d{}return d.\u0275fac=function(T){return new(T||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({imports:[[i.ez,_.WG,t.sL,n.Rt,s.b1,D.zf]]}),d})()},1793:(ze,q,o)=>{o.d(q,{m:()=>c});var i=o(5e3),t=o(8929),n=o(5254),s=o(2198),D=o(4850),_=o(7625);let c=(()=>{class Y{constructor(E){this.el=E,this.domChange=new i.vpe,this.destroy$=new t.xQ,this.changes=new MutationObserver(T=>{this.mutation$=(0,n.D)(T),this.disabledChange$=this.mutation$.pipe((0,s.h)(M=>"disabled"===M.attributeName),(0,D.U)(M=>({type:"disabled",change:M.target.disabled}))),this.disabledChange$.pipe((0,_.R)(this.destroy$)).subscribe(M=>{this.domChange.emit(M)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return Y.\u0275fac=function(E){return new(E||Y)(i.Y36(i.SBq))},Y.\u0275dir=i.lG2({type:Y,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),Y})()},7905:(ze,q,o)=>{o.d(q,{yQ:()=>s,nT:()=>_});var i=o(915),t=o(712),n=o(444),s=(()=>{return(c=s||(s={})).EVIDENCE="Evidence",c.ASSERTION="Assertion",s;var c})();class _{constructor(Y){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(t.uBv).map(d=>d):(0,n.o6)(t.kqt).map(d=>d),this.getSignificanceOptions=d=>{const E=this.validStates.get(d);return(null==E?void 0:E.clinicalSignificance)||[]},this.isValidSignificanceOption=(d,E)=>{const T=this.validStates.get(d);return!T||T.clinicalSignificance.includes(E)},this.getDirectionOptions=d=>{const E=this.validStates.get(d);return(null==E?void 0:E.entityDirection)||[]},this.isValidDirectionOption=(d,E)=>{const T=this.validStates.get(d);return!T||T.entityDirection.includes(E)},this.requiresDrug=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresDrug},this.requiresDisease=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresDisease},this.requiresAcmgCodes=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresAcmgCodes},this.requiresAmpLevel=d=>{const E=this.validStates.get(d);return void 0===E||E.requiresAmpLevel},this.allowsFdaApproval=d=>{const E=this.validStates.get(d);return void 0===E||E.allowsFdaApproval},this.getOptionsFromEnums=d=>0===d.length?[]:d.map(E=>({value:E,label:(0,i.E)(E)})),this.entityName=Y,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},6064:(ze,q,o)=>{o.d(q,{_:()=>n});var i=o(712),t=o(7905);class n extends t.nT{constructor(){super(t.yQ.EVIDENCE),this.validStates.set(i.kqt.Predictive,{entityType:i.kqt.Predictive,clinicalSignificance:[i._Aq.Sensitivityresponse,i._Aq.Resistance,i._Aq.AdverseResponse,i._Aq.ReducedSensitivity,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Diagnostic,{entityType:i.kqt.Diagnostic,clinicalSignificance:[i._Aq.Positive,i._Aq.Negative],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Prognostic,{entityType:i.kqt.Prognostic,clinicalSignificance:[i._Aq.BetterOutcome,i._Aq.PoorOutcome,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Oncogenic,{entityType:i.kqt.Oncogenic,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Predisposing,{entityType:i.kqt.Predisposing,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Functional,{entityType:i.kqt.Functional,clinicalSignificance:[i._Aq.GainOfFunction,i._Aq.LossOfFunction,i._Aq.UnalteredFunction,i._Aq.Neomorphic,i._Aq.DominantNegative,i._Aq.Unknown],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ze,q,o)=>{o.d(q,{E:()=>te});var i=o(9808),t=o(3075),n=o(325),s=o(8776),D=o(304),_=o(6042),c=o(5e3),Y=o(2643),d=o(2683);function E(R,ie){if(1&R){const j=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(j),c.oxw().callOnClick()}),c._uU(1," Cancel\n"),c.qZA()}}function T(R,ie){if(1&R&&(c.TgZ(0,"button",3),c._uU(1," Cancel "),c.qZA()),2&R){const j=c.oxw();c.Q6J("routerLink",j.redirectPath)}}const x={name:"cancel-button",component:(()=>{class R extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var j,Z,V,P;(null===(j=this.field.templateOptions)||void 0===j?void 0:j.onClick)?this.callOnClick=null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.onClick:(null===(V=this.field.templateOptions)||void 0===V?void 0:V.redirectPath)&&(this.redirectPath=null===(P=this.field.templateOptions)||void 0===P?void 0:P.redirectPath)}}return R.\u0275fac=function(){let ie;return function(Z){return(ie||(ie=c.n5z(R)))(Z||R)}}(),R.\u0275cmp=c.Xpm({type:R,selectors:[["cvc-cancel-button"]],features:[c.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(j,Z){if(1&j&&(c.YNc(0,E,2,0,"button",0),c.YNc(1,T,2,1,"ng-template",null,1,c.W1O)),2&j){const V=c.MAs(2);c.Q6J("ngIf",Z.callOnClick)("ngIfElse",V)}},directives:[i.O5,_.ix,Y.dQ,d.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),R})()};let te=(()=>{class R{}return R.\u0275fac=function(j){return new(j||R)},R.\u0275mod=c.oAB({type:R}),R.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.sL,n.Bz,D.F,s.X0.forChild({types:[x]})]]}),R})()},4623:(ze,q,o)=>{o.d(q,{K:()=>E});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),D=o(3075);const c={name:"comment-textarea",component:(()=>{class T extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(x,te)=>{var R;return`Comments must be at least ${null===(R=te.templateOptions)||void 0===R?void 0:R.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return T.\u0275fac=function(){let M;return function(te){return(M||(M=n.n5z(T)))(te||T)}}(),T.\u0275cmp=n.Xpm({type:T,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(x,te){1&x&&n._UZ(0,"textarea",0),2&x&&n.Q6J("formControl",te.formControl)("formlyAttributes",te.field)},directives:[s.Zp,D.Fj,D.JJ,D.oH,t.VQ],styles:[""],changeDetection:0}),T})(),wrappers:["form-field"]};var Y=o(4546),d=o(9139);let E=(()=>{class T{}return T.\u0275fac=function(x){return new(x||T)},T.\u0275mod=n.oAB({type:T}),T.\u0275inj=n.cJS({imports:[[i.ez,D.UX,t.X0.forChild({types:[c]}),d.u,Y.U5,s.o7]]}),T})()},1605:(ze,q,o)=>{o.d(q,{e:()=>Pe});var i=o(9808),t=o(3075),n=o(8776),s=o(3793),D=o(304),_=o(8054),c=o(5e3),Y=o(1894),d=o(4546);let E=(()=>{class re{constructor(){console.log("FormCardDirective constructed.")}}return re.\u0275fac=function(ue){return new(ue||re)},re.\u0275dir=c.lG2({type:re,selectors:[["",8,"cvc-form-card-control"]]}),re})();var T=o(7484),M=o(404);function x(re,Ee){1&re&&c._UZ(0,"i",7)}function te(re,Ee){if(1&re&&(c.TgZ(0,"nz-form-label",5),c._uU(1),c.YNc(2,x,1,0,"i",6),c.qZA()),2&re){const ue=c.oxw();c.Q6J("nzRequired",ue.to.required&&!0!==ue.to.hideRequiredMarker)("nzFor",ue.id),c.xp6(1),c.hij(" ",ue.to.label," "),c.xp6(1),c.Q6J("ngIf",ue.to.helpText)}}function R(re,Ee){if(1&re&&c._UZ(0,"formly-validation-message",9),2&re){const ue=c.oxw(2);c.Q6J("field",ue.field)}}function ie(re,Ee){if(1&re&&c.YNc(0,R,1,1,"formly-validation-message",8),2&re){const ue=c.oxw();c.Q6J("ngIf",ue.showError)}}let j=(()=>{class re extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return re.\u0275fac=function(ue){return new(ue||re)},re.\u0275cmp=c.Xpm({type:re,selectors:[["form-card-wrapper"]],features:[c.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(ue,Oe){if(1&ue&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",0),c.TgZ(2,"nz-card",1),c.GkF(3,null,2),c.qZA(),c.YNc(5,te,3,4,"ng-template",null,3,c.W1O),c.YNc(7,ie,1,1,"ng-template",null,4,c.W1O),c.qZA(),c.qZA()),2&ue){const w=c.MAs(6),fe=c.MAs(8);c.xp6(1),c.Q6J("nzValidateStatus",Oe.errorState)("nzErrorTip",fe),c.xp6(1),c.Q6J("nzTitle",w)("nzExtra",fe)}},directives:[Y.SK,d.Nx,Y.t3,d.Fd,E,T.bd,d.iK,i.O5,M.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),re})();var Z=o(647),V=o(5109);const P={wrappers:[{name:"form-card",component:j}]};let G=(()=>{class re{}return re.\u0275fac=function(ue){return new(ue||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,d.U5,T.vh,Z.PV,M.cg,n.X0.forChild(P),V.s]]}),re})();var se=o(8929),$=o(7625),O=o(373),m=o(4850),A=o(712),L=o(6949),b=o(8144),J=o(3618),u=o(3193),U=o(8926);function B(re,Ee){if(1&re&&(c._UZ(0,"span",10),c.ALo(1,"highlightTypeahead")),2&re){const ue=c.oxw().$implicit,Oe=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,ue.label,Oe.to.searchString),c.oJD)}}function X(re,Ee){if(1&re&&(c._UZ(0,"span",12),c.ALo(1,"highlightTypeahead")),2&re){const ue=c.oxw(2).$implicit,Oe=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,ue.gene.geneAliases.join(", "),Oe.to.searchString),c.oJD)}}function _e(re,Ee){1&re&&(c.ynx(0),c.YNc(1,X,2,4,"span",11),c.BQk())}function Te(re,Ee){if(1&re&&(c.TgZ(0,"nz-option",7),c.TgZ(1,"nz-space"),c.YNc(2,B,2,4,"span",8),c.YNc(3,_e,2,0,"ng-container",9),c.qZA(),c.qZA()),2&re){const ue=Ee.$implicit;c.Q6J("nzLabel",ue.tooltip)("nzValue",ue.gene),c.xp6(3),c.Q6J("ngIf",ue.gene.geneAliases.length>0)}}function Me(re,Ee){if(1&re&&(c.ynx(0),c.YNc(1,Te,4,3,"nz-option",6),c.BQk()),2&re){const ue=Ee.ngrxLet;c.xp6(1),c.Q6J("ngForOf",ue)}}function xe(re,Ee){1&re&&c._uU(0," No gene found in CIViC that matches the string provided. ")}function oe(re,Ee){if(1&re){const ue=c.EpF();c.ynx(0),c.TgZ(1,"nz-select",2,3),c.NdJ("nzOnSearch",function(w){return c.CHM(ue),c.oxw().to.onSearch(w)}),c.YNc(3,Me,2,1,"ng-container",4),c.qZA(),c.YNc(4,xe,1,0,"ng-template",null,5,c.W1O),c.BQk()}if(2&re){const ue=c.MAs(5),Oe=c.oxw();c.xp6(1),c.Q6J("formControl",Oe.formControl)("formlyAttributes",Oe.field)("nzPlaceHolder",Oe.to.placeholder?Oe.to.placeholder:null)("nzNotFoundContent",ue)("nzShowArrow",Oe.to.showArrow)("nzFilterOption",Oe.to.filterOption),c.xp6(2),c.Q6J("ngrxLet",Oe.genes$)}}function Ce(re,Ee){if(1&re&&c._UZ(0,"cvc-gene-tag",13),2&re){const ue=c.oxw();c.Q6J("gene",ue.formControl.value)}}const Ae={name:"cvc-gene-input",component:(()=>{class re extends n.fS{constructor(ue){super(),this.geneTypeaheadQuery=ue,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}},this.destroy$=new se.xQ}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,$.R)(this.destroy$),(0,O.j)("data","geneTypeahead"),(0,m.U)(ue=>ue.map(Oe=>{let w=Oe.geneAliases.length>0?`Aliases: ${Oe.geneAliases.join(", ")}`:"";return{value:Oe.id,tooltip:`${Oe.name} (${Oe.entrezId}) ${w}`,label:`${Oe.name} (${Oe.entrezId})`,gene:Oe}})))}ngAfterViewInit(){this.to.onSearch=ue=>{ue.length<this.to.minLengthSearch||(this.to.searchString=ue,this.queryRef.refetch({entrezSymbol:ue}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return re.\u0275fac=function(ue){return new(ue||re)(c.Y36(A.Q4m))},re.\u0275cmp=c.Xpm({type:re,selectors:[["cvc-gene-input"]],features:[c.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(ue,Oe){if(1&ue&&(c.YNc(0,oe,6,7,"ng-container",0),c.YNc(1,Ce,1,1,"ng-template",null,1,c.W1O)),2&ue){const w=c.MAs(2);c.Q6J("ngIf",!(null!=Oe.formControl.value&&Oe.formControl.value.id))("ngIfElse",w)}},directives:[i.O5,_.Vq,t.JJ,t.oH,n.VQ,L.eJ,i.sg,_.Ip,b.NU,b.$1,J.ZU,u.H],pipes:[U.A],styles:[""]}),re})()};var K=o(3309),he=o(9444);let W=(()=>{class re{}return re.\u0275fac=function(ue){return new(ue||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,L.WG,n.X0.forChild({types:[Ae]}),_.LV,b.zf,J.ZJ,K.U,he.s]]}),re})();var ge=o(7055);const Ne={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Pe=(()=>{class re{}return re.\u0275fac=function(ue){return new(ue||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.LV,D.F,s.F,n.X0.forChild({types:[Ne]}),W,ge.N,G]]}),re})()},7055:(ze,q,o)=>{o.d(q,{N:()=>O});var i=o(9808),t=o(3075),n=o(8776),s=o(4546),D=o(1047),_=o(647),c=o(5e3),Y=o(1894),d=o(8481),E=o(2683),T=o(6042),M=o(2643);function x(m,A){if(1&m){const L=c.EpF();c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",3),c.TgZ(2,"nz-tag",4),c.NdJ("click",function(J){return c.CHM(L),c.oxw().addField(J)}),c._UZ(3,"i",5),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&m){const L=c.oxw();c.xp6(1),c.Q6J("nzValidateStatus",L.errorState),c.xp6(3),c.hij(" ",L.to.addText," ")}}function te(m,A){if(1&m){const L=c.EpF();c.TgZ(0,"nz-tag",4),c.NdJ("click",function(J){return c.CHM(L),c.oxw(4).addField(J)}),c._UZ(1,"i",5),c._uU(2),c.qZA()}if(2&m){const L=c.oxw(4);c.xp6(2),c.hij(" ",L.to.addText," ")}}function R(m,A){if(1&m&&(c.TgZ(0,"div",11),c.YNc(1,te,3,1,"nz-tag",12),c.qZA()),2&m){const L=c.oxw(2).$implicit,b=c.oxw();c.xp6(1),c.Q6J("ngIf",0==b.to.maxCount||b.to.maxCount>L.model.length)}}function ie(m,A){if(1&m){const L=c.EpF();c.ynx(0),c.TgZ(1,"nz-tag",8),c.TgZ(2,"i",9),c.NdJ("click",function(){c.CHM(L);const J=c.oxw().index;return c.oxw().remove(J)}),c.qZA(),c.qZA(),c.YNc(3,R,2,1,"div",10),c.BQk()}if(2&m){const L=c.oxw().last;c.xp6(3),c.Q6J("ngIf",L)}}function j(m,A){if(1&m){const L=c.EpF();c.ynx(0),c.TgZ(1,"div",13),c.TgZ(2,"button",14),c.NdJ("click",function(){c.CHM(L);const J=c.oxw().index;return c.oxw().remove(J)}),c._UZ(3,"i",15),c.qZA(),c.qZA(),c.BQk()}}function Z(m,A){if(1&m&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c._UZ(3,"formly-field",7),c.qZA(),c.YNc(4,ie,4,1,"ng-container",1),c.YNc(5,j,4,0,"ng-container",1),c.qZA(),c.qZA()),2&m){const L=A.$implicit,b=A.index;c.xp6(2),c.Q6J("ngClass",L.model[b]?"selected-field-col":"default-field-col"),c.xp6(1),c.Q6J("field",L),c.xp6(1),c.Q6J("ngIf",L.model[b]),c.xp6(1),c.Q6J("ngIf",!L.model[b])}}const V=function(m){return{hidden:m}},G={name:"multi-field",component:(()=>{class m extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(L){L&&L.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return m.\u0275fac=function(L){return new(L||m)},m.\u0275cmp=c.Xpm({type:m,selectors:[["cvc-multi-field-type"]],features:[c.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(L,b){1&L&&(c.TgZ(0,"div",0),c.YNc(1,x,5,2,"nz-form-item",1),c.YNc(2,Z,6,4,"nz-form-item",2),c.qZA()),2&L&&(c.Q6J("ngClass",c.VKq(3,V,!0===b.to.hidden)),c.xp6(1),c.Q6J("ngIf",0===(null==b.field.fieldGroup?null:b.field.fieldGroup.length)),c.xp6(1),c.Q6J("ngForOf",b.field.fieldGroup))},directives:[i.mk,i.O5,Y.SK,s.Nx,Y.t3,s.Fd,d.j,_.Ls,E.w,i.sg,n.cw,T.ix,M.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),m})()};var se=o(7102),$=o(5109);let O=(()=>{class m{}return m.\u0275fac=function(L){return new(L||m)},m.\u0275mod=c.oAB({type:m}),m.\u0275inj=c.cJS({imports:[[i.ez,t.u5,n.X0.forChild({types:[G]}),t.UX,se.a,s.U5,D.o7,_.PV,T.sL,$.s,d.X]]}),m})()},7462:(ze,q,o)=>{o.d(q,{o:()=>Y});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),D=o(3075);const c={name:"cvc-textarea",component:(()=>{class d extends t.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return d.\u0275fac=function(){let E;return function(M){return(E||(E=n.n5z(d)))(M||d)}}(),d.\u0275cmp=n.Xpm({type:d,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(T,M){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",M.formControl)("formlyAttributes",M.field)("nzAutosize",M.to.autosize)("placeholder",M.to.placeholder)},directives:[s.Zp,D.Fj,s.rh,D.JJ,D.oH,t.VQ],styles:[""],changeDetection:0}),d})(),wrappers:["form-field"]};let Y=(()=>{class d{}return d.\u0275fac=function(T){return new(T||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[[i.ez,D.u5,D.UX,t.X0.forChild({types:[c]}),s.o7]]}),d})()},7102:(ze,q,o)=>{o.d(q,{a:()=>E});var i=o(9808),t=o(8776),n=o(3075),s=o(4546),D=o(5e3),_=o(1894);function c(T,M){if(1&T&&D._UZ(0,"formly-validation-message",3),2&T){const x=D.oxw();D.Q6J("field",x.field)}}const d={name:"cvc-field-errors",component:(()=>{class T extends t.n2{get errorState(){return this.showError?"error":""}}return T.\u0275fac=function(){let M;return function(te){return(M||(M=D.n5z(T)))(te||T)}}(),T.\u0275cmp=D.Xpm({type:T,selectors:[["cvc-field-errors-wrapper"]],features:[D.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(x,te){if(1&x&&(D.TgZ(0,"nz-form-control",0),D.TgZ(1,"p"),D._uU(2),D.qZA(),D.GkF(3,null,1),D.YNc(5,c,1,1,"ng-template",null,2,D.W1O),D.qZA()),2&x){const R=D.MAs(6);D.Q6J("nzValidateStatus",te.errorState)("nzErrorTip",R),D.xp6(2),D.hij("errorState: ",te.errorState,"")}},directives:[_.t3,s.Fd,t.u_],encapsulation:2,changeDetection:0}),T})()};let E=(()=>{class T{}return T.\u0275fac=function(x){return new(x||T)},T.\u0275mod=D.oAB({type:T}),T.\u0275inj=D.cJS({imports:[[i.ez,n.UX,s.U5,t.X0.forChild({wrappers:[d]})]]}),T})()},5472:(ze,q,o)=>{o.d(q,{r:()=>M});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),D=o(5482),_=o(1894),c=o(5109),Y=o(6789),d=o(5e3);const T={wrappers:[{name:"form-container",component:(()=>{class x extends n.n2{}return x.\u0275fac=function(){let te;return function(ie){return(te||(te=d.n5z(x)))(ie||x)}}(),x.\u0275cmp=d.Xpm({type:x,selectors:[["cvc-form-container-wrapper"]],features:[d.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(R,ie){1&R&&(d.TgZ(0,"nz-row"),d.TgZ(1,"nz-col",0),d.TgZ(2,"nz-card",1),d.GkF(3,null,2),d.qZA(),d.qZA(),d.qZA()),2&R&&(d.xp6(2),d.Q6J("nzTitle",ie.to.label))},directives:[_.SK,_.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),x})()}]};let M=(()=>{class x{}return x.\u0275fac=function(R){return new(R||x)},x.\u0275mod=d.oAB({type:x}),x.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild(T),_.Jb,s.vh,D.cD,Y._,c.s]]}),x})()},7695:(ze,q,o)=>{o.d(q,{C:()=>O});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),D=o(5482),_=o(1894),c=o(5109),Y=o(6789),d=o(5e3),E=o(9552),T=o(647),M=o(404);function x(m,A){1&m&&d._UZ(0,"div",9),2&m&&d.Q6J("innerHtml",A.ngIf,d.oJD)}function te(m,A){1&m&&(d.TgZ(0,"div",10),d._uU(1,"Help not available for this field."),d.qZA())}function R(m,A){if(1&m&&(d.TgZ(0,"nz-collapse-panel",6),d.YNc(1,x,1,1,"div",7),d.YNc(2,te,2,0,"ng-template",null,8,d.W1O),d.qZA()),2&m){const L=A.ngIf,b=d.MAs(3),J=d.oxw().$implicit,u=d.MAs(3);d.Q6J("nzHeader",L)("nzActive",J.templateOptions.hasFocus)("nzExtra",u),d.xp6(1),d.Q6J("ngIf",null==J.templateOptions?null:J.templateOptions.helpText)("ngIfElse",b)}}function ie(m,A){if(1&m&&d._UZ(0,"formly-validation-message",14),2&m){const L=d.oxw(4).$implicit;d.Q6J("field",L)}}function j(m,A){if(1&m&&(d.ynx(0),d._UZ(1,"i",12),d.YNc(2,ie,1,1,"ng-template",null,13,d.W1O),d.BQk()),2&m){const L=d.MAs(3);d.xp6(1),d.Q6J("nzTooltipTitle",L)}}function Z(m,A){if(1&m&&(d.ynx(0),d.YNc(1,j,4,1,"ng-container",11),d.BQk()),2&m){const L=A.ngIf;d.xp6(1),d.Q6J("ngIf","INVALID"===L)}}function V(m,A){if(1&m&&(d.YNc(0,Z,2,1,"ng-container",11),d.ALo(1,"ngrxPush")),2&m){const L=d.oxw().$implicit;d.Q6J("ngIf",d.lcZ(1,1,L.formControl.statusChanges))}}function P(m,A){if(1&m&&(d.ynx(0),d.YNc(1,R,4,5,"nz-collapse-panel",4),d.YNc(2,V,2,3,"ng-template",null,5,d.W1O),d.BQk()),2&m){const L=A.$implicit;d.xp6(1),d.Q6J("ngIf",null==L.templateOptions?null:L.templateOptions.label)}}let G=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(L){return new(L||m)},m.\u0275cmp=d.Xpm({type:m,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(L,b){1&L&&(d.TgZ(0,"nz-affix",0),d.TgZ(1,"nz-card",1),d.TgZ(2,"nz-collapse",2),d.YNc(3,P,4,1,"ng-container",3),d.qZA(),d.qZA(),d.qZA()),2&L&&(d.Q6J("nzOffsetTop",0)("nzTarget",b.affixTo),d.xp6(2),d.Q6J("nzBordered",!1),d.xp6(1),d.Q6J("ngForOf",b.fieldGroup))},directives:[E.$,s.bd,D.yH,i.sg,i.O5,D.Zv,T.Ls,M.SY,n.u_],pipes:[t.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),m})();const $={name:"form-info",component:(()=>{class m extends n.n2{}return m.\u0275fac=function(){let A;return function(b){return(A||(A=d.n5z(m)))(b||m)}}(),m.\u0275cmp=d.Xpm({type:m,selectors:[["cvc-form-info-wrapper"]],features:[d.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(L,b){if(1&L&&(d.TgZ(0,"nz-row",0),d.TgZ(1,"nz-col",1),d.TgZ(2,"nz-card",2),d.GkF(3,null,3),d.qZA(),d.qZA(),d.TgZ(5,"nz-col",1),d.TgZ(6,"div",null,4),d._UZ(8,"cvc-form-info-card",5),d.qZA(),d.qZA(),d.qZA()),2&L){const J=d.MAs(7);d.xp6(1),d.Q6J("nzSpan",16),d.xp6(1),d.Q6J("nzTitle",b.to.label),d.xp6(3),d.Q6J("nzSpan",8),d.xp6(3),d.Q6J("fieldGroup",b.field.fieldGroup)("affixTo",J)}},directives:[_.SK,_.t3,s.bd,G],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),m})()};let O=(()=>{class m{}return m.\u0275fac=function(L){return new(L||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild({wrappers:[$]}),_.Jb,s.vh,D.cD,Y._,c.s]]}),m})()},8785:(ze,q,o)=>{o.d(q,{t:()=>se});var i=o(5e3),t=o(6123),n=o(8929),s=o(7625),D=o(712),_=o(9169),c=o(7484),Y=o(9808),d=o(2359),E=o(1894),T=o(4546),M=o(822),x=o(7525),te=o(3868),R=o(3075),ie=o(6042),j=o(2643),Z=o(2683);function V($,O){1&$&&i._UZ(0,"nz-alert",7)}function P($,O){if(1&$&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&$){const m=i.oxw();i.xp6(1),i.Q6J("errors",m.errorMessages)}}function G($,O){if(1&$){const m=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(L){return i.CHM(m),i.oxw().coiText=L}),i.qZA(),i.qZA()}if(2&$){const m=i.oxw();i.xp6(1),i.Q6J("ngModel",m.coiText)}}let se=(()=>{class ${constructor(m,A){this.updateCoiGql=m,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new t.U(A)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let A=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});A.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(L=>{L&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),A.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(L=>{L&&(this.errorMessages=L,this.success=!1)}),A.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.loading=L})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return $.\u0275fac=function(m){return new(m||$)(i.Y36(D.IP1),i.Y36(_.Y))},$.\u0275cmp=i.Xpm({type:$,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(m,A){1&m&&(i.TgZ(0,"nz-card"),i.YNc(1,V,1,0,"nz-alert",0),i.YNc(2,P,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(b){return A.coiStatus=b}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,G,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return A.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&m&&(i.xp6(1),i.Q6J("ngIf",A.success),i.xp6(1),i.Q6J("ngIf",A.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",A.loading),i.xp6(2),i.Q6J("ngModel",A.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===A.coiStatus),i.xp6(2),i.Q6J("disabled",A.loading||"coiPresent"===A.coiStatus&&(void 0===A.coiText||A.coiText.length<10)))},directives:[c.bd,Y.O5,d.r,E.SK,T.Nx,M.V,x.W,te.Dg,R.JJ,R.On,te.Of,R.Fj,ie.ix,j.dQ,Z.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),$})()},330:(ze,q,o)=>{o.d(q,{e:()=>M});var i=o(9808),t=o(3075),n=o(6949),s=o(7484),D=o(2359),_=o(4546),c=o(7008),Y=o(3868),d=o(7525),E=o(6042),T=o(5e3);let M=(()=>{class x{}return x.\u0275fac=function(R){return new(R||x)},x.\u0275mod=T.oAB({type:x}),x.\u0275inj=T.cJS({imports:[[i.ez,t.u5,_.U5,t.UX,n.WG,s.vh,D.L,Y.aF,E.sL,d.j,c.B]]}),x})()},3434:(ze,q,o)=>{o.d(q,{G:()=>se});var i=o(3075),t=o(8929),n=o(6064),s=o(6123),D=o(7625),_=o(5e3),c=o(712),Y=o(9169),d=o(325),E=o(7525),T=o(4546),M=o(9808),x=o(8776),te=o(1894),R=o(822),ie=o(2359);function j($,O){1&$&&_.GkF(0)}function Z($,O){if(1&$&&(_.TgZ(0,"nz-form-item"),_._UZ(1,"cvc-form-errors-alert",6),_.qZA()),2&$){const m=_.oxw(2);_.xp6(1),_.Q6J("errors",m.errorMessages)}}function V($,O){if(1&$&&(_.TgZ(0,"p"),_._uU(1,"View "),_.TgZ(2,"a",10),_._uU(3,"its details"),_.qZA(),_._uU(4,"."),_.qZA()),2&$){const m=_.oxw(3);_.xp6(2),_.MGl("routerLink","/variants/",m.newId,"/summary")}}function P($,O){if(1&$&&(_.ynx(0),_._UZ(1,"nz-alert",7),_.YNc(2,V,5,1,"ng-template",8,9,_.W1O),_.BQk()),2&$){const m=_.MAs(3),A=_.oxw(2);_.xp6(1),_.Q6J("nzMessage",A.isNew?"Variant Created":"Variant Already Exists")("nzDescription",m)}}function G($,O){if(1&$&&(_.YNc(0,Z,2,1,"nz-form-item",5),_.YNc(1,P,4,2,"ng-container",5)),2&$){const m=_.oxw();_.Q6J("ngIf",m.errorMessages.length>0),_.xp6(1),_.Q6J("ngIf",m.success)}}let se=(()=>{class ${constructor(m,A,L){this.submitVariantGQL=m,this.networkErrorService=A,this.route=L,this.destroy$=new t.xQ,this.formGroup=new i.cw({}),this.formOptions={formState:new n._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(A),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(m){let A=null==m?void 0:m.fields.gene[0].id,L=null==m?void 0:m.fields.variant;if(A&&L){let J=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:A,name:L},{},u=>{this.newId=u.addVariant.variant.id,this.isNew=u.addVariant.new});J.submitSuccess$.pipe((0,D.R)(this.destroy$)).subscribe(u=>{u&&(this.success=!0)}),J.submitError$.pipe((0,D.R)(this.destroy$)).subscribe(u=>{u&&(this.errorMessages=u,this.success=!1)}),J.isSubmitting$.pipe((0,D.R)(this.destroy$)).subscribe(u=>{this.loading=u})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return $.\u0275fac=function(m){return new(m||$)(_.Y36(c.LUc),_.Y36(Y.Y),_.Y36(d.gz))},$.\u0275cmp=_.Xpm({type:$,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(m,A){if(1&m&&(_.TgZ(0,"nz-spin",0),_.TgZ(1,"form",1),_.NdJ("ngSubmit",function(){return A.submitVariant(A.formModel)}),_.YNc(2,j,1,0,"ng-container",2),_.TgZ(3,"formly-form",3),_.NdJ("modelChange",function(b){return A.formModel=b}),_.qZA(),_.qZA(),_.qZA(),_.YNc(4,G,2,2,"ng-template",null,4,_.W1O)),2&m){const L=_.MAs(5);_.Q6J("nzSpinning",A.loading),_.xp6(1),_.Q6J("formGroup",A.formGroup),_.xp6(1),_.Q6J("ngTemplateOutlet",L),_.xp6(1),_.Q6J("form",A.formGroup)("fields",A.formFields)("model",A.formModel)("options",A.formOptions)}},directives:[E.W,i._Y,i.JL,T.Lr,i.sg,M.tP,x.T7,M.O5,te.SK,T.Nx,R.V,ie.r,d.yS],styles:[""]}),$})()},7058:(ze,q,o)=>{o.d(q,{e:()=>B});var i=o(9808),t=o(4623),n=o(4375),s=o(7008),D=o(7695),_=o(7055),c=o(7462),Y=o(8776),d=o(5109),E=o(2359),T=o(6042),M=o(4546),x=o(1894),te=o(3075),R=o(325),ie=o(1605),j=o(7525),Z=o(5472),V=o(4889),P=o(7484),G=o(8144),se=o(3618),$=o(5e3),O=o(9180),m=o(2643),A=o(1793),L=o(2683);const J={name:"submit-button",component:(()=>{class X extends Y.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return X.\u0275fac=function(Te){return new(Te||X)},X.\u0275cmp=$.Xpm({type:X,selectors:[["cvc-submit-button-type"]],features:[$.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Te,Me){1&Te&&($.TgZ(0,"cvc-form-buttons"),$.TgZ(1,"button",0),$._uU(2),$.qZA(),$.qZA()),2&Te&&($.xp6(1),$.Q6J("disabled",!Me.form.valid),$.xp6(1),$.hij(" ",Me.to.submitLabel," "))},directives:[O.Z,T.ix,m.dQ,A.m,L.w],styles:[""],changeDetection:0}),X})()};var u=o(1825);let U=(()=>{class X{}return X.\u0275fac=function(Te){return new(Te||X)},X.\u0275mod=$.oAB({type:X}),X.\u0275inj=$.cJS({imports:[[i.ez,te.UX,Y.X0.forChild({types:[J]}),T.sL,n.R,u.A]]}),X})(),B=(()=>{class X{}return X.\u0275fac=function(Te){return new(Te||X)},X.\u0275mod=$.oAB({type:X}),X.\u0275inj=$.cJS({imports:[[i.ez,R.Bz,te.UX,d.s,M.U5,E.L,x.Jb,T.sL,j.j,P.vh,G.zf,se.ZJ,Y.X0,s.B,n.R,D.C,_.N,c.o,t.K,ie.e,Z.r,V.E,U,d.s]]}),X})()},712:(ze,q,o)=>{o.d(q,{ti:()=>ci,$G1:()=>hr,iGM:()=>cr,KNk:()=>Cr,T97:()=>Er,RMv:()=>Qr,LUc:()=>Jr,iwm:()=>ve,Vr2:()=>f,A94:()=>Fs,mdl:()=>me,Gbq:()=>ho,bgg:()=>nr,u4i:()=>ye,ejK:()=>bs,uBv:()=>be,td:()=>zo,_Wm:()=>Be,Tq1:()=>No,q8c:()=>Ko,WRV:()=>Ai,IZ6:()=>Li,qf4:()=>Ui,Rdc:()=>Ki,gtM:()=>Ur,fpJ:()=>br,k2T:()=>Fr,UWf:()=>Oi,cMj:()=>Gs,UIR:()=>Co,E8d:()=>$e,P_b:()=>To,Mgx:()=>Ue,iST:()=>Eo,Kk:()=>Oo,OfU:()=>ke,kQf:()=>zi,l4w:()=>Ts,JQ3:()=>Gr,db2:()=>ca,h01:()=>Je,wg3:()=>Us,k7O:()=>Ao,kv3:()=>zr,R8w:()=>qe,GB2:()=>Qs,Zyn:()=>rt,dUU:()=>Lo,kq9:()=>ct,vRc:()=>Tr,Ud2:()=>Fo,dwB:()=>Vs,GYx:()=>gr,AO2:()=>Ve,YMi:()=>bo,BTF:()=>Go,wJ2:()=>ot,eY8:()=>Qo,_Aq:()=>dt,pHu:()=>Ws,tI1:()=>st,FId:()=>ns,Q_P:()=>Xr,Sx0:()=>y,Ybm:()=>Uo,Cp0:()=>ee,RTy:()=>F,m55:()=>le,sBY:()=>Js,kqt:()=>Se,Zhw:()=>Or,B0s:()=>ss,rzy:()=>Vo,OIL:()=>Wo,BQZ:()=>Fe,sfv:()=>mt,TNk:()=>Ks,rJ8:()=>Jo,FOU:()=>ds,Q4m:()=>Ar,Fvz:()=>gt,cCu:()=>Xs,VnG:()=>ft,_jb:()=>Ei,MYm:()=>Ti,oRL:()=>ht,lfy:()=>Nr,fow:()=>vt,X5f:()=>ei,WOS:()=>ea,Lr0:()=>na,Del:()=>ia,xlL:()=>zt,io:()=>ni,WGV:()=>sa,OHm:()=>ii,lYz:()=>_t,FKQ:()=>Lr,B97:()=>si,mII:()=>dr,ghc:()=>Xo,NQC:()=>Ct,JDX:()=>yt,VZq:()=>di,EwB:()=>cs,otH:()=>gi,FJi:()=>Tt,L5n:()=>hi,rZD:()=>It,SrV:()=>Et,Bk6:()=>da,TiL:()=>Ni,yic:()=>Dt,SJD:()=>on,F3s:()=>Ot,jw9:()=>St,g0X:()=>pa,iXf:()=>bn,NbY:()=>Vr,kQl:()=>At,Onj:()=>Mt,LLl:()=>sr,WFw:()=>is,tji:()=>As,o71:()=>Nt,jMx:()=>Ta,A4J:()=>Ci,c$m:()=>ir,Vj7:()=>es,D9L:()=>ps,SWk:()=>gs,aw3:()=>Es,Xft:()=>Ls,mpB:()=>xt,m$d:()=>Ca,IP1:()=>zs,LiH:()=>za,wRZ:()=>hs,wbP:()=>Cs,sLD:()=>ga,yqR:()=>ha,cEv:()=>Fi,i44:()=>Lt,vMt:()=>pr,tJ6:()=>bi,IRu:()=>Pt,Qzn:()=>pi,iJT:()=>Na,qP7:()=>at,Qtd:()=>Ea,Zo2:()=>Gi,ROj:()=>Os,FB1:()=>wt,q1D:()=>Oa,d4o:()=>Ft,huM:()=>Rt,ZYZ:()=>Wi,nnL:()=>Ns,Bo4:()=>La,ubO:()=>Aa,tw_:()=>Qi,wpb:()=>bt,BnY:()=>Kr,_eC:()=>Wr,fwG:()=>Vi,zwS:()=>Ji,pP7:()=>$t,Tt7:()=>Xi,Kmw:()=>er});var i=o(655);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}var s=o(9245);function D(e,a){for(var N,r=/\r\n|[\n\r]/g,h=1,S=a+1;(N=r.exec(e.body))&&N.index<a;)h+=1,S=a+1-(N.index+N[0].length);return{line:h,column:S}}function _(e){return c(e.source,D(e.source,e.start))}function c(e,a){var r=e.locationOffset.column-1,h=d(r)+e.body,S=a.line-1,Q=a.line+(e.locationOffset.line-1),ae=a.column+(1===a.line?r:0),Le="".concat(e.name,":").concat(Q,":").concat(ae,"\n"),we=h.split(/\r\n|[\n\r]/g),it=we[S];if(it.length>120){for(var Gt=Math.floor(ae/80),Zt=ae%80,je=[],Ze=0;Ze<it.length;Ze+=80)je.push(it.slice(Ze,Ze+80));return Le+Y([["".concat(Q),je[0]]].concat(je.slice(1,Gt+1).map(function(Vt){return["",Vt]}),[[" ",d(Zt-1)+"^"],["",je[Gt+1]]]))}return Le+Y([["".concat(Q-1),we[S-1]],["".concat(Q),it],["",d(ae-1)+"^"],["".concat(Q+1),we[S+1]]])}function Y(e){var a=e.filter(function(h){return void 0!==h[1]}),r=Math.max.apply(Math,a.map(function(h){return h[0].length}));return a.map(function(h){var N=h[1];return function E(e,a){return d(e-a.length)+a}(r,h[0])+(N?" | "+N:" |")}).join("\n")}function d(e){return Array(e+1).join(" ")}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function x(e,a){for(var r=0;r<a.length;r++){var h=a[r];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(e,h.key,h)}}function j(e,a){return!a||"object"!==T(a)&&"function"!=typeof a?Z(e):a}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){var a="function"==typeof Map?new Map:void 0;return V=function(h){if(null===h||!function se(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(h))return h;if("function"!=typeof h)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(h))return a.get(h);a.set(h,S)}function S(){return P(h,arguments,O(this).constructor)}return S.prototype=Object.create(h.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),$(S,h)},V(e)}function P(e,a,r){return(P=G()?Reflect.construct:function(S,N,Q){var H=[null];H.push.apply(H,N);var Le=new(Function.bind.apply(S,H));return Q&&$(Le,Q.prototype),Le}).apply(null,arguments)}function G(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function $(e,a){return($=Object.setPrototypeOf||function(h,S){return h.__proto__=S,h})(e,a)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}var m=function(e){!function R(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&$(e,a)}(r,e);var a=function ie(e){var a=G();return function(){var S,h=O(e);if(a){var N=O(this).constructor;S=Reflect.construct(h,arguments,N)}else S=h.apply(this,arguments);return j(this,S)}}(r);function r(h,S,N,Q,H,ae,Le){var we,it,Gt,Zt,je;(function M(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r),je=a.call(this,h);var tn,Ze=Array.isArray(S)?0!==S.length?S:void 0:S?[S]:void 0,Vt=N;!Vt&&Ze&&(Vt=null===(tn=Ze[0].loc)||void 0===tn?void 0:tn.source);var Wt,Bt=Q;!Bt&&Ze&&(Bt=Ze.reduce(function(ut,Ut){return Ut.loc&&ut.push(Ut.loc.start),ut},[])),Bt&&0===Bt.length&&(Bt=void 0),Q&&N?Wt=Q.map(function(ut){return D(N,ut)}):Ze&&(Wt=Ze.reduce(function(ut,Ut){return Ut.loc&&ut.push(D(Ut.loc.source,Ut.loc.start)),ut},[]));var kt=Le;if(null==kt&&null!=ae){var an=ae.extensions;(function n(e){return"object"==t(e)&&null!==e})(an)&&(kt=an)}return Object.defineProperties(Z(je),{name:{value:"GraphQLError"},message:{value:h,enumerable:!0,writable:!0},locations:{value:null!==(we=Wt)&&void 0!==we?we:void 0,enumerable:null!=Wt},path:{value:null!=H?H:void 0,enumerable:null!=H},nodes:{value:null!=Ze?Ze:void 0},source:{value:null!==(it=Vt)&&void 0!==it?it:void 0},positions:{value:null!==(Gt=Bt)&&void 0!==Gt?Gt:void 0},originalError:{value:ae},extensions:{value:null!==(Zt=kt)&&void 0!==Zt?Zt:void 0,enumerable:null!=kt}}),(null==ae?void 0:ae.stack)?(Object.defineProperty(Z(je),"stack",{value:ae.stack,writable:!0,configurable:!0}),j(je)):(Error.captureStackTrace?Error.captureStackTrace(Z(je),r):Object.defineProperty(Z(je),"stack",{value:Error().stack,writable:!0,configurable:!0}),je)}return function te(e,a,r){a&&x(e.prototype,a),r&&x(e,r)}(r,[{key:"toString",value:function(){return function A(e){var a=e.message;if(e.nodes)for(var r=0,h=e.nodes;r<h.length;r++){var S=h[r];S.loc&&(a+="\n\n"+_(S.loc))}else if(e.source&&e.locations)for(var N=0,Q=e.locations;N<Q.length;N++)a+="\n\n"+c(e.source,Q[N]);return a}(this)}},{key:s.YF,get:function(){return"Object"}}]),r}(V(Error));function L(e,a,r){return new m("Syntax Error: ".concat(r),void 0,e,[a])}var b=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),J=o(848),u=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),U=o(6261),B=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),X=o(2032),_e=function(){function e(r){var h=new J.WU(u.SOF,0,0,0,0,null);this.source=r,this.lastToken=h,this.token=h,this.line=1,this.lineStart=0}var a=e.prototype;return a.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},a.lookahead=function(){var h=this.token;if(h.kind!==u.EOF)do{var S;h=null!==(S=h.next)&&void 0!==S?S:h.next=xe(this,h)}while(h.kind===u.COMMENT);return h},e}();function Me(e){return isNaN(e)?u.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function xe(e,a){for(var r=e.source,h=r.body,S=h.length,N=a.end;N<S;){var Q=h.charCodeAt(N),H=e.line,ae=1+N-e.lineStart;switch(Q){case 65279:case 9:case 32:case 44:++N;continue;case 10:++N,++e.line,e.lineStart=N;continue;case 13:10===h.charCodeAt(N+1)?N+=2:++N,++e.line,e.lineStart=N;continue;case 33:return new J.WU(u.BANG,N,N+1,H,ae,a);case 35:return Ce(r,N,H,ae,a);case 36:return new J.WU(u.DOLLAR,N,N+1,H,ae,a);case 38:return new J.WU(u.AMP,N,N+1,H,ae,a);case 40:return new J.WU(u.PAREN_L,N,N+1,H,ae,a);case 41:return new J.WU(u.PAREN_R,N,N+1,H,ae,a);case 46:if(46===h.charCodeAt(N+1)&&46===h.charCodeAt(N+2))return new J.WU(u.SPREAD,N,N+3,H,ae,a);break;case 58:return new J.WU(u.COLON,N,N+1,H,ae,a);case 61:return new J.WU(u.EQUALS,N,N+1,H,ae,a);case 64:return new J.WU(u.AT,N,N+1,H,ae,a);case 91:return new J.WU(u.BRACKET_L,N,N+1,H,ae,a);case 93:return new J.WU(u.BRACKET_R,N,N+1,H,ae,a);case 123:return new J.WU(u.BRACE_L,N,N+1,H,ae,a);case 124:return new J.WU(u.PIPE,N,N+1,H,ae,a);case 125:return new J.WU(u.BRACE_R,N,N+1,H,ae,a);case 34:return 34===h.charCodeAt(N+1)&&34===h.charCodeAt(N+2)?he(r,N,H,ae,a,e):K(r,N,H,ae,a);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return pe(r,N,Q,H,ae,a);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return de(r,N,H,ae,a)}throw L(r,N,oe(Q))}return new J.WU(u.EOF,S,S,e.line,1+N-e.lineStart,a)}function oe(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Me(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Me(e),".")}function Ce(e,a,r,h,S){var Q,N=e.body,H=a;do{Q=N.charCodeAt(++H)}while(!isNaN(Q)&&(Q>31||9===Q));return new J.WU(u.COMMENT,a,H,r,h,S,N.slice(a+1,H))}function pe(e,a,r,h,S,N){var Q=e.body,H=r,ae=a,Le=!1;if(45===H&&(H=Q.charCodeAt(++ae)),48===H){if((H=Q.charCodeAt(++ae))>=48&&H<=57)throw L(e,ae,"Invalid number, unexpected digit after 0: ".concat(Me(H),"."))}else ae=Ae(e,ae,H),H=Q.charCodeAt(ae);if(46===H&&(Le=!0,H=Q.charCodeAt(++ae),ae=Ae(e,ae,H),H=Q.charCodeAt(ae)),(69===H||101===H)&&(Le=!0,(43===(H=Q.charCodeAt(++ae))||45===H)&&(H=Q.charCodeAt(++ae)),ae=Ae(e,ae,H),H=Q.charCodeAt(ae)),46===H||function Ne(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(H))throw L(e,ae,"Invalid number, expected digit but got: ".concat(Me(H),"."));return new J.WU(Le?u.FLOAT:u.INT,a,ae,h,S,N,Q.slice(a,ae))}function Ae(e,a,r){var h=e.body,S=a,N=r;if(N>=48&&N<=57){do{N=h.charCodeAt(++S)}while(N>=48&&N<=57);return S}throw L(e,S,"Invalid number, expected digit but got: ".concat(Me(N),"."))}function K(e,a,r,h,S){for(var N=e.body,Q=a+1,H=Q,ae=0,Le="";Q<N.length&&!isNaN(ae=N.charCodeAt(Q))&&10!==ae&&13!==ae;){if(34===ae)return Le+=N.slice(H,Q),new J.WU(u.STRING,a,Q+1,r,h,S,Le);if(ae<32&&9!==ae)throw L(e,Q,"Invalid character within String: ".concat(Me(ae),"."));if(++Q,92===ae){switch(Le+=N.slice(H,Q-1),ae=N.charCodeAt(Q)){case 34:Le+='"';break;case 47:Le+="/";break;case 92:Le+="\\";break;case 98:Le+="\b";break;case 102:Le+="\f";break;case 110:Le+="\n";break;case 114:Le+="\r";break;case 116:Le+="\t";break;case 117:var we=W(N.charCodeAt(Q+1),N.charCodeAt(Q+2),N.charCodeAt(Q+3),N.charCodeAt(Q+4));if(we<0){var it=N.slice(Q+1,Q+5);throw L(e,Q,"Invalid character escape sequence: \\u".concat(it,"."))}Le+=String.fromCharCode(we),Q+=4;break;default:throw L(e,Q,"Invalid character escape sequence: \\".concat(String.fromCharCode(ae),"."))}H=++Q}}throw L(e,Q,"Unterminated string.")}function he(e,a,r,h,S,N){for(var Q=e.body,H=a+3,ae=H,Le=0,we="";H<Q.length&&!isNaN(Le=Q.charCodeAt(H));){if(34===Le&&34===Q.charCodeAt(H+1)&&34===Q.charCodeAt(H+2))return we+=Q.slice(ae,H),new J.WU(u.BLOCK_STRING,a,H+3,r,h,S,(0,X.W7)(we));if(Le<32&&9!==Le&&10!==Le&&13!==Le)throw L(e,H,"Invalid character within String: ".concat(Me(Le),"."));10===Le?(++H,++N.line,N.lineStart=H):13===Le?(10===Q.charCodeAt(H+1)?H+=2:++H,++N.line,N.lineStart=H):92===Le&&34===Q.charCodeAt(H+1)&&34===Q.charCodeAt(H+2)&&34===Q.charCodeAt(H+3)?(we+=Q.slice(ae,H)+'"""',ae=H+=4):++H}throw L(e,H,"Unterminated string.")}function W(e,a,r,h){return ge(e)<<12|ge(a)<<8|ge(r)<<4|ge(h)}function ge(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function de(e,a,r,h,S){for(var N=e.body,Q=N.length,H=a+1,ae=0;H!==Q&&!isNaN(ae=N.charCodeAt(H))&&(95===ae||ae>=48&&ae<=57||ae>=65&&ae<=90||ae>=97&&ae<=122);)++H;return new J.WU(u.NAME,a,H,r,h,S,N.slice(a,H))}var ue=function(){function e(r,h){var S=(0,U.T)(r)?r:new U.H(r);this._lexer=new _e(S),this._options=h}var a=e.prototype;return a.parseName=function(){var h=this.expectToken(u.NAME);return{kind:b.NAME,value:h.value,loc:this.loc(h)}},a.parseDocument=function(){var h=this._lexer.token;return{kind:b.DOCUMENT,definitions:this.many(u.SOF,this.parseDefinition,u.EOF),loc:this.loc(h)}},a.parseDefinition=function(){if(this.peek(u.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(u.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},a.parseOperationDefinition=function(){var h=this._lexer.token;if(this.peek(u.BRACE_L))return{kind:b.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(h)};var N,S=this.parseOperationType();return this.peek(u.NAME)&&(N=this.parseName()),{kind:b.OPERATION_DEFINITION,operation:S,name:N,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(h)}},a.parseOperationType=function(){var h=this.expectToken(u.NAME);switch(h.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(h)},a.parseVariableDefinitions=function(){return this.optionalMany(u.PAREN_L,this.parseVariableDefinition,u.PAREN_R)},a.parseVariableDefinition=function(){var h=this._lexer.token;return{kind:b.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(u.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(u.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(h)}},a.parseVariable=function(){var h=this._lexer.token;return this.expectToken(u.DOLLAR),{kind:b.VARIABLE,name:this.parseName(),loc:this.loc(h)}},a.parseSelectionSet=function(){var h=this._lexer.token;return{kind:b.SELECTION_SET,selections:this.many(u.BRACE_L,this.parseSelection,u.BRACE_R),loc:this.loc(h)}},a.parseSelection=function(){return this.peek(u.SPREAD)?this.parseFragment():this.parseField()},a.parseField=function(){var N,Q,h=this._lexer.token,S=this.parseName();return this.expectOptionalToken(u.COLON)?(N=S,Q=this.parseName()):Q=S,{kind:b.FIELD,alias:N,name:Q,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(u.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(h)}},a.parseArguments=function(h){return this.optionalMany(u.PAREN_L,h?this.parseConstArgument:this.parseArgument,u.PAREN_R)},a.parseArgument=function(){var h=this._lexer.token,S=this.parseName();return this.expectToken(u.COLON),{kind:b.ARGUMENT,name:S,value:this.parseValueLiteral(!1),loc:this.loc(h)}},a.parseConstArgument=function(){var h=this._lexer.token;return{kind:b.ARGUMENT,name:this.parseName(),value:(this.expectToken(u.COLON),this.parseValueLiteral(!0)),loc:this.loc(h)}},a.parseFragment=function(){var h=this._lexer.token;this.expectToken(u.SPREAD);var S=this.expectOptionalKeyword("on");return!S&&this.peek(u.NAME)?{kind:b.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(h)}:{kind:b.INLINE_FRAGMENT,typeCondition:S?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(h)}},a.parseFragmentDefinition=function(){var h,S=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(h=this._options)||void 0===h?void 0:h.experimentalFragmentVariables)?{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(S)}:{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(S)}},a.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},a.parseValueLiteral=function(h){var S=this._lexer.token;switch(S.kind){case u.BRACKET_L:return this.parseList(h);case u.BRACE_L:return this.parseObject(h);case u.INT:return this._lexer.advance(),{kind:b.INT,value:S.value,loc:this.loc(S)};case u.FLOAT:return this._lexer.advance(),{kind:b.FLOAT,value:S.value,loc:this.loc(S)};case u.STRING:case u.BLOCK_STRING:return this.parseStringLiteral();case u.NAME:switch(this._lexer.advance(),S.value){case"true":return{kind:b.BOOLEAN,value:!0,loc:this.loc(S)};case"false":return{kind:b.BOOLEAN,value:!1,loc:this.loc(S)};case"null":return{kind:b.NULL,loc:this.loc(S)};default:return{kind:b.ENUM,value:S.value,loc:this.loc(S)}}case u.DOLLAR:if(!h)return this.parseVariable()}throw this.unexpected()},a.parseStringLiteral=function(){var h=this._lexer.token;return this._lexer.advance(),{kind:b.STRING,value:h.value,block:h.kind===u.BLOCK_STRING,loc:this.loc(h)}},a.parseList=function(h){var S=this,N=this._lexer.token;return{kind:b.LIST,values:this.any(u.BRACKET_L,function(){return S.parseValueLiteral(h)},u.BRACKET_R),loc:this.loc(N)}},a.parseObject=function(h){var S=this,N=this._lexer.token;return{kind:b.OBJECT,fields:this.any(u.BRACE_L,function(){return S.parseObjectField(h)},u.BRACE_R),loc:this.loc(N)}},a.parseObjectField=function(h){var S=this._lexer.token,N=this.parseName();return this.expectToken(u.COLON),{kind:b.OBJECT_FIELD,name:N,value:this.parseValueLiteral(h),loc:this.loc(S)}},a.parseDirectives=function(h){for(var S=[];this.peek(u.AT);)S.push(this.parseDirective(h));return S},a.parseDirective=function(h){var S=this._lexer.token;return this.expectToken(u.AT),{kind:b.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(h),loc:this.loc(S)}},a.parseTypeReference=function(){var S,h=this._lexer.token;return this.expectOptionalToken(u.BRACKET_L)?(S=this.parseTypeReference(),this.expectToken(u.BRACKET_R),S={kind:b.LIST_TYPE,type:S,loc:this.loc(h)}):S=this.parseNamedType(),this.expectOptionalToken(u.BANG)?{kind:b.NON_NULL_TYPE,type:S,loc:this.loc(h)}:S},a.parseNamedType=function(){var h=this._lexer.token;return{kind:b.NAMED_TYPE,name:this.parseName(),loc:this.loc(h)}},a.parseTypeSystemDefinition=function(){var h=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(h.kind===u.NAME)switch(h.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(h)},a.peekDescription=function(){return this.peek(u.STRING)||this.peek(u.BLOCK_STRING)},a.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},a.parseSchemaDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("schema");var N=this.parseDirectives(!0),Q=this.many(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);return{kind:b.SCHEMA_DEFINITION,description:S,directives:N,operationTypes:Q,loc:this.loc(h)}},a.parseOperationTypeDefinition=function(){var h=this._lexer.token,S=this.parseOperationType();this.expectToken(u.COLON);var N=this.parseNamedType();return{kind:b.OPERATION_TYPE_DEFINITION,operation:S,type:N,loc:this.loc(h)}},a.parseScalarTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("scalar");var N=this.parseName(),Q=this.parseDirectives(!0);return{kind:b.SCALAR_TYPE_DEFINITION,description:S,name:N,directives:Q,loc:this.loc(h)}},a.parseObjectTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("type");var N=this.parseName(),Q=this.parseImplementsInterfaces(),H=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:b.OBJECT_TYPE_DEFINITION,description:S,name:N,interfaces:Q,directives:H,fields:ae,loc:this.loc(h)}},a.parseImplementsInterfaces=function(){var h;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(h=this._options)||void 0===h?void 0:h.allowLegacySDLImplementsInterfaces)){var S=[];this.expectOptionalToken(u.AMP);do{S.push(this.parseNamedType())}while(this.expectOptionalToken(u.AMP)||this.peek(u.NAME));return S}return this.delimitedMany(u.AMP,this.parseNamedType)},a.parseFieldsDefinition=function(){var h;return!0===(null===(h=this._options)||void 0===h?void 0:h.allowLegacySDLEmptyFields)&&this.peek(u.BRACE_L)&&this._lexer.lookahead().kind===u.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(u.BRACE_L,this.parseFieldDefinition,u.BRACE_R)},a.parseFieldDefinition=function(){var h=this._lexer.token,S=this.parseDescription(),N=this.parseName(),Q=this.parseArgumentDefs();this.expectToken(u.COLON);var H=this.parseTypeReference(),ae=this.parseDirectives(!0);return{kind:b.FIELD_DEFINITION,description:S,name:N,arguments:Q,type:H,directives:ae,loc:this.loc(h)}},a.parseArgumentDefs=function(){return this.optionalMany(u.PAREN_L,this.parseInputValueDef,u.PAREN_R)},a.parseInputValueDef=function(){var h=this._lexer.token,S=this.parseDescription(),N=this.parseName();this.expectToken(u.COLON);var H,Q=this.parseTypeReference();this.expectOptionalToken(u.EQUALS)&&(H=this.parseValueLiteral(!0));var ae=this.parseDirectives(!0);return{kind:b.INPUT_VALUE_DEFINITION,description:S,name:N,type:Q,defaultValue:H,directives:ae,loc:this.loc(h)}},a.parseInterfaceTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("interface");var N=this.parseName(),Q=this.parseImplementsInterfaces(),H=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:b.INTERFACE_TYPE_DEFINITION,description:S,name:N,interfaces:Q,directives:H,fields:ae,loc:this.loc(h)}},a.parseUnionTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("union");var N=this.parseName(),Q=this.parseDirectives(!0),H=this.parseUnionMemberTypes();return{kind:b.UNION_TYPE_DEFINITION,description:S,name:N,directives:Q,types:H,loc:this.loc(h)}},a.parseUnionMemberTypes=function(){return this.expectOptionalToken(u.EQUALS)?this.delimitedMany(u.PIPE,this.parseNamedType):[]},a.parseEnumTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("enum");var N=this.parseName(),Q=this.parseDirectives(!0),H=this.parseEnumValuesDefinition();return{kind:b.ENUM_TYPE_DEFINITION,description:S,name:N,directives:Q,values:H,loc:this.loc(h)}},a.parseEnumValuesDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseEnumValueDefinition,u.BRACE_R)},a.parseEnumValueDefinition=function(){var h=this._lexer.token,S=this.parseDescription(),N=this.parseName(),Q=this.parseDirectives(!0);return{kind:b.ENUM_VALUE_DEFINITION,description:S,name:N,directives:Q,loc:this.loc(h)}},a.parseInputObjectTypeDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("input");var N=this.parseName(),Q=this.parseDirectives(!0),H=this.parseInputFieldsDefinition();return{kind:b.INPUT_OBJECT_TYPE_DEFINITION,description:S,name:N,directives:Q,fields:H,loc:this.loc(h)}},a.parseInputFieldsDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseInputValueDef,u.BRACE_R)},a.parseTypeSystemExtension=function(){var h=this._lexer.lookahead();if(h.kind===u.NAME)switch(h.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(h)},a.parseSchemaExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var S=this.parseDirectives(!0),N=this.optionalMany(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);if(0===S.length&&0===N.length)throw this.unexpected();return{kind:b.SCHEMA_EXTENSION,directives:S,operationTypes:N,loc:this.loc(h)}},a.parseScalarTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var S=this.parseName(),N=this.parseDirectives(!0);if(0===N.length)throw this.unexpected();return{kind:b.SCALAR_TYPE_EXTENSION,name:S,directives:N,loc:this.loc(h)}},a.parseObjectTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var S=this.parseName(),N=this.parseImplementsInterfaces(),Q=this.parseDirectives(!0),H=this.parseFieldsDefinition();if(0===N.length&&0===Q.length&&0===H.length)throw this.unexpected();return{kind:b.OBJECT_TYPE_EXTENSION,name:S,interfaces:N,directives:Q,fields:H,loc:this.loc(h)}},a.parseInterfaceTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var S=this.parseName(),N=this.parseImplementsInterfaces(),Q=this.parseDirectives(!0),H=this.parseFieldsDefinition();if(0===N.length&&0===Q.length&&0===H.length)throw this.unexpected();return{kind:b.INTERFACE_TYPE_EXTENSION,name:S,interfaces:N,directives:Q,fields:H,loc:this.loc(h)}},a.parseUnionTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var S=this.parseName(),N=this.parseDirectives(!0),Q=this.parseUnionMemberTypes();if(0===N.length&&0===Q.length)throw this.unexpected();return{kind:b.UNION_TYPE_EXTENSION,name:S,directives:N,types:Q,loc:this.loc(h)}},a.parseEnumTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var S=this.parseName(),N=this.parseDirectives(!0),Q=this.parseEnumValuesDefinition();if(0===N.length&&0===Q.length)throw this.unexpected();return{kind:b.ENUM_TYPE_EXTENSION,name:S,directives:N,values:Q,loc:this.loc(h)}},a.parseInputObjectTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var S=this.parseName(),N=this.parseDirectives(!0),Q=this.parseInputFieldsDefinition();if(0===N.length&&0===Q.length)throw this.unexpected();return{kind:b.INPUT_OBJECT_TYPE_EXTENSION,name:S,directives:N,fields:Q,loc:this.loc(h)}},a.parseDirectiveDefinition=function(){var h=this._lexer.token,S=this.parseDescription();this.expectKeyword("directive"),this.expectToken(u.AT);var N=this.parseName(),Q=this.parseArgumentDefs(),H=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var ae=this.parseDirectiveLocations();return{kind:b.DIRECTIVE_DEFINITION,description:S,name:N,arguments:Q,repeatable:H,locations:ae,loc:this.loc(h)}},a.parseDirectiveLocations=function(){return this.delimitedMany(u.PIPE,this.parseDirectiveLocation)},a.parseDirectiveLocation=function(){var h=this._lexer.token,S=this.parseName();if(void 0!==B[S.value])return S;throw this.unexpected(h)},a.loc=function(h){var S;if(!0!==(null===(S=this._options)||void 0===S?void 0:S.noLocation))return new J.Ye(h,this._lexer.lastToken,this._lexer.source)},a.peek=function(h){return this._lexer.token.kind===h},a.expectToken=function(h){var S=this._lexer.token;if(S.kind===h)return this._lexer.advance(),S;throw L(this._lexer.source,S.start,"Expected ".concat(w(h),", found ").concat(Oe(S),"."))},a.expectOptionalToken=function(h){var S=this._lexer.token;if(S.kind===h)return this._lexer.advance(),S},a.expectKeyword=function(h){var S=this._lexer.token;if(S.kind!==u.NAME||S.value!==h)throw L(this._lexer.source,S.start,'Expected "'.concat(h,'", found ').concat(Oe(S),"."));this._lexer.advance()},a.expectOptionalKeyword=function(h){var S=this._lexer.token;return S.kind===u.NAME&&S.value===h&&(this._lexer.advance(),!0)},a.unexpected=function(h){var S=null!=h?h:this._lexer.token;return L(this._lexer.source,S.start,"Unexpected ".concat(Oe(S),"."))},a.any=function(h,S,N){this.expectToken(h);for(var Q=[];!this.expectOptionalToken(N);)Q.push(S.call(this));return Q},a.optionalMany=function(h,S,N){if(this.expectOptionalToken(h)){var Q=[];do{Q.push(S.call(this))}while(!this.expectOptionalToken(N));return Q}return[]},a.many=function(h,S,N){this.expectToken(h);var Q=[];do{Q.push(S.call(this))}while(!this.expectOptionalToken(N));return Q},a.delimitedMany=function(h,S){this.expectOptionalToken(h);var N=[];do{N.push(S.call(this))}while(this.expectOptionalToken(h));return N},e}();function Oe(e){var a=e.value;return w(e.kind)+(null!=a?' "'.concat(a,'"'):"")}function w(e){return function Te(e){return e===u.BANG||e===u.DOLLAR||e===u.AMP||e===u.PAREN_L||e===u.PAREN_R||e===u.SPREAD||e===u.COLON||e===u.EQUALS||e===u.AT||e===u.BRACKET_L||e===u.BRACKET_R||e===u.BRACE_L||e===u.PIPE||e===u.BRACE_R}(e)?'"'.concat(e,'"'):e}var fe=new Map,k=new Map,Ie=!0,Re=!1;function Ge(e){return e.replace(/[\s,]+/g," ").trim()}function Ye(e){var a=Ge(e);if(!fe.has(a)){var r=function Pe(e,a){return new ue(e,a).parseDocument()}(e,{experimentalFragmentVariables:Re,allowLegacyFragmentVariables:Re});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");fe.set(a,function Ke(e){var a=new Set(e.definitions);a.forEach(function(h){h.loc&&delete h.loc,Object.keys(h).forEach(function(S){var N=h[S];N&&"object"==typeof N&&a.add(N)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(function nt(e){var a=new Set,r=[];return e.definitions.forEach(function(h){if("FragmentDefinition"===h.kind){var S=h.name.value,N=function tt(e){return Ge(e.source.body.substring(e.start,e.end))}(h.loc),Q=k.get(S);Q&&!Q.has(N)?Ie&&console.warn("Warning: fragment with name "+S+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):Q||k.set(S,Q=new Set),Q.add(N),a.has(N)||(a.add(N),r.push(h))}else r.push(h)}),(0,i.pi)((0,i.pi)({},e),{definitions:r})}(r)))}return fe.get(a)}function C(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var h=e[0];return a.forEach(function(S,N){h+=S&&"Document"===S.kind?S.loc.source.body:S,h+=e[N+1]}),Ye(h)}var e,Qe_gql=C;(e=C||(C={})).gql=Qe_gql,e.resetCaches=function He(){fe.clear(),k.clear()},e.disableFragmentWarnings=function Xe(){Ie=!1},e.enableExperimentalFragmentVariables=function We(){Re=!0},e.disableExperimentalFragmentVariables=function lt(){Re=!1},C.default=C;var v=o(9298),l=o(5e3),ve=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(ve||(ve={})),ve))(),f=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(f||(f={})),f))(),me=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(me||(me={})),me))(),ye=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ye||(ye={})),ye))(),be=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(be||(be={})),be))(),Be=(()=>(function(e){e.And="AND",e.Or="OR"}(Be||(Be={})),Be))(),$e=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}($e||($e={})),$e))(),Ue=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Ue||(Ue={})),Ue))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),qe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(qe||(qe={})),qe))(),rt=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(rt||(rt={})),rt))(),ct=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(ct||(ct={})),ct))(),Ve=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Ve||(Ve={})),Ve))(),ot=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(ot||(ot={})),ot))(),dt=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(dt||(dt={})),dt))(),st=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(st||(st={})),st))(),y=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(y||(y={})),y))(),ee=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(ee||(ee={})),ee))(),F=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(F||(F={})),F))(),le=(()=>(function(e){e.Accepted="ACCEPTED",e.All="ALL",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(le||(le={})),le))(),Se=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(Se||(Se={})),Se))(),Fe=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(Fe||(Fe={})),Fe))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Eq="EQ",e.Ge="GE",e.Gt="GT",e.Le="LE",e.Lt="LT",e.Ne="NE"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Id="ID",e.Name="NAME"}(zt||(zt={})),zt))(),_t=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(_t||(_t={})),_t))(),Ct=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(Ct||(Ct={})),Ct))(),yt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(yt||(yt={})),yt))(),Tt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(It||(It={})),It))(),Et=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Et||(Et={})),Et))(),Dt=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(Dt||(Dt={})),Dt))(),Ot=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Ot||(Ot={})),Ot))(),St=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.CreatedAt="CREATED_AT",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(St||(St={})),St))(),At=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.SuggestionCount="SUGGESTION_COUNT",e.Year="YEAR"}(At||(At={})),At))(),Mt=(()=>(function(e){e.Contains="CONTAINS",e.DoesNotContain="DOES_NOT_CONTAIN",e.Eq="EQ",e.Ne="NE",e.StartsWith="STARTS_WITH"}(Mt||(Mt={})),Mt))(),Nt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Nt||(Nt={})),Nt))(),xt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(xt||(xt={})),xt))(),Lt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Lt||(Lt={})),Lt))(),Pt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Pt||(Pt={})),Pt))(),at=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(at||(at={})),at))(),wt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(wt||(wt={})),wt))(),Ft=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(Ft||(Ft={})),Ft))(),Rt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Rt||(Rt={})),Rt))(),bt=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(bt||(bt={})),bt))(),$t=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}($t||($t={})),$t))();const Jt=C`
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
    `,jt=C`
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
    `,Kt=C`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ht=C`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Yt=C`
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
    `,Xt=C`
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
    `,qt=C`
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
    `,en=C`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,g=C`
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
    `,ne=C`
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
    ${g}`,p=C`
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
    `,I=C`
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
    `,Qt=C`
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
    `,cn=C`
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
    `,ln=C`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,dn=C`
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
    `,pn=C`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,mn=C`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,gn=C`
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
    `,fn=C`
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
    `,hn=C`
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
    `,vn=C`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,zn=C`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,_n=C`
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
    `,Cn=C`
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
    `,yn=C`
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
    `,Tn=C`
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
    `,In=C`
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
    `,En=C`
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
    `,Dn=C`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,On=C`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,Sn=C`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,An=C`
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
    `,Nn=C`
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
    `,xn=C`
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
    `,Ln=C`
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
    `,Pn=C`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Fn=C`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,Rn=C`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,nn=C`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,on=C`
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
    `,rn=C`
    fragment VariantTypeaheadFields on Variant {
  id
  name
  variantAliases
}
    `,$n=C`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,Gn=(C`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,C`
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
    `,Un=C`
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
    `,wn=C`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,Qn=C`
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
    `,Vn=C`
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
    `}`,Yn=C`
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
    `,Wn=C`
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
    `,kn=C`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,Jn=C`
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
    `,jn=C`
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
    `,Kn=C`
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
    `,Hn=C`
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
    `,Xn=C`
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
    `,qn=C`
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
    `,eo=C`
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
    `,to=C`
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
    `,no=C`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,oo=C`
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
    `,io=C`
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
    `,ro=C`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,so=C`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,ao=C`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,sn=C`
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
    ${g}`,co=C`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,lo=C`
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
    `,uo=C`
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
    `,po=C`
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
    `,go=C`
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
    `}`,fo=C`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Jt}`;let ho=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=C`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatusFilter, $cardView: Boolean!) {
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
    ${jt}`;let zo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=C`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Kt}`;let Co=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=C`
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
    ${Ht}`;let To=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=C`
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
    ${Yt}`;let Eo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Io}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=C`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Xt}`;let Oo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Do}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=C`
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
    `;let Ao=(()=>{class e extends v.AE{constructor(r){super(r),this.document=So}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mo=C`
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
    ${qt}`;let No=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Mo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xo=C`
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
    `;let Lo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=C`
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
    ${en}`;let Fo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Po}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=C`
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
    `;let bo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ro}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $o=C`
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
    ${ne}`;let Go=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bo=C`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${p}`;let Uo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=C`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $status: EvidenceStatusFilter, $cardView: Boolean!) {
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
    ${I}`;let Qo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=C`
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
    ${De}`;let Vo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=C`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${et}`;let Wo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=C`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Qt}`;let Jo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ko}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=C`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $searchScope: GeneSearchFilter, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    drugName: $drugName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
    searchScope: $searchScope
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
    ${cn}`;let Ko=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=C`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${ln}`;let Xo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ho}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=C`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${dn}`;let ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ti=C`
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
    ${un}`;let ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ti}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=C`
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
    `;let ii=(()=>{class e extends v.AE{constructor(r){super(r),this.document=oi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ri=C`
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
    ${pn}`;let si=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ri}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ai=C`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ci=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const li=C`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let di=(()=>{class e extends v.mm{constructor(r){super(r),this.document=li}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=C`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${mn}`;let pi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ui}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mi=C`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${gn}`;let gi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=C`
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
    ${fn}`;let hi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vi=C`
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
    ${hn}`;let zi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _i=C`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${vn}`;let Ci=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yi=C`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Ti=(()=>{class e extends v.mm{constructor(r){super(r),this.document=yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ii=C`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Ei=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ii}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=C`
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
    ${zn}`;let Oi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=C`
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
    ${_n}`;let Ai=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Si}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Mi=C`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Cn}`;let Ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Mi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=C`
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
    ${yn}`;let Li=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=C`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Tn}`;let Fi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ri=C`
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
    ${In}`;let bi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ri}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=C`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${En}`;let Gi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=C`
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
    ${Dn}`;let Ui=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wi=C`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${On}`;let Qi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=C`
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
    ${Sn}`;let Vi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yi=C`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${An}`;let Wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=C`
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
    ${Mn}`;let Ji=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ki}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ji=C`
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
    ${Nn}`;let Ki=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ji}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hi=C`
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
    `;let Xi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qi=C`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let er=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=C`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${xn}`;let nr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=tr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const or=C`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let ir=(()=>{class e extends v.mm{constructor(r){super(r),this.document=or}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=C`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let sr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=rr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=C`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Yt}`;let cr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=C`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Ln}`;let dr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=lr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ur=C`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let pr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ur}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=C`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let gr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=C`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let hr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=C`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let zr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=C`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Pn}`;let Cr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=_r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=C`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Tr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=C`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${Fn}`;let Er=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ir}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=C`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Or=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=C`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Rn}`;let Ar=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mr=C`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Nr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Mr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xr=C`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Lr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=C`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nn}`;let Fr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rr=C`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let br=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Rr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $r=C`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Gr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=$r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Br=C`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ur=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Br}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=C`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${on}`;let Qr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=wr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zr=C`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nn}`;let Vr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=C`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${rn}`;let Wr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kr=C`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${$n}`;let Jr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=kr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${rn}`;const jr=C`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Kr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=C`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Gn}`;let Xr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=C`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let es=(()=>{class e extends v.mm{constructor(r){super(r),this.document=qr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=C`
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
    `;let ns=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ts}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Bn}`;const os=C`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let is=(()=>{class e extends v.mm{constructor(r){super(r),this.document=os}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=C`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let ss=(()=>{class e extends v.mm{constructor(r){super(r),this.document=rs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=C`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let cs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=as}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=C`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Un}`;let ds=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ls}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const us=C`
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
    `;let ps=(()=>{class e extends v.mm{constructor(r){super(r),this.document=us}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${wn}`;const ms=C`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let gs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ms}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=C`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let hs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=fs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=C`
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
    `;let zs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=C`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Cs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=_s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=C`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Ts=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=C`
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
    `;let Es=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Is}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=C`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Qn}`;let Os=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=C`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let As=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ss}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ms=C`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Vn}`;let Ns=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ms}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xs=C`
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
    `;let Ls=(()=>{class e extends v.mm{constructor(r){super(r),this.document=xs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=C`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Yn}`;let Fs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ps}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rs=C`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Wn}`;let bs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Rs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $s=C`
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
    `;let Gs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bs=C`
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
    `;let Us=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=C`
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
    `;let Qs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ws}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zs=C`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${kn}`;let Vs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ys=C`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Jn}`;let Ws=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ks=C`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${jn}`;let Js=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ks}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=C`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Kn}`;let Ks=(()=>{class e extends v.AE{constructor(r){super(r),this.document=js}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hs=C`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Hn}`;let Xs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qs=C`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Xn}`;let ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ta=C`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${qn}`;let na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ta}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oa=C`
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
    ${eo}`;let ia=(()=>{class e extends v.AE{constructor(r){super(r),this.document=oa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ra=C`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let sa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ra}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const aa=C`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${to}`;let ca=(()=>{class e extends v.AE{constructor(r){super(r),this.document=aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const la=C`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${no}`;let da=(()=>{class e extends v.AE{constructor(r){super(r),this.document=la}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ua=C`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${oo}`;let pa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ua}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ma=C`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${io}`;let ga=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ma}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fa=C`
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
    ${ao}
${so}
${ro}
${sn}`;let ha=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const va=C`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${sn}`;let za=(()=>{class e extends v.mm{constructor(r){super(r),this.document=va}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _a=C`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${co}`;let Ca=(()=>{class e extends v.mm{constructor(r){super(r),this.document=_a}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ya=C`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Ta=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ya}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ia=C`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${lo}`;let Ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ia}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
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
    `;const Da=C`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${uo}`;let Oa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Da}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sa=C`
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
    `;let Aa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ma=C`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${po}`;let Na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ma}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xa=C`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${go}`;let La=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(ze,q,o)=>{o.r(q),o.d(q,{LayoutModule:()=>en});var i=o(9808),t=o(325),n=o(5e3),s=o(9350),D=o(8929),_=o(7625),c=o(655),Y=o(4090),d=o(1721),E=o(4219),T=o(925),M=o(647),x=o(226),te=o(5113);const R=["*"],ie=["nz-sider-trigger",""];function j(g,ne){}function Z(g,ne){if(1&g&&(n.ynx(0),n.YNc(1,j,0,0,"ng-template",3),n.BQk()),2&g){const p=n.oxw(),I=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzZeroTrigger||I)}}function V(g,ne){}function P(g,ne){if(1&g&&(n.ynx(0),n.YNc(1,V,0,0,"ng-template",3),n.BQk()),2&g){const p=n.oxw(),I=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzTrigger||I)}}function G(g,ne){if(1&g&&n._UZ(0,"i",5),2&g){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"right":"left")}}function se(g,ne){if(1&g&&n._UZ(0,"i",5),2&g){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"left":"right")}}function $(g,ne){if(1&g&&(n.YNc(0,G,1,1,"i",4),n.YNc(1,se,1,1,"i",4)),2&g){const p=n.oxw();n.Q6J("ngIf",!p.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",p.nzReverseArrow)}}function O(g,ne){1&g&&n._UZ(0,"i",6)}function m(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(p);const ce=n.oxw();return ce.setCollapsed(!ce.nzCollapsed)}),n.qZA()}if(2&g){const p=n.oxw();n.Q6J("matchBreakPoint",p.matchBreakPoint)("nzCollapsedWidth",p.nzCollapsedWidth)("nzCollapsed",p.nzCollapsed)("nzBreakpoint",p.nzBreakpoint)("nzReverseArrow",p.nzReverseArrow)("nzTrigger",p.nzTrigger)("nzZeroTrigger",p.nzZeroTrigger)("siderWidth",p.widthSetting)}}let A=(()=>{class g{constructor(p,I){this.elementRef=p,this.renderer=I,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:R,decls:1,vars:0,template:function(p,I){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),b=(()=>{class g{constructor(p,I){this.elementRef=p,this.renderer=I,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(p,I){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),J=(()=>{class g{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(p,I){2&p&&(n.Udp("width",I.isNormalTrigger?I.siderWidth:null),n.ekj("ant-layout-sider-trigger",I.isNormalTrigger)("ant-layout-sider-zero-width-trigger",I.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",I.isZeroTrigger&&I.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",I.isZeroTrigger&&!I.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:ie,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(p,I){1&p&&(n.YNc(0,Z,2,1,"ng-container",0),n.YNc(1,P,2,1,"ng-container",0),n.YNc(2,$,2,2,"ng-template",null,1,n.W1O),n.YNc(4,O,1,0,"ng-template",null,2,n.W1O)),2&p&&(n.Q6J("ngIf",I.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",I.isNormalTrigger))},directives:[i.O5,i.tP,M.Ls],encapsulation:2,changeDetection:0}),g})(),u=(()=>{class g{constructor(p,I,ce){this.platform=p,this.cdr=I,this.breakpointService=ce,this.destroy$=new D.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,d.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(p){p!==this.nzCollapsed&&(this.nzCollapsed=p,this.nzCollapsedChange.emit(p),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(Y.ow,!0).pipe((0,_.R)(this.destroy$)).subscribe(p=>{const I=this.nzBreakpoint;I&&(0,d.ov)().subscribe(()=>{this.matchBreakPoint=!p[I],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(p){const{nzCollapsed:I,nzCollapsedWidth:ce,nzWidth:De}=p;(I||ce||De)&&this.updateStyleMap(),I&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(T.t4),n.Y36(n.sBO),n.Y36(Y.r3))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-sider"]],contentQueries:function(p,I,ce){if(1&p&&n.Suo(ce,E.wO,5),2&p){let De;n.iGM(De=n.CRH())&&(I.nzMenuDirective=De.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(p,I){2&p&&(n.Udp("flex",I.flexSetting)("max-width",I.widthSetting)("min-width",I.widthSetting)("width",I.widthSetting),n.ekj("ant-layout-sider-zero-width",I.nzCollapsed&&0===I.nzCollapsedWidth)("ant-layout-sider-light","light"===I.nzTheme)("ant-layout-sider-dark","dark"===I.nzTheme)("ant-layout-sider-collapsed",I.nzCollapsed)("ant-layout-sider-has-trigger",I.nzCollapsible&&null!==I.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:R,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(p,I){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,m,1,8,"div",1)),2&p&&(n.xp6(2),n.Q6J("ngIf",I.nzCollapsible&&null!==I.nzTrigger))},directives:[J,i.O5],encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],g.prototype,"nzReverseArrow",void 0),(0,c.gn)([(0,d.yF)()],g.prototype,"nzCollapsible",void 0),(0,c.gn)([(0,d.yF)()],g.prototype,"nzCollapsed",void 0),g})(),U=(()=>{class g{constructor(p){this.directionality=p,this.dir="ltr",this.destroy$=new D.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(I=>{this.dir=I})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(x.Is,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-layout"]],contentQueries:function(p,I,ce){if(1&p&&n.Suo(ce,u,4),2&p){let De;n.iGM(De=n.CRH())&&(I.listOfNzSiderComponent=De)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(p,I){2&p&&n.ekj("ant-layout-rtl","rtl"===I.dir)("ant-layout-has-sider",I.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:R,decls:1,vars:0,template:function(p,I){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),B=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[x.vT,i.ez,M.PV,te.xu,T.ud]]}),g})();var X=o(404),_e=o(1894),Te=o(712),Me=o(373),xe=o(1047),oe=o(3075),Ce=o(2845),pe=o(4832),Ae=o(969),K=o(3753),he=o(2654),W=o(8514),ge=o(6787),de=o(2198),Ne=o(2994),Pe=o(6792),re=o(2986),Ee=o(7545),ue=o(1159),Oe=o(7429),w=o(8076);function fe(g,ne){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const p=n.oxw();n.xp6(1),n.Oqu(p.nzLabel)}}const k=[[["nz-auto-option"]]],Ie=["nz-auto-option"],Re=["*"],Ge=["panel"],tt=["content"];function nt(g,ne){}function Ke(g,ne){1&g&&n.YNc(0,nt,0,0,"ng-template")}function Ye(g,ne){1&g&&n.Hsn(0)}function C(g,ne){if(1&g&&(n.TgZ(0,"nz-auto-option",8),n._uU(1),n.qZA()),2&g){const p=ne.$implicit;n.Q6J("nzValue",p)("nzLabel",p&&p.label?p.label:p),n.xp6(1),n.hij(" ",p&&p.label?p.label:p," ")}}function He(g,ne){if(1&g&&n.YNc(0,C,2,3,"nz-auto-option",7),2&g){const p=n.oxw(2);n.Q6J("ngForOf",p.nzDataSource)}}function Xe(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"div",0,1),n.NdJ("@slideMotion.done",function(ce){return n.CHM(p),n.oxw().onAnimationEvent(ce)}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.YNc(4,Ke,1,0,void 0,4),n.qZA(),n.qZA(),n.qZA(),n.YNc(5,Ye,1,0,"ng-template",null,5,n.W1O),n.YNc(7,He,1,1,"ng-template",null,6,n.W1O)}if(2&g){const p=n.MAs(6),I=n.MAs(8),ce=n.oxw();n.ekj("ant-select-dropdown-hidden",!ce.showPanel)("ant-select-dropdown-rtl","rtl"===ce.dir),n.Q6J("ngClass",ce.nzOverlayClassName)("ngStyle",ce.nzOverlayStyle)("nzNoAnimation",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation),n.xp6(4),n.Q6J("ngTemplateOutlet",ce.nzDataSource?I:p)}}let We=(()=>{class g{constructor(){}}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ie,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(p,I){1&p&&(n.F$t(k),n.TgZ(0,"div",0),n.YNc(1,fe,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&p&&(n.xp6(1),n.Q6J("nzStringTemplateOutlet",I.nzLabel))},directives:[Ae.f],encapsulation:2,changeDetection:0}),g})();class lt{constructor(ne,p=!1){this.source=ne,this.isUserInput=p}}let Qe=(()=>{class g{constructor(p,I,ce,De){this.ngZone=p,this.changeDetectorRef=I,this.element=ce,this.nzAutocompleteOptgroupComponent=De,this.nzDisabled=!1,this.selectionChange=new n.vpe,this.mouseEntered=new n.vpe,this.active=!1,this.selected=!1,this.destroy$=new D.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,K.R)(this.element.nativeElement,"mouseenter").pipe((0,de.h)(()=>this.mouseEntered.observers.length>0),(0,_.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,K.R)(this.element.nativeElement,"mousedown").pipe((0,_.R)(this.destroy$)).subscribe(p=>p.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(p=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),p&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,d.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(p=!1){this.selectionChange.emit(new lt(this,p))}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(We,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(p,I){1&p&&n.NdJ("click",function(){return I.selectViaInteraction()}),2&p&&(n.uIk("aria-selected",I.selected.toString())("aria-disabled",I.nzDisabled.toString()),n.ekj("ant-select-item-option-grouped",I.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",I.selected)("ant-select-item-option-active",I.active)("ant-select-item-option-disabled",I.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Re,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(p,I){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],g.prototype,"nzDisabled",void 0),g})();const pt={provide:oe.JU,useExisting:(0,n.Gpc)(()=>l),multi:!0};let l=(()=>{class g{constructor(p,I,ce,De,et){this.elementRef=p,this.overlay=I,this.viewContainerRef=ce,this.nzInputGroupWhitSuffixOrPrefixDirective=De,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new D.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,_.R)(this.destroy$)).subscribe(p=>{"void"===p.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(p){Promise.resolve(null).then(()=>this.setTriggerValue(p))}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}setDisabledState(p){this.elementRef.nativeElement.disabled=p,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(p){const I=p.keyCode,ce=I===ue.LH||I===ue.JH;I===ue.hY&&p.preventDefault(),!this.panelOpen||I!==ue.hY&&I!==ue.Mf?this.panelOpen&&I===ue.K5?this.nzAutocomplete.showPanel&&(p.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&ce&&this.nzAutocomplete.showPanel&&(p.stopPropagation(),p.preventDefault(),I===ue.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(p){const I=p.target,ce=this.document;let De=I.value;"number"===I.type&&(De=""===De?null:parseFloat(De)),this.previousValue!==De&&(this.previousValue=De,this.onChange(De),this.canOpen()&&ce.activeElement===p.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Ne.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Pe.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(p=>{this.setValueAndClose(p)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,de.h)(p=>!this.elementRef.nativeElement.contains(p.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function v(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Oe.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Ce.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const p=[new Ce.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Ce.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(p).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const p=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==p?(this.nzAutocomplete.setActiveItem(p),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(p){const I=p.nzValue;this.setTriggerValue(p.getLabel()),this.onChange(I),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(p){const I=this.nzAutocomplete.getOption(p),ce=I?I.getLabel():p;this.elementRef.nativeElement.value=null!=ce?ce:"",this.nzAutocomplete.nzBackfill||(this.previousValue=ce)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const p=this.elementRef.nativeElement;return!p.readOnly&&!p.disabled}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(Ce.aV),n.Y36(n.s_b),n.Y36(xe.ke,8),n.Y36(i.K0,8))},g.\u0275dir=n.lG2({type:g,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(p,I){1&p&&n.NdJ("focusin",function(){return I.handleFocus()})("blur",function(){return I.handleBlur()})("input",function(De){return I.handleInput(De)})("keydown",function(De){return I.handleKeydown(De)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([pt])]}),g})(),ve=(()=>{class g{constructor(p,I,ce,De){this.changeDetectorRef=p,this.ngZone=I,this.directionality=ce,this.noAnimation=De,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Qt)=>et===Qt,this.selectionChange=new n.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new D.xQ,this.animationStateChange=new n.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=he.w.EMPTY,this.optionMouseEnterSubscription=he.w.EMPTY,this.dataSourceChangeSubscription=he.w.EMPTY,this.optionSelectionChanges=(0,W.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ee.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,W.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ee.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var p;null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(I=>{this.dir=I,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(p){this.animationStateChange.emit(p)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(p){const I=this.options.get(p);I&&!I.active?(this.activeItem=I,this.activeItemIndex=p,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(p){return this.options.reduce((I,ce,De)=>-1===I?this.compareWith(p,ce.nzValue)?De:-1:I,-1)}getOption(p){return this.options.find(I=>this.compareWith(p,I.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(I=>{!I.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(p,I=!1){this.options.forEach(ce=>{ce!==p&&(I&&ce.deselect(),ce.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,de.h)(p=>p.isUserInput)).subscribe(p=>{p.source.select(),p.source.setActiveStyles(),this.activeItem=p.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p.source,!0),this.selectionChange.emit(p.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(p=>{p.setActiveStyles(),this.activeItem=p,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p)})}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36(x.Is,8),n.Y36(pe.P,9))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-autocomplete"]],contentQueries:function(p,I,ce){if(1&p&&n.Suo(ce,Qe,5),2&p){let De;n.iGM(De=n.CRH())&&(I.fromContentOptions=De)}},viewQuery:function(p,I){if(1&p&&(n.Gf(n.Rgc,5),n.Gf(Ge,5),n.Gf(tt,5),n.Gf(Qe,5)),2&p){let ce;n.iGM(ce=n.CRH())&&(I.template=ce.first),n.iGM(ce=n.CRH())&&(I.panel=ce.first),n.iGM(ce=n.CRH())&&(I.content=ce.first),n.iGM(ce=n.CRH())&&(I.fromDataSourceOptions=ce)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Re,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(p,I){1&p&&(n.F$t(),n.YNc(0,Xe,9,10,"ng-template"))},directives:[Qe,i.mk,i.PC,pe.P,i.tP,i.sg],encapsulation:2,data:{animation:[w.mF]},changeDetection:0}),(0,c.gn)([(0,d.yF)()],g.prototype,"nzDefaultActiveFirstOption",void 0),(0,c.gn)([(0,d.yF)()],g.prototype,"nzBackfill",void 0),g})(),z=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[x.vT,i.ez,Ce.U8,oe.u5,Ae.T,pe.g,xe.o7]]}),g})();var f=o(6949);function me(g,ne){1&g&&n._UZ(0,"i",5)}function ye(g,ne){if(1&g){const p=n.EpF();n.ynx(0),n.TgZ(1,"a",6),n.TgZ(2,"nz-auto-option",7),n.NdJ("click",function(){n.CHM(p);const ce=n.oxw();return ce.searchQuery="",ce.refresh()}),n.TgZ(3,"span"),n._UZ(4,"i",8),n._uU(5," \xa0 "),n._UZ(6,"span",9),n._UZ(7,"br"),n._UZ(8,"span",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&g){const p=ne.$implicit,I=n.oxw();n.xp6(1),n.Q6J("routerLink",I.urlForResult(p)),n.xp6(1),n.Q6J("nzValue",I.urlForResult(p)),n.xp6(2),n.Q6J("nzType",I.iconNameForResult(p)),n.xp6(2),n.s9C("innerHTML",p.name,n.oJD),n.xp6(2),n.s9C("innerHTML",p.matchingText,n.oJD)}}let be=(()=>{class g{constructor(p,I){this.gql=p,this.router=I,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,Me.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(p){switch(p.resultType){case Te.rZD.EvidenceItem:return"civic:evidence";case Te.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${p.resultType.toLowerCase()}`}}urlForResult(p){let I;switch(p.resultType){case Te.rZD.VariantGroup:I="variant-groups";break;case Te.rZD.EvidenceItem:I="evidence";break;default:I=`${p.resultType.toLowerCase()}s`}return`/${I}/${p.id}/summary`}quicksearchSelected(p){let I=p.target.value;this.searchQuery="",this.router.navigate([I])}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(Te.ghc),n.Y36(t.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(p,I){if(1&p&&(n.TgZ(0,"nz-input-group",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(De){return I.searchQuery=De})("ngModelChange",function(){return I.refresh()})("keyup.enter",function(De){return I.quicksearchSelected(De)}),n.qZA(),n.qZA(),n.YNc(2,me,1,0,"ng-template",null,2,n.W1O),n.TgZ(4,"nz-autocomplete",null,3),n.YNc(6,ye,9,5,"ng-container",4),n.ALo(7,"ngrxPush"),n.qZA()),2&p){const ce=n.MAs(3),De=n.MAs(5);n.Q6J("nzSuffix",ce),n.xp6(1),n.Q6J("ngModel",I.searchQuery)("nzAutocomplete",De),n.xp6(5),n.Q6J("ngForOf",n.lcZ(7,4,I.searchResults$))}},directives:[xe.gB,xe.ke,xe.Zp,oe.Fj,l,oe.JJ,oe.On,M.Ls,ve,i.sg,t.yS,Qe],pipes:[f.fM],styles:[""]}),g})();var Be=o(1912),$e=o(4850),Ue=o(1059),ke=o(2340),Je=o(8144),qe=o(6042),rt=o(2643),ct=o(2683),Ve=o(3677),ot=o(4401),dt=o(7881),st=o(3640),y=o(8785),ee=o(3434);function F(g,ne){if(1&g&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&g){n.oxw(2);const p=n.MAs(15);n.Q6J("nzDropdownMenu",p)}}const le=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function Se(g,ne){if(1&g&&(n.TgZ(0,"nz-badge",28),n.TgZ(1,"button",29),n._UZ(2,"i",30),n.qZA(),n.qZA()),2&g){const p=n.oxw().ngrxLet,I=n.oxw().ngIf;n.Q6J("nzCount",p)("nzOverflowCount",999)("nzStyle",n.DdM(4,le)),n.xp6(1),n.MGl("routerLink","/users/",I.id,"/notifications")}}const Fe=function(g){return{"update-coi":g}};function mt(g,ne){if(1&g&&n._UZ(0,"cvc-user-avatar",36),2&g){const p=n.oxw(3).ngIf;n.Q6J("user",p)("size",22)("ngClass",n.VKq(3,Fe,p.invalidCoi))}}function gt(g,ne){if(1&g&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&g){const p=n.oxw(3).ngIf;n.xp6(1),n.Oqu(p.username)}}function ft(g,ne){1&g&&n._UZ(0,"i",27)}function ht(g,ne){if(1&g&&(n.TgZ(0,"button",31),n.TgZ(1,"nz-space",32),n.YNc(2,mt,1,5,"cvc-user-avatar",33),n.YNc(3,gt,2,1,"div",34),n.YNc(4,ft,1,0,"i",35),n.qZA(),n.qZA()),2&g){n.oxw(2);const p=n.MAs(3);n.Q6J("nzDropdownMenu",p)}}function vt(g,ne){1&g&&(n.TgZ(0,"nz-space",22),n.YNc(1,F,3,1,"button",23),n.YNc(2,Se,3,5,"nz-badge",24),n.YNc(3,ht,5,1,"button",25),n.qZA())}function zt(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"button",38),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA(),n.qZA()}}function _t(g,ne){1&g&&n._UZ(0,"li",14)}function Ct(g,ne){1&g&&(n.TgZ(0,"li",40),n.TgZ(1,"a",41),n._uU(2," Admin Console "),n.qZA(),n.qZA())}function yt(g,ne){1&g&&(n.TgZ(0,"li",42),n.TgZ(1,"a",43),n._uU(2," Background Workers "),n.qZA(),n.qZA())}function Tt(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"a",44),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA(),n.qZA()}}const It=function(g){return["/users",g]};function Et(g,ne){if(1&g){const p=n.EpF();n.ynx(0),n.YNc(1,vt,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7),n.TgZ(4,"ul",8),n.YNc(5,zt,4,0,"li",9),n.YNc(6,_t,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Ct,3,0,"li",12),n.YNc(10,yt,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(p),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"nz-dropdown-menu",null,16),n.TgZ(16,"ul",8),n.TgZ(17,"li",17),n.TgZ(18,"a",18),n._uU(19," Evidence Item "),n.qZA(),n.qZA(),n.TgZ(20,"li",17),n.TgZ(21,"a",19),n._uU(22," Assertion "),n.qZA(),n.qZA(),n.TgZ(23,"li",17),n.TgZ(24,"a",20),n._uU(25," Source Suggestion "),n.qZA(),n.qZA(),n.YNc(26,Tt,3,0,"li",9),n.TgZ(27,"li",17),n.TgZ(28,"a",21),n._uU(29," Variant Group "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&g){const p=ne.ngIf,I=n.oxw();n.xp6(1),n.Q6J("ngrxLet",I.unreadCount$),n.xp6(4),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,It,p.id)),n.xp6(2),n.Q6J("ngIf",p.isAdmin),n.xp6(1),n.Q6J("ngIf",p.isAdmin),n.xp6(16),n.Q6J("ngIf",p.isEditor)}}function Dt(g,ne){1&g&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function Ot(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(p),n.oxw().coiUpdated()}),n.qZA()}}function St(g,ne){1&g&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function At(g,ne){1&g&&n._UZ(0,"cvc-variant-submit-form")}let Mt=(()=>{class g{constructor(p,I){this.queryService=p,this.unreadCountGql=I,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,$e.U)(({data:ce})=>ce.notifications.unreadCount),(0,Ue.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,$e.U)(({data:ce})=>ce.notifications.unreadCount),(0,Ue.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(s.a),n.Y36(Te.Kmw))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(p,I){if(1&p&&(n.YNc(0,Et,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(De){return I.coiUpdateModalVisible=De})("nzOnCancel",function(){return I.handleCoiModalCancel()}),n.YNc(3,Dt,2,0,"ng-template",null,2,n.W1O),n.YNc(5,Ot,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(De){return I.addVariantModalVisible=De})("nzOnCancel",function(){return I.addVariantModalVisible=!1}),n.YNc(8,St,2,0,"ng-template",null,4,n.W1O),n.YNc(10,At,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&p){const ce=n.MAs(4),De=n.MAs(6),et=n.MAs(9),Qt=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,I.viewer$)),n.xp6(2),n.Q6J("nzVisible",I.coiUpdateModalVisible)("nzContent",De)("nzTitle",ce)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",I.addVariantModalVisible)("nzContent",Qt)("nzTitle",et)("nzFooter",null)}},directives:[i.O5,f.eJ,Je.NU,Je.$1,qe.ix,rt.dQ,ct.w,Ve.wA,Ve.cm,M.Ls,ot.x7,t.rH,dt.L,i.mk,Ve.RR,E.wO,E.r9,E.YV,t.yS,st.du,y.t,ee.G],pipes:[f.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),g})();function Nt(g,ne){1&g&&n._UZ(0,"img",60)}function xt(g,ne){1&g&&n._UZ(0,"img",61)}function Lt(g,ne){1&g&&n._UZ(0,"cvc-login-button")}function Pt(g,ne){1&g&&n._UZ(0,"cvc-viewer-button")}const at=function(g){return{"is-collapsed":g}},Ft=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class g{constructor(p){this.viewerService=p,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(s.a))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-layout"]],decls:129,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(p,I){1&p&&(n.TgZ(0,"nz-layout",0),n.TgZ(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(De){return I.isCollapsed=De}),n.TgZ(2,"a",2),n.TgZ(3,"div",3),n.YNc(4,Nt,1,0,"img",4),n.YNc(5,xt,1,0,"img",5),n.qZA(),n.qZA(),n.TgZ(6,"ul",6),n.TgZ(7,"li",7),n.TgZ(8,"ul"),n.TgZ(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span"),n.TgZ(12,"a",10),n._uU(13,"Assertions"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span"),n.TgZ(17,"a",12),n._uU(18,"Evidence"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span"),n.TgZ(22,"a",14),n._uU(23,"Genes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span"),n.TgZ(27,"a",16),n._uU(28,"Variants"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span"),n.TgZ(32,"a",18),n._uU(33,"Variant Groups"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span"),n.TgZ(37,"a",20),n._uU(38,"Clinical Trials"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span"),n.TgZ(42,"a",22),n._uU(43,"Diseases"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span"),n.TgZ(47,"a",24),n._uU(48,"Drugs"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span"),n.TgZ(52,"a",26),n._uU(53,"Phenotypes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span"),n.TgZ(57,"a",28),n._uU(58,"Sources"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span"),n.TgZ(62,"a",30),n._uU(63,"Variant Types"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(64,"li",7),n.TgZ(65,"ul"),n.TgZ(66,"li",8),n._UZ(67,"i",31),n.TgZ(68,"span"),n.TgZ(69,"a",32),n._uU(70," Activity "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span"),n.TgZ(74,"a",34),n._uU(75,"Queues"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span"),n.TgZ(79,"a",36),n._uU(80,"Search"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(81,"li",7),n.TgZ(82,"ul"),n.TgZ(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span"),n.TgZ(86,"a",38),n._uU(87,"Contributors"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span"),n.TgZ(91,"a",40),n._uU(92,"Organizations"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(93,"li",7),n.TgZ(94,"ul"),n.TgZ(95,"li",8),n._UZ(96,"i",41),n.TgZ(97,"span"),n.TgZ(98,"a",42),n._uU(99,"Data Releases"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(100,"div",43),n._UZ(101,"img",44),n._UZ(102,"img",45),n.qZA(),n.qZA(),n.TgZ(103,"nz-layout",46),n.TgZ(104,"nz-header"),n.TgZ(105,"div",47),n.TgZ(106,"div",48),n.TgZ(107,"span",49),n.NdJ("click",function(){return I.isCollapsed=!I.isCollapsed}),n._UZ(108,"i",50),n.qZA(),n.qZA(),n.TgZ(109,"div",51),n._UZ(110,"cvc-quicksearch"),n.qZA(),n.TgZ(111,"div",52),n.TgZ(112,"ul",53),n.TgZ(113,"li",54),n.TgZ(114,"a",55),n._uU(115,"Home"),n.qZA(),n.qZA(),n.TgZ(116,"li",54),n.TgZ(117,"a",56),n._uU(118,"About CIViC"),n.qZA(),n.qZA(),n.TgZ(119,"li",54),n.TgZ(120,"a",57),n._uU(121,"Help"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(122,"div",58),n.YNc(123,Lt,1,0,"cvc-login-button",59),n.ALo(124,"async"),n.YNc(125,Pt,1,0,"cvc-viewer-button",59),n.ALo(126,"async"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(127,"nz-content"),n._UZ(128,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&p&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",I.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(39,at,I.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!I.isCollapsed),n.xp6(1),n.Q6J("ngIf",I.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(41,at,I.isCollapsed))("nzInlineCollapsed",I.isCollapsed),n.xp6(1),n.Q6J("nzTitle",I.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",I.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",I.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",I.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",I.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",I.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",I.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",I.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",I.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(43,at,I.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(45,at,I.isCollapsed)),n.xp6(5),n.Q6J("nzType",I.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(124,35,I.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(126,37,I.signedIn$)))},directives:[U,u,t.yS,i.mk,i.O5,E.wO,E.uA,E.r9,X.SY,M.Ls,b,_e.SK,_e.t3,be,Be.s,Mt,A,t.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),g})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(136)]).then(o.bind(o,136)).then(g=>g.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7717),o.e(1838)]).then(o.bind(o,1838)).then(g=>g.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(233)]).then(o.bind(o,233)).then(g=>g.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1592)]).then(o.bind(o,1592)).then(g=>g.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7727)]).then(o.bind(o,7727)).then(g=>g.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(3664),o.e(392),o.e(850),o.e(2536)]).then(o.bind(o,2536)).then(g=>g.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(g=>g.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1076)]).then(o.bind(o,1076)).then(g=>g.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(2033),o.e(3278),o.e(7717),o.e(8592),o.e(7465)]).then(o.bind(o,9802)).then(g=>g.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(392),o.e(3278),o.e(850),o.e(1862)]).then(o.bind(o,684)).then(g=>g.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(g=>g.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(3664),o.e(79)]).then(o.bind(o,79)).then(g=>g.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(g=>g.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(g=>g.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(5193),o.e(4025),o.e(9001),o.e(2826),o.e(6724),o.e(9716),o.e(376),o.e(6113)]).then(o.bind(o,4340)).then(g=>g.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(g=>g.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(g=>g.PagesModule),data:{breadcrumb:"Pages"}}]}];let Rt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[t.Bz.forChild(Ft)],t.Bz]}),g})();var bt=o(3618),$t=o(5109),Jt=o(4546);let jt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,oe.u5,t.Bz,f.WG,xe.o7,Jt.U5,M.PV,z]]}),g})();var Kt=o(1844),Ht=o(5473),Yt=o(330),Xt=o(7058);let qt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,f.WG,Ve.b1,t.Bz,qe.sL,Je.zf,M.PV,ot.mS,X.cg,st.Qp,Ht.H,Yt.e,Xt.e]]}),g})(),en=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,Rt,M.PV,_e.Jb,B,E.ip,X.cg,bt.ZJ,$t.s,Kt.B,qt,jt]]}),g})()},6792:(ze,q,o)=>{o.d(q,{g:()=>D});var i=o(353),n=o(3489),s=o(9312);function D(d,E=i.P){const M=function t(d){return d instanceof Date&&!isNaN(+d)}(d)?+d-E.now():Math.abs(d);return x=>x.lift(new _(M,E))}class _{constructor(E,T){this.delay=E,this.scheduler=T}call(E,T){return T.subscribe(new c(E,this.delay,this.scheduler))}}class c extends n.L{constructor(E,T,M){super(E),this.delay=T,this.scheduler=M,this.queue=[],this.active=!1,this.errored=!1}static dispatch(E){const T=E.source,M=T.queue,x=E.scheduler,te=E.destination;for(;M.length>0&&M[0].time-x.now()<=0;)M.shift().notification.observe(te);if(M.length>0){const R=Math.max(0,M[0].time-x.now());this.schedule(E,R)}else this.unsubscribe(),T.active=!1}_schedule(E){this.active=!0,this.destination.add(E.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:E}))}scheduleNotification(E){if(!0===this.errored)return;const T=this.scheduler,M=new Y(T.now()+this.delay,E);this.queue.push(M),!1===this.active&&this._schedule(T)}_next(E){this.scheduleNotification(s.P.createNext(E))}_error(E){this.errored=!0,this.queue=[],this.destination.error(E),this.unsubscribe()}_complete(){this.scheduleNotification(s.P.createComplete()),this.unsubscribe()}}class Y{constructor(E,T){this.time=E,this.notification=T}}},373:(ze,q,o)=>{o.d(q,{j:()=>t});var i=o(4850);function t(...s){const D=s.length;if(0===D)throw new Error("list of properties cannot be empty.");return _=>(0,i.U)(function n(s,D){return c=>{let Y=c;for(let d=0;d<D;d++){const E=null!=Y?Y[s[d]]:void 0;if(void 0===E)return;Y=E}return Y}}(s,D))(_)}},3164:(ze,q,o)=>{o.d(q,{p:()=>c});var i=o(3489),t=o(353);const n={leading:!0,trailing:!1};function c(T,M=t.P,x=n){return te=>te.lift(new Y(T,M,x.leading,x.trailing))}class Y{constructor(M,x,te,R){this.duration=M,this.scheduler=x,this.leading=te,this.trailing=R}call(M,x){return x.subscribe(new d(M,this.duration,this.scheduler,this.leading,this.trailing))}}class d extends i.L{constructor(M,x,te,R,ie){super(M),this.duration=x,this.scheduler=te,this.leading=R,this.trailing=ie,this._hasTrailingValue=!1,this._trailingValue=null}_next(M){this.throttled?this.trailing&&(this._trailingValue=M,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(E,this.duration,{subscriber:this})),this.leading?this.destination.next(M):this.trailing&&(this._trailingValue=M,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const M=this.throttled;M&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),M.unsubscribe(),this.remove(M),this.throttled=null)}}function E(T){const{subscriber:M}=T;M.clearThrottle()}},444:(ze,q,o)=>{function i(O){return O!==String(parseFloat(O))}o.d(q,{o6:()=>$});var D=Object.getOwnPropertyNames?function t(O){return Object.getOwnPropertyNames(O).filter(function(m){return O.propertyIsEnumerable(m)&&i(m)})}:Object.keys?function n(O){return Object.keys(O).filter(i)}:function s(O){var m=[];for(var A in O)O.hasOwnProperty(A)&&O.propertyIsEnumerable(A)&&i(A)&&m.push(A);return m},_=function(){function O(m){this.enumObj=m,this.keysList=Object.freeze(D(m));for(var A=this.keysList.length,L=new Array(A),b=new Map,J=0;J<A;++J){var u=this.keysList[J],U=m[u];L[J]=U,b.set(U,u),this[J]=Object.freeze([u,U])}this.valuesList=Object.freeze(L),this.keysByValueMap=b,this.size=this.length=A,Object.freeze(this)}return O.prototype.toString=function(){return"[object EnumWrapper]"},O.prototype.keys=function(){var m,A=this,L=0;return(m={next:function(){var J={done:L>=A.length,value:A.keysList[L]};return++L,J}})[Symbol.iterator]=function(){return this},m},O.prototype.values=function(){var m,A=this,L=0;return(m={next:function(){var J={done:L>=A.length,value:A.valuesList[L]};return++L,J}})[Symbol.iterator]=function(){return this},m},O.prototype.entries=function(){var m,A=this,L=0;return(m={next:function(){var J={done:L>=A.length,value:A[L]};return++L,J}})[Symbol.iterator]=function(){return this},m},O.prototype[Symbol.iterator]=function(){return this.entries()},O.prototype.forEach=function(m,A){for(var L=this.length,b=0;b<L;++b){var J=this[b];m.call(A,J[1],J[0],this,b)}},O.prototype.map=function(m,A){for(var L=this.length,b=new Array(L),J=0;J<L;++J){var u=this[J];b[J]=m.call(A,u[1],u[0],this,J)}return b},O.prototype.getKeys=function(){return this.keysList.slice()},O.prototype.getValues=function(){return this.valuesList.slice()},O.prototype.getEntries=function(){return Array.prototype.slice.call(this)},O.prototype.indexOfKey=function(m){return this.keysList.indexOf(m)},O.prototype.indexOfValue=function(m){return this.valuesList.indexOf(m)},O.prototype.isKey=function(m){return null!=m&&i(m)&&this.enumObj.hasOwnProperty(m)},O.prototype.asKeyOrThrow=function(m){if(this.isKey(m))return m;throw new Error("Unexpected key: "+m+". Expected one of: "+this.getValues())},O.prototype.asKeyOrDefault=function(m,A){return this.isKey(m)?m:A},O.prototype.isValue=function(m){return null!=m&&this.keysByValueMap.has(m)},O.prototype.asValueOrThrow=function(m){if(this.isValue(m))return m;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},O.prototype.asValueOrDefault=function(m,A){return this.isValue(m)?m:A},O.prototype.getKeyOrThrow=function(m){var A=null!=m?this.keysByValueMap.get(m):void 0;if(null!=A)return A;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},O.prototype.getKeyOrDefault=function(m,A){var L=null!=m?this.keysByValueMap.get(m):void 0;return null!=L?L:A},O.prototype.getValueOrThrow=function(m){return this.enumObj[this.asKeyOrThrow(m)]},O.prototype.getValueOrDefault=function(m,A){return this.isKey(m)?this.enumObj[m]:A},O}();_.prototype[Symbol.toStringTag]="EnumWrapper";var c=Symbol("ts-enum-util:unhandledEntry"),Y=Symbol("ts-enum-util:handleNull"),d=Symbol("ts-enum-util:handleUndefined"),E=Symbol("ts-enum-util:handleUnexpected");function T(O){return new Error("Unhandled value: "+O)}var M=function(){function O(m){this.value=m}return O.prototype.with=function(m){if(m.hasOwnProperty(this.value))return R(m[this.value],this.value);if(m[E])return R(m[E],this.value);throw new Error("Unexpected value: "+this.value)},O}(),x=function(){function O(){}return O.prototype.with=function(m){if(m[Y])return R(m[Y],null);if(m[E])return R(m[E],null);throw new Error("Unexpected value: null")},O}(),te=function(){function O(){}return O.prototype.with=function(m){if(m[d])return R(m[d],void 0);if(m[E])return R(m[E],void 0);throw new Error("Unexpected value: undefined")},O}();function R(O,m){if(O===c)throw T(m);return O(m)}var ie=function(){function O(m){this.value=m}return O.prototype.with=function(m){if(m.hasOwnProperty(this.value))return V(m[this.value],this.value);if(m.hasOwnProperty(E))return V(m[E],this.value);throw new Error("Unexpected value: "+this.value)},O}(),j=function(){function O(){}return O.prototype.with=function(m){if(m.hasOwnProperty(Y))return V(m[Y],null);if(m.hasOwnProperty(E))return V(m[E],null);throw new Error("Unexpected value: null")},O}(),Z=function(){function O(){}return O.prototype.with=function(m){if(m.hasOwnProperty(d))return V(m[d],void 0);if(m.hasOwnProperty(E))return V(m[E],void 0);throw new Error("Unexpected value: undefined")},O}();function V(O,m){if(O===c)throw T(m);return O}var se=new WeakMap;function $(O){var m=se.get(O);return m||(m=new _(O),se.set(O,m)),m}$.handleNull=Y,$.handleUndefined=d,$.handleUnexpected=E,$.unhandledEntry=c,$.visitValue=function P(O){return null===O?new x:void 0===O?new te:new M(O)},$.mapValue=function G(O){return null===O?new j:void 0===O?new Z:new ie(O)}},9552:(ze,q,o)=>{o.d(q,{$:()=>A,j:()=>L});var i=o(655),t=o(9808),n=o(5e3),s=o(2654),D=o(839),_=o(8929),c=o(6787),Y=o(3753),d=o(7625),E=o(4850),T=o(3164),M=o(9439),x=o(1721),te=o(4090),R=o(925),ie=o(5577),j=o(226);const Z=["fixedEl"],V=["*"];var P=(()=>{return(b=P||(P={})).resize="resize",b.scroll="scroll",b.touchstart="touchstart",b.touchmove="touchmove",b.touchend="touchend",b.pageshow="pageshow",b.load="LOAD",P;var b})();function se(b){return function G(b){return"undefined"!=typeof window&&b===window}(b)?{top:0,left:0,bottom:0}:b.getBoundingClientRect()}const O="ant-affix";let A=(()=>{class b{constructor(u,U,B,X,_e,Te,Me,xe,oe,Ce){this.nzConfigService=B,this.scrollSrv=X,this.ngZone=_e,this.platform=Te,this.renderer=Me,this.nzResizeObserver=xe,this.cdr=oe,this.directionality=Ce,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new D.t(1),this.destroy$=new _.xQ,this.placeholderNode=u.nativeElement,this.document=U}get target(){const u=this.nzTarget;return("string"==typeof u?this.document.querySelector(u):u)||window}ngOnInit(){var u;null===(u=this.directionality.change)||void 0===u||u.pipe((0,d.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(u){const{nzOffsetBottom:U,nzOffsetTop:B,nzTarget:X}=u;(U||B)&&this.offsetChanged$.next(),X&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const u=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,c.T)(...Object.keys(P).map(U=>(0,Y.R)(this.target,U)),this.offsetChanged$.pipe((0,E.U)(()=>({}))),this.nzResizeObserver.observe(u)).pipe((0,T.p)(20,void 0,{trailing:!0}),(0,d.R)(this.destroy$)).subscribe(U=>this.updatePosition(U))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(u,U){const B=u.getBoundingClientRect(),X=se(U),_e=this.scrollSrv.getScroll(U,!0),Te=this.scrollSrv.getScroll(U,!1),Me=this.document.body;return{top:B.top-X.top+_e-(Me.clientTop||0),left:B.left-X.left+Te-(Me.clientLeft||0),width:B.width,height:B.height}}setAffixStyle(u,U){const B=this.affixStyle,X=this.target===window;if("scroll"===u.type&&B&&U&&X||(0,x.wU)(B,U))return;const _e=!!U,Te=this.fixedEl.nativeElement;this.renderer.setStyle(Te,"cssText",(0,x.GM)(U)),this.affixStyle=U,_e?Te.classList.add(O):Te.classList.remove(O),this.updateRtlClass(),(U&&!B||!U&&B)&&this.nzChange.emit(_e)}setPlaceholderStyle(u){(0,x.wU)(u,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,x.GM)(u)),this.placeholderStyle=u)}syncPlaceholderStyle(u){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const U={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),U)),this.setPlaceholderStyle(U)}updatePosition(u){if(!this.platform.isBrowser)return;const U=this.target;let B=this.nzOffsetTop;const X=this.scrollSrv.getScroll(U,!0),_e=this.getOffset(this.placeholderNode,U),Te=this.fixedEl.nativeElement,Me={width:Te.offsetWidth,height:Te.offsetHeight},xe={top:!1,bottom:!1};"number"!=typeof B&&"number"!=typeof this.nzOffsetBottom?(xe.top=!0,B=0):(xe.top="number"==typeof B,xe.bottom="number"==typeof this.nzOffsetBottom);const oe=se(U),Ce=U.innerHeight||U.clientHeight;if(X>=_e.top-B&&xe.top){const pe=_e.width;this.setAffixStyle(u,{position:"fixed",top:oe.top+B,left:oe.left+_e.left,width:pe}),this.setPlaceholderStyle({width:pe,height:Me.height})}else if(X<=_e.top+Me.height+this.nzOffsetBottom-Ce&&xe.bottom){const pe=U===window?0:window.innerHeight-oe.bottom,Ae=_e.width;this.setAffixStyle(u,{position:"fixed",bottom:pe+this.nzOffsetBottom,left:oe.left+_e.left,width:Ae}),this.setPlaceholderStyle({width:Ae,height:_e.height})}else u.type===P.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(u),this.setPlaceholderStyle();"resize"===u.type&&this.syncPlaceholderStyle(u)}updateRtlClass(){const u=this.fixedEl.nativeElement;"rtl"===this.dir&&u.classList.contains(O)?u.classList.add(`${O}-rtl`):u.classList.remove(`${O}-rtl`)}}return b.\u0275fac=function(u){return new(u||b)(n.Y36(n.SBq),n.Y36(t.K0),n.Y36(M.jY),n.Y36(te.MF),n.Y36(n.R0b),n.Y36(R.t4),n.Y36(n.Qsj),n.Y36(ie.D3),n.Y36(n.sBO),n.Y36(j.Is,8))},b.\u0275cmp=n.Xpm({type:b,selectors:[["nz-affix"]],viewQuery:function(u,U){if(1&u&&n.Gf(Z,7),2&u){let B;n.iGM(B=n.CRH())&&(U.fixedEl=B.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:V,decls:3,vars:0,consts:[["fixedEl",""]],template:function(u,U){1&u&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,M.oS)(),(0,x.Rn)(void 0)],b.prototype,"nzOffsetTop",void 0),(0,i.gn)([(0,M.oS)(),(0,x.Rn)(void 0)],b.prototype,"nzOffsetBottom",void 0),b})(),L=(()=>{class b{}return b.\u0275fac=function(u){return new(u||b)},b.\u0275mod=n.oAB({type:b}),b.\u0275inj=n.cJS({imports:[[j.vT,t.ez,R.ud]]}),b})()},6699:(ze,q,o)=>{o.d(q,{Dz:()=>R,Rt:()=>j});var i=o(655),t=o(5e3),n=o(9439),s=o(1721),D=o(925),_=o(9808),c=o(647),Y=o(226);const d=["textEl"];function E(Z,V){if(1&Z&&t._UZ(0,"i",3),2&Z){const P=t.oxw();t.Q6J("nzType",P.nzIcon)}}function T(Z,V){if(1&Z){const P=t.EpF();t.TgZ(0,"img",4),t.NdJ("error",function(se){return t.CHM(P),t.oxw().imgError(se)}),t.qZA()}if(2&Z){const P=t.oxw();t.Q6J("src",P.nzSrc,t.LSH),t.uIk("srcset",P.nzSrcSet,t.LSH)("alt",P.nzAlt)}}function M(Z,V){if(1&Z&&(t.TgZ(0,"span",5,6),t._uU(2),t.qZA()),2&Z){const P=t.oxw();t.Q6J("ngStyle",P.textStyles),t.xp6(2),t.Oqu(P.nzText)}}let R=(()=>{class Z{constructor(P,G,se,$){this.nzConfigService=P,this.elementRef=G,this.cdr=se,this.platform=$,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new t.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(P){this.nzError.emit(P),P.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const P=this.textEl.nativeElement.offsetWidth,G=this.el.getBoundingClientRect().width,se=2*this.nzGap<G?2*this.nzGap:8;this.textStyles={transform:`scale(${G-se<P?(G-se)/P:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return Z.\u0275fac=function(P){return new(P||Z)(t.Y36(n.jY),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(D.t4))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["nz-avatar"]],viewQuery:function(P,G){if(1&P&&t.Gf(d,5),2&P){let se;t.iGM(se=t.CRH())&&(G.textEl=se.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(P,G){2&P&&(t.Udp("width",G.customSize)("height",G.customSize)("line-height",G.customSize)("font-size",G.hasIcon&&G.customSize?G.nzSize/2:null,"px"),t.ekj("ant-avatar-lg","large"===G.nzSize)("ant-avatar-sm","small"===G.nzSize)("ant-avatar-square","square"===G.nzShape)("ant-avatar-circle","circle"===G.nzShape)("ant-avatar-icon",G.nzIcon)("ant-avatar-image",G.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[t.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(P,G){1&P&&(t.YNc(0,E,1,1,"i",0),t.YNc(1,T,1,3,"img",1),t.YNc(2,M,3,2,"span",2)),2&P&&(t.Q6J("ngIf",G.nzIcon&&G.hasIcon),t.xp6(1),t.Q6J("ngIf",G.nzSrc&&G.hasSrc),t.xp6(1),t.Q6J("ngIf",G.nzText&&G.hasText))},directives:[_.O5,c.Ls,_.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,n.oS)()],Z.prototype,"nzShape",void 0),(0,i.gn)([(0,n.oS)()],Z.prototype,"nzSize",void 0),(0,i.gn)([(0,n.oS)(),(0,s.Rn)()],Z.prototype,"nzGap",void 0),Z})(),j=(()=>{class Z{}return Z.\u0275fac=function(P){return new(P||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[[Y.vT,_.ez,c.PV,D.ud]]}),Z})()},4401:(ze,q,o)=>{o.d(q,{x7:()=>L,mS:()=>J,F9:()=>b});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),D=o(8076),_=o(9439),c=o(1721),Y=o(226),d=o(4832),E=o(9808),T=o(969),M=o(7144);function x(u,U){if(1&u&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&u){const B=U.$implicit,X=t.oxw(2).index,_e=t.oxw(2);t.ekj("current",B===_e.countArray[X]),t.xp6(1),t.hij(" ",B," ")}}function te(u,U){if(1&u&&(t.ynx(0),t.YNc(1,x,2,3,"p",5),t.BQk()),2&u){const B=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",B.countSingleArray)}}function R(u,U){if(1&u&&(t.TgZ(0,"span",3),t.YNc(1,te,2,1,"ng-container",4),t.qZA()),2&u){const B=U.index,X=t.oxw(2);t.Udp("transform","translateY("+100*-X.countArray[B]+"%)"),t.Q6J("nzNoAnimation",X.noAnimation),t.xp6(1),t.Q6J("ngIf",!X.nzDot&&void 0!==X.countArray[B])}}function ie(u,U){if(1&u&&(t.ynx(0),t.YNc(1,R,2,4,"span",2),t.BQk()),2&u){const B=t.oxw();t.xp6(1),t.Q6J("ngForOf",B.maxNumberArray)}}function j(u,U){if(1&u&&t._uU(0),2&u){const B=t.oxw();t.hij("",B.nzOverflowCount,"+")}}function Z(u,U){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const B=t.oxw(2);t.xp6(1),t.Oqu(B.nzText)}}function V(u,U){if(1&u&&(t.ynx(0),t._UZ(1,"span",2),t.TgZ(2,"span",3),t.YNc(3,Z,2,1,"ng-container",1),t.qZA(),t.BQk()),2&u){const B=t.oxw();t.xp6(1),t.Gre("ant-badge-status-dot ant-badge-status-",B.nzStatus||B.presetColor,""),t.Udp("background",!B.presetColor&&B.nzColor),t.Q6J("ngStyle",B.nzStyle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",B.nzText)}}function P(u,U){if(1&u&&t._UZ(0,"nz-badge-sup",5),2&u){const B=t.oxw(2);t.Q6J("nzOffset",B.nzOffset)("nzTitle",B.nzTitle)("nzStyle",B.nzStyle)("nzDot",B.nzDot)("nzOverflowCount",B.nzOverflowCount)("disableAnimation",!!(B.nzStandalone||B.nzStatus||B.nzColor||null!=B.noAnimation&&B.noAnimation.nzNoAnimation))("nzCount",B.nzCount)("noAnimation",!(null==B.noAnimation||!B.noAnimation.nzNoAnimation))}}function G(u,U){if(1&u&&(t.ynx(0),t.YNc(1,P,1,8,"nz-badge-sup",4),t.BQk()),2&u){const B=t.oxw();t.xp6(1),t.Q6J("ngIf",B.showSup)}}const se=["*"];function $(u,U){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const B=t.oxw();t.xp6(1),t.Oqu(B.nzText)}}const O=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let m=(()=>{class u{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(B){const{nzOverflowCount:X,nzCount:_e}=B;_e&&"number"==typeof _e.currentValue&&(this.count=Math.max(0,_e.currentValue),this.countArray=this.count.toString().split("").map(Te=>+Te)),X&&this.generateMaxNumberArray()}}return u.\u0275fac=function(B){return new(B||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(B,X){2&B&&(t.uIk("title",null===X.nzTitle?"":X.nzTitle||X.nzCount),t.d8E("@.disabled",X.disableAnimation)("@zoomBadgeMotion",void 0),t.Akn(X.nzStyle),t.Udp("right",X.nzOffset&&X.nzOffset[0]?-X.nzOffset[0]:null,"px")("margin-top",X.nzOffset&&X.nzOffset[1]?X.nzOffset[1]:null,"px"),t.ekj("ant-badge-count",!X.nzDot)("ant-badge-dot",X.nzDot)("ant-badge-multiple-words",X.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[t.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(B,X){if(1&B&&(t.YNc(0,ie,2,1,"ng-container",0),t.YNc(1,j,1,1,"ng-template",null,1,t.W1O)),2&B){const _e=t.MAs(2);t.Q6J("ngIf",X.count<=X.nzOverflowCount)("ngIfElse",_e)}},directives:[E.O5,E.sg,d.P],encapsulation:2,data:{animation:[D.Ev]},changeDetection:0}),u})(),L=(()=>{class u{constructor(B,X,_e,Te,Me,xe){this.nzConfigService=B,this.renderer=X,this.cdr=_e,this.elementRef=Te,this.directionality=Me,this.noAnimation=xe,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var B;null===(B=this.directionality.change)||void 0===B||B.pipe((0,s.R)(this.destroy$)).subscribe(X=>{this.dir=X,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(B){const{nzColor:X,nzShowDot:_e,nzDot:Te,nzCount:Me,nzShowZero:xe}=B;X&&(this.presetColor=this.nzColor&&-1!==O.indexOf(this.nzColor)?this.nzColor:null),(_e||Te||Me||xe)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(B){return new(B||u)(t.Y36(_.jY),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(Y.Is,8),t.Y36(d.P,9))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(B,X){2&B&&t.ekj("ant-badge-status",X.nzStatus)("ant-badge-not-a-wrapper",!!(X.nzStandalone||X.nzStatus||X.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[t.TTD],ngContentSelectors:se,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(B,X){1&B&&(t.F$t(),t.YNc(0,V,4,7,"ng-container",0),t.Hsn(1),t.YNc(2,G,2,1,"ng-container",1)),2&B&&(t.Q6J("ngIf",X.nzStatus||X.nzColor),t.xp6(2),t.Q6J("nzStringTemplateOutlet",X.nzCount))},directives:[m,E.O5,E.PC,T.f],encapsulation:2,data:{animation:[D.Ev]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowZero",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowDot",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzStandalone",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzDot",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzColor",void 0),u})(),b=(()=>{class u{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(B){const{nzColor:X}=B;X&&(this.presetColor=this.nzColor&&-1!==O.indexOf(this.nzColor)?this.nzColor:null)}}return u.\u0275fac=function(B){return new(B||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[t.TTD],ngContentSelectors:se,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(B,X){1&B&&(t.F$t(),t.Hsn(0),t.TgZ(1,"div",0),t.YNc(2,$,2,1,"ng-container",1),t._UZ(3,"div",2),t.qZA()),2&B&&(t.xp6(1),t.Tol(X.presetColor&&"ant-ribbon-color-"+X.presetColor),t.Udp("background-color",!X.presetColor&&X.nzColor),t.ekj("ant-ribbon-placement-end","end"===X.nzPlacement)("ant-ribbon-placement-start","start"===X.nzPlacement),t.xp6(1),t.Q6J("nzStringTemplateOutlet",X.nzText),t.xp6(1),t.Udp("color",!X.presetColor&&X.nzColor))},directives:[T.f],encapsulation:2,changeDetection:0}),u})(),J=(()=>{class u{}return u.\u0275fac=function(B){return new(B||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[Y.vT,E.ez,M.Q8,T.T,d.g]]}),u})()},7484:(ze,q,o)=>{o.d(q,{bd:()=>Ce,vh:()=>Ae,_i:()=>Me});var i=o(655),t=o(5e3),n=o(1721),s=o(8929),D=o(7625),_=o(9439),c=o(226),Y=o(9808),d=o(969);function E(K,he){1&K&&t.Hsn(0)}const T=["*"];function M(K,he){1&K&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA()),2&K&&t.Q6J("ngClass",he.$implicit)}function x(K,he){if(1&K&&(t.TgZ(0,"div",2),t.YNc(1,M,2,1,"div",3),t.qZA()),2&K){const W=he.$implicit;t.xp6(1),t.Q6J("ngForOf",W)}}function te(K,he){if(1&K&&(t.ynx(0),t._uU(1),t.BQk()),2&K){const W=t.oxw(3);t.xp6(1),t.Oqu(W.nzTitle)}}function R(K,he){if(1&K&&(t.TgZ(0,"div",11),t.YNc(1,te,2,1,"ng-container",12),t.qZA()),2&K){const W=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",W.nzTitle)}}function ie(K,he){if(1&K&&(t.ynx(0),t._uU(1),t.BQk()),2&K){const W=t.oxw(3);t.xp6(1),t.Oqu(W.nzExtra)}}function j(K,he){if(1&K&&(t.TgZ(0,"div",13),t.YNc(1,ie,2,1,"ng-container",12),t.qZA()),2&K){const W=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",W.nzExtra)}}function Z(K,he){}function V(K,he){if(1&K&&(t.ynx(0),t.YNc(1,Z,0,0,"ng-template",14),t.BQk()),2&K){const W=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",W.listOfNzCardTabComponent.template)}}function P(K,he){if(1&K&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.YNc(2,R,2,1,"div",8),t.YNc(3,j,2,1,"div",9),t.qZA(),t.YNc(4,V,2,1,"ng-container",10),t.qZA()),2&K){const W=t.oxw();t.xp6(2),t.Q6J("ngIf",W.nzTitle),t.xp6(1),t.Q6J("ngIf",W.nzExtra),t.xp6(1),t.Q6J("ngIf",W.listOfNzCardTabComponent)}}function G(K,he){}function se(K,he){if(1&K&&(t.TgZ(0,"div",15),t.YNc(1,G,0,0,"ng-template",14),t.qZA()),2&K){const W=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",W.nzCover)}}function $(K,he){1&K&&(t.ynx(0),t.Hsn(1),t.BQk())}function O(K,he){1&K&&t._UZ(0,"nz-card-loading")}function m(K,he){}function A(K,he){if(1&K&&(t.TgZ(0,"li"),t.TgZ(1,"span"),t.YNc(2,m,0,0,"ng-template",14),t.qZA(),t.qZA()),2&K){const W=he.$implicit,ge=t.oxw(2);t.Udp("width",100/ge.nzActions.length,"%"),t.xp6(2),t.Q6J("ngTemplateOutlet",W)}}function L(K,he){if(1&K&&(t.TgZ(0,"ul",16),t.YNc(1,A,3,3,"li",17),t.qZA()),2&K){const W=t.oxw();t.xp6(1),t.Q6J("ngForOf",W.nzActions)}}let Te=(()=>{class K{constructor(){this.nzHoverable=!0}}return K.\u0275fac=function(W){return new(W||K)},K.\u0275dir=t.lG2({type:K,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(W,ge){2&W&&t.ekj("ant-card-hoverable",ge.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,n.yF)()],K.prototype,"nzHoverable",void 0),K})(),Me=(()=>{class K{}return K.\u0275fac=function(W){return new(W||K)},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card-tab"]],viewQuery:function(W,ge){if(1&W&&t.Gf(t.Rgc,7),2&W){let de;t.iGM(de=t.CRH())&&(ge.template=de.first)}},exportAs:["nzCardTab"],ngContentSelectors:T,decls:1,vars:0,template:function(W,ge){1&W&&(t.F$t(),t.YNc(0,E,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),K})(),xe=(()=>{class K{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return K.\u0275fac=function(W){return new(W||K)},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(W,ge){1&W&&(t.TgZ(0,"div",0),t.YNc(1,x,2,1,"div",1),t.qZA()),2&W&&(t.xp6(1),t.Q6J("ngForOf",ge.listOfLoading))},directives:[Y.sg,Y.mk],encapsulation:2,changeDetection:0}),K})(),Ce=(()=>{class K{constructor(W,ge,de){this.nzConfigService=W,this.cdr=ge,this.directionality=de,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,D.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var W;null===(W=this.directionality.change)||void 0===W||W.pipe((0,D.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return K.\u0275fac=function(W){return new(W||K)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(c.Is,8))},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card"]],contentQueries:function(W,ge,de){if(1&W&&(t.Suo(de,Me,5),t.Suo(de,Te,4)),2&W){let Ne;t.iGM(Ne=t.CRH())&&(ge.listOfNzCardTabComponent=Ne.first),t.iGM(Ne=t.CRH())&&(ge.listOfNzCardGridDirective=Ne)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(W,ge){2&W&&t.ekj("ant-card-loading",ge.nzLoading)("ant-card-bordered",!1===ge.nzBorderless&&ge.nzBordered)("ant-card-hoverable",ge.nzHoverable)("ant-card-small","small"===ge.nzSize)("ant-card-contain-grid",ge.listOfNzCardGridDirective&&ge.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===ge.nzType)("ant-card-contain-tabs",!!ge.listOfNzCardTabComponent)("ant-card-rtl","rtl"===ge.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:T,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(W,ge){if(1&W&&(t.F$t(),t.YNc(0,P,5,3,"div",0),t.YNc(1,se,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,$,2,0,"ng-container",3),t.YNc(4,O,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(6,L,2,1,"ul",5)),2&W){const de=t.MAs(5);t.Q6J("ngIf",ge.nzTitle||ge.nzExtra||ge.listOfNzCardTabComponent),t.xp6(1),t.Q6J("ngIf",ge.nzCover),t.xp6(1),t.Q6J("ngStyle",ge.nzBodyStyle),t.xp6(1),t.Q6J("ngIf",!ge.nzLoading)("ngIfElse",de),t.xp6(3),t.Q6J("ngIf",ge.nzActions.length)}},directives:[xe,Y.O5,d.f,Y.tP,Y.PC,Y.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzBorderless",void 0),(0,i.gn)([(0,n.yF)()],K.prototype,"nzLoading",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzHoverable",void 0),(0,i.gn)([(0,_.oS)()],K.prototype,"nzSize",void 0),K})(),Ae=(()=>{class K{}return K.\u0275fac=function(W){return new(W||K)},K.\u0275mod=t.oAB({type:K}),K.\u0275inj=t.cJS({imports:[[Y.ez,d.T],c.vT]}),K})()},5577:(ze,q,o)=>{o.d(q,{D3:()=>_,y7:()=>Y});var i=o(5e3),t=o(3191),n=o(2916),s=o(8929);let D=(()=>{class d{create(T){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(T)}}return d.\u0275fac=function(T){return new(T||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),_=(()=>{class d{constructor(T){this.nzResizeObserverFactory=T,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((T,M)=>this.cleanupObserver(M))}observe(T){const M=(0,t.fI)(T);return new n.y(x=>{const R=this.observeElement(M).subscribe(x);return()=>{R.unsubscribe(),this.unobserveElement(M)}})}observeElement(T){if(this.observedElements.has(T))this.observedElements.get(T).count++;else{const M=new s.xQ,x=this.nzResizeObserverFactory.create(te=>M.next(te));x&&x.observe(T),this.observedElements.set(T,{observer:x,stream:M,count:1})}return this.observedElements.get(T).stream}unobserveElement(T){this.observedElements.has(T)&&(this.observedElements.get(T).count--,this.observedElements.get(T).count||this.cleanupObserver(T))}cleanupObserver(T){if(this.observedElements.has(T)){const{observer:M,stream:x}=this.observedElements.get(T);M&&M.disconnect(),x.complete(),this.observedElements.delete(T)}}}return d.\u0275fac=function(T){return new(T||d)(i.LFG(D))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),Y=(()=>{class d{}return d.\u0275fac=function(T){return new(T||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({providers:[D]}),d})()},5482:(ze,q,o)=>{o.d(q,{yH:()=>P,cD:()=>$,Zv:()=>se});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),D=o(8076),_=o(9439),c=o(1721),Y=o(226),d=o(4832),E=o(9808),T=o(969),M=o(647);const x=["*"];function te(O,m){if(1&O&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&O){const A=m.$implicit,L=t.oxw(2);t.xp6(1),t.Q6J("nzType",A||"right")("nzRotate",L.nzActive?90:0)}}function R(O,m){if(1&O&&(t.TgZ(0,"div"),t.YNc(1,te,2,2,"ng-container",2),t.qZA()),2&O){const A=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",A.nzExpandedIcon)}}function ie(O,m){if(1&O&&(t.ynx(0),t._uU(1),t.BQk()),2&O){const A=t.oxw();t.xp6(1),t.Oqu(A.nzHeader)}}function j(O,m){if(1&O&&(t.ynx(0),t._uU(1),t.BQk()),2&O){const A=t.oxw(2);t.xp6(1),t.Oqu(A.nzExtra)}}function Z(O,m){if(1&O&&(t.TgZ(0,"div",7),t.YNc(1,j,2,1,"ng-container",2),t.qZA()),2&O){const A=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",A.nzExtra)}}const V="collapse";let P=(()=>{class O{constructor(A,L,b){this.nzConfigService=A,this.cdr=L,this.directionality=b,this._nzModuleName=V,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(V).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var A;null===(A=this.directionality.change)||void 0===A||A.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.dir=L,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(A){this.listOfNzCollapsePanelComponent.push(A)}removePanel(A){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(A),1)}click(A){this.nzAccordion&&!A.nzActive&&this.listOfNzCollapsePanelComponent.filter(L=>L!==A).forEach(L=>{L.nzActive&&(L.nzActive=!1,L.nzActiveChange.emit(L.nzActive),L.markForCheck())}),A.nzActive=!A.nzActive,A.nzActiveChange.emit(A.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(A){return new(A||O)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(Y.Is,8))},O.\u0275cmp=t.Xpm({type:O,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(A,L){2&A&&t.ekj("ant-collapse-icon-position-left","left"===L.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===L.nzExpandIconPosition)("ant-collapse-ghost",L.nzGhost)("ant-collapse-borderless",!L.nzBordered)("ant-collapse-rtl","rtl"===L.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:x,decls:1,vars:0,template:function(A,L){1&A&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],O.prototype,"nzAccordion",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],O.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],O.prototype,"nzGhost",void 0),O})();const G="collapsePanel";let se=(()=>{class O{constructor(A,L,b,J){this.nzConfigService=A,this.cdr=L,this.nzCollapseComponent=b,this.noAnimation=J,this._nzModuleName=G,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(G).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return O.\u0275fac=function(A){return new(A||O)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(P,1),t.Y36(d.P,8))},O.\u0275cmp=t.Xpm({type:O,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(A,L){2&A&&t.ekj("ant-collapse-no-arrow",!L.nzShowArrow)("ant-collapse-item-active",L.nzActive)("ant-collapse-item-disabled",L.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:x,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(A,L){1&A&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return L.clickHeader()}),t.YNc(1,R,2,1,"div",1),t.YNc(2,ie,2,1,"ng-container",2),t.YNc(3,Z,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&A&&(t.uIk("aria-expanded",L.nzActive),t.xp6(1),t.Q6J("ngIf",L.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",L.nzHeader),t.xp6(1),t.Q6J("ngIf",L.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",L.nzActive),t.Q6J("@.disabled",null==L.noAnimation?null:L.noAnimation.nzNoAnimation)("@collapseMotion",L.nzActive?"expanded":"hidden"))},directives:[E.O5,T.f,M.Ls],encapsulation:2,data:{animation:[D.J_]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],O.prototype,"nzActive",void 0),(0,i.gn)([(0,c.yF)()],O.prototype,"nzDisabled",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],O.prototype,"nzShowArrow",void 0),O})(),$=(()=>{class O{}return O.\u0275fac=function(A){return new(A||O)},O.\u0275mod=t.oAB({type:O}),O.\u0275inj=t.cJS({imports:[[Y.vT,E.ez,M.PV,T.T,d.g]]}),O})()},3098:(ze,q,o)=>{o.d(q,{R7:()=>ue,uj:()=>Pe,q6:()=>Oe});var i=o(226),t=o(925),n=o(9808),s=o(5e3),D=o(969),_=o(655),c=o(8929),Y=o(6787),d=o(1721),E=o(7625),T=o(1059),M=o(7545),x=o(7138),te=o(2994),R=o(9439),ie=o(948),j=o(4090);function Z(w,fe){1&w&&s.Hsn(0)}const V=["*"];function P(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw(3);s.xp6(1),s.Oqu(k.nzTitle)}}function G(w,fe){if(1&w&&(s.TgZ(0,"div",6),s.YNc(1,P,2,1,"ng-container",7),s.qZA()),2&w){const k=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.nzTitle)}}function se(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw(3);s.xp6(1),s.Oqu(k.nzExtra)}}function $(w,fe){if(1&w&&(s.TgZ(0,"div",8),s.YNc(1,se,2,1,"ng-container",7),s.qZA()),2&w){const k=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.nzExtra)}}function O(w,fe){if(1&w&&(s.TgZ(0,"div",3),s.YNc(1,G,2,1,"div",4),s.YNc(2,$,2,1,"div",5),s.qZA()),2&w){const k=s.oxw();s.xp6(1),s.Q6J("ngIf",k.nzTitle),s.xp6(1),s.Q6J("ngIf",k.nzExtra)}}function m(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",k.title," ")}}function A(w,fe){}function L(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,m,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,A,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&w){const k=s.oxw().$implicit,Ie=s.oxw(3);s.xp6(1),s.Q6J("colSpan",k.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Ie.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.title),s.xp6(2),s.Q6J("ngTemplateOutlet",k.content)}}function b(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",k.title," ")}}function J(w,fe){if(1&w&&(s.TgZ(0,"td",14),s.YNc(1,b,2,1,"ng-container",7),s.qZA()),2&w){const k=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.title)}}function u(w,fe){}function U(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,J,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,u,0,0,"ng-template",16),s.qZA(),s.BQk()),2&w){const k=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.title),s.xp6(1),s.Q6J("colSpan",2*k.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",k.content)}}function B(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,L,7,5,"ng-container",2),s.YNc(2,U,4,3,"ng-container",2),s.BQk()),2&w){const k=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!k.nzBordered),s.xp6(1),s.Q6J("ngIf",k.nzBordered)}}function X(w,fe){if(1&w&&(s.TgZ(0,"tr",10),s.YNc(1,B,3,2,"ng-container",11),s.qZA()),2&w){const k=fe.$implicit;s.xp6(1),s.Q6J("ngForOf",k)}}function _e(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,X,2,1,"tr",9),s.BQk()),2&w){const k=s.oxw();s.xp6(1),s.Q6J("ngForOf",k.itemMatrix)}}function Te(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw().$implicit;s.xp6(1),s.hij(" ",k.title," ")}}function Me(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,Te,2,1,"ng-container",7),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&w){const k=fe.$implicit,Ie=s.oxw(4);s.xp6(1),s.Q6J("colSpan",k.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Ie.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.title)}}function xe(w,fe){}function oe(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",15),s.YNc(4,xe,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&w){const k=fe.$implicit;s.xp6(1),s.Q6J("colSpan",k.span),s.xp6(3),s.Q6J("ngTemplateOutlet",k.content)}}function Ce(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,Me,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,oe,5,2,"ng-container",11),s.qZA(),s.BQk()),2&w){const k=fe.$implicit;s.xp6(2),s.Q6J("ngForOf",k),s.xp6(2),s.Q6J("ngForOf",k)}}function pe(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,Ce,5,2,"ng-container",11),s.BQk()),2&w){const k=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",k.itemMatrix)}}function Ae(w,fe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const k=s.oxw().$implicit;s.xp6(1),s.hij(" ",k.title," ")}}function K(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,Ae,2,1,"ng-container",7),s.qZA(),s.BQk()),2&w){const k=fe.$implicit;s.xp6(1),s.Q6J("colSpan",k.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",k.title)}}function he(w,fe){}function W(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,he,0,0,"ng-template",16),s.qZA(),s.BQk()),2&w){const k=fe.$implicit;s.xp6(1),s.Q6J("colSpan",k.span),s.xp6(1),s.Q6J("ngTemplateOutlet",k.content)}}function ge(w,fe){if(1&w&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,K,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,W,3,2,"ng-container",11),s.qZA(),s.BQk()),2&w){const k=fe.$implicit;s.xp6(2),s.Q6J("ngForOf",k),s.xp6(2),s.Q6J("ngForOf",k)}}function de(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,ge,5,2,"ng-container",11),s.BQk()),2&w){const k=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",k.itemMatrix)}}function Ne(w,fe){if(1&w&&(s.ynx(0),s.YNc(1,pe,2,1,"ng-container",2),s.YNc(2,de,2,1,"ng-container",2),s.BQk()),2&w){const k=s.oxw();s.xp6(1),s.Q6J("ngIf",!k.nzBordered),s.xp6(1),s.Q6J("ngIf",k.nzBordered)}}let Pe=(()=>{class w{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new c.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return w.\u0275fac=function(k){return new(k||w)},w.\u0275cmp=s.Xpm({type:w,selectors:[["nz-descriptions-item"]],viewQuery:function(k,Ie){if(1&k&&s.Gf(s.Rgc,7),2&k){let Re;s.iGM(Re=s.CRH())&&(Ie.content=Re.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:V,decls:1,vars:0,template:function(k,Ie){1&k&&(s.F$t(),s.YNc(0,Z,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.Rn)()],w.prototype,"nzSpan",void 0),w})();const Ee={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let ue=(()=>{class w{constructor(k,Ie,Re,Ge){this.nzConfigService=k,this.cdr=Ie,this.breakpointService=Re,this.directionality=Ge,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Ee,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=j.G_.md,this.destroy$=new c.xQ}ngOnInit(){var k;this.dir=this.directionality.value,null===(k=this.directionality.change)||void 0===k||k.pipe((0,E.R)(this.destroy$)).subscribe(Ie=>{this.dir=Ie})}ngOnChanges(k){k.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const k=this.items.changes.pipe((0,T.O)(this.items),(0,E.R)(this.destroy$));(0,Y.T)(k,k.pipe((0,M.w)(()=>(0,Y.T)(...this.items.map(Ie=>Ie.inputChange$)).pipe((0,x.e)(16)))),this.breakpointService.subscribe(j.WV).pipe((0,te.b)(Ie=>this.breakpoint=Ie))).pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let k=[],Ie=0;const Re=this.realColumn=this.getColumn(),Ge=this.items.toArray(),tt=Ge.length,nt=[],Ke=()=>{nt.push(k),k=[],Ie=0};for(let Ye=0;Ye<tt;Ye++){const C=Ge[Ye],{nzTitle:He,content:Xe,nzSpan:We}=C;Ie+=We,Ie>=Re?(Ie>Re&&(0,ie.ZK)(`"nzColumn" is ${Re} but we have row length ${Ie}`),k.push({title:He,content:Xe,span:Re-(Ie-We)}),Ke()):Ye===tt-1?(k.push({title:He,content:Xe,span:Re-(Ie-We)}),Ke()):k.push({title:He,content:Xe,span:We})}this.itemMatrix=nt}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return w.\u0275fac=function(k){return new(k||w)(s.Y36(R.jY),s.Y36(s.sBO),s.Y36(j.r3),s.Y36(i.Is,8))},w.\u0275cmp=s.Xpm({type:w,selectors:[["nz-descriptions"]],contentQueries:function(k,Ie,Re){if(1&k&&s.Suo(Re,Pe,4),2&k){let Ge;s.iGM(Ge=s.CRH())&&(Ie.items=Ge)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(k,Ie){2&k&&s.ekj("ant-descriptions-bordered",Ie.nzBordered)("ant-descriptions-middle","middle"===Ie.nzSize)("ant-descriptions-small","small"===Ie.nzSize)("ant-descriptions-rtl","rtl"===Ie.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(k,Ie){1&k&&(s.YNc(0,O,3,2,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"table"),s.TgZ(3,"tbody"),s.YNc(4,_e,2,1,"ng-container",2),s.YNc(5,Ne,3,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&k&&(s.Q6J("ngIf",Ie.nzTitle||Ie.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===Ie.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===Ie.nzLayout))},directives:[n.O5,D.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.yF)(),(0,R.oS)()],w.prototype,"nzBordered",void 0),(0,_.gn)([(0,R.oS)()],w.prototype,"nzColumn",void 0),(0,_.gn)([(0,R.oS)()],w.prototype,"nzSize",void 0),(0,_.gn)([(0,R.oS)(),(0,d.yF)()],w.prototype,"nzColon",void 0),w})(),Oe=(()=>{class w{}return w.\u0275fac=function(k){return new(k||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[[i.vT,n.ez,D.T,t.ud]]}),w})()},3677:(ze,q,o)=>{o.d(q,{cm:()=>Me,b1:()=>Ae,wA:()=>Ce,RR:()=>pe});var i=o(655),t=o(1159),n=o(7429),s=o(5e3),D=o(8929),_=o(591),c=o(6787),Y=o(3753),d=o(8896),E=o(6053),T=o(7604),M=o(4850),x=o(7545),te=o(2198),R=o(7138),ie=o(5778),j=o(7625),Z=o(9439),V=o(6950),P=o(1721),G=o(2845),se=o(925),$=o(226),O=o(9808),m=o(3075),A=o(6042),L=o(4832),b=o(969),J=o(647),u=o(4219),U=o(8076);function B(W,ge){if(1&W){const de=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Pe){return s.CHM(de),s.oxw().onAnimationEvent(Pe)})("mouseenter",function(){return s.CHM(de),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(de),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&W){const de=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===de.dir),s.Q6J("ngClass",de.nzOverlayClassName)("ngStyle",de.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)("nzNoAnimation",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)}}const X=["*"],Te=[V.yW.bottomLeft,V.yW.bottomRight,V.yW.topRight,V.yW.topLeft];let Me=(()=>{class W{constructor(de,Ne,Pe,re,Ee,ue){this.nzConfigService=de,this.elementRef=Ne,this.overlay=Pe,this.renderer=re,this.viewContainerRef=Ee,this.platform=ue,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new D.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new _.X(!1),this.nzTrigger$=new _.X("hover"),this.overlayClose$=new D.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(de,Ne){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(de,Ne)}ngAfterViewInit(){if(this.nzDropdownMenu){const de=this.elementRef.nativeElement,Ne=(0,c.T)((0,Y.R)(de,"mouseenter").pipe((0,T.h)(!0)),(0,Y.R)(de,"mouseleave").pipe((0,T.h)(!1))),re=(0,c.T)(this.nzDropdownMenu.mouseState$,Ne),Ee=(0,Y.R)(de,"click").pipe((0,M.U)(()=>!this.nzVisible)),ue=this.nzTrigger$.pipe((0,x.w)(k=>"hover"===k?re:"click"===k?Ee:d.E)),Oe=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,te.h)(()=>this.nzClickHide),(0,T.h)(!1)),w=(0,c.T)(ue,Oe,this.overlayClose$).pipe((0,te.h)(()=>!this.nzDisabled)),fe=(0,c.T)(this.inputVisible$,w);(0,E.aj)([fe,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,M.U)(([k,Ie])=>k||Ie),(0,R.e)(150),(0,ie.x)(),(0,te.h)(()=>this.platform.isBrowser),(0,j.R)(this.destroy$)).subscribe(k=>{const Re=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:de).getBoundingClientRect().width;this.nzVisible!==k&&this.nzVisibleChange.emit(k),this.nzVisible=k,k?(this.overlayRef?this.overlayRef.getConfig().minWidth=Re:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Re,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,c.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,te.h)(Ge=>!this.elementRef.nativeElement.contains(Ge.target))),this.overlayRef.keydownEvents().pipe((0,te.h)(Ge=>Ge.keyCode===t.hY&&!(0,t.Vb)(Ge)))).pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([V.yW[this.nzPlacement],...Te]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,j.R)(this.destroy$)).subscribe(k=>{"void"===k.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(de){const{nzVisible:Ne,nzDisabled:Pe,nzOverlayClassName:re,nzOverlayStyle:Ee,nzTrigger:ue}=de;if(ue&&this.nzTrigger$.next(this.nzTrigger),Ne&&this.inputVisible$.next(this.nzVisible),Pe){const Oe=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Oe,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Oe,"disabled")}re&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Ee&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return W.\u0275fac=function(de){return new(de||W)(s.Y36(Z.jY),s.Y36(s.SBq),s.Y36(G.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(se.t4))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,i.gn)([(0,Z.oS)(),(0,P.yF)()],W.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,P.yF)()],W.prototype,"nzClickHide",void 0),(0,i.gn)([(0,P.yF)()],W.prototype,"nzDisabled",void 0),(0,i.gn)([(0,P.yF)()],W.prototype,"nzVisible",void 0),W})(),xe=(()=>{class W{}return W.\u0275fac=function(de){return new(de||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({}),W})(),Ce=(()=>{class W{constructor(de,Ne,Pe){this.renderer=de,this.nzButtonGroupComponent=Ne,this.elementRef=Pe}ngAfterViewInit(){const de=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&de&&this.renderer.addClass(de,"ant-dropdown-button")}}return W.\u0275fac=function(de){return new(de||W)(s.Y36(s.Qsj),s.Y36(A.fY,9),s.Y36(s.SBq))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-button","","nz-dropdown",""]]}),W})(),pe=(()=>{class W{constructor(de,Ne,Pe,re,Ee,ue,Oe){this.cdr=de,this.elementRef=Ne,this.renderer=Pe,this.viewContainerRef=re,this.nzMenuService=Ee,this.directionality=ue,this.noAnimation=Oe,this.mouseState$=new _.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new D.xQ}onAnimationEvent(de){this.animationStateChange$.emit(de)}setMouseState(de){this.mouseState$.next(de)}setValue(de,Ne){this[de]=Ne,this.cdr.markForCheck()}ngOnInit(){var de;null===(de=this.directionality.change)||void 0===de||de.pipe((0,j.R)(this.destroy$)).subscribe(Ne=>{this.dir=Ne,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(de){return new(de||W)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(u.hl),s.Y36($.Is,8),s.Y36(L.P,9))},W.\u0275cmp=s.Xpm({type:W,selectors:[["nz-dropdown-menu"]],viewQuery:function(de,Ne){if(1&de&&s.Gf(s.Rgc,7),2&de){let Pe;s.iGM(Pe=s.CRH())&&(Ne.templateRef=Pe.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([u.hl,{provide:u.Cc,useValue:!0}])],ngContentSelectors:X,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(de,Ne){1&de&&(s.F$t(),s.YNc(0,B,2,7,"ng-template"))},directives:[O.mk,O.PC,L.P],encapsulation:2,data:{animation:[U.mF]},changeDetection:0}),W})(),Ae=(()=>{class W{}return W.\u0275fac=function(de){return new(de||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({imports:[[$.vT,O.ez,G.U8,m.u5,A.sL,u.ip,J.PV,L.g,se.ud,V.e4,xe,b.T],u.ip]}),W})();new G.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new G.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new G.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new G.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ze,q,o)=>{o.d(q,{n_:()=>Ve,I2:()=>Ue,t4:()=>ke,AA:()=>ot,yw:()=>be,yi:()=>ye,IO:()=>z,Ph:()=>st});var i=o(5e3),t=o(6699),n=o(9808),s=o(969),D=o(655),_=o(1721),c=o(8929),Y=o(8514),d=o(1086),E=o(6787),T=o(591),M=o(2986),x=o(7545),te=o(7625),R=o(685),ie=o(226),j=o(7525),Z=o(1894);const V=["*"];function P(y,ee){if(1&y&&i._UZ(0,"nz-avatar",3),2&y){const F=i.oxw();i.Q6J("nzSrc",F.nzSrc)}}function G(y,ee){1&y&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function se(y,ee){if(1&y&&i._UZ(0,"nz-list-item-meta-avatar",3),2&y){const F=i.oxw();i.Q6J("nzSrc",F.avatarStr)}}function $(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",F.avatarTpl)}}function O(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const F=i.oxw(3);i.xp6(1),i.Oqu(F.nzTitle)}}function m(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,O,2,1,"ng-container",6),i.qZA()),2&y){const F=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",F.nzTitle)}}function A(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const F=i.oxw(3);i.xp6(1),i.Oqu(F.nzDescription)}}function L(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,A,2,1,"ng-container",6),i.qZA()),2&y){const F=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",F.nzDescription)}}function b(y,ee){if(1&y&&(i.TgZ(0,"div",5),i.YNc(1,m,2,1,"nz-list-item-meta-title",1),i.YNc(2,L,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("ngIf",F.nzTitle&&!F.titleComponent),i.xp6(1),i.Q6J("ngIf",F.nzDescription&&!F.descriptionComponent)}}const J=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],u=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function U(y,ee){1&y&&i.Hsn(0)}const B=["nz-list-item-actions",""];function X(y,ee){}function _e(y,ee){1&y&&i._UZ(0,"em",3)}function Te(y,ee){if(1&y&&(i.TgZ(0,"li"),i.YNc(1,X,0,0,"ng-template",1),i.YNc(2,_e,1,0,"em",2),i.qZA()),2&y){const F=ee.$implicit,le=ee.last;i.xp6(1),i.Q6J("ngTemplateOutlet",F),i.xp6(1),i.Q6J("ngIf",!le)}}function Me(y,ee){}const xe=function(y,ee){return{$implicit:y,index:ee}};function oe(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,Me,0,0,"ng-template",9),i.BQk()),2&y){const F=ee.$implicit,le=ee.index,Se=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",Se.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,xe,F,le))}}function Ce(y,ee){if(1&y&&(i.TgZ(0,"div",7),i.YNc(1,oe,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("ngForOf",F.nzDataSource)}}function pe(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const F=i.oxw(2);i.xp6(1),i.Oqu(F.nzHeader)}}function Ae(y,ee){if(1&y&&(i.TgZ(0,"nz-list-header"),i.YNc(1,pe,2,1,"ng-container",10),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",F.nzHeader)}}function K(y,ee){1&y&&i._UZ(0,"div"),2&y&&i.Udp("min-height",53,"px")}function he(y,ee){}function W(y,ee){if(1&y&&(i.TgZ(0,"div",13),i.YNc(1,he,0,0,"ng-template",9),i.qZA()),2&y){const F=ee.$implicit,le=ee.index,Se=i.oxw(2);i.Q6J("nzSpan",Se.nzGrid.span||null)("nzXs",Se.nzGrid.xs||null)("nzSm",Se.nzGrid.sm||null)("nzMd",Se.nzGrid.md||null)("nzLg",Se.nzGrid.lg||null)("nzXl",Se.nzGrid.xl||null)("nzXXl",Se.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",Se.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,xe,F,le))}}function ge(y,ee){if(1&y&&(i.TgZ(0,"div",11),i.YNc(1,W,2,12,"div",12),i.qZA()),2&y){const F=i.oxw();i.Q6J("nzGutter",F.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",F.nzDataSource)}}function de(y,ee){if(1&y&&i._UZ(0,"nz-list-empty",14),2&y){const F=i.oxw();i.Q6J("nzNoResult",F.nzNoResult)}}function Ne(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const F=i.oxw(2);i.xp6(1),i.Oqu(F.nzFooter)}}function Pe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,Ne,2,1,"ng-container",10),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",F.nzFooter)}}function re(y,ee){}function Ee(y,ee){}function ue(y,ee){if(1&y&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Ee,0,0,"ng-template",6),i.qZA()),2&y){const F=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",F.nzPagination)}}const Oe=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],w=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function fe(y,ee){if(1&y&&i._UZ(0,"ul",6),2&y){const F=i.oxw(2);i.Q6J("nzActions",F.nzActions)}}function k(y,ee){if(1&y&&(i.YNc(0,fe,1,1,"ul",5),i.Hsn(1)),2&y){const F=i.oxw();i.Q6J("ngIf",F.nzActions&&F.nzActions.length>0)}}function Ie(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const F=i.oxw(3);i.xp6(1),i.Oqu(F.nzContent)}}function Re(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,Ie,2,1,"ng-container",8),i.BQk()),2&y){const F=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",F.nzContent)}}function Ge(y,ee){if(1&y&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,Re,2,1,"ng-container",7)),2&y){const F=i.oxw();i.xp6(2),i.Q6J("ngIf",F.nzContent)}}function tt(y,ee){1&y&&i.Hsn(0,3)}function nt(y,ee){}function Ke(y,ee){}function Ye(y,ee){}function C(y,ee){}function He(y,ee){if(1&y&&(i.YNc(0,nt,0,0,"ng-template",9),i.YNc(1,Ke,0,0,"ng-template",9),i.YNc(2,Ye,0,0,"ng-template",9),i.YNc(3,C,0,0,"ng-template",9)),2&y){const F=i.oxw(),le=i.MAs(3),Se=i.MAs(5),Fe=i.MAs(1);i.Q6J("ngTemplateOutlet",le),i.xp6(1),i.Q6J("ngTemplateOutlet",F.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Se),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}function Xe(y,ee){}function We(y,ee){}function lt(y,ee){}function Qe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,lt,0,0,"ng-template",9),i.qZA()),2&y){const F=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",F.nzExtra)}}function pt(y,ee){}function v(y,ee){if(1&y&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,Xe,0,0,"ng-template",9),i.YNc(3,We,0,0,"ng-template",9),i.qZA(),i.YNc(4,Qe,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&y){const F=i.oxw(),le=i.MAs(3),Se=i.MAs(1),Fe=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",le),i.xp6(1),i.Q6J("ngTemplateOutlet",Se),i.xp6(1),i.Q6J("ngIf",F.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}const l=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],ve=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let z=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:V,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(F,le){1&F&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),f=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:V,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(F,le){1&F&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),me=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:V,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(F,le){1&F&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,P,1,1,"nz-avatar",1),i.YNc(2,G,1,0,"ng-content",2),i.qZA()),2&F&&(i.xp6(1),i.Q6J("ngIf",le.nzSrc),i.xp6(1),i.Q6J("ngIf",!le.nzSrc))},directives:[t.Dz,n.O5],encapsulation:2,changeDetection:0}),y})(),ye=(()=>{class y{constructor(F,le){this.elementRef=F,this.renderer=le,this.avatarStr="",this.renderer.addClass(F.nativeElement,"ant-list-item-meta")}set nzAvatar(F){F instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=F):this.avatarStr=F}}return y.\u0275fac=function(F){return new(F||y)(i.Y36(i.SBq),i.Y36(i.Qsj))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(F,le,Se){if(1&F&&(i.Suo(Se,f,5),i.Suo(Se,z,5)),2&F){let Fe;i.iGM(Fe=i.CRH())&&(le.descriptionComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.titleComponent=Fe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:u,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(F,le){1&F&&(i.F$t(J),i.YNc(0,se,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,$,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,b,5,2,"div",2)),2&F&&(i.Q6J("ngIf",le.avatarStr),i.xp6(1),i.Q6J("ngIf",le.avatarTpl),i.xp6(2),i.Q6J("ngIf",le.nzTitle||le.nzDescription||le.descriptionComponent||le.titleComponent))},directives:[me,z,f,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),y})(),be=(()=>{class y{constructor(){}}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:V,decls:1,vars:0,template:function(F,le){1&F&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Be=(()=>{class y{constructor(){}}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-action"]],viewQuery:function(F,le){if(1&F&&i.Gf(i.Rgc,5),2&F){let Se;i.iGM(Se=i.CRH())&&(le.templateRef=Se.first)}},exportAs:["nzListItemAction"],ngContentSelectors:V,decls:1,vars:0,template:function(F,le){1&F&&(i.F$t(),i.YNc(0,U,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),y})(),$e=(()=>{class y{constructor(F,le){this.ngZone=F,this.cdr=le,this.nzActions=[],this.actions=[],this.destroy$=new c.xQ,this.inputActionChanges$=new c.xQ,this.contentChildrenChanges$=(0,Y.P)(()=>this.nzListItemActions?(0,d.of)(null):this.ngZone.onStable.asObservable().pipe((0,M.q)(1),(0,x.w)(()=>this.contentChildrenChanges$))),(0,E.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,te.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Se=>Se.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return y.\u0275fac=function(F){return new(F||y)(i.Y36(i.R0b),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(F,le,Se){if(1&F&&i.Suo(Se,Be,4),2&F){let Fe;i.iGM(Fe=i.CRH())&&(le.nzListItemActions=Fe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:B,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(F,le){1&F&&i.YNc(0,Te,3,2,"li",0),2&F&&i.Q6J("ngForOf",le.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),y})(),Ue=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(F,le){1&F&&i._UZ(0,"nz-embed-empty",0),2&F&&i.Q6J("nzComponentName","list")("specificContent",le.nzNoResult)},directives:[R.gB],encapsulation:2,changeDetection:0}),y})(),ke=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:V,decls:1,vars:0,template:function(F,le){1&F&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Je=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:V,decls:1,vars:0,template:function(F,le){1&F&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),qe=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:V,decls:1,vars:0,template:function(F,le){1&F&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),rt=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275dir=i.lG2({type:y,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),y})(),Ve=(()=>{class y{constructor(F){this.directionality=F,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new T.X(this.nzItemLayout),this.destroy$=new c.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var F;this.dir=this.directionality.value,null===(F=this.directionality.change)||void 0===F||F.pipe((0,te.R)(this.destroy$)).subscribe(le=>{this.dir=le})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(F){F.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return y.\u0275fac=function(F){return new(F||y)(i.Y36(ie.Is,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(F,le,Se){if(1&F&&(i.Suo(Se,Je,5),i.Suo(Se,qe,5),i.Suo(Se,rt,5)),2&F){let Fe;i.iGM(Fe=i.CRH())&&(le.nzListFooterComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.nzListPaginationComponent=Fe.first),i.iGM(Fe=i.CRH())&&(le.nzListLoadMoreDirective=Fe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(F,le){2&F&&i.ekj("ant-list-rtl","rtl"===le.dir)("ant-list-vertical","vertical"===le.nzItemLayout)("ant-list-lg","large"===le.nzSize)("ant-list-sm","small"===le.nzSize)("ant-list-split",le.nzSplit)("ant-list-bordered",le.nzBordered)("ant-list-loading",le.nzLoading)("ant-list-something-after-last-item",le.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:w,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(F,le){if(1&F&&(i.F$t(Oe),i.YNc(0,Ce,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Ae,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,K,1,2,"div",3),i.YNc(7,ge,2,2,"div",4),i.YNc(8,de,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Pe,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,re,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,ue,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&F){const Se=i.MAs(1);i.xp6(2),i.Q6J("ngIf",le.nzHeader),i.xp6(2),i.Q6J("nzSpinning",le.nzLoading),i.xp6(2),i.Q6J("ngIf",le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",le.nzGrid&&le.nzDataSource)("ngIfElse",Se),i.xp6(1),i.Q6J("ngIf",!le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",le.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",le.nzLoadMore),i.xp6(2),i.Q6J("ngIf",le.nzPagination)}},directives:[ke,j.W,Ue,Je,qe,n.sg,n.tP,n.O5,s.f,Z.SK,Z.t3],encapsulation:2,changeDetection:0}),(0,D.gn)([(0,_.yF)()],y.prototype,"nzBordered",void 0),(0,D.gn)([(0,_.yF)()],y.prototype,"nzLoading",void 0),(0,D.gn)([(0,_.yF)()],y.prototype,"nzSplit",void 0),y})(),ot=(()=>{class y{constructor(F,le,Se,Fe){this.parentComp=Se,this.cdr=Fe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,le.addClass(F.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(F=>{this.itemLayout=F,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return y.\u0275fac=function(F){return new(F||y)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ve),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(F,le,Se){if(1&F&&i.Suo(Se,be,5),2&F){let Fe;i.iGM(Fe=i.CRH())&&(le.listItemExtraDirective=Fe.first)}},hostVars:2,hostBindings:function(F,le){2&F&&i.ekj("ant-list-item-no-flex",le.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:ve,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(F,le){if(1&F&&(i.F$t(l),i.YNc(0,k,2,1,"ng-template",null,0,i.W1O),i.YNc(2,Ge,3,1,"ng-template",null,1,i.W1O),i.YNc(4,tt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,He,4,4,"ng-template",null,3,i.W1O),i.YNc(8,v,6,4,"ng-container",4)),2&F){const Se=i.MAs(7);i.xp6(8),i.Q6J("ngIf",le.isVerticalAndExtra)("ngIfElse",Se)}},directives:[$e,be,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,D.gn)([(0,_.yF)()],y.prototype,"nzNoFlex",void 0),y})(),st=(()=>{class y{}return y.\u0275fac=function(F){return new(F||y)},y.\u0275mod=i.oAB({type:y}),y.\u0275inj=i.cJS({imports:[[ie.vT,n.ez,j.j,Z.Jb,t.Rt,s.T,R.Xo]]}),y})()},4219:(ze,q,o)=>{o.d(q,{hl:()=>k,Cc:()=>w,wO:()=>We,YV:()=>pt,uA:()=>Qe,r9:()=>Re,ip:()=>v});var i=o(655),t=o(5e3),n=o(8929),s=o(591),D=o(6787),_=o(6053),c=o(4850),Y=o(1709),d=o(2198),E=o(7604),T=o(7138),M=o(5778),x=o(7625),te=o(1059),R=o(7545),ie=o(1721),j=o(325),Z=o(226),V=o(2845),P=o(6950),G=o(925),se=o(4832),$=o(9808),O=o(647),m=o(969),A=o(8076);const L=["nz-submenu-title",""];function b(l,ve){if(1&l&&t._UZ(0,"i",4),2&l){const z=t.oxw();t.Q6J("nzType",z.nzIcon)}}function J(l,ve){if(1&l&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&l){const z=t.oxw();t.xp6(2),t.Oqu(z.nzTitle)}}function u(l,ve){1&l&&t._UZ(0,"i",8)}function U(l,ve){1&l&&t._UZ(0,"i",9)}function B(l,ve){if(1&l&&(t.TgZ(0,"span",5),t.YNc(1,u,1,0,"i",6),t.YNc(2,U,1,0,"i",7),t.qZA()),2&l){const z=t.oxw();t.Q6J("ngSwitch",z.dir),t.xp6(1),t.Q6J("ngSwitchCase","rtl")}}function X(l,ve){1&l&&t._UZ(0,"i",10)}const _e=["*"],Te=["nz-submenu-inline-child",""];function Me(l,ve){}const xe=["nz-submenu-none-inline-child",""];function oe(l,ve){}const Ce=["nz-submenu",""];function pe(l,ve){1&l&&t.Hsn(0,0,["*ngIf","!nzTitle"])}function Ae(l,ve){if(1&l&&t._UZ(0,"div",6),2&l){const z=t.oxw(),f=t.MAs(7);t.Q6J("mode",z.mode)("nzOpen",z.nzOpen)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("menuClass",z.nzMenuClassName)("templateOutlet",f)}}function K(l,ve){if(1&l){const z=t.EpF();t.TgZ(0,"div",8),t.NdJ("subMenuMouseState",function(me){return t.CHM(z),t.oxw(2).setMouseEnterState(me)}),t.qZA()}if(2&l){const z=t.oxw(2),f=t.MAs(7);t.Q6J("theme",z.theme)("mode",z.mode)("nzOpen",z.nzOpen)("position",z.position)("nzDisabled",z.nzDisabled)("isMenuInsideDropDown",z.isMenuInsideDropDown)("templateOutlet",f)("menuClass",z.nzMenuClassName)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)}}function he(l,ve){if(1&l){const z=t.EpF();t.YNc(0,K,1,10,"ng-template",7),t.NdJ("positionChange",function(me){return t.CHM(z),t.oxw().onPositionChange(me)})}if(2&l){const z=t.oxw(),f=t.MAs(1);t.Q6J("cdkConnectedOverlayPositions",z.overlayPositions)("cdkConnectedOverlayOrigin",f)("cdkConnectedOverlayWidth",z.triggerWidth)("cdkConnectedOverlayOpen",z.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function W(l,ve){1&l&&t.Hsn(0,1)}const ge=[[["","title",""]],"*"],de=["[title]","*"],Ne=["titleElement"],Pe=["nz-menu-group",""];function re(l,ve){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const z=t.oxw();t.xp6(1),t.Oqu(z.nzTitle)}}function Ee(l,ve){1&l&&t.Hsn(0,1,["*ngIf","!nzTitle"])}const ue=["*",[["","title",""]]],Oe=["*","[title]"],w=new t.OlP("NzIsInDropDownMenuToken"),fe=new t.OlP("NzMenuServiceLocalToken");let k=(()=>{class l{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(z){this.descendantMenuItemClick$.next(z)}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setMode(z){this.mode$.next(z)}setTheme(z){this.theme$.next(z)}setInlineIndent(z){this.inlineIndent$.next(z)}}return l.\u0275fac=function(z){return new(z||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Ie=(()=>{class l{constructor(z,f,me){this.nzHostSubmenuService=z,this.nzMenuService=f,this.isMenuInsideDropDown=me,this.mode$=this.nzMenuService.mode$.pipe((0,c.U)($e=>"inline"===$e?"inline":"vertical"===$e||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ye=this.childMenuItemClick$.pipe((0,Y.zg)(()=>this.mode$),(0,d.h)($e=>"inline"!==$e||this.isMenuInsideDropDown),(0,E.h)(!1)),be=(0,D.T)(this.isMouseEnterTitleOrOverlay$,ye);(0,_.aj)([this.isChildSubMenuOpen$,be]).pipe((0,c.U)(([$e,Ue])=>$e||Ue),(0,T.e)(150),(0,M.x)(),(0,x.R)(this.destroy$)).pipe((0,M.x)()).subscribe($e=>{this.setOpenStateWithoutDebounce($e),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next($e):this.nzMenuService.isChildSubMenuOpen$.next($e)})}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setOpenStateWithoutDebounce(z){this.isCurrentSubMenuOpen$.next(z)}setMouseEnterTitleOrOverlayState(z){this.isMouseEnterTitleOrOverlay$.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.LFG(l,12),t.LFG(k),t.LFG(w))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Re=(()=>{class l{constructor(z,f,me,ye,be,Be,$e,Ue){this.nzMenuService=z,this.cdr=f,this.nzSubmenuService=me,this.isMenuInsideDropDown=ye,this.directionality=be,this.routerLink=Be,this.routerLinkWithHref=$e,this.router=Ue,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,x.R)(this.destroy$),(0,d.h)(ke=>ke instanceof j.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(z){this.nzDisabled?(z.preventDefault(),z.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(z){this.nzSelected=z,this.selected$.next(z)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const z=this.hasActiveLinks();this.nzSelected!==z&&(this.nzSelected=z,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const z=this.isLinkActive(this.router);return this.routerLink&&z(this.routerLink)||this.routerLinkWithHref&&z(this.routerLinkWithHref)||this.listOfRouterLink.some(z)||this.listOfRouterLinkWithHref.some(z)}isLinkActive(z){return f=>z.isActive(f.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var z;(0,_.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.inlinePaddingLeft="inline"===f?this.level*me:null}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,x.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,x.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(z){z.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(k),t.Y36(t.sBO),t.Y36(Ie,8),t.Y36(w),t.Y36(Z.Is,8),t.Y36(j.rH,8),t.Y36(j.yS,8),t.Y36(j.F0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-item",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,j.rH,5),t.Suo(me,j.yS,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfRouterLink=ye),t.iGM(ye=t.CRH())&&(f.listOfRouterLinkWithHref=ye)}},hostVars:20,hostBindings:function(z,f){1&z&&t.NdJ("click",function(ye){return f.clickMenuItem(ye)}),2&z&&(t.Udp("padding-left","rtl"===f.dir?null:f.nzPaddingLeft||f.inlinePaddingLeft,"px")("padding-right","rtl"===f.dir?f.nzPaddingLeft||f.inlinePaddingLeft:null,"px"),t.ekj("ant-dropdown-menu-item",f.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",f.isMenuInsideDropDown&&f.nzSelected)("ant-dropdown-menu-item-danger",f.isMenuInsideDropDown&&f.nzDanger)("ant-dropdown-menu-item-disabled",f.isMenuInsideDropDown&&f.nzDisabled)("ant-menu-item",!f.isMenuInsideDropDown)("ant-menu-item-selected",!f.isMenuInsideDropDown&&f.nzSelected)("ant-menu-item-danger",!f.isMenuInsideDropDown&&f.nzDanger)("ant-menu-item-disabled",!f.isMenuInsideDropDown&&f.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[t.TTD]}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDisabled",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzSelected",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDanger",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzMatchRouter",void 0),l})(),Ge=(()=>{class l{constructor(z,f){this.cdr=z,this.directionality=f,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new t.vpe,this.subMenuMouseState=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var z;this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.sBO),t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(z,f){1&z&&t.NdJ("click",function(){return f.clickTitle()})("mouseenter",function(){return f.setMouseState(!0)})("mouseleave",function(){return f.setMouseState(!1)}),2&z&&(t.Udp("padding-left","rtl"===f.dir?null:f.paddingLeft,"px")("padding-right","rtl"===f.dir?f.paddingLeft:null,"px"),t.ekj("ant-dropdown-menu-submenu-title",f.isMenuInsideDropDown)("ant-menu-submenu-title",!f.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:L,ngContentSelectors:_e,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(z,f){if(1&z&&(t.F$t(),t.YNc(0,b,1,1,"i",0),t.YNc(1,J,3,1,"ng-container",1),t.Hsn(2),t.YNc(3,B,3,2,"span",2),t.YNc(4,X,1,0,"ng-template",null,3,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("ngIf",f.nzIcon),t.xp6(1),t.Q6J("nzStringTemplateOutlet",f.nzTitle),t.xp6(2),t.Q6J("ngIf",f.isMenuInsideDropDown)("ngIfElse",me)}},directives:[$.O5,O.Ls,m.f,$.RF,$.n9,$.ED],encapsulation:2,changeDetection:0}),l})(),tt=(()=>{class l{constructor(z,f,me){this.elementRef=z,this.renderer=f,this.directionality=me,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngOnChanges(z){const{mode:f,nzOpen:me,menuClass:ye}=z;(f||me)&&this.calcMotionState(),ye&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(be=>!!be).forEach(be=>{this.renderer.removeClass(this.elementRef.nativeElement,be)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(be=>!!be).forEach(be=>{this.renderer.addClass(this.elementRef.nativeElement,be)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(z,f){2&z&&(t.d8E("@collapseMotion",f.expandState),t.ekj("ant-menu-rtl","rtl"===f.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[t.TTD],attrs:Te,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(z,f){1&z&&t.YNc(0,Me,0,0,"ng-template",0),2&z&&t.Q6J("ngTemplateOutlet",f.templateOutlet)},directives:[$.tP],encapsulation:2,data:{animation:[A.J_]},changeDetection:0}),l})(),nt=(()=>{class l{constructor(z){this.directionality=z,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new t.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngOnChanges(z){const{mode:f,nzOpen:me}=z;(f||me)&&this.calcMotionState()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(z,f){1&z&&t.NdJ("mouseenter",function(){return f.setMouseState(!0)})("mouseleave",function(){return f.setMouseState(!1)}),2&z&&(t.d8E("@slideMotion",f.expandState)("@zoomBigMotion",f.expandState),t.ekj("ant-menu-light","light"===f.theme)("ant-menu-dark","dark"===f.theme)("ant-menu-submenu-placement-bottom","horizontal"===f.mode)("ant-menu-submenu-placement-right","vertical"===f.mode&&"right"===f.position)("ant-menu-submenu-placement-left","vertical"===f.mode&&"left"===f.position)("ant-menu-submenu-rtl","rtl"===f.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[t.TTD],attrs:xe,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(z,f){1&z&&(t.TgZ(0,"div",0),t.YNc(1,oe,0,0,"ng-template",1),t.qZA()),2&z&&(t.ekj("ant-dropdown-menu",f.isMenuInsideDropDown)("ant-menu",!f.isMenuInsideDropDown)("ant-dropdown-menu-vertical",f.isMenuInsideDropDown)("ant-menu-vertical",!f.isMenuInsideDropDown)("ant-dropdown-menu-sub",f.isMenuInsideDropDown)("ant-menu-sub",!f.isMenuInsideDropDown)("ant-menu-rtl","rtl"===f.dir),t.Q6J("ngClass",f.menuClass),t.xp6(1),t.Q6J("ngTemplateOutlet",f.templateOutlet))},directives:[$.mk,$.tP],encapsulation:2,data:{animation:[A.$C,A.mF]},changeDetection:0}),l})();const Ke=[P.yW.rightTop,P.yW.right,P.yW.rightBottom,P.yW.leftTop,P.yW.left,P.yW.leftBottom],Ye=[P.yW.bottomLeft];let C=(()=>{class l{constructor(z,f,me,ye,be,Be,$e){this.nzMenuService=z,this.cdr=f,this.nzSubmenuService=me,this.platform=ye,this.isMenuInsideDropDown=be,this.directionality=Be,this.noAnimation=$e,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new t.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ke,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(z){this.nzSubmenuService.setOpenStateWithoutDebounce(z)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(z){this.isActive=z,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(z)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(z){const f=(0,P.d_)(z);"rightTop"===f||"rightBottom"===f||"right"===f?this.position="right":("leftTop"===f||"leftBottom"===f||"left"===f)&&(this.position="left")}ngOnInit(){var z;this.nzMenuService.theme$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.theme=f,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.mode=f,"horizontal"===f?this.overlayPositions=Ye:"vertical"===f&&(this.overlayPositions=Ke),this.cdr.markForCheck()}),(0,_.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.inlinePaddingLeft="inline"===f?this.level*me:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.isActive=f,f!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=f,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const z=this.listOfNzMenuItemDirective,f=z.changes,me=(0,D.T)(f,...z.map(ye=>ye.selected$));f.pipe((0,te.O)(z),(0,R.w)(()=>me),(0,te.O)(!0),(0,c.U)(()=>z.some(ye=>ye.nzSelected)),(0,x.R)(this.destroy$)).subscribe(ye=>{this.isSelected=ye,this.cdr.markForCheck()})}ngOnChanges(z){const{nzOpen:f}=z;f&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(k),t.Y36(t.sBO),t.Y36(Ie),t.Y36(G.t4),t.Y36(w),t.Y36(Z.Is,8),t.Y36(se.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,l,5),t.Suo(me,Re,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfNzSubMenuComponent=ye),t.iGM(ye=t.CRH())&&(f.listOfNzMenuItemDirective=ye)}},viewQuery:function(z,f){if(1&z&&t.Gf(V.xu,7,t.SBq),2&z){let me;t.iGM(me=t.CRH())&&(f.cdkOverlayOrigin=me.first)}},hostVars:34,hostBindings:function(z,f){2&z&&t.ekj("ant-dropdown-menu-submenu",f.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",f.isMenuInsideDropDown&&f.nzDisabled)("ant-dropdown-menu-submenu-open",f.isMenuInsideDropDown&&f.nzOpen)("ant-dropdown-menu-submenu-selected",f.isMenuInsideDropDown&&f.isSelected)("ant-dropdown-menu-submenu-vertical",f.isMenuInsideDropDown&&"vertical"===f.mode)("ant-dropdown-menu-submenu-horizontal",f.isMenuInsideDropDown&&"horizontal"===f.mode)("ant-dropdown-menu-submenu-inline",f.isMenuInsideDropDown&&"inline"===f.mode)("ant-dropdown-menu-submenu-active",f.isMenuInsideDropDown&&f.isActive)("ant-menu-submenu",!f.isMenuInsideDropDown)("ant-menu-submenu-disabled",!f.isMenuInsideDropDown&&f.nzDisabled)("ant-menu-submenu-open",!f.isMenuInsideDropDown&&f.nzOpen)("ant-menu-submenu-selected",!f.isMenuInsideDropDown&&f.isSelected)("ant-menu-submenu-vertical",!f.isMenuInsideDropDown&&"vertical"===f.mode)("ant-menu-submenu-horizontal",!f.isMenuInsideDropDown&&"horizontal"===f.mode)("ant-menu-submenu-inline",!f.isMenuInsideDropDown&&"inline"===f.mode)("ant-menu-submenu-active",!f.isMenuInsideDropDown&&f.isActive)("ant-menu-submenu-rtl","rtl"===f.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[t._Bn([Ie]),t.TTD],attrs:Ce,ngContentSelectors:de,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(z,f){if(1&z&&(t.F$t(ge),t.TgZ(0,"div",0,1),t.NdJ("subMenuMouseState",function(ye){return f.setMouseEnterState(ye)})("toggleSubMenu",function(){return f.toggleSubMenu()}),t.YNc(2,pe,1,0,"ng-content",2),t.qZA(),t.YNc(3,Ae,1,6,"div",3),t.YNc(4,he,1,5,"ng-template",null,4,t.W1O),t.YNc(6,W,1,0,"ng-template",null,5,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("nzIcon",f.nzIcon)("nzTitle",f.nzTitle)("mode",f.mode)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("paddingLeft",f.nzPaddingLeft||f.inlinePaddingLeft),t.xp6(2),t.Q6J("ngIf",!f.nzTitle),t.xp6(1),t.Q6J("ngIf","inline"===f.mode)("ngIfElse",me)}},directives:[Ge,tt,nt,V.xu,$.O5,se.P,V.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzOpen",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzDisabled",void 0),l})();function He(l,ve){return l||ve}function Xe(l){return l||!1}let We=(()=>{class l{constructor(z,f,me,ye){this.nzMenuService=z,this.isMenuInsideDropDown=f,this.cdr=me,this.directionality=ye,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new t.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(z){this.nzInlineCollapsed=z,this.inlineCollapsed$.next(z)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(z=>z.nzOpen),this.listOfNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var z;(0,_.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.actualMode=f?"vertical":me,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.nzClick.emit(f),this.nzSelectable&&!f.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(me=>me.setSelectedState(me===f))}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,x.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(z){const{nzInlineCollapsed:f,nzInlineIndent:me,nzTheme:ye,nzMode:be}=z;f&&this.inlineCollapsed$.next(this.nzInlineCollapsed),me&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ye&&this.nzMenuService.setTheme(this.nzTheme),be&&(this.mode$.next(this.nzMode),!z.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Be=>Be.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(k),t.Y36(w),t.Y36(t.sBO),t.Y36(Z.Is,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,Re,5),t.Suo(me,C,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfNzMenuItemDirective=ye),t.iGM(ye=t.CRH())&&(f.listOfNzSubMenuComponent=ye)}},hostVars:34,hostBindings:function(z,f){2&z&&t.ekj("ant-dropdown-menu",f.isMenuInsideDropDown)("ant-dropdown-menu-root",f.isMenuInsideDropDown)("ant-dropdown-menu-light",f.isMenuInsideDropDown&&"light"===f.nzTheme)("ant-dropdown-menu-dark",f.isMenuInsideDropDown&&"dark"===f.nzTheme)("ant-dropdown-menu-vertical",f.isMenuInsideDropDown&&"vertical"===f.actualMode)("ant-dropdown-menu-horizontal",f.isMenuInsideDropDown&&"horizontal"===f.actualMode)("ant-dropdown-menu-inline",f.isMenuInsideDropDown&&"inline"===f.actualMode)("ant-dropdown-menu-inline-collapsed",f.isMenuInsideDropDown&&f.nzInlineCollapsed)("ant-menu",!f.isMenuInsideDropDown)("ant-menu-root",!f.isMenuInsideDropDown)("ant-menu-light",!f.isMenuInsideDropDown&&"light"===f.nzTheme)("ant-menu-dark",!f.isMenuInsideDropDown&&"dark"===f.nzTheme)("ant-menu-vertical",!f.isMenuInsideDropDown&&"vertical"===f.actualMode)("ant-menu-horizontal",!f.isMenuInsideDropDown&&"horizontal"===f.actualMode)("ant-menu-inline",!f.isMenuInsideDropDown&&"inline"===f.actualMode)("ant-menu-inline-collapsed",!f.isMenuInsideDropDown&&f.nzInlineCollapsed)("ant-menu-rtl","rtl"===f.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[t._Bn([{provide:fe,useClass:k},{provide:k,useFactory:He,deps:[[new t.tp0,new t.FiY,k],fe]},{provide:w,useFactory:Xe,deps:[[new t.tp0,new t.FiY,w]]}]),t.TTD]}),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,ie.yF)()],l.prototype,"nzSelectable",void 0),l})();function lt(l){return l||!1}let Qe=(()=>{class l{constructor(z,f,me){this.elementRef=z,this.renderer=f,this.isMenuInsideDropDown=me,this.renderer.addClass(z.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const z=this.titleElement.nativeElement.nextElementSibling;z&&this.renderer.addClass(z,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(w))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-menu-group",""]],viewQuery:function(z,f){if(1&z&&t.Gf(Ne,5),2&z){let me;t.iGM(me=t.CRH())&&(f.titleElement=me.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[t._Bn([{provide:w,useFactory:lt,deps:[[new t.tp0,new t.FiY,w]]}])],attrs:Pe,ngContentSelectors:Oe,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(z,f){1&z&&(t.F$t(ue),t.TgZ(0,"div",null,0),t.YNc(2,re,2,1,"ng-container",1),t.YNc(3,Ee,1,0,"ng-content",2),t.qZA(),t.Hsn(4)),2&z&&(t.ekj("ant-menu-item-group-title",!f.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",f.isMenuInsideDropDown),t.xp6(2),t.Q6J("nzStringTemplateOutlet",f.nzTitle),t.xp6(1),t.Q6J("ngIf",!f.nzTitle))},directives:[m.f,$.O5],encapsulation:2,changeDetection:0}),l})(),pt=(()=>{class l{constructor(z,f){this.elementRef=z,this.renderer=f,this.renderer.addClass(z.nativeElement,"ant-dropdown-menu-item-divider")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(z){return new(z||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[Z.vT,$.ez,G.ud,V.U8,O.PV,se.g,m.T]]}),l})()},3610:(ze,q,o)=>{o.d(q,{lU:()=>Z,$6:()=>P});var i=o(655),t=o(5e3),n=o(8076),s=o(9439),D=o(1721),_=o(404),c=o(4832),Y=o(226),d=o(2845),E=o(6950),T=o(9808),M=o(969);function x(G,se){if(1&G&&(t.ynx(0),t._uU(1),t.BQk()),2&G){const $=t.oxw(3);t.xp6(1),t.Oqu($.nzTitle)}}function te(G,se){if(1&G&&(t.TgZ(0,"div",10),t.YNc(1,x,2,1,"ng-container",9),t.qZA()),2&G){const $=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",$.nzTitle)}}function R(G,se){if(1&G&&(t.ynx(0),t._uU(1),t.BQk()),2&G){const $=t.oxw(2);t.xp6(1),t.Oqu($.nzContent)}}function ie(G,se){if(1&G&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,te,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,R,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&G){const $=t.oxw();t.ekj("ant-popover-rtl","rtl"===$.dir),t.Q6J("ngClass",$._classMap)("ngStyle",$.nzOverlayStyle)("@.disabled",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)("nzNoAnimation",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",$.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",$.nzContent)}}let Z=(()=>{class G extends _.Mg{constructor($,O,m,A,L,b){super($,O,m,A,L,b),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(V)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return G.\u0275fac=function($){return new($||G)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(c.P,9),t.Y36(s.jY))},G.\u0275dir=t.lG2({type:G,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function($,O){2&$&&t.ekj("ant-popover-open",O.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,i.gn)([(0,D.yF)()],G.prototype,"arrowPointAtCenter",void 0),(0,i.gn)([(0,s.oS)()],G.prototype,"nzPopoverBackdrop",void 0),G})(),V=(()=>{class G extends _.XK{constructor($,O,m){super($,O,m),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,_.pu)(this.nzTitle)&&(0,_.pu)(this.nzContent)}}return G.\u0275fac=function($){return new($||G)(t.Y36(t.sBO),t.Y36(Y.Is,8),t.Y36(c.P,9))},G.\u0275cmp=t.Xpm({type:G,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function($,O){1&$&&(t.YNc(0,ie,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(A){return O.onClickOutside(A)})("detach",function(){return O.hide()})("positionChange",function(A){return O.onPositionChange(A)})),2&$&&t.Q6J("cdkConnectedOverlayHasBackdrop",O.hasBackdrop)("cdkConnectedOverlayOrigin",O.origin)("cdkConnectedOverlayPositions",O._positions)("cdkConnectedOverlayOpen",O._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",O.nzArrowPointAtCenter)},directives:[d.pI,E.hQ,T.mk,T.PC,c.P,T.O5,M.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),G})(),P=(()=>{class G{}return G.\u0275fac=function($){return new($||G)},G.\u0275mod=t.oAB({type:G}),G.\u0275inj=t.cJS({imports:[[Y.vT,T.ez,d.U8,M.T,E.e4,c.g,_.cg]]}),G})()},8144:(ze,q,o)=>{o.d(q,{NU:()=>j,$1:()=>te,zf:()=>Z});var i=o(226),t=o(9808),n=o(5e3),s=o(655),D=o(8929),_=o(7625),c=o(9439),Y=o(1721);function d(V,P){}const E=function(V){return{$implicit:V}};function T(V,P){if(1&V&&(n.TgZ(0,"span",4),n.YNc(1,d,0,0,"ng-template",5),n.qZA()),2&V){const G=n.oxw(),se=G.last,$=G.index,O=n.oxw();n.Udp("margin-bottom","vertical"===O.nzDirection?se?null:O.spaceSize:null,"px")("margin-right","horizontal"===O.nzDirection?se?null:O.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",O.nzSplit)("ngTemplateOutletContext",n.VKq(6,E,$))}}function M(V,P){if(1&V&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,T,2,8,"span",3)),2&V){const G=P.$implicit,se=P.last,$=n.oxw();n.Udp("margin-bottom","vertical"===$.nzDirection?se?null:$.spaceSize:null,"px")("margin-right","horizontal"===$.nzDirection?se?null:$.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",G),n.xp6(1),n.Q6J("ngIf",$.nzSplit&&!se)}}const x=["*"];let te=(()=>{class V{constructor(){}}return V.\u0275fac=function(G){return new(G||V)},V.\u0275dir=n.lG2({type:V,selectors:[["","nzSpaceItem",""]]}),V})();const ie={small:8,middle:16,large:24};let j=(()=>{class V{constructor(G,se){this.nzConfigService=G,this.cdr=se,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=ie.small,this.destroy$=new D.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?ie[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return V.\u0275fac=function(G){return new(G||V)(n.Y36(c.jY),n.Y36(n.sBO))},V.\u0275cmp=n.Xpm({type:V,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(G,se,$){if(1&G&&n.Suo($,te,4,n.Rgc),2&G){let O;n.iGM(O=n.CRH())&&(se.items=O)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(G,se){2&G&&(n.Udp("flex-wrap",se.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===se.nzDirection)("ant-space-vertical","vertical"===se.nzDirection)("ant-space-align-start","start"===se.mergedAlign)("ant-space-align-end","end"===se.mergedAlign)("ant-space-align-center","center"===se.mergedAlign)("ant-space-align-baseline","baseline"===se.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:x,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(G,se){1&G&&(n.F$t(),n.Hsn(0),n.YNc(1,M,3,6,"ng-template",0)),2&G&&(n.xp6(1),n.Q6J("ngForOf",se.items))},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,Y.yF)()],V.prototype,"nzWrap",void 0),(0,s.gn)([(0,c.oS)()],V.prototype,"nzSize",void 0),V})(),Z=(()=>{class V{}return V.\u0275fac=function(G){return new(G||V)},V.\u0275mod=n.oAB({type:V}),V.\u0275inj=n.cJS({imports:[[i.vT,t.ez]]}),V})()},7525:(ze,q,o)=>{o.d(q,{W:()=>L,j:()=>b});var i=o(655),t=o(5e3),n=o(8929),s=o(591),D=o(839),_=o(8723),c=o(1177);class d{constructor(u){this.durationSelector=u}call(u,U){return U.subscribe(new E(u,this.durationSelector))}}class E extends c.Ds{constructor(u,U){super(u),this.durationSelector=U,this.hasValue=!1}_next(u){try{const U=this.durationSelector.call(this,u);U&&this._tryNext(u,U)}catch(U){this.destination.error(U)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(u,U){let B=this.durationSubscription;this.value=u,this.hasValue=!0,B&&(B.unsubscribe(),this.remove(B)),B=(0,c.ft)(U,new c.IY(this)),B&&!B.closed&&this.add(this.durationSubscription=B)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const u=this.value,U=this.durationSubscription;U&&(this.durationSubscription=void 0,U.unsubscribe(),this.remove(U)),this.value=void 0,this.hasValue=!1,super._next(u)}}}var T=o(1059),M=o(5778),x=o(7545),te=o(7625),R=o(9439),ie=o(1721),j=o(226),Z=o(9808),V=o(7144);function P(J,u){1&J&&(t.TgZ(0,"span",3),t._UZ(1,"i",4),t._UZ(2,"i",4),t._UZ(3,"i",4),t._UZ(4,"i",4),t.qZA())}function G(J,u){}function se(J,u){if(1&J&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&J){const U=t.oxw(2);t.xp6(1),t.Oqu(U.nzTip)}}function $(J,u){if(1&J&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.YNc(2,G,0,0,"ng-template",6),t.YNc(3,se,2,1,"div",7),t.qZA(),t.qZA()),2&J){const U=t.oxw(),B=t.MAs(1);t.xp6(1),t.ekj("ant-spin-rtl","rtl"===U.dir)("ant-spin-spinning",U.isLoading)("ant-spin-lg","large"===U.nzSize)("ant-spin-sm","small"===U.nzSize)("ant-spin-show-text",U.nzTip),t.xp6(1),t.Q6J("ngTemplateOutlet",U.nzIndicator||B),t.xp6(1),t.Q6J("ngIf",U.nzTip)}}function O(J,u){if(1&J&&(t.TgZ(0,"div",9),t.Hsn(1),t.qZA()),2&J){const U=t.oxw();t.ekj("ant-spin-blur",U.isLoading)}}const m=["*"],A="spin";let L=(()=>{class J{constructor(U,B,X){this.nzConfigService=U,this.cdr=B,this.directionality=X,this._nzModuleName=A,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new D.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var U;this.delay$.pipe((0,T.O)(this.nzDelay),(0,M.x)(),(0,x.w)(X=>0===X?this.spinning$:this.spinning$.pipe(function Y(J){return u=>u.lift(new d(J))}(_e=>(0,_.H)(_e?X:0)))),(0,te.R)(this.destroy$)).subscribe(X=>{this.isLoading=X,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(A).pipe((0,te.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(U=this.directionality.change)||void 0===U||U.pipe((0,te.R)(this.destroy$)).subscribe(X=>{this.dir=X,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(U){const{nzSpinning:B,nzDelay:X}=U;B&&this.spinning$.next(this.nzSpinning),X&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(U){return new(U||J)(t.Y36(R.jY),t.Y36(t.sBO),t.Y36(j.Is,8))},J.\u0275cmp=t.Xpm({type:J,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(U,B){2&U&&t.ekj("ant-spin-nested-loading",!B.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[t.TTD],ngContentSelectors:m,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(U,B){1&U&&(t.F$t(),t.YNc(0,P,5,0,"ng-template",null,0,t.W1O),t.YNc(2,$,4,12,"div",1),t.YNc(3,O,2,2,"div",2)),2&U&&(t.xp6(2),t.Q6J("ngIf",B.isLoading),t.xp6(1),t.Q6J("ngIf",!B.nzSimple))},directives:[Z.O5,Z.tP],encapsulation:2}),(0,i.gn)([(0,R.oS)()],J.prototype,"nzIndicator",void 0),(0,i.gn)([(0,ie.Rn)()],J.prototype,"nzDelay",void 0),(0,i.gn)([(0,ie.yF)()],J.prototype,"nzSimple",void 0),(0,i.gn)([(0,ie.yF)()],J.prototype,"nzSpinning",void 0),J})(),b=(()=>{class J{}return J.\u0275fac=function(U){return new(U||J)},J.\u0275mod=t.oAB({type:J}),J.\u0275inj=t.cJS({imports:[[j.vT,Z.ez,V.Q8]]}),J})()},8481:(ze,q,o)=>{o.d(q,{j:()=>x,X:()=>te});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),D=o(8693),_=o(1721),c=o(226),Y=o(9808),d=o(647),E=o(3075);function T(R,ie){if(1&R){const j=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(V){return t.CHM(j),t.oxw().closeTag(V)}),t.qZA()}}const M=["*"];let x=(()=>{class R{constructor(j,Z,V,P){this.cdr=j,this.renderer=Z,this.elementRef=V,this.directionality=P,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(j){this.nzOnClose.emit(j),j.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const j=this.elementRef.nativeElement,Z=new RegExp(`(ant-tag-(?:${[...D.uf,...D.Bh].join("|")}))`,"g"),V=j.classList.toString(),P=[];let G=Z.exec(V);for(;null!==G;)P.push(G[1]),G=Z.exec(V);j.classList.remove(...P)}setPresetColor(){const j=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,D.o2)(this.nzColor)||(0,D.M8)(this.nzColor)),this.isPresetColor&&j.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var j;null===(j=this.directionality.change)||void 0===j||j.pipe((0,s.R)(this.destroy$)).subscribe(Z=>{this.dir=Z,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(j){const{nzColor:Z}=j;Z&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(j){return new(j||R)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c.Is,8))},R.\u0275cmp=t.Xpm({type:R,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(j,Z){1&j&&t.NdJ("click",function(){return Z.updateCheckedStatus()}),2&j&&(t.Udp("background-color",Z.isPresetColor?"":Z.nzColor),t.ekj("ant-tag-has-color",Z.nzColor&&!Z.isPresetColor)("ant-tag-checkable","checkable"===Z.nzMode)("ant-tag-checkable-checked",Z.nzChecked)("ant-tag-rtl","rtl"===Z.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:M,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(j,Z){1&j&&(t.F$t(),t.Hsn(0),t.YNc(1,T,1,0,"i",0)),2&j&&(t.xp6(1),t.Q6J("ngIf","closeable"===Z.nzMode))},directives:[Y.O5,d.Ls],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.yF)()],R.prototype,"nzChecked",void 0),R})(),te=(()=>{class R{}return R.\u0275fac=function(j){return new(j||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[c.vT,Y.ez,E.u5,d.PV]]}),R})()}}]);