"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(de,W,o)=>{o.d(W,{H:()=>Se});var t=o(6654),e=o(5e3),i=o(9808),s=o(325),z=o(8481),v=o(3610),a=o(3240),Q=o(4850),c=o(2198),y=o(7630),_=o(7484),D=o(5017),T=o(3098),J=o(1894),N=o(8144),k=o(6949);function Y(ne,pe){if(1&ne&&(e._UZ(0,"i",11),e._uU(1)),2&ne){const A=e.oxw().ngIf;e.xp6(1),e.hij(" ",A.officialName," ")}}function U(ne,pe){if(1&ne&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&ne){const A=pe.$implicit;e.xp6(1),e.Oqu(A)}}function Z(ne,pe){if(1&ne&&(e.TgZ(0,"nz-descriptions-item",12),e.YNc(1,U,2,1,"nz-tag",13),e.qZA()),2&ne){const A=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",A.geneAliases)}}function I(ne,pe){if(1&ne&&(e.TgZ(0,"a",14)(1,"nz-tag",15),e._UZ(2,"i",16),e._uU(3),e.qZA()()),2&ne){const A=e.oxw().ngIf;e.MGl("routerLink","/genes/",A.id,"/flags"),e.xp6(3),e.hij(" Flags (",A.flags.totalCount,") ")}}function L(ne,pe){if(1&ne&&(e.TgZ(0,"a",14)(1,"nz-tag",17),e._UZ(2,"i",18),e._uU(3),e.qZA()()),2&ne){const A=e.oxw().ngIf;e.MGl("routerLink","/genes/",A.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",A.revisions.totalCount,") ")}}function X(ne,pe){if(1&ne&&(e.TgZ(0,"a",14)(1,"nz-tag",19),e._UZ(2,"i",20),e._uU(3),e.qZA()()),2&ne){const A=e.oxw().ngIf;e.MGl("routerLink","/genes/",A.id,"/comments"),e.xp6(3),e.hij(" Comments (",A.comments.totalCount,") ")}}function R(ne,pe){if(1&ne&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,Y,2,1,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4),e.YNc(5,Z,2,1,"nz-descriptions-item",5),e.TgZ(6,"nz-descriptions-item",6),e._uU(7),e.qZA()(),e.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),e.YNc(11,I,4,2,"a",10),e.YNc(12,L,4,2,"a",10),e.YNc(13,X,4,2,"a",10),e.qZA()()()(),e.BQk()),2&ne){const A=pe.ngIf,te=e.MAs(3);e.xp6(1),e.Q6J("nzTitle",te),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",A.geneAliases.length>0),e.xp6(2),e.hij(" ",A.variants.totalCount," ")}}let x=(()=>{class ne{constructor(A){this.gql=A}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,Q.U)(({data:A})=>null==A?void 0:A.gene),(0,c.h)(a.ep))}}return ne.\u0275fac=function(A){return new(A||ne)(e.Y36(y.rJ8))},ne.\u0275cmp=e.Xpm({type:ne,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(A,te){1&A&&(e.TgZ(0,"div",0),e.YNc(1,R,14,4,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&A&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,te.gene$)))},directives:[i.O5,_.bd,D.Ls,T.R7,T.uj,i.sg,z.j,J.SK,J.t3,N.NU,N.$1,s.yS],pipes:[k.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ne})();var l=o(4557);function F(ne,pe){}function E(ne,pe){if(1&ne&&(e.ynx(0),e.TgZ(1,"a",5),e.YNc(2,F,0,0,"ng-template",6),e.qZA(),e.BQk()),2&ne){const A=e.oxw(),te=e.MAs(2);e.xp6(1),e.Q6J("routerLink",A.gene.link),e.xp6(1),e.Q6J("ngTemplateOutlet",te)}}function V(ne,pe){}function $(ne,pe){if(1&ne){const A=e.EpF();e.TgZ(0,"nz-tag",9),e.NdJ("nzOnClose",function(B){return e.CHM(A),e.oxw(2).itemClosed(B)}),e.YNc(1,V,0,0,"ng-template",6),e.qZA()}if(2&ne){e.oxw();const A=e.MAs(2),te=e.oxw(),B=e.MAs(8);e.Q6J("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",A)("nzMode",te.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",B)}}function g(ne,pe){if(1&ne&&e._UZ(0,"cvc-gene-popover",10),2&ne){const A=e.oxw(2);e.Q6J("geneId",A.gene.id)}}function b(ne,pe){if(1&ne&&(e.YNc(0,$,2,4,"nz-tag",7),e.YNc(1,g,1,1,"ng-template",null,8,e.W1O)),2&ne){const A=e.oxw(),te=e.MAs(4);e.Q6J("ngIf",A.enablePopover)("ngIfElse",te)}}function G(ne,pe){}function S(ne,pe){if(1&ne){const A=e.EpF();e.TgZ(0,"nz-tag",11),e.NdJ("nzOnClose",function(B){return e.CHM(A),e.oxw().itemClosed(B)}),e.YNc(1,G,0,0,"ng-template",6),e.qZA()}if(2&ne){const A=e.oxw(),te=e.MAs(8);e.Q6J("nzMode",A.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",te)}}function H(ne,pe){}function ie(ne,pe){if(1&ne&&e.YNc(0,H,0,0,"ng-template",6),2&ne){e.oxw();const A=e.MAs(2);e.Q6J("ngTemplateOutlet",A)}}function ue(ne,pe){if(1&ne&&(e.ynx(0),e._uU(1),e.ALo(2,"truncate"),e.BQk()),2&ne){const A=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,A.gene.name,12)," ")}}function he(ne,pe){if(1&ne&&e._uU(0),2&ne){const A=e.oxw(2);e.hij(" ",A.gene.name," ")}}function ze(ne,pe){if(1&ne&&(e._UZ(0,"i",12),e.YNc(1,ue,3,4,"ng-container",0),e.YNc(2,he,1,1,"ng-template",null,13,e.W1O)),2&ne){const A=e.MAs(3),te=e.oxw();e.xp6(1),e.Q6J("ngIf",te.truncateLongName)("ngIfElse",A)}}let Se=(()=>{class ne extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ne.\u0275fac=function(A){return new(A||ne)},ne.\u0275cmp=e.Xpm({type:ne,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[e.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"],["fullName",""]],template:function(A,te){if(1&A&&(e.YNc(0,E,3,2,"ng-container",0),e.YNc(1,b,3,2,"ng-template",null,1,e.W1O),e.YNc(3,S,2,2,"ng-template",null,2,e.W1O),e.YNc(5,ie,1,1,"ng-template",null,3,e.W1O),e.YNc(7,ze,4,2,"ng-template",null,4,e.W1O)),2&A){const B=e.MAs(6);e.Q6J("ngIf",te.linked)("ngIfElse",B)}},directives:[i.O5,s.yS,i.tP,z.j,v.lU,x,D.Ls],pipes:[l.W],styles:[""],changeDetection:0}),ne})()},3309:(de,W,o)=>{o.d(W,{U:()=>J});var t=o(9808),e=o(325),i=o(8481),s=o(5017),z=o(3610),v=o(7484),a=o(1894),Q=o(3098),c=o(8144),y=o(6949),_=o(5e3);let D=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=_.oAB({type:N}),N.\u0275inj=_.cJS({imports:[[t.ez,e.Bz,y.WG,v.vh,a.Jb,Q.q6,i.X,s.PV,c.zf]]}),N})();var T=o(6905);let J=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=_.oAB({type:N}),N.\u0275inj=_.cJS({imports:[[t.ez,e.Bz,i.X,z.$6,s.PV,T.s,D]]}),N})()},1912:(de,W,o)=>{o.d(W,{s:()=>J});var t=o(5e3),e=o(6042),i=o(2643),s=o(2683),z=o(3640),a=o(2160),Q=o(3762),c=o(5017);let y=(()=>{class N{constructor(Y){this.cookies=Y,this.location=function v(N){return encodeURIComponent(N).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return N.\u0275fac=function(Y){return new(Y||N)(t.Y36(a.N))},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Y,U){1&Y&&(t.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),t._UZ(3,"input",2),t.TgZ(4,"button",3),t._UZ(5,"i",4),t._uU(6," Sign In with a Google Account "),t.qZA()()(),t.TgZ(7,"nz-list-item")(8,"form",1),t._UZ(9,"input",2),t.TgZ(10,"button",3),t._uU(11," Sign In with an ORCID Account "),t.qZA()()(),t.TgZ(12,"nz-list-item")(13,"form",1),t._UZ(14,"input",2),t.TgZ(15,"button",3),t._UZ(16,"i",5),t._uU(17," Sign In with a Github Account "),t.qZA()()()()),2&Y&&(t.xp6(2),t.MGl("action","/api/auth/google_oauth2?origin=",U.location,"",t.LSH),t.xp6(1),t.s9C("value",U.xsrfToken),t.xp6(5),t.MGl("action","/api/auth/orcid?origin=",U.location,"",t.LSH),t.xp6(1),t.s9C("value",U.xsrfToken),t.xp6(4),t.MGl("action","/api/auth/github?origin=",U.location,"",t.LSH),t.xp6(1),t.s9C("value",U.xsrfToken))},directives:[Q.n_,Q.AA,e.ix,i.dQ,s.w,c.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),N})();function _(N,k){1&N&&(t.ynx(0),t.TgZ(1,"p",5),t._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),t.qZA(),t._UZ(3,"cvc-auth-options-list"),t.BQk())}function D(N,k){1&N&&t._uU(0," Sign In / Sign Up\n")}function T(N,k){if(1&N){const Y=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){return t.CHM(Y),t.oxw().handleCancel()}),t._uU(1,"Cancel"),t.qZA()}}let J=(()=>{class N{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Y,U){if(1&Y&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return U.showAuth()}),t.TgZ(1,"span"),t._uU(2,"Sign In / Sign Up"),t.qZA()(),t.TgZ(3,"nz-modal",1),t.NdJ("nzVisibleChange",function(I){return U.authVisible=I})("nzOnCancel",function(){return U.handleCancel()}),t.YNc(4,_,4,0,"ng-container",2),t.qZA(),t.YNc(5,D,1,0,"ng-template",null,3,t.W1O),t.YNc(7,T,2,0,"ng-template",null,4,t.W1O)),2&Y){const Z=t.MAs(6),I=t.MAs(8);t.xp6(3),t.Q6J("nzVisible",U.authVisible)("nzTitle",Z)("nzFooter",I)}},directives:[e.ix,i.dQ,s.w,z.du,z.Hf,y],styles:["[_nghost-%COMP%]{display:inline-block}"]}),N})()},1844:(de,W,o)=>{o.d(W,{B:()=>Q});var t=o(9808),e=o(6042),i=o(3640),s=o(3762),z=o(5017),v=o(5e3);let a=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({imports:[[t.ez,z.PV,s.Ph,e.sL]]}),c})(),Q=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({imports:[[t.ez,e.sL,i.Qp,a]]}),c})()},7881:(de,W,o)=>{o.d(W,{L:()=>v});var t=o(5e3),e=o(9808),i=o(6699);function s(a,Q){if(1&a&&t._UZ(0,"nz-avatar",2),2&a){const c=t.oxw();t.Q6J("nzSrc",c.user.profileImagePath)("nzShape",c.shape?c.shape:"circle")("nzSize",c.size)}}function z(a,Q){if(1&a&&(t._UZ(0,"nz-avatar",3),t.ALo(1,"uppercase")),2&a){const c=t.oxw();t.Q6J("nzSize",c.size)("nzText",t.lcZ(1,2,c.user.displayName.charAt(0)))}}let v=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(c,y){if(1&c&&(t.YNc(0,s,1,3,"nz-avatar",0),t.YNc(1,z,2,4,"ng-template",null,1,t.W1O)),2&c){const _=t.MAs(2);t.Q6J("ngIf",y.user.profileImagePath)("ngIfElse",_)}},directives:[e.O5,i.Dz],pipes:[e.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(de,W,o)=>{o.d(W,{H:()=>s});var t=o(9808),e=o(6699),i=o(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=i.oAB({type:z}),z.\u0275inj=i.cJS({imports:[[t.ez,e.Rt]]}),z})()},8926:(de,W,o)=>{o.d(W,{A:()=>i});var t=o(5e3),e=o(2313);let i=(()=>{class s{constructor(v){this.sanitizer=v}transform(v,a){if(!a||""==a)return v;const Q=new RegExp(a,"gi"),c=v.match(Q);if(!c)return v;let y=v.replace(Q,`<span class='typeahead-match'>${c[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(y)}}return s.\u0275fac=function(v){return new(v||s)(t.Y36(e.H7,16))},s.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(de,W,o)=>{o.d(W,{s:()=>s});var t=o(9808),e=o(7742),i=o(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=i.oAB({type:z}),z.\u0275inj=i.cJS({providers:[e.l],imports:[[t.ez]]}),z})()},7742:(de,W,o)=>{o.d(W,{l:()=>i});var t=o(6530),e=o(5e3);let i=(()=>{class s{transform(v){return v?(0,t.c)(v):""}}return s.\u0275fac=function(v){return new(v||s)},s.\u0275pipe=e.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(de,W,o)=>{o.d(W,{W:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(){}transform(z,v=25){if(z.length>v){let Q=z.slice(0,v);var a=Q.lastIndexOf(" ");return Q.slice(0,a)+"\u2026"}return z}}return i.\u0275fac=function(z){return new(z||i)},i.\u0275pipe=t.Yjl({name:"truncate",type:i,pure:!0}),i})()},9350:(de,W,o)=>{o.d(W,{a:()=>y});var t=o(655),e=o(7630),i=o(4987),s=o(373),z=o(4850),v=o(1059),a=o(5154),Q=o(5e3),c=o(520);let y=class{constructor(D,T){function J(I){return!(!I||I.role!==e.i44.Admin)}function N(I){return!(!I||I.role!==e.i44.Editor&&I.role!==e.i44.Admin)}function k(I){return!(!I||I.role!==e.i44.Curator)}function Y(I){return!(!I||I.role!==e.i44.Curator&&I.role!==e.i44.Editor&&I.role!==e.i44.Admin)}function U(I){var L,X;return!(!I||I.role!==e.i44.Editor&&I.role!==e.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===(L=I.mostRecentConflictOfInterestStatement)||void 0===L?void 0:L.coiStatus)!=e.Mgx.Conflict&&(null===(X=I.mostRecentConflictOfInterestStatement)||void 0===X?void 0:X.coiStatus)!=e.Mgx.Valid)}function Z(I){if(I.mostRecentOrganizationId)return I.organizations.find(L=>L.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=D,this.http=T,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,z.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!=I,signedOut:null==I,canCurate:Y(I),canModerate:U(I),isAdmin:J(I),isEditor:N(I),isCurator:k(I),organizations:null==I?[]:I.organizations,mostRecentOrg:null==I?void 0:Z(I),invalidCoi:N(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===e.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===e.Mgx.Missing)})),(0,v.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,z.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,z.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,z.U)(I=>J(I))),this.isEditor$=this.viewer$.pipe((0,z.U)(I=>N(I))),this.isCurator$=this.viewer$.pipe((0,z.U)(I=>k(I))),this.canCurate$=this.viewer$.pipe((0,z.U)(I=>Y(I))),this.canModerate$=this.viewer$.pipe((0,z.U)(I=>U(I)))}signOut(){this.http.get("/api/sign_out").pipe((0,i.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};y.\u0275fac=function(D){return new(D||y)(Q.LFG(e.Tt7),Q.LFG(c.eN))},y.\u0275prov=Q.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y=(0,t.gn)([(0,i.c)()],y)},6654:(de,W,o)=>{o.d(W,{a:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(z){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return i.\u0275fac=function(z){return new(z||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(z,v){},encapsulation:2}),i})()},915:(de,W,o)=>{function t(e){let i;if("NA"===e)i=["N/A"];else if("SENSITIVITYRESPONSE"===e)i=["Sensitivity","/","Response"];else{i=e.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<i.length;s++)i[s]=i[s].charAt(0).toUpperCase()+i[s].slice(1)}return i.join(" ")}o.d(W,{E:()=>t})},6530:(de,W,o)=>{function t(e){switch(e){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return e}}o.d(W,{c:()=>t})},6123:(de,W,o)=>{o.d(W,{U:()=>z});var t=o(8929),e=o(591),i=o(7625),s=o(537);class z{constructor(a){this.networkErrorService=a}mutate(a,Q,c,y){let _=new t.xQ,D={isSubmitting$:new e.X(!1),submitSuccess$:new e.X(!1),submitError$:new e.X([]),cleanup:()=>{_.next(),_.complete()}};return D.isSubmitting$.next(!0),a.mutate(Q,c).pipe((0,i.R)(_),(0,s.x)(()=>{D.isSubmitting$.next(!1)})).subscribe({next:T=>{T.data&&y&&y(T.data)},error:T=>{T.graphQLErrors.length>0?D.submitError$.next(T.graphQLErrors.map(J=>J.message)):T.networkError&&this.networkErrorService.networkError$.next(T.networkError),D.cleanup()},complete:()=>{D.submitError$.next([]),D.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),D.cleanup()}}),D}}},9397:(de,W,o)=>{o.d(W,{l:()=>e});var t=o(5e3);let e=(()=>{class i{constructor(z){this.host=z,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return i.\u0275fac=function(z){return new(z||i)(t.Y36(t.SBq))},i.\u0275dir=t.lG2({type:i,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),i})()},8616:(de,W,o)=>{o.d(W,{Y:()=>i});var t=o(9808),e=o(5e3);let i=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez]]}),s})()},9180:(de,W,o)=>{o.d(W,{Z:()=>i});var t=o(5e3);const e=["*"];let i=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(v){return new(v||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:e,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(v,a){1&v&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(de,W,o)=>{o.d(W,{R:()=>i});var t=o(9808),e=o(5e3);let i=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez]]}),s})()},822:(de,W,o)=>{o.d(W,{V:()=>Q});var t=o(5e3),e=o(9808),i=o(2359);function s(c,y){if(1&c&&t._UZ(0,"nz-alert",4),2&c){const _=t.oxw();t.Q6J("nzDescription",_.errors[0])}}function z(c,y){if(1&c&&t._UZ(0,"nz-alert",5),2&c){t.oxw();const _=t.MAs(3);t.Q6J("nzDescription",_)}}function v(c,y){if(1&c&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&c){const _=y.$implicit;t.xp6(1),t.Oqu(_)}}function a(c,y){if(1&c&&(t.TgZ(0,"ul",6),t.YNc(1,v,2,1,"li",7),t.qZA()),2&c){const _=t.oxw();t.xp6(1),t.Q6J("ngForOf",_.errors)}}let Q=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(_,D){1&_&&(t.YNc(0,s,1,1,"nz-alert",0),t.YNc(1,z,1,1,"nz-alert",1),t.YNc(2,a,2,1,"ng-template",2,3,t.W1O)),2&_&&(t.Q6J("ngIf",1===D.errors.length),t.xp6(1),t.Q6J("ngIf",D.errors.length>1))},directives:[e.O5,i.r,e.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),c})()},7008:(de,W,o)=>{o.d(W,{B:()=>s});var t=o(9808),e=o(2359),i=o(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=i.oAB({type:z}),z.\u0275inj=i.cJS({imports:[[t.ez,e.L]]}),z})()},6789:(de,W,o)=>{o.d(W,{_:()=>D});var t=o(9808),e=o(7484),i=o(1017),s=o(5482),z=o(6949),v=o(9552),a=o(8776),Q=o(5017),c=o(404),y=o(5e3);let _=(()=>{class T{}return T.\u0275fac=function(N){return new(N||T)},T.\u0275mod=y.oAB({type:T}),T.\u0275inj=y.cJS({imports:[[t.ez,z.WG,a.X0,v.j,s.cD,Q.PV,c.cg,i.s]]}),T})(),D=(()=>{class T{}return T.\u0275fac=function(N){return new(N||T)},T.\u0275mod=y.oAB({type:T}),T.\u0275inj=y.cJS({imports:[[t.ez,z.WG,a.X0,e.vh,v.j,s.cD,Q.PV,c.cg,_,i.s]]}),T})()},1825:(de,W,o)=>{o.d(W,{A:()=>Q});var t=o(9808),e=o(6042),i=o(6699),s=o(3677),z=o(8144),v=o(6949),a=o(5e3);let Q=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[t.ez,v.WG,e.sL,i.Rt,s.b1,z.zf]]}),c})()},1793:(de,W,o)=>{o.d(W,{m:()=>a});var t=o(5e3),e=o(8929),i=o(5254),s=o(2198),z=o(4850),v=o(7625);let a=(()=>{class Q{constructor(y){this.el=y,this.domChange=new t.vpe,this.destroy$=new e.xQ,this.changes=new MutationObserver(_=>{this.mutation$=(0,i.D)(_),this.disabledChange$=this.mutation$.pipe((0,s.h)(D=>"disabled"===D.attributeName),(0,z.U)(D=>({type:"disabled",change:D.target.disabled}))),this.disabledChange$.pipe((0,v.R)(this.destroy$)).subscribe(D=>{this.domChange.emit(D)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return Q.\u0275fac=function(y){return new(y||Q)(t.Y36(t.SBq))},Q.\u0275dir=t.lG2({type:Q,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),Q})()},7905:(de,W,o)=>{o.d(W,{nT:()=>v,yQ:()=>s});var t=o(915),e=o(7630),i=o(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class v{constructor(Q){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,i.o6)(e.uBv).map(c=>c):(0,i.o6)(e.kqt).map(c=>c),this.getSignificanceOptions=c=>{const y=this.validStates.get(c);return(null==y?void 0:y.clinicalSignificance)||[]},this.isValidSignificanceOption=(c,y)=>{const _=this.validStates.get(c);return!_||_.clinicalSignificance.includes(y)},this.getDirectionOptions=c=>{const y=this.validStates.get(c);return(null==y?void 0:y.entityDirection)||[]},this.isValidDirectionOption=(c,y)=>{const _=this.validStates.get(c);return!_||_.entityDirection.includes(y)},this.requiresDrug=c=>{const y=this.validStates.get(c);return void 0===y||y.requiresDrug},this.requiresDisease=c=>{const y=this.validStates.get(c);return void 0===y||y.requiresDisease},this.requiresAcmgCodes=c=>{const y=this.validStates.get(c);return void 0===y||y.requiresAcmgCodes},this.requiresAmpLevel=c=>{const y=this.validStates.get(c);return void 0===y||y.requiresAmpLevel},this.requiresClingenCodes=c=>{const y=this.validStates.get(c);return void 0===y||y.requiresClingenCodes},this.allowsFdaApproval=c=>{const y=this.validStates.get(c);return void 0===y||y.allowsFdaApproval},this.getOptionsFromEnums=c=>0===c.length?[]:c.map(y=>({value:y,label:(0,t.E)(y)})),this.entityName=Q,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(de,W,o)=>{o.d(W,{_:()=>i});var t=o(7630),e=o(7905);class i extends e.nT{constructor(){super(e.yQ.EVIDENCE),this.validStates.set(t.kqt.Predictive,{entityType:t.kqt.Predictive,clinicalSignificance:[t._Aq.Sensitivityresponse,t._Aq.Resistance,t._Aq.AdverseResponse,t._Aq.ReducedSensitivity,t._Aq.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Diagnostic,{entityType:t.kqt.Diagnostic,clinicalSignificance:[t._Aq.Positive,t._Aq.Negative],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Prognostic,{entityType:t.kqt.Prognostic,clinicalSignificance:[t._Aq.BetterOutcome,t._Aq.PoorOutcome,t._Aq.Na],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Oncogenic,{entityType:t.kqt.Oncogenic,clinicalSignificance:[t._Aq.Oncogenicity,t._Aq.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Predisposing,{entityType:t.kqt.Predisposing,clinicalSignificance:[t._Aq.Predisposition,t._Aq.Protectiveness],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(t.kqt.Functional,{entityType:t.kqt.Functional,clinicalSignificance:[t._Aq.GainOfFunction,t._Aq.LossOfFunction,t._Aq.UnalteredFunction,t._Aq.Neomorphic,t._Aq.DominantNegative,t._Aq.Unknown],entityDirection:[t.tI1.Supports,t.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(de,W,o)=>{o.d(W,{E:()=>J});var t=o(9808),e=o(3075),i=o(325),s=o(8776),z=o(304),v=o(6042),a=o(5e3),Q=o(2643),c=o(2683);function y(N,k){if(1&N){const Y=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(Y),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function _(N,k){if(1&N&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&N){const Y=a.oxw();a.Q6J("routerLink",Y.redirectPath)}}const T={name:"cancel-button",component:(()=>{class N extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Y,U,Z,I;(null===(Y=this.field.templateOptions)||void 0===Y?void 0:Y.onClick)?this.callOnClick=null===(U=this.field.templateOptions)||void 0===U?void 0:U.onClick:(null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.redirectPath)&&(this.redirectPath=null===(I=this.field.templateOptions)||void 0===I?void 0:I.redirectPath)}}return N.\u0275fac=function(){let k;return function(U){return(k||(k=a.n5z(N)))(U||N)}}(),N.\u0275cmp=a.Xpm({type:N,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Y,U){if(1&Y&&(a.YNc(0,y,2,0,"button",0),a.YNc(1,_,2,1,"ng-template",null,1,a.W1O)),2&Y){const Z=a.MAs(2);a.Q6J("ngIf",U.callOnClick)("ngIfElse",Z)}},directives:[t.O5,v.ix,Q.dQ,c.w,i.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),N})()};let J=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=a.oAB({type:N}),N.\u0275inj=a.cJS({imports:[[t.ez,e.u5,e.UX,v.sL,i.Bz,z.F,s.X0.forChild({types:[T]})]]}),N})()},4623:(de,W,o)=>{o.d(W,{K:()=>y});var t=o(9808),e=o(8776),i=o(5e3),s=o(1047),z=o(3075);const a={name:"comment-textarea",component:(()=>{class _ extends e.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(T,J)=>{var N;return`Comments must be at least ${null===(N=J.templateOptions)||void 0===N?void 0:N.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return _.\u0275fac=function(){let D;return function(J){return(D||(D=i.n5z(_)))(J||_)}}(),_.\u0275cmp=i.Xpm({type:_,selectors:[["comment-textarea-type"]],features:[i.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(T,J){1&T&&i._UZ(0,"textarea",0),2&T&&i.Q6J("formControl",J.formControl)("formlyAttributes",J.field)},directives:[s.Zp,z.Fj,z.JJ,z.oH,e.VQ],styles:[""],changeDetection:0}),_})(),wrappers:["form-field"]};var Q=o(4546),c=o(9139);let y=(()=>{class _{}return _.\u0275fac=function(T){return new(T||_)},_.\u0275mod=i.oAB({type:_}),_.\u0275inj=i.cJS({imports:[[t.ez,z.UX,e.X0.forChild({types:[a]}),c.u,Q.U5,s.o7]]}),_})()},1605:(de,W,o)=>{o.d(W,{e:()=>Ae});var t=o(9808),e=o(3075),i=o(8776),s=o(3793),z=o(304),v=o(8054),a=o(5e3),Q=o(1894),c=o(4546);let y=(()=>{class C{constructor(){console.log("FormCardDirective constructed.")}}return C.\u0275fac=function(O){return new(O||C)},C.\u0275dir=a.lG2({type:C,selectors:[["",8,"cvc-form-card-control"]]}),C})();var _=o(7484),D=o(404);function T(C,q){1&C&&a._UZ(0,"i",7)}function J(C,q){if(1&C&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,T,1,0,"i",6),a.qZA()),2&C){const O=a.oxw();a.Q6J("nzRequired",O.to.required&&!0!==O.to.hideRequiredMarker)("nzFor",O.id),a.xp6(1),a.hij(" ",O.to.label," "),a.xp6(1),a.Q6J("ngIf",O.to.helpText)}}function N(C,q){if(1&C&&a._UZ(0,"formly-validation-message",9),2&C){const O=a.oxw(2);a.Q6J("field",O.field)}}function k(C,q){if(1&C&&a.YNc(0,N,1,1,"formly-validation-message",8),2&C){const O=a.oxw();a.Q6J("ngIf",O.showError)}}let Y=(()=>{class C extends i.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return C.\u0275fac=function(O){return new(O||C)},C.\u0275cmp=a.Xpm({type:C,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(O,ce){if(1&O&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,J,3,4,"ng-template",null,3,a.W1O),a.YNc(7,k,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&O){const Ce=a.MAs(6),ye=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",ce.errorState)("nzErrorTip",ye),a.xp6(1),a.Q6J("nzTitle",Ce)("nzExtra",ye)}},directives:[Q.SK,c.Nx,Q.t3,c.Fd,y,_.bd,c.iK,t.O5,D.SY,i.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),C})();var U=o(5017),Z=o(1017);const I={wrappers:[{name:"form-card",component:Y}]};let L=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[t.ez,e.UX,c.U5,_.vh,U.PV,D.cg,i.X0.forChild(I),Z.s]]}),C})();var X=o(655),R=o(373),x=o(2198),l=o(4850),F=o(3240),E=o(4987),V=o(7630),$=o(9397),g=o(6949),b=o(8144),G=o(3618),S=o(3193),H=o(8926);function ie(C,q){if(1&C&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&C){const O=a.oxw().$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,O.label,ce.to.searchString),a.oJD)}}function ue(C,q){if(1&C&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&C){const O=a.oxw(2).$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,O.gene.geneAliases.join(", "),ce.to.searchString),a.oJD)}}function he(C,q){1&C&&(a.ynx(0),a.YNc(1,ue,2,4,"span",11),a.BQk())}function ze(C,q){if(1&C&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,ie,2,4,"span",8),a.YNc(3,he,2,0,"ng-container",9),a.qZA()()),2&C){const O=q.$implicit;a.Q6J("nzLabel",O.tooltip)("nzValue",O.gene),a.xp6(3),a.Q6J("ngIf",O.gene.geneAliases.length>0)}}function Se(C,q){if(1&C&&(a.ynx(0),a.YNc(1,ze,4,3,"nz-option",6),a.BQk()),2&C){const O=q.ngrxLet;a.xp6(1),a.Q6J("ngForOf",O)}}function ne(C,q){1&C&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function pe(C,q){if(1&C){const O=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Ce){return a.CHM(O),a.oxw().to.onSearch(Ce)}),a.YNc(3,Se,2,1,"ng-container",4),a.qZA(),a.YNc(4,ne,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&C){const O=a.MAs(5),ce=a.oxw();a.xp6(1),a.Q6J("formControl",ce.formControl)("formlyAttributes",ce.field)("nzPlaceHolder",ce.to.placeholder?ce.to.placeholder:null)("nzNotFoundContent",O)("nzShowArrow",ce.to.showArrow)("nzFilterOption",ce.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",ce.genes$)}}function A(C,q){if(1&C&&a._UZ(0,"cvc-gene-tag",13),2&C){const O=a.oxw();a.Q6J("gene",O.formControl.value)}}let te=class extends i.fS{constructor(q){super(),this.geneTypeaheadQuery=q,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,R.j)("data","geneTypeahead"),(0,x.h)(F.ep),(0,l.U)(q=>q.map(O=>{let ce=O.geneAliases.length>0?`Aliases: ${O.geneAliases.join(", ")}`:"";return{value:O.id,tooltip:`${O.name} (${O.entrezId}) ${ce}`,label:`${O.name} (${O.entrezId})`,gene:O}})))}ngAfterViewInit(){this.to.onSearch=q=>{q.length<this.to.minLengthSearch||(this.to.searchString=q,this.queryRef.refetch({entrezSymbol:q}))}}};te.\u0275fac=function(q){return new(q||te)(a.Y36(V.Q4m))},te.\u0275cmp=a.Xpm({type:te,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(q,O){if(1&q&&(a.YNc(0,pe,6,7,"ng-container",0),a.YNc(1,A,1,1,"ng-template",null,1,a.W1O)),2&q){const ce=a.MAs(2);a.Q6J("ngIf",!(null!=O.formControl.value&&O.formControl.value.id))("ngIfElse",ce)}},directives:[t.O5,v.Vq,$.l,e.JJ,e.oH,i.VQ,g.eJ,t.sg,v.Ip,b.NU,b.$1,G.ZU,S.H],pipes:[H.A],styles:[""]}),te=(0,X.gn)([(0,E.c)()],te);const B={name:"cvc-gene-input",component:te};var se=o(3309),ee=o(6905),ge=o(8616);let _e=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[t.ez,e.UX,g.WG,i.X0.forChild({types:[B]}),v.LV,b.zf,G.ZJ,se.U,ee.s,ge.Y]]}),C})();var Ie=o(7055);const De={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ae=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[t.ez,e.u5,e.UX,v.LV,z.F,s.F,i.X0.forChild({types:[De]}),_e,Ie.N,L]]}),C})()},7055:(de,W,o)=>{o.d(W,{N:()=>x});var t=o(9808),e=o(3075),i=o(8776),s=o(4546),z=o(1047),v=o(5017),a=o(5e3),Q=o(1894),c=o(8481),y=o(2683),_=o(6042),D=o(2643);function T(l,F){if(1&l){const E=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function($){return a.CHM(E),a.oxw().addField($)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&l){const E=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",E.errorState),a.xp6(3),a.hij(" ",E.to.addText," ")}}function J(l,F){if(1&l){const E=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function($){return a.CHM(E),a.oxw(4).addField($)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&l){const E=a.oxw(4);a.xp6(2),a.hij(" ",E.to.addText," ")}}function N(l,F){if(1&l&&(a.TgZ(0,"div",11),a.YNc(1,J,3,1,"nz-tag",12),a.qZA()),2&l){const E=a.oxw(2).$implicit,V=a.oxw();a.xp6(1),a.Q6J("ngIf",0==V.to.maxCount||V.to.maxCount>E.model.length)}}function k(l,F){if(1&l){const E=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(E);const $=a.oxw().index;return a.oxw().remove($)}),a.qZA()(),a.YNc(3,N,2,1,"div",10),a.BQk()}if(2&l){const E=a.oxw().last;a.xp6(3),a.Q6J("ngIf",E)}}function Y(l,F){if(1&l){const E=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(E);const $=a.oxw().index;return a.oxw().remove($)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function U(l,F){if(1&l&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,k,4,1,"ng-container",1),a.YNc(5,Y,4,0,"ng-container",1),a.qZA()()),2&l){const E=F.$implicit,V=F.index;a.xp6(2),a.Q6J("ngClass",E.model[V]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",E),a.xp6(1),a.Q6J("ngIf",E.model[V]),a.xp6(1),a.Q6J("ngIf",!E.model[V])}}const Z=function(l){return{hidden:l}},L={name:"multi-field",component:(()=>{class l extends i.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(E){E&&E.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return l.\u0275fac=function(E){return new(E||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(E,V){1&E&&(a.TgZ(0,"div",0),a.YNc(1,T,5,2,"nz-form-item",1),a.YNc(2,U,6,4,"nz-form-item",2),a.qZA()),2&E&&(a.Q6J("ngClass",a.VKq(3,Z,!0===V.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==V.field.fieldGroup?null:V.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",V.field.fieldGroup))},directives:[t.mk,t.O5,Q.SK,s.Nx,Q.t3,s.Fd,c.j,v.Ls,y.w,t.sg,i.cw,_.ix,D.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),l})()};var X=o(7102),R=o(1017);let x=(()=>{class l{}return l.\u0275fac=function(E){return new(E||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[[t.ez,e.u5,i.X0.forChild({types:[L]}),e.UX,X.a,s.U5,z.o7,v.PV,_.sL,R.s,c.X]]}),l})()},7462:(de,W,o)=>{o.d(W,{o:()=>Q});var t=o(9808),e=o(8776),i=o(5e3),s=o(1047),z=o(3075);const a={name:"cvc-textarea",component:(()=>{class c extends e.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return c.\u0275fac=function(){let y;return function(D){return(y||(y=i.n5z(c)))(D||c)}}(),c.\u0275cmp=i.Xpm({type:c,selectors:[["cvc-textarea-base-type"]],features:[i.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(_,D){1&_&&i._UZ(0,"textarea",0),2&_&&i.Q6J("formControl",D.formControl)("formlyAttributes",D.field)("nzAutosize",D.to.autosize)("placeholder",D.to.placeholder)},directives:[s.Zp,z.Fj,s.rh,z.JJ,z.oH,e.VQ],styles:[""],changeDetection:0}),c})(),wrappers:["form-field"]};let Q=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=i.oAB({type:c}),c.\u0275inj=i.cJS({imports:[[t.ez,z.u5,z.UX,e.X0.forChild({types:[a]}),s.o7]]}),c})()},7102:(de,W,o)=>{o.d(W,{a:()=>y});var t=o(9808),e=o(8776),i=o(3075),s=o(4546),z=o(5e3),v=o(1894);function a(_,D){if(1&_&&z._UZ(0,"formly-validation-message",3),2&_){const T=z.oxw();z.Q6J("field",T.field)}}const c={name:"cvc-field-errors",component:(()=>{class _ extends e.n2{get errorState(){return this.showError?"error":""}}return _.\u0275fac=function(){let D;return function(J){return(D||(D=z.n5z(_)))(J||_)}}(),_.\u0275cmp=z.Xpm({type:_,selectors:[["cvc-field-errors-wrapper"]],features:[z.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(T,J){if(1&T&&(z.TgZ(0,"nz-form-control",0)(1,"p"),z._uU(2),z.qZA(),z.GkF(3,null,1),z.YNc(5,a,1,1,"ng-template",null,2,z.W1O),z.qZA()),2&T){const N=z.MAs(6);z.Q6J("nzValidateStatus",J.errorState)("nzErrorTip",N),z.xp6(2),z.hij("errorState: ",J.errorState,"")}},directives:[v.t3,s.Fd,e.u_],encapsulation:2,changeDetection:0}),_})()};let y=(()=>{class _{}return _.\u0275fac=function(T){return new(T||_)},_.\u0275mod=z.oAB({type:_}),_.\u0275inj=z.cJS({imports:[[t.ez,i.UX,s.U5,e.X0.forChild({wrappers:[c]})]]}),_})()},5472:(de,W,o)=>{o.d(W,{r:()=>D});var t=o(9808),e=o(6949),i=o(8776),s=o(7484),z=o(5482),v=o(1894),a=o(1017),Q=o(6789),c=o(5e3);const _={wrappers:[{name:"form-container",component:(()=>{class T extends i.n2{}return T.\u0275fac=function(){let J;return function(k){return(J||(J=c.n5z(T)))(k||T)}}(),T.\u0275cmp=c.Xpm({type:T,selectors:[["cvc-form-container-wrapper"]],features:[c.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(N,k){1&N&&(c.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),c.GkF(3,null,2),c.qZA()()()),2&N&&(c.xp6(2),c.Q6J("nzTitle",k.to.label))},directives:[v.SK,v.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),T})()}]};let D=(()=>{class T{}return T.\u0275fac=function(N){return new(N||T)},T.\u0275mod=c.oAB({type:T}),T.\u0275inj=c.cJS({imports:[[t.ez,e.WG,i.X0.forChild(_),v.Jb,s.vh,z.cD,Q._,a.s]]}),T})()},7695:(de,W,o)=>{o.d(W,{C:()=>x});var t=o(9808),e=o(6949),i=o(8776),s=o(7484),z=o(5482),v=o(1894),a=o(1017),Q=o(6789),c=o(5e3),y=o(9552),_=o(5017),D=o(404);function T(l,F){1&l&&c._UZ(0,"div",9),2&l&&c.Q6J("innerHtml",F.ngIf,c.oJD)}function J(l,F){1&l&&(c.TgZ(0,"div",10),c._uU(1,"Help not available for this field."),c.qZA())}function N(l,F){if(1&l&&(c.TgZ(0,"nz-collapse-panel",6),c.YNc(1,T,1,1,"div",7),c.YNc(2,J,2,0,"ng-template",null,8,c.W1O),c.qZA()),2&l){const E=F.ngIf,V=c.MAs(3),$=c.oxw().$implicit,g=c.MAs(3);c.Q6J("nzHeader",E)("nzActive",$.templateOptions.hasFocus)("nzExtra",g),c.xp6(1),c.Q6J("ngIf",null==$.templateOptions?null:$.templateOptions.helpText)("ngIfElse",V)}}function k(l,F){if(1&l&&c._UZ(0,"formly-validation-message",14),2&l){const E=c.oxw(4).$implicit;c.Q6J("field",E)}}function Y(l,F){if(1&l&&(c.ynx(0),c._UZ(1,"i",12),c.YNc(2,k,1,1,"ng-template",null,13,c.W1O),c.BQk()),2&l){const E=c.MAs(3);c.xp6(1),c.Q6J("nzTooltipTitle",E)}}function U(l,F){if(1&l&&(c.ynx(0),c.YNc(1,Y,4,1,"ng-container",11),c.BQk()),2&l){const E=F.ngIf;c.xp6(1),c.Q6J("ngIf","INVALID"===E)}}function Z(l,F){if(1&l&&(c.YNc(0,U,2,1,"ng-container",11),c.ALo(1,"ngrxPush")),2&l){const E=c.oxw().$implicit;c.Q6J("ngIf",c.lcZ(1,1,E.formControl.statusChanges))}}function I(l,F){if(1&l&&(c.ynx(0),c.YNc(1,N,4,5,"nz-collapse-panel",4),c.YNc(2,Z,2,3,"ng-template",null,5,c.W1O),c.BQk()),2&l){const E=F.$implicit;c.xp6(1),c.Q6J("ngIf",null==E.templateOptions?null:E.templateOptions.label)}}let L=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(E){return new(E||l)},l.\u0275cmp=c.Xpm({type:l,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(E,V){1&E&&(c.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),c.YNc(3,I,4,1,"ng-container",3),c.qZA()()()),2&E&&(c.Q6J("nzOffsetTop",0)("nzTarget",V.affixTo),c.xp6(2),c.Q6J("nzBordered",!1),c.xp6(1),c.Q6J("ngForOf",V.fieldGroup))},directives:[y.$,s.bd,z.yH,t.sg,t.O5,z.Zv,_.Ls,D.SY,i.u_],pipes:[e.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),l})();const R={name:"form-info",component:(()=>{class l extends i.n2{}return l.\u0275fac=function(){let F;return function(V){return(F||(F=c.n5z(l)))(V||l)}}(),l.\u0275cmp=c.Xpm({type:l,selectors:[["cvc-form-info-wrapper"]],features:[c.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(E,V){if(1&E&&(c.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),c.GkF(3,null,3),c.qZA()(),c.TgZ(5,"nz-col",1)(6,"div",null,4),c._UZ(8,"cvc-form-info-card",5),c.qZA()()()),2&E){const $=c.MAs(7);c.xp6(1),c.Q6J("nzSpan",16),c.xp6(1),c.Q6J("nzTitle",V.to.label),c.xp6(3),c.Q6J("nzSpan",8),c.xp6(3),c.Q6J("fieldGroup",V.field.fieldGroup)("affixTo",$)}},directives:[v.SK,v.t3,s.bd,L],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),l})()};let x=(()=>{class l{}return l.\u0275fac=function(E){return new(E||l)},l.\u0275mod=c.oAB({type:l}),l.\u0275inj=c.cJS({imports:[[t.ez,e.WG,i.X0.forChild({wrappers:[R]}),v.Jb,s.vh,z.cD,Q._,a.s]]}),l})()},8785:(de,W,o)=>{o.d(W,{t:()=>X});var t=o(5e3),e=o(6123),i=o(8929),s=o(7625),z=o(7630),v=o(9169),a=o(7484),Q=o(9808),c=o(2359),y=o(1894),_=o(4546),D=o(822),T=o(7525),J=o(3868),N=o(3075),k=o(6042),Y=o(2643),U=o(2683);function Z(R,x){1&R&&t._UZ(0,"nz-alert",7)}function I(R,x){if(1&R&&(t.TgZ(0,"nz-form-item"),t._UZ(1,"cvc-form-errors-alert",8),t.qZA()),2&R){const l=t.oxw();t.xp6(1),t.Q6J("errors",l.errorMessages)}}function L(R,x){if(1&R){const l=t.EpF();t.TgZ(0,"nz-form-item")(1,"textarea",9),t.NdJ("ngModelChange",function(E){return t.CHM(l),t.oxw().coiText=E}),t.qZA()()}if(2&R){const l=t.oxw();t.xp6(1),t.Q6J("ngModel",l.coiText)}}let X=(()=>{class R{constructor(l,F){this.updateCoiGql=l,this.coiUpdatedEvent=new t.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new i.xQ,this.updateCoiMutator=new e.U(F)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let F=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});F.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(E=>{E&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),F.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(E=>{E&&(this.errorMessages=E,this.success=!1)}),F.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(E=>{this.loading=E})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(l){return new(l||R)(t.Y36(z.IP1),t.Y36(v.Y))},R.\u0275cmp=t.Xpm({type:R,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(l,F){1&l&&(t.TgZ(0,"nz-card"),t.YNc(1,Z,1,0,"nz-alert",0),t.YNc(2,I,2,1,"nz-form-item",1),t.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),t.NdJ("ngModelChange",function(V){return F.coiStatus=V}),t.TgZ(6,"label",4),t._uU(7,"I do not have any potential conflicts of interest."),t.qZA(),t.TgZ(8,"label",5),t._uU(9,"I do have a potential conflict of interest."),t.qZA()()(),t.YNc(10,L,2,1,"nz-form-item",1),t.TgZ(11,"nz-form-item")(12,"button",6),t.NdJ("click",function(){return F.updateCoi()}),t._uU(13," Save Conflict of Interest Statement "),t.qZA()()()()),2&l&&(t.xp6(1),t.Q6J("ngIf",F.success),t.xp6(1),t.Q6J("ngIf",F.errorMessages.length>0),t.xp6(1),t.Q6J("nzSpinning",F.loading),t.xp6(2),t.Q6J("ngModel",F.coiStatus),t.xp6(5),t.Q6J("ngIf","coiPresent"===F.coiStatus),t.xp6(2),t.Q6J("disabled",F.loading||"coiPresent"===F.coiStatus&&(void 0===F.coiText||F.coiText.length<10)))},directives:[a.bd,Q.O5,c.r,y.SK,_.Nx,D.V,T.W,J.Dg,N.JJ,N.On,J.Of,N.Fj,k.ix,Y.dQ,U.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),R})()},330:(de,W,o)=>{o.d(W,{e:()=>D});var t=o(9808),e=o(3075),i=o(6949),s=o(7484),z=o(2359),v=o(4546),a=o(7008),Q=o(3868),c=o(7525),y=o(6042),_=o(5e3);let D=(()=>{class T{}return T.\u0275fac=function(N){return new(N||T)},T.\u0275mod=_.oAB({type:T}),T.\u0275inj=_.cJS({imports:[[t.ez,e.u5,v.U5,e.UX,i.WG,s.vh,z.L,Q.aF,y.sL,c.j,a.B]]}),T})()},3434:(de,W,o)=>{o.d(W,{G:()=>X});var t=o(3075),e=o(8929),i=o(4024),s=o(6123),z=o(7625),v=o(5e3),a=o(7630),Q=o(9169),c=o(325),y=o(7525),_=o(4546),D=o(9808),T=o(8776),J=o(1894),N=o(822),k=o(2359);function Y(R,x){1&R&&v.GkF(0)}function U(R,x){if(1&R&&(v.TgZ(0,"nz-form-item"),v._UZ(1,"cvc-form-errors-alert",6),v.qZA()),2&R){const l=v.oxw(2);v.xp6(1),v.Q6J("errors",l.errorMessages)}}function Z(R,x){if(1&R&&(v.TgZ(0,"p"),v._uU(1,"View "),v.TgZ(2,"a",10),v._uU(3,"its details"),v.qZA(),v._uU(4,"."),v.qZA()),2&R){const l=v.oxw(3);v.xp6(2),v.MGl("routerLink","/variants/",l.newId,"/summary")}}function I(R,x){if(1&R&&(v.ynx(0),v._UZ(1,"nz-alert",7),v.YNc(2,Z,5,1,"ng-template",8,9,v.W1O),v.BQk()),2&R){const l=v.MAs(3),F=v.oxw(2);v.xp6(1),v.Q6J("nzMessage",F.isNew?"Variant Created":"Variant Already Exists")("nzDescription",l)}}function L(R,x){if(1&R&&(v.YNc(0,U,2,1,"nz-form-item",5),v.YNc(1,I,4,2,"ng-container",5)),2&R){const l=v.oxw();v.Q6J("ngIf",l.errorMessages.length>0),v.xp6(1),v.Q6J("ngIf",l.success)}}let X=(()=>{class R{constructor(l,F,E){this.submitVariantGQL=l,this.networkErrorService=F,this.route=E,this.destroy$=new e.xQ,this.formGroup=new t.cw({}),this.formOptions={formState:new i._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(F),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(l){let F=null==l?void 0:l.fields.gene[0].id,E=null==l?void 0:l.fields.variant;if(F&&E){let $=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:F,name:E},{},g=>{this.newId=g.addVariant.variant.id,this.isNew=g.addVariant.new});$.submitSuccess$.pipe((0,z.R)(this.destroy$)).subscribe(g=>{g&&(this.success=!0)}),$.submitError$.pipe((0,z.R)(this.destroy$)).subscribe(g=>{g&&(this.errorMessages=g,this.success=!1)}),$.isSubmitting$.pipe((0,z.R)(this.destroy$)).subscribe(g=>{this.loading=g})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(l){return new(l||R)(v.Y36(a.LUc),v.Y36(Q.Y),v.Y36(c.gz))},R.\u0275cmp=v.Xpm({type:R,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(l,F){if(1&l&&(v.TgZ(0,"nz-spin",0)(1,"form",1),v.NdJ("ngSubmit",function(){return F.submitVariant(F.formModel)}),v.YNc(2,Y,1,0,"ng-container",2),v.TgZ(3,"formly-form",3),v.NdJ("modelChange",function(V){return F.formModel=V}),v.qZA()()(),v.YNc(4,L,2,2,"ng-template",null,4,v.W1O)),2&l){const E=v.MAs(5);v.Q6J("nzSpinning",F.loading),v.xp6(1),v.Q6J("formGroup",F.formGroup),v.xp6(1),v.Q6J("ngTemplateOutlet",E),v.xp6(1),v.Q6J("form",F.formGroup)("fields",F.formFields)("model",F.formModel)("options",F.formOptions)}},directives:[y.W,t._Y,t.JL,_.Lr,t.sg,D.tP,T.T7,D.O5,J.SK,_.Nx,N.V,k.r,c.yS],styles:[""]}),R})()},7058:(de,W,o)=>{o.d(W,{e:()=>G});var t=o(9808),e=o(4623),i=o(4375),s=o(7008),z=o(7695),v=o(7055),a=o(7462),Q=o(8776),c=o(1017),y=o(2359),_=o(6042),D=o(4546),T=o(1894),J=o(3075),N=o(325),k=o(1605),Y=o(7525),U=o(5472),Z=o(4889),I=o(7484),L=o(8144),X=o(3618),R=o(5e3),x=o(9180),l=o(2643),F=o(1793),E=o(2683);const $={name:"submit-button",component:(()=>{class S extends Q.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275cmp=R.Xpm({type:S,selectors:[["cvc-submit-button-type"]],features:[R.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(ie,ue){1&ie&&(R.TgZ(0,"cvc-form-buttons")(1,"button",0),R._uU(2),R.qZA()()),2&ie&&(R.xp6(1),R.Q6J("disabled",!ue.form.valid),R.xp6(1),R.hij(" ",ue.to.submitLabel," "))},directives:[x.Z,_.ix,l.dQ,F.m,E.w],styles:[""],changeDetection:0}),S})()};var g=o(1825);let b=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=R.oAB({type:S}),S.\u0275inj=R.cJS({imports:[[t.ez,J.UX,Q.X0.forChild({types:[$]}),_.sL,i.R,g.A]]}),S})(),G=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=R.oAB({type:S}),S.\u0275inj=R.cJS({imports:[[t.ez,N.Bz,J.UX,c.s,D.U5,y.L,T.Jb,_.sL,Y.j,I.vh,L.zf,X.ZJ,Q.X0,s.B,i.R,z.C,v.N,a.o,e.K,k.e,U.r,Z.E,b,c.s]]}),S})()},7630:(de,W,o)=>{o.d(W,{$G1:()=>Ro,A4J:()=>Bn,A94:()=>nr,AO2:()=>Y,B0s:()=>Mi,B97:()=>Sn,BQZ:()=>F,BTF:()=>nn,Bk6:()=>xr,BnY:()=>zi,Bo4:()=>es,Cp0:()=>X,D9L:()=>Fi,Del:()=>Or,E8d:()=>y,EwB:()=>Ni,F3s:()=>ne,FB1:()=>Ie,FId:()=>Di,FJi:()=>ue,FKQ:()=>ei,FOU:()=>xi,Fvz:()=>V,GB2:()=>dr,GYx:()=>Fo,Gbq:()=>M,IP1:()=>Qi,IRu:()=>ge,IZ6:()=>kn,JDX:()=>ie,JQ3:()=>si,KNk:()=>wo,Kk:()=>Yt,Kmw:()=>Co,L5n:()=>$n,LLl:()=>Oo,LUc:()=>vi,LiH:()=>Qr,Lr0:()=>Dr,MYm:()=>Un,Mgx:()=>_,NQC:()=>H,NbY:()=>pi,OHm:()=>In,OIL:()=>un,OfU:()=>D,Onj:()=>te,P_b:()=>Qt,Q4m:()=>Ho,Q_P:()=>Ci,Qtd:()=>Wr,Qzn:()=>Pn,R8w:()=>J,RMv:()=>di,ROj:()=>ji,RTy:()=>R,Rdc:()=>vo,SJD:()=>at,SWk:()=>Ri,SrV:()=>ze,Sx0:()=>L,T97:()=>Wo,TNk:()=>zr,TiL:()=>Kn,Tq1:()=>jt,Tt7:()=>zo,UIR:()=>Le,UWf:()=>Zn,Ud2:()=>Xt,VZq:()=>An,Vj7:()=>Ti,VnG:()=>$,Vr2:()=>z,WFw:()=>Oi,WGV:()=>Mr,WOS:()=>Tr,WRV:()=>Jn,X5f:()=>_n,Xft:()=>er,YMi:()=>en,Ybm:()=>rn,ZYZ:()=>po,Zhw:()=>jo,Zo2:()=>oo,Zyn:()=>N,_Aq:()=>Z,_Wm:()=>c,_eC:()=>gi,_jb:()=>Vn,aw3:()=>Wi,bgg:()=>To,c$m:()=>Do,cCu:()=>Cr,cEv:()=>qn,cMj:()=>sr,d4o:()=>Oe,dUU:()=>Ht,db2:()=>Nr,dwB:()=>pr,eY8:()=>an,ejK:()=>ir,fow:()=>b,fpJ:()=>ii,fwG:()=>lo,g0X:()=>Fr,ghc:()=>hn,gtM:()=>ci,h01:()=>T,huM:()=>De,i44:()=>ee,iGM:()=>Mo,iJT:()=>Xr,iST:()=>wt,iXf:()=>qe,io:()=>yn,iwm:()=>i,jMx:()=>Yr,jw9:()=>pe,k2T:()=>ni,k7O:()=>Wt,kQf:()=>bn,kQl:()=>A,kq9:()=>k,kqt:()=>l,kv3:()=>Qo,l4w:()=>Yi,lYz:()=>S,lfy:()=>Xo,m$d:()=>wr,m55:()=>x,mII:()=>No,mdl:()=>v,mpB:()=>se,nnL:()=>Xi,o71:()=>B,oRL:()=>g,otH:()=>Ln,pHu:()=>gr,pP7:()=>C,q1D:()=>jr,q8c:()=>fn,qP7:()=>_e,qf4:()=>ro,rJ8:()=>mn,rZD:()=>he,rzy:()=>ln,sBY:()=>vr,sLD:()=>Rr,sfv:()=>E,tI1:()=>I,tJ6:()=>to,td:()=>fe,ti:()=>En,tji:()=>Hi,tw_:()=>ao,u4i:()=>a,uBv:()=>Q,ubO:()=>Hr,vMt:()=>xo,vRc:()=>Yo,wJ2:()=>U,wRZ:()=>Gi,wbP:()=>wi,wg3:()=>cr,wpb:()=>Ae,xlL:()=>G,xsC:()=>Go,yic:()=>Se,yqR:()=>Gr,zwS:()=>go});var t=o(9444),e=o(5e3),i=(()=>{return(n=i||(i={})).Na="NA",n.TierIii="TIER_III",n.TierIiLevelC="TIER_II_LEVEL_C",n.TierIiLevelD="TIER_II_LEVEL_D",n.TierIv="TIER_IV",n.TierILevelA="TIER_I_LEVEL_A",n.TierILevelB="TIER_I_LEVEL_B",i;var n})(),z=(()=>{return(n=z||(z={})).AdverseResponse="ADVERSE_RESPONSE",n.Benign="BENIGN",n.BetterOutcome="BETTER_OUTCOME",n.LikelyBenign="LIKELY_BENIGN",n.LikelyOncogenic="LIKELY_ONCOGENIC",n.LikelyPathogenic="LIKELY_PATHOGENIC",n.Na="NA",n.Negative="NEGATIVE",n.Oncogenic="ONCOGENIC",n.Pathogenic="PATHOGENIC",n.PoorOutcome="POOR_OUTCOME",n.Positive="POSITIVE",n.ReducedSensitivity="REDUCED_SENSITIVITY",n.Resistance="RESISTANCE",n.Sensitivityresponse="SENSITIVITYRESPONSE",n.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",z;var n})(),v=(()=>{return(n=v||(v={})).DoesNotSupport="DOES_NOT_SUPPORT",n.Supports="SUPPORTS",v;var n})(),a=(()=>{return(n=a||(a={})).AmpLevel="AMP_LEVEL",n.AssertionDirection="ASSERTION_DIRECTION",n.AssertionType="ASSERTION_TYPE",n.ClinicalSignificance="CLINICAL_SIGNIFICANCE",n.DiseaseName="DISEASE_NAME",n.DrugName="DRUG_NAME",n.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",n.GeneName="GENE_NAME",n.Id="ID",n.Status="STATUS",n.Summary="SUMMARY",n.VariantName="VARIANT_NAME",a;var n})(),Q=(()=>{return(n=Q||(Q={})).Diagnostic="DIAGNOSTIC",n.Oncogenic="ONCOGENIC",n.Predictive="PREDICTIVE",n.Predisposing="PREDISPOSING",n.Prognostic="PROGNOSTIC",Q;var n})(),c=(()=>{return(n=c||(c={})).And="AND",n.Or="OR",c;var n})(),y=(()=>{return(n=y||(y={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.Name="NAME",n.NctId="NCT_ID",n.SourceCount="SOURCE_COUNT",y;var n})(),_=(()=>{return(n=_||(_={})).Conflict="CONFLICT",n.Expired="EXPIRED",n.Missing="MISSING",n.Valid="VALID",_;var n})(),D=(()=>{return(n=D||(D={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Source="SOURCE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",D;var n})(),T=(()=>{return(n=T||(T={})).Created="CREATED",n.LastModified="LAST_MODIFIED",T;var n})(),J=(()=>{return(n=J||(J={})).AssertionCount="ASSERTION_COUNT",n.Doid="DOID",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.GeneCount="GENE_COUNT",n.Name="NAME",n.VariantCount="VARIANT_COUNT",J;var n})(),N=(()=>{return(n=N||(N={})).Combination="COMBINATION",n.Sequential="SEQUENTIAL",n.Substitutes="SUBSTITUTES",N;var n})(),k=(()=>{return(n=k||(k={})).AssertionCount="ASSERTION_COUNT",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.Name="NAME",n.NcitId="NCIT_ID",k;var n})(),Y=(()=>{return(n=Y||(Y={})).Accepted="ACCEPTED",n.AssertionAccepted="ASSERTION_ACCEPTED",n.AssertionRejected="ASSERTION_REJECTED",n.AssertionReverted="ASSERTION_REVERTED",n.AssertionSubmitted="ASSERTION_SUBMITTED",n.Commented="COMMENTED",n.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",n.Flagged="FLAGGED",n.FlagResolved="FLAG_RESOLVED",n.PublicationSuggested="PUBLICATION_SUGGESTED",n.Rejected="REJECTED",n.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",n.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",n.Reverted="REVERTED",n.RevisionAccepted="REVISION_ACCEPTED",n.RevisionRejected="REVISION_REJECTED",n.RevisionSuggested="REVISION_SUGGESTED",n.RevisionSuperseded="REVISION_SUPERSEDED",n.Submitted="SUBMITTED",Y;var n})(),U=(()=>{return(n=U||(U={})).Organization="ORGANIZATION",n.Subject="SUBJECT",n.Unscoped="UNSCOPED",n.User="USER",U;var n})(),Z=(()=>{return(n=Z||(Z={})).AdverseResponse="ADVERSE_RESPONSE",n.Benign="BENIGN",n.BetterOutcome="BETTER_OUTCOME",n.DominantNegative="DOMINANT_NEGATIVE",n.GainOfFunction="GAIN_OF_FUNCTION",n.LikelyBenign="LIKELY_BENIGN",n.LikelyPathogenic="LIKELY_PATHOGENIC",n.LossOfFunction="LOSS_OF_FUNCTION",n.Na="NA",n.Negative="NEGATIVE",n.Neomorphic="NEOMORPHIC",n.Oncogenicity="ONCOGENICITY",n.Pathogenic="PATHOGENIC",n.PoorOutcome="POOR_OUTCOME",n.Positive="POSITIVE",n.Predisposition="PREDISPOSITION",n.Protectiveness="PROTECTIVENESS",n.ReducedSensitivity="REDUCED_SENSITIVITY",n.Resistance="RESISTANCE",n.Sensitivityresponse="SENSITIVITYRESPONSE",n.UnalteredFunction="UNALTERED_FUNCTION",n.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",n.Unknown="UNKNOWN",Z;var n})(),I=(()=>{return(n=I||(I={})).DoesNotSupport="DOES_NOT_SUPPORT",n.Na="NA",n.Supports="SUPPORTS",I;var n})(),L=(()=>{return(n=L||(L={})).A="A",n.B="B",n.C="C",n.D="D",n.E="E",L;var n})(),X=(()=>{return(n=X||(X={})).ClinicalSignificance="CLINICAL_SIGNIFICANCE",n.Description="DESCRIPTION",n.DiseaseName="DISEASE_NAME",n.DrugName="DRUG_NAME",n.EvidenceDirection="EVIDENCE_DIRECTION",n.EvidenceLevel="EVIDENCE_LEVEL",n.EvidenceRating="EVIDENCE_RATING",n.EvidenceType="EVIDENCE_TYPE",n.GeneSymbol="GENE_SYMBOL",n.Id="ID",n.Status="STATUS",n.VariantName="VARIANT_NAME",n.VariantOrigin="VARIANT_ORIGIN",X;var n})(),R=(()=>{return(n=R||(R={})).Accepted="ACCEPTED",n.Rejected="REJECTED",n.Submitted="SUBMITTED",R;var n})(),x=(()=>{return(n=x||(x={})).Accepted="ACCEPTED",n.All="ALL",n.Rejected="REJECTED",n.Submitted="SUBMITTED",x;var n})(),l=(()=>{return(n=l||(l={})).Diagnostic="DIAGNOSTIC",n.Functional="FUNCTIONAL",n.Oncogenic="ONCOGENIC",n.Predictive="PREDICTIVE",n.Predisposing="PREDISPOSING",n.Prognostic="PROGNOSTIC",l;var n})(),F=(()=>{return(n=F||(F={})).Open="OPEN",n.Resolved="RESOLVED",F;var n})(),E=(()=>{return(n=E||(E={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",E;var n})(),V=(()=>{return(n=V||(V={})).AssertionCount="assertionCount",n.DiseaseName="diseaseName",n.DrugName="drugName",n.EntrezSymbol="entrezSymbol",n.EvidenceItemCount="evidenceItemCount",n.GeneAlias="geneAlias",n.VariantCount="variantCount",V;var n})(),$=(()=>{return(n=$||($={})).Eq="EQ",n.Ge="GE",n.Gt="GT",n.Le="LE",n.Lt="LT",n.Ne="NE",$;var n})(),g=(()=>{return(n=g||(g={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",g;var n})(),b=(()=>{return(n=b||(b={})).Mention="MENTION",n.Subscription="SUBSCRIPTION",b;var n})(),G=(()=>{return(n=G||(G={})).Id="ID",n.Name="NAME",G;var n})(),S=(()=>{return(n=S||(S={})).AssertionCount="ASSERTION_COUNT",n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.HpoId="HPO_ID",n.Name="NAME",S;var n})(),H=(()=>{return(n=H||(H={})).Read="READ",n.Unread="UNREAD",H;var n})(),ie=(()=>{return(n=ie||(ie={})).Grch37="GRCH37",n.Grch38="GRCH38",n.Ncbi36="NCBI36",ie;var n})(),ue=(()=>{return(n=ue||(ue={})).Accepted="ACCEPTED",n.New="NEW",n.Rejected="REJECTED",n.Superseded="SUPERSEDED",ue;var n})(),he=(()=>{return(n=he||(he={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",he;var n})(),ze=(()=>{return(n=ze||(ze={})).Asc="ASC",n.Desc="DESC",ze;var n})(),Se=(()=>{return(n=Se||(Se={})).Asco="ASCO",n.Pubmed="PUBMED",Se;var n})(),ne=(()=>{return(n=ne||(ne={})).Curated="CURATED",n.New="NEW",n.Rejected="REJECTED",ne;var n})(),pe=(()=>{return(n=pe||(pe={})).Citation="CITATION",n.CitationId="CITATION_ID",n.CreatedAt="CREATED_AT",n.DiseaseName="DISEASE_NAME",n.GeneName="GENE_NAME",n.SourceType="SOURCE_TYPE",n.Submitter="SUBMITTER",n.VariantName="VARIANT_NAME",pe;var n})(),A=(()=>{return(n=A||(A={})).Authors="AUTHORS",n.CitationId="CITATION_ID",n.EvidenceCount="EVIDENCE_COUNT",n.Journal="JOURNAL",n.Name="NAME",n.SourceType="SOURCE_TYPE",n.SuggestionCount="SUGGESTION_COUNT",n.Year="YEAR",A;var n})(),te=(()=>{return(n=te||(te={})).Contains="CONTAINS",n.DoesNotContain="DOES_NOT_CONTAIN",n.Eq="EQ",n.Ne="NE",n.StartsWith="STARTS_WITH",te;var n})(),B=(()=>{return(n=B||(B={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.SourceSuggestion="SOURCE_SUGGESTION",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",B;var n})(),se=(()=>{return(n=se||(se={})).Assertion="ASSERTION",n.EvidenceItem="EVIDENCE_ITEM",n.Gene="GENE",n.Revision="REVISION",n.Role="ROLE",n.Variant="VARIANT",n.VariantGroup="VARIANT_GROUP",se;var n})(),ee=(()=>{return(n=ee||(ee={})).Admin="ADMIN",n.Curator="CURATOR",n.Editor="EDITOR",ee;var n})(),ge=(()=>{return(n=ge||(ge={})).Id="ID",n.LastAction="LAST_ACTION",n.Name="NAME",n.Role="ROLE",ge;var n})(),_e=(()=>{return(n=_e||(_e={})).All="ALL",n.WithAccepted="WITH_ACCEPTED",n.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",n.WithSubmitted="WITH_SUBMITTED",_e;var n})(),Ie=(()=>{return(n=Ie||(Ie={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",n.GeneNames="GENE_NAMES",n.Name="NAME",n.VariantCount="VARIANT_COUNT",n.VariantNames="VARIANT_NAMES",Ie;var n})(),Oe=(()=>{return(n=Oe||(Oe={})).CoordinateEnd="COORDINATE_END",n.CoordinateStart="COORDINATE_START",n.Name="NAME",Oe;var n})(),De=(()=>{return(n=De||(De={})).CommonGermline="COMMON_GERMLINE",n.Na="NA",n.RareGermline="RARE_GERMLINE",n.Somatic="SOMATIC",n.Unknown="UNKNOWN",De;var n})(),Ae=(()=>{return(n=Ae||(Ae={})).Name="NAME",n.Soid="SOID",n.VariantCount="VARIANT_COUNT",Ae;var n})(),C=(()=>{return(n=C||(C={})).AssertionCount="assertionCount",n.DiseaseName="diseaseName",n.DrugName="drugName",n.EntrezSymbol="entrezSymbol",n.EvidenceItemCount="evidenceItemCount",n.EvidenceScore="evidenceScore",n.VariantName="variantName",C;var n})();const q=t.Ps`
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
    `,O=t.Ps`
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
    `,ye=t.Ps`
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
    `,Re=t.Ps`
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
    `,Qe=t.Ps`
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
    `,be=t.Ps`
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
    `,Ue=t.Ps`
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
    ${Pe}`,Ge=t.Ps`
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
    `,Fe=t.Ps`
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
    `,$e=t.Ps`
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
    ${$e}`,Ze=t.Ps`
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
    `,w=t.Ps`
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
    `,xe=t.Ps`
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
    `,Be=t.Ps`
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
    `,rt=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,h=t.Ps`
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
    `,j=t.Ps`
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
    `,P=t.Ps`
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
    `,oe=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,ve=t.Ps`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,Te=t.Ps`
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
    `,dt=t.Ps`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,ut=(t.Ps`
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
    `,pt=t.Ps`
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
    `,At=t.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
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
    `,mt=t.Ps`
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
    `,$t=t.Ps`
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
    `,zt=t.Ps`
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
    `,Bt=t.Ps`
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
    `,yt=t.Ps`
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
    `,p=t.Ps`
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
    `,K=t.Ps`
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
    ${p}`,d=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${q}`;let M=(()=>{class n extends t.AE{constructor(r){super(r),this.document=d}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const re=t.Ps`
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
    ${O}`;let fe=(()=>{class n extends t.AE{constructor(r){super(r),this.document=re}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ne=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ce}`;let Le=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ne}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ot=t.Ps`
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
    ${Ce}`;let Qt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ot}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ut=t.Ps`
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
    ${ye}`;let wt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ut}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vt=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Re}`;let Yt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Vt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zt=t.Ps`
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
    ${Qe}`;let jt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Jt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Kt=t.Ps`
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
    ${be}`;let Xt=(()=>{class n extends t.AE{constructor(r){super(r),this.document=kt}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qt=t.Ps`
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
    ${Ue}`;let nn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=tn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const on=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ge}`;let rn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=on}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const sn=t.Ps`
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
    ${Fe}`;let an=(()=>{class n extends t.AE{constructor(r){super(r),this.document=sn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const cn=t.Ps`
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
    ${w}`;let hn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=vn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const zn=t.Ps`
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
    ${xe}`;let bn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Rn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Gn=t.Ps`
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
    ${Be}`;let Zn=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Yn}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Wn=t.Ps`
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
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${st}`;let po=(()=>{class n extends t.AE{constructor(r){super(r),this.document=uo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const mo=t.Ps`
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
    ${rt}`;let go=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fo=t.Ps`
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
    ${h}`;let vo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ho=t.Ps`
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
    `;let zo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ho}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _o=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Co=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_o}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yo=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${j}`;let To=(()=>{class n extends t.AE{constructor(r){super(r),this.document=yo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Io=t.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Do=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Io}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const So=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Oo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=So}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Eo=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${ye}`;let Mo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Eo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ao=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${P}`;let No=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ao}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Po=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let xo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Po}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Lo=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Fo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Lo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $o=t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Ro=(()=>{class n extends t.AE{constructor(r){super(r),this.document=$o}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const bo=t.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Go=(()=>{class n extends t.AE{constructor(r){super(r),this.document=bo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Bo=t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let Qo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Bo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Uo=t.Ps`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${oe}`;let wo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Uo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vo=t.Ps`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Yo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Vo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zo=t.Ps`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${ve}`;let Wo=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Zo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Jo=t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let jo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Jo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ko=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Te}`;let Ho=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ko}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ko=t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Xo=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ko}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qo=t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let ei=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qo}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ti=t.Ps`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let ni=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ti}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const oi=t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let ii=(()=>{class n extends t.AE{constructor(r){super(r),this.document=oi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ri=t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let si=(()=>{class n extends t.mm{constructor(r){super(r),this.document=ri}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ai=t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let ci=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ai}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const li=t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${at}`;let di=(()=>{class n extends t.mm{constructor(r){super(r),this.document=li}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ui=t.Ps`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let pi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ui}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const mi=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;let gi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fi=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${dt}`;let vi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=fi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;const hi=t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let zi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=hi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _i=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${ut}`;let Ci=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_i}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yi=t.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Ti=(()=>{class n extends t.mm{constructor(r){super(r),this.document=yi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ii=t.Ps`
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
    `;let Di=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ii}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${we}`;const Si=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Oi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Si}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ei=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Mi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ei}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ai=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Ni=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ai}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Pi=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${pt}`;let xi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Pi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Li=t.Ps`
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
    `;let Fi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Li}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${At}`;const $i=t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Ri=(()=>{class n extends t.mm{constructor(r){super(r),this.document=$i}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const bi=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Gi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=bi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Bi=t.Ps`
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
    `;let Qi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Bi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ui=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let wi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ui}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vi=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Yi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Vi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zi=t.Ps`
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
    `;let Wi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Zi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ji=t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Nt}`;let ji=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ji}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ki=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Hi=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ki}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ki=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${xt}`;let Xi=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ki}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qi=t.Ps`
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
    `;let er=(()=>{class n extends t.mm{constructor(r){super(r),this.document=qi}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const tr=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Lt}`;let nr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=tr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const or=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Ft}`;let ir=(()=>{class n extends t.AE{constructor(r){super(r),this.document=or}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const rr=t.Ps`
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
    `;let sr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=rr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ar=t.Ps`
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
    `;let cr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ar}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${mt}`;const lr=t.Ps`
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
    `;let dr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=lr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ur=t.Ps`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${gt}`;let pr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=ur}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const mr=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${ft}`;let gr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=mr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const fr=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${vt}`;let vr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=fr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const hr=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${ht}`;let zr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=hr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _r=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${$t}`;let Cr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=_r}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const yr=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Rt}`;let Tr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=yr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ir=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${bt}`;let Dr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ir}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Sr=t.Ps`
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
    ${Gt}`;let Or=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Sr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Er=t.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let Mr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Er}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ar=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${zt}`;let Nr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Ar}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Pr=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${_t}`;let xr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Pr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Lr=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ct}`;let Fr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Lr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $r=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Bt}`;let Rr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=$r}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const br=t.Ps`
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
${yt}
${lt}`;let Gr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=br}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Br=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${lt}`;let Qr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Br}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ur=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Dt}`;let wr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Ur}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Vr=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Yr=(()=>{class n extends t.mm{constructor(r){super(r),this.document=Vr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Zr=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${St}`;let Wr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Zr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();t.Ps`
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
    `;const Jr=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ot}`;let jr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Jr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Kr=t.Ps`
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
    `;let Hr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=Kr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const kr=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Et}`;let Xr=(()=>{class n extends t.AE{constructor(r){super(r),this.document=kr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qr=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${K}`;let es=(()=>{class n extends t.AE{constructor(r){super(r),this.document=qr}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(t._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},944:(de,W,o)=>{o.r(W),o.d(W,{LayoutModule:()=>Et});var t=o(9808),e=o(325),i=o(5e3),s=o(9350),z=o(8929),v=o(7625),a=o(655),Q=o(4090),c=o(1721),y=o(4219),_=o(925),D=o(5017),T=o(226),J=o(5113);const N=["*"],k=["nz-sider-trigger",""];function Y(p,K){}function U(p,K){if(1&p&&(i.ynx(0),i.YNc(1,Y,0,0,"ng-template",3),i.BQk()),2&p){const d=i.oxw(),M=i.MAs(5);i.xp6(1),i.Q6J("ngTemplateOutlet",d.nzZeroTrigger||M)}}function Z(p,K){}function I(p,K){if(1&p&&(i.ynx(0),i.YNc(1,Z,0,0,"ng-template",3),i.BQk()),2&p){const d=i.oxw(),M=i.MAs(3);i.xp6(1),i.Q6J("ngTemplateOutlet",d.nzTrigger||M)}}function L(p,K){if(1&p&&i._UZ(0,"i",5),2&p){const d=i.oxw(2);i.Q6J("nzType",d.nzCollapsed?"right":"left")}}function X(p,K){if(1&p&&i._UZ(0,"i",5),2&p){const d=i.oxw(2);i.Q6J("nzType",d.nzCollapsed?"left":"right")}}function R(p,K){if(1&p&&(i.YNc(0,L,1,1,"i",4),i.YNc(1,X,1,1,"i",4)),2&p){const d=i.oxw();i.Q6J("ngIf",!d.nzReverseArrow),i.xp6(1),i.Q6J("ngIf",d.nzReverseArrow)}}function x(p,K){1&p&&i._UZ(0,"i",6)}function l(p,K){if(1&p){const d=i.EpF();i.TgZ(0,"div",2),i.NdJ("click",function(){i.CHM(d);const re=i.oxw();return re.setCollapsed(!re.nzCollapsed)}),i.qZA()}if(2&p){const d=i.oxw();i.Q6J("matchBreakPoint",d.matchBreakPoint)("nzCollapsedWidth",d.nzCollapsedWidth)("nzCollapsed",d.nzCollapsed)("nzBreakpoint",d.nzBreakpoint)("nzReverseArrow",d.nzReverseArrow)("nzTrigger",d.nzTrigger)("nzZeroTrigger",d.nzZeroTrigger)("siderWidth",d.widthSetting)}}let F=(()=>{class p{constructor(d,M){this.elementRef=d,this.renderer=M,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.SBq),i.Y36(i.Qsj))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:N,decls:1,vars:0,template:function(d,M){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),V=(()=>{class p{constructor(d,M){this.elementRef=d,this.renderer=M,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.SBq),i.Y36(i.Qsj))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:N,decls:1,vars:0,template:function(d,M){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),$=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(d,M){2&d&&(i.Udp("width",M.isNormalTrigger?M.siderWidth:null),i.ekj("ant-layout-sider-trigger",M.isNormalTrigger)("ant-layout-sider-zero-width-trigger",M.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",M.isZeroTrigger&&M.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",M.isZeroTrigger&&!M.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[i.TTD],attrs:k,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(d,M){1&d&&(i.YNc(0,U,2,1,"ng-container",0),i.YNc(1,I,2,1,"ng-container",0),i.YNc(2,R,2,2,"ng-template",null,1,i.W1O),i.YNc(4,x,1,0,"ng-template",null,2,i.W1O)),2&d&&(i.Q6J("ngIf",M.isZeroTrigger),i.xp6(1),i.Q6J("ngIf",M.isNormalTrigger))},directives:[t.O5,t.tP,D.Ls],encapsulation:2,changeDetection:0}),p})(),g=(()=>{class p{constructor(d,M,re){this.platform=d,this.cdr=M,this.breakpointService=re,this.destroy$=new z.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new i.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,c.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(d){d!==this.nzCollapsed&&(this.nzCollapsed=d,this.nzCollapsedChange.emit(d),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(Q.ow,!0).pipe((0,v.R)(this.destroy$)).subscribe(d=>{const M=this.nzBreakpoint;M&&(0,c.ov)().subscribe(()=>{this.matchBreakPoint=!d[M],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(d){const{nzCollapsed:M,nzCollapsedWidth:re,nzWidth:fe}=d;(M||re||fe)&&this.updateStyleMap(),M&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(_.t4),i.Y36(i.sBO),i.Y36(Q.r3))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(d,M,re){if(1&d&&i.Suo(re,y.wO,5),2&d){let fe;i.iGM(fe=i.CRH())&&(M.nzMenuDirective=fe.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(d,M){2&d&&(i.Udp("flex",M.flexSetting)("max-width",M.widthSetting)("min-width",M.widthSetting)("width",M.widthSetting),i.ekj("ant-layout-sider-zero-width",M.nzCollapsed&&0===M.nzCollapsedWidth)("ant-layout-sider-light","light"===M.nzTheme)("ant-layout-sider-dark","dark"===M.nzTheme)("ant-layout-sider-collapsed",M.nzCollapsed)("ant-layout-sider-has-trigger",M.nzCollapsible&&null!==M.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[i.TTD],ngContentSelectors:N,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(d,M){1&d&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA(),i.YNc(2,l,1,8,"div",1)),2&d&&(i.xp6(2),i.Q6J("ngIf",M.nzCollapsible&&null!==M.nzTrigger))},directives:[$,t.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,c.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsed",void 0),p})(),b=(()=>{class p{constructor(d){this.directionality=d,this.dir="ltr",this.destroy$=new z.xQ}ngOnInit(){var d;this.dir=this.directionality.value,null===(d=this.directionality.change)||void 0===d||d.pipe((0,v.R)(this.destroy$)).subscribe(M=>{this.dir=M})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(T.Is,8))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(d,M,re){if(1&d&&i.Suo(re,g,4),2&d){let fe;i.iGM(fe=i.CRH())&&(M.listOfNzSiderComponent=fe)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(d,M){2&d&&i.ekj("ant-layout-rtl","rtl"===M.dir)("ant-layout-has-sider",M.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:N,decls:1,vars:0,template:function(d,M){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),G=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[T.vT,t.ez,D.PV,J.xu,_.ud]]}),p})();var S=o(404),H=o(1894),ie=o(7630),ue=o(8054),he=o(353),ze=o(8514),Se=o(8896),pe=o(5254),A=o(3240),te=o(1307),B=o(3164),se=o(7545),ee=o(4850),ge=o(2198),_e=o(5778),Ie=o(3075),Oe=o(3618),De=o(6949);function Ae(p,K){if(1&p&&(i.TgZ(0,"span",6),i._uU(1," \u2014 "),i._UZ(2,"span",4),i.qZA()),2&p){const d=i.oxw().$implicit;i.xp6(2),i.s9C("innerHTML",d.result.matchingText,i.oJD)}}function C(p,K){if(1&p&&(i.TgZ(0,"nz-option",2),i._UZ(1,"i",3)(2,"span",4),i.YNc(3,Ae,3,1,"span",5),i.qZA()),2&p){const d=K.$implicit,M=i.oxw();i.Q6J("nzLabel",d.text)("nzValue",d.result),i.xp6(1),i.Q6J("nzType",M.iconNameForResult(d.result)),i.xp6(1),i.s9C("innerHTML",d.result.name,i.oJD),i.xp6(1),i.Q6J("ngIf",d.result.matchingText)}}let q=(()=>{class p{constructor(d,M){this.gql=d,this.router=M,this.onSearch$=new z.xQ,this.onSelect$=new z.xQ,this.response$=this.onSearch$.pipe((0,te.T)(1),(0,B.p)(300,he.z,{leading:!1,trailing:!0}),(0,se.w)(Ne=>function ne(p,K=Se.E,d=Se.E){return(0,ze.P)(()=>p()?K:d)}(()=>void 0===this.queryRef,(0,ze.P)(()=>re(Ne)),(0,ze.P)(()=>fe(Ne))))),this.isLoading$=this.response$.pipe((0,ee.U)(Ne=>Ne.loading),(0,ge.h)(A.ep),(0,_e.x)()),this.result$=this.response$.pipe((0,ee.U)(Ne=>{var Le;return null===(Le=Ne.data)||void 0===Le?void 0:Le.search}),(0,ge.h)(A.ep)),this.option$=this.result$.pipe((0,ee.U)(Ne=>{const Le=[];return Ne.forEach(ot=>{ot&&Le.push({text:ot.name,value:ot.id.toString(),result:ot})}),Le})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const re=Ne=>(this.queryRef=this.gql.watch({query:Ne}),this.queryRef.valueChanges),fe=Ne=>(0,pe.D)(this.queryRef.refetch({query:Ne}))}set selectedOpt(d){this._selectedOpt=d}get selectedOpt(){return this._selectedOpt}iconNameForResult(d){return d.resultType===ie.rZD.EvidenceItem?"civic:evidence":`civic:${d.resultType.toLowerCase()}`}urlForResult(d){let M;switch(d.resultType){case ie.rZD.VariantGroup:M="variant-groups";break;case ie.rZD.EvidenceItem:M="evidence";break;default:M=`${d.resultType.toLowerCase()}s`}return`/${M}/${d.id}/summary`}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(ie.ghc),i.Y36(e.F0))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(d,M){if(1&d&&i.Gf(ue.Vq,7),2&d){let re;i.iGM(re=i.CRH())&&(M.selectNode=re.first)}},decls:3,vars:7,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"]],template:function(d,M){1&d&&(i.TgZ(0,"nz-select",0),i.NdJ("ngModelChange",function(fe){return M.selectedOpt=fe})("ngModelChange",function(fe){return M.onSelect$.next(fe)})("nzOnSearch",function(fe){return M.onSearch$.next(fe)}),i.YNc(1,C,4,5,"nz-option",1),i.ALo(2,"ngrxPush"),i.qZA()),2&d&&(i.Q6J("ngModel",M.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,5,M.option$)))},directives:[ue.Vq,Ie.JJ,Ie.On,t.sg,ue.Ip,D.Ls,t.O5,Oe.ZU],pipes:[De.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var O=o(1912),ce=o(1059),Ce=o(2340),ye=o(8144),Re=o(6042),Qe=o(2643),be=o(2683),Pe=o(3677),Ue=o(4401),Ge=o(7881),Fe=o(3640),$e=o(8785),Ye=o(3434);function Ze(p,K){if(1&p&&(i.TgZ(0,"button",26),i._uU(1," Add "),i._UZ(2,"i",27),i.qZA()),2&p){i.oxw(2);const d=i.MAs(15);i.Q6J("nzDropdownMenu",d)}}const We=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function Je(p,K){if(1&p&&(i.TgZ(0,"nz-badge",28)(1,"button",29),i._UZ(2,"i",30),i.qZA()()),2&p){const d=i.oxw().ngrxLet,M=i.oxw().ngIf;i.Q6J("nzCount",d)("nzOverflowCount",999)("nzStyle",i.DdM(4,We)),i.xp6(1),i.MGl("routerLink","/users/",M.id,"/notifications")}}const w=function(p){return{"update-coi":p}};function le(p,K){if(1&p&&i._UZ(0,"cvc-user-avatar",36),2&p){const d=i.oxw(3).ngIf;i.Q6J("user",d)("size",22)("ngClass",i.VKq(3,w,d.invalidCoi))}}function f(p,K){if(1&p&&(i.TgZ(0,"div",37),i._uU(1),i.qZA()),2&p){const d=i.oxw(3).ngIf;i.xp6(1),i.Oqu(d.username)}}function m(p,K){1&p&&i._UZ(0,"i",27)}function ae(p,K){if(1&p&&(i.TgZ(0,"button",31)(1,"nz-space",32),i.YNc(2,le,1,5,"cvc-user-avatar",33),i.YNc(3,f,2,1,"div",34),i.YNc(4,m,1,0,"i",35),i.qZA()()),2&p){i.oxw(2);const d=i.MAs(3);i.Q6J("nzDropdownMenu",d)}}function me(p,K){1&p&&(i.TgZ(0,"nz-space",22),i.YNc(1,Ze,3,1,"button",23),i.YNc(2,Je,3,5,"nz-badge",24),i.YNc(3,ae,5,1,"button",25),i.qZA())}function Me(p,K){if(1&p){const d=i.EpF();i.TgZ(0,"li",17)(1,"button",38),i.NdJ("click",function(){return i.CHM(d),i.oxw(2).coiUpdateModalVisible=!0}),i._UZ(2,"i",39),i._uU(3," Please update COI statement "),i.qZA()()}}function xe(p,K){1&p&&i._UZ(0,"li",14)}function Ee(p,K){1&p&&(i.TgZ(0,"li",40)(1,"a",41),i._uU(2," Admin Console "),i.qZA()())}function Be(p,K){1&p&&(i.TgZ(0,"li",42)(1,"a",43),i._uU(2," Background Workers "),i.qZA()())}function Ve(p,K){if(1&p){const d=i.EpF();i.TgZ(0,"li",17)(1,"a",44),i.NdJ("click",function(){return i.CHM(d),i.oxw(2).addVariantModalVisible=!0}),i._uU(2," Variant "),i.qZA()()}}const je=function(p){return["/users",p]};function Ke(p,K){if(1&p){const d=i.EpF();i.ynx(0),i.YNc(1,me,4,0,"nz-space",6),i.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),i.YNc(5,Me,4,0,"li",9),i.YNc(6,xe,1,0,"li",10),i.TgZ(7,"li",11),i._uU(8," Your Profile "),i.qZA(),i.YNc(9,Ee,3,0,"li",12),i.YNc(10,Be,3,0,"li",13),i._UZ(11,"li",14),i.TgZ(12,"li",15),i.NdJ("click",function(){return i.CHM(d),i.oxw().signOut()}),i._uU(13,"Sign Out"),i.qZA()()(),i.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),i._uU(19," Evidence Item "),i.qZA()(),i.TgZ(20,"li",17)(21,"a",19),i._uU(22," Assertion "),i.qZA()(),i.TgZ(23,"li",17)(24,"a",20),i._uU(25," Source Suggestion "),i.qZA()(),i.YNc(26,Ve,3,0,"li",9),i.TgZ(27,"li",17)(28,"a",21),i._uU(29," Variant Group "),i.qZA()()()(),i.BQk()}if(2&p){const d=K.ngIf,M=i.oxw();i.xp6(1),i.Q6J("ngrxLet",M.unreadCount$),i.xp6(4),i.Q6J("ngIf",d.invalidCoi),i.xp6(1),i.Q6J("ngIf",d.invalidCoi),i.xp6(1),i.Q6J("routerLink",i.VKq(7,je,d.id)),i.xp6(2),i.Q6J("ngIf",d.isAdmin),i.xp6(1),i.Q6J("ngIf",d.isAdmin),i.xp6(16),i.Q6J("ngIf",d.isEditor)}}function He(p,K){1&p&&(i.TgZ(0,"span"),i._uU(1,"Update your Conflict of Interest Statement"),i.qZA())}function ke(p,K){if(1&p){const d=i.EpF();i.TgZ(0,"cvc-user-coi-form",45),i.NdJ("coiUpdatedEvent",function(){return i.CHM(d),i.oxw().coiUpdated()}),i.qZA()}}function et(p,K){1&p&&(i.TgZ(0,"span"),i._uU(1,"Add New Variant"),i.qZA())}function it(p,K){1&p&&i._UZ(0,"cvc-variant-submit-form")}let Xe=(()=>{class p{constructor(d,M){this.queryService=d,this.unreadCountGql=M,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Ce.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,ce.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,ce.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(s.a),i.Y36(ie.Kmw))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(d,M){if(1&d&&(i.YNc(0,Ke,30,9,"ng-container",0),i.ALo(1,"ngrxPush"),i.TgZ(2,"nz-modal",1),i.NdJ("nzVisibleChange",function(fe){return M.coiUpdateModalVisible=fe})("nzOnCancel",function(){return M.handleCoiModalCancel()}),i.YNc(3,He,2,0,"ng-template",null,2,i.W1O),i.YNc(5,ke,1,0,"ng-template",null,3,i.W1O),i.qZA(),i.TgZ(7,"nz-modal",1),i.NdJ("nzVisibleChange",function(fe){return M.addVariantModalVisible=fe})("nzOnCancel",function(){return M.addVariantModalVisible=!1}),i.YNc(8,et,2,0,"ng-template",null,4,i.W1O),i.YNc(10,it,1,0,"ng-template",null,5,i.W1O),i.qZA()),2&d){const re=i.MAs(4),fe=i.MAs(6),Ne=i.MAs(9),Le=i.MAs(11);i.Q6J("ngIf",i.lcZ(1,9,M.viewer$)),i.xp6(2),i.Q6J("nzVisible",M.coiUpdateModalVisible)("nzContent",fe)("nzTitle",re)("nzFooter",null),i.xp6(5),i.Q6J("nzVisible",M.addVariantModalVisible)("nzContent",Le)("nzTitle",Ne)("nzFooter",null)}},directives:[t.O5,De.eJ,ye.NU,ye.$1,Re.ix,Qe.dQ,be.w,Pe.wA,Pe.cm,D.Ls,Ue.x7,e.rH,Ge.L,t.mk,Pe.RR,y.wO,y.r9,y.YV,e.yS,Fe.du,$e.t,Ye.G],pipes:[De.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function tt(p,K){1&p&&i._UZ(0,"img",60)}function st(p,K){1&p&&i._UZ(0,"img",61)}function rt(p,K){1&p&&i._UZ(0,"cvc-login-button")}function h(p,K){1&p&&i._UZ(0,"cvc-viewer-button")}const j=function(p){return{"is-collapsed":p}},oe=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(d){this.viewerService=d,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(s.a))},p.\u0275cmp=i.Xpm({type:p,selectors:[["cvc-layout"]],decls:129,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(d,M){1&d&&(i.TgZ(0,"nz-layout",0)(1,"nz-sider",1),i.NdJ("nzCollapsedChange",function(fe){return M.isCollapsed=fe}),i.TgZ(2,"a",2)(3,"div",3),i.YNc(4,tt,1,0,"img",4),i.YNc(5,st,1,0,"img",5),i.qZA()(),i.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),i._UZ(10,"i",9),i.TgZ(11,"span")(12,"a",10),i._uU(13,"Assertions"),i.qZA()()(),i.TgZ(14,"li",8),i._UZ(15,"i",11),i.TgZ(16,"span")(17,"a",12),i._uU(18,"Evidence"),i.qZA()()(),i.TgZ(19,"li",8),i._UZ(20,"i",13),i.TgZ(21,"span")(22,"a",14),i._uU(23,"Genes"),i.qZA()()(),i.TgZ(24,"li",8),i._UZ(25,"i",15),i.TgZ(26,"span")(27,"a",16),i._uU(28,"Variants"),i.qZA()()(),i.TgZ(29,"li",8),i._UZ(30,"i",17),i.TgZ(31,"span")(32,"a",18),i._uU(33,"Variant Groups"),i.qZA()()()()(),i.TgZ(34,"li",8),i._UZ(35,"i",19),i.TgZ(36,"span")(37,"a",20),i._uU(38,"Clinical Trials"),i.qZA()()(),i.TgZ(39,"li",8),i._UZ(40,"i",21),i.TgZ(41,"span")(42,"a",22),i._uU(43,"Diseases"),i.qZA()()(),i.TgZ(44,"li",8),i._UZ(45,"i",23),i.TgZ(46,"span")(47,"a",24),i._uU(48,"Drugs"),i.qZA()()(),i.TgZ(49,"li",8),i._UZ(50,"i",25),i.TgZ(51,"span")(52,"a",26),i._uU(53,"Phenotypes"),i.qZA()()(),i.TgZ(54,"li",8),i._UZ(55,"i",27),i.TgZ(56,"span")(57,"a",28),i._uU(58,"Sources"),i.qZA()()(),i.TgZ(59,"li",8),i._UZ(60,"i",29),i.TgZ(61,"span")(62,"a",30),i._uU(63,"Variant Types"),i.qZA()()(),i.TgZ(64,"li",7)(65,"ul")(66,"li",8),i._UZ(67,"i",31),i.TgZ(68,"span")(69,"a",32),i._uU(70," Activity "),i.qZA()()(),i.TgZ(71,"li",8),i._UZ(72,"i",33),i.TgZ(73,"span")(74,"a",34),i._uU(75,"Queues"),i.qZA()()(),i.TgZ(76,"li",8),i._UZ(77,"i",35),i.TgZ(78,"span")(79,"a",36),i._uU(80,"Search"),i.qZA()()()()(),i.TgZ(81,"li",7)(82,"ul")(83,"li",8),i._UZ(84,"i",37),i.TgZ(85,"span")(86,"a",38),i._uU(87,"Contributors"),i.qZA()()(),i.TgZ(88,"li",8),i._UZ(89,"i",39),i.TgZ(90,"span")(91,"a",40),i._uU(92,"Organizations"),i.qZA()()()()(),i.TgZ(93,"li",7)(94,"ul")(95,"li",8),i._UZ(96,"i",41),i.TgZ(97,"span")(98,"a",42),i._uU(99,"Data Releases"),i.qZA()()()()()(),i.TgZ(100,"div",43),i._UZ(101,"img",44)(102,"img",45),i.qZA()(),i.TgZ(103,"nz-layout",46)(104,"nz-header")(105,"div",47)(106,"div",48)(107,"span",49),i.NdJ("click",function(){return M.isCollapsed=!M.isCollapsed}),i._UZ(108,"i",50),i.qZA()(),i.TgZ(109,"div",51),i._UZ(110,"cvc-quicksearch"),i.qZA(),i.TgZ(111,"div",52)(112,"ul",53)(113,"li",54)(114,"a",55),i._uU(115,"Home"),i.qZA()(),i.TgZ(116,"li",54)(117,"a",56),i._uU(118,"About CIViC"),i.qZA()(),i.TgZ(119,"li",54)(120,"a",57),i._uU(121,"Help"),i.qZA()()()(),i.TgZ(122,"div",58),i.YNc(123,rt,1,0,"cvc-login-button",59),i.ALo(124,"async"),i.YNc(125,h,1,0,"cvc-viewer-button",59),i.ALo(126,"async"),i.qZA()()(),i.TgZ(127,"nz-content"),i._UZ(128,"router-outlet"),i.qZA()()()),2&d&&(i.xp6(1),i.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",M.isCollapsed)("nzTrigger",null),i.xp6(2),i.Q6J("ngClass",i.VKq(39,j,M.isCollapsed)),i.xp6(1),i.Q6J("ngIf",!M.isCollapsed),i.xp6(1),i.Q6J("ngIf",M.isCollapsed),i.xp6(1),i.Q6J("ngClass",i.VKq(41,j,M.isCollapsed))("nzInlineCollapsed",M.isCollapsed),i.xp6(1),i.Q6J("nzTitle",M.isCollapsed?"KNOW":"KNOWLEDGEBASE"),i.xp6(2),i.Q6J("nzTooltipTitle",M.isCollapsed?"Assertions":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Evidence":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Genes":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Variants":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Variant Groups":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Clinical Trials":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Diseases":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Drugs":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Phenotypes":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Sources":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Variant Types":""),i.xp6(5),i.Q6J("nzTitle",M.isCollapsed?"CURATE":"CURATION"),i.xp6(2),i.Q6J("nzTooltipTitle",M.isCollapsed?"Activity":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Pending Queues":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Search":""),i.xp6(5),i.Q6J("nzTitle",M.isCollapsed?"COMM":"COMMUNITY"),i.xp6(2),i.Q6J("nzTooltipTitle",M.isCollapsed?"Users":""),i.xp6(5),i.Q6J("nzTooltipTitle",M.isCollapsed?"Organizations":""),i.xp6(5),i.Q6J("nzTitle",M.isCollapsed?"RES":"RESOURCES"),i.xp6(2),i.Q6J("nzTooltipTitle",M.isCollapsed?"Data Releases":""),i.xp6(5),i.Q6J("ngClass",i.VKq(43,j,M.isCollapsed)),i.xp6(3),i.Q6J("ngClass",i.VKq(45,j,M.isCollapsed)),i.xp6(5),i.Q6J("nzType",M.isCollapsed?"menu-unfold":"menu-fold"),i.xp6(15),i.Q6J("ngIf",i.lcZ(124,35,M.signedOut$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(126,37,M.signedIn$)))},directives:[b,g,e.yS,t.mk,t.O5,y.wO,y.uA,y.r9,S.SY,D.Ls,V,H.SK,H.t3,q,O.s,Xe,F,e.lC],pipes:[t.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(4184),o.e(2033),o.e(8829),o.e(8592),o.e(3200)]).then(o.bind(o,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(1192),o.e(7142),o.e(1838)]).then(o.bind(o,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(7434)]).then(o.bind(o,233)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(8592),o.e(8918)]).then(o.bind(o,1592)).then(p=>p.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(1192),o.e(4111)]).then(o.bind(o,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(8482),o.e(9160),o.e(8592),o.e(9987)]).then(o.bind(o,9040)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(9160),o.e(3278),o.e(376),o.e(8592),o.e(3521)]).then(o.bind(o,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(3883),o.e(8592),o.e(402)]).then(o.bind(o,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(4184),o.e(2043),o.e(2033),o.e(3278),o.e(7142),o.e(8592),o.e(6754)]).then(o.bind(o,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(3883),o.e(3278),o.e(8592),o.e(7062)]).then(o.bind(o,684)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(8945),o.e(5839),o.e(4025),o.e(9931),o.e(8482),o.e(9397),o.e(1192),o.e(6724),o.e(55),o.e(9716),o.e(3883),o.e(5291),o.e(9160),o.e(3278),o.e(376),o.e(8592),o.e(8486)]).then(o.bind(o,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([o.e(7064),o.e(6256),o.e(5839),o.e(4025),o.e(8482),o.e(79)]).then(o.bind(o,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(4025),o.e(8482),o.e(9160),o.e(1750),o.e(8592),o.e(9221)]).then(o.bind(o,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([o.e(7064),o.e(8945),o.e(5839),o.e(4025),o.e(8482),o.e(9160),o.e(1750),o.e(1875)]).then(o.bind(o,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([o.e(6256),o.e(8945),o.e(4025),o.e(9931),o.e(9397),o.e(6724),o.e(9716),o.e(376),o.e(5715)]).then(o.bind(o,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([o.e(7064),o.e(5839),o.e(4579)]).then(o.bind(o,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([o.e(7064),o.e(4038)]).then(o.bind(o,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let ve=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[e.Bz.forChild(oe)],e.Bz]}),p})();var Te=o(1017),nt=o(1047),at=o(4546),qe=o(2845),ct=o(4832),dt=o(969),Mt=o(2994),ut=o(8583),we=o(1159),pt=o(7429);const zt={provide:Ie.JU,useExisting:(0,i.Gpc)(()=>Ct),multi:!0};let Ct=(()=>{class p{constructor(d,M,re,fe,Ne,Le){this.ngZone=d,this.elementRef=M,this.overlay=re,this.viewContainerRef=fe,this.nzInputGroupWhitSuffixOrPrefixDirective=Ne,this.document=Le,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new z.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,v.R)(this.destroy$)).subscribe(d=>{"void"===d.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(d){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(d)))}registerOnChange(d){this.onChange=d}registerOnTouched(d){this.onTouched=d}setDisabledState(d){this.elementRef.nativeElement.disabled=d,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(d){const M=d.keyCode,re=M===we.LH||M===we.JH;M===we.hY&&d.preventDefault(),!this.panelOpen||M!==we.hY&&M!==we.Mf?this.panelOpen&&M===we.K5?this.nzAutocomplete.showPanel&&(d.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&re&&this.nzAutocomplete.showPanel&&(d.stopPropagation(),d.preventDefault(),M===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(d){const M=d.target,re=this.document;let fe=M.value;"number"===M.type&&(fe=""===fe?null:parseFloat(fe)),this.previousValue!==fe&&(this.previousValue=fe,this.onChange(fe),this.canOpen()&&re.activeElement===d.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Mt.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,ut.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(d=>{this.setValueAndClose(d)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ge.h)(d=>!this.elementRef.nativeElement.contains(d.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function _t(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new pt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const d=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(d).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const d=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==d?(this.nzAutocomplete.setActiveItem(d),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(d){const M=d.nzValue;this.setTriggerValue(d.getLabel()),this.onChange(M),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(d){const M=this.nzAutocomplete.getOption(d),re=M?M.getLabel():d;this.elementRef.nativeElement.value=null!=re?re:"",this.nzAutocomplete.nzBackfill||(this.previousValue=re)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const d=this.elementRef.nativeElement;return!d.readOnly&&!d.disabled}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(qe.aV),i.Y36(i.s_b),i.Y36(nt.ke,8),i.Y36(t.K0,8))},p.\u0275dir=i.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(d,M){1&d&&i.NdJ("focusin",function(){return M.handleFocus()})("blur",function(){return M.handleBlur()})("input",function(fe){return M.handleInput(fe)})("keydown",function(fe){return M.handleKeydown(fe)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[i._Bn([zt])]}),p})(),yt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[T.vT,t.ez,qe.U8,Ie.u5,dt.T,ct.g,nt.o7]]}),p})(),Tt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,Ie.u5,e.Bz,De.WG,Oe.ZJ,ue.LV,nt.o7,at.U5,D.PV,yt]]}),p})();var It=o(1844),lt=o(5473),Dt=o(330),St=o(7058);let Ot=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,De.WG,Pe.b1,e.Bz,Re.sL,ye.zf,D.PV,Ue.mS,S.cg,Fe.Qp,lt.H,Dt.e,St.e]]}),p})(),Et=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[t.ez,ve,D.PV,H.Jb,G,y.ip,S.cg,Oe.ZJ,Te.s,It.B,Ot,Tt]]}),p})()},3240:(de,W,o)=>{function t(a){return null!=a}o.d(W,{ep:()=>t})},373:(de,W,o)=>{o.d(W,{j:()=>e});var t=o(4850);function e(...s){const z=s.length;if(0===z)throw new Error("list of properties cannot be empty.");return v=>(0,t.U)(function i(s,z){return a=>{let Q=a;for(let c=0;c<z;c++){const y=null!=Q?Q[s[c]]:void 0;if(void 0===y)return;Q=y}return Q}}(s,z))(v)}},3164:(de,W,o)=>{o.d(W,{p:()=>a});var t=o(3489),e=o(353);const i={leading:!0,trailing:!1};function a(_,D=e.P,T=i){return J=>J.lift(new Q(_,D,T.leading,T.trailing))}class Q{constructor(D,T,J,N){this.duration=D,this.scheduler=T,this.leading=J,this.trailing=N}call(D,T){return T.subscribe(new c(D,this.duration,this.scheduler,this.leading,this.trailing))}}class c extends t.L{constructor(D,T,J,N,k){super(D),this.duration=T,this.scheduler=J,this.leading=N,this.trailing=k,this._hasTrailingValue=!1,this._trailingValue=null}_next(D){this.throttled?this.trailing&&(this._trailingValue=D,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(y,this.duration,{subscriber:this})),this.leading?this.destination.next(D):this.trailing&&(this._trailingValue=D,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const D=this.throttled;D&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),D.unsubscribe(),this.remove(D),this.throttled=null)}}function y(_){const{subscriber:D}=_;D.clearThrottle()}},444:(de,W,o)=>{function t(x){return x!==String(parseFloat(x))}o.d(W,{o6:()=>R});var z=Object.getOwnPropertyNames?function e(x){return Object.getOwnPropertyNames(x).filter(function(l){return x.propertyIsEnumerable(l)&&t(l)})}:Object.keys?function i(x){return Object.keys(x).filter(t)}:function s(x){var l=[];for(var F in x)x.hasOwnProperty(F)&&x.propertyIsEnumerable(F)&&t(F)&&l.push(F);return l},v=function(){function x(l){this.enumObj=l,this.keysList=Object.freeze(z(l));for(var F=this.keysList.length,E=new Array(F),V=new Map,$=0;$<F;++$){var g=this.keysList[$],b=l[g];E[$]=b,V.set(b,g),this[$]=Object.freeze([g,b])}this.valuesList=Object.freeze(E),this.keysByValueMap=V,this.size=this.length=F,Object.freeze(this)}return x.prototype.toString=function(){return"[object EnumWrapper]"},x.prototype.keys=function(){var l,F=this,E=0;return(l={next:function(){var $={done:E>=F.length,value:F.keysList[E]};return++E,$}})[Symbol.iterator]=function(){return this},l},x.prototype.values=function(){var l,F=this,E=0;return(l={next:function(){var $={done:E>=F.length,value:F.valuesList[E]};return++E,$}})[Symbol.iterator]=function(){return this},l},x.prototype.entries=function(){var l,F=this,E=0;return(l={next:function(){var $={done:E>=F.length,value:F[E]};return++E,$}})[Symbol.iterator]=function(){return this},l},x.prototype[Symbol.iterator]=function(){return this.entries()},x.prototype.forEach=function(l,F){for(var E=this.length,V=0;V<E;++V){var $=this[V];l.call(F,$[1],$[0],this,V)}},x.prototype.map=function(l,F){for(var E=this.length,V=new Array(E),$=0;$<E;++$){var g=this[$];V[$]=l.call(F,g[1],g[0],this,$)}return V},x.prototype.getKeys=function(){return this.keysList.slice()},x.prototype.getValues=function(){return this.valuesList.slice()},x.prototype.getEntries=function(){return Array.prototype.slice.call(this)},x.prototype.indexOfKey=function(l){return this.keysList.indexOf(l)},x.prototype.indexOfValue=function(l){return this.valuesList.indexOf(l)},x.prototype.isKey=function(l){return null!=l&&t(l)&&this.enumObj.hasOwnProperty(l)},x.prototype.asKeyOrThrow=function(l){if(this.isKey(l))return l;throw new Error("Unexpected key: "+l+". Expected one of: "+this.getValues())},x.prototype.asKeyOrDefault=function(l,F){return this.isKey(l)?l:F},x.prototype.isValue=function(l){return null!=l&&this.keysByValueMap.has(l)},x.prototype.asValueOrThrow=function(l){if(this.isValue(l))return l;throw new Error("Unexpected value: "+l+". Expected one of: "+this.getValues())},x.prototype.asValueOrDefault=function(l,F){return this.isValue(l)?l:F},x.prototype.getKeyOrThrow=function(l){var F=null!=l?this.keysByValueMap.get(l):void 0;if(null!=F)return F;throw new Error("Unexpected value: "+l+". Expected one of: "+this.getValues())},x.prototype.getKeyOrDefault=function(l,F){var E=null!=l?this.keysByValueMap.get(l):void 0;return null!=E?E:F},x.prototype.getValueOrThrow=function(l){return this.enumObj[this.asKeyOrThrow(l)]},x.prototype.getValueOrDefault=function(l,F){return this.isKey(l)?this.enumObj[l]:F},x}();v.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),Q=Symbol("ts-enum-util:handleNull"),c=Symbol("ts-enum-util:handleUndefined"),y=Symbol("ts-enum-util:handleUnexpected");function _(x){return new Error("Unhandled value: "+x)}var D=function(){function x(l){this.value=l}return x.prototype.with=function(l){if(l.hasOwnProperty(this.value))return N(l[this.value],this.value);if(l[y])return N(l[y],this.value);throw new Error("Unexpected value: "+this.value)},x}(),T=function(){function x(){}return x.prototype.with=function(l){if(l[Q])return N(l[Q],null);if(l[y])return N(l[y],null);throw new Error("Unexpected value: null")},x}(),J=function(){function x(){}return x.prototype.with=function(l){if(l[c])return N(l[c],void 0);if(l[y])return N(l[y],void 0);throw new Error("Unexpected value: undefined")},x}();function N(x,l){if(x===a)throw _(l);return x(l)}var k=function(){function x(l){this.value=l}return x.prototype.with=function(l){if(l.hasOwnProperty(this.value))return Z(l[this.value],this.value);if(l.hasOwnProperty(y))return Z(l[y],this.value);throw new Error("Unexpected value: "+this.value)},x}(),Y=function(){function x(){}return x.prototype.with=function(l){if(l.hasOwnProperty(Q))return Z(l[Q],null);if(l.hasOwnProperty(y))return Z(l[y],null);throw new Error("Unexpected value: null")},x}(),U=function(){function x(){}return x.prototype.with=function(l){if(l.hasOwnProperty(c))return Z(l[c],void 0);if(l.hasOwnProperty(y))return Z(l[y],void 0);throw new Error("Unexpected value: undefined")},x}();function Z(x,l){if(x===a)throw _(l);return x}var X=new WeakMap;function R(x){var l=X.get(x);return l||(l=new v(x),X.set(x,l)),l}R.handleNull=Q,R.handleUndefined=c,R.handleUnexpected=y,R.unhandledEntry=a,R.visitValue=function I(x){return null===x?new T:void 0===x?new J:new D(x)},R.mapValue=function L(x){return null===x?new Y:void 0===x?new U:new k(x)}},4987:(de,W,o)=>{o.d(W,{c:()=>x,t:()=>b});var t=o(8929),e=o(2654),v=(o(5254),o(8896),o(8139),o(5e3)),y=(o(1709),o(7770),o(7221),o(7625));const _=v.GuJ,T=Symbol("__destroy"),J=Symbol("__decoratorApplied");function N(S){return"string"==typeof S?Symbol(`__destroy__${S}`):T}function Y(S,H){S[H]||(S[H]=new t.xQ)}function U(S,H){S[H]&&(S[H].next(),S[H].complete(),S[H]=null)}function Z(S){S instanceof e.w&&S.unsubscribe()}function L(S,H){return function(){var ie;if(S&&S.call(this),U(this,N()),H.arrayName&&function I(S){Array.isArray(S)&&S.forEach(Z)}(this[H.arrayName]),H.checkProperties)for(const ue in this)(null===(ie=H.blackList)||void 0===ie?void 0:ie.includes(ue))||Z(this[ue])}}function x(S={}){return H=>{!function D(S){return!!S[_]}(H)?function X(S,H){S.prototype.ngOnDestroy=L(S.prototype.ngOnDestroy,H)}(H,S):function R(S,H){const ie=S.\u0275pipe;ie.onDestroy=L(ie.onDestroy,H)}(H,S),function k(S){S.prototype[J]=!0}(H)}}function b(S,H){return ie=>{const ue=N(H);return"string"==typeof H?function g(S,H,ie){const ue=S[H];Y(S,ie),S[H]=function(){ue.apply(this,arguments),U(this,ie),S[H]=ue}}(S,H,ue):Y(S,ue),ie.pipe((0,y.R)(S[ue]))}}Symbol("CheckerHasBeenSet")},9552:(de,W,o)=>{o.d(W,{$:()=>F,j:()=>E});var t=o(655),e=o(9808),i=o(5e3),s=o(2654),z=o(839),v=o(8929),a=o(6787),Q=o(3753),c=o(7625),y=o(4850),_=o(3164),D=o(9439),T=o(1721),J=o(4090),N=o(925),k=o(5577),Y=o(226);const U=["fixedEl"],Z=["*"];var I=(()=>{return(V=I||(I={})).resize="resize",V.scroll="scroll",V.touchstart="touchstart",V.touchmove="touchmove",V.touchend="touchend",V.pageshow="pageshow",V.load="LOAD",I;var V})();function X(V){return function L(V){return"undefined"!=typeof window&&V===window}(V)?{top:0,left:0,bottom:0}:V.getBoundingClientRect()}const x="ant-affix";let F=(()=>{class V{constructor(g,b,G,S,H,ie,ue,he,ze,Se){this.nzConfigService=G,this.scrollSrv=S,this.ngZone=H,this.platform=ie,this.renderer=ue,this.nzResizeObserver=he,this.cdr=ze,this.directionality=Se,this._nzModuleName="affix",this.nzChange=new i.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new z.t(1),this.destroy$=new v.xQ,this.placeholderNode=g.nativeElement,this.document=b}get target(){const g=this.nzTarget;return("string"==typeof g?this.document.querySelector(g):g)||window}ngOnInit(){var g;null===(g=this.directionality.change)||void 0===g||g.pipe((0,c.R)(this.destroy$)).subscribe(b=>{this.dir=b,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(g){const{nzOffsetBottom:b,nzOffsetTop:G,nzTarget:S}=g;(b||G)&&this.offsetChanged$.next(),S&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const g=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(I).map(b=>(0,Q.R)(this.target,b)),this.offsetChanged$.pipe((0,y.U)(()=>({}))),this.nzResizeObserver.observe(g)).pipe((0,_.p)(20,void 0,{trailing:!0}),(0,c.R)(this.destroy$)).subscribe(b=>this.updatePosition(b))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(g,b){const G=g.getBoundingClientRect(),S=X(b),H=this.scrollSrv.getScroll(b,!0),ie=this.scrollSrv.getScroll(b,!1),ue=this.document.body;return{top:G.top-S.top+H-(ue.clientTop||0),left:G.left-S.left+ie-(ue.clientLeft||0),width:G.width,height:G.height}}setAffixStyle(g,b){const G=this.affixStyle,S=this.target===window;if("scroll"===g.type&&G&&b&&S||(0,T.wU)(G,b))return;const H=!!b,ie=this.fixedEl.nativeElement;this.renderer.setStyle(ie,"cssText",(0,T.GM)(b)),this.affixStyle=b,H?ie.classList.add(x):ie.classList.remove(x),this.updateRtlClass(),(b&&!G||!b&&G)&&this.nzChange.emit(H)}setPlaceholderStyle(g){(0,T.wU)(g,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,T.GM)(g)),this.placeholderStyle=g)}syncPlaceholderStyle(g){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const b={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),b)),this.setPlaceholderStyle(b)}updatePosition(g){if(!this.platform.isBrowser)return;const b=this.target;let G=this.nzOffsetTop;const S=this.scrollSrv.getScroll(b,!0),H=this.getOffset(this.placeholderNode,b),ie=this.fixedEl.nativeElement,ue={width:ie.offsetWidth,height:ie.offsetHeight},he={top:!1,bottom:!1};"number"!=typeof G&&"number"!=typeof this.nzOffsetBottom?(he.top=!0,G=0):(he.top="number"==typeof G,he.bottom="number"==typeof this.nzOffsetBottom);const ze=X(b),Se=b.innerHeight||b.clientHeight;if(S>=H.top-G&&he.top){const ne=H.width;this.setAffixStyle(g,{position:"fixed",top:ze.top+G,left:ze.left+H.left,width:ne}),this.setPlaceholderStyle({width:ne,height:ue.height})}else if(S<=H.top+ue.height+this.nzOffsetBottom-Se&&he.bottom){const ne=b===window?0:window.innerHeight-ze.bottom,pe=H.width;this.setAffixStyle(g,{position:"fixed",bottom:ne+this.nzOffsetBottom,left:ze.left+H.left,width:pe}),this.setPlaceholderStyle({width:pe,height:H.height})}else g.type===I.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(g),this.setPlaceholderStyle();"resize"===g.type&&this.syncPlaceholderStyle(g)}updateRtlClass(){const g=this.fixedEl.nativeElement;"rtl"===this.dir&&g.classList.contains(x)?g.classList.add(`${x}-rtl`):g.classList.remove(`${x}-rtl`)}}return V.\u0275fac=function(g){return new(g||V)(i.Y36(i.SBq),i.Y36(e.K0),i.Y36(D.jY),i.Y36(J.MF),i.Y36(i.R0b),i.Y36(N.t4),i.Y36(i.Qsj),i.Y36(k.D3),i.Y36(i.sBO),i.Y36(Y.Is,8))},V.\u0275cmp=i.Xpm({type:V,selectors:[["nz-affix"]],viewQuery:function(g,b){if(1&g&&i.Gf(U,7),2&g){let G;i.iGM(G=i.CRH())&&(b.fixedEl=G.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[i.TTD],ngContentSelectors:Z,decls:3,vars:0,consts:[["fixedEl",""]],template:function(g,b){1&g&&(i.F$t(),i.TgZ(0,"div",null,0),i.Hsn(2),i.qZA())},encapsulation:2,changeDetection:0}),(0,t.gn)([(0,D.oS)(),(0,T.Rn)(void 0)],V.prototype,"nzOffsetTop",void 0),(0,t.gn)([(0,D.oS)(),(0,T.Rn)(void 0)],V.prototype,"nzOffsetBottom",void 0),V})(),E=(()=>{class V{}return V.\u0275fac=function(g){return new(g||V)},V.\u0275mod=i.oAB({type:V}),V.\u0275inj=i.cJS({imports:[[Y.vT,e.ez,N.ud]]}),V})()},6699:(de,W,o)=>{o.d(W,{Dz:()=>N,Rt:()=>Y});var t=o(655),e=o(5e3),i=o(9439),s=o(1721),z=o(925),v=o(9808),a=o(5017),Q=o(226);const c=["textEl"];function y(U,Z){if(1&U&&e._UZ(0,"i",3),2&U){const I=e.oxw();e.Q6J("nzType",I.nzIcon)}}function _(U,Z){if(1&U){const I=e.EpF();e.TgZ(0,"img",4),e.NdJ("error",function(X){return e.CHM(I),e.oxw().imgError(X)}),e.qZA()}if(2&U){const I=e.oxw();e.Q6J("src",I.nzSrc,e.LSH),e.uIk("srcset",I.nzSrcSet,e.LSH)("alt",I.nzAlt)}}function D(U,Z){if(1&U&&(e.TgZ(0,"span",5,6),e._uU(2),e.qZA()),2&U){const I=e.oxw();e.Q6J("ngStyle",I.textStyles),e.xp6(2),e.Oqu(I.nzText)}}let N=(()=>{class U{constructor(I,L,X,R){this.nzConfigService=I,this.elementRef=L,this.cdr=X,this.platform=R,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new e.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,L=this.el.getBoundingClientRect().width,X=2*this.nzGap<L?2*this.nzGap:8;this.textStyles={transform:`scale(${L-X<I?(L-X)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return U.\u0275fac=function(I){return new(I||U)(e.Y36(i.jY),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(z.t4))},U.\u0275cmp=e.Xpm({type:U,selectors:[["nz-avatar"]],viewQuery:function(I,L){if(1&I&&e.Gf(c,5),2&I){let X;e.iGM(X=e.CRH())&&(L.textEl=X.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,L){2&I&&(e.Udp("width",L.customSize)("height",L.customSize)("line-height",L.customSize)("font-size",L.hasIcon&&L.customSize?L.nzSize/2:null,"px"),e.ekj("ant-avatar-lg","large"===L.nzSize)("ant-avatar-sm","small"===L.nzSize)("ant-avatar-square","square"===L.nzShape)("ant-avatar-circle","circle"===L.nzShape)("ant-avatar-icon",L.nzIcon)("ant-avatar-image",L.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[e.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,L){1&I&&(e.YNc(0,y,1,1,"i",0),e.YNc(1,_,1,3,"img",1),e.YNc(2,D,3,2,"span",2)),2&I&&(e.Q6J("ngIf",L.nzIcon&&L.hasIcon),e.xp6(1),e.Q6J("ngIf",L.nzSrc&&L.hasSrc),e.xp6(1),e.Q6J("ngIf",L.nzText&&L.hasText))},directives:[v.O5,a.Ls,v.PC],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,i.oS)()],U.prototype,"nzShape",void 0),(0,t.gn)([(0,i.oS)()],U.prototype,"nzSize",void 0),(0,t.gn)([(0,i.oS)(),(0,s.Rn)()],U.prototype,"nzGap",void 0),U})(),Y=(()=>{class U{}return U.\u0275fac=function(I){return new(I||U)},U.\u0275mod=e.oAB({type:U}),U.\u0275inj=e.cJS({imports:[[Q.vT,v.ez,a.PV,z.ud]]}),U})()},4401:(de,W,o)=>{o.d(W,{F9:()=>V,mS:()=>$,x7:()=>E});var t=o(655),e=o(5e3),i=o(8929),s=o(7625),z=o(8076),v=o(9439),a=o(1721),Q=o(226),c=o(4832),y=o(9808),_=o(969),D=o(7144);function T(g,b){if(1&g&&(e.TgZ(0,"p",6),e._uU(1),e.qZA()),2&g){const G=b.$implicit,S=e.oxw(2).index,H=e.oxw(2);e.ekj("current",G===H.countArray[S]),e.xp6(1),e.hij(" ",G," ")}}function J(g,b){if(1&g&&(e.ynx(0),e.YNc(1,T,2,3,"p",5),e.BQk()),2&g){const G=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",G.countSingleArray)}}function N(g,b){if(1&g&&(e.TgZ(0,"span",3),e.YNc(1,J,2,1,"ng-container",4),e.qZA()),2&g){const G=b.index,S=e.oxw(2);e.Udp("transform","translateY("+100*-S.countArray[G]+"%)"),e.Q6J("nzNoAnimation",S.noAnimation),e.xp6(1),e.Q6J("ngIf",!S.nzDot&&void 0!==S.countArray[G])}}function k(g,b){if(1&g&&(e.ynx(0),e.YNc(1,N,2,4,"span",2),e.BQk()),2&g){const G=e.oxw();e.xp6(1),e.Q6J("ngForOf",G.maxNumberArray)}}function Y(g,b){if(1&g&&e._uU(0),2&g){const G=e.oxw();e.hij("",G.nzOverflowCount,"+")}}function U(g,b){if(1&g&&(e.ynx(0),e._uU(1),e.BQk()),2&g){const G=e.oxw(2);e.xp6(1),e.Oqu(G.nzText)}}function Z(g,b){if(1&g&&(e.ynx(0),e._UZ(1,"span",2),e.TgZ(2,"span",3),e.YNc(3,U,2,1,"ng-container",1),e.qZA(),e.BQk()),2&g){const G=e.oxw();e.xp6(1),e.Gre("ant-badge-status-dot ant-badge-status-",G.nzStatus||G.presetColor,""),e.Udp("background",!G.presetColor&&G.nzColor),e.Q6J("ngStyle",G.nzStyle),e.xp6(2),e.Q6J("nzStringTemplateOutlet",G.nzText)}}function I(g,b){if(1&g&&e._UZ(0,"nz-badge-sup",5),2&g){const G=e.oxw(2);e.Q6J("nzOffset",G.nzOffset)("nzTitle",G.nzTitle)("nzStyle",G.nzStyle)("nzDot",G.nzDot)("nzOverflowCount",G.nzOverflowCount)("disableAnimation",!!(G.nzStandalone||G.nzStatus||G.nzColor||null!=G.noAnimation&&G.noAnimation.nzNoAnimation))("nzCount",G.nzCount)("noAnimation",!(null==G.noAnimation||!G.noAnimation.nzNoAnimation))}}function L(g,b){if(1&g&&(e.ynx(0),e.YNc(1,I,1,8,"nz-badge-sup",4),e.BQk()),2&g){const G=e.oxw();e.xp6(1),e.Q6J("ngIf",G.showSup)}}const X=["*"];function R(g,b){if(1&g&&(e.ynx(0),e._uU(1),e.BQk()),2&g){const G=e.oxw();e.xp6(1),e.Oqu(G.nzText)}}const x=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let l=(()=>{class g{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(G){const{nzOverflowCount:S,nzCount:H}=G;H&&"number"==typeof H.currentValue&&(this.count=Math.max(0,H.currentValue),this.countArray=this.count.toString().split("").map(ie=>+ie)),S&&this.generateMaxNumberArray()}}return g.\u0275fac=function(G){return new(G||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(G,S){2&G&&(e.uIk("title",null===S.nzTitle?"":S.nzTitle||S.nzCount),e.d8E("@.disabled",S.disableAnimation)("@zoomBadgeMotion",void 0),e.Akn(S.nzStyle),e.Udp("right",S.nzOffset&&S.nzOffset[0]?-S.nzOffset[0]:null,"px")("margin-top",S.nzOffset&&S.nzOffset[1]?S.nzOffset[1]:null,"px"),e.ekj("ant-badge-count",!S.nzDot)("ant-badge-dot",S.nzDot)("ant-badge-multiple-words",S.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[e.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(G,S){if(1&G&&(e.YNc(0,k,2,1,"ng-container",0),e.YNc(1,Y,1,1,"ng-template",null,1,e.W1O)),2&G){const H=e.MAs(2);e.Q6J("ngIf",S.count<=S.nzOverflowCount)("ngIfElse",H)}},directives:[y.O5,y.sg,c.P],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),g})(),E=(()=>{class g{constructor(G,S,H,ie,ue,he){this.nzConfigService=G,this.renderer=S,this.cdr=H,this.elementRef=ie,this.directionality=ue,this.noAnimation=he,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new i.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(G){const{nzColor:S,nzShowDot:H,nzDot:ie,nzCount:ue,nzShowZero:he}=G;S&&(this.presetColor=this.nzColor&&-1!==x.indexOf(this.nzColor)?this.nzColor:null),(H||ie||ue||he)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(G){return new(G||g)(e.Y36(v.jY),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(Q.Is,8),e.Y36(c.P,9))},g.\u0275cmp=e.Xpm({type:g,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(G,S){2&G&&e.ekj("ant-badge-status",S.nzStatus)("ant-badge-not-a-wrapper",!!(S.nzStandalone||S.nzStatus||S.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[e.TTD],ngContentSelectors:X,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(G,S){1&G&&(e.F$t(),e.YNc(0,Z,4,7,"ng-container",0),e.Hsn(1),e.YNc(2,L,2,1,"ng-container",1)),2&G&&(e.Q6J("ngIf",S.nzStatus||S.nzColor),e.xp6(2),e.Q6J("nzStringTemplateOutlet",S.nzCount))},directives:[l,y.O5,y.PC,_.f],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),(0,t.gn)([(0,a.yF)()],g.prototype,"nzShowZero",void 0),(0,t.gn)([(0,a.yF)()],g.prototype,"nzShowDot",void 0),(0,t.gn)([(0,a.yF)()],g.prototype,"nzStandalone",void 0),(0,t.gn)([(0,a.yF)()],g.prototype,"nzDot",void 0),(0,t.gn)([(0,v.oS)()],g.prototype,"nzOverflowCount",void 0),(0,t.gn)([(0,v.oS)()],g.prototype,"nzColor",void 0),g})(),V=(()=>{class g{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(G){const{nzColor:S}=G;S&&(this.presetColor=this.nzColor&&-1!==x.indexOf(this.nzColor)?this.nzColor:null)}}return g.\u0275fac=function(G){return new(G||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[e.TTD],ngContentSelectors:X,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(G,S){1&G&&(e.F$t(),e.Hsn(0),e.TgZ(1,"div",0),e.YNc(2,R,2,1,"ng-container",1),e._UZ(3,"div",2),e.qZA()),2&G&&(e.xp6(1),e.Tol(S.presetColor&&"ant-ribbon-color-"+S.presetColor),e.Udp("background-color",!S.presetColor&&S.nzColor),e.ekj("ant-ribbon-placement-end","end"===S.nzPlacement)("ant-ribbon-placement-start","start"===S.nzPlacement),e.xp6(1),e.Q6J("nzStringTemplateOutlet",S.nzText),e.xp6(1),e.Udp("color",!S.presetColor&&S.nzColor))},directives:[_.f],encapsulation:2,changeDetection:0}),g})(),$=(()=>{class g{}return g.\u0275fac=function(G){return new(G||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[[Q.vT,y.ez,D.Q8,_.T,c.g]]}),g})()},7484:(de,W,o)=>{o.d(W,{_i:()=>ue,bd:()=>Se,vh:()=>pe});var t=o(655),e=o(5e3),i=o(1721),s=o(8929),z=o(7625),v=o(9439),a=o(226),Q=o(9808),c=o(969);function y(A,te){1&A&&e.Hsn(0)}const _=["*"];function D(A,te){1&A&&(e.TgZ(0,"div",4),e._UZ(1,"div",5),e.qZA()),2&A&&e.Q6J("ngClass",te.$implicit)}function T(A,te){if(1&A&&(e.TgZ(0,"div",2),e.YNc(1,D,2,1,"div",3),e.qZA()),2&A){const B=te.$implicit;e.xp6(1),e.Q6J("ngForOf",B)}}function J(A,te){if(1&A&&(e.ynx(0),e._uU(1),e.BQk()),2&A){const B=e.oxw(3);e.xp6(1),e.Oqu(B.nzTitle)}}function N(A,te){if(1&A&&(e.TgZ(0,"div",11),e.YNc(1,J,2,1,"ng-container",12),e.qZA()),2&A){const B=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",B.nzTitle)}}function k(A,te){if(1&A&&(e.ynx(0),e._uU(1),e.BQk()),2&A){const B=e.oxw(3);e.xp6(1),e.Oqu(B.nzExtra)}}function Y(A,te){if(1&A&&(e.TgZ(0,"div",13),e.YNc(1,k,2,1,"ng-container",12),e.qZA()),2&A){const B=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",B.nzExtra)}}function U(A,te){}function Z(A,te){if(1&A&&(e.ynx(0),e.YNc(1,U,0,0,"ng-template",14),e.BQk()),2&A){const B=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",B.listOfNzCardTabComponent.template)}}function I(A,te){if(1&A&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,N,2,1,"div",8),e.YNc(3,Y,2,1,"div",9),e.qZA(),e.YNc(4,Z,2,1,"ng-container",10),e.qZA()),2&A){const B=e.oxw();e.xp6(2),e.Q6J("ngIf",B.nzTitle),e.xp6(1),e.Q6J("ngIf",B.nzExtra),e.xp6(1),e.Q6J("ngIf",B.listOfNzCardTabComponent)}}function L(A,te){}function X(A,te){if(1&A&&(e.TgZ(0,"div",15),e.YNc(1,L,0,0,"ng-template",14),e.qZA()),2&A){const B=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",B.nzCover)}}function R(A,te){1&A&&(e.ynx(0),e.Hsn(1),e.BQk())}function x(A,te){1&A&&e._UZ(0,"nz-card-loading")}function l(A,te){}function F(A,te){if(1&A&&(e.TgZ(0,"li")(1,"span"),e.YNc(2,l,0,0,"ng-template",14),e.qZA()()),2&A){const B=te.$implicit,se=e.oxw(2);e.Udp("width",100/se.nzActions.length,"%"),e.xp6(2),e.Q6J("ngTemplateOutlet",B)}}function E(A,te){if(1&A&&(e.TgZ(0,"ul",16),e.YNc(1,F,3,3,"li",17),e.qZA()),2&A){const B=e.oxw();e.xp6(1),e.Q6J("ngForOf",B.nzActions)}}let ie=(()=>{class A{constructor(){this.nzHoverable=!0}}return A.\u0275fac=function(B){return new(B||A)},A.\u0275dir=e.lG2({type:A,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(B,se){2&B&&e.ekj("ant-card-hoverable",se.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,t.gn)([(0,i.yF)()],A.prototype,"nzHoverable",void 0),A})(),ue=(()=>{class A{}return A.\u0275fac=function(B){return new(B||A)},A.\u0275cmp=e.Xpm({type:A,selectors:[["nz-card-tab"]],viewQuery:function(B,se){if(1&B&&e.Gf(e.Rgc,7),2&B){let ee;e.iGM(ee=e.CRH())&&(se.template=ee.first)}},exportAs:["nzCardTab"],ngContentSelectors:_,decls:1,vars:0,template:function(B,se){1&B&&(e.F$t(),e.YNc(0,y,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),A})(),he=(()=>{class A{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return A.\u0275fac=function(B){return new(B||A)},A.\u0275cmp=e.Xpm({type:A,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(B,se){1&B&&(e.TgZ(0,"div",0),e.YNc(1,T,2,1,"div",1),e.qZA()),2&B&&(e.xp6(1),e.Q6J("ngForOf",se.listOfLoading))},directives:[Q.sg,Q.mk],encapsulation:2,changeDetection:0}),A})(),Se=(()=>{class A{constructor(B,se,ee){this.nzConfigService=B,this.cdr=se,this.directionality=ee,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var B;null===(B=this.directionality.change)||void 0===B||B.pipe((0,z.R)(this.destroy$)).subscribe(se=>{this.dir=se,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return A.\u0275fac=function(B){return new(B||A)(e.Y36(v.jY),e.Y36(e.sBO),e.Y36(a.Is,8))},A.\u0275cmp=e.Xpm({type:A,selectors:[["nz-card"]],contentQueries:function(B,se,ee){if(1&B&&(e.Suo(ee,ue,5),e.Suo(ee,ie,4)),2&B){let ge;e.iGM(ge=e.CRH())&&(se.listOfNzCardTabComponent=ge.first),e.iGM(ge=e.CRH())&&(se.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(B,se){2&B&&e.ekj("ant-card-loading",se.nzLoading)("ant-card-bordered",!1===se.nzBorderless&&se.nzBordered)("ant-card-hoverable",se.nzHoverable)("ant-card-small","small"===se.nzSize)("ant-card-contain-grid",se.listOfNzCardGridDirective&&se.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===se.nzType)("ant-card-contain-tabs",!!se.listOfNzCardTabComponent)("ant-card-rtl","rtl"===se.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:_,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(B,se){if(1&B&&(e.F$t(),e.YNc(0,I,5,3,"div",0),e.YNc(1,X,2,1,"div",1),e.TgZ(2,"div",2),e.YNc(3,R,2,0,"ng-container",3),e.YNc(4,x,1,0,"ng-template",null,4,e.W1O),e.qZA(),e.YNc(6,E,2,1,"ul",5)),2&B){const ee=e.MAs(5);e.Q6J("ngIf",se.nzTitle||se.nzExtra||se.listOfNzCardTabComponent),e.xp6(1),e.Q6J("ngIf",se.nzCover),e.xp6(1),e.Q6J("ngStyle",se.nzBodyStyle),e.xp6(1),e.Q6J("ngIf",!se.nzLoading)("ngIfElse",ee),e.xp6(3),e.Q6J("ngIf",se.nzActions.length)}},directives:[he,Q.O5,c.f,Q.tP,Q.PC,Q.sg],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],A.prototype,"nzBordered",void 0),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],A.prototype,"nzBorderless",void 0),(0,t.gn)([(0,i.yF)()],A.prototype,"nzLoading",void 0),(0,t.gn)([(0,v.oS)(),(0,i.yF)()],A.prototype,"nzHoverable",void 0),(0,t.gn)([(0,v.oS)()],A.prototype,"nzSize",void 0),A})(),pe=(()=>{class A{}return A.\u0275fac=function(B){return new(B||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[[Q.ez,c.T],a.vT]}),A})()},5577:(de,W,o)=>{o.d(W,{D3:()=>v,y7:()=>Q});var t=o(5e3),e=o(3191),i=o(2916),s=o(8929);let z=(()=>{class c{create(_){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(_)}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),v=(()=>{class c{constructor(_){this.nzResizeObserverFactory=_,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((_,D)=>this.cleanupObserver(D))}observe(_){const D=(0,e.fI)(_);return new i.y(T=>{const N=this.observeElement(D).subscribe(T);return()=>{N.unsubscribe(),this.unobserveElement(D)}})}observeElement(_){if(this.observedElements.has(_))this.observedElements.get(_).count++;else{const D=new s.xQ,T=this.nzResizeObserverFactory.create(J=>D.next(J));T&&T.observe(_),this.observedElements.set(_,{observer:T,stream:D,count:1})}return this.observedElements.get(_).stream}unobserveElement(_){this.observedElements.has(_)&&(this.observedElements.get(_).count--,this.observedElements.get(_).count||this.cleanupObserver(_))}cleanupObserver(_){if(this.observedElements.has(_)){const{observer:D,stream:T}=this.observedElements.get(_);D&&D.disconnect(),T.complete(),this.observedElements.delete(_)}}}return c.\u0275fac=function(_){return new(_||c)(t.LFG(z))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),Q=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({providers:[z]}),c})()},5482:(de,W,o)=>{o.d(W,{Zv:()=>l,cD:()=>F,yH:()=>R});var t=o(655),e=o(5e3),i=o(3753),s=o(7625),z=o(2198),v=o(8076),a=o(9439),Q=o(4090),c=o(1721),y=o(226),_=o(4832),D=o(9808),T=o(969),J=o(5017);const N=["*"],k=["collapseHeader"];function Y(E,V){if(1&E&&(e.ynx(0),e._UZ(1,"i",7),e.BQk()),2&E){const $=V.$implicit,g=e.oxw(2);e.xp6(1),e.Q6J("nzType",$||"right")("nzRotate",g.nzActive?90:0)}}function U(E,V){if(1&E&&(e.TgZ(0,"div"),e.YNc(1,Y,2,2,"ng-container",3),e.qZA()),2&E){const $=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",$.nzExpandedIcon)}}function Z(E,V){if(1&E&&(e.ynx(0),e._uU(1),e.BQk()),2&E){const $=e.oxw();e.xp6(1),e.Oqu($.nzHeader)}}function I(E,V){if(1&E&&(e.ynx(0),e._uU(1),e.BQk()),2&E){const $=e.oxw(2);e.xp6(1),e.Oqu($.nzExtra)}}function L(E,V){if(1&E&&(e.TgZ(0,"div",8),e.YNc(1,I,2,1,"ng-container",3),e.qZA()),2&E){const $=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",$.nzExtra)}}const X="collapse";let R=(()=>{class E{constructor($,g,b,G){this.nzConfigService=$,this.cdr=g,this.directionality=b,this.destroy$=G,this._nzModuleName=X,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(X).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var $;null===($=this.directionality.change)||void 0===$||$.pipe((0,s.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel($){this.listOfNzCollapsePanelComponent.push($)}removePanel($){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf($),1)}click($){this.nzAccordion&&!$.nzActive&&this.listOfNzCollapsePanelComponent.filter(g=>g!==$).forEach(g=>{g.nzActive&&(g.nzActive=!1,g.nzActiveChange.emit(g.nzActive),g.markForCheck())}),$.nzActive=!$.nzActive,$.nzActiveChange.emit($.nzActive)}}return E.\u0275fac=function($){return new($||E)(e.Y36(a.jY),e.Y36(e.sBO),e.Y36(y.Is,8),e.Y36(Q.kn))},E.\u0275cmp=e.Xpm({type:E,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function($,g){2&$&&e.ekj("ant-collapse-icon-position-left","left"===g.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===g.nzExpandIconPosition)("ant-collapse-ghost",g.nzGhost)("ant-collapse-borderless",!g.nzBordered)("ant-collapse-rtl","rtl"===g.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[e._Bn([Q.kn])],ngContentSelectors:N,decls:1,vars:0,template:function($,g){1&$&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],E.prototype,"nzAccordion",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],E.prototype,"nzBordered",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],E.prototype,"nzGhost",void 0),E})();const x="collapsePanel";let l=(()=>{class E{constructor($,g,b,G,S,H){this.nzConfigService=$,this.ngZone=g,this.cdr=b,this.destroy$=G,this.nzCollapseComponent=S,this.noAnimation=H,this._nzModuleName=x,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new e.vpe,this.nzConfigService.getConfigChangeEventForComponent(x).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,i.R)(this.collapseHeader.nativeElement,"click").pipe((0,z.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return E.\u0275fac=function($){return new($||E)(e.Y36(a.jY),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(Q.kn),e.Y36(R,1),e.Y36(_.P,8))},E.\u0275cmp=e.Xpm({type:E,selectors:[["nz-collapse-panel"]],viewQuery:function($,g){if(1&$&&e.Gf(k,7),2&$){let b;e.iGM(b=e.CRH())&&(g.collapseHeader=b.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function($,g){2&$&&e.ekj("ant-collapse-no-arrow",!g.nzShowArrow)("ant-collapse-item-active",g.nzActive)("ant-collapse-item-disabled",g.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[e._Bn([Q.kn])],ngContentSelectors:N,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function($,g){1&$&&(e.F$t(),e.TgZ(0,"div",0,1),e.YNc(2,U,2,1,"div",2),e.YNc(3,Z,2,1,"ng-container",3),e.YNc(4,L,2,1,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e.Hsn(7),e.qZA()()),2&$&&(e.uIk("aria-expanded",g.nzActive),e.xp6(2),e.Q6J("ngIf",g.nzShowArrow),e.xp6(1),e.Q6J("nzStringTemplateOutlet",g.nzHeader),e.xp6(1),e.Q6J("ngIf",g.nzExtra),e.xp6(1),e.ekj("ant-collapse-content-active",g.nzActive),e.Q6J("@.disabled",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("@collapseMotion",g.nzActive?"expanded":"hidden"))},directives:[D.O5,T.f,J.Ls],encapsulation:2,data:{animation:[v.J_]},changeDetection:0}),(0,t.gn)([(0,c.yF)()],E.prototype,"nzActive",void 0),(0,t.gn)([(0,c.yF)()],E.prototype,"nzDisabled",void 0),(0,t.gn)([(0,a.oS)(),(0,c.yF)()],E.prototype,"nzShowArrow",void 0),E})(),F=(()=>{class E{}return E.\u0275fac=function($){return new($||E)},E.\u0275mod=e.oAB({type:E}),E.\u0275inj=e.cJS({imports:[[y.vT,D.ez,J.PV,T.T,_.g]]}),E})()},3098:(de,W,o)=>{o.d(W,{R7:()=>De,q6:()=>Ae,uj:()=>_e});var t=o(226),e=o(925),i=o(9808),s=o(5e3),z=o(969),v=o(655),a=o(8929),Q=o(6787),c=o(1721),y=o(7625),_=o(1059),D=o(7545),T=o(7138),J=o(2994),N=o(9439),k=o(948),Y=o(4090);function U(C,q){1&C&&s.Hsn(0)}const Z=["*"];function I(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw(3);s.xp6(1),s.Oqu(O.nzTitle)}}function L(C,q){if(1&C&&(s.TgZ(0,"div",6),s.YNc(1,I,2,1,"ng-container",7),s.qZA()),2&C){const O=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.nzTitle)}}function X(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw(3);s.xp6(1),s.Oqu(O.nzExtra)}}function R(C,q){if(1&C&&(s.TgZ(0,"div",8),s.YNc(1,X,2,1,"ng-container",7),s.qZA()),2&C){const O=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.nzExtra)}}function x(C,q){if(1&C&&(s.TgZ(0,"div",3),s.YNc(1,L,2,1,"div",4),s.YNc(2,R,2,1,"div",5),s.qZA()),2&C){const O=s.oxw();s.xp6(1),s.Q6J("ngIf",O.nzTitle),s.xp6(1),s.Q6J("ngIf",O.nzExtra)}}function l(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",O.title," ")}}function F(C,q){}function E(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,l,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,F,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const O=s.oxw().$implicit,ce=s.oxw(3);s.xp6(1),s.Q6J("colSpan",O.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.title),s.xp6(2),s.Q6J("ngTemplateOutlet",O.content)}}function V(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",O.title," ")}}function $(C,q){if(1&C&&(s.TgZ(0,"td",14),s.YNc(1,V,2,1,"ng-container",7),s.qZA()),2&C){const O=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.title)}}function g(C,q){}function b(C,q){if(1&C&&(s.ynx(0),s.YNc(1,$,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,g,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const O=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.title),s.xp6(1),s.Q6J("colSpan",2*O.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",O.content)}}function G(C,q){if(1&C&&(s.ynx(0),s.YNc(1,E,7,5,"ng-container",2),s.YNc(2,b,4,3,"ng-container",2),s.BQk()),2&C){const O=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!O.nzBordered),s.xp6(1),s.Q6J("ngIf",O.nzBordered)}}function S(C,q){if(1&C&&(s.TgZ(0,"tr",10),s.YNc(1,G,3,2,"ng-container",11),s.qZA()),2&C){const O=q.$implicit;s.xp6(1),s.Q6J("ngForOf",O)}}function H(C,q){if(1&C&&(s.ynx(0),s.YNc(1,S,2,1,"tr",9),s.BQk()),2&C){const O=s.oxw();s.xp6(1),s.Q6J("ngForOf",O.itemMatrix)}}function ie(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw().$implicit;s.xp6(1),s.hij(" ",O.title," ")}}function ue(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ie,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&C){const O=q.$implicit,ce=s.oxw(4);s.xp6(1),s.Q6J("colSpan",O.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.title)}}function he(C,q){}function ze(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,he,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const O=q.$implicit;s.xp6(1),s.Q6J("colSpan",O.span),s.xp6(3),s.Q6J("ngTemplateOutlet",O.content)}}function Se(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,ue,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,ze,5,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const O=q.$implicit;s.xp6(2),s.Q6J("ngForOf",O),s.xp6(2),s.Q6J("ngForOf",O)}}function ne(C,q){if(1&C&&(s.ynx(0),s.YNc(1,Se,5,2,"ng-container",11),s.BQk()),2&C){const O=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",O.itemMatrix)}}function pe(C,q){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const O=s.oxw().$implicit;s.xp6(1),s.hij(" ",O.title," ")}}function A(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,pe,2,1,"ng-container",7),s.qZA(),s.BQk()),2&C){const O=q.$implicit;s.xp6(1),s.Q6J("colSpan",O.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",O.title)}}function te(C,q){}function B(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,te,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const O=q.$implicit;s.xp6(1),s.Q6J("colSpan",O.span),s.xp6(1),s.Q6J("ngTemplateOutlet",O.content)}}function se(C,q){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,A,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,B,3,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const O=q.$implicit;s.xp6(2),s.Q6J("ngForOf",O),s.xp6(2),s.Q6J("ngForOf",O)}}function ee(C,q){if(1&C&&(s.ynx(0),s.YNc(1,se,5,2,"ng-container",11),s.BQk()),2&C){const O=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",O.itemMatrix)}}function ge(C,q){if(1&C&&(s.ynx(0),s.YNc(1,ne,2,1,"ng-container",2),s.YNc(2,ee,2,1,"ng-container",2),s.BQk()),2&C){const O=s.oxw();s.xp6(1),s.Q6J("ngIf",!O.nzBordered),s.xp6(1),s.Q6J("ngIf",O.nzBordered)}}let _e=(()=>{class C{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return C.\u0275fac=function(O){return new(O||C)},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions-item"]],viewQuery:function(O,ce){if(1&O&&s.Gf(s.Rgc,7),2&O){let Ce;s.iGM(Ce=s.CRH())&&(ce.content=Ce.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Z,decls:1,vars:0,template:function(O,ce){1&O&&(s.F$t(),s.YNc(0,U,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,v.gn)([(0,c.Rn)()],C.prototype,"nzSpan",void 0),C})();const Oe={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let De=(()=>{class C{constructor(O,ce,Ce,ye){this.nzConfigService=O,this.cdr=ce,this.breakpointService=Ce,this.directionality=ye,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Oe,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Y.G_.md,this.destroy$=new a.xQ}ngOnInit(){var O;this.dir=this.directionality.value,null===(O=this.directionality.change)||void 0===O||O.pipe((0,y.R)(this.destroy$)).subscribe(ce=>{this.dir=ce})}ngOnChanges(O){O.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const O=this.items.changes.pipe((0,_.O)(this.items),(0,y.R)(this.destroy$));(0,Q.T)(O,O.pipe((0,D.w)(()=>(0,Q.T)(...this.items.map(ce=>ce.inputChange$)).pipe((0,T.e)(16)))),this.breakpointService.subscribe(Y.WV).pipe((0,J.b)(ce=>this.breakpoint=ce))).pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let O=[],ce=0;const Ce=this.realColumn=this.getColumn(),ye=this.items.toArray(),Re=ye.length,Qe=[],be=()=>{Qe.push(O),O=[],ce=0};for(let Pe=0;Pe<Re;Pe++){const Ue=ye[Pe],{nzTitle:Ge,content:Fe,nzSpan:$e}=Ue;ce+=$e,ce>=Ce?(ce>Ce&&(0,k.ZK)(`"nzColumn" is ${Ce} but we have row length ${ce}`),O.push({title:Ge,content:Fe,span:Ce-(ce-$e)}),be()):Pe===Re-1?(O.push({title:Ge,content:Fe,span:Ce-(ce-$e)}),be()):O.push({title:Ge,content:Fe,span:$e})}this.itemMatrix=Qe}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return C.\u0275fac=function(O){return new(O||C)(s.Y36(N.jY),s.Y36(s.sBO),s.Y36(Y.r3),s.Y36(t.Is,8))},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions"]],contentQueries:function(O,ce,Ce){if(1&O&&s.Suo(Ce,_e,4),2&O){let ye;s.iGM(ye=s.CRH())&&(ce.items=ye)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(O,ce){2&O&&s.ekj("ant-descriptions-bordered",ce.nzBordered)("ant-descriptions-middle","middle"===ce.nzSize)("ant-descriptions-small","small"===ce.nzSize)("ant-descriptions-rtl","rtl"===ce.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(O,ce){1&O&&(s.YNc(0,x,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,H,2,1,"ng-container",2),s.YNc(5,ge,3,2,"ng-container",2),s.qZA()()()),2&O&&(s.Q6J("ngIf",ce.nzTitle||ce.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ce.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ce.nzLayout))},directives:[i.O5,z.f,i.sg,i.tP],encapsulation:2,changeDetection:0}),(0,v.gn)([(0,c.yF)(),(0,N.oS)()],C.prototype,"nzBordered",void 0),(0,v.gn)([(0,N.oS)()],C.prototype,"nzColumn",void 0),(0,v.gn)([(0,N.oS)()],C.prototype,"nzSize",void 0),(0,v.gn)([(0,N.oS)(),(0,c.yF)()],C.prototype,"nzColon",void 0),C})(),Ae=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=s.oAB({type:C}),C.\u0275inj=s.cJS({imports:[[t.vT,i.ez,z.T,e.ud]]}),C})()},3677:(de,W,o)=>{o.d(W,{RR:()=>ne,b1:()=>pe,cm:()=>ue,wA:()=>Se});var t=o(655),e=o(1159),i=o(7429),s=o(5e3),z=o(8929),v=o(591),a=o(6787),Q=o(3753),c=o(8896),y=o(6053),_=o(7604),D=o(4850),T=o(7545),J=o(2198),N=o(7138),k=o(5778),Y=o(7625),U=o(9439),Z=o(6950),I=o(1721),L=o(2845),X=o(925),R=o(226),x=o(9808),l=o(3075),F=o(6042),E=o(4832),V=o(969),$=o(5017),g=o(4219),b=o(8076);function G(B,se){if(1&B){const ee=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(_e){return s.CHM(ee),s.oxw().onAnimationEvent(_e)})("mouseenter",function(){return s.CHM(ee),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(ee),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&B){const ee=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===ee.dir),s.Q6J("ngClass",ee.nzOverlayClassName)("ngStyle",ee.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)("nzNoAnimation",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)}}const S=["*"],ie=[Z.yW.bottomLeft,Z.yW.bottomRight,Z.yW.topRight,Z.yW.topLeft];let ue=(()=>{class B{constructor(ee,ge,_e,Ie,Oe,De){this.nzConfigService=ee,this.elementRef=ge,this.overlay=_e,this.renderer=Ie,this.viewContainerRef=Oe,this.platform=De,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new z.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new v.X(!1),this.nzTrigger$=new v.X("hover"),this.overlayClose$=new z.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(ee,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(ee,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const ee=this.elementRef.nativeElement,ge=(0,a.T)((0,Q.R)(ee,"mouseenter").pipe((0,_.h)(!0)),(0,Q.R)(ee,"mouseleave").pipe((0,_.h)(!1))),Ie=(0,a.T)(this.nzDropdownMenu.mouseState$,ge),Oe=(0,Q.R)(ee,"click").pipe((0,D.U)(()=>!this.nzVisible)),De=this.nzTrigger$.pipe((0,T.w)(O=>"hover"===O?Ie:"click"===O?Oe:c.E)),Ae=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,J.h)(()=>this.nzClickHide),(0,_.h)(!1)),C=(0,a.T)(De,Ae,this.overlayClose$).pipe((0,J.h)(()=>!this.nzDisabled)),q=(0,a.T)(this.inputVisible$,C);(0,y.aj)([q,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,D.U)(([O,ce])=>O||ce),(0,N.e)(150),(0,k.x)(),(0,J.h)(()=>this.platform.isBrowser),(0,Y.R)(this.destroy$)).subscribe(O=>{const Ce=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:ee).getBoundingClientRect().width;this.nzVisible!==O&&this.nzVisibleChange.emit(O),this.nzVisible=O,O?(this.overlayRef?this.overlayRef.getConfig().minWidth=Ce:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Ce,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,J.h)(ye=>!this.elementRef.nativeElement.contains(ye.target))),this.overlayRef.keydownEvents().pipe((0,J.h)(ye=>ye.keyCode===e.hY&&!(0,e.Vb)(ye)))).pipe((0,Y.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Z.yW[this.nzPlacement],...ie]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new i.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Y.R)(this.destroy$)).subscribe(O=>{"void"===O.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(ee){const{nzVisible:ge,nzDisabled:_e,nzOverlayClassName:Ie,nzOverlayStyle:Oe,nzTrigger:De}=ee;if(De&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),_e){const Ae=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ae,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ae,"disabled")}Ie&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Oe&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return B.\u0275fac=function(ee){return new(ee||B)(s.Y36(U.jY),s.Y36(s.SBq),s.Y36(L.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(X.t4))},B.\u0275dir=s.lG2({type:B,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,t.gn)([(0,U.oS)(),(0,I.yF)()],B.prototype,"nzBackdrop",void 0),(0,t.gn)([(0,I.yF)()],B.prototype,"nzClickHide",void 0),(0,t.gn)([(0,I.yF)()],B.prototype,"nzDisabled",void 0),(0,t.gn)([(0,I.yF)()],B.prototype,"nzVisible",void 0),B})(),he=(()=>{class B{}return B.\u0275fac=function(ee){return new(ee||B)},B.\u0275mod=s.oAB({type:B}),B.\u0275inj=s.cJS({}),B})(),Se=(()=>{class B{constructor(ee,ge,_e){this.renderer=ee,this.nzButtonGroupComponent=ge,this.elementRef=_e}ngAfterViewInit(){const ee=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&ee&&this.renderer.addClass(ee,"ant-dropdown-button")}}return B.\u0275fac=function(ee){return new(ee||B)(s.Y36(s.Qsj),s.Y36(F.fY,9),s.Y36(s.SBq))},B.\u0275dir=s.lG2({type:B,selectors:[["","nz-button","","nz-dropdown",""]]}),B})(),ne=(()=>{class B{constructor(ee,ge,_e,Ie,Oe,De,Ae){this.cdr=ee,this.elementRef=ge,this.renderer=_e,this.viewContainerRef=Ie,this.nzMenuService=Oe,this.directionality=De,this.noAnimation=Ae,this.mouseState$=new v.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new z.xQ}onAnimationEvent(ee){this.animationStateChange$.emit(ee)}setMouseState(ee){this.mouseState$.next(ee)}setValue(ee,ge){this[ee]=ge,this.cdr.markForCheck()}ngOnInit(){var ee;null===(ee=this.directionality.change)||void 0===ee||ee.pipe((0,Y.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return B.\u0275fac=function(ee){return new(ee||B)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(g.hl),s.Y36(R.Is,8),s.Y36(E.P,9))},B.\u0275cmp=s.Xpm({type:B,selectors:[["nz-dropdown-menu"]],viewQuery:function(ee,ge){if(1&ee&&s.Gf(s.Rgc,7),2&ee){let _e;s.iGM(_e=s.CRH())&&(ge.templateRef=_e.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([g.hl,{provide:g.Cc,useValue:!0}])],ngContentSelectors:S,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(ee,ge){1&ee&&(s.F$t(),s.YNc(0,G,2,7,"ng-template"))},directives:[x.mk,x.PC,E.P],encapsulation:2,data:{animation:[b.mF]},changeDetection:0}),B})(),pe=(()=>{class B{}return B.\u0275fac=function(ee){return new(ee||B)},B.\u0275mod=s.oAB({type:B}),B.\u0275inj=s.cJS({imports:[[R.vT,x.ez,L.U8,l.u5,F.sL,g.ip,$.PV,E.g,X.ud,Z.e4,he,V.T],g.ip]}),B})();new L.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new L.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new L.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new L.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(de,W,o)=>{o.d(W,{AA:()=>tt,I2:()=>je,IO:()=>ae,Ph:()=>rt,n_:()=>Xe,t4:()=>Ke,yi:()=>xe,yw:()=>Ee});var t=o(5e3),e=o(6699),i=o(9808),s=o(969),z=o(655),v=o(1721),a=o(8929),Q=o(8514),c=o(1086),y=o(6787),_=o(2916),D=o(591),T=o(2986),J=o(7545),N=o(7625),k=o(4090),Y=o(685),U=o(226),Z=o(7525),I=o(1894);const L=["*"];function X(h,j){if(1&h&&t._UZ(0,"nz-avatar",3),2&h){const P=t.oxw();t.Q6J("nzSrc",P.nzSrc)}}function R(h,j){1&h&&t.Hsn(0,0,["*ngIf","!nzSrc"])}function x(h,j){if(1&h&&t._UZ(0,"nz-list-item-meta-avatar",3),2&h){const P=t.oxw();t.Q6J("nzSrc",P.avatarStr)}}function l(h,j){if(1&h&&(t.TgZ(0,"nz-list-item-meta-avatar"),t.GkF(1,4),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",P.avatarTpl)}}function F(h,j){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const P=t.oxw(3);t.xp6(1),t.Oqu(P.nzTitle)}}function E(h,j){if(1&h&&(t.TgZ(0,"nz-list-item-meta-title"),t.YNc(1,F,2,1,"ng-container",6),t.qZA()),2&h){const P=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzTitle)}}function V(h,j){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const P=t.oxw(3);t.xp6(1),t.Oqu(P.nzDescription)}}function $(h,j){if(1&h&&(t.TgZ(0,"nz-list-item-meta-description"),t.YNc(1,V,2,1,"ng-container",6),t.qZA()),2&h){const P=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzDescription)}}function g(h,j){if(1&h&&(t.TgZ(0,"div",5),t.YNc(1,E,2,1,"nz-list-item-meta-title",1),t.YNc(2,$,2,1,"nz-list-item-meta-description",1),t.Hsn(3,1),t.Hsn(4,2),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("ngIf",P.nzTitle&&!P.titleComponent),t.xp6(1),t.Q6J("ngIf",P.nzDescription&&!P.descriptionComponent)}}const b=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],G=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function S(h,j){1&h&&t.Hsn(0)}const H=["nz-list-item-actions",""];function ie(h,j){}function ue(h,j){1&h&&t._UZ(0,"em",3)}function he(h,j){if(1&h&&(t.TgZ(0,"li"),t.YNc(1,ie,0,0,"ng-template",1),t.YNc(2,ue,1,0,"em",2),t.qZA()),2&h){const P=j.$implicit,oe=j.last;t.xp6(1),t.Q6J("ngTemplateOutlet",P),t.xp6(1),t.Q6J("ngIf",!oe)}}function ze(h,j){}const Se=function(h,j){return{$implicit:h,index:j}};function ne(h,j){if(1&h&&(t.ynx(0),t.YNc(1,ze,0,0,"ng-template",9),t.BQk()),2&h){const P=j.$implicit,oe=j.index,ve=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",t.WLB(2,Se,P,oe))}}function pe(h,j){if(1&h&&(t.TgZ(0,"div",7),t.YNc(1,ne,2,5,"ng-container",8),t.Hsn(2,4),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("ngForOf",P.nzDataSource)}}function A(h,j){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const P=t.oxw(2);t.xp6(1),t.Oqu(P.nzHeader)}}function te(h,j){if(1&h&&(t.TgZ(0,"nz-list-header"),t.YNc(1,A,2,1,"ng-container",10),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzHeader)}}function B(h,j){1&h&&t._UZ(0,"div"),2&h&&t.Udp("min-height",53,"px")}function se(h,j){}function ee(h,j){if(1&h&&(t.TgZ(0,"div",13),t.YNc(1,se,0,0,"ng-template",9),t.qZA()),2&h){const P=j.$implicit,oe=j.index,ve=t.oxw(2);t.Q6J("nzSpan",ve.nzGrid.span||null)("nzXs",ve.nzGrid.xs||null)("nzSm",ve.nzGrid.sm||null)("nzMd",ve.nzGrid.md||null)("nzLg",ve.nzGrid.lg||null)("nzXl",ve.nzGrid.xl||null)("nzXXl",ve.nzGrid.xxl||null),t.xp6(1),t.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",t.WLB(9,Se,P,oe))}}function ge(h,j){if(1&h&&(t.TgZ(0,"div",11),t.YNc(1,ee,2,12,"div",12),t.qZA()),2&h){const P=t.oxw();t.Q6J("nzGutter",P.nzGrid.gutter||null),t.xp6(1),t.Q6J("ngForOf",P.nzDataSource)}}function _e(h,j){if(1&h&&t._UZ(0,"nz-list-empty",14),2&h){const P=t.oxw();t.Q6J("nzNoResult",P.nzNoResult)}}function Ie(h,j){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const P=t.oxw(2);t.xp6(1),t.Oqu(P.nzFooter)}}function Oe(h,j){if(1&h&&(t.TgZ(0,"nz-list-footer"),t.YNc(1,Ie,2,1,"ng-container",10),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzFooter)}}function De(h,j){}function Ae(h,j){}function C(h,j){if(1&h&&(t.TgZ(0,"nz-list-pagination"),t.YNc(1,Ae,0,0,"ng-template",6),t.qZA()),2&h){const P=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",P.nzPagination)}}const q=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],O=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ce(h,j){if(1&h&&t._UZ(0,"ul",6),2&h){const P=t.oxw(2);t.Q6J("nzActions",P.nzActions)}}function Ce(h,j){if(1&h&&(t.YNc(0,ce,1,1,"ul",5),t.Hsn(1)),2&h){const P=t.oxw();t.Q6J("ngIf",P.nzActions&&P.nzActions.length>0)}}function ye(h,j){if(1&h&&(t.ynx(0),t._uU(1),t.BQk()),2&h){const P=t.oxw(3);t.xp6(1),t.Oqu(P.nzContent)}}function Re(h,j){if(1&h&&(t.ynx(0),t.YNc(1,ye,2,1,"ng-container",8),t.BQk()),2&h){const P=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",P.nzContent)}}function Qe(h,j){if(1&h&&(t.Hsn(0,1),t.Hsn(1,2),t.YNc(2,Re,2,1,"ng-container",7)),2&h){const P=t.oxw();t.xp6(2),t.Q6J("ngIf",P.nzContent)}}function be(h,j){1&h&&t.Hsn(0,3)}function Pe(h,j){}function Ue(h,j){}function Ge(h,j){}function Fe(h,j){}function $e(h,j){if(1&h&&(t.YNc(0,Pe,0,0,"ng-template",9),t.YNc(1,Ue,0,0,"ng-template",9),t.YNc(2,Ge,0,0,"ng-template",9),t.YNc(3,Fe,0,0,"ng-template",9)),2&h){const P=t.oxw(),oe=t.MAs(3),ve=t.MAs(5),Te=t.MAs(1);t.Q6J("ngTemplateOutlet",oe),t.xp6(1),t.Q6J("ngTemplateOutlet",P.nzExtra),t.xp6(1),t.Q6J("ngTemplateOutlet",ve),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}function Ye(h,j){}function Ze(h,j){}function We(h,j){}function Je(h,j){if(1&h&&(t.TgZ(0,"nz-list-item-extra"),t.YNc(1,We,0,0,"ng-template",9),t.qZA()),2&h){const P=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",P.nzExtra)}}function w(h,j){}function le(h,j){if(1&h&&(t.ynx(0),t.TgZ(1,"div",10),t.YNc(2,Ye,0,0,"ng-template",9),t.YNc(3,Ze,0,0,"ng-template",9),t.qZA(),t.YNc(4,Je,2,1,"nz-list-item-extra",7),t.YNc(5,w,0,0,"ng-template",9),t.BQk()),2&h){const P=t.oxw(),oe=t.MAs(3),ve=t.MAs(1),Te=t.MAs(5);t.xp6(2),t.Q6J("ngTemplateOutlet",oe),t.xp6(1),t.Q6J("ngTemplateOutlet",ve),t.xp6(1),t.Q6J("ngIf",P.nzExtra),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}const f=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ae=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:L,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(P,oe){1&P&&(t.F$t(),t.TgZ(0,"h4",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),h})(),me=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:L,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(P,oe){1&P&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),h})(),Me=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:L,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(P,oe){1&P&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,X,1,1,"nz-avatar",1),t.YNc(2,R,1,0,"ng-content",2),t.qZA()),2&P&&(t.xp6(1),t.Q6J("ngIf",oe.nzSrc),t.xp6(1),t.Q6J("ngIf",!oe.nzSrc))},directives:[e.Dz,i.O5],encapsulation:2,changeDetection:0}),h})(),xe=(()=>{class h{constructor(P,oe){this.elementRef=P,this.renderer=oe,this.avatarStr="",this.renderer.addClass(P.nativeElement,"ant-list-item-meta")}set nzAvatar(P){P instanceof t.Rgc?(this.avatarStr="",this.avatarTpl=P):this.avatarStr=P}}return h.\u0275fac=function(P){return new(P||h)(t.Y36(t.SBq),t.Y36(t.Qsj))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(P,oe,ve){if(1&P&&(t.Suo(ve,me,5),t.Suo(ve,ae,5)),2&P){let Te;t.iGM(Te=t.CRH())&&(oe.descriptionComponent=Te.first),t.iGM(Te=t.CRH())&&(oe.titleComponent=Te.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:G,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(P,oe){1&P&&(t.F$t(b),t.YNc(0,x,1,1,"nz-list-item-meta-avatar",0),t.YNc(1,l,2,1,"nz-list-item-meta-avatar",1),t.Hsn(2),t.YNc(3,g,5,2,"div",2)),2&P&&(t.Q6J("ngIf",oe.avatarStr),t.xp6(1),t.Q6J("ngIf",oe.avatarTpl),t.xp6(2),t.Q6J("ngIf",oe.nzTitle||oe.nzDescription||oe.descriptionComponent||oe.titleComponent))},directives:[Me,ae,me,i.O5,i.tP,s.f],encapsulation:2,changeDetection:0}),h})(),Ee=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:L,decls:1,vars:0,template:function(P,oe){1&P&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),Be=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item-action"]],viewQuery:function(P,oe){if(1&P&&t.Gf(t.Rgc,5),2&P){let ve;t.iGM(ve=t.CRH())&&(oe.templateRef=ve.first)}},exportAs:["nzListItemAction"],ngContentSelectors:L,decls:1,vars:0,template:function(P,oe){1&P&&(t.F$t(),t.YNc(0,S,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),h})(),Ve=(()=>{class h{constructor(P,oe,ve){this.ngZone=P,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,Q.P)(()=>this.nzListItemActions?(0,c.of)(null):this.ngZone.onStable.pipe((0,T.q)(1),this.enterZone(),(0,J.w)(()=>this.contentChildrenChanges$))),(0,y.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,N.R)(ve)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Te=>Te.templateRef),oe.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return P=>new _.y(oe=>P.subscribe({next:ve=>this.ngZone.run(()=>oe.next(ve))}))}}return h.\u0275fac=function(P){return new(P||h)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(k.kn))},h.\u0275cmp=t.Xpm({type:h,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(P,oe,ve){if(1&P&&t.Suo(ve,Be,4),2&P){let Te;t.iGM(Te=t.CRH())&&(oe.nzListItemActions=Te)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[t._Bn([k.kn]),t.TTD],attrs:H,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(P,oe){1&P&&t.YNc(0,he,3,2,"li",0),2&P&&t.Q6J("ngForOf",oe.actions)},directives:[i.sg,i.tP,i.O5],encapsulation:2,changeDetection:0}),h})(),je=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(P,oe){1&P&&t._UZ(0,"nz-embed-empty",0),2&P&&t.Q6J("nzComponentName","list")("specificContent",oe.nzNoResult)},directives:[Y.gB],encapsulation:2,changeDetection:0}),h})(),Ke=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:L,decls:1,vars:0,template:function(P,oe){1&P&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),He=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:L,decls:1,vars:0,template:function(P,oe){1&P&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),ke=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:L,decls:1,vars:0,template:function(P,oe){1&P&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),et=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275dir=t.lG2({type:h,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),h})(),Xe=(()=>{class h{constructor(P){this.directionality=P,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new D.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var P;this.dir=this.directionality.value,null===(P=this.directionality.change)||void 0===P||P.pipe((0,N.R)(this.destroy$)).subscribe(oe=>{this.dir=oe})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(P){P.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return h.\u0275fac=function(P){return new(P||h)(t.Y36(U.Is,8))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(P,oe,ve){if(1&P&&(t.Suo(ve,He,5),t.Suo(ve,ke,5),t.Suo(ve,et,5)),2&P){let Te;t.iGM(Te=t.CRH())&&(oe.nzListFooterComponent=Te.first),t.iGM(Te=t.CRH())&&(oe.nzListPaginationComponent=Te.first),t.iGM(Te=t.CRH())&&(oe.nzListLoadMoreDirective=Te.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(P,oe){2&P&&t.ekj("ant-list-rtl","rtl"===oe.dir)("ant-list-vertical","vertical"===oe.nzItemLayout)("ant-list-lg","large"===oe.nzSize)("ant-list-sm","small"===oe.nzSize)("ant-list-split",oe.nzSplit)("ant-list-bordered",oe.nzBordered)("ant-list-loading",oe.nzLoading)("ant-list-something-after-last-item",oe.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[t.TTD],ngContentSelectors:O,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(P,oe){if(1&P&&(t.F$t(q),t.YNc(0,pe,3,1,"ng-template",null,0,t.W1O),t.YNc(2,te,2,1,"nz-list-header",1),t.Hsn(3),t.TgZ(4,"nz-spin",2),t.ynx(5),t.YNc(6,B,1,2,"div",3),t.YNc(7,ge,2,2,"div",4),t.YNc(8,_e,1,1,"nz-list-empty",5),t.BQk(),t.qZA(),t.YNc(9,Oe,2,1,"nz-list-footer",1),t.Hsn(10,1),t.YNc(11,De,0,0,"ng-template",6),t.Hsn(12,2),t.YNc(13,C,2,1,"nz-list-pagination",1),t.Hsn(14,3)),2&P){const ve=t.MAs(1);t.xp6(2),t.Q6J("ngIf",oe.nzHeader),t.xp6(2),t.Q6J("nzSpinning",oe.nzLoading),t.xp6(2),t.Q6J("ngIf",oe.nzLoading&&oe.nzDataSource&&0===oe.nzDataSource.length),t.xp6(1),t.Q6J("ngIf",oe.nzGrid&&oe.nzDataSource)("ngIfElse",ve),t.xp6(1),t.Q6J("ngIf",!oe.nzLoading&&oe.nzDataSource&&0===oe.nzDataSource.length),t.xp6(1),t.Q6J("ngIf",oe.nzFooter),t.xp6(2),t.Q6J("ngTemplateOutlet",oe.nzLoadMore),t.xp6(2),t.Q6J("ngIf",oe.nzPagination)}},directives:[Ke,Z.W,je,He,ke,i.sg,i.tP,i.O5,s.f,I.SK,I.t3],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,v.yF)()],h.prototype,"nzBordered",void 0),(0,z.gn)([(0,v.yF)()],h.prototype,"nzLoading",void 0),(0,z.gn)([(0,v.yF)()],h.prototype,"nzSplit",void 0),h})(),tt=(()=>{class h{constructor(P,oe,ve,Te){this.parentComp=ve,this.cdr=Te,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,oe.addClass(P.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(P=>{this.itemLayout=P,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return h.\u0275fac=function(P){return new(P||h)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Xe),t.Y36(t.sBO))},h.\u0275cmp=t.Xpm({type:h,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(P,oe,ve){if(1&P&&t.Suo(ve,Ee,5),2&P){let Te;t.iGM(Te=t.CRH())&&(oe.listItemExtraDirective=Te.first)}},hostVars:2,hostBindings:function(P,oe){2&P&&t.ekj("ant-list-item-no-flex",oe.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(P,oe){if(1&P&&(t.F$t(f),t.YNc(0,Ce,2,1,"ng-template",null,0,t.W1O),t.YNc(2,Qe,3,1,"ng-template",null,1,t.W1O),t.YNc(4,be,1,0,"ng-template",null,2,t.W1O),t.YNc(6,$e,4,4,"ng-template",null,3,t.W1O),t.YNc(8,le,6,4,"ng-container",4)),2&P){const ve=t.MAs(7);t.xp6(8),t.Q6J("ngIf",oe.isVerticalAndExtra)("ngIfElse",ve)}},directives:[Ve,Ee,i.O5,s.f,i.tP],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,v.yF)()],h.prototype,"nzNoFlex",void 0),h})(),rt=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[[U.vT,i.ez,Z.j,I.Jb,e.Rt,s.T,Y.Xo]]}),h})()},4219:(de,W,o)=>{o.d(W,{Cc:()=>C,YV:()=>We,hl:()=>O,ip:()=>Je,r9:()=>Ce,uA:()=>Ze,wO:()=>$e});var t=o(655),e=o(5e3),i=o(8929),s=o(591),z=o(6787),v=o(6053),a=o(4850),Q=o(1709),c=o(2198),y=o(7604),_=o(7138),D=o(5778),T=o(7625),J=o(1059),N=o(7545),k=o(1721),Y=o(325),U=o(226),Z=o(2845),I=o(6950),L=o(925),X=o(4832),R=o(9808),x=o(5017),l=o(969),F=o(8076);const E=["nz-submenu-title",""];function V(w,le){if(1&w&&e._UZ(0,"i",4),2&w){const f=e.oxw();e.Q6J("nzType",f.nzIcon)}}function $(w,le){if(1&w&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&w){const f=e.oxw();e.xp6(2),e.Oqu(f.nzTitle)}}function g(w,le){1&w&&e._UZ(0,"i",8)}function b(w,le){1&w&&e._UZ(0,"i",9)}function G(w,le){if(1&w&&(e.TgZ(0,"span",5),e.YNc(1,g,1,0,"i",6),e.YNc(2,b,1,0,"i",7),e.qZA()),2&w){const f=e.oxw();e.Q6J("ngSwitch",f.dir),e.xp6(1),e.Q6J("ngSwitchCase","rtl")}}function S(w,le){1&w&&e._UZ(0,"i",10)}const H=["*"],ie=["nz-submenu-inline-child",""];function ue(w,le){}const he=["nz-submenu-none-inline-child",""];function ze(w,le){}const Se=["nz-submenu",""];function ne(w,le){1&w&&e.Hsn(0,0,["*ngIf","!nzTitle"])}function pe(w,le){if(1&w&&e._UZ(0,"div",6),2&w){const f=e.oxw(),m=e.MAs(7);e.Q6J("mode",f.mode)("nzOpen",f.nzOpen)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("menuClass",f.nzMenuClassName)("templateOutlet",m)}}function A(w,le){if(1&w){const f=e.EpF();e.TgZ(0,"div",8),e.NdJ("subMenuMouseState",function(ae){return e.CHM(f),e.oxw(2).setMouseEnterState(ae)}),e.qZA()}if(2&w){const f=e.oxw(2),m=e.MAs(7);e.Q6J("theme",f.theme)("mode",f.mode)("nzOpen",f.nzOpen)("position",f.position)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("templateOutlet",m)("menuClass",f.nzMenuClassName)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)}}function te(w,le){if(1&w){const f=e.EpF();e.YNc(0,A,1,10,"ng-template",7),e.NdJ("positionChange",function(ae){return e.CHM(f),e.oxw().onPositionChange(ae)})}if(2&w){const f=e.oxw(),m=e.MAs(1);e.Q6J("cdkConnectedOverlayPositions",f.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",f.triggerWidth)("cdkConnectedOverlayOpen",f.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function B(w,le){1&w&&e.Hsn(0,1)}const se=[[["","title",""]],"*"],ee=["[title]","*"],ge=["titleElement"],_e=["nz-menu-group",""];function Ie(w,le){if(1&w&&(e.ynx(0),e._uU(1),e.BQk()),2&w){const f=e.oxw();e.xp6(1),e.Oqu(f.nzTitle)}}function Oe(w,le){1&w&&e.Hsn(0,1,["*ngIf","!nzTitle"])}const De=["*",[["","title",""]]],Ae=["*","[title]"],C=new e.OlP("NzIsInDropDownMenuToken"),q=new e.OlP("NzMenuServiceLocalToken");let O=(()=>{class w{constructor(){this.descendantMenuItemClick$=new i.xQ,this.childMenuItemClick$=new i.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(f){this.descendantMenuItemClick$.next(f)}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setMode(f){this.mode$.next(f)}setTheme(f){this.theme$.next(f)}setInlineIndent(f){this.inlineIndent$.next(f)}}return w.\u0275fac=function(f){return new(f||w)},w.\u0275prov=e.Yz7({token:w,factory:w.\u0275fac}),w})(),ce=(()=>{class w{constructor(f,m,ae){this.nzHostSubmenuService=f,this.nzMenuService=m,this.isMenuInsideDropDown=ae,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Ee=>"inline"===Ee?"inline":"vertical"===Ee||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new i.xQ,this.childMenuItemClick$=new i.xQ,this.destroy$=new i.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const me=this.childMenuItemClick$.pipe((0,Q.zg)(()=>this.mode$),(0,c.h)(Ee=>"inline"!==Ee||this.isMenuInsideDropDown),(0,y.h)(!1)),Me=(0,z.T)(this.isMouseEnterTitleOrOverlay$,me);(0,v.aj)([this.isChildSubMenuOpen$,Me]).pipe((0,a.U)(([Ee,Be])=>Ee||Be),(0,_.e)(150),(0,D.x)(),(0,T.R)(this.destroy$)).pipe((0,D.x)()).subscribe(Ee=>{this.setOpenStateWithoutDebounce(Ee),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Ee):this.nzMenuService.isChildSubMenuOpen$.next(Ee)})}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setOpenStateWithoutDebounce(f){this.isCurrentSubMenuOpen$.next(f)}setMouseEnterTitleOrOverlayState(f){this.isMouseEnterTitleOrOverlay$.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(f){return new(f||w)(e.LFG(w,12),e.LFG(O),e.LFG(C))},w.\u0275prov=e.Yz7({token:w,factory:w.\u0275fac}),w})(),Ce=(()=>{class w{constructor(f,m,ae,me,Me,xe,Ee,Be){this.nzMenuService=f,this.cdr=m,this.nzSubmenuService=ae,this.isMenuInsideDropDown=me,this.directionality=Me,this.routerLink=xe,this.routerLinkWithHref=Ee,this.router=Be,this.destroy$=new i.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new i.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Be&&this.router.events.pipe((0,T.R)(this.destroy$),(0,c.h)(Ve=>Ve instanceof Y.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(f){this.nzDisabled?(f.preventDefault(),f.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(f){this.nzSelected=f,this.selected$.next(f)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const f=this.hasActiveLinks();this.nzSelected!==f&&(this.nzSelected=f,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const f=this.isLinkActive(this.router);return this.routerLink&&f(this.routerLink)||this.routerLinkWithHref&&f(this.routerLinkWithHref)||this.listOfRouterLink.some(f)||this.listOfRouterLinkWithHref.some(f)}isLinkActive(f){return m=>f.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var f;(0,v.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(f){f.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(O),e.Y36(e.sBO),e.Y36(ce,8),e.Y36(C),e.Y36(U.Is,8),e.Y36(Y.rH,8),e.Y36(Y.yS,8),e.Y36(Y.F0,8))},w.\u0275dir=e.lG2({type:w,selectors:[["","nz-menu-item",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,Y.rH,5),e.Suo(ae,Y.yS,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfRouterLink=me),e.iGM(me=e.CRH())&&(m.listOfRouterLinkWithHref=me)}},hostVars:20,hostBindings:function(f,m){1&f&&e.NdJ("click",function(me){return m.clickMenuItem(me)}),2&f&&(e.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),e.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[e.TTD]}),(0,t.gn)([(0,k.yF)()],w.prototype,"nzDisabled",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzSelected",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzDanger",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzMatchRouterExact",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzMatchRouter",void 0),w})(),ye=(()=>{class w{constructor(f,m){this.cdr=f,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new e.vpe,this.subMenuMouseState=new e.vpe,this.dir="ltr",this.destroy$=new i.xQ}ngOnInit(){var f;this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(e.sBO),e.Y36(U.Is,8))},w.\u0275cmp=e.Xpm({type:w,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(f,m){1&f&&e.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&f&&(e.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),e.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:E,ngContentSelectors:H,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(f,m){if(1&f&&(e.F$t(),e.YNc(0,V,1,1,"i",0),e.YNc(1,$,3,1,"ng-container",1),e.Hsn(2),e.YNc(3,G,3,2,"span",2),e.YNc(4,S,1,0,"ng-template",null,3,e.W1O)),2&f){const ae=e.MAs(5);e.Q6J("ngIf",m.nzIcon),e.xp6(1),e.Q6J("nzStringTemplateOutlet",m.nzTitle),e.xp6(2),e.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ae)}},directives:[R.O5,x.Ls,l.f,R.RF,R.n9,R.ED],encapsulation:2,changeDetection:0}),w})(),Re=(()=>{class w{constructor(f,m,ae){this.elementRef=f,this.renderer=m,this.directionality=ae,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new i.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(f){const{mode:m,nzOpen:ae,menuClass:me}=f;(m||ae)&&this.calcMotionState(),me&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.removeClass(this.elementRef.nativeElement,Me)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.addClass(this.elementRef.nativeElement,Me)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(U.Is,8))},w.\u0275cmp=e.Xpm({type:w,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(f,m){2&f&&(e.d8E("@collapseMotion",m.expandState),e.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[e.TTD],attrs:ie,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(f,m){1&f&&e.YNc(0,ue,0,0,"ng-template",0),2&f&&e.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[R.tP],encapsulation:2,data:{animation:[F.J_]},changeDetection:0}),w})(),Qe=(()=>{class w{constructor(f){this.directionality=f,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new e.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new i.xQ}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(f){const{mode:m,nzOpen:ae}=f;(m||ae)&&this.calcMotionState()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(U.Is,8))},w.\u0275cmp=e.Xpm({type:w,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(f,m){1&f&&e.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&f&&(e.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),e.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[e.TTD],attrs:he,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(f,m){1&f&&(e.TgZ(0,"div",0),e.YNc(1,ze,0,0,"ng-template",1),e.qZA()),2&f&&(e.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),e.Q6J("ngClass",m.menuClass),e.xp6(1),e.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[R.mk,R.tP],encapsulation:2,data:{animation:[F.$C,F.mF]},changeDetection:0}),w})();const be=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],Pe=[I.yW.bottomLeft];let Ue=(()=>{class w{constructor(f,m,ae,me,Me,xe,Ee){this.nzMenuService=f,this.cdr=m,this.nzSubmenuService=ae,this.platform=me,this.isMenuInsideDropDown=Me,this.directionality=xe,this.noAnimation=Ee,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new e.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new i.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(f){this.nzSubmenuService.setOpenStateWithoutDebounce(f)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(f){this.isActive=f,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(f)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(f){const m=(0,I.d_)(f);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var f;this.nzMenuService.theme$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Pe:"vertical"===m&&(this.overlayPositions=be),this.cdr.markForCheck()}),(0,v.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const f=this.listOfNzMenuItemDirective,m=f.changes,ae=(0,z.T)(m,...f.map(me=>me.selected$));m.pipe((0,J.O)(f),(0,N.w)(()=>ae),(0,J.O)(!0),(0,a.U)(()=>f.some(me=>me.nzSelected)),(0,T.R)(this.destroy$)).subscribe(me=>{this.isSelected=me,this.cdr.markForCheck()})}ngOnChanges(f){const{nzOpen:m}=f;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(O),e.Y36(e.sBO),e.Y36(ce),e.Y36(L.t4),e.Y36(C),e.Y36(U.Is,8),e.Y36(X.P,9))},w.\u0275cmp=e.Xpm({type:w,selectors:[["","nz-submenu",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,w,5),e.Suo(ae,Ce,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfNzSubMenuComponent=me),e.iGM(me=e.CRH())&&(m.listOfNzMenuItemDirective=me)}},viewQuery:function(f,m){if(1&f&&e.Gf(Z.xu,7,e.SBq),2&f){let ae;e.iGM(ae=e.CRH())&&(m.cdkOverlayOrigin=ae.first)}},hostVars:34,hostBindings:function(f,m){2&f&&e.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[e._Bn([ce]),e.TTD],attrs:Se,ngContentSelectors:ee,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(f,m){if(1&f&&(e.F$t(se),e.TgZ(0,"div",0,1),e.NdJ("subMenuMouseState",function(me){return m.setMouseEnterState(me)})("toggleSubMenu",function(){return m.toggleSubMenu()}),e.YNc(2,ne,1,0,"ng-content",2),e.qZA(),e.YNc(3,pe,1,6,"div",3),e.YNc(4,te,1,5,"ng-template",null,4,e.W1O),e.YNc(6,B,1,0,"ng-template",null,5,e.W1O)),2&f){const ae=e.MAs(5);e.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),e.xp6(2),e.Q6J("ngIf",!m.nzTitle),e.xp6(1),e.Q6J("ngIf","inline"===m.mode)("ngIfElse",ae)}},directives:[ye,Re,Qe,Z.xu,R.O5,X.P,Z.pI],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,k.yF)()],w.prototype,"nzOpen",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzDisabled",void 0),w})();function Ge(w,le){return w||le}function Fe(w){return w||!1}let $e=(()=>{class w{constructor(f,m,ae,me){this.nzMenuService=f,this.isMenuInsideDropDown=m,this.cdr=ae,this.directionality=me,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new e.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new i.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(f){this.nzInlineCollapsed=f,this.inlineCollapsed$.next(f)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(f=>f.nzOpen),this.listOfNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var f;(0,v.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ae])=>{this.actualMode=m?"vertical":ae,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ae=>ae.setSelectedState(ae===m))}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(f){const{nzInlineCollapsed:m,nzInlineIndent:ae,nzTheme:me,nzMode:Me}=f;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ae&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),me&&this.nzMenuService.setTheme(this.nzTheme),Me&&(this.mode$.next(this.nzMode),!f.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(xe=>xe.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(O),e.Y36(C),e.Y36(e.sBO),e.Y36(U.Is,8))},w.\u0275dir=e.lG2({type:w,selectors:[["","nz-menu",""]],contentQueries:function(f,m,ae){if(1&f&&(e.Suo(ae,Ce,5),e.Suo(ae,Ue,5)),2&f){let me;e.iGM(me=e.CRH())&&(m.listOfNzMenuItemDirective=me),e.iGM(me=e.CRH())&&(m.listOfNzSubMenuComponent=me)}},hostVars:34,hostBindings:function(f,m){2&f&&e.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[e._Bn([{provide:q,useClass:O},{provide:O,useFactory:Ge,deps:[[new e.tp0,new e.FiY,O],q]},{provide:C,useFactory:Fe,deps:[[new e.tp0,new e.FiY,C]]}]),e.TTD]}),(0,t.gn)([(0,k.yF)()],w.prototype,"nzInlineCollapsed",void 0),(0,t.gn)([(0,k.yF)()],w.prototype,"nzSelectable",void 0),w})();function Ye(w){return w||!1}let Ze=(()=>{class w{constructor(f,m,ae){this.elementRef=f,this.renderer=m,this.isMenuInsideDropDown=ae,this.renderer.addClass(f.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const f=this.titleElement.nativeElement.nextElementSibling;f&&this.renderer.addClass(f,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(C))},w.\u0275cmp=e.Xpm({type:w,selectors:[["","nz-menu-group",""]],viewQuery:function(f,m){if(1&f&&e.Gf(ge,5),2&f){let ae;e.iGM(ae=e.CRH())&&(m.titleElement=ae.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[e._Bn([{provide:C,useFactory:Ye,deps:[[new e.tp0,new e.FiY,C]]}])],attrs:_e,ngContentSelectors:Ae,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(f,m){1&f&&(e.F$t(De),e.TgZ(0,"div",null,0),e.YNc(2,Ie,2,1,"ng-container",1),e.YNc(3,Oe,1,0,"ng-content",2),e.qZA(),e.Hsn(4)),2&f&&(e.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),e.xp6(2),e.Q6J("nzStringTemplateOutlet",m.nzTitle),e.xp6(1),e.Q6J("ngIf",!m.nzTitle))},directives:[l.f,R.O5],encapsulation:2,changeDetection:0}),w})(),We=(()=>{class w{constructor(f,m){this.elementRef=f,this.renderer=m,this.renderer.addClass(f.nativeElement,"ant-dropdown-menu-item-divider")}}return w.\u0275fac=function(f){return new(f||w)(e.Y36(e.SBq),e.Y36(e.Qsj))},w.\u0275dir=e.lG2({type:w,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),w})(),Je=(()=>{class w{}return w.\u0275fac=function(f){return new(f||w)},w.\u0275mod=e.oAB({type:w}),w.\u0275inj=e.cJS({imports:[[U.vT,R.ez,L.ud,Z.U8,x.PV,X.g,l.T]]}),w})()},3610:(de,W,o)=>{o.d(W,{$6:()=>I,lU:()=>U});var t=o(655),e=o(5e3),i=o(8076),s=o(9439),z=o(1721),v=o(404),a=o(4832),Q=o(226),c=o(2845),y=o(6950),_=o(9808),D=o(969);function T(L,X){if(1&L&&(e.ynx(0),e._uU(1),e.BQk()),2&L){const R=e.oxw(3);e.xp6(1),e.Oqu(R.nzTitle)}}function J(L,X){if(1&L&&(e.TgZ(0,"div",10),e.YNc(1,T,2,1,"ng-container",9),e.qZA()),2&L){const R=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",R.nzTitle)}}function N(L,X){if(1&L&&(e.ynx(0),e._uU(1),e.BQk()),2&L){const R=e.oxw(2);e.xp6(1),e.Oqu(R.nzContent)}}function k(L,X){if(1&L&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"span",5),e.qZA(),e.TgZ(4,"div",6)(5,"div"),e.YNc(6,J,2,1,"div",7),e.TgZ(7,"div",8),e.YNc(8,N,2,1,"ng-container",9),e.qZA()()()()()),2&L){const R=e.oxw();e.ekj("ant-popover-rtl","rtl"===R.dir),e.Q6J("ngClass",R._classMap)("ngStyle",R.nzOverlayStyle)("@.disabled",null==R.noAnimation?null:R.noAnimation.nzNoAnimation)("nzNoAnimation",null==R.noAnimation?null:R.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),e.xp6(6),e.Q6J("ngIf",R.nzTitle),e.xp6(2),e.Q6J("nzStringTemplateOutlet",R.nzContent)}}let U=(()=>{class L extends v.Mg{constructor(R,x,l,F,E,V){super(R,x,l,F,E,V),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new e.vpe,this.componentRef=this.hostView.createComponent(Z)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return L.\u0275fac=function(R){return new(R||L)(e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(e._Vd),e.Y36(e.Qsj),e.Y36(a.P,9),e.Y36(s.jY))},L.\u0275dir=e.lG2({type:L,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(R,x){2&R&&e.ekj("ant-popover-open",x.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[e.qOj]}),(0,t.gn)([(0,z.yF)()],L.prototype,"arrowPointAtCenter",void 0),(0,t.gn)([(0,s.oS)()],L.prototype,"nzPopoverBackdrop",void 0),L})(),Z=(()=>{class L extends v.XK{constructor(R,x,l){super(R,x,l),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,v.pu)(this.nzTitle)&&(0,v.pu)(this.nzContent)}}return L.\u0275fac=function(R){return new(R||L)(e.Y36(e.sBO),e.Y36(Q.Is,8),e.Y36(a.P,9))},L.\u0275cmp=e.Xpm({type:L,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[e.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(R,x){1&R&&(e.YNc(0,k,9,9,"ng-template",0,1,e.W1O),e.NdJ("overlayOutsideClick",function(F){return x.onClickOutside(F)})("detach",function(){return x.hide()})("positionChange",function(F){return x.onPositionChange(F)})),2&R&&e.Q6J("cdkConnectedOverlayHasBackdrop",x.hasBackdrop)("cdkConnectedOverlayOrigin",x.origin)("cdkConnectedOverlayPositions",x._positions)("cdkConnectedOverlayOpen",x._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",x.nzArrowPointAtCenter)},directives:[c.pI,y.hQ,_.mk,_.PC,a.P,_.O5,D.f],encapsulation:2,data:{animation:[i.$C]},changeDetection:0}),L})(),I=(()=>{class L{}return L.\u0275fac=function(R){return new(R||L)},L.\u0275mod=e.oAB({type:L}),L.\u0275inj=e.cJS({imports:[[Q.vT,_.ez,c.U8,D.T,y.e4,a.g,v.cg]]}),L})()},8144:(de,W,o)=>{o.d(W,{$1:()=>J,NU:()=>Y,zf:()=>U});var t=o(226),e=o(9808),i=o(5e3),s=o(655),z=o(8929),v=o(7625),a=o(9439),Q=o(1721);function c(Z,I){}const y=function(Z){return{$implicit:Z}};function _(Z,I){if(1&Z&&(i.TgZ(0,"span",4),i.YNc(1,c,0,0,"ng-template",5),i.qZA()),2&Z){const L=i.oxw(),X=L.last,R=L.index,x=i.oxw();i.Udp("margin-bottom","vertical"===x.nzDirection?X?null:x.spaceSize:null,"px")("margin-right","horizontal"===x.nzDirection?X?null:x.spaceSize:null,"px"),i.xp6(1),i.Q6J("ngTemplateOutlet",x.nzSplit)("ngTemplateOutletContext",i.VKq(6,y,R))}}function D(Z,I){if(1&Z&&(i.TgZ(0,"div",1),i.GkF(1,2),i.qZA(),i.YNc(2,_,2,8,"span",3)),2&Z){const L=I.$implicit,X=I.last,R=i.oxw();i.Udp("margin-bottom","vertical"===R.nzDirection?X?null:R.spaceSize:null,"px")("margin-right","horizontal"===R.nzDirection?X?null:R.spaceSize:null,"px"),i.xp6(1),i.Q6J("ngTemplateOutlet",L),i.xp6(1),i.Q6J("ngIf",R.nzSplit&&!X)}}const T=["*"];let J=(()=>{class Z{constructor(){}}return Z.\u0275fac=function(L){return new(L||Z)},Z.\u0275dir=i.lG2({type:Z,selectors:[["","nzSpaceItem",""]]}),Z})();const k={small:8,middle:16,large:24};let Y=(()=>{class Z{constructor(L,X){this.nzConfigService=L,this.cdr=X,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=k.small,this.destroy$=new z.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?k[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Z.\u0275fac=function(L){return new(L||Z)(i.Y36(a.jY),i.Y36(i.sBO))},Z.\u0275cmp=i.Xpm({type:Z,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(L,X,R){if(1&L&&i.Suo(R,J,4,i.Rgc),2&L){let x;i.iGM(x=i.CRH())&&(X.items=x)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(L,X){2&L&&(i.Udp("flex-wrap",X.nzWrap?"wrap":null),i.ekj("ant-space-horizontal","horizontal"===X.nzDirection)("ant-space-vertical","vertical"===X.nzDirection)("ant-space-align-start","start"===X.mergedAlign)("ant-space-align-end","end"===X.mergedAlign)("ant-space-align-center","center"===X.mergedAlign)("ant-space-align-baseline","baseline"===X.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[i.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(L,X){1&L&&(i.F$t(),i.Hsn(0),i.YNc(1,D,3,6,"ng-template",0)),2&L&&(i.xp6(1),i.Q6J("ngForOf",X.items))},directives:[e.sg,e.tP,e.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,Q.yF)()],Z.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],Z.prototype,"nzSize",void 0),Z})(),U=(()=>{class Z{}return Z.\u0275fac=function(L){return new(L||Z)},Z.\u0275mod=i.oAB({type:Z}),Z.\u0275inj=i.cJS({imports:[[t.vT,e.ez]]}),Z})()},7525:(de,W,o)=>{o.d(W,{W:()=>E,j:()=>V});var t=o(655),e=o(5e3),i=o(8929),s=o(591),z=o(839),v=o(8723),a=o(1177);class c{constructor(g){this.durationSelector=g}call(g,b){return b.subscribe(new y(g,this.durationSelector))}}class y extends a.Ds{constructor(g,b){super(g),this.durationSelector=b,this.hasValue=!1}_next(g){try{const b=this.durationSelector.call(this,g);b&&this._tryNext(g,b)}catch(b){this.destination.error(b)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(g,b){let G=this.durationSubscription;this.value=g,this.hasValue=!0,G&&(G.unsubscribe(),this.remove(G)),G=(0,a.ft)(b,new a.IY(this)),G&&!G.closed&&this.add(this.durationSubscription=G)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const g=this.value,b=this.durationSubscription;b&&(this.durationSubscription=void 0,b.unsubscribe(),this.remove(b)),this.value=void 0,this.hasValue=!1,super._next(g)}}}var _=o(1059),D=o(5778),T=o(7545),J=o(7625),N=o(9439),k=o(1721),Y=o(226),U=o(9808),Z=o(7144);function I($,g){1&$&&(e.TgZ(0,"span",3),e._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),e.qZA())}function L($,g){}function X($,g){if(1&$&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&$){const b=e.oxw(2);e.xp6(1),e.Oqu(b.nzTip)}}function R($,g){if(1&$&&(e.TgZ(0,"div")(1,"div",5),e.YNc(2,L,0,0,"ng-template",6),e.YNc(3,X,2,1,"div",7),e.qZA()()),2&$){const b=e.oxw(),G=e.MAs(1);e.xp6(1),e.ekj("ant-spin-rtl","rtl"===b.dir)("ant-spin-spinning",b.isLoading)("ant-spin-lg","large"===b.nzSize)("ant-spin-sm","small"===b.nzSize)("ant-spin-show-text",b.nzTip),e.xp6(1),e.Q6J("ngTemplateOutlet",b.nzIndicator||G),e.xp6(1),e.Q6J("ngIf",b.nzTip)}}function x($,g){if(1&$&&(e.TgZ(0,"div",9),e.Hsn(1),e.qZA()),2&$){const b=e.oxw();e.ekj("ant-spin-blur",b.isLoading)}}const l=["*"],F="spin";let E=(()=>{class ${constructor(b,G,S){this.nzConfigService=b,this.cdr=G,this.directionality=S,this._nzModuleName=F,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new i.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new z.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var b;this.delay$.pipe((0,_.O)(this.nzDelay),(0,D.x)(),(0,T.w)(S=>0===S?this.spinning$:this.spinning$.pipe(function Q($){return g=>g.lift(new c($))}(H=>(0,v.H)(H?S:0)))),(0,J.R)(this.destroy$)).subscribe(S=>{this.isLoading=S,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(F).pipe((0,J.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(b=this.directionality.change)||void 0===b||b.pipe((0,J.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(b){const{nzSpinning:G,nzDelay:S}=b;G&&this.spinning$.next(this.nzSpinning),S&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return $.\u0275fac=function(b){return new(b||$)(e.Y36(N.jY),e.Y36(e.sBO),e.Y36(Y.Is,8))},$.\u0275cmp=e.Xpm({type:$,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(b,G){2&b&&e.ekj("ant-spin-nested-loading",!G.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[e.TTD],ngContentSelectors:l,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(b,G){1&b&&(e.F$t(),e.YNc(0,I,5,0,"ng-template",null,0,e.W1O),e.YNc(2,R,4,12,"div",1),e.YNc(3,x,2,2,"div",2)),2&b&&(e.xp6(2),e.Q6J("ngIf",G.isLoading),e.xp6(1),e.Q6J("ngIf",!G.nzSimple))},directives:[U.O5,U.tP],encapsulation:2}),(0,t.gn)([(0,N.oS)()],$.prototype,"nzIndicator",void 0),(0,t.gn)([(0,k.Rn)()],$.prototype,"nzDelay",void 0),(0,t.gn)([(0,k.yF)()],$.prototype,"nzSimple",void 0),(0,t.gn)([(0,k.yF)()],$.prototype,"nzSpinning",void 0),$})(),V=(()=>{class ${}return $.\u0275fac=function(b){return new(b||$)},$.\u0275mod=e.oAB({type:$}),$.\u0275inj=e.cJS({imports:[[Y.vT,U.ez,Z.Q8]]}),$})()},8481:(de,W,o)=>{o.d(W,{X:()=>J,j:()=>T});var t=o(655),e=o(5e3),i=o(8929),s=o(7625),z=o(8693),v=o(1721),a=o(226),Q=o(9808),c=o(5017),y=o(3075);function _(N,k){if(1&N){const Y=e.EpF();e.TgZ(0,"i",1),e.NdJ("click",function(Z){return e.CHM(Y),e.oxw().closeTag(Z)}),e.qZA()}}const D=["*"];let T=(()=>{class N{constructor(Y,U,Z,I){this.cdr=Y,this.renderer=U,this.elementRef=Z,this.directionality=I,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new e.vpe,this.nzCheckedChange=new e.vpe,this.dir="ltr",this.destroy$=new i.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Y){this.nzOnClose.emit(Y),Y.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Y=this.elementRef.nativeElement,U=new RegExp(`(ant-tag-(?:${[...z.uf,...z.Bh].join("|")}))`,"g"),Z=Y.classList.toString(),I=[];let L=U.exec(Z);for(;null!==L;)I.push(L[1]),L=U.exec(Z);Y.classList.remove(...I)}setPresetColor(){const Y=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,z.o2)(this.nzColor)||(0,z.M8)(this.nzColor)),this.isPresetColor&&Y.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Y;null===(Y=this.directionality.change)||void 0===Y||Y.pipe((0,s.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Y){const{nzColor:U}=Y;U&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(Y){return new(Y||N)(e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(a.Is,8))},N.\u0275cmp=e.Xpm({type:N,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Y,U){1&Y&&e.NdJ("click",function(){return U.updateCheckedStatus()}),2&Y&&(e.Udp("background-color",U.isPresetColor?"":U.nzColor),e.ekj("ant-tag-has-color",U.nzColor&&!U.isPresetColor)("ant-tag-checkable","checkable"===U.nzMode)("ant-tag-checkable-checked",U.nzChecked)("ant-tag-rtl","rtl"===U.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[e.TTD],ngContentSelectors:D,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Y,U){1&Y&&(e.F$t(),e.Hsn(0),e.YNc(1,_,1,0,"i",0)),2&Y&&(e.xp6(1),e.Q6J("ngIf","closeable"===U.nzMode))},directives:[Q.O5,c.Ls],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,v.yF)()],N.prototype,"nzChecked",void 0),N})(),J=(()=>{class N{}return N.\u0275fac=function(Y){return new(Y||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[[a.vT,Q.ez,y.u5,c.PV]]}),N})()}}]);