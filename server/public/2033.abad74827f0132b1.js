"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[2033],{3416:(B,Q,n)=>{n.d(Q,{g:()=>F});var x=n(9808),A=n(4182),T=n(8776),P=n(3793),J=n(8054),Z=n(7338),k=n(8006),N=n(8390),e=n(915);const D={name:"disease-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Disease",helpText:"Please enter a disease name. If you are unable to locate the disease in the dropdown, please check the 'Could not find disease' checkbox below and enter the disease in the field that appears.",required:!1,addText:"Add a Disease",destroy$:new(n(8929).xQ)},fieldArray:{type:"cvc-disease-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(t,d,h)=>{var M,V;const L=null===(V=null===(M=null==h?void 0:h.parent)||void 0===M?void 0:M.templateOptions)||void 0===V?void 0:V.allowCreate;return void 0===L||L}}},defaultValue:[],validation:{messages:{required:(t,d)=>{const h=(null==d?void 0:d.form)?d.form.get("evidenceType"):null;return h?`${(0,e.E)(h.value)} Evidence requires a disease to be specified.`:"Disease is required."}}},hooks:{onInit:t=>{var d;const h=t.templateOptions,M=null===(d=null==t?void 0:t.options)||void 0===d?void 0:d.formState,V=(null==t?void 0:t.form)?t.form.get("evidenceType"):null;!V||(h.vcSub=V.valueChanges.subscribe(L=>{M.requiresDisease(L)?(h.hidden=!1,h.required=!0):(h.hidden=!0,h.required=!1,t.model.length>0&&(t.model.splice(1),h.remove(0)))}))},onDestroy:t=>{const d=t.templateOptions;d.vcSub&&d.vcSub.unsubscribe()}}}};var v=n(5e3);let F=(()=>{class t{}return t.\u0275fac=function(h){return new(h||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({imports:[[x.ez,A.u5,A.UX,J.LV,Z.z,P.F,T.X0.forChild({types:[D]}),k.I,N.N]]}),t})()},8006:(B,Q,n)=>{n.d(Q,{I:()=>g});var x=n(9808),A=n(8776),T=n(7625),P=n(373),J=n(4850),Z=n(8929),k=n(591),N=n(6123),e=n(5e3),E=n(712),O=n(9169),D=n(8054),v=n(4182),F=n(6949),t=n(8144),d=n(3618),h=n(4022),M=n(822),V=n(2683),L=n(1047),U=n(6042),c=n(2643),p=n(8926);function r(a,S){if(1&a&&(e._UZ(0,"span",10),e.ALo(1,"highlightTypeahead")),2&a){const o=e.oxw().$implicit,u=e.oxw(3);e.Q6J("innerHtml",e.xi3(1,1,o.label,u.to.searchString),e.oJD)}}function y(a,S){if(1&a&&(e._UZ(0,"span",11),e.ALo(1,"highlightTypeahead")),2&a){const o=e.oxw().$implicit,u=e.oxw(3);e.Q6J("innerHtml",e.xi3(1,1,o.disease.diseaseAliases.join(", "),u.to.searchString),e.oJD)}}function $(a,S){if(1&a&&(e.TgZ(0,"nz-option",7),e.TgZ(1,"nz-space"),e.YNc(2,r,2,4,"span",8),e.YNc(3,y,2,4,"span",9),e.qZA(),e.qZA()),2&a){const o=S.$implicit;e.Q6J("nzLabel",o.tooltip)("nzValue",o.disease)}}function l(a,S){if(1&a&&(e.ynx(0),e.YNc(1,$,4,2,"nz-option",6),e.BQk()),2&a){const o=S.ngrxLet;e.xp6(1),e.Q6J("ngForOf",o)}}function C(a,S){1&a&&e._uU(0," No disease found in CIViC that matches the string provided. ")}function f(a,S){if(1&a){const o=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",3),e.NdJ("nzOnSearch",function(m){return e.CHM(o),e.oxw().to.onSearch(m)}),e.YNc(2,l,2,1,"ng-container",4),e.qZA(),e.YNc(3,C,1,0,"ng-template",null,5,e.W1O),e.BQk()}if(2&a){const o=e.MAs(4),u=e.oxw(),m=e.MAs(4);e.xp6(1),e.Q6J("formControl",u.formControl)("formlyAttributes",u.field)("nzPlaceHolder",u.to.placeholder?u.to.placeholder:null)("nzDropdownRender",u.to.allowCreate?m:null)("nzNotFoundContent",o)("nzShowArrow",u.to.showArrow)("nzFilterOption",u.to.filterOption),e.xp6(1),e.Q6J("ngrxLet",u.diseases$)}}function w(a,S){if(1&a&&e._UZ(0,"cvc-disease-tag",12),2&a){const o=e.oxw();e.Q6J("disease",o.formControl.value)}}function b(a,S){if(1&a&&e._UZ(0,"cvc-form-errors-alert",18),2&a){const o=e.oxw(4);e.Q6J("errors",o.errorMessages)}}function R(a,S){if(1&a){const o=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(o);const m=e.oxw(4);return m.addDisease(m.to.searchString)}),e._UZ(1,"i",20),e._uU(2,"No Existing CIViC Disease\xa0"),e.TgZ(3,"strong"),e._uU(4),e.qZA(),e._uU(5,"\xa0found. Create A New Disease? "),e.qZA()}if(2&a){const o=e.oxw(4);e.Q6J("nzLoading",o.loading),e.xp6(4),e.Oqu(o.to.searchString)}}function j(a,S){if(1&a){const o=e.EpF();e.ynx(0),e.YNc(1,b,1,1,"cvc-form-errors-alert",14),e.TgZ(2,"nz-input-group",15),e.TgZ(3,"input",16),e.NdJ("ngModelChange",function(m){return e.CHM(o),e.oxw(3).enteredDoid=m}),e.qZA(),e.qZA(),e.YNc(4,R,6,2,"button",17),e.BQk()}if(2&a){const o=e.oxw(3);e.xp6(1),e.Q6J("ngIf",o.errorMessages.length>0),e.xp6(2),e.Q6J("ngModel",o.enteredDoid),e.xp6(1),e.Q6J("ngIf",0==o.errorMessages.length)}}function H(a,S){if(1&a&&(e.ynx(0),e.YNc(1,j,5,3,"ng-container",13),e.BQk()),2&a){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",""!==o.to.searchString&&o.to.searchString.length>=5)}}function W(a,S){if(1&a&&(e.YNc(0,H,2,1,"ng-container",13),e.ALo(1,"ngrxPush")),2&a){const o=e.oxw();e.Q6J("ngIf",e.lcZ(1,1,o.displayAdd$))}}const s={name:"cvc-disease-input",component:(()=>{class a extends A.fS{constructor(o,u,m){super(),this.diseaseTypeaheadQuery=o,this.networkErrorService=u,this.addDiseaseGQL=m,this.destroy$=new Z.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.enteredDoid="",this.displayAdd$=new k.X(!1),this.addDiseaseMutator=new N.U(u),this.defaultOptions={templateOptions:{placeholder:"Search Diseases",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],searchString:"",allowCreate:!0}}}ngOnInit(){this.queryRef=this.diseaseTypeaheadQuery.watch({name:"zzzz"}),this.diseases$=this.queryRef.valueChanges.pipe((0,T.R)(this.destroy$),(0,P.j)("data","diseaseTypeahead"),(0,J.U)(o=>o.map(m=>{let _=m.doid?`DOID:${m.doid}`:"no DOID",Y=m.diseaseAliases.length>0?`Aliases: ${m.diseaseAliases.join(", ")}`:"";return{value:m.id,tooltip:`${m.displayName} (${_}) ${Y}`,label:`${m.displayName} (${_})`,disease:m}})))}ngAfterViewInit(){this.to.onSearch=o=>{o.length<this.to.minLengthSearch||(this.to.searchString=o,this.errorMessages=[],this.queryRef.refetch({name:o}).then(u=>{this.displayAdd$.next(0==u.data.diseaseTypeahead.filter(m=>m.displayName.toUpperCase()==o.toUpperCase()).length)}))}}addDisease(o){if(o&&""!=o){let m=this.addDiseaseMutator.mutate(this.addDiseaseGQL,{name:o,doid:+this.enteredDoid?+this.enteredDoid:void 0},{},_=>{var Y;null===(Y=this.field.formControl)||void 0===Y||Y.setValue({id:_.addDisease.disease.id,name:_.addDisease.disease.name}),this.to.searchString="",this.to.searchLength=0});m.submitSuccess$.pipe((0,T.R)(this.destroy$)).subscribe(_=>{_&&(this.success=!0)}),m.submitError$.pipe((0,T.R)(this.destroy$)).subscribe(_=>{_&&(this.errorMessages=_,this.success=!1)}),m.isSubmitting$.pipe((0,T.R)(this.destroy$)).subscribe(_=>{this.loading=_})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.displayAdd$.complete()}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(E.kv3),e.Y36(O.Y),e.Y36(E.KNk))},a.\u0275cmp=e.Xpm({type:a,selectors:[["cvc-disease-input-type"]],features:[e.qOj],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["diseaseListItem",""],["addDiseaseTmpl",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"innerHtml",4,"nzSpaceItem"],["nz-typography","","nzType","secondary",3,"innerHtml",4,"nzSpaceItem"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml"],[3,"disease"],[4,"ngIf"],[3,"errors",4,"ngIf"],["nzAddOnBefore","DOID:"],["type","text","nz-input","","placeholder","Optional DOID",3,"ngModel","ngModelChange"],["nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],[3,"errors"],["nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(o,u){if(1&o&&(e.YNc(0,f,5,8,"ng-container",0),e.YNc(1,w,1,1,"ng-template",null,1,e.W1O),e.YNc(3,W,2,3,"ng-template",null,2,e.W1O)),2&o){const m=e.MAs(2);e.Q6J("ngIf",!(null!=u.formControl.value&&u.formControl.value.id))("ngIfElse",m)}},directives:[x.O5,D.Vq,v.JJ,v.oH,A.VQ,F.eJ,x.sg,D.Ip,t.NU,t.$1,d.ZU,h.n,M.V,V.w,L.gB,L.Zp,v.Fj,v.On,U.ix,c.dQ],pipes:[p.A,F.fM],styles:[""]}),a})()};var I=n(3580),i=n(7008),z=n(9444);let g=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[x.ez,v.UX,F.WG,A.X0.forChild({types:[s]}),D.LV,I.Q,d.ZJ,t.zf,U.sL,i.B,L.o7,v.u5,z.s]]}),a})()},5926:(B,Q,n)=>{n.d(Q,{J:()=>D});var x=n(9808),A=n(4182),T=n(8776),P=n(3793),J=n(304),Z=n(8054),k=n(4181),N=n(8390);const E={name:"variant-array",extends:"multi-field",wrappers:["form-field"],defaultOptions:{templateOptions:{label:"Variant",helpText:"Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).",required:!1,addText:"Specify a Variant"},fieldArray:{type:"variant-input",templateOptions:{required:!1},expressionProperties:{"templateOptions.allowCreate":(v,F,t)=>{var d,h;const M=null===(h=null===(d=null==t?void 0:t.parent)||void 0===d?void 0:d.templateOptions)||void 0===h?void 0:h.allowCreate;return void 0===M||M}}},hideExpression:(v,F,t)=>{const d=(null==t?void 0:t.form)?t.form.get("gene"):null;return!d||!d.value||!d.value[0]},defaultValue:[],validation:{messages:{required:()=>"Evidence requires that a Variant be specified."}}}};var O=n(5e3);let D=(()=>{class v{}return v.\u0275fac=function(t){return new(t||v)},v.\u0275mod=O.oAB({type:v}),v.\u0275inj=O.cJS({imports:[[x.ez,A.u5,A.UX,Z.LV,J.F,P.F,T.X0.forChild({types:[E]}),k.O,N.N]]}),v})()},4181:(B,Q,n)=>{n.d(Q,{O:()=>X});var x=n(9808),A=n(6123),T=n(8776),P=n(8929),J=n(591),Z=n(373),k=n(4850),N=n(7625),e=n(5e3),E=n(712),O=n(9169),D=n(8054),v=n(4182),F=n(8664),t=n(822),d=n(6042),h=n(2643),M=n(2683),V=n(647),L=n(6949),U=n(8926);function c(s,I){if(1&s&&(e.TgZ(0,"nz-option",6),e._UZ(1,"span",7),e.ALo(2,"highlightTypeahead"),e.qZA()),2&s){const i=I.$implicit,z=e.oxw(2);e.Q6J("nzValue",i.variant),e.xp6(1),e.Q6J("innerHtml",e.xi3(2,2,i.label,z.to.searchString),e.oJD)}}function p(s,I){1&s&&e._uU(0," No variant found in CIViC that matches the string provided. ")}function r(s,I){if(1&s){const i=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",3),e.NdJ("nzOnSearch",function(g){return e.CHM(i),e.oxw().to.onSearch(g)}),e.YNc(2,c,3,5,"nz-option",4),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,p,1,0,"ng-template",null,5,e.W1O),e.BQk()}if(2&s){const i=e.MAs(5),z=e.oxw(),g=e.MAs(4);e.xp6(1),e.Q6J("formControl",z.formControl)("formlyAttributes",z.field)("nzPlaceHolder",z.to.placeholder?z.to.placeholder:null)("nzDropdownRender",z.to.allowCreate?g:null)("nzNotFoundContent",i)("nzShowArrow",z.to.showArrow),e.xp6(1),e.Q6J("ngForOf",e.lcZ(3,7,z.variants$))}}function y(s,I){if(1&s&&e._UZ(0,"cvc-variant-tag",8),2&s){const i=e.oxw();e.Q6J("variant",i.formControl.value)}}function $(s,I){if(1&s&&e._UZ(0,"cvc-form-errors-alert",12),2&s){const i=e.oxw(4);e.Q6J("errors",i.errorMessages)}}function l(s,I){if(1&s){const i=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(i);const g=e.oxw(4);return g.addVariant(g.to.searchString)}),e._UZ(1,"i",14),e._uU(2,"No Existing CIViC Variant\xa0"),e.TgZ(3,"strong"),e._uU(4),e.qZA(),e._uU(5,"\xa0found. Create A New Variant? "),e.qZA()}if(2&s){const i=e.oxw(4);e.Q6J("nzLoading",i.loading),e.xp6(4),e.Oqu(i.to.searchString)}}function C(s,I){if(1&s&&(e.ynx(0),e.YNc(1,$,1,1,"cvc-form-errors-alert",10),e.YNc(2,l,6,2,"button",11),e.BQk()),2&s){const i=e.oxw(3);e.xp6(1),e.Q6J("ngIf",i.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",0==i.errorMessages.length)}}function f(s,I){if(1&s&&(e.ynx(0),e.YNc(1,C,3,2,"ng-container",9),e.BQk()),2&s){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",""!==i.to.searchString)}}function w(s,I){if(1&s&&(e.YNc(0,f,2,1,"ng-container",9),e.ALo(1,"ngrxPush")),2&s){const i=e.oxw();e.Q6J("ngIf",e.lcZ(1,1,i.displayAdd$))}}const R={name:"variant-input",component:(()=>{class s extends T.fS{constructor(i,z,g){super(),this.variantTypeaheadQuery=i,this.networkErrorService=z,this.addVariantGQL=g,this.destroy$=new P.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new J.X(!1),this.addVariantMutator=new A.U(z),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(a,S,o)=>{var u,m;let _=null===(m=null===(u=null==o?void 0:o.parent)||void 0===u?void 0:u.parent)||void 0===m?void 0:m.model;if(_&&_.gene&&_.gene[0])return _.gene[0].id}}}}ngOnInit(){this.queryRef=this.variantTypeaheadQuery.watch({name:"zzzz"}),this.variants$=this.queryRef.valueChanges.pipe((0,Z.j)("data","variants","nodes"),(0,k.U)(i=>i.map(g=>({value:g.id,label:g.name,variant:g}))))}ngAfterViewInit(){this.to.onSearch=i=>{i.length<this.to.minLengthSearch||(this.to.searchString=i,this.errorMessages=[],this.queryRef.refetch({name:i,geneId:this.to.geneId}).then(z=>{this.displayAdd$.next(0==z.data.variants.nodes.filter(g=>g.name.toUpperCase()==i.toUpperCase()).length)}))}}addVariant(i){if(i&&""!=i&&this.to.geneId){let z=this.addVariantMutator.mutate(this.addVariantGQL,{name:i,geneId:this.to.geneId},{},g=>{var a;null===(a=this.field.formControl)||void 0===a||a.setValue({id:g.addVariant.variant.id,name:g.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0});z.submitSuccess$.pipe((0,N.R)(this.destroy$)).subscribe(g=>{g&&(this.success=!0)}),z.submitError$.pipe((0,N.R)(this.destroy$)).subscribe(g=>{g&&(this.errorMessages=g,this.success=!1)}),z.isSubmitting$.pipe((0,N.R)(this.destroy$)).subscribe(g=>{this.loading=g})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.displayAdd$.complete()}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(E._eC),e.Y36(O.Y),e.Y36(E.LUc))},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-variant-input-type"]],features:[e.qOj],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzNotFoundContent","nzShowArrow","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["sourceLoader",""],["nzCustomContent","",3,"nzValue"],[3,"innerHtml"],[3,"variant"],[4,"ngIf"],[3,"errors",4,"ngIf"],["nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],[3,"errors"],["nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(i,z){if(1&i&&(e.YNc(0,r,6,9,"ng-container",0),e.YNc(1,y,1,1,"ng-template",null,1,e.W1O),e.YNc(3,w,2,3,"ng-template",null,2,e.W1O)),2&i){const g=e.MAs(2);e.Q6J("ngIf",!(null!=z.formControl.value&&z.formControl.value.id))("ngIfElse",g)}},directives:[x.O5,D.Vq,v.JJ,v.oH,T.VQ,x.sg,D.Ip,F.I,t.V,d.ix,h.dQ,M.w,V.Ls],pipes:[L.fM,U.A],styles:[""],changeDetection:0}),s})()};var j=n(4867),H=n(7008),W=n(9444);let X=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[x.ez,v.UX,L.WG,T.X0.forChild({types:[R]}),D.LV,d.sL,V.PV,j.Q,H.B,W.s]]}),s})()},7338:(B,Q,n)=>{n.d(Q,{z:()=>$});var x=n(9808),A=n(9444),T=n(6949),P=n(8776),J=n(7484),Z=n(5482),k=n(4546),N=n(1894),e=n(647),E=n(3610),O=n(8144),D=n(3618),v=n(5109),F=n(6789),t=n(5e3),d=n(2313);let h=(()=>{class l{constructor(f){this.sanitizer=f}transform(f){return this.sanitizer.bypassSecurityTrustHtml(f)}}return l.\u0275fac=function(f){return new(f||l)(t.Y36(d.H7,16))},l.\u0275pipe=t.Yjl({name:"sanitizeHtml",type:l,pure:!0}),l})();function M(l,C){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const f=t.oxw(2);t.xp6(1),t.Oqu(f.to.label)}}function V(l,C){if(1&l&&t._UZ(0,"i",11),2&l){t.oxw();const f=t.MAs(3);t.Q6J("nzPopoverContent",f)}}function L(l,C){if(1&l&&(t._UZ(0,"span",12),t.ALo(1,"sanitizeHtml")),2&l){const f=t.oxw(3);t.Q6J("innerHtml",t.lcZ(1,1,f.to.helpText),t.oJD)}}function U(l,C){1&l&&(t.ynx(0),t.YNc(1,V,1,1,"i",9),t.YNc(2,L,2,3,"ng-template",null,10,t.W1O),t.BQk())}function c(l,C){if(1&l&&(t.ynx(0),t.TgZ(1,"nz-form-label",7),t.TgZ(2,"nz-space"),t.YNc(3,M,2,1,"span",8),t.YNc(4,U,4,0,"ng-container",1),t.qZA(),t.qZA(),t.BQk()),2&l){const f=t.oxw();t.xp6(1),t.Q6J("nzRequired",f.to.required&&!0!==f.to.hideRequiredMarker)("nzFor",f.id),t.xp6(3),t.Q6J("ngIf",f.to.helpText)}}const p=function(l){return{hidden:l}},y={wrappers:[{name:"form-field",component:(()=>{class l extends P.n2{get errorState(){return this.showError?"error":""}}return l.\u0275fac=function(){let C;return function(w){return(C||(C=t.n5z(l)))(w||l)}}(),l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-form-field-wrapper"]],features:[t.qOj],decls:10,vars:7,consts:[[3,"ngClass"],[4,"ngIf"],[3,"nzValidateStatus"],["fieldComponent",""],["nzType","danger"],[3,"field"],["nzType","secondary"],[3,"nzRequired","nzFor"],[4,"nzSpaceItem"],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-popover","",3,"nzPopoverContent",4,"nzSpaceItem"],["help",""],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-popover","",3,"nzPopoverContent"],[3,"innerHtml"]],template:function(f,w){1&f&&(t.TgZ(0,"div",0),t.TgZ(1,"nz-form-item"),t.YNc(2,c,5,3,"ng-container",1),t.TgZ(3,"nz-form-control",2),t.GkF(4,null,3),t.qZA(),t.TgZ(6,"nz-typography",4),t._UZ(7,"formly-validation-message",5),t.qZA(),t.TgZ(8,"nz-typography",6),t._uU(9),t.qZA(),t.qZA(),t.qZA()),2&f&&(t.Q6J("ngClass",t.VKq(5,p,!0===w.to.hidden)),t.xp6(2),t.Q6J("ngIf",w.to.label&&!0!==w.to.hideLabel),t.xp6(1),t.Q6J("nzValidateStatus",w.errorState),t.xp6(4),t.Q6J("field",w.field),t.xp6(2),t.hij(" ",w.to.optionText," "))},directives:[x.mk,N.SK,k.Nx,x.O5,N.t3,k.iK,O.NU,O.$1,e.Ls,E.lU,k.Fd,D.ZU,P.u_],pipes:[h],styles:[".hidden[_ngcontent-%COMP%]{display:none}"]}),l})()}]};let $=(()=>{class l{}return l.\u0275fac=function(f){return new(f||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[x.ez,T.WG,P.X0.forChild(y),N.Jb,J.vh,Z.cD,F._,v.s,k.U5,e.PV,O.zf,E.$6,A.s,D.ZJ]]}),l})()},6559:(B,Q,n)=>{n.d(Q,{H0:()=>U});var x=n(5e3),A=n(9808),T=n(226);let U=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=x.oAB({type:c}),c.\u0275inj=x.cJS({imports:[[T.vT,A.ez]]}),c})()}}]);