"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[6753],{596:(z,l,e)=>{e.d(l,{p:()=>p});var r=e(9212),d=e(9408),t=e(355),h=e(8184);let p=(()=>{class i{constructor(){this.enablePopover=!0,this.truncateLongName=!1}ngOnInit(){if(void 0===this.variant)throw new Error("cvc-feature-variant-tag requires LinkableVariant input, none supplied.");if(this.variant.feature&&(this.feature=this.variant.feature),void 0===this.feature)throw new Error("cvc-feature-variant-tag requires a Feature, either as an input or on the Variant")}}return i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=r.Xpm({type:i,selectors:[["cvc-feature-variant-tag"]],inputs:{variant:"variant",feature:"feature",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},decls:3,vars:6,consts:[[3,"feature","enablePopover","truncateLongName"],[3,"variant","enablePopover","truncateLongName"]],template:function(c,s){1&c&&(r.TgZ(0,"cvc-tag-group"),r._UZ(1,"cvc-feature-tag",0)(2,"cvc-variant-tag",1),r.qZA()),2&c&&(r.xp6(),r.Q6J("feature",s.feature)("enablePopover",s.enablePopover)("truncateLongName",s.truncateLongName),r.xp6(),r.Q6J("variant",s.variant)("enablePopover",s.enablePopover)("truncateLongName",s.truncateLongName))},dependencies:[d.I,t.K,h.O],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),i})()},5978:(z,l,e)=>{e.r(l),e.d(l,{VariantsModule:()=>F});var r=e(6814),d=e(4190),t=e(9212);let h=(()=>{class n{constructor(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-variants"]],decls:1,vars:0,template:function(a,I){1&a&&t._UZ(0,"router-outlet")},dependencies:[d.lC],encapsulation:2}),n})();var p=e(2419),i=e(6254),g=e(95),c=e(551),s=e(6506),v=e(2392),f=e(2840),m=e(2574),P=e(9333),u=e(7417),C=e(4057),M=e(2524);let V=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,d.Bz,i.KJ,g.Jb,c.PV,v.ZJ,f.sL,m.zf,u.$6,M.s,p.D,s.H,P.h,p.D,C.e]}),n})();var x=e(951),y=e(8091),O=e(855),T=e(1958),b=e(3145),Z=e(806),A=e(2299),L=e(2616);function U(n,o){1&n&&(t.TgZ(0,"div",20),t._UZ(1,"cvc-variant-submit-form"),t.qZA())}function E(n,o){if(1&n&&(t.TgZ(0,"button",17),t._UZ(1,"i",18),t._uU(2," Submit New Variant "),t.YNc(3,U,2,0,"ng-template",null,19,t.W1O),t.qZA()),2&n){const a=t.MAs(4);t.Q6J("nzPopoverContent",a)}}function N(n,o){if(1&n&&(t.ynx(0),t.YNc(1,E,5,1,"button",16),t.BQk()),2&n){const a=o.ngrxLet;t.xp6(),t.Q6J("ngIf",a.isEditor)}}function S(n,o){if(1&n&&t.YNc(0,N,2,1,"ng-container",15),2&n){const a=t.oxw();t.Q6J("ngrxLet",a.viewer$)}}function H(n,o){1&n&&(t.TgZ(0,"a",21),t._UZ(1,"i",22),t._uU(2," View Variant Model Docs "),t.qZA())}function B(n,o){1&n&&(t.TgZ(0,"a",23),t._UZ(1,"i",22),t._uU(2," View Variant Curation Docs "),t.qZA())}const D=[{path:"",component:h,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class n{constructor(a){this.viewerService=a,this.viewer$=this.viewerService.viewer$}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(x.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["variants-home"]],decls:22,vars:6,consts:[[3,"actionsTpl"],["variantActions",""],[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],["nzFlex","0 1 600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/variants.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/variants.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],[3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Variants"],[4,"ngrxLet"],["routerLink","/variants/add/submit","nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Add New Variant","nzPopoverTrigger","click","nzPopoverPlacement","bottomRight",3,"nzPopoverContent",4,"ngIf"],["routerLink","/variants/add/submit","nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Add New Variant","nzPopoverTrigger","click","nzPopoverPlacement","bottomRight",3,"nzPopoverContent"],["nz-icon","","nzType","plus-circle"],["addVariantForm",""],[1,"addVariant"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/variants.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/variants.html","target","_blank","nzSize","small","nzBlock",""]],template:function(a,I){if(1&a&&(t._UZ(0,"cvc-section-navigation",0),t.YNc(1,S,1,1,"ng-template",null,1,t.W1O),t.TgZ(3,"nz-page-header",2)(4,"nz-page-header-content")(5,"nz-row",3)(6,"nz-col",4),t._UZ(7,"i",5),t.ALo(8,"entityColor"),t.qZA(),t.TgZ(9,"nz-col",6)(10,"h2"),t._uU(11,"Variants"),t.qZA(),t.TgZ(12,"p",7),t._uU(13,' CIViC variants are usually genomic alterations, including single nucleotide variants, insertion/deletion events, copy number alterations, structural variants, and other events that differ from the "normal" genome. '),t.qZA()(),t.TgZ(14,"nz-col",8)(15,"nz-space",9),t.YNc(16,H,3,0,"a",10)(17,B,3,0,"a",11),t.qZA()()(),t.TgZ(18,"nz-row")(19,"nz-col",12)(20,"div",13),t._UZ(21,"cvc-variants-table",14),t.qZA()()()()()),2&a){const R=t.MAs(2);t.Q6J("actionsTpl",R),t.xp6(7),t.Q6J("nzTwotoneColor",t.lcZ(8,4,"Variant")),t.xp6(5),t.Q6J("nzEllipsisRows",2),t.xp6(7),t.Q6J("nzSpan",24)}},dependencies:[r.O5,d.rH,y.eJ,i.$O,i.u5,g.t3,g.SK,c.Ls,v.ZU,f.ix,O.w,T.dQ,m.NU,m.$1,u.lU,b.I,Z.S,A.G,L.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}:[_nghost-%COMP%]{position:relative}.addVariant[_ngcontent-%COMP%]{width:500px}"]}),n})(),data:{breadcrumb:"Home"}},{path:":variantId",data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",loadChildren:()=>Promise.all([e.e(4872),e.e(4914),e.e(2602),e.e(9949),e.e(7856),e.e(3575),e.e(4280),e.e(4840),e.e(8108),e.e(3407),e.e(4230)]).then(e.bind(e,636)).then(n=>n.VariantsDetailModule)},{path:"revise",loadChildren:()=>Promise.all([e.e(7953),e.e(8592),e.e(6917)]).then(e.bind(e,9846)).then(n=>n.VariantsReviseModule),data:{breadcrumb:"Revise"}}]}]}];let J=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(D),V,d.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,J]}),n})()}}]);