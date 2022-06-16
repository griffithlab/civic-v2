"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{3193:(ve,q,o)=>{o.d(q,{H:()=>Ae});var i=o(6654),t=o(5e3),n=o(9808),s=o(325),A=o(8481),_=o(3610),c=o(4850),k=o(712),d=o(7484),I=o(647),E=o(3098),L=o(1894),F=o(8144),ne=o(6949);function b(ie,Ce){if(1&ie&&(t._UZ(0,"i",11),t._uU(1)),2&ie){const pe=t.oxw().ngIf;t.xp6(1),t.hij(" ",pe.officialName," ")}}function re(ie,Ce){if(1&ie&&(t.TgZ(0,"nz-tag"),t._uU(1),t.qZA()),2&ie){const pe=Ce.$implicit;t.xp6(1),t.Oqu(pe)}}function j(ie,Ce){if(1&ie&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,re,2,1,"nz-tag",13),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",pe.geneAliases)}}function Y(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/flags"),t.xp6(3),t.hij(" Flags (",pe.flags.totalCount,") ")}}function W(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",pe.revisions.totalCount,") ")}}function N(ie,Ce){if(1&ie&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&ie){const pe=t.oxw().ngIf;t.MGl("routerLink","/genes/",pe.id,"/comments"),t.xp6(3),t.hij(" Comments (",pe.comments.totalCount,") ")}}function w(ie,Ce){if(1&ie&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,b,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,j,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,Y,4,2,"a",10),t.YNc(12,W,4,2,"a",10),t.YNc(13,N,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&ie){const pe=Ce.ngIf,Oe=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",Oe),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",pe.geneAliases.length>0),t.xp6(2),t.hij(" ",pe.variants.totalCount," ")}}let se=(()=>{class ie{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:pe})=>pe.gene))}}return ie.\u0275fac=function(pe){return new(pe||ie)(t.Y36(k.rJ8))},ie.\u0275cmp=t.Xpm({type:ie,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,Oe){1&pe&&(t.TgZ(0,"div",0),t.YNc(1,w,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&pe&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Oe.gene$)))},directives:[n.O5,d.bd,I.Ls,E.R7,E.uj,n.sg,A.j,L.SK,L.t3,F.NU,F.$1,s.yS],pipes:[ne.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ie})();var G=o(4557);function D(ie,Ce){}function h(ie,Ce){if(1&ie&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,D,0,0,"ng-template",6),t.qZA(),t.BQk()),2&ie){const pe=t.oxw(),Oe=t.MAs(2);t.xp6(1),t.Q6J("routerLink",pe.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Oe)}}function x(ie,Ce){}function B(ie,Ce){if(1&ie){const pe=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(H){return t.CHM(pe),t.oxw(2).itemClosed(H)}),t.YNc(1,x,0,0,"ng-template",6),t.qZA()}if(2&ie){t.oxw();const pe=t.MAs(2),Oe=t.oxw(),H=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",Oe.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzMode",Oe.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",H)}}function S(ie,Ce){if(1&ie&&t._UZ(0,"cvc-gene-popover",10),2&ie){const pe=t.oxw(2);t.Q6J("geneId",pe.gene.id)}}function Q(ie,Ce){if(1&ie&&(t.YNc(0,B,2,4,"nz-tag",7),t.YNc(1,S,1,1,"ng-template",null,8,t.W1O)),2&ie){const pe=t.oxw(),Oe=t.MAs(4);t.Q6J("ngIf",pe.enablePopover)("ngIfElse",Oe)}}function u(ie,Ce){}function $(ie,Ce){if(1&ie){const pe=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(H){return t.CHM(pe),t.oxw().itemClosed(H)}),t.YNc(1,u,0,0,"ng-template",6),t.qZA()}if(2&ie){const pe=t.oxw(),Oe=t.MAs(8);t.Q6J("nzMode",pe.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",Oe)}}function U(ie,Ce){}function K(ie,Ce){if(1&ie&&t.YNc(0,U,0,0,"ng-template",6),2&ie){t.oxw();const pe=t.MAs(2);t.Q6J("ngTemplateOutlet",pe)}}function ze(ie,Ce){if(1&ie&&(t.ynx(0),t._uU(1),t.ALo(2,"truncate"),t.BQk()),2&ie){const pe=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,pe.gene.name,12)," ")}}function Te(ie,Ce){if(1&ie&&t._uU(0),2&ie){const pe=t.oxw(2);t.hij(" ",pe.gene.name," ")}}function Se(ie,Ce){if(1&ie&&(t._UZ(0,"i",12),t.YNc(1,ze,3,4,"ng-container",0),t.YNc(2,Te,1,1,"ng-template",null,13,t.W1O)),2&ie){const pe=t.MAs(3),Oe=t.oxw();t.xp6(1),t.Q6J("ngIf",Oe.truncateLongName)("ngIfElse",pe)}}let Ae=(()=>{class ie extends i.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ie.\u0275fac=function(pe){return new(pe||ie)},ie.\u0275cmp=t.Xpm({type:ie,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(pe,Oe){if(1&pe&&(t.YNc(0,h,3,2,"ng-container",0),t.YNc(1,Q,3,2,"ng-template",null,1,t.W1O),t.YNc(3,$,2,2,"ng-template",null,2,t.W1O),t.YNc(5,K,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Se,4,2,"ng-template",null,4,t.W1O)),2&pe){const H=t.MAs(6);t.Q6J("ngIf",Oe.linked)("ngIfElse",H)}},directives:[n.O5,s.yS,n.tP,A.j,_.lU,se,I.Ls],pipes:[G.W],styles:[""],changeDetection:0}),ie})()},3309:(ve,q,o)=>{o.d(q,{U:()=>ne});var i=o(9808),t=o(325),n=o(8481),s=o(647),A=o(3610),_=o(7484),c=o(1894),k=o(3098),d=o(8144),I=o(6949),E=o(5e3);let L=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=E.oAB({type:b}),b.\u0275inj=E.cJS({imports:[[i.ez,t.Bz,I.WG,_.vh,c.Jb,k.q6,n.X,s.PV,d.zf]]}),b})();var F=o(9444);let ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=E.oAB({type:b}),b.\u0275inj=E.cJS({imports:[[i.ez,t.Bz,n.X,A.$6,s.PV,F.s,L]]}),b})()},1912:(ve,q,o)=>{o.d(q,{s:()=>ne});var i=o(5e3),t=o(6042),n=o(2643),s=o(2683),A=o(3640),c=o(2160),k=o(3762),d=o(647);let I=(()=>{class b{constructor(j){this.cookies=j,this.location=function _(b){return encodeURIComponent(b).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return b.\u0275fac=function(j){return new(j||b)(i.Y36(c.N))},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(j,Y){1&j&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&j&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",Y.location,"",i.LSH),i.xp6(1),i.s9C("value",Y.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",Y.location,"",i.LSH),i.xp6(1),i.s9C("value",Y.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",Y.location,"",i.LSH),i.xp6(1),i.s9C("value",Y.xsrfToken))},directives:[k.n_,k.AA,t.ix,n.dQ,s.w,d.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),b})();function E(b,re){1&b&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function L(b,re){1&b&&i._uU(0," Sign In / Sign Up\n")}function F(b,re){if(1&b){const j=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(j),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let ne=(()=>{class b{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return b.\u0275fac=function(j){return new(j||b)},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(j,Y){if(1&j&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return Y.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In / Sign Up"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(N){return Y.authVisible=N})("nzOnCancel",function(){return Y.handleCancel()}),i.YNc(4,E,4,0,"ng-container",2),i.qZA(),i.YNc(5,L,1,0,"ng-template",null,3,i.W1O),i.YNc(7,F,2,0,"ng-template",null,4,i.W1O)),2&j){const W=i.MAs(6),N=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",Y.authVisible)("nzTitle",W)("nzFooter",N)}},directives:[t.ix,n.dQ,s.w,A.du,A.Hf,I],styles:["[_nghost-%COMP%]{display:inline-block}"]}),b})()},1844:(ve,q,o)=>{o.d(q,{B:()=>k});var i=o(9808),t=o(6042),n=o(3640),s=o(3762),A=o(647),_=o(5e3);let c=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,A.PV,s.Ph,t.sL]]}),d})(),k=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Qp,c]]}),d})()},7881:(ve,q,o)=>{o.d(q,{L:()=>_});var i=o(5e3),t=o(9808),n=o(6699);function s(c,k){if(1&c&&i._UZ(0,"nz-avatar",2),2&c){const d=i.oxw();i.Q6J("nzSrc",d.user.profileImagePath)("nzShape",d.shape?d.shape:"circle")("nzSize",d.size)}}function A(c,k){if(1&c&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&c){const d=i.oxw();i.Q6J("nzSize",d.size)("nzText",i.lcZ(1,2,d.user.displayName.charAt(0)))}}let _=(()=>{class c{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(d,I){if(1&d&&(i.YNc(0,s,1,3,"nz-avatar",0),i.YNc(1,A,2,4,"ng-template",null,1,i.W1O)),2&d){const E=i.MAs(2);i.Q6J("ngIf",I.user.profileImagePath)("ngIfElse",E)}},directives:[t.O5,n.Dz],pipes:[t.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),c})()},5473:(ve,q,o)=>{o.d(q,{H:()=>s});var i=o(9808),t=o(6699),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({imports:[[i.ez,t.Rt]]}),A})()},8926:(ve,q,o)=>{o.d(q,{A:()=>n});var i=o(5e3),t=o(2313);let n=(()=>{class s{constructor(_){this.sanitizer=_}transform(_,c){if(!c||""==c)return _;const k=new RegExp(c,"gi"),d=_.match(k);if(!d)return _;let I=_.replace(k,`<span class='typeahead-match'>${d[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(I)}}return s.\u0275fac=function(_){return new(_||s)(i.Y36(t.H7,16))},s.\u0275pipe=i.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},9444:(ve,q,o)=>{o.d(q,{s:()=>s});var i=o(9808),t=o(7742),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({providers:[t.l],imports:[[i.ez]]}),A})()},7742:(ve,q,o)=>{o.d(q,{l:()=>n});var i=o(6530),t=o(5e3);let n=(()=>{class s{transform(_){return _?(0,i.c)(_):""}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275pipe=t.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ve,q,o)=>{o.d(q,{W:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){}transform(A,_=25){if(A.length>_){let k=A.slice(0,_);var c=k.lastIndexOf(" ");return k.slice(0,c)+"\u2026"}return A}}return n.\u0275fac=function(A){return new(A||n)},n.\u0275pipe=i.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ve,q,o)=>{o.d(q,{a:()=>d});var i=o(4850),t=o(5154),n=o(373),s=o(1059),A=o(712),_=o(5e3),c=o(520);const k={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let d=(()=>{class I{constructor(L,F){function ne(N){return!(!N||N.role!==A.i44.Admin)}function b(N){return!(!N||N.role!==A.i44.Editor&&N.role!==A.i44.Admin)}function re(N){return!(!N||N.role!==A.i44.Curator)}function j(N){return!(!N||N.role!==A.i44.Curator&&N.role!==A.i44.Editor&&N.role!==A.i44.Admin)}function Y(N){var w,se;return!(!N||N.role!==A.i44.Editor&&N.role!==A.i44.Admin||!N.mostRecentConflictOfInterestStatement||(null===(w=N.mostRecentConflictOfInterestStatement)||void 0===w?void 0:w.coiStatus)!=A.Mgx.Conflict&&(null===(se=N.mostRecentConflictOfInterestStatement)||void 0===se?void 0:se.coiStatus)!=A.Mgx.Valid)}function W(N){if(N.mostRecentOrganizationId)return N.organizations.find(w=>w.id===N.mostRecentOrganizationId)}this.viewerBaseGQL=L,this.http=F,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(N=>({data:N.data,loading:N.loading,networkStatus:N.networkStatus})),(0,t.d)(1)),this.isLoading$=this.data$.pipe((0,n.j)("loading"),(0,s.O)(!0)),this.viewer$=this.data$.pipe((0,n.j)("data","viewer"),(0,i.U)(N=>Object.assign(Object.assign({},N),{signedIn:null!==N,signedOut:null===N,canCurate:j(N),canModerate:Y(N),isAdmin:ne(N),isEditor:b(N),isCurator:re(N),organizations:null===N?[]:N.organizations,mostRecentOrg:null===N?void 0:W(N),invalidCoi:b(N)&&(!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement.coiStatus===A.Mgx.Expired||N.mostRecentConflictOfInterestStatement.coiStatus===A.Mgx.Missing)})),(0,s.O)(k),(0,t.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(N=>N.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(N=>N.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(N=>ne(N))),this.isEditor$=this.viewer$.pipe((0,i.U)(N=>b(N))),this.isCurator$=this.viewer$.pipe((0,i.U)(N=>re(N))),this.canCurate$=this.viewer$.pipe((0,i.U)(N=>j(N))),this.canModerate$=this.viewer$.pipe((0,i.U)(N=>Y(N)))}signOut(){this.http.get("/api/sign_out").subscribe(L=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return I.\u0275fac=function(L){return new(L||I)(_.LFG(A.Tt7),_.LFG(c.eN))},I.\u0275prov=_.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})()},6654:(ve,q,o)=>{o.d(q,{a:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(A){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(A){return new(A||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(A,_){},encapsulation:2}),n})()},915:(ve,q,o)=>{function i(t){let n;if("NA"===t)n=["N/A"];else if("SENSITIVITYRESPONSE"===t)n=["Sensitivity","/","Response"];else{n=t.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}o.d(q,{E:()=>i})},6530:(ve,q,o)=>{function i(t){switch(t){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return t}}o.d(q,{c:()=>i})},6123:(ve,q,o)=>{o.d(q,{U:()=>A});var i=o(8929),t=o(591),n=o(7625),s=o(537);class A{constructor(c){this.networkErrorService=c}mutate(c,k,d,I){let E=new i.xQ,L={isSubmitting$:new t.X(!1),submitSuccess$:new t.X(!1),submitError$:new t.X([]),cleanup:()=>{E.next(),E.complete()}};return L.isSubmitting$.next(!0),c.mutate(k,d).pipe((0,n.R)(E),(0,s.x)(()=>{L.isSubmitting$.next(!1)})).subscribe({next:F=>{F.data&&I&&I(F.data)},error:F=>{F.graphQLErrors.length>0?L.submitError$.next(F.graphQLErrors.map(ne=>ne.message)):F.networkError&&this.networkErrorService.networkError$.next(F.networkError),L.cleanup()},complete:()=>{L.submitError$.next([]),L.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),L.cleanup()}}),L}}},9397:(ve,q,o)=>{o.d(q,{l:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(A){this.host=A,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(A){return new(A||n)(i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(ve,q,o)=>{o.d(q,{Y:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},9180:(ve,q,o)=>{o.d(q,{Z:()=>n});var i=o(5e3);const t=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(_,c){1&_&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ve,q,o)=>{o.d(q,{R:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},822:(ve,q,o)=>{o.d(q,{V:()=>k});var i=o(5e3),t=o(9808),n=o(2359);function s(d,I){if(1&d&&i._UZ(0,"nz-alert",4),2&d){const E=i.oxw();i.Q6J("nzDescription",E.errors[0])}}function A(d,I){if(1&d&&i._UZ(0,"nz-alert",5),2&d){i.oxw();const E=i.MAs(3);i.Q6J("nzDescription",E)}}function _(d,I){if(1&d&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&d){const E=I.$implicit;i.xp6(1),i.Oqu(E)}}function c(d,I){if(1&d&&(i.TgZ(0,"ul",6),i.YNc(1,_,2,1,"li",7),i.qZA()),2&d){const E=i.oxw();i.xp6(1),i.Q6J("ngForOf",E.errors)}}let k=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(E){return new(E||d)},d.\u0275cmp=i.Xpm({type:d,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(E,L){1&E&&(i.YNc(0,s,1,1,"nz-alert",0),i.YNc(1,A,1,1,"nz-alert",1),i.YNc(2,c,2,1,"ng-template",2,3,i.W1O)),2&E&&(i.Q6J("ngIf",1===L.errors.length),i.xp6(1),i.Q6J("ngIf",L.errors.length>1))},directives:[t.O5,n.r,t.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),d})()},7008:(ve,q,o)=>{o.d(q,{B:()=>s});var i=o(9808),t=o(2359),n=o(5e3);let s=(()=>{class A{}return A.\u0275fac=function(c){return new(c||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({imports:[[i.ez,t.L]]}),A})()},6789:(ve,q,o)=>{o.d(q,{_:()=>L});var i=o(9808),t=o(7484),n=o(5109),s=o(5482),A=o(6949),_=o(9552),c=o(8776),k=o(647),d=o(404),I=o(5e3);let E=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=I.oAB({type:F}),F.\u0275inj=I.cJS({imports:[[i.ez,A.WG,c.X0,_.j,s.cD,k.PV,d.cg,n.s]]}),F})(),L=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=I.oAB({type:F}),F.\u0275inj=I.cJS({imports:[[i.ez,A.WG,c.X0,t.vh,_.j,s.cD,k.PV,d.cg,E,n.s]]}),F})()},1825:(ve,q,o)=>{o.d(q,{A:()=>k});var i=o(9808),t=o(6042),n=o(6699),s=o(3677),A=o(8144),_=o(6949),c=o(5e3);let k=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({imports:[[i.ez,_.WG,t.sL,n.Rt,s.b1,A.zf]]}),d})()},1793:(ve,q,o)=>{o.d(q,{m:()=>c});var i=o(5e3),t=o(8929),n=o(5254),s=o(2198),A=o(4850),_=o(7625);let c=(()=>{class k{constructor(I){this.el=I,this.domChange=new i.vpe,this.destroy$=new t.xQ,this.changes=new MutationObserver(E=>{this.mutation$=(0,n.D)(E),this.disabledChange$=this.mutation$.pipe((0,s.h)(L=>"disabled"===L.attributeName),(0,A.U)(L=>({type:"disabled",change:L.target.disabled}))),this.disabledChange$.pipe((0,_.R)(this.destroy$)).subscribe(L=>{this.domChange.emit(L)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return k.\u0275fac=function(I){return new(I||k)(i.Y36(i.SBq))},k.\u0275dir=i.lG2({type:k,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),k})()},7905:(ve,q,o)=>{o.d(q,{yQ:()=>s,nT:()=>_});var i=o(915),t=o(712),n=o(444),s=(()=>{return(c=s||(s={})).EVIDENCE="Evidence",c.ASSERTION="Assertion",s;var c})();class _{constructor(k){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(t.uBv).map(d=>d):(0,n.o6)(t.kqt).map(d=>d),this.getSignificanceOptions=d=>{const I=this.validStates.get(d);return(null==I?void 0:I.clinicalSignificance)||[]},this.isValidSignificanceOption=(d,I)=>{const E=this.validStates.get(d);return!E||E.clinicalSignificance.includes(I)},this.getDirectionOptions=d=>{const I=this.validStates.get(d);return(null==I?void 0:I.entityDirection)||[]},this.isValidDirectionOption=(d,I)=>{const E=this.validStates.get(d);return!E||E.entityDirection.includes(I)},this.requiresDrug=d=>{const I=this.validStates.get(d);return void 0===I||I.requiresDrug},this.requiresDisease=d=>{const I=this.validStates.get(d);return void 0===I||I.requiresDisease},this.requiresAcmgCodes=d=>{const I=this.validStates.get(d);return void 0===I||I.requiresAcmgCodes},this.requiresAmpLevel=d=>{const I=this.validStates.get(d);return void 0===I||I.requiresAmpLevel},this.allowsFdaApproval=d=>{const I=this.validStates.get(d);return void 0===I||I.allowsFdaApproval},this.getOptionsFromEnums=d=>0===d.length?[]:d.map(I=>({value:I,label:(0,i.E)(I)})),this.entityName=k,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},6064:(ve,q,o)=>{o.d(q,{_:()=>n});var i=o(712),t=o(7905);class n extends t.nT{constructor(){super(t.yQ.EVIDENCE),this.validStates.set(i.kqt.Predictive,{entityType:i.kqt.Predictive,clinicalSignificance:[i._Aq.Sensitivityresponse,i._Aq.Resistance,i._Aq.AdverseResponse,i._Aq.ReducedSensitivity,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Diagnostic,{entityType:i.kqt.Diagnostic,clinicalSignificance:[i._Aq.Positive,i._Aq.Negative],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Prognostic,{entityType:i.kqt.Prognostic,clinicalSignificance:[i._Aq.BetterOutcome,i._Aq.PoorOutcome,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Oncogenic,{entityType:i.kqt.Oncogenic,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Predisposing,{entityType:i.kqt.Predisposing,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Functional,{entityType:i.kqt.Functional,clinicalSignificance:[i._Aq.GainOfFunction,i._Aq.LossOfFunction,i._Aq.UnalteredFunction,i._Aq.Neomorphic,i._Aq.DominantNegative,i._Aq.Unknown],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ve,q,o)=>{o.d(q,{E:()=>ne});var i=o(9808),t=o(3075),n=o(325),s=o(8776),A=o(304),_=o(6042),c=o(5e3),k=o(2643),d=o(2683);function I(b,re){if(1&b){const j=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(j),c.oxw().callOnClick()}),c._uU(1," Cancel\n"),c.qZA()}}function E(b,re){if(1&b&&(c.TgZ(0,"button",3),c._uU(1," Cancel "),c.qZA()),2&b){const j=c.oxw();c.Q6J("routerLink",j.redirectPath)}}const F={name:"cancel-button",component:(()=>{class b extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var j,Y,W,N;(null===(j=this.field.templateOptions)||void 0===j?void 0:j.onClick)?this.callOnClick=null===(Y=this.field.templateOptions)||void 0===Y?void 0:Y.onClick:(null===(W=this.field.templateOptions)||void 0===W?void 0:W.redirectPath)&&(this.redirectPath=null===(N=this.field.templateOptions)||void 0===N?void 0:N.redirectPath)}}return b.\u0275fac=function(){let re;return function(Y){return(re||(re=c.n5z(b)))(Y||b)}}(),b.\u0275cmp=c.Xpm({type:b,selectors:[["cvc-cancel-button"]],features:[c.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(j,Y){if(1&j&&(c.YNc(0,I,2,0,"button",0),c.YNc(1,E,2,1,"ng-template",null,1,c.W1O)),2&j){const W=c.MAs(2);c.Q6J("ngIf",Y.callOnClick)("ngIfElse",W)}},directives:[i.O5,_.ix,k.dQ,d.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),b})()};let ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=c.oAB({type:b}),b.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.sL,n.Bz,A.F,s.X0.forChild({types:[F]})]]}),b})()},4623:(ve,q,o)=>{o.d(q,{K:()=>I});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),A=o(3075);const c={name:"comment-textarea",component:(()=>{class E extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(F,ne)=>{var b;return`Comments must be at least ${null===(b=ne.templateOptions)||void 0===b?void 0:b.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return E.\u0275fac=function(){let L;return function(ne){return(L||(L=n.n5z(E)))(ne||E)}}(),E.\u0275cmp=n.Xpm({type:E,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(F,ne){1&F&&n._UZ(0,"textarea",0),2&F&&n.Q6J("formControl",ne.formControl)("formlyAttributes",ne.field)},directives:[s.Zp,A.Fj,A.JJ,A.oH,t.VQ],styles:[""],changeDetection:0}),E})(),wrappers:["form-field"]};var k=o(4546),d=o(9139);let I=(()=>{class E{}return E.\u0275fac=function(F){return new(F||E)},E.\u0275mod=n.oAB({type:E}),E.\u0275inj=n.cJS({imports:[[i.ez,A.UX,t.X0.forChild({types:[c]}),d.u,k.U5,s.o7]]}),E})()},1605:(ve,q,o)=>{o.d(q,{e:()=>Be});var i=o(9808),t=o(3075),n=o(8776),s=o(3793),A=o(304),_=o(8054),c=o(5e3),k=o(1894),d=o(4546);let I=(()=>{class oe{constructor(){console.log("FormCardDirective constructed.")}}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275dir=c.lG2({type:oe,selectors:[["",8,"cvc-form-card-control"]]}),oe})();var E=o(7484),L=o(404);function F(oe,Ie){1&oe&&c._UZ(0,"i",7)}function ne(oe,Ie){if(1&oe&&(c.TgZ(0,"nz-form-label",5),c._uU(1),c.YNc(2,F,1,0,"i",6),c.qZA()),2&oe){const P=c.oxw();c.Q6J("nzRequired",P.to.required&&!0!==P.to.hideRequiredMarker)("nzFor",P.id),c.xp6(1),c.hij(" ",P.to.label," "),c.xp6(1),c.Q6J("ngIf",P.to.helpText)}}function b(oe,Ie){if(1&oe&&c._UZ(0,"formly-validation-message",9),2&oe){const P=c.oxw(2);c.Q6J("field",P.field)}}function re(oe,Ie){if(1&oe&&c.YNc(0,b,1,1,"formly-validation-message",8),2&oe){const P=c.oxw();c.Q6J("ngIf",P.showError)}}let j=(()=>{class oe extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275cmp=c.Xpm({type:oe,selectors:[["form-card-wrapper"]],features:[c.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(P,ce){if(1&P&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",0),c.TgZ(2,"nz-card",1),c.GkF(3,null,2),c.qZA(),c.YNc(5,ne,3,4,"ng-template",null,3,c.W1O),c.YNc(7,re,1,1,"ng-template",null,4,c.W1O),c.qZA(),c.qZA()),2&P){const Z=c.MAs(6),_e=c.MAs(8);c.xp6(1),c.Q6J("nzValidateStatus",ce.errorState)("nzErrorTip",_e),c.xp6(1),c.Q6J("nzTitle",Z)("nzExtra",_e)}},directives:[k.SK,d.Nx,k.t3,d.Fd,I,E.bd,d.iK,i.O5,L.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),oe})();var Y=o(647),W=o(5109);const N={wrappers:[{name:"form-card",component:j}]};let w=(()=>{class oe{}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.UX,d.U5,E.vh,Y.PV,L.cg,n.X0.forChild(N),W.s]]}),oe})();var se=o(8929),G=o(7625),D=o(373),h=o(4850),x=o(712),B=o(9397),S=o(6949),Q=o(8144),u=o(3618),$=o(3193),U=o(8926);function K(oe,Ie){if(1&oe&&(c._UZ(0,"span",10),c.ALo(1,"highlightTypeahead")),2&oe){const P=c.oxw().$implicit,ce=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,P.label,ce.to.searchString),c.oJD)}}function ze(oe,Ie){if(1&oe&&(c._UZ(0,"span",12),c.ALo(1,"highlightTypeahead")),2&oe){const P=c.oxw(2).$implicit,ce=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,P.gene.geneAliases.join(", "),ce.to.searchString),c.oJD)}}function Te(oe,Ie){1&oe&&(c.ynx(0),c.YNc(1,ze,2,4,"span",11),c.BQk())}function Se(oe,Ie){if(1&oe&&(c.TgZ(0,"nz-option",7),c.TgZ(1,"nz-space"),c.YNc(2,K,2,4,"span",8),c.YNc(3,Te,2,0,"ng-container",9),c.qZA(),c.qZA()),2&oe){const P=Ie.$implicit;c.Q6J("nzLabel",P.tooltip)("nzValue",P.gene),c.xp6(3),c.Q6J("ngIf",P.gene.geneAliases.length>0)}}function Ae(oe,Ie){if(1&oe&&(c.ynx(0),c._uU(1),c.ALo(2,"json"),c.YNc(3,Se,4,3,"nz-option",6),c.BQk()),2&oe){const P=Ie.ngrxLet;c.xp6(1),c.hij(" ",c.lcZ(2,2,P)," "),c.xp6(2),c.Q6J("ngForOf",P)}}function ie(oe,Ie){1&oe&&c._uU(0," No gene found in CIViC that matches the string provided. ")}function Ce(oe,Ie){if(1&oe){const P=c.EpF();c.ynx(0),c.TgZ(1,"nz-select",2,3),c.NdJ("nzOnSearch",function(Z){return c.CHM(P),c.oxw().to.onSearch(Z)}),c.YNc(3,Ae,4,4,"ng-container",4),c.qZA(),c.YNc(4,ie,1,0,"ng-template",null,5,c.W1O),c.BQk()}if(2&oe){const P=c.MAs(5),ce=c.oxw();c.xp6(1),c.Q6J("formControl",ce.formControl)("formlyAttributes",ce.field)("nzPlaceHolder",ce.to.placeholder?ce.to.placeholder:null)("nzNotFoundContent",P)("nzShowArrow",ce.to.showArrow)("nzFilterOption",ce.to.filterOption),c.xp6(2),c.Q6J("ngrxLet",ce.genes$)}}function pe(oe,Ie){if(1&oe&&c._UZ(0,"cvc-gene-tag",13),2&oe){const P=c.oxw();c.Q6J("gene",P.formControl.value)}}const H={name:"cvc-gene-input",component:(()=>{class oe extends n.fS{constructor(P){super(),this.geneTypeaheadQuery=P,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}},this.destroy$=new se.xQ}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,G.R)(this.destroy$),(0,D.j)("data","geneTypeahead"),(0,h.U)(P=>P.map(ce=>{let Z=ce.geneAliases.length>0?`Aliases: ${ce.geneAliases.join(", ")}`:"";return{value:ce.id,tooltip:`${ce.name} (${ce.entrezId}) ${Z}`,label:`${ce.name} (${ce.entrezId})`,gene:ce}})))}ngAfterViewInit(){this.to.onSearch=P=>{P.length<this.to.minLengthSearch||(this.to.searchString=P,this.queryRef.refetch({entrezSymbol:P}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return oe.\u0275fac=function(P){return new(P||oe)(c.Y36(x.Q4m))},oe.\u0275cmp=c.Xpm({type:oe,selectors:[["cvc-gene-input"]],features:[c.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(P,ce){if(1&P&&(c.YNc(0,Ce,6,7,"ng-container",0),c.YNc(1,pe,1,1,"ng-template",null,1,c.W1O)),2&P){const Z=c.MAs(2);c.Q6J("ngIf",!(null!=ce.formControl.value&&ce.formControl.value.id))("ngIfElse",Z)}},directives:[i.O5,_.Vq,B.l,t.JJ,t.oH,n.VQ,S.eJ,i.sg,_.Ip,Q.NU,Q.$1,u.ZU,$.H],pipes:[i.Ts,U.A],styles:[""]}),oe})()};var fe=o(3309),J=o(9444),ge=o(8616);let de=(()=>{class oe{}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.UX,S.WG,n.X0.forChild({types:[H]}),_.LV,Q.zf,u.ZJ,fe.U,J.s,ge.Y]]}),oe})();var Me=o(8390);const $e={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Be=(()=>{class oe{}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275mod=c.oAB({type:oe}),oe.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.LV,A.F,s.F,n.X0.forChild({types:[$e]}),de,Me.N,w]]}),oe})()},8390:(ve,q,o)=>{o.d(q,{N:()=>B});var i=o(9808),t=o(3075),n=o(8776),s=o(4546),A=o(1047),_=o(647),c=o(5e3),k=o(1894),d=o(8481),I=o(2683),E=o(6042),L=o(2643);function F(S,Q){if(1&S){const u=c.EpF();c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",3),c.TgZ(2,"nz-tag",4),c.NdJ("click",function(U){return c.CHM(u),c.oxw().addField(U)}),c._UZ(3,"i",5),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&S){const u=c.oxw();c.xp6(1),c.Q6J("nzValidateStatus",u.errorState),c.xp6(3),c.hij(" ",u.to.addText," ")}}function ne(S,Q){if(1&S){const u=c.EpF();c.TgZ(0,"nz-tag",4),c.NdJ("click",function(U){return c.CHM(u),c.oxw(4).addField(U)}),c._UZ(1,"i",5),c._uU(2),c.qZA()}if(2&S){const u=c.oxw(4);c.xp6(2),c.hij(" ",u.to.addText," ")}}function b(S,Q){if(1&S&&(c.TgZ(0,"div",11),c.YNc(1,ne,3,1,"nz-tag",12),c.qZA()),2&S){const u=c.oxw(2).$implicit,$=c.oxw();c.xp6(1),c.Q6J("ngIf",0==$.to.maxCount||$.to.maxCount>u.model.length)}}function re(S,Q){if(1&S){const u=c.EpF();c.ynx(0),c.TgZ(1,"nz-tag",8),c.TgZ(2,"i",9),c.NdJ("click",function(){c.CHM(u);const U=c.oxw().index;return c.oxw().remove(U)}),c.qZA(),c.qZA(),c.YNc(3,b,2,1,"div",10),c.BQk()}if(2&S){const u=c.oxw().last;c.xp6(3),c.Q6J("ngIf",u)}}function j(S,Q){if(1&S){const u=c.EpF();c.ynx(0),c.TgZ(1,"div",13),c.TgZ(2,"button",14),c.NdJ("click",function(){c.CHM(u);const U=c.oxw().index;return c.oxw().remove(U)}),c._UZ(3,"i",15),c.qZA(),c.qZA(),c.BQk()}}function Y(S,Q){if(1&S&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c._UZ(3,"formly-field",7),c.qZA(),c.YNc(4,re,4,1,"ng-container",1),c.YNc(5,j,4,0,"ng-container",1),c.qZA(),c.qZA()),2&S){const u=Q.$implicit,$=Q.index;c.xp6(2),c.Q6J("ngClass",u.model[$]?"selected-field-col":"default-field-col"),c.xp6(1),c.Q6J("field",u),c.xp6(1),c.Q6J("ngIf",u.model[$]),c.xp6(1),c.Q6J("ngIf",!u.model[$])}}const W=function(S){return{hidden:S}},w={name:"multi-field",component:(()=>{class S extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(u){u&&u.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return S.\u0275fac=function(u){return new(u||S)},S.\u0275cmp=c.Xpm({type:S,selectors:[["cvc-multi-field-type"]],features:[c.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(u,$){1&u&&(c.TgZ(0,"div",0),c.YNc(1,F,5,2,"nz-form-item",1),c.YNc(2,Y,6,4,"nz-form-item",2),c.qZA()),2&u&&(c.Q6J("ngClass",c.VKq(3,W,!0===$.to.hidden)),c.xp6(1),c.Q6J("ngIf",0===(null==$.field.fieldGroup?null:$.field.fieldGroup.length)),c.xp6(1),c.Q6J("ngForOf",$.field.fieldGroup))},directives:[i.mk,i.O5,k.SK,s.Nx,k.t3,s.Fd,d.j,_.Ls,I.w,i.sg,n.cw,E.ix,L.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),S})()};function se(S,Q){if(1&S&&c._UZ(0,"formly-validation-message",3),2&S){const u=c.oxw();c.Q6J("field",u.field)}}const D={name:"cvc-field-errors",component:(()=>{class S extends n.n2{get errorState(){return this.showError?"error":""}}return S.\u0275fac=function(){let Q;return function($){return(Q||(Q=c.n5z(S)))($||S)}}(),S.\u0275cmp=c.Xpm({type:S,selectors:[["cvc-field-errors-wrapper"]],features:[c.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(u,$){if(1&u&&(c.TgZ(0,"nz-form-control",0),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.GkF(3,null,1),c.YNc(5,se,1,1,"ng-template",null,2,c.W1O),c.qZA()),2&u){const U=c.MAs(6);c.Q6J("nzValidateStatus",$.errorState)("nzErrorTip",U),c.xp6(2),c.hij("errorState: ",$.errorState,"")}},directives:[k.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),S})()};let h=(()=>{class S{}return S.\u0275fac=function(u){return new(u||S)},S.\u0275mod=c.oAB({type:S}),S.\u0275inj=c.cJS({imports:[[i.ez,t.UX,s.U5,n.X0.forChild({wrappers:[D]})]]}),S})();var x=o(5109);let B=(()=>{class S{}return S.\u0275fac=function(u){return new(u||S)},S.\u0275mod=c.oAB({type:S}),S.\u0275inj=c.cJS({imports:[[i.ez,t.u5,n.X0.forChild({types:[w]}),t.UX,h,s.U5,A.o7,_.PV,E.sL,x.s,d.X]]}),S})()},7462:(ve,q,o)=>{o.d(q,{o:()=>k});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),A=o(3075);const c={name:"cvc-textarea",component:(()=>{class d extends t.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return d.\u0275fac=function(){let I;return function(L){return(I||(I=n.n5z(d)))(L||d)}}(),d.\u0275cmp=n.Xpm({type:d,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(E,L){1&E&&n._UZ(0,"textarea",0),2&E&&n.Q6J("formControl",L.formControl)("formlyAttributes",L.field)("nzAutosize",L.to.autosize)("placeholder",L.to.placeholder)},directives:[s.Zp,A.Fj,s.rh,A.JJ,A.oH,t.VQ],styles:[""],changeDetection:0}),d})(),wrappers:["form-field"]};let k=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[[i.ez,A.u5,A.UX,t.X0.forChild({types:[c]}),s.o7]]}),d})()},5472:(ve,q,o)=>{o.d(q,{r:()=>L});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),A=o(5482),_=o(1894),c=o(5109),k=o(6789),d=o(5e3);const E={wrappers:[{name:"form-container",component:(()=>{class F extends n.n2{}return F.\u0275fac=function(){let ne;return function(re){return(ne||(ne=d.n5z(F)))(re||F)}}(),F.\u0275cmp=d.Xpm({type:F,selectors:[["cvc-form-container-wrapper"]],features:[d.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(b,re){1&b&&(d.TgZ(0,"nz-row"),d.TgZ(1,"nz-col",0),d.TgZ(2,"nz-card",1),d.GkF(3,null,2),d.qZA(),d.qZA(),d.qZA()),2&b&&(d.xp6(2),d.Q6J("nzTitle",re.to.label))},directives:[_.SK,_.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),F})()}]};let L=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=d.oAB({type:F}),F.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild(E),_.Jb,s.vh,A.cD,k._,c.s]]}),F})()},7695:(ve,q,o)=>{o.d(q,{C:()=>D});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),A=o(5482),_=o(1894),c=o(5109),k=o(6789),d=o(5e3),I=o(9552),E=o(647),L=o(404);function F(h,x){1&h&&d._UZ(0,"div",9),2&h&&d.Q6J("innerHtml",x.ngIf,d.oJD)}function ne(h,x){1&h&&(d.TgZ(0,"div",10),d._uU(1,"Help not available for this field."),d.qZA())}function b(h,x){if(1&h&&(d.TgZ(0,"nz-collapse-panel",6),d.YNc(1,F,1,1,"div",7),d.YNc(2,ne,2,0,"ng-template",null,8,d.W1O),d.qZA()),2&h){const B=x.ngIf,S=d.MAs(3),Q=d.oxw().$implicit,u=d.MAs(3);d.Q6J("nzHeader",B)("nzActive",Q.templateOptions.hasFocus)("nzExtra",u),d.xp6(1),d.Q6J("ngIf",null==Q.templateOptions?null:Q.templateOptions.helpText)("ngIfElse",S)}}function re(h,x){if(1&h&&d._UZ(0,"formly-validation-message",14),2&h){const B=d.oxw(4).$implicit;d.Q6J("field",B)}}function j(h,x){if(1&h&&(d.ynx(0),d._UZ(1,"i",12),d.YNc(2,re,1,1,"ng-template",null,13,d.W1O),d.BQk()),2&h){const B=d.MAs(3);d.xp6(1),d.Q6J("nzTooltipTitle",B)}}function Y(h,x){if(1&h&&(d.ynx(0),d.YNc(1,j,4,1,"ng-container",11),d.BQk()),2&h){const B=x.ngIf;d.xp6(1),d.Q6J("ngIf","INVALID"===B)}}function W(h,x){if(1&h&&(d.YNc(0,Y,2,1,"ng-container",11),d.ALo(1,"ngrxPush")),2&h){const B=d.oxw().$implicit;d.Q6J("ngIf",d.lcZ(1,1,B.formControl.statusChanges))}}function N(h,x){if(1&h&&(d.ynx(0),d.YNc(1,b,4,5,"nz-collapse-panel",4),d.YNc(2,W,2,3,"ng-template",null,5,d.W1O),d.BQk()),2&h){const B=x.$implicit;d.xp6(1),d.Q6J("ngIf",null==B.templateOptions?null:B.templateOptions.label)}}let w=(()=>{class h{constructor(){}ngOnInit(){}}return h.\u0275fac=function(B){return new(B||h)},h.\u0275cmp=d.Xpm({type:h,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(B,S){1&B&&(d.TgZ(0,"nz-affix",0),d.TgZ(1,"nz-card",1),d.TgZ(2,"nz-collapse",2),d.YNc(3,N,4,1,"ng-container",3),d.qZA(),d.qZA(),d.qZA()),2&B&&(d.Q6J("nzOffsetTop",0)("nzTarget",S.affixTo),d.xp6(2),d.Q6J("nzBordered",!1),d.xp6(1),d.Q6J("ngForOf",S.fieldGroup))},directives:[I.$,s.bd,A.yH,i.sg,i.O5,A.Zv,E.Ls,L.SY,n.u_],pipes:[t.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),h})();const G={name:"form-info",component:(()=>{class h extends n.n2{}return h.\u0275fac=function(){let x;return function(S){return(x||(x=d.n5z(h)))(S||h)}}(),h.\u0275cmp=d.Xpm({type:h,selectors:[["cvc-form-info-wrapper"]],features:[d.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(B,S){if(1&B&&(d.TgZ(0,"nz-row",0),d.TgZ(1,"nz-col",1),d.TgZ(2,"nz-card",2),d.GkF(3,null,3),d.qZA(),d.qZA(),d.TgZ(5,"nz-col",1),d.TgZ(6,"div",null,4),d._UZ(8,"cvc-form-info-card",5),d.qZA(),d.qZA(),d.qZA()),2&B){const Q=d.MAs(7);d.xp6(1),d.Q6J("nzSpan",16),d.xp6(1),d.Q6J("nzTitle",S.to.label),d.xp6(3),d.Q6J("nzSpan",8),d.xp6(3),d.Q6J("fieldGroup",S.field.fieldGroup)("affixTo",Q)}},directives:[_.SK,_.t3,s.bd,w],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),h})()};let D=(()=>{class h{}return h.\u0275fac=function(B){return new(B||h)},h.\u0275mod=d.oAB({type:h}),h.\u0275inj=d.cJS({imports:[[i.ez,t.WG,n.X0.forChild({wrappers:[G]}),_.Jb,s.vh,A.cD,k._,c.s]]}),h})()},8785:(ve,q,o)=>{o.d(q,{t:()=>se});var i=o(5e3),t=o(6123),n=o(8929),s=o(7625),A=o(712),_=o(9169),c=o(7484),k=o(9808),d=o(2359),I=o(1894),E=o(4546),L=o(822),F=o(7525),ne=o(3868),b=o(3075),re=o(6042),j=o(2643),Y=o(2683);function W(G,D){1&G&&i._UZ(0,"nz-alert",7)}function N(G,D){if(1&G&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&G){const h=i.oxw();i.xp6(1),i.Q6J("errors",h.errorMessages)}}function w(G,D){if(1&G){const h=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(B){return i.CHM(h),i.oxw().coiText=B}),i.qZA(),i.qZA()}if(2&G){const h=i.oxw();i.xp6(1),i.Q6J("ngModel",h.coiText)}}let se=(()=>{class G{constructor(h,x){this.updateCoiGql=h,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new t.U(x)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let x=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});x.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(B=>{B&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),x.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(B=>{B&&(this.errorMessages=B,this.success=!1)}),x.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(B=>{this.loading=B})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(h){return new(h||G)(i.Y36(A.IP1),i.Y36(_.Y))},G.\u0275cmp=i.Xpm({type:G,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(h,x){1&h&&(i.TgZ(0,"nz-card"),i.YNc(1,W,1,0,"nz-alert",0),i.YNc(2,N,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(S){return x.coiStatus=S}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,w,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return x.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&h&&(i.xp6(1),i.Q6J("ngIf",x.success),i.xp6(1),i.Q6J("ngIf",x.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",x.loading),i.xp6(2),i.Q6J("ngModel",x.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===x.coiStatus),i.xp6(2),i.Q6J("disabled",x.loading||"coiPresent"===x.coiStatus&&(void 0===x.coiText||x.coiText.length<10)))},directives:[c.bd,k.O5,d.r,I.SK,E.Nx,L.V,F.W,ne.Dg,b.JJ,b.On,ne.Of,b.Fj,re.ix,j.dQ,Y.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),G})()},330:(ve,q,o)=>{o.d(q,{e:()=>L});var i=o(9808),t=o(3075),n=o(6949),s=o(7484),A=o(2359),_=o(4546),c=o(7008),k=o(3868),d=o(7525),I=o(6042),E=o(5e3);let L=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=E.oAB({type:F}),F.\u0275inj=E.cJS({imports:[[i.ez,t.u5,_.U5,t.UX,n.WG,s.vh,A.L,k.aF,I.sL,d.j,c.B]]}),F})()},3434:(ve,q,o)=>{o.d(q,{G:()=>se});var i=o(3075),t=o(8929),n=o(6064),s=o(6123),A=o(7625),_=o(5e3),c=o(712),k=o(9169),d=o(325),I=o(7525),E=o(4546),L=o(9808),F=o(8776),ne=o(1894),b=o(822),re=o(2359);function j(G,D){1&G&&_.GkF(0)}function Y(G,D){if(1&G&&(_.TgZ(0,"nz-form-item"),_._UZ(1,"cvc-form-errors-alert",6),_.qZA()),2&G){const h=_.oxw(2);_.xp6(1),_.Q6J("errors",h.errorMessages)}}function W(G,D){if(1&G&&(_.TgZ(0,"p"),_._uU(1,"View "),_.TgZ(2,"a",10),_._uU(3,"its details"),_.qZA(),_._uU(4,"."),_.qZA()),2&G){const h=_.oxw(3);_.xp6(2),_.MGl("routerLink","/variants/",h.newId,"/summary")}}function N(G,D){if(1&G&&(_.ynx(0),_._UZ(1,"nz-alert",7),_.YNc(2,W,5,1,"ng-template",8,9,_.W1O),_.BQk()),2&G){const h=_.MAs(3),x=_.oxw(2);_.xp6(1),_.Q6J("nzMessage",x.isNew?"Variant Created":"Variant Already Exists")("nzDescription",h)}}function w(G,D){if(1&G&&(_.YNc(0,Y,2,1,"nz-form-item",5),_.YNc(1,N,4,2,"ng-container",5)),2&G){const h=_.oxw();_.Q6J("ngIf",h.errorMessages.length>0),_.xp6(1),_.Q6J("ngIf",h.success)}}let se=(()=>{class G{constructor(h,x,B){this.submitVariantGQL=h,this.networkErrorService=x,this.route=B,this.destroy$=new t.xQ,this.formGroup=new i.cw({}),this.formOptions={formState:new n._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(x),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(h){let x=null==h?void 0:h.fields.gene[0].id,B=null==h?void 0:h.fields.variant;if(x&&B){let Q=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:x,name:B},{},u=>{this.newId=u.addVariant.variant.id,this.isNew=u.addVariant.new});Q.submitSuccess$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{u&&(this.success=!0)}),Q.submitError$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{u&&(this.errorMessages=u,this.success=!1)}),Q.isSubmitting$.pipe((0,A.R)(this.destroy$)).subscribe(u=>{this.loading=u})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(h){return new(h||G)(_.Y36(c.LUc),_.Y36(k.Y),_.Y36(d.gz))},G.\u0275cmp=_.Xpm({type:G,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(h,x){if(1&h&&(_.TgZ(0,"nz-spin",0),_.TgZ(1,"form",1),_.NdJ("ngSubmit",function(){return x.submitVariant(x.formModel)}),_.YNc(2,j,1,0,"ng-container",2),_.TgZ(3,"formly-form",3),_.NdJ("modelChange",function(S){return x.formModel=S}),_.qZA(),_.qZA(),_.qZA(),_.YNc(4,w,2,2,"ng-template",null,4,_.W1O)),2&h){const B=_.MAs(5);_.Q6J("nzSpinning",x.loading),_.xp6(1),_.Q6J("formGroup",x.formGroup),_.xp6(1),_.Q6J("ngTemplateOutlet",B),_.xp6(1),_.Q6J("form",x.formGroup)("fields",x.formFields)("model",x.formModel)("options",x.formOptions)}},directives:[I.W,i._Y,i.JL,E.Lr,i.sg,L.tP,F.T7,L.O5,ne.SK,E.Nx,b.V,re.r,d.yS],styles:[""]}),G})()},7058:(ve,q,o)=>{o.d(q,{e:()=>U});var i=o(9808),t=o(4623),n=o(4375),s=o(7008),A=o(7695),_=o(8390),c=o(7462),k=o(8776),d=o(5109),I=o(2359),E=o(6042),L=o(4546),F=o(1894),ne=o(3075),b=o(325),re=o(1605),j=o(7525),Y=o(5472),W=o(4889),N=o(7484),w=o(8144),se=o(3618),G=o(5e3),D=o(9180),h=o(2643),x=o(1793),B=o(2683);const Q={name:"submit-button",component:(()=>{class K extends k.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275cmp=G.Xpm({type:K,selectors:[["cvc-submit-button-type"]],features:[G.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Te,Se){1&Te&&(G.TgZ(0,"cvc-form-buttons"),G.TgZ(1,"button",0),G._uU(2),G.qZA(),G.qZA()),2&Te&&(G.xp6(1),G.Q6J("disabled",!Se.form.valid),G.xp6(1),G.hij(" ",Se.to.submitLabel," "))},directives:[D.Z,E.ix,h.dQ,x.m,B.w],styles:[""],changeDetection:0}),K})()};var u=o(1825);let $=(()=>{class K{}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275mod=G.oAB({type:K}),K.\u0275inj=G.cJS({imports:[[i.ez,ne.UX,k.X0.forChild({types:[Q]}),E.sL,n.R,u.A]]}),K})(),U=(()=>{class K{}return K.\u0275fac=function(Te){return new(Te||K)},K.\u0275mod=G.oAB({type:K}),K.\u0275inj=G.cJS({imports:[[i.ez,b.Bz,ne.UX,d.s,L.U5,I.L,F.Jb,E.sL,j.j,N.vh,w.zf,se.ZJ,k.X0,s.B,n.R,A.C,_.N,c.o,t.K,re.e,Y.r,W.E,$,d.s]]}),K})()},712:(ve,q,o)=>{o.d(q,{ti:()=>ci,$G1:()=>hr,iGM:()=>cr,KNk:()=>Cr,T97:()=>Er,RMv:()=>Qr,LUc:()=>Jr,iwm:()=>he,Vr2:()=>g,A94:()=>Fs,mdl:()=>me,Gbq:()=>ho,bgg:()=>nr,u4i:()=>ye,ejK:()=>bs,uBv:()=>Fe,td:()=>zo,Tq1:()=>No,q8c:()=>Ko,WRV:()=>Mi,IZ6:()=>Li,qf4:()=>Ui,Rdc:()=>Ki,gtM:()=>Ur,fpJ:()=>br,k2T:()=>Fr,UWf:()=>Oi,cMj:()=>Bs,UIR:()=>Co,E8d:()=>Re,P_b:()=>To,Mgx:()=>Ge,iST:()=>Eo,Kk:()=>Oo,OfU:()=>ke,kQf:()=>zi,l4w:()=>Ts,JQ3:()=>Br,db2:()=>ca,h01:()=>Je,wg3:()=>Us,k7O:()=>Mo,kv3:()=>zr,R8w:()=>qe,GB2:()=>Qs,Zyn:()=>rt,dUU:()=>Lo,kq9:()=>ct,vRc:()=>Tr,Ud2:()=>Fo,dwB:()=>Vs,GYx:()=>gr,AO2:()=>Ze,YMi:()=>bo,BTF:()=>Bo,wJ2:()=>ot,eY8:()=>Qo,_Aq:()=>ut,pHu:()=>Ws,tI1:()=>st,FId:()=>ns,Q_P:()=>Xr,Sx0:()=>y,Ybm:()=>Uo,Cp0:()=>ee,RTy:()=>R,m55:()=>ue,sBY:()=>Js,kqt:()=>De,Zhw:()=>Or,B0s:()=>ss,rzy:()=>Vo,OIL:()=>Wo,BQZ:()=>xe,sfv:()=>mt,TNk:()=>Ks,rJ8:()=>Jo,FOU:()=>us,Q4m:()=>Mr,Fvz:()=>gt,cCu:()=>Xs,_jb:()=>Ei,MYm:()=>Ti,oRL:()=>ft,lfy:()=>Nr,fow:()=>ht,X5f:()=>ei,WOS:()=>ea,Lr0:()=>na,Del:()=>ia,xlL:()=>vt,io:()=>ni,WGV:()=>sa,OHm:()=>ii,lYz:()=>zt,FKQ:()=>Lr,B97:()=>si,mII:()=>ur,ghc:()=>Xo,NQC:()=>_t,JDX:()=>Ct,VZq:()=>ui,EwB:()=>cs,otH:()=>gi,FJi:()=>yt,L5n:()=>hi,rZD:()=>Tt,SrV:()=>It,Bk6:()=>ua,TiL:()=>Ni,yic:()=>Et,SJD:()=>on,F3s:()=>Dt,jw9:()=>Ot,g0X:()=>pa,iXf:()=>bn,NbY:()=>Vr,kQl:()=>St,LLl:()=>sr,WFw:()=>is,tji:()=>Ms,o71:()=>Mt,jMx:()=>Ta,A4J:()=>Ci,c$m:()=>ir,Vj7:()=>es,D9L:()=>ps,SWk:()=>gs,aw3:()=>Es,Xft:()=>Ls,mpB:()=>At,m$d:()=>Ca,IP1:()=>zs,LiH:()=>za,wRZ:()=>hs,wbP:()=>Cs,sLD:()=>ga,yqR:()=>ha,cEv:()=>Fi,i44:()=>Nt,vMt:()=>pr,tJ6:()=>bi,IRu:()=>xt,Qzn:()=>pi,iJT:()=>Na,qP7:()=>at,Qtd:()=>Ea,Zo2:()=>Bi,ROj:()=>Os,FB1:()=>Gt,q1D:()=>Oa,d4o:()=>Lt,huM:()=>Pt,ZYZ:()=>Wi,nnL:()=>Ns,Bo4:()=>La,ubO:()=>Ma,tw_:()=>Qi,wpb:()=>Ft,BnY:()=>Kr,_eC:()=>Wr,fwG:()=>Vi,zwS:()=>Ji,pP7:()=>Rt,Tt7:()=>Xi,Kmw:()=>er});var i=o(655);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}var s=o(9245);function A(e,a){for(var M,r=/\r\n|[\n\r]/g,f=1,O=a+1;(M=r.exec(e.body))&&M.index<a;)f+=1,O=a+1-(M.index+M[0].length);return{line:f,column:O}}function _(e){return c(e.source,A(e.source,e.start))}function c(e,a){var r=e.locationOffset.column-1,f=d(r)+e.body,O=a.line-1,V=a.line+(e.locationOffset.line-1),ae=a.column+(1===a.line?r:0),Ne="".concat(e.name,":").concat(V,":").concat(ae,"\n"),Ue=f.split(/\r\n|[\n\r]/g),it=Ue[O];if(it.length>120){for(var bt=Math.floor(ae/80),wt=ae%80,je=[],Qe=0;Qe<it.length;Qe+=80)je.push(it.slice(Qe,Qe+80));return Ne+k([["".concat(V),je[0]]].concat(je.slice(1,bt+1).map(function(Qt){return["",Qt]}),[[" ",d(wt-1)+"^"],["",je[bt+1]]]))}return Ne+k([["".concat(V-1),Ue[O-1]],["".concat(V),it],["",d(ae-1)+"^"],["".concat(V+1),Ue[O+1]]])}function k(e){var a=e.filter(function(f){return void 0!==f[1]}),r=Math.max.apply(Math,a.map(function(f){return f[0].length}));return a.map(function(f){var M=f[1];return function I(e,a){return d(e-a.length)+a}(r,f[0])+(M?" | "+M:" |")}).join("\n")}function d(e){return Array(e+1).join(" ")}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function F(e,a){for(var r=0;r<a.length;r++){var f=a[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(e,f.key,f)}}function j(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?Y(e):a}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){var a="function"==typeof Map?new Map:void 0;return W=function(f){if(null===f||!function se(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(f))return f;if("function"!=typeof f)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(f))return a.get(f);a.set(f,O)}function O(){return N(f,arguments,D(this).constructor)}return O.prototype=Object.create(f.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),G(O,f)},W(e)}function N(e,a,r){return(N=w()?Reflect.construct:function(O,M,V){var X=[null];X.push.apply(X,M);var Ne=new(Function.bind.apply(O,X));return V&&G(Ne,V.prototype),Ne}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function G(e,a){return(G=Object.setPrototypeOf||function(f,O){return f.__proto__=O,f})(e,a)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}var h=function(e){!function b(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&G(e,a)}(r,e);var a=function re(e){var a=w();return function(){var O,f=D(e);if(a){var M=D(this).constructor;O=Reflect.construct(f,arguments,M)}else O=f.apply(this,arguments);return j(this,O)}}(r);function r(f,O,M,V,X,ae,Ne){var Ue,it,bt,wt,je;(function L(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r),je=a.call(this,f);var qt,Qe=Array.isArray(O)?0!==O.length?O:void 0:O?[O]:void 0,Qt=M;!Qt&&Qe&&(Qt=null===(qt=Qe[0].loc)||void 0===qt?void 0:qt.source);var Vt,$t=V;!$t&&Qe&&($t=Qe.reduce(function(dt,Bt){return Bt.loc&&dt.push(Bt.loc.start),dt},[])),$t&&0===$t.length&&($t=void 0),V&&M?Vt=V.map(function(dt){return A(M,dt)}):Qe&&(Vt=Qe.reduce(function(dt,Bt){return Bt.loc&&dt.push(A(Bt.loc.source,Bt.loc.start)),dt},[]));var Yt=Ne;if(null==Yt&&null!=ae){var an=ae.extensions;(function n(e){return"object"==t(e)&&null!==e})(an)&&(Yt=an)}return Object.defineProperties(Y(je),{name:{value:"GraphQLError"},message:{value:f,enumerable:!0,writable:!0},locations:{value:null!==(Ue=Vt)&&void 0!==Ue?Ue:void 0,enumerable:null!=Vt},path:{value:null!=X?X:void 0,enumerable:null!=X},nodes:{value:null!=Qe?Qe:void 0},source:{value:null!==(it=Qt)&&void 0!==it?it:void 0},positions:{value:null!==(bt=$t)&&void 0!==bt?bt:void 0},originalError:{value:ae},extensions:{value:null!==(wt=Yt)&&void 0!==wt?wt:void 0,enumerable:null!=Yt}}),(null==ae?void 0:ae.stack)?(Object.defineProperty(Y(je),"stack",{value:ae.stack,writable:!0,configurable:!0}),j(je)):(Error.captureStackTrace?Error.captureStackTrace(Y(je),r):Object.defineProperty(Y(je),"stack",{value:Error().stack,writable:!0,configurable:!0}),je)}return function ne(e,a,r){a&&F(e.prototype,a),r&&F(e,r)}(r,[{key:"toString",value:function(){return function x(e){var a=e.message;if(e.nodes)for(var r=0,f=e.nodes;r<f.length;r++){var O=f[r];O.loc&&(a+="\n\n"+_(O.loc))}else if(e.source&&e.locations)for(var M=0,V=e.locations;M<V.length;M++)a+="\n\n"+c(e.source,V[M]);return a}(this)}},{key:s.YF,get:function(){return"Object"}}]),r}(W(Error));function B(e,a,r){return new h("Syntax Error: ".concat(r),void 0,e,[a])}var S=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),Q=o(848),u=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),$=o(6261),U=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),K=o(2032),ze=function(){function e(r){var f=new Q.WU(u.SOF,0,0,0,0,null);this.source=r,this.lastToken=f,this.token=f,this.line=1,this.lineStart=0}var a=e.prototype;return a.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},a.lookahead=function(){var f=this.token;if(f.kind!==u.EOF)do{var O;f=null!==(O=f.next)&&void 0!==O?O:f.next=Ae(this,f)}while(f.kind===u.COMMENT);return f},e}();function Se(e){return isNaN(e)?u.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Ae(e,a){for(var r=e.source,f=r.body,O=f.length,M=a.end;M<O;){var V=f.charCodeAt(M),X=e.line,ae=1+M-e.lineStart;switch(V){case 65279:case 9:case 32:case 44:++M;continue;case 10:++M,++e.line,e.lineStart=M;continue;case 13:10===f.charCodeAt(M+1)?M+=2:++M,++e.line,e.lineStart=M;continue;case 33:return new Q.WU(u.BANG,M,M+1,X,ae,a);case 35:return Ce(r,M,X,ae,a);case 36:return new Q.WU(u.DOLLAR,M,M+1,X,ae,a);case 38:return new Q.WU(u.AMP,M,M+1,X,ae,a);case 40:return new Q.WU(u.PAREN_L,M,M+1,X,ae,a);case 41:return new Q.WU(u.PAREN_R,M,M+1,X,ae,a);case 46:if(46===f.charCodeAt(M+1)&&46===f.charCodeAt(M+2))return new Q.WU(u.SPREAD,M,M+3,X,ae,a);break;case 58:return new Q.WU(u.COLON,M,M+1,X,ae,a);case 61:return new Q.WU(u.EQUALS,M,M+1,X,ae,a);case 64:return new Q.WU(u.AT,M,M+1,X,ae,a);case 91:return new Q.WU(u.BRACKET_L,M,M+1,X,ae,a);case 93:return new Q.WU(u.BRACKET_R,M,M+1,X,ae,a);case 123:return new Q.WU(u.BRACE_L,M,M+1,X,ae,a);case 124:return new Q.WU(u.PIPE,M,M+1,X,ae,a);case 125:return new Q.WU(u.BRACE_R,M,M+1,X,ae,a);case 34:return 34===f.charCodeAt(M+1)&&34===f.charCodeAt(M+2)?fe(r,M,X,ae,a,e):H(r,M,X,ae,a);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return pe(r,M,V,X,ae,a);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return de(r,M,X,ae,a)}throw B(r,M,ie(V))}return new Q.WU(u.EOF,O,O,e.line,1+M-e.lineStart,a)}function ie(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Se(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Se(e),".")}function Ce(e,a,r,f,O){var V,M=e.body,X=a;do{V=M.charCodeAt(++X)}while(!isNaN(V)&&(V>31||9===V));return new Q.WU(u.COMMENT,a,X,r,f,O,M.slice(a+1,X))}function pe(e,a,r,f,O,M){var V=e.body,X=r,ae=a,Ne=!1;if(45===X&&(X=V.charCodeAt(++ae)),48===X){if((X=V.charCodeAt(++ae))>=48&&X<=57)throw B(e,ae,"Invalid number, unexpected digit after 0: ".concat(Se(X),"."))}else ae=Oe(e,ae,X),X=V.charCodeAt(ae);if(46===X&&(Ne=!0,X=V.charCodeAt(++ae),ae=Oe(e,ae,X),X=V.charCodeAt(ae)),(69===X||101===X)&&(Ne=!0,(43===(X=V.charCodeAt(++ae))||45===X)&&(X=V.charCodeAt(++ae)),ae=Oe(e,ae,X),X=V.charCodeAt(ae)),46===X||function Me(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(X))throw B(e,ae,"Invalid number, expected digit but got: ".concat(Se(X),"."));return new Q.WU(Ne?u.FLOAT:u.INT,a,ae,f,O,M,V.slice(a,ae))}function Oe(e,a,r){var f=e.body,O=a,M=r;if(M>=48&&M<=57){do{M=f.charCodeAt(++O)}while(M>=48&&M<=57);return O}throw B(e,O,"Invalid number, expected digit but got: ".concat(Se(M),"."))}function H(e,a,r,f,O){for(var M=e.body,V=a+1,X=V,ae=0,Ne="";V<M.length&&!isNaN(ae=M.charCodeAt(V))&&10!==ae&&13!==ae;){if(34===ae)return Ne+=M.slice(X,V),new Q.WU(u.STRING,a,V+1,r,f,O,Ne);if(ae<32&&9!==ae)throw B(e,V,"Invalid character within String: ".concat(Se(ae),"."));if(++V,92===ae){switch(Ne+=M.slice(X,V-1),ae=M.charCodeAt(V)){case 34:Ne+='"';break;case 47:Ne+="/";break;case 92:Ne+="\\";break;case 98:Ne+="\b";break;case 102:Ne+="\f";break;case 110:Ne+="\n";break;case 114:Ne+="\r";break;case 116:Ne+="\t";break;case 117:var Ue=J(M.charCodeAt(V+1),M.charCodeAt(V+2),M.charCodeAt(V+3),M.charCodeAt(V+4));if(Ue<0){var it=M.slice(V+1,V+5);throw B(e,V,"Invalid character escape sequence: \\u".concat(it,"."))}Ne+=String.fromCharCode(Ue),V+=4;break;default:throw B(e,V,"Invalid character escape sequence: \\".concat(String.fromCharCode(ae),"."))}X=++V}}throw B(e,V,"Unterminated string.")}function fe(e,a,r,f,O,M){for(var V=e.body,X=a+3,ae=X,Ne=0,Ue="";X<V.length&&!isNaN(Ne=V.charCodeAt(X));){if(34===Ne&&34===V.charCodeAt(X+1)&&34===V.charCodeAt(X+2))return Ue+=V.slice(ae,X),new Q.WU(u.BLOCK_STRING,a,X+3,r,f,O,(0,K.W7)(Ue));if(Ne<32&&9!==Ne&&10!==Ne&&13!==Ne)throw B(e,X,"Invalid character within String: ".concat(Se(Ne),"."));10===Ne?(++X,++M.line,M.lineStart=X):13===Ne?(10===V.charCodeAt(X+1)?X+=2:++X,++M.line,M.lineStart=X):92===Ne&&34===V.charCodeAt(X+1)&&34===V.charCodeAt(X+2)&&34===V.charCodeAt(X+3)?(Ue+=V.slice(ae,X)+'"""',ae=X+=4):++X}throw B(e,X,"Unterminated string.")}function J(e,a,r,f){return ge(e)<<12|ge(a)<<8|ge(r)<<4|ge(f)}function ge(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function de(e,a,r,f,O){for(var M=e.body,V=M.length,X=a+1,ae=0;X!==V&&!isNaN(ae=M.charCodeAt(X))&&(95===ae||ae>=48&&ae<=57||ae>=65&&ae<=90||ae>=97&&ae<=122);)++X;return new Q.WU(u.NAME,a,X,r,f,O,M.slice(a,X))}var oe=function(){function e(r,f){var O=(0,$.T)(r)?r:new $.H(r);this._lexer=new ze(O),this._options=f}var a=e.prototype;return a.parseName=function(){var f=this.expectToken(u.NAME);return{kind:S.NAME,value:f.value,loc:this.loc(f)}},a.parseDocument=function(){var f=this._lexer.token;return{kind:S.DOCUMENT,definitions:this.many(u.SOF,this.parseDefinition,u.EOF),loc:this.loc(f)}},a.parseDefinition=function(){if(this.peek(u.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(u.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},a.parseOperationDefinition=function(){var f=this._lexer.token;if(this.peek(u.BRACE_L))return{kind:S.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(f)};var M,O=this.parseOperationType();return this.peek(u.NAME)&&(M=this.parseName()),{kind:S.OPERATION_DEFINITION,operation:O,name:M,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseOperationType=function(){var f=this.expectToken(u.NAME);switch(f.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(f)},a.parseVariableDefinitions=function(){return this.optionalMany(u.PAREN_L,this.parseVariableDefinition,u.PAREN_R)},a.parseVariableDefinition=function(){var f=this._lexer.token;return{kind:S.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(u.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(u.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(f)}},a.parseVariable=function(){var f=this._lexer.token;return this.expectToken(u.DOLLAR),{kind:S.VARIABLE,name:this.parseName(),loc:this.loc(f)}},a.parseSelectionSet=function(){var f=this._lexer.token;return{kind:S.SELECTION_SET,selections:this.many(u.BRACE_L,this.parseSelection,u.BRACE_R),loc:this.loc(f)}},a.parseSelection=function(){return this.peek(u.SPREAD)?this.parseFragment():this.parseField()},a.parseField=function(){var M,V,f=this._lexer.token,O=this.parseName();return this.expectOptionalToken(u.COLON)?(M=O,V=this.parseName()):V=O,{kind:S.FIELD,alias:M,name:V,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(u.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(f)}},a.parseArguments=function(f){return this.optionalMany(u.PAREN_L,f?this.parseConstArgument:this.parseArgument,u.PAREN_R)},a.parseArgument=function(){var f=this._lexer.token,O=this.parseName();return this.expectToken(u.COLON),{kind:S.ARGUMENT,name:O,value:this.parseValueLiteral(!1),loc:this.loc(f)}},a.parseConstArgument=function(){var f=this._lexer.token;return{kind:S.ARGUMENT,name:this.parseName(),value:(this.expectToken(u.COLON),this.parseValueLiteral(!0)),loc:this.loc(f)}},a.parseFragment=function(){var f=this._lexer.token;this.expectToken(u.SPREAD);var O=this.expectOptionalKeyword("on");return!O&&this.peek(u.NAME)?{kind:S.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(f)}:{kind:S.INLINE_FRAGMENT,typeCondition:O?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseFragmentDefinition=function(){var f,O=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(f=this._options)||void 0===f?void 0:f.experimentalFragmentVariables)?{kind:S.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(O)}:{kind:S.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(O)}},a.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},a.parseValueLiteral=function(f){var O=this._lexer.token;switch(O.kind){case u.BRACKET_L:return this.parseList(f);case u.BRACE_L:return this.parseObject(f);case u.INT:return this._lexer.advance(),{kind:S.INT,value:O.value,loc:this.loc(O)};case u.FLOAT:return this._lexer.advance(),{kind:S.FLOAT,value:O.value,loc:this.loc(O)};case u.STRING:case u.BLOCK_STRING:return this.parseStringLiteral();case u.NAME:switch(this._lexer.advance(),O.value){case"true":return{kind:S.BOOLEAN,value:!0,loc:this.loc(O)};case"false":return{kind:S.BOOLEAN,value:!1,loc:this.loc(O)};case"null":return{kind:S.NULL,loc:this.loc(O)};default:return{kind:S.ENUM,value:O.value,loc:this.loc(O)}}case u.DOLLAR:if(!f)return this.parseVariable()}throw this.unexpected()},a.parseStringLiteral=function(){var f=this._lexer.token;return this._lexer.advance(),{kind:S.STRING,value:f.value,block:f.kind===u.BLOCK_STRING,loc:this.loc(f)}},a.parseList=function(f){var O=this,M=this._lexer.token;return{kind:S.LIST,values:this.any(u.BRACKET_L,function(){return O.parseValueLiteral(f)},u.BRACKET_R),loc:this.loc(M)}},a.parseObject=function(f){var O=this,M=this._lexer.token;return{kind:S.OBJECT,fields:this.any(u.BRACE_L,function(){return O.parseObjectField(f)},u.BRACE_R),loc:this.loc(M)}},a.parseObjectField=function(f){var O=this._lexer.token,M=this.parseName();return this.expectToken(u.COLON),{kind:S.OBJECT_FIELD,name:M,value:this.parseValueLiteral(f),loc:this.loc(O)}},a.parseDirectives=function(f){for(var O=[];this.peek(u.AT);)O.push(this.parseDirective(f));return O},a.parseDirective=function(f){var O=this._lexer.token;return this.expectToken(u.AT),{kind:S.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(f),loc:this.loc(O)}},a.parseTypeReference=function(){var O,f=this._lexer.token;return this.expectOptionalToken(u.BRACKET_L)?(O=this.parseTypeReference(),this.expectToken(u.BRACKET_R),O={kind:S.LIST_TYPE,type:O,loc:this.loc(f)}):O=this.parseNamedType(),this.expectOptionalToken(u.BANG)?{kind:S.NON_NULL_TYPE,type:O,loc:this.loc(f)}:O},a.parseNamedType=function(){var f=this._lexer.token;return{kind:S.NAMED_TYPE,name:this.parseName(),loc:this.loc(f)}},a.parseTypeSystemDefinition=function(){var f=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(f.kind===u.NAME)switch(f.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(f)},a.peekDescription=function(){return this.peek(u.STRING)||this.peek(u.BLOCK_STRING)},a.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},a.parseSchemaDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("schema");var M=this.parseDirectives(!0),V=this.many(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);return{kind:S.SCHEMA_DEFINITION,description:O,directives:M,operationTypes:V,loc:this.loc(f)}},a.parseOperationTypeDefinition=function(){var f=this._lexer.token,O=this.parseOperationType();this.expectToken(u.COLON);var M=this.parseNamedType();return{kind:S.OPERATION_TYPE_DEFINITION,operation:O,type:M,loc:this.loc(f)}},a.parseScalarTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("scalar");var M=this.parseName(),V=this.parseDirectives(!0);return{kind:S.SCALAR_TYPE_DEFINITION,description:O,name:M,directives:V,loc:this.loc(f)}},a.parseObjectTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("type");var M=this.parseName(),V=this.parseImplementsInterfaces(),X=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:S.OBJECT_TYPE_DEFINITION,description:O,name:M,interfaces:V,directives:X,fields:ae,loc:this.loc(f)}},a.parseImplementsInterfaces=function(){var f;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLImplementsInterfaces)){var O=[];this.expectOptionalToken(u.AMP);do{O.push(this.parseNamedType())}while(this.expectOptionalToken(u.AMP)||this.peek(u.NAME));return O}return this.delimitedMany(u.AMP,this.parseNamedType)},a.parseFieldsDefinition=function(){var f;return!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLEmptyFields)&&this.peek(u.BRACE_L)&&this._lexer.lookahead().kind===u.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(u.BRACE_L,this.parseFieldDefinition,u.BRACE_R)},a.parseFieldDefinition=function(){var f=this._lexer.token,O=this.parseDescription(),M=this.parseName(),V=this.parseArgumentDefs();this.expectToken(u.COLON);var X=this.parseTypeReference(),ae=this.parseDirectives(!0);return{kind:S.FIELD_DEFINITION,description:O,name:M,arguments:V,type:X,directives:ae,loc:this.loc(f)}},a.parseArgumentDefs=function(){return this.optionalMany(u.PAREN_L,this.parseInputValueDef,u.PAREN_R)},a.parseInputValueDef=function(){var f=this._lexer.token,O=this.parseDescription(),M=this.parseName();this.expectToken(u.COLON);var X,V=this.parseTypeReference();this.expectOptionalToken(u.EQUALS)&&(X=this.parseValueLiteral(!0));var ae=this.parseDirectives(!0);return{kind:S.INPUT_VALUE_DEFINITION,description:O,name:M,type:V,defaultValue:X,directives:ae,loc:this.loc(f)}},a.parseInterfaceTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("interface");var M=this.parseName(),V=this.parseImplementsInterfaces(),X=this.parseDirectives(!0),ae=this.parseFieldsDefinition();return{kind:S.INTERFACE_TYPE_DEFINITION,description:O,name:M,interfaces:V,directives:X,fields:ae,loc:this.loc(f)}},a.parseUnionTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("union");var M=this.parseName(),V=this.parseDirectives(!0),X=this.parseUnionMemberTypes();return{kind:S.UNION_TYPE_DEFINITION,description:O,name:M,directives:V,types:X,loc:this.loc(f)}},a.parseUnionMemberTypes=function(){return this.expectOptionalToken(u.EQUALS)?this.delimitedMany(u.PIPE,this.parseNamedType):[]},a.parseEnumTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("enum");var M=this.parseName(),V=this.parseDirectives(!0),X=this.parseEnumValuesDefinition();return{kind:S.ENUM_TYPE_DEFINITION,description:O,name:M,directives:V,values:X,loc:this.loc(f)}},a.parseEnumValuesDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseEnumValueDefinition,u.BRACE_R)},a.parseEnumValueDefinition=function(){var f=this._lexer.token,O=this.parseDescription(),M=this.parseName(),V=this.parseDirectives(!0);return{kind:S.ENUM_VALUE_DEFINITION,description:O,name:M,directives:V,loc:this.loc(f)}},a.parseInputObjectTypeDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("input");var M=this.parseName(),V=this.parseDirectives(!0),X=this.parseInputFieldsDefinition();return{kind:S.INPUT_OBJECT_TYPE_DEFINITION,description:O,name:M,directives:V,fields:X,loc:this.loc(f)}},a.parseInputFieldsDefinition=function(){return this.optionalMany(u.BRACE_L,this.parseInputValueDef,u.BRACE_R)},a.parseTypeSystemExtension=function(){var f=this._lexer.lookahead();if(f.kind===u.NAME)switch(f.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(f)},a.parseSchemaExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var O=this.parseDirectives(!0),M=this.optionalMany(u.BRACE_L,this.parseOperationTypeDefinition,u.BRACE_R);if(0===O.length&&0===M.length)throw this.unexpected();return{kind:S.SCHEMA_EXTENSION,directives:O,operationTypes:M,loc:this.loc(f)}},a.parseScalarTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var O=this.parseName(),M=this.parseDirectives(!0);if(0===M.length)throw this.unexpected();return{kind:S.SCALAR_TYPE_EXTENSION,name:O,directives:M,loc:this.loc(f)}},a.parseObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var O=this.parseName(),M=this.parseImplementsInterfaces(),V=this.parseDirectives(!0),X=this.parseFieldsDefinition();if(0===M.length&&0===V.length&&0===X.length)throw this.unexpected();return{kind:S.OBJECT_TYPE_EXTENSION,name:O,interfaces:M,directives:V,fields:X,loc:this.loc(f)}},a.parseInterfaceTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var O=this.parseName(),M=this.parseImplementsInterfaces(),V=this.parseDirectives(!0),X=this.parseFieldsDefinition();if(0===M.length&&0===V.length&&0===X.length)throw this.unexpected();return{kind:S.INTERFACE_TYPE_EXTENSION,name:O,interfaces:M,directives:V,fields:X,loc:this.loc(f)}},a.parseUnionTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var O=this.parseName(),M=this.parseDirectives(!0),V=this.parseUnionMemberTypes();if(0===M.length&&0===V.length)throw this.unexpected();return{kind:S.UNION_TYPE_EXTENSION,name:O,directives:M,types:V,loc:this.loc(f)}},a.parseEnumTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var O=this.parseName(),M=this.parseDirectives(!0),V=this.parseEnumValuesDefinition();if(0===M.length&&0===V.length)throw this.unexpected();return{kind:S.ENUM_TYPE_EXTENSION,name:O,directives:M,values:V,loc:this.loc(f)}},a.parseInputObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var O=this.parseName(),M=this.parseDirectives(!0),V=this.parseInputFieldsDefinition();if(0===M.length&&0===V.length)throw this.unexpected();return{kind:S.INPUT_OBJECT_TYPE_EXTENSION,name:O,directives:M,fields:V,loc:this.loc(f)}},a.parseDirectiveDefinition=function(){var f=this._lexer.token,O=this.parseDescription();this.expectKeyword("directive"),this.expectToken(u.AT);var M=this.parseName(),V=this.parseArgumentDefs(),X=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var ae=this.parseDirectiveLocations();return{kind:S.DIRECTIVE_DEFINITION,description:O,name:M,arguments:V,repeatable:X,locations:ae,loc:this.loc(f)}},a.parseDirectiveLocations=function(){return this.delimitedMany(u.PIPE,this.parseDirectiveLocation)},a.parseDirectiveLocation=function(){var f=this._lexer.token,O=this.parseName();if(void 0!==U[O.value])return O;throw this.unexpected(f)},a.loc=function(f){var O;if(!0!==(null===(O=this._options)||void 0===O?void 0:O.noLocation))return new Q.Ye(f,this._lexer.lastToken,this._lexer.source)},a.peek=function(f){return this._lexer.token.kind===f},a.expectToken=function(f){var O=this._lexer.token;if(O.kind===f)return this._lexer.advance(),O;throw B(this._lexer.source,O.start,"Expected ".concat(P(f),", found ").concat(Ie(O),"."))},a.expectOptionalToken=function(f){var O=this._lexer.token;if(O.kind===f)return this._lexer.advance(),O},a.expectKeyword=function(f){var O=this._lexer.token;if(O.kind!==u.NAME||O.value!==f)throw B(this._lexer.source,O.start,'Expected "'.concat(f,'", found ').concat(Ie(O),"."));this._lexer.advance()},a.expectOptionalKeyword=function(f){var O=this._lexer.token;return O.kind===u.NAME&&O.value===f&&(this._lexer.advance(),!0)},a.unexpected=function(f){var O=null!=f?f:this._lexer.token;return B(this._lexer.source,O.start,"Unexpected ".concat(Ie(O),"."))},a.any=function(f,O,M){this.expectToken(f);for(var V=[];!this.expectOptionalToken(M);)V.push(O.call(this));return V},a.optionalMany=function(f,O,M){if(this.expectOptionalToken(f)){var V=[];do{V.push(O.call(this))}while(!this.expectOptionalToken(M));return V}return[]},a.many=function(f,O,M){this.expectToken(f);var V=[];do{V.push(O.call(this))}while(!this.expectOptionalToken(M));return V},a.delimitedMany=function(f,O){this.expectOptionalToken(f);var M=[];do{M.push(O.call(this))}while(this.expectOptionalToken(f));return M},e}();function Ie(e){var a=e.value;return P(e.kind)+(null!=a?' "'.concat(a,'"'):"")}function P(e){return function Te(e){return e===u.BANG||e===u.DOLLAR||e===u.AMP||e===u.PAREN_L||e===u.PAREN_R||e===u.SPREAD||e===u.COLON||e===u.EQUALS||e===u.AT||e===u.BRACKET_L||e===u.BRACKET_R||e===u.BRACE_L||e===u.PIPE||e===u.BRACE_R}(e)?'"'.concat(e,'"'):e}var ce=new Map,Z=new Map,_e=!0,Pe=!1;function be(e){return e.replace(/[\s,]+/g," ").trim()}function Ve(e){var a=be(e);if(!ce.has(a)){var r=function Le(e,a){return new oe(e,a).parseDocument()}(e,{experimentalFragmentVariables:Pe,allowLegacyFragmentVariables:Pe});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");ce.set(a,function Ke(e){var a=new Set(e.definitions);a.forEach(function(f){f.loc&&delete f.loc,Object.keys(f).forEach(function(O){var M=f[O];M&&"object"==typeof M&&a.add(M)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(function nt(e){var a=new Set,r=[];return e.definitions.forEach(function(f){if("FragmentDefinition"===f.kind){var O=f.name.value,M=function tt(e){return be(e.source.body.substring(e.start,e.end))}(f.loc),V=Z.get(O);V&&!V.has(M)?_e&&console.warn("Warning: fragment with name "+O+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):V||Z.set(O,V=new Set),V.add(M),a.has(M)||(a.add(M),r.push(f))}else r.push(f)}),(0,i.pi)((0,i.pi)({},e),{definitions:r})}(r)))}return ce.get(a)}function C(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var f=e[0];return a.forEach(function(O,M){f+=O&&"Document"===O.kind?O.loc.source.body:O,f+=e[M+1]}),Ve(f)}var e,we_gql=C;(e=C||(C={})).gql=we_gql,e.resetCaches=function He(){ce.clear(),Z.clear()},e.disableFragmentWarnings=function Xe(){_e=!1},e.enableExperimentalFragmentVariables=function Ye(){Pe=!0},e.disableExperimentalFragmentVariables=function lt(){Pe=!1},C.default=C;var v=o(9298),l=o(5e3),he=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(he||(he={})),he))(),g=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(g||(g={})),g))(),me=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(me||(me={})),me))(),ye=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ye||(ye={})),ye))(),Fe=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(Fe||(Fe={})),Fe))(),Re=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Re||(Re={})),Re))(),Ge=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Ge||(Ge={})),Ge))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),qe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(qe||(qe={})),qe))(),rt=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(rt||(rt={})),rt))(),ct=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(ct||(ct={})),ct))(),Ze=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Ze||(Ze={})),Ze))(),ot=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(ot||(ot={})),ot))(),ut=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ut||(ut={})),ut))(),st=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(st||(st={})),st))(),y=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(y||(y={})),y))(),ee=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(ee||(ee={})),ee))(),R=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(R||(R={})),R))(),ue=(()=>(function(e){e.Accepted="ACCEPTED",e.All="ALL",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(ue||(ue={})),ue))(),De=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(De||(De={})),De))(),xe=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(xe||(xe={})),xe))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Id="ID",e.Name="NAME"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(zt||(zt={})),zt))(),_t=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(_t||(_t={})),_t))(),Ct=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(Ct||(Ct={})),Ct))(),yt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(yt||(yt={})),yt))(),Tt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(It||(It={})),It))(),Et=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(Et||(Et={})),Et))(),Dt=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Dt||(Dt={})),Dt))(),Ot=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.CreatedAt="CREATED_AT",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Ot||(Ot={})),Ot))(),St=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.SuggestionCount="SUGGESTION_COUNT",e.Year="YEAR"}(St||(St={})),St))(),Mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Mt||(Mt={})),Mt))(),At=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(At||(At={})),At))(),Nt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Nt||(Nt={})),Nt))(),xt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(xt||(xt={})),xt))(),at=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(at||(at={})),at))(),Gt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(Gt||(Gt={})),Gt))(),Lt=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(Lt||(Lt={})),Lt))(),Pt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Pt||(Pt={})),Pt))(),Ft=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(Ft||(Ft={})),Ft))(),Rt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(Rt||(Rt={})),Rt))();const Wt=C`
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
    `,kt=C`
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
    `,Jt=C`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,jt=C`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Zt=C`
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
    `,Kt=C`
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
    `,Ht=C`
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
    `,Xt=C`
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
    `,Ut=C`
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
    `,Mn=C`
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
    `,An=C`
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
    `,Bn=(C`
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
    `),Gn=C`
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
    `,Zn=C`
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
    `}`,Vn=C`
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
    `,Yn=C`
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
    `,Wn=C`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
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
    ${m}`,co=C`
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
    ${Wt}`;let ho=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=C`
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
    ${kt}`;let zo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=C`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Jt}`;let Co=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=C`
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
    ${jt}`;let To=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=C`
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
    ${Zt}`;let Eo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Io}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=C`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Kt}`;let Oo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Do}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=C`
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
    `;let Mo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=So}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=C`
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
    ${Ht}`;let No=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ao}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xo=C`
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
    ${Xt}`;let Fo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Po}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=C`
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
    ${te}`;let Bo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Go=C`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${p}`;let Uo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Go}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=C`
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
    ${T}`;let Qo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=wo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=C`
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
    ${Ee}`;let Vo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=C`
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
    ${Ut}`;let Jo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ko}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=C`
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
    ${un}`;let ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ti=C`
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
    ${dn}`;let ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ti}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=C`
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
    `;let ui=(()=>{class e extends v.mm{constructor(r){super(r),this.document=li}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const di=C`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${mn}`;let pi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mi=C`
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
    ${_n}`;let Mi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Si}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Ai=C`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Cn}`;let Ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=C`
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
    ${En}`;let Bi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=C`
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
    ${Dn}`;let Ui=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wi=C`
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
    ${Mn}`;let Wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=C`
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
    ${An}`;let Ji=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ki}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ji=C`
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
    ${Zt}`;let cr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=C`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Ln}`;let ur=(()=>{class e extends v.AE{constructor(r){super(r),this.document=lr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=C`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let pr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=C`
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
    ${Rn}`;let Mr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=C`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Nr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xr=C`
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
    `;let Br=(()=>{class e extends v.mm{constructor(r){super(r),this.document=$r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gr=C`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ur=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=C`
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
    ${Bn}`;let Xr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=C`
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
    ${Gn}`;const os=C`
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
    ${Un}`;let us=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ls}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=C`
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
    `;let ps=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=C`
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
    ${wn}`;let Os=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=C`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Ms=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ss}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const As=C`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Zn}`;let Ns=(()=>{class e extends v.AE{constructor(r){super(r),this.document=As}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xs=C`
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
    ${Vn}`;let Fs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ps}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rs=C`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Yn}`;let bs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Rs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $s=C`
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
    `;let Bs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gs=C`
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
    `;let Us=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Gs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();C`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Wn}`;const ws=C`
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
    ${no}`;let ua=(()=>{class e extends v.AE{constructor(r){super(r),this.document=la}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const da=C`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${oo}`;let pa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=da}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ma=C`
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
    `;let Ma=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Sa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Aa=C`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${po}`;let Na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xa=C`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${go}`;let La=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(ve,q,o)=>{o.r(q),o.d(q,{LayoutModule:()=>Xt});var i=o(9808),t=o(325),n=o(5e3),s=o(9350),A=o(8929),_=o(7625),c=o(655),k=o(4090),d=o(1721),I=o(4219),E=o(925),L=o(647),F=o(226),ne=o(5113);const b=["*"],re=["nz-sider-trigger",""];function j(m,te){}function Y(m,te){if(1&m&&(n.ynx(0),n.YNc(1,j,0,0,"ng-template",3),n.BQk()),2&m){const p=n.oxw(),T=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzZeroTrigger||T)}}function W(m,te){}function N(m,te){if(1&m&&(n.ynx(0),n.YNc(1,W,0,0,"ng-template",3),n.BQk()),2&m){const p=n.oxw(),T=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",p.nzTrigger||T)}}function w(m,te){if(1&m&&n._UZ(0,"i",5),2&m){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"right":"left")}}function se(m,te){if(1&m&&n._UZ(0,"i",5),2&m){const p=n.oxw(2);n.Q6J("nzType",p.nzCollapsed?"left":"right")}}function G(m,te){if(1&m&&(n.YNc(0,w,1,1,"i",4),n.YNc(1,se,1,1,"i",4)),2&m){const p=n.oxw();n.Q6J("ngIf",!p.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",p.nzReverseArrow)}}function D(m,te){1&m&&n._UZ(0,"i",6)}function h(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(p);const le=n.oxw();return le.setCollapsed(!le.nzCollapsed)}),n.qZA()}if(2&m){const p=n.oxw();n.Q6J("matchBreakPoint",p.matchBreakPoint)("nzCollapsedWidth",p.nzCollapsedWidth)("nzCollapsed",p.nzCollapsed)("nzBreakpoint",p.nzBreakpoint)("nzReverseArrow",p.nzReverseArrow)("nzTrigger",p.nzTrigger)("nzZeroTrigger",p.nzZeroTrigger)("siderWidth",p.widthSetting)}}let x=(()=>{class m{constructor(p,T){this.elementRef=p,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),S=(()=>{class m{constructor(p,T){this.elementRef=p,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),Q=(()=>{class m{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return m.\u0275fac=function(p){return new(p||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(p,T){2&p&&(n.Udp("width",T.isNormalTrigger?T.siderWidth:null),n.ekj("ant-layout-sider-trigger",T.isNormalTrigger)("ant-layout-sider-zero-width-trigger",T.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",T.isZeroTrigger&&T.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",T.isZeroTrigger&&!T.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:re,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(p,T){1&p&&(n.YNc(0,Y,2,1,"ng-container",0),n.YNc(1,N,2,1,"ng-container",0),n.YNc(2,G,2,2,"ng-template",null,1,n.W1O),n.YNc(4,D,1,0,"ng-template",null,2,n.W1O)),2&p&&(n.Q6J("ngIf",T.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",T.isNormalTrigger))},directives:[i.O5,i.tP,L.Ls],encapsulation:2,changeDetection:0}),m})(),u=(()=>{class m{constructor(p,T,le){this.platform=p,this.cdr=T,this.breakpointService=le,this.destroy$=new A.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,d.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(p){p!==this.nzCollapsed&&(this.nzCollapsed=p,this.nzCollapsedChange.emit(p),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(k.ow,!0).pipe((0,_.R)(this.destroy$)).subscribe(p=>{const T=this.nzBreakpoint;T&&(0,d.ov)().subscribe(()=>{this.matchBreakPoint=!p[T],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(p){const{nzCollapsed:T,nzCollapsedWidth:le,nzWidth:Ee}=p;(T||le||Ee)&&this.updateStyleMap(),T&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(E.t4),n.Y36(n.sBO),n.Y36(k.r3))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-sider"]],contentQueries:function(p,T,le){if(1&p&&n.Suo(le,I.wO,5),2&p){let Ee;n.iGM(Ee=n.CRH())&&(T.nzMenuDirective=Ee.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(p,T){2&p&&(n.Udp("flex",T.flexSetting)("max-width",T.widthSetting)("min-width",T.widthSetting)("width",T.widthSetting),n.ekj("ant-layout-sider-zero-width",T.nzCollapsed&&0===T.nzCollapsedWidth)("ant-layout-sider-light","light"===T.nzTheme)("ant-layout-sider-dark","dark"===T.nzTheme)("ant-layout-sider-collapsed",T.nzCollapsed)("ant-layout-sider-has-trigger",T.nzCollapsible&&null!==T.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:b,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(p,T){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,h,1,8,"div",1)),2&p&&(n.xp6(2),n.Q6J("ngIf",T.nzCollapsible&&null!==T.nzTrigger))},directives:[Q,i.O5],encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzReverseArrow",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzCollapsible",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzCollapsed",void 0),m})(),$=(()=>{class m{constructor(p){this.directionality=p,this.dir="ltr",this.destroy$=new A.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(F.Is,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-layout"]],contentQueries:function(p,T,le){if(1&p&&n.Suo(le,u,4),2&p){let Ee;n.iGM(Ee=n.CRH())&&(T.listOfNzSiderComponent=Ee)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(p,T){2&p&&n.ekj("ant-layout-rtl","rtl"===T.dir)("ant-layout-has-sider",T.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:b,decls:1,vars:0,template:function(p,T){1&p&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),U=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[F.vT,i.ez,L.PV,ne.xu,E.ud]]}),m})();var K=o(404),ze=o(1894),Te=o(712),Se=o(373),Ae=o(1047),ie=o(3075),Ce=o(2845),pe=o(4832),Oe=o(969),H=o(3753),fe=o(2654),J=o(8514),ge=o(6787),de=o(2198),Me=o(2994),Le=o(6792),$e=o(2986),Be=o(7545),oe=o(1159),Ie=o(7429),P=o(8076);function ce(m,te){if(1&m&&(n.ynx(0),n._uU(1),n.BQk()),2&m){const p=n.oxw();n.xp6(1),n.Oqu(p.nzLabel)}}const Z=[[["nz-auto-option"]]],_e=["nz-auto-option"],Pe=["*"],be=["panel"],tt=["content"];function nt(m,te){}function Ke(m,te){1&m&&n.YNc(0,nt,0,0,"ng-template")}function Ve(m,te){1&m&&n.Hsn(0)}function C(m,te){if(1&m&&(n.TgZ(0,"nz-auto-option",8),n._uU(1),n.qZA()),2&m){const p=te.$implicit;n.Q6J("nzValue",p)("nzLabel",p&&p.label?p.label:p),n.xp6(1),n.hij(" ",p&&p.label?p.label:p," ")}}function He(m,te){if(1&m&&n.YNc(0,C,2,3,"nz-auto-option",7),2&m){const p=n.oxw(2);n.Q6J("ngForOf",p.nzDataSource)}}function Xe(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"div",0,1),n.NdJ("@slideMotion.done",function(le){return n.CHM(p),n.oxw().onAnimationEvent(le)}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.YNc(4,Ke,1,0,void 0,4),n.qZA(),n.qZA(),n.qZA(),n.YNc(5,Ve,1,0,"ng-template",null,5,n.W1O),n.YNc(7,He,1,1,"ng-template",null,6,n.W1O)}if(2&m){const p=n.MAs(6),T=n.MAs(8),le=n.oxw();n.ekj("ant-select-dropdown-hidden",!le.showPanel)("ant-select-dropdown-rtl","rtl"===le.dir),n.Q6J("ngClass",le.nzOverlayClassName)("ngStyle",le.nzOverlayStyle)("nzNoAnimation",null==le.noAnimation?null:le.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==le.noAnimation?null:le.noAnimation.nzNoAnimation),n.xp6(4),n.Q6J("ngTemplateOutlet",le.nzDataSource?T:p)}}let Ye=(()=>{class m{constructor(){}}return m.\u0275fac=function(p){return new(p||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:_e,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(p,T){1&p&&(n.F$t(Z),n.TgZ(0,"div",0),n.YNc(1,ce,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&p&&(n.xp6(1),n.Q6J("nzStringTemplateOutlet",T.nzLabel))},directives:[Oe.f],encapsulation:2,changeDetection:0}),m})();class lt{constructor(te,p=!1){this.source=te,this.isUserInput=p}}let we=(()=>{class m{constructor(p,T,le,Ee){this.ngZone=p,this.changeDetectorRef=T,this.element=le,this.nzAutocompleteOptgroupComponent=Ee,this.nzDisabled=!1,this.selectionChange=new n.vpe,this.mouseEntered=new n.vpe,this.active=!1,this.selected=!1,this.destroy$=new A.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,H.R)(this.element.nativeElement,"mouseenter").pipe((0,de.h)(()=>this.mouseEntered.observers.length>0),(0,_.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,H.R)(this.element.nativeElement,"mousedown").pipe((0,_.R)(this.destroy$)).subscribe(p=>p.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(p=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),p&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,d.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(p=!1){this.selectionChange.emit(new lt(this,p))}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(Ye,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(p,T){1&p&&n.NdJ("click",function(){return T.selectViaInteraction()}),2&p&&(n.uIk("aria-selected",T.selected.toString())("aria-disabled",T.nzDisabled.toString()),n.ekj("ant-select-item-option-grouped",T.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",T.selected)("ant-select-item-option-active",T.active)("ant-select-item-option-disabled",T.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Pe,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(p,T){1&p&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzDisabled",void 0),m})();const pt={provide:ie.JU,useExisting:(0,n.Gpc)(()=>l),multi:!0};let l=(()=>{class m{constructor(p,T,le,Ee,et){this.elementRef=p,this.overlay=T,this.viewContainerRef=le,this.nzInputGroupWhitSuffixOrPrefixDirective=Ee,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new A.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,_.R)(this.destroy$)).subscribe(p=>{"void"===p.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(p){Promise.resolve(null).then(()=>this.setTriggerValue(p))}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}setDisabledState(p){this.elementRef.nativeElement.disabled=p,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(p){const T=p.keyCode,le=T===oe.LH||T===oe.JH;T===oe.hY&&p.preventDefault(),!this.panelOpen||T!==oe.hY&&T!==oe.Mf?this.panelOpen&&T===oe.K5?this.nzAutocomplete.showPanel&&(p.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&le&&this.nzAutocomplete.showPanel&&(p.stopPropagation(),p.preventDefault(),T===oe.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(p){const T=p.target,le=this.document;let Ee=T.value;"number"===T.type&&(Ee=""===Ee?null:parseFloat(Ee)),this.previousValue!==Ee&&(this.previousValue=Ee,this.onChange(Ee),this.canOpen()&&le.activeElement===p.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Me.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Le.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(p=>{this.setValueAndClose(p)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,de.h)(p=>!this.elementRef.nativeElement.contains(p.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function v(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Ie.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Ce.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const p=[new Ce.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Ce.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(p).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const p=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==p?(this.nzAutocomplete.setActiveItem(p),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(p){const T=p.nzValue;this.setTriggerValue(p.getLabel()),this.onChange(T),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(p){const T=this.nzAutocomplete.getOption(p),le=T?T.getLabel():p;this.elementRef.nativeElement.value=null!=le?le:"",this.nzAutocomplete.nzBackfill||(this.previousValue=le)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const p=this.elementRef.nativeElement;return!p.readOnly&&!p.disabled}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(Ce.aV),n.Y36(n.s_b),n.Y36(Ae.ke,8),n.Y36(i.K0,8))},m.\u0275dir=n.lG2({type:m,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(p,T){1&p&&n.NdJ("focusin",function(){return T.handleFocus()})("blur",function(){return T.handleBlur()})("input",function(Ee){return T.handleInput(Ee)})("keydown",function(Ee){return T.handleKeydown(Ee)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([pt])]}),m})(),he=(()=>{class m{constructor(p,T,le,Ee){this.changeDetectorRef=p,this.ngZone=T,this.directionality=le,this.noAnimation=Ee,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Ut)=>et===Ut,this.selectionChange=new n.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new A.xQ,this.animationStateChange=new n.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=fe.w.EMPTY,this.optionMouseEnterSubscription=fe.w.EMPTY,this.dataSourceChangeSubscription=fe.w.EMPTY,this.optionSelectionChanges=(0,J.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,$e.q)(1),(0,Be.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,J.P)(()=>this.options?(0,ge.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,$e.q)(1),(0,Be.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var p;null===(p=this.directionality.change)||void 0===p||p.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(p){this.animationStateChange.emit(p)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(p){const T=this.options.get(p);T&&!T.active?(this.activeItem=T,this.activeItemIndex=p,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(p){return this.options.reduce((T,le,Ee)=>-1===T?this.compareWith(p,le.nzValue)?Ee:-1:T,-1)}getOption(p){return this.options.find(T=>this.compareWith(p,T.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(T=>{!T.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(p,T=!1){this.options.forEach(le=>{le!==p&&(T&&le.deselect(),le.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,de.h)(p=>p.isUserInput)).subscribe(p=>{p.source.select(),p.source.setActiveStyles(),this.activeItem=p.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p.source,!0),this.selectionChange.emit(p.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(p=>{p.setActiveStyles(),this.activeItem=p,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(p)})}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36(F.Is,8),n.Y36(pe.P,9))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-autocomplete"]],contentQueries:function(p,T,le){if(1&p&&n.Suo(le,we,5),2&p){let Ee;n.iGM(Ee=n.CRH())&&(T.fromContentOptions=Ee)}},viewQuery:function(p,T){if(1&p&&(n.Gf(n.Rgc,5),n.Gf(be,5),n.Gf(tt,5),n.Gf(we,5)),2&p){let le;n.iGM(le=n.CRH())&&(T.template=le.first),n.iGM(le=n.CRH())&&(T.panel=le.first),n.iGM(le=n.CRH())&&(T.content=le.first),n.iGM(le=n.CRH())&&(T.fromDataSourceOptions=le)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Pe,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(p,T){1&p&&(n.F$t(),n.YNc(0,Xe,9,10,"ng-template"))},directives:[we,i.mk,i.PC,pe.P,i.tP,i.sg],encapsulation:2,data:{animation:[P.mF]},changeDetection:0}),(0,c.gn)([(0,d.yF)()],m.prototype,"nzDefaultActiveFirstOption",void 0),(0,c.gn)([(0,d.yF)()],m.prototype,"nzBackfill",void 0),m})(),z=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[F.vT,i.ez,Ce.U8,ie.u5,Oe.T,pe.g,Ae.o7]]}),m})();var g=o(6949);function me(m,te){1&m&&n._UZ(0,"i",5)}function ye(m,te){if(1&m){const p=n.EpF();n.ynx(0),n.TgZ(1,"a",6),n.TgZ(2,"nz-auto-option",7),n.NdJ("click",function(){n.CHM(p);const le=n.oxw();return le.searchQuery="",le.refresh()}),n.TgZ(3,"span"),n._UZ(4,"i",8),n._uU(5," \xa0 "),n._UZ(6,"span",9),n._UZ(7,"br"),n._UZ(8,"span",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const p=te.$implicit,T=n.oxw();n.xp6(1),n.Q6J("routerLink",T.urlForResult(p)),n.xp6(1),n.Q6J("nzValue",T.urlForResult(p)),n.xp6(2),n.Q6J("nzType",T.iconNameForResult(p)),n.xp6(2),n.s9C("innerHTML",p.name,n.oJD),n.xp6(2),n.s9C("innerHTML",p.matchingText,n.oJD)}}let Fe=(()=>{class m{constructor(p,T){this.gql=p,this.router=T,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,Se.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(p){switch(p.resultType){case Te.rZD.EvidenceItem:return"civic:evidence";case Te.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${p.resultType.toLowerCase()}`}}urlForResult(p){let T;switch(p.resultType){case Te.rZD.VariantGroup:T="variant-groups";break;case Te.rZD.EvidenceItem:T="evidence";break;default:T=`${p.resultType.toLowerCase()}s`}return`/${T}/${p.id}/summary`}quicksearchSelected(p){let T=p.target.value;this.searchQuery="",this.router.navigate([T])}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(Te.ghc),n.Y36(t.F0))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(p,T){if(1&p&&(n.TgZ(0,"nz-input-group",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(Ee){return T.searchQuery=Ee})("ngModelChange",function(){return T.refresh()})("keyup.enter",function(Ee){return T.quicksearchSelected(Ee)}),n.qZA(),n.qZA(),n.YNc(2,me,1,0,"ng-template",null,2,n.W1O),n.TgZ(4,"nz-autocomplete",null,3),n.YNc(6,ye,9,5,"ng-container",4),n.ALo(7,"ngrxPush"),n.qZA()),2&p){const le=n.MAs(3),Ee=n.MAs(5);n.Q6J("nzSuffix",le),n.xp6(1),n.Q6J("ngModel",T.searchQuery)("nzAutocomplete",Ee),n.xp6(5),n.Q6J("ngForOf",n.lcZ(7,4,T.searchResults$))}},directives:[Ae.gB,Ae.ke,Ae.Zp,ie.Fj,l,ie.JJ,ie.On,L.Ls,he,i.sg,t.yS,we],pipes:[g.fM],styles:[""]}),m})();var We=o(1912),Re=o(4850),Ge=o(1059),ke=o(2340),Je=o(8144),qe=o(6042),rt=o(2643),ct=o(2683),Ze=o(3677),ot=o(4401),ut=o(7881),st=o(3640),y=o(8785),ee=o(3434);function R(m,te){if(1&m&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&m){n.oxw(2);const p=n.MAs(15);n.Q6J("nzDropdownMenu",p)}}const ue=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function De(m,te){if(1&m&&(n.TgZ(0,"nz-badge",28),n.TgZ(1,"button",29),n._UZ(2,"i",30),n.qZA(),n.qZA()),2&m){const p=n.oxw().ngrxLet,T=n.oxw().ngIf;n.Q6J("nzCount",p)("nzOverflowCount",999)("nzStyle",n.DdM(4,ue)),n.xp6(1),n.MGl("routerLink","/users/",T.id,"/notifications")}}const xe=function(m){return{"update-coi":m}};function mt(m,te){if(1&m&&n._UZ(0,"cvc-user-avatar",36),2&m){const p=n.oxw(3).ngIf;n.Q6J("user",p)("size",22)("ngClass",n.VKq(3,xe,p.invalidCoi))}}function gt(m,te){if(1&m&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&m){const p=n.oxw(3).ngIf;n.xp6(1),n.Oqu(p.username)}}function en(m,te){1&m&&n._UZ(0,"i",27)}function ft(m,te){if(1&m&&(n.TgZ(0,"button",31),n.TgZ(1,"nz-space",32),n.YNc(2,mt,1,5,"cvc-user-avatar",33),n.YNc(3,gt,2,1,"div",34),n.YNc(4,en,1,0,"i",35),n.qZA(),n.qZA()),2&m){n.oxw(2);const p=n.MAs(3);n.Q6J("nzDropdownMenu",p)}}function ht(m,te){1&m&&(n.TgZ(0,"nz-space",22),n.YNc(1,R,3,1,"button",23),n.YNc(2,De,3,5,"nz-badge",24),n.YNc(3,ft,5,1,"button",25),n.qZA())}function vt(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"button",38),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA(),n.qZA()}}function zt(m,te){1&m&&n._UZ(0,"li",14)}function _t(m,te){1&m&&(n.TgZ(0,"li",40),n.TgZ(1,"a",41),n._uU(2," Admin Console "),n.qZA(),n.qZA())}function Ct(m,te){1&m&&(n.TgZ(0,"li",42),n.TgZ(1,"a",43),n._uU(2," Background Workers "),n.qZA(),n.qZA())}function yt(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"li",17),n.TgZ(1,"a",44),n.NdJ("click",function(){return n.CHM(p),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA(),n.qZA()}}const Tt=function(m){return["/users",m]};function It(m,te){if(1&m){const p=n.EpF();n.ynx(0),n.YNc(1,ht,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7),n.TgZ(4,"ul",8),n.YNc(5,vt,4,0,"li",9),n.YNc(6,zt,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,_t,3,0,"li",12),n.YNc(10,Ct,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(p),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"nz-dropdown-menu",null,16),n.TgZ(16,"ul",8),n.TgZ(17,"li",17),n.TgZ(18,"a",18),n._uU(19," Evidence Item "),n.qZA(),n.qZA(),n.TgZ(20,"li",17),n.TgZ(21,"a",19),n._uU(22," Assertion "),n.qZA(),n.qZA(),n.TgZ(23,"li",17),n.TgZ(24,"a",20),n._uU(25," Source Suggestion "),n.qZA(),n.qZA(),n.YNc(26,yt,3,0,"li",9),n.TgZ(27,"li",17),n.TgZ(28,"a",21),n._uU(29," Variant Group "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const p=te.ngIf,T=n.oxw();n.xp6(1),n.Q6J("ngrxLet",T.unreadCount$),n.xp6(4),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("ngIf",p.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Tt,p.id)),n.xp6(2),n.Q6J("ngIf",p.isAdmin),n.xp6(1),n.Q6J("ngIf",p.isAdmin),n.xp6(16),n.Q6J("ngIf",p.isEditor)}}function Et(m,te){1&m&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function Dt(m,te){if(1&m){const p=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(p),n.oxw().coiUpdated()}),n.qZA()}}function Ot(m,te){1&m&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function St(m,te){1&m&&n._UZ(0,"cvc-variant-submit-form")}let tn=(()=>{class m{constructor(p,T){this.queryService=p,this.unreadCountGql=T,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,Re.U)(({data:le})=>le.notifications.unreadCount),(0,Ge.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Re.U)(({data:le})=>le.notifications.unreadCount),(0,Ge.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(s.a),n.Y36(Te.Kmw))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(p,T){if(1&p&&(n.YNc(0,It,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ee){return T.coiUpdateModalVisible=Ee})("nzOnCancel",function(){return T.handleCoiModalCancel()}),n.YNc(3,Et,2,0,"ng-template",null,2,n.W1O),n.YNc(5,Dt,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ee){return T.addVariantModalVisible=Ee})("nzOnCancel",function(){return T.addVariantModalVisible=!1}),n.YNc(8,Ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,St,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&p){const le=n.MAs(4),Ee=n.MAs(6),et=n.MAs(9),Ut=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,T.viewer$)),n.xp6(2),n.Q6J("nzVisible",T.coiUpdateModalVisible)("nzContent",Ee)("nzTitle",le)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",T.addVariantModalVisible)("nzContent",Ut)("nzTitle",et)("nzFooter",null)}},directives:[i.O5,g.eJ,Je.NU,Je.$1,qe.ix,rt.dQ,ct.w,Ze.wA,Ze.cm,L.Ls,ot.x7,t.rH,ut.L,i.mk,Ze.RR,I.wO,I.r9,I.YV,t.yS,st.du,y.t,ee.G],pipes:[g.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),m})();function Mt(m,te){1&m&&n._UZ(0,"img",58)}function At(m,te){1&m&&n._UZ(0,"img",59)}function Nt(m,te){1&m&&n._UZ(0,"cvc-login-button")}function xt(m,te){1&m&&n._UZ(0,"cvc-viewer-button")}const at=function(m){return{"is-collapsed":m}},Lt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class m{constructor(p){this.viewerService=p,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(s.a))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-layout"]],decls:124,vars:46,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(p,T){1&p&&(n.TgZ(0,"nz-layout",0),n.TgZ(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(Ee){return T.isCollapsed=Ee}),n.TgZ(2,"a",2),n.TgZ(3,"div",3),n.YNc(4,Mt,1,0,"img",4),n.YNc(5,At,1,0,"img",5),n.qZA(),n.qZA(),n.TgZ(6,"ul",6),n.TgZ(7,"li",7),n.TgZ(8,"ul"),n.TgZ(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span"),n.TgZ(12,"a",10),n._uU(13,"Assertions"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span"),n.TgZ(17,"a",12),n._uU(18,"Evidence"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span"),n.TgZ(22,"a",14),n._uU(23,"Genes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span"),n.TgZ(27,"a",16),n._uU(28,"Variants"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span"),n.TgZ(32,"a",18),n._uU(33,"Variant Groups"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span"),n.TgZ(37,"a",20),n._uU(38,"Clinical Trials"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span"),n.TgZ(42,"a",22),n._uU(43,"Diseases"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span"),n.TgZ(47,"a",24),n._uU(48,"Drugs"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span"),n.TgZ(52,"a",26),n._uU(53,"Phenotypes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span"),n.TgZ(57,"a",28),n._uU(58,"Sources"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span"),n.TgZ(62,"a",30),n._uU(63,"Variant Types"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(64,"li",7),n.TgZ(65,"ul"),n.TgZ(66,"li",8),n._UZ(67,"i",31),n.TgZ(68,"span"),n.TgZ(69,"a",32),n._uU(70," Activity "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span"),n.TgZ(74,"a",34),n._uU(75,"Queues"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"li",7),n.TgZ(77,"ul"),n.TgZ(78,"li",8),n._UZ(79,"i",35),n.TgZ(80,"span"),n.TgZ(81,"a",36),n._uU(82,"Contributors"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span"),n.TgZ(86,"a",38),n._uU(87,"Organizations"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(88,"li",7),n.TgZ(89,"ul"),n.TgZ(90,"li",8),n._UZ(91,"i",39),n.TgZ(92,"span"),n.TgZ(93,"a",40),n._uU(94,"Data Releases"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(95,"div",41),n._UZ(96,"img",42),n._UZ(97,"img",43),n.qZA(),n.qZA(),n.TgZ(98,"nz-layout",44),n.TgZ(99,"nz-header"),n.TgZ(100,"div",45),n.TgZ(101,"div",46),n.TgZ(102,"span",47),n.NdJ("click",function(){return T.isCollapsed=!T.isCollapsed}),n._UZ(103,"i",48),n.qZA(),n.qZA(),n.TgZ(104,"div",49),n._UZ(105,"cvc-quicksearch"),n.qZA(),n.TgZ(106,"div",50),n.TgZ(107,"ul",51),n.TgZ(108,"li",52),n.TgZ(109,"a",53),n._uU(110,"Home"),n.qZA(),n.qZA(),n.TgZ(111,"li",52),n.TgZ(112,"a",54),n._uU(113,"About CIViC"),n.qZA(),n.qZA(),n.TgZ(114,"li",52),n.TgZ(115,"a",55),n._uU(116,"Help"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(117,"div",56),n.YNc(118,Nt,1,0,"cvc-login-button",57),n.ALo(119,"async"),n.YNc(120,xt,1,0,"cvc-viewer-button",57),n.ALo(121,"async"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(122,"nz-content"),n._UZ(123,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&p&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",T.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(38,at,T.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!T.isCollapsed),n.xp6(1),n.Q6J("ngIf",T.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(40,at,T.isCollapsed))("nzInlineCollapsed",T.isCollapsed),n.xp6(1),n.Q6J("nzTitle",T.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(42,at,T.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(44,at,T.isCollapsed)),n.xp6(5),n.Q6J("nzType",T.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(119,34,T.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(121,36,T.signedIn$)))},directives:[$,u,t.yS,i.mk,i.O5,I.wO,I.uA,I.r9,K.SY,L.Ls,S,ze.SK,ze.t3,Fe,We.s,tn,x,t.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),m})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(136)]).then(o.bind(o,136)).then(m=>m.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7717),o.e(1838)]).then(o.bind(o,1838)).then(m=>m.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(233)]).then(o.bind(o,233)).then(m=>m.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1592)]).then(o.bind(o,1592)).then(m=>m.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(1192),o.e(7727)]).then(o.bind(o,7727)).then(m=>m.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(3664),o.e(392),o.e(681)]).then(o.bind(o,681)).then(m=>m.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(m=>m.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(3883),o.e(8592),o.e(1076)]).then(o.bind(o,1076)).then(m=>m.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(2033),o.e(3278),o.e(7717),o.e(8592),o.e(7465)]).then(o.bind(o,9802)).then(m=>m.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(3278),o.e(97)]).then(o.bind(o,7563)).then(m=>m.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(4025),o.e(9001),o.e(3664),o.e(2826),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(m=>m.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(3664),o.e(79)]).then(o.bind(o,79)).then(m=>m.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(m=>m.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(4025),o.e(3664),o.e(392),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(m=>m.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(5193),o.e(4025),o.e(9001),o.e(2826),o.e(6724),o.e(9716),o.e(376),o.e(6113)]).then(o.bind(o,4340)).then(m=>m.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(m=>m.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(m=>m.PagesModule),data:{breadcrumb:"Pages"}}]}];let Pt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[t.Bz.forChild(Lt)],t.Bz]}),m})();var Ft=o(3618),Rt=o(5109),Wt=o(4546);let kt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,ie.u5,t.Bz,g.WG,Ae.o7,Wt.U5,L.PV,z]]}),m})();var Jt=o(1844),jt=o(5473),Zt=o(330),Kt=o(7058);let Ht=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,g.WG,Ze.b1,t.Bz,qe.sL,Je.zf,L.PV,ot.mS,K.cg,st.Qp,jt.H,Zt.e,Kt.e]]}),m})(),Xt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,Pt,L.PV,ze.Jb,U,I.ip,K.cg,Ft.ZJ,Rt.s,Jt.B,Ht,kt]]}),m})()},6792:(ve,q,o)=>{o.d(q,{g:()=>A});var i=o(353),n=o(3489),s=o(9312);function A(d,I=i.P){const L=function t(d){return d instanceof Date&&!isNaN(+d)}(d)?+d-I.now():Math.abs(d);return F=>F.lift(new _(L,I))}class _{constructor(I,E){this.delay=I,this.scheduler=E}call(I,E){return E.subscribe(new c(I,this.delay,this.scheduler))}}class c extends n.L{constructor(I,E,L){super(I),this.delay=E,this.scheduler=L,this.queue=[],this.active=!1,this.errored=!1}static dispatch(I){const E=I.source,L=E.queue,F=I.scheduler,ne=I.destination;for(;L.length>0&&L[0].time-F.now()<=0;)L.shift().notification.observe(ne);if(L.length>0){const b=Math.max(0,L[0].time-F.now());this.schedule(I,b)}else this.unsubscribe(),E.active=!1}_schedule(I){this.active=!0,this.destination.add(I.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:I}))}scheduleNotification(I){if(!0===this.errored)return;const E=this.scheduler,L=new k(E.now()+this.delay,I);this.queue.push(L),!1===this.active&&this._schedule(E)}_next(I){this.scheduleNotification(s.P.createNext(I))}_error(I){this.errored=!0,this.queue=[],this.destination.error(I),this.unsubscribe()}_complete(){this.scheduleNotification(s.P.createComplete()),this.unsubscribe()}}class k{constructor(I,E){this.time=I,this.notification=E}}},373:(ve,q,o)=>{o.d(q,{j:()=>t});var i=o(4850);function t(...s){const A=s.length;if(0===A)throw new Error("list of properties cannot be empty.");return _=>(0,i.U)(function n(s,A){return c=>{let k=c;for(let d=0;d<A;d++){const I=null!=k?k[s[d]]:void 0;if(void 0===I)return;k=I}return k}}(s,A))(_)}},3164:(ve,q,o)=>{o.d(q,{p:()=>c});var i=o(3489),t=o(353);const n={leading:!0,trailing:!1};function c(E,L=t.P,F=n){return ne=>ne.lift(new k(E,L,F.leading,F.trailing))}class k{constructor(L,F,ne,b){this.duration=L,this.scheduler=F,this.leading=ne,this.trailing=b}call(L,F){return F.subscribe(new d(L,this.duration,this.scheduler,this.leading,this.trailing))}}class d extends i.L{constructor(L,F,ne,b,re){super(L),this.duration=F,this.scheduler=ne,this.leading=b,this.trailing=re,this._hasTrailingValue=!1,this._trailingValue=null}_next(L){this.throttled?this.trailing&&(this._trailingValue=L,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(I,this.duration,{subscriber:this})),this.leading?this.destination.next(L):this.trailing&&(this._trailingValue=L,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const L=this.throttled;L&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),L.unsubscribe(),this.remove(L),this.throttled=null)}}function I(E){const{subscriber:L}=E;L.clearThrottle()}},444:(ve,q,o)=>{function i(D){return D!==String(parseFloat(D))}o.d(q,{o6:()=>G});var A=Object.getOwnPropertyNames?function t(D){return Object.getOwnPropertyNames(D).filter(function(h){return D.propertyIsEnumerable(h)&&i(h)})}:Object.keys?function n(D){return Object.keys(D).filter(i)}:function s(D){var h=[];for(var x in D)D.hasOwnProperty(x)&&D.propertyIsEnumerable(x)&&i(x)&&h.push(x);return h},_=function(){function D(h){this.enumObj=h,this.keysList=Object.freeze(A(h));for(var x=this.keysList.length,B=new Array(x),S=new Map,Q=0;Q<x;++Q){var u=this.keysList[Q],$=h[u];B[Q]=$,S.set($,u),this[Q]=Object.freeze([u,$])}this.valuesList=Object.freeze(B),this.keysByValueMap=S,this.size=this.length=x,Object.freeze(this)}return D.prototype.toString=function(){return"[object EnumWrapper]"},D.prototype.keys=function(){var h,x=this,B=0;return(h={next:function(){var Q={done:B>=x.length,value:x.keysList[B]};return++B,Q}})[Symbol.iterator]=function(){return this},h},D.prototype.values=function(){var h,x=this,B=0;return(h={next:function(){var Q={done:B>=x.length,value:x.valuesList[B]};return++B,Q}})[Symbol.iterator]=function(){return this},h},D.prototype.entries=function(){var h,x=this,B=0;return(h={next:function(){var Q={done:B>=x.length,value:x[B]};return++B,Q}})[Symbol.iterator]=function(){return this},h},D.prototype[Symbol.iterator]=function(){return this.entries()},D.prototype.forEach=function(h,x){for(var B=this.length,S=0;S<B;++S){var Q=this[S];h.call(x,Q[1],Q[0],this,S)}},D.prototype.map=function(h,x){for(var B=this.length,S=new Array(B),Q=0;Q<B;++Q){var u=this[Q];S[Q]=h.call(x,u[1],u[0],this,Q)}return S},D.prototype.getKeys=function(){return this.keysList.slice()},D.prototype.getValues=function(){return this.valuesList.slice()},D.prototype.getEntries=function(){return Array.prototype.slice.call(this)},D.prototype.indexOfKey=function(h){return this.keysList.indexOf(h)},D.prototype.indexOfValue=function(h){return this.valuesList.indexOf(h)},D.prototype.isKey=function(h){return null!=h&&i(h)&&this.enumObj.hasOwnProperty(h)},D.prototype.asKeyOrThrow=function(h){if(this.isKey(h))return h;throw new Error("Unexpected key: "+h+". Expected one of: "+this.getValues())},D.prototype.asKeyOrDefault=function(h,x){return this.isKey(h)?h:x},D.prototype.isValue=function(h){return null!=h&&this.keysByValueMap.has(h)},D.prototype.asValueOrThrow=function(h){if(this.isValue(h))return h;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},D.prototype.asValueOrDefault=function(h,x){return this.isValue(h)?h:x},D.prototype.getKeyOrThrow=function(h){var x=null!=h?this.keysByValueMap.get(h):void 0;if(null!=x)return x;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},D.prototype.getKeyOrDefault=function(h,x){var B=null!=h?this.keysByValueMap.get(h):void 0;return null!=B?B:x},D.prototype.getValueOrThrow=function(h){return this.enumObj[this.asKeyOrThrow(h)]},D.prototype.getValueOrDefault=function(h,x){return this.isKey(h)?this.enumObj[h]:x},D}();_.prototype[Symbol.toStringTag]="EnumWrapper";var c=Symbol("ts-enum-util:unhandledEntry"),k=Symbol("ts-enum-util:handleNull"),d=Symbol("ts-enum-util:handleUndefined"),I=Symbol("ts-enum-util:handleUnexpected");function E(D){return new Error("Unhandled value: "+D)}var L=function(){function D(h){this.value=h}return D.prototype.with=function(h){if(h.hasOwnProperty(this.value))return b(h[this.value],this.value);if(h[I])return b(h[I],this.value);throw new Error("Unexpected value: "+this.value)},D}(),F=function(){function D(){}return D.prototype.with=function(h){if(h[k])return b(h[k],null);if(h[I])return b(h[I],null);throw new Error("Unexpected value: null")},D}(),ne=function(){function D(){}return D.prototype.with=function(h){if(h[d])return b(h[d],void 0);if(h[I])return b(h[I],void 0);throw new Error("Unexpected value: undefined")},D}();function b(D,h){if(D===c)throw E(h);return D(h)}var re=function(){function D(h){this.value=h}return D.prototype.with=function(h){if(h.hasOwnProperty(this.value))return W(h[this.value],this.value);if(h.hasOwnProperty(I))return W(h[I],this.value);throw new Error("Unexpected value: "+this.value)},D}(),j=function(){function D(){}return D.prototype.with=function(h){if(h.hasOwnProperty(k))return W(h[k],null);if(h.hasOwnProperty(I))return W(h[I],null);throw new Error("Unexpected value: null")},D}(),Y=function(){function D(){}return D.prototype.with=function(h){if(h.hasOwnProperty(d))return W(h[d],void 0);if(h.hasOwnProperty(I))return W(h[I],void 0);throw new Error("Unexpected value: undefined")},D}();function W(D,h){if(D===c)throw E(h);return D}var se=new WeakMap;function G(D){var h=se.get(D);return h||(h=new _(D),se.set(D,h)),h}G.handleNull=k,G.handleUndefined=d,G.handleUnexpected=I,G.unhandledEntry=c,G.visitValue=function N(D){return null===D?new F:void 0===D?new ne:new L(D)},G.mapValue=function w(D){return null===D?new j:void 0===D?new Y:new re(D)}},9552:(ve,q,o)=>{o.d(q,{$:()=>x,j:()=>B});var i=o(655),t=o(9808),n=o(5e3),s=o(2654),A=o(839),_=o(8929),c=o(6787),k=o(3753),d=o(7625),I=o(4850),E=o(3164),L=o(9439),F=o(1721),ne=o(4090),b=o(925),re=o(5577),j=o(226);const Y=["fixedEl"],W=["*"];var N=(()=>{return(S=N||(N={})).resize="resize",S.scroll="scroll",S.touchstart="touchstart",S.touchmove="touchmove",S.touchend="touchend",S.pageshow="pageshow",S.load="LOAD",N;var S})();function se(S){return function w(S){return"undefined"!=typeof window&&S===window}(S)?{top:0,left:0,bottom:0}:S.getBoundingClientRect()}const D="ant-affix";let x=(()=>{class S{constructor(u,$,U,K,ze,Te,Se,Ae,ie,Ce){this.nzConfigService=U,this.scrollSrv=K,this.ngZone=ze,this.platform=Te,this.renderer=Se,this.nzResizeObserver=Ae,this.cdr=ie,this.directionality=Ce,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new A.t(1),this.destroy$=new _.xQ,this.placeholderNode=u.nativeElement,this.document=$}get target(){const u=this.nzTarget;return("string"==typeof u?this.document.querySelector(u):u)||window}ngOnInit(){var u;null===(u=this.directionality.change)||void 0===u||u.pipe((0,d.R)(this.destroy$)).subscribe($=>{this.dir=$,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(u){const{nzOffsetBottom:$,nzOffsetTop:U,nzTarget:K}=u;($||U)&&this.offsetChanged$.next(),K&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const u=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,c.T)(...Object.keys(N).map($=>(0,k.R)(this.target,$)),this.offsetChanged$.pipe((0,I.U)(()=>({}))),this.nzResizeObserver.observe(u)).pipe((0,E.p)(20,void 0,{trailing:!0}),(0,d.R)(this.destroy$)).subscribe($=>this.updatePosition($))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(u,$){const U=u.getBoundingClientRect(),K=se($),ze=this.scrollSrv.getScroll($,!0),Te=this.scrollSrv.getScroll($,!1),Se=this.document.body;return{top:U.top-K.top+ze-(Se.clientTop||0),left:U.left-K.left+Te-(Se.clientLeft||0),width:U.width,height:U.height}}setAffixStyle(u,$){const U=this.affixStyle,K=this.target===window;if("scroll"===u.type&&U&&$&&K||(0,F.wU)(U,$))return;const ze=!!$,Te=this.fixedEl.nativeElement;this.renderer.setStyle(Te,"cssText",(0,F.GM)($)),this.affixStyle=$,ze?Te.classList.add(D):Te.classList.remove(D),this.updateRtlClass(),($&&!U||!$&&U)&&this.nzChange.emit(ze)}setPlaceholderStyle(u){(0,F.wU)(u,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,F.GM)(u)),this.placeholderStyle=u)}syncPlaceholderStyle(u){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const $={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),$)),this.setPlaceholderStyle($)}updatePosition(u){if(!this.platform.isBrowser)return;const $=this.target;let U=this.nzOffsetTop;const K=this.scrollSrv.getScroll($,!0),ze=this.getOffset(this.placeholderNode,$),Te=this.fixedEl.nativeElement,Se={width:Te.offsetWidth,height:Te.offsetHeight},Ae={top:!1,bottom:!1};"number"!=typeof U&&"number"!=typeof this.nzOffsetBottom?(Ae.top=!0,U=0):(Ae.top="number"==typeof U,Ae.bottom="number"==typeof this.nzOffsetBottom);const ie=se($),Ce=$.innerHeight||$.clientHeight;if(K>=ze.top-U&&Ae.top){const pe=ze.width;this.setAffixStyle(u,{position:"fixed",top:ie.top+U,left:ie.left+ze.left,width:pe}),this.setPlaceholderStyle({width:pe,height:Se.height})}else if(K<=ze.top+Se.height+this.nzOffsetBottom-Ce&&Ae.bottom){const pe=$===window?0:window.innerHeight-ie.bottom,Oe=ze.width;this.setAffixStyle(u,{position:"fixed",bottom:pe+this.nzOffsetBottom,left:ie.left+ze.left,width:Oe}),this.setPlaceholderStyle({width:Oe,height:ze.height})}else u.type===N.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(u,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(u),this.setPlaceholderStyle();"resize"===u.type&&this.syncPlaceholderStyle(u)}updateRtlClass(){const u=this.fixedEl.nativeElement;"rtl"===this.dir&&u.classList.contains(D)?u.classList.add(`${D}-rtl`):u.classList.remove(`${D}-rtl`)}}return S.\u0275fac=function(u){return new(u||S)(n.Y36(n.SBq),n.Y36(t.K0),n.Y36(L.jY),n.Y36(ne.MF),n.Y36(n.R0b),n.Y36(b.t4),n.Y36(n.Qsj),n.Y36(re.D3),n.Y36(n.sBO),n.Y36(j.Is,8))},S.\u0275cmp=n.Xpm({type:S,selectors:[["nz-affix"]],viewQuery:function(u,$){if(1&u&&n.Gf(Y,7),2&u){let U;n.iGM(U=n.CRH())&&($.fixedEl=U.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:W,decls:3,vars:0,consts:[["fixedEl",""]],template:function(u,$){1&u&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,L.oS)(),(0,F.Rn)(void 0)],S.prototype,"nzOffsetTop",void 0),(0,i.gn)([(0,L.oS)(),(0,F.Rn)(void 0)],S.prototype,"nzOffsetBottom",void 0),S})(),B=(()=>{class S{}return S.\u0275fac=function(u){return new(u||S)},S.\u0275mod=n.oAB({type:S}),S.\u0275inj=n.cJS({imports:[[j.vT,t.ez,b.ud]]}),S})()},6699:(ve,q,o)=>{o.d(q,{Dz:()=>b,Rt:()=>j});var i=o(655),t=o(5e3),n=o(9439),s=o(1721),A=o(925),_=o(9808),c=o(647),k=o(226);const d=["textEl"];function I(Y,W){if(1&Y&&t._UZ(0,"i",3),2&Y){const N=t.oxw();t.Q6J("nzType",N.nzIcon)}}function E(Y,W){if(1&Y){const N=t.EpF();t.TgZ(0,"img",4),t.NdJ("error",function(se){return t.CHM(N),t.oxw().imgError(se)}),t.qZA()}if(2&Y){const N=t.oxw();t.Q6J("src",N.nzSrc,t.LSH),t.uIk("srcset",N.nzSrcSet,t.LSH)("alt",N.nzAlt)}}function L(Y,W){if(1&Y&&(t.TgZ(0,"span",5,6),t._uU(2),t.qZA()),2&Y){const N=t.oxw();t.Q6J("ngStyle",N.textStyles),t.xp6(2),t.Oqu(N.nzText)}}let b=(()=>{class Y{constructor(N,w,se,G){this.nzConfigService=N,this.elementRef=w,this.cdr=se,this.platform=G,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new t.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(N){this.nzError.emit(N),N.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const N=this.textEl.nativeElement.offsetWidth,w=this.el.getBoundingClientRect().width,se=2*this.nzGap<w?2*this.nzGap:8;this.textStyles={transform:`scale(${w-se<N?(w-se)/N:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return Y.\u0275fac=function(N){return new(N||Y)(t.Y36(n.jY),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(A.t4))},Y.\u0275cmp=t.Xpm({type:Y,selectors:[["nz-avatar"]],viewQuery:function(N,w){if(1&N&&t.Gf(d,5),2&N){let se;t.iGM(se=t.CRH())&&(w.textEl=se.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(N,w){2&N&&(t.Udp("width",w.customSize)("height",w.customSize)("line-height",w.customSize)("font-size",w.hasIcon&&w.customSize?w.nzSize/2:null,"px"),t.ekj("ant-avatar-lg","large"===w.nzSize)("ant-avatar-sm","small"===w.nzSize)("ant-avatar-square","square"===w.nzShape)("ant-avatar-circle","circle"===w.nzShape)("ant-avatar-icon",w.nzIcon)("ant-avatar-image",w.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[t.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(N,w){1&N&&(t.YNc(0,I,1,1,"i",0),t.YNc(1,E,1,3,"img",1),t.YNc(2,L,3,2,"span",2)),2&N&&(t.Q6J("ngIf",w.nzIcon&&w.hasIcon),t.xp6(1),t.Q6J("ngIf",w.nzSrc&&w.hasSrc),t.xp6(1),t.Q6J("ngIf",w.nzText&&w.hasText))},directives:[_.O5,c.Ls,_.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,n.oS)()],Y.prototype,"nzShape",void 0),(0,i.gn)([(0,n.oS)()],Y.prototype,"nzSize",void 0),(0,i.gn)([(0,n.oS)(),(0,s.Rn)()],Y.prototype,"nzGap",void 0),Y})(),j=(()=>{class Y{}return Y.\u0275fac=function(N){return new(N||Y)},Y.\u0275mod=t.oAB({type:Y}),Y.\u0275inj=t.cJS({imports:[[k.vT,_.ez,c.PV,A.ud]]}),Y})()},4401:(ve,q,o)=>{o.d(q,{x7:()=>B,mS:()=>Q,F9:()=>S});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8076),_=o(9439),c=o(1721),k=o(226),d=o(4832),I=o(9808),E=o(969),L=o(7144);function F(u,$){if(1&u&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&u){const U=$.$implicit,K=t.oxw(2).index,ze=t.oxw(2);t.ekj("current",U===ze.countArray[K]),t.xp6(1),t.hij(" ",U," ")}}function ne(u,$){if(1&u&&(t.ynx(0),t.YNc(1,F,2,3,"p",5),t.BQk()),2&u){const U=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",U.countSingleArray)}}function b(u,$){if(1&u&&(t.TgZ(0,"span",3),t.YNc(1,ne,2,1,"ng-container",4),t.qZA()),2&u){const U=$.index,K=t.oxw(2);t.Udp("transform","translateY("+100*-K.countArray[U]+"%)"),t.Q6J("nzNoAnimation",K.noAnimation),t.xp6(1),t.Q6J("ngIf",!K.nzDot&&void 0!==K.countArray[U])}}function re(u,$){if(1&u&&(t.ynx(0),t.YNc(1,b,2,4,"span",2),t.BQk()),2&u){const U=t.oxw();t.xp6(1),t.Q6J("ngForOf",U.maxNumberArray)}}function j(u,$){if(1&u&&t._uU(0),2&u){const U=t.oxw();t.hij("",U.nzOverflowCount,"+")}}function Y(u,$){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const U=t.oxw(2);t.xp6(1),t.Oqu(U.nzText)}}function W(u,$){if(1&u&&(t.ynx(0),t._UZ(1,"span",2),t.TgZ(2,"span",3),t.YNc(3,Y,2,1,"ng-container",1),t.qZA(),t.BQk()),2&u){const U=t.oxw();t.xp6(1),t.Gre("ant-badge-status-dot ant-badge-status-",U.nzStatus||U.presetColor,""),t.Udp("background",!U.presetColor&&U.nzColor),t.Q6J("ngStyle",U.nzStyle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",U.nzText)}}function N(u,$){if(1&u&&t._UZ(0,"nz-badge-sup",5),2&u){const U=t.oxw(2);t.Q6J("nzOffset",U.nzOffset)("nzTitle",U.nzTitle)("nzStyle",U.nzStyle)("nzDot",U.nzDot)("nzOverflowCount",U.nzOverflowCount)("disableAnimation",!!(U.nzStandalone||U.nzStatus||U.nzColor||null!=U.noAnimation&&U.noAnimation.nzNoAnimation))("nzCount",U.nzCount)("noAnimation",!(null==U.noAnimation||!U.noAnimation.nzNoAnimation))}}function w(u,$){if(1&u&&(t.ynx(0),t.YNc(1,N,1,8,"nz-badge-sup",4),t.BQk()),2&u){const U=t.oxw();t.xp6(1),t.Q6J("ngIf",U.showSup)}}const se=["*"];function G(u,$){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const U=t.oxw();t.xp6(1),t.Oqu(U.nzText)}}const D=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let h=(()=>{class u{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(U){const{nzOverflowCount:K,nzCount:ze}=U;ze&&"number"==typeof ze.currentValue&&(this.count=Math.max(0,ze.currentValue),this.countArray=this.count.toString().split("").map(Te=>+Te)),K&&this.generateMaxNumberArray()}}return u.\u0275fac=function(U){return new(U||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(U,K){2&U&&(t.uIk("title",null===K.nzTitle?"":K.nzTitle||K.nzCount),t.d8E("@.disabled",K.disableAnimation)("@zoomBadgeMotion",void 0),t.Akn(K.nzStyle),t.Udp("right",K.nzOffset&&K.nzOffset[0]?-K.nzOffset[0]:null,"px")("margin-top",K.nzOffset&&K.nzOffset[1]?K.nzOffset[1]:null,"px"),t.ekj("ant-badge-count",!K.nzDot)("ant-badge-dot",K.nzDot)("ant-badge-multiple-words",K.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[t.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(U,K){if(1&U&&(t.YNc(0,re,2,1,"ng-container",0),t.YNc(1,j,1,1,"ng-template",null,1,t.W1O)),2&U){const ze=t.MAs(2);t.Q6J("ngIf",K.count<=K.nzOverflowCount)("ngIfElse",ze)}},directives:[I.O5,I.sg,d.P],encapsulation:2,data:{animation:[A.Ev]},changeDetection:0}),u})(),B=(()=>{class u{constructor(U,K,ze,Te,Se,Ae){this.nzConfigService=U,this.renderer=K,this.cdr=ze,this.elementRef=Te,this.directionality=Se,this.noAnimation=Ae,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,s.R)(this.destroy$)).subscribe(K=>{this.dir=K,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(U){const{nzColor:K,nzShowDot:ze,nzDot:Te,nzCount:Se,nzShowZero:Ae}=U;K&&(this.presetColor=this.nzColor&&-1!==D.indexOf(this.nzColor)?this.nzColor:null),(ze||Te||Se||Ae)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(U){return new(U||u)(t.Y36(_.jY),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(k.Is,8),t.Y36(d.P,9))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(U,K){2&U&&t.ekj("ant-badge-status",K.nzStatus)("ant-badge-not-a-wrapper",!!(K.nzStandalone||K.nzStatus||K.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[t.TTD],ngContentSelectors:se,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(U,K){1&U&&(t.F$t(),t.YNc(0,W,4,7,"ng-container",0),t.Hsn(1),t.YNc(2,w,2,1,"ng-container",1)),2&U&&(t.Q6J("ngIf",K.nzStatus||K.nzColor),t.xp6(2),t.Q6J("nzStringTemplateOutlet",K.nzCount))},directives:[h,I.O5,I.PC,E.f],encapsulation:2,data:{animation:[A.Ev]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowZero",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzShowDot",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzStandalone",void 0),(0,i.gn)([(0,c.yF)()],u.prototype,"nzDot",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,_.oS)()],u.prototype,"nzColor",void 0),u})(),S=(()=>{class u{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(U){const{nzColor:K}=U;K&&(this.presetColor=this.nzColor&&-1!==D.indexOf(this.nzColor)?this.nzColor:null)}}return u.\u0275fac=function(U){return new(U||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[t.TTD],ngContentSelectors:se,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(U,K){1&U&&(t.F$t(),t.Hsn(0),t.TgZ(1,"div",0),t.YNc(2,G,2,1,"ng-container",1),t._UZ(3,"div",2),t.qZA()),2&U&&(t.xp6(1),t.Tol(K.presetColor&&"ant-ribbon-color-"+K.presetColor),t.Udp("background-color",!K.presetColor&&K.nzColor),t.ekj("ant-ribbon-placement-end","end"===K.nzPlacement)("ant-ribbon-placement-start","start"===K.nzPlacement),t.xp6(1),t.Q6J("nzStringTemplateOutlet",K.nzText),t.xp6(1),t.Udp("color",!K.presetColor&&K.nzColor))},directives:[E.f],encapsulation:2,changeDetection:0}),u})(),Q=(()=>{class u{}return u.\u0275fac=function(U){return new(U||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[k.vT,I.ez,L.Q8,E.T,d.g]]}),u})()},7484:(ve,q,o)=>{o.d(q,{bd:()=>Ce,vh:()=>Oe,_i:()=>Se});var i=o(655),t=o(5e3),n=o(1721),s=o(8929),A=o(7625),_=o(9439),c=o(226),k=o(9808),d=o(969);function I(H,fe){1&H&&t.Hsn(0)}const E=["*"];function L(H,fe){1&H&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA()),2&H&&t.Q6J("ngClass",fe.$implicit)}function F(H,fe){if(1&H&&(t.TgZ(0,"div",2),t.YNc(1,L,2,1,"div",3),t.qZA()),2&H){const J=fe.$implicit;t.xp6(1),t.Q6J("ngForOf",J)}}function ne(H,fe){if(1&H&&(t.ynx(0),t._uU(1),t.BQk()),2&H){const J=t.oxw(3);t.xp6(1),t.Oqu(J.nzTitle)}}function b(H,fe){if(1&H&&(t.TgZ(0,"div",11),t.YNc(1,ne,2,1,"ng-container",12),t.qZA()),2&H){const J=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",J.nzTitle)}}function re(H,fe){if(1&H&&(t.ynx(0),t._uU(1),t.BQk()),2&H){const J=t.oxw(3);t.xp6(1),t.Oqu(J.nzExtra)}}function j(H,fe){if(1&H&&(t.TgZ(0,"div",13),t.YNc(1,re,2,1,"ng-container",12),t.qZA()),2&H){const J=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",J.nzExtra)}}function Y(H,fe){}function W(H,fe){if(1&H&&(t.ynx(0),t.YNc(1,Y,0,0,"ng-template",14),t.BQk()),2&H){const J=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",J.listOfNzCardTabComponent.template)}}function N(H,fe){if(1&H&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.YNc(2,b,2,1,"div",8),t.YNc(3,j,2,1,"div",9),t.qZA(),t.YNc(4,W,2,1,"ng-container",10),t.qZA()),2&H){const J=t.oxw();t.xp6(2),t.Q6J("ngIf",J.nzTitle),t.xp6(1),t.Q6J("ngIf",J.nzExtra),t.xp6(1),t.Q6J("ngIf",J.listOfNzCardTabComponent)}}function w(H,fe){}function se(H,fe){if(1&H&&(t.TgZ(0,"div",15),t.YNc(1,w,0,0,"ng-template",14),t.qZA()),2&H){const J=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",J.nzCover)}}function G(H,fe){1&H&&(t.ynx(0),t.Hsn(1),t.BQk())}function D(H,fe){1&H&&t._UZ(0,"nz-card-loading")}function h(H,fe){}function x(H,fe){if(1&H&&(t.TgZ(0,"li"),t.TgZ(1,"span"),t.YNc(2,h,0,0,"ng-template",14),t.qZA(),t.qZA()),2&H){const J=fe.$implicit,ge=t.oxw(2);t.Udp("width",100/ge.nzActions.length,"%"),t.xp6(2),t.Q6J("ngTemplateOutlet",J)}}function B(H,fe){if(1&H&&(t.TgZ(0,"ul",16),t.YNc(1,x,3,3,"li",17),t.qZA()),2&H){const J=t.oxw();t.xp6(1),t.Q6J("ngForOf",J.nzActions)}}let Te=(()=>{class H{constructor(){this.nzHoverable=!0}}return H.\u0275fac=function(J){return new(J||H)},H.\u0275dir=t.lG2({type:H,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(J,ge){2&J&&t.ekj("ant-card-hoverable",ge.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,n.yF)()],H.prototype,"nzHoverable",void 0),H})(),Se=(()=>{class H{}return H.\u0275fac=function(J){return new(J||H)},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card-tab"]],viewQuery:function(J,ge){if(1&J&&t.Gf(t.Rgc,7),2&J){let de;t.iGM(de=t.CRH())&&(ge.template=de.first)}},exportAs:["nzCardTab"],ngContentSelectors:E,decls:1,vars:0,template:function(J,ge){1&J&&(t.F$t(),t.YNc(0,I,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),H})(),Ae=(()=>{class H{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return H.\u0275fac=function(J){return new(J||H)},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(J,ge){1&J&&(t.TgZ(0,"div",0),t.YNc(1,F,2,1,"div",1),t.qZA()),2&J&&(t.xp6(1),t.Q6J("ngForOf",ge.listOfLoading))},directives:[k.sg,k.mk],encapsulation:2,changeDetection:0}),H})(),Ce=(()=>{class H{constructor(J,ge,de){this.nzConfigService=J,this.cdr=ge,this.directionality=de,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,A.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var J;null===(J=this.directionality.change)||void 0===J||J.pipe((0,A.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return H.\u0275fac=function(J){return new(J||H)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(c.Is,8))},H.\u0275cmp=t.Xpm({type:H,selectors:[["nz-card"]],contentQueries:function(J,ge,de){if(1&J&&(t.Suo(de,Se,5),t.Suo(de,Te,4)),2&J){let Me;t.iGM(Me=t.CRH())&&(ge.listOfNzCardTabComponent=Me.first),t.iGM(Me=t.CRH())&&(ge.listOfNzCardGridDirective=Me)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(J,ge){2&J&&t.ekj("ant-card-loading",ge.nzLoading)("ant-card-bordered",!1===ge.nzBorderless&&ge.nzBordered)("ant-card-hoverable",ge.nzHoverable)("ant-card-small","small"===ge.nzSize)("ant-card-contain-grid",ge.listOfNzCardGridDirective&&ge.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===ge.nzType)("ant-card-contain-tabs",!!ge.listOfNzCardTabComponent)("ant-card-rtl","rtl"===ge.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:E,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(J,ge){if(1&J&&(t.F$t(),t.YNc(0,N,5,3,"div",0),t.YNc(1,se,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,G,2,0,"ng-container",3),t.YNc(4,D,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(6,B,2,1,"ul",5)),2&J){const de=t.MAs(5);t.Q6J("ngIf",ge.nzTitle||ge.nzExtra||ge.listOfNzCardTabComponent),t.xp6(1),t.Q6J("ngIf",ge.nzCover),t.xp6(1),t.Q6J("ngStyle",ge.nzBodyStyle),t.xp6(1),t.Q6J("ngIf",!ge.nzLoading)("ngIfElse",de),t.xp6(3),t.Q6J("ngIf",ge.nzActions.length)}},directives:[Ae,k.O5,d.f,k.tP,k.PC,k.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzBorderless",void 0),(0,i.gn)([(0,n.yF)()],H.prototype,"nzLoading",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],H.prototype,"nzHoverable",void 0),(0,i.gn)([(0,_.oS)()],H.prototype,"nzSize",void 0),H})(),Oe=(()=>{class H{}return H.\u0275fac=function(J){return new(J||H)},H.\u0275mod=t.oAB({type:H}),H.\u0275inj=t.cJS({imports:[[k.ez,d.T],c.vT]}),H})()},5577:(ve,q,o)=>{o.d(q,{D3:()=>_,y7:()=>k});var i=o(5e3),t=o(3191),n=o(2916),s=o(8929);let A=(()=>{class d{create(E){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(E)}}return d.\u0275fac=function(E){return new(E||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),_=(()=>{class d{constructor(E){this.nzResizeObserverFactory=E,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((E,L)=>this.cleanupObserver(L))}observe(E){const L=(0,t.fI)(E);return new n.y(F=>{const b=this.observeElement(L).subscribe(F);return()=>{b.unsubscribe(),this.unobserveElement(L)}})}observeElement(E){if(this.observedElements.has(E))this.observedElements.get(E).count++;else{const L=new s.xQ,F=this.nzResizeObserverFactory.create(ne=>L.next(ne));F&&F.observe(E),this.observedElements.set(E,{observer:F,stream:L,count:1})}return this.observedElements.get(E).stream}unobserveElement(E){this.observedElements.has(E)&&(this.observedElements.get(E).count--,this.observedElements.get(E).count||this.cleanupObserver(E))}cleanupObserver(E){if(this.observedElements.has(E)){const{observer:L,stream:F}=this.observedElements.get(E);L&&L.disconnect(),F.complete(),this.observedElements.delete(E)}}}return d.\u0275fac=function(E){return new(E||d)(i.LFG(A))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),k=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({providers:[A]}),d})()},5482:(ve,q,o)=>{o.d(q,{yH:()=>N,cD:()=>G,Zv:()=>se});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8076),_=o(9439),c=o(1721),k=o(226),d=o(4832),I=o(9808),E=o(969),L=o(647);const F=["*"];function ne(D,h){if(1&D&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&D){const x=h.$implicit,B=t.oxw(2);t.xp6(1),t.Q6J("nzType",x||"right")("nzRotate",B.nzActive?90:0)}}function b(D,h){if(1&D&&(t.TgZ(0,"div"),t.YNc(1,ne,2,2,"ng-container",2),t.qZA()),2&D){const x=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",x.nzExpandedIcon)}}function re(D,h){if(1&D&&(t.ynx(0),t._uU(1),t.BQk()),2&D){const x=t.oxw();t.xp6(1),t.Oqu(x.nzHeader)}}function j(D,h){if(1&D&&(t.ynx(0),t._uU(1),t.BQk()),2&D){const x=t.oxw(2);t.xp6(1),t.Oqu(x.nzExtra)}}function Y(D,h){if(1&D&&(t.TgZ(0,"div",7),t.YNc(1,j,2,1,"ng-container",2),t.qZA()),2&D){const x=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",x.nzExtra)}}const W="collapse";let N=(()=>{class D{constructor(x,B,S){this.nzConfigService=x,this.cdr=B,this.directionality=S,this._nzModuleName=W,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(W).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var x;null===(x=this.directionality.change)||void 0===x||x.pipe((0,s.R)(this.destroy$)).subscribe(B=>{this.dir=B,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(x){this.listOfNzCollapsePanelComponent.push(x)}removePanel(x){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(x),1)}click(x){this.nzAccordion&&!x.nzActive&&this.listOfNzCollapsePanelComponent.filter(B=>B!==x).forEach(B=>{B.nzActive&&(B.nzActive=!1,B.nzActiveChange.emit(B.nzActive),B.markForCheck())}),x.nzActive=!x.nzActive,x.nzActiveChange.emit(x.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return D.\u0275fac=function(x){return new(x||D)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(k.Is,8))},D.\u0275cmp=t.Xpm({type:D,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(x,B){2&x&&t.ekj("ant-collapse-icon-position-left","left"===B.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===B.nzExpandIconPosition)("ant-collapse-ghost",B.nzGhost)("ant-collapse-borderless",!B.nzBordered)("ant-collapse-rtl","rtl"===B.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:F,decls:1,vars:0,template:function(x,B){1&x&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],D.prototype,"nzAccordion",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],D.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],D.prototype,"nzGhost",void 0),D})();const w="collapsePanel";let se=(()=>{class D{constructor(x,B,S,Q){this.nzConfigService=x,this.cdr=B,this.nzCollapseComponent=S,this.noAnimation=Q,this._nzModuleName=w,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(w).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return D.\u0275fac=function(x){return new(x||D)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(N,1),t.Y36(d.P,8))},D.\u0275cmp=t.Xpm({type:D,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(x,B){2&x&&t.ekj("ant-collapse-no-arrow",!B.nzShowArrow)("ant-collapse-item-active",B.nzActive)("ant-collapse-item-disabled",B.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:F,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(x,B){1&x&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return B.clickHeader()}),t.YNc(1,b,2,1,"div",1),t.YNc(2,re,2,1,"ng-container",2),t.YNc(3,Y,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&x&&(t.uIk("aria-expanded",B.nzActive),t.xp6(1),t.Q6J("ngIf",B.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",B.nzHeader),t.xp6(1),t.Q6J("ngIf",B.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",B.nzActive),t.Q6J("@.disabled",null==B.noAnimation?null:B.noAnimation.nzNoAnimation)("@collapseMotion",B.nzActive?"expanded":"hidden"))},directives:[I.O5,E.f,L.Ls],encapsulation:2,data:{animation:[A.J_]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],D.prototype,"nzActive",void 0),(0,i.gn)([(0,c.yF)()],D.prototype,"nzDisabled",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],D.prototype,"nzShowArrow",void 0),D})(),G=(()=>{class D{}return D.\u0275fac=function(x){return new(x||D)},D.\u0275mod=t.oAB({type:D}),D.\u0275inj=t.cJS({imports:[[k.vT,I.ez,L.PV,E.T,d.g]]}),D})()},3098:(ve,q,o)=>{o.d(q,{R7:()=>oe,uj:()=>Le,q6:()=>Ie});var i=o(226),t=o(925),n=o(9808),s=o(5e3),A=o(969),_=o(655),c=o(8929),k=o(6787),d=o(1721),I=o(7625),E=o(1059),L=o(7545),F=o(7138),ne=o(2994),b=o(9439),re=o(948),j=o(4090);function Y(P,ce){1&P&&s.Hsn(0)}const W=["*"];function N(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw(3);s.xp6(1),s.Oqu(Z.nzTitle)}}function w(P,ce){if(1&P&&(s.TgZ(0,"div",6),s.YNc(1,N,2,1,"ng-container",7),s.qZA()),2&P){const Z=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.nzTitle)}}function se(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw(3);s.xp6(1),s.Oqu(Z.nzExtra)}}function G(P,ce){if(1&P&&(s.TgZ(0,"div",8),s.YNc(1,se,2,1,"ng-container",7),s.qZA()),2&P){const Z=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.nzExtra)}}function D(P,ce){if(1&P&&(s.TgZ(0,"div",3),s.YNc(1,w,2,1,"div",4),s.YNc(2,G,2,1,"div",5),s.qZA()),2&P){const Z=s.oxw();s.xp6(1),s.Q6J("ngIf",Z.nzTitle),s.xp6(1),s.Q6J("ngIf",Z.nzExtra)}}function h(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function x(P,ce){}function B(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,h,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,x,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&P){const Z=s.oxw().$implicit,_e=s.oxw(3);s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!_e.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title),s.xp6(2),s.Q6J("ngTemplateOutlet",Z.content)}}function S(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function Q(P,ce){if(1&P&&(s.TgZ(0,"td",14),s.YNc(1,S,2,1,"ng-container",7),s.qZA()),2&P){const Z=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function u(P,ce){}function $(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,Q,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,u,0,0,"ng-template",16),s.qZA(),s.BQk()),2&P){const Z=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title),s.xp6(1),s.Q6J("colSpan",2*Z.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",Z.content)}}function U(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,B,7,5,"ng-container",2),s.YNc(2,$,4,3,"ng-container",2),s.BQk()),2&P){const Z=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!Z.nzBordered),s.xp6(1),s.Q6J("ngIf",Z.nzBordered)}}function K(P,ce){if(1&P&&(s.TgZ(0,"tr",10),s.YNc(1,U,3,2,"ng-container",11),s.qZA()),2&P){const Z=ce.$implicit;s.xp6(1),s.Q6J("ngForOf",Z)}}function ze(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,K,2,1,"tr",9),s.BQk()),2&P){const Z=s.oxw();s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function Te(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw().$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function Se(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,Te,2,1,"ng-container",7),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit,_e=s.oxw(4);s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!_e.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function Ae(P,ce){}function ie(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",15),s.YNc(4,Ae,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(3),s.Q6J("ngTemplateOutlet",Z.content)}}function Ce(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,Se,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,ie,5,2,"ng-container",11),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit;s.xp6(2),s.Q6J("ngForOf",Z),s.xp6(2),s.Q6J("ngForOf",Z)}}function pe(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,Ce,5,2,"ng-container",11),s.BQk()),2&P){const Z=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function Oe(P,ce){if(1&P&&(s.ynx(0),s._uU(1),s.BQk()),2&P){const Z=s.oxw().$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function H(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,Oe,2,1,"ng-container",7),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function fe(P,ce){}function J(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,fe,0,0,"ng-template",16),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(1),s.Q6J("ngTemplateOutlet",Z.content)}}function ge(P,ce){if(1&P&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,H,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,J,3,2,"ng-container",11),s.qZA(),s.BQk()),2&P){const Z=ce.$implicit;s.xp6(2),s.Q6J("ngForOf",Z),s.xp6(2),s.Q6J("ngForOf",Z)}}function de(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,ge,5,2,"ng-container",11),s.BQk()),2&P){const Z=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function Me(P,ce){if(1&P&&(s.ynx(0),s.YNc(1,pe,2,1,"ng-container",2),s.YNc(2,de,2,1,"ng-container",2),s.BQk()),2&P){const Z=s.oxw();s.xp6(1),s.Q6J("ngIf",!Z.nzBordered),s.xp6(1),s.Q6J("ngIf",Z.nzBordered)}}let Le=(()=>{class P{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new c.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return P.\u0275fac=function(Z){return new(Z||P)},P.\u0275cmp=s.Xpm({type:P,selectors:[["nz-descriptions-item"]],viewQuery:function(Z,_e){if(1&Z&&s.Gf(s.Rgc,7),2&Z){let Pe;s.iGM(Pe=s.CRH())&&(_e.content=Pe.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:W,decls:1,vars:0,template:function(Z,_e){1&Z&&(s.F$t(),s.YNc(0,Y,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.Rn)()],P.prototype,"nzSpan",void 0),P})();const Be={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let oe=(()=>{class P{constructor(Z,_e,Pe,be){this.nzConfigService=Z,this.cdr=_e,this.breakpointService=Pe,this.directionality=be,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Be,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=j.G_.md,this.destroy$=new c.xQ}ngOnInit(){var Z;this.dir=this.directionality.value,null===(Z=this.directionality.change)||void 0===Z||Z.pipe((0,I.R)(this.destroy$)).subscribe(_e=>{this.dir=_e})}ngOnChanges(Z){Z.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const Z=this.items.changes.pipe((0,E.O)(this.items),(0,I.R)(this.destroy$));(0,k.T)(Z,Z.pipe((0,L.w)(()=>(0,k.T)(...this.items.map(_e=>_e.inputChange$)).pipe((0,F.e)(16)))),this.breakpointService.subscribe(j.WV).pipe((0,ne.b)(_e=>this.breakpoint=_e))).pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let Z=[],_e=0;const Pe=this.realColumn=this.getColumn(),be=this.items.toArray(),tt=be.length,nt=[],Ke=()=>{nt.push(Z),Z=[],_e=0};for(let Ve=0;Ve<tt;Ve++){const C=be[Ve],{nzTitle:He,content:Xe,nzSpan:Ye}=C;_e+=Ye,_e>=Pe?(_e>Pe&&(0,re.ZK)(`"nzColumn" is ${Pe} but we have row length ${_e}`),Z.push({title:He,content:Xe,span:Pe-(_e-Ye)}),Ke()):Ve===tt-1?(Z.push({title:He,content:Xe,span:Pe-(_e-Ye)}),Ke()):Z.push({title:He,content:Xe,span:Ye})}this.itemMatrix=nt}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return P.\u0275fac=function(Z){return new(Z||P)(s.Y36(b.jY),s.Y36(s.sBO),s.Y36(j.r3),s.Y36(i.Is,8))},P.\u0275cmp=s.Xpm({type:P,selectors:[["nz-descriptions"]],contentQueries:function(Z,_e,Pe){if(1&Z&&s.Suo(Pe,Le,4),2&Z){let be;s.iGM(be=s.CRH())&&(_e.items=be)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(Z,_e){2&Z&&s.ekj("ant-descriptions-bordered",_e.nzBordered)("ant-descriptions-middle","middle"===_e.nzSize)("ant-descriptions-small","small"===_e.nzSize)("ant-descriptions-rtl","rtl"===_e.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(Z,_e){1&Z&&(s.YNc(0,D,3,2,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"table"),s.TgZ(3,"tbody"),s.YNc(4,ze,2,1,"ng-container",2),s.YNc(5,Me,3,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&Z&&(s.Q6J("ngIf",_e.nzTitle||_e.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===_e.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===_e.nzLayout))},directives:[n.O5,A.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,d.yF)(),(0,b.oS)()],P.prototype,"nzBordered",void 0),(0,_.gn)([(0,b.oS)()],P.prototype,"nzColumn",void 0),(0,_.gn)([(0,b.oS)()],P.prototype,"nzSize",void 0),(0,_.gn)([(0,b.oS)(),(0,d.yF)()],P.prototype,"nzColon",void 0),P})(),Ie=(()=>{class P{}return P.\u0275fac=function(Z){return new(Z||P)},P.\u0275mod=s.oAB({type:P}),P.\u0275inj=s.cJS({imports:[[i.vT,n.ez,A.T,t.ud]]}),P})()},3677:(ve,q,o)=>{o.d(q,{cm:()=>Se,b1:()=>Oe,wA:()=>Ce,RR:()=>pe});var i=o(655),t=o(1159),n=o(7429),s=o(5e3),A=o(8929),_=o(591),c=o(6787),k=o(3753),d=o(8896),I=o(6053),E=o(7604),L=o(4850),F=o(7545),ne=o(2198),b=o(7138),re=o(5778),j=o(7625),Y=o(9439),W=o(6950),N=o(1721),w=o(2845),se=o(925),G=o(226),D=o(9808),h=o(3075),x=o(6042),B=o(4832),S=o(969),Q=o(647),u=o(4219),$=o(8076);function U(J,ge){if(1&J){const de=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Le){return s.CHM(de),s.oxw().onAnimationEvent(Le)})("mouseenter",function(){return s.CHM(de),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(de),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&J){const de=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===de.dir),s.Q6J("ngClass",de.nzOverlayClassName)("ngStyle",de.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)("nzNoAnimation",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)}}const K=["*"],Te=[W.yW.bottomLeft,W.yW.bottomRight,W.yW.topRight,W.yW.topLeft];let Se=(()=>{class J{constructor(de,Me,Le,$e,Be,oe){this.nzConfigService=de,this.elementRef=Me,this.overlay=Le,this.renderer=$e,this.viewContainerRef=Be,this.platform=oe,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new A.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new _.X(!1),this.nzTrigger$=new _.X("hover"),this.overlayClose$=new A.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(de,Me){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(de,Me)}ngAfterViewInit(){if(this.nzDropdownMenu){const de=this.elementRef.nativeElement,Me=(0,c.T)((0,k.R)(de,"mouseenter").pipe((0,E.h)(!0)),(0,k.R)(de,"mouseleave").pipe((0,E.h)(!1))),$e=(0,c.T)(this.nzDropdownMenu.mouseState$,Me),Be=(0,k.R)(de,"click").pipe((0,L.U)(()=>!this.nzVisible)),oe=this.nzTrigger$.pipe((0,F.w)(Z=>"hover"===Z?$e:"click"===Z?Be:d.E)),Ie=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,ne.h)(()=>this.nzClickHide),(0,E.h)(!1)),P=(0,c.T)(oe,Ie,this.overlayClose$).pipe((0,ne.h)(()=>!this.nzDisabled)),ce=(0,c.T)(this.inputVisible$,P);(0,I.aj)([ce,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,L.U)(([Z,_e])=>Z||_e),(0,b.e)(150),(0,re.x)(),(0,ne.h)(()=>this.platform.isBrowser),(0,j.R)(this.destroy$)).subscribe(Z=>{const Pe=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:de).getBoundingClientRect().width;this.nzVisible!==Z&&this.nzVisibleChange.emit(Z),this.nzVisible=Z,Z?(this.overlayRef?this.overlayRef.getConfig().minWidth=Pe:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Pe,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,c.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,ne.h)(be=>!this.elementRef.nativeElement.contains(be.target))),this.overlayRef.keydownEvents().pipe((0,ne.h)(be=>be.keyCode===t.hY&&!(0,t.Vb)(be)))).pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([W.yW[this.nzPlacement],...Te]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,j.R)(this.destroy$)).subscribe(Z=>{"void"===Z.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(de){const{nzVisible:Me,nzDisabled:Le,nzOverlayClassName:$e,nzOverlayStyle:Be,nzTrigger:oe}=de;if(oe&&this.nzTrigger$.next(this.nzTrigger),Me&&this.inputVisible$.next(this.nzVisible),Le){const Ie=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ie,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ie,"disabled")}$e&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Be&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return J.\u0275fac=function(de){return new(de||J)(s.Y36(Y.jY),s.Y36(s.SBq),s.Y36(w.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(se.t4))},J.\u0275dir=s.lG2({type:J,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,i.gn)([(0,Y.oS)(),(0,N.yF)()],J.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,N.yF)()],J.prototype,"nzClickHide",void 0),(0,i.gn)([(0,N.yF)()],J.prototype,"nzDisabled",void 0),(0,i.gn)([(0,N.yF)()],J.prototype,"nzVisible",void 0),J})(),Ae=(()=>{class J{}return J.\u0275fac=function(de){return new(de||J)},J.\u0275mod=s.oAB({type:J}),J.\u0275inj=s.cJS({}),J})(),Ce=(()=>{class J{constructor(de,Me,Le){this.renderer=de,this.nzButtonGroupComponent=Me,this.elementRef=Le}ngAfterViewInit(){const de=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&de&&this.renderer.addClass(de,"ant-dropdown-button")}}return J.\u0275fac=function(de){return new(de||J)(s.Y36(s.Qsj),s.Y36(x.fY,9),s.Y36(s.SBq))},J.\u0275dir=s.lG2({type:J,selectors:[["","nz-button","","nz-dropdown",""]]}),J})(),pe=(()=>{class J{constructor(de,Me,Le,$e,Be,oe,Ie){this.cdr=de,this.elementRef=Me,this.renderer=Le,this.viewContainerRef=$e,this.nzMenuService=Be,this.directionality=oe,this.noAnimation=Ie,this.mouseState$=new _.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new A.xQ}onAnimationEvent(de){this.animationStateChange$.emit(de)}setMouseState(de){this.mouseState$.next(de)}setValue(de,Me){this[de]=Me,this.cdr.markForCheck()}ngOnInit(){var de;null===(de=this.directionality.change)||void 0===de||de.pipe((0,j.R)(this.destroy$)).subscribe(Me=>{this.dir=Me,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(de){return new(de||J)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(u.hl),s.Y36(G.Is,8),s.Y36(B.P,9))},J.\u0275cmp=s.Xpm({type:J,selectors:[["nz-dropdown-menu"]],viewQuery:function(de,Me){if(1&de&&s.Gf(s.Rgc,7),2&de){let Le;s.iGM(Le=s.CRH())&&(Me.templateRef=Le.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([u.hl,{provide:u.Cc,useValue:!0}])],ngContentSelectors:K,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(de,Me){1&de&&(s.F$t(),s.YNc(0,U,2,7,"ng-template"))},directives:[D.mk,D.PC,B.P],encapsulation:2,data:{animation:[$.mF]},changeDetection:0}),J})(),Oe=(()=>{class J{}return J.\u0275fac=function(de){return new(de||J)},J.\u0275mod=s.oAB({type:J}),J.\u0275inj=s.cJS({imports:[[G.vT,D.ez,w.U8,h.u5,x.sL,u.ip,Q.PV,B.g,se.ud,W.e4,Ae,S.T],u.ip]}),J})();new w.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new w.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new w.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new w.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ve,q,o)=>{o.d(q,{n_:()=>Ze,I2:()=>Ge,t4:()=>ke,AA:()=>ot,yw:()=>Fe,yi:()=>ye,IO:()=>z,Ph:()=>st});var i=o(5e3),t=o(6699),n=o(9808),s=o(969),A=o(655),_=o(1721),c=o(8929),k=o(8514),d=o(1086),I=o(6787),E=o(591),L=o(2986),F=o(7545),ne=o(7625),b=o(685),re=o(226),j=o(7525),Y=o(1894);const W=["*"];function N(y,ee){if(1&y&&i._UZ(0,"nz-avatar",3),2&y){const R=i.oxw();i.Q6J("nzSrc",R.nzSrc)}}function w(y,ee){1&y&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function se(y,ee){if(1&y&&i._UZ(0,"nz-list-item-meta-avatar",3),2&y){const R=i.oxw();i.Q6J("nzSrc",R.avatarStr)}}function G(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",R.avatarTpl)}}function D(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzTitle)}}function h(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,D,2,1,"ng-container",6),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzTitle)}}function x(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzDescription)}}function B(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,x,2,1,"ng-container",6),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzDescription)}}function S(y,ee){if(1&y&&(i.TgZ(0,"div",5),i.YNc(1,h,2,1,"nz-list-item-meta-title",1),i.YNc(2,B,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngIf",R.nzTitle&&!R.titleComponent),i.xp6(1),i.Q6J("ngIf",R.nzDescription&&!R.descriptionComponent)}}const Q=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],u=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function $(y,ee){1&y&&i.Hsn(0)}const U=["nz-list-item-actions",""];function K(y,ee){}function ze(y,ee){1&y&&i._UZ(0,"em",3)}function Te(y,ee){if(1&y&&(i.TgZ(0,"li"),i.YNc(1,K,0,0,"ng-template",1),i.YNc(2,ze,1,0,"em",2),i.qZA()),2&y){const R=ee.$implicit,ue=ee.last;i.xp6(1),i.Q6J("ngTemplateOutlet",R),i.xp6(1),i.Q6J("ngIf",!ue)}}function Se(y,ee){}const Ae=function(y,ee){return{$implicit:y,index:ee}};function ie(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,Se,0,0,"ng-template",9),i.BQk()),2&y){const R=ee.$implicit,ue=ee.index,De=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,Ae,R,ue))}}function Ce(y,ee){if(1&y&&(i.TgZ(0,"div",7),i.YNc(1,ie,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngForOf",R.nzDataSource)}}function pe(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Oqu(R.nzHeader)}}function Oe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-header"),i.YNc(1,pe,2,1,"ng-container",10),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzHeader)}}function H(y,ee){1&y&&i._UZ(0,"div"),2&y&&i.Udp("min-height",53,"px")}function fe(y,ee){}function J(y,ee){if(1&y&&(i.TgZ(0,"div",13),i.YNc(1,fe,0,0,"ng-template",9),i.qZA()),2&y){const R=ee.$implicit,ue=ee.index,De=i.oxw(2);i.Q6J("nzSpan",De.nzGrid.span||null)("nzXs",De.nzGrid.xs||null)("nzSm",De.nzGrid.sm||null)("nzMd",De.nzGrid.md||null)("nzLg",De.nzGrid.lg||null)("nzXl",De.nzGrid.xl||null)("nzXXl",De.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,Ae,R,ue))}}function ge(y,ee){if(1&y&&(i.TgZ(0,"div",11),i.YNc(1,J,2,12,"div",12),i.qZA()),2&y){const R=i.oxw();i.Q6J("nzGutter",R.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",R.nzDataSource)}}function de(y,ee){if(1&y&&i._UZ(0,"nz-list-empty",14),2&y){const R=i.oxw();i.Q6J("nzNoResult",R.nzNoResult)}}function Me(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Oqu(R.nzFooter)}}function Le(y,ee){if(1&y&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,Me,2,1,"ng-container",10),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzFooter)}}function $e(y,ee){}function Be(y,ee){}function oe(y,ee){if(1&y&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Be,0,0,"ng-template",6),i.qZA()),2&y){const R=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzPagination)}}const Ie=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],P=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ce(y,ee){if(1&y&&i._UZ(0,"ul",6),2&y){const R=i.oxw(2);i.Q6J("nzActions",R.nzActions)}}function Z(y,ee){if(1&y&&(i.YNc(0,ce,1,1,"ul",5),i.Hsn(1)),2&y){const R=i.oxw();i.Q6J("ngIf",R.nzActions&&R.nzActions.length>0)}}function _e(y,ee){if(1&y&&(i.ynx(0),i._uU(1),i.BQk()),2&y){const R=i.oxw(3);i.xp6(1),i.Oqu(R.nzContent)}}function Pe(y,ee){if(1&y&&(i.ynx(0),i.YNc(1,_e,2,1,"ng-container",8),i.BQk()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",R.nzContent)}}function be(y,ee){if(1&y&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,Pe,2,1,"ng-container",7)),2&y){const R=i.oxw();i.xp6(2),i.Q6J("ngIf",R.nzContent)}}function tt(y,ee){1&y&&i.Hsn(0,3)}function nt(y,ee){}function Ke(y,ee){}function Ve(y,ee){}function C(y,ee){}function He(y,ee){if(1&y&&(i.YNc(0,nt,0,0,"ng-template",9),i.YNc(1,Ke,0,0,"ng-template",9),i.YNc(2,Ve,0,0,"ng-template",9),i.YNc(3,C,0,0,"ng-template",9)),2&y){const R=i.oxw(),ue=i.MAs(3),De=i.MAs(5),xe=i.MAs(1);i.Q6J("ngTemplateOutlet",ue),i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",De),i.xp6(1),i.Q6J("ngTemplateOutlet",xe)}}function Xe(y,ee){}function Ye(y,ee){}function lt(y,ee){}function we(y,ee){if(1&y&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,lt,0,0,"ng-template",9),i.qZA()),2&y){const R=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",R.nzExtra)}}function pt(y,ee){}function v(y,ee){if(1&y&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,Xe,0,0,"ng-template",9),i.YNc(3,Ye,0,0,"ng-template",9),i.qZA(),i.YNc(4,we,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&y){const R=i.oxw(),ue=i.MAs(3),De=i.MAs(1),xe=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",ue),i.xp6(1),i.Q6J("ngTemplateOutlet",De),i.xp6(1),i.Q6J("ngIf",R.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",xe)}}const l=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],he=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let z=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:W,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),g=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:W,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),y})(),me=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:W,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(R,ue){1&R&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,N,1,1,"nz-avatar",1),i.YNc(2,w,1,0,"ng-content",2),i.qZA()),2&R&&(i.xp6(1),i.Q6J("ngIf",ue.nzSrc),i.xp6(1),i.Q6J("ngIf",!ue.nzSrc))},directives:[t.Dz,n.O5],encapsulation:2,changeDetection:0}),y})(),ye=(()=>{class y{constructor(R,ue){this.elementRef=R,this.renderer=ue,this.avatarStr="",this.renderer.addClass(R.nativeElement,"ant-list-item-meta")}set nzAvatar(R){R instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=R):this.avatarStr=R}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.SBq),i.Y36(i.Qsj))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(R,ue,De){if(1&R&&(i.Suo(De,g,5),i.Suo(De,z,5)),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.descriptionComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.titleComponent=xe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:u,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(R,ue){1&R&&(i.F$t(Q),i.YNc(0,se,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,G,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,S,5,2,"div",2)),2&R&&(i.Q6J("ngIf",ue.avatarStr),i.xp6(1),i.Q6J("ngIf",ue.avatarTpl),i.xp6(2),i.Q6J("ngIf",ue.nzTitle||ue.nzDescription||ue.descriptionComponent||ue.titleComponent))},directives:[me,z,g,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),y})(),Fe=(()=>{class y{constructor(){}}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:W,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),We=(()=>{class y{constructor(){}}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item-action"]],viewQuery:function(R,ue){if(1&R&&i.Gf(i.Rgc,5),2&R){let De;i.iGM(De=i.CRH())&&(ue.templateRef=De.first)}},exportAs:["nzListItemAction"],ngContentSelectors:W,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.YNc(0,$,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),y})(),Re=(()=>{class y{constructor(R,ue){this.ngZone=R,this.cdr=ue,this.nzActions=[],this.actions=[],this.destroy$=new c.xQ,this.inputActionChanges$=new c.xQ,this.contentChildrenChanges$=(0,k.P)(()=>this.nzListItemActions?(0,d.of)(null):this.ngZone.onStable.asObservable().pipe((0,L.q)(1),(0,F.w)(()=>this.contentChildrenChanges$))),(0,I.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,ne.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(De=>De.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.R0b),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(R,ue,De){if(1&R&&i.Suo(De,We,4),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.nzListItemActions=xe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:U,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(R,ue){1&R&&i.YNc(0,Te,3,2,"li",0),2&R&&i.Q6J("ngForOf",ue.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),y})(),Ge=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(R,ue){1&R&&i._UZ(0,"nz-embed-empty",0),2&R&&i.Q6J("nzComponentName","list")("specificContent",ue.nzNoResult)},directives:[b.gB],encapsulation:2,changeDetection:0}),y})(),ke=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:W,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),Je=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:W,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),qe=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:W,decls:1,vars:0,template:function(R,ue){1&R&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),y})(),rt=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275dir=i.lG2({type:y,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),y})(),Ze=(()=>{class y{constructor(R){this.directionality=R,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new E.X(this.nzItemLayout),this.destroy$=new c.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var R;this.dir=this.directionality.value,null===(R=this.directionality.change)||void 0===R||R.pipe((0,ne.R)(this.destroy$)).subscribe(ue=>{this.dir=ue})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(R){R.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(re.Is,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(R,ue,De){if(1&R&&(i.Suo(De,Je,5),i.Suo(De,qe,5),i.Suo(De,rt,5)),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.nzListFooterComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.nzListPaginationComponent=xe.first),i.iGM(xe=i.CRH())&&(ue.nzListLoadMoreDirective=xe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(R,ue){2&R&&i.ekj("ant-list-rtl","rtl"===ue.dir)("ant-list-vertical","vertical"===ue.nzItemLayout)("ant-list-lg","large"===ue.nzSize)("ant-list-sm","small"===ue.nzSize)("ant-list-split",ue.nzSplit)("ant-list-bordered",ue.nzBordered)("ant-list-loading",ue.nzLoading)("ant-list-something-after-last-item",ue.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:P,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(R,ue){if(1&R&&(i.F$t(Ie),i.YNc(0,Ce,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Oe,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,H,1,2,"div",3),i.YNc(7,ge,2,2,"div",4),i.YNc(8,de,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Le,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,$e,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,oe,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&R){const De=i.MAs(1);i.xp6(2),i.Q6J("ngIf",ue.nzHeader),i.xp6(2),i.Q6J("nzSpinning",ue.nzLoading),i.xp6(2),i.Q6J("ngIf",ue.nzLoading&&ue.nzDataSource&&0===ue.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",ue.nzGrid&&ue.nzDataSource)("ngIfElse",De),i.xp6(1),i.Q6J("ngIf",!ue.nzLoading&&ue.nzDataSource&&0===ue.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",ue.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",ue.nzLoadMore),i.xp6(2),i.Q6J("ngIf",ue.nzPagination)}},directives:[ke,j.W,Ge,Je,qe,n.sg,n.tP,n.O5,s.f,Y.SK,Y.t3],encapsulation:2,changeDetection:0}),(0,A.gn)([(0,_.yF)()],y.prototype,"nzBordered",void 0),(0,A.gn)([(0,_.yF)()],y.prototype,"nzLoading",void 0),(0,A.gn)([(0,_.yF)()],y.prototype,"nzSplit",void 0),y})(),ot=(()=>{class y{constructor(R,ue,De,xe){this.parentComp=De,this.cdr=xe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ue.addClass(R.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(R=>{this.itemLayout=R,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return y.\u0275fac=function(R){return new(R||y)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ze),i.Y36(i.sBO))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(R,ue,De){if(1&R&&i.Suo(De,Fe,5),2&R){let xe;i.iGM(xe=i.CRH())&&(ue.listItemExtraDirective=xe.first)}},hostVars:2,hostBindings:function(R,ue){2&R&&i.ekj("ant-list-item-no-flex",ue.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:he,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(R,ue){if(1&R&&(i.F$t(l),i.YNc(0,Z,2,1,"ng-template",null,0,i.W1O),i.YNc(2,be,3,1,"ng-template",null,1,i.W1O),i.YNc(4,tt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,He,4,4,"ng-template",null,3,i.W1O),i.YNc(8,v,6,4,"ng-container",4)),2&R){const De=i.MAs(7);i.xp6(8),i.Q6J("ngIf",ue.isVerticalAndExtra)("ngIfElse",De)}},directives:[Re,Fe,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,A.gn)([(0,_.yF)()],y.prototype,"nzNoFlex",void 0),y})(),st=(()=>{class y{}return y.\u0275fac=function(R){return new(R||y)},y.\u0275mod=i.oAB({type:y}),y.\u0275inj=i.cJS({imports:[[re.vT,n.ez,j.j,Y.Jb,t.Rt,s.T,b.Xo]]}),y})()},4219:(ve,q,o)=>{o.d(q,{hl:()=>Z,Cc:()=>P,wO:()=>Ye,YV:()=>pt,uA:()=>we,r9:()=>Pe,ip:()=>v});var i=o(655),t=o(5e3),n=o(8929),s=o(591),A=o(6787),_=o(6053),c=o(4850),k=o(1709),d=o(2198),I=o(7604),E=o(7138),L=o(5778),F=o(7625),ne=o(1059),b=o(7545),re=o(1721),j=o(325),Y=o(226),W=o(2845),N=o(6950),w=o(925),se=o(4832),G=o(9808),D=o(647),h=o(969),x=o(8076);const B=["nz-submenu-title",""];function S(l,he){if(1&l&&t._UZ(0,"i",4),2&l){const z=t.oxw();t.Q6J("nzType",z.nzIcon)}}function Q(l,he){if(1&l&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&l){const z=t.oxw();t.xp6(2),t.Oqu(z.nzTitle)}}function u(l,he){1&l&&t._UZ(0,"i",8)}function $(l,he){1&l&&t._UZ(0,"i",9)}function U(l,he){if(1&l&&(t.TgZ(0,"span",5),t.YNc(1,u,1,0,"i",6),t.YNc(2,$,1,0,"i",7),t.qZA()),2&l){const z=t.oxw();t.Q6J("ngSwitch",z.dir),t.xp6(1),t.Q6J("ngSwitchCase","rtl")}}function K(l,he){1&l&&t._UZ(0,"i",10)}const ze=["*"],Te=["nz-submenu-inline-child",""];function Se(l,he){}const Ae=["nz-submenu-none-inline-child",""];function ie(l,he){}const Ce=["nz-submenu",""];function pe(l,he){1&l&&t.Hsn(0,0,["*ngIf","!nzTitle"])}function Oe(l,he){if(1&l&&t._UZ(0,"div",6),2&l){const z=t.oxw(),g=t.MAs(7);t.Q6J("mode",z.mode)("nzOpen",z.nzOpen)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("menuClass",z.nzMenuClassName)("templateOutlet",g)}}function H(l,he){if(1&l){const z=t.EpF();t.TgZ(0,"div",8),t.NdJ("subMenuMouseState",function(me){return t.CHM(z),t.oxw(2).setMouseEnterState(me)}),t.qZA()}if(2&l){const z=t.oxw(2),g=t.MAs(7);t.Q6J("theme",z.theme)("mode",z.mode)("nzOpen",z.nzOpen)("position",z.position)("nzDisabled",z.nzDisabled)("isMenuInsideDropDown",z.isMenuInsideDropDown)("templateOutlet",g)("menuClass",z.nzMenuClassName)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)}}function fe(l,he){if(1&l){const z=t.EpF();t.YNc(0,H,1,10,"ng-template",7),t.NdJ("positionChange",function(me){return t.CHM(z),t.oxw().onPositionChange(me)})}if(2&l){const z=t.oxw(),g=t.MAs(1);t.Q6J("cdkConnectedOverlayPositions",z.overlayPositions)("cdkConnectedOverlayOrigin",g)("cdkConnectedOverlayWidth",z.triggerWidth)("cdkConnectedOverlayOpen",z.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function J(l,he){1&l&&t.Hsn(0,1)}const ge=[[["","title",""]],"*"],de=["[title]","*"],Me=["titleElement"],Le=["nz-menu-group",""];function $e(l,he){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const z=t.oxw();t.xp6(1),t.Oqu(z.nzTitle)}}function Be(l,he){1&l&&t.Hsn(0,1,["*ngIf","!nzTitle"])}const oe=["*",[["","title",""]]],Ie=["*","[title]"],P=new t.OlP("NzIsInDropDownMenuToken"),ce=new t.OlP("NzMenuServiceLocalToken");let Z=(()=>{class l{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(z){this.descendantMenuItemClick$.next(z)}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setMode(z){this.mode$.next(z)}setTheme(z){this.theme$.next(z)}setInlineIndent(z){this.inlineIndent$.next(z)}}return l.\u0275fac=function(z){return new(z||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),_e=(()=>{class l{constructor(z,g,me){this.nzHostSubmenuService=z,this.nzMenuService=g,this.isMenuInsideDropDown=me,this.mode$=this.nzMenuService.mode$.pipe((0,c.U)(Re=>"inline"===Re?"inline":"vertical"===Re||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ye=this.childMenuItemClick$.pipe((0,k.zg)(()=>this.mode$),(0,d.h)(Re=>"inline"!==Re||this.isMenuInsideDropDown),(0,I.h)(!1)),Fe=(0,A.T)(this.isMouseEnterTitleOrOverlay$,ye);(0,_.aj)([this.isChildSubMenuOpen$,Fe]).pipe((0,c.U)(([Re,Ge])=>Re||Ge),(0,E.e)(150),(0,L.x)(),(0,F.R)(this.destroy$)).pipe((0,L.x)()).subscribe(Re=>{this.setOpenStateWithoutDebounce(Re),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Re):this.nzMenuService.isChildSubMenuOpen$.next(Re)})}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setOpenStateWithoutDebounce(z){this.isCurrentSubMenuOpen$.next(z)}setMouseEnterTitleOrOverlayState(z){this.isMouseEnterTitleOrOverlay$.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.LFG(l,12),t.LFG(Z),t.LFG(P))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Pe=(()=>{class l{constructor(z,g,me,ye,Fe,We,Re,Ge){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=me,this.isMenuInsideDropDown=ye,this.directionality=Fe,this.routerLink=We,this.routerLinkWithHref=Re,this.router=Ge,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ge&&this.router.events.pipe((0,F.R)(this.destroy$),(0,d.h)(ke=>ke instanceof j.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(z){this.nzDisabled?(z.preventDefault(),z.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(z){this.nzSelected=z,this.selected$.next(z)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const z=this.hasActiveLinks();this.nzSelected!==z&&(this.nzSelected=z,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const z=this.isLinkActive(this.router);return this.routerLink&&z(this.routerLink)||this.routerLinkWithHref&&z(this.routerLinkWithHref)||this.listOfRouterLink.some(z)||this.listOfRouterLinkWithHref.some(z)}isLinkActive(z){return g=>z.isActive(g.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var z;(0,_.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,F.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,F.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,F.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(z){z.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Z),t.Y36(t.sBO),t.Y36(_e,8),t.Y36(P),t.Y36(Y.Is,8),t.Y36(j.rH,8),t.Y36(j.yS,8),t.Y36(j.F0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-item",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,j.rH,5),t.Suo(me,j.yS,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfRouterLink=ye),t.iGM(ye=t.CRH())&&(g.listOfRouterLinkWithHref=ye)}},hostVars:20,hostBindings:function(z,g){1&z&&t.NdJ("click",function(ye){return g.clickMenuItem(ye)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.nzPaddingLeft||g.inlinePaddingLeft,"px")("padding-right","rtl"===g.dir?g.nzPaddingLeft||g.inlinePaddingLeft:null,"px"),t.ekj("ant-dropdown-menu-item",g.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",g.isMenuInsideDropDown&&g.nzSelected)("ant-dropdown-menu-item-danger",g.isMenuInsideDropDown&&g.nzDanger)("ant-dropdown-menu-item-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-item",!g.isMenuInsideDropDown)("ant-menu-item-selected",!g.isMenuInsideDropDown&&g.nzSelected)("ant-menu-item-danger",!g.isMenuInsideDropDown&&g.nzDanger)("ant-menu-item-disabled",!g.isMenuInsideDropDown&&g.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[t.TTD]}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDisabled",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzSelected",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDanger",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzMatchRouter",void 0),l})(),be=(()=>{class l{constructor(z,g){this.cdr=z,this.directionality=g,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new t.vpe,this.subMenuMouseState=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var z;this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.sBO),t.Y36(Y.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(z,g){1&z&&t.NdJ("click",function(){return g.clickTitle()})("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.paddingLeft,"px")("padding-right","rtl"===g.dir?g.paddingLeft:null,"px"),t.ekj("ant-dropdown-menu-submenu-title",g.isMenuInsideDropDown)("ant-menu-submenu-title",!g.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:B,ngContentSelectors:ze,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(z,g){if(1&z&&(t.F$t(),t.YNc(0,S,1,1,"i",0),t.YNc(1,Q,3,1,"ng-container",1),t.Hsn(2),t.YNc(3,U,3,2,"span",2),t.YNc(4,K,1,0,"ng-template",null,3,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("ngIf",g.nzIcon),t.xp6(1),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(2),t.Q6J("ngIf",g.isMenuInsideDropDown)("ngIfElse",me)}},directives:[G.O5,D.Ls,h.f,G.RF,G.n9,G.ED],encapsulation:2,changeDetection:0}),l})(),tt=(()=>{class l{constructor(z,g,me){this.elementRef=z,this.renderer=g,this.directionality=me,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:me,menuClass:ye}=z;(g||me)&&this.calcMotionState(),ye&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Fe=>!!Fe).forEach(Fe=>{this.renderer.removeClass(this.elementRef.nativeElement,Fe)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Fe=>!!Fe).forEach(Fe=>{this.renderer.addClass(this.elementRef.nativeElement,Fe)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Y.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(z,g){2&z&&(t.d8E("@collapseMotion",g.expandState),t.ekj("ant-menu-rtl","rtl"===g.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[t.TTD],attrs:Te,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&t.YNc(0,Se,0,0,"ng-template",0),2&z&&t.Q6J("ngTemplateOutlet",g.templateOutlet)},directives:[G.tP],encapsulation:2,data:{animation:[x.J_]},changeDetection:0}),l})(),nt=(()=>{class l{constructor(z){this.directionality=z,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new t.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:me}=z;(g||me)&&this.calcMotionState()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Y.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(z,g){1&z&&t.NdJ("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.d8E("@slideMotion",g.expandState)("@zoomBigMotion",g.expandState),t.ekj("ant-menu-light","light"===g.theme)("ant-menu-dark","dark"===g.theme)("ant-menu-submenu-placement-bottom","horizontal"===g.mode)("ant-menu-submenu-placement-right","vertical"===g.mode&&"right"===g.position)("ant-menu-submenu-placement-left","vertical"===g.mode&&"left"===g.position)("ant-menu-submenu-rtl","rtl"===g.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[t.TTD],attrs:Ae,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&(t.TgZ(0,"div",0),t.YNc(1,ie,0,0,"ng-template",1),t.qZA()),2&z&&(t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-menu",!g.isMenuInsideDropDown)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown)("ant-menu-vertical",!g.isMenuInsideDropDown)("ant-dropdown-menu-sub",g.isMenuInsideDropDown)("ant-menu-sub",!g.isMenuInsideDropDown)("ant-menu-rtl","rtl"===g.dir),t.Q6J("ngClass",g.menuClass),t.xp6(1),t.Q6J("ngTemplateOutlet",g.templateOutlet))},directives:[G.mk,G.tP],encapsulation:2,data:{animation:[x.$C,x.mF]},changeDetection:0}),l})();const Ke=[N.yW.rightTop,N.yW.right,N.yW.rightBottom,N.yW.leftTop,N.yW.left,N.yW.leftBottom],Ve=[N.yW.bottomLeft];let C=(()=>{class l{constructor(z,g,me,ye,Fe,We,Re){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=me,this.platform=ye,this.isMenuInsideDropDown=Fe,this.directionality=We,this.noAnimation=Re,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new t.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ke,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(z){this.nzSubmenuService.setOpenStateWithoutDebounce(z)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(z){this.isActive=z,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(z)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(z){const g=(0,N.d_)(z);"rightTop"===g||"rightBottom"===g||"right"===g?this.position="right":("leftTop"===g||"leftBottom"===g||"left"===g)&&(this.position="left")}ngOnInit(){var z;this.nzMenuService.theme$.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.theme=g,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.mode=g,"horizontal"===g?this.overlayPositions=Ve:"vertical"===g&&(this.overlayPositions=Ke),this.cdr.markForCheck()}),(0,_.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,F.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.isActive=g,g!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=g,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const z=this.listOfNzMenuItemDirective,g=z.changes,me=(0,A.T)(g,...z.map(ye=>ye.selected$));g.pipe((0,ne.O)(z),(0,b.w)(()=>me),(0,ne.O)(!0),(0,c.U)(()=>z.some(ye=>ye.nzSelected)),(0,F.R)(this.destroy$)).subscribe(ye=>{this.isSelected=ye,this.cdr.markForCheck()})}ngOnChanges(z){const{nzOpen:g}=z;g&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Z),t.Y36(t.sBO),t.Y36(_e),t.Y36(w.t4),t.Y36(P),t.Y36(Y.Is,8),t.Y36(se.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,l,5),t.Suo(me,Pe,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfNzSubMenuComponent=ye),t.iGM(ye=t.CRH())&&(g.listOfNzMenuItemDirective=ye)}},viewQuery:function(z,g){if(1&z&&t.Gf(W.xu,7,t.SBq),2&z){let me;t.iGM(me=t.CRH())&&(g.cdkOverlayOrigin=me.first)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu-submenu",g.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-dropdown-menu-submenu-open",g.isMenuInsideDropDown&&g.nzOpen)("ant-dropdown-menu-submenu-selected",g.isMenuInsideDropDown&&g.isSelected)("ant-dropdown-menu-submenu-vertical",g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-dropdown-menu-submenu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-dropdown-menu-submenu-inline",g.isMenuInsideDropDown&&"inline"===g.mode)("ant-dropdown-menu-submenu-active",g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu",!g.isMenuInsideDropDown)("ant-menu-submenu-disabled",!g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-submenu-open",!g.isMenuInsideDropDown&&g.nzOpen)("ant-menu-submenu-selected",!g.isMenuInsideDropDown&&g.isSelected)("ant-menu-submenu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-menu-submenu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-menu-submenu-inline",!g.isMenuInsideDropDown&&"inline"===g.mode)("ant-menu-submenu-active",!g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu-rtl","rtl"===g.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[t._Bn([_e]),t.TTD],attrs:Ce,ngContentSelectors:de,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(z,g){if(1&z&&(t.F$t(ge),t.TgZ(0,"div",0,1),t.NdJ("subMenuMouseState",function(ye){return g.setMouseEnterState(ye)})("toggleSubMenu",function(){return g.toggleSubMenu()}),t.YNc(2,pe,1,0,"ng-content",2),t.qZA(),t.YNc(3,Oe,1,6,"div",3),t.YNc(4,fe,1,5,"ng-template",null,4,t.W1O),t.YNc(6,J,1,0,"ng-template",null,5,t.W1O)),2&z){const me=t.MAs(5);t.Q6J("nzIcon",g.nzIcon)("nzTitle",g.nzTitle)("mode",g.mode)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("paddingLeft",g.nzPaddingLeft||g.inlinePaddingLeft),t.xp6(2),t.Q6J("ngIf",!g.nzTitle),t.xp6(1),t.Q6J("ngIf","inline"===g.mode)("ngIfElse",me)}},directives:[be,tt,nt,W.xu,G.O5,se.P,W.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzOpen",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzDisabled",void 0),l})();function He(l,he){return l||he}function Xe(l){return l||!1}let Ye=(()=>{class l{constructor(z,g,me,ye){this.nzMenuService=z,this.isMenuInsideDropDown=g,this.cdr=me,this.directionality=ye,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new t.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(z){this.nzInlineCollapsed=z,this.inlineCollapsed$.next(z)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(z=>z.nzOpen),this.listOfNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var z;(0,_.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,F.R)(this.destroy$)).subscribe(([g,me])=>{this.actualMode=g?"vertical":me,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.nzClick.emit(g),this.nzSelectable&&!g.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(me=>me.setSelectedState(me===g))}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,F.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,F.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(z){const{nzInlineCollapsed:g,nzInlineIndent:me,nzTheme:ye,nzMode:Fe}=z;g&&this.inlineCollapsed$.next(this.nzInlineCollapsed),me&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ye&&this.nzMenuService.setTheme(this.nzTheme),Fe&&(this.mode$.next(this.nzMode),!z.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(We=>We.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Z),t.Y36(P),t.Y36(t.sBO),t.Y36(Y.Is,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu",""]],contentQueries:function(z,g,me){if(1&z&&(t.Suo(me,Pe,5),t.Suo(me,C,5)),2&z){let ye;t.iGM(ye=t.CRH())&&(g.listOfNzMenuItemDirective=ye),t.iGM(ye=t.CRH())&&(g.listOfNzSubMenuComponent=ye)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-dropdown-menu-root",g.isMenuInsideDropDown)("ant-dropdown-menu-light",g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-dropdown-menu-dark",g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-dropdown-menu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-dropdown-menu-inline",g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-dropdown-menu-inline-collapsed",g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu",!g.isMenuInsideDropDown)("ant-menu-root",!g.isMenuInsideDropDown)("ant-menu-light",!g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-menu-dark",!g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-menu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-menu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-menu-inline",!g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-menu-inline-collapsed",!g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu-rtl","rtl"===g.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[t._Bn([{provide:ce,useClass:Z},{provide:Z,useFactory:He,deps:[[new t.tp0,new t.FiY,Z],ce]},{provide:P,useFactory:Xe,deps:[[new t.tp0,new t.FiY,P]]}]),t.TTD]}),(0,i.gn)([(0,re.yF)()],l.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,re.yF)()],l.prototype,"nzSelectable",void 0),l})();function lt(l){return l||!1}let we=(()=>{class l{constructor(z,g,me){this.elementRef=z,this.renderer=g,this.isMenuInsideDropDown=me,this.renderer.addClass(z.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const z=this.titleElement.nativeElement.nextElementSibling;z&&this.renderer.addClass(z,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(P))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-menu-group",""]],viewQuery:function(z,g){if(1&z&&t.Gf(Me,5),2&z){let me;t.iGM(me=t.CRH())&&(g.titleElement=me.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[t._Bn([{provide:P,useFactory:lt,deps:[[new t.tp0,new t.FiY,P]]}])],attrs:Le,ngContentSelectors:Ie,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(z,g){1&z&&(t.F$t(oe),t.TgZ(0,"div",null,0),t.YNc(2,$e,2,1,"ng-container",1),t.YNc(3,Be,1,0,"ng-content",2),t.qZA(),t.Hsn(4)),2&z&&(t.ekj("ant-menu-item-group-title",!g.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",g.isMenuInsideDropDown),t.xp6(2),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(1),t.Q6J("ngIf",!g.nzTitle))},directives:[h.f,G.O5],encapsulation:2,changeDetection:0}),l})(),pt=(()=>{class l{constructor(z,g){this.elementRef=z,this.renderer=g,this.renderer.addClass(z.nativeElement,"ant-dropdown-menu-item-divider")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(z){return new(z||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[Y.vT,G.ez,w.ud,W.U8,D.PV,se.g,h.T]]}),l})()},3610:(ve,q,o)=>{o.d(q,{lU:()=>Y,$6:()=>N});var i=o(655),t=o(5e3),n=o(8076),s=o(9439),A=o(1721),_=o(404),c=o(4832),k=o(226),d=o(2845),I=o(6950),E=o(9808),L=o(969);function F(w,se){if(1&w&&(t.ynx(0),t._uU(1),t.BQk()),2&w){const G=t.oxw(3);t.xp6(1),t.Oqu(G.nzTitle)}}function ne(w,se){if(1&w&&(t.TgZ(0,"div",10),t.YNc(1,F,2,1,"ng-container",9),t.qZA()),2&w){const G=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",G.nzTitle)}}function b(w,se){if(1&w&&(t.ynx(0),t._uU(1),t.BQk()),2&w){const G=t.oxw(2);t.xp6(1),t.Oqu(G.nzContent)}}function re(w,se){if(1&w&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,ne,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,b,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&w){const G=t.oxw();t.ekj("ant-popover-rtl","rtl"===G.dir),t.Q6J("ngClass",G._classMap)("ngStyle",G.nzOverlayStyle)("@.disabled",null==G.noAnimation?null:G.noAnimation.nzNoAnimation)("nzNoAnimation",null==G.noAnimation?null:G.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",G.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",G.nzContent)}}let Y=(()=>{class w extends _.Mg{constructor(G,D,h,x,B,S){super(G,D,h,x,B,S),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(W)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return w.\u0275fac=function(G){return new(G||w)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(c.P,9),t.Y36(s.jY))},w.\u0275dir=t.lG2({type:w,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(G,D){2&G&&t.ekj("ant-popover-open",D.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,i.gn)([(0,A.yF)()],w.prototype,"arrowPointAtCenter",void 0),(0,i.gn)([(0,s.oS)()],w.prototype,"nzPopoverBackdrop",void 0),w})(),W=(()=>{class w extends _.XK{constructor(G,D,h){super(G,D,h),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,_.pu)(this.nzTitle)&&(0,_.pu)(this.nzContent)}}return w.\u0275fac=function(G){return new(G||w)(t.Y36(t.sBO),t.Y36(k.Is,8),t.Y36(c.P,9))},w.\u0275cmp=t.Xpm({type:w,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(G,D){1&G&&(t.YNc(0,re,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(x){return D.onClickOutside(x)})("detach",function(){return D.hide()})("positionChange",function(x){return D.onPositionChange(x)})),2&G&&t.Q6J("cdkConnectedOverlayHasBackdrop",D.hasBackdrop)("cdkConnectedOverlayOrigin",D.origin)("cdkConnectedOverlayPositions",D._positions)("cdkConnectedOverlayOpen",D._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",D.nzArrowPointAtCenter)},directives:[d.pI,I.hQ,E.mk,E.PC,c.P,E.O5,L.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),w})(),N=(()=>{class w{}return w.\u0275fac=function(G){return new(G||w)},w.\u0275mod=t.oAB({type:w}),w.\u0275inj=t.cJS({imports:[[k.vT,E.ez,d.U8,L.T,I.e4,c.g,_.cg]]}),w})()},8144:(ve,q,o)=>{o.d(q,{NU:()=>j,$1:()=>ne,zf:()=>Y});var i=o(226),t=o(9808),n=o(5e3),s=o(655),A=o(8929),_=o(7625),c=o(9439),k=o(1721);function d(W,N){}const I=function(W){return{$implicit:W}};function E(W,N){if(1&W&&(n.TgZ(0,"span",4),n.YNc(1,d,0,0,"ng-template",5),n.qZA()),2&W){const w=n.oxw(),se=w.last,G=w.index,D=n.oxw();n.Udp("margin-bottom","vertical"===D.nzDirection?se?null:D.spaceSize:null,"px")("margin-right","horizontal"===D.nzDirection?se?null:D.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",D.nzSplit)("ngTemplateOutletContext",n.VKq(6,I,G))}}function L(W,N){if(1&W&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,E,2,8,"span",3)),2&W){const w=N.$implicit,se=N.last,G=n.oxw();n.Udp("margin-bottom","vertical"===G.nzDirection?se?null:G.spaceSize:null,"px")("margin-right","horizontal"===G.nzDirection?se?null:G.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",w),n.xp6(1),n.Q6J("ngIf",G.nzSplit&&!se)}}const F=["*"];let ne=(()=>{class W{constructor(){}}return W.\u0275fac=function(w){return new(w||W)},W.\u0275dir=n.lG2({type:W,selectors:[["","nzSpaceItem",""]]}),W})();const re={small:8,middle:16,large:24};let j=(()=>{class W{constructor(w,se){this.nzConfigService=w,this.cdr=se,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=re.small,this.destroy$=new A.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?re[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return W.\u0275fac=function(w){return new(w||W)(n.Y36(c.jY),n.Y36(n.sBO))},W.\u0275cmp=n.Xpm({type:W,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(w,se,G){if(1&w&&n.Suo(G,ne,4,n.Rgc),2&w){let D;n.iGM(D=n.CRH())&&(se.items=D)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(w,se){2&w&&(n.Udp("flex-wrap",se.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===se.nzDirection)("ant-space-vertical","vertical"===se.nzDirection)("ant-space-align-start","start"===se.mergedAlign)("ant-space-align-end","end"===se.mergedAlign)("ant-space-align-center","center"===se.mergedAlign)("ant-space-align-baseline","baseline"===se.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:F,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(w,se){1&w&&(n.F$t(),n.Hsn(0),n.YNc(1,L,3,6,"ng-template",0)),2&w&&(n.xp6(1),n.Q6J("ngForOf",se.items))},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,k.yF)()],W.prototype,"nzWrap",void 0),(0,s.gn)([(0,c.oS)()],W.prototype,"nzSize",void 0),W})(),Y=(()=>{class W{}return W.\u0275fac=function(w){return new(w||W)},W.\u0275mod=n.oAB({type:W}),W.\u0275inj=n.cJS({imports:[[i.vT,t.ez]]}),W})()},7525:(ve,q,o)=>{o.d(q,{W:()=>B,j:()=>S});var i=o(655),t=o(5e3),n=o(8929),s=o(591),A=o(839),_=o(8723),c=o(1177);class d{constructor(u){this.durationSelector=u}call(u,$){return $.subscribe(new I(u,this.durationSelector))}}class I extends c.Ds{constructor(u,$){super(u),this.durationSelector=$,this.hasValue=!1}_next(u){try{const $=this.durationSelector.call(this,u);$&&this._tryNext(u,$)}catch($){this.destination.error($)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(u,$){let U=this.durationSubscription;this.value=u,this.hasValue=!0,U&&(U.unsubscribe(),this.remove(U)),U=(0,c.ft)($,new c.IY(this)),U&&!U.closed&&this.add(this.durationSubscription=U)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const u=this.value,$=this.durationSubscription;$&&(this.durationSubscription=void 0,$.unsubscribe(),this.remove($)),this.value=void 0,this.hasValue=!1,super._next(u)}}}var E=o(1059),L=o(5778),F=o(7545),ne=o(7625),b=o(9439),re=o(1721),j=o(226),Y=o(9808),W=o(7144);function N(Q,u){1&Q&&(t.TgZ(0,"span",3),t._UZ(1,"i",4),t._UZ(2,"i",4),t._UZ(3,"i",4),t._UZ(4,"i",4),t.qZA())}function w(Q,u){}function se(Q,u){if(1&Q&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&Q){const $=t.oxw(2);t.xp6(1),t.Oqu($.nzTip)}}function G(Q,u){if(1&Q&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.YNc(2,w,0,0,"ng-template",6),t.YNc(3,se,2,1,"div",7),t.qZA(),t.qZA()),2&Q){const $=t.oxw(),U=t.MAs(1);t.xp6(1),t.ekj("ant-spin-rtl","rtl"===$.dir)("ant-spin-spinning",$.isLoading)("ant-spin-lg","large"===$.nzSize)("ant-spin-sm","small"===$.nzSize)("ant-spin-show-text",$.nzTip),t.xp6(1),t.Q6J("ngTemplateOutlet",$.nzIndicator||U),t.xp6(1),t.Q6J("ngIf",$.nzTip)}}function D(Q,u){if(1&Q&&(t.TgZ(0,"div",9),t.Hsn(1),t.qZA()),2&Q){const $=t.oxw();t.ekj("ant-spin-blur",$.isLoading)}}const h=["*"],x="spin";let B=(()=>{class Q{constructor($,U,K){this.nzConfigService=$,this.cdr=U,this.directionality=K,this._nzModuleName=x,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new A.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var $;this.delay$.pipe((0,E.O)(this.nzDelay),(0,L.x)(),(0,F.w)(K=>0===K?this.spinning$:this.spinning$.pipe(function k(Q){return u=>u.lift(new d(Q))}(ze=>(0,_.H)(ze?K:0)))),(0,ne.R)(this.destroy$)).subscribe(K=>{this.isLoading=K,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(x).pipe((0,ne.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===($=this.directionality.change)||void 0===$||$.pipe((0,ne.R)(this.destroy$)).subscribe(K=>{this.dir=K,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges($){const{nzSpinning:U,nzDelay:K}=$;U&&this.spinning$.next(this.nzSpinning),K&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Q.\u0275fac=function($){return new($||Q)(t.Y36(b.jY),t.Y36(t.sBO),t.Y36(j.Is,8))},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["nz-spin"]],hostVars:2,hostBindings:function($,U){2&$&&t.ekj("ant-spin-nested-loading",!U.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[t.TTD],ngContentSelectors:h,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function($,U){1&$&&(t.F$t(),t.YNc(0,N,5,0,"ng-template",null,0,t.W1O),t.YNc(2,G,4,12,"div",1),t.YNc(3,D,2,2,"div",2)),2&$&&(t.xp6(2),t.Q6J("ngIf",U.isLoading),t.xp6(1),t.Q6J("ngIf",!U.nzSimple))},directives:[Y.O5,Y.tP],encapsulation:2}),(0,i.gn)([(0,b.oS)()],Q.prototype,"nzIndicator",void 0),(0,i.gn)([(0,re.Rn)()],Q.prototype,"nzDelay",void 0),(0,i.gn)([(0,re.yF)()],Q.prototype,"nzSimple",void 0),(0,i.gn)([(0,re.yF)()],Q.prototype,"nzSpinning",void 0),Q})(),S=(()=>{class Q{}return Q.\u0275fac=function($){return new($||Q)},Q.\u0275mod=t.oAB({type:Q}),Q.\u0275inj=t.cJS({imports:[[j.vT,Y.ez,W.Q8]]}),Q})()},8481:(ve,q,o)=>{o.d(q,{j:()=>F,X:()=>ne});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),A=o(8693),_=o(1721),c=o(226),k=o(9808),d=o(647),I=o(3075);function E(b,re){if(1&b){const j=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(W){return t.CHM(j),t.oxw().closeTag(W)}),t.qZA()}}const L=["*"];let F=(()=>{class b{constructor(j,Y,W,N){this.cdr=j,this.renderer=Y,this.elementRef=W,this.directionality=N,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(j){this.nzOnClose.emit(j),j.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const j=this.elementRef.nativeElement,Y=new RegExp(`(ant-tag-(?:${[...A.uf,...A.Bh].join("|")}))`,"g"),W=j.classList.toString(),N=[];let w=Y.exec(W);for(;null!==w;)N.push(w[1]),w=Y.exec(W);j.classList.remove(...N)}setPresetColor(){const j=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,A.o2)(this.nzColor)||(0,A.M8)(this.nzColor)),this.isPresetColor&&j.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var j;null===(j=this.directionality.change)||void 0===j||j.pipe((0,s.R)(this.destroy$)).subscribe(Y=>{this.dir=Y,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(j){const{nzColor:Y}=j;Y&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(j){return new(j||b)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c.Is,8))},b.\u0275cmp=t.Xpm({type:b,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(j,Y){1&j&&t.NdJ("click",function(){return Y.updateCheckedStatus()}),2&j&&(t.Udp("background-color",Y.isPresetColor?"":Y.nzColor),t.ekj("ant-tag-has-color",Y.nzColor&&!Y.isPresetColor)("ant-tag-checkable","checkable"===Y.nzMode)("ant-tag-checkable-checked",Y.nzChecked)("ant-tag-rtl","rtl"===Y.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:L,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(j,Y){1&j&&(t.F$t(),t.Hsn(0),t.YNc(1,E,1,0,"i",0)),2&j&&(t.xp6(1),t.Q6J("ngIf","closeable"===Y.nzMode))},directives:[k.O5,d.Ls],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.yF)()],b.prototype,"nzChecked",void 0),b})(),ne=(()=>{class b{}return b.\u0275fac=function(j){return new(j||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[[c.vT,k.ez,I.u5,d.PV]]}),b})()}}]);