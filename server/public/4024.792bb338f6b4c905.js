"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{3193:(Te,te,o)=>{o.d(te,{H:()=>xe});var i=o(6654),t=o(5e3),n=o(9808),s=o(325),N=o(8481),_=o(3610),c=o(4850),J=o(712),u=o(7484),I=o(647),O=o(3098),Y=o(1894),$=o(8144),ne=o(6949);function R(se,ye){if(1&se&&(t._UZ(0,"i",11),t._uU(1)),2&se){const q=t.oxw().ngIf;t.xp6(1),t.hij(" ",q.officialName," ")}}function le(se,ye){if(1&se&&(t.TgZ(0,"nz-tag"),t._uU(1),t.qZA()),2&se){const q=ye.$implicit;t.xp6(1),t.Oqu(q)}}function H(se,ye){if(1&se&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,le,2,1,"nz-tag",13),t.qZA()),2&se){const q=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",q.geneAliases)}}function Z(se,ye){if(1&se&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&se){const q=t.oxw().ngIf;t.MGl("routerLink","/genes/",q.id,"/flags"),t.xp6(3),t.hij(" Flags (",q.flags.totalCount,") ")}}function w(se,ye){if(1&se&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&se){const q=t.oxw().ngIf;t.MGl("routerLink","/genes/",q.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",q.revisions.totalCount,") ")}}function A(se,ye){if(1&se&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&se){const q=t.oxw().ngIf;t.MGl("routerLink","/genes/",q.id,"/comments"),t.xp6(3),t.hij(" Comments (",q.comments.totalCount,") ")}}function b(se,ye){if(1&se&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,R,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,H,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,Z,4,2,"a",10),t.YNc(12,w,4,2,"a",10),t.YNc(13,A,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&se){const q=ye.ngIf,me=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",me),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",q.geneAliases.length>0),t.xp6(2),t.hij(" ",q.variants.totalCount," ")}}let ae=(()=>{class se{constructor(q){this.gql=q}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:q})=>q.gene))}}return se.\u0275fac=function(q){return new(q||se)(t.Y36(J.rJ8))},se.\u0275cmp=t.Xpm({type:se,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(q,me){1&q&&(t.TgZ(0,"div",0),t.YNc(1,b,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&q&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,me.gene$)))},directives:[n.O5,u.bd,I.Ls,O.R7,O.uj,n.sg,N.j,Y.SK,Y.t3,$.NU,$.$1,s.yS],pipes:[ne.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),se})();function F(se,ye){}function E(se,ye){if(1&se&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,F,0,0,"ng-template",6),t.qZA(),t.BQk()),2&se){const q=t.oxw(),me=t.MAs(2);t.xp6(1),t.Q6J("routerLink",q.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",me)}}function h(se,ye){}function M(se,ye){if(1&se){const q=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(ie){return t.CHM(q),t.oxw(2).itemClosed(ie)}),t.YNc(1,h,0,0,"ng-template",6),t.qZA()}if(2&se){t.oxw();const q=t.MAs(2),me=t.oxw(),ie=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",me.onCloseClicked?0:.5)("nzPopoverContent",q)("nzMode",me.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function P(se,ye){if(1&se&&t._UZ(0,"cvc-gene-popover",10),2&se){const q=t.oxw(2);t.Q6J("geneId",q.gene.id)}}function L(se,ye){if(1&se&&(t.YNc(0,M,2,4,"nz-tag",7),t.YNc(1,P,1,1,"ng-template",null,8,t.W1O)),2&se){const q=t.oxw(),me=t.MAs(4);t.Q6J("ngIf",q.enablePopover)("ngIfElse",me)}}function B(se,ye){}function p(se,ye){if(1&se){const q=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(ie){return t.CHM(q),t.oxw().itemClosed(ie)}),t.YNc(1,B,0,0,"ng-template",6),t.qZA()}if(2&se){const q=t.oxw(),me=t.MAs(8);t.Q6J("nzMode",q.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",me)}}function K(se,ye){}function k(se,ye){if(1&se&&t.YNc(0,K,0,0,"ng-template",6),2&se){t.oxw();const q=t.MAs(2);t.Q6J("ngTemplateOutlet",q)}}function X(se,ye){if(1&se&&(t._UZ(0,"i",12),t._uU(1)),2&se){const q=t.oxw();t.xp6(1),t.hij(" ",q.gene.name,"\n")}}let xe=(()=>{class se extends i.a{constructor(){super(),this.enablePopover=!0}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return se.\u0275fac=function(q){return new(q||se)},se.\u0275cmp=t.Xpm({type:se,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"]],template:function(q,me){if(1&q&&(t.YNc(0,E,3,2,"ng-container",0),t.YNc(1,L,3,2,"ng-template",null,1,t.W1O),t.YNc(3,p,2,2,"ng-template",null,2,t.W1O),t.YNc(5,k,1,1,"ng-template",null,3,t.W1O),t.YNc(7,X,2,1,"ng-template",null,4,t.W1O)),2&q){const ie=t.MAs(6);t.Q6J("ngIf",me.linked)("ngIfElse",ie)}},directives:[n.O5,s.yS,n.tP,N.j,_.lU,ae,I.Ls],styles:[""]}),se})()},3309:(Te,te,o)=>{o.d(te,{U:()=>$});var i=o(9808),t=o(325),n=o(8481),s=o(647),N=o(3610),_=o(7484),c=o(1894),J=o(3098),u=o(8144),I=o(6949),O=o(5e3);let Y=(()=>{class ne{}return ne.\u0275fac=function(le){return new(le||ne)},ne.\u0275mod=O.oAB({type:ne}),ne.\u0275inj=O.cJS({imports:[[i.ez,t.Bz,I.WG,_.vh,c.Jb,J.q6,n.X,s.PV,u.zf]]}),ne})(),$=(()=>{class ne{}return ne.\u0275fac=function(le){return new(le||ne)},ne.\u0275mod=O.oAB({type:ne}),ne.\u0275inj=O.cJS({imports:[[i.ez,t.Bz,n.X,N.$6,s.PV,Y]]}),ne})()},1912:(Te,te,o)=>{o.d(te,{s:()=>ne});var i=o(5e3),t=o(6042),n=o(2643),s=o(2683),N=o(3640),c=o(2160),J=o(3762),u=o(647);let I=(()=>{class R{constructor(H){this.cookies=H,this.location=function _(R){return encodeURIComponent(R).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return R.\u0275fac=function(H){return new(H||R)(i.Y36(c.N))},R.\u0275cmp=i.Xpm({type:R,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(H,Z){1&H&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&H&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",Z.location,"",i.LSH),i.xp6(1),i.s9C("value",Z.xsrfToken))},directives:[J.n_,J.AA,t.ix,n.dQ,s.w,u.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),R})();function O(R,le){1&R&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function Y(R,le){1&R&&i._uU(0," Sign In / Sign Up\n")}function $(R,le){if(1&R){const H=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(H),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let ne=(()=>{class R{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return R.\u0275fac=function(H){return new(H||R)},R.\u0275cmp=i.Xpm({type:R,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(H,Z){if(1&H&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return Z.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In / Sign Up"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(A){return Z.authVisible=A})("nzOnCancel",function(){return Z.handleCancel()}),i.YNc(4,O,4,0,"ng-container",2),i.qZA(),i.YNc(5,Y,1,0,"ng-template",null,3,i.W1O),i.YNc(7,$,2,0,"ng-template",null,4,i.W1O)),2&H){const w=i.MAs(6),A=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",Z.authVisible)("nzTitle",w)("nzFooter",A)}},directives:[t.ix,n.dQ,s.w,N.du,N.Hf,I],styles:["[_nghost-%COMP%]{display:inline-block}"]}),R})()},1844:(Te,te,o)=>{o.d(te,{B:()=>J});var i=o(9808),t=o(6042),n=o(3640),s=o(3762),N=o(647),_=o(5e3);let c=(()=>{class u{}return u.\u0275fac=function(O){return new(O||u)},u.\u0275mod=_.oAB({type:u}),u.\u0275inj=_.cJS({imports:[[i.ez,N.PV,s.Ph,t.sL]]}),u})(),J=(()=>{class u{}return u.\u0275fac=function(O){return new(O||u)},u.\u0275mod=_.oAB({type:u}),u.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Qp,c]]}),u})()},7881:(Te,te,o)=>{o.d(te,{L:()=>_});var i=o(5e3),t=o(9808),n=o(6699);function s(c,J){if(1&c&&i._UZ(0,"nz-avatar",2),2&c){const u=i.oxw();i.Q6J("nzSrc",u.user.profileImagePath)("nzShape",u.shape?u.shape:"circle")("nzSize",u.size)}}function N(c,J){if(1&c&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&c){const u=i.oxw();i.Q6J("nzSize",u.size)("nzText",i.lcZ(1,2,u.user.displayName.charAt(0)))}}let _=(()=>{class c{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(u,I){if(1&u&&(i.YNc(0,s,1,3,"nz-avatar",0),i.YNc(1,N,2,4,"ng-template",null,1,i.W1O)),2&u){const O=i.MAs(2);i.Q6J("ngIf",I.user.profileImagePath)("ngIfElse",O)}},directives:[t.O5,n.Dz],pipes:[t.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),c})()},5473:(Te,te,o)=>{o.d(te,{H:()=>s});var i=o(9808),t=o(6699),n=o(5e3);let s=(()=>{class N{}return N.\u0275fac=function(c){return new(c||N)},N.\u0275mod=n.oAB({type:N}),N.\u0275inj=n.cJS({imports:[[i.ez,t.Rt]]}),N})()},8926:(Te,te,o)=>{o.d(te,{A:()=>n});var i=o(5e3),t=o(2313);let n=(()=>{class s{constructor(_){this.sanitizer=_}transform(_,c){if(!c||""==c)return _;const J=new RegExp(c,"gi"),u=_.match(J);if(!u)return _;let I=_.replace(J,`<span class='typeahead-match'>${u[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(I)}}return s.\u0275fac=function(_){return new(_||s)(i.Y36(t.H7,16))},s.\u0275pipe=i.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},9444:(Te,te,o)=>{o.d(te,{s:()=>s});var i=o(9808),t=o(7742),n=o(5e3);let s=(()=>{class N{}return N.\u0275fac=function(c){return new(c||N)},N.\u0275mod=n.oAB({type:N}),N.\u0275inj=n.cJS({providers:[t.l],imports:[[i.ez]]}),N})()},7742:(Te,te,o)=>{o.d(te,{l:()=>n});var i=o(6530),t=o(5e3);let n=(()=>{class s{transform(_){return _?(0,i.c)(_):""}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275pipe=t.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},9350:(Te,te,o)=>{o.d(te,{a:()=>u});var i=o(4850),t=o(5154),n=o(373),s=o(1059),N=o(712),_=o(5e3),c=o(520);const J={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let u=(()=>{class I{constructor(Y,$){function ne(A){return!(!A||A.role!==N.i44.Admin)}function R(A){return!(!A||A.role!==N.i44.Editor&&A.role!==N.i44.Admin)}function le(A){return!(!A||A.role!==N.i44.Curator)}function H(A){return!(!A||A.role!==N.i44.Curator&&A.role!==N.i44.Editor&&A.role!==N.i44.Admin)}function Z(A){var b,ae;return!(!A||A.role!==N.i44.Editor&&A.role!==N.i44.Admin||!A.mostRecentConflictOfInterestStatement||(null===(b=A.mostRecentConflictOfInterestStatement)||void 0===b?void 0:b.coiStatus)!=N.Mgx.Conflict&&(null===(ae=A.mostRecentConflictOfInterestStatement)||void 0===ae?void 0:ae.coiStatus)!=N.Mgx.Valid)}function w(A){if(A.mostRecentOrganizationId)return A.organizations.find(b=>b.id===A.mostRecentOrganizationId)}this.viewerBaseGQL=Y,this.http=$,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(A=>({data:A.data,loading:A.loading,networkStatus:A.networkStatus})),(0,t.d)(1)),this.isLoading$=this.data$.pipe((0,n.j)("loading"),(0,s.O)(!0)),this.viewer$=this.data$.pipe((0,n.j)("data","viewer"),(0,i.U)(A=>Object.assign(Object.assign({},A),{signedIn:null!==A,signedOut:null===A,canCurate:H(A),canModerate:Z(A),isAdmin:ne(A),isEditor:R(A),isCurator:le(A),organizations:null===A?[]:A.organizations,mostRecentOrg:null===A?void 0:w(A),invalidCoi:R(A)&&(!A.mostRecentConflictOfInterestStatement||A.mostRecentConflictOfInterestStatement.coiStatus===N.Mgx.Expired||A.mostRecentConflictOfInterestStatement.coiStatus===N.Mgx.Missing)})),(0,s.O)(J),(0,t.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(A=>A.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(A=>A.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(A=>ne(A))),this.isEditor$=this.viewer$.pipe((0,i.U)(A=>R(A))),this.isCurator$=this.viewer$.pipe((0,i.U)(A=>le(A))),this.canCurate$=this.viewer$.pipe((0,i.U)(A=>H(A))),this.canModerate$=this.viewer$.pipe((0,i.U)(A=>Z(A)))}signOut(){this.http.get("/api/sign_out").subscribe(Y=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return I.\u0275fac=function(Y){return new(Y||I)(_.LFG(N.Tt7),_.LFG(c.eN))},I.\u0275prov=_.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})()},6654:(Te,te,o)=>{o.d(te,{a:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(N){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(N){return new(N||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(N,_){},encapsulation:2}),n})()},915:(Te,te,o)=>{function i(t){let n;if("NA"===t)n=["N/A"];else if("SENSITIVITYRESPONSE"===t)n=["Sensitivity","/","Response"];else{n=t.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}o.d(te,{E:()=>i})},6530:(Te,te,o)=>{function i(t){switch(t){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return t}}o.d(te,{c:()=>i})},6123:(Te,te,o)=>{o.d(te,{U:()=>N});var i=o(8929),t=o(591),n=o(7625),s=o(537);class N{constructor(c){this.networkErrorService=c}mutate(c,J,u,I){let O=new i.xQ,Y={isSubmitting$:new t.X(!1),submitSuccess$:new t.X(!1),submitError$:new t.X([]),cleanup:()=>{O.next(),O.complete()}};return Y.isSubmitting$.next(!0),c.mutate(J,u).pipe((0,n.R)(O),(0,s.x)(()=>{Y.isSubmitting$.next(!1)})).subscribe({next:$=>{$.data&&I&&I($.data)},error:$=>{$.graphQLErrors.length>0?Y.submitError$.next($.graphQLErrors.map(ne=>ne.message)):$.networkError&&this.networkErrorService.networkError$.next($.networkError),Y.cleanup()},complete:()=>{Y.submitError$.next([]),Y.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),Y.cleanup()}}),Y}}},9180:(Te,te,o)=>{o.d(te,{Z:()=>n});var i=o(5e3);const t=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(_,c){1&_&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(Te,te,o)=>{o.d(te,{R:()=>n});var i=o(9808),t=o(5e3);let n=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[i.ez]]}),s})()},822:(Te,te,o)=>{o.d(te,{V:()=>J});var i=o(5e3),t=o(9808),n=o(2359);function s(u,I){if(1&u&&i._UZ(0,"nz-alert",4),2&u){const O=i.oxw();i.Q6J("nzDescription",O.errors[0])}}function N(u,I){if(1&u&&i._UZ(0,"nz-alert",5),2&u){i.oxw();const O=i.MAs(3);i.Q6J("nzDescription",O)}}function _(u,I){if(1&u&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&u){const O=I.$implicit;i.xp6(1),i.Oqu(O)}}function c(u,I){if(1&u&&(i.TgZ(0,"ul",6),i.YNc(1,_,2,1,"li",7),i.qZA()),2&u){const O=i.oxw();i.xp6(1),i.Q6J("ngForOf",O.errors)}}let J=(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(O){return new(O||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(O,Y){1&O&&(i.YNc(0,s,1,1,"nz-alert",0),i.YNc(1,N,1,1,"nz-alert",1),i.YNc(2,c,2,1,"ng-template",2,3,i.W1O)),2&O&&(i.Q6J("ngIf",1===Y.errors.length),i.xp6(1),i.Q6J("ngIf",Y.errors.length>1))},directives:[t.O5,n.r,t.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),u})()},7008:(Te,te,o)=>{o.d(te,{B:()=>s});var i=o(9808),t=o(2359),n=o(5e3);let s=(()=>{class N{}return N.\u0275fac=function(c){return new(c||N)},N.\u0275mod=n.oAB({type:N}),N.\u0275inj=n.cJS({imports:[[i.ez,t.L]]}),N})()},6789:(Te,te,o)=>{o.d(te,{_:()=>Y});var i=o(9808),t=o(7484),n=o(5109),s=o(5482),N=o(6949),_=o(19),c=o(8776),J=o(647),u=o(404),I=o(5e3);let O=(()=>{class ${}return $.\u0275fac=function(R){return new(R||$)},$.\u0275mod=I.oAB({type:$}),$.\u0275inj=I.cJS({imports:[[i.ez,N.WG,c.X0,_.j,s.cD,J.PV,u.cg,n.s]]}),$})(),Y=(()=>{class ${}return $.\u0275fac=function(R){return new(R||$)},$.\u0275mod=I.oAB({type:$}),$.\u0275inj=I.cJS({imports:[[i.ez,N.WG,c.X0,t.vh,_.j,s.cD,J.PV,u.cg,O,n.s]]}),$})()},1825:(Te,te,o)=>{o.d(te,{A:()=>c});var i=o(9808),t=o(6042),n=o(6699),s=o(3677),N=o(8144),_=o(5e3);let c=(()=>{class J{}return J.\u0275fac=function(I){return new(I||J)},J.\u0275mod=_.oAB({type:J}),J.\u0275inj=_.cJS({imports:[[i.ez,t.sL,n.Rt,s.b1,N.zf]]}),J})()},1793:(Te,te,o)=>{o.d(te,{m:()=>t});var i=o(5e3);let t=(()=>{class n{constructor(N){this.el=N,this.observer=new MutationObserver(([_])=>this.disabled=_.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return n.\u0275fac=function(N){return new(N||n)(i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(N,_){2&N&&i.ekj("ant-btn-dangerous",_.nzDanger)}}),n})()},7905:(Te,te,o)=>{o.d(te,{yQ:()=>s,nT:()=>_});var i=o(915),t=o(712),n=o(444),s=(()=>{return(c=s||(s={})).EVIDENCE="Evidence",c.ASSERTION="Assertion",s;var c})();class _{constructor(J){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(t.uBv).map(u=>u):(0,n.o6)(t.kqt).map(u=>u),this.getSignificanceOptions=u=>{const I=this.validStates.get(u);return(null==I?void 0:I.clinicalSignificance)||[]},this.isValidSignificanceOption=(u,I)=>{const O=this.validStates.get(u);return!O||O.clinicalSignificance.includes(I)},this.getDirectionOptions=u=>{const I=this.validStates.get(u);return(null==I?void 0:I.entityDirection)||[]},this.isValidDirectionOption=(u,I)=>{const O=this.validStates.get(u);return!O||O.entityDirection.includes(I)},this.requiresDrug=u=>{const I=this.validStates.get(u);return void 0===I||I.requiresDrug},this.requiresDisease=u=>{const I=this.validStates.get(u);return void 0===I||I.requiresDisease},this.requiresAcmgCodes=u=>{const I=this.validStates.get(u);return void 0===I||I.requiresAcmgCodes},this.requiresAmpLevel=u=>{const I=this.validStates.get(u);return void 0===I||I.requiresAmpLevel},this.allowsFdaApproval=u=>{const I=this.validStates.get(u);return void 0===I||I.allowsFdaApproval},this.getOptionsFromEnums=u=>0===u.length?[]:u.map(I=>({value:I,label:(0,i.E)(I)})),this.entityName=J,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},6064:(Te,te,o)=>{o.d(te,{_:()=>n});var i=o(712),t=o(7905);class n extends t.nT{constructor(){super(t.yQ.EVIDENCE),this.validStates.set(i.kqt.Predictive,{entityType:i.kqt.Predictive,clinicalSignificance:[i._Aq.Sensitivityresponse,i._Aq.Resistance,i._Aq.AdverseResponse,i._Aq.ReducedSensitivity,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Diagnostic,{entityType:i.kqt.Diagnostic,clinicalSignificance:[i._Aq.Positive,i._Aq.Negative],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Prognostic,{entityType:i.kqt.Prognostic,clinicalSignificance:[i._Aq.BetterOutcome,i._Aq.PoorOutcome,i._Aq.Na],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Oncogenic,{entityType:i.kqt.Oncogenic,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Predisposing,{entityType:i.kqt.Predisposing,clinicalSignificance:[i._Aq.Na],entityDirection:[i.tI1.Na],requiresDisease:!0,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(i.kqt.Functional,{entityType:i.kqt.Functional,clinicalSignificance:[i._Aq.GainOfFunction,i._Aq.LossOfFunction,i._Aq.UnalteredFunction,i._Aq.Neomorphic,i._Aq.DominantNegative,i._Aq.Unknown],entityDirection:[i.tI1.Supports,i.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(Te,te,o)=>{o.d(te,{E:()=>ne});var i=o(9808),t=o(4182),n=o(325),s=o(8776),N=o(304),_=o(6042),c=o(5e3),J=o(2643),u=o(2683);function I(R,le){if(1&R){const H=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(H),c.oxw().callOnClick()}),c._uU(1," Cancel\n"),c.qZA()}}function O(R,le){if(1&R&&(c.TgZ(0,"button",3),c._uU(1," Cancel "),c.qZA()),2&R){const H=c.oxw();c.Q6J("routerLink",H.redirectPath)}}const $={name:"cancel-button",component:(()=>{class R extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var H,Z,w,A;(null===(H=this.field.templateOptions)||void 0===H?void 0:H.onClick)?this.callOnClick=null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.onClick:(null===(w=this.field.templateOptions)||void 0===w?void 0:w.redirectPath)&&(this.redirectPath=null===(A=this.field.templateOptions)||void 0===A?void 0:A.redirectPath)}}return R.\u0275fac=function(){let le;return function(Z){return(le||(le=c.n5z(R)))(Z||R)}}(),R.\u0275cmp=c.Xpm({type:R,selectors:[["cvc-cancel-button"]],features:[c.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(H,Z){if(1&H&&(c.YNc(0,I,2,0,"button",0),c.YNc(1,O,2,1,"ng-template",null,1,c.W1O)),2&H){const w=c.MAs(2);c.Q6J("ngIf",Z.callOnClick)("ngIfElse",w)}},directives:[i.O5,_.ix,J.dQ,u.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),R})()};let ne=(()=>{class R{}return R.\u0275fac=function(H){return new(H||R)},R.\u0275mod=c.oAB({type:R}),R.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.sL,n.Bz,N.F,s.X0.forChild({types:[$]})]]}),R})()},4623:(Te,te,o)=>{o.d(te,{K:()=>I});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),N=o(4182);const c={name:"comment-textarea",component:(()=>{class O extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:($,ne)=>{var R;return`Comments must be at least ${null===(R=ne.templateOptions)||void 0===R?void 0:R.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return O.\u0275fac=function(){let Y;return function(ne){return(Y||(Y=n.n5z(O)))(ne||O)}}(),O.\u0275cmp=n.Xpm({type:O,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function($,ne){1&$&&n._UZ(0,"textarea",0),2&$&&n.Q6J("formControl",ne.formControl)("formlyAttributes",ne.field)},directives:[s.Zp,N.Fj,N.JJ,N.oH,t.VQ],styles:[""],changeDetection:0}),O})(),wrappers:["form-field"]};var J=o(4546),u=o(9139);let I=(()=>{class O{}return O.\u0275fac=function($){return new($||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[i.ez,N.UX,t.X0.forChild({types:[c]}),u.u,J.U5,s.o7]]}),O})()},1605:(Te,te,o)=>{o.d(te,{e:()=>Pe});var i=o(9808),t=o(4182),n=o(8776),s=o(3793),N=o(304),_=o(8054),c=o(5e3),J=o(1894),u=o(4546);let I=(()=>{class re{constructor(){console.log("FormCardDirective constructed.")}}return re.\u0275fac=function(ge){return new(ge||re)},re.\u0275dir=c.lG2({type:re,selectors:[["",8,"cvc-form-card-control"]]}),re})();var O=o(7484),Y=o(404);function $(re,Ie){1&re&&c._UZ(0,"i",7)}function ne(re,Ie){if(1&re&&(c.TgZ(0,"nz-form-label",5),c._uU(1),c.YNc(2,$,1,0,"i",6),c.qZA()),2&re){const ge=c.oxw();c.Q6J("nzRequired",ge.to.required&&!0!==ge.to.hideRequiredMarker)("nzFor",ge.id),c.xp6(1),c.hij(" ",ge.to.label," "),c.xp6(1),c.Q6J("ngIf",ge.to.helpText)}}function R(re,Ie){if(1&re&&c._UZ(0,"formly-validation-message",9),2&re){const ge=c.oxw(2);c.Q6J("field",ge.field)}}function le(re,Ie){if(1&re&&c.YNc(0,R,1,1,"formly-validation-message",8),2&re){const ge=c.oxw();c.Q6J("ngIf",ge.showError)}}let H=(()=>{class re extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return re.\u0275fac=function(ge){return new(ge||re)},re.\u0275cmp=c.Xpm({type:re,selectors:[["form-card-wrapper"]],features:[c.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(ge,Ae){if(1&ge&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",0),c.TgZ(2,"nz-card",1),c.GkF(3,null,2),c.qZA(),c.YNc(5,ne,3,4,"ng-template",null,3,c.W1O),c.YNc(7,le,1,1,"ng-template",null,4,c.W1O),c.qZA(),c.qZA()),2&ge){const U=c.MAs(6),_e=c.MAs(8);c.xp6(1),c.Q6J("nzValidateStatus",Ae.errorState)("nzErrorTip",_e),c.xp6(1),c.Q6J("nzTitle",U)("nzExtra",_e)}},directives:[J.SK,u.Nx,J.t3,u.Fd,I,O.bd,u.iK,i.O5,Y.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),re})();var Z=o(647),w=o(5109);const A={wrappers:[{name:"form-card",component:H}]};let b=(()=>{class re{}return re.\u0275fac=function(ge){return new(ge||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,u.U5,O.vh,Z.PV,Y.cg,n.X0.forChild(A),w.s]]}),re})();var ae=o(8929),F=o(7625),E=o(373),h=o(4850),M=o(712),P=o(6949),L=o(8144),B=o(3618),p=o(3193),K=o(8926);function k(re,Ie){if(1&re&&(c._UZ(0,"span",10),c.ALo(1,"highlightTypeahead")),2&re){const ge=c.oxw().$implicit,Ae=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,ge.label,Ae.to.searchString),c.oJD)}}function X(re,Ie){if(1&re&&(c._UZ(0,"span",12),c.ALo(1,"highlightTypeahead")),2&re){const ge=c.oxw(2).$implicit,Ae=c.oxw(3);c.Q6J("innerHtml",c.xi3(1,1,ge.gene.geneAliases.join(", "),Ae.to.searchString),c.oJD)}}function xe(re,Ie){1&re&&(c.ynx(0),c.YNc(1,X,2,4,"span",11),c.BQk())}function se(re,Ie){if(1&re&&(c.TgZ(0,"nz-option",7),c.TgZ(1,"nz-space"),c.YNc(2,k,2,4,"span",8),c.YNc(3,xe,2,0,"ng-container",9),c.qZA(),c.qZA()),2&re){const ge=Ie.$implicit;c.Q6J("nzLabel",ge.tooltip)("nzValue",ge.gene),c.xp6(3),c.Q6J("ngIf",ge.gene.geneAliases.length>0)}}function ye(re,Ie){if(1&re&&(c.ynx(0),c._uU(1),c.ALo(2,"json"),c.YNc(3,se,4,3,"nz-option",6),c.BQk()),2&re){const ge=Ie.ngrxLet;c.xp6(1),c.hij(" ",c.lcZ(2,2,ge)," "),c.xp6(2),c.Q6J("ngForOf",ge)}}function q(re,Ie){1&re&&c._uU(0," No gene found in CIViC that matches the string provided. ")}function me(re,Ie){if(1&re){const ge=c.EpF();c.ynx(0),c.TgZ(1,"nz-select",2,3),c.NdJ("nzOnSearch",function(U){return c.CHM(ge),c.oxw().to.onSearch(U)}),c.YNc(3,ye,4,4,"ng-container",4),c.qZA(),c.YNc(4,q,1,0,"ng-template",null,5,c.W1O),c.BQk()}if(2&re){const ge=c.MAs(5),Ae=c.oxw();c.xp6(1),c.Q6J("formControl",Ae.formControl)("formlyAttributes",Ae.field)("nzPlaceHolder",Ae.to.placeholder?Ae.to.placeholder:null)("nzNotFoundContent",ge)("nzShowArrow",Ae.to.showArrow)("nzFilterOption",Ae.to.filterOption),c.xp6(2),c.Q6J("ngrxLet",Ae.genes$)}}function ie(re,Ie){if(1&re&&c._UZ(0,"cvc-gene-tag",13),2&re){const ge=c.oxw();c.Q6J("gene",ge.formControl.value)}}const Oe={name:"cvc-gene-input",component:(()=>{class re extends n.fS{constructor(ge){super(),this.geneTypeaheadQuery=ge,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}},this.destroy$=new ae.xQ}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,F.R)(this.destroy$),(0,E.j)("data","geneTypeahead"),(0,h.U)(ge=>ge.map(Ae=>{let U=Ae.geneAliases.length>0?`Aliases: ${Ae.geneAliases.join(", ")}`:"";return{value:Ae.id,tooltip:`${Ae.name} (${Ae.entrezId}) ${U}`,label:`${Ae.name} (${Ae.entrezId})`,gene:Ae}})))}ngAfterViewInit(){this.to.onSearch=ge=>{ge.length<this.to.minLengthSearch||(this.to.searchString=ge,this.queryRef.refetch({entrezSymbol:ge}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return re.\u0275fac=function(ge){return new(ge||re)(c.Y36(M.Q4m))},re.\u0275cmp=c.Xpm({type:re,selectors:[["cvc-gene-input"]],features:[c.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(ge,Ae){if(1&ge&&(c.YNc(0,me,6,7,"ng-container",0),c.YNc(1,ie,1,1,"ng-template",null,1,c.W1O)),2&ge){const U=c.MAs(2);c.Q6J("ngIf",!(null!=Ae.formControl.value&&Ae.formControl.value.id))("ngIfElse",U)}},directives:[i.O5,_.Vq,t.JJ,t.oH,n.VQ,P.eJ,i.sg,_.Ip,L.NU,L.$1,B.ZU,p.H],pipes:[i.Ts,K.A],styles:[""]}),re})()};var V=o(3309),fe=o(9444);let G=(()=>{class re{}return re.\u0275fac=function(ge){return new(ge||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.UX,P.WG,n.X0.forChild({types:[Oe]}),_.LV,L.zf,B.ZJ,V.U,fe.s]]}),re})();var he=o(8390);const De={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Pe=(()=>{class re{}return re.\u0275fac=function(ge){return new(ge||re)},re.\u0275mod=c.oAB({type:re}),re.\u0275inj=c.cJS({imports:[[i.ez,t.u5,t.UX,_.LV,N.F,s.F,n.X0.forChild({types:[De]}),G,he.N,b]]}),re})()},8390:(Te,te,o)=>{o.d(te,{N:()=>P});var i=o(9808),t=o(4182),n=o(8776),s=o(4546),N=o(1047),_=o(647),c=o(5e3),J=o(1894),u=o(8481),I=o(2683),O=o(6042),Y=o(2643);function $(L,B){if(1&L){const p=c.EpF();c.TgZ(0,"nz-form-item"),c.TgZ(1,"nz-form-control",3),c.TgZ(2,"nz-tag",4),c.NdJ("click",function(k){return c.CHM(p),c.oxw().addField(k)}),c._UZ(3,"i",5),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&L){const p=c.oxw();c.xp6(1),c.Q6J("nzValidateStatus",p.errorState),c.xp6(3),c.hij(" ",p.to.addText," ")}}function ne(L,B){if(1&L){const p=c.EpF();c.TgZ(0,"nz-tag",4),c.NdJ("click",function(k){return c.CHM(p),c.oxw(4).addField(k)}),c._UZ(1,"i",5),c._uU(2),c.qZA()}if(2&L){const p=c.oxw(4);c.xp6(2),c.hij(" ",p.to.addText," ")}}function R(L,B){if(1&L&&(c.TgZ(0,"div",11),c.YNc(1,ne,3,1,"nz-tag",12),c.qZA()),2&L){const p=c.oxw(2).$implicit,K=c.oxw();c.xp6(1),c.Q6J("ngIf",0==K.to.maxCount||K.to.maxCount>p.model.length)}}function le(L,B){if(1&L){const p=c.EpF();c.ynx(0),c.TgZ(1,"nz-tag",8),c.TgZ(2,"i",9),c.NdJ("click",function(){c.CHM(p);const k=c.oxw().index;return c.oxw().remove(k)}),c.qZA(),c.qZA(),c.YNc(3,R,2,1,"div",10),c.BQk()}if(2&L){const p=c.oxw().last;c.xp6(3),c.Q6J("ngIf",p)}}function H(L,B){if(1&L){const p=c.EpF();c.ynx(0),c.TgZ(1,"div",13),c.TgZ(2,"button",14),c.NdJ("click",function(){c.CHM(p);const k=c.oxw().index;return c.oxw().remove(k)}),c._UZ(3,"i",15),c.qZA(),c.qZA(),c.BQk()}}function Z(L,B){if(1&L&&(c.TgZ(0,"nz-form-item"),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c._UZ(3,"formly-field",7),c.qZA(),c.YNc(4,le,4,1,"ng-container",1),c.YNc(5,H,4,0,"ng-container",1),c.qZA(),c.qZA()),2&L){const p=B.$implicit,K=B.index;c.xp6(2),c.Q6J("ngClass",p.model[K]?"selected-field-col":"default-field-col"),c.xp6(1),c.Q6J("field",p),c.xp6(1),c.Q6J("ngIf",p.model[K]),c.xp6(1),c.Q6J("ngIf",!p.model[K])}}const w=function(L){return{hidden:L}},b={name:"multi-field",component:(()=>{class L extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(p){p&&p.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return L.\u0275fac=function(p){return new(p||L)},L.\u0275cmp=c.Xpm({type:L,selectors:[["cvc-multi-field-type"]],features:[c.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(p,K){1&p&&(c.TgZ(0,"div",0),c.YNc(1,$,5,2,"nz-form-item",1),c.YNc(2,Z,6,4,"nz-form-item",2),c.qZA()),2&p&&(c.Q6J("ngClass",c.VKq(3,w,!0===K.to.hidden)),c.xp6(1),c.Q6J("ngIf",0===(null==K.field.fieldGroup?null:K.field.fieldGroup.length)),c.xp6(1),c.Q6J("ngForOf",K.field.fieldGroup))},directives:[i.mk,i.O5,J.SK,s.Nx,J.t3,s.Fd,u.j,_.Ls,I.w,i.sg,n.cw,O.ix,Y.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),L})()};function ae(L,B){if(1&L&&c._UZ(0,"formly-validation-message",3),2&L){const p=c.oxw();c.Q6J("field",p.field)}}const E={name:"cvc-field-errors",component:(()=>{class L extends n.n2{get errorState(){return this.showError?"error":""}}return L.\u0275fac=function(){let B;return function(K){return(B||(B=c.n5z(L)))(K||L)}}(),L.\u0275cmp=c.Xpm({type:L,selectors:[["cvc-field-errors-wrapper"]],features:[c.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(p,K){if(1&p&&(c.TgZ(0,"nz-form-control",0),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.GkF(3,null,1),c.YNc(5,ae,1,1,"ng-template",null,2,c.W1O),c.qZA()),2&p){const k=c.MAs(6);c.Q6J("nzValidateStatus",K.errorState)("nzErrorTip",k),c.xp6(2),c.hij("errorState: ",K.errorState,"")}},directives:[J.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),L})()};let h=(()=>{class L{}return L.\u0275fac=function(p){return new(p||L)},L.\u0275mod=c.oAB({type:L}),L.\u0275inj=c.cJS({imports:[[i.ez,t.UX,s.U5,n.X0.forChild({wrappers:[E]})]]}),L})();var M=o(5109);let P=(()=>{class L{}return L.\u0275fac=function(p){return new(p||L)},L.\u0275mod=c.oAB({type:L}),L.\u0275inj=c.cJS({imports:[[i.ez,t.u5,n.X0.forChild({types:[b]}),t.UX,h,s.U5,N.o7,_.PV,O.sL,M.s,u.X]]}),L})()},7462:(Te,te,o)=>{o.d(te,{o:()=>J});var i=o(9808),t=o(8776),n=o(5e3),s=o(1047),N=o(4182);const c={name:"cvc-textarea",component:(()=>{class u extends t.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return u.\u0275fac=function(){let I;return function(Y){return(I||(I=n.n5z(u)))(Y||u)}}(),u.\u0275cmp=n.Xpm({type:u,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(O,Y){1&O&&n._UZ(0,"textarea",0),2&O&&n.Q6J("formControl",Y.formControl)("formlyAttributes",Y.field)("nzAutosize",Y.to.autosize)("placeholder",Y.to.placeholder)},directives:[s.Zp,N.Fj,s.rh,N.JJ,N.oH,t.VQ],styles:[""],changeDetection:0}),u})(),wrappers:["form-field"]};let J=(()=>{class u{}return u.\u0275fac=function(O){return new(O||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[[i.ez,N.u5,N.UX,t.X0.forChild({types:[c]}),s.o7]]}),u})()},5472:(Te,te,o)=>{o.d(te,{r:()=>Y});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),N=o(5482),_=o(1894),c=o(5109),J=o(6789),u=o(5e3);const O={wrappers:[{name:"form-container",component:(()=>{class $ extends n.n2{}return $.\u0275fac=function(){let ne;return function(le){return(ne||(ne=u.n5z($)))(le||$)}}(),$.\u0275cmp=u.Xpm({type:$,selectors:[["cvc-form-container-wrapper"]],features:[u.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(R,le){1&R&&(u.TgZ(0,"nz-row"),u.TgZ(1,"nz-col",0),u.TgZ(2,"nz-card",1),u.GkF(3,null,2),u.qZA(),u.qZA(),u.qZA()),2&R&&(u.xp6(2),u.Q6J("nzTitle",le.to.label))},directives:[_.SK,_.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),$})()}]};let Y=(()=>{class ${}return $.\u0275fac=function(R){return new(R||$)},$.\u0275mod=u.oAB({type:$}),$.\u0275inj=u.cJS({imports:[[i.ez,t.WG,n.X0.forChild(O),_.Jb,s.vh,N.cD,J._,c.s]]}),$})()},7695:(Te,te,o)=>{o.d(te,{C:()=>E});var i=o(9808),t=o(6949),n=o(8776),s=o(7484),N=o(5482),_=o(1894),c=o(5109),J=o(6789),u=o(5e3),I=o(19),O=o(647),Y=o(404);function $(h,M){1&h&&u._UZ(0,"div",9),2&h&&u.Q6J("innerHtml",M.ngIf,u.oJD)}function ne(h,M){1&h&&(u.TgZ(0,"div",10),u._uU(1,"Help not available for this field."),u.qZA())}function R(h,M){if(1&h&&(u.TgZ(0,"nz-collapse-panel",6),u.YNc(1,$,1,1,"div",7),u.YNc(2,ne,2,0,"ng-template",null,8,u.W1O),u.qZA()),2&h){const P=M.ngIf,L=u.MAs(3),B=u.oxw().$implicit,p=u.MAs(3);u.Q6J("nzHeader",P)("nzActive",B.templateOptions.hasFocus)("nzExtra",p),u.xp6(1),u.Q6J("ngIf",null==B.templateOptions?null:B.templateOptions.helpText)("ngIfElse",L)}}function le(h,M){if(1&h&&u._UZ(0,"formly-validation-message",14),2&h){const P=u.oxw(4).$implicit;u.Q6J("field",P)}}function H(h,M){if(1&h&&(u.ynx(0),u._UZ(1,"i",12),u.YNc(2,le,1,1,"ng-template",null,13,u.W1O),u.BQk()),2&h){const P=u.MAs(3);u.xp6(1),u.Q6J("nzTooltipTitle",P)}}function Z(h,M){if(1&h&&(u.ynx(0),u.YNc(1,H,4,1,"ng-container",11),u.BQk()),2&h){const P=M.ngIf;u.xp6(1),u.Q6J("ngIf","INVALID"===P)}}function w(h,M){if(1&h&&(u.YNc(0,Z,2,1,"ng-container",11),u.ALo(1,"ngrxPush")),2&h){const P=u.oxw().$implicit;u.Q6J("ngIf",u.lcZ(1,1,P.formControl.statusChanges))}}function A(h,M){if(1&h&&(u.ynx(0),u.YNc(1,R,4,5,"nz-collapse-panel",4),u.YNc(2,w,2,3,"ng-template",null,5,u.W1O),u.BQk()),2&h){const P=M.$implicit;u.xp6(1),u.Q6J("ngIf",null==P.templateOptions?null:P.templateOptions.label)}}let b=(()=>{class h{constructor(){}ngOnInit(){}}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=u.Xpm({type:h,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(P,L){1&P&&(u.TgZ(0,"nz-affix",0),u.TgZ(1,"nz-card",1),u.TgZ(2,"nz-collapse",2),u.YNc(3,A,4,1,"ng-container",3),u.qZA(),u.qZA(),u.qZA()),2&P&&(u.Q6J("nzOffsetTop",0)("nzTarget",L.affixTo),u.xp6(2),u.Q6J("nzBordered",!1),u.xp6(1),u.Q6J("ngForOf",L.fieldGroup))},directives:[I.$,s.bd,N.yH,i.sg,i.O5,N.Zv,O.Ls,Y.SY,n.u_],pipes:[t.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),h})();const F={name:"form-info",component:(()=>{class h extends n.n2{}return h.\u0275fac=function(){let M;return function(L){return(M||(M=u.n5z(h)))(L||h)}}(),h.\u0275cmp=u.Xpm({type:h,selectors:[["cvc-form-info-wrapper"]],features:[u.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(P,L){if(1&P&&(u.TgZ(0,"nz-row",0),u.TgZ(1,"nz-col",1),u.TgZ(2,"nz-card",2),u.GkF(3,null,3),u.qZA(),u.qZA(),u.TgZ(5,"nz-col",1),u.TgZ(6,"div",null,4),u._UZ(8,"cvc-form-info-card",5),u.qZA(),u.qZA(),u.qZA()),2&P){const B=u.MAs(7);u.xp6(1),u.Q6J("nzSpan",16),u.xp6(1),u.Q6J("nzTitle",L.to.label),u.xp6(3),u.Q6J("nzSpan",8),u.xp6(3),u.Q6J("fieldGroup",L.field.fieldGroup)("affixTo",B)}},directives:[_.SK,_.t3,s.bd,b],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),h})()};let E=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275mod=u.oAB({type:h}),h.\u0275inj=u.cJS({imports:[[i.ez,t.WG,n.X0.forChild({wrappers:[F]}),_.Jb,s.vh,N.cD,J._,c.s]]}),h})()},8785:(Te,te,o)=>{o.d(te,{t:()=>ae});var i=o(5e3),t=o(6123),n=o(8929),s=o(7625),N=o(712),_=o(9169),c=o(7484),J=o(9808),u=o(2359),I=o(1894),O=o(4546),Y=o(822),$=o(7525),ne=o(3868),R=o(4182),le=o(6042),H=o(2643),Z=o(2683);function w(F,E){1&F&&i._UZ(0,"nz-alert",7)}function A(F,E){if(1&F&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&F){const h=i.oxw();i.xp6(1),i.Q6J("errors",h.errorMessages)}}function b(F,E){if(1&F){const h=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(P){return i.CHM(h),i.oxw().coiText=P}),i.qZA(),i.qZA()}if(2&F){const h=i.oxw();i.xp6(1),i.Q6J("ngModel",h.coiText)}}let ae=(()=>{class F{constructor(h,M){this.updateCoiGql=h,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new t.U(M)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let M=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});M.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{P&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),M.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{P&&(this.errorMessages=P,this.success=!1)}),M.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(P=>{this.loading=P})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return F.\u0275fac=function(h){return new(h||F)(i.Y36(N.IP1),i.Y36(_.Y))},F.\u0275cmp=i.Xpm({type:F,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(h,M){1&h&&(i.TgZ(0,"nz-card"),i.YNc(1,w,1,0,"nz-alert",0),i.YNc(2,A,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(L){return M.coiStatus=L}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,b,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return M.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&h&&(i.xp6(1),i.Q6J("ngIf",M.success),i.xp6(1),i.Q6J("ngIf",M.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",M.loading),i.xp6(2),i.Q6J("ngModel",M.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===M.coiStatus),i.xp6(2),i.Q6J("disabled",M.loading||"coiPresent"===M.coiStatus&&(void 0===M.coiText||M.coiText.length<10)))},directives:[c.bd,J.O5,u.r,I.SK,O.Nx,Y.V,$.W,ne.Dg,R.JJ,R.On,ne.Of,R.Fj,le.ix,H.dQ,Z.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),F})()},330:(Te,te,o)=>{o.d(te,{e:()=>Y});var i=o(9808),t=o(4182),n=o(6949),s=o(7484),N=o(2359),_=o(4546),c=o(7008),J=o(3868),u=o(7525),I=o(6042),O=o(5e3);let Y=(()=>{class ${}return $.\u0275fac=function(R){return new(R||$)},$.\u0275mod=O.oAB({type:$}),$.\u0275inj=O.cJS({imports:[[i.ez,t.u5,_.U5,t.UX,n.WG,s.vh,N.L,J.aF,I.sL,u.j,c.B]]}),$})()},3434:(Te,te,o)=>{o.d(te,{G:()=>ae});var i=o(4182),t=o(8929),n=o(6064),s=o(6123),N=o(7625),_=o(5e3),c=o(712),J=o(9169),u=o(325),I=o(7525),O=o(4546),Y=o(9808),$=o(8776),ne=o(1894),R=o(822),le=o(2359);function H(F,E){1&F&&_.GkF(0)}function Z(F,E){if(1&F&&(_.TgZ(0,"nz-form-item"),_._UZ(1,"cvc-form-errors-alert",6),_.qZA()),2&F){const h=_.oxw(2);_.xp6(1),_.Q6J("errors",h.errorMessages)}}function w(F,E){if(1&F&&(_.TgZ(0,"p"),_._uU(1,"View "),_.TgZ(2,"a",10),_._uU(3,"its details"),_.qZA(),_._uU(4,"."),_.qZA()),2&F){const h=_.oxw(3);_.xp6(2),_.MGl("routerLink","/variants/",h.newId,"/summary")}}function A(F,E){if(1&F&&(_.ynx(0),_._UZ(1,"nz-alert",7),_.YNc(2,w,5,1,"ng-template",8,9,_.W1O),_.BQk()),2&F){const h=_.MAs(3),M=_.oxw(2);_.xp6(1),_.Q6J("nzMessage",M.isNew?"Variant Created":"Variant Already Exists")("nzDescription",h)}}function b(F,E){if(1&F&&(_.YNc(0,Z,2,1,"nz-form-item",5),_.YNc(1,A,4,2,"ng-container",5)),2&F){const h=_.oxw();_.Q6J("ngIf",h.errorMessages.length>0),_.xp6(1),_.Q6J("ngIf",h.success)}}let ae=(()=>{class F{constructor(h,M,P){this.submitVariantGQL=h,this.networkErrorService=M,this.route=P,this.destroy$=new t.xQ,this.formGroup=new i.cw({}),this.formOptions={formState:new n._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(M),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(h){let M=null==h?void 0:h.fields.gene[0].id,P=null==h?void 0:h.fields.variant;if(M&&P){let B=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:M,name:P},{},p=>{this.newId=p.addVariant.variant.id,this.isNew=p.addVariant.new});B.submitSuccess$.pipe((0,N.R)(this.destroy$)).subscribe(p=>{p&&(this.success=!0)}),B.submitError$.pipe((0,N.R)(this.destroy$)).subscribe(p=>{p&&(this.errorMessages=p,this.success=!1)}),B.isSubmitting$.pipe((0,N.R)(this.destroy$)).subscribe(p=>{this.loading=p})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return F.\u0275fac=function(h){return new(h||F)(_.Y36(c.LUc),_.Y36(J.Y),_.Y36(u.gz))},F.\u0275cmp=_.Xpm({type:F,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(h,M){if(1&h&&(_.TgZ(0,"nz-spin",0),_.TgZ(1,"form",1),_.NdJ("ngSubmit",function(){return M.submitVariant(M.formModel)}),_.YNc(2,H,1,0,"ng-container",2),_.TgZ(3,"formly-form",3),_.NdJ("modelChange",function(L){return M.formModel=L}),_.qZA(),_.qZA(),_.qZA(),_.YNc(4,b,2,2,"ng-template",null,4,_.W1O)),2&h){const P=_.MAs(5);_.Q6J("nzSpinning",M.loading),_.xp6(1),_.Q6J("formGroup",M.formGroup),_.xp6(1),_.Q6J("ngTemplateOutlet",P),_.xp6(1),_.Q6J("form",M.formGroup)("fields",M.formFields)("model",M.formModel)("options",M.formOptions)}},directives:[I.W,i._Y,i.JL,O.Lr,i.sg,Y.tP,$.T7,Y.O5,ne.SK,O.Nx,R.V,le.r,u.yS],styles:[""]}),F})()},7058:(Te,te,o)=>{o.d(te,{e:()=>k});var i=o(9808),t=o(4623),n=o(4375),s=o(7008),N=o(7695),_=o(8390),c=o(7462),J=o(8776),u=o(5109),I=o(2359),O=o(6042),Y=o(4546),$=o(1894),ne=o(4182),R=o(325),le=o(1605),H=o(7525),Z=o(5472),w=o(4889),A=o(7484),b=o(8144),ae=o(3618),F=o(5e3),E=o(9180),h=o(2643),M=o(1793),P=o(2683);const B={name:"submit-button",component:(()=>{class X extends J.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return X.\u0275fac=function(se){return new(se||X)},X.\u0275cmp=F.Xpm({type:X,selectors:[["cvc-submit-button-type"]],features:[F.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(se,ye){1&se&&(F.TgZ(0,"cvc-form-buttons"),F.TgZ(1,"button",0),F._uU(2),F.qZA(),F.qZA()),2&se&&(F.xp6(1),F.Q6J("disabled",!ye.form.valid),F.xp6(1),F.hij(" ",ye.to.submitLabel," "))},directives:[E.Z,O.ix,h.dQ,M.m,P.w],styles:[""],changeDetection:0}),X})()};var p=o(1825);let K=(()=>{class X{}return X.\u0275fac=function(se){return new(se||X)},X.\u0275mod=F.oAB({type:X}),X.\u0275inj=F.cJS({imports:[[i.ez,ne.UX,J.X0.forChild({types:[B]}),O.sL,n.R,p.A]]}),X})(),k=(()=>{class X{}return X.\u0275fac=function(se){return new(se||X)},X.\u0275mod=F.oAB({type:X}),X.\u0275inj=F.cJS({imports:[[i.ez,R.Bz,ne.UX,u.s,Y.U5,I.L,$.Jb,O.sL,H.j,A.vh,b.zf,ae.ZJ,J.X0,s.B,n.R,N.C,_.N,c.o,t.K,le.e,Z.r,w.E,K,u.s]]}),X})()},712:(Te,te,o)=>{o.d(te,{ti:()=>ni,$G1:()=>ur,iGM:()=>nr,KNk:()=>gr,T97:()=>zr,RMv:()=>Rr,LUc:()=>Qr,iwm:()=>Ce,Vr2:()=>g,A94:()=>Ms,mdl:()=>ve,Gbq:()=>lo,bgg:()=>Ki,u4i:()=>Ee,ejK:()=>Ns,uBv:()=>Re,td:()=>po,Tq1:()=>Eo,q8c:()=>Vo,WRV:()=>Ti,IZ6:()=>Si,qf4:()=>Fi,Rdc:()=>Vi,gtM:()=>Fr,fpJ:()=>Nr,k2T:()=>Mr,UWf:()=>Ci,cMj:()=>Ls,UIR:()=>go,E8d:()=>$e,P_b:()=>ho,Mgx:()=>Be,iST:()=>zo,Kk:()=>Co,OfU:()=>ke,kQf:()=>pi,l4w:()=>hs,JQ3:()=>Lr,db2:()=>ea,h01:()=>Je,wg3:()=>Fs,k7O:()=>To,kv3:()=>pr,R8w:()=>qe,GB2:()=>Rs,Zyn:()=>rt,dUU:()=>So,kq9:()=>ct,vRc:()=>hr,Ud2:()=>Mo,GYx:()=>cr,AO2:()=>Ze,YMi:()=>No,BTF:()=>Lo,wJ2:()=>ot,eY8:()=>Ro,_Aq:()=>ut,pHu:()=>Gs,tI1:()=>st,FId:()=>Kr,Q_P:()=>Wr,Sx0:()=>C,Ybm:()=>Fo,Cp0:()=>ee,RTy:()=>x,sBY:()=>ws,kqt:()=>pe,Zhw:()=>Cr,B0s:()=>es,rzy:()=>Go,OIL:()=>wo,BQZ:()=>Ne,sfv:()=>Fe,TNk:()=>Qs,rJ8:()=>Qo,FOU:()=>is,Q4m:()=>Tr,Fvz:()=>mt,cCu:()=>Vs,_jb:()=>zi,MYm:()=>hi,oRL:()=>gt,lfy:()=>Er,fow:()=>ft,X5f:()=>Jo,WOS:()=>Ws,Lr0:()=>Js,Del:()=>Ks,xlL:()=>ht,io:()=>Ko,WGV:()=>Xs,OHm:()=>Xo,lYz:()=>vt,FKQ:()=>Sr,B97:()=>ei,mII:()=>ir,ghc:()=>Wo,NQC:()=>zt,JDX:()=>_t,VZq:()=>ii,EwB:()=>ns,otH:()=>ci,FJi:()=>Ct,L5n:()=>ui,rZD:()=>yt,SrV:()=>Tt,Bk6:()=>na,TiL:()=>Ei,yic:()=>It,SJD:()=>nn,F3s:()=>Et,jw9:()=>Dt,g0X:()=>ia,iXf:()=>Ln,NbY:()=>Gr,kQl:()=>St,LLl:()=>er,WFw:()=>Xr,tji:()=>Ts,o71:()=>Ot,jMx:()=>ga,A4J:()=>gi,c$m:()=>Xi,Vj7:()=>Jr,D9L:()=>ss,SWk:()=>cs,aw3:()=>zs,Xft:()=>Ss,mpB:()=>Mt,m$d:()=>pa,IP1:()=>ps,LiH:()=>ua,wRZ:()=>us,wbP:()=>gs,sLD:()=>sa,yqR:()=>ca,cEv:()=>Mi,i44:()=>At,vMt:()=>sr,tJ6:()=>Ni,IRu:()=>Nt,Qzn:()=>si,iJT:()=>Ta,qP7:()=>at,Qtd:()=>ha,Zo2:()=>Li,ROj:()=>Cs,FB1:()=>Gt,q1D:()=>za,d4o:()=>xt,huM:()=>Lt,ZYZ:()=>wi,nnL:()=>Es,Bo4:()=>Ea,ubO:()=>Ca,tw_:()=>Ri,wpb:()=>Pt,BnY:()=>Vr,_eC:()=>wr,fwG:()=>Gi,zwS:()=>Qi,pP7:()=>Ft,Tt7:()=>Wi,Kmw:()=>Ji});var i=o(655);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}var s=o(9245);function N(e,a){for(var S,r=/\r\n|[\n\r]/g,f=1,D=a+1;(S=r.exec(e.body))&&S.index<a;)f+=1,D=a+1-(S.index+S[0].length);return{line:f,column:D}}function _(e){return c(e.source,N(e.source,e.start))}function c(e,a){var r=e.locationOffset.column-1,f=u(r)+e.body,D=a.line-1,Q=a.line+(e.locationOffset.line-1),ue=a.column+(1===a.line?r:0),Le="".concat(e.name,":").concat(Q,":").concat(ue,"\n"),we=f.split(/\r\n|[\n\r]/g),it=we[D];if(it.length>120){for(var bt=Math.floor(ue/80),wt=ue%80,je=[],Qe=0;Qe<it.length;Qe+=80)je.push(it.slice(Qe,Qe+80));return Le+J([["".concat(Q),je[0]]].concat(je.slice(1,bt+1).map(function(Ut){return["",Ut]}),[[" ",u(wt-1)+"^"],["",je[bt+1]]]))}return Le+J([["".concat(Q-1),we[D-1]],["".concat(Q),it],["",u(ue-1)+"^"],["".concat(Q+1),we[D+1]]])}function J(e){var a=e.filter(function(f){return void 0!==f[1]}),r=Math.max.apply(Math,a.map(function(f){return f[0].length}));return a.map(function(f){var S=f[1];return function I(e,a){return u(e-a.length)+a}(r,f[0])+(S?" | "+S:" |")}).join("\n")}function u(e){return Array(e+1).join(" ")}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function $(e,a){for(var r=0;r<a.length;r++){var f=a[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(e,f.key,f)}}function H(e,a){return!a||"object"!==O(a)&&"function"!=typeof a?Z(e):a}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){var a="function"==typeof Map?new Map:void 0;return w=function(f){if(null===f||!function ae(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(f))return f;if("function"!=typeof f)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(f))return a.get(f);a.set(f,D)}function D(){return A(f,arguments,E(this).constructor)}return D.prototype=Object.create(f.prototype,{constructor:{value:D,enumerable:!1,writable:!0,configurable:!0}}),F(D,f)},w(e)}function A(e,a,r){return(A=b()?Reflect.construct:function(D,S,Q){var j=[null];j.push.apply(j,S);var Le=new(Function.bind.apply(D,j));return Q&&F(Le,Q.prototype),Le}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function F(e,a){return(F=Object.setPrototypeOf||function(f,D){return f.__proto__=D,f})(e,a)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}var h=function(e){!function R(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&F(e,a)}(r,e);var a=function le(e){var a=b();return function(){var D,f=E(e);if(a){var S=E(this).constructor;D=Reflect.construct(f,arguments,S)}else D=f.apply(this,arguments);return H(this,D)}}(r);function r(f,D,S,Q,j,ue,Le){var we,it,bt,wt,je;(function Y(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r),je=a.call(this,f);var Xt,Qe=Array.isArray(D)?0!==D.length?D:void 0:D?[D]:void 0,Ut=S;!Ut&&Qe&&(Ut=null===(Xt=Qe[0].loc)||void 0===Xt?void 0:Xt.source);var Vt,Rt=Q;!Rt&&Qe&&(Rt=Qe.reduce(function(dt,$t){return $t.loc&&dt.push($t.loc.start),dt},[])),Rt&&0===Rt.length&&(Rt=void 0),Q&&S?Vt=Q.map(function(dt){return N(S,dt)}):Qe&&(Vt=Qe.reduce(function(dt,$t){return $t.loc&&dt.push(N($t.loc.source,$t.loc.start)),dt},[]));var Yt=Le;if(null==Yt&&null!=ue){var sn=ue.extensions;(function n(e){return"object"==t(e)&&null!==e})(sn)&&(Yt=sn)}return Object.defineProperties(Z(je),{name:{value:"GraphQLError"},message:{value:f,enumerable:!0,writable:!0},locations:{value:null!==(we=Vt)&&void 0!==we?we:void 0,enumerable:null!=Vt},path:{value:null!=j?j:void 0,enumerable:null!=j},nodes:{value:null!=Qe?Qe:void 0},source:{value:null!==(it=Ut)&&void 0!==it?it:void 0},positions:{value:null!==(bt=Rt)&&void 0!==bt?bt:void 0},originalError:{value:ue},extensions:{value:null!==(wt=Yt)&&void 0!==wt?wt:void 0,enumerable:null!=Yt}}),(null==ue?void 0:ue.stack)?(Object.defineProperty(Z(je),"stack",{value:ue.stack,writable:!0,configurable:!0}),H(je)):(Error.captureStackTrace?Error.captureStackTrace(Z(je),r):Object.defineProperty(Z(je),"stack",{value:Error().stack,writable:!0,configurable:!0}),je)}return function ne(e,a,r){a&&$(e.prototype,a),r&&$(e,r)}(r,[{key:"toString",value:function(){return function M(e){var a=e.message;if(e.nodes)for(var r=0,f=e.nodes;r<f.length;r++){var D=f[r];D.loc&&(a+="\n\n"+_(D.loc))}else if(e.source&&e.locations)for(var S=0,Q=e.locations;S<Q.length;S++)a+="\n\n"+c(e.source,Q[S]);return a}(this)}},{key:s.YF,get:function(){return"Object"}}]),r}(w(Error));function P(e,a,r){return new h("Syntax Error: ".concat(r),void 0,e,[a])}var L=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),B=o(848),p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),K=o(6261),k=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),X=o(2032),xe=function(){function e(r){var f=new B.WU(p.SOF,0,0,0,0,null);this.source=r,this.lastToken=f,this.token=f,this.line=1,this.lineStart=0}var a=e.prototype;return a.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},a.lookahead=function(){var f=this.token;if(f.kind!==p.EOF)do{var D;f=null!==(D=f.next)&&void 0!==D?D:f.next=q(this,f)}while(f.kind===p.COMMENT);return f},e}();function ye(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function q(e,a){for(var r=e.source,f=r.body,D=f.length,S=a.end;S<D;){var Q=f.charCodeAt(S),j=e.line,ue=1+S-e.lineStart;switch(Q){case 65279:case 9:case 32:case 44:++S;continue;case 10:++S,++e.line,e.lineStart=S;continue;case 13:10===f.charCodeAt(S+1)?S+=2:++S,++e.line,e.lineStart=S;continue;case 33:return new B.WU(p.BANG,S,S+1,j,ue,a);case 35:return ie(r,S,j,ue,a);case 36:return new B.WU(p.DOLLAR,S,S+1,j,ue,a);case 38:return new B.WU(p.AMP,S,S+1,j,ue,a);case 40:return new B.WU(p.PAREN_L,S,S+1,j,ue,a);case 41:return new B.WU(p.PAREN_R,S,S+1,j,ue,a);case 46:if(46===f.charCodeAt(S+1)&&46===f.charCodeAt(S+2))return new B.WU(p.SPREAD,S,S+3,j,ue,a);break;case 58:return new B.WU(p.COLON,S,S+1,j,ue,a);case 61:return new B.WU(p.EQUALS,S,S+1,j,ue,a);case 64:return new B.WU(p.AT,S,S+1,j,ue,a);case 91:return new B.WU(p.BRACKET_L,S,S+1,j,ue,a);case 93:return new B.WU(p.BRACKET_R,S,S+1,j,ue,a);case 123:return new B.WU(p.BRACE_L,S,S+1,j,ue,a);case 124:return new B.WU(p.PIPE,S,S+1,j,ue,a);case 125:return new B.WU(p.BRACE_R,S,S+1,j,ue,a);case 34:return 34===f.charCodeAt(S+1)&&34===f.charCodeAt(S+2)?fe(r,S,j,ue,a,e):V(r,S,j,ue,a);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return ze(r,S,Q,j,ue,a);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return ce(r,S,j,ue,a)}throw P(r,S,me(Q))}return new B.WU(p.EOF,D,D,e.line,1+S-e.lineStart,a)}function me(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(ye(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(ye(e),".")}function ie(e,a,r,f,D){var Q,S=e.body,j=a;do{Q=S.charCodeAt(++j)}while(!isNaN(Q)&&(Q>31||9===Q));return new B.WU(p.COMMENT,a,j,r,f,D,S.slice(a+1,j))}function ze(e,a,r,f,D,S){var Q=e.body,j=r,ue=a,Le=!1;if(45===j&&(j=Q.charCodeAt(++ue)),48===j){if((j=Q.charCodeAt(++ue))>=48&&j<=57)throw P(e,ue,"Invalid number, unexpected digit after 0: ".concat(ye(j),"."))}else ue=Oe(e,ue,j),j=Q.charCodeAt(ue);if(46===j&&(Le=!0,j=Q.charCodeAt(++ue),ue=Oe(e,ue,j),j=Q.charCodeAt(ue)),(69===j||101===j)&&(Le=!0,(43===(j=Q.charCodeAt(++ue))||45===j)&&(j=Q.charCodeAt(++ue)),ue=Oe(e,ue,j),j=Q.charCodeAt(ue)),46===j||function De(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(j))throw P(e,ue,"Invalid number, expected digit but got: ".concat(ye(j),"."));return new B.WU(Le?p.FLOAT:p.INT,a,ue,f,D,S,Q.slice(a,ue))}function Oe(e,a,r){var f=e.body,D=a,S=r;if(S>=48&&S<=57){do{S=f.charCodeAt(++D)}while(S>=48&&S<=57);return D}throw P(e,D,"Invalid number, expected digit but got: ".concat(ye(S),"."))}function V(e,a,r,f,D){for(var S=e.body,Q=a+1,j=Q,ue=0,Le="";Q<S.length&&!isNaN(ue=S.charCodeAt(Q))&&10!==ue&&13!==ue;){if(34===ue)return Le+=S.slice(j,Q),new B.WU(p.STRING,a,Q+1,r,f,D,Le);if(ue<32&&9!==ue)throw P(e,Q,"Invalid character within String: ".concat(ye(ue),"."));if(++Q,92===ue){switch(Le+=S.slice(j,Q-1),ue=S.charCodeAt(Q)){case 34:Le+='"';break;case 47:Le+="/";break;case 92:Le+="\\";break;case 98:Le+="\b";break;case 102:Le+="\f";break;case 110:Le+="\n";break;case 114:Le+="\r";break;case 116:Le+="\t";break;case 117:var we=G(S.charCodeAt(Q+1),S.charCodeAt(Q+2),S.charCodeAt(Q+3),S.charCodeAt(Q+4));if(we<0){var it=S.slice(Q+1,Q+5);throw P(e,Q,"Invalid character escape sequence: \\u".concat(it,"."))}Le+=String.fromCharCode(we),Q+=4;break;default:throw P(e,Q,"Invalid character escape sequence: \\".concat(String.fromCharCode(ue),"."))}j=++Q}}throw P(e,Q,"Unterminated string.")}function fe(e,a,r,f,D,S){for(var Q=e.body,j=a+3,ue=j,Le=0,we="";j<Q.length&&!isNaN(Le=Q.charCodeAt(j));){if(34===Le&&34===Q.charCodeAt(j+1)&&34===Q.charCodeAt(j+2))return we+=Q.slice(ue,j),new B.WU(p.BLOCK_STRING,a,j+3,r,f,D,(0,X.W7)(we));if(Le<32&&9!==Le&&10!==Le&&13!==Le)throw P(e,j,"Invalid character within String: ".concat(ye(Le),"."));10===Le?(++j,++S.line,S.lineStart=j):13===Le?(10===Q.charCodeAt(j+1)?j+=2:++j,++S.line,S.lineStart=j):92===Le&&34===Q.charCodeAt(j+1)&&34===Q.charCodeAt(j+2)&&34===Q.charCodeAt(j+3)?(we+=Q.slice(ue,j)+'"""',ue=j+=4):++j}throw P(e,j,"Unterminated string.")}function G(e,a,r,f){return he(e)<<12|he(a)<<8|he(r)<<4|he(f)}function he(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function ce(e,a,r,f,D){for(var S=e.body,Q=S.length,j=a+1,ue=0;j!==Q&&!isNaN(ue=S.charCodeAt(j))&&(95===ue||ue>=48&&ue<=57||ue>=65&&ue<=90||ue>=97&&ue<=122);)++j;return new B.WU(p.NAME,a,j,r,f,D,S.slice(a,j))}var ge=function(){function e(r,f){var D=(0,K.T)(r)?r:new K.H(r);this._lexer=new xe(D),this._options=f}var a=e.prototype;return a.parseName=function(){var f=this.expectToken(p.NAME);return{kind:L.NAME,value:f.value,loc:this.loc(f)}},a.parseDocument=function(){var f=this._lexer.token;return{kind:L.DOCUMENT,definitions:this.many(p.SOF,this.parseDefinition,p.EOF),loc:this.loc(f)}},a.parseDefinition=function(){if(this.peek(p.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(p.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},a.parseOperationDefinition=function(){var f=this._lexer.token;if(this.peek(p.BRACE_L))return{kind:L.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(f)};var S,D=this.parseOperationType();return this.peek(p.NAME)&&(S=this.parseName()),{kind:L.OPERATION_DEFINITION,operation:D,name:S,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseOperationType=function(){var f=this.expectToken(p.NAME);switch(f.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(f)},a.parseVariableDefinitions=function(){return this.optionalMany(p.PAREN_L,this.parseVariableDefinition,p.PAREN_R)},a.parseVariableDefinition=function(){var f=this._lexer.token;return{kind:L.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(p.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(p.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(f)}},a.parseVariable=function(){var f=this._lexer.token;return this.expectToken(p.DOLLAR),{kind:L.VARIABLE,name:this.parseName(),loc:this.loc(f)}},a.parseSelectionSet=function(){var f=this._lexer.token;return{kind:L.SELECTION_SET,selections:this.many(p.BRACE_L,this.parseSelection,p.BRACE_R),loc:this.loc(f)}},a.parseSelection=function(){return this.peek(p.SPREAD)?this.parseFragment():this.parseField()},a.parseField=function(){var S,Q,f=this._lexer.token,D=this.parseName();return this.expectOptionalToken(p.COLON)?(S=D,Q=this.parseName()):Q=D,{kind:L.FIELD,alias:S,name:Q,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(p.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(f)}},a.parseArguments=function(f){return this.optionalMany(p.PAREN_L,f?this.parseConstArgument:this.parseArgument,p.PAREN_R)},a.parseArgument=function(){var f=this._lexer.token,D=this.parseName();return this.expectToken(p.COLON),{kind:L.ARGUMENT,name:D,value:this.parseValueLiteral(!1),loc:this.loc(f)}},a.parseConstArgument=function(){var f=this._lexer.token;return{kind:L.ARGUMENT,name:this.parseName(),value:(this.expectToken(p.COLON),this.parseValueLiteral(!0)),loc:this.loc(f)}},a.parseFragment=function(){var f=this._lexer.token;this.expectToken(p.SPREAD);var D=this.expectOptionalKeyword("on");return!D&&this.peek(p.NAME)?{kind:L.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(f)}:{kind:L.INLINE_FRAGMENT,typeCondition:D?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(f)}},a.parseFragmentDefinition=function(){var f,D=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(f=this._options)||void 0===f?void 0:f.experimentalFragmentVariables)?{kind:L.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(D)}:{kind:L.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(D)}},a.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},a.parseValueLiteral=function(f){var D=this._lexer.token;switch(D.kind){case p.BRACKET_L:return this.parseList(f);case p.BRACE_L:return this.parseObject(f);case p.INT:return this._lexer.advance(),{kind:L.INT,value:D.value,loc:this.loc(D)};case p.FLOAT:return this._lexer.advance(),{kind:L.FLOAT,value:D.value,loc:this.loc(D)};case p.STRING:case p.BLOCK_STRING:return this.parseStringLiteral();case p.NAME:switch(this._lexer.advance(),D.value){case"true":return{kind:L.BOOLEAN,value:!0,loc:this.loc(D)};case"false":return{kind:L.BOOLEAN,value:!1,loc:this.loc(D)};case"null":return{kind:L.NULL,loc:this.loc(D)};default:return{kind:L.ENUM,value:D.value,loc:this.loc(D)}}case p.DOLLAR:if(!f)return this.parseVariable()}throw this.unexpected()},a.parseStringLiteral=function(){var f=this._lexer.token;return this._lexer.advance(),{kind:L.STRING,value:f.value,block:f.kind===p.BLOCK_STRING,loc:this.loc(f)}},a.parseList=function(f){var D=this,S=this._lexer.token;return{kind:L.LIST,values:this.any(p.BRACKET_L,function(){return D.parseValueLiteral(f)},p.BRACKET_R),loc:this.loc(S)}},a.parseObject=function(f){var D=this,S=this._lexer.token;return{kind:L.OBJECT,fields:this.any(p.BRACE_L,function(){return D.parseObjectField(f)},p.BRACE_R),loc:this.loc(S)}},a.parseObjectField=function(f){var D=this._lexer.token,S=this.parseName();return this.expectToken(p.COLON),{kind:L.OBJECT_FIELD,name:S,value:this.parseValueLiteral(f),loc:this.loc(D)}},a.parseDirectives=function(f){for(var D=[];this.peek(p.AT);)D.push(this.parseDirective(f));return D},a.parseDirective=function(f){var D=this._lexer.token;return this.expectToken(p.AT),{kind:L.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(f),loc:this.loc(D)}},a.parseTypeReference=function(){var D,f=this._lexer.token;return this.expectOptionalToken(p.BRACKET_L)?(D=this.parseTypeReference(),this.expectToken(p.BRACKET_R),D={kind:L.LIST_TYPE,type:D,loc:this.loc(f)}):D=this.parseNamedType(),this.expectOptionalToken(p.BANG)?{kind:L.NON_NULL_TYPE,type:D,loc:this.loc(f)}:D},a.parseNamedType=function(){var f=this._lexer.token;return{kind:L.NAMED_TYPE,name:this.parseName(),loc:this.loc(f)}},a.parseTypeSystemDefinition=function(){var f=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(f.kind===p.NAME)switch(f.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(f)},a.peekDescription=function(){return this.peek(p.STRING)||this.peek(p.BLOCK_STRING)},a.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},a.parseSchemaDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("schema");var S=this.parseDirectives(!0),Q=this.many(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);return{kind:L.SCHEMA_DEFINITION,description:D,directives:S,operationTypes:Q,loc:this.loc(f)}},a.parseOperationTypeDefinition=function(){var f=this._lexer.token,D=this.parseOperationType();this.expectToken(p.COLON);var S=this.parseNamedType();return{kind:L.OPERATION_TYPE_DEFINITION,operation:D,type:S,loc:this.loc(f)}},a.parseScalarTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("scalar");var S=this.parseName(),Q=this.parseDirectives(!0);return{kind:L.SCALAR_TYPE_DEFINITION,description:D,name:S,directives:Q,loc:this.loc(f)}},a.parseObjectTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("type");var S=this.parseName(),Q=this.parseImplementsInterfaces(),j=this.parseDirectives(!0),ue=this.parseFieldsDefinition();return{kind:L.OBJECT_TYPE_DEFINITION,description:D,name:S,interfaces:Q,directives:j,fields:ue,loc:this.loc(f)}},a.parseImplementsInterfaces=function(){var f;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLImplementsInterfaces)){var D=[];this.expectOptionalToken(p.AMP);do{D.push(this.parseNamedType())}while(this.expectOptionalToken(p.AMP)||this.peek(p.NAME));return D}return this.delimitedMany(p.AMP,this.parseNamedType)},a.parseFieldsDefinition=function(){var f;return!0===(null===(f=this._options)||void 0===f?void 0:f.allowLegacySDLEmptyFields)&&this.peek(p.BRACE_L)&&this._lexer.lookahead().kind===p.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(p.BRACE_L,this.parseFieldDefinition,p.BRACE_R)},a.parseFieldDefinition=function(){var f=this._lexer.token,D=this.parseDescription(),S=this.parseName(),Q=this.parseArgumentDefs();this.expectToken(p.COLON);var j=this.parseTypeReference(),ue=this.parseDirectives(!0);return{kind:L.FIELD_DEFINITION,description:D,name:S,arguments:Q,type:j,directives:ue,loc:this.loc(f)}},a.parseArgumentDefs=function(){return this.optionalMany(p.PAREN_L,this.parseInputValueDef,p.PAREN_R)},a.parseInputValueDef=function(){var f=this._lexer.token,D=this.parseDescription(),S=this.parseName();this.expectToken(p.COLON);var j,Q=this.parseTypeReference();this.expectOptionalToken(p.EQUALS)&&(j=this.parseValueLiteral(!0));var ue=this.parseDirectives(!0);return{kind:L.INPUT_VALUE_DEFINITION,description:D,name:S,type:Q,defaultValue:j,directives:ue,loc:this.loc(f)}},a.parseInterfaceTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("interface");var S=this.parseName(),Q=this.parseImplementsInterfaces(),j=this.parseDirectives(!0),ue=this.parseFieldsDefinition();return{kind:L.INTERFACE_TYPE_DEFINITION,description:D,name:S,interfaces:Q,directives:j,fields:ue,loc:this.loc(f)}},a.parseUnionTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("union");var S=this.parseName(),Q=this.parseDirectives(!0),j=this.parseUnionMemberTypes();return{kind:L.UNION_TYPE_DEFINITION,description:D,name:S,directives:Q,types:j,loc:this.loc(f)}},a.parseUnionMemberTypes=function(){return this.expectOptionalToken(p.EQUALS)?this.delimitedMany(p.PIPE,this.parseNamedType):[]},a.parseEnumTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("enum");var S=this.parseName(),Q=this.parseDirectives(!0),j=this.parseEnumValuesDefinition();return{kind:L.ENUM_TYPE_DEFINITION,description:D,name:S,directives:Q,values:j,loc:this.loc(f)}},a.parseEnumValuesDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseEnumValueDefinition,p.BRACE_R)},a.parseEnumValueDefinition=function(){var f=this._lexer.token,D=this.parseDescription(),S=this.parseName(),Q=this.parseDirectives(!0);return{kind:L.ENUM_VALUE_DEFINITION,description:D,name:S,directives:Q,loc:this.loc(f)}},a.parseInputObjectTypeDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("input");var S=this.parseName(),Q=this.parseDirectives(!0),j=this.parseInputFieldsDefinition();return{kind:L.INPUT_OBJECT_TYPE_DEFINITION,description:D,name:S,directives:Q,fields:j,loc:this.loc(f)}},a.parseInputFieldsDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseInputValueDef,p.BRACE_R)},a.parseTypeSystemExtension=function(){var f=this._lexer.lookahead();if(f.kind===p.NAME)switch(f.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(f)},a.parseSchemaExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var D=this.parseDirectives(!0),S=this.optionalMany(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);if(0===D.length&&0===S.length)throw this.unexpected();return{kind:L.SCHEMA_EXTENSION,directives:D,operationTypes:S,loc:this.loc(f)}},a.parseScalarTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var D=this.parseName(),S=this.parseDirectives(!0);if(0===S.length)throw this.unexpected();return{kind:L.SCALAR_TYPE_EXTENSION,name:D,directives:S,loc:this.loc(f)}},a.parseObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var D=this.parseName(),S=this.parseImplementsInterfaces(),Q=this.parseDirectives(!0),j=this.parseFieldsDefinition();if(0===S.length&&0===Q.length&&0===j.length)throw this.unexpected();return{kind:L.OBJECT_TYPE_EXTENSION,name:D,interfaces:S,directives:Q,fields:j,loc:this.loc(f)}},a.parseInterfaceTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var D=this.parseName(),S=this.parseImplementsInterfaces(),Q=this.parseDirectives(!0),j=this.parseFieldsDefinition();if(0===S.length&&0===Q.length&&0===j.length)throw this.unexpected();return{kind:L.INTERFACE_TYPE_EXTENSION,name:D,interfaces:S,directives:Q,fields:j,loc:this.loc(f)}},a.parseUnionTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var D=this.parseName(),S=this.parseDirectives(!0),Q=this.parseUnionMemberTypes();if(0===S.length&&0===Q.length)throw this.unexpected();return{kind:L.UNION_TYPE_EXTENSION,name:D,directives:S,types:Q,loc:this.loc(f)}},a.parseEnumTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var D=this.parseName(),S=this.parseDirectives(!0),Q=this.parseEnumValuesDefinition();if(0===S.length&&0===Q.length)throw this.unexpected();return{kind:L.ENUM_TYPE_EXTENSION,name:D,directives:S,values:Q,loc:this.loc(f)}},a.parseInputObjectTypeExtension=function(){var f=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var D=this.parseName(),S=this.parseDirectives(!0),Q=this.parseInputFieldsDefinition();if(0===S.length&&0===Q.length)throw this.unexpected();return{kind:L.INPUT_OBJECT_TYPE_EXTENSION,name:D,directives:S,fields:Q,loc:this.loc(f)}},a.parseDirectiveDefinition=function(){var f=this._lexer.token,D=this.parseDescription();this.expectKeyword("directive"),this.expectToken(p.AT);var S=this.parseName(),Q=this.parseArgumentDefs(),j=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var ue=this.parseDirectiveLocations();return{kind:L.DIRECTIVE_DEFINITION,description:D,name:S,arguments:Q,repeatable:j,locations:ue,loc:this.loc(f)}},a.parseDirectiveLocations=function(){return this.delimitedMany(p.PIPE,this.parseDirectiveLocation)},a.parseDirectiveLocation=function(){var f=this._lexer.token,D=this.parseName();if(void 0!==k[D.value])return D;throw this.unexpected(f)},a.loc=function(f){var D;if(!0!==(null===(D=this._options)||void 0===D?void 0:D.noLocation))return new B.Ye(f,this._lexer.lastToken,this._lexer.source)},a.peek=function(f){return this._lexer.token.kind===f},a.expectToken=function(f){var D=this._lexer.token;if(D.kind===f)return this._lexer.advance(),D;throw P(this._lexer.source,D.start,"Expected ".concat(U(f),", found ").concat(Ae(D),"."))},a.expectOptionalToken=function(f){var D=this._lexer.token;if(D.kind===f)return this._lexer.advance(),D},a.expectKeyword=function(f){var D=this._lexer.token;if(D.kind!==p.NAME||D.value!==f)throw P(this._lexer.source,D.start,'Expected "'.concat(f,'", found ').concat(Ae(D),"."));this._lexer.advance()},a.expectOptionalKeyword=function(f){var D=this._lexer.token;return D.kind===p.NAME&&D.value===f&&(this._lexer.advance(),!0)},a.unexpected=function(f){var D=null!=f?f:this._lexer.token;return P(this._lexer.source,D.start,"Unexpected ".concat(Ae(D),"."))},a.any=function(f,D,S){this.expectToken(f);for(var Q=[];!this.expectOptionalToken(S);)Q.push(D.call(this));return Q},a.optionalMany=function(f,D,S){if(this.expectOptionalToken(f)){var Q=[];do{Q.push(D.call(this))}while(!this.expectOptionalToken(S));return Q}return[]},a.many=function(f,D,S){this.expectToken(f);var Q=[];do{Q.push(D.call(this))}while(!this.expectOptionalToken(S));return Q},a.delimitedMany=function(f,D){this.expectOptionalToken(f);var S=[];do{S.push(D.call(this))}while(this.expectOptionalToken(f));return S},e}();function Ae(e){var a=e.value;return U(e.kind)+(null!=a?' "'.concat(a,'"'):"")}function U(e){return function se(e){return e===p.BANG||e===p.DOLLAR||e===p.AMP||e===p.PAREN_L||e===p.PAREN_R||e===p.SPREAD||e===p.COLON||e===p.EQUALS||e===p.AT||e===p.BRACKET_L||e===p.BRACKET_R||e===p.BRACE_L||e===p.PIPE||e===p.BRACE_R}(e)?'"'.concat(e,'"'):e}var _e=new Map,W=new Map,Se=!0,be=!1;function Ge(e){return e.replace(/[\s,]+/g," ").trim()}function Ve(e){var a=Ge(e);if(!_e.has(a)){var r=function Pe(e,a){return new ge(e,a).parseDocument()}(e,{experimentalFragmentVariables:be,allowLegacyFragmentVariables:be});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");_e.set(a,function Ke(e){var a=new Set(e.definitions);a.forEach(function(f){f.loc&&delete f.loc,Object.keys(f).forEach(function(D){var S=f[D];S&&"object"==typeof S&&a.add(S)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(function nt(e){var a=new Set,r=[];return e.definitions.forEach(function(f){if("FragmentDefinition"===f.kind){var D=f.name.value,S=function tt(e){return Ge(e.source.body.substring(e.start,e.end))}(f.loc),Q=W.get(D);Q&&!Q.has(S)?Se&&console.warn("Warning: fragment with name "+D+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):Q||W.set(D,Q=new Set),Q.add(S),a.has(S)||(a.add(S),r.push(f))}else r.push(f)}),(0,i.pi)((0,i.pi)({},e),{definitions:r})}(r)))}return _e.get(a)}function y(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var f=e[0];return a.forEach(function(D,S){f+=D&&"Document"===D.kind?D.loc.source.body:D,f+=e[S+1]}),Ve(f)}var e,Ue_gql=y;(e=y||(y={})).gql=Ue_gql,e.resetCaches=function He(){_e.clear(),W.clear()},e.disableFragmentWarnings=function Xe(){Se=!1},e.enableExperimentalFragmentVariables=function Ye(){be=!0},e.disableExperimentalFragmentVariables=function lt(){be=!1},y.default=y;var v=o(9298),l=o(5e3),Ce=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(Ce||(Ce={})),Ce))(),g=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(g||(g={})),g))(),ve=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(ve||(ve={})),ve))(),Ee=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(Ee||(Ee={})),Ee))(),Re=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(Re||(Re={})),Re))(),$e=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}($e||($e={})),$e))(),Be=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Be||(Be={})),Be))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),qe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(qe||(qe={})),qe))(),rt=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(rt||(rt={})),rt))(),ct=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(ct||(ct={})),ct))(),Ze=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Ze||(Ze={})),Ze))(),ot=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(ot||(ot={})),ot))(),ut=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ut||(ut={})),ut))(),st=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(st||(st={})),st))(),C=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(C||(C={})),C))(),ee=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(ee||(ee={})),ee))(),x=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(x||(x={})),x))(),pe=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(pe||(pe={})),pe))(),Ne=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(Ne||(Ne={})),Ne))(),Fe=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Fe||(Fe={})),Fe))(),mt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(zt||(zt={})),zt))(),_t=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(_t||(_t={})),_t))(),Ct=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Ct||(Ct={})),Ct))(),yt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(yt||(yt={})),yt))(),Tt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(It||(It={})),It))(),Et=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Et||(Et={})),Et))(),Dt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Dt||(Dt={})),Dt))(),St=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(St||(St={})),St))(),Ot=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Ot||(Ot={})),Ot))(),Mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Mt||(Mt={})),Mt))(),At=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(At||(At={})),At))(),Nt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Nt||(Nt={})),Nt))(),at=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(at||(at={})),at))(),Gt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(Gt||(Gt={})),Gt))(),xt=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(xt||(xt={})),xt))(),Lt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Lt||(Lt={})),Lt))(),Pt=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(Pt||(Pt={})),Pt))(),Ft=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(Ft||(Ft={})),Ft))();const Wt=y`
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
    `,kt=y`
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
    `,Jt=y`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Qt=y`
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
    `,jt=y`
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
    `,Kt=y`
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
    `,Ht=y`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,Zt=y`
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
    `,m=y`
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
    ${Zt}`,oe=y`
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
    `,d=y`
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
    `,de=y`
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
    ${y`
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
    `}`,Me=y`
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
    `,et=y`
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
    `,Bt=y`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,an=y`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,cn=y`
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
    `,ln=y`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,un=y`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,dn=y`
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
    `,pn=y`
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
    `,mn=y`
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
    `,gn=y`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,fn=y`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,hn=y`
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
}
    `,vn=y`
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
    `,zn=y`
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
    `,_n=y`
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
    `,Cn=y`
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
    `,yn=y`
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
    `,Tn=y`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,In=y`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,En=y`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Dn=y`
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
    `,Sn=y`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,On=y`
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
    `,Mn=y`
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
    `,An=y`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Nn=y`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,xn=y`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,tn=y`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,nn=y`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,Ln=y`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,on=y`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Pn=y`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,Fn=(y`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,y`
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
    `),bn=y`
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
    `,Rn=y`
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
    `,$n=y`
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
    `,Bn=y`
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
    ${y`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `}`,wn=y`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
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
    `,Un=y`
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
    `,Qn=y`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
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
    `,Zn=y`
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
    `,Vn=y`
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
    `,Yn=y`
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
    `,Wn=y`
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
    `,kn=y`
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
    `,Jn=y`
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
    `,jn=y`
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
    `,Kn=y`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Hn=y`
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
    `,Xn=y`
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
    `,qn=y`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,eo=y`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,to=y`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,rn=y`
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
    ${Zt}`,no=y`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,oo=y`
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
    `,io=y`
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
    `,ro=y`
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
    `,ao=y`
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
    ${y`
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
    `}`,co=y`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Wt}`;let lo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=co}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=y`
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
    ${kt}`;let po=(()=>{class e extends v.AE{constructor(r){super(r),this.document=uo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=y`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Jt}`;let go=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fo=y`
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
        id
        name
        nctId
        evidenceCount
        sourceCount
        link
      }
    }
  }
}
    `;let ho=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=y`
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
    ${Qt}`;let zo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=vo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=y`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${jt}`;let Co=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=y`
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
    `;let To=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=y`
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
    ${Kt}`;let Eo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Io}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=y`
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
    `;let So=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Do}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oo=y`
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
    ${Ht}`;let Mo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Oo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=y`
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
    `;let No=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ao}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xo=y`
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
    ${m}`;let Lo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=y`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${oe}`;let Fo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Po}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bo=y`
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
    ${d}`;let Ro=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $o=y`
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
    ${de}`;let Go=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$o}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bo=y`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Me}`;let wo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=y`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${et}`;let Qo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Uo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=y`
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
    `;let Vo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=y`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${Bt}`;let Wo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=y`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${an}`;let Jo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ko}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=y`
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
    ${cn}`;let Ko=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=y`
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
    `;let Xo=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ho}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=y`
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
    ${ln}`;let ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qo}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ti=y`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ni=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ti}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=y`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ii=(()=>{class e extends v.mm{constructor(r){super(r),this.document=oi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ri=y`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${un}`;let si=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ri}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ai=y`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${dn}`;let ci=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const li=y`
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
    ${pn}`;let ui=(()=>{class e extends v.AE{constructor(r){super(r),this.document=li}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const di=y`
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
    ${mn}`;let pi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mi=y`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${gn}`;let gi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=mi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=y`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let hi=(()=>{class e extends v.mm{constructor(r){super(r),this.document=fi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vi=y`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let zi=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _i=y`
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
    ${fn}`;let Ci=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yi=y`
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
    ${hn}`;let Ti=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Ii=y`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${vn}`;let Ei=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ii}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=y`
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
    ${zn}`;let Si=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Di}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oi=y`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${_n}`;let Mi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Oi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=y`
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
    ${Cn}`;let Ni=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ai}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=y`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${yn}`;let Li=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=y`
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
    ${Tn}`;let Fi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=y`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${In}`;let Ri=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=y`
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
    ${En}`;let Gi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$i}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=y`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Dn}`;let wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ui=y`
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
    ${Sn}`;let Qi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ui}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=y`
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
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;let Vi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yi=y`
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
    `;let Wi=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=y`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Ji=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ki}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ji=y`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${On}`;let Ki=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ji}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hi=y`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Xi=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Hi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qi=y`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let er=(()=>{class e extends v.mm{constructor(r){super(r),this.document=qi}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=y`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Qt}`;let nr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=tr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const or=y`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Mn}`;let ir=(()=>{class e extends v.AE{constructor(r){super(r),this.document=or}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=y`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let sr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=rr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=y`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let cr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=y`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let ur=(()=>{class e extends v.AE{constructor(r){super(r),this.document=lr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=y`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let pr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=y`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${An}`;let gr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=mr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=y`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let hr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=y`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${Nn}`;let zr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=y`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Cr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=y`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${xn}`;let Tr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=y`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Er=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ir}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=y`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Sr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Dr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Or=y`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${tn}`;let Mr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Or}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=y`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Nr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ar}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xr=y`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Lr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=xr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=y`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Fr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Pr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const br=y`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${nn}`;let Rr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=br}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $r=y`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${tn}`;let Gr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$r}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Br=y`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${on}`;let wr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Br}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ur=y`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Pn}`;let Qr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ur}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${on}`;const Zr=y`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Vr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=y`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Fn}`;let Wr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Yr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kr=y`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Jr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=kr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=y`
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
    `;let Kr=(()=>{class e extends v.AE{constructor(r){super(r),this.document=jr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${bn}`;const Hr=y`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Xr=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Hr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=y`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let es=(()=>{class e extends v.mm{constructor(r){super(r),this.document=qr}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=y`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let ns=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ts}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const os=y`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Rn}`;let is=(()=>{class e extends v.AE{constructor(r){super(r),this.document=os}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=y`
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
    `;let ss=(()=>{class e extends v.mm{constructor(r){super(r),this.document=rs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=y`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let cs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=as}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=y`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let us=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ls}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=y`
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
    `;let ps=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=y`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let gs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ms}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=y`
    query Countries {
  countries {
    id
    name
  }
}
    `;let hs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=y`
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
    `;let zs=(()=>{class e extends v.mm{constructor(r){super(r),this.document=vs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=y`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${$n}`;let Cs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=y`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Ts=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=y`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Bn}`;let Es=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Is}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=y`
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
    `;let Ss=(()=>{class e extends v.mm{constructor(r){super(r),this.document=Ds}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Os=y`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${wn}`;let Ms=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Os}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const As=y`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Un}`;let Ns=(()=>{class e extends v.AE{constructor(r){super(r),this.document=As}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xs=y`
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
    `;let Ls=(()=>{class e extends v.AE{constructor(r){super(r),this.document=xs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=y`
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
    `;let Fs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ps}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bs=y`
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
    `;let Rs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=bs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $s=y`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Qn}`;let Gs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=$s}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bs=y`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Zn}`;let ws=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Bs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Us=y`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Vn}`;let Qs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Us}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zs=y`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Yn}`;let Vs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Zs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ys=y`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Wn}`;let Ws=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ys}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ks=y`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${kn}`;let Js=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ks}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=y`
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
    ${Jn}`;let Ks=(()=>{class e extends v.AE{constructor(r){super(r),this.document=js}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hs=y`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let Xs=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Hs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qs=y`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${jn}`;let ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=qs}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ta=y`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Kn}`;let na=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ta}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oa=y`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Hn}`;let ia=(()=>{class e extends v.AE{constructor(r){super(r),this.document=oa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ra=y`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Xn}`;let sa=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ra}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const aa=y`
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
    ${to}
${eo}
${qn}
${rn}`;let ca=(()=>{class e extends v.AE{constructor(r){super(r),this.document=aa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const la=y`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${rn}`;let ua=(()=>{class e extends v.mm{constructor(r){super(r),this.document=la}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const da=y`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${no}`;let pa=(()=>{class e extends v.mm{constructor(r){super(r),this.document=da}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ma=y`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let ga=(()=>{class e extends v.mm{constructor(r){super(r),this.document=ma}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fa=y`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${oo}`;let ha=(()=>{class e extends v.AE{constructor(r){super(r),this.document=fa}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
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
    `;const va=y`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${io}`;let za=(()=>{class e extends v.AE{constructor(r){super(r),this.document=va}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _a=y`
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
    `;let Ca=(()=>{class e extends v.AE{constructor(r){super(r),this.document=_a}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ya=y`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${ro}`;let Ta=(()=>{class e extends v.AE{constructor(r){super(r),this.document=ya}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ia=y`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${ao}`;let Ea=(()=>{class e extends v.AE{constructor(r){super(r),this.document=Ia}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(Te,te,o)=>{o.r(te),o.d(te,{LayoutModule:()=>Zt});var i=o(9808),t=o(325),n=o(5e3),s=o(9350),N=o(8929),_=o(7625),c=o(655),J=o(4090),u=o(1721),I=o(4219),O=o(925),Y=o(647),$=o(226),ne=o(5113);const R=["*"],le=["nz-sider-trigger",""];function H(m,oe){}function Z(m,oe){if(1&m&&(n.ynx(0),n.YNc(1,H,0,0,"ng-template",3),n.BQk()),2&m){const d=n.oxw(),T=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",d.nzZeroTrigger||T)}}function w(m,oe){}function A(m,oe){if(1&m&&(n.ynx(0),n.YNc(1,w,0,0,"ng-template",3),n.BQk()),2&m){const d=n.oxw(),T=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",d.nzTrigger||T)}}function b(m,oe){if(1&m&&n._UZ(0,"i",5),2&m){const d=n.oxw(2);n.Q6J("nzType",d.nzCollapsed?"right":"left")}}function ae(m,oe){if(1&m&&n._UZ(0,"i",5),2&m){const d=n.oxw(2);n.Q6J("nzType",d.nzCollapsed?"left":"right")}}function F(m,oe){if(1&m&&(n.YNc(0,b,1,1,"i",4),n.YNc(1,ae,1,1,"i",4)),2&m){const d=n.oxw();n.Q6J("ngIf",!d.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",d.nzReverseArrow)}}function E(m,oe){1&m&&n._UZ(0,"i",6)}function h(m,oe){if(1&m){const d=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(d);const de=n.oxw();return de.setCollapsed(!de.nzCollapsed)}),n.qZA()}if(2&m){const d=n.oxw();n.Q6J("matchBreakPoint",d.matchBreakPoint)("nzCollapsedWidth",d.nzCollapsedWidth)("nzCollapsed",d.nzCollapsed)("nzBreakpoint",d.nzBreakpoint)("nzReverseArrow",d.nzReverseArrow)("nzTrigger",d.nzTrigger)("nzZeroTrigger",d.nzZeroTrigger)("siderWidth",d.widthSetting)}}let M=(()=>{class m{constructor(d,T){this.elementRef=d,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:R,decls:1,vars:0,template:function(d,T){1&d&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),L=(()=>{class m{constructor(d,T){this.elementRef=d,this.renderer=T,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(d,T){1&d&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),B=(()=>{class m{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(d,T){2&d&&(n.Udp("width",T.isNormalTrigger?T.siderWidth:null),n.ekj("ant-layout-sider-trigger",T.isNormalTrigger)("ant-layout-sider-zero-width-trigger",T.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",T.isZeroTrigger&&T.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",T.isZeroTrigger&&!T.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:le,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(d,T){1&d&&(n.YNc(0,Z,2,1,"ng-container",0),n.YNc(1,A,2,1,"ng-container",0),n.YNc(2,F,2,2,"ng-template",null,1,n.W1O),n.YNc(4,E,1,0,"ng-template",null,2,n.W1O)),2&d&&(n.Q6J("ngIf",T.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",T.isNormalTrigger))},directives:[i.O5,i.tP,Y.Ls],encapsulation:2,changeDetection:0}),m})(),p=(()=>{class m{constructor(d,T,de){this.platform=d,this.cdr=T,this.breakpointService=de,this.destroy$=new N.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,u.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(d){d!==this.nzCollapsed&&(this.nzCollapsed=d,this.nzCollapsedChange.emit(d),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(J.ow,!0).pipe((0,_.R)(this.destroy$)).subscribe(d=>{const T=this.nzBreakpoint;T&&(0,u.ov)().subscribe(()=>{this.matchBreakPoint=!d[T],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(d){const{nzCollapsed:T,nzCollapsedWidth:de,nzWidth:Me}=d;(T||de||Me)&&this.updateStyleMap(),T&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(O.t4),n.Y36(n.sBO),n.Y36(J.r3))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-sider"]],contentQueries:function(d,T,de){if(1&d&&n.Suo(de,I.wO,5),2&d){let Me;n.iGM(Me=n.CRH())&&(T.nzMenuDirective=Me.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(d,T){2&d&&(n.Udp("flex",T.flexSetting)("max-width",T.widthSetting)("min-width",T.widthSetting)("width",T.widthSetting),n.ekj("ant-layout-sider-zero-width",T.nzCollapsed&&0===T.nzCollapsedWidth)("ant-layout-sider-light","light"===T.nzTheme)("ant-layout-sider-dark","dark"===T.nzTheme)("ant-layout-sider-collapsed",T.nzCollapsed)("ant-layout-sider-has-trigger",T.nzCollapsible&&null!==T.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:R,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(d,T){1&d&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,h,1,8,"div",1)),2&d&&(n.xp6(2),n.Q6J("ngIf",T.nzCollapsible&&null!==T.nzTrigger))},directives:[B,i.O5],encapsulation:2,changeDetection:0}),(0,c.gn)([(0,u.yF)()],m.prototype,"nzReverseArrow",void 0),(0,c.gn)([(0,u.yF)()],m.prototype,"nzCollapsible",void 0),(0,c.gn)([(0,u.yF)()],m.prototype,"nzCollapsed",void 0),m})(),K=(()=>{class m{constructor(d){this.directionality=d,this.dir="ltr",this.destroy$=new N.xQ}ngOnInit(){var d;this.dir=this.directionality.value,null===(d=this.directionality.change)||void 0===d||d.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(d){return new(d||m)(n.Y36($.Is,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-layout"]],contentQueries:function(d,T,de){if(1&d&&n.Suo(de,p,4),2&d){let Me;n.iGM(Me=n.CRH())&&(T.listOfNzSiderComponent=Me)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(d,T){2&d&&n.ekj("ant-layout-rtl","rtl"===T.dir)("ant-layout-has-sider",T.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:R,decls:1,vars:0,template:function(d,T){1&d&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),k=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[$.vT,i.ez,Y.PV,ne.xu,O.ud]]}),m})();var X=o(404),xe=o(1894),se=o(712),ye=o(373),q=o(1047),me=o(4182),ie=o(2845),ze=o(4832),Oe=o(969),V=o(3753),fe=o(2654),G=o(8514),he=o(6787),ce=o(2198),De=o(2868),Pe=o(6792),re=o(2986),Ie=o(7545),ge=o(1159),Ae=o(7429),U=o(8076);function _e(m,oe){if(1&m&&(n.ynx(0),n._uU(1),n.BQk()),2&m){const d=n.oxw();n.xp6(1),n.Oqu(d.nzLabel)}}const W=[[["nz-auto-option"]]],Se=["nz-auto-option"],be=["*"],Ge=["panel"],tt=["content"];function nt(m,oe){}function Ke(m,oe){1&m&&n.YNc(0,nt,0,0,"ng-template")}function Ve(m,oe){1&m&&n.Hsn(0)}function y(m,oe){if(1&m&&(n.TgZ(0,"nz-auto-option",8),n._uU(1),n.qZA()),2&m){const d=oe.$implicit;n.Q6J("nzValue",d)("nzLabel",d&&d.label?d.label:d),n.xp6(1),n.hij(" ",d&&d.label?d.label:d," ")}}function He(m,oe){if(1&m&&n.YNc(0,y,2,3,"nz-auto-option",7),2&m){const d=n.oxw(2);n.Q6J("ngForOf",d.nzDataSource)}}function Xe(m,oe){if(1&m){const d=n.EpF();n.TgZ(0,"div",0,1),n.NdJ("@slideMotion.done",function(de){return n.CHM(d),n.oxw().onAnimationEvent(de)}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.YNc(4,Ke,1,0,void 0,4),n.qZA(),n.qZA(),n.qZA(),n.YNc(5,Ve,1,0,"ng-template",null,5,n.W1O),n.YNc(7,He,1,1,"ng-template",null,6,n.W1O)}if(2&m){const d=n.MAs(6),T=n.MAs(8),de=n.oxw();n.ekj("ant-select-dropdown-hidden",!de.showPanel)("ant-select-dropdown-rtl","rtl"===de.dir),n.Q6J("ngClass",de.nzOverlayClassName)("ngStyle",de.nzOverlayStyle)("nzNoAnimation",null==de.noAnimation?null:de.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==de.noAnimation?null:de.noAnimation.nzNoAnimation),n.xp6(4),n.Q6J("ngTemplateOutlet",de.nzDataSource?T:d)}}let Ye=(()=>{class m{constructor(){}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Se,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(d,T){1&d&&(n.F$t(W),n.TgZ(0,"div",0),n.YNc(1,_e,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&d&&(n.xp6(1),n.Q6J("nzStringTemplateOutlet",T.nzLabel))},directives:[Oe.f],encapsulation:2,changeDetection:0}),m})();class lt{constructor(oe,d=!1){this.source=oe,this.isUserInput=d}}let Ue=(()=>{class m{constructor(d,T,de,Me){this.ngZone=d,this.changeDetectorRef=T,this.element=de,this.nzAutocompleteOptgroupComponent=Me,this.nzDisabled=!1,this.selectionChange=new n.vpe,this.mouseEntered=new n.vpe,this.active=!1,this.selected=!1,this.destroy$=new N.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,V.R)(this.element.nativeElement,"mouseenter").pipe((0,ce.h)(()=>this.mouseEntered.observers.length>0),(0,_.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,V.R)(this.element.nativeElement,"mousedown").pipe((0,_.R)(this.destroy$)).subscribe(d=>d.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(d=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),d&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,u.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(d=!1){this.selectionChange.emit(new lt(this,d))}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(Ye,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(d,T){1&d&&n.NdJ("click",function(){return T.selectViaInteraction()}),2&d&&(n.uIk("aria-selected",T.selected.toString())("aria-disabled",T.nzDisabled.toString()),n.ekj("ant-select-item-option-grouped",T.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",T.selected)("ant-select-item-option-active",T.active)("ant-select-item-option-disabled",T.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:be,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(d,T){1&d&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),(0,c.gn)([(0,u.yF)()],m.prototype,"nzDisabled",void 0),m})();const pt={provide:me.JU,useExisting:(0,n.Gpc)(()=>l),multi:!0};let l=(()=>{class m{constructor(d,T,de,Me,et){this.elementRef=d,this.overlay=T,this.viewContainerRef=de,this.nzInputGroupWhitSuffixOrPrefixDirective=Me,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new N.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,_.R)(this.destroy$)).subscribe(d=>{"void"===d.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(d){Promise.resolve(null).then(()=>this.setTriggerValue(d))}registerOnChange(d){this.onChange=d}registerOnTouched(d){this.onTouched=d}setDisabledState(d){this.elementRef.nativeElement.disabled=d,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(d){const T=d.keyCode,de=T===ge.LH||T===ge.JH;T===ge.hY&&d.preventDefault(),!this.panelOpen||T!==ge.hY&&T!==ge.Mf?this.panelOpen&&T===ge.K5?this.nzAutocomplete.showPanel&&(d.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&de&&this.nzAutocomplete.showPanel&&(d.stopPropagation(),d.preventDefault(),T===ge.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(d){const T=d.target,de=this.document;let Me=T.value;"number"===T.type&&(Me=""===Me?null:parseFloat(Me)),this.previousValue!==Me&&(this.previousValue=Me,this.onChange(Me),this.canOpen()&&de.activeElement===d.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,De.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Pe.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(d=>{this.setValueAndClose(d)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ce.h)(d=>!this.elementRef.nativeElement.contains(d.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function v(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Ae.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new ie.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const d=[new ie.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new ie.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(d).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const d=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==d?(this.nzAutocomplete.setActiveItem(d),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(d){const T=d.nzValue;this.setTriggerValue(d.getLabel()),this.onChange(T),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(d){const T=this.nzAutocomplete.getOption(d),de=T?T.getLabel():d;this.elementRef.nativeElement.value=null!=de?de:"",this.nzAutocomplete.nzBackfill||(this.previousValue=de)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const d=this.elementRef.nativeElement;return!d.readOnly&&!d.disabled}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(n.SBq),n.Y36(ie.aV),n.Y36(n.s_b),n.Y36(q.ke,8),n.Y36(i.K0,8))},m.\u0275dir=n.lG2({type:m,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(d,T){1&d&&n.NdJ("focusin",function(){return T.handleFocus()})("blur",function(){return T.handleBlur()})("input",function(Me){return T.handleInput(Me)})("keydown",function(Me){return T.handleKeydown(Me)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([pt])]}),m})(),Ce=(()=>{class m{constructor(d,T,de,Me){this.changeDetectorRef=d,this.ngZone=T,this.directionality=de,this.noAnimation=Me,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Bt)=>et===Bt,this.selectionChange=new n.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new N.xQ,this.animationStateChange=new n.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=fe.w.EMPTY,this.optionMouseEnterSubscription=fe.w.EMPTY,this.dataSourceChangeSubscription=fe.w.EMPTY,this.optionSelectionChanges=(0,G.P)(()=>this.options?(0,he.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ie.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,G.P)(()=>this.options?(0,he.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,re.q)(1),(0,Ie.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var d;null===(d=this.directionality.change)||void 0===d||d.pipe((0,_.R)(this.destroy$)).subscribe(T=>{this.dir=T,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(d){this.animationStateChange.emit(d)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(d){const T=this.options.get(d);T&&!T.active?(this.activeItem=T,this.activeItemIndex=d,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(d){return this.options.reduce((T,de,Me)=>-1===T?this.compareWith(d,de.nzValue)?Me:-1:T,-1)}getOption(d){return this.options.find(T=>this.compareWith(d,T.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(T=>{!T.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(d,T=!1){this.options.forEach(de=>{de!==d&&(T&&de.deselect(),de.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,ce.h)(d=>d.isUserInput)).subscribe(d=>{d.source.select(),d.source.setActiveStyles(),this.activeItem=d.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(d.source,!0),this.selectionChange.emit(d.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(d=>{d.setActiveStyles(),this.activeItem=d,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(d)})}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36($.Is,8),n.Y36(ze.P,9))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-autocomplete"]],contentQueries:function(d,T,de){if(1&d&&n.Suo(de,Ue,5),2&d){let Me;n.iGM(Me=n.CRH())&&(T.fromContentOptions=Me)}},viewQuery:function(d,T){if(1&d&&(n.Gf(n.Rgc,5),n.Gf(Ge,5),n.Gf(tt,5),n.Gf(Ue,5)),2&d){let de;n.iGM(de=n.CRH())&&(T.template=de.first),n.iGM(de=n.CRH())&&(T.panel=de.first),n.iGM(de=n.CRH())&&(T.content=de.first),n.iGM(de=n.CRH())&&(T.fromDataSourceOptions=de)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:be,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(d,T){1&d&&(n.F$t(),n.YNc(0,Xe,9,10,"ng-template"))},directives:[Ue,i.mk,i.PC,ze.P,i.tP,i.sg],encapsulation:2,data:{animation:[U.mF]},changeDetection:0}),(0,c.gn)([(0,u.yF)()],m.prototype,"nzDefaultActiveFirstOption",void 0),(0,c.gn)([(0,u.yF)()],m.prototype,"nzBackfill",void 0),m})(),z=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[$.vT,i.ez,ie.U8,me.u5,Oe.T,ze.g,q.o7]]}),m})();var g=o(6949);function ve(m,oe){1&m&&n._UZ(0,"i",5)}function Ee(m,oe){if(1&m){const d=n.EpF();n.ynx(0),n.TgZ(1,"a",6),n.TgZ(2,"nz-auto-option",7),n.NdJ("click",function(){n.CHM(d);const de=n.oxw();return de.searchQuery="",de.refresh()}),n.TgZ(3,"span"),n._UZ(4,"i",8),n._uU(5," \xa0 "),n._UZ(6,"span",9),n._UZ(7,"br"),n._UZ(8,"span",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const d=oe.$implicit,T=n.oxw();n.xp6(1),n.Q6J("routerLink",T.urlForResult(d)),n.xp6(1),n.Q6J("nzValue",T.urlForResult(d)),n.xp6(2),n.Q6J("nzType",T.iconNameForResult(d)),n.xp6(2),n.s9C("innerHTML",d.name,n.oJD),n.xp6(2),n.s9C("innerHTML",d.matchingText,n.oJD)}}let Re=(()=>{class m{constructor(d,T){this.gql=d,this.router=T,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,ye.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(d){switch(d.resultType){case se.rZD.EvidenceItem:return"civic:evidence";case se.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${d.resultType.toLowerCase()}`}}urlForResult(d){let T;switch(d.resultType){case se.rZD.VariantGroup:T="variant-groups";break;case se.rZD.EvidenceItem:T="evidence";break;default:T=`${d.resultType.toLowerCase()}s`}return`/${T}/${d.id}/summary`}quicksearchSelected(d){let T=d.target.value;this.searchQuery="",this.router.navigate([T])}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(se.ghc),n.Y36(t.F0))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(d,T){if(1&d&&(n.TgZ(0,"nz-input-group",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(Me){return T.searchQuery=Me})("ngModelChange",function(){return T.refresh()})("keyup.enter",function(Me){return T.quicksearchSelected(Me)}),n.qZA(),n.qZA(),n.YNc(2,ve,1,0,"ng-template",null,2,n.W1O),n.TgZ(4,"nz-autocomplete",null,3),n.YNc(6,Ee,9,5,"ng-container",4),n.ALo(7,"ngrxPush"),n.qZA()),2&d){const de=n.MAs(3),Me=n.MAs(5);n.Q6J("nzSuffix",de),n.xp6(1),n.Q6J("ngModel",T.searchQuery)("nzAutocomplete",Me),n.xp6(5),n.Q6J("ngForOf",n.lcZ(7,4,T.searchResults$))}},directives:[q.gB,q.ke,q.Zp,me.Fj,l,me.JJ,me.On,Y.Ls,Ce,i.sg,t.yS,Ue],pipes:[g.fM],styles:[""]}),m})();var We=o(1912),$e=o(4850),Be=o(1059),ke=o(2340),Je=o(8144),qe=o(6042),rt=o(2643),ct=o(2683),Ze=o(3677),ot=o(4401),ut=o(7881),st=o(3640),C=o(8785),ee=o(3434);function x(m,oe){if(1&m&&(n.TgZ(0,"button",25),n._uU(1," Add "),n._UZ(2,"i",26),n.qZA()),2&m){n.oxw(2);const d=n.MAs(14);n.Q6J("nzDropdownMenu",d)}}const pe=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function Ne(m,oe){if(1&m&&(n.TgZ(0,"nz-badge",27),n.TgZ(1,"button",28),n._UZ(2,"i",29),n.qZA(),n.qZA()),2&m){const d=n.oxw().ngrxLet,T=n.oxw().ngIf;n.Q6J("nzCount",d)("nzOverflowCount",999)("nzStyle",n.DdM(4,pe)),n.xp6(1),n.MGl("routerLink","/users/",T.id,"/notifications")}}const Fe=function(m){return{"update-coi":m}};function mt(m,oe){if(1&m&&n._UZ(0,"cvc-user-avatar",35),2&m){const d=n.oxw(3).ngIf;n.Q6J("user",d)("size",22)("ngClass",n.VKq(3,Fe,d.invalidCoi))}}function qt(m,oe){if(1&m&&(n.TgZ(0,"div",36),n._uU(1),n.qZA()),2&m){const d=n.oxw(3).ngIf;n.xp6(1),n.Oqu(d.username)}}function gt(m,oe){1&m&&n._UZ(0,"i",26)}function ft(m,oe){if(1&m&&(n.TgZ(0,"button",30),n.TgZ(1,"nz-space",31),n.YNc(2,mt,1,5,"cvc-user-avatar",32),n.YNc(3,qt,2,1,"div",33),n.YNc(4,gt,1,0,"i",34),n.qZA(),n.qZA()),2&m){n.oxw(2);const d=n.MAs(3);n.Q6J("nzDropdownMenu",d)}}function ht(m,oe){1&m&&(n.TgZ(0,"nz-space",21),n.YNc(1,x,3,1,"button",22),n.YNc(2,Ne,3,5,"nz-badge",23),n.YNc(3,ft,5,1,"button",24),n.qZA())}function vt(m,oe){if(1&m){const d=n.EpF();n.TgZ(0,"li",16),n.TgZ(1,"button",37),n.NdJ("click",function(){return n.CHM(d),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",38),n._uU(3," Please update COI statement "),n.qZA(),n.qZA()}}function zt(m,oe){1&m&&n._UZ(0,"li",13)}function _t(m,oe){1&m&&(n.TgZ(0,"li",39),n.TgZ(1,"a",40),n._uU(2," Admin Console "),n.qZA(),n.qZA())}function Ct(m,oe){if(1&m){const d=n.EpF();n.TgZ(0,"li",16),n.TgZ(1,"a",41),n.NdJ("click",function(){return n.CHM(d),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA(),n.qZA()}}const yt=function(m){return["/users",m]};function Tt(m,oe){if(1&m){const d=n.EpF();n.ynx(0),n.YNc(1,ht,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7),n.TgZ(4,"ul",8),n.YNc(5,vt,4,0,"li",9),n.YNc(6,zt,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,_t,3,0,"li",12),n._UZ(10,"li",13),n.TgZ(11,"li",14),n.NdJ("click",function(){return n.CHM(d),n.oxw().signOut()}),n._uU(12,"Sign Out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"nz-dropdown-menu",null,15),n.TgZ(15,"ul",8),n.TgZ(16,"li",16),n.TgZ(17,"a",17),n._uU(18," Evidence Item "),n.qZA(),n.qZA(),n.TgZ(19,"li",16),n.TgZ(20,"a",18),n._uU(21," Assertion "),n.qZA(),n.qZA(),n.TgZ(22,"li",16),n.TgZ(23,"a",19),n._uU(24," Source Suggestion "),n.qZA(),n.qZA(),n.YNc(25,Ct,3,0,"li",9),n.TgZ(26,"li",16),n.TgZ(27,"a",20),n._uU(28," Variant Group "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&m){const d=oe.ngIf,T=n.oxw();n.xp6(1),n.Q6J("ngrxLet",T.unreadCount$),n.xp6(4),n.Q6J("ngIf",d.invalidCoi),n.xp6(1),n.Q6J("ngIf",d.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(6,yt,d.id)),n.xp6(2),n.Q6J("ngIf",d.isAdmin),n.xp6(16),n.Q6J("ngIf",d.isEditor)}}function It(m,oe){1&m&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function Et(m,oe){if(1&m){const d=n.EpF();n.TgZ(0,"cvc-user-coi-form",42),n.NdJ("coiUpdatedEvent",function(){return n.CHM(d),n.oxw().coiUpdated()}),n.qZA()}}function Dt(m,oe){1&m&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function St(m,oe){1&m&&n._UZ(0,"cvc-variant-submit-form")}let en=(()=>{class m{constructor(d,T){this.queryService=d,this.unreadCountGql=T,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,$e.U)(({data:de})=>de.notifications.unreadCount),(0,Be.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,$e.U)(({data:de})=>de.notifications.unreadCount),(0,Be.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(s.a),n.Y36(se.Kmw))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(d,T){if(1&d&&(n.YNc(0,Tt,29,8,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(Me){return T.coiUpdateModalVisible=Me})("nzOnCancel",function(){return T.handleCoiModalCancel()}),n.YNc(3,It,2,0,"ng-template",null,2,n.W1O),n.YNc(5,Et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(Me){return T.addVariantModalVisible=Me})("nzOnCancel",function(){return T.addVariantModalVisible=!1}),n.YNc(8,Dt,2,0,"ng-template",null,4,n.W1O),n.YNc(10,St,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&d){const de=n.MAs(4),Me=n.MAs(6),et=n.MAs(9),Bt=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,T.viewer$)),n.xp6(2),n.Q6J("nzVisible",T.coiUpdateModalVisible)("nzContent",Me)("nzTitle",de)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",T.addVariantModalVisible)("nzContent",Bt)("nzTitle",et)("nzFooter",null)}},directives:[i.O5,g.eJ,Je.NU,Je.$1,qe.ix,rt.dQ,ct.w,Ze.wA,Ze.cm,Y.Ls,ot.x7,t.rH,ut.L,i.mk,Ze.RR,I.wO,I.r9,I.YV,t.yS,st.du,C.t,ee.G],pipes:[g.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),m})();function Ot(m,oe){1&m&&n._UZ(0,"img",58)}function Mt(m,oe){1&m&&n._UZ(0,"img",59)}function At(m,oe){1&m&&n._UZ(0,"cvc-login-button")}function Nt(m,oe){1&m&&n._UZ(0,"cvc-viewer-button")}const at=function(m){return{"is-collapsed":m}},xt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class m{constructor(d){this.viewerService=d,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(s.a))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-layout"]],decls:124,vars:46,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","file-add"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(d,T){1&d&&(n.TgZ(0,"nz-layout",0),n.TgZ(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(Me){return T.isCollapsed=Me}),n.TgZ(2,"a",2),n.TgZ(3,"div",3),n.YNc(4,Ot,1,0,"img",4),n.YNc(5,Mt,1,0,"img",5),n.qZA(),n.qZA(),n.TgZ(6,"ul",6),n.TgZ(7,"li",7),n.TgZ(8,"ul"),n.TgZ(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span"),n.TgZ(12,"a",10),n._uU(13,"Assertions"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span"),n.TgZ(17,"a",12),n._uU(18,"Evidence"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span"),n.TgZ(22,"a",14),n._uU(23,"Genes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span"),n.TgZ(27,"a",16),n._uU(28,"Variants"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span"),n.TgZ(32,"a",18),n._uU(33,"Variant Groups"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span"),n.TgZ(37,"a",20),n._uU(38,"Clinical Trials"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span"),n.TgZ(42,"a",22),n._uU(43,"Diseases"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span"),n.TgZ(47,"a",24),n._uU(48,"Drugs"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span"),n.TgZ(52,"a",26),n._uU(53,"Phenotypes"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span"),n.TgZ(57,"a",28),n._uU(58,"Sources"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span"),n.TgZ(62,"a",30),n._uU(63,"Variant Types"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(64,"li",7),n.TgZ(65,"ul"),n.TgZ(66,"li",8),n._UZ(67,"i",31),n.TgZ(68,"span"),n.TgZ(69,"a",32),n._uU(70," Activity "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span"),n.TgZ(74,"a",34),n._uU(75,"Queues"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"li",7),n.TgZ(77,"ul"),n.TgZ(78,"li",8),n._UZ(79,"i",35),n.TgZ(80,"span"),n.TgZ(81,"a",36),n._uU(82,"Contributors"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span"),n.TgZ(86,"a",38),n._uU(87,"Organizations"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(88,"li",7),n.TgZ(89,"ul"),n.TgZ(90,"li",8),n._UZ(91,"i",39),n.TgZ(92,"span"),n.TgZ(93,"a",40),n._uU(94,"Data Releases"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(95,"div",41),n._UZ(96,"img",42),n._UZ(97,"img",43),n.qZA(),n.qZA(),n.TgZ(98,"nz-layout",44),n.TgZ(99,"nz-header"),n.TgZ(100,"div",45),n.TgZ(101,"div",46),n.TgZ(102,"span",47),n.NdJ("click",function(){return T.isCollapsed=!T.isCollapsed}),n._UZ(103,"i",48),n.qZA(),n.qZA(),n.TgZ(104,"div",49),n._UZ(105,"cvc-quicksearch"),n.qZA(),n.TgZ(106,"div",50),n.TgZ(107,"ul",51),n.TgZ(108,"li",52),n.TgZ(109,"a",53),n._uU(110,"Home"),n.qZA(),n.qZA(),n.TgZ(111,"li",52),n.TgZ(112,"a",54),n._uU(113,"About CIViC"),n.qZA(),n.qZA(),n.TgZ(114,"li",52),n.TgZ(115,"a",55),n._uU(116,"Help"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(117,"div",56),n.YNc(118,At,1,0,"cvc-login-button",57),n.ALo(119,"async"),n.YNc(120,Nt,1,0,"cvc-viewer-button",57),n.ALo(121,"async"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(122,"nz-content"),n._UZ(123,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&d&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",T.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(38,at,T.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!T.isCollapsed),n.xp6(1),n.Q6J("ngIf",T.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(40,at,T.isCollapsed))("nzInlineCollapsed",T.isCollapsed),n.xp6(1),n.Q6J("nzTitle",T.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",T.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",T.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",T.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(42,at,T.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(44,at,T.isCollapsed)),n.xp6(5),n.Q6J("nzType",T.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(119,34,T.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(121,36,T.signedIn$)))},directives:[K,p,t.yS,i.mk,i.O5,I.wO,I.uA,I.r9,X.SY,Y.Ls,L,xe.SK,xe.t3,Re,We.s,en,M,t.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),m})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(4189)]).then(o.bind(o,136)).then(m=>m.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(305),o.e(7717),o.e(9750)]).then(o.bind(o,1838)).then(m=>m.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(3883),o.e(8369)]).then(o.bind(o,233)).then(m=>m.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(3883),o.e(2678)]).then(o.bind(o,1592)).then(m=>m.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(305),o.e(8383)]).then(o.bind(o,7727)).then(m=>m.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(392),o.e(681)]).then(o.bind(o,681)).then(m=>m.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(392),o.e(4726),o.e(376),o.e(8592),o.e(9039)]).then(o.bind(o,3073)).then(m=>m.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(3883),o.e(6104)]).then(o.bind(o,1076)).then(m=>m.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(4726),o.e(2033),o.e(7717),o.e(8592),o.e(727)]).then(o.bind(o,359)).then(m=>m.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(6724),o.e(55),o.e(3883),o.e(4726),o.e(97)]).then(o.bind(o,7563)).then(m=>m.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5193),o.e(5839),o.e(9001),o.e(2826),o.e(305),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(4726),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(m=>m.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(6029)]).then(o.bind(o,79)).then(m=>m.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(392),o.e(1750),o.e(4233)]).then(o.bind(o,9221)).then(m=>m.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(5193),o.e(5839),o.e(392),o.e(1750),o.e(2869)]).then(o.bind(o,1875)).then(m=>m.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(5193),o.e(9001),o.e(2826),o.e(6724),o.e(9716),o.e(376),o.e(6315)]).then(o.bind(o,4340)).then(m=>m.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(m=>m.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(m=>m.PagesModule),data:{breadcrumb:"Pages"}}]}];let Lt=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[t.Bz.forChild(xt)],t.Bz]}),m})();var Pt=o(3618),Ft=o(5109),Wt=o(4546);let kt=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,me.u5,t.Bz,g.WG,q.o7,Wt.U5,Y.PV,z]]}),m})();var Jt=o(1844),Qt=o(5473),jt=o(330),Kt=o(7058);let Ht=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,g.WG,Ze.b1,t.Bz,qe.sL,Je.zf,Y.PV,ot.mS,X.cg,st.Qp,Qt.H,jt.e,Kt.e]]}),m})(),Zt=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[i.ez,Lt,Y.PV,xe.Jb,k,I.ip,X.cg,Pt.ZJ,Ft.s,Jt.B,Ht,kt]]}),m})()},6792:(Te,te,o)=>{o.d(te,{g:()=>N});var i=o(353),n=o(3489),s=o(9312);function N(u,I=i.P){const Y=function t(u){return u instanceof Date&&!isNaN(+u)}(u)?+u-I.now():Math.abs(u);return $=>$.lift(new _(Y,I))}class _{constructor(I,O){this.delay=I,this.scheduler=O}call(I,O){return O.subscribe(new c(I,this.delay,this.scheduler))}}class c extends n.L{constructor(I,O,Y){super(I),this.delay=O,this.scheduler=Y,this.queue=[],this.active=!1,this.errored=!1}static dispatch(I){const O=I.source,Y=O.queue,$=I.scheduler,ne=I.destination;for(;Y.length>0&&Y[0].time-$.now()<=0;)Y.shift().notification.observe(ne);if(Y.length>0){const R=Math.max(0,Y[0].time-$.now());this.schedule(I,R)}else this.unsubscribe(),O.active=!1}_schedule(I){this.active=!0,this.destination.add(I.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:I}))}scheduleNotification(I){if(!0===this.errored)return;const O=this.scheduler,Y=new J(O.now()+this.delay,I);this.queue.push(Y),!1===this.active&&this._schedule(O)}_next(I){this.scheduleNotification(s.P.createNext(I))}_error(I){this.errored=!0,this.queue=[],this.destination.error(I),this.unsubscribe()}_complete(){this.scheduleNotification(s.P.createComplete()),this.unsubscribe()}}class J{constructor(I,O){this.time=I,this.notification=O}}},373:(Te,te,o)=>{o.d(te,{j:()=>t});var i=o(4850);function t(...s){const N=s.length;if(0===N)throw new Error("list of properties cannot be empty.");return _=>(0,i.U)(function n(s,N){return c=>{let J=c;for(let u=0;u<N;u++){const I=null!=J?J[s[u]]:void 0;if(void 0===I)return;J=I}return J}}(s,N))(_)}},444:(Te,te,o)=>{function i(E){return E!==String(parseFloat(E))}o.d(te,{o6:()=>F});var N=Object.getOwnPropertyNames?function t(E){return Object.getOwnPropertyNames(E).filter(function(h){return E.propertyIsEnumerable(h)&&i(h)})}:Object.keys?function n(E){return Object.keys(E).filter(i)}:function s(E){var h=[];for(var M in E)E.hasOwnProperty(M)&&E.propertyIsEnumerable(M)&&i(M)&&h.push(M);return h},_=function(){function E(h){this.enumObj=h,this.keysList=Object.freeze(N(h));for(var M=this.keysList.length,P=new Array(M),L=new Map,B=0;B<M;++B){var p=this.keysList[B],K=h[p];P[B]=K,L.set(K,p),this[B]=Object.freeze([p,K])}this.valuesList=Object.freeze(P),this.keysByValueMap=L,this.size=this.length=M,Object.freeze(this)}return E.prototype.toString=function(){return"[object EnumWrapper]"},E.prototype.keys=function(){var h,M=this,P=0;return(h={next:function(){var B={done:P>=M.length,value:M.keysList[P]};return++P,B}})[Symbol.iterator]=function(){return this},h},E.prototype.values=function(){var h,M=this,P=0;return(h={next:function(){var B={done:P>=M.length,value:M.valuesList[P]};return++P,B}})[Symbol.iterator]=function(){return this},h},E.prototype.entries=function(){var h,M=this,P=0;return(h={next:function(){var B={done:P>=M.length,value:M[P]};return++P,B}})[Symbol.iterator]=function(){return this},h},E.prototype[Symbol.iterator]=function(){return this.entries()},E.prototype.forEach=function(h,M){for(var P=this.length,L=0;L<P;++L){var B=this[L];h.call(M,B[1],B[0],this,L)}},E.prototype.map=function(h,M){for(var P=this.length,L=new Array(P),B=0;B<P;++B){var p=this[B];L[B]=h.call(M,p[1],p[0],this,B)}return L},E.prototype.getKeys=function(){return this.keysList.slice()},E.prototype.getValues=function(){return this.valuesList.slice()},E.prototype.getEntries=function(){return Array.prototype.slice.call(this)},E.prototype.indexOfKey=function(h){return this.keysList.indexOf(h)},E.prototype.indexOfValue=function(h){return this.valuesList.indexOf(h)},E.prototype.isKey=function(h){return null!=h&&i(h)&&this.enumObj.hasOwnProperty(h)},E.prototype.asKeyOrThrow=function(h){if(this.isKey(h))return h;throw new Error("Unexpected key: "+h+". Expected one of: "+this.getValues())},E.prototype.asKeyOrDefault=function(h,M){return this.isKey(h)?h:M},E.prototype.isValue=function(h){return null!=h&&this.keysByValueMap.has(h)},E.prototype.asValueOrThrow=function(h){if(this.isValue(h))return h;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},E.prototype.asValueOrDefault=function(h,M){return this.isValue(h)?h:M},E.prototype.getKeyOrThrow=function(h){var M=null!=h?this.keysByValueMap.get(h):void 0;if(null!=M)return M;throw new Error("Unexpected value: "+h+". Expected one of: "+this.getValues())},E.prototype.getKeyOrDefault=function(h,M){var P=null!=h?this.keysByValueMap.get(h):void 0;return null!=P?P:M},E.prototype.getValueOrThrow=function(h){return this.enumObj[this.asKeyOrThrow(h)]},E.prototype.getValueOrDefault=function(h,M){return this.isKey(h)?this.enumObj[h]:M},E}();_.prototype[Symbol.toStringTag]="EnumWrapper";var c=Symbol("ts-enum-util:unhandledEntry"),J=Symbol("ts-enum-util:handleNull"),u=Symbol("ts-enum-util:handleUndefined"),I=Symbol("ts-enum-util:handleUnexpected");function O(E){return new Error("Unhandled value: "+E)}var Y=function(){function E(h){this.value=h}return E.prototype.with=function(h){if(h.hasOwnProperty(this.value))return R(h[this.value],this.value);if(h[I])return R(h[I],this.value);throw new Error("Unexpected value: "+this.value)},E}(),$=function(){function E(){}return E.prototype.with=function(h){if(h[J])return R(h[J],null);if(h[I])return R(h[I],null);throw new Error("Unexpected value: null")},E}(),ne=function(){function E(){}return E.prototype.with=function(h){if(h[u])return R(h[u],void 0);if(h[I])return R(h[I],void 0);throw new Error("Unexpected value: undefined")},E}();function R(E,h){if(E===c)throw O(h);return E(h)}var le=function(){function E(h){this.value=h}return E.prototype.with=function(h){if(h.hasOwnProperty(this.value))return w(h[this.value],this.value);if(h.hasOwnProperty(I))return w(h[I],this.value);throw new Error("Unexpected value: "+this.value)},E}(),H=function(){function E(){}return E.prototype.with=function(h){if(h.hasOwnProperty(J))return w(h[J],null);if(h.hasOwnProperty(I))return w(h[I],null);throw new Error("Unexpected value: null")},E}(),Z=function(){function E(){}return E.prototype.with=function(h){if(h.hasOwnProperty(u))return w(h[u],void 0);if(h.hasOwnProperty(I))return w(h[I],void 0);throw new Error("Unexpected value: undefined")},E}();function w(E,h){if(E===c)throw O(h);return E}var ae=new WeakMap;function F(E){var h=ae.get(E);return h||(h=new _(E),ae.set(E,h)),h}F.handleNull=J,F.handleUndefined=u,F.handleUnexpected=I,F.unhandledEntry=c,F.visitValue=function A(E){return null===E?new $:void 0===E?new ne:new Y(E)},F.mapValue=function b(E){return null===E?new H:void 0===E?new Z:new le(E)}},19:(Te,te,o)=>{o.d(te,{$:()=>se,j:()=>ye});var i=o(655),t=o(9808),n=o(5e3),s=o(2654),N=o(839),_=o(8929),c=o(6787),J=o(3753),u=o(3489),I=o(353);const O={leading:!0,trailing:!1};class le{constructor(me,ie,ze,Oe){this.duration=me,this.scheduler=ie,this.leading=ze,this.trailing=Oe}call(me,ie){return ie.subscribe(new H(me,this.duration,this.scheduler,this.leading,this.trailing))}}class H extends u.L{constructor(me,ie,ze,Oe,V){super(me),this.duration=ie,this.scheduler=ze,this.leading=Oe,this.trailing=V,this._hasTrailingValue=!1,this._trailingValue=null}_next(me){this.throttled?this.trailing&&(this._trailingValue=me,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(Z,this.duration,{subscriber:this})),this.leading?this.destination.next(me):this.trailing&&(this._trailingValue=me,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const me=this.throttled;me&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),me.unsubscribe(),this.remove(me),this.throttled=null)}}function Z(q){const{subscriber:me}=q;me.clearThrottle()}var w=o(7625),A=o(4850),b=o(9439),ae=o(1721),F=o(4090),E=o(925),h=o(5577),M=o(226);const P=["fixedEl"],L=["*"];var B=(()=>{return(q=B||(B={})).resize="resize",q.scroll="scroll",q.touchstart="touchstart",q.touchmove="touchmove",q.touchend="touchend",q.pageshow="pageshow",q.load="LOAD",B;var q})();function K(q){return function p(q){return"undefined"!=typeof window&&q===window}(q)?{top:0,left:0,bottom:0}:q.getBoundingClientRect()}const X="ant-affix";let se=(()=>{class q{constructor(ie,ze,Oe,V,fe,G,he,ce,De,Pe){this.nzConfigService=Oe,this.scrollSrv=V,this.ngZone=fe,this.platform=G,this.renderer=he,this.nzResizeObserver=ce,this.cdr=De,this.directionality=Pe,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new N.t(1),this.destroy$=new _.xQ,this.placeholderNode=ie.nativeElement,this.document=ze}get target(){const ie=this.nzTarget;return("string"==typeof ie?this.document.querySelector(ie):ie)||window}ngOnInit(){var ie;null===(ie=this.directionality.change)||void 0===ie||ie.pipe((0,w.R)(this.destroy$)).subscribe(ze=>{this.dir=ze,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(ie){const{nzOffsetBottom:ze,nzOffsetTop:Oe,nzTarget:V}=ie;(ze||Oe)&&this.offsetChanged$.next(),V&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const ie=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,c.T)(...Object.keys(B).map(ze=>(0,J.R)(this.target,ze)),this.offsetChanged$.pipe((0,A.U)(()=>({}))),this.nzResizeObserver.observe(ie)).pipe(function R(q,me=I.P,ie=O){return ze=>ze.lift(new le(q,me,ie.leading,ie.trailing))}(20,void 0,{trailing:!0}),(0,w.R)(this.destroy$)).subscribe(ze=>this.updatePosition(ze))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(ie,ze){const Oe=ie.getBoundingClientRect(),V=K(ze),fe=this.scrollSrv.getScroll(ze,!0),G=this.scrollSrv.getScroll(ze,!1),he=this.document.body;return{top:Oe.top-V.top+fe-(he.clientTop||0),left:Oe.left-V.left+G-(he.clientLeft||0),width:Oe.width,height:Oe.height}}setAffixStyle(ie,ze){const Oe=this.affixStyle,V=this.target===window;if("scroll"===ie.type&&Oe&&ze&&V||(0,ae.wU)(Oe,ze))return;const fe=!!ze,G=this.fixedEl.nativeElement;this.renderer.setStyle(G,"cssText",(0,ae.GM)(ze)),this.affixStyle=ze,fe?G.classList.add(X):G.classList.remove(X),this.updateRtlClass(),(ze&&!Oe||!ze&&Oe)&&this.nzChange.emit(fe)}setPlaceholderStyle(ie){(0,ae.wU)(ie,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,ae.GM)(ie)),this.placeholderStyle=ie)}syncPlaceholderStyle(ie){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const ze={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(ie,Object.assign(Object.assign({},this.affixStyle),ze)),this.setPlaceholderStyle(ze)}updatePosition(ie){if(!this.platform.isBrowser)return;const ze=this.target;let Oe=this.nzOffsetTop;const V=this.scrollSrv.getScroll(ze,!0),fe=this.getOffset(this.placeholderNode,ze),G=this.fixedEl.nativeElement,he={width:G.offsetWidth,height:G.offsetHeight},ce={top:!1,bottom:!1};"number"!=typeof Oe&&"number"!=typeof this.nzOffsetBottom?(ce.top=!0,Oe=0):(ce.top="number"==typeof Oe,ce.bottom="number"==typeof this.nzOffsetBottom);const De=K(ze),Pe=ze.innerHeight||ze.clientHeight;if(V>=fe.top-Oe&&ce.top){const re=fe.width;this.setAffixStyle(ie,{position:"fixed",top:De.top+Oe,left:De.left+fe.left,width:re}),this.setPlaceholderStyle({width:re,height:he.height})}else if(V<=fe.top+he.height+this.nzOffsetBottom-Pe&&ce.bottom){const re=ze===window?0:window.innerHeight-De.bottom,Ie=fe.width;this.setAffixStyle(ie,{position:"fixed",bottom:re+this.nzOffsetBottom,left:De.left+fe.left,width:Ie}),this.setPlaceholderStyle({width:Ie,height:fe.height})}else ie.type===B.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(ie,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(ie),this.setPlaceholderStyle();"resize"===ie.type&&this.syncPlaceholderStyle(ie)}updateRtlClass(){const ie=this.fixedEl.nativeElement;"rtl"===this.dir&&ie.classList.contains(X)?ie.classList.add(`${X}-rtl`):ie.classList.remove(`${X}-rtl`)}}return q.\u0275fac=function(ie){return new(ie||q)(n.Y36(n.SBq),n.Y36(t.K0),n.Y36(b.jY),n.Y36(F.MF),n.Y36(n.R0b),n.Y36(E.t4),n.Y36(n.Qsj),n.Y36(h.D3),n.Y36(n.sBO),n.Y36(M.Is,8))},q.\u0275cmp=n.Xpm({type:q,selectors:[["nz-affix"]],viewQuery:function(ie,ze){if(1&ie&&n.Gf(P,7),2&ie){let Oe;n.iGM(Oe=n.CRH())&&(ze.fixedEl=Oe.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:L,decls:3,vars:0,consts:[["fixedEl",""]],template:function(ie,ze){1&ie&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,b.oS)(),(0,ae.Rn)(void 0)],q.prototype,"nzOffsetTop",void 0),(0,i.gn)([(0,b.oS)(),(0,ae.Rn)(void 0)],q.prototype,"nzOffsetBottom",void 0),q})(),ye=(()=>{class q{}return q.\u0275fac=function(ie){return new(ie||q)},q.\u0275mod=n.oAB({type:q}),q.\u0275inj=n.cJS({imports:[[M.vT,t.ez,E.ud]]}),q})()},6699:(Te,te,o)=>{o.d(te,{Dz:()=>R,Rt:()=>H});var i=o(655),t=o(5e3),n=o(9439),s=o(1721),N=o(925),_=o(9808),c=o(647),J=o(226);const u=["textEl"];function I(Z,w){if(1&Z&&t._UZ(0,"i",3),2&Z){const A=t.oxw();t.Q6J("nzType",A.nzIcon)}}function O(Z,w){if(1&Z){const A=t.EpF();t.TgZ(0,"img",4),t.NdJ("error",function(ae){return t.CHM(A),t.oxw().imgError(ae)}),t.qZA()}if(2&Z){const A=t.oxw();t.Q6J("src",A.nzSrc,t.LSH),t.uIk("srcset",A.nzSrcSet,t.LSH)("alt",A.nzAlt)}}function Y(Z,w){if(1&Z&&(t.TgZ(0,"span",5,6),t._uU(2),t.qZA()),2&Z){const A=t.oxw();t.Q6J("ngStyle",A.textStyles),t.xp6(2),t.Oqu(A.nzText)}}let R=(()=>{class Z{constructor(A,b,ae,F){this.nzConfigService=A,this.elementRef=b,this.cdr=ae,this.platform=F,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new t.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(A){this.nzError.emit(A),A.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const A=this.textEl.nativeElement.offsetWidth,b=this.el.getBoundingClientRect().width,ae=2*this.nzGap<b?2*this.nzGap:8;this.textStyles={transform:`scale(${b-ae<A?(b-ae)/A:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return Z.\u0275fac=function(A){return new(A||Z)(t.Y36(n.jY),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(N.t4))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["nz-avatar"]],viewQuery:function(A,b){if(1&A&&t.Gf(u,5),2&A){let ae;t.iGM(ae=t.CRH())&&(b.textEl=ae.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(A,b){2&A&&(t.Udp("width",b.customSize)("height",b.customSize)("line-height",b.customSize)("font-size",b.hasIcon&&b.customSize?b.nzSize/2:null,"px"),t.ekj("ant-avatar-lg","large"===b.nzSize)("ant-avatar-sm","small"===b.nzSize)("ant-avatar-square","square"===b.nzShape)("ant-avatar-circle","circle"===b.nzShape)("ant-avatar-icon",b.nzIcon)("ant-avatar-image",b.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[t.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(A,b){1&A&&(t.YNc(0,I,1,1,"i",0),t.YNc(1,O,1,3,"img",1),t.YNc(2,Y,3,2,"span",2)),2&A&&(t.Q6J("ngIf",b.nzIcon&&b.hasIcon),t.xp6(1),t.Q6J("ngIf",b.nzSrc&&b.hasSrc),t.xp6(1),t.Q6J("ngIf",b.nzText&&b.hasText))},directives:[_.O5,c.Ls,_.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,n.oS)()],Z.prototype,"nzShape",void 0),(0,i.gn)([(0,n.oS)()],Z.prototype,"nzSize",void 0),(0,i.gn)([(0,n.oS)(),(0,s.Rn)()],Z.prototype,"nzGap",void 0),Z})(),H=(()=>{class Z{}return Z.\u0275fac=function(A){return new(A||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[[J.vT,_.ez,c.PV,N.ud]]}),Z})()},4401:(Te,te,o)=>{o.d(te,{x7:()=>P,mS:()=>B,F9:()=>L});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),N=o(8076),_=o(9439),c=o(1721),J=o(226),u=o(4832),I=o(9808),O=o(969),Y=o(7144);function $(p,K){if(1&p&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&p){const k=K.$implicit,X=t.oxw(2).index,xe=t.oxw(2);t.ekj("current",k===xe.countArray[X]),t.xp6(1),t.hij(" ",k," ")}}function ne(p,K){if(1&p&&(t.ynx(0),t.YNc(1,$,2,3,"p",5),t.BQk()),2&p){const k=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",k.countSingleArray)}}function R(p,K){if(1&p&&(t.TgZ(0,"span",3),t.YNc(1,ne,2,1,"ng-container",4),t.qZA()),2&p){const k=K.index,X=t.oxw(2);t.Udp("transform","translateY("+100*-X.countArray[k]+"%)"),t.Q6J("nzNoAnimation",X.noAnimation),t.xp6(1),t.Q6J("ngIf",!X.nzDot&&void 0!==X.countArray[k])}}function le(p,K){if(1&p&&(t.ynx(0),t.YNc(1,R,2,4,"span",2),t.BQk()),2&p){const k=t.oxw();t.xp6(1),t.Q6J("ngForOf",k.maxNumberArray)}}function H(p,K){if(1&p&&t._uU(0),2&p){const k=t.oxw();t.hij("",k.nzOverflowCount,"+")}}function Z(p,K){if(1&p&&(t.ynx(0),t._uU(1),t.BQk()),2&p){const k=t.oxw(2);t.xp6(1),t.Oqu(k.nzText)}}function w(p,K){if(1&p&&(t.ynx(0),t._UZ(1,"span",2),t.TgZ(2,"span",3),t.YNc(3,Z,2,1,"ng-container",1),t.qZA(),t.BQk()),2&p){const k=t.oxw();t.xp6(1),t.Gre("ant-badge-status-dot ant-badge-status-",k.nzStatus||k.presetColor,""),t.Udp("background",!k.presetColor&&k.nzColor),t.Q6J("ngStyle",k.nzStyle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",k.nzText)}}function A(p,K){if(1&p&&t._UZ(0,"nz-badge-sup",5),2&p){const k=t.oxw(2);t.Q6J("nzOffset",k.nzOffset)("nzTitle",k.nzTitle)("nzStyle",k.nzStyle)("nzDot",k.nzDot)("nzOverflowCount",k.nzOverflowCount)("disableAnimation",!!(k.nzStandalone||k.nzStatus||k.nzColor||null!=k.noAnimation&&k.noAnimation.nzNoAnimation))("nzCount",k.nzCount)("noAnimation",!(null==k.noAnimation||!k.noAnimation.nzNoAnimation))}}function b(p,K){if(1&p&&(t.ynx(0),t.YNc(1,A,1,8,"nz-badge-sup",4),t.BQk()),2&p){const k=t.oxw();t.xp6(1),t.Q6J("ngIf",k.showSup)}}const ae=["*"];function F(p,K){if(1&p&&(t.ynx(0),t._uU(1),t.BQk()),2&p){const k=t.oxw();t.xp6(1),t.Oqu(k.nzText)}}const E=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let h=(()=>{class p{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(k){const{nzOverflowCount:X,nzCount:xe}=k;xe&&"number"==typeof xe.currentValue&&(this.count=Math.max(0,xe.currentValue),this.countArray=this.count.toString().split("").map(se=>+se)),X&&this.generateMaxNumberArray()}}return p.\u0275fac=function(k){return new(k||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(k,X){2&k&&(t.uIk("title",null===X.nzTitle?"":X.nzTitle||X.nzCount),t.d8E("@.disabled",X.disableAnimation)("@zoomBadgeMotion",void 0),t.Akn(X.nzStyle),t.Udp("right",X.nzOffset&&X.nzOffset[0]?-X.nzOffset[0]:null,"px")("margin-top",X.nzOffset&&X.nzOffset[1]?X.nzOffset[1]:null,"px"),t.ekj("ant-badge-count",!X.nzDot)("ant-badge-dot",X.nzDot)("ant-badge-multiple-words",X.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[t.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(k,X){if(1&k&&(t.YNc(0,le,2,1,"ng-container",0),t.YNc(1,H,1,1,"ng-template",null,1,t.W1O)),2&k){const xe=t.MAs(2);t.Q6J("ngIf",X.count<=X.nzOverflowCount)("ngIfElse",xe)}},directives:[I.O5,I.sg,u.P],encapsulation:2,data:{animation:[N.Ev]},changeDetection:0}),p})(),P=(()=>{class p{constructor(k,X,xe,se,ye,q){this.nzConfigService=k,this.renderer=X,this.cdr=xe,this.elementRef=se,this.directionality=ye,this.noAnimation=q,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var k;null===(k=this.directionality.change)||void 0===k||k.pipe((0,s.R)(this.destroy$)).subscribe(X=>{this.dir=X,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(k){const{nzColor:X,nzShowDot:xe,nzDot:se,nzCount:ye,nzShowZero:q}=k;X&&(this.presetColor=this.nzColor&&-1!==E.indexOf(this.nzColor)?this.nzColor:null),(xe||se||ye||q)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(k){return new(k||p)(t.Y36(_.jY),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(J.Is,8),t.Y36(u.P,9))},p.\u0275cmp=t.Xpm({type:p,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(k,X){2&k&&t.ekj("ant-badge-status",X.nzStatus)("ant-badge-not-a-wrapper",!!(X.nzStandalone||X.nzStatus||X.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[t.TTD],ngContentSelectors:ae,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(k,X){1&k&&(t.F$t(),t.YNc(0,w,4,7,"ng-container",0),t.Hsn(1),t.YNc(2,b,2,1,"ng-container",1)),2&k&&(t.Q6J("ngIf",X.nzStatus||X.nzColor),t.xp6(2),t.Q6J("nzStringTemplateOutlet",X.nzCount))},directives:[h,I.O5,I.PC,O.f],encapsulation:2,data:{animation:[N.Ev]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],p.prototype,"nzShowZero",void 0),(0,i.gn)([(0,c.yF)()],p.prototype,"nzShowDot",void 0),(0,i.gn)([(0,c.yF)()],p.prototype,"nzStandalone",void 0),(0,i.gn)([(0,c.yF)()],p.prototype,"nzDot",void 0),(0,i.gn)([(0,_.oS)()],p.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,_.oS)()],p.prototype,"nzColor",void 0),p})(),L=(()=>{class p{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(k){const{nzColor:X}=k;X&&(this.presetColor=this.nzColor&&-1!==E.indexOf(this.nzColor)?this.nzColor:null)}}return p.\u0275fac=function(k){return new(k||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[t.TTD],ngContentSelectors:ae,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(k,X){1&k&&(t.F$t(),t.Hsn(0),t.TgZ(1,"div",0),t.YNc(2,F,2,1,"ng-container",1),t._UZ(3,"div",2),t.qZA()),2&k&&(t.xp6(1),t.Tol(X.presetColor&&"ant-ribbon-color-"+X.presetColor),t.Udp("background-color",!X.presetColor&&X.nzColor),t.ekj("ant-ribbon-placement-end","end"===X.nzPlacement)("ant-ribbon-placement-start","start"===X.nzPlacement),t.xp6(1),t.Q6J("nzStringTemplateOutlet",X.nzText),t.xp6(1),t.Udp("color",!X.presetColor&&X.nzColor))},directives:[O.f],encapsulation:2,changeDetection:0}),p})(),B=(()=>{class p{}return p.\u0275fac=function(k){return new(k||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[[J.vT,I.ez,Y.Q8,O.T,u.g]]}),p})()},7484:(Te,te,o)=>{o.d(te,{bd:()=>ie,vh:()=>Oe,_i:()=>ye});var i=o(655),t=o(5e3),n=o(1721),s=o(8929),N=o(7625),_=o(9439),c=o(226),J=o(9808),u=o(969);function I(V,fe){1&V&&t.Hsn(0)}const O=["*"];function Y(V,fe){1&V&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA()),2&V&&t.Q6J("ngClass",fe.$implicit)}function $(V,fe){if(1&V&&(t.TgZ(0,"div",2),t.YNc(1,Y,2,1,"div",3),t.qZA()),2&V){const G=fe.$implicit;t.xp6(1),t.Q6J("ngForOf",G)}}function ne(V,fe){if(1&V&&(t.ynx(0),t._uU(1),t.BQk()),2&V){const G=t.oxw(3);t.xp6(1),t.Oqu(G.nzTitle)}}function R(V,fe){if(1&V&&(t.TgZ(0,"div",11),t.YNc(1,ne,2,1,"ng-container",12),t.qZA()),2&V){const G=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",G.nzTitle)}}function le(V,fe){if(1&V&&(t.ynx(0),t._uU(1),t.BQk()),2&V){const G=t.oxw(3);t.xp6(1),t.Oqu(G.nzExtra)}}function H(V,fe){if(1&V&&(t.TgZ(0,"div",13),t.YNc(1,le,2,1,"ng-container",12),t.qZA()),2&V){const G=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",G.nzExtra)}}function Z(V,fe){}function w(V,fe){if(1&V&&(t.ynx(0),t.YNc(1,Z,0,0,"ng-template",14),t.BQk()),2&V){const G=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",G.listOfNzCardTabComponent.template)}}function A(V,fe){if(1&V&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.YNc(2,R,2,1,"div",8),t.YNc(3,H,2,1,"div",9),t.qZA(),t.YNc(4,w,2,1,"ng-container",10),t.qZA()),2&V){const G=t.oxw();t.xp6(2),t.Q6J("ngIf",G.nzTitle),t.xp6(1),t.Q6J("ngIf",G.nzExtra),t.xp6(1),t.Q6J("ngIf",G.listOfNzCardTabComponent)}}function b(V,fe){}function ae(V,fe){if(1&V&&(t.TgZ(0,"div",15),t.YNc(1,b,0,0,"ng-template",14),t.qZA()),2&V){const G=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",G.nzCover)}}function F(V,fe){1&V&&(t.ynx(0),t.Hsn(1),t.BQk())}function E(V,fe){1&V&&t._UZ(0,"nz-card-loading")}function h(V,fe){}function M(V,fe){if(1&V&&(t.TgZ(0,"li"),t.TgZ(1,"span"),t.YNc(2,h,0,0,"ng-template",14),t.qZA(),t.qZA()),2&V){const G=fe.$implicit,he=t.oxw(2);t.Udp("width",100/he.nzActions.length,"%"),t.xp6(2),t.Q6J("ngTemplateOutlet",G)}}function P(V,fe){if(1&V&&(t.TgZ(0,"ul",16),t.YNc(1,M,3,3,"li",17),t.qZA()),2&V){const G=t.oxw();t.xp6(1),t.Q6J("ngForOf",G.nzActions)}}let se=(()=>{class V{constructor(){this.nzHoverable=!0}}return V.\u0275fac=function(G){return new(G||V)},V.\u0275dir=t.lG2({type:V,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(G,he){2&G&&t.ekj("ant-card-hoverable",he.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,n.yF)()],V.prototype,"nzHoverable",void 0),V})(),ye=(()=>{class V{}return V.\u0275fac=function(G){return new(G||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["nz-card-tab"]],viewQuery:function(G,he){if(1&G&&t.Gf(t.Rgc,7),2&G){let ce;t.iGM(ce=t.CRH())&&(he.template=ce.first)}},exportAs:["nzCardTab"],ngContentSelectors:O,decls:1,vars:0,template:function(G,he){1&G&&(t.F$t(),t.YNc(0,I,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),V})(),q=(()=>{class V{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return V.\u0275fac=function(G){return new(G||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(G,he){1&G&&(t.TgZ(0,"div",0),t.YNc(1,$,2,1,"div",1),t.qZA()),2&G&&(t.xp6(1),t.Q6J("ngForOf",he.listOfLoading))},directives:[J.sg,J.mk],encapsulation:2,changeDetection:0}),V})(),ie=(()=>{class V{constructor(G,he,ce){this.nzConfigService=G,this.cdr=he,this.directionality=ce,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,N.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,N.R)(this.destroy$)).subscribe(he=>{this.dir=he,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(G){return new(G||V)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(c.Is,8))},V.\u0275cmp=t.Xpm({type:V,selectors:[["nz-card"]],contentQueries:function(G,he,ce){if(1&G&&(t.Suo(ce,ye,5),t.Suo(ce,se,4)),2&G){let De;t.iGM(De=t.CRH())&&(he.listOfNzCardTabComponent=De.first),t.iGM(De=t.CRH())&&(he.listOfNzCardGridDirective=De)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(G,he){2&G&&t.ekj("ant-card-loading",he.nzLoading)("ant-card-bordered",!1===he.nzBorderless&&he.nzBordered)("ant-card-hoverable",he.nzHoverable)("ant-card-small","small"===he.nzSize)("ant-card-contain-grid",he.listOfNzCardGridDirective&&he.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===he.nzType)("ant-card-contain-tabs",!!he.listOfNzCardTabComponent)("ant-card-rtl","rtl"===he.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:O,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(G,he){if(1&G&&(t.F$t(),t.YNc(0,A,5,3,"div",0),t.YNc(1,ae,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,F,2,0,"ng-container",3),t.YNc(4,E,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(6,P,2,1,"ul",5)),2&G){const ce=t.MAs(5);t.Q6J("ngIf",he.nzTitle||he.nzExtra||he.listOfNzCardTabComponent),t.xp6(1),t.Q6J("ngIf",he.nzCover),t.xp6(1),t.Q6J("ngStyle",he.nzBodyStyle),t.xp6(1),t.Q6J("ngIf",!he.nzLoading)("ngIfElse",ce),t.xp6(3),t.Q6J("ngIf",he.nzActions.length)}},directives:[q,J.O5,u.f,J.tP,J.PC,J.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],V.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],V.prototype,"nzBorderless",void 0),(0,i.gn)([(0,n.yF)()],V.prototype,"nzLoading",void 0),(0,i.gn)([(0,_.oS)(),(0,n.yF)()],V.prototype,"nzHoverable",void 0),(0,i.gn)([(0,_.oS)()],V.prototype,"nzSize",void 0),V})(),Oe=(()=>{class V{}return V.\u0275fac=function(G){return new(G||V)},V.\u0275mod=t.oAB({type:V}),V.\u0275inj=t.cJS({imports:[[J.ez,u.T],c.vT]}),V})()},5577:(Te,te,o)=>{o.d(te,{D3:()=>_,y7:()=>J});var i=o(5e3),t=o(3191),n=o(2916),s=o(8929);let N=(()=>{class u{create(O){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(O)}}return u.\u0275fac=function(O){return new(O||u)},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),_=(()=>{class u{constructor(O){this.nzResizeObserverFactory=O,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((O,Y)=>this.cleanupObserver(Y))}observe(O){const Y=(0,t.fI)(O);return new n.y($=>{const R=this.observeElement(Y).subscribe($);return()=>{R.unsubscribe(),this.unobserveElement(Y)}})}observeElement(O){if(this.observedElements.has(O))this.observedElements.get(O).count++;else{const Y=new s.xQ,$=this.nzResizeObserverFactory.create(ne=>Y.next(ne));$&&$.observe(O),this.observedElements.set(O,{observer:$,stream:Y,count:1})}return this.observedElements.get(O).stream}unobserveElement(O){this.observedElements.has(O)&&(this.observedElements.get(O).count--,this.observedElements.get(O).count||this.cleanupObserver(O))}cleanupObserver(O){if(this.observedElements.has(O)){const{observer:Y,stream:$}=this.observedElements.get(O);Y&&Y.disconnect(),$.complete(),this.observedElements.delete(O)}}}return u.\u0275fac=function(O){return new(O||u)(i.LFG(N))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),J=(()=>{class u{}return u.\u0275fac=function(O){return new(O||u)},u.\u0275mod=i.oAB({type:u}),u.\u0275inj=i.cJS({providers:[N]}),u})()},5482:(Te,te,o)=>{o.d(te,{yH:()=>A,cD:()=>F,Zv:()=>ae});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),N=o(8076),_=o(9439),c=o(1721),J=o(226),u=o(4832),I=o(9808),O=o(969),Y=o(647);const $=["*"];function ne(E,h){if(1&E&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&E){const M=h.$implicit,P=t.oxw(2);t.xp6(1),t.Q6J("nzType",M||"right")("nzRotate",P.nzActive?90:0)}}function R(E,h){if(1&E&&(t.TgZ(0,"div"),t.YNc(1,ne,2,2,"ng-container",2),t.qZA()),2&E){const M=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzExpandedIcon)}}function le(E,h){if(1&E&&(t.ynx(0),t._uU(1),t.BQk()),2&E){const M=t.oxw();t.xp6(1),t.Oqu(M.nzHeader)}}function H(E,h){if(1&E&&(t.ynx(0),t._uU(1),t.BQk()),2&E){const M=t.oxw(2);t.xp6(1),t.Oqu(M.nzExtra)}}function Z(E,h){if(1&E&&(t.TgZ(0,"div",7),t.YNc(1,H,2,1,"ng-container",2),t.qZA()),2&E){const M=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",M.nzExtra)}}const w="collapse";let A=(()=>{class E{constructor(M,P,L){this.nzConfigService=M,this.cdr=P,this.directionality=L,this._nzModuleName=w,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(w).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var M;null===(M=this.directionality.change)||void 0===M||M.pipe((0,s.R)(this.destroy$)).subscribe(P=>{this.dir=P,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(M){this.listOfNzCollapsePanelComponent.push(M)}removePanel(M){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(M),1)}click(M){this.nzAccordion&&!M.nzActive&&this.listOfNzCollapsePanelComponent.filter(P=>P!==M).forEach(P=>{P.nzActive&&(P.nzActive=!1,P.nzActiveChange.emit(P.nzActive),P.markForCheck())}),M.nzActive=!M.nzActive,M.nzActiveChange.emit(M.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(M){return new(M||E)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(J.Is,8))},E.\u0275cmp=t.Xpm({type:E,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(M,P){2&M&&t.ekj("ant-collapse-icon-position-left","left"===P.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===P.nzExpandIconPosition)("ant-collapse-ghost",P.nzGhost)("ant-collapse-borderless",!P.nzBordered)("ant-collapse-rtl","rtl"===P.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:$,decls:1,vars:0,template:function(M,P){1&M&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],E.prototype,"nzAccordion",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],E.prototype,"nzBordered",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],E.prototype,"nzGhost",void 0),E})();const b="collapsePanel";let ae=(()=>{class E{constructor(M,P,L,B){this.nzConfigService=M,this.cdr=P,this.nzCollapseComponent=L,this.noAnimation=B,this._nzModuleName=b,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new n.xQ,this.nzConfigService.getConfigChangeEventForComponent(b).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return E.\u0275fac=function(M){return new(M||E)(t.Y36(_.jY),t.Y36(t.sBO),t.Y36(A,1),t.Y36(u.P,8))},E.\u0275cmp=t.Xpm({type:E,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(M,P){2&M&&t.ekj("ant-collapse-no-arrow",!P.nzShowArrow)("ant-collapse-item-active",P.nzActive)("ant-collapse-item-disabled",P.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:$,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(M,P){1&M&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return P.clickHeader()}),t.YNc(1,R,2,1,"div",1),t.YNc(2,le,2,1,"ng-container",2),t.YNc(3,Z,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&M&&(t.uIk("aria-expanded",P.nzActive),t.xp6(1),t.Q6J("ngIf",P.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzHeader),t.xp6(1),t.Q6J("ngIf",P.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",P.nzActive),t.Q6J("@.disabled",null==P.noAnimation?null:P.noAnimation.nzNoAnimation)("@collapseMotion",P.nzActive?"expanded":"hidden"))},directives:[I.O5,O.f,Y.Ls],encapsulation:2,data:{animation:[N.J_]},changeDetection:0}),(0,i.gn)([(0,c.yF)()],E.prototype,"nzActive",void 0),(0,i.gn)([(0,c.yF)()],E.prototype,"nzDisabled",void 0),(0,i.gn)([(0,_.oS)(),(0,c.yF)()],E.prototype,"nzShowArrow",void 0),E})(),F=(()=>{class E{}return E.\u0275fac=function(M){return new(M||E)},E.\u0275mod=t.oAB({type:E}),E.\u0275inj=t.cJS({imports:[[J.vT,I.ez,Y.PV,O.T,u.g]]}),E})()},3098:(Te,te,o)=>{o.d(te,{R7:()=>ge,uj:()=>Pe,q6:()=>Ae});var i=o(226),t=o(925),n=o(9808),s=o(5e3),N=o(969),_=o(655),c=o(8929),J=o(6787),u=o(1721),I=o(7625),O=o(1059),Y=o(7545),$=o(7138),ne=o(2868),R=o(9439),le=o(948),H=o(4090);function Z(U,_e){1&U&&s.Hsn(0)}const w=["*"];function A(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw(3);s.xp6(1),s.Oqu(W.nzTitle)}}function b(U,_e){if(1&U&&(s.TgZ(0,"div",6),s.YNc(1,A,2,1,"ng-container",7),s.qZA()),2&U){const W=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.nzTitle)}}function ae(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw(3);s.xp6(1),s.Oqu(W.nzExtra)}}function F(U,_e){if(1&U&&(s.TgZ(0,"div",8),s.YNc(1,ae,2,1,"ng-container",7),s.qZA()),2&U){const W=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.nzExtra)}}function E(U,_e){if(1&U&&(s.TgZ(0,"div",3),s.YNc(1,b,2,1,"div",4),s.YNc(2,F,2,1,"div",5),s.qZA()),2&U){const W=s.oxw();s.xp6(1),s.Q6J("ngIf",W.nzTitle),s.xp6(1),s.Q6J("ngIf",W.nzExtra)}}function h(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function M(U,_e){}function P(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,h,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,M,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&U){const W=s.oxw().$implicit,Se=s.oxw(3);s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Se.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title),s.xp6(2),s.Q6J("ngTemplateOutlet",W.content)}}function L(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function B(U,_e){if(1&U&&(s.TgZ(0,"td",14),s.YNc(1,L,2,1,"ng-container",7),s.qZA()),2&U){const W=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function p(U,_e){}function K(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,B,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,p,0,0,"ng-template",16),s.qZA(),s.BQk()),2&U){const W=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title),s.xp6(1),s.Q6J("colSpan",2*W.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",W.content)}}function k(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,P,7,5,"ng-container",2),s.YNc(2,K,4,3,"ng-container",2),s.BQk()),2&U){const W=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!W.nzBordered),s.xp6(1),s.Q6J("ngIf",W.nzBordered)}}function X(U,_e){if(1&U&&(s.TgZ(0,"tr",10),s.YNc(1,k,3,2,"ng-container",11),s.qZA()),2&U){const W=_e.$implicit;s.xp6(1),s.Q6J("ngForOf",W)}}function xe(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,X,2,1,"tr",9),s.BQk()),2&U){const W=s.oxw();s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function se(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw().$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function ye(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",14),s.YNc(4,se,2,1,"ng-container",7),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&U){const W=_e.$implicit,Se=s.oxw(4);s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!Se.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function q(U,_e){}function me(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"td",12),s.TgZ(2,"div",13),s.TgZ(3,"span",15),s.YNc(4,q,0,0,"ng-template",16),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&U){const W=_e.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(3),s.Q6J("ngTemplateOutlet",W.content)}}function ie(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,ye,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,me,5,2,"ng-container",11),s.qZA(),s.BQk()),2&U){const W=_e.$implicit;s.xp6(2),s.Q6J("ngForOf",W),s.xp6(2),s.Q6J("ngForOf",W)}}function ze(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,ie,5,2,"ng-container",11),s.BQk()),2&U){const W=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function Oe(U,_e){if(1&U&&(s.ynx(0),s._uU(1),s.BQk()),2&U){const W=s.oxw().$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function V(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,Oe,2,1,"ng-container",7),s.qZA(),s.BQk()),2&U){const W=_e.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function fe(U,_e){}function G(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,fe,0,0,"ng-template",16),s.qZA(),s.BQk()),2&U){const W=_e.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(1),s.Q6J("ngTemplateOutlet",W.content)}}function he(U,_e){if(1&U&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,V,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,G,3,2,"ng-container",11),s.qZA(),s.BQk()),2&U){const W=_e.$implicit;s.xp6(2),s.Q6J("ngForOf",W),s.xp6(2),s.Q6J("ngForOf",W)}}function ce(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,he,5,2,"ng-container",11),s.BQk()),2&U){const W=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function De(U,_e){if(1&U&&(s.ynx(0),s.YNc(1,ze,2,1,"ng-container",2),s.YNc(2,ce,2,1,"ng-container",2),s.BQk()),2&U){const W=s.oxw();s.xp6(1),s.Q6J("ngIf",!W.nzBordered),s.xp6(1),s.Q6J("ngIf",W.nzBordered)}}let Pe=(()=>{class U{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new c.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return U.\u0275fac=function(W){return new(W||U)},U.\u0275cmp=s.Xpm({type:U,selectors:[["nz-descriptions-item"]],viewQuery:function(W,Se){if(1&W&&s.Gf(s.Rgc,7),2&W){let be;s.iGM(be=s.CRH())&&(Se.content=be.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:w,decls:1,vars:0,template:function(W,Se){1&W&&(s.F$t(),s.YNc(0,Z,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,_.gn)([(0,u.Rn)()],U.prototype,"nzSpan",void 0),U})();const Ie={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let ge=(()=>{class U{constructor(W,Se,be,Ge){this.nzConfigService=W,this.cdr=Se,this.breakpointService=be,this.directionality=Ge,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Ie,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=H.G_.md,this.destroy$=new c.xQ}ngOnInit(){var W;this.dir=this.directionality.value,null===(W=this.directionality.change)||void 0===W||W.pipe((0,I.R)(this.destroy$)).subscribe(Se=>{this.dir=Se})}ngOnChanges(W){W.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const W=this.items.changes.pipe((0,O.O)(this.items),(0,I.R)(this.destroy$));(0,J.T)(W,W.pipe((0,Y.w)(()=>(0,J.T)(...this.items.map(Se=>Se.inputChange$)).pipe((0,$.e)(16)))),this.breakpointService.subscribe(H.WV).pipe((0,ne.b)(Se=>this.breakpoint=Se))).pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let W=[],Se=0;const be=this.realColumn=this.getColumn(),Ge=this.items.toArray(),tt=Ge.length,nt=[],Ke=()=>{nt.push(W),W=[],Se=0};for(let Ve=0;Ve<tt;Ve++){const y=Ge[Ve],{nzTitle:He,content:Xe,nzSpan:Ye}=y;Se+=Ye,Se>=be?(Se>be&&(0,le.ZK)(`"nzColumn" is ${be} but we have row length ${Se}`),W.push({title:He,content:Xe,span:be-(Se-Ye)}),Ke()):Ve===tt-1?(W.push({title:He,content:Xe,span:be-(Se-Ye)}),Ke()):W.push({title:He,content:Xe,span:Ye})}this.itemMatrix=nt}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return U.\u0275fac=function(W){return new(W||U)(s.Y36(R.jY),s.Y36(s.sBO),s.Y36(H.r3),s.Y36(i.Is,8))},U.\u0275cmp=s.Xpm({type:U,selectors:[["nz-descriptions"]],contentQueries:function(W,Se,be){if(1&W&&s.Suo(be,Pe,4),2&W){let Ge;s.iGM(Ge=s.CRH())&&(Se.items=Ge)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(W,Se){2&W&&s.ekj("ant-descriptions-bordered",Se.nzBordered)("ant-descriptions-middle","middle"===Se.nzSize)("ant-descriptions-small","small"===Se.nzSize)("ant-descriptions-rtl","rtl"===Se.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(W,Se){1&W&&(s.YNc(0,E,3,2,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"table"),s.TgZ(3,"tbody"),s.YNc(4,xe,2,1,"ng-container",2),s.YNc(5,De,3,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&W&&(s.Q6J("ngIf",Se.nzTitle||Se.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===Se.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===Se.nzLayout))},directives:[n.O5,N.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,u.yF)(),(0,R.oS)()],U.prototype,"nzBordered",void 0),(0,_.gn)([(0,R.oS)()],U.prototype,"nzColumn",void 0),(0,_.gn)([(0,R.oS)()],U.prototype,"nzSize",void 0),(0,_.gn)([(0,R.oS)(),(0,u.yF)()],U.prototype,"nzColon",void 0),U})(),Ae=(()=>{class U{}return U.\u0275fac=function(W){return new(W||U)},U.\u0275mod=s.oAB({type:U}),U.\u0275inj=s.cJS({imports:[[i.vT,n.ez,N.T,t.ud]]}),U})()},3677:(Te,te,o)=>{o.d(te,{cm:()=>ye,b1:()=>Oe,wA:()=>ie,RR:()=>ze});var i=o(655),t=o(1159),n=o(7429),s=o(5e3),N=o(8929),_=o(591),c=o(6787),J=o(3753),u=o(8896),I=o(3426),O=o(7604),Y=o(4850),$=o(7545),ne=o(2198),R=o(7138),le=o(5778),H=o(7625),Z=o(9439),w=o(6950),A=o(1721),b=o(2845),ae=o(925),F=o(226),E=o(9808),h=o(4182),M=o(6042),P=o(4832),L=o(969),B=o(647),p=o(4219),K=o(8076);function k(G,he){if(1&G){const ce=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Pe){return s.CHM(ce),s.oxw().onAnimationEvent(Pe)})("mouseenter",function(){return s.CHM(ce),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(ce),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&G){const ce=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===ce.dir),s.Q6J("ngClass",ce.nzOverlayClassName)("ngStyle",ce.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation)("nzNoAnimation",null==ce.noAnimation?null:ce.noAnimation.nzNoAnimation)}}const X=["*"],se=[w.yW.bottomLeft,w.yW.bottomRight,w.yW.topRight,w.yW.topLeft];let ye=(()=>{class G{constructor(ce,De,Pe,re,Ie,ge){this.nzConfigService=ce,this.elementRef=De,this.overlay=Pe,this.renderer=re,this.viewContainerRef=Ie,this.platform=ge,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new N.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new _.X(!1),this.nzTrigger$=new _.X("hover"),this.overlayClose$=new N.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(ce,De){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(ce,De)}ngAfterViewInit(){if(this.nzDropdownMenu){const ce=this.elementRef.nativeElement,De=(0,c.T)((0,J.R)(ce,"mouseenter").pipe((0,O.h)(!0)),(0,J.R)(ce,"mouseleave").pipe((0,O.h)(!1))),re=(0,c.T)(this.nzDropdownMenu.mouseState$,De),Ie=(0,J.R)(ce,"click").pipe((0,Y.U)(()=>!this.nzVisible)),ge=this.nzTrigger$.pipe((0,$.w)(W=>"hover"===W?re:"click"===W?Ie:u.E)),Ae=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,ne.h)(()=>this.nzClickHide),(0,O.h)(!1)),U=(0,c.T)(ge,Ae,this.overlayClose$).pipe((0,ne.h)(()=>!this.nzDisabled)),_e=(0,c.T)(this.inputVisible$,U);(0,I.aj)([_e,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,Y.U)(([W,Se])=>W||Se),(0,R.e)(150),(0,le.x)(),(0,ne.h)(()=>this.platform.isBrowser),(0,H.R)(this.destroy$)).subscribe(W=>{const be=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:ce).getBoundingClientRect().width;this.nzVisible!==W&&this.nzVisibleChange.emit(W),this.nzVisible=W,W?(this.overlayRef?this.overlayRef.getConfig().minWidth=be:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:be,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,c.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,ne.h)(Ge=>!this.elementRef.nativeElement.contains(Ge.target))),this.overlayRef.keydownEvents().pipe((0,ne.h)(Ge=>Ge.keyCode===t.hY&&!(0,t.Vb)(Ge)))).pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([w.yW[this.nzPlacement],...se]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,H.R)(this.destroy$)).subscribe(W=>{"void"===W.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(ce){const{nzVisible:De,nzDisabled:Pe,nzOverlayClassName:re,nzOverlayStyle:Ie,nzTrigger:ge}=ce;if(ge&&this.nzTrigger$.next(this.nzTrigger),De&&this.inputVisible$.next(this.nzVisible),Pe){const Ae=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ae,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ae,"disabled")}re&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Ie&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return G.\u0275fac=function(ce){return new(ce||G)(s.Y36(Z.jY),s.Y36(s.SBq),s.Y36(b.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(ae.t4))},G.\u0275dir=s.lG2({type:G,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,i.gn)([(0,Z.oS)(),(0,A.yF)()],G.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,A.yF)()],G.prototype,"nzClickHide",void 0),(0,i.gn)([(0,A.yF)()],G.prototype,"nzDisabled",void 0),(0,i.gn)([(0,A.yF)()],G.prototype,"nzVisible",void 0),G})(),q=(()=>{class G{}return G.\u0275fac=function(ce){return new(ce||G)},G.\u0275mod=s.oAB({type:G}),G.\u0275inj=s.cJS({}),G})(),ie=(()=>{class G{constructor(ce,De,Pe){this.renderer=ce,this.nzButtonGroupComponent=De,this.elementRef=Pe}ngAfterViewInit(){const ce=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&ce&&this.renderer.addClass(ce,"ant-dropdown-button")}}return G.\u0275fac=function(ce){return new(ce||G)(s.Y36(s.Qsj),s.Y36(M.fY,9),s.Y36(s.SBq))},G.\u0275dir=s.lG2({type:G,selectors:[["","nz-button","","nz-dropdown",""]]}),G})(),ze=(()=>{class G{constructor(ce,De,Pe,re,Ie,ge,Ae){this.cdr=ce,this.elementRef=De,this.renderer=Pe,this.viewContainerRef=re,this.nzMenuService=Ie,this.directionality=ge,this.noAnimation=Ae,this.mouseState$=new _.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new N.xQ}onAnimationEvent(ce){this.animationStateChange$.emit(ce)}setMouseState(ce){this.mouseState$.next(ce)}setValue(ce,De){this[ce]=De,this.cdr.markForCheck()}ngOnInit(){var ce;null===(ce=this.directionality.change)||void 0===ce||ce.pipe((0,H.R)(this.destroy$)).subscribe(De=>{this.dir=De,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(ce){return new(ce||G)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(p.hl),s.Y36(F.Is,8),s.Y36(P.P,9))},G.\u0275cmp=s.Xpm({type:G,selectors:[["nz-dropdown-menu"]],viewQuery:function(ce,De){if(1&ce&&s.Gf(s.Rgc,7),2&ce){let Pe;s.iGM(Pe=s.CRH())&&(De.templateRef=Pe.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([p.hl,{provide:p.Cc,useValue:!0}])],ngContentSelectors:X,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(ce,De){1&ce&&(s.F$t(),s.YNc(0,k,2,7,"ng-template"))},directives:[E.mk,E.PC,P.P],encapsulation:2,data:{animation:[K.mF]},changeDetection:0}),G})(),Oe=(()=>{class G{}return G.\u0275fac=function(ce){return new(ce||G)},G.\u0275mod=s.oAB({type:G}),G.\u0275inj=s.cJS({imports:[[F.vT,E.ez,b.U8,h.u5,M.sL,p.ip,B.PV,P.g,ae.ud,w.e4,q,L.T],p.ip]}),G})();new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(Te,te,o)=>{o.d(te,{n_:()=>Ze,I2:()=>Be,t4:()=>ke,AA:()=>ot,yw:()=>Re,yi:()=>Ee,IO:()=>z,Ph:()=>st});var i=o(5e3),t=o(6699),n=o(9808),s=o(969),N=o(655),_=o(1721),c=o(8929),J=o(8514),u=o(1086),I=o(6787),O=o(591),Y=o(2986),$=o(7545),ne=o(7625),R=o(685),le=o(226),H=o(7525),Z=o(1894);const w=["*"];function A(C,ee){if(1&C&&i._UZ(0,"nz-avatar",3),2&C){const x=i.oxw();i.Q6J("nzSrc",x.nzSrc)}}function b(C,ee){1&C&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function ae(C,ee){if(1&C&&i._UZ(0,"nz-list-item-meta-avatar",3),2&C){const x=i.oxw();i.Q6J("nzSrc",x.avatarStr)}}function F(C,ee){if(1&C&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",x.avatarTpl)}}function E(C,ee){if(1&C&&(i.ynx(0),i._uU(1),i.BQk()),2&C){const x=i.oxw(3);i.xp6(1),i.Oqu(x.nzTitle)}}function h(C,ee){if(1&C&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,E,2,1,"ng-container",6),i.qZA()),2&C){const x=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",x.nzTitle)}}function M(C,ee){if(1&C&&(i.ynx(0),i._uU(1),i.BQk()),2&C){const x=i.oxw(3);i.xp6(1),i.Oqu(x.nzDescription)}}function P(C,ee){if(1&C&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,M,2,1,"ng-container",6),i.qZA()),2&C){const x=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",x.nzDescription)}}function L(C,ee){if(1&C&&(i.TgZ(0,"div",5),i.YNc(1,h,2,1,"nz-list-item-meta-title",1),i.YNc(2,P,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("ngIf",x.nzTitle&&!x.titleComponent),i.xp6(1),i.Q6J("ngIf",x.nzDescription&&!x.descriptionComponent)}}const B=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],p=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function K(C,ee){1&C&&i.Hsn(0)}const k=["nz-list-item-actions",""];function X(C,ee){}function xe(C,ee){1&C&&i._UZ(0,"em",3)}function se(C,ee){if(1&C&&(i.TgZ(0,"li"),i.YNc(1,X,0,0,"ng-template",1),i.YNc(2,xe,1,0,"em",2),i.qZA()),2&C){const x=ee.$implicit,pe=ee.last;i.xp6(1),i.Q6J("ngTemplateOutlet",x),i.xp6(1),i.Q6J("ngIf",!pe)}}function ye(C,ee){}const q=function(C,ee){return{$implicit:C,index:ee}};function me(C,ee){if(1&C&&(i.ynx(0),i.YNc(1,ye,0,0,"ng-template",9),i.BQk()),2&C){const x=ee.$implicit,pe=ee.index,Ne=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",Ne.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,q,x,pe))}}function ie(C,ee){if(1&C&&(i.TgZ(0,"div",7),i.YNc(1,me,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("ngForOf",x.nzDataSource)}}function ze(C,ee){if(1&C&&(i.ynx(0),i._uU(1),i.BQk()),2&C){const x=i.oxw(2);i.xp6(1),i.Oqu(x.nzHeader)}}function Oe(C,ee){if(1&C&&(i.TgZ(0,"nz-list-header"),i.YNc(1,ze,2,1,"ng-container",10),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",x.nzHeader)}}function V(C,ee){1&C&&i._UZ(0,"div"),2&C&&i.Udp("min-height",53,"px")}function fe(C,ee){}function G(C,ee){if(1&C&&(i.TgZ(0,"div",13),i.YNc(1,fe,0,0,"ng-template",9),i.qZA()),2&C){const x=ee.$implicit,pe=ee.index,Ne=i.oxw(2);i.Q6J("nzSpan",Ne.nzGrid.span||null)("nzXs",Ne.nzGrid.xs||null)("nzSm",Ne.nzGrid.sm||null)("nzMd",Ne.nzGrid.md||null)("nzLg",Ne.nzGrid.lg||null)("nzXl",Ne.nzGrid.xl||null)("nzXXl",Ne.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",Ne.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,q,x,pe))}}function he(C,ee){if(1&C&&(i.TgZ(0,"div",11),i.YNc(1,G,2,12,"div",12),i.qZA()),2&C){const x=i.oxw();i.Q6J("nzGutter",x.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",x.nzDataSource)}}function ce(C,ee){if(1&C&&i._UZ(0,"nz-list-empty",14),2&C){const x=i.oxw();i.Q6J("nzNoResult",x.nzNoResult)}}function De(C,ee){if(1&C&&(i.ynx(0),i._uU(1),i.BQk()),2&C){const x=i.oxw(2);i.xp6(1),i.Oqu(x.nzFooter)}}function Pe(C,ee){if(1&C&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,De,2,1,"ng-container",10),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",x.nzFooter)}}function re(C,ee){}function Ie(C,ee){}function ge(C,ee){if(1&C&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Ie,0,0,"ng-template",6),i.qZA()),2&C){const x=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",x.nzPagination)}}const Ae=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],U=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function _e(C,ee){if(1&C&&i._UZ(0,"ul",6),2&C){const x=i.oxw(2);i.Q6J("nzActions",x.nzActions)}}function W(C,ee){if(1&C&&(i.YNc(0,_e,1,1,"ul",5),i.Hsn(1)),2&C){const x=i.oxw();i.Q6J("ngIf",x.nzActions&&x.nzActions.length>0)}}function Se(C,ee){if(1&C&&(i.ynx(0),i._uU(1),i.BQk()),2&C){const x=i.oxw(3);i.xp6(1),i.Oqu(x.nzContent)}}function be(C,ee){if(1&C&&(i.ynx(0),i.YNc(1,Se,2,1,"ng-container",8),i.BQk()),2&C){const x=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",x.nzContent)}}function Ge(C,ee){if(1&C&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,be,2,1,"ng-container",7)),2&C){const x=i.oxw();i.xp6(2),i.Q6J("ngIf",x.nzContent)}}function tt(C,ee){1&C&&i.Hsn(0,3)}function nt(C,ee){}function Ke(C,ee){}function Ve(C,ee){}function y(C,ee){}function He(C,ee){if(1&C&&(i.YNc(0,nt,0,0,"ng-template",9),i.YNc(1,Ke,0,0,"ng-template",9),i.YNc(2,Ve,0,0,"ng-template",9),i.YNc(3,y,0,0,"ng-template",9)),2&C){const x=i.oxw(),pe=i.MAs(3),Ne=i.MAs(5),Fe=i.MAs(1);i.Q6J("ngTemplateOutlet",pe),i.xp6(1),i.Q6J("ngTemplateOutlet",x.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Ne),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}function Xe(C,ee){}function Ye(C,ee){}function lt(C,ee){}function Ue(C,ee){if(1&C&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,lt,0,0,"ng-template",9),i.qZA()),2&C){const x=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",x.nzExtra)}}function pt(C,ee){}function v(C,ee){if(1&C&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,Xe,0,0,"ng-template",9),i.YNc(3,Ye,0,0,"ng-template",9),i.qZA(),i.YNc(4,Ue,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&C){const x=i.oxw(),pe=i.MAs(3),Ne=i.MAs(1),Fe=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",pe),i.xp6(1),i.Q6J("ngTemplateOutlet",Ne),i.xp6(1),i.Q6J("ngIf",x.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Fe)}}const l=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],Ce=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let z=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:w,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(x,pe){1&x&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),C})(),g=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:w,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(x,pe){1&x&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),C})(),ve=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:w,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(x,pe){1&x&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,A,1,1,"nz-avatar",1),i.YNc(2,b,1,0,"ng-content",2),i.qZA()),2&x&&(i.xp6(1),i.Q6J("ngIf",pe.nzSrc),i.xp6(1),i.Q6J("ngIf",!pe.nzSrc))},directives:[t.Dz,n.O5],encapsulation:2,changeDetection:0}),C})(),Ee=(()=>{class C{constructor(x,pe){this.elementRef=x,this.renderer=pe,this.avatarStr="",this.renderer.addClass(x.nativeElement,"ant-list-item-meta")}set nzAvatar(x){x instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=x):this.avatarStr=x}}return C.\u0275fac=function(x){return new(x||C)(i.Y36(i.SBq),i.Y36(i.Qsj))},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(x,pe,Ne){if(1&x&&(i.Suo(Ne,g,5),i.Suo(Ne,z,5)),2&x){let Fe;i.iGM(Fe=i.CRH())&&(pe.descriptionComponent=Fe.first),i.iGM(Fe=i.CRH())&&(pe.titleComponent=Fe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:p,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(x,pe){1&x&&(i.F$t(B),i.YNc(0,ae,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,F,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,L,5,2,"div",2)),2&x&&(i.Q6J("ngIf",pe.avatarStr),i.xp6(1),i.Q6J("ngIf",pe.avatarTpl),i.xp6(2),i.Q6J("ngIf",pe.nzTitle||pe.nzDescription||pe.descriptionComponent||pe.titleComponent))},directives:[ve,z,g,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),C})(),Re=(()=>{class C{constructor(){}}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:w,decls:1,vars:0,template:function(x,pe){1&x&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),C})(),We=(()=>{class C{constructor(){}}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item-action"]],viewQuery:function(x,pe){if(1&x&&i.Gf(i.Rgc,5),2&x){let Ne;i.iGM(Ne=i.CRH())&&(pe.templateRef=Ne.first)}},exportAs:["nzListItemAction"],ngContentSelectors:w,decls:1,vars:0,template:function(x,pe){1&x&&(i.F$t(),i.YNc(0,K,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),C})(),$e=(()=>{class C{constructor(x,pe){this.ngZone=x,this.cdr=pe,this.nzActions=[],this.actions=[],this.destroy$=new c.xQ,this.inputActionChanges$=new c.xQ,this.contentChildrenChanges$=(0,J.P)(()=>this.nzListItemActions?(0,u.of)(null):this.ngZone.onStable.asObservable().pipe((0,Y.q)(1),(0,$.w)(()=>this.contentChildrenChanges$))),(0,I.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,ne.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Ne=>Ne.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return C.\u0275fac=function(x){return new(x||C)(i.Y36(i.R0b),i.Y36(i.sBO))},C.\u0275cmp=i.Xpm({type:C,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(x,pe,Ne){if(1&x&&i.Suo(Ne,We,4),2&x){let Fe;i.iGM(Fe=i.CRH())&&(pe.nzListItemActions=Fe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:k,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(x,pe){1&x&&i.YNc(0,se,3,2,"li",0),2&x&&i.Q6J("ngForOf",pe.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),C})(),Be=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(x,pe){1&x&&i._UZ(0,"nz-embed-empty",0),2&x&&i.Q6J("nzComponentName","list")("specificContent",pe.nzNoResult)},directives:[R.gB],encapsulation:2,changeDetection:0}),C})(),ke=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:w,decls:1,vars:0,template:function(x,pe){1&x&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),C})(),Je=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:w,decls:1,vars:0,template:function(x,pe){1&x&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),C})(),qe=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:w,decls:1,vars:0,template:function(x,pe){1&x&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),C})(),rt=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275dir=i.lG2({type:C,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),C})(),Ze=(()=>{class C{constructor(x){this.directionality=x,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new O.X(this.nzItemLayout),this.destroy$=new c.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var x;this.dir=this.directionality.value,null===(x=this.directionality.change)||void 0===x||x.pipe((0,ne.R)(this.destroy$)).subscribe(pe=>{this.dir=pe})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(x){x.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return C.\u0275fac=function(x){return new(x||C)(i.Y36(le.Is,8))},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(x,pe,Ne){if(1&x&&(i.Suo(Ne,Je,5),i.Suo(Ne,qe,5),i.Suo(Ne,rt,5)),2&x){let Fe;i.iGM(Fe=i.CRH())&&(pe.nzListFooterComponent=Fe.first),i.iGM(Fe=i.CRH())&&(pe.nzListPaginationComponent=Fe.first),i.iGM(Fe=i.CRH())&&(pe.nzListLoadMoreDirective=Fe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(x,pe){2&x&&i.ekj("ant-list-rtl","rtl"===pe.dir)("ant-list-vertical","vertical"===pe.nzItemLayout)("ant-list-lg","large"===pe.nzSize)("ant-list-sm","small"===pe.nzSize)("ant-list-split",pe.nzSplit)("ant-list-bordered",pe.nzBordered)("ant-list-loading",pe.nzLoading)("ant-list-something-after-last-item",pe.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:U,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(x,pe){if(1&x&&(i.F$t(Ae),i.YNc(0,ie,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Oe,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,V,1,2,"div",3),i.YNc(7,he,2,2,"div",4),i.YNc(8,ce,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Pe,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,re,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,ge,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&x){const Ne=i.MAs(1);i.xp6(2),i.Q6J("ngIf",pe.nzHeader),i.xp6(2),i.Q6J("nzSpinning",pe.nzLoading),i.xp6(2),i.Q6J("ngIf",pe.nzLoading&&pe.nzDataSource&&0===pe.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",pe.nzGrid&&pe.nzDataSource)("ngIfElse",Ne),i.xp6(1),i.Q6J("ngIf",!pe.nzLoading&&pe.nzDataSource&&0===pe.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",pe.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",pe.nzLoadMore),i.xp6(2),i.Q6J("ngIf",pe.nzPagination)}},directives:[ke,H.W,Be,Je,qe,n.sg,n.tP,n.O5,s.f,Z.SK,Z.t3],encapsulation:2,changeDetection:0}),(0,N.gn)([(0,_.yF)()],C.prototype,"nzBordered",void 0),(0,N.gn)([(0,_.yF)()],C.prototype,"nzLoading",void 0),(0,N.gn)([(0,_.yF)()],C.prototype,"nzSplit",void 0),C})(),ot=(()=>{class C{constructor(x,pe,Ne,Fe){this.parentComp=Ne,this.cdr=Fe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,pe.addClass(x.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(x=>{this.itemLayout=x,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return C.\u0275fac=function(x){return new(x||C)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ze),i.Y36(i.sBO))},C.\u0275cmp=i.Xpm({type:C,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(x,pe,Ne){if(1&x&&i.Suo(Ne,Re,5),2&x){let Fe;i.iGM(Fe=i.CRH())&&(pe.listItemExtraDirective=Fe.first)}},hostVars:2,hostBindings:function(x,pe){2&x&&i.ekj("ant-list-item-no-flex",pe.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:Ce,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(x,pe){if(1&x&&(i.F$t(l),i.YNc(0,W,2,1,"ng-template",null,0,i.W1O),i.YNc(2,Ge,3,1,"ng-template",null,1,i.W1O),i.YNc(4,tt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,He,4,4,"ng-template",null,3,i.W1O),i.YNc(8,v,6,4,"ng-container",4)),2&x){const Ne=i.MAs(7);i.xp6(8),i.Q6J("ngIf",pe.isVerticalAndExtra)("ngIfElse",Ne)}},directives:[$e,Re,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,N.gn)([(0,_.yF)()],C.prototype,"nzNoFlex",void 0),C})(),st=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275mod=i.oAB({type:C}),C.\u0275inj=i.cJS({imports:[[le.vT,n.ez,H.j,Z.Jb,t.Rt,s.T,R.Xo]]}),C})()},4219:(Te,te,o)=>{o.d(te,{hl:()=>W,Cc:()=>U,wO:()=>Ye,YV:()=>pt,uA:()=>Ue,r9:()=>be,ip:()=>v});var i=o(655),t=o(5e3),n=o(8929),s=o(591),N=o(6787),_=o(3426),c=o(4850),J=o(1709),u=o(2198),I=o(7604),O=o(7138),Y=o(5778),$=o(7625),ne=o(1059),R=o(7545),le=o(1721),H=o(325),Z=o(226),w=o(2845),A=o(6950),b=o(925),ae=o(4832),F=o(9808),E=o(647),h=o(969),M=o(8076);const P=["nz-submenu-title",""];function L(l,Ce){if(1&l&&t._UZ(0,"i",4),2&l){const z=t.oxw();t.Q6J("nzType",z.nzIcon)}}function B(l,Ce){if(1&l&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&l){const z=t.oxw();t.xp6(2),t.Oqu(z.nzTitle)}}function p(l,Ce){1&l&&t._UZ(0,"i",8)}function K(l,Ce){1&l&&t._UZ(0,"i",9)}function k(l,Ce){if(1&l&&(t.TgZ(0,"span",5),t.YNc(1,p,1,0,"i",6),t.YNc(2,K,1,0,"i",7),t.qZA()),2&l){const z=t.oxw();t.Q6J("ngSwitch",z.dir),t.xp6(1),t.Q6J("ngSwitchCase","rtl")}}function X(l,Ce){1&l&&t._UZ(0,"i",10)}const xe=["*"],se=["nz-submenu-inline-child",""];function ye(l,Ce){}const q=["nz-submenu-none-inline-child",""];function me(l,Ce){}const ie=["nz-submenu",""];function ze(l,Ce){1&l&&t.Hsn(0,0,["*ngIf","!nzTitle"])}function Oe(l,Ce){if(1&l&&t._UZ(0,"div",6),2&l){const z=t.oxw(),g=t.MAs(7);t.Q6J("mode",z.mode)("nzOpen",z.nzOpen)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("menuClass",z.nzMenuClassName)("templateOutlet",g)}}function V(l,Ce){if(1&l){const z=t.EpF();t.TgZ(0,"div",8),t.NdJ("subMenuMouseState",function(ve){return t.CHM(z),t.oxw(2).setMouseEnterState(ve)}),t.qZA()}if(2&l){const z=t.oxw(2),g=t.MAs(7);t.Q6J("theme",z.theme)("mode",z.mode)("nzOpen",z.nzOpen)("position",z.position)("nzDisabled",z.nzDisabled)("isMenuInsideDropDown",z.isMenuInsideDropDown)("templateOutlet",g)("menuClass",z.nzMenuClassName)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)}}function fe(l,Ce){if(1&l){const z=t.EpF();t.YNc(0,V,1,10,"ng-template",7),t.NdJ("positionChange",function(ve){return t.CHM(z),t.oxw().onPositionChange(ve)})}if(2&l){const z=t.oxw(),g=t.MAs(1);t.Q6J("cdkConnectedOverlayPositions",z.overlayPositions)("cdkConnectedOverlayOrigin",g)("cdkConnectedOverlayWidth",z.triggerWidth)("cdkConnectedOverlayOpen",z.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function G(l,Ce){1&l&&t.Hsn(0,1)}const he=[[["","title",""]],"*"],ce=["[title]","*"],De=["titleElement"],Pe=["nz-menu-group",""];function re(l,Ce){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const z=t.oxw();t.xp6(1),t.Oqu(z.nzTitle)}}function Ie(l,Ce){1&l&&t.Hsn(0,1,["*ngIf","!nzTitle"])}const ge=["*",[["","title",""]]],Ae=["*","[title]"],U=new t.OlP("NzIsInDropDownMenuToken"),_e=new t.OlP("NzMenuServiceLocalToken");let W=(()=>{class l{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(z){this.descendantMenuItemClick$.next(z)}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setMode(z){this.mode$.next(z)}setTheme(z){this.theme$.next(z)}setInlineIndent(z){this.inlineIndent$.next(z)}}return l.\u0275fac=function(z){return new(z||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),Se=(()=>{class l{constructor(z,g,ve){this.nzHostSubmenuService=z,this.nzMenuService=g,this.isMenuInsideDropDown=ve,this.mode$=this.nzMenuService.mode$.pipe((0,c.U)($e=>"inline"===$e?"inline":"vertical"===$e||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ee=this.childMenuItemClick$.pipe((0,J.zg)(()=>this.mode$),(0,u.h)($e=>"inline"!==$e||this.isMenuInsideDropDown),(0,I.h)(!1)),Re=(0,N.T)(this.isMouseEnterTitleOrOverlay$,Ee);(0,_.aj)([this.isChildSubMenuOpen$,Re]).pipe((0,c.U)(([$e,Be])=>$e||Be),(0,O.e)(150),(0,Y.x)(),(0,$.R)(this.destroy$)).pipe((0,Y.x)()).subscribe($e=>{this.setOpenStateWithoutDebounce($e),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next($e):this.nzMenuService.isChildSubMenuOpen$.next($e)})}onChildMenuItemClick(z){this.childMenuItemClick$.next(z)}setOpenStateWithoutDebounce(z){this.isCurrentSubMenuOpen$.next(z)}setMouseEnterTitleOrOverlayState(z){this.isMouseEnterTitleOrOverlay$.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.LFG(l,12),t.LFG(W),t.LFG(U))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),be=(()=>{class l{constructor(z,g,ve,Ee,Re,We,$e,Be){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=ve,this.isMenuInsideDropDown=Ee,this.directionality=Re,this.routerLink=We,this.routerLinkWithHref=$e,this.router=Be,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Be&&this.router.events.pipe((0,$.R)(this.destroy$),(0,u.h)(ke=>ke instanceof H.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(z){this.nzDisabled?(z.preventDefault(),z.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(z){this.nzSelected=z,this.selected$.next(z)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const z=this.hasActiveLinks();this.nzSelected!==z&&(this.nzSelected=z,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const z=this.isLinkActive(this.router);return this.routerLink&&z(this.routerLink)||this.routerLinkWithHref&&z(this.routerLinkWithHref)||this.listOfRouterLink.some(z)||this.listOfRouterLinkWithHref.some(z)}isLinkActive(z){return g=>z.isActive(g.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var z;(0,_.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,$.R)(this.destroy$)).subscribe(([g,ve])=>{this.inlinePaddingLeft="inline"===g?this.level*ve:null}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,$.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,$.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(z){z.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(W),t.Y36(t.sBO),t.Y36(Se,8),t.Y36(U),t.Y36(Z.Is,8),t.Y36(H.rH,8),t.Y36(H.yS,8),t.Y36(H.F0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-item",""]],contentQueries:function(z,g,ve){if(1&z&&(t.Suo(ve,H.rH,5),t.Suo(ve,H.yS,5)),2&z){let Ee;t.iGM(Ee=t.CRH())&&(g.listOfRouterLink=Ee),t.iGM(Ee=t.CRH())&&(g.listOfRouterLinkWithHref=Ee)}},hostVars:20,hostBindings:function(z,g){1&z&&t.NdJ("click",function(Ee){return g.clickMenuItem(Ee)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.nzPaddingLeft||g.inlinePaddingLeft,"px")("padding-right","rtl"===g.dir?g.nzPaddingLeft||g.inlinePaddingLeft:null,"px"),t.ekj("ant-dropdown-menu-item",g.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",g.isMenuInsideDropDown&&g.nzSelected)("ant-dropdown-menu-item-danger",g.isMenuInsideDropDown&&g.nzDanger)("ant-dropdown-menu-item-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-item",!g.isMenuInsideDropDown)("ant-menu-item-selected",!g.isMenuInsideDropDown&&g.nzSelected)("ant-menu-item-danger",!g.isMenuInsideDropDown&&g.nzDanger)("ant-menu-item-disabled",!g.isMenuInsideDropDown&&g.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[t.TTD]}),(0,i.gn)([(0,le.yF)()],l.prototype,"nzDisabled",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzSelected",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzDanger",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzMatchRouter",void 0),l})(),Ge=(()=>{class l{constructor(z,g){this.cdr=z,this.directionality=g,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new t.vpe,this.subMenuMouseState=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var z;this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.sBO),t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(z,g){1&z&&t.NdJ("click",function(){return g.clickTitle()})("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.Udp("padding-left","rtl"===g.dir?null:g.paddingLeft,"px")("padding-right","rtl"===g.dir?g.paddingLeft:null,"px"),t.ekj("ant-dropdown-menu-submenu-title",g.isMenuInsideDropDown)("ant-menu-submenu-title",!g.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:P,ngContentSelectors:xe,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(z,g){if(1&z&&(t.F$t(),t.YNc(0,L,1,1,"i",0),t.YNc(1,B,3,1,"ng-container",1),t.Hsn(2),t.YNc(3,k,3,2,"span",2),t.YNc(4,X,1,0,"ng-template",null,3,t.W1O)),2&z){const ve=t.MAs(5);t.Q6J("ngIf",g.nzIcon),t.xp6(1),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(2),t.Q6J("ngIf",g.isMenuInsideDropDown)("ngIfElse",ve)}},directives:[F.O5,E.Ls,h.f,F.RF,F.n9,F.ED],encapsulation:2,changeDetection:0}),l})(),tt=(()=>{class l{constructor(z,g,ve){this.elementRef=z,this.renderer=g,this.directionality=ve,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:ve,menuClass:Ee}=z;(g||ve)&&this.calcMotionState(),Ee&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Re=>!!Re).forEach(Re=>{this.renderer.removeClass(this.elementRef.nativeElement,Re)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Re=>!!Re).forEach(Re=>{this.renderer.addClass(this.elementRef.nativeElement,Re)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(z,g){2&z&&(t.d8E("@collapseMotion",g.expandState),t.ekj("ant-menu-rtl","rtl"===g.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[t.TTD],attrs:se,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&t.YNc(0,ye,0,0,"ng-template",0),2&z&&t.Q6J("ngTemplateOutlet",g.templateOutlet)},directives:[F.tP],encapsulation:2,data:{animation:[M.J_]},changeDetection:0}),l})(),nt=(()=>{class l{constructor(z){this.directionality=z,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new t.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(z){this.nzDisabled||this.subMenuMouseState.next(z)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var z;this.calcMotionState(),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(z){const{mode:g,nzOpen:ve}=z;(g||ve)&&this.calcMotionState()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(Z.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(z,g){1&z&&t.NdJ("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&z&&(t.d8E("@slideMotion",g.expandState)("@zoomBigMotion",g.expandState),t.ekj("ant-menu-light","light"===g.theme)("ant-menu-dark","dark"===g.theme)("ant-menu-submenu-placement-bottom","horizontal"===g.mode)("ant-menu-submenu-placement-right","vertical"===g.mode&&"right"===g.position)("ant-menu-submenu-placement-left","vertical"===g.mode&&"left"===g.position)("ant-menu-submenu-rtl","rtl"===g.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[t.TTD],attrs:q,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(z,g){1&z&&(t.TgZ(0,"div",0),t.YNc(1,me,0,0,"ng-template",1),t.qZA()),2&z&&(t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-menu",!g.isMenuInsideDropDown)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown)("ant-menu-vertical",!g.isMenuInsideDropDown)("ant-dropdown-menu-sub",g.isMenuInsideDropDown)("ant-menu-sub",!g.isMenuInsideDropDown)("ant-menu-rtl","rtl"===g.dir),t.Q6J("ngClass",g.menuClass),t.xp6(1),t.Q6J("ngTemplateOutlet",g.templateOutlet))},directives:[F.mk,F.tP],encapsulation:2,data:{animation:[M.$C,M.mF]},changeDetection:0}),l})();const Ke=[A.yW.rightTop,A.yW.right,A.yW.rightBottom,A.yW.leftTop,A.yW.left,A.yW.leftBottom],Ve=[A.yW.bottomLeft];let y=(()=>{class l{constructor(z,g,ve,Ee,Re,We,$e){this.nzMenuService=z,this.cdr=g,this.nzSubmenuService=ve,this.platform=Ee,this.isMenuInsideDropDown=Re,this.directionality=We,this.noAnimation=$e,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new t.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ke,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(z){this.nzSubmenuService.setOpenStateWithoutDebounce(z)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(z){this.isActive=z,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(z)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(z){const g=(0,A.d_)(z);"rightTop"===g||"rightBottom"===g||"right"===g?this.position="right":("leftTop"===g||"leftBottom"===g||"left"===g)&&(this.position="left")}ngOnInit(){var z;this.nzMenuService.theme$.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.theme=g,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.mode=g,"horizontal"===g?this.overlayPositions=Ve:"vertical"===g&&(this.overlayPositions=Ke),this.cdr.markForCheck()}),(0,_.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,$.R)(this.destroy$)).subscribe(([g,ve])=>{this.inlinePaddingLeft="inline"===g?this.level*ve:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.isActive=g,g!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=g,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const z=this.listOfNzMenuItemDirective,g=z.changes,ve=(0,N.T)(g,...z.map(Ee=>Ee.selected$));g.pipe((0,ne.O)(z),(0,R.w)(()=>ve),(0,ne.O)(!0),(0,c.U)(()=>z.some(Ee=>Ee.nzSelected)),(0,$.R)(this.destroy$)).subscribe(Ee=>{this.isSelected=Ee,this.cdr.markForCheck()})}ngOnChanges(z){const{nzOpen:g}=z;g&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(W),t.Y36(t.sBO),t.Y36(Se),t.Y36(b.t4),t.Y36(U),t.Y36(Z.Is,8),t.Y36(ae.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-submenu",""]],contentQueries:function(z,g,ve){if(1&z&&(t.Suo(ve,l,5),t.Suo(ve,be,5)),2&z){let Ee;t.iGM(Ee=t.CRH())&&(g.listOfNzSubMenuComponent=Ee),t.iGM(Ee=t.CRH())&&(g.listOfNzMenuItemDirective=Ee)}},viewQuery:function(z,g){if(1&z&&t.Gf(w.xu,7,t.SBq),2&z){let ve;t.iGM(ve=t.CRH())&&(g.cdkOverlayOrigin=ve.first)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu-submenu",g.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-dropdown-menu-submenu-open",g.isMenuInsideDropDown&&g.nzOpen)("ant-dropdown-menu-submenu-selected",g.isMenuInsideDropDown&&g.isSelected)("ant-dropdown-menu-submenu-vertical",g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-dropdown-menu-submenu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-dropdown-menu-submenu-inline",g.isMenuInsideDropDown&&"inline"===g.mode)("ant-dropdown-menu-submenu-active",g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu",!g.isMenuInsideDropDown)("ant-menu-submenu-disabled",!g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-submenu-open",!g.isMenuInsideDropDown&&g.nzOpen)("ant-menu-submenu-selected",!g.isMenuInsideDropDown&&g.isSelected)("ant-menu-submenu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-menu-submenu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-menu-submenu-inline",!g.isMenuInsideDropDown&&"inline"===g.mode)("ant-menu-submenu-active",!g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu-rtl","rtl"===g.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[t._Bn([Se]),t.TTD],attrs:ie,ngContentSelectors:ce,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(z,g){if(1&z&&(t.F$t(he),t.TgZ(0,"div",0,1),t.NdJ("subMenuMouseState",function(Ee){return g.setMouseEnterState(Ee)})("toggleSubMenu",function(){return g.toggleSubMenu()}),t.YNc(2,ze,1,0,"ng-content",2),t.qZA(),t.YNc(3,Oe,1,6,"div",3),t.YNc(4,fe,1,5,"ng-template",null,4,t.W1O),t.YNc(6,G,1,0,"ng-template",null,5,t.W1O)),2&z){const ve=t.MAs(5);t.Q6J("nzIcon",g.nzIcon)("nzTitle",g.nzTitle)("mode",g.mode)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("paddingLeft",g.nzPaddingLeft||g.inlinePaddingLeft),t.xp6(2),t.Q6J("ngIf",!g.nzTitle),t.xp6(1),t.Q6J("ngIf","inline"===g.mode)("ngIfElse",ve)}},directives:[Ge,tt,nt,w.xu,F.O5,ae.P,w.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,le.yF)()],l.prototype,"nzOpen",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzDisabled",void 0),l})();function He(l,Ce){return l||Ce}function Xe(l){return l||!1}let Ye=(()=>{class l{constructor(z,g,ve,Ee){this.nzMenuService=z,this.isMenuInsideDropDown=g,this.cdr=ve,this.directionality=Ee,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new t.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(z){this.nzInlineCollapsed=z,this.inlineCollapsed$.next(z)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(z=>z.nzOpen),this.listOfNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(z=>z.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var z;(0,_.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,$.R)(this.destroy$)).subscribe(([g,ve])=>{this.actualMode=g?"vertical":ve,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.nzClick.emit(g),this.nzSelectable&&!g.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ve=>ve.setSelectedState(ve===g))}),this.dir=this.directionality.value,null===(z=this.directionality.change)||void 0===z||z.pipe((0,$.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,$.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(z){const{nzInlineCollapsed:g,nzInlineIndent:ve,nzTheme:Ee,nzMode:Re}=z;g&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ve&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ee&&this.nzMenuService.setTheme(this.nzTheme),Re&&(this.mode$.next(this.nzMode),!z.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(We=>We.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(W),t.Y36(U),t.Y36(t.sBO),t.Y36(Z.Is,8))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu",""]],contentQueries:function(z,g,ve){if(1&z&&(t.Suo(ve,be,5),t.Suo(ve,y,5)),2&z){let Ee;t.iGM(Ee=t.CRH())&&(g.listOfNzMenuItemDirective=Ee),t.iGM(Ee=t.CRH())&&(g.listOfNzSubMenuComponent=Ee)}},hostVars:34,hostBindings:function(z,g){2&z&&t.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-dropdown-menu-root",g.isMenuInsideDropDown)("ant-dropdown-menu-light",g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-dropdown-menu-dark",g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-dropdown-menu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-dropdown-menu-inline",g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-dropdown-menu-inline-collapsed",g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu",!g.isMenuInsideDropDown)("ant-menu-root",!g.isMenuInsideDropDown)("ant-menu-light",!g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-menu-dark",!g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-menu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-menu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-menu-inline",!g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-menu-inline-collapsed",!g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu-rtl","rtl"===g.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[t._Bn([{provide:_e,useClass:W},{provide:W,useFactory:He,deps:[[new t.tp0,new t.FiY,W],_e]},{provide:U,useFactory:Xe,deps:[[new t.tp0,new t.FiY,U]]}]),t.TTD]}),(0,i.gn)([(0,le.yF)()],l.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,le.yF)()],l.prototype,"nzSelectable",void 0),l})();function lt(l){return l||!1}let Ue=(()=>{class l{constructor(z,g,ve){this.elementRef=z,this.renderer=g,this.isMenuInsideDropDown=ve,this.renderer.addClass(z.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const z=this.titleElement.nativeElement.nextElementSibling;z&&this.renderer.addClass(z,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(U))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-menu-group",""]],viewQuery:function(z,g){if(1&z&&t.Gf(De,5),2&z){let ve;t.iGM(ve=t.CRH())&&(g.titleElement=ve.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[t._Bn([{provide:U,useFactory:lt,deps:[[new t.tp0,new t.FiY,U]]}])],attrs:Pe,ngContentSelectors:Ae,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(z,g){1&z&&(t.F$t(ge),t.TgZ(0,"div",null,0),t.YNc(2,re,2,1,"ng-container",1),t.YNc(3,Ie,1,0,"ng-content",2),t.qZA(),t.Hsn(4)),2&z&&(t.ekj("ant-menu-item-group-title",!g.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",g.isMenuInsideDropDown),t.xp6(2),t.Q6J("nzStringTemplateOutlet",g.nzTitle),t.xp6(1),t.Q6J("ngIf",!g.nzTitle))},directives:[h.f,F.O5],encapsulation:2,changeDetection:0}),l})(),pt=(()=>{class l{constructor(z,g){this.elementRef=z,this.renderer=g,this.renderer.addClass(z.nativeElement,"ant-dropdown-menu-item-divider")}}return l.\u0275fac=function(z){return new(z||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(z){return new(z||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[Z.vT,F.ez,b.ud,w.U8,E.PV,ae.g,h.T]]}),l})()},3610:(Te,te,o)=>{o.d(te,{lU:()=>Z,$6:()=>A});var i=o(655),t=o(5e3),n=o(8076),s=o(9439),N=o(1721),_=o(404),c=o(4832),J=o(226),u=o(2845),I=o(6950),O=o(9808),Y=o(969);function $(b,ae){if(1&b&&(t.ynx(0),t._uU(1),t.BQk()),2&b){const F=t.oxw(3);t.xp6(1),t.Oqu(F.nzTitle)}}function ne(b,ae){if(1&b&&(t.TgZ(0,"div",10),t.YNc(1,$,2,1,"ng-container",9),t.qZA()),2&b){const F=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",F.nzTitle)}}function R(b,ae){if(1&b&&(t.ynx(0),t._uU(1),t.BQk()),2&b){const F=t.oxw(2);t.xp6(1),t.Oqu(F.nzContent)}}function le(b,ae){if(1&b&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,ne,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,R,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&b){const F=t.oxw();t.ekj("ant-popover-rtl","rtl"===F.dir),t.Q6J("ngClass",F._classMap)("ngStyle",F.nzOverlayStyle)("@.disabled",null==F.noAnimation?null:F.noAnimation.nzNoAnimation)("nzNoAnimation",null==F.noAnimation?null:F.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",F.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",F.nzContent)}}let Z=(()=>{class b extends _.Mg{constructor(F,E,h,M,P,L){super(F,E,h,M,P,L),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(w)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return b.\u0275fac=function(F){return new(F||b)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(c.P,9),t.Y36(s.jY))},b.\u0275dir=t.lG2({type:b,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(F,E){2&F&&t.ekj("ant-popover-open",E.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,i.gn)([(0,N.yF)()],b.prototype,"arrowPointAtCenter",void 0),(0,i.gn)([(0,s.oS)()],b.prototype,"nzPopoverBackdrop",void 0),b})(),w=(()=>{class b extends _.XK{constructor(F,E,h){super(F,E,h),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,_.pu)(this.nzTitle)&&(0,_.pu)(this.nzContent)}}return b.\u0275fac=function(F){return new(F||b)(t.Y36(t.sBO),t.Y36(J.Is,8),t.Y36(c.P,9))},b.\u0275cmp=t.Xpm({type:b,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(F,E){1&F&&(t.YNc(0,le,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(M){return E.onClickOutside(M)})("detach",function(){return E.hide()})("positionChange",function(M){return E.onPositionChange(M)})),2&F&&t.Q6J("cdkConnectedOverlayHasBackdrop",E.hasBackdrop)("cdkConnectedOverlayOrigin",E.origin)("cdkConnectedOverlayPositions",E._positions)("cdkConnectedOverlayOpen",E._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",E.nzArrowPointAtCenter)},directives:[u.pI,I.hQ,O.mk,O.PC,c.P,O.O5,Y.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),b})(),A=(()=>{class b{}return b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[[J.vT,O.ez,u.U8,Y.T,I.e4,c.g,_.cg]]}),b})()},8144:(Te,te,o)=>{o.d(te,{NU:()=>H,$1:()=>ne,zf:()=>Z});var i=o(226),t=o(9808),n=o(5e3),s=o(655),N=o(8929),_=o(7625),c=o(9439),J=o(1721);function u(w,A){}const I=function(w){return{$implicit:w}};function O(w,A){if(1&w&&(n.TgZ(0,"span",4),n.YNc(1,u,0,0,"ng-template",5),n.qZA()),2&w){const b=n.oxw(),ae=b.last,F=b.index,E=n.oxw();n.Udp("margin-bottom","vertical"===E.nzDirection?ae?null:E.spaceSize:null,"px")("margin-right","horizontal"===E.nzDirection?ae?null:E.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",E.nzSplit)("ngTemplateOutletContext",n.VKq(6,I,F))}}function Y(w,A){if(1&w&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,O,2,8,"span",3)),2&w){const b=A.$implicit,ae=A.last,F=n.oxw();n.Udp("margin-bottom","vertical"===F.nzDirection?ae?null:F.spaceSize:null,"px")("margin-right","horizontal"===F.nzDirection?ae?null:F.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",b),n.xp6(1),n.Q6J("ngIf",F.nzSplit&&!ae)}}const $=["*"];let ne=(()=>{class w{constructor(){}}return w.\u0275fac=function(b){return new(b||w)},w.\u0275dir=n.lG2({type:w,selectors:[["","nzSpaceItem",""]]}),w})();const le={small:8,middle:16,large:24};let H=(()=>{class w{constructor(b,ae){this.nzConfigService=b,this.cdr=ae,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=le.small,this.destroy$=new N.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?le[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return w.\u0275fac=function(b){return new(b||w)(n.Y36(c.jY),n.Y36(n.sBO))},w.\u0275cmp=n.Xpm({type:w,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(b,ae,F){if(1&b&&n.Suo(F,ne,4,n.Rgc),2&b){let E;n.iGM(E=n.CRH())&&(ae.items=E)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(b,ae){2&b&&(n.Udp("flex-wrap",ae.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===ae.nzDirection)("ant-space-vertical","vertical"===ae.nzDirection)("ant-space-align-start","start"===ae.mergedAlign)("ant-space-align-end","end"===ae.mergedAlign)("ant-space-align-center","center"===ae.mergedAlign)("ant-space-align-baseline","baseline"===ae.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:$,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(b,ae){1&b&&(n.F$t(),n.Hsn(0),n.YNc(1,Y,3,6,"ng-template",0)),2&b&&(n.xp6(1),n.Q6J("ngForOf",ae.items))},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,J.yF)()],w.prototype,"nzWrap",void 0),(0,s.gn)([(0,c.oS)()],w.prototype,"nzSize",void 0),w})(),Z=(()=>{class w{}return w.\u0275fac=function(b){return new(b||w)},w.\u0275mod=n.oAB({type:w}),w.\u0275inj=n.cJS({imports:[[i.vT,t.ez]]}),w})()},7525:(Te,te,o)=>{o.d(te,{W:()=>P,j:()=>L});var i=o(655),t=o(5e3),n=o(8929),s=o(591),N=o(839),_=o(8723),c=o(1177);class u{constructor(p){this.durationSelector=p}call(p,K){return K.subscribe(new I(p,this.durationSelector))}}class I extends c.Ds{constructor(p,K){super(p),this.durationSelector=K,this.hasValue=!1}_next(p){try{const K=this.durationSelector.call(this,p);K&&this._tryNext(p,K)}catch(K){this.destination.error(K)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(p,K){let k=this.durationSubscription;this.value=p,this.hasValue=!0,k&&(k.unsubscribe(),this.remove(k)),k=(0,c.ft)(K,new c.IY(this)),k&&!k.closed&&this.add(this.durationSubscription=k)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const p=this.value,K=this.durationSubscription;K&&(this.durationSubscription=void 0,K.unsubscribe(),this.remove(K)),this.value=void 0,this.hasValue=!1,super._next(p)}}}var O=o(1059),Y=o(5778),$=o(7545),ne=o(7625),R=o(9439),le=o(1721),H=o(226),Z=o(9808),w=o(7144);function A(B,p){1&B&&(t.TgZ(0,"span",3),t._UZ(1,"i",4),t._UZ(2,"i",4),t._UZ(3,"i",4),t._UZ(4,"i",4),t.qZA())}function b(B,p){}function ae(B,p){if(1&B&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&B){const K=t.oxw(2);t.xp6(1),t.Oqu(K.nzTip)}}function F(B,p){if(1&B&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.YNc(2,b,0,0,"ng-template",6),t.YNc(3,ae,2,1,"div",7),t.qZA(),t.qZA()),2&B){const K=t.oxw(),k=t.MAs(1);t.xp6(1),t.ekj("ant-spin-rtl","rtl"===K.dir)("ant-spin-spinning",K.isLoading)("ant-spin-lg","large"===K.nzSize)("ant-spin-sm","small"===K.nzSize)("ant-spin-show-text",K.nzTip),t.xp6(1),t.Q6J("ngTemplateOutlet",K.nzIndicator||k),t.xp6(1),t.Q6J("ngIf",K.nzTip)}}function E(B,p){if(1&B&&(t.TgZ(0,"div",9),t.Hsn(1),t.qZA()),2&B){const K=t.oxw();t.ekj("ant-spin-blur",K.isLoading)}}const h=["*"],M="spin";let P=(()=>{class B{constructor(K,k,X){this.nzConfigService=K,this.cdr=k,this.directionality=X,this._nzModuleName=M,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new N.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var K;this.delay$.pipe((0,O.O)(this.nzDelay),(0,Y.x)(),(0,$.w)(X=>0===X?this.spinning$:this.spinning$.pipe(function J(B){return p=>p.lift(new u(B))}(xe=>(0,_.H)(xe?X:0)))),(0,ne.R)(this.destroy$)).subscribe(X=>{this.isLoading=X,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(M).pipe((0,ne.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(K=this.directionality.change)||void 0===K||K.pipe((0,ne.R)(this.destroy$)).subscribe(X=>{this.dir=X,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(K){const{nzSpinning:k,nzDelay:X}=K;k&&this.spinning$.next(this.nzSpinning),X&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return B.\u0275fac=function(K){return new(K||B)(t.Y36(R.jY),t.Y36(t.sBO),t.Y36(H.Is,8))},B.\u0275cmp=t.Xpm({type:B,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(K,k){2&K&&t.ekj("ant-spin-nested-loading",!k.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[t.TTD],ngContentSelectors:h,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(K,k){1&K&&(t.F$t(),t.YNc(0,A,5,0,"ng-template",null,0,t.W1O),t.YNc(2,F,4,12,"div",1),t.YNc(3,E,2,2,"div",2)),2&K&&(t.xp6(2),t.Q6J("ngIf",k.isLoading),t.xp6(1),t.Q6J("ngIf",!k.nzSimple))},directives:[Z.O5,Z.tP],encapsulation:2}),(0,i.gn)([(0,R.oS)()],B.prototype,"nzIndicator",void 0),(0,i.gn)([(0,le.Rn)()],B.prototype,"nzDelay",void 0),(0,i.gn)([(0,le.yF)()],B.prototype,"nzSimple",void 0),(0,i.gn)([(0,le.yF)()],B.prototype,"nzSpinning",void 0),B})(),L=(()=>{class B{}return B.\u0275fac=function(K){return new(K||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[[H.vT,Z.ez,w.Q8]]}),B})()},8481:(Te,te,o)=>{o.d(te,{j:()=>$,X:()=>ne});var i=o(655),t=o(5e3),n=o(8929),s=o(7625),N=o(8693),_=o(1721),c=o(226),J=o(9808),u=o(647),I=o(4182);function O(R,le){if(1&R){const H=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(w){return t.CHM(H),t.oxw().closeTag(w)}),t.qZA()}}const Y=["*"];let $=(()=>{class R{constructor(H,Z,w,A){this.cdr=H,this.renderer=Z,this.elementRef=w,this.directionality=A,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(H){this.nzOnClose.emit(H),H.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const H=this.elementRef.nativeElement,Z=new RegExp(`(ant-tag-(?:${[...N.uf,...N.Bh].join("|")}))`,"g"),w=H.classList.toString(),A=[];let b=Z.exec(w);for(;null!==b;)A.push(b[1]),b=Z.exec(w);H.classList.remove(...A)}setPresetColor(){const H=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,N.o2)(this.nzColor)||(0,N.M8)(this.nzColor)),this.isPresetColor&&H.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var H;null===(H=this.directionality.change)||void 0===H||H.pipe((0,s.R)(this.destroy$)).subscribe(Z=>{this.dir=Z,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(H){const{nzColor:Z}=H;Z&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(H){return new(H||R)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c.Is,8))},R.\u0275cmp=t.Xpm({type:R,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(H,Z){1&H&&t.NdJ("click",function(){return Z.updateCheckedStatus()}),2&H&&(t.Udp("background-color",Z.isPresetColor?"":Z.nzColor),t.ekj("ant-tag-has-color",Z.nzColor&&!Z.isPresetColor)("ant-tag-checkable","checkable"===Z.nzMode)("ant-tag-checkable-checked",Z.nzChecked)("ant-tag-rtl","rtl"===Z.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:Y,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(H,Z){1&H&&(t.F$t(),t.Hsn(0),t.YNc(1,O,1,0,"i",0)),2&H&&(t.xp6(1),t.Q6J("ngIf","closeable"===Z.nzMode))},directives:[J.O5,u.Ls],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,_.yF)()],R.prototype,"nzChecked",void 0),R})(),ne=(()=>{class R{}return R.\u0275fac=function(H){return new(H||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[c.vT,J.ez,I.u5,u.PV]]}),R})()}}]);