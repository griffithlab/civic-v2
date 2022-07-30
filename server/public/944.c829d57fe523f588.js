"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(ue,w,i)=>{i.d(w,{H:()=>De});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),f=i(325),I=i(8481),a=i(3610),G=i(3240),l=i(4850),h=i(2198),_=i(7630),T=i(7484),y=i(5017),j=i(3098),O=i(1894),H=i(8144),B=i(6949),L=i(160);function V(se,he){if(1&se&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&se){const E=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",E.officialName," ")}}function M(se,he){if(1&se&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&se){const E=he.$implicit;n.xp6(1),n.Oqu(E)}}function F(se,he){if(1&se&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&se){const E=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",E.geneAliases)}}function te(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/flags"),n.xp6(3),n.hij(" Flags (",E.flags.totalCount,") ")}}function b(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",E.revisions.totalCount,") ")}}function x(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/comments"),n.xp6(3),n.hij(" Comments (",E.comments.totalCount,") ")}}function c(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,V,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,F,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,te,4,2,"a",10),n.YNc(12,b,4,2,"a",10),n.YNc(13,x,4,2,"a",10),n.qZA()()()(),n.BQk()),2&se){const E=he.ngIf,ie=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",ie),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",E.geneAliases.length>0),n.xp6(2),n.hij(" ",E.variants.totalCount," ")}}let $=(()=>{class se{constructor(E){this.gql=E}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,l.U)(({data:E})=>null==E?void 0:E.gene),(0,h.h)(G.ep))}}return se.\u0275fac=function(E){return new(E||se)(n.Y36(_.rJ8))},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(E,ie){1&E&&(n.TgZ(0,"div",0),n.YNc(1,c,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,ie.gene$)))},directives:[s.O5,T.bd,y.Ls,j.R7,j.uj,s.sg,I.j,O.SK,O.t3,H.NU,H.$1,f.yS],pipes:[B.fM,L.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),se})();var S=i(1730),W=i(4557);function R(se,he){}function g(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,R,0,0,"ng-template",5),n.qZA(),n.BQk()),2&se){const E=n.oxw(),ie=n.MAs(2);n.xp6(1),n.Q6J("routerLink",E.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",ie)}}function Q(se,he){}function U(se,he){if(1&se&&n._UZ(0,"cvc-gene-popover",8),2&se){const E=n.oxw(2);n.Q6J("geneId",E.gene.id)}}function N(se,he){if(1&se){const E=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(Z){return n.CHM(E),n.oxw().itemClosed(Z)}),n.YNc(1,Q,0,0,"ng-template",5),n.qZA(),n.YNc(2,U,1,1,"ng-template",null,7,n.W1O)}if(2&se){const E=n.MAs(3),ie=n.oxw(),Z=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",ie.onCloseClicked?0:.5)("nzPopoverContent",E)("nzPopoverTrigger",ie.enablePopover?"hover":null)("nzMode",ie.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",Z)}}function ne(se,he){}function oe(se,he){if(1&se&&n.YNc(0,ne,0,0,"ng-template",5),2&se){n.oxw();const E=n.MAs(2);n.Q6J("ngTemplateOutlet",E)}}function ge(se,he){if(1&se&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&se){const E=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,E.gene.name,12)," ")}}function ze(se,he){if(1&se&&n._uU(0),2&se){const E=n.oxw(2);n.hij(" ",E.gene.name," ")}}function Te(se,he){if(1&se&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,ge,3,4,"ng-container",0),n.YNc(4,ze,1,1,"ng-template",null,11,n.W1O)),2&se){const E=n.MAs(5),ie=n.oxw();n.Q6J("flagged",ie.gene.flagged)("entityColor",ie.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",ie.truncateLongName)("ngIfElse",E)}}let De=(()=>{class se extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return se.\u0275fac=function(E){return new(E||se)},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(E,ie){if(1&E&&(n.YNc(0,g,3,2,"ng-container",0),n.YNc(1,N,4,5,"ng-template",null,1,n.W1O),n.YNc(3,oe,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Te,6,7,"ng-template",null,3,n.W1O)),2&E){const Z=n.MAs(4);n.Q6J("ngIf",ie.linked)("ngIfElse",Z)}},directives:[s.O5,f.yS,s.tP,I.j,a.lU,$,S.b,y.Ls],pipes:[L.a,W.W],styles:[""],changeDetection:0}),se})()},3309:(ue,w,i)=>{i.d(w,{U:()=>H});var e=i(9808),o=i(325),n=i(8481),s=i(5017),f=i(3610),I=i(6905),a=i(6949),G=i(7484),l=i(3098),h=i(1894),_=i(8144),T=i(5e3);let y=(()=>{class B{}return B.\u0275fac=function(V){return new(V||B)},B.\u0275mod=T.oAB({type:B}),B.\u0275inj=T.cJS({imports:[[e.ez,o.Bz,a.WG,G.vh,h.Jb,l.q6,n.X,s.PV,_.zf,I.s]]}),B})();var j=i(4401),O=i(6429);let H=(()=>{class B{}return B.\u0275fac=function(V){return new(V||B)},B.\u0275mod=T.oAB({type:B}),B.\u0275inj=T.cJS({imports:[[e.ez,o.Bz,n.X,f.$6,s.PV,j.mS,I.s,y,O.C]]}),B})()},1912:(ue,w,i)=>{i.d(w,{s:()=>j});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),f=i(3640),a=i(2160),G=i(3762),l=i(5017);let h=(()=>{class O{constructor(B){this.cookies=B,this.location=function I(O){return encodeURIComponent(O).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return O.\u0275fac=function(B){return new(B||O)(e.Y36(a.N))},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(B,L){1&B&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&B&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken))},directives:[G.n_,G.AA,o.ix,n.dQ,s.w,l.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),O})();function _(O,H){1&O&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function T(O,H){1&O&&e._uU(0," Sign In / Sign Up\n")}function y(O,H){if(1&O){const B=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(B),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let j=(()=>{class O{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return O.\u0275fac=function(B){return new(B||O)},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(B,L){if(1&B&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return L.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return L.authVisible=M})("nzOnCancel",function(){return L.handleCancel()}),e.YNc(4,_,4,0,"ng-container",2),e.qZA(),e.YNc(5,T,1,0,"ng-template",null,3,e.W1O),e.YNc(7,y,2,0,"ng-template",null,4,e.W1O)),2&B){const V=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",L.authVisible)("nzTitle",V)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,f.du,f.Hf,h],styles:["[_nghost-%COMP%]{display:inline-block}"]}),O})()},1844:(ue,w,i)=>{i.d(w,{B:()=>G});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),f=i(5017),I=i(5e3);let a=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=I.oAB({type:l}),l.\u0275inj=I.cJS({imports:[[e.ez,f.PV,s.Ph,o.sL]]}),l})(),G=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=I.oAB({type:l}),l.\u0275inj=I.cJS({imports:[[e.ez,o.sL,n.Qp,a]]}),l})()},1730:(ue,w,i)=>{i.d(w,{b:()=>l});var e=i(9771),o=i(5e3),n=i(9808);const s=function(h){return{background:h}};function f(h,_){if(1&h&&o._UZ(0,"div",3),2&h){const T=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,T.flagColor))}}function I(h,_){if(1&h&&o._UZ(0,"div",4),2&h){const T=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,T.entityColor))}}function a(h,_){if(1&h&&o._UZ(0,"div",5),2&h){const T=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,T.entityColor))}}const G=["*"];let l=(()=>{class h{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return h.\u0275fac=function(T){return new(T||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:G,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(T,y){1&T&&(o.F$t(),o.Hsn(0),o.YNc(1,f,1,3,"div",0),o.YNc(2,I,1,3,"div",1),o.YNc(3,a,1,3,"div",2)),2&T&&(o.xp6(1),o.Q6J("ngIf",y.flagged),o.xp6(1),o.Q6J("ngIf",y.hasRevisions),o.xp6(1),o.Q6J("ngIf",y.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),h})()},6429:(ue,w,i)=>{i.d(w,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),f})()},6550:(ue,w,i)=>{i.d(w,{l:()=>I});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const f=["*"];let I=(()=>{class a{set href(l){if(!l)throw new Error("link-tag link Input requires string.");this._href=l}get href(){return this._href}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:f,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(l,h){1&l&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&l&&(e.Q6J("href",h.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",h.tooltip)("nzTooltipTrigger",h.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",h.iconName?h.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),a})()},4989:(ue,w,i)=>{i.d(w,{X:()=>I});var e=i(9808),o=i(404),n=i(8481),s=i(5017),f=i(5e3);let I=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),a})()},7881:(ue,w,i)=>{i.d(w,{L:()=>I});var e=i(5e3),o=i(9808),n=i(6699);function s(a,G){if(1&a&&e._UZ(0,"nz-avatar",2),2&a){const l=e.oxw();e.Q6J("nzSrc",l.user.profileImagePath)("nzShape",l.shape?l.shape:"circle")("nzSize",l.size)}}function f(a,G){if(1&a&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&a){const l=e.oxw();e.Q6J("nzSize",l.size)("nzText",e.lcZ(1,2,l.user.displayName.charAt(0)))}}let I=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(l,h){if(1&l&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,f,2,4,"ng-template",null,1,e.W1O)),2&l){const _=e.MAs(2);e.Q6J("ngIf",h.user.profileImagePath)("ngIfElse",_)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(ue,w,i)=>{i.d(w,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),f})()},8664:(ue,w,i)=>{i.d(w,{I:()=>Z});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),f=i(325),I=i(8481),a=i(3610),G=i(3240),l=i(4850),h=i(2198),_=i(7630),T=i(7484),y=i(5017),j=i(3193),O=i(3098),H=i(6550),B=i(1894),L=i(8144),V=i(6949),M=i(160);function F(Y,K){if(1&Y&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&Y){const q=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",q.name," ")}}function te(Y,K){if(1&Y&&n._UZ(0,"cvc-gene-tag",14),2&Y){const q=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",q.gene)}}function b(Y,K){if(1&Y&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&Y){const q=K.$implicit;n.xp6(1),n.Oqu(q)}}function x(Y,K){if(1&Y&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,b,2,1,"nz-tag",16),n.qZA()),2&Y){const q=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",q.variantAliases)}}function c(Y,K){if(1&Y&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&Y){const q=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",q.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",q.alleleRegistryId," ")}}function $(Y,K){if(1&Y&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&Y){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/flags"),n.xp6(3),n.hij(" Flags (",q.flags.totalCount,") ")}}function S(Y,K){if(1&Y&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&Y){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",q.revisions.totalCount,") ")}}function W(Y,K){if(1&Y&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&Y){const q=n.oxw().ngIf;n.MGl("routerLink","/variants/",q.id,"/comments"),n.xp6(3),n.hij(" Comments (",q.comments.totalCount,") ")}}function R(Y,K){if(1&Y&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,F,3,4,"ng-template",null,3,n.W1O),n.YNc(4,te,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,x,2,1,"nz-descriptions-item",6),n.YNc(8,c,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,$,4,2,"a",12),n.YNc(15,S,4,2,"a",12),n.YNc(16,W,4,2,"a",12),n.qZA()()()(),n.BQk()),2&Y){const q=K.ngIf,ve=n.MAs(3),re=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",ve)("nzExtra",re),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",q.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",q.alleleRegistryId),n.xp6(2),n.hij(" ",q.evidenceItems.totalCount," ")}}let g=(()=>{class Y{constructor(q){this.gql=q}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,l.U)(({data:q})=>null==q?void 0:q.variant),(0,h.h)(G.ep))}}return Y.\u0275fac=function(q){return new(q||Y)(n.Y36(_.ZYZ))},Y.\u0275cmp=n.Xpm({type:Y,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(q,ve){1&q&&(n.TgZ(0,"div",0),n.YNc(1,R,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&q&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,ve.variant$)))},directives:[s.O5,T.bd,y.Ls,j.H,O.R7,O.uj,s.sg,I.j,H.l,B.SK,B.t3,L.NU,L.$1,f.yS],pipes:[V.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Y})();var Q=i(1730),U=i(4557);function N(Y,K){}function ne(Y,K){if(1&Y&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,N,0,0,"ng-template",5),n.qZA(),n.BQk()),2&Y){const q=n.oxw(),ve=n.MAs(2);n.xp6(1),n.Q6J("routerLink",q.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",ve)}}function oe(Y,K){}function ge(Y,K){if(1&Y&&n._UZ(0,"cvc-variant-popover",9),2&Y){const q=n.oxw(3);n.Q6J("variantId",q.variant.id)}}function ze(Y,K){if(1&Y&&n.YNc(0,ge,1,1,"cvc-variant-popover",8),2&Y){const q=n.oxw(2);n.Q6J("ngIf",q.enablePopover)}}function Te(Y,K){if(1&Y){const q=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(re){return n.CHM(q),n.oxw().itemClosed(re)}),n.YNc(1,oe,0,0,"ng-template",5),n.qZA(),n.YNc(2,ze,1,1,"ng-template",null,7,n.W1O)}if(2&Y){const q=n.MAs(3),ve=n.oxw(),re=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",ve.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",ve.enablePopover?"hover":null)("nzMode",ve.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",re)}}function De(Y,K){}function se(Y,K){if(1&Y&&n.YNc(0,De,0,0,"ng-template",5),2&Y){n.oxw();const q=n.MAs(2);n.Q6J("ngTemplateOutlet",q)}}function he(Y,K){if(1&Y&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&Y){const q=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,q.variant.name,20)," ")}}function E(Y,K){if(1&Y&&n._uU(0),2&Y){const q=n.oxw(2);n.hij(" ",q.variant.name," ")}}function ie(Y,K){if(1&Y&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,he,3,4,"ng-container",0),n.YNc(3,E,1,1,"ng-template",null,12,n.W1O)),2&Y){const q=n.MAs(4),ve=n.oxw();n.Q6J("flagged",ve.variant.flagged)("entityColor",ve.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",ve.iconColor),n.xp6(1),n.Q6J("ngIf",ve.truncateLongName)("ngIfElse",q)}}let Z=(()=>{class Y extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return Y.\u0275fac=function(q){return new(q||Y)},Y.\u0275cmp=n.Xpm({type:Y,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(q,ve){if(1&q&&(n.YNc(0,ne,3,2,"ng-container",0),n.YNc(1,Te,4,5,"ng-template",null,1,n.W1O),n.YNc(3,se,1,1,"ng-template",null,2,n.W1O),n.YNc(5,ie,5,5,"ng-template",null,3,n.W1O)),2&q){const re=n.MAs(4);n.Q6J("ngIf",ve.linked)("ngIfElse",re)}},directives:[s.O5,f.yS,s.tP,I.j,a.lU,g,Q.b,y.Ls],pipes:[U.W],styles:[""],changeDetection:0}),Y})()},4867:(ue,w,i)=>{i.d(w,{Q:()=>B});var e=i(9808),o=i(325),n=i(8481),s=i(5017),f=i(3610),I=i(6949),a=i(7484),G=i(1894),l=i(3098),h=i(8144),_=i(3309),T=i(4989),y=i(6905),j=i(5e3);let O=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,I.WG,a.vh,G.Jb,l.q6,n.X,s.PV,h.zf,y.s,_.U,T.X]]}),L})();var H=i(6429);let B=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=j.oAB({type:L}),L.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,n.X,f.$6,s.PV,y.s,O,H.C]]}),L})()},160:(ue,w,i)=>{i.d(w,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(I){return(0,e.f)(I)}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(ue,w,i)=>{i.d(w,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(I){this.sanitizer=I}transform(I,a){if(!a||""==a)return I;const G=new RegExp(a,"gi"),l=I.match(G);if(!l)return I;let h=I.replace(G,`<span class='typeahead-match'>${l[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(h)}}return s.\u0275fac=function(I){return new(I||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(ue,w,i)=>{i.d(w,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),f})()},7742:(ue,w,i)=>{i.d(w,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(I){return I?(0,e.c)(I):""}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ue,w,i)=>{i.d(w,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(f,I=25){if(f.length>I){let G=f.slice(0,I);var a=G.lastIndexOf(" ");return G.slice(0,a)+"\u2026"}return f}}return n.\u0275fac=function(f){return new(f||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ue,w,i)=>{i.d(w,{a:()=>h});var e=i(655),o=i(7630),n=i(4987),s=i(373),f=i(4850),I=i(1059),a=i(5154),G=i(5e3),l=i(520);let h=class{constructor(T,y){function j(M){return!(!M||M.role!==o.i44.Admin)}function O(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function H(M){return!(!M||M.role!==o.i44.Curator)}function B(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function L(M){var F,te;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===(F=M.mostRecentConflictOfInterestStatement)||void 0===F?void 0:F.coiStatus)!=o.Mgx.Conflict&&(null===(te=M.mostRecentConflictOfInterestStatement)||void 0===te?void 0:te.coiStatus)!=o.Mgx.Valid)}function V(M){if(M.mostRecentOrganizationId)return M.organizations.find(F=>F.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=T,this.http=y,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,f.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:B(M),canModerate:L(M),isAdmin:j(M),isEditor:O(M),isCurator:H(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:V(M),invalidCoi:O(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,I.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,f.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,f.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,f.U)(M=>j(M))),this.isEditor$=this.viewer$.pipe((0,f.U)(M=>O(M))),this.isCurator$=this.viewer$.pipe((0,f.U)(M=>H(M))),this.canCurate$=this.viewer$.pipe((0,f.U)(M=>B(M))),this.canModerate$=this.viewer$.pipe((0,f.U)(M=>L(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};h.\u0275fac=function(T){return new(T||h)(G.LFG(o.Tt7),G.LFG(l.eN))},h.\u0275prov=G.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h=(0,e.gn)([(0,n.c)()],h)},6654:(ue,w,i)=>{i.d(w,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(f){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(f){return new(f||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(f,I){},encapsulation:2}),n})()},915:(ue,w,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(w,{E:()=>e})},6530:(ue,w,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";default:return o}}i.d(w,{c:()=>e})},9771:(ue,w,i)=>{i.d(w,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"]]);function o(n){let s="#AAAAAA";if(n){const f=e.get(n);f&&(s=f)}return s}},6123:(ue,w,i)=>{i.d(w,{U:()=>f});var e=i(8929),o=i(591),n=i(7625),s=i(537);class f{constructor(a){this.networkErrorService=a}mutate(a,G,l,h){let _=new e.xQ,T={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{_.next(),_.complete()}};return T.isSubmitting$.next(!0),a.mutate(G,l).pipe((0,n.R)(_),(0,s.x)(()=>{T.isSubmitting$.next(!1)})).subscribe({next:y=>{y.data&&h&&h(y.data)},error:y=>{y.graphQLErrors.length>0?T.submitError$.next(y.graphQLErrors.map(j=>j.message)):y.networkError&&this.networkErrorService.networkError$.next(y.networkError),T.cleanup()},complete:()=>{T.submitError$.next([]),T.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),T.cleanup()}}),T}}},9397:(ue,w,i)=>{i.d(w,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(f){this.host=f,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(f){return new(f||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(ue,w,i)=>{i.d(w,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(ue,w,i)=>{i.d(w,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(I){return new(I||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(I,a){1&I&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ue,w,i)=>{i.d(w,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(I){return new(I||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(ue,w,i)=>{i.d(w,{V:()=>G});var e=i(5e3),o=i(9808),n=i(2359);function s(l,h){if(1&l&&e._UZ(0,"nz-alert",4),2&l){const _=e.oxw();e.Q6J("nzDescription",_.errors[0])}}function f(l,h){if(1&l&&e._UZ(0,"nz-alert",5),2&l){e.oxw();const _=e.MAs(3);e.Q6J("nzDescription",_)}}function I(l,h){if(1&l&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&l){const _=h.$implicit;e.xp6(1),e.Oqu(_)}}function a(l,h){if(1&l&&(e.TgZ(0,"ul",6),e.YNc(1,I,2,1,"li",7),e.qZA()),2&l){const _=e.oxw();e.xp6(1),e.Q6J("ngForOf",_.errors)}}let G=(()=>{class l{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return l.\u0275fac=function(_){return new(_||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(_,T){1&_&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,f,1,1,"nz-alert",1),e.YNc(2,a,2,1,"ng-template",2,3,e.W1O)),2&_&&(e.Q6J("ngIf",1===T.errors.length),e.xp6(1),e.Q6J("ngIf",T.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),l})()},7008:(ue,w,i)=>{i.d(w,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class f{}return f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),f})()},6789:(ue,w,i)=>{i.d(w,{_:()=>T});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),f=i(6949),I=i(9552),a=i(8776),G=i(5017),l=i(404),h=i(5e3);let _=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=h.oAB({type:y}),y.\u0275inj=h.cJS({imports:[[e.ez,f.WG,a.X0,I.j,s.cD,G.PV,l.cg,n.s]]}),y})(),T=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=h.oAB({type:y}),y.\u0275inj=h.cJS({imports:[[e.ez,f.WG,a.X0,o.vh,I.j,s.cD,G.PV,l.cg,_,n.s]]}),y})()},1825:(ue,w,i)=>{i.d(w,{A:()=>G});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),f=i(8144),I=i(6949),a=i(5e3);let G=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[[e.ez,I.WG,o.sL,n.Rt,s.b1,f.zf]]}),l})()},1793:(ue,w,i)=>{i.d(w,{m:()=>a});var e=i(5e3),o=i(8929),n=i(5254),s=i(2198),f=i(4850),I=i(7625);let a=(()=>{class G{constructor(h){this.el=h,this.domChange=new e.vpe,this.destroy$=new o.xQ,this.changes=new MutationObserver(_=>{this.mutation$=(0,n.D)(_),this.disabledChange$=this.mutation$.pipe((0,s.h)(T=>"disabled"===T.attributeName),(0,f.U)(T=>({type:"disabled",change:T.target.disabled}))),this.disabledChange$.pipe((0,I.R)(this.destroy$)).subscribe(T=>{this.domChange.emit(T)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.changes.disconnect(),this.destroy$.next(),this.destroy$.unsubscribe()}}return G.\u0275fac=function(h){return new(h||G)(e.Y36(e.SBq))},G.\u0275dir=e.lG2({type:G,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),G})()},7905:(ue,w,i)=>{i.d(w,{nT:()=>I,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class I{constructor(G){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(l=>l):(0,n.o6)(o.kqt).map(l=>l),this.getSignificanceOptions=l=>{const h=this.validStates.get(l);return(null==h?void 0:h.clinicalSignificance)||[]},this.isValidSignificanceOption=(l,h)=>{const _=this.validStates.get(l);return!_||_.clinicalSignificance.includes(h)},this.getDirectionOptions=l=>{const h=this.validStates.get(l);return(null==h?void 0:h.entityDirection)||[]},this.isValidDirectionOption=(l,h)=>{const _=this.validStates.get(l);return!_||_.entityDirection.includes(h)},this.requiresDrug=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresDrug},this.requiresDisease=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresDisease},this.requiresAcmgCodes=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresAcmgCodes},this.requiresAmpLevel=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresAmpLevel},this.requiresClingenCodes=l=>{const h=this.validStates.get(l);return void 0===h||h.requiresClingenCodes},this.allowsFdaApproval=l=>{const h=this.validStates.get(l);return void 0===h||h.allowsFdaApproval},this.getOptionsFromEnums=l=>0===l.length?[]:l.map(h=>({value:h,label:(0,e.E)(h)})),this.entityName=G,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(ue,w,i)=>{i.d(w,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,clinicalSignificance:[e._Aq.Sensitivityresponse,e._Aq.Resistance,e._Aq.AdverseResponse,e._Aq.ReducedSensitivity,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,clinicalSignificance:[e._Aq.Positive,e._Aq.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,clinicalSignificance:[e._Aq.BetterOutcome,e._Aq.PoorOutcome,e._Aq.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,clinicalSignificance:[e._Aq.Oncogenicity,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,clinicalSignificance:[e._Aq.Predisposition,e._Aq.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,clinicalSignificance:[e._Aq.GainOfFunction,e._Aq.LossOfFunction,e._Aq.UnalteredFunction,e._Aq.Neomorphic,e._Aq.DominantNegative,e._Aq.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ue,w,i)=>{i.d(w,{E:()=>j});var e=i(9808),o=i(3075),n=i(325),s=i(8776),f=i(304),I=i(6042),a=i(5e3),G=i(2643),l=i(2683);function h(O,H){if(1&O){const B=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(B),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function _(O,H){if(1&O&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&O){const B=a.oxw();a.Q6J("routerLink",B.redirectPath)}}const y={name:"cancel-button",component:(()=>{class O extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var B,L,V,M;(null===(B=this.field.templateOptions)||void 0===B?void 0:B.onClick)?this.callOnClick=null===(L=this.field.templateOptions)||void 0===L?void 0:L.onClick:(null===(V=this.field.templateOptions)||void 0===V?void 0:V.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return O.\u0275fac=function(){let H;return function(L){return(H||(H=a.n5z(O)))(L||O)}}(),O.\u0275cmp=a.Xpm({type:O,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(B,L){if(1&B&&(a.YNc(0,h,2,0,"button",0),a.YNc(1,_,2,1,"ng-template",null,1,a.W1O)),2&B){const V=a.MAs(2);a.Q6J("ngIf",L.callOnClick)("ngIfElse",V)}},directives:[e.O5,I.ix,G.dQ,l.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),O})()};let j=(()=>{class O{}return O.\u0275fac=function(B){return new(B||O)},O.\u0275mod=a.oAB({type:O}),O.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,I.sL,n.Bz,f.F,s.X0.forChild({types:[y]})]]}),O})()},4623:(ue,w,i)=>{i.d(w,{K:()=>h});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),f=i(3075);const a={name:"comment-textarea",component:(()=>{class _ extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(y,j)=>{var O;return`Comments must be at least ${null===(O=j.templateOptions)||void 0===O?void 0:O.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return _.\u0275fac=function(){let T;return function(j){return(T||(T=n.n5z(_)))(j||_)}}(),_.\u0275cmp=n.Xpm({type:_,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(y,j){1&y&&n._UZ(0,"textarea",0),2&y&&n.Q6J("formControl",j.formControl)("formlyAttributes",j.field)},directives:[s.Zp,f.Fj,f.JJ,f.oH,o.VQ],styles:[""],changeDetection:0}),_})(),wrappers:["form-field"]};var G=i(4546),l=i(9139);let h=(()=>{class _{}return _.\u0275fac=function(y){return new(y||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[e.ez,f.UX,o.X0.forChild({types:[a]}),l.u,G.U5,s.o7]]}),_})()},1605:(ue,w,i)=>{i.d(w,{e:()=>_e});var e=i(9808),o=i(3075),n=i(8776),s=i(3793),f=i(304),I=i(8054),a=i(5e3),G=i(1894),l=i(4546);let h=(()=>{class C{constructor(){console.log("FormCardDirective constructed.")}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275dir=a.lG2({type:C,selectors:[["",8,"cvc-form-card-control"]]}),C})();var _=i(7484),T=i(404);function y(C,ee){1&C&&a._UZ(0,"i",7)}function j(C,ee){if(1&C&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,y,1,0,"i",6),a.qZA()),2&C){const D=a.oxw();a.Q6J("nzRequired",D.to.required&&!0!==D.to.hideRequiredMarker)("nzFor",D.id),a.xp6(1),a.hij(" ",D.to.label," "),a.xp6(1),a.Q6J("ngIf",D.to.helpText)}}function O(C,ee){if(1&C&&a._UZ(0,"formly-validation-message",9),2&C){const D=a.oxw(2);a.Q6J("field",D.field)}}function H(C,ee){if(1&C&&a.YNc(0,O,1,1,"formly-validation-message",8),2&C){const D=a.oxw();a.Q6J("ngIf",D.showError)}}let B=(()=>{class C extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275cmp=a.Xpm({type:C,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(D,de){if(1&D&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,j,3,4,"ng-template",null,3,a.W1O),a.YNc(7,H,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&D){const Me=a.MAs(6),Se=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",de.errorState)("nzErrorTip",Se),a.xp6(1),a.Q6J("nzTitle",Me)("nzExtra",Se)}},directives:[G.SK,l.Nx,G.t3,l.Fd,h,_.bd,l.iK,e.O5,T.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),C})();var L=i(5017),V=i(1017);const M={wrappers:[{name:"form-card",component:B}]};let F=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.UX,l.U5,_.vh,L.PV,T.cg,n.X0.forChild(M),V.s]]}),C})();var te=i(655),b=i(373),x=i(2198),c=i(4850),$=i(3240),S=i(4987),W=i(7630),R=i(9397),g=i(6949),Q=i(8144),U=i(3618),N=i(3193),ne=i(8926);function oe(C,ee){if(1&C&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&C){const D=a.oxw().$implicit,de=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.label,de.to.searchString),a.oJD)}}function ge(C,ee){if(1&C&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&C){const D=a.oxw(2).$implicit,de=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.gene.geneAliases.join(", "),de.to.searchString),a.oJD)}}function ze(C,ee){1&C&&(a.ynx(0),a.YNc(1,ge,2,4,"span",11),a.BQk())}function Te(C,ee){if(1&C&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,oe,2,4,"span",8),a.YNc(3,ze,2,0,"ng-container",9),a.qZA()()),2&C){const D=ee.$implicit;a.Q6J("nzLabel",D.tooltip)("nzValue",D.gene),a.xp6(3),a.Q6J("ngIf",D.gene.geneAliases.length>0)}}function De(C,ee){if(1&C&&(a.ynx(0),a.YNc(1,Te,4,3,"nz-option",6),a.BQk()),2&C){const D=ee.ngrxLet;a.xp6(1),a.Q6J("ngForOf",D)}}function se(C,ee){1&C&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function he(C,ee){if(1&C){const D=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Me){return a.CHM(D),a.oxw().to.onSearch(Me)}),a.YNc(3,De,2,1,"ng-container",4),a.qZA(),a.YNc(4,se,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&C){const D=a.MAs(5),de=a.oxw();a.xp6(1),a.Q6J("formControl",de.formControl)("formlyAttributes",de.field)("nzPlaceHolder",de.to.placeholder?de.to.placeholder:null)("nzNotFoundContent",D)("nzShowArrow",de.to.showArrow)("nzFilterOption",de.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",de.genes$)}}function E(C,ee){if(1&C&&a._UZ(0,"cvc-gene-tag",13),2&C){const D=a.oxw();a.Q6J("gene",D.formControl.value)}}let ie=class extends n.fS{constructor(ee){super(),this.geneTypeaheadQuery=ee,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,b.j)("data","geneTypeahead"),(0,x.h)($.ep),(0,c.U)(ee=>ee.map(D=>{let de=D.geneAliases.length>0?`Aliases: ${D.geneAliases.join(", ")}`:"";return{value:D.id,tooltip:`${D.name} (${D.entrezId}) ${de}`,label:`${D.name} (${D.entrezId})`,gene:D}})))}ngAfterViewInit(){this.to.onSearch=ee=>{ee.length<this.to.minLengthSearch||(this.to.searchString=ee,this.queryRef.refetch({entrezSymbol:ee}))}}};ie.\u0275fac=function(ee){return new(ee||ie)(a.Y36(W.Q4m))},ie.\u0275cmp=a.Xpm({type:ie,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(ee,D){if(1&ee&&(a.YNc(0,he,6,7,"ng-container",0),a.YNc(1,E,1,1,"ng-template",null,1,a.W1O)),2&ee){const de=a.MAs(2);a.Q6J("ngIf",!(null!=D.formControl.value&&D.formControl.value.id))("ngIfElse",de)}},directives:[e.O5,I.Vq,R.l,o.JJ,o.oH,n.VQ,g.eJ,e.sg,I.Ip,Q.NU,Q.$1,U.ZU,N.H],pipes:[ne.A],styles:[""]}),ie=(0,te.gn)([(0,S.c)()],ie);const Z={name:"cvc-gene-input",component:ie};var Y=i(3309),K=i(6905),q=i(8616);let ve=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.UX,g.WG,n.X0.forChild({types:[Z]}),I.LV,Q.zf,U.ZJ,Y.U,K.s,q.Y]]}),C})();var re=i(7055);const ae={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let _e=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,I.LV,f.F,s.F,n.X0.forChild({types:[ae]}),ve,re.N,F]]}),C})()},7055:(ue,w,i)=>{i.d(w,{N:()=>x});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),f=i(1047),I=i(5017),a=i(5e3),G=i(1894),l=i(8481),h=i(2683),_=i(6042),T=i(2643);function y(c,$){if(1&c){const S=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function(R){return a.CHM(S),a.oxw().addField(R)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&c){const S=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",S.errorState),a.xp6(3),a.hij(" ",S.to.addText," ")}}function j(c,$){if(1&c){const S=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function(R){return a.CHM(S),a.oxw(4).addField(R)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&c){const S=a.oxw(4);a.xp6(2),a.hij(" ",S.to.addText," ")}}function O(c,$){if(1&c&&(a.TgZ(0,"div",11),a.YNc(1,j,3,1,"nz-tag",12),a.qZA()),2&c){const S=a.oxw(2).$implicit,W=a.oxw();a.xp6(1),a.Q6J("ngIf",0==W.to.maxCount||W.to.maxCount>S.model.length)}}function H(c,$){if(1&c){const S=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(S);const R=a.oxw().index;return a.oxw().remove(R)}),a.qZA()(),a.YNc(3,O,2,1,"div",10),a.BQk()}if(2&c){const S=a.oxw().last;a.xp6(3),a.Q6J("ngIf",S)}}function B(c,$){if(1&c){const S=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(S);const R=a.oxw().index;return a.oxw().remove(R)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function L(c,$){if(1&c&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,H,4,1,"ng-container",1),a.YNc(5,B,4,0,"ng-container",1),a.qZA()()),2&c){const S=$.$implicit,W=$.index;a.xp6(2),a.Q6J("ngClass",S.model[W]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",S),a.xp6(1),a.Q6J("ngIf",S.model[W]),a.xp6(1),a.Q6J("ngIf",!S.model[W])}}const V=function(c){return{hidden:c}},F={name:"multi-field",component:(()=>{class c extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(S){S&&S.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return c.\u0275fac=function(S){return new(S||c)},c.\u0275cmp=a.Xpm({type:c,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(S,W){1&S&&(a.TgZ(0,"div",0),a.YNc(1,y,5,2,"nz-form-item",1),a.YNc(2,L,6,4,"nz-form-item",2),a.qZA()),2&S&&(a.Q6J("ngClass",a.VKq(3,V,!0===W.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==W.field.fieldGroup?null:W.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",W.field.fieldGroup))},directives:[e.mk,e.O5,G.SK,s.Nx,G.t3,s.Fd,l.j,I.Ls,h.w,e.sg,n.cw,_.ix,T.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),c})()};var te=i(7102),b=i(1017);let x=(()=>{class c{}return c.\u0275fac=function(S){return new(S||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[F]}),o.UX,te.a,s.U5,f.o7,I.PV,_.sL,b.s,l.X]]}),c})()},7462:(ue,w,i)=>{i.d(w,{o:()=>G});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),f=i(3075);const a={name:"cvc-textarea",component:(()=>{class l extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return l.\u0275fac=function(){let h;return function(T){return(h||(h=n.n5z(l)))(T||l)}}(),l.\u0275cmp=n.Xpm({type:l,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(_,T){1&_&&n._UZ(0,"textarea",0),2&_&&n.Q6J("formControl",T.formControl)("formlyAttributes",T.field)("nzAutosize",T.to.autosize)("placeholder",T.to.placeholder)},directives:[s.Zp,f.Fj,s.rh,f.JJ,f.oH,o.VQ],styles:[""],changeDetection:0}),l})(),wrappers:["form-field"]};let G=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[e.ez,f.u5,f.UX,o.X0.forChild({types:[a]}),s.o7]]}),l})()},5926:(ue,w,i)=>{i.d(w,{J:()=>T});var e=i(9808),o=i(3075),n=i(8776),s=i(3793),f=i(304),I=i(8054),a=i(4181),G=i(7055);const h={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(y,j,O)=>{var H,B;const L=null===(B=null===(H=null==O?void 0:O.parent)||void 0===H?void 0:H.templateOptions)||void 0===B?void 0:B.allowCreate;return void 0===L||L}}},hideExpression:(y,j,O)=>{const H=(null==O?void 0:O.form)?O.form.get("gene"):null;return!H||!H.value||!H.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};var _=i(5e3);let T=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=_.oAB({type:y}),y.\u0275inj=_.cJS({imports:[[e.ez,o.u5,o.UX,I.LV,f.F,s.F,n.X0.forChild({types:[h]}),a.O,G.N]]}),y})()},4181:(ue,w,i)=>{i.d(w,{O:()=>ve});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),f=i(4987),I=i(8776),a=i(591),G=i(3240),l=i(1307),h=i(373),_=i(2198),T=i(4850),y=i(7630),j=i(9169),O=i(8054),H=i(9397),B=i(3075),L=i(8144),V=i(3618),M=i(8664),F=i(685),te=i(822),b=i(6042),x=i(2643),c=i(2683),$=i(5017),S=i(6949),W=i(8926);function R(re,me){if(1&re&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&re){const ae=n.oxw().$implicit,_e=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,ae.label,_e.to.searchString),n.oJD)}}function g(re,me){1&re&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function Q(re,me){if(1&re&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,g,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&re){const ae=n.oxw().$implicit,_e=n.oxw(2);n.xp6(1),n.hij(" ID: ",ae.variant.id," "),n.xp6(1),n.Q6J("ngIf",ae.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,ae.variant.variantAliases.join(", "),_e.to.searchString),n.oJD)}}function U(re,me){1&re&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,R,2,4,"span",7),n.YNc(3,Q,5,6,"span",8),n.qZA()()),2&re&&n.Q6J("nzValue",me.$implicit.variant)}function N(re,me){if(1&re){const ae=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(C){return n.CHM(ae),n.oxw().to.onSearch(C)}),n.YNc(2,U,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&re){const ae=n.oxw(),_e=n.MAs(6),C=n.MAs(4);n.xp6(1),n.Q6J("formControl",ae.formControl)("formlyAttributes",ae.field)("nzPlaceHolder",ae.to.placeholder?ae.to.placeholder:null)("nzDropdownRender",ae.to.allowCreate?_e:null)("nzShowArrow",ae.to.showArrow)("nzNotFoundContent",C),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,ae.variants$))}}function ne(re,me){if(1&re&&n._UZ(0,"cvc-variant-tag",12),2&re){const ae=n.oxw();n.Q6J("variant",ae.formControl.value)}}function oe(re,me){if(1&re&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&re){const ae=n.oxw(2);n.xp6(2),n.Oqu(ae.to.searchString)}}function ge(re,me){if(1&re&&(n._UZ(0,"nz-empty",13),n.YNc(1,oe,4,1,"ng-template",null,14,n.W1O)),2&re){const ae=n.MAs(2);n.Q6J("nzNotFoundContent",ae)}}function ze(re,me){if(1&re&&n._UZ(0,"cvc-form-errors-alert",18),2&re){const ae=n.oxw(4);n.Q6J("errors",ae.errorMessages)}}function Te(re,me){if(1&re){const ae=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(ae);const C=n.oxw(4);return C.addVariant(C.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&re){const ae=n.oxw(4);n.Q6J("nzLoading",ae.loading),n.xp6(4),n.Oqu(ae.to.searchString)}}function De(re,me){if(1&re&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,ze,1,1,"cvc-form-errors-alert",16),n.YNc(3,Te,6,2,"button",17),n.qZA(),n.BQk()),2&re){const ae=n.oxw(3);n.xp6(2),n.Q6J("ngIf",ae.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==ae.errorMessages.length)}}function se(re,me){if(1&re&&(n.ynx(0),n.YNc(1,De,4,2,"ng-container",11),n.BQk()),2&re){const ae=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==ae.to.searchString)}}function he(re,me){if(1&re&&(n.YNc(0,se,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&re){const ae=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,ae.displayAdd$))}}let E=class extends I.fS{constructor(me,ae,_e){super(),this.variantTypeaheadQuery=me,this.networkErrorService=ae,this.addVariantGQL=_e,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new a.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(C,ee,D)=>{var de,Me;let Se=null===(Me=null===(de=null==D?void 0:D.parent)||void 0===de?void 0:de.parent)||void 0===Me?void 0:Me.model;if(Se&&Se.gene&&Se.gene[0])return Se.gene[0].id}}}}ngOnInit(){var me,ae;this.callbackSub=null===(ae=null===(me=this.field)||void 0===me?void 0:me.formControl)||void 0===ae?void 0:ae.valueChanges.subscribe(_e=>this.onVariantSelected.emit(_e.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,l.T)(1),(0,h.j)("data","variants","nodes"),(0,_.h)(G.ep),(0,T.U)(_e=>_e.map(ee=>({value:ee.id,label:ee.name,variant:ee}))))}ngAfterViewInit(){this.to.onSearch=me=>{me.length<this.to.minLengthSearch||(this.to.searchString=me,this.errorMessages=[],this.queryRef.refetch({name:me,geneId:this.to.geneId}).then(ae=>{this.displayAdd$.next(0==ae.data.variants.nodes.filter(_e=>_e.name.toUpperCase()==me.toUpperCase()).length)}))}}addVariant(me){if(me&&""!=me&&this.to.geneId){let ae=this.addVariantMutator.mutate(this.addVariantGQL,{name:me,geneId:this.to.geneId},{},_e=>{var C;null===(C=this.field.formControl)||void 0===C||C.setValue({id:_e.addVariant.variant.id,name:_e.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0});ae.submitSuccess$.pipe((0,f.t)(this)).subscribe(_e=>{_e&&(this.success=!0)}),ae.submitError$.pipe((0,f.t)(this)).subscribe(_e=>{_e&&(this.errorMessages=_e,this.success=!1)}),ae.isSubmitting$.pipe((0,f.t)(this)).subscribe(_e=>{this.loading=_e})}}ngOnDestroy(){var me;null===(me=this.callbackSub)||void 0===me||me.unsubscribe()}};E.\u0275fac=function(me){return new(me||E)(n.Y36(y._eC),n.Y36(j.Y),n.Y36(y.LUc))},E.\u0275cmp=n.Xpm({type:E,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(me,ae){if(1&me&&(n.YNc(0,N,4,9,"ng-container",0),n.YNc(1,ne,1,1,"ng-template",null,1,n.W1O),n.YNc(3,ge,3,1,"ng-template",null,2,n.W1O),n.YNc(5,he,2,3,"ng-template",null,3,n.W1O)),2&me){const _e=n.MAs(2);n.Q6J("ngIf",!(null!=ae.formControl.value&&ae.formControl.value.id))("ngIfElse",_e)}},directives:[e.O5,O.Vq,H.l,B.JJ,B.oH,I.VQ,e.sg,O.Ip,L.NU,L.$1,V.ZU,M.I,F.p9,te.V,b.ix,x.dQ,c.w,$.Ls],pipes:[S.fM,W.A],styles:[""],changeDetection:0}),E=(0,o.gn)([(0,f.c)()],E);const ie={name:"variant-input",component:E};var Z=i(4867),Y=i(7008),K=i(6905),q=i(8616);let ve=(()=>{class re{}return re.\u0275fac=function(ae){return new(ae||re)},re.\u0275mod=n.oAB({type:re}),re.\u0275inj=n.cJS({imports:[[e.ez,B.UX,S.WG,I.X0.forChild({types:[ie]}),O.LV,b.sL,$.PV,L.zf,V.ZJ,F.Xo,Z.Q,Y.B,K.s,q.Y]]}),re})()},7102:(ue,w,i)=>{i.d(w,{a:()=>h});var e=i(9808),o=i(8776),n=i(3075),s=i(4546),f=i(5e3),I=i(1894);function a(_,T){if(1&_&&f._UZ(0,"formly-validation-message",3),2&_){const y=f.oxw();f.Q6J("field",y.field)}}const l={name:"cvc-field-errors",component:(()=>{class _ extends o.n2{get errorState(){return this.showError?"error":""}}return _.\u0275fac=function(){let T;return function(j){return(T||(T=f.n5z(_)))(j||_)}}(),_.\u0275cmp=f.Xpm({type:_,selectors:[["cvc-field-errors-wrapper"]],features:[f.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(y,j){if(1&y&&(f.TgZ(0,"nz-form-control",0)(1,"p"),f._uU(2),f.qZA(),f.GkF(3,null,1),f.YNc(5,a,1,1,"ng-template",null,2,f.W1O),f.qZA()),2&y){const O=f.MAs(6);f.Q6J("nzValidateStatus",j.errorState)("nzErrorTip",O),f.xp6(2),f.hij("errorState: ",j.errorState,"")}},directives:[I.t3,s.Fd,o.u_],encapsulation:2,changeDetection:0}),_})()};let h=(()=>{class _{}return _.\u0275fac=function(y){return new(y||_)},_.\u0275mod=f.oAB({type:_}),_.\u0275inj=f.cJS({imports:[[e.ez,n.UX,s.U5,o.X0.forChild({wrappers:[l]})]]}),_})()},5472:(ue,w,i)=>{i.d(w,{r:()=>T});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),f=i(5482),I=i(1894),a=i(1017),G=i(6789),l=i(5e3);const _={wrappers:[{name:"form-container",component:(()=>{class y extends n.n2{}return y.\u0275fac=function(){let j;return function(H){return(j||(j=l.n5z(y)))(H||y)}}(),y.\u0275cmp=l.Xpm({type:y,selectors:[["cvc-form-container-wrapper"]],features:[l.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(O,H){1&O&&(l.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),l.GkF(3,null,2),l.qZA()()()),2&O&&(l.xp6(2),l.Q6J("nzTitle",H.to.label))},directives:[I.SK,I.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),y})()}]};let T=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=l.oAB({type:y}),y.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild(_),I.Jb,s.vh,f.cD,G._,a.s]]}),y})()},7695:(ue,w,i)=>{i.d(w,{C:()=>x});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),f=i(5482),I=i(1894),a=i(1017),G=i(6789),l=i(5e3),h=i(9552),_=i(5017),T=i(404);function y(c,$){1&c&&l._UZ(0,"div",9),2&c&&l.Q6J("innerHtml",$.ngIf,l.oJD)}function j(c,$){1&c&&(l.TgZ(0,"div",10),l._uU(1,"Help not available for this field."),l.qZA())}function O(c,$){if(1&c&&(l.TgZ(0,"nz-collapse-panel",6),l.YNc(1,y,1,1,"div",7),l.YNc(2,j,2,0,"ng-template",null,8,l.W1O),l.qZA()),2&c){const S=$.ngIf,W=l.MAs(3),R=l.oxw().$implicit,g=l.MAs(3);l.Q6J("nzHeader",S)("nzActive",R.templateOptions.hasFocus)("nzExtra",g),l.xp6(1),l.Q6J("ngIf",null==R.templateOptions?null:R.templateOptions.helpText)("ngIfElse",W)}}function H(c,$){if(1&c&&l._UZ(0,"formly-validation-message",14),2&c){const S=l.oxw(4).$implicit;l.Q6J("field",S)}}function B(c,$){if(1&c&&(l.ynx(0),l._UZ(1,"i",12),l.YNc(2,H,1,1,"ng-template",null,13,l.W1O),l.BQk()),2&c){const S=l.MAs(3);l.xp6(1),l.Q6J("nzTooltipTitle",S)}}function L(c,$){if(1&c&&(l.ynx(0),l.YNc(1,B,4,1,"ng-container",11),l.BQk()),2&c){const S=$.ngIf;l.xp6(1),l.Q6J("ngIf","INVALID"===S)}}function V(c,$){if(1&c&&(l.YNc(0,L,2,1,"ng-container",11),l.ALo(1,"ngrxPush")),2&c){const S=l.oxw().$implicit;l.Q6J("ngIf",l.lcZ(1,1,S.formControl.statusChanges))}}function M(c,$){if(1&c&&(l.ynx(0),l.YNc(1,O,4,5,"nz-collapse-panel",4),l.YNc(2,V,2,3,"ng-template",null,5,l.W1O),l.BQk()),2&c){const S=$.$implicit;l.xp6(1),l.Q6J("ngIf",null==S.templateOptions?null:S.templateOptions.label)}}let F=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(S){return new(S||c)},c.\u0275cmp=l.Xpm({type:c,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(S,W){1&S&&(l.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),l.YNc(3,M,4,1,"ng-container",3),l.qZA()()()),2&S&&(l.Q6J("nzOffsetTop",0)("nzTarget",W.affixTo),l.xp6(2),l.Q6J("nzBordered",!1),l.xp6(1),l.Q6J("ngForOf",W.fieldGroup))},directives:[h.$,s.bd,f.yH,e.sg,e.O5,f.Zv,_.Ls,T.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),c})();const b={name:"form-info",component:(()=>{class c extends n.n2{}return c.\u0275fac=function(){let $;return function(W){return($||($=l.n5z(c)))(W||c)}}(),c.\u0275cmp=l.Xpm({type:c,selectors:[["cvc-form-info-wrapper"]],features:[l.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(S,W){if(1&S&&(l.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),l.GkF(3,null,3),l.qZA()(),l.TgZ(5,"nz-col",1)(6,"div",null,4),l._UZ(8,"cvc-form-info-card",5),l.qZA()()()),2&S){const R=l.MAs(7);l.xp6(1),l.Q6J("nzSpan",16),l.xp6(1),l.Q6J("nzTitle",W.to.label),l.xp6(3),l.Q6J("nzSpan",8),l.xp6(3),l.Q6J("fieldGroup",W.field.fieldGroup)("affixTo",R)}},directives:[I.SK,I.t3,s.bd,F],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),c})()};let x=(()=>{class c{}return c.\u0275fac=function(S){return new(S||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[b]}),I.Jb,s.vh,f.cD,G._,a.s]]}),c})()},8785:(ue,w,i)=>{i.d(w,{t:()=>te});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),f=i(7630),I=i(9169),a=i(7484),G=i(9808),l=i(2359),h=i(1894),_=i(4546),T=i(822),y=i(7525),j=i(3868),O=i(3075),H=i(6042),B=i(2643),L=i(2683);function V(b,x){1&b&&e._UZ(0,"nz-alert",7)}function M(b,x){if(1&b&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&b){const c=e.oxw();e.xp6(1),e.Q6J("errors",c.errorMessages)}}function F(b,x){if(1&b){const c=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(S){return e.CHM(c),e.oxw().coiText=S}),e.qZA()()}if(2&b){const c=e.oxw();e.xp6(1),e.Q6J("ngModel",c.coiText)}}let te=(()=>{class b{constructor(c,$){this.updateCoiGql=c,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U($)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let $=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});$.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{S&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),$.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{S&&(this.errorMessages=S,this.success=!1)}),$.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(S=>{this.loading=S})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(c){return new(c||b)(e.Y36(f.IP1),e.Y36(I.Y))},b.\u0275cmp=e.Xpm({type:b,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(c,$){1&c&&(e.TgZ(0,"nz-card"),e.YNc(1,V,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(W){return $.coiStatus=W}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,F,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return $.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&c&&(e.xp6(1),e.Q6J("ngIf",$.success),e.xp6(1),e.Q6J("ngIf",$.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",$.loading),e.xp6(2),e.Q6J("ngModel",$.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===$.coiStatus),e.xp6(2),e.Q6J("disabled",$.loading||"coiPresent"===$.coiStatus&&(void 0===$.coiText||$.coiText.length<10)))},directives:[a.bd,G.O5,l.r,h.SK,_.Nx,T.V,y.W,j.Dg,O.JJ,O.On,j.Of,O.Fj,H.ix,B.dQ,L.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),b})()},330:(ue,w,i)=>{i.d(w,{e:()=>T});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),f=i(2359),I=i(4546),a=i(7008),G=i(3868),l=i(7525),h=i(6042),_=i(5e3);let T=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=_.oAB({type:y}),y.\u0275inj=_.cJS({imports:[[e.ez,o.u5,I.U5,o.UX,n.WG,s.vh,f.L,G.aF,h.sL,l.j,a.B]]}),y})()},3434:(ue,w,i)=>{i.d(w,{G:()=>te});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),f=i(6123),I=i(7625),a=i(7630),G=i(9169),l=i(325),h=i(7525),_=i(4546),T=i(9808),y=i(8776),j=i(1894),O=i(822),H=i(2359);function B(b,x){1&b&&e.GkF(0)}function L(b,x){if(1&b&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&b){const c=e.oxw(2);e.xp6(1),e.Q6J("errors",c.errorMessages)}}function V(b,x){if(1&b&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&b){const c=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",c.newId,"/summary")}}function M(b,x){if(1&b&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,V,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&b){const c=e.MAs(3),$=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",$.isNew?"Variant Created":"Variant Already Exists")("nzDescription",c)}}function F(b,x){if(1&b&&(e.YNc(0,L,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&b){const c=e.oxw();e.Q6J("ngIf",c.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",c.success)}}let te=(()=>{class b{constructor(c,$,S){this.submitVariantGQL=c,this.networkErrorService=$,this.route=S,this.onVariantSelected=new e.vpe,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new f.U($),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,canCreate:!1,maxCount:1}}]}]}submitVariant(c){let $=null==c?void 0:c.fields.gene[0].id,S=null==c?void 0:c.fields.variant[0].name;if($&&S){let R=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:$,name:S},{},g=>{this.newId=g.addVariant.variant.id,this.isNew=g.addVariant.new,this.onVariantSelected.emit({variantId:g.addVariant.variant.id,molecularProfile:g.addVariant.variant.singleVariantMolecularProfile})});R.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{g&&(this.success=!0)}),R.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{g&&(this.errorMessages=g,this.success=!1)}),R.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(g=>{this.loading=g})}}onFormModelChange(c){this.formModel=c,c.fields.variant&&c.fields.variant[0]&&this.onVariantSelected.emit({variantId:c.fields.variant[0].id,molecularProfile:c.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return b.\u0275fac=function(c){return new(c||b)(e.Y36(a.LUc),e.Y36(G.Y),e.Y36(l.gz))},b.\u0275cmp=e.Xpm({type:b,selectors:[["cvc-variant-submit-form"]],outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(c,$){if(1&c&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return $.submitVariant($.formModel)}),e.YNc(2,B,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(W){return $.onFormModelChange(W)}),e.qZA()()(),e.YNc(4,F,2,2,"ng-template",null,4,e.W1O)),2&c){const S=e.MAs(5);e.Q6J("nzSpinning",$.loading),e.xp6(1),e.Q6J("formGroup",$.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",S),e.xp6(1),e.Q6J("form",$.formGroup)("fields",$.formFields)("model",$.formModel)("options",$.formOptions)}},directives:[h.W,o._Y,o.JL,_.Lr,o.sg,T.tP,y.T7,T.O5,j.SK,_.Nx,O.V,H.r,l.yS],styles:[""]}),b})()},7058:(ue,w,i)=>{i.d(w,{e:()=>ne});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),f=i(7695),I=i(7055),a=i(7462),G=i(8776),l=i(1017),h=i(2359),_=i(6042),T=i(4546),y=i(1894),j=i(3075),O=i(325),H=i(1605),B=i(7525),L=i(5472),V=i(4889),M=i(7484),F=i(8144),te=i(3618),b=i(5e3),x=i(9180),c=i(2643),$=i(1793),S=i(2683);const R={name:"submit-button",component:(()=>{class oe extends G.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return oe.\u0275fac=function(ze){return new(ze||oe)},oe.\u0275cmp=b.Xpm({type:oe,selectors:[["cvc-submit-button-type"]],features:[b.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(ze,Te){1&ze&&(b.TgZ(0,"cvc-form-buttons")(1,"button",0),b._uU(2),b.qZA()()),2&ze&&(b.xp6(1),b.Q6J("disabled",!Te.form.valid),b.xp6(1),b.hij(" ",Te.to.submitLabel," "))},directives:[x.Z,_.ix,c.dQ,$.m,S.w],styles:[""],changeDetection:0}),oe})()};var g=i(1825);let Q=(()=>{class oe{}return oe.\u0275fac=function(ze){return new(ze||oe)},oe.\u0275mod=b.oAB({type:oe}),oe.\u0275inj=b.cJS({imports:[[e.ez,j.UX,G.X0.forChild({types:[R]}),_.sL,n.R,g.A]]}),oe})();var U=i(4181),N=i(5926);let ne=(()=>{class oe{}return oe.\u0275fac=function(ze){return new(ze||oe)},oe.\u0275mod=b.oAB({type:oe}),oe.\u0275inj=b.cJS({imports:[[e.ez,O.Bz,j.UX,l.s,T.U5,h.L,y.Jb,_.sL,B.j,M.vh,F.zf,te.ZJ,G.X0,s.B,n.R,f.C,I.N,a.o,o.K,H.e,L.r,V.E,Q,U.O,N.J,l.s]]}),oe})()},7630:(ue,w,i)=>{i.d(w,{$G1:()=>ni,A4J:()=>qn,A94:()=>Sr,AMF:()=>jr,AO2:()=>B,B0s:()=>ji,B97:()=>Bn,BQZ:()=>$,BTF:()=>mn,Bk6:()=>ls,BnY:()=>Gi,Bo4:()=>As,Cp0:()=>te,D9L:()=>er,Del:()=>ns,DkJ:()=>Pn,E8d:()=>h,EwB:()=>Hi,F3s:()=>he,FB1:()=>me,FId:()=>Zi,FJi:()=>ze,FKQ:()=>Ci,FNv:()=>Q,FOU:()=>Xi,Fvz:()=>W,GB2:()=>Rr,GSh:()=>Xo,GYx:()=>Ho,Gbq:()=>Zt,Hmr:()=>So,IP1:()=>dr,IRu:()=>ve,IZ6:()=>po,JDX:()=>ge,JQ3:()=>Si,KNk:()=>li,Kk:()=>en,Kmw:()=>Ro,L5n:()=>Kn,LLl:()=>wo,LUc:()=>Ri,LiH:()=>vs,Lr0:()=>es,MYm:()=>to,Mgx:()=>_,NQC:()=>oe,NbY:()=>Ni,OHm:()=>bn,OIL:()=>yn,OfU:()=>T,Onj:()=>Z,P_b:()=>Ht,Q4m:()=>vi,Q_P:()=>Qi,Qtd:()=>Ts,Qzn:()=>Yn,R8w:()=>j,RMv:()=>Ai,ROj:()=>zr,RTy:()=>b,Rdc:()=>No,SJD:()=>lt,SWk:()=>sr,SrV:()=>De,Sx0:()=>F,T1I:()=>ir,T97:()=>pi,TNk:()=>Zr,Tg0:()=>Hr,TiL:()=>co,Tq1:()=>rn,Tt7:()=>Fo,UIR:()=>jt,UWf:()=>ro,Ud2:()=>cn,VZq:()=>Vn,Vj7:()=>wi,VnG:()=>R,Vr2:()=>f,WFw:()=>Wi,WGV:()=>is,WOS:()=>Xr,WRV:()=>ao,Ws:()=>ei,X5f:()=>Ln,Xft:()=>Mr,YMi:()=>un,Ybm:()=>fn,ZYZ:()=>Eo,Zhw:()=>gi,Zo2:()=>zo,Zyn:()=>O,_Aq:()=>V,_Wm:()=>l,_eC:()=>Fi,_jb:()=>oo,aw3:()=>vr,bgg:()=>Go,c$m:()=>Qo,cCu:()=>Wr,cEv:()=>go,cMj:()=>Ar,d4o:()=>ae,dUU:()=>an,db2:()=>ss,dwB:()=>Gr,eY8:()=>hn,ejK:()=>Er,fow:()=>U,fpJ:()=>Mi,fwG:()=>Mo,g0X:()=>ds,ghc:()=>On,gtM:()=>Ei,h01:()=>y,huM:()=>_e,i44:()=>q,iGM:()=>Zo,iJT:()=>Es,iST:()=>Xt,iXf:()=>we,io:()=>$n,iwm:()=>n,jMx:()=>Cs,jw9:()=>E,k2T:()=>Ti,k7O:()=>nn,kQf:()=>kn,kQl:()=>ie,kq9:()=>H,kqt:()=>c,kv3:()=>si,l4w:()=>gr,lYz:()=>ne,lfy:()=>zi,m$d:()=>zs,m55:()=>x,mII:()=>Wo,mdl:()=>I,mpB:()=>K,nnL:()=>Tr,o71:()=>Y,oRL:()=>g,otH:()=>Jn,pHu:()=>Qr,pP7:()=>ee,pR8:()=>nr,q1D:()=>Ms,q8c:()=>Dn,q9q:()=>xn,qP7:()=>re,qf4:()=>Co,rJ8:()=>In,rZD:()=>Te,rzy:()=>_n,sBY:()=>wr,sLD:()=>ps,sfv:()=>S,tI1:()=>M,tJ6:()=>vo,td:()=>Wt,ti:()=>Un,tji:()=>Cr,tw_:()=>To,u4i:()=>a,uBv:()=>G,ubO:()=>Ss,vMt:()=>jo,vRc:()=>di,wJ2:()=>L,wRZ:()=>lr,wbP:()=>pr,wg3:()=>Fr,wpb:()=>C,xlL:()=>N,xsC:()=>ii,yic:()=>se,yqR:()=>gs,z8D:()=>Nr,zwS:()=>Ao});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),f=(()=>{return(t=f||(f={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",f;var t})(),I=(()=>{return(t=I||(I={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",I;var t})(),a=(()=>{return(t=a||(a={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Status="STATUS",t.Summary="SUMMARY",a;var t})(),G=(()=>{return(t=G||(G={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",G;var t})(),l=(()=>{return(t=l||(l={})).And="AND",t.Or="OR",l;var t})(),h=(()=>{return(t=h||(h={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",h;var t})(),_=(()=>{return(t=_||(_={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",_;var t})(),T=(()=>{return(t=T||(T={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",T;var t})(),y=(()=>{return(t=y||(y={})).Created="CREATED",t.LastModified="LAST_MODIFIED",y;var t})(),j=(()=>{return(t=j||(j={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",j;var t})(),O=(()=>{return(t=O||(O={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",O;var t})(),H=(()=>{return(t=H||(H={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",H;var t})(),B=(()=>{return(t=B||(B={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",B;var t})(),L=(()=>{return(t=L||(L={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",L;var t})(),V=(()=>{return(t=V||(V={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",V;var t})(),M=(()=>{return(t=M||(M={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",M;var t})(),F=(()=>{return(t=F||(F={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",F;var t})(),te=(()=>{return(t=te||(te={})).ClinicalSignificance="CLINICAL_SIGNIFICANCE",t.Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.DrugName="DRUG_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Status="STATUS",t.VariantOrigin="VARIANT_ORIGIN",te;var t})(),b=(()=>{return(t=b||(b={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",b;var t})(),x=(()=>{return(t=x||(x={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",x;var t})(),c=(()=>{return(t=c||(c={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",c;var t})(),$=(()=>{return(t=$||($={})).Open="OPEN",t.Resolved="RESOLVED",$;var t})(),S=(()=>{return(t=S||(S={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",S;var t})(),W=(()=>{return(t=W||(W={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.VariantCount="variantCount",W;var t})(),R=(()=>{return(t=R||(R={})).Eq="EQ",t.Ge="GE",t.Gt="GT",t.Le="LE",t.Lt="LT",t.Ne="NE",R;var t})(),g=(()=>{return(t=g||(g={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",g;var t})(),Q=(()=>{return(t=Q||(Q={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",Q;var t})(),U=(()=>{return(t=U||(U={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",U;var t})(),N=(()=>{return(t=N||(N={})).Id="ID",t.Name="NAME",N;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",ne;var t})(),oe=(()=>{return(t=oe||(oe={})).Read="READ",t.Unread="UNREAD",oe;var t})(),ge=(()=>{return(t=ge||(ge={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",ge;var t})(),ze=(()=>{return(t=ze||(ze={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",ze;var t})(),Te=(()=>{return(t=Te||(Te={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Te;var t})(),De=(()=>{return(t=De||(De={})).Asc="ASC",t.Desc="DESC",De;var t})(),se=(()=>{return(t=se||(se={})).Asco="ASCO",t.Pubmed="PUBMED",se;var t})(),he=(()=>{return(t=he||(he={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",he;var t})(),E=(()=>{return(t=E||(E={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.GeneName="GENE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",t.VariantName="VARIANT_NAME",E;var t})(),ie=(()=>{return(t=ie||(ie={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",ie;var t})(),Z=(()=>{return(t=Z||(Z={})).Contains="CONTAINS",t.DoesNotContain="DOES_NOT_CONTAIN",t.Eq="EQ",t.Ne="NE",t.StartsWith="STARTS_WITH",Z;var t})(),Y=(()=>{return(t=Y||(Y={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Y;var t})(),K=(()=>{return(t=K||(K={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",K;var t})(),q=(()=>{return(t=q||(q={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",q;var t})(),ve=(()=>{return(t=ve||(ve={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ve;var t})(),re=(()=>{return(t=re||(re={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",re;var t})(),me=(()=>{return(t=me||(me={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",me;var t})(),ae=(()=>{return(t=ae||(ae={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ae;var t})(),_e=(()=>{return(t=_e||(_e={})).CommonGermline="COMMON_GERMLINE",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",_e;var t})(),C=(()=>{return(t=C||(C={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",C;var t})(),ee=(()=>{return(t=ee||(ee={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.DrugName="drugName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.EvidenceScore="evidenceScore",t.VariantName="variantName",ee;var t})();const D=e.Ps`
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
    `,de=e.Ps`
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
    ${D}`,Me=e.Ps`
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
    ${D}`,Se=e.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,$e=e.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Re=e.Ps`
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
    `,be=e.Ps`
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
    `,Ge=e.Ps`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
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
    `,Qe=e.Ps`
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
    ${xe}`,Ne=e.Ps`
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
    ${D}`,Ze=e.Ps`
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
    ${D}`,Ye=e.Ps`
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
    `,We=e.Ps`
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
    ${Ye}`,Je=e.Ps`
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
    `,J=e.Ps`
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
    `,m=e.Ps`
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
    `,pe=e.Ps`
    fragment BrowseMolecularProfilesFields on BrowseMolecularProfile {
  id
  name
  evidenceItemCount
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
    `,z=e.Ps`
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
    `,A=e.Ps`
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
    `,Ie=e.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,Oe=e.Ps`
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
    `,dt=e.Ps`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
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
    `,we=e.Ps`
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
    ${D}`,Rt=e.Ps`
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
    ${D}`,Ct=e.Ps`
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
${D}`,Mt=e.Ps`
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
    `,p=e.Ps`
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
    `,P=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,ce=e.Ps`
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
    ${xe}`,ye=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Ae=e.Ps`
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
    `,Fe=e.Ps`
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
    ${Ut}`,Vt=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${de}`;let Zt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yt=e.Ps`
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
    ${Me}`;let Wt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jt=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Se}`;let jt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kt=e.Ps`
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
    ${$e}`;let Ht=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kt=e.Ps`
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
    ${Re}`;let Xt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qt=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Be}`;let en=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tn=e.Ps`
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
    ${be}`;let rn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=on}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sn=e.Ps`
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
    ${Ge}`;let cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ln}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const dn=e.Ps`
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
    ${Qe}`;let mn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ne}`;let fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vn=e.Ps`
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
    ${We}`;let _n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cn=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Je}`;let yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${J}`;let In=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mn=e.Ps`
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
    ${m}`;let Pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=En}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const An=e.Ps`
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
    ${pe}`;let xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=An}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nn=e.Ps`
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
    ${Pe}`;let $n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rn=e.Ps`
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
    ${Le}`;let Bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qn=e.Ps`
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
    ${Ee}`;let Yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wn=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Ue}`;let Jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jn=e.Ps`
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
    ${Ve}`;let Kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hn=e.Ps`
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
    ${z}`;let To=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Io=e.Ps`
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
    ${A}`;let So=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Do}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oo=e.Ps`
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
    ${Ie}`;let Ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Po}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xo=e.Ps`
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
    ${Oe}`;let No=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lo=e.Ps`
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
    ${Re}`;let Zo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yo=e.Ps`
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
    ${p}`;let ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ms=e.Ps`
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
    ${P}
${u}
${X}
${ce}`;let gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fs=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${ce}`;let vs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hs=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${ye}`;let zs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=hs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _s=e.Ps`
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
    ${Ae}`;let Ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ys}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    ${Fe}`;let Ms=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ds=e.Ps`
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
    ${wt}`;let As=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(ue,w,i)=>{i.r(w),i.d(w,{LayoutModule:()=>Pt});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),f=i(8929),I=i(7625),a=i(655),G=i(4090),l=i(1721),h=i(4219),_=i(925),T=i(5017),y=i(226),j=i(5113);const O=["*"],H=["nz-sider-trigger",""];function B(p,X){}function L(p,X){if(1&p&&(n.ynx(0),n.YNc(1,B,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),P=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||P)}}function V(p,X){}function M(p,X){if(1&p&&(n.ynx(0),n.YNc(1,V,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),P=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||P)}}function F(p,X){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function te(p,X){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function b(p,X){if(1&p&&(n.YNc(0,F,1,1,"i",4),n.YNc(1,te,1,1,"i",4)),2&p){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function x(p,X){1&p&&n._UZ(0,"i",6)}function c(p,X){if(1&p){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const ce=n.oxw();return ce.setCollapsed(!ce.nzCollapsed)}),n.qZA()}if(2&p){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let $=(()=>{class p{constructor(u,P){this.elementRef=u,this.renderer=P,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),W=(()=>{class p{constructor(u,P){this.elementRef=u,this.renderer=P,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),R=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(u){return new(u||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,P){2&u&&(n.Udp("width",P.isNormalTrigger?P.siderWidth:null),n.ekj("ant-layout-sider-trigger",P.isNormalTrigger)("ant-layout-sider-zero-width-trigger",P.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",P.isZeroTrigger&&P.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",P.isZeroTrigger&&!P.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:H,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,P){1&u&&(n.YNc(0,L,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,b,2,2,"ng-template",null,1,n.W1O),n.YNc(4,x,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",P.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",P.isNormalTrigger))},directives:[e.O5,e.tP,T.Ls],encapsulation:2,changeDetection:0}),p})(),g=(()=>{class p{constructor(u,P,ce){this.platform=u,this.cdr=P,this.breakpointService=ce,this.destroy$=new f.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,l.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(G.ow,!0).pipe((0,I.R)(this.destroy$)).subscribe(u=>{const P=this.nzBreakpoint;P&&(0,l.ov)().subscribe(()=>{this.matchBreakPoint=!u[P],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:P,nzCollapsedWidth:ce,nzWidth:ye}=u;(P||ce||ye)&&this.updateStyleMap(),P&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(_.t4),n.Y36(n.sBO),n.Y36(G.r3))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(u,P,ce){if(1&u&&n.Suo(ce,h.wO,5),2&u){let ye;n.iGM(ye=n.CRH())&&(P.nzMenuDirective=ye.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,P){2&u&&(n.Udp("flex",P.flexSetting)("max-width",P.widthSetting)("min-width",P.widthSetting)("width",P.widthSetting),n.ekj("ant-layout-sider-zero-width",P.nzCollapsed&&0===P.nzCollapsedWidth)("ant-layout-sider-light","light"===P.nzTheme)("ant-layout-sider-dark","dark"===P.nzTheme)("ant-layout-sider-collapsed",P.nzCollapsed)("ant-layout-sider-has-trigger",P.nzCollapsible&&null!==P.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:O,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,P){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,c,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",P.nzCollapsible&&null!==P.nzTrigger))},directives:[R,e.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,l.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsed",void 0),p})(),Q=(()=>{class p{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new f.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,I.R)(this.destroy$)).subscribe(P=>{this.dir=P})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(y.Is,8))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(u,P,ce){if(1&u&&n.Suo(ce,g,4),2&u){let ye;n.iGM(ye=n.CRH())&&(P.listOfNzSiderComponent=ye)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,P){2&u&&n.ekj("ant-layout-rtl","rtl"===P.dir)("ant-layout-has-sider",P.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:O,decls:1,vars:0,template:function(u,P){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),U=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[y.vT,e.ez,T.PV,j.xu,_.ud]]}),p})();var N=i(404),ne=i(1894),oe=i(7630),ge=i(8054),ze=i(353),Te=i(8514),De=i(8896),he=i(5254),E=i(3240),ie=i(1307),Z=i(3164),Y=i(7545),K=i(4850),q=i(2198),ve=i(5778),re=i(3075),me=i(3618),ae=i(6949);function _e(p,X){if(1&p&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&p){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function C(p,X){if(1&p&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,_e,3,1,"span",6),n.qZA()),2&p){const u=X.$implicit,P=n.oxw();n.Q6J("nzLabel",u.text)("nzValue",u.result),n.xp6(1),n.Q6J("nzType",P.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function ee(p,X){1&p&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let D=(()=>{class p{constructor(u,P){this.gql=u,this.router=P,this.onSearch$=new f.xQ,this.onSelect$=new f.xQ,this.response$=this.onSearch$.pipe((0,ie.T)(1),(0,Z.p)(300,ze.z,{leading:!1,trailing:!0}),(0,Y.w)(Ae=>function se(p,X=De.E,u=De.E){return(0,Te.P)(()=>p()?X:u)}(()=>void 0===this.queryRef,(0,Te.P)(()=>ce(Ae)),(0,Te.P)(()=>ye(Ae))))),this.isLoading$=this.response$.pipe((0,K.U)(Ae=>Ae.loading),(0,q.h)(E.ep),(0,ve.x)()),this.result$=this.response$.pipe((0,K.U)(Ae=>{var Fe;return null===(Fe=Ae.data)||void 0===Fe?void 0:Fe.search}),(0,q.h)(E.ep)),this.option$=this.result$.pipe((0,K.U)(Ae=>{const Fe=[];return Ae.forEach(nt=>{nt&&Fe.push({text:nt.name,value:nt.id.toString(),result:nt})}),Fe})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const ce=Ae=>(this.queryRef=this.gql.watch({query:Ae,highlightMatches:!0}),this.queryRef.valueChanges),ye=Ae=>(0,he.D)(this.queryRef.refetch({query:Ae}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case oe.rZD.EvidenceItem:return"civic:evidence";case oe.rZD.VariantGroup:return"civic:variantgroup";case oe.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let P;switch(u.resultType){case oe.rZD.VariantGroup:P="variant-groups";break;case oe.rZD.EvidenceItem:P="evidence";break;case oe.rZD.MolecularProfile:P="molecular-profiles";break;default:P=`${u.resultType.toLowerCase()}s`}return`/${P}/${u.id}/summary`}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(oe.ghc),n.Y36(o.F0))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(u,P){if(1&u&&n.Gf(ge.Vq,7),2&u){let ce;n.iGM(ce=n.CRH())&&(P.selectNode=ce.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,P){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(ye){return P.selectedOpt=ye})("ngModelChange",function(ye){return P.onSelect$.next(ye)})("nzOnSearch",function(ye){return P.onSearch$.next(ye)}),n.YNc(1,C,4,5,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,ee,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",P.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,P.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,P.isLoading$)))},directives:[ge.Vq,re.JJ,re.On,e.sg,ge.Ip,T.Ls,e.O5,me.ZU],pipes:[ae.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var de=i(1912),Me=i(1059),Se=i(2340),$e=i(8144),Re=i(6042),Be=i(2643),be=i(2683),Ge=i(3677),xe=i(4401),Qe=i(7881),Ne=i(3640),Ze=i(8785),Ye=i(3434);function We(p,X){if(1&p&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&p){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const Je=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function J(p,X){if(1&p&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&p){const u=n.oxw().ngrxLet,P=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,Je)),n.xp6(1),n.MGl("routerLink","/users/",P.id,"/notifications")}}const fe=function(p){return{"update-coi":p}};function v(p,X){if(1&p&&n._UZ(0,"cvc-user-avatar",36),2&p){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,fe,u.invalidCoi))}}function m(p,X){if(1&p&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&p){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function pe(p,X){1&p&&n._UZ(0,"i",27)}function Ce(p,X){if(1&p&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,v,1,5,"cvc-user-avatar",33),n.YNc(3,m,2,1,"div",34),n.YNc(4,pe,1,0,"i",35),n.qZA()()),2&p){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function Pe(p,X){1&p&&(n.TgZ(0,"nz-space",22),n.YNc(1,We,3,1,"button",23),n.YNc(2,J,3,5,"nz-badge",24),n.YNc(3,Ce,5,1,"button",25),n.qZA())}function Le(p,X){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function Ee(p,X){1&p&&n._UZ(0,"li",14)}function Ue(p,X){1&p&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Ve(p,X){1&p&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function je(p,X){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(p){return["/users",p]};function He(p,X){if(1&p){const u=n.EpF();n.ynx(0),n.YNc(1,Pe,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,Le,4,0,"li",9),n.YNc(6,Ee,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Ue,3,0,"li",12),n.YNc(10,Ve,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,je,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&p){const u=X.ngIf,P=n.oxw();n.xp6(1),n.Q6J("ngrxLet",P.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(p,X){1&p&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function et(p,X){if(1&p){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function ot(p,X){1&p&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(p,X){1&p&&n._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class p{constructor(u,P){this.queryService=u,this.unreadCountGql=P,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Se.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,K.U)(({data:ce})=>ce.notifications.unreadCount),(0,Me.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,K.U)(({data:ce})=>ce.notifications.unreadCount),(0,Me.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a),n.Y36(oe.Kmw))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,P){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return P.coiUpdateModalVisible=ye})("nzOnCancel",function(){return P.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return P.addVariantModalVisible=ye})("nzOnCancel",function(){return P.addVariantModalVisible=!1}),n.YNc(8,ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const ce=n.MAs(4),ye=n.MAs(6),Ae=n.MAs(9),Fe=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,P.viewer$)),n.xp6(2),n.Q6J("nzVisible",P.coiUpdateModalVisible)("nzContent",ye)("nzTitle",ce)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",P.addVariantModalVisible)("nzContent",Fe)("nzTitle",Ae)("nzFooter",null)}},directives:[e.O5,ae.eJ,$e.NU,$e.$1,Re.ix,Be.dQ,be.w,Ge.wA,Ge.cm,T.Ls,xe.x7,o.rH,Qe.L,e.mk,Ge.RR,h.wO,h.r9,h.YV,o.yS,Ne.du,Ze.t,Ye.G],pipes:[ae.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function st(p,X){1&p&&n._UZ(0,"img",62)}function it(p,X){1&p&&n._UZ(0,"img",63)}function z(p,X){1&p&&n._UZ(0,"cvc-login-button")}function k(p,X){1&p&&n._UZ(0,"cvc-viewer-button")}const A=function(p){return{"is-collapsed":p}},Ie=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-layout"]],decls:134,vars:48,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","search"],["routerLink","/curation/search"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,P){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(ye){return P.isCollapsed=ye}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,st,1,0,"img",4),n.YNc(5,it,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Drugs"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()(),n.TgZ(81,"li",8),n._UZ(82,"i",37),n.TgZ(83,"span")(84,"a",38),n._uU(85,"Search"),n.qZA()()()()(),n.TgZ(86,"li",7)(87,"ul")(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Contributors"),n.qZA()()(),n.TgZ(93,"li",8),n._UZ(94,"i",41),n.TgZ(95,"span")(96,"a",42),n._uU(97,"Organizations"),n.qZA()()()()(),n.TgZ(98,"li",7)(99,"ul")(100,"li",8),n._UZ(101,"i",43),n.TgZ(102,"span")(103,"a",44),n._uU(104,"Data Releases"),n.qZA()()()()()(),n.TgZ(105,"div",45),n._UZ(106,"img",46)(107,"img",47),n.qZA()(),n.TgZ(108,"nz-layout",48)(109,"nz-header")(110,"div",49)(111,"div",50)(112,"span",51),n.NdJ("click",function(){return P.isCollapsed=!P.isCollapsed}),n._UZ(113,"i",52),n.qZA()(),n.TgZ(114,"div",53),n._UZ(115,"cvc-quicksearch"),n.qZA(),n.TgZ(116,"div",54)(117,"ul",55)(118,"li",56)(119,"a",57),n._uU(120,"Home"),n.qZA()(),n.TgZ(121,"li",56)(122,"a",58),n._uU(123,"About CIViC"),n.qZA()(),n.TgZ(124,"li",56)(125,"a",59),n._uU(126,"Help"),n.qZA()()()(),n.TgZ(127,"div",60),n.YNc(128,z,1,0,"cvc-login-button",61),n.ALo(129,"async"),n.YNc(130,k,1,0,"cvc-viewer-button",61),n.ALo(131,"async"),n.qZA()()(),n.TgZ(132,"nz-content"),n._UZ(133,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",P.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(40,A,P.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!P.isCollapsed),n.xp6(1),n.Q6J("ngIf",P.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(42,A,P.isCollapsed))("nzInlineCollapsed",P.isCollapsed),n.xp6(1),n.Q6J("nzTitle",P.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Drugs":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Search":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",P.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",P.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",P.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(44,A,P.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(46,A,P.isCollapsed)),n.xp6(5),n.Q6J("nzType",P.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(129,36,P.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(131,38,P.signedIn$)))},directives:[Q,g,o.yS,e.mk,e.O5,h.wO,h.uA,h.r9,N.SY,T.Ls,W,ne.SK,ne.t3,D,de.s,tt,$,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(4184),i.e(3883),i.e(6961),i.e(3429),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(2475),i.e(9160),i.e(8103),i.e(8592),i.e(8249)]).then(i.bind(i,933)).then(p=>p.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(7142),i.e(1838)]).then(i.bind(i,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(7434)]).then(i.bind(i,233)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8918)]).then(i.bind(i,1592)).then(p=>p.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(8592),i.e(9987)]).then(i.bind(i,9040)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(399),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(1424),i.e(8592),i.e(5625)]).then(i.bind(i,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(399),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(3278),i.e(6961),i.e(7142),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(399),i.e(1192),i.e(6724),i.e(3883),i.e(3278),i.e(8592),i.e(4979)]).then(i.bind(i,684)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(8945),i.e(9890),i.e(9931),i.e(8482),i.e(2475),i.e(9397),i.e(399),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(9160),i.e(3278),i.e(376),i.e(1424),i.e(3218)]).then(i.bind(i,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(8945),i.e(9890),i.e(8482),i.e(9160),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(8945),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let Oe=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Ie)],o.Bz]}),p})();var dt=i(1017),rt=i(1047),ut=i(4546),qe=i(1314),pt=i(4832),mt=i(969),at=i(2994),lt=i(8583),we=i(1159),ct=i(7429);const _t={provide:re.JU,useExisting:(0,n.Gpc)(()=>yt),multi:!0};let yt=(()=>{class p{constructor(u,P,ce,ye,Ae,Fe){this.ngZone=u,this.elementRef=P,this.overlay=ce,this.viewContainerRef=ye,this.nzInputGroupWhitSuffixOrPrefixDirective=Ae,this.document=Fe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new f.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,I.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const P=u.keyCode,ce=P===we.LH||P===we.JH;P===we.hY&&u.preventDefault(),!this.panelOpen||P!==we.hY&&P!==we.Mf?this.panelOpen&&P===we.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&ce&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),P===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const P=u.target,ce=this.document;let ye=P.value;"number"===P.type&&(ye=""===ye?null:parseFloat(ye)),this.previousValue!==ye&&(this.previousValue=ye,this.onChange(ye),this.canOpen()&&ce.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,at.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,lt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,q.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Ct(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new ct.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const P=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(P),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const P=this.nzAutocomplete.getOption(u),ce=P?P.getLabel():u;this.elementRef.nativeElement.value=null!=ce?ce:"",this.nzAutocomplete.nzBackfill||(this.previousValue=ce)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(rt.ke,8),n.Y36(e.K0,8))},p.\u0275dir=n.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,P){1&u&&n.NdJ("focusin",function(){return P.handleFocus()})("blur",function(){return P.handleBlur()})("input",function(ye){return P.handleInput(ye)})("keydown",function(ye){return P.handleKeydown(ye)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([_t])]}),p})(),Tt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[y.vT,e.ez,qe.U8,re.u5,mt.T,pt.g,rt.o7]]}),p})(),It=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,re.u5,o.Bz,ae.WG,me.ZJ,ge.LV,rt.o7,ut.U5,T.PV,Tt]]}),p})();var Mt=i(1844),Dt=i(5473),St=i(330),Ot=i(7058);let Et=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,ae.WG,Ge.b1,o.Bz,Re.sL,$e.zf,T.PV,xe.mS,N.cg,Ne.Qp,Dt.H,St.e,Ot.e]]}),p})(),Pt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,Oe,T.PV,ne.Jb,U,h.ip,N.cg,me.ZJ,dt.s,Mt.B,Et,It]]}),p})()},3240:(ue,w,i)=>{function e(a){return null!=a}i.d(w,{ep:()=>e})},373:(ue,w,i)=>{i.d(w,{j:()=>o});var e=i(4850);function o(...s){const f=s.length;if(0===f)throw new Error("list of properties cannot be empty.");return I=>(0,e.U)(function n(s,f){return a=>{let G=a;for(let l=0;l<f;l++){const h=null!=G?G[s[l]]:void 0;if(void 0===h)return;G=h}return G}}(s,f))(I)}},3164:(ue,w,i)=>{i.d(w,{p:()=>a});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function a(_,T=o.P,y=n){return j=>j.lift(new G(_,T,y.leading,y.trailing))}class G{constructor(T,y,j,O){this.duration=T,this.scheduler=y,this.leading=j,this.trailing=O}call(T,y){return y.subscribe(new l(T,this.duration,this.scheduler,this.leading,this.trailing))}}class l extends e.L{constructor(T,y,j,O,H){super(T),this.duration=y,this.scheduler=j,this.leading=O,this.trailing=H,this._hasTrailingValue=!1,this._trailingValue=null}_next(T){this.throttled?this.trailing&&(this._trailingValue=T,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(h,this.duration,{subscriber:this})),this.leading?this.destination.next(T):this.trailing&&(this._trailingValue=T,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const T=this.throttled;T&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),T.unsubscribe(),this.remove(T),this.throttled=null)}}function h(_){const{subscriber:T}=_;T.clearThrottle()}},444:(ue,w,i)=>{function e(x){return x!==String(parseFloat(x))}i.d(w,{o6:()=>b});var f=Object.getOwnPropertyNames?function o(x){return Object.getOwnPropertyNames(x).filter(function(c){return x.propertyIsEnumerable(c)&&e(c)})}:Object.keys?function n(x){return Object.keys(x).filter(e)}:function s(x){var c=[];for(var $ in x)x.hasOwnProperty($)&&x.propertyIsEnumerable($)&&e($)&&c.push($);return c},I=function(){function x(c){this.enumObj=c,this.keysList=Object.freeze(f(c));for(var $=this.keysList.length,S=new Array($),W=new Map,R=0;R<$;++R){var g=this.keysList[R],Q=c[g];S[R]=Q,W.set(Q,g),this[R]=Object.freeze([g,Q])}this.valuesList=Object.freeze(S),this.keysByValueMap=W,this.size=this.length=$,Object.freeze(this)}return x.prototype.toString=function(){return"[object EnumWrapper]"},x.prototype.keys=function(){var c,$=this,S=0;return(c={next:function(){var R={done:S>=$.length,value:$.keysList[S]};return++S,R}})[Symbol.iterator]=function(){return this},c},x.prototype.values=function(){var c,$=this,S=0;return(c={next:function(){var R={done:S>=$.length,value:$.valuesList[S]};return++S,R}})[Symbol.iterator]=function(){return this},c},x.prototype.entries=function(){var c,$=this,S=0;return(c={next:function(){var R={done:S>=$.length,value:$[S]};return++S,R}})[Symbol.iterator]=function(){return this},c},x.prototype[Symbol.iterator]=function(){return this.entries()},x.prototype.forEach=function(c,$){for(var S=this.length,W=0;W<S;++W){var R=this[W];c.call($,R[1],R[0],this,W)}},x.prototype.map=function(c,$){for(var S=this.length,W=new Array(S),R=0;R<S;++R){var g=this[R];W[R]=c.call($,g[1],g[0],this,R)}return W},x.prototype.getKeys=function(){return this.keysList.slice()},x.prototype.getValues=function(){return this.valuesList.slice()},x.prototype.getEntries=function(){return Array.prototype.slice.call(this)},x.prototype.indexOfKey=function(c){return this.keysList.indexOf(c)},x.prototype.indexOfValue=function(c){return this.valuesList.indexOf(c)},x.prototype.isKey=function(c){return null!=c&&e(c)&&this.enumObj.hasOwnProperty(c)},x.prototype.asKeyOrThrow=function(c){if(this.isKey(c))return c;throw new Error("Unexpected key: "+c+". Expected one of: "+this.getValues())},x.prototype.asKeyOrDefault=function(c,$){return this.isKey(c)?c:$},x.prototype.isValue=function(c){return null!=c&&this.keysByValueMap.has(c)},x.prototype.asValueOrThrow=function(c){if(this.isValue(c))return c;throw new Error("Unexpected value: "+c+". Expected one of: "+this.getValues())},x.prototype.asValueOrDefault=function(c,$){return this.isValue(c)?c:$},x.prototype.getKeyOrThrow=function(c){var $=null!=c?this.keysByValueMap.get(c):void 0;if(null!=$)return $;throw new Error("Unexpected value: "+c+". Expected one of: "+this.getValues())},x.prototype.getKeyOrDefault=function(c,$){var S=null!=c?this.keysByValueMap.get(c):void 0;return null!=S?S:$},x.prototype.getValueOrThrow=function(c){return this.enumObj[this.asKeyOrThrow(c)]},x.prototype.getValueOrDefault=function(c,$){return this.isKey(c)?this.enumObj[c]:$},x}();I.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),G=Symbol("ts-enum-util:handleNull"),l=Symbol("ts-enum-util:handleUndefined"),h=Symbol("ts-enum-util:handleUnexpected");function _(x){return new Error("Unhandled value: "+x)}var T=function(){function x(c){this.value=c}return x.prototype.with=function(c){if(c.hasOwnProperty(this.value))return O(c[this.value],this.value);if(c[h])return O(c[h],this.value);throw new Error("Unexpected value: "+this.value)},x}(),y=function(){function x(){}return x.prototype.with=function(c){if(c[G])return O(c[G],null);if(c[h])return O(c[h],null);throw new Error("Unexpected value: null")},x}(),j=function(){function x(){}return x.prototype.with=function(c){if(c[l])return O(c[l],void 0);if(c[h])return O(c[h],void 0);throw new Error("Unexpected value: undefined")},x}();function O(x,c){if(x===a)throw _(c);return x(c)}var H=function(){function x(c){this.value=c}return x.prototype.with=function(c){if(c.hasOwnProperty(this.value))return V(c[this.value],this.value);if(c.hasOwnProperty(h))return V(c[h],this.value);throw new Error("Unexpected value: "+this.value)},x}(),B=function(){function x(){}return x.prototype.with=function(c){if(c.hasOwnProperty(G))return V(c[G],null);if(c.hasOwnProperty(h))return V(c[h],null);throw new Error("Unexpected value: null")},x}(),L=function(){function x(){}return x.prototype.with=function(c){if(c.hasOwnProperty(l))return V(c[l],void 0);if(c.hasOwnProperty(h))return V(c[h],void 0);throw new Error("Unexpected value: undefined")},x}();function V(x,c){if(x===a)throw _(c);return x}var te=new WeakMap;function b(x){var c=te.get(x);return c||(c=new I(x),te.set(x,c)),c}b.handleNull=G,b.handleUndefined=l,b.handleUnexpected=h,b.unhandledEntry=a,b.visitValue=function M(x){return null===x?new y:void 0===x?new j:new T(x)},b.mapValue=function F(x){return null===x?new B:void 0===x?new L:new H(x)}},4987:(ue,w,i)=>{i.d(w,{c:()=>x,t:()=>Q});var e=i(8929),o=i(2654),I=(i(5254),i(8896),i(8139),i(5e3)),h=(i(1709),i(7770),i(7221),i(7625));const _=I.GuJ,y=Symbol("__destroy"),j=Symbol("__decoratorApplied");function O(N){return"string"==typeof N?Symbol(`__destroy__${N}`):y}function B(N,ne){N[ne]||(N[ne]=new e.xQ)}function L(N,ne){N[ne]&&(N[ne].next(),N[ne].complete(),N[ne]=null)}function V(N){N instanceof o.w&&N.unsubscribe()}function F(N,ne){return function(){var oe;if(N&&N.call(this),L(this,O()),ne.arrayName&&function M(N){Array.isArray(N)&&N.forEach(V)}(this[ne.arrayName]),ne.checkProperties)for(const ge in this)(null===(oe=ne.blackList)||void 0===oe?void 0:oe.includes(ge))||V(this[ge])}}function x(N={}){return ne=>{!function T(N){return!!N[_]}(ne)?function te(N,ne){N.prototype.ngOnDestroy=F(N.prototype.ngOnDestroy,ne)}(ne,N):function b(N,ne){const oe=N.\u0275pipe;oe.onDestroy=F(oe.onDestroy,ne)}(ne,N),function H(N){N.prototype[j]=!0}(ne)}}function Q(N,ne){return oe=>{const ge=O(ne);return"string"==typeof ne?function g(N,ne,oe){const ge=N[ne];B(N,oe),N[ne]=function(){ge.apply(this,arguments),L(this,oe),N[ne]=ge}}(N,ne,ge):B(N,ge),oe.pipe((0,h.R)(N[ge]))}}Symbol("CheckerHasBeenSet")},9552:(ue,w,i)=>{i.d(w,{$:()=>$,j:()=>S});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),f=i(839),I=i(8929),a=i(6787),G=i(3753),l=i(7625),h=i(4850),_=i(3164),T=i(9439),y=i(1721),j=i(4090),O=i(925),H=i(5577),B=i(226);const L=["fixedEl"],V=["*"];var M=(()=>{return(W=M||(M={})).resize="resize",W.scroll="scroll",W.touchstart="touchstart",W.touchmove="touchmove",W.touchend="touchend",W.pageshow="pageshow",W.load="LOAD",M;var W})();function te(W){return function F(W){return"undefined"!=typeof window&&W===window}(W)?{top:0,left:0,bottom:0}:W.getBoundingClientRect()}const x="ant-affix";let $=(()=>{class W{constructor(g,Q,U,N,ne,oe,ge,ze,Te,De){this.nzConfigService=U,this.scrollSrv=N,this.ngZone=ne,this.platform=oe,this.renderer=ge,this.nzResizeObserver=ze,this.cdr=Te,this.directionality=De,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new f.t(1),this.destroy$=new I.xQ,this.placeholderNode=g.nativeElement,this.document=Q}get target(){const g=this.nzTarget;return("string"==typeof g?this.document.querySelector(g):g)||window}ngOnInit(){var g;null===(g=this.directionality.change)||void 0===g||g.pipe((0,l.R)(this.destroy$)).subscribe(Q=>{this.dir=Q,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(g){const{nzOffsetBottom:Q,nzOffsetTop:U,nzTarget:N}=g;(Q||U)&&this.offsetChanged$.next(),N&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const g=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(M).map(Q=>(0,G.R)(this.target,Q)),this.offsetChanged$.pipe((0,h.U)(()=>({}))),this.nzResizeObserver.observe(g)).pipe((0,_.p)(20,void 0,{trailing:!0}),(0,l.R)(this.destroy$)).subscribe(Q=>this.updatePosition(Q))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(g,Q){const U=g.getBoundingClientRect(),N=te(Q),ne=this.scrollSrv.getScroll(Q,!0),oe=this.scrollSrv.getScroll(Q,!1),ge=this.document.body;return{top:U.top-N.top+ne-(ge.clientTop||0),left:U.left-N.left+oe-(ge.clientLeft||0),width:U.width,height:U.height}}setAffixStyle(g,Q){const U=this.affixStyle,N=this.target===window;if("scroll"===g.type&&U&&Q&&N||(0,y.wU)(U,Q))return;const ne=!!Q,oe=this.fixedEl.nativeElement;this.renderer.setStyle(oe,"cssText",(0,y.GM)(Q)),this.affixStyle=Q,ne?oe.classList.add(x):oe.classList.remove(x),this.updateRtlClass(),(Q&&!U||!Q&&U)&&this.nzChange.emit(ne)}setPlaceholderStyle(g){(0,y.wU)(g,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,y.GM)(g)),this.placeholderStyle=g)}syncPlaceholderStyle(g){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const Q={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),Q)),this.setPlaceholderStyle(Q)}updatePosition(g){if(!this.platform.isBrowser)return;const Q=this.target;let U=this.nzOffsetTop;const N=this.scrollSrv.getScroll(Q,!0),ne=this.getOffset(this.placeholderNode,Q),oe=this.fixedEl.nativeElement,ge={width:oe.offsetWidth,height:oe.offsetHeight},ze={top:!1,bottom:!1};"number"!=typeof U&&"number"!=typeof this.nzOffsetBottom?(ze.top=!0,U=0):(ze.top="number"==typeof U,ze.bottom="number"==typeof this.nzOffsetBottom);const Te=te(Q),De=Q.innerHeight||Q.clientHeight;if(N>=ne.top-U&&ze.top){const se=ne.width;this.setAffixStyle(g,{position:"fixed",top:Te.top+U,left:Te.left+ne.left,width:se}),this.setPlaceholderStyle({width:se,height:ge.height})}else if(N<=ne.top+ge.height+this.nzOffsetBottom-De&&ze.bottom){const se=Q===window?0:window.innerHeight-Te.bottom,he=ne.width;this.setAffixStyle(g,{position:"fixed",bottom:se+this.nzOffsetBottom,left:Te.left+ne.left,width:he}),this.setPlaceholderStyle({width:he,height:ne.height})}else g.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(g,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(g),this.setPlaceholderStyle();"resize"===g.type&&this.syncPlaceholderStyle(g)}updateRtlClass(){const g=this.fixedEl.nativeElement;"rtl"===this.dir&&g.classList.contains(x)?g.classList.add(`${x}-rtl`):g.classList.remove(`${x}-rtl`)}}return W.\u0275fac=function(g){return new(g||W)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(T.jY),n.Y36(j.MF),n.Y36(n.R0b),n.Y36(O.t4),n.Y36(n.Qsj),n.Y36(H.D3),n.Y36(n.sBO),n.Y36(B.Is,8))},W.\u0275cmp=n.Xpm({type:W,selectors:[["nz-affix"]],viewQuery:function(g,Q){if(1&g&&n.Gf(L,7),2&g){let U;n.iGM(U=n.CRH())&&(Q.fixedEl=U.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:V,decls:3,vars:0,consts:[["fixedEl",""]],template:function(g,Q){1&g&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,T.oS)(),(0,y.Rn)(void 0)],W.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,T.oS)(),(0,y.Rn)(void 0)],W.prototype,"nzOffsetBottom",void 0),W})(),S=(()=>{class W{}return W.\u0275fac=function(g){return new(g||W)},W.\u0275mod=n.oAB({type:W}),W.\u0275inj=n.cJS({imports:[[B.vT,o.ez,O.ud]]}),W})()},6699:(ue,w,i)=>{i.d(w,{Dz:()=>O,Rt:()=>B});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),f=i(925),I=i(9808),a=i(5017),G=i(226);const l=["textEl"];function h(L,V){if(1&L&&o._UZ(0,"i",3),2&L){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function _(L,V){if(1&L){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(te){return o.CHM(M),o.oxw().imgError(te)}),o.qZA()}if(2&L){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function T(L,V){if(1&L&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&L){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let O=(()=>{class L{constructor(M,F,te,b){this.nzConfigService=M,this.elementRef=F,this.cdr=te,this.platform=b,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,F=this.el.getBoundingClientRect().width,te=2*this.nzGap<F?2*this.nzGap:8;this.textStyles={transform:`scale(${F-te<M?(F-te)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return L.\u0275fac=function(M){return new(M||L)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(f.t4))},L.\u0275cmp=o.Xpm({type:L,selectors:[["nz-avatar"]],viewQuery:function(M,F){if(1&M&&o.Gf(l,5),2&M){let te;o.iGM(te=o.CRH())&&(F.textEl=te.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,F){2&M&&(o.Udp("width",F.customSize)("height",F.customSize)("line-height",F.customSize)("font-size",F.hasIcon&&F.customSize?F.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===F.nzSize)("ant-avatar-sm","small"===F.nzSize)("ant-avatar-square","square"===F.nzShape)("ant-avatar-circle","circle"===F.nzShape)("ant-avatar-icon",F.nzIcon)("ant-avatar-image",F.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,F){1&M&&(o.YNc(0,h,1,1,"i",0),o.YNc(1,_,1,3,"img",1),o.YNc(2,T,3,2,"span",2)),2&M&&(o.Q6J("ngIf",F.nzIcon&&F.hasIcon),o.xp6(1),o.Q6J("ngIf",F.nzSrc&&F.hasSrc),o.xp6(1),o.Q6J("ngIf",F.nzText&&F.hasText))},directives:[I.O5,a.Ls,I.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],L.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],L.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],L.prototype,"nzGap",void 0),L})(),B=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=o.oAB({type:L}),L.\u0275inj=o.cJS({imports:[[G.vT,I.ez,a.PV,f.ud]]}),L})()},4401:(ue,w,i)=>{i.d(w,{F9:()=>W,mS:()=>R,x7:()=>S});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),f=i(8076),I=i(9439),a=i(1721),G=i(226),l=i(4832),h=i(9808),_=i(969),T=i(7144);function y(g,Q){if(1&g&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&g){const U=Q.$implicit,N=o.oxw(2).index,ne=o.oxw(2);o.ekj("current",U===ne.countArray[N]),o.xp6(1),o.hij(" ",U," ")}}function j(g,Q){if(1&g&&(o.ynx(0),o.YNc(1,y,2,3,"p",5),o.BQk()),2&g){const U=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",U.countSingleArray)}}function O(g,Q){if(1&g&&(o.TgZ(0,"span",3),o.YNc(1,j,2,1,"ng-container",4),o.qZA()),2&g){const U=Q.index,N=o.oxw(2);o.Udp("transform","translateY("+100*-N.countArray[U]+"%)"),o.Q6J("nzNoAnimation",N.noAnimation),o.xp6(1),o.Q6J("ngIf",!N.nzDot&&void 0!==N.countArray[U])}}function H(g,Q){if(1&g&&(o.ynx(0),o.YNc(1,O,2,4,"span",2),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Q6J("ngForOf",U.maxNumberArray)}}function B(g,Q){if(1&g&&o._uU(0),2&g){const U=o.oxw();o.hij("",U.nzOverflowCount,"+")}}function L(g,Q){if(1&g&&(o.ynx(0),o._uU(1),o.BQk()),2&g){const U=o.oxw(2);o.xp6(1),o.Oqu(U.nzText)}}function V(g,Q){if(1&g&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,L,2,1,"ng-container",1),o.qZA(),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",U.nzStatus||U.presetColor,""),o.Udp("background",!U.presetColor&&U.nzColor),o.Q6J("ngStyle",U.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",U.nzText)}}function M(g,Q){if(1&g&&o._UZ(0,"nz-badge-sup",5),2&g){const U=o.oxw(2);o.Q6J("nzOffset",U.nzOffset)("nzTitle",U.nzTitle)("nzStyle",U.nzStyle)("nzDot",U.nzDot)("nzOverflowCount",U.nzOverflowCount)("disableAnimation",!!(U.nzStandalone||U.nzStatus||U.nzColor||null!=U.noAnimation&&U.noAnimation.nzNoAnimation))("nzCount",U.nzCount)("noAnimation",!(null==U.noAnimation||!U.noAnimation.nzNoAnimation))}}function F(g,Q){if(1&g&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Q6J("ngIf",U.showSup)}}const te=["*"];function b(g,Q){if(1&g&&(o.ynx(0),o._uU(1),o.BQk()),2&g){const U=o.oxw();o.xp6(1),o.Oqu(U.nzText)}}const x=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let c=(()=>{class g{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(U){const{nzOverflowCount:N,nzCount:ne}=U;ne&&"number"==typeof ne.currentValue&&(this.count=Math.max(0,ne.currentValue),this.countArray=this.count.toString().split("").map(oe=>+oe)),N&&this.generateMaxNumberArray()}}return g.\u0275fac=function(U){return new(U||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(U,N){2&U&&(o.uIk("title",null===N.nzTitle?"":N.nzTitle||N.nzCount),o.d8E("@.disabled",N.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(N.nzStyle),o.Udp("right",N.nzOffset&&N.nzOffset[0]?-N.nzOffset[0]:null,"px")("margin-top",N.nzOffset&&N.nzOffset[1]?N.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!N.nzDot)("ant-badge-dot",N.nzDot)("ant-badge-multiple-words",N.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(U,N){if(1&U&&(o.YNc(0,H,2,1,"ng-container",0),o.YNc(1,B,1,1,"ng-template",null,1,o.W1O)),2&U){const ne=o.MAs(2);o.Q6J("ngIf",N.count<=N.nzOverflowCount)("ngIfElse",ne)}},directives:[h.O5,h.sg,l.P],encapsulation:2,data:{animation:[f.Ev]},changeDetection:0}),g})(),S=(()=>{class g{constructor(U,N,ne,oe,ge,ze){this.nzConfigService=U,this.renderer=N,this.cdr=ne,this.elementRef=oe,this.directionality=ge,this.noAnimation=ze,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,s.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(U){const{nzColor:N,nzShowDot:ne,nzDot:oe,nzCount:ge,nzShowZero:ze}=U;N&&(this.presetColor=this.nzColor&&-1!==x.indexOf(this.nzColor)?this.nzColor:null),(ne||oe||ge||ze)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(U){return new(U||g)(o.Y36(I.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(G.Is,8),o.Y36(l.P,9))},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(U,N){2&U&&o.ekj("ant-badge-status",N.nzStatus)("ant-badge-not-a-wrapper",!!(N.nzStandalone||N.nzStatus||N.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:te,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(U,N){1&U&&(o.F$t(),o.YNc(0,V,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,F,2,1,"ng-container",1)),2&U&&(o.Q6J("ngIf",N.nzStatus||N.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",N.nzCount))},directives:[c,h.O5,h.PC,_.f],encapsulation:2,data:{animation:[f.Ev]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],g.prototype,"nzShowZero",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzShowDot",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzStandalone",void 0),(0,e.gn)([(0,a.yF)()],g.prototype,"nzDot",void 0),(0,e.gn)([(0,I.oS)()],g.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,I.oS)()],g.prototype,"nzColor",void 0),g})(),W=(()=>{class g{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(U){const{nzColor:N}=U;N&&(this.presetColor=this.nzColor&&-1!==x.indexOf(this.nzColor)?this.nzColor:null)}}return g.\u0275fac=function(U){return new(U||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:te,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(U,N){1&U&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,b,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&U&&(o.xp6(1),o.Tol(N.presetColor&&"ant-ribbon-color-"+N.presetColor),o.Udp("background-color",!N.presetColor&&N.nzColor),o.ekj("ant-ribbon-placement-end","end"===N.nzPlacement)("ant-ribbon-placement-start","start"===N.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",N.nzText),o.xp6(1),o.Udp("color",!N.presetColor&&N.nzColor))},directives:[_.f],encapsulation:2,changeDetection:0}),g})(),R=(()=>{class g{}return g.\u0275fac=function(U){return new(U||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[G.vT,h.ez,T.Q8,_.T,l.g]]}),g})()},7484:(ue,w,i)=>{i.d(w,{_i:()=>ge,bd:()=>De,vh:()=>he});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),f=i(7625),I=i(9439),a=i(226),G=i(9808),l=i(969);function h(E,ie){1&E&&o.Hsn(0)}const _=["*"];function T(E,ie){1&E&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&E&&o.Q6J("ngClass",ie.$implicit)}function y(E,ie){if(1&E&&(o.TgZ(0,"div",2),o.YNc(1,T,2,1,"div",3),o.qZA()),2&E){const Z=ie.$implicit;o.xp6(1),o.Q6J("ngForOf",Z)}}function j(E,ie){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const Z=o.oxw(3);o.xp6(1),o.Oqu(Z.nzTitle)}}function O(E,ie){if(1&E&&(o.TgZ(0,"div",11),o.YNc(1,j,2,1,"ng-container",12),o.qZA()),2&E){const Z=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Z.nzTitle)}}function H(E,ie){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const Z=o.oxw(3);o.xp6(1),o.Oqu(Z.nzExtra)}}function B(E,ie){if(1&E&&(o.TgZ(0,"div",13),o.YNc(1,H,2,1,"ng-container",12),o.qZA()),2&E){const Z=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Z.nzExtra)}}function L(E,ie){}function V(E,ie){if(1&E&&(o.ynx(0),o.YNc(1,L,0,0,"ng-template",14),o.BQk()),2&E){const Z=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",Z.listOfNzCardTabComponent.template)}}function M(E,ie){if(1&E&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,O,2,1,"div",8),o.YNc(3,B,2,1,"div",9),o.qZA(),o.YNc(4,V,2,1,"ng-container",10),o.qZA()),2&E){const Z=o.oxw();o.xp6(2),o.Q6J("ngIf",Z.nzTitle),o.xp6(1),o.Q6J("ngIf",Z.nzExtra),o.xp6(1),o.Q6J("ngIf",Z.listOfNzCardTabComponent)}}function F(E,ie){}function te(E,ie){if(1&E&&(o.TgZ(0,"div",15),o.YNc(1,F,0,0,"ng-template",14),o.qZA()),2&E){const Z=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",Z.nzCover)}}function b(E,ie){1&E&&(o.ynx(0),o.Hsn(1),o.BQk())}function x(E,ie){1&E&&o._UZ(0,"nz-card-loading")}function c(E,ie){}function $(E,ie){if(1&E&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,c,0,0,"ng-template",14),o.qZA()()),2&E){const Z=ie.$implicit,Y=o.oxw(2);o.Udp("width",100/Y.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",Z)}}function S(E,ie){if(1&E&&(o.TgZ(0,"ul",16),o.YNc(1,$,3,3,"li",17),o.qZA()),2&E){const Z=o.oxw();o.xp6(1),o.Q6J("ngForOf",Z.nzActions)}}let oe=(()=>{class E{constructor(){this.nzHoverable=!0}}return E.\u0275fac=function(Z){return new(Z||E)},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(Z,Y){2&Z&&o.ekj("ant-card-hoverable",Y.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],E.prototype,"nzHoverable",void 0),E})(),ge=(()=>{class E{}return E.\u0275fac=function(Z){return new(Z||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-tab"]],viewQuery:function(Z,Y){if(1&Z&&o.Gf(o.Rgc,7),2&Z){let K;o.iGM(K=o.CRH())&&(Y.template=K.first)}},exportAs:["nzCardTab"],ngContentSelectors:_,decls:1,vars:0,template:function(Z,Y){1&Z&&(o.F$t(),o.YNc(0,h,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),E})(),ze=(()=>{class E{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return E.\u0275fac=function(Z){return new(Z||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(Z,Y){1&Z&&(o.TgZ(0,"div",0),o.YNc(1,y,2,1,"div",1),o.qZA()),2&Z&&(o.xp6(1),o.Q6J("ngForOf",Y.listOfLoading))},directives:[G.sg,G.mk],encapsulation:2,changeDetection:0}),E})(),De=(()=>{class E{constructor(Z,Y,K){this.nzConfigService=Z,this.cdr=Y,this.directionality=K,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,f.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var Z;null===(Z=this.directionality.change)||void 0===Z||Z.pipe((0,f.R)(this.destroy$)).subscribe(Y=>{this.dir=Y,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(Z){return new(Z||E)(o.Y36(I.jY),o.Y36(o.sBO),o.Y36(a.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card"]],contentQueries:function(Z,Y,K){if(1&Z&&(o.Suo(K,ge,5),o.Suo(K,oe,4)),2&Z){let q;o.iGM(q=o.CRH())&&(Y.listOfNzCardTabComponent=q.first),o.iGM(q=o.CRH())&&(Y.listOfNzCardGridDirective=q)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(Z,Y){2&Z&&o.ekj("ant-card-loading",Y.nzLoading)("ant-card-bordered",!1===Y.nzBorderless&&Y.nzBordered)("ant-card-hoverable",Y.nzHoverable)("ant-card-small","small"===Y.nzSize)("ant-card-contain-grid",Y.listOfNzCardGridDirective&&Y.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===Y.nzType)("ant-card-contain-tabs",!!Y.listOfNzCardTabComponent)("ant-card-rtl","rtl"===Y.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:_,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(Z,Y){if(1&Z&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,te,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,b,2,0,"ng-container",3),o.YNc(4,x,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,S,2,1,"ul",5)),2&Z){const K=o.MAs(5);o.Q6J("ngIf",Y.nzTitle||Y.nzExtra||Y.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",Y.nzCover),o.xp6(1),o.Q6J("ngStyle",Y.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!Y.nzLoading)("ngIfElse",K),o.xp6(3),o.Q6J("ngIf",Y.nzActions.length)}},directives:[ze,G.O5,l.f,G.tP,G.PC,G.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzBordered",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],E.prototype,"nzLoading",void 0),(0,e.gn)([(0,I.oS)(),(0,n.yF)()],E.prototype,"nzHoverable",void 0),(0,e.gn)([(0,I.oS)()],E.prototype,"nzSize",void 0),E})(),he=(()=>{class E{}return E.\u0275fac=function(Z){return new(Z||E)},E.\u0275mod=o.oAB({type:E}),E.\u0275inj=o.cJS({imports:[[G.ez,l.T],a.vT]}),E})()},5577:(ue,w,i)=>{i.d(w,{D3:()=>I,y7:()=>G});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let f=(()=>{class l{create(_){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(_)}}return l.\u0275fac=function(_){return new(_||l)},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),I=(()=>{class l{constructor(_){this.nzResizeObserverFactory=_,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((_,T)=>this.cleanupObserver(T))}observe(_){const T=(0,o.fI)(_);return new n.y(y=>{const O=this.observeElement(T).subscribe(y);return()=>{O.unsubscribe(),this.unobserveElement(T)}})}observeElement(_){if(this.observedElements.has(_))this.observedElements.get(_).count++;else{const T=new s.xQ,y=this.nzResizeObserverFactory.create(j=>T.next(j));y&&y.observe(_),this.observedElements.set(_,{observer:y,stream:T,count:1})}return this.observedElements.get(_).stream}unobserveElement(_){this.observedElements.has(_)&&(this.observedElements.get(_).count--,this.observedElements.get(_).count||this.cleanupObserver(_))}cleanupObserver(_){if(this.observedElements.has(_)){const{observer:T,stream:y}=this.observedElements.get(_);T&&T.disconnect(),y.complete(),this.observedElements.delete(_)}}}return l.\u0275fac=function(_){return new(_||l)(e.LFG(f))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),G=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[f]}),l})()},5482:(ue,w,i)=>{i.d(w,{Zv:()=>c,cD:()=>$,yH:()=>b});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),f=i(2198),I=i(8076),a=i(9439),G=i(4090),l=i(1721),h=i(226),_=i(4832),T=i(9808),y=i(969),j=i(5017);const O=["*"],H=["collapseHeader"];function B(S,W){if(1&S&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&S){const R=W.$implicit,g=o.oxw(2);o.xp6(1),o.Q6J("nzType",R||"right")("nzRotate",g.nzActive?90:0)}}function L(S,W){if(1&S&&(o.TgZ(0,"div"),o.YNc(1,B,2,2,"ng-container",3),o.qZA()),2&S){const R=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",R.nzExpandedIcon)}}function V(S,W){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const R=o.oxw();o.xp6(1),o.Oqu(R.nzHeader)}}function M(S,W){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const R=o.oxw(2);o.xp6(1),o.Oqu(R.nzExtra)}}function F(S,W){if(1&S&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&S){const R=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",R.nzExtra)}}const te="collapse";let b=(()=>{class S{constructor(R,g,Q,U){this.nzConfigService=R,this.cdr=g,this.directionality=Q,this.destroy$=U,this._nzModuleName=te,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(te).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var R;null===(R=this.directionality.change)||void 0===R||R.pipe((0,s.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(R){this.listOfNzCollapsePanelComponent.push(R)}removePanel(R){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(R),1)}click(R){this.nzAccordion&&!R.nzActive&&this.listOfNzCollapsePanelComponent.filter(g=>g!==R).forEach(g=>{g.nzActive&&(g.nzActive=!1,g.nzActiveChange.emit(g.nzActive),g.markForCheck())}),R.nzActive=!R.nzActive,R.nzActiveChange.emit(R.nzActive)}}return S.\u0275fac=function(R){return new(R||S)(o.Y36(a.jY),o.Y36(o.sBO),o.Y36(h.Is,8),o.Y36(G.kn))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(R,g){2&R&&o.ekj("ant-collapse-icon-position-left","left"===g.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===g.nzExpandIconPosition)("ant-collapse-ghost",g.nzGhost)("ant-collapse-borderless",!g.nzBordered)("ant-collapse-rtl","rtl"===g.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([G.kn])],ngContentSelectors:O,decls:1,vars:0,template:function(R,g){1&R&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzAccordion",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzBordered",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzGhost",void 0),S})();const x="collapsePanel";let c=(()=>{class S{constructor(R,g,Q,U,N,ne){this.nzConfigService=R,this.ngZone=g,this.cdr=Q,this.destroy$=U,this.nzCollapseComponent=N,this.noAnimation=ne,this._nzModuleName=x,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(x).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,f.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return S.\u0275fac=function(R){return new(R||S)(o.Y36(a.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(G.kn),o.Y36(b,1),o.Y36(_.P,8))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-collapse-panel"]],viewQuery:function(R,g){if(1&R&&o.Gf(H,7),2&R){let Q;o.iGM(Q=o.CRH())&&(g.collapseHeader=Q.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(R,g){2&R&&o.ekj("ant-collapse-no-arrow",!g.nzShowArrow)("ant-collapse-item-active",g.nzActive)("ant-collapse-item-disabled",g.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([G.kn])],ngContentSelectors:O,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(R,g){1&R&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,L,2,1,"div",2),o.YNc(3,V,2,1,"ng-container",3),o.YNc(4,F,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&R&&(o.uIk("aria-expanded",g.nzActive),o.xp6(2),o.Q6J("ngIf",g.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",g.nzHeader),o.xp6(1),o.Q6J("ngIf",g.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",g.nzActive),o.Q6J("@.disabled",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("@collapseMotion",g.nzActive?"expanded":"hidden"))},directives:[T.O5,y.f,j.Ls],encapsulation:2,data:{animation:[I.J_]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],S.prototype,"nzActive",void 0),(0,e.gn)([(0,l.yF)()],S.prototype,"nzDisabled",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],S.prototype,"nzShowArrow",void 0),S})(),$=(()=>{class S{}return S.\u0275fac=function(R){return new(R||S)},S.\u0275mod=o.oAB({type:S}),S.\u0275inj=o.cJS({imports:[[h.vT,T.ez,j.PV,y.T,_.g]]}),S})()},3098:(ue,w,i)=>{i.d(w,{R7:()=>ae,q6:()=>_e,uj:()=>ve});var e=i(226),o=i(925),n=i(9808),s=i(5e3),f=i(969),I=i(655),a=i(8929),G=i(6787),l=i(1721),h=i(7625),_=i(1059),T=i(7545),y=i(7138),j=i(2994),O=i(9439),H=i(948),B=i(4090);function L(C,ee){1&C&&s.Hsn(0)}const V=["*"];function M(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzTitle)}}function F(C,ee){if(1&C&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function te(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzExtra)}}function b(C,ee){if(1&C&&(s.TgZ(0,"div",8),s.YNc(1,te,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function x(C,ee){if(1&C&&(s.TgZ(0,"div",3),s.YNc(1,F,2,1,"div",4),s.YNc(2,b,2,1,"div",5),s.qZA()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",D.nzTitle),s.xp6(1),s.Q6J("ngIf",D.nzExtra)}}function c(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function $(C,ee){}function S(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,c,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,$,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const D=s.oxw().$implicit,de=s.oxw(3);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!de.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(2),s.Q6J("ngTemplateOutlet",D.content)}}function W(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function R(C,ee){if(1&C&&(s.TgZ(0,"td",14),s.YNc(1,W,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function g(C,ee){}function Q(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,R,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,g,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(1),s.Q6J("colSpan",2*D.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function U(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,S,7,5,"ng-container",2),s.YNc(2,Q,4,3,"ng-container",2),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}function N(C,ee){if(1&C&&(s.TgZ(0,"tr",10),s.YNc(1,U,3,2,"ng-container",11),s.qZA()),2&C){const D=ee.$implicit;s.xp6(1),s.Q6J("ngForOf",D)}}function ne(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,N,2,1,"tr",9),s.BQk()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function oe(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function ge(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,oe,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&C){const D=ee.$implicit,de=s.oxw(4);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!de.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function ze(C,ee){}function Te(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,ze,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const D=ee.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(3),s.Q6J("ngTemplateOutlet",D.content)}}function De(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,ge,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Te,5,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const D=ee.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function se(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function he(C,ee){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function E(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,he,2,1,"ng-container",7),s.qZA(),s.BQk()),2&C){const D=ee.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function ie(C,ee){}function Z(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,ie,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const D=ee.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function Y(C,ee){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,E,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Z,3,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const D=ee.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function K(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,Y,5,2,"ng-container",11),s.BQk()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function q(C,ee){if(1&C&&(s.ynx(0),s.YNc(1,se,2,1,"ng-container",2),s.YNc(2,K,2,1,"ng-container",2),s.BQk()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}let ve=(()=>{class C{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions-item"]],viewQuery:function(D,de){if(1&D&&s.Gf(s.Rgc,7),2&D){let Me;s.iGM(Me=s.CRH())&&(de.content=Me.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:V,decls:1,vars:0,template:function(D,de){1&D&&(s.F$t(),s.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,I.gn)([(0,l.Rn)()],C.prototype,"nzSpan",void 0),C})();const me={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let ae=(()=>{class C{constructor(D,de,Me,Se){this.nzConfigService=D,this.cdr=de,this.breakpointService=Me,this.directionality=Se,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=me,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=B.G_.md,this.destroy$=new a.xQ}ngOnInit(){var D;this.dir=this.directionality.value,null===(D=this.directionality.change)||void 0===D||D.pipe((0,h.R)(this.destroy$)).subscribe(de=>{this.dir=de})}ngOnChanges(D){D.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const D=this.items.changes.pipe((0,_.O)(this.items),(0,h.R)(this.destroy$));(0,G.T)(D,D.pipe((0,T.w)(()=>(0,G.T)(...this.items.map(de=>de.inputChange$)).pipe((0,y.e)(16)))),this.breakpointService.subscribe(B.WV).pipe((0,j.b)(de=>this.breakpoint=de))).pipe((0,h.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let D=[],de=0;const Me=this.realColumn=this.getColumn(),Se=this.items.toArray(),$e=Se.length,Re=[],Be=()=>{Re.push(D),D=[],de=0};for(let be=0;be<$e;be++){const Ge=Se[be],{nzTitle:xe,content:Qe,nzSpan:Ne}=Ge;de+=Ne,de>=Me?(de>Me&&(0,H.ZK)(`"nzColumn" is ${Me} but we have row length ${de}`),D.push({title:xe,content:Qe,span:Me-(de-Ne)}),Be()):be===$e-1?(D.push({title:xe,content:Qe,span:Me-(de-Ne)}),Be()):D.push({title:xe,content:Qe,span:Ne})}this.itemMatrix=Re}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return C.\u0275fac=function(D){return new(D||C)(s.Y36(O.jY),s.Y36(s.sBO),s.Y36(B.r3),s.Y36(e.Is,8))},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions"]],contentQueries:function(D,de,Me){if(1&D&&s.Suo(Me,ve,4),2&D){let Se;s.iGM(Se=s.CRH())&&(de.items=Se)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(D,de){2&D&&s.ekj("ant-descriptions-bordered",de.nzBordered)("ant-descriptions-middle","middle"===de.nzSize)("ant-descriptions-small","small"===de.nzSize)("ant-descriptions-rtl","rtl"===de.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(D,de){1&D&&(s.YNc(0,x,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,ne,2,1,"ng-container",2),s.YNc(5,q,3,2,"ng-container",2),s.qZA()()()),2&D&&(s.Q6J("ngIf",de.nzTitle||de.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===de.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===de.nzLayout))},directives:[n.O5,f.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,I.gn)([(0,l.yF)(),(0,O.oS)()],C.prototype,"nzBordered",void 0),(0,I.gn)([(0,O.oS)()],C.prototype,"nzColumn",void 0),(0,I.gn)([(0,O.oS)()],C.prototype,"nzSize",void 0),(0,I.gn)([(0,O.oS)(),(0,l.yF)()],C.prototype,"nzColon",void 0),C})(),_e=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=s.oAB({type:C}),C.\u0275inj=s.cJS({imports:[[e.vT,n.ez,f.T,o.ud]]}),C})()},3677:(ue,w,i)=>{i.d(w,{RR:()=>se,b1:()=>he,cm:()=>ge,wA:()=>De});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),f=i(8929),I=i(591),a=i(6787),G=i(3753),l=i(8896),h=i(6053),_=i(7604),T=i(4850),y=i(7545),j=i(2198),O=i(7138),H=i(5778),B=i(7625),L=i(9439),V=i(6950),M=i(1721),F=i(1314),te=i(925),b=i(226),x=i(9808),c=i(3075),$=i(6042),S=i(4832),W=i(969),R=i(5017),g=i(4219),Q=i(8076);function U(Z,Y){if(1&Z){const K=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(ve){return s.CHM(K),s.oxw().onAnimationEvent(ve)})("mouseenter",function(){return s.CHM(K),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(K),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&Z){const K=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===K.dir),s.Q6J("ngClass",K.nzOverlayClassName)("ngStyle",K.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==K.noAnimation?null:K.noAnimation.nzNoAnimation)("nzNoAnimation",null==K.noAnimation?null:K.noAnimation.nzNoAnimation)}}const N=["*"],oe=[V.yW.bottomLeft,V.yW.bottomRight,V.yW.topRight,V.yW.topLeft];let ge=(()=>{class Z{constructor(K,q,ve,re,me,ae){this.nzConfigService=K,this.elementRef=q,this.overlay=ve,this.renderer=re,this.viewContainerRef=me,this.platform=ae,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new f.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new I.X(!1),this.nzTrigger$=new I.X("hover"),this.overlayClose$=new f.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(K,q){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(K,q)}ngAfterViewInit(){if(this.nzDropdownMenu){const K=this.elementRef.nativeElement,q=(0,a.T)((0,G.R)(K,"mouseenter").pipe((0,_.h)(!0)),(0,G.R)(K,"mouseleave").pipe((0,_.h)(!1))),re=(0,a.T)(this.nzDropdownMenu.mouseState$,q),me=(0,G.R)(K,"click").pipe((0,T.U)(()=>!this.nzVisible)),ae=this.nzTrigger$.pipe((0,y.w)(D=>"hover"===D?re:"click"===D?me:l.E)),_e=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,j.h)(()=>this.nzClickHide),(0,_.h)(!1)),C=(0,a.T)(ae,_e,this.overlayClose$).pipe((0,j.h)(()=>!this.nzDisabled)),ee=(0,a.T)(this.inputVisible$,C);(0,h.aj)([ee,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,T.U)(([D,de])=>D||de),(0,O.e)(150),(0,H.x)(),(0,j.h)(()=>this.platform.isBrowser),(0,B.R)(this.destroy$)).subscribe(D=>{const Me=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:K).getBoundingClientRect().width;this.nzVisible!==D&&this.nzVisibleChange.emit(D),this.nzVisible=D,D?(this.overlayRef?this.overlayRef.getConfig().minWidth=Me:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Me,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,j.h)(Se=>!this.elementRef.nativeElement.contains(Se.target))),this.overlayRef.keydownEvents().pipe((0,j.h)(Se=>Se.keyCode===o.hY&&!(0,o.Vb)(Se)))).pipe((0,B.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([V.yW[this.nzPlacement],...oe]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,B.R)(this.destroy$)).subscribe(D=>{"void"===D.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(K){const{nzVisible:q,nzDisabled:ve,nzOverlayClassName:re,nzOverlayStyle:me,nzTrigger:ae}=K;if(ae&&this.nzTrigger$.next(this.nzTrigger),q&&this.inputVisible$.next(this.nzVisible),ve){const _e=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(_e,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(_e,"disabled")}re&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),me&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return Z.\u0275fac=function(K){return new(K||Z)(s.Y36(L.jY),s.Y36(s.SBq),s.Y36(F.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(te.t4))},Z.\u0275dir=s.lG2({type:Z,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,L.oS)(),(0,M.yF)()],Z.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],Z.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],Z.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],Z.prototype,"nzVisible",void 0),Z})(),ze=(()=>{class Z{}return Z.\u0275fac=function(K){return new(K||Z)},Z.\u0275mod=s.oAB({type:Z}),Z.\u0275inj=s.cJS({}),Z})(),De=(()=>{class Z{constructor(K,q,ve){this.renderer=K,this.nzButtonGroupComponent=q,this.elementRef=ve}ngAfterViewInit(){const K=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&K&&this.renderer.addClass(K,"ant-dropdown-button")}}return Z.\u0275fac=function(K){return new(K||Z)(s.Y36(s.Qsj),s.Y36($.fY,9),s.Y36(s.SBq))},Z.\u0275dir=s.lG2({type:Z,selectors:[["","nz-button","","nz-dropdown",""]]}),Z})(),se=(()=>{class Z{constructor(K,q,ve,re,me,ae,_e){this.cdr=K,this.elementRef=q,this.renderer=ve,this.viewContainerRef=re,this.nzMenuService=me,this.directionality=ae,this.noAnimation=_e,this.mouseState$=new I.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new f.xQ}onAnimationEvent(K){this.animationStateChange$.emit(K)}setMouseState(K){this.mouseState$.next(K)}setValue(K,q){this[K]=q,this.cdr.markForCheck()}ngOnInit(){var K;null===(K=this.directionality.change)||void 0===K||K.pipe((0,B.R)(this.destroy$)).subscribe(q=>{this.dir=q,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(K){return new(K||Z)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(g.hl),s.Y36(b.Is,8),s.Y36(S.P,9))},Z.\u0275cmp=s.Xpm({type:Z,selectors:[["nz-dropdown-menu"]],viewQuery:function(K,q){if(1&K&&s.Gf(s.Rgc,7),2&K){let ve;s.iGM(ve=s.CRH())&&(q.templateRef=ve.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([g.hl,{provide:g.Cc,useValue:!0}])],ngContentSelectors:N,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(K,q){1&K&&(s.F$t(),s.YNc(0,U,2,7,"ng-template"))},directives:[x.mk,x.PC,S.P],encapsulation:2,data:{animation:[Q.mF]},changeDetection:0}),Z})(),he=(()=>{class Z{}return Z.\u0275fac=function(K){return new(K||Z)},Z.\u0275mod=s.oAB({type:Z}),Z.\u0275inj=s.cJS({imports:[[b.vT,x.ez,F.U8,c.u5,$.sL,g.ip,R.PV,S.g,te.ud,V.e4,ze,W.T],g.ip]}),Z})();new F.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new F.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new F.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new F.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ue,w,i)=>{i.d(w,{AA:()=>tt,I2:()=>je,IO:()=>pe,Ph:()=>it,n_:()=>Xe,t4:()=>Ke,yi:()=>Le,yw:()=>Ee});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),f=i(655),I=i(1721),a=i(8929),G=i(8514),l=i(1086),h=i(6787),_=i(2916),T=i(591),y=i(2986),j=i(7545),O=i(7625),H=i(4090),B=i(685),L=i(226),V=i(7525),M=i(1894);const F=["*"];function te(z,k){if(1&z&&e._UZ(0,"nz-avatar",3),2&z){const A=e.oxw();e.Q6J("nzSrc",A.nzSrc)}}function b(z,k){1&z&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function x(z,k){if(1&z&&e._UZ(0,"nz-list-item-meta-avatar",3),2&z){const A=e.oxw();e.Q6J("nzSrc",A.avatarStr)}}function c(z,k){if(1&z&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.avatarTpl)}}function $(z,k){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzTitle)}}function S(z,k){if(1&z&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,$,2,1,"ng-container",6),e.qZA()),2&z){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzTitle)}}function W(z,k){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzDescription)}}function R(z,k){if(1&z&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,W,2,1,"ng-container",6),e.qZA()),2&z){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzDescription)}}function g(z,k){if(1&z&&(e.TgZ(0,"div",5),e.YNc(1,S,2,1,"nz-list-item-meta-title",1),e.YNc(2,R,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("ngIf",A.nzTitle&&!A.titleComponent),e.xp6(1),e.Q6J("ngIf",A.nzDescription&&!A.descriptionComponent)}}const Q=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],U=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function N(z,k){1&z&&e.Hsn(0)}const ne=["nz-list-item-actions",""];function oe(z,k){}function ge(z,k){1&z&&e._UZ(0,"em",3)}function ze(z,k){if(1&z&&(e.TgZ(0,"li"),e.YNc(1,oe,0,0,"ng-template",1),e.YNc(2,ge,1,0,"em",2),e.qZA()),2&z){const A=k.$implicit,le=k.last;e.xp6(1),e.Q6J("ngTemplateOutlet",A),e.xp6(1),e.Q6J("ngIf",!le)}}function Te(z,k){}const De=function(z,k){return{$implicit:z,index:k}};function se(z,k){if(1&z&&(e.ynx(0),e.YNc(1,Te,0,0,"ng-template",9),e.BQk()),2&z){const A=k.$implicit,le=k.index,Ie=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,De,A,le))}}function he(z,k){if(1&z&&(e.TgZ(0,"div",7),e.YNc(1,se,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function E(z,k){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzHeader)}}function ie(z,k){if(1&z&&(e.TgZ(0,"nz-list-header"),e.YNc(1,E,2,1,"ng-container",10),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzHeader)}}function Z(z,k){1&z&&e._UZ(0,"div"),2&z&&e.Udp("min-height",53,"px")}function Y(z,k){}function K(z,k){if(1&z&&(e.TgZ(0,"div",13),e.YNc(1,Y,0,0,"ng-template",9),e.qZA()),2&z){const A=k.$implicit,le=k.index,Ie=e.oxw(2);e.Q6J("nzSpan",Ie.nzGrid.span||null)("nzXs",Ie.nzGrid.xs||null)("nzSm",Ie.nzGrid.sm||null)("nzMd",Ie.nzGrid.md||null)("nzLg",Ie.nzGrid.lg||null)("nzXl",Ie.nzGrid.xl||null)("nzXXl",Ie.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,De,A,le))}}function q(z,k){if(1&z&&(e.TgZ(0,"div",11),e.YNc(1,K,2,12,"div",12),e.qZA()),2&z){const A=e.oxw();e.Q6J("nzGutter",A.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",A.nzDataSource)}}function ve(z,k){if(1&z&&e._UZ(0,"nz-list-empty",14),2&z){const A=e.oxw();e.Q6J("nzNoResult",A.nzNoResult)}}function re(z,k){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const A=e.oxw(2);e.xp6(1),e.Oqu(A.nzFooter)}}function me(z,k){if(1&z&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,re,2,1,"ng-container",10),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzFooter)}}function ae(z,k){}function _e(z,k){}function C(z,k){if(1&z&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,_e,0,0,"ng-template",6),e.qZA()),2&z){const A=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzPagination)}}const ee=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],D=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function de(z,k){if(1&z&&e._UZ(0,"ul",6),2&z){const A=e.oxw(2);e.Q6J("nzActions",A.nzActions)}}function Me(z,k){if(1&z&&(e.YNc(0,de,1,1,"ul",5),e.Hsn(1)),2&z){const A=e.oxw();e.Q6J("ngIf",A.nzActions&&A.nzActions.length>0)}}function Se(z,k){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const A=e.oxw(3);e.xp6(1),e.Oqu(A.nzContent)}}function $e(z,k){if(1&z&&(e.ynx(0),e.YNc(1,Se,2,1,"ng-container",8),e.BQk()),2&z){const A=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",A.nzContent)}}function Re(z,k){if(1&z&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,$e,2,1,"ng-container",7)),2&z){const A=e.oxw();e.xp6(2),e.Q6J("ngIf",A.nzContent)}}function Be(z,k){1&z&&e.Hsn(0,3)}function be(z,k){}function Ge(z,k){}function xe(z,k){}function Qe(z,k){}function Ne(z,k){if(1&z&&(e.YNc(0,be,0,0,"ng-template",9),e.YNc(1,Ge,0,0,"ng-template",9),e.YNc(2,xe,0,0,"ng-template",9),e.YNc(3,Qe,0,0,"ng-template",9)),2&z){const A=e.oxw(),le=e.MAs(3),Ie=e.MAs(5),Oe=e.MAs(1);e.Q6J("ngTemplateOutlet",le),e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}function Ze(z,k){}function Ye(z,k){}function We(z,k){}function Je(z,k){if(1&z&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,We,0,0,"ng-template",9),e.qZA()),2&z){const A=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",A.nzExtra)}}function J(z,k){}function fe(z,k){if(1&z&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,Ye,0,0,"ng-template",9),e.qZA(),e.YNc(4,Je,2,1,"nz-list-item-extra",7),e.YNc(5,J,0,0,"ng-template",9),e.BQk()),2&z){const A=e.oxw(),le=e.MAs(3),Ie=e.MAs(1),Oe=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",le),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngIf",A.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}const v=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let pe=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(A,le){1&A&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Ce=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(A,le){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Pe=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:F,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(A,le){1&A&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,te,1,1,"nz-avatar",1),e.YNc(2,b,1,0,"ng-content",2),e.qZA()),2&A&&(e.xp6(1),e.Q6J("ngIf",le.nzSrc),e.xp6(1),e.Q6J("ngIf",!le.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),z})(),Le=(()=>{class z{constructor(A,le){this.elementRef=A,this.renderer=le,this.avatarStr="",this.renderer.addClass(A.nativeElement,"ant-list-item-meta")}set nzAvatar(A){A instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=A):this.avatarStr=A}}return z.\u0275fac=function(A){return new(A||z)(e.Y36(e.SBq),e.Y36(e.Qsj))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(A,le,Ie){if(1&A&&(e.Suo(Ie,Ce,5),e.Suo(Ie,pe,5)),2&A){let Oe;e.iGM(Oe=e.CRH())&&(le.descriptionComponent=Oe.first),e.iGM(Oe=e.CRH())&&(le.titleComponent=Oe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:U,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(A,le){1&A&&(e.F$t(Q),e.YNc(0,x,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,c,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,g,5,2,"div",2)),2&A&&(e.Q6J("ngIf",le.avatarStr),e.xp6(1),e.Q6J("ngIf",le.avatarTpl),e.xp6(2),e.Q6J("ngIf",le.nzTitle||le.nzDescription||le.descriptionComponent||le.titleComponent))},directives:[Pe,pe,Ce,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),z})(),Ee=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:F,decls:1,vars:0,template:function(A,le){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),Ue=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-action"]],viewQuery:function(A,le){if(1&A&&e.Gf(e.Rgc,5),2&A){let Ie;e.iGM(Ie=e.CRH())&&(le.templateRef=Ie.first)}},exportAs:["nzListItemAction"],ngContentSelectors:F,decls:1,vars:0,template:function(A,le){1&A&&(e.F$t(),e.YNc(0,N,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),z})(),Ve=(()=>{class z{constructor(A,le,Ie){this.ngZone=A,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,G.P)(()=>this.nzListItemActions?(0,l.of)(null):this.ngZone.onStable.pipe((0,y.q)(1),this.enterZone(),(0,j.w)(()=>this.contentChildrenChanges$))),(0,h.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,O.R)(Ie)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Oe=>Oe.templateRef),le.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return A=>new _.y(le=>A.subscribe({next:Ie=>this.ngZone.run(()=>le.next(Ie))}))}}return z.\u0275fac=function(A){return new(A||z)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(H.kn))},z.\u0275cmp=e.Xpm({type:z,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(A,le,Ie){if(1&A&&e.Suo(Ie,Ue,4),2&A){let Oe;e.iGM(Oe=e.CRH())&&(le.nzListItemActions=Oe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([H.kn]),e.TTD],attrs:ne,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(A,le){1&A&&e.YNc(0,ze,3,2,"li",0),2&A&&e.Q6J("ngForOf",le.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),z})(),je=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(A,le){1&A&&e._UZ(0,"nz-embed-empty",0),2&A&&e.Q6J("nzComponentName","list")("specificContent",le.nzNoResult)},directives:[B.gB],encapsulation:2,changeDetection:0}),z})(),Ke=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:F,decls:1,vars:0,template:function(A,le){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),He=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:F,decls:1,vars:0,template:function(A,le){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),ke=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:F,decls:1,vars:0,template:function(A,le){1&A&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),et=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275dir=e.lG2({type:z,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),z})(),Xe=(()=>{class z{constructor(A){this.directionality=A,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new T.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var A;this.dir=this.directionality.value,null===(A=this.directionality.change)||void 0===A||A.pipe((0,O.R)(this.destroy$)).subscribe(le=>{this.dir=le})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(A){A.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return z.\u0275fac=function(A){return new(A||z)(e.Y36(L.Is,8))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(A,le,Ie){if(1&A&&(e.Suo(Ie,He,5),e.Suo(Ie,ke,5),e.Suo(Ie,et,5)),2&A){let Oe;e.iGM(Oe=e.CRH())&&(le.nzListFooterComponent=Oe.first),e.iGM(Oe=e.CRH())&&(le.nzListPaginationComponent=Oe.first),e.iGM(Oe=e.CRH())&&(le.nzListLoadMoreDirective=Oe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(A,le){2&A&&e.ekj("ant-list-rtl","rtl"===le.dir)("ant-list-vertical","vertical"===le.nzItemLayout)("ant-list-lg","large"===le.nzSize)("ant-list-sm","small"===le.nzSize)("ant-list-split",le.nzSplit)("ant-list-bordered",le.nzBordered)("ant-list-loading",le.nzLoading)("ant-list-something-after-last-item",le.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:D,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(A,le){if(1&A&&(e.F$t(ee),e.YNc(0,he,3,1,"ng-template",null,0,e.W1O),e.YNc(2,ie,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,Z,1,2,"div",3),e.YNc(7,q,2,2,"div",4),e.YNc(8,ve,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,me,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,ae,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,C,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&A){const Ie=e.MAs(1);e.xp6(2),e.Q6J("ngIf",le.nzHeader),e.xp6(2),e.Q6J("nzSpinning",le.nzLoading),e.xp6(2),e.Q6J("ngIf",le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",le.nzGrid&&le.nzDataSource)("ngIfElse",Ie),e.xp6(1),e.Q6J("ngIf",!le.nzLoading&&le.nzDataSource&&0===le.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",le.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",le.nzLoadMore),e.xp6(2),e.Q6J("ngIf",le.nzPagination)}},directives:[Ke,V.W,je,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,I.yF)()],z.prototype,"nzBordered",void 0),(0,f.gn)([(0,I.yF)()],z.prototype,"nzLoading",void 0),(0,f.gn)([(0,I.yF)()],z.prototype,"nzSplit",void 0),z})(),tt=(()=>{class z{constructor(A,le,Ie,Oe){this.parentComp=Ie,this.cdr=Oe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,le.addClass(A.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(A=>{this.itemLayout=A,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return z.\u0275fac=function(A){return new(A||z)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(A,le,Ie){if(1&A&&e.Suo(Ie,Ee,5),2&A){let Oe;e.iGM(Oe=e.CRH())&&(le.listItemExtraDirective=Oe.first)}},hostVars:2,hostBindings:function(A,le){2&A&&e.ekj("ant-list-item-no-flex",le.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(A,le){if(1&A&&(e.F$t(v),e.YNc(0,Me,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Re,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,Ne,4,4,"ng-template",null,3,e.W1O),e.YNc(8,fe,6,4,"ng-container",4)),2&A){const Ie=e.MAs(7);e.xp6(8),e.Q6J("ngIf",le.isVerticalAndExtra)("ngIfElse",Ie)}},directives:[Ve,Ee,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,I.yF)()],z.prototype,"nzNoFlex",void 0),z})(),it=(()=>{class z{}return z.\u0275fac=function(A){return new(A||z)},z.\u0275mod=e.oAB({type:z}),z.\u0275inj=e.cJS({imports:[[L.vT,n.ez,V.j,M.Jb,o.Rt,s.T,B.Xo]]}),z})()},4219:(ue,w,i)=>{i.d(w,{Cc:()=>C,YV:()=>We,hl:()=>D,ip:()=>Je,r9:()=>Me,uA:()=>Ye,wO:()=>Ne});var e=i(655),o=i(5e3),n=i(8929),s=i(591),f=i(6787),I=i(6053),a=i(4850),G=i(1709),l=i(2198),h=i(7604),_=i(7138),T=i(5778),y=i(7625),j=i(1059),O=i(7545),H=i(1721),B=i(325),L=i(226),V=i(1314),M=i(6950),F=i(925),te=i(4832),b=i(9808),x=i(5017),c=i(969),$=i(8076);const S=["nz-submenu-title",""];function W(J,fe){if(1&J&&o._UZ(0,"i",4),2&J){const v=o.oxw();o.Q6J("nzType",v.nzIcon)}}function R(J,fe){if(1&J&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&J){const v=o.oxw();o.xp6(2),o.Oqu(v.nzTitle)}}function g(J,fe){1&J&&o._UZ(0,"i",8)}function Q(J,fe){1&J&&o._UZ(0,"i",9)}function U(J,fe){if(1&J&&(o.TgZ(0,"span",5),o.YNc(1,g,1,0,"i",6),o.YNc(2,Q,1,0,"i",7),o.qZA()),2&J){const v=o.oxw();o.Q6J("ngSwitch",v.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function N(J,fe){1&J&&o._UZ(0,"i",10)}const ne=["*"],oe=["nz-submenu-inline-child",""];function ge(J,fe){}const ze=["nz-submenu-none-inline-child",""];function Te(J,fe){}const De=["nz-submenu",""];function se(J,fe){1&J&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function he(J,fe){if(1&J&&o._UZ(0,"div",6),2&J){const v=o.oxw(),m=o.MAs(7);o.Q6J("mode",v.mode)("nzOpen",v.nzOpen)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("menuClass",v.nzMenuClassName)("templateOutlet",m)}}function E(J,fe){if(1&J){const v=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(pe){return o.CHM(v),o.oxw(2).setMouseEnterState(pe)}),o.qZA()}if(2&J){const v=o.oxw(2),m=o.MAs(7);o.Q6J("theme",v.theme)("mode",v.mode)("nzOpen",v.nzOpen)("position",v.position)("nzDisabled",v.nzDisabled)("isMenuInsideDropDown",v.isMenuInsideDropDown)("templateOutlet",m)("menuClass",v.nzMenuClassName)("@.disabled",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)("nzNoAnimation",null==v.noAnimation?null:v.noAnimation.nzNoAnimation)}}function ie(J,fe){if(1&J){const v=o.EpF();o.YNc(0,E,1,10,"ng-template",7),o.NdJ("positionChange",function(pe){return o.CHM(v),o.oxw().onPositionChange(pe)})}if(2&J){const v=o.oxw(),m=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",v.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",v.triggerWidth)("cdkConnectedOverlayOpen",v.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function Z(J,fe){1&J&&o.Hsn(0,1)}const Y=[[["","title",""]],"*"],K=["[title]","*"],q=["titleElement"],ve=["nz-menu-group",""];function re(J,fe){if(1&J&&(o.ynx(0),o._uU(1),o.BQk()),2&J){const v=o.oxw();o.xp6(1),o.Oqu(v.nzTitle)}}function me(J,fe){1&J&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const ae=["*",[["","title",""]]],_e=["*","[title]"],C=new o.OlP("NzIsInDropDownMenuToken"),ee=new o.OlP("NzMenuServiceLocalToken");let D=(()=>{class J{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(v){this.descendantMenuItemClick$.next(v)}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setMode(v){this.mode$.next(v)}setTheme(v){this.theme$.next(v)}setInlineIndent(v){this.inlineIndent$.next(v)}}return J.\u0275fac=function(v){return new(v||J)},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),de=(()=>{class J{constructor(v,m,pe){this.nzHostSubmenuService=v,this.nzMenuService=m,this.isMenuInsideDropDown=pe,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Ee=>"inline"===Ee?"inline":"vertical"===Ee||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ce=this.childMenuItemClick$.pipe((0,G.zg)(()=>this.mode$),(0,l.h)(Ee=>"inline"!==Ee||this.isMenuInsideDropDown),(0,h.h)(!1)),Pe=(0,f.T)(this.isMouseEnterTitleOrOverlay$,Ce);(0,I.aj)([this.isChildSubMenuOpen$,Pe]).pipe((0,a.U)(([Ee,Ue])=>Ee||Ue),(0,_.e)(150),(0,T.x)(),(0,y.R)(this.destroy$)).pipe((0,T.x)()).subscribe(Ee=>{this.setOpenStateWithoutDebounce(Ee),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Ee):this.nzMenuService.isChildSubMenuOpen$.next(Ee)})}onChildMenuItemClick(v){this.childMenuItemClick$.next(v)}setOpenStateWithoutDebounce(v){this.isCurrentSubMenuOpen$.next(v)}setMouseEnterTitleOrOverlayState(v){this.isMouseEnterTitleOrOverlay$.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.LFG(J,12),o.LFG(D),o.LFG(C))},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),Me=(()=>{class J{constructor(v,m,pe,Ce,Pe,Le,Ee,Ue){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=pe,this.isMenuInsideDropDown=Ce,this.directionality=Pe,this.routerLink=Le,this.routerLinkWithHref=Ee,this.router=Ue,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,y.R)(this.destroy$),(0,l.h)(Ve=>Ve instanceof B.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(v){this.nzDisabled?(v.preventDefault(),v.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(v){this.nzSelected=v,this.selected$.next(v)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const v=this.hasActiveLinks();this.nzSelected!==v&&(this.nzSelected=v,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const v=this.isLinkActive(this.router);return this.routerLink&&v(this.routerLink)||this.routerLinkWithHref&&v(this.routerLinkWithHref)||this.listOfRouterLink.some(v)||this.listOfRouterLinkWithHref.some(v)}isLinkActive(v){return m=>v.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var v;(0,I.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,pe])=>{this.inlinePaddingLeft="inline"===m?this.level*pe:null}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,y.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,y.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(v){v.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(de,8),o.Y36(C),o.Y36(L.Is,8),o.Y36(B.rH,8),o.Y36(B.yS,8),o.Y36(B.F0,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-item",""]],contentQueries:function(v,m,pe){if(1&v&&(o.Suo(pe,B.rH,5),o.Suo(pe,B.yS,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfRouterLink=Ce),o.iGM(Ce=o.CRH())&&(m.listOfRouterLinkWithHref=Ce)}},hostVars:20,hostBindings:function(v,m){1&v&&o.NdJ("click",function(Ce){return m.clickMenuItem(Ce)}),2&v&&(o.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,H.yF)()],J.prototype,"nzDisabled",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzSelected",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzDanger",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzMatchRouter",void 0),J})(),Se=(()=>{class J{constructor(v,m){this.cdr=v,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var v;this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.sBO),o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(v,m){1&v&&o.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(o.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:S,ngContentSelectors:ne,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(v,m){if(1&v&&(o.F$t(),o.YNc(0,W,1,1,"i",0),o.YNc(1,R,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,U,3,2,"span",2),o.YNc(4,N,1,0,"ng-template",null,3,o.W1O)),2&v){const pe=o.MAs(5);o.Q6J("ngIf",m.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(2),o.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",pe)}},directives:[b.O5,x.Ls,c.f,b.RF,b.n9,b.ED],encapsulation:2,changeDetection:0}),J})(),$e=(()=>{class J{constructor(v,m,pe){this.elementRef=v,this.renderer=m,this.directionality=pe,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:pe,menuClass:Ce}=v;(m||pe)&&this.calcMotionState(),Ce&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.removeClass(this.elementRef.nativeElement,Pe)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.addClass(this.elementRef.nativeElement,Pe)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(v,m){2&v&&(o.d8E("@collapseMotion",m.expandState),o.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:oe,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&o.YNc(0,ge,0,0,"ng-template",0),2&v&&o.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[b.tP],encapsulation:2,data:{animation:[$.J_]},changeDetection:0}),J})(),Re=(()=>{class J{constructor(v){this.directionality=v,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(v){this.nzDisabled||this.subMenuMouseState.next(v)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var v;this.calcMotionState(),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(v){const{mode:m,nzOpen:pe}=v;(m||pe)&&this.calcMotionState()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(L.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(v,m){1&v&&o.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&v&&(o.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),o.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:ze,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(v,m){1&v&&(o.TgZ(0,"div",0),o.YNc(1,Te,0,0,"ng-template",1),o.qZA()),2&v&&(o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),o.Q6J("ngClass",m.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[b.mk,b.tP],encapsulation:2,data:{animation:[$.$C,$.mF]},changeDetection:0}),J})();const Be=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],be=[M.yW.bottomLeft];let Ge=(()=>{class J{constructor(v,m,pe,Ce,Pe,Le,Ee){this.nzMenuService=v,this.cdr=m,this.nzSubmenuService=pe,this.platform=Ce,this.isMenuInsideDropDown=Pe,this.directionality=Le,this.noAnimation=Ee,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(v){this.nzSubmenuService.setOpenStateWithoutDebounce(v)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(v){this.isActive=v,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(v)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(v){const m=(0,M.d_)(v);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var v;this.nzMenuService.theme$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=be:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,I.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,pe])=>{this.inlinePaddingLeft="inline"===m?this.level*pe:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const v=this.listOfNzMenuItemDirective,m=v.changes,pe=(0,f.T)(m,...v.map(Ce=>Ce.selected$));m.pipe((0,j.O)(v),(0,O.w)(()=>pe),(0,j.O)(!0),(0,a.U)(()=>v.some(Ce=>Ce.nzSelected)),(0,y.R)(this.destroy$)).subscribe(Ce=>{this.isSelected=Ce,this.cdr.markForCheck()})}ngOnChanges(v){const{nzOpen:m}=v;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(de),o.Y36(F.t4),o.Y36(C),o.Y36(L.Is,8),o.Y36(te.P,9))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu",""]],contentQueries:function(v,m,pe){if(1&v&&(o.Suo(pe,J,5),o.Suo(pe,Me,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce)}},viewQuery:function(v,m){if(1&v&&o.Gf(V.xu,7,o.SBq),2&v){let pe;o.iGM(pe=o.CRH())&&(m.cdkOverlayOrigin=pe.first)}},hostVars:34,hostBindings:function(v,m){2&v&&o.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([de]),o.TTD],attrs:De,ngContentSelectors:K,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(v,m){if(1&v&&(o.F$t(Y),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Ce){return m.setMouseEnterState(Ce)})("toggleSubMenu",function(){return m.toggleSubMenu()}),o.YNc(2,se,1,0,"ng-content",2),o.qZA(),o.YNc(3,he,1,6,"div",3),o.YNc(4,ie,1,5,"ng-template",null,4,o.W1O),o.YNc(6,Z,1,0,"ng-template",null,5,o.W1O)),2&v){const pe=o.MAs(5);o.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!m.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===m.mode)("ngIfElse",pe)}},directives:[Se,$e,Re,V.xu,b.O5,te.P,V.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,H.yF)()],J.prototype,"nzOpen",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzDisabled",void 0),J})();function xe(J,fe){return J||fe}function Qe(J){return J||!1}let Ne=(()=>{class J{constructor(v,m,pe,Ce){this.nzMenuService=v,this.isMenuInsideDropDown=m,this.cdr=pe,this.directionality=Ce,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(v){this.nzInlineCollapsed=v,this.inlineCollapsed$.next(v)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(v=>v.nzOpen),this.listOfNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(v=>v.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var v;(0,I.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,pe])=>{this.actualMode=m?"vertical":pe,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(pe=>pe.setSelectedState(pe===m))}),this.dir=this.directionality.value,null===(v=this.directionality.change)||void 0===v||v.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(v){const{nzInlineCollapsed:m,nzInlineIndent:pe,nzTheme:Ce,nzMode:Pe}=v;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),pe&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ce&&this.nzMenuService.setTheme(this.nzTheme),Pe&&(this.mode$.next(this.nzMode),!v.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Le=>Le.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(D),o.Y36(C),o.Y36(o.sBO),o.Y36(L.Is,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu",""]],contentQueries:function(v,m,pe){if(1&v&&(o.Suo(pe,Me,5),o.Suo(pe,Ge,5)),2&v){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce)}},hostVars:34,hostBindings:function(v,m){2&v&&o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:ee,useClass:D},{provide:D,useFactory:xe,deps:[[new o.tp0,new o.FiY,D],ee]},{provide:C,useFactory:Qe,deps:[[new o.tp0,new o.FiY,C]]}]),o.TTD]}),(0,e.gn)([(0,H.yF)()],J.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,H.yF)()],J.prototype,"nzSelectable",void 0),J})();function Ze(J){return J||!1}let Ye=(()=>{class J{constructor(v,m,pe){this.elementRef=v,this.renderer=m,this.isMenuInsideDropDown=pe,this.renderer.addClass(v.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const v=this.titleElement.nativeElement.nextElementSibling;v&&this.renderer.addClass(v,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(C))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-menu-group",""]],viewQuery:function(v,m){if(1&v&&o.Gf(q,5),2&v){let pe;o.iGM(pe=o.CRH())&&(m.titleElement=pe.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:C,useFactory:Ze,deps:[[new o.tp0,new o.FiY,C]]}])],attrs:ve,ngContentSelectors:_e,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(v,m){1&v&&(o.F$t(ae),o.TgZ(0,"div",null,0),o.YNc(2,re,2,1,"ng-container",1),o.YNc(3,me,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&v&&(o.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(1),o.Q6J("ngIf",!m.nzTitle))},directives:[c.f,b.O5],encapsulation:2,changeDetection:0}),J})(),We=(()=>{class J{constructor(v,m){this.elementRef=v,this.renderer=m,this.renderer.addClass(v.nativeElement,"ant-dropdown-menu-item-divider")}}return J.\u0275fac=function(v){return new(v||J)(o.Y36(o.SBq),o.Y36(o.Qsj))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),J})(),Je=(()=>{class J{}return J.\u0275fac=function(v){return new(v||J)},J.\u0275mod=o.oAB({type:J}),J.\u0275inj=o.cJS({imports:[[L.vT,b.ez,F.ud,V.U8,x.PV,te.g,c.T]]}),J})()},3610:(ue,w,i)=>{i.d(w,{$6:()=>M,lU:()=>L});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),f=i(1721),I=i(404),a=i(4832),G=i(226),l=i(1314),h=i(6950),_=i(9808),T=i(969);function y(F,te){if(1&F&&(o.ynx(0),o._uU(1),o.BQk()),2&F){const b=o.oxw(3);o.xp6(1),o.Oqu(b.nzTitle)}}function j(F,te){if(1&F&&(o.TgZ(0,"div",10),o.YNc(1,y,2,1,"ng-container",9),o.qZA()),2&F){const b=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",b.nzTitle)}}function O(F,te){if(1&F&&(o.ynx(0),o._uU(1),o.BQk()),2&F){const b=o.oxw(2);o.xp6(1),o.Oqu(b.nzContent)}}function H(F,te){if(1&F&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,j,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,O,2,1,"ng-container",9),o.qZA()()()()()),2&F){const b=o.oxw();o.ekj("ant-popover-rtl","rtl"===b.dir),o.Q6J("ngClass",b._classMap)("ngStyle",b.nzOverlayStyle)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",b.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",b.nzContent)}}let L=(()=>{class F extends I.Mg{constructor(b,x,c,$,S,W){super(b,x,c,$,S,W),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(V)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return F.\u0275fac=function(b){return new(b||F)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(a.P,9),o.Y36(s.jY))},F.\u0275dir=o.lG2({type:F,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(b,x){2&b&&o.ekj("ant-popover-open",x.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,f.yF)()],F.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],F.prototype,"nzPopoverBackdrop",void 0),F})(),V=(()=>{class F extends I.XK{constructor(b,x,c){super(b,x,c),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,I.pu)(this.nzTitle)&&(0,I.pu)(this.nzContent)}}return F.\u0275fac=function(b){return new(b||F)(o.Y36(o.sBO),o.Y36(G.Is,8),o.Y36(a.P,9))},F.\u0275cmp=o.Xpm({type:F,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(b,x){1&b&&(o.YNc(0,H,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function($){return x.onClickOutside($)})("detach",function(){return x.hide()})("positionChange",function($){return x.onPositionChange($)})),2&b&&o.Q6J("cdkConnectedOverlayHasBackdrop",x.hasBackdrop)("cdkConnectedOverlayOrigin",x.origin)("cdkConnectedOverlayPositions",x._positions)("cdkConnectedOverlayOpen",x._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",x.nzArrowPointAtCenter)},directives:[l.pI,h.hQ,_.mk,_.PC,a.P,_.O5,T.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),F})(),M=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=o.oAB({type:F}),F.\u0275inj=o.cJS({imports:[[G.vT,_.ez,l.U8,T.T,h.e4,a.g,I.cg]]}),F})()},8144:(ue,w,i)=>{i.d(w,{$1:()=>j,NU:()=>B,zf:()=>L});var e=i(226),o=i(9808),n=i(5e3),s=i(655),f=i(8929),I=i(7625),a=i(9439),G=i(1721);function l(V,M){}const h=function(V){return{$implicit:V}};function _(V,M){if(1&V&&(n.TgZ(0,"span",4),n.YNc(1,l,0,0,"ng-template",5),n.qZA()),2&V){const F=n.oxw(),te=F.last,b=F.index,x=n.oxw();n.Udp("margin-bottom","vertical"===x.nzDirection?te?null:x.spaceSize:null,"px")("margin-right","horizontal"===x.nzDirection?te?null:x.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",x.nzSplit)("ngTemplateOutletContext",n.VKq(6,h,b))}}function T(V,M){if(1&V&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,_,2,8,"span",3)),2&V){const F=M.$implicit,te=M.last,b=n.oxw();n.Udp("margin-bottom","vertical"===b.nzDirection?te?null:b.spaceSize:null,"px")("margin-right","horizontal"===b.nzDirection?te?null:b.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",F),n.xp6(1),n.Q6J("ngIf",b.nzSplit&&!te)}}const y=["*"];let j=(()=>{class V{constructor(){}}return V.\u0275fac=function(F){return new(F||V)},V.\u0275dir=n.lG2({type:V,selectors:[["","nzSpaceItem",""]]}),V})();const H={small:8,middle:16,large:24};let B=(()=>{class V{constructor(F,te){this.nzConfigService=F,this.cdr=te,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=H.small,this.destroy$=new f.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?H[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return V.\u0275fac=function(F){return new(F||V)(n.Y36(a.jY),n.Y36(n.sBO))},V.\u0275cmp=n.Xpm({type:V,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(F,te,b){if(1&F&&n.Suo(b,j,4,n.Rgc),2&F){let x;n.iGM(x=n.CRH())&&(te.items=x)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(F,te){2&F&&(n.Udp("flex-wrap",te.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===te.nzDirection)("ant-space-vertical","vertical"===te.nzDirection)("ant-space-align-start","start"===te.mergedAlign)("ant-space-align-end","end"===te.mergedAlign)("ant-space-align-center","center"===te.mergedAlign)("ant-space-align-baseline","baseline"===te.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:y,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(F,te){1&F&&(n.F$t(),n.Hsn(0),n.YNc(1,T,3,6,"ng-template",0)),2&F&&(n.xp6(1),n.Q6J("ngForOf",te.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,G.yF)()],V.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],V.prototype,"nzSize",void 0),V})(),L=(()=>{class V{}return V.\u0275fac=function(F){return new(F||V)},V.\u0275mod=n.oAB({type:V}),V.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),V})()},7525:(ue,w,i)=>{i.d(w,{W:()=>S,j:()=>W});var e=i(655),o=i(5e3),n=i(8929),s=i(591),f=i(839),I=i(8723),a=i(1177);class l{constructor(g){this.durationSelector=g}call(g,Q){return Q.subscribe(new h(g,this.durationSelector))}}class h extends a.Ds{constructor(g,Q){super(g),this.durationSelector=Q,this.hasValue=!1}_next(g){try{const Q=this.durationSelector.call(this,g);Q&&this._tryNext(g,Q)}catch(Q){this.destination.error(Q)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(g,Q){let U=this.durationSubscription;this.value=g,this.hasValue=!0,U&&(U.unsubscribe(),this.remove(U)),U=(0,a.ft)(Q,new a.IY(this)),U&&!U.closed&&this.add(this.durationSubscription=U)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const g=this.value,Q=this.durationSubscription;Q&&(this.durationSubscription=void 0,Q.unsubscribe(),this.remove(Q)),this.value=void 0,this.hasValue=!1,super._next(g)}}}var _=i(1059),T=i(5778),y=i(7545),j=i(7625),O=i(9439),H=i(1721),B=i(226),L=i(9808),V=i(7144);function M(R,g){1&R&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function F(R,g){}function te(R,g){if(1&R&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&R){const Q=o.oxw(2);o.xp6(1),o.Oqu(Q.nzTip)}}function b(R,g){if(1&R&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,F,0,0,"ng-template",6),o.YNc(3,te,2,1,"div",7),o.qZA()()),2&R){const Q=o.oxw(),U=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===Q.dir)("ant-spin-spinning",Q.isLoading)("ant-spin-lg","large"===Q.nzSize)("ant-spin-sm","small"===Q.nzSize)("ant-spin-show-text",Q.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",Q.nzIndicator||U),o.xp6(1),o.Q6J("ngIf",Q.nzTip)}}function x(R,g){if(1&R&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&R){const Q=o.oxw();o.ekj("ant-spin-blur",Q.isLoading)}}const c=["*"],$="spin";let S=(()=>{class R{constructor(Q,U,N){this.nzConfigService=Q,this.cdr=U,this.directionality=N,this._nzModuleName=$,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new f.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var Q;this.delay$.pipe((0,_.O)(this.nzDelay),(0,T.x)(),(0,y.w)(N=>0===N?this.spinning$:this.spinning$.pipe(function G(R){return g=>g.lift(new l(R))}(ne=>(0,I.H)(ne?N:0)))),(0,j.R)(this.destroy$)).subscribe(N=>{this.isLoading=N,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent($).pipe((0,j.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,j.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzSpinning:U,nzDelay:N}=Q;U&&this.spinning$.next(this.nzSpinning),N&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(Q){return new(Q||R)(o.Y36(O.jY),o.Y36(o.sBO),o.Y36(B.Is,8))},R.\u0275cmp=o.Xpm({type:R,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(Q,U){2&Q&&o.ekj("ant-spin-nested-loading",!U.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:c,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(Q,U){1&Q&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,b,4,12,"div",1),o.YNc(3,x,2,2,"div",2)),2&Q&&(o.xp6(2),o.Q6J("ngIf",U.isLoading),o.xp6(1),o.Q6J("ngIf",!U.nzSimple))},directives:[L.O5,L.tP],encapsulation:2}),(0,e.gn)([(0,O.oS)()],R.prototype,"nzIndicator",void 0),(0,e.gn)([(0,H.Rn)()],R.prototype,"nzDelay",void 0),(0,e.gn)([(0,H.yF)()],R.prototype,"nzSimple",void 0),(0,e.gn)([(0,H.yF)()],R.prototype,"nzSpinning",void 0),R})(),W=(()=>{class R{}return R.\u0275fac=function(Q){return new(Q||R)},R.\u0275mod=o.oAB({type:R}),R.\u0275inj=o.cJS({imports:[[B.vT,L.ez,V.Q8]]}),R})()},8481:(ue,w,i)=>{i.d(w,{X:()=>j,j:()=>y});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),f=i(8693),I=i(1721),a=i(226),G=i(9808),l=i(5017),h=i(3075);function _(O,H){if(1&O){const B=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(V){return o.CHM(B),o.oxw().closeTag(V)}),o.qZA()}}const T=["*"];let y=(()=>{class O{constructor(B,L,V,M){this.cdr=B,this.renderer=L,this.elementRef=V,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(B){this.nzOnClose.emit(B),B.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const B=this.elementRef.nativeElement,L=new RegExp(`(ant-tag-(?:${[...f.uf,...f.Bh].join("|")}))`,"g"),V=B.classList.toString(),M=[];let F=L.exec(V);for(;null!==F;)M.push(F[1]),F=L.exec(V);B.classList.remove(...M)}setPresetColor(){const B=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,f.o2)(this.nzColor)||(0,f.M8)(this.nzColor)),this.isPresetColor&&B.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var B;null===(B=this.directionality.change)||void 0===B||B.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.dir=L,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzColor:L}=B;L&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(B){return new(B||O)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(a.Is,8))},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(B,L){1&B&&o.NdJ("click",function(){return L.updateCheckedStatus()}),2&B&&(o.Udp("background-color",L.isPresetColor?"":L.nzColor),o.ekj("ant-tag-has-color",L.nzColor&&!L.isPresetColor)("ant-tag-checkable","checkable"===L.nzMode)("ant-tag-checkable-checked",L.nzChecked)("ant-tag-rtl","rtl"===L.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(B,L){1&B&&(o.F$t(),o.Hsn(0),o.YNc(1,_,1,0,"i",0)),2&B&&(o.xp6(1),o.Q6J("ngIf","closeable"===L.nzMode))},directives:[G.O5,l.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,I.yF)()],O.prototype,"nzChecked",void 0),O})(),j=(()=>{class O{}return O.\u0275fac=function(B){return new(B||O)},O.\u0275mod=o.oAB({type:O}),O.\u0275inj=o.cJS({imports:[[a.vT,G.ez,h.u5,l.PV]]}),O})()}}]);