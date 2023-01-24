"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(fe,Y,i)=>{i.d(Y,{H:()=>Se});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),_=i(325),T=i(8481),l=i(3610),$=i(3240),a=i(4850),h=i(2198),I=i(7630),C=i(7484),y=i(5017),K=i(3098),O=i(1894),X=i(8144),Q=i(6949),L=i(160);function v(ie,_e){if(1&ie&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&ie){const S=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",S.officialName," ")}}function M(ie,_e){if(1&ie&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&ie){const S=_e.$implicit;n.xp6(1),n.Oqu(S)}}function G(ie,_e){if(1&ie&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&ie){const S=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",S.geneAliases)}}function q(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/flags"),n.xp6(3),n.hij(" Flags (",S.flags.totalCount,") ")}}function Z(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",S.revisions.totalCount,") ")}}function F(ie,_e){if(1&ie&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&ie){const S=n.oxw().ngIf;n.MGl("routerLink","/genes/",S.id,"/comments"),n.xp6(3),n.hij(" Comments (",S.comments.totalCount,") ")}}function f(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,v,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,G,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,q,4,2,"a",10),n.YNc(12,Z,4,2,"a",10),n.YNc(13,F,4,2,"a",10),n.qZA()()()(),n.BQk()),2&ie){const S=_e.ngIf,se=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",se),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",S.geneAliases.length>0),n.xp6(2),n.hij(" ",S.variants.totalCount," ")}}let w=(()=>{class ie{constructor(S){this.gql=S}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,a.U)(({data:S})=>null==S?void 0:S.gene),(0,h.h)($.ep))}}return ie.\u0275fac=function(S){return new(S||ie)(n.Y36(I.rJ8))},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(S,se){1&S&&(n.TgZ(0,"div",0),n.YNc(1,f,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&S&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,se.gene$)))},directives:[s.O5,C.bd,y.Ls,K.R7,K.uj,s.sg,T.j,O.SK,O.t3,X.NU,X.$1,_.yS],pipes:[Q.fM,L.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ie})();var U=i(1730),R=i(4557);function x(ie,_e){}function d(ie,_e){if(1&ie&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,x,0,0,"ng-template",5),n.qZA(),n.BQk()),2&ie){const S=n.oxw(),se=n.MAs(2);n.xp6(1),n.Q6J("routerLink",S.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",se)}}function A(ie,_e){}function B(ie,_e){if(1&ie&&n._UZ(0,"cvc-gene-popover",8),2&ie){const S=n.oxw(2);n.Q6J("geneId",S.gene.id)}}function N(ie,_e){if(1&ie){const S=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(W){return n.CHM(S),n.oxw().itemClosed(W)}),n.YNc(1,A,0,0,"ng-template",5),n.qZA(),n.YNc(2,B,1,1,"ng-template",null,7,n.W1O)}if(2&ie){const S=n.MAs(3),se=n.oxw(),W=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",se.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",se.enablePopover?"hover":null)("nzMode",se.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",W)}}function ee(ie,_e){}function de(ie,_e){if(1&ie&&n.YNc(0,ee,0,0,"ng-template",5),2&ie){n.oxw();const S=n.MAs(2);n.Q6J("ngTemplateOutlet",S)}}function he(ie,_e){if(1&ie&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&ie){const S=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,S.gene.name,12)," ")}}function Te(ie,_e){if(1&ie&&n._uU(0),2&ie){const S=n.oxw(2);n.hij(" ",S.gene.name," ")}}function Me(ie,_e){if(1&ie&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,he,3,4,"ng-container",0),n.YNc(4,Te,1,1,"ng-template",null,11,n.W1O)),2&ie){const S=n.MAs(5),se=n.oxw();n.Q6J("flagged",se.gene.flagged)("entityColor",se.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",se.truncateLongName)("ngIfElse",S)}}let Se=(()=>{class ie extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return ie.\u0275fac=function(S){return new(S||ie)},ie.\u0275cmp=n.Xpm({type:ie,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(S,se){if(1&S&&(n.YNc(0,d,3,2,"ng-container",0),n.YNc(1,N,4,5,"ng-template",null,1,n.W1O),n.YNc(3,de,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Me,6,7,"ng-template",null,3,n.W1O)),2&S){const W=n.MAs(4);n.Q6J("ngIf",se.linked)("ngIfElse",W)}},directives:[s.O5,_.yS,s.tP,T.j,l.lU,w,U.b,y.Ls],pipes:[L.a,R.W],styles:[""],changeDetection:0}),ie})()},3309:(fe,Y,i)=>{i.d(Y,{U:()=>X});var e=i(9808),o=i(325),n=i(8481),s=i(5017),_=i(3610),T=i(6905),l=i(6949),$=i(7484),a=i(3098),h=i(1894),I=i(8144),C=i(5e3);let y=(()=>{class Q{}return Q.\u0275fac=function(v){return new(v||Q)},Q.\u0275mod=C.oAB({type:Q}),Q.\u0275inj=C.cJS({imports:[[e.ez,o.Bz,l.WG,$.vh,h.Jb,a.q6,n.X,s.PV,I.zf,T.s]]}),Q})();var K=i(4401),O=i(6429);let X=(()=>{class Q{}return Q.\u0275fac=function(v){return new(v||Q)},Q.\u0275mod=C.oAB({type:Q}),Q.\u0275inj=C.cJS({imports:[[e.ez,o.Bz,n.X,_.$6,s.PV,K.mS,T.s,y,O.C]]}),Q})()},1912:(fe,Y,i)=>{i.d(Y,{s:()=>K});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),_=i(3640),l=i(2160),$=i(3762),a=i(5017);let h=(()=>{class O{constructor(Q){this.cookies=Q,this.location=function T(O){return encodeURIComponent(O).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return O.\u0275fac=function(Q){return new(Q||O)(e.Y36(l.N))},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Q,L){1&Q&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&Q&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",L.location,"",e.LSH),e.xp6(1),e.s9C("value",L.xsrfToken))},directives:[$.n_,$.AA,o.ix,n.dQ,s.w,a.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),O})();function I(O,X){1&O&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function C(O,X){1&O&&e._uU(0," Sign In / Sign Up\n")}function y(O,X){if(1&O){const Q=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(Q),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let K=(()=>{class O{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Q,L){if(1&Q&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return L.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return L.authVisible=M})("nzOnCancel",function(){return L.handleCancel()}),e.YNc(4,I,4,0,"ng-container",2),e.qZA(),e.YNc(5,C,1,0,"ng-template",null,3,e.W1O),e.YNc(7,y,2,0,"ng-template",null,4,e.W1O)),2&Q){const v=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",L.authVisible)("nzTitle",v)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,_.du,_.Hf,h],styles:["[_nghost-%COMP%]{display:inline-block}"]}),O})()},1844:(fe,Y,i)=>{i.d(Y,{B:()=>$});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),_=i(5017),T=i(5e3);let l=(()=>{class a{}return a.\u0275fac=function(I){return new(I||a)},a.\u0275mod=T.oAB({type:a}),a.\u0275inj=T.cJS({imports:[[e.ez,_.PV,s.Ph,o.sL]]}),a})(),$=(()=>{class a{}return a.\u0275fac=function(I){return new(I||a)},a.\u0275mod=T.oAB({type:a}),a.\u0275inj=T.cJS({imports:[[e.ez,o.sL,n.Qp,l]]}),a})()},1730:(fe,Y,i)=>{i.d(Y,{b:()=>a});var e=i(9771),o=i(5e3),n=i(9808);const s=function(h){return{background:h}};function _(h,I){if(1&h&&o._UZ(0,"div",3),2&h){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.flagColor))}}function T(h,I){if(1&h&&o._UZ(0,"div",4),2&h){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.entityColor))}}function l(h,I){if(1&h&&o._UZ(0,"div",5),2&h){const C=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,C.entityColor))}}const $=["*"];let a=(()=>{class h{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return h.\u0275fac=function(C){return new(C||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:$,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(C,y){1&C&&(o.F$t(),o.Hsn(0),o.YNc(1,_,1,3,"div",0),o.YNc(2,T,1,3,"div",1),o.YNc(3,l,1,3,"div",2)),2&C&&(o.xp6(1),o.Q6J("ngIf",y.flagged),o.xp6(1),o.Q6J("ngIf",y.hasRevisions),o.xp6(1),o.Q6J("ngIf",y.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),h})()},6429:(fe,Y,i)=>{i.d(Y,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class _{}return _.\u0275fac=function(l){return new(l||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),_})()},6550:(fe,Y,i)=>{i.d(Y,{l:()=>T});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const _=["*"];let T=(()=>{class l{set href(a){if(!a)throw new Error("link-tag link Input requires string.");this._href=a}get href(){return this._href}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:_,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(a,h){1&a&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&a&&(e.Q6J("href",h.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",h.tooltip)("nzTooltipTrigger",h.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",h.iconName?h.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),l})()},4989:(fe,Y,i)=>{i.d(Y,{X:()=>T});var e=i(9808),o=i(404),n=i(8481),s=i(5017),_=i(5e3);let T=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=_.oAB({type:l}),l.\u0275inj=_.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),l})()},7881:(fe,Y,i)=>{i.d(Y,{L:()=>T});var e=i(5e3),o=i(9808),n=i(6699);function s(l,$){if(1&l&&e._UZ(0,"nz-avatar",2),2&l){const a=e.oxw();e.Q6J("nzSrc",a.user.profileImagePath)("nzShape",a.shape?a.shape:"circle")("nzSize",a.size)}}function _(l,$){if(1&l&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&l){const a=e.oxw();e.Q6J("nzSize",a.size)("nzText",e.lcZ(1,2,a.user.displayName.charAt(0)))}}let T=(()=>{class l{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(a,h){if(1&a&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,_,2,4,"ng-template",null,1,e.W1O)),2&a){const I=e.MAs(2);e.Q6J("ngIf",h.user.profileImagePath)("ngIfElse",I)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),l})()},5473:(fe,Y,i)=>{i.d(Y,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class _{}return _.\u0275fac=function(l){return new(l||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),_})()},8664:(fe,Y,i)=>{i.d(Y,{I:()=>pe});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),_=i(325),T=i(8481),l=i(3610),$=i(3240),a=i(4850),h=i(2198),I=i(7630),C=i(7484),y=i(5017),K=i(3193),O=i(3098),X=i(6550),Q=i(1894),L=i(8144),v=i(6949),M=i(160);function G(b,le){if(1&b&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&b){const ne=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",ne.name," ")}}function q(b,le){if(1&b&&n._UZ(0,"cvc-gene-tag",14),2&b){const ne=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",ne.gene)}}function Z(b,le){if(1&b&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&b){const ne=le.$implicit;n.xp6(1),n.Oqu(ne)}}function F(b,le){if(1&b&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,Z,2,1,"nz-tag",16),n.qZA()),2&b){const ne=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",ne.variantAliases)}}function f(b,le){if(1&b&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&b){const ne=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",ne.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",ne.alleleRegistryId," ")}}function w(b,le){if(1&b&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&b){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/flags"),n.xp6(3),n.hij(" Flags (",ne.flags.totalCount,") ")}}function U(b,le){if(1&b&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&b){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",ne.revisions.totalCount,") ")}}function R(b,le){if(1&b&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&b){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/comments"),n.xp6(3),n.hij(" Comments (",ne.comments.totalCount,") ")}}function x(b,le){if(1&b&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,G,3,4,"ng-template",null,3,n.W1O),n.YNc(4,q,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,F,2,1,"nz-descriptions-item",6),n.YNc(8,f,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,w,4,2,"a",12),n.YNc(15,U,4,2,"a",12),n.YNc(16,R,4,2,"a",12),n.qZA()()()(),n.BQk()),2&b){const ne=le.ngIf,te=n.MAs(3),ue=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",te)("nzExtra",ue),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",ne.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",ne.alleleRegistryId&&"unregistered"!=ne.alleleRegistryId),n.xp6(2),n.hij(" ",ne.molecularProfiles.totalCount," ")}}let d=(()=>{class b{constructor(ne){this.gql=ne}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,a.U)(({data:ne})=>null==ne?void 0:ne.variant),(0,h.h)($.ep))}}return b.\u0275fac=function(ne){return new(ne||b)(n.Y36(I.ZYZ))},b.\u0275cmp=n.Xpm({type:b,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ne,te){1&ne&&(n.TgZ(0,"div",0),n.YNc(1,x,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&ne&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,te.variant$)))},directives:[s.O5,C.bd,y.Ls,K.H,O.R7,O.uj,s.sg,T.j,X.l,Q.SK,Q.t3,L.NU,L.$1,_.yS],pipes:[v.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),b})();var A=i(1730),B=i(4557);function N(b,le){}function ee(b,le){if(1&b&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,N,0,0,"ng-template",5),n.qZA(),n.BQk()),2&b){const ne=n.oxw(),te=n.MAs(2);n.xp6(1),n.Q6J("routerLink",ne.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",te)}}function de(b,le){}function he(b,le){if(1&b&&n._UZ(0,"cvc-variant-popover",9),2&b){const ne=n.oxw(3);n.Q6J("variantId",ne.variant.id)}}function Te(b,le){if(1&b&&n.YNc(0,he,1,1,"cvc-variant-popover",8),2&b){const ne=n.oxw(2);n.Q6J("ngIf",ne.enablePopover)}}const Me=function(b){return{deprecated:b}};function Se(b,le){if(1&b){const ne=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(ue){return n.CHM(ne),n.oxw().itemClosed(ue)}),n.YNc(1,de,0,0,"ng-template",5),n.qZA(),n.YNc(2,Te,1,1,"ng-template",null,7,n.W1O)}if(2&b){const ne=n.MAs(3),te=n.oxw(),ue=n.MAs(6);n.Q6J("ngClass",n.VKq(6,Me,te.variant.deprecated))("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",ne)("nzPopoverTrigger",te.enablePopover?"hover":null)("nzMode",te.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",ue)}}function ie(b,le){}function _e(b,le){if(1&b&&n.YNc(0,ie,0,0,"ng-template",5),2&b){n.oxw();const ne=n.MAs(2);n.Q6J("ngTemplateOutlet",ne)}}function S(b,le){if(1&b&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&b){const ne=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,ne.variant.name,20)," ")}}function se(b,le){if(1&b&&n._uU(0),2&b){const ne=n.oxw(2);n.hij(" ",ne.variant.name," ")}}function W(b,le){if(1&b&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,S,3,4,"ng-container",0),n.YNc(3,se,1,1,"ng-template",null,12,n.W1O)),2&b){const ne=n.MAs(4),te=n.oxw();n.Q6J("flagged",te.variant.flagged)("entityColor",te.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",te.iconColor),n.xp6(1),n.Q6J("ngIf",te.truncateLongName)("ngIfElse",ne)}}let pe=(()=>{class b extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return b.\u0275fac=function(ne){return new(ne||b)},b.\u0275cmp=n.Xpm({type:b,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,te){if(1&ne&&(n.YNc(0,ee,3,2,"ng-container",0),n.YNc(1,Se,4,8,"ng-template",null,1,n.W1O),n.YNc(3,_e,1,1,"ng-template",null,2,n.W1O),n.YNc(5,W,5,5,"ng-template",null,3,n.W1O)),2&ne){const ue=n.MAs(4);n.Q6J("ngIf",te.linked)("ngIfElse",ue)}},directives:[s.O5,_.yS,s.tP,T.j,l.lU,s.mk,d,A.b,y.Ls],pipes:[B.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),b})()},4867:(fe,Y,i)=>{i.d(Y,{Q:()=>Q});var e=i(9808),o=i(325),n=i(8481),s=i(5017),_=i(3610),T=i(6949),l=i(7484),$=i(1894),a=i(3098),h=i(8144),I=i(3309),C=i(4989),y=i(6905),K=i(5e3);let O=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=K.oAB({type:L}),L.\u0275inj=K.cJS({imports:[[e.ez,o.Bz,T.WG,l.vh,$.Jb,a.q6,n.X,s.PV,h.zf,y.s,I.U,C.X]]}),L})();var X=i(6429);let Q=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=K.oAB({type:L}),L.\u0275inj=K.cJS({imports:[[e.ez,o.Bz,n.X,_.$6,s.PV,y.s,O,X.C]]}),L})()},160:(fe,Y,i)=>{i.d(Y,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(T){return(0,e.f)(T)}}return s.\u0275fac=function(T){return new(T||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(fe,Y,i)=>{i.d(Y,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(T){this.sanitizer=T}transform(T,l){if(!l||""==l)return T;const $=new RegExp(l,"gi"),a=T.match($);if(!a)return T;let h=T.replace($,`<span class='typeahead-match'>${a[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(h)}}return s.\u0275fac=function(T){return new(T||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(fe,Y,i)=>{i.d(Y,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class _{}return _.\u0275fac=function(l){return new(l||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),_})()},7742:(fe,Y,i)=>{i.d(Y,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(T){return T?(0,e.c)(T):""}}return s.\u0275fac=function(T){return new(T||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(fe,Y,i)=>{i.d(Y,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(_,T=25){if(_.length>T){let $=_.slice(0,T);var l=$.lastIndexOf(" ");return $.slice(0,l)+"\u2026"}return _}}return n.\u0275fac=function(_){return new(_||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(fe,Y,i)=>{i.d(Y,{a:()=>h});var e=i(655),o=i(7630),n=i(4987),s=i(373),_=i(4850),T=i(1059),l=i(5154),$=i(5e3),a=i(520);let h=class{constructor(C,y){function K(M){return!(!M||M.role!==o.i44.Admin)}function O(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function X(M){return!(!M||M.role!==o.i44.Curator)}function Q(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function L(M){var G,q;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===(G=M.mostRecentConflictOfInterestStatement)||void 0===G?void 0:G.coiStatus)!=o.Mgx.Conflict&&(null===(q=M.mostRecentConflictOfInterestStatement)||void 0===q?void 0:q.coiStatus)!=o.Mgx.Valid)}function v(M){if(M.mostRecentOrganizationId)return M.organizations.find(G=>G.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=C,this.http=y,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,_.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:Q(M),canModerate:L(M),isAdmin:K(M),isEditor:O(M),isCurator:X(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:v(M),invalidCoi:O(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,T.O)(this.initialViewer),(0,l.d)(1)),this.signedIn$=this.viewer$.pipe((0,_.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,_.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,_.U)(M=>K(M))),this.isEditor$=this.viewer$.pipe((0,_.U)(M=>O(M))),this.isCurator$=this.viewer$.pipe((0,_.U)(M=>X(M))),this.canCurate$=this.viewer$.pipe((0,_.U)(M=>Q(M))),this.canModerate$=this.viewer$.pipe((0,_.U)(M=>L(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};h.\u0275fac=function(C){return new(C||h)($.LFG(o.Tt7),$.LFG(a.eN))},h.\u0275prov=$.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h=(0,e.gn)([(0,n.c)()],h)},6654:(fe,Y,i)=>{i.d(Y,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(_){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(_){return new(_||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(_,T){},encapsulation:2}),n})()},915:(fe,Y,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(Y,{E:()=>e})},6530:(fe,Y,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}i.d(Y,{c:()=>e})},9771:(fe,Y,i)=>{i.d(Y,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(n){let s="#AAAAAA";if(n){const _=e.get(n);_&&(s=_)}return s}},6123:(fe,Y,i)=>{i.d(Y,{U:()=>_});var e=i(8929),o=i(591),n=i(7625),s=i(537);class _{constructor(l){this.networkErrorService=l}mutate(l,$,a,h){let I=new e.xQ,C={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{I.next(),I.complete()}};return C.isSubmitting$.next(!0),l.mutate($,a).pipe((0,n.R)(I),(0,s.x)(()=>{C.isSubmitting$.next(!1)})).subscribe({next:y=>{y.data&&h&&h(y.data)},error:y=>{y.graphQLErrors.length>0?C.submitError$.next(y.graphQLErrors.map(K=>K.message)):y.networkError&&this.networkErrorService.networkError$.next(y.networkError),C.cleanup()},complete:()=>{C.submitError$.next([]),C.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),C.cleanup()}}),C}}},9397:(fe,Y,i)=>{i.d(Y,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(_){this.host=_,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(_){return new(_||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(fe,Y,i)=>{i.d(Y,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(T){return new(T||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(fe,Y,i)=>{i.d(Y,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(T){return new(T||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(T,l){1&T&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(fe,Y,i)=>{i.d(Y,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(T){return new(T||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(fe,Y,i)=>{i.d(Y,{V:()=>$});var e=i(5e3),o=i(9808),n=i(2359);function s(a,h){if(1&a&&e._UZ(0,"nz-alert",4),2&a){const I=e.oxw();e.Q6J("nzDescription",I.errors[0])}}function _(a,h){if(1&a&&e._UZ(0,"nz-alert",5),2&a){e.oxw();const I=e.MAs(3);e.Q6J("nzDescription",I)}}function T(a,h){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const I=h.$implicit;e.xp6(1),e.Oqu(I)}}function l(a,h){if(1&a&&(e.TgZ(0,"ul",6),e.YNc(1,T,2,1,"li",7),e.qZA()),2&a){const I=e.oxw();e.xp6(1),e.Q6J("ngForOf",I.errors)}}let $=(()=>{class a{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return a.\u0275fac=function(I){return new(I||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(I,C){1&I&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,_,1,1,"nz-alert",1),e.YNc(2,l,2,1,"ng-template",2,3,e.W1O)),2&I&&(e.Q6J("ngIf",1===C.errors.length),e.xp6(1),e.Q6J("ngIf",C.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),a})()},7008:(fe,Y,i)=>{i.d(Y,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class _{}return _.\u0275fac=function(l){return new(l||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),_})()},6789:(fe,Y,i)=>{i.d(Y,{_:()=>C});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),_=i(6949),T=i(9552),l=i(8776),$=i(5017),a=i(404),h=i(5e3);let I=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=h.oAB({type:y}),y.\u0275inj=h.cJS({imports:[[e.ez,_.WG,l.X0,T.j,s.cD,$.PV,a.cg,n.s]]}),y})(),C=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=h.oAB({type:y}),y.\u0275inj=h.cJS({imports:[[e.ez,_.WG,l.X0,o.vh,T.j,s.cD,$.PV,a.cg,I,n.s]]}),y})()},1825:(fe,Y,i)=>{i.d(Y,{A:()=>l});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),_=i(6949),T=i(5e3);let l=(()=>{class ${}return $.\u0275fac=function(h){return new(h||$)},$.\u0275mod=T.oAB({type:$}),$.\u0275inj=T.cJS({imports:[[e.ez,_.WG,o.sL,n.Rt,s.b1]]}),$})()},6612:(fe,Y,i)=>{i.d(Y,{m:()=>$});var e=i(655),o=i(5e3),n=i(4987),s=i(5254),_=i(5778),l=i(4850);let $=class{constructor(h){this.el=h,this.domChange=new o.vpe,this.changes=new MutationObserver(I=>{(0,s.D)(I).pipe((0,l.U)(C=>{const y=C.target;return"class"===C.attributeName?{type:"class",change:y.classList.value,key:`${C.attributeName}:${y.classList.value}`}:"disabled"===C.attributeName?{type:"disabled",change:y.disabled,key:`${C.attributeName}:${y.disabled}`}:"hidden"===C.attributeName?{type:"hidden",change:y.hidden,key:`${C.attributeName}:${y.hidden}`}:{type:C.attributeName,change:"unknown change type",key:`${C.attributeName}:unknown-change-type`}}),function T(a,h){return(0,_.x)((I,C)=>h?h(I[a],C[a]):I[a]===C[a])}("key"),(0,n.t)(this)).subscribe(C=>{this.domChange.emit(C)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`),this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}};$.\u0275fac=function(h){return new(h||$)(o.Y36(o.SBq))},$.\u0275dir=o.lG2({type:$,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),$=(0,e.gn)([(0,n.c)()],$)},7905:(fe,Y,i)=>{i.d(Y,{nT:()=>T,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(l=s||(s={})).EVIDENCE="Evidence",l.ASSERTION="Assertion",s;var l})();class T{constructor($){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(a=>a):(0,n.o6)(o.kqt).map(a=>a),this.getSignificanceOptions=a=>{const h=this.validStates.get(a);return(null==h?void 0:h.significance)||[]},this.isValidSignificanceOption=(a,h)=>{const I=this.validStates.get(a);return!I||I.significance.includes(h)},this.getDirectionOptions=a=>{const h=this.validStates.get(a);return(null==h?void 0:h.entityDirection)||[]},this.isValidDirectionOption=(a,h)=>{const I=this.validStates.get(a);return!I||I.entityDirection.includes(h)},this.requiresDrug=a=>{const h=this.validStates.get(a);return void 0===h||h.requiresDrug},this.requiresDisease=a=>{const h=this.validStates.get(a);return void 0===h||h.requiresDisease},this.requiresAcmgCodes=a=>{const h=this.validStates.get(a);return void 0===h||h.requiresAcmgCodes},this.requiresAmpLevel=a=>{const h=this.validStates.get(a);return void 0===h||h.requiresAmpLevel},this.requiresClingenCodes=a=>{const h=this.validStates.get(a);return void 0===h||h.requiresClingenCodes},this.allowsFdaApproval=a=>{const h=this.validStates.get(a);return void 0===h||h.allowsFdaApproval},this.getOptionsFromEnums=a=>0===a.length?[]:a.map(h=>({value:h,label:(0,e.E)(h)})),this.entityName=$,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(fe,Y,i)=>{i.d(Y,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,significance:[e.y1h.Sensitivityresponse,e.y1h.Resistance,e.y1h.AdverseResponse,e.y1h.ReducedSensitivity,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,significance:[e.y1h.Positive,e.y1h.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,significance:[e.y1h.BetterOutcome,e.y1h.PoorOutcome,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,significance:[e.y1h.Oncogenicity,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,significance:[e.y1h.Predisposition,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,significance:[e.y1h.GainOfFunction,e.y1h.LossOfFunction,e.y1h.UnalteredFunction,e.y1h.Neomorphic,e.y1h.DominantNegative,e.y1h.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(fe,Y,i)=>{i.d(Y,{E:()=>K});var e=i(9808),o=i(3075),n=i(325),s=i(8776),_=i(304),T=i(6042),l=i(5e3),$=i(2643),a=i(2683);function h(O,X){if(1&O){const Q=l.EpF();l.TgZ(0,"button",2),l.NdJ("click",function(){return l.CHM(Q),l.oxw().callOnClick()}),l._uU(1," Cancel\n"),l.qZA()}}function I(O,X){if(1&O&&(l.TgZ(0,"button",3),l._uU(1," Cancel "),l.qZA()),2&O){const Q=l.oxw();l.Q6J("routerLink",Q.redirectPath)}}const y={name:"cancel-button",component:(()=>{class O extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Q,L,v,M;(null===(Q=this.field.templateOptions)||void 0===Q?void 0:Q.onClick)?this.callOnClick=null===(L=this.field.templateOptions)||void 0===L?void 0:L.onClick:(null===(v=this.field.templateOptions)||void 0===v?void 0:v.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return O.\u0275fac=function(){let X;return function(L){return(X||(X=l.n5z(O)))(L||O)}}(),O.\u0275cmp=l.Xpm({type:O,selectors:[["cvc-cancel-button"]],features:[l.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Q,L){if(1&Q&&(l.YNc(0,h,2,0,"button",0),l.YNc(1,I,2,1,"ng-template",null,1,l.W1O)),2&Q){const v=l.MAs(2);l.Q6J("ngIf",L.callOnClick)("ngIfElse",v)}},directives:[e.O5,T.ix,$.dQ,a.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),O})()};let K=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=l.oAB({type:O}),O.\u0275inj=l.cJS({imports:[[e.ez,o.u5,o.UX,T.sL,n.Bz,_.F,s.X0.forChild({types:[y]})]]}),O})()},4623:(fe,Y,i)=>{i.d(Y,{K:()=>h});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),_=i(3075);const l={name:"comment-textarea",component:(()=>{class I extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(y,K)=>{var O;return`Comments must be at least ${null===(O=K.templateOptions)||void 0===O?void 0:O.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return I.\u0275fac=function(){let C;return function(K){return(C||(C=n.n5z(I)))(K||I)}}(),I.\u0275cmp=n.Xpm({type:I,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(y,K){1&y&&n._UZ(0,"textarea",0),2&y&&n.Q6J("formControl",K.formControl)("formlyAttributes",K.field)},directives:[s.Zp,_.Fj,_.JJ,_.oH,o.VQ],styles:[""],changeDetection:0}),I})(),wrappers:["form-field"]};var $=i(4546),a=i(9139);let h=(()=>{class I{}return I.\u0275fac=function(y){return new(y||I)},I.\u0275mod=n.oAB({type:I}),I.\u0275inj=n.cJS({imports:[[e.ez,_.UX,o.X0.forChild({types:[l]}),a.u,$.U5,s.o7]]}),I})()},8390:(fe,Y,i)=>{i.d(Y,{N:()=>U});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),_=i(1047),T=i(5017),l=i(5e3),$=i(1894),a=i(8481),h=i(2683),I=i(6042),C=i(2643);function y(R,x){if(1&R){const d=l.EpF();l.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),l.NdJ("click",function(B){return l.CHM(d),l.oxw().addField(B)}),l._UZ(3,"i",5),l._uU(4),l.qZA()()()}if(2&R){const d=l.oxw();l.xp6(1),l.Q6J("nzValidateStatus",d.errorState),l.xp6(3),l.hij(" ",d.to.addText," ")}}function K(R,x){if(1&R){const d=l.EpF();l.TgZ(0,"nz-tag",4),l.NdJ("click",function(B){return l.CHM(d),l.oxw(4).addField(B)}),l._UZ(1,"i",5),l._uU(2),l.qZA()}if(2&R){const d=l.oxw(4);l.xp6(2),l.hij(" ",d.to.addText," ")}}function O(R,x){if(1&R&&(l.TgZ(0,"div",11),l.YNc(1,K,3,1,"nz-tag",12),l.qZA()),2&R){const d=l.oxw(2).$implicit,A=l.oxw();l.xp6(1),l.Q6J("ngIf",0==A.to.maxCount||A.to.maxCount>d.model.length)}}function X(R,x){if(1&R){const d=l.EpF();l.ynx(0),l.TgZ(1,"nz-tag",8)(2,"i",9),l.NdJ("click",function(){l.CHM(d);const B=l.oxw().index;return l.oxw().remove(B)}),l.qZA()(),l.YNc(3,O,2,1,"div",10),l.BQk()}if(2&R){const d=l.oxw().last;l.xp6(3),l.Q6J("ngIf",d)}}function Q(R,x){if(1&R){const d=l.EpF();l.ynx(0),l.TgZ(1,"div",13)(2,"button",14),l.NdJ("click",function(){l.CHM(d);const B=l.oxw().index;return l.oxw().remove(B)}),l._UZ(3,"i",15),l.qZA()(),l.BQk()}}function L(R,x){if(1&R&&(l.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),l._UZ(3,"formly-field",7),l.qZA(),l.YNc(4,X,4,1,"ng-container",1),l.YNc(5,Q,4,0,"ng-container",1),l.qZA()()),2&R){const d=x.$implicit,A=x.index;l.xp6(2),l.Q6J("ngClass",d.model[A]?"selected-field-col":"default-field-col"),l.xp6(1),l.Q6J("field",d),l.xp6(1),l.Q6J("ngIf",d.model[A]),l.xp6(1),l.Q6J("ngIf",!d.model[A])}}const v=function(R){return{hidden:R}},G={name:"multi-field",component:(()=>{class R extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(d){d&&d.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return R.\u0275fac=function(d){return new(d||R)},R.\u0275cmp=l.Xpm({type:R,selectors:[["cvc-multi-field-type"]],features:[l.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(d,A){1&d&&(l.TgZ(0,"div",0),l.YNc(1,y,5,2,"nz-form-item",1),l.YNc(2,L,6,4,"nz-form-item",2),l.qZA()),2&d&&(l.Q6J("ngClass",l.VKq(3,v,!0===A.to.hidden)),l.xp6(1),l.Q6J("ngIf",0===(null==A.field.fieldGroup?null:A.field.fieldGroup.length)),l.xp6(1),l.Q6J("ngForOf",A.field.fieldGroup))},directives:[e.mk,e.O5,$.SK,s.Nx,$.t3,s.Fd,a.j,T.Ls,h.w,e.sg,n.cw,I.ix,C.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),R})()};function q(R,x){if(1&R&&l._UZ(0,"formly-validation-message",3),2&R){const d=l.oxw();l.Q6J("field",d.field)}}const F={name:"cvc-field-errors",component:(()=>{class R extends n.n2{get errorState(){return this.showError?"error":""}}return R.\u0275fac=function(){let x;return function(A){return(x||(x=l.n5z(R)))(A||R)}}(),R.\u0275cmp=l.Xpm({type:R,selectors:[["cvc-field-errors-wrapper"]],features:[l.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(d,A){if(1&d&&(l.TgZ(0,"nz-form-control",0)(1,"p"),l._uU(2),l.qZA(),l.GkF(3,null,1),l.YNc(5,q,1,1,"ng-template",null,2,l.W1O),l.qZA()),2&d){const B=l.MAs(6);l.Q6J("nzValidateStatus",A.errorState)("nzErrorTip",B),l.xp6(2),l.hij("errorState: ",A.errorState,"")}},directives:[$.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),R})()};let f=(()=>{class R{}return R.\u0275fac=function(d){return new(d||R)},R.\u0275mod=l.oAB({type:R}),R.\u0275inj=l.cJS({imports:[[e.ez,o.UX,s.U5,n.X0.forChild({wrappers:[F]})]]}),R})();var w=i(1017);let U=(()=>{class R{}return R.\u0275fac=function(d){return new(d||R)},R.\u0275mod=l.oAB({type:R}),R.\u0275inj=l.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[G]}),o.UX,f,s.U5,_.o7,T.PV,I.sL,w.s,a.X]]}),R})()},7075:(fe,Y,i)=>{i.d(Y,{l:()=>K});var e=i(9808),o=i(8776),n=i(5e3),s=i(9180),_=i(6042),T=i(2643),l=i(6612),$=i(2683);const h={name:"submit-button",component:(()=>{class O extends o.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-submit-button-type"]],features:[n.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Q,L){1&Q&&(n.TgZ(0,"cvc-form-buttons")(1,"button",0),n._uU(2),n.qZA()()),2&Q&&(n.xp6(1),n.Q6J("disabled",!L.form.valid),n.xp6(1),n.hij(" ",L.to.submitLabel," "))},directives:[s.Z,_.ix,T.dQ,l.m,$.w],styles:[""],changeDetection:0}),O})()};var I=i(4375),C=i(1825),y=i(3075);let K=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[e.ez,y.UX,o.X0.forChild({types:[h]}),_.sL,I.R,C.A]]}),O})()},7462:(fe,Y,i)=>{i.d(Y,{o:()=>$});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),_=i(3075);const l={name:"cvc-textarea",component:(()=>{class a extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return a.\u0275fac=function(){let h;return function(C){return(h||(h=n.n5z(a)))(C||a)}}(),a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(I,C){1&I&&n._UZ(0,"textarea",0),2&I&&n.Q6J("formControl",C.formControl)("formlyAttributes",C.field)("nzAutosize",C.to.autosize)("placeholder",C.to.placeholder)},directives:[s.Zp,_.Fj,s.rh,_.JJ,_.oH,o.VQ],styles:[""],changeDetection:0}),a})(),wrappers:["form-field"]};let $=(()=>{class a{}return a.\u0275fac=function(I){return new(I||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[e.ez,_.u5,_.UX,o.X0.forChild({types:[l]}),s.o7]]}),a})()},4181:(fe,Y,i)=>{i.d(Y,{O:()=>ne});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),_=i(4987),T=i(8776),l=i(591),$=i(3240),a=i(1307),h=i(373),I=i(2198),C=i(4850),y=i(7630),K=i(9169),O=i(8054),X=i(9397),Q=i(3075),L=i(8144),v=i(3618),M=i(8664),G=i(685),q=i(822),Z=i(6042),F=i(2643),f=i(2683),w=i(5017),U=i(6949),R=i(8926);function x(te,ue){if(1&te&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,re.label,ze.to.searchString),n.oJD)}}function d(te,ue){1&te&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function A(te,ue){if(1&te&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,d,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.xp6(1),n.hij(" ID: ",re.variant.id," "),n.xp6(1),n.Q6J("ngIf",re.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,re.variant.variantAliases.join(", "),ze.to.searchString),n.oJD)}}function B(te,ue){1&te&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,x,2,4,"span",7),n.YNc(3,A,5,6,"span",8),n.qZA()()),2&te&&n.Q6J("nzValue",ue.$implicit.variant)}function N(te,ue){if(1&te){const re=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(V){return n.CHM(re),n.oxw().to.onSearch(V)}),n.YNc(2,B,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&te){const re=n.oxw(),ze=n.MAs(6),V=n.MAs(4);n.xp6(1),n.Q6J("formControl",re.formControl)("formlyAttributes",re.field)("nzPlaceHolder",re.to.placeholder?re.to.placeholder:null)("nzDropdownRender",re.to.allowCreate?ze:null)("nzShowArrow",re.to.showArrow)("nzNotFoundContent",V),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,re.variants$))}}function ee(te,ue){if(1&te&&n._UZ(0,"cvc-variant-tag",12),2&te){const re=n.oxw();n.Q6J("variant",re.formControl.value)}}function de(te,ue){if(1&te&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&te){const re=n.oxw(2);n.xp6(2),n.Oqu(re.to.searchString)}}function he(te,ue){if(1&te&&(n._UZ(0,"nz-empty",13),n.YNc(1,de,4,1,"ng-template",null,14,n.W1O)),2&te){const re=n.MAs(2);n.Q6J("nzNotFoundContent",re)}}function Te(te,ue){if(1&te&&n._UZ(0,"cvc-form-errors-alert",18),2&te){const re=n.oxw(4);n.Q6J("errors",re.errorMessages)}}function Me(te,ue){if(1&te){const re=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(re);const V=n.oxw(4);return V.addVariant(V.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&te){const re=n.oxw(4);n.Q6J("nzLoading",re.loading),n.xp6(4),n.Oqu(re.to.searchString)}}function Se(te,ue){if(1&te&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,Te,1,1,"cvc-form-errors-alert",16),n.YNc(3,Me,6,2,"button",17),n.qZA(),n.BQk()),2&te){const re=n.oxw(3);n.xp6(2),n.Q6J("ngIf",re.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==re.errorMessages.length)}}function ie(te,ue){if(1&te&&(n.ynx(0),n.YNc(1,Se,4,2,"ng-container",11),n.BQk()),2&te){const re=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==re.to.searchString)}}function _e(te,ue){if(1&te&&(n.YNc(0,ie,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&te){const re=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,re.displayAdd$))}}let S=class extends T.fS{constructor(ue,re,ze){super(),this.variantTypeaheadQuery=ue,this.networkErrorService=re,this.addVariantGQL=ze,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new l.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(V,ge,J)=>{var ve,De;let Ee=null===(De=null===(ve=null==J?void 0:J.parent)||void 0===ve?void 0:ve.parent)||void 0===De?void 0:De.model;if(Ee&&Ee.gene&&Ee.gene[0])return Ee.gene[0].id}}}}ngOnInit(){var ue,re;this.callbackSub=null===(re=null===(ue=this.field)||void 0===ue?void 0:ue.formControl)||void 0===re?void 0:re.valueChanges.subscribe(ze=>this.onVariantSelected.emit(ze.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,a.T)(1),(0,h.j)("data","variants","nodes"),(0,I.h)($.ep),(0,C.U)(ze=>ze.map(ge=>({value:ge.id,label:ge.name,variant:ge}))))}ngAfterViewInit(){this.to.onSearch=ue=>{ue.length<this.to.minLengthSearch||(this.to.searchString=ue,this.errorMessages=[],this.queryRef.refetch({name:ue,geneId:this.to.geneId}).then(re=>{this.displayAdd$.next(0==re.data.variants.nodes.filter(ze=>ze.name.toUpperCase()==ue.toUpperCase()).length)}))}}addVariant(ue){if(ue&&""!=ue&&this.to.geneId){let re=this.addVariantMutator.mutate(this.addVariantGQL,{name:ue,geneId:this.to.geneId},{},ze=>{var V;ze.addVariant&&(null===(V=this.field.formControl)||void 0===V||V.setValue({id:ze.addVariant.variant.id,name:ze.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0)});re.submitSuccess$.pipe((0,_.t)(this)).subscribe(ze=>{ze&&(this.success=!0)}),re.submitError$.pipe((0,_.t)(this)).subscribe(ze=>{ze&&(this.errorMessages=ze,this.success=!1)}),re.isSubmitting$.pipe((0,_.t)(this)).subscribe(ze=>{this.loading=ze})}}ngOnDestroy(){var ue;null===(ue=this.callbackSub)||void 0===ue||ue.unsubscribe()}};S.\u0275fac=function(ue){return new(ue||S)(n.Y36(y._eC),n.Y36(K.Y),n.Y36(y.LUc))},S.\u0275cmp=n.Xpm({type:S,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(ue,re){if(1&ue&&(n.YNc(0,N,4,9,"ng-container",0),n.YNc(1,ee,1,1,"ng-template",null,1,n.W1O),n.YNc(3,he,3,1,"ng-template",null,2,n.W1O),n.YNc(5,_e,2,3,"ng-template",null,3,n.W1O)),2&ue){const ze=n.MAs(2);n.Q6J("ngIf",!(null!=re.formControl.value&&re.formControl.value.id))("ngIfElse",ze)}},directives:[e.O5,O.Vq,X.l,Q.JJ,Q.oH,T.VQ,e.sg,O.Ip,L.NU,L.$1,v.ZU,M.I,G.p9,q.V,Z.ix,F.dQ,f.w,w.Ls],pipes:[U.fM,R.A],styles:[""],changeDetection:0}),S=(0,o.gn)([(0,_.c)()],S);const se={name:"variant-input",component:S};var W=i(4867),pe=i(7008),b=i(6905),le=i(8616);let ne=(()=>{class te{}return te.\u0275fac=function(re){return new(re||te)},te.\u0275mod=n.oAB({type:te}),te.\u0275inj=n.cJS({imports:[[e.ez,Q.UX,U.WG,T.X0.forChild({types:[se]}),O.LV,Z.sL,w.PV,L.zf,v.ZJ,G.Xo,W.Q,pe.B,b.s,le.Y]]}),te})()},5472:(fe,Y,i)=>{i.d(Y,{r:()=>C});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),_=i(5482),T=i(1894),l=i(1017),$=i(6789),a=i(5e3);const I={wrappers:[{name:"form-container",component:(()=>{class y extends n.n2{}return y.\u0275fac=function(){let K;return function(X){return(K||(K=a.n5z(y)))(X||y)}}(),y.\u0275cmp=a.Xpm({type:y,selectors:[["cvc-form-container-wrapper"]],features:[a.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(O,X){1&O&&(a.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA()()()),2&O&&(a.xp6(2),a.Q6J("nzTitle",X.to.label))},directives:[T.SK,T.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),y})()}]};let C=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=a.oAB({type:y}),y.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild(I),T.Jb,s.vh,_.cD,$._,l.s]]}),y})()},7695:(fe,Y,i)=>{i.d(Y,{C:()=>F});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),_=i(5482),T=i(1894),l=i(1017),$=i(6789),a=i(5e3),h=i(9552),I=i(5017),C=i(404);function y(f,w){1&f&&a._UZ(0,"div",9),2&f&&a.Q6J("innerHtml",w.ngIf,a.oJD)}function K(f,w){1&f&&(a.TgZ(0,"div",10),a._uU(1,"Help not available for this field."),a.qZA())}function O(f,w){if(1&f&&(a.TgZ(0,"nz-collapse-panel",6),a.YNc(1,y,1,1,"div",7),a.YNc(2,K,2,0,"ng-template",null,8,a.W1O),a.qZA()),2&f){const U=w.ngIf,R=a.MAs(3),x=a.oxw().$implicit,d=a.MAs(3);a.Q6J("nzHeader",U)("nzActive",x.templateOptions.hasFocus)("nzExtra",d),a.xp6(1),a.Q6J("ngIf",null==x.templateOptions?null:x.templateOptions.helpText)("ngIfElse",R)}}function X(f,w){if(1&f&&a._UZ(0,"formly-validation-message",14),2&f){const U=a.oxw(4).$implicit;a.Q6J("field",U)}}function Q(f,w){if(1&f&&(a.ynx(0),a._UZ(1,"i",12),a.YNc(2,X,1,1,"ng-template",null,13,a.W1O),a.BQk()),2&f){const U=a.MAs(3);a.xp6(1),a.Q6J("nzTooltipTitle",U)}}function L(f,w){if(1&f&&(a.ynx(0),a.YNc(1,Q,4,1,"ng-container",11),a.BQk()),2&f){const U=w.ngIf;a.xp6(1),a.Q6J("ngIf","INVALID"===U)}}function v(f,w){if(1&f&&(a.YNc(0,L,2,1,"ng-container",11),a.ALo(1,"ngrxPush")),2&f){const U=a.oxw().$implicit;a.Q6J("ngIf",a.lcZ(1,1,U.formControl.statusChanges))}}function M(f,w){if(1&f&&(a.ynx(0),a.YNc(1,O,4,5,"nz-collapse-panel",4),a.YNc(2,v,2,3,"ng-template",null,5,a.W1O),a.BQk()),2&f){const U=w.$implicit;a.xp6(1),a.Q6J("ngIf",null==U.templateOptions?null:U.templateOptions.label)}}let G=(()=>{class f{constructor(){}ngOnInit(){}}return f.\u0275fac=function(U){return new(U||f)},f.\u0275cmp=a.Xpm({type:f,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(U,R){1&U&&(a.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),a.YNc(3,M,4,1,"ng-container",3),a.qZA()()()),2&U&&(a.Q6J("nzOffsetTop",0)("nzTarget",R.affixTo),a.xp6(2),a.Q6J("nzBordered",!1),a.xp6(1),a.Q6J("ngForOf",R.fieldGroup))},directives:[h.$,s.bd,_.yH,e.sg,e.O5,_.Zv,I.Ls,C.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),f})();const Z={name:"form-info",component:(()=>{class f extends n.n2{}return f.\u0275fac=function(){let w;return function(R){return(w||(w=a.n5z(f)))(R||f)}}(),f.\u0275cmp=a.Xpm({type:f,selectors:[["cvc-form-info-wrapper"]],features:[a.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(U,R){if(1&U&&(a.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),a.GkF(3,null,3),a.qZA()(),a.TgZ(5,"nz-col",1)(6,"div",null,4),a._UZ(8,"cvc-form-info-card",5),a.qZA()()()),2&U){const x=a.MAs(7);a.xp6(1),a.Q6J("nzSpan",16),a.xp6(1),a.Q6J("nzTitle",R.to.label),a.xp6(3),a.Q6J("nzSpan",8),a.xp6(3),a.Q6J("fieldGroup",R.field.fieldGroup)("affixTo",x)}},directives:[T.SK,T.t3,s.bd,G],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),f})()};let F=(()=>{class f{}return f.\u0275fac=function(U){return new(U||f)},f.\u0275mod=a.oAB({type:f}),f.\u0275inj=a.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[Z]}),T.Jb,s.vh,_.cD,$._,l.s]]}),f})()},8785:(fe,Y,i)=>{i.d(Y,{t:()=>q});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),_=i(7630),T=i(9169),l=i(7484),$=i(9808),a=i(2359),h=i(1894),I=i(4546),C=i(822),y=i(7525),K=i(3868),O=i(3075),X=i(6042),Q=i(2643),L=i(2683);function v(Z,F){1&Z&&e._UZ(0,"nz-alert",7)}function M(Z,F){if(1&Z&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&Z){const f=e.oxw();e.xp6(1),e.Q6J("errors",f.errorMessages)}}function G(Z,F){if(1&Z){const f=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(U){return e.CHM(f),e.oxw().coiText=U}),e.qZA()()}if(2&Z){const f=e.oxw();e.xp6(1),e.Q6J("ngModel",f.coiText)}}let q=(()=>{class Z{constructor(f,w){this.updateCoiGql=f,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U(w)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let w=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});w.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{U&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),w.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{U&&(this.errorMessages=U,this.success=!1)}),w.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{this.loading=U})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(f){return new(f||Z)(e.Y36(_.IP1),e.Y36(T.Y))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(f,w){1&f&&(e.TgZ(0,"nz-card"),e.YNc(1,v,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(R){return w.coiStatus=R}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,G,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return w.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&f&&(e.xp6(1),e.Q6J("ngIf",w.success),e.xp6(1),e.Q6J("ngIf",w.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",w.loading),e.xp6(2),e.Q6J("ngModel",w.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===w.coiStatus),e.xp6(2),e.Q6J("disabled",w.loading||"coiPresent"===w.coiStatus&&(void 0===w.coiText||w.coiText.length<10)))},directives:[l.bd,$.O5,a.r,h.SK,I.Nx,C.V,y.W,K.Dg,O.JJ,O.On,K.Of,O.Fj,X.ix,Q.dQ,L.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),Z})()},330:(fe,Y,i)=>{i.d(Y,{e:()=>C});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),_=i(2359),T=i(4546),l=i(7008),$=i(3868),a=i(7525),h=i(6042),I=i(5e3);let C=(()=>{class y{}return y.\u0275fac=function(O){return new(O||y)},y.\u0275mod=I.oAB({type:y}),y.\u0275inj=I.cJS({imports:[[e.ez,o.u5,T.U5,o.UX,n.WG,s.vh,_.L,$.aF,h.sL,a.j,l.B]]}),y})()},3434:(fe,Y,i)=>{i.d(Y,{G:()=>q});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),_=i(6123),T=i(7625),l=i(7630),$=i(9169),a=i(325),h=i(7525),I=i(4546),C=i(9808),y=i(8776),K=i(1894),O=i(822),X=i(2359);function Q(Z,F){1&Z&&e.GkF(0)}function L(Z,F){if(1&Z&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&Z){const f=e.oxw(2);e.xp6(1),e.Q6J("errors",f.errorMessages)}}function v(Z,F){if(1&Z&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&Z){const f=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",f.newId,"/summary")}}function M(Z,F){if(1&Z&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,v,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&Z){const f=e.MAs(3),w=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",w.isNew?"Variant Created":"Variant Already Exists")("nzDescription",f)}}function G(Z,F){if(1&Z&&(e.YNc(0,L,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&Z){const f=e.oxw();e.Q6J("ngIf",f.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",f.success)}}let q=(()=>{class Z{constructor(f,w,U){this.submitVariantGQL=f,this.networkErrorService=w,this.route=U,this.onVariantSelected=new e.vpe,this.allowCreate=!0,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formFields=[],this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new _.U(w)}ngOnInit(){this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,maxCount:1,allowCreate:this.allowCreate}}]}]}submitVariant(f){let w=null==f?void 0:f.fields.gene[0].id,U=null==f?void 0:f.fields.variant[0].name;if(w&&U){let x=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:w,name:U},{},d=>{let A=d.addVariant;A&&(this.newId=A.variant.id,this.isNew=A.new,this.onVariantSelected.emit({variantId:A.variant.id,molecularProfile:A.variant.singleVariantMolecularProfile}))});x.submitSuccess$.pipe((0,T.R)(this.destroy$)).subscribe(d=>{d&&(this.success=!0)}),x.submitError$.pipe((0,T.R)(this.destroy$)).subscribe(d=>{d&&(this.errorMessages=d,this.success=!1)}),x.isSubmitting$.pipe((0,T.R)(this.destroy$)).subscribe(d=>{this.loading=d})}}onFormModelChange(f){this.formModel=f,f.fields.variant&&f.fields.variant[0]&&this.onVariantSelected.emit({variantId:f.fields.variant[0].id,molecularProfile:f.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Z.\u0275fac=function(f){return new(f||Z)(e.Y36(l.LUc),e.Y36($.Y),e.Y36(a.gz))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["cvc-variant-submit-form"]],inputs:{allowCreate:"allowCreate"},outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(f,w){if(1&f&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return w.submitVariant(w.formModel)}),e.YNc(2,Q,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(R){return w.onFormModelChange(R)}),e.qZA()()(),e.YNc(4,G,2,2,"ng-template",null,4,e.W1O)),2&f){const U=e.MAs(5);e.Q6J("nzSpinning",w.loading),e.xp6(1),e.Q6J("formGroup",w.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",U),e.xp6(1),e.Q6J("form",w.formGroup)("fields",w.formFields)("model",w.formModel)("options",w.formOptions)}},directives:[h.W,o._Y,o.JL,I.Lr,o.sg,C.tP,y.T7,C.O5,K.SK,I.Nx,O.V,X.r,a.yS],styles:[""]}),Z})()},7233:(fe,Y,i)=>{i.d(Y,{e:()=>We});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),_=i(7695),T=i(8390),l=i(7462),$=i(8776),a=i(1017),h=i(2359),I=i(6042),C=i(4546),y=i(1894),K=i(3075),O=i(325),X=i(3793),Q=i(304),L=i(8054),v=i(5e3);let M=(()=>{class oe{constructor(){console.log("FormCardDirective constructed.")}}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275dir=v.lG2({type:oe,selectors:[["",8,"cvc-form-card-control"]]}),oe})();var G=i(7484),q=i(404);function Z(oe,E){1&oe&&v._UZ(0,"i",7)}function F(oe,E){if(1&oe&&(v.TgZ(0,"nz-form-label",5),v._uU(1),v.YNc(2,Z,1,0,"i",6),v.qZA()),2&oe){const j=v.oxw();v.Q6J("nzRequired",j.to.required&&!0!==j.to.hideRequiredMarker)("nzFor",j.id),v.xp6(1),v.hij(" ",j.to.label," "),v.xp6(1),v.Q6J("ngIf",j.to.helpText)}}function f(oe,E){if(1&oe&&v._UZ(0,"formly-validation-message",9),2&oe){const j=v.oxw(2);v.Q6J("field",j.field)}}function w(oe,E){if(1&oe&&v.YNc(0,f,1,1,"formly-validation-message",8),2&oe){const j=v.oxw();v.Q6J("ngIf",j.showError)}}let U=(()=>{class oe extends $.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275cmp=v.Xpm({type:oe,selectors:[["form-card-wrapper"]],features:[v.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(j,p){if(1&j&&(v.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),v.GkF(3,null,2),v.qZA(),v.YNc(5,F,3,4,"ng-template",null,3,v.W1O),v.YNc(7,w,1,1,"ng-template",null,4,v.W1O),v.qZA()()),2&j){const m=v.MAs(6),ce=v.MAs(8);v.xp6(1),v.Q6J("nzValidateStatus",p.errorState)("nzErrorTip",ce),v.xp6(1),v.Q6J("nzTitle",m)("nzExtra",ce)}},directives:[y.SK,C.Nx,y.t3,C.Fd,M,G.bd,C.iK,e.O5,q.SY,$.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),oe})();var R=i(5017);const x={wrappers:[{name:"form-card",component:U}]};let d=(()=>{class oe{}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275mod=v.oAB({type:oe}),oe.\u0275inj=v.cJS({imports:[[e.ez,K.UX,C.U5,G.vh,R.PV,q.cg,$.X0.forChild(x),a.s]]}),oe})();var A=i(655),B=i(373),N=i(2198),ee=i(4850),de=i(3240),he=i(4987),Te=i(7630),Me=i(9397),Se=i(6949),ie=i(8144),_e=i(3618),S=i(3193),se=i(8926);function W(oe,E){if(1&oe&&(v._UZ(0,"span",10),v.ALo(1,"highlightTypeahead")),2&oe){const j=v.oxw().$implicit,p=v.oxw(3);v.Q6J("innerHtml",v.xi3(1,1,j.label,p.to.searchString),v.oJD)}}function pe(oe,E){if(1&oe&&(v._UZ(0,"span",12),v.ALo(1,"highlightTypeahead")),2&oe){const j=v.oxw(2).$implicit,p=v.oxw(3);v.Q6J("innerHtml",v.xi3(1,1,j.gene.geneAliases.join(", "),p.to.searchString),v.oJD)}}function b(oe,E){1&oe&&(v.ynx(0),v.YNc(1,pe,2,4,"span",11),v.BQk())}function le(oe,E){if(1&oe&&(v.TgZ(0,"nz-option",7)(1,"nz-space"),v.YNc(2,W,2,4,"span",8),v.YNc(3,b,2,0,"ng-container",9),v.qZA()()),2&oe){const j=E.$implicit;v.Q6J("nzLabel",j.tooltip)("nzValue",j.gene),v.xp6(3),v.Q6J("ngIf",j.gene.geneAliases.length>0)}}function ne(oe,E){if(1&oe&&(v.ynx(0),v.YNc(1,le,4,3,"nz-option",6),v.BQk()),2&oe){const j=E.ngrxLet;v.xp6(1),v.Q6J("ngForOf",j)}}function te(oe,E){1&oe&&v._uU(0," No gene found in CIViC that matches the string provided. ")}function ue(oe,E){if(1&oe){const j=v.EpF();v.ynx(0),v.TgZ(1,"nz-select",2,3),v.NdJ("nzOnSearch",function(m){return v.CHM(j),v.oxw().to.onSearch(m)}),v.YNc(3,ne,2,1,"ng-container",4),v.qZA(),v.YNc(4,te,1,0,"ng-template",null,5,v.W1O),v.BQk()}if(2&oe){const j=v.MAs(5),p=v.oxw();v.xp6(1),v.Q6J("formControl",p.formControl)("formlyAttributes",p.field)("nzPlaceHolder",p.to.placeholder?p.to.placeholder:null)("nzNotFoundContent",j)("nzShowArrow",p.to.showArrow)("nzFilterOption",p.to.filterOption),v.xp6(2),v.Q6J("ngrxLet",p.genes$)}}function re(oe,E){if(1&oe&&v._UZ(0,"cvc-gene-tag",13),2&oe){const j=v.oxw();v.Q6J("gene",j.formControl.value)}}let ze=class extends $.fS{constructor(E){super(),this.geneTypeaheadQuery=E,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,B.j)("data","geneTypeahead"),(0,N.h)(de.ep),(0,ee.U)(E=>E.map(j=>{let p=j.geneAliases.length>0?`Aliases: ${j.geneAliases.join(", ")}`:"";return{value:j.id,tooltip:`${j.name} (${j.entrezId}) ${p}`,label:`${j.name} (${j.entrezId})`,gene:j}})))}ngAfterViewInit(){this.to.onSearch=E=>{E.length<this.to.minLengthSearch||(this.to.searchString=E,this.queryRef.refetch({entrezSymbol:E}))}}};ze.\u0275fac=function(E){return new(E||ze)(v.Y36(Te.Q4m))},ze.\u0275cmp=v.Xpm({type:ze,selectors:[["cvc-gene-input"]],features:[v.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(E,j){if(1&E&&(v.YNc(0,ue,6,7,"ng-container",0),v.YNc(1,re,1,1,"ng-template",null,1,v.W1O)),2&E){const p=v.MAs(2);v.Q6J("ngIf",!(null!=j.formControl.value&&j.formControl.value.id))("ngIfElse",p)}},directives:[e.O5,L.Vq,Me.l,K.JJ,K.oH,$.VQ,Se.eJ,e.sg,L.Ip,ie.NU,ie.$1,_e.ZU,S.H],pipes:[se.A],styles:[""]}),ze=(0,A.gn)([(0,he.c)()],ze);const V={name:"cvc-gene-input",component:ze};var ge=i(3309),J=i(6905),ve=i(8616);let De=(()=>{class oe{}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275mod=v.oAB({type:oe}),oe.\u0275inj=v.cJS({imports:[[e.ez,K.UX,Se.WG,$.X0.forChild({types:[V]}),L.LV,ie.zf,_e.ZJ,ge.U,J.s,ve.Y]]}),oe})();const Le={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let Ge=(()=>{class oe{}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275mod=v.oAB({type:oe}),oe.\u0275inj=v.cJS({imports:[[e.ez,K.u5,K.UX,L.LV,Q.F,X.F,$.X0.forChild({types:[Le]}),De,T.N,d]]}),oe})();var Be=i(7525),Fe=i(5472),Ne=i(4889),$e=i(7075),Re=i(4181);const Ze={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(oe,E,j)=>{var p,m;const ce=null===(m=null===(p=null==j?void 0:j.parent)||void 0===p?void 0:p.templateOptions)||void 0===m?void 0:m.allowCreate;return void 0===ce||ce}}},hideExpression:(oe,E,j)=>{const p=(null==j?void 0:j.form)?j.form.get("gene"):null;return!p||!p.value||!p.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};let Ye=(()=>{class oe{}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275mod=v.oAB({type:oe}),oe.\u0275inj=v.cJS({imports:[[e.ez,K.u5,K.UX,L.LV,Q.F,X.F,$.X0.forChild({types:[Ze]}),Re.O,T.N]]}),oe})(),We=(()=>{class oe{}return oe.\u0275fac=function(j){return new(j||oe)},oe.\u0275mod=v.oAB({type:oe}),oe.\u0275inj=v.cJS({imports:[[e.ez,O.Bz,K.UX,a.s,C.U5,h.L,y.Jb,I.sL,Be.j,G.vh,ie.zf,_e.ZJ,$.X0,s.B,n.R,_.C,T.N,l.o,o.K,Ge,Fe.r,Ne.E,$e.l,Re.O,Ye,a.s]]}),oe})()},7630:(fe,Y,i)=>{i.d(Y,{$G1:()=>li,A4J:()=>qn,A94:()=>Rr,AMF:()=>es,AO2:()=>X,B0s:()=>er,B97:()=>Bn,BQZ:()=>f,BTF:()=>un,Bk6:()=>gs,BnY:()=>Zi,Bo4:()=>Qs,Cp0:()=>G,D9L:()=>sr,Del:()=>ls,DkJ:()=>On,E1C:()=>Mr,E8d:()=>h,EwB:()=>nr,F3s:()=>_e,FB1:()=>re,FId:()=>Hi,FJi:()=>Te,FKQ:()=>Ti,FNv:()=>A,FOU:()=>ir,Fvz:()=>U,GSh:()=>ii,GYx:()=>ni,Gbq:()=>Wt,Gnp:()=>Cs,HUC:()=>ne,Hmr:()=>Ao,IP1:()=>vr,IRu:()=>ue,IZ6:()=>po,JDX:()=>he,JQ3:()=>Di,KNk:()=>gi,Kk:()=>nn,Kmw:()=>wo,L5n:()=>Kn,L8L:()=>go,LLl:()=>jo,LUc:()=>wi,LiH:()=>Ds,Lr0:()=>ss,MYm:()=>to,Mgx:()=>I,MsG:()=>d,NQC:()=>de,NbY:()=>Fi,OHm:()=>bn,OIL:()=>_n,OfU:()=>C,P_b:()=>Xt,Q4m:()=>zi,Q_P:()=>Wi,Qtd:()=>Ns,Qzn:()=>Yn,R8w:()=>O,RMv:()=>Ni,ROj:()=>Er,RTy:()=>q,Rdc:()=>Go,SJD:()=>Ve,SWk:()=>pr,SrV:()=>Se,Sx0:()=>v,T1I:()=>dr,TNk:()=>Hr,Tg0:()=>ns,TiL:()=>co,Tq1:()=>an,Tt7:()=>Qo,UIR:()=>Ht,UWf:()=>ro,VZq:()=>Vn,Vj7:()=>ji,WFw:()=>Xi,WGV:()=>ds,WOS:()=>is,WRV:()=>ao,Ws:()=>si,X5f:()=>Ln,Xft:()=>Fr,YMi:()=>cn,Ybm:()=>mn,ZYZ:()=>No,Zhw:()=>vi,Zo2:()=>To,Zw1:()=>Gi,_3P:()=>T,_Wm:()=>a,_eC:()=>Qi,_jb:()=>oo,aw3:()=>Dr,bgg:()=>Zo,c$m:()=>Wo,cCu:()=>Xr,cEv:()=>zo,cMj:()=>Qr,d4o:()=>ze,db2:()=>ps,eY8:()=>fn,edp:()=>Ri,ejK:()=>Gr,fow:()=>B,fpJ:()=>Mi,fwG:()=>Eo,g0X:()=>vs,ghc:()=>Sn,gtM:()=>Ai,h01:()=>y,hVB:()=>zs,huM:()=>V,i44:()=>te,iGM:()=>Ho,iJT:()=>Gs,iST:()=>en,iXf:()=>gt,io:()=>$n,iwm:()=>n,jMx:()=>As,jw9:()=>S,k2T:()=>Ei,k7O:()=>rn,kQf:()=>kn,kQl:()=>se,kqt:()=>F,kv3:()=>pi,l$X:()=>Ro,l4w:()=>Cr,lYz:()=>ee,lcA:()=>xn,lfy:()=>Ci,m$d:()=>Es,m55:()=>Z,mII:()=>Xo,mdl:()=>_,mpB:()=>b,nnL:()=>Nr,o71:()=>pe,oRL:()=>x,otH:()=>Jn,pHu:()=>Wr,pP7:()=>J,pR8:()=>lr,q1D:()=>Fs,q8c:()=>In,q9q:()=>Pn,qf4:()=>Mo,rJ8:()=>yn,rZD:()=>Me,rzy:()=>hn,sBY:()=>jr,sLD:()=>Ts,sfv:()=>w,tI1:()=>L,tJ6:()=>Co,td:()=>jt,ti:()=>Un,tji:()=>Ar,tw_:()=>Do,u4i:()=>l,uBv:()=>$,ubO:()=>Rs,vMt:()=>ei,vv6:()=>Tr,vz2:()=>vo,wJ2:()=>Q,wRZ:()=>gr,wbP:()=>zr,wg3:()=>Zr,wkr:()=>le,wpb:()=>ge,xlL:()=>N,xsC:()=>di,y1h:()=>M,yic:()=>ie,yqR:()=>Ms,z8D:()=>wr,zwS:()=>Fo});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),_=(()=>{return(t=_||(_={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",_;var t})(),T=(()=>{return(t=T||(T={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",T;var t})(),l=(()=>{return(t=l||(l={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.DiseaseName="DISEASE_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.Summary="SUMMARY",t.TherapyName="THERAPY_NAME",l;var t})(),$=(()=>{return(t=$||($={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",$;var t})(),a=(()=>{return(t=a||(a={})).And="AND",t.Or="OR",a;var t})(),h=(()=>{return(t=h||(h={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",h;var t})(),I=(()=>{return(t=I||(I={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",I;var t})(),C=(()=>{return(t=C||(C={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",C;var t})(),y=(()=>{return(t=y||(y={})).Created="CREATED",t.LastModified="LAST_MODIFIED",y;var t})(),O=(()=>{return(t=O||(O={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",O;var t})(),X=(()=>{return(t=X||(X={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",t.DeprecatedVariant="DEPRECATED_VARIANT",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",X;var t})(),Q=(()=>{return(t=Q||(Q={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",Q;var t})(),L=(()=>{return(t=L||(L={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",L;var t})(),v=(()=>{return(t=v||(v={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",v;var t})(),M=(()=>{return(t=M||(M={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",M;var t})(),G=(()=>{return(t=G||(G={})).Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.TherapyName="THERAPY_NAME",t.VariantOrigin="VARIANT_ORIGIN",G;var t})(),q=(()=>{return(t=q||(q={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",q;var t})(),Z=(()=>{return(t=Z||(Z={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",Z;var t})(),F=(()=>{return(t=F||(F={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",F;var t})(),f=(()=>{return(t=f||(f={})).Open="OPEN",t.Resolved="RESOLVED",f;var t})(),w=(()=>{return(t=w||(w={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",w;var t})(),U=(()=>{return(t=U||(U={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.TherapyName="therapyName",t.VariantCount="variantCount",U;var t})(),x=(()=>{return(t=x||(x={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",x;var t})(),d=(()=>{return(t=d||(d={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",d;var t})(),A=(()=>{return(t=A||(A={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",t.MolecularProfileScore="molecularProfileScore",t.VariantCount="variantCount",A;var t})(),B=(()=>{return(t=B||(B={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",B;var t})(),N=(()=>{return(t=N||(N={})).Id="ID",t.Name="NAME",N;var t})(),ee=(()=>{return(t=ee||(ee={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",ee;var t})(),de=(()=>{return(t=de||(de={})).Read="READ",t.Unread="UNREAD",de;var t})(),he=(()=>{return(t=he||(he={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",he;var t})(),Te=(()=>{return(t=Te||(Te={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",Te;var t})(),Me=(()=>{return(t=Me||(Me={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Me;var t})(),Se=(()=>{return(t=Se||(Se={})).Asc="ASC",t.Desc="DESC",Se;var t})(),ie=(()=>{return(t=ie||(ie={})).Asco="ASCO",t.Ash="ASH",t.Pubmed="PUBMED",ie;var t})(),_e=(()=>{return(t=_e||(_e={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",_e;var t})(),S=(()=>{return(t=S||(S={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",S;var t})(),se=(()=>{return(t=se||(se={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",se;var t})(),pe=(()=>{return(t=pe||(pe={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",pe;var t})(),b=(()=>{return(t=b||(b={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",b;var t})(),le=(()=>{return(t=le||(le={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",le;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",ne;var t})(),te=(()=>{return(t=te||(te={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",te;var t})(),ue=(()=>{return(t=ue||(ue={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ue;var t})(),re=(()=>{return(t=re||(re={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",re;var t})(),ze=(()=>{return(t=ze||(ze={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ze;var t})(),V=(()=>{return(t=V||(V={})).CommonGermline="COMMON_GERMLINE",t.Mixed="MIXED",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",V;var t})(),ge=(()=>{return(t=ge||(ge={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",ge;var t})(),J=(()=>{return(t=J||(J={})).DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.TherapyName="therapyName",t.VariantName="variantName",J;var t})();const ve=e.Ps`
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
    `,De=e.Ps`
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
    ${ve}`,Ze=e.Ps`
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
    `,E=e.Ps`
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
    `,j=e.Ps`
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
    `,H=e.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,P=e.Ps`
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
    `,rt=e.Ps`
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
    `,Ve=e.Ps`
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
    `,Nt=e.Ps`
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
    `,Lt=e.Ps`
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
    `,Ft=(e.Ps`
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
    `),$t=e.Ps`
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
    ${st}`,St=e.Ps`
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
    `,Dt=e.Ps`
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
    `,D=e.Ps`
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
    ${De}`;let Wt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jt=e.Ps`
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
    molecularProfileCount
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
    ${Ye}`;let hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zn=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${We}`;let _n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${oe}`;let yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tn=e.Ps`
    query BrowseGenes($entrezSymbol: String, $therapyName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    therapyName: $therapyName
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
    ${E}`;let In=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mn=e.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${j}`;let Sn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dn=e.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${p}`;let On=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const En=e.Ps`
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
    ${z}`;let Mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const So=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${H}`;let Do=(()=>{class t extends e.AE{constructor(r){super(r),this.document=So}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oo=e.Ps`
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
    ${P}`;let Eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Po=e.Ps`
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
    ${ct}`;let Fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $o=e.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Oe}`;let Ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bo=e.Ps`
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
    ${rt}`;let Go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bo=e.Ps`
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
    `;let Qo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Uo=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let wo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vo=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${dt}`;let Zo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yo=e.Ps`
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
    `;let Wo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jo=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let jo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Jo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ko=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${st}`;let Ho=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ko=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${qe}`;let Xo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qo=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let ei=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ti=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ti}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oi=e.Ps`
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
    ${ut}`;let ii=(()=>{class t extends e.AE{constructor(r){super(r),this.document=oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ri=e.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let si=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ri}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ai=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let li=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ai}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ci=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let di=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ci}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ui=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let pi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mi=e.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${pt}`;let gi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=mi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fi=e.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let vi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hi=e.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${mt}`;let zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _i=e.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Ci=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yi=e.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ii=e.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Mi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ii}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Si=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Di=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Si}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oi=e.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Ei=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pi=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ai=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xi=e.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Ve}`;let Ni=(()=>{class t extends e.mm{constructor(r){super(r),this.document=xi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Li=e.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Fi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Li}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $i=e.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;let Ri=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bi=e.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${Nt}`;let Gi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bi=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;let Qi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ui=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Lt}`;let wi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;const Vi=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yi=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Ft}`;let Wi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ji=e.Ps`
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
    `;let ji=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ji}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ki=e.Ps`
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
    `;let Hi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${$t}`;const ki=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Xi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qi=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=qi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tr=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let nr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=tr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const or=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${vt}`;let ir=(()=>{class t extends e.AE{constructor(r){super(r),this.document=or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rr=e.Ps`
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
    `;let sr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=rr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ar=e.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${ht}`;let lr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ar}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cr=e.Ps`
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
    `;let dr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=cr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ur=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let pr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mr=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let gr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=mr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fr=e.Ps`
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
    `;let vr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hr=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let zr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=hr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _r=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Cr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yr=e.Ps`
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
    `;let Tr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ir=e.Ps`
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
    `;let Mr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ir}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sr=e.Ps`
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
    `;let Dr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Sr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Or=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${zt}`;let Er=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pr=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Ar=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Pr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xr=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Ct}`;let Nr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lr=e.Ps`
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
    `;let Fr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Lr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $r=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Rt}`;let Rr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const br=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${bt}`;let Gr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Br=e.Ps`
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
    `;let Qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ur=e.Ps`
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
    `;let wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vr=e.Ps`
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
    `;let Zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Gt}`;const Yr=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Bt}`;let Wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jr=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${yt}`;let jr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kr=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Tt}`;let Hr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kr=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${It}`;let Xr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qr=e.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Mt}`;let es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ts=e.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Dt}`;let ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ts}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const os=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Ot}`;let is=(()=>{class t extends e.AE{constructor(r){super(r),this.document=os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rs=e.Ps`
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
    ${Et}`;let ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const as=e.Ps`
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
    ${Pt}`;let ls=(()=>{class t extends e.AE{constructor(r){super(r),this.document=as}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cs=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let ds=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const us=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${At}`;let ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ms=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${xt}`;let gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fs=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${g}`;let vs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hs=e.Ps`
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
    `;let zs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _s=e.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${k}`;let Cs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ys=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${u}`;let Ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ys}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Is=e.Ps`
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
${D}
${xe}`;let Ms=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ss=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${xe}`;let Ds=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ss}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Os=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Ue}`;let Es=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ps=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let As=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xs=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${nt}`;let Ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const Ls=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Ut}`;let Fs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ls}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $s=e.Ps`
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
    `;let Rs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bs=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${wt}`;let Gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bs=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Zt}`;let Qs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(fe,Y,i)=>{i.r(Y),i.d(Y,{LayoutModule:()=>xt});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),_=i(8929),T=i(7625),l=i(655),$=i(4090),a=i(1721),h=i(4219),I=i(925),C=i(5017),y=i(226),K=i(5113);const O=["*"],X=["nz-sider-trigger",""];function Q(g,k){}function L(g,k){if(1&g&&(n.ynx(0),n.YNc(1,Q,0,0,"ng-template",3),n.BQk()),2&g){const u=n.oxw(),D=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||D)}}function v(g,k){}function M(g,k){if(1&g&&(n.ynx(0),n.YNc(1,v,0,0,"ng-template",3),n.BQk()),2&g){const u=n.oxw(),D=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||D)}}function G(g,k){if(1&g&&n._UZ(0,"i",5),2&g){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function q(g,k){if(1&g&&n._UZ(0,"i",5),2&g){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function Z(g,k){if(1&g&&(n.YNc(0,G,1,1,"i",4),n.YNc(1,q,1,1,"i",4)),2&g){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function F(g,k){1&g&&n._UZ(0,"i",6)}function f(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const me=n.oxw();return me.setCollapsed(!me.nzCollapsed)}),n.qZA()}if(2&g){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let w=(()=>{class g{constructor(u,D){this.elementRef=u,this.renderer=D,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:O,decls:1,vars:0,template:function(u,D){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),R=(()=>{class g{constructor(u,D){this.elementRef=u,this.renderer=D,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:O,decls:1,vars:0,template:function(u,D){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),x=(()=>{class g{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return g.\u0275fac=function(u){return new(u||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,D){2&u&&(n.Udp("width",D.isNormalTrigger?D.siderWidth:null),n.ekj("ant-layout-sider-trigger",D.isNormalTrigger)("ant-layout-sider-zero-width-trigger",D.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",D.isZeroTrigger&&D.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",D.isZeroTrigger&&!D.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:X,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,D){1&u&&(n.YNc(0,L,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,Z,2,2,"ng-template",null,1,n.W1O),n.YNc(4,F,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",D.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",D.isNormalTrigger))},directives:[e.O5,e.tP,C.Ls],encapsulation:2,changeDetection:0}),g})(),d=(()=>{class g{constructor(u,D,me){this.platform=u,this.cdr=D,this.breakpointService=me,this.destroy$=new _.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,a.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe($.ow,!0).pipe((0,T.R)(this.destroy$)).subscribe(u=>{const D=this.nzBreakpoint;D&&(0,a.ov)().subscribe(()=>{this.matchBreakPoint=!u[D],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:D,nzCollapsedWidth:me,nzWidth:ye}=u;(D||me||ye)&&this.updateStyleMap(),D&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(I.t4),n.Y36(n.sBO),n.Y36($.r3))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-sider"]],contentQueries:function(u,D,me){if(1&u&&n.Suo(me,h.wO,5),2&u){let ye;n.iGM(ye=n.CRH())&&(D.nzMenuDirective=ye.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,D){2&u&&(n.Udp("flex",D.flexSetting)("max-width",D.widthSetting)("min-width",D.widthSetting)("width",D.widthSetting),n.ekj("ant-layout-sider-zero-width",D.nzCollapsed&&0===D.nzCollapsedWidth)("ant-layout-sider-light","light"===D.nzTheme)("ant-layout-sider-dark","dark"===D.nzTheme)("ant-layout-sider-collapsed",D.nzCollapsed)("ant-layout-sider-has-trigger",D.nzCollapsible&&null!==D.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:O,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,D){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,f,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",D.nzCollapsible&&null!==D.nzTrigger))},directives:[x,e.O5],encapsulation:2,changeDetection:0}),(0,l.gn)([(0,a.yF)()],g.prototype,"nzReverseArrow",void 0),(0,l.gn)([(0,a.yF)()],g.prototype,"nzCollapsible",void 0),(0,l.gn)([(0,a.yF)()],g.prototype,"nzCollapsed",void 0),g})(),A=(()=>{class g{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new _.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,T.R)(this.destroy$)).subscribe(D=>{this.dir=D})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(y.Is,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-layout"]],contentQueries:function(u,D,me){if(1&u&&n.Suo(me,d,4),2&u){let ye;n.iGM(ye=n.CRH())&&(D.listOfNzSiderComponent=ye)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,D){2&u&&n.ekj("ant-layout-rtl","rtl"===D.dir)("ant-layout-has-sider",D.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:O,decls:1,vars:0,template:function(u,D){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),B=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[y.vT,e.ez,C.PV,K.xu,I.ud]]}),g})();var N=i(404),ee=i(1894),de=i(7630),he=i(8054),Te=i(353),Me=i(8514),Se=i(8896),_e=i(5254),S=i(3240),se=i(1307),W=i(3164),pe=i(7545),b=i(4850),le=i(2198),ne=i(5778),te=i(3075),ue=i(3618),re=i(6949);function ze(g,k){if(1&g&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&g){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function V(g,k){if(1&g&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,ze,3,1,"span",6),n.qZA()),2&g){const u=k.$implicit,D=n.oxw();n.Q6J("nzLabel",u.text)("nzValue",u.result),n.xp6(1),n.Q6J("nzType",D.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function ge(g,k){1&g&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let J=(()=>{class g{constructor(u,D){this.gql=u,this.router=D,this.onSearch$=new _.xQ,this.onSelect$=new _.xQ,this.response$=this.onSearch$.pipe((0,se.T)(1),(0,W.p)(300,Te.z,{leading:!1,trailing:!0}),(0,pe.w)(xe=>function ie(g,k=Se.E,u=Se.E){return(0,Me.P)(()=>g()?k:u)}(()=>void 0===this.queryRef,(0,Me.P)(()=>me(xe)),(0,Me.P)(()=>ye(xe))))),this.isLoading$=this.response$.pipe((0,b.U)(xe=>xe.loading),(0,le.h)(S.ep),(0,ne.x)()),this.result$=this.response$.pipe((0,b.U)(xe=>{var Ue;return null===(Ue=xe.data)||void 0===Ue?void 0:Ue.search}),(0,le.h)(S.ep)),this.option$=this.result$.pipe((0,b.U)(xe=>{const Ue=[];return xe.forEach(nt=>{nt&&Ue.push({text:nt.name,value:nt.id.toString(),result:nt})}),Ue})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const me=xe=>(this.queryRef=this.gql.watch({query:xe,highlightMatches:!0}),this.queryRef.valueChanges),ye=xe=>(0,_e.D)(this.queryRef.refetch({query:xe}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case de.rZD.EvidenceItem:return"civic:evidence";case de.rZD.VariantGroup:return"civic:variantgroup";case de.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let D;switch(u.resultType){case de.rZD.VariantGroup:D="variant-groups";break;case de.rZD.EvidenceItem:D="evidence";break;case de.rZD.MolecularProfile:D="molecular-profiles";break;default:D=`${u.resultType.toLowerCase()}s`}return`/${D}/${u.id}/summary`}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(de.ghc),n.Y36(o.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-quicksearch"]],viewQuery:function(u,D){if(1&u&&n.Gf(he.Vq,7),2&u){let me;n.iGM(me=n.CRH())&&(D.selectNode=me.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,D){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(ye){return D.selectedOpt=ye})("ngModelChange",function(ye){return D.onSelect$.next(ye)})("nzOnSearch",function(ye){return D.onSearch$.next(ye)}),n.YNc(1,V,4,5,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,ge,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",D.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,D.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,D.isLoading$)))},directives:[he.Vq,te.JJ,te.On,e.sg,he.Ip,C.Ls,e.O5,ue.ZU],pipes:[re.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),g})();var ve=i(1912),De=i(1059),Ee=i(2340),Le=i(8144),Ge=i(6042),Be=i(2643),Fe=i(2683),Ne=i(3677),$e=i(4401),Re=i(7881),be=i(3640),Ze=i(8785),Ye=i(3434);function We(g,k){if(1&g&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&g){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const oe=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function E(g,k){if(1&g&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&g){const u=n.oxw().ngrxLet,D=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,oe)),n.xp6(1),n.MGl("routerLink","/users/",D.id,"/notifications")}}const j=function(g){return{"update-coi":g}};function p(g,k){if(1&g&&n._UZ(0,"cvc-user-avatar",36),2&g){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,j,u.invalidCoi))}}function m(g,k){if(1&g&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&g){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function ce(g,k){1&g&&n._UZ(0,"i",27)}function Ce(g,k){if(1&g&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,p,1,5,"cvc-user-avatar",33),n.YNc(3,m,2,1,"div",34),n.YNc(4,ce,1,0,"i",35),n.qZA()()),2&g){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function Ae(g,k){1&g&&(n.TgZ(0,"nz-space",22),n.YNc(1,We,3,1,"button",23),n.YNc(2,E,3,5,"nz-badge",24),n.YNc(3,Ce,5,1,"button",25),n.qZA())}function Qe(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function Pe(g,k){1&g&&n._UZ(0,"li",14)}function we(g,k){1&g&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Je(g,k){1&g&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function je(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(g){return["/users",g]};function He(g,k){if(1&g){const u=n.EpF();n.ynx(0),n.YNc(1,Ae,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,Qe,4,0,"li",9),n.YNc(6,Pe,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,we,3,0,"li",12),n.YNc(10,Je,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,je,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&g){const u=k.ngIf,D=n.oxw();n.xp6(1),n.Q6J("ngrxLet",D.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(g,k){1&g&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function et(g,k){if(1&g){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function ot(g,k){1&g&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(g,k){1&g&&n._UZ(0,"cvc-variant-submit-form")}let tt=(()=>{class g{constructor(u,D){this.queryService=u,this.unreadCountGql=D,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Ee.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,b.U)(({data:me})=>me.notifications.unreadCount),(0,De.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,b.U)(({data:me})=>me.notifications.unreadCount),(0,De.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(s.a),n.Y36(de.Kmw))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,D){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return D.coiUpdateModalVisible=ye})("nzOnCancel",function(){return D.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,et,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return D.addVariantModalVisible=ye})("nzOnCancel",function(){return D.addVariantModalVisible=!1}),n.YNc(8,ot,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const me=n.MAs(4),ye=n.MAs(6),xe=n.MAs(9),Ue=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,D.viewer$)),n.xp6(2),n.Q6J("nzVisible",D.coiUpdateModalVisible)("nzContent",ye)("nzTitle",me)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",D.addVariantModalVisible)("nzContent",Ue)("nzTitle",xe)("nzFooter",null)}},directives:[e.O5,re.eJ,Le.NU,Le.$1,Ge.ix,Be.dQ,Fe.w,Ne.wA,Ne.cm,C.Ls,$e.x7,o.rH,Re.L,e.mk,Ne.RR,h.wO,h.r9,h.YV,o.yS,be.du,Ze.t,Ye.G],pipes:[re.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),g})();function at(g,k){1&g&&n._UZ(0,"img",60)}function it(g,k){1&g&&n._UZ(0,"img",61)}function z(g,k){1&g&&n._UZ(0,"cvc-login-button")}function H(g,k){1&g&&n._UZ(0,"cvc-viewer-button")}const P=function(g){return{"is-collapsed":g}},Ie=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class g{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(s.a))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-layout"]],decls:129,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/therapies"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row","","id","header-row"],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","200px","id","header-search"],["nz-col","","nzFlex","1 0 250px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","1 0 auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,D){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(ye){return D.isCollapsed=ye}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,at,1,0,"img",4),n.YNc(5,it,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Therapies"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()()()(),n.TgZ(81,"li",7)(82,"ul")(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span")(86,"a",38),n._uU(87,"Contributors"),n.qZA()()(),n.TgZ(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Organizations"),n.qZA()()()()(),n.TgZ(93,"li",7)(94,"ul")(95,"li",8),n._UZ(96,"i",41),n.TgZ(97,"span")(98,"a",42),n._uU(99,"Data Releases"),n.qZA()()()()()(),n.TgZ(100,"div",43),n._UZ(101,"img",44)(102,"img",45),n.qZA()(),n.TgZ(103,"nz-layout",46)(104,"nz-header")(105,"div",47)(106,"div",48)(107,"span",49),n.NdJ("click",function(){return D.isCollapsed=!D.isCollapsed}),n._UZ(108,"i",50),n.qZA()(),n.TgZ(109,"div",51),n._UZ(110,"cvc-quicksearch"),n.qZA(),n.TgZ(111,"div",52)(112,"ul",53)(113,"li",54)(114,"a",55),n._uU(115,"Home"),n.qZA()(),n.TgZ(116,"li",54)(117,"a",56),n._uU(118,"About CIViC"),n.qZA()(),n.TgZ(119,"li",54)(120,"a",57),n._uU(121,"Help"),n.qZA()()()(),n.TgZ(122,"div",58),n.YNc(123,z,1,0,"cvc-login-button",59),n.ALo(124,"async"),n.YNc(125,H,1,0,"cvc-viewer-button",59),n.ALo(126,"async"),n.qZA()()(),n.TgZ(127,"nz-content"),n._UZ(128,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",D.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(39,P,D.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!D.isCollapsed),n.xp6(1),n.Q6J("ngIf",D.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(41,P,D.isCollapsed))("nzInlineCollapsed",D.isCollapsed),n.xp6(1),n.Q6J("nzTitle",D.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",D.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Therapies":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",D.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",D.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTitle",D.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",D.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",D.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",D.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",D.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(43,P,D.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(45,P,D.isCollapsed)),n.xp6(5),n.Q6J("nzType",D.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(15),n.Q6J("ngIf",n.lcZ(124,35,D.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(126,37,D.signedIn$)))},directives:[A,d,o.yS,e.mk,e.O5,h.wO,h.uA,h.r9,N.SY,C.Ls,R,ee.SK,ee.t3,J,ve.s,tt,w,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-row[_ngcontent-%COMP%]{flex-wrap:nowrap}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),g})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(2556),i.e(1192),i.e(4184),i.e(3883),i.e(1634),i.e(3754),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(g=>g.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(2475),i.e(8482),i.e(7215),i.e(4024),i.e(8103),i.e(8592),i.e(933)]).then(i.bind(i,933)).then(g=>g.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(7717),i.e(7413)]).then(i.bind(i,1838)).then(g=>g.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(7434)]).then(i.bind(i,233)).then(g=>g.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"therapies",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8528)]).then(i.bind(i,830)).then(g=>g.TherapiesModule),data:{breadcrumb:"Therapies"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(g=>g.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(681)]).then(i.bind(i,681)).then(g=>g.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(8592),i.e(5625)]).then(i.bind(i,5625)).then(g=>g.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(g=>g.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(1634),i.e(9484),i.e(7717),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(g=>g.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(3883),i.e(9484),i.e(9475)]).then(i.bind(i,7563)).then(g=>g.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(2556),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(3218)]).then(i.bind(i,3218)).then(g=>g.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(g=>g.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(g=>g.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(g=>g.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(5564),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(g=>g.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(g=>g.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(g=>g.PagesModule),data:{breadcrumb:"Pages"}}]}];let Oe=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Ie)],o.Bz]}),g})();var ct=i(1017),rt=i(1047),dt=i(4546),qe=i(1314),ut=i(4832),pt=i(969),mt=i(2994),lt=i(8583),Ve=i(1159),gt=i(7429);const yt={provide:te.JU,useExisting:(0,n.Gpc)(()=>It),multi:!0};let It=(()=>{class g{constructor(u,D,me,ye,xe,Ue){this.ngZone=u,this.elementRef=D,this.overlay=me,this.viewContainerRef=ye,this.nzInputGroupWhitSuffixOrPrefixDirective=xe,this.document=Ue,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new _.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,T.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const D=u.keyCode,me=D===Ve.LH||D===Ve.JH;D===Ve.hY&&u.preventDefault(),!this.panelOpen||D!==Ve.hY&&D!==Ve.Mf?this.panelOpen&&D===Ve.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&me&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),D===Ve.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const D=u.target,me=this.document;let ye=D.value;"number"===D.type&&(ye=""===ye?null:parseFloat(ye)),this.previousValue!==ye&&(this.previousValue=ye,this.onChange(ye),this.canOpen()&&me.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,mt.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,lt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,le.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Tt(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new gt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const D=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(D),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const D=this.nzAutocomplete.getOption(u),me=D?D.getLabel():u;this.elementRef.nativeElement.value=null!=me?me:"",this.nzAutocomplete.nzBackfill||(this.previousValue=me)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(rt.ke,8),n.Y36(e.K0,8))},g.\u0275dir=n.lG2({type:g,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,D){1&u&&n.NdJ("focusin",function(){return D.handleFocus()})("blur",function(){return D.handleBlur()})("input",function(ye){return D.handleInput(ye)})("keydown",function(ye){return D.handleKeydown(ye)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([yt])]}),g})(),Mt=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[y.vT,e.ez,qe.U8,te.u5,pt.T,ut.g,rt.o7]]}),g})(),St=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,te.u5,o.Bz,re.WG,ue.ZJ,he.LV,rt.o7,dt.U5,C.PV,Mt]]}),g})();var Dt=i(1844),Ot=i(5473),Et=i(330),Pt=i(7233);let At=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,re.WG,Ne.b1,o.Bz,Ge.sL,Le.zf,C.PV,$e.mS,N.cg,be.Qp,Ot.H,Et.e,Pt.e]]}),g})(),xt=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[e.ez,Oe,C.PV,ee.Jb,B,h.ip,N.cg,ue.ZJ,ct.s,Dt.B,At,St]]}),g})()},3240:(fe,Y,i)=>{function e(l){return null!=l}i.d(Y,{ep:()=>e,lm:()=>o});const o=e},373:(fe,Y,i)=>{i.d(Y,{j:()=>o});var e=i(4850);function o(...s){const _=s.length;if(0===_)throw new Error("list of properties cannot be empty.");return T=>(0,e.U)(function n(s,_){return l=>{let $=l;for(let a=0;a<_;a++){const h=null!=$?$[s[a]]:void 0;if(void 0===h)return;$=h}return $}}(s,_))(T)}},3164:(fe,Y,i)=>{i.d(Y,{p:()=>l});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function l(I,C=o.P,y=n){return K=>K.lift(new $(I,C,y.leading,y.trailing))}class ${constructor(C,y,K,O){this.duration=C,this.scheduler=y,this.leading=K,this.trailing=O}call(C,y){return y.subscribe(new a(C,this.duration,this.scheduler,this.leading,this.trailing))}}class a extends e.L{constructor(C,y,K,O,X){super(C),this.duration=y,this.scheduler=K,this.leading=O,this.trailing=X,this._hasTrailingValue=!1,this._trailingValue=null}_next(C){this.throttled?this.trailing&&(this._trailingValue=C,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(h,this.duration,{subscriber:this})),this.leading?this.destination.next(C):this.trailing&&(this._trailingValue=C,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const C=this.throttled;C&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),C.unsubscribe(),this.remove(C),this.throttled=null)}}function h(I){const{subscriber:C}=I;C.clearThrottle()}},444:(fe,Y,i)=>{function e(F){return F!==String(parseFloat(F))}i.d(Y,{o6:()=>Z});var _=Object.getOwnPropertyNames?function o(F){return Object.getOwnPropertyNames(F).filter(function(f){return F.propertyIsEnumerable(f)&&e(f)})}:Object.keys?function n(F){return Object.keys(F).filter(e)}:function s(F){var f=[];for(var w in F)F.hasOwnProperty(w)&&F.propertyIsEnumerable(w)&&e(w)&&f.push(w);return f},T=function(){function F(f){this.enumObj=f,this.keysList=Object.freeze(_(f));for(var w=this.keysList.length,U=new Array(w),R=new Map,x=0;x<w;++x){var d=this.keysList[x],A=f[d];U[x]=A,R.set(A,d),this[x]=Object.freeze([d,A])}this.valuesList=Object.freeze(U),this.keysByValueMap=R,this.size=this.length=w,Object.freeze(this)}return F.prototype.toString=function(){return"[object EnumWrapper]"},F.prototype.keys=function(){var f,w=this,U=0;return(f={next:function(){var x={done:U>=w.length,value:w.keysList[U]};return++U,x}})[Symbol.iterator]=function(){return this},f},F.prototype.values=function(){var f,w=this,U=0;return(f={next:function(){var x={done:U>=w.length,value:w.valuesList[U]};return++U,x}})[Symbol.iterator]=function(){return this},f},F.prototype.entries=function(){var f,w=this,U=0;return(f={next:function(){var x={done:U>=w.length,value:w[U]};return++U,x}})[Symbol.iterator]=function(){return this},f},F.prototype[Symbol.iterator]=function(){return this.entries()},F.prototype.forEach=function(f,w){for(var U=this.length,R=0;R<U;++R){var x=this[R];f.call(w,x[1],x[0],this,R)}},F.prototype.map=function(f,w){for(var U=this.length,R=new Array(U),x=0;x<U;++x){var d=this[x];R[x]=f.call(w,d[1],d[0],this,x)}return R},F.prototype.getKeys=function(){return this.keysList.slice()},F.prototype.getValues=function(){return this.valuesList.slice()},F.prototype.getEntries=function(){return Array.prototype.slice.call(this)},F.prototype.indexOfKey=function(f){return this.keysList.indexOf(f)},F.prototype.indexOfValue=function(f){return this.valuesList.indexOf(f)},F.prototype.isKey=function(f){return null!=f&&e(f)&&this.enumObj.hasOwnProperty(f)},F.prototype.asKeyOrThrow=function(f){if(this.isKey(f))return f;throw new Error("Unexpected key: "+f+". Expected one of: "+this.getValues())},F.prototype.asKeyOrDefault=function(f,w){return this.isKey(f)?f:w},F.prototype.isValue=function(f){return null!=f&&this.keysByValueMap.has(f)},F.prototype.asValueOrThrow=function(f){if(this.isValue(f))return f;throw new Error("Unexpected value: "+f+". Expected one of: "+this.getValues())},F.prototype.asValueOrDefault=function(f,w){return this.isValue(f)?f:w},F.prototype.getKeyOrThrow=function(f){var w=null!=f?this.keysByValueMap.get(f):void 0;if(null!=w)return w;throw new Error("Unexpected value: "+f+". Expected one of: "+this.getValues())},F.prototype.getKeyOrDefault=function(f,w){var U=null!=f?this.keysByValueMap.get(f):void 0;return null!=U?U:w},F.prototype.getValueOrThrow=function(f){return this.enumObj[this.asKeyOrThrow(f)]},F.prototype.getValueOrDefault=function(f,w){return this.isKey(f)?this.enumObj[f]:w},F}();T.prototype[Symbol.toStringTag]="EnumWrapper";var l=Symbol("ts-enum-util:unhandledEntry"),$=Symbol("ts-enum-util:handleNull"),a=Symbol("ts-enum-util:handleUndefined"),h=Symbol("ts-enum-util:handleUnexpected");function I(F){return new Error("Unhandled value: "+F)}var C=function(){function F(f){this.value=f}return F.prototype.with=function(f){if(f.hasOwnProperty(this.value))return O(f[this.value],this.value);if(f[h])return O(f[h],this.value);throw new Error("Unexpected value: "+this.value)},F}(),y=function(){function F(){}return F.prototype.with=function(f){if(f[$])return O(f[$],null);if(f[h])return O(f[h],null);throw new Error("Unexpected value: null")},F}(),K=function(){function F(){}return F.prototype.with=function(f){if(f[a])return O(f[a],void 0);if(f[h])return O(f[h],void 0);throw new Error("Unexpected value: undefined")},F}();function O(F,f){if(F===l)throw I(f);return F(f)}var X=function(){function F(f){this.value=f}return F.prototype.with=function(f){if(f.hasOwnProperty(this.value))return v(f[this.value],this.value);if(f.hasOwnProperty(h))return v(f[h],this.value);throw new Error("Unexpected value: "+this.value)},F}(),Q=function(){function F(){}return F.prototype.with=function(f){if(f.hasOwnProperty($))return v(f[$],null);if(f.hasOwnProperty(h))return v(f[h],null);throw new Error("Unexpected value: null")},F}(),L=function(){function F(){}return F.prototype.with=function(f){if(f.hasOwnProperty(a))return v(f[a],void 0);if(f.hasOwnProperty(h))return v(f[h],void 0);throw new Error("Unexpected value: undefined")},F}();function v(F,f){if(F===l)throw I(f);return F}var q=new WeakMap;function Z(F){var f=q.get(F);return f||(f=new T(F),q.set(F,f)),f}Z.handleNull=$,Z.handleUndefined=a,Z.handleUnexpected=h,Z.unhandledEntry=l,Z.visitValue=function M(F){return null===F?new y:void 0===F?new K:new C(F)},Z.mapValue=function G(F){return null===F?new Q:void 0===F?new L:new X(F)}},4987:(fe,Y,i)=>{i.d(Y,{c:()=>F,t:()=>A});var e=i(8929),o=i(2654),T=(i(5254),i(8896),i(8139),i(5e3)),h=(i(1709),i(7770),i(7221),i(7625));const I=T.GuJ,y=Symbol("__destroy"),K=Symbol("__decoratorApplied");function O(N){return"string"==typeof N?Symbol(`__destroy__${N}`):y}function Q(N,ee){N[ee]||(N[ee]=new e.xQ)}function L(N,ee){N[ee]&&(N[ee].next(),N[ee].complete(),N[ee]=null)}function v(N){N instanceof o.w&&N.unsubscribe()}function G(N,ee){return function(){var de;if(N&&N.call(this),L(this,O()),ee.arrayName&&function M(N){Array.isArray(N)&&N.forEach(v)}(this[ee.arrayName]),ee.checkProperties)for(const he in this)(null===(de=ee.blackList)||void 0===de?void 0:de.includes(he))||v(this[he])}}function F(N={}){return ee=>{!function C(N){return!!N[I]}(ee)?function q(N,ee){N.prototype.ngOnDestroy=G(N.prototype.ngOnDestroy,ee)}(ee,N):function Z(N,ee){const de=N.\u0275pipe;de.onDestroy=G(de.onDestroy,ee)}(ee,N),function X(N){N.prototype[K]=!0}(ee)}}function A(N,ee){return de=>{const he=O(ee);return"string"==typeof ee?function d(N,ee,de){const he=N[ee];Q(N,de),N[ee]=function(){he.apply(this,arguments),L(this,de),N[ee]=he}}(N,ee,he):Q(N,he),de.pipe((0,h.R)(N[he]))}}Symbol("CheckerHasBeenSet")},9552:(fe,Y,i)=>{i.d(Y,{$:()=>w,j:()=>U});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),_=i(839),T=i(8929),l=i(6787),$=i(3753),a=i(7625),h=i(4850),I=i(3164),C=i(9439),y=i(1721),K=i(4090),O=i(925),X=i(5577),Q=i(226);const L=["fixedEl"],v=["*"];var M=(()=>{return(R=M||(M={})).resize="resize",R.scroll="scroll",R.touchstart="touchstart",R.touchmove="touchmove",R.touchend="touchend",R.pageshow="pageshow",R.load="LOAD",M;var R})();function q(R){return function G(R){return"undefined"!=typeof window&&R===window}(R)?{top:0,left:0,bottom:0}:R.getBoundingClientRect()}const F="ant-affix";let w=(()=>{class R{constructor(d,A,B,N,ee,de,he,Te,Me,Se){this.nzConfigService=B,this.scrollSrv=N,this.ngZone=ee,this.platform=de,this.renderer=he,this.nzResizeObserver=Te,this.cdr=Me,this.directionality=Se,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new _.t(1),this.destroy$=new T.xQ,this.placeholderNode=d.nativeElement,this.document=A}get target(){const d=this.nzTarget;return("string"==typeof d?this.document.querySelector(d):d)||window}ngOnInit(){var d;null===(d=this.directionality.change)||void 0===d||d.pipe((0,a.R)(this.destroy$)).subscribe(A=>{this.dir=A,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(d){const{nzOffsetBottom:A,nzOffsetTop:B,nzTarget:N}=d;(A||B)&&this.offsetChanged$.next(),N&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const d=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,l.T)(...Object.keys(M).map(A=>(0,$.R)(this.target,A)),this.offsetChanged$.pipe((0,h.U)(()=>({}))),this.nzResizeObserver.observe(d)).pipe((0,I.p)(20,void 0,{trailing:!0}),(0,a.R)(this.destroy$)).subscribe(A=>this.updatePosition(A))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(d,A){const B=d.getBoundingClientRect(),N=q(A),ee=this.scrollSrv.getScroll(A,!0),de=this.scrollSrv.getScroll(A,!1),he=this.document.body;return{top:B.top-N.top+ee-(he.clientTop||0),left:B.left-N.left+de-(he.clientLeft||0),width:B.width,height:B.height}}setAffixStyle(d,A){const B=this.affixStyle,N=this.target===window;if("scroll"===d.type&&B&&A&&N||(0,y.wU)(B,A))return;const ee=!!A,de=this.fixedEl.nativeElement;this.renderer.setStyle(de,"cssText",(0,y.GM)(A)),this.affixStyle=A,ee?de.classList.add(F):de.classList.remove(F),this.updateRtlClass(),(A&&!B||!A&&B)&&this.nzChange.emit(ee)}setPlaceholderStyle(d){(0,y.wU)(d,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,y.GM)(d)),this.placeholderStyle=d)}syncPlaceholderStyle(d){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const A={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),A)),this.setPlaceholderStyle(A)}updatePosition(d){if(!this.platform.isBrowser)return;const A=this.target;let B=this.nzOffsetTop;const N=this.scrollSrv.getScroll(A,!0),ee=this.getOffset(this.placeholderNode,A),de=this.fixedEl.nativeElement,he={width:de.offsetWidth,height:de.offsetHeight},Te={top:!1,bottom:!1};"number"!=typeof B&&"number"!=typeof this.nzOffsetBottom?(Te.top=!0,B=0):(Te.top="number"==typeof B,Te.bottom="number"==typeof this.nzOffsetBottom);const Me=q(A),Se=A.innerHeight||A.clientHeight;if(N>=ee.top-B&&Te.top){const ie=ee.width;this.setAffixStyle(d,{position:"fixed",top:Me.top+B,left:Me.left+ee.left,width:ie}),this.setPlaceholderStyle({width:ie,height:he.height})}else if(N<=ee.top+he.height+this.nzOffsetBottom-Se&&Te.bottom){const ie=A===window?0:window.innerHeight-Me.bottom,_e=ee.width;this.setAffixStyle(d,{position:"fixed",bottom:ie+this.nzOffsetBottom,left:Me.left+ee.left,width:_e}),this.setPlaceholderStyle({width:_e,height:ee.height})}else d.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(d),this.setPlaceholderStyle();"resize"===d.type&&this.syncPlaceholderStyle(d)}updateRtlClass(){const d=this.fixedEl.nativeElement;"rtl"===this.dir&&d.classList.contains(F)?d.classList.add(`${F}-rtl`):d.classList.remove(`${F}-rtl`)}}return R.\u0275fac=function(d){return new(d||R)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(C.jY),n.Y36(K.MF),n.Y36(n.R0b),n.Y36(O.t4),n.Y36(n.Qsj),n.Y36(X.D3),n.Y36(n.sBO),n.Y36(Q.Is,8))},R.\u0275cmp=n.Xpm({type:R,selectors:[["nz-affix"]],viewQuery:function(d,A){if(1&d&&n.Gf(L,7),2&d){let B;n.iGM(B=n.CRH())&&(A.fixedEl=B.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:v,decls:3,vars:0,consts:[["fixedEl",""]],template:function(d,A){1&d&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,C.oS)(),(0,y.Rn)(void 0)],R.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,C.oS)(),(0,y.Rn)(void 0)],R.prototype,"nzOffsetBottom",void 0),R})(),U=(()=>{class R{}return R.\u0275fac=function(d){return new(d||R)},R.\u0275mod=n.oAB({type:R}),R.\u0275inj=n.cJS({imports:[[Q.vT,o.ez,O.ud]]}),R})()},6699:(fe,Y,i)=>{i.d(Y,{Dz:()=>O,Rt:()=>Q});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),_=i(925),T=i(9808),l=i(5017),$=i(226);const a=["textEl"];function h(L,v){if(1&L&&o._UZ(0,"i",3),2&L){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function I(L,v){if(1&L){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(q){return o.CHM(M),o.oxw().imgError(q)}),o.qZA()}if(2&L){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function C(L,v){if(1&L&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&L){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let O=(()=>{class L{constructor(M,G,q,Z){this.nzConfigService=M,this.elementRef=G,this.cdr=q,this.platform=Z,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,G=this.el.getBoundingClientRect().width,q=2*this.nzGap<G?2*this.nzGap:8;this.textStyles={transform:`scale(${G-q<M?(G-q)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return L.\u0275fac=function(M){return new(M||L)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(_.t4))},L.\u0275cmp=o.Xpm({type:L,selectors:[["nz-avatar"]],viewQuery:function(M,G){if(1&M&&o.Gf(a,5),2&M){let q;o.iGM(q=o.CRH())&&(G.textEl=q.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,G){2&M&&(o.Udp("width",G.customSize)("height",G.customSize)("line-height",G.customSize)("font-size",G.hasIcon&&G.customSize?G.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===G.nzSize)("ant-avatar-sm","small"===G.nzSize)("ant-avatar-square","square"===G.nzShape)("ant-avatar-circle","circle"===G.nzShape)("ant-avatar-icon",G.nzIcon)("ant-avatar-image",G.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,G){1&M&&(o.YNc(0,h,1,1,"i",0),o.YNc(1,I,1,3,"img",1),o.YNc(2,C,3,2,"span",2)),2&M&&(o.Q6J("ngIf",G.nzIcon&&G.hasIcon),o.xp6(1),o.Q6J("ngIf",G.nzSrc&&G.hasSrc),o.xp6(1),o.Q6J("ngIf",G.nzText&&G.hasText))},directives:[T.O5,l.Ls,T.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],L.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],L.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],L.prototype,"nzGap",void 0),L})(),Q=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=o.oAB({type:L}),L.\u0275inj=o.cJS({imports:[[$.vT,T.ez,l.PV,_.ud]]}),L})()},4401:(fe,Y,i)=>{i.d(Y,{F9:()=>R,mS:()=>x,x7:()=>U});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),_=i(8076),T=i(9439),l=i(1721),$=i(226),a=i(4832),h=i(9808),I=i(969),C=i(7144);function y(d,A){if(1&d&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&d){const B=A.$implicit,N=o.oxw(2).index,ee=o.oxw(2);o.ekj("current",B===ee.countArray[N]),o.xp6(1),o.hij(" ",B," ")}}function K(d,A){if(1&d&&(o.ynx(0),o.YNc(1,y,2,3,"p",5),o.BQk()),2&d){const B=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",B.countSingleArray)}}function O(d,A){if(1&d&&(o.TgZ(0,"span",3),o.YNc(1,K,2,1,"ng-container",4),o.qZA()),2&d){const B=A.index,N=o.oxw(2);o.Udp("transform","translateY("+100*-N.countArray[B]+"%)"),o.Q6J("nzNoAnimation",N.noAnimation),o.xp6(1),o.Q6J("ngIf",!N.nzDot&&void 0!==N.countArray[B])}}function X(d,A){if(1&d&&(o.ynx(0),o.YNc(1,O,2,4,"span",2),o.BQk()),2&d){const B=o.oxw();o.xp6(1),o.Q6J("ngForOf",B.maxNumberArray)}}function Q(d,A){if(1&d&&o._uU(0),2&d){const B=o.oxw();o.hij("",B.nzOverflowCount,"+")}}function L(d,A){if(1&d&&(o.ynx(0),o._uU(1),o.BQk()),2&d){const B=o.oxw(2);o.xp6(1),o.Oqu(B.nzText)}}function v(d,A){if(1&d&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,L,2,1,"ng-container",1),o.qZA(),o.BQk()),2&d){const B=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",B.nzStatus||B.presetColor,""),o.Udp("background",!B.presetColor&&B.nzColor),o.Q6J("ngStyle",B.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",B.nzText)}}function M(d,A){if(1&d&&o._UZ(0,"nz-badge-sup",5),2&d){const B=o.oxw(2);o.Q6J("nzOffset",B.nzOffset)("nzTitle",B.nzTitle)("nzStyle",B.nzStyle)("nzDot",B.nzDot)("nzOverflowCount",B.nzOverflowCount)("disableAnimation",!!(B.nzStandalone||B.nzStatus||B.nzColor||null!=B.noAnimation&&B.noAnimation.nzNoAnimation))("nzCount",B.nzCount)("noAnimation",!(null==B.noAnimation||!B.noAnimation.nzNoAnimation))}}function G(d,A){if(1&d&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&d){const B=o.oxw();o.xp6(1),o.Q6J("ngIf",B.showSup)}}const q=["*"];function Z(d,A){if(1&d&&(o.ynx(0),o._uU(1),o.BQk()),2&d){const B=o.oxw();o.xp6(1),o.Oqu(B.nzText)}}const F=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let f=(()=>{class d{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(B){const{nzOverflowCount:N,nzCount:ee}=B;ee&&"number"==typeof ee.currentValue&&(this.count=Math.max(0,ee.currentValue),this.countArray=this.count.toString().split("").map(de=>+de)),N&&this.generateMaxNumberArray()}}return d.\u0275fac=function(B){return new(B||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(B,N){2&B&&(o.uIk("title",null===N.nzTitle?"":N.nzTitle||N.nzCount),o.d8E("@.disabled",N.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(N.nzStyle),o.Udp("right",N.nzOffset&&N.nzOffset[0]?-N.nzOffset[0]:null,"px")("margin-top",N.nzOffset&&N.nzOffset[1]?N.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!N.nzDot)("ant-badge-dot",N.nzDot)("ant-badge-multiple-words",N.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(B,N){if(1&B&&(o.YNc(0,X,2,1,"ng-container",0),o.YNc(1,Q,1,1,"ng-template",null,1,o.W1O)),2&B){const ee=o.MAs(2);o.Q6J("ngIf",N.count<=N.nzOverflowCount)("ngIfElse",ee)}},directives:[h.O5,h.sg,a.P],encapsulation:2,data:{animation:[_.Ev]},changeDetection:0}),d})(),U=(()=>{class d{constructor(B,N,ee,de,he,Te){this.nzConfigService=B,this.renderer=N,this.cdr=ee,this.elementRef=de,this.directionality=he,this.noAnimation=Te,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var B;null===(B=this.directionality.change)||void 0===B||B.pipe((0,s.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(B){const{nzColor:N,nzShowDot:ee,nzDot:de,nzCount:he,nzShowZero:Te}=B;N&&(this.presetColor=this.nzColor&&-1!==F.indexOf(this.nzColor)?this.nzColor:null),(ee||de||he||Te)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return d.\u0275fac=function(B){return new(B||d)(o.Y36(T.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36($.Is,8),o.Y36(a.P,9))},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(B,N){2&B&&o.ekj("ant-badge-status",N.nzStatus)("ant-badge-not-a-wrapper",!!(N.nzStandalone||N.nzStatus||N.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:q,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(B,N){1&B&&(o.F$t(),o.YNc(0,v,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,G,2,1,"ng-container",1)),2&B&&(o.Q6J("ngIf",N.nzStatus||N.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",N.nzCount))},directives:[f,h.O5,h.PC,I.f],encapsulation:2,data:{animation:[_.Ev]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],d.prototype,"nzShowZero",void 0),(0,e.gn)([(0,l.yF)()],d.prototype,"nzShowDot",void 0),(0,e.gn)([(0,l.yF)()],d.prototype,"nzStandalone",void 0),(0,e.gn)([(0,l.yF)()],d.prototype,"nzDot",void 0),(0,e.gn)([(0,T.oS)()],d.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,T.oS)()],d.prototype,"nzColor",void 0),d})(),R=(()=>{class d{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(B){const{nzColor:N}=B;N&&(this.presetColor=this.nzColor&&-1!==F.indexOf(this.nzColor)?this.nzColor:null)}}return d.\u0275fac=function(B){return new(B||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:q,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(B,N){1&B&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,Z,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&B&&(o.xp6(1),o.Tol(N.presetColor&&"ant-ribbon-color-"+N.presetColor),o.Udp("background-color",!N.presetColor&&N.nzColor),o.ekj("ant-ribbon-placement-end","end"===N.nzPlacement)("ant-ribbon-placement-start","start"===N.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",N.nzText),o.xp6(1),o.Udp("color",!N.presetColor&&N.nzColor))},directives:[I.f],encapsulation:2,changeDetection:0}),d})(),x=(()=>{class d{}return d.\u0275fac=function(B){return new(B||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[[$.vT,h.ez,C.Q8,I.T,a.g]]}),d})()},7484:(fe,Y,i)=>{i.d(Y,{_i:()=>he,bd:()=>Se,vh:()=>_e});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),_=i(7625),T=i(9439),l=i(226),$=i(9808),a=i(969);function h(S,se){1&S&&o.Hsn(0)}const I=["*"];function C(S,se){1&S&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&S&&o.Q6J("ngClass",se.$implicit)}function y(S,se){if(1&S&&(o.TgZ(0,"div",2),o.YNc(1,C,2,1,"div",3),o.qZA()),2&S){const W=se.$implicit;o.xp6(1),o.Q6J("ngForOf",W)}}function K(S,se){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const W=o.oxw(3);o.xp6(1),o.Oqu(W.nzTitle)}}function O(S,se){if(1&S&&(o.TgZ(0,"div",11),o.YNc(1,K,2,1,"ng-container",12),o.qZA()),2&S){const W=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",W.nzTitle)}}function X(S,se){if(1&S&&(o.ynx(0),o._uU(1),o.BQk()),2&S){const W=o.oxw(3);o.xp6(1),o.Oqu(W.nzExtra)}}function Q(S,se){if(1&S&&(o.TgZ(0,"div",13),o.YNc(1,X,2,1,"ng-container",12),o.qZA()),2&S){const W=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",W.nzExtra)}}function L(S,se){}function v(S,se){if(1&S&&(o.ynx(0),o.YNc(1,L,0,0,"ng-template",14),o.BQk()),2&S){const W=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",W.listOfNzCardTabComponent.template)}}function M(S,se){if(1&S&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,O,2,1,"div",8),o.YNc(3,Q,2,1,"div",9),o.qZA(),o.YNc(4,v,2,1,"ng-container",10),o.qZA()),2&S){const W=o.oxw();o.xp6(2),o.Q6J("ngIf",W.nzTitle),o.xp6(1),o.Q6J("ngIf",W.nzExtra),o.xp6(1),o.Q6J("ngIf",W.listOfNzCardTabComponent)}}function G(S,se){}function q(S,se){if(1&S&&(o.TgZ(0,"div",15),o.YNc(1,G,0,0,"ng-template",14),o.qZA()),2&S){const W=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",W.nzCover)}}function Z(S,se){1&S&&(o.ynx(0),o.Hsn(1),o.BQk())}function F(S,se){1&S&&o._UZ(0,"nz-card-loading")}function f(S,se){}function w(S,se){if(1&S&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,f,0,0,"ng-template",14),o.qZA()()),2&S){const W=se.$implicit,pe=o.oxw(2);o.Udp("width",100/pe.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",W)}}function U(S,se){if(1&S&&(o.TgZ(0,"ul",16),o.YNc(1,w,3,3,"li",17),o.qZA()),2&S){const W=o.oxw();o.xp6(1),o.Q6J("ngForOf",W.nzActions)}}let de=(()=>{class S{constructor(){this.nzHoverable=!0}}return S.\u0275fac=function(W){return new(W||S)},S.\u0275dir=o.lG2({type:S,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(W,pe){2&W&&o.ekj("ant-card-hoverable",pe.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],S.prototype,"nzHoverable",void 0),S})(),he=(()=>{class S{}return S.\u0275fac=function(W){return new(W||S)},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card-tab"]],viewQuery:function(W,pe){if(1&W&&o.Gf(o.Rgc,7),2&W){let b;o.iGM(b=o.CRH())&&(pe.template=b.first)}},exportAs:["nzCardTab"],ngContentSelectors:I,decls:1,vars:0,template:function(W,pe){1&W&&(o.F$t(),o.YNc(0,h,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),S})(),Te=(()=>{class S{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return S.\u0275fac=function(W){return new(W||S)},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(W,pe){1&W&&(o.TgZ(0,"div",0),o.YNc(1,y,2,1,"div",1),o.qZA()),2&W&&(o.xp6(1),o.Q6J("ngForOf",pe.listOfLoading))},directives:[$.sg,$.mk],encapsulation:2,changeDetection:0}),S})(),Se=(()=>{class S{constructor(W,pe,b){this.nzConfigService=W,this.cdr=pe,this.directionality=b,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var W;null===(W=this.directionality.change)||void 0===W||W.pipe((0,_.R)(this.destroy$)).subscribe(pe=>{this.dir=pe,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(W){return new(W||S)(o.Y36(T.jY),o.Y36(o.sBO),o.Y36(l.Is,8))},S.\u0275cmp=o.Xpm({type:S,selectors:[["nz-card"]],contentQueries:function(W,pe,b){if(1&W&&(o.Suo(b,he,5),o.Suo(b,de,4)),2&W){let le;o.iGM(le=o.CRH())&&(pe.listOfNzCardTabComponent=le.first),o.iGM(le=o.CRH())&&(pe.listOfNzCardGridDirective=le)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(W,pe){2&W&&o.ekj("ant-card-loading",pe.nzLoading)("ant-card-bordered",!1===pe.nzBorderless&&pe.nzBordered)("ant-card-hoverable",pe.nzHoverable)("ant-card-small","small"===pe.nzSize)("ant-card-contain-grid",pe.listOfNzCardGridDirective&&pe.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===pe.nzType)("ant-card-contain-tabs",!!pe.listOfNzCardTabComponent)("ant-card-rtl","rtl"===pe.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:I,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(W,pe){if(1&W&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,q,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,Z,2,0,"ng-container",3),o.YNc(4,F,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,U,2,1,"ul",5)),2&W){const b=o.MAs(5);o.Q6J("ngIf",pe.nzTitle||pe.nzExtra||pe.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",pe.nzCover),o.xp6(1),o.Q6J("ngStyle",pe.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!pe.nzLoading)("ngIfElse",b),o.xp6(3),o.Q6J("ngIf",pe.nzActions.length)}},directives:[Te,$.O5,a.f,$.tP,$.PC,$.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,T.oS)(),(0,n.yF)()],S.prototype,"nzBordered",void 0),(0,e.gn)([(0,T.oS)(),(0,n.yF)()],S.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],S.prototype,"nzLoading",void 0),(0,e.gn)([(0,T.oS)(),(0,n.yF)()],S.prototype,"nzHoverable",void 0),(0,e.gn)([(0,T.oS)()],S.prototype,"nzSize",void 0),S})(),_e=(()=>{class S{}return S.\u0275fac=function(W){return new(W||S)},S.\u0275mod=o.oAB({type:S}),S.\u0275inj=o.cJS({imports:[[$.ez,a.T],l.vT]}),S})()},5577:(fe,Y,i)=>{i.d(Y,{D3:()=>T,y7:()=>$});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let _=(()=>{class a{create(I){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(I)}}return a.\u0275fac=function(I){return new(I||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),T=(()=>{class a{constructor(I){this.nzResizeObserverFactory=I,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((I,C)=>this.cleanupObserver(C))}observe(I){const C=(0,o.fI)(I);return new n.y(y=>{const O=this.observeElement(C).subscribe(y);return()=>{O.unsubscribe(),this.unobserveElement(C)}})}observeElement(I){if(this.observedElements.has(I))this.observedElements.get(I).count++;else{const C=new s.xQ,y=this.nzResizeObserverFactory.create(K=>C.next(K));y&&y.observe(I),this.observedElements.set(I,{observer:y,stream:C,count:1})}return this.observedElements.get(I).stream}unobserveElement(I){this.observedElements.has(I)&&(this.observedElements.get(I).count--,this.observedElements.get(I).count||this.cleanupObserver(I))}cleanupObserver(I){if(this.observedElements.has(I)){const{observer:C,stream:y}=this.observedElements.get(I);C&&C.disconnect(),y.complete(),this.observedElements.delete(I)}}}return a.\u0275fac=function(I){return new(I||a)(e.LFG(_))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),$=(()=>{class a{}return a.\u0275fac=function(I){return new(I||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[_]}),a})()},5482:(fe,Y,i)=>{i.d(Y,{Zv:()=>f,cD:()=>w,yH:()=>Z});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),_=i(2198),T=i(8076),l=i(9439),$=i(4090),a=i(1721),h=i(226),I=i(4832),C=i(9808),y=i(969),K=i(5017);const O=["*"],X=["collapseHeader"];function Q(U,R){if(1&U&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&U){const x=R.$implicit,d=o.oxw(2);o.xp6(1),o.Q6J("nzType",x||"right")("nzRotate",d.nzActive?90:0)}}function L(U,R){if(1&U&&(o.TgZ(0,"div"),o.YNc(1,Q,2,2,"ng-container",3),o.qZA()),2&U){const x=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",x.nzExpandedIcon)}}function v(U,R){if(1&U&&(o.ynx(0),o._uU(1),o.BQk()),2&U){const x=o.oxw();o.xp6(1),o.Oqu(x.nzHeader)}}function M(U,R){if(1&U&&(o.ynx(0),o._uU(1),o.BQk()),2&U){const x=o.oxw(2);o.xp6(1),o.Oqu(x.nzExtra)}}function G(U,R){if(1&U&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&U){const x=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",x.nzExtra)}}const q="collapse";let Z=(()=>{class U{constructor(x,d,A,B){this.nzConfigService=x,this.cdr=d,this.directionality=A,this.destroy$=B,this._nzModuleName=q,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(q).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var x;null===(x=this.directionality.change)||void 0===x||x.pipe((0,s.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(x){this.listOfNzCollapsePanelComponent.push(x)}removePanel(x){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(x),1)}click(x){this.nzAccordion&&!x.nzActive&&this.listOfNzCollapsePanelComponent.filter(d=>d!==x).forEach(d=>{d.nzActive&&(d.nzActive=!1,d.nzActiveChange.emit(d.nzActive),d.markForCheck())}),x.nzActive=!x.nzActive,x.nzActiveChange.emit(x.nzActive)}}return U.\u0275fac=function(x){return new(x||U)(o.Y36(l.jY),o.Y36(o.sBO),o.Y36(h.Is,8),o.Y36($.kn))},U.\u0275cmp=o.Xpm({type:U,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(x,d){2&x&&o.ekj("ant-collapse-icon-position-left","left"===d.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===d.nzExpandIconPosition)("ant-collapse-ghost",d.nzGhost)("ant-collapse-borderless",!d.nzBordered)("ant-collapse-rtl","rtl"===d.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([$.kn])],ngContentSelectors:O,decls:1,vars:0,template:function(x,d){1&x&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],U.prototype,"nzAccordion",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],U.prototype,"nzBordered",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],U.prototype,"nzGhost",void 0),U})();const F="collapsePanel";let f=(()=>{class U{constructor(x,d,A,B,N,ee){this.nzConfigService=x,this.ngZone=d,this.cdr=A,this.destroy$=B,this.nzCollapseComponent=N,this.noAnimation=ee,this._nzModuleName=F,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(F).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,_.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return U.\u0275fac=function(x){return new(x||U)(o.Y36(l.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36($.kn),o.Y36(Z,1),o.Y36(I.P,8))},U.\u0275cmp=o.Xpm({type:U,selectors:[["nz-collapse-panel"]],viewQuery:function(x,d){if(1&x&&o.Gf(X,7),2&x){let A;o.iGM(A=o.CRH())&&(d.collapseHeader=A.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(x,d){2&x&&o.ekj("ant-collapse-no-arrow",!d.nzShowArrow)("ant-collapse-item-active",d.nzActive)("ant-collapse-item-disabled",d.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([$.kn])],ngContentSelectors:O,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(x,d){1&x&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,L,2,1,"div",2),o.YNc(3,v,2,1,"ng-container",3),o.YNc(4,G,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&x&&(o.uIk("aria-expanded",d.nzActive),o.xp6(2),o.Q6J("ngIf",d.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",d.nzHeader),o.xp6(1),o.Q6J("ngIf",d.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",d.nzActive),o.Q6J("@.disabled",null==d.noAnimation?null:d.noAnimation.nzNoAnimation)("@collapseMotion",d.nzActive?"expanded":"hidden"))},directives:[C.O5,y.f,K.Ls],encapsulation:2,data:{animation:[T.J_]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],U.prototype,"nzActive",void 0),(0,e.gn)([(0,a.yF)()],U.prototype,"nzDisabled",void 0),(0,e.gn)([(0,l.oS)(),(0,a.yF)()],U.prototype,"nzShowArrow",void 0),U})(),w=(()=>{class U{}return U.\u0275fac=function(x){return new(x||U)},U.\u0275mod=o.oAB({type:U}),U.\u0275inj=o.cJS({imports:[[h.vT,C.ez,K.PV,y.T,I.g]]}),U})()},3098:(fe,Y,i)=>{i.d(Y,{R7:()=>re,q6:()=>ze,uj:()=>ne});var e=i(226),o=i(925),n=i(9808),s=i(5e3),_=i(969),T=i(655),l=i(8929),$=i(6787),a=i(1721),h=i(7625),I=i(1059),C=i(7545),y=i(7138),K=i(2994),O=i(9439),X=i(948),Q=i(4090);function L(V,ge){1&V&&s.Hsn(0)}const v=["*"];function M(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw(3);s.xp6(1),s.Oqu(J.nzTitle)}}function G(V,ge){if(1&V&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&V){const J=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.nzTitle)}}function q(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw(3);s.xp6(1),s.Oqu(J.nzExtra)}}function Z(V,ge){if(1&V&&(s.TgZ(0,"div",8),s.YNc(1,q,2,1,"ng-container",7),s.qZA()),2&V){const J=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.nzExtra)}}function F(V,ge){if(1&V&&(s.TgZ(0,"div",3),s.YNc(1,G,2,1,"div",4),s.YNc(2,Z,2,1,"div",5),s.qZA()),2&V){const J=s.oxw();s.xp6(1),s.Q6J("ngIf",J.nzTitle),s.xp6(1),s.Q6J("ngIf",J.nzExtra)}}function f(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function w(V,ge){}function U(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,f,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,w,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&V){const J=s.oxw().$implicit,ve=s.oxw(3);s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ve.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title),s.xp6(2),s.Q6J("ngTemplateOutlet",J.content)}}function R(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function x(V,ge){if(1&V&&(s.TgZ(0,"td",14),s.YNc(1,R,2,1,"ng-container",7),s.qZA()),2&V){const J=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function d(V,ge){}function A(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,x,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,d,0,0,"ng-template",16),s.qZA(),s.BQk()),2&V){const J=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title),s.xp6(1),s.Q6J("colSpan",2*J.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",J.content)}}function B(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,U,7,5,"ng-container",2),s.YNc(2,A,4,3,"ng-container",2),s.BQk()),2&V){const J=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!J.nzBordered),s.xp6(1),s.Q6J("ngIf",J.nzBordered)}}function N(V,ge){if(1&V&&(s.TgZ(0,"tr",10),s.YNc(1,B,3,2,"ng-container",11),s.qZA()),2&V){const J=ge.$implicit;s.xp6(1),s.Q6J("ngForOf",J)}}function ee(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,N,2,1,"tr",9),s.BQk()),2&V){const J=s.oxw();s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function de(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw().$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function he(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,de,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&V){const J=ge.$implicit,ve=s.oxw(4);s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!ve.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function Te(V,ge){}function Me(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,Te,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&V){const J=ge.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(3),s.Q6J("ngTemplateOutlet",J.content)}}function Se(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,he,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Me,5,2,"ng-container",11),s.qZA(),s.BQk()),2&V){const J=ge.$implicit;s.xp6(2),s.Q6J("ngForOf",J),s.xp6(2),s.Q6J("ngForOf",J)}}function ie(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,Se,5,2,"ng-container",11),s.BQk()),2&V){const J=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function _e(V,ge){if(1&V&&(s.ynx(0),s._uU(1),s.BQk()),2&V){const J=s.oxw().$implicit;s.xp6(1),s.hij(" ",J.title," ")}}function S(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,_e,2,1,"ng-container",7),s.qZA(),s.BQk()),2&V){const J=ge.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",J.title)}}function se(V,ge){}function W(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,se,0,0,"ng-template",16),s.qZA(),s.BQk()),2&V){const J=ge.$implicit;s.xp6(1),s.Q6J("colSpan",J.span),s.xp6(1),s.Q6J("ngTemplateOutlet",J.content)}}function pe(V,ge){if(1&V&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,S,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,W,3,2,"ng-container",11),s.qZA(),s.BQk()),2&V){const J=ge.$implicit;s.xp6(2),s.Q6J("ngForOf",J),s.xp6(2),s.Q6J("ngForOf",J)}}function b(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,pe,5,2,"ng-container",11),s.BQk()),2&V){const J=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",J.itemMatrix)}}function le(V,ge){if(1&V&&(s.ynx(0),s.YNc(1,ie,2,1,"ng-container",2),s.YNc(2,b,2,1,"ng-container",2),s.BQk()),2&V){const J=s.oxw();s.xp6(1),s.Q6J("ngIf",!J.nzBordered),s.xp6(1),s.Q6J("ngIf",J.nzBordered)}}let ne=(()=>{class V{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new l.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return V.\u0275fac=function(J){return new(J||V)},V.\u0275cmp=s.Xpm({type:V,selectors:[["nz-descriptions-item"]],viewQuery:function(J,ve){if(1&J&&s.Gf(s.Rgc,7),2&J){let De;s.iGM(De=s.CRH())&&(ve.content=De.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:v,decls:1,vars:0,template:function(J,ve){1&J&&(s.F$t(),s.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,T.gn)([(0,a.Rn)()],V.prototype,"nzSpan",void 0),V})();const ue={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let re=(()=>{class V{constructor(J,ve,De,Ee){this.nzConfigService=J,this.cdr=ve,this.breakpointService=De,this.directionality=Ee,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ue,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Q.G_.md,this.destroy$=new l.xQ}ngOnInit(){var J;this.dir=this.directionality.value,null===(J=this.directionality.change)||void 0===J||J.pipe((0,h.R)(this.destroy$)).subscribe(ve=>{this.dir=ve})}ngOnChanges(J){J.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const J=this.items.changes.pipe((0,I.O)(this.items),(0,h.R)(this.destroy$));(0,$.T)(J,J.pipe((0,C.w)(()=>(0,$.T)(...this.items.map(ve=>ve.inputChange$)).pipe((0,y.e)(16)))),this.breakpointService.subscribe(Q.WV).pipe((0,K.b)(ve=>this.breakpoint=ve))).pipe((0,h.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let J=[],ve=0;const De=this.realColumn=this.getColumn(),Ee=this.items.toArray(),Le=Ee.length,Ge=[],Be=()=>{Ge.push(J),J=[],ve=0};for(let Fe=0;Fe<Le;Fe++){const Ne=Ee[Fe],{nzTitle:$e,content:Re,nzSpan:be}=Ne;ve+=be,ve>=De?(ve>De&&(0,X.ZK)(`"nzColumn" is ${De} but we have row length ${ve}`),J.push({title:$e,content:Re,span:De-(ve-be)}),Be()):Fe===Le-1?(J.push({title:$e,content:Re,span:De-(ve-be)}),Be()):J.push({title:$e,content:Re,span:be})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return V.\u0275fac=function(J){return new(J||V)(s.Y36(O.jY),s.Y36(s.sBO),s.Y36(Q.r3),s.Y36(e.Is,8))},V.\u0275cmp=s.Xpm({type:V,selectors:[["nz-descriptions"]],contentQueries:function(J,ve,De){if(1&J&&s.Suo(De,ne,4),2&J){let Ee;s.iGM(Ee=s.CRH())&&(ve.items=Ee)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(J,ve){2&J&&s.ekj("ant-descriptions-bordered",ve.nzBordered)("ant-descriptions-middle","middle"===ve.nzSize)("ant-descriptions-small","small"===ve.nzSize)("ant-descriptions-rtl","rtl"===ve.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(J,ve){1&J&&(s.YNc(0,F,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,ee,2,1,"ng-container",2),s.YNc(5,le,3,2,"ng-container",2),s.qZA()()()),2&J&&(s.Q6J("ngIf",ve.nzTitle||ve.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===ve.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===ve.nzLayout))},directives:[n.O5,_.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,T.gn)([(0,a.yF)(),(0,O.oS)()],V.prototype,"nzBordered",void 0),(0,T.gn)([(0,O.oS)()],V.prototype,"nzColumn",void 0),(0,T.gn)([(0,O.oS)()],V.prototype,"nzSize",void 0),(0,T.gn)([(0,O.oS)(),(0,a.yF)()],V.prototype,"nzColon",void 0),V})(),ze=(()=>{class V{}return V.\u0275fac=function(J){return new(J||V)},V.\u0275mod=s.oAB({type:V}),V.\u0275inj=s.cJS({imports:[[e.vT,n.ez,_.T,o.ud]]}),V})()},3677:(fe,Y,i)=>{i.d(Y,{RR:()=>ie,b1:()=>_e,cm:()=>he,wA:()=>Se});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),_=i(8929),T=i(591),l=i(6787),$=i(3753),a=i(8896),h=i(6053),I=i(7604),C=i(4850),y=i(7545),K=i(2198),O=i(7138),X=i(5778),Q=i(7625),L=i(9439),v=i(6950),M=i(1721),G=i(1314),q=i(925),Z=i(226),F=i(9808),f=i(3075),w=i(6042),U=i(4832),R=i(969),x=i(5017),d=i(4219),A=i(8076);function B(W,pe){if(1&W){const b=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(ne){return s.CHM(b),s.oxw().onAnimationEvent(ne)})("mouseenter",function(){return s.CHM(b),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(b),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&W){const b=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===b.dir),s.Q6J("ngClass",b.nzOverlayClassName)("ngStyle",b.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)}}const N=["*"],de=[v.yW.bottomLeft,v.yW.bottomRight,v.yW.topRight,v.yW.topLeft];let he=(()=>{class W{constructor(b,le,ne,te,ue,re){this.nzConfigService=b,this.elementRef=le,this.overlay=ne,this.renderer=te,this.viewContainerRef=ue,this.platform=re,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new _.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new T.X(!1),this.nzTrigger$=new T.X("hover"),this.overlayClose$=new _.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(b,le){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(b,le)}ngAfterViewInit(){if(this.nzDropdownMenu){const b=this.elementRef.nativeElement,le=(0,l.T)((0,$.R)(b,"mouseenter").pipe((0,I.h)(!0)),(0,$.R)(b,"mouseleave").pipe((0,I.h)(!1))),te=(0,l.T)(this.nzDropdownMenu.mouseState$,le),ue=(0,$.R)(b,"click").pipe((0,C.U)(()=>!this.nzVisible)),re=this.nzTrigger$.pipe((0,y.w)(J=>"hover"===J?te:"click"===J?ue:a.E)),ze=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,K.h)(()=>this.nzClickHide),(0,I.h)(!1)),V=(0,l.T)(re,ze,this.overlayClose$).pipe((0,K.h)(()=>!this.nzDisabled)),ge=(0,l.T)(this.inputVisible$,V);(0,h.aj)([ge,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,C.U)(([J,ve])=>J||ve),(0,O.e)(150),(0,X.x)(),(0,K.h)(()=>this.platform.isBrowser),(0,Q.R)(this.destroy$)).subscribe(J=>{const De=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:b).getBoundingClientRect().width;this.nzVisible!==J&&this.nzVisibleChange.emit(J),this.nzVisible=J,J?(this.overlayRef?this.overlayRef.getConfig().minWidth=De:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:De,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,l.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,K.h)(Ee=>!this.elementRef.nativeElement.contains(Ee.target))),this.overlayRef.keydownEvents().pipe((0,K.h)(Ee=>Ee.keyCode===o.hY&&!(0,o.Vb)(Ee)))).pipe((0,Q.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([v.yW[this.nzPlacement],...de]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Q.R)(this.destroy$)).subscribe(J=>{"void"===J.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(b){const{nzVisible:le,nzDisabled:ne,nzOverlayClassName:te,nzOverlayStyle:ue,nzTrigger:re}=b;if(re&&this.nzTrigger$.next(this.nzTrigger),le&&this.inputVisible$.next(this.nzVisible),ne){const ze=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(ze,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(ze,"disabled")}te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),ue&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return W.\u0275fac=function(b){return new(b||W)(s.Y36(L.jY),s.Y36(s.SBq),s.Y36(G.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(q.t4))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,L.oS)(),(0,M.yF)()],W.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzVisible",void 0),W})(),Te=(()=>{class W{}return W.\u0275fac=function(b){return new(b||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({}),W})(),Se=(()=>{class W{constructor(b,le,ne){this.renderer=b,this.nzButtonGroupComponent=le,this.elementRef=ne}ngAfterViewInit(){const b=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&b&&this.renderer.addClass(b,"ant-dropdown-button")}}return W.\u0275fac=function(b){return new(b||W)(s.Y36(s.Qsj),s.Y36(w.fY,9),s.Y36(s.SBq))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-button","","nz-dropdown",""]]}),W})(),ie=(()=>{class W{constructor(b,le,ne,te,ue,re,ze){this.cdr=b,this.elementRef=le,this.renderer=ne,this.viewContainerRef=te,this.nzMenuService=ue,this.directionality=re,this.noAnimation=ze,this.mouseState$=new T.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new _.xQ}onAnimationEvent(b){this.animationStateChange$.emit(b)}setMouseState(b){this.mouseState$.next(b)}setValue(b,le){this[b]=le,this.cdr.markForCheck()}ngOnInit(){var b;null===(b=this.directionality.change)||void 0===b||b.pipe((0,Q.R)(this.destroy$)).subscribe(le=>{this.dir=le,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(b){return new(b||W)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(d.hl),s.Y36(Z.Is,8),s.Y36(U.P,9))},W.\u0275cmp=s.Xpm({type:W,selectors:[["nz-dropdown-menu"]],viewQuery:function(b,le){if(1&b&&s.Gf(s.Rgc,7),2&b){let ne;s.iGM(ne=s.CRH())&&(le.templateRef=ne.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([d.hl,{provide:d.Cc,useValue:!0}])],ngContentSelectors:N,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(b,le){1&b&&(s.F$t(),s.YNc(0,B,2,7,"ng-template"))},directives:[F.mk,F.PC,U.P],encapsulation:2,data:{animation:[A.mF]},changeDetection:0}),W})(),_e=(()=>{class W{}return W.\u0275fac=function(b){return new(b||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({imports:[[Z.vT,F.ez,G.U8,f.u5,w.sL,d.ip,x.PV,U.g,q.ud,v.e4,Te,R.T],d.ip]}),W})();new G.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new G.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new G.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new G.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(fe,Y,i)=>{i.d(Y,{AA:()=>tt,I2:()=>je,IO:()=>ce,Ph:()=>it,n_:()=>Xe,t4:()=>Ke,yi:()=>Qe,yw:()=>Pe});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),_=i(655),T=i(1721),l=i(8929),$=i(8514),a=i(1086),h=i(6787),I=i(2916),C=i(591),y=i(2986),K=i(7545),O=i(7625),X=i(4090),Q=i(685),L=i(226),v=i(7525),M=i(1894);const G=["*"];function q(z,H){if(1&z&&e._UZ(0,"nz-avatar",3),2&z){const P=e.oxw();e.Q6J("nzSrc",P.nzSrc)}}function Z(z,H){1&z&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function F(z,H){if(1&z&&e._UZ(0,"nz-list-item-meta-avatar",3),2&z){const P=e.oxw();e.Q6J("nzSrc",P.avatarStr)}}function f(z,H){if(1&z&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",P.avatarTpl)}}function w(z,H){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const P=e.oxw(3);e.xp6(1),e.Oqu(P.nzTitle)}}function U(z,H){if(1&z&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,w,2,1,"ng-container",6),e.qZA()),2&z){const P=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",P.nzTitle)}}function R(z,H){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const P=e.oxw(3);e.xp6(1),e.Oqu(P.nzDescription)}}function x(z,H){if(1&z&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,R,2,1,"ng-container",6),e.qZA()),2&z){const P=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",P.nzDescription)}}function d(z,H){if(1&z&&(e.TgZ(0,"div",5),e.YNc(1,U,2,1,"nz-list-item-meta-title",1),e.YNc(2,x,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("ngIf",P.nzTitle&&!P.titleComponent),e.xp6(1),e.Q6J("ngIf",P.nzDescription&&!P.descriptionComponent)}}const A=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],B=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function N(z,H){1&z&&e.Hsn(0)}const ee=["nz-list-item-actions",""];function de(z,H){}function he(z,H){1&z&&e._UZ(0,"em",3)}function Te(z,H){if(1&z&&(e.TgZ(0,"li"),e.YNc(1,de,0,0,"ng-template",1),e.YNc(2,he,1,0,"em",2),e.qZA()),2&z){const P=H.$implicit,ae=H.last;e.xp6(1),e.Q6J("ngTemplateOutlet",P),e.xp6(1),e.Q6J("ngIf",!ae)}}function Me(z,H){}const Se=function(z,H){return{$implicit:z,index:H}};function ie(z,H){if(1&z&&(e.ynx(0),e.YNc(1,Me,0,0,"ng-template",9),e.BQk()),2&z){const P=H.$implicit,ae=H.index,Ie=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,Se,P,ae))}}function _e(z,H){if(1&z&&(e.TgZ(0,"div",7),e.YNc(1,ie,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("ngForOf",P.nzDataSource)}}function S(z,H){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const P=e.oxw(2);e.xp6(1),e.Oqu(P.nzHeader)}}function se(z,H){if(1&z&&(e.TgZ(0,"nz-list-header"),e.YNc(1,S,2,1,"ng-container",10),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",P.nzHeader)}}function W(z,H){1&z&&e._UZ(0,"div"),2&z&&e.Udp("min-height",53,"px")}function pe(z,H){}function b(z,H){if(1&z&&(e.TgZ(0,"div",13),e.YNc(1,pe,0,0,"ng-template",9),e.qZA()),2&z){const P=H.$implicit,ae=H.index,Ie=e.oxw(2);e.Q6J("nzSpan",Ie.nzGrid.span||null)("nzXs",Ie.nzGrid.xs||null)("nzSm",Ie.nzGrid.sm||null)("nzMd",Ie.nzGrid.md||null)("nzLg",Ie.nzGrid.lg||null)("nzXl",Ie.nzGrid.xl||null)("nzXXl",Ie.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,Se,P,ae))}}function le(z,H){if(1&z&&(e.TgZ(0,"div",11),e.YNc(1,b,2,12,"div",12),e.qZA()),2&z){const P=e.oxw();e.Q6J("nzGutter",P.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",P.nzDataSource)}}function ne(z,H){if(1&z&&e._UZ(0,"nz-list-empty",14),2&z){const P=e.oxw();e.Q6J("nzNoResult",P.nzNoResult)}}function te(z,H){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const P=e.oxw(2);e.xp6(1),e.Oqu(P.nzFooter)}}function ue(z,H){if(1&z&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,te,2,1,"ng-container",10),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",P.nzFooter)}}function re(z,H){}function ze(z,H){}function V(z,H){if(1&z&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,ze,0,0,"ng-template",6),e.qZA()),2&z){const P=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",P.nzPagination)}}const ge=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],J=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function ve(z,H){if(1&z&&e._UZ(0,"ul",6),2&z){const P=e.oxw(2);e.Q6J("nzActions",P.nzActions)}}function De(z,H){if(1&z&&(e.YNc(0,ve,1,1,"ul",5),e.Hsn(1)),2&z){const P=e.oxw();e.Q6J("ngIf",P.nzActions&&P.nzActions.length>0)}}function Ee(z,H){if(1&z&&(e.ynx(0),e._uU(1),e.BQk()),2&z){const P=e.oxw(3);e.xp6(1),e.Oqu(P.nzContent)}}function Le(z,H){if(1&z&&(e.ynx(0),e.YNc(1,Ee,2,1,"ng-container",8),e.BQk()),2&z){const P=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",P.nzContent)}}function Ge(z,H){if(1&z&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,Le,2,1,"ng-container",7)),2&z){const P=e.oxw();e.xp6(2),e.Q6J("ngIf",P.nzContent)}}function Be(z,H){1&z&&e.Hsn(0,3)}function Fe(z,H){}function Ne(z,H){}function $e(z,H){}function Re(z,H){}function be(z,H){if(1&z&&(e.YNc(0,Fe,0,0,"ng-template",9),e.YNc(1,Ne,0,0,"ng-template",9),e.YNc(2,$e,0,0,"ng-template",9),e.YNc(3,Re,0,0,"ng-template",9)),2&z){const P=e.oxw(),ae=e.MAs(3),Ie=e.MAs(5),Oe=e.MAs(1);e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",P.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}function Ze(z,H){}function Ye(z,H){}function We(z,H){}function oe(z,H){if(1&z&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,We,0,0,"ng-template",9),e.qZA()),2&z){const P=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",P.nzExtra)}}function E(z,H){}function j(z,H){if(1&z&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,Ye,0,0,"ng-template",9),e.qZA(),e.YNc(4,oe,2,1,"nz-list-item-extra",7),e.YNc(5,E,0,0,"ng-template",9),e.BQk()),2&z){const P=e.oxw(),ae=e.MAs(3),Ie=e.MAs(1),Oe=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngIf",P.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}const p=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],m=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ce=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:G,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(P,ae){1&P&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Ce=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:G,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(P,ae){1&P&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),z})(),Ae=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:G,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(P,ae){1&P&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,q,1,1,"nz-avatar",1),e.YNc(2,Z,1,0,"ng-content",2),e.qZA()),2&P&&(e.xp6(1),e.Q6J("ngIf",ae.nzSrc),e.xp6(1),e.Q6J("ngIf",!ae.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),z})(),Qe=(()=>{class z{constructor(P,ae){this.elementRef=P,this.renderer=ae,this.avatarStr="",this.renderer.addClass(P.nativeElement,"ant-list-item-meta")}set nzAvatar(P){P instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=P):this.avatarStr=P}}return z.\u0275fac=function(P){return new(P||z)(e.Y36(e.SBq),e.Y36(e.Qsj))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(P,ae,Ie){if(1&P&&(e.Suo(Ie,Ce,5),e.Suo(Ie,ce,5)),2&P){let Oe;e.iGM(Oe=e.CRH())&&(ae.descriptionComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.titleComponent=Oe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:B,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(P,ae){1&P&&(e.F$t(A),e.YNc(0,F,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,f,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,d,5,2,"div",2)),2&P&&(e.Q6J("ngIf",ae.avatarStr),e.xp6(1),e.Q6J("ngIf",ae.avatarTpl),e.xp6(2),e.Q6J("ngIf",ae.nzTitle||ae.nzDescription||ae.descriptionComponent||ae.titleComponent))},directives:[Ae,ce,Ce,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),z})(),Pe=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:G,decls:1,vars:0,template:function(P,ae){1&P&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),we=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item-action"]],viewQuery:function(P,ae){if(1&P&&e.Gf(e.Rgc,5),2&P){let Ie;e.iGM(Ie=e.CRH())&&(ae.templateRef=Ie.first)}},exportAs:["nzListItemAction"],ngContentSelectors:G,decls:1,vars:0,template:function(P,ae){1&P&&(e.F$t(),e.YNc(0,N,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),z})(),Je=(()=>{class z{constructor(P,ae,Ie){this.ngZone=P,this.nzActions=[],this.actions=[],this.inputActionChanges$=new l.xQ,this.contentChildrenChanges$=(0,$.P)(()=>this.nzListItemActions?(0,a.of)(null):this.ngZone.onStable.pipe((0,y.q)(1),this.enterZone(),(0,K.w)(()=>this.contentChildrenChanges$))),(0,h.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,O.R)(Ie)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Oe=>Oe.templateRef),ae.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return P=>new I.y(ae=>P.subscribe({next:Ie=>this.ngZone.run(()=>ae.next(Ie))}))}}return z.\u0275fac=function(P){return new(P||z)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(X.kn))},z.\u0275cmp=e.Xpm({type:z,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(P,ae,Ie){if(1&P&&e.Suo(Ie,we,4),2&P){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListItemActions=Oe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([X.kn]),e.TTD],attrs:ee,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(P,ae){1&P&&e.YNc(0,Te,3,2,"li",0),2&P&&e.Q6J("ngForOf",ae.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),z})(),je=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(P,ae){1&P&&e._UZ(0,"nz-embed-empty",0),2&P&&e.Q6J("nzComponentName","list")("specificContent",ae.nzNoResult)},directives:[Q.gB],encapsulation:2,changeDetection:0}),z})(),Ke=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:G,decls:1,vars:0,template:function(P,ae){1&P&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),He=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:G,decls:1,vars:0,template:function(P,ae){1&P&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),ke=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:G,decls:1,vars:0,template:function(P,ae){1&P&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),z})(),et=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275dir=e.lG2({type:z,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),z})(),Xe=(()=>{class z{constructor(P){this.directionality=P,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new C.X(this.nzItemLayout),this.destroy$=new l.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var P;this.dir=this.directionality.value,null===(P=this.directionality.change)||void 0===P||P.pipe((0,O.R)(this.destroy$)).subscribe(ae=>{this.dir=ae})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(P){P.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return z.\u0275fac=function(P){return new(P||z)(e.Y36(L.Is,8))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(P,ae,Ie){if(1&P&&(e.Suo(Ie,He,5),e.Suo(Ie,ke,5),e.Suo(Ie,et,5)),2&P){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListFooterComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListPaginationComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListLoadMoreDirective=Oe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(P,ae){2&P&&e.ekj("ant-list-rtl","rtl"===ae.dir)("ant-list-vertical","vertical"===ae.nzItemLayout)("ant-list-lg","large"===ae.nzSize)("ant-list-sm","small"===ae.nzSize)("ant-list-split",ae.nzSplit)("ant-list-bordered",ae.nzBordered)("ant-list-loading",ae.nzLoading)("ant-list-something-after-last-item",ae.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:J,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(P,ae){if(1&P&&(e.F$t(ge),e.YNc(0,_e,3,1,"ng-template",null,0,e.W1O),e.YNc(2,se,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,W,1,2,"div",3),e.YNc(7,le,2,2,"div",4),e.YNc(8,ne,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,ue,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,re,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,V,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&P){const Ie=e.MAs(1);e.xp6(2),e.Q6J("ngIf",ae.nzHeader),e.xp6(2),e.Q6J("nzSpinning",ae.nzLoading),e.xp6(2),e.Q6J("ngIf",ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzGrid&&ae.nzDataSource)("ngIfElse",Ie),e.xp6(1),e.Q6J("ngIf",!ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",ae.nzLoadMore),e.xp6(2),e.Q6J("ngIf",ae.nzPagination)}},directives:[Ke,v.W,je,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,T.yF)()],z.prototype,"nzBordered",void 0),(0,_.gn)([(0,T.yF)()],z.prototype,"nzLoading",void 0),(0,_.gn)([(0,T.yF)()],z.prototype,"nzSplit",void 0),z})(),tt=(()=>{class z{constructor(P,ae,Ie,Oe){this.parentComp=Ie,this.cdr=Oe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ae.addClass(P.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(P=>{this.itemLayout=P,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return z.\u0275fac=function(P){return new(P||z)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},z.\u0275cmp=e.Xpm({type:z,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(P,ae,Ie){if(1&P&&e.Suo(Ie,Pe,5),2&P){let Oe;e.iGM(Oe=e.CRH())&&(ae.listItemExtraDirective=Oe.first)}},hostVars:2,hostBindings:function(P,ae){2&P&&e.ekj("ant-list-item-no-flex",ae.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:m,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(P,ae){if(1&P&&(e.F$t(p),e.YNc(0,De,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Ge,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,be,4,4,"ng-template",null,3,e.W1O),e.YNc(8,j,6,4,"ng-container",4)),2&P){const Ie=e.MAs(7);e.xp6(8),e.Q6J("ngIf",ae.isVerticalAndExtra)("ngIfElse",Ie)}},directives:[Je,Pe,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,T.yF)()],z.prototype,"nzNoFlex",void 0),z})(),it=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275mod=e.oAB({type:z}),z.\u0275inj=e.cJS({imports:[[L.vT,n.ez,v.j,M.Jb,o.Rt,s.T,Q.Xo]]}),z})()},4219:(fe,Y,i)=>{i.d(Y,{Cc:()=>V,YV:()=>We,hl:()=>J,ip:()=>oe,r9:()=>De,uA:()=>Ye,wO:()=>be});var e=i(655),o=i(5e3),n=i(8929),s=i(591),_=i(6787),T=i(6053),l=i(4850),$=i(1709),a=i(2198),h=i(7604),I=i(7138),C=i(5778),y=i(7625),K=i(1059),O=i(7545),X=i(1721),Q=i(325),L=i(226),v=i(1314),M=i(6950),G=i(925),q=i(4832),Z=i(9808),F=i(5017),f=i(969),w=i(8076);const U=["nz-submenu-title",""];function R(E,j){if(1&E&&o._UZ(0,"i",4),2&E){const p=o.oxw();o.Q6J("nzType",p.nzIcon)}}function x(E,j){if(1&E&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&E){const p=o.oxw();o.xp6(2),o.Oqu(p.nzTitle)}}function d(E,j){1&E&&o._UZ(0,"i",8)}function A(E,j){1&E&&o._UZ(0,"i",9)}function B(E,j){if(1&E&&(o.TgZ(0,"span",5),o.YNc(1,d,1,0,"i",6),o.YNc(2,A,1,0,"i",7),o.qZA()),2&E){const p=o.oxw();o.Q6J("ngSwitch",p.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function N(E,j){1&E&&o._UZ(0,"i",10)}const ee=["*"],de=["nz-submenu-inline-child",""];function he(E,j){}const Te=["nz-submenu-none-inline-child",""];function Me(E,j){}const Se=["nz-submenu",""];function ie(E,j){1&E&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function _e(E,j){if(1&E&&o._UZ(0,"div",6),2&E){const p=o.oxw(),m=o.MAs(7);o.Q6J("mode",p.mode)("nzOpen",p.nzOpen)("@.disabled",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("nzNoAnimation",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("menuClass",p.nzMenuClassName)("templateOutlet",m)}}function S(E,j){if(1&E){const p=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(ce){return o.CHM(p),o.oxw(2).setMouseEnterState(ce)}),o.qZA()}if(2&E){const p=o.oxw(2),m=o.MAs(7);o.Q6J("theme",p.theme)("mode",p.mode)("nzOpen",p.nzOpen)("position",p.position)("nzDisabled",p.nzDisabled)("isMenuInsideDropDown",p.isMenuInsideDropDown)("templateOutlet",m)("menuClass",p.nzMenuClassName)("@.disabled",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)("nzNoAnimation",null==p.noAnimation?null:p.noAnimation.nzNoAnimation)}}function se(E,j){if(1&E){const p=o.EpF();o.YNc(0,S,1,10,"ng-template",7),o.NdJ("positionChange",function(ce){return o.CHM(p),o.oxw().onPositionChange(ce)})}if(2&E){const p=o.oxw(),m=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",p.overlayPositions)("cdkConnectedOverlayOrigin",m)("cdkConnectedOverlayWidth",p.triggerWidth)("cdkConnectedOverlayOpen",p.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function W(E,j){1&E&&o.Hsn(0,1)}const pe=[[["","title",""]],"*"],b=["[title]","*"],le=["titleElement"],ne=["nz-menu-group",""];function te(E,j){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const p=o.oxw();o.xp6(1),o.Oqu(p.nzTitle)}}function ue(E,j){1&E&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const re=["*",[["","title",""]]],ze=["*","[title]"],V=new o.OlP("NzIsInDropDownMenuToken"),ge=new o.OlP("NzMenuServiceLocalToken");let J=(()=>{class E{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(p){this.descendantMenuItemClick$.next(p)}onChildMenuItemClick(p){this.childMenuItemClick$.next(p)}setMode(p){this.mode$.next(p)}setTheme(p){this.theme$.next(p)}setInlineIndent(p){this.inlineIndent$.next(p)}}return E.\u0275fac=function(p){return new(p||E)},E.\u0275prov=o.Yz7({token:E,factory:E.\u0275fac}),E})(),ve=(()=>{class E{constructor(p,m,ce){this.nzHostSubmenuService=p,this.nzMenuService=m,this.isMenuInsideDropDown=ce,this.mode$=this.nzMenuService.mode$.pipe((0,l.U)(Pe=>"inline"===Pe?"inline":"vertical"===Pe||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ce=this.childMenuItemClick$.pipe((0,$.zg)(()=>this.mode$),(0,a.h)(Pe=>"inline"!==Pe||this.isMenuInsideDropDown),(0,h.h)(!1)),Ae=(0,_.T)(this.isMouseEnterTitleOrOverlay$,Ce);(0,T.aj)([this.isChildSubMenuOpen$,Ae]).pipe((0,l.U)(([Pe,we])=>Pe||we),(0,I.e)(150),(0,C.x)(),(0,y.R)(this.destroy$)).pipe((0,C.x)()).subscribe(Pe=>{this.setOpenStateWithoutDebounce(Pe),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Pe):this.nzMenuService.isChildSubMenuOpen$.next(Pe)})}onChildMenuItemClick(p){this.childMenuItemClick$.next(p)}setOpenStateWithoutDebounce(p){this.isCurrentSubMenuOpen$.next(p)}setMouseEnterTitleOrOverlayState(p){this.isMouseEnterTitleOrOverlay$.next(p)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(p){return new(p||E)(o.LFG(E,12),o.LFG(J),o.LFG(V))},E.\u0275prov=o.Yz7({token:E,factory:E.\u0275fac}),E})(),De=(()=>{class E{constructor(p,m,ce,Ce,Ae,Qe,Pe,we){this.nzMenuService=p,this.cdr=m,this.nzSubmenuService=ce,this.isMenuInsideDropDown=Ce,this.directionality=Ae,this.routerLink=Qe,this.routerLinkWithHref=Pe,this.router=we,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,we&&this.router.events.pipe((0,y.R)(this.destroy$),(0,a.h)(Je=>Je instanceof Q.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(p){this.nzDisabled?(p.preventDefault(),p.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(p){this.nzSelected=p,this.selected$.next(p)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const p=this.hasActiveLinks();this.nzSelected!==p&&(this.nzSelected=p,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const p=this.isLinkActive(this.router);return this.routerLink&&p(this.routerLink)||this.routerLinkWithHref&&p(this.routerLinkWithHref)||this.listOfRouterLink.some(p)||this.listOfRouterLinkWithHref.some(p)}isLinkActive(p){return m=>p.isActive(m.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var p;(0,T.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,ce])=>{this.inlinePaddingLeft="inline"===m?this.level*ce:null}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,y.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,y.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(p){p.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(J),o.Y36(o.sBO),o.Y36(ve,8),o.Y36(V),o.Y36(L.Is,8),o.Y36(Q.rH,8),o.Y36(Q.yS,8),o.Y36(Q.F0,8))},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-menu-item",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,Q.rH,5),o.Suo(ce,Q.yS,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfRouterLink=Ce),o.iGM(Ce=o.CRH())&&(m.listOfRouterLinkWithHref=Ce)}},hostVars:20,hostBindings:function(p,m){1&p&&o.NdJ("click",function(Ce){return m.clickMenuItem(Ce)}),2&p&&(o.Udp("padding-left","rtl"===m.dir?null:m.nzPaddingLeft||m.inlinePaddingLeft,"px")("padding-right","rtl"===m.dir?m.nzPaddingLeft||m.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",m.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",m.isMenuInsideDropDown&&m.nzSelected)("ant-dropdown-menu-item-danger",m.isMenuInsideDropDown&&m.nzDanger)("ant-dropdown-menu-item-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-item",!m.isMenuInsideDropDown)("ant-menu-item-selected",!m.isMenuInsideDropDown&&m.nzSelected)("ant-menu-item-danger",!m.isMenuInsideDropDown&&m.nzDanger)("ant-menu-item-disabled",!m.isMenuInsideDropDown&&m.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,X.yF)()],E.prototype,"nzDisabled",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzSelected",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzDanger",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzMatchRouter",void 0),E})(),Ee=(()=>{class E{constructor(p,m){this.cdr=p,this.directionality=m,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var p;this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(p){this.nzDisabled||this.subMenuMouseState.next(p)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(o.sBO),o.Y36(L.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(p,m){1&p&&o.NdJ("click",function(){return m.clickTitle()})("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&p&&(o.Udp("padding-left","rtl"===m.dir?null:m.paddingLeft,"px")("padding-right","rtl"===m.dir?m.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",m.isMenuInsideDropDown)("ant-menu-submenu-title",!m.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:U,ngContentSelectors:ee,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(p,m){if(1&p&&(o.F$t(),o.YNc(0,R,1,1,"i",0),o.YNc(1,x,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,B,3,2,"span",2),o.YNc(4,N,1,0,"ng-template",null,3,o.W1O)),2&p){const ce=o.MAs(5);o.Q6J("ngIf",m.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(2),o.Q6J("ngIf",m.isMenuInsideDropDown)("ngIfElse",ce)}},directives:[Z.O5,F.Ls,f.f,Z.RF,Z.n9,Z.ED],encapsulation:2,changeDetection:0}),E})(),Le=(()=>{class E{constructor(p,m,ce){this.elementRef=p,this.renderer=m,this.directionality=ce,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var p;this.calcMotionState(),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(p){const{mode:m,nzOpen:ce,menuClass:Ce}=p;(m||ce)&&this.calcMotionState(),Ce&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Ae=>!!Ae).forEach(Ae=>{this.renderer.removeClass(this.elementRef.nativeElement,Ae)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Ae=>!!Ae).forEach(Ae=>{this.renderer.addClass(this.elementRef.nativeElement,Ae)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(p,m){2&p&&(o.d8E("@collapseMotion",m.expandState),o.ekj("ant-menu-rtl","rtl"===m.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:de,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(p,m){1&p&&o.YNc(0,he,0,0,"ng-template",0),2&p&&o.Q6J("ngTemplateOutlet",m.templateOutlet)},directives:[Z.tP],encapsulation:2,data:{animation:[w.J_]},changeDetection:0}),E})(),Ge=(()=>{class E{constructor(p){this.directionality=p,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(p){this.nzDisabled||this.subMenuMouseState.next(p)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var p;this.calcMotionState(),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m})}ngOnChanges(p){const{mode:m,nzOpen:ce}=p;(m||ce)&&this.calcMotionState()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(L.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(p,m){1&p&&o.NdJ("mouseenter",function(){return m.setMouseState(!0)})("mouseleave",function(){return m.setMouseState(!1)}),2&p&&(o.d8E("@slideMotion",m.expandState)("@zoomBigMotion",m.expandState),o.ekj("ant-menu-light","light"===m.theme)("ant-menu-dark","dark"===m.theme)("ant-menu-submenu-placement-bottom","horizontal"===m.mode)("ant-menu-submenu-placement-right","vertical"===m.mode&&"right"===m.position)("ant-menu-submenu-placement-left","vertical"===m.mode&&"left"===m.position)("ant-menu-submenu-rtl","rtl"===m.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:Te,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(p,m){1&p&&(o.TgZ(0,"div",0),o.YNc(1,Me,0,0,"ng-template",1),o.qZA()),2&p&&(o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-menu",!m.isMenuInsideDropDown)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown)("ant-menu-vertical",!m.isMenuInsideDropDown)("ant-dropdown-menu-sub",m.isMenuInsideDropDown)("ant-menu-sub",!m.isMenuInsideDropDown)("ant-menu-rtl","rtl"===m.dir),o.Q6J("ngClass",m.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",m.templateOutlet))},directives:[Z.mk,Z.tP],encapsulation:2,data:{animation:[w.$C,w.mF]},changeDetection:0}),E})();const Be=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],Fe=[M.yW.bottomLeft];let Ne=(()=>{class E{constructor(p,m,ce,Ce,Ae,Qe,Pe){this.nzMenuService=p,this.cdr=m,this.nzSubmenuService=ce,this.platform=Ce,this.isMenuInsideDropDown=Ae,this.directionality=Qe,this.noAnimation=Pe,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(p){this.nzSubmenuService.setOpenStateWithoutDebounce(p)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(p){this.isActive=p,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(p)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(p){const m=(0,M.d_)(p);"rightTop"===m||"rightBottom"===m||"right"===m?this.position="right":("leftTop"===m||"leftBottom"===m||"left"===m)&&(this.position="left")}ngOnInit(){var p;this.nzMenuService.theme$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.theme=m,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.mode=m,"horizontal"===m?this.overlayPositions=Fe:"vertical"===m&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,T.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,ce])=>{this.inlinePaddingLeft="inline"===m?this.level*ce:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.isActive=m,m!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=m,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const p=this.listOfNzMenuItemDirective,m=p.changes,ce=(0,_.T)(m,...p.map(Ce=>Ce.selected$));m.pipe((0,K.O)(p),(0,O.w)(()=>ce),(0,K.O)(!0),(0,l.U)(()=>p.some(Ce=>Ce.nzSelected)),(0,y.R)(this.destroy$)).subscribe(Ce=>{this.isSelected=Ce,this.cdr.markForCheck()})}ngOnChanges(p){const{nzOpen:m}=p;m&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(J),o.Y36(o.sBO),o.Y36(ve),o.Y36(G.t4),o.Y36(V),o.Y36(L.Is,8),o.Y36(q.P,9))},E.\u0275cmp=o.Xpm({type:E,selectors:[["","nz-submenu",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,E,5),o.Suo(ce,De,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce)}},viewQuery:function(p,m){if(1&p&&o.Gf(v.xu,7,o.SBq),2&p){let ce;o.iGM(ce=o.CRH())&&(m.cdkOverlayOrigin=ce.first)}},hostVars:34,hostBindings:function(p,m){2&p&&o.ekj("ant-dropdown-menu-submenu",m.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",m.isMenuInsideDropDown&&m.nzDisabled)("ant-dropdown-menu-submenu-open",m.isMenuInsideDropDown&&m.nzOpen)("ant-dropdown-menu-submenu-selected",m.isMenuInsideDropDown&&m.isSelected)("ant-dropdown-menu-submenu-vertical",m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-dropdown-menu-submenu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-dropdown-menu-submenu-inline",m.isMenuInsideDropDown&&"inline"===m.mode)("ant-dropdown-menu-submenu-active",m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu",!m.isMenuInsideDropDown)("ant-menu-submenu-disabled",!m.isMenuInsideDropDown&&m.nzDisabled)("ant-menu-submenu-open",!m.isMenuInsideDropDown&&m.nzOpen)("ant-menu-submenu-selected",!m.isMenuInsideDropDown&&m.isSelected)("ant-menu-submenu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.mode)("ant-menu-submenu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.mode)("ant-menu-submenu-inline",!m.isMenuInsideDropDown&&"inline"===m.mode)("ant-menu-submenu-active",!m.isMenuInsideDropDown&&m.isActive)("ant-menu-submenu-rtl","rtl"===m.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([ve]),o.TTD],attrs:Se,ngContentSelectors:b,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(p,m){if(1&p&&(o.F$t(pe),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Ce){return m.setMouseEnterState(Ce)})("toggleSubMenu",function(){return m.toggleSubMenu()}),o.YNc(2,ie,1,0,"ng-content",2),o.qZA(),o.YNc(3,_e,1,6,"div",3),o.YNc(4,se,1,5,"ng-template",null,4,o.W1O),o.YNc(6,W,1,0,"ng-template",null,5,o.W1O)),2&p){const ce=o.MAs(5);o.Q6J("nzIcon",m.nzIcon)("nzTitle",m.nzTitle)("mode",m.mode)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("paddingLeft",m.nzPaddingLeft||m.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!m.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===m.mode)("ngIfElse",ce)}},directives:[Ee,Le,Ge,v.xu,Z.O5,q.P,v.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,X.yF)()],E.prototype,"nzOpen",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzDisabled",void 0),E})();function $e(E,j){return E||j}function Re(E){return E||!1}let be=(()=>{class E{constructor(p,m,ce,Ce){this.nzMenuService=p,this.isMenuInsideDropDown=m,this.cdr=ce,this.directionality=Ce,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(p){this.nzInlineCollapsed=p,this.inlineCollapsed$.next(p)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(p=>p.nzOpen),this.listOfNzSubMenuComponent.forEach(p=>p.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(p=>p.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var p;(0,T.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,y.R)(this.destroy$)).subscribe(([m,ce])=>{this.actualMode=m?"vertical":ce,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.nzClick.emit(m),this.nzSelectable&&!m.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(ce=>ce.setSelectedState(ce===m))}),this.dir=this.directionality.value,null===(p=this.directionality.change)||void 0===p||p.pipe((0,y.R)(this.destroy$)).subscribe(m=>{this.dir=m,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(p){const{nzInlineCollapsed:m,nzInlineIndent:ce,nzTheme:Ce,nzMode:Ae}=p;m&&this.inlineCollapsed$.next(this.nzInlineCollapsed),ce&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ce&&this.nzMenuService.setTheme(this.nzTheme),Ae&&(this.mode$.next(this.nzMode),!p.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Qe=>Qe.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(J),o.Y36(V),o.Y36(o.sBO),o.Y36(L.Is,8))},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-menu",""]],contentQueries:function(p,m,ce){if(1&p&&(o.Suo(ce,De,5),o.Suo(ce,Ne,5)),2&p){let Ce;o.iGM(Ce=o.CRH())&&(m.listOfNzMenuItemDirective=Ce),o.iGM(Ce=o.CRH())&&(m.listOfNzSubMenuComponent=Ce)}},hostVars:34,hostBindings:function(p,m){2&p&&o.ekj("ant-dropdown-menu",m.isMenuInsideDropDown)("ant-dropdown-menu-root",m.isMenuInsideDropDown)("ant-dropdown-menu-light",m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-dropdown-menu-dark",m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-dropdown-menu-vertical",m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-dropdown-menu-horizontal",m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-dropdown-menu-inline",m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-dropdown-menu-inline-collapsed",m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu",!m.isMenuInsideDropDown)("ant-menu-root",!m.isMenuInsideDropDown)("ant-menu-light",!m.isMenuInsideDropDown&&"light"===m.nzTheme)("ant-menu-dark",!m.isMenuInsideDropDown&&"dark"===m.nzTheme)("ant-menu-vertical",!m.isMenuInsideDropDown&&"vertical"===m.actualMode)("ant-menu-horizontal",!m.isMenuInsideDropDown&&"horizontal"===m.actualMode)("ant-menu-inline",!m.isMenuInsideDropDown&&"inline"===m.actualMode)("ant-menu-inline-collapsed",!m.isMenuInsideDropDown&&m.nzInlineCollapsed)("ant-menu-rtl","rtl"===m.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:ge,useClass:J},{provide:J,useFactory:$e,deps:[[new o.tp0,new o.FiY,J],ge]},{provide:V,useFactory:Re,deps:[[new o.tp0,new o.FiY,V]]}]),o.TTD]}),(0,e.gn)([(0,X.yF)()],E.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,X.yF)()],E.prototype,"nzSelectable",void 0),E})();function Ze(E){return E||!1}let Ye=(()=>{class E{constructor(p,m,ce){this.elementRef=p,this.renderer=m,this.isMenuInsideDropDown=ce,this.renderer.addClass(p.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const p=this.titleElement.nativeElement.nextElementSibling;p&&this.renderer.addClass(p,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(V))},E.\u0275cmp=o.Xpm({type:E,selectors:[["","nz-menu-group",""]],viewQuery:function(p,m){if(1&p&&o.Gf(le,5),2&p){let ce;o.iGM(ce=o.CRH())&&(m.titleElement=ce.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:V,useFactory:Ze,deps:[[new o.tp0,new o.FiY,V]]}])],attrs:ne,ngContentSelectors:ze,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(p,m){1&p&&(o.F$t(re),o.TgZ(0,"div",null,0),o.YNc(2,te,2,1,"ng-container",1),o.YNc(3,ue,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&p&&(o.ekj("ant-menu-item-group-title",!m.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",m.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",m.nzTitle),o.xp6(1),o.Q6J("ngIf",!m.nzTitle))},directives:[f.f,Z.O5],encapsulation:2,changeDetection:0}),E})(),We=(()=>{class E{constructor(p,m){this.elementRef=p,this.renderer=m,this.renderer.addClass(p.nativeElement,"ant-dropdown-menu-item-divider")}}return E.\u0275fac=function(p){return new(p||E)(o.Y36(o.SBq),o.Y36(o.Qsj))},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),E})(),oe=(()=>{class E{}return E.\u0275fac=function(p){return new(p||E)},E.\u0275mod=o.oAB({type:E}),E.\u0275inj=o.cJS({imports:[[L.vT,Z.ez,G.ud,v.U8,F.PV,q.g,f.T]]}),E})()},3610:(fe,Y,i)=>{i.d(Y,{$6:()=>M,lU:()=>L});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),_=i(1721),T=i(404),l=i(4832),$=i(226),a=i(1314),h=i(6950),I=i(9808),C=i(969);function y(G,q){if(1&G&&(o.ynx(0),o._uU(1),o.BQk()),2&G){const Z=o.oxw(3);o.xp6(1),o.Oqu(Z.nzTitle)}}function K(G,q){if(1&G&&(o.TgZ(0,"div",10),o.YNc(1,y,2,1,"ng-container",9),o.qZA()),2&G){const Z=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",Z.nzTitle)}}function O(G,q){if(1&G&&(o.ynx(0),o._uU(1),o.BQk()),2&G){const Z=o.oxw(2);o.xp6(1),o.Oqu(Z.nzContent)}}function X(G,q){if(1&G&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,K,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,O,2,1,"ng-container",9),o.qZA()()()()()),2&G){const Z=o.oxw();o.ekj("ant-popover-rtl","rtl"===Z.dir),o.Q6J("ngClass",Z._classMap)("ngStyle",Z.nzOverlayStyle)("@.disabled",null==Z.noAnimation?null:Z.noAnimation.nzNoAnimation)("nzNoAnimation",null==Z.noAnimation?null:Z.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",Z.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",Z.nzContent)}}let L=(()=>{class G extends T.Mg{constructor(Z,F,f,w,U,R){super(Z,F,f,w,U,R),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(v)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return G.\u0275fac=function(Z){return new(Z||G)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(l.P,9),o.Y36(s.jY))},G.\u0275dir=o.lG2({type:G,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(Z,F){2&Z&&o.ekj("ant-popover-open",F.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,_.yF)()],G.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],G.prototype,"nzPopoverBackdrop",void 0),G})(),v=(()=>{class G extends T.XK{constructor(Z,F,f){super(Z,F,f),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,T.pu)(this.nzTitle)&&(0,T.pu)(this.nzContent)}}return G.\u0275fac=function(Z){return new(Z||G)(o.Y36(o.sBO),o.Y36($.Is,8),o.Y36(l.P,9))},G.\u0275cmp=o.Xpm({type:G,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(Z,F){1&Z&&(o.YNc(0,X,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function(w){return F.onClickOutside(w)})("detach",function(){return F.hide()})("positionChange",function(w){return F.onPositionChange(w)})),2&Z&&o.Q6J("cdkConnectedOverlayHasBackdrop",F.hasBackdrop)("cdkConnectedOverlayOrigin",F.origin)("cdkConnectedOverlayPositions",F._positions)("cdkConnectedOverlayOpen",F._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",F.nzArrowPointAtCenter)},directives:[a.pI,h.hQ,I.mk,I.PC,l.P,I.O5,C.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),G})(),M=(()=>{class G{}return G.\u0275fac=function(Z){return new(Z||G)},G.\u0275mod=o.oAB({type:G}),G.\u0275inj=o.cJS({imports:[[$.vT,I.ez,a.U8,C.T,h.e4,l.g,T.cg]]}),G})()},8144:(fe,Y,i)=>{i.d(Y,{$1:()=>K,NU:()=>Q,zf:()=>L});var e=i(226),o=i(9808),n=i(5e3),s=i(655),_=i(8929),T=i(7625),l=i(9439),$=i(1721);function a(v,M){}const h=function(v){return{$implicit:v}};function I(v,M){if(1&v&&(n.TgZ(0,"span",4),n.YNc(1,a,0,0,"ng-template",5),n.qZA()),2&v){const G=n.oxw(),q=G.last,Z=G.index,F=n.oxw();n.Udp("margin-bottom","vertical"===F.nzDirection?q?null:F.spaceSize:null,"px")("margin-right","horizontal"===F.nzDirection?q?null:F.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",F.nzSplit)("ngTemplateOutletContext",n.VKq(6,h,Z))}}function C(v,M){if(1&v&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,I,2,8,"span",3)),2&v){const G=M.$implicit,q=M.last,Z=n.oxw();n.Udp("margin-bottom","vertical"===Z.nzDirection?q?null:Z.spaceSize:null,"px")("margin-right","horizontal"===Z.nzDirection?q?null:Z.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",G),n.xp6(1),n.Q6J("ngIf",Z.nzSplit&&!q)}}const y=["*"];let K=(()=>{class v{constructor(){}}return v.\u0275fac=function(G){return new(G||v)},v.\u0275dir=n.lG2({type:v,selectors:[["","nzSpaceItem",""]]}),v})();const X={small:8,middle:16,large:24};let Q=(()=>{class v{constructor(G,q){this.nzConfigService=G,this.cdr=q,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=X.small,this.destroy$=new _.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?X[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return v.\u0275fac=function(G){return new(G||v)(n.Y36(l.jY),n.Y36(n.sBO))},v.\u0275cmp=n.Xpm({type:v,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(G,q,Z){if(1&G&&n.Suo(Z,K,4,n.Rgc),2&G){let F;n.iGM(F=n.CRH())&&(q.items=F)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(G,q){2&G&&(n.Udp("flex-wrap",q.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===q.nzDirection)("ant-space-vertical","vertical"===q.nzDirection)("ant-space-align-start","start"===q.mergedAlign)("ant-space-align-end","end"===q.mergedAlign)("ant-space-align-center","center"===q.mergedAlign)("ant-space-align-baseline","baseline"===q.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:y,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(G,q){1&G&&(n.F$t(),n.Hsn(0),n.YNc(1,C,3,6,"ng-template",0)),2&G&&(n.xp6(1),n.Q6J("ngForOf",q.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,$.yF)()],v.prototype,"nzWrap",void 0),(0,s.gn)([(0,l.oS)()],v.prototype,"nzSize",void 0),v})(),L=(()=>{class v{}return v.\u0275fac=function(G){return new(G||v)},v.\u0275mod=n.oAB({type:v}),v.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),v})()},7525:(fe,Y,i)=>{i.d(Y,{W:()=>U,j:()=>R});var e=i(655),o=i(5e3),n=i(8929),s=i(591),_=i(839),T=i(8723),l=i(1177);class a{constructor(d){this.durationSelector=d}call(d,A){return A.subscribe(new h(d,this.durationSelector))}}class h extends l.Ds{constructor(d,A){super(d),this.durationSelector=A,this.hasValue=!1}_next(d){try{const A=this.durationSelector.call(this,d);A&&this._tryNext(d,A)}catch(A){this.destination.error(A)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(d,A){let B=this.durationSubscription;this.value=d,this.hasValue=!0,B&&(B.unsubscribe(),this.remove(B)),B=(0,l.ft)(A,new l.IY(this)),B&&!B.closed&&this.add(this.durationSubscription=B)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const d=this.value,A=this.durationSubscription;A&&(this.durationSubscription=void 0,A.unsubscribe(),this.remove(A)),this.value=void 0,this.hasValue=!1,super._next(d)}}}var I=i(1059),C=i(5778),y=i(7545),K=i(7625),O=i(9439),X=i(1721),Q=i(226),L=i(9808),v=i(7144);function M(x,d){1&x&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function G(x,d){}function q(x,d){if(1&x&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&x){const A=o.oxw(2);o.xp6(1),o.Oqu(A.nzTip)}}function Z(x,d){if(1&x&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,G,0,0,"ng-template",6),o.YNc(3,q,2,1,"div",7),o.qZA()()),2&x){const A=o.oxw(),B=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===A.dir)("ant-spin-spinning",A.isLoading)("ant-spin-lg","large"===A.nzSize)("ant-spin-sm","small"===A.nzSize)("ant-spin-show-text",A.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",A.nzIndicator||B),o.xp6(1),o.Q6J("ngIf",A.nzTip)}}function F(x,d){if(1&x&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&x){const A=o.oxw();o.ekj("ant-spin-blur",A.isLoading)}}const f=["*"],w="spin";let U=(()=>{class x{constructor(A,B,N){this.nzConfigService=A,this.cdr=B,this.directionality=N,this._nzModuleName=w,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new _.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var A;this.delay$.pipe((0,I.O)(this.nzDelay),(0,C.x)(),(0,y.w)(N=>0===N?this.spinning$:this.spinning$.pipe(function $(x){return d=>d.lift(new a(x))}(ee=>(0,T.H)(ee?N:0)))),(0,K.R)(this.destroy$)).subscribe(N=>{this.isLoading=N,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(w).pipe((0,K.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(A=this.directionality.change)||void 0===A||A.pipe((0,K.R)(this.destroy$)).subscribe(N=>{this.dir=N,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(A){const{nzSpinning:B,nzDelay:N}=A;B&&this.spinning$.next(this.nzSpinning),N&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return x.\u0275fac=function(A){return new(A||x)(o.Y36(O.jY),o.Y36(o.sBO),o.Y36(Q.Is,8))},x.\u0275cmp=o.Xpm({type:x,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(A,B){2&A&&o.ekj("ant-spin-nested-loading",!B.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:f,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(A,B){1&A&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,Z,4,12,"div",1),o.YNc(3,F,2,2,"div",2)),2&A&&(o.xp6(2),o.Q6J("ngIf",B.isLoading),o.xp6(1),o.Q6J("ngIf",!B.nzSimple))},directives:[L.O5,L.tP],encapsulation:2}),(0,e.gn)([(0,O.oS)()],x.prototype,"nzIndicator",void 0),(0,e.gn)([(0,X.Rn)()],x.prototype,"nzDelay",void 0),(0,e.gn)([(0,X.yF)()],x.prototype,"nzSimple",void 0),(0,e.gn)([(0,X.yF)()],x.prototype,"nzSpinning",void 0),x})(),R=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=o.oAB({type:x}),x.\u0275inj=o.cJS({imports:[[Q.vT,L.ez,v.Q8]]}),x})()},8481:(fe,Y,i)=>{i.d(Y,{X:()=>K,j:()=>y});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),_=i(8693),T=i(1721),l=i(226),$=i(9808),a=i(5017),h=i(3075);function I(O,X){if(1&O){const Q=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(v){return o.CHM(Q),o.oxw().closeTag(v)}),o.qZA()}}const C=["*"];let y=(()=>{class O{constructor(Q,L,v,M){this.cdr=Q,this.renderer=L,this.elementRef=v,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Q){this.nzOnClose.emit(Q),Q.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Q=this.elementRef.nativeElement,L=new RegExp(`(ant-tag-(?:${[..._.uf,..._.Bh].join("|")}))`,"g"),v=Q.classList.toString(),M=[];let G=L.exec(v);for(;null!==G;)M.push(G[1]),G=L.exec(v);Q.classList.remove(...M)}setPresetColor(){const Q=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,_.o2)(this.nzColor)||(0,_.M8)(this.nzColor)),this.isPresetColor&&Q.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,s.R)(this.destroy$)).subscribe(L=>{this.dir=L,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzColor:L}=Q;L&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(Q){return new(Q||O)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(l.Is,8))},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Q,L){1&Q&&o.NdJ("click",function(){return L.updateCheckedStatus()}),2&Q&&(o.Udp("background-color",L.isPresetColor?"":L.nzColor),o.ekj("ant-tag-has-color",L.nzColor&&!L.isPresetColor)("ant-tag-checkable","checkable"===L.nzMode)("ant-tag-checkable-checked",L.nzChecked)("ant-tag-rtl","rtl"===L.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:C,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Q,L){1&Q&&(o.F$t(),o.Hsn(0),o.YNc(1,I,1,0,"i",0)),2&Q&&(o.xp6(1),o.Q6J("ngIf","closeable"===L.nzMode))},directives:[$.O5,a.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,T.yF)()],O.prototype,"nzChecked",void 0),O})(),K=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=o.oAB({type:O}),O.\u0275inj=o.cJS({imports:[[l.vT,$.ez,h.u5,a.PV]]}),O})()}}]);