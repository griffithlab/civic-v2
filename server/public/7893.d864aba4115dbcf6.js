"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[7893],{3887:(L,S,o)=>{o.r(S),o.d(S,{GenesReviseModule:()=>Me});var d=o(9808),m=o(325),x=o(5630),f=o(1945),C=o(647),z=o(373),N=o(1059),_=o(4850),e=o(5e3),h=o(712),P=o(9350),O=o(8992),u=o(1894),T=o(8616),v=o(6949);function I(t,l){1&t&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function A(t,l){1&t&&(e.TgZ(0,"nz-row",8),e.TgZ(1,"div",9),e._UZ(2,"cvc-login-prompt"),e.qZA(),e.qZA())}function E(t,l){if(1&t&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.TgZ(2,"nz-page-header",2),e.TgZ(3,"nz-page-header-title",3),e._uU(4," REVISE "),e._UZ(5,"i",4),e._uU(6),e.qZA(),e.TgZ(7,"nz-page-header-subtitle"),e._uU(8),e.qZA(),e.TgZ(9,"nz-page-header-content"),e.TgZ(10,"div",5),e.YNc(11,I,2,0,"div",6),e.ALo(12,"ngrxPush"),e.YNc(13,A,3,0,"ng-template",null,7,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&t){const n=l.ngIf,r=e.MAs(14),c=e.oxw();e.xp6(1),e.Q6J("displayName",n.name),e.xp6(5),e.hij(" ",n.name," "),e.xp6(2),e.hij(" ",n.officialName," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(12,5,c.isSignedIn$))("ngIfElse",r)}}let G=(()=>{class t{constructor(n,r,c){this.gql=n,this.route=r,this.viewerService=c,this.routeSub=this.route.params.subscribe(g=>{let M=this.gql.watch({geneId:+g.geneId}).valueChanges;this.loading$=M.pipe((0,z.j)("loading"),(0,N.O)(!0)),this.gene$=M.pipe((0,z.j)("data","gene")),this.commentsTotal$=this.gene$.pipe((0,z.j)("comments","totalCount")),this.flagsTotal$=this.gene$.pipe((0,z.j)("flags","totalCount")),this.revisionsTotal$=this.gene$.pipe((0,z.j)("revisions","totalCount"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,_.U)(n=>n.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.TNk),e.Y36(m.gz),e.Y36(P.a))},t.\u0275cmp=e.Xpm({type:t,selectors:[["genes-revise"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:gene"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(n,r){1&n&&(e.YNc(0,E,15,7,"ng-container",0),e.ALo(1,"async")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,r.gene$))},directives:[d.O5,O.I,f.$O,f.u9,C.Ls,f.yG,f.u5,m.lC,u.SK,u.t3,T.u],pipes:[d.Ov,v.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var R=o(8144),k=o(6559),a=o(4182),s=o(4546),i=o(2359),p=o(8776),y=o(1825),B=o(7008),Z=o(4375),J=o(6042),Q=o(8390),U=o(3773),w=o(5109),j=o(4623),$=o(7462),Y=o(4889),D=o(7525),V=o(5472),W=o(7338),F=o(7484),K=o(5482),H=o(6462),X=o(9990),q=o(3022),ee=o(9911),te=o(6501),ne=o(7695);let oe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,m.Bz,v.WG,a.UX,p.X0,w.s,J.sL,F.vh,K.cD,s.U5,i.L,u.Jb,C.PV,H.m,D.j,q.e,y.A,V.r,B.B,Z.R,ee.G,j.K,Q.N,U.g,te.r,X.M,$.o,Y.E,W.z,w.s,ne.C]]}),t})(),ie=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,v.WG,F.vh,u.Jb,R.zf,k.H0,f.KJ,oe,x.D]]}),t})();var ae=o(8929),b=o(7625),se=o(6738),re=o(6123),le=o(9169),ce=o(822);function pe(t,l){1&t&&e.GkF(0)}function ge(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"formly-form",6),e.NdJ("modelChange",function(c){return e.CHM(n),e.oxw(2).formModel=c}),e.qZA()}if(2&t){const n=e.oxw(2);e.Q6J("form",n.formGroup)("fields",n.formFields)("model",n.formModel)("options",n.formOptions)}}function de(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(n);const c=e.oxw();return c.submitRevision(c.formModel)}),e.YNc(1,pe,1,0,"ng-container",4),e.YNc(2,ge,1,4,"formly-form",5),e.qZA()}if(2&t){const n=e.oxw(),r=e.MAs(3);e.Q6J("formGroup",n.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",r),e.xp6(1),e.Q6J("ngIf",!n.success)}}function me(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"nz-form-item"),e._UZ(2,"cvc-form-errors-alert",8),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("errors",n.errorMessages)}}function he(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"View it on the "),e.TgZ(2,"a",12),e._uU(3,"Revisions Page"),e.qZA(),e._uU(4,"."),e.qZA())}function fe(t,l){if(1&t&&(e.ynx(0),e._UZ(1,"nz-alert",9),e.YNc(2,he,5,0,"ng-template",10,11,e.W1O),e.BQk()),2&t){const n=e.MAs(3);e.xp6(1),e.Q6J("nzDescription",n)}}function ue(t,l){if(1&t&&(e.YNc(0,me,3,1,"ng-container",7),e.YNc(1,fe,4,1,"ng-container",7)),2&t){const n=e.oxw();e.Q6J("ngIf",n.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",n.success)}}let ze=(()=>{class t{constructor(n,r,c,g,M){this.suggestRevisionGQL=n,this.networkErrorService=r,this.revisableFieldsGQL=c,this.geneDetailGQL=g,this.revisionsGQL=M,this.destroy$=new ae.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.formGroup=new a.cw({}),this.formOptions={},this.suggestRevisionMutator=new re.U(r),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Suggest Gene Revision Form"},fieldGroup:[{key:"id",type:"input",hide:!0},{key:"description",type:"cvc-textarea",templateOptions:{label:"Gene Description",helpText:'User-defined summary of the clinical relevance of this Gene. By submitting content to CIViC you agree to release it to the public domain as described by the <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="CreativeCommons.org CC0 license" target="_blank">Creative Commons Public Domain Dedication (CC0 1.0 Universal)</a></p><p>Should include:</p><ul><li>relevance to appropriate cancer(s)</li><li>treatment(s) related specifically to variants affecting this Gene</li></ul><p>May include relevant mechanistic information such as:</p><ul><li>pathway interactions</li><li>functional alterations caused by variants in this Gene (i.e., activating, loss-of-function, etc.)</li><li>normal functions key to its oncogenic properties.</li>',placeholder:"Enter a description for this gene.",required:!1}},{key:"sources",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"Gene Description Sources",addText:"Add a Source",helpText:"Add any Sources used as references for this Gene's Description above."},fieldArray:{type:"source-input",templateOptions:{required:!0}}},{key:"comment",type:"comment-textarea",templateOptions:{label:"Comment",placeholder:"Please enter a comment describing your revision.",required:!0,minLength:10}},{key:"cancel",type:"cancel-button",templateOptions:{redirectPath:"../.."}},{key:"organization",type:"org-submit-button",templateOptions:{submitLabel:"Submit Gene Revision",submitSize:"large"}}]}]}ngOnInit(){console.log(this.geneId)}ngAfterViewInit(){this.revisableFieldsGQL.fetch({geneId:this.geneId},{fetchPolicy:"network-only"}).subscribe(({data:{gene:n}})=>{console.log("gene"),n&&(this.formModel=this.toFormModel(n))},n=>{console.error("Error retrieving gene."),console.error(n)},()=>{console.log("complete"),this.formOptions.updateInitialValue&&this.formOptions.updateInitialValue(),this.formGroup.markAllAsTouched();const n=this.formGroup.get("fields.comment");n&&n.markAsUntouched()})}toFormModel(n){var r,c;return{fields:Object.assign(Object.assign({},n),{comment:null===(r=this.formModel)||void 0===r?void 0:r.fields.comment,organization:null===(c=this.formModel)||void 0===c?void 0:c.fields.organization})}}submitRevision(n){let r=this.toRevisionInput(n);if(r){let c=this.suggestRevisionMutator.mutate(this.suggestRevisionGQL,{input:r},{refetchQueries:[{query:this.geneDetailGQL.document,variables:{geneId:this.geneId}},{query:this.revisionsGQL.document,variables:{subject:{id:this.geneId,entityType:h.oRL.Gene},status:h.FJi.New}}]});c.submitSuccess$.pipe((0,b.R)(this.destroy$)).subscribe(g=>{g&&(this.success=!0)}),c.submitError$.pipe((0,b.R)(this.destroy$)).subscribe(g=>{g&&(this.errorMessages=g,this.success=!1)}),c.isSubmitting$.pipe((0,b.R)(this.destroy$)).subscribe(g=>{this.loading=g})}}toRevisionInput(n){var r;if(n){const c=n.fields;return{id:c.id,comment:c.comment,organizationId:null===(r=c.organization)||void 0===r?void 0:r.id,fields:{description:(0,se.xt)(n.fields.description),sourceIds:n.fields.sources.map(g=>+g.id)}}}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.D9L),e.Y36(le.Y),e.Y36(h.FOU),e.Y36(h.TNk),e.Y36(h.L5n))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-gene-revise-form"]],inputs:{geneId:"geneId"},decls:4,vars:2,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit",4,"ngIf"],["formMessages",""],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange",4,"ngIf"],[3,"form","fields","model","options","modelChange"],[4,"ngIf"],[3,"errors"],["nzType","success","nzMessage","Suggested Revision Submitted","nzShowIcon","",3,"nzDescription"],["nzSize","small"],["successMessage",""],["routerLink","../../revisions"]],template:function(n,r){1&n&&(e.TgZ(0,"nz-spin",0),e.YNc(1,de,3,3,"form",1),e.qZA(),e.YNc(2,ue,2,2,"ng-template",null,2,e.W1O)),2&n&&(e.Q6J("nzSpinning",r.loading),e.xp6(1),e.Q6J("ngIf",r.formModel))},directives:[D.W,d.O5,a._Y,a.JL,s.Lr,a.sg,d.tP,p.T7,u.SK,s.Nx,ce.V,i.r,m.yS],styles:["[_nghost-%COMP%]{display:block}"]}),t})();function ve(t,l){if(1&t&&(e.ynx(0),e._UZ(1,"cvc-gene-revise-form",2),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("geneId",n.geneId)}}function ye(t,l){1&t&&e._uU(0,"Loading Gene...")}const Se=[{path:"",component:G,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class t{constructor(n){this.route=n,this.routeParams$=this.route.params.subscribe(r=>{this.geneId=+r.geneId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-genes-suggest"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingGene",""],[3,"geneId"]],template:function(n,r){if(1&n&&(e.YNc(0,ve,2,1,"ng-container",0),e.YNc(1,ye,1,0,"ng-template",null,1,e.W1O)),2&n){const c=e.MAs(2);e.Q6J("ngIf",r.geneId)("ngIfElse",c)}},directives:[d.O5,ze],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})(),data:{breadcrumb:"Suggest Revision"}}]}];let xe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(Se),ie]]}),t})();var Ce=o(9386);let Me=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,xe,m.Bz,x.D,f.KJ,C.PV,v.WG,u.Jb,Ce.a]]}),t})()},6559:(L,S,o)=>{o.d(S,{H0:()=>k});var d=o(5e3),m=o(9808),x=o(226);let k=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({imports:[[x.vT,m.ez]]}),a})()}}]);