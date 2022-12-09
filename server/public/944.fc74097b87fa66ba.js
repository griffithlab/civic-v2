"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(fe,Y,i)=>{i.d(Y,{H:()=>De});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),v=i(325),I=i(8481),l=i(3610),L=i(3240),a=i(4850),z=i(2198),y=i(7630),C=i(7484),T=i(5017),j=i(3098),S=i(1894),X=i(8144),B=i(6949),x=i(160);function f(ie,_e){if(1&ie&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&ie){const O=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",O.officialName," ")}}function M(ie,_e){if(1&ie&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&ie){const O=_e.$implicit;n.xp6(1),n.Oqu(O)}}function R(ie,_e){if(1&ie&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&ie){const O=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",O.geneAliases)}}function q(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&ie){const O=n.oxw().ngIf;n.MGl("routerLink","/genes/",O.id,"/flags"),n.xp6(3),n.hij(" Flags (",O.flags.totalCount,") ")}}function w(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&ie){const O=n.oxw().ngIf;n.MGl("routerLink","/genes/",O.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",O.revisions.totalCount,") ")}}function N(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&ie){const O=n.oxw().ngIf;n.MGl("routerLink","/genes/",O.id,"/comments"),n.xp6(3),n.hij(" Comments (",O.comments.totalCount,") ")}}function d(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,f,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,R,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,q,4,2,"a",10),n.YNc(12,w,4,2,"a",10),n.YNc(13,N,4,2,"a",10),n.qZA()()()(),n.BQk()),2&ie){const O=_e.ngIf,se=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",se),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",O.geneAliases.length>0),n.xp6(2),n.hij(" ",O.variants.totalCount," ")}}let b=(()=>{class ie{constructor(O){this.gql=O}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,a.U)(({data:O})=>null==O?void 0:O.gene),(0,z.h)(L.ep))}}return ie.\u0275fac=function(O){return new(O||ie)(n.Y36(y.rJ8))},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(O,se){1&O&&(n.TgZ(0,"div",0),n.YNc(1,d,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&O&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,se.gene$)))},directives:[s.O5,C.bd,T.Ls,j.R7,j.uj,s.sg,I.j,S.SK,S.t3,X.NU,X.$1,v.yS],pipes:[B.fM,x.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ie})();var D=i(1730),J=i(4557);function G(ie,_e){}function h(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,G,0,0,"ng-template",5),n.qZA(),n.BQk()),2&ie){const O=n.oxw(),se=n.MAs(2);n.xp6(1),n.Q6J("routerLink",O.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",se)}}function Q(ie,_e){}function U(ie,_e){if(1&ie&&n._UZ(0,"cvc-gene-popover",8),2&ie){const O=n.oxw(2);n.Q6J("geneId",O.gene.id)}}function F(ie,_e){if(1&ie){const O=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(V){return n.CHM(O),n.oxw().itemClosed(V)}),n.YNc(1,Q,0,0,"ng-template",5),n.qZA(),n.YNc(2,U,1,1,"ng-template",null,7,n.W1O)}if(2&ie){const O=n.MAs(3),se=n.oxw(),V=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",se.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",se.enablePopover?"hover":null)("nzMode",se.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",V)}}function ee(ie,_e){}function de(ie,_e){if(1&ie&&n.YNc(0,ee,0,0,"ng-template",5),2&ie){n.oxw();const O=n.MAs(2);n.Q6J("ngTemplateOutlet",O)}}function he(ie,_e){if(1&ie&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&ie){const O=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,O.gene.name,12)," ")}}function Te(ie,_e){if(1&ie&&n._uU(0),2&ie){const O=n.oxw(2);n.hij(" ",O.gene.name," ")}}function Me(ie,_e){if(1&ie&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,he,3,4,"ng-container",0),n.YNc(4,Te,1,1,"ng-template",null,11,n.W1O)),2&ie){const O=n.MAs(5),se=n.oxw();n.Q6J("flagged",se.gene.flagged)("entityColor",se.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",se.truncateLongName)("ngIfElse",O)}}let De=(()=>{class ie extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ie.\u0275fac=function(O){return new(O||ie)},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(O,se){if(1&O&&(n.YNc(0,h,3,2,"ng-container",0),n.YNc(1,F,4,5,"ng-template",null,1,n.W1O),n.YNc(3,de,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Me,6,7,"ng-template",null,3,n.W1O)),2&O){const V=n.MAs(4);n.Q6J("ngIf",se.linked)("ngIfElse",V)}},directives:[s.O5,v.yS,s.tP,I.j,l.lU,b,D.b,T.Ls],pipes:[x.a,J.W],styles:[""],changeDetection:0}),ie})()},3309:(fe,Y,i)=>{i.d(Y,{U:()=>X});var e=i(9808),o=i(325),n=i(8481),s=i(5017),v=i(3610),I=i(6905),l=i(6949),L=i(7484),a=i(3098),z=i(1894),y=i(8144),C=i(5e3);let T=(()=>{class B{}return B.\u0275fac=function(f){return new(f||B)},B.\u0275mod=C.oAB({type:B}),B.\u0275inj=C.cJS({imports:[[e.ez,o.Bz,l.WG,L.vh,z.Jb,a.q6,n.X,s.PV,y.zf,I.s]]}),B})();var j=i(4401),S=i(6429);let X=(()=>{class B{}return B.\u0275fac=function(f){return new(f||B)},B.\u0275mod=C.oAB({type:B}),B.\u0275inj=C.cJS({imports:[[e.ez,o.Bz,n.X,v.$6,s.PV,j.mS,I.s,T,S.C]]}),B})()},1912:(fe,Y,i)=>{i.d(Y,{s:()=>j});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),v=i(3640),l=i(2160),L=i(3762),a=i(5017);let z=(()=>{class S{constructor(B){this.cookies=B,this.location=function I(S){return encodeURIComponent(S).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return S.\u0275fac=function(B){return new(B||S)(e.Y36(l.N))},S.\u0275cmp=e.Xpm({type:S,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(B,x){1&B&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&B&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",x.location,"",e.LSH),e.xp6(1),e.s9C("value",x.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",x.location,"",e.LSH),e.xp6(1),e.s9C("value",x.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",x.location,"",e.LSH),e.xp6(1),e.s9C("value",x.xsrfToken))},directives:[L.n_,L.AA,o.ix,n.dQ,s.w,a.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),S})();function y(S,X){1&S&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function C(S,X){1&S&&e._uU(0," Sign In / Sign Up\n")}function T(S,X){if(1&S){const B=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(B),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let j=(()=>{class S{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return S.\u0275fac=function(B){return new(B||S)},S.\u0275cmp=e.Xpm({type:S,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(B,x){if(1&B&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return x.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return x.authVisible=M})("nzOnCancel",function(){return x.handleCancel()}),e.YNc(4,y,4,0,"ng-container",2),e.qZA(),e.YNc(5,C,1,0,"ng-template",null,3,e.W1O),e.YNc(7,T,2,0,"ng-template",null,4,e.W1O)),2&B){const f=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",x.authVisible)("nzTitle",f)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,v.du,v.Hf,z],styles:["[_nghost-%COMP%]{display:inline-block}"]}),S})()},1844:(fe,Y,i)=>{i.d(Y,{B:()=>L});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),v=i(5017),I=i(5e3);let l=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=I.oAB({type:a}),a.\u0275inj=I.cJS({imports:[[e.ez,v.PV,s.Ph,o.sL]]}),a})(),L=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=I.oAB({type:a}),a.\u0275inj=I.cJS({imports:[[e.ez,o.sL,n.Qp,l]]}),a})()},1730:(fe,Y,i)=>{i.d(Y,{b:()=>a});var e=i(9771),o=i(5e3),n=i(9808);const s=function(z){return{background:z}};function v(z,y){if(1&z&&o._UZ(0,"div",3),2&z){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.flagColor))}}function I(z,y){if(1&z&&o._UZ(0,"div",4),2&z){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.entityColor))}}function l(z,y){if(1&z&&o._UZ(0,"div",5),2&z){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.entityColor))}}const L=["*"];let a=(()=>{class z{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return z.\u0275fac=function(C){return new(C||z)},z.\u0275cmp=o.Xpm({type:z,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:L,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(C,T){1&C&&(o.F$t(),o.Hsn(0),o.YNc(1,v,1,3,"div",0),o.YNc(2,I,1,3,"div",1),o.YNc(3,l,1,3,"div",2)),2&C&&(o.xp6(1),o.Q6J("ngIf",T.flagged),o.xp6(1),o.Q6J("ngIf",T.hasRevisions),o.xp6(1),o.Q6J("ngIf",T.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),z})()},6429:(fe,Y,i)=>{i.d(Y,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class v{}return v.\u0275fac=function(l){return new(l||v)},v.\u0275mod=n.oAB({type:v}),v.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),v})()},6550:(fe,Y,i)=>{i.d(Y,{l:()=>I});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const v=["*"];let I=(()=>{class l{set href(a){if(!a)throw new Error("link-tag link Input requires string.");this._href=a}get href(){return this._href}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:v,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(a,z){1&a&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&a&&(e.Q6J("href",z.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",z.tooltip)("nzTooltipTrigger",z.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",z.iconName?z.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),l})()},4989:(fe,Y,i)=>{i.d(Y,{X:()=>I});var e=i(9808),o=i(404),n=i(8481),s=i(5017),v=i(5e3);let I=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),l})()},7881:(fe,Y,i)=>{i.d(Y,{L:()=>I});var e=i(5e3),o=i(9808),n=i(6699);function s(l,L){if(1&l&&e._UZ(0,"nz-avatar",2),2&l){const a=e.oxw();e.Q6J("nzSrc",a.user.profileImagePath)("nzShape",a.shape?a.shape:"circle")("nzSize",a.size)}}function v(l,L){if(1&l&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&l){const a=e.oxw();e.Q6J("nzSize",a.size)("nzText",e.lcZ(1,2,a.user.displayName.charAt(0)))}}let I=(()=>{class l{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(a,z){if(1&a&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,v,2,4,"ng-template",null,1,e.W1O)),2&a){const y=e.MAs(2);e.Q6J("ngIf",z.user.profileImagePath)("ngIfElse",y)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),l})()},5473:(fe,Y,i)=>{i.d(Y,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class v{}return v.\u0275fac=function(l){return new(l||v)},v.\u0275mod=n.oAB({type:v}),v.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),v})()},8664:(fe,Y,i)=>{i.d(Y,{I:()=>pe});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),v=i(325),I=i(8481),l=i(3610),L=i(3240),a=i(4850),z=i(2198),y=i(7630),C=i(7484),T=i(5017),j=i(3193),S=i(3098),X=i(6550),B=i(1894),x=i(8144),f=i(6949),M=i(160);function R($,le){if(1&$&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&$){const ne=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",ne.name," ")}}function q($,le){if(1&$&&n._UZ(0,"cvc-gene-tag",14),2&$){const ne=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",ne.gene)}}function w($,le){if(1&$&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&$){const ne=le.$implicit;n.xp6(1),n.Oqu(ne)}}function N($,le){if(1&$&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,w,2,1,"nz-tag",16),n.qZA()),2&$){const ne=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",ne.variantAliases)}}function d($,le){if(1&$&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&$){const ne=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",ne.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",ne.alleleRegistryId," ")}}function b($,le){if(1&$&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&$){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/flags"),n.xp6(3),n.hij(" Flags (",ne.flags.totalCount,") ")}}function D($,le){if(1&$&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&$){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",ne.revisions.totalCount,") ")}}function J($,le){if(1&$&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&$){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/comments"),n.xp6(3),n.hij(" Comments (",ne.comments.totalCount,") ")}}function G($,le){if(1&$&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,R,3,4,"ng-template",null,3,n.W1O),n.YNc(4,q,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,N,2,1,"nz-descriptions-item",6),n.YNc(8,d,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,b,4,2,"a",12),n.YNc(15,D,4,2,"a",12),n.YNc(16,J,4,2,"a",12),n.qZA()()()(),n.BQk()),2&$){const ne=le.ngIf,te=n.MAs(3),ue=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",te)("nzExtra",ue),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",ne.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf","unregistered"!=ne.alleleRegistryId),n.xp6(2),n.hij(" ",ne.evidenceItems.totalCount," ")}}let h=(()=>{class ${constructor(ne){this.gql=ne}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,a.U)(({data:ne})=>null==ne?void 0:ne.variant),(0,z.h)(L.ep))}}return $.\u0275fac=function(ne){return new(ne||$)(n.Y36(y.ZYZ))},$.\u0275cmp=n.Xpm({type:$,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ne,te){1&ne&&(n.TgZ(0,"div",0),n.YNc(1,G,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&ne&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,te.variant$)))},directives:[s.O5,C.bd,T.Ls,j.H,S.R7,S.uj,s.sg,I.j,X.l,B.SK,B.t3,x.NU,x.$1,v.yS],pipes:[f.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),$})();var Q=i(1730),U=i(4557);function F($,le){}function ee($,le){if(1&$&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,F,0,0,"ng-template",5),n.qZA(),n.BQk()),2&$){const ne=n.oxw(),te=n.MAs(2);n.xp6(1),n.Q6J("routerLink",ne.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",te)}}function de($,le){}function he($,le){if(1&$&&n._UZ(0,"cvc-variant-popover",9),2&$){const ne=n.oxw(3);n.Q6J("variantId",ne.variant.id)}}function Te($,le){if(1&$&&n.YNc(0,he,1,1,"cvc-variant-popover",8),2&$){const ne=n.oxw(2);n.Q6J("ngIf",ne.enablePopover)}}const Me=function($){return{deprecated:$}};function De($,le){if(1&$){const ne=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(ue){return n.CHM(ne),n.oxw().itemClosed(ue)}),n.YNc(1,de,0,0,"ng-template",5),n.qZA(),n.YNc(2,Te,1,1,"ng-template",null,7,n.W1O)}if(2&$){const ne=n.MAs(3),te=n.oxw(),ue=n.MAs(6);n.Q6J("ngClass",n.VKq(6,Me,te.variant.deprecated))("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",ne)("nzPopoverTrigger",te.enablePopover?"hover":null)("nzMode",te.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",ue)}}function ie($,le){}function _e($,le){if(1&$&&n.YNc(0,ie,0,0,"ng-template",5),2&$){n.oxw();const ne=n.MAs(2);n.Q6J("ngTemplateOutlet",ne)}}function O($,le){if(1&$&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&$){const ne=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,ne.variant.name,20)," ")}}function se($,le){if(1&$&&n._uU(0),2&$){const ne=n.oxw(2);n.hij(" ",ne.variant.name," ")}}function V($,le){if(1&$&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,O,3,4,"ng-container",0),n.YNc(3,se,1,1,"ng-template",null,12,n.W1O)),2&$){const ne=n.MAs(4),te=n.oxw();n.Q6J("flagged",te.variant.flagged)("entityColor",te.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",te.iconColor),n.xp6(1),n.Q6J("ngIf",te.truncateLongName)("ngIfElse",ne)}}let pe=(()=>{class $ extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return $.\u0275fac=function(ne){return new(ne||$)},$.\u0275cmp=n.Xpm({type:$,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,te){if(1&ne&&(n.YNc(0,ee,3,2,"ng-container",0),n.YNc(1,De,4,8,"ng-template",null,1,n.W1O),n.YNc(3,_e,1,1,"ng-template",null,2,n.W1O),n.YNc(5,V,5,5,"ng-template",null,3,n.W1O)),2&ne){const ue=n.MAs(4);n.Q6J("ngIf",te.linked)("ngIfElse",ue)}},directives:[s.O5,v.yS,s.tP,I.j,l.lU,s.mk,h,Q.b,T.Ls],pipes:[U.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),$})()},4867:(fe,Y,i)=>{i.d(Y,{Q:()=>B});var e=i(9808),o=i(325),n=i(8481),s=i(5017),v=i(3610),I=i(6949),l=i(7484),L=i(1894),a=i(3098),z=i(8144),y=i(3309),C=i(4989),T=i(6905),j=i(5e3);let S=(()=>{class x{}return x.\u0275fac=function(M){return new(M||x)},x.\u0275mod=j.oAB({type:x}),x.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,I.WG,l.vh,L.Jb,a.q6,n.X,s.PV,z.zf,T.s,y.U,C.X]]}),x})();var X=i(6429);let B=(()=>{class x{}return x.\u0275fac=function(M){return new(M||x)},x.\u0275mod=j.oAB({type:x}),x.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,n.X,v.$6,s.PV,T.s,S,X.C]]}),x})()},160:(fe,Y,i)=>{i.d(Y,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(I){return(0,e.f)(I)}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(fe,Y,i)=>{i.d(Y,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(I){this.sanitizer=I}transform(I,l){if(!l||""==l)return I;const L=new RegExp(l,"gi"),a=I.match(L);if(!a)return I;let z=I.replace(L,`<span class='typeahead-match'>${a[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(z)}}return s.\u0275fac=function(I){return new(I||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(fe,Y,i)=>{i.d(Y,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class v{}return v.\u0275fac=function(l){return new(l||v)},v.\u0275mod=n.oAB({type:v}),v.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),v})()},7742:(fe,Y,i)=>{i.d(Y,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(I){return I?(0,e.c)(I):""}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(fe,Y,i)=>{i.d(Y,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(v,I=25){if(v.length>I){let L=v.slice(0,I);var l=L.lastIndexOf(" ");return L.slice(0,l)+"\u2026"}return v}}return n.\u0275fac=function(v){return new(v||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(fe,Y,i)=>{i.d(Y,{a:()=>z});var e=i(655),o=i(7630),n=i(4987),s=i(373),v=i(4850),I=i(1059),l=i(5154),L=i(5e3),a=i(520);let z=class{constructor(C,T){function j(M){return!(!M||M.role!==o.i44.Admin)}function S(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function X(M){return!(!M||M.role!==o.i44.Curator)}function B(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function x(M){var R,q;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===(R=M.mostRecentConflictOfInterestStatement)||void 0===R?void 0:R.coiStatus)!=o.Mgx.Conflict&&(null===(q=M.mostRecentConflictOfInterestStatement)||void 0===q?void 0:q.coiStatus)!=o.Mgx.Valid)}function f(M){if(M.mostRecentOrganizationId)return M.organizations.find(R=>R.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=C,this.http=T,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,v.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:B(M),canModerate:x(M),isAdmin:j(M),isEditor:S(M),isCurator:X(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:f(M),invalidCoi:S(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,I.O)(this.initialViewer),(0,l.d)(1)),this.signedIn$=this.viewer$.pipe((0,v.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,v.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,v.U)(M=>j(M))),this.isEditor$=this.viewer$.pipe((0,v.U)(M=>S(M))),this.isCurator$=this.viewer$.pipe((0,v.U)(M=>X(M))),this.canCurate$=this.viewer$.pipe((0,v.U)(M=>B(M))),this.canModerate$=this.viewer$.pipe((0,v.U)(M=>x(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};z.\u0275fac=function(C){return new(C||z)(L.LFG(o.Tt7),L.LFG(a.eN))},z.\u0275prov=L.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z=(0,e.gn)([(0,n.c)()],z)},6654:(fe,Y,i)=>{i.d(Y,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(v){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(v){return new(v||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(v,I){},encapsulation:2}),n})()},915:(fe,Y,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(Y,{E:()=>e})},6530:(fe,Y,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}i.d(Y,{c:()=>e})},9771:(fe,Y,i)=>{i.d(Y,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(n){let s="#AAAAAA";if(n){const v=e.get(n);v&&(s=v)}return s}},6123:(fe,Y,i)=>{i.d(Y,{U:()=>v});var e=i(8929),o=i(591),n=i(7625),s=i(537);class v{constructor(l){this.networkErrorService=l}mutate(l,L,a,z){let y=new e.xQ,C={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{y.next(),y.complete()}};return C.isSubmitting$.next(!0),l.mutate(L,a).pipe((0,n.R)(y),(0,s.x)(()=>{C.isSubmitting$.next(!1)})).subscribe({next:T=>{T.data&&z&&z(T.data)},error:T=>{T.graphQLErrors.length>0?C.submitError$.next(T.graphQLErrors.map(j=>j.message)):T.networkError&&this.networkErrorService.networkError$.next(T.networkError),C.cleanup()},complete:()=>{C.submitError$.next([]),C.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),C.cleanup()}}),C}}},9397:(fe,Y,i)=>{i.d(Y,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(v){this.host=v,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(v){return new(v||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(fe,Y,i)=>{i.d(Y,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(fe,Y,i)=>{i.d(Y,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(I,l){1&I&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(fe,Y,i)=>{i.d(Y,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(fe,Y,i)=>{i.d(Y,{V:()=>L});var e=i(5e3),o=i(9808),n=i(2359);function s(a,z){if(1&a&&e._UZ(0,"nz-alert",4),2&a){const y=e.oxw();e.Q6J("nzDescription",y.errors[0])}}function v(a,z){if(1&a&&e._UZ(0,"nz-alert",5),2&a){e.oxw();const y=e.MAs(3);e.Q6J("nzDescription",y)}}function I(a,z){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const y=z.$implicit;e.xp6(1),e.Oqu(y)}}function l(a,z){if(1&a&&(e.TgZ(0,"ul",6),e.YNc(1,I,2,1,"li",7),e.qZA()),2&a){const y=e.oxw();e.xp6(1),e.Q6J("ngForOf",y.errors)}}let L=(()=>{class a{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return a.\u0275fac=function(y){return new(y||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(y,C){1&y&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,v,1,1,"nz-alert",1),e.YNc(2,l,2,1,"ng-template",2,3,e.W1O)),2&y&&(e.Q6J("ngIf",1===C.errors.length),e.xp6(1),e.Q6J("ngIf",C.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),a})()},7008:(fe,Y,i)=>{i.d(Y,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class v{}return v.\u0275fac=function(l){return new(l||v)},v.\u0275mod=n.oAB({type:v}),v.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),v})()},6789:(fe,Y,i)=>{i.d(Y,{_:()=>C});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),v=i(6949),I=i(9552),l=i(8776),L=i(5017),a=i(404),z=i(5e3);let y=(()=>{class T{}return T.\u0275fac=function(S){return new(S||T)},T.\u0275mod=z.oAB({type:T}),T.\u0275inj=z.cJS({imports:[[e.ez,v.WG,l.X0,I.j,s.cD,L.PV,a.cg,n.s]]}),T})(),C=(()=>{class T{}return T.\u0275fac=function(S){return new(S||T)},T.\u0275mod=z.oAB({type:T}),T.\u0275inj=z.cJS({imports:[[e.ez,v.WG,l.X0,o.vh,I.j,s.cD,L.PV,a.cg,y,n.s]]}),T})()},1825:(fe,Y,i)=>{i.d(Y,{A:()=>l});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),v=i(6949),I=i(5e3);let l=(()=>{class L{}return L.\u0275fac=function(z){return new(z||L)},L.\u0275mod=I.oAB({type:L}),L.\u0275inj=I.cJS({imports:[[e.ez,v.WG,o.sL,n.Rt,s.b1]]}),L})()},6612:(fe,Y,i)=>{i.d(Y,{m:()=>L});var e=i(655),o=i(5e3),n=i(4987),s=i(5254),v=i(5778),l=i(4850);let L=class{constructor(z){this.el=z,this.domChange=new o.vpe,this.changes=new MutationObserver(y=>{(0,s.D)(y).pipe((0,l.U)(C=>{const T=C.target;return"class"===C.attributeName?{type:"class",change:T.classList.value,key:`${C.attributeName}:${T.classList.value}`}:"disabled"===C.attributeName?{type:"disabled",change:T.disabled,key:`${C.attributeName}:${T.disabled}`}:"hidden"===C.attributeName?{type:"hidden",change:T.hidden,key:`${C.attributeName}:${T.hidden}`}:{type:C.attributeName,change:"unknown change type",key:`${C.attributeName}:unknown-change-type`}}),function I(a,z){return(0,v.x)((y,C)=>z?z(y[a],C[a]):y[a]===C[a])}("key"),(0,n.t)(this)).subscribe(C=>{this.domChange.emit(C)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`),this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}};L.\u0275fac=function(z){return new(z||L)(o.Y36(o.SBq))},L.\u0275dir=o.lG2({type:L,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),L=(0,e.gn)([(0,n.c)()],L)},7905:(fe,Y,i)=>{i.d(Y,{nT:()=>I,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(l=s||(s={})).EVIDENCE="Evidence",l.ASSERTION="Assertion",s;var l})();class I{constructor(L){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(a=>a):(0,n.o6)(o.kqt).map(a=>a),this.getSignificanceOptions=a=>{const z=this.validStates.get(a);return(null==z?void 0:z.significance)||[]},this.isValidSignificanceOption=(a,z)=>{const y=this.validStates.get(a);return!y||y.significance.includes(z)},this.getDirectionOptions=a=>{const z=this.validStates.get(a);return(null==z?void 0:z.entityDirection)||[]},this.isValidDirectionOption=(a,z)=>{const y=this.validStates.get(a);return!y||y.entityDirection.includes(z)},this.requiresDrug=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresDrug},this.requiresDisease=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresDisease},this.requiresAcmgCodes=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresAcmgCodes},this.requiresAmpLevel=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresAmpLevel},this.requiresClingenCodes=a=>{const z=this.validStates.get(a);return void 0===z||z.requiresClingenCodes},this.allowsFdaApproval=a=>{const z=this.validStates.get(a);return void 0===z||z.allowsFdaApproval},this.getOptionsFromEnums=a=>0===a.length?[]:a.map(z=>({value:z,label:(0,e.E)(z)})),this.entityName=L,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(fe,Y,i)=>{i.d(Y,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,significance:[e.y1h.Sensitivityresponse,e.y1h.Resistance,e.y1h.AdverseResponse,e.y1h.ReducedSensitivity,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,significance:[e.y1h.Positive,e.y1h.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,significance:[e.y1h.BetterOutcome,e.y1h.PoorOutcome,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,significance:[e.y1h.Oncogenicity,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,significance:[e.y1h.Predisposition,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,significance:[e.y1h.GainOfFunction,e.y1h.LossOfFunction,e.y1h.UnalteredFunction,e.y1h.Neomorphic,e.y1h.DominantNegative,e.y1h.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(fe,Y,i)=>{i.d(Y,{E:()=>j});var e=i(9808),o=i(3075),n=i(325),s=i(8776),v=i(304),I=i(6042),l=i(5e3),L=i(2643),a=i(2683);function z(S,X){if(1&S){const B=l.EpF();l.TgZ(0,"button",2),l.NdJ("click",function(){return l.CHM(B),l.oxw().callOnClick()}),l._uU(1," Cancel\n"),l.qZA()}}function y(S,X){if(1&S&&(l.TgZ(0,"button",3),l._uU(1," Cancel "),l.qZA()),2&S){const B=l.oxw();l.Q6J("routerLink",B.redirectPath)}}const T={name:"cancel-button",component:(()=>{class S extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var B,x,f,M;(null===(B=this.field.templateOptions)||void 0===B?void 0:B.onClick)?this.callOnClick=null===(x=this.field.templateOptions)||void 0===x?void 0:x.onClick:(null===(f=this.field.templateOptions)||void 0===f?void 0:f.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return S.\u0275fac=function(){let X;return function(x){return(X||(X=l.n5z(S)))(x||S)}}(),S.\u0275cmp=l.Xpm({type:S,selectors:[["cvc-cancel-button"]],features:[l.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(B,x){if(1&B&&(l.YNc(0,z,2,0,"button",0),l.YNc(1,y,2,1,"ng-template",null,1,l.W1O)),2&B){const f=l.MAs(2);l.Q6J("ngIf",x.callOnClick)("ngIfElse",f)}},directives:[e.O5,I.ix,L.dQ,a.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),S})()};let j=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=l.oAB({type:S}),S.\u0275inj=l.cJS({imports:[[e.ez,o.u5,o.UX,I.sL,n.Bz,v.F,s.X0.forChild({types:[T]})]]}),S})()},4623:(fe,Y,i)=>{i.d(Y,{K:()=>z});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),v=i(3075);const l={name:"comment-textarea",component:(()=>{class y extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(T,j)=>{var S;return`Comments must be at least ${null===(S=j.templateOptions)||void 0===S?void 0:S.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return y.\u0275fac=function(){let C;return function(j){return(C||(C=n.n5z(y)))(j||y)}}(),y.\u0275cmp=n.Xpm({type:y,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(T,j){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",j.formControl)("formlyAttributes",j.field)},directives:[s.Zp,v.Fj,v.JJ,v.oH,o.VQ],styles:[""],changeDetection:0}),y})(),wrappers:["form-field"]};var L=i(4546),a=i(9139);let z=(()=>{class y{}return y.\u0275fac=function(T){return new(T||y)},y.\u0275mod=n.oAB({type:y}),y.\u0275inj=n.cJS({imports:[[e.ez,v.UX,o.X0.forChild({types:[l]}),a.u,L.U5,s.o7]]}),y})()},7055:(fe,Y,i)=>{i.d(Y,{N:()=>N});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),v=i(1047),I=i(5017),l=i(5e3),L=i(1894),a=i(8481),z=i(2683),y=i(6042),C=i(2643);function T(d,b){if(1&d){const D=l.EpF();l.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),l.NdJ("click",function(G){return l.CHM(D),l.oxw().addField(G)}),l._UZ(3,"i",5),l._uU(4),l.qZA()()()}if(2&d){const D=l.oxw();l.xp6(1),l.Q6J("nzValidateStatus",D.errorState),l.xp6(3),l.hij(" ",D.to.addText," ")}}function j(d,b){if(1&d){const D=l.EpF();l.TgZ(0,"nz-tag",4),l.NdJ("click",function(G){return l.CHM(D),l.oxw(4).addField(G)}),l._UZ(1,"i",5),l._uU(2),l.qZA()}if(2&d){const D=l.oxw(4);l.xp6(2),l.hij(" ",D.to.addText," ")}}function S(d,b){if(1&d&&(l.TgZ(0,"div",11),l.YNc(1,j,3,1,"nz-tag",12),l.qZA()),2&d){const D=l.oxw(2).$implicit,J=l.oxw();l.xp6(1),l.Q6J("ngIf",0==J.to.maxCount||J.to.maxCount>D.model.length)}}function X(d,b){if(1&d){const D=l.EpF();l.ynx(0),l.TgZ(1,"nz-tag",8)(2,"i",9),l.NdJ("click",function(){l.CHM(D);const G=l.oxw().index;return l.oxw().remove(G)}),l.qZA()(),l.YNc(3,S,2,1,"div",10),l.BQk()}if(2&d){const D=l.oxw().last;l.xp6(3),l.Q6J("ngIf",D)}}function B(d,b){if(1&d){const D=l.EpF();l.ynx(0),l.TgZ(1,"div",13)(2,"button",14),l.NdJ("click",function(){l.CHM(D);const G=l.oxw().index;return l.oxw().remove(G)}),l._UZ(3,"i",15),l.qZA()(),l.BQk()}}function x(d,b){if(1&d&&(l.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),l._UZ(3,"formly-field",7),l.qZA(),l.YNc(4,X,4,1,"ng-container",1),l.YNc(5,B,4,0,"ng-container",1),l.qZA()()),2&d){const D=b.$implicit,J=b.index;l.xp6(2),l.Q6J("ngClass",D.model[J]?"selected-field-col":"default-field-col"),l.xp6(1),l.Q6J("field",D),l.xp6(1),l.Q6J("ngIf",D.model[J]),l.xp6(1),l.Q6J("ngIf",!D.model[J])}}const f=function(d){return{hidden:d}},R={name:"multi-field",component:(()=>{class d extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(D){D&&D.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return d.\u0275fac=function(D){return new(D||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["cvc-multi-field-type"]],features:[l.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(D,J){1&D&&(l.TgZ(0,"div",0),l.YNc(1,T,5,2,"nz-form-item",1),l.YNc(2,x,6,4,"nz-form-item",2),l.qZA()),2&D&&(l.Q6J("ngClass",l.VKq(3,f,!0===J.to.hidden)),l.xp6(1),l.Q6J("ngIf",0===(null==J.field.fieldGroup?null:J.field.fieldGroup.length)),l.xp6(1),l.Q6J("ngForOf",J.field.fieldGroup))},directives:[e.mk,e.O5,L.SK,s.Nx,L.t3,s.Fd,a.j,I.Ls,z.w,e.sg,n.cw,y.ix,C.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),d})()};var q=i(7102),w=i(1017);let N=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[R]}),o.UX,q.a,s.U5,v.o7,I.PV,y.sL,w.s,a.X]]}),d})()},7075:(fe,Y,i)=>{i.d(Y,{l:()=>j});var e=i(9808),o=i(8776),n=i(5e3),s=i(9180),v=i(6042),I=i(2643),l=i(6612),L=i(2683);const z={name:"submit-button",component:(()=>{class S extends o.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return S.\u0275fac=function(B){return new(B||S)},S.\u0275cmp=n.Xpm({type:S,selectors:[["cvc-submit-button-type"]],features:[n.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(B,x){1&B&&(n.TgZ(0,"cvc-form-buttons")(1,"button",0),n._uU(2),n.qZA()()),2&B&&(n.xp6(1),n.Q6J("disabled",!x.form.valid),n.xp6(1),n.hij(" ",x.to.submitLabel," "))},directives:[s.Z,v.ix,I.dQ,l.m,L.w],styles:[""],changeDetection:0}),S})()};var y=i(4375),C=i(1825),T=i(3075);let j=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=n.oAB({type:S}),S.\u0275inj=n.cJS({imports:[[e.ez,T.UX,o.X0.forChild({types:[z]}),v.sL,y.R,C.A]]}),S})()},7462:(fe,Y,i)=>{i.d(Y,{o:()=>L});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),v=i(3075);const l={name:"cvc-textarea",component:(()=>{class a extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return a.\u0275fac=function(){let z;return function(C){return(z||(z=n.n5z(a)))(C||a)}}(),a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(y,C){1&y&&n._UZ(0,"textarea",0),2&y&&n.Q6J("formControl",C.formControl)("formlyAttributes",C.field)("nzAutosize",C.to.autosize)("placeholder",C.to.placeholder)},directives:[s.Zp,v.Fj,s.rh,v.JJ,v.oH,o.VQ],styles:[""],changeDetection:0}),a})(),wrappers:["form-field"]};let L=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[e.ez,v.u5,v.UX,o.X0.forChild({types:[l]}),s.o7]]}),a})()},4181:(fe,Y,i)=>{i.d(Y,{O:()=>ne});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),v=i(4987),I=i(8776),l=i(591),L=i(3240),a=i(1307),z=i(373),y=i(2198),C=i(4850),T=i(7630),j=i(9169),S=i(8054),X=i(9397),B=i(3075),x=i(8144),f=i(3618),M=i(8664),R=i(685),q=i(822),w=i(6042),N=i(2643),d=i(2683),b=i(5017),D=i(6949),J=i(8926);function G(te,ue){if(1&te&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,re.label,ze.to.searchString),n.oJD)}}function h(te,ue){1&te&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function Q(te,ue){if(1&te&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,h,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.xp6(1),n.hij(" ID: ",re.variant.id," "),n.xp6(1),n.Q6J("ngIf",re.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,re.variant.variantAliases.join(", "),ze.to.searchString),n.oJD)}}function U(te,ue){1&te&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,G,2,4,"span",7),n.YNc(3,Q,5,6,"span",8),n.qZA()()),2&te&&n.Q6J("nzValue",ue.$implicit.variant)}function F(te,ue){if(1&te){const re=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(Z){return n.CHM(re),n.oxw().to.onSearch(Z)}),n.YNc(2,U,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&te){const re=n.oxw(),ze=n.MAs(6),Z=n.MAs(4);n.xp6(1),n.Q6J("formControl",re.formControl)("formlyAttributes",re.field)("nzPlaceHolder",re.to.placeholder?re.to.placeholder:null)("nzDropdownRender",re.to.allowCreate?ze:null)("nzShowArrow",re.to.showArrow)("nzNotFoundContent",Z),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,re.variants$))}}function ee(te,ue){if(1&te&&n._UZ(0,"cvc-variant-tag",12),2&te){const re=n.oxw();n.Q6J("variant",re.formControl.value)}}function de(te,ue){if(1&te&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&te){const re=n.oxw(2);n.xp6(2),n.Oqu(re.to.searchString)}}function he(te,ue){if(1&te&&(n._UZ(0,"nz-empty",13),n.YNc(1,de,4,1,"ng-template",null,14,n.W1O)),2&te){const re=n.MAs(2);n.Q6J("nzNotFoundContent",re)}}function Te(te,ue){if(1&te&&n._UZ(0,"cvc-form-errors-alert",18),2&te){const re=n.oxw(4);n.Q6J("errors",re.errorMessages)}}function Me(te,ue){if(1&te){const re=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(re);const Z=n.oxw(4);return Z.addVariant(Z.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&te){const re=n.oxw(4);n.Q6J("nzLoading",re.loading),n.xp6(4),n.Oqu(re.to.searchString)}}function De(te,ue){if(1&te&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,Te,1,1,"cvc-form-errors-alert",16),n.YNc(3,Me,6,2,"button",17),n.qZA(),n.BQk()),2&te){const re=n.oxw(3);n.xp6(2),n.Q6J("ngIf",re.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==re.errorMessages.length)}}function ie(te,ue){if(1&te&&(n.ynx(0),n.YNc(1,De,4,2,"ng-container",11),n.BQk()),2&te){const re=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==re.to.searchString)}}function _e(te,ue){if(1&te&&(n.YNc(0,ie,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&te){const re=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,re.displayAdd$))}}let O=class extends I.fS{constructor(ue,re,ze){super(),this.variantTypeaheadQuery=ue,this.networkErrorService=re,this.addVariantGQL=ze,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new l.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(Z,ge,W)=>{var ve,Se;let Ee=null===(Se=null===(ve=null==W?void 0:W.parent)||void 0===ve?void 0:ve.parent)||void 0===Se?void 0:Se.model;if(Ee&&Ee.gene&&Ee.gene[0])return Ee.gene[0].id}}}}ngOnInit(){var ue,re;this.callbackSub=null===(re=null===(ue=this.field)||void 0===ue?void 0:ue.formControl)||void 0===re?void 0:re.valueChanges.subscribe(ze=>this.onVariantSelected.emit(ze.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,a.T)(1),(0,z.j)("data","variants","nodes"),(0,y.h)(L.ep),(0,C.U)(ze=>ze.map(ge=>({value:ge.id,label:ge.name,variant:ge}))))}ngAfterViewInit(){this.to.onSearch=ue=>{ue.length<this.to.minLengthSearch||(this.to.searchString=ue,this.errorMessages=[],this.queryRef.refetch({name:ue,geneId:this.to.geneId}).then(re=>{this.displayAdd$.next(0==re.data.variants.nodes.filter(ze=>ze.name.toUpperCase()==ue.toUpperCase()).length)}))}}addVariant(ue){if(ue&&""!=ue&&this.to.geneId){let re=this.addVariantMutator.mutate(this.addVariantGQL,{name:ue,geneId:this.to.geneId},{},ze=>{var Z;ze.addVariant&&(null===(Z=this.field.formControl)||void 0===Z||Z.setValue({id:ze.addVariant.variant.id,name:ze.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0)});re.submitSuccess$.pipe((0,v.t)(this)).subscribe(ze=>{ze&&(this.success=!0)}),re.submitError$.pipe((0,v.t)(this)).subscribe(ze=>{ze&&(this.errorMessages=ze,this.success=!1)}),re.isSubmitting$.pipe((0,v.t)(this)).subscribe(ze=>{this.loading=ze})}}ngOnDestroy(){var ue;null===(ue=this.callbackSub)||void 0===ue||ue.unsubscribe()}};O.\u0275fac=function(ue){return new(ue||O)(n.Y36(T._eC),n.Y36(j.Y),n.Y36(T.LUc))},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(ue,re){if(1&ue&&(n.YNc(0,F,4,9,"ng-container",0),n.YNc(1,ee,1,1,"ng-template",null,1,n.W1O),n.YNc(3,he,3,1,"ng-template",null,2,n.W1O),n.YNc(5,_e,2,3,"ng-template",null,3,n.W1O)),2&ue){const ze=n.MAs(2);n.Q6J("ngIf",!(null!=re.formControl.value&&re.formControl.value.id))("ngIfElse",ze)}},directives:[e.O5,S.Vq,X.l,B.JJ,B.oH,I.VQ,e.sg,S.Ip,x.NU,x.$1,f.ZU,M.I,R.p9,q.V,w.ix,N.dQ,d.w,b.Ls],pipes:[D.fM,J.A],styles:[""],changeDetection:0}),O=(0,o.gn)([(0,v.c)()],O);const se={name:"variant-input",component:O};var V=i(4867),pe=i(7008),$=i(6905),le=i(8616);let ne=(()=>{class te{}return te.\u0275fac=function(re){return new(re||te)},te.\u0275mod=n.oAB({type:te}),te.\u0275inj=n.cJS({imports:[[e.ez,B.UX,D.WG,I.X0.forChild({types:[se]}),S.LV,w.sL,b.PV,x.zf,f.ZJ,R.Xo,V.Q,pe.B,$.s,le.Y]]}),te})()},7102:(fe,Y,i)=>{i.d(Y,{a:()=>z});var e=i(9808),o=i(8776),n=i(3075),s=i(4546),v=i(5e3),I=i(1894);function l(y,C){if(1&y&&v._UZ(0,"formly-validation-message",3),2&y){const T=v.oxw();v.Q6J("field",T.field)}}const a={name:"cvc-field-errors",component:(()=>{class y extends o.n2{get errorState(){return this.showError?"error":""}}return y.\u0275fac=function(){let C;return function(j){return(C||(C=v.n5z(y)))(j||y)}}(),y.\u0275cmp=v.Xpm({type:y,selectors:[["cvc-field-errors-wrapper"]],features:[v.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(T,j){if(1&T&&(v.TgZ(0,"nz-form-control",0)(1,"p"),v._uU(2),v.qZA(),v.GkF(3,null,1),v.YNc(5,l,1,1,"ng-template",null,2,v.W1O),v.qZA()),2&T){const S=v.MAs(6);v.Q6J("nzValidateStatus",j.errorState)("nzErrorTip",S),v.xp6(2),v.hij("errorState: ",j.errorState,"")}},directives:[I.t3,s.Fd,o.u_],encapsulation:2,changeDetection:0}),y})()};let z=(()=>{class y{}return y.\u0275fac=function(T){return new(T||y)},y.\u0275mod=v.oAB({type:y}),y.\u0275inj=v.cJS({imports:[[e.ez,n.UX,s.U5,o.X0.forChild({wrappers:[a]})]]}),y})()},5472:(fe,Y,i)=>{i.d(Y,{r:()=>C});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),v=i(5482),I=i(1894),l=i(1017),L=i(6789),a=i(5e3);const y={wrappers:[{name:"form-container",component:(()=>{class T extends n.n2{}return T.\u0275fac=function(){let j;return function(X){return(j||(j=a.n5z(T)))(X||T)}}(),T.\u0275cmp=a.Xpm({type:T,selectors:[["cvc-form-container-wrapper"]],features:[a.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(S,X){1&S&&(a.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA()()()),2&S&&(a.xp6(2),a.Q6J("nzTitle",X.to.label))},directives:[I.SK,I.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),T})()}]};let C=(()=>{class T{}return T.\u0275fac=function(S){return new(S||T)},T.\u0275mod=a.oAB({type:T}),T.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild(y),I.Jb,s.vh,v.cD,L._,l.s]]}),T})()},7695:(fe,Y,i)=>{i.d(Y,{C:()=>N});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),v=i(5482),I=i(1894),l=i(1017),L=i(6789),a=i(5e3),z=i(9552),y=i(5017),C=i(404);function T(d,b){1&d&&a._UZ(0,"div",9),2&d&&a.Q6J("innerHtml",b.ngIf,a.oJD)}function j(d,b){1&d&&(a.TgZ(0,"div",10),a._uU(1,"Help not available for this field."),a.qZA())}function S(d,b){if(1&d&&(a.TgZ(0,"nz-collapse-panel",6),a.YNc(1,T,1,1,"div",7),a.YNc(2,j,2,0,"ng-template",null,8,a.W1O),a.qZA()),2&d){const D=b.ngIf,J=a.MAs(3),G=a.oxw().$implicit,h=a.MAs(3);a.Q6J("nzHeader",D)("nzActive",G.templateOptions.hasFocus)("nzExtra",h),a.xp6(1),a.Q6J("ngIf",null==G.templateOptions?null:G.templateOptions.helpText)("ngIfElse",J)}}function X(d,b){if(1&d&&a._UZ(0,"formly-validation-message",14),2&d){const D=a.oxw(4).$implicit;a.Q6J("field",D)}}function B(d,b){if(1&d&&(a.ynx(0),a._UZ(1,"i",12),a.YNc(2,X,1,1,"ng-template",null,13,a.W1O),a.BQk()),2&d){const D=a.MAs(3);a.xp6(1),a.Q6J("nzTooltipTitle",D)}}function x(d,b){if(1&d&&(a.ynx(0),a.YNc(1,B,4,1,"ng-container",11),a.BQk()),2&d){const D=b.ngIf;a.xp6(1),a.Q6J("ngIf","INVALID"===D)}}function f(d,b){if(1&d&&(a.YNc(0,x,2,1,"ng-container",11),a.ALo(1,"ngrxPush")),2&d){const D=a.oxw().$implicit;a.Q6J("ngIf",a.lcZ(1,1,D.formControl.statusChanges))}}function M(d,b){if(1&d&&(a.ynx(0),a.YNc(1,S,4,5,"nz-collapse-panel",4),a.YNc(2,f,2,3,"ng-template",null,5,a.W1O),a.BQk()),2&d){const D=b.$implicit;a.xp6(1),a.Q6J("ngIf",null==D.templateOptions?null:D.templateOptions.label)}}let R=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(D){return new(D||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(D,J){1&D&&(a.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),a.YNc(3,M,4,1,"ng-container",3),a.qZA()()()),2&D&&(a.Q6J("nzOffsetTop",0)("nzTarget",J.affixTo),a.xp6(2),a.Q6J("nzBordered",!1),a.xp6(1),a.Q6J("ngForOf",J.fieldGroup))},directives:[z.$,s.bd,v.yH,e.sg,e.O5,v.Zv,y.Ls,C.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),d})();const w={name:"form-info",component:(()=>{class d extends n.n2{}return d.\u0275fac=function(){let b;return function(J){return(b||(b=a.n5z(d)))(J||d)}}(),d.\u0275cmp=a.Xpm({type:d,selectors:[["cvc-form-info-wrapper"]],features:[a.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(D,J){if(1&D&&(a.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),a.GkF(3,null,3),a.qZA()(),a.TgZ(5,"nz-col",1)(6,"div",null,4),a._UZ(8,"cvc-form-info-card",5),a.qZA()()()),2&D){const G=a.MAs(7);a.xp6(1),a.Q6J("nzSpan",16),a.xp6(1),a.Q6J("nzTitle",J.to.label),a.xp6(3),a.Q6J("nzSpan",8),a.xp6(3),a.Q6J("fieldGroup",J.field.fieldGroup)("affixTo",G)}},directives:[I.SK,I.t3,s.bd,R],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),d})()};let N=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[w]}),I.Jb,s.vh,v.cD,L._,l.s]]}),d})()},8785:(fe,Y,i)=>{i.d(Y,{t:()=>q});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),v=i(7630),I=i(9169),l=i(7484),L=i(9808),a=i(2359),z=i(1894),y=i(4546),C=i(822),T=i(7525),j=i(3868),S=i(3075),X=i(6042),B=i(2643),x=i(2683);function f(w,N){1&w&&e._UZ(0,"nz-alert",7)}function M(w,N){if(1&w&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&w){const d=e.oxw();e.xp6(1),e.Q6J("errors",d.errorMessages)}}function R(w,N){if(1&w){const d=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(D){return e.CHM(d),e.oxw().coiText=D}),e.qZA()()}if(2&w){const d=e.oxw();e.xp6(1),e.Q6J("ngModel",d.coiText)}}let q=(()=>{class w{constructor(d,b){this.updateCoiGql=d,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U(b)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let b=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});b.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{D&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),b.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{D&&(this.errorMessages=D,this.success=!1)}),b.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(D=>{this.loading=D})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(d){return new(d||w)(e.Y36(v.IP1),e.Y36(I.Y))},w.\u0275cmp=e.Xpm({type:w,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(d,b){1&d&&(e.TgZ(0,"nz-card"),e.YNc(1,f,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(J){return b.coiStatus=J}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,R,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return b.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&d&&(e.xp6(1),e.Q6J("ngIf",b.success),e.xp6(1),e.Q6J("ngIf",b.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",b.loading),e.xp6(2),e.Q6J("ngModel",b.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===b.coiStatus),e.xp6(2),e.Q6J("disabled",b.loading||"coiPresent"===b.coiStatus&&(void 0===b.coiText||b.coiText.length<10)))},directives:[l.bd,L.O5,a.r,z.SK,y.Nx,C.V,T.W,j.Dg,S.JJ,S.On,j.Of,S.Fj,X.ix,B.dQ,x.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),w})()},330:(fe,Y,i)=>{i.d(Y,{e:()=>C});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),v=i(2359),I=i(4546),l=i(7008),L=i(3868),a=i(7525),z=i(6042),y=i(5e3);let C=(()=>{class T{}return T.\u0275fac=function(S){return new(S||T)},T.\u0275mod=y.oAB({type:T}),T.\u0275inj=y.cJS({imports:[[e.ez,o.u5,I.U5,o.UX,n.WG,s.vh,v.L,L.aF,z.sL,a.j,l.B]]}),T})()},3434:(fe,Y,i)=>{i.d(Y,{G:()=>q});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),v=i(6123),I=i(7625),l=i(7630),L=i(9169),a=i(325),z=i(7525),y=i(4546),C=i(9808),T=i(8776),j=i(1894),S=i(822),X=i(2359);function B(w,N){1&w&&e.GkF(0)}function x(w,N){if(1&w&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&w){const d=e.oxw(2);e.xp6(1),e.Q6J("errors",d.errorMessages)}}function f(w,N){if(1&w&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&w){const d=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",d.newId,"/summary")}}function M(w,N){if(1&w&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,f,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&w){const d=e.MAs(3),b=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",b.isNew?"Variant Created":"Variant Already Exists")("nzDescription",d)}}function R(w,N){if(1&w&&(e.YNc(0,x,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&w){const d=e.oxw();e.Q6J("ngIf",d.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",d.success)}}let q=(()=>{class w{constructor(d,b,D){this.submitVariantGQL=d,this.networkErrorService=b,this.route=D,this.onVariantSelected=new e.vpe,this.allowCreate=!0,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formFields=[],this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new v.U(b)}ngOnInit(){this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,maxCount:1,allowCreate:this.allowCreate}}]}]}submitVariant(d){let b=null==d?void 0:d.fields.gene[0].id,D=null==d?void 0:d.fields.variant[0].name;if(b&&D){let G=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:b,name:D},{},h=>{let Q=h.addVariant;Q&&(this.newId=Q.variant.id,this.isNew=Q.new,this.onVariantSelected.emit({variantId:Q.variant.id,molecularProfile:Q.variant.singleVariantMolecularProfile}))});G.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(h=>{h&&(this.success=!0)}),G.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(h=>{h&&(this.errorMessages=h,this.success=!1)}),G.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(h=>{this.loading=h})}}onFormModelChange(d){this.formModel=d,d.fields.variant&&d.fields.variant[0]&&this.onVariantSelected.emit({variantId:d.fields.variant[0].id,molecularProfile:d.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(d){return new(d||w)(e.Y36(l.LUc),e.Y36(L.Y),e.Y36(a.gz))},w.\u0275cmp=e.Xpm({type:w,selectors:[["cvc-variant-submit-form"]],inputs:{allowCreate:"allowCreate"},outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(d,b){if(1&d&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return b.submitVariant(b.formModel)}),e.YNc(2,B,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(J){return b.onFormModelChange(J)}),e.qZA()()(),e.YNc(4,R,2,2,"ng-template",null,4,e.W1O)),2&d){const D=e.MAs(5);e.Q6J("nzSpinning",b.loading),e.xp6(1),e.Q6J("formGroup",b.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",D),e.xp6(1),e.Q6J("form",b.formGroup)("fields",b.formFields)("model",b.formModel)("options",b.formOptions)}},directives:[z.W,o._Y,o.JL,y.Lr,o.sg,C.tP,T.T7,C.O5,j.SK,y.Nx,S.V,X.r,a.yS],styles:[""]}),w})()},7233:(fe,Y,i)=>{i.d(Y,{e:()=>Ye});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),v=i(7695),I=i(7055),l=i(7462),L=i(8776),a=i(1017),z=i(2359),y=i(6042),C=i(4546),T=i(1894),j=i(3075),S=i(325),X=i(3793),B=i(304),x=i(8054),f=i(5e3);let M=(()=>{class oe{constructor(){console.log("FormCardDirective constructed.")}}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275dir=f.lG2({type:oe,selectors:[["",8,"cvc-form-card-control"]]}),oe})();var R=i(7484),q=i(404);function w(oe,P){1&oe&&f._UZ(0,"i",7)}function N(oe,P){if(1&oe&&(f.TgZ(0,"nz-form-label",5),f._uU(1),f.YNc(2,w,1,0,"i",6),f.qZA()),2&oe){const K=f.oxw();f.Q6J("nzRequired",K.to.required&&!0!==K.to.hideRequiredMarker)("nzFor",K.id),f.xp6(1),f.hij(" ",K.to.label," "),f.xp6(1),f.Q6J("ngIf",K.to.helpText)}}function d(oe,P){if(1&oe&&f._UZ(0,"formly-validation-message",9),2&oe){const K=f.oxw(2);f.Q6J("field",K.field)}}function b(oe,P){if(1&oe&&f.YNc(0,d,1,1,"formly-validation-message",8),2&oe){const K=f.oxw();f.Q6J("ngIf",K.showError)}}let D=(()=>{class oe extends L.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275cmp=f.Xpm({type:oe,selectors:[["form-card-wrapper"]],features:[f.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(K,p){if(1&K&&(f.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),f.GkF(3,null,2),f.qZA(),f.YNc(5,N,3,4,"ng-template",null,3,f.W1O),f.YNc(7,b,1,1,"ng-template",null,4,f.W1O),f.qZA()()),2&K){const m=f.MAs(6),ce=f.MAs(8);f.xp6(1),f.Q6J("nzValidateStatus",p.errorState)("nzErrorTip",ce),f.xp6(1),f.Q6J("nzTitle",m)("nzExtra",ce)}},directives:[T.SK,C.Nx,T.t3,C.Fd,M,R.bd,C.iK,e.O5,q.SY,L.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),oe})();var J=i(5017);const G={wrappers:[{name:"form-card",component:D}]};let h=(()=>{class oe{}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275mod=f.oAB({type:oe}),oe.\u0275inj=f.cJS({imports:[[e.ez,j.UX,C.U5,R.vh,J.PV,q.cg,L.X0.forChild(G),a.s]]}),oe})();var Q=i(655),U=i(373),F=i(2198),ee=i(4850),de=i(3240),he=i(4987),Te=i(7630),Me=i(9397),De=i(6949),ie=i(8144),_e=i(3618),O=i(3193),se=i(8926);function V(oe,P){if(1&oe&&(f._UZ(0,"span",10),f.ALo(1,"highlightTypeahead")),2&oe){const K=f.oxw().$implicit,p=f.oxw(3);f.Q6J("innerHtml",f.xi3(1,1,K.label,p.to.searchString),f.oJD)}}function pe(oe,P){if(1&oe&&(f._UZ(0,"span",12),f.ALo(1,"highlightTypeahead")),2&oe){const K=f.oxw(2).$implicit,p=f.oxw(3);f.Q6J("innerHtml",f.xi3(1,1,K.gene.geneAliases.join(", "),p.to.searchString),f.oJD)}}function $(oe,P){1&oe&&(f.ynx(0),f.YNc(1,pe,2,4,"span",11),f.BQk())}function le(oe,P){if(1&oe&&(f.TgZ(0,"nz-option",7)(1,"nz-space"),f.YNc(2,V,2,4,"span",8),f.YNc(3,$,2,0,"ng-container",9),f.qZA()()),2&oe){const K=P.$implicit;f.Q6J("nzLabel",K.tooltip)("nzValue",K.gene),f.xp6(3),f.Q6J("ngIf",K.gene.geneAliases.length>0)}}function ne(oe,P){if(1&oe&&(f.ynx(0),f.YNc(1,le,4,3,"nz-option",6),f.BQk()),2&oe){const K=P.ngrxLet;f.xp6(1),f.Q6J("ngForOf",K)}}function te(oe,P){1&oe&&f._uU(0," No gene found in CIViC that matches the string provided. ")}function ue(oe,P){if(1&oe){const K=f.EpF();f.ynx(0),f.TgZ(1,"nz-select",2,3),f.NdJ("nzOnSearch",function(m){return f.CHM(K),f.oxw().to.onSearch(m)}),f.YNc(3,ne,2,1,"ng-container",4),f.qZA(),f.YNc(4,te,1,0,"ng-template",null,5,f.W1O),f.BQk()}if(2&oe){const K=f.MAs(5),p=f.oxw();f.xp6(1),f.Q6J("formControl",p.formControl)("formlyAttributes",p.field)("nzPlaceHolder",p.to.placeholder?p.to.placeholder:null)("nzNotFoundContent",K)("nzShowArrow",p.to.showArrow)("nzFilterOption",p.to.filterOption),f.xp6(2),f.Q6J("ngrxLet",p.genes$)}}function re(oe,P){if(1&oe&&f._UZ(0,"cvc-gene-tag",13),2&oe){const K=f.oxw();f.Q6J("gene",K.formControl.value)}}let ze=class extends L.fS{constructor(P){super(),this.geneTypeaheadQuery=P,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,U.j)("data","geneTypeahead"),(0,F.h)(de.ep),(0,ee.U)(P=>P.map(K=>{let p=K.geneAliases.length>0?`Aliases: ${K.geneAliases.join(", ")}`:"";return{value:K.id,tooltip:`${K.name} (${K.entrezId}) ${p}`,label:`${K.name} (${K.entrezId})`,gene:K}})))}ngAfterViewInit(){this.to.onSearch=P=>{P.length<this.to.minLengthSearch||(this.to.searchString=P,this.queryRef.refetch({entrezSymbol:P}))}}};ze.\u0275fac=function(P){return new(P||ze)(f.Y36(Te.Q4m))},ze.\u0275cmp=f.Xpm({type:ze,selectors:[["cvc-gene-input"]],features:[f.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(P,K){if(1&P&&(f.YNc(0,ue,6,7,"ng-container",0),f.YNc(1,re,1,1,"ng-template",null,1,f.W1O)),2&P){const p=f.MAs(2);f.Q6J("ngIf",!(null!=K.formControl.value&&K.formControl.value.id))("ngIfElse",p)}},directives:[e.O5,x.Vq,Me.l,j.JJ,j.oH,L.VQ,De.eJ,e.sg,x.Ip,ie.NU,ie.$1,_e.ZU,O.H],pipes:[se.A],styles:[""]}),ze=(0,Q.gn)([(0,he.c)()],ze);const Z={name:"cvc-gene-input",component:ze};var ge=i(3309),W=i(6905),ve=i(8616);let Se=(()=>{class oe{}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275mod=f.oAB({type:oe}),oe.\u0275inj=f.cJS({imports:[[e.ez,j.UX,De.WG,L.X0.forChild({types:[Z]}),x.LV,ie.zf,_e.ZJ,ge.U,W.s,ve.Y]]}),oe})();const Le={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ge=(()=>{class oe{}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275mod=f.oAB({type:oe}),oe.\u0275inj=f.cJS({imports:[[e.ez,j.u5,j.UX,x.LV,B.F,X.F,L.X0.forChild({types:[Le]}),Se,I.N,h]]}),oe})();var Be=i(7525),Fe=i(5472),Ne=i(4889),$e=i(7075),Re=i(4181);const Ve={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(oe,P,K)=>{var p,m;const ce=null===(m=null===(p=null==K?void 0:K.parent)||void 0===p?void 0:p.templateOptions)||void 0===m?void 0:m.allowCreate;return void 0===ce||ce}}},hideExpression:(oe,P,K)=>{const p=(null==K?void 0:K.form)?K.form.get("gene"):null;return!p||!p.value||!p.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};let Ze=(()=>{class oe{}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275mod=f.oAB({type:oe}),oe.\u0275inj=f.cJS({imports:[[e.ez,j.u5,j.UX,x.LV,B.F,X.F,L.X0.forChild({types:[Ve]}),Re.O,I.N]]}),oe})(),Ye=(()=>{class oe{}return oe.\u0275fac=function(K){return new(K||oe)},oe.\u0275mod=f.oAB({type:oe}),oe.\u0275inj=f.cJS({imports:[[e.ez,S.Bz,j.UX,a.s,C.U5,z.L,T.Jb,y.sL,Be.j,R.vh,ie.zf,_e.ZJ,L.X0,s.B,n.R,v.C,I.N,l.o,o.K,Ge,Fe.r,Ne.E,$e.l,Re.O,Ze,a.s]]}),oe})()},7630:(fe,Y,i)=>{i.d(Y,{$G1:()=>si,A4J:()=>qn,A94:()=>Fr,AMF:()=>Xr,AO2:()=>X,B0s:()=>Xi,B97:()=>Bn,BQZ:()=>d,BTF:()=>un,Bk6:()=>ps,BnY:()=>wi,Bo4:()=>Gs,Cp0:()=>R,D9L:()=>ir,Del:()=>ss,DkJ:()=>On,E1C:()=>Tr,E8d:()=>z,EwB:()=>er,F3s:()=>_e,FB1:()=>re,FId:()=>ji,FJi:()=>Te,FKQ:()=>Ci,FNv:()=>Q,FOU:()=>nr,Fvz:()=>D,GSh:()=>ni,GYx:()=>ei,Gbq:()=>Wt,Gnp:()=>zs,HUC:()=>ne,Hmr:()=>Ao,IP1:()=>gr,IRu:()=>ue,IZ6:()=>po,JDX:()=>he,JQ3:()=>Mi,KNk:()=>pi,Kk:()=>nn,Kmw:()=>Qo,L5n:()=>Kn,L8L:()=>go,LLl:()=>Wo,LUc:()=>Qi,LiH:()=>Ms,Lr0:()=>is,MYm:()=>to,Mgx:()=>y,MsG:()=>h,NQC:()=>de,NbY:()=>Ni,OHm:()=>bn,OIL:()=>_n,OfU:()=>C,Onj:()=>V,P_b:()=>Xt,Q4m:()=>vi,Q_P:()=>Zi,Qtd:()=>As,Qzn:()=>Yn,R8w:()=>S,RMv:()=>Ai,ROj:()=>Sr,RTy:()=>q,Rdc:()=>Ro,SJD:()=>ct,SWk:()=>dr,SrV:()=>De,Sx0:()=>f,T1I:()=>lr,TNk:()=>jr,Tg0:()=>es,TiL:()=>co,Tq1:()=>an,Tt7:()=>Go,UIR:()=>Ht,UWf:()=>ro,VZq:()=>Vn,Vj7:()=>Wi,VnG:()=>J,WFw:()=>Hi,WGV:()=>ls,WOS:()=>ns,WRV:()=>ao,Ws:()=>ii,X5f:()=>Ln,Xft:()=>Nr,YMi:()=>cn,Ybm:()=>mn,ZYZ:()=>No,Zhw:()=>gi,Zo2:()=>To,Zw1:()=>Ri,_3P:()=>I,_Wm:()=>a,_eC:()=>Gi,_jb:()=>oo,aw3:()=>Mr,bgg:()=>wo,c$m:()=>Zo,cCu:()=>Hr,cEv:()=>zo,cMj:()=>Gr,d4o:()=>ze,db2:()=>ds,eY8:()=>fn,edp:()=>Fi,ejK:()=>Rr,fow:()=>U,fpJ:()=>Ti,fwG:()=>Eo,g0X:()=>gs,ghc:()=>Dn,gtM:()=>Ei,h01:()=>T,hVB:()=>vs,huM:()=>Z,i44:()=>te,iGM:()=>jo,iJT:()=>Rs,iST:()=>en,iXf:()=>We,io:()=>$n,iwm:()=>n,jMx:()=>Es,jw9:()=>O,k2T:()=>Si,k7O:()=>rn,kQf:()=>kn,kQl:()=>se,kqt:()=>N,kv3:()=>di,l4w:()=>zr,lYz:()=>ee,lcA:()=>xn,lfy:()=>zi,m$d:()=>Ss,m55:()=>w,mII:()=>Ho,mdl:()=>v,mpB:()=>$,nnL:()=>Ar,o71:()=>pe,oRL:()=>G,otH:()=>Jn,pHu:()=>Zr,pP7:()=>W,pR8:()=>sr,q1D:()=>Ns,q8c:()=>In,q9q:()=>Pn,qf4:()=>Mo,rJ8:()=>yn,rZD:()=>Me,rzy:()=>hn,sBY:()=>Wr,sLD:()=>Cs,sfv:()=>b,tI1:()=>x,tJ6:()=>Co,td:()=>jt,ti:()=>Un,tji:()=>Er,tw_:()=>So,u4i:()=>l,uBv:()=>L,ubO:()=>Fs,vMt:()=>Xo,vv6:()=>Cr,vz2:()=>vo,wJ2:()=>B,wRZ:()=>pr,wbP:()=>vr,wg3:()=>wr,wkr:()=>le,wpb:()=>ge,xlL:()=>F,xsC:()=>li,y1h:()=>M,yic:()=>ie,yqR:()=>Ts,z8D:()=>Qr,zwS:()=>Fo});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),v=(()=>{return(t=v||(v={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",v;var t})(),I=(()=>{return(t=I||(I={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",I;var t})(),l=(()=>{return(t=l||(l={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.DiseaseName="DISEASE_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.Summary="SUMMARY",t.TherapyName="THERAPY_NAME",l;var t})(),L=(()=>{return(t=L||(L={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",L;var t})(),a=(()=>{return(t=a||(a={})).And="AND",t.Or="OR",a;var t})(),z=(()=>{return(t=z||(z={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",z;var t})(),y=(()=>{return(t=y||(y={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",y;var t})(),C=(()=>{return(t=C||(C={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",C;var t})(),T=(()=>{return(t=T||(T={})).Created="CREATED",t.LastModified="LAST_MODIFIED",T;var t})(),S=(()=>{return(t=S||(S={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",S;var t})(),X=(()=>{return(t=X||(X={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",t.DeprecatedVariant="DEPRECATED_VARIANT",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",X;var t})(),B=(()=>{return(t=B||(B={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",B;var t})(),x=(()=>{return(t=x||(x={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",x;var t})(),f=(()=>{return(t=f||(f={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",f;var t})(),M=(()=>{return(t=M||(M={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",M;var t})(),R=(()=>{return(t=R||(R={})).Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.TherapyName="THERAPY_NAME",t.VariantOrigin="VARIANT_ORIGIN",R;var t})(),q=(()=>{return(t=q||(q={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",q;var t})(),w=(()=>{return(t=w||(w={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",w;var t})(),N=(()=>{return(t=N||(N={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",N;var t})(),d=(()=>{return(t=d||(d={})).Open="OPEN",t.Resolved="RESOLVED",d;var t})(),b=(()=>{return(t=b||(b={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",b;var t})(),D=(()=>{return(t=D||(D={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.TherapyName="therapyName",t.VariantCount="variantCount",D;var t})(),J=(()=>{return(t=J||(J={})).Eq="EQ",t.Ge="GE",t.Gt="GT",t.Le="LE",t.Lt="LT",t.Ne="NE",J;var t})(),G=(()=>{return(t=G||(G={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",G;var t})(),h=(()=>{return(t=h||(h={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",h;var t})(),Q=(()=>{return(t=Q||(Q={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",t.EvidenceScore="evidenceScore",Q;var t})(),U=(()=>{return(t=U||(U={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",U;var t})(),F=(()=>{return(t=F||(F={})).Id="ID",t.Name="NAME",F;var t})(),ee=(()=>{return(t=ee||(ee={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",ee;var t})(),de=(()=>{return(t=de||(de={})).Read="READ",t.Unread="UNREAD",de;var t})(),he=(()=>{return(t=he||(he={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",he;var t})(),Te=(()=>{return(t=Te||(Te={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",Te;var t})(),Me=(()=>{return(t=Me||(Me={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Me;var t})(),De=(()=>{return(t=De||(De={})).Asc="ASC",t.Desc="DESC",De;var t})(),ie=(()=>{return(t=ie||(ie={})).Asco="ASCO",t.Ash="ASH",t.Pubmed="PUBMED",ie;var t})(),_e=(()=>{return(t=_e||(_e={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",_e;var t})(),O=(()=>{return(t=O||(O={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",O;var t})(),se=(()=>{return(t=se||(se={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",se;var t})(),V=(()=>{return(t=V||(V={})).Contains="CONTAINS",t.DoesNotContain="DOES_NOT_CONTAIN",t.Eq="EQ",t.Ne="NE",t.StartsWith="STARTS_WITH",V;var t})(),pe=(()=>{return(t=pe||(pe={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",pe;var t})(),$=(()=>{return(t=$||($={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",$;var t})(),le=(()=>{return(t=le||(le={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",le;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",ne;var t})(),te=(()=>{return(t=te||(te={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",te;var t})(),ue=(()=>{return(t=ue||(ue={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ue;var t})(),re=(()=>{return(t=re||(re={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",re;var t})(),ze=(()=>{return(t=ze||(ze={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ze;var t})(),Z=(()=>{return(t=Z||(Z={})).CommonGermline="COMMON_GERMLINE",t.Mixed="MIXED",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",Z;var t})(),ge=(()=>{return(t=ge||(ge={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",ge;var t})(),W=(()=>{return(t=W||(W={})).DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.TherapyName="therapyName",t.VariantName="variantName",W;var t})();const ve=e.Ps`
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
    deprecated
  }
}
    `,Se=e.Ps`
    fragment assertionPopover on Assertion {
  id
  name
  status
  summary
  assertionType
  assertionDirection
  significance
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
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
    ${ve}`,Ee=e.Ps`
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
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  summary
  assertionType
  assertionDirection
  significance
  ampLevel
  evidenceItemsCount
  status
  flagged
}
    ${ve}`,Le=e.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ge=e.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Be=e.Ps`
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
    `,Fe=e.Ps`
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
    `,Ne=e.Ps`
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
    ... on Revision {
      revisionsetId
    }
    ... on Variant {
      deprecated
    }
    ... on MolecularProfile {
      deprecated
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
      revisionsetId
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `,$e=e.Ps`
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
    ${Ne}`,Re=e.Ps`
    fragment evidencePopover on EvidenceItem {
  id
  name
  status
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
    deprecated
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
    ${ve}`,be=e.Ps`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  therapies {
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
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${ve}`,Ve=e.Ps`
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
    `,Ze=e.Ps`
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
    ${Ve}`,Ye=e.Ps`
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
    `,oe=e.Ps`
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
    `,P=e.Ps`
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
  therapies {
    name
    id
    link
  }
  variantCount
  evidenceItemCount
  assertionCount
}
    `,K=e.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,p=e.Ps`
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
      deprecated
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
    `,m=e.Ps`
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
  therapies {
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
    `,ce=e.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,Ce=e.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,Ae=e.Ps`
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
    `,Qe=e.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,Pe=e.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,we=e.Ps`
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
    `,Je=e.Ps`
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
    `,je=e.Ps`
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
    link
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
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,tt=e.Ps`
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
    `,at=e.Ps`
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
    `,it=e.Ps`
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
    `,_=e.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,H=e.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,A=e.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,ae=e.Ps`
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
    `,Ie=e.Ps`
    fragment variantPopoverFields on Variant {
  id
  name
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
    `,Oe=e.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,dt=e.Ps`
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
  therapies {
    id
    name
    link
  }
  aliases {
    name
  }
}
    `,rt=e.Ps`
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
  significance
  disease {
    id
    doid
    name
    displayName
    link
  }
  therapies {
    id
    ncitId
    name
    link
  }
  therapyInteractionType
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
    `,ut=e.Ps`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
    status
    deprecated
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
    `,qe=e.Ps`
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
    `,pt=e.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,mt=e.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,lt=e.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,ct=e.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,We=e.Ps`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,gt=e.Ps`
    fragment AddTherapyFields on AddTherapyPayload {
  new
  therapy {
    id
    ncitId
    name
  }
}
    `,ft=e.Ps`
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
    `,Nt=e.Ps`
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
    `,Lt=(e.Ps`
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
  significance
  disease {
    id
    doid
    name
    displayName
  }
  therapies {
    id
    ncitId
    name
  }
  therapyInteractionType
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
    `),Ft=e.Ps`
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  significance
  evidenceLevel
  evidenceDirection
  evidenceRating
  therapyInteractionType
  source {
    id
    citation
    sourceType
  }
  phenotypes {
    id
    name
  }
  therapies {
    id
    name
  }
  disease {
    id
    name
  }
}
    `,$t=e.Ps`
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
    `,vt=e.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,ht=e.Ps`
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
    `,zt=e.Ps`
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
    `,_t=e.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Ct=e.Ps`
    fragment RevisableVariantFields on Variant {
  id
  name
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
    ${_t}`,Rt=e.Ps`
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
    `,bt=e.Ps`
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
  significance
  therapies {
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
  therapyInteractionType
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
    ${ve}`,Gt=e.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
}
    `,Bt=e.Ps`
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
    `,yt=e.Ps`
    fragment EvidenceSummaryFields on EvidenceItem {
  id
  name
  description
  status
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
      link
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
    ${ve}`,Tt=e.Ps`
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
    `,It=e.Ps`
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
    `,st=e.Ps`
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
      deprecated
      link
      revisionsetId
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
    `,Mt=e.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  deprecated
  deprecatedVariants {
    deprecationReason
    deprecationComment {
      ...commentListNode
    }
    id
    deprecated
    name
    link
  }
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
    ${st}`,Dt=e.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
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
    `,St=e.Ps`
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
    ${Dt}
${ve}`,Ot=e.Ps`
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
    `,Et=e.Ps`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  url
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
    url
    profileImagePath(size: 12)
  }
}
    `,Pt=e.Ps`
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
    `,At=e.Ps`
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
    `,xt=e.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,g=e.Ps`
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
    link
  }
}
    `,k=e.Ps`
    fragment TherapiesSummaryFields on Therapy {
  id
  name
  ncitId
  therapyUrl
  therapyAliases
  link
}
    `,u=e.Ps`
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
    `,E=e.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,me=e.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,ye=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,xe=e.Ps`
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
    ${Ne}`,Ue=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,nt=e.Ps`
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
    `,Ut=e.Ps`
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
      }
    }
  }
}
    `,wt=e.Ps`
    fragment VariantDetailFields on Variant {
  id
  name
  deprecated
  deprecationReason
  deprecationComment {
    ...commentListNode
  }
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
    ${st}`,Vt=e.Ps`
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  caddPhred
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
    `,Zt=e.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  gene {
    id
    name
    link
  }
  variantAliases
  alleleRegistryId
  openCravatUrl
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
    ${Vt}`,Yt=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Se}`;let Wt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jt=e.Ps`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $significance: EvidenceSignificance, $assertionType: EvidenceType, $variantId: Int, $molecularProfileId: Int, $evidenceId: Int, $molecularProfileName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $status: EvidenceStatusFilter) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    summary: $summary
    assertionDirection: $assertionDirection
    significance: $significance
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
    therapyId: $therapyId
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
    ${Ee}`;let jt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kt=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Le}`;let Ht=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kt=e.Ps`
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
    ${Ge}`;let Xt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qt=e.Ps`
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
    ${st}`;let en=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tn=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Be}`;let nn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const on=e.Ps`
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
    `;let rn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=on}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sn=e.Ps`
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
    ${Fe}`;let an=(()=>{class t extends e.AE{constructor(r){super(r),this.document=sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ln=e.Ps`
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
    `;let cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ln}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const dn=e.Ps`
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
    ${$e}`;let un=(()=>{class t extends e.AE{constructor(r){super(r),this.document=dn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Re}`;let mn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gn=e.Ps`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
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
    therapyId: $therapyId
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
    ${be}`;let fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vn=e.Ps`
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
    ${Ze}`;let hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zn=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Ye}`;let _n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${oe}`;let yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tn=e.Ps`
    query BrowseGenes($entrezSymbol: String, $therapyName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $searchScope: GeneSearchFilter, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    therapyName: $therapyName
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
    ${P}`;let In=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mn=e.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${K}`;let Dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sn=e.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${p}`;let On=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const En=e.Ps`
    query BrowseMolecularProfiles($variantName: String, $variantId: Int, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    variantName: $variantName
    variantId: $variantId
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
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
    filteredCount
    pageCount
  }
}
    ${m}`;let Pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=En}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const An=e.Ps`
    query MolecularProfileMenu($geneId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: MolecularProfileDisplayFilter) {
  molecularProfiles(
    geneId: $geneId
    name: $mpName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
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
        ...menuMolecularProfile
      }
    }
  }
}
    ${ce}`;let xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=An}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nn=e.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${Ce}`;let Ln=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Nn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fn=e.Ps`
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
    ${Ae}`;let $n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rn=e.Ps`
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
    ${Qe}`;let Bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qn=e.Ps`
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
    ${Pe}`;let Yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wn=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${we}`;let Jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jn=e.Ps`
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
    ${Je}`;let Kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hn=e.Ps`
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
    ${je}`;let kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xn=e.Ps`
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
    therapies {
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
    comments {
      ...TimepointCount
    }
    molecularProfiles {
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
    query TherapyPopover($therapyId: Int!) {
  therapyPopover(id: $therapyId) {
    id
    name
    therapyUrl
    ncitId
    therapyAliases
    assertionCount
    evidenceItemCount
    link
  }
}
    `;let go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fo=e.Ps`
    query TherapiesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $sortBy: TherapySort) {
  therapies(
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
        ...TherapyBrowseTableRowFields
      }
    }
  }
}
    ${Xe}`;let vo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ho=e.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${tt}`;let zo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ho}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _o=e.Ps`
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
    ${at}`;let Co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yo=e.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${it}`;let To=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Io=e.Ps`
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
    ${_}`;let Mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Do=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${H}`;let So=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Do}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oo=e.Ps`
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
    ${A}`;let Eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Po=e.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${ae}`;let Ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Po}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xo=e.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Ie}`;let No=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lo=e.Ps`
    query VariantsMenu($geneId: Int, $variantName: String, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
    name: $variantName
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
    ${Oe}`;let Fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $o=e.Ps`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
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
    ${dt}`;let Ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bo=e.Ps`
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
    `;let Go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bo=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Qo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Uo=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${rt}`;let wo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vo=e.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;let Zo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yo=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Wo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jo=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${st}`;let jo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Jo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ko=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${ut}`;let Ho=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ko=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Xo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qo=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let ei=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ti=e.Ps`
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
    deprecatedVariants {
      id
      name
      link
    }
  }
}
    ${qe}`;let ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ti}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oi=e.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let ii=(()=>{class t extends e.mm{constructor(r){super(r),this.document=oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ri=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let si=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ri}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ai=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let li=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ai}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ci=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let di=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ci}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ui=e.Ps`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
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
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ii=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Mi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ii}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Di=e.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Si=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Di}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oi=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
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
    ${ct}`;let Ai=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Pi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xi=e.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Li=e.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;let Fi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Li}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $i=e.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${gt}`;let Ri=(()=>{class t extends e.mm{constructor(r){super(r),this.document=$i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bi=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;let Gi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bi=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Nt}`;let Qi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;const Ui=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let wi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vi=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Lt}`;let Zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yi=e.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;let Wi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ji=e.Ps`
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
    `;let ji=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ji}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Ft}`;const Ki=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Hi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ki=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Xi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qi=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=qi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tr=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${$t}`;let nr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=tr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const or=e.Ps`
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let ir=(()=>{class t extends e.mm{constructor(r){super(r),this.document=or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${vt}`;const rr=e.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${ht}`;let sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ar=e.Ps`
    mutation SuggestMolecularProfileRevision($input: SuggestMolecularProfileRevisionInput!) {
  suggestMolecularProfileRevision(input: $input) {
    clientMutationId
    molecularProfile {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let lr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ar}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cr=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let dr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=cr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ur=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let pr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mr=e.Ps`
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
    `;let gr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=mr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fr=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let vr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hr=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _r=e.Ps`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: DeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateVariant(
    input: {variantId: $variantId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    newlyDeprecatedMolecularProfiles {
      id
    }
    variant {
      id
      name
    }
  }
}
    `;let Cr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=_r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yr=e.Ps`
    query MolecularProfilesForVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    molecularProfiles {
      id
      name
      link
      evidenceCountsByStatus {
        submittedCount
        acceptedCount
      }
    }
  }
}
    `;let Tr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ir=e.Ps`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let Mr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ir}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dr=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${zt}`;let Sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Or=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pr=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Ct}`;let Ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xr=e.Ps`
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
      newlyCreated
    }
  }
}
    `;let Nr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=xr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lr=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Rt}`;let Fr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $r=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${bt}`;let Rr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const br=e.Ps`
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
    `;let Gr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Br=e.Ps`
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
    `;let Qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ur=e.Ps`
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
    `;let wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Gt}`;const Vr=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Bt}`;let Zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yr=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${yt}`;let Wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jr=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Tt}`;let jr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kr=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${It}`;let Hr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kr=e.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Mt}`;let Xr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qr=e.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${St}`;let es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ts=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Ot}`;let ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ts}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const os=e.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    id
    name
    url
    description
    profileImagePath(size: 256)
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Et}`;let is=(()=>{class t extends e.AE{constructor(r){super(r),this.document=os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rs=e.Ps`
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
    ${Pt}`;let ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const as=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let ls=(()=>{class t extends e.AE{constructor(r){super(r),this.document=as}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cs=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${At}`;let ds=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const us=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${xt}`;let ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ms=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${g}`;let gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fs=e.Ps`
    query TherapyDetail($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    ncitId
    therapyUrl
    therapyAliases
    link
  }
}
    `;let vs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hs=e.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${k}`;let zs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _s=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${u}`;let Cs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ys=e.Ps`
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
    ${ye}
${me}
${E}
${xe}`;let Ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ys}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Is=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${xe}`;let Ms=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ds=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Ue}`;let Ss=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ds}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Os=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Es=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ps=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${nt}`;let As=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const xs=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ut}`;let Ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ls=e.Ps`
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
    `;let Fs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ls}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $s=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${wt}`;let Rs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bs=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Zt}`;let Gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(fe,Y,i)=>{i.r(Y),i.d(Y,{LayoutModule:()=>xt});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),v=i(8929),I=i(7625),l=i(655),L=i(4090),a=i(1721),z=i(4219),y=i(925),C=i(5017),T=i(226),j=i(5113);const S=["*"],X=["nz-sider-trigger",""];function B(g,k){}function x(g,k){if(1&g&&(n.ynx(0),n.YNc(1,B,0,0,"ng-template",3),n.BQk()),2&g){const u=n.oxw(),E=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||E)}}function f(g,k){}function M(g,k){if(1&g&&(n.ynx(0),n.YNc(1,f,0,0,"ng-template",3),n.BQk()),2&g){const u=n.oxw(),E=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||E)}}function R(g,k){if(1&g&&n._UZ(0,"i",5),2&g){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function q(g,k){if(1&g&&n._UZ(0,"i",5),2&g){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function w(g,k){if(1&g&&(n.YNc(0,R,1,1,"i",4),n.YNc(1,q,1,1,"i",4)),2&g){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function N(g,k){1&g&&n._UZ(0,"i",6)}function d(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const me=n.oxw();return me.setCollapsed(!me.nzCollapsed)}),n.qZA()}if(2&g){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let b=(()=>{class g{constructor(u,E){this.elementRef=u,this.renderer=E,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:S,decls:1,vars:0,template:function(u,E){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),J=(()=>{class g{constructor(u,E){this.elementRef=u,this.renderer=E,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:S,decls:1,vars:0,template:function(u,E){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),G=(()=>{class g{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return g.\u0275fac=function(u){return new(u||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,E){2&u&&(n.Udp("width",E.isNormalTrigger?E.siderWidth:null),n.ekj("ant-layout-sider-trigger",E.isNormalTrigger)("ant-layout-sider-zero-width-trigger",E.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",E.isZeroTrigger&&E.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",E.isZeroTrigger&&!E.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:X,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,E){1&u&&(n.YNc(0,x,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,w,2,2,"ng-template",null,1,n.W1O),n.YNc(4,N,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",E.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",E.isNormalTrigger))},directives:[e.O5,e.tP,C.Ls],encapsulation:2,changeDetection:0}),g})(),h=(()=>{class g{constructor(u,E,me){this.platform=u,this.cdr=E,this.breakpointService=me,this.destroy$=new v.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,a.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(L.ow,!0).pipe((0,I.R)(this.destroy$)).subscribe(u=>{const E=this.nzBreakpoint;E&&(0,a.ov)().subscribe(()=>{this.matchBreakPoint=!u[E],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:E,nzCollapsedWidth:me,nzWidth:ye}=u;(E||me||ye)&&this.updateStyleMap(),E&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(y.t4),n.Y36(n.sBO),n.Y36(L.r3))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-sider"]],contentQueries:function(u,E,me){if(1&u&&n.Suo(me,z.wO,5),2&u){let ye;n.iGM(ye=n.CRH())&&(E.nzMenuDirective=ye.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,E){2&u&&(n.Udp("flex",E.flexSetting)("max-width",E.widthSetting)("min-width",E.widthSetting)("width",E.widthSetting),n.ekj("ant-layout-sider-zero-width",E.nzCollapsed&&0===E.nzCollapsedWidth)("ant-layout-sider-light","light"===E.nzTheme)("ant-layout-sider-dark","dark"===E.nzTheme)("ant-layout-sider-collapsed",E.nzCollapsed)("ant-layout-sider-has-trigger",E.nzCollapsible&&null!==E.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:S,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,E){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,d,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",E.nzCollapsible&&null!==E.nzTrigger))},directives:[G,e.O5],encapsulation:2,changeDetection:0}),(0,l.gn)([(0,a.yF)()],g.prototype,"nzReverseArrow",void 0),(0,l.gn)([(0,a.yF)()],g.prototype,"nzCollapsible",void 0),(0,l.gn)([(0,a.yF)()],g.prototype,"nzCollapsed",void 0),g})(),Q=(()=>{class g{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new v.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,I.R)(this.destroy$)).subscribe(E=>{this.dir=E})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(T.Is,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-layout"]],contentQueries:function(u,E,me){if(1&u&&n.Suo(me,h,4),2&u){let ye;n.iGM(ye=n.CRH())&&(E.listOfNzSiderComponent=ye)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,E){2&u&&n.ekj("ant-layout-rtl","rtl"===E.dir)("ant-layout-has-sider",E.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:S,decls:1,vars:0,template:function(u,E){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),U=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[T.vT,e.ez,C.PV,j.xu,y.ud]]}),g})();var F=i(404),ee=i(1894),de=i(7630),he=i(8054),Te=i(353),Me=i(8514),De=i(8896),_e=i(5254),O=i(3240),se=i(1307),V=i(3164),pe=i(7545),$=i(4850),le=i(2198),ne=i(5778),te=i(3075),ue=i(3618),re=i(6949);function ze(g,k){if(1&g&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&g){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function Z(g,k){if(1&g&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,ze,3,1,"span",6),n.qZA()),2&g){const u=k.$implicit,E=n.oxw();n.Q6J("nzLabel",u.text)("nzValue",u.result),n.xp6(1),n.Q6J("nzType",E.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function ge(g,k){1&g&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let W=(()=>{class g{constructor(u,E){this.gql=u,this.router=E,this.onSearch$=new v.xQ,this.onSelect$=new v.xQ,this.response$=this.onSearch$.pipe((0,se.T)(1),(0,V.p)(300,Te.z,{leading:!1,trailing:!0}),(0,pe.w)(xe=>function ie(g,k=De.E,u=De.E){return(0,Me.P)(()=>g()?k:u)}(()=>void 0===this.queryRef,(0,Me.P)(()=>me(xe)),(0,Me.P)(()=>ye(xe))))),this.isLoading$=this.response$.pipe((0,$.U)(xe=>xe.loading),(0,le.h)(O.ep),(0,ne.x)()),this.result$=this.response$.pipe((0,$.U)(xe=>{var Ue;return null===(Ue=xe.data)||void 0===Ue?void 0:Ue.search}),(0,le.h)(O.ep)),this.option$=this.result$.pipe((0,$.U)(xe=>{const Ue=[];return xe.forEach(nt=>{nt&&Ue.push({text:nt.name,value:nt.id.toString(),result:nt})}),Ue})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const me=xe=>(this.queryRef=this.gql.watch({query:xe,highlightMatches:!0}),this.queryRef.valueChanges),ye=xe=>(0,_e.D)(this.queryRef.refetch({query:xe}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case de.rZD.EvidenceItem:return"civic:evidence";case de.rZD.VariantGroup:return"civic:variantgroup";case de.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let E;switch(u.resultType){case de.rZD.VariantGroup:E="variant-groups";break;case de.rZD.EvidenceItem:E="evidence";break;case de.rZD.MolecularProfile:E="molecular-profiles";break;default:E=`${u.resultType.toLowerCase()}s`}return`/${E}/${u.id}/summary`}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(de.ghc),n.Y36(o.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-quicksearch"]],viewQuery:function(u,E){if(1&u&&n.Gf(he.Vq,7),2&u){let me;n.iGM(me=n.CRH())&&(E.selectNode=me.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,E){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(ye){return E.selectedOpt=ye})("ngModelChange",function(ye){return E.onSelect$.next(ye)})("nzOnSearch",function(ye){return E.onSearch$.next(ye)}),n.YNc(1,Z,4,5,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,ge,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",E.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,E.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,E.isLoading$)))},directives:[he.Vq,te.JJ,te.On,e.sg,he.Ip,C.Ls,e.O5,ue.ZU],pipes:[re.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),g})();var ve=i(1912),Se=i(1059),Ee=i(2340),Le=i(8144),Ge=i(6042),Be=i(2643),Fe=i(2683),Ne=i(3677),$e=i(4401),Re=i(7881),be=i(3640),Ve=i(8785),Ze=i(3434);function Ye(g,k){if(1&g&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&g){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const oe=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function P(g,k){if(1&g&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&g){const u=n.oxw().ngrxLet,E=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,oe)),n.xp6(1),n.MGl("routerLink","/users/",E.id,"/notifications")}}const K=function(g){return{"update-coi":g}};function p(g,k){if(1&g&&n._UZ(0,"cvc-user-avatar",36),2&g){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,K,u.invalidCoi))}}function m(g,k){if(1&g&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&g){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function ce(g,k){1&g&&n._UZ(0,"i",27)}function Ce(g,k){if(1&g&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,p,1,5,"cvc-user-avatar",33),n.YNc(3,m,2,1,"div",34),n.YNc(4,ce,1,0,"i",35),n.qZA()()),2&g){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function Ae(g,k){1&g&&(n.TgZ(0,"nz-space",22),n.YNc(1,Ye,3,1,"button",23),n.YNc(2,P,3,5,"nz-badge",24),n.YNc(3,Ce,5,1,"button",25),n.qZA())}function Qe(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function Pe(g,k){1&g&&n._UZ(0,"li",14)}function we(g,k){1&g&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Je(g,k){1&g&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function je(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(g){return["/users",g]};function He(g,k){if(1&g){const u=n.EpF();n.ynx(0),n.YNc(1,Ae,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,Qe,4,0,"li",9),n.YNc(6,Pe,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,we,3,0,"li",12),n.YNc(10,Je,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,je,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&g){const u=k.ngIf,E=n.oxw();n.xp6(1),n.Q6J("ngrxLet",E.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(g,k){1&g&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function et(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function ot(g,k){1&g&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(g,k){1&g&&n._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class g{constructor(u,E){this.queryService=u,this.unreadCountGql=E,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Ee.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,$.U)(({data:me})=>me.notifications.unreadCount),(0,Se.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,$.U)(({data:me})=>me.notifications.unreadCount),(0,Se.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(s.a),n.Y36(de.Kmw))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,E){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return E.coiUpdateModalVisible=ye})("nzOnCancel",function(){return E.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return E.addVariantModalVisible=ye})("nzOnCancel",function(){return E.addVariantModalVisible=!1}),n.YNc(8,ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const me=n.MAs(4),ye=n.MAs(6),xe=n.MAs(9),Ue=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,E.viewer$)),n.xp6(2),n.Q6J("nzVisible",E.coiUpdateModalVisible)("nzContent",ye)("nzTitle",me)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",E.addVariantModalVisible)("nzContent",Ue)("nzTitle",xe)("nzFooter",null)}},directives:[e.O5,re.eJ,Le.NU,Le.$1,Ge.ix,Be.dQ,Fe.w,Ne.wA,Ne.cm,C.Ls,$e.x7,o.rH,Re.L,e.mk,Ne.RR,z.wO,z.r9,z.YV,o.yS,be.du,Ve.t,Ze.G],pipes:[re.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),g})();function at(g,k){1&g&&n._UZ(0,"img",62)}function it(g,k){1&g&&n._UZ(0,"img",63)}function _(g,k){1&g&&n._UZ(0,"cvc-login-button")}function H(g,k){1&g&&n._UZ(0,"cvc-viewer-button")}const A=function(g){return{"is-collapsed":g}},Ie=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class g{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(s.a))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-layout"]],decls:134,vars:48,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/therapies"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row","","id","header-row"],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","200px","id","header-search"],["nz-col","","nzFlex","1 0 250px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","1 0 auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,E){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(ye){return E.isCollapsed=ye}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,at,1,0,"img",4),n.YNc(5,it,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Therapies"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()(),n.TgZ(81,"li",8),n._UZ(82,"i",37),n.TgZ(83,"span")(84,"a",38),n._uU(85,"Search"),n.qZA()()()()(),n.TgZ(86,"li",7)(87,"ul")(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Contributors"),n.qZA()()(),n.TgZ(93,"li",8),n._UZ(94,"i",41),n.TgZ(95,"span")(96,"a",42),n._uU(97,"Organizations"),n.qZA()()()()(),n.TgZ(98,"li",7)(99,"ul")(100,"li",8),n._UZ(101,"i",43),n.TgZ(102,"span")(103,"a",44),n._uU(104,"Data Releases"),n.qZA()()()()()(),n.TgZ(105,"div",45),n._UZ(106,"img",46)(107,"img",47),n.qZA()(),n.TgZ(108,"nz-layout",48)(109,"nz-header")(110,"div",49)(111,"div",50)(112,"span",51),n.NdJ("click",function(){return E.isCollapsed=!E.isCollapsed}),n._UZ(113,"i",52),n.qZA()(),n.TgZ(114,"div",53),n._UZ(115,"cvc-quicksearch"),n.qZA(),n.TgZ(116,"div",54)(117,"ul",55)(118,"li",56)(119,"a",57),n._uU(120,"Home"),n.qZA()(),n.TgZ(121,"li",56)(122,"a",58),n._uU(123,"About CIViC"),n.qZA()(),n.TgZ(124,"li",56)(125,"a",59),n._uU(126,"Help"),n.qZA()()()(),n.TgZ(127,"div",60),n.YNc(128,_,1,0,"cvc-login-button",61),n.ALo(129,"async"),n.YNc(130,H,1,0,"cvc-viewer-button",61),n.ALo(131,"async"),n.qZA()()(),n.TgZ(132,"nz-content"),n._UZ(133,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",E.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(40,A,E.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!E.isCollapsed),n.xp6(1),n.Q6J("ngIf",E.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(42,A,E.isCollapsed))("nzInlineCollapsed",E.isCollapsed),n.xp6(1),n.Q6J("nzTitle",E.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Therapies":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",E.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",E.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",E.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(44,A,E.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(46,A,E.isCollapsed)),n.xp6(5),n.Q6J("nzType",E.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(129,36,E.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(131,38,E.signedIn$)))},directives:[Q,h,o.yS,e.mk,e.O5,z.wO,z.uA,z.r9,F.SY,C.Ls,J,ee.SK,ee.t3,W,ve.s,tt,b,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-row[_ngcontent-%COMP%]{flex-wrap:nowrap}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),g})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(4184),i.e(3883),i.e(1634),i.e(3754),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(g=>g.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(2475),i.e(9160),i.e(8103),i.e(8592),i.e(8249)]).then(i.bind(i,933)).then(g=>g.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(7142),i.e(1838)]).then(i.bind(i,1838)).then(g=>g.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(7434)]).then(i.bind(i,233)).then(g=>g.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"therapies",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8528)]).then(i.bind(i,830)).then(g=>g.TherapiesModule),data:{breadcrumb:"Therapies"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(g=>g.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(9160),i.e(8592),i.e(9987)]).then(i.bind(i,9040)).then(g=>g.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(9101)]).then(i.bind(i,5625)).then(g=>g.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(g=>g.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(1634),i.e(3278),i.e(7142),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(g=>g.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(3883),i.e(3278),i.e(8592),i.e(3506)]).then(i.bind(i,684)).then(g=>g.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(5378)]).then(i.bind(i,3218)).then(g=>g.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(g=>g.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(g=>g.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(g=>g.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(5564),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(g=>g.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(g=>g.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(g=>g.PagesModule),data:{breadcrumb:"Pages"}}]}];let Oe=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Ie)],o.Bz]}),g})();var dt=i(1017),rt=i(1047),ut=i(4546),qe=i(1314),pt=i(4832),mt=i(969),lt=i(2994),ct=i(8583),We=i(1159),gt=i(7429);const yt={provide:te.JU,useExisting:(0,n.Gpc)(()=>It),multi:!0};let It=(()=>{class g{constructor(u,E,me,ye,xe,Ue){this.ngZone=u,this.elementRef=E,this.overlay=me,this.viewContainerRef=ye,this.nzInputGroupWhitSuffixOrPrefixDirective=xe,this.document=Ue,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new v.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,I.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const E=u.keyCode,me=E===We.LH||E===We.JH;E===We.hY&&u.preventDefault(),!this.panelOpen||E!==We.hY&&E!==We.Mf?this.panelOpen&&E===We.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&me&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),E===We.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const E=u.target,me=this.document;let ye=E.value;"number"===E.type&&(ye=""===ye?null:parseFloat(ye)),this.previousValue!==ye&&(this.previousValue=ye,this.onChange(ye),this.canOpen()&&me.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,lt.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,ct.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,le.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Tt(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new gt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const E=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(E),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const E=this.nzAutocomplete.getOption(u),me=E?E.getLabel():u;this.elementRef.nativeElement.value=null!=me?me:"",this.nzAutocomplete.nzBackfill||(this.previousValue=me)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(rt.ke,8),n.Y36(e.K0,8))},g.\u0275dir=n.lG2({type:g,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,E){1&u&&n.NdJ("focusin",function(){return E.handleFocus()})("blur",function(){return E.handleBlur()})("input",function(ye){return E.handleInput(ye)})("keydown",function(ye){return E.handleKeydown(ye)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([yt])]}),g})(),Mt=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[T.vT,e.ez,qe.U8,te.u5,mt.T,pt.g,rt.o7]]}),g})(),Dt=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,te.u5,o.Bz,re.WG,ue.ZJ,he.LV,rt.o7,ut.U5,C.PV,Mt]]}),g})();var St=i(1844),Ot=i(5473),Et=i(330),Pt=i(7233);let At=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,re.WG,Ne.b1,o.Bz,Ge.sL,Le.zf,C.PV,$e.mS,F.cg,be.Qp,Ot.H,Et.e,Pt.e]]}),g})(),xt=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,Oe,C.PV,ee.Jb,U,z.ip,F.cg,ue.ZJ,dt.s,St.B,At,Dt]]}),g})()},3240:(fe,Y,i)=>{function e(l){return null!=l}i.d(Y,{ep:()=>e})},373:(fe,Y,i)=>{i.d(Y,{j:()=>o});var e=i(4850);function o(...s){const v=s.length;if(0===v)throw new Error("list of properties cannot be empty.");return I=>(0,e.U)(function n(s,v){return l=>{let L=l;for(let a=0;a<v;a++){const z=null!=L?L[s[a]]:void 0;if(void 0===z)return;L=z}return L}}(s,v))(I)}},3164:(fe,Y,i)=>{i.d(Y,{p:()=>l});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function l(y,C=o.P,T=n){return j=>j.lift(new L(y,C,T.leading,T.trailing))}class L{constructor(C,T,j,S){this.duration=C,this.scheduler=T,this.leading=j,this.trailing=S}call(C,T){return T.subscribe(new a(C,this.duration,this.scheduler,this.leading,this.trailing))}}class a extends e.L{constructor(C,T,j,S,X){super(C),this.duration=T,this.scheduler=j,this.leading=S,this.trailing=X,this._hasTrailingValue=!1,this._trailingValue=null}_next(C){this.throttled?this.trailing&&(this._trailingValue=C,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(z,this.duration,{subscriber:this})),this.leading?this.destination.next(C):this.trailing&&(this._trailingValue=C,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const C=this.throttled;C&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),C.unsubscribe(),this.remove(C),this.throttled=null)}}function z(y){const{subscriber:C}=y;C.clearThrottle()}},444:(fe,Y,i)=>{function e(N){return N!==String(parseFloat(N))}i.d(Y,{o6:()=>w});var v=Object.getOwnPropertyNames?function o(N){return Object.getOwnPropertyNames(N).filter(function(d){return N.propertyIsEnumerable(d)&&e(d)})}:Object.keys?function n(N){return Object.keys(N).filter(e)}:function s(N){var d=[];for(var b in N)N.hasOwnProperty(b)&&N.propertyIsEnumerable(b)&&e(b)&&d.push(b);return d},I=function(){function N(d){this.enumObj=d,this.keysList=Object.freeze(v(d));for(var b=this.keysList.length,D=new Array(b),J=new Map,G=0;G<b;++G){var h=this.keysList[G],Q=d[h];D[G]=Q,J.set(Q,h),this[G]=Object.freeze([h,Q])}this.valuesList=Object.freeze(D),this.keysByValueMap=J,this.size=this.length=b,Object.freeze(this)}return N.prototype.toString=function(){return"[object EnumWrapper]"},N.prototype.keys=function(){var d,b=this,D=0;return(d={next:function(){var G={done:D>=b.length,value:b.keysList[D]};return++D,G}})[Symbol.iterator]=function(){return this},d},N.prototype.values=function(){var d,b=this,D=0;return(d={next:function(){var G={done:D>=b.length,value:b.valuesList[D]};return++D,G}})[Symbol.iterator]=function(){return this},d},N.prototype.entries=function(){var d,b=this,D=0;return(d={next:function(){var G={done:D>=b.length,value:b[D]};return++D,G}})[Symbol.iterator]=function(){return this},d},N.prototype[Symbol.iterator]=function(){return this.entries()},N.prototype.forEach=function(d,b){for(var D=this.length,J=0;J<D;++J){var G=this[J];d.call(b,G[1],G[0],this,J)}},N.prototype.map=function(d,b){for(var D=this.length,J=new Array(D),G=0;G<D;++G){var h=this[G];J[G]=d.call(b,h[1],h[0],this,G)}return J},N.prototype.getKeys=function(){return this.keysList.slice()},N.prototype.getValues=function(){return this.valuesList.slice()},N.prototype.getEntries=function(){return Array.prototype.slice.call(this)},N.prototype.indexOfKey=function(d){return this.keysList.indexOf(d)},N.prototype.indexOfValue=function(d){return this.valuesList.indexOf(d)},N.prototype.isKey=function(d){return null!=d&&e(d)&&this.enumObj.hasOwnProperty(d)},N.prototype.asKeyOrThrow=function(d){if(this.isKey(d))return d;throw new Error("Unexpected key: "+d+". Expected one of: "+this.getValues())},N.prototype.asKeyOrDefault=function(d,b){return this.isKey(d)?d:b},N.prototype.isValue=function(d){return null!=d&&this.keysByValueMap.has(d)},N.prototype.asValueOrThrow=function(d){if(this.isValue(d))return d;throw new Error("Unexpected value: "+d+". Expected one of: "+this.getValues())},N.prototype.asValueOrDefault=function(d,b){return this.isValue(d)?d:b},N.prototype.getKeyOrThrow=function(d){var b=null!=d?this.keysByValueMap.get(d):void 0;if(null!=b)return b;throw new Error("Unexpected value: "+d+". Expected one of: "+this.getValues())},N.prototype.getKeyOrDefault=function(d,b){var D=null!=d?this.keysByValueMap.get(d):void 0;return null!=D?D:b},N.prototype.getValueOrThrow=function(d){return this.enumObj[this.asKeyOrThrow(d)]},N.prototype.getValueOrDefault=function(d,b){return this.isKey(d)?this.enumObj[d]:b},N}();I.prototype[Symbol.toStringTag]="EnumWrapper";var l=Symbol("ts-enum-util:unhandledEntry"),L=Symbol("ts-enum-util:handleNull"),a=Symbol("ts-enum-util:handleUndefined"),z=Symbol("ts-enum-util:handleUnexpected");function y(N){return new Error("Unhandled value: "+N)}var C=function(){function N(d){this.value=d}return N.prototype.with=function(d){if(d.hasOwnProperty(this.value))return S(d[this.value],this.value);if(d[z])return S(d[z],this.value);throw new Error("Unexpected value: "+this.value)},N}(),T=function(){function N(){}return N.prototype.with=function(d){if(d[L])return S(d[L],null);if(d[z])return S(d[z],null);throw new Error("Unexpected value: null")},N}(),j=function(){function N(){}return N.prototype.with=function(d){if(d[a])return S(d[a],void 0);if(d[z])return S(d[z],void 0);throw new Error("Unexpected value: undefined")},N}();function S(N,d){if(N===l)throw y(d);return N(d)}var X=function(){function N(d){this.value=d}return N.prototype.with=function(d){if(d.hasOwnProperty(this.value))return f(d[this.value],this.value);if(d.hasOwnProperty(z))return f(d[z],this.value);throw new Error("Unexpected value: "+this.value)},N}(),B=function(){function N(){}return N.prototype.with=function(d){if(d.hasOwnProperty(L))return f(d[L],null);if(d.hasOwnProperty(z))return f(d[z],null);throw new Error("Unexpected value: null")},N}(),x=function(){function N(){}return N.prototype.with=function(d){if(d.hasOwnProperty(a))return f(d[a],void 0);if(d.hasOwnProperty(z))return f(d[z],void 0);throw new Error("Unexpected value: undefined")},N}();function f(N,d){if(N===l)throw y(d);return N}var q=new WeakMap;function w(N){var d=q.get(N);return d||(d=new I(N),q.set(N,d)),d}w.handleNull=L,w.handleUndefined=a,w.handleUnexpected=z,w.unhandledEntry=l,w.visitValue=function M(N){return null===N?new T:void 0===N?new j:new C(N)},w.mapValue=function R(N){return null===N?new B:void 0===N?new x:new X(N)}},4987:(fe,Y,i)=>{i.d(Y,{c:()=>N,t:()=>Q});var e=i(8929),o=i(2654),I=(i(5254),i(8896),i(8139),i(5e3)),z=(i(1709),i(7770),i(7221),i(7625));const y=I.GuJ,T=Symbol("__destroy"),j=Symbol("__decoratorApplied");function S(F){return"string"==typeof F?Symbol(`__destroy__${F}`):T}function B(F,ee){F[ee]||(F[ee]=new e.xQ)}function x(F,ee){F[ee]&&(F[ee].next(),F[ee].complete(),F[ee]=null)}function f(F){F instanceof o.w&&F.unsubscribe()}function R(F,ee){return function(){var de;if(F&&F.call(this),x(this,S()),ee.arrayName&&function M(F){Array.isArray(F)&&F.forEach(f)}(this[ee.arrayName]),ee.checkProperties)for(const he in this)(null===(de=ee.blackList)||void 0===de?void 0:de.includes(he))||f(this[he])}}function N(F={}){return ee=>{!function C(F){return!!F[y]}(ee)?function q(F,ee){F.prototype.ngOnDestroy=R(F.prototype.ngOnDestroy,ee)}(ee,F):function w(F,ee){const de=F.\u0275pipe;de.onDestroy=R(de.onDestroy,ee)}(ee,F),function X(F){F.prototype[j]=!0}(ee)}}function Q(F,ee){return de=>{const he=S(ee);return"string"==typeof ee?function h(F,ee,de){const he=F[ee];B(F,de),F[ee]=function(){he.apply(this,arguments),x(this,de),F[ee]=he}}(F,ee,he):B(F,he),de.pipe((0,z.R)(F[he]))}}Symbol("CheckerHasBeenSet")},9552:(fe,Y,i)=>{i.d(Y,{$:()=>b,j:()=>D});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),v=i(839),I=i(8929),l=i(6787),L=i(3753),a=i(7625),z=i(4850),y=i(3164),C=i(9439),T=i(1721),j=i(4090),S=i(925),X=i(5577),B=i(226);const x=["fixedEl"],f=["*"];var M=(()=>{return(J=M||(M={})).resize="resize",J.scroll="scroll",J.touchstart="touchstart",J.touchmove="touchmove",J.touchend="touchend",J.pageshow="pageshow",J.load="LOAD",M;var J})();function q(J){return function R(J){return"undefined"!=typeof window&&J===window}(J)?{top:0,left:0,bottom:0}:J.getBoundingClientRect()}const N="ant-affix";let b=(()=>{class J{constructor(h,Q,U,F,ee,de,he,Te,Me,De){this.nzConfigService=U,this.scrollSrv=F,this.ngZone=ee,this.platform=de,this.renderer=he,this.nzResizeObserver=Te,this.cdr=Me,this.directionality=De,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new v.t(1),this.destroy$=new I.xQ,this.placeholderNode=h.nativeElement,this.document=Q}get target(){const h=this.nzTarget;return("string"==typeof h?this.document.querySelector(h):h)||window}ngOnInit(){var h;null===(h=this.directionality.change)||void 0===h||h.pipe((0,a.R)(this.destroy$)).subscribe(Q=>{this.dir=Q,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(h){const{nzOffsetBottom:Q,nzOffsetTop:U,nzTarget:F}=h;(Q||U)&&this.offsetChanged$.next(),F&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const h=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,l.T)(...Object.keys(M).map(Q=>(0,L.R)(this.target,Q)),this.offsetChanged$.pipe((0,z.U)(()=>({}))),this.nzResizeObserver.observe(h)).pipe((0,y.p)(20,void 0,{trailing:!0}),(0,a.R)(this.destroy$)).subscribe(Q=>this.updatePosition(Q))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(h,Q){const U=h.getBoundingClientRect(),F=q(Q),ee=this.scrollSrv.getScroll(Q,!0),de=this.scrollSrv.getScroll(Q,!1),he=this.document.body;return{top:U.top-F.top+ee-(he.clientTop||0),left:U.left-F.left+de-(he.clientLeft||0),width:U.width,height:U.height}}setAffixStyle(h,Q){const U=this.affixStyle,F=this.target===window;if("scroll"===h.type&&U&&Q&&F||(0,T.wU)(U,Q))return;const ee=!!Q,de=this.fixedEl.nativeElement;this.renderer.setStyle(de,"cssText",(0,T.GM)(Q)),this.affixStyle=Q,ee?de.classList.add(N):de.classList.remove(N),this.updateRtlClass(),(Q&&!U||!Q&&U)&&this.nzChange.emit(ee)}setPlaceholderStyle(h){(0,T.wU)(h,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,T.GM)(h)),this.placeholderStyle=h)}syncPlaceholderStyle(h){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const Q={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(h,Object.assign(Object.assign({},this.affixStyle),Q)),this.setPlaceholderStyle(Q)}updatePosition(h){if(!this.platform.isBrowser)return;const Q=this.target;let U=this.nzOffsetTop;const F=this.scrollSrv.getScroll(Q,!0),ee=this.getOffset(this.placeholderNode,Q),de=this.fixedEl.nativeElement,he={width:de.offsetWidth,height:de.offsetHeight},Te={top:!1,bottom:!1};"number"!=typeof U&&"number"!=typeof this.nzOffsetBottom?(Te.top=!0,U=0):(Te.top="number"==typeof U,Te.bottom="number"==typeof this.nzOffsetBottom);const Me=q(Q),De=Q.innerHeight||Q.clientHeight;if(F>=ee.top-U&&Te.top){const ie=ee.width;this.setAffixStyle(h,{position:"fixed",top:Me.top+U,left:Me.left+ee.left,width:ie}),this.setPlaceholderStyle({width:ie,height:he.height})}else if(F<=ee.top+he.height+this.nzOffsetBottom-De&&Te.bottom){const ie=Q===window?0:window.innerHeight-Me.bottom,_e=ee.width;this.setAffixStyle(h,{position:"fixed",bottom:ie+this.nzOffsetBottom,left:Me.left+ee.left,width:_e}),this.setPlaceholderStyle({width:_e,height:ee.height})}else h.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(h,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(h),this.setPlaceholderStyle();"resize"===h.type&&this.syncPlaceholderStyle(h)}updateRtlClass(){const h=this.fixedEl.nativeElement;"rtl"===this.dir&&h.classList.contains(N)?h.classList.add(`${N}-rtl`):h.classList.remove(`${N}-rtl`)}}return J.\u0275fac=function(h){return new(h||J)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(C.jY),n.Y36(j.MF),n.Y36(n.R0b),n.Y36(S.t4),n.Y36(n.Qsj),n.Y36(X.D3),n.Y36(n.sBO),n.Y36(B.Is,8))},J.\u0275cmp=n.Xpm({type:J,selectors:[["nz-affix"]],viewQuery:function(h,Q){if(1&h&&n.Gf(x,7),2&h){let U;n.iGM(U=n.CRH())&&(Q.fixedEl=U.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:f,decls:3,vars:0,consts:[["fixedEl",""]],template:function(h,Q){1&h&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,C.oS)(),(0,T.Rn)(void 0)],J.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,C.oS)(),(0,T.Rn)(void 0)],J.prototype,"nzOffsetBottom",void 0),J})(),D=(()=>{class J{}return J.\u0275fac=function(h){return new(h||J)},J.\u0275mod=n.oAB({type:J}),J.\u0275inj=n.cJS({imports:[[B.vT,o.ez,S.ud]]}),J})()},6699:(fe,Y,i)=>{i.d(Y,{Dz:()=>S,Rt:()=>B});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),v=i(925),I=i(9808),l=i(5017),L=i(226);const a=["textEl"];function z(x,f){if(1&x&&o._UZ(0,"i",3),2&x){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function y(x,f){if(1&x){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(q){return o.CHM(M),o.oxw().imgError(q)}),o.qZA()}if(2&x){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function C(x,f){if(1&x&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&x){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let S=(()=>{class x{constructor(M,R,q,w){this.nzConfigService=M,this.elementRef=R,this.cdr=q,this.platform=w,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,R=this.el.getBoundingClientRect().width,q=2*this.nzGap<R?2*this.nzGap:8;this.textStyles={transform:`scale(${R-q<M?(R-q)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return x.\u0275fac=function(M){return new(M||x)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(v.t4))},x.\u0275cmp=o.Xpm({type:x,selectors:[["nz-avatar"]],viewQuery:function(M,R){if(1&M&&o.Gf(a,5),2&M){let q;o.iGM(q=o.CRH())&&(R.textEl=q.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,R){2&M&&(o.Udp("width",R.customSize)("height",R.customSize)("line-height",R.customSize)("font-size",R.hasIcon&&R.customSize?R.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===R.nzSize)("ant-avatar-sm","small"===R.nzSize)("ant-avatar-square","square"===R.nzShape)("ant-avatar-circle","circle"===R.nzShape)("ant-avatar-icon",R.nzIcon)("ant-avatar-image",R.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,R){1&M&&(o.YNc(0,z,1,1,"i",0),o.YNc(1,y,1,3,"img",1),o.YNc(2,C,3,2,"span",2)),2&M&&(o.Q6J("ngIf",R.nzIcon&&R.hasIcon),o.xp6(1),o.Q6J("ngIf",R.nzSrc&&R.hasSrc),o.xp6(1),o.Q6J("ngIf",R.nzText&&R.hasText))},directives:[I.O5,l.Ls,I.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],x.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],x.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],x.prototype,"nzGap",void 0),x})(),B=(()=>{class x{}return x.\u0275fac=function(M){return new(M||x)},x.\u0275mod=o.oAB({type:x}),x.\u0275inj=o.cJS({imports:[[L.vT,I.ez,l.PV,v.ud]]}),x})()},4401:(fe,Y,i)=>{i.d(Y,{F9:()=>J,mS:()=>G,x7:()=>D});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),v=i(8076),I=i(9439),l=i(1721),L=i(226),a=i(4832),z=i(9808),y=i(969),C=i(7144);function T(h,Q){if(1&h&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&h){const U=Q.$implicit,F=o.oxw(2).index,ee=o.oxw(2);o.ekj("current",U===ee.countArray[F]),o.xp6(1),o.hij(" ",U," ")}}function j(h,Q){if(1&h&&(o.ynx(0),o.YNc(1,T,2,3,"p",5),o.BQk()),2&h){const U=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",U.countSingleArray)}}function S(h,Q){if(1&h&&(o.TgZ(0,"span",3),o.YNc(1,j,2,1,"ng-container",4),o.qZA()),2&h){const U=Q.index,F=o.oxw(2);o.Udp("transform","translateY("+100*-F.countArray[U]+"%)"),o.Q6J("nzNoAnimation",F.noAnimation),o.xp6(1),o.Q6J("ngIf",!F.nzDot&&void 0!==F.countArray[U])}}function X(h,Q){if(1&h&&(o.ynx(0),o.YNc(1,S,2,4,"span",2),o.BQk()),2&h){const U=o.oxw();o.xp6(1),o.Q6J("ngForOf",U.maxNumberArray)}}function B(h,Q){if(1&h&&o._uU(0),2&h){const U=o.oxw();o.hij("",U.nzOverflowCount,"+")}}function x(h,Q){if(1&h&&(o.ynx(0),o._uU(1),o.BQk()),2&h){const U=o.oxw(2);o.xp6(1),o.Oqu(U.nzText)}}function f(h,Q){if(1&h&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,x,2,1,"ng-container",1),o.qZA(),o.BQk()),2&h){const U=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",U.nzStatus||U.presetColor,""),o.Udp("background",!U.presetColor&&U.nzColor),o.Q6J("ngStyle",U.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",U.nzText)}}function M(h,Q){if(1&h&&o._UZ(0,"nz-badge-sup",5),2&h){const U=o.oxw(2);o.Q6J("nzOffset",U.nzOffset)("nzTitle",U.nzTitle)("nzStyle",U.nzStyle)("nzDot",U.nzDot)("nzOverflowCount",U.nzOverflowCount)("disableAnimation",!!(U.nzStandalone||U.nzStatus||U.nzColor||null!=U.noAnimation&&U.noAnimation.nzNoAnimation))("nzCount",U.nzCount)("noAnimation",!(null==U.noAnimation||!U.noAnimation.nzNoAnimation))}}function R(h,Q){if(1&h&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&h){const U=o.oxw();o.xp6(1),o.Q6J("ngIf",U.showSup)}}const q=["*"];function w(h,Q){if(1&h&&(o.ynx(0),o._uU(1),o.BQk()),2&h){const U=o.oxw();o.xp6(1),o.Oqu(U.nzText)}}const N=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let d=(()=>{class h{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(U){const{nzOverflowCount:F,nzCount:ee}=U;ee&&"number"==typeof ee.currentValue&&(this.count=Math.max(0,ee.currentValue),this.countArray=this.count.toString().split("").map(de=>+de)),F&&this.generateMaxNumberArray()}}return h.\u0275fac=function(U){return new(U||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(U,F){2&U&&(o.uIk("title",null===F.nzTitle?"":F.nzTitle||F.nzCount),o.d8E("@.disabled",F.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(F.nzStyle),o.Udp("right",F.nzOffset&&F.nzOffset[0]?-F.nzOffset[0]:null,"px")("margin-top",F.nzOffset&&F.nzOffset[1]?F.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!F.nzDot)("ant-badge-dot",F.nzDot)("ant-badge-multiple-words",F.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(U,F){if(1&U&&(o.YNc(0,X,2,1,"ng-container",0),o.YNc(1,B,1,1,"ng-template",null,1,o.W1O)),2&U){const ee=o.MAs(2);o.Q6J("ngIf",F.count<=F.nzOverflowCount)("ngIfElse",ee)}},directives:[z.O5,z.sg,a.P],encapsulation:2,data:{animation:[v.Ev]},changeDetection:0}),h})(),D=(()=>{class h{constructor(U,F,ee,de,he,Te){this.nzConfigService=U,this.renderer=F,this.cdr=ee,this.elementRef=de,this.directionality=he,this.noAnimation=Te,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,s.R)(this.destroy$)).subscribe(F=>{this.dir=F,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(U){const{nzColor:F,nzShowDot:ee,nzDot:de,nzCount:he,nzShowZero:Te}=U;F&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null),(ee||de||he||Te)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return h.\u0275fac=function(U){return new(U||h)(o.Y36(I.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(L.Is,8),o.Y36(a.P,9))},h.\u0275cmp=o.Xpm({type:h,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(U,F){2&U&&o.ekj("ant-badge-status",F.nzStatus)("ant-badge-not-a-wrapper",!!(F.nzStandalone||F.nzStatus||F.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:q,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(U,F){1&U&&(o.F$t(),o.YNc(0,f,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,R,2,1,"ng-container",1)),2&U&&(o.Q6J("ngIf",F.nzStatus||F.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",F.nzCount))},directives:[d,z.O5,z.PC,y.f],encapsulation:2,data:{animation:[v.Ev]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],h.prototype,"nzShowZero",void 0),(0,e.gn)([(0,l.yF)()],h.prototype,"nzShowDot",void 0),(0,e.gn)([(0,l.yF)()],h.prototype,"nzStandalone",void 0),(0,e.gn)([(0,l.yF)()],h.prototype,"nzDot",void 0),(0,e.gn)([(0,I.oS)()],h.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,I.oS)()],h.prototype,"nzColor",void 0),h})(),J=(()=>{class h{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(U){const{nzColor:F}=U;F&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null)}}return h.\u0275fac=function(U){return new(U||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:q,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(U,F){1&U&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,w,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&U&&(o.xp6(1),o.Tol(F.presetColor&&"ant-ribbon-color-"+F.presetColor),o.Udp("background-color",!F.presetColor&&F.nzColor),o.ekj("ant-ribbon-placement-end","end"===F.nzPlacement)("ant-ribbon-placement-start","start"===F.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",F.nzText),o.xp6(1),o.Udp("color",!F.presetColor&&F.nzColor))},directives:[y.f],encapsulation:2,changeDetection:0}),h})(),G=(()=>{class h{}return h.\u0275fac=function(U){return new(U||h)},h.\u0275mod=o.oAB({type:h}),h.\u0275inj=o.cJS({imports:[[L.vT,z.ez,C.Q8,y.T,a.g]]}),h})()},7484:(fe,Y,i)=>{i.d(Y,{_i:()=>he,bd:()=>De,vh:()=>_e});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),v=i(7625),I=i(9439),l=i(226),L=i(9808),a=i(969);function z(O,se){1&O&&o.Hsn(0)}const y=["*"];function C(O,se){1&O&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&O&&o.Q6J("ngClass",se.$implicit)}function T(O,se){if(1&O&&(o.TgZ(0,"div",2),o.YNc(1,C,2,1,"div",3),o.qZA()),2&O){const V=se.$implicit;o.xp6(1),o.Q6J("ngForOf",V)}}function j(O,se){if(1&O&&(o.ynx(0),o._uU(1),o.BQk()),2&O){const V=o.oxw(3);o.xp6(1),o.Oqu(V.nzTitle)}}function S(O,se){if(1&O&&(o.TgZ(0,"div",11),o.YNc(1,j,2,1,"ng-container",12),o.qZA()),2&O){const V=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",V.nzTitle)}}function X(O,se){if(1&O&&(o.ynx(0),o._uU(1),o.BQk()),2&O){const V=o.oxw(3);o.xp6(1),o.Oqu(V.nzExtra)}}function B(O,se){if(1&O&&(o.TgZ(0,"div",13),o.YNc(1,X,2,1,"ng-container",12),o.qZA()),2&O){const V=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",V.nzExtra)}}function x(O,se){}function f(O,se){if(1&O&&(o.ynx(0),o.YNc(1,x,0,0,"ng-template",14),o.BQk()),2&O){const V=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",V.listOfNzCardTabComponent.template)}}function M(O,se){if(1&O&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,S,2,1,"div",8),o.YNc(3,B,2,1,"div",9),o.qZA(),o.YNc(4,f,2,1,"ng-container",10),o.qZA()),2&O){const V=o.oxw();o.xp6(2),o.Q6J("ngIf",V.nzTitle),o.xp6(1),o.Q6J("ngIf",V.nzExtra),o.xp6(1),o.Q6J("ngIf",V.listOfNzCardTabComponent)}}function R(O,se){}function q(O,se){if(1&O&&(o.TgZ(0,"div",15),o.YNc(1,R,0,0,"ng-template",14),o.qZA()),2&O){const V=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",V.nzCover)}}function w(O,se){1&O&&(o.ynx(0),o.Hsn(1),o.BQk())}function N(O,se){1&O&&o._UZ(0,"nz-card-loading")}function d(O,se){}function b(O,se){if(1&O&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,d,0,0,"ng-template",14),o.qZA()()),2&O){const V=se.$implicit,pe=o.oxw(2);o.Udp("width",100/pe.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",V)}}function D(O,se){if(1&O&&(o.TgZ(0,"ul",16),o.YNc(1,b,3,3,"li",17),o.qZA()),2&O){const V=o.oxw();o.xp6(1),o.Q6J("ngForOf",V.nzActions)}}let de=(()=>{class O{constructor(){this.nzHoverable=!0}}return O.\u0275fac=function(V){return new(V||O)},O.\u0275dir=o.lG2({type:O,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(V,pe){2&V&&o.ekj("ant-card-hoverable",pe.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],O.prototype,"nzHoverable",void 0),O})(),he=(()=>{class O{}return O.\u0275fac=function(V){return new(V||O)},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-card-tab"]],viewQuery:function(V,pe){if(1&V&&o.Gf(o.Rgc,7),2&V){let $;o.iGM($=o.CRH())&&(pe.template=$.first)}},exportAs:["nzCardTab"],ngContentSelectors:y,decls:1,vars:0,template:function(V,pe){1&V&&(o.F$t(),o.YNc(0,z,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),O})(),Te=(()=>{class O{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return O.\u0275fac=function(V){return new(V||O)},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(V,pe){1&V&&(o.TgZ(0,"div",0),o.YNc(1,T,2,1,"div",1),o.qZA()),2&V&&(o.xp6(1),o.Q6J("ngForOf",pe.listOfLoading))},directives:[L.sg,L.mk],encapsulation:2,changeDetection:0}),O})(),De=(()=>{class O{constructor(V,pe,$){this.nzConfigService=V,this.cdr=pe,this.directionality=$,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var V;null===(V=this.directionality.change)||void 0===V||V.pipe((0,v.R)(this.destroy$)).subscribe(pe=>{this.dir=pe,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(V){return new(V||O)(o.Y36(I.jY),o.Y36(o.sBO),o.Y36(l.Is,8))},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-card"]],contentQueries:function(V,pe,$){if(1&V&&(o.Suo($,he,5),o.Suo($,de,4)),2&V){let le;o.iGM(le=o.CRH())&&(pe.listOfNzCardTabComponent=le.first),o.iGM(le=o.CRH())&&(pe.listOfNzCardGridDirective=le)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(V,pe){2&V&&o.ekj("ant-card-loading",pe.nzLoading)("ant-card-bordered",!1===pe.nzBorderless&&pe.nzBordered)("ant-card-hoverable",pe.nzHoverable)("ant-card-small","small"===pe.nzSize)("ant-card-contain-grid",pe.listOfNzCardGridDirective&&pe.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===pe.nzType)("ant-card-contain-tabs",!!pe.listOfNzCardTabComponent)("ant-card-rtl","rtl"===pe.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:y,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(V,pe){if(1&V&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,q,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,w,2,0,"ng-container",3),o.YNc(4,N,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,D,2,1,"ul",5)),2&V){const $=o.MAs(5);o.Q6J("ngIf",pe.nzTitle||pe.nzExtra||pe.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",pe.nzCover),o.xp6(1),o.Q6J("ngStyle",pe.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!pe.nzLoading)("ngIfElse",$),o.xp6(3),o.Q6J("ngIf",pe.nzActions.length)}},directives:[Te,L.O5,a.f,L.tP,L.PC,L.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],O.prototype,"nzBordered",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],O.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],O.prototype,"nzLoading",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],O.prototype,"nzHoverable",void 0),(0,e.gn)([(0,I.oS)()],O.prototype,"nzSize",void 0),O})(),_e=(()=>{class O{}return O.\u0275fac=function(V){return new(V||O)},O.\u0275mod=o.oAB({type:O}),O.\u0275inj=o.cJS({imports:[[L.ez,a.T],l.vT]}),O})()},5577:(fe,Y,i)=>{i.d(Y,{D3:()=>I,y7:()=>L});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let v=(()=>{class a{create(y){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(y)}}return a.\u0275fac=function(y){return new(y||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),I=(()=>{class a{constructor(y){this.nzResizeObserverFactory=y,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((y,C)=>this.cleanupObserver(C))}observe(y){const C=(0,o.fI)(y);return new n.y(T=>{const S=this.observeElement(C).subscribe(T);return()=>{S.unsubscribe(),this.unobserveElement(C)}})}observeElement(y){if(this.observedElements.has(y))this.observedElements.get(y).count++;else{const C=new s.xQ,T=this.nzResizeObserverFactory.create(j=>C.next(j));T&&T.observe(y),this.observedElements.set(y,{observer:T,stream:C,count:1})}return this.observedElements.get(y).stream}unobserveElement(y){this.observedElements.has(y)&&(this.observedElements.get(y).count--,this.observedElements.get(y).count||this.cleanupObserver(y))}cleanupObserver(y){if(this.observedElements.has(y)){const{observer:C,stream:T}=this.observedElements.get(y);C&&C.disconnect(),T.complete(),this.observedElements.delete(y)}}}return a.\u0275fac=function(y){return new(y||a)(e.LFG(v))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),L=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[v]}),a})()},5482:(fe,Y,i)=>{i.d(Y,{Zv:()=>d,cD:()=>b,yH:()=>w});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),v=i(2198),I=i(8076),l=i(9439),L=i(4090),a=i(1721),z=i(226),y=i(4832),C=i(9808),T=i(969),j=i(5017);const S=["*"],X=["collapseHeader"];function B(D,J){if(1&D&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&D){const G=J.$implicit,h=o.oxw(2);o.xp6(1),o.Q6J("nzType",G||"right")("nzRotate",h.nzActive?90:0)}}function x(D,J){if(1&D&&(o.TgZ(0,"div"),o.YNc(1,B,2,2,"ng-container",3),o.qZA()),2&D){const G=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",G.nzExpandedIcon)}}function f(D,J){if(1&D&&(o.ynx(0),o._uU(1),o.BQk()),2&D){const G=o.oxw();o.xp6(1),o.Oqu(G.nzHeader)}}function M(D,J){if(1&D&&(o.ynx(0),o._uU(1),o.BQk()),2&D){const G=o.oxw(2);o.xp6(1),o.Oqu(G.nzExtra)}}function R(D,J){if(1&D&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&D){const G=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",G.nzExtra)}}const q="collapse";let w=(()=>{class D{constructor(G,h,Q,U){this.nzConfigService=G,this.cdr=h,this.directionality=Q,this.destroy$=U,this._nzModuleName=q,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(q).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(h=>{this.dir=h,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(G){this.listOfNzCollapsePanelComponent.push(G)}removePanel(G){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(G),1)}click(G){this.nzAccordion&&!G.nzActive&&this.listOfNzCollapsePanelComponent.filter(h=>h!==G).forEach(h=>{h.nzActive&&(h.nzActive=!1,h.nzActiveChange.emit(h.nzActive),h.markForCheck())}),G.nzActive=!G.nzActive,G.nzActiveChange.emit(G.nzActive)}}return D.\u0275fac=function(G){return new(G||D)(o.Y36(l.jY),o.Y36(o.sBO),o.Y36(z.Is,8),o.Y36(L.kn))},D.\u0275cmp=o.Xpm({type:D,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(G,h){2&G&&o.ekj("ant-collapse-icon-position-left","left"===h.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===h.nzExpandIconPosition)("ant-collapse-ghost",h.nzGhost)("ant-collapse-borderless",!h.nzBordered)("ant-collapse-rtl","rtl"===h.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([L.kn])],ngContentSelectors:S,decls:1,vars:0,template:function(G,h){1&G&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzAccordion",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzBordered",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzGhost",void 0),D})();const N="collapsePanel";let d=(()=>{class D{constructor(G,h,Q,U,F,ee){this.nzConfigService=G,this.ngZone=h,this.cdr=Q,this.destroy$=U,this.nzCollapseComponent=F,this.noAnimation=ee,this._nzModuleName=N,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(N).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,v.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return D.\u0275fac=function(G){return new(G||D)(o.Y36(l.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(L.kn),o.Y36(w,1),o.Y36(y.P,8))},D.\u0275cmp=o.Xpm({type:D,selectors:[["nz-collapse-panel"]],viewQuery:function(G,h){if(1&G&&o.Gf(X,7),2&G){let Q;o.iGM(Q=o.CRH())&&(h.collapseHeader=Q.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(G,h){2&G&&o.ekj("ant-collapse-no-arrow",!h.nzShowArrow)("ant-collapse-item-active",h.nzActive)("ant-collapse-item-disabled",h.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([L.kn])],ngContentSelectors:S,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(G,h){1&G&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,x,2,1,"div",2),o.YNc(3,f,2,1,"ng-container",3),o.YNc(4,R,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&G&&(o.uIk("aria-expanded",h.nzActive),o.xp6(2),o.Q6J("ngIf",h.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",h.nzHeader),o.xp6(1),o.Q6J("ngIf",h.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",h.nzActive),o.Q6J("@.disabled",null==h.noAnimation?null:h.noAnimation.nzNoAnimation)("@collapseMotion",h.nzActive?"expanded":"hidden"))},directives:[C.O5,T.f,j.Ls],encapsulation:2,data:{animation:[I.J_]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],D.prototype,"nzActive",void 0),(0,e.gn)([(0,a.yF)()],D.prototype,"nzDisabled",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],D.prototype,"nzShowArrow",void 0),D})(),b=(()=>{class D{}return D.\u0275fac=function(G){return new(G||D)},D.\u0275mod=o.oAB({type:D}),D.\u0275inj=o.cJS({imports:[[z.vT,C.ez,j.PV,T.T,y.g]]}),D})()},3098:(fe,Y,i)=>{i.d(Y,{R7:()=>re,q6:()=>ze,uj:()=>ne});var e=i(226),o=i(925),n=i(9808),s=i(5e3),v=i(969),I=i(655),l=i(8929),L=i(6787),a=i(1721),z=i(7625),y=i(1059),C=i(7545),T=i(7138),j=i(2994),S=i(9439),X=i(948),B=i(4090);function x(Z,ge){1&Z&&s.Hsn(0)}const f=["*"];function M(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw(3);s.xp6(1),s.Oqu(W.nzTitle)}}function R(Z,ge){if(1&Z&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&Z){const W=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.nzTitle)}}function q(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw(3);s.xp6(1),s.Oqu(W.nzExtra)}}function w(Z,ge){if(1&Z&&(s.TgZ(0,"div",8),s.YNc(1,q,2,1,"ng-container",7),s.qZA()),2&Z){const W=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.nzExtra)}}function N(Z,ge){if(1&Z&&(s.TgZ(0,"div",3),s.YNc(1,R,2,1,"div",4),s.YNc(2,w,2,1,"div",5),s.qZA()),2&Z){const W=s.oxw();s.xp6(1),s.Q6J("ngIf",W.nzTitle),s.xp6(1),s.Q6J("ngIf",W.nzExtra)}}function d(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function b(Z,ge){}function D(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,d,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,b,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&Z){const W=s.oxw().$implicit,ve=s.oxw(3);s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ve.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title),s.xp6(2),s.Q6J("ngTemplateOutlet",W.content)}}function J(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function G(Z,ge){if(1&Z&&(s.TgZ(0,"td",14),s.YNc(1,J,2,1,"ng-container",7),s.qZA()),2&Z){const W=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function h(Z,ge){}function Q(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,G,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,h,0,0,"ng-template",16),s.qZA(),s.BQk()),2&Z){const W=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title),s.xp6(1),s.Q6J("colSpan",2*W.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",W.content)}}function U(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,D,7,5,"ng-container",2),s.YNc(2,Q,4,3,"ng-container",2),s.BQk()),2&Z){const W=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!W.nzBordered),s.xp6(1),s.Q6J("ngIf",W.nzBordered)}}function F(Z,ge){if(1&Z&&(s.TgZ(0,"tr",10),s.YNc(1,U,3,2,"ng-container",11),s.qZA()),2&Z){const W=ge.$implicit;s.xp6(1),s.Q6J("ngForOf",W)}}function ee(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,F,2,1,"tr",9),s.BQk()),2&Z){const W=s.oxw();s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function de(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw().$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function he(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,de,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&Z){const W=ge.$implicit,ve=s.oxw(4);s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ve.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function Te(Z,ge){}function Me(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,Te,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&Z){const W=ge.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(3),s.Q6J("ngTemplateOutlet",W.content)}}function De(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,he,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Me,5,2,"ng-container",11),s.qZA(),s.BQk()),2&Z){const W=ge.$implicit;s.xp6(2),s.Q6J("ngForOf",W),s.xp6(2),s.Q6J("ngForOf",W)}}function ie(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&Z){const W=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function _e(Z,ge){if(1&Z&&(s.ynx(0),s._uU(1),s.BQk()),2&Z){const W=s.oxw().$implicit;s.xp6(1),s.hij(" ",W.title," ")}}function O(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,_e,2,1,"ng-container",7),s.qZA(),s.BQk()),2&Z){const W=ge.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",W.title)}}function se(Z,ge){}function V(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,se,0,0,"ng-template",16),s.qZA(),s.BQk()),2&Z){const W=ge.$implicit;s.xp6(1),s.Q6J("colSpan",W.span),s.xp6(1),s.Q6J("ngTemplateOutlet",W.content)}}function pe(Z,ge){if(1&Z&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,O,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,V,3,2,"ng-container",11),s.qZA(),s.BQk()),2&Z){const W=ge.$implicit;s.xp6(2),s.Q6J("ngForOf",W),s.xp6(2),s.Q6J("ngForOf",W)}}function $(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,pe,5,2,"ng-container",11),s.BQk()),2&Z){const W=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",W.itemMatrix)}}function le(Z,ge){if(1&Z&&(s.ynx(0),s.YNc(1,ie,2,1,"ng-container",2),s.YNc(2,$,2,1,"ng-container",2),s.BQk()),2&Z){const W=s.oxw();s.xp6(1),s.Q6J("ngIf",!W.nzBordered),s.xp6(1),s.Q6J("ngIf",W.nzBordered)}}let ne=(()=>{class Z{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new l.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return Z.\u0275fac=function(W){return new(W||Z)},Z.\u0275cmp=s.Xpm({type:Z,selectors:[["nz-descriptions-item"]],viewQuery:function(W,ve){if(1&W&&s.Gf(s.Rgc,7),2&W){let Se;s.iGM(Se=s.CRH())&&(ve.content=Se.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:f,decls:1,vars:0,template:function(W,ve){1&W&&(s.F$t(),s.YNc(0,x,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,I.gn)([(0,a.Rn)()],Z.prototype,"nzSpan",void 0),Z})();const ue={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let re=(()=>{class Z{constructor(W,ve,Se,Ee){this.nzConfigService=W,this.cdr=ve,this.breakpointService=Se,this.directionality=Ee,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ue,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=B.G_.md,this.destroy$=new l.xQ}ngOnInit(){var W;this.dir=this.directionality.value,null===(W=this.directionality.change)||void 0===W||W.pipe((0,z.R)(this.destroy$)).subscribe(ve=>{this.dir=ve})}ngOnChanges(W){W.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const W=this.items.changes.pipe((0,y.O)(this.items),(0,z.R)(this.destroy$));(0,L.T)(W,W.pipe((0,C.w)(()=>(0,L.T)(...this.items.map(ve=>ve.inputChange$)).pipe((0,T.e)(16)))),this.breakpointService.subscribe(B.WV).pipe((0,j.b)(ve=>this.breakpoint=ve))).pipe((0,z.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let W=[],ve=0;const Se=this.realColumn=this.getColumn(),Ee=this.items.toArray(),Le=Ee.length,Ge=[],Be=()=>{Ge.push(W),W=[],ve=0};for(let Fe=0;Fe<Le;Fe++){const Ne=Ee[Fe],{nzTitle:$e,content:Re,nzSpan:be}=Ne;ve+=be,ve>=Se?(ve>Se&&(0,X.ZK)(`"nzColumn" is ${Se} but we have row length ${ve}`),W.push({title:$e,content:Re,span:Se-(ve-be)}),Be()):Fe===Le-1?(W.push({title:$e,content:Re,span:Se-(ve-be)}),Be()):W.push({title:$e,content:Re,span:be})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return Z.\u0275fac=function(W){return new(W||Z)(s.Y36(S.jY),s.Y36(s.sBO),s.Y36(B.r3),s.Y36(e.Is,8))},Z.\u0275cmp=s.Xpm({type:Z,selectors:[["nz-descriptions"]],contentQueries:function(W,ve,Se){if(1&W&&s.Suo(Se,ne,4),2&W){let Ee;s.iGM(Ee=s.CRH())&&(ve.items=Ee)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(W,ve){2&W&&s.ekj("ant-descriptions-bordered",ve.nzBordered)("ant-descriptions-middle","middle"===ve.nzSize)("ant-descriptions-small","small"===ve.nzSize)("ant-descriptions-rtl","rtl"===ve.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(W,ve){1&W&&(s.YNc(0,N,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,ee,2,1,"ng-container",2),s.YNc(5,le,3,2,"ng-container",2),s.qZA()()()),2&W&&(s.Q6J("ngIf",ve.nzTitle||ve.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ve.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ve.nzLayout))},directives:[n.O5,v.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,a.yF)(),(0,S.oS)()],Z.prototype,"nzBordered",void 0),(0,I.gn)([(0,S.oS)()],Z.prototype,"nzColumn",void 0),(0,I.gn)([(0,S.oS)()],Z.prototype,"nzSize",void 0),(0,I.gn)([(0,S.oS)(),(0,a.yF)()],Z.prototype,"nzColon",void 0),Z})(),ze=(()=>{class Z{}return Z.\u0275fac=function(W){return new(W||Z)},Z.\u0275mod=s.oAB({type:Z}),Z.\u0275inj=s.cJS({imports:[[e.vT,n.ez,v.T,o.ud]]}),Z})()},3677:(fe,Y,i)=>{i.d(Y,{RR:()=>ie,b1:()=>_e,cm:()=>he,wA:()=>De});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),v=i(8929),I=i(591),l=i(6787),L=i(3753),a=i(8896),z=i(6053),y=i(7604),C=i(4850),T=i(7545),j=i(2198),S=i(7138),X=i(5778),B=i(7625),x=i(9439),f=i(6950),M=i(1721),R=i(1314),q=i(925),w=i(226),N=i(9808),d=i(3075),b=i(6042),D=i(4832),J=i(969),G=i(5017),h=i(4219),Q=i(8076);function U(V,pe){if(1&V){const $=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(ne){return s.CHM($),s.oxw().onAnimationEvent(ne)})("mouseenter",function(){return s.CHM($),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM($),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&V){const $=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===$.dir),s.Q6J("ngClass",$.nzOverlayClassName)("ngStyle",$.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)("nzNoAnimation",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)}}const F=["*"],de=[f.yW.bottomLeft,f.yW.bottomRight,f.yW.topRight,f.yW.topLeft];let he=(()=>{class V{constructor($,le,ne,te,ue,re){this.nzConfigService=$,this.elementRef=le,this.overlay=ne,this.renderer=te,this.viewContainerRef=ue,this.platform=re,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new v.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new I.X(!1),this.nzTrigger$=new I.X("hover"),this.overlayClose$=new v.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue($,le){this.nzDropdownMenu&&this.nzDropdownMenu.setValue($,le)}ngAfterViewInit(){if(this.nzDropdownMenu){const $=this.elementRef.nativeElement,le=(0,l.T)((0,L.R)($,"mouseenter").pipe((0,y.h)(!0)),(0,L.R)($,"mouseleave").pipe((0,y.h)(!1))),te=(0,l.T)(this.nzDropdownMenu.mouseState$,le),ue=(0,L.R)($,"click").pipe((0,C.U)(()=>!this.nzVisible)),re=this.nzTrigger$.pipe((0,T.w)(W=>"hover"===W?te:"click"===W?ue:a.E)),ze=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,j.h)(()=>this.nzClickHide),(0,y.h)(!1)),Z=(0,l.T)(re,ze,this.overlayClose$).pipe((0,j.h)(()=>!this.nzDisabled)),ge=(0,l.T)(this.inputVisible$,Z);(0,z.aj)([ge,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,C.U)(([W,ve])=>W||ve),(0,S.e)(150),(0,X.x)(),(0,j.h)(()=>this.platform.isBrowser),(0,B.R)(this.destroy$)).subscribe(W=>{const Se=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:$).getBoundingClientRect().width;this.nzVisible!==W&&this.nzVisibleChange.emit(W),this.nzVisible=W,W?(this.overlayRef?this.overlayRef.getConfig().minWidth=Se:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Se,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,l.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,j.h)(Ee=>!this.elementRef.nativeElement.contains(Ee.target))),this.overlayRef.keydownEvents().pipe((0,j.h)(Ee=>Ee.keyCode===o.hY&&!(0,o.Vb)(Ee)))).pipe((0,B.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([f.yW[this.nzPlacement],...de]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,B.R)(this.destroy$)).subscribe(W=>{"void"===W.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges($){const{nzVisible:le,nzDisabled:ne,nzOverlayClassName:te,nzOverlayStyle:ue,nzTrigger:re}=$;if(re&&this.nzTrigger$.next(this.nzTrigger),le&&this.inputVisible$.next(this.nzVisible),ne){const ze=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(ze,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(ze,"disabled")}te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),ue&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return V.\u0275fac=function($){return new($||V)(s.Y36(x.jY),s.Y36(s.SBq),s.Y36(R.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(q.t4))},V.\u0275dir=s.lG2({type:V,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,x.oS)(),(0,M.yF)()],V.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],V.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],V.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],V.prototype,"nzVisible",void 0),V})(),Te=(()=>{class V{}return V.\u0275fac=function($){return new($||V)},V.\u0275mod=s.oAB({type:V}),V.\u0275inj=s.cJS({}),V})(),De=(()=>{class V{constructor($,le,ne){this.renderer=$,this.nzButtonGroupComponent=le,this.elementRef=ne}ngAfterViewInit(){const $=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&$&&this.renderer.addClass($,"ant-dropdown-button")}}return V.\u0275fac=function($){return new($||V)(s.Y36(s.Qsj),s.Y36(b.fY,9),s.Y36(s.SBq))},V.\u0275dir=s.lG2({type:V,selectors:[["","nz-button","","nz-dropdown",""]]}),V})(),ie=(()=>{class V{constructor($,le,ne,te,ue,re,ze){this.cdr=$,this.elementRef=le,this.renderer=ne,this.viewContainerRef=te,this.nzMenuService=ue,this.directionality=re,this.noAnimation=ze,this.mouseState$=new I.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new v.xQ}onAnimationEvent($){this.animationStateChange$.emit($)}setMouseState($){this.mouseState$.next($)}setValue($,le){this[$]=le,this.cdr.markForCheck()}ngOnInit(){var $;null===($=this.directionality.change)||void 0===$||$.pipe((0,B.R)(this.destroy$)).subscribe(le=>{this.dir=le,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function($){return new($||V)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(h.hl),s.Y36(w.Is,8),s.Y36(D.P,9))},V.\u0275cmp=s.Xpm({type:V,selectors:[["nz-dropdown-menu"]],viewQuery:function($,le){if(1&$&&s.Gf(s.Rgc,7),2&$){let ne;s.iGM(ne=s.CRH())&&(le.templateRef=ne.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([h.hl,{provide:h.Cc,useValue:!0}])],ngContentSelectors:F,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function($,le){1&$&&(s.F$t(),s.YNc(0,U,2,7,"ng-template"))},directives:[N.mk,N.PC,D.P],encapsulation:2,data:{animation:[Q.mF]},changeDetection:0}),V})(),_e=(()=>{class V{}return V.\u0275fac=function($){return new($||V)},V.\u0275mod=s.oAB({type:V}),V.\u0275inj=s.cJS({imports:[[w.vT,N.ez,R.U8,d.u5,b.sL,h.ip,G.PV,D.g,q.ud,f.e4,Te,J.T],h.ip]}),V})();new R.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new R.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new R.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new R.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(fe,Y,i)=>{i.d(Y,{AA:()=>tt,I2:()=>je,IO:()=>ce,Ph:()=>it,n_:()=>Xe,t4:()=>Ke,yi:()=>Qe,yw:()=>Pe});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),v=i(655),I=i(1721),l=i(8929),L=i(8514),a=i(1086),z=i(6787),y=i(2916),C=i(591),T=i(2986),j=i(7545),S=i(7625),X=i(4090),B=i(685),x=i(226),f=i(7525),M=i(1894);const R=["*"];function q(_,H){if(1&_&&e._UZ(0,"nz-avatar",3),2&_){const A=e.oxw();e.Q6J("nzSrc",A.nzSrc)}}function w(_,H){1&_&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function N(_,H){if(1&_&&e._UZ(0,"nz-list-item-meta-avatar",3),2&_){const A=e.oxw();e.Q6J("nzSrc",A.avatarStr)}}function d(_,H){if(1&_&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.avatarTpl)}}function b(_,H){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzTitle)}}function D(_,H){if(1&_&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,b,2,1,"ng-container",6),e.qZA()),2&_){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzTitle)}}function J(_,H){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzDescription)}}function G(_,H){if(1&_&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,J,2,1,"ng-container",6),e.qZA()),2&_){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzDescription)}}function h(_,H){if(1&_&&(e.TgZ(0,"div",5),e.YNc(1,D,2,1,"nz-list-item-meta-title",1),e.YNc(2,G,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("ngIf",A.nzTitle&&!A.titleComponent),e.xp6(1),e.Q6J("ngIf",A.nzDescription&&!A.descriptionComponent)}}const Q=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],U=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function F(_,H){1&_&&e.Hsn(0)}const ee=["nz-list-item-actions",""];function de(_,H){}function he(_,H){1&_&&e._UZ(0,"em",3)}function Te(_,H){if(1&_&&(e.TgZ(0,"li"),e.YNc(1,de,0,0,"ng-template",1),e.YNc(2,he,1,0,"em",2),e.qZA()),2&_){const A=H.$implicit,ae=H.last;e.xp6(1),e.Q6J("ngTemplateOutlet",A),e.xp6(1),e.Q6J("ngIf",!ae)}}function Me(_,H){}const De=function(_,H){return{$implicit:_,index:H}};function ie(_,H){if(1&_&&(e.ynx(0),e.YNc(1,Me,0,0,"ng-template",9),e.BQk()),2&_){const A=H.$implicit,ae=H.index,Ie=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,De,A,ae))}}function _e(_,H){if(1&_&&(e.TgZ(0,"div",7),e.YNc(1,ie,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function O(_,H){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzHeader)}}function se(_,H){if(1&_&&(e.TgZ(0,"nz-list-header"),e.YNc(1,O,2,1,"ng-container",10),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzHeader)}}function V(_,H){1&_&&e._UZ(0,"div"),2&_&&e.Udp("min-height",53,"px")}function pe(_,H){}function $(_,H){if(1&_&&(e.TgZ(0,"div",13),e.YNc(1,pe,0,0,"ng-template",9),e.qZA()),2&_){const A=H.$implicit,ae=H.index,Ie=e.oxw(2);e.Q6J("nzSpan",Ie.nzGrid.span||null)("nzXs",Ie.nzGrid.xs||null)("nzSm",Ie.nzGrid.sm||null)("nzMd",Ie.nzGrid.md||null)("nzLg",Ie.nzGrid.lg||null)("nzXl",Ie.nzGrid.xl||null)("nzXXl",Ie.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,De,A,ae))}}function le(_,H){if(1&_&&(e.TgZ(0,"div",11),e.YNc(1,$,2,12,"div",12),e.qZA()),2&_){const A=e.oxw();e.Q6J("nzGutter",A.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function ne(_,H){if(1&_&&e._UZ(0,"nz-list-empty",14),2&_){const A=e.oxw();e.Q6J("nzNoResult",A.nzNoResult)}}function te(_,H){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzFooter)}}function ue(_,H){if(1&_&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,te,2,1,"ng-container",10),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzFooter)}}function re(_,H){}function ze(_,H){}function Z(_,H){if(1&_&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,ze,0,0,"ng-template",6),e.qZA()),2&_){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzPagination)}}const ge=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],W=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ve(_,H){if(1&_&&e._UZ(0,"ul",6),2&_){const A=e.oxw(2);e.Q6J("nzActions",A.nzActions)}}function Se(_,H){if(1&_&&(e.YNc(0,ve,1,1,"ul",5),e.Hsn(1)),2&_){const A=e.oxw();e.Q6J("ngIf",A.nzActions&&A.nzActions.length>0)}}function Ee(_,H){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzContent)}}function Le(_,H){if(1&_&&(e.ynx(0),e.YNc(1,Ee,2,1,"ng-container",8),e.BQk()),2&_){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzContent)}}function Ge(_,H){if(1&_&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,Le,2,1,"ng-container",7)),2&_){const A=e.oxw();e.xp6(2),e.Q6J("ngIf",A.nzContent)}}function Be(_,H){1&_&&e.Hsn(0,3)}function Fe(_,H){}function Ne(_,H){}function $e(_,H){}function Re(_,H){}function be(_,H){if(1&_&&(e.YNc(0,Fe,0,0,"ng-template",9),e.YNc(1,Ne,0,0,"ng-template",9),e.YNc(2,$e,0,0,"ng-template",9),e.YNc(3,Re,0,0,"ng-template",9)),2&_){const A=e.oxw(),ae=e.MAs(3),Ie=e.MAs(5),Oe=e.MAs(1);e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}function Ve(_,H){}function Ze(_,H){}function Ye(_,H){}function oe(_,H){if(1&_&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,Ye,0,0,"ng-template",9),e.qZA()),2&_){const A=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra)}}function P(_,H){}function K(_,H){if(1&_&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ve,0,0,"ng-template",9),e.YNc(3,Ze,0,0,"ng-template",9),e.qZA(),e.YNc(4,oe,2,1,"nz-list-item-extra",7),e.YNc(5,P,0,0,"ng-template",9),e.BQk()),2&_){const A=e.oxw(),ae=e.MAs(3),Ie=e.MAs(1),Oe=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngIf",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}const p=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ce=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(A,ae){1&A&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),_})(),Ce=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(A,ae){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),_})(),Ae=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:R,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(A,ae){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,q,1,1,"nz-avatar",1),e.YNc(2,w,1,0,"ng-content",2),e.qZA()),2&A&&(e.xp6(1),e.Q6J("ngIf",ae.nzSrc),e.xp6(1),e.Q6J("ngIf",!ae.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),_})(),Qe=(()=>{class _{constructor(A,ae){this.elementRef=A,this.renderer=ae,this.avatarStr="",this.renderer.addClass(A.nativeElement,"ant-list-item-meta")}set nzAvatar(A){A instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=A):this.avatarStr=A}}return _.\u0275fac=function(A){return new(A||_)(e.Y36(e.SBq),e.Y36(e.Qsj))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(A,ae,Ie){if(1&A&&(e.Suo(Ie,Ce,5),e.Suo(Ie,ce,5)),2&A){let Oe;e.iGM(Oe=e.CRH())&&(ae.descriptionComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.titleComponent=Oe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:U,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(A,ae){1&A&&(e.F$t(Q),e.YNc(0,N,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,d,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,h,5,2,"div",2)),2&A&&(e.Q6J("ngIf",ae.avatarStr),e.xp6(1),e.Q6J("ngIf",ae.avatarTpl),e.xp6(2),e.Q6J("ngIf",ae.nzTitle||ae.nzDescription||ae.descriptionComponent||ae.titleComponent))},directives:[Ae,ce,Ce,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),_})(),Pe=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:R,decls:1,vars:0,template:function(A,ae){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),we=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item-action"]],viewQuery:function(A,ae){if(1&A&&e.Gf(e.Rgc,5),2&A){let Ie;e.iGM(Ie=e.CRH())&&(ae.templateRef=Ie.first)}},exportAs:["nzListItemAction"],ngContentSelectors:R,decls:1,vars:0,template:function(A,ae){1&A&&(e.F$t(),e.YNc(0,F,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),_})(),Je=(()=>{class _{constructor(A,ae,Ie){this.ngZone=A,this.nzActions=[],this.actions=[],this.inputActionChanges$=new l.xQ,this.contentChildrenChanges$=(0,L.P)(()=>this.nzListItemActions?(0,a.of)(null):this.ngZone.onStable.pipe((0,T.q)(1),this.enterZone(),(0,j.w)(()=>this.contentChildrenChanges$))),(0,z.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,S.R)(Ie)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Oe=>Oe.templateRef),ae.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return A=>new y.y(ae=>A.subscribe({next:Ie=>this.ngZone.run(()=>ae.next(Ie))}))}}return _.\u0275fac=function(A){return new(A||_)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(X.kn))},_.\u0275cmp=e.Xpm({type:_,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(A,ae,Ie){if(1&A&&e.Suo(Ie,we,4),2&A){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListItemActions=Oe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([X.kn]),e.TTD],attrs:ee,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(A,ae){1&A&&e.YNc(0,Te,3,2,"li",0),2&A&&e.Q6J("ngForOf",ae.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),_})(),je=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(A,ae){1&A&&e._UZ(0,"nz-embed-empty",0),2&A&&e.Q6J("nzComponentName","list")("specificContent",ae.nzNoResult)},directives:[B.gB],encapsulation:2,changeDetection:0}),_})(),Ke=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(A,ae){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),He=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:R,decls:1,vars:0,template:function(A,ae){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),ke=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:R,decls:1,vars:0,template:function(A,ae){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),_})(),et=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275dir=e.lG2({type:_,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),_})(),Xe=(()=>{class _{constructor(A){this.directionality=A,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new C.X(this.nzItemLayout),this.destroy$=new l.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var A;this.dir=this.directionality.value,null===(A=this.directionality.change)||void 0===A||A.pipe((0,S.R)(this.destroy$)).subscribe(ae=>{this.dir=ae})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(A){A.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return _.\u0275fac=function(A){return new(A||_)(e.Y36(x.Is,8))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(A,ae,Ie){if(1&A&&(e.Suo(Ie,He,5),e.Suo(Ie,ke,5),e.Suo(Ie,et,5)),2&A){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListFooterComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListPaginationComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListLoadMoreDirective=Oe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(A,ae){2&A&&e.ekj("ant-list-rtl","rtl"===ae.dir)("ant-list-vertical","vertical"===ae.nzItemLayout)("ant-list-lg","large"===ae.nzSize)("ant-list-sm","small"===ae.nzSize)("ant-list-split",ae.nzSplit)("ant-list-bordered",ae.nzBordered)("ant-list-loading",ae.nzLoading)("ant-list-something-after-last-item",ae.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:W,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(A,ae){if(1&A&&(e.F$t(ge),e.YNc(0,_e,3,1,"ng-template",null,0,e.W1O),e.YNc(2,se,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,V,1,2,"div",3),e.YNc(7,le,2,2,"div",4),e.YNc(8,ne,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,ue,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,re,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,Z,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&A){const Ie=e.MAs(1);e.xp6(2),e.Q6J("ngIf",ae.nzHeader),e.xp6(2),e.Q6J("nzSpinning",ae.nzLoading),e.xp6(2),e.Q6J("ngIf",ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzGrid&&ae.nzDataSource)("ngIfElse",Ie),e.xp6(1),e.Q6J("ngIf",!ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",ae.nzLoadMore),e.xp6(2),e.Q6J("ngIf",ae.nzPagination)}},directives:[Ke,f.W,je,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,v.gn)([(0,I.yF)()],_.prototype,"nzBordered",void 0),(0,v.gn)([(0,I.yF)()],_.prototype,"nzLoading",void 0),(0,v.gn)([(0,I.yF)()],_.prototype,"nzSplit",void 0),_})(),tt=(()=>{class _{constructor(A,ae,Ie,Oe){this.parentComp=Ie,this.cdr=Oe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ae.addClass(A.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(A=>{this.itemLayout=A,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return _.\u0275fac=function(A){return new(A||_)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},_.\u0275cmp=e.Xpm({type:_,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(A,ae,Ie){if(1&A&&e.Suo(Ie,Pe,5),2&A){let Oe;e.iGM(Oe=e.CRH())&&(ae.listItemExtraDirective=Oe.first)}},hostVars:2,hostBindings:function(A,ae){2&A&&e.ekj("ant-list-item-no-flex",ae.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(A,ae){if(1&A&&(e.F$t(p),e.YNc(0,Se,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Ge,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,be,4,4,"ng-template",null,3,e.W1O),e.YNc(8,K,6,4,"ng-container",4)),2&A){const Ie=e.MAs(7);e.xp6(8),e.Q6J("ngIf",ae.isVerticalAndExtra)("ngIfElse",Ie)}},directives:[Je,Pe,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,v.gn)([(0,I.yF)()],_.prototype,"nzNoFlex",void 0),_})(),it=(()=>{class _{}return _.\u0275fac=function(A){return new(A||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[[x.vT,n.ez,f.j,M.Jb,o.Rt,s.T,B.Xo]]}),_})()},4219:(fe,Y,i)=>{i.d(Y,{Cc:()=>Z,YV:()=>Ye,hl:()=>W,ip:()=>oe,r9:()=>Se,uA:()=>Ze,wO:()=>be});var e=i(655),o=i(5e3),n=i(8929),s=i(591),v=i(6787),I=i(6053),l=i(4850),L=i(1709),a=i(2198),z=i(7604),y=i(7138),C=i(5778),T=i(7625),j=i(1059),S=i(7545),X=i(1721),B=i(325),x=i(226),f=i(1314),M=i(6950),R=i(925),q=i(4832),w=i(9808),N=i(5017),d=i(969),b=i(8076);const D=["nz-submenu-title",""];function J(P,K){if(1&P&&o._UZ(0,"i",4),2&P){const p=o.oxw();o.Q6J("nzType",p.nzIcon)}}function G(P,K){if(1&P&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&P){const p=o.oxw();o.xp6(2),o.Oqu(p.nzTitle)}}function h(P,K){1&P&&o._UZ(0,"i",8)}function Q(P,K){1&P&&o._UZ(0,"i",9)}function U(P,K){if(1&P&&(o.TgZ(0,"span",5),o.YNc(1,h,1,0,"i",6),o.YNc(2,Q,1,0,"i",7),o.qZA()),2&P){const p=o.oxw();o.Q6J("ngSwitch",p.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function F(P,K){1&P&&o._UZ(0,"i",10)}const ee=["*"],de=["nz-submenu-inline-child",""];function he(P,K){}const Te=["nz-submenu-none-inline-child",""];function Me(P,K){}const De=["nz-submenu",""];function ie(P,K){1&P&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function _e(P,K){if(1&P&&o._UZ(0,"div",6),2&P){const p=o.oxw(),m=o.MAs(7);o.Q6J("mode",p.mode)("nzOpen",p.nzOpen)("@.disabled",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("nzNoAnimation",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("menuClass",p.nzMenuClassName)("templateOutlet",m)}}function O(P,K){if(1&P){const p=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(ce){return o.CHM(p),o.oxw(2).setMouseEnterState(ce)}),o.qZA()}if(2&P){const p=o.oxw(2),m=o.MAs(7);o.Q6J("theme",p.theme)("mode",p.mode)("nzOpen",p.nzOpen)("position",p.position)("nzDisabled",p.nzDisabled)("isMenuInsideDropDown",p.isMenuInsideDropDown)("templateOutlet",m)("menuClass",p.nzMenuClassName)("@.disabled",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("nzNoAnimation",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)}}function se(P,K){if(1&P){const p=o.EpF();o.YNc(0,O,1,10,"ng-template",7),o.NdJ("positionChange",function(ce){return o.CHM(p),o.oxw().onPositionChange(ce)})}if(2&P){const p=o.oxw(),m=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",p.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",p.triggerWidth)("cdkConnectedOverlayOpen",p.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function V(P,K){1&P&&o.Hsn(0,1)}const pe=[[["","title",""]],"*"],$=["[title]","*"],le=["titleElement"],ne=["nz-menu-group",""];function te(P,K){if(1&P&&(o.ynx(0),o._uU(1),o.BQk()),2&P){const p=o.oxw();o.xp6(1),o.Oqu(p.nzTitle)}}function ue(P,K){1&P&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const re=["*",[["","title",""]]],ze=["*","[title]"],Z=new o.OlP("NzIsInDropDownMenuToken"),ge=new o.OlP("NzMenuServiceLocalToken");let W=(()=>{class P{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(p){this.descendantMenuItemClick$.next(p)}onChildMenuItemClick(p){this.childMenuItemClick$.next(p)}setMode(p){this.mode$.next(p)}setTheme(p){this.theme$.next(p)}setInlineIndent(p){this.inlineIndent$.next(p)}}return P.\u0275fac=function(p){return new(p||P)},P.\u0275prov=o.Yz7({token:P,factory:P.\u0275fac}),P})(),ve=(()=>{class P{constructor(p,m,ce){this.nzHostSubmenuService=p,this.nzMenuService=m,this.isMenuInsideDropDown=ce,this.mode$=this.nzMenuService.mode$.pipe((0,l.U)(Pe=>"inline"===Pe?"inline":"vertical"===Pe||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ce=this.childMenuItemClick$.pipe((0,L.zg)(()=>this.mode$),(0,a.h)(Pe=>"inline"!==Pe||this.isMenuInsideDropDown),(0,z.h)(!1)),Ae=(0,v.T)(this.isMouseEnterTitleOrOverlay$,Ce);(0,I.aj)([this.isChildSubMenuOpen$,Ae]).pipe((0,l.U)(([Pe,we])=>Pe||we),(0,y.e)(150),(0,C.x)(),(0,T.R)(this.destroy$)).pipe((0,C.x)()).subscribe(Pe=>{this.setOpenStateWithoutDebounce(Pe),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Pe):this.nzMenuService.isChildSubMenuOpen$.next(Pe)})}onChildMenuItemClick(p){this.childMenuItemClick$.next(p)}setOpenStateWithoutDebounce(p){this.isCurrentSubMenuOpen$.next(p)}setMouseEnterTitleOrOverlayState(p){this.isMouseEnterTitleOrOverlay$.next(p)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(p){return new(p||P)(o.LFG(P,12),o.LFG(W),o.LFG(Z))},P.\u0275prov=o.Yz7({token:P,factory:P.\u0275fac}),P})(),Se=(()=>{class P{constructor(p,m,ce,Ce,Ae,Qe,Pe,we){this.nzMenuService=p,this.cdr=m,this.nzSubmenuService=ce,this.isMenuInsideDropDown=Ce,this.directionality=Ae,this.routerLink=Qe,this.routerLinkWithHref=Pe,this.router=we,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,we&&this.router.events.pipe((0,T.R)(this.destroy$),(0,a.h)(Je=>Je instanceof B.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(p){this.nzDisabled?(p.preventDefault(),p.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(p){this.nzSelected=p,this.selected$.next(p)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const p=this.hasActiveLinks();this.nzSelected!==p&&(this.nzSelected=p,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const p=this.isLinkActive(this.router);return this.routerLink&&p(this.routerLink)||this.routerLinkWithHref&&p(this.routerLinkWithHref)||this.listOfRouterLink.some(p)||this.listOfRouterLinkWithHref.some(p)}isLinkActive(p){return m=>p.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var p;(0,I.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ce])=>{this.inlinePaddingLeft="inline"===m?this.level*ce:null}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(p){p.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(W),o.Y36(o.sBO),o.Y36(ve,8),o.Y36(Z),o.Y36(x.Is,8),o.Y36(B.rH,8),o.Y36(B.yS,8),o.Y36(B.F0,8))},P.\u0275dir=o.lG2({type:P,selectors:[["","nz-menu-item",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,B.rH,5),o.Suo(ce,B.yS,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfRouterLink=Ce),o.iGM(Ce=o.CRH())&&(m.listOfRouterLinkWithHref=Ce)}},hostVars:20,hostBindings:function(p,m){1&p&&o.NdJ("click",function(Ce){return m.clickMenuItem(Ce)}),2&p&&(o.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,X.yF)()],P.prototype,"nzDisabled",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzSelected",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzDanger",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzMatchRouter",void 0),P})(),Ee=(()=>{class P{constructor(p,m){this.cdr=p,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(p){this.nzDisabled||this.subMenuMouseState.next(p)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(o.sBO),o.Y36(x.Is,8))},P.\u0275cmp=o.Xpm({type:P,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(p,m){1&p&&o.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&p&&(o.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:D,ngContentSelectors:ee,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(p,m){if(1&p&&(o.F$t(),o.YNc(0,J,1,1,"i",0),o.YNc(1,G,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,U,3,2,"span",2),o.YNc(4,F,1,0,"ng-template",null,3,o.W1O)),2&p){const ce=o.MAs(5);o.Q6J("ngIf",m.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(2),o.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ce)}},directives:[w.O5,N.Ls,d.f,w.RF,w.n9,w.ED],encapsulation:2,changeDetection:0}),P})(),Le=(()=>{class P{constructor(p,m,ce){this.elementRef=p,this.renderer=m,this.directionality=ce,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var p;this.calcMotionState(),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(p){const{mode:m,nzOpen:ce,menuClass:Ce}=p;(m||ce)&&this.calcMotionState(),Ce&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Ae=>!!Ae).forEach(Ae=>{this.renderer.removeClass(this.elementRef.nativeElement,Ae)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Ae=>!!Ae).forEach(Ae=>{this.renderer.addClass(this.elementRef.nativeElement,Ae)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(x.Is,8))},P.\u0275cmp=o.Xpm({type:P,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(p,m){2&p&&(o.d8E("@collapseMotion",m.expandState),o.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:de,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(p,m){1&p&&o.YNc(0,he,0,0,"ng-template",0),2&p&&o.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[w.tP],encapsulation:2,data:{animation:[b.J_]},changeDetection:0}),P})(),Ge=(()=>{class P{constructor(p){this.directionality=p,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(p){this.nzDisabled||this.subMenuMouseState.next(p)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var p;this.calcMotionState(),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(p){const{mode:m,nzOpen:ce}=p;(m||ce)&&this.calcMotionState()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(x.Is,8))},P.\u0275cmp=o.Xpm({type:P,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(p,m){1&p&&o.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&p&&(o.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),o.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:Te,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(p,m){1&p&&(o.TgZ(0,"div",0),o.YNc(1,Me,0,0,"ng-template",1),o.qZA()),2&p&&(o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),o.Q6J("ngClass",m.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[w.mk,w.tP],encapsulation:2,data:{animation:[b.$C,b.mF]},changeDetection:0}),P})();const Be=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],Fe=[M.yW.bottomLeft];let Ne=(()=>{class P{constructor(p,m,ce,Ce,Ae,Qe,Pe){this.nzMenuService=p,this.cdr=m,this.nzSubmenuService=ce,this.platform=Ce,this.isMenuInsideDropDown=Ae,this.directionality=Qe,this.noAnimation=Pe,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(p){this.nzSubmenuService.setOpenStateWithoutDebounce(p)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(p){this.isActive=p,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(p)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(p){const m=(0,M.d_)(p);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var p;this.nzMenuService.theme$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Fe:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,I.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ce])=>{this.inlinePaddingLeft="inline"===m?this.level*ce:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const p=this.listOfNzMenuItemDirective,m=p.changes,ce=(0,v.T)(m,...p.map(Ce=>Ce.selected$));m.pipe((0,j.O)(p),(0,S.w)(()=>ce),(0,j.O)(!0),(0,l.U)(()=>p.some(Ce=>Ce.nzSelected)),(0,T.R)(this.destroy$)).subscribe(Ce=>{this.isSelected=Ce,this.cdr.markForCheck()})}ngOnChanges(p){const{nzOpen:m}=p;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(W),o.Y36(o.sBO),o.Y36(ve),o.Y36(R.t4),o.Y36(Z),o.Y36(x.Is,8),o.Y36(q.P,9))},P.\u0275cmp=o.Xpm({type:P,selectors:[["","nz-submenu",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,P,5),o.Suo(ce,Se,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce)}},viewQuery:function(p,m){if(1&p&&o.Gf(f.xu,7,o.SBq),2&p){let ce;o.iGM(ce=o.CRH())&&(m.cdkOverlayOrigin=ce.first)}},hostVars:34,hostBindings:function(p,m){2&p&&o.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([ve]),o.TTD],attrs:De,ngContentSelectors:$,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(p,m){if(1&p&&(o.F$t(pe),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Ce){return m.setMouseEnterState(Ce)})("toggleSubMenu",function(){return m.toggleSubMenu()}),o.YNc(2,ie,1,0,"ng-content",2),o.qZA(),o.YNc(3,_e,1,6,"div",3),o.YNc(4,se,1,5,"ng-template",null,4,o.W1O),o.YNc(6,V,1,0,"ng-template",null,5,o.W1O)),2&p){const ce=o.MAs(5);o.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!m.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===m.mode)("ngIfElse",ce)}},directives:[Ee,Le,Ge,f.xu,w.O5,q.P,f.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,X.yF)()],P.prototype,"nzOpen",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzDisabled",void 0),P})();function $e(P,K){return P||K}function Re(P){return P||!1}let be=(()=>{class P{constructor(p,m,ce,Ce){this.nzMenuService=p,this.isMenuInsideDropDown=m,this.cdr=ce,this.directionality=Ce,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(p){this.nzInlineCollapsed=p,this.inlineCollapsed$.next(p)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(p=>p.nzOpen),this.listOfNzSubMenuComponent.forEach(p=>p.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(p=>p.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var p;(0,I.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ce])=>{this.actualMode=m?"vertical":ce,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ce=>ce.setSelectedState(ce===m))}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(p){const{nzInlineCollapsed:m,nzInlineIndent:ce,nzTheme:Ce,nzMode:Ae}=p;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ce&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ce&&this.nzMenuService.setTheme(this.nzTheme),Ae&&(this.mode$.next(this.nzMode),!p.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Qe=>Qe.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(W),o.Y36(Z),o.Y36(o.sBO),o.Y36(x.Is,8))},P.\u0275dir=o.lG2({type:P,selectors:[["","nz-menu",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,Se,5),o.Suo(ce,Ne,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce)}},hostVars:34,hostBindings:function(p,m){2&p&&o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:ge,useClass:W},{provide:W,useFactory:$e,deps:[[new o.tp0,new o.FiY,W],ge]},{provide:Z,useFactory:Re,deps:[[new o.tp0,new o.FiY,Z]]}]),o.TTD]}),(0,e.gn)([(0,X.yF)()],P.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,X.yF)()],P.prototype,"nzSelectable",void 0),P})();function Ve(P){return P||!1}let Ze=(()=>{class P{constructor(p,m,ce){this.elementRef=p,this.renderer=m,this.isMenuInsideDropDown=ce,this.renderer.addClass(p.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const p=this.titleElement.nativeElement.nextElementSibling;p&&this.renderer.addClass(p,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(Z))},P.\u0275cmp=o.Xpm({type:P,selectors:[["","nz-menu-group",""]],viewQuery:function(p,m){if(1&p&&o.Gf(le,5),2&p){let ce;o.iGM(ce=o.CRH())&&(m.titleElement=ce.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:Z,useFactory:Ve,deps:[[new o.tp0,new o.FiY,Z]]}])],attrs:ne,ngContentSelectors:ze,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(p,m){1&p&&(o.F$t(re),o.TgZ(0,"div",null,0),o.YNc(2,te,2,1,"ng-container",1),o.YNc(3,ue,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&p&&(o.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(1),o.Q6J("ngIf",!m.nzTitle))},directives:[d.f,w.O5],encapsulation:2,changeDetection:0}),P})(),Ye=(()=>{class P{constructor(p,m){this.elementRef=p,this.renderer=m,this.renderer.addClass(p.nativeElement,"ant-dropdown-menu-item-divider")}}return P.\u0275fac=function(p){return new(p||P)(o.Y36(o.SBq),o.Y36(o.Qsj))},P.\u0275dir=o.lG2({type:P,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),P})(),oe=(()=>{class P{}return P.\u0275fac=function(p){return new(p||P)},P.\u0275mod=o.oAB({type:P}),P.\u0275inj=o.cJS({imports:[[x.vT,w.ez,R.ud,f.U8,N.PV,q.g,d.T]]}),P})()},3610:(fe,Y,i)=>{i.d(Y,{$6:()=>M,lU:()=>x});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),v=i(1721),I=i(404),l=i(4832),L=i(226),a=i(1314),z=i(6950),y=i(9808),C=i(969);function T(R,q){if(1&R&&(o.ynx(0),o._uU(1),o.BQk()),2&R){const w=o.oxw(3);o.xp6(1),o.Oqu(w.nzTitle)}}function j(R,q){if(1&R&&(o.TgZ(0,"div",10),o.YNc(1,T,2,1,"ng-container",9),o.qZA()),2&R){const w=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",w.nzTitle)}}function S(R,q){if(1&R&&(o.ynx(0),o._uU(1),o.BQk()),2&R){const w=o.oxw(2);o.xp6(1),o.Oqu(w.nzContent)}}function X(R,q){if(1&R&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,j,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,S,2,1,"ng-container",9),o.qZA()()()()()),2&R){const w=o.oxw();o.ekj("ant-popover-rtl","rtl"===w.dir),o.Q6J("ngClass",w._classMap)("ngStyle",w.nzOverlayStyle)("@.disabled",null==w.noAnimation?null:w.noAnimation.nzNoAnimation)("nzNoAnimation",null==w.noAnimation?null:w.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",w.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",w.nzContent)}}let x=(()=>{class R extends I.Mg{constructor(w,N,d,b,D,J){super(w,N,d,b,D,J),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(f)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return R.\u0275fac=function(w){return new(w||R)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(l.P,9),o.Y36(s.jY))},R.\u0275dir=o.lG2({type:R,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(w,N){2&w&&o.ekj("ant-popover-open",N.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,v.yF)()],R.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],R.prototype,"nzPopoverBackdrop",void 0),R})(),f=(()=>{class R extends I.XK{constructor(w,N,d){super(w,N,d),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,I.pu)(this.nzTitle)&&(0,I.pu)(this.nzContent)}}return R.\u0275fac=function(w){return new(w||R)(o.Y36(o.sBO),o.Y36(L.Is,8),o.Y36(l.P,9))},R.\u0275cmp=o.Xpm({type:R,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(w,N){1&w&&(o.YNc(0,X,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function(b){return N.onClickOutside(b)})("detach",function(){return N.hide()})("positionChange",function(b){return N.onPositionChange(b)})),2&w&&o.Q6J("cdkConnectedOverlayHasBackdrop",N.hasBackdrop)("cdkConnectedOverlayOrigin",N.origin)("cdkConnectedOverlayPositions",N._positions)("cdkConnectedOverlayOpen",N._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",N.nzArrowPointAtCenter)},directives:[a.pI,z.hQ,y.mk,y.PC,l.P,y.O5,C.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),R})(),M=(()=>{class R{}return R.\u0275fac=function(w){return new(w||R)},R.\u0275mod=o.oAB({type:R}),R.\u0275inj=o.cJS({imports:[[L.vT,y.ez,a.U8,C.T,z.e4,l.g,I.cg]]}),R})()},8144:(fe,Y,i)=>{i.d(Y,{$1:()=>j,NU:()=>B,zf:()=>x});var e=i(226),o=i(9808),n=i(5e3),s=i(655),v=i(8929),I=i(7625),l=i(9439),L=i(1721);function a(f,M){}const z=function(f){return{$implicit:f}};function y(f,M){if(1&f&&(n.TgZ(0,"span",4),n.YNc(1,a,0,0,"ng-template",5),n.qZA()),2&f){const R=n.oxw(),q=R.last,w=R.index,N=n.oxw();n.Udp("margin-bottom","vertical"===N.nzDirection?q?null:N.spaceSize:null,"px")("margin-right","horizontal"===N.nzDirection?q?null:N.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",N.nzSplit)("ngTemplateOutletContext",n.VKq(6,z,w))}}function C(f,M){if(1&f&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,y,2,8,"span",3)),2&f){const R=M.$implicit,q=M.last,w=n.oxw();n.Udp("margin-bottom","vertical"===w.nzDirection?q?null:w.spaceSize:null,"px")("margin-right","horizontal"===w.nzDirection?q?null:w.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",R),n.xp6(1),n.Q6J("ngIf",w.nzSplit&&!q)}}const T=["*"];let j=(()=>{class f{constructor(){}}return f.\u0275fac=function(R){return new(R||f)},f.\u0275dir=n.lG2({type:f,selectors:[["","nzSpaceItem",""]]}),f})();const X={small:8,middle:16,large:24};let B=(()=>{class f{constructor(R,q){this.nzConfigService=R,this.cdr=q,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=X.small,this.destroy$=new v.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?X[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return f.\u0275fac=function(R){return new(R||f)(n.Y36(l.jY),n.Y36(n.sBO))},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(R,q,w){if(1&R&&n.Suo(w,j,4,n.Rgc),2&R){let N;n.iGM(N=n.CRH())&&(q.items=N)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(R,q){2&R&&(n.Udp("flex-wrap",q.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===q.nzDirection)("ant-space-vertical","vertical"===q.nzDirection)("ant-space-align-start","start"===q.mergedAlign)("ant-space-align-end","end"===q.mergedAlign)("ant-space-align-center","center"===q.mergedAlign)("ant-space-align-baseline","baseline"===q.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(R,q){1&R&&(n.F$t(),n.Hsn(0),n.YNc(1,C,3,6,"ng-template",0)),2&R&&(n.xp6(1),n.Q6J("ngForOf",q.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,L.yF)()],f.prototype,"nzWrap",void 0),(0,s.gn)([(0,l.oS)()],f.prototype,"nzSize",void 0),f})(),x=(()=>{class f{}return f.\u0275fac=function(R){return new(R||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),f})()},7525:(fe,Y,i)=>{i.d(Y,{W:()=>D,j:()=>J});var e=i(655),o=i(5e3),n=i(8929),s=i(591),v=i(839),I=i(8723),l=i(1177);class a{constructor(h){this.durationSelector=h}call(h,Q){return Q.subscribe(new z(h,this.durationSelector))}}class z extends l.Ds{constructor(h,Q){super(h),this.durationSelector=Q,this.hasValue=!1}_next(h){try{const Q=this.durationSelector.call(this,h);Q&&this._tryNext(h,Q)}catch(Q){this.destination.error(Q)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(h,Q){let U=this.durationSubscription;this.value=h,this.hasValue=!0,U&&(U.unsubscribe(),this.remove(U)),U=(0,l.ft)(Q,new l.IY(this)),U&&!U.closed&&this.add(this.durationSubscription=U)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const h=this.value,Q=this.durationSubscription;Q&&(this.durationSubscription=void 0,Q.unsubscribe(),this.remove(Q)),this.value=void 0,this.hasValue=!1,super._next(h)}}}var y=i(1059),C=i(5778),T=i(7545),j=i(7625),S=i(9439),X=i(1721),B=i(226),x=i(9808),f=i(7144);function M(G,h){1&G&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function R(G,h){}function q(G,h){if(1&G&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&G){const Q=o.oxw(2);o.xp6(1),o.Oqu(Q.nzTip)}}function w(G,h){if(1&G&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,R,0,0,"ng-template",6),o.YNc(3,q,2,1,"div",7),o.qZA()()),2&G){const Q=o.oxw(),U=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===Q.dir)("ant-spin-spinning",Q.isLoading)("ant-spin-lg","large"===Q.nzSize)("ant-spin-sm","small"===Q.nzSize)("ant-spin-show-text",Q.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",Q.nzIndicator||U),o.xp6(1),o.Q6J("ngIf",Q.nzTip)}}function N(G,h){if(1&G&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&G){const Q=o.oxw();o.ekj("ant-spin-blur",Q.isLoading)}}const d=["*"],b="spin";let D=(()=>{class G{constructor(Q,U,F){this.nzConfigService=Q,this.cdr=U,this.directionality=F,this._nzModuleName=b,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new v.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var Q;this.delay$.pipe((0,y.O)(this.nzDelay),(0,C.x)(),(0,T.w)(F=>0===F?this.spinning$:this.spinning$.pipe(function L(G){return h=>h.lift(new a(G))}(ee=>(0,I.H)(ee?F:0)))),(0,j.R)(this.destroy$)).subscribe(F=>{this.isLoading=F,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(b).pipe((0,j.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,j.R)(this.destroy$)).subscribe(F=>{this.dir=F,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzSpinning:U,nzDelay:F}=Q;U&&this.spinning$.next(this.nzSpinning),F&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(Q){return new(Q||G)(o.Y36(S.jY),o.Y36(o.sBO),o.Y36(B.Is,8))},G.\u0275cmp=o.Xpm({type:G,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(Q,U){2&Q&&o.ekj("ant-spin-nested-loading",!U.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:d,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(Q,U){1&Q&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,w,4,12,"div",1),o.YNc(3,N,2,2,"div",2)),2&Q&&(o.xp6(2),o.Q6J("ngIf",U.isLoading),o.xp6(1),o.Q6J("ngIf",!U.nzSimple))},directives:[x.O5,x.tP],encapsulation:2}),(0,e.gn)([(0,S.oS)()],G.prototype,"nzIndicator",void 0),(0,e.gn)([(0,X.Rn)()],G.prototype,"nzDelay",void 0),(0,e.gn)([(0,X.yF)()],G.prototype,"nzSimple",void 0),(0,e.gn)([(0,X.yF)()],G.prototype,"nzSpinning",void 0),G})(),J=(()=>{class G{}return G.\u0275fac=function(Q){return new(Q||G)},G.\u0275mod=o.oAB({type:G}),G.\u0275inj=o.cJS({imports:[[B.vT,x.ez,f.Q8]]}),G})()},8481:(fe,Y,i)=>{i.d(Y,{X:()=>j,j:()=>T});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),v=i(8693),I=i(1721),l=i(226),L=i(9808),a=i(5017),z=i(3075);function y(S,X){if(1&S){const B=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(f){return o.CHM(B),o.oxw().closeTag(f)}),o.qZA()}}const C=["*"];let T=(()=>{class S{constructor(B,x,f,M){this.cdr=B,this.renderer=x,this.elementRef=f,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(B){this.nzOnClose.emit(B),B.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const B=this.elementRef.nativeElement,x=new RegExp(`(ant-tag-(?:${[...v.uf,...v.Bh].join("|")}))`,"g"),f=B.classList.toString(),M=[];let R=x.exec(f);for(;null!==R;)M.push(R[1]),R=x.exec(f);B.classList.remove(...M)}setPresetColor(){const B=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,v.o2)(this.nzColor)||(0,v.M8)(this.nzColor)),this.isPresetColor&&B.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var B;null===(B=this.directionality.change)||void 0===B||B.pipe((0,s.R)(this.destroy$)).subscribe(x=>{this.dir=x,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzColor:x}=B;x&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(B){return new(B||S)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(l.Is,8))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(B,x){1&B&&o.NdJ("click",function(){return x.updateCheckedStatus()}),2&B&&(o.Udp("background-color",x.isPresetColor?"":x.nzColor),o.ekj("ant-tag-has-color",x.nzColor&&!x.isPresetColor)("ant-tag-checkable","checkable"===x.nzMode)("ant-tag-checkable-checked",x.nzChecked)("ant-tag-rtl","rtl"===x.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:C,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(B,x){1&B&&(o.F$t(),o.Hsn(0),o.YNc(1,y,1,0,"i",0)),2&B&&(o.xp6(1),o.Q6J("ngIf","closeable"===x.nzMode))},directives:[L.O5,a.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.yF)()],S.prototype,"nzChecked",void 0),S})(),j=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=o.oAB({type:S}),S.\u0275inj=o.cJS({imports:[[l.vT,L.ez,z.u5,a.PV]]}),S})()}}]);