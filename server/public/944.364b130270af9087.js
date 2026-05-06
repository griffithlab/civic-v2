"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[944],{3193:(ge,Y,i)=>{i.d(Y,{H:()=>De});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),z=i(325),y=i(8481),a=i(3610),B=i(3240),l=i(4850),v=i(2198),I=i(7630),_=i(7484),T=i(5017),j=i(3098),O=i(1894),k=i(8144),Q=i(6949),$=i(160);function Z(se,he){if(1&se&&(n._UZ(0,"i",11),n.ALo(1,"entityColor"),n._uU(2)),2&se){const E=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Gene")),n.xp6(2),n.hij(" ",E.officialName," ")}}function M(se,he){if(1&se&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&se){const E=he.$implicit;n.xp6(1),n.Oqu(E)}}function b(se,he){if(1&se&&(n.TgZ(0,"nz-descriptions-item",12),n.YNc(1,M,2,1,"nz-tag",13),n.qZA()),2&se){const E=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",E.geneAliases)}}function ee(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",15),n._UZ(2,"i",16),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/flags"),n.xp6(3),n.hij(" Flags (",E.flags.totalCount,") ")}}function V(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",17),n._UZ(2,"i",18),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",E.revisions.totalCount,") ")}}function L(se,he){if(1&se&&(n.TgZ(0,"a",14)(1,"nz-tag",19),n._UZ(2,"i",20),n._uU(3),n.qZA()()),2&se){const E=n.oxw().ngIf;n.MGl("routerLink","/genes/",E.id,"/comments"),n.xp6(3),n.hij(" Comments (",E.comments.totalCount,") ")}}function m(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,Z,3,4,"ng-template",null,3,n.W1O),n.TgZ(4,"nz-descriptions",4),n.YNc(5,b,2,1,"nz-descriptions-item",5),n.TgZ(6,"nz-descriptions-item",6),n._uU(7),n.qZA()(),n.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),n.YNc(11,ee,4,2,"a",10),n.YNc(12,V,4,2,"a",10),n.YNc(13,L,4,2,"a",10),n.qZA()()()(),n.BQk()),2&se){const E=he.ngIf,oe=n.MAs(3);n.xp6(1),n.Q6J("nzTitle",oe),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",E.geneAliases.length>0),n.xp6(2),n.hij(" ",E.variants.totalCount," ")}}let w=(()=>{class se{constructor(E){this.gql=E}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,l.U)(({data:E})=>null==E?void 0:E.gene),(0,v.h)(B.ep))}}return se.\u0275fac=function(E){return new(E||se)(n.Y36(I.rJ8))},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(E,oe){1&E&&(n.TgZ(0,"div",0),n.YNc(1,m,14,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,oe.gene$)))},directives:[s.O5,_.bd,T.Ls,j.R7,j.uj,s.sg,y.j,O.SK,O.t3,k.NU,k.$1,z.yS],pipes:[Q.fM,$.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),se})();var U=i(1730),F=i(4557);function N(se,he){}function d(se,he){if(1&se&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,N,0,0,"ng-template",5),n.qZA(),n.BQk()),2&se){const E=n.oxw(),oe=n.MAs(2);n.xp6(1),n.Q6J("routerLink",E.gene.link),n.xp6(1),n.Q6J("ngTemplateOutlet",oe)}}function P(se,he){}function G(se,he){if(1&se&&n._UZ(0,"cvc-gene-popover",8),2&se){const E=n.oxw(2);n.Q6J("geneId",E.gene.id)}}function S(se,he){if(1&se){const E=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(W){return n.CHM(E),n.oxw().itemClosed(W)}),n.YNc(1,P,0,0,"ng-template",5),n.qZA(),n.YNc(2,G,1,1,"ng-template",null,7,n.W1O)}if(2&se){const E=n.MAs(3),oe=n.oxw(),W=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",oe.onCloseClicked?0:.5)("nzPopoverContent",E)("nzPopoverTrigger",oe.enablePopover?"hover":null)("nzMode",oe.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",W)}}function q(se,he){}function ie(se,he){if(1&se&&n.YNc(0,q,0,0,"ng-template",5),2&se){n.oxw();const E=n.MAs(2);n.Q6J("ngTemplateOutlet",E)}}function fe(se,he){if(1&se&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&se){const E=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,E.gene.name,12)," ")}}function _e(se,he){if(1&se&&n._uU(0),2&se){const E=n.oxw(2);n.hij(" ",E.gene.name," ")}}function Te(se,he){if(1&se&&(n.TgZ(0,"cvc-icon-badges",9),n._UZ(1,"i",10),n.ALo(2,"entityColor"),n.qZA(),n.YNc(3,fe,3,4,"ng-container",0),n.YNc(4,_e,1,1,"ng-template",null,11,n.W1O)),2&se){const E=n.MAs(5),oe=n.oxw();n.Q6J("flagged",oe.gene.flagged)("entityColor",oe.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",n.lcZ(2,5,"Gene")),n.xp6(2),n.Q6J("ngIf",oe.truncateLongName)("ngIfElse",E)}}let De=(()=>{class se extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return se.\u0275fac=function(E){return new(E||se)},se.\u0275cmp=n.Xpm({type:se,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(E,oe){if(1&E&&(n.YNc(0,d,3,2,"ng-container",0),n.YNc(1,S,4,5,"ng-template",null,1,n.W1O),n.YNc(3,ie,1,1,"ng-template",null,2,n.W1O),n.YNc(5,Te,6,7,"ng-template",null,3,n.W1O)),2&E){const W=n.MAs(4);n.Q6J("ngIf",oe.linked)("ngIfElse",W)}},directives:[s.O5,z.yS,s.tP,y.j,a.lU,w,U.b,T.Ls],pipes:[$.a,F.W],styles:[""],changeDetection:0}),se})()},3309:(ge,Y,i)=>{i.d(Y,{U:()=>k});var e=i(9808),o=i(325),n=i(8481),s=i(5017),z=i(3610),y=i(6905),a=i(6949),B=i(7484),l=i(3098),v=i(1894),I=i(8144),_=i(5e3);let T=(()=>{class Q{}return Q.\u0275fac=function(Z){return new(Z||Q)},Q.\u0275mod=_.oAB({type:Q}),Q.\u0275inj=_.cJS({imports:[[e.ez,o.Bz,a.WG,B.vh,v.Jb,l.q6,n.X,s.PV,I.zf,y.s]]}),Q})();var j=i(4401),O=i(6429);let k=(()=>{class Q{}return Q.\u0275fac=function(Z){return new(Z||Q)},Q.\u0275mod=_.oAB({type:Q}),Q.\u0275inj=_.cJS({imports:[[e.ez,o.Bz,n.X,z.$6,s.PV,j.mS,y.s,T,O.C]]}),Q})()},1912:(ge,Y,i)=>{i.d(Y,{s:()=>j});var e=i(5e3),o=i(6042),n=i(2643),s=i(2683),z=i(3640),a=i(2160),B=i(3762),l=i(5017);let v=(()=>{class O{constructor(Q){this.cookies=Q,this.location=function y(O){return encodeURIComponent(O).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return O.\u0275fac=function(Q){return new(Q||O)(e.Y36(a.N))},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(Q,$){1&Q&&(e.TgZ(0,"nz-list",0)(1,"nz-list-item")(2,"form",1),e._UZ(3,"input",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Sign In with a Google Account "),e.qZA()()(),e.TgZ(7,"nz-list-item")(8,"form",1),e._UZ(9,"input",2),e.TgZ(10,"button",3),e._uU(11," Sign In with an ORCID Account "),e.qZA()()(),e.TgZ(12,"nz-list-item")(13,"form",1),e._UZ(14,"input",2),e.TgZ(15,"button",3),e._UZ(16,"i",5),e._uU(17," Sign In with a Github Account "),e.qZA()()()()),2&Q&&(e.xp6(2),e.MGl("action","/api/auth/google_oauth2?origin=",$.location,"",e.LSH),e.xp6(1),e.s9C("value",$.xsrfToken),e.xp6(5),e.MGl("action","/api/auth/orcid?origin=",$.location,"",e.LSH),e.xp6(1),e.s9C("value",$.xsrfToken),e.xp6(4),e.MGl("action","/api/auth/github?origin=",$.location,"",e.LSH),e.xp6(1),e.s9C("value",$.xsrfToken))},directives:[B.n_,B.AA,o.ix,n.dQ,s.w,l.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),O})();function I(O,k){1&O&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),e.qZA(),e._UZ(3,"cvc-auth-options-list"),e.BQk())}function _(O,k){1&O&&e._uU(0," Sign In / Sign Up\n")}function T(O,k){if(1&O){const Q=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(Q),e.oxw().handleCancel()}),e._uU(1,"Cancel"),e.qZA()}}let j=(()=>{class O{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=e.Xpm({type:O,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(Q,$){if(1&Q&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return $.showAuth()}),e.TgZ(1,"span"),e._uU(2,"Sign In / Sign Up"),e.qZA()(),e.TgZ(3,"nz-modal",1),e.NdJ("nzVisibleChange",function(M){return $.authVisible=M})("nzOnCancel",function(){return $.handleCancel()}),e.YNc(4,I,4,0,"ng-container",2),e.qZA(),e.YNc(5,_,1,0,"ng-template",null,3,e.W1O),e.YNc(7,T,2,0,"ng-template",null,4,e.W1O)),2&Q){const Z=e.MAs(6),M=e.MAs(8);e.xp6(3),e.Q6J("nzVisible",$.authVisible)("nzTitle",Z)("nzFooter",M)}},directives:[o.ix,n.dQ,s.w,z.du,z.Hf,v],styles:["[_nghost-%COMP%]{display:inline-block}"]}),O})()},1844:(ge,Y,i)=>{i.d(Y,{B:()=>B});var e=i(9808),o=i(6042),n=i(3640),s=i(3762),z=i(5017),y=i(5e3);let a=(()=>{class l{}return l.\u0275fac=function(I){return new(I||l)},l.\u0275mod=y.oAB({type:l}),l.\u0275inj=y.cJS({imports:[[e.ez,z.PV,s.Ph,o.sL]]}),l})(),B=(()=>{class l{}return l.\u0275fac=function(I){return new(I||l)},l.\u0275mod=y.oAB({type:l}),l.\u0275inj=y.cJS({imports:[[e.ez,o.sL,n.Qp,a]]}),l})()},1730:(ge,Y,i)=>{i.d(Y,{b:()=>l});var e=i(9771),o=i(5e3),n=i(9808);const s=function(v){return{background:v}};function z(v,I){if(1&v&&o._UZ(0,"div",3),2&v){const _=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,_.flagColor))}}function y(v,I){if(1&v&&o._UZ(0,"div",4),2&v){const _=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,_.entityColor))}}function a(v,I){if(1&v&&o._UZ(0,"div",5),2&v){const _=o.oxw();o.Q6J("ngStyle",o.VKq(1,s,_.entityColor))}}const B=["*"];let l=(()=>{class v{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,e.f)("Flag")}}return v.\u0275fac=function(_){return new(_||v)},v.\u0275cmp=o.Xpm({type:v,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:B,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(_,T){1&_&&(o.F$t(),o.Hsn(0),o.YNc(1,z,1,3,"div",0),o.YNc(2,y,1,3,"div",1),o.YNc(3,a,1,3,"div",2)),2&_&&(o.xp6(1),o.Q6J("ngIf",T.flagged),o.xp6(1),o.Q6J("ngIf",T.hasRevisions),o.xp6(1),o.Q6J("ngIf",T.hasComments))},directives:[n.O5,n.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#AAA}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),v})()},6429:(ge,Y,i)=>{i.d(Y,{C:()=>s});var e=i(9808),o=i(6905),n=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=n.oAB({type:z}),z.\u0275inj=n.cJS({imports:[[e.ez,o.s]]}),z})()},6550:(ge,Y,i)=>{i.d(Y,{l:()=>y});var e=i(5e3),o=i(8481),n=i(404),s=i(5017);const z=["*"];let y=(()=>{class a{set href(l){if(!l)throw new Error("link-tag link Input requires string.");this._href=l}get href(){return this._href}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:z,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(l,v){1&l&&(e.F$t(),e.TgZ(0,"a",0)(1,"nz-tag",1),e._UZ(2,"i",2),e.Hsn(3),e.qZA()()),2&l&&(e.Q6J("href",v.href,e.LSH),e.xp6(1),e.Q6J("nzTooltipTitle",v.tooltip)("nzTooltipTrigger",v.tooltip?"hover":null),e.xp6(1),e.Q6J("nzType",v.iconName?v.iconName:"link"))},directives:[o.j,n.SY,s.Ls],styles:[""]}),a})()},4989:(ge,Y,i)=>{i.d(Y,{X:()=>y});var e=i(9808),o=i(404),n=i(8481),s=i(5017),z=i(5e3);let y=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=z.oAB({type:a}),a.\u0275inj=z.cJS({imports:[[e.ez,o.cg,n.X,s.PV]]}),a})()},7881:(ge,Y,i)=>{i.d(Y,{L:()=>y});var e=i(5e3),o=i(9808),n=i(6699);function s(a,B){if(1&a&&e._UZ(0,"nz-avatar",2),2&a){const l=e.oxw();e.Q6J("nzSrc",l.user.profileImagePath)("nzShape",l.shape?l.shape:"circle")("nzSize",l.size)}}function z(a,B){if(1&a&&(e._UZ(0,"nz-avatar",3),e.ALo(1,"uppercase")),2&a){const l=e.oxw();e.Q6J("nzSize",l.size)("nzText",e.lcZ(1,2,l.user.displayName.charAt(0)))}}let y=(()=>{class a{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(l,v){if(1&l&&(e.YNc(0,s,1,3,"nz-avatar",0),e.YNc(1,z,2,4,"ng-template",null,1,e.W1O)),2&l){const I=e.MAs(2);e.Q6J("ngIf",v.user.profileImagePath)("ngIfElse",I)}},directives:[o.O5,n.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},5473:(ge,Y,i)=>{i.d(Y,{H:()=>s});var e=i(9808),o=i(6699),n=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=n.oAB({type:z}),z.\u0275inj=n.cJS({imports:[[e.ez,o.Rt]]}),z})()},8664:(ge,Y,i)=>{i.d(Y,{I:()=>de});var e=i(6654),o=i(9771),n=i(5e3),s=i(9808),z=i(325),y=i(8481),a=i(3610),B=i(3240),l=i(4850),v=i(2198),I=i(7630),_=i(7484),T=i(5017),j=i(3193),O=i(3098),k=i(6550),Q=i(1894),$=i(8144),Z=i(6949),M=i(160);function b(R,ce){if(1&R&&(n._UZ(0,"i",13),n.ALo(1,"entityColor"),n._uU(2)),2&R){const ne=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"Variant")),n.xp6(2),n.hij(" ",ne.name," ")}}function ee(R,ce){if(1&R&&n._UZ(0,"cvc-gene-tag",14),2&R){const ne=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",ne.gene)}}function V(R,ce){if(1&R&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&R){const ne=ce.$implicit;n.xp6(1),n.Oqu(ne)}}function L(R,ce){if(1&R&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,V,2,1,"nz-tag",16),n.qZA()),2&R){const ne=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",ne.variantAliases)}}function m(R,ce){if(1&R&&(n.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),n._uU(2),n.qZA()()),2&R){const ne=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",ne.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",ne.alleleRegistryId," ")}}function w(R,ce){if(1&R&&(n.TgZ(0,"a",19)(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA()()),2&R){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/flags"),n.xp6(3),n.hij(" Flags (",ne.flags.totalCount,") ")}}function U(R,ce){if(1&R&&(n.TgZ(0,"a",19)(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA()()),2&R){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",ne.revisions.totalCount,") ")}}function F(R,ce){if(1&R&&(n.TgZ(0,"a",19)(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA()()),2&R){const ne=n.oxw().ngIf;n.MGl("routerLink","/variants/",ne.id,"/comments"),n.xp6(3),n.hij(" Comments (",ne.comments.totalCount,") ")}}function N(R,ce){if(1&R&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,b,3,4,"ng-template",null,3,n.W1O),n.YNc(4,ee,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,L,2,1,"nz-descriptions-item",6),n.YNc(8,m,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA()(),n.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),n.YNc(14,w,4,2,"a",12),n.YNc(15,U,4,2,"a",12),n.YNc(16,F,4,2,"a",12),n.qZA()()()(),n.BQk()),2&R){const ne=ce.ngIf,te=n.MAs(3),ue=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",te)("nzExtra",ue),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",ne.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",ne.alleleRegistryId&&"unregistered"!=ne.alleleRegistryId),n.xp6(2),n.hij(" ",ne.molecularProfiles.totalCount," ")}}let d=(()=>{class R{constructor(ne){this.gql=ne}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,l.U)(({data:ne})=>null==ne?void 0:ne.variant),(0,v.h)(B.ep))}}return R.\u0275fac=function(ne){return new(ne||R)(n.Y36(I.ZYZ))},R.\u0275cmp=n.Xpm({type:R,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ne,te){1&ne&&(n.TgZ(0,"div",0),n.YNc(1,N,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&ne&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,te.variant$)))},directives:[s.O5,_.bd,T.Ls,j.H,O.R7,O.uj,s.sg,y.j,k.l,Q.SK,Q.t3,$.NU,$.$1,z.yS],pipes:[Z.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),R})();var P=i(1730),G=i(4557);function S(R,ce){}function q(R,ce){if(1&R&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,S,0,0,"ng-template",5),n.qZA(),n.BQk()),2&R){const ne=n.oxw(),te=n.MAs(2);n.xp6(1),n.Q6J("routerLink",ne.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",te)}}function ie(R,ce){}function fe(R,ce){if(1&R&&n._UZ(0,"cvc-variant-popover",9),2&R){const ne=n.oxw(3);n.Q6J("variantId",ne.variant.id)}}function _e(R,ce){if(1&R&&n.YNc(0,fe,1,1,"cvc-variant-popover",8),2&R){const ne=n.oxw(2);n.Q6J("ngIf",ne.enablePopover)}}const Te=function(R){return{deprecated:R}};function De(R,ce){if(1&R){const ne=n.EpF();n.TgZ(0,"nz-tag",6),n.NdJ("nzOnClose",function(ue){return n.CHM(ne),n.oxw().itemClosed(ue)}),n.YNc(1,ie,0,0,"ng-template",5),n.qZA(),n.YNc(2,_e,1,1,"ng-template",null,7,n.W1O)}if(2&R){const ne=n.MAs(3),te=n.oxw(),ue=n.MAs(6);n.Q6J("ngClass",n.VKq(6,Te,te.variant.deprecated))("nzPopoverMouseEnterDelay",te.onCloseClicked?0:.5)("nzPopoverContent",ne)("nzPopoverTrigger",te.enablePopover?"hover":null)("nzMode",te.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",ue)}}function se(R,ce){}function he(R,ce){if(1&R&&n.YNc(0,se,0,0,"ng-template",5),2&R){n.oxw();const ne=n.MAs(2);n.Q6J("ngTemplateOutlet",ne)}}function E(R,ce){if(1&R&&(n.ynx(0),n._uU(1),n.ALo(2,"truncate"),n.BQk()),2&R){const ne=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,ne.variant.name,20)," ")}}function oe(R,ce){if(1&R&&n._uU(0),2&R){const ne=n.oxw(2);n.hij(" ",ne.variant.name," ")}}function W(R,ce){if(1&R&&(n.TgZ(0,"cvc-icon-badges",10),n._UZ(1,"i",11),n.qZA(),n.YNc(2,E,3,4,"ng-container",0),n.YNc(3,oe,1,1,"ng-template",null,12,n.W1O)),2&R){const ne=n.MAs(4),te=n.oxw();n.Q6J("flagged",te.variant.flagged)("entityColor",te.iconColor),n.xp6(1),n.Q6J("nzTwotoneColor",te.iconColor),n.xp6(1),n.Q6J("ngIf",te.truncateLongName)("ngIfElse",ne)}}let de=(()=>{class R extends e.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return R.\u0275fac=function(ne){return new(ne||R)},R.\u0275cmp=n.Xpm({type:R,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,te){if(1&ne&&(n.YNc(0,q,3,2,"ng-container",0),n.YNc(1,De,4,8,"ng-template",null,1,n.W1O),n.YNc(3,he,1,1,"ng-template",null,2,n.W1O),n.YNc(5,W,5,5,"ng-template",null,3,n.W1O)),2&ne){const ue=n.MAs(4);n.Q6J("ngIf",te.linked)("ngIfElse",ue)}},directives:[s.O5,z.yS,s.tP,y.j,a.lU,s.mk,d,P.b,T.Ls],pipes:[G.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),R})()},4867:(ge,Y,i)=>{i.d(Y,{Q:()=>Q});var e=i(9808),o=i(325),n=i(8481),s=i(5017),z=i(3610),y=i(6949),a=i(7484),B=i(1894),l=i(3098),v=i(8144),I=i(3309),_=i(4989),T=i(6905),j=i(5e3);let O=(()=>{class ${}return $.\u0275fac=function(M){return new(M||$)},$.\u0275mod=j.oAB({type:$}),$.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,y.WG,a.vh,B.Jb,l.q6,n.X,s.PV,v.zf,T.s,I.U,_.X]]}),$})();var k=i(6429);let Q=(()=>{class ${}return $.\u0275fac=function(M){return new(M||$)},$.\u0275mod=j.oAB({type:$}),$.\u0275inj=j.cJS({imports:[[e.ez,o.Bz,n.X,z.$6,s.PV,T.s,O,k.C]]}),$})()},160:(ge,Y,i)=>{i.d(Y,{a:()=>n});var e=i(9771),o=i(5e3);let n=(()=>{class s{transform(y){return(0,e.f)(y)}}return s.\u0275fac=function(y){return new(y||s)},s.\u0275pipe=o.Yjl({name:"entityColor",type:s,pure:!0}),s})()},8926:(ge,Y,i)=>{i.d(Y,{A:()=>n});var e=i(5e3),o=i(2313);let n=(()=>{class s{constructor(y){this.sanitizer=y}transform(y,a){if(!a||""==a)return y;const B=new RegExp(a,"gi"),l=y.match(B);if(!l)return y;let v=y.replace(B,`<span class='typeahead-match'>${l[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(v)}}return s.\u0275fac=function(y){return new(y||s)(e.Y36(o.H7,16))},s.\u0275pipe=e.Yjl({name:"highlightTypeahead",type:s,pure:!0}),s})()},6905:(ge,Y,i)=>{i.d(Y,{s:()=>s});var e=i(9808),o=i(7742),n=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=n.oAB({type:z}),z.\u0275inj=n.cJS({providers:[o.l],imports:[[e.ez]]}),z})()},7742:(ge,Y,i)=>{i.d(Y,{l:()=>n});var e=i(6530),o=i(5e3);let n=(()=>{class s{transform(y){return y?(0,e.c)(y):""}}return s.\u0275fac=function(y){return new(y||s)},s.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:s,pure:!0}),s})()},4557:(ge,Y,i)=>{i.d(Y,{W:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){}transform(z,y=25){if(z.length>y){let B=z.slice(0,y);var a=B.lastIndexOf(" ");return B.slice(0,a)+"\u2026"}return z}}return n.\u0275fac=function(z){return new(z||n)},n.\u0275pipe=e.Yjl({name:"truncate",type:n,pure:!0}),n})()},9350:(ge,Y,i)=>{i.d(Y,{a:()=>v});var e=i(655),o=i(7630),n=i(4987),s=i(373),z=i(4850),y=i(1059),a=i(5154),B=i(5e3),l=i(520);let v=class{constructor(_,T){function j(M){return!(!M||M.role!==o.i44.Admin)}function O(M){return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function k(M){return!(!M||M.role!==o.i44.Curator)}function Q(M){return!(!M||M.role!==o.i44.Curator&&M.role!==o.i44.Editor&&M.role!==o.i44.Admin)}function $(M){var b,ee;return!(!M||M.role!==o.i44.Editor&&M.role!==o.i44.Admin||!M.mostRecentConflictOfInterestStatement||(null===(b=M.mostRecentConflictOfInterestStatement)||void 0===b?void 0:b.coiStatus)!=o.Mgx.Conflict&&(null===(ee=M.mostRecentConflictOfInterestStatement)||void 0===ee?void 0:ee.coiStatus)!=o.Mgx.Valid)}function Z(M){if(M.mostRecentOrganizationId)return M.organizations.find(b=>b.id===M.mostRecentOrganizationId)}this.viewerBaseGQL=_,this.http=T,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,s.j)("data","viewer"),(0,z.U)(M=>Object.assign(Object.assign({},M),{signedIn:null!=M,signedOut:null==M,canCurate:Q(M),canModerate:$(M),isAdmin:j(M),isEditor:O(M),isCurator:k(M),organizations:null==M?[]:M.organizations,mostRecentOrg:null==M?void 0:Z(M),invalidCoi:O(M)&&(!M.mostRecentConflictOfInterestStatement||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||M.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,y.O)(this.initialViewer),(0,a.d)(1)),this.signedIn$=this.viewer$.pipe((0,z.U)(M=>M.signedIn)),this.signedOut$=this.viewer$.pipe((0,z.U)(M=>M.signedOut)),this.isAdmin$=this.viewer$.pipe((0,z.U)(M=>j(M))),this.isEditor$=this.viewer$.pipe((0,z.U)(M=>O(M))),this.isCurator$=this.viewer$.pipe((0,z.U)(M=>k(M))),this.canCurate$=this.viewer$.pipe((0,z.U)(M=>Q(M))),this.canModerate$=this.viewer$.pipe((0,z.U)(M=>$(M)))}signOut(){this.http.get("/api/sign_out").pipe((0,n.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}};v.\u0275fac=function(_){return new(_||v)(B.LFG(o.Tt7),B.LFG(l.eN))},v.\u0275prov=B.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v=(0,e.gn)([(0,n.c)()],v)},6654:(ge,Y,i)=>{i.d(Y,{a:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(z){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return n.\u0275fac=function(z){return new(z||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(z,y){},encapsulation:2}),n})()},915:(ge,Y,i)=>{function e(o){let n;if("NA"===o)n=["N/A"];else if("SENSITIVITYRESPONSE"===o)n=["Sensitivity","/","Response"];else{n=o.toLowerCase().replace(/_/g," ").split(" ");for(var s=0;s<n.length;s++)n[s]=n[s].charAt(0).toUpperCase()+n[s].slice(1)}return n.join(" ")}i.d(Y,{E:()=>e})},6530:(ge,Y,i)=>{function e(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}i.d(Y,{c:()=>e})},9771:(ge,Y,i)=>{i.d(Y,{f:()=>o});const e=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Intervention","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(n){let s="#AAAAAA";if(n){const z=e.get(n);z&&(s=z)}return s}},6123:(ge,Y,i)=>{i.d(Y,{U:()=>z});var e=i(8929),o=i(591),n=i(7625),s=i(537);class z{constructor(a){this.networkErrorService=a}mutate(a,B,l,v){let I=new e.xQ,_={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{I.next(),I.complete()}};return _.isSubmitting$.next(!0),a.mutate(B,l).pipe((0,n.R)(I),(0,s.x)(()=>{_.isSubmitting$.next(!1)})).subscribe({next:T=>{T.data&&v&&v(T.data)},error:T=>{T.graphQLErrors.length>0?_.submitError$.next(T.graphQLErrors.map(j=>j.message)):T.networkError&&this.networkErrorService.networkError$.next(T.networkError),_.cleanup()},complete:()=>{_.submitError$.next([]),_.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),_.cleanup()}}),_}}},9397:(ge,Y,i)=>{i.d(Y,{l:()=>o});var e=i(5e3);let o=(()=>{class n{constructor(z){this.host=z,this.autofocus="focus"}ngAfterViewInit(){"click"==this.autofocus?this.host.nativeElement.click():this.host.nativeElement.focus()}}return n.\u0275fac=function(z){return new(z||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"}}),n})()},8616:(ge,Y,i)=>{i.d(Y,{Y:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(y){return new(y||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},9180:(ge,Y,i)=>{i.d(Y,{Z:()=>n});var e=i(5e3);const o=["*"];let n=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(y){return new(y||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(y,a){1&y&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(ge,Y,i)=>{i.d(Y,{R:()=>n});var e=i(9808),o=i(5e3);let n=(()=>{class s{}return s.\u0275fac=function(y){return new(y||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[e.ez]]}),s})()},822:(ge,Y,i)=>{i.d(Y,{V:()=>B});var e=i(5e3),o=i(9808),n=i(2359);function s(l,v){if(1&l&&e._UZ(0,"nz-alert",4),2&l){const I=e.oxw();e.Q6J("nzDescription",I.errors[0])}}function z(l,v){if(1&l&&e._UZ(0,"nz-alert",5),2&l){e.oxw();const I=e.MAs(3);e.Q6J("nzDescription",I)}}function y(l,v){if(1&l&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&l){const I=v.$implicit;e.xp6(1),e.Oqu(I)}}function a(l,v){if(1&l&&(e.TgZ(0,"ul",6),e.YNc(1,y,2,1,"li",7),e.qZA()),2&l){const I=e.oxw();e.xp6(1),e.Q6J("ngForOf",I.errors)}}let B=(()=>{class l{constructor(){}ngOnInit(){1==this.errors.length&&(this.errors=this.errors[0].split("|"))}}return l.\u0275fac=function(I){return new(I||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(I,_){1&I&&(e.YNc(0,s,1,1,"nz-alert",0),e.YNc(1,z,1,1,"nz-alert",1),e.YNc(2,a,2,1,"ng-template",2,3,e.W1O)),2&I&&(e.Q6J("ngIf",1===_.errors.length),e.xp6(1),e.Q6J("ngIf",_.errors.length>1))},directives:[o.O5,n.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),l})()},7008:(ge,Y,i)=>{i.d(Y,{B:()=>s});var e=i(9808),o=i(2359),n=i(5e3);let s=(()=>{class z{}return z.\u0275fac=function(a){return new(a||z)},z.\u0275mod=n.oAB({type:z}),z.\u0275inj=n.cJS({imports:[[e.ez,o.L]]}),z})()},6789:(ge,Y,i)=>{i.d(Y,{_:()=>_});var e=i(9808),o=i(7484),n=i(1017),s=i(5482),z=i(6949),y=i(9552),a=i(8776),B=i(5017),l=i(404),v=i(5e3);let I=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=v.oAB({type:T}),T.\u0275inj=v.cJS({imports:[[e.ez,z.WG,a.X0,y.j,s.cD,B.PV,l.cg,n.s]]}),T})(),_=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=v.oAB({type:T}),T.\u0275inj=v.cJS({imports:[[e.ez,z.WG,a.X0,o.vh,y.j,s.cD,B.PV,l.cg,I,n.s]]}),T})()},1825:(ge,Y,i)=>{i.d(Y,{A:()=>a});var e=i(9808),o=i(6042),n=i(6699),s=i(3677),z=i(6949),y=i(5e3);let a=(()=>{class B{}return B.\u0275fac=function(v){return new(v||B)},B.\u0275mod=y.oAB({type:B}),B.\u0275inj=y.cJS({imports:[[e.ez,z.WG,o.sL,n.Rt,s.b1]]}),B})()},6612:(ge,Y,i)=>{i.d(Y,{m:()=>B});var e=i(655),o=i(5e3),n=i(4987),s=i(5254),z=i(5778),a=i(4850);let B=class{constructor(v){this.el=v,this.domChange=new o.vpe,this.changes=new MutationObserver(I=>{(0,s.D)(I).pipe((0,a.U)(_=>{const T=_.target;return"class"===_.attributeName?{type:"class",change:T.classList.value,key:`${_.attributeName}:${T.classList.value}`}:"disabled"===_.attributeName?{type:"disabled",change:T.disabled,key:`${_.attributeName}:${T.disabled}`}:"hidden"===_.attributeName?{type:"hidden",change:T.hidden,key:`${_.attributeName}:${T.hidden}`}:{type:_.attributeName,change:"unknown change type",key:`${_.attributeName}:unknown-change-type`}}),function y(l,v){return(0,z.x)((I,_)=>v?v(I[l],_[l]):I[l]===_[l])}("key"),(0,n.t)(this)).subscribe(_=>{this.domChange.emit(_)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`),this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}};B.\u0275fac=function(v){return new(v||B)(o.Y36(o.SBq))},B.\u0275dir=o.lG2({type:B,selectors:[["button","cvcOrgSelectorBtn",""]],outputs:{domChange:"domChange"}}),B=(0,e.gn)([(0,n.c)()],B)},7905:(ge,Y,i)=>{i.d(Y,{nT:()=>y,yQ:()=>s});var e=i(915),o=i(7630),n=i(444),s=(()=>{return(a=s||(s={})).EVIDENCE="Evidence",a.ASSERTION="Assertion",s;var a})();class y{constructor(B){this.validStates=new Map,this.getTypeOptions=()=>this.entityName==s.ASSERTION?(0,n.o6)(o.uBv).map(l=>l):(0,n.o6)(o.kqt).map(l=>l),this.getSignificanceOptions=l=>{const v=this.validStates.get(l);return(null==v?void 0:v.significance)||[]},this.isValidSignificanceOption=(l,v)=>{const I=this.validStates.get(l);return!I||I.significance.includes(v)},this.getDirectionOptions=l=>{const v=this.validStates.get(l);return(null==v?void 0:v.entityDirection)||[]},this.isValidDirectionOption=(l,v)=>{const I=this.validStates.get(l);return!I||I.entityDirection.includes(v)},this.requiresDrug=l=>{const v=this.validStates.get(l);return void 0===v||v.requiresDrug},this.requiresDisease=l=>{const v=this.validStates.get(l);return void 0===v||v.requiresDisease},this.requiresAcmgCodes=l=>{const v=this.validStates.get(l);return void 0===v||v.requiresAcmgCodes},this.requiresAmpLevel=l=>{const v=this.validStates.get(l);return void 0===v||v.requiresAmpLevel},this.requiresClingenCodes=l=>{const v=this.validStates.get(l);return void 0===v||v.requiresClingenCodes},this.allowsFdaApproval=l=>{const v=this.validStates.get(l);return void 0===v||v.allowsFdaApproval},this.getOptionsFromEnums=l=>0===l.length?[]:l.map(v=>({value:v,label:(0,e.E)(v)})),this.entityName=B,this.pluralNames=new Map,this.pluralNames.set(s.ASSERTION,"Assertions"),this.pluralNames.set(s.EVIDENCE,"Evidence")}}},4024:(ge,Y,i)=>{i.d(Y,{_:()=>n});var e=i(7630),o=i(7905);class n extends o.nT{constructor(){super(o.yQ.EVIDENCE),this.validStates.set(e.kqt.Predictive,{entityType:e.kqt.Predictive,significance:[e.y1h.Sensitivityresponse,e.y1h.Resistance,e.y1h.AdverseResponse,e.y1h.ReducedSensitivity,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Diagnostic,{entityType:e.kqt.Diagnostic,significance:[e.y1h.Positive,e.y1h.Negative],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Prognostic,{entityType:e.kqt.Prognostic,significance:[e.y1h.BetterOutcome,e.y1h.PoorOutcome,e.y1h.Na],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Oncogenic,{entityType:e.kqt.Oncogenic,significance:[e.y1h.Oncogenicity,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Predisposing,{entityType:e.kqt.Predisposing,significance:[e.y1h.Predisposition,e.y1h.Protectiveness],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!0,requiresDrug:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(e.kqt.Functional,{entityType:e.kqt.Functional,significance:[e.y1h.GainOfFunction,e.y1h.LossOfFunction,e.y1h.UnalteredFunction,e.y1h.Neomorphic,e.y1h.DominantNegative,e.y1h.Unknown],entityDirection:[e.tI1.Supports,e.tI1.DoesNotSupport],requiresDisease:!1,requiresDrug:!1,requiresAcmgCodes:!1,requiresClingenCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},4889:(ge,Y,i)=>{i.d(Y,{E:()=>j});var e=i(9808),o=i(3075),n=i(325),s=i(8776),z=i(304),y=i(6042),a=i(5e3),B=i(2643),l=i(2683);function v(O,k){if(1&O){const Q=a.EpF();a.TgZ(0,"button",2),a.NdJ("click",function(){return a.CHM(Q),a.oxw().callOnClick()}),a._uU(1," Cancel\n"),a.qZA()}}function I(O,k){if(1&O&&(a.TgZ(0,"button",3),a._uU(1," Cancel "),a.qZA()),2&O){const Q=a.oxw();a.Q6J("routerLink",Q.redirectPath)}}const T={name:"cancel-button",component:(()=>{class O extends s.fS{constructor(){super(...arguments),this.redirectPath="/"}ngOnInit(){var Q,$,Z,M;(null===(Q=this.field.templateOptions)||void 0===Q?void 0:Q.onClick)?this.callOnClick=null===($=this.field.templateOptions)||void 0===$?void 0:$.onClick:(null===(Z=this.field.templateOptions)||void 0===Z?void 0:Z.redirectPath)&&(this.redirectPath=null===(M=this.field.templateOptions)||void 0===M?void 0:M.redirectPath)}}return O.\u0275fac=function(){let k;return function($){return(k||(k=a.n5z(O)))($||O)}}(),O.\u0275cmp=a.Xpm({type:O,selectors:[["cvc-cancel-button"]],features:[a.qOj],decls:3,vars:2,consts:[["class","cancel-button","nz-button","","type","button","nzType","default","nzSize","large",3,"click",4,"ngIf","ngIfElse"],["redirect",""],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"click"],["nz-button","","type","button","nzType","default","nzSize","large",1,"cancel-button",3,"routerLink"]],template:function(Q,$){if(1&Q&&(a.YNc(0,v,2,0,"button",0),a.YNc(1,I,2,1,"ng-template",null,1,a.W1O)),2&Q){const Z=a.MAs(2);a.Q6J("ngIf",$.callOnClick)("ngIfElse",Z)}},directives:[e.O5,y.ix,B.dQ,l.w,n.rH],styles:[".cancel-button[_ngcontent-%COMP%]{float:left}"]}),O})()};let j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=a.oAB({type:O}),O.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,y.sL,n.Bz,z.F,s.X0.forChild({types:[T]})]]}),O})()},4623:(ge,Y,i)=>{i.d(Y,{K:()=>v});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),z=i(3075);const a={name:"comment-textarea",component:(()=>{class I extends o.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(T,j)=>{var O;return`Comments must be at least ${null===(O=j.templateOptions)||void 0===O?void 0:O.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return I.\u0275fac=function(){let _;return function(j){return(_||(_=n.n5z(I)))(j||I)}}(),I.\u0275cmp=n.Xpm({type:I,selectors:[["comment-textarea-type"]],features:[n.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(T,j){1&T&&n._UZ(0,"textarea",0),2&T&&n.Q6J("formControl",j.formControl)("formlyAttributes",j.field)},directives:[s.Zp,z.Fj,z.JJ,z.oH,o.VQ],styles:[""],changeDetection:0}),I})(),wrappers:["form-field"]};var B=i(4546),l=i(9139);let v=(()=>{class I{}return I.\u0275fac=function(T){return new(T||I)},I.\u0275mod=n.oAB({type:I}),I.\u0275inj=n.cJS({imports:[[e.ez,z.UX,o.X0.forChild({types:[a]}),l.u,B.U5,s.o7]]}),I})()},1605:(ge,Y,i)=>{i.d(Y,{e:()=>ze});var e=i(9808),o=i(3075),n=i(8776),s=i(3793),z=i(304),y=i(8054),a=i(5e3),B=i(1894),l=i(4546);let v=(()=>{class C{constructor(){console.log("FormCardDirective constructed.")}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275dir=a.lG2({type:C,selectors:[["",8,"cvc-form-card-control"]]}),C})();var I=i(7484),_=i(404);function T(C,X){1&C&&a._UZ(0,"i",7)}function j(C,X){if(1&C&&(a.TgZ(0,"nz-form-label",5),a._uU(1),a.YNc(2,T,1,0,"i",6),a.qZA()),2&C){const D=a.oxw();a.Q6J("nzRequired",D.to.required&&!0!==D.to.hideRequiredMarker)("nzFor",D.id),a.xp6(1),a.hij(" ",D.to.label," "),a.xp6(1),a.Q6J("ngIf",D.to.helpText)}}function O(C,X){if(1&C&&a._UZ(0,"formly-validation-message",9),2&C){const D=a.oxw(2);a.Q6J("field",D.field)}}function k(C,X){if(1&C&&a.YNc(0,O,1,1,"formly-validation-message",8),2&C){const D=a.oxw();a.Q6J("ngIf",D.showError)}}let Q=(()=>{class C extends n.n2{constructor(){super()}get errorState(){return console.log(`form-card.wrapper showError: ${this.showError}`),this.showError?"error":""}ngOnInit(){}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275cmp=a.Xpm({type:C,selectors:[["form-card-wrapper"]],features:[a.qOj],decls:9,vars:4,consts:[[1,"cvc-form-card-control",3,"nzValidateStatus","nzErrorTip"],["nzSize","small","nzType","inner",3,"nzTitle","nzExtra"],["fieldComponent",""],["cardTitle",""],["cardExtra",""],[3,"nzRequired","nzFor"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText",4,"ngIf"],["nzType","question-circle","nzTheme","fill","nz-tooltip","","nzTooltipTitle","to.helpText"],[3,"field",4,"ngIf"],[3,"field"]],template:function(D,le){if(1&D&&(a.TgZ(0,"nz-form-item")(1,"nz-form-control",0)(2,"nz-card",1),a.GkF(3,null,2),a.qZA(),a.YNc(5,j,3,4,"ng-template",null,3,a.W1O),a.YNc(7,k,1,1,"ng-template",null,4,a.W1O),a.qZA()()),2&D){const Me=a.MAs(6),Se=a.MAs(8);a.xp6(1),a.Q6J("nzValidateStatus",le.errorState)("nzErrorTip",Se),a.xp6(1),a.Q6J("nzTitle",Me)("nzExtra",Se)}},directives:[B.SK,l.Nx,B.t3,l.Fd,v,I.bd,l.iK,e.O5,_.SY,n.u_],styles:["[_nghost-%COMP%]{display:block}.ant-form-item-label[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),C})();var $=i(5017),Z=i(1017);const M={wrappers:[{name:"form-card",component:Q}]};let b=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.UX,l.U5,I.vh,$.PV,_.cg,n.X0.forChild(M),Z.s]]}),C})();var ee=i(655),V=i(373),L=i(2198),m=i(4850),w=i(3240),U=i(4987),F=i(7630),N=i(9397),d=i(6949),P=i(8144),G=i(3618),S=i(3193),q=i(8926);function ie(C,X){if(1&C&&(a._UZ(0,"span",10),a.ALo(1,"highlightTypeahead")),2&C){const D=a.oxw().$implicit,le=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.label,le.to.searchString),a.oJD)}}function fe(C,X){if(1&C&&(a._UZ(0,"span",12),a.ALo(1,"highlightTypeahead")),2&C){const D=a.oxw(2).$implicit,le=a.oxw(3);a.Q6J("innerHtml",a.xi3(1,1,D.gene.geneAliases.join(", "),le.to.searchString),a.oJD)}}function _e(C,X){1&C&&(a.ynx(0),a.YNc(1,fe,2,4,"span",11),a.BQk())}function Te(C,X){if(1&C&&(a.TgZ(0,"nz-option",7)(1,"nz-space"),a.YNc(2,ie,2,4,"span",8),a.YNc(3,_e,2,0,"ng-container",9),a.qZA()()),2&C){const D=X.$implicit;a.Q6J("nzLabel",D.tooltip)("nzValue",D.gene),a.xp6(3),a.Q6J("ngIf",D.gene.geneAliases.length>0)}}function De(C,X){if(1&C&&(a.ynx(0),a.YNc(1,Te,4,3,"nz-option",6),a.BQk()),2&C){const D=X.ngrxLet;a.xp6(1),a.Q6J("ngForOf",D)}}function se(C,X){1&C&&a._uU(0," No gene found in CIViC that matches the string provided. ")}function he(C,X){if(1&C){const D=a.EpF();a.ynx(0),a.TgZ(1,"nz-select",2,3),a.NdJ("nzOnSearch",function(Me){return a.CHM(D),a.oxw().to.onSearch(Me)}),a.YNc(3,De,2,1,"ng-container",4),a.qZA(),a.YNc(4,se,1,0,"ng-template",null,5,a.W1O),a.BQk()}if(2&C){const D=a.MAs(5),le=a.oxw();a.xp6(1),a.Q6J("formControl",le.formControl)("formlyAttributes",le.field)("nzPlaceHolder",le.to.placeholder?le.to.placeholder:null)("nzNotFoundContent",D)("nzShowArrow",le.to.showArrow)("nzFilterOption",le.to.filterOption),a.xp6(2),a.Q6J("ngrxLet",le.genes$)}}function E(C,X){if(1&C&&a._UZ(0,"cvc-gene-tag",13),2&C){const D=a.oxw();a.Q6J("gene",D.formControl.value)}}let oe=class extends n.fS{constructor(X){super(),this.geneTypeaheadQuery=X,this.defaultOptions={templateOptions:{placeholder:"Search Genes",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.geneTypeaheadQuery.watch({entrezSymbol:""}),this.genes$=this.queryRef.valueChanges.pipe((0,V.j)("data","geneTypeahead"),(0,L.h)(w.ep),(0,m.U)(X=>X.map(D=>{let le=D.geneAliases.length>0?`Aliases: ${D.geneAliases.join(", ")}`:"";return{value:D.id,tooltip:`${D.name} (${D.entrezId}) ${le}`,label:`${D.name} (${D.entrezId})`,gene:D}})))}ngAfterViewInit(){this.to.onSearch=X=>{X.length<this.to.minLengthSearch||(this.to.searchString=X,this.queryRef.refetch({entrezSymbol:X}))}}};oe.\u0275fac=function(X){return new(X||oe)(a.Y36(F.Q4m))},oe.\u0275cmp=a.Xpm({type:oe,selectors:[["cvc-gene-input"]],features:[a.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["geneListItem",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],["focusInput",""],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"gene"]],template:function(X,D){if(1&X&&(a.YNc(0,he,6,7,"ng-container",0),a.YNc(1,E,1,1,"ng-template",null,1,a.W1O)),2&X){const le=a.MAs(2);a.Q6J("ngIf",!(null!=D.formControl.value&&D.formControl.value.id))("ngIfElse",le)}},directives:[e.O5,y.Vq,N.l,o.JJ,o.oH,n.VQ,d.eJ,e.sg,y.Ip,P.NU,P.$1,G.ZU,S.H],pipes:[q.A],styles:[""]}),oe=(0,ee.gn)([(0,U.c)()],oe);const W={name:"cvc-gene-input",component:oe};var de=i(3309),R=i(6905),ce=i(8616);let ne=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.UX,d.WG,n.X0.forChild({types:[W]}),y.LV,P.zf,G.ZJ,de.U,R.s,ce.Y]]}),C})();var te=i(8390);const re={name:"gene-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Gene",helpText:"Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.",required:!1,addText:"Specify a Gene"},fieldArray:{type:"cvc-gene-input",templateOptions:{required:!1}},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Gene be specified."}}}};let ze=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=a.oAB({type:C}),C.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,y.LV,z.F,s.F,n.X0.forChild({types:[re]}),ne,te.N,b]]}),C})()},8390:(ge,Y,i)=>{i.d(Y,{N:()=>U});var e=i(9808),o=i(3075),n=i(8776),s=i(4546),z=i(1047),y=i(5017),a=i(5e3),B=i(1894),l=i(8481),v=i(2683),I=i(6042),_=i(2643);function T(F,N){if(1&F){const d=a.EpF();a.TgZ(0,"nz-form-item")(1,"nz-form-control",3)(2,"nz-tag",4),a.NdJ("click",function(G){return a.CHM(d),a.oxw().addField(G)}),a._UZ(3,"i",5),a._uU(4),a.qZA()()()}if(2&F){const d=a.oxw();a.xp6(1),a.Q6J("nzValidateStatus",d.errorState),a.xp6(3),a.hij(" ",d.to.addText," ")}}function j(F,N){if(1&F){const d=a.EpF();a.TgZ(0,"nz-tag",4),a.NdJ("click",function(G){return a.CHM(d),a.oxw(4).addField(G)}),a._UZ(1,"i",5),a._uU(2),a.qZA()}if(2&F){const d=a.oxw(4);a.xp6(2),a.hij(" ",d.to.addText," ")}}function O(F,N){if(1&F&&(a.TgZ(0,"div",11),a.YNc(1,j,3,1,"nz-tag",12),a.qZA()),2&F){const d=a.oxw(2).$implicit,P=a.oxw();a.xp6(1),a.Q6J("ngIf",0==P.to.maxCount||P.to.maxCount>d.model.length)}}function k(F,N){if(1&F){const d=a.EpF();a.ynx(0),a.TgZ(1,"nz-tag",8)(2,"i",9),a.NdJ("click",function(){a.CHM(d);const G=a.oxw().index;return a.oxw().remove(G)}),a.qZA()(),a.YNc(3,O,2,1,"div",10),a.BQk()}if(2&F){const d=a.oxw().last;a.xp6(3),a.Q6J("ngIf",d)}}function Q(F,N){if(1&F){const d=a.EpF();a.ynx(0),a.TgZ(1,"div",13)(2,"button",14),a.NdJ("click",function(){a.CHM(d);const G=a.oxw().index;return a.oxw().remove(G)}),a._UZ(3,"i",15),a.qZA()(),a.BQk()}}function $(F,N){if(1&F&&(a.TgZ(0,"nz-form-item")(1,"div",6)(2,"div",0),a._UZ(3,"formly-field",7),a.qZA(),a.YNc(4,k,4,1,"ng-container",1),a.YNc(5,Q,4,0,"ng-container",1),a.qZA()()),2&F){const d=N.$implicit,P=N.index;a.xp6(2),a.Q6J("ngClass",d.model[P]?"selected-field-col":"default-field-col"),a.xp6(1),a.Q6J("field",d),a.xp6(1),a.Q6J("ngIf",d.model[P]),a.xp6(1),a.Q6J("ngIf",!d.model[P])}}const Z=function(F){return{hidden:F}},b={name:"multi-field",component:(()=>{class F extends n.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(d){d&&d.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return F.\u0275fac=function(d){return new(d||F)},F.\u0275cmp=a.Xpm({type:F,selectors:[["cvc-multi-field-type"]],features:[a.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["ngClass","field-display"],[3,"field"],[1,"close-tag"],["nz-icon","","nzType","close",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"],["nz-icon","","nzType","close"]],template:function(d,P){1&d&&(a.TgZ(0,"div",0),a.YNc(1,T,5,2,"nz-form-item",1),a.YNc(2,$,6,4,"nz-form-item",2),a.qZA()),2&d&&(a.Q6J("ngClass",a.VKq(3,Z,!0===P.to.hidden)),a.xp6(1),a.Q6J("ngIf",0===(null==P.field.fieldGroup?null:P.field.fieldGroup.length)),a.xp6(1),a.Q6J("ngForOf",P.field.fieldGroup))},directives:[e.mk,e.O5,B.SK,s.Nx,B.t3,s.Fd,l.j,y.Ls,v.w,e.sg,n.cw,I.ix,_.dQ],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.editable-tag[_ngcontent-%COMP%]{background:#ffffff;border-style:dashed;cursor:pointer}.field-display[_ngcontent-%COMP%]{margin-top:.5em;display:inline-block} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.selected-field-col[_ngcontent-%COMP%]{display:inline-block}.default-field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(10px + 1em)))}.field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.close-tag[_ngcontent-%COMP%]{margin-left:-9px;cursor:pointer}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(20px + 1em)}"]}),F})()};function ee(F,N){if(1&F&&a._UZ(0,"formly-validation-message",3),2&F){const d=a.oxw();a.Q6J("field",d.field)}}const L={name:"cvc-field-errors",component:(()=>{class F extends n.n2{get errorState(){return this.showError?"error":""}}return F.\u0275fac=function(){let N;return function(P){return(N||(N=a.n5z(F)))(P||F)}}(),F.\u0275cmp=a.Xpm({type:F,selectors:[["cvc-field-errors-wrapper"]],features:[a.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(d,P){if(1&d&&(a.TgZ(0,"nz-form-control",0)(1,"p"),a._uU(2),a.qZA(),a.GkF(3,null,1),a.YNc(5,ee,1,1,"ng-template",null,2,a.W1O),a.qZA()),2&d){const G=a.MAs(6);a.Q6J("nzValidateStatus",P.errorState)("nzErrorTip",G),a.xp6(2),a.hij("errorState: ",P.errorState,"")}},directives:[B.t3,s.Fd,n.u_],encapsulation:2,changeDetection:0}),F})()};let m=(()=>{class F{}return F.\u0275fac=function(d){return new(d||F)},F.\u0275mod=a.oAB({type:F}),F.\u0275inj=a.cJS({imports:[[e.ez,o.UX,s.U5,n.X0.forChild({wrappers:[L]})]]}),F})();var w=i(1017);let U=(()=>{class F{}return F.\u0275fac=function(d){return new(d||F)},F.\u0275mod=a.oAB({type:F}),F.\u0275inj=a.cJS({imports:[[e.ez,o.u5,n.X0.forChild({types:[b]}),o.UX,m,s.U5,z.o7,y.PV,I.sL,w.s,l.X]]}),F})()},7075:(ge,Y,i)=>{i.d(Y,{l:()=>j});var e=i(9808),o=i(8776),n=i(5e3),s=i(9180),z=i(6042),y=i(2643),a=i(6612),B=i(2683);const v={name:"submit-button",component:(()=>{class O extends o.fS{constructor(){super(),this.defaultOptions={templateOptions:{submitLabel:"Submit",submitSize:"small"}}}}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-submit-button-type"]],features:[n.qOj],decls:3,vars:2,consts:[["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","large",3,"disabled"]],template:function(Q,$){1&Q&&(n.TgZ(0,"cvc-form-buttons")(1,"button",0),n._uU(2),n.qZA()()),2&Q&&(n.xp6(1),n.Q6J("disabled",!$.form.valid),n.xp6(1),n.hij(" ",$.to.submitLabel," "))},directives:[s.Z,z.ix,y.dQ,a.m,B.w],styles:[""],changeDetection:0}),O})()};var I=i(4375),_=i(1825),T=i(3075);let j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=n.oAB({type:O}),O.\u0275inj=n.cJS({imports:[[e.ez,T.UX,o.X0.forChild({types:[v]}),z.sL,I.R,_.A]]}),O})()},7462:(ge,Y,i)=>{i.d(Y,{o:()=>B});var e=i(9808),o=i(8776),n=i(5e3),s=i(1047),z=i(3075);const a={name:"cvc-textarea",component:(()=>{class l extends o.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return l.\u0275fac=function(){let v;return function(_){return(v||(v=n.n5z(l)))(_||l)}}(),l.\u0275cmp=n.Xpm({type:l,selectors:[["cvc-textarea-base-type"]],features:[n.qOj],decls:1,vars:4,consts:[["nz-input","",3,"formControl","formlyAttributes","nzAutosize","placeholder"]],template:function(I,_){1&I&&n._UZ(0,"textarea",0),2&I&&n.Q6J("formControl",_.formControl)("formlyAttributes",_.field)("nzAutosize",_.to.autosize)("placeholder",_.to.placeholder)},directives:[s.Zp,z.Fj,s.rh,z.JJ,z.oH,o.VQ],styles:[""],changeDetection:0}),l})(),wrappers:["form-field"]};let B=(()=>{class l{}return l.\u0275fac=function(I){return new(I||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[e.ez,z.u5,z.UX,o.X0.forChild({types:[a]}),s.o7]]}),l})()},4181:(ge,Y,i)=>{i.d(Y,{O:()=>ne});var e=i(9808),o=i(655),n=i(5e3),s=i(6123),z=i(4987),y=i(8776),a=i(591),B=i(3240),l=i(1307),v=i(373),I=i(2198),_=i(4850),T=i(7630),j=i(9169),O=i(8054),k=i(9397),Q=i(3075),$=i(8144),Z=i(3618),M=i(8664),b=i(685),ee=i(822),V=i(6042),L=i(2643),m=i(2683),w=i(5017),U=i(6949),F=i(8926);function N(te,ue){if(1&te&&(n._UZ(0,"span",9),n.ALo(1,"highlightTypeahead")),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.Q6J("innerHtml",n.xi3(1,1,re.label,ze.to.searchString),n.oJD)}}function d(te,ue){1&te&&(n.TgZ(0,"span"),n._uU(1," - Aliases:\xa0 "),n.qZA())}function P(te,ue){if(1&te&&(n.TgZ(0,"span",10),n._uU(1),n.YNc(2,d,2,0,"span",11),n._UZ(3,"span",9),n.ALo(4,"highlightTypeahead"),n.qZA()),2&te){const re=n.oxw().$implicit,ze=n.oxw(2);n.xp6(1),n.hij(" ID: ",re.variant.id," "),n.xp6(1),n.Q6J("ngIf",re.variant.variantAliases.length>0),n.xp6(1),n.Q6J("innerHtml",n.xi3(4,3,re.variant.variantAliases.join(", "),ze.to.searchString),n.oJD)}}function G(te,ue){1&te&&(n.TgZ(0,"nz-option",6)(1,"nz-space"),n.YNc(2,N,2,4,"span",7),n.YNc(3,P,5,6,"span",8),n.qZA()()),2&te&&n.Q6J("nzValue",ue.$implicit.variant)}function S(te,ue){if(1&te){const re=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",4),n.NdJ("nzOnSearch",function(C){return n.CHM(re),n.oxw().to.onSearch(C)}),n.YNc(2,G,4,1,"nz-option",5),n.ALo(3,"ngrxPush"),n.qZA(),n.BQk()}if(2&te){const re=n.oxw(),ze=n.MAs(6),C=n.MAs(4);n.xp6(1),n.Q6J("formControl",re.formControl)("formlyAttributes",re.field)("nzPlaceHolder",re.to.placeholder?re.to.placeholder:null)("nzDropdownRender",re.to.allowCreate?ze:null)("nzShowArrow",re.to.showArrow)("nzNotFoundContent",C),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,re.variants$))}}function q(te,ue){if(1&te&&n._UZ(0,"cvc-variant-tag",12),2&te){const re=n.oxw();n.Q6J("variant",re.formControl.value)}}function ie(te,ue){if(1&te&&(n._uU(0," No Existing CIViC Variant\xa0"),n.TgZ(1,"strong"),n._uU(2),n.qZA(),n._uU(3,"\xa0found. ")),2&te){const re=n.oxw(2);n.xp6(2),n.Oqu(re.to.searchString)}}function fe(te,ue){if(1&te&&(n._UZ(0,"nz-empty",13),n.YNc(1,ie,4,1,"ng-template",null,14,n.W1O)),2&te){const re=n.MAs(2);n.Q6J("nzNotFoundContent",re)}}function _e(te,ue){if(1&te&&n._UZ(0,"cvc-form-errors-alert",18),2&te){const re=n.oxw(4);n.Q6J("errors",re.errorMessages)}}function Te(te,ue){if(1&te){const re=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(re);const C=n.oxw(4);return C.addVariant(C.to.searchString)}),n._UZ(1,"i",20),n._uU(2,"Create\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"? "),n.qZA()}if(2&te){const re=n.oxw(4);n.Q6J("nzLoading",re.loading),n.xp6(4),n.Oqu(re.to.searchString)}}function De(te,ue){if(1&te&&(n.ynx(0),n.TgZ(1,"nz-space",15),n.YNc(2,_e,1,1,"cvc-form-errors-alert",16),n.YNc(3,Te,6,2,"button",17),n.qZA(),n.BQk()),2&te){const re=n.oxw(3);n.xp6(2),n.Q6J("ngIf",re.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==re.errorMessages.length)}}function se(te,ue){if(1&te&&(n.ynx(0),n.YNc(1,De,4,2,"ng-container",11),n.BQk()),2&te){const re=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==re.to.searchString)}}function he(te,ue){if(1&te&&(n.YNc(0,se,2,1,"ng-container",11),n.ALo(1,"ngrxPush")),2&te){const re=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,re.displayAdd$))}}let E=class extends y.fS{constructor(ue,re,ze){super(),this.variantTypeaheadQuery=ue,this.networkErrorService=re,this.addVariantGQL=ze,this.onVariantSelected=new n.vpe,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new a.X(!1),this.addVariantMutator=new s.U(this.networkErrorService),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(C,X,D)=>{var le,Me;let Se=null===(Me=null===(le=null==D?void 0:D.parent)||void 0===le?void 0:le.parent)||void 0===Me?void 0:Me.model;if(Se&&Se.gene&&Se.gene[0])return Se.gene[0].id}}}}ngOnInit(){var ue,re;this.callbackSub=null===(re=null===(ue=this.field)||void 0===ue?void 0:ue.formControl)||void 0===re?void 0:re.valueChanges.subscribe(ze=>this.onVariantSelected.emit(ze.id)),this.queryRef=this.variantTypeaheadQuery.watch({name:"a",geneId:this.to.geneId}),this.variants$=this.queryRef.valueChanges.pipe((0,l.T)(1),(0,v.j)("data","variants","nodes"),(0,I.h)(B.ep),(0,_.U)(ze=>ze.map(X=>({value:X.id,label:X.name,variant:X}))))}ngAfterViewInit(){this.to.onSearch=ue=>{ue.length<this.to.minLengthSearch||(this.to.searchString=ue,this.errorMessages=[],this.queryRef.refetch({name:ue,geneId:this.to.geneId}).then(re=>{this.displayAdd$.next(0==re.data.variants.nodes.filter(ze=>ze.name.toUpperCase()==ue.toUpperCase()).length)}))}}addVariant(ue){if(ue&&""!=ue&&this.to.geneId){let re=this.addVariantMutator.mutate(this.addVariantGQL,{name:ue,geneId:this.to.geneId},{},ze=>{var C;ze.addVariant&&(null===(C=this.field.formControl)||void 0===C||C.setValue({id:ze.addVariant.variant.id,name:ze.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0)});re.submitSuccess$.pipe((0,z.t)(this)).subscribe(ze=>{ze&&(this.success=!0)}),re.submitError$.pipe((0,z.t)(this)).subscribe(ze=>{ze&&(this.errorMessages=ze,this.success=!1)}),re.isSubmitting$.pipe((0,z.t)(this)).subscribe(ze=>{this.loading=ze})}}ngOnDestroy(){var ue;null===(ue=this.callbackSub)||void 0===ue||ue.unsubscribe()}};E.\u0275fac=function(ue){return new(ue||E)(n.Y36(T._eC),n.Y36(j.Y),n.Y36(T.LUc))},E.\u0275cmp=n.Xpm({type:E,selectors:[["cvc-variant-input-type"]],outputs:{onVariantSelected:"onVariantSelected"},features:[n.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["variantNotFound",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","","autofocus","click",2,"width","300px",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"variant"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],["notFoundContent",""],["nzDirection","vertical"],["nzSpaceItem","",3,"errors",4,"ngIf"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],["nzSpaceItem","",3,"errors"],["nzSpaceItem","","nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(ue,re){if(1&ue&&(n.YNc(0,S,4,9,"ng-container",0),n.YNc(1,q,1,1,"ng-template",null,1,n.W1O),n.YNc(3,fe,3,1,"ng-template",null,2,n.W1O),n.YNc(5,he,2,3,"ng-template",null,3,n.W1O)),2&ue){const ze=n.MAs(2);n.Q6J("ngIf",!(null!=re.formControl.value&&re.formControl.value.id))("ngIfElse",ze)}},directives:[e.O5,O.Vq,k.l,Q.JJ,Q.oH,y.VQ,e.sg,O.Ip,$.NU,$.$1,Z.ZU,M.I,b.p9,ee.V,V.ix,L.dQ,m.w,w.Ls],pipes:[U.fM,F.A],styles:[""],changeDetection:0}),E=(0,o.gn)([(0,z.c)()],E);const oe={name:"variant-input",component:E};var W=i(4867),de=i(7008),R=i(6905),ce=i(8616);let ne=(()=>{class te{}return te.\u0275fac=function(re){return new(re||te)},te.\u0275mod=n.oAB({type:te}),te.\u0275inj=n.cJS({imports:[[e.ez,Q.UX,U.WG,y.X0.forChild({types:[oe]}),O.LV,V.sL,w.PV,$.zf,Z.ZJ,b.Xo,W.Q,de.B,R.s,ce.Y]]}),te})()},5472:(ge,Y,i)=>{i.d(Y,{r:()=>_});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),z=i(5482),y=i(1894),a=i(1017),B=i(6789),l=i(5e3);const I={wrappers:[{name:"form-container",component:(()=>{class T extends n.n2{}return T.\u0275fac=function(){let j;return function(k){return(j||(j=l.n5z(T)))(k||T)}}(),T.\u0275cmp=l.Xpm({type:T,selectors:[["cvc-form-container-wrapper"]],features:[l.qOj],decls:5,vars:1,consts:[["nzSpan","24"],["nzSize","default",3,"nzTitle"],["fieldComponent",""]],template:function(O,k){1&O&&(l.TgZ(0,"nz-row")(1,"nz-col",0)(2,"nz-card",1),l.GkF(3,null,2),l.qZA()()()),2&O&&(l.xp6(2),l.Q6J("nzTitle",k.to.label))},directives:[y.SK,y.t3,s.bd],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),T})()}]};let _=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=l.oAB({type:T}),T.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild(I),y.Jb,s.vh,z.cD,B._,a.s]]}),T})()},7695:(ge,Y,i)=>{i.d(Y,{C:()=>L});var e=i(9808),o=i(6949),n=i(8776),s=i(7484),z=i(5482),y=i(1894),a=i(1017),B=i(6789),l=i(5e3),v=i(9552),I=i(5017),_=i(404);function T(m,w){1&m&&l._UZ(0,"div",9),2&m&&l.Q6J("innerHtml",w.ngIf,l.oJD)}function j(m,w){1&m&&(l.TgZ(0,"div",10),l._uU(1,"Help not available for this field."),l.qZA())}function O(m,w){if(1&m&&(l.TgZ(0,"nz-collapse-panel",6),l.YNc(1,T,1,1,"div",7),l.YNc(2,j,2,0,"ng-template",null,8,l.W1O),l.qZA()),2&m){const U=w.ngIf,F=l.MAs(3),N=l.oxw().$implicit,d=l.MAs(3);l.Q6J("nzHeader",U)("nzActive",N.templateOptions.hasFocus)("nzExtra",d),l.xp6(1),l.Q6J("ngIf",null==N.templateOptions?null:N.templateOptions.helpText)("ngIfElse",F)}}function k(m,w){if(1&m&&l._UZ(0,"formly-validation-message",14),2&m){const U=l.oxw(4).$implicit;l.Q6J("field",U)}}function Q(m,w){if(1&m&&(l.ynx(0),l._UZ(1,"i",12),l.YNc(2,k,1,1,"ng-template",null,13,l.W1O),l.BQk()),2&m){const U=l.MAs(3);l.xp6(1),l.Q6J("nzTooltipTitle",U)}}function $(m,w){if(1&m&&(l.ynx(0),l.YNc(1,Q,4,1,"ng-container",11),l.BQk()),2&m){const U=w.ngIf;l.xp6(1),l.Q6J("ngIf","INVALID"===U)}}function Z(m,w){if(1&m&&(l.YNc(0,$,2,1,"ng-container",11),l.ALo(1,"ngrxPush")),2&m){const U=l.oxw().$implicit;l.Q6J("ngIf",l.lcZ(1,1,U.formControl.statusChanges))}}function M(m,w){if(1&m&&(l.ynx(0),l.YNc(1,O,4,5,"nz-collapse-panel",4),l.YNc(2,Z,2,3,"ng-template",null,5,l.W1O),l.BQk()),2&m){const U=w.$implicit;l.xp6(1),l.Q6J("ngIf",null==U.templateOptions?null:U.templateOptions.label)}}let b=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(U){return new(U||m)},m.\u0275cmp=l.Xpm({type:m,selectors:[["cvc-form-info-card"]],inputs:{fieldGroup:"fieldGroup",affixTo:"affixTo"},decls:4,vars:4,consts:[[3,"nzOffsetTop","nzTarget"],["nzTitle","Form Assistant","nzSize","default",1,"form-helper-card"],[3,"nzBordered"],[4,"ngFor","ngForOf"],[3,"nzHeader","nzActive","nzExtra",4,"ngIf"],["fieldStatus",""],[3,"nzHeader","nzActive","nzExtra"],["class","help-text",3,"innerHtml",4,"ngIf","ngIfElse"],["noHelpText",""],[1,"help-text",3,"innerHtml"],[1,"help-text"],[4,"ngIf"],["nz-icon","","nzType","exclamation-circle","nzTheme","twotone","nzTwotoneColor","#f5222d","nz-tooltip","","nzTooltipColor","red",3,"nzTooltipTitle"],["errorTooltip",""],[3,"field"]],template:function(U,F){1&U&&(l.TgZ(0,"nz-affix",0)(1,"nz-card",1)(2,"nz-collapse",2),l.YNc(3,M,4,1,"ng-container",3),l.qZA()()()),2&U&&(l.Q6J("nzOffsetTop",0)("nzTarget",F.affixTo),l.xp6(2),l.Q6J("nzBordered",!1),l.xp6(1),l.Q6J("ngForOf",F.fieldGroup))},directives:[v.$,s.bd,z.yH,e.sg,e.O5,z.Zv,I.Ls,_.SY,n.u_],pipes:[o.fM],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}.help-text[_ngcontent-%COMP%]{padding:6px 8px;border:1px solid #EFEFEF;background:white;border-radius:6px}"]}),m})();const V={name:"form-info",component:(()=>{class m extends n.n2{}return m.\u0275fac=function(){let w;return function(F){return(w||(w=l.n5z(m)))(F||m)}}(),m.\u0275cmp=l.Xpm({type:m,selectors:[["cvc-form-info-wrapper"]],features:[l.qOj],decls:9,vars:5,consts:[["nzGutter","16"],[3,"nzSpan"],["nzSize","default",3,"nzTitle"],["fieldComponent",""],["infoCardContainer",""],[3,"fieldGroup","affixTo"]],template:function(U,F){if(1&U&&(l.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-card",2),l.GkF(3,null,3),l.qZA()(),l.TgZ(5,"nz-col",1)(6,"div",null,4),l._UZ(8,"cvc-form-info-card",5),l.qZA()()()),2&U){const N=l.MAs(7);l.xp6(1),l.Q6J("nzSpan",16),l.xp6(1),l.Q6J("nzTitle",F.to.label),l.xp6(3),l.Q6J("nzSpan",8),l.xp6(3),l.Q6J("fieldGroup",F.field.fieldGroup)("affixTo",N)}},directives:[y.SK,y.t3,s.bd,b],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),m})()};let L=(()=>{class m{}return m.\u0275fac=function(U){return new(U||m)},m.\u0275mod=l.oAB({type:m}),m.\u0275inj=l.cJS({imports:[[e.ez,o.WG,n.X0.forChild({wrappers:[V]}),y.Jb,s.vh,z.cD,B._,a.s]]}),m})()},8785:(ge,Y,i)=>{i.d(Y,{t:()=>ee});var e=i(5e3),o=i(6123),n=i(8929),s=i(7625),z=i(7630),y=i(9169),a=i(7484),B=i(9808),l=i(2359),v=i(1894),I=i(4546),_=i(822),T=i(7525),j=i(3868),O=i(3075),k=i(6042),Q=i(2643),$=i(2683);function Z(V,L){1&V&&e._UZ(0,"nz-alert",7)}function M(V,L){if(1&V&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",8),e.qZA()),2&V){const m=e.oxw();e.xp6(1),e.Q6J("errors",m.errorMessages)}}function b(V,L){if(1&V){const m=e.EpF();e.TgZ(0,"nz-form-item")(1,"textarea",9),e.NdJ("ngModelChange",function(U){return e.CHM(m),e.oxw().coiText=U}),e.qZA()()}if(2&V){const m=e.oxw();e.xp6(1),e.Q6J("ngModel",m.coiText)}}let ee=(()=>{class V{constructor(m,w){this.updateCoiGql=m,this.coiUpdatedEvent=new e.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new n.xQ,this.updateCoiMutator=new o.U(w)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let w=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});w.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{U&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),w.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{U&&(this.errorMessages=U,this.success=!1)}),w.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(U=>{this.loading=U})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(m){return new(m||V)(e.Y36(z.IP1),e.Y36(y.Y))},V.\u0275cmp=e.Xpm({type:V,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(m,w){1&m&&(e.TgZ(0,"nz-card"),e.YNc(1,Z,1,0,"nz-alert",0),e.YNc(2,M,2,1,"nz-form-item",1),e.TgZ(3,"nz-spin",2)(4,"nz-form-item")(5,"nz-radio-group",3),e.NdJ("ngModelChange",function(F){return w.coiStatus=F}),e.TgZ(6,"label",4),e._uU(7,"I do not have any potential conflicts of interest."),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"I do have a potential conflict of interest."),e.qZA()()(),e.YNc(10,b,2,1,"nz-form-item",1),e.TgZ(11,"nz-form-item")(12,"button",6),e.NdJ("click",function(){return w.updateCoi()}),e._uU(13," Save Conflict of Interest Statement "),e.qZA()()()()),2&m&&(e.xp6(1),e.Q6J("ngIf",w.success),e.xp6(1),e.Q6J("ngIf",w.errorMessages.length>0),e.xp6(1),e.Q6J("nzSpinning",w.loading),e.xp6(2),e.Q6J("ngModel",w.coiStatus),e.xp6(5),e.Q6J("ngIf","coiPresent"===w.coiStatus),e.xp6(2),e.Q6J("disabled",w.loading||"coiPresent"===w.coiStatus&&(void 0===w.coiText||w.coiText.length<10)))},directives:[a.bd,B.O5,l.r,v.SK,I.Nx,_.V,T.W,j.Dg,O.JJ,O.On,j.Of,O.Fj,k.ix,Q.dQ,$.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),V})()},330:(ge,Y,i)=>{i.d(Y,{e:()=>_});var e=i(9808),o=i(3075),n=i(6949),s=i(7484),z=i(2359),y=i(4546),a=i(7008),B=i(3868),l=i(7525),v=i(6042),I=i(5e3);let _=(()=>{class T{}return T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=I.oAB({type:T}),T.\u0275inj=I.cJS({imports:[[e.ez,o.u5,y.U5,o.UX,n.WG,s.vh,z.L,B.aF,v.sL,l.j,a.B]]}),T})()},3434:(ge,Y,i)=>{i.d(Y,{G:()=>ee});var e=i(5e3),o=i(3075),n=i(8929),s=i(4024),z=i(6123),y=i(7625),a=i(7630),B=i(9169),l=i(325),v=i(7525),I=i(4546),_=i(9808),T=i(8776),j=i(1894),O=i(822),k=i(2359);function Q(V,L){1&V&&e.GkF(0)}function $(V,L){if(1&V&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",6),e.qZA()),2&V){const m=e.oxw(2);e.xp6(1),e.Q6J("errors",m.errorMessages)}}function Z(V,L){if(1&V&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",10),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&V){const m=e.oxw(3);e.xp6(2),e.MGl("routerLink","/variants/",m.newId,"/summary")}}function M(V,L){if(1&V&&(e.ynx(0),e._UZ(1,"nz-alert",7),e.YNc(2,Z,5,1,"ng-template",8,9,e.W1O),e.BQk()),2&V){const m=e.MAs(3),w=e.oxw(2);e.xp6(1),e.Q6J("nzMessage",w.isNew?"Variant Created":"Variant Already Exists")("nzDescription",m)}}function b(V,L){if(1&V&&(e.YNc(0,$,2,1,"nz-form-item",5),e.YNc(1,M,4,2,"ng-container",5)),2&V){const m=e.oxw();e.Q6J("ngIf",m.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",m.success)}}let ee=(()=>{class V{constructor(m,w,U){this.submitVariantGQL=m,this.networkErrorService=w,this.route=U,this.onVariantSelected=new e.vpe,this.allowCreate=!0,this.destroy$=new n.xQ,this.formGroup=new o.cw({}),this.formFields=[],this.formOptions={formState:new s._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitVariantMutator=new z.U(w)}ngOnInit(){this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0},validation:{messages:{required:"Gene is required to select a variant."}}},{key:"variant",type:"variant-array",templateOptions:{required:!1,maxCount:1,allowCreate:this.allowCreate}}]}]}submitVariant(m){let w=null==m?void 0:m.fields.gene[0].id,U=null==m?void 0:m.fields.variant[0].name;if(w&&U){let N=this.submitVariantMutator.mutate(this.submitVariantGQL,{geneId:w,name:U},{},d=>{let P=d.addVariant;P&&(this.newId=P.variant.id,this.isNew=P.new,this.onVariantSelected.emit({variantId:P.variant.id,molecularProfile:P.variant.singleVariantMolecularProfile}))});N.submitSuccess$.pipe((0,y.R)(this.destroy$)).subscribe(d=>{d&&(this.success=!0)}),N.submitError$.pipe((0,y.R)(this.destroy$)).subscribe(d=>{d&&(this.errorMessages=d,this.success=!1)}),N.isSubmitting$.pipe((0,y.R)(this.destroy$)).subscribe(d=>{this.loading=d})}}onFormModelChange(m){this.formModel=m,m.fields.variant&&m.fields.variant[0]&&this.onVariantSelected.emit({variantId:m.fields.variant[0].id,molecularProfile:m.fields.variant[0].singleVariantMolecularProfile})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return V.\u0275fac=function(m){return new(m||V)(e.Y36(a.LUc),e.Y36(B.Y),e.Y36(l.gz))},V.\u0275cmp=e.Xpm({type:V,selectors:[["cvc-variant-submit-form"]],inputs:{allowCreate:"allowCreate"},outputs:{onVariantSelected:"onVariantSelected"},decls:6,vars:7,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",2,"width","400px",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],[4,"ngIf"],[3,"errors"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"]],template:function(m,w){if(1&m&&(e.TgZ(0,"nz-spin",0)(1,"form",1),e.NdJ("ngSubmit",function(){return w.submitVariant(w.formModel)}),e.YNc(2,Q,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(F){return w.onFormModelChange(F)}),e.qZA()()(),e.YNc(4,b,2,2,"ng-template",null,4,e.W1O)),2&m){const U=e.MAs(5);e.Q6J("nzSpinning",w.loading),e.xp6(1),e.Q6J("formGroup",w.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",U),e.xp6(1),e.Q6J("form",w.formGroup)("fields",w.formFields)("model",w.formModel)("options",w.formOptions)}},directives:[v.W,o._Y,o.JL,I.Lr,o.sg,_.tP,T.T7,_.O5,j.SK,I.Nx,O.V,k.r,l.yS],styles:[""]}),V})()},2324:(ge,Y,i)=>{i.d(Y,{e:()=>G});var e=i(9808),o=i(4623),n=i(4375),s=i(7008),z=i(7695),y=i(8390),a=i(7462),B=i(8776),l=i(1017),v=i(2359),I=i(6042),_=i(4546),T=i(1894),j=i(3075),O=i(325),k=i(1605),Q=i(7525),$=i(5472),Z=i(4889),M=i(7484),b=i(8144),ee=i(3618),V=i(7075),L=i(4181),m=i(3793),w=i(304),U=i(8054);const N={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(S,q,ie)=>{var fe,_e;const Te=null===(_e=null===(fe=null==ie?void 0:ie.parent)||void 0===fe?void 0:fe.templateOptions)||void 0===_e?void 0:_e.allowCreate;return void 0===Te||Te}}},hideExpression:(S,q,ie)=>{const fe=(null==ie?void 0:ie.form)?ie.form.get("gene"):null;return!fe||!fe.value||!fe.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};var d=i(5e3);let P=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=d.oAB({type:S}),S.\u0275inj=d.cJS({imports:[[e.ez,j.u5,j.UX,U.LV,w.F,m.F,B.X0.forChild({types:[N]}),L.O,y.N]]}),S})(),G=(()=>{class S{}return S.\u0275fac=function(ie){return new(ie||S)},S.\u0275mod=d.oAB({type:S}),S.\u0275inj=d.cJS({imports:[[e.ez,O.Bz,j.UX,l.s,_.U5,v.L,T.Jb,I.sL,Q.j,M.vh,b.zf,ee.ZJ,B.X0,s.B,n.R,z.C,y.N,a.o,o.K,k.e,$.r,Z.E,V.l,L.O,P,l.s]]}),S})()},7630:(ge,Y,i)=>{i.d(Y,{$G1:()=>di,A4J:()=>to,A94:()=>Gr,AMF:()=>is,AO2:()=>k,B0s:()=>nr,B97:()=>Un,BQZ:()=>m,BTF:()=>mn,Bk6:()=>zs,BnY:()=>Wi,Bo4:()=>Zs,Cp0:()=>b,D9L:()=>lr,Del:()=>ps,DkJ:()=>Pn,E1C:()=>Sr,E8d:()=>v,EwB:()=>ir,F3s:()=>he,FB1:()=>re,FId:()=>Xi,FJi:()=>_e,FKQ:()=>Mi,FNv:()=>P,FOU:()=>sr,Fvz:()=>U,GSh:()=>si,GYx:()=>ii,Gbq:()=>jt,Gnp:()=>Ms,HUC:()=>ne,Hmr:()=>No,IP1:()=>zr,IRu:()=>ue,IZ6:()=>go,JDX:()=>fe,JQ3:()=>Ei,KNk:()=>vi,Kk:()=>rn,Kmw:()=>Zo,L5n:()=>kn,L8L:()=>vo,LLl:()=>Ho,LUc:()=>Zi,LiH:()=>As,Lr0:()=>ds,MNv:()=>jr,MYm:()=>oo,Mgx:()=>I,MsG:()=>d,NQC:()=>ie,NbY:()=>Ri,OHm:()=>Bn,OIL:()=>yn,OfU:()=>_,P_b:()=>en,Q4m:()=>_i,Q_P:()=>ji,Qtd:()=>Rs,Qzn:()=>Jn,R8w:()=>O,RMv:()=>Fi,ROj:()=>Ar,RTy:()=>ee,Rdc:()=>Qo,SJD:()=>we,SWk:()=>gr,SrV:()=>De,Sx0:()=>Z,T1I:()=>pr,TNk:()=>es,Tg0:()=>ss,TiL:()=>po,Tq1:()=>cn,Tt7:()=>wo,UIR:()=>Xt,UWf:()=>ao,VZq:()=>Yn,Vj7:()=>Hi,WFw:()=>er,WGV:()=>gs,WOS:()=>ls,WRV:()=>co,Ws:()=>li,X5f:()=>$n,Xft:()=>Rr,YMi:()=>un,Ybm:()=>fn,ZYZ:()=>Fo,Zhw:()=>zi,Zo2:()=>Mo,Zw1:()=>Qi,_3P:()=>y,_Wm:()=>l,_eC:()=>wi,_jb:()=>ro,aw3:()=>Er,bgg:()=>Wo,c$m:()=>jo,cCu:()=>ns,cEv:()=>_o,cMj:()=>wr,d4o:()=>ze,db2:()=>vs,eY8:()=>hn,edp:()=>Gi,ejK:()=>Qr,fow:()=>G,fpJ:()=>Si,fwG:()=>Ao,g0X:()=>_s,ghc:()=>On,gtM:()=>Ni,h01:()=>T,hVB:()=>Ts,huM:()=>C,i44:()=>te,iGM:()=>Xo,iJT:()=>ws,iST:()=>nn,iXf:()=>gt,io:()=>bn,iwm:()=>n,jMx:()=>Fs,jw9:()=>E,k2T:()=>Ai,k7O:()=>an,kQf:()=>qn,kQl:()=>oe,kqt:()=>L,kv3:()=>gi,l$X:()=>Go,l4w:()=>Tr,lYz:()=>q,lcA:()=>Ln,lfy:()=>Ti,m$d:()=>Ns,m55:()=>V,mII:()=>ei,mdl:()=>z,mpB:()=>R,nnL:()=>Fr,o71:()=>de,oRL:()=>N,otH:()=>Kn,pHu:()=>Hr,pP7:()=>D,pR8:()=>dr,q1D:()=>Gs,q8c:()=>Dn,q9q:()=>xn,qf4:()=>So,rJ8:()=>In,rZD:()=>Te,rzy:()=>Cn,sBY:()=>Xr,sLD:()=>Ss,sfv:()=>w,tI1:()=>$,tJ6:()=>To,td:()=>Ht,ti:()=>Vn,tji:()=>Nr,tw_:()=>Eo,u4i:()=>a,uBv:()=>B,ubO:()=>Qs,vMt:()=>ni,vv6:()=>Mr,vz2:()=>zo,wJ2:()=>Q,wRZ:()=>vr,wbP:()=>_r,wg3:()=>Wr,wkr:()=>ce,wpb:()=>X,xlL:()=>S,xsC:()=>pi,y1h:()=>M,yic:()=>se,yqR:()=>Es,z8D:()=>Zr,zwS:()=>Ro});var e=i(9444),o=i(5e3),n=(()=>{return(t=n||(n={})).Na="NA",t.TierIii="TIER_III",t.TierIiLevelC="TIER_II_LEVEL_C",t.TierIiLevelD="TIER_II_LEVEL_D",t.TierIv="TIER_IV",t.TierILevelA="TIER_I_LEVEL_A",t.TierILevelB="TIER_I_LEVEL_B",n;var t})(),z=(()=>{return(t=z||(z={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Supports="SUPPORTS",z;var t})(),y=(()=>{return(t=y||(y={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.LikelyBenign="LIKELY_BENIGN",t.LikelyOncogenic="LIKELY_ONCOGENIC",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.Na="NA",t.Negative="NEGATIVE",t.Oncogenic="ONCOGENIC",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",y;var t})(),a=(()=>{return(t=a||(a={})).AmpLevel="AMP_LEVEL",t.AssertionDirection="ASSERTION_DIRECTION",t.AssertionType="ASSERTION_TYPE",t.DiseaseName="DISEASE_NAME",t.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.Summary="SUMMARY",t.TherapyName="THERAPY_NAME",a;var t})(),B=(()=>{return(t=B||(B={})).Diagnostic="DIAGNOSTIC",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",B;var t})(),l=(()=>{return(t=l||(l={})).And="AND",t.Or="OR",l;var t})(),v=(()=>{return(t=v||(v={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NctId="NCT_ID",t.SourceCount="SOURCE_COUNT",v;var t})(),I=(()=>{return(t=I||(I={})).Conflict="CONFLICT",t.Expired="EXPIRED",t.Missing="MISSING",t.Valid="VALID",I;var t})(),_=(()=>{return(t=_||(_={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Source="SOURCE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",_;var t})(),T=(()=>{return(t=T||(T={})).Created="CREATED",t.LastModified="LAST_MODIFIED",T;var t})(),O=(()=>{return(t=O||(O={})).AssertionCount="ASSERTION_COUNT",t.Doid="DOID",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneCount="GENE_COUNT",t.Name="NAME",t.VariantCount="VARIANT_COUNT",O;var t})(),k=(()=>{return(t=k||(k={})).Accepted="ACCEPTED",t.AssertionAccepted="ASSERTION_ACCEPTED",t.AssertionRejected="ASSERTION_REJECTED",t.AssertionReverted="ASSERTION_REVERTED",t.AssertionSubmitted="ASSERTION_SUBMITTED",t.Commented="COMMENTED",t.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",t.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",t.DeprecatedVariant="DEPRECATED_VARIANT",t.Flagged="FLAGGED",t.FlagResolved="FLAG_RESOLVED",t.PublicationSuggested="PUBLICATION_SUGGESTED",t.Rejected="REJECTED",t.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",t.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",t.Reverted="REVERTED",t.RevisionAccepted="REVISION_ACCEPTED",t.RevisionRejected="REVISION_REJECTED",t.RevisionSuggested="REVISION_SUGGESTED",t.RevisionSuperseded="REVISION_SUPERSEDED",t.Submitted="SUBMITTED",k;var t})(),Q=(()=>{return(t=Q||(Q={})).Organization="ORGANIZATION",t.Subject="SUBJECT",t.Unscoped="UNSCOPED",t.User="USER",Q;var t})(),$=(()=>{return(t=$||($={})).DoesNotSupport="DOES_NOT_SUPPORT",t.Na="NA",t.Supports="SUPPORTS",$;var t})(),Z=(()=>{return(t=Z||(Z={})).A="A",t.B="B",t.C="C",t.D="D",t.E="E",Z;var t})(),M=(()=>{return(t=M||(M={})).AdverseResponse="ADVERSE_RESPONSE",t.Benign="BENIGN",t.BetterOutcome="BETTER_OUTCOME",t.DominantNegative="DOMINANT_NEGATIVE",t.GainOfFunction="GAIN_OF_FUNCTION",t.LikelyBenign="LIKELY_BENIGN",t.LikelyPathogenic="LIKELY_PATHOGENIC",t.LossOfFunction="LOSS_OF_FUNCTION",t.Na="NA",t.Negative="NEGATIVE",t.Neomorphic="NEOMORPHIC",t.Oncogenicity="ONCOGENICITY",t.Pathogenic="PATHOGENIC",t.PoorOutcome="POOR_OUTCOME",t.Positive="POSITIVE",t.Predisposition="PREDISPOSITION",t.Protectiveness="PROTECTIVENESS",t.ReducedSensitivity="REDUCED_SENSITIVITY",t.Resistance="RESISTANCE",t.Sensitivityresponse="SENSITIVITYRESPONSE",t.UnalteredFunction="UNALTERED_FUNCTION",t.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",t.Unknown="UNKNOWN",M;var t})(),b=(()=>{return(t=b||(b={})).Description="DESCRIPTION",t.DiseaseName="DISEASE_NAME",t.EvidenceDirection="EVIDENCE_DIRECTION",t.EvidenceLevel="EVIDENCE_LEVEL",t.EvidenceRating="EVIDENCE_RATING",t.EvidenceType="EVIDENCE_TYPE",t.Id="ID",t.Significance="SIGNIFICANCE",t.Status="STATUS",t.TherapyName="THERAPY_NAME",t.VariantOrigin="VARIANT_ORIGIN",b;var t})(),ee=(()=>{return(t=ee||(ee={})).Accepted="ACCEPTED",t.Rejected="REJECTED",t.Submitted="SUBMITTED",ee;var t})(),V=(()=>{return(t=V||(V={})).Accepted="ACCEPTED",t.All="ALL",t.Rejected="REJECTED",t.Submitted="SUBMITTED",V;var t})(),L=(()=>{return(t=L||(L={})).Diagnostic="DIAGNOSTIC",t.Functional="FUNCTIONAL",t.Oncogenic="ONCOGENIC",t.Predictive="PREDICTIVE",t.Predisposing="PREDISPOSING",t.Prognostic="PROGNOSTIC",L;var t})(),m=(()=>{return(t=m||(m={})).Open="OPEN",t.Resolved="RESOLVED",m;var t})(),w=(()=>{return(t=w||(w={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",w;var t})(),U=(()=>{return(t=U||(U={})).AssertionCount="assertionCount",t.DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.EvidenceItemCount="evidenceItemCount",t.GeneAlias="geneAlias",t.MolecularProfileCount="molecularProfileCount",t.TherapyName="therapyName",t.VariantCount="variantCount",U;var t})(),N=(()=>{return(t=N||(N={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",N;var t})(),d=(()=>{return(t=d||(d={})).All="ALL",t.WithAccepted="WITH_ACCEPTED",t.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",t.WithSubmitted="WITH_SUBMITTED",d;var t})(),P=(()=>{return(t=P||(P={})).AssertionCount="assertionCount",t.EvidenceItemCount="evidenceItemCount",t.MolecularProfileScore="molecularProfileScore",t.VariantCount="variantCount",P;var t})(),G=(()=>{return(t=G||(G={})).Mention="MENTION",t.Subscription="SUBSCRIPTION",G;var t})(),S=(()=>{return(t=S||(S={})).Id="ID",t.Name="NAME",S;var t})(),q=(()=>{return(t=q||(q={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.HpoId="HPO_ID",t.Name="NAME",q;var t})(),ie=(()=>{return(t=ie||(ie={})).Read="READ",t.Unread="UNREAD",ie;var t})(),fe=(()=>{return(t=fe||(fe={})).Grch37="GRCH37",t.Grch38="GRCH38",t.Ncbi36="NCBI36",fe;var t})(),_e=(()=>{return(t=_e||(_e={})).Accepted="ACCEPTED",t.New="NEW",t.Rejected="REJECTED",t.Superseded="SUPERSEDED",_e;var t})(),Te=(()=>{return(t=Te||(Te={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",Te;var t})(),De=(()=>{return(t=De||(De={})).Asc="ASC",t.Desc="DESC",De;var t})(),se=(()=>{return(t=se||(se={})).Asco="ASCO",t.Ash="ASH",t.Pubmed="PUBMED",se;var t})(),he=(()=>{return(t=he||(he={})).Curated="CURATED",t.New="NEW",t.Rejected="REJECTED",he;var t})(),E=(()=>{return(t=E||(E={})).Citation="CITATION",t.CitationId="CITATION_ID",t.CreatedAt="CREATED_AT",t.DiseaseName="DISEASE_NAME",t.SourceType="SOURCE_TYPE",t.Submitter="SUBMITTER",E;var t})(),oe=(()=>{return(t=oe||(oe={})).Authors="AUTHORS",t.CitationId="CITATION_ID",t.EvidenceCount="EVIDENCE_COUNT",t.Journal="JOURNAL",t.Name="NAME",t.SourceType="SOURCE_TYPE",t.SuggestionCount="SUGGESTION_COUNT",t.Year="YEAR",oe;var t})(),de=(()=>{return(t=de||(de={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.SourceSuggestion="SOURCE_SUGGESTION",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",de;var t})(),R=(()=>{return(t=R||(R={})).Assertion="ASSERTION",t.EvidenceItem="EVIDENCE_ITEM",t.Gene="GENE",t.MolecularProfile="MOLECULAR_PROFILE",t.Revision="REVISION",t.Role="ROLE",t.Variant="VARIANT",t.VariantGroup="VARIANT_GROUP",R;var t})(),ce=(()=>{return(t=ce||(ce={})).Combination="COMBINATION",t.Sequential="SEQUENTIAL",t.Substitutes="SUBSTITUTES",ce;var t})(),ne=(()=>{return(t=ne||(ne={})).AssertionCount="ASSERTION_COUNT",t.EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.Name="NAME",t.NcitId="NCIT_ID",ne;var t})(),te=(()=>{return(t=te||(te={})).Admin="ADMIN",t.Curator="CURATOR",t.Editor="EDITOR",te;var t})(),ue=(()=>{return(t=ue||(ue={})).Id="ID",t.LastAction="LAST_ACTION",t.Name="NAME",t.Role="ROLE",ue;var t})(),re=(()=>{return(t=re||(re={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",t.GeneNames="GENE_NAMES",t.Name="NAME",t.VariantCount="VARIANT_COUNT",t.VariantNames="VARIANT_NAMES",re;var t})(),ze=(()=>{return(t=ze||(ze={})).CoordinateEnd="COORDINATE_END",t.CoordinateStart="COORDINATE_START",t.Name="NAME",ze;var t})(),C=(()=>{return(t=C||(C={})).CommonGermline="COMMON_GERMLINE",t.Mixed="MIXED",t.Na="NA",t.RareGermline="RARE_GERMLINE",t.Somatic="SOMATIC",t.Unknown="UNKNOWN",C;var t})(),X=(()=>{return(t=X||(X={})).Name="NAME",t.Soid="SOID",t.VariantCount="VARIANT_COUNT",X;var t})(),D=(()=>{return(t=D||(D={})).DiseaseName="diseaseName",t.EntrezSymbol="entrezSymbol",t.TherapyName="therapyName",t.VariantName="variantName",D;var t})();const le=e.Ps`
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
    `,f=e.Ps`
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
    `,g=e.Ps`
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
    `,me=e.Ps`
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
    `,tt=e.Ps`
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
    `,nt=e.Ps`
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
    `,h=e.Ps`
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
    `,Ct=e.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,_t=e.Ps`
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
    ${Ct}`,$t=e.Ps`
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
    `,Rt=e.Ps`
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
    ${le}`,bt=e.Ps`
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
    `,Gt=e.Ps`
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
    ${bt}`,yt=e.Ps`
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
    `,Tt=e.Ps`
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
    ${le}`,It=e.Ps`
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
    `,Bt=e.Ps`
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
    `,ot=e.Ps`
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
    ${ot}`,Dt=e.Ps`
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
    `,St=e.Ps`
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
    ${Dt}
${le}`,Ot=e.Ps`
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
    `,p=e.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,H=e.Ps`
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
    `,u=e.Ps`
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
    `,A=e.Ps`
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
    ${u}`,pe=e.Ps`
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
    `,ye=e.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Ae=e.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Fe=e.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,et=e.Ps`
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
    ${xe}`,Ut=e.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,wt=e.Ps`
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
    `,Vt=e.Ps`
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
    `,Zt=e.Ps`
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
    ${ot}`,Yt=e.Ps`
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
    `,Wt=e.Ps`
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
    ${Yt}`,Jt=e.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Me}`;let jt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kt=e.Ps`
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
    ${Se}`;let Ht=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kt=e.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${$e}`;let Xt=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qt=e.Ps`
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
    ${Ge}`;let en=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qt}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tn=e.Ps`
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
    ${ot}`;let nn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const on=e.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Be}`;let rn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=on}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const sn=e.Ps`
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
    `;let an=(()=>{class t extends e.AE{constructor(r){super(r),this.document=sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ln=e.Ps`
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
    ${Re}`;let cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ln}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const dn=e.Ps`
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
    ${be}`;let mn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=pn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gn=e.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Qe}`;let fn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const vn=e.Ps`
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
    ${Ne}`;let hn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=vn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const zn=e.Ps`
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
    ${Ye}`;let Cn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _n=e.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${We}`;let yn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=_n}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Tn=e.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Je}`;let In=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Tn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Mn=e.Ps`
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
    ${J}`;let Dn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Mn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Sn=e.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${ve}`;let On=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Sn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const En=e.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${f}`;let Pn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=En}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const An=e.Ps`
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
    ${g}`;let xn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=An}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Nn=e.Ps`
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
    ${me}`;let Ln=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Nn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Fn=e.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${Ce}`;let $n=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Fn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rn=e.Ps`
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
    ${Pe}`;let bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Rn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gn=e.Ps`
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
    `;let Bn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Gn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Qn=e.Ps`
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
    ${Le}`;let Un=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Qn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const wn=e.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Vn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Zn=e.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Yn=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Zn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Wn=e.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${Ee}`;let Jn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Wn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const jn=e.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Ue}`;let Kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=jn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Hn=e.Ps`
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
    ${Ve}`;let kn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Hn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Xn=e.Ps`
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
    ${je}`;let qn=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Xn}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const eo=e.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Ke}`;let to=(()=>{class t extends e.AE{constructor(r){super(r),this.document=eo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const no=e.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let oo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=no}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const io=e.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let ro=(()=>{class t extends e.mm{constructor(r){super(r),this.document=io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const so=e.Ps`
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
    ${He}`;let ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=so}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const lo=e.Ps`
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
    ${ke}`;let co=(()=>{class t extends e.AE{constructor(r){super(r),this.document=lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const uo=e.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${tt}`;let po=(()=>{class t extends e.AE{constructor(r){super(r),this.document=uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mo=e.Ps`
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
    ${it}`;let go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fo=e.Ps`
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
    `;let vo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ho=e.Ps`
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
    ${Xe}`;let zo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ho}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Co=e.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${nt}`;let _o=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Co}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yo=e.Ps`
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
    ${at}`;let To=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Io=e.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${rt}`;let Mo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Io}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Do=e.Ps`
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
    ${h}`;let So=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Do}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oo=e.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${K}`;let Eo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Oo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Po=e.Ps`
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
    ${x}`;let Ao=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Po}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xo=e.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${ae}`;let No=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lo=e.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Ie}`;let Fo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $o=e.Ps`
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
    ${ct}`;let Ro=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$o}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bo=e.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Oe}`;let Go=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bo=e.Ps`
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
    ${st}`;let Qo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Uo=e.Ps`
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
    `;let wo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Uo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vo=e.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Zo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yo=e.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${dt}`;let Wo=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jo=e.Ps`
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
    `;let jo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Jo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ko=e.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Ho=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ko=e.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${ot}`;let Xo=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ko}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qo=e.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${qe}`;let ei=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qo}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ti=e.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ti}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const oi=e.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let ii=(()=>{class t extends e.AE{constructor(r){super(r),this.document=oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ri=e.Ps`
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
    ${ut}`;let si=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ri}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ai=e.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let li=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ai}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ci=e.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let di=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ci}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ui=e.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let pi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mi=e.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let gi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=mi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fi=e.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${pt}`;let vi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hi=e.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let zi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ci=e.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${mt}`;let _i=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ci}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yi=e.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Ti=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ii=e.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Mi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ii}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Di=e.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Si=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Di}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Oi=e.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Ei=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Oi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pi=e.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Ai=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xi=e.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Ni=(()=>{class t extends e.AE{constructor(r){super(r),this.document=xi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Li=e.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${we}`;let Fi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Li}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $i=e.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${lt}`;let Ri=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$i}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const bi=e.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;let Gi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bi=e.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${xt}`;let Qi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Bi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ui=e.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;let wi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ui}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vi=e.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Nt}`;let Zi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Vi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${ft}`;const Yi=e.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Wi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ji=e.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Lt}`;let ji=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ji}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ki=e.Ps`
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
    `;let Hi=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ki=e.Ps`
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
    `;let Xi=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ki}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Ft}`;const qi=e.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=qi}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const tr=e.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let nr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=tr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const or=e.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let ir=(()=>{class t extends e.mm{constructor(r){super(r),this.document=or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rr=e.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${vt}`;let sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ar=e.Ps`
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
    `;let lr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ar}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cr=e.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${ht}`;let dr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ur=e.Ps`
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
    `;let pr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mr=e.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let gr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=mr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fr=e.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let vr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=fr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hr=e.Ps`
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
    `;let zr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=hr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cr=e.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let _r=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Cr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const yr=e.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Tr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ir=e.Ps`
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
    `;let Mr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ir}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Dr=e.Ps`
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
    `;let Sr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Dr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Or=e.Ps`
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
    `;let Er=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Or}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Pr=e.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${zt}`;let Ar=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Pr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xr=e.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Nr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=xr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Lr=e.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${_t}`;let Fr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Lr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $r=e.Ps`
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
    `;let Rr=(()=>{class t extends e.mm{constructor(r){super(r),this.document=$r}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const br=e.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${$t}`;let Gr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Br=e.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Rt}`;let Qr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Br}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ur=e.Ps`
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
    `;let wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ur}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vr=e.Ps`
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
    `;let Zr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Yr=e.Ps`
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
    `;let Wr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Yr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Jr=e.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Gt}`;let jr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Jr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Kr=e.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${yt}`;let Hr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const kr=e.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Tt}`;let Xr=(()=>{class t extends e.AE{constructor(r){super(r),this.document=kr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qr=e.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${It}`;let es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=qr}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ts=e.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Bt}`;let ns=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ts}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const os=e.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Mt}`;let is=(()=>{class t extends e.AE{constructor(r){super(r),this.document=os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const rs=e.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${St}`;let ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=rs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const as=e.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Ot}`;let ls=(()=>{class t extends e.AE{constructor(r){super(r),this.document=as}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const cs=e.Ps`
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
    ${Et}`;let ds=(()=>{class t extends e.AE{constructor(r){super(r),this.document=cs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const us=e.Ps`
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
    ${Pt}`;let ps=(()=>{class t extends e.AE{constructor(r){super(r),this.document=us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ms=e.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ms}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const fs=e.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${At}`;let vs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=fs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const hs=e.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${p}`;let zs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=hs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Cs=e.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${H}`;let _s=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Cs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ys=e.Ps`
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
    `;let Ts=(()=>{class t extends e.AE{constructor(r){super(r),this.document=ys}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Is=e.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${A}`;let Ms=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Is}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ds=e.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${pe}`;let Ss=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Ds}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Os=e.Ps`
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
    ${Fe}
${Ae}
${ye}
${et}`;let Es=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Os}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ps=e.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${et}`;let As=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ps}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xs=e.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Ut}`;let Ns=(()=>{class t extends e.mm{constructor(r){super(r),this.document=xs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ls=e.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Fs=(()=>{class t extends e.mm{constructor(r){super(r),this.document=Ls}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const $s=e.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${wt}`;let Rs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=$s}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();e.Ps`
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
    `;const bs=e.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Vt}`;let Gs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=bs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Bs=e.Ps`
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
    `;let Qs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Bs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Us=e.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Zt}`;let ws=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Us}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Vs=e.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Wt}`;let Zs=(()=>{class t extends e.AE{constructor(r){super(r),this.document=Vs}}return t.\u0275fac=function(r){return new(r||t)(o.LFG(e._M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},944:(ge,Y,i)=>{i.r(Y),i.d(Y,{LayoutModule:()=>At});var e=i(9808),o=i(325),n=i(5e3),s=i(9350),z=i(8929),y=i(7625),a=i(655),B=i(4090),l=i(1721),v=i(4219),I=i(925),_=i(5017),T=i(226),j=i(5113);const O=["*"],k=["nz-sider-trigger",""];function Q(p,H){}function $(p,H){if(1&p&&(n.ynx(0),n.YNc(1,Q,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),A=n.MAs(5);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzZeroTrigger||A)}}function Z(p,H){}function M(p,H){if(1&p&&(n.ynx(0),n.YNc(1,Z,0,0,"ng-template",3),n.BQk()),2&p){const u=n.oxw(),A=n.MAs(3);n.xp6(1),n.Q6J("ngTemplateOutlet",u.nzTrigger||A)}}function b(p,H){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"right":"left")}}function ee(p,H){if(1&p&&n._UZ(0,"i",5),2&p){const u=n.oxw(2);n.Q6J("nzType",u.nzCollapsed?"left":"right")}}function V(p,H){if(1&p&&(n.YNc(0,b,1,1,"i",4),n.YNc(1,ee,1,1,"i",4)),2&p){const u=n.oxw();n.Q6J("ngIf",!u.nzReverseArrow),n.xp6(1),n.Q6J("ngIf",u.nzReverseArrow)}}function L(p,H){1&p&&n._UZ(0,"i",6)}function m(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){n.CHM(u);const pe=n.oxw();return pe.setCollapsed(!pe.nzCollapsed)}),n.qZA()}if(2&p){const u=n.oxw();n.Q6J("matchBreakPoint",u.matchBreakPoint)("nzCollapsedWidth",u.nzCollapsedWidth)("nzCollapsed",u.nzCollapsed)("nzBreakpoint",u.nzBreakpoint)("nzReverseArrow",u.nzReverseArrow)("nzTrigger",u.nzTrigger)("nzZeroTrigger",u.nzZeroTrigger)("siderWidth",u.widthSetting)}}let w=(()=>{class p{constructor(u,A){this.elementRef=u,this.renderer=A,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:O,decls:1,vars:0,template:function(u,A){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),F=(()=>{class p{constructor(u,A){this.elementRef=u,this.renderer=A,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.SBq),n.Y36(n.Qsj))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:O,decls:1,vars:0,template:function(u,A){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),N=(()=>{class p{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return p.\u0275fac=function(u){return new(u||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(u,A){2&u&&(n.Udp("width",A.isNormalTrigger?A.siderWidth:null),n.ekj("ant-layout-sider-trigger",A.isNormalTrigger)("ant-layout-sider-zero-width-trigger",A.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",A.isZeroTrigger&&A.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",A.isZeroTrigger&&!A.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[n.TTD],attrs:k,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(u,A){1&u&&(n.YNc(0,$,2,1,"ng-container",0),n.YNc(1,M,2,1,"ng-container",0),n.YNc(2,V,2,2,"ng-template",null,1,n.W1O),n.YNc(4,L,1,0,"ng-template",null,2,n.W1O)),2&u&&(n.Q6J("ngIf",A.isZeroTrigger),n.xp6(1),n.Q6J("ngIf",A.isNormalTrigger))},directives:[e.O5,e.tP,_.Ls],encapsulation:2,changeDetection:0}),p})(),d=(()=>{class p{constructor(u,A,pe){this.platform=u,this.cdr=A,this.breakpointService=pe,this.destroy$=new z.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new n.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,l.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(u){u!==this.nzCollapsed&&(this.nzCollapsed=u,this.nzCollapsedChange.emit(u),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(B.ow,!0).pipe((0,y.R)(this.destroy$)).subscribe(u=>{const A=this.nzBreakpoint;A&&(0,l.ov)().subscribe(()=>{this.matchBreakPoint=!u[A],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(u){const{nzCollapsed:A,nzCollapsedWidth:pe,nzWidth:ye}=u;(A||pe||ye)&&this.updateStyleMap(),A&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(I.t4),n.Y36(n.sBO),n.Y36(B.r3))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-sider"]],contentQueries:function(u,A,pe){if(1&u&&n.Suo(pe,v.wO,5),2&u){let ye;n.iGM(ye=n.CRH())&&(A.nzMenuDirective=ye.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(u,A){2&u&&(n.Udp("flex",A.flexSetting)("max-width",A.widthSetting)("min-width",A.widthSetting)("width",A.widthSetting),n.ekj("ant-layout-sider-zero-width",A.nzCollapsed&&0===A.nzCollapsedWidth)("ant-layout-sider-light","light"===A.nzTheme)("ant-layout-sider-dark","dark"===A.nzTheme)("ant-layout-sider-collapsed",A.nzCollapsed)("ant-layout-sider-has-trigger",A.nzCollapsible&&null!==A.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[n.TTD],ngContentSelectors:O,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(u,A){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA(),n.YNc(2,m,1,8,"div",1)),2&u&&(n.xp6(2),n.Q6J("ngIf",A.nzCollapsible&&null!==A.nzTrigger))},directives:[N,e.O5],encapsulation:2,changeDetection:0}),(0,a.gn)([(0,l.yF)()],p.prototype,"nzReverseArrow",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsible",void 0),(0,a.gn)([(0,l.yF)()],p.prototype,"nzCollapsed",void 0),p})(),P=(()=>{class p{constructor(u){this.directionality=u,this.dir="ltr",this.destroy$=new z.xQ}ngOnInit(){var u;this.dir=this.directionality.value,null===(u=this.directionality.change)||void 0===u||u.pipe((0,y.R)(this.destroy$)).subscribe(A=>{this.dir=A})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(T.Is,8))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-layout"]],contentQueries:function(u,A,pe){if(1&u&&n.Suo(pe,d,4),2&u){let ye;n.iGM(ye=n.CRH())&&(A.listOfNzSiderComponent=ye)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(u,A){2&u&&n.ekj("ant-layout-rtl","rtl"===A.dir)("ant-layout-has-sider",A.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:O,decls:1,vars:0,template:function(u,A){1&u&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),p})(),G=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[T.vT,e.ez,_.PV,j.xu,I.ud]]}),p})();var S=i(404),q=i(1894),ie=i(7630),fe=i(8054),_e=i(353),Te=i(8514),De=i(8896),he=i(5254),E=i(3240),oe=i(1307),W=i(3164),de=i(7545),R=i(4850),ce=i(2198),ne=i(5778),te=i(3075),ue=i(3618),re=i(6949);function ze(p,H){if(1&p&&(n.TgZ(0,"span",7),n._uU(1," \u2014 "),n._UZ(2,"span",5),n.qZA()),2&p){const u=n.oxw().$implicit;n.xp6(2),n.s9C("innerHTML",u.result.matchingText,n.oJD)}}function C(p,H){if(1&p&&(n.TgZ(0,"nz-option",3),n._UZ(1,"i",4)(2,"span",5),n.YNc(3,ze,3,1,"span",6),n.qZA()),2&p){const u=H.$implicit,A=n.oxw();n.Q6J("nzValue",u.result),n.xp6(1),n.Q6J("nzType",A.iconNameForResult(u.result)),n.xp6(1),n.s9C("innerHTML",u.result.name,n.oJD),n.xp6(1),n.Q6J("ngIf",u.result.matchingText)}}function X(p,H){1&p&&(n.TgZ(0,"nz-option",8),n._UZ(1,"i",9),n._uU(2," Loading Data... "),n.qZA())}let D=(()=>{class p{constructor(u,A){this.gql=u,this.router=A,this.onSearch$=new z.xQ,this.onSelect$=new z.xQ,this.response$=this.onSearch$.pipe((0,oe.T)(1),(0,W.p)(300,_e.z,{leading:!1,trailing:!0}),(0,de.w)(Ae=>function se(p,H=De.E,u=De.E){return(0,Te.P)(()=>p()?H:u)}(()=>void 0===this.queryRef,(0,Te.P)(()=>pe(Ae)),(0,Te.P)(()=>ye(Ae))))),this.isLoading$=this.response$.pipe((0,R.U)(Ae=>Ae.loading),(0,ce.h)(E.ep),(0,ne.x)()),this.result$=this.response$.pipe((0,R.U)(Ae=>{var Fe;return null===(Fe=Ae.data)||void 0===Fe?void 0:Fe.search}),(0,ce.h)(E.ep)),this.option$=this.result$.pipe((0,R.U)(Ae=>{const Fe=[];return Ae.forEach(et=>{et&&Fe.push({text:et.name,value:et.id.toString(),result:et})}),Fe})),this.onSelect$.subscribe(()=>{this.selectedOpt&&this.router.navigateByUrl(this.urlForResult(this.selectedOpt)),this.selectNode.writeValue(void 0)});const pe=Ae=>(this.queryRef=this.gql.watch({query:Ae,highlightMatches:!0}),this.queryRef.valueChanges),ye=Ae=>(0,he.D)(this.queryRef.refetch({query:Ae}))}set selectedOpt(u){this._selectedOpt=u}get selectedOpt(){return this._selectedOpt}iconNameForResult(u){switch(u.resultType){case ie.rZD.EvidenceItem:return"civic:evidence";case ie.rZD.VariantGroup:return"civic:variantgroup";case ie.rZD.MolecularProfile:return"civic:molecularprofile";default:return`civic:${u.resultType.toLowerCase()}`}}urlForResult(u){let A;switch(u.resultType){case ie.rZD.VariantGroup:A="variant-groups";break;case ie.rZD.EvidenceItem:A="evidence";break;case ie.rZD.MolecularProfile:A="molecular-profiles";break;default:A=`${u.resultType.toLowerCase()}s`}return`/${A}/${u.id}/summary`}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(ie.ghc),n.Y36(o.F0))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-quicksearch"]],viewQuery:function(u,A){if(1&u&&n.Gf(fe.Vq,7),2&u){let pe;n.iGM(pe=n.CRH())&&(A.selectNode=pe.first)}},decls:5,vars:10,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","","nzPlaceHolder","Search CIViC",3,"ngModel","nzOptionHeightPx","nzShowArrow","nzDropdownMatchSelectWidth","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["nzCustomContent","",3,"nzValue"],["nz-icon","",2,"margin-right",".5em",3,"nzType"],[3,"innerHTML"],["nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(u,A){1&u&&(n.TgZ(0,"nz-select",0),n.NdJ("ngModelChange",function(ye){return A.selectedOpt=ye})("ngModelChange",function(ye){return A.onSelect$.next(ye)})("nzOnSearch",function(ye){return A.onSearch$.next(ye)}),n.YNc(1,C,4,4,"nz-option",1),n.ALo(2,"ngrxPush"),n.YNc(3,X,3,0,"nz-option",2),n.ALo(4,"ngrxPush"),n.qZA()),2&u&&(n.Q6J("ngModel",A.selectedOpt)("nzOptionHeightPx",28)("nzShowArrow",!1)("nzDropdownMatchSelectWidth",!1),n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,6,A.option$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,8,A.isLoading$)))},directives:[fe.Vq,te.JJ,te.On,e.sg,fe.Ip,_.Ls,e.O5,ue.ZU],pipes:[re.fM],styles:[":[_nghost-%COMP%]{display:block}nz-select[_ngcontent-%COMP%]{width:100%}"]}),p})();var le=i(1912),Me=i(1059),Se=i(2340),$e=i(8144),Ge=i(6042),Be=i(2643),Re=i(2683),xe=i(3677),be=i(4401),Qe=i(7881),Ne=i(3640),Ze=i(8785),Ye=i(3434);function We(p,H){if(1&p&&(n.TgZ(0,"button",26),n._uU(1," Add "),n._UZ(2,"i",27),n.qZA()),2&p){n.oxw(2);const u=n.MAs(15);n.Q6J("nzDropdownMenu",u)}}const Je=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function J(p,H){if(1&p&&(n.TgZ(0,"nz-badge",28)(1,"button",29),n._UZ(2,"i",30),n.qZA()()),2&p){const u=n.oxw().ngrxLet,A=n.oxw().ngIf;n.Q6J("nzCount",u)("nzOverflowCount",999)("nzStyle",n.DdM(4,Je)),n.xp6(1),n.MGl("routerLink","/users/",A.id,"/notifications")}}const ve=function(p){return{"update-coi":p}};function f(p,H){if(1&p&&n._UZ(0,"cvc-user-avatar",36),2&p){const u=n.oxw(3).ngIf;n.Q6J("user",u)("size",22)("ngClass",n.VKq(3,ve,u.invalidCoi))}}function g(p,H){if(1&p&&(n.TgZ(0,"div",37),n._uU(1),n.qZA()),2&p){const u=n.oxw(3).ngIf;n.xp6(1),n.Oqu(u.username)}}function me(p,H){1&p&&n._UZ(0,"i",27)}function Ce(p,H){if(1&p&&(n.TgZ(0,"button",31)(1,"nz-space",32),n.YNc(2,f,1,5,"cvc-user-avatar",33),n.YNc(3,g,2,1,"div",34),n.YNc(4,me,1,0,"i",35),n.qZA()()),2&p){n.oxw(2);const u=n.MAs(3);n.Q6J("nzDropdownMenu",u)}}function Pe(p,H){1&p&&(n.TgZ(0,"nz-space",22),n.YNc(1,We,3,1,"button",23),n.YNc(2,J,3,5,"nz-badge",24),n.YNc(3,Ce,5,1,"button",25),n.qZA())}function Le(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"button",38),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).coiUpdateModalVisible=!0}),n._UZ(2,"i",39),n._uU(3," Please update COI statement "),n.qZA()()}}function Ee(p,H){1&p&&n._UZ(0,"li",14)}function Ue(p,H){1&p&&(n.TgZ(0,"li",40)(1,"a",41),n._uU(2," Admin Console "),n.qZA()())}function Ve(p,H){1&p&&(n.TgZ(0,"li",42)(1,"a",43),n._uU(2," Background Workers "),n.qZA()())}function je(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"li",17)(1,"a",44),n.NdJ("click",function(){return n.CHM(u),n.oxw(2).addVariantModalVisible=!0}),n._uU(2," Variant "),n.qZA()()}}const Ke=function(p){return["/users",p]};function He(p,H){if(1&p){const u=n.EpF();n.ynx(0),n.YNc(1,Pe,4,0,"nz-space",6),n.TgZ(2,"nz-dropdown-menu",null,7)(4,"ul",8),n.YNc(5,Le,4,0,"li",9),n.YNc(6,Ee,1,0,"li",10),n.TgZ(7,"li",11),n._uU(8," Your Profile "),n.qZA(),n.YNc(9,Ue,3,0,"li",12),n.YNc(10,Ve,3,0,"li",13),n._UZ(11,"li",14),n.TgZ(12,"li",15),n.NdJ("click",function(){return n.CHM(u),n.oxw().signOut()}),n._uU(13,"Sign Out"),n.qZA()()(),n.TgZ(14,"nz-dropdown-menu",null,16)(16,"ul",8)(17,"li",17)(18,"a",18),n._uU(19," Evidence Item "),n.qZA()(),n.TgZ(20,"li",17)(21,"a",19),n._uU(22," Assertion "),n.qZA()(),n.TgZ(23,"li",17)(24,"a",20),n._uU(25," Source Suggestion "),n.qZA()(),n.YNc(26,je,3,0,"li",9),n.TgZ(27,"li",17)(28,"a",21),n._uU(29," Variant Group "),n.qZA()()()(),n.BQk()}if(2&p){const u=H.ngIf,A=n.oxw();n.xp6(1),n.Q6J("ngrxLet",A.unreadCount$),n.xp6(4),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("ngIf",u.invalidCoi),n.xp6(1),n.Q6J("routerLink",n.VKq(7,Ke,u.id)),n.xp6(2),n.Q6J("ngIf",u.isAdmin),n.xp6(1),n.Q6J("ngIf",u.isAdmin),n.xp6(16),n.Q6J("ngIf",u.isEditor)}}function ke(p,H){1&p&&(n.TgZ(0,"span"),n._uU(1,"Update your Conflict of Interest Statement"),n.qZA())}function tt(p,H){if(1&p){const u=n.EpF();n.TgZ(0,"cvc-user-coi-form",45),n.NdJ("coiUpdatedEvent",function(){return n.CHM(u),n.oxw().coiUpdated()}),n.qZA()}}function it(p,H){1&p&&(n.TgZ(0,"span"),n._uU(1,"Add New Variant"),n.qZA())}function Xe(p,H){1&p&&n._UZ(0,"cvc-variant-submit-form")}let nt=(()=>{class p{constructor(u,A){this.queryService=u,this.unreadCountGql=A,this.coiUpdateModalVisible=!1,this.addVariantModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=Se.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,R.U)(({data:pe})=>pe.notifications.unreadCount),(0,Me.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,R.U)(({data:pe})=>pe.notifications.unreadCount),(0,Me.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a),n.Y36(ie.Kmw))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-viewer-button"]],decls:12,vars:11,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["variantModalTitle",""],["variantModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-item","","href","/jobs",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],["nz-menu-item","","href","/jobs"],["href","/jobs"],[3,"click"],[3,"coiUpdatedEvent"]],template:function(u,A){if(1&u&&(n.YNc(0,He,30,9,"ng-container",0),n.ALo(1,"ngrxPush"),n.TgZ(2,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return A.coiUpdateModalVisible=ye})("nzOnCancel",function(){return A.handleCoiModalCancel()}),n.YNc(3,ke,2,0,"ng-template",null,2,n.W1O),n.YNc(5,tt,1,0,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(7,"nz-modal",1),n.NdJ("nzVisibleChange",function(ye){return A.addVariantModalVisible=ye})("nzOnCancel",function(){return A.addVariantModalVisible=!1}),n.YNc(8,it,2,0,"ng-template",null,4,n.W1O),n.YNc(10,Xe,1,0,"ng-template",null,5,n.W1O),n.qZA()),2&u){const pe=n.MAs(4),ye=n.MAs(6),Ae=n.MAs(9),Fe=n.MAs(11);n.Q6J("ngIf",n.lcZ(1,9,A.viewer$)),n.xp6(2),n.Q6J("nzVisible",A.coiUpdateModalVisible)("nzContent",ye)("nzTitle",pe)("nzFooter",null),n.xp6(5),n.Q6J("nzVisible",A.addVariantModalVisible)("nzContent",Fe)("nzTitle",Ae)("nzFooter",null)}},directives:[e.O5,re.eJ,$e.NU,$e.$1,Ge.ix,Be.dQ,Re.w,xe.wA,xe.cm,_.Ls,be.x7,o.rH,Qe.L,e.mk,xe.RR,v.wO,v.r9,v.YV,o.yS,Ne.du,Ze.t,Ye.G],pipes:[re.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),p})();function at(p,H){1&p&&n._UZ(0,"img",61)}function rt(p,H){1&p&&n._UZ(0,"img",62)}function h(p,H){1&p&&n._UZ(0,"cvc-login-button")}function K(p,H){1&p&&n._UZ(0,"cvc-viewer-button")}const x=function(p){return{"is-collapsed":p}},Ie=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class p{constructor(u){this.viewerService=u,this.isCollapsed=!1}ngOnInit(){this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(s.a))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-layout"]],decls:132,vars:47,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-molecularprofile"],["routerLink","/molecular-profiles"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","civic-clinicaltrial"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/therapies"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","civic-queue"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row","","id","header-row"],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","200px","id","header-search"],["nz-col","","nzFlex","1 0 250px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["target","_blank","href","https://docs.civicdb.org/"],["routerLink","/pages/help"],["nz-col","","nzFlex","1 0 auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(u,A){1&u&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(ye){return A.isCollapsed=ye}),n.TgZ(2,"a",2)(3,"div",3),n.YNc(4,at,1,0,"img",4),n.YNc(5,rt,1,0,"img",5),n.qZA()(),n.TgZ(6,"ul",6)(7,"li",7)(8,"ul")(9,"li",8),n._UZ(10,"i",9),n.TgZ(11,"span")(12,"a",10),n._uU(13,"Assertions"),n.qZA()()(),n.TgZ(14,"li",8),n._UZ(15,"i",11),n.TgZ(16,"span")(17,"a",12),n._uU(18,"Evidence"),n.qZA()()(),n.TgZ(19,"li",8),n._UZ(20,"i",13),n.TgZ(21,"span")(22,"a",14),n._uU(23,"Molecular Profiles"),n.qZA()()(),n.TgZ(24,"li",8),n._UZ(25,"i",15),n.TgZ(26,"span")(27,"a",16),n._uU(28,"Genes"),n.qZA()()(),n.TgZ(29,"li",8),n._UZ(30,"i",17),n.TgZ(31,"span")(32,"a",18),n._uU(33,"Variants"),n.qZA()()(),n.TgZ(34,"li",8),n._UZ(35,"i",19),n.TgZ(36,"span")(37,"a",20),n._uU(38,"Variant Groups"),n.qZA()()()()(),n.TgZ(39,"li",8),n._UZ(40,"i",21),n.TgZ(41,"span")(42,"a",22),n._uU(43,"Clinical Trials"),n.qZA()()(),n.TgZ(44,"li",8),n._UZ(45,"i",23),n.TgZ(46,"span")(47,"a",24),n._uU(48,"Diseases"),n.qZA()()(),n.TgZ(49,"li",8),n._UZ(50,"i",25),n.TgZ(51,"span")(52,"a",26),n._uU(53,"Therapies"),n.qZA()()(),n.TgZ(54,"li",8),n._UZ(55,"i",27),n.TgZ(56,"span")(57,"a",28),n._uU(58,"Phenotypes"),n.qZA()()(),n.TgZ(59,"li",8),n._UZ(60,"i",29),n.TgZ(61,"span")(62,"a",30),n._uU(63,"Sources"),n.qZA()()(),n.TgZ(64,"li",8),n._UZ(65,"i",31),n.TgZ(66,"span")(67,"a",32),n._uU(68,"Variant Types"),n.qZA()()(),n.TgZ(69,"li",7)(70,"ul")(71,"li",8),n._UZ(72,"i",33),n.TgZ(73,"span")(74,"a",34),n._uU(75," Activity "),n.qZA()()(),n.TgZ(76,"li",8),n._UZ(77,"i",35),n.TgZ(78,"span")(79,"a",36),n._uU(80,"Queues"),n.qZA()()()()(),n.TgZ(81,"li",7)(82,"ul")(83,"li",8),n._UZ(84,"i",37),n.TgZ(85,"span")(86,"a",38),n._uU(87,"Contributors"),n.qZA()()(),n.TgZ(88,"li",8),n._UZ(89,"i",39),n.TgZ(90,"span")(91,"a",40),n._uU(92,"Organizations"),n.qZA()()()()(),n.TgZ(93,"li",7)(94,"ul")(95,"li",8),n._UZ(96,"i",41),n.TgZ(97,"span")(98,"a",42),n._uU(99,"Data Releases"),n.qZA()()()()()(),n.TgZ(100,"div",43),n._UZ(101,"img",44)(102,"img",45),n.qZA()(),n.TgZ(103,"nz-layout",46)(104,"nz-header")(105,"div",47)(106,"div",48)(107,"span",49),n.NdJ("click",function(){return A.isCollapsed=!A.isCollapsed}),n._UZ(108,"i",50),n.qZA()(),n.TgZ(109,"div",51),n._UZ(110,"cvc-quicksearch"),n.qZA(),n.TgZ(111,"div",52)(112,"ul",53)(113,"li",54)(114,"a",55),n._uU(115,"Home"),n.qZA()(),n.TgZ(116,"li",54)(117,"a",56),n._uU(118,"About CIViC"),n.qZA()(),n.TgZ(119,"li",54)(120,"a",57),n._uU(121,"Documentation"),n.qZA()(),n.TgZ(122,"li",54)(123,"a",58),n._uU(124,"Help"),n.qZA()()()(),n.TgZ(125,"div",59),n.YNc(126,h,1,0,"cvc-login-button",60),n.ALo(127,"async"),n.YNc(128,K,1,0,"cvc-viewer-button",60),n.ALo(129,"async"),n.qZA()()(),n.TgZ(130,"nz-content"),n._UZ(131,"router-outlet"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",A.isCollapsed)("nzTrigger",null),n.xp6(2),n.Q6J("ngClass",n.VKq(39,x,A.isCollapsed)),n.xp6(1),n.Q6J("ngIf",!A.isCollapsed),n.xp6(1),n.Q6J("ngIf",A.isCollapsed),n.xp6(1),n.Q6J("ngClass",n.VKq(41,x,A.isCollapsed))("nzInlineCollapsed",A.isCollapsed),n.xp6(1),n.Q6J("nzTitle",A.isCollapsed?"KNOW":"KNOWLEDGEBASE"),n.xp6(2),n.Q6J("nzTooltipTitle",A.isCollapsed?"Assertions":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Evidence":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Molecular Profiles":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Genes":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Variants":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Variant Groups":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Clinical Trials":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Diseases":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Therapies":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Phenotypes":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Sources":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Variant Types":""),n.xp6(5),n.Q6J("nzTitle",A.isCollapsed?"CURATE":"CURATION"),n.xp6(2),n.Q6J("nzTooltipTitle",A.isCollapsed?"Activity":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Pending Queues":""),n.xp6(5),n.Q6J("nzTitle",A.isCollapsed?"COMM":"COMMUNITY"),n.xp6(2),n.Q6J("nzTooltipTitle",A.isCollapsed?"Users":""),n.xp6(5),n.Q6J("nzTooltipTitle",A.isCollapsed?"Organizations":""),n.xp6(5),n.Q6J("nzTitle",A.isCollapsed?"RES":"RESOURCES"),n.xp6(2),n.Q6J("nzTooltipTitle",A.isCollapsed?"Data Releases":""),n.xp6(5),n.Q6J("ngClass",n.VKq(43,x,A.isCollapsed)),n.xp6(3),n.Q6J("ngClass",n.VKq(45,x,A.isCollapsed)),n.xp6(5),n.Q6J("nzType",A.isCollapsed?"menu-unfold":"menu-fold"),n.xp6(18),n.Q6J("ngIf",n.lcZ(127,35,A.signedOut$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(129,37,A.signedIn$)))},directives:[P,d,o.yS,e.mk,e.O5,v.wO,v.uA,v.r9,S.SY,_.Ls,F,q.SK,q.t3,D,le.s,nt,w,o.lC],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-row[_ngcontent-%COMP%]{flex-wrap:nowrap}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),p})(),children:[{path:"assertions",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(4184),i.e(3883),i.e(1634),i.e(3754),i.e(8592),i.e(3200)]).then(i.bind(i,136)).then(p=>p.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"molecular-profiles",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(2475),i.e(8482),i.e(7215),i.e(4024),i.e(8103),i.e(8592),i.e(933)]).then(i.bind(i,933)).then(p=>p.MolecularProfilesModule),data:{breadcrumb:"Molecular Profiles"}},{path:"clinical-trials",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(7717),i.e(7413)]).then(i.bind(i,1838)).then(p=>p.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(1192),i.e(3883),i.e(3530)]).then(i.bind(i,9317)).then(p=>p.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"therapies",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(8699)]).then(i.bind(i,8379)).then(p=>p.TherapiesModule),data:{breadcrumb:"Therapies"}},{path:"evidence",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(1192),i.e(4111)]).then(i.bind(i,7727)).then(p=>p.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(681)]).then(i.bind(i,681)).then(p=>p.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(8592),i.e(5625)]).then(i.bind(i,5625)).then(p=>p.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(9397),i.e(1192),i.e(3883),i.e(8592),i.e(402)]).then(i.bind(i,1076)).then(p=>p.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(4184),i.e(327),i.e(1634),i.e(9484),i.e(7717),i.e(8592),i.e(6754)]).then(i.bind(i,9802)).then(p=>p.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(3883),i.e(9484),i.e(9475)]).then(i.bind(i,7563)).then(p=>p.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(5564),i.e(9890),i.e(9931),i.e(2475),i.e(8482),i.e(868),i.e(9397),i.e(2178),i.e(1192),i.e(6724),i.e(9716),i.e(3883),i.e(5291),i.e(7215),i.e(9484),i.e(376),i.e(1850),i.e(3218)]).then(i.bind(i,3218)).then(p=>p.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([i.e(6256),i.e(7064),i.e(9890),i.e(8482),i.e(79)]).then(i.bind(i,79)).then(p=>p.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(8592),i.e(9221)]).then(i.bind(i,9221)).then(p=>p.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([i.e(7064),i.e(5564),i.e(9890),i.e(8482),i.e(7215),i.e(4024),i.e(9246),i.e(1875)]).then(i.bind(i,1875)).then(p=>p.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([i.e(6256),i.e(5564),i.e(9931),i.e(2475),i.e(9397),i.e(6724),i.e(9716),i.e(376),i.e(3918)]).then(i.bind(i,4340)).then(p=>p.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([i.e(7064),i.e(9890),i.e(4579)]).then(i.bind(i,4579)).then(p=>p.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([i.e(7064),i.e(4038)]).then(i.bind(i,4038)).then(p=>p.PagesModule),data:{breadcrumb:"Pages"}}]}];let Oe=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[o.Bz.forChild(Ie)],o.Bz]}),p})();var ct=i(1017),st=i(1047),dt=i(4546),qe=i(1314),ut=i(4832),pt=i(969),mt=i(2994),lt=i(8583),we=i(1159),gt=i(7429);const yt={provide:te.JU,useExisting:(0,n.Gpc)(()=>It),multi:!0};let It=(()=>{class p{constructor(u,A,pe,ye,Ae,Fe){this.ngZone=u,this.elementRef=A,this.overlay=pe,this.viewContainerRef=ye,this.nzInputGroupWhitSuffixOrPrefixDirective=Ae,this.document=Fe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new z.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,y.R)(this.destroy$)).subscribe(u=>{"void"===u.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(u){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(u)))}registerOnChange(u){this.onChange=u}registerOnTouched(u){this.onTouched=u}setDisabledState(u){this.elementRef.nativeElement.disabled=u,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(u){const A=u.keyCode,pe=A===we.LH||A===we.JH;A===we.hY&&u.preventDefault(),!this.panelOpen||A!==we.hY&&A!==we.Mf?this.panelOpen&&A===we.K5?this.nzAutocomplete.showPanel&&(u.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&pe&&this.nzAutocomplete.showPanel&&(u.stopPropagation(),u.preventDefault(),A===we.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(u){const A=u.target,pe=this.document;let ye=A.value;"number"===A.type&&(ye=""===ye?null:parseFloat(ye)),this.previousValue!==ye&&(this.previousValue=ye,this.onChange(ye),this.canOpen()&&pe.activeElement===u.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,mt.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,lt.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(u=>{this.setValueAndClose(u)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,ce.h)(u=>!this.elementRef.nativeElement.contains(u.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Tt(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new gt.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new qe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const u=[new qe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new qe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(u).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const u=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==u?(this.nzAutocomplete.setActiveItem(u),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(u){const A=u.nzValue;this.setTriggerValue(u.getLabel()),this.onChange(A),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(u){const A=this.nzAutocomplete.getOption(u),pe=A?A.getLabel():u;this.elementRef.nativeElement.value=null!=pe?pe:"",this.nzAutocomplete.nzBackfill||(this.previousValue=pe)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const u=this.elementRef.nativeElement;return!u.readOnly&&!u.disabled}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(qe.aV),n.Y36(n.s_b),n.Y36(st.ke,8),n.Y36(e.K0,8))},p.\u0275dir=n.lG2({type:p,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(u,A){1&u&&n.NdJ("focusin",function(){return A.handleFocus()})("blur",function(){return A.handleBlur()})("input",function(ye){return A.handleInput(ye)})("keydown",function(ye){return A.handleKeydown(ye)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[n._Bn([yt])]}),p})(),ot=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[T.vT,e.ez,qe.U8,te.u5,pt.T,ut.g,st.o7]]}),p})(),Mt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,te.u5,o.Bz,re.WG,ue.ZJ,fe.LV,st.o7,dt.U5,_.PV,ot]]}),p})();var Dt=i(1844),St=i(5473),Ot=i(330),Et=i(2324);let Pt=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,re.WG,xe.b1,o.Bz,Ge.sL,$e.zf,_.PV,be.mS,S.cg,Ne.Qp,St.H,Ot.e,Et.e]]}),p})(),At=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[e.ez,Oe,_.PV,q.Jb,G,v.ip,S.cg,ue.ZJ,ct.s,Dt.B,Pt,Mt]]}),p})()},3240:(ge,Y,i)=>{function e(a){return null!=a}i.d(Y,{ep:()=>e,lm:()=>o});const o=e},373:(ge,Y,i)=>{i.d(Y,{j:()=>o});var e=i(4850);function o(...s){const z=s.length;if(0===z)throw new Error("list of properties cannot be empty.");return y=>(0,e.U)(function n(s,z){return a=>{let B=a;for(let l=0;l<z;l++){const v=null!=B?B[s[l]]:void 0;if(void 0===v)return;B=v}return B}}(s,z))(y)}},3164:(ge,Y,i)=>{i.d(Y,{p:()=>a});var e=i(3489),o=i(353);const n={leading:!0,trailing:!1};function a(I,_=o.P,T=n){return j=>j.lift(new B(I,_,T.leading,T.trailing))}class B{constructor(_,T,j,O){this.duration=_,this.scheduler=T,this.leading=j,this.trailing=O}call(_,T){return T.subscribe(new l(_,this.duration,this.scheduler,this.leading,this.trailing))}}class l extends e.L{constructor(_,T,j,O,k){super(_),this.duration=T,this.scheduler=j,this.leading=O,this.trailing=k,this._hasTrailingValue=!1,this._trailingValue=null}_next(_){this.throttled?this.trailing&&(this._trailingValue=_,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(v,this.duration,{subscriber:this})),this.leading?this.destination.next(_):this.trailing&&(this._trailingValue=_,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const _=this.throttled;_&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),_.unsubscribe(),this.remove(_),this.throttled=null)}}function v(I){const{subscriber:_}=I;_.clearThrottle()}},444:(ge,Y,i)=>{function e(L){return L!==String(parseFloat(L))}i.d(Y,{o6:()=>V});var z=Object.getOwnPropertyNames?function o(L){return Object.getOwnPropertyNames(L).filter(function(m){return L.propertyIsEnumerable(m)&&e(m)})}:Object.keys?function n(L){return Object.keys(L).filter(e)}:function s(L){var m=[];for(var w in L)L.hasOwnProperty(w)&&L.propertyIsEnumerable(w)&&e(w)&&m.push(w);return m},y=function(){function L(m){this.enumObj=m,this.keysList=Object.freeze(z(m));for(var w=this.keysList.length,U=new Array(w),F=new Map,N=0;N<w;++N){var d=this.keysList[N],P=m[d];U[N]=P,F.set(P,d),this[N]=Object.freeze([d,P])}this.valuesList=Object.freeze(U),this.keysByValueMap=F,this.size=this.length=w,Object.freeze(this)}return L.prototype.toString=function(){return"[object EnumWrapper]"},L.prototype.keys=function(){var m,w=this,U=0;return(m={next:function(){var N={done:U>=w.length,value:w.keysList[U]};return++U,N}})[Symbol.iterator]=function(){return this},m},L.prototype.values=function(){var m,w=this,U=0;return(m={next:function(){var N={done:U>=w.length,value:w.valuesList[U]};return++U,N}})[Symbol.iterator]=function(){return this},m},L.prototype.entries=function(){var m,w=this,U=0;return(m={next:function(){var N={done:U>=w.length,value:w[U]};return++U,N}})[Symbol.iterator]=function(){return this},m},L.prototype[Symbol.iterator]=function(){return this.entries()},L.prototype.forEach=function(m,w){for(var U=this.length,F=0;F<U;++F){var N=this[F];m.call(w,N[1],N[0],this,F)}},L.prototype.map=function(m,w){for(var U=this.length,F=new Array(U),N=0;N<U;++N){var d=this[N];F[N]=m.call(w,d[1],d[0],this,N)}return F},L.prototype.getKeys=function(){return this.keysList.slice()},L.prototype.getValues=function(){return this.valuesList.slice()},L.prototype.getEntries=function(){return Array.prototype.slice.call(this)},L.prototype.indexOfKey=function(m){return this.keysList.indexOf(m)},L.prototype.indexOfValue=function(m){return this.valuesList.indexOf(m)},L.prototype.isKey=function(m){return null!=m&&e(m)&&this.enumObj.hasOwnProperty(m)},L.prototype.asKeyOrThrow=function(m){if(this.isKey(m))return m;throw new Error("Unexpected key: "+m+". Expected one of: "+this.getValues())},L.prototype.asKeyOrDefault=function(m,w){return this.isKey(m)?m:w},L.prototype.isValue=function(m){return null!=m&&this.keysByValueMap.has(m)},L.prototype.asValueOrThrow=function(m){if(this.isValue(m))return m;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},L.prototype.asValueOrDefault=function(m,w){return this.isValue(m)?m:w},L.prototype.getKeyOrThrow=function(m){var w=null!=m?this.keysByValueMap.get(m):void 0;if(null!=w)return w;throw new Error("Unexpected value: "+m+". Expected one of: "+this.getValues())},L.prototype.getKeyOrDefault=function(m,w){var U=null!=m?this.keysByValueMap.get(m):void 0;return null!=U?U:w},L.prototype.getValueOrThrow=function(m){return this.enumObj[this.asKeyOrThrow(m)]},L.prototype.getValueOrDefault=function(m,w){return this.isKey(m)?this.enumObj[m]:w},L}();y.prototype[Symbol.toStringTag]="EnumWrapper";var a=Symbol("ts-enum-util:unhandledEntry"),B=Symbol("ts-enum-util:handleNull"),l=Symbol("ts-enum-util:handleUndefined"),v=Symbol("ts-enum-util:handleUnexpected");function I(L){return new Error("Unhandled value: "+L)}var _=function(){function L(m){this.value=m}return L.prototype.with=function(m){if(m.hasOwnProperty(this.value))return O(m[this.value],this.value);if(m[v])return O(m[v],this.value);throw new Error("Unexpected value: "+this.value)},L}(),T=function(){function L(){}return L.prototype.with=function(m){if(m[B])return O(m[B],null);if(m[v])return O(m[v],null);throw new Error("Unexpected value: null")},L}(),j=function(){function L(){}return L.prototype.with=function(m){if(m[l])return O(m[l],void 0);if(m[v])return O(m[v],void 0);throw new Error("Unexpected value: undefined")},L}();function O(L,m){if(L===a)throw I(m);return L(m)}var k=function(){function L(m){this.value=m}return L.prototype.with=function(m){if(m.hasOwnProperty(this.value))return Z(m[this.value],this.value);if(m.hasOwnProperty(v))return Z(m[v],this.value);throw new Error("Unexpected value: "+this.value)},L}(),Q=function(){function L(){}return L.prototype.with=function(m){if(m.hasOwnProperty(B))return Z(m[B],null);if(m.hasOwnProperty(v))return Z(m[v],null);throw new Error("Unexpected value: null")},L}(),$=function(){function L(){}return L.prototype.with=function(m){if(m.hasOwnProperty(l))return Z(m[l],void 0);if(m.hasOwnProperty(v))return Z(m[v],void 0);throw new Error("Unexpected value: undefined")},L}();function Z(L,m){if(L===a)throw I(m);return L}var ee=new WeakMap;function V(L){var m=ee.get(L);return m||(m=new y(L),ee.set(L,m)),m}V.handleNull=B,V.handleUndefined=l,V.handleUnexpected=v,V.unhandledEntry=a,V.visitValue=function M(L){return null===L?new T:void 0===L?new j:new _(L)},V.mapValue=function b(L){return null===L?new Q:void 0===L?new $:new k(L)}},4987:(ge,Y,i)=>{i.d(Y,{c:()=>L,t:()=>P});var e=i(8929),o=i(2654),y=(i(5254),i(8896),i(8139),i(5e3)),v=(i(1709),i(7770),i(7221),i(7625));const I=y.GuJ,T=Symbol("__destroy"),j=Symbol("__decoratorApplied");function O(S){return"string"==typeof S?Symbol(`__destroy__${S}`):T}function Q(S,q){S[q]||(S[q]=new e.xQ)}function $(S,q){S[q]&&(S[q].next(),S[q].complete(),S[q]=null)}function Z(S){S instanceof o.w&&S.unsubscribe()}function b(S,q){return function(){var ie;if(S&&S.call(this),$(this,O()),q.arrayName&&function M(S){Array.isArray(S)&&S.forEach(Z)}(this[q.arrayName]),q.checkProperties)for(const fe in this)(null===(ie=q.blackList)||void 0===ie?void 0:ie.includes(fe))||Z(this[fe])}}function L(S={}){return q=>{!function _(S){return!!S[I]}(q)?function ee(S,q){S.prototype.ngOnDestroy=b(S.prototype.ngOnDestroy,q)}(q,S):function V(S,q){const ie=S.\u0275pipe;ie.onDestroy=b(ie.onDestroy,q)}(q,S),function k(S){S.prototype[j]=!0}(q)}}function P(S,q){return ie=>{const fe=O(q);return"string"==typeof q?function d(S,q,ie){const fe=S[q];Q(S,ie),S[q]=function(){fe.apply(this,arguments),$(this,ie),S[q]=fe}}(S,q,fe):Q(S,fe),ie.pipe((0,v.R)(S[fe]))}}Symbol("CheckerHasBeenSet")},9552:(ge,Y,i)=>{i.d(Y,{$:()=>w,j:()=>U});var e=i(655),o=i(9808),n=i(5e3),s=i(2654),z=i(839),y=i(8929),a=i(6787),B=i(3753),l=i(7625),v=i(4850),I=i(3164),_=i(9439),T=i(1721),j=i(4090),O=i(925),k=i(5577),Q=i(226);const $=["fixedEl"],Z=["*"];var M=(()=>{return(F=M||(M={})).resize="resize",F.scroll="scroll",F.touchstart="touchstart",F.touchmove="touchmove",F.touchend="touchend",F.pageshow="pageshow",F.load="LOAD",M;var F})();function ee(F){return function b(F){return"undefined"!=typeof window&&F===window}(F)?{top:0,left:0,bottom:0}:F.getBoundingClientRect()}const L="ant-affix";let w=(()=>{class F{constructor(d,P,G,S,q,ie,fe,_e,Te,De){this.nzConfigService=G,this.scrollSrv=S,this.ngZone=q,this.platform=ie,this.renderer=fe,this.nzResizeObserver=_e,this.cdr=Te,this.directionality=De,this._nzModuleName="affix",this.nzChange=new n.vpe,this.dir="ltr",this.positionChangeSubscription=s.w.EMPTY,this.offsetChanged$=new z.t(1),this.destroy$=new y.xQ,this.placeholderNode=d.nativeElement,this.document=P}get target(){const d=this.nzTarget;return("string"==typeof d?this.document.querySelector(d):d)||window}ngOnInit(){var d;null===(d=this.directionality.change)||void 0===d||d.pipe((0,l.R)(this.destroy$)).subscribe(P=>{this.dir=P,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(d){const{nzOffsetBottom:P,nzOffsetTop:G,nzTarget:S}=d;(P||G)&&this.offsetChanged$.next(),S&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();const d=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>(0,a.T)(...Object.keys(M).map(P=>(0,B.R)(this.target,P)),this.offsetChanged$.pipe((0,v.U)(()=>({}))),this.nzResizeObserver.observe(d)).pipe((0,I.p)(20,void 0,{trailing:!0}),(0,l.R)(this.destroy$)).subscribe(P=>this.updatePosition(P))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}getOffset(d,P){const G=d.getBoundingClientRect(),S=ee(P),q=this.scrollSrv.getScroll(P,!0),ie=this.scrollSrv.getScroll(P,!1),fe=this.document.body;return{top:G.top-S.top+q-(fe.clientTop||0),left:G.left-S.left+ie-(fe.clientLeft||0),width:G.width,height:G.height}}setAffixStyle(d,P){const G=this.affixStyle,S=this.target===window;if("scroll"===d.type&&G&&P&&S||(0,T.wU)(G,P))return;const q=!!P,ie=this.fixedEl.nativeElement;this.renderer.setStyle(ie,"cssText",(0,T.GM)(P)),this.affixStyle=P,q?ie.classList.add(L):ie.classList.remove(L),this.updateRtlClass(),(P&&!G||!P&&G)&&this.nzChange.emit(q)}setPlaceholderStyle(d){(0,T.wU)(d,this.placeholderStyle)||(this.renderer.setStyle(this.placeholderNode,"cssText",(0,T.GM)(d)),this.placeholderStyle=d)}syncPlaceholderStyle(d){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;const P={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),P)),this.setPlaceholderStyle(P)}updatePosition(d){if(!this.platform.isBrowser)return;const P=this.target;let G=this.nzOffsetTop;const S=this.scrollSrv.getScroll(P,!0),q=this.getOffset(this.placeholderNode,P),ie=this.fixedEl.nativeElement,fe={width:ie.offsetWidth,height:ie.offsetHeight},_e={top:!1,bottom:!1};"number"!=typeof G&&"number"!=typeof this.nzOffsetBottom?(_e.top=!0,G=0):(_e.top="number"==typeof G,_e.bottom="number"==typeof this.nzOffsetBottom);const Te=ee(P),De=P.innerHeight||P.clientHeight;if(S>=q.top-G&&_e.top){const se=q.width;this.setAffixStyle(d,{position:"fixed",top:Te.top+G,left:Te.left+q.left,width:se}),this.setPlaceholderStyle({width:se,height:fe.height})}else if(S<=q.top+fe.height+this.nzOffsetBottom-De&&_e.bottom){const se=P===window?0:window.innerHeight-Te.bottom,he=q.width;this.setAffixStyle(d,{position:"fixed",bottom:se+this.nzOffsetBottom,left:Te.left+q.left,width:he}),this.setPlaceholderStyle({width:he,height:q.height})}else d.type===M.resize&&this.affixStyle&&"fixed"===this.affixStyle.position&&this.placeholderNode.offsetWidth?this.setAffixStyle(d,Object.assign(Object.assign({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(d),this.setPlaceholderStyle();"resize"===d.type&&this.syncPlaceholderStyle(d)}updateRtlClass(){const d=this.fixedEl.nativeElement;"rtl"===this.dir&&d.classList.contains(L)?d.classList.add(`${L}-rtl`):d.classList.remove(`${L}-rtl`)}}return F.\u0275fac=function(d){return new(d||F)(n.Y36(n.SBq),n.Y36(o.K0),n.Y36(_.jY),n.Y36(j.MF),n.Y36(n.R0b),n.Y36(O.t4),n.Y36(n.Qsj),n.Y36(k.D3),n.Y36(n.sBO),n.Y36(Q.Is,8))},F.\u0275cmp=n.Xpm({type:F,selectors:[["nz-affix"]],viewQuery:function(d,P){if(1&d&&n.Gf($,7),2&d){let G;n.iGM(G=n.CRH())&&(P.fixedEl=G.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[n.TTD],ngContentSelectors:Z,decls:3,vars:0,consts:[["fixedEl",""]],template:function(d,P){1&d&&(n.F$t(),n.TgZ(0,"div",null,0),n.Hsn(2),n.qZA())},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,_.oS)(),(0,T.Rn)(void 0)],F.prototype,"nzOffsetTop",void 0),(0,e.gn)([(0,_.oS)(),(0,T.Rn)(void 0)],F.prototype,"nzOffsetBottom",void 0),F})(),U=(()=>{class F{}return F.\u0275fac=function(d){return new(d||F)},F.\u0275mod=n.oAB({type:F}),F.\u0275inj=n.cJS({imports:[[Q.vT,o.ez,O.ud]]}),F})()},6699:(ge,Y,i)=>{i.d(Y,{Dz:()=>O,Rt:()=>Q});var e=i(655),o=i(5e3),n=i(9439),s=i(1721),z=i(925),y=i(9808),a=i(5017),B=i(226);const l=["textEl"];function v($,Z){if(1&$&&o._UZ(0,"i",3),2&$){const M=o.oxw();o.Q6J("nzType",M.nzIcon)}}function I($,Z){if(1&$){const M=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(ee){return o.CHM(M),o.oxw().imgError(ee)}),o.qZA()}if(2&$){const M=o.oxw();o.Q6J("src",M.nzSrc,o.LSH),o.uIk("srcset",M.nzSrcSet,o.LSH)("alt",M.nzAlt)}}function _($,Z){if(1&$&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&$){const M=o.oxw();o.Q6J("ngStyle",M.textStyles),o.xp6(2),o.Oqu(M.nzText)}}let O=(()=>{class ${constructor(M,b,ee,V){this.nzConfigService=M,this.elementRef=b,this.cdr=ee,this.platform=V,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(M){this.nzError.emit(M),M.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const M=this.textEl.nativeElement.offsetWidth,b=this.el.getBoundingClientRect().width,ee=2*this.nzGap<b?2*this.nzGap:8;this.textStyles={transform:`scale(${b-ee<M?(b-ee)/M:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return $.\u0275fac=function(M){return new(M||$)(o.Y36(n.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(z.t4))},$.\u0275cmp=o.Xpm({type:$,selectors:[["nz-avatar"]],viewQuery:function(M,b){if(1&M&&o.Gf(l,5),2&M){let ee;o.iGM(ee=o.CRH())&&(b.textEl=ee.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(M,b){2&M&&(o.Udp("width",b.customSize)("height",b.customSize)("line-height",b.customSize)("font-size",b.hasIcon&&b.customSize?b.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===b.nzSize)("ant-avatar-sm","small"===b.nzSize)("ant-avatar-square","square"===b.nzShape)("ant-avatar-circle","circle"===b.nzShape)("ant-avatar-icon",b.nzIcon)("ant-avatar-image",b.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(M,b){1&M&&(o.YNc(0,v,1,1,"i",0),o.YNc(1,I,1,3,"img",1),o.YNc(2,_,3,2,"span",2)),2&M&&(o.Q6J("ngIf",b.nzIcon&&b.hasIcon),o.xp6(1),o.Q6J("ngIf",b.nzSrc&&b.hasSrc),o.xp6(1),o.Q6J("ngIf",b.nzText&&b.hasText))},directives:[y.O5,a.Ls,y.PC],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,n.oS)()],$.prototype,"nzShape",void 0),(0,e.gn)([(0,n.oS)()],$.prototype,"nzSize",void 0),(0,e.gn)([(0,n.oS)(),(0,s.Rn)()],$.prototype,"nzGap",void 0),$})(),Q=(()=>{class ${}return $.\u0275fac=function(M){return new(M||$)},$.\u0275mod=o.oAB({type:$}),$.\u0275inj=o.cJS({imports:[[B.vT,y.ez,a.PV,z.ud]]}),$})()},4401:(ge,Y,i)=>{i.d(Y,{F9:()=>F,mS:()=>N,x7:()=>U});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),z=i(8076),y=i(9439),a=i(1721),B=i(226),l=i(4832),v=i(9808),I=i(969),_=i(7144);function T(d,P){if(1&d&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&d){const G=P.$implicit,S=o.oxw(2).index,q=o.oxw(2);o.ekj("current",G===q.countArray[S]),o.xp6(1),o.hij(" ",G," ")}}function j(d,P){if(1&d&&(o.ynx(0),o.YNc(1,T,2,3,"p",5),o.BQk()),2&d){const G=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",G.countSingleArray)}}function O(d,P){if(1&d&&(o.TgZ(0,"span",3),o.YNc(1,j,2,1,"ng-container",4),o.qZA()),2&d){const G=P.index,S=o.oxw(2);o.Udp("transform","translateY("+100*-S.countArray[G]+"%)"),o.Q6J("nzNoAnimation",S.noAnimation),o.xp6(1),o.Q6J("ngIf",!S.nzDot&&void 0!==S.countArray[G])}}function k(d,P){if(1&d&&(o.ynx(0),o.YNc(1,O,2,4,"span",2),o.BQk()),2&d){const G=o.oxw();o.xp6(1),o.Q6J("ngForOf",G.maxNumberArray)}}function Q(d,P){if(1&d&&o._uU(0),2&d){const G=o.oxw();o.hij("",G.nzOverflowCount,"+")}}function $(d,P){if(1&d&&(o.ynx(0),o._uU(1),o.BQk()),2&d){const G=o.oxw(2);o.xp6(1),o.Oqu(G.nzText)}}function Z(d,P){if(1&d&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,$,2,1,"ng-container",1),o.qZA(),o.BQk()),2&d){const G=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",G.nzStatus||G.presetColor,""),o.Udp("background",!G.presetColor&&G.nzColor),o.Q6J("ngStyle",G.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",G.nzText)}}function M(d,P){if(1&d&&o._UZ(0,"nz-badge-sup",5),2&d){const G=o.oxw(2);o.Q6J("nzOffset",G.nzOffset)("nzTitle",G.nzTitle)("nzStyle",G.nzStyle)("nzDot",G.nzDot)("nzOverflowCount",G.nzOverflowCount)("disableAnimation",!!(G.nzStandalone||G.nzStatus||G.nzColor||null!=G.noAnimation&&G.noAnimation.nzNoAnimation))("nzCount",G.nzCount)("noAnimation",!(null==G.noAnimation||!G.noAnimation.nzNoAnimation))}}function b(d,P){if(1&d&&(o.ynx(0),o.YNc(1,M,1,8,"nz-badge-sup",4),o.BQk()),2&d){const G=o.oxw();o.xp6(1),o.Q6J("ngIf",G.showSup)}}const ee=["*"];function V(d,P){if(1&d&&(o.ynx(0),o._uU(1),o.BQk()),2&d){const G=o.oxw();o.xp6(1),o.Oqu(G.nzText)}}const L=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let m=(()=>{class d{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(G){const{nzOverflowCount:S,nzCount:q}=G;q&&"number"==typeof q.currentValue&&(this.count=Math.max(0,q.currentValue),this.countArray=this.count.toString().split("").map(ie=>+ie)),S&&this.generateMaxNumberArray()}}return d.\u0275fac=function(G){return new(G||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(G,S){2&G&&(o.uIk("title",null===S.nzTitle?"":S.nzTitle||S.nzCount),o.d8E("@.disabled",S.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(S.nzStyle),o.Udp("right",S.nzOffset&&S.nzOffset[0]?-S.nzOffset[0]:null,"px")("margin-top",S.nzOffset&&S.nzOffset[1]?S.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!S.nzDot)("ant-badge-dot",S.nzDot)("ant-badge-multiple-words",S.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(G,S){if(1&G&&(o.YNc(0,k,2,1,"ng-container",0),o.YNc(1,Q,1,1,"ng-template",null,1,o.W1O)),2&G){const q=o.MAs(2);o.Q6J("ngIf",S.count<=S.nzOverflowCount)("ngIfElse",q)}},directives:[v.O5,v.sg,l.P],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),d})(),U=(()=>{class d{constructor(G,S,q,ie,fe,_e){this.nzConfigService=G,this.renderer=S,this.cdr=q,this.elementRef=ie,this.directionality=fe,this.noAnimation=_e,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new n.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var G;null===(G=this.directionality.change)||void 0===G||G.pipe((0,s.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(G){const{nzColor:S,nzShowDot:q,nzDot:ie,nzCount:fe,nzShowZero:_e}=G;S&&(this.presetColor=this.nzColor&&-1!==L.indexOf(this.nzColor)?this.nzColor:null),(q||ie||fe||_e)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return d.\u0275fac=function(G){return new(G||d)(o.Y36(y.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(B.Is,8),o.Y36(l.P,9))},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(G,S){2&G&&o.ekj("ant-badge-status",S.nzStatus)("ant-badge-not-a-wrapper",!!(S.nzStandalone||S.nzStatus||S.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:ee,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(G,S){1&G&&(o.F$t(),o.YNc(0,Z,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,b,2,1,"ng-container",1)),2&G&&(o.Q6J("ngIf",S.nzStatus||S.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",S.nzCount))},directives:[m,v.O5,v.PC,I.f],encapsulation:2,data:{animation:[z.Ev]},changeDetection:0}),(0,e.gn)([(0,a.yF)()],d.prototype,"nzShowZero",void 0),(0,e.gn)([(0,a.yF)()],d.prototype,"nzShowDot",void 0),(0,e.gn)([(0,a.yF)()],d.prototype,"nzStandalone",void 0),(0,e.gn)([(0,a.yF)()],d.prototype,"nzDot",void 0),(0,e.gn)([(0,y.oS)()],d.prototype,"nzOverflowCount",void 0),(0,e.gn)([(0,y.oS)()],d.prototype,"nzColor",void 0),d})(),F=(()=>{class d{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(G){const{nzColor:S}=G;S&&(this.presetColor=this.nzColor&&-1!==L.indexOf(this.nzColor)?this.nzColor:null)}}return d.\u0275fac=function(G){return new(G||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:ee,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(G,S){1&G&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,V,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&G&&(o.xp6(1),o.Tol(S.presetColor&&"ant-ribbon-color-"+S.presetColor),o.Udp("background-color",!S.presetColor&&S.nzColor),o.ekj("ant-ribbon-placement-end","end"===S.nzPlacement)("ant-ribbon-placement-start","start"===S.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",S.nzText),o.xp6(1),o.Udp("color",!S.presetColor&&S.nzColor))},directives:[I.f],encapsulation:2,changeDetection:0}),d})(),N=(()=>{class d{}return d.\u0275fac=function(G){return new(G||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[[B.vT,v.ez,_.Q8,I.T,l.g]]}),d})()},7484:(ge,Y,i)=>{i.d(Y,{_i:()=>fe,bd:()=>De,vh:()=>he});var e=i(655),o=i(5e3),n=i(1721),s=i(8929),z=i(7625),y=i(9439),a=i(226),B=i(9808),l=i(969);function v(E,oe){1&E&&o.Hsn(0)}const I=["*"];function _(E,oe){1&E&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&E&&o.Q6J("ngClass",oe.$implicit)}function T(E,oe){if(1&E&&(o.TgZ(0,"div",2),o.YNc(1,_,2,1,"div",3),o.qZA()),2&E){const W=oe.$implicit;o.xp6(1),o.Q6J("ngForOf",W)}}function j(E,oe){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const W=o.oxw(3);o.xp6(1),o.Oqu(W.nzTitle)}}function O(E,oe){if(1&E&&(o.TgZ(0,"div",11),o.YNc(1,j,2,1,"ng-container",12),o.qZA()),2&E){const W=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",W.nzTitle)}}function k(E,oe){if(1&E&&(o.ynx(0),o._uU(1),o.BQk()),2&E){const W=o.oxw(3);o.xp6(1),o.Oqu(W.nzExtra)}}function Q(E,oe){if(1&E&&(o.TgZ(0,"div",13),o.YNc(1,k,2,1,"ng-container",12),o.qZA()),2&E){const W=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",W.nzExtra)}}function $(E,oe){}function Z(E,oe){if(1&E&&(o.ynx(0),o.YNc(1,$,0,0,"ng-template",14),o.BQk()),2&E){const W=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",W.listOfNzCardTabComponent.template)}}function M(E,oe){if(1&E&&(o.TgZ(0,"div",6)(1,"div",7),o.YNc(2,O,2,1,"div",8),o.YNc(3,Q,2,1,"div",9),o.qZA(),o.YNc(4,Z,2,1,"ng-container",10),o.qZA()),2&E){const W=o.oxw();o.xp6(2),o.Q6J("ngIf",W.nzTitle),o.xp6(1),o.Q6J("ngIf",W.nzExtra),o.xp6(1),o.Q6J("ngIf",W.listOfNzCardTabComponent)}}function b(E,oe){}function ee(E,oe){if(1&E&&(o.TgZ(0,"div",15),o.YNc(1,b,0,0,"ng-template",14),o.qZA()),2&E){const W=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",W.nzCover)}}function V(E,oe){1&E&&(o.ynx(0),o.Hsn(1),o.BQk())}function L(E,oe){1&E&&o._UZ(0,"nz-card-loading")}function m(E,oe){}function w(E,oe){if(1&E&&(o.TgZ(0,"li")(1,"span"),o.YNc(2,m,0,0,"ng-template",14),o.qZA()()),2&E){const W=oe.$implicit,de=o.oxw(2);o.Udp("width",100/de.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",W)}}function U(E,oe){if(1&E&&(o.TgZ(0,"ul",16),o.YNc(1,w,3,3,"li",17),o.qZA()),2&E){const W=o.oxw();o.xp6(1),o.Q6J("ngForOf",W.nzActions)}}let ie=(()=>{class E{constructor(){this.nzHoverable=!0}}return E.\u0275fac=function(W){return new(W||E)},E.\u0275dir=o.lG2({type:E,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(W,de){2&W&&o.ekj("ant-card-hoverable",de.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,e.gn)([(0,n.yF)()],E.prototype,"nzHoverable",void 0),E})(),fe=(()=>{class E{}return E.\u0275fac=function(W){return new(W||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-tab"]],viewQuery:function(W,de){if(1&W&&o.Gf(o.Rgc,7),2&W){let R;o.iGM(R=o.CRH())&&(de.template=R.first)}},exportAs:["nzCardTab"],ngContentSelectors:I,decls:1,vars:0,template:function(W,de){1&W&&(o.F$t(),o.YNc(0,v,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),E})(),_e=(()=>{class E{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return E.\u0275fac=function(W){return new(W||E)},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(W,de){1&W&&(o.TgZ(0,"div",0),o.YNc(1,T,2,1,"div",1),o.qZA()),2&W&&(o.xp6(1),o.Q6J("ngForOf",de.listOfLoading))},directives:[B.sg,B.mk],encapsulation:2,changeDetection:0}),E})(),De=(()=>{class E{constructor(W,de,R){this.nzConfigService=W,this.cdr=de,this.directionality=R,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new s.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var W;null===(W=this.directionality.change)||void 0===W||W.pipe((0,z.R)(this.destroy$)).subscribe(de=>{this.dir=de,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return E.\u0275fac=function(W){return new(W||E)(o.Y36(y.jY),o.Y36(o.sBO),o.Y36(a.Is,8))},E.\u0275cmp=o.Xpm({type:E,selectors:[["nz-card"]],contentQueries:function(W,de,R){if(1&W&&(o.Suo(R,fe,5),o.Suo(R,ie,4)),2&W){let ce;o.iGM(ce=o.CRH())&&(de.listOfNzCardTabComponent=ce.first),o.iGM(ce=o.CRH())&&(de.listOfNzCardGridDirective=ce)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(W,de){2&W&&o.ekj("ant-card-loading",de.nzLoading)("ant-card-bordered",!1===de.nzBorderless&&de.nzBordered)("ant-card-hoverable",de.nzHoverable)("ant-card-small","small"===de.nzSize)("ant-card-contain-grid",de.listOfNzCardGridDirective&&de.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===de.nzType)("ant-card-contain-tabs",!!de.listOfNzCardTabComponent)("ant-card-rtl","rtl"===de.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:I,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(W,de){if(1&W&&(o.F$t(),o.YNc(0,M,5,3,"div",0),o.YNc(1,ee,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,V,2,0,"ng-container",3),o.YNc(4,L,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,U,2,1,"ul",5)),2&W){const R=o.MAs(5);o.Q6J("ngIf",de.nzTitle||de.nzExtra||de.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",de.nzCover),o.xp6(1),o.Q6J("ngStyle",de.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!de.nzLoading)("ngIfElse",R),o.xp6(3),o.Q6J("ngIf",de.nzActions.length)}},directives:[_e,B.O5,l.f,B.tP,B.PC,B.sg],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,y.oS)(),(0,n.yF)()],E.prototype,"nzBordered",void 0),(0,e.gn)([(0,y.oS)(),(0,n.yF)()],E.prototype,"nzBorderless",void 0),(0,e.gn)([(0,n.yF)()],E.prototype,"nzLoading",void 0),(0,e.gn)([(0,y.oS)(),(0,n.yF)()],E.prototype,"nzHoverable",void 0),(0,e.gn)([(0,y.oS)()],E.prototype,"nzSize",void 0),E})(),he=(()=>{class E{}return E.\u0275fac=function(W){return new(W||E)},E.\u0275mod=o.oAB({type:E}),E.\u0275inj=o.cJS({imports:[[B.ez,l.T],a.vT]}),E})()},5577:(ge,Y,i)=>{i.d(Y,{D3:()=>y,y7:()=>B});var e=i(5e3),o=i(3191),n=i(2916),s=i(8929);let z=(()=>{class l{create(I){return"undefined"==typeof ResizeObserver?null:new ResizeObserver(I)}}return l.\u0275fac=function(I){return new(I||l)},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),y=(()=>{class l{constructor(I){this.nzResizeObserverFactory=I,this.observedElements=new Map}ngOnDestroy(){this.observedElements.forEach((I,_)=>this.cleanupObserver(_))}observe(I){const _=(0,o.fI)(I);return new n.y(T=>{const O=this.observeElement(_).subscribe(T);return()=>{O.unsubscribe(),this.unobserveElement(_)}})}observeElement(I){if(this.observedElements.has(I))this.observedElements.get(I).count++;else{const _=new s.xQ,T=this.nzResizeObserverFactory.create(j=>_.next(j));T&&T.observe(I),this.observedElements.set(I,{observer:T,stream:_,count:1})}return this.observedElements.get(I).stream}unobserveElement(I){this.observedElements.has(I)&&(this.observedElements.get(I).count--,this.observedElements.get(I).count||this.cleanupObserver(I))}cleanupObserver(I){if(this.observedElements.has(I)){const{observer:_,stream:T}=this.observedElements.get(I);_&&_.disconnect(),T.complete(),this.observedElements.delete(I)}}}return l.\u0275fac=function(I){return new(I||l)(e.LFG(z))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),B=(()=>{class l{}return l.\u0275fac=function(I){return new(I||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[z]}),l})()},5482:(ge,Y,i)=>{i.d(Y,{Zv:()=>m,cD:()=>w,yH:()=>V});var e=i(655),o=i(5e3),n=i(3753),s=i(7625),z=i(2198),y=i(8076),a=i(9439),B=i(4090),l=i(1721),v=i(226),I=i(4832),_=i(9808),T=i(969),j=i(5017);const O=["*"],k=["collapseHeader"];function Q(U,F){if(1&U&&(o.ynx(0),o._UZ(1,"i",7),o.BQk()),2&U){const N=F.$implicit,d=o.oxw(2);o.xp6(1),o.Q6J("nzType",N||"right")("nzRotate",d.nzActive?90:0)}}function $(U,F){if(1&U&&(o.TgZ(0,"div"),o.YNc(1,Q,2,2,"ng-container",3),o.qZA()),2&U){const N=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",N.nzExpandedIcon)}}function Z(U,F){if(1&U&&(o.ynx(0),o._uU(1),o.BQk()),2&U){const N=o.oxw();o.xp6(1),o.Oqu(N.nzHeader)}}function M(U,F){if(1&U&&(o.ynx(0),o._uU(1),o.BQk()),2&U){const N=o.oxw(2);o.xp6(1),o.Oqu(N.nzExtra)}}function b(U,F){if(1&U&&(o.TgZ(0,"div",8),o.YNc(1,M,2,1,"ng-container",3),o.qZA()),2&U){const N=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",N.nzExtra)}}const ee="collapse";let V=(()=>{class U{constructor(N,d,P,G){this.nzConfigService=N,this.cdr=d,this.directionality=P,this.destroy$=G,this._nzModuleName=ee,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(ee).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var N;null===(N=this.directionality.change)||void 0===N||N.pipe((0,s.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(N){this.listOfNzCollapsePanelComponent.push(N)}removePanel(N){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(N),1)}click(N){this.nzAccordion&&!N.nzActive&&this.listOfNzCollapsePanelComponent.filter(d=>d!==N).forEach(d=>{d.nzActive&&(d.nzActive=!1,d.nzActiveChange.emit(d.nzActive),d.markForCheck())}),N.nzActive=!N.nzActive,N.nzActiveChange.emit(N.nzActive)}}return U.\u0275fac=function(N){return new(N||U)(o.Y36(a.jY),o.Y36(o.sBO),o.Y36(v.Is,8),o.Y36(B.kn))},U.\u0275cmp=o.Xpm({type:U,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(N,d){2&N&&o.ekj("ant-collapse-icon-position-left","left"===d.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===d.nzExpandIconPosition)("ant-collapse-ghost",d.nzGhost)("ant-collapse-borderless",!d.nzBordered)("ant-collapse-rtl","rtl"===d.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([B.kn])],ngContentSelectors:O,decls:1,vars:0,template:function(N,d){1&N&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],U.prototype,"nzAccordion",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],U.prototype,"nzBordered",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],U.prototype,"nzGhost",void 0),U})();const L="collapsePanel";let m=(()=>{class U{constructor(N,d,P,G,S,q){this.nzConfigService=N,this.ngZone=d,this.cdr=P,this.destroy$=G,this.nzCollapseComponent=S,this.noAnimation=q,this._nzModuleName=L,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(L).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,n.R)(this.collapseHeader.nativeElement,"click").pipe((0,z.h)(()=>!this.nzDisabled),(0,s.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return U.\u0275fac=function(N){return new(N||U)(o.Y36(a.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(B.kn),o.Y36(V,1),o.Y36(I.P,8))},U.\u0275cmp=o.Xpm({type:U,selectors:[["nz-collapse-panel"]],viewQuery:function(N,d){if(1&N&&o.Gf(k,7),2&N){let P;o.iGM(P=o.CRH())&&(d.collapseHeader=P.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(N,d){2&N&&o.ekj("ant-collapse-no-arrow",!d.nzShowArrow)("ant-collapse-item-active",d.nzActive)("ant-collapse-item-disabled",d.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([B.kn])],ngContentSelectors:O,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(N,d){1&N&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,$,2,1,"div",2),o.YNc(3,Z,2,1,"ng-container",3),o.YNc(4,b,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&N&&(o.uIk("aria-expanded",d.nzActive),o.xp6(2),o.Q6J("ngIf",d.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",d.nzHeader),o.xp6(1),o.Q6J("ngIf",d.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",d.nzActive),o.Q6J("@.disabled",null==d.noAnimation?null:d.noAnimation.nzNoAnimation)("@collapseMotion",d.nzActive?"expanded":"hidden"))},directives:[_.O5,T.f,j.Ls],encapsulation:2,data:{animation:[y.J_]},changeDetection:0}),(0,e.gn)([(0,l.yF)()],U.prototype,"nzActive",void 0),(0,e.gn)([(0,l.yF)()],U.prototype,"nzDisabled",void 0),(0,e.gn)([(0,a.oS)(),(0,l.yF)()],U.prototype,"nzShowArrow",void 0),U})(),w=(()=>{class U{}return U.\u0275fac=function(N){return new(N||U)},U.\u0275mod=o.oAB({type:U}),U.\u0275inj=o.cJS({imports:[[v.vT,_.ez,j.PV,T.T,I.g]]}),U})()},3098:(ge,Y,i)=>{i.d(Y,{R7:()=>re,q6:()=>ze,uj:()=>ne});var e=i(226),o=i(925),n=i(9808),s=i(5e3),z=i(969),y=i(655),a=i(8929),B=i(6787),l=i(1721),v=i(7625),I=i(1059),_=i(7545),T=i(7138),j=i(2994),O=i(9439),k=i(948),Q=i(4090);function $(C,X){1&C&&s.Hsn(0)}const Z=["*"];function M(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzTitle)}}function b(C,X){if(1&C&&(s.TgZ(0,"div",6),s.YNc(1,M,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function ee(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Oqu(D.nzExtra)}}function V(C,X){if(1&C&&(s.TgZ(0,"div",8),s.YNc(1,ee,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function L(C,X){if(1&C&&(s.TgZ(0,"div",3),s.YNc(1,b,2,1,"div",4),s.YNc(2,V,2,1,"div",5),s.qZA()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",D.nzTitle),s.xp6(1),s.Q6J("ngIf",D.nzExtra)}}function m(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function w(C,X){}function U(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,m,2,1,"ng-container",7),s.qZA(),s.TgZ(5,"span",15),s.YNc(6,w,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const D=s.oxw().$implicit,le=s.oxw(3);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!le.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(2),s.Q6J("ngTemplateOutlet",D.content)}}function F(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw(3).$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function N(C,X){if(1&C&&(s.TgZ(0,"td",14),s.YNc(1,F,2,1,"ng-container",7),s.qZA()),2&C){const D=s.oxw(2).$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function d(C,X){}function P(C,X){if(1&C&&(s.ynx(0),s.YNc(1,N,2,1,"td",17),s.TgZ(2,"td",18),s.YNc(3,d,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title),s.xp6(1),s.Q6J("colSpan",2*D.span-1),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function G(C,X){if(1&C&&(s.ynx(0),s.YNc(1,U,7,5,"ng-container",2),s.YNc(2,P,4,3,"ng-container",2),s.BQk()),2&C){const D=s.oxw(3);s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}function S(C,X){if(1&C&&(s.TgZ(0,"tr",10),s.YNc(1,G,3,2,"ng-container",11),s.qZA()),2&C){const D=X.$implicit;s.xp6(1),s.Q6J("ngForOf",D)}}function q(C,X){if(1&C&&(s.ynx(0),s.YNc(1,S,2,1,"tr",9),s.BQk()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ie(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function fe(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",14),s.YNc(4,ie,2,1,"ng-container",7),s.qZA()()(),s.BQk()),2&C){const D=X.$implicit,le=s.oxw(4);s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(2),s.ekj("ant-descriptions-item-no-colon",!le.nzColon),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function _e(C,X){}function Te(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"td",12)(2,"div",13)(3,"span",15),s.YNc(4,_e,0,0,"ng-template",16),s.qZA()()(),s.BQk()),2&C){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(3),s.Q6J("ngTemplateOutlet",D.content)}}function De(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,fe,5,4,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,Te,5,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const D=X.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function se(C,X){if(1&C&&(s.ynx(0),s.YNc(1,De,5,2,"ng-container",11),s.BQk()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function he(C,X){if(1&C&&(s.ynx(0),s._uU(1),s.BQk()),2&C){const D=s.oxw().$implicit;s.xp6(1),s.hij(" ",D.title," ")}}function E(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"td",19),s.YNc(2,he,2,1,"ng-container",7),s.qZA(),s.BQk()),2&C){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("nzStringTemplateOutlet",D.title)}}function oe(C,X){}function W(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"td",18),s.YNc(2,oe,0,0,"ng-template",16),s.qZA(),s.BQk()),2&C){const D=X.$implicit;s.xp6(1),s.Q6J("colSpan",D.span),s.xp6(1),s.Q6J("ngTemplateOutlet",D.content)}}function de(C,X){if(1&C&&(s.ynx(0),s.TgZ(1,"tr",10),s.YNc(2,E,3,2,"ng-container",11),s.qZA(),s.TgZ(3,"tr",10),s.YNc(4,W,3,2,"ng-container",11),s.qZA(),s.BQk()),2&C){const D=X.$implicit;s.xp6(2),s.Q6J("ngForOf",D),s.xp6(2),s.Q6J("ngForOf",D)}}function R(C,X){if(1&C&&(s.ynx(0),s.YNc(1,de,5,2,"ng-container",11),s.BQk()),2&C){const D=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",D.itemMatrix)}}function ce(C,X){if(1&C&&(s.ynx(0),s.YNc(1,se,2,1,"ng-container",2),s.YNc(2,R,2,1,"ng-container",2),s.BQk()),2&C){const D=s.oxw();s.xp6(1),s.Q6J("ngIf",!D.nzBordered),s.xp6(1),s.Q6J("ngIf",D.nzBordered)}}let ne=(()=>{class C{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new a.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return C.\u0275fac=function(D){return new(D||C)},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions-item"]],viewQuery:function(D,le){if(1&D&&s.Gf(s.Rgc,7),2&D){let Me;s.iGM(Me=s.CRH())&&(le.content=Me.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[s.TTD],ngContentSelectors:Z,decls:1,vars:0,template:function(D,le){1&D&&(s.F$t(),s.YNc(0,$,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,y.gn)([(0,l.Rn)()],C.prototype,"nzSpan",void 0),C})();const ue={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let re=(()=>{class C{constructor(D,le,Me,Se){this.nzConfigService=D,this.cdr=le,this.breakpointService=Me,this.directionality=Se,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ue,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Q.G_.md,this.destroy$=new a.xQ}ngOnInit(){var D;this.dir=this.directionality.value,null===(D=this.directionality.change)||void 0===D||D.pipe((0,v.R)(this.destroy$)).subscribe(le=>{this.dir=le})}ngOnChanges(D){D.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const D=this.items.changes.pipe((0,I.O)(this.items),(0,v.R)(this.destroy$));(0,B.T)(D,D.pipe((0,_.w)(()=>(0,B.T)(...this.items.map(le=>le.inputChange$)).pipe((0,T.e)(16)))),this.breakpointService.subscribe(Q.WV).pipe((0,j.b)(le=>this.breakpoint=le))).pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let D=[],le=0;const Me=this.realColumn=this.getColumn(),Se=this.items.toArray(),$e=Se.length,Ge=[],Be=()=>{Ge.push(D),D=[],le=0};for(let Re=0;Re<$e;Re++){const xe=Se[Re],{nzTitle:be,content:Qe,nzSpan:Ne}=xe;le+=Ne,le>=Me?(le>Me&&(0,k.ZK)(`"nzColumn" is ${Me} but we have row length ${le}`),D.push({title:be,content:Qe,span:Me-(le-Ne)}),Be()):Re===$e-1?(D.push({title:be,content:Qe,span:Me-(le-Ne)}),Be()):D.push({title:be,content:Qe,span:Ne})}this.itemMatrix=Ge}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return C.\u0275fac=function(D){return new(D||C)(s.Y36(O.jY),s.Y36(s.sBO),s.Y36(Q.r3),s.Y36(e.Is,8))},C.\u0275cmp=s.Xpm({type:C,selectors:[["nz-descriptions"]],contentQueries:function(D,le,Me){if(1&D&&s.Suo(Me,ne,4),2&D){let Se;s.iGM(Se=s.CRH())&&(le.items=Se)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(D,le){2&D&&s.ekj("ant-descriptions-bordered",le.nzBordered)("ant-descriptions-middle","middle"===le.nzSize)("ant-descriptions-small","small"===le.nzSize)("ant-descriptions-rtl","rtl"===le.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[s.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(D,le){1&D&&(s.YNc(0,L,3,2,"div",0),s.TgZ(1,"div",1)(2,"table")(3,"tbody"),s.YNc(4,q,2,1,"ng-container",2),s.YNc(5,ce,3,2,"ng-container",2),s.qZA()()()),2&D&&(s.Q6J("ngIf",le.nzTitle||le.nzExtra),s.xp6(4),s.Q6J("ngIf","horizontal"===le.nzLayout),s.xp6(1),s.Q6J("ngIf","vertical"===le.nzLayout))},directives:[n.O5,z.f,n.sg,n.tP],encapsulation:2,changeDetection:0}),(0,y.gn)([(0,l.yF)(),(0,O.oS)()],C.prototype,"nzBordered",void 0),(0,y.gn)([(0,O.oS)()],C.prototype,"nzColumn",void 0),(0,y.gn)([(0,O.oS)()],C.prototype,"nzSize",void 0),(0,y.gn)([(0,O.oS)(),(0,l.yF)()],C.prototype,"nzColon",void 0),C})(),ze=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=s.oAB({type:C}),C.\u0275inj=s.cJS({imports:[[e.vT,n.ez,z.T,o.ud]]}),C})()},3677:(ge,Y,i)=>{i.d(Y,{RR:()=>se,b1:()=>he,cm:()=>fe,wA:()=>De});var e=i(655),o=i(1159),n=i(7429),s=i(5e3),z=i(8929),y=i(591),a=i(6787),B=i(3753),l=i(8896),v=i(6053),I=i(7604),_=i(4850),T=i(7545),j=i(2198),O=i(7138),k=i(5778),Q=i(7625),$=i(9439),Z=i(6950),M=i(1721),b=i(1314),ee=i(925),V=i(226),L=i(9808),m=i(3075),w=i(6042),U=i(4832),F=i(969),N=i(5017),d=i(4219),P=i(8076);function G(W,de){if(1&W){const R=s.EpF();s.TgZ(0,"div",0),s.NdJ("@slideMotion.done",function(ne){return s.CHM(R),s.oxw().onAnimationEvent(ne)})("mouseenter",function(){return s.CHM(R),s.oxw().setMouseState(!0)})("mouseleave",function(){return s.CHM(R),s.oxw().setMouseState(!1)}),s.Hsn(1),s.qZA()}if(2&W){const R=s.oxw();s.ekj("ant-dropdown-rtl","rtl"===R.dir),s.Q6J("ngClass",R.nzOverlayClassName)("ngStyle",R.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==R.noAnimation?null:R.noAnimation.nzNoAnimation)("nzNoAnimation",null==R.noAnimation?null:R.noAnimation.nzNoAnimation)}}const S=["*"],ie=[Z.yW.bottomLeft,Z.yW.bottomRight,Z.yW.topRight,Z.yW.topLeft];let fe=(()=>{class W{constructor(R,ce,ne,te,ue,re){this.nzConfigService=R,this.elementRef=ce,this.overlay=ne,this.renderer=te,this.viewContainerRef=ue,this.platform=re,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new z.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new y.X(!1),this.nzTrigger$=new y.X("hover"),this.overlayClose$=new z.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new s.vpe}setDropdownMenuValue(R,ce){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(R,ce)}ngAfterViewInit(){if(this.nzDropdownMenu){const R=this.elementRef.nativeElement,ce=(0,a.T)((0,B.R)(R,"mouseenter").pipe((0,I.h)(!0)),(0,B.R)(R,"mouseleave").pipe((0,I.h)(!1))),te=(0,a.T)(this.nzDropdownMenu.mouseState$,ce),ue=(0,B.R)(R,"click").pipe((0,_.U)(()=>!this.nzVisible)),re=this.nzTrigger$.pipe((0,T.w)(D=>"hover"===D?te:"click"===D?ue:l.E)),ze=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,j.h)(()=>this.nzClickHide),(0,I.h)(!1)),C=(0,a.T)(re,ze,this.overlayClose$).pipe((0,j.h)(()=>!this.nzDisabled)),X=(0,a.T)(this.inputVisible$,C);(0,v.aj)([X,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,_.U)(([D,le])=>D||le),(0,O.e)(150),(0,k.x)(),(0,j.h)(()=>this.platform.isBrowser),(0,Q.R)(this.destroy$)).subscribe(D=>{const Me=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:R).getBoundingClientRect().width;this.nzVisible!==D&&this.nzVisibleChange.emit(D),this.nzVisible=D,D?(this.overlayRef?this.overlayRef.getConfig().minWidth=Me:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Me,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,a.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,j.h)(Se=>!this.elementRef.nativeElement.contains(Se.target))),this.overlayRef.keydownEvents().pipe((0,j.h)(Se=>Se.keyCode===o.hY&&!(0,o.Vb)(Se)))).pipe((0,Q.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Z.yW[this.nzPlacement],...ie]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new n.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,Q.R)(this.destroy$)).subscribe(D=>{"void"===D.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(R){const{nzVisible:ce,nzDisabled:ne,nzOverlayClassName:te,nzOverlayStyle:ue,nzTrigger:re}=R;if(re&&this.nzTrigger$.next(this.nzTrigger),ce&&this.inputVisible$.next(this.nzVisible),ne){const ze=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(ze,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(ze,"disabled")}te&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),ue&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return W.\u0275fac=function(R){return new(R||W)(s.Y36($.jY),s.Y36(s.SBq),s.Y36(b.aV),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(ee.t4))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[s.TTD]}),(0,e.gn)([(0,$.oS)(),(0,M.yF)()],W.prototype,"nzBackdrop",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzClickHide",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzDisabled",void 0),(0,e.gn)([(0,M.yF)()],W.prototype,"nzVisible",void 0),W})(),_e=(()=>{class W{}return W.\u0275fac=function(R){return new(R||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({}),W})(),De=(()=>{class W{constructor(R,ce,ne){this.renderer=R,this.nzButtonGroupComponent=ce,this.elementRef=ne}ngAfterViewInit(){const R=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&R&&this.renderer.addClass(R,"ant-dropdown-button")}}return W.\u0275fac=function(R){return new(R||W)(s.Y36(s.Qsj),s.Y36(w.fY,9),s.Y36(s.SBq))},W.\u0275dir=s.lG2({type:W,selectors:[["","nz-button","","nz-dropdown",""]]}),W})(),se=(()=>{class W{constructor(R,ce,ne,te,ue,re,ze){this.cdr=R,this.elementRef=ce,this.renderer=ne,this.viewContainerRef=te,this.nzMenuService=ue,this.directionality=re,this.noAnimation=ze,this.mouseState$=new y.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new s.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new z.xQ}onAnimationEvent(R){this.animationStateChange$.emit(R)}setMouseState(R){this.mouseState$.next(R)}setValue(R,ce){this[R]=ce,this.cdr.markForCheck()}ngOnInit(){var R;null===(R=this.directionality.change)||void 0===R||R.pipe((0,Q.R)(this.destroy$)).subscribe(ce=>{this.dir=ce,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return W.\u0275fac=function(R){return new(R||W)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(s.s_b),s.Y36(d.hl),s.Y36(V.Is,8),s.Y36(U.P,9))},W.\u0275cmp=s.Xpm({type:W,selectors:[["nz-dropdown-menu"]],viewQuery:function(R,ce){if(1&R&&s.Gf(s.Rgc,7),2&R){let ne;s.iGM(ne=s.CRH())&&(ce.templateRef=ne.first)}},exportAs:["nzDropdownMenu"],features:[s._Bn([d.hl,{provide:d.Cc,useValue:!0}])],ngContentSelectors:S,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(R,ce){1&R&&(s.F$t(),s.YNc(0,G,2,7,"ng-template"))},directives:[L.mk,L.PC,U.P],encapsulation:2,data:{animation:[P.mF]},changeDetection:0}),W})(),he=(()=>{class W{}return W.\u0275fac=function(R){return new(R||W)},W.\u0275mod=s.oAB({type:W}),W.\u0275inj=s.cJS({imports:[[V.vT,L.ez,b.U8,m.u5,w.sL,d.ip,N.PV,U.g,ee.ud,Z.e4,_e,F.T],d.ip]}),W})();new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(ge,Y,i)=>{i.d(Y,{AA:()=>nt,I2:()=>je,IO:()=>me,Ph:()=>rt,n_:()=>Xe,t4:()=>Ke,yi:()=>Le,yw:()=>Ee});var e=i(5e3),o=i(6699),n=i(9808),s=i(969),z=i(655),y=i(1721),a=i(8929),B=i(8514),l=i(1086),v=i(6787),I=i(2916),_=i(591),T=i(2986),j=i(7545),O=i(7625),k=i(4090),Q=i(685),$=i(226),Z=i(7525),M=i(1894);const b=["*"];function ee(h,K){if(1&h&&e._UZ(0,"nz-avatar",3),2&h){const x=e.oxw();e.Q6J("nzSrc",x.nzSrc)}}function V(h,K){1&h&&e.Hsn(0,0,["*ngIf","!nzSrc"])}function L(h,K){if(1&h&&e._UZ(0,"nz-list-item-meta-avatar",3),2&h){const x=e.oxw();e.Q6J("nzSrc",x.avatarStr)}}function m(h,K){if(1&h&&(e.TgZ(0,"nz-list-item-meta-avatar"),e.GkF(1,4),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",x.avatarTpl)}}function w(h,K){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzTitle)}}function U(h,K){if(1&h&&(e.TgZ(0,"nz-list-item-meta-title"),e.YNc(1,w,2,1,"ng-container",6),e.qZA()),2&h){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzTitle)}}function F(h,K){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzDescription)}}function N(h,K){if(1&h&&(e.TgZ(0,"nz-list-item-meta-description"),e.YNc(1,F,2,1,"ng-container",6),e.qZA()),2&h){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzDescription)}}function d(h,K){if(1&h&&(e.TgZ(0,"div",5),e.YNc(1,U,2,1,"nz-list-item-meta-title",1),e.YNc(2,N,2,1,"nz-list-item-meta-description",1),e.Hsn(3,1),e.Hsn(4,2),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("ngIf",x.nzTitle&&!x.titleComponent),e.xp6(1),e.Q6J("ngIf",x.nzDescription&&!x.descriptionComponent)}}const P=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],G=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function S(h,K){1&h&&e.Hsn(0)}const q=["nz-list-item-actions",""];function ie(h,K){}function fe(h,K){1&h&&e._UZ(0,"em",3)}function _e(h,K){if(1&h&&(e.TgZ(0,"li"),e.YNc(1,ie,0,0,"ng-template",1),e.YNc(2,fe,1,0,"em",2),e.qZA()),2&h){const x=K.$implicit,ae=K.last;e.xp6(1),e.Q6J("ngTemplateOutlet",x),e.xp6(1),e.Q6J("ngIf",!ae)}}function Te(h,K){}const De=function(h,K){return{$implicit:h,index:K}};function se(h,K){if(1&h&&(e.ynx(0),e.YNc(1,Te,0,0,"ng-template",9),e.BQk()),2&h){const x=K.$implicit,ae=K.index,Ie=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(2,De,x,ae))}}function he(h,K){if(1&h&&(e.TgZ(0,"div",7),e.YNc(1,se,2,5,"ng-container",8),e.Hsn(2,4),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("ngForOf",x.nzDataSource)}}function E(h,K){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const x=e.oxw(2);e.xp6(1),e.Oqu(x.nzHeader)}}function oe(h,K){if(1&h&&(e.TgZ(0,"nz-list-header"),e.YNc(1,E,2,1,"ng-container",10),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzHeader)}}function W(h,K){1&h&&e._UZ(0,"div"),2&h&&e.Udp("min-height",53,"px")}function de(h,K){}function R(h,K){if(1&h&&(e.TgZ(0,"div",13),e.YNc(1,de,0,0,"ng-template",9),e.qZA()),2&h){const x=K.$implicit,ae=K.index,Ie=e.oxw(2);e.Q6J("nzSpan",Ie.nzGrid.span||null)("nzXs",Ie.nzGrid.xs||null)("nzSm",Ie.nzGrid.sm||null)("nzMd",Ie.nzGrid.md||null)("nzLg",Ie.nzGrid.lg||null)("nzXl",Ie.nzGrid.xl||null)("nzXXl",Ie.nzGrid.xxl||null),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie.nzRenderItem)("ngTemplateOutletContext",e.WLB(9,De,x,ae))}}function ce(h,K){if(1&h&&(e.TgZ(0,"div",11),e.YNc(1,R,2,12,"div",12),e.qZA()),2&h){const x=e.oxw();e.Q6J("nzGutter",x.nzGrid.gutter||null),e.xp6(1),e.Q6J("ngForOf",x.nzDataSource)}}function ne(h,K){if(1&h&&e._UZ(0,"nz-list-empty",14),2&h){const x=e.oxw();e.Q6J("nzNoResult",x.nzNoResult)}}function te(h,K){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const x=e.oxw(2);e.xp6(1),e.Oqu(x.nzFooter)}}function ue(h,K){if(1&h&&(e.TgZ(0,"nz-list-footer"),e.YNc(1,te,2,1,"ng-container",10),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzFooter)}}function re(h,K){}function ze(h,K){}function C(h,K){if(1&h&&(e.TgZ(0,"nz-list-pagination"),e.YNc(1,ze,0,0,"ng-template",6),e.qZA()),2&h){const x=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzPagination)}}const X=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],D=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function le(h,K){if(1&h&&e._UZ(0,"ul",6),2&h){const x=e.oxw(2);e.Q6J("nzActions",x.nzActions)}}function Me(h,K){if(1&h&&(e.YNc(0,le,1,1,"ul",5),e.Hsn(1)),2&h){const x=e.oxw();e.Q6J("ngIf",x.nzActions&&x.nzActions.length>0)}}function Se(h,K){if(1&h&&(e.ynx(0),e._uU(1),e.BQk()),2&h){const x=e.oxw(3);e.xp6(1),e.Oqu(x.nzContent)}}function $e(h,K){if(1&h&&(e.ynx(0),e.YNc(1,Se,2,1,"ng-container",8),e.BQk()),2&h){const x=e.oxw(2);e.xp6(1),e.Q6J("nzStringTemplateOutlet",x.nzContent)}}function Ge(h,K){if(1&h&&(e.Hsn(0,1),e.Hsn(1,2),e.YNc(2,$e,2,1,"ng-container",7)),2&h){const x=e.oxw();e.xp6(2),e.Q6J("ngIf",x.nzContent)}}function Be(h,K){1&h&&e.Hsn(0,3)}function Re(h,K){}function xe(h,K){}function be(h,K){}function Qe(h,K){}function Ne(h,K){if(1&h&&(e.YNc(0,Re,0,0,"ng-template",9),e.YNc(1,xe,0,0,"ng-template",9),e.YNc(2,be,0,0,"ng-template",9),e.YNc(3,Qe,0,0,"ng-template",9)),2&h){const x=e.oxw(),ae=e.MAs(3),Ie=e.MAs(5),Oe=e.MAs(1);e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}function Ze(h,K){}function Ye(h,K){}function We(h,K){}function Je(h,K){if(1&h&&(e.TgZ(0,"nz-list-item-extra"),e.YNc(1,We,0,0,"ng-template",9),e.qZA()),2&h){const x=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",x.nzExtra)}}function J(h,K){}function ve(h,K){if(1&h&&(e.ynx(0),e.TgZ(1,"div",10),e.YNc(2,Ze,0,0,"ng-template",9),e.YNc(3,Ye,0,0,"ng-template",9),e.qZA(),e.YNc(4,Je,2,1,"nz-list-item-extra",7),e.YNc(5,J,0,0,"ng-template",9),e.BQk()),2&h){const x=e.oxw(),ae=e.MAs(3),Ie=e.MAs(1),Oe=e.MAs(5);e.xp6(2),e.Q6J("ngTemplateOutlet",ae),e.xp6(1),e.Q6J("ngTemplateOutlet",Ie),e.xp6(1),e.Q6J("ngIf",x.nzExtra),e.xp6(1),e.Q6J("ngTemplateOutlet",Oe)}}const f=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],g=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let me=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:b,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"h4",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),h})(),Ce=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:b,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},encapsulation:2,changeDetection:0}),h})(),Pe=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:b,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(x,ae){1&x&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,ee,1,1,"nz-avatar",1),e.YNc(2,V,1,0,"ng-content",2),e.qZA()),2&x&&(e.xp6(1),e.Q6J("ngIf",ae.nzSrc),e.xp6(1),e.Q6J("ngIf",!ae.nzSrc))},directives:[o.Dz,n.O5],encapsulation:2,changeDetection:0}),h})(),Le=(()=>{class h{constructor(x,ae){this.elementRef=x,this.renderer=ae,this.avatarStr="",this.renderer.addClass(x.nativeElement,"ant-list-item-meta")}set nzAvatar(x){x instanceof e.Rgc?(this.avatarStr="",this.avatarTpl=x):this.avatarStr=x}}return h.\u0275fac=function(x){return new(x||h)(e.Y36(e.SBq),e.Y36(e.Qsj))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(x,ae,Ie){if(1&x&&(e.Suo(Ie,Ce,5),e.Suo(Ie,me,5)),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.descriptionComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.titleComponent=Oe.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:G,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(x,ae){1&x&&(e.F$t(P),e.YNc(0,L,1,1,"nz-list-item-meta-avatar",0),e.YNc(1,m,2,1,"nz-list-item-meta-avatar",1),e.Hsn(2),e.YNc(3,d,5,2,"div",2)),2&x&&(e.Q6J("ngIf",ae.avatarStr),e.xp6(1),e.Q6J("ngIf",ae.avatarTpl),e.xp6(2),e.Q6J("ngIf",ae.nzTitle||ae.nzDescription||ae.descriptionComponent||ae.titleComponent))},directives:[Pe,me,Ce,n.O5,n.tP,s.f],encapsulation:2,changeDetection:0}),h})(),Ee=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:b,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),Ue=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item-action"]],viewQuery:function(x,ae){if(1&x&&e.Gf(e.Rgc,5),2&x){let Ie;e.iGM(Ie=e.CRH())&&(ae.templateRef=Ie.first)}},exportAs:["nzListItemAction"],ngContentSelectors:b,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.YNc(0,S,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),h})(),Ve=(()=>{class h{constructor(x,ae,Ie){this.ngZone=x,this.nzActions=[],this.actions=[],this.inputActionChanges$=new a.xQ,this.contentChildrenChanges$=(0,B.P)(()=>this.nzListItemActions?(0,l.of)(null):this.ngZone.onStable.pipe((0,T.q)(1),this.enterZone(),(0,j.w)(()=>this.contentChildrenChanges$))),(0,v.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,O.R)(Ie)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(Oe=>Oe.templateRef),ae.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}enterZone(){return x=>new I.y(ae=>x.subscribe({next:Ie=>this.ngZone.run(()=>ae.next(Ie))}))}}return h.\u0275fac=function(x){return new(x||h)(e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(k.kn))},h.\u0275cmp=e.Xpm({type:h,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(x,ae,Ie){if(1&x&&e.Suo(Ie,Ue,4),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListItemActions=Oe)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[e._Bn([k.kn]),e.TTD],attrs:q,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(x,ae){1&x&&e.YNc(0,_e,3,2,"li",0),2&x&&e.Q6J("ngForOf",ae.actions)},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),h})(),je=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(x,ae){1&x&&e._UZ(0,"nz-embed-empty",0),2&x&&e.Q6J("nzComponentName","list")("specificContent",ae.nzNoResult)},directives:[Q.gB],encapsulation:2,changeDetection:0}),h})(),Ke=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:b,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),He=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:b,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),ke=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:b,decls:1,vars:0,template:function(x,ae){1&x&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),h})(),tt=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275dir=e.lG2({type:h,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),h})(),Xe=(()=>{class h{constructor(x){this.directionality=x,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new _.X(this.nzItemLayout),this.destroy$=new a.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var x;this.dir=this.directionality.value,null===(x=this.directionality.change)||void 0===x||x.pipe((0,O.R)(this.destroy$)).subscribe(ae=>{this.dir=ae})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(x){x.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return h.\u0275fac=function(x){return new(x||h)(e.Y36($.Is,8))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(x,ae,Ie){if(1&x&&(e.Suo(Ie,He,5),e.Suo(Ie,ke,5),e.Suo(Ie,tt,5)),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.nzListFooterComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListPaginationComponent=Oe.first),e.iGM(Oe=e.CRH())&&(ae.nzListLoadMoreDirective=Oe.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(x,ae){2&x&&e.ekj("ant-list-rtl","rtl"===ae.dir)("ant-list-vertical","vertical"===ae.nzItemLayout)("ant-list-lg","large"===ae.nzSize)("ant-list-sm","small"===ae.nzSize)("ant-list-split",ae.nzSplit)("ant-list-bordered",ae.nzBordered)("ant-list-loading",ae.nzLoading)("ant-list-something-after-last-item",ae.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[e.TTD],ngContentSelectors:D,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(x,ae){if(1&x&&(e.F$t(X),e.YNc(0,he,3,1,"ng-template",null,0,e.W1O),e.YNc(2,oe,2,1,"nz-list-header",1),e.Hsn(3),e.TgZ(4,"nz-spin",2),e.ynx(5),e.YNc(6,W,1,2,"div",3),e.YNc(7,ce,2,2,"div",4),e.YNc(8,ne,1,1,"nz-list-empty",5),e.BQk(),e.qZA(),e.YNc(9,ue,2,1,"nz-list-footer",1),e.Hsn(10,1),e.YNc(11,re,0,0,"ng-template",6),e.Hsn(12,2),e.YNc(13,C,2,1,"nz-list-pagination",1),e.Hsn(14,3)),2&x){const Ie=e.MAs(1);e.xp6(2),e.Q6J("ngIf",ae.nzHeader),e.xp6(2),e.Q6J("nzSpinning",ae.nzLoading),e.xp6(2),e.Q6J("ngIf",ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzGrid&&ae.nzDataSource)("ngIfElse",Ie),e.xp6(1),e.Q6J("ngIf",!ae.nzLoading&&ae.nzDataSource&&0===ae.nzDataSource.length),e.xp6(1),e.Q6J("ngIf",ae.nzFooter),e.xp6(2),e.Q6J("ngTemplateOutlet",ae.nzLoadMore),e.xp6(2),e.Q6J("ngIf",ae.nzPagination)}},directives:[Ke,Z.W,je,He,ke,n.sg,n.tP,n.O5,s.f,M.SK,M.t3],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,y.yF)()],h.prototype,"nzBordered",void 0),(0,z.gn)([(0,y.yF)()],h.prototype,"nzLoading",void 0),(0,z.gn)([(0,y.yF)()],h.prototype,"nzSplit",void 0),h})(),nt=(()=>{class h{constructor(x,ae,Ie,Oe){this.parentComp=Ie,this.cdr=Oe,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,ae.addClass(x.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(x=>{this.itemLayout=x,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return h.\u0275fac=function(x){return new(x||h)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(Xe),e.Y36(e.sBO))},h.\u0275cmp=e.Xpm({type:h,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(x,ae,Ie){if(1&x&&e.Suo(Ie,Ee,5),2&x){let Oe;e.iGM(Oe=e.CRH())&&(ae.listItemExtraDirective=Oe.first)}},hostVars:2,hostBindings:function(x,ae){2&x&&e.ekj("ant-list-item-no-flex",ae.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:g,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(x,ae){if(1&x&&(e.F$t(f),e.YNc(0,Me,2,1,"ng-template",null,0,e.W1O),e.YNc(2,Ge,3,1,"ng-template",null,1,e.W1O),e.YNc(4,Be,1,0,"ng-template",null,2,e.W1O),e.YNc(6,Ne,4,4,"ng-template",null,3,e.W1O),e.YNc(8,ve,6,4,"ng-container",4)),2&x){const Ie=e.MAs(7);e.xp6(8),e.Q6J("ngIf",ae.isVerticalAndExtra)("ngIfElse",Ie)}},directives:[Ve,Ee,n.O5,s.f,n.tP],encapsulation:2,changeDetection:0}),(0,z.gn)([(0,y.yF)()],h.prototype,"nzNoFlex",void 0),h})(),rt=(()=>{class h{}return h.\u0275fac=function(x){return new(x||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[[$.vT,n.ez,Z.j,M.Jb,o.Rt,s.T,Q.Xo]]}),h})()},4219:(ge,Y,i)=>{i.d(Y,{Cc:()=>C,YV:()=>We,hl:()=>D,ip:()=>Je,r9:()=>Me,uA:()=>Ye,wO:()=>Ne});var e=i(655),o=i(5e3),n=i(8929),s=i(591),z=i(6787),y=i(6053),a=i(4850),B=i(1709),l=i(2198),v=i(7604),I=i(7138),_=i(5778),T=i(7625),j=i(1059),O=i(7545),k=i(1721),Q=i(325),$=i(226),Z=i(1314),M=i(6950),b=i(925),ee=i(4832),V=i(9808),L=i(5017),m=i(969),w=i(8076);const U=["nz-submenu-title",""];function F(J,ve){if(1&J&&o._UZ(0,"i",4),2&J){const f=o.oxw();o.Q6J("nzType",f.nzIcon)}}function N(J,ve){if(1&J&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&J){const f=o.oxw();o.xp6(2),o.Oqu(f.nzTitle)}}function d(J,ve){1&J&&o._UZ(0,"i",8)}function P(J,ve){1&J&&o._UZ(0,"i",9)}function G(J,ve){if(1&J&&(o.TgZ(0,"span",5),o.YNc(1,d,1,0,"i",6),o.YNc(2,P,1,0,"i",7),o.qZA()),2&J){const f=o.oxw();o.Q6J("ngSwitch",f.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function S(J,ve){1&J&&o._UZ(0,"i",10)}const q=["*"],ie=["nz-submenu-inline-child",""];function fe(J,ve){}const _e=["nz-submenu-none-inline-child",""];function Te(J,ve){}const De=["nz-submenu",""];function se(J,ve){1&J&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function he(J,ve){if(1&J&&o._UZ(0,"div",6),2&J){const f=o.oxw(),g=o.MAs(7);o.Q6J("mode",f.mode)("nzOpen",f.nzOpen)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("menuClass",f.nzMenuClassName)("templateOutlet",g)}}function E(J,ve){if(1&J){const f=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(me){return o.CHM(f),o.oxw(2).setMouseEnterState(me)}),o.qZA()}if(2&J){const f=o.oxw(2),g=o.MAs(7);o.Q6J("theme",f.theme)("mode",f.mode)("nzOpen",f.nzOpen)("position",f.position)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("templateOutlet",g)("menuClass",f.nzMenuClassName)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)}}function oe(J,ve){if(1&J){const f=o.EpF();o.YNc(0,E,1,10,"ng-template",7),o.NdJ("positionChange",function(me){return o.CHM(f),o.oxw().onPositionChange(me)})}if(2&J){const f=o.oxw(),g=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",f.overlayPositions)("cdkConnectedOverlayOrigin",g)("cdkConnectedOverlayWidth",f.triggerWidth)("cdkConnectedOverlayOpen",f.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function W(J,ve){1&J&&o.Hsn(0,1)}const de=[[["","title",""]],"*"],R=["[title]","*"],ce=["titleElement"],ne=["nz-menu-group",""];function te(J,ve){if(1&J&&(o.ynx(0),o._uU(1),o.BQk()),2&J){const f=o.oxw();o.xp6(1),o.Oqu(f.nzTitle)}}function ue(J,ve){1&J&&o.Hsn(0,1,["*ngIf","!nzTitle"])}const re=["*",[["","title",""]]],ze=["*","[title]"],C=new o.OlP("NzIsInDropDownMenuToken"),X=new o.OlP("NzMenuServiceLocalToken");let D=(()=>{class J{constructor(){this.descendantMenuItemClick$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.theme$=new s.X("light"),this.mode$=new s.X("vertical"),this.inlineIndent$=new s.X(24),this.isChildSubMenuOpen$=new s.X(!1)}onDescendantMenuItemClick(f){this.descendantMenuItemClick$.next(f)}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setMode(f){this.mode$.next(f)}setTheme(f){this.theme$.next(f)}setInlineIndent(f){this.inlineIndent$.next(f)}}return J.\u0275fac=function(f){return new(f||J)},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),le=(()=>{class J{constructor(f,g,me){this.nzHostSubmenuService=f,this.nzMenuService=g,this.isMenuInsideDropDown=me,this.mode$=this.nzMenuService.mode$.pipe((0,a.U)(Ee=>"inline"===Ee?"inline":"vertical"===Ee||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new s.X(!1),this.isChildSubMenuOpen$=new s.X(!1),this.isMouseEnterTitleOrOverlay$=new n.xQ,this.childMenuItemClick$=new n.xQ,this.destroy$=new n.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const Ce=this.childMenuItemClick$.pipe((0,B.zg)(()=>this.mode$),(0,l.h)(Ee=>"inline"!==Ee||this.isMenuInsideDropDown),(0,v.h)(!1)),Pe=(0,z.T)(this.isMouseEnterTitleOrOverlay$,Ce);(0,y.aj)([this.isChildSubMenuOpen$,Pe]).pipe((0,a.U)(([Ee,Ue])=>Ee||Ue),(0,I.e)(150),(0,_.x)(),(0,T.R)(this.destroy$)).pipe((0,_.x)()).subscribe(Ee=>{this.setOpenStateWithoutDebounce(Ee),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Ee):this.nzMenuService.isChildSubMenuOpen$.next(Ee)})}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setOpenStateWithoutDebounce(f){this.isCurrentSubMenuOpen$.next(f)}setMouseEnterTitleOrOverlayState(f){this.isMouseEnterTitleOrOverlay$.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(f){return new(f||J)(o.LFG(J,12),o.LFG(D),o.LFG(C))},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac}),J})(),Me=(()=>{class J{constructor(f,g,me,Ce,Pe,Le,Ee,Ue){this.nzMenuService=f,this.cdr=g,this.nzSubmenuService=me,this.isMenuInsideDropDown=Ce,this.directionality=Pe,this.routerLink=Le,this.routerLinkWithHref=Ee,this.router=Ue,this.destroy$=new n.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new n.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Ue&&this.router.events.pipe((0,T.R)(this.destroy$),(0,l.h)(Ve=>Ve instanceof Q.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(f){this.nzDisabled?(f.preventDefault(),f.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(f){this.nzSelected=f,this.selected$.next(f)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const f=this.hasActiveLinks();this.nzSelected!==f&&(this.nzSelected=f,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const f=this.isLinkActive(this.router);return this.routerLink&&f(this.routerLink)||this.routerLinkWithHref&&f(this.routerLinkWithHref)||this.listOfRouterLink.some(f)||this.listOfRouterLinkWithHref.some(f)}isLinkActive(f){return g=>f.isActive(g.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var f;(0,y.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,T.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(f){f.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(le,8),o.Y36(C),o.Y36($.Is,8),o.Y36(Q.rH,8),o.Y36(Q.yS,8),o.Y36(Q.F0,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-item",""]],contentQueries:function(f,g,me){if(1&f&&(o.Suo(me,Q.rH,5),o.Suo(me,Q.yS,5)),2&f){let Ce;o.iGM(Ce=o.CRH())&&(g.listOfRouterLink=Ce),o.iGM(Ce=o.CRH())&&(g.listOfRouterLinkWithHref=Ce)}},hostVars:20,hostBindings:function(f,g){1&f&&o.NdJ("click",function(Ce){return g.clickMenuItem(Ce)}),2&f&&(o.Udp("padding-left","rtl"===g.dir?null:g.nzPaddingLeft||g.inlinePaddingLeft,"px")("padding-right","rtl"===g.dir?g.nzPaddingLeft||g.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",g.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",g.isMenuInsideDropDown&&g.nzSelected)("ant-dropdown-menu-item-danger",g.isMenuInsideDropDown&&g.nzDanger)("ant-dropdown-menu-item-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-item",!g.isMenuInsideDropDown)("ant-menu-item-selected",!g.isMenuInsideDropDown&&g.nzSelected)("ant-menu-item-danger",!g.isMenuInsideDropDown&&g.nzDanger)("ant-menu-item-disabled",!g.isMenuInsideDropDown&&g.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDisabled",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzSelected",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDanger",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzMatchRouterExact",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzMatchRouter",void 0),J})(),Se=(()=>{class J{constructor(f,g){this.cdr=f,this.directionality=g,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}ngOnInit(){var f;this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(o.sBO),o.Y36($.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(f,g){1&f&&o.NdJ("click",function(){return g.clickTitle()})("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&f&&(o.Udp("padding-left","rtl"===g.dir?null:g.paddingLeft,"px")("padding-right","rtl"===g.dir?g.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",g.isMenuInsideDropDown)("ant-menu-submenu-title",!g.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:U,ngContentSelectors:q,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(f,g){if(1&f&&(o.F$t(),o.YNc(0,F,1,1,"i",0),o.YNc(1,N,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,G,3,2,"span",2),o.YNc(4,S,1,0,"ng-template",null,3,o.W1O)),2&f){const me=o.MAs(5);o.Q6J("ngIf",g.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",g.nzTitle),o.xp6(2),o.Q6J("ngIf",g.isMenuInsideDropDown)("ngIfElse",me)}},directives:[V.O5,L.Ls,m.f,V.RF,V.n9,V.ED],encapsulation:2,changeDetection:0}),J})(),$e=(()=>{class J{constructor(f,g,me){this.elementRef=f,this.renderer=g,this.directionality=me,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(f){const{mode:g,nzOpen:me,menuClass:Ce}=f;(g||me)&&this.calcMotionState(),Ce&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.removeClass(this.elementRef.nativeElement,Pe)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Pe=>!!Pe).forEach(Pe=>{this.renderer.addClass(this.elementRef.nativeElement,Pe)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36($.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(f,g){2&f&&(o.d8E("@collapseMotion",g.expandState),o.ekj("ant-menu-rtl","rtl"===g.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:ie,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(f,g){1&f&&o.YNc(0,fe,0,0,"ng-template",0),2&f&&o.Q6J("ngTemplateOutlet",g.templateOutlet)},directives:[V.tP],encapsulation:2,data:{animation:[w.J_]},changeDetection:0}),J})(),Ge=(()=>{class J{constructor(f){this.directionality=f,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new n.xQ}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnChanges(f){const{mode:g,nzOpen:me}=f;(g||me)&&this.calcMotionState()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36($.Is,8))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(f,g){1&f&&o.NdJ("mouseenter",function(){return g.setMouseState(!0)})("mouseleave",function(){return g.setMouseState(!1)}),2&f&&(o.d8E("@slideMotion",g.expandState)("@zoomBigMotion",g.expandState),o.ekj("ant-menu-light","light"===g.theme)("ant-menu-dark","dark"===g.theme)("ant-menu-submenu-placement-bottom","horizontal"===g.mode)("ant-menu-submenu-placement-right","vertical"===g.mode&&"right"===g.position)("ant-menu-submenu-placement-left","vertical"===g.mode&&"left"===g.position)("ant-menu-submenu-rtl","rtl"===g.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:_e,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(f,g){1&f&&(o.TgZ(0,"div",0),o.YNc(1,Te,0,0,"ng-template",1),o.qZA()),2&f&&(o.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-menu",!g.isMenuInsideDropDown)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown)("ant-menu-vertical",!g.isMenuInsideDropDown)("ant-dropdown-menu-sub",g.isMenuInsideDropDown)("ant-menu-sub",!g.isMenuInsideDropDown)("ant-menu-rtl","rtl"===g.dir),o.Q6J("ngClass",g.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",g.templateOutlet))},directives:[V.mk,V.tP],encapsulation:2,data:{animation:[w.$C,w.mF]},changeDetection:0}),J})();const Be=[M.yW.rightTop,M.yW.right,M.yW.rightBottom,M.yW.leftTop,M.yW.left,M.yW.leftBottom],Re=[M.yW.bottomLeft];let xe=(()=>{class J{constructor(f,g,me,Ce,Pe,Le,Ee){this.nzMenuService=f,this.cdr=g,this.nzSubmenuService=me,this.platform=Ce,this.isMenuInsideDropDown=Pe,this.directionality=Le,this.noAnimation=Ee,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new n.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Be,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(f){this.nzSubmenuService.setOpenStateWithoutDebounce(f)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(f){this.isActive=f,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(f)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(f){const g=(0,M.d_)(f);"rightTop"===g||"rightBottom"===g||"right"===g?this.position="right":("leftTop"===g||"leftBottom"===g||"left"===g)&&(this.position="left")}ngOnInit(){var f;this.nzMenuService.theme$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.theme=g,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.mode=g,"horizontal"===g?this.overlayPositions=Re:"vertical"===g&&(this.overlayPositions=Be),this.cdr.markForCheck()}),(0,y.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,me])=>{this.inlinePaddingLeft="inline"===g?this.level*me:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.isActive=g,g!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=g,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const f=this.listOfNzMenuItemDirective,g=f.changes,me=(0,z.T)(g,...f.map(Ce=>Ce.selected$));g.pipe((0,j.O)(f),(0,O.w)(()=>me),(0,j.O)(!0),(0,a.U)(()=>f.some(Ce=>Ce.nzSelected)),(0,T.R)(this.destroy$)).subscribe(Ce=>{this.isSelected=Ce,this.cdr.markForCheck()})}ngOnChanges(f){const{nzOpen:g}=f;g&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(D),o.Y36(o.sBO),o.Y36(le),o.Y36(b.t4),o.Y36(C),o.Y36($.Is,8),o.Y36(ee.P,9))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-submenu",""]],contentQueries:function(f,g,me){if(1&f&&(o.Suo(me,J,5),o.Suo(me,Me,5)),2&f){let Ce;o.iGM(Ce=o.CRH())&&(g.listOfNzSubMenuComponent=Ce),o.iGM(Ce=o.CRH())&&(g.listOfNzMenuItemDirective=Ce)}},viewQuery:function(f,g){if(1&f&&o.Gf(Z.xu,7,o.SBq),2&f){let me;o.iGM(me=o.CRH())&&(g.cdkOverlayOrigin=me.first)}},hostVars:34,hostBindings:function(f,g){2&f&&o.ekj("ant-dropdown-menu-submenu",g.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",g.isMenuInsideDropDown&&g.nzDisabled)("ant-dropdown-menu-submenu-open",g.isMenuInsideDropDown&&g.nzOpen)("ant-dropdown-menu-submenu-selected",g.isMenuInsideDropDown&&g.isSelected)("ant-dropdown-menu-submenu-vertical",g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-dropdown-menu-submenu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-dropdown-menu-submenu-inline",g.isMenuInsideDropDown&&"inline"===g.mode)("ant-dropdown-menu-submenu-active",g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu",!g.isMenuInsideDropDown)("ant-menu-submenu-disabled",!g.isMenuInsideDropDown&&g.nzDisabled)("ant-menu-submenu-open",!g.isMenuInsideDropDown&&g.nzOpen)("ant-menu-submenu-selected",!g.isMenuInsideDropDown&&g.isSelected)("ant-menu-submenu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.mode)("ant-menu-submenu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.mode)("ant-menu-submenu-inline",!g.isMenuInsideDropDown&&"inline"===g.mode)("ant-menu-submenu-active",!g.isMenuInsideDropDown&&g.isActive)("ant-menu-submenu-rtl","rtl"===g.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([le]),o.TTD],attrs:De,ngContentSelectors:R,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(f,g){if(1&f&&(o.F$t(de),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(Ce){return g.setMouseEnterState(Ce)})("toggleSubMenu",function(){return g.toggleSubMenu()}),o.YNc(2,se,1,0,"ng-content",2),o.qZA(),o.YNc(3,he,1,6,"div",3),o.YNc(4,oe,1,5,"ng-template",null,4,o.W1O),o.YNc(6,W,1,0,"ng-template",null,5,o.W1O)),2&f){const me=o.MAs(5);o.Q6J("nzIcon",g.nzIcon)("nzTitle",g.nzTitle)("mode",g.mode)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("paddingLeft",g.nzPaddingLeft||g.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!g.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===g.mode)("ngIfElse",me)}},directives:[Se,$e,Ge,Z.xu,V.O5,ee.P,Z.pI],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzOpen",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzDisabled",void 0),J})();function be(J,ve){return J||ve}function Qe(J){return J||!1}let Ne=(()=>{class J{constructor(f,g,me,Ce){this.nzMenuService=f,this.isMenuInsideDropDown=g,this.cdr=me,this.directionality=Ce,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new s.X(this.nzInlineCollapsed),this.mode$=new s.X(this.nzMode),this.destroy$=new n.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(f){this.nzInlineCollapsed=f,this.inlineCollapsed$.next(f)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(f=>f.nzOpen),this.listOfNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var f;(0,y.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,T.R)(this.destroy$)).subscribe(([g,me])=>{this.actualMode=g?"vertical":me,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.nzClick.emit(g),this.nzSelectable&&!g.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(me=>me.setSelectedState(me===g))}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,T.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(f){const{nzInlineCollapsed:g,nzInlineIndent:me,nzTheme:Ce,nzMode:Pe}=f;g&&this.inlineCollapsed$.next(this.nzInlineCollapsed),me&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),Ce&&this.nzMenuService.setTheme(this.nzTheme),Pe&&(this.mode$.next(this.nzMode),!f.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Le=>Le.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(D),o.Y36(C),o.Y36(o.sBO),o.Y36($.Is,8))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu",""]],contentQueries:function(f,g,me){if(1&f&&(o.Suo(me,Me,5),o.Suo(me,xe,5)),2&f){let Ce;o.iGM(Ce=o.CRH())&&(g.listOfNzMenuItemDirective=Ce),o.iGM(Ce=o.CRH())&&(g.listOfNzSubMenuComponent=Ce)}},hostVars:34,hostBindings:function(f,g){2&f&&o.ekj("ant-dropdown-menu",g.isMenuInsideDropDown)("ant-dropdown-menu-root",g.isMenuInsideDropDown)("ant-dropdown-menu-light",g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-dropdown-menu-dark",g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-dropdown-menu-vertical",g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-dropdown-menu-horizontal",g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-dropdown-menu-inline",g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-dropdown-menu-inline-collapsed",g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu",!g.isMenuInsideDropDown)("ant-menu-root",!g.isMenuInsideDropDown)("ant-menu-light",!g.isMenuInsideDropDown&&"light"===g.nzTheme)("ant-menu-dark",!g.isMenuInsideDropDown&&"dark"===g.nzTheme)("ant-menu-vertical",!g.isMenuInsideDropDown&&"vertical"===g.actualMode)("ant-menu-horizontal",!g.isMenuInsideDropDown&&"horizontal"===g.actualMode)("ant-menu-inline",!g.isMenuInsideDropDown&&"inline"===g.actualMode)("ant-menu-inline-collapsed",!g.isMenuInsideDropDown&&g.nzInlineCollapsed)("ant-menu-rtl","rtl"===g.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:X,useClass:D},{provide:D,useFactory:be,deps:[[new o.tp0,new o.FiY,D],X]},{provide:C,useFactory:Qe,deps:[[new o.tp0,new o.FiY,C]]}]),o.TTD]}),(0,e.gn)([(0,k.yF)()],J.prototype,"nzInlineCollapsed",void 0),(0,e.gn)([(0,k.yF)()],J.prototype,"nzSelectable",void 0),J})();function Ze(J){return J||!1}let Ye=(()=>{class J{constructor(f,g,me){this.elementRef=f,this.renderer=g,this.isMenuInsideDropDown=me,this.renderer.addClass(f.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const f=this.titleElement.nativeElement.nextElementSibling;f&&this.renderer.addClass(f,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(C))},J.\u0275cmp=o.Xpm({type:J,selectors:[["","nz-menu-group",""]],viewQuery:function(f,g){if(1&f&&o.Gf(ce,5),2&f){let me;o.iGM(me=o.CRH())&&(g.titleElement=me.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[o._Bn([{provide:C,useFactory:Ze,deps:[[new o.tp0,new o.FiY,C]]}])],attrs:ne,ngContentSelectors:ze,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(f,g){1&f&&(o.F$t(re),o.TgZ(0,"div",null,0),o.YNc(2,te,2,1,"ng-container",1),o.YNc(3,ue,1,0,"ng-content",2),o.qZA(),o.Hsn(4)),2&f&&(o.ekj("ant-menu-item-group-title",!g.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",g.isMenuInsideDropDown),o.xp6(2),o.Q6J("nzStringTemplateOutlet",g.nzTitle),o.xp6(1),o.Q6J("ngIf",!g.nzTitle))},directives:[m.f,V.O5],encapsulation:2,changeDetection:0}),J})(),We=(()=>{class J{constructor(f,g){this.elementRef=f,this.renderer=g,this.renderer.addClass(f.nativeElement,"ant-dropdown-menu-item-divider")}}return J.\u0275fac=function(f){return new(f||J)(o.Y36(o.SBq),o.Y36(o.Qsj))},J.\u0275dir=o.lG2({type:J,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),J})(),Je=(()=>{class J{}return J.\u0275fac=function(f){return new(f||J)},J.\u0275mod=o.oAB({type:J}),J.\u0275inj=o.cJS({imports:[[$.vT,V.ez,b.ud,Z.U8,L.PV,ee.g,m.T]]}),J})()},3610:(ge,Y,i)=>{i.d(Y,{$6:()=>M,lU:()=>$});var e=i(655),o=i(5e3),n=i(8076),s=i(9439),z=i(1721),y=i(404),a=i(4832),B=i(226),l=i(1314),v=i(6950),I=i(9808),_=i(969);function T(b,ee){if(1&b&&(o.ynx(0),o._uU(1),o.BQk()),2&b){const V=o.oxw(3);o.xp6(1),o.Oqu(V.nzTitle)}}function j(b,ee){if(1&b&&(o.TgZ(0,"div",10),o.YNc(1,T,2,1,"ng-container",9),o.qZA()),2&b){const V=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",V.nzTitle)}}function O(b,ee){if(1&b&&(o.ynx(0),o._uU(1),o.BQk()),2&b){const V=o.oxw(2);o.xp6(1),o.Oqu(V.nzContent)}}function k(b,ee){if(1&b&&(o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._UZ(3,"span",5),o.qZA(),o.TgZ(4,"div",6)(5,"div"),o.YNc(6,j,2,1,"div",7),o.TgZ(7,"div",8),o.YNc(8,O,2,1,"ng-container",9),o.qZA()()()()()),2&b){const V=o.oxw();o.ekj("ant-popover-rtl","rtl"===V.dir),o.Q6J("ngClass",V._classMap)("ngStyle",V.nzOverlayStyle)("@.disabled",null==V.noAnimation?null:V.noAnimation.nzNoAnimation)("nzNoAnimation",null==V.noAnimation?null:V.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),o.xp6(6),o.Q6J("ngIf",V.nzTitle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",V.nzContent)}}let $=(()=>{class b extends y.Mg{constructor(V,L,m,w,U,F){super(V,L,m,w,U,F),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new o.vpe,this.componentRef=this.hostView.createComponent(Z)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return b.\u0275fac=function(V){return new(V||b)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o._Vd),o.Y36(o.Qsj),o.Y36(a.P,9),o.Y36(s.jY))},b.\u0275dir=o.lG2({type:b,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(V,L){2&V&&o.ekj("ant-popover-open",L.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[o.qOj]}),(0,e.gn)([(0,z.yF)()],b.prototype,"arrowPointAtCenter",void 0),(0,e.gn)([(0,s.oS)()],b.prototype,"nzPopoverBackdrop",void 0),b})(),Z=(()=>{class b extends y.XK{constructor(V,L,m){super(V,L,m),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,y.pu)(this.nzTitle)&&(0,y.pu)(this.nzContent)}}return b.\u0275fac=function(V){return new(V||b)(o.Y36(o.sBO),o.Y36(B.Is,8),o.Y36(a.P,9))},b.\u0275cmp=o.Xpm({type:b,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[o.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(V,L){1&V&&(o.YNc(0,k,9,9,"ng-template",0,1,o.W1O),o.NdJ("overlayOutsideClick",function(w){return L.onClickOutside(w)})("detach",function(){return L.hide()})("positionChange",function(w){return L.onPositionChange(w)})),2&V&&o.Q6J("cdkConnectedOverlayHasBackdrop",L.hasBackdrop)("cdkConnectedOverlayOrigin",L.origin)("cdkConnectedOverlayPositions",L._positions)("cdkConnectedOverlayOpen",L._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",L.nzArrowPointAtCenter)},directives:[l.pI,v.hQ,I.mk,I.PC,a.P,I.O5,_.f],encapsulation:2,data:{animation:[n.$C]},changeDetection:0}),b})(),M=(()=>{class b{}return b.\u0275fac=function(V){return new(V||b)},b.\u0275mod=o.oAB({type:b}),b.\u0275inj=o.cJS({imports:[[B.vT,I.ez,l.U8,_.T,v.e4,a.g,y.cg]]}),b})()},8144:(ge,Y,i)=>{i.d(Y,{$1:()=>j,NU:()=>Q,zf:()=>$});var e=i(226),o=i(9808),n=i(5e3),s=i(655),z=i(8929),y=i(7625),a=i(9439),B=i(1721);function l(Z,M){}const v=function(Z){return{$implicit:Z}};function I(Z,M){if(1&Z&&(n.TgZ(0,"span",4),n.YNc(1,l,0,0,"ng-template",5),n.qZA()),2&Z){const b=n.oxw(),ee=b.last,V=b.index,L=n.oxw();n.Udp("margin-bottom","vertical"===L.nzDirection?ee?null:L.spaceSize:null,"px")("margin-right","horizontal"===L.nzDirection?ee?null:L.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",L.nzSplit)("ngTemplateOutletContext",n.VKq(6,v,V))}}function _(Z,M){if(1&Z&&(n.TgZ(0,"div",1),n.GkF(1,2),n.qZA(),n.YNc(2,I,2,8,"span",3)),2&Z){const b=M.$implicit,ee=M.last,V=n.oxw();n.Udp("margin-bottom","vertical"===V.nzDirection?ee?null:V.spaceSize:null,"px")("margin-right","horizontal"===V.nzDirection?ee?null:V.spaceSize:null,"px"),n.xp6(1),n.Q6J("ngTemplateOutlet",b),n.xp6(1),n.Q6J("ngIf",V.nzSplit&&!ee)}}const T=["*"];let j=(()=>{class Z{constructor(){}}return Z.\u0275fac=function(b){return new(b||Z)},Z.\u0275dir=n.lG2({type:Z,selectors:[["","nzSpaceItem",""]]}),Z})();const k={small:8,middle:16,large:24};let Q=(()=>{class Z{constructor(b,ee){this.nzConfigService=b,this.cdr=ee,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=k.small,this.destroy$=new z.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?k[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Z.\u0275fac=function(b){return new(b||Z)(n.Y36(a.jY),n.Y36(n.sBO))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(b,ee,V){if(1&b&&n.Suo(V,j,4,n.Rgc),2&b){let L;n.iGM(L=n.CRH())&&(ee.items=L)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(b,ee){2&b&&(n.Udp("flex-wrap",ee.nzWrap?"wrap":null),n.ekj("ant-space-horizontal","horizontal"===ee.nzDirection)("ant-space-vertical","vertical"===ee.nzDirection)("ant-space-align-start","start"===ee.mergedAlign)("ant-space-align-end","end"===ee.mergedAlign)("ant-space-align-center","center"===ee.mergedAlign)("ant-space-align-baseline","baseline"===ee.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[n.TTD],ngContentSelectors:T,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(b,ee){1&b&&(n.F$t(),n.Hsn(0),n.YNc(1,_,3,6,"ng-template",0)),2&b&&(n.xp6(1),n.Q6J("ngForOf",ee.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,B.yF)()],Z.prototype,"nzWrap",void 0),(0,s.gn)([(0,a.oS)()],Z.prototype,"nzSize",void 0),Z})(),$=(()=>{class Z{}return Z.\u0275fac=function(b){return new(b||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[[e.vT,o.ez]]}),Z})()},7525:(ge,Y,i)=>{i.d(Y,{W:()=>U,j:()=>F});var e=i(655),o=i(5e3),n=i(8929),s=i(591),z=i(839),y=i(8723),a=i(1177);class l{constructor(d){this.durationSelector=d}call(d,P){return P.subscribe(new v(d,this.durationSelector))}}class v extends a.Ds{constructor(d,P){super(d),this.durationSelector=P,this.hasValue=!1}_next(d){try{const P=this.durationSelector.call(this,d);P&&this._tryNext(d,P)}catch(P){this.destination.error(P)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(d,P){let G=this.durationSubscription;this.value=d,this.hasValue=!0,G&&(G.unsubscribe(),this.remove(G)),G=(0,a.ft)(P,new a.IY(this)),G&&!G.closed&&this.add(this.durationSubscription=G)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const d=this.value,P=this.durationSubscription;P&&(this.durationSubscription=void 0,P.unsubscribe(),this.remove(P)),this.value=void 0,this.hasValue=!1,super._next(d)}}}var I=i(1059),_=i(5778),T=i(7545),j=i(7625),O=i(9439),k=i(1721),Q=i(226),$=i(9808),Z=i(7144);function M(N,d){1&N&&(o.TgZ(0,"span",3),o._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),o.qZA())}function b(N,d){}function ee(N,d){if(1&N&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&N){const P=o.oxw(2);o.xp6(1),o.Oqu(P.nzTip)}}function V(N,d){if(1&N&&(o.TgZ(0,"div")(1,"div",5),o.YNc(2,b,0,0,"ng-template",6),o.YNc(3,ee,2,1,"div",7),o.qZA()()),2&N){const P=o.oxw(),G=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===P.dir)("ant-spin-spinning",P.isLoading)("ant-spin-lg","large"===P.nzSize)("ant-spin-sm","small"===P.nzSize)("ant-spin-show-text",P.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",P.nzIndicator||G),o.xp6(1),o.Q6J("ngIf",P.nzTip)}}function L(N,d){if(1&N&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&N){const P=o.oxw();o.ekj("ant-spin-blur",P.isLoading)}}const m=["*"],w="spin";let U=(()=>{class N{constructor(P,G,S){this.nzConfigService=P,this.cdr=G,this.directionality=S,this._nzModuleName=w,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new n.xQ,this.spinning$=new s.X(this.nzSpinning),this.delay$=new z.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var P;this.delay$.pipe((0,I.O)(this.nzDelay),(0,_.x)(),(0,T.w)(S=>0===S?this.spinning$:this.spinning$.pipe(function B(N){return d=>d.lift(new l(N))}(q=>(0,y.H)(q?S:0)))),(0,j.R)(this.destroy$)).subscribe(S=>{this.isLoading=S,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(w).pipe((0,j.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(P=this.directionality.change)||void 0===P||P.pipe((0,j.R)(this.destroy$)).subscribe(S=>{this.dir=S,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(P){const{nzSpinning:G,nzDelay:S}=P;G&&this.spinning$.next(this.nzSpinning),S&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(P){return new(P||N)(o.Y36(O.jY),o.Y36(o.sBO),o.Y36(Q.Is,8))},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(P,G){2&P&&o.ekj("ant-spin-nested-loading",!G.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:m,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(P,G){1&P&&(o.F$t(),o.YNc(0,M,5,0,"ng-template",null,0,o.W1O),o.YNc(2,V,4,12,"div",1),o.YNc(3,L,2,2,"div",2)),2&P&&(o.xp6(2),o.Q6J("ngIf",G.isLoading),o.xp6(1),o.Q6J("ngIf",!G.nzSimple))},directives:[$.O5,$.tP],encapsulation:2}),(0,e.gn)([(0,O.oS)()],N.prototype,"nzIndicator",void 0),(0,e.gn)([(0,k.Rn)()],N.prototype,"nzDelay",void 0),(0,e.gn)([(0,k.yF)()],N.prototype,"nzSimple",void 0),(0,e.gn)([(0,k.yF)()],N.prototype,"nzSpinning",void 0),N})(),F=(()=>{class N{}return N.\u0275fac=function(P){return new(P||N)},N.\u0275mod=o.oAB({type:N}),N.\u0275inj=o.cJS({imports:[[Q.vT,$.ez,Z.Q8]]}),N})()},8481:(ge,Y,i)=>{i.d(Y,{X:()=>j,j:()=>T});var e=i(655),o=i(5e3),n=i(8929),s=i(7625),z=i(8693),y=i(1721),a=i(226),B=i(9808),l=i(5017),v=i(3075);function I(O,k){if(1&O){const Q=o.EpF();o.TgZ(0,"i",1),o.NdJ("click",function(Z){return o.CHM(Q),o.oxw().closeTag(Z)}),o.qZA()}}const _=["*"];let T=(()=>{class O{constructor(Q,$,Z,M){this.cdr=Q,this.renderer=$,this.elementRef=Z,this.directionality=M,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new o.vpe,this.nzCheckedChange=new o.vpe,this.dir="ltr",this.destroy$=new n.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(Q){this.nzOnClose.emit(Q),Q.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const Q=this.elementRef.nativeElement,$=new RegExp(`(ant-tag-(?:${[...z.uf,...z.Bh].join("|")}))`,"g"),Z=Q.classList.toString(),M=[];let b=$.exec(Z);for(;null!==b;)M.push(b[1]),b=$.exec(Z);Q.classList.remove(...M)}setPresetColor(){const Q=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,z.o2)(this.nzColor)||(0,z.M8)(this.nzColor)),this.isPresetColor&&Q.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,s.R)(this.destroy$)).subscribe($=>{this.dir=$,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(Q){const{nzColor:$}=Q;$&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(Q){return new(Q||O)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(a.Is,8))},O.\u0275cmp=o.Xpm({type:O,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(Q,$){1&Q&&o.NdJ("click",function(){return $.updateCheckedStatus()}),2&Q&&(o.Udp("background-color",$.isPresetColor?"":$.nzColor),o.ekj("ant-tag-has-color",$.nzColor&&!$.isPresetColor)("ant-tag-checkable","checkable"===$.nzMode)("ant-tag-checkable-checked",$.nzChecked)("ant-tag-rtl","rtl"===$.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[o.TTD],ngContentSelectors:_,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(Q,$){1&Q&&(o.F$t(),o.Hsn(0),o.YNc(1,I,1,0,"i",0)),2&Q&&(o.xp6(1),o.Q6J("ngIf","closeable"===$.nzMode))},directives:[B.O5,l.Ls],encapsulation:2,changeDetection:0}),(0,e.gn)([(0,y.yF)()],O.prototype,"nzChecked",void 0),O})(),j=(()=>{class O{}return O.\u0275fac=function(Q){return new(Q||O)},O.\u0275mod=o.oAB({type:O}),O.\u0275inj=o.cJS({imports:[[a.vT,B.ez,v.u5,l.PV]]}),O})()}}]);