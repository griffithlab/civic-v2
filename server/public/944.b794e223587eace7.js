"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(me,V,i)=>{i.d(V,{H:()=>De});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),f=i(325),I=i(8481),a=i(3610),b=i(3240),l=i(4850),h=i(2198),C=i(7630),y=i(7484),T=i(5017),j=i(3098),O=i(1894),k=i(8144),Q=i(6949),L=i(160);function Z(se,he){if(1&se&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&se){const E=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",E.officialName," ")}}function M(se,he){if(1&se&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&se){const E=he.$implicit;n.xp6(1),n.Oqu(E)}}function $(se,he){if(1&se&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&se){const E=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",E.geneAliases)}}function ee(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/flags"),n.xp6(3),n.hij(" Flags (",E.flags.totalCount,") ")}}function w(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",E.revisions.totalCount,") ")}}function N(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/comments"),n.xp6(3),n.hij(" Comments (",E.comments.totalCount,") ")}}function d(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,Z,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,$,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,ee,4,2,"a",10),n.YNc(12,w,4,2,"a",10),n.YNc(13,N,4,2,"a",10),n.qZA()()()(),n.BQk()),2&se){const E=he.ngIf,oe=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",oe),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",E.geneAliases.length>0),n.xp6(2),n.hij(" ",E.variants.totalCount," ")}}let R=(()=>{class se{constructor(E){this.gql=E}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,l.U)(({data:E})=>null==E?void 0:E.gene),(0,h.h)(b.ep))}}return se.\u0275fac=function(E){return new(E||se)(n.Y36(C.rJ8))},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(E,oe){1&E&&(n.TgZ(0,"div",0),n.YNc(1,d,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,oe.gene$)))},directives:[s.O5,y.bd,T.Ls,j.R7,j.uj,s.sg,I.j,O.SK,O.t3,k.NU,k.$1,f.yS],pipes:[Q.fM,L.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),se})();var S=i(1730),W=i(4557);function G(se,he){}function g(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,G,0,0,"ng-template",5),n.qZA(),n.BQk()),2&se){const E=n.oxw(),oe=n.MAs(2);n.xp6(1),n.Q6J("routerLink",E.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",oe)}}function B(se,he){}function U(se,he){if(1&se&&n._UZ(0,"cvc-gene-popover",8),2&se){const E=n.oxw(2);n.Q6J("geneId",E.gene.id)}}function A(se,he){if(1&se){const E=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(Y){return n.CHM(E),n.oxw().itemClosed(Y)}),n.YNc(1,B,0,0,"ng-template",5),n.qZA(),n.YNc(2,U,1,1,"ng-template",null,7,n.W1O)}if(2&se){const E=n.MAs(3),oe=n.oxw(),Y=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",oe.onCloseClicked?0:.5)("nzPopoverContent",E)("nzPopoverTrigger",oe.enablePopover?"hover":null)("nzMode",oe.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",Y)}}function q(se,he){}function ie(se,he){if(1&se&&n.YNc(0,q,0,0,"ng-template",5),2&se){n.oxw();const E=n.MAs(2);n.Q6J("ngTemplateOutlet",E)}}function fe(se,he){if(1&se&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&se){const E=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,E.gene.name,12)," ")}}function _e(se,he){if(1&se&&n._uU(0),2&se){const E=n.oxw(2);n.hij(" ",E.gene.name," ")}}function Te(se,he){if(1&se&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,fe,3,4,"ng-container",0),n.YNc(4,_e,1,1,"ng-template",null,11,n.W1O)),2&se){const E=n.MAs(5),oe=n.oxw();n.Q6J("flagged",oe.gene.flagged)("entityColor",oe.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",oe.truncateLongName)("ngIfElse",E)}}let De=(()=>{class se extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return se.\u0275fac=function(E){return new(E||se)},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(E,oe){if(1&E&&(n.YNc(0,g,3,2,"ng-container",0),n.YNc(1,A,4,5,"ng-template",null,1,n.W1O),n.YNc(3,ie,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Te,6,7,"ng-template",null,3,n.W1O)),2&E){const Y=n.MAs(4);n.Q6J("ngIf",oe.linked)("ngIfElse",Y)}},directives:[s.O5,f.yS,s.tP,I.j,a.lU,R,S.b,T.Ls],pipes:[L.a,W.W],styles:[""],changeDetection:0}),se})()},3309:(me,V,i)=>{i.d(V,{U:()=>k});var e=i(9808),o=i(325),n=i(8481),s=i(5017),f=i(3610),I=i(6905),a=i(6949),b=i(7484),l=i(3098),h=i(1894),C=i(8144),y=i(5e3);let T=(()=>{class Q{}return Q.\u0275fac=function(Z){return new(Z||Q)},Q.\u0275mod=y.oAB({type:Q}),Q.\u0275inj=y.cJS({imports:[[e.ez,o.Bz,a.WG,b.vh,h.Jb,l.q6,n.X,s.PV,C.zf,I.s]]}),Q})();var j=i(4401),O=i(6429);let k=(()=>{class Q{}return Q.\u0275fac=function(Z){return new(Z||Q)},Q.\u0275mod=y.oAB({type:Q}),Q.\u0275inj=y.cJS({imports:[[e.ez,o.Bz,n.X,f.$6,s.PV,j.mS,I.s,T,O.C]]}),Q})()},1912:(me,V,i)=>{i.d(V,{s:()=>j});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),f=i(3640),a=i(2160),b=i(3762),l=i(5017);let h=(()=>{class O{constructor(Q){this.cookies=Q,this.location=function I(O){return encodeURIComponent(O).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return O.\u0275fac=function(Q){return new(Q||O)(e.Y36(a.N))},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Q,L){1&Q&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&Q&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken))},directives:[b.n_,b.AA,o.ix,n.dQ,s.w,l.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),O})();function C(O,k){1&O&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function y(O,k){1&O&&e._uU(0," Sign In / Sign Up\n")}function T(O,k){if(1&O){const Q=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(Q),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let j=(()=>{class O{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Q,L){if(1&Q&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return L.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return L.authVisible=M})("nzOnCancel",function(){return L.handleCancel()}),e.YNc(4,C,4,0,"ng-container",2),e.qZA(),e.YNc(5,y,1,0,"ng-template",null,3,e.W1O),e.YNc(7,T,2,0,"ng-template",null,4,e.W1O)),2&Q){const Z=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",L.authVisible)("nzTitle",Z)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,f.du,f.Hf,h],styles:["[_nghost-%COMP%]{display:inline-block}"]}),O})()},1844:(me,V,i)=>{i.d(V,{B:()=>b});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),f=i(5017),I=i(5e3);let a=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=I.oAB({type:l}),l.\u0275inj=I.cJS({imports:[[e.ez,f.PV,s.Ph,o.sL]]}),l})(),b=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=I.oAB({type:l}),l.\u0275inj=I.cJS({imports:[[e.ez,o.sL,n.Qp,a]]}),l})()},1730:(me,V,i)=>{i.d(V,{b:()=>l});var e=i(9771),o=i(5e3),n=i(9808);const s=function(h){return{background:h}};function f(h,C){if(1&h&&o._UZ(0,"div",3),2&h){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.flagColor))}}function I(h,C){if(1&h&&o._UZ(0,"div",4),2&h){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.entityColor))}}function a(h,C){if(1&h&&o._UZ(0,"div",5),2&h){const y=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,y.entityColor))}}const b=["*"];let l=(()=>{class h{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return h.\u0275fac=function(y){return new(y||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:b,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(y,T){1&y&&(o.F$t(),o.Hsn(0),o.YNc(1,f,1,3,"div",0),o.YNc(2,I,1,3,"div",1),o.YNc(3,a,1,3,"div",2)),2&y&&(o.xp6(1),o.Q6J("ngIf",T.flagged),o.xp6(1),o.Q6J("ngIf",T.hasRevisions),o.xp6(1),o.Q6J("ngIf",T.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),h})()},6429:(me,V,i)=>{i.d(V,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),f})()},6550:(me,V,i)=>{i.d(V,{l:()=>I});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const f=["*"];let I=(()=>{class a{set href(l){if(!l)throw new Error("link-tag link Input requires string.");this._href=l}get href(){return this._href}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:f,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(l,h){1&l&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&l&&(e.Q6J("href",h.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",h.tooltip)("nzTooltipTrigger",h.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",h.iconName?h.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),a})()},4989:(me,V,i)=>{i.d(V,{X:()=>I});var e=i(9808),o=i(404),n=i(8481),s=i(5017),f=i(5e3);let I=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),a})()},7881:(me,V,i)=>{i.d(V,{L:()=>I});var e=i(5e3),o=i(9808),n=i(6699);function s(a,b){if(1&a&&e._UZ(0,"nz-avatar",2),2&a){const l=e.oxw();e.Q6J("nzSrc",l.user.profileImagePath)("nzShape",l.shape?l.shape:"circle")("nzSize",l.size)}}function f(a,b){if(1&a&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&a){const l=e.oxw();e.Q6J("nzSize",l.size)("nzText",e.lcZ(1,2,l.user.displayName.charAt(0)))}}let I=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(l,h){if(1&l&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,f,2,4,"ng-template",null,1,e.W1O)),2&l){const C=e.MAs(2);e.Q6J("ngIf",h.user.profileImagePath)("ngIfElse",C)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(me,V,i)=>{i.d(V,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),f})()},8664:(me,V,i)=>{i.d(V,{I:()=>de});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),f=i(325),I=i(8481),a=i(3610),b=i(3240),l=i(4850),h=i(2198),C=i(7630),y=i(7484),T=i(5017),j=i(3193),O=i(3098),k=i(6550),Q=i(1894),L=i(8144),Z=i(6949),M=i(160);function $(F,ce){if(1&F&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&F){const ne=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",ne.name," ")}}function ee(F,ce){if(1&F&&n._UZ(0,"cvc-gene-tag",14),2&F){const ne=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",ne.gene)}}function w(F,ce){if(1&F&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&F){const ne=ce.$implicit;n.xp6(1),n.Oqu(ne)}}function N(F,ce){if(1&F&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,w,2,1,"nz-tag",16),n.qZA()),2&F){const ne=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",ne.variantAliases)}}function d(F,ce){if(1&F&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&F){const ne=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",ne.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",ne.alleleRegistryId," ")}}function R(F,ce){if(1&F&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&F){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/flags"),n.xp6(3),n.hij(" Flags (",ne.flags.totalCount,") ")}}function S(F,ce){if(1&F&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&F){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",ne.revisions.totalCount,") ")}}function W(F,ce){if(1&F&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&F){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/comments"),n.xp6(3),n.hij(" Comments (",ne.comments.totalCount,") ")}}function G(F,ce){if(1&F&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,$,3,4,"ng-template",null,3,n.W1O),n.YNc(4,ee,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,N,2,1,"nz-descriptions-item",6),n.YNc(8,d,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,R,4,2,"a",12),n.YNc(15,S,4,2,"a",12),n.YNc(16,W,4,2,"a",12),n.qZA()()()(),n.BQk()),2&F){const ne=ce.ngIf,te=n.MAs(3),ue=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",te)("nzExtra",ue),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",ne.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",ne.alleleRegistryId&&"unregistered"!=ne.alleleRegistryId),n.xp6(2),n.hij(" ",ne.molecularProfiles.totalCount," ")}}let g=(()=>{class F{constructor(ne){this.gql=ne}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,l.U)(({data:ne})=>null==ne?void 0:ne.variant),(0,h.h)(b.ep))}}return F.\u0275fac=function(ne){return new(ne||F)(n.Y36(C.ZYZ))},F.\u0275cmp=n.Xpm({type:F,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ne,te){1&ne&&(n.TgZ(0,"div",0),n.YNc(1,G,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&ne&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,te.variant$)))},directives:[s.O5,y.bd,T.Ls,j.H,O.R7,O.uj,s.sg,I.j,k.l,Q.SK,Q.t3,L.NU,L.$1,f.yS],pipes:[Z.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),F})();var B=i(1730),U=i(4557);function A(F,ce){}function q(F,ce){if(1&F&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,A,0,0,"ng-template",5),n.qZA(),n.BQk()),2&F){const ne=n.oxw(),te=n.MAs(2);n.xp6(1),n.Q6J("routerLink",ne.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",te)}}function ie(F,ce){}function fe(F,ce){if(1&F&&n._UZ(0,"cvc-variant-popover",9),2&F){const ne=n.oxw(3);n.Q6J("variantId",ne.variant.id)}}function _e(F,ce){if(1&F&&n.YNc(0,fe,1,1,"cvc-variant-popover",8),2&F){const ne=n.oxw(2);n.Q6J("ngIf",ne.enablePopover)}}const Te=function(F){return{deprecated:F}};function De(F,ce){if(1&F){const ne=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(ue){return n.CHM(ne),n.oxw().itemClosed(ue)}),n.YNc(1,ie,0,0,"ng-template",5),n.qZA(),n.YNc(2,_e,1,1,"ng-template",null,7,n.W1O)}if(2&F){const ne=n.MAs(3),te=n.oxw(),ue=n.MAs(6);n.Q6J("ngClass",n.VKq(6,Te,te.variant.deprecated))("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",ne)("nzPopoverTrigger",te.enablePopover?"hover":null)("nzMode",te.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",ue)}}function se(F,ce){}function he(F,ce){if(1&F&&n.YNc(0,se,0,0,"ng-template",5),2&F){n.oxw();const ne=n.MAs(2);n.Q6J("ngTemplateOutlet",ne)}}function E(F,ce){if(1&F&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&F){const ne=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,ne.variant.name,20)," ")}}function oe(F,ce){if(1&F&&n._uU(0),2&F){const ne=n.oxw(2);n.hij(" ",ne.variant.name," ")}}function Y(F,ce){if(1&F&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,E,3,4,"ng-container",0),n.YNc(3,oe,1,1,"ng-template",null,12,n.W1O)),2&F){const ne=n.MAs(4),te=n.oxw();n.Q6J("flagged",te.variant.flagged)("entityColor",te.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",te.iconColor),n.xp6(1),n.Q6J("ngIf",te.truncateLongName)("ngIfElse",ne)}}let de=(()=>{class F extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return F.\u0275fac=function(ne){return new(ne||F)},F.\u0275cmp=n.Xpm({type:F,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,te){if(1&ne&&(n.YNc(0,q,3,2,"ng-container",0),n.YNc(1,De,4,8,"ng-template",null,1,n.W1O),n.YNc(3,he,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Y,5,5,"ng-template",null,3,n.W1O)),2&ne){const ue=n.MAs(4);n.Q6J("ngIf",te.linked)("ngIfElse",ue)}},directives:[s.O5,f.yS,s.tP,I.j,a.lU,s.mk,g,B.b,T.Ls],pipes:[U.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),F})()},4867:(me,V,i)=>{i.d(V,{Q:()=>Q});var e=i(9808),o=i(325),n=i(8481),s=i(5017),f=i(3610),I=i(6949),a=i(7484),b=i(1894),l=i(3098),h=i(8144),C=i(3309),y=i(4989),T=i(6905),j=i(5e3);let O=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,I.WG,a.vh,b.Jb,l.q6,n.X,s.PV,h.zf,T.s,C.U,y.X]]}),L})();var k=i(6429);let Q=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,n.X,f.$6,s.PV,T.s,O,k.C]]}),L})()},160:(me,V,i)=>{i.d(V,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(I){return(0,e.f)(I)}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(me,V,i)=>{i.d(V,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(I){this.sanitizer=I}transform(I,a){if(!a||""==a)return I;const b=new RegExp(a,"gi"),l=I.match(b);if(!l)return I;let h=I.replace(b,`<span class='typeahead-match'>${l[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(h)}}return s.\u0275fac=function(I){return new(I||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(me,V,i)=>{i.d(V,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),f})()},7742:(me,V,i)=>{i.d(V,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(I){return I?(0,e.c)(I):""}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(me,V,i)=>{i.d(V,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(f,I=25){if(f.length>I){let b=f.slice(0,I);var a=b.lastIndexOf(" ");return b.slice(0,a)+"\u2026"}return f}}return n.\u0275fac=function(f){return new(f||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(me,V,i)=>{i.d(V,{a:()=>h});var e=i(655),o=i(7630),n=i(4987),s=i(373),f=i(4850),I=i(1059),a=i(5154),b=i(5e3),l=i(520);let h=class{constructor(y,T){function j(M){return!(!M||M.role!==o.i44.Admin)}function O(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function k(M){return!(!M||M.role!==o.i44.Curator)}function Q(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function L(M){var $,ee;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===($=M.mostRecentConflictOfInterestStatement)||void 0===$?void 0:$.coiStatus)!=o.Mgx.Conflict&&(null===(ee=M.mostRecentConflictOfInterestStatement)||void 0===ee?void 0:ee.coiStatus)!=o.Mgx.Valid)}function Z(M){if(M.mostRecentOrganizationId)return M.organizations.find($=>$.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=y,this.http=T,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,f.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:Q(M),canModerate:L(M),isAdmin:j(M),isEditor:O(M),isCurator:k(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:Z(M),invalidCoi:O(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,I.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,f.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,f.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,f.U)(M=>j(M))),this.isEditor$=this.viewer$.pipe((0,f.U)(M=>O(M))),this.isCurator$=this.viewer$.pipe((0,f.U)(M=>k(M))),this.canCurate$=this.viewer$.pipe((0,f.U)(M=>Q(M))),this.canModerate$=this.viewer$.pipe((0,f.U)(M=>L(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};h.\u0275fac=function(y){return new(y||h)(b.LFG(o.Tt7),b.LFG(l.eN))},h.\u0275prov=b.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h=(0,e.gn)([(0,n.c)()],h)},6654:(me,V,i)=>{i.d(V,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(f){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(f){return new(f||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(f,I){},encapsulation:2}),n})()},915:(me,V,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(V,{E:()=>e})},6530:(me,V,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}i.d(V,{c:()=>e})},9771:(me,V,i)=>{i.d(V,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(n){let s="#AAAAAA";if(n){const f=e.get(n);f&&(s=f)}return s}},6123:(me,V,i)=>{i.d(V,{U:()=>f});var e=i(8929),o=i(591),n=i(7625),s=i(537);class f{constructor(a){this.networkErrorService=a}mutate(a,b,l,h){let C=new e.xQ,y={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{C.next(),C.complete()}};return y.isSubmitting$.next(!0),a.mutate(b,l).pipe((0,n.R)(C),(0,s.x)(()=>{y.isSubmitting$.next(!1)})).subscribe({next:T=>{T.data&&h&&h(T.data)},error:T=>{T.graphQLErrors.length>0?y.submitError$.next(T.graphQLErrors.map(j=>j.message)):T.networkError&&this.networkErrorService.networkError$.next(T.networkError),y.cleanup()},complete:()=>{y.submitError$.next([]),y.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),y.cleanup()}}),y}}},9397:(me,V,i)=>{i.d(V,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(f){this.host=f,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(f){return new(f||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(me,V,i)=>{i.d(V,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(me,V,i)=>{i.d(V,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(I,a){1&I&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(me,V,i)=>{i.d(V,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(me,V,i)=>{i.d(V,{V:()=>b});var e=i(5e3),o=i(9808),n=i(2359);function s(l,h){if(1&l&&e._UZ(0,"nz-alert",4),2&l){const C=e.oxw();e.Q6J("nzDescription",C.errors[0])}}function f(l,h){if(1&l&&e._UZ(0,"nz-alert",5),2&l){e.oxw();const C=e.MAs(3);e.Q6J("nzDescription",C)}}function I(l,h){if(1&l&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&l){const C=h.$implicit;e.xp6(1),e.Oqu(C)}}function a(l,h){if(1&l&&(e.TgZ(0,"ul",6),e.YNc(1,I,2,1,"li",7),e.qZA()),2&l){const C=e.oxw();e.xp6(1),e.Q6J("ngForOf",C.errors)}}let b=(()=>{class l{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return l.\u0275fac=function(C){return new(C||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(C,y){1&C&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,f,1,1,"nz-alert",1),e.YNc(2,a,2,1,"ng-template",2,3,e.W1O)),2&C&&(e.Q6J("ngIf",1===y.errors.length),e.xp6(1),e.Q6J("ngIf",y.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),l})()},7008:(me,V,i)=>{i.d(V,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),f})()},6789:(me,V,i)=>{i.d(V,{_:()=>y});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),f=i(6949),I=i(9552),a=i(8776),b=i(5017),l=i(404),h=i(5e3);let C=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=h.oAB({type:T}),T.\u0275inj=h.cJS({imports:[[e.ez,f.WG,a.X0,I.j,s.cD,b.PV,l.cg,n.s]]}),T})(),y=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=h.oAB({type:T}),T.\u0275inj=h.cJS({imports:[[e.ez,f.WG,a.X0,o.vh,I.j,s.cD,b.PV,l.cg,C,n.s]]}),T})()},1825:(me,V,i)=>{i.d(V,{A:()=>a});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),f=i(6949),I=i(5e3);let a=(()=>{class b{}return b.\u0275fac=function(h){return new(h||b)},b.\u0275mod=I.oAB({type:b}),b.\u0275inj=I.cJS({imports:[[e.ez,f.WG,o.sL,n.Rt,s.b1]]}),b})()},6612:(me,V,i)=>{i.d(V,{m:()=>b});var e=i(655),o=i(5e3),n=i(4987),s=i(5254),f=i(5778),a=i(4850);let b=class{constructor(h){this.el=h,this.domChange=new o.vpe,this.changes=new MutationObserver(C=>{(0,s.D)(C).pipe((0,a.U)(y=>{const T=y.target;return"class"===y.attributeName?{type:"class",change:T.classList.value,key:`${y.attributeName}:${T.classList.value}`}:"disabled"===y.attributeName?{type:"disabled",change:T.disabled,key:`${y.attributeName}:${T.disabled}`}:"hidden"===y.attributeName?{type:"hidden",change:T.hidden,key:`${y.attributeName}:${T.hidden}`}:{type:y.attributeName,change:"unknown change type",key:`${y.attributeName}:unknown-change-type`}}),function I(l,h){return(0,f.x)((C,y)=>h?h(C[l],y[l]):C[l]===y[l])}("key"),(0,n.t)(this)).subscribe(y=>{this.domChange.emit(y)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`),this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}};b.\u0275fac=function(h){return new(h||b)(o.Y36(o.SBq))},b.\u0275dir=o.lG2({type:b,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),b=(0,e.gn)([(0,n.c)()],b)},7905:(me,V,i)=>{i.d(V,{nT:()=>I,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class I{constructor(b){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(l=>l):(0,n.o6)(o.kqt).map(l=>l),this.getSignificanceOptions=l=>{const h=this.validStates.get(l);return(null==h?void 0:h.significance)||[]},this.isValidSignificanceOption=(l,h)=>{const C=this.validStates.get(l);return!C||C.significance.includes(h)},this.getDirectionOptions=l=>{const h=this.validStates.get(l);return(null==h?void 0:h.entityDirection)||[]},this.isValidDirectionOption=(l,h)=>{const C=this.validStates.get(l);return!C||C.entityDirection.includes(h)},this.requiresDrug=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresDrug},this.requiresDisease=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresDisease},this.requiresAcmgCodes=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresAcmgCodes},this.requiresAmpLevel=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresAmpLevel},this.requiresClingenCodes=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresClingenCodes},this.allowsFdaApproval=l=>{const h=this.validStates.get(l);return void 0===h||h.allowsFdaApproval},this.getOptionsFromEnums=l=>0===l.length?[]:l.map(h=>({value:h,label:(0,e.E)(h)})),this.entityName=b,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(me,V,i)=>{i.d(V,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,significance:[e.y1h.Sensitivityresponse,e.y1h.Resistance,e.y1h.AdverseResponse,e.y1h.ReducedSensitivity,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,significance:[e.y1h.Positive,e.y1h.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,significance:[e.y1h.BetterOutcome,e.y1h.PoorOutcome,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,significance:[e.y1h.Oncogenicity,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,significance:[e.y1h.Predisposition,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,significance:[e.y1h.GainOfFunction,e.y1h.LossOfFunction,e.y1h.UnalteredFunction,e.y1h.Neomorphic,e.y1h.DominantNegative,e.y1h.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(me,V,i)=>{i.d(V,{E:()=>j});var e=i(9808),o=i(3075),n=i(325),s=i(8776),f=i(304),I=i(6042),a=i(5e3),b=i(2643),l=i(2683);function h(O,k){if(1&O){const Q=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(Q),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function C(O,k){if(1&O&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&O){const Q=a.oxw();a.Q6J("routerLink",Q.redirectPath)}}const T={name:"cancel-button",component:(()=>{class O extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Q,L,Z,M;(null===(Q=this.field.templateOptions)||void 0===Q?void 0:Q.onClick)?this.callOnClick=null===(L=this.field.templateOptions)||void 0===L?void 0:L.onClick:(null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return O.\u0275fac=function(){let k;return function(L){return(k||(k=a.n5z(O)))(L||O)}}(),O.\u0275cmp=a.Xpm({type:O,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Q,L){if(1&Q&&(a.YNc(0,h,2,0,"button",0),a.YNc(1,C,2,1,"ng-template",null,1,a.W1O)),2&Q){const Z=a.MAs(2);a.Q6J("ngIf",L.callOnClick)("ngIfElse",Z)}},directives:[e.O5,I.ix,b.dQ,l.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),O})()};let j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=a.oAB({type:O}),O.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,I.sL,n.Bz,f.F,s.X0.forChild({types:[T]})]]}),O})()},4623:(me,V,i)=>{i.d(V,{K:()=>h});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),f=i(3075);const a={name:"comment-textarea",component:(()=>{class C extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(T,j)=>{var O;return`Comments must be at least ${null===(O=j.templateOptions)||void 0===O?void 0:O.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return C.\u0275fac=function(){let y;return function(j){return(y||(y=n.n5z(C)))(j||C)}}(),C.\u0275cmp=n.Xpm({type:C,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(T,j){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",j.formControl)("formlyAttributes",j.field)},directives:[s.Zp,f.Fj,f.JJ,f.oH,o.VQ],styles:[""],changeDetection:0}),C})(),wrappers:["form-field"]};var b=i(4546),l=i(9139);let h=(()=>{class C{}return C.\u0275fac=function(T){return new(T||C)},C.\u0275mod=n.oAB({type:C}),C.\u0275inj=n.cJS({imports:[[e.ez,f.UX,o.X0.forChild({types:[a]}),l.u,b.U5,s.o7]]}),C})()},1605:(me,V,i)=>{i.d(V,{e:()=>ze});var e=i(9808),o=i(3075),n=i(8776),s=i(3793),f=i(304),I=i(8054),a=i(5e3),b=i(1894),l=i(4546);let h=(()=>{class _{constructor(){console.log("FormCardDirective constructed.")}}return _.\u0275fac=function(D){return new(D||_)},_.\u0275dir=a.lG2({type:_,selectors:[["",8,"cvc-form-card-control"]]}),_})();var C=i(7484),y=i(404);function T(_,X){1&_&&a._UZ(0,"i",7)}function j(_,X){if(1&_&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,T,1,0,"i",6),a.qZA()),2&_){const D=a.oxw();a.Q6J("nzRequired",D.to.required&&!0!==D.to.hideRequiredMarker)("nzFor",D.id),a.xp6(1),a.hij(" ",D.to.label," "),a.xp6(1),a.Q6J("ngIf",D.to.helpText)}}function O(_,X){if(1&_&&a._UZ(0,"formly-validation-message",9),2&_){const D=a.oxw(2);a.Q6J("field",D.field)}}function k(_,X){if(1&_&&a.YNc(0,O,1,1,"formly-validation-message",8),2&_){const D=a.oxw();a.Q6J("ngIf",D.showError)}}let Q=(()=>{class _ extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return _.\u0275fac=function(D){return new(D||_)},_.\u0275cmp=a.Xpm({type:_,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(D,le){if(1&D&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,j,3,4,"ng-template",null,3,a.W1O),a.YNc(7,k,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&D){const Me=a.MAs(6),Se=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",le.errorState)("nzErrorTip",Se),a.xp6(1),a.Q6J("nzTitle",Me)("nzExtra",Se)}},directives:[b.SK,l.Nx,b.t3,l.Fd,h,C.bd,l.iK,e.O5,y.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),_})();var L=i(5017),Z=i(1017);const M={wrappers:[{name:"form-card",component:Q}]};let $=(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275mod=a.oAB({type:_}),_.\u0275inj=a.cJS({imports:[[e.ez,o.UX,l.U5,C.vh,L.PV,y.cg,n.X0.forChild(M),Z.s]]}),_})();var ee=i(655),w=i(373),N=i(2198),d=i(4850),R=i(3240),S=i(4987),W=i(7630),G=i(9397),g=i(6949),B=i(8144),U=i(3618),A=i(3193),q=i(8926);function ie(_,X){if(1&_&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&_){const D=a.oxw().$implicit,le=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.label,le.to.searchString),a.oJD)}}function fe(_,X){if(1&_&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&_){const D=a.oxw(2).$implicit,le=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.gene.geneAliases.join(", "),le.to.searchString),a.oJD)}}function _e(_,X){1&_&&(a.ynx(0),a.YNc(1,fe,2,4,"span",11),a.BQk())}function Te(_,X){if(1&_&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,ie,2,4,"span",8),a.YNc(3,_e,2,0,"ng-container",9),a.qZA()()),2&_){const D=X.$implicit;a.Q6J("nzLabel",D.tooltip)("nzValue",D.gene),a.xp6(3),a.Q6J("ngIf",D.gene.geneAliases.length>0)}}function De(_,X){if(1&_&&(a.ynx(0),a.YNc(1,Te,4,3,"nz-option",6),a.BQk()),2&_){const D=X.ngrxLet;a.xp6(1),a.Q6J("ngForOf",D)}}function se(_,X){1&_&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function he(_,X){if(1&_){const D=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Me){return a.CHM(D),a.oxw().to.onSearch(Me)}),a.YNc(3,De,2,1,"ng-container",4),a.qZA(),a.YNc(4,se,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&_){const D=a.MAs(5),le=a.oxw();a.xp6(1),a.Q6J("formControl",le.formControl)("formlyAttributes",le.field)("nzPlaceHolder",le.to.placeholder?le.to.placeholder:null)("nzNotFoundContent",D)("nzShowArrow",le.to.showArrow)("nzFilterOption",le.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",le.genes$)}}function E(_,X){if(1&_&&a._UZ(0,"cvc-gene-tag",13),2&_){const D=a.oxw();a.Q6J("gene",D.formControl.value)}}let oe=class extends n.fS{constructor(X){super(),this.geneTypeaheadQuery=X,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,w.j)("data","geneTypeahead"),(0,N.h)(R.ep),(0,d.U)(X=>X.map(D=>{let le=D.geneAliases.length>0?`Aliases: ${D.geneAliases.join(", ")}`:"";return{value:D.id,tooltip:`${D.name} (${D.entrezId}) ${le}`,label:`${D.name} (${D.entrezId})`,gene:D}})))}ngAfterViewInit(){this.to.onSearch=X=>{X.length<this.to.minLengthSearch||(this.to.searchString=X,this.queryRef.refetch({entrezSymbol:X}))}}};oe.\u0275fac=function(X){return new(X||oe)(a.Y36(W.Q4m))},oe.\u0275cmp=a.Xpm({type:oe,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(X,D){if(1&X&&(a.YNc(0,he,6,7,"ng-container",0),a.YNc(1,E,1,1,"ng-template",null,1,a.W1O)),2&X){const le=a.MAs(2);a.Q6J("ngIf",!(null!=D.formControl.value&&D.formControl.value.id))("ngIfElse",le)}},directives:[e.O5,I.Vq,G.l,o.JJ,o.oH,n.VQ,g.eJ,e.sg,I.Ip,B.NU,B.$1,U.ZU,A.H],pipes:[q.A],styles:[""]}),oe=(0,ee.gn)([(0,S.c)()],oe);const Y={name:"cvc-gene-input",component:oe};var de=i(3309),F=i(6905),ce=i(8616);let ne=(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275mod=a.oAB({type:_}),_.\u0275inj=a.cJS({imports:[[e.ez,o.UX,g.WG,n.X0.forChild({types:[Y]}),I.LV,B.zf,U.ZJ,de.U,F.s,ce.Y]]}),_})();var te=i(7055);const re={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let ze=(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275mod=a.oAB({type:_}),_.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,I.LV,f.F,s.F,n.X0.forChild({types:[re]}),ne,te.N,$]]}),_})()},7055:(me,V,i)=>{i.d(V,{N:()=>N});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),f=i(1047),I=i(5017),a=i(5e3),b=i(1894),l=i(8481),h=i(2683),C=i(6042),y=i(2643);function T(d,R){if(1&d){const S=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function(G){return a.CHM(S),a.oxw().addField(G)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&d){const S=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",S.errorState),a.xp6(3),a.hij(" ",S.to.addText," ")}}function j(d,R){if(1&d){const S=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function(G){return a.CHM(S),a.oxw(4).addField(G)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&d){const S=a.oxw(4);a.xp6(2),a.hij(" ",S.to.addText," ")}}function O(d,R){if(1&d&&(a.TgZ(0,"div",11),a.YNc(1,j,3,1,"nz-tag",12),a.qZA()),2&d){const S=a.oxw(2).$implicit,W=a.oxw();a.xp6(1),a.Q6J("ngIf",0==W.to.maxCount||W.to.maxCount>S.model.length)}}function k(d,R){if(1&d){const S=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(S);const G=a.oxw().index;return a.oxw().remove(G)}),a.qZA()(),a.YNc(3,O,2,1,"div",10),a.BQk()}if(2&d){const S=a.oxw().last;a.xp6(3),a.Q6J("ngIf",S)}}function Q(d,R){if(1&d){const S=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(S);const G=a.oxw().index;return a.oxw().remove(G)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function L(d,R){if(1&d&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,k,4,1,"ng-container",1),a.YNc(5,Q,4,0,"ng-container",1),a.qZA()()),2&d){const S=R.$implicit,W=R.index;a.xp6(2),a.Q6J("ngClass",S.model[W]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",S),a.xp6(1),a.Q6J("ngIf",S.model[W]),a.xp6(1),a.Q6J("ngIf",!S.model[W])}}const Z=function(d){return{hidden:d}},$={name:"multi-field",component:(()=>{class d extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(S){S&&S.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return d.\u0275fac=function(S){return new(S||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(S,W){1&S&&(a.TgZ(0,"div",0),a.YNc(1,T,5,2,"nz-form-item",1),a.YNc(2,L,6,4,"nz-form-item",2),a.qZA()),2&S&&(a.Q6J("ngClass",a.VKq(3,Z,!0===W.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==W.field.fieldGroup?null:W.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",W.field.fieldGroup))},directives:[e.mk,e.O5,b.SK,s.Nx,b.t3,s.Fd,l.j,I.Ls,h.w,e.sg,n.cw,C.ix,y.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),d})()};var ee=i(7102),w=i(1017);let N=(()=>{class d{}return d.\u0275fac=function(S){return new(S||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[$]}),o.UX,ee.a,s.U5,f.o7,I.PV,C.sL,w.s,l.X]]}),d})()},7075:(me,V,i)=>{i.d(V,{l:()=>j});var e=i(9808),o=i(8776),n=i(5e3),s=i(9180),f=i(6042),I=i(2643),a=i(6612),b=i(2683);const h={name:"submit-button",component:(()=>{class O extends o.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-submit-button-type"]],features:[n.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Q,L){1&Q&&(n.TgZ(0,"cvc-form-buttons")(1,"button",0),n._uU(2),n.qZA()()),2&Q&&(n.xp6(1),n.Q6J("disabled",!L.form.valid),n.xp6(1),n.hij(" ",L.to.submitLabel," "))},directives:[s.Z,f.ix,I.dQ,a.m,b.w],styles:[""],changeDetection:0}),O})()};var C=i(4375),y=i(1825),T=i(3075);let j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[e.ez,T.UX,o.X0.forChild({types:[h]}),f.sL,C.R,y.A]]}),O})()},7462:(me,V,i)=>{i.d(V,{o:()=>b});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),f=i(3075);const a={name:"cvc-textarea",component:(()=>{class l extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return l.\u0275fac=function(){let h;return function(y){return(h||(h=n.n5z(l)))(y||l)}}(),l.\u0275cmp=n.Xpm({type:l,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(C,y){1&C&&n._UZ(0,"textarea",0),2&C&&n.Q6J("formControl",y.formControl)("formlyAttributes",y.field)("nzAutosize",y.to.autosize)("placeholder",y.to.placeholder)},directives:[s.Zp,f.Fj,s.rh,f.JJ,f.oH,o.VQ],styles:[""],changeDetection:0}),l})(),wrappers:["form-field"]};let b=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[e.ez,f.u5,f.UX,o.X0.forChild({types:[a]}),s.o7]]}),l})()},4181:(me,V,i)=>{i.d(V,{O:()=>ne});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),f=i(4987),I=i(8776),a=i(591),b=i(3240),l=i(1307),h=i(373),C=i(2198),y=i(4850),T=i(7630),j=i(9169),O=i(8054),k=i(9397),Q=i(3075),L=i(8144),Z=i(3618),M=i(8664),$=i(685),ee=i(822),w=i(6042),N=i(2643),d=i(2683),R=i(5017),S=i(6949),W=i(8926);function G(te,ue){if(1&te&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,re.label,ze.to.searchString),n.oJD)}}function g(te,ue){1&te&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function B(te,ue){if(1&te&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,g,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.xp6(1),n.hij(" ID: ",re.variant.id," "),n.xp6(1),n.Q6J("ngIf",re.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,re.variant.variantAliases.join(", "),ze.to.searchString),n.oJD)}}function U(te,ue){1&te&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,G,2,4,"span",7),n.YNc(3,B,5,6,"span",8),n.qZA()()),2&te&&n.Q6J("nzValue",ue.$implicit.variant)}function A(te,ue){if(1&te){const re=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(_){return n.CHM(re),n.oxw().to.onSearch(_)}),n.YNc(2,U,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&te){const re=n.oxw(),ze=n.MAs(6),_=n.MAs(4);n.xp6(1),n.Q6J("formControl",re.formControl)("formlyAttributes",re.field)("nzPlaceHolder",re.to.placeholder?re.to.placeholder:null)("nzDropdownRender",re.to.allowCreate?ze:null)("nzShowArrow",re.to.showArrow)("nzNotFoundContent",_),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,re.variants$))}}function q(te,ue){if(1&te&&n._UZ(0,"cvc-variant-tag",12),2&te){const re=n.oxw();n.Q6J("variant",re.formControl.value)}}function ie(te,ue){if(1&te&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&te){const re=n.oxw(2);n.xp6(2),n.Oqu(re.to.searchString)}}function fe(te,ue){if(1&te&&(n._UZ(0,"nz-empty",13),n.YNc(1,ie,4,1,"ng-template",null,14,n.W1O)),2&te){const re=n.MAs(2);n.Q6J("nzNotFoundContent",re)}}function _e(te,ue){if(1&te&&n._UZ(0,"cvc-form-errors-alert",18),2&te){const re=n.oxw(4);n.Q6J("errors",re.errorMessages)}}function Te(te,ue){if(1&te){const re=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(re);const _=n.oxw(4);return _.addVariant(_.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&te){const re=n.oxw(4);n.Q6J("nzLoading",re.loading),n.xp6(4),n.Oqu(re.to.searchString)}}function De(te,ue){if(1&te&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,_e,1,1,"cvc-form-errors-alert",16),n.YNc(3,Te,6,2,"button",17),n.qZA(),n.BQk()),2&te){const re=n.oxw(3);n.xp6(2),n.Q6J("ngIf",re.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==re.errorMessages.length)}}function se(te,ue){if(1&te&&(n.ynx(0),n.YNc(1,De,4,2,"ng-container",11),n.BQk()),2&te){const re=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==re.to.searchString)}}function he(te,ue){if(1&te&&(n.YNc(0,se,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&te){const re=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,re.displayAdd$))}}let E=class extends I.fS{constructor(ue,re,ze){super(),this.variantTypeaheadQuery=ue,this.networkErrorService=re,this.addVariantGQL=ze,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new a.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(_,X,D)=>{var le,Me;let Se=null===(Me=null===(le=null==D?void 0:D.parent)||void 0===le?void 0:le.parent)||void 0===Me?void 0:Me.model;if(Se&&Se.gene&&Se.gene[0])return Se.gene[0].id}}}}ngOnInit(){var ue,re;this.callbackSub=null===(re=null===(ue=this.field)||void 0===ue?void 0:ue.formControl)||void 0===re?void 0:re.valueChanges.subscribe(ze=>this.onVariantSelected.emit(ze.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,l.T)(1),(0,h.j)("data","variants","nodes"),(0,C.h)(b.ep),(0,y.U)(ze=>ze.map(X=>({value:X.id,label:X.name,variant:X}))))}ngAfterViewInit(){this.to.onSearch=ue=>{ue.length<this.to.minLengthSearch||(this.to.searchString=ue,this.errorMessages=[],this.queryRef.refetch({name:ue,geneId:this.to.geneId}).then(re=>{this.displayAdd$.next(0==re.data.variants.nodes.filter(ze=>ze.name.toUpperCase()==ue.toUpperCase()).length)}))}}addVariant(ue){if(ue&&""!=ue&&this.to.geneId){let re=this.addVariantMutator.mutate(this.addVariantGQL,{name:ue,geneId:this.to.geneId},{},ze=>{var _;ze.addVariant&&(null===(_=this.field.formControl)||void 0===_||_.setValue({id:ze.addVariant.variant.id,name:ze.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0)});re.submitSuccess$.pipe((0,f.t)(this)).subscribe(ze=>{ze&&(this.success=!0)}),re.submitError$.pipe((0,f.t)(this)).subscribe(ze=>{ze&&(this.errorMessages=ze,this.success=!1)}),re.isSubmitting$.pipe((0,f.t)(this)).subscribe(ze=>{this.loading=ze})}}ngOnDestroy(){var ue;null===(ue=this.callbackSub)||void 0===ue||ue.unsubscribe()}};E.\u0275fac=function(ue){return new(ue||E)(n.Y36(T._eC),n.Y36(j.Y),n.Y36(T.LUc))},E.\u0275cmp=n.Xpm({type:E,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(ue,re){if(1&ue&&(n.YNc(0,A,4,9,"ng-container",0),n.YNc(1,q,1,1,"ng-template",null,1,n.W1O),n.YNc(3,fe,3,1,"ng-template",null,2,n.W1O),n.YNc(5,he,2,3,"ng-template",null,3,n.W1O)),2&ue){const ze=n.MAs(2);n.Q6J("ngIf",!(null!=re.formControl.value&&re.formControl.value.id))("ngIfElse",ze)}},directives:[e.O5,O.Vq,k.l,Q.JJ,Q.oH,I.VQ,e.sg,O.Ip,L.NU,L.$1,Z.ZU,M.I,$.p9,ee.V,w.ix,N.dQ,d.w,R.Ls],pipes:[S.fM,W.A],styles:[""],changeDetection:0}),E=(0,o.gn)([(0,f.c)()],E);const oe={name:"variant-input",component:E};var Y=i(4867),de=i(7008),F=i(6905),ce=i(8616);let ne=(()=>{class te{}return te.\u0275fac=function(re){return new(re||te)},te.\u0275mod=n.oAB({type:te}),te.\u0275inj=n.cJS({imports:[[e.ez,Q.UX,S.WG,I.X0.forChild({types:[oe]}),O.LV,w.sL,R.PV,L.zf,Z.ZJ,$.Xo,Y.Q,de.B,F.s,ce.Y]]}),te})()},7102:(me,V,i)=>{i.d(V,{a:()=>h});var e=i(9808),o=i(8776),n=i(3075),s=i(4546),f=i(5e3),I=i(1894);function a(C,y){if(1&C&&f._UZ(0,"formly-validation-message",3),2&C){const T=f.oxw();f.Q6J("field",T.field)}}const l={name:"cvc-field-errors",component:(()=>{class C extends o.n2{get errorState(){return this.showError?"error":""}}return C.\u0275fac=function(){let y;return function(j){return(y||(y=f.n5z(C)))(j||C)}}(),C.\u0275cmp=f.Xpm({type:C,selectors:[["cvc-field-errors-wrapper"]],features:[f.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(T,j){if(1&T&&(f.TgZ(0,"nz-form-control",0)(1,"p"),f._uU(2),f.qZA(),f.GkF(3,null,1),f.YNc(5,a,1,1,"ng-template",null,2,f.W1O),f.qZA()),2&T){const O=f.MAs(6);f.Q6J("nzValidateStatus",j.errorState)("nzErrorTip",O),f.xp6(2),f.hij("errorState: ",j.errorState,"")}},directives:[I.t3,s.Fd,o.u_],encapsulation:2,changeDetection:0}),C})()};let h=(()=>{class C{}return C.\u0275fac=function(T){return new(T||C)},C.\u0275mod=f.oAB({type:C}),C.\u0275inj=f.cJS({imports:[[e.ez,n.UX,s.U5,o.X0.forChild({wrappers:[l]})]]}),C})()},5472:(me,V,i)=>{i.d(V,{r:()=>y});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),f=i(5482),I=i(1894),a=i(1017),b=i(6789),l=i(5e3);const C={wrappers:[{name:"form-container",component:(()=>{class T extends n.n2{}return T.\u0275fac=function(){let j;return function(k){return(j||(j=l.n5z(T)))(k||T)}}(),T.\u0275cmp=l.Xpm({type:T,selectors:[["cvc-form-container-wrapper"]],features:[l.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(O,k){1&O&&(l.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),l.GkF(3,null,2),l.qZA()()()),2&O&&(l.xp6(2),l.Q6J("nzTitle",k.to.label))},directives:[I.SK,I.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),T})()}]};let y=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=l.oAB({type:T}),T.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild(C),I.Jb,s.vh,f.cD,b._,a.s]]}),T})()},7695:(me,V,i)=>{i.d(V,{C:()=>N});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),f=i(5482),I=i(1894),a=i(1017),b=i(6789),l=i(5e3),h=i(9552),C=i(5017),y=i(404);function T(d,R){1&d&&l._UZ(0,"div",9),2&d&&l.Q6J("innerHtml",R.ngIf,l.oJD)}function j(d,R){1&d&&(l.TgZ(0,"div",10),l._uU(1,"Help not available for this field."),l.qZA())}function O(d,R){if(1&d&&(l.TgZ(0,"nz-collapse-panel",6),l.YNc(1,T,1,1,"div",7),l.YNc(2,j,2,0,"ng-template",null,8,l.W1O),l.qZA()),2&d){const S=R.ngIf,W=l.MAs(3),G=l.oxw().$implicit,g=l.MAs(3);l.Q6J("nzHeader",S)("nzActive",G.templateOptions.hasFocus)("nzExtra",g),l.xp6(1),l.Q6J("ngIf",null==G.templateOptions?null:G.templateOptions.helpText)("ngIfElse",W)}}function k(d,R){if(1&d&&l._UZ(0,"formly-validation-message",14),2&d){const S=l.oxw(4).$implicit;l.Q6J("field",S)}}function Q(d,R){if(1&d&&(l.ynx(0),l._UZ(1,"i",12),l.YNc(2,k,1,1,"ng-template",null,13,l.W1O),l.BQk()),2&d){const S=l.MAs(3);l.xp6(1),l.Q6J("nzTooltipTitle",S)}}function L(d,R){if(1&d&&(l.ynx(0),l.YNc(1,Q,4,1,"ng-container",11),l.BQk()),2&d){const S=R.ngIf;l.xp6(1),l.Q6J("ngIf","INVALID"===S)}}function Z(d,R){if(1&d&&(l.YNc(0,L,2,1,"ng-container",11),l.ALo(1,"ngrxPush")),2&d){const S=l.oxw().$implicit;l.Q6J("ngIf",l.lcZ(1,1,S.formControl.statusChanges))}}function M(d,R){if(1&d&&(l.ynx(0),l.YNc(1,O,4,5,"nz-collapse-panel",4),l.YNc(2,Z,2,3,"ng-template",null,5,l.W1O),l.BQk()),2&d){const S=R.$implicit;l.xp6(1),l.Q6J("ngIf",null==S.templateOptions?null:S.templateOptions.label)}}let $=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(S){return new(S||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(S,W){1&S&&(l.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),l.YNc(3,M,4,1,"ng-container",3),l.qZA()()()),2&S&&(l.Q6J("nzOffsetTop",0)("nzTarget",W.affixTo),l.xp6(2),l.Q6J("nzBordered",!1),l.xp6(1),l.Q6J("ngForOf",W.fieldGroup))},directives:[h.$,s.bd,f.yH,e.sg,e.O5,f.Zv,C.Ls,y.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),d})();const w={name:"form-info",component:(()=>{class d extends n.n2{}return d.\u0275fac=function(){let R;return function(W){return(R||(R=l.n5z(d)))(W||d)}}(),d.\u0275cmp=l.Xpm({type:d,selectors:[["cvc-form-info-wrapper"]],features:[l.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(S,W){if(1&S&&(l.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),l.GkF(3,null,3),l.qZA()(),l.TgZ(5,"nz-col",1)(6,"div",null,4),l._UZ(8,"cvc-form-info-card",5),l.qZA()()()),2&S){const G=l.MAs(7);l.xp6(1),l.Q6J("nzSpan",16),l.xp6(1),l.Q6J("nzTitle",W.to.label),l.xp6(3),l.Q6J("nzSpan",8),l.xp6(3),l.Q6J("fieldGroup",W.field.fieldGroup)("affixTo",G)}},directives:[I.SK,I.t3,s.bd,$],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),d})()};let N=(()=>{class d{}return d.\u0275fac=function(S){return new(S||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[w]}),I.Jb,s.vh,f.cD,b._,a.s]]}),d})()},8785:(me,V,i)=>{i.d(V,{t:()=>ee});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),f=i(7630),I=i(9169),a=i(7484),b=i(9808),l=i(2359),h=i(1894),C=i(4546),y=i(822),T=i(7525),j=i(3868),O=i(3075),k=i(6042),Q=i(2643),L=i(2683);function Z(w,N){1&w&&e._UZ(0,"nz-alert",7)}function M(w,N){if(1&w&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&w){const d=e.oxw();e.xp6(1),e.Q6J("errors",d.errorMessages)}}function $(w,N){if(1&w){const d=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(S){return e.CHM(d),e.oxw().coiText=S}),e.qZA()()}if(2&w){const d=e.oxw();e.xp6(1),e.Q6J("ngModel",d.coiText)}}let ee=(()=>{class w{constructor(d,R){this.updateCoiGql=d,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U(R)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let R=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});R.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{S&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),R.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{S&&(this.errorMessages=S,this.success=!1)}),R.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{this.loading=S})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(d){return new(d||w)(e.Y36(f.IP1),e.Y36(I.Y))},w.\u0275cmp=e.Xpm({type:w,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(d,R){1&d&&(e.TgZ(0,"nz-card"),e.YNc(1,Z,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(W){return R.coiStatus=W}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,$,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return R.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&d&&(e.xp6(1),e.Q6J("ngIf",R.success),e.xp6(1),e.Q6J("ngIf",R.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",R.loading),e.xp6(2),e.Q6J("ngModel",R.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===R.coiStatus),e.xp6(2),e.Q6J("disabled",R.loading||"coiPresent"===R.coiStatus&&(void 0===R.coiText||R.coiText.length<10)))},directives:[a.bd,b.O5,l.r,h.SK,C.Nx,y.V,T.W,j.Dg,O.JJ,O.On,j.Of,O.Fj,k.ix,Q.dQ,L.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),w})()},330:(me,V,i)=>{i.d(V,{e:()=>y});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),f=i(2359),I=i(4546),a=i(7008),b=i(3868),l=i(7525),h=i(6042),C=i(5e3);let y=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=C.oAB({type:T}),T.\u0275inj=C.cJS({imports:[[e.ez,o.u5,I.U5,o.UX,n.WG,s.vh,f.L,b.aF,h.sL,l.j,a.B]]}),T})()},3434:(me,V,i)=>{i.d(V,{G:()=>ee});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),f=i(6123),I=i(7625),a=i(7630),b=i(9169),l=i(325),h=i(7525),C=i(4546),y=i(9808),T=i(8776),j=i(1894),O=i(822),k=i(2359);function Q(w,N){1&w&&e.GkF(0)}function L(w,N){if(1&w&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&w){const d=e.oxw(2);e.xp6(1),e.Q6J("errors",d.errorMessages)}}function Z(w,N){if(1&w&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&w){const d=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",d.newId,"/summary")}}function M(w,N){if(1&w&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,Z,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&w){const d=e.MAs(3),R=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",R.isNew?"Variant Created":"Variant Already Exists")("nzDescription",d)}}function $(w,N){if(1&w&&(e.YNc(0,L,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&w){const d=e.oxw();e.Q6J("ngIf",d.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",d.success)}}let ee=(()=>{class w{constructor(d,R,S){this.submitVariantGQL=d,this.networkErrorService=R,this.route=S,this.onVariantSelected=new e.vpe,this.allowCreate=!0,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formFields=[],this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new f.U(R)}ngOnInit(){this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,maxCount:1,allowCreate:this.allowCreate}}]}]}submitVariant(d){let R=null==d?void 0:d.fields.gene[0].id,S=null==d?void 0:d.fields.variant[0].name;if(R&&S){let G=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:R,name:S},{},g=>{let B=g.addVariant;B&&(this.newId=B.variant.id,this.isNew=B.new,this.onVariantSelected.emit({variantId:B.variant.id,molecularProfile:B.variant.singleVariantMolecularProfile}))});G.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{g&&(this.success=!0)}),G.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{g&&(this.errorMessages=g,this.success=!1)}),G.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{this.loading=g})}}onFormModelChange(d){this.formModel=d,d.fields.variant&&d.fields.variant[0]&&this.onVariantSelected.emit({variantId:d.fields.variant[0].id,molecularProfile:d.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return w.\u0275fac=function(d){return new(d||w)(e.Y36(a.LUc),e.Y36(b.Y),e.Y36(l.gz))},w.\u0275cmp=e.Xpm({type:w,selectors:[["cvc-variant-submit-form"]],inputs:{allowCreate:"allowCreate"},outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(d,R){if(1&d&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return R.submitVariant(R.formModel)}),e.YNc(2,Q,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(W){return R.onFormModelChange(W)}),e.qZA()()(),e.YNc(4,$,2,2,"ng-template",null,4,e.W1O)),2&d){const S=e.MAs(5);e.Q6J("nzSpinning",R.loading),e.xp6(1),e.Q6J("formGroup",R.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",S),e.xp6(1),e.Q6J("form",R.formGroup)("fields",R.formFields)("model",R.formModel)("options",R.formOptions)}},directives:[h.W,o._Y,o.JL,C.Lr,o.sg,y.tP,T.T7,y.O5,j.SK,C.Nx,O.V,k.r,l.yS],styles:[""]}),w})()},2324:(me,V,i)=>{i.d(V,{e:()=>U});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),f=i(7695),I=i(7055),a=i(7462),b=i(8776),l=i(1017),h=i(2359),C=i(6042),y=i(4546),T=i(1894),j=i(3075),O=i(325),k=i(1605),Q=i(7525),L=i(5472),Z=i(4889),M=i(7484),$=i(8144),ee=i(3618),w=i(7075),N=i(4181),d=i(3793),R=i(304),S=i(8054);const G={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(A,q,ie)=>{var fe,_e;const Te=null===(_e=null===(fe=null==ie?void 0:ie.parent)||void 0===fe?void 0:fe.templateOptions)||void 0===_e?void 0:_e.allowCreate;return void 0===Te||Te}}},hideExpression:(A,q,ie)=>{const fe=(null==ie?void 0:ie.form)?ie.form.get("gene"):null;return!fe||!fe.value||!fe.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};var g=i(5e3);let B=(()=>{class A{}return A.\u0275fac=function(ie){return new(ie||A)},A.\u0275mod=g.oAB({type:A}),A.\u0275inj=g.cJS({imports:[[e.ez,j.u5,j.UX,S.LV,R.F,d.F,b.X0.forChild({types:[G]}),N.O,I.N]]}),A})(),U=(()=>{class A{}return A.\u0275fac=function(ie){return new(ie||A)},A.\u0275mod=g.oAB({type:A}),A.\u0275inj=g.cJS({imports:[[e.ez,O.Bz,j.UX,l.s,y.U5,h.L,T.Jb,C.sL,Q.j,M.vh,$.zf,ee.ZJ,b.X0,s.B,n.R,f.C,I.N,a.o,o.K,k.e,L.r,Z.E,w.l,N.O,B,l.s]]}),A})()},7630:(me,V,i)=>{i.d(V,{$G1:()=>ui,A4J:()=>no,A94:()=>Br,AMF:()=>rs,AO2:()=>k,B0s:()=>or,B97:()=>wn,BQZ:()=>d,BTF:()=>gn,Bk6:()=>Cs,BnY:()=>Ji,Bo4:()=>Ys,Cp0:()=>$,D9L:()=>cr,Del:()=>ms,DkJ:()=>An,E1C:()=>Or,E8d:()=>h,EwB:()=>rr,F3s:()=>he,FB1:()=>re,FId:()=>qi,FJi:()=>_e,FKQ:()=>Di,FNv:()=>B,FOU:()=>ar,Fvz:()=>S,GSh:()=>ai,GYx:()=>ri,Gbq:()=>Kt,Gnp:()=>Ds,HUC:()=>ne,Hmr:()=>Lo,IP1:()=>Cr,IRu:()=>ue,IZ6:()=>fo,JDX:()=>fe,JQ3:()=>Pi,KNk:()=>hi,Kk:()=>sn,Kmw:()=>Yo,L5n:()=>Xn,L8L:()=>ho,LLl:()=>ko,LUc:()=>Yi,LiH:()=>xs,Lr0:()=>us,MNv:()=>Kr,MYm:()=>io,Mgx:()=>C,MsG:()=>g,NQC:()=>ie,NbY:()=>bi,OHm:()=>Qn,OIL:()=>Tn,OfU:()=>y,Onj:()=>Y,P_b:()=>tn,Q4m:()=>yi,Q_P:()=>Ki,Qtd:()=>bs,Qzn:()=>jn,R8w:()=>O,RMv:()=>$i,ROj:()=>xr,RTy:()=>ee,Rdc:()=>Uo,SJD:()=>we,SWk:()=>fr,SrV:()=>De,Sx0:()=>Z,T1I:()=>mr,TNk:()=>ts,Tg0:()=>as,TiL:()=>mo,Tq1:()=>dn,Tt7:()=>Vo,UIR:()=>qt,UWf:()=>lo,VZq:()=>Wn,Vj7:()=>ki,VnG:()=>W,WFw:()=>tr,WGV:()=>fs,WOS:()=>cs,WRV:()=>uo,Ws:()=>ci,X5f:()=>Rn,Xft:()=>br,YMi:()=>pn,Ybm:()=>vn,ZYZ:()=>$o,Zhw:()=>Ci,Zo2:()=>Do,Zw1:()=>Ui,_3P:()=>I,_Wm:()=>l,_eC:()=>Vi,_jb:()=>so,aw3:()=>Pr,bgg:()=>Jo,c$m:()=>Ko,cCu:()=>os,cEv:()=>yo,cMj:()=>Vr,d4o:()=>ze,db2:()=>hs,eY8:()=>zn,edp:()=>Bi,ejK:()=>Ur,fow:()=>U,fpJ:()=>Oi,fwG:()=>xo,g0X:()=>ys,ghc:()=>En,gtM:()=>Li,h01:()=>T,hVB:()=>Is,huM:()=>_,i44:()=>te,iGM:()=>qo,iJT:()=>Vs,iST:()=>on,iXf:()=>gt,io:()=>Gn,iwm:()=>n,jMx:()=>$s,jw9:()=>E,k2T:()=>xi,k7O:()=>ln,kQf:()=>eo,kQl:()=>oe,kqt:()=>N,kv3:()=>fi,l$X:()=>Bo,l4w:()=>Ir,lYz:()=>q,lcA:()=>Fn,lfy:()=>Ii,m$d:()=>Ls,m55:()=>w,mII:()=>ti,mdl:()=>f,mpB:()=>F,nnL:()=>$r,o71:()=>de,oRL:()=>G,otH:()=>Hn,pHu:()=>kr,pP7:()=>D,pR8:()=>ur,q1D:()=>Bs,q8c:()=>Sn,q9q:()=>Nn,qf4:()=>Oo,rJ8:()=>Mn,rZD:()=>Te,rzy:()=>_n,sBY:()=>qr,sLD:()=>Os,sfv:()=>R,tI1:()=>L,tJ6:()=>Io,td:()=>kt,ti:()=>Zn,tji:()=>Lr,tw_:()=>Po,u4i:()=>a,uBv:()=>b,ubO:()=>Us,vMt:()=>oi,vv6:()=>Dr,vz2:()=>Co,wJ2:()=>Q,wRZ:()=>hr,wbP:()=>yr,wg3:()=>Jr,wkr:()=>ce,wpb:()=>X,xlL:()=>A,xsC:()=>mi,y1h:()=>M,yic:()=>se,yqR:()=>Ps,z8D:()=>Yr,zwS:()=>bo});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),f=(()=>{return(t=f||(f={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",f;var t})(),I=(()=>{return(t=I||(I={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",I;var t})(),a=(()=>{return(t=a||(a={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.DiseaseName="DISEASE_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.Summary="SUMMARY",t.TherapyName="THERAPY_NAME",a;var t})(),b=(()=>{return(t=b||(b={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",b;var t})(),l=(()=>{return(t=l||(l={})).And="AND",t.Or="OR",l;var t})(),h=(()=>{return(t=h||(h={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",h;var t})(),C=(()=>{return(t=C||(C={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",C;var t})(),y=(()=>{return(t=y||(y={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",y;var t})(),T=(()=>{return(t=T||(T={})).Created="CREATED",t.LastModified="LAST_MODIFIED",T;var t})(),O=(()=>{return(t=O||(O={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",O;var t})(),k=(()=>{return(t=k||(k={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",t.DeprecatedVariant="DEPRECATED_VARIANT",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",k;var t})(),Q=(()=>{return(t=Q||(Q={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",Q;var t})(),L=(()=>{return(t=L||(L={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",L;var t})(),Z=(()=>{return(t=Z||(Z={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",Z;var t})(),M=(()=>{return(t=M||(M={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",M;var t})(),$=(()=>{return(t=$||($={})).Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.TherapyName="THERAPY_NAME",t.VariantOrigin="VARIANT_ORIGIN",$;var t})(),ee=(()=>{return(t=ee||(ee={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",ee;var t})(),w=(()=>{return(t=w||(w={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",w;var t})(),N=(()=>{return(t=N||(N={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",N;var t})(),d=(()=>{return(t=d||(d={})).Open="OPEN",t.Resolved="RESOLVED",d;var t})(),R=(()=>{return(t=R||(R={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",R;var t})(),S=(()=>{return(t=S||(S={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.MolecularProfileCount="molecularProfileCount",t.TherapyName="therapyName",t.VariantCount="variantCount",S;var t})(),W=(()=>{return(t=W||(W={})).Eq="EQ",t.Ge="GE",t.Gt="GT",t.Le="LE",t.Lt="LT",t.Ne="NE",W;var t})(),G=(()=>{return(t=G||(G={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",G;var t})(),g=(()=>{return(t=g||(g={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",g;var t})(),B=(()=>{return(t=B||(B={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",t.MolecularProfileScore="molecularProfileScore",t.VariantCount="variantCount",B;var t})(),U=(()=>{return(t=U||(U={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",U;var t})(),A=(()=>{return(t=A||(A={})).Id="ID",t.Name="NAME",A;var t})(),q=(()=>{return(t=q||(q={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",q;var t})(),ie=(()=>{return(t=ie||(ie={})).Read="READ",t.Unread="UNREAD",ie;var t})(),fe=(()=>{return(t=fe||(fe={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",fe;var t})(),_e=(()=>{return(t=_e||(_e={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",_e;var t})(),Te=(()=>{return(t=Te||(Te={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Te;var t})(),De=(()=>{return(t=De||(De={})).Asc="ASC",t.Desc="DESC",De;var t})(),se=(()=>{return(t=se||(se={})).Asco="ASCO",t.Ash="ASH",t.Pubmed="PUBMED",se;var t})(),he=(()=>{return(t=he||(he={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",he;var t})(),E=(()=>{return(t=E||(E={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",E;var t})(),oe=(()=>{return(t=oe||(oe={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",oe;var t})(),Y=(()=>{return(t=Y||(Y={})).Contains="CONTAINS",t.DoesNotContain="DOES_NOT_CONTAIN",t.Eq="EQ",t.Ne="NE",t.StartsWith="STARTS_WITH",Y;var t})(),de=(()=>{return(t=de||(de={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",de;var t})(),F=(()=>{return(t=F||(F={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",F;var t})(),ce=(()=>{return(t=ce||(ce={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",ce;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",ne;var t})(),te=(()=>{return(t=te||(te={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",te;var t})(),ue=(()=>{return(t=ue||(ue={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ue;var t})(),re=(()=>{return(t=re||(re={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",re;var t})(),ze=(()=>{return(t=ze||(ze={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ze;var t})(),_=(()=>{return(t=_||(_={})).CommonGermline="COMMON_GERMLINE",t.Mixed="MIXED",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",_;var t})(),X=(()=>{return(t=X||(X={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",X;var t})(),D=(()=>{return(t=D||(D={})).DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.TherapyName="therapyName",t.VariantName="variantName",D;var t})();const le=e.Ps`
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
    `,Me=e.Ps`
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
    ${le}`,Se=e.Ps`
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
    ${le}`,$e=e.Ps`
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
  }
  commentable {
    id
    name
    link
    __typename
  }
}
    `,Re=e.Ps`
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
    `,xe=e.Ps`
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
    ${xe}`,Qe=e.Ps`
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
    ${le}`,Ne=e.Ps`
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
    ${le}`,Ze=e.Ps`
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
    ${Ze}`,We=e.Ps`
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
    `,Je=e.Ps`
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
    `,J=e.Ps`
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
  molecularProfileCount
}
    `,ve=e.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,v=e.Ps`
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
  molecularProfileAliases
  evidenceItems {
    totalCount
  }
  assertions {
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
  molecularProfileScore
  assertionCount
  variantCount
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
    `,ge=e.Ps`
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
    `,Pe=e.Ps`
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
    `,Le=e.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,Ee=e.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,Ue=e.Ps`
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
  creationComment {
    comment
  }
}
    `,Ve=e.Ps`
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
    `,it=e.Ps`
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
    `,rt=e.Ps`
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
    `,z=e.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,K=e.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,x=e.Ps`
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
  gene {
    id
    name
    link
  }
  molecularProfiles {
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
    `,Oe=e.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,ct=e.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,st=e.Ps`
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
  variantTypes {
    id
    name
    link
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
    `,qe=e.Ps`
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
    `,we=e.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,gt=e.Ps`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,xt=e.Ps`
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
    `,vt=e.Ps`
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
    `,ht=e.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,zt=e.Ps`
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
    `,Ct=e.Ps`
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
    `,$t=e.Ps`
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
    ${le}`,Gt=e.Ps`
    fragment MyDiseaseInfoFields on MyDiseaseInfo {
  diseaseOntologyExactSynonyms
  diseaseOntologyRelatedSynonyms
  mesh
  icdo
  icd10
  ncit
  omim
  doDef
  doDefCitations
  mondoDef
}
    `,yt=e.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
  myDiseaseInfo {
    ...MyDiseaseInfoFields
  }
}
    ${Gt}`,Tt=e.Ps`
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
    `,It=e.Ps`
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
    ${le}`,Bt=e.Ps`
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
    `,Mt=e.Ps`
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
    `,nt=e.Ps`
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
    `,Dt=e.Ps`
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
    ${nt}`,St=e.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
  gene {
    id
    name
    link
  }
  molecularProfiles(first: 3) {
    totalCount
    nodes {
      id
      link
      name
      deprecated
    }
  }
  variantAliases
  clinvarIds
  alleleRegistryId
  openCravatUrl
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
    `,Ot=e.Ps`
    fragment MolecularProfileSummaryFields on MolecularProfile {
  id
  name
  description
  molecularProfileAliases
  molecularProfileScore
  sources {
    id
    citation
    link
    sourceType
  }
  variants {
    ...VariantMolecularProfileCardFields
  }
  parsedName {
    ...MolecularProfileParsedName
  }
}
    ${St}
${le}`,Et=e.Ps`
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
    `,Pt=e.Ps`
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
    `,At=e.Ps`
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
    `,p=e.Ps`
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
    `,H=e.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,u=e.Ps`
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
    `,P=e.Ps`
    fragment MyChemInfoFields on MyChemInfo {
  chebiId
  chebiDefinition
  fdaEpcCodes {
    code
    description
  }
  fdaMoaCodes {
    code
    description
  }
  firstApproval
  chemblMoleculeType
  chemblId
  pubchemCid
  pharmgkbId
  rxnorm
  inchikey
  drugbankId
  indications
}
    `,pe=e.Ps`
    fragment TherapiesSummaryFields on Therapy {
  id
  name
  ncitId
  therapyUrl
  therapyAliases
  link
  myChemInfo {
    ...MyChemInfoFields
  }
}
    ${P}`,ye=e.Ps`
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
    `,Ae=e.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Fe=e.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,ot=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Qt=e.Ps`
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
    ${xe}`,wt=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Vt=e.Ps`
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
    `,Zt=e.Ps`
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
    `,Yt=e.Ps`
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
    ${nt}`,Wt=e.Ps`
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
    `,Jt=e.Ps`
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
  maneSelectTranscript
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
    ${Wt}`,jt=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Me}`;let Kt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ht=e.Ps`
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
    ${Se}`;let kt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ht}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xt=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${$e}`;let qt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const en=e.Ps`
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
    ${Ge}`;let tn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=en}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nn=e.Ps`
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
    ${nt}`;let on=(()=>{class t extends e.AE{constructor(r){super(r),this.document=nn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rn=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Be}`;let sn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const an=e.Ps`
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
    molecularProfileCount
    link
  }
}
    `;let ln=(()=>{class t extends e.AE{constructor(r){super(r),this.document=an}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cn=e.Ps`
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
    ${Re}`;let dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const un=e.Ps`
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
    `;let pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=un}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mn=e.Ps`
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
    ${be}`;let gn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Qe}`;let vn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hn=e.Ps`
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
    ${Ne}`;let zn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cn=e.Ps`
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
    ${Ye}`;let _n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yn=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${We}`;let Tn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const In=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Je}`;let Mn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=In}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dn=e.Ps`
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
    ${J}`;let Sn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const On=e.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${ve}`;let En=(()=>{class t extends e.AE{constructor(r){super(r),this.document=On}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pn=e.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${v}`;let An=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xn=e.Ps`
    query BrowseMolecularProfiles($molecularProfileName: String, $variantName: String, $variantId: Int, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    molecularProfileName: $molecularProfileName
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
    ${m}`;let Nn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ln=e.Ps`
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
    ${ge}`;let Fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ln}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $n=e.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${Ce}`;let Rn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$n}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bn=e.Ps`
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
    ${Pe}`;let Gn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bn=e.Ps`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;let Qn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Un=e.Ps`
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
    ${Le}`;let wn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Un}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vn=e.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Zn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yn=e.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Wn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Yn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jn=e.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${Ee}`;let jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kn=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Ue}`;let Hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kn=e.Ps`
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
    ${Ve}`;let Xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qn=e.Ps`
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
    ${je}`;let eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const to=e.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Ke}`;let no=(()=>{class t extends e.AE{constructor(r){super(r),this.document=to}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oo=e.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let io=(()=>{class t extends e.mm{constructor(r){super(r),this.document=oo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ro=e.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let so=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ro}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ao=e.Ps`
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
    ${He}`;let lo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ao}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const co=e.Ps`
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
    ${ke}`;let uo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=co}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const po=e.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${et}`;let mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=po}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const go=e.Ps`
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
    ${it}`;let fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=go}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vo=e.Ps`
    query TherapyPopover($therapyId: Int!) {
  therapyPopover(id: $therapyId) {
    id
    name
    therapyUrl
    ncitId
    therapyAliases
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;let ho=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zo=e.Ps`
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
    ${Xe}`;let Co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _o=e.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${tt}`;let yo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const To=e.Ps`
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
    ${at}`;let Io=(()=>{class t extends e.AE{constructor(r){super(r),this.document=To}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mo=e.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${rt}`;let Do=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const So=e.Ps`
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
    ${z}`;let Oo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=So}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Eo=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${K}`;let Po=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Eo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ao=e.Ps`
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
    ${x}`;let xo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ao}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const No=e.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${ae}`;let Lo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=No}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fo=e.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Ie}`;let $o=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ro=e.Ps`
    query VariantsMenu($geneId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
    name: $variantName
    variantTypeIds: $variantTypeIds
    hasNoVariantType: $hasNoVariantType
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
    ${ct}`;let bo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ro}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Go=e.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Oe}`;let Bo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Go}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qo=e.Ps`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    variantTypeName: $variantTypeName
    hasNoVariantType: $hasNoVariantType
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
    ${st}`;let Uo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wo=e.Ps`
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
    `;let Vo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zo=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Yo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wo=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${dt}`;let Jo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jo=e.Ps`
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
    `;let Ko=(()=>{class t extends e.mm{constructor(r){super(r),this.document=jo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ho=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let ko=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ho}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xo=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${nt}`;let qo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Xo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ei=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${qe}`;let ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ei}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ni=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let oi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ni}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ii=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let ri=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ii}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const si=e.Ps`
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
    ${ut}`;let ai=(()=>{class t extends e.AE{constructor(r){super(r),this.document=si}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const li=e.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let ci=(()=>{class t extends e.mm{constructor(r){super(r),this.document=li}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const di=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let ui=(()=>{class t extends e.AE{constructor(r){super(r),this.document=di}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pi=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let mi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gi=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let fi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vi=e.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${pt}`;let hi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=vi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zi=e.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let Ci=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _i=e.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${mt}`;let yi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ti=e.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Ii=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ti}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mi=e.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Di=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Si=e.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Oi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Si}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ei=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Pi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ei}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ai=e.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let xi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ai}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ni=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Li=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ni}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fi=e.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${we}`;let $i=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Fi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ri=e.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let bi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ri}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gi=e.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;let Bi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qi=e.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${xt}`;let Ui=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Qi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wi=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;let Vi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zi=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Nt}`;let Yi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Zi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;const Wi=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Ji=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ji=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Lt}`;let Ki=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ji}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hi=e.Ps`
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
    `;let ki=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Hi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xi=e.Ps`
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
    `;let qi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Ft}`;const er=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let tr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=er}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nr=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let or=(()=>{class t extends e.mm{constructor(r){super(r),this.document=nr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ir=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let rr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ir}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sr=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${vt}`;let ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=sr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const lr=e.Ps`
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
    `;let cr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=lr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${ht}`;const dr=e.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${zt}`;let ur=(()=>{class t extends e.AE{constructor(r){super(r),this.document=dr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const pr=e.Ps`
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
    `;let mr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=pr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gr=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let fr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=gr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vr=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let hr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=vr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zr=e.Ps`
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
    `;let Cr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=zr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _r=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let yr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=_r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tr=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Ir=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mr=e.Ps`
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
    `;let Dr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Mr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sr=e.Ps`
    query MolecularProfilesForVariant($variantId: Int!) {
  molecularProfiles(variantId: $variantId, first: 50) {
    nodes {
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
    `;let Or=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Sr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Er=e.Ps`
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
    `;let Pr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Er}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ar=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Ct}`;let xr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ar}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nr=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Lr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Nr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fr=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${$t}`;let $r=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rr=e.Ps`
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
    `;let br=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Rr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gr=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Rt}`;let Br=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qr=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${bt}`;let Ur=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wr=e.Ps`
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
    `;let Vr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=wr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zr=e.Ps`
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
    `;let Yr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wr=e.Ps`
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
    `;let Jr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jr=e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${yt}`;let Kr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hr=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Tt}`;let kr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xr=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${It}`;let qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const es=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Bt}`;let ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=es}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ns=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Mt}`;let os=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ns}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const is=e.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Dt}`;let rs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ss=e.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Ot}`;let as=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ss}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ls=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Et}`;let cs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ls}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ds=e.Ps`
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
    ${Pt}`;let us=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ds}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ps=e.Ps`
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
    ${At}`;let ms=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gs=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let fs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vs=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${p}`;let hs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zs=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${H}`;let Cs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _s=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${u}`;let ys=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ts=e.Ps`
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
    `;let Is=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ts}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ms=e.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${pe}`;let Ds=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ss=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${ye}`;let Os=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ss}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Es=e.Ps`
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
    ${ot}
${Fe}
${Ae}
${Qt}`;let Ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Es}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const As=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Qt}`;let xs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=As}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ns=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${wt}`;let Ls=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ns}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fs=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let $s=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rs=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Vt}`;let bs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Rs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const Gs=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Zt}`;let Bs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qs=e.Ps`
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
    `;let Us=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ws=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Yt}`;let Vs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ws}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zs=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Jt}`;let Ys=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(me,V,i)=>{i.r(V),i.d(V,{LayoutModule:()=>At});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),f=i(8929),I=i(7625),a=i(655),b=i(4090),l=i(1721),h=i(4219),C=i(925),y=i(5017),T=i(226),j=i(5113);const O=["*"],k=["nz-sider-trigger",""];function Q(p,H){}function L(p,H){if(1&p&&(n.ynx(0),n.YNc(1,Q,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),P=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||P)}}function Z(p,H){}function M(p,H){if(1&p&&(n.ynx(0),n.YNc(1,Z,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),P=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||P)}}function $(p,H){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function ee(p,H){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function w(p,H){if(1&p&&(n.YNc(0,$,1,1,"i",4),n.YNc(1,ee,1,1,"i",4)),2&p){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function N(p,H){1&p&&n._UZ(0,"i",6)}function d(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const pe=n.oxw();return pe.setCollapsed(!pe.nzCollapsed)}),n.qZA()}if(2&p){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let R=(()=>{class p{constructor(u,P){this.elementRef=u,this.renderer=P,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),W=(()=>{class p{constructor(u,P){this.elementRef=u,this.renderer=P,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),G=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(u){return new(u||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,P){2&u&&(n.Udp("width",P.isNormalTrigger?P.siderWidth:null),n.ekj("ant-layout-sider-trigger",P.isNormalTrigger)("ant-layout-sider-zero-width-trigger",P.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",P.isZeroTrigger&&P.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",P.isZeroTrigger&&!P.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:k,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,P){1&u&&(n.YNc(0,L,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,w,2,2,"ng-template",null,1,n.W1O),n.YNc(4,N,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",P.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",P.isNormalTrigger))},directives:[e.O5,e.tP,y.Ls],encapsulation:2,changeDetection:0}),p})(),g=(()=>{class p{constructor(u,P,pe){this.platform=u,this.cdr=P,this.breakpointService=pe,this.destroy$=new f.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,l.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(b.ow,!0).pipe((0,I.R)(this.destroy$)).subscribe(u=>{const P=this.nzBreakpoint;P&&(0,l.ov)().subscribe(()=>{this.matchBreakPoint=!u[P],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:P,nzCollapsedWidth:pe,nzWidth:ye}=u;(P||pe||ye)&&this.updateStyleMap(),P&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(C.t4),n.Y36(n.sBO),n.Y36(b.r3))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(u,P,pe){if(1&u&&n.Suo(pe,h.wO,5),2&u){let ye;n.iGM(ye=n.CRH())&&(P.nzMenuDirective=ye.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,P){2&u&&(n.Udp("flex",P.flexSetting)("max-width",P.widthSetting)("min-width",P.widthSetting)("width",P.widthSetting),n.ekj("ant-layout-sider-zero-width",P.nzCollapsed&&0===P.nzCollapsedWidth)("ant-layout-sider-light","light"===P.nzTheme)("ant-layout-sider-dark","dark"===P.nzTheme)("ant-layout-sider-collapsed",P.nzCollapsed)("ant-layout-sider-has-trigger",P.nzCollapsible&&null!==P.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:O,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,P){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,d,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",P.nzCollapsible&&null!==P.nzTrigger))},directives:[G,e.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,l.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsed",void 0),p})(),B=(()=>{class p{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new f.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,I.R)(this.destroy$)).subscribe(P=>{this.dir=P})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(T.Is,8))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(u,P,pe){if(1&u&&n.Suo(pe,g,4),2&u){let ye;n.iGM(ye=n.CRH())&&(P.listOfNzSiderComponent=ye)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,P){2&u&&n.ekj("ant-layout-rtl","rtl"===P.dir)("ant-layout-has-sider",P.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),U=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[T.vT,e.ez,y.PV,j.xu,C.ud]]}),p})();var A=i(404),q=i(1894),ie=i(7630),fe=i(8054),_e=i(353),Te=i(8514),De=i(8896),he=i(5254),E=i(3240),oe=i(1307),Y=i(3164),de=i(7545),F=i(4850),ce=i(2198),ne=i(5778),te=i(3075),ue=i(3618),re=i(6949);function ze(p,H){if(1&p&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&p){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function _(p,H){if(1&p&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,ze,3,1,"span",6),n.qZA()),2&p){const u=H.$implicit,P=n.oxw();n.Q6J("nzValue",u.result),n.xp6(1),n.Q6J("nzType",P.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function X(p,H){1&p&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let D=(()=>{class p{constructor(u,P){this.gql=u,this.router=P,this.onSearch$=new f.xQ,this.onSelect$=new f.xQ,this.response$=this.onSearch$.pipe((0,oe.T)(1),(0,Y.p)(300,_e.z,{leading:!1,trailing:!0}),(0,de.w)(Ae=>function se(p,H=De.E,u=De.E){return(0,Te.P)(()=>p()?H:u)}(()=>void 0===this.queryRef,(0,Te.P)(()=>pe(Ae)),(0,Te.P)(()=>ye(Ae))))),this.isLoading$=this.response$.pipe((0,F.U)(Ae=>Ae.loading),(0,ce.h)(E.ep),(0,ne.x)()),this.result$=this.response$.pipe((0,F.U)(Ae=>{var Fe;return null===(Fe=Ae.data)||void 0===Fe?void 0:Fe.search}),(0,ce.h)(E.ep)),this.option$=this.result$.pipe((0,F.U)(Ae=>{const Fe=[];return Ae.forEach(ot=>{ot&&Fe.push({text:ot.name,value:ot.id.toString(),result:ot})}),Fe})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const pe=Ae=>(this.queryRef=this.gql.watch({query:Ae,highlightMatches:!0}),this.queryRef.valueChanges),ye=Ae=>(0,he.D)(this.queryRef.refetch({query:Ae}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case ie.rZD.EvidenceItem:return"civic:evidence";case ie.rZD.VariantGroup:return"civic:variantgroup";case ie.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let P;switch(u.resultType){case ie.rZD.VariantGroup:P="variant-groups";break;case ie.rZD.EvidenceItem:P="evidence";break;case ie.rZD.MolecularProfile:P="molecular-profiles";break;default:P=`${u.resultType.toLowerCase()}s`}return`/${P}/${u.id}/summary`}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(ie.ghc),n.Y36(o.F0))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(u,P){if(1&u&&n.Gf(fe.Vq,7),2&u){let pe;n.iGM(pe=n.CRH())&&(P.selectNode=pe.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,P){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(ye){return P.selectedOpt=ye})("ngModelChange",function(ye){return P.onSelect$.next(ye)})("nzOnSearch",function(ye){return P.onSearch$.next(ye)}),n.YNc(1,_,4,4,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,X,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",P.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,P.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,P.isLoading$)))},directives:[fe.Vq,te.JJ,te.On,e.sg,fe.Ip,y.Ls,e.O5,ue.ZU],pipes:[re.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var le=i(1912),Me=i(1059),Se=i(2340),$e=i(8144),Ge=i(6042),Be=i(2643),Re=i(2683),xe=i(3677),be=i(4401),Qe=i(7881),Ne=i(3640),Ze=i(8785),Ye=i(3434);function We(p,H){if(1&p&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&p){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const Je=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function J(p,H){if(1&p&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&p){const u=n.oxw().ngrxLet,P=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,Je)),n.xp6(1),n.MGl("routerLink","/users/",P.id,"/notifications")}}const ve=function(p){return{"update-coi":p}};function v(p,H){if(1&p&&n._UZ(0,"cvc-user-avatar",36),2&p){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,ve,u.invalidCoi))}}function m(p,H){if(1&p&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&p){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function ge(p,H){1&p&&n._UZ(0,"i",27)}function Ce(p,H){if(1&p&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,v,1,5,"cvc-user-avatar",33),n.YNc(3,m,2,1,"div",34),n.YNc(4,ge,1,0,"i",35),n.qZA()()),2&p){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function Pe(p,H){1&p&&(n.TgZ(0,"nz-space",22),n.YNc(1,We,3,1,"button",23),n.YNc(2,J,3,5,"nz-badge",24),n.YNc(3,Ce,5,1,"button",25),n.qZA())}function Le(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function Ee(p,H){1&p&&n._UZ(0,"li",14)}function Ue(p,H){1&p&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Ve(p,H){1&p&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function je(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(p){return["/users",p]};function He(p,H){if(1&p){const u=n.EpF();n.ynx(0),n.YNc(1,Pe,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,Le,4,0,"li",9),n.YNc(6,Ee,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Ue,3,0,"li",12),n.YNc(10,Ve,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,je,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&p){const u=H.ngIf,P=n.oxw();n.xp6(1),n.Q6J("ngrxLet",P.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(p,H){1&p&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function et(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function it(p,H){1&p&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(p,H){1&p&&n._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class p{constructor(u,P){this.queryService=u,this.unreadCountGql=P,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Se.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,F.U)(({data:pe})=>pe.notifications.unreadCount),(0,Me.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,F.U)(({data:pe})=>pe.notifications.unreadCount),(0,Me.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a),n.Y36(ie.Kmw))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,P){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return P.coiUpdateModalVisible=ye})("nzOnCancel",function(){return P.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return P.addVariantModalVisible=ye})("nzOnCancel",function(){return P.addVariantModalVisible=!1}),n.YNc(8,it,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const pe=n.MAs(4),ye=n.MAs(6),Ae=n.MAs(9),Fe=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,P.viewer$)),n.xp6(2),n.Q6J("nzVisible",P.coiUpdateModalVisible)("nzContent",ye)("nzTitle",pe)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",P.addVariantModalVisible)("nzContent",Fe)("nzTitle",Ae)("nzFooter",null)}},directives:[e.O5,re.eJ,$e.NU,$e.$1,Ge.ix,Be.dQ,Re.w,xe.wA,xe.cm,y.Ls,be.x7,o.rH,Qe.L,e.mk,xe.RR,h.wO,h.r9,h.YV,o.yS,Ne.du,Ze.t,Ye.G],pipes:[re.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function at(p,H){1&p&&n._UZ(0,"img",63)}function rt(p,H){1&p&&n._UZ(0,"img",64)}function z(p,H){1&p&&n._UZ(0,"cvc-login-button")}function K(p,H){1&p&&n._UZ(0,"cvc-viewer-button")}const x=function(p){return{"is-collapsed":p}},Ie=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-layout"]],decls:137,vars:48,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/therapies"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row","","id","header-row"],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","200px","id","header-search"],["nz-col","","nzFlex","1 0 250px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["target","_blank","href","https://docs.civicdb.org/"],["routerLink","/pages/help"],["nz-col","","nzFlex","1 0 auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,P){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(ye){return P.isCollapsed=ye}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,at,1,0,"img",4),n.YNc(5,rt,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Therapies"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()(),n.TgZ(81,"li",8),n._UZ(82,"i",37),n.TgZ(83,"span")(84,"a",38),n._uU(85,"Search"),n.qZA()()()()(),n.TgZ(86,"li",7)(87,"ul")(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Contributors"),n.qZA()()(),n.TgZ(93,"li",8),n._UZ(94,"i",41),n.TgZ(95,"span")(96,"a",42),n._uU(97,"Organizations"),n.qZA()()()()(),n.TgZ(98,"li",7)(99,"ul")(100,"li",8),n._UZ(101,"i",43),n.TgZ(102,"span")(103,"a",44),n._uU(104,"Data Releases"),n.qZA()()()()()(),n.TgZ(105,"div",45),n._UZ(106,"img",46)(107,"img",47),n.qZA()(),n.TgZ(108,"nz-layout",48)(109,"nz-header")(110,"div",49)(111,"div",50)(112,"span",51),n.NdJ("click",function(){return P.isCollapsed=!P.isCollapsed}),n._UZ(113,"i",52),n.qZA()(),n.TgZ(114,"div",53),n._UZ(115,"cvc-quicksearch"),n.qZA(),n.TgZ(116,"div",54)(117,"ul",55)(118,"li",56)(119,"a",57),n._uU(120,"Home"),n.qZA()(),n.TgZ(121,"li",56)(122,"a",58),n._uU(123,"About CIViC"),n.qZA()(),n.TgZ(124,"li",56)(125,"a",59),n._uU(126,"Documentation"),n.qZA()(),n.TgZ(127,"li",56)(128,"a",60),n._uU(129,"Help"),n.qZA()()()(),n.TgZ(130,"div",61),n.YNc(131,z,1,0,"cvc-login-button",62),n.ALo(132,"async"),n.YNc(133,K,1,0,"cvc-viewer-button",62),n.ALo(134,"async"),n.qZA()()(),n.TgZ(135,"nz-content"),n._UZ(136,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",P.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(40,x,P.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!P.isCollapsed),n.xp6(1),n.Q6J("ngIf",P.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(42,x,P.isCollapsed))("nzInlineCollapsed",P.isCollapsed),n.xp6(1),n.Q6J("nzTitle",P.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Therapies":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(44,x,P.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(46,x,P.isCollapsed)),n.xp6(5),n.Q6J("nzType",P.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(18),n.Q6J("ngIf",n.lcZ(132,36,P.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(134,38,P.signedIn$)))},directives:[B,g,o.yS,e.mk,e.O5,h.wO,h.uA,h.r9,A.SY,y.Ls,W,q.SK,q.t3,D,le.s,tt,R,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-row[_ngcontent-%COMP%]{flex-wrap:nowrap}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(4184),i.e(3883),i.e(1634),i.e(3754),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(2475),i.e(8482),i.e(7215),i.e(4024),i.e(8103),i.e(8592),i.e(933)]).then(i.bind(i,933)).then(p=>p.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(7717),i.e(7413)]).then(i.bind(i,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(1192),i.e(3883),i.e(3530)]).then(i.bind(i,9317)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"therapies",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8699)]).then(i.bind(i,8379)).then(p=>p.TherapiesModule),data:{breadcrumb:"Therapies"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(8592),i.e(7846)]).then(i.bind(i,9040)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(8592),i.e(5625)]).then(i.bind(i,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(1634),i.e(9484),i.e(7717),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(3883),i.e(9484),i.e(8592),i.e(1257)]).then(i.bind(i,684)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(3218)]).then(i.bind(i,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(5564),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let Oe=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Ie)],o.Bz]}),p})();var ct=i(1017),st=i(1047),dt=i(4546),qe=i(1314),ut=i(4832),pt=i(969),mt=i(2994),lt=i(8583),we=i(1159),gt=i(7429);const yt={provide:te.JU,useExisting:(0,n.Gpc)(()=>It),multi:!0};let It=(()=>{class p{constructor(u,P,pe,ye,Ae,Fe){this.ngZone=u,this.elementRef=P,this.overlay=pe,this.viewContainerRef=ye,this.nzInputGroupWhitSuffixOrPrefixDirective=Ae,this.document=Fe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new f.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,I.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const P=u.keyCode,pe=P===we.LH||P===we.JH;P===we.hY&&u.preventDefault(),!this.panelOpen||P!==we.hY&&P!==we.Mf?this.panelOpen&&P===we.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&pe&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),P===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const P=u.target,pe=this.document;let ye=P.value;"number"===P.type&&(ye=""===ye?null:parseFloat(ye)),this.previousValue!==ye&&(this.previousValue=ye,this.onChange(ye),this.canOpen()&&pe.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,mt.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,lt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ce.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Tt(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new gt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const P=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(P),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const P=this.nzAutocomplete.getOption(u),pe=P?P.getLabel():u;this.elementRef.nativeElement.value=null!=pe?pe:"",this.nzAutocomplete.nzBackfill||(this.previousValue=pe)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(st.ke,8),n.Y36(e.K0,8))},p.\u0275dir=n.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,P){1&u&&n.NdJ("focusin",function(){return P.handleFocus()})("blur",function(){return P.handleBlur()})("input",function(ye){return P.handleInput(ye)})("keydown",function(ye){return P.handleKeydown(ye)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([yt])]}),p})(),Mt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[T.vT,e.ez,qe.U8,te.u5,pt.T,ut.g,st.o7]]}),p})(),nt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,te.u5,o.Bz,re.WG,ue.ZJ,fe.LV,st.o7,dt.U5,y.PV,Mt]]}),p})();var Dt=i(1844),St=i(5473),Ot=i(330),Et=i(2324);let Pt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,re.WG,xe.b1,o.Bz,Ge.sL,$e.zf,y.PV,be.mS,A.cg,Ne.Qp,St.H,Ot.e,Et.e]]}),p})(),At=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,Oe,y.PV,q.Jb,U,h.ip,A.cg,ue.ZJ,ct.s,Dt.B,Pt,nt]]}),p})()},3240:(me,V,i)=>{function e(a){return null!=a}i.d(V,{ep:()=>e})},373:(me,V,i)=>{i.d(V,{j:()=>o});var e=i(4850);function o(...s){const f=s.length;if(0===f)throw new Error("list of properties cannot be empty.");return I=>(0,e.U)(function n(s,f){return a=>{let b=a;for(let l=0;l<f;l++){const h=null!=b?b[s[l]]:void 0;if(void 0===h)return;b=h}return b}}(s,f))(I)}},3164:(me,V,i)=>{i.d(V,{p:()=>a});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function a(C,y=o.P,T=n){return j=>j.lift(new b(C,y,T.leading,T.trailing))}class b{constructor(y,T,j,O){this.duration=y,this.scheduler=T,this.leading=j,this.trailing=O}call(y,T){return T.subscribe(new l(y,this.duration,this.scheduler,this.leading,this.trailing))}}class l extends e.L{constructor(y,T,j,O,k){super(y),this.duration=T,this.scheduler=j,this.leading=O,this.trailing=k,this._hasTrailingValue=!1,this._trailingValue=null}_next(y){this.throttled?this.trailing&&(this._trailingValue=y,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(h,this.duration,{subscriber:this})),this.leading?this.destination.next(y):this.trailing&&(this._trailingValue=y,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const y=this.throttled;y&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),y.unsubscribe(),this.remove(y),this.throttled=null)}}function h(C){const{subscriber:y}=C;y.clearThrottle()}},444:(me,V,i)=>{function e(N){return N!==String(parseFloat(N))}i.d(V,{o6:()=>w});var f=Object.getOwnPropertyNames?function o(N){return Object.getOwnPropertyNames(N).filter(function(d){return N.propertyIsEnumerable(d)&&e(d)})}:Object.keys?function n(N){return Object.keys(N).filter(e)}:function s(N){var d=[];for(var R in N)N.hasOwnProperty(R)&&N.propertyIsEnumerable(R)&&e(R)&&d.push(R);return d},I=function(){function N(d){this.enumObj=d,this.keysList=Object.freeze(f(d));for(var R=this.keysList.length,S=new Array(R),W=new Map,G=0;G<R;++G){var g=this.keysList[G],B=d[g];S[G]=B,W.set(B,g),this[G]=Object.freeze([g,B])}this.valuesList=Object.freeze(S),this.keysByValueMap=W,this.size=this.length=R,Object.freeze(this)}return N.prototype.toString=function(){return"[object EnumWrapper]"},N.prototype.keys=function(){var d,R=this,S=0;return(d={next:function(){var G={done:S>=R.length,value:R.keysList[S]};return++S,G}})[Symbol.iterator]=function(){return this},d},N.prototype.values=function(){var d,R=this,S=0;return(d={next:function(){var G={done:S>=R.length,value:R.valuesList[S]};return++S,G}})[Symbol.iterator]=function(){return this},d},N.prototype.entries=function(){var d,R=this,S=0;return(d={next:function(){var G={done:S>=R.length,value:R[S]};return++S,G}})[Symbol.iterator]=function(){return this},d},N.prototype[Symbol.iterator]=function(){return this.entries()},N.prototype.forEach=function(d,R){for(var S=this.length,W=0;W<S;++W){var G=this[W];d.call(R,G[1],G[0],this,W)}},N.prototype.map=function(d,R){for(var S=this.length,W=new Array(S),G=0;G<S;++G){var g=this[G];W[G]=d.call(R,g[1],g[0],this,G)}return W},N.prototype.getKeys=function(){return this.keysList.slice()},N.prototype.getValues=function(){return this.valuesList.slice()},N.prototype.getEntries=function(){return Array.prototype.slice.call(this)},N.prototype.indexOfKey=function(d){return this.keysList.indexOf(d)},N.prototype.indexOfValue=function(d){return this.valuesList.indexOf(d)},N.prototype.isKey=function(d){return null!=d&&e(d)&&this.enumObj.hasOwnProperty(d)},N.prototype.asKeyOrThrow=function(d){if(this.isKey(d))return d;throw new Error("Unexpected key: "+d+". Expected one of: "+this.getValues())},N.prototype.asKeyOrDefault=function(d,R){return this.isKey(d)?d:R},N.prototype.isValue=function(d){return null!=d&&this.keysByValueMap.has(d)},N.prototype.asValueOrThrow=function(d){if(this.isValue(d))return d;throw new Error("Unexpected value: "+d+". Expected one of: "+this.getValues())},N.prototype.asValueOrDefault=function(d,R){return this.isValue(d)?d:R},N.prototype.getKeyOrThrow=function(d){var R=null!=d?this.keysByValueMap.get(d):void 0;if(null!=R)return R;throw new Error("Unexpected value: "+d+". Expected one of: "+this.getValues())},N.prototype.getKeyOrDefault=function(d,R){var S=null!=d?this.keysByValueMap.get(d):void 0;return null!=S?S:R},N.prototype.getValueOrThrow=function(d){return this.enumObj[this.asKeyOrThrow(d)]},N.prototype.getValueOrDefault=function(d,R){return this.isKey(d)?this.enumObj[d]:R},N}();I.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),b=Symbol("ts-enum-util:handleNull"),l=Symbol("ts-enum-util:handleUndefined"),h=Symbol("ts-enum-util:handleUnexpected");function C(N){return new Error("Unhandled value: "+N)}var y=function(){function N(d){this.value=d}return N.prototype.with=function(d){if(d.hasOwnProperty(this.value))return O(d[this.value],this.value);if(d[h])return O(d[h],this.value);throw new Error("Unexpected value: "+this.value)},N}(),T=function(){function N(){}return N.prototype.with=function(d){if(d[b])return O(d[b],null);if(d[h])return O(d[h],null);throw new Error("Unexpected value: null")},N}(),j=function(){function N(){}return N.prototype.with=function(d){if(d[l])return O(d[l],void 0);if(d[h])return O(d[h],void 0);throw new Error("Unexpected value: undefined")},N}();function O(N,d){if(N===a)throw C(d);return N(d)}var k=function(){function N(d){this.value=d}return N.prototype.with=function(d){if(d.hasOwnProperty(this.value))return Z(d[this.value],this.value);if(d.hasOwnProperty(h))return Z(d[h],this.value);throw new Error("Unexpected value: "+this.value)},N}(),Q=function(){function N(){}return N.prototype.with=function(d){if(d.hasOwnProperty(b))return Z(d[b],null);if(d.hasOwnProperty(h))return Z(d[h],null);throw new Error("Unexpected value: null")},N}(),L=function(){function N(){}return N.prototype.with=function(d){if(d.hasOwnProperty(l))return Z(d[l],void 0);if(d.hasOwnProperty(h))return Z(d[h],void 0);throw new Error("Unexpected value: undefined")},N}();function Z(N,d){if(N===a)throw C(d);return N}var ee=new WeakMap;function w(N){var d=ee.get(N);return d||(d=new I(N),ee.set(N,d)),d}w.handleNull=b,w.handleUndefined=l,w.handleUnexpected=h,w.unhandledEntry=a,w.visitValue=function M(N){return null===N?new T:void 0===N?new j:new y(N)},w.mapValue=function $(N){return null===N?new Q:void 0===N?new L:new k(N)}},4987:(me,V,i)=>{i.d(V,{c:()=>N,t:()=>B});var e=i(8929),o=i(2654),I=(i(5254),i(8896),i(8139),i(5e3)),h=(i(1709),i(7770),i(7221),i(7625));const C=I.GuJ,T=Symbol("__destroy"),j=Symbol("__decoratorApplied");function O(A){return"string"==typeof A?Symbol(`__destroy__${A}`):T}function Q(A,q){A[q]||(A[q]=new e.xQ)}function L(A,q){A[q]&&(A[q].next(),A[q].complete(),A[q]=null)}function Z(A){A instanceof o.w&&A.unsubscribe()}function $(A,q){return function(){var ie;if(A&&A.call(this),L(this,O()),q.arrayName&&function M(A){Array.isArray(A)&&A.forEach(Z)}(this[q.arrayName]),q.checkProperties)for(const fe in this)(null===(ie=q.blackList)||void 0===ie?void 0:ie.includes(fe))||Z(this[fe])}}function N(A={}){return q=>{!function y(A){return!!A[C]}(q)?function ee(A,q){A.prototype.ngOnDestroy=$(A.prototype.ngOnDestroy,q)}(q,A):function w(A,q){const ie=A.\u0275pipe;ie.onDestroy=$(ie.onDestroy,q)}(q,A),function k(A){A.prototype[j]=!0}(q)}}function B(A,q){return ie=>{const fe=O(q);return"string"==typeof q?function g(A,q,ie){const fe=A[q];Q(A,ie),A[q]=function(){fe.apply(this,arguments),L(this,ie),A[q]=fe}}(A,q,fe):Q(A,fe),ie.pipe((0,h.R)(A[fe]))}}Symbol("CheckerHasBeenSet")},9552:(me,V,i)=>{i.d(V,{$:()=>R,j:()=>S});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),f=i(839),I=i(8929),a=i(6787),b=i(3753),l=i(7625),h=i(4850),C=i(3164),y=i(9439),T=i(1721),j=i(4090),O=i(925),k=i(5577),Q=i(226);const L=["fixedEl"],Z=["*"];var M=(()=>{return(W=M||(M={})).resize="resize",W.scroll="scroll",W.touchstart="touchstart",W.touchmove="touchmove",W.touchend="touchend",W.pageshow="pageshow",W.load="LOAD",M;var W})();function ee(W){return function $(W){return"undefined"!=typeof window&&W===window}(W)?{top:0,left:0,bottom:0}:W.getBoundingClientRect()}const N="ant-affix";let R=(()=>{class W{constructor(g,B,U,A,q,ie,fe,_e,Te,De){this.nzConfigService=U,this.scrollSrv=A,this.ngZone=q,this.platform=ie,this.renderer=fe,this.nzResizeObserver=_e,this.cdr=Te,this.directionality=De,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new f.t(1),this.destroy$=new I.xQ,this.placeholderNode=g.nativeElement,this.document=B}get target(){const g=this.nzTarget;return("string"==typeof g?this.document.querySelector(g):g)||window}ngOnInit(){var g;null===(g=this.directionality.change)||void 0===g||g.pipe((0,l.R)(this.destroy$)).subscribe(B=>{this.dir=B,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(g){const{nzOffsetBottom:B,nzOffsetTop:U,nzTarget:A}=g;(B||U)&&this.offsetChanged$.next(),A&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const g=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(M).map(B=>(0,b.R)(this.target,B)),this.offsetChanged$.pipe((0,h.U)(()=>({}))),this.nzResizeObserver.observe(g)).pipe((0,C.p)(20,void 0,{trailing:!0}),(0,l.R)(this.destroy$)).subscribe(B=>this.updatePosition(B))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(g,B){const U=g.getBoundingClientRect(),A=ee(B),q=this.scrollSrv.getScroll(B,!0),ie=this.scrollSrv.getScroll(B,!1),fe=this.document.body;return{top:U.top-A.top+q-(fe.clientTop||0),left:U.left-A.left+ie-(fe.clientLeft||0),width:U.width,height:U.height}}setAffixStyle(g,B){const U=this.affixStyle,A=this.target===window;if("scroll"===g.type&&U&&B&&A||(0,T.wU)(U,B))return;const q=!!B,ie=this.fixedEl.nativeElement;this.renderer.setStyle(ie,"cssText",(0,T.GM)(B)),this.affixStyle=B,q?ie.classList.add(N):ie.classList.remove(N),this.updateRtlClass(),(B&&!U||!B&&U)&&this.nzChange.emit(q)}setPlaceholderStyle(g){(0,T.wU)(g,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,T.GM)(g)),this.placeholderStyle=g)}syncPlaceholderStyle(g){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const B={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),B)),this.setPlaceholderStyle(B)}updatePosition(g){if(!this.platform.isBrowser)return;const B=this.target;let U=this.nzOffsetTop;const A=this.scrollSrv.getScroll(B,!0),q=this.getOffset(this.placeholderNode,B),ie=this.fixedEl.nativeElement,fe={width:ie.offsetWidth,height:ie.offsetHeight},_e={top:!1,bottom:!1};"number"!=typeof U&&"number"!=typeof this.nzOffsetBottom?(_e.top=!0,U=0):(_e.top="number"==typeof U,_e.bottom="number"==typeof this.nzOffsetBottom);const Te=ee(B),De=B.innerHeight||B.clientHeight;if(A>=q.top-U&&_e.top){const se=q.width;this.setAffixStyle(g,{position:"fixed",top:Te.top+U,left:Te.left+q.left,width:se}),this.setPlaceholderStyle({width:se,height:fe.height})}else if(A<=q.top+fe.height+this.nzOffsetBottom-De&&_e.bottom){const se=B===window?0:window.innerHeight-Te.bottom,he=q.width;this.setAffixStyle(g,{position:"fixed",bottom:se+this.nzOffsetBottom,left:Te.left+q.left,width:he}),this.setPlaceholderStyle({width:he,height:q.height})}else g.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(g),this.setPlaceholderStyle();"resize"===g.type&&this.syncPlaceholderStyle(g)}updateRtlClass(){const g=this.fixedEl.nativeElement;"rtl"===this.dir&&g.classList.contains(N)?g.classList.add(`${N}-rtl`):g.classList.remove(`${N}-rtl`)}}return W.\u0275fac=function(g){return new(g||W)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(y.jY),n.Y36(j.MF),n.Y36(n.R0b),n.Y36(O.t4),n.Y36(n.Qsj),n.Y36(k.D3),n.Y36(n.sBO),n.Y36(Q.Is,8))},W.\u0275cmp=n.Xpm({type:W,selectors:[["nz-affix"]],viewQuery:function(g,B){if(1&g&&n.Gf(L,7),2&g){let U;n.iGM(U=n.CRH())&&(B.fixedEl=U.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:Z,decls:3,vars:0,consts:[["fixedEl",""]],template:function(g,B){1&g&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,y.oS)(),(0,T.Rn)(void 0)],W.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,y.oS)(),(0,T.Rn)(void 0)],W.prototype,"nzOffsetBottom",void 0),W})(),S=(()=>{class W{}return W.\u0275fac=function(g){return new(g||W)},W.\u0275mod=n.oAB({type:W}),W.\u0275inj=n.cJS({imports:[[Q.vT,o.ez,O.ud]]}),W})()},6699:(me,V,i)=>{i.d(V,{Dz:()=>O,Rt:()=>Q});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),f=i(925),I=i(9808),a=i(5017),b=i(226);const l=["textEl"];function h(L,Z){if(1&L&&o._UZ(0,"i",3),2&L){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function C(L,Z){if(1&L){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(ee){return o.CHM(M),o.oxw().imgError(ee)}),o.qZA()}if(2&L){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function y(L,Z){if(1&L&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&L){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let O=(()=>{class L{constructor(M,$,ee,w){this.nzConfigService=M,this.elementRef=$,this.cdr=ee,this.platform=w,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,$=this.el.getBoundingClientRect().width,ee=2*this.nzGap<$?2*this.nzGap:8;this.textStyles={transform:`scale(${$-ee<M?($-ee)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return L.\u0275fac=function(M){return new(M||L)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(f.t4))},L.\u0275cmp=o.Xpm({type:L,selectors:[["nz-avatar"]],viewQuery:function(M,$){if(1&M&&o.Gf(l,5),2&M){let ee;o.iGM(ee=o.CRH())&&($.textEl=ee.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,$){2&M&&(o.Udp("width",$.customSize)("height",$.customSize)("line-height",$.customSize)("font-size",$.hasIcon&&$.customSize?$.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===$.nzSize)("ant-avatar-sm","small"===$.nzSize)("ant-avatar-square","square"===$.nzShape)("ant-avatar-circle","circle"===$.nzShape)("ant-avatar-icon",$.nzIcon)("ant-avatar-image",$.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,$){1&M&&(o.YNc(0,h,1,1,"i",0),o.YNc(1,C,1,3,"img",1),o.YNc(2,y,3,2,"span",2)),2&M&&(o.Q6J("ngIf",$.nzIcon&&$.hasIcon),o.xp6(1),o.Q6J("ngIf",$.nzSrc&&$.hasSrc),o.xp6(1),o.Q6J("ngIf",$.nzText&&$.hasText))},directives:[I.O5,a.Ls,I.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],L.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],L.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],L.prototype,"nzGap",void 0),L})(),Q=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=o.oAB({type:L}),L.\u0275inj=o.cJS({imports:[[b.vT,I.ez,a.PV,f.ud]]}),L})()},4401:(me,V,i)=>{i.d(V,{F9:()=>W,mS:()=>G,x7:()=>S});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),f=i(8076),I=i(9439),a=i(1721),b=i(226),l=i(4832),h=i(9808),C=i(969),y=i(7144);function T(g,B){if(1&g&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&g){const U=B.$implicit,A=o.oxw(2).index,q=o.oxw(2);o.ekj("current",U===q.countArray[A]),o.xp6(1),o.hij(" ",U," ")}}function j(g,B){if(1&g&&(o.ynx(0),o.YNc(1,T,2,3,"p",5),o.BQk()),2&g){const U=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",U.countSingleArray)}}function O(g,B){if(1&g&&(o.TgZ(0,"span",3),o.YNc(1,j,2,1,"ng-container",4),o.qZA()),2&g){const U=B.index,A=o.oxw(2);o.Udp("transform","translateY("+100*-A.countArray[U]+"%)"),o.Q6J("nzNoAnimation",A.noAnimation),o.xp6(1),o.Q6J("ngIf",!A.nzDot&&void 0!==A.countArray[U])}}function k(g,B){if(1&g&&(o.ynx(0),o.YNc(1,O,2,4,"span",2),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Q6J("ngForOf",U.maxNumberArray)}}function Q(g,B){if(1&g&&o._uU(0),2&g){const U=o.oxw();o.hij("",U.nzOverflowCount,"+")}}function L(g,B){if(1&g&&(o.ynx(0),o._uU(1),o.BQk()),2&g){const U=o.oxw(2);o.xp6(1),o.Oqu(U.nzText)}}function Z(g,B){if(1&g&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,L,2,1,"ng-container",1),o.qZA(),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",U.nzStatus||U.presetColor,""),o.Udp("background",!U.presetColor&&U.nzColor),o.Q6J("ngStyle",U.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",U.nzText)}}function M(g,B){if(1&g&&o._UZ(0,"nz-badge-sup",5),2&g){const U=o.oxw(2);o.Q6J("nzOffset",U.nzOffset)("nzTitle",U.nzTitle)("nzStyle",U.nzStyle)("nzDot",U.nzDot)("nzOverflowCount",U.nzOverflowCount)("disableAnimation",!!(U.nzStandalone||U.nzStatus||U.nzColor||null!=U.noAnimation&&U.noAnimation.nzNoAnimation))("nzCount",U.nzCount)("noAnimation",!(null==U.noAnimation||!U.noAnimation.nzNoAnimation))}}function $(g,B){if(1&g&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Q6J("ngIf",U.showSup)}}const ee=["*"];function w(g,B){if(1&g&&(o.ynx(0),o._uU(1),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Oqu(U.nzText)}}const N=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let d=(()=>{class g{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(U){const{nzOverflowCount:A,nzCount:q}=U;q&&"number"==typeof q.currentValue&&(this.count=Math.max(0,q.currentValue),this.countArray=this.count.toString().split("").map(ie=>+ie)),A&&this.generateMaxNumberArray()}}return g.\u0275fac=function(U){return new(U||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(U,A){2&U&&(o.uIk("title",null===A.nzTitle?"":A.nzTitle||A.nzCount),o.d8E("@.disabled",A.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(A.nzStyle),o.Udp("right",A.nzOffset&&A.nzOffset[0]?-A.nzOffset[0]:null,"px")("margin-top",A.nzOffset&&A.nzOffset[1]?A.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!A.nzDot)("ant-badge-dot",A.nzDot)("ant-badge-multiple-words",A.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(U,A){if(1&U&&(o.YNc(0,k,2,1,"ng-container",0),o.YNc(1,Q,1,1,"ng-template",null,1,o.W1O)),2&U){const q=o.MAs(2);o.Q6J("ngIf",A.count<=A.nzOverflowCount)("ngIfElse",q)}},directives:[h.O5,h.sg,l.P],encapsulation:2,data:{animation:[f.Ev]},changeDetection:0}),g})(),S=(()=>{class g{constructor(U,A,q,ie,fe,_e){this.nzConfigService=U,this.renderer=A,this.cdr=q,this.elementRef=ie,this.directionality=fe,this.noAnimation=_e,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,s.R)(this.destroy$)).subscribe(A=>{this.dir=A,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(U){const{nzColor:A,nzShowDot:q,nzDot:ie,nzCount:fe,nzShowZero:_e}=U;A&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null),(q||ie||fe||_e)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(U){return new(U||g)(o.Y36(I.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(b.Is,8),o.Y36(l.P,9))},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(U,A){2&U&&o.ekj("ant-badge-status",A.nzStatus)("ant-badge-not-a-wrapper",!!(A.nzStandalone||A.nzStatus||A.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:ee,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(U,A){1&U&&(o.F$t(),o.YNc(0,Z,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,$,2,1,"ng-container",1)),2&U&&(o.Q6J("ngIf",A.nzStatus||A.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",A.nzCount))},directives:[d,h.O5,h.PC,C.f],encapsulation:2,data:{animation:[f.Ev]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],g.prototype,"nzShowZero",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzShowDot",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzStandalone",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzDot",void 0),(0,e.gn)([(0,I.oS)()],g.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,I.oS)()],g.prototype,"nzColor",void 0),g})(),W=(()=>{class g{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(U){const{nzColor:A}=U;A&&(this.presetColor=this.nzColor&&-1!==N.indexOf(this.nzColor)?this.nzColor:null)}}return g.\u0275fac=function(U){return new(U||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:ee,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(U,A){1&U&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,w,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&U&&(o.xp6(1),o.Tol(A.presetColor&&"ant-ribbon-color-"+A.presetColor),o.Udp("background-color",!A.presetColor&&A.nzColor),o.ekj("ant-ribbon-placement-end","end"===A.nzPlacement)("ant-ribbon-placement-start","start"===A.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",A.nzText),o.xp6(1),o.Udp("color",!A.presetColor&&A.nzColor))},directives:[C.f],encapsulation:2,changeDetection:0}),g})(),G=(()=>{class g{}return g.\u0275fac=function(U){return new(U||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[b.vT,h.ez,y.Q8,C.T,l.g]]}),g})()},7484:(me,V,i)=>{i.d(V,{_i:()=>fe,bd:()=>De,vh:()=>he});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),f=i(7625),I=i(9439),a=i(226),b=i(9808),l=i(969);function h(E,oe){1&E&&o.Hsn(0)}const C=["*"];function y(E,oe){1&E&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&E&&o.Q6J("ngClass",oe.$implicit)}function T(E,oe){if(1&E&&(o.TgZ(0,"div",2),o.YNc(1,y,2,1,"div",3),o.qZA()),2&E){const Y=oe.$implicit;o.xp6(1),o.Q6J("ngForOf",Y)}}function j(E,oe){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const Y=o.oxw(3);o.xp6(1),o.Oqu(Y.nzTitle)}}function O(E,oe){if(1&E&&(o.TgZ(0,"div",11),o.YNc(1,j,2,1,"ng-container",12),o.qZA()),2&E){const Y=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Y.nzTitle)}}function k(E,oe){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const Y=o.oxw(3);o.xp6(1),o.Oqu(Y.nzExtra)}}function Q(E,oe){if(1&E&&(o.TgZ(0,"div",13),o.YNc(1,k,2,1,"ng-container",12),o.qZA()),2&E){const Y=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Y.nzExtra)}}function L(E,oe){}function Z(E,oe){if(1&E&&(o.ynx(0),o.YNc(1,L,0,0,"ng-template",14),o.BQk()),2&E){const Y=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",Y.listOfNzCardTabComponent.template)}}function M(E,oe){if(1&E&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,O,2,1,"div",8),o.YNc(3,Q,2,1,"div",9),o.qZA(),o.YNc(4,Z,2,1,"ng-container",10),o.qZA()),2&E){const Y=o.oxw();o.xp6(2),o.Q6J("ngIf",Y.nzTitle),o.xp6(1),o.Q6J("ngIf",Y.nzExtra),o.xp6(1),o.Q6J("ngIf",Y.listOfNzCardTabComponent)}}function $(E,oe){}function ee(E,oe){if(1&E&&(o.TgZ(0,"div",15),o.YNc(1,$,0,0,"ng-template",14),o.qZA()),2&E){const Y=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",Y.nzCover)}}function w(E,oe){1&E&&(o.ynx(0),o.Hsn(1),o.BQk())}function N(E,oe){1&E&&o._UZ(0,"nz-card-loading")}function d(E,oe){}function R(E,oe){if(1&E&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,d,0,0,"ng-template",14),o.qZA()()),2&E){const Y=oe.$implicit,de=o.oxw(2);o.Udp("width",100/de.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",Y)}}function S(E,oe){if(1&E&&(o.TgZ(0,"ul",16),o.YNc(1,R,3,3,"li",17),o.qZA()),2&E){const Y=o.oxw();o.xp6(1),o.Q6J("ngForOf",Y.nzActions)}}let ie=(()=>{class E{constructor(){this.nzHoverable=!0}}return E.\u0275fac=function(Y){return new(Y||E)},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(Y,de){2&Y&&o.ekj("ant-card-hoverable",de.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],E.prototype,"nzHoverable",void 0),E})(),fe=(()=>{class E{}return E.\u0275fac=function(Y){return new(Y||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-tab"]],viewQuery:function(Y,de){if(1&Y&&o.Gf(o.Rgc,7),2&Y){let F;o.iGM(F=o.CRH())&&(de.template=F.first)}},exportAs:["nzCardTab"],ngContentSelectors:C,decls:1,vars:0,template:function(Y,de){1&Y&&(o.F$t(),o.YNc(0,h,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),E})(),_e=(()=>{class E{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return E.\u0275fac=function(Y){return new(Y||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(Y,de){1&Y&&(o.TgZ(0,"div",0),o.YNc(1,T,2,1,"div",1),o.qZA()),2&Y&&(o.xp6(1),o.Q6J("ngForOf",de.listOfLoading))},directives:[b.sg,b.mk],encapsulation:2,changeDetection:0}),E})(),De=(()=>{class E{constructor(Y,de,F){this.nzConfigService=Y,this.cdr=de,this.directionality=F,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,f.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var Y;null===(Y=this.directionality.change)||void 0===Y||Y.pipe((0,f.R)(this.destroy$)).subscribe(de=>{this.dir=de,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(Y){return new(Y||E)(o.Y36(I.jY),o.Y36(o.sBO),o.Y36(a.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card"]],contentQueries:function(Y,de,F){if(1&Y&&(o.Suo(F,fe,5),o.Suo(F,ie,4)),2&Y){let ce;o.iGM(ce=o.CRH())&&(de.listOfNzCardTabComponent=ce.first),o.iGM(ce=o.CRH())&&(de.listOfNzCardGridDirective=ce)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(Y,de){2&Y&&o.ekj("ant-card-loading",de.nzLoading)("ant-card-bordered",!1===de.nzBorderless&&de.nzBordered)("ant-card-hoverable",de.nzHoverable)("ant-card-small","small"===de.nzSize)("ant-card-contain-grid",de.listOfNzCardGridDirective&&de.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===de.nzType)("ant-card-contain-tabs",!!de.listOfNzCardTabComponent)("ant-card-rtl","rtl"===de.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:C,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(Y,de){if(1&Y&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,ee,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,w,2,0,"ng-container",3),o.YNc(4,N,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,S,2,1,"ul",5)),2&Y){const F=o.MAs(5);o.Q6J("ngIf",de.nzTitle||de.nzExtra||de.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",de.nzCover),o.xp6(1),o.Q6J("ngStyle",de.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!de.nzLoading)("ngIfElse",F),o.xp6(3),o.Q6J("ngIf",de.nzActions.length)}},directives:[_e,b.O5,l.f,b.tP,b.PC,b.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzBordered",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],E.prototype,"nzLoading",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzHoverable",void 0),(0,e.gn)([(0,I.oS)()],E.prototype,"nzSize",void 0),E})(),he=(()=>{class E{}return E.\u0275fac=function(Y){return new(Y||E)},E.\u0275mod=o.oAB({type:E}),E.\u0275inj=o.cJS({imports:[[b.ez,l.T],a.vT]}),E})()},5577:(me,V,i)=>{i.d(V,{D3:()=>I,y7:()=>b});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let f=(()=>{class l{create(C){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(C)}}return l.\u0275fac=function(C){return new(C||l)},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),I=(()=>{class l{constructor(C){this.nzResizeObserverFactory=C,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((C,y)=>this.cleanupObserver(y))}observe(C){const y=(0,o.fI)(C);return new n.y(T=>{const O=this.observeElement(y).subscribe(T);return()=>{O.unsubscribe(),this.unobserveElement(y)}})}observeElement(C){if(this.observedElements.has(C))this.observedElements.get(C).count++;else{const y=new s.xQ,T=this.nzResizeObserverFactory.create(j=>y.next(j));T&&T.observe(C),this.observedElements.set(C,{observer:T,stream:y,count:1})}return this.observedElements.get(C).stream}unobserveElement(C){this.observedElements.has(C)&&(this.observedElements.get(C).count--,this.observedElements.get(C).count||this.cleanupObserver(C))}cleanupObserver(C){if(this.observedElements.has(C)){const{observer:y,stream:T}=this.observedElements.get(C);y&&y.disconnect(),T.complete(),this.observedElements.delete(C)}}}return l.\u0275fac=function(C){return new(C||l)(e.LFG(f))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),b=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[f]}),l})()},5482:(me,V,i)=>{i.d(V,{Zv:()=>d,cD:()=>R,yH:()=>w});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),f=i(2198),I=i(8076),a=i(9439),b=i(4090),l=i(1721),h=i(226),C=i(4832),y=i(9808),T=i(969),j=i(5017);const O=["*"],k=["collapseHeader"];function Q(S,W){if(1&S&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&S){const G=W.$implicit,g=o.oxw(2);o.xp6(1),o.Q6J("nzType",G||"right")("nzRotate",g.nzActive?90:0)}}function L(S,W){if(1&S&&(o.TgZ(0,"div"),o.YNc(1,Q,2,2,"ng-container",3),o.qZA()),2&S){const G=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",G.nzExpandedIcon)}}function Z(S,W){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const G=o.oxw();o.xp6(1),o.Oqu(G.nzHeader)}}function M(S,W){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const G=o.oxw(2);o.xp6(1),o.Oqu(G.nzExtra)}}function $(S,W){if(1&S&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&S){const G=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",G.nzExtra)}}const ee="collapse";let w=(()=>{class S{constructor(G,g,B,U){this.nzConfigService=G,this.cdr=g,this.directionality=B,this.destroy$=U,this._nzModuleName=ee,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(ee).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(G){this.listOfNzCollapsePanelComponent.push(G)}removePanel(G){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(G),1)}click(G){this.nzAccordion&&!G.nzActive&&this.listOfNzCollapsePanelComponent.filter(g=>g!==G).forEach(g=>{g.nzActive&&(g.nzActive=!1,g.nzActiveChange.emit(g.nzActive),g.markForCheck())}),G.nzActive=!G.nzActive,G.nzActiveChange.emit(G.nzActive)}}return S.\u0275fac=function(G){return new(G||S)(o.Y36(a.jY),o.Y36(o.sBO),o.Y36(h.Is,8),o.Y36(b.kn))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(G,g){2&G&&o.ekj("ant-collapse-icon-position-left","left"===g.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===g.nzExpandIconPosition)("ant-collapse-ghost",g.nzGhost)("ant-collapse-borderless",!g.nzBordered)("ant-collapse-rtl","rtl"===g.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([b.kn])],ngContentSelectors:O,decls:1,vars:0,template:function(G,g){1&G&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzAccordion",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzBordered",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzGhost",void 0),S})();const N="collapsePanel";let d=(()=>{class S{constructor(G,g,B,U,A,q){this.nzConfigService=G,this.ngZone=g,this.cdr=B,this.destroy$=U,this.nzCollapseComponent=A,this.noAnimation=q,this._nzModuleName=N,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(N).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,f.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return S.\u0275fac=function(G){return new(G||S)(o.Y36(a.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(b.kn),o.Y36(w,1),o.Y36(C.P,8))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-collapse-panel"]],viewQuery:function(G,g){if(1&G&&o.Gf(k,7),2&G){let B;o.iGM(B=o.CRH())&&(g.collapseHeader=B.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(G,g){2&G&&o.ekj("ant-collapse-no-arrow",!g.nzShowArrow)("ant-collapse-item-active",g.nzActive)("ant-collapse-item-disabled",g.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([b.kn])],ngContentSelectors:O,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(G,g){1&G&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,L,2,1,"div",2),o.YNc(3,Z,2,1,"ng-container",3),o.YNc(4,$,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&G&&(o.uIk("aria-expanded",g.nzActive),o.xp6(2),o.Q6J("ngIf",g.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",g.nzHeader),o.xp6(1),o.Q6J("ngIf",g.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",g.nzActive),o.Q6J("@.disabled",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("@collapseMotion",g.nzActive?"expanded":"hidden"))},directives:[y.O5,T.f,j.Ls],encapsulation:2,data:{animation:[I.J_]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],S.prototype,"nzActive",void 0),(0,e.gn)([(0,l.yF)()],S.prototype,"nzDisabled",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzShowArrow",void 0),S})(),R=(()=>{class S{}return S.\u0275fac=function(G){return new(G||S)},S.\u0275mod=o.oAB({type:S}),S.\u0275inj=o.cJS({imports:[[h.vT,y.ez,j.PV,T.T,C.g]]}),S})()},3098:(me,V,i)=>{i.d(V,{R7:()=>re,q6:()=>ze,uj:()=>ne});var e=i(226),o=i(925),n=i(9808),s=i(5e3),f=i(969),I=i(655),a=i(8929),b=i(6787),l=i(1721),h=i(7625),C=i(1059),y=i(7545),T=i(7138),j=i(2994),O=i(9439),k=i(948),Q=i(4090);function L(_,X){1&_&&s.Hsn(0)}const Z=["*"];function M(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzTitle)}}function $(_,X){if(1&_&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&_){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function ee(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzExtra)}}function w(_,X){if(1&_&&(s.TgZ(0,"div",8),s.YNc(1,ee,2,1,"ng-container",7),s.qZA()),2&_){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function N(_,X){if(1&_&&(s.TgZ(0,"div",3),s.YNc(1,$,2,1,"div",4),s.YNc(2,w,2,1,"div",5),s.qZA()),2&_){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",D.nzTitle),s.xp6(1),s.Q6J("ngIf",D.nzExtra)}}function d(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function R(_,X){}function S(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,d,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,R,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&_){const D=s.oxw().$implicit,le=s.oxw(3);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!le.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(2),s.Q6J("ngTemplateOutlet",D.content)}}function W(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function G(_,X){if(1&_&&(s.TgZ(0,"td",14),s.YNc(1,W,2,1,"ng-container",7),s.qZA()),2&_){const D=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function g(_,X){}function B(_,X){if(1&_&&(s.ynx(0),s.YNc(1,G,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,g,0,0,"ng-template",16),s.qZA(),s.BQk()),2&_){const D=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(1),s.Q6J("colSpan",2*D.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function U(_,X){if(1&_&&(s.ynx(0),s.YNc(1,S,7,5,"ng-container",2),s.YNc(2,B,4,3,"ng-container",2),s.BQk()),2&_){const D=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}function A(_,X){if(1&_&&(s.TgZ(0,"tr",10),s.YNc(1,U,3,2,"ng-container",11),s.qZA()),2&_){const D=X.$implicit;s.xp6(1),s.Q6J("ngForOf",D)}}function q(_,X){if(1&_&&(s.ynx(0),s.YNc(1,A,2,1,"tr",9),s.BQk()),2&_){const D=s.oxw();s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ie(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function fe(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ie,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&_){const D=X.$implicit,le=s.oxw(4);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!le.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function _e(_,X){}function Te(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,_e,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&_){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(3),s.Q6J("ngTemplateOutlet",D.content)}}function De(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,fe,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Te,5,2,"ng-container",11),s.qZA(),s.BQk()),2&_){const D=X.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function se(_,X){if(1&_&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&_){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function he(_,X){if(1&_&&(s.ynx(0),s._uU(1),s.BQk()),2&_){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function E(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,he,2,1,"ng-container",7),s.qZA(),s.BQk()),2&_){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function oe(_,X){}function Y(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,oe,0,0,"ng-template",16),s.qZA(),s.BQk()),2&_){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function de(_,X){if(1&_&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,E,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Y,3,2,"ng-container",11),s.qZA(),s.BQk()),2&_){const D=X.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function F(_,X){if(1&_&&(s.ynx(0),s.YNc(1,de,5,2,"ng-container",11),s.BQk()),2&_){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ce(_,X){if(1&_&&(s.ynx(0),s.YNc(1,se,2,1,"ng-container",2),s.YNc(2,F,2,1,"ng-container",2),s.BQk()),2&_){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}let ne=(()=>{class _{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return _.\u0275fac=function(D){return new(D||_)},_.\u0275cmp=s.Xpm({type:_,selectors:[["nz-descriptions-item"]],viewQuery:function(D,le){if(1&D&&s.Gf(s.Rgc,7),2&D){let Me;s.iGM(Me=s.CRH())&&(le.content=Me.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Z,decls:1,vars:0,template:function(D,le){1&D&&(s.F$t(),s.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,I.gn)([(0,l.Rn)()],_.prototype,"nzSpan",void 0),_})();const ue={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let re=(()=>{class _{constructor(D,le,Me,Se){this.nzConfigService=D,this.cdr=le,this.breakpointService=Me,this.directionality=Se,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ue,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Q.G_.md,this.destroy$=new a.xQ}ngOnInit(){var D;this.dir=this.directionality.value,null===(D=this.directionality.change)||void 0===D||D.pipe((0,h.R)(this.destroy$)).subscribe(le=>{this.dir=le})}ngOnChanges(D){D.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const D=this.items.changes.pipe((0,C.O)(this.items),(0,h.R)(this.destroy$));(0,b.T)(D,D.pipe((0,y.w)(()=>(0,b.T)(...this.items.map(le=>le.inputChange$)).pipe((0,T.e)(16)))),this.breakpointService.subscribe(Q.WV).pipe((0,j.b)(le=>this.breakpoint=le))).pipe((0,h.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let D=[],le=0;const Me=this.realColumn=this.getColumn(),Se=this.items.toArray(),$e=Se.length,Ge=[],Be=()=>{Ge.push(D),D=[],le=0};for(let Re=0;Re<$e;Re++){const xe=Se[Re],{nzTitle:be,content:Qe,nzSpan:Ne}=xe;le+=Ne,le>=Me?(le>Me&&(0,k.ZK)(`"nzColumn" is ${Me} but we have row length ${le}`),D.push({title:be,content:Qe,span:Me-(le-Ne)}),Be()):Re===$e-1?(D.push({title:be,content:Qe,span:Me-(le-Ne)}),Be()):D.push({title:be,content:Qe,span:Ne})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return _.\u0275fac=function(D){return new(D||_)(s.Y36(O.jY),s.Y36(s.sBO),s.Y36(Q.r3),s.Y36(e.Is,8))},_.\u0275cmp=s.Xpm({type:_,selectors:[["nz-descriptions"]],contentQueries:function(D,le,Me){if(1&D&&s.Suo(Me,ne,4),2&D){let Se;s.iGM(Se=s.CRH())&&(le.items=Se)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(D,le){2&D&&s.ekj("ant-descriptions-bordered",le.nzBordered)("ant-descriptions-middle","middle"===le.nzSize)("ant-descriptions-small","small"===le.nzSize)("ant-descriptions-rtl","rtl"===le.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(D,le){1&D&&(s.YNc(0,N,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,q,2,1,"ng-container",2),s.YNc(5,ce,3,2,"ng-container",2),s.qZA()()()),2&D&&(s.Q6J("ngIf",le.nzTitle||le.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===le.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===le.nzLayout))},directives:[n.O5,f.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,l.yF)(),(0,O.oS)()],_.prototype,"nzBordered",void 0),(0,I.gn)([(0,O.oS)()],_.prototype,"nzColumn",void 0),(0,I.gn)([(0,O.oS)()],_.prototype,"nzSize",void 0),(0,I.gn)([(0,O.oS)(),(0,l.yF)()],_.prototype,"nzColon",void 0),_})(),ze=(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275mod=s.oAB({type:_}),_.\u0275inj=s.cJS({imports:[[e.vT,n.ez,f.T,o.ud]]}),_})()},3677:(me,V,i)=>{i.d(V,{RR:()=>se,b1:()=>he,cm:()=>fe,wA:()=>De});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),f=i(8929),I=i(591),a=i(6787),b=i(3753),l=i(8896),h=i(6053),C=i(7604),y=i(4850),T=i(7545),j=i(2198),O=i(7138),k=i(5778),Q=i(7625),L=i(9439),Z=i(6950),M=i(1721),$=i(1314),ee=i(925),w=i(226),N=i(9808),d=i(3075),R=i(6042),S=i(4832),W=i(969),G=i(5017),g=i(4219),B=i(8076);function U(Y,de){if(1&Y){const F=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(ne){return s.CHM(F),s.oxw().onAnimationEvent(ne)})("mouseenter",function(){return s.CHM(F),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(F),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&Y){const F=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===F.dir),s.Q6J("ngClass",F.nzOverlayClassName)("ngStyle",F.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==F.noAnimation?null:F.noAnimation.nzNoAnimation)("nzNoAnimation",null==F.noAnimation?null:F.noAnimation.nzNoAnimation)}}const A=["*"],ie=[Z.yW.bottomLeft,Z.yW.bottomRight,Z.yW.topRight,Z.yW.topLeft];let fe=(()=>{class Y{constructor(F,ce,ne,te,ue,re){this.nzConfigService=F,this.elementRef=ce,this.overlay=ne,this.renderer=te,this.viewContainerRef=ue,this.platform=re,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new f.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new I.X(!1),this.nzTrigger$=new I.X("hover"),this.overlayClose$=new f.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(F,ce){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(F,ce)}ngAfterViewInit(){if(this.nzDropdownMenu){const F=this.elementRef.nativeElement,ce=(0,a.T)((0,b.R)(F,"mouseenter").pipe((0,C.h)(!0)),(0,b.R)(F,"mouseleave").pipe((0,C.h)(!1))),te=(0,a.T)(this.nzDropdownMenu.mouseState$,ce),ue=(0,b.R)(F,"click").pipe((0,y.U)(()=>!this.nzVisible)),re=this.nzTrigger$.pipe((0,T.w)(D=>"hover"===D?te:"click"===D?ue:l.E)),ze=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,j.h)(()=>this.nzClickHide),(0,C.h)(!1)),_=(0,a.T)(re,ze,this.overlayClose$).pipe((0,j.h)(()=>!this.nzDisabled)),X=(0,a.T)(this.inputVisible$,_);(0,h.aj)([X,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,y.U)(([D,le])=>D||le),(0,O.e)(150),(0,k.x)(),(0,j.h)(()=>this.platform.isBrowser),(0,Q.R)(this.destroy$)).subscribe(D=>{const Me=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:F).getBoundingClientRect().width;this.nzVisible!==D&&this.nzVisibleChange.emit(D),this.nzVisible=D,D?(this.overlayRef?this.overlayRef.getConfig().minWidth=Me:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Me,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,j.h)(Se=>!this.elementRef.nativeElement.contains(Se.target))),this.overlayRef.keydownEvents().pipe((0,j.h)(Se=>Se.keyCode===o.hY&&!(0,o.Vb)(Se)))).pipe((0,Q.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Z.yW[this.nzPlacement],...ie]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Q.R)(this.destroy$)).subscribe(D=>{"void"===D.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(F){const{nzVisible:ce,nzDisabled:ne,nzOverlayClassName:te,nzOverlayStyle:ue,nzTrigger:re}=F;if(re&&this.nzTrigger$.next(this.nzTrigger),ce&&this.inputVisible$.next(this.nzVisible),ne){const ze=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(ze,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(ze,"disabled")}te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),ue&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return Y.\u0275fac=function(F){return new(F||Y)(s.Y36(L.jY),s.Y36(s.SBq),s.Y36($.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(ee.t4))},Y.\u0275dir=s.lG2({type:Y,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,L.oS)(),(0,M.yF)()],Y.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],Y.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],Y.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],Y.prototype,"nzVisible",void 0),Y})(),_e=(()=>{class Y{}return Y.\u0275fac=function(F){return new(F||Y)},Y.\u0275mod=s.oAB({type:Y}),Y.\u0275inj=s.cJS({}),Y})(),De=(()=>{class Y{constructor(F,ce,ne){this.renderer=F,this.nzButtonGroupComponent=ce,this.elementRef=ne}ngAfterViewInit(){const F=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&F&&this.renderer.addClass(F,"ant-dropdown-button")}}return Y.\u0275fac=function(F){return new(F||Y)(s.Y36(s.Qsj),s.Y36(R.fY,9),s.Y36(s.SBq))},Y.\u0275dir=s.lG2({type:Y,selectors:[["","nz-button","","nz-dropdown",""]]}),Y})(),se=(()=>{class Y{constructor(F,ce,ne,te,ue,re,ze){this.cdr=F,this.elementRef=ce,this.renderer=ne,this.viewContainerRef=te,this.nzMenuService=ue,this.directionality=re,this.noAnimation=ze,this.mouseState$=new I.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new f.xQ}onAnimationEvent(F){this.animationStateChange$.emit(F)}setMouseState(F){this.mouseState$.next(F)}setValue(F,ce){this[F]=ce,this.cdr.markForCheck()}ngOnInit(){var F;null===(F=this.directionality.change)||void 0===F||F.pipe((0,Q.R)(this.destroy$)).subscribe(ce=>{this.dir=ce,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Y.\u0275fac=function(F){return new(F||Y)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(g.hl),s.Y36(w.Is,8),s.Y36(S.P,9))},Y.\u0275cmp=s.Xpm({type:Y,selectors:[["nz-dropdown-menu"]],viewQuery:function(F,ce){if(1&F&&s.Gf(s.Rgc,7),2&F){let ne;s.iGM(ne=s.CRH())&&(ce.templateRef=ne.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([g.hl,{provide:g.Cc,useValue:!0}])],ngContentSelectors:A,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(F,ce){1&F&&(s.F$t(),s.YNc(0,U,2,7,"ng-template"))},directives:[N.mk,N.PC,S.P],encapsulation:2,data:{animation:[B.mF]},changeDetection:0}),Y})(),he=(()=>{class Y{}return Y.\u0275fac=function(F){return new(F||Y)},Y.\u0275mod=s.oAB({type:Y}),Y.\u0275inj=s.cJS({imports:[[w.vT,N.ez,$.U8,d.u5,R.sL,g.ip,G.PV,S.g,ee.ud,Z.e4,_e,W.T],g.ip]}),Y})();new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(me,V,i)=>{i.d(V,{AA:()=>tt,I2:()=>je,IO:()=>ge,Ph:()=>rt,n_:()=>Xe,t4:()=>Ke,yi:()=>Le,yw:()=>Ee});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),f=i(655),I=i(1721),a=i(8929),b=i(8514),l=i(1086),h=i(6787),C=i(2916),y=i(591),T=i(2986),j=i(7545),O=i(7625),k=i(4090),Q=i(685),L=i(226),Z=i(7525),M=i(1894);const $=["*"];function ee(z,K){if(1&z&&e._UZ(0,"nz-avatar",3),2&z){const x=e.oxw();e.Q6J("nzSrc",x.nzSrc)}}function w(z,K){1&z&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function N(z,K){if(1&z&&e._UZ(0,"nz-list-item-meta-avatar",3),2&z){const x=e.oxw();e.Q6J("nzSrc",x.avatarStr)}}function d(z,K){if(1&z&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",x.avatarTpl)}}function R(z,K){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzTitle)}}function S(z,K){if(1&z&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,R,2,1,"ng-container",6),e.qZA()),2&z){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzTitle)}}function W(z,K){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzDescription)}}function G(z,K){if(1&z&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,W,2,1,"ng-container",6),e.qZA()),2&z){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzDescription)}}function g(z,K){if(1&z&&(e.TgZ(0,"div",5),e.YNc(1,S,2,1,"nz-list-item-meta-title",1),e.YNc(2,G,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("ngIf",x.nzTitle&&!x.titleComponent),e.xp6(1),e.Q6J("ngIf",x.nzDescription&&!x.descriptionComponent)}}const B=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],U=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function A(z,K){1&z&&e.Hsn(0)}const q=["nz-list-item-actions",""];function ie(z,K){}function fe(z,K){1&z&&e._UZ(0,"em",3)}function _e(z,K){if(1&z&&(e.TgZ(0,"li"),e.YNc(1,ie,0,0,"ng-template",1),e.YNc(2,fe,1,0,"em",2),e.qZA()),2&z){const x=K.$implicit,ae=K.last;e.xp6(1),e.Q6J("ngTemplateOutlet",x),e.xp6(1),e.Q6J("ngIf",!ae)}}function Te(z,K){}const De=function(z,K){return{$implicit:z,index:K}};function se(z,K){if(1&z&&(e.ynx(0),e.YNc(1,Te,0,0,"ng-template",9),e.BQk()),2&z){const x=K.$implicit,ae=K.index,Ie=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,De,x,ae))}}function he(z,K){if(1&z&&(e.TgZ(0,"div",7),e.YNc(1,se,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("ngForOf",x.nzDataSource)}}function E(z,K){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const x=e.oxw(2);e.xp6(1),e.Oqu(x.nzHeader)}}function oe(z,K){if(1&z&&(e.TgZ(0,"nz-list-header"),e.YNc(1,E,2,1,"ng-container",10),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzHeader)}}function Y(z,K){1&z&&e._UZ(0,"div"),2&z&&e.Udp("min-height",53,"px")}function de(z,K){}function F(z,K){if(1&z&&(e.TgZ(0,"div",13),e.YNc(1,de,0,0,"ng-template",9),e.qZA()),2&z){const x=K.$implicit,ae=K.index,Ie=e.oxw(2);e.Q6J("nzSpan",Ie.nzGrid.span||null)("nzXs",Ie.nzGrid.xs||null)("nzSm",Ie.nzGrid.sm||null)("nzMd",Ie.nzGrid.md||null)("nzLg",Ie.nzGrid.lg||null)("nzXl",Ie.nzGrid.xl||null)("nzXXl",Ie.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,De,x,ae))}}function ce(z,K){if(1&z&&(e.TgZ(0,"div",11),e.YNc(1,F,2,12,"div",12),e.qZA()),2&z){const x=e.oxw();e.Q6J("nzGutter",x.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",x.nzDataSource)}}function ne(z,K){if(1&z&&e._UZ(0,"nz-list-empty",14),2&z){const x=e.oxw();e.Q6J("nzNoResult",x.nzNoResult)}}function te(z,K){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const x=e.oxw(2);e.xp6(1),e.Oqu(x.nzFooter)}}function ue(z,K){if(1&z&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,te,2,1,"ng-container",10),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzFooter)}}function re(z,K){}function ze(z,K){}function _(z,K){if(1&z&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,ze,0,0,"ng-template",6),e.qZA()),2&z){const x=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzPagination)}}const X=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],D=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function le(z,K){if(1&z&&e._UZ(0,"ul",6),2&z){const x=e.oxw(2);e.Q6J("nzActions",x.nzActions)}}function Me(z,K){if(1&z&&(e.YNc(0,le,1,1,"ul",5),e.Hsn(1)),2&z){const x=e.oxw();e.Q6J("ngIf",x.nzActions&&x.nzActions.length>0)}}function Se(z,K){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzContent)}}function $e(z,K){if(1&z&&(e.ynx(0),e.YNc(1,Se,2,1,"ng-container",8),e.BQk()),2&z){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzContent)}}function Ge(z,K){if(1&z&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,$e,2,1,"ng-container",7)),2&z){const x=e.oxw();e.xp6(2),e.Q6J("ngIf",x.nzContent)}}function Be(z,K){1&z&&e.Hsn(0,3)}function Re(z,K){}function xe(z,K){}function be(z,K){}function Qe(z,K){}function Ne(z,K){if(1&z&&(e.YNc(0,Re,0,0,"ng-template",9),e.YNc(1,xe,0,0,"ng-template",9),e.YNc(2,be,0,0,"ng-template",9),e.YNc(3,Qe,0,0,"ng-template",9)),2&z){const x=e.oxw(),ae=e.MAs(3),Ie=e.MAs(5),Oe=e.MAs(1);e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}function Ze(z,K){}function Ye(z,K){}function We(z,K){}function Je(z,K){if(1&z&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,We,0,0,"ng-template",9),e.qZA()),2&z){const x=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzExtra)}}function J(z,K){}function ve(z,K){if(1&z&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,Ye,0,0,"ng-template",9),e.qZA(),e.YNc(4,Je,2,1,"nz-list-item-extra",7),e.YNc(5,J,0,0,"ng-template",9),e.BQk()),2&z){const x=e.oxw(),ae=e.MAs(3),Ie=e.MAs(1),Oe=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngIf",x.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}const v=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ge=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Ce=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Pe=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:$,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,ee,1,1,"nz-avatar",1),e.YNc(2,w,1,0,"ng-content",2),e.qZA()),2&x&&(e.xp6(1),e.Q6J("ngIf",ae.nzSrc),e.xp6(1),e.Q6J("ngIf",!ae.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),z})(),Le=(()=>{class z{constructor(x,ae){this.elementRef=x,this.renderer=ae,this.avatarStr="",this.renderer.addClass(x.nativeElement,"ant-list-item-meta")}set nzAvatar(x){x instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=x):this.avatarStr=x}}return z.\u0275fac=function(x){return new(x||z)(e.Y36(e.SBq),e.Y36(e.Qsj))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(x,ae,Ie){if(1&x&&(e.Suo(Ie,Ce,5),e.Suo(Ie,ge,5)),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.descriptionComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.titleComponent=Oe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:U,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(x,ae){1&x&&(e.F$t(B),e.YNc(0,N,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,d,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,g,5,2,"div",2)),2&x&&(e.Q6J("ngIf",ae.avatarStr),e.xp6(1),e.Q6J("ngIf",ae.avatarTpl),e.xp6(2),e.Q6J("ngIf",ae.nzTitle||ae.nzDescription||ae.descriptionComponent||ae.titleComponent))},directives:[Pe,ge,Ce,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),z})(),Ee=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:$,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),Ue=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-action"]],viewQuery:function(x,ae){if(1&x&&e.Gf(e.Rgc,5),2&x){let Ie;e.iGM(Ie=e.CRH())&&(ae.templateRef=Ie.first)}},exportAs:["nzListItemAction"],ngContentSelectors:$,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.YNc(0,A,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),z})(),Ve=(()=>{class z{constructor(x,ae,Ie){this.ngZone=x,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,b.P)(()=>this.nzListItemActions?(0,l.of)(null):this.ngZone.onStable.pipe((0,T.q)(1),this.enterZone(),(0,j.w)(()=>this.contentChildrenChanges$))),(0,h.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,O.R)(Ie)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Oe=>Oe.templateRef),ae.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return x=>new C.y(ae=>x.subscribe({next:Ie=>this.ngZone.run(()=>ae.next(Ie))}))}}return z.\u0275fac=function(x){return new(x||z)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(k.kn))},z.\u0275cmp=e.Xpm({type:z,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(x,ae,Ie){if(1&x&&e.Suo(Ie,Ue,4),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListItemActions=Oe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([k.kn]),e.TTD],attrs:q,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(x,ae){1&x&&e.YNc(0,_e,3,2,"li",0),2&x&&e.Q6J("ngForOf",ae.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),z})(),je=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(x,ae){1&x&&e._UZ(0,"nz-embed-empty",0),2&x&&e.Q6J("nzComponentName","list")("specificContent",ae.nzNoResult)},directives:[Q.gB],encapsulation:2,changeDetection:0}),z})(),Ke=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:$,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),He=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:$,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),ke=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:$,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),et=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275dir=e.lG2({type:z,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),z})(),Xe=(()=>{class z{constructor(x){this.directionality=x,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new y.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var x;this.dir=this.directionality.value,null===(x=this.directionality.change)||void 0===x||x.pipe((0,O.R)(this.destroy$)).subscribe(ae=>{this.dir=ae})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(x){x.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return z.\u0275fac=function(x){return new(x||z)(e.Y36(L.Is,8))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(x,ae,Ie){if(1&x&&(e.Suo(Ie,He,5),e.Suo(Ie,ke,5),e.Suo(Ie,et,5)),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListFooterComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListPaginationComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListLoadMoreDirective=Oe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(x,ae){2&x&&e.ekj("ant-list-rtl","rtl"===ae.dir)("ant-list-vertical","vertical"===ae.nzItemLayout)("ant-list-lg","large"===ae.nzSize)("ant-list-sm","small"===ae.nzSize)("ant-list-split",ae.nzSplit)("ant-list-bordered",ae.nzBordered)("ant-list-loading",ae.nzLoading)("ant-list-something-after-last-item",ae.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:D,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(x,ae){if(1&x&&(e.F$t(X),e.YNc(0,he,3,1,"ng-template",null,0,e.W1O),e.YNc(2,oe,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,Y,1,2,"div",3),e.YNc(7,ce,2,2,"div",4),e.YNc(8,ne,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,ue,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,re,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,_,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&x){const Ie=e.MAs(1);e.xp6(2),e.Q6J("ngIf",ae.nzHeader),e.xp6(2),e.Q6J("nzSpinning",ae.nzLoading),e.xp6(2),e.Q6J("ngIf",ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzGrid&&ae.nzDataSource)("ngIfElse",Ie),e.xp6(1),e.Q6J("ngIf",!ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",ae.nzLoadMore),e.xp6(2),e.Q6J("ngIf",ae.nzPagination)}},directives:[Ke,Z.W,je,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,I.yF)()],z.prototype,"nzBordered",void 0),(0,f.gn)([(0,I.yF)()],z.prototype,"nzLoading",void 0),(0,f.gn)([(0,I.yF)()],z.prototype,"nzSplit",void 0),z})(),tt=(()=>{class z{constructor(x,ae,Ie,Oe){this.parentComp=Ie,this.cdr=Oe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ae.addClass(x.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(x=>{this.itemLayout=x,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return z.\u0275fac=function(x){return new(x||z)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(x,ae,Ie){if(1&x&&e.Suo(Ie,Ee,5),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.listItemExtraDirective=Oe.first)}},hostVars:2,hostBindings:function(x,ae){2&x&&e.ekj("ant-list-item-no-flex",ae.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(x,ae){if(1&x&&(e.F$t(v),e.YNc(0,Me,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Ge,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,Ne,4,4,"ng-template",null,3,e.W1O),e.YNc(8,ve,6,4,"ng-container",4)),2&x){const Ie=e.MAs(7);e.xp6(8),e.Q6J("ngIf",ae.isVerticalAndExtra)("ngIfElse",Ie)}},directives:[Ve,Ee,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,I.yF)()],z.prototype,"nzNoFlex",void 0),z})(),rt=(()=>{class z{}return z.\u0275fac=function(x){return new(x||z)},z.\u0275mod=e.oAB({type:z}),z.\u0275inj=e.cJS({imports:[[L.vT,n.ez,Z.j,M.Jb,o.Rt,s.T,Q.Xo]]}),z})()},4219:(me,V,i)=>{i.d(V,{Cc:()=>_,YV:()=>We,hl:()=>D,ip:()=>Je,r9:()=>Me,uA:()=>Ye,wO:()=>Ne});var e=i(655),o=i(5e3),n=i(8929),s=i(591),f=i(6787),I=i(6053),a=i(4850),b=i(1709),l=i(2198),h=i(7604),C=i(7138),y=i(5778),T=i(7625),j=i(1059),O=i(7545),k=i(1721),Q=i(325),L=i(226),Z=i(1314),M=i(6950),$=i(925),ee=i(4832),w=i(9808),N=i(5017),d=i(969),R=i(8076);const S=["nz-submenu-title",""];function W(J,ve){if(1&J&&o._UZ(0,"i",4),2&J){const v=o.oxw();o.Q6J("nzType",v.nzIcon)}}function G(J,ve){if(1&J&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&J){const v=o.oxw();o.xp6(2),o.Oqu(v.nzTitle)}}function g(J,ve){1&J&&o._UZ(0,"i",8)}function B(J,ve){1&J&&o._UZ(0,"i",9)}function U(J,ve){if(1&J&&(o.TgZ(0,"span",5),o.YNc(1,g,1,0,"i",6),o.YNc(2,B,1,0,"i",7),o.qZA()),2&J){const v=o.oxw();o.Q6J("ngSwitch",v.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function A(J,ve){1&J&&o._UZ(0,"i",10)}const q=["*"],ie=["nz-submenu-inline-child",""];function fe(J,ve){}const _e=["nz-submenu-none-inline-child",""];function Te(J,ve){}const De=["nz-submenu",""];function se(J,ve){1&J&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function he(J,ve){if(1&J&&o._UZ(0,"div",6),2&J){const v=o.oxw(),m=o.MAs(7);o.Q6J("mode",v.mode)("nzOpen",v.nzOpen)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("menuClass",v.nzMenuClassName)("templateOutlet",m)}}function E(J,ve){if(1&J){const v=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(ge){return o.CHM(v),o.oxw(2).setMouseEnterState(ge)}),o.qZA()}if(2&J){const v=o.oxw(2),m=o.MAs(7);o.Q6J("theme",v.theme)("mode",v.mode)("nzOpen",v.nzOpen)("position",v.position)("nzDisabled",v.nzDisabled)("isMenuInsideDropDown",v.isMenuInsideDropDown)("templateOutlet",m)("menuClass",v.nzMenuClassName)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)}}function oe(J,ve){if(1&J){const v=o.EpF();o.YNc(0,E,1,10,"ng-template",7),o.NdJ("positionChange",function(ge){return o.CHM(v),o.oxw().onPositionChange(ge)})}if(2&J){const v=o.oxw(),m=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",v.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",v.triggerWidth)("cdkConnectedOverlayOpen",v.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function Y(J,ve){1&J&&o.Hsn(0,1)}const de=[[["","title",""]],"*"],F=["[title]","*"],ce=["titleElement"],ne=["nz-menu-group",""];function te(J,ve){if(1&J&&(o.ynx(0),o._uU(1),o.BQk()),2&J){const v=o.oxw();o.xp6(1),o.Oqu(v.nzTitle)}}function ue(J,ve){1&J&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const re=["*",[["","title",""]]],ze=["*","[title]"],_=new o.OlP("NzIsInDropDownMenuToken"),X=new o.OlP("NzMenuServiceLocalToken");let D=(()=>{class J{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(v){this.descendantMenuItemClick$.next(v)}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setMode(v){this.mode$.next(v)}setTheme(v){this.theme$.next(v)}setInlineIndent(v){this.inlineIndent$.next(v)}}return J.\u0275fac=function(v){return new(v||J)},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),le=(()=>{class J{constructor(v,m,ge){this.nzHostSubmenuService=v,this.nzMenuService=m,this.isMenuInsideDropDown=ge,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Ee=>"inline"===Ee?"inline":"vertical"===Ee||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ce=this.childMenuItemClick$.pipe((0,b.zg)(()=>this.mode$),(0,l.h)(Ee=>"inline"!==Ee||this.isMenuInsideDropDown),(0,h.h)(!1)),Pe=(0,f.T)(this.isMouseEnterTitleOrOverlay$,Ce);(0,I.aj)([this.isChildSubMenuOpen$,Pe]).pipe((0,a.U)(([Ee,Ue])=>Ee||Ue),(0,C.e)(150),(0,y.x)(),(0,T.R)(this.destroy$)).pipe((0,y.x)()).subscribe(Ee=>{this.setOpenStateWithoutDebounce(Ee),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Ee):this.nzMenuService.isChildSubMenuOpen$.next(Ee)})}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setOpenStateWithoutDebounce(v){this.isCurrentSubMenuOpen$.next(v)}setMouseEnterTitleOrOverlayState(v){this.isMouseEnterTitleOrOverlay$.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.LFG(J,12),o.LFG(D),o.LFG(_))},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),Me=(()=>{class J{constructor(v,m,ge,Ce,Pe,Le,Ee,Ue){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=ge,this.isMenuInsideDropDown=Ce,this.directionality=Pe,this.routerLink=Le,this.routerLinkWithHref=Ee,this.router=Ue,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,T.R)(this.destroy$),(0,l.h)(Ve=>Ve instanceof Q.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(v){this.nzDisabled?(v.preventDefault(),v.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(v){this.nzSelected=v,this.selected$.next(v)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const v=this.hasActiveLinks();this.nzSelected!==v&&(this.nzSelected=v,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const v=this.isLinkActive(this.router);return this.routerLink&&v(this.routerLink)||this.routerLinkWithHref&&v(this.routerLinkWithHref)||this.listOfRouterLink.some(v)||this.listOfRouterLinkWithHref.some(v)}isLinkActive(v){return m=>v.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var v;(0,I.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ge])=>{this.inlinePaddingLeft="inline"===m?this.level*ge:null}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(v){v.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(le,8),o.Y36(_),o.Y36(L.Is,8),o.Y36(Q.rH,8),o.Y36(Q.yS,8),o.Y36(Q.F0,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-item",""]],contentQueries:function(v,m,ge){if(1&v&&(o.Suo(ge,Q.rH,5),o.Suo(ge,Q.yS,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfRouterLink=Ce),o.iGM(Ce=o.CRH())&&(m.listOfRouterLinkWithHref=Ce)}},hostVars:20,hostBindings:function(v,m){1&v&&o.NdJ("click",function(Ce){return m.clickMenuItem(Ce)}),2&v&&(o.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDisabled",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzSelected",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDanger",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzMatchRouter",void 0),J})(),Se=(()=>{class J{constructor(v,m){this.cdr=v,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var v;this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.sBO),o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(v,m){1&v&&o.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(o.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:S,ngContentSelectors:q,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(v,m){if(1&v&&(o.F$t(),o.YNc(0,W,1,1,"i",0),o.YNc(1,G,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,U,3,2,"span",2),o.YNc(4,A,1,0,"ng-template",null,3,o.W1O)),2&v){const ge=o.MAs(5);o.Q6J("ngIf",m.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(2),o.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ge)}},directives:[w.O5,N.Ls,d.f,w.RF,w.n9,w.ED],encapsulation:2,changeDetection:0}),J})(),$e=(()=>{class J{constructor(v,m,ge){this.elementRef=v,this.renderer=m,this.directionality=ge,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:ge,menuClass:Ce}=v;(m||ge)&&this.calcMotionState(),Ce&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.removeClass(this.elementRef.nativeElement,Pe)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.addClass(this.elementRef.nativeElement,Pe)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(v,m){2&v&&(o.d8E("@collapseMotion",m.expandState),o.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:ie,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&o.YNc(0,fe,0,0,"ng-template",0),2&v&&o.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[w.tP],encapsulation:2,data:{animation:[R.J_]},changeDetection:0}),J})(),Ge=(()=>{class J{constructor(v){this.directionality=v,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:ge}=v;(m||ge)&&this.calcMotionState()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(v,m){1&v&&o.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(o.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),o.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:_e,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&(o.TgZ(0,"div",0),o.YNc(1,Te,0,0,"ng-template",1),o.qZA()),2&v&&(o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),o.Q6J("ngClass",m.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[w.mk,w.tP],encapsulation:2,data:{animation:[R.$C,R.mF]},changeDetection:0}),J})();const Be=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],Re=[M.yW.bottomLeft];let xe=(()=>{class J{constructor(v,m,ge,Ce,Pe,Le,Ee){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=ge,this.platform=Ce,this.isMenuInsideDropDown=Pe,this.directionality=Le,this.noAnimation=Ee,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(v){this.nzSubmenuService.setOpenStateWithoutDebounce(v)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(v){this.isActive=v,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(v)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(v){const m=(0,M.d_)(v);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var v;this.nzMenuService.theme$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Re:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,I.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ge])=>{this.inlinePaddingLeft="inline"===m?this.level*ge:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const v=this.listOfNzMenuItemDirective,m=v.changes,ge=(0,f.T)(m,...v.map(Ce=>Ce.selected$));m.pipe((0,j.O)(v),(0,O.w)(()=>ge),(0,j.O)(!0),(0,a.U)(()=>v.some(Ce=>Ce.nzSelected)),(0,T.R)(this.destroy$)).subscribe(Ce=>{this.isSelected=Ce,this.cdr.markForCheck()})}ngOnChanges(v){const{nzOpen:m}=v;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(le),o.Y36($.t4),o.Y36(_),o.Y36(L.Is,8),o.Y36(ee.P,9))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu",""]],contentQueries:function(v,m,ge){if(1&v&&(o.Suo(ge,J,5),o.Suo(ge,Me,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce)}},viewQuery:function(v,m){if(1&v&&o.Gf(Z.xu,7,o.SBq),2&v){let ge;o.iGM(ge=o.CRH())&&(m.cdkOverlayOrigin=ge.first)}},hostVars:34,hostBindings:function(v,m){2&v&&o.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([le]),o.TTD],attrs:De,ngContentSelectors:F,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(v,m){if(1&v&&(o.F$t(de),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Ce){return m.setMouseEnterState(Ce)})("toggleSubMenu",function(){return m.toggleSubMenu()}),o.YNc(2,se,1,0,"ng-content",2),o.qZA(),o.YNc(3,he,1,6,"div",3),o.YNc(4,oe,1,5,"ng-template",null,4,o.W1O),o.YNc(6,Y,1,0,"ng-template",null,5,o.W1O)),2&v){const ge=o.MAs(5);o.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!m.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===m.mode)("ngIfElse",ge)}},directives:[Se,$e,Ge,Z.xu,w.O5,ee.P,Z.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzOpen",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDisabled",void 0),J})();function be(J,ve){return J||ve}function Qe(J){return J||!1}let Ne=(()=>{class J{constructor(v,m,ge,Ce){this.nzMenuService=v,this.isMenuInsideDropDown=m,this.cdr=ge,this.directionality=Ce,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(v){this.nzInlineCollapsed=v,this.inlineCollapsed$.next(v)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(v=>v.nzOpen),this.listOfNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var v;(0,I.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,T.R)(this.destroy$)).subscribe(([m,ge])=>{this.actualMode=m?"vertical":ge,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ge=>ge.setSelectedState(ge===m))}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,T.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(v){const{nzInlineCollapsed:m,nzInlineIndent:ge,nzTheme:Ce,nzMode:Pe}=v;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ge&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ce&&this.nzMenuService.setTheme(this.nzTheme),Pe&&(this.mode$.next(this.nzMode),!v.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Le=>Le.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(_),o.Y36(o.sBO),o.Y36(L.Is,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu",""]],contentQueries:function(v,m,ge){if(1&v&&(o.Suo(ge,Me,5),o.Suo(ge,xe,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce)}},hostVars:34,hostBindings:function(v,m){2&v&&o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:X,useClass:D},{provide:D,useFactory:be,deps:[[new o.tp0,new o.FiY,D],X]},{provide:_,useFactory:Qe,deps:[[new o.tp0,new o.FiY,_]]}]),o.TTD]}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzSelectable",void 0),J})();function Ze(J){return J||!1}let Ye=(()=>{class J{constructor(v,m,ge){this.elementRef=v,this.renderer=m,this.isMenuInsideDropDown=ge,this.renderer.addClass(v.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const v=this.titleElement.nativeElement.nextElementSibling;v&&this.renderer.addClass(v,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(_))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-menu-group",""]],viewQuery:function(v,m){if(1&v&&o.Gf(ce,5),2&v){let ge;o.iGM(ge=o.CRH())&&(m.titleElement=ge.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:_,useFactory:Ze,deps:[[new o.tp0,new o.FiY,_]]}])],attrs:ne,ngContentSelectors:ze,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(v,m){1&v&&(o.F$t(re),o.TgZ(0,"div",null,0),o.YNc(2,te,2,1,"ng-container",1),o.YNc(3,ue,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&v&&(o.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(1),o.Q6J("ngIf",!m.nzTitle))},directives:[d.f,w.O5],encapsulation:2,changeDetection:0}),J})(),We=(()=>{class J{constructor(v,m){this.elementRef=v,this.renderer=m,this.renderer.addClass(v.nativeElement,"ant-dropdown-menu-item-divider")}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),J})(),Je=(()=>{class J{}return J.\u0275fac=function(v){return new(v||J)},J.\u0275mod=o.oAB({type:J}),J.\u0275inj=o.cJS({imports:[[L.vT,w.ez,$.ud,Z.U8,N.PV,ee.g,d.T]]}),J})()},3610:(me,V,i)=>{i.d(V,{$6:()=>M,lU:()=>L});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),f=i(1721),I=i(404),a=i(4832),b=i(226),l=i(1314),h=i(6950),C=i(9808),y=i(969);function T($,ee){if(1&$&&(o.ynx(0),o._uU(1),o.BQk()),2&$){const w=o.oxw(3);o.xp6(1),o.Oqu(w.nzTitle)}}function j($,ee){if(1&$&&(o.TgZ(0,"div",10),o.YNc(1,T,2,1,"ng-container",9),o.qZA()),2&$){const w=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",w.nzTitle)}}function O($,ee){if(1&$&&(o.ynx(0),o._uU(1),o.BQk()),2&$){const w=o.oxw(2);o.xp6(1),o.Oqu(w.nzContent)}}function k($,ee){if(1&$&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,j,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,O,2,1,"ng-container",9),o.qZA()()()()()),2&$){const w=o.oxw();o.ekj("ant-popover-rtl","rtl"===w.dir),o.Q6J("ngClass",w._classMap)("ngStyle",w.nzOverlayStyle)("@.disabled",null==w.noAnimation?null:w.noAnimation.nzNoAnimation)("nzNoAnimation",null==w.noAnimation?null:w.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",w.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",w.nzContent)}}let L=(()=>{class $ extends I.Mg{constructor(w,N,d,R,S,W){super(w,N,d,R,S,W),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(Z)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return $.\u0275fac=function(w){return new(w||$)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(a.P,9),o.Y36(s.jY))},$.\u0275dir=o.lG2({type:$,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(w,N){2&w&&o.ekj("ant-popover-open",N.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,f.yF)()],$.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],$.prototype,"nzPopoverBackdrop",void 0),$})(),Z=(()=>{class $ extends I.XK{constructor(w,N,d){super(w,N,d),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,I.pu)(this.nzTitle)&&(0,I.pu)(this.nzContent)}}return $.\u0275fac=function(w){return new(w||$)(o.Y36(o.sBO),o.Y36(b.Is,8),o.Y36(a.P,9))},$.\u0275cmp=o.Xpm({type:$,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(w,N){1&w&&(o.YNc(0,k,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function(R){return N.onClickOutside(R)})("detach",function(){return N.hide()})("positionChange",function(R){return N.onPositionChange(R)})),2&w&&o.Q6J("cdkConnectedOverlayHasBackdrop",N.hasBackdrop)("cdkConnectedOverlayOrigin",N.origin)("cdkConnectedOverlayPositions",N._positions)("cdkConnectedOverlayOpen",N._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",N.nzArrowPointAtCenter)},directives:[l.pI,h.hQ,C.mk,C.PC,a.P,C.O5,y.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),$})(),M=(()=>{class ${}return $.\u0275fac=function(w){return new(w||$)},$.\u0275mod=o.oAB({type:$}),$.\u0275inj=o.cJS({imports:[[b.vT,C.ez,l.U8,y.T,h.e4,a.g,I.cg]]}),$})()},8144:(me,V,i)=>{i.d(V,{$1:()=>j,NU:()=>Q,zf:()=>L});var e=i(226),o=i(9808),n=i(5e3),s=i(655),f=i(8929),I=i(7625),a=i(9439),b=i(1721);function l(Z,M){}const h=function(Z){return{$implicit:Z}};function C(Z,M){if(1&Z&&(n.TgZ(0,"span",4),n.YNc(1,l,0,0,"ng-template",5),n.qZA()),2&Z){const $=n.oxw(),ee=$.last,w=$.index,N=n.oxw();n.Udp("margin-bottom","vertical"===N.nzDirection?ee?null:N.spaceSize:null,"px")("margin-right","horizontal"===N.nzDirection?ee?null:N.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",N.nzSplit)("ngTemplateOutletContext",n.VKq(6,h,w))}}function y(Z,M){if(1&Z&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,C,2,8,"span",3)),2&Z){const $=M.$implicit,ee=M.last,w=n.oxw();n.Udp("margin-bottom","vertical"===w.nzDirection?ee?null:w.spaceSize:null,"px")("margin-right","horizontal"===w.nzDirection?ee?null:w.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",$),n.xp6(1),n.Q6J("ngIf",w.nzSplit&&!ee)}}const T=["*"];let j=(()=>{class Z{constructor(){}}return Z.\u0275fac=function($){return new($||Z)},Z.\u0275dir=n.lG2({type:Z,selectors:[["","nzSpaceItem",""]]}),Z})();const k={small:8,middle:16,large:24};let Q=(()=>{class Z{constructor($,ee){this.nzConfigService=$,this.cdr=ee,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=k.small,this.destroy$=new f.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?k[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Z.\u0275fac=function($){return new($||Z)(n.Y36(a.jY),n.Y36(n.sBO))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function($,ee,w){if(1&$&&n.Suo(w,j,4,n.Rgc),2&$){let N;n.iGM(N=n.CRH())&&(ee.items=N)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function($,ee){2&$&&(n.Udp("flex-wrap",ee.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===ee.nzDirection)("ant-space-vertical","vertical"===ee.nzDirection)("ant-space-align-start","start"===ee.mergedAlign)("ant-space-align-end","end"===ee.mergedAlign)("ant-space-align-center","center"===ee.mergedAlign)("ant-space-align-baseline","baseline"===ee.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function($,ee){1&$&&(n.F$t(),n.Hsn(0),n.YNc(1,y,3,6,"ng-template",0)),2&$&&(n.xp6(1),n.Q6J("ngForOf",ee.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,b.yF)()],Z.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],Z.prototype,"nzSize",void 0),Z})(),L=(()=>{class Z{}return Z.\u0275fac=function($){return new($||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),Z})()},7525:(me,V,i)=>{i.d(V,{W:()=>S,j:()=>W});var e=i(655),o=i(5e3),n=i(8929),s=i(591),f=i(839),I=i(8723),a=i(1177);class l{constructor(g){this.durationSelector=g}call(g,B){return B.subscribe(new h(g,this.durationSelector))}}class h extends a.Ds{constructor(g,B){super(g),this.durationSelector=B,this.hasValue=!1}_next(g){try{const B=this.durationSelector.call(this,g);B&&this._tryNext(g,B)}catch(B){this.destination.error(B)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(g,B){let U=this.durationSubscription;this.value=g,this.hasValue=!0,U&&(U.unsubscribe(),this.remove(U)),U=(0,a.ft)(B,new a.IY(this)),U&&!U.closed&&this.add(this.durationSubscription=U)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const g=this.value,B=this.durationSubscription;B&&(this.durationSubscription=void 0,B.unsubscribe(),this.remove(B)),this.value=void 0,this.hasValue=!1,super._next(g)}}}var C=i(1059),y=i(5778),T=i(7545),j=i(7625),O=i(9439),k=i(1721),Q=i(226),L=i(9808),Z=i(7144);function M(G,g){1&G&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function $(G,g){}function ee(G,g){if(1&G&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&G){const B=o.oxw(2);o.xp6(1),o.Oqu(B.nzTip)}}function w(G,g){if(1&G&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,$,0,0,"ng-template",6),o.YNc(3,ee,2,1,"div",7),o.qZA()()),2&G){const B=o.oxw(),U=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===B.dir)("ant-spin-spinning",B.isLoading)("ant-spin-lg","large"===B.nzSize)("ant-spin-sm","small"===B.nzSize)("ant-spin-show-text",B.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",B.nzIndicator||U),o.xp6(1),o.Q6J("ngIf",B.nzTip)}}function N(G,g){if(1&G&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&G){const B=o.oxw();o.ekj("ant-spin-blur",B.isLoading)}}const d=["*"],R="spin";let S=(()=>{class G{constructor(B,U,A){this.nzConfigService=B,this.cdr=U,this.directionality=A,this._nzModuleName=R,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new f.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var B;this.delay$.pipe((0,C.O)(this.nzDelay),(0,y.x)(),(0,T.w)(A=>0===A?this.spinning$:this.spinning$.pipe(function b(G){return g=>g.lift(new l(G))}(q=>(0,I.H)(q?A:0)))),(0,j.R)(this.destroy$)).subscribe(A=>{this.isLoading=A,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(R).pipe((0,j.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(B=this.directionality.change)||void 0===B||B.pipe((0,j.R)(this.destroy$)).subscribe(A=>{this.dir=A,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzSpinning:U,nzDelay:A}=B;U&&this.spinning$.next(this.nzSpinning),A&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return G.\u0275fac=function(B){return new(B||G)(o.Y36(O.jY),o.Y36(o.sBO),o.Y36(Q.Is,8))},G.\u0275cmp=o.Xpm({type:G,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(B,U){2&B&&o.ekj("ant-spin-nested-loading",!U.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:d,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(B,U){1&B&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,w,4,12,"div",1),o.YNc(3,N,2,2,"div",2)),2&B&&(o.xp6(2),o.Q6J("ngIf",U.isLoading),o.xp6(1),o.Q6J("ngIf",!U.nzSimple))},directives:[L.O5,L.tP],encapsulation:2}),(0,e.gn)([(0,O.oS)()],G.prototype,"nzIndicator",void 0),(0,e.gn)([(0,k.Rn)()],G.prototype,"nzDelay",void 0),(0,e.gn)([(0,k.yF)()],G.prototype,"nzSimple",void 0),(0,e.gn)([(0,k.yF)()],G.prototype,"nzSpinning",void 0),G})(),W=(()=>{class G{}return G.\u0275fac=function(B){return new(B||G)},G.\u0275mod=o.oAB({type:G}),G.\u0275inj=o.cJS({imports:[[Q.vT,L.ez,Z.Q8]]}),G})()},8481:(me,V,i)=>{i.d(V,{X:()=>j,j:()=>T});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),f=i(8693),I=i(1721),a=i(226),b=i(9808),l=i(5017),h=i(3075);function C(O,k){if(1&O){const Q=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(Z){return o.CHM(Q),o.oxw().closeTag(Z)}),o.qZA()}}const y=["*"];let T=(()=>{class O{constructor(Q,L,Z,M){this.cdr=Q,this.renderer=L,this.elementRef=Z,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Q){this.nzOnClose.emit(Q),Q.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Q=this.elementRef.nativeElement,L=new RegExp(`(ant-tag-(?:${[...f.uf,...f.Bh].join("|")}))`,"g"),Z=Q.classList.toString(),M=[];let $=L.exec(Z);for(;null!==$;)M.push($[1]),$=L.exec(Z);Q.classList.remove(...M)}setPresetColor(){const Q=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,f.o2)(this.nzColor)||(0,f.M8)(this.nzColor)),this.isPresetColor&&Q.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.dir=L,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzColor:L}=Q;L&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(Q){return new(Q||O)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(a.Is,8))},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Q,L){1&Q&&o.NdJ("click",function(){return L.updateCheckedStatus()}),2&Q&&(o.Udp("background-color",L.isPresetColor?"":L.nzColor),o.ekj("ant-tag-has-color",L.nzColor&&!L.isPresetColor)("ant-tag-checkable","checkable"===L.nzMode)("ant-tag-checkable-checked",L.nzChecked)("ant-tag-rtl","rtl"===L.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:y,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Q,L){1&Q&&(o.F$t(),o.Hsn(0),o.YNc(1,C,1,0,"i",0)),2&Q&&(o.xp6(1),o.Q6J("ngIf","closeable"===L.nzMode))},directives:[b.O5,l.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.yF)()],O.prototype,"nzChecked",void 0),O})(),j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=o.oAB({type:O}),O.\u0275inj=o.cJS({imports:[[a.vT,b.ez,h.u5,l.PV]]}),O})()}}]);