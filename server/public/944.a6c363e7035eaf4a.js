"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(le,Y,i)=>{i.d(Y,{H:()=>De});var e=i(6654),n=i(9771),o=i(5e3),s=i(9808),z=i(325),g=i(8481),a=i(3610),B=i(3240),c=i(4850),_=i(2198),C=i(7630),T=i(7484),I=i(5017),J=i(3098),x=i(1894),k=i(8144),Q=i(6949),U=i(160);function V(oe,pe){if(1&oe&&(o._UZ(0,"i",11),o.ALo(1,"entityColor"),o._uU(2)),2&oe){const P=o.oxw().ngIf;o.Q6J("nzTwotoneColor",o.lcZ(1,2,"Gene")),o.xp6(2),o.hij(" ",P.officialName," ")}}function D(oe,pe){if(1&oe&&(o.TgZ(0,"nz-tag"),o._uU(1),o.qZA()),2&oe){const P=pe.$implicit;o.xp6(1),o.Oqu(P)}}function L(oe,pe){if(1&oe&&(o.TgZ(0,"nz-descriptions-item",12),o.YNc(1,D,2,1,"nz-tag",13),o.qZA()),2&oe){const P=o.oxw().ngIf;o.xp6(1),o.Q6J("ngForOf",P.geneAliases)}}function X(oe,pe){if(1&oe&&(o.TgZ(0,"a",14)(1,"nz-tag",15),o._UZ(2,"i",16),o._uU(3),o.qZA()()),2&oe){const P=o.oxw().ngIf;o.MGl("routerLink","/genes/",P.id,"/flags"),o.xp6(3),o.hij(" Flags (",P.flags.totalCount,") ")}}function b(oe,pe){if(1&oe&&(o.TgZ(0,"a",14)(1,"nz-tag",17),o._UZ(2,"i",18),o._uU(3),o.qZA()()),2&oe){const P=o.oxw().ngIf;o.MGl("routerLink","/genes/",P.id,"/revisions"),o.xp6(3),o.hij(" Revisions (",P.revisions.totalCount,") ")}}function N(oe,pe){if(1&oe&&(o.TgZ(0,"a",14)(1,"nz-tag",19),o._UZ(2,"i",20),o._uU(3),o.qZA()()),2&oe){const P=o.oxw().ngIf;o.MGl("routerLink","/genes/",P.id,"/comments"),o.xp6(3),o.hij(" Comments (",P.comments.totalCount,") ")}}function l(oe,pe){if(1&oe&&(o.ynx(0),o.TgZ(1,"nz-card",2),o.YNc(2,V,3,4,"ng-template",null,3,o.W1O),o.TgZ(4,"nz-descriptions",4),o.YNc(5,L,2,1,"nz-descriptions-item",5),o.TgZ(6,"nz-descriptions-item",6),o._uU(7),o.qZA()(),o.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),o.YNc(11,X,4,2,"a",10),o.YNc(12,b,4,2,"a",10),o.YNc(13,N,4,2,"a",10),o.qZA()()()(),o.BQk()),2&oe){const P=pe.ngIf,te=o.MAs(3);o.xp6(1),o.Q6J("nzTitle",te),o.xp6(3),o.Q6J("nzColumn",2),o.xp6(1),o.Q6J("ngIf",P.geneAliases.length>0),o.xp6(2),o.hij(" ",P.variants.totalCount," ")}}let F=(()=>{class oe{constructor(P){this.gql=P}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,c.U)(({data:P})=>null==P?void 0:P.gene),(0,_.h)(B.ep))}}return oe.\u0275fac=function(P){return new(P||oe)(o.Y36(C.rJ8))},oe.\u0275cmp=o.Xpm({type:oe,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(P,te){1&P&&(o.TgZ(0,"div",0),o.YNc(1,l,14,4,"ng-container",1),o.ALo(2,"ngrxPush"),o.qZA()),2&P&&(o.xp6(1),o.Q6J("ngIf",o.lcZ(2,1,te.gene$)))},directives:[s.O5,T.bd,I.Ls,J.R7,J.uj,s.sg,g.j,x.SK,x.t3,k.NU,k.$1,z.yS],pipes:[Q.fM,U.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),oe})();var O=i(1730),W=i(4557);function $(oe,pe){}function f(oe,pe){if(1&oe&&(o.ynx(0),o.TgZ(1,"a",4),o.YNc(2,$,0,0,"ng-template",5),o.qZA(),o.BQk()),2&oe){const P=o.oxw(),te=o.MAs(2);o.xp6(1),o.Q6J("routerLink",P.gene.link),o.xp6(1),o.Q6J("ngTemplateOutlet",te)}}function R(oe,pe){}function G(oe,pe){if(1&oe&&o._UZ(0,"cvc-gene-popover",8),2&oe){const P=o.oxw(2);o.Q6J("geneId",P.gene.id)}}function S(oe,pe){if(1&oe){const P=o.EpF();o.TgZ(0,"nz-tag",6),o.NdJ("nzOnClose",function(w){return o.CHM(P),o.oxw().itemClosed(w)}),o.YNc(1,R,0,0,"ng-template",5),o.qZA(),o.YNc(2,G,1,1,"ng-template",null,7,o.W1O)}if(2&oe){const P=o.MAs(3),te=o.oxw(),w=o.MAs(6);o.Q6J("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",P)("nzPopoverTrigger",te.enablePopover?"hover":null)("nzMode",te.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",w)}}function H(oe,pe){}function ie(oe,pe){if(1&oe&&o.YNc(0,H,0,0,"ng-template",5),2&oe){o.oxw();const P=o.MAs(2);o.Q6J("ngTemplateOutlet",P)}}function ue(oe,pe){if(1&oe&&(o.ynx(0),o._uU(1),o.ALo(2,"truncate"),o.BQk()),2&oe){const P=o.oxw(2);o.xp6(1),o.hij(" ",o.xi3(2,1,P.gene.name,12)," ")}}function he(oe,pe){if(1&oe&&o._uU(0),2&oe){const P=o.oxw(2);o.hij(" ",P.gene.name," ")}}function ze(oe,pe){if(1&oe&&(o.TgZ(0,"cvc-icon-badges",9),o._UZ(1,"i",10),o.ALo(2,"entityColor"),o.qZA(),o.YNc(3,ue,3,4,"ng-container",0),o.YNc(4,he,1,1,"ng-template",null,11,o.W1O)),2&oe){const P=o.MAs(5),te=o.oxw();o.Q6J("flagged",te.gene.flagged)("entityColor",te.iconColor),o.xp6(1),o.Q6J("nzTwotoneColor",o.lcZ(2,5,"Gene")),o.xp6(2),o.Q6J("ngIf",te.truncateLongName)("ngIfElse",P)}}let De=(()=>{class oe extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,n.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return oe.\u0275fac=function(P){return new(P||oe)},oe.\u0275cmp=o.Xpm({type:oe,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[o.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(P,te){if(1&P&&(o.YNc(0,f,3,2,"ng-container",0),o.YNc(1,S,4,5,"ng-template",null,1,o.W1O),o.YNc(3,ie,1,1,"ng-template",null,2,o.W1O),o.YNc(5,ze,6,7,"ng-template",null,3,o.W1O)),2&P){const w=o.MAs(4);o.Q6J("ngIf",te.linked)("ngIfElse",w)}},directives:[s.O5,z.yS,s.tP,g.j,a.lU,F,O.b,I.Ls],pipes:[U.a,W.W],styles:[""],changeDetection:0}),oe})()},3309:(le,Y,i)=>{i.d(Y,{U:()=>k});var e=i(9808),n=i(325),o=i(8481),s=i(5017),z=i(3610),g=i(6905),a=i(6949),B=i(7484),c=i(3098),_=i(1894),C=i(8144),T=i(5e3);let I=(()=>{class Q{}return Q.\u0275fac=function(V){return new(V||Q)},Q.\u0275mod=T.oAB({type:Q}),Q.\u0275inj=T.cJS({imports:[[e.ez,n.Bz,a.WG,B.vh,_.Jb,c.q6,o.X,s.PV,C.zf,g.s]]}),Q})();var J=i(4401),x=i(6429);let k=(()=>{class Q{}return Q.\u0275fac=function(V){return new(V||Q)},Q.\u0275mod=T.oAB({type:Q}),Q.\u0275inj=T.cJS({imports:[[e.ez,n.Bz,o.X,z.$6,s.PV,J.mS,g.s,I,x.C]]}),Q})()},1912:(le,Y,i)=>{i.d(Y,{s:()=>J});var e=i(5e3),n=i(6042),o=i(2643),s=i(2683),z=i(3640),a=i(2160),B=i(3762),c=i(5017);let _=(()=>{class x{constructor(Q){this.cookies=Q,this.location=function g(x){return encodeURIComponent(x).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return x.\u0275fac=function(Q){return new(Q||x)(e.Y36(a.N))},x.\u0275cmp=e.Xpm({type:x,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Q,U){1&Q&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&Q&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",U.location,"",e.LSH),e.xp6(1),e.s9C("value",U.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",U.location,"",e.LSH),e.xp6(1),e.s9C("value",U.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",U.location,"",e.LSH),e.xp6(1),e.s9C("value",U.xsrfToken))},directives:[B.n_,B.AA,n.ix,o.dQ,s.w,c.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),x})();function C(x,k){1&x&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function T(x,k){1&x&&e._uU(0," Sign In / Sign Up\n")}function I(x,k){if(1&x){const Q=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(Q),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let J=(()=>{class x{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Q,U){if(1&Q&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return U.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(D){return U.authVisible=D})("nzOnCancel",function(){return U.handleCancel()}),e.YNc(4,C,4,0,"ng-container",2),e.qZA(),e.YNc(5,T,1,0,"ng-template",null,3,e.W1O),e.YNc(7,I,2,0,"ng-template",null,4,e.W1O)),2&Q){const V=e.MAs(6),D=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",U.authVisible)("nzTitle",V)("nzFooter",D)}},directives:[n.ix,o.dQ,s.w,z.du,z.Hf,_],styles:["[_nghost-%COMP%]{display:inline-block}"]}),x})()},1844:(le,Y,i)=>{i.d(Y,{B:()=>B});var e=i(9808),n=i(6042),o=i(3640),s=i(3762),z=i(5017),g=i(5e3);let a=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[[e.ez,z.PV,s.Ph,n.sL]]}),c})(),B=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[[e.ez,n.sL,o.Qp,a]]}),c})()},1730:(le,Y,i)=>{i.d(Y,{b:()=>c});var e=i(9771),n=i(5e3),o=i(9808);const s=function(_){return{background:_}};function z(_,C){if(1&_&&n._UZ(0,"div",3),2&_){const T=n.oxw();n.Q6J("ngStyle",n.VKq(1,s,T.flagColor))}}function g(_,C){if(1&_&&n._UZ(0,"div",4),2&_){const T=n.oxw();n.Q6J("ngStyle",n.VKq(1,s,T.entityColor))}}function a(_,C){if(1&_&&n._UZ(0,"div",5),2&_){const T=n.oxw();n.Q6J("ngStyle",n.VKq(1,s,T.entityColor))}}const B=["*"];let c=(()=>{class _{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return _.\u0275fac=function(T){return new(T||_)},_.\u0275cmp=n.Xpm({type:_,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:B,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(T,I){1&T&&(n.F$t(),n.Hsn(0),n.YNc(1,z,1,3,"div",0),n.YNc(2,g,1,3,"div",1),n.YNc(3,a,1,3,"div",2)),2&T&&(n.xp6(1),n.Q6J("ngIf",I.flagged),n.xp6(1),n.Q6J("ngIf",I.hasRevisions),n.xp6(1),n.Q6J("ngIf",I.hasComments))},directives:[o.O5,o.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),_})()},6429:(le,Y,i)=>{i.d(Y,{C:()=>s});var e=i(9808),n=i(6905),o=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=o.oAB({type:z}),z.\u0275inj=o.cJS({imports:[[e.ez,n.s]]}),z})()},7881:(le,Y,i)=>{i.d(Y,{L:()=>g});var e=i(5e3),n=i(9808),o=i(6699);function s(a,B){if(1&a&&e._UZ(0,"nz-avatar",2),2&a){const c=e.oxw();e.Q6J("nzSrc",c.user.profileImagePath)("nzShape",c.shape?c.shape:"circle")("nzSize",c.size)}}function z(a,B){if(1&a&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&a){const c=e.oxw();e.Q6J("nzSize",c.size)("nzText",e.lcZ(1,2,c.user.displayName.charAt(0)))}}let g=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(c,_){if(1&c&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,z,2,4,"ng-template",null,1,e.W1O)),2&c){const C=e.MAs(2);e.Q6J("ngIf",_.user.profileImagePath)("ngIfElse",C)}},directives:[n.O5,o.Dz],pipes:[n.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(le,Y,i)=>{i.d(Y,{H:()=>s});var e=i(9808),n=i(6699),o=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=o.oAB({type:z}),z.\u0275inj=o.cJS({imports:[[e.ez,n.Rt]]}),z})()},160:(le,Y,i)=>{i.d(Y,{a:()=>o});var e=i(9771),n=i(5e3);let o=(()=>{class s{transform(g){return(0,e.f)(g)}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275pipe=n.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(le,Y,i)=>{i.d(Y,{A:()=>o});var e=i(5e3),n=i(2313);let o=(()=>{class s{constructor(g){this.sanitizer=g}transform(g,a){if(!a||""==a)return g;const B=new RegExp(a,"gi"),c=g.match(B);if(!c)return g;let _=g.replace(B,`<span class='typeahead-match'>${c[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(_)}}return s.\u0275fac=function(g){return new(g||s)(e.Y36(n.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(le,Y,i)=>{i.d(Y,{s:()=>s});var e=i(9808),n=i(7742),o=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=o.oAB({type:z}),z.\u0275inj=o.cJS({providers:[n.l],imports:[[e.ez]]}),z})()},7742:(le,Y,i)=>{i.d(Y,{l:()=>o});var e=i(6530),n=i(5e3);let o=(()=>{class s{transform(g){return g?(0,e.c)(g):""}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275pipe=n.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(le,Y,i)=>{i.d(Y,{W:()=>n});var e=i(5e3);let n=(()=>{class o{constructor(){}transform(z,g=25){if(z.length>g){let B=z.slice(0,g);var a=B.lastIndexOf(" ");return B.slice(0,a)+"\u2026"}return z}}return o.\u0275fac=function(z){return new(z||o)},o.\u0275pipe=e.Yjl({name:"truncate",type:o,pure:!0}),o})()},9350:(le,Y,i)=>{i.d(Y,{a:()=>_});var e=i(655),n=i(7630),o=i(4987),s=i(373),z=i(4850),g=i(1059),a=i(5154),B=i(5e3),c=i(520);let _=class{constructor(T,I){function J(D){return!(!D||D.role!==n.i44.Admin)}function x(D){return!(!D||D.role!==n.i44.Editor&&D.role!==n.i44.Admin)}function k(D){return!(!D||D.role!==n.i44.Curator)}function Q(D){return!(!D||D.role!==n.i44.Curator&&D.role!==n.i44.Editor&&D.role!==n.i44.Admin)}function U(D){var L,X;return!(!D||D.role!==n.i44.Editor&&D.role!==n.i44.Admin||!D.mostRecentConflictOfInterestStatement||(null===(L=D.mostRecentConflictOfInterestStatement)||void 0===L?void 0:L.coiStatus)!=n.Mgx.Conflict&&(null===(X=D.mostRecentConflictOfInterestStatement)||void 0===X?void 0:X.coiStatus)!=n.Mgx.Valid)}function V(D){if(D.mostRecentOrganizationId)return D.organizations.find(L=>L.id===D.mostRecentOrganizationId)}this.viewerBaseGQL=T,this.http=I,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,z.U)(D=>Object.assign(Object.assign({},D),{signedIn:null!=D,signedOut:null==D,canCurate:Q(D),canModerate:U(D),isAdmin:J(D),isEditor:x(D),isCurator:k(D),organizations:null==D?[]:D.organizations,mostRecentOrg:null==D?void 0:V(D),invalidCoi:x(D)&&(!D.mostRecentConflictOfInterestStatement||D.mostRecentConflictOfInterestStatement.coiStatus===n.Mgx.Expired||D.mostRecentConflictOfInterestStatement.coiStatus===n.Mgx.Missing)})),(0,g.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,z.U)(D=>D.signedIn)),this.signedOut$=this.viewer$.pipe((0,z.U)(D=>D.signedOut)),this.isAdmin$=this.viewer$.pipe((0,z.U)(D=>J(D))),this.isEditor$=this.viewer$.pipe((0,z.U)(D=>x(D))),this.isCurator$=this.viewer$.pipe((0,z.U)(D=>k(D))),this.canCurate$=this.viewer$.pipe((0,z.U)(D=>Q(D))),this.canModerate$=this.viewer$.pipe((0,z.U)(D=>U(D)))}signOut(){this.http.get("/api/sign_out").pipe((0,o.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};_.\u0275fac=function(T){return new(T||_)(B.LFG(n.Tt7),B.LFG(c.eN))},_.\u0275prov=B.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_=(0,e.gn)([(0,o.c)()],_)},6654:(le,Y,i)=>{i.d(Y,{a:()=>n});var e=i(5e3);let n=(()=>{class o{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(z){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return o.\u0275fac=function(z){return new(z||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(z,g){},encapsulation:2}),o})()},915:(le,Y,i)=>{function e(n){let o;if("NA"===n)o=["N/A"];else if("SENSITIVITYRESPONSE"===n)o=["Sensitivity","/","Response"];else{o=n.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<o.length;s++)o[s]=o[s].charAt(0).toUpperCase()+o[s].slice(1)}return o.join(" ")}i.d(Y,{E:()=>e})},6530:(le,Y,i)=>{function e(n){switch(n){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return n}}i.d(Y,{c:()=>e})},9771:(le,Y,i)=>{i.d(Y,{f:()=>n});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#b2d44a"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#33b358"],["VariantGroup","#33b358"],["VariantType","#33b358"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"]]);function n(o){let s="#AAAAAA";if(o){const z=e.get(o);z&&(s=z)}return s}},6123:(le,Y,i)=>{i.d(Y,{U:()=>z});var e=i(8929),n=i(591),o=i(7625),s=i(537);class z{constructor(a){this.networkErrorService=a}mutate(a,B,c,_){let C=new e.xQ,T={isSubmitting$:new n.X(!1),submitSuccess$:new n.X(!1),submitError$:new n.X([]),cleanup:()=>{C.next(),C.complete()}};return T.isSubmitting$.next(!0),a.mutate(B,c).pipe((0,o.R)(C),(0,s.x)(()=>{T.isSubmitting$.next(!1)})).subscribe({next:I=>{I.data&&_&&_(I.data)},error:I=>{I.graphQLErrors.length>0?T.submitError$.next(I.graphQLErrors.map(J=>J.message)):I.networkError&&this.networkErrorService.networkError$.next(I.networkError),T.cleanup()},complete:()=>{T.submitError$.next([]),T.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),T.cleanup()}}),T}}},9397:(le,Y,i)=>{i.d(Y,{l:()=>n});var e=i(5e3);let n=(()=>{class o{constructor(z){this.host=z,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return o.\u0275fac=function(z){return new(z||o)(e.Y36(e.SBq))},o.\u0275dir=e.lG2({type:o,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),o})()},8616:(le,Y,i)=>{i.d(Y,{Y:()=>o});var e=i(9808),n=i(5e3);let o=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[e.ez]]}),s})()},9180:(le,Y,i)=>{i.d(Y,{Z:()=>o});var e=i(5e3);const n=["*"];let o=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:n,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(g,a){1&g&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(le,Y,i)=>{i.d(Y,{R:()=>o});var e=i(9808),n=i(5e3);let o=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[e.ez]]}),s})()},822:(le,Y,i)=>{i.d(Y,{V:()=>B});var e=i(5e3),n=i(9808),o=i(2359);function s(c,_){if(1&c&&e._UZ(0,"nz-alert",4),2&c){const C=e.oxw();e.Q6J("nzDescription",C.errors[0])}}function z(c,_){if(1&c&&e._UZ(0,"nz-alert",5),2&c){e.oxw();const C=e.MAs(3);e.Q6J("nzDescription",C)}}function g(c,_){if(1&c&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&c){const C=_.$implicit;e.xp6(1),e.Oqu(C)}}function a(c,_){if(1&c&&(e.TgZ(0,"ul",6),e.YNc(1,g,2,1,"li",7),e.qZA()),2&c){const C=e.oxw();e.xp6(1),e.Q6J("ngForOf",C.errors)}}let B=(()=>{class c{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return c.\u0275fac=function(C){return new(C||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(C,T){1&C&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,z,1,1,"nz-alert",1),e.YNc(2,a,2,1,"ng-template",2,3,e.W1O)),2&C&&(e.Q6J("ngIf",1===T.errors.length),e.xp6(1),e.Q6J("ngIf",T.errors.length>1))},directives:[n.O5,o.r,n.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),c})()},7008:(le,Y,i)=>{i.d(Y,{B:()=>s});var e=i(9808),n=i(2359),o=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=o.oAB({type:z}),z.\u0275inj=o.cJS({imports:[[e.ez,n.L]]}),z})()},6789:(le,Y,i)=>{i.d(Y,{_:()=>T});var e=i(9808),n=i(7484),o=i(1017),s=i(5482),z=i(6949),g=i(9552),a=i(8776),B=i(5017),c=i(404),_=i(5e3);let C=(()=>{class I{}return I.\u0275fac=function(x){return new(x||I)},I.\u0275mod=_.oAB({type:I}),I.\u0275inj=_.cJS({imports:[[e.ez,z.WG,a.X0,g.j,s.cD,B.PV,c.cg,o.s]]}),I})(),T=(()=>{class I{}return I.\u0275fac=function(x){return new(x||I)},I.\u0275mod=_.oAB({type:I}),I.\u0275inj=_.cJS({imports:[[e.ez,z.WG,a.X0,n.vh,g.j,s.cD,B.PV,c.cg,C,o.s]]}),I})()},1825:(le,Y,i)=>{i.d(Y,{A:()=>B});var e=i(9808),n=i(6042),o=i(6699),s=i(3677),z=i(8144),g=i(6949),a=i(5e3);let B=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[e.ez,g.WG,n.sL,o.Rt,s.b1,z.zf]]}),c})()},1793:(le,Y,i)=>{i.d(Y,{m:()=>a});var e=i(5e3),n=i(8929),o=i(5254),s=i(2198),z=i(4850),g=i(7625);let a=(()=>{class B{constructor(_){this.el=_,this.domChange=new e.vpe,this.destroy$=new n.xQ,this.changes=new MutationObserver(C=>{this.mutation$=(0,o.D)(C),this.disabledChange$=this.mutation$.pipe((0,s.h)(T=>"disabled"===T.attributeName),(0,z.U)(T=>({type:"disabled",change:T.target.disabled}))),this.disabledChange$.pipe((0,g.R)(this.destroy$)).subscribe(T=>{this.domChange.emit(T)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return B.\u0275fac=function(_){return new(_||B)(e.Y36(e.SBq))},B.\u0275dir=e.lG2({type:B,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),B})()},7905:(le,Y,i)=>{i.d(Y,{nT:()=>g,yQ:()=>s});var e=i(915),n=i(7630),o=i(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class g{constructor(B){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,o.o6)(n.uBv).map(c=>c):(0,o.o6)(n.kqt).map(c=>c),this.getSignificanceOptions=c=>{const _=this.validStates.get(c);return(null==_?void 0:_.clinicalSignificance)||[]},this.isValidSignificanceOption=(c,_)=>{const C=this.validStates.get(c);return!C||C.clinicalSignificance.includes(_)},this.getDirectionOptions=c=>{const _=this.validStates.get(c);return(null==_?void 0:_.entityDirection)||[]},this.isValidDirectionOption=(c,_)=>{const C=this.validStates.get(c);return!C||C.entityDirection.includes(_)},this.requiresDrug=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresDrug},this.requiresDisease=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresDisease},this.requiresAcmgCodes=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresAcmgCodes},this.requiresAmpLevel=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresAmpLevel},this.requiresClingenCodes=c=>{const _=this.validStates.get(c);return void 0===_||_.requiresClingenCodes},this.allowsFdaApproval=c=>{const _=this.validStates.get(c);return void 0===_||_.allowsFdaApproval},this.getOptionsFromEnums=c=>0===c.length?[]:c.map(_=>({value:_,label:(0,e.E)(_)})),this.entityName=B,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(le,Y,i)=>{i.d(Y,{_:()=>o});var e=i(7630),n=i(7905);class o extends n.nT{constructor(){super(n.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,clinicalSignificance:[e._Aq.Sensitivityresponse,e._Aq.Resistance,e._Aq.AdverseResponse,e._Aq.ReducedSensitivity,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,clinicalSignificance:[e._Aq.Positive,e._Aq.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,clinicalSignificance:[e._Aq.BetterOutcome,e._Aq.PoorOutcome,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,clinicalSignificance:[e._Aq.Oncogenicity,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,clinicalSignificance:[e._Aq.Predisposition,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,clinicalSignificance:[e._Aq.GainOfFunction,e._Aq.LossOfFunction,e._Aq.UnalteredFunction,e._Aq.Neomorphic,e._Aq.DominantNegative,e._Aq.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(le,Y,i)=>{i.d(Y,{E:()=>J});var e=i(9808),n=i(3075),o=i(325),s=i(8776),z=i(304),g=i(6042),a=i(5e3),B=i(2643),c=i(2683);function _(x,k){if(1&x){const Q=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(Q),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function C(x,k){if(1&x&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&x){const Q=a.oxw();a.Q6J("routerLink",Q.redirectPath)}}const I={name:"cancel-button",component:(()=>{class x extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Q,U,V,D;(null===(Q=this.field.templateOptions)||void 0===Q?void 0:Q.onClick)?this.callOnClick=null===(U=this.field.templateOptions)||void 0===U?void 0:U.onClick:(null===(V=this.field.templateOptions)||void 0===V?void 0:V.redirectPath)&&(this.redirectPath=null===(D=this.field.templateOptions)||void 0===D?void 0:D.redirectPath)}}return x.\u0275fac=function(){let k;return function(U){return(k||(k=a.n5z(x)))(U||x)}}(),x.\u0275cmp=a.Xpm({type:x,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Q,U){if(1&Q&&(a.YNc(0,_,2,0,"button",0),a.YNc(1,C,2,1,"ng-template",null,1,a.W1O)),2&Q){const V=a.MAs(2);a.Q6J("ngIf",U.callOnClick)("ngIfElse",V)}},directives:[e.O5,g.ix,B.dQ,c.w,o.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),x})()};let J=(()=>{class x{}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275mod=a.oAB({type:x}),x.\u0275inj=a.cJS({imports:[[e.ez,n.u5,n.UX,g.sL,o.Bz,z.F,s.X0.forChild({types:[I]})]]}),x})()},4623:(le,Y,i)=>{i.d(Y,{K:()=>_});var e=i(9808),n=i(8776),o=i(5e3),s=i(1047),z=i(3075);const a={name:"comment-textarea",component:(()=>{class C extends n.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(I,J)=>{var x;return`Comments must be at least ${null===(x=J.templateOptions)||void 0===x?void 0:x.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return C.\u0275fac=function(){let T;return function(J){return(T||(T=o.n5z(C)))(J||C)}}(),C.\u0275cmp=o.Xpm({type:C,selectors:[["comment-textarea-type"]],features:[o.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(I,J){1&I&&o._UZ(0,"textarea",0),2&I&&o.Q6J("formControl",J.formControl)("formlyAttributes",J.field)},directives:[s.Zp,z.Fj,z.JJ,z.oH,n.VQ],styles:[""],changeDetection:0}),C})(),wrappers:["form-field"]};var B=i(4546),c=i(9139);let _=(()=>{class C{}return C.\u0275fac=function(I){return new(I||C)},C.\u0275mod=o.oAB({type:C}),C.\u0275inj=o.cJS({imports:[[e.ez,z.UX,n.X0.forChild({types:[a]}),c.u,B.U5,s.o7]]}),C})()},1605:(le,Y,i)=>{i.d(Y,{e:()=>Ae});var e=i(9808),n=i(3075),o=i(8776),s=i(3793),z=i(304),g=i(8054),a=i(5e3),B=i(1894),c=i(4546);let _=(()=>{class y{constructor(){console.log("FormCardDirective constructed.")}}return y.\u0275fac=function(E){return new(E||y)},y.\u0275dir=a.lG2({type:y,selectors:[["",8,"cvc-form-card-control"]]}),y})();var C=i(7484),T=i(404);function I(y,q){1&y&&a._UZ(0,"i",7)}function J(y,q){if(1&y&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,I,1,0,"i",6),a.qZA()),2&y){const E=a.oxw();a.Q6J("nzRequired",E.to.required&&!0!==E.to.hideRequiredMarker)("nzFor",E.id),a.xp6(1),a.hij(" ",E.to.label," "),a.xp6(1),a.Q6J("ngIf",E.to.helpText)}}function x(y,q){if(1&y&&a._UZ(0,"formly-validation-message",9),2&y){const E=a.oxw(2);a.Q6J("field",E.field)}}function k(y,q){if(1&y&&a.YNc(0,x,1,1,"formly-validation-message",8),2&y){const E=a.oxw();a.Q6J("ngIf",E.showError)}}let Q=(()=>{class y extends o.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return y.\u0275fac=function(E){return new(E||y)},y.\u0275cmp=a.Xpm({type:y,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(E,ce){if(1&E&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,J,3,4,"ng-template",null,3,a.W1O),a.YNc(7,k,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&E){const Ce=a.MAs(6),Se=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",ce.errorState)("nzErrorTip",Se),a.xp6(1),a.Q6J("nzTitle",Ce)("nzExtra",Se)}},directives:[B.SK,c.Nx,B.t3,c.Fd,_,C.bd,c.iK,e.O5,T.SY,o.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),y})();var U=i(5017),V=i(1017);const D={wrappers:[{name:"form-card",component:Q}]};let L=(()=>{class y{}return y.\u0275fac=function(E){return new(E||y)},y.\u0275mod=a.oAB({type:y}),y.\u0275inj=a.cJS({imports:[[e.ez,n.UX,c.U5,C.vh,U.PV,T.cg,o.X0.forChild(D),V.s]]}),y})();var X=i(655),b=i(373),N=i(2198),l=i(4850),F=i(3240),O=i(4987),W=i(7630),$=i(9397),f=i(6949),R=i(8144),G=i(3618),S=i(3193),H=i(8926);function ie(y,q){if(1&y&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&y){const E=a.oxw().$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,E.label,ce.to.searchString),a.oJD)}}function ue(y,q){if(1&y&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&y){const E=a.oxw(2).$implicit,ce=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,E.gene.geneAliases.join(", "),ce.to.searchString),a.oJD)}}function he(y,q){1&y&&(a.ynx(0),a.YNc(1,ue,2,4,"span",11),a.BQk())}function ze(y,q){if(1&y&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,ie,2,4,"span",8),a.YNc(3,he,2,0,"ng-container",9),a.qZA()()),2&y){const E=q.$implicit;a.Q6J("nzLabel",E.tooltip)("nzValue",E.gene),a.xp6(3),a.Q6J("ngIf",E.gene.geneAliases.length>0)}}function De(y,q){if(1&y&&(a.ynx(0),a.YNc(1,ze,4,3,"nz-option",6),a.BQk()),2&y){const E=q.ngrxLet;a.xp6(1),a.Q6J("ngForOf",E)}}function oe(y,q){1&y&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function pe(y,q){if(1&y){const E=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Ce){return a.CHM(E),a.oxw().to.onSearch(Ce)}),a.YNc(3,De,2,1,"ng-container",4),a.qZA(),a.YNc(4,oe,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&y){const E=a.MAs(5),ce=a.oxw();a.xp6(1),a.Q6J("formControl",ce.formControl)("formlyAttributes",ce.field)("nzPlaceHolder",ce.to.placeholder?ce.to.placeholder:null)("nzNotFoundContent",E)("nzShowArrow",ce.to.showArrow)("nzFilterOption",ce.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",ce.genes$)}}function P(y,q){if(1&y&&a._UZ(0,"cvc-gene-tag",13),2&y){const E=a.oxw();a.Q6J("gene",E.formControl.value)}}let te=class extends o.fS{constructor(q){super(),this.geneTypeaheadQuery=q,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,b.j)("data","geneTypeahead"),(0,N.h)(F.ep),(0,l.U)(q=>q.map(E=>{let ce=E.geneAliases.length>0?`Aliases: ${E.geneAliases.join(", ")}`:"";return{value:E.id,tooltip:`${E.name} (${E.entrezId}) ${ce}`,label:`${E.name} (${E.entrezId})`,gene:E}})))}ngAfterViewInit(){this.to.onSearch=q=>{q.length<this.to.minLengthSearch||(this.to.searchString=q,this.queryRef.refetch({entrezSymbol:q}))}}};te.\u0275fac=function(q){return new(q||te)(a.Y36(W.Q4m))},te.\u0275cmp=a.Xpm({type:te,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(q,E){if(1&q&&(a.YNc(0,pe,6,7,"ng-container",0),a.YNc(1,P,1,1,"ng-template",null,1,a.W1O)),2&q){const ce=a.MAs(2);a.Q6J("ngIf",!(null!=E.formControl.value&&E.formControl.value.id))("ngIfElse",ce)}},directives:[e.O5,g.Vq,$.l,n.JJ,n.oH,o.VQ,f.eJ,e.sg,g.Ip,R.NU,R.$1,G.ZU,S.H],pipes:[H.A],styles:[""]}),te=(0,X.gn)([(0,O.c)()],te);const w={name:"cvc-gene-input",component:te};var se=i(3309),ee=i(6905),ge=i(8616);let _e=(()=>{class y{}return y.\u0275fac=function(E){return new(E||y)},y.\u0275mod=a.oAB({type:y}),y.\u0275inj=a.cJS({imports:[[e.ez,n.UX,f.WG,o.X0.forChild({types:[w]}),g.LV,R.zf,G.ZJ,se.U,ee.s,ge.Y]]}),y})();var Te=i(7055);const Ie={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ae=(()=>{class y{}return y.\u0275fac=function(E){return new(E||y)},y.\u0275mod=a.oAB({type:y}),y.\u0275inj=a.cJS({imports:[[e.ez,n.u5,n.UX,g.LV,z.F,s.F,o.X0.forChild({types:[Ie]}),_e,Te.N,L]]}),y})()},7055:(le,Y,i)=>{i.d(Y,{N:()=>N});var e=i(9808),n=i(3075),o=i(8776),s=i(4546),z=i(1047),g=i(5017),a=i(5e3),B=i(1894),c=i(8481),_=i(2683),C=i(6042),T=i(2643);function I(l,F){if(1&l){const O=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function($){return a.CHM(O),a.oxw().addField($)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&l){const O=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",O.errorState),a.xp6(3),a.hij(" ",O.to.addText," ")}}function J(l,F){if(1&l){const O=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function($){return a.CHM(O),a.oxw(4).addField($)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&l){const O=a.oxw(4);a.xp6(2),a.hij(" ",O.to.addText," ")}}function x(l,F){if(1&l&&(a.TgZ(0,"div",11),a.YNc(1,J,3,1,"nz-tag",12),a.qZA()),2&l){const O=a.oxw(2).$implicit,W=a.oxw();a.xp6(1),a.Q6J("ngIf",0==W.to.maxCount||W.to.maxCount>O.model.length)}}function k(l,F){if(1&l){const O=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(O);const $=a.oxw().index;return a.oxw().remove($)}),a.qZA()(),a.YNc(3,x,2,1,"div",10),a.BQk()}if(2&l){const O=a.oxw().last;a.xp6(3),a.Q6J("ngIf",O)}}function Q(l,F){if(1&l){const O=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(O);const $=a.oxw().index;return a.oxw().remove($)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function U(l,F){if(1&l&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,k,4,1,"ng-container",1),a.YNc(5,Q,4,0,"ng-container",1),a.qZA()()),2&l){const O=F.$implicit,W=F.index;a.xp6(2),a.Q6J("ngClass",O.model[W]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",O),a.xp6(1),a.Q6J("ngIf",O.model[W]),a.xp6(1),a.Q6J("ngIf",!O.model[W])}}const V=function(l){return{hidden:l}},L={name:"multi-field",component:(()=>{class l extends o.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(O){O&&O.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return l.\u0275fac=function(O){return new(O||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(O,W){1&O&&(a.TgZ(0,"div",0),a.YNc(1,I,5,2,"nz-form-item",1),a.YNc(2,U,6,4,"nz-form-item",2),a.qZA()),2&O&&(a.Q6J("ngClass",a.VKq(3,V,!0===W.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==W.field.fieldGroup?null:W.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",W.field.fieldGroup))},directives:[e.mk,e.O5,B.SK,s.Nx,B.t3,s.Fd,c.j,g.Ls,_.w,e.sg,o.cw,C.ix,T.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),l})()};var X=i(7102),b=i(1017);let N=(()=>{class l{}return l.\u0275fac=function(O){return new(O||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[[e.ez,n.u5,o.X0.forChild({types:[L]}),n.UX,X.a,s.U5,z.o7,g.PV,C.sL,b.s,c.X]]}),l})()},7462:(le,Y,i)=>{i.d(Y,{o:()=>B});var e=i(9808),n=i(8776),o=i(5e3),s=i(1047),z=i(3075);const a={name:"cvc-textarea",component:(()=>{class c extends n.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return c.\u0275fac=function(){let _;return function(T){return(_||(_=o.n5z(c)))(T||c)}}(),c.\u0275cmp=o.Xpm({type:c,selectors:[["cvc-textarea-base-type"]],features:[o.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(C,T){1&C&&o._UZ(0,"textarea",0),2&C&&o.Q6J("formControl",T.formControl)("formlyAttributes",T.field)("nzAutosize",T.to.autosize)("placeholder",T.to.placeholder)},directives:[s.Zp,z.Fj,s.rh,z.JJ,z.oH,n.VQ],styles:[""],changeDetection:0}),c})(),wrappers:["form-field"]};let B=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[[e.ez,z.u5,z.UX,n.X0.forChild({types:[a]}),s.o7]]}),c})()},7102:(le,Y,i)=>{i.d(Y,{a:()=>_});var e=i(9808),n=i(8776),o=i(3075),s=i(4546),z=i(5e3),g=i(1894);function a(C,T){if(1&C&&z._UZ(0,"formly-validation-message",3),2&C){const I=z.oxw();z.Q6J("field",I.field)}}const c={name:"cvc-field-errors",component:(()=>{class C extends n.n2{get errorState(){return this.showError?"error":""}}return C.\u0275fac=function(){let T;return function(J){return(T||(T=z.n5z(C)))(J||C)}}(),C.\u0275cmp=z.Xpm({type:C,selectors:[["cvc-field-errors-wrapper"]],features:[z.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(I,J){if(1&I&&(z.TgZ(0,"nz-form-control",0)(1,"p"),z._uU(2),z.qZA(),z.GkF(3,null,1),z.YNc(5,a,1,1,"ng-template",null,2,z.W1O),z.qZA()),2&I){const x=z.MAs(6);z.Q6J("nzValidateStatus",J.errorState)("nzErrorTip",x),z.xp6(2),z.hij("errorState: ",J.errorState,"")}},directives:[g.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),C})()};let _=(()=>{class C{}return C.\u0275fac=function(I){return new(I||C)},C.\u0275mod=z.oAB({type:C}),C.\u0275inj=z.cJS({imports:[[e.ez,o.UX,s.U5,n.X0.forChild({wrappers:[c]})]]}),C})()},5472:(le,Y,i)=>{i.d(Y,{r:()=>T});var e=i(9808),n=i(6949),o=i(8776),s=i(7484),z=i(5482),g=i(1894),a=i(1017),B=i(6789),c=i(5e3);const C={wrappers:[{name:"form-container",component:(()=>{class I extends o.n2{}return I.\u0275fac=function(){let J;return function(k){return(J||(J=c.n5z(I)))(k||I)}}(),I.\u0275cmp=c.Xpm({type:I,selectors:[["cvc-form-container-wrapper"]],features:[c.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(x,k){1&x&&(c.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),c.GkF(3,null,2),c.qZA()()()),2&x&&(c.xp6(2),c.Q6J("nzTitle",k.to.label))},directives:[g.SK,g.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),I})()}]};let T=(()=>{class I{}return I.\u0275fac=function(x){return new(x||I)},I.\u0275mod=c.oAB({type:I}),I.\u0275inj=c.cJS({imports:[[e.ez,n.WG,o.X0.forChild(C),g.Jb,s.vh,z.cD,B._,a.s]]}),I})()},7695:(le,Y,i)=>{i.d(Y,{C:()=>N});var e=i(9808),n=i(6949),o=i(8776),s=i(7484),z=i(5482),g=i(1894),a=i(1017),B=i(6789),c=i(5e3),_=i(9552),C=i(5017),T=i(404);function I(l,F){1&l&&c._UZ(0,"div",9),2&l&&c.Q6J("innerHtml",F.ngIf,c.oJD)}function J(l,F){1&l&&(c.TgZ(0,"div",10),c._uU(1,"Help not available for this field."),c.qZA())}function x(l,F){if(1&l&&(c.TgZ(0,"nz-collapse-panel",6),c.YNc(1,I,1,1,"div",7),c.YNc(2,J,2,0,"ng-template",null,8,c.W1O),c.qZA()),2&l){const O=F.ngIf,W=c.MAs(3),$=c.oxw().$implicit,f=c.MAs(3);c.Q6J("nzHeader",O)("nzActive",$.templateOptions.hasFocus)("nzExtra",f),c.xp6(1),c.Q6J("ngIf",null==$.templateOptions?null:$.templateOptions.helpText)("ngIfElse",W)}}function k(l,F){if(1&l&&c._UZ(0,"formly-validation-message",14),2&l){const O=c.oxw(4).$implicit;c.Q6J("field",O)}}function Q(l,F){if(1&l&&(c.ynx(0),c._UZ(1,"i",12),c.YNc(2,k,1,1,"ng-template",null,13,c.W1O),c.BQk()),2&l){const O=c.MAs(3);c.xp6(1),c.Q6J("nzTooltipTitle",O)}}function U(l,F){if(1&l&&(c.ynx(0),c.YNc(1,Q,4,1,"ng-container",11),c.BQk()),2&l){const O=F.ngIf;c.xp6(1),c.Q6J("ngIf","INVALID"===O)}}function V(l,F){if(1&l&&(c.YNc(0,U,2,1,"ng-container",11),c.ALo(1,"ngrxPush")),2&l){const O=c.oxw().$implicit;c.Q6J("ngIf",c.lcZ(1,1,O.formControl.statusChanges))}}function D(l,F){if(1&l&&(c.ynx(0),c.YNc(1,x,4,5,"nz-collapse-panel",4),c.YNc(2,V,2,3,"ng-template",null,5,c.W1O),c.BQk()),2&l){const O=F.$implicit;c.xp6(1),c.Q6J("ngIf",null==O.templateOptions?null:O.templateOptions.label)}}let L=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(O){return new(O||l)},l.\u0275cmp=c.Xpm({type:l,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(O,W){1&O&&(c.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),c.YNc(3,D,4,1,"ng-container",3),c.qZA()()()),2&O&&(c.Q6J("nzOffsetTop",0)("nzTarget",W.affixTo),c.xp6(2),c.Q6J("nzBordered",!1),c.xp6(1),c.Q6J("ngForOf",W.fieldGroup))},directives:[_.$,s.bd,z.yH,e.sg,e.O5,z.Zv,C.Ls,T.SY,o.u_],pipes:[n.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),l})();const b={name:"form-info",component:(()=>{class l extends o.n2{}return l.\u0275fac=function(){let F;return function(W){return(F||(F=c.n5z(l)))(W||l)}}(),l.\u0275cmp=c.Xpm({type:l,selectors:[["cvc-form-info-wrapper"]],features:[c.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(O,W){if(1&O&&(c.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),c.GkF(3,null,3),c.qZA()(),c.TgZ(5,"nz-col",1)(6,"div",null,4),c._UZ(8,"cvc-form-info-card",5),c.qZA()()()),2&O){const $=c.MAs(7);c.xp6(1),c.Q6J("nzSpan",16),c.xp6(1),c.Q6J("nzTitle",W.to.label),c.xp6(3),c.Q6J("nzSpan",8),c.xp6(3),c.Q6J("fieldGroup",W.field.fieldGroup)("affixTo",$)}},directives:[g.SK,g.t3,s.bd,L],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),l})()};let N=(()=>{class l{}return l.\u0275fac=function(O){return new(O||l)},l.\u0275mod=c.oAB({type:l}),l.\u0275inj=c.cJS({imports:[[e.ez,n.WG,o.X0.forChild({wrappers:[b]}),g.Jb,s.vh,z.cD,B._,a.s]]}),l})()},8785:(le,Y,i)=>{i.d(Y,{t:()=>X});var e=i(5e3),n=i(6123),o=i(8929),s=i(7625),z=i(7630),g=i(9169),a=i(7484),B=i(9808),c=i(2359),_=i(1894),C=i(4546),T=i(822),I=i(7525),J=i(3868),x=i(3075),k=i(6042),Q=i(2643),U=i(2683);function V(b,N){1&b&&e._UZ(0,"nz-alert",7)}function D(b,N){if(1&b&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&b){const l=e.oxw();e.xp6(1),e.Q6J("errors",l.errorMessages)}}function L(b,N){if(1&b){const l=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(O){return e.CHM(l),e.oxw().coiText=O}),e.qZA()()}if(2&b){const l=e.oxw();e.xp6(1),e.Q6J("ngModel",l.coiText)}}let X=(()=>{class b{constructor(l,F){this.updateCoiGql=l,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new o.xQ,this.updateCoiMutator=new n.U(F)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let F=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});F.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(O=>{O&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),F.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(O=>{O&&(this.errorMessages=O,this.success=!1)}),F.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(O=>{this.loading=O})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(l){return new(l||b)(e.Y36(z.IP1),e.Y36(g.Y))},b.\u0275cmp=e.Xpm({type:b,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(l,F){1&l&&(e.TgZ(0,"nz-card"),e.YNc(1,V,1,0,"nz-alert",0),e.YNc(2,D,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(W){return F.coiStatus=W}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,L,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return F.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&l&&(e.xp6(1),e.Q6J("ngIf",F.success),e.xp6(1),e.Q6J("ngIf",F.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",F.loading),e.xp6(2),e.Q6J("ngModel",F.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===F.coiStatus),e.xp6(2),e.Q6J("disabled",F.loading||"coiPresent"===F.coiStatus&&(void 0===F.coiText||F.coiText.length<10)))},directives:[a.bd,B.O5,c.r,_.SK,C.Nx,T.V,I.W,J.Dg,x.JJ,x.On,J.Of,x.Fj,k.ix,Q.dQ,U.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),b})()},330:(le,Y,i)=>{i.d(Y,{e:()=>T});var e=i(9808),n=i(3075),o=i(6949),s=i(7484),z=i(2359),g=i(4546),a=i(7008),B=i(3868),c=i(7525),_=i(6042),C=i(5e3);let T=(()=>{class I{}return I.\u0275fac=function(x){return new(x||I)},I.\u0275mod=C.oAB({type:I}),I.\u0275inj=C.cJS({imports:[[e.ez,n.u5,g.U5,n.UX,o.WG,s.vh,z.L,B.aF,_.sL,c.j,a.B]]}),I})()},3434:(le,Y,i)=>{i.d(Y,{G:()=>X});var e=i(3075),n=i(8929),o=i(4024),s=i(6123),z=i(7625),g=i(5e3),a=i(7630),B=i(9169),c=i(325),_=i(7525),C=i(4546),T=i(9808),I=i(8776),J=i(1894),x=i(822),k=i(2359);function Q(b,N){1&b&&g.GkF(0)}function U(b,N){if(1&b&&(g.TgZ(0,"nz-form-item"),g._UZ(1,"cvc-form-errors-alert",6),g.qZA()),2&b){const l=g.oxw(2);g.xp6(1),g.Q6J("errors",l.errorMessages)}}function V(b,N){if(1&b&&(g.TgZ(0,"p"),g._uU(1,"View "),g.TgZ(2,"a",10),g._uU(3,"its details"),g.qZA(),g._uU(4,"."),g.qZA()),2&b){const l=g.oxw(3);g.xp6(2),g.MGl("routerLink","/variants/",l.newId,"/summary")}}function D(b,N){if(1&b&&(g.ynx(0),g._UZ(1,"nz-alert",7),g.YNc(2,V,5,1,"ng-template",8,9,g.W1O),g.BQk()),2&b){const l=g.MAs(3),F=g.oxw(2);g.xp6(1),g.Q6J("nzMessage",F.isNew?"Variant Created":"Variant Already Exists")("nzDescription",l)}}function L(b,N){if(1&b&&(g.YNc(0,U,2,1,"nz-form-item",5),g.YNc(1,D,4,2,"ng-container",5)),2&b){const l=g.oxw();g.Q6J("ngIf",l.errorMessages.length>0),g.xp6(1),g.Q6J("ngIf",l.success)}}let X=(()=>{class b{constructor(l,F,O){this.submitVariantGQL=l,this.networkErrorService=F,this.route=O,this.destroy$=new n.xQ,this.formGroup=new e.cw({}),this.formOptions={formState:new o._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new s.U(F),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to add a new variant."}}},{key:"variant",type:"cvc-textarea",templateOptions:{label:"Variant Name",helpText:"The name of the variant to add",placeholder:"Enter variant name",required:!0,autosize:{minRows:1,maxRows:1}},validation:{messages:{required:"Variant name is required to add a new variant."}}},{key:"submit",type:"submit-button"}]}]}submitVariant(l){let F=null==l?void 0:l.fields.gene[0].id,O=null==l?void 0:l.fields.variant;if(F&&O){let $=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:F,name:O},{},f=>{this.newId=f.addVariant.variant.id,this.isNew=f.addVariant.new});$.submitSuccess$.pipe((0,z.R)(this.destroy$)).subscribe(f=>{f&&(this.success=!0)}),$.submitError$.pipe((0,z.R)(this.destroy$)).subscribe(f=>{f&&(this.errorMessages=f,this.success=!1)}),$.isSubmitting$.pipe((0,z.R)(this.destroy$)).subscribe(f=>{this.loading=f})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(l){return new(l||b)(g.Y36(a.LUc),g.Y36(B.Y),g.Y36(c.gz))},b.\u0275cmp=g.Xpm({type:b,selectors:[["cvc-variant-submit-form"]],decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(l,F){if(1&l&&(g.TgZ(0,"nz-spin",0)(1,"form",1),g.NdJ("ngSubmit",function(){return F.submitVariant(F.formModel)}),g.YNc(2,Q,1,0,"ng-container",2),g.TgZ(3,"formly-form",3),g.NdJ("modelChange",function(W){return F.formModel=W}),g.qZA()()(),g.YNc(4,L,2,2,"ng-template",null,4,g.W1O)),2&l){const O=g.MAs(5);g.Q6J("nzSpinning",F.loading),g.xp6(1),g.Q6J("formGroup",F.formGroup),g.xp6(1),g.Q6J("ngTemplateOutlet",O),g.xp6(1),g.Q6J("form",F.formGroup)("fields",F.formFields)("model",F.formModel)("options",F.formOptions)}},directives:[_.W,e._Y,e.JL,C.Lr,e.sg,T.tP,I.T7,T.O5,J.SK,C.Nx,x.V,k.r,c.yS],styles:[""]}),b})()},7058:(le,Y,i)=>{i.d(Y,{e:()=>G});var e=i(9808),n=i(4623),o=i(4375),s=i(7008),z=i(7695),g=i(7055),a=i(7462),B=i(8776),c=i(1017),_=i(2359),C=i(6042),T=i(4546),I=i(1894),J=i(3075),x=i(325),k=i(1605),Q=i(7525),U=i(5472),V=i(4889),D=i(7484),L=i(8144),X=i(3618),b=i(5e3),N=i(9180),l=i(2643),F=i(1793),O=i(2683);const $={name:"submit-button",component:(()=>{class S extends B.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275cmp=b.Xpm({type:S,selectors:[["cvc-submit-button-type"]],features:[b.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(ie,ue){1&ie&&(b.TgZ(0,"cvc-form-buttons")(1,"button",0),b._uU(2),b.qZA()()),2&ie&&(b.xp6(1),b.Q6J("disabled",!ue.form.valid),b.xp6(1),b.hij(" ",ue.to.submitLabel," "))},directives:[N.Z,C.ix,l.dQ,F.m,O.w],styles:[""],changeDetection:0}),S})()};var f=i(1825);let R=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=b.oAB({type:S}),S.\u0275inj=b.cJS({imports:[[e.ez,J.UX,B.X0.forChild({types:[$]}),C.sL,o.R,f.A]]}),S})(),G=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=b.oAB({type:S}),S.\u0275inj=b.cJS({imports:[[e.ez,x.Bz,J.UX,c.s,T.U5,_.L,I.Jb,C.sL,Q.j,D.vh,L.zf,X.ZJ,B.X0,s.B,o.R,z.C,g.N,a.o,n.K,k.e,U.r,V.E,R,c.s]]}),S})()},7630:(le,Y,i)=>{i.d(Y,{$G1:()=>Bo,A4J:()=>Qn,A94:()=>rr,AO2:()=>Q,B0s:()=>Ni,B97:()=>En,BQZ:()=>F,BTF:()=>on,Bk6:()=>Rr,BnY:()=>yi,Bo4:()=>rs,Cp0:()=>X,D9L:()=>Ri,Del:()=>Nr,E8d:()=>_,EwB:()=>Li,F3s:()=>oe,FB1:()=>Te,FId:()=>Oi,FJi:()=>ue,FKQ:()=>oi,FOU:()=>$i,Fvz:()=>W,GB2:()=>fr,GYx:()=>Ro,Gbq:()=>M,Hmr:()=>mo,IP1:()=>Vi,IRu:()=>ge,IZ6:()=>Xn,JDX:()=>ie,JQ3:()=>li,KNk:()=>Yo,Kk:()=>Yt,Kmw:()=>Io,L5n:()=>bn,LLl:()=>Ao,LUc:()=>_i,LiH:()=>Yr,Lr0:()=>Ar,MYm:()=>wn,Mgx:()=>C,NQC:()=>H,NbY:()=>fi,OHm:()=>Dn,OIL:()=>pn,OfU:()=>T,Onj:()=>te,P_b:()=>Ut,Q4m:()=>qo,Q_P:()=>Ii,Qtd:()=>kr,Qzn:()=>xn,R8w:()=>J,RMv:()=>mi,ROj:()=>ki,RTy:()=>b,Rdc:()=>_o,SJD:()=>at,SWk:()=>Bi,SrV:()=>ze,Sx0:()=>L,T97:()=>Ko,TNk:()=>Ir,TiL:()=>Hn,Tq1:()=>Kt,Tt7:()=>yo,UIR:()=>Fe,UWf:()=>Wn,Ud2:()=>qt,VZq:()=>Pn,Vj7:()=>Si,VnG:()=>$,Vr2:()=>z,WFw:()=>Ai,WGV:()=>Lr,WOS:()=>Or,WRV:()=>jn,X5f:()=>Cn,Xft:()=>or,YMi:()=>tn,Ybm:()=>sn,ZYZ:()=>fo,Zhw:()=>ko,Zo2:()=>io,Zyn:()=>x,_Aq:()=>V,_Wm:()=>c,_eC:()=>hi,_jb:()=>Zn,aw3:()=>Ki,bgg:()=>So,c$m:()=>Oo,cCu:()=>Sr,cEv:()=>eo,cMj:()=>lr,d4o:()=>Ee,dUU:()=>kt,db2:()=>$r,dwB:()=>hr,eY8:()=>cn,ejK:()=>ar,fow:()=>R,fpJ:()=>ai,fwG:()=>uo,g0X:()=>Br,ghc:()=>zn,gtM:()=>ui,h01:()=>I,huM:()=>Ie,i44:()=>ee,iGM:()=>No,iJT:()=>os,iST:()=>Vt,iXf:()=>qe,io:()=>Tn,iwm:()=>o,jMx:()=>Kr,jw9:()=>pe,k2T:()=>ri,k7O:()=>Jt,kQf:()=>Gn,kQl:()=>P,kq9:()=>k,kqt:()=>l,kv3:()=>Vo,l4w:()=>Ji,lYz:()=>S,lfy:()=>ti,m$d:()=>Jr,m55:()=>N,mII:()=>Lo,mdl:()=>g,mpB:()=>se,nnL:()=>tr,o71:()=>w,oRL:()=>f,otH:()=>Fn,pHu:()=>_r,pP7:()=>y,q1D:()=>qr,q8c:()=>vn,qP7:()=>_e,qf4:()=>so,rJ8:()=>gn,rZD:()=>he,rzy:()=>dn,sBY:()=>yr,sLD:()=>Ur,sfv:()=>O,tI1:()=>D,tJ6:()=>no,td:()=>fe,ti:()=>Mn,tji:()=>qi,tw_:()=>co,u4i:()=>a,uBv:()=>B,ubO:()=>ts,vMt:()=>$o,vRc:()=>Jo,wJ2:()=>U,wRZ:()=>Ui,wbP:()=>Yi,wg3:()=>mr,wpb:()=>Ae,xlL:()=>G,xsC:()=>Uo,yic:()=>De,yqR:()=>Vr,z8D:()=>ur,zwS:()=>ho});var e=i(9444),n=i(5e3),o=(()=>{return(t=o||(o={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",o;var t})(),z=(()=>{return(t=z||(z={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",z;var t})(),g=(()=>{return(t=g||(g={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",g;var t})(),a=(()=>{return(t=a||(a={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.GeneName="GENE_NAME",t.Id="ID",t.Status="STATUS",t.Summary="SUMMARY",t.VariantName="VARIANT_NAME",a;var t})(),B=(()=>{return(t=B||(B={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",B;var t})(),c=(()=>{return(t=c||(c={})).And="AND",t.Or="OR",c;var t})(),_=(()=>{return(t=_||(_={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",_;var t})(),C=(()=>{return(t=C||(C={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",C;var t})(),T=(()=>{return(t=T||(T={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",T;var t})(),I=(()=>{return(t=I||(I={})).Created="CREATED",t.LastModified="LAST_MODIFIED",I;var t})(),J=(()=>{return(t=J||(J={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",J;var t})(),x=(()=>{return(t=x||(x={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",x;var t})(),k=(()=>{return(t=k||(k={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",k;var t})(),Q=(()=>{return(t=Q||(Q={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",Q;var t})(),U=(()=>{return(t=U||(U={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",U;var t})(),V=(()=>{return(t=V||(V={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",V;var t})(),D=(()=>{return(t=D||(D={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",D;var t})(),L=(()=>{return(t=L||(L={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",L;var t})(),X=(()=>{return(t=X||(X={})).ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.GeneSymbol="GENE_SYMBOL",t.Id="ID",t.Status="STATUS",t.VariantName="VARIANT_NAME",t.VariantOrigin="VARIANT_ORIGIN",X;var t})(),b=(()=>{return(t=b||(b={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",b;var t})(),N=(()=>{return(t=N||(N={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",N;var t})(),l=(()=>{return(t=l||(l={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",l;var t})(),F=(()=>{return(t=F||(F={})).Open="OPEN",t.Resolved="RESOLVED",F;var t})(),O=(()=>{return(t=O||(O={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",O;var t})(),W=(()=>{return(t=W||(W={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.VariantCount="variantCount",W;var t})(),$=(()=>{return(t=$||($={})).Eq="EQ",t.Ge="GE",t.Gt="GT",t.Le="LE",t.Lt="LT",t.Ne="NE",$;var t})(),f=(()=>{return(t=f||(f={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",f;var t})(),R=(()=>{return(t=R||(R={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",R;var t})(),G=(()=>{return(t=G||(G={})).Id="ID",t.Name="NAME",G;var t})(),S=(()=>{return(t=S||(S={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",S;var t})(),H=(()=>{return(t=H||(H={})).Read="READ",t.Unread="UNREAD",H;var t})(),ie=(()=>{return(t=ie||(ie={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",ie;var t})(),ue=(()=>{return(t=ue||(ue={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",ue;var t})(),he=(()=>{return(t=he||(he={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",he;var t})(),ze=(()=>{return(t=ze||(ze={})).Asc="ASC",t.Desc="DESC",ze;var t})(),De=(()=>{return(t=De||(De={})).Asco="ASCO",t.Pubmed="PUBMED",De;var t})(),oe=(()=>{return(t=oe||(oe={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",oe;var t})(),pe=(()=>{return(t=pe||(pe={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.GeneName="GENE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",t.VariantName="VARIANT_NAME",pe;var t})(),P=(()=>{return(t=P||(P={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",P;var t})(),te=(()=>{return(t=te||(te={})).Contains="CONTAINS",t.DoesNotContain="DOES_NOT_CONTAIN",t.Eq="EQ",t.Ne="NE",t.StartsWith="STARTS_WITH",te;var t})(),w=(()=>{return(t=w||(w={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",w;var t})(),se=(()=>{return(t=se||(se={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",se;var t})(),ee=(()=>{return(t=ee||(ee={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",ee;var t})(),ge=(()=>{return(t=ge||(ge={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ge;var t})(),_e=(()=>{return(t=_e||(_e={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",_e;var t})(),Te=(()=>{return(t=Te||(Te={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",Te;var t})(),Ee=(()=>{return(t=Ee||(Ee={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",Ee;var t})(),Ie=(()=>{return(t=Ie||(Ie={})).CommonGermline="COMMON_GERMLINE",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",Ie;var t})(),Ae=(()=>{return(t=Ae||(Ae={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",Ae;var t})(),y=(()=>{return(t=y||(y={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.EvidenceScore="evidenceScore",t.VariantName="variantName",y;var t})();const q=e.Ps`
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
    `,E=e.Ps`
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
  flagged
}
    `,ce=e.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ce=e.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Se=e.Ps`
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
    `,$e=e.Ps`
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
    `,be=e.Ps`
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
    `,Qe=e.Ps`
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
  flagged
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
    `,xe=e.Ps`
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
    ${xe}`,Ye=e.Ps`
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
    `,We=e.Ps`
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
    `,Je=e.Ps`
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
    `,Z=e.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,de=e.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,v=e.Ps`
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
    `,m=e.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,ae=e.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,me=e.Ps`
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
    `,Me=e.Ps`
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
    `,Le=e.Ps`
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
    `,Oe=e.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Ue=e.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,Ve=e.Ps`
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
    `,je=e.Ps`
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
    `,Ke=e.Ps`
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
    `,He=e.Ps`
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
    `,ke=e.Ps`
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
    `,et=e.Ps`
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
    `,Xe=e.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,tt=e.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,st=e.Ps`
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
    `,rt=e.Ps`
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
    `,h=e.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,j=e.Ps`
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
    `,A=e.Ps`
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
    `,ne=e.Ps`
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
    `,ve=e.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,ye=e.Ps`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,dt=e.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,nt=e.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,at=e.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,qe=e.Ps`
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
}
    `,ut=e.Ps`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
  }
}
    `,pt=(e.Ps`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,e.Ps`
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
    `),we=e.Ps`
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
    `,mt=e.Ps`
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
    `,Pt=e.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,Nt=e.Ps`
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
    `,xt=e.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Lt=e.Ps`
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
    ${xt}`,Ft=e.Ps`
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
    `,gt=e.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
}
    `,ft=e.Ps`
    fragment DrugsSummaryFields on Drug {
  id
  name
  ncitId
  drugUrl
  drugAliases
  link
}
    `,vt=e.Ps`
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
    `,ht=e.Ps`
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
    `,zt=e.Ps`
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
    `,bt=e.Ps`
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
    `,Rt=e.Ps`
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
    `,Gt=e.Ps`
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
    `,Bt=e.Ps`
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
    `,_t=e.Ps`
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
    `,Ct=e.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,yt=e.Ps`
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
    `,Qt=e.Ps`
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
    `,Tt=e.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,It=e.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Dt=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,lt=e.Ps`
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
    ${Ne}`,St=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Et=e.Ps`
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
    `,Ot=e.Ps`
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
    `,Mt=e.Ps`
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
    `,p=e.Ps`
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
    `,K=e.Ps`
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
    ${p}`,d=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${q}`;let M=(()=>{class t extends e.AE{constructor(r){super(r),this.document=d}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const re=e.Ps`
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
    ${E}`;let fe=(()=>{class t extends e.AE{constructor(r){super(r),this.document=re}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pe=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ce}`;let Fe=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pe}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ot=e.Ps`
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
    ${Ce}`;let Ut=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ot}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wt=e.Ps`
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
    ${Se}`;let Vt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wt}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zt=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${$e}`;let Yt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zt}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wt=e.Ps`
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
    `;let Jt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wt}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jt=e.Ps`
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
    ${Ge}`;let Kt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jt}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ht=e.Ps`
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
    `;let kt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ht}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xt=e.Ps`
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
    ${Be}`;let qt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xt}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const en=e.Ps`
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
    `;let tn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=en}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nn=e.Ps`
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
    ${be}`;let on=(()=>{class t extends e.AE{constructor(r){super(r),this.document=nn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Re}`;let sn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const an=e.Ps`
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
    ${Qe}`;let cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=an}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ln=e.Ps`
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
    ${Ze}`;let dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ln}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const un=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Ye}`;let pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=un}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${We}`;let gn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fn=e.Ps`
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
    ${Je}`;let vn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hn=e.Ps`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${Z}`;let zn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _n=e.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${de}`;let Cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_n}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yn=e.Ps`
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
    ${v}`;let Tn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const In=e.Ps`
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
    `;let Dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=In}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sn=e.Ps`
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
    ${m}`;let En=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Sn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const On=e.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Mn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=On}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const An=e.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Pn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=An}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nn=e.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ae}`;let xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Nn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ln=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${me}`;let Fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ln}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $n=e.Ps`
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
    ${Me}`;let bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$n}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rn=e.Ps`
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
    ${Le}`;let Gn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Rn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bn=e.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Oe}`;let Qn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Un=e.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let wn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Un}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vn=e.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Zn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yn=e.Ps`
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
    ${Ue}`;let Wn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jn=e.Ps`
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
    ${Ve}`;let jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Kn=e.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${je}`;let Hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kn=e.Ps`
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
    ${Ke}`;let Xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qn=e.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${He}`;let eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qn}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const to=e.Ps`
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
    ${ke}`;let no=(()=>{class t extends e.AE{constructor(r){super(r),this.document=to}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oo=e.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${et}`;let io=(()=>{class t extends e.AE{constructor(r){super(r),this.document=oo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ro=e.Ps`
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
    ${it}`;let so=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ro}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ao=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Xe}`;let co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ao}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const lo=e.Ps`
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
    ${tt}`;let uo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=lo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const po=e.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${st}`;let mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=po}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const go=e.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${rt}`;let fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=go}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vo=e.Ps`
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
    ${h}`;let ho=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zo=e.Ps`
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
    ${j}`;let _o=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Co=e.Ps`
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
    `;let yo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Co}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const To=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Io=(()=>{class t extends e.AE{constructor(r){super(r),this.document=To}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Do=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${A}`;let So=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Do}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Eo=e.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Oo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Eo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mo=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Ao=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Mo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Po=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Se}`;let No=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Po}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xo=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${ne}`;let Lo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fo=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let $o=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bo=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Go=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Bo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Go}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qo=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Uo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wo=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let Vo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zo=e.Ps`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${ve}`;let Yo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Zo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wo=e.Ps`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Jo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jo=e.Ps`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${ye}`;let Ko=(()=>{class t extends e.mm{constructor(r){super(r),this.document=jo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ho=e.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let ko=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ho}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xo=e.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${dt}`;let qo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xo}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ei=e.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ei}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ni=e.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let oi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ni}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ii=e.Ps`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let ri=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ii}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const si=e.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let ai=(()=>{class t extends e.AE{constructor(r){super(r),this.document=si}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ci=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let li=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ci}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const di=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let ui=(()=>{class t extends e.AE{constructor(r){super(r),this.document=di}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pi=e.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${at}`;let mi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=pi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gi=e.Ps`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${nt}`;let fi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vi=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;let hi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zi=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${ut}`;let _i=(()=>{class t extends e.mm{constructor(r){super(r),this.document=zi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ct}`;const Ci=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let yi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ci}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ti=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${pt}`;let Ii=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ti}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Di=e.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Si=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Di}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ei=e.Ps`
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
    `;let Oi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ei}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${we}`;const Mi=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Ai=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Mi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pi=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Ni=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Pi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xi=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Li=(()=>{class t extends e.mm{constructor(r){super(r),this.document=xi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fi=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${mt}`;let $i=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bi=e.Ps`
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
    `;let Ri=(()=>{class t extends e.mm{constructor(r){super(r),this.document=bi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${Pt}`;const Gi=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Bi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Gi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qi=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Ui=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Qi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wi=e.Ps`
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
    `;let Vi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=wi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zi=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Yi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Zi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wi=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Ji=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ji=e.Ps`
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
    `;let Ki=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ji}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hi=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Nt}`;let ki=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xi=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let qi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Xi}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const er=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Lt}`;let tr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=er}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nr=e.Ps`
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
    `;let or=(()=>{class t extends e.mm{constructor(r){super(r),this.document=nr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ir=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Ft}`;let rr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ir}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sr=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${$t}`;let ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=sr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cr=e.Ps`
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
    `;let lr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const dr=e.Ps`
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
    `;let ur=(()=>{class t extends e.AE{constructor(r){super(r),this.document=dr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pr=e.Ps`
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
    `;let mr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${gt}`;const gr=e.Ps`
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
    `;let fr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vr=e.Ps`
    query DrugsSummary($drugId: Int!) {
  drug(id: $drugId) {
    ...DrugsSummaryFields
  }
}
    ${ft}`;let hr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zr=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${vt}`;let _r=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cr=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${ht}`;let yr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tr=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${zt}`;let Ir=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dr=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${bt}`;let Sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Er=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Rt}`;let Or=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Er}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mr=e.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Gt}`;let Ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pr=e.Ps`
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
    ${Bt}`;let Nr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xr=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let Lr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fr=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${_t}`;let $r=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const br=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Ct}`;let Rr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=br}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gr=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${yt}`;let Br=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qr=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Qt}`;let Ur=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wr=e.Ps`
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
    ${Dt}
${It}
${Tt}
${lt}`;let Vr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zr=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${lt}`;let Yr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Zr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wr=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${St}`;let Jr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Wr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jr=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Kr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=jr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hr=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Et}`;let kr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const Xr=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ot}`;let qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xr}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const es=e.Ps`
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
    `;let ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=es}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ns=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Mt}`;let os=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ns}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const is=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${K}`;let rs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=is}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(e._M))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(le,Y,i)=>{i.r(Y),i.d(Y,{LayoutModule:()=>Mt});var e=i(9808),n=i(325),o=i(5e3),s=i(9350),z=i(8929),g=i(7625),a=i(655),B=i(4090),c=i(1721),_=i(4219),C=i(925),T=i(5017),I=i(226),J=i(5113);const x=["*"],k=["nz-sider-trigger",""];function Q(p,K){}function U(p,K){if(1&p&&(o.ynx(0),o.YNc(1,Q,0,0,"ng-template",3),o.BQk()),2&p){const d=o.oxw(),M=o.MAs(5);o.xp6(1),o.Q6J("ngTemplateOutlet",d.nzZeroTrigger||M)}}function V(p,K){}function D(p,K){if(1&p&&(o.ynx(0),o.YNc(1,V,0,0,"ng-template",3),o.BQk()),2&p){const d=o.oxw(),M=o.MAs(3);o.xp6(1),o.Q6J("ngTemplateOutlet",d.nzTrigger||M)}}function L(p,K){if(1&p&&o._UZ(0,"i",5),2&p){const d=o.oxw(2);o.Q6J("nzType",d.nzCollapsed?"right":"left")}}function X(p,K){if(1&p&&o._UZ(0,"i",5),2&p){const d=o.oxw(2);o.Q6J("nzType",d.nzCollapsed?"left":"right")}}function b(p,K){if(1&p&&(o.YNc(0,L,1,1,"i",4),o.YNc(1,X,1,1,"i",4)),2&p){const d=o.oxw();o.Q6J("ngIf",!d.nzReverseArrow),o.xp6(1),o.Q6J("ngIf",d.nzReverseArrow)}}function N(p,K){1&p&&o._UZ(0,"i",6)}function l(p,K){if(1&p){const d=o.EpF();o.TgZ(0,"div",2),o.NdJ("click",function(){o.CHM(d);const re=o.oxw();return re.setCollapsed(!re.nzCollapsed)}),o.qZA()}if(2&p){const d=o.oxw();o.Q6J("matchBreakPoint",d.matchBreakPoint)("nzCollapsedWidth",d.nzCollapsedWidth)("nzCollapsed",d.nzCollapsed)("nzBreakpoint",d.nzBreakpoint)("nzReverseArrow",d.nzReverseArrow)("nzTrigger",d.nzTrigger)("nzZeroTrigger",d.nzZeroTrigger)("siderWidth",d.widthSetting)}}let F=(()=>{class p{constructor(d,M){this.elementRef=d,this.renderer=M,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(o.SBq),o.Y36(o.Qsj))},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:x,decls:1,vars:0,template:function(d,M){1&d&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),W=(()=>{class p{constructor(d,M){this.elementRef=d,this.renderer=M,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(o.SBq),o.Y36(o.Qsj))},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:x,decls:1,vars:0,template:function(d,M){1&d&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),$=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(d,M){2&d&&(o.Udp("width",M.isNormalTrigger?M.siderWidth:null),o.ekj("ant-layout-sider-trigger",M.isNormalTrigger)("ant-layout-sider-zero-width-trigger",M.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",M.isZeroTrigger&&M.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",M.isZeroTrigger&&!M.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[o.TTD],attrs:k,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(d,M){1&d&&(o.YNc(0,U,2,1,"ng-container",0),o.YNc(1,D,2,1,"ng-container",0),o.YNc(2,b,2,2,"ng-template",null,1,o.W1O),o.YNc(4,N,1,0,"ng-template",null,2,o.W1O)),2&d&&(o.Q6J("ngIf",M.isZeroTrigger),o.xp6(1),o.Q6J("ngIf",M.isNormalTrigger))},directives:[e.O5,e.tP,T.Ls],encapsulation:2,changeDetection:0}),p})(),f=(()=>{class p{constructor(d,M,re){this.platform=d,this.cdr=M,this.breakpointService=re,this.destroy$=new z.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new o.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,c.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(d){d!==this.nzCollapsed&&(this.nzCollapsed=d,this.nzCollapsedChange.emit(d),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(B.ow,!0).pipe((0,g.R)(this.destroy$)).subscribe(d=>{const M=this.nzBreakpoint;M&&(0,c.ov)().subscribe(()=>{this.matchBreakPoint=!d[M],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(d){const{nzCollapsed:M,nzCollapsedWidth:re,nzWidth:fe}=d;(M||re||fe)&&this.updateStyleMap(),M&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(C.t4),o.Y36(o.sBO),o.Y36(B.r3))},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(d,M,re){if(1&d&&o.Suo(re,_.wO,5),2&d){let fe;o.iGM(fe=o.CRH())&&(M.nzMenuDirective=fe.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(d,M){2&d&&(o.Udp("flex",M.flexSetting)("max-width",M.widthSetting)("min-width",M.widthSetting)("width",M.widthSetting),o.ekj("ant-layout-sider-zero-width",M.nzCollapsed&&0===M.nzCollapsedWidth)("ant-layout-sider-light","light"===M.nzTheme)("ant-layout-sider-dark","dark"===M.nzTheme)("ant-layout-sider-collapsed",M.nzCollapsed)("ant-layout-sider-has-trigger",M.nzCollapsible&&null!==M.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[o.TTD],ngContentSelectors:x,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(d,M){1&d&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA(),o.YNc(2,l,1,8,"div",1)),2&d&&(o.xp6(2),o.Q6J("ngIf",M.nzCollapsible&&null!==M.nzTrigger))},directives:[$,e.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,c.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,c.yF)()],p.prototype,"nzCollapsed",void 0),p})(),R=(()=>{class p{constructor(d){this.directionality=d,this.dir="ltr",this.destroy$=new z.xQ}ngOnInit(){var d;this.dir=this.directionality.value,null===(d=this.directionality.change)||void 0===d||d.pipe((0,g.R)(this.destroy$)).subscribe(M=>{this.dir=M})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(I.Is,8))},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(d,M,re){if(1&d&&o.Suo(re,f,4),2&d){let fe;o.iGM(fe=o.CRH())&&(M.listOfNzSiderComponent=fe)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(d,M){2&d&&o.ekj("ant-layout-rtl","rtl"===M.dir)("ant-layout-has-sider",M.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:x,decls:1,vars:0,template:function(d,M){1&d&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),G=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[I.vT,e.ez,T.PV,J.xu,C.ud]]}),p})();var S=i(404),H=i(1894),ie=i(7630),ue=i(8054),he=i(353),ze=i(8514),De=i(8896),pe=i(5254),P=i(3240),te=i(1307),w=i(3164),se=i(7545),ee=i(4850),ge=i(2198),_e=i(5778),Te=i(3075),Ee=i(3618),Ie=i(6949);function Ae(p,K){if(1&p&&(o.TgZ(0,"span",7),o._uU(1," \u2014 "),o._UZ(2,"span",5),o.qZA()),2&p){const d=o.oxw().$implicit;o.xp6(2),o.s9C("innerHTML",d.result.matchingText,o.oJD)}}function y(p,K){if(1&p&&(o.TgZ(0,"nz-option",3),o._UZ(1,"i",4)(2,"span",5),o.YNc(3,Ae,3,1,"span",6),o.qZA()),2&p){const d=K.$implicit,M=o.oxw();o.Q6J("nzLabel",d.text)("nzValue",d.result),o.xp6(1),o.Q6J("nzType",M.iconNameForResult(d.result)),o.xp6(1),o.s9C("innerHTML",d.result.name,o.oJD),o.xp6(1),o.Q6J("ngIf",d.result.matchingText)}}function q(p,K){1&p&&(o.TgZ(0,"nz-option",8),o._UZ(1,"i",9),o._uU(2," Loading Data... "),o.qZA())}let E=(()=>{class p{constructor(d,M){this.gql=d,this.router=M,this.onSearch$=new z.xQ,this.onSelect$=new z.xQ,this.response$=this.onSearch$.pipe((0,te.T)(1),(0,w.p)(300,he.z,{leading:!1,trailing:!0}),(0,se.w)(Pe=>function oe(p,K=De.E,d=De.E){return(0,ze.P)(()=>p()?K:d)}(()=>void 0===this.queryRef,(0,ze.P)(()=>re(Pe)),(0,ze.P)(()=>fe(Pe))))),this.isLoading$=this.response$.pipe((0,ee.U)(Pe=>Pe.loading),(0,ge.h)(P.ep),(0,_e.x)()),this.result$=this.response$.pipe((0,ee.U)(Pe=>{var Fe;return null===(Fe=Pe.data)||void 0===Fe?void 0:Fe.search}),(0,ge.h)(P.ep)),this.option$=this.result$.pipe((0,ee.U)(Pe=>{const Fe=[];return Pe.forEach(ot=>{ot&&Fe.push({text:ot.name,value:ot.id.toString(),result:ot})}),Fe})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const re=Pe=>(this.queryRef=this.gql.watch({query:Pe}),this.queryRef.valueChanges),fe=Pe=>(0,pe.D)(this.queryRef.refetch({query:Pe}))}set selectedOpt(d){this._selectedOpt=d}get selectedOpt(){return this._selectedOpt}iconNameForResult(d){return d.resultType===ie.rZD.EvidenceItem?"civic:evidence":`civic:${d.resultType.toLowerCase()}`}urlForResult(d){let M;switch(d.resultType){case ie.rZD.VariantGroup:M="variant-groups";break;case ie.rZD.EvidenceItem:M="evidence";break;default:M=`${d.resultType.toLowerCase()}s`}return`/${M}/${d.id}/summary`}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(ie.ghc),o.Y36(n.F0))},p.\u0275cmp=o.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(d,M){if(1&d&&o.Gf(ue.Vq,7),2&d){let re;o.iGM(re=o.CRH())&&(M.selectNode=re.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(d,M){1&d&&(o.TgZ(0,"nz-select",0),o.NdJ("ngModelChange",function(fe){return M.selectedOpt=fe})("ngModelChange",function(fe){return M.onSelect$.next(fe)})("nzOnSearch",function(fe){return M.onSearch$.next(fe)}),o.YNc(1,y,4,5,"nz-option",1),o.ALo(2,"ngrxPush"),o.YNc(3,q,3,0,"nz-option",2),o.ALo(4,"ngrxPush"),o.qZA()),2&d&&(o.Q6J("ngModel",M.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),o.xp6(1),o.Q6J("ngForOf",o.lcZ(2,6,M.option$)),o.xp6(2),o.Q6J("ngIf",o.lcZ(4,8,M.isLoading$)))},directives:[ue.Vq,Te.JJ,Te.On,e.sg,ue.Ip,T.Ls,e.O5,Ee.ZU],pipes:[Ie.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var ce=i(1912),Ce=i(1059),Se=i(2340),$e=i(8144),Ge=i(6042),Be=i(2643),Ne=i(2683),be=i(3677),Re=i(4401),Qe=i(7881),xe=i(3640),Ze=i(8785),Ye=i(3434);function We(p,K){if(1&p&&(o.TgZ(0,"button",26),o._uU(1," Add "),o._UZ(2,"i",27),o.qZA()),2&p){o.oxw(2);const d=o.MAs(15);o.Q6J("nzDropdownMenu",d)}}const Je=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function Z(p,K){if(1&p&&(o.TgZ(0,"nz-badge",28)(1,"button",29),o._UZ(2,"i",30),o.qZA()()),2&p){const d=o.oxw().ngrxLet,M=o.oxw().ngIf;o.Q6J("nzCount",d)("nzOverflowCount",999)("nzStyle",o.DdM(4,Je)),o.xp6(1),o.MGl("routerLink","/users/",M.id,"/notifications")}}const de=function(p){return{"update-coi":p}};function v(p,K){if(1&p&&o._UZ(0,"cvc-user-avatar",36),2&p){const d=o.oxw(3).ngIf;o.Q6J("user",d)("size",22)("ngClass",o.VKq(3,de,d.invalidCoi))}}function m(p,K){if(1&p&&(o.TgZ(0,"div",37),o._uU(1),o.qZA()),2&p){const d=o.oxw(3).ngIf;o.xp6(1),o.Oqu(d.username)}}function ae(p,K){1&p&&o._UZ(0,"i",27)}function me(p,K){if(1&p&&(o.TgZ(0,"button",31)(1,"nz-space",32),o.YNc(2,v,1,5,"cvc-user-avatar",33),o.YNc(3,m,2,1,"div",34),o.YNc(4,ae,1,0,"i",35),o.qZA()()),2&p){o.oxw(2);const d=o.MAs(3);o.Q6J("nzDropdownMenu",d)}}function Me(p,K){1&p&&(o.TgZ(0,"nz-space",22),o.YNc(1,We,3,1,"button",23),o.YNc(2,Z,3,5,"nz-badge",24),o.YNc(3,me,5,1,"button",25),o.qZA())}function Le(p,K){if(1&p){const d=o.EpF();o.TgZ(0,"li",17)(1,"button",38),o.NdJ("click",function(){return o.CHM(d),o.oxw(2).coiUpdateModalVisible=!0}),o._UZ(2,"i",39),o._uU(3," Please update COI statement "),o.qZA()()}}function Oe(p,K){1&p&&o._UZ(0,"li",14)}function Ue(p,K){1&p&&(o.TgZ(0,"li",40)(1,"a",41),o._uU(2," Admin Console "),o.qZA()())}function Ve(p,K){1&p&&(o.TgZ(0,"li",42)(1,"a",43),o._uU(2," Background Workers "),o.qZA()())}function je(p,K){if(1&p){const d=o.EpF();o.TgZ(0,"li",17)(1,"a",44),o.NdJ("click",function(){return o.CHM(d),o.oxw(2).addVariantModalVisible=!0}),o._uU(2," Variant "),o.qZA()()}}const Ke=function(p){return["/users",p]};function He(p,K){if(1&p){const d=o.EpF();o.ynx(0),o.YNc(1,Me,4,0,"nz-space",6),o.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),o.YNc(5,Le,4,0,"li",9),o.YNc(6,Oe,1,0,"li",10),o.TgZ(7,"li",11),o._uU(8," Your Profile "),o.qZA(),o.YNc(9,Ue,3,0,"li",12),o.YNc(10,Ve,3,0,"li",13),o._UZ(11,"li",14),o.TgZ(12,"li",15),o.NdJ("click",function(){return o.CHM(d),o.oxw().signOut()}),o._uU(13,"Sign Out"),o.qZA()()(),o.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),o._uU(19," Evidence Item "),o.qZA()(),o.TgZ(20,"li",17)(21,"a",19),o._uU(22," Assertion "),o.qZA()(),o.TgZ(23,"li",17)(24,"a",20),o._uU(25," Source Suggestion "),o.qZA()(),o.YNc(26,je,3,0,"li",9),o.TgZ(27,"li",17)(28,"a",21),o._uU(29," Variant Group "),o.qZA()()()(),o.BQk()}if(2&p){const d=K.ngIf,M=o.oxw();o.xp6(1),o.Q6J("ngrxLet",M.unreadCount$),o.xp6(4),o.Q6J("ngIf",d.invalidCoi),o.xp6(1),o.Q6J("ngIf",d.invalidCoi),o.xp6(1),o.Q6J("routerLink",o.VKq(7,Ke,d.id)),o.xp6(2),o.Q6J("ngIf",d.isAdmin),o.xp6(1),o.Q6J("ngIf",d.isAdmin),o.xp6(16),o.Q6J("ngIf",d.isEditor)}}function ke(p,K){1&p&&(o.TgZ(0,"span"),o._uU(1,"Update your Conflict of Interest Statement"),o.qZA())}function et(p,K){if(1&p){const d=o.EpF();o.TgZ(0,"cvc-user-coi-form",45),o.NdJ("coiUpdatedEvent",function(){return o.CHM(d),o.oxw().coiUpdated()}),o.qZA()}}function it(p,K){1&p&&(o.TgZ(0,"span"),o._uU(1,"Add New Variant"),o.qZA())}function Xe(p,K){1&p&&o._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class p{constructor(d,M){this.queryService=d,this.unreadCountGql=M,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Se.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,Ce.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,ee.U)(({data:re})=>re.notifications.unreadCount),(0,Ce.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(s.a),o.Y36(ie.Kmw))},p.\u0275cmp=o.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(d,M){if(1&d&&(o.YNc(0,He,30,9,"ng-container",0),o.ALo(1,"ngrxPush"),o.TgZ(2,"nz-modal",1),o.NdJ("nzVisibleChange",function(fe){return M.coiUpdateModalVisible=fe})("nzOnCancel",function(){return M.handleCoiModalCancel()}),o.YNc(3,ke,2,0,"ng-template",null,2,o.W1O),o.YNc(5,et,1,0,"ng-template",null,3,o.W1O),o.qZA(),o.TgZ(7,"nz-modal",1),o.NdJ("nzVisibleChange",function(fe){return M.addVariantModalVisible=fe})("nzOnCancel",function(){return M.addVariantModalVisible=!1}),o.YNc(8,it,2,0,"ng-template",null,4,o.W1O),o.YNc(10,Xe,1,0,"ng-template",null,5,o.W1O),o.qZA()),2&d){const re=o.MAs(4),fe=o.MAs(6),Pe=o.MAs(9),Fe=o.MAs(11);o.Q6J("ngIf",o.lcZ(1,9,M.viewer$)),o.xp6(2),o.Q6J("nzVisible",M.coiUpdateModalVisible)("nzContent",fe)("nzTitle",re)("nzFooter",null),o.xp6(5),o.Q6J("nzVisible",M.addVariantModalVisible)("nzContent",Fe)("nzTitle",Pe)("nzFooter",null)}},directives:[e.O5,Ie.eJ,$e.NU,$e.$1,Ge.ix,Be.dQ,Ne.w,be.wA,be.cm,T.Ls,Re.x7,n.rH,Qe.L,e.mk,be.RR,_.wO,_.r9,_.YV,n.yS,xe.du,Ze.t,Ye.G],pipes:[Ie.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function st(p,K){1&p&&o._UZ(0,"img",60)}function rt(p,K){1&p&&o._UZ(0,"img",61)}function h(p,K){1&p&&o._UZ(0,"cvc-login-button")}function j(p,K){1&p&&o._UZ(0,"cvc-viewer-button")}const A=function(p){return{"is-collapsed":p}},ve=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(d){this.viewerService=d,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(s.a))},p.\u0275cmp=o.Xpm({type:p,selectors:[["cvc-layout"]],decls:129,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(d,M){1&d&&(o.TgZ(0,"nz-layout",0)(1,"nz-sider",1),o.NdJ("nzCollapsedChange",function(fe){return M.isCollapsed=fe}),o.TgZ(2,"a",2)(3,"div",3),o.YNc(4,st,1,0,"img",4),o.YNc(5,rt,1,0,"img",5),o.qZA()(),o.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),o._UZ(10,"i",9),o.TgZ(11,"span")(12,"a",10),o._uU(13,"Assertions"),o.qZA()()(),o.TgZ(14,"li",8),o._UZ(15,"i",11),o.TgZ(16,"span")(17,"a",12),o._uU(18,"Evidence"),o.qZA()()(),o.TgZ(19,"li",8),o._UZ(20,"i",13),o.TgZ(21,"span")(22,"a",14),o._uU(23,"Genes"),o.qZA()()(),o.TgZ(24,"li",8),o._UZ(25,"i",15),o.TgZ(26,"span")(27,"a",16),o._uU(28,"Variants"),o.qZA()()(),o.TgZ(29,"li",8),o._UZ(30,"i",17),o.TgZ(31,"span")(32,"a",18),o._uU(33,"Variant Groups"),o.qZA()()()()(),o.TgZ(34,"li",8),o._UZ(35,"i",19),o.TgZ(36,"span")(37,"a",20),o._uU(38,"Clinical Trials"),o.qZA()()(),o.TgZ(39,"li",8),o._UZ(40,"i",21),o.TgZ(41,"span")(42,"a",22),o._uU(43,"Diseases"),o.qZA()()(),o.TgZ(44,"li",8),o._UZ(45,"i",23),o.TgZ(46,"span")(47,"a",24),o._uU(48,"Drugs"),o.qZA()()(),o.TgZ(49,"li",8),o._UZ(50,"i",25),o.TgZ(51,"span")(52,"a",26),o._uU(53,"Phenotypes"),o.qZA()()(),o.TgZ(54,"li",8),o._UZ(55,"i",27),o.TgZ(56,"span")(57,"a",28),o._uU(58,"Sources"),o.qZA()()(),o.TgZ(59,"li",8),o._UZ(60,"i",29),o.TgZ(61,"span")(62,"a",30),o._uU(63,"Variant Types"),o.qZA()()(),o.TgZ(64,"li",7)(65,"ul")(66,"li",8),o._UZ(67,"i",31),o.TgZ(68,"span")(69,"a",32),o._uU(70," Activity "),o.qZA()()(),o.TgZ(71,"li",8),o._UZ(72,"i",33),o.TgZ(73,"span")(74,"a",34),o._uU(75,"Queues"),o.qZA()()(),o.TgZ(76,"li",8),o._UZ(77,"i",35),o.TgZ(78,"span")(79,"a",36),o._uU(80,"Search"),o.qZA()()()()(),o.TgZ(81,"li",7)(82,"ul")(83,"li",8),o._UZ(84,"i",37),o.TgZ(85,"span")(86,"a",38),o._uU(87,"Contributors"),o.qZA()()(),o.TgZ(88,"li",8),o._UZ(89,"i",39),o.TgZ(90,"span")(91,"a",40),o._uU(92,"Organizations"),o.qZA()()()()(),o.TgZ(93,"li",7)(94,"ul")(95,"li",8),o._UZ(96,"i",41),o.TgZ(97,"span")(98,"a",42),o._uU(99,"Data Releases"),o.qZA()()()()()(),o.TgZ(100,"div",43),o._UZ(101,"img",44)(102,"img",45),o.qZA()(),o.TgZ(103,"nz-layout",46)(104,"nz-header")(105,"div",47)(106,"div",48)(107,"span",49),o.NdJ("click",function(){return M.isCollapsed=!M.isCollapsed}),o._UZ(108,"i",50),o.qZA()(),o.TgZ(109,"div",51),o._UZ(110,"cvc-quicksearch"),o.qZA(),o.TgZ(111,"div",52)(112,"ul",53)(113,"li",54)(114,"a",55),o._uU(115,"Home"),o.qZA()(),o.TgZ(116,"li",54)(117,"a",56),o._uU(118,"About CIViC"),o.qZA()(),o.TgZ(119,"li",54)(120,"a",57),o._uU(121,"Help"),o.qZA()()()(),o.TgZ(122,"div",58),o.YNc(123,h,1,0,"cvc-login-button",59),o.ALo(124,"async"),o.YNc(125,j,1,0,"cvc-viewer-button",59),o.ALo(126,"async"),o.qZA()()(),o.TgZ(127,"nz-content"),o._UZ(128,"router-outlet"),o.qZA()()()),2&d&&(o.xp6(1),o.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",M.isCollapsed)("nzTrigger",null),o.xp6(2),o.Q6J("ngClass",o.VKq(39,A,M.isCollapsed)),o.xp6(1),o.Q6J("ngIf",!M.isCollapsed),o.xp6(1),o.Q6J("ngIf",M.isCollapsed),o.xp6(1),o.Q6J("ngClass",o.VKq(41,A,M.isCollapsed))("nzInlineCollapsed",M.isCollapsed),o.xp6(1),o.Q6J("nzTitle",M.isCollapsed?"KNOW":"KNOWLEDGEBASE"),o.xp6(2),o.Q6J("nzTooltipTitle",M.isCollapsed?"Assertions":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Evidence":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Genes":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Variants":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Variant Groups":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Clinical Trials":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Diseases":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Drugs":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Phenotypes":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Sources":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Variant Types":""),o.xp6(5),o.Q6J("nzTitle",M.isCollapsed?"CURATE":"CURATION"),o.xp6(2),o.Q6J("nzTooltipTitle",M.isCollapsed?"Activity":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Pending Queues":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Search":""),o.xp6(5),o.Q6J("nzTitle",M.isCollapsed?"COMM":"COMMUNITY"),o.xp6(2),o.Q6J("nzTooltipTitle",M.isCollapsed?"Users":""),o.xp6(5),o.Q6J("nzTooltipTitle",M.isCollapsed?"Organizations":""),o.xp6(5),o.Q6J("nzTitle",M.isCollapsed?"RES":"RESOURCES"),o.xp6(2),o.Q6J("nzTooltipTitle",M.isCollapsed?"Data Releases":""),o.xp6(5),o.Q6J("ngClass",o.VKq(43,A,M.isCollapsed)),o.xp6(3),o.Q6J("ngClass",o.VKq(45,A,M.isCollapsed)),o.xp6(5),o.Q6J("nzType",M.isCollapsed?"menu-unfold":"menu-fold"),o.xp6(15),o.Q6J("ngIf",o.lcZ(124,35,M.signedOut$)),o.xp6(2),o.Q6J("ngIf",o.lcZ(126,37,M.signedIn$)))},directives:[R,f,n.yS,e.mk,e.O5,_.wO,_.uA,_.r9,S.SY,T.Ls,W,H.SK,H.t3,E,ce.s,tt,F,n.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(4184),i.e(2033),i.e(8829),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(1192),i.e(7142),i.e(6659)]).then(i.bind(i,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(2395)]).then(i.bind(i,233)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8422)]).then(i.bind(i,1592)).then(p=>p.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(1192),i.e(216)]).then(i.bind(i,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(5839),i.e(8482),i.e(9160),i.e(8592),i.e(9987)]).then(i.bind(i,9040)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(6724),i.e(55),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(3521)]).then(i.bind(i,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(4721)]).then(i.bind(i,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(6724),i.e(55),i.e(4184),i.e(2043),i.e(3278),i.e(2033),i.e(7142),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(6724),i.e(55),i.e(3883),i.e(3278),i.e(8592),i.e(7062)]).then(i.bind(i,684)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(8945),i.e(5839),i.e(9931),i.e(8482),i.e(9397),i.e(1192),i.e(6724),i.e(55),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(8592),i.e(8486)]).then(i.bind(i,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(7064),i.e(6256),i.e(5839),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(5839),i.e(8482),i.e(9160),i.e(1750),i.e(8592),i.e(2388)]).then(i.bind(i,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(5839),i.e(8482),i.e(9160),i.e(1750),i.e(4729)]).then(i.bind(i,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(8945),i.e(9931),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(9005)]).then(i.bind(i,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(5839),i.e(4579)]).then(i.bind(i,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let ye=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[n.Bz.forChild(ve)],n.Bz]}),p})();var dt=i(1017),nt=i(1047),at=i(4546),qe=i(2845),ct=i(4832),ut=i(969),At=i(2994),pt=i(8583),we=i(1159),mt=i(7429);const _t={provide:Te.JU,useExisting:(0,o.Gpc)(()=>yt),multi:!0};let yt=(()=>{class p{constructor(d,M,re,fe,Pe,Fe){this.ngZone=d,this.elementRef=M,this.overlay=re,this.viewContainerRef=fe,this.nzInputGroupWhitSuffixOrPrefixDirective=Pe,this.document=Fe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new z.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,g.R)(this.destroy$)).subscribe(d=>{"void"===d.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(d){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(d)))}registerOnChange(d){this.onChange=d}registerOnTouched(d){this.onTouched=d}setDisabledState(d){this.elementRef.nativeElement.disabled=d,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(d){const M=d.keyCode,re=M===we.LH||M===we.JH;M===we.hY&&d.preventDefault(),!this.panelOpen||M!==we.hY&&M!==we.Mf?this.panelOpen&&M===we.K5?this.nzAutocomplete.showPanel&&(d.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&re&&this.nzAutocomplete.showPanel&&(d.stopPropagation(),d.preventDefault(),M===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(d){const M=d.target,re=this.document;let fe=M.value;"number"===M.type&&(fe=""===fe?null:parseFloat(fe)),this.previousValue!==fe&&(this.previousValue=fe,this.onChange(fe),this.canOpen()&&re.activeElement===d.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,At.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,pt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(d=>{this.setValueAndClose(d)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ge.h)(d=>!this.elementRef.nativeElement.contains(d.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Ct(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new mt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,g.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const d=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(d).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const d=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==d?(this.nzAutocomplete.setActiveItem(d),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(d){const M=d.nzValue;this.setTriggerValue(d.getLabel()),this.onChange(M),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(d){const M=this.nzAutocomplete.getOption(d),re=M?M.getLabel():d;this.elementRef.nativeElement.value=null!=re?re:"",this.nzAutocomplete.nzBackfill||(this.previousValue=re)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const d=this.elementRef.nativeElement;return!d.readOnly&&!d.disabled}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(o.R0b),o.Y36(o.SBq),o.Y36(qe.aV),o.Y36(o.s_b),o.Y36(nt.ke,8),o.Y36(e.K0,8))},p.\u0275dir=o.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(d,M){1&d&&o.NdJ("focusin",function(){return M.handleFocus()})("blur",function(){return M.handleBlur()})("input",function(fe){return M.handleInput(fe)})("keydown",function(fe){return M.handleKeydown(fe)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[o._Bn([_t])]}),p})(),Tt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[I.vT,e.ez,qe.U8,Te.u5,ut.T,ct.g,nt.o7]]}),p})(),It=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[e.ez,Te.u5,n.Bz,Ie.WG,Ee.ZJ,ue.LV,nt.o7,at.U5,T.PV,Tt]]}),p})();var Dt=i(1844),lt=i(5473),St=i(330),Et=i(7058);let Ot=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[e.ez,Ie.WG,be.b1,n.Bz,Ge.sL,$e.zf,T.PV,Re.mS,S.cg,xe.Qp,lt.H,St.e,Et.e]]}),p})(),Mt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[e.ez,ye,T.PV,H.Jb,G,_.ip,S.cg,Ee.ZJ,dt.s,Dt.B,Ot,It]]}),p})()},3240:(le,Y,i)=>{function e(a){return null!=a}i.d(Y,{ep:()=>e})},373:(le,Y,i)=>{i.d(Y,{j:()=>n});var e=i(4850);function n(...s){const z=s.length;if(0===z)throw new Error("list of properties cannot be empty.");return g=>(0,e.U)(function o(s,z){return a=>{let B=a;for(let c=0;c<z;c++){const _=null!=B?B[s[c]]:void 0;if(void 0===_)return;B=_}return B}}(s,z))(g)}},3164:(le,Y,i)=>{i.d(Y,{p:()=>a});var e=i(3489),n=i(353);const o={leading:!0,trailing:!1};function a(C,T=n.P,I=o){return J=>J.lift(new B(C,T,I.leading,I.trailing))}class B{constructor(T,I,J,x){this.duration=T,this.scheduler=I,this.leading=J,this.trailing=x}call(T,I){return I.subscribe(new c(T,this.duration,this.scheduler,this.leading,this.trailing))}}class c extends e.L{constructor(T,I,J,x,k){super(T),this.duration=I,this.scheduler=J,this.leading=x,this.trailing=k,this._hasTrailingValue=!1,this._trailingValue=null}_next(T){this.throttled?this.trailing&&(this._trailingValue=T,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(_,this.duration,{subscriber:this})),this.leading?this.destination.next(T):this.trailing&&(this._trailingValue=T,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const T=this.throttled;T&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),T.unsubscribe(),this.remove(T),this.throttled=null)}}function _(C){const{subscriber:T}=C;T.clearThrottle()}},444:(le,Y,i)=>{function e(N){return N!==String(parseFloat(N))}i.d(Y,{o6:()=>b});var z=Object.getOwnPropertyNames?function n(N){return Object.getOwnPropertyNames(N).filter(function(l){return N.propertyIsEnumerable(l)&&e(l)})}:Object.keys?function o(N){return Object.keys(N).filter(e)}:function s(N){var l=[];for(var F in N)N.hasOwnProperty(F)&&N.propertyIsEnumerable(F)&&e(F)&&l.push(F);return l},g=function(){function N(l){this.enumObj=l,this.keysList=Object.freeze(z(l));for(var F=this.keysList.length,O=new Array(F),W=new Map,$=0;$<F;++$){var f=this.keysList[$],R=l[f];O[$]=R,W.set(R,f),this[$]=Object.freeze([f,R])}this.valuesList=Object.freeze(O),this.keysByValueMap=W,this.size=this.length=F,Object.freeze(this)}return N.prototype.toString=function(){return"[object EnumWrapper]"},N.prototype.keys=function(){var l,F=this,O=0;return(l={next:function(){var $={done:O>=F.length,value:F.keysList[O]};return++O,$}})[Symbol.iterator]=function(){return this},l},N.prototype.values=function(){var l,F=this,O=0;return(l={next:function(){var $={done:O>=F.length,value:F.valuesList[O]};return++O,$}})[Symbol.iterator]=function(){return this},l},N.prototype.entries=function(){var l,F=this,O=0;return(l={next:function(){var $={done:O>=F.length,value:F[O]};return++O,$}})[Symbol.iterator]=function(){return this},l},N.prototype[Symbol.iterator]=function(){return this.entries()},N.prototype.forEach=function(l,F){for(var O=this.length,W=0;W<O;++W){var $=this[W];l.call(F,$[1],$[0],this,W)}},N.prototype.map=function(l,F){for(var O=this.length,W=new Array(O),$=0;$<O;++$){var f=this[$];W[$]=l.call(F,f[1],f[0],this,$)}return W},N.prototype.getKeys=function(){return this.keysList.slice()},N.prototype.getValues=function(){return this.valuesList.slice()},N.prototype.getEntries=function(){return Array.prototype.slice.call(this)},N.prototype.indexOfKey=function(l){return this.keysList.indexOf(l)},N.prototype.indexOfValue=function(l){return this.valuesList.indexOf(l)},N.prototype.isKey=function(l){return null!=l&&e(l)&&this.enumObj.hasOwnProperty(l)},N.prototype.asKeyOrThrow=function(l){if(this.isKey(l))return l;throw new Error("Unexpected key: "+l+". Expected one of: "+this.getValues())},N.prototype.asKeyOrDefault=function(l,F){return this.isKey(l)?l:F},N.prototype.isValue=function(l){return null!=l&&this.keysByValueMap.has(l)},N.prototype.asValueOrThrow=function(l){if(this.isValue(l))return l;throw new Error("Unexpected value: "+l+". Expected one of: "+this.getValues())},N.prototype.asValueOrDefault=function(l,F){return this.isValue(l)?l:F},N.prototype.getKeyOrThrow=function(l){var F=null!=l?this.keysByValueMap.get(l):void 0;if(null!=F)return F;throw new Error("Unexpected value: "+l+". Expected one of: "+this.getValues())},N.prototype.getKeyOrDefault=function(l,F){var O=null!=l?this.keysByValueMap.get(l):void 0;return null!=O?O:F},N.prototype.getValueOrThrow=function(l){return this.enumObj[this.asKeyOrThrow(l)]},N.prototype.getValueOrDefault=function(l,F){return this.isKey(l)?this.enumObj[l]:F},N}();g.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),B=Symbol("ts-enum-util:handleNull"),c=Symbol("ts-enum-util:handleUndefined"),_=Symbol("ts-enum-util:handleUnexpected");function C(N){return new Error("Unhandled value: "+N)}var T=function(){function N(l){this.value=l}return N.prototype.with=function(l){if(l.hasOwnProperty(this.value))return x(l[this.value],this.value);if(l[_])return x(l[_],this.value);throw new Error("Unexpected value: "+this.value)},N}(),I=function(){function N(){}return N.prototype.with=function(l){if(l[B])return x(l[B],null);if(l[_])return x(l[_],null);throw new Error("Unexpected value: null")},N}(),J=function(){function N(){}return N.prototype.with=function(l){if(l[c])return x(l[c],void 0);if(l[_])return x(l[_],void 0);throw new Error("Unexpected value: undefined")},N}();function x(N,l){if(N===a)throw C(l);return N(l)}var k=function(){function N(l){this.value=l}return N.prototype.with=function(l){if(l.hasOwnProperty(this.value))return V(l[this.value],this.value);if(l.hasOwnProperty(_))return V(l[_],this.value);throw new Error("Unexpected value: "+this.value)},N}(),Q=function(){function N(){}return N.prototype.with=function(l){if(l.hasOwnProperty(B))return V(l[B],null);if(l.hasOwnProperty(_))return V(l[_],null);throw new Error("Unexpected value: null")},N}(),U=function(){function N(){}return N.prototype.with=function(l){if(l.hasOwnProperty(c))return V(l[c],void 0);if(l.hasOwnProperty(_))return V(l[_],void 0);throw new Error("Unexpected value: undefined")},N}();function V(N,l){if(N===a)throw C(l);return N}var X=new WeakMap;function b(N){var l=X.get(N);return l||(l=new g(N),X.set(N,l)),l}b.handleNull=B,b.handleUndefined=c,b.handleUnexpected=_,b.unhandledEntry=a,b.visitValue=function D(N){return null===N?new I:void 0===N?new J:new T(N)},b.mapValue=function L(N){return null===N?new Q:void 0===N?new U:new k(N)}},4987:(le,Y,i)=>{i.d(Y,{c:()=>N,t:()=>R});var e=i(8929),n=i(2654),g=(i(5254),i(8896),i(8139),i(5e3)),_=(i(1709),i(7770),i(7221),i(7625));const C=g.GuJ,I=Symbol("__destroy"),J=Symbol("__decoratorApplied");function x(S){return"string"==typeof S?Symbol(`__destroy__${S}`):I}function Q(S,H){S[H]||(S[H]=new e.xQ)}function U(S,H){S[H]&&(S[H].next(),S[H].complete(),S[H]=null)}function V(S){S instanceof n.w&&S.unsubscribe()}function L(S,H){return function(){var ie;if(S&&S.call(this),U(this,x()),H.arrayName&&function D(S){Array.isArray(S)&&S.forEach(V)}(this[H.arrayName]),H.checkProperties)for(const ue in this)(null===(ie=H.blackList)||void 0===ie?void 0:ie.includes(ue))||V(this[ue])}}function N(S={}){return H=>{!function T(S){return!!S[C]}(H)?function X(S,H){S.prototype.ngOnDestroy=L(S.prototype.ngOnDestroy,H)}(H,S):function b(S,H){const ie=S.\u0275pipe;ie.onDestroy=L(ie.onDestroy,H)}(H,S),function k(S){S.prototype[J]=!0}(H)}}function R(S,H){return ie=>{const ue=x(H);return"string"==typeof H?function f(S,H,ie){const ue=S[H];Q(S,ie),S[H]=function(){ue.apply(this,arguments),U(this,ie),S[H]=ue}}(S,H,ue):Q(S,ue),ie.pipe((0,_.R)(S[ue]))}}Symbol("CheckerHasBeenSet")},9552:(le,Y,i)=>{i.d(Y,{$:()=>F,j:()=>O});var e=i(655),n=i(9808),o=i(5e3),s=i(2654),z=i(839),g=i(8929),a=i(6787),B=i(3753),c=i(7625),_=i(4850),C=i(3164),T=i(9439),I=i(1721),J=i(4090),x=i(925),k=i(5577),Q=i(226);const U=["fixedEl"],V=["*"];var D=(()=>{return(W=D||(D={})).resize="resize",W.scroll="scroll",W.touchstart="touchstart",W.touchmove="touchmove",W.touchend="touchend",W.pageshow="pageshow",W.load="LOAD",D;var W})();function X(W){return function L(W){return"undefined"!=typeof window&&W===window}(W)?{top:0,left:0,bottom:0}:W.getBoundingClientRect()}const N="ant-affix";let F=(()=>{class W{constructor(f,R,G,S,H,ie,ue,he,ze,De){this.nzConfigService=G,this.scrollSrv=S,this.ngZone=H,this.platform=ie,this.renderer=ue,this.nzResizeObserver=he,this.cdr=ze,this.directionality=De,this._nzModuleName="affix",this.nzChange=new o.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new z.t(1),this.destroy$=new g.xQ,this.placeholderNode=f.nativeElement,this.document=R}get target(){const f=this.nzTarget;return("string"==typeof f?this.document.querySelector(f):f)||window}ngOnInit(){var f;null===(f=this.directionality.change)||void 0===f||f.pipe((0,c.R)(this.destroy$)).subscribe(R=>{this.dir=R,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(f){const{nzOffsetBottom:R,nzOffsetTop:G,nzTarget:S}=f;(R||G)&&this.offsetChanged$.next(),S&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const f=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(D).map(R=>(0,B.R)(this.target,R)),this.offsetChanged$.pipe((0,_.U)(()=>({}))),this.nzResizeObserver.observe(f)).pipe((0,C.p)(20,void 0,{trailing:!0}),(0,c.R)(this.destroy$)).subscribe(R=>this.updatePosition(R))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(f,R){const G=f.getBoundingClientRect(),S=X(R),H=this.scrollSrv.getScroll(R,!0),ie=this.scrollSrv.getScroll(R,!1),ue=this.document.body;return{top:G.top-S.top+H-(ue.clientTop||0),left:G.left-S.left+ie-(ue.clientLeft||0),width:G.width,height:G.height}}setAffixStyle(f,R){const G=this.affixStyle,S=this.target===window;if("scroll"===f.type&&G&&R&&S||(0,I.wU)(G,R))return;const H=!!R,ie=this.fixedEl.nativeElement;this.renderer.setStyle(ie,"cssText",(0,I.GM)(R)),this.affixStyle=R,H?ie.classList.add(N):ie.classList.remove(N),this.updateRtlClass(),(R&&!G||!R&&G)&&this.nzChange.emit(H)}setPlaceholderStyle(f){(0,I.wU)(f,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,I.GM)(f)),this.placeholderStyle=f)}syncPlaceholderStyle(f){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const R={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(f,Object.assign(Object.assign({},this.affixStyle),R)),this.setPlaceholderStyle(R)}updatePosition(f){if(!this.platform.isBrowser)return;const R=this.target;let G=this.nzOffsetTop;const S=this.scrollSrv.getScroll(R,!0),H=this.getOffset(this.placeholderNode,R),ie=this.fixedEl.nativeElement,ue={width:ie.offsetWidth,height:ie.offsetHeight},he={top:!1,bottom:!1};"number"!=typeof G&&"number"!=typeof this.nzOffsetBottom?(he.top=!0,G=0):(he.top="number"==typeof G,he.bottom="number"==typeof this.nzOffsetBottom);const ze=X(R),De=R.innerHeight||R.clientHeight;if(S>=H.top-G&&he.top){const oe=H.width;this.setAffixStyle(f,{position:"fixed",top:ze.top+G,left:ze.left+H.left,width:oe}),this.setPlaceholderStyle({width:oe,height:ue.height})}else if(S<=H.top+ue.height+this.nzOffsetBottom-De&&he.bottom){const oe=R===window?0:window.innerHeight-ze.bottom,pe=H.width;this.setAffixStyle(f,{position:"fixed",bottom:oe+this.nzOffsetBottom,left:ze.left+H.left,width:pe}),this.setPlaceholderStyle({width:pe,height:H.height})}else f.type===D.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(f,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(f),this.setPlaceholderStyle();"resize"===f.type&&this.syncPlaceholderStyle(f)}updateRtlClass(){const f=this.fixedEl.nativeElement;"rtl"===this.dir&&f.classList.contains(N)?f.classList.add(`${N}-rtl`):f.classList.remove(`${N}-rtl`)}}return W.\u0275fac=function(f){return new(f||W)(o.Y36(o.SBq),o.Y36(n.K0),o.Y36(T.jY),o.Y36(J.MF),o.Y36(o.R0b),o.Y36(x.t4),o.Y36(o.Qsj),o.Y36(k.D3),o.Y36(o.sBO),o.Y36(Q.Is,8))},W.\u0275cmp=o.Xpm({type:W,selectors:[["nz-affix"]],viewQuery:function(f,R){if(1&f&&o.Gf(U,7),2&f){let G;o.iGM(G=o.CRH())&&(R.fixedEl=G.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[o.TTD],ngContentSelectors:V,decls:3,vars:0,consts:[["fixedEl",""]],template:function(f,R){1&f&&(o.F$t(),o.TgZ(0,"div",null,0),o.Hsn(2),o.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,T.oS)(),(0,I.Rn)(void 0)],W.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,T.oS)(),(0,I.Rn)(void 0)],W.prototype,"nzOffsetBottom",void 0),W})(),O=(()=>{class W{}return W.\u0275fac=function(f){return new(f||W)},W.\u0275mod=o.oAB({type:W}),W.\u0275inj=o.cJS({imports:[[Q.vT,n.ez,x.ud]]}),W})()},6699:(le,Y,i)=>{i.d(Y,{Dz:()=>x,Rt:()=>Q});var e=i(655),n=i(5e3),o=i(9439),s=i(1721),z=i(925),g=i(9808),a=i(5017),B=i(226);const c=["textEl"];function _(U,V){if(1&U&&n._UZ(0,"i",3),2&U){const D=n.oxw();n.Q6J("nzType",D.nzIcon)}}function C(U,V){if(1&U){const D=n.EpF();n.TgZ(0,"img",4),n.NdJ("error",function(X){return n.CHM(D),n.oxw().imgError(X)}),n.qZA()}if(2&U){const D=n.oxw();n.Q6J("src",D.nzSrc,n.LSH),n.uIk("srcset",D.nzSrcSet,n.LSH)("alt",D.nzAlt)}}function T(U,V){if(1&U&&(n.TgZ(0,"span",5,6),n._uU(2),n.qZA()),2&U){const D=n.oxw();n.Q6J("ngStyle",D.textStyles),n.xp6(2),n.Oqu(D.nzText)}}let x=(()=>{class U{constructor(D,L,X,b){this.nzConfigService=D,this.elementRef=L,this.cdr=X,this.platform=b,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new n.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(D){this.nzError.emit(D),D.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const D=this.textEl.nativeElement.offsetWidth,L=this.el.getBoundingClientRect().width,X=2*this.nzGap<L?2*this.nzGap:8;this.textStyles={transform:`scale(${L-X<D?(L-X)/D:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return U.\u0275fac=function(D){return new(D||U)(n.Y36(o.jY),n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(z.t4))},U.\u0275cmp=n.Xpm({type:U,selectors:[["nz-avatar"]],viewQuery:function(D,L){if(1&D&&n.Gf(c,5),2&D){let X;n.iGM(X=n.CRH())&&(L.textEl=X.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(D,L){2&D&&(n.Udp("width",L.customSize)("height",L.customSize)("line-height",L.customSize)("font-size",L.hasIcon&&L.customSize?L.nzSize/2:null,"px"),n.ekj("ant-avatar-lg","large"===L.nzSize)("ant-avatar-sm","small"===L.nzSize)("ant-avatar-square","square"===L.nzShape)("ant-avatar-circle","circle"===L.nzShape)("ant-avatar-icon",L.nzIcon)("ant-avatar-image",L.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[n.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(D,L){1&D&&(n.YNc(0,_,1,1,"i",0),n.YNc(1,C,1,3,"img",1),n.YNc(2,T,3,2,"span",2)),2&D&&(n.Q6J("ngIf",L.nzIcon&&L.hasIcon),n.xp6(1),n.Q6J("ngIf",L.nzSrc&&L.hasSrc),n.xp6(1),n.Q6J("ngIf",L.nzText&&L.hasText))},directives:[g.O5,a.Ls,g.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,o.oS)()],U.prototype,"nzShape",void 0),(0,e.gn)([(0,o.oS)()],U.prototype,"nzSize",void 0),(0,e.gn)([(0,o.oS)(),(0,s.Rn)()],U.prototype,"nzGap",void 0),U})(),Q=(()=>{class U{}return U.\u0275fac=function(D){return new(D||U)},U.\u0275mod=n.oAB({type:U}),U.\u0275inj=n.cJS({imports:[[B.vT,g.ez,a.PV,z.ud]]}),U})()},4401:(le,Y,i)=>{i.d(Y,{F9:()=>W,mS:()=>$,x7:()=>O});var e=i(655),n=i(5e3),o=i(8929),s=i(7625),z=i(8076),g=i(9439),a=i(1721),B=i(226),c=i(4832),_=i(9808),C=i(969),T=i(7144);function I(f,R){if(1&f&&(n.TgZ(0,"p",6),n._uU(1),n.qZA()),2&f){const G=R.$implicit,S=n.oxw(2).index,H=n.oxw(2);n.ekj("current",G===H.countArray[S]),n.xp6(1),n.hij(" ",G," ")}}function J(f,R){if(1&f&&(n.ynx(0),n.YNc(1,I,2,3,"p",5),n.BQk()),2&f){const G=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",G.countSingleArray)}}function x(f,R){if(1&f&&(n.TgZ(0,"span",3),n.YNc(1,J,2,1,"ng-container",4),n.qZA()),2&f){const G=R.index,S=n.oxw(2);n.Udp("transform","translateY("+100*-S.countArray[G]+"%)"),n.Q6J("nzNoAnimation",S.noAnimation),n.xp6(1),n.Q6J("ngIf",!S.nzDot&&void 0!==S.countArray[G])}}function k(f,R){if(1&f&&(n.ynx(0),n.YNc(1,x,2,4,"span",2),n.BQk()),2&f){const G=n.oxw();n.xp6(1),n.Q6J("ngForOf",G.maxNumberArray)}}function Q(f,R){if(1&f&&n._uU(0),2&f){const G=n.oxw();n.hij("",G.nzOverflowCount,"+")}}function U(f,R){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const G=n.oxw(2);n.xp6(1),n.Oqu(G.nzText)}}function V(f,R){if(1&f&&(n.ynx(0),n._UZ(1,"span",2),n.TgZ(2,"span",3),n.YNc(3,U,2,1,"ng-container",1),n.qZA(),n.BQk()),2&f){const G=n.oxw();n.xp6(1),n.Gre("ant-badge-status-dot ant-badge-status-",G.nzStatus||G.presetColor,""),n.Udp("background",!G.presetColor&&G.nzColor),n.Q6J("ngStyle",G.nzStyle),n.xp6(2),n.Q6J("nzStringTemplateOutlet",G.nzText)}}function D(f,R){if(1&f&&n._UZ(0,"nz-badge-sup",5),2&f){const G=n.oxw(2);n.Q6J("nzOffset",G.nzOffset)("nzTitle",G.nzTitle)("nzStyle",G.nzStyle)("nzDot",G.nzDot)("nzOverflowCount",G.nzOverflowCount)("disableAnimation",!!(G.nzStandalone||G.nzStatus||G.nzColor||null!=G.noAnimation&&G.noAnimation.nzNoAnimation))("nzCount",G.nzCount)("noAnimation",!(null==G.noAnimation||!G.noAnimation.nzNoAnimation))}}function L(f,R){if(1&f&&(n.ynx(0),n.YNc(1,D,1,8,"nz-badge-sup",4),n.BQk()),2&f){const G=n.oxw();n.xp6(1),n.Q6J("ngIf",G.showSup)}}const X=["*"];function b(f,R){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const G=n.oxw();n.xp6(1),n.Oqu(G.nzText)}}const N=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let l=(()=>{class f{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(G){const{nzOverflowCount:S,nzCount:H}=G;H&&"number"==typeof H.currentValue&&(this.count=Math.max(0,H.currentValue),this.countArray=this.count.toString().split("").map(ie=>+ie)),S&&this.generateMaxNumberArray()}}return f.\u0275fac=function(G){return new(G||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(G,S){2&G&&(n.uIk("title",null===S.nzTitle?"":S.nzTitle||S.nzCount),n.d8E("@.disabled",S.disableAnimation)("@zoomBadgeMotion",void 0),n.Akn(S.nzStyle),n.Udp("right",S.nzOffset&&S.nzOffset[0]?-S.nzOffset[0]:null,"px")("margin-top",S.nzOffset&&S.nzOffset[1]?S.nzOffset[1]:null,"px"),n.ekj("ant-badge-count",!S.nzDot)("ant-badge-dot",S.nzDot)("ant-badge-multiple-words",S.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[n.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(G,S){if(1&G&&(n.YNc(0,k,2,1,"ng-container",0),n.YNc(1,Q,1,1,"ng-template",null,1,n.W1O)),2&G){const H=n.MAs(2);n.Q6J("ngIf",S.count<=S.nzOverflowCount)("ngIfElse",H)}},directives:[_.O5,_.sg,c.P],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),f})(),O=(()=>{class f{constructor(G,S,H,ie,ue,he){this.nzConfigService=G,this.renderer=S,this.cdr=H,this.elementRef=ie,this.directionality=ue,this.noAnimation=he,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new o.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(G){const{nzColor:S,nzShowDot:H,nzDot:ie,nzCount:ue,nzShowZero:he}=G;S&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null),(H||ie||ue||he)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(G){return new(G||f)(n.Y36(g.jY),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(B.Is,8),n.Y36(c.P,9))},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(G,S){2&G&&n.ekj("ant-badge-status",S.nzStatus)("ant-badge-not-a-wrapper",!!(S.nzStandalone||S.nzStatus||S.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[n.TTD],ngContentSelectors:X,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(G,S){1&G&&(n.F$t(),n.YNc(0,V,4,7,"ng-container",0),n.Hsn(1),n.YNc(2,L,2,1,"ng-container",1)),2&G&&(n.Q6J("ngIf",S.nzStatus||S.nzColor),n.xp6(2),n.Q6J("nzStringTemplateOutlet",S.nzCount))},directives:[l,_.O5,_.PC,C.f],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],f.prototype,"nzShowZero",void 0),(0,e.gn)([(0,a.yF)()],f.prototype,"nzShowDot",void 0),(0,e.gn)([(0,a.yF)()],f.prototype,"nzStandalone",void 0),(0,e.gn)([(0,a.yF)()],f.prototype,"nzDot",void 0),(0,e.gn)([(0,g.oS)()],f.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,g.oS)()],f.prototype,"nzColor",void 0),f})(),W=(()=>{class f{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(G){const{nzColor:S}=G;S&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null)}}return f.\u0275fac=function(G){return new(G||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[n.TTD],ngContentSelectors:X,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(G,S){1&G&&(n.F$t(),n.Hsn(0),n.TgZ(1,"div",0),n.YNc(2,b,2,1,"ng-container",1),n._UZ(3,"div",2),n.qZA()),2&G&&(n.xp6(1),n.Tol(S.presetColor&&"ant-ribbon-color-"+S.presetColor),n.Udp("background-color",!S.presetColor&&S.nzColor),n.ekj("ant-ribbon-placement-end","end"===S.nzPlacement)("ant-ribbon-placement-start","start"===S.nzPlacement),n.xp6(1),n.Q6J("nzStringTemplateOutlet",S.nzText),n.xp6(1),n.Udp("color",!S.presetColor&&S.nzColor))},directives:[C.f],encapsulation:2,changeDetection:0}),f})(),$=(()=>{class f{}return f.\u0275fac=function(G){return new(G||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[B.vT,_.ez,T.Q8,C.T,c.g]]}),f})()},7484:(le,Y,i)=>{i.d(Y,{_i:()=>ue,bd:()=>De,vh:()=>pe});var e=i(655),n=i(5e3),o=i(1721),s=i(8929),z=i(7625),g=i(9439),a=i(226),B=i(9808),c=i(969);function _(P,te){1&P&&n.Hsn(0)}const C=["*"];function T(P,te){1&P&&(n.TgZ(0,"div",4),n._UZ(1,"div",5),n.qZA()),2&P&&n.Q6J("ngClass",te.$implicit)}function I(P,te){if(1&P&&(n.TgZ(0,"div",2),n.YNc(1,T,2,1,"div",3),n.qZA()),2&P){const w=te.$implicit;n.xp6(1),n.Q6J("ngForOf",w)}}function J(P,te){if(1&P&&(n.ynx(0),n._uU(1),n.BQk()),2&P){const w=n.oxw(3);n.xp6(1),n.Oqu(w.nzTitle)}}function x(P,te){if(1&P&&(n.TgZ(0,"div",11),n.YNc(1,J,2,1,"ng-container",12),n.qZA()),2&P){const w=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",w.nzTitle)}}function k(P,te){if(1&P&&(n.ynx(0),n._uU(1),n.BQk()),2&P){const w=n.oxw(3);n.xp6(1),n.Oqu(w.nzExtra)}}function Q(P,te){if(1&P&&(n.TgZ(0,"div",13),n.YNc(1,k,2,1,"ng-container",12),n.qZA()),2&P){const w=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",w.nzExtra)}}function U(P,te){}function V(P,te){if(1&P&&(n.ynx(0),n.YNc(1,U,0,0,"ng-template",14),n.BQk()),2&P){const w=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",w.listOfNzCardTabComponent.template)}}function D(P,te){if(1&P&&(n.TgZ(0,"div",6)(1,"div",7),n.YNc(2,x,2,1,"div",8),n.YNc(3,Q,2,1,"div",9),n.qZA(),n.YNc(4,V,2,1,"ng-container",10),n.qZA()),2&P){const w=n.oxw();n.xp6(2),n.Q6J("ngIf",w.nzTitle),n.xp6(1),n.Q6J("ngIf",w.nzExtra),n.xp6(1),n.Q6J("ngIf",w.listOfNzCardTabComponent)}}function L(P,te){}function X(P,te){if(1&P&&(n.TgZ(0,"div",15),n.YNc(1,L,0,0,"ng-template",14),n.qZA()),2&P){const w=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",w.nzCover)}}function b(P,te){1&P&&(n.ynx(0),n.Hsn(1),n.BQk())}function N(P,te){1&P&&n._UZ(0,"nz-card-loading")}function l(P,te){}function F(P,te){if(1&P&&(n.TgZ(0,"li")(1,"span"),n.YNc(2,l,0,0,"ng-template",14),n.qZA()()),2&P){const w=te.$implicit,se=n.oxw(2);n.Udp("width",100/se.nzActions.length,"%"),n.xp6(2),n.Q6J("ngTemplateOutlet",w)}}function O(P,te){if(1&P&&(n.TgZ(0,"ul",16),n.YNc(1,F,3,3,"li",17),n.qZA()),2&P){const w=n.oxw();n.xp6(1),n.Q6J("ngForOf",w.nzActions)}}let ie=(()=>{class P{constructor(){this.nzHoverable=!0}}return P.\u0275fac=function(w){return new(w||P)},P.\u0275dir=n.lG2({type:P,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(w,se){2&w&&n.ekj("ant-card-hoverable",se.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,o.yF)()],P.prototype,"nzHoverable",void 0),P})(),ue=(()=>{class P{}return P.\u0275fac=function(w){return new(w||P)},P.\u0275cmp=n.Xpm({type:P,selectors:[["nz-card-tab"]],viewQuery:function(w,se){if(1&w&&n.Gf(n.Rgc,7),2&w){let ee;n.iGM(ee=n.CRH())&&(se.template=ee.first)}},exportAs:["nzCardTab"],ngContentSelectors:C,decls:1,vars:0,template:function(w,se){1&w&&(n.F$t(),n.YNc(0,_,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),P})(),he=(()=>{class P{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return P.\u0275fac=function(w){return new(w||P)},P.\u0275cmp=n.Xpm({type:P,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(w,se){1&w&&(n.TgZ(0,"div",0),n.YNc(1,I,2,1,"div",1),n.qZA()),2&w&&(n.xp6(1),n.Q6J("ngForOf",se.listOfLoading))},directives:[B.sg,B.mk],encapsulation:2,changeDetection:0}),P})(),De=(()=>{class P{constructor(w,se,ee){this.nzConfigService=w,this.cdr=se,this.directionality=ee,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var w;null===(w=this.directionality.change)||void 0===w||w.pipe((0,z.R)(this.destroy$)).subscribe(se=>{this.dir=se,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return P.\u0275fac=function(w){return new(w||P)(n.Y36(g.jY),n.Y36(n.sBO),n.Y36(a.Is,8))},P.\u0275cmp=n.Xpm({type:P,selectors:[["nz-card"]],contentQueries:function(w,se,ee){if(1&w&&(n.Suo(ee,ue,5),n.Suo(ee,ie,4)),2&w){let ge;n.iGM(ge=n.CRH())&&(se.listOfNzCardTabComponent=ge.first),n.iGM(ge=n.CRH())&&(se.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(w,se){2&w&&n.ekj("ant-card-loading",se.nzLoading)("ant-card-bordered",!1===se.nzBorderless&&se.nzBordered)("ant-card-hoverable",se.nzHoverable)("ant-card-small","small"===se.nzSize)("ant-card-contain-grid",se.listOfNzCardGridDirective&&se.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===se.nzType)("ant-card-contain-tabs",!!se.listOfNzCardTabComponent)("ant-card-rtl","rtl"===se.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:C,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(w,se){if(1&w&&(n.F$t(),n.YNc(0,D,5,3,"div",0),n.YNc(1,X,2,1,"div",1),n.TgZ(2,"div",2),n.YNc(3,b,2,0,"ng-container",3),n.YNc(4,N,1,0,"ng-template",null,4,n.W1O),n.qZA(),n.YNc(6,O,2,1,"ul",5)),2&w){const ee=n.MAs(5);n.Q6J("ngIf",se.nzTitle||se.nzExtra||se.listOfNzCardTabComponent),n.xp6(1),n.Q6J("ngIf",se.nzCover),n.xp6(1),n.Q6J("ngStyle",se.nzBodyStyle),n.xp6(1),n.Q6J("ngIf",!se.nzLoading)("ngIfElse",ee),n.xp6(3),n.Q6J("ngIf",se.nzActions.length)}},directives:[he,B.O5,c.f,B.tP,B.PC,B.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,g.oS)(),(0,o.yF)()],P.prototype,"nzBordered",void 0),(0,e.gn)([(0,g.oS)(),(0,o.yF)()],P.prototype,"nzBorderless",void 0),(0,e.gn)([(0,o.yF)()],P.prototype,"nzLoading",void 0),(0,e.gn)([(0,g.oS)(),(0,o.yF)()],P.prototype,"nzHoverable",void 0),(0,e.gn)([(0,g.oS)()],P.prototype,"nzSize",void 0),P})(),pe=(()=>{class P{}return P.\u0275fac=function(w){return new(w||P)},P.\u0275mod=n.oAB({type:P}),P.\u0275inj=n.cJS({imports:[[B.ez,c.T],a.vT]}),P})()},5577:(le,Y,i)=>{i.d(Y,{D3:()=>g,y7:()=>B});var e=i(5e3),n=i(3191),o=i(2916),s=i(8929);let z=(()=>{class c{create(C){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(C)}}return c.\u0275fac=function(C){return new(C||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),g=(()=>{class c{constructor(C){this.nzResizeObserverFactory=C,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((C,T)=>this.cleanupObserver(T))}observe(C){const T=(0,n.fI)(C);return new o.y(I=>{const x=this.observeElement(T).subscribe(I);return()=>{x.unsubscribe(),this.unobserveElement(T)}})}observeElement(C){if(this.observedElements.has(C))this.observedElements.get(C).count++;else{const T=new s.xQ,I=this.nzResizeObserverFactory.create(J=>T.next(J));I&&I.observe(C),this.observedElements.set(C,{observer:I,stream:T,count:1})}return this.observedElements.get(C).stream}unobserveElement(C){this.observedElements.has(C)&&(this.observedElements.get(C).count--,this.observedElements.get(C).count||this.cleanupObserver(C))}cleanupObserver(C){if(this.observedElements.has(C)){const{observer:T,stream:I}=this.observedElements.get(C);T&&T.disconnect(),I.complete(),this.observedElements.delete(C)}}}return c.\u0275fac=function(C){return new(C||c)(e.LFG(z))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),B=(()=>{class c{}return c.\u0275fac=function(C){return new(C||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({providers:[z]}),c})()},5482:(le,Y,i)=>{i.d(Y,{Zv:()=>l,cD:()=>F,yH:()=>b});var e=i(655),n=i(5e3),o=i(3753),s=i(7625),z=i(2198),g=i(8076),a=i(9439),B=i(4090),c=i(1721),_=i(226),C=i(4832),T=i(9808),I=i(969),J=i(5017);const x=["*"],k=["collapseHeader"];function Q(O,W){if(1&O&&(n.ynx(0),n._UZ(1,"i",7),n.BQk()),2&O){const $=W.$implicit,f=n.oxw(2);n.xp6(1),n.Q6J("nzType",$||"right")("nzRotate",f.nzActive?90:0)}}function U(O,W){if(1&O&&(n.TgZ(0,"div"),n.YNc(1,Q,2,2,"ng-container",3),n.qZA()),2&O){const $=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",$.nzExpandedIcon)}}function V(O,W){if(1&O&&(n.ynx(0),n._uU(1),n.BQk()),2&O){const $=n.oxw();n.xp6(1),n.Oqu($.nzHeader)}}function D(O,W){if(1&O&&(n.ynx(0),n._uU(1),n.BQk()),2&O){const $=n.oxw(2);n.xp6(1),n.Oqu($.nzExtra)}}function L(O,W){if(1&O&&(n.TgZ(0,"div",8),n.YNc(1,D,2,1,"ng-container",3),n.qZA()),2&O){const $=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",$.nzExtra)}}const X="collapse";let b=(()=>{class O{constructor($,f,R,G){this.nzConfigService=$,this.cdr=f,this.directionality=R,this.destroy$=G,this._nzModuleName=X,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(X).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var $;null===($=this.directionality.change)||void 0===$||$.pipe((0,s.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel($){this.listOfNzCollapsePanelComponent.push($)}removePanel($){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf($),1)}click($){this.nzAccordion&&!$.nzActive&&this.listOfNzCollapsePanelComponent.filter(f=>f!==$).forEach(f=>{f.nzActive&&(f.nzActive=!1,f.nzActiveChange.emit(f.nzActive),f.markForCheck())}),$.nzActive=!$.nzActive,$.nzActiveChange.emit($.nzActive)}}return O.\u0275fac=function($){return new($||O)(n.Y36(a.jY),n.Y36(n.sBO),n.Y36(_.Is,8),n.Y36(B.kn))},O.\u0275cmp=n.Xpm({type:O,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function($,f){2&$&&n.ekj("ant-collapse-icon-position-left","left"===f.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===f.nzExpandIconPosition)("ant-collapse-ghost",f.nzGhost)("ant-collapse-borderless",!f.nzBordered)("ant-collapse-rtl","rtl"===f.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[n._Bn([B.kn])],ngContentSelectors:x,decls:1,vars:0,template:function($,f){1&$&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,a.oS)(),(0,c.yF)()],O.prototype,"nzAccordion",void 0),(0,e.gn)([(0,a.oS)(),(0,c.yF)()],O.prototype,"nzBordered",void 0),(0,e.gn)([(0,a.oS)(),(0,c.yF)()],O.prototype,"nzGhost",void 0),O})();const N="collapsePanel";let l=(()=>{class O{constructor($,f,R,G,S,H){this.nzConfigService=$,this.ngZone=f,this.cdr=R,this.destroy$=G,this.nzCollapseComponent=S,this.noAnimation=H,this._nzModuleName=N,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new n.vpe,this.nzConfigService.getConfigChangeEventForComponent(N).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,o.R)(this.collapseHeader.nativeElement,"click").pipe((0,z.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return O.\u0275fac=function($){return new($||O)(n.Y36(a.jY),n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(B.kn),n.Y36(b,1),n.Y36(C.P,8))},O.\u0275cmp=n.Xpm({type:O,selectors:[["nz-collapse-panel"]],viewQuery:function($,f){if(1&$&&n.Gf(k,7),2&$){let R;n.iGM(R=n.CRH())&&(f.collapseHeader=R.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function($,f){2&$&&n.ekj("ant-collapse-no-arrow",!f.nzShowArrow)("ant-collapse-item-active",f.nzActive)("ant-collapse-item-disabled",f.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[n._Bn([B.kn])],ngContentSelectors:x,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function($,f){1&$&&(n.F$t(),n.TgZ(0,"div",0,1),n.YNc(2,U,2,1,"div",2),n.YNc(3,V,2,1,"ng-container",3),n.YNc(4,L,2,1,"div",4),n.qZA(),n.TgZ(5,"div",5)(6,"div",6),n.Hsn(7),n.qZA()()),2&$&&(n.uIk("aria-expanded",f.nzActive),n.xp6(2),n.Q6J("ngIf",f.nzShowArrow),n.xp6(1),n.Q6J("nzStringTemplateOutlet",f.nzHeader),n.xp6(1),n.Q6J("ngIf",f.nzExtra),n.xp6(1),n.ekj("ant-collapse-content-active",f.nzActive),n.Q6J("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("@collapseMotion",f.nzActive?"expanded":"hidden"))},directives:[T.O5,I.f,J.Ls],encapsulation:2,data:{animation:[g.J_]},changeDetection:0}),(0,e.gn)([(0,c.yF)()],O.prototype,"nzActive",void 0),(0,e.gn)([(0,c.yF)()],O.prototype,"nzDisabled",void 0),(0,e.gn)([(0,a.oS)(),(0,c.yF)()],O.prototype,"nzShowArrow",void 0),O})(),F=(()=>{class O{}return O.\u0275fac=function($){return new($||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[_.vT,T.ez,J.PV,I.T,C.g]]}),O})()},3098:(le,Y,i)=>{i.d(Y,{R7:()=>Ie,q6:()=>Ae,uj:()=>_e});var e=i(226),n=i(925),o=i(9808),s=i(5e3),z=i(969),g=i(655),a=i(8929),B=i(6787),c=i(1721),_=i(7625),C=i(1059),T=i(7545),I=i(7138),J=i(2994),x=i(9439),k=i(948),Q=i(4090);function U(y,q){1&y&&s.Hsn(0)}const V=["*"];function D(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw(3);s.xp6(1),s.Oqu(E.nzTitle)}}function L(y,q){if(1&y&&(s.TgZ(0,"div",6),s.YNc(1,D,2,1,"ng-container",7),s.qZA()),2&y){const E=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.nzTitle)}}function X(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw(3);s.xp6(1),s.Oqu(E.nzExtra)}}function b(y,q){if(1&y&&(s.TgZ(0,"div",8),s.YNc(1,X,2,1,"ng-container",7),s.qZA()),2&y){const E=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.nzExtra)}}function N(y,q){if(1&y&&(s.TgZ(0,"div",3),s.YNc(1,L,2,1,"div",4),s.YNc(2,b,2,1,"div",5),s.qZA()),2&y){const E=s.oxw();s.xp6(1),s.Q6J("ngIf",E.nzTitle),s.xp6(1),s.Q6J("ngIf",E.nzExtra)}}function l(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",E.title," ")}}function F(y,q){}function O(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,l,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,F,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&y){const E=s.oxw().$implicit,ce=s.oxw(3);s.xp6(1),s.Q6J("colSpan",E.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.title),s.xp6(2),s.Q6J("ngTemplateOutlet",E.content)}}function W(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",E.title," ")}}function $(y,q){if(1&y&&(s.TgZ(0,"td",14),s.YNc(1,W,2,1,"ng-container",7),s.qZA()),2&y){const E=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.title)}}function f(y,q){}function R(y,q){if(1&y&&(s.ynx(0),s.YNc(1,$,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,f,0,0,"ng-template",16),s.qZA(),s.BQk()),2&y){const E=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.title),s.xp6(1),s.Q6J("colSpan",2*E.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",E.content)}}function G(y,q){if(1&y&&(s.ynx(0),s.YNc(1,O,7,5,"ng-container",2),s.YNc(2,R,4,3,"ng-container",2),s.BQk()),2&y){const E=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!E.nzBordered),s.xp6(1),s.Q6J("ngIf",E.nzBordered)}}function S(y,q){if(1&y&&(s.TgZ(0,"tr",10),s.YNc(1,G,3,2,"ng-container",11),s.qZA()),2&y){const E=q.$implicit;s.xp6(1),s.Q6J("ngForOf",E)}}function H(y,q){if(1&y&&(s.ynx(0),s.YNc(1,S,2,1,"tr",9),s.BQk()),2&y){const E=s.oxw();s.xp6(1),s.Q6J("ngForOf",E.itemMatrix)}}function ie(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw().$implicit;s.xp6(1),s.hij(" ",E.title," ")}}function ue(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ie,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&y){const E=q.$implicit,ce=s.oxw(4);s.xp6(1),s.Q6J("colSpan",E.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ce.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.title)}}function he(y,q){}function ze(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,he,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&y){const E=q.$implicit;s.xp6(1),s.Q6J("colSpan",E.span),s.xp6(3),s.Q6J("ngTemplateOutlet",E.content)}}function De(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,ue,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,ze,5,2,"ng-container",11),s.qZA(),s.BQk()),2&y){const E=q.$implicit;s.xp6(2),s.Q6J("ngForOf",E),s.xp6(2),s.Q6J("ngForOf",E)}}function oe(y,q){if(1&y&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&y){const E=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",E.itemMatrix)}}function pe(y,q){if(1&y&&(s.ynx(0),s._uU(1),s.BQk()),2&y){const E=s.oxw().$implicit;s.xp6(1),s.hij(" ",E.title," ")}}function P(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,pe,2,1,"ng-container",7),s.qZA(),s.BQk()),2&y){const E=q.$implicit;s.xp6(1),s.Q6J("colSpan",E.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",E.title)}}function te(y,q){}function w(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,te,0,0,"ng-template",16),s.qZA(),s.BQk()),2&y){const E=q.$implicit;s.xp6(1),s.Q6J("colSpan",E.span),s.xp6(1),s.Q6J("ngTemplateOutlet",E.content)}}function se(y,q){if(1&y&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,P,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,w,3,2,"ng-container",11),s.qZA(),s.BQk()),2&y){const E=q.$implicit;s.xp6(2),s.Q6J("ngForOf",E),s.xp6(2),s.Q6J("ngForOf",E)}}function ee(y,q){if(1&y&&(s.ynx(0),s.YNc(1,se,5,2,"ng-container",11),s.BQk()),2&y){const E=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",E.itemMatrix)}}function ge(y,q){if(1&y&&(s.ynx(0),s.YNc(1,oe,2,1,"ng-container",2),s.YNc(2,ee,2,1,"ng-container",2),s.BQk()),2&y){const E=s.oxw();s.xp6(1),s.Q6J("ngIf",!E.nzBordered),s.xp6(1),s.Q6J("ngIf",E.nzBordered)}}let _e=(()=>{class y{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return y.\u0275fac=function(E){return new(E||y)},y.\u0275cmp=s.Xpm({type:y,selectors:[["nz-descriptions-item"]],viewQuery:function(E,ce){if(1&E&&s.Gf(s.Rgc,7),2&E){let Ce;s.iGM(Ce=s.CRH())&&(ce.content=Ce.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:V,decls:1,vars:0,template:function(E,ce){1&E&&(s.F$t(),s.YNc(0,U,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,g.gn)([(0,c.Rn)()],y.prototype,"nzSpan",void 0),y})();const Ee={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let Ie=(()=>{class y{constructor(E,ce,Ce,Se){this.nzConfigService=E,this.cdr=ce,this.breakpointService=Ce,this.directionality=Se,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=Ee,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Q.G_.md,this.destroy$=new a.xQ}ngOnInit(){var E;this.dir=this.directionality.value,null===(E=this.directionality.change)||void 0===E||E.pipe((0,_.R)(this.destroy$)).subscribe(ce=>{this.dir=ce})}ngOnChanges(E){E.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const E=this.items.changes.pipe((0,C.O)(this.items),(0,_.R)(this.destroy$));(0,B.T)(E,E.pipe((0,T.w)(()=>(0,B.T)(...this.items.map(ce=>ce.inputChange$)).pipe((0,I.e)(16)))),this.breakpointService.subscribe(Q.WV).pipe((0,J.b)(ce=>this.breakpoint=ce))).pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let E=[],ce=0;const Ce=this.realColumn=this.getColumn(),Se=this.items.toArray(),$e=Se.length,Ge=[],Be=()=>{Ge.push(E),E=[],ce=0};for(let Ne=0;Ne<$e;Ne++){const be=Se[Ne],{nzTitle:Re,content:Qe,nzSpan:xe}=be;ce+=xe,ce>=Ce?(ce>Ce&&(0,k.ZK)(`"nzColumn" is ${Ce} but we have row length ${ce}`),E.push({title:Re,content:Qe,span:Ce-(ce-xe)}),Be()):Ne===$e-1?(E.push({title:Re,content:Qe,span:Ce-(ce-xe)}),Be()):E.push({title:Re,content:Qe,span:xe})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return y.\u0275fac=function(E){return new(E||y)(s.Y36(x.jY),s.Y36(s.sBO),s.Y36(Q.r3),s.Y36(e.Is,8))},y.\u0275cmp=s.Xpm({type:y,selectors:[["nz-descriptions"]],contentQueries:function(E,ce,Ce){if(1&E&&s.Suo(Ce,_e,4),2&E){let Se;s.iGM(Se=s.CRH())&&(ce.items=Se)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(E,ce){2&E&&s.ekj("ant-descriptions-bordered",ce.nzBordered)("ant-descriptions-middle","middle"===ce.nzSize)("ant-descriptions-small","small"===ce.nzSize)("ant-descriptions-rtl","rtl"===ce.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(E,ce){1&E&&(s.YNc(0,N,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,H,2,1,"ng-container",2),s.YNc(5,ge,3,2,"ng-container",2),s.qZA()()()),2&E&&(s.Q6J("ngIf",ce.nzTitle||ce.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ce.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ce.nzLayout))},directives:[o.O5,z.f,o.sg,o.tP],encapsulation:2,changeDetection:0}),(0,g.gn)([(0,c.yF)(),(0,x.oS)()],y.prototype,"nzBordered",void 0),(0,g.gn)([(0,x.oS)()],y.prototype,"nzColumn",void 0),(0,g.gn)([(0,x.oS)()],y.prototype,"nzSize",void 0),(0,g.gn)([(0,x.oS)(),(0,c.yF)()],y.prototype,"nzColon",void 0),y})(),Ae=(()=>{class y{}return y.\u0275fac=function(E){return new(E||y)},y.\u0275mod=s.oAB({type:y}),y.\u0275inj=s.cJS({imports:[[e.vT,o.ez,z.T,n.ud]]}),y})()},3677:(le,Y,i)=>{i.d(Y,{RR:()=>oe,b1:()=>pe,cm:()=>ue,wA:()=>De});var e=i(655),n=i(1159),o=i(7429),s=i(5e3),z=i(8929),g=i(591),a=i(6787),B=i(3753),c=i(8896),_=i(6053),C=i(7604),T=i(4850),I=i(7545),J=i(2198),x=i(7138),k=i(5778),Q=i(7625),U=i(9439),V=i(6950),D=i(1721),L=i(2845),X=i(925),b=i(226),N=i(9808),l=i(3075),F=i(6042),O=i(4832),W=i(969),$=i(5017),f=i(4219),R=i(8076);function G(w,se){if(1&w){const ee=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(_e){return s.CHM(ee),s.oxw().onAnimationEvent(_e)})("mouseenter",function(){return s.CHM(ee),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(ee),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&w){const ee=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===ee.dir),s.Q6J("ngClass",ee.nzOverlayClassName)("ngStyle",ee.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)("nzNoAnimation",null==ee.noAnimation?null:ee.noAnimation.nzNoAnimation)}}const S=["*"],ie=[V.yW.bottomLeft,V.yW.bottomRight,V.yW.topRight,V.yW.topLeft];let ue=(()=>{class w{constructor(ee,ge,_e,Te,Ee,Ie){this.nzConfigService=ee,this.elementRef=ge,this.overlay=_e,this.renderer=Te,this.viewContainerRef=Ee,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new z.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new g.X(!1),this.nzTrigger$=new g.X("hover"),this.overlayClose$=new z.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(ee,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(ee,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const ee=this.elementRef.nativeElement,ge=(0,a.T)((0,B.R)(ee,"mouseenter").pipe((0,C.h)(!0)),(0,B.R)(ee,"mouseleave").pipe((0,C.h)(!1))),Te=(0,a.T)(this.nzDropdownMenu.mouseState$,ge),Ee=(0,B.R)(ee,"click").pipe((0,T.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,I.w)(E=>"hover"===E?Te:"click"===E?Ee:c.E)),Ae=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,J.h)(()=>this.nzClickHide),(0,C.h)(!1)),y=(0,a.T)(Ie,Ae,this.overlayClose$).pipe((0,J.h)(()=>!this.nzDisabled)),q=(0,a.T)(this.inputVisible$,y);(0,_.aj)([q,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,T.U)(([E,ce])=>E||ce),(0,x.e)(150),(0,k.x)(),(0,J.h)(()=>this.platform.isBrowser),(0,Q.R)(this.destroy$)).subscribe(E=>{const Ce=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:ee).getBoundingClientRect().width;this.nzVisible!==E&&this.nzVisibleChange.emit(E),this.nzVisible=E,E?(this.overlayRef?this.overlayRef.getConfig().minWidth=Ce:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Ce,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,J.h)(Se=>!this.elementRef.nativeElement.contains(Se.target))),this.overlayRef.keydownEvents().pipe((0,J.h)(Se=>Se.keyCode===n.hY&&!(0,n.Vb)(Se)))).pipe((0,Q.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([V.yW[this.nzPlacement],...ie]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new o.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Q.R)(this.destroy$)).subscribe(E=>{"void"===E.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(ee){const{nzVisible:ge,nzDisabled:_e,nzOverlayClassName:Te,nzOverlayStyle:Ee,nzTrigger:Ie}=ee;if(Ie&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),_e){const Ae=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Ae,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Ae,"disabled")}Te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Ee&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return w.\u0275fac=function(ee){return new(ee||w)(s.Y36(U.jY),s.Y36(s.SBq),s.Y36(L.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(X.t4))},w.\u0275dir=s.lG2({type:w,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,U.oS)(),(0,D.yF)()],w.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,D.yF)()],w.prototype,"nzClickHide",void 0),(0,e.gn)([(0,D.yF)()],w.prototype,"nzDisabled",void 0),(0,e.gn)([(0,D.yF)()],w.prototype,"nzVisible",void 0),w})(),he=(()=>{class w{}return w.\u0275fac=function(ee){return new(ee||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({}),w})(),De=(()=>{class w{constructor(ee,ge,_e){this.renderer=ee,this.nzButtonGroupComponent=ge,this.elementRef=_e}ngAfterViewInit(){const ee=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&ee&&this.renderer.addClass(ee,"ant-dropdown-button")}}return w.\u0275fac=function(ee){return new(ee||w)(s.Y36(s.Qsj),s.Y36(F.fY,9),s.Y36(s.SBq))},w.\u0275dir=s.lG2({type:w,selectors:[["","nz-button","","nz-dropdown",""]]}),w})(),oe=(()=>{class w{constructor(ee,ge,_e,Te,Ee,Ie,Ae){this.cdr=ee,this.elementRef=ge,this.renderer=_e,this.viewContainerRef=Te,this.nzMenuService=Ee,this.directionality=Ie,this.noAnimation=Ae,this.mouseState$=new g.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new z.xQ}onAnimationEvent(ee){this.animationStateChange$.emit(ee)}setMouseState(ee){this.mouseState$.next(ee)}setValue(ee,ge){this[ee]=ge,this.cdr.markForCheck()}ngOnInit(){var ee;null===(ee=this.directionality.change)||void 0===ee||ee.pipe((0,Q.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(ee){return new(ee||w)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(f.hl),s.Y36(b.Is,8),s.Y36(O.P,9))},w.\u0275cmp=s.Xpm({type:w,selectors:[["nz-dropdown-menu"]],viewQuery:function(ee,ge){if(1&ee&&s.Gf(s.Rgc,7),2&ee){let _e;s.iGM(_e=s.CRH())&&(ge.templateRef=_e.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([f.hl,{provide:f.Cc,useValue:!0}])],ngContentSelectors:S,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(ee,ge){1&ee&&(s.F$t(),s.YNc(0,G,2,7,"ng-template"))},directives:[N.mk,N.PC,O.P],encapsulation:2,data:{animation:[R.mF]},changeDetection:0}),w})(),pe=(()=>{class w{}return w.\u0275fac=function(ee){return new(ee||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[[b.vT,N.ez,L.U8,l.u5,F.sL,f.ip,$.PV,O.g,X.ud,V.e4,he,W.T],f.ip]}),w})();new L.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new L.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new L.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new L.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(le,Y,i)=>{i.d(Y,{AA:()=>tt,I2:()=>je,IO:()=>ae,Ph:()=>rt,n_:()=>Xe,t4:()=>Ke,yi:()=>Le,yw:()=>Oe});var e=i(5e3),n=i(6699),o=i(9808),s=i(969),z=i(655),g=i(1721),a=i(8929),B=i(8514),c=i(1086),_=i(6787),C=i(2916),T=i(591),I=i(2986),J=i(7545),x=i(7625),k=i(4090),Q=i(685),U=i(226),V=i(7525),D=i(1894);const L=["*"];function X(h,j){if(1&h&&e._UZ(0,"nz-avatar",3),2&h){const A=e.oxw();e.Q6J("nzSrc",A.nzSrc)}}function b(h,j){1&h&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function N(h,j){if(1&h&&e._UZ(0,"nz-list-item-meta-avatar",3),2&h){const A=e.oxw();e.Q6J("nzSrc",A.avatarStr)}}function l(h,j){if(1&h&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.avatarTpl)}}function F(h,j){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzTitle)}}function O(h,j){if(1&h&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,F,2,1,"ng-container",6),e.qZA()),2&h){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzTitle)}}function W(h,j){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzDescription)}}function $(h,j){if(1&h&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,W,2,1,"ng-container",6),e.qZA()),2&h){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzDescription)}}function f(h,j){if(1&h&&(e.TgZ(0,"div",5),e.YNc(1,O,2,1,"nz-list-item-meta-title",1),e.YNc(2,$,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("ngIf",A.nzTitle&&!A.titleComponent),e.xp6(1),e.Q6J("ngIf",A.nzDescription&&!A.descriptionComponent)}}const R=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],G=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function S(h,j){1&h&&e.Hsn(0)}const H=["nz-list-item-actions",""];function ie(h,j){}function ue(h,j){1&h&&e._UZ(0,"em",3)}function he(h,j){if(1&h&&(e.TgZ(0,"li"),e.YNc(1,ie,0,0,"ng-template",1),e.YNc(2,ue,1,0,"em",2),e.qZA()),2&h){const A=j.$implicit,ne=j.last;e.xp6(1),e.Q6J("ngTemplateOutlet",A),e.xp6(1),e.Q6J("ngIf",!ne)}}function ze(h,j){}const De=function(h,j){return{$implicit:h,index:j}};function oe(h,j){if(1&h&&(e.ynx(0),e.YNc(1,ze,0,0,"ng-template",9),e.BQk()),2&h){const A=j.$implicit,ne=j.index,ve=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,De,A,ne))}}function pe(h,j){if(1&h&&(e.TgZ(0,"div",7),e.YNc(1,oe,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function P(h,j){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzHeader)}}function te(h,j){if(1&h&&(e.TgZ(0,"nz-list-header"),e.YNc(1,P,2,1,"ng-container",10),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzHeader)}}function w(h,j){1&h&&e._UZ(0,"div"),2&h&&e.Udp("min-height",53,"px")}function se(h,j){}function ee(h,j){if(1&h&&(e.TgZ(0,"div",13),e.YNc(1,se,0,0,"ng-template",9),e.qZA()),2&h){const A=j.$implicit,ne=j.index,ve=e.oxw(2);e.Q6J("nzSpan",ve.nzGrid.span||null)("nzXs",ve.nzGrid.xs||null)("nzSm",ve.nzGrid.sm||null)("nzMd",ve.nzGrid.md||null)("nzLg",ve.nzGrid.lg||null)("nzXl",ve.nzGrid.xl||null)("nzXXl",ve.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",ve.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,De,A,ne))}}function ge(h,j){if(1&h&&(e.TgZ(0,"div",11),e.YNc(1,ee,2,12,"div",12),e.qZA()),2&h){const A=e.oxw();e.Q6J("nzGutter",A.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function _e(h,j){if(1&h&&e._UZ(0,"nz-list-empty",14),2&h){const A=e.oxw();e.Q6J("nzNoResult",A.nzNoResult)}}function Te(h,j){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzFooter)}}function Ee(h,j){if(1&h&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,Te,2,1,"ng-container",10),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzFooter)}}function Ie(h,j){}function Ae(h,j){}function y(h,j){if(1&h&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,Ae,0,0,"ng-template",6),e.qZA()),2&h){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzPagination)}}const q=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],E=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ce(h,j){if(1&h&&e._UZ(0,"ul",6),2&h){const A=e.oxw(2);e.Q6J("nzActions",A.nzActions)}}function Ce(h,j){if(1&h&&(e.YNc(0,ce,1,1,"ul",5),e.Hsn(1)),2&h){const A=e.oxw();e.Q6J("ngIf",A.nzActions&&A.nzActions.length>0)}}function Se(h,j){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzContent)}}function $e(h,j){if(1&h&&(e.ynx(0),e.YNc(1,Se,2,1,"ng-container",8),e.BQk()),2&h){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzContent)}}function Ge(h,j){if(1&h&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,$e,2,1,"ng-container",7)),2&h){const A=e.oxw();e.xp6(2),e.Q6J("ngIf",A.nzContent)}}function Be(h,j){1&h&&e.Hsn(0,3)}function Ne(h,j){}function be(h,j){}function Re(h,j){}function Qe(h,j){}function xe(h,j){if(1&h&&(e.YNc(0,Ne,0,0,"ng-template",9),e.YNc(1,be,0,0,"ng-template",9),e.YNc(2,Re,0,0,"ng-template",9),e.YNc(3,Qe,0,0,"ng-template",9)),2&h){const A=e.oxw(),ne=e.MAs(3),ve=e.MAs(5),ye=e.MAs(1);e.Q6J("ngTemplateOutlet",ne),e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",ve),e.xp6(1),e.Q6J("ngTemplateOutlet",ye)}}function Ze(h,j){}function Ye(h,j){}function We(h,j){}function Je(h,j){if(1&h&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,We,0,0,"ng-template",9),e.qZA()),2&h){const A=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra)}}function Z(h,j){}function de(h,j){if(1&h&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,Ye,0,0,"ng-template",9),e.qZA(),e.YNc(4,Je,2,1,"nz-list-item-extra",7),e.YNc(5,Z,0,0,"ng-template",9),e.BQk()),2&h){const A=e.oxw(),ne=e.MAs(3),ve=e.MAs(1),ye=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",ne),e.xp6(1),e.Q6J("ngTemplateOutlet",ve),e.xp6(1),e.Q6J("ngIf",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",ye)}}const v=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ae=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:L,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(A,ne){1&A&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),h})(),me=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:L,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(A,ne){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),h})(),Me=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:L,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(A,ne){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,X,1,1,"nz-avatar",1),e.YNc(2,b,1,0,"ng-content",2),e.qZA()),2&A&&(e.xp6(1),e.Q6J("ngIf",ne.nzSrc),e.xp6(1),e.Q6J("ngIf",!ne.nzSrc))},directives:[n.Dz,o.O5],encapsulation:2,changeDetection:0}),h})(),Le=(()=>{class h{constructor(A,ne){this.elementRef=A,this.renderer=ne,this.avatarStr="",this.renderer.addClass(A.nativeElement,"ant-list-item-meta")}set nzAvatar(A){A instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=A):this.avatarStr=A}}return h.\u0275fac=function(A){return new(A||h)(e.Y36(e.SBq),e.Y36(e.Qsj))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(A,ne,ve){if(1&A&&(e.Suo(ve,me,5),e.Suo(ve,ae,5)),2&A){let ye;e.iGM(ye=e.CRH())&&(ne.descriptionComponent=ye.first),e.iGM(ye=e.CRH())&&(ne.titleComponent=ye.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:G,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(A,ne){1&A&&(e.F$t(R),e.YNc(0,N,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,l,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,f,5,2,"div",2)),2&A&&(e.Q6J("ngIf",ne.avatarStr),e.xp6(1),e.Q6J("ngIf",ne.avatarTpl),e.xp6(2),e.Q6J("ngIf",ne.nzTitle||ne.nzDescription||ne.descriptionComponent||ne.titleComponent))},directives:[Me,ae,me,o.O5,o.tP,s.f],encapsulation:2,changeDetection:0}),h})(),Oe=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:L,decls:1,vars:0,template:function(A,ne){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),Ue=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-action"]],viewQuery:function(A,ne){if(1&A&&e.Gf(e.Rgc,5),2&A){let ve;e.iGM(ve=e.CRH())&&(ne.templateRef=ve.first)}},exportAs:["nzListItemAction"],ngContentSelectors:L,decls:1,vars:0,template:function(A,ne){1&A&&(e.F$t(),e.YNc(0,S,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),h})(),Ve=(()=>{class h{constructor(A,ne,ve){this.ngZone=A,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,B.P)(()=>this.nzListItemActions?(0,c.of)(null):this.ngZone.onStable.pipe((0,I.q)(1),this.enterZone(),(0,J.w)(()=>this.contentChildrenChanges$))),(0,_.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,x.R)(ve)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ye=>ye.templateRef),ne.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return A=>new C.y(ne=>A.subscribe({next:ve=>this.ngZone.run(()=>ne.next(ve))}))}}return h.\u0275fac=function(A){return new(A||h)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(k.kn))},h.\u0275cmp=e.Xpm({type:h,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(A,ne,ve){if(1&A&&e.Suo(ve,Ue,4),2&A){let ye;e.iGM(ye=e.CRH())&&(ne.nzListItemActions=ye)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([k.kn]),e.TTD],attrs:H,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(A,ne){1&A&&e.YNc(0,he,3,2,"li",0),2&A&&e.Q6J("ngForOf",ne.actions)},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),h})(),je=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(A,ne){1&A&&e._UZ(0,"nz-embed-empty",0),2&A&&e.Q6J("nzComponentName","list")("specificContent",ne.nzNoResult)},directives:[Q.gB],encapsulation:2,changeDetection:0}),h})(),Ke=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:L,decls:1,vars:0,template:function(A,ne){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),He=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:L,decls:1,vars:0,template:function(A,ne){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),ke=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:L,decls:1,vars:0,template:function(A,ne){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),et=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275dir=e.lG2({type:h,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),h})(),Xe=(()=>{class h{constructor(A){this.directionality=A,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new T.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var A;this.dir=this.directionality.value,null===(A=this.directionality.change)||void 0===A||A.pipe((0,x.R)(this.destroy$)).subscribe(ne=>{this.dir=ne})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(A){A.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return h.\u0275fac=function(A){return new(A||h)(e.Y36(U.Is,8))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(A,ne,ve){if(1&A&&(e.Suo(ve,He,5),e.Suo(ve,ke,5),e.Suo(ve,et,5)),2&A){let ye;e.iGM(ye=e.CRH())&&(ne.nzListFooterComponent=ye.first),e.iGM(ye=e.CRH())&&(ne.nzListPaginationComponent=ye.first),e.iGM(ye=e.CRH())&&(ne.nzListLoadMoreDirective=ye.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(A,ne){2&A&&e.ekj("ant-list-rtl","rtl"===ne.dir)("ant-list-vertical","vertical"===ne.nzItemLayout)("ant-list-lg","large"===ne.nzSize)("ant-list-sm","small"===ne.nzSize)("ant-list-split",ne.nzSplit)("ant-list-bordered",ne.nzBordered)("ant-list-loading",ne.nzLoading)("ant-list-something-after-last-item",ne.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:E,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(A,ne){if(1&A&&(e.F$t(q),e.YNc(0,pe,3,1,"ng-template",null,0,e.W1O),e.YNc(2,te,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,w,1,2,"div",3),e.YNc(7,ge,2,2,"div",4),e.YNc(8,_e,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,Ee,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,Ie,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,y,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&A){const ve=e.MAs(1);e.xp6(2),e.Q6J("ngIf",ne.nzHeader),e.xp6(2),e.Q6J("nzSpinning",ne.nzLoading),e.xp6(2),e.Q6J("ngIf",ne.nzLoading&&ne.nzDataSource&&0===ne.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ne.nzGrid&&ne.nzDataSource)("ngIfElse",ve),e.xp6(1),e.Q6J("ngIf",!ne.nzLoading&&ne.nzDataSource&&0===ne.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ne.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",ne.nzLoadMore),e.xp6(2),e.Q6J("ngIf",ne.nzPagination)}},directives:[Ke,V.W,je,He,ke,o.sg,o.tP,o.O5,s.f,D.SK,D.t3],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,g.yF)()],h.prototype,"nzBordered",void 0),(0,z.gn)([(0,g.yF)()],h.prototype,"nzLoading",void 0),(0,z.gn)([(0,g.yF)()],h.prototype,"nzSplit",void 0),h})(),tt=(()=>{class h{constructor(A,ne,ve,ye){this.parentComp=ve,this.cdr=ye,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ne.addClass(A.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(A=>{this.itemLayout=A,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return h.\u0275fac=function(A){return new(A||h)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(A,ne,ve){if(1&A&&e.Suo(ve,Oe,5),2&A){let ye;e.iGM(ye=e.CRH())&&(ne.listItemExtraDirective=ye.first)}},hostVars:2,hostBindings:function(A,ne){2&A&&e.ekj("ant-list-item-no-flex",ne.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(A,ne){if(1&A&&(e.F$t(v),e.YNc(0,Ce,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Ge,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,xe,4,4,"ng-template",null,3,e.W1O),e.YNc(8,de,6,4,"ng-container",4)),2&A){const ve=e.MAs(7);e.xp6(8),e.Q6J("ngIf",ne.isVerticalAndExtra)("ngIfElse",ve)}},directives:[Ve,Oe,o.O5,s.f,o.tP],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,g.yF)()],h.prototype,"nzNoFlex",void 0),h})(),rt=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[[U.vT,o.ez,V.j,D.Jb,n.Rt,s.T,Q.Xo]]}),h})()},4219:(le,Y,i)=>{i.d(Y,{Cc:()=>y,YV:()=>We,hl:()=>E,ip:()=>Je,r9:()=>Ce,uA:()=>Ye,wO:()=>xe});var e=i(655),n=i(5e3),o=i(8929),s=i(591),z=i(6787),g=i(6053),a=i(4850),B=i(1709),c=i(2198),_=i(7604),C=i(7138),T=i(5778),I=i(7625),J=i(1059),x=i(7545),k=i(1721),Q=i(325),U=i(226),V=i(2845),D=i(6950),L=i(925),X=i(4832),b=i(9808),N=i(5017),l=i(969),F=i(8076);const O=["nz-submenu-title",""];function W(Z,de){if(1&Z&&n._UZ(0,"i",4),2&Z){const v=n.oxw();n.Q6J("nzType",v.nzIcon)}}function $(Z,de){if(1&Z&&(n.ynx(0),n.TgZ(1,"span"),n._uU(2),n.qZA(),n.BQk()),2&Z){const v=n.oxw();n.xp6(2),n.Oqu(v.nzTitle)}}function f(Z,de){1&Z&&n._UZ(0,"i",8)}function R(Z,de){1&Z&&n._UZ(0,"i",9)}function G(Z,de){if(1&Z&&(n.TgZ(0,"span",5),n.YNc(1,f,1,0,"i",6),n.YNc(2,R,1,0,"i",7),n.qZA()),2&Z){const v=n.oxw();n.Q6J("ngSwitch",v.dir),n.xp6(1),n.Q6J("ngSwitchCase","rtl")}}function S(Z,de){1&Z&&n._UZ(0,"i",10)}const H=["*"],ie=["nz-submenu-inline-child",""];function ue(Z,de){}const he=["nz-submenu-none-inline-child",""];function ze(Z,de){}const De=["nz-submenu",""];function oe(Z,de){1&Z&&n.Hsn(0,0,["*ngIf","!nzTitle"])}function pe(Z,de){if(1&Z&&n._UZ(0,"div",6),2&Z){const v=n.oxw(),m=n.MAs(7);n.Q6J("mode",v.mode)("nzOpen",v.nzOpen)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("menuClass",v.nzMenuClassName)("templateOutlet",m)}}function P(Z,de){if(1&Z){const v=n.EpF();n.TgZ(0,"div",8),n.NdJ("subMenuMouseState",function(ae){return n.CHM(v),n.oxw(2).setMouseEnterState(ae)}),n.qZA()}if(2&Z){const v=n.oxw(2),m=n.MAs(7);n.Q6J("theme",v.theme)("mode",v.mode)("nzOpen",v.nzOpen)("position",v.position)("nzDisabled",v.nzDisabled)("isMenuInsideDropDown",v.isMenuInsideDropDown)("templateOutlet",m)("menuClass",v.nzMenuClassName)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)}}function te(Z,de){if(1&Z){const v=n.EpF();n.YNc(0,P,1,10,"ng-template",7),n.NdJ("positionChange",function(ae){return n.CHM(v),n.oxw().onPositionChange(ae)})}if(2&Z){const v=n.oxw(),m=n.MAs(1);n.Q6J("cdkConnectedOverlayPositions",v.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",v.triggerWidth)("cdkConnectedOverlayOpen",v.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function w(Z,de){1&Z&&n.Hsn(0,1)}const se=[[["","title",""]],"*"],ee=["[title]","*"],ge=["titleElement"],_e=["nz-menu-group",""];function Te(Z,de){if(1&Z&&(n.ynx(0),n._uU(1),n.BQk()),2&Z){const v=n.oxw();n.xp6(1),n.Oqu(v.nzTitle)}}function Ee(Z,de){1&Z&&n.Hsn(0,1,["*ngIf","!nzTitle"])}const Ie=["*",[["","title",""]]],Ae=["*","[title]"],y=new n.OlP("NzIsInDropDownMenuToken"),q=new n.OlP("NzMenuServiceLocalToken");let E=(()=>{class Z{constructor(){this.descendantMenuItemClick$=new o.xQ,this.childMenuItemClick$=new o.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(v){this.descendantMenuItemClick$.next(v)}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setMode(v){this.mode$.next(v)}setTheme(v){this.theme$.next(v)}setInlineIndent(v){this.inlineIndent$.next(v)}}return Z.\u0275fac=function(v){return new(v||Z)},Z.\u0275prov=n.Yz7({token:Z,factory:Z.\u0275fac}),Z})(),ce=(()=>{class Z{constructor(v,m,ae){this.nzHostSubmenuService=v,this.nzMenuService=m,this.isMenuInsideDropDown=ae,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Oe=>"inline"===Oe?"inline":"vertical"===Oe||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new o.xQ,this.childMenuItemClick$=new o.xQ,this.destroy$=new o.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const me=this.childMenuItemClick$.pipe((0,B.zg)(()=>this.mode$),(0,c.h)(Oe=>"inline"!==Oe||this.isMenuInsideDropDown),(0,_.h)(!1)),Me=(0,z.T)(this.isMouseEnterTitleOrOverlay$,me);(0,g.aj)([this.isChildSubMenuOpen$,Me]).pipe((0,a.U)(([Oe,Ue])=>Oe||Ue),(0,C.e)(150),(0,T.x)(),(0,I.R)(this.destroy$)).pipe((0,T.x)()).subscribe(Oe=>{this.setOpenStateWithoutDebounce(Oe),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Oe):this.nzMenuService.isChildSubMenuOpen$.next(Oe)})}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setOpenStateWithoutDebounce(v){this.isCurrentSubMenuOpen$.next(v)}setMouseEnterTitleOrOverlayState(v){this.isMouseEnterTitleOrOverlay$.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(v){return new(v||Z)(n.LFG(Z,12),n.LFG(E),n.LFG(y))},Z.\u0275prov=n.Yz7({token:Z,factory:Z.\u0275fac}),Z})(),Ce=(()=>{class Z{constructor(v,m,ae,me,Me,Le,Oe,Ue){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=ae,this.isMenuInsideDropDown=me,this.directionality=Me,this.routerLink=Le,this.routerLinkWithHref=Oe,this.router=Ue,this.destroy$=new o.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new o.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,I.R)(this.destroy$),(0,c.h)(Ve=>Ve instanceof Q.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(v){this.nzDisabled?(v.preventDefault(),v.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(v){this.nzSelected=v,this.selected$.next(v)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const v=this.hasActiveLinks();this.nzSelected!==v&&(this.nzSelected=v,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const v=this.isLinkActive(this.router);return this.routerLink&&v(this.routerLink)||this.routerLinkWithHref&&v(this.routerLinkWithHref)||this.listOfRouterLink.some(v)||this.listOfRouterLinkWithHref.some(v)}isLinkActive(v){return m=>v.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var v;(0,g.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,I.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(v){v.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(E),n.Y36(n.sBO),n.Y36(ce,8),n.Y36(y),n.Y36(U.Is,8),n.Y36(Q.rH,8),n.Y36(Q.yS,8),n.Y36(Q.F0,8))},Z.\u0275dir=n.lG2({type:Z,selectors:[["","nz-menu-item",""]],contentQueries:function(v,m,ae){if(1&v&&(n.Suo(ae,Q.rH,5),n.Suo(ae,Q.yS,5)),2&v){let me;n.iGM(me=n.CRH())&&(m.listOfRouterLink=me),n.iGM(me=n.CRH())&&(m.listOfRouterLinkWithHref=me)}},hostVars:20,hostBindings:function(v,m){1&v&&n.NdJ("click",function(me){return m.clickMenuItem(me)}),2&v&&(n.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),n.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[n.TTD]}),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzDisabled",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzSelected",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzDanger",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzMatchRouter",void 0),Z})(),Se=(()=>{class Z{constructor(v,m){this.cdr=v,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new n.vpe,this.subMenuMouseState=new n.vpe,this.dir="ltr",this.destroy$=new o.xQ}ngOnInit(){var v;this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(n.sBO),n.Y36(U.Is,8))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(v,m){1&v&&n.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(n.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),n.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:O,ngContentSelectors:H,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(v,m){if(1&v&&(n.F$t(),n.YNc(0,W,1,1,"i",0),n.YNc(1,$,3,1,"ng-container",1),n.Hsn(2),n.YNc(3,G,3,2,"span",2),n.YNc(4,S,1,0,"ng-template",null,3,n.W1O)),2&v){const ae=n.MAs(5);n.Q6J("ngIf",m.nzIcon),n.xp6(1),n.Q6J("nzStringTemplateOutlet",m.nzTitle),n.xp6(2),n.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ae)}},directives:[b.O5,N.Ls,l.f,b.RF,b.n9,b.ED],encapsulation:2,changeDetection:0}),Z})(),$e=(()=>{class Z{constructor(v,m,ae){this.elementRef=v,this.renderer=m,this.directionality=ae,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new o.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:ae,menuClass:me}=v;(m||ae)&&this.calcMotionState(),me&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.removeClass(this.elementRef.nativeElement,Me)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Me=>!!Me).forEach(Me=>{this.renderer.addClass(this.elementRef.nativeElement,Me)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(U.Is,8))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(v,m){2&v&&(n.d8E("@collapseMotion",m.expandState),n.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[n.TTD],attrs:ie,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&n.YNc(0,ue,0,0,"ng-template",0),2&v&&n.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[b.tP],encapsulation:2,data:{animation:[F.J_]},changeDetection:0}),Z})(),Ge=(()=>{class Z{constructor(v){this.directionality=v,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new n.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new o.xQ}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:ae}=v;(m||ae)&&this.calcMotionState()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(U.Is,8))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(v,m){1&v&&n.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(n.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),n.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[n.TTD],attrs:he,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&(n.TgZ(0,"div",0),n.YNc(1,ze,0,0,"ng-template",1),n.qZA()),2&v&&(n.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),n.Q6J("ngClass",m.menuClass),n.xp6(1),n.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[b.mk,b.tP],encapsulation:2,data:{animation:[F.$C,F.mF]},changeDetection:0}),Z})();const Be=[D.yW.rightTop,D.yW.right,D.yW.rightBottom,D.yW.leftTop,D.yW.left,D.yW.leftBottom],Ne=[D.yW.bottomLeft];let be=(()=>{class Z{constructor(v,m,ae,me,Me,Le,Oe){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=ae,this.platform=me,this.isMenuInsideDropDown=Me,this.directionality=Le,this.noAnimation=Oe,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new n.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new o.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(v){this.nzSubmenuService.setOpenStateWithoutDebounce(v)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(v){this.isActive=v,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(v)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(v){const m=(0,D.d_)(v);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var v;this.nzMenuService.theme$.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Ne:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,g.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,I.R)(this.destroy$)).subscribe(([m,ae])=>{this.inlinePaddingLeft="inline"===m?this.level*ae:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const v=this.listOfNzMenuItemDirective,m=v.changes,ae=(0,z.T)(m,...v.map(me=>me.selected$));m.pipe((0,J.O)(v),(0,x.w)(()=>ae),(0,J.O)(!0),(0,a.U)(()=>v.some(me=>me.nzSelected)),(0,I.R)(this.destroy$)).subscribe(me=>{this.isSelected=me,this.cdr.markForCheck()})}ngOnChanges(v){const{nzOpen:m}=v;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(E),n.Y36(n.sBO),n.Y36(ce),n.Y36(L.t4),n.Y36(y),n.Y36(U.Is,8),n.Y36(X.P,9))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["","nz-submenu",""]],contentQueries:function(v,m,ae){if(1&v&&(n.Suo(ae,Z,5),n.Suo(ae,Ce,5)),2&v){let me;n.iGM(me=n.CRH())&&(m.listOfNzSubMenuComponent=me),n.iGM(me=n.CRH())&&(m.listOfNzMenuItemDirective=me)}},viewQuery:function(v,m){if(1&v&&n.Gf(V.xu,7,n.SBq),2&v){let ae;n.iGM(ae=n.CRH())&&(m.cdkOverlayOrigin=ae.first)}},hostVars:34,hostBindings:function(v,m){2&v&&n.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[n._Bn([ce]),n.TTD],attrs:De,ngContentSelectors:ee,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(v,m){if(1&v&&(n.F$t(se),n.TgZ(0,"div",0,1),n.NdJ("subMenuMouseState",function(me){return m.setMouseEnterState(me)})("toggleSubMenu",function(){return m.toggleSubMenu()}),n.YNc(2,oe,1,0,"ng-content",2),n.qZA(),n.YNc(3,pe,1,6,"div",3),n.YNc(4,te,1,5,"ng-template",null,4,n.W1O),n.YNc(6,w,1,0,"ng-template",null,5,n.W1O)),2&v){const ae=n.MAs(5);n.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),n.xp6(2),n.Q6J("ngIf",!m.nzTitle),n.xp6(1),n.Q6J("ngIf","inline"===m.mode)("ngIfElse",ae)}},directives:[Se,$e,Ge,V.xu,b.O5,X.P,V.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzOpen",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzDisabled",void 0),Z})();function Re(Z,de){return Z||de}function Qe(Z){return Z||!1}let xe=(()=>{class Z{constructor(v,m,ae,me){this.nzMenuService=v,this.isMenuInsideDropDown=m,this.cdr=ae,this.directionality=me,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new n.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new o.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(v){this.nzInlineCollapsed=v,this.inlineCollapsed$.next(v)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(v=>v.nzOpen),this.listOfNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var v;(0,g.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,I.R)(this.destroy$)).subscribe(([m,ae])=>{this.actualMode=m?"vertical":ae,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ae=>ae.setSelectedState(ae===m))}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,I.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(v){const{nzInlineCollapsed:m,nzInlineIndent:ae,nzTheme:me,nzMode:Me}=v;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ae&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),me&&this.nzMenuService.setTheme(this.nzTheme),Me&&(this.mode$.next(this.nzMode),!v.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Le=>Le.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(E),n.Y36(y),n.Y36(n.sBO),n.Y36(U.Is,8))},Z.\u0275dir=n.lG2({type:Z,selectors:[["","nz-menu",""]],contentQueries:function(v,m,ae){if(1&v&&(n.Suo(ae,Ce,5),n.Suo(ae,be,5)),2&v){let me;n.iGM(me=n.CRH())&&(m.listOfNzMenuItemDirective=me),n.iGM(me=n.CRH())&&(m.listOfNzSubMenuComponent=me)}},hostVars:34,hostBindings:function(v,m){2&v&&n.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[n._Bn([{provide:q,useClass:E},{provide:E,useFactory:Re,deps:[[new n.tp0,new n.FiY,E],q]},{provide:y,useFactory:Qe,deps:[[new n.tp0,new n.FiY,y]]}]),n.TTD]}),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,k.yF)()],Z.prototype,"nzSelectable",void 0),Z})();function Ze(Z){return Z||!1}let Ye=(()=>{class Z{constructor(v,m,ae){this.elementRef=v,this.renderer=m,this.isMenuInsideDropDown=ae,this.renderer.addClass(v.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const v=this.titleElement.nativeElement.nextElementSibling;v&&this.renderer.addClass(v,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(y))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["","nz-menu-group",""]],viewQuery:function(v,m){if(1&v&&n.Gf(ge,5),2&v){let ae;n.iGM(ae=n.CRH())&&(m.titleElement=ae.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[n._Bn([{provide:y,useFactory:Ze,deps:[[new n.tp0,new n.FiY,y]]}])],attrs:_e,ngContentSelectors:Ae,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(v,m){1&v&&(n.F$t(Ie),n.TgZ(0,"div",null,0),n.YNc(2,Te,2,1,"ng-container",1),n.YNc(3,Ee,1,0,"ng-content",2),n.qZA(),n.Hsn(4)),2&v&&(n.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),n.xp6(2),n.Q6J("nzStringTemplateOutlet",m.nzTitle),n.xp6(1),n.Q6J("ngIf",!m.nzTitle))},directives:[l.f,b.O5],encapsulation:2,changeDetection:0}),Z})(),We=(()=>{class Z{constructor(v,m){this.elementRef=v,this.renderer=m,this.renderer.addClass(v.nativeElement,"ant-dropdown-menu-item-divider")}}return Z.\u0275fac=function(v){return new(v||Z)(n.Y36(n.SBq),n.Y36(n.Qsj))},Z.\u0275dir=n.lG2({type:Z,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),Z})(),Je=(()=>{class Z{}return Z.\u0275fac=function(v){return new(v||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[[U.vT,b.ez,L.ud,V.U8,N.PV,X.g,l.T]]}),Z})()},3610:(le,Y,i)=>{i.d(Y,{$6:()=>D,lU:()=>U});var e=i(655),n=i(5e3),o=i(8076),s=i(9439),z=i(1721),g=i(404),a=i(4832),B=i(226),c=i(2845),_=i(6950),C=i(9808),T=i(969);function I(L,X){if(1&L&&(n.ynx(0),n._uU(1),n.BQk()),2&L){const b=n.oxw(3);n.xp6(1),n.Oqu(b.nzTitle)}}function J(L,X){if(1&L&&(n.TgZ(0,"div",10),n.YNc(1,I,2,1,"ng-container",9),n.qZA()),2&L){const b=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",b.nzTitle)}}function x(L,X){if(1&L&&(n.ynx(0),n._uU(1),n.BQk()),2&L){const b=n.oxw(2);n.xp6(1),n.Oqu(b.nzContent)}}function k(L,X){if(1&L&&(n.TgZ(0,"div",2)(1,"div",3)(2,"div",4),n._UZ(3,"span",5),n.qZA(),n.TgZ(4,"div",6)(5,"div"),n.YNc(6,J,2,1,"div",7),n.TgZ(7,"div",8),n.YNc(8,x,2,1,"ng-container",9),n.qZA()()()()()),2&L){const b=n.oxw();n.ekj("ant-popover-rtl","rtl"===b.dir),n.Q6J("ngClass",b._classMap)("ngStyle",b.nzOverlayStyle)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),n.xp6(6),n.Q6J("ngIf",b.nzTitle),n.xp6(2),n.Q6J("nzStringTemplateOutlet",b.nzContent)}}let U=(()=>{class L extends g.Mg{constructor(b,N,l,F,O,W){super(b,N,l,F,O,W),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new n.vpe,this.componentRef=this.hostView.createComponent(V)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return L.\u0275fac=function(b){return new(b||L)(n.Y36(n.SBq),n.Y36(n.s_b),n.Y36(n._Vd),n.Y36(n.Qsj),n.Y36(a.P,9),n.Y36(s.jY))},L.\u0275dir=n.lG2({type:L,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(b,N){2&b&&n.ekj("ant-popover-open",N.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[n.qOj]}),(0,e.gn)([(0,z.yF)()],L.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],L.prototype,"nzPopoverBackdrop",void 0),L})(),V=(()=>{class L extends g.XK{constructor(b,N,l){super(b,N,l),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,g.pu)(this.nzTitle)&&(0,g.pu)(this.nzContent)}}return L.\u0275fac=function(b){return new(b||L)(n.Y36(n.sBO),n.Y36(B.Is,8),n.Y36(a.P,9))},L.\u0275cmp=n.Xpm({type:L,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[n.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(b,N){1&b&&(n.YNc(0,k,9,9,"ng-template",0,1,n.W1O),n.NdJ("overlayOutsideClick",function(F){return N.onClickOutside(F)})("detach",function(){return N.hide()})("positionChange",function(F){return N.onPositionChange(F)})),2&b&&n.Q6J("cdkConnectedOverlayHasBackdrop",N.hasBackdrop)("cdkConnectedOverlayOrigin",N.origin)("cdkConnectedOverlayPositions",N._positions)("cdkConnectedOverlayOpen",N._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",N.nzArrowPointAtCenter)},directives:[c.pI,_.hQ,C.mk,C.PC,a.P,C.O5,T.f],encapsulation:2,data:{animation:[o.$C]},changeDetection:0}),L})(),D=(()=>{class L{}return L.\u0275fac=function(b){return new(b||L)},L.\u0275mod=n.oAB({type:L}),L.\u0275inj=n.cJS({imports:[[B.vT,C.ez,c.U8,T.T,_.e4,a.g,g.cg]]}),L})()},8144:(le,Y,i)=>{i.d(Y,{$1:()=>J,NU:()=>Q,zf:()=>U});var e=i(226),n=i(9808),o=i(5e3),s=i(655),z=i(8929),g=i(7625),a=i(9439),B=i(1721);function c(V,D){}const _=function(V){return{$implicit:V}};function C(V,D){if(1&V&&(o.TgZ(0,"span",4),o.YNc(1,c,0,0,"ng-template",5),o.qZA()),2&V){const L=o.oxw(),X=L.last,b=L.index,N=o.oxw();o.Udp("margin-bottom","vertical"===N.nzDirection?X?null:N.spaceSize:null,"px")("margin-right","horizontal"===N.nzDirection?X?null:N.spaceSize:null,"px"),o.xp6(1),o.Q6J("ngTemplateOutlet",N.nzSplit)("ngTemplateOutletContext",o.VKq(6,_,b))}}function T(V,D){if(1&V&&(o.TgZ(0,"div",1),o.GkF(1,2),o.qZA(),o.YNc(2,C,2,8,"span",3)),2&V){const L=D.$implicit,X=D.last,b=o.oxw();o.Udp("margin-bottom","vertical"===b.nzDirection?X?null:b.spaceSize:null,"px")("margin-right","horizontal"===b.nzDirection?X?null:b.spaceSize:null,"px"),o.xp6(1),o.Q6J("ngTemplateOutlet",L),o.xp6(1),o.Q6J("ngIf",b.nzSplit&&!X)}}const I=["*"];let J=(()=>{class V{constructor(){}}return V.\u0275fac=function(L){return new(L||V)},V.\u0275dir=o.lG2({type:V,selectors:[["","nzSpaceItem",""]]}),V})();const k={small:8,middle:16,large:24};let Q=(()=>{class V{constructor(L,X){this.nzConfigService=L,this.cdr=X,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=k.small,this.destroy$=new z.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?k[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,g.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return V.\u0275fac=function(L){return new(L||V)(o.Y36(a.jY),o.Y36(o.sBO))},V.\u0275cmp=o.Xpm({type:V,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(L,X,b){if(1&L&&o.Suo(b,J,4,o.Rgc),2&L){let N;o.iGM(N=o.CRH())&&(X.items=N)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(L,X){2&L&&(o.Udp("flex-wrap",X.nzWrap?"wrap":null),o.ekj("ant-space-horizontal","horizontal"===X.nzDirection)("ant-space-vertical","vertical"===X.nzDirection)("ant-space-align-start","start"===X.mergedAlign)("ant-space-align-end","end"===X.mergedAlign)("ant-space-align-center","center"===X.mergedAlign)("ant-space-align-baseline","baseline"===X.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[o.TTD],ngContentSelectors:I,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(L,X){1&L&&(o.F$t(),o.Hsn(0),o.YNc(1,T,3,6,"ng-template",0)),2&L&&(o.xp6(1),o.Q6J("ngForOf",X.items))},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,B.yF)()],V.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],V.prototype,"nzSize",void 0),V})(),U=(()=>{class V{}return V.\u0275fac=function(L){return new(L||V)},V.\u0275mod=o.oAB({type:V}),V.\u0275inj=o.cJS({imports:[[e.vT,n.ez]]}),V})()},7525:(le,Y,i)=>{i.d(Y,{W:()=>O,j:()=>W});var e=i(655),n=i(5e3),o=i(8929),s=i(591),z=i(839),g=i(8723),a=i(1177);class c{constructor(f){this.durationSelector=f}call(f,R){return R.subscribe(new _(f,this.durationSelector))}}class _ extends a.Ds{constructor(f,R){super(f),this.durationSelector=R,this.hasValue=!1}_next(f){try{const R=this.durationSelector.call(this,f);R&&this._tryNext(f,R)}catch(R){this.destination.error(R)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(f,R){let G=this.durationSubscription;this.value=f,this.hasValue=!0,G&&(G.unsubscribe(),this.remove(G)),G=(0,a.ft)(R,new a.IY(this)),G&&!G.closed&&this.add(this.durationSubscription=G)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const f=this.value,R=this.durationSubscription;R&&(this.durationSubscription=void 0,R.unsubscribe(),this.remove(R)),this.value=void 0,this.hasValue=!1,super._next(f)}}}var C=i(1059),T=i(5778),I=i(7545),J=i(7625),x=i(9439),k=i(1721),Q=i(226),U=i(9808),V=i(7144);function D($,f){1&$&&(n.TgZ(0,"span",3),n._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),n.qZA())}function L($,f){}function X($,f){if(1&$&&(n.TgZ(0,"div",8),n._uU(1),n.qZA()),2&$){const R=n.oxw(2);n.xp6(1),n.Oqu(R.nzTip)}}function b($,f){if(1&$&&(n.TgZ(0,"div")(1,"div",5),n.YNc(2,L,0,0,"ng-template",6),n.YNc(3,X,2,1,"div",7),n.qZA()()),2&$){const R=n.oxw(),G=n.MAs(1);n.xp6(1),n.ekj("ant-spin-rtl","rtl"===R.dir)("ant-spin-spinning",R.isLoading)("ant-spin-lg","large"===R.nzSize)("ant-spin-sm","small"===R.nzSize)("ant-spin-show-text",R.nzTip),n.xp6(1),n.Q6J("ngTemplateOutlet",R.nzIndicator||G),n.xp6(1),n.Q6J("ngIf",R.nzTip)}}function N($,f){if(1&$&&(n.TgZ(0,"div",9),n.Hsn(1),n.qZA()),2&$){const R=n.oxw();n.ekj("ant-spin-blur",R.isLoading)}}const l=["*"],F="spin";let O=(()=>{class ${constructor(R,G,S){this.nzConfigService=R,this.cdr=G,this.directionality=S,this._nzModuleName=F,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new o.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new z.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var R;this.delay$.pipe((0,C.O)(this.nzDelay),(0,T.x)(),(0,I.w)(S=>0===S?this.spinning$:this.spinning$.pipe(function B($){return f=>f.lift(new c($))}(H=>(0,g.H)(H?S:0)))),(0,J.R)(this.destroy$)).subscribe(S=>{this.isLoading=S,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(F).pipe((0,J.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(R=this.directionality.change)||void 0===R||R.pipe((0,J.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(R){const{nzSpinning:G,nzDelay:S}=R;G&&this.spinning$.next(this.nzSpinning),S&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return $.\u0275fac=function(R){return new(R||$)(n.Y36(x.jY),n.Y36(n.sBO),n.Y36(Q.Is,8))},$.\u0275cmp=n.Xpm({type:$,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(R,G){2&R&&n.ekj("ant-spin-nested-loading",!G.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[n.TTD],ngContentSelectors:l,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(R,G){1&R&&(n.F$t(),n.YNc(0,D,5,0,"ng-template",null,0,n.W1O),n.YNc(2,b,4,12,"div",1),n.YNc(3,N,2,2,"div",2)),2&R&&(n.xp6(2),n.Q6J("ngIf",G.isLoading),n.xp6(1),n.Q6J("ngIf",!G.nzSimple))},directives:[U.O5,U.tP],encapsulation:2}),(0,e.gn)([(0,x.oS)()],$.prototype,"nzIndicator",void 0),(0,e.gn)([(0,k.Rn)()],$.prototype,"nzDelay",void 0),(0,e.gn)([(0,k.yF)()],$.prototype,"nzSimple",void 0),(0,e.gn)([(0,k.yF)()],$.prototype,"nzSpinning",void 0),$})(),W=(()=>{class ${}return $.\u0275fac=function(R){return new(R||$)},$.\u0275mod=n.oAB({type:$}),$.\u0275inj=n.cJS({imports:[[Q.vT,U.ez,V.Q8]]}),$})()},8481:(le,Y,i)=>{i.d(Y,{X:()=>J,j:()=>I});var e=i(655),n=i(5e3),o=i(8929),s=i(7625),z=i(8693),g=i(1721),a=i(226),B=i(9808),c=i(5017),_=i(3075);function C(x,k){if(1&x){const Q=n.EpF();n.TgZ(0,"i",1),n.NdJ("click",function(V){return n.CHM(Q),n.oxw().closeTag(V)}),n.qZA()}}const T=["*"];let I=(()=>{class x{constructor(Q,U,V,D){this.cdr=Q,this.renderer=U,this.elementRef=V,this.directionality=D,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new n.vpe,this.nzCheckedChange=new n.vpe,this.dir="ltr",this.destroy$=new o.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Q){this.nzOnClose.emit(Q),Q.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Q=this.elementRef.nativeElement,U=new RegExp(`(ant-tag-(?:${[...z.uf,...z.Bh].join("|")}))`,"g"),V=Q.classList.toString(),D=[];let L=U.exec(V);for(;null!==L;)D.push(L[1]),L=U.exec(V);Q.classList.remove(...D)}setPresetColor(){const Q=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,z.o2)(this.nzColor)||(0,z.M8)(this.nzColor)),this.isPresetColor&&Q.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,s.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzColor:U}=Q;U&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return x.\u0275fac=function(Q){return new(Q||x)(n.Y36(n.sBO),n.Y36(n.Qsj),n.Y36(n.SBq),n.Y36(a.Is,8))},x.\u0275cmp=n.Xpm({type:x,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Q,U){1&Q&&n.NdJ("click",function(){return U.updateCheckedStatus()}),2&Q&&(n.Udp("background-color",U.isPresetColor?"":U.nzColor),n.ekj("ant-tag-has-color",U.nzColor&&!U.isPresetColor)("ant-tag-checkable","checkable"===U.nzMode)("ant-tag-checkable-checked",U.nzChecked)("ant-tag-rtl","rtl"===U.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[n.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Q,U){1&Q&&(n.F$t(),n.Hsn(0),n.YNc(1,C,1,0,"i",0)),2&Q&&(n.xp6(1),n.Q6J("ngIf","closeable"===U.nzMode))},directives:[B.O5,c.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,g.yF)()],x.prototype,"nzChecked",void 0),x})(),J=(()=>{class x{}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275mod=n.oAB({type:x}),x.\u0275inj=n.cJS({imports:[[a.vT,B.ez,_.u5,c.PV]]}),x})()}}]);