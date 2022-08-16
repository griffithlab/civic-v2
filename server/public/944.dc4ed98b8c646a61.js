"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(me,Y,i)=>{i.d(Y,{H:()=>Ee});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),h=i(325),I=i(8481),l=i(3610),x=i(3240),a=i(4850),z=i(2198),C=i(7630),y=i(7484),T=i(5017),j=i(3098),P=i(1894),ee=i(8144),G=i(6949),L=i(160);function p(ie,_e){if(1&ie&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&ie){const S=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",S.officialName," ")}}function M(ie,_e){if(1&ie&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&ie){const S=_e.$implicit;n.xp6(1),n.Oqu(S)}}function F(ie,_e){if(1&ie&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&ie){const S=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",S.geneAliases)}}function te(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/flags"),n.xp6(3),n.hij(" Flags (",S.flags.totalCount,") ")}}function Q(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",S.revisions.totalCount,") ")}}function A(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/comments"),n.xp6(3),n.hij(" Comments (",S.comments.totalCount,") ")}}function c(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,p,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,F,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,te,4,2,"a",10),n.YNc(12,Q,4,2,"a",10),n.YNc(13,A,4,2,"a",10),n.qZA()()()(),n.BQk()),2&ie){const S=_e.ngIf,se=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",se),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",S.geneAliases.length>0),n.xp6(2),n.hij(" ",S.variants.totalCount," ")}}let $=(()=>{class ie{constructor(S){this.gql=S}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,a.U)(({data:S})=>null==S?void 0:S.gene),(0,z.h)(x.ep))}}return ie.\u0275fac=function(S){return new(S||ie)(n.Y36(C.rJ8))},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(S,se){1&S&&(n.TgZ(0,"div",0),n.YNc(1,c,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&S&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,se.gene$)))},directives:[s.O5,y.bd,T.Ls,j.R7,j.uj,s.sg,I.j,P.SK,P.t3,ee.NU,ee.$1,h.yS],pipes:[G.fM,L.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ie})();var D=i(1730),J=i(4557);function R(ie,_e){}function f(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,R,0,0,"ng-template",5),n.qZA(),n.BQk()),2&ie){const S=n.oxw(),se=n.MAs(2);n.xp6(1),n.Q6J("routerLink",S.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",se)}}function B(ie,_e){}function b(ie,_e){if(1&ie&&n._UZ(0,"cvc-gene-popover",8),2&ie){const S=n.oxw(2);n.Q6J("geneId",S.gene.id)}}function N(ie,_e){if(1&ie){const S=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(U){return n.CHM(S),n.oxw().itemClosed(U)}),n.YNc(1,B,0,0,"ng-template",5),n.qZA(),n.YNc(2,b,1,1,"ng-template",null,7,n.W1O)}if(2&ie){const S=n.MAs(3),se=n.oxw(),U=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",se.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",se.enablePopover?"hover":null)("nzMode",se.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",U)}}function ne(ie,_e){}function ce(ie,_e){if(1&ie&&n.YNc(0,ne,0,0,"ng-template",5),2&ie){n.oxw();const S=n.MAs(2);n.Q6J("ngTemplateOutlet",S)}}function he(ie,_e){if(1&ie&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&ie){const S=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,S.gene.name,12)," ")}}function Me(ie,_e){if(1&ie&&n._uU(0),2&ie){const S=n.oxw(2);n.hij(" ",S.gene.name," ")}}function Oe(ie,_e){if(1&ie&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,he,3,4,"ng-container",0),n.YNc(4,Me,1,1,"ng-template",null,11,n.W1O)),2&ie){const S=n.MAs(5),se=n.oxw();n.Q6J("flagged",se.gene.flagged)("entityColor",se.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",se.truncateLongName)("ngIfElse",S)}}let Ee=(()=>{class ie extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ie.\u0275fac=function(S){return new(S||ie)},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(S,se){if(1&S&&(n.YNc(0,f,3,2,"ng-container",0),n.YNc(1,N,4,5,"ng-template",null,1,n.W1O),n.YNc(3,ce,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Oe,6,7,"ng-template",null,3,n.W1O)),2&S){const U=n.MAs(4);n.Q6J("ngIf",se.linked)("ngIfElse",U)}},directives:[s.O5,h.yS,s.tP,I.j,l.lU,$,D.b,T.Ls],pipes:[L.a,J.W],styles:[""],changeDetection:0}),ie})()},3309:(me,Y,i)=>{i.d(Y,{U:()=>ee});var e=i(9808),o=i(325),n=i(8481),s=i(5017),h=i(3610),I=i(6905),l=i(6949),x=i(7484),a=i(3098),z=i(1894),C=i(8144),y=i(5e3);let T=(()=>{class G{}return G.\u0275fac=function(p){return new(p||G)},G.\u0275mod=y.oAB({type:G}),G.\u0275inj=y.cJS({imports:[[e.ez,o.Bz,l.WG,x.vh,z.Jb,a.q6,n.X,s.PV,C.zf,I.s]]}),G})();var j=i(4401),P=i(6429);let ee=(()=>{class G{}return G.\u0275fac=function(p){return new(p||G)},G.\u0275mod=y.oAB({type:G}),G.\u0275inj=y.cJS({imports:[[e.ez,o.Bz,n.X,h.$6,s.PV,j.mS,I.s,T,P.C]]}),G})()},1912:(me,Y,i)=>{i.d(Y,{s:()=>j});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),h=i(3640),l=i(2160),x=i(3762),a=i(5017);let z=(()=>{class P{constructor(G){this.cookies=G,this.location=function I(P){return encodeURIComponent(P).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return P.\u0275fac=function(G){return new(G||P)(e.Y36(l.N))},P.\u0275cmp=e.Xpm({type:P,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(G,L){1&G&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&G&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken))},directives:[x.n_,x.AA,o.ix,n.dQ,s.w,a.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),P})();function C(P,ee){1&P&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function y(P,ee){1&P&&e._uU(0," Sign In / Sign Up\n")}function T(P,ee){if(1&P){const G=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(G),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let j=(()=>{class P{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return P.\u0275fac=function(G){return new(G||P)},P.\u0275cmp=e.Xpm({type:P,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(G,L){if(1&G&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return L.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return L.authVisible=M})("nzOnCancel",function(){return L.handleCancel()}),e.YNc(4,C,4,0,"ng-container",2),e.qZA(),e.YNc(5,y,1,0,"ng-template",null,3,e.W1O),e.YNc(7,T,2,0,"ng-template",null,4,e.W1O)),2&G){const p=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",L.authVisible)("nzTitle",p)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,h.du,h.Hf,z],styles:["[_nghost-%COMP%]{display:inline-block}"]}),P})()},1844:(me,Y,i)=>{i.d(Y,{B:()=>x});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),h=i(5017),I=i(5e3);let l=(()=>{class a{}return a.\u0275fac=function(C){return new(C||a)},a.\u0275mod=I.oAB({type:a}),a.\u0275inj=I.cJS({imports:[[e.ez,h.PV,s.Ph,o.sL]]}),a})(),x=(()=>{class a{}return a.\u0275fac=function(C){return new(C||a)},a.\u0275mod=I.oAB({type:a}),a.\u0275inj=I.cJS({imports:[[e.ez,o.sL,n.Qp,l]]}),a})()},1730:(me,Y,i)=>{i.d(Y,{b:()=>a});var e=i(9771),o=i(5e3),n=i(9808);const s=function(z){return{background:z}};function h(z,C){if(1&z&&o._UZ(0,"div",3),2&z){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.flagColor))}}function I(z,C){if(1&z&&o._UZ(0,"div",4),2&z){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.entityColor))}}function l(z,C){if(1&z&&o._UZ(0,"div",5),2&z){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.entityColor))}}const x=["*"];let a=(()=>{class z{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return z.\u0275fac=function(y){return new(y||z)},z.\u0275cmp=o.Xpm({type:z,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:x,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(y,T){1&y&&(o.F$t(),o.Hsn(0),o.YNc(1,h,1,3,"div",0),o.YNc(2,I,1,3,"div",1),o.YNc(3,l,1,3,"div",2)),2&y&&(o.xp6(1),o.Q6J("ngIf",T.flagged),o.xp6(1),o.Q6J("ngIf",T.hasRevisions),o.xp6(1),o.Q6J("ngIf",T.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),z})()},6429:(me,Y,i)=>{i.d(Y,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),h})()},6550:(me,Y,i)=>{i.d(Y,{l:()=>I});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const h=["*"];let I=(()=>{class l{set href(a){if(!a)throw new Error("link-tag link Input requires string.");this._href=a}get href(){return this._href}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:h,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(a,z){1&a&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&a&&(e.Q6J("href",z.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",z.tooltip)("nzTooltipTrigger",z.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",z.iconName?z.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),l})()},4989:(me,Y,i)=>{i.d(Y,{X:()=>I});var e=i(9808),o=i(404),n=i(8481),s=i(5017),h=i(5e3);let I=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),l})()},7881:(me,Y,i)=>{i.d(Y,{L:()=>I});var e=i(5e3),o=i(9808),n=i(6699);function s(l,x){if(1&l&&e._UZ(0,"nz-avatar",2),2&l){const a=e.oxw();e.Q6J("nzSrc",a.user.profileImagePath)("nzShape",a.shape?a.shape:"circle")("nzSize",a.size)}}function h(l,x){if(1&l&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&l){const a=e.oxw();e.Q6J("nzSize",a.size)("nzText",e.lcZ(1,2,a.user.displayName.charAt(0)))}}let I=(()=>{class l{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(a,z){if(1&a&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,h,2,4,"ng-template",null,1,e.W1O)),2&a){const C=e.MAs(2);e.Q6J("ngIf",z.user.profileImagePath)("ngIfElse",C)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),l})()},5473:(me,Y,i)=>{i.d(Y,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),h})()},8664:(me,Y,i)=>{i.d(Y,{I:()=>U});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),h=i(325),I=i(8481),l=i(3610),x=i(3240),a=i(4850),z=i(2198),C=i(7630),y=i(7484),T=i(5017),j=i(3193),P=i(3098),ee=i(6550),G=i(1894),L=i(8144),p=i(6949),M=i(160);function F(V,H){if(1&V&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&V){const q=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",q.name," ")}}function te(V,H){if(1&V&&n._UZ(0,"cvc-gene-tag",14),2&V){const q=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",q.gene)}}function Q(V,H){if(1&V&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&V){const q=H.$implicit;n.xp6(1),n.Oqu(q)}}function A(V,H){if(1&V&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,Q,2,1,"nz-tag",16),n.qZA()),2&V){const q=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",q.variantAliases)}}function c(V,H){if(1&V&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&V){const q=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",q.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",q.alleleRegistryId," ")}}function $(V,H){if(1&V&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&V){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/flags"),n.xp6(3),n.hij(" Flags (",q.flags.totalCount,") ")}}function D(V,H){if(1&V&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&V){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",q.revisions.totalCount,") ")}}function J(V,H){if(1&V&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&V){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/comments"),n.xp6(3),n.hij(" Comments (",q.comments.totalCount,") ")}}function R(V,H){if(1&V&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,F,3,4,"ng-template",null,3,n.W1O),n.YNc(4,te,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,A,2,1,"nz-descriptions-item",6),n.YNc(8,c,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,$,4,2,"a",12),n.YNc(15,D,4,2,"a",12),n.YNc(16,J,4,2,"a",12),n.qZA()()()(),n.BQk()),2&V){const q=H.ngIf,Ce=n.MAs(3),re=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",Ce)("nzExtra",re),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",q.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf","unregistered"!=q.alleleRegistryId),n.xp6(2),n.hij(" ",q.evidenceItems.totalCount," ")}}let f=(()=>{class V{constructor(q){this.gql=q}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,a.U)(({data:q})=>null==q?void 0:q.variant),(0,z.h)(x.ep))}}return V.\u0275fac=function(q){return new(q||V)(n.Y36(C.ZYZ))},V.\u0275cmp=n.Xpm({type:V,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(q,Ce){1&q&&(n.TgZ(0,"div",0),n.YNc(1,R,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&q&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,Ce.variant$)))},directives:[s.O5,y.bd,T.Ls,j.H,P.R7,P.uj,s.sg,I.j,ee.l,G.SK,G.t3,L.NU,L.$1,h.yS],pipes:[p.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),V})();var B=i(1730),b=i(4557);function N(V,H){}function ne(V,H){if(1&V&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,N,0,0,"ng-template",5),n.qZA(),n.BQk()),2&V){const q=n.oxw(),Ce=n.MAs(2);n.xp6(1),n.Q6J("routerLink",q.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",Ce)}}function ce(V,H){}function he(V,H){if(1&V&&n._UZ(0,"cvc-variant-popover",9),2&V){const q=n.oxw(3);n.Q6J("variantId",q.variant.id)}}function Me(V,H){if(1&V&&n.YNc(0,he,1,1,"cvc-variant-popover",8),2&V){const q=n.oxw(2);n.Q6J("ngIf",q.enablePopover)}}function Oe(V,H){if(1&V){const q=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(re){return n.CHM(q),n.oxw().itemClosed(re)}),n.YNc(1,ce,0,0,"ng-template",5),n.qZA(),n.YNc(2,Me,1,1,"ng-template",null,7,n.W1O)}if(2&V){const q=n.MAs(3),Ce=n.oxw(),re=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",Ce.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Ce.enablePopover?"hover":null)("nzMode",Ce.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",re)}}function Ee(V,H){}function ie(V,H){if(1&V&&n.YNc(0,Ee,0,0,"ng-template",5),2&V){n.oxw();const q=n.MAs(2);n.Q6J("ngTemplateOutlet",q)}}function _e(V,H){if(1&V&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&V){const q=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,q.variant.name,20)," ")}}function S(V,H){if(1&V&&n._uU(0),2&V){const q=n.oxw(2);n.hij(" ",q.variant.name," ")}}function se(V,H){if(1&V&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,_e,3,4,"ng-container",0),n.YNc(3,S,1,1,"ng-template",null,12,n.W1O)),2&V){const q=n.MAs(4),Ce=n.oxw();n.Q6J("flagged",Ce.variant.flagged)("entityColor",Ce.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",Ce.iconColor),n.xp6(1),n.Q6J("ngIf",Ce.truncateLongName)("ngIfElse",q)}}let U=(()=>{class V extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return V.\u0275fac=function(q){return new(q||V)},V.\u0275cmp=n.Xpm({type:V,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(q,Ce){if(1&q&&(n.YNc(0,ne,3,2,"ng-container",0),n.YNc(1,Oe,4,5,"ng-template",null,1,n.W1O),n.YNc(3,ie,1,1,"ng-template",null,2,n.W1O),n.YNc(5,se,5,5,"ng-template",null,3,n.W1O)),2&q){const re=n.MAs(4);n.Q6J("ngIf",Ce.linked)("ngIfElse",re)}},directives:[s.O5,h.yS,s.tP,I.j,l.lU,f,B.b,T.Ls],pipes:[b.W],styles:[""],changeDetection:0}),V})()},4867:(me,Y,i)=>{i.d(Y,{Q:()=>G});var e=i(9808),o=i(325),n=i(8481),s=i(5017),h=i(3610),I=i(6949),l=i(7484),x=i(1894),a=i(3098),z=i(8144),C=i(3309),y=i(4989),T=i(6905),j=i(5e3);let P=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,I.WG,l.vh,x.Jb,a.q6,n.X,s.PV,z.zf,T.s,C.U,y.X]]}),L})();var ee=i(6429);let G=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,n.X,h.$6,s.PV,T.s,P,ee.C]]}),L})()},160:(me,Y,i)=>{i.d(Y,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(I){return(0,e.f)(I)}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(me,Y,i)=>{i.d(Y,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(I){this.sanitizer=I}transform(I,l){if(!l||""==l)return I;const x=new RegExp(l,"gi"),a=I.match(x);if(!a)return I;let z=I.replace(x,`<span class='typeahead-match'>${a[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(z)}}return s.\u0275fac=function(I){return new(I||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(me,Y,i)=>{i.d(Y,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),h})()},7742:(me,Y,i)=>{i.d(Y,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(I){return I?(0,e.c)(I):""}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(me,Y,i)=>{i.d(Y,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(h,I=25){if(h.length>I){let x=h.slice(0,I);var l=x.lastIndexOf(" ");return x.slice(0,l)+"\u2026"}return h}}return n.\u0275fac=function(h){return new(h||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(me,Y,i)=>{i.d(Y,{a:()=>z});var e=i(655),o=i(7630),n=i(4987),s=i(373),h=i(4850),I=i(1059),l=i(5154),x=i(5e3),a=i(520);let z=class{constructor(y,T){function j(M){return!(!M||M.role!==o.i44.Admin)}function P(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function ee(M){return!(!M||M.role!==o.i44.Curator)}function G(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function L(M){var F,te;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===(F=M.mostRecentConflictOfInterestStatement)||void 0===F?void 0:F.coiStatus)!=o.Mgx.Conflict&&(null===(te=M.mostRecentConflictOfInterestStatement)||void 0===te?void 0:te.coiStatus)!=o.Mgx.Valid)}function p(M){if(M.mostRecentOrganizationId)return M.organizations.find(F=>F.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=y,this.http=T,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,h.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:G(M),canModerate:L(M),isAdmin:j(M),isEditor:P(M),isCurator:ee(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:p(M),invalidCoi:P(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,I.O)(this.initialViewer),(0,l.d)(1)),this.signedIn$=this.viewer$.pipe((0,h.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,h.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,h.U)(M=>j(M))),this.isEditor$=this.viewer$.pipe((0,h.U)(M=>P(M))),this.isCurator$=this.viewer$.pipe((0,h.U)(M=>ee(M))),this.canCurate$=this.viewer$.pipe((0,h.U)(M=>G(M))),this.canModerate$=this.viewer$.pipe((0,h.U)(M=>L(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};z.\u0275fac=function(y){return new(y||z)(x.LFG(o.Tt7),x.LFG(a.eN))},z.\u0275prov=x.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z=(0,e.gn)([(0,n.c)()],z)},6654:(me,Y,i)=>{i.d(Y,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(h){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(h){return new(h||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(h,I){},encapsulation:2}),n})()},915:(me,Y,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(Y,{E:()=>e})},6530:(me,Y,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return o}}i.d(Y,{c:()=>e})},9771:(me,Y,i)=>{i.d(Y,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(n){let s="#AAAAAA";if(n){const h=e.get(n);h&&(s=h)}return s}},6123:(me,Y,i)=>{i.d(Y,{U:()=>h});var e=i(8929),o=i(591),n=i(7625),s=i(537);class h{constructor(l){this.networkErrorService=l}mutate(l,x,a,z){let C=new e.xQ,y={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{C.next(),C.complete()}};return y.isSubmitting$.next(!0),l.mutate(x,a).pipe((0,n.R)(C),(0,s.x)(()=>{y.isSubmitting$.next(!1)})).subscribe({next:T=>{T.data&&z&&z(T.data)},error:T=>{T.graphQLErrors.length>0?y.submitError$.next(T.graphQLErrors.map(j=>j.message)):T.networkError&&this.networkErrorService.networkError$.next(T.networkError),y.cleanup()},complete:()=>{y.submitError$.next([]),y.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),y.cleanup()}}),y}}},9397:(me,Y,i)=>{i.d(Y,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(h){this.host=h,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(h){return new(h||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(me,Y,i)=>{i.d(Y,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(me,Y,i)=>{i.d(Y,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(I,l){1&I&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(me,Y,i)=>{i.d(Y,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(me,Y,i)=>{i.d(Y,{V:()=>x});var e=i(5e3),o=i(9808),n=i(2359);function s(a,z){if(1&a&&e._UZ(0,"nz-alert",4),2&a){const C=e.oxw();e.Q6J("nzDescription",C.errors[0])}}function h(a,z){if(1&a&&e._UZ(0,"nz-alert",5),2&a){e.oxw();const C=e.MAs(3);e.Q6J("nzDescription",C)}}function I(a,z){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const C=z.$implicit;e.xp6(1),e.Oqu(C)}}function l(a,z){if(1&a&&(e.TgZ(0,"ul",6),e.YNc(1,I,2,1,"li",7),e.qZA()),2&a){const C=e.oxw();e.xp6(1),e.Q6J("ngForOf",C.errors)}}let x=(()=>{class a{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return a.\u0275fac=function(C){return new(C||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(C,y){1&C&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,h,1,1,"nz-alert",1),e.YNc(2,l,2,1,"ng-template",2,3,e.W1O)),2&C&&(e.Q6J("ngIf",1===y.errors.length),e.xp6(1),e.Q6J("ngIf",y.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),a})()},7008:(me,Y,i)=>{i.d(Y,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),h})()},6789:(me,Y,i)=>{i.d(Y,{_:()=>y});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),h=i(6949),I=i(9552),l=i(8776),x=i(5017),a=i(404),z=i(5e3);let C=(()=>{class T{}return T.\u0275fac=function(P){return new(P||T)},T.\u0275mod=z.oAB({type:T}),T.\u0275inj=z.cJS({imports:[[e.ez,h.WG,l.X0,I.j,s.cD,x.PV,a.cg,n.s]]}),T})(),y=(()=>{class T{}return T.\u0275fac=function(P){return new(P||T)},T.\u0275mod=z.oAB({type:T}),T.\u0275inj=z.cJS({imports:[[e.ez,h.WG,l.X0,o.vh,I.j,s.cD,x.PV,a.cg,C,n.s]]}),T})()},1825:(me,Y,i)=>{i.d(Y,{A:()=>l});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),h=i(6949),I=i(5e3);let l=(()=>{class x{}return x.\u0275fac=function(z){return new(z||x)},x.\u0275mod=I.oAB({type:x}),x.\u0275inj=I.cJS({imports:[[e.ez,h.WG,o.sL,n.Rt,s.b1]]}),x})()},6612:(me,Y,i)=>{i.d(Y,{m:()=>x});var e=i(655),o=i(5e3),n=i(4987),s=i(5254),h=i(5778),l=i(4850);let x=class{constructor(z){this.el=z,this.domChange=new o.vpe,this.changes=new MutationObserver(C=>{(0,s.D)(C).pipe((0,l.U)(y=>{const T=y.target;return"class"===y.attributeName?{type:"class",change:T.classList.value,key:`${y.attributeName}:${T.classList.value}`}:"disabled"===y.attributeName?{type:"disabled",change:T.disabled,key:`${y.attributeName}:${T.disabled}`}:"hidden"===y.attributeName?{type:"hidden",change:T.hidden,key:`${y.attributeName}:${T.hidden}`}:{type:y.attributeName,change:"unknown change type",key:`${y.attributeName}:unknown-change-type`}}),function I(a,z){return(0,h.x)((C,y)=>z?z(C[a],y[a]):C[a]===y[a])}("key"),(0,n.t)(this)).subscribe(y=>{this.domChange.emit(y)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`),this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}};x.\u0275fac=function(z){return new(z||x)(o.Y36(o.SBq))},x.\u0275dir=o.lG2({type:x,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),x=(0,e.gn)([(0,n.c)()],x)},7905:(me,Y,i)=>{i.d(Y,{nT:()=>I,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(l=s||(s={})).EVIDENCE="Evidence",l.ASSERTION="Assertion",s;var l})();class I{constructor(x){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(a=>a):(0,n.o6)(o.kqt).map(a=>a),this.getSignificanceOptions=a=>{const z=this.validStates.get(a);return(null==z?void 0:z.clinicalSignificance)||[]},this.isValidSignificanceOption=(a,z)=>{const C=this.validStates.get(a);return!C||C.clinicalSignificance.includes(z)},this.getDirectionOptions=a=>{const z=this.validStates.get(a);return(null==z?void 0:z.entityDirection)||[]},this.isValidDirectionOption=(a,z)=>{const C=this.validStates.get(a);return!C||C.entityDirection.includes(z)},this.requiresDrug=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresDrug},this.requiresDisease=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresDisease},this.requiresAcmgCodes=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresAcmgCodes},this.requiresAmpLevel=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresAmpLevel},this.requiresClingenCodes=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresClingenCodes},this.allowsFdaApproval=a=>{const z=this.validStates.get(a);return void 0===z||z.allowsFdaApproval},this.getOptionsFromEnums=a=>0===a.length?[]:a.map(z=>({value:z,label:(0,e.E)(z)})),this.entityName=x,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(me,Y,i)=>{i.d(Y,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,clinicalSignificance:[e._Aq.Sensitivityresponse,e._Aq.Resistance,e._Aq.AdverseResponse,e._Aq.ReducedSensitivity,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,clinicalSignificance:[e._Aq.Positive,e._Aq.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,clinicalSignificance:[e._Aq.BetterOutcome,e._Aq.PoorOutcome,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,clinicalSignificance:[e._Aq.Oncogenicity,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,clinicalSignificance:[e._Aq.Predisposition,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,clinicalSignificance:[e._Aq.GainOfFunction,e._Aq.LossOfFunction,e._Aq.UnalteredFunction,e._Aq.Neomorphic,e._Aq.DominantNegative,e._Aq.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(me,Y,i)=>{i.d(Y,{E:()=>j});var e=i(9808),o=i(3075),n=i(325),s=i(8776),h=i(304),I=i(6042),l=i(5e3),x=i(2643),a=i(2683);function z(P,ee){if(1&P){const G=l.EpF();l.TgZ(0,"button",2),l.NdJ("click",function(){return l.CHM(G),l.oxw().callOnClick()}),l._uU(1," Cancel\n"),l.qZA()}}function C(P,ee){if(1&P&&(l.TgZ(0,"button",3),l._uU(1," Cancel "),l.qZA()),2&P){const G=l.oxw();l.Q6J("routerLink",G.redirectPath)}}const T={name:"cancel-button",component:(()=>{class P extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var G,L,p,M;(null===(G=this.field.templateOptions)||void 0===G?void 0:G.onClick)?this.callOnClick=null===(L=this.field.templateOptions)||void 0===L?void 0:L.onClick:(null===(p=this.field.templateOptions)||void 0===p?void 0:p.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return P.\u0275fac=function(){let ee;return function(L){return(ee||(ee=l.n5z(P)))(L||P)}}(),P.\u0275cmp=l.Xpm({type:P,selectors:[["cvc-cancel-button"]],features:[l.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(G,L){if(1&G&&(l.YNc(0,z,2,0,"button",0),l.YNc(1,C,2,1,"ng-template",null,1,l.W1O)),2&G){const p=l.MAs(2);l.Q6J("ngIf",L.callOnClick)("ngIfElse",p)}},directives:[e.O5,I.ix,x.dQ,a.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),P})()};let j=(()=>{class P{}return P.\u0275fac=function(G){return new(G||P)},P.\u0275mod=l.oAB({type:P}),P.\u0275inj=l.cJS({imports:[[e.ez,o.u5,o.UX,I.sL,n.Bz,h.F,s.X0.forChild({types:[T]})]]}),P})()},4623:(me,Y,i)=>{i.d(Y,{K:()=>z});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),h=i(3075);const l={name:"comment-textarea",component:(()=>{class C extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(T,j)=>{var P;return`Comments must be at least ${null===(P=j.templateOptions)||void 0===P?void 0:P.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return C.\u0275fac=function(){let y;return function(j){return(y||(y=n.n5z(C)))(j||C)}}(),C.\u0275cmp=n.Xpm({type:C,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(T,j){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",j.formControl)("formlyAttributes",j.field)},directives:[s.Zp,h.Fj,h.JJ,h.oH,o.VQ],styles:[""],changeDetection:0}),C})(),wrappers:["form-field"]};var x=i(4546),a=i(9139);let z=(()=>{class C{}return C.\u0275fac=function(T){return new(T||C)},C.\u0275mod=n.oAB({type:C}),C.\u0275inj=n.cJS({imports:[[e.ez,h.UX,o.X0.forChild({types:[l]}),a.u,x.U5,s.o7]]}),C})()},7055:(me,Y,i)=>{i.d(Y,{N:()=>A});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),h=i(1047),I=i(5017),l=i(5e3),x=i(1894),a=i(8481),z=i(2683),C=i(6042),y=i(2643);function T(c,$){if(1&c){const D=l.EpF();l.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),l.NdJ("click",function(R){return l.CHM(D),l.oxw().addField(R)}),l._UZ(3,"i",5),l._uU(4),l.qZA()()()}if(2&c){const D=l.oxw();l.xp6(1),l.Q6J("nzValidateStatus",D.errorState),l.xp6(3),l.hij(" ",D.to.addText," ")}}function j(c,$){if(1&c){const D=l.EpF();l.TgZ(0,"nz-tag",4),l.NdJ("click",function(R){return l.CHM(D),l.oxw(4).addField(R)}),l._UZ(1,"i",5),l._uU(2),l.qZA()}if(2&c){const D=l.oxw(4);l.xp6(2),l.hij(" ",D.to.addText," ")}}function P(c,$){if(1&c&&(l.TgZ(0,"div",11),l.YNc(1,j,3,1,"nz-tag",12),l.qZA()),2&c){const D=l.oxw(2).$implicit,J=l.oxw();l.xp6(1),l.Q6J("ngIf",0==J.to.maxCount||J.to.maxCount>D.model.length)}}function ee(c,$){if(1&c){const D=l.EpF();l.ynx(0),l.TgZ(1,"nz-tag",8)(2,"i",9),l.NdJ("click",function(){l.CHM(D);const R=l.oxw().index;return l.oxw().remove(R)}),l.qZA()(),l.YNc(3,P,2,1,"div",10),l.BQk()}if(2&c){const D=l.oxw().last;l.xp6(3),l.Q6J("ngIf",D)}}function G(c,$){if(1&c){const D=l.EpF();l.ynx(0),l.TgZ(1,"div",13)(2,"button",14),l.NdJ("click",function(){l.CHM(D);const R=l.oxw().index;return l.oxw().remove(R)}),l._UZ(3,"i",15),l.qZA()(),l.BQk()}}function L(c,$){if(1&c&&(l.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),l._UZ(3,"formly-field",7),l.qZA(),l.YNc(4,ee,4,1,"ng-container",1),l.YNc(5,G,4,0,"ng-container",1),l.qZA()()),2&c){const D=$.$implicit,J=$.index;l.xp6(2),l.Q6J("ngClass",D.model[J]?"selected-field-col":"default-field-col"),l.xp6(1),l.Q6J("field",D),l.xp6(1),l.Q6J("ngIf",D.model[J]),l.xp6(1),l.Q6J("ngIf",!D.model[J])}}const p=function(c){return{hidden:c}},F={name:"multi-field",component:(()=>{class c extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(D){D&&D.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return c.\u0275fac=function(D){return new(D||c)},c.\u0275cmp=l.Xpm({type:c,selectors:[["cvc-multi-field-type"]],features:[l.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(D,J){1&D&&(l.TgZ(0,"div",0),l.YNc(1,T,5,2,"nz-form-item",1),l.YNc(2,L,6,4,"nz-form-item",2),l.qZA()),2&D&&(l.Q6J("ngClass",l.VKq(3,p,!0===J.to.hidden)),l.xp6(1),l.Q6J("ngIf",0===(null==J.field.fieldGroup?null:J.field.fieldGroup.length)),l.xp6(1),l.Q6J("ngForOf",J.field.fieldGroup))},directives:[e.mk,e.O5,x.SK,s.Nx,x.t3,s.Fd,a.j,I.Ls,z.w,e.sg,n.cw,C.ix,y.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),c})()};var te=i(7102),Q=i(1017);let A=(()=>{class c{}return c.\u0275fac=function(D){return new(D||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[F]}),o.UX,te.a,s.U5,h.o7,I.PV,C.sL,Q.s,a.X]]}),c})()},7462:(me,Y,i)=>{i.d(Y,{o:()=>x});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),h=i(3075);const l={name:"cvc-textarea",component:(()=>{class a extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return a.\u0275fac=function(){let z;return function(y){return(z||(z=n.n5z(a)))(y||a)}}(),a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(C,y){1&C&&n._UZ(0,"textarea",0),2&C&&n.Q6J("formControl",y.formControl)("formlyAttributes",y.field)("nzAutosize",y.to.autosize)("placeholder",y.to.placeholder)},directives:[s.Zp,h.Fj,s.rh,h.JJ,h.oH,o.VQ],styles:[""],changeDetection:0}),a})(),wrappers:["form-field"]};let x=(()=>{class a{}return a.\u0275fac=function(C){return new(C||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[e.ez,h.u5,h.UX,o.X0.forChild({types:[l]}),s.o7]]}),a})()},4181:(me,Y,i)=>{i.d(Y,{O:()=>Ce});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),h=i(4987),I=i(8776),l=i(591),x=i(3240),a=i(1307),z=i(373),C=i(2198),y=i(4850),T=i(7630),j=i(9169),P=i(8054),ee=i(9397),G=i(3075),L=i(8144),p=i(3618),M=i(8664),F=i(685),te=i(822),Q=i(6042),A=i(2643),c=i(2683),$=i(5017),D=i(6949),J=i(8926);function R(re,ge){if(1&re&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&re){const ae=n.oxw().$implicit,ze=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,ae.label,ze.to.searchString),n.oJD)}}function f(re,ge){1&re&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function B(re,ge){if(1&re&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,f,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&re){const ae=n.oxw().$implicit,ze=n.oxw(2);n.xp6(1),n.hij(" ID: ",ae.variant.id," "),n.xp6(1),n.Q6J("ngIf",ae.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,ae.variant.variantAliases.join(", "),ze.to.searchString),n.oJD)}}function b(re,ge){1&re&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,R,2,4,"span",7),n.YNc(3,B,5,6,"span",8),n.qZA()()),2&re&&n.Q6J("nzValue",ge.$implicit.variant)}function N(re,ge){if(1&re){const ae=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(w){return n.CHM(ae),n.oxw().to.onSearch(w)}),n.YNc(2,b,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&re){const ae=n.oxw(),ze=n.MAs(6),w=n.MAs(4);n.xp6(1),n.Q6J("formControl",ae.formControl)("formlyAttributes",ae.field)("nzPlaceHolder",ae.to.placeholder?ae.to.placeholder:null)("nzDropdownRender",ae.to.allowCreate?ze:null)("nzShowArrow",ae.to.showArrow)("nzNotFoundContent",w),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,ae.variants$))}}function ne(re,ge){if(1&re&&n._UZ(0,"cvc-variant-tag",12),2&re){const ae=n.oxw();n.Q6J("variant",ae.formControl.value)}}function ce(re,ge){if(1&re&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&re){const ae=n.oxw(2);n.xp6(2),n.Oqu(ae.to.searchString)}}function he(re,ge){if(1&re&&(n._UZ(0,"nz-empty",13),n.YNc(1,ce,4,1,"ng-template",null,14,n.W1O)),2&re){const ae=n.MAs(2);n.Q6J("nzNotFoundContent",ae)}}function Me(re,ge){if(1&re&&n._UZ(0,"cvc-form-errors-alert",18),2&re){const ae=n.oxw(4);n.Q6J("errors",ae.errorMessages)}}function Oe(re,ge){if(1&re){const ae=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(ae);const w=n.oxw(4);return w.addVariant(w.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&re){const ae=n.oxw(4);n.Q6J("nzLoading",ae.loading),n.xp6(4),n.Oqu(ae.to.searchString)}}function Ee(re,ge){if(1&re&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,Me,1,1,"cvc-form-errors-alert",16),n.YNc(3,Oe,6,2,"button",17),n.qZA(),n.BQk()),2&re){const ae=n.oxw(3);n.xp6(2),n.Q6J("ngIf",ae.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==ae.errorMessages.length)}}function ie(re,ge){if(1&re&&(n.ynx(0),n.YNc(1,Ee,4,2,"ng-container",11),n.BQk()),2&re){const ae=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==ae.to.searchString)}}function _e(re,ge){if(1&re&&(n.YNc(0,ie,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&re){const ae=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,ae.displayAdd$))}}let S=class extends I.fS{constructor(ge,ae,ze){super(),this.variantTypeaheadQuery=ge,this.networkErrorService=ae,this.addVariantGQL=ze,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new l.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(w,pe,Z)=>{var ye,Pe;let xe=null===(Pe=null===(ye=null==Z?void 0:Z.parent)||void 0===ye?void 0:ye.parent)||void 0===Pe?void 0:Pe.model;if(xe&&xe.gene&&xe.gene[0])return xe.gene[0].id}}}}ngOnInit(){var ge,ae;this.callbackSub=null===(ae=null===(ge=this.field)||void 0===ge?void 0:ge.formControl)||void 0===ae?void 0:ae.valueChanges.subscribe(ze=>this.onVariantSelected.emit(ze.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,a.T)(1),(0,z.j)("data","variants","nodes"),(0,C.h)(x.ep),(0,y.U)(ze=>ze.map(pe=>({value:pe.id,label:pe.name,variant:pe}))))}ngAfterViewInit(){this.to.onSearch=ge=>{ge.length<this.to.minLengthSearch||(this.to.searchString=ge,this.errorMessages=[],this.queryRef.refetch({name:ge,geneId:this.to.geneId}).then(ae=>{this.displayAdd$.next(0==ae.data.variants.nodes.filter(ze=>ze.name.toUpperCase()==ge.toUpperCase()).length)}))}}addVariant(ge){if(ge&&""!=ge&&this.to.geneId){let ae=this.addVariantMutator.mutate(this.addVariantGQL,{name:ge,geneId:this.to.geneId},{},ze=>{var w;null===(w=this.field.formControl)||void 0===w||w.setValue({id:ze.addVariant.variant.id,name:ze.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0});ae.submitSuccess$.pipe((0,h.t)(this)).subscribe(ze=>{ze&&(this.success=!0)}),ae.submitError$.pipe((0,h.t)(this)).subscribe(ze=>{ze&&(this.errorMessages=ze,this.success=!1)}),ae.isSubmitting$.pipe((0,h.t)(this)).subscribe(ze=>{this.loading=ze})}}ngOnDestroy(){var ge;null===(ge=this.callbackSub)||void 0===ge||ge.unsubscribe()}};S.\u0275fac=function(ge){return new(ge||S)(n.Y36(T._eC),n.Y36(j.Y),n.Y36(T.LUc))},S.\u0275cmp=n.Xpm({type:S,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(ge,ae){if(1&ge&&(n.YNc(0,N,4,9,"ng-container",0),n.YNc(1,ne,1,1,"ng-template",null,1,n.W1O),n.YNc(3,he,3,1,"ng-template",null,2,n.W1O),n.YNc(5,_e,2,3,"ng-template",null,3,n.W1O)),2&ge){const ze=n.MAs(2);n.Q6J("ngIf",!(null!=ae.formControl.value&&ae.formControl.value.id))("ngIfElse",ze)}},directives:[e.O5,P.Vq,ee.l,G.JJ,G.oH,I.VQ,e.sg,P.Ip,L.NU,L.$1,p.ZU,M.I,F.p9,te.V,Q.ix,A.dQ,c.w,$.Ls],pipes:[D.fM,J.A],styles:[""],changeDetection:0}),S=(0,o.gn)([(0,h.c)()],S);const se={name:"variant-input",component:S};var U=i(4867),V=i(7008),H=i(6905),q=i(8616);let Ce=(()=>{class re{}return re.\u0275fac=function(ae){return new(ae||re)},re.\u0275mod=n.oAB({type:re}),re.\u0275inj=n.cJS({imports:[[e.ez,G.UX,D.WG,I.X0.forChild({types:[se]}),P.LV,Q.sL,$.PV,L.zf,p.ZJ,F.Xo,U.Q,V.B,H.s,q.Y]]}),re})()},7102:(me,Y,i)=>{i.d(Y,{a:()=>z});var e=i(9808),o=i(8776),n=i(3075),s=i(4546),h=i(5e3),I=i(1894);function l(C,y){if(1&C&&h._UZ(0,"formly-validation-message",3),2&C){const T=h.oxw();h.Q6J("field",T.field)}}const a={name:"cvc-field-errors",component:(()=>{class C extends o.n2{get errorState(){return this.showError?"error":""}}return C.\u0275fac=function(){let y;return function(j){return(y||(y=h.n5z(C)))(j||C)}}(),C.\u0275cmp=h.Xpm({type:C,selectors:[["cvc-field-errors-wrapper"]],features:[h.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(T,j){if(1&T&&(h.TgZ(0,"nz-form-control",0)(1,"p"),h._uU(2),h.qZA(),h.GkF(3,null,1),h.YNc(5,l,1,1,"ng-template",null,2,h.W1O),h.qZA()),2&T){const P=h.MAs(6);h.Q6J("nzValidateStatus",j.errorState)("nzErrorTip",P),h.xp6(2),h.hij("errorState: ",j.errorState,"")}},directives:[I.t3,s.Fd,o.u_],encapsulation:2,changeDetection:0}),C})()};let z=(()=>{class C{}return C.\u0275fac=function(T){return new(T||C)},C.\u0275mod=h.oAB({type:C}),C.\u0275inj=h.cJS({imports:[[e.ez,n.UX,s.U5,o.X0.forChild({wrappers:[a]})]]}),C})()},5472:(me,Y,i)=>{i.d(Y,{r:()=>y});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),h=i(5482),I=i(1894),l=i(1017),x=i(6789),a=i(5e3);const C={wrappers:[{name:"form-container",component:(()=>{class T extends n.n2{}return T.\u0275fac=function(){let j;return function(ee){return(j||(j=a.n5z(T)))(ee||T)}}(),T.\u0275cmp=a.Xpm({type:T,selectors:[["cvc-form-container-wrapper"]],features:[a.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(P,ee){1&P&&(a.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA()()()),2&P&&(a.xp6(2),a.Q6J("nzTitle",ee.to.label))},directives:[I.SK,I.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),T})()}]};let y=(()=>{class T{}return T.\u0275fac=function(P){return new(P||T)},T.\u0275mod=a.oAB({type:T}),T.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild(C),I.Jb,s.vh,h.cD,x._,l.s]]}),T})()},7695:(me,Y,i)=>{i.d(Y,{C:()=>A});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),h=i(5482),I=i(1894),l=i(1017),x=i(6789),a=i(5e3),z=i(9552),C=i(5017),y=i(404);function T(c,$){1&c&&a._UZ(0,"div",9),2&c&&a.Q6J("innerHtml",$.ngIf,a.oJD)}function j(c,$){1&c&&(a.TgZ(0,"div",10),a._uU(1,"Help not available for this field."),a.qZA())}function P(c,$){if(1&c&&(a.TgZ(0,"nz-collapse-panel",6),a.YNc(1,T,1,1,"div",7),a.YNc(2,j,2,0,"ng-template",null,8,a.W1O),a.qZA()),2&c){const D=$.ngIf,J=a.MAs(3),R=a.oxw().$implicit,f=a.MAs(3);a.Q6J("nzHeader",D)("nzActive",R.templateOptions.hasFocus)("nzExtra",f),a.xp6(1),a.Q6J("ngIf",null==R.templateOptions?null:R.templateOptions.helpText)("ngIfElse",J)}}function ee(c,$){if(1&c&&a._UZ(0,"formly-validation-message",14),2&c){const D=a.oxw(4).$implicit;a.Q6J("field",D)}}function G(c,$){if(1&c&&(a.ynx(0),a._UZ(1,"i",12),a.YNc(2,ee,1,1,"ng-template",null,13,a.W1O),a.BQk()),2&c){const D=a.MAs(3);a.xp6(1),a.Q6J("nzTooltipTitle",D)}}function L(c,$){if(1&c&&(a.ynx(0),a.YNc(1,G,4,1,"ng-container",11),a.BQk()),2&c){const D=$.ngIf;a.xp6(1),a.Q6J("ngIf","INVALID"===D)}}function p(c,$){if(1&c&&(a.YNc(0,L,2,1,"ng-container",11),a.ALo(1,"ngrxPush")),2&c){const D=a.oxw().$implicit;a.Q6J("ngIf",a.lcZ(1,1,D.formControl.statusChanges))}}function M(c,$){if(1&c&&(a.ynx(0),a.YNc(1,P,4,5,"nz-collapse-panel",4),a.YNc(2,p,2,3,"ng-template",null,5,a.W1O),a.BQk()),2&c){const D=$.$implicit;a.xp6(1),a.Q6J("ngIf",null==D.templateOptions?null:D.templateOptions.label)}}let F=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(D){return new(D||c)},c.\u0275cmp=a.Xpm({type:c,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(D,J){1&D&&(a.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),a.YNc(3,M,4,1,"ng-container",3),a.qZA()()()),2&D&&(a.Q6J("nzOffsetTop",0)("nzTarget",J.affixTo),a.xp6(2),a.Q6J("nzBordered",!1),a.xp6(1),a.Q6J("ngForOf",J.fieldGroup))},directives:[z.$,s.bd,h.yH,e.sg,e.O5,h.Zv,C.Ls,y.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),c})();const Q={name:"form-info",component:(()=>{class c extends n.n2{}return c.\u0275fac=function(){let $;return function(J){return($||($=a.n5z(c)))(J||c)}}(),c.\u0275cmp=a.Xpm({type:c,selectors:[["cvc-form-info-wrapper"]],features:[a.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(D,J){if(1&D&&(a.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),a.GkF(3,null,3),a.qZA()(),a.TgZ(5,"nz-col",1)(6,"div",null,4),a._UZ(8,"cvc-form-info-card",5),a.qZA()()()),2&D){const R=a.MAs(7);a.xp6(1),a.Q6J("nzSpan",16),a.xp6(1),a.Q6J("nzTitle",J.to.label),a.xp6(3),a.Q6J("nzSpan",8),a.xp6(3),a.Q6J("fieldGroup",J.field.fieldGroup)("affixTo",R)}},directives:[I.SK,I.t3,s.bd,F],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),c})()};let A=(()=>{class c{}return c.\u0275fac=function(D){return new(D||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[Q]}),I.Jb,s.vh,h.cD,x._,l.s]]}),c})()},8785:(me,Y,i)=>{i.d(Y,{t:()=>te});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),h=i(7630),I=i(9169),l=i(7484),x=i(9808),a=i(2359),z=i(1894),C=i(4546),y=i(822),T=i(7525),j=i(3868),P=i(3075),ee=i(6042),G=i(2643),L=i(2683);function p(Q,A){1&Q&&e._UZ(0,"nz-alert",7)}function M(Q,A){if(1&Q&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&Q){const c=e.oxw();e.xp6(1),e.Q6J("errors",c.errorMessages)}}function F(Q,A){if(1&Q){const c=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(D){return e.CHM(c),e.oxw().coiText=D}),e.qZA()()}if(2&Q){const c=e.oxw();e.xp6(1),e.Q6J("ngModel",c.coiText)}}let te=(()=>{class Q{constructor(c,$){this.updateCoiGql=c,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U($)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let $=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});$.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{D&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),$.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{D&&(this.errorMessages=D,this.success=!1)}),$.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{this.loading=D})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Q.\u0275fac=function(c){return new(c||Q)(e.Y36(h.IP1),e.Y36(I.Y))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(c,$){1&c&&(e.TgZ(0,"nz-card"),e.YNc(1,p,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(J){return $.coiStatus=J}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,F,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return $.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&c&&(e.xp6(1),e.Q6J("ngIf",$.success),e.xp6(1),e.Q6J("ngIf",$.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",$.loading),e.xp6(2),e.Q6J("ngModel",$.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===$.coiStatus),e.xp6(2),e.Q6J("disabled",$.loading||"coiPresent"===$.coiStatus&&(void 0===$.coiText||$.coiText.length<10)))},directives:[l.bd,x.O5,a.r,z.SK,C.Nx,y.V,T.W,j.Dg,P.JJ,P.On,j.Of,P.Fj,ee.ix,G.dQ,L.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),Q})()},330:(me,Y,i)=>{i.d(Y,{e:()=>y});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),h=i(2359),I=i(4546),l=i(7008),x=i(3868),a=i(7525),z=i(6042),C=i(5e3);let y=(()=>{class T{}return T.\u0275fac=function(P){return new(P||T)},T.\u0275mod=C.oAB({type:T}),T.\u0275inj=C.cJS({imports:[[e.ez,o.u5,I.U5,o.UX,n.WG,s.vh,h.L,x.aF,z.sL,a.j,l.B]]}),T})()},3434:(me,Y,i)=>{i.d(Y,{G:()=>te});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),h=i(6123),I=i(7625),l=i(7630),x=i(9169),a=i(325),z=i(7525),C=i(4546),y=i(9808),T=i(8776),j=i(1894),P=i(822),ee=i(2359);function G(Q,A){1&Q&&e.GkF(0)}function L(Q,A){if(1&Q&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&Q){const c=e.oxw(2);e.xp6(1),e.Q6J("errors",c.errorMessages)}}function p(Q,A){if(1&Q&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&Q){const c=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",c.newId,"/summary")}}function M(Q,A){if(1&Q&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,p,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&Q){const c=e.MAs(3),$=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",$.isNew?"Variant Created":"Variant Already Exists")("nzDescription",c)}}function F(Q,A){if(1&Q&&(e.YNc(0,L,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&Q){const c=e.oxw();e.Q6J("ngIf",c.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",c.success)}}let te=(()=>{class Q{constructor(c,$,D){this.submitVariantGQL=c,this.networkErrorService=$,this.route=D,this.onVariantSelected=new e.vpe,this.allowCreate=!0,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formFields=[],this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new h.U($)}ngOnInit(){this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,maxCount:1,allowCreate:this.allowCreate}}]}]}submitVariant(c){let $=null==c?void 0:c.fields.gene[0].id,D=null==c?void 0:c.fields.variant[0].name;if($&&D){let R=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:$,name:D},{},f=>{this.newId=f.addVariant.variant.id,this.isNew=f.addVariant.new,this.onVariantSelected.emit({variantId:f.addVariant.variant.id,molecularProfile:f.addVariant.variant.singleVariantMolecularProfile})});R.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(f=>{f&&(this.success=!0)}),R.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(f=>{f&&(this.errorMessages=f,this.success=!1)}),R.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(f=>{this.loading=f})}}onFormModelChange(c){this.formModel=c,c.fields.variant&&c.fields.variant[0]&&this.onVariantSelected.emit({variantId:c.fields.variant[0].id,molecularProfile:c.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Q.\u0275fac=function(c){return new(c||Q)(e.Y36(l.LUc),e.Y36(x.Y),e.Y36(a.gz))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["cvc-variant-submit-form"]],inputs:{allowCreate:"allowCreate"},outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(c,$){if(1&c&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return $.submitVariant($.formModel)}),e.YNc(2,G,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(J){return $.onFormModelChange(J)}),e.qZA()()(),e.YNc(4,F,2,2,"ng-template",null,4,e.W1O)),2&c){const D=e.MAs(5);e.Q6J("nzSpinning",$.loading),e.xp6(1),e.Q6J("formGroup",$.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",D),e.xp6(1),e.Q6J("form",$.formGroup)("fields",$.formFields)("model",$.formModel)("options",$.formOptions)}},directives:[z.W,o._Y,o.JL,C.Lr,o.sg,y.tP,T.T7,y.O5,j.SK,C.Nx,P.V,ee.r,a.yS],styles:[""]}),Q})()},5959:(me,Y,i)=>{i.d(Y,{e:()=>Te});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),h=i(7695),I=i(7055),l=i(7462),x=i(8776),a=i(1017),z=i(2359),C=i(6042),y=i(4546),T=i(1894),j=i(3075),P=i(325),ee=i(3793),G=i(304),L=i(8054),p=i(5e3);let M=(()=>{class K{constructor(){console.log("FormCardDirective constructed.")}}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275dir=p.lG2({type:K,selectors:[["",8,"cvc-form-card-control"]]}),K})();var F=i(7484),te=i(404);function Q(K,ve){1&K&&p._UZ(0,"i",7)}function A(K,ve){if(1&K&&(p.TgZ(0,"nz-form-label",5),p._uU(1),p.YNc(2,Q,1,0,"i",6),p.qZA()),2&K){const oe=p.oxw();p.Q6J("nzRequired",oe.to.required&&!0!==oe.to.hideRequiredMarker)("nzFor",oe.id),p.xp6(1),p.hij(" ",oe.to.label," "),p.xp6(1),p.Q6J("ngIf",oe.to.helpText)}}function c(K,ve){if(1&K&&p._UZ(0,"formly-validation-message",9),2&K){const oe=p.oxw(2);p.Q6J("field",oe.field)}}function $(K,ve){if(1&K&&p.YNc(0,c,1,1,"formly-validation-message",8),2&K){const oe=p.oxw();p.Q6J("ngIf",oe.showError)}}let D=(()=>{class K extends x.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275cmp=p.Xpm({type:K,selectors:[["form-card-wrapper"]],features:[p.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(oe,Se){if(1&oe&&(p.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),p.GkF(3,null,2),p.qZA(),p.YNc(5,A,3,4,"ng-template",null,3,p.W1O),p.YNc(7,$,1,1,"ng-template",null,4,p.W1O),p.qZA()()),2&oe){const Le=p.MAs(6),Qe=p.MAs(8);p.xp6(1),p.Q6J("nzValidateStatus",Se.errorState)("nzErrorTip",Qe),p.xp6(1),p.Q6J("nzTitle",Le)("nzExtra",Qe)}},directives:[T.SK,y.Nx,T.t3,y.Fd,M,F.bd,y.iK,e.O5,te.SY,x.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),K})();var J=i(5017);const R={wrappers:[{name:"form-card",component:D}]};let f=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,j.UX,y.U5,F.vh,J.PV,te.cg,x.X0.forChild(R),a.s]]}),K})();var B=i(655),b=i(373),N=i(2198),ne=i(4850),ce=i(3240),he=i(4987),Me=i(7630),Oe=i(9397),Ee=i(6949),ie=i(8144),_e=i(3618),S=i(3193),se=i(8926);function U(K,ve){if(1&K&&(p._UZ(0,"span",10),p.ALo(1,"highlightTypeahead")),2&K){const oe=p.oxw().$implicit,Se=p.oxw(3);p.Q6J("innerHtml",p.xi3(1,1,oe.label,Se.to.searchString),p.oJD)}}function V(K,ve){if(1&K&&(p._UZ(0,"span",12),p.ALo(1,"highlightTypeahead")),2&K){const oe=p.oxw(2).$implicit,Se=p.oxw(3);p.Q6J("innerHtml",p.xi3(1,1,oe.gene.geneAliases.join(", "),Se.to.searchString),p.oJD)}}function H(K,ve){1&K&&(p.ynx(0),p.YNc(1,V,2,4,"span",11),p.BQk())}function q(K,ve){if(1&K&&(p.TgZ(0,"nz-option",7)(1,"nz-space"),p.YNc(2,U,2,4,"span",8),p.YNc(3,H,2,0,"ng-container",9),p.qZA()()),2&K){const oe=ve.$implicit;p.Q6J("nzLabel",oe.tooltip)("nzValue",oe.gene),p.xp6(3),p.Q6J("ngIf",oe.gene.geneAliases.length>0)}}function Ce(K,ve){if(1&K&&(p.ynx(0),p.YNc(1,q,4,3,"nz-option",6),p.BQk()),2&K){const oe=ve.ngrxLet;p.xp6(1),p.Q6J("ngForOf",oe)}}function re(K,ve){1&K&&p._uU(0," No gene found in CIViC that matches the string provided. ")}function ge(K,ve){if(1&K){const oe=p.EpF();p.ynx(0),p.TgZ(1,"nz-select",2,3),p.NdJ("nzOnSearch",function(Le){return p.CHM(oe),p.oxw().to.onSearch(Le)}),p.YNc(3,Ce,2,1,"ng-container",4),p.qZA(),p.YNc(4,re,1,0,"ng-template",null,5,p.W1O),p.BQk()}if(2&K){const oe=p.MAs(5),Se=p.oxw();p.xp6(1),p.Q6J("formControl",Se.formControl)("formlyAttributes",Se.field)("nzPlaceHolder",Se.to.placeholder?Se.to.placeholder:null)("nzNotFoundContent",oe)("nzShowArrow",Se.to.showArrow)("nzFilterOption",Se.to.filterOption),p.xp6(2),p.Q6J("ngrxLet",Se.genes$)}}function ae(K,ve){if(1&K&&p._UZ(0,"cvc-gene-tag",13),2&K){const oe=p.oxw();p.Q6J("gene",oe.formControl.value)}}let ze=class extends x.fS{constructor(ve){super(),this.geneTypeaheadQuery=ve,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,b.j)("data","geneTypeahead"),(0,N.h)(ce.ep),(0,ne.U)(ve=>ve.map(oe=>{let Se=oe.geneAliases.length>0?`Aliases: ${oe.geneAliases.join(", ")}`:"";return{value:oe.id,tooltip:`${oe.name} (${oe.entrezId}) ${Se}`,label:`${oe.name} (${oe.entrezId})`,gene:oe}})))}ngAfterViewInit(){this.to.onSearch=ve=>{ve.length<this.to.minLengthSearch||(this.to.searchString=ve,this.queryRef.refetch({entrezSymbol:ve}))}}};ze.\u0275fac=function(ve){return new(ve||ze)(p.Y36(Me.Q4m))},ze.\u0275cmp=p.Xpm({type:ze,selectors:[["cvc-gene-input"]],features:[p.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(ve,oe){if(1&ve&&(p.YNc(0,ge,6,7,"ng-container",0),p.YNc(1,ae,1,1,"ng-template",null,1,p.W1O)),2&ve){const Se=p.MAs(2);p.Q6J("ngIf",!(null!=oe.formControl.value&&oe.formControl.value.id))("ngIfElse",Se)}},directives:[e.O5,L.Vq,Oe.l,j.JJ,j.oH,x.VQ,Ee.eJ,e.sg,L.Ip,ie.NU,ie.$1,_e.ZU,S.H],pipes:[se.A],styles:[""]}),ze=(0,B.gn)([(0,he.c)()],ze);const w={name:"cvc-gene-input",component:ze};var pe=i(3309),Z=i(6905),ye=i(8616);let Pe=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,j.UX,Ee.WG,x.X0.forChild({types:[w]}),L.LV,ie.zf,_e.ZJ,pe.U,Z.s,ye.Y]]}),K})();const Re={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let be=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,j.u5,j.UX,L.LV,G.F,ee.F,x.X0.forChild({types:[Re]}),Pe,I.N,f]]}),K})();var Ue=i(7525),Ge=i(5472),Be=i(4889),Fe=i(9180),we=i(2643),$e=i(6612),Ze=i(2683);const Ye={name:"submit-button",component:(()=>{class K extends x.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275cmp=p.Xpm({type:K,selectors:[["cvc-submit-button-type"]],features:[p.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(oe,Se){1&oe&&(p.TgZ(0,"cvc-form-buttons")(1,"button",0),p._uU(2),p.qZA()()),2&oe&&(p.xp6(1),p.Q6J("disabled",!Se.form.valid),p.xp6(1),p.hij(" ",Se.to.submitLabel," "))},directives:[Fe.Z,C.ix,we.dQ,$e.m,Ze.w],styles:[""],changeDetection:0}),K})()};var We=i(1825);let W=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,j.UX,x.X0.forChild({types:[Ye]}),C.sL,n.R,We.A]]}),K})();var fe=i(4181);const g={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(K,ve,oe)=>{var Se,Le;const Qe=null===(Le=null===(Se=null==oe?void 0:oe.parent)||void 0===Se?void 0:Se.templateOptions)||void 0===Le?void 0:Le.allowCreate;return void 0===Qe||Qe}}},hideExpression:(K,ve,oe)=>{const Se=(null==oe?void 0:oe.form)?oe.form.get("gene"):null;return!Se||!Se.value||!Se.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};let ue=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,j.u5,j.UX,L.LV,G.F,ee.F,x.X0.forChild({types:[g]}),fe.O,I.N]]}),K})(),Te=(()=>{class K{}return K.\u0275fac=function(oe){return new(oe||K)},K.\u0275mod=p.oAB({type:K}),K.\u0275inj=p.cJS({imports:[[e.ez,P.Bz,j.UX,a.s,y.U5,z.L,T.Jb,C.sL,Ue.j,F.vh,ie.zf,_e.ZJ,x.X0,s.B,n.R,h.C,I.N,l.o,o.K,be,Ge.r,Be.E,W,fe.O,ue,a.s]]}),K})()},7630:(me,Y,i)=>{i.d(Y,{$G1:()=>ni,A4J:()=>qn,A94:()=>Sr,AMF:()=>jr,AO2:()=>G,B0s:()=>ji,B97:()=>Bn,BQZ:()=>$,BTF:()=>mn,Bk6:()=>ls,BnY:()=>Gi,Bo4:()=>As,Cp0:()=>te,D9L:()=>er,Del:()=>ns,DkJ:()=>Pn,E8d:()=>z,EwB:()=>Hi,F3s:()=>_e,FB1:()=>ge,FId:()=>Zi,FJi:()=>Me,FKQ:()=>Ci,FNv:()=>B,FOU:()=>Xi,Fvz:()=>J,GB2:()=>Rr,GSh:()=>Xo,GYx:()=>Ho,Gbq:()=>Zt,Hmr:()=>So,IP1:()=>dr,IRu:()=>Ce,IZ6:()=>po,JDX:()=>he,JQ3:()=>Si,KNk:()=>li,Kk:()=>en,Kmw:()=>Ro,L5n:()=>Kn,LLl:()=>wo,LUc:()=>Ri,LiH:()=>vs,Lr0:()=>es,MYm:()=>to,Mgx:()=>C,NQC:()=>ce,NbY:()=>Ni,OHm:()=>bn,OIL:()=>yn,OfU:()=>y,Onj:()=>U,P_b:()=>Ht,Q4m:()=>vi,Q_P:()=>Qi,Qtd:()=>Ts,Qzn:()=>Yn,R8w:()=>j,RMv:()=>Ai,ROj:()=>zr,RTy:()=>Q,Rdc:()=>No,SJD:()=>lt,SWk:()=>sr,SrV:()=>Ee,Sx0:()=>F,T1I:()=>ir,T97:()=>pi,TNk:()=>Zr,Tg0:()=>Hr,TiL:()=>co,Tq1:()=>rn,Tt7:()=>Fo,UIR:()=>jt,UWf:()=>ro,Ud2:()=>cn,VZq:()=>Vn,Vj7:()=>wi,VnG:()=>R,Vr2:()=>h,WFw:()=>Wi,WGV:()=>is,WOS:()=>Xr,WRV:()=>ao,Ws:()=>ei,X5f:()=>Ln,Xft:()=>Mr,YMi:()=>un,Ybm:()=>fn,ZYZ:()=>Eo,Zhw:()=>gi,Zo2:()=>zo,Zyn:()=>P,_Aq:()=>p,_Wm:()=>a,_eC:()=>Fi,_jb:()=>oo,aw3:()=>vr,bgg:()=>Go,c$m:()=>Qo,cCu:()=>Wr,cEv:()=>go,cMj:()=>Ar,d4o:()=>ae,dUU:()=>an,db2:()=>ss,dwB:()=>Gr,eY8:()=>hn,ejK:()=>Er,fow:()=>b,fpJ:()=>Mi,fwG:()=>Mo,g0X:()=>ds,ghc:()=>On,gtM:()=>Ei,h01:()=>T,huM:()=>ze,i44:()=>q,iGM:()=>Zo,iJT:()=>Es,iST:()=>Xt,iXf:()=>Je,io:()=>$n,iwm:()=>n,jMx:()=>Cs,jw9:()=>S,k2T:()=>Ti,k7O:()=>nn,kQf:()=>kn,kQl:()=>se,kq9:()=>ee,kqt:()=>c,kv3:()=>si,l4w:()=>gr,lYz:()=>ne,lfy:()=>zi,m$d:()=>zs,m55:()=>A,mII:()=>Wo,mdl:()=>I,mpB:()=>H,nnL:()=>Tr,o71:()=>V,oRL:()=>f,otH:()=>Jn,pHu:()=>Qr,pP7:()=>pe,pR8:()=>nr,q1D:()=>Ms,q8c:()=>Dn,q9q:()=>xn,qP7:()=>re,qf4:()=>Co,rJ8:()=>In,rZD:()=>Oe,rzy:()=>_n,sBY:()=>wr,sLD:()=>ps,sfv:()=>D,tI1:()=>M,tJ6:()=>vo,td:()=>Wt,ti:()=>Un,tji:()=>Cr,tw_:()=>To,u4i:()=>l,uBv:()=>x,ubO:()=>Ss,vMt:()=>jo,vRc:()=>di,wJ2:()=>L,wRZ:()=>lr,wbP:()=>pr,wg3:()=>Fr,wpb:()=>w,xlL:()=>N,xsC:()=>ii,yic:()=>ie,yqR:()=>gs,z8D:()=>Nr,zwS:()=>Ao});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),h=(()=>{return(t=h||(h={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",h;var t})(),I=(()=>{return(t=I||(I={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",I;var t})(),l=(()=>{return(t=l||(l={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Status="STATUS",t.Summary="SUMMARY",l;var t})(),x=(()=>{return(t=x||(x={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",x;var t})(),a=(()=>{return(t=a||(a={})).And="AND",t.Or="OR",a;var t})(),z=(()=>{return(t=z||(z={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",z;var t})(),C=(()=>{return(t=C||(C={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",C;var t})(),y=(()=>{return(t=y||(y={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",y;var t})(),T=(()=>{return(t=T||(T={})).Created="CREATED",t.LastModified="LAST_MODIFIED",T;var t})(),j=(()=>{return(t=j||(j={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",j;var t})(),P=(()=>{return(t=P||(P={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",P;var t})(),ee=(()=>{return(t=ee||(ee={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",ee;var t})(),G=(()=>{return(t=G||(G={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",G;var t})(),L=(()=>{return(t=L||(L={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",L;var t})(),p=(()=>{return(t=p||(p={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",p;var t})(),M=(()=>{return(t=M||(M={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",M;var t})(),F=(()=>{return(t=F||(F={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",F;var t})(),te=(()=>{return(t=te||(te={})).ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Status="STATUS",t.VariantOrigin="VARIANT_ORIGIN",te;var t})(),Q=(()=>{return(t=Q||(Q={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",Q;var t})(),A=(()=>{return(t=A||(A={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",A;var t})(),c=(()=>{return(t=c||(c={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",c;var t})(),$=(()=>{return(t=$||($={})).Open="OPEN",t.Resolved="RESOLVED",$;var t})(),D=(()=>{return(t=D||(D={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",D;var t})(),J=(()=>{return(t=J||(J={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.VariantCount="variantCount",J;var t})(),R=(()=>{return(t=R||(R={})).Eq="EQ",t.Ge="GE",t.Gt="GT",t.Le="LE",t.Lt="LT",t.Ne="NE",R;var t})(),f=(()=>{return(t=f||(f={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",f;var t})(),B=(()=>{return(t=B||(B={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",t.EvidenceScore="evidenceScore",B;var t})(),b=(()=>{return(t=b||(b={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",b;var t})(),N=(()=>{return(t=N||(N={})).Id="ID",t.Name="NAME",N;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",ne;var t})(),ce=(()=>{return(t=ce||(ce={})).Read="READ",t.Unread="UNREAD",ce;var t})(),he=(()=>{return(t=he||(he={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",he;var t})(),Me=(()=>{return(t=Me||(Me={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",Me;var t})(),Oe=(()=>{return(t=Oe||(Oe={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Oe;var t})(),Ee=(()=>{return(t=Ee||(Ee={})).Asc="ASC",t.Desc="DESC",Ee;var t})(),ie=(()=>{return(t=ie||(ie={})).Asco="ASCO",t.Pubmed="PUBMED",ie;var t})(),_e=(()=>{return(t=_e||(_e={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",_e;var t})(),S=(()=>{return(t=S||(S={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",S;var t})(),se=(()=>{return(t=se||(se={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",se;var t})(),U=(()=>{return(t=U||(U={})).Contains="CONTAINS",t.DoesNotContain="DOES_NOT_CONTAIN",t.Eq="EQ",t.Ne="NE",t.StartsWith="STARTS_WITH",U;var t})(),V=(()=>{return(t=V||(V={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",V;var t})(),H=(()=>{return(t=H||(H={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",H;var t})(),q=(()=>{return(t=q||(q={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",q;var t})(),Ce=(()=>{return(t=Ce||(Ce={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",Ce;var t})(),re=(()=>{return(t=re||(re={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",re;var t})(),ge=(()=>{return(t=ge||(ge={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",ge;var t})(),ae=(()=>{return(t=ae||(ae={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ae;var t})(),ze=(()=>{return(t=ze||(ze={})).CommonGermline="COMMON_GERMLINE",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",ze;var t})(),w=(()=>{return(t=w||(w={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",w;var t})(),pe=(()=>{return(t=pe||(pe={})).DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.VariantName="variantName",pe;var t})();const Z=e.Ps`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
  }
}
    `,ye=e.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${Z}`,Pe=e.Ps`
    fragment AssertionBrowseFields on Assertion {
  id
  name
  link
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
  flagged
}
    ${Z}`,xe=e.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Re=e.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,be=e.Ps`
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
    `,Ue=e.Ps`
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
    `,Ge=e.Ps`
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
    `,Be=e.Ps`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,Fe=e.Ps`
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
    `,we=e.Ps`
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
    ${Fe}`,$e=e.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${Z}`,Ze=e.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  status
  flagged
  drugInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  clinicalSignificance
  variantOrigin
}
    ${Z}`,je=e.Ps`
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
    `,Ye=e.Ps`
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
    ${je}`,We=e.Ps`
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
    `,W=e.Ps`
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
    `,fe=e.Ps`
    fragment BrowseGenesFields on BrowseGene {
  id
  entrezId
  name
  link
  flagged
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
    `,v=e.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,g=e.Ps`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    __typename
    ... on MolecularProfileTextSegment {
      text
    }
    ... on Gene {
      id
      name
      link
    }
    ... on Variant {
      id
      name
      link
    }
  }
  evidenceItems {
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
    `,ue=e.Ps`
    fragment BrowseMolecularProfilesFields on BrowseMolecularProfile {
  id
  name
  evidenceItemCount
  evidenceScore
  assertionCount
  aliases {
    name
  }
  genes {
    id
    name
    link
  }
  variants {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  diseases {
    id
    name
    link
  }
  link
}
    `,Te=e.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,K=e.Ps`
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
    `,ve=e.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,oe=e.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,Se=e.Ps`
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
    `,Le=e.Ps`
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
    `,Qe=e.Ps`
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
    `,Ke=e.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,He=e.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,ke=e.Ps`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  molecularProfile {
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
    `,et=e.Ps`
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
    `,ot=e.Ps`
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
    `,Xe=e.Ps`
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
    `,tt=e.Ps`
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
    `,st=e.Ps`
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
    `,it=e.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,_=e.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,k=e.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,E=e.Ps`
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
    `,le=e.Ps`
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
    `,De=e.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,Ae=e.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
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
}
    `,dt=e.Ps`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
  molecularProfile {
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
    `,rt=e.Ps`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
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
    `,ut=e.Ps`
    fragment previewMpName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
  }
}
    `,qe=e.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,pt=e.Ps`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,mt=e.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,at=e.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,lt=e.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,Je=e.Ps`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,ct=e.Ps`
    fragment VariantTypeaheadFields on Variant {
  id
  name
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
  }
}
    `,At=e.Ps`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
    singleVariantMolecularProfileId
    singleVariantMolecularProfile {
      id
      name
      link
    }
  }
}
    `,xt=(e.Ps`
    fragment VariantSelectFields on Variant {
  id
  name
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
  }
}
    `,e.Ps`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  molecularProfile {
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
    `),Nt=e.Ps`
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
    `,Lt=e.Ps`
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
    `,Ft=e.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,gt=e.Ps`
    fragment RevisableMolecularProfileFields on MolecularProfile {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  molecularProfileAliases
}
    `,ft=e.Ps`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
      singleVariantMolecularProfile {
        id
        name
        link
      }
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `,vt=e.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,ht=e.Ps`
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
    ${vt}`,zt=e.Ps`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
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
    `,$t=e.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${Z}`,Rt=e.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
}
    `,bt=e.Ps`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,Gt=e.Ps`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
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
    `,_t=e.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${Z}`,Ct=e.Ps`
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
    `,yt=e.Ps`
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
    `,Bt=e.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  molecularProfileAliases
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
    `,Tt=e.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  gene {
    id
    name
    link
  }
  variantAliases
  clinvarIds
  alleleRegistryId
  variantTypes {
    id
    link
    soid
    name
  }
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
  hgvsDescriptions
}
    `,It=e.Ps`
    fragment MolecularProfileSummaryFields on MolecularProfile {
  id
  name
  description
  molecularProfileAliases
  evidenceScore
  sources {
    id
    citation
    link
  }
  variants {
    ...VariantMolecularProfileCardFields
  }
  parsedName {
    ...MolecularProfileParsedName
  }
}
    ${Tt}
${Z}`,Mt=e.Ps`
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
    `,Dt=e.Ps`
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
    `,St=e.Ps`
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
    `,Ot=e.Ps`
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
  molecularProfileTsv {
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
    `,Et=e.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Pt=e.Ps`
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
    `,m=e.Ps`
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
    `,X=e.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,u=e.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,O=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,de=e.Ps`
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
    ${Fe}`,Ie=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Ne=e.Ps`
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
    `,Ve=e.Ps`
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
    `,nt=e.Ps`
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
    `,Ut=e.Ps`
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
    `,wt=e.Ps`
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
    ${Ut}`,Vt=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ye}`;let Zt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yt=e.Ps`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $molecularProfileId: Int, $evidenceId: Int, $molecularProfileName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatusFilter) {
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
    molecularProfileId: $molecularProfileId
    sortBy: $sortBy
    ampLevel: $ampLevel
    molecularProfileName: $molecularProfileName
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
    ${Pe}`;let Wt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jt=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${xe}`;let jt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kt=e.Ps`
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
    ${Re}`;let Ht=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kt=e.Ps`
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
    ${be}`;let Xt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qt=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Ue}`;let en=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tn=e.Ps`
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
    `;let nn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const on=e.Ps`
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
    ${Ge}`;let rn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=on}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sn=e.Ps`
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
    `;let an=(()=>{class t extends e.AE{constructor(r){super(r),this.document=sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ln=e.Ps`
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
    ${Be}`;let cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ln}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const dn=e.Ps`
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
    `;let un=(()=>{class t extends e.AE{constructor(r){super(r),this.document=dn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pn=e.Ps`
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
    ${we}`;let mn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${$e}`;let fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vn=e.Ps`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
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
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    drugId: $drugId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
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
    ${Ze}`;let hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zn=e.Ps`
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
    ${Ye}`;let _n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cn=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${We}`;let yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${W}`;let In=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mn=e.Ps`
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
    ${fe}`;let Dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sn=e.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${v}`;let On=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const En=e.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${g}`;let Pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=En}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const An=e.Ps`
    query BrowseMolecularProfiles($variantName: String, $variantId: Int, $entrezSymbol: String, $diseaseName: String, $drugName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    variantName: $variantName
    variantId: $variantId
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    drugName: $drugName
    molecularProfileAlias: $molecularProfileAlias
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
        ...BrowseMolecularProfilesFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${ue}`;let xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=An}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nn=e.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${Te}`;let Ln=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Nn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fn=e.Ps`
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
    ${K}`;let $n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rn=e.Ps`
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
    `;let bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Rn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gn=e.Ps`
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
    ${ve}`;let Bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qn=e.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Un=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Qn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wn=e.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Vn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zn=e.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${oe}`;let Yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wn=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Se}`;let Jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jn=e.Ps`
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
    ${Le}`;let Kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hn=e.Ps`
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
    ${Qe}`;let kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xn=e.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Ke}`;let qn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const eo=e.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let to=(()=>{class t extends e.mm{constructor(r){super(r),this.document=eo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const no=e.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let oo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=no}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const io=e.Ps`
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
    ${He}`;let ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const so=e.Ps`
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $molecularProfileName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    molecularProfileName: $molecularProfileName
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
    ${ke}`;let ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=so}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const lo=e.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${et}`;let co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const uo=e.Ps`
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
    ${ot}`;let po=(()=>{class t extends e.AE{constructor(r){super(r),this.document=uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mo=e.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Xe}`;let go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fo=e.Ps`
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
    ${tt}`;let vo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ho=e.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${st}`;let zo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ho}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _o=e.Ps`
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
    ${it}`;let Co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yo=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${_}`;let To=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Io=e.Ps`
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
    ${k}`;let Mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Do=e.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${E}`;let So=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Do}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oo=e.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${le}`;let Eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Po=e.Ps`
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
    ${De}`;let Ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Po}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xo=e.Ps`
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
    ${Ae}`;let No=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lo=e.Ps`
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
    `;let Fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $o=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bo=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${dt}`;let Go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bo=e.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Qo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Uo=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let wo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vo=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${be}`;let Zo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yo=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${rt}`;let Wo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jo=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let jo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ko=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Ho=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ko=e.Ps`
    query previewMolecularProfileName($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
    }
    segments {
      ...previewMpName
    }
  }
}
    ${ut}`;let Xo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qo=e.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let ei=(()=>{class t extends e.mm{constructor(r){super(r),this.document=qo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ti=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ti}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oi=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let ii=(()=>{class t extends e.AE{constructor(r){super(r),this.document=oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ri=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let si=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ri}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ai=e.Ps`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${qe}`;let li=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ai}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ci=e.Ps`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let di=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ci}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ui=e.Ps`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${pt}`;let pi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mi=e.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let gi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fi=e.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${mt}`;let vi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hi=e.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _i=e.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Ci=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yi=e.Ps`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${at}`;let Ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ii=e.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Mi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ii}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Di=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Si=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Di}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oi=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ei=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pi=e.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${lt}`;let Ai=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Pi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xi=e.Ps`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${at}`;let Ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Li=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;let Fi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Li}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $i=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${At}`;let Ri=(()=>{class t extends e.mm{constructor(r){super(r),this.document=$i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;const bi=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Gi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bi=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${xt}`;let Qi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ui=e.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let wi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vi=e.Ps`
    query EvidenceFieldsFromSourceSuggestion($sourceId: Int, $molecularProfileId: Int, $diseaseId: Int) {
  sourceSuggestionValues(
    molecularProfileId: $molecularProfileId
    diseaseId: $diseaseId
    sourceId: $sourceId
  ) {
    molecularProfile {
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
    `;let Zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Nt}`;const Yi=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Wi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ji=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let ji=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ji}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ki=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Hi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ki=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Lt}`;let Xi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qi=e.Ps`
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
    `;let er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=qi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${Ft}`;const tr=e.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${gt}`;let nr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=tr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const or=e.Ps`
    mutation SuggestMolecularProfileRevision($input: SuggestMolecularProfileRevisionInput!) {
  suggestMolecularProfileRevision(input: $input) {
    clientMutationId
    molecularProfile {
      id
    }
    results {
      id
      fieldName
    }
  }
}
    `;let ir=(()=>{class t extends e.mm{constructor(r){super(r),this.document=or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rr=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let sr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=rr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ar=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let lr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ar}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cr=e.Ps`
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
    `;let dr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=cr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ur=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let pr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mr=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let gr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fr=e.Ps`
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
    `;let vr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hr=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${ft}`;let zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _r=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Cr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=_r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yr=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${ht}`;let Tr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ir=e.Ps`
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
    `;let Mr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ir}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dr=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${zt}`;let Sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Or=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${$t}`;let Er=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pr=e.Ps`
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
    `;let Ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xr=e.Ps`
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
    `;let Nr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lr=e.Ps`
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
    `;let Fr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Rt}`;const $r=e.Ps`
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
    `;let Rr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const br=e.Ps`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${bt}`;let Gr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Br=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Gt}`;let Qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ur=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${_t}`;let wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vr=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Ct}`;let Zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yr=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${yt}`;let Wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jr=e.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Bt}`;let jr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kr=e.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${It}`;let Hr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kr=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Mt}`;let Xr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qr=e.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Dt}`;let es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ts=e.Ps`
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
    ${St}`;let ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ts}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const os=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let is=(()=>{class t extends e.AE{constructor(r){super(r),this.document=os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rs=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Ot}`;let ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const as=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Et}`;let ls=(()=>{class t extends e.AE{constructor(r){super(r),this.document=as}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cs=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Pt}`;let ds=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const us=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${m}`;let ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ms=e.Ps`
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
    ${O}
${u}
${X}
${de}`;let gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fs=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${de}`;let vs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hs=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Ie}`;let zs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=hs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _s=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Cs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=_s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ys=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Ne}`;let Ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ys}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const Is=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ve}`;let Ms=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ds=e.Ps`
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
    `;let Ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ds}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Os=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${nt}`;let Es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ps=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${wt}`;let As=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(me,Y,i)=>{i.r(Y),i.d(Y,{LayoutModule:()=>Pt});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),h=i(8929),I=i(7625),l=i(655),x=i(4090),a=i(1721),z=i(4219),C=i(925),y=i(5017),T=i(226),j=i(5113);const P=["*"],ee=["nz-sider-trigger",""];function G(m,X){}function L(m,X){if(1&m&&(n.ynx(0),n.YNc(1,G,0,0,"ng-template",3),n.BQk()),2&m){const u=n.oxw(),O=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||O)}}function p(m,X){}function M(m,X){if(1&m&&(n.ynx(0),n.YNc(1,p,0,0,"ng-template",3),n.BQk()),2&m){const u=n.oxw(),O=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||O)}}function F(m,X){if(1&m&&n._UZ(0,"i",5),2&m){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function te(m,X){if(1&m&&n._UZ(0,"i",5),2&m){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function Q(m,X){if(1&m&&(n.YNc(0,F,1,1,"i",4),n.YNc(1,te,1,1,"i",4)),2&m){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function A(m,X){1&m&&n._UZ(0,"i",6)}function c(m,X){if(1&m){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const de=n.oxw();return de.setCollapsed(!de.nzCollapsed)}),n.qZA()}if(2&m){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let $=(()=>{class m{constructor(u,O){this.elementRef=u,this.renderer=O,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:P,decls:1,vars:0,template:function(u,O){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),J=(()=>{class m{constructor(u,O){this.elementRef=u,this.renderer=O,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(n.SBq),n.Y36(n.Qsj))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:P,decls:1,vars:0,template:function(u,O){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),R=(()=>{class m{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,O){2&u&&(n.Udp("width",O.isNormalTrigger?O.siderWidth:null),n.ekj("ant-layout-sider-trigger",O.isNormalTrigger)("ant-layout-sider-zero-width-trigger",O.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",O.isZeroTrigger&&O.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",O.isZeroTrigger&&!O.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:ee,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,O){1&u&&(n.YNc(0,L,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,Q,2,2,"ng-template",null,1,n.W1O),n.YNc(4,A,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",O.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",O.isNormalTrigger))},directives:[e.O5,e.tP,y.Ls],encapsulation:2,changeDetection:0}),m})(),f=(()=>{class m{constructor(u,O,de){this.platform=u,this.cdr=O,this.breakpointService=de,this.destroy$=new h.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,a.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(x.ow,!0).pipe((0,I.R)(this.destroy$)).subscribe(u=>{const O=this.nzBreakpoint;O&&(0,a.ov)().subscribe(()=>{this.matchBreakPoint=!u[O],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:O,nzCollapsedWidth:de,nzWidth:Ie}=u;(O||de||Ie)&&this.updateStyleMap(),O&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(C.t4),n.Y36(n.sBO),n.Y36(x.r3))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-sider"]],contentQueries:function(u,O,de){if(1&u&&n.Suo(de,z.wO,5),2&u){let Ie;n.iGM(Ie=n.CRH())&&(O.nzMenuDirective=Ie.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,O){2&u&&(n.Udp("flex",O.flexSetting)("max-width",O.widthSetting)("min-width",O.widthSetting)("width",O.widthSetting),n.ekj("ant-layout-sider-zero-width",O.nzCollapsed&&0===O.nzCollapsedWidth)("ant-layout-sider-light","light"===O.nzTheme)("ant-layout-sider-dark","dark"===O.nzTheme)("ant-layout-sider-collapsed",O.nzCollapsed)("ant-layout-sider-has-trigger",O.nzCollapsible&&null!==O.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:P,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,O){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,c,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",O.nzCollapsible&&null!==O.nzTrigger))},directives:[R,e.O5],encapsulation:2,changeDetection:0}),(0,l.gn)([(0,a.yF)()],m.prototype,"nzReverseArrow",void 0),(0,l.gn)([(0,a.yF)()],m.prototype,"nzCollapsible",void 0),(0,l.gn)([(0,a.yF)()],m.prototype,"nzCollapsed",void 0),m})(),B=(()=>{class m{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new h.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,I.R)(this.destroy$)).subscribe(O=>{this.dir=O})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(T.Is,8))},m.\u0275cmp=n.Xpm({type:m,selectors:[["nz-layout"]],contentQueries:function(u,O,de){if(1&u&&n.Suo(de,f,4),2&u){let Ie;n.iGM(Ie=n.CRH())&&(O.listOfNzSiderComponent=Ie)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,O){2&u&&n.ekj("ant-layout-rtl","rtl"===O.dir)("ant-layout-has-sider",O.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:P,decls:1,vars:0,template:function(u,O){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),m})(),b=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[T.vT,e.ez,y.PV,j.xu,C.ud]]}),m})();var N=i(404),ne=i(1894),ce=i(7630),he=i(8054),Me=i(353),Oe=i(8514),Ee=i(8896),_e=i(5254),S=i(3240),se=i(1307),U=i(3164),V=i(7545),H=i(4850),q=i(2198),Ce=i(5778),re=i(3075),ge=i(3618),ae=i(6949);function ze(m,X){if(1&m&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&m){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function w(m,X){if(1&m&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,ze,3,1,"span",6),n.qZA()),2&m){const u=X.$implicit,O=n.oxw();n.Q6J("nzLabel",u.text)("nzValue",u.result),n.xp6(1),n.Q6J("nzType",O.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function pe(m,X){1&m&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let Z=(()=>{class m{constructor(u,O){this.gql=u,this.router=O,this.onSearch$=new h.xQ,this.onSelect$=new h.xQ,this.response$=this.onSearch$.pipe((0,se.T)(1),(0,U.p)(300,Me.z,{leading:!1,trailing:!0}),(0,V.w)(Ne=>function ie(m,X=Ee.E,u=Ee.E){return(0,Oe.P)(()=>m()?X:u)}(()=>void 0===this.queryRef,(0,Oe.P)(()=>de(Ne)),(0,Oe.P)(()=>Ie(Ne))))),this.isLoading$=this.response$.pipe((0,H.U)(Ne=>Ne.loading),(0,q.h)(S.ep),(0,Ce.x)()),this.result$=this.response$.pipe((0,H.U)(Ne=>{var Ve;return null===(Ve=Ne.data)||void 0===Ve?void 0:Ve.search}),(0,q.h)(S.ep)),this.option$=this.result$.pipe((0,H.U)(Ne=>{const Ve=[];return Ne.forEach(nt=>{nt&&Ve.push({text:nt.name,value:nt.id.toString(),result:nt})}),Ve})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const de=Ne=>(this.queryRef=this.gql.watch({query:Ne,highlightMatches:!0}),this.queryRef.valueChanges),Ie=Ne=>(0,_e.D)(this.queryRef.refetch({query:Ne}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case ce.rZD.EvidenceItem:return"civic:evidence";case ce.rZD.VariantGroup:return"civic:variantgroup";case ce.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let O;switch(u.resultType){case ce.rZD.VariantGroup:O="variant-groups";break;case ce.rZD.EvidenceItem:O="evidence";break;case ce.rZD.MolecularProfile:O="molecular-profiles";break;default:O=`${u.resultType.toLowerCase()}s`}return`/${O}/${u.id}/summary`}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(ce.ghc),n.Y36(o.F0))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-quicksearch"]],viewQuery:function(u,O){if(1&u&&n.Gf(he.Vq,7),2&u){let de;n.iGM(de=n.CRH())&&(O.selectNode=de.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,O){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(Ie){return O.selectedOpt=Ie})("ngModelChange",function(Ie){return O.onSelect$.next(Ie)})("nzOnSearch",function(Ie){return O.onSearch$.next(Ie)}),n.YNc(1,w,4,5,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,pe,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",O.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,O.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,O.isLoading$)))},directives:[he.Vq,re.JJ,re.On,e.sg,he.Ip,y.Ls,e.O5,ge.ZU],pipes:[ae.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),m})();var ye=i(1912),Pe=i(1059),xe=i(2340),Re=i(8144),be=i(6042),Ue=i(2643),Ge=i(2683),Be=i(3677),Fe=i(4401),we=i(7881),$e=i(3640),Ze=i(8785),je=i(3434);function Ye(m,X){if(1&m&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&m){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const We=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function W(m,X){if(1&m&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&m){const u=n.oxw().ngrxLet,O=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,We)),n.xp6(1),n.MGl("routerLink","/users/",O.id,"/notifications")}}const fe=function(m){return{"update-coi":m}};function v(m,X){if(1&m&&n._UZ(0,"cvc-user-avatar",36),2&m){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,fe,u.invalidCoi))}}function g(m,X){if(1&m&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&m){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function ue(m,X){1&m&&n._UZ(0,"i",27)}function Te(m,X){if(1&m&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,v,1,5,"cvc-user-avatar",33),n.YNc(3,g,2,1,"div",34),n.YNc(4,ue,1,0,"i",35),n.qZA()()),2&m){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function K(m,X){1&m&&(n.TgZ(0,"nz-space",22),n.YNc(1,Ye,3,1,"button",23),n.YNc(2,W,3,5,"nz-badge",24),n.YNc(3,Te,5,1,"button",25),n.qZA())}function ve(m,X){if(1&m){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function oe(m,X){1&m&&n._UZ(0,"li",14)}function Se(m,X){1&m&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Le(m,X){1&m&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function Qe(m,X){if(1&m){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(m){return["/users",m]};function He(m,X){if(1&m){const u=n.EpF();n.ynx(0),n.YNc(1,K,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,ve,4,0,"li",9),n.YNc(6,oe,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Se,3,0,"li",12),n.YNc(10,Le,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,Qe,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&m){const u=X.ngIf,O=n.oxw();n.xp6(1),n.Q6J("ngrxLet",O.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(m,X){1&m&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function et(m,X){if(1&m){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function ot(m,X){1&m&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(m,X){1&m&&n._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class m{constructor(u,O){this.queryService=u,this.unreadCountGql=O,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=xe.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,H.U)(({data:de})=>de.notifications.unreadCount),(0,Pe.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,H.U)(({data:de})=>de.notifications.unreadCount),(0,Pe.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(s.a),n.Y36(ce.Kmw))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,O){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ie){return O.coiUpdateModalVisible=Ie})("nzOnCancel",function(){return O.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(Ie){return O.addVariantModalVisible=Ie})("nzOnCancel",function(){return O.addVariantModalVisible=!1}),n.YNc(8,ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const de=n.MAs(4),Ie=n.MAs(6),Ne=n.MAs(9),Ve=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,O.viewer$)),n.xp6(2),n.Q6J("nzVisible",O.coiUpdateModalVisible)("nzContent",Ie)("nzTitle",de)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",O.addVariantModalVisible)("nzContent",Ve)("nzTitle",Ne)("nzFooter",null)}},directives:[e.O5,ae.eJ,Re.NU,Re.$1,be.ix,Ue.dQ,Ge.w,Be.wA,Be.cm,y.Ls,Fe.x7,o.rH,we.L,e.mk,Be.RR,z.wO,z.r9,z.YV,o.yS,$e.du,Ze.t,je.G],pipes:[ae.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),m})();function st(m,X){1&m&&n._UZ(0,"img",62)}function it(m,X){1&m&&n._UZ(0,"img",63)}function _(m,X){1&m&&n._UZ(0,"cvc-login-button")}function k(m,X){1&m&&n._UZ(0,"cvc-viewer-button")}const E=function(m){return{"is-collapsed":m}},De=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class m{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(s.a))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-layout"]],decls:134,vars:48,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row","","id","header-row"],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","200px","id","header-search"],["nz-col","","nzFlex","1 0 250px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","1 0 auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,O){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(Ie){return O.isCollapsed=Ie}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,st,1,0,"img",4),n.YNc(5,it,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Drugs"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()(),n.TgZ(81,"li",8),n._UZ(82,"i",37),n.TgZ(83,"span")(84,"a",38),n._uU(85,"Search"),n.qZA()()()()(),n.TgZ(86,"li",7)(87,"ul")(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Contributors"),n.qZA()()(),n.TgZ(93,"li",8),n._UZ(94,"i",41),n.TgZ(95,"span")(96,"a",42),n._uU(97,"Organizations"),n.qZA()()()()(),n.TgZ(98,"li",7)(99,"ul")(100,"li",8),n._UZ(101,"i",43),n.TgZ(102,"span")(103,"a",44),n._uU(104,"Data Releases"),n.qZA()()()()()(),n.TgZ(105,"div",45),n._UZ(106,"img",46)(107,"img",47),n.qZA()(),n.TgZ(108,"nz-layout",48)(109,"nz-header")(110,"div",49)(111,"div",50)(112,"span",51),n.NdJ("click",function(){return O.isCollapsed=!O.isCollapsed}),n._UZ(113,"i",52),n.qZA()(),n.TgZ(114,"div",53),n._UZ(115,"cvc-quicksearch"),n.qZA(),n.TgZ(116,"div",54)(117,"ul",55)(118,"li",56)(119,"a",57),n._uU(120,"Home"),n.qZA()(),n.TgZ(121,"li",56)(122,"a",58),n._uU(123,"About CIViC"),n.qZA()(),n.TgZ(124,"li",56)(125,"a",59),n._uU(126,"Help"),n.qZA()()()(),n.TgZ(127,"div",60),n.YNc(128,_,1,0,"cvc-login-button",61),n.ALo(129,"async"),n.YNc(130,k,1,0,"cvc-viewer-button",61),n.ALo(131,"async"),n.qZA()()(),n.TgZ(132,"nz-content"),n._UZ(133,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",O.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(40,E,O.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!O.isCollapsed),n.xp6(1),n.Q6J("ngIf",O.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(42,E,O.isCollapsed))("nzInlineCollapsed",O.isCollapsed),n.xp6(1),n.Q6J("nzTitle",O.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",O.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",O.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",O.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",O.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",O.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",O.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",O.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",O.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(44,E,O.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(46,E,O.isCollapsed)),n.xp6(5),n.Q6J("nzType",O.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(129,36,O.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(131,38,O.signedIn$)))},directives:[B,f,o.yS,e.mk,e.O5,z.wO,z.uA,z.r9,N.SY,y.Ls,J,ne.SK,ne.t3,Z,ye.s,tt,$,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-row[_ngcontent-%COMP%]{flex-wrap:nowrap}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),m})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(4184),i.e(3883),i.e(1634),i.e(3429),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(m=>m.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(2475),i.e(9160),i.e(8103),i.e(8592),i.e(8249)]).then(i.bind(i,933)).then(m=>m.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(7142),i.e(1838)]).then(i.bind(i,1838)).then(m=>m.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(7434)]).then(i.bind(i,233)).then(m=>m.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8918)]).then(i.bind(i,1592)).then(m=>m.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(m=>m.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(8592),i.e(9987)]).then(i.bind(i,9040)).then(m=>m.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(9101)]).then(i.bind(i,5625)).then(m=>m.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(m=>m.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(1634),i.e(3278),i.e(7142),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(m=>m.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(3883),i.e(3278),i.e(8592),i.e(3506)]).then(i.bind(i,684)).then(m=>m.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(5378)]).then(i.bind(i,3218)).then(m=>m.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(m=>m.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(m=>m.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(m=>m.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(8945),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(m=>m.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(m=>m.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(m=>m.PagesModule),data:{breadcrumb:"Pages"}}]}];let Ae=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[o.Bz.forChild(De)],o.Bz]}),m})();var dt=i(1017),rt=i(1047),ut=i(4546),qe=i(1314),pt=i(4832),mt=i(969),at=i(2994),lt=i(8583),Je=i(1159),ct=i(7429);const _t={provide:re.JU,useExisting:(0,n.Gpc)(()=>yt),multi:!0};let yt=(()=>{class m{constructor(u,O,de,Ie,Ne,Ve){this.ngZone=u,this.elementRef=O,this.overlay=de,this.viewContainerRef=Ie,this.nzInputGroupWhitSuffixOrPrefixDirective=Ne,this.document=Ve,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new h.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,I.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const O=u.keyCode,de=O===Je.LH||O===Je.JH;O===Je.hY&&u.preventDefault(),!this.panelOpen||O!==Je.hY&&O!==Je.Mf?this.panelOpen&&O===Je.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&de&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),O===Je.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const O=u.target,de=this.document;let Ie=O.value;"number"===O.type&&(Ie=""===Ie?null:parseFloat(Ie)),this.previousValue!==Ie&&(this.previousValue=Ie,this.onChange(Ie),this.canOpen()&&de.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,at.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,lt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,q.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Ct(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new ct.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const O=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(O),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const O=this.nzAutocomplete.getOption(u),de=O?O.getLabel():u;this.elementRef.nativeElement.value=null!=de?de:"",this.nzAutocomplete.nzBackfill||(this.previousValue=de)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(rt.ke,8),n.Y36(e.K0,8))},m.\u0275dir=n.lG2({type:m,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,O){1&u&&n.NdJ("focusin",function(){return O.handleFocus()})("blur",function(){return O.handleBlur()})("input",function(Ie){return O.handleInput(Ie)})("keydown",function(Ie){return O.handleKeydown(Ie)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([_t])]}),m})(),Tt=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[T.vT,e.ez,qe.U8,re.u5,mt.T,pt.g,rt.o7]]}),m})(),It=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[e.ez,re.u5,o.Bz,ae.WG,ge.ZJ,he.LV,rt.o7,ut.U5,y.PV,Tt]]}),m})();var Mt=i(1844),Dt=i(5473),St=i(330),Ot=i(5959);let Et=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[e.ez,ae.WG,Be.b1,o.Bz,be.sL,Re.zf,y.PV,Fe.mS,N.cg,$e.Qp,Dt.H,St.e,Ot.e]]}),m})(),Pt=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[[e.ez,Ae,y.PV,ne.Jb,b,z.ip,N.cg,ge.ZJ,dt.s,Mt.B,Et,It]]}),m})()},3240:(me,Y,i)=>{function e(l){return null!=l}i.d(Y,{ep:()=>e})},373:(me,Y,i)=>{i.d(Y,{j:()=>o});var e=i(4850);function o(...s){const h=s.length;if(0===h)throw new Error("list of properties cannot be empty.");return I=>(0,e.U)(function n(s,h){return l=>{let x=l;for(let a=0;a<h;a++){const z=null!=x?x[s[a]]:void 0;if(void 0===z)return;x=z}return x}}(s,h))(I)}},3164:(me,Y,i)=>{i.d(Y,{p:()=>l});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function l(C,y=o.P,T=n){return j=>j.lift(new x(C,y,T.leading,T.trailing))}class x{constructor(y,T,j,P){this.duration=y,this.scheduler=T,this.leading=j,this.trailing=P}call(y,T){return T.subscribe(new a(y,this.duration,this.scheduler,this.leading,this.trailing))}}class a extends e.L{constructor(y,T,j,P,ee){super(y),this.duration=T,this.scheduler=j,this.leading=P,this.trailing=ee,this._hasTrailingValue=!1,this._trailingValue=null}_next(y){this.throttled?this.trailing&&(this._trailingValue=y,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(z,this.duration,{subscriber:this})),this.leading?this.destination.next(y):this.trailing&&(this._trailingValue=y,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const y=this.throttled;y&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),y.unsubscribe(),this.remove(y),this.throttled=null)}}function z(C){const{subscriber:y}=C;y.clearThrottle()}},444:(me,Y,i)=>{function e(A){return A!==String(parseFloat(A))}i.d(Y,{o6:()=>Q});var h=Object.getOwnPropertyNames?function o(A){return Object.getOwnPropertyNames(A).filter(function(c){return A.propertyIsEnumerable(c)&&e(c)})}:Object.keys?function n(A){return Object.keys(A).filter(e)}:function s(A){var c=[];for(var $ in A)A.hasOwnProperty($)&&A.propertyIsEnumerable($)&&e($)&&c.push($);return c},I=function(){function A(c){this.enumObj=c,this.keysList=Object.freeze(h(c));for(var $=this.keysList.length,D=new Array($),J=new Map,R=0;R<$;++R){var f=this.keysList[R],B=c[f];D[R]=B,J.set(B,f),this[R]=Object.freeze([f,B])}this.valuesList=Object.freeze(D),this.keysByValueMap=J,this.size=this.length=$,Object.freeze(this)}return A.prototype.toString=function(){return"[object EnumWrapper]"},A.prototype.keys=function(){var c,$=this,D=0;return(c={next:function(){var R={done:D>=$.length,value:$.keysList[D]};return++D,R}})[Symbol.iterator]=function(){return this},c},A.prototype.values=function(){var c,$=this,D=0;return(c={next:function(){var R={done:D>=$.length,value:$.valuesList[D]};return++D,R}})[Symbol.iterator]=function(){return this},c},A.prototype.entries=function(){var c,$=this,D=0;return(c={next:function(){var R={done:D>=$.length,value:$[D]};return++D,R}})[Symbol.iterator]=function(){return this},c},A.prototype[Symbol.iterator]=function(){return this.entries()},A.prototype.forEach=function(c,$){for(var D=this.length,J=0;J<D;++J){var R=this[J];c.call($,R[1],R[0],this,J)}},A.prototype.map=function(c,$){for(var D=this.length,J=new Array(D),R=0;R<D;++R){var f=this[R];J[R]=c.call($,f[1],f[0],this,R)}return J},A.prototype.getKeys=function(){return this.keysList.slice()},A.prototype.getValues=function(){return this.valuesList.slice()},A.prototype.getEntries=function(){return Array.prototype.slice.call(this)},A.prototype.indexOfKey=function(c){return this.keysList.indexOf(c)},A.prototype.indexOfValue=function(c){return this.valuesList.indexOf(c)},A.prototype.isKey=function(c){return null!=c&&e(c)&&this.enumObj.hasOwnProperty(c)},A.prototype.asKeyOrThrow=function(c){if(this.isKey(c))return c;throw new Error("Unexpected key: "+c+". Expected one of: "+this.getValues())},A.prototype.asKeyOrDefault=function(c,$){return this.isKey(c)?c:$},A.prototype.isValue=function(c){return null!=c&&this.keysByValueMap.has(c)},A.prototype.asValueOrThrow=function(c){if(this.isValue(c))return c;throw new Error("Unexpected value: "+c+". Expected one of: "+this.getValues())},A.prototype.asValueOrDefault=function(c,$){return this.isValue(c)?c:$},A.prototype.getKeyOrThrow=function(c){var $=null!=c?this.keysByValueMap.get(c):void 0;if(null!=$)return $;throw new Error("Unexpected value: "+c+". Expected one of: "+this.getValues())},A.prototype.getKeyOrDefault=function(c,$){var D=null!=c?this.keysByValueMap.get(c):void 0;return null!=D?D:$},A.prototype.getValueOrThrow=function(c){return this.enumObj[this.asKeyOrThrow(c)]},A.prototype.getValueOrDefault=function(c,$){return this.isKey(c)?this.enumObj[c]:$},A}();I.prototype[Symbol.toStringTag]="EnumWrapper";var l=Symbol("ts-enum-util:unhandledEntry"),x=Symbol("ts-enum-util:handleNull"),a=Symbol("ts-enum-util:handleUndefined"),z=Symbol("ts-enum-util:handleUnexpected");function C(A){return new Error("Unhandled value: "+A)}var y=function(){function A(c){this.value=c}return A.prototype.with=function(c){if(c.hasOwnProperty(this.value))return P(c[this.value],this.value);if(c[z])return P(c[z],this.value);throw new Error("Unexpected value: "+this.value)},A}(),T=function(){function A(){}return A.prototype.with=function(c){if(c[x])return P(c[x],null);if(c[z])return P(c[z],null);throw new Error("Unexpected value: null")},A}(),j=function(){function A(){}return A.prototype.with=function(c){if(c[a])return P(c[a],void 0);if(c[z])return P(c[z],void 0);throw new Error("Unexpected value: undefined")},A}();function P(A,c){if(A===l)throw C(c);return A(c)}var ee=function(){function A(c){this.value=c}return A.prototype.with=function(c){if(c.hasOwnProperty(this.value))return p(c[this.value],this.value);if(c.hasOwnProperty(z))return p(c[z],this.value);throw new Error("Unexpected value: "+this.value)},A}(),G=function(){function A(){}return A.prototype.with=function(c){if(c.hasOwnProperty(x))return p(c[x],null);if(c.hasOwnProperty(z))return p(c[z],null);throw new Error("Unexpected value: null")},A}(),L=function(){function A(){}return A.prototype.with=function(c){if(c.hasOwnProperty(a))return p(c[a],void 0);if(c.hasOwnProperty(z))return p(c[z],void 0);throw new Error("Unexpected value: undefined")},A}();function p(A,c){if(A===l)throw C(c);return A}var te=new WeakMap;function Q(A){var c=te.get(A);return c||(c=new I(A),te.set(A,c)),c}Q.handleNull=x,Q.handleUndefined=a,Q.handleUnexpected=z,Q.unhandledEntry=l,Q.visitValue=function M(A){return null===A?new T:void 0===A?new j:new y(A)},Q.mapValue=function F(A){return null===A?new G:void 0===A?new L:new ee(A)}},4987:(me,Y,i)=>{i.d(Y,{c:()=>A,t:()=>B});var e=i(8929),o=i(2654),I=(i(5254),i(8896),i(8139),i(5e3)),z=(i(1709),i(7770),i(7221),i(7625));const C=I.GuJ,T=Symbol("__destroy"),j=Symbol("__decoratorApplied");function P(N){return"string"==typeof N?Symbol(`__destroy__${N}`):T}function G(N,ne){N[ne]||(N[ne]=new e.xQ)}function L(N,ne){N[ne]&&(N[ne].next(),N[ne].complete(),N[ne]=null)}function p(N){N instanceof o.w&&N.unsubscribe()}function F(N,ne){return function(){var ce;if(N&&N.call(this),L(this,P()),ne.arrayName&&function M(N){Array.isArray(N)&&N.forEach(p)}(this[ne.arrayName]),ne.checkProperties)for(const he in this)(null===(ce=ne.blackList)||void 0===ce?void 0:ce.includes(he))||p(this[he])}}function A(N={}){return ne=>{!function y(N){return!!N[C]}(ne)?function te(N,ne){N.prototype.ngOnDestroy=F(N.prototype.ngOnDestroy,ne)}(ne,N):function Q(N,ne){const ce=N.\u0275pipe;ce.onDestroy=F(ce.onDestroy,ne)}(ne,N),function ee(N){N.prototype[j]=!0}(ne)}}function B(N,ne){return ce=>{const he=P(ne);return"string"==typeof ne?function f(N,ne,ce){const he=N[ne];G(N,ce),N[ne]=function(){he.apply(this,arguments),L(this,ce),N[ne]=he}}(N,ne,he):G(N,he),ce.pipe((0,z.R)(N[he]))}}Symbol("CheckerHasBeenSet")},9552:(me,Y,i)=>{i.d(Y,{$:()=>$,j:()=>D});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),h=i(839),I=i(8929),l=i(6787),x=i(3753),a=i(7625),z=i(4850),C=i(3164),y=i(9439),T=i(1721),j=i(4090),P=i(925),ee=i(5577),G=i(226);const L=["fixedEl"],p=["*"];var M=(()=>{return(J=M||(M={})).resize="resize",J.scroll="scroll",J.touchstart="touchstart",J.touchmove="touchmove",J.touchend="touchend",J.pageshow="pageshow",J.load="LOAD",M;var J})();function te(J){return function F(J){return"undefined"!=typeof window&&J===window}(J)?{top:0,left:0,bottom:0}:J.getBoundingClientRect()}const A="ant-affix";let $=(()=>{class J{constructor(f,B,b,N,ne,ce,he,Me,Oe,Ee){this.nzConfigService=b,this.scrollSrv=N,this.ngZone=ne,this.platform=ce,this.renderer=he,this.nzResizeObserver=Me,this.cdr=Oe,this.directionality=Ee,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new h.t(1),this.destroy$=new I.xQ,this.placeholderNode=f.nativeElement,this.document=B}get target(){const f=this.nzTarget;return("string"==typeof f?this.document.querySelector(f):f)||window}ngOnInit(){var f;null===(f=this.directionality.change)||void 0===f||f.pipe((0,a.R)(this.destroy$)).subscribe(B=>{this.dir=B,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(f){const{nzOffsetBottom:B,nzOffsetTop:b,nzTarget:N}=f;(B||b)&&this.offsetChanged$.next(),N&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const f=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,l.T)(...Object.keys(M).map(B=>(0,x.R)(this.target,B)),this.offsetChanged$.pipe((0,z.U)(()=>({}))),this.nzResizeObserver.observe(f)).pipe((0,C.p)(20,void 0,{trailing:!0}),(0,a.R)(this.destroy$)).subscribe(B=>this.updatePosition(B))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(f,B){const b=f.getBoundingClientRect(),N=te(B),ne=this.scrollSrv.getScroll(B,!0),ce=this.scrollSrv.getScroll(B,!1),he=this.document.body;return{top:b.top-N.top+ne-(he.clientTop||0),left:b.left-N.left+ce-(he.clientLeft||0),width:b.width,height:b.height}}setAffixStyle(f,B){const b=this.affixStyle,N=this.target===window;if("scroll"===f.type&&b&&B&&N||(0,T.wU)(b,B))return;const ne=!!B,ce=this.fixedEl.nativeElement;this.renderer.setStyle(ce,"cssText",(0,T.GM)(B)),this.affixStyle=B,ne?ce.classList.add(A):ce.classList.remove(A),this.updateRtlClass(),(B&&!b||!B&&b)&&this.nzChange.emit(ne)}setPlaceholderStyle(f){(0,T.wU)(f,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,T.GM)(f)),this.placeholderStyle=f)}syncPlaceholderStyle(f){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const B={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(f,Object.assign(Object.assign({},this.affixStyle),B)),this.setPlaceholderStyle(B)}updatePosition(f){if(!this.platform.isBrowser)return;const B=this.target;let b=this.nzOffsetTop;const N=this.scrollSrv.getScroll(B,!0),ne=this.getOffset(this.placeholderNode,B),ce=this.fixedEl.nativeElement,he={width:ce.offsetWidth,height:ce.offsetHeight},Me={top:!1,bottom:!1};"number"!=typeof b&&"number"!=typeof this.nzOffsetBottom?(Me.top=!0,b=0):(Me.top="number"==typeof b,Me.bottom="number"==typeof this.nzOffsetBottom);const Oe=te(B),Ee=B.innerHeight||B.clientHeight;if(N>=ne.top-b&&Me.top){const ie=ne.width;this.setAffixStyle(f,{position:"fixed",top:Oe.top+b,left:Oe.left+ne.left,width:ie}),this.setPlaceholderStyle({width:ie,height:he.height})}else if(N<=ne.top+he.height+this.nzOffsetBottom-Ee&&Me.bottom){const ie=B===window?0:window.innerHeight-Oe.bottom,_e=ne.width;this.setAffixStyle(f,{position:"fixed",bottom:ie+this.nzOffsetBottom,left:Oe.left+ne.left,width:_e}),this.setPlaceholderStyle({width:_e,height:ne.height})}else f.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(f,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(f),this.setPlaceholderStyle();"resize"===f.type&&this.syncPlaceholderStyle(f)}updateRtlClass(){const f=this.fixedEl.nativeElement;"rtl"===this.dir&&f.classList.contains(A)?f.classList.add(`${A}-rtl`):f.classList.remove(`${A}-rtl`)}}return J.\u0275fac=function(f){return new(f||J)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(y.jY),n.Y36(j.MF),n.Y36(n.R0b),n.Y36(P.t4),n.Y36(n.Qsj),n.Y36(ee.D3),n.Y36(n.sBO),n.Y36(G.Is,8))},J.\u0275cmp=n.Xpm({type:J,selectors:[["nz-affix"]],viewQuery:function(f,B){if(1&f&&n.Gf(L,7),2&f){let b;n.iGM(b=n.CRH())&&(B.fixedEl=b.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:p,decls:3,vars:0,consts:[["fixedEl",""]],template:function(f,B){1&f&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,y.oS)(),(0,T.Rn)(void 0)],J.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,y.oS)(),(0,T.Rn)(void 0)],J.prototype,"nzOffsetBottom",void 0),J})(),D=(()=>{class J{}return J.\u0275fac=function(f){return new(f||J)},J.\u0275mod=n.oAB({type:J}),J.\u0275inj=n.cJS({imports:[[G.vT,o.ez,P.ud]]}),J})()},6699:(me,Y,i)=>{i.d(Y,{Dz:()=>P,Rt:()=>G});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),h=i(925),I=i(9808),l=i(5017),x=i(226);const a=["textEl"];function z(L,p){if(1&L&&o._UZ(0,"i",3),2&L){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function C(L,p){if(1&L){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(te){return o.CHM(M),o.oxw().imgError(te)}),o.qZA()}if(2&L){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function y(L,p){if(1&L&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&L){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let P=(()=>{class L{constructor(M,F,te,Q){this.nzConfigService=M,this.elementRef=F,this.cdr=te,this.platform=Q,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,F=this.el.getBoundingClientRect().width,te=2*this.nzGap<F?2*this.nzGap:8;this.textStyles={transform:`scale(${F-te<M?(F-te)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return L.\u0275fac=function(M){return new(M||L)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(h.t4))},L.\u0275cmp=o.Xpm({type:L,selectors:[["nz-avatar"]],viewQuery:function(M,F){if(1&M&&o.Gf(a,5),2&M){let te;o.iGM(te=o.CRH())&&(F.textEl=te.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,F){2&M&&(o.Udp("width",F.customSize)("height",F.customSize)("line-height",F.customSize)("font-size",F.hasIcon&&F.customSize?F.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===F.nzSize)("ant-avatar-sm","small"===F.nzSize)("ant-avatar-square","square"===F.nzShape)("ant-avatar-circle","circle"===F.nzShape)("ant-avatar-icon",F.nzIcon)("ant-avatar-image",F.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,F){1&M&&(o.YNc(0,z,1,1,"i",0),o.YNc(1,C,1,3,"img",1),o.YNc(2,y,3,2,"span",2)),2&M&&(o.Q6J("ngIf",F.nzIcon&&F.hasIcon),o.xp6(1),o.Q6J("ngIf",F.nzSrc&&F.hasSrc),o.xp6(1),o.Q6J("ngIf",F.nzText&&F.hasText))},directives:[I.O5,l.Ls,I.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],L.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],L.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],L.prototype,"nzGap",void 0),L})(),G=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=o.oAB({type:L}),L.\u0275inj=o.cJS({imports:[[x.vT,I.ez,l.PV,h.ud]]}),L})()},4401:(me,Y,i)=>{i.d(Y,{F9:()=>J,mS:()=>R,x7:()=>D});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),h=i(8076),I=i(9439),l=i(1721),x=i(226),a=i(4832),z=i(9808),C=i(969),y=i(7144);function T(f,B){if(1&f&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&f){const b=B.$implicit,N=o.oxw(2).index,ne=o.oxw(2);o.ekj("current",b===ne.countArray[N]),o.xp6(1),o.hij(" ",b," ")}}function j(f,B){if(1&f&&(o.ynx(0),o.YNc(1,T,2,3,"p",5),o.BQk()),2&f){const b=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",b.countSingleArray)}}function P(f,B){if(1&f&&(o.TgZ(0,"span",3),o.YNc(1,j,2,1,"ng-container",4),o.qZA()),2&f){const b=B.index,N=o.oxw(2);o.Udp("transform","translateY("+100*-N.countArray[b]+"%)"),o.Q6J("nzNoAnimation",N.noAnimation),o.xp6(1),o.Q6J("ngIf",!N.nzDot&&void 0!==N.countArray[b])}}function ee(f,B){if(1&f&&(o.ynx(0),o.YNc(1,P,2,4,"span",2),o.BQk()),2&f){const b=o.oxw();o.xp6(1),o.Q6J("ngForOf",b.maxNumberArray)}}function G(f,B){if(1&f&&o._uU(0),2&f){const b=o.oxw();o.hij("",b.nzOverflowCount,"+")}}function L(f,B){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const b=o.oxw(2);o.xp6(1),o.Oqu(b.nzText)}}function p(f,B){if(1&f&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,L,2,1,"ng-container",1),o.qZA(),o.BQk()),2&f){const b=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",b.nzStatus||b.presetColor,""),o.Udp("background",!b.presetColor&&b.nzColor),o.Q6J("ngStyle",b.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",b.nzText)}}function M(f,B){if(1&f&&o._UZ(0,"nz-badge-sup",5),2&f){const b=o.oxw(2);o.Q6J("nzOffset",b.nzOffset)("nzTitle",b.nzTitle)("nzStyle",b.nzStyle)("nzDot",b.nzDot)("nzOverflowCount",b.nzOverflowCount)("disableAnimation",!!(b.nzStandalone||b.nzStatus||b.nzColor||null!=b.noAnimation&&b.noAnimation.nzNoAnimation))("nzCount",b.nzCount)("noAnimation",!(null==b.noAnimation||!b.noAnimation.nzNoAnimation))}}function F(f,B){if(1&f&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&f){const b=o.oxw();o.xp6(1),o.Q6J("ngIf",b.showSup)}}const te=["*"];function Q(f,B){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const b=o.oxw();o.xp6(1),o.Oqu(b.nzText)}}const A=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let c=(()=>{class f{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(b){const{nzOverflowCount:N,nzCount:ne}=b;ne&&"number"==typeof ne.currentValue&&(this.count=Math.max(0,ne.currentValue),this.countArray=this.count.toString().split("").map(ce=>+ce)),N&&this.generateMaxNumberArray()}}return f.\u0275fac=function(b){return new(b||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(b,N){2&b&&(o.uIk("title",null===N.nzTitle?"":N.nzTitle||N.nzCount),o.d8E("@.disabled",N.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(N.nzStyle),o.Udp("right",N.nzOffset&&N.nzOffset[0]?-N.nzOffset[0]:null,"px")("margin-top",N.nzOffset&&N.nzOffset[1]?N.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!N.nzDot)("ant-badge-dot",N.nzDot)("ant-badge-multiple-words",N.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(b,N){if(1&b&&(o.YNc(0,ee,2,1,"ng-container",0),o.YNc(1,G,1,1,"ng-template",null,1,o.W1O)),2&b){const ne=o.MAs(2);o.Q6J("ngIf",N.count<=N.nzOverflowCount)("ngIfElse",ne)}},directives:[z.O5,z.sg,a.P],encapsulation:2,data:{animation:[h.Ev]},changeDetection:0}),f})(),D=(()=>{class f{constructor(b,N,ne,ce,he,Me){this.nzConfigService=b,this.renderer=N,this.cdr=ne,this.elementRef=ce,this.directionality=he,this.noAnimation=Me,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var b;null===(b=this.directionality.change)||void 0===b||b.pipe((0,s.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(b){const{nzColor:N,nzShowDot:ne,nzDot:ce,nzCount:he,nzShowZero:Me}=b;N&&(this.presetColor=this.nzColor&&-1!==A.indexOf(this.nzColor)?this.nzColor:null),(ne||ce||he||Me)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(b){return new(b||f)(o.Y36(I.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(x.Is,8),o.Y36(a.P,9))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(b,N){2&b&&o.ekj("ant-badge-status",N.nzStatus)("ant-badge-not-a-wrapper",!!(N.nzStandalone||N.nzStatus||N.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:te,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(b,N){1&b&&(o.F$t(),o.YNc(0,p,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,F,2,1,"ng-container",1)),2&b&&(o.Q6J("ngIf",N.nzStatus||N.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",N.nzCount))},directives:[c,z.O5,z.PC,C.f],encapsulation:2,data:{animation:[h.Ev]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],f.prototype,"nzShowZero",void 0),(0,e.gn)([(0,l.yF)()],f.prototype,"nzShowDot",void 0),(0,e.gn)([(0,l.yF)()],f.prototype,"nzStandalone",void 0),(0,e.gn)([(0,l.yF)()],f.prototype,"nzDot",void 0),(0,e.gn)([(0,I.oS)()],f.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,I.oS)()],f.prototype,"nzColor",void 0),f})(),J=(()=>{class f{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(b){const{nzColor:N}=b;N&&(this.presetColor=this.nzColor&&-1!==A.indexOf(this.nzColor)?this.nzColor:null)}}return f.\u0275fac=function(b){return new(b||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:te,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(b,N){1&b&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,Q,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&b&&(o.xp6(1),o.Tol(N.presetColor&&"ant-ribbon-color-"+N.presetColor),o.Udp("background-color",!N.presetColor&&N.nzColor),o.ekj("ant-ribbon-placement-end","end"===N.nzPlacement)("ant-ribbon-placement-start","start"===N.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",N.nzText),o.xp6(1),o.Udp("color",!N.presetColor&&N.nzColor))},directives:[C.f],encapsulation:2,changeDetection:0}),f})(),R=(()=>{class f{}return f.\u0275fac=function(b){return new(b||f)},f.\u0275mod=o.oAB({type:f}),f.\u0275inj=o.cJS({imports:[[x.vT,z.ez,y.Q8,C.T,a.g]]}),f})()},7484:(me,Y,i)=>{i.d(Y,{_i:()=>he,bd:()=>Ee,vh:()=>_e});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),h=i(7625),I=i(9439),l=i(226),x=i(9808),a=i(969);function z(S,se){1&S&&o.Hsn(0)}const C=["*"];function y(S,se){1&S&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&S&&o.Q6J("ngClass",se.$implicit)}function T(S,se){if(1&S&&(o.TgZ(0,"div",2),o.YNc(1,y,2,1,"div",3),o.qZA()),2&S){const U=se.$implicit;o.xp6(1),o.Q6J("ngForOf",U)}}function j(S,se){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const U=o.oxw(3);o.xp6(1),o.Oqu(U.nzTitle)}}function P(S,se){if(1&S&&(o.TgZ(0,"div",11),o.YNc(1,j,2,1,"ng-container",12),o.qZA()),2&S){const U=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",U.nzTitle)}}function ee(S,se){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const U=o.oxw(3);o.xp6(1),o.Oqu(U.nzExtra)}}function G(S,se){if(1&S&&(o.TgZ(0,"div",13),o.YNc(1,ee,2,1,"ng-container",12),o.qZA()),2&S){const U=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",U.nzExtra)}}function L(S,se){}function p(S,se){if(1&S&&(o.ynx(0),o.YNc(1,L,0,0,"ng-template",14),o.BQk()),2&S){const U=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",U.listOfNzCardTabComponent.template)}}function M(S,se){if(1&S&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,P,2,1,"div",8),o.YNc(3,G,2,1,"div",9),o.qZA(),o.YNc(4,p,2,1,"ng-container",10),o.qZA()),2&S){const U=o.oxw();o.xp6(2),o.Q6J("ngIf",U.nzTitle),o.xp6(1),o.Q6J("ngIf",U.nzExtra),o.xp6(1),o.Q6J("ngIf",U.listOfNzCardTabComponent)}}function F(S,se){}function te(S,se){if(1&S&&(o.TgZ(0,"div",15),o.YNc(1,F,0,0,"ng-template",14),o.qZA()),2&S){const U=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",U.nzCover)}}function Q(S,se){1&S&&(o.ynx(0),o.Hsn(1),o.BQk())}function A(S,se){1&S&&o._UZ(0,"nz-card-loading")}function c(S,se){}function $(S,se){if(1&S&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,c,0,0,"ng-template",14),o.qZA()()),2&S){const U=se.$implicit,V=o.oxw(2);o.Udp("width",100/V.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",U)}}function D(S,se){if(1&S&&(o.TgZ(0,"ul",16),o.YNc(1,$,3,3,"li",17),o.qZA()),2&S){const U=o.oxw();o.xp6(1),o.Q6J("ngForOf",U.nzActions)}}let ce=(()=>{class S{constructor(){this.nzHoverable=!0}}return S.\u0275fac=function(U){return new(U||S)},S.\u0275dir=o.lG2({type:S,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(U,V){2&U&&o.ekj("ant-card-hoverable",V.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],S.prototype,"nzHoverable",void 0),S})(),he=(()=>{class S{}return S.\u0275fac=function(U){return new(U||S)},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card-tab"]],viewQuery:function(U,V){if(1&U&&o.Gf(o.Rgc,7),2&U){let H;o.iGM(H=o.CRH())&&(V.template=H.first)}},exportAs:["nzCardTab"],ngContentSelectors:C,decls:1,vars:0,template:function(U,V){1&U&&(o.F$t(),o.YNc(0,z,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),S})(),Me=(()=>{class S{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return S.\u0275fac=function(U){return new(U||S)},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(U,V){1&U&&(o.TgZ(0,"div",0),o.YNc(1,T,2,1,"div",1),o.qZA()),2&U&&(o.xp6(1),o.Q6J("ngForOf",V.listOfLoading))},directives:[x.sg,x.mk],encapsulation:2,changeDetection:0}),S})(),Ee=(()=>{class S{constructor(U,V,H){this.nzConfigService=U,this.cdr=V,this.directionality=H,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,h.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,h.R)(this.destroy$)).subscribe(V=>{this.dir=V,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(U){return new(U||S)(o.Y36(I.jY),o.Y36(o.sBO),o.Y36(l.Is,8))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card"]],contentQueries:function(U,V,H){if(1&U&&(o.Suo(H,he,5),o.Suo(H,ce,4)),2&U){let q;o.iGM(q=o.CRH())&&(V.listOfNzCardTabComponent=q.first),o.iGM(q=o.CRH())&&(V.listOfNzCardGridDirective=q)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(U,V){2&U&&o.ekj("ant-card-loading",V.nzLoading)("ant-card-bordered",!1===V.nzBorderless&&V.nzBordered)("ant-card-hoverable",V.nzHoverable)("ant-card-small","small"===V.nzSize)("ant-card-contain-grid",V.listOfNzCardGridDirective&&V.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===V.nzType)("ant-card-contain-tabs",!!V.listOfNzCardTabComponent)("ant-card-rtl","rtl"===V.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:C,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(U,V){if(1&U&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,te,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,Q,2,0,"ng-container",3),o.YNc(4,A,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,D,2,1,"ul",5)),2&U){const H=o.MAs(5);o.Q6J("ngIf",V.nzTitle||V.nzExtra||V.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",V.nzCover),o.xp6(1),o.Q6J("ngStyle",V.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!V.nzLoading)("ngIfElse",H),o.xp6(3),o.Q6J("ngIf",V.nzActions.length)}},directives:[Me,x.O5,a.f,x.tP,x.PC,x.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],S.prototype,"nzBordered",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],S.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],S.prototype,"nzLoading",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],S.prototype,"nzHoverable",void 0),(0,e.gn)([(0,I.oS)()],S.prototype,"nzSize",void 0),S})(),_e=(()=>{class S{}return S.\u0275fac=function(U){return new(U||S)},S.\u0275mod=o.oAB({type:S}),S.\u0275inj=o.cJS({imports:[[x.ez,a.T],l.vT]}),S})()},5577:(me,Y,i)=>{i.d(Y,{D3:()=>I,y7:()=>x});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let h=(()=>{class a{create(C){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(C)}}return a.\u0275fac=function(C){return new(C||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),I=(()=>{class a{constructor(C){this.nzResizeObserverFactory=C,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((C,y)=>this.cleanupObserver(y))}observe(C){const y=(0,o.fI)(C);return new n.y(T=>{const P=this.observeElement(y).subscribe(T);return()=>{P.unsubscribe(),this.unobserveElement(y)}})}observeElement(C){if(this.observedElements.has(C))this.observedElements.get(C).count++;else{const y=new s.xQ,T=this.nzResizeObserverFactory.create(j=>y.next(j));T&&T.observe(C),this.observedElements.set(C,{observer:T,stream:y,count:1})}return this.observedElements.get(C).stream}unobserveElement(C){this.observedElements.has(C)&&(this.observedElements.get(C).count--,this.observedElements.get(C).count||this.cleanupObserver(C))}cleanupObserver(C){if(this.observedElements.has(C)){const{observer:y,stream:T}=this.observedElements.get(C);y&&y.disconnect(),T.complete(),this.observedElements.delete(C)}}}return a.\u0275fac=function(C){return new(C||a)(e.LFG(h))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),x=(()=>{class a{}return a.\u0275fac=function(C){return new(C||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[h]}),a})()},5482:(me,Y,i)=>{i.d(Y,{Zv:()=>c,cD:()=>$,yH:()=>Q});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),h=i(2198),I=i(8076),l=i(9439),x=i(4090),a=i(1721),z=i(226),C=i(4832),y=i(9808),T=i(969),j=i(5017);const P=["*"],ee=["collapseHeader"];function G(D,J){if(1&D&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&D){const R=J.$implicit,f=o.oxw(2);o.xp6(1),o.Q6J("nzType",R||"right")("nzRotate",f.nzActive?90:0)}}function L(D,J){if(1&D&&(o.TgZ(0,"div"),o.YNc(1,G,2,2,"ng-container",3),o.qZA()),2&D){const R=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",R.nzExpandedIcon)}}function p(D,J){if(1&D&&(o.ynx(0),o._uU(1),o.BQk()),2&D){const R=o.oxw();o.xp6(1),o.Oqu(R.nzHeader)}}function M(D,J){if(1&D&&(o.ynx(0),o._uU(1),o.BQk()),2&D){const R=o.oxw(2);o.xp6(1),o.Oqu(R.nzExtra)}}function F(D,J){if(1&D&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&D){const R=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",R.nzExtra)}}const te="collapse";let Q=(()=>{class D{constructor(R,f,B,b){this.nzConfigService=R,this.cdr=f,this.directionality=B,this.destroy$=b,this._nzModuleName=te,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(te).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var R;null===(R=this.directionality.change)||void 0===R||R.pipe((0,s.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(R){this.listOfNzCollapsePanelComponent.push(R)}removePanel(R){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(R),1)}click(R){this.nzAccordion&&!R.nzActive&&this.listOfNzCollapsePanelComponent.filter(f=>f!==R).forEach(f=>{f.nzActive&&(f.nzActive=!1,f.nzActiveChange.emit(f.nzActive),f.markForCheck())}),R.nzActive=!R.nzActive,R.nzActiveChange.emit(R.nzActive)}}return D.\u0275fac=function(R){return new(R||D)(o.Y36(l.jY),o.Y36(o.sBO),o.Y36(z.Is,8),o.Y36(x.kn))},D.\u0275cmp=o.Xpm({type:D,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(R,f){2&R&&o.ekj("ant-collapse-icon-position-left","left"===f.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===f.nzExpandIconPosition)("ant-collapse-ghost",f.nzGhost)("ant-collapse-borderless",!f.nzBordered)("ant-collapse-rtl","rtl"===f.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([x.kn])],ngContentSelectors:P,decls:1,vars:0,template:function(R,f){1&R&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzAccordion",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzBordered",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzGhost",void 0),D})();const A="collapsePanel";let c=(()=>{class D{constructor(R,f,B,b,N,ne){this.nzConfigService=R,this.ngZone=f,this.cdr=B,this.destroy$=b,this.nzCollapseComponent=N,this.noAnimation=ne,this._nzModuleName=A,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(A).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,h.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return D.\u0275fac=function(R){return new(R||D)(o.Y36(l.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(x.kn),o.Y36(Q,1),o.Y36(C.P,8))},D.\u0275cmp=o.Xpm({type:D,selectors:[["nz-collapse-panel"]],viewQuery:function(R,f){if(1&R&&o.Gf(ee,7),2&R){let B;o.iGM(B=o.CRH())&&(f.collapseHeader=B.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(R,f){2&R&&o.ekj("ant-collapse-no-arrow",!f.nzShowArrow)("ant-collapse-item-active",f.nzActive)("ant-collapse-item-disabled",f.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([x.kn])],ngContentSelectors:P,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(R,f){1&R&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,L,2,1,"div",2),o.YNc(3,p,2,1,"ng-container",3),o.YNc(4,F,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&R&&(o.uIk("aria-expanded",f.nzActive),o.xp6(2),o.Q6J("ngIf",f.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",f.nzHeader),o.xp6(1),o.Q6J("ngIf",f.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",f.nzActive),o.Q6J("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("@collapseMotion",f.nzActive?"expanded":"hidden"))},directives:[y.O5,T.f,j.Ls],encapsulation:2,data:{animation:[I.J_]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],D.prototype,"nzActive",void 0),(0,e.gn)([(0,a.yF)()],D.prototype,"nzDisabled",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzShowArrow",void 0),D})(),$=(()=>{class D{}return D.\u0275fac=function(R){return new(R||D)},D.\u0275mod=o.oAB({type:D}),D.\u0275inj=o.cJS({imports:[[z.vT,y.ez,j.PV,T.T,C.g]]}),D})()},3098:(me,Y,i)=>{i.d(Y,{R7:()=>ae,q6:()=>ze,uj:()=>Ce});var e=i(226),o=i(925),n=i(9808),s=i(5e3),h=i(969),I=i(655),l=i(8929),x=i(6787),a=i(1721),z=i(7625),C=i(1059),y=i(7545),T=i(7138),j=i(2994),P=i(9439),ee=i(948),G=i(4090);function L(w,pe){1&w&&s.Hsn(0)}const p=["*"];function M(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw(3);s.xp6(1),s.Oqu(Z.nzTitle)}}function F(w,pe){if(1&w&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&w){const Z=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.nzTitle)}}function te(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw(3);s.xp6(1),s.Oqu(Z.nzExtra)}}function Q(w,pe){if(1&w&&(s.TgZ(0,"div",8),s.YNc(1,te,2,1,"ng-container",7),s.qZA()),2&w){const Z=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.nzExtra)}}function A(w,pe){if(1&w&&(s.TgZ(0,"div",3),s.YNc(1,F,2,1,"div",4),s.YNc(2,Q,2,1,"div",5),s.qZA()),2&w){const Z=s.oxw();s.xp6(1),s.Q6J("ngIf",Z.nzTitle),s.xp6(1),s.Q6J("ngIf",Z.nzExtra)}}function c(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function $(w,pe){}function D(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,c,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,$,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&w){const Z=s.oxw().$implicit,ye=s.oxw(3);s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ye.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title),s.xp6(2),s.Q6J("ngTemplateOutlet",Z.content)}}function J(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function R(w,pe){if(1&w&&(s.TgZ(0,"td",14),s.YNc(1,J,2,1,"ng-container",7),s.qZA()),2&w){const Z=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function f(w,pe){}function B(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,R,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,f,0,0,"ng-template",16),s.qZA(),s.BQk()),2&w){const Z=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title),s.xp6(1),s.Q6J("colSpan",2*Z.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",Z.content)}}function b(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,D,7,5,"ng-container",2),s.YNc(2,B,4,3,"ng-container",2),s.BQk()),2&w){const Z=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!Z.nzBordered),s.xp6(1),s.Q6J("ngIf",Z.nzBordered)}}function N(w,pe){if(1&w&&(s.TgZ(0,"tr",10),s.YNc(1,b,3,2,"ng-container",11),s.qZA()),2&w){const Z=pe.$implicit;s.xp6(1),s.Q6J("ngForOf",Z)}}function ne(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,N,2,1,"tr",9),s.BQk()),2&w){const Z=s.oxw();s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function ce(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw().$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function he(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ce,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&w){const Z=pe.$implicit,ye=s.oxw(4);s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ye.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function Me(w,pe){}function Oe(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,Me,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&w){const Z=pe.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(3),s.Q6J("ngTemplateOutlet",Z.content)}}function Ee(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,he,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Oe,5,2,"ng-container",11),s.qZA(),s.BQk()),2&w){const Z=pe.$implicit;s.xp6(2),s.Q6J("ngForOf",Z),s.xp6(2),s.Q6J("ngForOf",Z)}}function ie(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,Ee,5,2,"ng-container",11),s.BQk()),2&w){const Z=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function _e(w,pe){if(1&w&&(s.ynx(0),s._uU(1),s.BQk()),2&w){const Z=s.oxw().$implicit;s.xp6(1),s.hij(" ",Z.title," ")}}function S(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,_e,2,1,"ng-container",7),s.qZA(),s.BQk()),2&w){const Z=pe.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",Z.title)}}function se(w,pe){}function U(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,se,0,0,"ng-template",16),s.qZA(),s.BQk()),2&w){const Z=pe.$implicit;s.xp6(1),s.Q6J("colSpan",Z.span),s.xp6(1),s.Q6J("ngTemplateOutlet",Z.content)}}function V(w,pe){if(1&w&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,S,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,U,3,2,"ng-container",11),s.qZA(),s.BQk()),2&w){const Z=pe.$implicit;s.xp6(2),s.Q6J("ngForOf",Z),s.xp6(2),s.Q6J("ngForOf",Z)}}function H(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,V,5,2,"ng-container",11),s.BQk()),2&w){const Z=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",Z.itemMatrix)}}function q(w,pe){if(1&w&&(s.ynx(0),s.YNc(1,ie,2,1,"ng-container",2),s.YNc(2,H,2,1,"ng-container",2),s.BQk()),2&w){const Z=s.oxw();s.xp6(1),s.Q6J("ngIf",!Z.nzBordered),s.xp6(1),s.Q6J("ngIf",Z.nzBordered)}}let Ce=(()=>{class w{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new l.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return w.\u0275fac=function(Z){return new(Z||w)},w.\u0275cmp=s.Xpm({type:w,selectors:[["nz-descriptions-item"]],viewQuery:function(Z,ye){if(1&Z&&s.Gf(s.Rgc,7),2&Z){let Pe;s.iGM(Pe=s.CRH())&&(ye.content=Pe.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:p,decls:1,vars:0,template:function(Z,ye){1&Z&&(s.F$t(),s.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,I.gn)([(0,a.Rn)()],w.prototype,"nzSpan",void 0),w})();const ge={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let ae=(()=>{class w{constructor(Z,ye,Pe,xe){this.nzConfigService=Z,this.cdr=ye,this.breakpointService=Pe,this.directionality=xe,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ge,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=G.G_.md,this.destroy$=new l.xQ}ngOnInit(){var Z;this.dir=this.directionality.value,null===(Z=this.directionality.change)||void 0===Z||Z.pipe((0,z.R)(this.destroy$)).subscribe(ye=>{this.dir=ye})}ngOnChanges(Z){Z.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const Z=this.items.changes.pipe((0,C.O)(this.items),(0,z.R)(this.destroy$));(0,x.T)(Z,Z.pipe((0,y.w)(()=>(0,x.T)(...this.items.map(ye=>ye.inputChange$)).pipe((0,T.e)(16)))),this.breakpointService.subscribe(G.WV).pipe((0,j.b)(ye=>this.breakpoint=ye))).pipe((0,z.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let Z=[],ye=0;const Pe=this.realColumn=this.getColumn(),xe=this.items.toArray(),Re=xe.length,be=[],Ue=()=>{be.push(Z),Z=[],ye=0};for(let Ge=0;Ge<Re;Ge++){const Be=xe[Ge],{nzTitle:Fe,content:we,nzSpan:$e}=Be;ye+=$e,ye>=Pe?(ye>Pe&&(0,ee.ZK)(`"nzColumn" is ${Pe} but we have row length ${ye}`),Z.push({title:Fe,content:we,span:Pe-(ye-$e)}),Ue()):Ge===Re-1?(Z.push({title:Fe,content:we,span:Pe-(ye-$e)}),Ue()):Z.push({title:Fe,content:we,span:$e})}this.itemMatrix=be}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return w.\u0275fac=function(Z){return new(Z||w)(s.Y36(P.jY),s.Y36(s.sBO),s.Y36(G.r3),s.Y36(e.Is,8))},w.\u0275cmp=s.Xpm({type:w,selectors:[["nz-descriptions"]],contentQueries:function(Z,ye,Pe){if(1&Z&&s.Suo(Pe,Ce,4),2&Z){let xe;s.iGM(xe=s.CRH())&&(ye.items=xe)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(Z,ye){2&Z&&s.ekj("ant-descriptions-bordered",ye.nzBordered)("ant-descriptions-middle","middle"===ye.nzSize)("ant-descriptions-small","small"===ye.nzSize)("ant-descriptions-rtl","rtl"===ye.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(Z,ye){1&Z&&(s.YNc(0,A,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,ne,2,1,"ng-container",2),s.YNc(5,q,3,2,"ng-container",2),s.qZA()()()),2&Z&&(s.Q6J("ngIf",ye.nzTitle||ye.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ye.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ye.nzLayout))},directives:[n.O5,h.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,a.yF)(),(0,P.oS)()],w.prototype,"nzBordered",void 0),(0,I.gn)([(0,P.oS)()],w.prototype,"nzColumn",void 0),(0,I.gn)([(0,P.oS)()],w.prototype,"nzSize",void 0),(0,I.gn)([(0,P.oS)(),(0,a.yF)()],w.prototype,"nzColon",void 0),w})(),ze=(()=>{class w{}return w.\u0275fac=function(Z){return new(Z||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[[e.vT,n.ez,h.T,o.ud]]}),w})()},3677:(me,Y,i)=>{i.d(Y,{RR:()=>ie,b1:()=>_e,cm:()=>he,wA:()=>Ee});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),h=i(8929),I=i(591),l=i(6787),x=i(3753),a=i(8896),z=i(6053),C=i(7604),y=i(4850),T=i(7545),j=i(2198),P=i(7138),ee=i(5778),G=i(7625),L=i(9439),p=i(6950),M=i(1721),F=i(1314),te=i(925),Q=i(226),A=i(9808),c=i(3075),$=i(6042),D=i(4832),J=i(969),R=i(5017),f=i(4219),B=i(8076);function b(U,V){if(1&U){const H=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(Ce){return s.CHM(H),s.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return s.CHM(H),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(H),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&U){const H=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===H.dir),s.Q6J("ngClass",H.nzOverlayClassName)("ngStyle",H.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==H.noAnimation?null:H.noAnimation.nzNoAnimation)("nzNoAnimation",null==H.noAnimation?null:H.noAnimation.nzNoAnimation)}}const N=["*"],ce=[p.yW.bottomLeft,p.yW.bottomRight,p.yW.topRight,p.yW.topLeft];let he=(()=>{class U{constructor(H,q,Ce,re,ge,ae){this.nzConfigService=H,this.elementRef=q,this.overlay=Ce,this.renderer=re,this.viewContainerRef=ge,this.platform=ae,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new h.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new I.X(!1),this.nzTrigger$=new I.X("hover"),this.overlayClose$=new h.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(H,q){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(H,q)}ngAfterViewInit(){if(this.nzDropdownMenu){const H=this.elementRef.nativeElement,q=(0,l.T)((0,x.R)(H,"mouseenter").pipe((0,C.h)(!0)),(0,x.R)(H,"mouseleave").pipe((0,C.h)(!1))),re=(0,l.T)(this.nzDropdownMenu.mouseState$,q),ge=(0,x.R)(H,"click").pipe((0,y.U)(()=>!this.nzVisible)),ae=this.nzTrigger$.pipe((0,T.w)(Z=>"hover"===Z?re:"click"===Z?ge:a.E)),ze=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,j.h)(()=>this.nzClickHide),(0,C.h)(!1)),w=(0,l.T)(ae,ze,this.overlayClose$).pipe((0,j.h)(()=>!this.nzDisabled)),pe=(0,l.T)(this.inputVisible$,w);(0,z.aj)([pe,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,y.U)(([Z,ye])=>Z||ye),(0,P.e)(150),(0,ee.x)(),(0,j.h)(()=>this.platform.isBrowser),(0,G.R)(this.destroy$)).subscribe(Z=>{const Pe=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:H).getBoundingClientRect().width;this.nzVisible!==Z&&this.nzVisibleChange.emit(Z),this.nzVisible=Z,Z?(this.overlayRef?this.overlayRef.getConfig().minWidth=Pe:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Pe,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,l.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,j.h)(xe=>!this.elementRef.nativeElement.contains(xe.target))),this.overlayRef.keydownEvents().pipe((0,j.h)(xe=>xe.keyCode===o.hY&&!(0,o.Vb)(xe)))).pipe((0,G.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([p.yW[this.nzPlacement],...ce]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,G.R)(this.destroy$)).subscribe(Z=>{"void"===Z.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(H){const{nzVisible:q,nzDisabled:Ce,nzOverlayClassName:re,nzOverlayStyle:ge,nzTrigger:ae}=H;if(ae&&this.nzTrigger$.next(this.nzTrigger),q&&this.inputVisible$.next(this.nzVisible),Ce){const ze=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(ze,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(ze,"disabled")}re&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),ge&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return U.\u0275fac=function(H){return new(H||U)(s.Y36(L.jY),s.Y36(s.SBq),s.Y36(F.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(te.t4))},U.\u0275dir=s.lG2({type:U,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,L.oS)(),(0,M.yF)()],U.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],U.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],U.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],U.prototype,"nzVisible",void 0),U})(),Me=(()=>{class U{}return U.\u0275fac=function(H){return new(H||U)},U.\u0275mod=s.oAB({type:U}),U.\u0275inj=s.cJS({}),U})(),Ee=(()=>{class U{constructor(H,q,Ce){this.renderer=H,this.nzButtonGroupComponent=q,this.elementRef=Ce}ngAfterViewInit(){const H=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&H&&this.renderer.addClass(H,"ant-dropdown-button")}}return U.\u0275fac=function(H){return new(H||U)(s.Y36(s.Qsj),s.Y36($.fY,9),s.Y36(s.SBq))},U.\u0275dir=s.lG2({type:U,selectors:[["","nz-button","","nz-dropdown",""]]}),U})(),ie=(()=>{class U{constructor(H,q,Ce,re,ge,ae,ze){this.cdr=H,this.elementRef=q,this.renderer=Ce,this.viewContainerRef=re,this.nzMenuService=ge,this.directionality=ae,this.noAnimation=ze,this.mouseState$=new I.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new h.xQ}onAnimationEvent(H){this.animationStateChange$.emit(H)}setMouseState(H){this.mouseState$.next(H)}setValue(H,q){this[H]=q,this.cdr.markForCheck()}ngOnInit(){var H;null===(H=this.directionality.change)||void 0===H||H.pipe((0,G.R)(this.destroy$)).subscribe(q=>{this.dir=q,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return U.\u0275fac=function(H){return new(H||U)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(f.hl),s.Y36(Q.Is,8),s.Y36(D.P,9))},U.\u0275cmp=s.Xpm({type:U,selectors:[["nz-dropdown-menu"]],viewQuery:function(H,q){if(1&H&&s.Gf(s.Rgc,7),2&H){let Ce;s.iGM(Ce=s.CRH())&&(q.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([f.hl,{provide:f.Cc,useValue:!0}])],ngContentSelectors:N,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(H,q){1&H&&(s.F$t(),s.YNc(0,b,2,7,"ng-template"))},directives:[A.mk,A.PC,D.P],encapsulation:2,data:{animation:[B.mF]},changeDetection:0}),U})(),_e=(()=>{class U{}return U.\u0275fac=function(H){return new(H||U)},U.\u0275mod=s.oAB({type:U}),U.\u0275inj=s.cJS({imports:[[Q.vT,A.ez,F.U8,c.u5,$.sL,f.ip,R.PV,D.g,te.ud,p.e4,Me,J.T],f.ip]}),U})();new F.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new F.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new F.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new F.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(me,Y,i)=>{i.d(Y,{AA:()=>tt,I2:()=>Qe,IO:()=>ue,Ph:()=>it,n_:()=>Xe,t4:()=>Ke,yi:()=>ve,yw:()=>oe});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),h=i(655),I=i(1721),l=i(8929),x=i(8514),a=i(1086),z=i(6787),C=i(2916),y=i(591),T=i(2986),j=i(7545),P=i(7625),ee=i(4090),G=i(685),L=i(226),p=i(7525),M=i(1894);const F=["*"];function te(_,k){if(1&_&&e._UZ(0,"nz-avatar",3),2&_){const E=e.oxw();e.Q6J("nzSrc",E.nzSrc)}}function Q(_,k){1&_&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function A(_,k){if(1&_&&e._UZ(0,"nz-list-item-meta-avatar",3),2&_){const E=e.oxw();e.Q6J("nzSrc",E.avatarStr)}}function c(_,k){if(1&_&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",E.avatarTpl)}}function $(_,k){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const E=e.oxw(3);e.xp6(1),e.Oqu(E.nzTitle)}}function D(_,k){if(1&_&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,$,2,1,"ng-container",6),e.qZA()),2&_){const E=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",E.nzTitle)}}function J(_,k){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const E=e.oxw(3);e.xp6(1),e.Oqu(E.nzDescription)}}function R(_,k){if(1&_&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,J,2,1,"ng-container",6),e.qZA()),2&_){const E=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",E.nzDescription)}}function f(_,k){if(1&_&&(e.TgZ(0,"div",5),e.YNc(1,D,2,1,"nz-list-item-meta-title",1),e.YNc(2,R,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("ngIf",E.nzTitle&&!E.titleComponent),e.xp6(1),e.Q6J("ngIf",E.nzDescription&&!E.descriptionComponent)}}const B=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],b=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function N(_,k){1&_&&e.Hsn(0)}const ne=["nz-list-item-actions",""];function ce(_,k){}function he(_,k){1&_&&e._UZ(0,"em",3)}function Me(_,k){if(1&_&&(e.TgZ(0,"li"),e.YNc(1,ce,0,0,"ng-template",1),e.YNc(2,he,1,0,"em",2),e.qZA()),2&_){const E=k.$implicit,le=k.last;e.xp6(1),e.Q6J("ngTemplateOutlet",E),e.xp6(1),e.Q6J("ngIf",!le)}}function Oe(_,k){}const Ee=function(_,k){return{$implicit:_,index:k}};function ie(_,k){if(1&_&&(e.ynx(0),e.YNc(1,Oe,0,0,"ng-template",9),e.BQk()),2&_){const E=k.$implicit,le=k.index,De=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,Ee,E,le))}}function _e(_,k){if(1&_&&(e.TgZ(0,"div",7),e.YNc(1,ie,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("ngForOf",E.nzDataSource)}}function S(_,k){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const E=e.oxw(2);e.xp6(1),e.Oqu(E.nzHeader)}}function se(_,k){if(1&_&&(e.TgZ(0,"nz-list-header"),e.YNc(1,S,2,1,"ng-container",10),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",E.nzHeader)}}function U(_,k){1&_&&e._UZ(0,"div"),2&_&&e.Udp("min-height",53,"px")}function V(_,k){}function H(_,k){if(1&_&&(e.TgZ(0,"div",13),e.YNc(1,V,0,0,"ng-template",9),e.qZA()),2&_){const E=k.$implicit,le=k.index,De=e.oxw(2);e.Q6J("nzSpan",De.nzGrid.span||null)("nzXs",De.nzGrid.xs||null)("nzSm",De.nzGrid.sm||null)("nzMd",De.nzGrid.md||null)("nzLg",De.nzGrid.lg||null)("nzXl",De.nzGrid.xl||null)("nzXXl",De.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",De.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,Ee,E,le))}}function q(_,k){if(1&_&&(e.TgZ(0,"div",11),e.YNc(1,H,2,12,"div",12),e.qZA()),2&_){const E=e.oxw();e.Q6J("nzGutter",E.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",E.nzDataSource)}}function Ce(_,k){if(1&_&&e._UZ(0,"nz-list-empty",14),2&_){const E=e.oxw();e.Q6J("nzNoResult",E.nzNoResult)}}function re(_,k){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const E=e.oxw(2);e.xp6(1),e.Oqu(E.nzFooter)}}function ge(_,k){if(1&_&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,re,2,1,"ng-container",10),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",E.nzFooter)}}function ae(_,k){}function ze(_,k){}function w(_,k){if(1&_&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,ze,0,0,"ng-template",6),e.qZA()),2&_){const E=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",E.nzPagination)}}const pe=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Z=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ye(_,k){if(1&_&&e._UZ(0,"ul",6),2&_){const E=e.oxw(2);e.Q6J("nzActions",E.nzActions)}}function Pe(_,k){if(1&_&&(e.YNc(0,ye,1,1,"ul",5),e.Hsn(1)),2&_){const E=e.oxw();e.Q6J("ngIf",E.nzActions&&E.nzActions.length>0)}}function xe(_,k){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const E=e.oxw(3);e.xp6(1),e.Oqu(E.nzContent)}}function Re(_,k){if(1&_&&(e.ynx(0),e.YNc(1,xe,2,1,"ng-container",8),e.BQk()),2&_){const E=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",E.nzContent)}}function be(_,k){if(1&_&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,Re,2,1,"ng-container",7)),2&_){const E=e.oxw();e.xp6(2),e.Q6J("ngIf",E.nzContent)}}function Ue(_,k){1&_&&e.Hsn(0,3)}function Ge(_,k){}function Be(_,k){}function Fe(_,k){}function we(_,k){}function $e(_,k){if(1&_&&(e.YNc(0,Ge,0,0,"ng-template",9),e.YNc(1,Be,0,0,"ng-template",9),e.YNc(2,Fe,0,0,"ng-template",9),e.YNc(3,we,0,0,"ng-template",9)),2&_){const E=e.oxw(),le=e.MAs(3),De=e.MAs(5),Ae=e.MAs(1);e.Q6J("ngTemplateOutlet",le),e.xp6(1),e.Q6J("ngTemplateOutlet",E.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",De),e.xp6(1),e.Q6J("ngTemplateOutlet",Ae)}}function Ze(_,k){}function je(_,k){}function Ye(_,k){}function We(_,k){if(1&_&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,Ye,0,0,"ng-template",9),e.qZA()),2&_){const E=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",E.nzExtra)}}function W(_,k){}function fe(_,k){if(1&_&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,je,0,0,"ng-template",9),e.qZA(),e.YNc(4,We,2,1,"nz-list-item-extra",7),e.YNc(5,W,0,0,"ng-template",9),e.BQk()),2&_){const E=e.oxw(),le=e.MAs(3),De=e.MAs(1),Ae=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",le),e.xp6(1),e.Q6J("ngTemplateOutlet",De),e.xp6(1),e.Q6J("ngIf",E.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ae)}}const v=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],g=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ue=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(E,le){1&E&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),_})(),Te=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(E,le){1&E&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),_})(),K=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:F,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(E,le){1&E&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,te,1,1,"nz-avatar",1),e.YNc(2,Q,1,0,"ng-content",2),e.qZA()),2&E&&(e.xp6(1),e.Q6J("ngIf",le.nzSrc),e.xp6(1),e.Q6J("ngIf",!le.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),_})(),ve=(()=>{class _{constructor(E,le){this.elementRef=E,this.renderer=le,this.avatarStr="",this.renderer.addClass(E.nativeElement,"ant-list-item-meta")}set nzAvatar(E){E instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=E):this.avatarStr=E}}return _.\u0275fac=function(E){return new(E||_)(e.Y36(e.SBq),e.Y36(e.Qsj))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(E,le,De){if(1&E&&(e.Suo(De,Te,5),e.Suo(De,ue,5)),2&E){let Ae;e.iGM(Ae=e.CRH())&&(le.descriptionComponent=Ae.first),e.iGM(Ae=e.CRH())&&(le.titleComponent=Ae.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:b,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(E,le){1&E&&(e.F$t(B),e.YNc(0,A,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,c,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,f,5,2,"div",2)),2&E&&(e.Q6J("ngIf",le.avatarStr),e.xp6(1),e.Q6J("ngIf",le.avatarTpl),e.xp6(2),e.Q6J("ngIf",le.nzTitle||le.nzDescription||le.descriptionComponent||le.titleComponent))},directives:[K,ue,Te,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),_})(),oe=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:F,decls:1,vars:0,template:function(E,le){1&E&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),Se=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-action"]],viewQuery:function(E,le){if(1&E&&e.Gf(e.Rgc,5),2&E){let De;e.iGM(De=e.CRH())&&(le.templateRef=De.first)}},exportAs:["nzListItemAction"],ngContentSelectors:F,decls:1,vars:0,template:function(E,le){1&E&&(e.F$t(),e.YNc(0,N,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),_})(),Le=(()=>{class _{constructor(E,le,De){this.ngZone=E,this.nzActions=[],this.actions=[],this.inputActionChanges$=new l.xQ,this.contentChildrenChanges$=(0,x.P)(()=>this.nzListItemActions?(0,a.of)(null):this.ngZone.onStable.pipe((0,T.q)(1),this.enterZone(),(0,j.w)(()=>this.contentChildrenChanges$))),(0,z.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,P.R)(De)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Ae=>Ae.templateRef),le.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return E=>new C.y(le=>E.subscribe({next:De=>this.ngZone.run(()=>le.next(De))}))}}return _.\u0275fac=function(E){return new(E||_)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(ee.kn))},_.\u0275cmp=e.Xpm({type:_,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(E,le,De){if(1&E&&e.Suo(De,Se,4),2&E){let Ae;e.iGM(Ae=e.CRH())&&(le.nzListItemActions=Ae)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([ee.kn]),e.TTD],attrs:ne,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(E,le){1&E&&e.YNc(0,Me,3,2,"li",0),2&E&&e.Q6J("ngForOf",le.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),_})(),Qe=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(E,le){1&E&&e._UZ(0,"nz-embed-empty",0),2&E&&e.Q6J("nzComponentName","list")("specificContent",le.nzNoResult)},directives:[G.gB],encapsulation:2,changeDetection:0}),_})(),Ke=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:F,decls:1,vars:0,template:function(E,le){1&E&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),He=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:F,decls:1,vars:0,template:function(E,le){1&E&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),ke=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:F,decls:1,vars:0,template:function(E,le){1&E&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),et=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275dir=e.lG2({type:_,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),_})(),Xe=(()=>{class _{constructor(E){this.directionality=E,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new y.X(this.nzItemLayout),this.destroy$=new l.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var E;this.dir=this.directionality.value,null===(E=this.directionality.change)||void 0===E||E.pipe((0,P.R)(this.destroy$)).subscribe(le=>{this.dir=le})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(E){E.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return _.\u0275fac=function(E){return new(E||_)(e.Y36(L.Is,8))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(E,le,De){if(1&E&&(e.Suo(De,He,5),e.Suo(De,ke,5),e.Suo(De,et,5)),2&E){let Ae;e.iGM(Ae=e.CRH())&&(le.nzListFooterComponent=Ae.first),e.iGM(Ae=e.CRH())&&(le.nzListPaginationComponent=Ae.first),e.iGM(Ae=e.CRH())&&(le.nzListLoadMoreDirective=Ae.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(E,le){2&E&&e.ekj("ant-list-rtl","rtl"===le.dir)("ant-list-vertical","vertical"===le.nzItemLayout)("ant-list-lg","large"===le.nzSize)("ant-list-sm","small"===le.nzSize)("ant-list-split",le.nzSplit)("ant-list-bordered",le.nzBordered)("ant-list-loading",le.nzLoading)("ant-list-something-after-last-item",le.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:Z,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(E,le){if(1&E&&(e.F$t(pe),e.YNc(0,_e,3,1,"ng-template",null,0,e.W1O),e.YNc(2,se,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,U,1,2,"div",3),e.YNc(7,q,2,2,"div",4),e.YNc(8,Ce,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,ge,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,ae,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,w,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&E){const De=e.MAs(1);e.xp6(2),e.Q6J("ngIf",le.nzHeader),e.xp6(2),e.Q6J("nzSpinning",le.nzLoading),e.xp6(2),e.Q6J("ngIf",le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",le.nzGrid&&le.nzDataSource)("ngIfElse",De),e.xp6(1),e.Q6J("ngIf",!le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",le.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",le.nzLoadMore),e.xp6(2),e.Q6J("ngIf",le.nzPagination)}},directives:[Ke,p.W,Qe,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,h.gn)([(0,I.yF)()],_.prototype,"nzBordered",void 0),(0,h.gn)([(0,I.yF)()],_.prototype,"nzLoading",void 0),(0,h.gn)([(0,I.yF)()],_.prototype,"nzSplit",void 0),_})(),tt=(()=>{class _{constructor(E,le,De,Ae){this.parentComp=De,this.cdr=Ae,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,le.addClass(E.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(E=>{this.itemLayout=E,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return _.\u0275fac=function(E){return new(E||_)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(E,le,De){if(1&E&&e.Suo(De,oe,5),2&E){let Ae;e.iGM(Ae=e.CRH())&&(le.listItemExtraDirective=Ae.first)}},hostVars:2,hostBindings:function(E,le){2&E&&e.ekj("ant-list-item-no-flex",le.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:g,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(E,le){if(1&E&&(e.F$t(v),e.YNc(0,Pe,2,1,"ng-template",null,0,e.W1O),e.YNc(2,be,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Ue,1,0,"ng-template",null,2,e.W1O),e.YNc(6,$e,4,4,"ng-template",null,3,e.W1O),e.YNc(8,fe,6,4,"ng-container",4)),2&E){const De=e.MAs(7);e.xp6(8),e.Q6J("ngIf",le.isVerticalAndExtra)("ngIfElse",De)}},directives:[Le,oe,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,h.gn)([(0,I.yF)()],_.prototype,"nzNoFlex",void 0),_})(),it=(()=>{class _{}return _.\u0275fac=function(E){return new(E||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[[L.vT,n.ez,p.j,M.Jb,o.Rt,s.T,G.Xo]]}),_})()},4219:(me,Y,i)=>{i.d(Y,{Cc:()=>w,YV:()=>Ye,hl:()=>Z,ip:()=>We,r9:()=>Pe,uA:()=>je,wO:()=>$e});var e=i(655),o=i(5e3),n=i(8929),s=i(591),h=i(6787),I=i(6053),l=i(4850),x=i(1709),a=i(2198),z=i(7604),C=i(7138),y=i(5778),T=i(7625),j=i(1059),P=i(7545),ee=i(1721),G=i(325),L=i(226),p=i(1314),M=i(6950),F=i(925),te=i(4832),Q=i(9808),A=i(5017),c=i(969),$=i(8076);const D=["nz-submenu-title",""];function J(W,fe){if(1&W&&o._UZ(0,"i",4),2&W){const v=o.oxw();o.Q6J("nzType",v.nzIcon)}}function R(W,fe){if(1&W&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&W){const v=o.oxw();o.xp6(2),o.Oqu(v.nzTitle)}}function f(W,fe){1&W&&o._UZ(0,"i",8)}function B(W,fe){1&W&&o._UZ(0,"i",9)}function b(W,fe){if(1&W&&(o.TgZ(0,"span",5),o.YNc(1,f,1,0,"i",6),o.YNc(2,B,1,0,"i",7),o.qZA()),2&W){const v=o.oxw();o.Q6J("ngSwitch",v.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function N(W,fe){1&W&&o._UZ(0,"i",10)}const ne=["*"],ce=["nz-submenu-inline-child",""];function he(W,fe){}const Me=["nz-submenu-none-inline-child",""];function Oe(W,fe){}const Ee=["nz-submenu",""];function ie(W,fe){1&W&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function _e(W,fe){if(1&W&&o._UZ(0,"div",6),2&W){const v=o.oxw(),g=o.MAs(7);o.Q6J("mode",v.mode)("nzOpen",v.nzOpen)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("menuClass",v.nzMenuClassName)("templateOutlet",g)}}function S(W,fe){if(1&W){const v=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(ue){return o.CHM(v),o.oxw(2).setMouseEnterState(ue)}),o.qZA()}if(2&W){const v=o.oxw(2),g=o.MAs(7);o.Q6J("theme",v.theme)("mode",v.mode)("nzOpen",v.nzOpen)("position",v.position)("nzDisabled",v.nzDisabled)("isMenuInsideDropDown",v.isMenuInsideDropDown)("templateOutlet",g)("menuClass",v.nzMenuClassName)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)}}function se(W,fe){if(1&W){const v=o.EpF();o.YNc(0,S,1,10,"ng-template",7),o.NdJ("positionChange",function(ue){return o.CHM(v),o.oxw().onPositionChange(ue)})}if(2&W){const v=o.oxw(),g=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",v.overlayPositions)("cdkConnectedOverlayOrigin",g)("cdkConnectedOverlayWidth",v.triggerWidth)("cdkConnectedOverlayOpen",v.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function U(W,fe){1&W&&o.Hsn(0,1)}const V=[[["","title",""]],"*"],H=["[title]","*"],q=["titleElement"],Ce=["nz-menu-group",""];function re(W,fe){if(1&W&&(o.ynx(0),o._uU(1),o.BQk()),2&W){const v=o.oxw();o.xp6(1),o.Oqu(v.nzTitle)}}function ge(W,fe){1&W&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const ae=["*",[["","title",""]]],ze=["*","[title]"],w=new o.OlP("NzIsInDropDownMenuToken"),pe=new o.OlP("NzMenuServiceLocalToken");let Z=(()=>{class W{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(v){this.descendantMenuItemClick$.next(v)}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setMode(v){this.mode$.next(v)}setTheme(v){this.theme$.next(v)}setInlineIndent(v){this.inlineIndent$.next(v)}}return W.\u0275fac=function(v){return new(v||W)},W.\u0275prov=o.Yz7({token:W,factory:W.\u0275fac}),W})(),ye=(()=>{class W{constructor(v,g,ue){this.nzHostSubmenuService=v,this.nzMenuService=g,this.isMenuInsideDropDown=ue,this.mode$=this.nzMenuService.mode$.pipe((0,l.U)(oe=>"inline"===oe?"inline":"vertical"===oe||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Te=this.childMenuItemClick$.pipe((0,x.zg)(()=>this.mode$),(0,a.h)(oe=>"inline"!==oe||this.isMenuInsideDropDown),(0,z.h)(!1)),K=(0,h.T)(this.isMouseEnterTitleOrOverlay$,Te);(0,I.aj)([this.isChildSubMenuOpen$,K]).pipe((0,l.U)(([oe,Se])=>oe||Se),(0,C.e)(150),(0,y.x)(),(0,T.R)(this.destroy$)).pipe((0,y.x)()).subscribe(oe=>{this.setOpenStateWithoutDebounce(oe),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(oe):this.nzMenuService.isChildSubMenuOpen$.next(oe)})}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setOpenStateWithoutDebounce(v){this.isCurrentSubMenuOpen$.next(v)}setMouseEnterTitleOrOverlayState(v){this.isMouseEnterTitleOrOverlay$.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(v){return new(v||W)(o.LFG(W,12),o.LFG(Z),o.LFG(w))},W.\u0275prov=o.Yz7({token:W,factory:W.\u0275fac}),W})(),Pe=(()=>{class W{constructor(v,g,ue,Te,K,ve,oe,Se){this.nzMenuService=v,this.cdr=g,this.nzSubmenuService=ue,this.isMenuInsideDropDown=Te,this.directionality=K,this.routerLink=ve,this.routerLinkWithHref=oe,this.router=Se,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Se&&this.router.events.pipe((0,T.R)(this.destroy$),(0,a.h)(Le=>Le instanceof G.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(v){this.nzDisabled?(v.preventDefault(),v.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(v){this.nzSelected=v,this.selected$.next(v)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const v=this.hasActiveLinks();this.nzSelected!==v&&(this.nzSelected=v,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const v=this.isLinkActive(this.router);return this.routerLink&&v(this.routerLink)||this.routerLinkWithHref&&v(this.routerLinkWithHref)||this.listOfRouterLink.some(v)||this.listOfRouterLinkWithHref.some(v)}isLinkActive(v){return g=>v.isActive(g.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var v;(0,I.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,ue])=>{this.inlinePaddingLeft="inline"===g?this.level*ue:null}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(v){v.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(Z),o.Y36(o.sBO),o.Y36(ye,8),o.Y36(w),o.Y36(L.Is,8),o.Y36(G.rH,8),o.Y36(G.yS,8),o.Y36(G.F0,8))},W.\u0275dir=o.lG2({type:W,selectors:[["","nz-menu-item",""]],contentQueries:function(v,g,ue){if(1&v&&(o.Suo(ue,G.rH,5),o.Suo(ue,G.yS,5)),2&v){let Te;o.iGM(Te=o.CRH())&&(g.listOfRouterLink=Te),o.iGM(Te=o.CRH())&&(g.listOfRouterLinkWithHref=Te)}},hostVars:20,hostBindings:function(v,g){1&v&&o.NdJ("click",function(Te){return g.clickMenuItem(Te)}),2&v&&(o.Udp("padding-left","rtl"===g.dir?null:g.nzPaddingLeft||g.inlinePaddingLeft,"px")("padding-right","rtl"===g.dir?g.nzPaddingLeft||g.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",g.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",g.isMenuInsideDropDown&&g.nzSelected)("ant-dropdown-menu-item-danger",g.isMenuInsideDropDown&&g.nzDanger)("ant-dropdown-menu-item-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-item",!g.isMenuInsideDropDown)("ant-menu-item-selected",!g.isMenuInsideDropDown&&g.nzSelected)("ant-menu-item-danger",!g.isMenuInsideDropDown&&g.nzDanger)("ant-menu-item-disabled",!g.isMenuInsideDropDown&&g.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzDisabled",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzSelected",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzDanger",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzMatchRouter",void 0),W})(),xe=(()=>{class W{constructor(v,g){this.cdr=v,this.directionality=g,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var v;this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(o.sBO),o.Y36(L.Is,8))},W.\u0275cmp=o.Xpm({type:W,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(v,g){1&v&&o.NdJ("click",function(){return g.clickTitle()})("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&v&&(o.Udp("padding-left","rtl"===g.dir?null:g.paddingLeft,"px")("padding-right","rtl"===g.dir?g.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",g.isMenuInsideDropDown)("ant-menu-submenu-title",!g.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:D,ngContentSelectors:ne,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(v,g){if(1&v&&(o.F$t(),o.YNc(0,J,1,1,"i",0),o.YNc(1,R,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,b,3,2,"span",2),o.YNc(4,N,1,0,"ng-template",null,3,o.W1O)),2&v){const ue=o.MAs(5);o.Q6J("ngIf",g.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",g.nzTitle),o.xp6(2),o.Q6J("ngIf",g.isMenuInsideDropDown)("ngIfElse",ue)}},directives:[Q.O5,A.Ls,c.f,Q.RF,Q.n9,Q.ED],encapsulation:2,changeDetection:0}),W})(),Re=(()=>{class W{constructor(v,g,ue){this.elementRef=v,this.renderer=g,this.directionality=ue,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(v){const{mode:g,nzOpen:ue,menuClass:Te}=v;(g||ue)&&this.calcMotionState(),Te&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(K=>!!K).forEach(K=>{this.renderer.removeClass(this.elementRef.nativeElement,K)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(K=>!!K).forEach(K=>{this.renderer.addClass(this.elementRef.nativeElement,K)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L.Is,8))},W.\u0275cmp=o.Xpm({type:W,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(v,g){2&v&&(o.d8E("@collapseMotion",g.expandState),o.ekj("ant-menu-rtl","rtl"===g.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:ce,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(v,g){1&v&&o.YNc(0,he,0,0,"ng-template",0),2&v&&o.Q6J("ngTemplateOutlet",g.templateOutlet)},directives:[Q.tP],encapsulation:2,data:{animation:[$.J_]},changeDetection:0}),W})(),be=(()=>{class W{constructor(v){this.directionality=v,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(v){const{mode:g,nzOpen:ue}=v;(g||ue)&&this.calcMotionState()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(L.Is,8))},W.\u0275cmp=o.Xpm({type:W,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(v,g){1&v&&o.NdJ("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&v&&(o.d8E("@slideMotion",g.expandState)("@zoomBigMotion",g.expandState),o.ekj("ant-menu-light","light"===g.theme)("ant-menu-dark","dark"===g.theme)("ant-menu-submenu-placement-bottom","horizontal"===g.mode)("ant-menu-submenu-placement-right","vertical"===g.mode&&"right"===g.position)("ant-menu-submenu-placement-left","vertical"===g.mode&&"left"===g.position)("ant-menu-submenu-rtl","rtl"===g.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:Me,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(v,g){1&v&&(o.TgZ(0,"div",0),o.YNc(1,Oe,0,0,"ng-template",1),o.qZA()),2&v&&(o.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-menu",!g.isMenuInsideDropDown)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown)("ant-menu-vertical",!g.isMenuInsideDropDown)("ant-dropdown-menu-sub",g.isMenuInsideDropDown)("ant-menu-sub",!g.isMenuInsideDropDown)("ant-menu-rtl","rtl"===g.dir),o.Q6J("ngClass",g.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",g.templateOutlet))},directives:[Q.mk,Q.tP],encapsulation:2,data:{animation:[$.$C,$.mF]},changeDetection:0}),W})();const Ue=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],Ge=[M.yW.bottomLeft];let Be=(()=>{class W{constructor(v,g,ue,Te,K,ve,oe){this.nzMenuService=v,this.cdr=g,this.nzSubmenuService=ue,this.platform=Te,this.isMenuInsideDropDown=K,this.directionality=ve,this.noAnimation=oe,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ue,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(v){this.nzSubmenuService.setOpenStateWithoutDebounce(v)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(v){this.isActive=v,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(v)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(v){const g=(0,M.d_)(v);"rightTop"===g||"rightBottom"===g||"right"===g?this.position="right":("leftTop"===g||"leftBottom"===g||"left"===g)&&(this.position="left")}ngOnInit(){var v;this.nzMenuService.theme$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.theme=g,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.mode=g,"horizontal"===g?this.overlayPositions=Ge:"vertical"===g&&(this.overlayPositions=Ue),this.cdr.markForCheck()}),(0,I.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,ue])=>{this.inlinePaddingLeft="inline"===g?this.level*ue:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.isActive=g,g!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=g,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const v=this.listOfNzMenuItemDirective,g=v.changes,ue=(0,h.T)(g,...v.map(Te=>Te.selected$));g.pipe((0,j.O)(v),(0,P.w)(()=>ue),(0,j.O)(!0),(0,l.U)(()=>v.some(Te=>Te.nzSelected)),(0,T.R)(this.destroy$)).subscribe(Te=>{this.isSelected=Te,this.cdr.markForCheck()})}ngOnChanges(v){const{nzOpen:g}=v;g&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(Z),o.Y36(o.sBO),o.Y36(ye),o.Y36(F.t4),o.Y36(w),o.Y36(L.Is,8),o.Y36(te.P,9))},W.\u0275cmp=o.Xpm({type:W,selectors:[["","nz-submenu",""]],contentQueries:function(v,g,ue){if(1&v&&(o.Suo(ue,W,5),o.Suo(ue,Pe,5)),2&v){let Te;o.iGM(Te=o.CRH())&&(g.listOfNzSubMenuComponent=Te),o.iGM(Te=o.CRH())&&(g.listOfNzMenuItemDirective=Te)}},viewQuery:function(v,g){if(1&v&&o.Gf(p.xu,7,o.SBq),2&v){let ue;o.iGM(ue=o.CRH())&&(g.cdkOverlayOrigin=ue.first)}},hostVars:34,hostBindings:function(v,g){2&v&&o.ekj("ant-dropdown-menu-submenu",g.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-dropdown-menu-submenu-open",g.isMenuInsideDropDown&&g.nzOpen)("ant-dropdown-menu-submenu-selected",g.isMenuInsideDropDown&&g.isSelected)("ant-dropdown-menu-submenu-vertical",g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-dropdown-menu-submenu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-dropdown-menu-submenu-inline",g.isMenuInsideDropDown&&"inline"===g.mode)("ant-dropdown-menu-submenu-active",g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu",!g.isMenuInsideDropDown)("ant-menu-submenu-disabled",!g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-submenu-open",!g.isMenuInsideDropDown&&g.nzOpen)("ant-menu-submenu-selected",!g.isMenuInsideDropDown&&g.isSelected)("ant-menu-submenu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-menu-submenu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-menu-submenu-inline",!g.isMenuInsideDropDown&&"inline"===g.mode)("ant-menu-submenu-active",!g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu-rtl","rtl"===g.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([ye]),o.TTD],attrs:Ee,ngContentSelectors:H,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(v,g){if(1&v&&(o.F$t(V),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Te){return g.setMouseEnterState(Te)})("toggleSubMenu",function(){return g.toggleSubMenu()}),o.YNc(2,ie,1,0,"ng-content",2),o.qZA(),o.YNc(3,_e,1,6,"div",3),o.YNc(4,se,1,5,"ng-template",null,4,o.W1O),o.YNc(6,U,1,0,"ng-template",null,5,o.W1O)),2&v){const ue=o.MAs(5);o.Q6J("nzIcon",g.nzIcon)("nzTitle",g.nzTitle)("mode",g.mode)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("paddingLeft",g.nzPaddingLeft||g.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!g.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===g.mode)("ngIfElse",ue)}},directives:[xe,Re,be,p.xu,Q.O5,te.P,p.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzOpen",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzDisabled",void 0),W})();function Fe(W,fe){return W||fe}function we(W){return W||!1}let $e=(()=>{class W{constructor(v,g,ue,Te){this.nzMenuService=v,this.isMenuInsideDropDown=g,this.cdr=ue,this.directionality=Te,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(v){this.nzInlineCollapsed=v,this.inlineCollapsed$.next(v)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(v=>v.nzOpen),this.listOfNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var v;(0,I.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,ue])=>{this.actualMode=g?"vertical":ue,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.nzClick.emit(g),this.nzSelectable&&!g.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ue=>ue.setSelectedState(ue===g))}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(v){const{nzInlineCollapsed:g,nzInlineIndent:ue,nzTheme:Te,nzMode:K}=v;g&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ue&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Te&&this.nzMenuService.setTheme(this.nzTheme),K&&(this.mode$.next(this.nzMode),!v.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(ve=>ve.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(Z),o.Y36(w),o.Y36(o.sBO),o.Y36(L.Is,8))},W.\u0275dir=o.lG2({type:W,selectors:[["","nz-menu",""]],contentQueries:function(v,g,ue){if(1&v&&(o.Suo(ue,Pe,5),o.Suo(ue,Be,5)),2&v){let Te;o.iGM(Te=o.CRH())&&(g.listOfNzMenuItemDirective=Te),o.iGM(Te=o.CRH())&&(g.listOfNzSubMenuComponent=Te)}},hostVars:34,hostBindings:function(v,g){2&v&&o.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-dropdown-menu-root",g.isMenuInsideDropDown)("ant-dropdown-menu-light",g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-dropdown-menu-dark",g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-dropdown-menu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-dropdown-menu-inline",g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-dropdown-menu-inline-collapsed",g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu",!g.isMenuInsideDropDown)("ant-menu-root",!g.isMenuInsideDropDown)("ant-menu-light",!g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-menu-dark",!g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-menu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-menu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-menu-inline",!g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-menu-inline-collapsed",!g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu-rtl","rtl"===g.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:pe,useClass:Z},{provide:Z,useFactory:Fe,deps:[[new o.tp0,new o.FiY,Z],pe]},{provide:w,useFactory:we,deps:[[new o.tp0,new o.FiY,w]]}]),o.TTD]}),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,ee.yF)()],W.prototype,"nzSelectable",void 0),W})();function Ze(W){return W||!1}let je=(()=>{class W{constructor(v,g,ue){this.elementRef=v,this.renderer=g,this.isMenuInsideDropDown=ue,this.renderer.addClass(v.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const v=this.titleElement.nativeElement.nextElementSibling;v&&this.renderer.addClass(v,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(w))},W.\u0275cmp=o.Xpm({type:W,selectors:[["","nz-menu-group",""]],viewQuery:function(v,g){if(1&v&&o.Gf(q,5),2&v){let ue;o.iGM(ue=o.CRH())&&(g.titleElement=ue.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:w,useFactory:Ze,deps:[[new o.tp0,new o.FiY,w]]}])],attrs:Ce,ngContentSelectors:ze,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(v,g){1&v&&(o.F$t(ae),o.TgZ(0,"div",null,0),o.YNc(2,re,2,1,"ng-container",1),o.YNc(3,ge,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&v&&(o.ekj("ant-menu-item-group-title",!g.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",g.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",g.nzTitle),o.xp6(1),o.Q6J("ngIf",!g.nzTitle))},directives:[c.f,Q.O5],encapsulation:2,changeDetection:0}),W})(),Ye=(()=>{class W{constructor(v,g){this.elementRef=v,this.renderer=g,this.renderer.addClass(v.nativeElement,"ant-dropdown-menu-item-divider")}}return W.\u0275fac=function(v){return new(v||W)(o.Y36(o.SBq),o.Y36(o.Qsj))},W.\u0275dir=o.lG2({type:W,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),W})(),We=(()=>{class W{}return W.\u0275fac=function(v){return new(v||W)},W.\u0275mod=o.oAB({type:W}),W.\u0275inj=o.cJS({imports:[[L.vT,Q.ez,F.ud,p.U8,A.PV,te.g,c.T]]}),W})()},3610:(me,Y,i)=>{i.d(Y,{$6:()=>M,lU:()=>L});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),h=i(1721),I=i(404),l=i(4832),x=i(226),a=i(1314),z=i(6950),C=i(9808),y=i(969);function T(F,te){if(1&F&&(o.ynx(0),o._uU(1),o.BQk()),2&F){const Q=o.oxw(3);o.xp6(1),o.Oqu(Q.nzTitle)}}function j(F,te){if(1&F&&(o.TgZ(0,"div",10),o.YNc(1,T,2,1,"ng-container",9),o.qZA()),2&F){const Q=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Q.nzTitle)}}function P(F,te){if(1&F&&(o.ynx(0),o._uU(1),o.BQk()),2&F){const Q=o.oxw(2);o.xp6(1),o.Oqu(Q.nzContent)}}function ee(F,te){if(1&F&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,j,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,P,2,1,"ng-container",9),o.qZA()()()()()),2&F){const Q=o.oxw();o.ekj("ant-popover-rtl","rtl"===Q.dir),o.Q6J("ngClass",Q._classMap)("ngStyle",Q.nzOverlayStyle)("@.disabled",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("nzNoAnimation",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",Q.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",Q.nzContent)}}let L=(()=>{class F extends I.Mg{constructor(Q,A,c,$,D,J){super(Q,A,c,$,D,J),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(p)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return F.\u0275fac=function(Q){return new(Q||F)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(l.P,9),o.Y36(s.jY))},F.\u0275dir=o.lG2({type:F,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(Q,A){2&Q&&o.ekj("ant-popover-open",A.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,h.yF)()],F.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],F.prototype,"nzPopoverBackdrop",void 0),F})(),p=(()=>{class F extends I.XK{constructor(Q,A,c){super(Q,A,c),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,I.pu)(this.nzTitle)&&(0,I.pu)(this.nzContent)}}return F.\u0275fac=function(Q){return new(Q||F)(o.Y36(o.sBO),o.Y36(x.Is,8),o.Y36(l.P,9))},F.\u0275cmp=o.Xpm({type:F,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(Q,A){1&Q&&(o.YNc(0,ee,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function($){return A.onClickOutside($)})("detach",function(){return A.hide()})("positionChange",function($){return A.onPositionChange($)})),2&Q&&o.Q6J("cdkConnectedOverlayHasBackdrop",A.hasBackdrop)("cdkConnectedOverlayOrigin",A.origin)("cdkConnectedOverlayPositions",A._positions)("cdkConnectedOverlayOpen",A._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",A.nzArrowPointAtCenter)},directives:[a.pI,z.hQ,C.mk,C.PC,l.P,C.O5,y.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),F})(),M=(()=>{class F{}return F.\u0275fac=function(Q){return new(Q||F)},F.\u0275mod=o.oAB({type:F}),F.\u0275inj=o.cJS({imports:[[x.vT,C.ez,a.U8,y.T,z.e4,l.g,I.cg]]}),F})()},8144:(me,Y,i)=>{i.d(Y,{$1:()=>j,NU:()=>G,zf:()=>L});var e=i(226),o=i(9808),n=i(5e3),s=i(655),h=i(8929),I=i(7625),l=i(9439),x=i(1721);function a(p,M){}const z=function(p){return{$implicit:p}};function C(p,M){if(1&p&&(n.TgZ(0,"span",4),n.YNc(1,a,0,0,"ng-template",5),n.qZA()),2&p){const F=n.oxw(),te=F.last,Q=F.index,A=n.oxw();n.Udp("margin-bottom","vertical"===A.nzDirection?te?null:A.spaceSize:null,"px")("margin-right","horizontal"===A.nzDirection?te?null:A.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",A.nzSplit)("ngTemplateOutletContext",n.VKq(6,z,Q))}}function y(p,M){if(1&p&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,C,2,8,"span",3)),2&p){const F=M.$implicit,te=M.last,Q=n.oxw();n.Udp("margin-bottom","vertical"===Q.nzDirection?te?null:Q.spaceSize:null,"px")("margin-right","horizontal"===Q.nzDirection?te?null:Q.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",F),n.xp6(1),n.Q6J("ngIf",Q.nzSplit&&!te)}}const T=["*"];let j=(()=>{class p{constructor(){}}return p.\u0275fac=function(F){return new(F||p)},p.\u0275dir=n.lG2({type:p,selectors:[["","nzSpaceItem",""]]}),p})();const ee={small:8,middle:16,large:24};let G=(()=>{class p{constructor(F,te){this.nzConfigService=F,this.cdr=te,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=ee.small,this.destroy$=new h.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?ee[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return p.\u0275fac=function(F){return new(F||p)(n.Y36(l.jY),n.Y36(n.sBO))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(F,te,Q){if(1&F&&n.Suo(Q,j,4,n.Rgc),2&F){let A;n.iGM(A=n.CRH())&&(te.items=A)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(F,te){2&F&&(n.Udp("flex-wrap",te.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===te.nzDirection)("ant-space-vertical","vertical"===te.nzDirection)("ant-space-align-start","start"===te.mergedAlign)("ant-space-align-end","end"===te.mergedAlign)("ant-space-align-center","center"===te.mergedAlign)("ant-space-align-baseline","baseline"===te.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(F,te){1&F&&(n.F$t(),n.Hsn(0),n.YNc(1,y,3,6,"ng-template",0)),2&F&&(n.xp6(1),n.Q6J("ngForOf",te.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,x.yF)()],p.prototype,"nzWrap",void 0),(0,s.gn)([(0,l.oS)()],p.prototype,"nzSize",void 0),p})(),L=(()=>{class p{}return p.\u0275fac=function(F){return new(F||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),p})()},7525:(me,Y,i)=>{i.d(Y,{W:()=>D,j:()=>J});var e=i(655),o=i(5e3),n=i(8929),s=i(591),h=i(839),I=i(8723),l=i(1177);class a{constructor(f){this.durationSelector=f}call(f,B){return B.subscribe(new z(f,this.durationSelector))}}class z extends l.Ds{constructor(f,B){super(f),this.durationSelector=B,this.hasValue=!1}_next(f){try{const B=this.durationSelector.call(this,f);B&&this._tryNext(f,B)}catch(B){this.destination.error(B)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(f,B){let b=this.durationSubscription;this.value=f,this.hasValue=!0,b&&(b.unsubscribe(),this.remove(b)),b=(0,l.ft)(B,new l.IY(this)),b&&!b.closed&&this.add(this.durationSubscription=b)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const f=this.value,B=this.durationSubscription;B&&(this.durationSubscription=void 0,B.unsubscribe(),this.remove(B)),this.value=void 0,this.hasValue=!1,super._next(f)}}}var C=i(1059),y=i(5778),T=i(7545),j=i(7625),P=i(9439),ee=i(1721),G=i(226),L=i(9808),p=i(7144);function M(R,f){1&R&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function F(R,f){}function te(R,f){if(1&R&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&R){const B=o.oxw(2);o.xp6(1),o.Oqu(B.nzTip)}}function Q(R,f){if(1&R&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,F,0,0,"ng-template",6),o.YNc(3,te,2,1,"div",7),o.qZA()()),2&R){const B=o.oxw(),b=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===B.dir)("ant-spin-spinning",B.isLoading)("ant-spin-lg","large"===B.nzSize)("ant-spin-sm","small"===B.nzSize)("ant-spin-show-text",B.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",B.nzIndicator||b),o.xp6(1),o.Q6J("ngIf",B.nzTip)}}function A(R,f){if(1&R&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&R){const B=o.oxw();o.ekj("ant-spin-blur",B.isLoading)}}const c=["*"],$="spin";let D=(()=>{class R{constructor(B,b,N){this.nzConfigService=B,this.cdr=b,this.directionality=N,this._nzModuleName=$,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new h.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var B;this.delay$.pipe((0,C.O)(this.nzDelay),(0,y.x)(),(0,T.w)(N=>0===N?this.spinning$:this.spinning$.pipe(function x(R){return f=>f.lift(new a(R))}(ne=>(0,I.H)(ne?N:0)))),(0,j.R)(this.destroy$)).subscribe(N=>{this.isLoading=N,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent($).pipe((0,j.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(B=this.directionality.change)||void 0===B||B.pipe((0,j.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzSpinning:b,nzDelay:N}=B;b&&this.spinning$.next(this.nzSpinning),N&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(B){return new(B||R)(o.Y36(P.jY),o.Y36(o.sBO),o.Y36(G.Is,8))},R.\u0275cmp=o.Xpm({type:R,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(B,b){2&B&&o.ekj("ant-spin-nested-loading",!b.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:c,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(B,b){1&B&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,Q,4,12,"div",1),o.YNc(3,A,2,2,"div",2)),2&B&&(o.xp6(2),o.Q6J("ngIf",b.isLoading),o.xp6(1),o.Q6J("ngIf",!b.nzSimple))},directives:[L.O5,L.tP],encapsulation:2}),(0,e.gn)([(0,P.oS)()],R.prototype,"nzIndicator",void 0),(0,e.gn)([(0,ee.Rn)()],R.prototype,"nzDelay",void 0),(0,e.gn)([(0,ee.yF)()],R.prototype,"nzSimple",void 0),(0,e.gn)([(0,ee.yF)()],R.prototype,"nzSpinning",void 0),R})(),J=(()=>{class R{}return R.\u0275fac=function(B){return new(B||R)},R.\u0275mod=o.oAB({type:R}),R.\u0275inj=o.cJS({imports:[[G.vT,L.ez,p.Q8]]}),R})()},8481:(me,Y,i)=>{i.d(Y,{X:()=>j,j:()=>T});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),h=i(8693),I=i(1721),l=i(226),x=i(9808),a=i(5017),z=i(3075);function C(P,ee){if(1&P){const G=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(p){return o.CHM(G),o.oxw().closeTag(p)}),o.qZA()}}const y=["*"];let T=(()=>{class P{constructor(G,L,p,M){this.cdr=G,this.renderer=L,this.elementRef=p,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(G){this.nzOnClose.emit(G),G.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const G=this.elementRef.nativeElement,L=new RegExp(`(ant-tag-(?:${[...h.uf,...h.Bh].join("|")}))`,"g"),p=G.classList.toString(),M=[];let F=L.exec(p);for(;null!==F;)M.push(F[1]),F=L.exec(p);G.classList.remove(...M)}setPresetColor(){const G=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,h.o2)(this.nzColor)||(0,h.M8)(this.nzColor)),this.isPresetColor&&G.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.dir=L,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(G){const{nzColor:L}=G;L&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(G){return new(G||P)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(l.Is,8))},P.\u0275cmp=o.Xpm({type:P,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(G,L){1&G&&o.NdJ("click",function(){return L.updateCheckedStatus()}),2&G&&(o.Udp("background-color",L.isPresetColor?"":L.nzColor),o.ekj("ant-tag-has-color",L.nzColor&&!L.isPresetColor)("ant-tag-checkable","checkable"===L.nzMode)("ant-tag-checkable-checked",L.nzChecked)("ant-tag-rtl","rtl"===L.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:y,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(G,L){1&G&&(o.F$t(),o.Hsn(0),o.YNc(1,C,1,0,"i",0)),2&G&&(o.xp6(1),o.Q6J("ngIf","closeable"===L.nzMode))},directives:[x.O5,a.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.yF)()],P.prototype,"nzChecked",void 0),P})(),j=(()=>{class P{}return P.\u0275fac=function(G){return new(G||P)},P.\u0275mod=o.oAB({type:P}),P.\u0275inj=o.cJS({imports:[[l.vT,x.ez,z.u5,a.PV]]}),P})()}}]);