"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{3193:(ve,X,o)=>{o.d(X,{H:()=>Me});var i=o(6654),t=o(5e3),n=o(9808),s=o(325),I=o(8481),_=o(3610),c=o(4850),W=o(712),u=o(7484),D=o(647),T=o(3098),M=o(1894),x=o(8144),te=o(6949);function b(ie,Ce){if(1&ie&&(t._UZ(0,"i",11),t._uU(1)),2&ie){const pe=t.oxw().ngIf;t.xp6(1),t.hij(" ",pe.officialName," ")}}function re(ie,Ce){if(1&ie&&(t.TgZ(0,"nz-tag"),t._uU(1),t.qZA()),2&ie){const pe=Ce.$implicit;t.xp6(1),t.Oqu(pe)}}function j(ie,Ce){if(1&ie&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,re,2,1,"nz-tag",13),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",pe.geneAliases)}}function V(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/flags"),t.xp6(3),t.hij(" Flags (",pe.flags.totalCount,") ")}}function Y(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",pe.revisions.totalCount,") ")}}function L(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/comments"),t.xp6(3),t.hij(" Comments (",pe.comments.totalCount,") ")}}function B(ie,Ce){if(1&ie&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,b,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,j,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,V,4,2,"a",10),t.YNc(12,Y,4,2,"a",10),t.YNc(13,L,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&ie){const pe=Ce.ngIf,Se=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",Se),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",pe.geneAliases.length>0),t.xp6(2),t.hij(" ",pe.variants.totalCount," ")}}let se=(()=>{class ie{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:pe})=>pe.gene))}}return ie.\u0275fac=function(pe){return new(pe||ie)(t.Y36(W.rJ8))},ie.\u0275cmp=t.Xpm({type:ie,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,Se){1&pe&&(t.TgZ(0,"div",0),t.YNc(1,B,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&pe&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Se.gene$)))},directives:[n.O5,u.bd,D.Ls,T.R7,T.uj,n.sg,I.j,M.SK,M.t3,x.NU,x.$1,s.yS],pipes:[te.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ie})();var G=o(4557);function S(ie,Ce){}function m(ie,Ce){if(1&ie&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,S,0,0,"ng-template",6),t.qZA(),t.BQk()),2&ie){const pe=t.oxw(),Se=t.MAs(2);t.xp6(1),t.Q6J("routerLink",pe.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Se)}}function A(ie,Ce){}function P(ie,Ce){if(1&ie){const pe=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(K){return t.CHM(pe),t.oxw(2).itemClosed(K)}),t.YNc(1,A,0,0,"ng-template",6),t.qZA()}if(2&ie){t.oxw();const pe=t.MAs(2),Se=t.oxw(),K=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",Se.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzMode",Se.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",K)}}function $(ie,Ce){if(1&ie&&t._UZ(0,"cvc-gene-popover",10),2&ie){const pe=t.oxw(2);t.Q6J("geneId",pe.gene.id)}}function J(ie,Ce){if(1&ie&&(t.YNc(0,P,2,4,"nz-tag",7),t.YNc(1,$,1,1,"ng-template",null,8,t.W1O)),2&ie){const pe=t.oxw(),Se=t.MAs(4);t.Q6J("ngIf",pe.enablePopover)("ngIfElse",Se)}}function d(ie,Ce){}function Q(ie,Ce){if(1&ie){const pe=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(K){return t.CHM(pe),t.oxw().itemClosed(K)}),t.YNc(1,d,0,0,"ng-template",6),t.qZA()}if(2&ie){const pe=t.oxw(),Se=t.MAs(8);t.Q6J("nzMode",pe.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",Se)}}function U(ie,Ce){}function q(ie,Ce){if(1&ie&&t.YNc(0,U,0,0,"ng-template",6),2&ie){t.oxw();const pe=t.MAs(2);t.Q6J("ngTemplateOutlet",pe)}}function ze(ie,Ce){if(1&ie&&(t.ynx(0),t._uU(1),t.ALo(2,"truncate"),t.BQk()),2&ie){const pe=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,pe.gene.name,12)," ")}}function Te(ie,Ce){if(1&ie&&t._uU(0),2&ie){const pe=t.oxw(2);t.hij(" ",pe.gene.name," ")}}function Oe(ie,Ce){if(1&ie&&(t._UZ(0,"i",12),t.YNc(1,ze,3,4,"ng-container",0),t.YNc(2,Te,1,1,"ng-template",null,13,t.W1O)),2&ie){const pe=t.MAs(3),Se=t.oxw();t.xp6(1),t.Q6J("ngIf",Se.truncateLongName)("ngIfElse",pe)}}let Me=(()=>{class ie extends i.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ie.\u0275fac=function(pe){return new(pe||ie)},ie.\u0275cmp=t.Xpm({type:ie,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(pe,Se){if(1&pe&&(t.YNc(0,m,3,2,"ng-container",0),t.YNc(1,J,3,2,"ng-template",null,1,t.W1O),t.YNc(3,Q,2,2,"ng-template",null,2,t.W1O),t.YNc(5,q,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Oe,4,2,"ng-template",null,4,t.W1O)),2&pe){const K=t.MAs(6);t.Q6J("ngIf",Se.linked)("ngIfElse",K)}},directives:[n.O5,s.yS,n.tP,I.j,_.lU,se,D.Ls],pipes:[G.W],styles:[""],changeDetection:0}),ie})()},3309:(ve,X,o)=>{o.d(X,{U:()=>te});var i=o(9808),t=o(325),n=o(8481),s=o(647),I=o(3610),_=o(7484),c=o(1894),W=o(3098),u=o(8144),D=o(6949),T=o(5e3);let M=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=T.oAB({type:b}),b.\u0275inj=T.cJS({imports:[[i.ez,t.Bz,D.WG,_.vh,c.Jb,W.q6,n.X,s.PV,u.zf]]}),b})();var x=o(9444);let te=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=T.oAB({type:b}),b.\u0275inj=T.cJS({imports:[[i.ez,t.Bz,n.X,I.$6,s.PV,x.s,M]]}),b})()},1912:(ve,X,o)=>{o.d(X,{s:()=>te});var i=o(5e3),t=o(6042),n=o(2643),s=o(2683),I=o(3640),c=o(2160),W=o(3762),u=o(647);let D=(()=>{class b{constructor(j){this.cookies=j,this.location=function _(b){return encodeURIComponent(b).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return b.\u0275fac=function(j){return new(j||b)(i.Y36(c.N))},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(j,V){1&j&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&j&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken))},directives:[W.n_,W.AA,t.ix,n.dQ,s.w,u.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),b})();function T(b,re){1&b&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function M(b,re){1&b&&i._uU(0," Sign In / Sign Up\n")}function x(b,re){if(1&b){const j=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(j),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let te=(()=>{class b{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return b.\u0275fac=function(j){return new(j||b)},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(j,V){if(1&j&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return V.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In / Sign Up"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(L){return V.authVisible=L})("nzOnCancel",function(){return V.handleCancel()}),i.YNc(4,T,4,0,"ng-container",2),i.qZA(),i.YNc(5,M,1,0,"ng-template",null,3,i.W1O),i.YNc(7,x,2,0,"ng-template",null,4,i.W1O)),2&j){const Y=i.MAs(6),L=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",V.authVisible)("nzTitle",Y)("nzFooter",L)}},directives:[t.ix,n.dQ,s.w,I.du,I.Hf,D],styles:["[_nghost-%COMP%]{display:inline-block}"]}),b})()},1844:(ve,X,o)=>{o.d(X,{B:()=>W});var i=o(9808),t=o(6042),n=o(3640),s=o(3762),I=o(647),_=o(5e3);let c=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=_.oAB({type:u}),u.\u0275inj=_.cJS({imports:[[i.ez,I.PV,s.Ph,t.sL]]}),u})(),W=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=_.oAB({type:u}),u.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Qp,c]]}),u})()},7881:(ve,X,o)=>{o.d(X,{L:()=>_});var i=o(5e3),t=o(9808),n=o(6699);function s(c,W){if(1&c&&i._UZ(0,"nz-avatar",2),2&c){const u=i.oxw();i.Q6J("nzSrc",u.user.profileImagePath)("nzShape",u.shape?u.shape:"circle")("nzSize",u.size)}}function I(c,W){if(1&c&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&c){const u=i.oxw();i.Q6J("nzSize",u.size)("nzText",i.lcZ(1,2,u.user.displayName.charAt(0)))}}let _=(()=>{class c{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(u,D){if(1&u&&(i.YNc(0,s,1,3,"nz-avatar",0),i.YNc(1,I,2,4,"ng-template",null,1,i.W1O)),2&u){const T=i.MAs(2);i.Q6J("ngIf",D.user.profileImagePath)("ngIfElse",T)}},directives:[t.O5,n.Dz],pipes:[t.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),c})()},5473:(ve,X,o)=>{o.d(X,{H:()=>s});var i=o(9808),t=o(6699),n=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(c){return new(c||I)},I.\u0275mod=n.oAB({type:I}),I.\u0275inj=n.cJS({imports:[[i.ez,t.Rt]]}),I})()},8926:(ve,X,o)=>{o.d(X,{A:()=>n});var i=o(5e3),t=o(2313);let n=(()=>{class s{constructor(_){this.sanitizer=_}transform(_,c){if(!c||""==c)return _;const W=new RegExp(c,"gi"),u=_.match(W);if(!u)return _;let D=_.replace(W,`<span class='typeahead-match'>${u[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(D)}}return s.\u0275fac=function(_){return new(_||s)(i.Y36(t.H7,16))},s.\u0275pipe=i.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},9444:(ve,X,o)=>{o.d(X,{s:()=>s});var i=o(9808),t=o(7742),n=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(c){return new(c||I)},I.\u0275mod=n.oAB({type:I}),I.\u0275inj=n.cJS({providers:[t.l],imports:[[i.ez]]}),I})()},7742:(ve,X,o)=>{o.d(X,{l:()=>n});var i=o(6530),t=o(5e3);let n=(()=>{class s{transform(_){return _?(0,i.c)(_):""}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275pipe=t.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ve,X,o)=>{o.d(X,{W:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){}transform(I,_=25){if(I.length>_){let W=I.slice(0,_);var c=W.lastIndexOf(" ");return W.slice(0,c)+"\u2026"}return I}}return n.\u0275fac=function(I){return new(I||n)},n.\u0275pipe=i.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ve,X,o)=>{o.d(X,{a:()=>u});var i=o(4850),t=o(5154),n=o(373),s=o(1059),I=o(712),_=o(5e3),c=o(520);const W={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let u=(()=>{class D{constructor(M,x){function te(L){return!(!L||L.role!==I.i44.Admin)}function b(L){return!(!L||L.role!==I.i44.Editor&&L.role!==I.i44.Admin)}function re(L){return!(!L||L.role!==I.i44.Curator)}function j(L){return!(!L||L.role!==I.i44.Curator&&L.role!==I.i44.Editor&&L.role!==I.i44.Admin)}function V(L){var B,se;return!(!L||L.role!==I.i44.Editor&&L.role!==I.i44.Admin||!L.mostRecentConflictOfInterestStatement||(null===(B=L.mostRecentConflictOfInterestStatement)||void 0===B?void 0:B.coiStatus)!=I.Mgx.Conflict&&(null===(se=L.mostRecentConflictOfInterestStatement)||void 0===se?void 0:se.coiStatus)!=I.Mgx.Valid)}function Y(L){if(L.mostRecentOrganizationId)return L.organizations.find(B=>B.id===L.mostRecentOrganizationId)}this.viewerBaseGQL=M,this.http=x,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(L=>({data:L.data,loading:L.loading,networkStatus:L.networkStatus})),(0,t.d)(1)),this.isLoading$=this.data$.pipe((0,n.j)("loading"),(0,s.O)(!0)),this.viewer$=this.data$.pipe((0,n.j)("data","viewer"),(0,i.U)(L=>Object.assign(Object.assign({},L),{signedIn:null!==L,signedOut:null===L,canCurate:j(L),canModerate:V(L),isAdmin:te(L),isEditor:b(L),isCurator:re(L),organizations:null===L?[]:L.organizations,mostRecentOrg:null===L?void 0:Y(L),invalidCoi:b(L)&&(!L.mostRecentConflictOfInterestStatement||L.mostRecentConflictOfInterestStatement.coiStatus===I.Mgx.Expired||L.mostRecentConflictOfInterestStatement.coiStatus===I.Mgx.Missing)})),(0,s.O)(W),(0,t.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(L=>L.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(L=>L.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(L=>te(L))),this.isEditor$=this.viewer$.pipe((0,i.U)(L=>b(L))),this.isCurator$=this.viewer$.pipe((0,i.U)(L=>re(L))),this.canCurate$=this.viewer$.pipe((0,i.U)(L=>j(L))),this.canModerate$=this.viewer$.pipe((0,i.U)(L=>V(L)))}signOut(){this.http.get("/api/sign_out").subscribe(M=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return D.\u0275fac=function(M){return new(M||D)(_.LFG(I.Tt7),_.LFG(c.eN))},D.\u0275prov=_.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D})()},6654:(ve,X,o)=>{o.d(X,{a:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(I){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(I){return new(I||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(I,_){},encapsulation:2}),n})()},915:(ve,X,o)=>{function i(t){let n;if("NA"===t)n=["N/A"];else if("SENSITIVITYRESPONSE"===t)n=["Sensitivity","/","Response"];else{n=t.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}o.d(X,{E:()=>i})},6530:(ve,X,o)=>{function i(t){switch(t){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return t}}o.d(X,{c:()=>i})},6123:(ve,X,o)=>{o.d(X,{U:()=>I});var i=o(8929),t=o(591),n=o(7625),s=o(537);class I{constructor(c){this.networkErrorService=c}mutate(c,W,u,D){let T=new i.xQ,M={isSubmitting$:new t.X(!1),submitSuccess$:new t.X(!1),submitError$:new t.X([]),cleanup:()=>{T.next(),T.complete()}};return M.isSubmitting$.next(!0),c.mutate(W,u).pipe((0,n.R)(T),(0,s.x)(()=>{M.isSubmitting$.next(!1)})).subscribe({next:x=>{x.data&&D&&D(x.data)},error:x=>{x.graphQLErrors.length>0?M.submitError$.next(x.graphQLErrors.map(te=>te.message)):x.networkError&&this.networkErrorService.networkError$.next(x.networkError),M.cleanup()},complete:()=>{M.submitError$.next([]),M.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),M.cleanup()}}),M}}},9397:(ve,X,o)=>{o.d(X,{l:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(I){this.host=I,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(I){return new(I||n)(i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(ve,X,o)=>{o.d(X,{Y:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},9180:(ve,X,o)=>{o.d(X,{Z:()=>n});var i=o(5e3);const t=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(_,c){1&_&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ve,X,o)=>{o.d(X,{R:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},822:(ve,X,o)=>{o.d(X,{V:()=>W});var i=o(5e3),t=o(9808),n=o(2359);function s(u,D){if(1&u&&i._UZ(0,"nz-alert",4),2&u){const T=i.oxw();i.Q6J("nzDescription",T.errors[0])}}function I(u,D){if(1&u&&i._UZ(0,"nz-alert",5),2&u){i.oxw();const T=i.MAs(3);i.Q6J("nzDescription",T)}}function _(u,D){if(1&u&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&u){const T=D.$implicit;i.xp6(1),i.Oqu(T)}}function c(u,D){if(1&u&&(i.TgZ(0,"ul",6),i.YNc(1,_,2,1,"li",7),i.qZA()),2&u){const T=i.oxw();i.xp6(1),i.Q6J("ngForOf",T.errors)}}let W=(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(T){return new(T||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(T,M){1&T&&(i.YNc(0,s,1,1,"nz-alert",0),i.YNc(1,I,1,1,"nz-alert",1),i.YNc(2,c,2,1,"ng-template",2,3,i.W1O)),2&T&&(i.Q6J("ngIf",1===M.errors.length),i.xp6(1),i.Q6J("ngIf",M.errors.length>1))},directives:[t.O5,n.r,t.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),u})()},7008:(ve,X,o)=>{o.d(X,{B:()=>s});var i=o(9808),t=o(2359),n=o(5e3);let s=(()=>{class I{}return I.\u0275fac=function(c){return new(c||I)},I.\u0275mod=n.oAB({type:I}),I.\u0275inj=n.cJS({imports:[[i.ez,t.L]]}),I})()},6789:(ve,X,o)=>{o.d(X,{_:()=>M});var i=o(9808),t=o(7484),n=o(5109),s=o(5482),I=o(6949),_=o(9552),c=o(8776),W=o(647),u=o(404),D=o(5e3);let T=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=D.oAB({type:x}),x.\u0275inj=D.cJS({imports:[[i.ez,I.WG,c.X0,_.j,s.cD,W.PV,u.cg,n.s]]}),x})(),M=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=D.oAB({type:x}),x.\u0275inj=D.cJS({imports:[[i.ez,I.WG,c.X0,t.vh,_.j,s.cD,W.PV,u.cg,T,n.s]]}),x})()},1825:(ve,X,o)=>{o.d(X,{A:()=>W});var i=o(9808),t=o(6042),n=o(6699),s=o(3677),I=o(8144),_=o(6949),c=o(5e3);let W=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=c.oAB({type:u}),u.\u0275inj=c.cJS({imports:[[i.ez,_.WG,t.sL,n.Rt,s.b1,I.zf]]}),u})()},1793:(ve,X,o)=>{o.d(X,{m:()=>c});var i=o(5e3),t=o(8929),n=o(5254),s=o(2198),I=o(4850),_=o(7625);let c=(()=>{class W{constructor(D){this.el=D,this.domChange=new i.vpe,this.destroy$=new t.xQ,this.changes=new MutationObserver(T=>{this.mutation$=(0,n.D)(T),this.disabledChange$=this.mutation$.pipe((0,s.h)(M=>"disabled"===M.attributeName),(0,I.U)(M=>({type:"disabled",change:M.target.disabled}))),this.disabledChange$.pipe((0,_.R)(this.destroy$)).subscribe(M=>{this.domChange.emit(M)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return W.\u0275fac=function(D){return new(D||W)(i.Y36(i.SBq))},W.\u0275dir=i.lG2({type:W,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),W})()},7905:(ve,X,o)=>{o.d(X,{yQ:()=>s,nT:()=>_});var i=o(915),t=o(712),n=o(444),s=(()=>{return(c=s||(s={})).EVIDENCE="Evidence",c.ASSERTION="Assertion",s;var c})();class _{constructor(W){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(t.uBv).map(u=>u):(0,n.o6)(t.kqt).map(u=>u),this.getSignificanceOptions=u=>{const D=this.validStates.get(u);return(null==D?void 0:D.clinicalSignificance)||[]},this.isValidSignificanceOption=(u,D)=>{const T=this.validStates.get(u);return!T||T.clinicalSignificance.includes(D)},this.getDirectionOptions=u=>{const D=this.validStates.get(u);return(null==D?void 0:D.entityDirection)||[]},this.isValidDirectionOption=(u,D)=>{const T=this.validStates.get(u);return!T||T.entityDirection.includes(D)},this.requiresDrug=u=>{const D=this.validStates.get(u);return void 0===D||D.requiresDrug},this.requiresDisease=u=>{const D=this.validStates.get(u);return void 0===D||D.requiresDisease},this.requiresAcmgCodes=u=>{const D=this.validStates.get(u);return void 0===D||D.requiresAcmgCodes},this.requiresAmpLevel=u=>{const D=this.validStates.get(u);return void 0===D||D.requiresAmpLevel},this.allowsFdaApproval=u=>{const D=this.validStates.get(u);return void 0===D||D.allowsFdaApproval},this.getOptionsFromEnums=u=>0===u.length?[]:u.map(D=>({value:D,label:(0,i.E)(D)})),this.entityName=W,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},6064:(ve,X,o)=>{o.d(X,{_:()=>n});var i=o(712),t=o(7905);class n extends t.nT{constructor(){super(t.yQ.EVIDENCE),this.validStates.set(i.kqt.Predictive,{entityType:i.kqt.Predictive,clinicalSignificance:[i._Aq.Sensitivityresponse,i._Aq.Resistance,i._Aq.AdverseResponse,i._Aq.ReducedSensitivity,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Diagnostic,{entityType:i.kqt.Diagnostic,clinicalSignificance:[i._Aq.Positive,i._Aq.Negative],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Prognostic,{entityType:i.kqt.Prognostic,clinicalSignificance:[i._Aq.BetterOutcome,i._Aq.PoorOutcome,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Oncogenic,{entityType:i.kqt.Oncogenic,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Predisposing,{entityType:i.kqt.Predisposing,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Functional,{entityType:i.kqt.Functional,clinicalSignificance:[i._Aq.GainOfFunction,i._Aq.LossOfFunction,i._Aq.UnalteredFunction,i._Aq.Neomorphic,i._Aq.DominantNegative,i._Aq.Unknown],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ve,X,o)=>{o.d(X,{E:()=>te});var i=o(9808),t=o(3075),n=o(325),s=o(8776),I=o(304),_=o(6042),c=o(5e3),W=o(2643),u=o(2683);function D(b,re){if(1&b){const j=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(j),c.oxw().callOnClick()}),c._uU(1," Cancel\n"),c.qZA()}}function T(b,re){if(1&b&&(c.TgZ(0,"button",3),c._uU(1," Cancel "),c.qZA()),2&b){const j=c.oxw();c.Q6J("routerLink",j.redirectPath)}}const x={name:"cancel-button",component:(()=>{class b extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var j,V,Y,L;(null===(j=this.field.templateOptions)||void 0===j?void 0:j.onClick)?this.callOnClick=null===(V=this.field.templateOptions)||void 0===V?void 0:V.onClick:(null===(Y=this.field.templateOptions)||void 0===Y?void 0:Y.redirectPath)&&(this.redirectPath=null===(L=this.field.templateOptions)||void 0===L?void 0:L.redirectPath)}}return b.\u0275fac=function(){let re;return function(V){return(re||(re=c.n5z(b)))(V||b)}}(),b.\u0275cmp=c.Xpm({type:b,selectors:[["cvc-cancel-button"]],features:[c.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(j,V){if(1&j&&(c.YNc(0,D,2,0,"button",0),c.YNc(1,T,2,1,"ng-template",null,1,c.W1O)),2&j){const Y=c.MAs(2);c.Q6J("ngIf",V.callOnClick)("ngIfElse",Y)}},directives:[i.O5,_.ix,W.dQ,u.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),b})()};let te=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=c.oAB({type:b}),b.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.sL,n.Bz,I.F,s.X0.forChild({types:[x]})]]}),b})()},4623:(ve,X,o)=>{o.d(X,{K:()=>D});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),I=o(3075);const c={name:"comment-textarea",component:(()=>{class T extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(x,te)=>{var b;return`Comments must be at least ${null===(b=te.templateOptions)||void 0===b?void 0:b.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return T.\u0275fac=function(){let M;return function(te){return(M||(M=n.n5z(T)))(te||T)}}(),T.\u0275cmp=n.Xpm({type:T,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(x,te){1&x&&n._UZ(0,"textarea",0),2&x&&n.Q6J("formControl",te.formControl)("formlyAttributes",te.field)},directives:[s.Zp,I.Fj,I.JJ,I.oH,t.VQ],styles:[""],changeDetection:0}),T})(),wrappers:["form-field"]};var W=o(4546),u=o(9139);let D=(()=>{class T{}return T.\u0275fac=function(x){return new(x||T)},T.\u0275mod=n.oAB({type:T}),T.\u0275inj=n.cJS({imports:[[i.ez,I.UX,t.X0.forChild({types:[c]}),u.u,W.U5,s.o7]]}),T})()},1605:(ve,X,o)=>{o.d(X,{e:()=>Ge});var i=o(9808),t=o(3075),n=o(8776),s=o(3793),I=o(304),_=o(8054),c=o(5e3),W=o(1894),u=o(4546);let D=(()=>{class oe{constructor(){console.log("FormCardDirective constructed.")}}return oe.\u0275fac=function(F){return new(F||oe)},oe.\u0275dir=c.lG2({type:oe,selectors:[["",8,"cvc-form-card-control"]]}),oe})();var T=o(7484),M=o(404);function x(oe,Ie){1&oe&&c._UZ(0,"i",7)}function te(oe,Ie){if(1&oe&&(c.TgZ(0,"nz-form-label",5),c._uU(1),c.YNc(2,x,1,0,"i",6),c.qZA()),2&oe){const F=c.oxw();c.Q6J("nzRequired",F.to.required&&!0!==F.to.hideRequiredMarker)("nzFor",F.id),c.xp6(1),c.hij(" ",F.to.label," "),c.xp6(1),c.Q6J("ngIf",F.to.helpText)}}function b(oe,Ie){if(1&oe&&c._UZ(0,"formly-validation-message",9),2&oe){const F=c.oxw(2);c.Q6J("field",F.field)}}function re(oe,Ie){if(1&oe&&c.YNc(0,b,1,1,"formly-validation-message",8),2&oe){const F=c.oxw();c.Q6J("ngIf",F.showError)}}let j=(()=>{class oe extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return oe.\u0275fac=function(F){return new(F||oe)},oe.\u0275cmp=c.Xpm({type:oe,selectors:[["form-card-wrapper"]],features:[c.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(F,ce){if(1&F&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",0),c.TgZ(2,"nz-card",1),c.GkF(3,null,2),c.qZA(),c.YNc(5,te,3,4,"ng-template",null,3,c.W1O),c.YNc(7,re,1,1,"ng-template",null,4,c.W1O),c.qZA(),c.qZA()),2&F){const w=c.MAs(6),_e=c.MAs(8);c.xp6(1),c.Q6J("nzValidateStatus",ce.errorState)("nzErrorTip",_e),c.xp6(1),c.Q6J("nzTitle",w)("nzExtra",_e)}},directives:[W.SK,u.Nx,W.t3,u.Fd,D,T.bd,u.iK,i.O5,M.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),oe})();var V=o(647),Y=o(5109);const L={wrappers:[{name:"form-card",component:j}]};let B=(()=>{class oe{}return oe.\u0275fac=function(F){return new(F||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.UX,u.U5,T.vh,V.PV,M.cg,n.X0.forChild(L),Y.s]]}),oe})();var se=o(8929),G=o(7625),S=o(373),m=o(4850),A=o(712),P=o(9397),$=o(6949),J=o(8144),d=o(3618),Q=o(3193),U=o(8926);function q(oe,Ie){if(1&oe&&(c._UZ(0,"span",10),c.ALo(1,"highlightTypeahead")),2&oe){const F=c.oxw().$implicit,ce=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,F.label,ce.to.searchString),c.oJD)}}function ze(oe,Ie){if(1&oe&&(c._UZ(0,"span",12),c.ALo(1,"highlightTypeahead")),2&oe){const F=c.oxw(2).$implicit,ce=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,F.gene.geneAliases.join(", "),ce.to.searchString),c.oJD)}}function Te(oe,Ie){1&oe&&(c.ynx(0),c.YNc(1,ze,2,4,"span",11),c.BQk())}function Oe(oe,Ie){if(1&oe&&(c.TgZ(0,"nz-option",7),c.TgZ(1,"nz-space"),c.YNc(2,q,2,4,"span",8),c.YNc(3,Te,2,0,"ng-container",9),c.qZA(),c.qZA()),2&oe){const F=Ie.$implicit;c.Q6J("nzLabel",F.tooltip)("nzValue",F.gene),c.xp6(3),c.Q6J("ngIf",F.gene.geneAliases.length>0)}}function Me(oe,Ie){if(1&oe&&(c.ynx(0),c.YNc(1,Oe,4,3,"nz-option",6),c.BQk()),2&oe){const F=Ie.ngrxLet;c.xp6(1),c.Q6J("ngForOf",F)}}function ie(oe,Ie){1&oe&&c._uU(0," No gene found in CIViC that matches the string provided. ")}function Ce(oe,Ie){if(1&oe){const F=c.EpF();c.ynx(0),c.TgZ(1,"nz-select",2,3),c.NdJ("nzOnSearch",function(w){return c.CHM(F),c.oxw().to.onSearch(w)}),c.YNc(3,Me,2,1,"ng-container",4),c.qZA(),c.YNc(4,ie,1,0,"ng-template",null,5,c.W1O),c.BQk()}if(2&oe){const F=c.MAs(5),ce=c.oxw();c.xp6(1),c.Q6J("formControl",ce.formControl)("formlyAttributes",ce.field)("nzPlaceHolder",ce.to.placeholder?ce.to.placeholder:null)("nzNotFoundContent",F)("nzShowArrow",ce.to.showArrow)("nzFilterOption",ce.to.filterOption),c.xp6(2),c.Q6J("ngrxLet",ce.genes$)}}function pe(oe,Ie){if(1&oe&&c._UZ(0,"cvc-gene-tag",13),2&oe){const F=c.oxw();c.Q6J("gene",F.formControl.value)}}const K={name:"cvc-gene-input",component:(()=>{class oe extends n.fS{constructor(F){super(),this.geneTypeaheadQuery=F,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}},this.destroy$=new se.xQ}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,G.R)(this.destroy$),(0,S.j)("data","geneTypeahead"),(0,m.U)(F=>F.map(ce=>{let w=ce.geneAliases.length>0?`Aliases: ${ce.geneAliases.join(", ")}`:"";return{value:ce.id,tooltip:`${ce.name} (${ce.entrezId}) ${w}`,label:`${ce.name} (${ce.entrezId})`,gene:ce}})))}ngAfterViewInit(){this.to.onSearch=F=>{F.length<this.to.minLengthSearch||(this.to.searchString=F,this.queryRef.refetch({entrezSymbol:F}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return oe.\u0275fac=function(F){return new(F||oe)(c.Y36(A.Q4m))},oe.\u0275cmp=c.Xpm({type:oe,selectors:[["cvc-gene-input"]],features:[c.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(F,ce){if(1&F&&(c.YNc(0,Ce,6,7,"ng-container",0),c.YNc(1,pe,1,1,"ng-template",null,1,c.W1O)),2&F){const w=c.MAs(2);c.Q6J("ngIf",!(null!=ce.formControl.value&&ce.formControl.value.id))("ngIfElse",w)}},directives:[i.O5,_.Vq,P.l,t.JJ,t.oH,n.VQ,$.eJ,i.sg,_.Ip,J.NU,J.$1,d.ZU,Q.H],pipes:[U.A],styles:[""]}),oe})()};var fe=o(3309),k=o(9444),ge=o(8616);let de=(()=>{class oe{}return oe.\u0275fac=function(F){return new(F||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.UX,$.WG,n.X0.forChild({types:[K]}),_.LV,J.zf,d.ZJ,fe.U,k.s,ge.Y]]}),oe})();var Ae=o(7055);const $e={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ge=(()=>{class oe{}return oe.\u0275fac=function(F){return new(F||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.LV,I.F,s.F,n.X0.forChild({types:[$e]}),de,Ae.N,B]]}),oe})()},7055:(ve,X,o)=>{o.d(X,{N:()=>S});var i=o(9808),t=o(3075),n=o(8776),s=o(4546),I=o(1047),_=o(647),c=o(5e3),W=o(1894),u=o(8481),D=o(2683),T=o(6042),M=o(2643);function x(m,A){if(1&m){const P=c.EpF();c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",3),c.TgZ(2,"nz-tag",4),c.NdJ("click",function(J){return c.CHM(P),c.oxw().addField(J)}),c._UZ(3,"i",5),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&m){const P=c.oxw();c.xp6(1),c.Q6J("nzValidateStatus",P.errorState),c.xp6(3),c.hij(" ",P.to.addText," ")}}function te(m,A){if(1&m){const P=c.EpF();c.TgZ(0,"nz-tag",4),c.NdJ("click",function(J){return c.CHM(P),c.oxw(4).addField(J)}),c._UZ(1,"i",5),c._uU(2),c.qZA()}if(2&m){const P=c.oxw(4);c.xp6(2),c.hij(" ",P.to.addText," ")}}function b(m,A){if(1&m&&(c.TgZ(0,"div",11),c.YNc(1,te,3,1,"nz-tag",12),c.qZA()),2&m){const P=c.oxw(2).$implicit,$=c.oxw();c.xp6(1),c.Q6J("ngIf",0==$.to.maxCount||$.to.maxCount>P.model.length)}}function re(m,A){if(1&m){const P=c.EpF();c.ynx(0),c.TgZ(1,"nz-tag",8),c.TgZ(2,"i",9),c.NdJ("click",function(){c.CHM(P);const J=c.oxw().index;return c.oxw().remove(J)}),c.qZA(),c.qZA(),c.YNc(3,b,2,1,"div",10),c.BQk()}if(2&m){const P=c.oxw().last;c.xp6(3),c.Q6J("ngIf",P)}}function j(m,A){if(1&m){const P=c.EpF();c.ynx(0),c.TgZ(1,"div",13),c.TgZ(2,"button",14),c.NdJ("click",function(){c.CHM(P);const J=c.oxw().index;return c.oxw().remove(J)}),c._UZ(3,"i",15),c.qZA(),c.qZA(),c.BQk()}}function V(m,A){if(1&m&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c._UZ(3,"formly-field",7),c.qZA(),c.YNc(4,re,4,1,"ng-container",1),c.YNc(5,j,4,0,"ng-container",1),c.qZA(),c.qZA()),2&m){const P=A.$implicit,$=A.index;c.xp6(2),c.Q6J("ngClass",P.model[$]?"selected-field-col":"default-field-col"),c.xp6(1),c.Q6J("field",P),c.xp6(1),c.Q6J("ngIf",P.model[$]),c.xp6(1),c.Q6J("ngIf",!P.model[$])}}const Y=function(m){return{hidden:m}},B={name:"multi-field",component:(()=>{class m extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(P){P&&P.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return m.\u0275fac=function(P){return new(P||m)},m.\u0275cmp=c.Xpm({type:m,selectors:[["cvc-multi-field-type"]],features:[c.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(P,$){1&P&&(c.TgZ(0,"div",0),c.YNc(1,x,5,2,"nz-form-item",1),c.YNc(2,V,6,4,"nz-form-item",2),c.qZA()),2&P&&(c.Q6J("ngClass",c.VKq(3,Y,!0===$.to.hidden)),c.xp6(1),c.Q6J("ngIf",0===(null==$.field.fieldGroup?null:$.field.fieldGroup.length)),c.xp6(1),c.Q6J("ngForOf",$.field.fieldGroup))},directives:[i.mk,i.O5,W.SK,s.Nx,W.t3,s.Fd,u.j,_.Ls,D.w,i.sg,n.cw,T.ix,M.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),m})()};var se=o(7102),G=o(5109);let S=(()=>{class m{}return m.\u0275fac=function(P){return new(P||m)},m.\u0275mod=c.oAB({type:m}),m.\u0275inj=c.cJS({imports:[[i.ez,t.u5,n.X0.forChild({types:[B]}),t.UX,se.a,s.U5,I.o7,_.PV,T.sL,G.s,u.X]]}),m})()},7462:(ve,X,o)=>{o.d(X,{o:()=>W});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),I=o(3075);const c={name:"cvc-textarea",component:(()=>{class u extends t.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return u.\u0275fac=function(){let D;return function(M){return(D||(D=n.n5z(u)))(M||u)}}(),u.\u0275cmp=n.Xpm({type:u,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(T,M){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",M.formControl)("formlyAttributes",M.field)("nzAutosize",M.to.autosize)("placeholder",M.to.placeholder)},directives:[s.Zp,I.Fj,s.rh,I.JJ,I.oH,t.VQ],styles:[""],changeDetection:0}),u})(),wrappers:["form-field"]};let W=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[[i.ez,I.u5,I.UX,t.X0.forChild({types:[c]}),s.o7]]}),u})()},7102:(ve,X,o)=>{o.d(X,{a:()=>D});var i=o(9808),t=o(8776),n=o(3075),s=o(4546),I=o(5e3),_=o(1894);function c(T,M){if(1&T&&I._UZ(0,"formly-validation-message",3),2&T){const x=I.oxw();I.Q6J("field",x.field)}}const u={name:"cvc-field-errors",component:(()=>{class T extends t.n2{get errorState(){return this.showError?"error":""}}return T.\u0275fac=function(){let M;return function(te){return(M||(M=I.n5z(T)))(te||T)}}(),T.\u0275cmp=I.Xpm({type:T,selectors:[["cvc-field-errors-wrapper"]],features:[I.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(x,te){if(1&x&&(I.TgZ(0,"nz-form-control",0),I.TgZ(1,"p"),I._uU(2),I.qZA(),I.GkF(3,null,1),I.YNc(5,c,1,1,"ng-template",null,2,I.W1O),I.qZA()),2&x){const b=I.MAs(6);I.Q6J("nzValidateStatus",te.errorState)("nzErrorTip",b),I.xp6(2),I.hij("errorState: ",te.errorState,"")}},directives:[_.t3,s.Fd,t.u_],encapsulation:2,changeDetection:0}),T})()};let D=(()=>{class T{}return T.\u0275fac=function(x){return new(x||T)},T.\u0275mod=I.oAB({type:T}),T.\u0275inj=I.cJS({imports:[[i.ez,n.UX,s.U5,t.X0.forChild({wrappers:[u]})]]}),T})()},5472:(ve,X,o)=>{o.d(X,{r:()=>M});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),I=o(5482),_=o(1894),c=o(5109),W=o(6789),u=o(5e3);const T={wrappers:[{name:"form-container",component:(()=>{class x extends n.n2{}return x.\u0275fac=function(){let te;return function(re){return(te||(te=u.n5z(x)))(re||x)}}(),x.\u0275cmp=u.Xpm({type:x,selectors:[["cvc-form-container-wrapper"]],features:[u.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(b,re){1&b&&(u.TgZ(0,"nz-row"),u.TgZ(1,"nz-col",0),u.TgZ(2,"nz-card",1),u.GkF(3,null,2),u.qZA(),u.qZA(),u.qZA()),2&b&&(u.xp6(2),u.Q6J("nzTitle",re.to.label))},directives:[_.SK,_.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),x})()}]};let M=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=u.oAB({type:x}),x.\u0275inj=u.cJS({imports:[[i.ez,t.WG,n.X0.forChild(T),_.Jb,s.vh,I.cD,W._,c.s]]}),x})()},7695:(ve,X,o)=>{o.d(X,{C:()=>S});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),I=o(5482),_=o(1894),c=o(5109),W=o(6789),u=o(5e3),D=o(9552),T=o(647),M=o(404);function x(m,A){1&m&&u._UZ(0,"div",9),2&m&&u.Q6J("innerHtml",A.ngIf,u.oJD)}function te(m,A){1&m&&(u.TgZ(0,"div",10),u._uU(1,"Help not available for this field."),u.qZA())}function b(m,A){if(1&m&&(u.TgZ(0,"nz-collapse-panel",6),u.YNc(1,x,1,1,"div",7),u.YNc(2,te,2,0,"ng-template",null,8,u.W1O),u.qZA()),2&m){const P=A.ngIf,$=u.MAs(3),J=u.oxw().$implicit,d=u.MAs(3);u.Q6J("nzHeader",P)("nzActive",J.templateOptions.hasFocus)("nzExtra",d),u.xp6(1),u.Q6J("ngIf",null==J.templateOptions?null:J.templateOptions.helpText)("ngIfElse",$)}}function re(m,A){if(1&m&&u._UZ(0,"formly-validation-message",14),2&m){const P=u.oxw(4).$implicit;u.Q6J("field",P)}}function j(m,A){if(1&m&&(u.ynx(0),u._UZ(1,"i",12),u.YNc(2,re,1,1,"ng-template",null,13,u.W1O),u.BQk()),2&m){const P=u.MAs(3);u.xp6(1),u.Q6J("nzTooltipTitle",P)}}function V(m,A){if(1&m&&(u.ynx(0),u.YNc(1,j,4,1,"ng-container",11),u.BQk()),2&m){const P=A.ngIf;u.xp6(1),u.Q6J("ngIf","INVALID"===P)}}function Y(m,A){if(1&m&&(u.YNc(0,V,2,1,"ng-container",11),u.ALo(1,"ngrxPush")),2&m){const P=u.oxw().$implicit;u.Q6J("ngIf",u.lcZ(1,1,P.formControl.statusChanges))}}function L(m,A){if(1&m&&(u.ynx(0),u.YNc(1,b,4,5,"nz-collapse-panel",4),u.YNc(2,Y,2,3,"ng-template",null,5,u.W1O),u.BQk()),2&m){const P=A.$implicit;u.xp6(1),u.Q6J("ngIf",null==P.templateOptions?null:P.templateOptions.label)}}let B=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(P){return new(P||m)},m.\u0275cmp=u.Xpm({type:m,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(P,$){1&P&&(u.TgZ(0,"nz-affix",0),u.TgZ(1,"nz-card",1),u.TgZ(2,"nz-collapse",2),u.YNc(3,L,4,1,"ng-container",3),u.qZA(),u.qZA(),u.qZA()),2&P&&(u.Q6J("nzOffsetTop",0)("nzTarget",$.affixTo),u.xp6(2),u.Q6J("nzBordered",!1),u.xp6(1),u.Q6J("ngForOf",$.fieldGroup))},directives:[D.$,s.bd,I.yH,i.sg,i.O5,I.Zv,T.Ls,M.SY,n.u_],pipes:[t.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),m})();const G={name:"form-info",component:(()=>{class m extends n.n2{}return m.\u0275fac=function(){let A;return function($){return(A||(A=u.n5z(m)))($||m)}}(),m.\u0275cmp=u.Xpm({type:m,selectors:[["cvc-form-info-wrapper"]],features:[u.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(P,$){if(1&P&&(u.TgZ(0,"nz-row",0),u.TgZ(1,"nz-col",1),u.TgZ(2,"nz-card",2),u.GkF(3,null,3),u.qZA(),u.qZA(),u.TgZ(5,"nz-col",1),u.TgZ(6,"div",null,4),u._UZ(8,"cvc-form-info-card",5),u.qZA(),u.qZA(),u.qZA()),2&P){const J=u.MAs(7);u.xp6(1),u.Q6J("nzSpan",16),u.xp6(1),u.Q6J("nzTitle",$.to.label),u.xp6(3),u.Q6J("nzSpan",8),u.xp6(3),u.Q6J("fieldGroup",$.field.fieldGroup)("affixTo",J)}},directives:[_.SK,_.t3,s.bd,B],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),m})()};let S=(()=>{class m{}return m.\u0275fac=function(P){return new(P||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({imports:[[i.ez,t.WG,n.X0.forChild({wrappers:[G]}),_.Jb,s.vh,I.cD,W._,c.s]]}),m})()},8785:(ve,X,o)=>{o.d(X,{t:()=>se});var i=o(5e3),t=o(6123),n=o(8929),s=o(7625),I=o(712),_=o(9169),c=o(7484),W=o(9808),u=o(2359),D=o(1894),T=o(4546),M=o(822),x=o(7525),te=o(3868),b=o(3075),re=o(6042),j=o(2643),V=o(2683);function Y(G,S){1&G&&i._UZ(0,"nz-alert",7)}function L(G,S){if(1&G&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&G){const m=i.oxw();i.xp6(1),i.Q6J("errors",m.errorMessages)}}function B(G,S){if(1&G){const m=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(P){return i.CHM(m),i.oxw().coiText=P}),i.qZA(),i.qZA()}if(2&G){const m=i.oxw();i.xp6(1),i.Q6J("ngModel",m.coiText)}}let se=(()=>{class G{constructor(m,A){this.updateCoiGql=m,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new t.U(A)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let A=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});A.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{P&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),A.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{P&&(this.errorMessages=P,this.success=!1)}),A.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{this.loading=P})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(m){return new(m||G)(i.Y36(I.IP1),i.Y36(_.Y))},G.\u0275cmp=i.Xpm({type:G,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(m,A){1&m&&(i.TgZ(0,"nz-card"),i.YNc(1,Y,1,0,"nz-alert",0),i.YNc(2,L,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function($){return A.coiStatus=$}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,B,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return A.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&m&&(i.xp6(1),i.Q6J("ngIf",A.success),i.xp6(1),i.Q6J("ngIf",A.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",A.loading),i.xp6(2),i.Q6J("ngModel",A.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===A.coiStatus),i.xp6(2),i.Q6J("disabled",A.loading||"coiPresent"===A.coiStatus&&(void 0===A.coiText||A.coiText.length<10)))},directives:[c.bd,W.O5,u.r,D.SK,T.Nx,M.V,x.W,te.Dg,b.JJ,b.On,te.Of,b.Fj,re.ix,j.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),G})()},330:(ve,X,o)=>{o.d(X,{e:()=>M});var i=o(9808),t=o(3075),n=o(6949),s=o(7484),I=o(2359),_=o(4546),c=o(7008),W=o(3868),u=o(7525),D=o(6042),T=o(5e3);let M=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=T.oAB({type:x}),x.\u0275inj=T.cJS({imports:[[i.ez,t.u5,_.U5,t.UX,n.WG,s.vh,I.L,W.aF,D.sL,u.j,c.B]]}),x})()},3434:(ve,X,o)=>{o.d(X,{G:()=>se});var i=o(3075),t=o(8929),n=o(6064),s=o(6123),I=o(7625),_=o(5e3),c=o(712),W=o(9169),u=o(325),D=o(7525),T=o(4546),M=o(9808),x=o(8776),te=o(1894),b=o(822),re=o(2359);function j(G,S){1&G&&_.GkF(0)}function V(G,S){if(1&G&&(_.TgZ(0,"nz-form-item"),_._UZ(1,"cvc-form-errors-alert",6),_.qZA()),2&G){const m=_.oxw(2);_.xp6(1),_.Q6J("errors",m.errorMessages)}}function Y(G,S){if(1&G&&(_.TgZ(0,"p"),_._uU(1,"View "),_.TgZ(2,"a",10),_._uU(3,"its details"),_.qZA(),_._uU(4,"."),_.qZA()),2&G){const m=_.oxw(3);_.xp6(2),_.MGl("routerLink","/variants/",m.newId,"/summary")}}function L(G,S){if(1&G&&(_.ynx(0),_._UZ(1,"nz-alert",7),_.YNc(2,Y,5,1,"ng-template",8,9,_.W1O),_.BQk()),2&G){const m=_.MAs(3),A=_.oxw(2);_.xp6(1),_.Q6J("nzMessage",A.isNew?"Variant Created":"Variant Already Exists")("nzDescription",m)}}function B(G,S){if(1&G&&(_.YNc(0,V,2,1,"nz-form-item",5),_.YNc(1,L,4,2,"ng-container",5)),2&G){const m=_.oxw();_.Q6J("ngIf",m.errorMessages.length>0),_.xp6(1),_.Q6J("ngIf",m.success)}}let se=(()=>{class G{constructor(m,A,P){this.submitVariantGQL=m,this.networkErrorService=A,this.route=P,this.destroy$=new t.xQ,this.formGroup=new i.cw({}),this.formOptions={formState:new n._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(A),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(m){let A=null==m?void 0:m.fields.gene[0].id,P=null==m?void 0:m.fields.variant;if(A&&P){let J=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:A,name:P},{},d=>{this.newId=d.addVariant.variant.id,this.isNew=d.addVariant.new});J.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(d=>{d&&(this.success=!0)}),J.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(d=>{d&&(this.errorMessages=d,this.success=!1)}),J.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(d=>{this.loading=d})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(m){return new(m||G)(_.Y36(c.LUc),_.Y36(W.Y),_.Y36(u.gz))},G.\u0275cmp=_.Xpm({type:G,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(m,A){if(1&m&&(_.TgZ(0,"nz-spin",0),_.TgZ(1,"form",1),_.NdJ("ngSubmit",function(){return A.submitVariant(A.formModel)}),_.YNc(2,j,1,0,"ng-container",2),_.TgZ(3,"formly-form",3),_.NdJ("modelChange",function($){return A.formModel=$}),_.qZA(),_.qZA(),_.qZA(),_.YNc(4,B,2,2,"ng-template",null,4,_.W1O)),2&m){const P=_.MAs(5);_.Q6J("nzSpinning",A.loading),_.xp6(1),_.Q6J("formGroup",A.formGroup),_.xp6(1),_.Q6J("ngTemplateOutlet",P),_.xp6(1),_.Q6J("form",A.formGroup)("fields",A.formFields)("model",A.formModel)("options",A.formOptions)}},directives:[D.W,i._Y,i.JL,T.Lr,i.sg,M.tP,x.T7,M.O5,te.SK,T.Nx,b.V,re.r,u.yS],styles:[""]}),G})()},7058:(ve,X,o)=>{o.d(X,{e:()=>U});var i=o(9808),t=o(4623),n=o(4375),s=o(7008),I=o(7695),_=o(7055),c=o(7462),W=o(8776),u=o(5109),D=o(2359),T=o(6042),M=o(4546),x=o(1894),te=o(3075),b=o(325),re=o(1605),j=o(7525),V=o(5472),Y=o(4889),L=o(7484),B=o(8144),se=o(3618),G=o(5e3),S=o(9180),m=o(2643),A=o(1793),P=o(2683);const J={name:"submit-button",component:(()=>{class q extends W.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return q.\u0275fac=function(Te){return new(Te||q)},q.\u0275cmp=G.Xpm({type:q,selectors:[["cvc-submit-button-type"]],features:[G.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Te,Oe){1&Te&&(G.TgZ(0,"cvc-form-buttons"),G.TgZ(1,"button",0),G._uU(2),G.qZA(),G.qZA()),2&Te&&(G.xp6(1),G.Q6J("disabled",!Oe.form.valid),G.xp6(1),G.hij(" ",Oe.to.submitLabel," "))},directives:[S.Z,T.ix,m.dQ,A.m,P.w],styles:[""],changeDetection:0}),q})()};var d=o(1825);let Q=(()=>{class q{}return q.\u0275fac=function(Te){return new(Te||q)},q.\u0275mod=G.oAB({type:q}),q.\u0275inj=G.cJS({imports:[[i.ez,te.UX,W.X0.forChild({types:[J]}),T.sL,n.R,d.A]]}),q})(),U=(()=>{class q{}return q.\u0275fac=function(Te){return new(Te||q)},q.\u0275mod=G.oAB({type:q}),q.\u0275inj=G.cJS({imports:[[i.ez,b.Bz,te.UX,u.s,M.U5,D.L,x.Jb,T.sL,j.j,L.vh,B.zf,se.ZJ,W.X0,s.B,n.R,I.C,_.N,c.o,t.K,re.e,V.r,Y.E,Q,u.s]]}),q})()},712:(ve,X,o)=>{o.d(X,{ti:()=>li,$G1:()=>vr,iGM:()=>lr,KNk:()=>yr,T97:()=>Dr,RMv:()=>Zr,LUc:()=>jr,iwm:()=>he,Vr2:()=>f,A94:()=>Rs,mdl:()=>me,Gbq:()=>vo,bgg:()=>or,u4i:()=>ye,ejK:()=>$s,uBv:()=>Fe,td:()=>_o,_Wm:()=>Be,Tq1:()=>xo,q8c:()=>Ho,WRV:()=>Mi,IZ6:()=>Pi,qf4:()=>wi,Rdc:()=>Hi,gtM:()=>wr,fpJ:()=>$r,k2T:()=>Rr,UWf:()=>Oi,cMj:()=>Bs,UIR:()=>yo,E8d:()=>Re,P_b:()=>Io,Mgx:()=>Ue,iST:()=>Do,Kk:()=>Oo,OfU:()=>ke,kQf:()=>_i,l4w:()=>Is,JQ3:()=>Br,db2:()=>la,h01:()=>Je,wg3:()=>ws,k7O:()=>Mo,kv3:()=>_r,R8w:()=>qe,GB2:()=>Zs,Zyn:()=>rt,dUU:()=>Po,kq9:()=>ct,vRc:()=>Ir,Ud2:()=>Ro,dwB:()=>Ys,GYx:()=>fr,AO2:()=>Ve,YMi:()=>$o,BTF:()=>Bo,wJ2:()=>ot,eY8:()=>Zo,_Aq:()=>ut,pHu:()=>ks,tI1:()=>st,FId:()=>os,Q_P:()=>qr,Sx0:()=>y,Ybm:()=>wo,Cp0:()=>ee,RTy:()=>R,m55:()=>ue,sBY:()=>js,kqt:()=>De,Zhw:()=>Or,B0s:()=>as,rzy:()=>Yo,OIL:()=>ko,BQZ:()=>xe,sfv:()=>mt,TNk:()=>Hs,rJ8:()=>jo,FOU:()=>ds,Q4m:()=>Mr,Fvz:()=>gt,cCu:()=>qs,VnG:()=>ft,_jb:()=>Di,MYm:()=>Ii,oRL:()=>ht,lfy:()=>xr,fow:()=>vt,X5f:()=>ti,WOS:()=>ta,Lr0:()=>oa,Del:()=>ra,xlL:()=>zt,io:()=>oi,WGV:()=>aa,OHm:()=>ri,lYz:()=>_t,FKQ:()=>Pr,B97:()=>ai,mII:()=>dr,ghc:()=>qo,NQC:()=>Ct,JDX:()=>yt,VZq:()=>di,EwB:()=>ls,otH:()=>fi,FJi:()=>Tt,L5n:()=>vi,rZD:()=>It,SrV:()=>Et,Bk6:()=>da,TiL:()=>xi,yic:()=>Dt,SJD:()=>on,F3s:()=>St,jw9:()=>Ot,g0X:()=>ma,iXf:()=>bn,NbY:()=>Yr,kQl:()=>At,Onj:()=>Mt,LLl:()=>ar,WFw:()=>rs,tji:()=>Ms,o71:()=>Nt,jMx:()=>Ia,A4J:()=>yi,c$m:()=>rr,Vj7:()=>ts,D9L:()=>ms,SWk:()=>fs,aw3:()=>Ds,Xft:()=>Ps,mpB:()=>xt,m$d:()=>ya,IP1:()=>_s,LiH:()=>_a,wRZ:()=>vs,wbP:()=>ys,sLD:()=>fa,yqR:()=>va,cEv:()=>Ri,i44:()=>Lt,vMt:()=>mr,tJ6:()=>$i,IRu:()=>Pt,Qzn:()=>mi,iJT:()=>xa,qP7:()=>at,Qtd:()=>Da,Zo2:()=>Bi,ROj:()=>Os,FB1:()=>wt,q1D:()=>Oa,d4o:()=>Ft,huM:()=>Rt,ZYZ:()=>ki,nnL:()=>xs,Bo4:()=>Pa,ubO:()=>Ma,tw_:()=>Zi,wpb:()=>bt,BnY:()=>Hr,_eC:()=>kr,fwG:()=>Yi,zwS:()=>ji,pP7:()=>$t,Tt7:()=>qi,Kmw:()=>tr});var i=o(655);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}var s=o(9245);function I(e,a){for(var N,r=/\r\n|[\n\r]/g,h=1,O=a+1;(N=r.exec(e.body))&&N.index<a;)h+=1,O=a+1-(N.index+N[0].length);return{line:h,column:O}}function _(e){return c(e.source,I(e.source,e.start))}function c(e,a){var r=e.locationOffset.column-1,h=u(r)+e.body,O=a.line-1,Z=a.line+(e.locationOffset.line-1),ae=a.column+(1===a.line?r:0),Ne="".concat(e.name,":").concat(Z,":").concat(ae,"\n"),we=h.split(/\r\n|[\n\r]/g),it=we[O];if(it.length>120){for(var Gt=Math.floor(ae/80),Zt=ae%80,je=[],Ze=0;Ze<it.length;Ze+=80)je.push(it.slice(Ze,Ze+80));return Ne+W([["".concat(Z),je[0]]].concat(je.slice(1,Gt+1).map(function(Vt){return["",Vt]}),[[" ",u(Zt-1)+"^"],["",je[Gt+1]]]))}return Ne+W([["".concat(Z-1),we[O-1]],["".concat(Z),it],["",u(ae-1)+"^"],["".concat(Z+1),we[O+1]]])}function W(e){var a=e.filter(function(h){return void 0!==h[1]}),r=Math.max.apply(Math,a.map(function(h){return h[0].length}));return a.map(function(h){var N=h[1];return function D(e,a){return u(e-a.length)+a}(r,h[0])+(N?" | "+N:" |")}).join("\n")}function u(e){return Array(e+1).join(" ")}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function x(e,a){for(var r=0;r<a.length;r++){var h=a[r];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(e,h.key,h)}}function j(e,a){return!a||"object"!==T(a)&&"function"!=typeof a?V(e):a}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){var a="function"==typeof Map?new Map:void 0;return Y=function(h){if(null===h||!function se(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(h))return h;if("function"!=typeof h)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(h))return a.get(h);a.set(h,O)}function O(){return L(h,arguments,S(this).constructor)}return O.prototype=Object.create(h.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),G(O,h)},Y(e)}function L(e,a,r){return(L=B()?Reflect.construct:function(O,N,Z){var H=[null];H.push.apply(H,N);var Ne=new(Function.bind.apply(O,H));return Z&&G(Ne,Z.prototype),Ne}).apply(null,arguments)}function B(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function G(e,a){return(G=Object.setPrototypeOf||function(h,O){return h.__proto__=O,h})(e,a)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}var m=function(e){!function b(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&G(e,a)}(r,e);var a=function re(e){var a=B();return function(){var O,h=S(e);if(a){var N=S(this).constructor;O=Reflect.construct(h,arguments,N)}else O=h.apply(this,arguments);return j(this,O)}}(r);function r(h,O,N,Z,H,ae,Ne){var we,it,Gt,Zt,je;(function M(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r),je=a.call(this,h);var tn,Ze=Array.isArray(O)?0!==O.length?O:void 0:O?[O]:void 0,Vt=N;!Vt&&Ze&&(Vt=null===(tn=Ze[0].loc)||void 0===tn?void 0:tn.source);var Wt,Bt=Z;!Bt&&Ze&&(Bt=Ze.reduce(function(dt,Ut){return Ut.loc&&dt.push(Ut.loc.start),dt},[])),Bt&&0===Bt.length&&(Bt=void 0),Z&&N?Wt=Z.map(function(dt){return I(N,dt)}):Ze&&(Wt=Ze.reduce(function(dt,Ut){return Ut.loc&&dt.push(I(Ut.loc.source,Ut.loc.start)),dt},[]));var kt=Ne;if(null==kt&&null!=ae){var an=ae.extensions;(function n(e){return"object"==t(e)&&null!==e})(an)&&(kt=an)}return Object.defineProperties(V(je),{name:{value:"GraphQLError"},message:{value:h,enumerable:!0,writable:!0},locations:{value:null!==(we=Wt)&&void 0!==we?we:void 0,enumerable:null!=Wt},path:{value:null!=H?H:void 0,enumerable:null!=H},nodes:{value:null!=Ze?Ze:void 0},source:{value:null!==(it=Vt)&&void 0!==it?it:void 0},positions:{value:null!==(Gt=Bt)&&void 0!==Gt?Gt:void 0},originalError:{value:ae},extensions:{value:null!==(Zt=kt)&&void 0!==Zt?Zt:void 0,enumerable:null!=kt}}),(null==ae?void 0:ae.stack)?(Object.defineProperty(V(je),"stack",{value:ae.stack,writable:!0,configurable:!0}),j(je)):(Error.captureStackTrace?Error.captureStackTrace(V(je),r):Object.defineProperty(V(je),"stack",{value:Error().stack,writable:!0,configurable:!0}),je)}return function te(e,a,r){a&&x(e.prototype,a),r&&x(e,r)}(r,[{key:"toString",value:function(){return function A(e){var a=e.message;if(e.nodes)for(var r=0,h=e.nodes;r<h.length;r++){var O=h[r];O.loc&&(a+="\n\n"+_(O.loc))}else if(e.source&&e.locations)for(var N=0,Z=e.locations;N<Z.length;N++)a+="\n\n"+c(e.source,Z[N]);return a}(this)}},{key:s.YF,get:function(){return"Object"}}]),r}(Y(Error));function P(e,a,r){return new m("Syntax Error: ".concat(r),void 0,e,[a])}var $=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),J=o(848),d=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),Q=o(6261),U=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),q=o(2032),ze=function(){function e(r){var h=new J.WU(d.SOF,0,0,0,0,null);this.source=r,this.lastToken=h,this.token=h,this.line=1,this.lineStart=0}var a=e.prototype;return a.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},a.lookahead=function(){var h=this.token;if(h.kind!==d.EOF)do{var O;h=null!==(O=h.next)&&void 0!==O?O:h.next=Me(this,h)}while(h.kind===d.COMMENT);return h},e}();function Oe(e){return isNaN(e)?d.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Me(e,a){for(var r=e.source,h=r.body,O=h.length,N=a.end;N<O;){var Z=h.charCodeAt(N),H=e.line,ae=1+N-e.lineStart;switch(Z){case 65279:case 9:case 32:case 44:++N;continue;case 10:++N,++e.line,e.lineStart=N;continue;case 13:10===h.charCodeAt(N+1)?N+=2:++N,++e.line,e.lineStart=N;continue;case 33:return new J.WU(d.BANG,N,N+1,H,ae,a);case 35:return Ce(r,N,H,ae,a);case 36:return new J.WU(d.DOLLAR,N,N+1,H,ae,a);case 38:return new J.WU(d.AMP,N,N+1,H,ae,a);case 40:return new J.WU(d.PAREN_L,N,N+1,H,ae,a);case 41:return new J.WU(d.PAREN_R,N,N+1,H,ae,a);case 46:if(46===h.charCodeAt(N+1)&&46===h.charCodeAt(N+2))return new J.WU(d.SPREAD,N,N+3,H,ae,a);break;case 58:return new J.WU(d.COLON,N,N+1,H,ae,a);case 61:return new J.WU(d.EQUALS,N,N+1,H,ae,a);case 64:return new J.WU(d.AT,N,N+1,H,ae,a);case 91:return new J.WU(d.BRACKET_L,N,N+1,H,ae,a);case 93:return new J.WU(d.BRACKET_R,N,N+1,H,ae,a);case 123:return new J.WU(d.BRACE_L,N,N+1,H,ae,a);case 124:return new J.WU(d.PIPE,N,N+1,H,ae,a);case 125:return new J.WU(d.BRACE_R,N,N+1,H,ae,a);case 34:return 34===h.charCodeAt(N+1)&&34===h.charCodeAt(N+2)?fe(r,N,H,ae,a,e):K(r,N,H,ae,a);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return pe(r,N,Z,H,ae,a);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return de(r,N,H,ae,a)}throw P(r,N,ie(Z))}return new J.WU(d.EOF,O,O,e.line,1+N-e.lineStart,a)}function ie(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Oe(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Oe(e),".")}function Ce(e,a,r,h,O){var Z,N=e.body,H=a;do{Z=N.charCodeAt(++H)}while(!isNaN(Z)&&(Z>31||9===Z));return new J.WU(d.COMMENT,a,H,r,h,O,N.slice(a+1,H))}function pe(e,a,r,h,O,N){var Z=e.body,H=r,ae=a,Ne=!1;if(45===H&&(H=Z.charCodeAt(++ae)),48===H){if((H=Z.charCodeAt(++ae))>=48&&H<=57)throw P(e,ae,"Invalid number, unexpected digit after 0: ".concat(Oe(H),"."))}else ae=Se(e,ae,H),H=Z.charCodeAt(ae);if(46===H&&(Ne=!0,H=Z.charCodeAt(++ae),ae=Se(e,ae,H),H=Z.charCodeAt(ae)),(69===H||101===H)&&(Ne=!0,(43===(H=Z.charCodeAt(++ae))||45===H)&&(H=Z.charCodeAt(++ae)),ae=Se(e,ae,H),H=Z.charCodeAt(ae)),46===H||function Ae(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(H))throw P(e,ae,"Invalid number, expected digit but got: ".concat(Oe(H),"."));return new J.WU(Ne?d.FLOAT:d.INT,a,ae,h,O,N,Z.slice(a,ae))}function Se(e,a,r){var h=e.body,O=a,N=r;if(N>=48&&N<=57){do{N=h.charCodeAt(++O)}while(N>=48&&N<=57);return O}throw P(e,O,"Invalid number, expected digit but got: ".concat(Oe(N),"."))}function K(e,a,r,h,O){for(var N=e.body,Z=a+1,H=Z,ae=0,Ne="";Z<N.length&&!isNaN(ae=N.charCodeAt(Z))&&10!==ae&&13!==ae;){if(34===ae)return Ne+=N.slice(H,Z),new J.WU(d.STRING,a,Z+1,r,h,O,Ne);if(ae<32&&9!==ae)throw P(e,Z,"Invalid character within String: ".concat(Oe(ae),"."));if(++Z,92===ae){switch(Ne+=N.slice(H,Z-1),ae=N.charCodeAt(Z)){case 34:Ne+='"';break;case 47:Ne+="/";break;case 92:Ne+="\\";break;case 98:Ne+="\b";break;case 102:Ne+="\f";break;case 110:Ne+="\n";break;case 114:Ne+="\r";break;case 116:Ne+="\t";break;case 117:var we=k(N.charCodeAt(Z+1),N.charCodeAt(Z+2),N.charCodeAt(Z+3),N.charCodeAt(Z+4));if(we<0){var it=N.slice(Z+1,Z+5);throw P(e,Z,"Invalid character escape sequence: \\u".concat(it,"."))}Ne+=String.fromCharCode(we),Z+=4;break;default:throw P(e,Z,"Invalid character escape sequence: \\".concat(String.fromCharCode(ae),"."))}H=++Z}}throw P(e,Z,"Unterminated string.")}function fe(e,a,r,h,O,N){for(var Z=e.body,H=a+3,ae=H,Ne=0,we="";H<Z.length&&!isNaN(Ne=Z.charCodeAt(H));){if(34===Ne&&34===Z.charCodeAt(H+1)&&34===Z.charCodeAt(H+2))return we+=Z.slice(ae,H),new J.WU(d.BLOCK_STRING,a,H+3,r,h,O,(0,q.W7)(we));if(Ne<32&&9!==Ne&&10!==Ne&&13!==Ne)throw P(e,H,"Invalid character within String: ".concat(Oe(Ne),"."));10===Ne?(++H,++N.line,N.lineStart=H):13===Ne?(10===Z.charCodeAt(H+1)?H+=2:++H,++N.line,N.lineStart=H):92===Ne&&34===Z.charCodeAt(H+1)&&34===Z.charCodeAt(H+2)&&34===Z.charCodeAt(H+3)?(we+=Z.slice(ae,H)+'"""',ae=H+=4):++H}throw P(e,H,"Unterminated string.")}function k(e,a,r,h){return ge(e)<<12|ge(a)<<8|ge(r)<<4|ge(h)}function ge(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function de(e,a,r,h,O){for(var N=e.body,Z=N.length,H=a+1,ae=0;H!==Z&&!isNaN(ae=N.charCodeAt(H))&&(95===ae||ae>=48&&ae<=57||ae>=65&&ae<=90||ae>=97&&ae<=122);)++H;return new J.WU(d.NAME,a,H,r,h,O,N.slice(a,H))}var oe=function(){function e(r,h){var O=(0,Q.T)(r)?r:new Q.H(r);this._lexer=new ze(O),this._options=h}var a=e.prototype;return a.parseName=function(){var h=this.expectToken(d.NAME);return{kind:$.NAME,value:h.value,loc:this.loc(h)}},a.parseDocument=function(){var h=this._lexer.token;return{kind:$.DOCUMENT,definitions:this.many(d.SOF,this.parseDefinition,d.EOF),loc:this.loc(h)}},a.parseDefinition=function(){if(this.peek(d.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(d.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},a.parseOperationDefinition=function(){var h=this._lexer.token;if(this.peek(d.BRACE_L))return{kind:$.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(h)};var N,O=this.parseOperationType();return this.peek(d.NAME)&&(N=this.parseName()),{kind:$.OPERATION_DEFINITION,operation:O,name:N,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(h)}},a.parseOperationType=function(){var h=this.expectToken(d.NAME);switch(h.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(h)},a.parseVariableDefinitions=function(){return this.optionalMany(d.PAREN_L,this.parseVariableDefinition,d.PAREN_R)},a.parseVariableDefinition=function(){var h=this._lexer.token;return{kind:$.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(d.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(d.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(h)}},a.parseVariable=function(){var h=this._lexer.token;return this.expectToken(d.DOLLAR),{kind:$.VARIABLE,name:this.parseName(),loc:this.loc(h)}},a.parseSelectionSet=function(){var h=this._lexer.token;return{kind:$.SELECTION_SET,selections:this.many(d.BRACE_L,this.parseSelection,d.BRACE_R),loc:this.loc(h)}},a.parseSelection=function(){return this.peek(d.SPREAD)?this.parseFragment():this.parseField()},a.parseField=function(){var N,Z,h=this._lexer.token,O=this.parseName();return this.expectOptionalToken(d.COLON)?(N=O,Z=this.parseName()):Z=O,{kind:$.FIELD,alias:N,name:Z,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(d.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(h)}},a.parseArguments=function(h){return this.optionalMany(d.PAREN_L,h?this.parseConstArgument:this.parseArgument,d.PAREN_R)},a.parseArgument=function(){var h=this._lexer.token,O=this.parseName();return this.expectToken(d.COLON),{kind:$.ARGUMENT,name:O,value:this.parseValueLiteral(!1),loc:this.loc(h)}},a.parseConstArgument=function(){var h=this._lexer.token;return{kind:$.ARGUMENT,name:this.parseName(),value:(this.expectToken(d.COLON),this.parseValueLiteral(!0)),loc:this.loc(h)}},a.parseFragment=function(){var h=this._lexer.token;this.expectToken(d.SPREAD);var O=this.expectOptionalKeyword("on");return!O&&this.peek(d.NAME)?{kind:$.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(h)}:{kind:$.INLINE_FRAGMENT,typeCondition:O?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(h)}},a.parseFragmentDefinition=function(){var h,O=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(h=this._options)||void 0===h?void 0:h.experimentalFragmentVariables)?{kind:$.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(O)}:{kind:$.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(O)}},a.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},a.parseValueLiteral=function(h){var O=this._lexer.token;switch(O.kind){case d.BRACKET_L:return this.parseList(h);case d.BRACE_L:return this.parseObject(h);case d.INT:return this._lexer.advance(),{kind:$.INT,value:O.value,loc:this.loc(O)};case d.FLOAT:return this._lexer.advance(),{kind:$.FLOAT,value:O.value,loc:this.loc(O)};case d.STRING:case d.BLOCK_STRING:return this.parseStringLiteral();case d.NAME:switch(this._lexer.advance(),O.value){case"true":return{kind:$.BOOLEAN,value:!0,loc:this.loc(O)};case"false":return{kind:$.BOOLEAN,value:!1,loc:this.loc(O)};case"null":return{kind:$.NULL,loc:this.loc(O)};default:return{kind:$.ENUM,value:O.value,loc:this.loc(O)}}case d.DOLLAR:if(!h)return this.parseVariable()}throw this.unexpected()},a.parseStringLiteral=function(){var h=this._lexer.token;return this._lexer.advance(),{kind:$.STRING,value:h.value,block:h.kind===d.BLOCK_STRING,loc:this.loc(h)}},a.parseList=function(h){var O=this,N=this._lexer.token;return{kind:$.LIST,values:this.any(d.BRACKET_L,function(){return O.parseValueLiteral(h)},d.BRACKET_R),loc:this.loc(N)}},a.parseObject=function(h){var O=this,N=this._lexer.token;return{kind:$.OBJECT,fields:this.any(d.BRACE_L,function(){return O.parseObjectField(h)},d.BRACE_R),loc:this.loc(N)}},a.parseObjectField=function(h){var O=this._lexer.token,N=this.parseName();return this.expectToken(d.COLON),{kind:$.OBJECT_FIELD,name:N,value:this.parseValueLiteral(h),loc:this.loc(O)}},a.parseDirectives=function(h){for(var O=[];this.peek(d.AT);)O.push(this.parseDirective(h));return O},a.parseDirective=function(h){var O=this._lexer.token;return this.expectToken(d.AT),{kind:$.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(h),loc:this.loc(O)}},a.parseTypeReference=function(){var O,h=this._lexer.token;return this.expectOptionalToken(d.BRACKET_L)?(O=this.parseTypeReference(),this.expectToken(d.BRACKET_R),O={kind:$.LIST_TYPE,type:O,loc:this.loc(h)}):O=this.parseNamedType(),this.expectOptionalToken(d.BANG)?{kind:$.NON_NULL_TYPE,type:O,loc:this.loc(h)}:O},a.parseNamedType=function(){var h=this._lexer.token;return{kind:$.NAMED_TYPE,name:this.parseName(),loc:this.loc(h)}},a.parseTypeSystemDefinition=function(){var h=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(h.kind===d.NAME)switch(h.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(h)},a.peekDescription=function(){return this.peek(d.STRING)||this.peek(d.BLOCK_STRING)},a.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},a.parseSchemaDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("schema");var N=this.parseDirectives(!0),Z=this.many(d.BRACE_L,this.parseOperationTypeDefinition,d.BRACE_R);return{kind:$.SCHEMA_DEFINITION,description:O,directives:N,operationTypes:Z,loc:this.loc(h)}},a.parseOperationTypeDefinition=function(){var h=this._lexer.token,O=this.parseOperationType();this.expectToken(d.COLON);var N=this.parseNamedType();return{kind:$.OPERATION_TYPE_DEFINITION,operation:O,type:N,loc:this.loc(h)}},a.parseScalarTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("scalar");var N=this.parseName(),Z=this.parseDirectives(!0);return{kind:$.SCALAR_TYPE_DEFINITION,description:O,name:N,directives:Z,loc:this.loc(h)}},a.parseObjectTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("type");var N=this.parseName(),Z=this.parseImplementsInterfaces(),H=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:$.OBJECT_TYPE_DEFINITION,description:O,name:N,interfaces:Z,directives:H,fields:ae,loc:this.loc(h)}},a.parseImplementsInterfaces=function(){var h;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(h=this._options)||void 0===h?void 0:h.allowLegacySDLImplementsInterfaces)){var O=[];this.expectOptionalToken(d.AMP);do{O.push(this.parseNamedType())}while(this.expectOptionalToken(d.AMP)||this.peek(d.NAME));return O}return this.delimitedMany(d.AMP,this.parseNamedType)},a.parseFieldsDefinition=function(){var h;return!0===(null===(h=this._options)||void 0===h?void 0:h.allowLegacySDLEmptyFields)&&this.peek(d.BRACE_L)&&this._lexer.lookahead().kind===d.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(d.BRACE_L,this.parseFieldDefinition,d.BRACE_R)},a.parseFieldDefinition=function(){var h=this._lexer.token,O=this.parseDescription(),N=this.parseName(),Z=this.parseArgumentDefs();this.expectToken(d.COLON);var H=this.parseTypeReference(),ae=this.parseDirectives(!0);return{kind:$.FIELD_DEFINITION,description:O,name:N,arguments:Z,type:H,directives:ae,loc:this.loc(h)}},a.parseArgumentDefs=function(){return this.optionalMany(d.PAREN_L,this.parseInputValueDef,d.PAREN_R)},a.parseInputValueDef=function(){var h=this._lexer.token,O=this.parseDescription(),N=this.parseName();this.expectToken(d.COLON);var H,Z=this.parseTypeReference();this.expectOptionalToken(d.EQUALS)&&(H=this.parseValueLiteral(!0));var ae=this.parseDirectives(!0);return{kind:$.INPUT_VALUE_DEFINITION,description:O,name:N,type:Z,defaultValue:H,directives:ae,loc:this.loc(h)}},a.parseInterfaceTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("interface");var N=this.parseName(),Z=this.parseImplementsInterfaces(),H=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:$.INTERFACE_TYPE_DEFINITION,description:O,name:N,interfaces:Z,directives:H,fields:ae,loc:this.loc(h)}},a.parseUnionTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("union");var N=this.parseName(),Z=this.parseDirectives(!0),H=this.parseUnionMemberTypes();return{kind:$.UNION_TYPE_DEFINITION,description:O,name:N,directives:Z,types:H,loc:this.loc(h)}},a.parseUnionMemberTypes=function(){return this.expectOptionalToken(d.EQUALS)?this.delimitedMany(d.PIPE,this.parseNamedType):[]},a.parseEnumTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("enum");var N=this.parseName(),Z=this.parseDirectives(!0),H=this.parseEnumValuesDefinition();return{kind:$.ENUM_TYPE_DEFINITION,description:O,name:N,directives:Z,values:H,loc:this.loc(h)}},a.parseEnumValuesDefinition=function(){return this.optionalMany(d.BRACE_L,this.parseEnumValueDefinition,d.BRACE_R)},a.parseEnumValueDefinition=function(){var h=this._lexer.token,O=this.parseDescription(),N=this.parseName(),Z=this.parseDirectives(!0);return{kind:$.ENUM_VALUE_DEFINITION,description:O,name:N,directives:Z,loc:this.loc(h)}},a.parseInputObjectTypeDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("input");var N=this.parseName(),Z=this.parseDirectives(!0),H=this.parseInputFieldsDefinition();return{kind:$.INPUT_OBJECT_TYPE_DEFINITION,description:O,name:N,directives:Z,fields:H,loc:this.loc(h)}},a.parseInputFieldsDefinition=function(){return this.optionalMany(d.BRACE_L,this.parseInputValueDef,d.BRACE_R)},a.parseTypeSystemExtension=function(){var h=this._lexer.lookahead();if(h.kind===d.NAME)switch(h.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(h)},a.parseSchemaExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var O=this.parseDirectives(!0),N=this.optionalMany(d.BRACE_L,this.parseOperationTypeDefinition,d.BRACE_R);if(0===O.length&&0===N.length)throw this.unexpected();return{kind:$.SCHEMA_EXTENSION,directives:O,operationTypes:N,loc:this.loc(h)}},a.parseScalarTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var O=this.parseName(),N=this.parseDirectives(!0);if(0===N.length)throw this.unexpected();return{kind:$.SCALAR_TYPE_EXTENSION,name:O,directives:N,loc:this.loc(h)}},a.parseObjectTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var O=this.parseName(),N=this.parseImplementsInterfaces(),Z=this.parseDirectives(!0),H=this.parseFieldsDefinition();if(0===N.length&&0===Z.length&&0===H.length)throw this.unexpected();return{kind:$.OBJECT_TYPE_EXTENSION,name:O,interfaces:N,directives:Z,fields:H,loc:this.loc(h)}},a.parseInterfaceTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var O=this.parseName(),N=this.parseImplementsInterfaces(),Z=this.parseDirectives(!0),H=this.parseFieldsDefinition();if(0===N.length&&0===Z.length&&0===H.length)throw this.unexpected();return{kind:$.INTERFACE_TYPE_EXTENSION,name:O,interfaces:N,directives:Z,fields:H,loc:this.loc(h)}},a.parseUnionTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var O=this.parseName(),N=this.parseDirectives(!0),Z=this.parseUnionMemberTypes();if(0===N.length&&0===Z.length)throw this.unexpected();return{kind:$.UNION_TYPE_EXTENSION,name:O,directives:N,types:Z,loc:this.loc(h)}},a.parseEnumTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var O=this.parseName(),N=this.parseDirectives(!0),Z=this.parseEnumValuesDefinition();if(0===N.length&&0===Z.length)throw this.unexpected();return{kind:$.ENUM_TYPE_EXTENSION,name:O,directives:N,values:Z,loc:this.loc(h)}},a.parseInputObjectTypeExtension=function(){var h=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var O=this.parseName(),N=this.parseDirectives(!0),Z=this.parseInputFieldsDefinition();if(0===N.length&&0===Z.length)throw this.unexpected();return{kind:$.INPUT_OBJECT_TYPE_EXTENSION,name:O,directives:N,fields:Z,loc:this.loc(h)}},a.parseDirectiveDefinition=function(){var h=this._lexer.token,O=this.parseDescription();this.expectKeyword("directive"),this.expectToken(d.AT);var N=this.parseName(),Z=this.parseArgumentDefs(),H=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var ae=this.parseDirectiveLocations();return{kind:$.DIRECTIVE_DEFINITION,description:O,name:N,arguments:Z,repeatable:H,locations:ae,loc:this.loc(h)}},a.parseDirectiveLocations=function(){return this.delimitedMany(d.PIPE,this.parseDirectiveLocation)},a.parseDirectiveLocation=function(){var h=this._lexer.token,O=this.parseName();if(void 0!==U[O.value])return O;throw this.unexpected(h)},a.loc=function(h){var O;if(!0!==(null===(O=this._options)||void 0===O?void 0:O.noLocation))return new J.Ye(h,this._lexer.lastToken,this._lexer.source)},a.peek=function(h){return this._lexer.token.kind===h},a.expectToken=function(h){var O=this._lexer.token;if(O.kind===h)return this._lexer.advance(),O;throw P(this._lexer.source,O.start,"Expected ".concat(F(h),", found ").concat(Ie(O),"."))},a.expectOptionalToken=function(h){var O=this._lexer.token;if(O.kind===h)return this._lexer.advance(),O},a.expectKeyword=function(h){var O=this._lexer.token;if(O.kind!==d.NAME||O.value!==h)throw P(this._lexer.source,O.start,'Expected "'.concat(h,'", found ').concat(Ie(O),"."));this._lexer.advance()},a.expectOptionalKeyword=function(h){var O=this._lexer.token;return O.kind===d.NAME&&O.value===h&&(this._lexer.advance(),!0)},a.unexpected=function(h){var O=null!=h?h:this._lexer.token;return P(this._lexer.source,O.start,"Unexpected ".concat(Ie(O),"."))},a.any=function(h,O,N){this.expectToken(h);for(var Z=[];!this.expectOptionalToken(N);)Z.push(O.call(this));return Z},a.optionalMany=function(h,O,N){if(this.expectOptionalToken(h)){var Z=[];do{Z.push(O.call(this))}while(!this.expectOptionalToken(N));return Z}return[]},a.many=function(h,O,N){this.expectToken(h);var Z=[];do{Z.push(O.call(this))}while(!this.expectOptionalToken(N));return Z},a.delimitedMany=function(h,O){this.expectOptionalToken(h);var N=[];do{N.push(O.call(this))}while(this.expectOptionalToken(h));return N},e}();function Ie(e){var a=e.value;return F(e.kind)+(null!=a?' "'.concat(a,'"'):"")}function F(e){return function Te(e){return e===d.BANG||e===d.DOLLAR||e===d.AMP||e===d.PAREN_L||e===d.PAREN_R||e===d.SPREAD||e===d.COLON||e===d.EQUALS||e===d.AT||e===d.BRACKET_L||e===d.BRACKET_R||e===d.BRACE_L||e===d.PIPE||e===d.BRACE_R}(e)?'"'.concat(e,'"'):e}var ce=new Map,w=new Map,_e=!0,Pe=!1;function be(e){return e.replace(/[\s,]+/g," ").trim()}function Ye(e){var a=be(e);if(!ce.has(a)){var r=function Le(e,a){return new oe(e,a).parseDocument()}(e,{experimentalFragmentVariables:Pe,allowLegacyFragmentVariables:Pe});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");ce.set(a,function Ke(e){var a=new Set(e.definitions);a.forEach(function(h){h.loc&&delete h.loc,Object.keys(h).forEach(function(O){var N=h[O];N&&"object"==typeof N&&a.add(N)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(function nt(e){var a=new Set,r=[];return e.definitions.forEach(function(h){if("FragmentDefinition"===h.kind){var O=h.name.value,N=function tt(e){return be(e.source.body.substring(e.start,e.end))}(h.loc),Z=w.get(O);Z&&!Z.has(N)?_e&&console.warn("Warning: fragment with name "+O+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):Z||w.set(O,Z=new Set),Z.add(N),a.has(N)||(a.add(N),r.push(h))}else r.push(h)}),(0,i.pi)((0,i.pi)({},e),{definitions:r})}(r)))}return ce.get(a)}function C(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var h=e[0];return a.forEach(function(O,N){h+=O&&"Document"===O.kind?O.loc.source.body:O,h+=e[N+1]}),Ye(h)}var e,Qe_gql=C;(e=C||(C={})).gql=Qe_gql,e.resetCaches=function He(){ce.clear(),w.clear()},e.disableFragmentWarnings=function Xe(){_e=!1},e.enableExperimentalFragmentVariables=function We(){Pe=!0},e.disableExperimentalFragmentVariables=function lt(){Pe=!1},C.default=C;var v=o(9298),l=o(5e3),he=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(he||(he={})),he))(),f=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(f||(f={})),f))(),me=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(me||(me={})),me))(),ye=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ye||(ye={})),ye))(),Fe=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(Fe||(Fe={})),Fe))(),Be=(()=>(function(e){e.And="AND",e.Or="OR"}(Be||(Be={})),Be))(),Re=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Re||(Re={})),Re))(),Ue=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Ue||(Ue={})),Ue))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),qe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(qe||(qe={})),qe))(),rt=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(rt||(rt={})),rt))(),ct=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(ct||(ct={})),ct))(),Ve=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Ve||(Ve={})),Ve))(),ot=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(ot||(ot={})),ot))(),ut=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ut||(ut={})),ut))(),st=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(st||(st={})),st))(),y=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(y||(y={})),y))(),ee=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(ee||(ee={})),ee))(),R=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(R||(R={})),R))(),ue=(()=>(function(e){e.Accepted="ACCEPTED",e.All="ALL",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(ue||(ue={})),ue))(),De=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(De||(De={})),De))(),xe=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(xe||(xe={})),xe))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Eq="EQ",e.Ge="GE",e.Gt="GT",e.Le="LE",e.Lt="LT",e.Ne="NE"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Id="ID",e.Name="NAME"}(zt||(zt={})),zt))(),_t=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(_t||(_t={})),_t))(),Ct=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(Ct||(Ct={})),Ct))(),yt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(yt||(yt={})),yt))(),Tt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(It||(It={})),It))(),Et=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Et||(Et={})),Et))(),Dt=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(Dt||(Dt={})),Dt))(),St=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(St||(St={})),St))(),Ot=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.CreatedAt="CREATED_AT",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Ot||(Ot={})),Ot))(),At=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.SuggestionCount="SUGGESTION_COUNT",e.Year="YEAR"}(At||(At={})),At))(),Mt=(()=>(function(e){e.Contains="CONTAINS",e.DoesNotContain="DOES_NOT_CONTAIN",e.Eq="EQ",e.Ne="NE",e.StartsWith="STARTS_WITH"}(Mt||(Mt={})),Mt))(),Nt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Nt||(Nt={})),Nt))(),xt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(xt||(xt={})),xt))(),Lt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Lt||(Lt={})),Lt))(),Pt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Pt||(Pt={})),Pt))(),at=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(at||(at={})),at))(),wt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(wt||(wt={})),wt))(),Ft=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(Ft||(Ft={})),Ft))(),Rt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Rt||(Rt={})),Rt))(),bt=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(bt||(bt={})),bt))(),$t=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}($t||($t={})),$t))();const Jt=C`
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
    `,E=C`
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
    `,Ee=C`
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
    `,un=C`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,dn=C`
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
    `,Sn=C`
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
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
}
    `,Jn=C`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,jn=C`
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
    `,Kn=C`
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
    `,Hn=C`
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
    `,Xn=C`
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
    `,qn=C`
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
    `,eo=C`
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
    `,to=C`
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
    `,no=C`
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
    `,oo=C`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,io=C`
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
    `,ro=C`
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
    `,so=C`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,ao=C`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,co=C`
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
    ${g}`,lo=C`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,uo=C`
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
    `,po=C`
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
    `,mo=C`
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
    `,fo=C`
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
    `}`,ho=C`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Jt}`;let vo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ho}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zo=C`
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
    ${jt}`;let _o=(()=>{class e extends v.AE{constructor(r){super(r),this.document=zo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Co=C`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Kt}`;let yo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Co}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const To=C`
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
    ${Ht}`;let Io=(()=>{class e extends v.AE{constructor(r){super(r),this.document=To}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Eo=C`
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
    ${Yt}`;let Do=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Eo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=C`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Xt}`;let Oo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=So}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=C`
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
    `;let Mo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ao}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const No=C`
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
    ${qt}`;let xo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=No}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=C`
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
    `;let Po=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Lo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=C`
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
    ${en}`;let Ro=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Fo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bo=C`
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
    `;let $o=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Go=C`
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
    ${ne}`;let Bo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Go}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=C`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${p}`;let wo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Uo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qo=C`
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
    ${E}`;let Zo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Qo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vo=C`
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
    ${Ee}`;let Yo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Vo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wo=C`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${et}`;let ko=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Wo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Jo=C`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Qt}`;let jo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Jo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ko=C`
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
    ${cn}`;let Ho=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ko}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xo=C`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${ln}`;let qo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Xo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ei=C`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${un}`;let ti=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ei}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ni=C`
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
    ${dn}`;let oi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ni}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ii=C`
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
    `;let ri=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ii}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const si=C`
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
    ${pn}`;let ai=(()=>{class e extends v.AE{constructor(r){super(r),this.document=si}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=C`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let li=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ci}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=C`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let di=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ui}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=C`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${mn}`;let mi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=pi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gi=C`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${gn}`;let fi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=gi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=C`
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
    ${fn}`;let vi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=hi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=C`
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
    ${hn}`;let _i=(()=>{class e extends v.AE{constructor(r){super(r),this.document=zi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=C`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${vn}`;let yi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ci}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ti=C`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Ii=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ti}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=C`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Di=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ei}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=C`
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
    ${zn}`;let Oi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Si}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=C`
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
    ${_n}`;let Mi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Ni=C`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Cn}`;let xi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ni}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Li=C`
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
    ${yn}`;let Pi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Li}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fi=C`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Tn}`;let Ri=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Fi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=C`
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
    ${In}`;let $i=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=C`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${En}`;let Bi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ui=C`
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
    ${Dn}`;let wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ui}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=C`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Sn}`;let Zi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Qi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vi=C`
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
    ${On}`;let Yi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Vi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wi=C`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${An}`;let ki=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Wi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=C`
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
    ${Mn}`;let ji=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ji}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=C`
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
    ${Nn}`;let Hi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ki}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=C`
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
    `;let qi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Xi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const er=C`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let tr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=er}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const nr=C`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${xn}`;let or=(()=>{class e extends v.AE{constructor(r){super(r),this.document=nr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=C`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let rr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ir}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const sr=C`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let ar=(()=>{class e extends v.mm{constructor(r){super(r),this.document=sr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const cr=C`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Yt}`;let lr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=cr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ur=C`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Ln}`;let dr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ur}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pr=C`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let mr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=pr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gr=C`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let fr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=gr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hr=C`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let vr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=hr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zr=C`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let _r=(()=>{class e extends v.AE{constructor(r){super(r),this.document=zr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cr=C`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Pn}`;let yr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Cr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Tr=C`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Ir=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Tr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Er=C`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${Fn}`;let Dr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Er}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=C`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Or=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=C`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Rn}`;let Mr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Nr=C`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let xr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Nr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=C`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Pr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Lr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fr=C`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nn}`;let Rr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Fr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const br=C`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let $r=(()=>{class e extends v.AE{constructor(r){super(r),this.document=br}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gr=C`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Br=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Gr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ur=C`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let wr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ur}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qr=C`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${on}`;let Zr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Qr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vr=C`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nn}`;let Yr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Vr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wr=C`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${rn}`;let kr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Wr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Jr=C`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${$n}`;let jr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Jr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${rn}`;const Kr=C`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Hr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Kr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xr=C`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Gn}`;let qr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Xr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const es=C`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let ts=(()=>{class e extends v.mm{constructor(r){super(r),this.document=es}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ns=C`
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
    `;let os=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ns}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Bn}`;const is=C`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let rs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=is}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ss=C`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let as=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ss}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const cs=C`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let ls=(()=>{class e extends v.mm{constructor(r){super(r),this.document=cs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const us=C`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Un}`;let ds=(()=>{class e extends v.AE{constructor(r){super(r),this.document=us}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ps=C`
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
    `;let ms=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ps}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${wn}`;const gs=C`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let fs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=gs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hs=C`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let vs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=hs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zs=C`
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
    `;let _s=(()=>{class e extends v.mm{constructor(r){super(r),this.document=zs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cs=C`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let ys=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Cs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ts=C`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Is=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ts}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Es=C`
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
    `;let Ds=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Es}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=C`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Qn}`;let Os=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ss}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const As=C`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Ms=(()=>{class e extends v.mm{constructor(r){super(r),this.document=As}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ns=C`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Vn}`;let xs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ns}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ls=C`
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
    `;let Ps=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ls}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fs=C`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Yn}`;let Rs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Fs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bs=C`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Wn}`;let $s=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gs=C`
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
    `;let Bs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Us=C`
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
    `;let ws=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Us}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${kn}`;const Qs=C`
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
    `;let Zs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Qs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vs=C`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${Jn}`;let Ys=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Vs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ws=C`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${jn}`;let ks=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ws}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Js=C`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Kn}`;let js=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Js}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ks=C`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Hn}`;let Hs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ks}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xs=C`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Xn}`;let qs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Xs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ea=C`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${qn}`;let ta=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ea}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const na=C`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${eo}`;let oa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=na}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ia=C`
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
    ${to}`;let ra=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ia}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const sa=C`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let aa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=sa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ca=C`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${no}`;let la=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ca}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ua=C`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${oo}`;let da=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ua}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pa=C`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${io}`;let ma=(()=>{class e extends v.AE{constructor(r){super(r),this.document=pa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ga=C`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${ro}`;let fa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ga}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ha=C`
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
    ${co}
${ao}
${so}
${sn}`;let va=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ha}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const za=C`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${sn}`;let _a=(()=>{class e extends v.mm{constructor(r){super(r),this.document=za}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ca=C`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${lo}`;let ya=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ca}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ta=C`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Ia=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ta}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ea=C`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${uo}`;let Da=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ea}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
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
    `;const Sa=C`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${po}`;let Oa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Aa=C`
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
    `;let Ma=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Na=C`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${mo}`;let xa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Na}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const La=C`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${fo}`;let Pa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=La}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(ve,X,o)=>{o.r(X),o.d(X,{LayoutModule:()=>en});var i=o(9808),t=o(325),n=o(5e3),s=o(9350),I=o(8929),_=o(7625),c=o(655),W=o(4090),u=o(1721),D=o(4219),T=o(925),M=o(647),x=o(226),te=o(5113);const b=["*"],re=["nz-sider-trigger",""];function j(g,ne){}function V(g,ne){if(1&g&&(n.ynx(0),n.YNc(1,j,0,0,"ng-template",3),n.BQk()),2&g){const p=n.oxw(),E=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzZeroTrigger||E)}}function Y(g,ne){}function L(g,ne){if(1&g&&(n.ynx(0),n.YNc(1,Y,0,0,"ng-template",3),n.BQk()),2&g){const p=n.oxw(),E=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzTrigger||E)}}function B(g,ne){if(1&g&&n._UZ(0,"i",5),2&g){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"right":"left")}}function se(g,ne){if(1&g&&n._UZ(0,"i",5),2&g){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"left":"right")}}function G(g,ne){if(1&g&&(n.YNc(0,B,1,1,"i",4),n.YNc(1,se,1,1,"i",4)),2&g){const p=n.oxw();n.Q6J("ngIf",!p.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",p.nzReverseArrow)}}function S(g,ne){1&g&&n._UZ(0,"i",6)}function m(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(p);const le=n.oxw();return le.setCollapsed(!le.nzCollapsed)}),n.qZA()}if(2&g){const p=n.oxw();n.Q6J("matchBreakPoint",p.matchBreakPoint)("nzCollapsedWidth",p.nzCollapsedWidth)("nzCollapsed",p.nzCollapsed)("nzBreakpoint",p.nzBreakpoint)("nzReverseArrow",p.nzReverseArrow)("nzTrigger",p.nzTrigger)("nzZeroTrigger",p.nzZeroTrigger)("siderWidth",p.widthSetting)}}let A=(()=>{class g{constructor(p,E){this.elementRef=p,this.renderer=E,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:b,decls:1,vars:0,template:function(p,E){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),$=(()=>{class g{constructor(p,E){this.elementRef=p,this.renderer=E,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:b,decls:1,vars:0,template:function(p,E){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),J=(()=>{class g{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(p,E){2&p&&(n.Udp("width",E.isNormalTrigger?E.siderWidth:null),n.ekj("ant-layout-sider-trigger",E.isNormalTrigger)("ant-layout-sider-zero-width-trigger",E.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",E.isZeroTrigger&&E.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",E.isZeroTrigger&&!E.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:re,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(p,E){1&p&&(n.YNc(0,V,2,1,"ng-container",0),n.YNc(1,L,2,1,"ng-container",0),n.YNc(2,G,2,2,"ng-template",null,1,n.W1O),n.YNc(4,S,1,0,"ng-template",null,2,n.W1O)),2&p&&(n.Q6J("ngIf",E.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",E.isNormalTrigger))},directives:[i.O5,i.tP,M.Ls],encapsulation:2,changeDetection:0}),g})(),d=(()=>{class g{constructor(p,E,le){this.platform=p,this.cdr=E,this.breakpointService=le,this.destroy$=new I.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,u.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(p){p!==this.nzCollapsed&&(this.nzCollapsed=p,this.nzCollapsedChange.emit(p),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(W.ow,!0).pipe((0,_.R)(this.destroy$)).subscribe(p=>{const E=this.nzBreakpoint;E&&(0,u.ov)().subscribe(()=>{this.matchBreakPoint=!p[E],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(p){const{nzCollapsed:E,nzCollapsedWidth:le,nzWidth:Ee}=p;(E||le||Ee)&&this.updateStyleMap(),E&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(T.t4),n.Y36(n.sBO),n.Y36(W.r3))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-sider"]],contentQueries:function(p,E,le){if(1&p&&n.Suo(le,D.wO,5),2&p){let Ee;n.iGM(Ee=n.CRH())&&(E.nzMenuDirective=Ee.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(p,E){2&p&&(n.Udp("flex",E.flexSetting)("max-width",E.widthSetting)("min-width",E.widthSetting)("width",E.widthSetting),n.ekj("ant-layout-sider-zero-width",E.nzCollapsed&&0===E.nzCollapsedWidth)("ant-layout-sider-light","light"===E.nzTheme)("ant-layout-sider-dark","dark"===E.nzTheme)("ant-layout-sider-collapsed",E.nzCollapsed)("ant-layout-sider-has-trigger",E.nzCollapsible&&null!==E.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:b,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(p,E){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,m,1,8,"div",1)),2&p&&(n.xp6(2),n.Q6J("ngIf",E.nzCollapsible&&null!==E.nzTrigger))},directives:[J,i.O5],encapsulation:2,changeDetection:0}),(0,c.gn)([(0,u.yF)()],g.prototype,"nzReverseArrow",void 0),(0,c.gn)([(0,u.yF)()],g.prototype,"nzCollapsible",void 0),(0,c.gn)([(0,u.yF)()],g.prototype,"nzCollapsed",void 0),g})(),Q=(()=>{class g{constructor(p){this.directionality=p,this.dir="ltr",this.destroy$=new I.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(E=>{this.dir=E})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(x.Is,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-layout"]],contentQueries:function(p,E,le){if(1&p&&n.Suo(le,d,4),2&p){let Ee;n.iGM(Ee=n.CRH())&&(E.listOfNzSiderComponent=Ee)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(p,E){2&p&&n.ekj("ant-layout-rtl","rtl"===E.dir)("ant-layout-has-sider",E.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:b,decls:1,vars:0,template:function(p,E){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),U=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[x.vT,i.ez,M.PV,te.xu,T.ud]]}),g})();var q=o(404),ze=o(1894),Te=o(712),Oe=o(373),Me=o(1047),ie=o(3075),Ce=o(2845),pe=o(4832),Se=o(969),K=o(3753),fe=o(2654),k=o(8514),ge=o(6787),de=o(2198),Ae=o(2994),Le=o(6792),$e=o(2986),Ge=o(7545),oe=o(1159),Ie=o(7429),F=o(8076);function ce(g,ne){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const p=n.oxw();n.xp6(1),n.Oqu(p.nzLabel)}}const w=[[["nz-auto-option"]]],_e=["nz-auto-option"],Pe=["*"],be=["panel"],tt=["content"];function nt(g,ne){}function Ke(g,ne){1&g&&n.YNc(0,nt,0,0,"ng-template")}function Ye(g,ne){1&g&&n.Hsn(0)}function C(g,ne){if(1&g&&(n.TgZ(0,"nz-auto-option",8),n._uU(1),n.qZA()),2&g){const p=ne.$implicit;n.Q6J("nzValue",p)("nzLabel",p&&p.label?p.label:p),n.xp6(1),n.hij(" ",p&&p.label?p.label:p," ")}}function He(g,ne){if(1&g&&n.YNc(0,C,2,3,"nz-auto-option",7),2&g){const p=n.oxw(2);n.Q6J("ngForOf",p.nzDataSource)}}function Xe(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"div",0,1),n.NdJ("@slideMotion.done",function(le){return n.CHM(p),n.oxw().onAnimationEvent(le)}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.YNc(4,Ke,1,0,void 0,4),n.qZA(),n.qZA(),n.qZA(),n.YNc(5,Ye,1,0,"ng-template",null,5,n.W1O),n.YNc(7,He,1,1,"ng-template",null,6,n.W1O)}if(2&g){const p=n.MAs(6),E=n.MAs(8),le=n.oxw();n.ekj("ant-select-dropdown-hidden",!le.showPanel)("ant-select-dropdown-rtl","rtl"===le.dir),n.Q6J("ngClass",le.nzOverlayClassName)("ngStyle",le.nzOverlayStyle)("nzNoAnimation",null==le.noAnimation?null:le.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==le.noAnimation?null:le.noAnimation.nzNoAnimation),n.xp6(4),n.Q6J("ngTemplateOutlet",le.nzDataSource?E:p)}}let We=(()=>{class g{constructor(){}}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:_e,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(p,E){1&p&&(n.F$t(w),n.TgZ(0,"div",0),n.YNc(1,ce,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&p&&(n.xp6(1),n.Q6J("nzStringTemplateOutlet",E.nzLabel))},directives:[Se.f],encapsulation:2,changeDetection:0}),g})();class lt{constructor(ne,p=!1){this.source=ne,this.isUserInput=p}}let Qe=(()=>{class g{constructor(p,E,le,Ee){this.ngZone=p,this.changeDetectorRef=E,this.element=le,this.nzAutocompleteOptgroupComponent=Ee,this.nzDisabled=!1,this.selectionChange=new n.vpe,this.mouseEntered=new n.vpe,this.active=!1,this.selected=!1,this.destroy$=new I.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,K.R)(this.element.nativeElement,"mouseenter").pipe((0,de.h)(()=>this.mouseEntered.observers.length>0),(0,_.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,K.R)(this.element.nativeElement,"mousedown").pipe((0,_.R)(this.destroy$)).subscribe(p=>p.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(p=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),p&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,u.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(p=!1){this.selectionChange.emit(new lt(this,p))}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(We,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(p,E){1&p&&n.NdJ("click",function(){return E.selectViaInteraction()}),2&p&&(n.uIk("aria-selected",E.selected.toString())("aria-disabled",E.nzDisabled.toString()),n.ekj("ant-select-item-option-grouped",E.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",E.selected)("ant-select-item-option-active",E.active)("ant-select-item-option-disabled",E.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Pe,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(p,E){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),(0,c.gn)([(0,u.yF)()],g.prototype,"nzDisabled",void 0),g})();const pt={provide:ie.JU,useExisting:(0,n.Gpc)(()=>l),multi:!0};let l=(()=>{class g{constructor(p,E,le,Ee,et){this.elementRef=p,this.overlay=E,this.viewContainerRef=le,this.nzInputGroupWhitSuffixOrPrefixDirective=Ee,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new I.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,_.R)(this.destroy$)).subscribe(p=>{"void"===p.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(p){Promise.resolve(null).then(()=>this.setTriggerValue(p))}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}setDisabledState(p){this.elementRef.nativeElement.disabled=p,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(p){const E=p.keyCode,le=E===oe.LH||E===oe.JH;E===oe.hY&&p.preventDefault(),!this.panelOpen||E!==oe.hY&&E!==oe.Mf?this.panelOpen&&E===oe.K5?this.nzAutocomplete.showPanel&&(p.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&le&&this.nzAutocomplete.showPanel&&(p.stopPropagation(),p.preventDefault(),E===oe.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(p){const E=p.target,le=this.document;let Ee=E.value;"number"===E.type&&(Ee=""===Ee?null:parseFloat(Ee)),this.previousValue!==Ee&&(this.previousValue=Ee,this.onChange(Ee),this.canOpen()&&le.activeElement===p.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Ae.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Le.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(p=>{this.setValueAndClose(p)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,de.h)(p=>!this.elementRef.nativeElement.contains(p.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function v(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Ie.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Ce.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const p=[new Ce.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Ce.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(p).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const p=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==p?(this.nzAutocomplete.setActiveItem(p),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(p){const E=p.nzValue;this.setTriggerValue(p.getLabel()),this.onChange(E),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(p){const E=this.nzAutocomplete.getOption(p),le=E?E.getLabel():p;this.elementRef.nativeElement.value=null!=le?le:"",this.nzAutocomplete.nzBackfill||(this.previousValue=le)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const p=this.elementRef.nativeElement;return!p.readOnly&&!p.disabled}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.SBq),n.Y36(Ce.aV),n.Y36(n.s_b),n.Y36(Me.ke,8),n.Y36(i.K0,8))},g.\u0275dir=n.lG2({type:g,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(p,E){1&p&&n.NdJ("focusin",function(){return E.handleFocus()})("blur",function(){return E.handleBlur()})("input",function(Ee){return E.handleInput(Ee)})("keydown",function(Ee){return E.handleKeydown(Ee)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([pt])]}),g})(),he=(()=>{class g{constructor(p,E,le,Ee){this.changeDetectorRef=p,this.ngZone=E,this.directionality=le,this.noAnimation=Ee,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Qt)=>et===Qt,this.selectionChange=new n.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new I.xQ,this.animationStateChange=new n.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=fe.w.EMPTY,this.optionMouseEnterSubscription=fe.w.EMPTY,this.dataSourceChangeSubscription=fe.w.EMPTY,this.optionSelectionChanges=(0,k.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,$e.q)(1),(0,Ge.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,k.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,$e.q)(1),(0,Ge.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var p;null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(E=>{this.dir=E,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(p){this.animationStateChange.emit(p)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(p){const E=this.options.get(p);E&&!E.active?(this.activeItem=E,this.activeItemIndex=p,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(p){return this.options.reduce((E,le,Ee)=>-1===E?this.compareWith(p,le.nzValue)?Ee:-1:E,-1)}getOption(p){return this.options.find(E=>this.compareWith(p,E.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(E=>{!E.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(p,E=!1){this.options.forEach(le=>{le!==p&&(E&&le.deselect(),le.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,de.h)(p=>p.isUserInput)).subscribe(p=>{p.source.select(),p.source.setActiveStyles(),this.activeItem=p.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p.source,!0),this.selectionChange.emit(p.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(p=>{p.setActiveStyles(),this.activeItem=p,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p)})}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36(x.Is,8),n.Y36(pe.P,9))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-autocomplete"]],contentQueries:function(p,E,le){if(1&p&&n.Suo(le,Qe,5),2&p){let Ee;n.iGM(Ee=n.CRH())&&(E.fromContentOptions=Ee)}},viewQuery:function(p,E){if(1&p&&(n.Gf(n.Rgc,5),n.Gf(be,5),n.Gf(tt,5),n.Gf(Qe,5)),2&p){let le;n.iGM(le=n.CRH())&&(E.template=le.first),n.iGM(le=n.CRH())&&(E.panel=le.first),n.iGM(le=n.CRH())&&(E.content=le.first),n.iGM(le=n.CRH())&&(E.fromDataSourceOptions=le)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Pe,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(p,E){1&p&&(n.F$t(),n.YNc(0,Xe,9,10,"ng-template"))},directives:[Qe,i.mk,i.PC,pe.P,i.tP,i.sg],encapsulation:2,data:{animation:[F.mF]},changeDetection:0}),(0,c.gn)([(0,u.yF)()],g.prototype,"nzDefaultActiveFirstOption",void 0),(0,c.gn)([(0,u.yF)()],g.prototype,"nzBackfill",void 0),g})(),z=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[x.vT,i.ez,Ce.U8,ie.u5,Se.T,pe.g,Me.o7]]}),g})();var f=o(6949);function me(g,ne){1&g&&n._UZ(0,"i",5)}function ye(g,ne){if(1&g){const p=n.EpF();n.ynx(0),n.TgZ(1,"a",6),n.TgZ(2,"nz-auto-option",7),n.NdJ("click",function(){n.CHM(p);const le=n.oxw();return le.searchQuery="",le.refresh()}),n.TgZ(3,"span"),n._UZ(4,"i",8),n._uU(5," \xa0 "),n._UZ(6,"span",9),n._UZ(7,"br"),n._UZ(8,"span",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&g){const p=ne.$implicit,E=n.oxw();n.xp6(1),n.Q6J("routerLink",E.urlForResult(p)),n.xp6(1),n.Q6J("nzValue",E.urlForResult(p)),n.xp6(2),n.Q6J("nzType",E.iconNameForResult(p)),n.xp6(2),n.s9C("innerHTML",p.name,n.oJD),n.xp6(2),n.s9C("innerHTML",p.matchingText,n.oJD)}}let Fe=(()=>{class g{constructor(p,E){this.gql=p,this.router=E,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,Oe.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(p){switch(p.resultType){case Te.rZD.EvidenceItem:return"civic:evidence";case Te.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${p.resultType.toLowerCase()}`}}urlForResult(p){let E;switch(p.resultType){case Te.rZD.VariantGroup:E="variant-groups";break;case Te.rZD.EvidenceItem:E="evidence";break;default:E=`${p.resultType.toLowerCase()}s`}return`/${E}/${p.id}/summary`}quicksearchSelected(p){let E=p.target.value;this.searchQuery="",this.router.navigate([E])}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(Te.ghc),n.Y36(t.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(p,E){if(1&p&&(n.TgZ(0,"nz-input-group",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(Ee){return E.searchQuery=Ee})("ngModelChange",function(){return E.refresh()})("keyup.enter",function(Ee){return E.quicksearchSelected(Ee)}),n.qZA(),n.qZA(),n.YNc(2,me,1,0,"ng-template",null,2,n.W1O),n.TgZ(4,"nz-autocomplete",null,3),n.YNc(6,ye,9,5,"ng-container",4),n.ALo(7,"ngrxPush"),n.qZA()),2&p){const le=n.MAs(3),Ee=n.MAs(5);n.Q6J("nzSuffix",le),n.xp6(1),n.Q6J("ngModel",E.searchQuery)("nzAutocomplete",Ee),n.xp6(5),n.Q6J("ngForOf",n.lcZ(7,4,E.searchResults$))}},directives:[Me.gB,Me.ke,Me.Zp,ie.Fj,l,ie.JJ,ie.On,M.Ls,he,i.sg,t.yS,Qe],pipes:[f.fM],styles:[""]}),g})();var Be=o(1912),Re=o(4850),Ue=o(1059),ke=o(2340),Je=o(8144),qe=o(6042),rt=o(2643),ct=o(2683),Ve=o(3677),ot=o(4401),ut=o(7881),st=o(3640),y=o(8785),ee=o(3434);function R(g,ne){if(1&g&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&g){n.oxw(2);const p=n.MAs(15);n.Q6J("nzDropdownMenu",p)}}const ue=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function De(g,ne){if(1&g&&(n.TgZ(0,"nz-badge",28),n.TgZ(1,"button",29),n._UZ(2,"i",30),n.qZA(),n.qZA()),2&g){const p=n.oxw().ngrxLet,E=n.oxw().ngIf;n.Q6J("nzCount",p)("nzOverflowCount",999)("nzStyle",n.DdM(4,ue)),n.xp6(1),n.MGl("routerLink","/users/",E.id,"/notifications")}}const xe=function(g){return{"update-coi":g}};function mt(g,ne){if(1&g&&n._UZ(0,"cvc-user-avatar",36),2&g){const p=n.oxw(3).ngIf;n.Q6J("user",p)("size",22)("ngClass",n.VKq(3,xe,p.invalidCoi))}}function gt(g,ne){if(1&g&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&g){const p=n.oxw(3).ngIf;n.xp6(1),n.Oqu(p.username)}}function ft(g,ne){1&g&&n._UZ(0,"i",27)}function ht(g,ne){if(1&g&&(n.TgZ(0,"button",31),n.TgZ(1,"nz-space",32),n.YNc(2,mt,1,5,"cvc-user-avatar",33),n.YNc(3,gt,2,1,"div",34),n.YNc(4,ft,1,0,"i",35),n.qZA(),n.qZA()),2&g){n.oxw(2);const p=n.MAs(3);n.Q6J("nzDropdownMenu",p)}}function vt(g,ne){1&g&&(n.TgZ(0,"nz-space",22),n.YNc(1,R,3,1,"button",23),n.YNc(2,De,3,5,"nz-badge",24),n.YNc(3,ht,5,1,"button",25),n.qZA())}function zt(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"button",38),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA(),n.qZA()}}function _t(g,ne){1&g&&n._UZ(0,"li",14)}function Ct(g,ne){1&g&&(n.TgZ(0,"li",40),n.TgZ(1,"a",41),n._uU(2," Admin Console "),n.qZA(),n.qZA())}function yt(g,ne){1&g&&(n.TgZ(0,"li",42),n.TgZ(1,"a",43),n._uU(2," Background Workers "),n.qZA(),n.qZA())}function Tt(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"a",44),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA(),n.qZA()}}const It=function(g){return["/users",g]};function Et(g,ne){if(1&g){const p=n.EpF();n.ynx(0),n.YNc(1,vt,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7),n.TgZ(4,"ul",8),n.YNc(5,zt,4,0,"li",9),n.YNc(6,_t,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Ct,3,0,"li",12),n.YNc(10,yt,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(p),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"nz-dropdown-menu",null,16),n.TgZ(16,"ul",8),n.TgZ(17,"li",17),n.TgZ(18,"a",18),n._uU(19," Evidence Item "),n.qZA(),n.qZA(),n.TgZ(20,"li",17),n.TgZ(21,"a",19),n._uU(22," Assertion "),n.qZA(),n.qZA(),n.TgZ(23,"li",17),n.TgZ(24,"a",20),n._uU(25," Source Suggestion "),n.qZA(),n.qZA(),n.YNc(26,Tt,3,0,"li",9),n.TgZ(27,"li",17),n.TgZ(28,"a",21),n._uU(29," Variant Group "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&g){const p=ne.ngIf,E=n.oxw();n.xp6(1),n.Q6J("ngrxLet",E.unreadCount$),n.xp6(4),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,It,p.id)),n.xp6(2),n.Q6J("ngIf",p.isAdmin),n.xp6(1),n.Q6J("ngIf",p.isAdmin),n.xp6(16),n.Q6J("ngIf",p.isEditor)}}function Dt(g,ne){1&g&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function St(g,ne){if(1&g){const p=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(p),n.oxw().coiUpdated()}),n.qZA()}}function Ot(g,ne){1&g&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function At(g,ne){1&g&&n._UZ(0,"cvc-variant-submit-form")}let Mt=(()=>{class g{constructor(p,E){this.queryService=p,this.unreadCountGql=E,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,Re.U)(({data:le})=>le.notifications.unreadCount),(0,Ue.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Re.U)(({data:le})=>le.notifications.unreadCount),(0,Ue.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(s.a),n.Y36(Te.Kmw))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(p,E){if(1&p&&(n.YNc(0,Et,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ee){return E.coiUpdateModalVisible=Ee})("nzOnCancel",function(){return E.handleCoiModalCancel()}),n.YNc(3,Dt,2,0,"ng-template",null,2,n.W1O),n.YNc(5,St,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ee){return E.addVariantModalVisible=Ee})("nzOnCancel",function(){return E.addVariantModalVisible=!1}),n.YNc(8,Ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,At,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&p){const le=n.MAs(4),Ee=n.MAs(6),et=n.MAs(9),Qt=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,E.viewer$)),n.xp6(2),n.Q6J("nzVisible",E.coiUpdateModalVisible)("nzContent",Ee)("nzTitle",le)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",E.addVariantModalVisible)("nzContent",Qt)("nzTitle",et)("nzFooter",null)}},directives:[i.O5,f.eJ,Je.NU,Je.$1,qe.ix,rt.dQ,ct.w,Ve.wA,Ve.cm,M.Ls,ot.x7,t.rH,ut.L,i.mk,Ve.RR,D.wO,D.r9,D.YV,t.yS,st.du,y.t,ee.G],pipes:[f.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),g})();function Nt(g,ne){1&g&&n._UZ(0,"img",60)}function xt(g,ne){1&g&&n._UZ(0,"img",61)}function Lt(g,ne){1&g&&n._UZ(0,"cvc-login-button")}function Pt(g,ne){1&g&&n._UZ(0,"cvc-viewer-button")}const at=function(g){return{"is-collapsed":g}},Ft=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class g{constructor(p){this.viewerService=p,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return g.\u0275fac=function(p){return new(p||g)(n.Y36(s.a))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-layout"]],decls:129,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(p,E){1&p&&(n.TgZ(0,"nz-layout",0),n.TgZ(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(Ee){return E.isCollapsed=Ee}),n.TgZ(2,"a",2),n.TgZ(3,"div",3),n.YNc(4,Nt,1,0,"img",4),n.YNc(5,xt,1,0,"img",5),n.qZA(),n.qZA(),n.TgZ(6,"ul",6),n.TgZ(7,"li",7),n.TgZ(8,"ul"),n.TgZ(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span"),n.TgZ(12,"a",10),n._uU(13,"Assertions"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span"),n.TgZ(17,"a",12),n._uU(18,"Evidence"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span"),n.TgZ(22,"a",14),n._uU(23,"Genes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span"),n.TgZ(27,"a",16),n._uU(28,"Variants"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span"),n.TgZ(32,"a",18),n._uU(33,"Variant Groups"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span"),n.TgZ(37,"a",20),n._uU(38,"Clinical Trials"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span"),n.TgZ(42,"a",22),n._uU(43,"Diseases"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span"),n.TgZ(47,"a",24),n._uU(48,"Drugs"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span"),n.TgZ(52,"a",26),n._uU(53,"Phenotypes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span"),n.TgZ(57,"a",28),n._uU(58,"Sources"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span"),n.TgZ(62,"a",30),n._uU(63,"Variant Types"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(64,"li",7),n.TgZ(65,"ul"),n.TgZ(66,"li",8),n._UZ(67,"i",31),n.TgZ(68,"span"),n.TgZ(69,"a",32),n._uU(70," Activity "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span"),n.TgZ(74,"a",34),n._uU(75,"Queues"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span"),n.TgZ(79,"a",36),n._uU(80,"Search"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(81,"li",7),n.TgZ(82,"ul"),n.TgZ(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span"),n.TgZ(86,"a",38),n._uU(87,"Contributors"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span"),n.TgZ(91,"a",40),n._uU(92,"Organizations"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(93,"li",7),n.TgZ(94,"ul"),n.TgZ(95,"li",8),n._UZ(96,"i",41),n.TgZ(97,"span"),n.TgZ(98,"a",42),n._uU(99,"Data Releases"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(100,"div",43),n._UZ(101,"img",44),n._UZ(102,"img",45),n.qZA(),n.qZA(),n.TgZ(103,"nz-layout",46),n.TgZ(104,"nz-header"),n.TgZ(105,"div",47),n.TgZ(106,"div",48),n.TgZ(107,"span",49),n.NdJ("click",function(){return E.isCollapsed=!E.isCollapsed}),n._UZ(108,"i",50),n.qZA(),n.qZA(),n.TgZ(109,"div",51),n._UZ(110,"cvc-quicksearch"),n.qZA(),n.TgZ(111,"div",52),n.TgZ(112,"ul",53),n.TgZ(113,"li",54),n.TgZ(114,"a",55),n._uU(115,"Home"),n.qZA(),n.qZA(),n.TgZ(116,"li",54),n.TgZ(117,"a",56),n._uU(118,"About CIViC"),n.qZA(),n.qZA(),n.TgZ(119,"li",54),n.TgZ(120,"a",57),n._uU(121,"Help"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(122,"div",58),n.YNc(123,Lt,1,0,"cvc-login-button",59),n.ALo(124,"async"),n.YNc(125,Pt,1,0,"cvc-viewer-button",59),n.ALo(126,"async"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(127,"nz-content"),n._UZ(128,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&p&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",E.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(39,at,E.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!E.isCollapsed),n.xp6(1),n.Q6J("ngIf",E.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(41,at,E.isCollapsed))("nzInlineCollapsed",E.isCollapsed),n.xp6(1),n.Q6J("nzTitle",E.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(43,at,E.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(45,at,E.isCollapsed)),n.xp6(5),n.Q6J("nzType",E.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(124,35,E.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(126,37,E.signedIn$)))},directives:[Q,d,t.yS,i.mk,i.O5,D.wO,D.uA,D.r9,q.SY,M.Ls,$,ze.SK,ze.t3,Fe,Be.s,Mt,A,t.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),g})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(136)]).then(o.bind(o,136)).then(g=>g.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7717),o.e(1838)]).then(o.bind(o,1838)).then(g=>g.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(233)]).then(o.bind(o,233)).then(g=>g.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1592)]).then(o.bind(o,1592)).then(g=>g.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7727)]).then(o.bind(o,7727)).then(g=>g.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(3664),o.e(392),o.e(850),o.e(2536)]).then(o.bind(o,2536)).then(g=>g.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(g=>g.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1076)]).then(o.bind(o,1076)).then(g=>g.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(2033),o.e(3278),o.e(7717),o.e(8592),o.e(7465)]).then(o.bind(o,9802)).then(g=>g.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(392),o.e(3278),o.e(850),o.e(1862)]).then(o.bind(o,684)).then(g=>g.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(g=>g.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(3664),o.e(79)]).then(o.bind(o,79)).then(g=>g.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(g=>g.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(g=>g.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(5193),o.e(4025),o.e(9001),o.e(2826),o.e(6724),o.e(9716),o.e(376),o.e(6113)]).then(o.bind(o,4340)).then(g=>g.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(g=>g.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(g=>g.PagesModule),data:{breadcrumb:"Pages"}}]}];let Rt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[t.Bz.forChild(Ft)],t.Bz]}),g})();var bt=o(3618),$t=o(5109),Jt=o(4546);let jt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,ie.u5,t.Bz,f.WG,Me.o7,Jt.U5,M.PV,z]]}),g})();var Kt=o(1844),Ht=o(5473),Yt=o(330),Xt=o(7058);let qt=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,f.WG,Ve.b1,t.Bz,qe.sL,Je.zf,M.PV,ot.mS,q.cg,st.Qp,Ht.H,Yt.e,Xt.e]]}),g})(),en=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[i.ez,Rt,M.PV,ze.Jb,U,D.ip,q.cg,bt.ZJ,$t.s,Kt.B,qt,jt]]}),g})()},6792:(ve,X,o)=>{o.d(X,{g:()=>I});var i=o(353),n=o(3489),s=o(9312);function I(u,D=i.P){const M=function t(u){return u instanceof Date&&!isNaN(+u)}(u)?+u-D.now():Math.abs(u);return x=>x.lift(new _(M,D))}class _{constructor(D,T){this.delay=D,this.scheduler=T}call(D,T){return T.subscribe(new c(D,this.delay,this.scheduler))}}class c extends n.L{constructor(D,T,M){super(D),this.delay=T,this.scheduler=M,this.queue=[],this.active=!1,this.errored=!1}static dispatch(D){const T=D.source,M=T.queue,x=D.scheduler,te=D.destination;for(;M.length>0&&M[0].time-x.now()<=0;)M.shift().notification.observe(te);if(M.length>0){const b=Math.max(0,M[0].time-x.now());this.schedule(D,b)}else this.unsubscribe(),T.active=!1}_schedule(D){this.active=!0,this.destination.add(D.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:D}))}scheduleNotification(D){if(!0===this.errored)return;const T=this.scheduler,M=new W(T.now()+this.delay,D);this.queue.push(M),!1===this.active&&this._schedule(T)}_next(D){this.scheduleNotification(s.P.createNext(D))}_error(D){this.errored=!0,this.queue=[],this.destination.error(D),this.unsubscribe()}_complete(){this.scheduleNotification(s.P.createComplete()),this.unsubscribe()}}class W{constructor(D,T){this.time=D,this.notification=T}}},373:(ve,X,o)=>{o.d(X,{j:()=>t});var i=o(4850);function t(...s){const I=s.length;if(0===I)throw new Error("list of properties cannot be empty.");return _=>(0,i.U)(function n(s,I){return c=>{let W=c;for(let u=0;u<I;u++){const D=null!=W?W[s[u]]:void 0;if(void 0===D)return;W=D}return W}}(s,I))(_)}},3164:(ve,X,o)=>{o.d(X,{p:()=>c});var i=o(3489),t=o(353);const n={leading:!0,trailing:!1};function c(T,M=t.P,x=n){return te=>te.lift(new W(T,M,x.leading,x.trailing))}class W{constructor(M,x,te,b){this.duration=M,this.scheduler=x,this.leading=te,this.trailing=b}call(M,x){return x.subscribe(new u(M,this.duration,this.scheduler,this.leading,this.trailing))}}class u extends i.L{constructor(M,x,te,b,re){super(M),this.duration=x,this.scheduler=te,this.leading=b,this.trailing=re,this._hasTrailingValue=!1,this._trailingValue=null}_next(M){this.throttled?this.trailing&&(this._trailingValue=M,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(D,this.duration,{subscriber:this})),this.leading?this.destination.next(M):this.trailing&&(this._trailingValue=M,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const M=this.throttled;M&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),M.unsubscribe(),this.remove(M),this.throttled=null)}}function D(T){const{subscriber:M}=T;M.clearThrottle()}},444:(ve,X,o)=>{function i(S){return S!==String(parseFloat(S))}o.d(X,{o6:()=>G});var I=Object.getOwnPropertyNames?function t(S){return Object.getOwnPropertyNames(S).filter(function(m){return S.propertyIsEnumerable(m)&&i(m)})}:Object.keys?function n(S){return Object.keys(S).filter(i)}:function s(S){var m=[];for(var A in S)S.hasOwnProperty(A)&&S.propertyIsEnumerable(A)&&i(A)&&m.push(A);return m},_=function(){function S(m){this.enumObj=m,this.keysList=Object.freeze(I(m));for(var A=this.keysList.length,P=new Array(A),$=new Map,J=0;J<A;++J){var d=this.keysList[J],Q=m[d];P[J]=Q,$.set(Q,d),this[J]=Object.freeze([d,Q])}this.valuesList=Object.freeze(P),this.keysByValueMap=$,this.size=this.length=A,Object.freeze(this)}return S.prototype.toString=function(){return"[object EnumWrapper]"},S.prototype.keys=function(){var m,A=this,P=0;return(m={next:function(){var J={done:P>=A.length,value:A.keysList[P]};return++P,J}})[Symbol.iterator]=function(){return this},m},S.prototype.values=function(){var m,A=this,P=0;return(m={next:function(){var J={done:P>=A.length,value:A.valuesList[P]};return++P,J}})[Symbol.iterator]=function(){return this},m},S.prototype.entries=function(){var m,A=this,P=0;return(m={next:function(){var J={done:P>=A.length,value:A[P]};return++P,J}})[Symbol.iterator]=function(){return this},m},S.prototype[Symbol.iterator]=function(){return this.entries()},S.prototype.forEach=function(m,A){for(var P=this.length,$=0;$<P;++$){var J=this[$];m.call(A,J[1],J[0],this,$)}},S.prototype.map=function(m,A){for(var P=this.length,$=new Array(P),J=0;J<P;++J){var d=this[J];$[J]=m.call(A,d[1],d[0],this,J)}return $},S.prototype.getKeys=function(){return this.keysList.slice()},S.prototype.getValues=function(){return this.valuesList.slice()},S.prototype.getEntries=function(){return Array.prototype.slice.call(this)},S.prototype.indexOfKey=function(m){return this.keysList.indexOf(m)},S.prototype.indexOfValue=function(m){return this.valuesList.indexOf(m)},S.prototype.isKey=function(m){return null!=m&&i(m)&&this.enumObj.hasOwnProperty(m)},S.prototype.asKeyOrThrow=function(m){if(this.isKey(m))return m;throw new Error("Unexpected key: "+m+". Expected one of: "+this.getValues())},S.prototype.asKeyOrDefault=function(m,A){return this.isKey(m)?m:A},S.prototype.isValue=function(m){return null!=m&&this.keysByValueMap.has(m)},S.prototype.asValueOrThrow=function(m){if(this.isValue(m))return m;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},S.prototype.asValueOrDefault=function(m,A){return this.isValue(m)?m:A},S.prototype.getKeyOrThrow=function(m){var A=null!=m?this.keysByValueMap.get(m):void 0;if(null!=A)return A;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},S.prototype.getKeyOrDefault=function(m,A){var P=null!=m?this.keysByValueMap.get(m):void 0;return null!=P?P:A},S.prototype.getValueOrThrow=function(m){return this.enumObj[this.asKeyOrThrow(m)]},S.prototype.getValueOrDefault=function(m,A){return this.isKey(m)?this.enumObj[m]:A},S}();_.prototype[Symbol.toStringTag]="EnumWrapper";var c=Symbol("ts-enum-util:unhandledEntry"),W=Symbol("ts-enum-util:handleNull"),u=Symbol("ts-enum-util:handleUndefined"),D=Symbol("ts-enum-util:handleUnexpected");function T(S){return new Error("Unhandled value: "+S)}var M=function(){function S(m){this.value=m}return S.prototype.with=function(m){if(m.hasOwnProperty(this.value))return b(m[this.value],this.value);if(m[D])return b(m[D],this.value);throw new Error("Unexpected value: "+this.value)},S}(),x=function(){function S(){}return S.prototype.with=function(m){if(m[W])return b(m[W],null);if(m[D])return b(m[D],null);throw new Error("Unexpected value: null")},S}(),te=function(){function S(){}return S.prototype.with=function(m){if(m[u])return b(m[u],void 0);if(m[D])return b(m[D],void 0);throw new Error("Unexpected value: undefined")},S}();function b(S,m){if(S===c)throw T(m);return S(m)}var re=function(){function S(m){this.value=m}return S.prototype.with=function(m){if(m.hasOwnProperty(this.value))return Y(m[this.value],this.value);if(m.hasOwnProperty(D))return Y(m[D],this.value);throw new Error("Unexpected value: "+this.value)},S}(),j=function(){function S(){}return S.prototype.with=function(m){if(m.hasOwnProperty(W))return Y(m[W],null);if(m.hasOwnProperty(D))return Y(m[D],null);throw new Error("Unexpected value: null")},S}(),V=function(){function S(){}return S.prototype.with=function(m){if(m.hasOwnProperty(u))return Y(m[u],void 0);if(m.hasOwnProperty(D))return Y(m[D],void 0);throw new Error("Unexpected value: undefined")},S}();function Y(S,m){if(S===c)throw T(m);return S}var se=new WeakMap;function G(S){var m=se.get(S);return m||(m=new _(S),se.set(S,m)),m}G.handleNull=W,G.handleUndefined=u,G.handleUnexpected=D,G.unhandledEntry=c,G.visitValue=function L(S){return null===S?new x:void 0===S?new te:new M(S)},G.mapValue=function B(S){return null===S?new j:void 0===S?new V:new re(S)}},9552:(ve,X,o)=>{o.d(X,{$:()=>A,j:()=>P});var i=o(655),t=o(9808),n=o(5e3),s=o(2654),I=o(839),_=o(8929),c=o(6787),W=o(3753),u=o(7625),D=o(4850),T=o(3164),M=o(9439),x=o(1721),te=o(4090),b=o(925),re=o(5577),j=o(226);const V=["fixedEl"],Y=["*"];var L=(()=>{return($=L||(L={})).resize="resize",$.scroll="scroll",$.touchstart="touchstart",$.touchmove="touchmove",$.touchend="touchend",$.pageshow="pageshow",$.load="LOAD",L;var $})();function se($){return function B($){return"undefined"!=typeof window&&$===window}($)?{top:0,left:0,bottom:0}:$.getBoundingClientRect()}const S="ant-affix";let A=(()=>{class ${constructor(d,Q,U,q,ze,Te,Oe,Me,ie,Ce){this.nzConfigService=U,this.scrollSrv=q,this.ngZone=ze,this.platform=Te,this.renderer=Oe,this.nzResizeObserver=Me,this.cdr=ie,this.directionality=Ce,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new I.t(1),this.destroy$=new _.xQ,this.placeholderNode=d.nativeElement,this.document=Q}get target(){const d=this.nzTarget;return("string"==typeof d?this.document.querySelector(d):d)||window}ngOnInit(){var d;null===(d=this.directionality.change)||void 0===d||d.pipe((0,u.R)(this.destroy$)).subscribe(Q=>{this.dir=Q,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(d){const{nzOffsetBottom:Q,nzOffsetTop:U,nzTarget:q}=d;(Q||U)&&this.offsetChanged$.next(),q&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const d=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,c.T)(...Object.keys(L).map(Q=>(0,W.R)(this.target,Q)),this.offsetChanged$.pipe((0,D.U)(()=>({}))),this.nzResizeObserver.observe(d)).pipe((0,T.p)(20,void 0,{trailing:!0}),(0,u.R)(this.destroy$)).subscribe(Q=>this.updatePosition(Q))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(d,Q){const U=d.getBoundingClientRect(),q=se(Q),ze=this.scrollSrv.getScroll(Q,!0),Te=this.scrollSrv.getScroll(Q,!1),Oe=this.document.body;return{top:U.top-q.top+ze-(Oe.clientTop||0),left:U.left-q.left+Te-(Oe.clientLeft||0),width:U.width,height:U.height}}setAffixStyle(d,Q){const U=this.affixStyle,q=this.target===window;if("scroll"===d.type&&U&&Q&&q||(0,x.wU)(U,Q))return;const ze=!!Q,Te=this.fixedEl.nativeElement;this.renderer.setStyle(Te,"cssText",(0,x.GM)(Q)),this.affixStyle=Q,ze?Te.classList.add(S):Te.classList.remove(S),this.updateRtlClass(),(Q&&!U||!Q&&U)&&this.nzChange.emit(ze)}setPlaceholderStyle(d){(0,x.wU)(d,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,x.GM)(d)),this.placeholderStyle=d)}syncPlaceholderStyle(d){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const Q={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),Q)),this.setPlaceholderStyle(Q)}updatePosition(d){if(!this.platform.isBrowser)return;const Q=this.target;let U=this.nzOffsetTop;const q=this.scrollSrv.getScroll(Q,!0),ze=this.getOffset(this.placeholderNode,Q),Te=this.fixedEl.nativeElement,Oe={width:Te.offsetWidth,height:Te.offsetHeight},Me={top:!1,bottom:!1};"number"!=typeof U&&"number"!=typeof this.nzOffsetBottom?(Me.top=!0,U=0):(Me.top="number"==typeof U,Me.bottom="number"==typeof this.nzOffsetBottom);const ie=se(Q),Ce=Q.innerHeight||Q.clientHeight;if(q>=ze.top-U&&Me.top){const pe=ze.width;this.setAffixStyle(d,{position:"fixed",top:ie.top+U,left:ie.left+ze.left,width:pe}),this.setPlaceholderStyle({width:pe,height:Oe.height})}else if(q<=ze.top+Oe.height+this.nzOffsetBottom-Ce&&Me.bottom){const pe=Q===window?0:window.innerHeight-ie.bottom,Se=ze.width;this.setAffixStyle(d,{position:"fixed",bottom:pe+this.nzOffsetBottom,left:ie.left+ze.left,width:Se}),this.setPlaceholderStyle({width:Se,height:ze.height})}else d.type===L.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(d),this.setPlaceholderStyle();"resize"===d.type&&this.syncPlaceholderStyle(d)}updateRtlClass(){const d=this.fixedEl.nativeElement;"rtl"===this.dir&&d.classList.contains(S)?d.classList.add(`${S}-rtl`):d.classList.remove(`${S}-rtl`)}}return $.\u0275fac=function(d){return new(d||$)(n.Y36(n.SBq),n.Y36(t.K0),n.Y36(M.jY),n.Y36(te.MF),n.Y36(n.R0b),n.Y36(b.t4),n.Y36(n.Qsj),n.Y36(re.D3),n.Y36(n.sBO),n.Y36(j.Is,8))},$.\u0275cmp=n.Xpm({type:$,selectors:[["nz-affix"]],viewQuery:function(d,Q){if(1&d&&n.Gf(V,7),2&d){let U;n.iGM(U=n.CRH())&&(Q.fixedEl=U.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:Y,decls:3,vars:0,consts:[["fixedEl",""]],template:function(d,Q){1&d&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,M.oS)(),(0,x.Rn)(void 0)],$.prototype,"nzOffsetTop",void 0),(0,i.gn)([(0,M.oS)(),(0,x.Rn)(void 0)],$.prototype,"nzOffsetBottom",void 0),$})(),P=(()=>{class ${}return $.\u0275fac=function(d){return new(d||$)},$.\u0275mod=n.oAB({type:$}),$.\u0275inj=n.cJS({imports:[[j.vT,t.ez,b.ud]]}),$})()},6699:(ve,X,o)=>{o.d(X,{Dz:()=>b,Rt:()=>j});var i=o(655),t=o(5e3),n=o(9439),s=o(1721),I=o(925),_=o(9808),c=o(647),W=o(226);const u=["textEl"];function D(V,Y){if(1&V&&t._UZ(0,"i",3),2&V){const L=t.oxw();t.Q6J("nzType",L.nzIcon)}}function T(V,Y){if(1&V){const L=t.EpF();t.TgZ(0,"img",4),t.NdJ("error",function(se){return t.CHM(L),t.oxw().imgError(se)}),t.qZA()}if(2&V){const L=t.oxw();t.Q6J("src",L.nzSrc,t.LSH),t.uIk("srcset",L.nzSrcSet,t.LSH)("alt",L.nzAlt)}}function M(V,Y){if(1&V&&(t.TgZ(0,"span",5,6),t._uU(2),t.qZA()),2&V){const L=t.oxw();t.Q6J("ngStyle",L.textStyles),t.xp6(2),t.Oqu(L.nzText)}}let b=(()=>{class V{constructor(L,B,se,G){this.nzConfigService=L,this.elementRef=B,this.cdr=se,this.platform=G,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new t.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(L){this.nzError.emit(L),L.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const L=this.textEl.nativeElement.offsetWidth,B=this.el.getBoundingClientRect().width,se=2*this.nzGap<B?2*this.nzGap:8;this.textStyles={transform:`scale(${B-se<L?(B-se)/L:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(L){return new(L||V)(t.Y36(n.jY),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(I.t4))},V.\u0275cmp=t.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(L,B){if(1&L&&t.Gf(u,5),2&L){let se;t.iGM(se=t.CRH())&&(B.textEl=se.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(L,B){2&L&&(t.Udp("width",B.customSize)("height",B.customSize)("line-height",B.customSize)("font-size",B.hasIcon&&B.customSize?B.nzSize/2:null,"px"),t.ekj("ant-avatar-lg","large"===B.nzSize)("ant-avatar-sm","small"===B.nzSize)("ant-avatar-square","square"===B.nzShape)("ant-avatar-circle","circle"===B.nzShape)("ant-avatar-icon",B.nzIcon)("ant-avatar-image",B.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[t.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(L,B){1&L&&(t.YNc(0,D,1,1,"i",0),t.YNc(1,T,1,3,"img",1),t.YNc(2,M,3,2,"span",2)),2&L&&(t.Q6J("ngIf",B.nzIcon&&B.hasIcon),t.xp6(1),t.Q6J("ngIf",B.nzSrc&&B.hasSrc),t.xp6(1),t.Q6J("ngIf",B.nzText&&B.hasText))},directives:[_.O5,c.Ls,_.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,n.oS)()],V.prototype,"nzShape",void 0),(0,i.gn)([(0,n.oS)()],V.prototype,"nzSize",void 0),(0,i.gn)([(0,n.oS)(),(0,s.Rn)()],V.prototype,"nzGap",void 0),V})(),j=(()=>{class V{}return V.\u0275fac=function(L){return new(L||V)},V.\u0275mod=t.oAB({type:V}),V.\u0275inj=t.cJS({imports:[[W.vT,_.ez,c.PV,I.ud]]}),V})()},4401:(ve,X,o)=>{o.d(X,{x7:()=>P,mS:()=>J,F9:()=>$});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),I=o(8076),_=o(9439),c=o(1721),W=o(226),u=o(4832),D=o(9808),T=o(969),M=o(7144);function x(d,Q){if(1&d&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&d){const U=Q.$implicit,q=t.oxw(2).index,ze=t.oxw(2);t.ekj("current",U===ze.countArray[q]),t.xp6(1),t.hij(" ",U," ")}}function te(d,Q){if(1&d&&(t.ynx(0),t.YNc(1,x,2,3,"p",5),t.BQk()),2&d){const U=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",U.countSingleArray)}}function b(d,Q){if(1&d&&(t.TgZ(0,"span",3),t.YNc(1,te,2,1,"ng-container",4),t.qZA()),2&d){const U=Q.index,q=t.oxw(2);t.Udp("transform","translateY("+100*-q.countArray[U]+"%)"),t.Q6J("nzNoAnimation",q.noAnimation),t.xp6(1),t.Q6J("ngIf",!q.nzDot&&void 0!==q.countArray[U])}}function re(d,Q){if(1&d&&(t.ynx(0),t.YNc(1,b,2,4,"span",2),t.BQk()),2&d){const U=t.oxw();t.xp6(1),t.Q6J("ngForOf",U.maxNumberArray)}}function j(d,Q){if(1&d&&t._uU(0),2&d){const U=t.oxw();t.hij("",U.nzOverflowCount,"+")}}function V(d,Q){if(1&d&&(t.ynx(0),t._uU(1),t.BQk()),2&d){const U=t.oxw(2);t.xp6(1),t.Oqu(U.nzText)}}function Y(d,Q){if(1&d&&(t.ynx(0),t._UZ(1,"span",2),t.TgZ(2,"span",3),t.YNc(3,V,2,1,"ng-container",1),t.qZA(),t.BQk()),2&d){const U=t.oxw();t.xp6(1),t.Gre("ant-badge-status-dot ant-badge-status-",U.nzStatus||U.presetColor,""),t.Udp("background",!U.presetColor&&U.nzColor),t.Q6J("ngStyle",U.nzStyle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",U.nzText)}}function L(d,Q){if(1&d&&t._UZ(0,"nz-badge-sup",5),2&d){const U=t.oxw(2);t.Q6J("nzOffset",U.nzOffset)("nzTitle",U.nzTitle)("nzStyle",U.nzStyle)("nzDot",U.nzDot)("nzOverflowCount",U.nzOverflowCount)("disableAnimation",!!(U.nzStandalone||U.nzStatus||U.nzColor||null!=U.noAnimation&&U.noAnimation.nzNoAnimation))("nzCount",U.nzCount)("noAnimation",!(null==U.noAnimation||!U.noAnimation.nzNoAnimation))}}function B(d,Q){if(1&d&&(t.ynx(0),t.YNc(1,L,1,8,"nz-badge-sup",4),t.BQk()),2&d){const U=t.oxw();t.xp6(1),t.Q6J("ngIf",U.showSup)}}const se=["*"];function G(d,Q){if(1&d&&(t.ynx(0),t._uU(1),t.BQk()),2&d){const U=t.oxw();t.xp6(1),t.Oqu(U.nzText)}}const S=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let m=(()=>{class d{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(U){const{nzOverflowCount:q,nzCount:ze}=U;ze&&"number"==typeof ze.currentValue&&(this.count=Math.max(0,ze.currentValue),this.countArray=this.count.toString().split("").map(Te=>+Te)),q&&this.generateMaxNumberArray()}}return d.\u0275fac=function(U){return new(U||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(U,q){2&U&&(t.uIk("title",null===q.nzTitle?"":q.nzTitle||q.nzCount),t.d8E("@.disabled",q.disableAnimation)("@zoomBadgeMotion",void 0),t.Akn(q.nzStyle),t.Udp("right",q.nzOffset&&q.nzOffset[0]?-q.nzOffset[0]:null,"px")("margin-top",q.nzOffset&&q.nzOffset[1]?q.nzOffset[1]:null,"px"),t.ekj("ant-badge-count",!q.nzDot)("ant-badge-dot",q.nzDot)("ant-badge-multiple-words",q.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[t.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(U,q){if(1&U&&(t.YNc(0,re,2,1,"ng-container",0),t.YNc(1,j,1,1,"ng-template",null,1,t.W1O)),2&U){const ze=t.MAs(2);t.Q6J("ngIf",q.count<=q.nzOverflowCount)("ngIfElse",ze)}},directives:[D.O5,D.sg,u.P],encapsulation:2,data:{animation:[I.Ev]},changeDetection:0}),d})(),P=(()=>{class d{constructor(U,q,ze,Te,Oe,Me){this.nzConfigService=U,this.renderer=q,this.cdr=ze,this.elementRef=Te,this.directionality=Oe,this.noAnimation=Me,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,s.R)(this.destroy$)).subscribe(q=>{this.dir=q,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(U){const{nzColor:q,nzShowDot:ze,nzDot:Te,nzCount:Oe,nzShowZero:Me}=U;q&&(this.presetColor=this.nzColor&&-1!==S.indexOf(this.nzColor)?this.nzColor:null),(ze||Te||Oe||Me)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return d.\u0275fac=function(U){return new(U||d)(t.Y36(_.jY),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(W.Is,8),t.Y36(u.P,9))},d.\u0275cmp=t.Xpm({type:d,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(U,q){2&U&&t.ekj("ant-badge-status",q.nzStatus)("ant-badge-not-a-wrapper",!!(q.nzStandalone||q.nzStatus||q.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[t.TTD],ngContentSelectors:se,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(U,q){1&U&&(t.F$t(),t.YNc(0,Y,4,7,"ng-container",0),t.Hsn(1),t.YNc(2,B,2,1,"ng-container",1)),2&U&&(t.Q6J("ngIf",q.nzStatus||q.nzColor),t.xp6(2),t.Q6J("nzStringTemplateOutlet",q.nzCount))},directives:[m,D.O5,D.PC,T.f],encapsulation:2,data:{animation:[I.Ev]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],d.prototype,"nzShowZero",void 0),(0,i.gn)([(0,c.yF)()],d.prototype,"nzShowDot",void 0),(0,i.gn)([(0,c.yF)()],d.prototype,"nzStandalone",void 0),(0,i.gn)([(0,c.yF)()],d.prototype,"nzDot",void 0),(0,i.gn)([(0,_.oS)()],d.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,_.oS)()],d.prototype,"nzColor",void 0),d})(),$=(()=>{class d{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(U){const{nzColor:q}=U;q&&(this.presetColor=this.nzColor&&-1!==S.indexOf(this.nzColor)?this.nzColor:null)}}return d.\u0275fac=function(U){return new(U||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[t.TTD],ngContentSelectors:se,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(U,q){1&U&&(t.F$t(),t.Hsn(0),t.TgZ(1,"div",0),t.YNc(2,G,2,1,"ng-container",1),t._UZ(3,"div",2),t.qZA()),2&U&&(t.xp6(1),t.Tol(q.presetColor&&"ant-ribbon-color-"+q.presetColor),t.Udp("background-color",!q.presetColor&&q.nzColor),t.ekj("ant-ribbon-placement-end","end"===q.nzPlacement)("ant-ribbon-placement-start","start"===q.nzPlacement),t.xp6(1),t.Q6J("nzStringTemplateOutlet",q.nzText),t.xp6(1),t.Udp("color",!q.presetColor&&q.nzColor))},directives:[T.f],encapsulation:2,changeDetection:0}),d})(),J=(()=>{class d{}return d.\u0275fac=function(U){return new(U||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[W.vT,D.ez,M.Q8,T.T,u.g]]}),d})()},7484:(ve,X,o)=>{o.d(X,{bd:()=>Ce,vh:()=>Se,_i:()=>Oe});var i=o(655),t=o(5e3),n=o(1721),s=o(8929),I=o(7625),_=o(9439),c=o(226),W=o(9808),u=o(969);function D(K,fe){1&K&&t.Hsn(0)}const T=["*"];function M(K,fe){1&K&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA()),2&K&&t.Q6J("ngClass",fe.$implicit)}function x(K,fe){if(1&K&&(t.TgZ(0,"div",2),t.YNc(1,M,2,1,"div",3),t.qZA()),2&K){const k=fe.$implicit;t.xp6(1),t.Q6J("ngForOf",k)}}function te(K,fe){if(1&K&&(t.ynx(0),t._uU(1),t.BQk()),2&K){const k=t.oxw(3);t.xp6(1),t.Oqu(k.nzTitle)}}function b(K,fe){if(1&K&&(t.TgZ(0,"div",11),t.YNc(1,te,2,1,"ng-container",12),t.qZA()),2&K){const k=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",k.nzTitle)}}function re(K,fe){if(1&K&&(t.ynx(0),t._uU(1),t.BQk()),2&K){const k=t.oxw(3);t.xp6(1),t.Oqu(k.nzExtra)}}function j(K,fe){if(1&K&&(t.TgZ(0,"div",13),t.YNc(1,re,2,1,"ng-container",12),t.qZA()),2&K){const k=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",k.nzExtra)}}function V(K,fe){}function Y(K,fe){if(1&K&&(t.ynx(0),t.YNc(1,V,0,0,"ng-template",14),t.BQk()),2&K){const k=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",k.listOfNzCardTabComponent.template)}}function L(K,fe){if(1&K&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.YNc(2,b,2,1,"div",8),t.YNc(3,j,2,1,"div",9),t.qZA(),t.YNc(4,Y,2,1,"ng-container",10),t.qZA()),2&K){const k=t.oxw();t.xp6(2),t.Q6J("ngIf",k.nzTitle),t.xp6(1),t.Q6J("ngIf",k.nzExtra),t.xp6(1),t.Q6J("ngIf",k.listOfNzCardTabComponent)}}function B(K,fe){}function se(K,fe){if(1&K&&(t.TgZ(0,"div",15),t.YNc(1,B,0,0,"ng-template",14),t.qZA()),2&K){const k=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",k.nzCover)}}function G(K,fe){1&K&&(t.ynx(0),t.Hsn(1),t.BQk())}function S(K,fe){1&K&&t._UZ(0,"nz-card-loading")}function m(K,fe){}function A(K,fe){if(1&K&&(t.TgZ(0,"li"),t.TgZ(1,"span"),t.YNc(2,m,0,0,"ng-template",14),t.qZA(),t.qZA()),2&K){const k=fe.$implicit,ge=t.oxw(2);t.Udp("width",100/ge.nzActions.length,"%"),t.xp6(2),t.Q6J("ngTemplateOutlet",k)}}function P(K,fe){if(1&K&&(t.TgZ(0,"ul",16),t.YNc(1,A,3,3,"li",17),t.qZA()),2&K){const k=t.oxw();t.xp6(1),t.Q6J("ngForOf",k.nzActions)}}let Te=(()=>{class K{constructor(){this.nzHoverable=!0}}return K.\u0275fac=function(k){return new(k||K)},K.\u0275dir=t.lG2({type:K,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(k,ge){2&k&&t.ekj("ant-card-hoverable",ge.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,n.yF)()],K.prototype,"nzHoverable",void 0),K})(),Oe=(()=>{class K{}return K.\u0275fac=function(k){return new(k||K)},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card-tab"]],viewQuery:function(k,ge){if(1&k&&t.Gf(t.Rgc,7),2&k){let de;t.iGM(de=t.CRH())&&(ge.template=de.first)}},exportAs:["nzCardTab"],ngContentSelectors:T,decls:1,vars:0,template:function(k,ge){1&k&&(t.F$t(),t.YNc(0,D,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),K})(),Me=(()=>{class K{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return K.\u0275fac=function(k){return new(k||K)},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(k,ge){1&k&&(t.TgZ(0,"div",0),t.YNc(1,x,2,1,"div",1),t.qZA()),2&k&&(t.xp6(1),t.Q6J("ngForOf",ge.listOfLoading))},directives:[W.sg,W.mk],encapsulation:2,changeDetection:0}),K})(),Ce=(()=>{class K{constructor(k,ge,de){this.nzConfigService=k,this.cdr=ge,this.directionality=de,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var k;null===(k=this.directionality.change)||void 0===k||k.pipe((0,I.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return K.\u0275fac=function(k){return new(k||K)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(c.Is,8))},K.\u0275cmp=t.Xpm({type:K,selectors:[["nz-card"]],contentQueries:function(k,ge,de){if(1&k&&(t.Suo(de,Oe,5),t.Suo(de,Te,4)),2&k){let Ae;t.iGM(Ae=t.CRH())&&(ge.listOfNzCardTabComponent=Ae.first),t.iGM(Ae=t.CRH())&&(ge.listOfNzCardGridDirective=Ae)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(k,ge){2&k&&t.ekj("ant-card-loading",ge.nzLoading)("ant-card-bordered",!1===ge.nzBorderless&&ge.nzBordered)("ant-card-hoverable",ge.nzHoverable)("ant-card-small","small"===ge.nzSize)("ant-card-contain-grid",ge.listOfNzCardGridDirective&&ge.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===ge.nzType)("ant-card-contain-tabs",!!ge.listOfNzCardTabComponent)("ant-card-rtl","rtl"===ge.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:T,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(k,ge){if(1&k&&(t.F$t(),t.YNc(0,L,5,3,"div",0),t.YNc(1,se,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,G,2,0,"ng-container",3),t.YNc(4,S,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(6,P,2,1,"ul",5)),2&k){const de=t.MAs(5);t.Q6J("ngIf",ge.nzTitle||ge.nzExtra||ge.listOfNzCardTabComponent),t.xp6(1),t.Q6J("ngIf",ge.nzCover),t.xp6(1),t.Q6J("ngStyle",ge.nzBodyStyle),t.xp6(1),t.Q6J("ngIf",!ge.nzLoading)("ngIfElse",de),t.xp6(3),t.Q6J("ngIf",ge.nzActions.length)}},directives:[Me,W.O5,u.f,W.tP,W.PC,W.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzBorderless",void 0),(0,i.gn)([(0,n.yF)()],K.prototype,"nzLoading",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],K.prototype,"nzHoverable",void 0),(0,i.gn)([(0,_.oS)()],K.prototype,"nzSize",void 0),K})(),Se=(()=>{class K{}return K.\u0275fac=function(k){return new(k||K)},K.\u0275mod=t.oAB({type:K}),K.\u0275inj=t.cJS({imports:[[W.ez,u.T],c.vT]}),K})()},5577:(ve,X,o)=>{o.d(X,{D3:()=>_,y7:()=>W});var i=o(5e3),t=o(3191),n=o(2916),s=o(8929);let I=(()=>{class u{create(T){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(T)}}return u.\u0275fac=function(T){return new(T||u)},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),_=(()=>{class u{constructor(T){this.nzResizeObserverFactory=T,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((T,M)=>this.cleanupObserver(M))}observe(T){const M=(0,t.fI)(T);return new n.y(x=>{const b=this.observeElement(M).subscribe(x);return()=>{b.unsubscribe(),this.unobserveElement(M)}})}observeElement(T){if(this.observedElements.has(T))this.observedElements.get(T).count++;else{const M=new s.xQ,x=this.nzResizeObserverFactory.create(te=>M.next(te));x&&x.observe(T),this.observedElements.set(T,{observer:x,stream:M,count:1})}return this.observedElements.get(T).stream}unobserveElement(T){this.observedElements.has(T)&&(this.observedElements.get(T).count--,this.observedElements.get(T).count||this.cleanupObserver(T))}cleanupObserver(T){if(this.observedElements.has(T)){const{observer:M,stream:x}=this.observedElements.get(T);M&&M.disconnect(),x.complete(),this.observedElements.delete(T)}}}return u.\u0275fac=function(T){return new(T||u)(i.LFG(I))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),W=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=i.oAB({type:u}),u.\u0275inj=i.cJS({providers:[I]}),u})()},5482:(ve,X,o)=>{o.d(X,{yH:()=>L,cD:()=>G,Zv:()=>se});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),I=o(8076),_=o(9439),c=o(1721),W=o(226),u=o(4832),D=o(9808),T=o(969),M=o(647);const x=["*"];function te(S,m){if(1&S&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&S){const A=m.$implicit,P=t.oxw(2);t.xp6(1),t.Q6J("nzType",A||"right")("nzRotate",P.nzActive?90:0)}}function b(S,m){if(1&S&&(t.TgZ(0,"div"),t.YNc(1,te,2,2,"ng-container",2),t.qZA()),2&S){const A=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",A.nzExpandedIcon)}}function re(S,m){if(1&S&&(t.ynx(0),t._uU(1),t.BQk()),2&S){const A=t.oxw();t.xp6(1),t.Oqu(A.nzHeader)}}function j(S,m){if(1&S&&(t.ynx(0),t._uU(1),t.BQk()),2&S){const A=t.oxw(2);t.xp6(1),t.Oqu(A.nzExtra)}}function V(S,m){if(1&S&&(t.TgZ(0,"div",7),t.YNc(1,j,2,1,"ng-container",2),t.qZA()),2&S){const A=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",A.nzExtra)}}const Y="collapse";let L=(()=>{class S{constructor(A,P,$){this.nzConfigService=A,this.cdr=P,this.directionality=$,this._nzModuleName=Y,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(Y).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var A;null===(A=this.directionality.change)||void 0===A||A.pipe((0,s.R)(this.destroy$)).subscribe(P=>{this.dir=P,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(A){this.listOfNzCollapsePanelComponent.push(A)}removePanel(A){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(A),1)}click(A){this.nzAccordion&&!A.nzActive&&this.listOfNzCollapsePanelComponent.filter(P=>P!==A).forEach(P=>{P.nzActive&&(P.nzActive=!1,P.nzActiveChange.emit(P.nzActive),P.markForCheck())}),A.nzActive=!A.nzActive,A.nzActiveChange.emit(A.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(A){return new(A||S)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(W.Is,8))},S.\u0275cmp=t.Xpm({type:S,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(A,P){2&A&&t.ekj("ant-collapse-icon-position-left","left"===P.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===P.nzExpandIconPosition)("ant-collapse-ghost",P.nzGhost)("ant-collapse-borderless",!P.nzBordered)("ant-collapse-rtl","rtl"===P.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:x,decls:1,vars:0,template:function(A,P){1&A&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],S.prototype,"nzAccordion",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],S.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],S.prototype,"nzGhost",void 0),S})();const B="collapsePanel";let se=(()=>{class S{constructor(A,P,$,J){this.nzConfigService=A,this.cdr=P,this.nzCollapseComponent=$,this.noAnimation=J,this._nzModuleName=B,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(B).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return S.\u0275fac=function(A){return new(A||S)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(L,1),t.Y36(u.P,8))},S.\u0275cmp=t.Xpm({type:S,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(A,P){2&A&&t.ekj("ant-collapse-no-arrow",!P.nzShowArrow)("ant-collapse-item-active",P.nzActive)("ant-collapse-item-disabled",P.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:x,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(A,P){1&A&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return P.clickHeader()}),t.YNc(1,b,2,1,"div",1),t.YNc(2,re,2,1,"ng-container",2),t.YNc(3,V,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&A&&(t.uIk("aria-expanded",P.nzActive),t.xp6(1),t.Q6J("ngIf",P.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzHeader),t.xp6(1),t.Q6J("ngIf",P.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",P.nzActive),t.Q6J("@.disabled",null==P.noAnimation?null:P.noAnimation.nzNoAnimation)("@collapseMotion",P.nzActive?"expanded":"hidden"))},directives:[D.O5,T.f,M.Ls],encapsulation:2,data:{animation:[I.J_]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],S.prototype,"nzActive",void 0),(0,i.gn)([(0,c.yF)()],S.prototype,"nzDisabled",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],S.prototype,"nzShowArrow",void 0),S})(),G=(()=>{class S{}return S.\u0275fac=function(A){return new(A||S)},S.\u0275mod=t.oAB({type:S}),S.\u0275inj=t.cJS({imports:[[W.vT,D.ez,M.PV,T.T,u.g]]}),S})()},3098:(ve,X,o)=>{o.d(X,{R7:()=>oe,uj:()=>Le,q6:()=>Ie});var i=o(226),t=o(925),n=o(9808),s=o(5e3),I=o(969),_=o(655),c=o(8929),W=o(6787),u=o(1721),D=o(7625),T=o(1059),M=o(7545),x=o(7138),te=o(2994),b=o(9439),re=o(948),j=o(4090);function V(F,ce){1&F&&s.Hsn(0)}const Y=["*"];function L(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw(3);s.xp6(1),s.Oqu(w.nzTitle)}}function B(F,ce){if(1&F&&(s.TgZ(0,"div",6),s.YNc(1,L,2,1,"ng-container",7),s.qZA()),2&F){const w=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.nzTitle)}}function se(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw(3);s.xp6(1),s.Oqu(w.nzExtra)}}function G(F,ce){if(1&F&&(s.TgZ(0,"div",8),s.YNc(1,se,2,1,"ng-container",7),s.qZA()),2&F){const w=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.nzExtra)}}function S(F,ce){if(1&F&&(s.TgZ(0,"div",3),s.YNc(1,B,2,1,"div",4),s.YNc(2,G,2,1,"div",5),s.qZA()),2&F){const w=s.oxw();s.xp6(1),s.Q6J("ngIf",w.nzTitle),s.xp6(1),s.Q6J("ngIf",w.nzExtra)}}function m(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",w.title," ")}}function A(F,ce){}function P(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,m,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,A,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&F){const w=s.oxw().$implicit,_e=s.oxw(3);s.xp6(1),s.Q6J("colSpan",w.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!_e.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.title),s.xp6(2),s.Q6J("ngTemplateOutlet",w.content)}}function $(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",w.title," ")}}function J(F,ce){if(1&F&&(s.TgZ(0,"td",14),s.YNc(1,$,2,1,"ng-container",7),s.qZA()),2&F){const w=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.title)}}function d(F,ce){}function Q(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,J,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,d,0,0,"ng-template",16),s.qZA(),s.BQk()),2&F){const w=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.title),s.xp6(1),s.Q6J("colSpan",2*w.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",w.content)}}function U(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,P,7,5,"ng-container",2),s.YNc(2,Q,4,3,"ng-container",2),s.BQk()),2&F){const w=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!w.nzBordered),s.xp6(1),s.Q6J("ngIf",w.nzBordered)}}function q(F,ce){if(1&F&&(s.TgZ(0,"tr",10),s.YNc(1,U,3,2,"ng-container",11),s.qZA()),2&F){const w=ce.$implicit;s.xp6(1),s.Q6J("ngForOf",w)}}function ze(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,q,2,1,"tr",9),s.BQk()),2&F){const w=s.oxw();s.xp6(1),s.Q6J("ngForOf",w.itemMatrix)}}function Te(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw().$implicit;s.xp6(1),s.hij(" ",w.title," ")}}function Oe(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,Te,2,1,"ng-container",7),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&F){const w=ce.$implicit,_e=s.oxw(4);s.xp6(1),s.Q6J("colSpan",w.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!_e.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.title)}}function Me(F,ce){}function ie(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",15),s.YNc(4,Me,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&F){const w=ce.$implicit;s.xp6(1),s.Q6J("colSpan",w.span),s.xp6(3),s.Q6J("ngTemplateOutlet",w.content)}}function Ce(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,Oe,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,ie,5,2,"ng-container",11),s.qZA(),s.BQk()),2&F){const w=ce.$implicit;s.xp6(2),s.Q6J("ngForOf",w),s.xp6(2),s.Q6J("ngForOf",w)}}function pe(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,Ce,5,2,"ng-container",11),s.BQk()),2&F){const w=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",w.itemMatrix)}}function Se(F,ce){if(1&F&&(s.ynx(0),s._uU(1),s.BQk()),2&F){const w=s.oxw().$implicit;s.xp6(1),s.hij(" ",w.title," ")}}function K(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,Se,2,1,"ng-container",7),s.qZA(),s.BQk()),2&F){const w=ce.$implicit;s.xp6(1),s.Q6J("colSpan",w.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",w.title)}}function fe(F,ce){}function k(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,fe,0,0,"ng-template",16),s.qZA(),s.BQk()),2&F){const w=ce.$implicit;s.xp6(1),s.Q6J("colSpan",w.span),s.xp6(1),s.Q6J("ngTemplateOutlet",w.content)}}function ge(F,ce){if(1&F&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,K,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,k,3,2,"ng-container",11),s.qZA(),s.BQk()),2&F){const w=ce.$implicit;s.xp6(2),s.Q6J("ngForOf",w),s.xp6(2),s.Q6J("ngForOf",w)}}function de(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,ge,5,2,"ng-container",11),s.BQk()),2&F){const w=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",w.itemMatrix)}}function Ae(F,ce){if(1&F&&(s.ynx(0),s.YNc(1,pe,2,1,"ng-container",2),s.YNc(2,de,2,1,"ng-container",2),s.BQk()),2&F){const w=s.oxw();s.xp6(1),s.Q6J("ngIf",!w.nzBordered),s.xp6(1),s.Q6J("ngIf",w.nzBordered)}}let Le=(()=>{class F{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new c.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return F.\u0275fac=function(w){return new(w||F)},F.\u0275cmp=s.Xpm({type:F,selectors:[["nz-descriptions-item"]],viewQuery:function(w,_e){if(1&w&&s.Gf(s.Rgc,7),2&w){let Pe;s.iGM(Pe=s.CRH())&&(_e.content=Pe.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Y,decls:1,vars:0,template:function(w,_e){1&w&&(s.F$t(),s.YNc(0,V,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,_.gn)([(0,u.Rn)()],F.prototype,"nzSpan",void 0),F})();const Ge={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let oe=(()=>{class F{constructor(w,_e,Pe,be){this.nzConfigService=w,this.cdr=_e,this.breakpointService=Pe,this.directionality=be,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Ge,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=j.G_.md,this.destroy$=new c.xQ}ngOnInit(){var w;this.dir=this.directionality.value,null===(w=this.directionality.change)||void 0===w||w.pipe((0,D.R)(this.destroy$)).subscribe(_e=>{this.dir=_e})}ngOnChanges(w){w.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const w=this.items.changes.pipe((0,T.O)(this.items),(0,D.R)(this.destroy$));(0,W.T)(w,w.pipe((0,M.w)(()=>(0,W.T)(...this.items.map(_e=>_e.inputChange$)).pipe((0,x.e)(16)))),this.breakpointService.subscribe(j.WV).pipe((0,te.b)(_e=>this.breakpoint=_e))).pipe((0,D.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let w=[],_e=0;const Pe=this.realColumn=this.getColumn(),be=this.items.toArray(),tt=be.length,nt=[],Ke=()=>{nt.push(w),w=[],_e=0};for(let Ye=0;Ye<tt;Ye++){const C=be[Ye],{nzTitle:He,content:Xe,nzSpan:We}=C;_e+=We,_e>=Pe?(_e>Pe&&(0,re.ZK)(`"nzColumn" is ${Pe} but we have row length ${_e}`),w.push({title:He,content:Xe,span:Pe-(_e-We)}),Ke()):Ye===tt-1?(w.push({title:He,content:Xe,span:Pe-(_e-We)}),Ke()):w.push({title:He,content:Xe,span:We})}this.itemMatrix=nt}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return F.\u0275fac=function(w){return new(w||F)(s.Y36(b.jY),s.Y36(s.sBO),s.Y36(j.r3),s.Y36(i.Is,8))},F.\u0275cmp=s.Xpm({type:F,selectors:[["nz-descriptions"]],contentQueries:function(w,_e,Pe){if(1&w&&s.Suo(Pe,Le,4),2&w){let be;s.iGM(be=s.CRH())&&(_e.items=be)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(w,_e){2&w&&s.ekj("ant-descriptions-bordered",_e.nzBordered)("ant-descriptions-middle","middle"===_e.nzSize)("ant-descriptions-small","small"===_e.nzSize)("ant-descriptions-rtl","rtl"===_e.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(w,_e){1&w&&(s.YNc(0,S,3,2,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"table"),s.TgZ(3,"tbody"),s.YNc(4,ze,2,1,"ng-container",2),s.YNc(5,Ae,3,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&w&&(s.Q6J("ngIf",_e.nzTitle||_e.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===_e.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===_e.nzLayout))},directives:[n.O5,I.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,u.yF)(),(0,b.oS)()],F.prototype,"nzBordered",void 0),(0,_.gn)([(0,b.oS)()],F.prototype,"nzColumn",void 0),(0,_.gn)([(0,b.oS)()],F.prototype,"nzSize",void 0),(0,_.gn)([(0,b.oS)(),(0,u.yF)()],F.prototype,"nzColon",void 0),F})(),Ie=(()=>{class F{}return F.\u0275fac=function(w){return new(w||F)},F.\u0275mod=s.oAB({type:F}),F.\u0275inj=s.cJS({imports:[[i.vT,n.ez,I.T,t.ud]]}),F})()},3677:(ve,X,o)=>{o.d(X,{cm:()=>Oe,b1:()=>Se,wA:()=>Ce,RR:()=>pe});var i=o(655),t=o(1159),n=o(7429),s=o(5e3),I=o(8929),_=o(591),c=o(6787),W=o(3753),u=o(8896),D=o(6053),T=o(7604),M=o(4850),x=o(7545),te=o(2198),b=o(7138),re=o(5778),j=o(7625),V=o(9439),Y=o(6950),L=o(1721),B=o(2845),se=o(925),G=o(226),S=o(9808),m=o(3075),A=o(6042),P=o(4832),$=o(969),J=o(647),d=o(4219),Q=o(8076);function U(k,ge){if(1&k){const de=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Le){return s.CHM(de),s.oxw().onAnimationEvent(Le)})("mouseenter",function(){return s.CHM(de),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(de),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&k){const de=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===de.dir),s.Q6J("ngClass",de.nzOverlayClassName)("ngStyle",de.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)("nzNoAnimation",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)}}const q=["*"],Te=[Y.yW.bottomLeft,Y.yW.bottomRight,Y.yW.topRight,Y.yW.topLeft];let Oe=(()=>{class k{constructor(de,Ae,Le,$e,Ge,oe){this.nzConfigService=de,this.elementRef=Ae,this.overlay=Le,this.renderer=$e,this.viewContainerRef=Ge,this.platform=oe,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new I.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new _.X(!1),this.nzTrigger$=new _.X("hover"),this.overlayClose$=new I.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(de,Ae){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(de,Ae)}ngAfterViewInit(){if(this.nzDropdownMenu){const de=this.elementRef.nativeElement,Ae=(0,c.T)((0,W.R)(de,"mouseenter").pipe((0,T.h)(!0)),(0,W.R)(de,"mouseleave").pipe((0,T.h)(!1))),$e=(0,c.T)(this.nzDropdownMenu.mouseState$,Ae),Ge=(0,W.R)(de,"click").pipe((0,M.U)(()=>!this.nzVisible)),oe=this.nzTrigger$.pipe((0,x.w)(w=>"hover"===w?$e:"click"===w?Ge:u.E)),Ie=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,te.h)(()=>this.nzClickHide),(0,T.h)(!1)),F=(0,c.T)(oe,Ie,this.overlayClose$).pipe((0,te.h)(()=>!this.nzDisabled)),ce=(0,c.T)(this.inputVisible$,F);(0,D.aj)([ce,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,M.U)(([w,_e])=>w||_e),(0,b.e)(150),(0,re.x)(),(0,te.h)(()=>this.platform.isBrowser),(0,j.R)(this.destroy$)).subscribe(w=>{const Pe=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:de).getBoundingClientRect().width;this.nzVisible!==w&&this.nzVisibleChange.emit(w),this.nzVisible=w,w?(this.overlayRef?this.overlayRef.getConfig().minWidth=Pe:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Pe,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,c.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,te.h)(be=>!this.elementRef.nativeElement.contains(be.target))),this.overlayRef.keydownEvents().pipe((0,te.h)(be=>be.keyCode===t.hY&&!(0,t.Vb)(be)))).pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Y.yW[this.nzPlacement],...Te]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,j.R)(this.destroy$)).subscribe(w=>{"void"===w.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(de){const{nzVisible:Ae,nzDisabled:Le,nzOverlayClassName:$e,nzOverlayStyle:Ge,nzTrigger:oe}=de;if(oe&&this.nzTrigger$.next(this.nzTrigger),Ae&&this.inputVisible$.next(this.nzVisible),Le){const Ie=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ie,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ie,"disabled")}$e&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Ge&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return k.\u0275fac=function(de){return new(de||k)(s.Y36(V.jY),s.Y36(s.SBq),s.Y36(B.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(se.t4))},k.\u0275dir=s.lG2({type:k,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,i.gn)([(0,V.oS)(),(0,L.yF)()],k.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,L.yF)()],k.prototype,"nzClickHide",void 0),(0,i.gn)([(0,L.yF)()],k.prototype,"nzDisabled",void 0),(0,i.gn)([(0,L.yF)()],k.prototype,"nzVisible",void 0),k})(),Me=(()=>{class k{}return k.\u0275fac=function(de){return new(de||k)},k.\u0275mod=s.oAB({type:k}),k.\u0275inj=s.cJS({}),k})(),Ce=(()=>{class k{constructor(de,Ae,Le){this.renderer=de,this.nzButtonGroupComponent=Ae,this.elementRef=Le}ngAfterViewInit(){const de=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&de&&this.renderer.addClass(de,"ant-dropdown-button")}}return k.\u0275fac=function(de){return new(de||k)(s.Y36(s.Qsj),s.Y36(A.fY,9),s.Y36(s.SBq))},k.\u0275dir=s.lG2({type:k,selectors:[["","nz-button","","nz-dropdown",""]]}),k})(),pe=(()=>{class k{constructor(de,Ae,Le,$e,Ge,oe,Ie){this.cdr=de,this.elementRef=Ae,this.renderer=Le,this.viewContainerRef=$e,this.nzMenuService=Ge,this.directionality=oe,this.noAnimation=Ie,this.mouseState$=new _.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new I.xQ}onAnimationEvent(de){this.animationStateChange$.emit(de)}setMouseState(de){this.mouseState$.next(de)}setValue(de,Ae){this[de]=Ae,this.cdr.markForCheck()}ngOnInit(){var de;null===(de=this.directionality.change)||void 0===de||de.pipe((0,j.R)(this.destroy$)).subscribe(Ae=>{this.dir=Ae,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return k.\u0275fac=function(de){return new(de||k)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(d.hl),s.Y36(G.Is,8),s.Y36(P.P,9))},k.\u0275cmp=s.Xpm({type:k,selectors:[["nz-dropdown-menu"]],viewQuery:function(de,Ae){if(1&de&&s.Gf(s.Rgc,7),2&de){let Le;s.iGM(Le=s.CRH())&&(Ae.templateRef=Le.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([d.hl,{provide:d.Cc,useValue:!0}])],ngContentSelectors:q,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(de,Ae){1&de&&(s.F$t(),s.YNc(0,U,2,7,"ng-template"))},directives:[S.mk,S.PC,P.P],encapsulation:2,data:{animation:[Q.mF]},changeDetection:0}),k})(),Se=(()=>{class k{}return k.\u0275fac=function(de){return new(de||k)},k.\u0275mod=s.oAB({type:k}),k.\u0275inj=s.cJS({imports:[[G.vT,S.ez,B.U8,m.u5,A.sL,d.ip,J.PV,P.g,se.ud,Y.e4,Me,$.T],d.ip]}),k})();new B.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new B.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new B.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new B.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ve,X,o)=>{o.d(X,{n_:()=>Ve,I2:()=>Ue,t4:()=>ke,AA:()=>ot,yw:()=>Fe,yi:()=>ye,IO:()=>z,Ph:()=>st});var i=o(5e3),t=o(6699),n=o(9808),s=o(969),I=o(655),_=o(1721),c=o(8929),W=o(8514),u=o(1086),D=o(6787),T=o(591),M=o(2986),x=o(7545),te=o(7625),b=o(685),re=o(226),j=o(7525),V=o(1894);const Y=["*"];function L(y,ee){if(1&y&&i._UZ(0,"nz-avatar",3),2&y){const R=i.oxw();i.Q6J("nzSrc",R.nzSrc)}}function B(y,ee){1&y&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function se(y,ee){if(1&y&&i._UZ(0,"nz-list-item-meta-avatar",3),2&y){const R=i.oxw();i.Q6J("nzSrc",R.avatarStr)}}function G(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",R.avatarTpl)}}function S(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzTitle)}}function m(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,S,2,1,"ng-container",6),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzTitle)}}function A(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzDescription)}}function P(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,A,2,1,"ng-container",6),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzDescription)}}function $(y,ee){if(1&y&&(i.TgZ(0,"div",5),i.YNc(1,m,2,1,"nz-list-item-meta-title",1),i.YNc(2,P,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngIf",R.nzTitle&&!R.titleComponent),i.xp6(1),i.Q6J("ngIf",R.nzDescription&&!R.descriptionComponent)}}const J=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],d=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function Q(y,ee){1&y&&i.Hsn(0)}const U=["nz-list-item-actions",""];function q(y,ee){}function ze(y,ee){1&y&&i._UZ(0,"em",3)}function Te(y,ee){if(1&y&&(i.TgZ(0,"li"),i.YNc(1,q,0,0,"ng-template",1),i.YNc(2,ze,1,0,"em",2),i.qZA()),2&y){const R=ee.$implicit,ue=ee.last;i.xp6(1),i.Q6J("ngTemplateOutlet",R),i.xp6(1),i.Q6J("ngIf",!ue)}}function Oe(y,ee){}const Me=function(y,ee){return{$implicit:y,index:ee}};function ie(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,Oe,0,0,"ng-template",9),i.BQk()),2&y){const R=ee.$implicit,ue=ee.index,De=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,Me,R,ue))}}function Ce(y,ee){if(1&y&&(i.TgZ(0,"div",7),i.YNc(1,ie,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngForOf",R.nzDataSource)}}function pe(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Oqu(R.nzHeader)}}function Se(y,ee){if(1&y&&(i.TgZ(0,"nz-list-header"),i.YNc(1,pe,2,1,"ng-container",10),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzHeader)}}function K(y,ee){1&y&&i._UZ(0,"div"),2&y&&i.Udp("min-height",53,"px")}function fe(y,ee){}function k(y,ee){if(1&y&&(i.TgZ(0,"div",13),i.YNc(1,fe,0,0,"ng-template",9),i.qZA()),2&y){const R=ee.$implicit,ue=ee.index,De=i.oxw(2);i.Q6J("nzSpan",De.nzGrid.span||null)("nzXs",De.nzGrid.xs||null)("nzSm",De.nzGrid.sm||null)("nzMd",De.nzGrid.md||null)("nzLg",De.nzGrid.lg||null)("nzXl",De.nzGrid.xl||null)("nzXXl",De.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,Me,R,ue))}}function ge(y,ee){if(1&y&&(i.TgZ(0,"div",11),i.YNc(1,k,2,12,"div",12),i.qZA()),2&y){const R=i.oxw();i.Q6J("nzGutter",R.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",R.nzDataSource)}}function de(y,ee){if(1&y&&i._UZ(0,"nz-list-empty",14),2&y){const R=i.oxw();i.Q6J("nzNoResult",R.nzNoResult)}}function Ae(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Oqu(R.nzFooter)}}function Le(y,ee){if(1&y&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,Ae,2,1,"ng-container",10),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzFooter)}}function $e(y,ee){}function Ge(y,ee){}function oe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Ge,0,0,"ng-template",6),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzPagination)}}const Ie=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],F=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ce(y,ee){if(1&y&&i._UZ(0,"ul",6),2&y){const R=i.oxw(2);i.Q6J("nzActions",R.nzActions)}}function w(y,ee){if(1&y&&(i.YNc(0,ce,1,1,"ul",5),i.Hsn(1)),2&y){const R=i.oxw();i.Q6J("ngIf",R.nzActions&&R.nzActions.length>0)}}function _e(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzContent)}}function Pe(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,_e,2,1,"ng-container",8),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzContent)}}function be(y,ee){if(1&y&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,Pe,2,1,"ng-container",7)),2&y){const R=i.oxw();i.xp6(2),i.Q6J("ngIf",R.nzContent)}}function tt(y,ee){1&y&&i.Hsn(0,3)}function nt(y,ee){}function Ke(y,ee){}function Ye(y,ee){}function C(y,ee){}function He(y,ee){if(1&y&&(i.YNc(0,nt,0,0,"ng-template",9),i.YNc(1,Ke,0,0,"ng-template",9),i.YNc(2,Ye,0,0,"ng-template",9),i.YNc(3,C,0,0,"ng-template",9)),2&y){const R=i.oxw(),ue=i.MAs(3),De=i.MAs(5),xe=i.MAs(1);i.Q6J("ngTemplateOutlet",ue),i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",De),i.xp6(1),i.Q6J("ngTemplateOutlet",xe)}}function Xe(y,ee){}function We(y,ee){}function lt(y,ee){}function Qe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,lt,0,0,"ng-template",9),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzExtra)}}function pt(y,ee){}function v(y,ee){if(1&y&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,Xe,0,0,"ng-template",9),i.YNc(3,We,0,0,"ng-template",9),i.qZA(),i.YNc(4,Qe,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&y){const R=i.oxw(),ue=i.MAs(3),De=i.MAs(1),xe=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",ue),i.xp6(1),i.Q6J("ngTemplateOutlet",De),i.xp6(1),i.Q6J("ngIf",R.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",xe)}}const l=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],he=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let z=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:Y,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),f=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:Y,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),me=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:Y,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,L,1,1,"nz-avatar",1),i.YNc(2,B,1,0,"ng-content",2),i.qZA()),2&R&&(i.xp6(1),i.Q6J("ngIf",ue.nzSrc),i.xp6(1),i.Q6J("ngIf",!ue.nzSrc))},directives:[t.Dz,n.O5],encapsulation:2,changeDetection:0}),y})(),ye=(()=>{class y{constructor(R,ue){this.elementRef=R,this.renderer=ue,this.avatarStr="",this.renderer.addClass(R.nativeElement,"ant-list-item-meta")}set nzAvatar(R){R instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=R):this.avatarStr=R}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.SBq),i.Y36(i.Qsj))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(R,ue,De){if(1&R&&(i.Suo(De,f,5),i.Suo(De,z,5)),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.descriptionComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.titleComponent=xe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:d,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(R,ue){1&R&&(i.F$t(J),i.YNc(0,se,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,G,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,$,5,2,"div",2)),2&R&&(i.Q6J("ngIf",ue.avatarStr),i.xp6(1),i.Q6J("ngIf",ue.avatarTpl),i.xp6(2),i.Q6J("ngIf",ue.nzTitle||ue.nzDescription||ue.descriptionComponent||ue.titleComponent))},directives:[me,z,f,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),y})(),Fe=(()=>{class y{constructor(){}}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:Y,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Be=(()=>{class y{constructor(){}}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-action"]],viewQuery:function(R,ue){if(1&R&&i.Gf(i.Rgc,5),2&R){let De;i.iGM(De=i.CRH())&&(ue.templateRef=De.first)}},exportAs:["nzListItemAction"],ngContentSelectors:Y,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.YNc(0,Q,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),y})(),Re=(()=>{class y{constructor(R,ue){this.ngZone=R,this.cdr=ue,this.nzActions=[],this.actions=[],this.destroy$=new c.xQ,this.inputActionChanges$=new c.xQ,this.contentChildrenChanges$=(0,W.P)(()=>this.nzListItemActions?(0,u.of)(null):this.ngZone.onStable.asObservable().pipe((0,M.q)(1),(0,x.w)(()=>this.contentChildrenChanges$))),(0,D.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,te.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(De=>De.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.R0b),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(R,ue,De){if(1&R&&i.Suo(De,Be,4),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.nzListItemActions=xe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:U,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(R,ue){1&R&&i.YNc(0,Te,3,2,"li",0),2&R&&i.Q6J("ngForOf",ue.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),y})(),Ue=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(R,ue){1&R&&i._UZ(0,"nz-embed-empty",0),2&R&&i.Q6J("nzComponentName","list")("specificContent",ue.nzNoResult)},directives:[b.gB],encapsulation:2,changeDetection:0}),y})(),ke=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:Y,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Je=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:Y,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),qe=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:Y,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),rt=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275dir=i.lG2({type:y,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),y})(),Ve=(()=>{class y{constructor(R){this.directionality=R,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new T.X(this.nzItemLayout),this.destroy$=new c.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var R;this.dir=this.directionality.value,null===(R=this.directionality.change)||void 0===R||R.pipe((0,te.R)(this.destroy$)).subscribe(ue=>{this.dir=ue})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(R){R.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(re.Is,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(R,ue,De){if(1&R&&(i.Suo(De,Je,5),i.Suo(De,qe,5),i.Suo(De,rt,5)),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.nzListFooterComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.nzListPaginationComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.nzListLoadMoreDirective=xe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(R,ue){2&R&&i.ekj("ant-list-rtl","rtl"===ue.dir)("ant-list-vertical","vertical"===ue.nzItemLayout)("ant-list-lg","large"===ue.nzSize)("ant-list-sm","small"===ue.nzSize)("ant-list-split",ue.nzSplit)("ant-list-bordered",ue.nzBordered)("ant-list-loading",ue.nzLoading)("ant-list-something-after-last-item",ue.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:F,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(R,ue){if(1&R&&(i.F$t(Ie),i.YNc(0,Ce,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Se,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,K,1,2,"div",3),i.YNc(7,ge,2,2,"div",4),i.YNc(8,de,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Le,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,$e,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,oe,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&R){const De=i.MAs(1);i.xp6(2),i.Q6J("ngIf",ue.nzHeader),i.xp6(2),i.Q6J("nzSpinning",ue.nzLoading),i.xp6(2),i.Q6J("ngIf",ue.nzLoading&&ue.nzDataSource&&0===ue.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",ue.nzGrid&&ue.nzDataSource)("ngIfElse",De),i.xp6(1),i.Q6J("ngIf",!ue.nzLoading&&ue.nzDataSource&&0===ue.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",ue.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",ue.nzLoadMore),i.xp6(2),i.Q6J("ngIf",ue.nzPagination)}},directives:[ke,j.W,Ue,Je,qe,n.sg,n.tP,n.O5,s.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,_.yF)()],y.prototype,"nzBordered",void 0),(0,I.gn)([(0,_.yF)()],y.prototype,"nzLoading",void 0),(0,I.gn)([(0,_.yF)()],y.prototype,"nzSplit",void 0),y})(),ot=(()=>{class y{constructor(R,ue,De,xe){this.parentComp=De,this.cdr=xe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ue.addClass(R.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(R=>{this.itemLayout=R,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ve),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(R,ue,De){if(1&R&&i.Suo(De,Fe,5),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.listItemExtraDirective=xe.first)}},hostVars:2,hostBindings:function(R,ue){2&R&&i.ekj("ant-list-item-no-flex",ue.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:he,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(R,ue){if(1&R&&(i.F$t(l),i.YNc(0,w,2,1,"ng-template",null,0,i.W1O),i.YNc(2,be,3,1,"ng-template",null,1,i.W1O),i.YNc(4,tt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,He,4,4,"ng-template",null,3,i.W1O),i.YNc(8,v,6,4,"ng-container",4)),2&R){const De=i.MAs(7);i.xp6(8),i.Q6J("ngIf",ue.isVerticalAndExtra)("ngIfElse",De)}},directives:[Re,Fe,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,_.yF)()],y.prototype,"nzNoFlex",void 0),y})(),st=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275mod=i.oAB({type:y}),y.\u0275inj=i.cJS({imports:[[re.vT,n.ez,j.j,V.Jb,t.Rt,s.T,b.Xo]]}),y})()},4219:(ve,X,o)=>{o.d(X,{hl:()=>w,Cc:()=>F,wO:()=>We,YV:()=>pt,uA:()=>Qe,r9:()=>Pe,ip:()=>v});var i=o(655),t=o(5e3),n=o(8929),s=o(591),I=o(6787),_=o(6053),c=o(4850),W=o(1709),u=o(2198),D=o(7604),T=o(7138),M=o(5778),x=o(7625),te=o(1059),b=o(7545),re=o(1721),j=o(325),V=o(226),Y=o(2845),L=o(6950),B=o(925),se=o(4832),G=o(9808),S=o(647),m=o(969),A=o(8076);const P=["nz-submenu-title",""];function $(l,he){if(1&l&&t._UZ(0,"i",4),2&l){const z=t.oxw();t.Q6J("nzType",z.nzIcon)}}function J(l,he){if(1&l&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&l){const z=t.oxw();t.xp6(2),t.Oqu(z.nzTitle)}}function d(l,he){1&l&&t._UZ(0,"i",8)}function Q(l,he){1&l&&t._UZ(0,"i",9)}function U(l,he){if(1&l&&(t.TgZ(0,"span",5),t.YNc(1,d,1,0,"i",6),t.YNc(2,Q,1,0,"i",7),t.qZA()),2&l){const z=t.oxw();t.Q6J("ngSwitch",z.dir),t.xp6(1),t.Q6J("ngSwitchCase","rtl")}}function q(l,he){1&l&&t._UZ(0,"i",10)}const ze=["*"],Te=["nz-submenu-inline-child",""];function Oe(l,he){}const Me=["nz-submenu-none-inline-child",""];function ie(l,he){}const Ce=["nz-submenu",""];function pe(l,he){1&l&&t.Hsn(0,0,["*ngIf","!nzTitle"])}function Se(l,he){if(1&l&&t._UZ(0,"div",6),2&l){const z=t.oxw(),f=t.MAs(7);t.Q6J("mode",z.mode)("nzOpen",z.nzOpen)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("menuClass",z.nzMenuClassName)("templateOutlet",f)}}function K(l,he){if(1&l){const z=t.EpF();t.TgZ(0,"div",8),t.NdJ("subMenuMouseState",function(me){return t.CHM(z),t.oxw(2).setMouseEnterState(me)}),t.qZA()}if(2&l){const z=t.oxw(2),f=t.MAs(7);t.Q6J("theme",z.theme)("mode",z.mode)("nzOpen",z.nzOpen)("position",z.position)("nzDisabled",z.nzDisabled)("isMenuInsideDropDown",z.isMenuInsideDropDown)("templateOutlet",f)("menuClass",z.nzMenuClassName)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)}}function fe(l,he){if(1&l){const z=t.EpF();t.YNc(0,K,1,10,"ng-template",7),t.NdJ("positionChange",function(me){return t.CHM(z),t.oxw().onPositionChange(me)})}if(2&l){const z=t.oxw(),f=t.MAs(1);t.Q6J("cdkConnectedOverlayPositions",z.overlayPositions)("cdkConnectedOverlayOrigin",f)("cdkConnectedOverlayWidth",z.triggerWidth)("cdkConnectedOverlayOpen",z.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function k(l,he){1&l&&t.Hsn(0,1)}const ge=[[["","title",""]],"*"],de=["[title]","*"],Ae=["titleElement"],Le=["nz-menu-group",""];function $e(l,he){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const z=t.oxw();t.xp6(1),t.Oqu(z.nzTitle)}}function Ge(l,he){1&l&&t.Hsn(0,1,["*ngIf","!nzTitle"])}const oe=["*",[["","title",""]]],Ie=["*","[title]"],F=new t.OlP("NzIsInDropDownMenuToken"),ce=new t.OlP("NzMenuServiceLocalToken");let w=(()=>{class l{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(z){this.descendantMenuItemClick$.next(z)}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setMode(z){this.mode$.next(z)}setTheme(z){this.theme$.next(z)}setInlineIndent(z){this.inlineIndent$.next(z)}}return l.\u0275fac=function(z){return new(z||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),_e=(()=>{class l{constructor(z,f,me){this.nzHostSubmenuService=z,this.nzMenuService=f,this.isMenuInsideDropDown=me,this.mode$=this.nzMenuService.mode$.pipe((0,c.U)(Re=>"inline"===Re?"inline":"vertical"===Re||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ye=this.childMenuItemClick$.pipe((0,W.zg)(()=>this.mode$),(0,u.h)(Re=>"inline"!==Re||this.isMenuInsideDropDown),(0,D.h)(!1)),Fe=(0,I.T)(this.isMouseEnterTitleOrOverlay$,ye);(0,_.aj)([this.isChildSubMenuOpen$,Fe]).pipe((0,c.U)(([Re,Ue])=>Re||Ue),(0,T.e)(150),(0,M.x)(),(0,x.R)(this.destroy$)).pipe((0,M.x)()).subscribe(Re=>{this.setOpenStateWithoutDebounce(Re),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Re):this.nzMenuService.isChildSubMenuOpen$.next(Re)})}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setOpenStateWithoutDebounce(z){this.isCurrentSubMenuOpen$.next(z)}setMouseEnterTitleOrOverlayState(z){this.isMouseEnterTitleOrOverlay$.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.LFG(l,12),t.LFG(w),t.LFG(F))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Pe=(()=>{class l{constructor(z,f,me,ye,Fe,Be,Re,Ue){this.nzMenuService=z,this.cdr=f,this.nzSubmenuService=me,this.isMenuInsideDropDown=ye,this.directionality=Fe,this.routerLink=Be,this.routerLinkWithHref=Re,this.router=Ue,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,x.R)(this.destroy$),(0,u.h)(ke=>ke instanceof j.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(z){this.nzDisabled?(z.preventDefault(),z.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(z){this.nzSelected=z,this.selected$.next(z)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const z=this.hasActiveLinks();this.nzSelected!==z&&(this.nzSelected=z,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const z=this.isLinkActive(this.router);return this.routerLink&&z(this.routerLink)||this.routerLinkWithHref&&z(this.routerLinkWithHref)||this.listOfRouterLink.some(z)||this.listOfRouterLinkWithHref.some(z)}isLinkActive(z){return f=>z.isActive(f.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var z;(0,_.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.inlinePaddingLeft="inline"===f?this.level*me:null}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,x.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,x.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(z){z.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(w),t.Y36(t.sBO),t.Y36(_e,8),t.Y36(F),t.Y36(V.Is,8),t.Y36(j.rH,8),t.Y36(j.yS,8),t.Y36(j.F0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-item",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,j.rH,5),t.Suo(me,j.yS,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfRouterLink=ye),t.iGM(ye=t.CRH())&&(f.listOfRouterLinkWithHref=ye)}},hostVars:20,hostBindings:function(z,f){1&z&&t.NdJ("click",function(ye){return f.clickMenuItem(ye)}),2&z&&(t.Udp("padding-left","rtl"===f.dir?null:f.nzPaddingLeft||f.inlinePaddingLeft,"px")("padding-right","rtl"===f.dir?f.nzPaddingLeft||f.inlinePaddingLeft:null,"px"),t.ekj("ant-dropdown-menu-item",f.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",f.isMenuInsideDropDown&&f.nzSelected)("ant-dropdown-menu-item-danger",f.isMenuInsideDropDown&&f.nzDanger)("ant-dropdown-menu-item-disabled",f.isMenuInsideDropDown&&f.nzDisabled)("ant-menu-item",!f.isMenuInsideDropDown)("ant-menu-item-selected",!f.isMenuInsideDropDown&&f.nzSelected)("ant-menu-item-danger",!f.isMenuInsideDropDown&&f.nzDanger)("ant-menu-item-disabled",!f.isMenuInsideDropDown&&f.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[t.TTD]}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDisabled",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzSelected",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDanger",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzMatchRouter",void 0),l})(),be=(()=>{class l{constructor(z,f){this.cdr=z,this.directionality=f,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new t.vpe,this.subMenuMouseState=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var z;this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.sBO),t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(z,f){1&z&&t.NdJ("click",function(){return f.clickTitle()})("mouseenter",function(){return f.setMouseState(!0)})("mouseleave",function(){return f.setMouseState(!1)}),2&z&&(t.Udp("padding-left","rtl"===f.dir?null:f.paddingLeft,"px")("padding-right","rtl"===f.dir?f.paddingLeft:null,"px"),t.ekj("ant-dropdown-menu-submenu-title",f.isMenuInsideDropDown)("ant-menu-submenu-title",!f.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:P,ngContentSelectors:ze,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(z,f){if(1&z&&(t.F$t(),t.YNc(0,$,1,1,"i",0),t.YNc(1,J,3,1,"ng-container",1),t.Hsn(2),t.YNc(3,U,3,2,"span",2),t.YNc(4,q,1,0,"ng-template",null,3,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("ngIf",f.nzIcon),t.xp6(1),t.Q6J("nzStringTemplateOutlet",f.nzTitle),t.xp6(2),t.Q6J("ngIf",f.isMenuInsideDropDown)("ngIfElse",me)}},directives:[G.O5,S.Ls,m.f,G.RF,G.n9,G.ED],encapsulation:2,changeDetection:0}),l})(),tt=(()=>{class l{constructor(z,f,me){this.elementRef=z,this.renderer=f,this.directionality=me,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngOnChanges(z){const{mode:f,nzOpen:me,menuClass:ye}=z;(f||me)&&this.calcMotionState(),ye&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Fe=>!!Fe).forEach(Fe=>{this.renderer.removeClass(this.elementRef.nativeElement,Fe)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Fe=>!!Fe).forEach(Fe=>{this.renderer.addClass(this.elementRef.nativeElement,Fe)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(z,f){2&z&&(t.d8E("@collapseMotion",f.expandState),t.ekj("ant-menu-rtl","rtl"===f.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[t.TTD],attrs:Te,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(z,f){1&z&&t.YNc(0,Oe,0,0,"ng-template",0),2&z&&t.Q6J("ngTemplateOutlet",f.templateOutlet)},directives:[G.tP],encapsulation:2,data:{animation:[A.J_]},changeDetection:0}),l})(),nt=(()=>{class l{constructor(z){this.directionality=z,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new t.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngOnChanges(z){const{mode:f,nzOpen:me}=z;(f||me)&&this.calcMotionState()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(V.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(z,f){1&z&&t.NdJ("mouseenter",function(){return f.setMouseState(!0)})("mouseleave",function(){return f.setMouseState(!1)}),2&z&&(t.d8E("@slideMotion",f.expandState)("@zoomBigMotion",f.expandState),t.ekj("ant-menu-light","light"===f.theme)("ant-menu-dark","dark"===f.theme)("ant-menu-submenu-placement-bottom","horizontal"===f.mode)("ant-menu-submenu-placement-right","vertical"===f.mode&&"right"===f.position)("ant-menu-submenu-placement-left","vertical"===f.mode&&"left"===f.position)("ant-menu-submenu-rtl","rtl"===f.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[t.TTD],attrs:Me,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(z,f){1&z&&(t.TgZ(0,"div",0),t.YNc(1,ie,0,0,"ng-template",1),t.qZA()),2&z&&(t.ekj("ant-dropdown-menu",f.isMenuInsideDropDown)("ant-menu",!f.isMenuInsideDropDown)("ant-dropdown-menu-vertical",f.isMenuInsideDropDown)("ant-menu-vertical",!f.isMenuInsideDropDown)("ant-dropdown-menu-sub",f.isMenuInsideDropDown)("ant-menu-sub",!f.isMenuInsideDropDown)("ant-menu-rtl","rtl"===f.dir),t.Q6J("ngClass",f.menuClass),t.xp6(1),t.Q6J("ngTemplateOutlet",f.templateOutlet))},directives:[G.mk,G.tP],encapsulation:2,data:{animation:[A.$C,A.mF]},changeDetection:0}),l})();const Ke=[L.yW.rightTop,L.yW.right,L.yW.rightBottom,L.yW.leftTop,L.yW.left,L.yW.leftBottom],Ye=[L.yW.bottomLeft];let C=(()=>{class l{constructor(z,f,me,ye,Fe,Be,Re){this.nzMenuService=z,this.cdr=f,this.nzSubmenuService=me,this.platform=ye,this.isMenuInsideDropDown=Fe,this.directionality=Be,this.noAnimation=Re,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new t.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ke,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(z){this.nzSubmenuService.setOpenStateWithoutDebounce(z)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(z){this.isActive=z,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(z)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(z){const f=(0,L.d_)(z);"rightTop"===f||"rightBottom"===f||"right"===f?this.position="right":("leftTop"===f||"leftBottom"===f||"left"===f)&&(this.position="left")}ngOnInit(){var z;this.nzMenuService.theme$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.theme=f,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.mode=f,"horizontal"===f?this.overlayPositions=Ye:"vertical"===f&&(this.overlayPositions=Ke),this.cdr.markForCheck()}),(0,_.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.inlinePaddingLeft="inline"===f?this.level*me:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.isActive=f,f!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=f,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const z=this.listOfNzMenuItemDirective,f=z.changes,me=(0,I.T)(f,...z.map(ye=>ye.selected$));f.pipe((0,te.O)(z),(0,b.w)(()=>me),(0,te.O)(!0),(0,c.U)(()=>z.some(ye=>ye.nzSelected)),(0,x.R)(this.destroy$)).subscribe(ye=>{this.isSelected=ye,this.cdr.markForCheck()})}ngOnChanges(z){const{nzOpen:f}=z;f&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(w),t.Y36(t.sBO),t.Y36(_e),t.Y36(B.t4),t.Y36(F),t.Y36(V.Is,8),t.Y36(se.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,l,5),t.Suo(me,Pe,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfNzSubMenuComponent=ye),t.iGM(ye=t.CRH())&&(f.listOfNzMenuItemDirective=ye)}},viewQuery:function(z,f){if(1&z&&t.Gf(Y.xu,7,t.SBq),2&z){let me;t.iGM(me=t.CRH())&&(f.cdkOverlayOrigin=me.first)}},hostVars:34,hostBindings:function(z,f){2&z&&t.ekj("ant-dropdown-menu-submenu",f.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",f.isMenuInsideDropDown&&f.nzDisabled)("ant-dropdown-menu-submenu-open",f.isMenuInsideDropDown&&f.nzOpen)("ant-dropdown-menu-submenu-selected",f.isMenuInsideDropDown&&f.isSelected)("ant-dropdown-menu-submenu-vertical",f.isMenuInsideDropDown&&"vertical"===f.mode)("ant-dropdown-menu-submenu-horizontal",f.isMenuInsideDropDown&&"horizontal"===f.mode)("ant-dropdown-menu-submenu-inline",f.isMenuInsideDropDown&&"inline"===f.mode)("ant-dropdown-menu-submenu-active",f.isMenuInsideDropDown&&f.isActive)("ant-menu-submenu",!f.isMenuInsideDropDown)("ant-menu-submenu-disabled",!f.isMenuInsideDropDown&&f.nzDisabled)("ant-menu-submenu-open",!f.isMenuInsideDropDown&&f.nzOpen)("ant-menu-submenu-selected",!f.isMenuInsideDropDown&&f.isSelected)("ant-menu-submenu-vertical",!f.isMenuInsideDropDown&&"vertical"===f.mode)("ant-menu-submenu-horizontal",!f.isMenuInsideDropDown&&"horizontal"===f.mode)("ant-menu-submenu-inline",!f.isMenuInsideDropDown&&"inline"===f.mode)("ant-menu-submenu-active",!f.isMenuInsideDropDown&&f.isActive)("ant-menu-submenu-rtl","rtl"===f.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[t._Bn([_e]),t.TTD],attrs:Ce,ngContentSelectors:de,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(z,f){if(1&z&&(t.F$t(ge),t.TgZ(0,"div",0,1),t.NdJ("subMenuMouseState",function(ye){return f.setMouseEnterState(ye)})("toggleSubMenu",function(){return f.toggleSubMenu()}),t.YNc(2,pe,1,0,"ng-content",2),t.qZA(),t.YNc(3,Se,1,6,"div",3),t.YNc(4,fe,1,5,"ng-template",null,4,t.W1O),t.YNc(6,k,1,0,"ng-template",null,5,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("nzIcon",f.nzIcon)("nzTitle",f.nzTitle)("mode",f.mode)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("paddingLeft",f.nzPaddingLeft||f.inlinePaddingLeft),t.xp6(2),t.Q6J("ngIf",!f.nzTitle),t.xp6(1),t.Q6J("ngIf","inline"===f.mode)("ngIfElse",me)}},directives:[be,tt,nt,Y.xu,G.O5,se.P,Y.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzOpen",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDisabled",void 0),l})();function He(l,he){return l||he}function Xe(l){return l||!1}let We=(()=>{class l{constructor(z,f,me,ye){this.nzMenuService=z,this.isMenuInsideDropDown=f,this.cdr=me,this.directionality=ye,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new t.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(z){this.nzInlineCollapsed=z,this.inlineCollapsed$.next(z)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(z=>z.nzOpen),this.listOfNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var z;(0,_.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,x.R)(this.destroy$)).subscribe(([f,me])=>{this.actualMode=f?"vertical":me,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.nzClick.emit(f),this.nzSelectable&&!f.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(me=>me.setSelectedState(me===f))}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,x.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(z){const{nzInlineCollapsed:f,nzInlineIndent:me,nzTheme:ye,nzMode:Fe}=z;f&&this.inlineCollapsed$.next(this.nzInlineCollapsed),me&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ye&&this.nzMenuService.setTheme(this.nzTheme),Fe&&(this.mode$.next(this.nzMode),!z.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Be=>Be.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(w),t.Y36(F),t.Y36(t.sBO),t.Y36(V.Is,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu",""]],contentQueries:function(z,f,me){if(1&z&&(t.Suo(me,Pe,5),t.Suo(me,C,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(f.listOfNzMenuItemDirective=ye),t.iGM(ye=t.CRH())&&(f.listOfNzSubMenuComponent=ye)}},hostVars:34,hostBindings:function(z,f){2&z&&t.ekj("ant-dropdown-menu",f.isMenuInsideDropDown)("ant-dropdown-menu-root",f.isMenuInsideDropDown)("ant-dropdown-menu-light",f.isMenuInsideDropDown&&"light"===f.nzTheme)("ant-dropdown-menu-dark",f.isMenuInsideDropDown&&"dark"===f.nzTheme)("ant-dropdown-menu-vertical",f.isMenuInsideDropDown&&"vertical"===f.actualMode)("ant-dropdown-menu-horizontal",f.isMenuInsideDropDown&&"horizontal"===f.actualMode)("ant-dropdown-menu-inline",f.isMenuInsideDropDown&&"inline"===f.actualMode)("ant-dropdown-menu-inline-collapsed",f.isMenuInsideDropDown&&f.nzInlineCollapsed)("ant-menu",!f.isMenuInsideDropDown)("ant-menu-root",!f.isMenuInsideDropDown)("ant-menu-light",!f.isMenuInsideDropDown&&"light"===f.nzTheme)("ant-menu-dark",!f.isMenuInsideDropDown&&"dark"===f.nzTheme)("ant-menu-vertical",!f.isMenuInsideDropDown&&"vertical"===f.actualMode)("ant-menu-horizontal",!f.isMenuInsideDropDown&&"horizontal"===f.actualMode)("ant-menu-inline",!f.isMenuInsideDropDown&&"inline"===f.actualMode)("ant-menu-inline-collapsed",!f.isMenuInsideDropDown&&f.nzInlineCollapsed)("ant-menu-rtl","rtl"===f.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[t._Bn([{provide:ce,useClass:w},{provide:w,useFactory:He,deps:[[new t.tp0,new t.FiY,w],ce]},{provide:F,useFactory:Xe,deps:[[new t.tp0,new t.FiY,F]]}]),t.TTD]}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzSelectable",void 0),l})();function lt(l){return l||!1}let Qe=(()=>{class l{constructor(z,f,me){this.elementRef=z,this.renderer=f,this.isMenuInsideDropDown=me,this.renderer.addClass(z.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const z=this.titleElement.nativeElement.nextElementSibling;z&&this.renderer.addClass(z,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(F))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-menu-group",""]],viewQuery:function(z,f){if(1&z&&t.Gf(Ae,5),2&z){let me;t.iGM(me=t.CRH())&&(f.titleElement=me.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[t._Bn([{provide:F,useFactory:lt,deps:[[new t.tp0,new t.FiY,F]]}])],attrs:Le,ngContentSelectors:Ie,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(z,f){1&z&&(t.F$t(oe),t.TgZ(0,"div",null,0),t.YNc(2,$e,2,1,"ng-container",1),t.YNc(3,Ge,1,0,"ng-content",2),t.qZA(),t.Hsn(4)),2&z&&(t.ekj("ant-menu-item-group-title",!f.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",f.isMenuInsideDropDown),t.xp6(2),t.Q6J("nzStringTemplateOutlet",f.nzTitle),t.xp6(1),t.Q6J("ngIf",!f.nzTitle))},directives:[m.f,G.O5],encapsulation:2,changeDetection:0}),l})(),pt=(()=>{class l{constructor(z,f){this.elementRef=z,this.renderer=f,this.renderer.addClass(z.nativeElement,"ant-dropdown-menu-item-divider")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(z){return new(z||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[V.vT,G.ez,B.ud,Y.U8,S.PV,se.g,m.T]]}),l})()},3610:(ve,X,o)=>{o.d(X,{lU:()=>V,$6:()=>L});var i=o(655),t=o(5e3),n=o(8076),s=o(9439),I=o(1721),_=o(404),c=o(4832),W=o(226),u=o(2845),D=o(6950),T=o(9808),M=o(969);function x(B,se){if(1&B&&(t.ynx(0),t._uU(1),t.BQk()),2&B){const G=t.oxw(3);t.xp6(1),t.Oqu(G.nzTitle)}}function te(B,se){if(1&B&&(t.TgZ(0,"div",10),t.YNc(1,x,2,1,"ng-container",9),t.qZA()),2&B){const G=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",G.nzTitle)}}function b(B,se){if(1&B&&(t.ynx(0),t._uU(1),t.BQk()),2&B){const G=t.oxw(2);t.xp6(1),t.Oqu(G.nzContent)}}function re(B,se){if(1&B&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,te,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,b,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&B){const G=t.oxw();t.ekj("ant-popover-rtl","rtl"===G.dir),t.Q6J("ngClass",G._classMap)("ngStyle",G.nzOverlayStyle)("@.disabled",null==G.noAnimation?null:G.noAnimation.nzNoAnimation)("nzNoAnimation",null==G.noAnimation?null:G.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",G.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",G.nzContent)}}let V=(()=>{class B extends _.Mg{constructor(G,S,m,A,P,$){super(G,S,m,A,P,$),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(Y)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return B.\u0275fac=function(G){return new(G||B)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(c.P,9),t.Y36(s.jY))},B.\u0275dir=t.lG2({type:B,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(G,S){2&G&&t.ekj("ant-popover-open",S.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,i.gn)([(0,I.yF)()],B.prototype,"arrowPointAtCenter",void 0),(0,i.gn)([(0,s.oS)()],B.prototype,"nzPopoverBackdrop",void 0),B})(),Y=(()=>{class B extends _.XK{constructor(G,S,m){super(G,S,m),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,_.pu)(this.nzTitle)&&(0,_.pu)(this.nzContent)}}return B.\u0275fac=function(G){return new(G||B)(t.Y36(t.sBO),t.Y36(W.Is,8),t.Y36(c.P,9))},B.\u0275cmp=t.Xpm({type:B,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(G,S){1&G&&(t.YNc(0,re,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(A){return S.onClickOutside(A)})("detach",function(){return S.hide()})("positionChange",function(A){return S.onPositionChange(A)})),2&G&&t.Q6J("cdkConnectedOverlayHasBackdrop",S.hasBackdrop)("cdkConnectedOverlayOrigin",S.origin)("cdkConnectedOverlayPositions",S._positions)("cdkConnectedOverlayOpen",S._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",S.nzArrowPointAtCenter)},directives:[u.pI,D.hQ,T.mk,T.PC,c.P,T.O5,M.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),B})(),L=(()=>{class B{}return B.\u0275fac=function(G){return new(G||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[[W.vT,T.ez,u.U8,M.T,D.e4,c.g,_.cg]]}),B})()},8144:(ve,X,o)=>{o.d(X,{NU:()=>j,$1:()=>te,zf:()=>V});var i=o(226),t=o(9808),n=o(5e3),s=o(655),I=o(8929),_=o(7625),c=o(9439),W=o(1721);function u(Y,L){}const D=function(Y){return{$implicit:Y}};function T(Y,L){if(1&Y&&(n.TgZ(0,"span",4),n.YNc(1,u,0,0,"ng-template",5),n.qZA()),2&Y){const B=n.oxw(),se=B.last,G=B.index,S=n.oxw();n.Udp("margin-bottom","vertical"===S.nzDirection?se?null:S.spaceSize:null,"px")("margin-right","horizontal"===S.nzDirection?se?null:S.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",S.nzSplit)("ngTemplateOutletContext",n.VKq(6,D,G))}}function M(Y,L){if(1&Y&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,T,2,8,"span",3)),2&Y){const B=L.$implicit,se=L.last,G=n.oxw();n.Udp("margin-bottom","vertical"===G.nzDirection?se?null:G.spaceSize:null,"px")("margin-right","horizontal"===G.nzDirection?se?null:G.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",B),n.xp6(1),n.Q6J("ngIf",G.nzSplit&&!se)}}const x=["*"];let te=(()=>{class Y{constructor(){}}return Y.\u0275fac=function(B){return new(B||Y)},Y.\u0275dir=n.lG2({type:Y,selectors:[["","nzSpaceItem",""]]}),Y})();const re={small:8,middle:16,large:24};let j=(()=>{class Y{constructor(B,se){this.nzConfigService=B,this.cdr=se,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=re.small,this.destroy$=new I.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?re[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Y.\u0275fac=function(B){return new(B||Y)(n.Y36(c.jY),n.Y36(n.sBO))},Y.\u0275cmp=n.Xpm({type:Y,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(B,se,G){if(1&B&&n.Suo(G,te,4,n.Rgc),2&B){let S;n.iGM(S=n.CRH())&&(se.items=S)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(B,se){2&B&&(n.Udp("flex-wrap",se.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===se.nzDirection)("ant-space-vertical","vertical"===se.nzDirection)("ant-space-align-start","start"===se.mergedAlign)("ant-space-align-end","end"===se.mergedAlign)("ant-space-align-center","center"===se.mergedAlign)("ant-space-align-baseline","baseline"===se.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:x,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(B,se){1&B&&(n.F$t(),n.Hsn(0),n.YNc(1,M,3,6,"ng-template",0)),2&B&&(n.xp6(1),n.Q6J("ngForOf",se.items))},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,W.yF)()],Y.prototype,"nzWrap",void 0),(0,s.gn)([(0,c.oS)()],Y.prototype,"nzSize",void 0),Y})(),V=(()=>{class Y{}return Y.\u0275fac=function(B){return new(B||Y)},Y.\u0275mod=n.oAB({type:Y}),Y.\u0275inj=n.cJS({imports:[[i.vT,t.ez]]}),Y})()},7525:(ve,X,o)=>{o.d(X,{W:()=>P,j:()=>$});var i=o(655),t=o(5e3),n=o(8929),s=o(591),I=o(839),_=o(8723),c=o(1177);class u{constructor(d){this.durationSelector=d}call(d,Q){return Q.subscribe(new D(d,this.durationSelector))}}class D extends c.Ds{constructor(d,Q){super(d),this.durationSelector=Q,this.hasValue=!1}_next(d){try{const Q=this.durationSelector.call(this,d);Q&&this._tryNext(d,Q)}catch(Q){this.destination.error(Q)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(d,Q){let U=this.durationSubscription;this.value=d,this.hasValue=!0,U&&(U.unsubscribe(),this.remove(U)),U=(0,c.ft)(Q,new c.IY(this)),U&&!U.closed&&this.add(this.durationSubscription=U)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const d=this.value,Q=this.durationSubscription;Q&&(this.durationSubscription=void 0,Q.unsubscribe(),this.remove(Q)),this.value=void 0,this.hasValue=!1,super._next(d)}}}var T=o(1059),M=o(5778),x=o(7545),te=o(7625),b=o(9439),re=o(1721),j=o(226),V=o(9808),Y=o(7144);function L(J,d){1&J&&(t.TgZ(0,"span",3),t._UZ(1,"i",4),t._UZ(2,"i",4),t._UZ(3,"i",4),t._UZ(4,"i",4),t.qZA())}function B(J,d){}function se(J,d){if(1&J&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&J){const Q=t.oxw(2);t.xp6(1),t.Oqu(Q.nzTip)}}function G(J,d){if(1&J&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.YNc(2,B,0,0,"ng-template",6),t.YNc(3,se,2,1,"div",7),t.qZA(),t.qZA()),2&J){const Q=t.oxw(),U=t.MAs(1);t.xp6(1),t.ekj("ant-spin-rtl","rtl"===Q.dir)("ant-spin-spinning",Q.isLoading)("ant-spin-lg","large"===Q.nzSize)("ant-spin-sm","small"===Q.nzSize)("ant-spin-show-text",Q.nzTip),t.xp6(1),t.Q6J("ngTemplateOutlet",Q.nzIndicator||U),t.xp6(1),t.Q6J("ngIf",Q.nzTip)}}function S(J,d){if(1&J&&(t.TgZ(0,"div",9),t.Hsn(1),t.qZA()),2&J){const Q=t.oxw();t.ekj("ant-spin-blur",Q.isLoading)}}const m=["*"],A="spin";let P=(()=>{class J{constructor(Q,U,q){this.nzConfigService=Q,this.cdr=U,this.directionality=q,this._nzModuleName=A,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new I.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var Q;this.delay$.pipe((0,T.O)(this.nzDelay),(0,M.x)(),(0,x.w)(q=>0===q?this.spinning$:this.spinning$.pipe(function W(J){return d=>d.lift(new u(J))}(ze=>(0,_.H)(ze?q:0)))),(0,te.R)(this.destroy$)).subscribe(q=>{this.isLoading=q,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(A).pipe((0,te.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,te.R)(this.destroy$)).subscribe(q=>{this.dir=q,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzSpinning:U,nzDelay:q}=Q;U&&this.spinning$.next(this.nzSpinning),q&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(Q){return new(Q||J)(t.Y36(b.jY),t.Y36(t.sBO),t.Y36(j.Is,8))},J.\u0275cmp=t.Xpm({type:J,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(Q,U){2&Q&&t.ekj("ant-spin-nested-loading",!U.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[t.TTD],ngContentSelectors:m,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(Q,U){1&Q&&(t.F$t(),t.YNc(0,L,5,0,"ng-template",null,0,t.W1O),t.YNc(2,G,4,12,"div",1),t.YNc(3,S,2,2,"div",2)),2&Q&&(t.xp6(2),t.Q6J("ngIf",U.isLoading),t.xp6(1),t.Q6J("ngIf",!U.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,i.gn)([(0,b.oS)()],J.prototype,"nzIndicator",void 0),(0,i.gn)([(0,re.Rn)()],J.prototype,"nzDelay",void 0),(0,i.gn)([(0,re.yF)()],J.prototype,"nzSimple",void 0),(0,i.gn)([(0,re.yF)()],J.prototype,"nzSpinning",void 0),J})(),$=(()=>{class J{}return J.\u0275fac=function(Q){return new(Q||J)},J.\u0275mod=t.oAB({type:J}),J.\u0275inj=t.cJS({imports:[[j.vT,V.ez,Y.Q8]]}),J})()},8481:(ve,X,o)=>{o.d(X,{j:()=>x,X:()=>te});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),I=o(8693),_=o(1721),c=o(226),W=o(9808),u=o(647),D=o(3075);function T(b,re){if(1&b){const j=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(Y){return t.CHM(j),t.oxw().closeTag(Y)}),t.qZA()}}const M=["*"];let x=(()=>{class b{constructor(j,V,Y,L){this.cdr=j,this.renderer=V,this.elementRef=Y,this.directionality=L,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(j){this.nzOnClose.emit(j),j.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const j=this.elementRef.nativeElement,V=new RegExp(`(ant-tag-(?:${[...I.uf,...I.Bh].join("|")}))`,"g"),Y=j.classList.toString(),L=[];let B=V.exec(Y);for(;null!==B;)L.push(B[1]),B=V.exec(Y);j.classList.remove(...L)}setPresetColor(){const j=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,I.o2)(this.nzColor)||(0,I.M8)(this.nzColor)),this.isPresetColor&&j.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var j;null===(j=this.directionality.change)||void 0===j||j.pipe((0,s.R)(this.destroy$)).subscribe(V=>{this.dir=V,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(j){const{nzColor:V}=j;V&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(j){return new(j||b)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c.Is,8))},b.\u0275cmp=t.Xpm({type:b,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(j,V){1&j&&t.NdJ("click",function(){return V.updateCheckedStatus()}),2&j&&(t.Udp("background-color",V.isPresetColor?"":V.nzColor),t.ekj("ant-tag-has-color",V.nzColor&&!V.isPresetColor)("ant-tag-checkable","checkable"===V.nzMode)("ant-tag-checkable-checked",V.nzChecked)("ant-tag-rtl","rtl"===V.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:M,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(j,V){1&j&&(t.F$t(),t.Hsn(0),t.YNc(1,T,1,0,"i",0)),2&j&&(t.xp6(1),t.Q6J("ngIf","closeable"===V.nzMode))},directives:[W.O5,u.Ls],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.yF)()],b.prototype,"nzChecked",void 0),b})(),te=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[[c.vT,W.ez,D.u5,u.PV]]}),b})()}}]);