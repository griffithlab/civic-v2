"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9016],{7881:(Ne,le,r)=>{r.d(le,{L:()=>j});var i=r(5e3),n=r(9808),t=r(6699);function E(b,X){if(1&b&&i._UZ(0,"nz-avatar",2),2&b){const P=i.oxw();i.Q6J("nzSrc",P.user.profileImagePath)("nzSize",P.size)}}function B(b,X){if(1&b&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&b){const P=i.oxw();i.Q6J("nzSize",P.size)("nzText",i.lcZ(1,2,P.user.displayName.charAt(0)))}}let j=(()=>{class b{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return b.\u0275fac=function(P){return new(P||b)},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(P,F){if(1&P&&(i.YNc(0,E,1,2,"nz-avatar",0),i.YNc(1,B,2,4,"ng-template",null,1,i.W1O)),2&P){const k=i.MAs(2);i.Q6J("ngIf",F.user.profileImagePath)("ngIfElse",k)}},directives:[n.O5,t.Dz],pipes:[n.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),b})()},5473:(Ne,le,r)=>{r.d(le,{H:()=>E});var i=r(9808),n=r(6699),t=r(5e3);let E=(()=>{class B{}return B.\u0275fac=function(b){return new(b||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[[i.ez,n.Rt]]}),B})()},9350:(Ne,le,r)=>{r.d(le,{a:()=>P});var i=r(4850),n=r(5154),t=r(373),E=r(1059),B=r(712),j=r(5e3),b=r(520);const X={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let P=(()=>{class F{constructor(ee,te){function de(y){return!(!y||y.role!==B.i44.Admin)}function fe(y){return!(!y||y.role!==B.i44.Editor&&y.role!==B.i44.Admin)}function me(y){return!(!y||y.role!==B.i44.Curator)}function he(y){return!(!y||y.role!==B.i44.Curator&&y.role!==B.i44.Editor&&y.role!==B.i44.Admin)}function K(y){var x,_;return!(!y||y.role!==B.i44.Editor&&y.role!==B.i44.Admin||!y.mostRecentConflictOfInterestStatement||(null===(x=y.mostRecentConflictOfInterestStatement)||void 0===x?void 0:x.coiStatus)!=B.Mgx.Conflict&&(null===(_=y.mostRecentConflictOfInterestStatement)||void 0===_?void 0:_.coiStatus)!=B.Mgx.Valid)}function Z(y){if(y.mostRecentOrganizationId)return y.organizations.find(x=>x.id===y.mostRecentOrganizationId)}this.viewerBaseGQL=ee,this.http=te,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(y=>({data:y.data,loading:y.loading,networkStatus:y.networkStatus})),(0,n.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,E.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,i.U)(y=>Object.assign(Object.assign({},y),{signedIn:null!==y,signedOut:null===y,canCurate:he(y),canModerate:K(y),isAdmin:de(y),isEditor:fe(y),isCurator:me(y),organizations:null===y?[]:y.organizations,mostRecentOrg:null===y?void 0:Z(y),invalidCoi:fe(y)&&(!y.mostRecentConflictOfInterestStatement||y.mostRecentConflictOfInterestStatement.coiStatus===B.Mgx.Expired||y.mostRecentConflictOfInterestStatement.coiStatus===B.Mgx.Missing)})),(0,E.O)(X),(0,n.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(y=>y.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(y=>y.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(y=>de(y))),this.isEditor$=this.viewer$.pipe((0,i.U)(y=>fe(y))),this.isCurator$=this.viewer$.pipe((0,i.U)(y=>me(y))),this.canCurate$=this.viewer$.pipe((0,i.U)(y=>he(y))),this.canModerate$=this.viewer$.pipe((0,i.U)(y=>K(y)))}signOut(){this.http.get("/api/sign_out").subscribe(ee=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return F.\u0275fac=function(ee){return new(ee||F)(j.LFG(B.Tt7),j.LFG(b.eN))},F.\u0275prov=j.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()},6123:(Ne,le,r)=>{r.d(le,{U:()=>B});var i=r(8929),n=r(591),t=r(7625),E=r(537);class B{constructor(b){this.networkErrorService=b}mutate(b,X){let P=new i.xQ,F={isSubmitting$:new n.X(!1),submitSuccess$:new n.X(!1),submitError$:new n.X([]),cleanup:()=>{P.next(),P.complete()}};return F.isSubmitting$.next(!0),b.mutate(X).pipe((0,t.R)(P),(0,E.x)(()=>{F.isSubmitting$.next(!1)})).subscribe({error:k=>{k.graphQLErrors.length>0?F.submitError$.next(k.graphQLErrors.map(ee=>ee.message)):k.networkError&&this.networkErrorService.networkError$.next(k.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},2993:(Ne,le,r)=>{r.d(le,{V:()=>X});var i=r(5e3),n=r(9808),t=r(2359);function E(P,F){if(1&P&&i._UZ(0,"nz-alert",4),2&P){const k=i.oxw();i.Q6J("nzDescription",k.errors[0])}}function B(P,F){if(1&P&&i._UZ(0,"nz-alert",5),2&P){i.oxw();const k=i.MAs(3);i.Q6J("nzDescription",k)}}function j(P,F){if(1&P&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&P){const k=F.$implicit;i.xp6(1),i.Oqu(k)}}function b(P,F){if(1&P&&(i.TgZ(0,"ul",6),i.YNc(1,j,2,1,"li",7),i.qZA()),2&P){const k=i.oxw();i.xp6(1),i.Q6J("ngForOf",k.errors)}}let X=(()=>{class P{constructor(){}ngOnInit(){}}return P.\u0275fac=function(k){return new(k||P)},P.\u0275cmp=i.Xpm({type:P,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(k,ee){1&k&&(i.YNc(0,E,1,1,"nz-alert",0),i.YNc(1,B,1,1,"nz-alert",1),i.YNc(2,b,2,1,"ng-template",2,3,i.W1O)),2&k&&(i.Q6J("ngIf",1===ee.errors.length),i.xp6(1),i.Q6J("ngIf",ee.errors.length>1))},directives:[n.O5,t.r,n.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),P})()},2752:(Ne,le,r)=>{r.d(le,{B:()=>E});var i=r(9808),n=r(2359),t=r(5e3);let E=(()=>{class B{}return B.\u0275fac=function(b){return new(b||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[[i.ez,n.L]]}),B})()},7753:(Ne,le,r)=>{r.d(le,{m:()=>_});var i=r(5e3),n=r(6123),t=r(8929),E=r(7625),B=r(712),j=r(9169),b=r(7484),X=r(9808),P=r(2359),F=r(1894),k=r(4546),ee=r(2993),te=r(7525),de=r(3868),fe=r(3075),me=r(6042),he=r(2643),K=r(2683);function Z(O,re){1&O&&i._UZ(0,"nz-alert",7)}function y(O,re){if(1&O&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&O){const ze=i.oxw();i.xp6(1),i.Q6J("errors",ze.errorMessages)}}function x(O,re){if(1&O){const ze=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(ue){return i.CHM(ze),i.oxw().coiText=ue}),i.qZA(),i.qZA()}if(2&O){const ze=i.oxw();i.xp6(1),i.Q6J("ngModel",ze.coiText)}}let _=(()=>{class O{constructor(ze,pe){this.updateCoiGql=ze,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new n.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return O.\u0275fac=function(ze){return new(ze||O)(i.Y36(B.IP1),i.Y36(j.Y))},O.\u0275cmp=i.Xpm({type:O,selectors:[["cvc-update-coi"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(ze,pe){1&ze&&(i.TgZ(0,"nz-card"),i.YNc(1,Z,1,0,"nz-alert",0),i.YNc(2,y,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(W){return pe.coiStatus=W}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,x,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return pe.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&ze&&(i.xp6(1),i.Q6J("ngIf",pe.success),i.xp6(1),i.Q6J("ngIf",pe.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",pe.loading),i.xp6(2),i.Q6J("ngModel",pe.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===pe.coiStatus),i.xp6(2),i.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[b.bd,X.O5,P.r,F.SK,k.Nx,ee.V,te.W,de.Dg,fe.JJ,fe.On,de.Of,fe.Fj,me.ix,he.dQ,K.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),O})()},3473:(Ne,le,r)=>{r.d(le,{A:()=>ee});var i=r(9808),n=r(3075),t=r(6949),E=r(7484),B=r(2359),j=r(4546),b=r(2752),X=r(3868),P=r(7525),F=r(6042),k=r(5e3);let ee=(()=>{class te{}return te.\u0275fac=function(fe){return new(fe||te)},te.\u0275mod=k.oAB({type:te}),te.\u0275inj=k.cJS({imports:[[i.ez,n.u5,j.U5,n.UX,t.WG,E.vh,B.L,X.aF,F.sL,P.j,b.B]]}),te})()},712:(Ne,le,r)=>{r.d(le,{ti:()=>$i,iGM:()=>So,A94:()=>Dr,Gbq:()=>jn,u4i:()=>se,ejK:()=>Sr,td:()=>Hn,Tq1:()=>li,q8c:()=>Ei,WRV:()=>qi,IZ6:()=>io,qf4:()=>lo,Rdc:()=>Co,fpJ:()=>sr,k2T:()=>or,cMj:()=>Or,UIR:()=>qn,E8d:()=>_e,P_b:()=>ti,Mgx:()=>Pe,iST:()=>ii,Kk:()=>ri,OfU:()=>Fe,kQf:()=>Yi,l4w:()=>gr,JQ3:()=>cr,h01:()=>We,wg3:()=>Mr,k7O:()=>ai,kv3:()=>Po,R8w:()=>Je,GB2:()=>xr,Zyn:()=>ke,dUU:()=>di,kq9:()=>et,vRc:()=>bo,Ud2:()=>mi,GYx:()=>xo,AO2:()=>je,BTF:()=>fi,eY8:()=>yi,_Aq:()=>He,pHu:()=>Pr,tI1:()=>ct,Q_P:()=>Bo,Sx0:()=>tt,Ybm:()=>vi,Cp0:()=>g,RTy:()=>A,Yum:()=>Qo,sBY:()=>br,kqt:()=>C,B0s:()=>ko,rzy:()=>Ti,BQZ:()=>w,sfv:()=>ce,TNk:()=>Br,rJ8:()=>_i,FOU:()=>Ko,Q4m:()=>er,Fvz:()=>Ce,cCu:()=>Gr,_jb:()=>Hi,MYm:()=>ji,oRL:()=>mt,fow:()=>gt,X5f:()=>Ai,WOS:()=>Qr,Lr0:()=>Vr,Del:()=>kr,xlL:()=>ft,io:()=>Li,WGV:()=>Jr,OHm:()=>Ri,lYz:()=>ht,FKQ:()=>nr,B97:()=>Fi,mII:()=>Oo,ghc:()=>Ni,NQC:()=>vt,JDX:()=>zt,VZq:()=>wi,EwB:()=>Jo,FJi:()=>yt,L5n:()=>Zi,rZD:()=>Ct,SrV:()=>Tt,Bk6:()=>Kr,TiL:()=>to,yic:()=>It,F3s:()=>_t,jw9:()=>Dt,g0X:()=>Xr,kQl:()=>Et,WFw:()=>Vo,o71:()=>St,jMx:()=>cs,A4J:()=>Wi,Vj7:()=>Go,D9L:()=>Xo,Xft:()=>Cr,mpB:()=>lt,m$d:()=>ss,IP1:()=>ur,LiH:()=>os,wbP:()=>pr,sLD:()=>es,yqR:()=>ns,cEv:()=>ro,i44:()=>bt,vMt:()=>Mo,tJ6:()=>ao,IRu:()=>Nt,Qzn:()=>Ui,iJT:()=>zs,qP7:()=>Ot,Qtd:()=>us,fOk:()=>ps,FB1:()=>At,q1D:()=>gs,huM:()=>Mt,ZYZ:()=>ho,nnL:()=>zr,Bo4:()=>Cs,ubO:()=>hs,tw_:()=>po,wpb:()=>Lt,BnY:()=>hr,_eC:()=>Ir,fwG:()=>go,zwS:()=>zo,pP7:()=>xt,Tt7:()=>Io,Kmw:()=>Do});var i=r(655);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}var E=r(9245);function B(e,s){for(var z,o=/\r\n|[\n\r]/g,u=1,v=s+1;(z=o.exec(e.body))&&z.index<s;)u+=1,v=s+1-(z.index+z[0].length);return{line:u,column:v}}function j(e){return b(e.source,B(e.source,e.start))}function b(e,s){var o=e.locationOffset.column-1,u=P(o)+e.body,v=s.line-1,I=s.line+(e.locationOffset.line-1),$=s.column+(1===s.line?o:0),ve="".concat(e.name,":").concat(I,":").concat($,"\n"),be=u.split(/\r\n|[\n\r]/g),Ke=be[v];if(Ke.length>120){for(var Rt=Math.floor($/80),$t=$%80,Ye=[],Ue=0;Ue<Ke.length;Ue+=80)Ye.push(Ke.slice(Ue,Ue+80));return ve+X([["".concat(I),Ye[0]]].concat(Ye.slice(1,Rt+1).map(function(Bt){return["",Bt]}),[[" ",P($t-1)+"^"],["",Ye[Rt+1]]]))}return ve+X([["".concat(I-1),be[v-1]],["".concat(I),Ke],["",P($-1)+"^"],["".concat(I+1),be[v+1]]])}function X(e){var s=e.filter(function(u){return void 0!==u[1]}),o=Math.max.apply(Math,s.map(function(u){return u[0].length}));return s.map(function(u){var z=u[1];return function F(e,s){return P(e-s.length)+s}(o,u[0])+(z?" | "+z:" |")}).join("\n")}function P(e){return Array(e+1).join(" ")}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}function te(e,s){for(var o=0;o<s.length;o++){var u=s[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function he(e,s){return!s||"object"!==k(s)&&"function"!=typeof s?K(e):s}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){var s="function"==typeof Map?new Map:void 0;return Z=function(u){if(null===u||!function _(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(u))return u;if("function"!=typeof u)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(u))return s.get(u);s.set(u,v)}function v(){return y(u,arguments,re(this).constructor)}return v.prototype=Object.create(u.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),O(v,u)},Z(e)}function y(e,s,o){return(y=x()?Reflect.construct:function(v,z,I){var S=[null];S.push.apply(S,z);var ve=new(Function.bind.apply(v,S));return I&&O(ve,I.prototype),ve}).apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function O(e,s){return(O=Object.setPrototypeOf||function(u,v){return u.__proto__=v,u})(e,s)}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(e)}var ze=function(e){!function fe(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&O(e,s)}(o,e);var s=function me(e){var s=x();return function(){var v,u=re(e);if(s){var z=re(this).constructor;v=Reflect.construct(u,arguments,z)}else v=u.apply(this,arguments);return he(this,v)}}(o);function o(u,v,z,I,S,$,ve){var be,Ke,Rt,$t,Ye;(function ee(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,o),Ye=s.call(this,u);var Jt,Ue=Array.isArray(v)?0!==v.length?v:void 0:v?[v]:void 0,Bt=z;!Bt&&Ue&&(Bt=null===(Jt=Ue[0].loc)||void 0===Jt?void 0:Jt.source);var Gt,Pt=I;!Pt&&Ue&&(Pt=Ue.reduce(function(ut,Ft){return Ft.loc&&ut.push(Ft.loc.start),ut},[])),Pt&&0===Pt.length&&(Pt=void 0),I&&z?Gt=I.map(function(ut){return B(z,ut)}):Ue&&(Gt=Ue.reduce(function(ut,Ft){return Ft.loc&&ut.push(B(Ft.loc.source,Ft.loc.start)),ut},[]));var Ut=ve;if(null==Ut&&null!=$){var Xt=$.extensions;(function t(e){return"object"==n(e)&&null!==e})(Xt)&&(Ut=Xt)}return Object.defineProperties(K(Ye),{name:{value:"GraphQLError"},message:{value:u,enumerable:!0,writable:!0},locations:{value:null!==(be=Gt)&&void 0!==be?be:void 0,enumerable:null!=Gt},path:{value:null!=S?S:void 0,enumerable:null!=S},nodes:{value:null!=Ue?Ue:void 0},source:{value:null!==(Ke=Bt)&&void 0!==Ke?Ke:void 0},positions:{value:null!==(Rt=Pt)&&void 0!==Rt?Rt:void 0},originalError:{value:$},extensions:{value:null!==($t=Ut)&&void 0!==$t?$t:void 0,enumerable:null!=Ut}}),(null==$?void 0:$.stack)?(Object.defineProperty(K(Ye),"stack",{value:$.stack,writable:!0,configurable:!0}),he(Ye)):(Error.captureStackTrace?Error.captureStackTrace(K(Ye),o):Object.defineProperty(K(Ye),"stack",{value:Error().stack,writable:!0,configurable:!0}),Ye)}return function de(e,s,o){s&&te(e.prototype,s),o&&te(e,o)}(o,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var o=0,u=e.nodes;o<u.length;o++){var v=u[o];v.loc&&(s+="\n\n"+j(v.loc))}else if(e.source&&e.locations)for(var z=0,I=e.locations;z<I.length;z++)s+="\n\n"+b(e.source,I[z]);return s}(this)}},{key:E.YF,get:function(){return"Object"}}]),o}(Z(Error));function ue(e,s,o){return new ze("Syntax Error: ".concat(o),void 0,e,[s])}var W=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),J=r(848),p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),U=r(6261),L=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),V=r(2032),Te=function(){function e(o){var u=new J.WU(p.SOF,0,0,0,0,null);this.source=o,this.lastToken=u,this.token=u,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var u=this.token;if(u.kind!==p.EOF)do{var v;u=null!==(v=u.next)&&void 0!==v?v:u.next=Q(this,u)}while(u.kind===p.COMMENT);return u},e}();function oe(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Q(e,s){for(var o=e.source,u=o.body,v=u.length,z=s.end;z<v;){var I=u.charCodeAt(z),S=e.line,$=1+z-e.lineStart;switch(I){case 65279:case 9:case 32:case 44:++z;continue;case 10:++z,++e.line,e.lineStart=z;continue;case 13:10===u.charCodeAt(z+1)?z+=2:++z,++e.line,e.lineStart=z;continue;case 33:return new J.WU(p.BANG,z,z+1,S,$,s);case 35:return Oe(o,z,S,$,s);case 36:return new J.WU(p.DOLLAR,z,z+1,S,$,s);case 38:return new J.WU(p.AMP,z,z+1,S,$,s);case 40:return new J.WU(p.PAREN_L,z,z+1,S,$,s);case 41:return new J.WU(p.PAREN_R,z,z+1,S,$,s);case 46:if(46===u.charCodeAt(z+1)&&46===u.charCodeAt(z+2))return new J.WU(p.SPREAD,z,z+3,S,$,s);break;case 58:return new J.WU(p.COLON,z,z+1,S,$,s);case 61:return new J.WU(p.EQUALS,z,z+1,S,$,s);case 64:return new J.WU(p.AT,z,z+1,S,$,s);case 91:return new J.WU(p.BRACKET_L,z,z+1,S,$,s);case 93:return new J.WU(p.BRACKET_R,z,z+1,S,$,s);case 123:return new J.WU(p.BRACE_L,z,z+1,S,$,s);case 124:return new J.WU(p.PIPE,z,z+1,S,$,s);case 125:return new J.WU(p.BRACE_R,z,z+1,S,$,s);case 34:return 34===u.charCodeAt(z+1)&&34===u.charCodeAt(z+2)?ie(o,z,S,$,s,e):N(o,z,S,$,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ae(o,z,I,S,$,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Y(o,z,S,$,s)}throw ue(o,z,ge(I))}return new J.WU(p.EOF,v,v,e.line,1+z-e.lineStart,s)}function ge(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(oe(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(oe(e),".")}function Oe(e,s,o,u,v){var I,z=e.body,S=s;do{I=z.charCodeAt(++S)}while(!isNaN(I)&&(I>31||9===I));return new J.WU(p.COMMENT,s,S,o,u,v,z.slice(s+1,S))}function Ae(e,s,o,u,v,z){var I=e.body,S=o,$=s,ve=!1;if(45===S&&(S=I.charCodeAt(++$)),48===S){if((S=I.charCodeAt(++$))>=48&&S<=57)throw ue(e,$,"Invalid number, unexpected digit after 0: ".concat(oe(S),"."))}else $=Me(e,$,S),S=I.charCodeAt($);if(46===S&&(ve=!0,S=I.charCodeAt(++$),$=Me(e,$,S),S=I.charCodeAt($)),(69===S||101===S)&&(ve=!0,(43===(S=I.charCodeAt(++$))||45===S)&&(S=I.charCodeAt(++$)),$=Me(e,$,S),S=I.charCodeAt($)),46===S||function ye(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(S))throw ue(e,$,"Invalid number, expected digit but got: ".concat(oe(S),"."));return new J.WU(ve?p.FLOAT:p.INT,s,$,u,v,z,I.slice(s,$))}function Me(e,s,o){var u=e.body,v=s,z=o;if(z>=48&&z<=57){do{z=u.charCodeAt(++v)}while(z>=48&&z<=57);return v}throw ue(e,v,"Invalid number, expected digit but got: ".concat(oe(z),"."))}function N(e,s,o,u,v){for(var z=e.body,I=s+1,S=I,$=0,ve="";I<z.length&&!isNaN($=z.charCodeAt(I))&&10!==$&&13!==$;){if(34===$)return ve+=z.slice(S,I),new J.WU(p.STRING,s,I+1,o,u,v,ve);if($<32&&9!==$)throw ue(e,I,"Invalid character within String: ".concat(oe($),"."));if(++I,92===$){switch(ve+=z.slice(S,I-1),$=z.charCodeAt(I)){case 34:ve+='"';break;case 47:ve+="/";break;case 92:ve+="\\";break;case 98:ve+="\b";break;case 102:ve+="\f";break;case 110:ve+="\n";break;case 114:ve+="\r";break;case 116:ve+="\t";break;case 117:var be=D(z.charCodeAt(I+1),z.charCodeAt(I+2),z.charCodeAt(I+3),z.charCodeAt(I+4));if(be<0){var Ke=z.slice(I+1,I+5);throw ue(e,I,"Invalid character escape sequence: \\u".concat(Ke,"."))}ve+=String.fromCharCode(be),I+=4;break;default:throw ue(e,I,"Invalid character escape sequence: \\".concat(String.fromCharCode($),"."))}S=++I}}throw ue(e,I,"Unterminated string.")}function ie(e,s,o,u,v,z){for(var I=e.body,S=s+3,$=S,ve=0,be="";S<I.length&&!isNaN(ve=I.charCodeAt(S));){if(34===ve&&34===I.charCodeAt(S+1)&&34===I.charCodeAt(S+2))return be+=I.slice($,S),new J.WU(p.BLOCK_STRING,s,S+3,o,u,v,(0,V.W7)(be));if(ve<32&&9!==ve&&10!==ve&&13!==ve)throw ue(e,S,"Invalid character within String: ".concat(oe(ve),"."));10===ve?(++S,++z.line,z.lineStart=S):13===ve?(10===I.charCodeAt(S+1)?S+=2:++S,++z.line,z.lineStart=S):92===ve&&34===I.charCodeAt(S+1)&&34===I.charCodeAt(S+2)&&34===I.charCodeAt(S+3)?(be+=I.slice($,S)+'"""',$=S+=4):++S}throw ue(e,S,"Unterminated string.")}function D(e,s,o,u){return H(e)<<12|H(s)<<8|H(o)<<4|H(u)}function H(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Y(e,s,o,u,v){for(var z=e.body,I=z.length,S=s+1,$=0;S!==I&&!isNaN($=z.charCodeAt(S))&&(95===$||$>=48&&$<=57||$>=65&&$<=90||$>=97&&$<=122);)++S;return new J.WU(p.NAME,s,S,o,u,v,z.slice(s,S))}var Ee=function(){function e(o,u){var v=(0,U.T)(o)?o:new U.H(o);this._lexer=new Te(v),this._options=u}var s=e.prototype;return s.parseName=function(){var u=this.expectToken(p.NAME);return{kind:W.NAME,value:u.value,loc:this.loc(u)}},s.parseDocument=function(){var u=this._lexer.token;return{kind:W.DOCUMENT,definitions:this.many(p.SOF,this.parseDefinition,p.EOF),loc:this.loc(u)}},s.parseDefinition=function(){if(this.peek(p.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(p.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var u=this._lexer.token;if(this.peek(p.BRACE_L))return{kind:W.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(u)};var z,v=this.parseOperationType();return this.peek(p.NAME)&&(z=this.parseName()),{kind:W.OPERATION_DEFINITION,operation:v,name:z,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(u)}},s.parseOperationType=function(){var u=this.expectToken(p.NAME);switch(u.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(u)},s.parseVariableDefinitions=function(){return this.optionalMany(p.PAREN_L,this.parseVariableDefinition,p.PAREN_R)},s.parseVariableDefinition=function(){var u=this._lexer.token;return{kind:W.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(p.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(p.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(u)}},s.parseVariable=function(){var u=this._lexer.token;return this.expectToken(p.DOLLAR),{kind:W.VARIABLE,name:this.parseName(),loc:this.loc(u)}},s.parseSelectionSet=function(){var u=this._lexer.token;return{kind:W.SELECTION_SET,selections:this.many(p.BRACE_L,this.parseSelection,p.BRACE_R),loc:this.loc(u)}},s.parseSelection=function(){return this.peek(p.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var z,I,u=this._lexer.token,v=this.parseName();return this.expectOptionalToken(p.COLON)?(z=v,I=this.parseName()):I=v,{kind:W.FIELD,alias:z,name:I,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(p.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(u)}},s.parseArguments=function(u){return this.optionalMany(p.PAREN_L,u?this.parseConstArgument:this.parseArgument,p.PAREN_R)},s.parseArgument=function(){var u=this._lexer.token,v=this.parseName();return this.expectToken(p.COLON),{kind:W.ARGUMENT,name:v,value:this.parseValueLiteral(!1),loc:this.loc(u)}},s.parseConstArgument=function(){var u=this._lexer.token;return{kind:W.ARGUMENT,name:this.parseName(),value:(this.expectToken(p.COLON),this.parseValueLiteral(!0)),loc:this.loc(u)}},s.parseFragment=function(){var u=this._lexer.token;this.expectToken(p.SPREAD);var v=this.expectOptionalKeyword("on");return!v&&this.peek(p.NAME)?{kind:W.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(u)}:{kind:W.INLINE_FRAGMENT,typeCondition:v?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(u)}},s.parseFragmentDefinition=function(){var u,v=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(u=this._options)||void 0===u?void 0:u.experimentalFragmentVariables)?{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(v)}:{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(v)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(u){var v=this._lexer.token;switch(v.kind){case p.BRACKET_L:return this.parseList(u);case p.BRACE_L:return this.parseObject(u);case p.INT:return this._lexer.advance(),{kind:W.INT,value:v.value,loc:this.loc(v)};case p.FLOAT:return this._lexer.advance(),{kind:W.FLOAT,value:v.value,loc:this.loc(v)};case p.STRING:case p.BLOCK_STRING:return this.parseStringLiteral();case p.NAME:switch(this._lexer.advance(),v.value){case"true":return{kind:W.BOOLEAN,value:!0,loc:this.loc(v)};case"false":return{kind:W.BOOLEAN,value:!1,loc:this.loc(v)};case"null":return{kind:W.NULL,loc:this.loc(v)};default:return{kind:W.ENUM,value:v.value,loc:this.loc(v)}}case p.DOLLAR:if(!u)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var u=this._lexer.token;return this._lexer.advance(),{kind:W.STRING,value:u.value,block:u.kind===p.BLOCK_STRING,loc:this.loc(u)}},s.parseList=function(u){var v=this,z=this._lexer.token;return{kind:W.LIST,values:this.any(p.BRACKET_L,function(){return v.parseValueLiteral(u)},p.BRACKET_R),loc:this.loc(z)}},s.parseObject=function(u){var v=this,z=this._lexer.token;return{kind:W.OBJECT,fields:this.any(p.BRACE_L,function(){return v.parseObjectField(u)},p.BRACE_R),loc:this.loc(z)}},s.parseObjectField=function(u){var v=this._lexer.token,z=this.parseName();return this.expectToken(p.COLON),{kind:W.OBJECT_FIELD,name:z,value:this.parseValueLiteral(u),loc:this.loc(v)}},s.parseDirectives=function(u){for(var v=[];this.peek(p.AT);)v.push(this.parseDirective(u));return v},s.parseDirective=function(u){var v=this._lexer.token;return this.expectToken(p.AT),{kind:W.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(u),loc:this.loc(v)}},s.parseTypeReference=function(){var v,u=this._lexer.token;return this.expectOptionalToken(p.BRACKET_L)?(v=this.parseTypeReference(),this.expectToken(p.BRACKET_R),v={kind:W.LIST_TYPE,type:v,loc:this.loc(u)}):v=this.parseNamedType(),this.expectOptionalToken(p.BANG)?{kind:W.NON_NULL_TYPE,type:v,loc:this.loc(u)}:v},s.parseNamedType=function(){var u=this._lexer.token;return{kind:W.NAMED_TYPE,name:this.parseName(),loc:this.loc(u)}},s.parseTypeSystemDefinition=function(){var u=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(u.kind===p.NAME)switch(u.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(u)},s.peekDescription=function(){return this.peek(p.STRING)||this.peek(p.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("schema");var z=this.parseDirectives(!0),I=this.many(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);return{kind:W.SCHEMA_DEFINITION,description:v,directives:z,operationTypes:I,loc:this.loc(u)}},s.parseOperationTypeDefinition=function(){var u=this._lexer.token,v=this.parseOperationType();this.expectToken(p.COLON);var z=this.parseNamedType();return{kind:W.OPERATION_TYPE_DEFINITION,operation:v,type:z,loc:this.loc(u)}},s.parseScalarTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("scalar");var z=this.parseName(),I=this.parseDirectives(!0);return{kind:W.SCALAR_TYPE_DEFINITION,description:v,name:z,directives:I,loc:this.loc(u)}},s.parseObjectTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("type");var z=this.parseName(),I=this.parseImplementsInterfaces(),S=this.parseDirectives(!0),$=this.parseFieldsDefinition();return{kind:W.OBJECT_TYPE_DEFINITION,description:v,name:z,interfaces:I,directives:S,fields:$,loc:this.loc(u)}},s.parseImplementsInterfaces=function(){var u;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(u=this._options)||void 0===u?void 0:u.allowLegacySDLImplementsInterfaces)){var v=[];this.expectOptionalToken(p.AMP);do{v.push(this.parseNamedType())}while(this.expectOptionalToken(p.AMP)||this.peek(p.NAME));return v}return this.delimitedMany(p.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var u;return!0===(null===(u=this._options)||void 0===u?void 0:u.allowLegacySDLEmptyFields)&&this.peek(p.BRACE_L)&&this._lexer.lookahead().kind===p.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(p.BRACE_L,this.parseFieldDefinition,p.BRACE_R)},s.parseFieldDefinition=function(){var u=this._lexer.token,v=this.parseDescription(),z=this.parseName(),I=this.parseArgumentDefs();this.expectToken(p.COLON);var S=this.parseTypeReference(),$=this.parseDirectives(!0);return{kind:W.FIELD_DEFINITION,description:v,name:z,arguments:I,type:S,directives:$,loc:this.loc(u)}},s.parseArgumentDefs=function(){return this.optionalMany(p.PAREN_L,this.parseInputValueDef,p.PAREN_R)},s.parseInputValueDef=function(){var u=this._lexer.token,v=this.parseDescription(),z=this.parseName();this.expectToken(p.COLON);var S,I=this.parseTypeReference();this.expectOptionalToken(p.EQUALS)&&(S=this.parseValueLiteral(!0));var $=this.parseDirectives(!0);return{kind:W.INPUT_VALUE_DEFINITION,description:v,name:z,type:I,defaultValue:S,directives:$,loc:this.loc(u)}},s.parseInterfaceTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("interface");var z=this.parseName(),I=this.parseImplementsInterfaces(),S=this.parseDirectives(!0),$=this.parseFieldsDefinition();return{kind:W.INTERFACE_TYPE_DEFINITION,description:v,name:z,interfaces:I,directives:S,fields:$,loc:this.loc(u)}},s.parseUnionTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("union");var z=this.parseName(),I=this.parseDirectives(!0),S=this.parseUnionMemberTypes();return{kind:W.UNION_TYPE_DEFINITION,description:v,name:z,directives:I,types:S,loc:this.loc(u)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(p.EQUALS)?this.delimitedMany(p.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("enum");var z=this.parseName(),I=this.parseDirectives(!0),S=this.parseEnumValuesDefinition();return{kind:W.ENUM_TYPE_DEFINITION,description:v,name:z,directives:I,values:S,loc:this.loc(u)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseEnumValueDefinition,p.BRACE_R)},s.parseEnumValueDefinition=function(){var u=this._lexer.token,v=this.parseDescription(),z=this.parseName(),I=this.parseDirectives(!0);return{kind:W.ENUM_VALUE_DEFINITION,description:v,name:z,directives:I,loc:this.loc(u)}},s.parseInputObjectTypeDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("input");var z=this.parseName(),I=this.parseDirectives(!0),S=this.parseInputFieldsDefinition();return{kind:W.INPUT_OBJECT_TYPE_DEFINITION,description:v,name:z,directives:I,fields:S,loc:this.loc(u)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseInputValueDef,p.BRACE_R)},s.parseTypeSystemExtension=function(){var u=this._lexer.lookahead();if(u.kind===p.NAME)switch(u.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(u)},s.parseSchemaExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var v=this.parseDirectives(!0),z=this.optionalMany(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);if(0===v.length&&0===z.length)throw this.unexpected();return{kind:W.SCHEMA_EXTENSION,directives:v,operationTypes:z,loc:this.loc(u)}},s.parseScalarTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var v=this.parseName(),z=this.parseDirectives(!0);if(0===z.length)throw this.unexpected();return{kind:W.SCALAR_TYPE_EXTENSION,name:v,directives:z,loc:this.loc(u)}},s.parseObjectTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var v=this.parseName(),z=this.parseImplementsInterfaces(),I=this.parseDirectives(!0),S=this.parseFieldsDefinition();if(0===z.length&&0===I.length&&0===S.length)throw this.unexpected();return{kind:W.OBJECT_TYPE_EXTENSION,name:v,interfaces:z,directives:I,fields:S,loc:this.loc(u)}},s.parseInterfaceTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var v=this.parseName(),z=this.parseImplementsInterfaces(),I=this.parseDirectives(!0),S=this.parseFieldsDefinition();if(0===z.length&&0===I.length&&0===S.length)throw this.unexpected();return{kind:W.INTERFACE_TYPE_EXTENSION,name:v,interfaces:z,directives:I,fields:S,loc:this.loc(u)}},s.parseUnionTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var v=this.parseName(),z=this.parseDirectives(!0),I=this.parseUnionMemberTypes();if(0===z.length&&0===I.length)throw this.unexpected();return{kind:W.UNION_TYPE_EXTENSION,name:v,directives:z,types:I,loc:this.loc(u)}},s.parseEnumTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var v=this.parseName(),z=this.parseDirectives(!0),I=this.parseEnumValuesDefinition();if(0===z.length&&0===I.length)throw this.unexpected();return{kind:W.ENUM_TYPE_EXTENSION,name:v,directives:z,values:I,loc:this.loc(u)}},s.parseInputObjectTypeExtension=function(){var u=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var v=this.parseName(),z=this.parseDirectives(!0),I=this.parseInputFieldsDefinition();if(0===z.length&&0===I.length)throw this.unexpected();return{kind:W.INPUT_OBJECT_TYPE_EXTENSION,name:v,directives:z,fields:I,loc:this.loc(u)}},s.parseDirectiveDefinition=function(){var u=this._lexer.token,v=this.parseDescription();this.expectKeyword("directive"),this.expectToken(p.AT);var z=this.parseName(),I=this.parseArgumentDefs(),S=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var $=this.parseDirectiveLocations();return{kind:W.DIRECTIVE_DEFINITION,description:v,name:z,arguments:I,repeatable:S,locations:$,loc:this.loc(u)}},s.parseDirectiveLocations=function(){return this.delimitedMany(p.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var u=this._lexer.token,v=this.parseName();if(void 0!==L[v.value])return v;throw this.unexpected(u)},s.loc=function(u){var v;if(!0!==(null===(v=this._options)||void 0===v?void 0:v.noLocation))return new J.Ye(u,this._lexer.lastToken,this._lexer.source)},s.peek=function(u){return this._lexer.token.kind===u},s.expectToken=function(u){var v=this._lexer.token;if(v.kind===u)return this._lexer.advance(),v;throw ue(this._lexer.source,v.start,"Expected ".concat(xe(u),", found ").concat(Be(v),"."))},s.expectOptionalToken=function(u){var v=this._lexer.token;if(v.kind===u)return this._lexer.advance(),v},s.expectKeyword=function(u){var v=this._lexer.token;if(v.kind!==p.NAME||v.value!==u)throw ue(this._lexer.source,v.start,'Expected "'.concat(u,'", found ').concat(Be(v),"."));this._lexer.advance()},s.expectOptionalKeyword=function(u){var v=this._lexer.token;return v.kind===p.NAME&&v.value===u&&(this._lexer.advance(),!0)},s.unexpected=function(u){var v=null!=u?u:this._lexer.token;return ue(this._lexer.source,v.start,"Unexpected ".concat(Be(v),"."))},s.any=function(u,v,z){this.expectToken(u);for(var I=[];!this.expectOptionalToken(z);)I.push(v.call(this));return I},s.optionalMany=function(u,v,z){if(this.expectOptionalToken(u)){var I=[];do{I.push(v.call(this))}while(!this.expectOptionalToken(z));return I}return[]},s.many=function(u,v,z){this.expectToken(u);var I=[];do{I.push(v.call(this))}while(!this.expectOptionalToken(z));return I},s.delimitedMany=function(u,v){this.expectOptionalToken(u);var z=[];do{z.push(v.call(this))}while(this.expectOptionalToken(u));return z},e}();function Be(e){var s=e.value;return xe(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function xe(e){return function R(e){return e===p.BANG||e===p.DOLLAR||e===p.AMP||e===p.PAREN_L||e===p.PAREN_R||e===p.SPREAD||e===p.COLON||e===p.EQUALS||e===p.AT||e===p.BRACKET_L||e===p.BRACKET_R||e===p.BRACE_L||e===p.PIPE||e===p.BRACE_R}(e)?'"'.concat(e,'"'):e}var Qe=new Map,Ie=new Map,Ze=!0,Re=!1;function we(e){return e.replace(/[\s,]+/g," ").trim()}function ot(e){var s=we(e);if(!Qe.has(s)){var o=function De(e,s){return new Ee(e,s).parseDocument()}(e,{experimentalFragmentVariables:Re,allowLegacyFragmentVariables:Re});if(!o||"Document"!==o.kind)throw new Error("Not a valid GraphQL document.");Qe.set(s,function qe(e){var s=new Set(e.definitions);s.forEach(function(u){u.loc&&delete u.loc,Object.keys(u).forEach(function(v){var z=u[v];z&&"object"==typeof z&&s.add(z)})});var o=e.loc;return o&&(delete o.startToken,delete o.endToken),e}(function it(e){var s=new Set,o=[];return e.definitions.forEach(function(u){if("FragmentDefinition"===u.kind){var v=u.name.value,z=function nt(e){return we(e.source.body.substring(e.start,e.end))}(u.loc),I=Ie.get(v);I&&!I.has(z)?Ze&&console.warn("Warning: fragment with name "+v+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):I||Ie.set(v,I=new Set),I.add(z),s.has(z)||(s.add(z),o.push(u))}else o.push(u)}),(0,i.pi)((0,i.pi)({},e),{definitions:o})}(o)))}return Qe.get(s)}function T(e){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];"string"==typeof e&&(e=[e]);var u=e[0];return s.forEach(function(v,z){u+=v&&"Document"===v.kind?v.loc.source.body:v,u+=e[z+1]}),ot(u)}var e,Ve_gql=T;(e=T||(T={})).gql=Ve_gql,e.resetCaches=function rt(){Qe.clear(),Ie.clear()},e.disableFragmentWarnings=function st(){Ze=!1},e.enableExperimentalFragmentVariables=function at(){Re=!0},e.disableExperimentalFragmentVariables=function dt(){Re=!1},T.default=T;var h=r(9298),a=r(5e3),se=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(se||(se={})),se))(),_e=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(_e||(_e={})),_e))(),Pe=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Pe||(Pe={})),Pe))(),Fe=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Fe||(Fe={})),Fe))(),We=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(We||(We={})),We))(),Je=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Je||(Je={})),Je))(),ke=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(ke||(ke={})),ke))(),et=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(et||(et={})),et))(),je=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(je||(je={})),je))(),He=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(He||(He={})),He))(),ct=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(ct||(ct={})),ct))(),tt=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(tt||(tt={})),tt))(),g=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(g||(g={})),g))(),A=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(A||(A={})),A))(),C=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(C||(C={})),C))(),w=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(w||(w={})),w))(),ce=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ce||(ce={})),ce))(),Ce=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(Ce||(Ce={})),Ce))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(zt||(zt={})),zt))(),yt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Ct||(Ct={})),Ct))(),Tt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Tt||(Tt={})),Tt))(),It=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(It||(It={})),It))(),_t=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(_t||(_t={})),_t))(),Dt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Dt||(Dt={})),Dt))(),Et=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Et||(Et={})),Et))(),St=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(St||(St={})),St))(),lt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(lt||(lt={})),lt))(),bt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(bt||(bt={})),bt))(),Nt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Nt||(Nt={})),Nt))(),Ot=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(Ot||(Ot={})),Ot))(),At=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(At||(At={})),At))(),Mt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.GermlineOrSomatic="GERMLINE_OR_SOMATIC",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(Mt||(Mt={})),Mt))(),Lt=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(Lt||(Lt={})),Lt))(),xt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(xt||(xt={})),xt))();const Zt=T`
    fragment AssertionBrowseTableRowFields on Assertion {
  id
  name
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  disease {
    id
    name
  }
  drugs {
    id
    name
  }
  phenotypes @include(if: $cardView) {
    id
    name
  }
  drugInteractionType
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  ampLevel
  acmgCodes @include(if: $cardView) {
    code
  }
  fdaCompanionTest @include(if: $cardView)
  regulatoryApproval @include(if: $cardView)
  nccnGuideline @include(if: $cardView)
  variantOrigin @include(if: $cardView)
}
    `,Vt=T`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,wt=T`
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
    `,Yt=T`
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
    __typename
  }
}
    `,kt=T`
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
}
    `,l=T`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
}
    `,M=T`
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
    `,c=T`
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes
  uniqueParticipants {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations {
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
    ${M}`,f=T`
    fragment evidencePopover on EvidenceItem {
  id
  name
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  evidenceRating
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
    displayType
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
    `,G=T`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  disease {
    id
    name
  }
  drugs {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  phenotypes @include(if: $cardView) {
    id
    name
  }
  source @include(if: $cardView) {
    id
    citation
    citationId
    sourceType
    sourceUrl
    clinicalTrials {
      nctId
      id
    }
  }
  assertions @include(if: $cardView) {
    id
    name
  }
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
    `,Xe=T`
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
    ${T`
    fragment flag on Flag {
  id
  state
  createdAt
  resolvedAt
  flaggable {
    id
    name
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
    `}`,Wt=T`
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
    `,qt=T`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,en=T`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,tn=T`
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description @include(if: $cardView)
  profileImagePath(size: 256) @include(if: $cardView)
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
  orgStatsHash @include(if: $cardView) {
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
    `,nn=T`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
}
    `,on=T`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,rn=T`
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
        }
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
        suggestedObjects {
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
    `,sn=T`
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
    `,an=T`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,cn=T`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  geneName
  variantName
  diseaseName
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
}
    `,ln=T`
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
  }
}
    `,un=T`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
}
    `,dn=T`
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
    `,pn=T`
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
    `,mn=T`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,gn=T`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,fn=T`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
}
    `,hn=T`
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
    `,vn=T`
    fragment menuVariant on Variant {
  id
  name
}
    `,zn=T`
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
    `,yn=T`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  variant {
    id
    name
  }
  variantOrigin
  description
  clinicalSignificance
  disease {
    id
    doid
    name
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
    `,Cn=T`
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
    `,Tn=T`
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
    `,In=T`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,_n=T`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,En=T`
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
  fivePrimeCoordinates {
    ...CoordinateFields
  }
  threePrimeCoordinates {
    ...CoordinateFields
  }
}
    ${T`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `}`,Sn=T`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Nn=T`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  gene {
    id
    name
  }
  variant {
    id
    name
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
    `,On=T`
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
  }
  gene {
    id
    name
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
    id
  }
  phenotypes {
    id
    name
  }
  drugInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  nccnGuideline
  regulatoryApproval
  fdaCompanionTest
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
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,An=T`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  variant {
    id
    name
  }
  gene {
    id
    name
  }
  assertions {
    id
    name
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
    `,Mn=T`
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
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  source {
    id
    citation
    citationId
    sourceType
    displayType
    sourceUrl
    ascoAbstractId
    clinicalTrials {
      nctId
      id
    }
  }
  evidenceRating
  gene {
    id
    name
  }
  variant {
    id
    name
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
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Ln=T`
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
    `,xn=T`
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
    `,Rn=T`
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
    `,Pn=T`
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
}
    `,Fn=T`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 36)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
}
    `,bn=T`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,$n=T`
    fragment SourceSummaryFields on Source {
  displayType
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
    `,Bn=T`
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
    `,wn=T`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Gn=T`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Un=T`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Ht=T`
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
    ${M}`,Qn=T`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Zn=T`
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
    `,Vn=T`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
}
    `,Yn=T`
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
    `,Wn=T`
    fragment VariantSummaryFields on Variant {
  id
  name
  description
  gene {
    id
    name
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
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  evidenceScore
  referenceBuild
  ensemblVersion
  fivePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
  }
  threePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
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
    ${T`
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
    `}`,Jn=T`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${T`
    fragment assertionPopover on Assertion {
  id
  name
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  variantOrigin
  ampLevel
  acmgCodes {
    code
  }
  nccnGuideline
  fdaCompanionTest
  regulatoryApproval
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
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
    `}`;let jn=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Jn}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Kn=T`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $cardView: Boolean!) {
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
        ...AssertionBrowseTableRowFields
      }
    }
  }
}
    ${Zt}`;let Hn=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Kn}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xn=T`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Vt}`;let qn=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Xn}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ei=T`
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
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        name
        nctId
        evidenceCount
        sourceCount
      }
    }
  }
}
    `;let ti=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ei}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ni=T`
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
    }
    mentionedEntities {
      displayName
      entityId
      tagType
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
    ${wt}`;let ii=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ni}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=T`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Yt}`;let ri=(()=>{class e extends h.AE{constructor(o){super(o),this.document=oi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const si=T`
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
  }
}
    `;let ai=(()=>{class e extends h.AE{constructor(o){super(o),this.document=si}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=T`
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
    ${kt}`;let li=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ci}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=T`
    query DrugPopover($drugId: Int!) {
  drugPopover(id: $drugId) {
    id
    name
    drugUrl
    ncitId
    drugAliases
    assertionCount
    evidenceItemCount
  }
}
    `;let di=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ui}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=T`
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
    ${l}`;let mi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=pi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gi=T`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
  ) {
    ...eventFeed
  }
}
    ${c}`;let fi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=gi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=T`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${f}`;let vi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=hi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=T`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $cardView: Boolean!) {
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
    ${G}`;let yi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=zi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=T`
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
    ${Xe}`;let Ti=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ci}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ii=T`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Wt}`;let _i=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ii}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=T`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    drugName: $drugName
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
        id
        entrezId
        name
        geneAliases
        diseases {
          name
          id
        }
        drugs {
          name
          id
        }
        variantCount
        evidenceItemCount
        assertionCount
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
    `;let Ei=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Di}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=T`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${qt}`;let Ni=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Si}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oi=T`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${en}`;let Ai=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Oi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mi=T`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort, $cardView: Boolean!) {
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
    ${tn}`;let Li=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Mi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=T`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
  }
}
    `;let Ri=(()=>{class e extends h.AE{constructor(o){super(o),this.document=xi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=T`
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
    ${nn}`;let Fi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Pi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=T`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let $i=(()=>{class e extends h.mm{constructor(o){super(o),this.document=bi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=T`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let wi=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Bi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=T`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${on}`;let Ui=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Gi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=T`
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
    ${rn}`;let Zi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Qi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vi=T`
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
    ${sn}`;let Yi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Vi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=T`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${an}`;let Wi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ki}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=T`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let ji=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Ji}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=T`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Hi=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Ki}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=T`
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
    ${cn}`;let qi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Xi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();T`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const eo=T`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${ln}`;let to=(()=>{class e extends h.AE{constructor(o){super(o),this.document=eo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=T`
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
    ${un}`;let io=(()=>{class e extends h.AE{constructor(o){super(o),this.document=no}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oo=T`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${dn}`;let ro=(()=>{class e extends h.AE{constructor(o){super(o),this.document=oo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=T`
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
    ${pn}`;let ao=(()=>{class e extends h.AE{constructor(o){super(o),this.document=so}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=T`
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
    ${mn}`;let lo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=co}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=T`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${gn}`;let po=(()=>{class e extends h.AE{constructor(o){super(o),this.document=uo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=T`
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
    ${fn}`;let go=(()=>{class e extends h.AE{constructor(o){super(o),this.document=mo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fo=T`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${hn}`;let ho=(()=>{class e extends h.AE{constructor(o){super(o),this.document=fo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=T`
    query VariantsMenu($geneId: Int, $variantName: String, $evidenceStatusFilter: VariantDisplayFilter, $first: Int, $last: Int, $before: String, $after: String) {
  variants(
    geneId: $geneId
    name: $variantName
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
        ...menuVariant
      }
    }
  }
}
    ${vn}`;let zo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=vo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=T`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $drugName: String, $variantAlias: String, $variantTypeId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    drugName: $drugName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
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
        id
        name
        evidenceScore
        evidenceItemCount
        geneId
        geneName
        diseases {
          id
          name
        }
        drugs {
          id
          name
        }
        aliases {
          name
        }
        assertionCount
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;let Co=(()=>{class e extends h.AE{constructor(o){super(o),this.document=yo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const To=T`
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
    `;let Io=(()=>{class e extends h.AE{constructor(o){super(o),this.document=To}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=T`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Do=(()=>{class e extends h.AE{constructor(o){super(o),this.document=_o}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Eo=T`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${wt}`;let So=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Eo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const No=T`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${zn}`;let Oo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=No}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=T`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Mo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ao}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=T`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let xo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Lo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=T`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    doid
    diseaseAliases
  }
}
    `;let Po=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ro}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=T`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let bo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Fo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $o=T`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${yn}`;let Bo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=$o}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=T`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
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
    `;let Go=(()=>{class e extends h.mm{constructor(o){super(o),this.document=wo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=T`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Cn}`;let Qo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Uo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=T`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Vo=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Zo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=T`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let ko=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Yo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wo=T`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Jo=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Wo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=T`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Tn}`;let Ko=(()=>{class e extends h.AE{constructor(o){super(o),this.document=jo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=T`
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
    `;let Xo=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Ho}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=T`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${In}`;let er=(()=>{class e extends h.AE{constructor(o){super(o),this.document=qo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=T`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let nr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=tr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=T`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${_n}`;let or=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ir}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=T`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let sr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=rr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=T`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let cr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=ar}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=T`
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
    `;let ur=(()=>{class e extends h.mm{constructor(o){super(o),this.document=lr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=T`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let pr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=dr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=T`
    query Countries {
  countries {
    id
    name
  }
}
    `;let gr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=mr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=T`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let hr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=fr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=T`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${En}`;let zr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=vr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=T`
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
    `;let Cr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=yr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Tr=T`
    query VariantTypeahead($name: String!) {
  variants(name: $name, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Sn}`;let Ir=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Tr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=T`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Nn}`;let Dr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=_r}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Er=T`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${On}`;let Sr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Er}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Nr=T`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
  }
}
    `;let Or=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Nr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=T`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
  }
}
    `;let Mr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ar}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=T`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
  }
}
    `;let xr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Lr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rr=T`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${An}`;let Pr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Rr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fr=T`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Mn}`;let br=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Fr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $r=T`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Ln}`;let Br=(()=>{class e extends h.AE{constructor(o){super(o),this.document=$r}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=T`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${xn}`;let Gr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=wr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ur=T`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Rn}`;let Qr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ur}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zr=T`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Pn}`;let Vr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Zr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=T`
    query OrganizationMembers($organizationId: Int!) {
  organization(id: $organizationId) {
    members {
      edges {
        cursor
        node {
          ...OrganizationMembersFields
        }
      }
    }
  }
}
    ${Fn}`;let kr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Yr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wr=T`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
  }
}
    `;let Jr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Wr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=T`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${bn}`;let Kr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=jr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=T`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${$n}`;let Xr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Hr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=T`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Bn}`;let es=(()=>{class e extends h.AE{constructor(o){super(o),this.document=qr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=T`
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
    ${Un}
${Gn}
${wn}
${Ht}`;let ns=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ts}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const is=T`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Ht}`;let os=(()=>{class e extends h.mm{constructor(o){super(o),this.document=is}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=T`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Qn}`;let ss=(()=>{class e extends h.mm{constructor(o){super(o),this.document=rs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=T`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let cs=(()=>{class e extends h.mm{constructor(o){super(o),this.document=as}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=T`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Zn}`;let us=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ls}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=T`
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
    `;let ps=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ds}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=T`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Vn}`;let gs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ms}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=T`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
  }
}
    `;let hs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=fs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=T`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Yn}`;let zs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=vs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=T`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Wn}`;let Cs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ys}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9016:(Ne,le,r)=>{r.r(le),r.d(le,{LayoutModule:()=>kt});var i=r(9808),n=r(325),t=r(5e3),E=r(9350),B=r(8929),j=r(7625),b=r(655),X=r(4090),P=r(1721),F=r(4219),k=r(925),ee=r(647),te=r(226),de=r(5113);const fe=["*"],me=["nz-sider-trigger",""];function he(l,M){}function K(l,M){if(1&l&&(t.ynx(0),t.YNc(1,he,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),f=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||f)}}function Z(l,M){}function y(l,M){if(1&l&&(t.ynx(0),t.YNc(1,Z,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),f=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||f)}}function x(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function _(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function O(l,M){if(1&l&&(t.YNc(0,x,1,1,"i",4),t.YNc(1,_,1,1,"i",4)),2&l){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function re(l,M){1&l&&t._UZ(0,"i",6)}function ze(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const G=t.oxw();return G.setCollapsed(!G.nzCollapsed)}),t.qZA()}if(2&l){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class l{constructor(c,f){this.elementRef=c,this.renderer=f,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:fe,decls:1,vars:0,template:function(c,f){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),W=(()=>{class l{constructor(c,f){this.elementRef=c,this.renderer=f,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:fe,decls:1,vars:0,template:function(c,f){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),J=(()=>{class l{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,f){2&c&&(t.Udp("width",f.isNormalTrigger?f.siderWidth:null),t.ekj("ant-layout-sider-trigger",f.isNormalTrigger)("ant-layout-sider-zero-width-trigger",f.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",f.isZeroTrigger&&f.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",f.isZeroTrigger&&!f.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:me,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,f){1&c&&(t.YNc(0,K,2,1,"ng-container",0),t.YNc(1,y,2,1,"ng-container",0),t.YNc(2,O,2,2,"ng-template",null,1,t.W1O),t.YNc(4,re,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",f.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",f.isNormalTrigger))},directives:[i.O5,i.tP,ee.Ls],encapsulation:2,changeDetection:0}),l})(),p=(()=>{class l{constructor(c,f,G){this.platform=c,this.cdr=f,this.breakpointService=G,this.destroy$=new B.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,P.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(X.ow,!0).pipe((0,j.R)(this.destroy$)).subscribe(c=>{const f=this.nzBreakpoint;f&&(0,P.ov)().subscribe(()=>{this.matchBreakPoint=!c[f],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:f,nzCollapsedWidth:G,nzWidth:ae}=c;(f||G||ae)&&this.updateStyleMap(),f&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(k.t4),t.Y36(t.sBO),t.Y36(X.r3))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-sider"]],contentQueries:function(c,f,G){if(1&c&&t.Suo(G,F.wO,5),2&c){let ae;t.iGM(ae=t.CRH())&&(f.nzMenuDirective=ae.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,f){2&c&&(t.Udp("flex",f.flexSetting)("max-width",f.widthSetting)("min-width",f.widthSetting)("width",f.widthSetting),t.ekj("ant-layout-sider-zero-width",f.nzCollapsed&&0===f.nzCollapsedWidth)("ant-layout-sider-light","light"===f.nzTheme)("ant-layout-sider-dark","dark"===f.nzTheme)("ant-layout-sider-collapsed",f.nzCollapsed)("ant-layout-sider-has-trigger",f.nzCollapsible&&null!==f.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:fe,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,f){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,ze,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",f.nzCollapsible&&null!==f.nzTrigger))},directives:[J,i.O5],encapsulation:2,changeDetection:0}),(0,b.gn)([(0,P.yF)()],l.prototype,"nzReverseArrow",void 0),(0,b.gn)([(0,P.yF)()],l.prototype,"nzCollapsible",void 0),(0,b.gn)([(0,P.yF)()],l.prototype,"nzCollapsed",void 0),l})(),U=(()=>{class l{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new B.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,j.R)(this.destroy$)).subscribe(f=>{this.dir=f})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(te.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-layout"]],contentQueries:function(c,f,G){if(1&c&&t.Suo(G,p,4),2&c){let ae;t.iGM(ae=t.CRH())&&(f.listOfNzSiderComponent=ae)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,f){2&c&&t.ekj("ant-layout-rtl","rtl"===f.dir)("ant-layout-has-sider",f.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:fe,decls:1,vars:0,template:function(c,f){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),L=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[te.vT,i.ez,ee.PV,de.xu,k.ud]]}),l})();var V=r(404),Te=r(1894),R=r(712),oe=r(373),Q=r(1047),ge=r(3075),Oe=r(2845),Ae=r(4832),Me=r(969),N=r(3753),ie=r(2654),D=r(8514),H=r(6787),Y=r(2198),ye=r(2994),De=r(6792),Le=r(2986),$e=r(7545),Ee=r(1159),Be=r(7429),xe=r(8076);function Qe(l,M){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const Ie=[[["nz-auto-option"]]],Ze=["nz-auto-option"],Re=["*"],we=["panel"],nt=["content"];function it(l,M){}function qe(l,M){1&l&&t.YNc(0,it,0,0,"ng-template")}function ot(l,M){1&l&&t.Hsn(0)}function T(l,M){if(1&l&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&l){const c=M.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function rt(l,M){if(1&l&&t.YNc(0,T,2,3,"nz-auto-option",7),2&l){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function st(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(G){return t.CHM(c),t.oxw().onAnimationEvent(G)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,qe,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&l){const c=t.MAs(6),f=t.MAs(8),G=t.oxw();t.ekj("ant-select-dropdown-hidden",!G.showPanel)("ant-select-dropdown-rtl","rtl"===G.dir),t.Q6J("ngClass",G.nzOverlayClassName)("ngStyle",G.nzOverlayStyle)("nzNoAnimation",null==G.noAnimation?null:G.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==G.noAnimation?null:G.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",G.nzDataSource?f:c)}}let at=(()=>{class l{constructor(){}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ze,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,f){1&c&&(t.F$t(Ie),t.TgZ(0,"div",0),t.YNc(1,Qe,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",f.nzLabel))},directives:[Me.f],encapsulation:2,changeDetection:0}),l})();class dt{constructor(M,c=!1){this.source=M,this.isUserInput=c}}let Ve=(()=>{class l{constructor(c,f,G,ae){this.ngZone=c,this.changeDetectorRef=f,this.element=G,this.nzAutocompleteOptgroupComponent=ae,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new B.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,N.R)(this.element.nativeElement,"mouseenter").pipe((0,Y.h)(()=>this.mouseEntered.observers.length>0),(0,j.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,N.R)(this.element.nativeElement,"mousedown").pipe((0,j.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,P.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new dt(this,c))}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(at,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,f){1&c&&t.NdJ("click",function(){return f.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",f.selected.toString())("aria-disabled",f.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",f.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",f.selected)("ant-select-item-option-active",f.active)("ant-select-item-option-disabled",f.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Re,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,f){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,b.gn)([(0,P.yF)()],l.prototype,"nzDisabled",void 0),l})();const pt={provide:ge.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class l{constructor(c,f,G,ae,Xe){this.elementRef=c,this.overlay=f,this.viewContainerRef=G,this.nzInputGroupWhitSuffixOrPrefixDirective=ae,this.document=Xe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new B.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,j.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const f=c.keyCode,G=f===Ee.LH||f===Ee.JH;f===Ee.hY&&c.preventDefault(),!this.panelOpen||f!==Ee.hY&&f!==Ee.Mf?this.panelOpen&&f===Ee.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&G&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),f===Ee.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const f=c.target,G=this.document;let ae=f.value;"number"===f.type&&(ae=""===ae?null:parseFloat(ae)),this.previousValue!==ae&&(this.previousValue=ae,this.onChange(ae),this.canOpen()&&G.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,ye.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,De.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,Y.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function h(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Be.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Oe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new Oe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Oe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const f=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(f),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const f=this.nzAutocomplete.getOption(c),G=f?f.getLabel():c;this.elementRef.nativeElement.value=null!=G?G:"",this.nzAutocomplete.nzBackfill||(this.previousValue=G)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(Oe.aV),t.Y36(t.s_b),t.Y36(Q.ke,8),t.Y36(i.K0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,f){1&c&&t.NdJ("focusin",function(){return f.handleFocus()})("blur",function(){return f.handleBlur()})("input",function(ae){return f.handleInput(ae)})("keydown",function(ae){return f.handleKeydown(ae)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),l})(),ne=(()=>{class l{constructor(c,f,G,ae){this.changeDetectorRef=c,this.ngZone=f,this.directionality=G,this.noAnimation=ae,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(Xe,Wt)=>Xe===Wt,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new B.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ie.w.EMPTY,this.optionMouseEnterSubscription=ie.w.EMPTY,this.dataSourceChangeSubscription=ie.w.EMPTY,this.optionSelectionChanges=(0,D.P)(()=>this.options?(0,H.T)(...this.options.map(Xe=>Xe.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Le.q)(1),(0,$e.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,D.P)(()=>this.options?(0,H.T)(...this.options.map(Xe=>Xe.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Le.q)(1),(0,$e.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,j.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const f=this.options.get(c);f&&!f.active?(this.activeItem=f,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((f,G,ae)=>-1===f?this.compareWith(c,G.nzValue)?ae:-1:f,-1)}getOption(c){return this.options.find(f=>this.compareWith(c,f.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(f=>{!f.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,f=!1){this.options.forEach(G=>{G!==c&&(f&&G.deselect(),G.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,Y.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(te.Is,8),t.Y36(Ae.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-autocomplete"]],contentQueries:function(c,f,G){if(1&c&&t.Suo(G,Ve,5),2&c){let ae;t.iGM(ae=t.CRH())&&(f.fromContentOptions=ae)}},viewQuery:function(c,f){if(1&c&&(t.Gf(t.Rgc,5),t.Gf(we,5),t.Gf(nt,5),t.Gf(Ve,5)),2&c){let G;t.iGM(G=t.CRH())&&(f.template=G.first),t.iGM(G=t.CRH())&&(f.panel=G.first),t.iGM(G=t.CRH())&&(f.content=G.first),t.iGM(G=t.CRH())&&(f.fromDataSourceOptions=G)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Re,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,f){1&c&&(t.F$t(),t.YNc(0,st,9,10,"ng-template"))},directives:[Ve,i.mk,i.PC,Ae.P,i.tP,i.sg],encapsulation:2,data:{animation:[xe.mF]},changeDetection:0}),(0,b.gn)([(0,P.yF)()],l.prototype,"nzDefaultActiveFirstOption",void 0),(0,b.gn)([(0,P.yF)()],l.prototype,"nzBackfill",void 0),l})(),m=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[te.vT,i.ez,Oe.U8,ge.u5,Me.T,Ae.g,Q.o7]]}),l})();var d=r(6949);function q(l,M){1&l&&t._UZ(0,"i",5)}function se(l,M){if(1&l){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const G=t.oxw();return G.searchQuery="",G.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._UZ(5,"span",9),t._UZ(6,"br"),t._UZ(7,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&l){const c=M.$implicit,f=t.oxw();t.xp6(1),t.Q6J("routerLink",f.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",f.urlForResult(c)),t.xp6(2),t.Q6J("nzType",f.iconNameForResult(c)),t.xp6(1),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let Se=(()=>{class l{constructor(c,f){this.gql=c,this.router=f,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,oe.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case R.rZD.EvidenceItem:return"civic:evidence";case R.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let f;switch(c.resultType){case R.rZD.VariantGroup:f="variant-groups";break;case R.rZD.EvidenceItem:f="evidence";break;default:f=`${c.resultType.toLowerCase()}s`}return`/${f}/${c.id}/summary`}quicksearchSelected(c){let f=c.target.value;this.searchQuery="",this.router.navigate([f])}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(R.ghc),t.Y36(n.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,f){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(ae){return f.searchQuery=ae})("ngModelChange",function(){return f.refresh()})("keyup.enter",function(ae){return f.quicksearchSelected(ae)}),t.qZA(),t.qZA(),t.YNc(2,q,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,se,8,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const G=t.MAs(3),ae=t.MAs(5);t.Q6J("nzSuffix",G),t.xp6(1),t.Q6J("ngModel",f.searchQuery)("nzAutocomplete",ae),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,f.searchResults$))}},directives:[Q.gB,Q.ke,Q.Zp,ge.Fj,a,ge.JJ,ge.On,ee.Ls,ne,i.sg,n.yS,Ve],pipes:[d.fM],styles:[""]}),l})();var Ge=r(6042),_e=r(2643),Pe=r(2683),Fe=r(3640),Je=r(2160),ke=r(3762);let et=(()=>{class l{constructor(c){this.cookies=c,this.location=function We(l){return encodeURIComponent(l).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(Je.N))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(c,f){1&c&&(t.TgZ(0,"nz-list",0),t.TgZ(1,"nz-list-item"),t.TgZ(2,"form",1),t._UZ(3,"input",2),t.TgZ(4,"button",3),t._UZ(5,"i",4),t._uU(6," Sign In with a Google Account "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"nz-list-item"),t.TgZ(8,"form",1),t._UZ(9,"input",2),t.TgZ(10,"button",3),t._uU(11," Sign In with an ORCID Account "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"nz-list-item"),t.TgZ(13,"form",1),t._UZ(14,"input",2),t.TgZ(15,"button",3),t._UZ(16,"i",5),t._uU(17," Sign In with a Github Account "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(2),t.MGl("action","/api/auth/google_oauth2?origin=",f.location,"",t.LSH),t.xp6(1),t.s9C("value",f.xsrfToken),t.xp6(5),t.MGl("action","/api/auth/orcid?origin=",f.location,"",t.LSH),t.xp6(1),t.s9C("value",f.xsrfToken),t.xp6(4),t.MGl("action","/api/auth/github?origin=",f.location,"",t.LSH),t.xp6(1),t.s9C("value",f.xsrfToken))},directives:[ke.n_,ke.AA,Ge.ix,_e.dQ,Pe.w,ee.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),l})();function je(l,M){1&l&&(t.ynx(0),t.TgZ(1,"p",5),t._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),t.qZA(),t._UZ(3,"cvc-auth-options-list"),t.BQk())}function He(l,M){1&l&&t._uU(0," Sign In\n")}function ct(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){return t.CHM(c),t.oxw().handleCancel()}),t._uU(1,"Cancel"),t.qZA()}}let tt=(()=>{class l{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(c,f){if(1&c&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return f.showAuth()}),t.TgZ(1,"span"),t._uU(2,"Sign In"),t.qZA(),t.qZA(),t.TgZ(3,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return f.authVisible=ae})("nzOnCancel",function(){return f.handleCancel()}),t.YNc(4,je,4,0,"ng-container",2),t.qZA(),t.YNc(5,He,1,0,"ng-template",null,3,t.W1O),t.YNc(7,ct,2,0,"ng-template",null,4,t.W1O)),2&c){const G=t.MAs(6),ae=t.MAs(8);t.xp6(3),t.Q6J("nzVisible",f.authVisible)("nzTitle",G)("nzFooter",ae)}},directives:[Ge.ix,_e.dQ,Pe.w,Fe.du,Fe.Hf,et],styles:["[_nghost-%COMP%]{display:inline-block}"]}),l})();var g=r(4850),A=r(1059),C=r(8144),w=r(4401),ce=r(3677),Ce=r(7881),jt=r(7753);function mt(l,M){if(1&l&&(t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"i",10),t._UZ(3,"nz-badge",11),t.qZA(),t.BQk()),2&l){const c=M.ngrxLet;t.xp6(1),t.MGl("nzTooltipTitle","You have ",c," unread notification(s)."),t.xp6(2),t.Q6J("nzShowDot",c>0)}}function gt(l,M){if(1&l&&(t.TgZ(0,"a",7),t.YNc(1,mt,4,2,"ng-container",8),t.qZA()),2&l){const c=t.oxw().ngIf,f=t.oxw();t.MGl("routerLink","/users/",c.id,"/notifications"),t.xp6(1),t.Q6J("ngrxLet",f.unreadCount$)}}function ft(l,M){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"i",13),t._UZ(2,"i",14),t.TgZ(3,"nz-dropdown-menu",null,15),t.TgZ(5,"ul",16),t.TgZ(6,"li",17),t.TgZ(7,"a",18),t._uU(8," Add Evidence "),t.qZA(),t.qZA(),t.TgZ(9,"li",17),t.TgZ(10,"a",19),t._uU(11," Add Assertion "),t.qZA(),t.qZA(),t.TgZ(12,"li",17),t.TgZ(13,"a",19),t._uU(14," Suggest Source "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const c=t.MAs(4);t.Q6J("nzDropdownMenu",c)}}function ht(l,M){1&l&&t._UZ(0,"nz-badge",27),2&l&&t.Q6J("nzShowDot",!0)}function vt(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(3).coiUpdateModalVisible=!0}),t.TgZ(1,"nz-badge",28),t.TgZ(2,"strong"),t._uU(3," Please provide an updated conflict of interest statement. "),t.qZA(),t.qZA(),t.qZA()}2&l&&(t.xp6(1),t.Q6J("nzShowDot",!0))}function zt(l,M){1&l&&(t.TgZ(0,"li",17),t.TgZ(1,"a",29),t._uU(2," Admin Console "),t.qZA(),t.qZA())}function yt(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"cvc-user-avatar",20),t._UZ(2,"i",14),t.YNc(3,ht,1,1,"nz-badge",21),t.TgZ(4,"nz-dropdown-menu",null,22),t.TgZ(6,"ul",16),t.TgZ(7,"li",17),t._uU(8,"Signed In as "),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t._UZ(11,"li",23),t.YNc(12,vt,4,1,"li",24),t.TgZ(13,"li",17),t.TgZ(14,"a",7),t._uU(15," Your Profile "),t.qZA(),t.qZA(),t.YNc(16,zt,3,0,"li",25),t._UZ(17,"li",23),t.TgZ(18,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).signOut()}),t._uU(19,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const c=t.MAs(5),f=t.oxw().ngIf;t.Q6J("nzDropdownMenu",c),t.xp6(1),t.Q6J("user",f),t.xp6(2),t.Q6J("ngIf",f.invalidCoi),t.xp6(7),t.Oqu(f.username),t.xp6(2),t.Q6J("ngIf",f.invalidCoi),t.xp6(2),t.MGl("routerLink","/users/",f.id,""),t.xp6(2),t.Q6J("ngIf",f.isAdmin)}}function Ct(l,M){1&l&&(t.ynx(0),t.TgZ(1,"nz-space",4),t.YNc(2,gt,2,2,"a",5),t.YNc(3,ft,15,1,"div",6),t.YNc(4,yt,20,7,"div",6),t.qZA(),t.BQk())}function Tt(l,M){1&l&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function It(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"cvc-update-coi",30),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let _t=(()=>{class l{constructor(c,f){this.queryService=c,this.unreadCountGql=f,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0,{pollInterval:3e3}).valueChanges.pipe((0,g.U)(({data:G})=>G.notifications.unreadCount),(0,A.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a),t.Y36(R.Kmw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink",4,"nzSpaceItem"],["class","topMenuIcon","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"routerLink"],[4,"ngrxLet"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(c,f){if(1&c&&(t.YNc(0,Ct,5,0,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return f.coiUpdateModalVisible=ae})("nzOnCancel",function(){return f.handleCoiModalCancel()}),t.YNc(3,Tt,2,0,"ng-template",null,2,t.W1O),t.YNc(5,It,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const G=t.MAs(4),ae=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,f.viewer$)),t.xp6(2),t.Q6J("nzVisible",f.coiUpdateModalVisible)("nzContent",ae)("nzTitle",G)("nzFooter",null)}},directives:[i.O5,C.NU,C.$1,n.yS,d.eJ,V.SY,ee.Ls,w.x7,ce.cm,ce.RR,F.wO,F.r9,Ce.L,F.YV,Fe.du,jt.m],pipes:[d.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),l})();function Dt(l,M){1&l&&t._UZ(0,"img",62)}function Et(l,M){1&l&&t._UZ(0,"img",63)}function Kt(l,M){1&l&&t._UZ(0,"cvc-login-button")}function St(l,M){1&l&&t._UZ(0,"cvc-viewer-button")}const lt=function(l){return{"is-collapsed":l}},Nt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class l{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-layout"]],decls:137,vars:44,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"menu-group",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","file-add"],["routerLink","/source-suggestions"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-revision"],["routerLink","/revisions"],["nz-icon","","nzType","civic-comment"],["routerLink","/comments"],["nz-icon","","nzType","civic-flag"],["routerLink","/flags"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/pages/about"],["routerLink","/pages/help"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(c,f){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(ae){return f.isCollapsed=ae}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,Dt,1,0,"img",4),t.YNc(5,Et,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t._UZ(8,"i",8),t.TgZ(9,"span"),t.TgZ(10,"a",9),t._uU(11,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"li",7),t._UZ(13,"i",10),t.TgZ(14,"span"),t.TgZ(15,"a",11),t._uU(16,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"li",7),t._UZ(18,"i",12),t.TgZ(19,"span"),t.TgZ(20,"a",13),t._uU(21,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"li",7),t._UZ(23,"i",14),t.TgZ(24,"span"),t.TgZ(25,"a",15),t._uU(26,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"li",7),t._UZ(28,"i",16),t.TgZ(29,"span"),t.TgZ(30,"a",17),t._uU(31,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ul",6),t.TgZ(33,"li",7),t._UZ(34,"i",18),t.TgZ(35,"span"),t.TgZ(36,"a",19),t._uU(37,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"li",7),t._UZ(39,"i",20),t.TgZ(40,"span"),t.TgZ(41,"a",21),t._uU(42,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"li",7),t._UZ(44,"i",22),t.TgZ(45,"span"),t.TgZ(46,"a",23),t._uU(47,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"li",7),t._UZ(49,"i",24),t.TgZ(50,"span"),t.TgZ(51,"a",25),t._uU(52,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"li",7),t._UZ(54,"i",26),t.TgZ(55,"span"),t.TgZ(56,"a",27),t._uU(57,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"li",7),t._UZ(59,"i",28),t.TgZ(60,"span"),t.TgZ(61,"a",29),t._uU(62,"Source Suggestions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"li",7),t._UZ(64,"i",30),t.TgZ(65,"span"),t.TgZ(66,"a",31),t._uU(67,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"ul",6),t.TgZ(69,"li",7),t._UZ(70,"i",32),t.TgZ(71,"span"),t.TgZ(72,"a",33),t._uU(73,"Revisions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"li",7),t._UZ(75,"i",34),t.TgZ(76,"span"),t.TgZ(77,"a",35),t._uU(78,"Comments"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"li",7),t._UZ(80,"i",36),t.TgZ(81,"span"),t.TgZ(82,"a",37),t._uU(83,"Flags"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(84,"ul",6),t.TgZ(85,"li",7),t._UZ(86,"i",38),t.TgZ(87,"span"),t.TgZ(88,"a",39),t._uU(89,"Community"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"li",7),t._UZ(91,"i",40),t.TgZ(92,"span"),t.TgZ(93,"a",41),t._uU(94,"Users"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"li",7),t._UZ(96,"i",42),t.TgZ(97,"span"),t.TgZ(98,"a",43),t._uU(99,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(100,"ul",6),t.TgZ(101,"li",7),t._UZ(102,"i",44),t.TgZ(103,"span"),t.TgZ(104,"a",45),t._uU(105,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"li",7),t._UZ(107,"i",46),t.TgZ(108,"span"),t.TgZ(109,"a",47),t._uU(110,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(111,"nz-layout",48),t.TgZ(112,"nz-header"),t.TgZ(113,"div",49),t.TgZ(114,"div",50),t.TgZ(115,"span",51),t.NdJ("click",function(){return f.isCollapsed=!f.isCollapsed}),t._UZ(116,"i",52),t.qZA(),t.qZA(),t.TgZ(117,"div",53),t._UZ(118,"cvc-quicksearch"),t.qZA(),t.TgZ(119,"div",54),t.TgZ(120,"ul",55),t.TgZ(121,"li",56),t.TgZ(122,"a",57),t._uU(123,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(124,"li",56),t.TgZ(125,"a",58),t._uU(126,"Help"),t.qZA(),t.qZA(),t.TgZ(127,"li",56),t.TgZ(128,"a",59),t._uU(129,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(130,"div",60),t.YNc(131,Kt,1,0,"cvc-login-button",61),t.ALo(132,"async"),t.YNc(133,St,1,0,"cvc-viewer-button",61),t.ALo(134,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(135,"nz-content"),t._UZ(136,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",f.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(40,lt,f.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!f.isCollapsed),t.xp6(1),t.Q6J("ngIf",f.isCollapsed),t.xp6(1),t.Q6J("nzInlineCollapsed",f.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",f.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Variant Groups":""),t.xp6(5),t.Q6J("nzInlineCollapsed",f.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",f.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Source Suggestions":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzInlineCollapsed",f.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",f.isCollapsed?"Revisions":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Comments":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Flags":""),t.xp6(5),t.Q6J("nzInlineCollapsed",f.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",f.isCollapsed?"Community":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzInlineCollapsed",f.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",f.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("nzTooltipTitle",f.isCollapsed?"Statistics":""),t.xp6(5),t.Q6J("ngClass",t.VKq(42,lt,f.isCollapsed)),t.xp6(5),t.Q6J("nzType",f.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(132,36,f.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(134,38,f.signedIn$)))},directives:[U,p,n.yS,i.mk,i.O5,F.wO,F.r9,V.SY,ee.Ls,W,Te.SK,Te.t3,Se,tt,_t,pe,n.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.menu-group[_ngcontent-%COMP%]{margin-bottom:1.5em}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),l})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(4082),r.e(305),r.e(3533),r.e(2826),r.e(6156),r.e(1216),r.e(7177),r.e(4292),r.e(4258),r.e(6979),r.e(7820)]).then(r.bind(r,7820)).then(l=>l.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(4082),r.e(305),r.e(3533),r.e(6156),r.e(1216),r.e(4005),r.e(4702),r.e(8592),r.e(3271)]).then(r.bind(r,3553)).then(l=>l.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([r.e(1945),r.e(1854)]).then(r.bind(r,1854)).then(l=>l.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([r.e(1945),r.e(9946)]).then(r.bind(r,9946)).then(l=>l.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(3533),r.e(2826),r.e(6156),r.e(7177),r.e(4005),r.e(4702),r.e(9246),r.e(8592),r.e(1398)]).then(r.bind(r,1398)).then(l=>l.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(2826),r.e(7177),r.e(3253)]).then(r.bind(r,9450)).then(l=>l.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(6156)]).then(r.bind(r,7727)).then(l=>l.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([r.e(1945),r.e(3133)]).then(r.bind(r,3133)).then(l=>l.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(681)]).then(r.bind(r,681)).then(l=>l.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(3533),r.e(2826),r.e(6156),r.e(7177),r.e(4292),r.e(4005),r.e(3829),r.e(8592),r.e(4592)]).then(r.bind(r,4592)).then(l=>l.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(2826),r.e(7177),r.e(8978)]).then(r.bind(r,7180)).then(l=>l.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([r.e(1945),r.e(166)]).then(r.bind(r,166)).then(l=>l.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(4082),r.e(305),r.e(3533),r.e(6156),r.e(1216),r.e(4005),r.e(4702),r.e(8592),r.e(8836)]).then(r.bind(r,5943)).then(l=>l.SourcesModule),data:{breadcrumb:"Sources"}},{path:"source-suggestions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(4082),r.e(305),r.e(3533),r.e(6156),r.e(1216),r.e(4005),r.e(4039)]).then(r.bind(r,4039)).then(l=>l.SourceSuggestionsModule),data:{breadcrumb:"SourceSuggestions"}},{path:"users",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(3533),r.e(2826),r.e(6156),r.e(7177),r.e(4292),r.e(4005),r.e(3829),r.e(4184)]).then(r.bind(r,4184)).then(l=>l.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(4082),r.e(305),r.e(3533),r.e(2826),r.e(6156),r.e(1216),r.e(4258),r.e(8592),r.e(874)]).then(r.bind(r,8759)).then(l=>l.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(8592),r.e(4415)]).then(r.bind(r,6295)).then(l=>l.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(5551)]).then(r.bind(r,5951)).then(l=>l.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>r.e(6087).then(r.bind(r,6087)).then(l=>l.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6412)]).then(r.bind(r,6412)).then(l=>l.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(329)]).then(r.bind(r,329)).then(l=>l.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>r.e(229).then(r.bind(r,229)).then(l=>l.PagesModule),data:{breadcrumb:"Pages"}}]}];let Ot=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.Bz.forChild(Nt)],n.Bz]}),l})();var At=r(3618),Mt=r(5109),Lt=r(4546);let xt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,ge.u5,n.Bz,d.WG,Q.o7,Lt.U5,ee.PV,m]]}),l})(),Qt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,ee.PV,ke.Ph,Ge.sL]]}),l})(),Zt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,Ge.sL,Fe.Qp,Qt]]}),l})();var Vt=r(5473),wt=r(3473);let Yt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,d.WG,ce.b1,n.Bz,C.zf,ee.PV,w.mS,V.cg,Fe.Qp,Vt.H,wt.A]]}),l})(),kt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,Ot,ee.PV,Te.Jb,L,F.ip,V.cg,At.ZJ,Mt.s,Zt,Yt,xt]]}),l})()},6792:(Ne,le,r)=>{r.d(le,{g:()=>B});var i=r(353),t=r(3489),E=r(9312);function B(P,F=i.P){const ee=function n(P){return P instanceof Date&&!isNaN(+P)}(P)?+P-F.now():Math.abs(P);return te=>te.lift(new j(ee,F))}class j{constructor(F,k){this.delay=F,this.scheduler=k}call(F,k){return k.subscribe(new b(F,this.delay,this.scheduler))}}class b extends t.L{constructor(F,k,ee){super(F),this.delay=k,this.scheduler=ee,this.queue=[],this.active=!1,this.errored=!1}static dispatch(F){const k=F.source,ee=k.queue,te=F.scheduler,de=F.destination;for(;ee.length>0&&ee[0].time-te.now()<=0;)ee.shift().notification.observe(de);if(ee.length>0){const fe=Math.max(0,ee[0].time-te.now());this.schedule(F,fe)}else this.unsubscribe(),k.active=!1}_schedule(F){this.active=!0,this.destination.add(F.schedule(b.dispatch,this.delay,{source:this,destination:this.destination,scheduler:F}))}scheduleNotification(F){if(!0===this.errored)return;const k=this.scheduler,ee=new X(k.now()+this.delay,F);this.queue.push(ee),!1===this.active&&this._schedule(k)}_next(F){this.scheduleNotification(E.P.createNext(F))}_error(F){this.errored=!0,this.queue=[],this.destination.error(F),this.unsubscribe()}_complete(){this.scheduleNotification(E.P.createComplete()),this.unsubscribe()}}class X{constructor(F,k){this.time=F,this.notification=k}}},373:(Ne,le,r)=>{r.d(le,{j:()=>n});var i=r(4850);function n(...E){const B=E.length;if(0===B)throw new Error("list of properties cannot be empty.");return j=>(0,i.U)(function t(E,B){return b=>{let X=b;for(let P=0;P<B;P++){const F=null!=X?X[E[P]]:void 0;if(void 0===F)return;X=F}return X}}(E,B))(j)}},6699:(Ne,le,r)=>{r.d(le,{Dz:()=>fe,Rt:()=>he});var i=r(655),n=r(5e3),t=r(9439),E=r(1721),B=r(925),j=r(9808),b=r(647),X=r(226);const P=["textEl"];function F(K,Z){if(1&K&&n._UZ(0,"i",3),2&K){const y=n.oxw();n.Q6J("nzType",y.nzIcon)}}function k(K,Z){if(1&K){const y=n.EpF();n.TgZ(0,"img",4),n.NdJ("error",function(_){return n.CHM(y),n.oxw().imgError(_)}),n.qZA()}if(2&K){const y=n.oxw();n.Q6J("src",y.nzSrc,n.LSH),n.uIk("srcset",y.nzSrcSet,n.LSH)("alt",y.nzAlt)}}function ee(K,Z){if(1&K&&(n.TgZ(0,"span",5,6),n._uU(2),n.qZA()),2&K){const y=n.oxw();n.Q6J("ngStyle",y.textStyles),n.xp6(2),n.Oqu(y.nzText)}}let fe=(()=>{class K{constructor(y,x,_,O){this.nzConfigService=y,this.elementRef=x,this.cdr=_,this.platform=O,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new n.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(y){this.nzError.emit(y),y.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const y=this.textEl.nativeElement.offsetWidth,x=this.el.getBoundingClientRect().width,_=2*this.nzGap<x?2*this.nzGap:8;this.textStyles={transform:`scale(${x-_<y?(x-_)/y:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return K.\u0275fac=function(y){return new(y||K)(n.Y36(t.jY),n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(B.t4))},K.\u0275cmp=n.Xpm({type:K,selectors:[["nz-avatar"]],viewQuery:function(y,x){if(1&y&&n.Gf(P,5),2&y){let _;n.iGM(_=n.CRH())&&(x.textEl=_.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(y,x){2&y&&(n.Udp("width",x.customSize)("height",x.customSize)("line-height",x.customSize)("font-size",x.hasIcon&&x.customSize?x.nzSize/2:null,"px"),n.ekj("ant-avatar-lg","large"===x.nzSize)("ant-avatar-sm","small"===x.nzSize)("ant-avatar-square","square"===x.nzShape)("ant-avatar-circle","circle"===x.nzShape)("ant-avatar-icon",x.nzIcon)("ant-avatar-image",x.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[n.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(y,x){1&y&&(n.YNc(0,F,1,1,"i",0),n.YNc(1,k,1,3,"img",1),n.YNc(2,ee,3,2,"span",2)),2&y&&(n.Q6J("ngIf",x.nzIcon&&x.hasIcon),n.xp6(1),n.Q6J("ngIf",x.nzSrc&&x.hasSrc),n.xp6(1),n.Q6J("ngIf",x.nzText&&x.hasText))},directives:[j.O5,b.Ls,j.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,t.oS)()],K.prototype,"nzShape",void 0),(0,i.gn)([(0,t.oS)()],K.prototype,"nzSize",void 0),(0,i.gn)([(0,t.oS)(),(0,E.Rn)()],K.prototype,"nzGap",void 0),K})(),he=(()=>{class K{}return K.\u0275fac=function(y){return new(y||K)},K.\u0275mod=n.oAB({type:K}),K.\u0275inj=n.cJS({imports:[[X.vT,j.ez,b.PV,B.ud]]}),K})()},4401:(Ne,le,r)=>{r.d(le,{x7:()=>ue,mS:()=>J,F9:()=>W});var i=r(655),n=r(5e3),t=r(8929),E=r(7625),B=r(8076),j=r(9439),b=r(1721),X=r(226),P=r(4832),F=r(9808),k=r(969),ee=r(7144);function te(p,U){if(1&p&&(n.TgZ(0,"p",6),n._uU(1),n.qZA()),2&p){const L=U.$implicit,V=n.oxw(2).index,Te=n.oxw(2);n.ekj("current",L===Te.countArray[V]),n.xp6(1),n.hij(" ",L," ")}}function de(p,U){if(1&p&&(n.ynx(0),n.YNc(1,te,2,3,"p",5),n.BQk()),2&p){const L=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",L.countSingleArray)}}function fe(p,U){if(1&p&&(n.TgZ(0,"span",3),n.YNc(1,de,2,1,"ng-container",4),n.qZA()),2&p){const L=U.index,V=n.oxw(2);n.Udp("transform","translateY("+100*-V.countArray[L]+"%)"),n.Q6J("nzNoAnimation",V.noAnimation),n.xp6(1),n.Q6J("ngIf",!V.nzDot&&void 0!==V.countArray[L])}}function me(p,U){if(1&p&&(n.ynx(0),n.YNc(1,fe,2,4,"span",2),n.BQk()),2&p){const L=n.oxw();n.xp6(1),n.Q6J("ngForOf",L.maxNumberArray)}}function he(p,U){if(1&p&&n._uU(0),2&p){const L=n.oxw();n.hij("",L.nzOverflowCount,"+")}}function K(p,U){if(1&p&&(n.ynx(0),n._uU(1),n.BQk()),2&p){const L=n.oxw(2);n.xp6(1),n.Oqu(L.nzText)}}function Z(p,U){if(1&p&&(n.ynx(0),n._UZ(1,"span",2),n.TgZ(2,"span",3),n.YNc(3,K,2,1,"ng-container",1),n.qZA(),n.BQk()),2&p){const L=n.oxw();n.xp6(1),n.Gre("ant-badge-status-dot ant-badge-status-",L.nzStatus||L.presetColor,""),n.Udp("background",!L.presetColor&&L.nzColor),n.Q6J("ngStyle",L.nzStyle),n.xp6(2),n.Q6J("nzStringTemplateOutlet",L.nzText)}}function y(p,U){if(1&p&&n._UZ(0,"nz-badge-sup",5),2&p){const L=n.oxw(2);n.Q6J("nzOffset",L.nzOffset)("nzTitle",L.nzTitle)("nzStyle",L.nzStyle)("nzDot",L.nzDot)("nzOverflowCount",L.nzOverflowCount)("disableAnimation",!!(L.nzStandalone||L.nzStatus||L.nzColor||null!=L.noAnimation&&L.noAnimation.nzNoAnimation))("nzCount",L.nzCount)("noAnimation",!(null==L.noAnimation||!L.noAnimation.nzNoAnimation))}}function x(p,U){if(1&p&&(n.ynx(0),n.YNc(1,y,1,8,"nz-badge-sup",4),n.BQk()),2&p){const L=n.oxw();n.xp6(1),n.Q6J("ngIf",L.showSup)}}const _=["*"];function O(p,U){if(1&p&&(n.ynx(0),n._uU(1),n.BQk()),2&p){const L=n.oxw();n.xp6(1),n.Oqu(L.nzText)}}const re=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let ze=(()=>{class p{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(L){const{nzOverflowCount:V,nzCount:Te}=L;Te&&"number"==typeof Te.currentValue&&(this.count=Math.max(0,Te.currentValue),this.countArray=this.count.toString().split("").map(R=>+R)),V&&this.generateMaxNumberArray()}}return p.\u0275fac=function(L){return new(L||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(L,V){2&L&&(n.uIk("title",null===V.nzTitle?"":V.nzTitle||V.nzCount),n.d8E("@.disabled",V.disableAnimation)("@zoomBadgeMotion",void 0),n.Akn(V.nzStyle),n.Udp("right",V.nzOffset&&V.nzOffset[0]?-V.nzOffset[0]:null,"px")("margin-top",V.nzOffset&&V.nzOffset[1]?V.nzOffset[1]:null,"px"),n.ekj("ant-badge-count",!V.nzDot)("ant-badge-dot",V.nzDot)("ant-badge-multiple-words",V.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[n.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(L,V){if(1&L&&(n.YNc(0,me,2,1,"ng-container",0),n.YNc(1,he,1,1,"ng-template",null,1,n.W1O)),2&L){const Te=n.MAs(2);n.Q6J("ngIf",V.count<=V.nzOverflowCount)("ngIfElse",Te)}},directives:[F.O5,F.sg,P.P],encapsulation:2,data:{animation:[B.Ev]},changeDetection:0}),p})(),ue=(()=>{class p{constructor(L,V,Te,R,oe,Q){this.nzConfigService=L,this.renderer=V,this.cdr=Te,this.elementRef=R,this.directionality=oe,this.noAnimation=Q,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var L;null===(L=this.directionality.change)||void 0===L||L.pipe((0,E.R)(this.destroy$)).subscribe(V=>{this.dir=V,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(L){const{nzColor:V,nzShowDot:Te,nzDot:R,nzCount:oe,nzShowZero:Q}=L;V&&(this.presetColor=this.nzColor&&-1!==re.indexOf(this.nzColor)?this.nzColor:null),(Te||R||oe||Q)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(L){return new(L||p)(n.Y36(j.jY),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(X.Is,8),n.Y36(P.P,9))},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(L,V){2&L&&n.ekj("ant-badge-status",V.nzStatus)("ant-badge-not-a-wrapper",!!(V.nzStandalone||V.nzStatus||V.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[n.TTD],ngContentSelectors:_,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(L,V){1&L&&(n.F$t(),n.YNc(0,Z,4,7,"ng-container",0),n.Hsn(1),n.YNc(2,x,2,1,"ng-container",1)),2&L&&(n.Q6J("ngIf",V.nzStatus||V.nzColor),n.xp6(2),n.Q6J("nzStringTemplateOutlet",V.nzCount))},directives:[ze,F.O5,F.PC,k.f],encapsulation:2,data:{animation:[B.Ev]},changeDetection:0}),(0,i.gn)([(0,b.yF)()],p.prototype,"nzShowZero",void 0),(0,i.gn)([(0,b.yF)()],p.prototype,"nzShowDot",void 0),(0,i.gn)([(0,b.yF)()],p.prototype,"nzStandalone",void 0),(0,i.gn)([(0,b.yF)()],p.prototype,"nzDot",void 0),(0,i.gn)([(0,j.oS)()],p.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,j.oS)()],p.prototype,"nzColor",void 0),p})(),W=(()=>{class p{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(L){const{nzColor:V}=L;V&&(this.presetColor=this.nzColor&&-1!==re.indexOf(this.nzColor)?this.nzColor:null)}}return p.\u0275fac=function(L){return new(L||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[n.TTD],ngContentSelectors:_,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(L,V){1&L&&(n.F$t(),n.Hsn(0),n.TgZ(1,"div",0),n.YNc(2,O,2,1,"ng-container",1),n._UZ(3,"div",2),n.qZA()),2&L&&(n.xp6(1),n.Tol(V.presetColor&&"ant-ribbon-color-"+V.presetColor),n.Udp("background-color",!V.presetColor&&V.nzColor),n.ekj("ant-ribbon-placement-end","end"===V.nzPlacement)("ant-ribbon-placement-start","start"===V.nzPlacement),n.xp6(1),n.Q6J("nzStringTemplateOutlet",V.nzText),n.xp6(1),n.Udp("color",!V.presetColor&&V.nzColor))},directives:[k.f],encapsulation:2,changeDetection:0}),p})(),J=(()=>{class p{}return p.\u0275fac=function(L){return new(L||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[[X.vT,F.ez,ee.Q8,k.T,P.g]]}),p})()},7484:(Ne,le,r)=>{r.d(le,{bd:()=>Oe,l7:()=>Ae,vh:()=>Me,_i:()=>oe});var i=r(655),n=r(5e3),t=r(1721),E=r(8929),B=r(7625),j=r(9439),b=r(226),X=r(9808),P=r(969);function F(N,ie){1&N&&n.Hsn(0)}const k=["*"];function ee(N,ie){1&N&&(n.TgZ(0,"div",4),n._UZ(1,"div",5),n.qZA()),2&N&&n.Q6J("ngClass",ie.$implicit)}function te(N,ie){if(1&N&&(n.TgZ(0,"div",2),n.YNc(1,ee,2,1,"div",3),n.qZA()),2&N){const D=ie.$implicit;n.xp6(1),n.Q6J("ngForOf",D)}}function de(N,ie){if(1&N&&(n.ynx(0),n._uU(1),n.BQk()),2&N){const D=n.oxw(3);n.xp6(1),n.Oqu(D.nzTitle)}}function fe(N,ie){if(1&N&&(n.TgZ(0,"div",11),n.YNc(1,de,2,1,"ng-container",12),n.qZA()),2&N){const D=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function me(N,ie){if(1&N&&(n.ynx(0),n._uU(1),n.BQk()),2&N){const D=n.oxw(3);n.xp6(1),n.Oqu(D.nzExtra)}}function he(N,ie){if(1&N&&(n.TgZ(0,"div",13),n.YNc(1,me,2,1,"ng-container",12),n.qZA()),2&N){const D=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function K(N,ie){}function Z(N,ie){if(1&N&&(n.ynx(0),n.YNc(1,K,0,0,"ng-template",14),n.BQk()),2&N){const D=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",D.listOfNzCardTabComponent.template)}}function y(N,ie){if(1&N&&(n.TgZ(0,"div",6),n.TgZ(1,"div",7),n.YNc(2,fe,2,1,"div",8),n.YNc(3,he,2,1,"div",9),n.qZA(),n.YNc(4,Z,2,1,"ng-container",10),n.qZA()),2&N){const D=n.oxw();n.xp6(2),n.Q6J("ngIf",D.nzTitle),n.xp6(1),n.Q6J("ngIf",D.nzExtra),n.xp6(1),n.Q6J("ngIf",D.listOfNzCardTabComponent)}}function x(N,ie){}function _(N,ie){if(1&N&&(n.TgZ(0,"div",15),n.YNc(1,x,0,0,"ng-template",14),n.qZA()),2&N){const D=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",D.nzCover)}}function O(N,ie){1&N&&(n.ynx(0),n.Hsn(1),n.BQk())}function re(N,ie){1&N&&n._UZ(0,"nz-card-loading")}function ze(N,ie){}function pe(N,ie){if(1&N&&(n.TgZ(0,"li"),n.TgZ(1,"span"),n.YNc(2,ze,0,0,"ng-template",14),n.qZA(),n.qZA()),2&N){const D=ie.$implicit,H=n.oxw(2);n.Udp("width",100/H.nzActions.length,"%"),n.xp6(2),n.Q6J("ngTemplateOutlet",D)}}function ue(N,ie){if(1&N&&(n.TgZ(0,"ul",16),n.YNc(1,pe,3,3,"li",17),n.qZA()),2&N){const D=n.oxw();n.xp6(1),n.Q6J("ngForOf",D.nzActions)}}function W(N,ie){}function J(N,ie){if(1&N&&(n.TgZ(0,"div",2),n.YNc(1,W,0,0,"ng-template",3),n.qZA()),2&N){const D=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",D.nzAvatar)}}function p(N,ie){if(1&N&&(n.ynx(0),n._uU(1),n.BQk()),2&N){const D=n.oxw(3);n.xp6(1),n.Oqu(D.nzTitle)}}function U(N,ie){if(1&N&&(n.TgZ(0,"div",7),n.YNc(1,p,2,1,"ng-container",8),n.qZA()),2&N){const D=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function L(N,ie){if(1&N&&(n.ynx(0),n._uU(1),n.BQk()),2&N){const D=n.oxw(3);n.xp6(1),n.Oqu(D.nzDescription)}}function V(N,ie){if(1&N&&(n.TgZ(0,"div",9),n.YNc(1,L,2,1,"ng-container",8),n.qZA()),2&N){const D=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",D.nzDescription)}}function Te(N,ie){if(1&N&&(n.TgZ(0,"div",4),n.YNc(1,U,2,1,"div",5),n.YNc(2,V,2,1,"div",6),n.qZA()),2&N){const D=n.oxw();n.xp6(1),n.Q6J("ngIf",D.nzTitle),n.xp6(1),n.Q6J("ngIf",D.nzDescription)}}let R=(()=>{class N{constructor(){this.nzHoverable=!0}}return N.\u0275fac=function(D){return new(D||N)},N.\u0275dir=n.lG2({type:N,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(D,H){2&D&&n.ekj("ant-card-hoverable",H.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,t.yF)()],N.prototype,"nzHoverable",void 0),N})(),oe=(()=>{class N{}return N.\u0275fac=function(D){return new(D||N)},N.\u0275cmp=n.Xpm({type:N,selectors:[["nz-card-tab"]],viewQuery:function(D,H){if(1&D&&n.Gf(n.Rgc,7),2&D){let Y;n.iGM(Y=n.CRH())&&(H.template=Y.first)}},exportAs:["nzCardTab"],ngContentSelectors:k,decls:1,vars:0,template:function(D,H){1&D&&(n.F$t(),n.YNc(0,F,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),N})(),Q=(()=>{class N{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return N.\u0275fac=function(D){return new(D||N)},N.\u0275cmp=n.Xpm({type:N,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(D,H){1&D&&(n.TgZ(0,"div",0),n.YNc(1,te,2,1,"div",1),n.qZA()),2&D&&(n.xp6(1),n.Q6J("ngForOf",H.listOfLoading))},directives:[X.sg,X.mk],encapsulation:2,changeDetection:0}),N})(),Oe=(()=>{class N{constructor(D,H,Y){this.nzConfigService=D,this.cdr=H,this.directionality=Y,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new E.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,B.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var D;null===(D=this.directionality.change)||void 0===D||D.pipe((0,B.R)(this.destroy$)).subscribe(H=>{this.dir=H,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(D){return new(D||N)(n.Y36(j.jY),n.Y36(n.sBO),n.Y36(b.Is,8))},N.\u0275cmp=n.Xpm({type:N,selectors:[["nz-card"]],contentQueries:function(D,H,Y){if(1&D&&(n.Suo(Y,oe,5),n.Suo(Y,R,4)),2&D){let ye;n.iGM(ye=n.CRH())&&(H.listOfNzCardTabComponent=ye.first),n.iGM(ye=n.CRH())&&(H.listOfNzCardGridDirective=ye)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(D,H){2&D&&n.ekj("ant-card-loading",H.nzLoading)("ant-card-bordered",!1===H.nzBorderless&&H.nzBordered)("ant-card-hoverable",H.nzHoverable)("ant-card-small","small"===H.nzSize)("ant-card-contain-grid",H.listOfNzCardGridDirective&&H.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===H.nzType)("ant-card-contain-tabs",!!H.listOfNzCardTabComponent)("ant-card-rtl","rtl"===H.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:k,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(D,H){if(1&D&&(n.F$t(),n.YNc(0,y,5,3,"div",0),n.YNc(1,_,2,1,"div",1),n.TgZ(2,"div",2),n.YNc(3,O,2,0,"ng-container",3),n.YNc(4,re,1,0,"ng-template",null,4,n.W1O),n.qZA(),n.YNc(6,ue,2,1,"ul",5)),2&D){const Y=n.MAs(5);n.Q6J("ngIf",H.nzTitle||H.nzExtra||H.listOfNzCardTabComponent),n.xp6(1),n.Q6J("ngIf",H.nzCover),n.xp6(1),n.Q6J("ngStyle",H.nzBodyStyle),n.xp6(1),n.Q6J("ngIf",!H.nzLoading)("ngIfElse",Y),n.xp6(3),n.Q6J("ngIf",H.nzActions.length)}},directives:[Q,X.O5,P.f,X.tP,X.PC,X.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,j.oS)(),(0,t.yF)()],N.prototype,"nzBordered",void 0),(0,i.gn)([(0,j.oS)(),(0,t.yF)()],N.prototype,"nzBorderless",void 0),(0,i.gn)([(0,t.yF)()],N.prototype,"nzLoading",void 0),(0,i.gn)([(0,j.oS)(),(0,t.yF)()],N.prototype,"nzHoverable",void 0),(0,i.gn)([(0,j.oS)()],N.prototype,"nzSize",void 0),N})(),Ae=(()=>{class N{constructor(){this.nzTitle=null,this.nzDescription=null,this.nzAvatar=null}}return N.\u0275fac=function(D){return new(D||N)},N.\u0275cmp=n.Xpm({type:N,selectors:[["nz-card-meta"]],hostAttrs:[1,"ant-card-meta"],inputs:{nzTitle:"nzTitle",nzDescription:"nzDescription",nzAvatar:"nzAvatar"},exportAs:["nzCardMeta"],decls:2,vars:2,consts:[["class","ant-card-meta-avatar",4,"ngIf"],["class","ant-card-meta-detail",4,"ngIf"],[1,"ant-card-meta-avatar"],[3,"ngTemplateOutlet"],[1,"ant-card-meta-detail"],["class","ant-card-meta-title",4,"ngIf"],["class","ant-card-meta-description",4,"ngIf"],[1,"ant-card-meta-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-meta-description"]],template:function(D,H){1&D&&(n.YNc(0,J,2,1,"div",0),n.YNc(1,Te,3,2,"div",1)),2&D&&(n.Q6J("ngIf",H.nzAvatar),n.xp6(1),n.Q6J("ngIf",H.nzTitle||H.nzDescription))},directives:[X.O5,X.tP,P.f],encapsulation:2,changeDetection:0}),N})(),Me=(()=>{class N{}return N.\u0275fac=function(D){return new(D||N)},N.\u0275mod=n.oAB({type:N}),N.\u0275inj=n.cJS({imports:[[X.ez,P.T],b.vT]}),N})()},3677:(Ne,le,r)=>{r.d(le,{cm:()=>oe,b1:()=>Me,wA:()=>Oe,RR:()=>Ae});var i=r(655),n=r(1159),t=r(7429),E=r(5e3),B=r(8929),j=r(591),b=r(6787),X=r(3753),P=r(8896),F=r(3426),k=r(7604),ee=r(4850),te=r(7545),de=r(2198),fe=r(7138),me=r(5778),he=r(7625),K=r(9439),Z=r(6950),y=r(1721),x=r(2845),_=r(925),O=r(226),re=r(9808),ze=r(3075),pe=r(6042),ue=r(4832),W=r(969),J=r(647),p=r(4219),U=r(8076);function L(D,H){if(1&D){const Y=E.EpF();E.TgZ(0,"div",0),E.NdJ("@slideMotion.done",function(De){return E.CHM(Y),E.oxw().onAnimationEvent(De)})("mouseenter",function(){return E.CHM(Y),E.oxw().setMouseState(!0)})("mouseleave",function(){return E.CHM(Y),E.oxw().setMouseState(!1)}),E.Hsn(1),E.qZA()}if(2&D){const Y=E.oxw();E.ekj("ant-dropdown-rtl","rtl"===Y.dir),E.Q6J("ngClass",Y.nzOverlayClassName)("ngStyle",Y.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==Y.noAnimation?null:Y.noAnimation.nzNoAnimation)("nzNoAnimation",null==Y.noAnimation?null:Y.noAnimation.nzNoAnimation)}}const V=["*"],R=[Z.yW.bottomLeft,Z.yW.bottomRight,Z.yW.topRight,Z.yW.topLeft];let oe=(()=>{class D{constructor(Y,ye,De,Le,$e,Ee){this.nzConfigService=Y,this.elementRef=ye,this.overlay=De,this.renderer=Le,this.viewContainerRef=$e,this.platform=Ee,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new B.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new j.X(!1),this.nzTrigger$=new j.X("hover"),this.overlayClose$=new B.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new E.vpe}setDropdownMenuValue(Y,ye){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(Y,ye)}ngAfterViewInit(){if(this.nzDropdownMenu){const Y=this.elementRef.nativeElement,ye=(0,b.T)((0,X.R)(Y,"mouseenter").pipe((0,k.h)(!0)),(0,X.R)(Y,"mouseleave").pipe((0,k.h)(!1))),Le=(0,b.T)(this.nzDropdownMenu.mouseState$,ye),$e=(0,X.R)(Y,"click").pipe((0,ee.U)(()=>!this.nzVisible)),Ee=this.nzTrigger$.pipe((0,te.w)(Ie=>"hover"===Ie?Le:"click"===Ie?$e:P.E)),Be=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,de.h)(()=>this.nzClickHide),(0,k.h)(!1)),xe=(0,b.T)(Ee,Be,this.overlayClose$).pipe((0,de.h)(()=>!this.nzDisabled)),Qe=(0,b.T)(this.inputVisible$,xe);(0,F.aj)([Qe,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,ee.U)(([Ie,Ze])=>Ie||Ze),(0,fe.e)(150),(0,me.x)(),(0,de.h)(()=>this.platform.isBrowser),(0,he.R)(this.destroy$)).subscribe(Ie=>{const Re=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:Y).getBoundingClientRect().width;this.nzVisible!==Ie&&this.nzVisibleChange.emit(Ie),this.nzVisible=Ie,Ie?(this.overlayRef?this.overlayRef.getConfig().minWidth=Re:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Re,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,b.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,de.h)(we=>!this.elementRef.nativeElement.contains(we.target))),this.overlayRef.keydownEvents().pipe((0,de.h)(we=>we.keyCode===n.hY&&!(0,n.Vb)(we)))).pipe((0,he.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([Z.yW[this.nzPlacement],...R]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,he.R)(this.destroy$)).subscribe(Ie=>{"void"===Ie.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(Y){const{nzVisible:ye,nzDisabled:De,nzOverlayClassName:Le,nzOverlayStyle:$e,nzTrigger:Ee}=Y;if(Ee&&this.nzTrigger$.next(this.nzTrigger),ye&&this.inputVisible$.next(this.nzVisible),De){const Be=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Be,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Be,"disabled")}Le&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),$e&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return D.\u0275fac=function(Y){return new(Y||D)(E.Y36(K.jY),E.Y36(E.SBq),E.Y36(x.aV),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(_.t4))},D.\u0275dir=E.lG2({type:D,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[E.TTD]}),(0,i.gn)([(0,K.oS)(),(0,y.yF)()],D.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,y.yF)()],D.prototype,"nzClickHide",void 0),(0,i.gn)([(0,y.yF)()],D.prototype,"nzDisabled",void 0),(0,i.gn)([(0,y.yF)()],D.prototype,"nzVisible",void 0),D})(),Q=(()=>{class D{}return D.\u0275fac=function(Y){return new(Y||D)},D.\u0275mod=E.oAB({type:D}),D.\u0275inj=E.cJS({}),D})(),Oe=(()=>{class D{constructor(Y,ye,De){this.renderer=Y,this.nzButtonGroupComponent=ye,this.elementRef=De}ngAfterViewInit(){const Y=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&Y&&this.renderer.addClass(Y,"ant-dropdown-button")}}return D.\u0275fac=function(Y){return new(Y||D)(E.Y36(E.Qsj),E.Y36(pe.fY,9),E.Y36(E.SBq))},D.\u0275dir=E.lG2({type:D,selectors:[["","nz-button","","nz-dropdown",""]]}),D})(),Ae=(()=>{class D{constructor(Y,ye,De,Le,$e,Ee,Be){this.cdr=Y,this.elementRef=ye,this.renderer=De,this.viewContainerRef=Le,this.nzMenuService=$e,this.directionality=Ee,this.noAnimation=Be,this.mouseState$=new j.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new E.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new B.xQ}onAnimationEvent(Y){this.animationStateChange$.emit(Y)}setMouseState(Y){this.mouseState$.next(Y)}setValue(Y,ye){this[Y]=ye,this.cdr.markForCheck()}ngOnInit(){var Y;null===(Y=this.directionality.change)||void 0===Y||Y.pipe((0,he.R)(this.destroy$)).subscribe(ye=>{this.dir=ye,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return D.\u0275fac=function(Y){return new(Y||D)(E.Y36(E.sBO),E.Y36(E.SBq),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(p.hl),E.Y36(O.Is,8),E.Y36(ue.P,9))},D.\u0275cmp=E.Xpm({type:D,selectors:[["nz-dropdown-menu"]],viewQuery:function(Y,ye){if(1&Y&&E.Gf(E.Rgc,7),2&Y){let De;E.iGM(De=E.CRH())&&(ye.templateRef=De.first)}},exportAs:["nzDropdownMenu"],features:[E._Bn([p.hl,{provide:p.Cc,useValue:!0}])],ngContentSelectors:V,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(Y,ye){1&Y&&(E.F$t(),E.YNc(0,L,2,7,"ng-template"))},directives:[re.mk,re.PC,ue.P],encapsulation:2,data:{animation:[U.mF]},changeDetection:0}),D})(),Me=(()=>{class D{}return D.\u0275fac=function(Y){return new(Y||D)},D.\u0275mod=E.oAB({type:D}),D.\u0275inj=E.cJS({imports:[[O.vT,re.ez,x.U8,ze.u5,pe.sL,p.ip,J.PV,ue.g,_.ud,Z.e4,Q,W.T],p.ip]}),D})();new x.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new x.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new x.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new x.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},685:(Ne,le,r)=>{r.d(le,{gB:()=>V,p9:()=>U,Xo:()=>Te});var i=r(7429),n=r(5e3),t=r(8929),E=r(7625),B=r(1059),j=r(9439),b=r(4170),X=r(9808),P=r(969),F=r(226);function k(R,oe){if(1&R&&(n.ynx(0),n._UZ(1,"img",5),n.BQk()),2&R){const Q=n.oxw(2);n.xp6(1),n.Q6J("src",Q.nzNotFoundImage,n.LSH)("alt",Q.isContentString?Q.nzNotFoundContent:"empty")}}function ee(R,oe){if(1&R&&(n.ynx(0),n.YNc(1,k,2,2,"ng-container",4),n.BQk()),2&R){const Q=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",Q.nzNotFoundImage)}}function te(R,oe){1&R&&n._UZ(0,"nz-empty-default")}function de(R,oe){1&R&&n._UZ(0,"nz-empty-simple")}function fe(R,oe){if(1&R&&(n.ynx(0),n._uU(1),n.BQk()),2&R){const Q=n.oxw(2);n.xp6(1),n.hij(" ",Q.isContentString?Q.nzNotFoundContent:Q.locale.description," ")}}function me(R,oe){if(1&R&&(n.TgZ(0,"p",6),n.YNc(1,fe,2,1,"ng-container",4),n.qZA()),2&R){const Q=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",Q.nzNotFoundContent)}}function he(R,oe){if(1&R&&(n.ynx(0),n._uU(1),n.BQk()),2&R){const Q=n.oxw(2);n.xp6(1),n.hij(" ",Q.nzNotFoundFooter," ")}}function K(R,oe){if(1&R&&(n.TgZ(0,"div",7),n.YNc(1,he,2,1,"ng-container",4),n.qZA()),2&R){const Q=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",Q.nzNotFoundFooter)}}function Z(R,oe){1&R&&n._UZ(0,"nz-empty",6),2&R&&n.Q6J("nzNotFoundImage","simple")}function y(R,oe){1&R&&n._UZ(0,"nz-empty",7),2&R&&n.Q6J("nzNotFoundImage","simple")}function x(R,oe){1&R&&n._UZ(0,"nz-empty")}function _(R,oe){if(1&R&&(n.ynx(0,2),n.YNc(1,Z,1,1,"nz-empty",3),n.YNc(2,y,1,1,"nz-empty",4),n.YNc(3,x,1,0,"nz-empty",5),n.BQk()),2&R){const Q=n.oxw();n.Q6J("ngSwitch",Q.size),n.xp6(1),n.Q6J("ngSwitchCase","normal"),n.xp6(1),n.Q6J("ngSwitchCase","small")}}function O(R,oe){}function re(R,oe){if(1&R&&n.YNc(0,O,0,0,"ng-template",8),2&R){const Q=n.oxw(2);n.Q6J("cdkPortalOutlet",Q.contentPortal)}}function ze(R,oe){if(1&R&&(n.ynx(0),n._uU(1),n.BQk()),2&R){const Q=n.oxw(2);n.xp6(1),n.hij(" ",Q.content," ")}}function pe(R,oe){if(1&R&&(n.ynx(0),n.YNc(1,re,1,1,void 0,1),n.YNc(2,ze,2,1,"ng-container",1),n.BQk()),2&R){const Q=n.oxw();n.xp6(1),n.Q6J("ngIf","string"!==Q.contentType),n.xp6(1),n.Q6J("ngIf","string"===Q.contentType)}}const ue=new n.OlP("nz-empty-component-name");let W=(()=>{class R{}return R.\u0275fac=function(Q){return new(Q||R)},R.\u0275cmp=n.Xpm({type:R,selectors:[["nz-empty-default"]],exportAs:["nzEmptyDefault"],decls:12,vars:0,consts:[["width","184","height","152","viewBox","0 0 184 152","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-default"],["fill","none","fill-rule","evenodd"],["transform","translate(24 31.67)"],["cx","67.797","cy","106.89","rx","67.797","ry","12.668",1,"ant-empty-img-default-ellipse"],["d","M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",1,"ant-empty-img-default-path-1"],["d","M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z","transform","translate(13.56)",1,"ant-empty-img-default-path-2"],["d","M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",1,"ant-empty-img-default-path-3"],["d","M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",1,"ant-empty-img-default-path-4"],["d","M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",1,"ant-empty-img-default-path-5"],["transform","translate(149.65 15.383)",1,"ant-empty-img-default-g"],["cx","20.654","cy","3.167","rx","2.849","ry","2.815"],["d","M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],template:function(Q,ge){1&Q&&(n.O4$(),n.TgZ(0,"svg",0),n.TgZ(1,"g",1),n.TgZ(2,"g",2),n._UZ(3,"ellipse",3),n._UZ(4,"path",4),n._UZ(5,"path",5),n._UZ(6,"path",6),n._UZ(7,"path",7),n.qZA(),n._UZ(8,"path",8),n.TgZ(9,"g",9),n._UZ(10,"ellipse",10),n._UZ(11,"path",11),n.qZA(),n.qZA(),n.qZA())},encapsulation:2,changeDetection:0}),R})(),J=(()=>{class R{}return R.\u0275fac=function(Q){return new(Q||R)},R.\u0275cmp=n.Xpm({type:R,selectors:[["nz-empty-simple"]],exportAs:["nzEmptySimple"],decls:6,vars:0,consts:[["width","64","height","41","viewBox","0 0 64 41","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-simple"],["transform","translate(0 1)","fill","none","fill-rule","evenodd"],["cx","32","cy","33","rx","32","ry","7",1,"ant-empty-img-simple-ellipse"],["fill-rule","nonzero",1,"ant-empty-img-simple-g"],["d","M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"],["d","M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",1,"ant-empty-img-simple-path"]],template:function(Q,ge){1&Q&&(n.O4$(),n.TgZ(0,"svg",0),n.TgZ(1,"g",1),n._UZ(2,"ellipse",2),n.TgZ(3,"g",3),n._UZ(4,"path",4),n._UZ(5,"path",5),n.qZA(),n.qZA(),n.qZA())},encapsulation:2,changeDetection:0}),R})();const p=["default","simple"];let U=(()=>{class R{constructor(Q,ge){this.i18n=Q,this.cdr=ge,this.nzNotFoundImage="default",this.isContentString=!1,this.isImageBuildIn=!0,this.destroy$=new t.xQ}ngOnChanges(Q){const{nzNotFoundContent:ge,nzNotFoundImage:Oe}=Q;if(ge&&(this.isContentString="string"==typeof ge.currentValue),Oe){const Ae=Oe.currentValue||"default";this.isImageBuildIn=p.findIndex(Me=>Me===Ae)>-1}}ngOnInit(){this.i18n.localeChange.pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Empty"),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return R.\u0275fac=function(Q){return new(Q||R)(n.Y36(b.wi),n.Y36(n.sBO))},R.\u0275cmp=n.Xpm({type:R,selectors:[["nz-empty"]],hostAttrs:[1,"ant-empty"],inputs:{nzNotFoundImage:"nzNotFoundImage",nzNotFoundContent:"nzNotFoundContent",nzNotFoundFooter:"nzNotFoundFooter"},exportAs:["nzEmpty"],features:[n.TTD],decls:6,vars:5,consts:[[1,"ant-empty-image"],[4,"ngIf"],["class","ant-empty-description",4,"ngIf"],["class","ant-empty-footer",4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"src","alt"],[1,"ant-empty-description"],[1,"ant-empty-footer"]],template:function(Q,ge){1&Q&&(n.TgZ(0,"div",0),n.YNc(1,ee,2,1,"ng-container",1),n.YNc(2,te,1,0,"nz-empty-default",1),n.YNc(3,de,1,0,"nz-empty-simple",1),n.qZA(),n.YNc(4,me,2,1,"p",2),n.YNc(5,K,2,1,"div",3)),2&Q&&(n.xp6(1),n.Q6J("ngIf",!ge.isImageBuildIn),n.xp6(1),n.Q6J("ngIf",ge.isImageBuildIn&&"simple"!==ge.nzNotFoundImage),n.xp6(1),n.Q6J("ngIf",ge.isImageBuildIn&&"simple"===ge.nzNotFoundImage),n.xp6(1),n.Q6J("ngIf",null!==ge.nzNotFoundContent),n.xp6(1),n.Q6J("ngIf",ge.nzNotFoundFooter))},directives:[W,J,X.O5,P.f],encapsulation:2,changeDetection:0}),R})(),V=(()=>{class R{constructor(Q,ge,Oe,Ae){this.configService=Q,this.viewContainerRef=ge,this.cdr=Oe,this.injector=Ae,this.contentType="string",this.size="",this.destroy$=new t.xQ}ngOnChanges(Q){Q.nzComponentName&&(this.size=function L(R){switch(R){case"table":case"list":return"normal";case"select":case"tree-select":case"cascader":case"transfer":return"small";default:return""}}(Q.nzComponentName.currentValue)),Q.specificContent&&!Q.specificContent.isFirstChange()&&(this.content=Q.specificContent.currentValue,this.renderEmpty())}ngOnInit(){this.subscribeDefaultEmptyContentChange()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}renderEmpty(){const Q=this.content;if("string"==typeof Q)this.contentType="string";else if(Q instanceof n.Rgc){const ge={$implicit:this.nzComponentName};this.contentType="template",this.contentPortal=new i.UE(Q,this.viewContainerRef,ge)}else if(Q instanceof n.DyG){const ge=n.zs3.create({parent:this.injector,providers:[{provide:ue,useValue:this.nzComponentName}]});this.contentType="component",this.contentPortal=new i.C5(Q,this.viewContainerRef,ge)}else this.contentType="string",this.contentPortal=void 0;this.cdr.detectChanges()}subscribeDefaultEmptyContentChange(){this.configService.getConfigChangeEventForComponent("empty").pipe((0,B.O)(!0),(0,E.R)(this.destroy$)).subscribe(()=>{this.content=this.specificContent||this.getUserDefaultEmptyContent(),this.renderEmpty()})}getUserDefaultEmptyContent(){return(this.configService.getConfigForComponent("empty")||{}).nzDefaultEmptyContent}}return R.\u0275fac=function(Q){return new(Q||R)(n.Y36(j.jY),n.Y36(n.s_b),n.Y36(n.sBO),n.Y36(n.zs3))},R.\u0275cmp=n.Xpm({type:R,selectors:[["nz-embed-empty"]],inputs:{nzComponentName:"nzComponentName",specificContent:"specificContent"},exportAs:["nzEmbedEmpty"],features:[n.TTD],decls:2,vars:2,consts:[[3,"ngSwitch",4,"ngIf"],[4,"ngIf"],[3,"ngSwitch"],["class","ant-empty-normal",3,"nzNotFoundImage",4,"ngSwitchCase"],["class","ant-empty-small",3,"nzNotFoundImage",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"ant-empty-normal",3,"nzNotFoundImage"],[1,"ant-empty-small",3,"nzNotFoundImage"],[3,"cdkPortalOutlet"]],template:function(Q,ge){1&Q&&(n.YNc(0,_,4,3,"ng-container",0),n.YNc(1,pe,3,2,"ng-container",1)),2&Q&&(n.Q6J("ngIf",!ge.content&&null!==ge.specificContent),n.xp6(1),n.Q6J("ngIf",ge.content))},directives:[U,X.O5,X.RF,X.n9,X.ED,i.Pl],encapsulation:2,changeDetection:0}),R})(),Te=(()=>{class R{}return R.\u0275fac=function(Q){return new(Q||R)},R.\u0275mod=n.oAB({type:R}),R.\u0275inj=n.cJS({imports:[[F.vT,X.ez,i.eL,P.T,b.YI]]}),R})()},3762:(Ne,le,r)=>{r.d(le,{n_:()=>je,I2:()=>Pe,t4:()=>Fe,AA:()=>He,Ph:()=>tt});var i=r(5e3),n=r(6699),t=r(9808),E=r(969),B=r(655),j=r(1721),b=r(8929),X=r(8514),P=r(1086),F=r(6787),k=r(591),ee=r(2986),te=r(7545),de=r(7625),fe=r(685),me=r(226),he=r(7525),K=r(1894);const Z=["*"];function U(g,A){1&g&&i.Hsn(0)}const L=["nz-list-item-actions",""];function V(g,A){}function Te(g,A){1&g&&i._UZ(0,"em",3)}function R(g,A){if(1&g&&(i.TgZ(0,"li"),i.YNc(1,V,0,0,"ng-template",1),i.YNc(2,Te,1,0,"em",2),i.qZA()),2&g){const C=A.$implicit,w=A.last;i.xp6(1),i.Q6J("ngTemplateOutlet",C),i.xp6(1),i.Q6J("ngIf",!w)}}function oe(g,A){}const Q=function(g,A){return{$implicit:g,index:A}};function ge(g,A){if(1&g&&(i.ynx(0),i.YNc(1,oe,0,0,"ng-template",9),i.BQk()),2&g){const C=A.$implicit,w=A.index,ce=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,Q,C,w))}}function Oe(g,A){if(1&g&&(i.TgZ(0,"div",7),i.YNc(1,ge,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&g){const C=i.oxw();i.xp6(1),i.Q6J("ngForOf",C.nzDataSource)}}function Ae(g,A){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const C=i.oxw(2);i.xp6(1),i.Oqu(C.nzHeader)}}function Me(g,A){if(1&g&&(i.TgZ(0,"nz-list-header"),i.YNc(1,Ae,2,1,"ng-container",10),i.qZA()),2&g){const C=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function N(g,A){1&g&&i._UZ(0,"div"),2&g&&i.Udp("min-height",53,"px")}function ie(g,A){}function D(g,A){if(1&g&&(i.TgZ(0,"div",13),i.YNc(1,ie,0,0,"ng-template",9),i.qZA()),2&g){const C=A.$implicit,w=A.index,ce=i.oxw(2);i.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,Q,C,w))}}function H(g,A){if(1&g&&(i.TgZ(0,"div",11),i.YNc(1,D,2,12,"div",12),i.qZA()),2&g){const C=i.oxw();i.Q6J("nzGutter",C.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",C.nzDataSource)}}function Y(g,A){if(1&g&&i._UZ(0,"nz-list-empty",14),2&g){const C=i.oxw();i.Q6J("nzNoResult",C.nzNoResult)}}function ye(g,A){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const C=i.oxw(2);i.xp6(1),i.Oqu(C.nzFooter)}}function De(g,A){if(1&g&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,ye,2,1,"ng-container",10),i.qZA()),2&g){const C=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Le(g,A){}function $e(g,A){}function Ee(g,A){if(1&g&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,$e,0,0,"ng-template",6),i.qZA()),2&g){const C=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzPagination)}}const Be=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],xe=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function Qe(g,A){if(1&g&&i._UZ(0,"ul",6),2&g){const C=i.oxw(2);i.Q6J("nzActions",C.nzActions)}}function Ie(g,A){if(1&g&&(i.YNc(0,Qe,1,1,"ul",5),i.Hsn(1)),2&g){const C=i.oxw();i.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Ze(g,A){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const C=i.oxw(3);i.xp6(1),i.Oqu(C.nzContent)}}function Re(g,A){if(1&g&&(i.ynx(0),i.YNc(1,Ze,2,1,"ng-container",8),i.BQk()),2&g){const C=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzContent)}}function we(g,A){if(1&g&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,Re,2,1,"ng-container",7)),2&g){const C=i.oxw();i.xp6(2),i.Q6J("ngIf",C.nzContent)}}function nt(g,A){1&g&&i.Hsn(0,3)}function it(g,A){}function qe(g,A){}function ot(g,A){}function T(g,A){}function rt(g,A){if(1&g&&(i.YNc(0,it,0,0,"ng-template",9),i.YNc(1,qe,0,0,"ng-template",9),i.YNc(2,ot,0,0,"ng-template",9),i.YNc(3,T,0,0,"ng-template",9)),2&g){const C=i.oxw(),w=i.MAs(3),ce=i.MAs(5),Ce=i.MAs(1);i.Q6J("ngTemplateOutlet",w),i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",ce),i.xp6(1),i.Q6J("ngTemplateOutlet",Ce)}}function st(g,A){}function at(g,A){}function dt(g,A){}function Ve(g,A){if(1&g&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,dt,0,0,"ng-template",9),i.qZA()),2&g){const C=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(g,A){}function h(g,A){if(1&g&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,st,0,0,"ng-template",9),i.YNc(3,at,0,0,"ng-template",9),i.qZA(),i.YNc(4,Ve,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&g){const C=i.oxw(),w=i.MAs(3),ce=i.MAs(1),Ce=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",w),i.xp6(1),i.Q6J("ngTemplateOutlet",ce),i.xp6(1),i.Q6J("ngIf",C.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",Ce)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],ne=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let Se=(()=>{class g{constructor(){}}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:Z,decls:1,vars:0,template:function(C,w){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),Ge=(()=>{class g{constructor(){}}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-item-action"]],viewQuery:function(C,w){if(1&C&&i.Gf(i.Rgc,5),2&C){let ce;i.iGM(ce=i.CRH())&&(w.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:Z,decls:1,vars:0,template:function(C,w){1&C&&(i.F$t(),i.YNc(0,U,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),g})(),_e=(()=>{class g{constructor(C,w){this.ngZone=C,this.cdr=w,this.nzActions=[],this.actions=[],this.destroy$=new b.xQ,this.inputActionChanges$=new b.xQ,this.contentChildrenChanges$=(0,X.P)(()=>this.nzListItemActions?(0,P.of)(null):this.ngZone.onStable.asObservable().pipe((0,ee.q)(1),(0,te.w)(()=>this.contentChildrenChanges$))),(0,F.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,de.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(C){return new(C||g)(i.Y36(i.R0b),i.Y36(i.sBO))},g.\u0275cmp=i.Xpm({type:g,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,w,ce){if(1&C&&i.Suo(ce,Ge,4),2&C){let Ce;i.iGM(Ce=i.CRH())&&(w.nzListItemActions=Ce)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:L,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,w){1&C&&i.YNc(0,R,3,2,"li",0),2&C&&i.Q6J("ngForOf",w.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),g})(),Pe=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,w){1&C&&i._UZ(0,"nz-embed-empty",0),2&C&&i.Q6J("nzComponentName","list")("specificContent",w.nzNoResult)},directives:[fe.gB],encapsulation:2,changeDetection:0}),g})(),Fe=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:Z,decls:1,vars:0,template:function(C,w){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),We=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:Z,decls:1,vars:0,template:function(C,w){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),Je=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:Z,decls:1,vars:0,template:function(C,w){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),ke=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275dir=i.lG2({type:g,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),g})(),je=(()=>{class g{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new k.X(this.nzItemLayout),this.destroy$=new b.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,de.R)(this.destroy$)).subscribe(w=>{this.dir=w})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return g.\u0275fac=function(C){return new(C||g)(i.Y36(me.Is,8))},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,w,ce){if(1&C&&(i.Suo(ce,We,5),i.Suo(ce,Je,5),i.Suo(ce,ke,5)),2&C){let Ce;i.iGM(Ce=i.CRH())&&(w.nzListFooterComponent=Ce.first),i.iGM(Ce=i.CRH())&&(w.nzListPaginationComponent=Ce.first),i.iGM(Ce=i.CRH())&&(w.nzListLoadMoreDirective=Ce.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,w){2&C&&i.ekj("ant-list-rtl","rtl"===w.dir)("ant-list-vertical","vertical"===w.nzItemLayout)("ant-list-lg","large"===w.nzSize)("ant-list-sm","small"===w.nzSize)("ant-list-split",w.nzSplit)("ant-list-bordered",w.nzBordered)("ant-list-loading",w.nzLoading)("ant-list-something-after-last-item",w.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:xe,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,w){if(1&C&&(i.F$t(Be),i.YNc(0,Oe,3,1,"ng-template",null,0,i.W1O),i.YNc(2,Me,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,N,1,2,"div",3),i.YNc(7,H,2,2,"div",4),i.YNc(8,Y,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,De,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,Le,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,Ee,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&C){const ce=i.MAs(1);i.xp6(2),i.Q6J("ngIf",w.nzHeader),i.xp6(2),i.Q6J("nzSpinning",w.nzLoading),i.xp6(2),i.Q6J("ngIf",w.nzLoading&&w.nzDataSource&&0===w.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",w.nzGrid&&w.nzDataSource)("ngIfElse",ce),i.xp6(1),i.Q6J("ngIf",!w.nzLoading&&w.nzDataSource&&0===w.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",w.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",w.nzLoadMore),i.xp6(2),i.Q6J("ngIf",w.nzPagination)}},directives:[Fe,he.W,Pe,We,Je,t.sg,t.tP,t.O5,E.f,K.SK,K.t3],encapsulation:2,changeDetection:0}),(0,B.gn)([(0,j.yF)()],g.prototype,"nzBordered",void 0),(0,B.gn)([(0,j.yF)()],g.prototype,"nzLoading",void 0),(0,B.gn)([(0,j.yF)()],g.prototype,"nzSplit",void 0),g})(),He=(()=>{class g{constructor(C,w,ce,Ce){this.parentComp=ce,this.cdr=Ce,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,w.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return g.\u0275fac=function(C){return new(C||g)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(je),i.Y36(i.sBO))},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,w,ce){if(1&C&&i.Suo(ce,Se,5),2&C){let Ce;i.iGM(Ce=i.CRH())&&(w.listItemExtraDirective=Ce.first)}},hostVars:2,hostBindings:function(C,w){2&C&&i.ekj("ant-list-item-no-flex",w.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:ne,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,w){if(1&C&&(i.F$t(a),i.YNc(0,Ie,2,1,"ng-template",null,0,i.W1O),i.YNc(2,we,3,1,"ng-template",null,1,i.W1O),i.YNc(4,nt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,rt,4,4,"ng-template",null,3,i.W1O),i.YNc(8,h,6,4,"ng-container",4)),2&C){const ce=i.MAs(7);i.xp6(8),i.Q6J("ngIf",w.isVerticalAndExtra)("ngIfElse",ce)}},directives:[_e,Se,t.O5,E.f,t.tP],encapsulation:2,changeDetection:0}),(0,B.gn)([(0,j.yF)()],g.prototype,"nzNoFlex",void 0),g})(),tt=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[me.vT,t.ez,he.j,K.Jb,n.Rt,E.T,fe.Xo]]}),g})()},4219:(Ne,le,r)=>{r.d(le,{hl:()=>Ie,Cc:()=>xe,wO:()=>at,YV:()=>pt,r9:()=>Re,ip:()=>h});var i=r(655),n=r(5e3),t=r(8929),E=r(591),B=r(6787),j=r(3426),b=r(4850),X=r(1709),P=r(2198),F=r(7604),k=r(7138),ee=r(5778),te=r(7625),de=r(1059),fe=r(7545),me=r(1721),he=r(325),K=r(226),Z=r(2845),y=r(6950),x=r(925),_=r(4832),O=r(9808),re=r(647),ze=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function W(a,ne){if(1&a&&n._UZ(0,"i",4),2&a){const m=n.oxw();n.Q6J("nzType",m.nzIcon)}}function J(a,ne){if(1&a&&(n.ynx(0),n.TgZ(1,"span"),n._uU(2),n.qZA(),n.BQk()),2&a){const m=n.oxw();n.xp6(2),n.Oqu(m.nzTitle)}}function p(a,ne){1&a&&n._UZ(0,"i",8)}function U(a,ne){1&a&&n._UZ(0,"i",9)}function L(a,ne){if(1&a&&(n.TgZ(0,"span",5),n.YNc(1,p,1,0,"i",6),n.YNc(2,U,1,0,"i",7),n.qZA()),2&a){const m=n.oxw();n.Q6J("ngSwitch",m.dir),n.xp6(1),n.Q6J("ngSwitchCase","rtl")}}function V(a,ne){1&a&&n._UZ(0,"i",10)}const Te=["*"],R=["nz-submenu-inline-child",""];function oe(a,ne){}const Q=["nz-submenu-none-inline-child",""];function ge(a,ne){}const Oe=["nz-submenu",""];function Ae(a,ne){1&a&&n.Hsn(0,0,["*ngIf","!nzTitle"])}function Me(a,ne){if(1&a&&n._UZ(0,"div",6),2&a){const m=n.oxw(),d=n.MAs(7);n.Q6J("mode",m.mode)("nzOpen",m.nzOpen)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("menuClass",m.nzMenuClassName)("templateOutlet",d)}}function N(a,ne){if(1&a){const m=n.EpF();n.TgZ(0,"div",8),n.NdJ("subMenuMouseState",function(q){return n.CHM(m),n.oxw(2).setMouseEnterState(q)}),n.qZA()}if(2&a){const m=n.oxw(2),d=n.MAs(7);n.Q6J("theme",m.theme)("mode",m.mode)("nzOpen",m.nzOpen)("position",m.position)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("templateOutlet",d)("menuClass",m.nzMenuClassName)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)}}function ie(a,ne){if(1&a){const m=n.EpF();n.YNc(0,N,1,10,"ng-template",7),n.NdJ("positionChange",function(q){return n.CHM(m),n.oxw().onPositionChange(q)})}if(2&a){const m=n.oxw(),d=n.MAs(1);n.Q6J("cdkConnectedOverlayPositions",m.overlayPositions)("cdkConnectedOverlayOrigin",d)("cdkConnectedOverlayWidth",m.triggerWidth)("cdkConnectedOverlayOpen",m.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function D(a,ne){1&a&&n.Hsn(0,1)}const H=[[["","title",""]],"*"],Y=["[title]","*"],xe=new n.OlP("NzIsInDropDownMenuToken"),Qe=new n.OlP("NzMenuServiceLocalToken");let Ie=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new E.X("light"),this.mode$=new E.X("vertical"),this.inlineIndent$=new E.X(24),this.isChildSubMenuOpen$=new E.X(!1)}onDescendantMenuItemClick(m){this.descendantMenuItemClick$.next(m)}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setMode(m){this.mode$.next(m)}setTheme(m){this.theme$.next(m)}setInlineIndent(m){this.inlineIndent$.next(m)}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac}),a})(),Ze=(()=>{class a{constructor(m,d,q){this.nzHostSubmenuService=m,this.nzMenuService=d,this.isMenuInsideDropDown=q,this.mode$=this.nzMenuService.mode$.pipe((0,b.U)(_e=>"inline"===_e?"inline":"vertical"===_e||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new E.X(!1),this.isChildSubMenuOpen$=new E.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const se=this.childMenuItemClick$.pipe((0,X.zg)(()=>this.mode$),(0,P.h)(_e=>"inline"!==_e||this.isMenuInsideDropDown),(0,F.h)(!1)),Se=(0,B.T)(this.isMouseEnterTitleOrOverlay$,se);(0,j.aj)([this.isChildSubMenuOpen$,Se]).pipe((0,b.U)(([_e,Pe])=>_e||Pe),(0,k.e)(150),(0,ee.x)(),(0,te.R)(this.destroy$)).pipe((0,ee.x)()).subscribe(_e=>{this.setOpenStateWithoutDebounce(_e),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(_e):this.nzMenuService.isChildSubMenuOpen$.next(_e)})}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setOpenStateWithoutDebounce(m){this.isCurrentSubMenuOpen$.next(m)}setMouseEnterTitleOrOverlayState(m){this.isMouseEnterTitleOrOverlay$.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(n.LFG(a,12),n.LFG(Ie),n.LFG(xe))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac}),a})(),Re=(()=>{class a{constructor(m,d,q,se,Se,Ge,_e,Pe){this.nzMenuService=m,this.cdr=d,this.nzSubmenuService=q,this.isMenuInsideDropDown=se,this.directionality=Se,this.routerLink=Ge,this.routerLinkWithHref=_e,this.router=Pe,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Pe&&this.router.events.pipe((0,te.R)(this.destroy$),(0,P.h)(Fe=>Fe instanceof he.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(m){this.nzDisabled?(m.preventDefault(),m.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(m){this.nzSelected=m,this.selected$.next(m)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const m=this.hasActiveLinks();this.nzSelected!==m&&(this.nzSelected=m,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const m=this.isLinkActive(this.router);return this.routerLink&&m(this.routerLink)||this.routerLinkWithHref&&m(this.routerLinkWithHref)||this.listOfRouterLink.some(m)||this.listOfRouterLinkWithHref.some(m)}isLinkActive(m){return d=>m.isActive(d.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var m;(0,j.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,te.R)(this.destroy$)).subscribe(([d,q])=>{this.inlinePaddingLeft="inline"===d?this.level*q:null}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,te.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,te.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(m){m.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(Ie),n.Y36(n.sBO),n.Y36(Ze,8),n.Y36(xe),n.Y36(K.Is,8),n.Y36(he.rH,8),n.Y36(he.yS,8),n.Y36(he.F0,8))},a.\u0275dir=n.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(m,d,q){if(1&m&&(n.Suo(q,he.rH,5),n.Suo(q,he.yS,5)),2&m){let se;n.iGM(se=n.CRH())&&(d.listOfRouterLink=se),n.iGM(se=n.CRH())&&(d.listOfRouterLinkWithHref=se)}},hostVars:20,hostBindings:function(m,d){1&m&&n.NdJ("click",function(se){return d.clickMenuItem(se)}),2&m&&(n.Udp("padding-left","rtl"===d.dir?null:d.nzPaddingLeft||d.inlinePaddingLeft,"px")("padding-right","rtl"===d.dir?d.nzPaddingLeft||d.inlinePaddingLeft:null,"px"),n.ekj("ant-dropdown-menu-item",d.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",d.isMenuInsideDropDown&&d.nzSelected)("ant-dropdown-menu-item-danger",d.isMenuInsideDropDown&&d.nzDanger)("ant-dropdown-menu-item-disabled",d.isMenuInsideDropDown&&d.nzDisabled)("ant-menu-item",!d.isMenuInsideDropDown)("ant-menu-item-selected",!d.isMenuInsideDropDown&&d.nzSelected)("ant-menu-item-danger",!d.isMenuInsideDropDown&&d.nzDanger)("ant-menu-item-disabled",!d.isMenuInsideDropDown&&d.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[n.TTD]}),(0,i.gn)([(0,me.yF)()],a.prototype,"nzDisabled",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzSelected",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzDanger",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),we=(()=>{class a{constructor(m,d){this.cdr=m,this.directionality=d,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new n.vpe,this.subMenuMouseState=new n.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var m;this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(n.sBO),n.Y36(K.Is,8))},a.\u0275cmp=n.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(m,d){1&m&&n.NdJ("click",function(){return d.clickTitle()})("mouseenter",function(){return d.setMouseState(!0)})("mouseleave",function(){return d.setMouseState(!1)}),2&m&&(n.Udp("padding-left","rtl"===d.dir?null:d.paddingLeft,"px")("padding-right","rtl"===d.dir?d.paddingLeft:null,"px"),n.ekj("ant-dropdown-menu-submenu-title",d.isMenuInsideDropDown)("ant-menu-submenu-title",!d.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:Te,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(m,d){if(1&m&&(n.F$t(),n.YNc(0,W,1,1,"i",0),n.YNc(1,J,3,1,"ng-container",1),n.Hsn(2),n.YNc(3,L,3,2,"span",2),n.YNc(4,V,1,0,"ng-template",null,3,n.W1O)),2&m){const q=n.MAs(5);n.Q6J("ngIf",d.nzIcon),n.xp6(1),n.Q6J("nzStringTemplateOutlet",d.nzTitle),n.xp6(2),n.Q6J("ngIf",d.isMenuInsideDropDown)("ngIfElse",q)}},directives:[O.O5,re.Ls,ze.f,O.RF,O.n9,O.ED],encapsulation:2,changeDetection:0}),a})(),nt=(()=>{class a{constructor(m,d,q){this.elementRef=m,this.renderer=d,this.directionality=q,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d})}ngOnChanges(m){const{mode:d,nzOpen:q,menuClass:se}=m;(d||q)&&this.calcMotionState(),se&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(Se=>!!Se).forEach(Se=>{this.renderer.removeClass(this.elementRef.nativeElement,Se)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(Se=>!!Se).forEach(Se=>{this.renderer.addClass(this.elementRef.nativeElement,Se)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(K.Is,8))},a.\u0275cmp=n.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(m,d){2&m&&(n.d8E("@collapseMotion",d.expandState),n.ekj("ant-menu-rtl","rtl"===d.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[n.TTD],attrs:R,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(m,d){1&m&&n.YNc(0,oe,0,0,"ng-template",0),2&m&&n.Q6J("ngTemplateOutlet",d.templateOutlet)},directives:[O.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),it=(()=>{class a{constructor(m){this.directionality=m,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new n.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d})}ngOnChanges(m){const{mode:d,nzOpen:q}=m;(d||q)&&this.calcMotionState()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(K.Is,8))},a.\u0275cmp=n.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(m,d){1&m&&n.NdJ("mouseenter",function(){return d.setMouseState(!0)})("mouseleave",function(){return d.setMouseState(!1)}),2&m&&(n.d8E("@slideMotion",d.expandState)("@zoomBigMotion",d.expandState),n.ekj("ant-menu-light","light"===d.theme)("ant-menu-dark","dark"===d.theme)("ant-menu-submenu-placement-bottom","horizontal"===d.mode)("ant-menu-submenu-placement-right","vertical"===d.mode&&"right"===d.position)("ant-menu-submenu-placement-left","vertical"===d.mode&&"left"===d.position)("ant-menu-submenu-rtl","rtl"===d.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[n.TTD],attrs:Q,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(m,d){1&m&&(n.TgZ(0,"div",0),n.YNc(1,ge,0,0,"ng-template",1),n.qZA()),2&m&&(n.ekj("ant-dropdown-menu",d.isMenuInsideDropDown)("ant-menu",!d.isMenuInsideDropDown)("ant-dropdown-menu-vertical",d.isMenuInsideDropDown)("ant-menu-vertical",!d.isMenuInsideDropDown)("ant-dropdown-menu-sub",d.isMenuInsideDropDown)("ant-menu-sub",!d.isMenuInsideDropDown)("ant-menu-rtl","rtl"===d.dir),n.Q6J("ngClass",d.menuClass),n.xp6(1),n.Q6J("ngTemplateOutlet",d.templateOutlet))},directives:[O.mk,O.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const qe=[y.yW.rightTop,y.yW.right,y.yW.rightBottom,y.yW.leftTop,y.yW.left,y.yW.leftBottom],ot=[y.yW.bottomLeft];let T=(()=>{class a{constructor(m,d,q,se,Se,Ge,_e){this.nzMenuService=m,this.cdr=d,this.nzSubmenuService=q,this.platform=se,this.isMenuInsideDropDown=Se,this.directionality=Ge,this.noAnimation=_e,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new n.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=qe,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(m){this.nzSubmenuService.setOpenStateWithoutDebounce(m)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(m){this.isActive=m,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(m)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(m){const d=(0,y.d_)(m);"rightTop"===d||"rightBottom"===d||"right"===d?this.position="right":("leftTop"===d||"leftBottom"===d||"left"===d)&&(this.position="left")}ngOnInit(){var m;this.nzMenuService.theme$.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.theme=d,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.mode=d,"horizontal"===d?this.overlayPositions=ot:"vertical"===d&&(this.overlayPositions=qe),this.cdr.markForCheck()}),(0,j.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,te.R)(this.destroy$)).subscribe(([d,q])=>{this.inlinePaddingLeft="inline"===d?this.level*q:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.isActive=d,d!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=d,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const m=this.listOfNzMenuItemDirective,d=m.changes,q=(0,B.T)(d,...m.map(se=>se.selected$));d.pipe((0,de.O)(m),(0,fe.w)(()=>q),(0,de.O)(!0),(0,b.U)(()=>m.some(se=>se.nzSelected)),(0,te.R)(this.destroy$)).subscribe(se=>{this.isSelected=se,this.cdr.markForCheck()})}ngOnChanges(m){const{nzOpen:d}=m;d&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(Ie),n.Y36(n.sBO),n.Y36(Ze),n.Y36(x.t4),n.Y36(xe),n.Y36(K.Is,8),n.Y36(_.P,9))},a.\u0275cmp=n.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(m,d,q){if(1&m&&(n.Suo(q,a,5),n.Suo(q,Re,5)),2&m){let se;n.iGM(se=n.CRH())&&(d.listOfNzSubMenuComponent=se),n.iGM(se=n.CRH())&&(d.listOfNzMenuItemDirective=se)}},viewQuery:function(m,d){if(1&m&&n.Gf(Z.xu,7,n.SBq),2&m){let q;n.iGM(q=n.CRH())&&(d.cdkOverlayOrigin=q.first)}},hostVars:34,hostBindings:function(m,d){2&m&&n.ekj("ant-dropdown-menu-submenu",d.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",d.isMenuInsideDropDown&&d.nzDisabled)("ant-dropdown-menu-submenu-open",d.isMenuInsideDropDown&&d.nzOpen)("ant-dropdown-menu-submenu-selected",d.isMenuInsideDropDown&&d.isSelected)("ant-dropdown-menu-submenu-vertical",d.isMenuInsideDropDown&&"vertical"===d.mode)("ant-dropdown-menu-submenu-horizontal",d.isMenuInsideDropDown&&"horizontal"===d.mode)("ant-dropdown-menu-submenu-inline",d.isMenuInsideDropDown&&"inline"===d.mode)("ant-dropdown-menu-submenu-active",d.isMenuInsideDropDown&&d.isActive)("ant-menu-submenu",!d.isMenuInsideDropDown)("ant-menu-submenu-disabled",!d.isMenuInsideDropDown&&d.nzDisabled)("ant-menu-submenu-open",!d.isMenuInsideDropDown&&d.nzOpen)("ant-menu-submenu-selected",!d.isMenuInsideDropDown&&d.isSelected)("ant-menu-submenu-vertical",!d.isMenuInsideDropDown&&"vertical"===d.mode)("ant-menu-submenu-horizontal",!d.isMenuInsideDropDown&&"horizontal"===d.mode)("ant-menu-submenu-inline",!d.isMenuInsideDropDown&&"inline"===d.mode)("ant-menu-submenu-active",!d.isMenuInsideDropDown&&d.isActive)("ant-menu-submenu-rtl","rtl"===d.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[n._Bn([Ze]),n.TTD],attrs:Oe,ngContentSelectors:Y,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(m,d){if(1&m&&(n.F$t(H),n.TgZ(0,"div",0,1),n.NdJ("subMenuMouseState",function(se){return d.setMouseEnterState(se)})("toggleSubMenu",function(){return d.toggleSubMenu()}),n.YNc(2,Ae,1,0,"ng-content",2),n.qZA(),n.YNc(3,Me,1,6,"div",3),n.YNc(4,ie,1,5,"ng-template",null,4,n.W1O),n.YNc(6,D,1,0,"ng-template",null,5,n.W1O)),2&m){const q=n.MAs(5);n.Q6J("nzIcon",d.nzIcon)("nzTitle",d.nzTitle)("mode",d.mode)("nzDisabled",d.nzDisabled)("isMenuInsideDropDown",d.isMenuInsideDropDown)("paddingLeft",d.nzPaddingLeft||d.inlinePaddingLeft),n.xp6(2),n.Q6J("ngIf",!d.nzTitle),n.xp6(1),n.Q6J("ngIf","inline"===d.mode)("ngIfElse",q)}},directives:[we,nt,it,Z.xu,O.O5,_.P,Z.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,me.yF)()],a.prototype,"nzOpen",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzDisabled",void 0),a})();function rt(a,ne){return a||ne}function st(a){return a||!1}let at=(()=>{class a{constructor(m,d,q,se){this.nzMenuService=m,this.isMenuInsideDropDown=d,this.cdr=q,this.directionality=se,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new n.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new E.X(this.nzInlineCollapsed),this.mode$=new E.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(m){this.nzInlineCollapsed=m,this.inlineCollapsed$.next(m)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(m=>m.nzOpen),this.listOfNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var m;(0,j.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,te.R)(this.destroy$)).subscribe(([d,q])=>{this.actualMode=d?"vertical":q,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.nzClick.emit(d),this.nzSelectable&&!d.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(q=>q.setSelectedState(q===d))}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,te.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,te.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(m){const{nzInlineCollapsed:d,nzInlineIndent:q,nzTheme:se,nzMode:Se}=m;d&&this.inlineCollapsed$.next(this.nzInlineCollapsed),q&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),se&&this.nzMenuService.setTheme(this.nzTheme),Se&&(this.mode$.next(this.nzMode),!m.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ge=>Ge.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(Ie),n.Y36(xe),n.Y36(n.sBO),n.Y36(K.Is,8))},a.\u0275dir=n.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(m,d,q){if(1&m&&(n.Suo(q,Re,5),n.Suo(q,T,5)),2&m){let se;n.iGM(se=n.CRH())&&(d.listOfNzMenuItemDirective=se),n.iGM(se=n.CRH())&&(d.listOfNzSubMenuComponent=se)}},hostVars:34,hostBindings:function(m,d){2&m&&n.ekj("ant-dropdown-menu",d.isMenuInsideDropDown)("ant-dropdown-menu-root",d.isMenuInsideDropDown)("ant-dropdown-menu-light",d.isMenuInsideDropDown&&"light"===d.nzTheme)("ant-dropdown-menu-dark",d.isMenuInsideDropDown&&"dark"===d.nzTheme)("ant-dropdown-menu-vertical",d.isMenuInsideDropDown&&"vertical"===d.actualMode)("ant-dropdown-menu-horizontal",d.isMenuInsideDropDown&&"horizontal"===d.actualMode)("ant-dropdown-menu-inline",d.isMenuInsideDropDown&&"inline"===d.actualMode)("ant-dropdown-menu-inline-collapsed",d.isMenuInsideDropDown&&d.nzInlineCollapsed)("ant-menu",!d.isMenuInsideDropDown)("ant-menu-root",!d.isMenuInsideDropDown)("ant-menu-light",!d.isMenuInsideDropDown&&"light"===d.nzTheme)("ant-menu-dark",!d.isMenuInsideDropDown&&"dark"===d.nzTheme)("ant-menu-vertical",!d.isMenuInsideDropDown&&"vertical"===d.actualMode)("ant-menu-horizontal",!d.isMenuInsideDropDown&&"horizontal"===d.actualMode)("ant-menu-inline",!d.isMenuInsideDropDown&&"inline"===d.actualMode)("ant-menu-inline-collapsed",!d.isMenuInsideDropDown&&d.nzInlineCollapsed)("ant-menu-rtl","rtl"===d.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[n._Bn([{provide:Qe,useClass:Ie},{provide:Ie,useFactory:rt,deps:[[new n.tp0,new n.FiY,Ie],Qe]},{provide:xe,useFactory:st,deps:[[new n.tp0,new n.FiY,xe]]}]),n.TTD]}),(0,i.gn)([(0,me.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,me.yF)()],a.prototype,"nzSelectable",void 0),a})(),pt=(()=>{class a{constructor(m,d){this.elementRef=m,this.renderer=d,this.renderer.addClass(m.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(m){return new(m||a)(n.Y36(n.SBq),n.Y36(n.Qsj))},a.\u0275dir=n.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),h=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[K.vT,O.ez,x.ud,Z.U8,re.PV,_.g,ze.T]]}),a})()},3868:(Ne,le,r)=>{r.d(le,{Of:()=>K,Dg:()=>he,aF:()=>Z});var i=r(5e3),n=r(655),t=r(3075),E=r(839),B=r(8929),j=r(3753),b=r(7625),X=r(1721),P=r(226),F=r(5664),k=r(9808);const ee=["*"],te=["inputElement"],de=["nz-radio",""];let fe=(()=>{class y{}return y.\u0275fac=function(_){return new(_||y)},y.\u0275dir=i.lG2({type:y,selectors:[["","nz-radio-button",""]]}),y})(),me=(()=>{class y{constructor(){this.selected$=new E.t(1),this.touched$=new B.xQ,this.disabled$=new E.t(1),this.name$=new E.t(1)}touch(){this.touched$.next()}select(_){this.selected$.next(_)}setDisabled(_){this.disabled$.next(_)}setName(_){this.name$.next(_)}}return y.\u0275fac=function(_){return new(_||y)},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac}),y})(),he=(()=>{class y{constructor(_,O,re){this.cdr=_,this.nzRadioService=O,this.directionality=re,this.value=null,this.destroy$=new B.xQ,this.onChange=()=>{},this.onTouched=()=>{},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null,this.dir="ltr"}ngOnInit(){var _;this.nzRadioService.selected$.pipe((0,b.R)(this.destroy$)).subscribe(O=>{this.value!==O&&(this.value=O,this.onChange(this.value))}),this.nzRadioService.touched$.pipe((0,b.R)(this.destroy$)).subscribe(()=>{Promise.resolve().then(()=>this.onTouched())}),null===(_=this.directionality.change)||void 0===_||_.pipe((0,b.R)(this.destroy$)).subscribe(O=>{this.dir=O,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(_){const{nzDisabled:O,nzName:re}=_;O&&this.nzRadioService.setDisabled(this.nzDisabled),re&&this.nzRadioService.setName(this.nzName)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}writeValue(_){this.value=_,this.nzRadioService.select(_),this.cdr.markForCheck()}registerOnChange(_){this.onChange=_}registerOnTouched(_){this.onTouched=_}setDisabledState(_){this.nzDisabled=_,this.nzRadioService.setDisabled(_),this.cdr.markForCheck()}}return y.\u0275fac=function(_){return new(_||y)(i.Y36(i.sBO),i.Y36(me),i.Y36(P.Is,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["nz-radio-group"]],hostAttrs:[1,"ant-radio-group"],hostVars:8,hostBindings:function(_,O){2&_&&i.ekj("ant-radio-group-large","large"===O.nzSize)("ant-radio-group-small","small"===O.nzSize)("ant-radio-group-solid","solid"===O.nzButtonStyle)("ant-radio-group-rtl","rtl"===O.dir)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[i._Bn([me,{provide:t.JU,useExisting:(0,i.Gpc)(()=>y),multi:!0}]),i.TTD],ngContentSelectors:ee,decls:1,vars:0,template:function(_,O){1&_&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),(0,n.gn)([(0,X.yF)()],y.prototype,"nzDisabled",void 0),y})(),K=(()=>{class y{constructor(_,O,re,ze,pe,ue,W){this.ngZone=_,this.elementRef=O,this.cdr=re,this.focusMonitor=ze,this.directionality=pe,this.nzRadioService=ue,this.nzRadioButtonDirective=W,this.isNgModel=!1,this.destroy$=new B.xQ,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=()=>{},this.onTouched=()=>{},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1,this.dir="ltr"}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}setDisabledState(_){this.nzDisabled=_,this.cdr.markForCheck()}writeValue(_){this.isChecked=_,this.cdr.markForCheck()}registerOnChange(_){this.isNgModel=!0,this.onChange=_}registerOnTouched(_){this.onTouched=_}ngOnInit(){this.nzRadioService&&(this.nzRadioService.name$.pipe((0,b.R)(this.destroy$)).subscribe(_=>{this.name=_,this.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe((0,b.R)(this.destroy$)).subscribe(_=>{this.nzDisabled=_,this.cdr.markForCheck()}),this.nzRadioService.selected$.pipe((0,b.R)(this.destroy$)).subscribe(_=>{this.isChecked=this.nzValue===_,this.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,b.R)(this.destroy$)).subscribe(_=>{_||(Promise.resolve().then(()=>this.onTouched()),this.nzRadioService&&this.nzRadioService.touch())}),this.directionality.change.pipe((0,b.R)(this.destroy$)).subscribe(_=>{this.dir=_,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.setupClickListener()}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}setupClickListener(){this.ngZone.runOutsideAngular(()=>{(0,j.R)(this.elementRef.nativeElement,"click").pipe((0,b.R)(this.destroy$)).subscribe(_=>{_.stopPropagation(),_.preventDefault(),!this.nzDisabled&&!this.isChecked&&this.ngZone.run(()=>{this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)),this.cdr.markForCheck()})})})}}return y.\u0275fac=function(_){return new(_||y)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(F.tE),i.Y36(P.Is,8),i.Y36(me,8),i.Y36(fe,8))},y.\u0275cmp=i.Xpm({type:y,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(_,O){if(1&_&&i.Gf(te,5),2&_){let re;i.iGM(re=i.CRH())&&(O.inputElement=re.first)}},hostVars:16,hostBindings:function(_,O){2&_&&i.ekj("ant-radio-wrapper",!O.isRadioButton)("ant-radio-button-wrapper",O.isRadioButton)("ant-radio-wrapper-checked",O.isChecked&&!O.isRadioButton)("ant-radio-button-wrapper-checked",O.isChecked&&O.isRadioButton)("ant-radio-wrapper-disabled",O.nzDisabled&&!O.isRadioButton)("ant-radio-button-wrapper-disabled",O.nzDisabled&&O.isRadioButton)("ant-radio-wrapper-rtl",!O.isRadioButton&&"rtl"===O.dir)("ant-radio-button-wrapper-rtl",O.isRadioButton&&"rtl"===O.dir)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[i._Bn([{provide:t.JU,useExisting:(0,i.Gpc)(()=>y),multi:!0}])],attrs:de,ngContentSelectors:ee,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(_,O){1&_&&(i.F$t(),i.TgZ(0,"span"),i._UZ(1,"input",0,1),i._UZ(3,"span"),i.qZA(),i.TgZ(4,"span"),i.Hsn(5),i.qZA()),2&_&&(i.ekj("ant-radio",!O.isRadioButton)("ant-radio-checked",O.isChecked&&!O.isRadioButton)("ant-radio-disabled",O.nzDisabled&&!O.isRadioButton)("ant-radio-button",O.isRadioButton)("ant-radio-button-checked",O.isChecked&&O.isRadioButton)("ant-radio-button-disabled",O.nzDisabled&&O.isRadioButton),i.xp6(1),i.ekj("ant-radio-input",!O.isRadioButton)("ant-radio-button-input",O.isRadioButton),i.Q6J("disabled",O.nzDisabled)("checked",O.isChecked),i.uIk("autofocus",O.nzAutoFocus?"autofocus":null)("name",O.name),i.xp6(2),i.ekj("ant-radio-inner",!O.isRadioButton)("ant-radio-button-inner",O.isRadioButton))},encapsulation:2,changeDetection:0}),(0,n.gn)([(0,X.yF)()],y.prototype,"nzDisabled",void 0),(0,n.gn)([(0,X.yF)()],y.prototype,"nzAutoFocus",void 0),y})(),Z=(()=>{class y{}return y.\u0275fac=function(_){return new(_||y)},y.\u0275mod=i.oAB({type:y}),y.\u0275inj=i.cJS({imports:[[P.vT,k.ez,t.u5]]}),y})()},8144:(Ne,le,r)=>{r.d(le,{NU:()=>he,$1:()=>de,zf:()=>K});var i=r(226),n=r(9808),t=r(5e3),E=r(655),B=r(8929),j=r(7625),b=r(9439),X=r(1721);function P(Z,y){}const F=function(Z){return{$implicit:Z}};function k(Z,y){if(1&Z&&(t.TgZ(0,"span",4),t.YNc(1,P,0,0,"ng-template",5),t.qZA()),2&Z){const x=t.oxw(),_=x.last,O=x.index,re=t.oxw();t.Udp("margin-bottom","vertical"===re.nzDirection?_?null:re.spaceSize:null,"px")("margin-right","horizontal"===re.nzDirection?_?null:re.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",re.nzSplit)("ngTemplateOutletContext",t.VKq(6,F,O))}}function ee(Z,y){if(1&Z&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,k,2,8,"span",3)),2&Z){const x=y.$implicit,_=y.last,O=t.oxw();t.Udp("margin-bottom","vertical"===O.nzDirection?_?null:O.spaceSize:null,"px")("margin-right","horizontal"===O.nzDirection?_?null:O.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",x),t.xp6(1),t.Q6J("ngIf",O.nzSplit&&!_)}}const te=["*"];let de=(()=>{class Z{constructor(){}}return Z.\u0275fac=function(x){return new(x||Z)},Z.\u0275dir=t.lG2({type:Z,selectors:[["","nzSpaceItem",""]]}),Z})();const me={small:8,middle:16,large:24};let he=(()=>{class Z{constructor(x,_){this.nzConfigService=x,this.cdr=_,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=me.small,this.destroy$=new B.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?me[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,j.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return Z.\u0275fac=function(x){return new(x||Z)(t.Y36(b.jY),t.Y36(t.sBO))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(x,_,O){if(1&x&&t.Suo(O,de,4,t.Rgc),2&x){let re;t.iGM(re=t.CRH())&&(_.items=re)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(x,_){2&x&&(t.Udp("flex-wrap",_.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===_.nzDirection)("ant-space-vertical","vertical"===_.nzDirection)("ant-space-align-start","start"===_.mergedAlign)("ant-space-align-end","end"===_.mergedAlign)("ant-space-align-center","center"===_.mergedAlign)("ant-space-align-baseline","baseline"===_.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:te,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(x,_){1&x&&(t.F$t(),t.Hsn(0),t.YNc(1,ee,3,6,"ng-template",0)),2&x&&(t.xp6(1),t.Q6J("ngForOf",_.items))},directives:[n.sg,n.tP,n.O5],encapsulation:2,changeDetection:0}),(0,E.gn)([(0,X.yF)()],Z.prototype,"nzWrap",void 0),(0,E.gn)([(0,b.oS)()],Z.prototype,"nzSize",void 0),Z})(),K=(()=>{class Z{}return Z.\u0275fac=function(x){return new(x||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[[i.vT,n.ez]]}),Z})()},7525:(Ne,le,r)=>{r.d(le,{W:()=>ue,j:()=>W});var i=r(655),n=r(5e3),t=r(8929),E=r(591),B=r(839),j=r(8723),b=r(1177);class P{constructor(p){this.durationSelector=p}call(p,U){return U.subscribe(new F(p,this.durationSelector))}}class F extends b.Ds{constructor(p,U){super(p),this.durationSelector=U,this.hasValue=!1}_next(p){try{const U=this.durationSelector.call(this,p);U&&this._tryNext(p,U)}catch(U){this.destination.error(U)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(p,U){let L=this.durationSubscription;this.value=p,this.hasValue=!0,L&&(L.unsubscribe(),this.remove(L)),L=(0,b.ft)(U,new b.IY(this)),L&&!L.closed&&this.add(this.durationSubscription=L)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const p=this.value,U=this.durationSubscription;U&&(this.durationSubscription=void 0,U.unsubscribe(),this.remove(U)),this.value=void 0,this.hasValue=!1,super._next(p)}}}var k=r(1059),ee=r(5778),te=r(7545),de=r(7625),fe=r(9439),me=r(1721),he=r(226),K=r(9808),Z=r(7144);function y(J,p){1&J&&(n.TgZ(0,"span",3),n._UZ(1,"i",4),n._UZ(2,"i",4),n._UZ(3,"i",4),n._UZ(4,"i",4),n.qZA())}function x(J,p){}function _(J,p){if(1&J&&(n.TgZ(0,"div",8),n._uU(1),n.qZA()),2&J){const U=n.oxw(2);n.xp6(1),n.Oqu(U.nzTip)}}function O(J,p){if(1&J&&(n.TgZ(0,"div"),n.TgZ(1,"div",5),n.YNc(2,x,0,0,"ng-template",6),n.YNc(3,_,2,1,"div",7),n.qZA(),n.qZA()),2&J){const U=n.oxw(),L=n.MAs(1);n.xp6(1),n.ekj("ant-spin-rtl","rtl"===U.dir)("ant-spin-spinning",U.isLoading)("ant-spin-lg","large"===U.nzSize)("ant-spin-sm","small"===U.nzSize)("ant-spin-show-text",U.nzTip),n.xp6(1),n.Q6J("ngTemplateOutlet",U.nzIndicator||L),n.xp6(1),n.Q6J("ngIf",U.nzTip)}}function re(J,p){if(1&J&&(n.TgZ(0,"div",9),n.Hsn(1),n.qZA()),2&J){const U=n.oxw();n.ekj("ant-spin-blur",U.isLoading)}}const ze=["*"];let ue=(()=>{class J{constructor(U,L,V){this.nzConfigService=U,this.cdr=L,this.directionality=V,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new E.X(this.nzSpinning),this.delay$=new B.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var U;this.delay$.pipe((0,k.O)(this.nzDelay),(0,ee.x)(),(0,te.w)(V=>0===V?this.spinning$:this.spinning$.pipe(function X(J){return p=>p.lift(new P(J))}(Te=>(0,j.H)(Te?V:0)))),(0,de.R)(this.destroy$)).subscribe(V=>{this.isLoading=V,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,de.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(U=this.directionality.change)||void 0===U||U.pipe((0,de.R)(this.destroy$)).subscribe(V=>{this.dir=V,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(U){const{nzSpinning:L,nzDelay:V}=U;L&&this.spinning$.next(this.nzSpinning),V&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return J.\u0275fac=function(U){return new(U||J)(n.Y36(fe.jY),n.Y36(n.sBO),n.Y36(he.Is,8))},J.\u0275cmp=n.Xpm({type:J,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(U,L){2&U&&n.ekj("ant-spin-nested-loading",!L.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[n.TTD],ngContentSelectors:ze,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(U,L){1&U&&(n.F$t(),n.YNc(0,y,5,0,"ng-template",null,0,n.W1O),n.YNc(2,O,4,12,"div",1),n.YNc(3,re,2,2,"div",2)),2&U&&(n.xp6(2),n.Q6J("ngIf",L.isLoading),n.xp6(1),n.Q6J("ngIf",!L.nzSimple))},directives:[K.O5,K.tP],encapsulation:2}),(0,i.gn)([(0,fe.oS)()],J.prototype,"nzIndicator",void 0),(0,i.gn)([(0,me.Rn)()],J.prototype,"nzDelay",void 0),(0,i.gn)([(0,me.yF)()],J.prototype,"nzSimple",void 0),(0,i.gn)([(0,me.yF)()],J.prototype,"nzSpinning",void 0),J})(),W=(()=>{class J{}return J.\u0275fac=function(U){return new(U||J)},J.\u0275mod=n.oAB({type:J}),J.\u0275inj=n.cJS({imports:[[he.vT,K.ez,Z.Q8]]}),J})()}}]);