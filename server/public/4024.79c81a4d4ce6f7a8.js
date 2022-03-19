"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{1912:(Se,re,r)=>{r.d(re,{s:()=>le});var n=r(5e3),o=r(6042),t=r(2643),S=r(2683),F=r(3640),B=r(2160),X=r(3762),O=r(647);let L=(()=>{class te{constructor(ie){this.cookies=ie,this.location=function Z(te){return encodeURIComponent(te).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return te.\u0275fac=function(ie){return new(ie||te)(n.Y36(B.N))},te.\u0275cmp=n.Xpm({type:te,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(ie,V){1&ie&&(n.TgZ(0,"nz-list",0),n.TgZ(1,"nz-list-item"),n.TgZ(2,"form",1),n._UZ(3,"input",2),n.TgZ(4,"button",3),n._UZ(5,"i",4),n._uU(6," Sign In with a Google Account "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"nz-list-item"),n.TgZ(8,"form",1),n._UZ(9,"input",2),n.TgZ(10,"button",3),n._uU(11," Sign In with an ORCID Account "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(12,"nz-list-item"),n.TgZ(13,"form",1),n._UZ(14,"input",2),n.TgZ(15,"button",3),n._UZ(16,"i",5),n._uU(17," Sign In with a Github Account "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&ie&&(n.xp6(2),n.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken),n.xp6(5),n.MGl("action","/api/auth/orcid?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken),n.xp6(4),n.MGl("action","/api/auth/github?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken))},directives:[X.n_,X.AA,o.ix,t.dQ,S.w,O.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),te})();function G(te,se){1&te&&(n.ynx(0),n.TgZ(1,"p",5),n._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),n.qZA(),n._UZ(3,"cvc-auth-options-list"),n.BQk())}function K(te,se){1&te&&n._uU(0," Sign In\n")}function H(te,se){if(1&te){const ie=n.EpF();n.TgZ(0,"button",0),n.NdJ("click",function(){return n.CHM(ie),n.oxw().handleCancel()}),n._uU(1,"Cancel"),n.qZA()}}let le=(()=>{class te{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return te.\u0275fac=function(ie){return new(ie||te)},te.\u0275cmp=n.Xpm({type:te,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(ie,V){if(1&ie&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return V.showAuth()}),n.TgZ(1,"span"),n._uU(2,"Sign In"),n.qZA(),n.qZA(),n.TgZ(3,"nz-modal",1),n.NdJ("nzVisibleChange",function(I){return V.authVisible=I})("nzOnCancel",function(){return V.handleCancel()}),n.YNc(4,G,4,0,"ng-container",2),n.qZA(),n.YNc(5,K,1,0,"ng-template",null,3,n.W1O),n.YNc(7,H,2,0,"ng-template",null,4,n.W1O)),2&ie){const R=n.MAs(6),I=n.MAs(8);n.xp6(3),n.Q6J("nzVisible",V.authVisible)("nzTitle",R)("nzFooter",I)}},directives:[o.ix,t.dQ,S.w,F.du,F.Hf,L],styles:["[_nghost-%COMP%]{display:inline-block}"]}),te})()},1844:(Se,re,r)=>{r.d(re,{B:()=>X});var n=r(9808),o=r(6042),t=r(3640),S=r(3762),F=r(647),Z=r(5e3);let B=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[n.ez,F.PV,S.Ph,o.sL]]}),O})(),X=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[n.ez,o.sL,t.Qp,B]]}),O})()},7881:(Se,re,r)=>{r.d(re,{L:()=>Z});var n=r(5e3),o=r(9808),t=r(6699);function S(B,X){if(1&B&&n._UZ(0,"nz-avatar",2),2&B){const O=n.oxw();n.Q6J("nzSrc",O.user.profileImagePath)("nzSize",O.size)}}function F(B,X){if(1&B&&(n._UZ(0,"nz-avatar",3),n.ALo(1,"uppercase")),2&B){const O=n.oxw();n.Q6J("nzSize",O.size)("nzText",n.lcZ(1,2,O.user.displayName.charAt(0)))}}let Z=(()=>{class B{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return B.\u0275fac=function(O){return new(O||B)},B.\u0275cmp=n.Xpm({type:B,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(O,L){if(1&O&&(n.YNc(0,S,1,2,"nz-avatar",0),n.YNc(1,F,2,4,"ng-template",null,1,n.W1O)),2&O){const G=n.MAs(2);n.Q6J("ngIf",L.user.profileImagePath)("ngIfElse",G)}},directives:[o.O5,t.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),B})()},5473:(Se,re,r)=>{r.d(re,{H:()=>S});var n=r(9808),o=r(6699),t=r(5e3);let S=(()=>{class F{}return F.\u0275fac=function(B){return new(B||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[n.ez,o.Rt]]}),F})()},9350:(Se,re,r)=>{r.d(re,{a:()=>O});var n=r(4850),o=r(5154),t=r(373),S=r(1059),F=r(712),Z=r(5e3),B=r(520);const X={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let O=(()=>{class L{constructor(K,H){function le(I){return!(!I||I.role!==F.i44.Admin)}function te(I){return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function se(I){return!(!I||I.role!==F.i44.Curator)}function ie(I){return!(!I||I.role!==F.i44.Curator&&I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function V(I){var $,ne;return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===($=I.mostRecentConflictOfInterestStatement)||void 0===$?void 0:$.coiStatus)!=F.Mgx.Conflict&&(null===(ne=I.mostRecentConflictOfInterestStatement)||void 0===ne?void 0:ne.coiStatus)!=F.Mgx.Valid)}function R(I){if(I.mostRecentOrganizationId)return I.organizations.find($=>$.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=K,this.http=H,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,n.U)(I=>({data:I.data,loading:I.loading,networkStatus:I.networkStatus})),(0,o.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,S.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,n.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!==I,signedOut:null===I,canCurate:ie(I),canModerate:V(I),isAdmin:le(I),isEditor:te(I),isCurator:se(I),organizations:null===I?[]:I.organizations,mostRecentOrg:null===I?void 0:R(I),invalidCoi:te(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Missing)})),(0,S.O)(X),(0,o.d)(1)),this.signedIn$=this.viewer$.pipe((0,n.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,n.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,n.U)(I=>le(I))),this.isEditor$=this.viewer$.pipe((0,n.U)(I=>te(I))),this.isCurator$=this.viewer$.pipe((0,n.U)(I=>se(I))),this.canCurate$=this.viewer$.pipe((0,n.U)(I=>ie(I))),this.canModerate$=this.viewer$.pipe((0,n.U)(I=>V(I)))}signOut(){this.http.get("/api/sign_out").subscribe(K=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return L.\u0275fac=function(K){return new(K||L)(Z.LFG(F.Tt7),Z.LFG(B.eN))},L.\u0275prov=Z.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},6123:(Se,re,r)=>{r.d(re,{U:()=>F});var n=r(8929),o=r(591),t=r(7625),S=r(537);class F{constructor(B){this.networkErrorService=B}mutate(B,X,O){let L=new n.xQ,G={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{L.next(),L.complete()}};return G.isSubmitting$.next(!0),B.mutate(X).pipe((0,t.R)(L),(0,S.x)(()=>{G.isSubmitting$.next(!1)})).subscribe({next:K=>{K.data&&O&&O(K.data)},error:K=>{K.graphQLErrors.length>0?G.submitError$.next(K.graphQLErrors.map(H=>H.message)):K.networkError&&this.networkErrorService.networkError$.next(K.networkError),G.cleanup()},complete:()=>{G.submitError$.next([]),G.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),G.cleanup()}}),G}}},822:(Se,re,r)=>{r.d(re,{V:()=>X});var n=r(5e3),o=r(9808),t=r(2359);function S(O,L){if(1&O&&n._UZ(0,"nz-alert",4),2&O){const G=n.oxw();n.Q6J("nzDescription",G.errors[0])}}function F(O,L){if(1&O&&n._UZ(0,"nz-alert",5),2&O){n.oxw();const G=n.MAs(3);n.Q6J("nzDescription",G)}}function Z(O,L){if(1&O&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&O){const G=L.$implicit;n.xp6(1),n.Oqu(G)}}function B(O,L){if(1&O&&(n.TgZ(0,"ul",6),n.YNc(1,Z,2,1,"li",7),n.qZA()),2&O){const G=n.oxw();n.xp6(1),n.Q6J("ngForOf",G.errors)}}let X=(()=>{class O{constructor(){}ngOnInit(){}}return O.\u0275fac=function(G){return new(G||O)},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(G,K){1&G&&(n.YNc(0,S,1,1,"nz-alert",0),n.YNc(1,F,1,1,"nz-alert",1),n.YNc(2,B,2,1,"ng-template",2,3,n.W1O)),2&G&&(n.Q6J("ngIf",1===K.errors.length),n.xp6(1),n.Q6J("ngIf",K.errors.length>1))},directives:[o.O5,t.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),O})()},7008:(Se,re,r)=>{r.d(re,{B:()=>S});var n=r(9808),o=r(2359),t=r(5e3);let S=(()=>{class F{}return F.\u0275fac=function(B){return new(B||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[n.ez,o.L]]}),F})()},8785:(Se,re,r)=>{r.d(re,{t:()=>ne});var n=r(5e3),o=r(6123),t=r(8929),S=r(7625),F=r(712),Z=r(9169),B=r(7484),X=r(9808),O=r(2359),L=r(1894),G=r(4546),K=r(822),H=r(7525),le=r(3868),te=r(4182),se=r(6042),ie=r(2643),V=r(2683);function R(q,de){1&q&&n._UZ(0,"nz-alert",7)}function I(q,de){if(1&q&&(n.TgZ(0,"nz-form-item"),n._UZ(1,"cvc-form-errors-alert",8),n.qZA()),2&q){const ge=n.oxw();n.xp6(1),n.Q6J("errors",ge.errorMessages)}}function $(q,de){if(1&q){const ge=n.EpF();n.TgZ(0,"nz-form-item"),n.TgZ(1,"textarea",9),n.NdJ("ngModelChange",function(ue){return n.CHM(ge),n.oxw().coiText=ue}),n.qZA(),n.qZA()}if(2&q){const ge=n.oxw();n.xp6(1),n.Q6J("ngModel",ge.coiText)}}let ne=(()=>{class q{constructor(ge,pe){this.updateCoiGql=ge,this.coiUpdatedEvent=new n.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new o.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return q.\u0275fac=function(ge){return new(ge||q)(n.Y36(F.IP1),n.Y36(Z.Y))},q.\u0275cmp=n.Xpm({type:q,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(ge,pe){1&ge&&(n.TgZ(0,"nz-card"),n.YNc(1,R,1,0,"nz-alert",0),n.YNc(2,I,2,1,"nz-form-item",1),n.TgZ(3,"nz-spin",2),n.TgZ(4,"nz-form-item"),n.TgZ(5,"nz-radio-group",3),n.NdJ("ngModelChange",function(W){return pe.coiStatus=W}),n.TgZ(6,"label",4),n._uU(7,"I do not have any potential conflicts of interest."),n.qZA(),n.TgZ(8,"label",5),n._uU(9,"I do have a potential conflict of interest."),n.qZA(),n.qZA(),n.qZA(),n.YNc(10,$,2,1,"nz-form-item",1),n.TgZ(11,"nz-form-item"),n.TgZ(12,"button",6),n.NdJ("click",function(){return pe.updateCoi()}),n._uU(13," Save Conflict of Interest Statement "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&ge&&(n.xp6(1),n.Q6J("ngIf",pe.success),n.xp6(1),n.Q6J("ngIf",pe.errorMessages.length>0),n.xp6(1),n.Q6J("nzSpinning",pe.loading),n.xp6(2),n.Q6J("ngModel",pe.coiStatus),n.xp6(5),n.Q6J("ngIf","coiPresent"===pe.coiStatus),n.xp6(2),n.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[B.bd,X.O5,O.r,L.SK,G.Nx,K.V,H.W,le.Dg,te.JJ,te.On,le.Of,te.Fj,se.ix,ie.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),q})()},330:(Se,re,r)=>{r.d(re,{e:()=>K});var n=r(9808),o=r(4182),t=r(6949),S=r(7484),F=r(2359),Z=r(4546),B=r(7008),X=r(3868),O=r(7525),L=r(6042),G=r(5e3);let K=(()=>{class H{}return H.\u0275fac=function(te){return new(te||H)},H.\u0275mod=G.oAB({type:H}),H.\u0275inj=G.cJS({imports:[[n.ez,o.u5,Z.U5,o.UX,t.WG,S.vh,F.L,X.aF,L.sL,O.j,B.B]]}),H})()},712:(Se,re,r)=>{r.d(re,{ti:()=>Yi,$G1:()=>ko,iGM:()=>Go,KNk:()=>Ko,T97:()=>er,RMv:()=>Cr,LUc:()=>Er,iwm:()=>j,Vr2:()=>u,A94:()=>es,mdl:()=>k,Gbq:()=>ii,u4i:()=>oe,ejK:()=>ns,uBv:()=>ze,td:()=>ri,Tq1:()=>vi,q8c:()=>Fi,WRV:()=>lo,IZ6:()=>fo,qf4:()=>Co,Rdc:()=>Mo,gtM:()=>zr,fpJ:()=>fr,k2T:()=>pr,UWf:()=>ao,cMj:()=>os,UIR:()=>ai,E8d:()=>Te,P_b:()=>li,Mgx:()=>$e,iST:()=>di,Kk:()=>mi,OfU:()=>Ge,kQf:()=>qi,l4w:()=>Jr,JQ3:()=>hr,db2:()=>Es,h01:()=>We,wg3:()=>ss,k7O:()=>gi,kv3:()=>Jo,R8w:()=>Ye,GB2:()=>cs,Zyn:()=>Ke,dUU:()=>yi,kq9:()=>He,vRc:()=>Xo,Ud2:()=>Ii,GYx:()=>Zo,AO2:()=>Je,BTF:()=>Di,eY8:()=>Ni,_Aq:()=>Xe,pHu:()=>us,tI1:()=>ct,Q_P:()=>Mr,Sx0:()=>tt,Ybm:()=>Si,Cp0:()=>g,RTy:()=>E,sBY:()=>ps,zBv:()=>or,kqt:()=>C,Zhw:()=>nr,B0s:()=>$r,rzy:()=>Oi,BQZ:()=>P,sfv:()=>ce,TNk:()=>fs,rJ8:()=>Li,FOU:()=>Br,Q4m:()=>sr,Fvz:()=>he,cCu:()=>hs,_jb:()=>ro,MYm:()=>io,oRL:()=>mt,lfy:()=>cr,fow:()=>ft,X5f:()=>bi,WOS:()=>zs,Lr0:()=>Cs,Del:()=>Ts,xlL:()=>gt,io:()=>wi,WGV:()=>_s,OHm:()=>Ui,lYz:()=>ht,FKQ:()=>ur,B97:()=>Vi,mII:()=>Bo,ghc:()=>Pi,NQC:()=>vt,JDX:()=>lt,VZq:()=>Wi,EwB:()=>Gr,FJi:()=>Lt,L5n:()=>Hi,rZD:()=>zt,SrV:()=>yt,Bk6:()=>As,TiL:()=>po,yic:()=>Ct,SJD:()=>Vt,F3s:()=>It,jw9:()=>Tt,g0X:()=>Ms,iXf:()=>Nn,NbY:()=>Tr,kQl:()=>Dt,LLl:()=>$o,WFw:()=>Rr,o71:()=>_t,jMx:()=>Bs,A4J:()=>to,Vj7:()=>xr,D9L:()=>Qr,Xft:()=>Xr,mpB:()=>St,m$d:()=>Gs,IP1:()=>Zr,LiH:()=>$s,wbP:()=>kr,sLD:()=>xs,yqR:()=>Rs,cEv:()=>ho,i44:()=>Et,vMt:()=>Qo,tJ6:()=>zo,IRu:()=>Nt,Qzn:()=>ji,iJT:()=>Js,qP7:()=>l,Qtd:()=>Qs,FB1:()=>M,q1D:()=>Zs,huM:()=>c,ZYZ:()=>Eo,nnL:()=>Kr,Bo4:()=>Ks,ubO:()=>ks,tw_:()=>To,wpb:()=>h,BnY:()=>Ar,_eC:()=>_r,fwG:()=>_o,zwS:()=>Ao,pP7:()=>b,Tt7:()=>xo,Kmw:()=>Ro});var n=r(655);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(e)}var S=r(9245);function F(e,s){for(var y,i=/\r\n|[\n\r]/g,d=1,z=s+1;(y=i.exec(e.body))&&y.index<s;)d+=1,z=s+1-(y.index+y[0].length);return{line:d,column:z}}function Z(e){return B(e.source,F(e.source,e.start))}function B(e,s){var i=e.locationOffset.column-1,d=O(i)+e.body,z=s.line-1,T=s.line+(e.locationOffset.line-1),x=s.column+(1===s.line?i:0),me="".concat(e.name,":").concat(T,":").concat(x,"\n"),Le=d.split(/\r\n|[\n\r]/g),je=Le[z];if(je.length>120){for(var At=Math.floor(x/80),xt=x%80,ke=[],we=0;we<je.length;we+=80)ke.push(je.slice(we,we+80));return me+X([["".concat(T),ke[0]]].concat(ke.slice(1,At+1).map(function(Ft){return["",Ft]}),[[" ",O(xt-1)+"^"],["",ke[At+1]]]))}return me+X([["".concat(T-1),Le[z-1]],["".concat(T),je],["",O(x-1)+"^"],["".concat(T+1),Le[z+1]]])}function X(e){var s=e.filter(function(d){return void 0!==d[1]}),i=Math.max.apply(Math,s.map(function(d){return d[0].length}));return s.map(function(d){var y=d[1];return function L(e,s){return O(e-s.length)+s}(i,d[0])+(y?" | "+y:" |")}).join("\n")}function O(e){return Array(e+1).join(" ")}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(e)}function H(e,s){for(var i=0;i<s.length;i++){var d=s[i];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function ie(e,s){return!s||"object"!==G(s)&&"function"!=typeof s?V(e):s}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){var s="function"==typeof Map?new Map:void 0;return R=function(d){if(null===d||!function ne(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(d))return d;if("function"!=typeof d)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(d))return s.get(d);s.set(d,z)}function z(){return I(d,arguments,de(this).constructor)}return z.prototype=Object.create(d.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),q(z,d)},R(e)}function I(e,s,i){return(I=$()?Reflect.construct:function(z,y,T){var _=[null];_.push.apply(_,y);var me=new(Function.bind.apply(z,_));return T&&q(me,T.prototype),me}).apply(null,arguments)}function $(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function q(e,s){return(q=Object.setPrototypeOf||function(d,z){return d.__proto__=z,d})(e,s)}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(e)}var ge=function(e){!function te(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&q(e,s)}(i,e);var s=function se(e){var s=$();return function(){var z,d=de(e);if(s){var y=de(this).constructor;z=Reflect.construct(d,arguments,y)}else z=d.apply(this,arguments);return ie(this,z)}}(i);function i(d,z,y,T,_,x,me){var Le,je,At,xt,ke;(function K(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,i),ke=s.call(this,d);var bt,we=Array.isArray(z)?0!==z.length?z:void 0:z?[z]:void 0,Ft=y;!Ft&&we&&(Ft=null===(bt=we[0].loc)||void 0===bt?void 0:bt.source);var Rt,Ot=T;!Ot&&we&&(Ot=we.reduce(function(ut,Mt){return Mt.loc&&ut.push(Mt.loc.start),ut},[])),Ot&&0===Ot.length&&(Ot=void 0),T&&y?Rt=T.map(function(ut){return F(y,ut)}):we&&(Rt=we.reduce(function(ut,Mt){return Mt.loc&&ut.push(F(Mt.loc.source,Mt.loc.start)),ut},[]));var Pt=me;if(null==Pt&&null!=x){var kt=x.extensions;(function t(e){return"object"==o(e)&&null!==e})(kt)&&(Pt=kt)}return Object.defineProperties(V(ke),{name:{value:"GraphQLError"},message:{value:d,enumerable:!0,writable:!0},locations:{value:null!==(Le=Rt)&&void 0!==Le?Le:void 0,enumerable:null!=Rt},path:{value:null!=_?_:void 0,enumerable:null!=_},nodes:{value:null!=we?we:void 0},source:{value:null!==(je=Ft)&&void 0!==je?je:void 0},positions:{value:null!==(At=Ot)&&void 0!==At?At:void 0},originalError:{value:x},extensions:{value:null!==(xt=Pt)&&void 0!==xt?xt:void 0,enumerable:null!=Pt}}),(null==x?void 0:x.stack)?(Object.defineProperty(V(ke),"stack",{value:x.stack,writable:!0,configurable:!0}),ie(ke)):(Error.captureStackTrace?Error.captureStackTrace(V(ke),i):Object.defineProperty(V(ke),"stack",{value:Error().stack,writable:!0,configurable:!0}),ke)}return function le(e,s,i){s&&H(e.prototype,s),i&&H(e,i)}(i,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var i=0,d=e.nodes;i<d.length;i++){var z=d[i];z.loc&&(s+="\n\n"+Z(z.loc))}else if(e.source&&e.locations)for(var y=0,T=e.locations;y<T.length;y++)s+="\n\n"+B(e.source,T[y]);return s}(this)}},{key:S.YF,get:function(){return"Object"}}]),i}(R(Error));function ue(e,s,i){return new ge("Syntax Error: ".concat(i),void 0,e,[s])}var W=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),Y=r(848),p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),w=r(6261),A=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),U=r(2032),ye=function(){function e(i){var d=new Y.WU(p.SOF,0,0,0,0,null);this.source=i,this.lastToken=d,this.token=d,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var d=this.token;if(d.kind!==p.EOF)do{var z;d=null!==(z=d.next)&&void 0!==z?z:d.next=Ee(this,d)}while(d.kind===p.COMMENT);return d},e}();function _e(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Ee(e,s){for(var i=e.source,d=i.body,z=d.length,y=s.end;y<z;){var T=d.charCodeAt(y),_=e.line,x=1+y-e.lineStart;switch(T){case 65279:case 9:case 32:case 44:++y;continue;case 10:++y,++e.line,e.lineStart=y;continue;case 13:10===d.charCodeAt(y+1)?y+=2:++y,++e.line,e.lineStart=y;continue;case 33:return new Y.WU(p.BANG,y,y+1,_,x,s);case 35:return xe(i,y,_,x,s);case 36:return new Y.WU(p.DOLLAR,y,y+1,_,x,s);case 38:return new Y.WU(p.AMP,y,y+1,_,x,s);case 40:return new Y.WU(p.PAREN_L,y,y+1,_,x,s);case 41:return new Y.WU(p.PAREN_R,y,y+1,_,x,s);case 46:if(46===d.charCodeAt(y+1)&&46===d.charCodeAt(y+2))return new Y.WU(p.SPREAD,y,y+3,_,x,s);break;case 58:return new Y.WU(p.COLON,y,y+1,_,x,s);case 61:return new Y.WU(p.EQUALS,y,y+1,_,x,s);case 64:return new Y.WU(p.AT,y,y+1,_,x,s);case 91:return new Y.WU(p.BRACKET_L,y,y+1,_,x,s);case 93:return new Y.WU(p.BRACKET_R,y,y+1,_,x,s);case 123:return new Y.WU(p.BRACE_L,y,y+1,_,x,s);case 124:return new Y.WU(p.PIPE,y,y+1,_,x,s);case 125:return new Y.WU(p.BRACE_R,y,y+1,_,x,s);case 34:return 34===d.charCodeAt(y+1)&&34===d.charCodeAt(y+2)?ee(i,y,_,x,s,e):N(i,y,_,x,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ve(i,y,T,_,x,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Q(i,y,_,x,s)}throw ue(i,y,Ne(T))}return new Y.WU(p.EOF,z,z,e.line,1+y-e.lineStart,s)}function Ne(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(_e(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(_e(e),".")}function xe(e,s,i,d,z){var T,y=e.body,_=s;do{T=y.charCodeAt(++_)}while(!isNaN(T)&&(T>31||9===T));return new Y.WU(p.COMMENT,s,_,i,d,z,y.slice(s+1,_))}function Ve(e,s,i,d,z,y){var T=e.body,_=i,x=s,me=!1;if(45===_&&(_=T.charCodeAt(++x)),48===_){if((_=T.charCodeAt(++x))>=48&&_<=57)throw ue(e,x,"Invalid number, unexpected digit after 0: ".concat(_e(_),"."))}else x=be(e,x,_),_=T.charCodeAt(x);if(46===_&&(me=!0,_=T.charCodeAt(++x),x=be(e,x,_),_=T.charCodeAt(x)),(69===_||101===_)&&(me=!0,(43===(_=T.charCodeAt(++x))||45===_)&&(_=T.charCodeAt(++x)),x=be(e,x,_),_=T.charCodeAt(x)),46===_||function fe(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(_))throw ue(e,x,"Invalid number, expected digit but got: ".concat(_e(_),"."));return new Y.WU(me?p.FLOAT:p.INT,s,x,d,z,y,T.slice(s,x))}function be(e,s,i){var d=e.body,z=s,y=i;if(y>=48&&y<=57){do{y=d.charCodeAt(++z)}while(y>=48&&y<=57);return z}throw ue(e,z,"Invalid number, expected digit but got: ".concat(_e(y),"."))}function N(e,s,i,d,z){for(var y=e.body,T=s+1,_=T,x=0,me="";T<y.length&&!isNaN(x=y.charCodeAt(T))&&10!==x&&13!==x;){if(34===x)return me+=y.slice(_,T),new Y.WU(p.STRING,s,T+1,i,d,z,me);if(x<32&&9!==x)throw ue(e,T,"Invalid character within String: ".concat(_e(x),"."));if(++T,92===x){switch(me+=y.slice(_,T-1),x=y.charCodeAt(T)){case 34:me+='"';break;case 47:me+="/";break;case 92:me+="\\";break;case 98:me+="\b";break;case 102:me+="\f";break;case 110:me+="\n";break;case 114:me+="\r";break;case 116:me+="\t";break;case 117:var Le=D(y.charCodeAt(T+1),y.charCodeAt(T+2),y.charCodeAt(T+3),y.charCodeAt(T+4));if(Le<0){var je=y.slice(T+1,T+5);throw ue(e,T,"Invalid character escape sequence: \\u".concat(je,"."))}me+=String.fromCharCode(Le),T+=4;break;default:throw ue(e,T,"Invalid character escape sequence: \\".concat(String.fromCharCode(x),"."))}_=++T}}throw ue(e,T,"Unterminated string.")}function ee(e,s,i,d,z,y){for(var T=e.body,_=s+3,x=_,me=0,Le="";_<T.length&&!isNaN(me=T.charCodeAt(_));){if(34===me&&34===T.charCodeAt(_+1)&&34===T.charCodeAt(_+2))return Le+=T.slice(x,_),new Y.WU(p.BLOCK_STRING,s,_+3,i,d,z,(0,U.W7)(Le));if(me<32&&9!==me&&10!==me&&13!==me)throw ue(e,_,"Invalid character within String: ".concat(_e(me),"."));10===me?(++_,++y.line,y.lineStart=_):13===me?(10===T.charCodeAt(_+1)?_+=2:++_,++y.line,y.lineStart=_):92===me&&34===T.charCodeAt(_+1)&&34===T.charCodeAt(_+2)&&34===T.charCodeAt(_+3)?(Le+=T.slice(x,_)+'"""',x=_+=4):++_}throw ue(e,_,"Unterminated string.")}function D(e,s,i,d){return J(e)<<12|J(s)<<8|J(i)<<4|J(d)}function J(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Q(e,s,i,d,z){for(var y=e.body,T=y.length,_=s+1,x=0;_!==T&&!isNaN(x=y.charCodeAt(_))&&(95===x||x>=48&&x<=57||x>=65&&x<=90||x>=97&&x<=122);)++_;return new Y.WU(p.NAME,s,_,i,d,z,y.slice(s,_))}var Ie=function(){function e(i,d){var z=(0,w.T)(i)?i:new w.H(i);this._lexer=new ye(z),this._options=d}var s=e.prototype;return s.parseName=function(){var d=this.expectToken(p.NAME);return{kind:W.NAME,value:d.value,loc:this.loc(d)}},s.parseDocument=function(){var d=this._lexer.token;return{kind:W.DOCUMENT,definitions:this.many(p.SOF,this.parseDefinition,p.EOF),loc:this.loc(d)}},s.parseDefinition=function(){if(this.peek(p.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(p.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var d=this._lexer.token;if(this.peek(p.BRACE_L))return{kind:W.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(d)};var y,z=this.parseOperationType();return this.peek(p.NAME)&&(y=this.parseName()),{kind:W.OPERATION_DEFINITION,operation:z,name:y,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseOperationType=function(){var d=this.expectToken(p.NAME);switch(d.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(d)},s.parseVariableDefinitions=function(){return this.optionalMany(p.PAREN_L,this.parseVariableDefinition,p.PAREN_R)},s.parseVariableDefinition=function(){var d=this._lexer.token;return{kind:W.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(p.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(p.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(d)}},s.parseVariable=function(){var d=this._lexer.token;return this.expectToken(p.DOLLAR),{kind:W.VARIABLE,name:this.parseName(),loc:this.loc(d)}},s.parseSelectionSet=function(){var d=this._lexer.token;return{kind:W.SELECTION_SET,selections:this.many(p.BRACE_L,this.parseSelection,p.BRACE_R),loc:this.loc(d)}},s.parseSelection=function(){return this.peek(p.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var y,T,d=this._lexer.token,z=this.parseName();return this.expectOptionalToken(p.COLON)?(y=z,T=this.parseName()):T=z,{kind:W.FIELD,alias:y,name:T,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(p.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(d)}},s.parseArguments=function(d){return this.optionalMany(p.PAREN_L,d?this.parseConstArgument:this.parseArgument,p.PAREN_R)},s.parseArgument=function(){var d=this._lexer.token,z=this.parseName();return this.expectToken(p.COLON),{kind:W.ARGUMENT,name:z,value:this.parseValueLiteral(!1),loc:this.loc(d)}},s.parseConstArgument=function(){var d=this._lexer.token;return{kind:W.ARGUMENT,name:this.parseName(),value:(this.expectToken(p.COLON),this.parseValueLiteral(!0)),loc:this.loc(d)}},s.parseFragment=function(){var d=this._lexer.token;this.expectToken(p.SPREAD);var z=this.expectOptionalKeyword("on");return!z&&this.peek(p.NAME)?{kind:W.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(d)}:{kind:W.INLINE_FRAGMENT,typeCondition:z?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseFragmentDefinition=function(){var d,z=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(d=this._options)||void 0===d?void 0:d.experimentalFragmentVariables)?{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}:{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(d){var z=this._lexer.token;switch(z.kind){case p.BRACKET_L:return this.parseList(d);case p.BRACE_L:return this.parseObject(d);case p.INT:return this._lexer.advance(),{kind:W.INT,value:z.value,loc:this.loc(z)};case p.FLOAT:return this._lexer.advance(),{kind:W.FLOAT,value:z.value,loc:this.loc(z)};case p.STRING:case p.BLOCK_STRING:return this.parseStringLiteral();case p.NAME:switch(this._lexer.advance(),z.value){case"true":return{kind:W.BOOLEAN,value:!0,loc:this.loc(z)};case"false":return{kind:W.BOOLEAN,value:!1,loc:this.loc(z)};case"null":return{kind:W.NULL,loc:this.loc(z)};default:return{kind:W.ENUM,value:z.value,loc:this.loc(z)}}case p.DOLLAR:if(!d)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var d=this._lexer.token;return this._lexer.advance(),{kind:W.STRING,value:d.value,block:d.kind===p.BLOCK_STRING,loc:this.loc(d)}},s.parseList=function(d){var z=this,y=this._lexer.token;return{kind:W.LIST,values:this.any(p.BRACKET_L,function(){return z.parseValueLiteral(d)},p.BRACKET_R),loc:this.loc(y)}},s.parseObject=function(d){var z=this,y=this._lexer.token;return{kind:W.OBJECT,fields:this.any(p.BRACE_L,function(){return z.parseObjectField(d)},p.BRACE_R),loc:this.loc(y)}},s.parseObjectField=function(d){var z=this._lexer.token,y=this.parseName();return this.expectToken(p.COLON),{kind:W.OBJECT_FIELD,name:y,value:this.parseValueLiteral(d),loc:this.loc(z)}},s.parseDirectives=function(d){for(var z=[];this.peek(p.AT);)z.push(this.parseDirective(d));return z},s.parseDirective=function(d){var z=this._lexer.token;return this.expectToken(p.AT),{kind:W.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(d),loc:this.loc(z)}},s.parseTypeReference=function(){var z,d=this._lexer.token;return this.expectOptionalToken(p.BRACKET_L)?(z=this.parseTypeReference(),this.expectToken(p.BRACKET_R),z={kind:W.LIST_TYPE,type:z,loc:this.loc(d)}):z=this.parseNamedType(),this.expectOptionalToken(p.BANG)?{kind:W.NON_NULL_TYPE,type:z,loc:this.loc(d)}:z},s.parseNamedType=function(){var d=this._lexer.token;return{kind:W.NAMED_TYPE,name:this.parseName(),loc:this.loc(d)}},s.parseTypeSystemDefinition=function(){var d=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(d.kind===p.NAME)switch(d.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(d)},s.peekDescription=function(){return this.peek(p.STRING)||this.peek(p.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("schema");var y=this.parseDirectives(!0),T=this.many(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);return{kind:W.SCHEMA_DEFINITION,description:z,directives:y,operationTypes:T,loc:this.loc(d)}},s.parseOperationTypeDefinition=function(){var d=this._lexer.token,z=this.parseOperationType();this.expectToken(p.COLON);var y=this.parseNamedType();return{kind:W.OPERATION_TYPE_DEFINITION,operation:z,type:y,loc:this.loc(d)}},s.parseScalarTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("scalar");var y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.SCALAR_TYPE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("type");var y=this.parseName(),T=this.parseImplementsInterfaces(),_=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.OBJECT_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:_,fields:x,loc:this.loc(d)}},s.parseImplementsInterfaces=function(){var d;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLImplementsInterfaces)){var z=[];this.expectOptionalToken(p.AMP);do{z.push(this.parseNamedType())}while(this.expectOptionalToken(p.AMP)||this.peek(p.NAME));return z}return this.delimitedMany(p.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var d;return!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLEmptyFields)&&this.peek(p.BRACE_L)&&this._lexer.lookahead().kind===p.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(p.BRACE_L,this.parseFieldDefinition,p.BRACE_R)},s.parseFieldDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseArgumentDefs();this.expectToken(p.COLON);var _=this.parseTypeReference(),x=this.parseDirectives(!0);return{kind:W.FIELD_DEFINITION,description:z,name:y,arguments:T,type:_,directives:x,loc:this.loc(d)}},s.parseArgumentDefs=function(){return this.optionalMany(p.PAREN_L,this.parseInputValueDef,p.PAREN_R)},s.parseInputValueDef=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName();this.expectToken(p.COLON);var _,T=this.parseTypeReference();this.expectOptionalToken(p.EQUALS)&&(_=this.parseValueLiteral(!0));var x=this.parseDirectives(!0);return{kind:W.INPUT_VALUE_DEFINITION,description:z,name:y,type:T,defaultValue:_,directives:x,loc:this.loc(d)}},s.parseInterfaceTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("interface");var y=this.parseName(),T=this.parseImplementsInterfaces(),_=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.INTERFACE_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:_,fields:x,loc:this.loc(d)}},s.parseUnionTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("union");var y=this.parseName(),T=this.parseDirectives(!0),_=this.parseUnionMemberTypes();return{kind:W.UNION_TYPE_DEFINITION,description:z,name:y,directives:T,types:_,loc:this.loc(d)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(p.EQUALS)?this.delimitedMany(p.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("enum");var y=this.parseName(),T=this.parseDirectives(!0),_=this.parseEnumValuesDefinition();return{kind:W.ENUM_TYPE_DEFINITION,description:z,name:y,directives:T,values:_,loc:this.loc(d)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseEnumValueDefinition,p.BRACE_R)},s.parseEnumValueDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.ENUM_VALUE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseInputObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("input");var y=this.parseName(),T=this.parseDirectives(!0),_=this.parseInputFieldsDefinition();return{kind:W.INPUT_OBJECT_TYPE_DEFINITION,description:z,name:y,directives:T,fields:_,loc:this.loc(d)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseInputValueDef,p.BRACE_R)},s.parseTypeSystemExtension=function(){var d=this._lexer.lookahead();if(d.kind===p.NAME)switch(d.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(d)},s.parseSchemaExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var z=this.parseDirectives(!0),y=this.optionalMany(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);if(0===z.length&&0===y.length)throw this.unexpected();return{kind:W.SCHEMA_EXTENSION,directives:z,operationTypes:y,loc:this.loc(d)}},s.parseScalarTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var z=this.parseName(),y=this.parseDirectives(!0);if(0===y.length)throw this.unexpected();return{kind:W.SCALAR_TYPE_EXTENSION,name:z,directives:y,loc:this.loc(d)}},s.parseObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),_=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===_.length)throw this.unexpected();return{kind:W.OBJECT_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:_,loc:this.loc(d)}},s.parseInterfaceTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),_=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===_.length)throw this.unexpected();return{kind:W.INTERFACE_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:_,loc:this.loc(d)}},s.parseUnionTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseUnionMemberTypes();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.UNION_TYPE_EXTENSION,name:z,directives:y,types:T,loc:this.loc(d)}},s.parseEnumTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseEnumValuesDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.ENUM_TYPE_EXTENSION,name:z,directives:y,values:T,loc:this.loc(d)}},s.parseInputObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseInputFieldsDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.INPUT_OBJECT_TYPE_EXTENSION,name:z,directives:y,fields:T,loc:this.loc(d)}},s.parseDirectiveDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("directive"),this.expectToken(p.AT);var y=this.parseName(),T=this.parseArgumentDefs(),_=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var x=this.parseDirectiveLocations();return{kind:W.DIRECTIVE_DEFINITION,description:z,name:y,arguments:T,repeatable:_,locations:x,loc:this.loc(d)}},s.parseDirectiveLocations=function(){return this.delimitedMany(p.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var d=this._lexer.token,z=this.parseName();if(void 0!==A[z.value])return z;throw this.unexpected(d)},s.loc=function(d){var z;if(!0!==(null===(z=this._options)||void 0===z?void 0:z.noLocation))return new Y.Ye(d,this._lexer.lastToken,this._lexer.source)},s.peek=function(d){return this._lexer.token.kind===d},s.expectToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z;throw ue(this._lexer.source,z.start,"Expected ".concat(Oe(d),", found ").concat(Re(z),"."))},s.expectOptionalToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z},s.expectKeyword=function(d){var z=this._lexer.token;if(z.kind!==p.NAME||z.value!==d)throw ue(this._lexer.source,z.start,'Expected "'.concat(d,'", found ').concat(Re(z),"."));this._lexer.advance()},s.expectOptionalKeyword=function(d){var z=this._lexer.token;return z.kind===p.NAME&&z.value===d&&(this._lexer.advance(),!0)},s.unexpected=function(d){var z=null!=d?d:this._lexer.token;return ue(this._lexer.source,z.start,"Unexpected ".concat(Re(z),"."))},s.any=function(d,z,y){this.expectToken(d);for(var T=[];!this.expectOptionalToken(y);)T.push(z.call(this));return T},s.optionalMany=function(d,z,y){if(this.expectOptionalToken(d)){var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T}return[]},s.many=function(d,z,y){this.expectToken(d);var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T},s.delimitedMany=function(d,z){this.expectOptionalToken(d);var y=[];do{y.push(z.call(this))}while(this.expectOptionalToken(d));return y},e}();function Re(e){var s=e.value;return Oe(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function Oe(e){return function De(e){return e===p.BANG||e===p.DOLLAR||e===p.AMP||e===p.PAREN_L||e===p.PAREN_R||e===p.SPREAD||e===p.COLON||e===p.EQUALS||e===p.AT||e===p.BRACKET_L||e===p.BRACKET_R||e===p.BRACE_L||e===p.PIPE||e===p.BRACE_R}(e)?'"'.concat(e,'"'):e}var Be=new Map,ve=new Map,Ue=!0,Me=!1;function Pe(e){return e.replace(/[\s,]+/g," ").trim()}function ot(e){var s=Pe(e);if(!Be.has(s)){var i=function Ce(e,s){return new Ie(e,s).parseDocument()}(e,{experimentalFragmentVariables:Me,allowLegacyFragmentVariables:Me});if(!i||"Document"!==i.kind)throw new Error("Not a valid GraphQL document.");Be.set(s,function et(e){var s=new Set(e.definitions);s.forEach(function(d){d.loc&&delete d.loc,Object.keys(d).forEach(function(z){var y=d[z];y&&"object"==typeof y&&s.add(y)})});var i=e.loc;return i&&(delete i.startToken,delete i.endToken),e}(function it(e){var s=new Set,i=[];return e.definitions.forEach(function(d){if("FragmentDefinition"===d.kind){var z=d.name.value,y=function nt(e){return Pe(e.source.body.substring(e.start,e.end))}(d.loc),T=ve.get(z);T&&!T.has(y)?Ue&&console.warn("Warning: fragment with name "+z+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):T||ve.set(z,T=new Set),T.add(y),s.has(y)||(s.add(y),i.push(d))}else i.push(d)}),(0,n.pi)((0,n.pi)({},e),{definitions:i})}(i)))}return Be.get(s)}function v(e){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var d=e[0];return s.forEach(function(z,y){d+=z&&"Document"===z.kind?z.loc.source.body:z,d+=e[y+1]}),ot(d)}var e,Qe_gql=v;(e=v||(v={})).gql=Qe_gql,e.resetCaches=function rt(){Be.clear(),ve.clear()},e.disableFragmentWarnings=function st(){Ue=!1},e.enableExperimentalFragmentVariables=function at(){Me=!0},e.disableExperimentalFragmentVariables=function dt(){Me=!1},v.default=v;var m=r(9298),a=r(5e3),j=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(j||(j={})),j))(),u=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(u||(u={})),u))(),k=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(k||(k={})),k))(),oe=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(oe||(oe={})),oe))(),ze=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(ze||(ze={})),ze))(),Te=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Te||(Te={})),Te))(),$e=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}($e||($e={})),$e))(),Ge=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Ge||(Ge={})),Ge))(),We=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(We||(We={})),We))(),Ye=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Ye||(Ye={})),Ye))(),Ke=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(Ke||(Ke={})),Ke))(),He=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(He||(He={})),He))(),Je=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Je||(Je={})),Je))(),Xe=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(Xe||(Xe={})),Xe))(),ct=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(ct||(ct={})),ct))(),tt=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(tt||(tt={})),tt))(),g=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(g||(g={})),g))(),E=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(E||(E={})),E))(),C=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(C||(C={})),C))(),P=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(P||(P={})),P))(),ce=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ce||(ce={})),ce))(),he=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(he||(he={})),he))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(mt||(mt={})),mt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),gt=(()=>(function(e){e.Id="ID",e.Name="NAME"}(gt||(gt={})),gt))(),ht=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(vt||(vt={})),vt))(),lt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(lt||(lt={})),lt))(),Lt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Lt||(Lt={})),Lt))(),zt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(zt||(zt={})),zt))(),yt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(Ct||(Ct={})),Ct))(),It=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(It||(It={})),It))(),Tt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Tt||(Tt={})),Tt))(),Dt=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Dt||(Dt={})),Dt))(),_t=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(_t||(_t={})),_t))(),St=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(St||(St={})),St))(),Et=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Et||(Et={})),Et))(),Nt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Nt||(Nt={})),Nt))(),l=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(l||(l={})),l))(),M=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(M||(M={})),M))(),c=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(c||(c={})),c))(),h=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(h||(h={})),h))(),b=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(b||(b={})),b))();const ae=v`
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
    `,qe=v`
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
    `,$t=v`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Bt=v`
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
    `,Wt=v`
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
    `,Jt=v`
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
    `,jt=v`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
}
    `,Ut=v`
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
    `,Kt=v`
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
    ${Ut}`,Ht=v`
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
    `,Xt=v`
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
    `,en=v`
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
    ${v`
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
    `}`,tn=v`
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
    `,nn=v`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,on=v`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,rn=v`
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
    `,sn=v`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
}
    `,an=v`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,cn=v`
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
    `,ln=v`
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
    `,un=v`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,dn=v`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,pn=v`
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
    `,mn=v`
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
    `,fn=v`
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
    `,gn=v`
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
    `,hn=v`
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
    `,vn=v`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,zn=v`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,yn=v`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
}
    `,Cn=v`
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
    `,In=v`
    fragment menuVariant on Variant {
  id
  name
}
    `,Tn=v`
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
    `,Dn=v`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,_n=v`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,Sn=v`
    fragment EvidenceTransferSearchFields on EvidenceItem {
  id
  name
}
    `,En=v`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Qt=v`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Vt=v`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,Nn=v`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Zt=v`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,An=v`
    fragment AddVariantFields on AddVariantPayload {
  new
  variant {
    id
    name
  }
}
    `,On=(v`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,v`
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
    `),Mn=v`
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
    `,Ln=v`
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
    `,Fn=v`
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
    ${v`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `}`,Rn=v`
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
    `,Pn=v`
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
  nccnGuidelineVersion
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
    `,$n=v`
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
    `,bn=v`
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
    `,Gn=v`
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
    `,wn=v`
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
    `,Bn=v`
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
    `,Un=v`
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
    `,Qn=v`
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
    `,Vn=v`
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
    `,Zn=v`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Yn=v`
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
    `,kn=v`
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
    `,Wn=v`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Jn=v`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,jn=v`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Yt=v`
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
    ${Ut}`,Kn=v`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Hn=v`
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
    `,Xn=v`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
}
    `,qn=v`
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
    `,ti=v`
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
    ${v`
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
    `}`,ni=v`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ae}`;let ii=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ni}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=v`
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
    ${qe}`;let ri=(()=>{class e extends m.AE{constructor(i){super(i),this.document=oi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const si=v`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${$t}`;let ai=(()=>{class e extends m.AE{constructor(i){super(i),this.document=si}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=v`
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
    `;let li=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ci}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=v`
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
    ${Bt}`;let di=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ui}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=v`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Wt}`;let mi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=pi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=v`
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
    `;let gi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=fi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=v`
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
    ${Jt}`;let vi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=hi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=v`
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
    `;let yi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=zi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=v`
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
    ${jt}`;let Ii=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ci}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ti=v`
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
    ${Kt}`;let Di=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ti}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _i=v`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ht}`;let Si=(()=>{class e extends m.AE{constructor(i){super(i),this.document=_i}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=v`
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
    ${Xt}`;let Ni=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ei}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=v`
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
    ${en}`;let Oi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ai}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mi=v`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${tn}`;let Li=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Mi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=v`
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
    `;let Fi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=xi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ri=v`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${nn}`;let Pi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ri}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=v`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${on}`;let bi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=$i}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=v`
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
    ${rn}`;let wi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Gi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=v`
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
    `;let Ui=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Bi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=v`
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
    ${sn}`;let Vi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Qi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=v`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Yi=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Zi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=v`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Wi=(()=>{class e extends m.mm{constructor(i){super(i),this.document=ki}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=v`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${an}`;let ji=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ji}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=v`
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
    ${cn}`;let Hi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ki}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=v`
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
    ${ln}`;let qi=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Xi}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const eo=v`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${un}`;let to=(()=>{class e extends m.AE{constructor(i){super(i),this.document=eo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=v`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let io=(()=>{class e extends m.mm{constructor(i){super(i),this.document=no}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oo=v`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let ro=(()=>{class e extends m.mm{constructor(i){super(i),this.document=oo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=v`
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
    ${dn}`;let ao=(()=>{class e extends m.AE{constructor(i){super(i),this.document=so}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=v`
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
    ${pn}`;let lo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=co}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const uo=v`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${mn}`;let po=(()=>{class e extends m.AE{constructor(i){super(i),this.document=uo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=v`
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
    ${fn}`;let fo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=mo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const go=v`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${gn}`;let ho=(()=>{class e extends m.AE{constructor(i){super(i),this.document=go}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=v`
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
    ${hn}`;let zo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=vo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=v`
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
    ${vn}`;let Co=(()=>{class e extends m.AE{constructor(i){super(i),this.document=yo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=v`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${zn}`;let To=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Io}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=v`
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
    ${yn}`;let _o=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Do}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=v`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Cn}`;let Eo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=So}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const No=v`
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
    ${In}`;let Ao=(()=>{class e extends m.AE{constructor(i){super(i),this.document=No}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oo=v`
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
    `;let Mo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Oo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=v`
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
    `;let xo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Lo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=v`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Ro=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Fo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=v`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let $o=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Po}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bo=v`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Bt}`;let Go=(()=>{class e extends m.mm{constructor(i){super(i),this.document=bo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=v`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Tn}`;let Bo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=wo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=v`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Qo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Uo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vo=v`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Zo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Vo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=v`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let ko=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Yo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wo=v`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let Jo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Wo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=v`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Dn}`;let Ko=(()=>{class e extends m.mm{constructor(i){super(i),this.document=jo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=v`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Xo=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ho}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=v`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${_n}`;let er=(()=>{class e extends m.mm{constructor(i){super(i),this.document=qo}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=v`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let nr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=tr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=v`
    query EvidenceTransferSearch($id: Int, $first: Int) {
  evidenceItems(id: $id, first: $first) {
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
        ...EvidenceTransferSearchFields
      }
    }
  }
}
    ${Sn}`;let or=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ir}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=v`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${En}`;let sr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=rr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=v`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let cr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ar}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=v`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let ur=(()=>{class e extends m.AE{constructor(i){super(i),this.document=lr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=v`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Qt}`;let pr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=dr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=v`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let fr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=mr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gr=v`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let hr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=gr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=v`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let zr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=vr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=v`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Vt}`;let Cr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=yr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=v`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Qt}`;let Tr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ir}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=v`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Zt}`;let _r=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Dr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=v`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${An}`;let Er=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Sr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Zt}`;const Nr=v`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Ar=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Nr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Or=v`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${On}`;let Mr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Or}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=v`
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
    `;let xr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Lr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Mn}`;const Fr=v`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Rr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Fr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=v`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let $r=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Pr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const br=v`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Gr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=br}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=v`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Ln}`;let Br=(()=>{class e extends m.AE{constructor(i){super(i),this.document=wr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ur=v`
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
    `;let Qr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Ur}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vr=v`
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
    `;let Zr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Vr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=v`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let kr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Yr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wr=v`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Jr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Wr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=v`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Fn}`;let Kr=(()=>{class e extends m.AE{constructor(i){super(i),this.document=jr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=v`
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
    `;let Xr=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Hr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=v`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Rn}`;let es=(()=>{class e extends m.AE{constructor(i){super(i),this.document=qr}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=v`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Pn}`;let ns=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ts}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const is=v`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
  }
}
    `;let os=(()=>{class e extends m.AE{constructor(i){super(i),this.document=is}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=v`
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
    `;let ss=(()=>{class e extends m.AE{constructor(i){super(i),this.document=rs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=v`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
  }
}
    `;let cs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=as}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=v`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${$n}`;let us=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ls}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=v`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${bn}`;let ps=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ds}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=v`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Gn}`;let fs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ms}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gs=v`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${wn}`;let hs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=gs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=v`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Bn}`;let zs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=vs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=v`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Un}`;let Cs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=ys}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=v`
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
    ${Qn}`;let Ts=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Is}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=v`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
  }
}
    `;let _s=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ds}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=v`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Vn}`;let Es=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ss}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ns=v`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Zn}`;let As=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ns}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Os=v`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Yn}`;let Ms=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Os}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ls=v`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${kn}`;let xs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ls}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fs=v`
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
    ${jn}
${Jn}
${Wn}
${Yt}`;let Rs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Fs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=v`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Yt}`;let $s=(()=>{class e extends m.mm{constructor(i){super(i),this.document=Ps}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bs=v`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Kn}`;let Gs=(()=>{class e extends m.mm{constructor(i){super(i),this.document=bs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=v`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Bs=(()=>{class e extends m.mm{constructor(i){super(i),this.document=ws}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Us=v`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Hn}`;let Qs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Us}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
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
    `;const Vs=v`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Xn}`;let Zs=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Vs}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ys=v`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
  }
}
    `;let ks=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ys}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ws=v`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${qn}`;let Js=(()=>{class e extends m.AE{constructor(i){super(i),this.document=Ws}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=v`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${ti}`;let Ks=(()=>{class e extends m.AE{constructor(i){super(i),this.document=js}}return e.\u0275fac=function(i){return new(i||e)(a.LFG(m._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(Se,re,r)=>{r.r(re),r.d(re,{LayoutModule:()=>Nt});var n=r(9808),o=r(325),t=r(5e3),S=r(9350),F=r(8929),Z=r(7625),B=r(655),X=r(4090),O=r(1721),L=r(4219),G=r(925),K=r(647),H=r(226),le=r(5113);const te=["*"],se=["nz-sider-trigger",""];function ie(l,M){}function V(l,M){if(1&l&&(t.ynx(0),t.YNc(1,ie,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||h)}}function R(l,M){}function I(l,M){if(1&l&&(t.ynx(0),t.YNc(1,R,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||h)}}function $(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function ne(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function q(l,M){if(1&l&&(t.YNc(0,$,1,1,"i",4),t.YNc(1,ne,1,1,"i",4)),2&l){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function de(l,M){1&l&&t._UZ(0,"i",6)}function ge(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.setCollapsed(!b.nzCollapsed)}),t.qZA()}if(2&l){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),W=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),Y=(()=>{class l{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,h){2&c&&(t.Udp("width",h.isNormalTrigger?h.siderWidth:null),t.ekj("ant-layout-sider-trigger",h.isNormalTrigger)("ant-layout-sider-zero-width-trigger",h.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",h.isZeroTrigger&&h.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",h.isZeroTrigger&&!h.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:se,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,h){1&c&&(t.YNc(0,V,2,1,"ng-container",0),t.YNc(1,I,2,1,"ng-container",0),t.YNc(2,q,2,2,"ng-template",null,1,t.W1O),t.YNc(4,de,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",h.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",h.isNormalTrigger))},directives:[n.O5,n.tP,K.Ls],encapsulation:2,changeDetection:0}),l})(),p=(()=>{class l{constructor(c,h,b){this.platform=c,this.cdr=h,this.breakpointService=b,this.destroy$=new F.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,O.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(X.ow,!0).pipe((0,Z.R)(this.destroy$)).subscribe(c=>{const h=this.nzBreakpoint;h&&(0,O.ov)().subscribe(()=>{this.matchBreakPoint=!c[h],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:h,nzCollapsedWidth:b,nzWidth:ae}=c;(h||b||ae)&&this.updateStyleMap(),h&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(G.t4),t.Y36(t.sBO),t.Y36(X.r3))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-sider"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,L.wO,5),2&c){let ae;t.iGM(ae=t.CRH())&&(h.nzMenuDirective=ae.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,h){2&c&&(t.Udp("flex",h.flexSetting)("max-width",h.widthSetting)("min-width",h.widthSetting)("width",h.widthSetting),t.ekj("ant-layout-sider-zero-width",h.nzCollapsed&&0===h.nzCollapsedWidth)("ant-layout-sider-light","light"===h.nzTheme)("ant-layout-sider-dark","dark"===h.nzTheme)("ant-layout-sider-collapsed",h.nzCollapsed)("ant-layout-sider-has-trigger",h.nzCollapsible&&null!==h.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:te,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,ge,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",h.nzCollapsible&&null!==h.nzTrigger))},directives:[Y,n.O5],encapsulation:2,changeDetection:0}),(0,B.gn)([(0,O.yF)()],l.prototype,"nzReverseArrow",void 0),(0,B.gn)([(0,O.yF)()],l.prototype,"nzCollapsible",void 0),(0,B.gn)([(0,O.yF)()],l.prototype,"nzCollapsed",void 0),l})(),w=(()=>{class l{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new F.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(H.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-layout"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,p,4),2&c){let ae;t.iGM(ae=t.CRH())&&(h.listOfNzSiderComponent=ae)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,h){2&c&&t.ekj("ant-layout-rtl","rtl"===h.dir)("ant-layout-has-sider",h.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),A=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,n.ez,K.PV,le.xu,G.ud]]}),l})();var U=r(404),ye=r(1894),De=r(712),_e=r(373),Ee=r(1047),Ne=r(4182),xe=r(2845),Ve=r(4832),be=r(969),N=r(3753),ee=r(2654),D=r(8514),J=r(6787),Q=r(2198),fe=r(2868),Ce=r(6792),Ae=r(2986),Fe=r(7545),Ie=r(1159),Re=r(7429),Oe=r(8076);function Be(l,M){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const ve=[[["nz-auto-option"]]],Ue=["nz-auto-option"],Me=["*"],Pe=["panel"],nt=["content"];function it(l,M){}function et(l,M){1&l&&t.YNc(0,it,0,0,"ng-template")}function ot(l,M){1&l&&t.Hsn(0)}function v(l,M){if(1&l&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&l){const c=M.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function rt(l,M){if(1&l&&t.YNc(0,v,2,3,"nz-auto-option",7),2&l){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function st(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(b){return t.CHM(c),t.oxw().onAnimationEvent(b)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,et,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&l){const c=t.MAs(6),h=t.MAs(8),b=t.oxw();t.ekj("ant-select-dropdown-hidden",!b.showPanel)("ant-select-dropdown-rtl","rtl"===b.dir),t.Q6J("ngClass",b.nzOverlayClassName)("ngStyle",b.nzOverlayStyle)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",b.nzDataSource?h:c)}}let at=(()=>{class l{constructor(){}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ue,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,h){1&c&&(t.F$t(ve),t.TgZ(0,"div",0),t.YNc(1,Be,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",h.nzLabel))},directives:[be.f],encapsulation:2,changeDetection:0}),l})();class dt{constructor(M,c=!1){this.source=M,this.isUserInput=c}}let Qe=(()=>{class l{constructor(c,h,b,ae){this.ngZone=c,this.changeDetectorRef=h,this.element=b,this.nzAutocompleteOptgroupComponent=ae,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new F.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,N.R)(this.element.nativeElement,"mouseenter").pipe((0,Q.h)(()=>this.mouseEntered.observers.length>0),(0,Z.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,N.R)(this.element.nativeElement,"mousedown").pipe((0,Z.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,O.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new dt(this,c))}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(at,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,h){1&c&&t.NdJ("click",function(){return h.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",h.selected.toString())("aria-disabled",h.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",h.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",h.selected)("ant-select-item-option-active",h.active)("ant-select-item-option-disabled",h.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Me,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,B.gn)([(0,O.yF)()],l.prototype,"nzDisabled",void 0),l})();const pt={provide:Ne.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class l{constructor(c,h,b,ae,qe){this.elementRef=c,this.overlay=h,this.viewContainerRef=b,this.nzInputGroupWhitSuffixOrPrefixDirective=ae,this.document=qe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new F.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,Z.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const h=c.keyCode,b=h===Ie.LH||h===Ie.JH;h===Ie.hY&&c.preventDefault(),!this.panelOpen||h!==Ie.hY&&h!==Ie.Mf?this.panelOpen&&h===Ie.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&b&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),h===Ie.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const h=c.target,b=this.document;let ae=h.value;"number"===h.type&&(ae=""===ae?null:parseFloat(ae)),this.previousValue!==ae&&(this.previousValue=ae,this.onChange(ae),this.canOpen()&&b.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,fe.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Ce.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,Q.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function m(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Re.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new xe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new xe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new xe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const h=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(h),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const h=this.nzAutocomplete.getOption(c),b=h?h.getLabel():c;this.elementRef.nativeElement.value=null!=b?b:"",this.nzAutocomplete.nzBackfill||(this.previousValue=b)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(xe.aV),t.Y36(t.s_b),t.Y36(Ee.ke,8),t.Y36(n.K0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,h){1&c&&t.NdJ("focusin",function(){return h.handleFocus()})("blur",function(){return h.handleBlur()})("input",function(ae){return h.handleInput(ae)})("keydown",function(ae){return h.handleKeydown(ae)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),l})(),j=(()=>{class l{constructor(c,h,b,ae){this.changeDetectorRef=c,this.ngZone=h,this.directionality=b,this.noAnimation=ae,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(qe,$t)=>qe===$t,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new F.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ee.w.EMPTY,this.optionMouseEnterSubscription=ee.w.EMPTY,this.dataSourceChangeSubscription=ee.w.EMPTY,this.optionSelectionChanges=(0,D.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Fe.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,D.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Fe.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const h=this.options.get(c);h&&!h.active?(this.activeItem=h,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((h,b,ae)=>-1===h?this.compareWith(c,b.nzValue)?ae:-1:h,-1)}getOption(c){return this.options.find(h=>this.compareWith(c,h.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(h=>{!h.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,h=!1){this.options.forEach(b=>{b!==c&&(h&&b.deselect(),b.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,Q.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(H.Is,8),t.Y36(Ve.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-autocomplete"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,Qe,5),2&c){let ae;t.iGM(ae=t.CRH())&&(h.fromContentOptions=ae)}},viewQuery:function(c,h){if(1&c&&(t.Gf(t.Rgc,5),t.Gf(Pe,5),t.Gf(nt,5),t.Gf(Qe,5)),2&c){let b;t.iGM(b=t.CRH())&&(h.template=b.first),t.iGM(b=t.CRH())&&(h.panel=b.first),t.iGM(b=t.CRH())&&(h.content=b.first),t.iGM(b=t.CRH())&&(h.fromDataSourceOptions=b)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Me,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,h){1&c&&(t.F$t(),t.YNc(0,st,9,10,"ng-template"))},directives:[Qe,n.mk,n.PC,Ve.P,n.tP,n.sg],encapsulation:2,data:{animation:[Oe.mF]},changeDetection:0}),(0,B.gn)([(0,O.yF)()],l.prototype,"nzDefaultActiveFirstOption",void 0),(0,B.gn)([(0,O.yF)()],l.prototype,"nzBackfill",void 0),l})(),f=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,n.ez,xe.U8,Ne.u5,be.T,Ve.g,Ee.o7]]}),l})();var u=r(6949);function k(l,M){1&l&&t._UZ(0,"i",5)}function oe(l,M){if(1&l){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.searchQuery="",b.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._UZ(5,"span",9),t._UZ(6,"br"),t._UZ(7,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&l){const c=M.$implicit,h=t.oxw();t.xp6(1),t.Q6J("routerLink",h.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",h.urlForResult(c)),t.xp6(2),t.Q6J("nzType",h.iconNameForResult(c)),t.xp6(1),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let ze=(()=>{class l{constructor(c,h){this.gql=c,this.router=h,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,_e.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case De.rZD.EvidenceItem:return"civic:evidence";case De.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let h;switch(c.resultType){case De.rZD.VariantGroup:h="variant-groups";break;case De.rZD.EvidenceItem:h="evidence";break;default:h=`${c.resultType.toLowerCase()}s`}return`/${h}/${c.id}/summary`}quicksearchSelected(c){let h=c.target.value;this.searchQuery="",this.router.navigate([h])}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(De.ghc),t.Y36(o.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,h){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(ae){return h.searchQuery=ae})("ngModelChange",function(){return h.refresh()})("keyup.enter",function(ae){return h.quicksearchSelected(ae)}),t.qZA(),t.qZA(),t.YNc(2,k,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,oe,8,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const b=t.MAs(3),ae=t.MAs(5);t.Q6J("nzSuffix",b),t.xp6(1),t.Q6J("ngModel",h.searchQuery)("nzAutocomplete",ae),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,h.searchResults$))}},directives:[Ee.gB,Ee.ke,Ee.Zp,Ne.Fj,a,Ne.JJ,Ne.On,K.Ls,j,n.sg,o.yS,Qe],pipes:[u.fM],styles:[""]}),l})();var Ze=r(1912),Te=r(4850),$e=r(1059),Ge=r(8144),We=r(4401),Ye=r(3677),Ke=r(7881),He=r(3640),Je=r(8785);function Xe(l,M){if(1&l&&(t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"i",10),t._UZ(3,"nz-badge",11),t.qZA(),t.BQk()),2&l){const c=M.ngrxLet;t.xp6(1),t.MGl("nzTooltipTitle","You have ",c," unread notification(s)."),t.xp6(2),t.Q6J("nzShowDot",c>0)}}function ct(l,M){if(1&l&&(t.TgZ(0,"a",7),t.YNc(1,Xe,4,2,"ng-container",8),t.qZA()),2&l){const c=t.oxw().ngIf,h=t.oxw();t.MGl("routerLink","/users/",c.id,"/notifications"),t.xp6(1),t.Q6J("ngrxLet",h.unreadCount$)}}function tt(l,M){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"i",13),t._UZ(2,"i",14),t.TgZ(3,"nz-dropdown-menu",null,15),t.TgZ(5,"ul",16),t.TgZ(6,"li",17),t.TgZ(7,"a",18),t._uU(8," Add Evidence "),t.qZA(),t.qZA(),t.TgZ(9,"li",17),t.TgZ(10,"a",19),t._uU(11," Add Assertion "),t.qZA(),t.qZA(),t.TgZ(12,"li",17),t.TgZ(13,"a",19),t._uU(14," Suggest Source "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const c=t.MAs(4);t.Q6J("nzDropdownMenu",c)}}function g(l,M){1&l&&t._UZ(0,"nz-badge",27),2&l&&t.Q6J("nzShowDot",!0)}function E(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(3).coiUpdateModalVisible=!0}),t.TgZ(1,"nz-badge",28),t.TgZ(2,"strong"),t._uU(3," Please provide an updated conflict of interest statement. "),t.qZA(),t.qZA(),t.qZA()}2&l&&(t.xp6(1),t.Q6J("nzShowDot",!0))}function C(l,M){1&l&&(t.TgZ(0,"li",17),t.TgZ(1,"a",29),t._uU(2," Admin Console "),t.qZA(),t.qZA())}function P(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"cvc-user-avatar",20),t._UZ(2,"i",14),t.YNc(3,g,1,1,"nz-badge",21),t.TgZ(4,"nz-dropdown-menu",null,22),t.TgZ(6,"ul",16),t.TgZ(7,"li",17),t._uU(8,"Signed In as "),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t._UZ(11,"li",23),t.YNc(12,E,4,1,"li",24),t.TgZ(13,"li",17),t.TgZ(14,"a",7),t._uU(15," Your Profile "),t.qZA(),t.qZA(),t.YNc(16,C,3,0,"li",25),t._UZ(17,"li",23),t.TgZ(18,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).signOut()}),t._uU(19,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const c=t.MAs(5),h=t.oxw().ngIf;t.Q6J("nzDropdownMenu",c),t.xp6(1),t.Q6J("user",h),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(7),t.Oqu(h.username),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(2),t.MGl("routerLink","/users/",h.id,""),t.xp6(2),t.Q6J("ngIf",h.isAdmin)}}function ce(l,M){1&l&&(t.ynx(0),t.TgZ(1,"nz-space",4),t.YNc(2,ct,2,2,"a",5),t.YNc(3,tt,15,1,"div",6),t.YNc(4,P,20,7,"div",6),t.qZA(),t.BQk())}function he(l,M){1&l&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function Gt(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"cvc-user-coi-form",30),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let mt=(()=>{class l{constructor(c,h){this.queryService=c,this.unreadCountGql=h,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Te.U)(({data:b})=>b.notifications.unreadCount),(0,$e.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(S.a),t.Y36(De.Kmw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink",4,"nzSpaceItem"],["class","topMenuIcon","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"routerLink"],[4,"ngrxLet"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(c,h){if(1&c&&(t.YNc(0,ce,5,0,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return h.coiUpdateModalVisible=ae})("nzOnCancel",function(){return h.handleCoiModalCancel()}),t.YNc(3,he,2,0,"ng-template",null,2,t.W1O),t.YNc(5,Gt,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const b=t.MAs(4),ae=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,h.viewer$)),t.xp6(2),t.Q6J("nzVisible",h.coiUpdateModalVisible)("nzContent",ae)("nzTitle",b)("nzFooter",null)}},directives:[n.O5,Ge.NU,Ge.$1,o.yS,u.eJ,U.SY,K.Ls,We.x7,Ye.cm,Ye.RR,L.wO,L.r9,Ke.L,L.YV,He.du,Je.t],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),l})();function ft(l,M){1&l&&t._UZ(0,"img",62)}function gt(l,M){1&l&&t._UZ(0,"img",63)}function ht(l,M){1&l&&t._UZ(0,"cvc-login-button")}function vt(l,M){1&l&&t._UZ(0,"cvc-viewer-button")}const lt=function(l){return{"is-collapsed":l}},zt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class l{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(S.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-layout"]],decls:137,vars:44,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"menu-group",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","file-add"],["routerLink","/source-suggestions"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-revision"],["routerLink","/revisions"],["nz-icon","","nzType","civic-comment"],["routerLink","/comments"],["nz-icon","","nzType","civic-flag"],["routerLink","/flags"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/pages/about"],["routerLink","/pages/help"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(c,h){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(ae){return h.isCollapsed=ae}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,ft,1,0,"img",4),t.YNc(5,gt,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t._UZ(8,"i",8),t.TgZ(9,"span"),t.TgZ(10,"a",9),t._uU(11,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"li",7),t._UZ(13,"i",10),t.TgZ(14,"span"),t.TgZ(15,"a",11),t._uU(16,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"li",7),t._UZ(18,"i",12),t.TgZ(19,"span"),t.TgZ(20,"a",13),t._uU(21,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"li",7),t._UZ(23,"i",14),t.TgZ(24,"span"),t.TgZ(25,"a",15),t._uU(26,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"li",7),t._UZ(28,"i",16),t.TgZ(29,"span"),t.TgZ(30,"a",17),t._uU(31,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ul",6),t.TgZ(33,"li",7),t._UZ(34,"i",18),t.TgZ(35,"span"),t.TgZ(36,"a",19),t._uU(37,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"li",7),t._UZ(39,"i",20),t.TgZ(40,"span"),t.TgZ(41,"a",21),t._uU(42,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"li",7),t._UZ(44,"i",22),t.TgZ(45,"span"),t.TgZ(46,"a",23),t._uU(47,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"li",7),t._UZ(49,"i",24),t.TgZ(50,"span"),t.TgZ(51,"a",25),t._uU(52,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"li",7),t._UZ(54,"i",26),t.TgZ(55,"span"),t.TgZ(56,"a",27),t._uU(57,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"li",7),t._UZ(59,"i",28),t.TgZ(60,"span"),t.TgZ(61,"a",29),t._uU(62,"Source Suggestions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"li",7),t._UZ(64,"i",30),t.TgZ(65,"span"),t.TgZ(66,"a",31),t._uU(67,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"ul",6),t.TgZ(69,"li",7),t._UZ(70,"i",32),t.TgZ(71,"span"),t.TgZ(72,"a",33),t._uU(73,"Revisions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"li",7),t._UZ(75,"i",34),t.TgZ(76,"span"),t.TgZ(77,"a",35),t._uU(78,"Comments"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"li",7),t._UZ(80,"i",36),t.TgZ(81,"span"),t.TgZ(82,"a",37),t._uU(83,"Flags"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(84,"ul",6),t.TgZ(85,"li",7),t._UZ(86,"i",38),t.TgZ(87,"span"),t.TgZ(88,"a",39),t._uU(89,"Community"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"li",7),t._UZ(91,"i",40),t.TgZ(92,"span"),t.TgZ(93,"a",41),t._uU(94,"Users"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"li",7),t._UZ(96,"i",42),t.TgZ(97,"span"),t.TgZ(98,"a",43),t._uU(99,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(100,"ul",6),t.TgZ(101,"li",7),t._UZ(102,"i",44),t.TgZ(103,"span"),t.TgZ(104,"a",45),t._uU(105,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"li",7),t._UZ(107,"i",46),t.TgZ(108,"span"),t.TgZ(109,"a",47),t._uU(110,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(111,"nz-layout",48),t.TgZ(112,"nz-header"),t.TgZ(113,"div",49),t.TgZ(114,"div",50),t.TgZ(115,"span",51),t.NdJ("click",function(){return h.isCollapsed=!h.isCollapsed}),t._UZ(116,"i",52),t.qZA(),t.qZA(),t.TgZ(117,"div",53),t._UZ(118,"cvc-quicksearch"),t.qZA(),t.TgZ(119,"div",54),t.TgZ(120,"ul",55),t.TgZ(121,"li",56),t.TgZ(122,"a",57),t._uU(123,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(124,"li",56),t.TgZ(125,"a",58),t._uU(126,"Help"),t.qZA(),t.qZA(),t.TgZ(127,"li",56),t.TgZ(128,"a",59),t._uU(129,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(130,"div",60),t.YNc(131,ht,1,0,"cvc-login-button",61),t.ALo(132,"async"),t.YNc(133,vt,1,0,"cvc-viewer-button",61),t.ALo(134,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(135,"nz-content"),t._UZ(136,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",h.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(40,lt,h.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!h.isCollapsed),t.xp6(1),t.Q6J("ngIf",h.isCollapsed),t.xp6(1),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Groups":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Source Suggestions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Revisions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Comments":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Flags":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Community":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Statistics":""),t.xp6(5),t.Q6J("ngClass",t.VKq(42,lt,h.isCollapsed)),t.xp6(5),t.Q6J("nzType",h.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(132,36,h.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(134,38,h.signedIn$)))},directives:[w,p,o.yS,n.mk,n.O5,L.wO,L.r9,U.SY,K.Ls,W,ye.SK,ye.t3,ze,Ze.s,mt,pe,o.lC],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.menu-group[_ngcontent-%COMP%]{margin-bottom:1.5em}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),l})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(9397),r.e(1679),r.e(3883),r.e(5968),r.e(2630),r.e(5343),r.e(8592),r.e(7014)]).then(r.bind(r,136)).then(l=>l.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(6471),r.e(2891),r.e(8604),r.e(4702),r.e(8592),r.e(6618)]).then(r.bind(r,3553)).then(l=>l.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([r.e(1945),r.e(1854)]).then(r.bind(r,1854)).then(l=>l.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([r.e(1945),r.e(9946)]).then(r.bind(r,5094)).then(l=>l.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(9397),r.e(2891),r.e(3883),r.e(8604),r.e(9246),r.e(4702),r.e(8592),r.e(1398)]).then(r.bind(r,1398)).then(l=>l.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(9397),r.e(3883),r.e(8312)]).then(r.bind(r,9450)).then(l=>l.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(2891)]).then(r.bind(r,7727)).then(l=>l.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([r.e(1945),r.e(3133)]).then(r.bind(r,3133)).then(l=>l.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(681)]).then(r.bind(r,681)).then(l=>l.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(9397),r.e(2891),r.e(3883),r.e(3061),r.e(8604),r.e(7581),r.e(8592),r.e(4592)]).then(r.bind(r,4592)).then(l=>l.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(9397),r.e(3883),r.e(2927)]).then(r.bind(r,7180)).then(l=>l.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([r.e(1945),r.e(166)]).then(r.bind(r,166)).then(l=>l.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(6471),r.e(2891),r.e(8604),r.e(4702),r.e(8592),r.e(266)]).then(r.bind(r,5943)).then(l=>l.SourcesModule),data:{breadcrumb:"Sources"}},{path:"source-suggestions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(6471),r.e(2891),r.e(8604),r.e(2168)]).then(r.bind(r,4039)).then(l=>l.SourceSuggestionsModule),data:{breadcrumb:"SourceSuggestions"}},{path:"users",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(9397),r.e(2891),r.e(3883),r.e(3061),r.e(8604),r.e(7581),r.e(8592),r.e(2764)]).then(r.bind(r,2764)).then(l=>l.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9931),r.e(305),r.e(1720),r.e(9397),r.e(6471),r.e(2891),r.e(1679),r.e(8190),r.e(9246),r.e(8592),r.e(6614)]).then(r.bind(r,4373)).then(l=>l.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(8592),r.e(4415)]).then(r.bind(r,6295)).then(l=>l.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(5551)]).then(r.bind(r,5951)).then(l=>l.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>r.e(6528).then(r.bind(r,6528)).then(l=>l.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6412)]).then(r.bind(r,6412)).then(l=>l.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(329)]).then(r.bind(r,329)).then(l=>l.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([r.e(1945),r.e(229)]).then(r.bind(r,229)).then(l=>l.PagesModule),data:{breadcrumb:"Pages"}}]}];let yt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[o.Bz.forChild(zt)],o.Bz]}),l})();var Ct=r(3618),It=r(5109),Tt=r(4546);let Dt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,Ne.u5,o.Bz,u.WG,Ee.o7,Tt.U5,K.PV,f]]}),l})();var wt=r(1844),_t=r(5473),St=r(330);let Et=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,u.WG,Ye.b1,o.Bz,Ge.zf,K.PV,We.mS,U.cg,He.Qp,_t.H,St.e]]}),l})(),Nt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,yt,K.PV,ye.Jb,A,L.ip,U.cg,Ct.ZJ,It.s,wt.B,Et,Dt]]}),l})()},6792:(Se,re,r)=>{r.d(re,{g:()=>F});var n=r(353),t=r(3489),S=r(9312);function F(O,L=n.P){const K=function o(O){return O instanceof Date&&!isNaN(+O)}(O)?+O-L.now():Math.abs(O);return H=>H.lift(new Z(K,L))}class Z{constructor(L,G){this.delay=L,this.scheduler=G}call(L,G){return G.subscribe(new B(L,this.delay,this.scheduler))}}class B extends t.L{constructor(L,G,K){super(L),this.delay=G,this.scheduler=K,this.queue=[],this.active=!1,this.errored=!1}static dispatch(L){const G=L.source,K=G.queue,H=L.scheduler,le=L.destination;for(;K.length>0&&K[0].time-H.now()<=0;)K.shift().notification.observe(le);if(K.length>0){const te=Math.max(0,K[0].time-H.now());this.schedule(L,te)}else this.unsubscribe(),G.active=!1}_schedule(L){this.active=!0,this.destination.add(L.schedule(B.dispatch,this.delay,{source:this,destination:this.destination,scheduler:L}))}scheduleNotification(L){if(!0===this.errored)return;const G=this.scheduler,K=new X(G.now()+this.delay,L);this.queue.push(K),!1===this.active&&this._schedule(G)}_next(L){this.scheduleNotification(S.P.createNext(L))}_error(L){this.errored=!0,this.queue=[],this.destination.error(L),this.unsubscribe()}_complete(){this.scheduleNotification(S.P.createComplete()),this.unsubscribe()}}class X{constructor(L,G){this.time=L,this.notification=G}}},373:(Se,re,r)=>{r.d(re,{j:()=>o});var n=r(4850);function o(...S){const F=S.length;if(0===F)throw new Error("list of properties cannot be empty.");return Z=>(0,n.U)(function t(S,F){return B=>{let X=B;for(let O=0;O<F;O++){const L=null!=X?X[S[O]]:void 0;if(void 0===L)return;X=L}return X}}(S,F))(Z)}},6699:(Se,re,r)=>{r.d(re,{Dz:()=>te,Rt:()=>ie});var n=r(655),o=r(5e3),t=r(9439),S=r(1721),F=r(925),Z=r(9808),B=r(647),X=r(226);const O=["textEl"];function L(V,R){if(1&V&&o._UZ(0,"i",3),2&V){const I=o.oxw();o.Q6J("nzType",I.nzIcon)}}function G(V,R){if(1&V){const I=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(ne){return o.CHM(I),o.oxw().imgError(ne)}),o.qZA()}if(2&V){const I=o.oxw();o.Q6J("src",I.nzSrc,o.LSH),o.uIk("srcset",I.nzSrcSet,o.LSH)("alt",I.nzAlt)}}function K(V,R){if(1&V&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&V){const I=o.oxw();o.Q6J("ngStyle",I.textStyles),o.xp6(2),o.Oqu(I.nzText)}}let te=(()=>{class V{constructor(I,$,ne,q){this.nzConfigService=I,this.elementRef=$,this.cdr=ne,this.platform=q,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,$=this.el.getBoundingClientRect().width,ne=2*this.nzGap<$?2*this.nzGap:8;this.textStyles={transform:`scale(${$-ne<I?($-ne)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(I){return new(I||V)(o.Y36(t.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(F.t4))},V.\u0275cmp=o.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(I,$){if(1&I&&o.Gf(O,5),2&I){let ne;o.iGM(ne=o.CRH())&&($.textEl=ne.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,$){2&I&&(o.Udp("width",$.customSize)("height",$.customSize)("line-height",$.customSize)("font-size",$.hasIcon&&$.customSize?$.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===$.nzSize)("ant-avatar-sm","small"===$.nzSize)("ant-avatar-square","square"===$.nzShape)("ant-avatar-circle","circle"===$.nzShape)("ant-avatar-icon",$.nzIcon)("ant-avatar-image",$.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,$){1&I&&(o.YNc(0,L,1,1,"i",0),o.YNc(1,G,1,3,"img",1),o.YNc(2,K,3,2,"span",2)),2&I&&(o.Q6J("ngIf",$.nzIcon&&$.hasIcon),o.xp6(1),o.Q6J("ngIf",$.nzSrc&&$.hasSrc),o.xp6(1),o.Q6J("ngIf",$.nzText&&$.hasText))},directives:[Z.O5,B.Ls,Z.PC],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,t.oS)()],V.prototype,"nzShape",void 0),(0,n.gn)([(0,t.oS)()],V.prototype,"nzSize",void 0),(0,n.gn)([(0,t.oS)(),(0,S.Rn)()],V.prototype,"nzGap",void 0),V})(),ie=(()=>{class V{}return V.\u0275fac=function(I){return new(I||V)},V.\u0275mod=o.oAB({type:V}),V.\u0275inj=o.cJS({imports:[[X.vT,Z.ez,B.PV,F.ud]]}),V})()},4401:(Se,re,r)=>{r.d(re,{x7:()=>ue,mS:()=>Y,F9:()=>W});var n=r(655),o=r(5e3),t=r(8929),S=r(7625),F=r(8076),Z=r(9439),B=r(1721),X=r(226),O=r(4832),L=r(9808),G=r(969),K=r(7144);function H(p,w){if(1&p&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&p){const A=w.$implicit,U=o.oxw(2).index,ye=o.oxw(2);o.ekj("current",A===ye.countArray[U]),o.xp6(1),o.hij(" ",A," ")}}function le(p,w){if(1&p&&(o.ynx(0),o.YNc(1,H,2,3,"p",5),o.BQk()),2&p){const A=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",A.countSingleArray)}}function te(p,w){if(1&p&&(o.TgZ(0,"span",3),o.YNc(1,le,2,1,"ng-container",4),o.qZA()),2&p){const A=w.index,U=o.oxw(2);o.Udp("transform","translateY("+100*-U.countArray[A]+"%)"),o.Q6J("nzNoAnimation",U.noAnimation),o.xp6(1),o.Q6J("ngIf",!U.nzDot&&void 0!==U.countArray[A])}}function se(p,w){if(1&p&&(o.ynx(0),o.YNc(1,te,2,4,"span",2),o.BQk()),2&p){const A=o.oxw();o.xp6(1),o.Q6J("ngForOf",A.maxNumberArray)}}function ie(p,w){if(1&p&&o._uU(0),2&p){const A=o.oxw();o.hij("",A.nzOverflowCount,"+")}}function V(p,w){if(1&p&&(o.ynx(0),o._uU(1),o.BQk()),2&p){const A=o.oxw(2);o.xp6(1),o.Oqu(A.nzText)}}function R(p,w){if(1&p&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,V,2,1,"ng-container",1),o.qZA(),o.BQk()),2&p){const A=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",A.nzStatus||A.presetColor,""),o.Udp("background",!A.presetColor&&A.nzColor),o.Q6J("ngStyle",A.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",A.nzText)}}function I(p,w){if(1&p&&o._UZ(0,"nz-badge-sup",5),2&p){const A=o.oxw(2);o.Q6J("nzOffset",A.nzOffset)("nzTitle",A.nzTitle)("nzStyle",A.nzStyle)("nzDot",A.nzDot)("nzOverflowCount",A.nzOverflowCount)("disableAnimation",!!(A.nzStandalone||A.nzStatus||A.nzColor||null!=A.noAnimation&&A.noAnimation.nzNoAnimation))("nzCount",A.nzCount)("noAnimation",!(null==A.noAnimation||!A.noAnimation.nzNoAnimation))}}function $(p,w){if(1&p&&(o.ynx(0),o.YNc(1,I,1,8,"nz-badge-sup",4),o.BQk()),2&p){const A=o.oxw();o.xp6(1),o.Q6J("ngIf",A.showSup)}}const ne=["*"];function q(p,w){if(1&p&&(o.ynx(0),o._uU(1),o.BQk()),2&p){const A=o.oxw();o.xp6(1),o.Oqu(A.nzText)}}const de=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let ge=(()=>{class p{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(A){const{nzOverflowCount:U,nzCount:ye}=A;ye&&"number"==typeof ye.currentValue&&(this.count=Math.max(0,ye.currentValue),this.countArray=this.count.toString().split("").map(De=>+De)),U&&this.generateMaxNumberArray()}}return p.\u0275fac=function(A){return new(A||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(A,U){2&A&&(o.uIk("title",null===U.nzTitle?"":U.nzTitle||U.nzCount),o.d8E("@.disabled",U.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(U.nzStyle),o.Udp("right",U.nzOffset&&U.nzOffset[0]?-U.nzOffset[0]:null,"px")("margin-top",U.nzOffset&&U.nzOffset[1]?U.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!U.nzDot)("ant-badge-dot",U.nzDot)("ant-badge-multiple-words",U.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(A,U){if(1&A&&(o.YNc(0,se,2,1,"ng-container",0),o.YNc(1,ie,1,1,"ng-template",null,1,o.W1O)),2&A){const ye=o.MAs(2);o.Q6J("ngIf",U.count<=U.nzOverflowCount)("ngIfElse",ye)}},directives:[L.O5,L.sg,O.P],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),p})(),ue=(()=>{class p{constructor(A,U,ye,De,_e,Ee){this.nzConfigService=A,this.renderer=U,this.cdr=ye,this.elementRef=De,this.directionality=_e,this.noAnimation=Ee,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var A;null===(A=this.directionality.change)||void 0===A||A.pipe((0,S.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(A){const{nzColor:U,nzShowDot:ye,nzDot:De,nzCount:_e,nzShowZero:Ee}=A;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null),(ye||De||_e||Ee)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(A){return new(A||p)(o.Y36(Z.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(X.Is,8),o.Y36(O.P,9))},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(A,U){2&A&&o.ekj("ant-badge-status",U.nzStatus)("ant-badge-not-a-wrapper",!!(U.nzStandalone||U.nzStatus||U.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:ne,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(A,U){1&A&&(o.F$t(),o.YNc(0,R,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,$,2,1,"ng-container",1)),2&A&&(o.Q6J("ngIf",U.nzStatus||U.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",U.nzCount))},directives:[ge,L.O5,L.PC,G.f],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),(0,n.gn)([(0,B.yF)()],p.prototype,"nzShowZero",void 0),(0,n.gn)([(0,B.yF)()],p.prototype,"nzShowDot",void 0),(0,n.gn)([(0,B.yF)()],p.prototype,"nzStandalone",void 0),(0,n.gn)([(0,B.yF)()],p.prototype,"nzDot",void 0),(0,n.gn)([(0,Z.oS)()],p.prototype,"nzOverflowCount",void 0),(0,n.gn)([(0,Z.oS)()],p.prototype,"nzColor",void 0),p})(),W=(()=>{class p{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(A){const{nzColor:U}=A;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null)}}return p.\u0275fac=function(A){return new(A||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:ne,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(A,U){1&A&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,q,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&A&&(o.xp6(1),o.Tol(U.presetColor&&"ant-ribbon-color-"+U.presetColor),o.Udp("background-color",!U.presetColor&&U.nzColor),o.ekj("ant-ribbon-placement-end","end"===U.nzPlacement)("ant-ribbon-placement-start","start"===U.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",U.nzText),o.xp6(1),o.Udp("color",!U.presetColor&&U.nzColor))},directives:[G.f],encapsulation:2,changeDetection:0}),p})(),Y=(()=>{class p{}return p.\u0275fac=function(A){return new(A||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[[X.vT,L.ez,K.Q8,G.T,O.g]]}),p})()},7484:(Se,re,r)=>{r.d(re,{bd:()=>xe,vh:()=>be,_i:()=>_e});var n=r(655),o=r(5e3),t=r(1721),S=r(8929),F=r(7625),Z=r(9439),B=r(226),X=r(9808),O=r(969);function L(N,ee){1&N&&o.Hsn(0)}const G=["*"];function K(N,ee){1&N&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&N&&o.Q6J("ngClass",ee.$implicit)}function H(N,ee){if(1&N&&(o.TgZ(0,"div",2),o.YNc(1,K,2,1,"div",3),o.qZA()),2&N){const D=ee.$implicit;o.xp6(1),o.Q6J("ngForOf",D)}}function le(N,ee){if(1&N&&(o.ynx(0),o._uU(1),o.BQk()),2&N){const D=o.oxw(3);o.xp6(1),o.Oqu(D.nzTitle)}}function te(N,ee){if(1&N&&(o.TgZ(0,"div",11),o.YNc(1,le,2,1,"ng-container",12),o.qZA()),2&N){const D=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",D.nzTitle)}}function se(N,ee){if(1&N&&(o.ynx(0),o._uU(1),o.BQk()),2&N){const D=o.oxw(3);o.xp6(1),o.Oqu(D.nzExtra)}}function ie(N,ee){if(1&N&&(o.TgZ(0,"div",13),o.YNc(1,se,2,1,"ng-container",12),o.qZA()),2&N){const D=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",D.nzExtra)}}function V(N,ee){}function R(N,ee){if(1&N&&(o.ynx(0),o.YNc(1,V,0,0,"ng-template",14),o.BQk()),2&N){const D=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",D.listOfNzCardTabComponent.template)}}function I(N,ee){if(1&N&&(o.TgZ(0,"div",6),o.TgZ(1,"div",7),o.YNc(2,te,2,1,"div",8),o.YNc(3,ie,2,1,"div",9),o.qZA(),o.YNc(4,R,2,1,"ng-container",10),o.qZA()),2&N){const D=o.oxw();o.xp6(2),o.Q6J("ngIf",D.nzTitle),o.xp6(1),o.Q6J("ngIf",D.nzExtra),o.xp6(1),o.Q6J("ngIf",D.listOfNzCardTabComponent)}}function $(N,ee){}function ne(N,ee){if(1&N&&(o.TgZ(0,"div",15),o.YNc(1,$,0,0,"ng-template",14),o.qZA()),2&N){const D=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",D.nzCover)}}function q(N,ee){1&N&&(o.ynx(0),o.Hsn(1),o.BQk())}function de(N,ee){1&N&&o._UZ(0,"nz-card-loading")}function ge(N,ee){}function pe(N,ee){if(1&N&&(o.TgZ(0,"li"),o.TgZ(1,"span"),o.YNc(2,ge,0,0,"ng-template",14),o.qZA(),o.qZA()),2&N){const D=ee.$implicit,J=o.oxw(2);o.Udp("width",100/J.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",D)}}function ue(N,ee){if(1&N&&(o.TgZ(0,"ul",16),o.YNc(1,pe,3,3,"li",17),o.qZA()),2&N){const D=o.oxw();o.xp6(1),o.Q6J("ngForOf",D.nzActions)}}let De=(()=>{class N{constructor(){this.nzHoverable=!0}}return N.\u0275fac=function(D){return new(D||N)},N.\u0275dir=o.lG2({type:N,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(D,J){2&D&&o.ekj("ant-card-hoverable",J.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,n.gn)([(0,t.yF)()],N.prototype,"nzHoverable",void 0),N})(),_e=(()=>{class N{}return N.\u0275fac=function(D){return new(D||N)},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card-tab"]],viewQuery:function(D,J){if(1&D&&o.Gf(o.Rgc,7),2&D){let Q;o.iGM(Q=o.CRH())&&(J.template=Q.first)}},exportAs:["nzCardTab"],ngContentSelectors:G,decls:1,vars:0,template:function(D,J){1&D&&(o.F$t(),o.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),N})(),Ee=(()=>{class N{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return N.\u0275fac=function(D){return new(D||N)},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(D,J){1&D&&(o.TgZ(0,"div",0),o.YNc(1,H,2,1,"div",1),o.qZA()),2&D&&(o.xp6(1),o.Q6J("ngForOf",J.listOfLoading))},directives:[X.sg,X.mk],encapsulation:2,changeDetection:0}),N})(),xe=(()=>{class N{constructor(D,J,Q){this.nzConfigService=D,this.cdr=J,this.directionality=Q,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new S.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,F.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var D;null===(D=this.directionality.change)||void 0===D||D.pipe((0,F.R)(this.destroy$)).subscribe(J=>{this.dir=J,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(D){return new(D||N)(o.Y36(Z.jY),o.Y36(o.sBO),o.Y36(B.Is,8))},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card"]],contentQueries:function(D,J,Q){if(1&D&&(o.Suo(Q,_e,5),o.Suo(Q,De,4)),2&D){let fe;o.iGM(fe=o.CRH())&&(J.listOfNzCardTabComponent=fe.first),o.iGM(fe=o.CRH())&&(J.listOfNzCardGridDirective=fe)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(D,J){2&D&&o.ekj("ant-card-loading",J.nzLoading)("ant-card-bordered",!1===J.nzBorderless&&J.nzBordered)("ant-card-hoverable",J.nzHoverable)("ant-card-small","small"===J.nzSize)("ant-card-contain-grid",J.listOfNzCardGridDirective&&J.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===J.nzType)("ant-card-contain-tabs",!!J.listOfNzCardTabComponent)("ant-card-rtl","rtl"===J.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:G,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(D,J){if(1&D&&(o.F$t(),o.YNc(0,I,5,3,"div",0),o.YNc(1,ne,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,q,2,0,"ng-container",3),o.YNc(4,de,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,ue,2,1,"ul",5)),2&D){const Q=o.MAs(5);o.Q6J("ngIf",J.nzTitle||J.nzExtra||J.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",J.nzCover),o.xp6(1),o.Q6J("ngStyle",J.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!J.nzLoading)("ngIfElse",Q),o.xp6(3),o.Q6J("ngIf",J.nzActions.length)}},directives:[Ee,X.O5,O.f,X.tP,X.PC,X.sg],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBordered",void 0),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBorderless",void 0),(0,n.gn)([(0,t.yF)()],N.prototype,"nzLoading",void 0),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzHoverable",void 0),(0,n.gn)([(0,Z.oS)()],N.prototype,"nzSize",void 0),N})(),be=(()=>{class N{}return N.\u0275fac=function(D){return new(D||N)},N.\u0275mod=o.oAB({type:N}),N.\u0275inj=o.cJS({imports:[[X.ez,O.T],B.vT]}),N})()},3677:(Se,re,r)=>{r.d(re,{cm:()=>_e,b1:()=>be,wA:()=>xe,RR:()=>Ve});var n=r(655),o=r(1159),t=r(7429),S=r(5e3),F=r(8929),Z=r(591),B=r(6787),X=r(3753),O=r(8896),L=r(3426),G=r(7604),K=r(4850),H=r(7545),le=r(2198),te=r(7138),se=r(5778),ie=r(7625),V=r(9439),R=r(6950),I=r(1721),$=r(2845),ne=r(925),q=r(226),de=r(9808),ge=r(4182),pe=r(6042),ue=r(4832),W=r(969),Y=r(647),p=r(4219),w=r(8076);function A(D,J){if(1&D){const Q=S.EpF();S.TgZ(0,"div",0),S.NdJ("@slideMotion.done",function(Ce){return S.CHM(Q),S.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return S.CHM(Q),S.oxw().setMouseState(!0)})("mouseleave",function(){return S.CHM(Q),S.oxw().setMouseState(!1)}),S.Hsn(1),S.qZA()}if(2&D){const Q=S.oxw();S.ekj("ant-dropdown-rtl","rtl"===Q.dir),S.Q6J("ngClass",Q.nzOverlayClassName)("ngStyle",Q.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("nzNoAnimation",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)}}const U=["*"],De=[R.yW.bottomLeft,R.yW.bottomRight,R.yW.topRight,R.yW.topLeft];let _e=(()=>{class D{constructor(Q,fe,Ce,Ae,Fe,Ie){this.nzConfigService=Q,this.elementRef=fe,this.overlay=Ce,this.renderer=Ae,this.viewContainerRef=Fe,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new F.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new Z.X(!1),this.nzTrigger$=new Z.X("hover"),this.overlayClose$=new F.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new S.vpe}setDropdownMenuValue(Q,fe){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(Q,fe)}ngAfterViewInit(){if(this.nzDropdownMenu){const Q=this.elementRef.nativeElement,fe=(0,B.T)((0,X.R)(Q,"mouseenter").pipe((0,G.h)(!0)),(0,X.R)(Q,"mouseleave").pipe((0,G.h)(!1))),Ae=(0,B.T)(this.nzDropdownMenu.mouseState$,fe),Fe=(0,X.R)(Q,"click").pipe((0,K.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,H.w)(ve=>"hover"===ve?Ae:"click"===ve?Fe:O.E)),Re=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,le.h)(()=>this.nzClickHide),(0,G.h)(!1)),Oe=(0,B.T)(Ie,Re,this.overlayClose$).pipe((0,le.h)(()=>!this.nzDisabled)),Be=(0,B.T)(this.inputVisible$,Oe);(0,L.aj)([Be,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,K.U)(([ve,Ue])=>ve||Ue),(0,te.e)(150),(0,se.x)(),(0,le.h)(()=>this.platform.isBrowser),(0,ie.R)(this.destroy$)).subscribe(ve=>{const Me=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:Q).getBoundingClientRect().width;this.nzVisible!==ve&&this.nzVisibleChange.emit(ve),this.nzVisible=ve,ve?(this.overlayRef?this.overlayRef.getConfig().minWidth=Me:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Me,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,B.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,le.h)(Pe=>!this.elementRef.nativeElement.contains(Pe.target))),this.overlayRef.keydownEvents().pipe((0,le.h)(Pe=>Pe.keyCode===o.hY&&!(0,o.Vb)(Pe)))).pipe((0,ie.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([R.yW[this.nzPlacement],...De]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,ie.R)(this.destroy$)).subscribe(ve=>{"void"===ve.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(Q){const{nzVisible:fe,nzDisabled:Ce,nzOverlayClassName:Ae,nzOverlayStyle:Fe,nzTrigger:Ie}=Q;if(Ie&&this.nzTrigger$.next(this.nzTrigger),fe&&this.inputVisible$.next(this.nzVisible),Ce){const Re=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Re,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Re,"disabled")}Ae&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Fe&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return D.\u0275fac=function(Q){return new(Q||D)(S.Y36(V.jY),S.Y36(S.SBq),S.Y36($.aV),S.Y36(S.Qsj),S.Y36(S.s_b),S.Y36(ne.t4))},D.\u0275dir=S.lG2({type:D,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[S.TTD]}),(0,n.gn)([(0,V.oS)(),(0,I.yF)()],D.prototype,"nzBackdrop",void 0),(0,n.gn)([(0,I.yF)()],D.prototype,"nzClickHide",void 0),(0,n.gn)([(0,I.yF)()],D.prototype,"nzDisabled",void 0),(0,n.gn)([(0,I.yF)()],D.prototype,"nzVisible",void 0),D})(),Ee=(()=>{class D{}return D.\u0275fac=function(Q){return new(Q||D)},D.\u0275mod=S.oAB({type:D}),D.\u0275inj=S.cJS({}),D})(),xe=(()=>{class D{constructor(Q,fe,Ce){this.renderer=Q,this.nzButtonGroupComponent=fe,this.elementRef=Ce}ngAfterViewInit(){const Q=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&Q&&this.renderer.addClass(Q,"ant-dropdown-button")}}return D.\u0275fac=function(Q){return new(Q||D)(S.Y36(S.Qsj),S.Y36(pe.fY,9),S.Y36(S.SBq))},D.\u0275dir=S.lG2({type:D,selectors:[["","nz-button","","nz-dropdown",""]]}),D})(),Ve=(()=>{class D{constructor(Q,fe,Ce,Ae,Fe,Ie,Re){this.cdr=Q,this.elementRef=fe,this.renderer=Ce,this.viewContainerRef=Ae,this.nzMenuService=Fe,this.directionality=Ie,this.noAnimation=Re,this.mouseState$=new Z.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new S.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new F.xQ}onAnimationEvent(Q){this.animationStateChange$.emit(Q)}setMouseState(Q){this.mouseState$.next(Q)}setValue(Q,fe){this[Q]=fe,this.cdr.markForCheck()}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,ie.R)(this.destroy$)).subscribe(fe=>{this.dir=fe,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return D.\u0275fac=function(Q){return new(Q||D)(S.Y36(S.sBO),S.Y36(S.SBq),S.Y36(S.Qsj),S.Y36(S.s_b),S.Y36(p.hl),S.Y36(q.Is,8),S.Y36(ue.P,9))},D.\u0275cmp=S.Xpm({type:D,selectors:[["nz-dropdown-menu"]],viewQuery:function(Q,fe){if(1&Q&&S.Gf(S.Rgc,7),2&Q){let Ce;S.iGM(Ce=S.CRH())&&(fe.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[S._Bn([p.hl,{provide:p.Cc,useValue:!0}])],ngContentSelectors:U,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(Q,fe){1&Q&&(S.F$t(),S.YNc(0,A,2,7,"ng-template"))},directives:[de.mk,de.PC,ue.P],encapsulation:2,data:{animation:[w.mF]},changeDetection:0}),D})(),be=(()=>{class D{}return D.\u0275fac=function(Q){return new(Q||D)},D.\u0275mod=S.oAB({type:D}),D.\u0275inj=S.cJS({imports:[[q.vT,de.ez,$.U8,ge.u5,pe.sL,p.ip,Y.PV,ue.g,ne.ud,R.e4,Ee,W.T],p.ip]}),D})();new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(Se,re,r)=>{r.d(re,{n_:()=>Je,I2:()=>$e,t4:()=>Ge,AA:()=>Xe,yw:()=>ze,yi:()=>oe,Pb:()=>u,IO:()=>f,Ph:()=>tt});var n=r(5e3),o=r(6699),t=r(9808),S=r(969),F=r(655),Z=r(1721),B=r(8929),X=r(8514),O=r(1086),L=r(6787),G=r(591),K=r(2986),H=r(7545),le=r(7625),te=r(685),se=r(226),ie=r(7525),V=r(1894);const R=["*"];function I(g,E){if(1&g&&n._UZ(0,"nz-avatar",3),2&g){const C=n.oxw();n.Q6J("nzSrc",C.nzSrc)}}function $(g,E){1&g&&n.Hsn(0,0,["*ngIf","!nzSrc"])}function ne(g,E){if(1&g&&n._UZ(0,"nz-list-item-meta-avatar",3),2&g){const C=n.oxw();n.Q6J("nzSrc",C.avatarStr)}}function q(g,E){if(1&g&&(n.TgZ(0,"nz-list-item-meta-avatar"),n.GkF(1,4),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",C.avatarTpl)}}function de(g,E){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzTitle)}}function ge(g,E){if(1&g&&(n.TgZ(0,"nz-list-item-meta-title"),n.YNc(1,de,2,1,"ng-container",6),n.qZA()),2&g){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzTitle)}}function pe(g,E){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzDescription)}}function ue(g,E){if(1&g&&(n.TgZ(0,"nz-list-item-meta-description"),n.YNc(1,pe,2,1,"ng-container",6),n.qZA()),2&g){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzDescription)}}function W(g,E){if(1&g&&(n.TgZ(0,"div",5),n.YNc(1,ge,2,1,"nz-list-item-meta-title",1),n.YNc(2,ue,2,1,"nz-list-item-meta-description",1),n.Hsn(3,1),n.Hsn(4,2),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("ngIf",C.nzTitle&&!C.titleComponent),n.xp6(1),n.Q6J("ngIf",C.nzDescription&&!C.descriptionComponent)}}const Y=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],p=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function w(g,E){1&g&&n.Hsn(0)}const A=["nz-list-item-actions",""];function U(g,E){}function ye(g,E){1&g&&n._UZ(0,"em",3)}function De(g,E){if(1&g&&(n.TgZ(0,"li"),n.YNc(1,U,0,0,"ng-template",1),n.YNc(2,ye,1,0,"em",2),n.qZA()),2&g){const C=E.$implicit,P=E.last;n.xp6(1),n.Q6J("ngTemplateOutlet",C),n.xp6(1),n.Q6J("ngIf",!P)}}function _e(g,E){}const Ee=function(g,E){return{$implicit:g,index:E}};function Ne(g,E){if(1&g&&(n.ynx(0),n.YNc(1,_e,0,0,"ng-template",9),n.BQk()),2&g){const C=E.$implicit,P=E.index,ce=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",n.WLB(2,Ee,C,P))}}function xe(g,E){if(1&g&&(n.TgZ(0,"div",7),n.YNc(1,Ne,2,5,"ng-container",8),n.Hsn(2,4),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("ngForOf",C.nzDataSource)}}function Ve(g,E){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const C=n.oxw(2);n.xp6(1),n.Oqu(C.nzHeader)}}function be(g,E){if(1&g&&(n.TgZ(0,"nz-list-header"),n.YNc(1,Ve,2,1,"ng-container",10),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function N(g,E){1&g&&n._UZ(0,"div"),2&g&&n.Udp("min-height",53,"px")}function ee(g,E){}function D(g,E){if(1&g&&(n.TgZ(0,"div",13),n.YNc(1,ee,0,0,"ng-template",9),n.qZA()),2&g){const C=E.$implicit,P=E.index,ce=n.oxw(2);n.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),n.xp6(1),n.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",n.WLB(9,Ee,C,P))}}function J(g,E){if(1&g&&(n.TgZ(0,"div",11),n.YNc(1,D,2,12,"div",12),n.qZA()),2&g){const C=n.oxw();n.Q6J("nzGutter",C.nzGrid.gutter||null),n.xp6(1),n.Q6J("ngForOf",C.nzDataSource)}}function Q(g,E){if(1&g&&n._UZ(0,"nz-list-empty",14),2&g){const C=n.oxw();n.Q6J("nzNoResult",C.nzNoResult)}}function fe(g,E){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const C=n.oxw(2);n.xp6(1),n.Oqu(C.nzFooter)}}function Ce(g,E){if(1&g&&(n.TgZ(0,"nz-list-footer"),n.YNc(1,fe,2,1,"ng-container",10),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Ae(g,E){}function Fe(g,E){}function Ie(g,E){if(1&g&&(n.TgZ(0,"nz-list-pagination"),n.YNc(1,Fe,0,0,"ng-template",6),n.qZA()),2&g){const C=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzPagination)}}const Re=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Oe=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function Be(g,E){if(1&g&&n._UZ(0,"ul",6),2&g){const C=n.oxw(2);n.Q6J("nzActions",C.nzActions)}}function ve(g,E){if(1&g&&(n.YNc(0,Be,1,1,"ul",5),n.Hsn(1)),2&g){const C=n.oxw();n.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Ue(g,E){if(1&g&&(n.ynx(0),n._uU(1),n.BQk()),2&g){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzContent)}}function Me(g,E){if(1&g&&(n.ynx(0),n.YNc(1,Ue,2,1,"ng-container",8),n.BQk()),2&g){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzContent)}}function Pe(g,E){if(1&g&&(n.Hsn(0,1),n.Hsn(1,2),n.YNc(2,Me,2,1,"ng-container",7)),2&g){const C=n.oxw();n.xp6(2),n.Q6J("ngIf",C.nzContent)}}function nt(g,E){1&g&&n.Hsn(0,3)}function it(g,E){}function et(g,E){}function ot(g,E){}function v(g,E){}function rt(g,E){if(1&g&&(n.YNc(0,it,0,0,"ng-template",9),n.YNc(1,et,0,0,"ng-template",9),n.YNc(2,ot,0,0,"ng-template",9),n.YNc(3,v,0,0,"ng-template",9)),2&g){const C=n.oxw(),P=n.MAs(3),ce=n.MAs(5),he=n.MAs(1);n.Q6J("ngTemplateOutlet",P),n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzExtra),n.xp6(1),n.Q6J("ngTemplateOutlet",ce),n.xp6(1),n.Q6J("ngTemplateOutlet",he)}}function st(g,E){}function at(g,E){}function dt(g,E){}function Qe(g,E){if(1&g&&(n.TgZ(0,"nz-list-item-extra"),n.YNc(1,dt,0,0,"ng-template",9),n.qZA()),2&g){const C=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(g,E){}function m(g,E){if(1&g&&(n.ynx(0),n.TgZ(1,"div",10),n.YNc(2,st,0,0,"ng-template",9),n.YNc(3,at,0,0,"ng-template",9),n.qZA(),n.YNc(4,Qe,2,1,"nz-list-item-extra",7),n.YNc(5,pt,0,0,"ng-template",9),n.BQk()),2&g){const C=n.oxw(),P=n.MAs(3),ce=n.MAs(1),he=n.MAs(5);n.xp6(2),n.Q6J("ngTemplateOutlet",P),n.xp6(1),n.Q6J("ngTemplateOutlet",ce),n.xp6(1),n.Q6J("ngIf",C.nzExtra),n.xp6(1),n.Q6J("ngTemplateOutlet",he)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],j=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let f=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(C,P){1&C&&(n.F$t(),n.TgZ(0,"h4",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),g})(),u=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(C,P){1&C&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),g})(),k=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:R,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(C,P){1&C&&(n.F$t(),n.TgZ(0,"div",0),n.YNc(1,I,1,1,"nz-avatar",1),n.YNc(2,$,1,0,"ng-content",2),n.qZA()),2&C&&(n.xp6(1),n.Q6J("ngIf",P.nzSrc),n.xp6(1),n.Q6J("ngIf",!P.nzSrc))},directives:[o.Dz,t.O5],encapsulation:2,changeDetection:0}),g})(),oe=(()=>{class g{constructor(C,P){this.elementRef=C,this.renderer=P,this.avatarStr="",this.renderer.addClass(C.nativeElement,"ant-list-item-meta")}set nzAvatar(C){C instanceof n.Rgc?(this.avatarStr="",this.avatarTpl=C):this.avatarStr=C}}return g.\u0275fac=function(C){return new(C||g)(n.Y36(n.SBq),n.Y36(n.Qsj))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(C,P,ce){if(1&C&&(n.Suo(ce,u,5),n.Suo(ce,f,5)),2&C){let he;n.iGM(he=n.CRH())&&(P.descriptionComponent=he.first),n.iGM(he=n.CRH())&&(P.titleComponent=he.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:p,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(C,P){1&C&&(n.F$t(Y),n.YNc(0,ne,1,1,"nz-list-item-meta-avatar",0),n.YNc(1,q,2,1,"nz-list-item-meta-avatar",1),n.Hsn(2),n.YNc(3,W,5,2,"div",2)),2&C&&(n.Q6J("ngIf",P.avatarStr),n.xp6(1),n.Q6J("ngIf",P.avatarTpl),n.xp6(2),n.Q6J("ngIf",P.nzTitle||P.nzDescription||P.descriptionComponent||P.titleComponent))},directives:[k,f,u,t.O5,t.tP,S.f],encapsulation:2,changeDetection:0}),g})(),ze=(()=>{class g{constructor(){}}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:R,decls:1,vars:0,template:function(C,P){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),Ze=(()=>{class g{constructor(){}}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item-action"]],viewQuery:function(C,P){if(1&C&&n.Gf(n.Rgc,5),2&C){let ce;n.iGM(ce=n.CRH())&&(P.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:R,decls:1,vars:0,template:function(C,P){1&C&&(n.F$t(),n.YNc(0,w,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),g})(),Te=(()=>{class g{constructor(C,P){this.ngZone=C,this.cdr=P,this.nzActions=[],this.actions=[],this.destroy$=new B.xQ,this.inputActionChanges$=new B.xQ,this.contentChildrenChanges$=(0,X.P)(()=>this.nzListItemActions?(0,O.of)(null):this.ngZone.onStable.asObservable().pipe((0,K.q)(1),(0,H.w)(()=>this.contentChildrenChanges$))),(0,L.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,le.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(C){return new(C||g)(n.Y36(n.R0b),n.Y36(n.sBO))},g.\u0275cmp=n.Xpm({type:g,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,P,ce){if(1&C&&n.Suo(ce,Ze,4),2&C){let he;n.iGM(he=n.CRH())&&(P.nzListItemActions=he)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[n.TTD],attrs:A,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,P){1&C&&n.YNc(0,De,3,2,"li",0),2&C&&n.Q6J("ngForOf",P.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),g})(),$e=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,P){1&C&&n._UZ(0,"nz-embed-empty",0),2&C&&n.Q6J("nzComponentName","list")("specificContent",P.nzNoResult)},directives:[te.gB],encapsulation:2,changeDetection:0}),g})(),Ge=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(C,P){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),We=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:R,decls:1,vars:0,template:function(C,P){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),Ye=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:R,decls:1,vars:0,template:function(C,P){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})(),Ke=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275dir=n.lG2({type:g,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),g})(),Je=(()=>{class g{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new G.X(this.nzItemLayout),this.destroy$=new B.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,le.R)(this.destroy$)).subscribe(P=>{this.dir=P})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return g.\u0275fac=function(C){return new(C||g)(n.Y36(se.Is,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,P,ce){if(1&C&&(n.Suo(ce,We,5),n.Suo(ce,Ye,5),n.Suo(ce,Ke,5)),2&C){let he;n.iGM(he=n.CRH())&&(P.nzListFooterComponent=he.first),n.iGM(he=n.CRH())&&(P.nzListPaginationComponent=he.first),n.iGM(he=n.CRH())&&(P.nzListLoadMoreDirective=he.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,P){2&C&&n.ekj("ant-list-rtl","rtl"===P.dir)("ant-list-vertical","vertical"===P.nzItemLayout)("ant-list-lg","large"===P.nzSize)("ant-list-sm","small"===P.nzSize)("ant-list-split",P.nzSplit)("ant-list-bordered",P.nzBordered)("ant-list-loading",P.nzLoading)("ant-list-something-after-last-item",P.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[n.TTD],ngContentSelectors:Oe,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,P){if(1&C&&(n.F$t(Re),n.YNc(0,xe,3,1,"ng-template",null,0,n.W1O),n.YNc(2,be,2,1,"nz-list-header",1),n.Hsn(3),n.TgZ(4,"nz-spin",2),n.ynx(5),n.YNc(6,N,1,2,"div",3),n.YNc(7,J,2,2,"div",4),n.YNc(8,Q,1,1,"nz-list-empty",5),n.BQk(),n.qZA(),n.YNc(9,Ce,2,1,"nz-list-footer",1),n.Hsn(10,1),n.YNc(11,Ae,0,0,"ng-template",6),n.Hsn(12,2),n.YNc(13,Ie,2,1,"nz-list-pagination",1),n.Hsn(14,3)),2&C){const ce=n.MAs(1);n.xp6(2),n.Q6J("ngIf",P.nzHeader),n.xp6(2),n.Q6J("nzSpinning",P.nzLoading),n.xp6(2),n.Q6J("ngIf",P.nzLoading&&P.nzDataSource&&0===P.nzDataSource.length),n.xp6(1),n.Q6J("ngIf",P.nzGrid&&P.nzDataSource)("ngIfElse",ce),n.xp6(1),n.Q6J("ngIf",!P.nzLoading&&P.nzDataSource&&0===P.nzDataSource.length),n.xp6(1),n.Q6J("ngIf",P.nzFooter),n.xp6(2),n.Q6J("ngTemplateOutlet",P.nzLoadMore),n.xp6(2),n.Q6J("ngIf",P.nzPagination)}},directives:[Ge,ie.W,$e,We,Ye,t.sg,t.tP,t.O5,S.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],g.prototype,"nzBordered",void 0),(0,F.gn)([(0,Z.yF)()],g.prototype,"nzLoading",void 0),(0,F.gn)([(0,Z.yF)()],g.prototype,"nzSplit",void 0),g})(),Xe=(()=>{class g{constructor(C,P,ce,he){this.parentComp=ce,this.cdr=he,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,P.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return g.\u0275fac=function(C){return new(C||g)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(Je),n.Y36(n.sBO))},g.\u0275cmp=n.Xpm({type:g,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,P,ce){if(1&C&&n.Suo(ce,ze,5),2&C){let he;n.iGM(he=n.CRH())&&(P.listItemExtraDirective=he.first)}},hostVars:2,hostBindings:function(C,P){2&C&&n.ekj("ant-list-item-no-flex",P.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:j,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,P){if(1&C&&(n.F$t(a),n.YNc(0,ve,2,1,"ng-template",null,0,n.W1O),n.YNc(2,Pe,3,1,"ng-template",null,1,n.W1O),n.YNc(4,nt,1,0,"ng-template",null,2,n.W1O),n.YNc(6,rt,4,4,"ng-template",null,3,n.W1O),n.YNc(8,m,6,4,"ng-container",4)),2&C){const ce=n.MAs(7);n.xp6(8),n.Q6J("ngIf",P.isVerticalAndExtra)("ngIfElse",ce)}},directives:[Te,ze,t.O5,S.f,t.tP],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],g.prototype,"nzNoFlex",void 0),g})(),tt=(()=>{class g{}return g.\u0275fac=function(C){return new(C||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[se.vT,t.ez,ie.j,V.Jb,o.Rt,S.T,te.Xo]]}),g})()},4219:(Se,re,r)=>{r.d(re,{hl:()=>ve,Cc:()=>Oe,wO:()=>at,YV:()=>pt,r9:()=>Me,ip:()=>m});var n=r(655),o=r(5e3),t=r(8929),S=r(591),F=r(6787),Z=r(3426),B=r(4850),X=r(1709),O=r(2198),L=r(7604),G=r(7138),K=r(5778),H=r(7625),le=r(1059),te=r(7545),se=r(1721),ie=r(325),V=r(226),R=r(2845),I=r(6950),$=r(925),ne=r(4832),q=r(9808),de=r(647),ge=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function W(a,j){if(1&a&&o._UZ(0,"i",4),2&a){const f=o.oxw();o.Q6J("nzType",f.nzIcon)}}function Y(a,j){if(1&a&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&a){const f=o.oxw();o.xp6(2),o.Oqu(f.nzTitle)}}function p(a,j){1&a&&o._UZ(0,"i",8)}function w(a,j){1&a&&o._UZ(0,"i",9)}function A(a,j){if(1&a&&(o.TgZ(0,"span",5),o.YNc(1,p,1,0,"i",6),o.YNc(2,w,1,0,"i",7),o.qZA()),2&a){const f=o.oxw();o.Q6J("ngSwitch",f.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function U(a,j){1&a&&o._UZ(0,"i",10)}const ye=["*"],De=["nz-submenu-inline-child",""];function _e(a,j){}const Ee=["nz-submenu-none-inline-child",""];function Ne(a,j){}const xe=["nz-submenu",""];function Ve(a,j){1&a&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function be(a,j){if(1&a&&o._UZ(0,"div",6),2&a){const f=o.oxw(),u=o.MAs(7);o.Q6J("mode",f.mode)("nzOpen",f.nzOpen)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("menuClass",f.nzMenuClassName)("templateOutlet",u)}}function N(a,j){if(1&a){const f=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(k){return o.CHM(f),o.oxw(2).setMouseEnterState(k)}),o.qZA()}if(2&a){const f=o.oxw(2),u=o.MAs(7);o.Q6J("theme",f.theme)("mode",f.mode)("nzOpen",f.nzOpen)("position",f.position)("nzDisabled",f.nzDisabled)("isMenuInsideDropDown",f.isMenuInsideDropDown)("templateOutlet",u)("menuClass",f.nzMenuClassName)("@.disabled",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)("nzNoAnimation",null==f.noAnimation?null:f.noAnimation.nzNoAnimation)}}function ee(a,j){if(1&a){const f=o.EpF();o.YNc(0,N,1,10,"ng-template",7),o.NdJ("positionChange",function(k){return o.CHM(f),o.oxw().onPositionChange(k)})}if(2&a){const f=o.oxw(),u=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",f.overlayPositions)("cdkConnectedOverlayOrigin",u)("cdkConnectedOverlayWidth",f.triggerWidth)("cdkConnectedOverlayOpen",f.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function D(a,j){1&a&&o.Hsn(0,1)}const J=[[["","title",""]],"*"],Q=["[title]","*"],Oe=new o.OlP("NzIsInDropDownMenuToken"),Be=new o.OlP("NzMenuServiceLocalToken");let ve=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new S.X("light"),this.mode$=new S.X("vertical"),this.inlineIndent$=new S.X(24),this.isChildSubMenuOpen$=new S.X(!1)}onDescendantMenuItemClick(f){this.descendantMenuItemClick$.next(f)}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setMode(f){this.mode$.next(f)}setTheme(f){this.theme$.next(f)}setInlineIndent(f){this.inlineIndent$.next(f)}}return a.\u0275fac=function(f){return new(f||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac}),a})(),Ue=(()=>{class a{constructor(f,u,k){this.nzHostSubmenuService=f,this.nzMenuService=u,this.isMenuInsideDropDown=k,this.mode$=this.nzMenuService.mode$.pipe((0,B.U)(Te=>"inline"===Te?"inline":"vertical"===Te||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new S.X(!1),this.isChildSubMenuOpen$=new S.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const oe=this.childMenuItemClick$.pipe((0,X.zg)(()=>this.mode$),(0,O.h)(Te=>"inline"!==Te||this.isMenuInsideDropDown),(0,L.h)(!1)),ze=(0,F.T)(this.isMouseEnterTitleOrOverlay$,oe);(0,Z.aj)([this.isChildSubMenuOpen$,ze]).pipe((0,B.U)(([Te,$e])=>Te||$e),(0,G.e)(150),(0,K.x)(),(0,H.R)(this.destroy$)).pipe((0,K.x)()).subscribe(Te=>{this.setOpenStateWithoutDebounce(Te),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Te):this.nzMenuService.isChildSubMenuOpen$.next(Te)})}onChildMenuItemClick(f){this.childMenuItemClick$.next(f)}setOpenStateWithoutDebounce(f){this.isCurrentSubMenuOpen$.next(f)}setMouseEnterTitleOrOverlayState(f){this.isMouseEnterTitleOrOverlay$.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(f){return new(f||a)(o.LFG(a,12),o.LFG(ve),o.LFG(Oe))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac}),a})(),Me=(()=>{class a{constructor(f,u,k,oe,ze,Ze,Te,$e){this.nzMenuService=f,this.cdr=u,this.nzSubmenuService=k,this.isMenuInsideDropDown=oe,this.directionality=ze,this.routerLink=Ze,this.routerLinkWithHref=Te,this.router=$e,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,$e&&this.router.events.pipe((0,H.R)(this.destroy$),(0,O.h)(Ge=>Ge instanceof ie.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(f){this.nzDisabled?(f.preventDefault(),f.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(f){this.nzSelected=f,this.selected$.next(f)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const f=this.hasActiveLinks();this.nzSelected!==f&&(this.nzSelected=f,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const f=this.isLinkActive(this.router);return this.routerLink&&f(this.routerLink)||this.routerLinkWithHref&&f(this.routerLinkWithHref)||this.listOfRouterLink.some(f)||this.listOfRouterLinkWithHref.some(f)}isLinkActive(f){return u=>f.isActive(u.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var f;(0,Z.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.inlinePaddingLeft="inline"===u?this.level*k:null}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(f){f.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(ve),o.Y36(o.sBO),o.Y36(Ue,8),o.Y36(Oe),o.Y36(V.Is,8),o.Y36(ie.rH,8),o.Y36(ie.yS,8),o.Y36(ie.F0,8))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(f,u,k){if(1&f&&(o.Suo(k,ie.rH,5),o.Suo(k,ie.yS,5)),2&f){let oe;o.iGM(oe=o.CRH())&&(u.listOfRouterLink=oe),o.iGM(oe=o.CRH())&&(u.listOfRouterLinkWithHref=oe)}},hostVars:20,hostBindings:function(f,u){1&f&&o.NdJ("click",function(oe){return u.clickMenuItem(oe)}),2&f&&(o.Udp("padding-left","rtl"===u.dir?null:u.nzPaddingLeft||u.inlinePaddingLeft,"px")("padding-right","rtl"===u.dir?u.nzPaddingLeft||u.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",u.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",u.isMenuInsideDropDown&&u.nzSelected)("ant-dropdown-menu-item-danger",u.isMenuInsideDropDown&&u.nzDanger)("ant-dropdown-menu-item-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-item",!u.isMenuInsideDropDown)("ant-menu-item-selected",!u.isMenuInsideDropDown&&u.nzSelected)("ant-menu-item-danger",!u.isMenuInsideDropDown&&u.nzDanger)("ant-menu-item-disabled",!u.isMenuInsideDropDown&&u.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzSelected",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDanger",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),Pe=(()=>{class a{constructor(f,u){this.cdr=f,this.directionality=u,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var f;this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(o.sBO),o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(f,u){1&f&&o.NdJ("click",function(){return u.clickTitle()})("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&f&&(o.Udp("padding-left","rtl"===u.dir?null:u.paddingLeft,"px")("padding-right","rtl"===u.dir?u.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",u.isMenuInsideDropDown)("ant-menu-submenu-title",!u.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:ye,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(f,u){if(1&f&&(o.F$t(),o.YNc(0,W,1,1,"i",0),o.YNc(1,Y,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,A,3,2,"span",2),o.YNc(4,U,1,0,"ng-template",null,3,o.W1O)),2&f){const k=o.MAs(5);o.Q6J("ngIf",u.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",u.nzTitle),o.xp6(2),o.Q6J("ngIf",u.isMenuInsideDropDown)("ngIfElse",k)}},directives:[q.O5,de.Ls,ge.f,q.RF,q.n9,q.ED],encapsulation:2,changeDetection:0}),a})(),nt=(()=>{class a{constructor(f,u,k){this.elementRef=f,this.renderer=u,this.directionality=k,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(f){const{mode:u,nzOpen:k,menuClass:oe}=f;(u||k)&&this.calcMotionState(),oe&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.removeClass(this.elementRef.nativeElement,ze)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.addClass(this.elementRef.nativeElement,ze)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(f,u){2&f&&(o.d8E("@collapseMotion",u.expandState),o.ekj("ant-menu-rtl","rtl"===u.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:De,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(f,u){1&f&&o.YNc(0,_e,0,0,"ng-template",0),2&f&&o.Q6J("ngTemplateOutlet",u.templateOutlet)},directives:[q.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),it=(()=>{class a{constructor(f){this.directionality=f,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(f){this.nzDisabled||this.subMenuMouseState.next(f)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var f;this.calcMotionState(),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(f){const{mode:u,nzOpen:k}=f;(u||k)&&this.calcMotionState()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(f,u){1&f&&o.NdJ("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&f&&(o.d8E("@slideMotion",u.expandState)("@zoomBigMotion",u.expandState),o.ekj("ant-menu-light","light"===u.theme)("ant-menu-dark","dark"===u.theme)("ant-menu-submenu-placement-bottom","horizontal"===u.mode)("ant-menu-submenu-placement-right","vertical"===u.mode&&"right"===u.position)("ant-menu-submenu-placement-left","vertical"===u.mode&&"left"===u.position)("ant-menu-submenu-rtl","rtl"===u.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:Ee,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(f,u){1&f&&(o.TgZ(0,"div",0),o.YNc(1,Ne,0,0,"ng-template",1),o.qZA()),2&f&&(o.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-menu",!u.isMenuInsideDropDown)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown)("ant-menu-vertical",!u.isMenuInsideDropDown)("ant-dropdown-menu-sub",u.isMenuInsideDropDown)("ant-menu-sub",!u.isMenuInsideDropDown)("ant-menu-rtl","rtl"===u.dir),o.Q6J("ngClass",u.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",u.templateOutlet))},directives:[q.mk,q.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const et=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],ot=[I.yW.bottomLeft];let v=(()=>{class a{constructor(f,u,k,oe,ze,Ze,Te){this.nzMenuService=f,this.cdr=u,this.nzSubmenuService=k,this.platform=oe,this.isMenuInsideDropDown=ze,this.directionality=Ze,this.noAnimation=Te,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=et,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(f){this.nzSubmenuService.setOpenStateWithoutDebounce(f)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(f){this.isActive=f,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(f)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(f){const u=(0,I.d_)(f);"rightTop"===u||"rightBottom"===u||"right"===u?this.position="right":("leftTop"===u||"leftBottom"===u||"left"===u)&&(this.position="left")}ngOnInit(){var f;this.nzMenuService.theme$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.theme=u,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.mode=u,"horizontal"===u?this.overlayPositions=ot:"vertical"===u&&(this.overlayPositions=et),this.cdr.markForCheck()}),(0,Z.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.inlinePaddingLeft="inline"===u?this.level*k:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.isActive=u,u!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=u,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const f=this.listOfNzMenuItemDirective,u=f.changes,k=(0,F.T)(u,...f.map(oe=>oe.selected$));u.pipe((0,le.O)(f),(0,te.w)(()=>k),(0,le.O)(!0),(0,B.U)(()=>f.some(oe=>oe.nzSelected)),(0,H.R)(this.destroy$)).subscribe(oe=>{this.isSelected=oe,this.cdr.markForCheck()})}ngOnChanges(f){const{nzOpen:u}=f;u&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(ve),o.Y36(o.sBO),o.Y36(Ue),o.Y36($.t4),o.Y36(Oe),o.Y36(V.Is,8),o.Y36(ne.P,9))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(f,u,k){if(1&f&&(o.Suo(k,a,5),o.Suo(k,Me,5)),2&f){let oe;o.iGM(oe=o.CRH())&&(u.listOfNzSubMenuComponent=oe),o.iGM(oe=o.CRH())&&(u.listOfNzMenuItemDirective=oe)}},viewQuery:function(f,u){if(1&f&&o.Gf(R.xu,7,o.SBq),2&f){let k;o.iGM(k=o.CRH())&&(u.cdkOverlayOrigin=k.first)}},hostVars:34,hostBindings:function(f,u){2&f&&o.ekj("ant-dropdown-menu-submenu",u.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-dropdown-menu-submenu-open",u.isMenuInsideDropDown&&u.nzOpen)("ant-dropdown-menu-submenu-selected",u.isMenuInsideDropDown&&u.isSelected)("ant-dropdown-menu-submenu-vertical",u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-dropdown-menu-submenu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-dropdown-menu-submenu-inline",u.isMenuInsideDropDown&&"inline"===u.mode)("ant-dropdown-menu-submenu-active",u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu",!u.isMenuInsideDropDown)("ant-menu-submenu-disabled",!u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-submenu-open",!u.isMenuInsideDropDown&&u.nzOpen)("ant-menu-submenu-selected",!u.isMenuInsideDropDown&&u.isSelected)("ant-menu-submenu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-menu-submenu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-menu-submenu-inline",!u.isMenuInsideDropDown&&"inline"===u.mode)("ant-menu-submenu-active",!u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu-rtl","rtl"===u.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([Ue]),o.TTD],attrs:xe,ngContentSelectors:Q,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(f,u){if(1&f&&(o.F$t(J),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(oe){return u.setMouseEnterState(oe)})("toggleSubMenu",function(){return u.toggleSubMenu()}),o.YNc(2,Ve,1,0,"ng-content",2),o.qZA(),o.YNc(3,be,1,6,"div",3),o.YNc(4,ee,1,5,"ng-template",null,4,o.W1O),o.YNc(6,D,1,0,"ng-template",null,5,o.W1O)),2&f){const k=o.MAs(5);o.Q6J("nzIcon",u.nzIcon)("nzTitle",u.nzTitle)("mode",u.mode)("nzDisabled",u.nzDisabled)("isMenuInsideDropDown",u.isMenuInsideDropDown)("paddingLeft",u.nzPaddingLeft||u.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!u.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===u.mode)("ngIfElse",k)}},directives:[Pe,nt,it,R.xu,q.O5,ne.P,R.pI],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzOpen",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),a})();function rt(a,j){return a||j}function st(a){return a||!1}let at=(()=>{class a{constructor(f,u,k,oe){this.nzMenuService=f,this.isMenuInsideDropDown=u,this.cdr=k,this.directionality=oe,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new S.X(this.nzInlineCollapsed),this.mode$=new S.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(f){this.nzInlineCollapsed=f,this.inlineCollapsed$.next(f)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(f=>f.nzOpen),this.listOfNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(f=>f.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var f;(0,Z.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.actualMode=u?"vertical":k,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.nzClick.emit(u),this.nzSelectable&&!u.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(k=>k.setSelectedState(k===u))}),this.dir=this.directionality.value,null===(f=this.directionality.change)||void 0===f||f.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(f){const{nzInlineCollapsed:u,nzInlineIndent:k,nzTheme:oe,nzMode:ze}=f;u&&this.inlineCollapsed$.next(this.nzInlineCollapsed),k&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),oe&&this.nzMenuService.setTheme(this.nzTheme),ze&&(this.mode$.next(this.nzMode),!f.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ze=>Ze.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(ve),o.Y36(Oe),o.Y36(o.sBO),o.Y36(V.Is,8))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(f,u,k){if(1&f&&(o.Suo(k,Me,5),o.Suo(k,v,5)),2&f){let oe;o.iGM(oe=o.CRH())&&(u.listOfNzMenuItemDirective=oe),o.iGM(oe=o.CRH())&&(u.listOfNzSubMenuComponent=oe)}},hostVars:34,hostBindings:function(f,u){2&f&&o.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-dropdown-menu-root",u.isMenuInsideDropDown)("ant-dropdown-menu-light",u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-dropdown-menu-dark",u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-dropdown-menu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-dropdown-menu-inline",u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-dropdown-menu-inline-collapsed",u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu",!u.isMenuInsideDropDown)("ant-menu-root",!u.isMenuInsideDropDown)("ant-menu-light",!u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-menu-dark",!u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-menu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-menu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-menu-inline",!u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-menu-inline-collapsed",!u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu-rtl","rtl"===u.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:Be,useClass:ve},{provide:ve,useFactory:rt,deps:[[new o.tp0,new o.FiY,ve],Be]},{provide:Oe,useFactory:st,deps:[[new o.tp0,new o.FiY,Oe]]}]),o.TTD]}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzSelectable",void 0),a})(),pt=(()=>{class a{constructor(f,u){this.elementRef=f,this.renderer=u,this.renderer.addClass(f.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(f){return new(f||a)(o.Y36(o.SBq),o.Y36(o.Qsj))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),m=(()=>{class a{}return a.\u0275fac=function(f){return new(f||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[V.vT,q.ez,$.ud,R.U8,de.PV,ne.g,ge.T]]}),a})()},8144:(Se,re,r)=>{r.d(re,{NU:()=>ie,$1:()=>le,zf:()=>V});var n=r(226),o=r(9808),t=r(5e3),S=r(655),F=r(8929),Z=r(7625),B=r(9439),X=r(1721);function O(R,I){}const L=function(R){return{$implicit:R}};function G(R,I){if(1&R&&(t.TgZ(0,"span",4),t.YNc(1,O,0,0,"ng-template",5),t.qZA()),2&R){const $=t.oxw(),ne=$.last,q=$.index,de=t.oxw();t.Udp("margin-bottom","vertical"===de.nzDirection?ne?null:de.spaceSize:null,"px")("margin-right","horizontal"===de.nzDirection?ne?null:de.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",de.nzSplit)("ngTemplateOutletContext",t.VKq(6,L,q))}}function K(R,I){if(1&R&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,G,2,8,"span",3)),2&R){const $=I.$implicit,ne=I.last,q=t.oxw();t.Udp("margin-bottom","vertical"===q.nzDirection?ne?null:q.spaceSize:null,"px")("margin-right","horizontal"===q.nzDirection?ne?null:q.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",$),t.xp6(1),t.Q6J("ngIf",q.nzSplit&&!ne)}}const H=["*"];let le=(()=>{class R{constructor(){}}return R.\u0275fac=function($){return new($||R)},R.\u0275dir=t.lG2({type:R,selectors:[["","nzSpaceItem",""]]}),R})();const se={small:8,middle:16,large:24};let ie=(()=>{class R{constructor($,ne){this.nzConfigService=$,this.cdr=ne,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=se.small,this.destroy$=new F.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?se[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return R.\u0275fac=function($){return new($||R)(t.Y36(B.jY),t.Y36(t.sBO))},R.\u0275cmp=t.Xpm({type:R,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function($,ne,q){if(1&$&&t.Suo(q,le,4,t.Rgc),2&$){let de;t.iGM(de=t.CRH())&&(ne.items=de)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function($,ne){2&$&&(t.Udp("flex-wrap",ne.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===ne.nzDirection)("ant-space-vertical","vertical"===ne.nzDirection)("ant-space-align-start","start"===ne.mergedAlign)("ant-space-align-end","end"===ne.mergedAlign)("ant-space-align-center","center"===ne.mergedAlign)("ant-space-align-baseline","baseline"===ne.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:H,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function($,ne){1&$&&(t.F$t(),t.Hsn(0),t.YNc(1,K,3,6,"ng-template",0)),2&$&&(t.xp6(1),t.Q6J("ngForOf",ne.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,S.gn)([(0,X.yF)()],R.prototype,"nzWrap",void 0),(0,S.gn)([(0,B.oS)()],R.prototype,"nzSize",void 0),R})(),V=(()=>{class R{}return R.\u0275fac=function($){return new($||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[n.vT,o.ez]]}),R})()},7525:(Se,re,r)=>{r.d(re,{W:()=>ue,j:()=>W});var n=r(655),o=r(5e3),t=r(8929),S=r(591),F=r(839),Z=r(8723),B=r(1177);class O{constructor(p){this.durationSelector=p}call(p,w){return w.subscribe(new L(p,this.durationSelector))}}class L extends B.Ds{constructor(p,w){super(p),this.durationSelector=w,this.hasValue=!1}_next(p){try{const w=this.durationSelector.call(this,p);w&&this._tryNext(p,w)}catch(w){this.destination.error(w)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(p,w){let A=this.durationSubscription;this.value=p,this.hasValue=!0,A&&(A.unsubscribe(),this.remove(A)),A=(0,B.ft)(w,new B.IY(this)),A&&!A.closed&&this.add(this.durationSubscription=A)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const p=this.value,w=this.durationSubscription;w&&(this.durationSubscription=void 0,w.unsubscribe(),this.remove(w)),this.value=void 0,this.hasValue=!1,super._next(p)}}}var G=r(1059),K=r(5778),H=r(7545),le=r(7625),te=r(9439),se=r(1721),ie=r(226),V=r(9808),R=r(7144);function I(Y,p){1&Y&&(o.TgZ(0,"span",3),o._UZ(1,"i",4),o._UZ(2,"i",4),o._UZ(3,"i",4),o._UZ(4,"i",4),o.qZA())}function $(Y,p){}function ne(Y,p){if(1&Y&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&Y){const w=o.oxw(2);o.xp6(1),o.Oqu(w.nzTip)}}function q(Y,p){if(1&Y&&(o.TgZ(0,"div"),o.TgZ(1,"div",5),o.YNc(2,$,0,0,"ng-template",6),o.YNc(3,ne,2,1,"div",7),o.qZA(),o.qZA()),2&Y){const w=o.oxw(),A=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===w.dir)("ant-spin-spinning",w.isLoading)("ant-spin-lg","large"===w.nzSize)("ant-spin-sm","small"===w.nzSize)("ant-spin-show-text",w.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",w.nzIndicator||A),o.xp6(1),o.Q6J("ngIf",w.nzTip)}}function de(Y,p){if(1&Y&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&Y){const w=o.oxw();o.ekj("ant-spin-blur",w.isLoading)}}const ge=["*"];let ue=(()=>{class Y{constructor(w,A,U){this.nzConfigService=w,this.cdr=A,this.directionality=U,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new S.X(this.nzSpinning),this.delay$=new F.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var w;this.delay$.pipe((0,G.O)(this.nzDelay),(0,K.x)(),(0,H.w)(U=>0===U?this.spinning$:this.spinning$.pipe(function X(Y){return p=>p.lift(new O(Y))}(ye=>(0,Z.H)(ye?U:0)))),(0,le.R)(this.destroy$)).subscribe(U=>{this.isLoading=U,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,le.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(w=this.directionality.change)||void 0===w||w.pipe((0,le.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(w){const{nzSpinning:A,nzDelay:U}=w;A&&this.spinning$.next(this.nzSpinning),U&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Y.\u0275fac=function(w){return new(w||Y)(o.Y36(te.jY),o.Y36(o.sBO),o.Y36(ie.Is,8))},Y.\u0275cmp=o.Xpm({type:Y,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(w,A){2&w&&o.ekj("ant-spin-nested-loading",!A.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:ge,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(w,A){1&w&&(o.F$t(),o.YNc(0,I,5,0,"ng-template",null,0,o.W1O),o.YNc(2,q,4,12,"div",1),o.YNc(3,de,2,2,"div",2)),2&w&&(o.xp6(2),o.Q6J("ngIf",A.isLoading),o.xp6(1),o.Q6J("ngIf",!A.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,n.gn)([(0,te.oS)()],Y.prototype,"nzIndicator",void 0),(0,n.gn)([(0,se.Rn)()],Y.prototype,"nzDelay",void 0),(0,n.gn)([(0,se.yF)()],Y.prototype,"nzSimple",void 0),(0,n.gn)([(0,se.yF)()],Y.prototype,"nzSpinning",void 0),Y})(),W=(()=>{class Y{}return Y.\u0275fac=function(w){return new(w||Y)},Y.\u0275mod=o.oAB({type:Y}),Y.\u0275inj=o.cJS({imports:[[ie.vT,V.ez,R.Q8]]}),Y})()}}]);