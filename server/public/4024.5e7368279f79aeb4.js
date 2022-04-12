"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{1912:(De,re,r)=>{r.d(re,{s:()=>le});var o=r(5e3),i=r(6042),t=r(2643),D=r(2683),F=r(3640),B=r(2160),q=r(3762),A=r(647);let L=(()=>{class te{constructor(oe){this.cookies=oe,this.location=function Z(te){return encodeURIComponent(te).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return te.\u0275fac=function(oe){return new(oe||te)(o.Y36(B.N))},te.\u0275cmp=o.Xpm({type:te,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(oe,V){1&oe&&(o.TgZ(0,"nz-list",0),o.TgZ(1,"nz-list-item"),o.TgZ(2,"form",1),o._UZ(3,"input",2),o.TgZ(4,"button",3),o._UZ(5,"i",4),o._uU(6," Sign In with a Google Account "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"nz-list-item"),o.TgZ(8,"form",1),o._UZ(9,"input",2),o.TgZ(10,"button",3),o._uU(11," Sign In with an ORCID Account "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"nz-list-item"),o.TgZ(13,"form",1),o._UZ(14,"input",2),o.TgZ(15,"button",3),o._UZ(16,"i",5),o._uU(17," Sign In with a Github Account "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&oe&&(o.xp6(2),o.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken),o.xp6(5),o.MGl("action","/api/auth/orcid?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken),o.xp6(4),o.MGl("action","/api/auth/github?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken))},directives:[q.n_,q.AA,i.ix,t.dQ,D.w,A.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),te})();function G(te,se){1&te&&(o.ynx(0),o.TgZ(1,"p",5),o._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),o.qZA(),o._UZ(3,"cvc-auth-options-list"),o.BQk())}function K(te,se){1&te&&o._uU(0," Sign In / Sign Up\n")}function H(te,se){if(1&te){const oe=o.EpF();o.TgZ(0,"button",0),o.NdJ("click",function(){return o.CHM(oe),o.oxw().handleCancel()}),o._uU(1,"Cancel"),o.qZA()}}let le=(()=>{class te{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return te.\u0275fac=function(oe){return new(oe||te)},te.\u0275cmp=o.Xpm({type:te,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(oe,V){if(1&oe&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return V.showAuth()}),o.TgZ(1,"span"),o._uU(2,"Sign In / Sign Up"),o.qZA(),o.qZA(),o.TgZ(3,"nz-modal",1),o.NdJ("nzVisibleChange",function(I){return V.authVisible=I})("nzOnCancel",function(){return V.handleCancel()}),o.YNc(4,G,4,0,"ng-container",2),o.qZA(),o.YNc(5,K,1,0,"ng-template",null,3,o.W1O),o.YNc(7,H,2,0,"ng-template",null,4,o.W1O)),2&oe){const b=o.MAs(6),I=o.MAs(8);o.xp6(3),o.Q6J("nzVisible",V.authVisible)("nzTitle",b)("nzFooter",I)}},directives:[i.ix,t.dQ,D.w,F.du,F.Hf,L],styles:["[_nghost-%COMP%]{display:inline-block}"]}),te})()},1844:(De,re,r)=>{r.d(re,{B:()=>q});var o=r(9808),i=r(6042),t=r(3640),D=r(3762),F=r(647),Z=r(5e3);let B=(()=>{class A{}return A.\u0275fac=function(G){return new(G||A)},A.\u0275mod=Z.oAB({type:A}),A.\u0275inj=Z.cJS({imports:[[o.ez,F.PV,D.Ph,i.sL]]}),A})(),q=(()=>{class A{}return A.\u0275fac=function(G){return new(G||A)},A.\u0275mod=Z.oAB({type:A}),A.\u0275inj=Z.cJS({imports:[[o.ez,i.sL,t.Qp,B]]}),A})()},7881:(De,re,r)=>{r.d(re,{L:()=>Z});var o=r(5e3),i=r(9808),t=r(6699);function D(B,q){if(1&B&&o._UZ(0,"nz-avatar",2),2&B){const A=o.oxw();o.Q6J("nzSrc",A.user.profileImagePath)("nzShape",A.shape?A.shape:"circle")("nzSize",A.size)}}function F(B,q){if(1&B&&(o._UZ(0,"nz-avatar",3),o.ALo(1,"uppercase")),2&B){const A=o.oxw();o.Q6J("nzSize",A.size)("nzText",o.lcZ(1,2,A.user.displayName.charAt(0)))}}let Z=(()=>{class B{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return B.\u0275fac=function(A){return new(A||B)},B.\u0275cmp=o.Xpm({type:B,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size",shape:"shape"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzShape","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(A,L){if(1&A&&(o.YNc(0,D,1,3,"nz-avatar",0),o.YNc(1,F,2,4,"ng-template",null,1,o.W1O)),2&A){const G=o.MAs(2);o.Q6J("ngIf",L.user.profileImagePath)("ngIfElse",G)}},directives:[i.O5,t.Dz],pipes:[i.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),B})()},5473:(De,re,r)=>{r.d(re,{H:()=>D});var o=r(9808),i=r(6699),t=r(5e3);let D=(()=>{class F{}return F.\u0275fac=function(B){return new(B||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[o.ez,i.Rt]]}),F})()},9350:(De,re,r)=>{r.d(re,{a:()=>A});var o=r(4850),i=r(5154),t=r(373),D=r(1059),F=r(712),Z=r(5e3),B=r(520);const q={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let A=(()=>{class L{constructor(K,H){function le(I){return!(!I||I.role!==F.i44.Admin)}function te(I){return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function se(I){return!(!I||I.role!==F.i44.Curator)}function oe(I){return!(!I||I.role!==F.i44.Curator&&I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function V(I){var $,ne;return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===($=I.mostRecentConflictOfInterestStatement)||void 0===$?void 0:$.coiStatus)!=F.Mgx.Conflict&&(null===(ne=I.mostRecentConflictOfInterestStatement)||void 0===ne?void 0:ne.coiStatus)!=F.Mgx.Valid)}function b(I){if(I.mostRecentOrganizationId)return I.organizations.find($=>$.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=K,this.http=H,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,o.U)(I=>({data:I.data,loading:I.loading,networkStatus:I.networkStatus})),(0,i.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,D.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,o.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!==I,signedOut:null===I,canCurate:oe(I),canModerate:V(I),isAdmin:le(I),isEditor:te(I),isCurator:se(I),organizations:null===I?[]:I.organizations,mostRecentOrg:null===I?void 0:b(I),invalidCoi:te(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Missing)})),(0,D.O)(q),(0,i.d)(1)),this.signedIn$=this.viewer$.pipe((0,o.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,o.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,o.U)(I=>le(I))),this.isEditor$=this.viewer$.pipe((0,o.U)(I=>te(I))),this.isCurator$=this.viewer$.pipe((0,o.U)(I=>se(I))),this.canCurate$=this.viewer$.pipe((0,o.U)(I=>oe(I))),this.canModerate$=this.viewer$.pipe((0,o.U)(I=>V(I)))}signOut(){this.http.get("/api/sign_out").subscribe(K=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return L.\u0275fac=function(K){return new(K||L)(Z.LFG(F.Tt7),Z.LFG(B.eN))},L.\u0275prov=Z.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},6123:(De,re,r)=>{r.d(re,{U:()=>F});var o=r(8929),i=r(591),t=r(7625),D=r(537);class F{constructor(B){this.networkErrorService=B}mutate(B,q,A){let L=new o.xQ,G={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{L.next(),L.complete()}};return G.isSubmitting$.next(!0),B.mutate(q).pipe((0,t.R)(L),(0,D.x)(()=>{G.isSubmitting$.next(!1)})).subscribe({next:K=>{K.data&&A&&A(K.data)},error:K=>{K.graphQLErrors.length>0?G.submitError$.next(K.graphQLErrors.map(H=>H.message)):K.networkError&&this.networkErrorService.networkError$.next(K.networkError),G.cleanup()},complete:()=>{G.submitError$.next([]),G.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),G.cleanup()}}),G}}},822:(De,re,r)=>{r.d(re,{V:()=>q});var o=r(5e3),i=r(9808),t=r(2359);function D(A,L){if(1&A&&o._UZ(0,"nz-alert",4),2&A){const G=o.oxw();o.Q6J("nzDescription",G.errors[0])}}function F(A,L){if(1&A&&o._UZ(0,"nz-alert",5),2&A){o.oxw();const G=o.MAs(3);o.Q6J("nzDescription",G)}}function Z(A,L){if(1&A&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&A){const G=L.$implicit;o.xp6(1),o.Oqu(G)}}function B(A,L){if(1&A&&(o.TgZ(0,"ul",6),o.YNc(1,Z,2,1,"li",7),o.qZA()),2&A){const G=o.oxw();o.xp6(1),o.Q6J("ngForOf",G.errors)}}let q=(()=>{class A{constructor(){}ngOnInit(){}}return A.\u0275fac=function(G){return new(G||A)},A.\u0275cmp=o.Xpm({type:A,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(G,K){1&G&&(o.YNc(0,D,1,1,"nz-alert",0),o.YNc(1,F,1,1,"nz-alert",1),o.YNc(2,B,2,1,"ng-template",2,3,o.W1O)),2&G&&(o.Q6J("ngIf",1===K.errors.length),o.xp6(1),o.Q6J("ngIf",K.errors.length>1))},directives:[i.O5,t.r,i.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),A})()},7008:(De,re,r)=>{r.d(re,{B:()=>D});var o=r(9808),i=r(2359),t=r(5e3);let D=(()=>{class F{}return F.\u0275fac=function(B){return new(B||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[o.ez,i.L]]}),F})()},8785:(De,re,r)=>{r.d(re,{t:()=>ne});var o=r(5e3),i=r(6123),t=r(8929),D=r(7625),F=r(712),Z=r(9169),B=r(7484),q=r(9808),A=r(2359),L=r(1894),G=r(4546),K=r(822),H=r(7525),le=r(3868),te=r(4182),se=r(6042),oe=r(2643),V=r(2683);function b(X,de){1&X&&o._UZ(0,"nz-alert",7)}function I(X,de){if(1&X&&(o.TgZ(0,"nz-form-item"),o._UZ(1,"cvc-form-errors-alert",8),o.qZA()),2&X){const fe=o.oxw();o.xp6(1),o.Q6J("errors",fe.errorMessages)}}function $(X,de){if(1&X){const fe=o.EpF();o.TgZ(0,"nz-form-item"),o.TgZ(1,"textarea",9),o.NdJ("ngModelChange",function(ue){return o.CHM(fe),o.oxw().coiText=ue}),o.qZA(),o.qZA()}if(2&X){const fe=o.oxw();o.xp6(1),o.Q6J("ngModel",fe.coiText)}}let ne=(()=>{class X{constructor(fe,pe){this.updateCoiGql=fe,this.coiUpdatedEvent=new o.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new i.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,D.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,D.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,D.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return X.\u0275fac=function(fe){return new(fe||X)(o.Y36(F.IP1),o.Y36(Z.Y))},X.\u0275cmp=o.Xpm({type:X,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(fe,pe){1&fe&&(o.TgZ(0,"nz-card"),o.YNc(1,b,1,0,"nz-alert",0),o.YNc(2,I,2,1,"nz-form-item",1),o.TgZ(3,"nz-spin",2),o.TgZ(4,"nz-form-item"),o.TgZ(5,"nz-radio-group",3),o.NdJ("ngModelChange",function(W){return pe.coiStatus=W}),o.TgZ(6,"label",4),o._uU(7,"I do not have any potential conflicts of interest."),o.qZA(),o.TgZ(8,"label",5),o._uU(9,"I do have a potential conflict of interest."),o.qZA(),o.qZA(),o.qZA(),o.YNc(10,$,2,1,"nz-form-item",1),o.TgZ(11,"nz-form-item"),o.TgZ(12,"button",6),o.NdJ("click",function(){return pe.updateCoi()}),o._uU(13," Save Conflict of Interest Statement "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&fe&&(o.xp6(1),o.Q6J("ngIf",pe.success),o.xp6(1),o.Q6J("ngIf",pe.errorMessages.length>0),o.xp6(1),o.Q6J("nzSpinning",pe.loading),o.xp6(2),o.Q6J("ngModel",pe.coiStatus),o.xp6(5),o.Q6J("ngIf","coiPresent"===pe.coiStatus),o.xp6(2),o.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[B.bd,q.O5,A.r,L.SK,G.Nx,K.V,H.W,le.Dg,te.JJ,te.On,le.Of,te.Fj,se.ix,oe.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),X})()},330:(De,re,r)=>{r.d(re,{e:()=>K});var o=r(9808),i=r(4182),t=r(6949),D=r(7484),F=r(2359),Z=r(4546),B=r(7008),q=r(3868),A=r(7525),L=r(6042),G=r(5e3);let K=(()=>{class H{}return H.\u0275fac=function(te){return new(te||H)},H.\u0275mod=G.oAB({type:H}),H.\u0275inj=G.cJS({imports:[[o.ez,i.u5,Z.U5,i.UX,t.WG,D.vh,F.L,q.aF,L.sL,A.j,B.B]]}),H})()},712:(De,re,r)=>{r.d(re,{ti:()=>ji,$G1:()=>nr,iGM:()=>Jo,KNk:()=>sr,T97:()=>ur,RMv:()=>Ar,LUc:()=>br,iwm:()=>j,Vr2:()=>l,A94:()=>zs,mdl:()=>k,Gbq:()=>ai,bgg:()=>Qo,u4i:()=>ie,ejK:()=>Cs,uBv:()=>ze,td:()=>li,Tq1:()=>Ii,q8c:()=>Pi,WRV:()=>go,IZ6:()=>zo,qf4:()=>Eo,Rdc:()=>$o,gtM:()=>Er,fpJ:()=>Tr,k2T:()=>Cr,UWf:()=>po,cMj:()=>Ts,UIR:()=>di,E8d:()=>Te,P_b:()=>mi,Mgx:()=>Fe,iST:()=>fi,Kk:()=>vi,OfU:()=>ke,kQf:()=>io,l4w:()=>ss,JQ3:()=>Sr,db2:()=>Zs,h01:()=>Ye,wg3:()=>Ss,k7O:()=>yi,kv3:()=>or,R8w:()=>Je,GB2:()=>Es,Zyn:()=>He,dUU:()=>_i,kq9:()=>nt,vRc:()=>cr,Ud2:()=>Di,GYx:()=>er,AO2:()=>Qe,BTF:()=>Ni,wJ2:()=>je,eY8:()=>Li,_Aq:()=>ut,pHu:()=>As,tI1:()=>Xe,Q_P:()=>Gr,Sx0:()=>f,Ybm:()=>Oi,Cp0:()=>E,RTy:()=>C,sBY:()=>Ms,kqt:()=>R,Zhw:()=>pr,B0s:()=>Zr,rzy:()=>Fi,BQZ:()=>ce,sfv:()=>he,TNk:()=>xs,rJ8:()=>Ri,FOU:()=>Jr,Q4m:()=>gr,Fvz:()=>mt,cCu:()=>bs,_jb:()=>lo,MYm:()=>ao,oRL:()=>gt,lfy:()=>hr,fow:()=>ft,X5f:()=>Ui,WOS:()=>$s,Lr0:()=>Gs,Del:()=>Bs,xlL:()=>ht,io:()=>Vi,WGV:()=>Qs,OHm:()=>ki,lYz:()=>vt,FKQ:()=>zr,B97:()=>Wi,mII:()=>Ko,ghc:()=>wi,NQC:()=>zt,JDX:()=>yt,VZq:()=>Hi,EwB:()=>Yr,FJi:()=>Ct,L5n:()=>to,rZD:()=>It,SrV:()=>Tt,Bk6:()=>Ys,TiL:()=>ho,yic:()=>_t,SJD:()=>Ht,F3s:()=>St,jw9:()=>Dt,g0X:()=>Js,iXf:()=>Mn,NbY:()=>Mr,kQl:()=>Et,LLl:()=>Yo,WFw:()=>Qr,tji:()=>ps,o71:()=>qe,jMx:()=>oa,A4J:()=>ro,c$m:()=>Zo,Vj7:()=>Br,D9L:()=>Kr,SWk:()=>Xr,aw3:()=>cs,Xft:()=>hs,mpB:()=>Gt,m$d:()=>na,IP1:()=>ns,LiH:()=>ea,wRZ:()=>es,wbP:()=>os,sLD:()=>Ks,yqR:()=>Xs,cEv:()=>Co,i44:()=>Nt,vMt:()=>Xo,tJ6:()=>To,IRu:()=>At,Qzn:()=>qi,iJT:()=>pa,qP7:()=>Ot,Qtd:()=>sa,Zo2:()=>So,ROj:()=>us,FB1:()=>Mt,q1D:()=>ca,d4o:()=>Lt,huM:()=>xt,ZYZ:()=>xo,nnL:()=>gs,Bo4:()=>ga,ubO:()=>ua,tw_:()=>Ao,wpb:()=>Ft,BnY:()=>$r,_eC:()=>xr,fwG:()=>Mo,zwS:()=>bo,pP7:()=>bt,Tt7:()=>Go,Kmw:()=>Bo});var o=r(655);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var D=r(9245);function F(e,s){for(var y,n=/\r\n|[\n\r]/g,d=1,z=s+1;(y=n.exec(e.body))&&y.index<s;)d+=1,z=s+1-(y.index+y[0].length);return{line:d,column:z}}function Z(e){return B(e.source,F(e.source,e.start))}function B(e,s){var n=e.locationOffset.column-1,d=A(n)+e.body,z=s.line-1,T=s.line+(e.locationOffset.line-1),x=s.column+(1===s.line?n:0),me="".concat(e.name,":").concat(T,":").concat(x,"\n"),be=d.split(/\r\n|[\n\r]/g),Ke=be[z];if(Ke.length>120){for(var Rt=Math.floor(x/80),wt=x%80,We=[],we=0;we<Ke.length;we+=80)We.push(Ke.slice(we,we+80));return me+q([["".concat(T),We[0]]].concat(We.slice(1,Rt+1).map(function(Bt){return["",Bt]}),[[" ",A(wt-1)+"^"],["",We[Rt+1]]]))}return me+q([["".concat(T-1),be[z-1]],["".concat(T),Ke],["",A(x-1)+"^"],["".concat(T+1),be[z+1]]])}function q(e){var s=e.filter(function(d){return void 0!==d[1]}),n=Math.max.apply(Math,s.map(function(d){return d[0].length}));return s.map(function(d){var y=d[1];return function L(e,s){return A(e-s.length)+s}(n,d[0])+(y?" | "+y:" |")}).join("\n")}function A(e){return Array(e+1).join(" ")}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function H(e,s){for(var n=0;n<s.length;n++){var d=s[n];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function oe(e,s){return!s||"object"!==G(s)&&"function"!=typeof s?V(e):s}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){var s="function"==typeof Map?new Map:void 0;return b=function(d){if(null===d||!function ne(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(d))return d;if("function"!=typeof d)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(d))return s.get(d);s.set(d,z)}function z(){return I(d,arguments,de(this).constructor)}return z.prototype=Object.create(d.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),X(z,d)},b(e)}function I(e,s,n){return(I=$()?Reflect.construct:function(z,y,T){var S=[null];S.push.apply(S,y);var me=new(Function.bind.apply(z,S));return T&&X(me,T.prototype),me}).apply(null,arguments)}function $(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function X(e,s){return(X=Object.setPrototypeOf||function(d,z){return d.__proto__=z,d})(e,s)}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(e)}var fe=function(e){!function te(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&X(e,s)}(n,e);var s=function se(e){var s=$();return function(){var z,d=de(e);if(s){var y=de(this).constructor;z=Reflect.construct(d,arguments,y)}else z=d.apply(this,arguments);return oe(this,z)}}(n);function n(d,z,y,T,S,x,me){var be,Ke,Rt,wt,We;(function K(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),We=s.call(this,d);var Wt,we=Array.isArray(z)?0!==z.length?z:void 0:z?[z]:void 0,Bt=y;!Bt&&we&&(Bt=null===(Wt=we[0].loc)||void 0===Wt?void 0:Wt.source);var Ut,$t=T;!$t&&we&&($t=we.reduce(function(dt,Pt){return Pt.loc&&dt.push(Pt.loc.start),dt},[])),$t&&0===$t.length&&($t=void 0),T&&y?Ut=T.map(function(dt){return F(y,dt)}):we&&(Ut=we.reduce(function(dt,Pt){return Pt.loc&&dt.push(F(Pt.loc.source,Pt.loc.start)),dt},[]));var Qt=me;if(null==Qt&&null!=x){var en=x.extensions;(function t(e){return"object"==i(e)&&null!==e})(en)&&(Qt=en)}return Object.defineProperties(V(We),{name:{value:"GraphQLError"},message:{value:d,enumerable:!0,writable:!0},locations:{value:null!==(be=Ut)&&void 0!==be?be:void 0,enumerable:null!=Ut},path:{value:null!=S?S:void 0,enumerable:null!=S},nodes:{value:null!=we?we:void 0},source:{value:null!==(Ke=Bt)&&void 0!==Ke?Ke:void 0},positions:{value:null!==(Rt=$t)&&void 0!==Rt?Rt:void 0},originalError:{value:x},extensions:{value:null!==(wt=Qt)&&void 0!==wt?wt:void 0,enumerable:null!=Qt}}),(null==x?void 0:x.stack)?(Object.defineProperty(V(We),"stack",{value:x.stack,writable:!0,configurable:!0}),oe(We)):(Error.captureStackTrace?Error.captureStackTrace(V(We),n):Object.defineProperty(V(We),"stack",{value:Error().stack,writable:!0,configurable:!0}),We)}return function le(e,s,n){s&&H(e.prototype,s),n&&H(e,n)}(n,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var n=0,d=e.nodes;n<d.length;n++){var z=d[n];z.loc&&(s+="\n\n"+Z(z.loc))}else if(e.source&&e.locations)for(var y=0,T=e.locations;y<T.length;y++)s+="\n\n"+B(e.source,T[y]);return s}(this)}},{key:D.YF,get:function(){return"Object"}}]),n}(b(Error));function ue(e,s,n){return new fe("Syntax Error: ".concat(n),void 0,e,[s])}var W=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),Y=r(848),g=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),w=r(6261),O=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),Q=r(2032),ye=function(){function e(n){var d=new Y.WU(g.SOF,0,0,0,0,null);this.source=n,this.lastToken=d,this.token=d,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var d=this.token;if(d.kind!==g.EOF)do{var z;d=null!==(z=d.next)&&void 0!==z?z:d.next=Ee(this,d)}while(d.kind===g.COMMENT);return d},e}();function Se(e){return isNaN(e)?g.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Ee(e,s){for(var n=e.source,d=n.body,z=d.length,y=s.end;y<z;){var T=d.charCodeAt(y),S=e.line,x=1+y-e.lineStart;switch(T){case 65279:case 9:case 32:case 44:++y;continue;case 10:++y,++e.line,e.lineStart=y;continue;case 13:10===d.charCodeAt(y+1)?y+=2:++y,++e.line,e.lineStart=y;continue;case 33:return new Y.WU(g.BANG,y,y+1,S,x,s);case 35:return Re(n,y,S,x,s);case 36:return new Y.WU(g.DOLLAR,y,y+1,S,x,s);case 38:return new Y.WU(g.AMP,y,y+1,S,x,s);case 40:return new Y.WU(g.PAREN_L,y,y+1,S,x,s);case 41:return new Y.WU(g.PAREN_R,y,y+1,S,x,s);case 46:if(46===d.charCodeAt(y+1)&&46===d.charCodeAt(y+2))return new Y.WU(g.SPREAD,y,y+3,S,x,s);break;case 58:return new Y.WU(g.COLON,y,y+1,S,x,s);case 61:return new Y.WU(g.EQUALS,y,y+1,S,x,s);case 64:return new Y.WU(g.AT,y,y+1,S,x,s);case 91:return new Y.WU(g.BRACKET_L,y,y+1,S,x,s);case 93:return new Y.WU(g.BRACKET_R,y,y+1,S,x,s);case 123:return new Y.WU(g.BRACE_L,y,y+1,S,x,s);case 124:return new Y.WU(g.PIPE,y,y+1,S,x,s);case 125:return new Y.WU(g.BRACE_R,y,y+1,S,x,s);case 34:return 34===d.charCodeAt(y+1)&&34===d.charCodeAt(y+2)?ee(n,y,S,x,s,e):N(n,y,S,x,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ve(n,y,T,S,x,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return U(n,y,S,x,s)}throw ue(n,y,Oe(T))}return new Y.WU(g.EOF,z,z,e.line,1+y-e.lineStart,s)}function Oe(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Se(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Se(e),".")}function Re(e,s,n,d,z){var T,y=e.body,S=s;do{T=y.charCodeAt(++S)}while(!isNaN(T)&&(T>31||9===T));return new Y.WU(g.COMMENT,s,S,n,d,z,y.slice(s+1,S))}function Ve(e,s,n,d,z,y){var T=e.body,S=n,x=s,me=!1;if(45===S&&(S=T.charCodeAt(++x)),48===S){if((S=T.charCodeAt(++x))>=48&&S<=57)throw ue(e,x,"Invalid number, unexpected digit after 0: ".concat(Se(S),"."))}else x=Pe(e,x,S),S=T.charCodeAt(x);if(46===S&&(me=!0,S=T.charCodeAt(++x),x=Pe(e,x,S),S=T.charCodeAt(x)),(69===S||101===S)&&(me=!0,(43===(S=T.charCodeAt(++x))||45===S)&&(S=T.charCodeAt(++x)),x=Pe(e,x,S),S=T.charCodeAt(x)),46===S||function ge(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(S))throw ue(e,x,"Invalid number, expected digit but got: ".concat(Se(S),"."));return new Y.WU(me?g.FLOAT:g.INT,s,x,d,z,y,T.slice(s,x))}function Pe(e,s,n){var d=e.body,z=s,y=n;if(y>=48&&y<=57){do{y=d.charCodeAt(++z)}while(y>=48&&y<=57);return z}throw ue(e,z,"Invalid number, expected digit but got: ".concat(Se(y),"."))}function N(e,s,n,d,z){for(var y=e.body,T=s+1,S=T,x=0,me="";T<y.length&&!isNaN(x=y.charCodeAt(T))&&10!==x&&13!==x;){if(34===x)return me+=y.slice(S,T),new Y.WU(g.STRING,s,T+1,n,d,z,me);if(x<32&&9!==x)throw ue(e,T,"Invalid character within String: ".concat(Se(x),"."));if(++T,92===x){switch(me+=y.slice(S,T-1),x=y.charCodeAt(T)){case 34:me+='"';break;case 47:me+="/";break;case 92:me+="\\";break;case 98:me+="\b";break;case 102:me+="\f";break;case 110:me+="\n";break;case 114:me+="\r";break;case 116:me+="\t";break;case 117:var be=_(y.charCodeAt(T+1),y.charCodeAt(T+2),y.charCodeAt(T+3),y.charCodeAt(T+4));if(be<0){var Ke=y.slice(T+1,T+5);throw ue(e,T,"Invalid character escape sequence: \\u".concat(Ke,"."))}me+=String.fromCharCode(be),T+=4;break;default:throw ue(e,T,"Invalid character escape sequence: \\".concat(String.fromCharCode(x),"."))}S=++T}}throw ue(e,T,"Unterminated string.")}function ee(e,s,n,d,z,y){for(var T=e.body,S=s+3,x=S,me=0,be="";S<T.length&&!isNaN(me=T.charCodeAt(S));){if(34===me&&34===T.charCodeAt(S+1)&&34===T.charCodeAt(S+2))return be+=T.slice(x,S),new Y.WU(g.BLOCK_STRING,s,S+3,n,d,z,(0,Q.W7)(be));if(me<32&&9!==me&&10!==me&&13!==me)throw ue(e,S,"Invalid character within String: ".concat(Se(me),"."));10===me?(++S,++y.line,y.lineStart=S):13===me?(10===T.charCodeAt(S+1)?S+=2:++S,++y.line,y.lineStart=S):92===me&&34===T.charCodeAt(S+1)&&34===T.charCodeAt(S+2)&&34===T.charCodeAt(S+3)?(be+=T.slice(x,S)+'"""',x=S+=4):++S}throw ue(e,S,"Unterminated string.")}function _(e,s,n,d){return J(e)<<12|J(s)<<8|J(n)<<4|J(d)}function J(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function U(e,s,n,d,z){for(var y=e.body,T=y.length,S=s+1,x=0;S!==T&&!isNaN(x=y.charCodeAt(S))&&(95===x||x>=48&&x<=57||x>=65&&x<=90||x>=97&&x<=122);)++S;return new Y.WU(g.NAME,s,S,n,d,z,y.slice(s,S))}var Ie=function(){function e(n,d){var z=(0,w.T)(n)?n:new w.H(n);this._lexer=new ye(z),this._options=d}var s=e.prototype;return s.parseName=function(){var d=this.expectToken(g.NAME);return{kind:W.NAME,value:d.value,loc:this.loc(d)}},s.parseDocument=function(){var d=this._lexer.token;return{kind:W.DOCUMENT,definitions:this.many(g.SOF,this.parseDefinition,g.EOF),loc:this.loc(d)}},s.parseDefinition=function(){if(this.peek(g.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(g.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var d=this._lexer.token;if(this.peek(g.BRACE_L))return{kind:W.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(d)};var y,z=this.parseOperationType();return this.peek(g.NAME)&&(y=this.parseName()),{kind:W.OPERATION_DEFINITION,operation:z,name:y,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseOperationType=function(){var d=this.expectToken(g.NAME);switch(d.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(d)},s.parseVariableDefinitions=function(){return this.optionalMany(g.PAREN_L,this.parseVariableDefinition,g.PAREN_R)},s.parseVariableDefinition=function(){var d=this._lexer.token;return{kind:W.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(g.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(g.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(d)}},s.parseVariable=function(){var d=this._lexer.token;return this.expectToken(g.DOLLAR),{kind:W.VARIABLE,name:this.parseName(),loc:this.loc(d)}},s.parseSelectionSet=function(){var d=this._lexer.token;return{kind:W.SELECTION_SET,selections:this.many(g.BRACE_L,this.parseSelection,g.BRACE_R),loc:this.loc(d)}},s.parseSelection=function(){return this.peek(g.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var y,T,d=this._lexer.token,z=this.parseName();return this.expectOptionalToken(g.COLON)?(y=z,T=this.parseName()):T=z,{kind:W.FIELD,alias:y,name:T,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(g.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(d)}},s.parseArguments=function(d){return this.optionalMany(g.PAREN_L,d?this.parseConstArgument:this.parseArgument,g.PAREN_R)},s.parseArgument=function(){var d=this._lexer.token,z=this.parseName();return this.expectToken(g.COLON),{kind:W.ARGUMENT,name:z,value:this.parseValueLiteral(!1),loc:this.loc(d)}},s.parseConstArgument=function(){var d=this._lexer.token;return{kind:W.ARGUMENT,name:this.parseName(),value:(this.expectToken(g.COLON),this.parseValueLiteral(!0)),loc:this.loc(d)}},s.parseFragment=function(){var d=this._lexer.token;this.expectToken(g.SPREAD);var z=this.expectOptionalKeyword("on");return!z&&this.peek(g.NAME)?{kind:W.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(d)}:{kind:W.INLINE_FRAGMENT,typeCondition:z?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseFragmentDefinition=function(){var d,z=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(d=this._options)||void 0===d?void 0:d.experimentalFragmentVariables)?{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}:{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(d){var z=this._lexer.token;switch(z.kind){case g.BRACKET_L:return this.parseList(d);case g.BRACE_L:return this.parseObject(d);case g.INT:return this._lexer.advance(),{kind:W.INT,value:z.value,loc:this.loc(z)};case g.FLOAT:return this._lexer.advance(),{kind:W.FLOAT,value:z.value,loc:this.loc(z)};case g.STRING:case g.BLOCK_STRING:return this.parseStringLiteral();case g.NAME:switch(this._lexer.advance(),z.value){case"true":return{kind:W.BOOLEAN,value:!0,loc:this.loc(z)};case"false":return{kind:W.BOOLEAN,value:!1,loc:this.loc(z)};case"null":return{kind:W.NULL,loc:this.loc(z)};default:return{kind:W.ENUM,value:z.value,loc:this.loc(z)}}case g.DOLLAR:if(!d)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var d=this._lexer.token;return this._lexer.advance(),{kind:W.STRING,value:d.value,block:d.kind===g.BLOCK_STRING,loc:this.loc(d)}},s.parseList=function(d){var z=this,y=this._lexer.token;return{kind:W.LIST,values:this.any(g.BRACKET_L,function(){return z.parseValueLiteral(d)},g.BRACKET_R),loc:this.loc(y)}},s.parseObject=function(d){var z=this,y=this._lexer.token;return{kind:W.OBJECT,fields:this.any(g.BRACE_L,function(){return z.parseObjectField(d)},g.BRACE_R),loc:this.loc(y)}},s.parseObjectField=function(d){var z=this._lexer.token,y=this.parseName();return this.expectToken(g.COLON),{kind:W.OBJECT_FIELD,name:y,value:this.parseValueLiteral(d),loc:this.loc(z)}},s.parseDirectives=function(d){for(var z=[];this.peek(g.AT);)z.push(this.parseDirective(d));return z},s.parseDirective=function(d){var z=this._lexer.token;return this.expectToken(g.AT),{kind:W.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(d),loc:this.loc(z)}},s.parseTypeReference=function(){var z,d=this._lexer.token;return this.expectOptionalToken(g.BRACKET_L)?(z=this.parseTypeReference(),this.expectToken(g.BRACKET_R),z={kind:W.LIST_TYPE,type:z,loc:this.loc(d)}):z=this.parseNamedType(),this.expectOptionalToken(g.BANG)?{kind:W.NON_NULL_TYPE,type:z,loc:this.loc(d)}:z},s.parseNamedType=function(){var d=this._lexer.token;return{kind:W.NAMED_TYPE,name:this.parseName(),loc:this.loc(d)}},s.parseTypeSystemDefinition=function(){var d=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(d.kind===g.NAME)switch(d.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(d)},s.peekDescription=function(){return this.peek(g.STRING)||this.peek(g.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("schema");var y=this.parseDirectives(!0),T=this.many(g.BRACE_L,this.parseOperationTypeDefinition,g.BRACE_R);return{kind:W.SCHEMA_DEFINITION,description:z,directives:y,operationTypes:T,loc:this.loc(d)}},s.parseOperationTypeDefinition=function(){var d=this._lexer.token,z=this.parseOperationType();this.expectToken(g.COLON);var y=this.parseNamedType();return{kind:W.OPERATION_TYPE_DEFINITION,operation:z,type:y,loc:this.loc(d)}},s.parseScalarTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("scalar");var y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.SCALAR_TYPE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("type");var y=this.parseName(),T=this.parseImplementsInterfaces(),S=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.OBJECT_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:S,fields:x,loc:this.loc(d)}},s.parseImplementsInterfaces=function(){var d;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLImplementsInterfaces)){var z=[];this.expectOptionalToken(g.AMP);do{z.push(this.parseNamedType())}while(this.expectOptionalToken(g.AMP)||this.peek(g.NAME));return z}return this.delimitedMany(g.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var d;return!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLEmptyFields)&&this.peek(g.BRACE_L)&&this._lexer.lookahead().kind===g.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(g.BRACE_L,this.parseFieldDefinition,g.BRACE_R)},s.parseFieldDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseArgumentDefs();this.expectToken(g.COLON);var S=this.parseTypeReference(),x=this.parseDirectives(!0);return{kind:W.FIELD_DEFINITION,description:z,name:y,arguments:T,type:S,directives:x,loc:this.loc(d)}},s.parseArgumentDefs=function(){return this.optionalMany(g.PAREN_L,this.parseInputValueDef,g.PAREN_R)},s.parseInputValueDef=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName();this.expectToken(g.COLON);var S,T=this.parseTypeReference();this.expectOptionalToken(g.EQUALS)&&(S=this.parseValueLiteral(!0));var x=this.parseDirectives(!0);return{kind:W.INPUT_VALUE_DEFINITION,description:z,name:y,type:T,defaultValue:S,directives:x,loc:this.loc(d)}},s.parseInterfaceTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("interface");var y=this.parseName(),T=this.parseImplementsInterfaces(),S=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.INTERFACE_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:S,fields:x,loc:this.loc(d)}},s.parseUnionTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("union");var y=this.parseName(),T=this.parseDirectives(!0),S=this.parseUnionMemberTypes();return{kind:W.UNION_TYPE_DEFINITION,description:z,name:y,directives:T,types:S,loc:this.loc(d)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(g.EQUALS)?this.delimitedMany(g.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("enum");var y=this.parseName(),T=this.parseDirectives(!0),S=this.parseEnumValuesDefinition();return{kind:W.ENUM_TYPE_DEFINITION,description:z,name:y,directives:T,values:S,loc:this.loc(d)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(g.BRACE_L,this.parseEnumValueDefinition,g.BRACE_R)},s.parseEnumValueDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.ENUM_VALUE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseInputObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("input");var y=this.parseName(),T=this.parseDirectives(!0),S=this.parseInputFieldsDefinition();return{kind:W.INPUT_OBJECT_TYPE_DEFINITION,description:z,name:y,directives:T,fields:S,loc:this.loc(d)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(g.BRACE_L,this.parseInputValueDef,g.BRACE_R)},s.parseTypeSystemExtension=function(){var d=this._lexer.lookahead();if(d.kind===g.NAME)switch(d.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(d)},s.parseSchemaExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var z=this.parseDirectives(!0),y=this.optionalMany(g.BRACE_L,this.parseOperationTypeDefinition,g.BRACE_R);if(0===z.length&&0===y.length)throw this.unexpected();return{kind:W.SCHEMA_EXTENSION,directives:z,operationTypes:y,loc:this.loc(d)}},s.parseScalarTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var z=this.parseName(),y=this.parseDirectives(!0);if(0===y.length)throw this.unexpected();return{kind:W.SCALAR_TYPE_EXTENSION,name:z,directives:y,loc:this.loc(d)}},s.parseObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),S=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===S.length)throw this.unexpected();return{kind:W.OBJECT_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:S,loc:this.loc(d)}},s.parseInterfaceTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),S=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===S.length)throw this.unexpected();return{kind:W.INTERFACE_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:S,loc:this.loc(d)}},s.parseUnionTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseUnionMemberTypes();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.UNION_TYPE_EXTENSION,name:z,directives:y,types:T,loc:this.loc(d)}},s.parseEnumTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseEnumValuesDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.ENUM_TYPE_EXTENSION,name:z,directives:y,values:T,loc:this.loc(d)}},s.parseInputObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseInputFieldsDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.INPUT_OBJECT_TYPE_EXTENSION,name:z,directives:y,fields:T,loc:this.loc(d)}},s.parseDirectiveDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("directive"),this.expectToken(g.AT);var y=this.parseName(),T=this.parseArgumentDefs(),S=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var x=this.parseDirectiveLocations();return{kind:W.DIRECTIVE_DEFINITION,description:z,name:y,arguments:T,repeatable:S,locations:x,loc:this.loc(d)}},s.parseDirectiveLocations=function(){return this.delimitedMany(g.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var d=this._lexer.token,z=this.parseName();if(void 0!==O[z.value])return z;throw this.unexpected(d)},s.loc=function(d){var z;if(!0!==(null===(z=this._options)||void 0===z?void 0:z.noLocation))return new Y.Ye(d,this._lexer.lastToken,this._lexer.source)},s.peek=function(d){return this._lexer.token.kind===d},s.expectToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z;throw ue(this._lexer.source,z.start,"Expected ".concat(Ne(d),", found ").concat(Le(z),"."))},s.expectOptionalToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z},s.expectKeyword=function(d){var z=this._lexer.token;if(z.kind!==g.NAME||z.value!==d)throw ue(this._lexer.source,z.start,'Expected "'.concat(d,'", found ').concat(Le(z),"."));this._lexer.advance()},s.expectOptionalKeyword=function(d){var z=this._lexer.token;return z.kind===g.NAME&&z.value===d&&(this._lexer.advance(),!0)},s.unexpected=function(d){var z=null!=d?d:this._lexer.token;return ue(this._lexer.source,z.start,"Unexpected ".concat(Le(z),"."))},s.any=function(d,z,y){this.expectToken(d);for(var T=[];!this.expectOptionalToken(y);)T.push(z.call(this));return T},s.optionalMany=function(d,z,y){if(this.expectOptionalToken(d)){var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T}return[]},s.many=function(d,z,y){this.expectToken(d);var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T},s.delimitedMany=function(d,z){this.expectOptionalToken(d);var y=[];do{y.push(z.call(this))}while(this.expectOptionalToken(d));return y},e}();function Le(e){var s=e.value;return Ne(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function Ne(e){return function _e(e){return e===g.BANG||e===g.DOLLAR||e===g.AMP||e===g.PAREN_L||e===g.PAREN_R||e===g.SPREAD||e===g.COLON||e===g.EQUALS||e===g.AT||e===g.BRACKET_L||e===g.BRACKET_R||e===g.BRACE_L||e===g.PIPE||e===g.BRACE_R}(e)?'"'.concat(e,'"'):e}var Be=new Map,ve=new Map,Ue=!0,xe=!1;function $e(e){return e.replace(/[\s,]+/g," ").trim()}function rt(e){var s=$e(e);if(!Be.has(s)){var n=function Ce(e,s){return new Ie(e,s).parseDocument()}(e,{experimentalFragmentVariables:xe,allowLegacyFragmentVariables:xe});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");Be.set(s,function tt(e){var s=new Set(e.definitions);s.forEach(function(d){d.loc&&delete d.loc,Object.keys(d).forEach(function(z){var y=d[z];y&&"object"==typeof y&&s.add(y)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function ot(e){var s=new Set,n=[];return e.definitions.forEach(function(d){if("FragmentDefinition"===d.kind){var z=d.name.value,y=function it(e){return $e(e.source.body.substring(e.start,e.end))}(d.loc),T=ve.get(z);T&&!T.has(y)?Ue&&console.warn("Warning: fragment with name "+z+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):T||ve.set(z,T=new Set),T.add(y),s.has(y)||(s.add(y),n.push(d))}else n.push(d)}),(0,o.pi)((0,o.pi)({},e),{definitions:n})}(n)))}return Be.get(s)}function h(e){for(var s=[],n=1;n<arguments.length;n++)s[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var d=e[0];return s.forEach(function(z,y){d+=z&&"Document"===z.kind?z.loc.source.body:z,d+=e[y+1]}),rt(d)}var e,Ge_gql=h;(e=h||(h={})).gql=Ge_gql,e.resetCaches=function st(){Be.clear(),ve.clear()},e.disableFragmentWarnings=function at(){Ue=!1},e.enableExperimentalFragmentVariables=function ct(){xe=!0},e.disableExperimentalFragmentVariables=function lt(){xe=!1},h.default=h;var p=r(9298),a=r(5e3),j=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(j||(j={})),j))(),l=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(l||(l={})),l))(),k=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(k||(k={})),k))(),ie=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ie||(ie={})),ie))(),ze=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(ze||(ze={})),ze))(),Te=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Te||(Te={})),Te))(),Fe=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Fe||(Fe={})),Fe))(),ke=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Source="SOURCE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ke||(ke={})),ke))(),Ye=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Ye||(Ye={})),Ye))(),Je=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Je||(Je={})),Je))(),He=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(He||(He={})),He))(),nt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(nt||(nt={})),nt))(),Qe=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Qe||(Qe={})),Qe))(),je=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(je||(je={})),je))(),ut=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ut||(ut={})),ut))(),Xe=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(Xe||(Xe={})),Xe))(),f=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(f||(f={})),f))(),E=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(E||(E={})),E))(),C=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(C||(C={})),C))(),R=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(R||(R={})),R))(),ce=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(ce||(ce={})),ce))(),he=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(he||(he={})),he))(),mt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(zt||(zt={})),zt))(),yt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Ct||(Ct={})),Ct))(),It=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(It||(It={})),It))(),Tt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Tt||(Tt={})),Tt))(),_t=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(_t||(_t={})),_t))(),St=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(St||(St={})),St))(),Dt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Dt||(Dt={})),Dt))(),Et=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Et||(Et={})),Et))(),qe=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(qe||(qe={})),qe))(),Gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Gt||(Gt={})),Gt))(),Nt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Nt||(Nt={})),Nt))(),At=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(At||(At={})),At))(),Ot=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(Ot||(Ot={})),Ot))(),Mt=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(Mt||(Mt={})),Mt))(),Lt=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(Lt||(Lt={})),Lt))(),xt=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(xt||(xt={})),xt))(),Ft=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(Ft||(Ft={})),Ft))(),bt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(bt||(bt={})),bt))();const Vt=h`
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
    `,Zt=h`
    fragment AssertionBrowseTableRowFields on Assertion {
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
  phenotypes @include(if: $cardView) {
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
  acmgCodes @include(if: $cardView) {
    code
  }
  fdaCompanionTest @include(if: $cardView)
  regulatoryApproval @include(if: $cardView)
  regulatoryApprovalLastUpdated @include(if: $cardView)
  nccnGuideline @include(if: $cardView) {
    id
    name
  }
  variantOrigin @include(if: $cardView)
  evidenceItemsCount
  status
}
    `,kt=h`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,u=h`
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
    `,M=h`
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
    `,c=h`
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
    `,v=h`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,P=h`
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
    `,ae=h`
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
    ${P}`,et=h`
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
    `,Yt=h`
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
  phenotypes @include(if: $cardView) {
    id
    name
    link
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
    link
  }
  assertions @include(if: $cardView) {
    id
    name
    link
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
    `,nn=h`
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
    ${h`
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
    `}`,on=h`
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
    `,rn=h`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,sn=h`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,an=h`
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
    `,cn=h`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,ln=h`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,un=h`
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
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
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
    `,dn=h`
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
    `,pn=h`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,mn=h`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,gn=h`
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
}
    `,fn=h`
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
    `,hn=h`
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
  link
}
    `,vn=h`
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
    `,zn=h`
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
    `,yn=h`
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
    `,Cn=h`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,In=h`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,Tn=h`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,_n=h`
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
    `,Sn=h`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,Dn=h`
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
    `,En=h`
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
    `,Nn=h`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,An=h`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,On=h`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Kt=h`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Ht=h`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,Mn=h`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Xt=h`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Ln=h`
    fragment AddVariantFields on AddVariantPayload {
  new
  variant {
    id
    name
  }
}
    `,xn=(h`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,h`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
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
    `),Fn=h`
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
    `,bn=h`
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
    `,Rn=h`
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
    `,Pn=h`
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
    ${h`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `}`,Gn=h`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
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
    `,wn=h`
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
    `,Bn=h`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
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
    `,Un=h`
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
    `,Qn=h`
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
    `,Vn=h`
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
    `,Zn=h`
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
    `,kn=h`
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
    `,Yn=h`
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
    `,Wn=h`
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
    `,Jn=h`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,jn=h`
    fragment SourceSummaryFields on Source {
  id
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
    `,Kn=h`
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
    `,Hn=h`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Xn=h`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,qn=h`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,qt=h`
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
    ${P}`,ei=h`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,ti=h`
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
    `,ni=h`
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
    `,ii=h`
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
    `,ri=h`
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
    ${h`
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
    `}`,si=h`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Vt}`;let ai=(()=>{class e extends p.AE{constructor(n){super(n),this.document=si}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=h`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatus, $cardView: Boolean!) {
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
        ...AssertionBrowseTableRowFields
      }
    }
  }
}
    ${Zt}`;let li=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ci}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=h`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${kt}`;let di=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ui}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=h`
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
        id
        name
        nctId
        evidenceCount
        sourceCount
        link
      }
    }
  }
}
    `;let mi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=pi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gi=h`
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
    ${u}`;let fi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=gi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=h`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${M}`;let vi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=hi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=h`
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
    `;let yi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=zi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=h`
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
    ${c}`;let Ii=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ci}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ti=h`
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
    `;let _i=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ti}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=h`
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
    ${v}`;let Di=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Si}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=h`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $showFilters: Boolean!) {
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
  ) {
    ...eventFeed
  }
}
    ${ae}`;let Ni=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ei}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=h`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${et}`;let Oi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ai}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mi=h`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $status: EvidenceStatus, $cardView: Boolean!) {
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
    ${Yt}`;let Li=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Mi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=h`
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
    ${nn}`;let Fi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=xi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=h`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${on}`;let Ri=(()=>{class e extends p.AE{constructor(n){super(n),this.document=bi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=h`
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
        link
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
    `;let Pi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=$i}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=h`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${rn}`;let wi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Gi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=h`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${sn}`;let Ui=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Bi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=h`
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
    ${an}`;let Vi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Qi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=h`
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
    `;let ki=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Zi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yi=h`
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
    ${cn}`;let Wi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Yi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=h`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ji=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ji}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=h`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Hi=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ki}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=h`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ln}`;let qi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Xi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const eo=h`
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
    ${un}`;let to=(()=>{class e extends p.AE{constructor(n){super(n),this.document=eo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=h`
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
    ${dn}`;let io=(()=>{class e extends p.AE{constructor(n){super(n),this.document=no}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oo=h`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${pn}`;let ro=(()=>{class e extends p.AE{constructor(n){super(n),this.document=oo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=h`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let ao=(()=>{class e extends p.mm{constructor(n){super(n),this.document=so}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=h`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let lo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=co}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=h`
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
    ${mn}`;let po=(()=>{class e extends p.AE{constructor(n){super(n),this.document=uo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=h`
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
    ${gn}`;let go=(()=>{class e extends p.AE{constructor(n){super(n),this.document=mo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();h`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const fo=h`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${fn}`;let ho=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=h`
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
    ${hn}`;let zo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=h`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${vn}`;let Co=(()=>{class e extends p.AE{constructor(n){super(n),this.document=yo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=h`
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
    ${zn}`;let To=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Io}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=h`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${yn}`;let So=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_o}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=h`
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
    ${Cn}`;let Eo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Do}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const No=h`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${In}`;let Ao=(()=>{class e extends p.AE{constructor(n){super(n),this.document=No}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oo=h`
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
    ${Tn}`;let Mo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Oo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=h`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${_n}`;let xo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Lo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=h`
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
    ${Sn}`;let bo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=h`
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
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;let $o=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ro}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=h`
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
    `;let Go=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Po}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=h`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Bo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=wo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=h`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${Dn}`;let Qo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Uo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vo=h`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Zo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Vo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=h`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Yo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ko}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wo=h`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${u}`;let Jo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Wo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=h`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${En}`;let Ko=(()=>{class e extends p.AE{constructor(n){super(n),this.document=jo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=h`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Xo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ho}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=h`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let er=(()=>{class e extends p.AE{constructor(n){super(n),this.document=qo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=h`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let nr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=tr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=h`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let or=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ir}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=h`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Nn}`;let sr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=rr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=h`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let cr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ar}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=h`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${An}`;let ur=(()=>{class e extends p.mm{constructor(n){super(n),this.document=lr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=h`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let pr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=dr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=h`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${On}`;let gr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=mr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=h`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let hr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=h`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let zr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=h`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Kt}`;let Cr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=yr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=h`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Tr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ir}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=h`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Sr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=_r}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=h`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Er=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Dr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Nr=h`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Ht}`;let Ar=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Nr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Or=h`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Kt}`;let Mr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Or}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=h`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Xt}`;let xr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Lr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fr=h`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Ln}`;let br=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Fr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();h`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Xt}`;const Rr=h`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let $r=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=h`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${xn}`;let Gr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Pr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=h`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Br=(()=>{class e extends p.mm{constructor(n){super(n),this.document=wr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();h`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Fn}`;const Ur=h`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Qr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ur}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vr=h`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Zr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Vr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kr=h`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Yr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=kr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wr=h`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${bn}`;let Jr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Wr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=h`
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
    `;let Kr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=jr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=h`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Xr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Hr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=h`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let es=(()=>{class e extends p.mm{constructor(n){super(n),this.document=qr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=h`
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
    `;let ns=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ts}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const is=h`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let os=(()=>{class e extends p.mm{constructor(n){super(n),this.document=is}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=h`
    query Countries {
  countries {
    id
    name
  }
}
    `;let ss=(()=>{class e extends p.AE{constructor(n){super(n),this.document=rs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=h`
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
    `;let cs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=as}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=h`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Rn}`;let us=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ls}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=h`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let ps=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ds}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=h`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Pn}`;let gs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ms}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=h`
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
    `;let hs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=fs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=h`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Gn}`;let zs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=h`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${wn}`;let Cs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ys}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=h`
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
    `;let Ts=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Is}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=h`
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
    `;let Ss=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_s}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=h`
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
    `;let Es=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ds}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ns=h`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Bn}`;let As=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ns}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Os=h`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Un}`;let Ms=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Os}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ls=h`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Qn}`;let xs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ls}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fs=h`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Vn}`;let bs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rs=h`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Zn}`;let $s=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=h`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${kn}`;let Gs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ps}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=h`
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
    ${Yn}`;let Bs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ws}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Us=h`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let Qs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Us}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vs=h`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Wn}`;let Zs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Vs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ks=h`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Jn}`;let Ys=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ks}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ws=h`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${jn}`;let Js=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ws}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=h`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Kn}`;let Ks=(()=>{class e extends p.AE{constructor(n){super(n),this.document=js}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hs=h`
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
    ${qn}
${Xn}
${Hn}
${qt}`;let Xs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Hs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qs=h`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${qt}`;let ea=(()=>{class e extends p.mm{constructor(n){super(n),this.document=qs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ta=h`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${ei}`;let na=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ta}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ia=h`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let oa=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ia}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ra=h`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${ti}`;let sa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ra}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();h`
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
    `;const aa=h`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${ni}`;let ca=(()=>{class e extends p.AE{constructor(n){super(n),this.document=aa}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const la=h`
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
    `;let ua=(()=>{class e extends p.AE{constructor(n){super(n),this.document=la}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const da=h`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${ii}`;let pa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=da}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ma=h`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${ri}`;let ga=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ma}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(De,re,r)=>{r.r(re),r.d(re,{LayoutModule:()=>kt});var o=r(9808),i=r(325),t=r(5e3),D=r(9350),F=r(8929),Z=r(7625),B=r(655),q=r(4090),A=r(1721),L=r(4219),G=r(925),K=r(647),H=r(226),le=r(5113);const te=["*"],se=["nz-sider-trigger",""];function oe(u,M){}function V(u,M){if(1&u&&(t.ynx(0),t.YNc(1,oe,0,0,"ng-template",3),t.BQk()),2&u){const c=t.oxw(),v=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||v)}}function b(u,M){}function I(u,M){if(1&u&&(t.ynx(0),t.YNc(1,b,0,0,"ng-template",3),t.BQk()),2&u){const c=t.oxw(),v=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||v)}}function $(u,M){if(1&u&&t._UZ(0,"i",5),2&u){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function ne(u,M){if(1&u&&t._UZ(0,"i",5),2&u){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function X(u,M){if(1&u&&(t.YNc(0,$,1,1,"i",4),t.YNc(1,ne,1,1,"i",4)),2&u){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function de(u,M){1&u&&t._UZ(0,"i",6)}function fe(u,M){if(1&u){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const P=t.oxw();return P.setCollapsed(!P.nzCollapsed)}),t.qZA()}if(2&u){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class u{constructor(c,v){this.elementRef=c,this.renderer=v,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.SBq),t.Y36(t.Qsj))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:te,decls:1,vars:0,template:function(c,v){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),u})(),W=(()=>{class u{constructor(c,v){this.elementRef=c,this.renderer=v,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.SBq),t.Y36(t.Qsj))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:te,decls:1,vars:0,template:function(c,v){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),u})(),Y=(()=>{class u{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,v){2&c&&(t.Udp("width",v.isNormalTrigger?v.siderWidth:null),t.ekj("ant-layout-sider-trigger",v.isNormalTrigger)("ant-layout-sider-zero-width-trigger",v.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",v.isZeroTrigger&&v.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",v.isZeroTrigger&&!v.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:se,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,v){1&c&&(t.YNc(0,V,2,1,"ng-container",0),t.YNc(1,I,2,1,"ng-container",0),t.YNc(2,X,2,2,"ng-template",null,1,t.W1O),t.YNc(4,de,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",v.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",v.isNormalTrigger))},directives:[o.O5,o.tP,K.Ls],encapsulation:2,changeDetection:0}),u})(),g=(()=>{class u{constructor(c,v,P){this.platform=c,this.cdr=v,this.breakpointService=P,this.destroy$=new F.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,A.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(q.ow,!0).pipe((0,Z.R)(this.destroy$)).subscribe(c=>{const v=this.nzBreakpoint;v&&(0,A.ov)().subscribe(()=>{this.matchBreakPoint=!c[v],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:v,nzCollapsedWidth:P,nzWidth:ae}=c;(v||P||ae)&&this.updateStyleMap(),v&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(G.t4),t.Y36(t.sBO),t.Y36(q.r3))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-sider"]],contentQueries:function(c,v,P){if(1&c&&t.Suo(P,L.wO,5),2&c){let ae;t.iGM(ae=t.CRH())&&(v.nzMenuDirective=ae.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,v){2&c&&(t.Udp("flex",v.flexSetting)("max-width",v.widthSetting)("min-width",v.widthSetting)("width",v.widthSetting),t.ekj("ant-layout-sider-zero-width",v.nzCollapsed&&0===v.nzCollapsedWidth)("ant-layout-sider-light","light"===v.nzTheme)("ant-layout-sider-dark","dark"===v.nzTheme)("ant-layout-sider-collapsed",v.nzCollapsed)("ant-layout-sider-has-trigger",v.nzCollapsible&&null!==v.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:te,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,v){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,fe,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",v.nzCollapsible&&null!==v.nzTrigger))},directives:[Y,o.O5],encapsulation:2,changeDetection:0}),(0,B.gn)([(0,A.yF)()],u.prototype,"nzReverseArrow",void 0),(0,B.gn)([(0,A.yF)()],u.prototype,"nzCollapsible",void 0),(0,B.gn)([(0,A.yF)()],u.prototype,"nzCollapsed",void 0),u})(),w=(()=>{class u{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new F.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(v=>{this.dir=v})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(H.Is,8))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-layout"]],contentQueries:function(c,v,P){if(1&c&&t.Suo(P,g,4),2&c){let ae;t.iGM(ae=t.CRH())&&(v.listOfNzSiderComponent=ae)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,v){2&c&&t.ekj("ant-layout-rtl","rtl"===v.dir)("ant-layout-has-sider",v.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:te,decls:1,vars:0,template:function(c,v){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),u})(),O=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[H.vT,o.ez,K.PV,le.xu,G.ud]]}),u})();var Q=r(404),ye=r(1894),_e=r(712),Se=r(373),Ee=r(1047),Oe=r(4182),Re=r(2845),Ve=r(4832),Pe=r(969),N=r(3753),ee=r(2654),_=r(8514),J=r(6787),U=r(2198),ge=r(2868),Ce=r(6792),Ae=r(2986),Me=r(7545),Ie=r(1159),Le=r(7429),Ne=r(8076);function Be(u,M){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const ve=[[["nz-auto-option"]]],Ue=["nz-auto-option"],xe=["*"],$e=["panel"],it=["content"];function ot(u,M){}function tt(u,M){1&u&&t.YNc(0,ot,0,0,"ng-template")}function rt(u,M){1&u&&t.Hsn(0)}function h(u,M){if(1&u&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&u){const c=M.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function st(u,M){if(1&u&&t.YNc(0,h,2,3,"nz-auto-option",7),2&u){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function at(u,M){if(1&u){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(P){return t.CHM(c),t.oxw().onAnimationEvent(P)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,tt,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,rt,1,0,"ng-template",null,5,t.W1O),t.YNc(7,st,1,1,"ng-template",null,6,t.W1O)}if(2&u){const c=t.MAs(6),v=t.MAs(8),P=t.oxw();t.ekj("ant-select-dropdown-hidden",!P.showPanel)("ant-select-dropdown-rtl","rtl"===P.dir),t.Q6J("ngClass",P.nzOverlayClassName)("ngStyle",P.nzOverlayStyle)("nzNoAnimation",null==P.noAnimation?null:P.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==P.noAnimation?null:P.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",P.nzDataSource?v:c)}}let ct=(()=>{class u{constructor(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ue,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,v){1&c&&(t.F$t(ve),t.TgZ(0,"div",0),t.YNc(1,Be,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",v.nzLabel))},directives:[Pe.f],encapsulation:2,changeDetection:0}),u})();class lt{constructor(M,c=!1){this.source=M,this.isUserInput=c}}let Ge=(()=>{class u{constructor(c,v,P,ae){this.ngZone=c,this.changeDetectorRef=v,this.element=P,this.nzAutocompleteOptgroupComponent=ae,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new F.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,N.R)(this.element.nativeElement,"mouseenter").pipe((0,U.h)(()=>this.mouseEntered.observers.length>0),(0,Z.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,N.R)(this.element.nativeElement,"mousedown").pipe((0,Z.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,A.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new lt(this,c))}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(ct,8))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,v){1&c&&t.NdJ("click",function(){return v.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",v.selected.toString())("aria-disabled",v.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",v.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",v.selected)("ant-select-item-option-active",v.active)("ant-select-item-option-disabled",v.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:xe,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,v){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,B.gn)([(0,A.yF)()],u.prototype,"nzDisabled",void 0),u})();const pt={provide:Oe.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class u{constructor(c,v,P,ae,et){this.elementRef=c,this.overlay=v,this.viewContainerRef=P,this.nzInputGroupWhitSuffixOrPrefixDirective=ae,this.document=et,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new F.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,Z.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const v=c.keyCode,P=v===Ie.LH||v===Ie.JH;v===Ie.hY&&c.preventDefault(),!this.panelOpen||v!==Ie.hY&&v!==Ie.Mf?this.panelOpen&&v===Ie.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&P&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),v===Ie.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const v=c.target,P=this.document;let ae=v.value;"number"===v.type&&(ae=""===ae?null:parseFloat(ae)),this.previousValue!==ae&&(this.previousValue=ae,this.onChange(ae),this.canOpen()&&P.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,ge.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Ce.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,U.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function p(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Le.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new Re.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new Re.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Re.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const v=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(v),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const v=this.nzAutocomplete.getOption(c),P=v?v.getLabel():c;this.elementRef.nativeElement.value=null!=P?P:"",this.nzAutocomplete.nzBackfill||(this.previousValue=P)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.SBq),t.Y36(Re.aV),t.Y36(t.s_b),t.Y36(Ee.ke,8),t.Y36(o.K0,8))},u.\u0275dir=t.lG2({type:u,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,v){1&c&&t.NdJ("focusin",function(){return v.handleFocus()})("blur",function(){return v.handleBlur()})("input",function(ae){return v.handleInput(ae)})("keydown",function(ae){return v.handleKeydown(ae)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),u})(),j=(()=>{class u{constructor(c,v,P,ae){this.changeDetectorRef=c,this.ngZone=v,this.directionality=P,this.noAnimation=ae,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(et,Yt)=>et===Yt,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new F.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ee.w.EMPTY,this.optionMouseEnterSubscription=ee.w.EMPTY,this.dataSourceChangeSubscription=ee.w.EMPTY,this.optionSelectionChanges=(0,_.P)(()=>this.options?(0,J.T)(...this.options.map(et=>et.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Me.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,_.P)(()=>this.options?(0,J.T)(...this.options.map(et=>et.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Me.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(v=>{this.dir=v,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const v=this.options.get(c);v&&!v.active?(this.activeItem=v,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((v,P,ae)=>-1===v?this.compareWith(c,P.nzValue)?ae:-1:v,-1)}getOption(c){return this.options.find(v=>this.compareWith(c,v.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(v=>{!v.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,v=!1){this.options.forEach(P=>{P!==c&&(v&&P.deselect(),P.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,U.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(H.Is,8),t.Y36(Ve.P,9))},u.\u0275cmp=t.Xpm({type:u,selectors:[["nz-autocomplete"]],contentQueries:function(c,v,P){if(1&c&&t.Suo(P,Ge,5),2&c){let ae;t.iGM(ae=t.CRH())&&(v.fromContentOptions=ae)}},viewQuery:function(c,v){if(1&c&&(t.Gf(t.Rgc,5),t.Gf($e,5),t.Gf(it,5),t.Gf(Ge,5)),2&c){let P;t.iGM(P=t.CRH())&&(v.template=P.first),t.iGM(P=t.CRH())&&(v.panel=P.first),t.iGM(P=t.CRH())&&(v.content=P.first),t.iGM(P=t.CRH())&&(v.fromDataSourceOptions=P)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:xe,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,v){1&c&&(t.F$t(),t.YNc(0,at,9,10,"ng-template"))},directives:[Ge,o.mk,o.PC,Ve.P,o.tP,o.sg],encapsulation:2,data:{animation:[Ne.mF]},changeDetection:0}),(0,B.gn)([(0,A.yF)()],u.prototype,"nzDefaultActiveFirstOption",void 0),(0,B.gn)([(0,A.yF)()],u.prototype,"nzBackfill",void 0),u})(),m=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[H.vT,o.ez,Re.U8,Oe.u5,Pe.T,Ve.g,Ee.o7]]}),u})();var l=r(6949);function k(u,M){1&u&&t._UZ(0,"i",5)}function ie(u,M){if(1&u){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const P=t.oxw();return P.searchQuery="",P.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._uU(5," \xa0 "),t._UZ(6,"span",9),t._UZ(7,"br"),t._UZ(8,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&u){const c=M.$implicit,v=t.oxw();t.xp6(1),t.Q6J("routerLink",v.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",v.urlForResult(c)),t.xp6(2),t.Q6J("nzType",v.iconNameForResult(c)),t.xp6(2),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let ze=(()=>{class u{constructor(c,v){this.gql=c,this.router=v,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,Se.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case _e.rZD.EvidenceItem:return"civic:evidence";case _e.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let v;switch(c.resultType){case _e.rZD.VariantGroup:v="variant-groups";break;case _e.rZD.EvidenceItem:v="evidence";break;default:v=`${c.resultType.toLowerCase()}s`}return`/${v}/${c.id}/summary`}quicksearchSelected(c){let v=c.target.value;this.searchQuery="",this.router.navigate([v])}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(_e.ghc),t.Y36(i.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,v){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(ae){return v.searchQuery=ae})("ngModelChange",function(){return v.refresh()})("keyup.enter",function(ae){return v.quicksearchSelected(ae)}),t.qZA(),t.qZA(),t.YNc(2,k,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,ie,9,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const P=t.MAs(3),ae=t.MAs(5);t.Q6J("nzSuffix",P),t.xp6(1),t.Q6J("ngModel",v.searchQuery)("nzAutocomplete",ae),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,v.searchResults$))}},directives:[Ee.gB,Ee.ke,Ee.Zp,Oe.Fj,a,Oe.JJ,Oe.On,K.Ls,j,o.sg,i.yS,Ge],pipes:[l.fM],styles:[""]}),u})();var Ze=r(1912),Te=r(4850),Fe=r(1059),ke=r(2340),Ye=r(8144),Je=r(6042),He=r(2643),nt=r(2683),Qe=r(3677),je=r(4401),ut=r(7881),Xe=r(3640),f=r(8785);function E(u,M){if(1&u&&(t.TgZ(0,"button",23),t._uU(1," Add "),t._UZ(2,"i",24),t.qZA()),2&u){t.oxw(2);const c=t.MAs(14);t.Q6J("nzDropdownMenu",c)}}const C=function(){return{backgroundColor:"#096dd9",color:"#fff1f0",boxShadow:"0 0 0 1px #1890ff inset"}};function R(u,M){if(1&u&&(t.TgZ(0,"nz-badge",25),t.TgZ(1,"button",26),t._UZ(2,"i",27),t.qZA(),t.qZA()),2&u){const c=t.oxw().ngrxLet,v=t.oxw().ngIf;t.Q6J("nzCount",c)("nzOverflowCount",999)("nzStyle",t.DdM(4,C)),t.xp6(1),t.MGl("routerLink","/users/",v.id,"/notifications")}}const ce=function(u){return{"update-coi":u}};function he(u,M){if(1&u&&t._UZ(0,"cvc-user-avatar",33),2&u){const c=t.oxw(3).ngIf;t.Q6J("user",c)("size",22)("ngClass",t.VKq(3,ce,c.invalidCoi))}}function mt(u,M){if(1&u&&(t.TgZ(0,"div",34),t._uU(1),t.qZA()),2&u){const c=t.oxw(3).ngIf;t.xp6(1),t.Oqu(c.username)}}function Jt(u,M){1&u&&t._UZ(0,"i",24)}function gt(u,M){if(1&u&&(t.TgZ(0,"button",28),t.TgZ(1,"nz-space",29),t.YNc(2,he,1,5,"cvc-user-avatar",30),t.YNc(3,mt,2,1,"div",31),t.YNc(4,Jt,1,0,"i",32),t.qZA(),t.qZA()),2&u){t.oxw(2);const c=t.MAs(3);t.Q6J("nzDropdownMenu",c)}}function ft(u,M){1&u&&(t.TgZ(0,"nz-space",19),t.YNc(1,E,3,1,"button",20),t.YNc(2,R,3,5,"nz-badge",21),t.YNc(3,gt,5,1,"button",22),t.qZA())}function ht(u,M){if(1&u){const c=t.EpF();t.TgZ(0,"li",14),t.TgZ(1,"button",35),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).coiUpdateModalVisible=!0}),t._UZ(2,"i",36),t._uU(3," Please update COI statement "),t.qZA(),t.qZA()}}function vt(u,M){1&u&&t._UZ(0,"li",11)}function zt(u,M){1&u&&(t.TgZ(0,"li",37),t.TgZ(1,"a",38),t._uU(2," Admin Console "),t.qZA(),t.qZA())}const yt=function(u){return["/users",u]};function Ct(u,M){if(1&u){const c=t.EpF();t.ynx(0),t.YNc(1,ft,4,0,"nz-space",4),t.TgZ(2,"nz-dropdown-menu",null,5),t.TgZ(4,"ul",6),t.YNc(5,ht,4,0,"li",7),t.YNc(6,vt,1,0,"li",8),t.TgZ(7,"li",9),t._uU(8," Your Profile "),t.qZA(),t.YNc(9,zt,3,0,"li",10),t._UZ(10,"li",11),t.TgZ(11,"li",12),t.NdJ("click",function(){return t.CHM(c),t.oxw().signOut()}),t._uU(12,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"nz-dropdown-menu",null,13),t.TgZ(15,"ul",6),t.TgZ(16,"li",14),t.TgZ(17,"a",15),t._uU(18," Evidence Item "),t.qZA(),t.qZA(),t.TgZ(19,"li",14),t.TgZ(20,"a",16),t._uU(21," Assertion "),t.qZA(),t.qZA(),t.TgZ(22,"li",14),t.TgZ(23,"a",17),t._uU(24," Source Suggestion "),t.qZA(),t.qZA(),t.TgZ(25,"li",14),t.TgZ(26,"a",18),t._uU(27," Variant Group "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&u){const c=M.ngIf,v=t.oxw();t.xp6(1),t.Q6J("ngrxLet",v.unreadCount$),t.xp6(4),t.Q6J("ngIf",c.invalidCoi),t.xp6(1),t.Q6J("ngIf",c.invalidCoi),t.xp6(1),t.Q6J("routerLink",t.VKq(5,yt,c.id)),t.xp6(2),t.Q6J("ngIf",c.isAdmin)}}function It(u,M){1&u&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function Tt(u,M){if(1&u){const c=t.EpF();t.TgZ(0,"cvc-user-coi-form",39),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let _t=(()=>{class u{constructor(c,v){this.queryService=c,this.unreadCountGql=v,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=ke.N.production?this.unreadCountGql.watch(void 0,{pollInterval:5e3}).valueChanges.pipe((0,Te.U)(({data:P})=>P.notifications.unreadCount),(0,Fe.O)(0)):this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Te.U)(({data:P})=>P.notifications.unreadCount),(0,Fe.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(D.a),t.Y36(_e.Kmw))},u.\u0275cmp=t.Xpm({type:u,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzDirection","horizontal","nzSize","middle",4,"ngrxLet"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",4,"ngIf"],["nz-menu-divider","",4,"ngIf"],["nz-menu-item","",3,"routerLink"],["nz-menu-item","","href","/admin",4,"ngIf"],["nz-menu-divider",""],["nz-menu-item","",3,"click"],["addMenu","nzDropdownMenu"],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["nzDirection","horizontal","nzSize","middle"],["class","add-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"nzCount","nzOverflowCount","nzStyle",4,"nzSpaceItem"],["class","viewer-btn","nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"add-btn",3,"nzDropdownMenu"],["nz-icon","","nzType","caret-down","nzTheme","outline"],[3,"nzCount","nzOverflowCount","nzStyle"],["nz-button","","nzSize","large","nzShape","circle","nzType","link",1,"notification-btn",3,"routerLink"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-button","","nzSize","large","nzShape","round","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"viewer-btn",3,"nzDropdownMenu"],["nzDirection","horizontal","nzSize","small"],["shape","circle",3,"user","size","ngClass",4,"nzSpaceItem"],["class","viewer-name",4,"nzSpaceItem"],["nz-icon","","nzType","caret-down","nzTheme","outline",4,"nzSpaceItem"],["shape","circle",3,"user","size","ngClass"],[1,"viewer-name"],["nz-button","","nzType","primary","nzShape","round","nzSize","small","nzDanger","","nzBlock","",3,"click"],["nz-icon","","nzType","exclamation-circle"],["nz-menu-item","","href","/admin"],["href","/admin"],[3,"coiUpdatedEvent"]],template:function(c,v){if(1&c&&(t.YNc(0,Ct,28,7,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return v.coiUpdateModalVisible=ae})("nzOnCancel",function(){return v.handleCoiModalCancel()}),t.YNc(3,It,2,0,"ng-template",null,2,t.W1O),t.YNc(5,Tt,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const P=t.MAs(4),ae=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,v.viewer$)),t.xp6(2),t.Q6J("nzVisible",v.coiUpdateModalVisible)("nzContent",ae)("nzTitle",P)("nzFooter",null)}},directives:[o.O5,l.eJ,Ye.NU,Ye.$1,Je.ix,He.dQ,nt.w,Qe.wA,Qe.cm,K.Ls,je.x7,i.rH,ut.L,o.mk,Qe.RR,L.wO,L.r9,L.YV,i.yS,Xe.du,f.t],pipes:[l.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}.add-btn[_ngcontent-%COMP%]{margin-right:0;background-color:#001529;border:none;color:#ccc}.notification-btn[_ngcontent-%COMP%]{background-color:#001529;border:1px solid #096dd9}.viewer-btn[_ngcontent-%COMP%]{background-color:#0050b3;border:none;color:#ccc;padding-left:5px;padding-right:10px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]{position:relative;top:-1px;left:1px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar[_ngcontent-%COMP%]     .ant-avatar>img{border-width:1.5px;border-style:solid;border-color:#096dd9;border-radius:22px}.viewer-btn[_ngcontent-%COMP%]   cvc-user-avatar.update-coi[_ngcontent-%COMP%]     .ant-avatar>img{border-color:#f5222d}"]}),u})();function St(u,M){1&u&&t._UZ(0,"img",58)}function Dt(u,M){1&u&&t._UZ(0,"img",59)}function Et(u,M){1&u&&t._UZ(0,"cvc-login-button")}function jt(u,M){1&u&&t._UZ(0,"cvc-viewer-button")}const qe=function(u){return{"is-collapsed":u}},Nt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class u{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(D.a))},u.\u0275cmp=t.Xpm({type:u,selectors:[["cvc-layout"]],decls:124,vars:46,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"ngClass","nzInlineCollapsed"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-event"],["routerLink","/curation/activity"],["nz-icon","","nzType","file-add"],["routerLink","/curation/queues"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-tooltip","","nzTooltipPlacement","rightTop","nzTooltipTitle","By marking the work with a CC0 public domain dedication, the creator is giving up their copyright and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes.",1,"cc-notice",3,"ngClass"],["src","assets/images/CC0-notice-glyph.svg","alt","CC0 1.0 Universal",1,"cc-glyph"],["src","assets/images/CC0-notice-txt.svg","alt","This work has been marked as dedicated to the public domain.",1,"cc-txt"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/welcome"],["routerLink","/pages/about"],["routerLink","/pages/help"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(c,v){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(ae){return v.isCollapsed=ae}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,St,1,0,"img",4),t.YNc(5,Dt,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t.TgZ(8,"ul"),t.TgZ(9,"li",8),t._UZ(10,"i",9),t.TgZ(11,"span"),t.TgZ(12,"a",10),t._uU(13,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"li",8),t._UZ(15,"i",11),t.TgZ(16,"span"),t.TgZ(17,"a",12),t._uU(18,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"li",8),t._UZ(20,"i",13),t.TgZ(21,"span"),t.TgZ(22,"a",14),t._uU(23,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"li",8),t._UZ(25,"i",15),t.TgZ(26,"span"),t.TgZ(27,"a",16),t._uU(28,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"li",8),t._UZ(30,"i",17),t.TgZ(31,"span"),t.TgZ(32,"a",18),t._uU(33,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"li",8),t._UZ(35,"i",19),t.TgZ(36,"span"),t.TgZ(37,"a",20),t._uU(38,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"li",8),t._UZ(40,"i",21),t.TgZ(41,"span"),t.TgZ(42,"a",22),t._uU(43,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"li",8),t._UZ(45,"i",23),t.TgZ(46,"span"),t.TgZ(47,"a",24),t._uU(48,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"li",8),t._UZ(50,"i",25),t.TgZ(51,"span"),t.TgZ(52,"a",26),t._uU(53,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"li",8),t._UZ(55,"i",27),t.TgZ(56,"span"),t.TgZ(57,"a",28),t._uU(58,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"li",8),t._UZ(60,"i",29),t.TgZ(61,"span"),t.TgZ(62,"a",30),t._uU(63,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(64,"li",7),t.TgZ(65,"ul"),t.TgZ(66,"li",8),t._UZ(67,"i",31),t.TgZ(68,"span"),t.TgZ(69,"a",32),t._uU(70," Activity "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"li",8),t._UZ(72,"i",33),t.TgZ(73,"span"),t.TgZ(74,"a",34),t._uU(75,"Queues"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"li",7),t.TgZ(77,"ul"),t.TgZ(78,"li",8),t._UZ(79,"i",35),t.TgZ(80,"span"),t.TgZ(81,"a",36),t._uU(82,"Contributors"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(83,"li",8),t._UZ(84,"i",37),t.TgZ(85,"span"),t.TgZ(86,"a",38),t._uU(87,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(88,"li",7),t.TgZ(89,"ul"),t.TgZ(90,"li",8),t._UZ(91,"i",39),t.TgZ(92,"span"),t.TgZ(93,"a",40),t._uU(94,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"div",41),t._UZ(96,"img",42),t._UZ(97,"img",43),t.qZA(),t.qZA(),t.TgZ(98,"nz-layout",44),t.TgZ(99,"nz-header"),t.TgZ(100,"div",45),t.TgZ(101,"div",46),t.TgZ(102,"span",47),t.NdJ("click",function(){return v.isCollapsed=!v.isCollapsed}),t._UZ(103,"i",48),t.qZA(),t.qZA(),t.TgZ(104,"div",49),t._UZ(105,"cvc-quicksearch"),t.qZA(),t.TgZ(106,"div",50),t.TgZ(107,"ul",51),t.TgZ(108,"li",52),t.TgZ(109,"a",53),t._uU(110,"Home"),t.qZA(),t.qZA(),t.TgZ(111,"li",52),t.TgZ(112,"a",54),t._uU(113,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(114,"li",52),t.TgZ(115,"a",55),t._uU(116,"Help"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(117,"div",56),t.YNc(118,Et,1,0,"cvc-login-button",57),t.ALo(119,"async"),t.YNc(120,jt,1,0,"cvc-viewer-button",57),t.ALo(121,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(122,"nz-content"),t._UZ(123,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",v.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(38,qe,v.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!v.isCollapsed),t.xp6(1),t.Q6J("ngIf",v.isCollapsed),t.xp6(1),t.Q6J("ngClass",t.VKq(40,qe,v.isCollapsed))("nzInlineCollapsed",v.isCollapsed),t.xp6(1),t.Q6J("nzTitle",v.isCollapsed?"KNOW":"KNOWLEDGEBASE"),t.xp6(2),t.Q6J("nzTooltipTitle",v.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Variant Groups":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzTitle",v.isCollapsed?"CURATE":"CURATION"),t.xp6(2),t.Q6J("nzTooltipTitle",v.isCollapsed?"Activity":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Pending Queues":""),t.xp6(5),t.Q6J("nzTitle",v.isCollapsed?"COMM":"COMMUNITY"),t.xp6(2),t.Q6J("nzTooltipTitle",v.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",v.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzTitle",v.isCollapsed?"RES":"RESOURCES"),t.xp6(2),t.Q6J("nzTooltipTitle",v.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("ngClass",t.VKq(42,qe,v.isCollapsed)),t.xp6(3),t.Q6J("ngClass",t.VKq(44,qe,v.isCollapsed)),t.xp6(5),t.Q6J("nzType",v.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(119,34,v.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(121,36,v.signedIn$)))},directives:[w,g,i.yS,o.mk,o.O5,L.wO,L.uA,L.r9,Q.SY,K.Ls,W,ye.SK,ye.t3,ze,Ze.s,_t,pe,i.lC],pipes:[o.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-20px}.sidebar-menu[_ngcontent-%COMP%]     .ant-menu-item-group-title{padding-bottom:0}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]{margin-top:-8px}.sidebar-menu.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title{text-align:center}.cc-notice[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:170px}.cc-notice[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:56px}.cc-notice[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{width:76px}.cc-notice.is-collapsed[_ngcontent-%COMP%]{width:80px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-glyph[_ngcontent-%COMP%]{width:35px}.cc-notice.is-collapsed[_ngcontent-%COMP%]   .cc-txt[_ngcontent-%COMP%]{display:none}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),u})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(1679),r.e(305),r.e(3883),r.e(6875),r.e(2033),r.e(3730),r.e(8592),r.e(9020)]).then(r.bind(r,136)).then(u=>u.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(305),r.e(7717),r.e(6519)]).then(r.bind(r,1838)).then(u=>u.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(3883),r.e(2395)]).then(r.bind(r,233)).then(u=>u.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(3883),r.e(8422)]).then(r.bind(r,1592)).then(u=>u.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(305),r.e(1457)]).then(r.bind(r,7727)).then(u=>u.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"genes",loadChildren:()=>Promise.all([r.e(7064),r.e(3501),r.e(5193),r.e(9890),r.e(392),r.e(681)]).then(r.bind(r,681)).then(u=>u.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(2738),r.e(55),r.e(4292),r.e(3883),r.e(392),r.e(9484),r.e(376),r.e(3074),r.e(8592),r.e(3073)]).then(r.bind(r,3073)).then(u=>u.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(3883),r.e(4721)]).then(r.bind(r,1076)).then(u=>u.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"sources",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(1679),r.e(305),r.e(2738),r.e(55),r.e(6875),r.e(2043),r.e(9484),r.e(2033),r.e(7717),r.e(8592),r.e(3648)]).then(r.bind(r,359)).then(u=>u.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(2738),r.e(55),r.e(3883),r.e(9484),r.e(4276)]).then(r.bind(r,7563)).then(u=>u.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(5193),r.e(9890),r.e(9001),r.e(2826),r.e(305),r.e(2738),r.e(55),r.e(4292),r.e(3883),r.e(9484),r.e(376),r.e(3074),r.e(3218)]).then(r.bind(r,3218)).then(u=>u.UsersModule),data:{breadcrumb:"Contributors"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(7064),r.e(6256),r.e(3501),r.e(9890),r.e(79)]).then(r.bind(r,79)).then(u=>u.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(7064),r.e(3501),r.e(5193),r.e(9890),r.e(392),r.e(1750),r.e(4658)]).then(r.bind(r,9221)).then(u=>u.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(7064),r.e(3501),r.e(5193),r.e(9890),r.e(392),r.e(1750),r.e(4729)]).then(r.bind(r,1875)).then(u=>u.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(2826),r.e(2738),r.e(4292),r.e(376),r.e(6303)]).then(r.bind(r,6528)).then(u=>u.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"releases",loadChildren:()=>Promise.all([r.e(7064),r.e(9890),r.e(4579)]).then(r.bind(r,4579)).then(u=>u.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([r.e(7064),r.e(4038)]).then(r.bind(r,4038)).then(u=>u.PagesModule),data:{breadcrumb:"Pages"}}]}];let At=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[i.Bz.forChild(Nt)],i.Bz]}),u})();var Ot=r(3618),Mt=r(5109),Lt=r(4546);let xt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[o.ez,Oe.u5,i.Bz,l.WG,Ee.o7,Lt.U5,K.PV,m]]}),u})();var Ft=r(1844),bt=r(5473),Vt=r(330);let Zt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[o.ez,l.WG,Qe.b1,i.Bz,Je.sL,Ye.zf,K.PV,je.mS,Q.cg,Xe.Qp,bt.H,Vt.e]]}),u})(),kt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[o.ez,At,K.PV,ye.Jb,O,L.ip,Q.cg,Ot.ZJ,Mt.s,Ft.B,Zt,xt]]}),u})()},6792:(De,re,r)=>{r.d(re,{g:()=>F});var o=r(353),t=r(3489),D=r(9312);function F(A,L=o.P){const K=function i(A){return A instanceof Date&&!isNaN(+A)}(A)?+A-L.now():Math.abs(A);return H=>H.lift(new Z(K,L))}class Z{constructor(L,G){this.delay=L,this.scheduler=G}call(L,G){return G.subscribe(new B(L,this.delay,this.scheduler))}}class B extends t.L{constructor(L,G,K){super(L),this.delay=G,this.scheduler=K,this.queue=[],this.active=!1,this.errored=!1}static dispatch(L){const G=L.source,K=G.queue,H=L.scheduler,le=L.destination;for(;K.length>0&&K[0].time-H.now()<=0;)K.shift().notification.observe(le);if(K.length>0){const te=Math.max(0,K[0].time-H.now());this.schedule(L,te)}else this.unsubscribe(),G.active=!1}_schedule(L){this.active=!0,this.destination.add(L.schedule(B.dispatch,this.delay,{source:this,destination:this.destination,scheduler:L}))}scheduleNotification(L){if(!0===this.errored)return;const G=this.scheduler,K=new q(G.now()+this.delay,L);this.queue.push(K),!1===this.active&&this._schedule(G)}_next(L){this.scheduleNotification(D.P.createNext(L))}_error(L){this.errored=!0,this.queue=[],this.destination.error(L),this.unsubscribe()}_complete(){this.scheduleNotification(D.P.createComplete()),this.unsubscribe()}}class q{constructor(L,G){this.time=L,this.notification=G}}},373:(De,re,r)=>{r.d(re,{j:()=>i});var o=r(4850);function i(...D){const F=D.length;if(0===F)throw new Error("list of properties cannot be empty.");return Z=>(0,o.U)(function t(D,F){return B=>{let q=B;for(let A=0;A<F;A++){const L=null!=q?q[D[A]]:void 0;if(void 0===L)return;q=L}return q}}(D,F))(Z)}},6699:(De,re,r)=>{r.d(re,{Dz:()=>te,Rt:()=>oe});var o=r(655),i=r(5e3),t=r(9439),D=r(1721),F=r(925),Z=r(9808),B=r(647),q=r(226);const A=["textEl"];function L(V,b){if(1&V&&i._UZ(0,"i",3),2&V){const I=i.oxw();i.Q6J("nzType",I.nzIcon)}}function G(V,b){if(1&V){const I=i.EpF();i.TgZ(0,"img",4),i.NdJ("error",function(ne){return i.CHM(I),i.oxw().imgError(ne)}),i.qZA()}if(2&V){const I=i.oxw();i.Q6J("src",I.nzSrc,i.LSH),i.uIk("srcset",I.nzSrcSet,i.LSH)("alt",I.nzAlt)}}function K(V,b){if(1&V&&(i.TgZ(0,"span",5,6),i._uU(2),i.qZA()),2&V){const I=i.oxw();i.Q6J("ngStyle",I.textStyles),i.xp6(2),i.Oqu(I.nzText)}}let te=(()=>{class V{constructor(I,$,ne,X){this.nzConfigService=I,this.elementRef=$,this.cdr=ne,this.platform=X,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new i.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,$=this.el.getBoundingClientRect().width,ne=2*this.nzGap<$?2*this.nzGap:8;this.textStyles={transform:`scale(${$-ne<I?($-ne)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(I){return new(I||V)(i.Y36(t.jY),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(F.t4))},V.\u0275cmp=i.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(I,$){if(1&I&&i.Gf(A,5),2&I){let ne;i.iGM(ne=i.CRH())&&($.textEl=ne.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,$){2&I&&(i.Udp("width",$.customSize)("height",$.customSize)("line-height",$.customSize)("font-size",$.hasIcon&&$.customSize?$.nzSize/2:null,"px"),i.ekj("ant-avatar-lg","large"===$.nzSize)("ant-avatar-sm","small"===$.nzSize)("ant-avatar-square","square"===$.nzShape)("ant-avatar-circle","circle"===$.nzShape)("ant-avatar-icon",$.nzIcon)("ant-avatar-image",$.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[i.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,$){1&I&&(i.YNc(0,L,1,1,"i",0),i.YNc(1,G,1,3,"img",1),i.YNc(2,K,3,2,"span",2)),2&I&&(i.Q6J("ngIf",$.nzIcon&&$.hasIcon),i.xp6(1),i.Q6J("ngIf",$.nzSrc&&$.hasSrc),i.xp6(1),i.Q6J("ngIf",$.nzText&&$.hasText))},directives:[Z.O5,B.Ls,Z.PC],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,t.oS)()],V.prototype,"nzShape",void 0),(0,o.gn)([(0,t.oS)()],V.prototype,"nzSize",void 0),(0,o.gn)([(0,t.oS)(),(0,D.Rn)()],V.prototype,"nzGap",void 0),V})(),oe=(()=>{class V{}return V.\u0275fac=function(I){return new(I||V)},V.\u0275mod=i.oAB({type:V}),V.\u0275inj=i.cJS({imports:[[q.vT,Z.ez,B.PV,F.ud]]}),V})()},4401:(De,re,r)=>{r.d(re,{x7:()=>ue,mS:()=>Y,F9:()=>W});var o=r(655),i=r(5e3),t=r(8929),D=r(7625),F=r(8076),Z=r(9439),B=r(1721),q=r(226),A=r(4832),L=r(9808),G=r(969),K=r(7144);function H(g,w){if(1&g&&(i.TgZ(0,"p",6),i._uU(1),i.qZA()),2&g){const O=w.$implicit,Q=i.oxw(2).index,ye=i.oxw(2);i.ekj("current",O===ye.countArray[Q]),i.xp6(1),i.hij(" ",O," ")}}function le(g,w){if(1&g&&(i.ynx(0),i.YNc(1,H,2,3,"p",5),i.BQk()),2&g){const O=i.oxw(3);i.xp6(1),i.Q6J("ngForOf",O.countSingleArray)}}function te(g,w){if(1&g&&(i.TgZ(0,"span",3),i.YNc(1,le,2,1,"ng-container",4),i.qZA()),2&g){const O=w.index,Q=i.oxw(2);i.Udp("transform","translateY("+100*-Q.countArray[O]+"%)"),i.Q6J("nzNoAnimation",Q.noAnimation),i.xp6(1),i.Q6J("ngIf",!Q.nzDot&&void 0!==Q.countArray[O])}}function se(g,w){if(1&g&&(i.ynx(0),i.YNc(1,te,2,4,"span",2),i.BQk()),2&g){const O=i.oxw();i.xp6(1),i.Q6J("ngForOf",O.maxNumberArray)}}function oe(g,w){if(1&g&&i._uU(0),2&g){const O=i.oxw();i.hij("",O.nzOverflowCount,"+")}}function V(g,w){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const O=i.oxw(2);i.xp6(1),i.Oqu(O.nzText)}}function b(g,w){if(1&g&&(i.ynx(0),i._UZ(1,"span",2),i.TgZ(2,"span",3),i.YNc(3,V,2,1,"ng-container",1),i.qZA(),i.BQk()),2&g){const O=i.oxw();i.xp6(1),i.Gre("ant-badge-status-dot ant-badge-status-",O.nzStatus||O.presetColor,""),i.Udp("background",!O.presetColor&&O.nzColor),i.Q6J("ngStyle",O.nzStyle),i.xp6(2),i.Q6J("nzStringTemplateOutlet",O.nzText)}}function I(g,w){if(1&g&&i._UZ(0,"nz-badge-sup",5),2&g){const O=i.oxw(2);i.Q6J("nzOffset",O.nzOffset)("nzTitle",O.nzTitle)("nzStyle",O.nzStyle)("nzDot",O.nzDot)("nzOverflowCount",O.nzOverflowCount)("disableAnimation",!!(O.nzStandalone||O.nzStatus||O.nzColor||null!=O.noAnimation&&O.noAnimation.nzNoAnimation))("nzCount",O.nzCount)("noAnimation",!(null==O.noAnimation||!O.noAnimation.nzNoAnimation))}}function $(g,w){if(1&g&&(i.ynx(0),i.YNc(1,I,1,8,"nz-badge-sup",4),i.BQk()),2&g){const O=i.oxw();i.xp6(1),i.Q6J("ngIf",O.showSup)}}const ne=["*"];function X(g,w){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const O=i.oxw();i.xp6(1),i.Oqu(O.nzText)}}const de=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let fe=(()=>{class g{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(O){const{nzOverflowCount:Q,nzCount:ye}=O;ye&&"number"==typeof ye.currentValue&&(this.count=Math.max(0,ye.currentValue),this.countArray=this.count.toString().split("").map(_e=>+_e)),Q&&this.generateMaxNumberArray()}}return g.\u0275fac=function(O){return new(O||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(O,Q){2&O&&(i.uIk("title",null===Q.nzTitle?"":Q.nzTitle||Q.nzCount),i.d8E("@.disabled",Q.disableAnimation)("@zoomBadgeMotion",void 0),i.Akn(Q.nzStyle),i.Udp("right",Q.nzOffset&&Q.nzOffset[0]?-Q.nzOffset[0]:null,"px")("margin-top",Q.nzOffset&&Q.nzOffset[1]?Q.nzOffset[1]:null,"px"),i.ekj("ant-badge-count",!Q.nzDot)("ant-badge-dot",Q.nzDot)("ant-badge-multiple-words",Q.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[i.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(O,Q){if(1&O&&(i.YNc(0,se,2,1,"ng-container",0),i.YNc(1,oe,1,1,"ng-template",null,1,i.W1O)),2&O){const ye=i.MAs(2);i.Q6J("ngIf",Q.count<=Q.nzOverflowCount)("ngIfElse",ye)}},directives:[L.O5,L.sg,A.P],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),g})(),ue=(()=>{class g{constructor(O,Q,ye,_e,Se,Ee){this.nzConfigService=O,this.renderer=Q,this.cdr=ye,this.elementRef=_e,this.directionality=Se,this.noAnimation=Ee,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var O;null===(O=this.directionality.change)||void 0===O||O.pipe((0,D.R)(this.destroy$)).subscribe(Q=>{this.dir=Q,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(O){const{nzColor:Q,nzShowDot:ye,nzDot:_e,nzCount:Se,nzShowZero:Ee}=O;Q&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null),(ye||_e||Se||Ee)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(O){return new(O||g)(i.Y36(Z.jY),i.Y36(i.Qsj),i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(q.Is,8),i.Y36(A.P,9))},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(O,Q){2&O&&i.ekj("ant-badge-status",Q.nzStatus)("ant-badge-not-a-wrapper",!!(Q.nzStandalone||Q.nzStatus||Q.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[i.TTD],ngContentSelectors:ne,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(O,Q){1&O&&(i.F$t(),i.YNc(0,b,4,7,"ng-container",0),i.Hsn(1),i.YNc(2,$,2,1,"ng-container",1)),2&O&&(i.Q6J("ngIf",Q.nzStatus||Q.nzColor),i.xp6(2),i.Q6J("nzStringTemplateOutlet",Q.nzCount))},directives:[fe,L.O5,L.PC,G.f],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),(0,o.gn)([(0,B.yF)()],g.prototype,"nzShowZero",void 0),(0,o.gn)([(0,B.yF)()],g.prototype,"nzShowDot",void 0),(0,o.gn)([(0,B.yF)()],g.prototype,"nzStandalone",void 0),(0,o.gn)([(0,B.yF)()],g.prototype,"nzDot",void 0),(0,o.gn)([(0,Z.oS)()],g.prototype,"nzOverflowCount",void 0),(0,o.gn)([(0,Z.oS)()],g.prototype,"nzColor",void 0),g})(),W=(()=>{class g{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(O){const{nzColor:Q}=O;Q&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null)}}return g.\u0275fac=function(O){return new(O||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[i.TTD],ngContentSelectors:ne,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(O,Q){1&O&&(i.F$t(),i.Hsn(0),i.TgZ(1,"div",0),i.YNc(2,X,2,1,"ng-container",1),i._UZ(3,"div",2),i.qZA()),2&O&&(i.xp6(1),i.Tol(Q.presetColor&&"ant-ribbon-color-"+Q.presetColor),i.Udp("background-color",!Q.presetColor&&Q.nzColor),i.ekj("ant-ribbon-placement-end","end"===Q.nzPlacement)("ant-ribbon-placement-start","start"===Q.nzPlacement),i.xp6(1),i.Q6J("nzStringTemplateOutlet",Q.nzText),i.xp6(1),i.Udp("color",!Q.presetColor&&Q.nzColor))},directives:[G.f],encapsulation:2,changeDetection:0}),g})(),Y=(()=>{class g{}return g.\u0275fac=function(O){return new(O||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[q.vT,L.ez,K.Q8,G.T,A.g]]}),g})()},7484:(De,re,r)=>{r.d(re,{bd:()=>Re,vh:()=>Pe,_i:()=>Se});var o=r(655),i=r(5e3),t=r(1721),D=r(8929),F=r(7625),Z=r(9439),B=r(226),q=r(9808),A=r(969);function L(N,ee){1&N&&i.Hsn(0)}const G=["*"];function K(N,ee){1&N&&(i.TgZ(0,"div",4),i._UZ(1,"div",5),i.qZA()),2&N&&i.Q6J("ngClass",ee.$implicit)}function H(N,ee){if(1&N&&(i.TgZ(0,"div",2),i.YNc(1,K,2,1,"div",3),i.qZA()),2&N){const _=ee.$implicit;i.xp6(1),i.Q6J("ngForOf",_)}}function le(N,ee){if(1&N&&(i.ynx(0),i._uU(1),i.BQk()),2&N){const _=i.oxw(3);i.xp6(1),i.Oqu(_.nzTitle)}}function te(N,ee){if(1&N&&(i.TgZ(0,"div",11),i.YNc(1,le,2,1,"ng-container",12),i.qZA()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",_.nzTitle)}}function se(N,ee){if(1&N&&(i.ynx(0),i._uU(1),i.BQk()),2&N){const _=i.oxw(3);i.xp6(1),i.Oqu(_.nzExtra)}}function oe(N,ee){if(1&N&&(i.TgZ(0,"div",13),i.YNc(1,se,2,1,"ng-container",12),i.qZA()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",_.nzExtra)}}function V(N,ee){}function b(N,ee){if(1&N&&(i.ynx(0),i.YNc(1,V,0,0,"ng-template",14),i.BQk()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",_.listOfNzCardTabComponent.template)}}function I(N,ee){if(1&N&&(i.TgZ(0,"div",6),i.TgZ(1,"div",7),i.YNc(2,te,2,1,"div",8),i.YNc(3,oe,2,1,"div",9),i.qZA(),i.YNc(4,b,2,1,"ng-container",10),i.qZA()),2&N){const _=i.oxw();i.xp6(2),i.Q6J("ngIf",_.nzTitle),i.xp6(1),i.Q6J("ngIf",_.nzExtra),i.xp6(1),i.Q6J("ngIf",_.listOfNzCardTabComponent)}}function $(N,ee){}function ne(N,ee){if(1&N&&(i.TgZ(0,"div",15),i.YNc(1,$,0,0,"ng-template",14),i.qZA()),2&N){const _=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",_.nzCover)}}function X(N,ee){1&N&&(i.ynx(0),i.Hsn(1),i.BQk())}function de(N,ee){1&N&&i._UZ(0,"nz-card-loading")}function fe(N,ee){}function pe(N,ee){if(1&N&&(i.TgZ(0,"li"),i.TgZ(1,"span"),i.YNc(2,fe,0,0,"ng-template",14),i.qZA(),i.qZA()),2&N){const _=ee.$implicit,J=i.oxw(2);i.Udp("width",100/J.nzActions.length,"%"),i.xp6(2),i.Q6J("ngTemplateOutlet",_)}}function ue(N,ee){if(1&N&&(i.TgZ(0,"ul",16),i.YNc(1,pe,3,3,"li",17),i.qZA()),2&N){const _=i.oxw();i.xp6(1),i.Q6J("ngForOf",_.nzActions)}}let _e=(()=>{class N{constructor(){this.nzHoverable=!0}}return N.\u0275fac=function(_){return new(_||N)},N.\u0275dir=i.lG2({type:N,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(_,J){2&_&&i.ekj("ant-card-hoverable",J.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,o.gn)([(0,t.yF)()],N.prototype,"nzHoverable",void 0),N})(),Se=(()=>{class N{}return N.\u0275fac=function(_){return new(_||N)},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card-tab"]],viewQuery:function(_,J){if(1&_&&i.Gf(i.Rgc,7),2&_){let U;i.iGM(U=i.CRH())&&(J.template=U.first)}},exportAs:["nzCardTab"],ngContentSelectors:G,decls:1,vars:0,template:function(_,J){1&_&&(i.F$t(),i.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),N})(),Ee=(()=>{class N{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return N.\u0275fac=function(_){return new(_||N)},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(_,J){1&_&&(i.TgZ(0,"div",0),i.YNc(1,H,2,1,"div",1),i.qZA()),2&_&&(i.xp6(1),i.Q6J("ngForOf",J.listOfLoading))},directives:[q.sg,q.mk],encapsulation:2,changeDetection:0}),N})(),Re=(()=>{class N{constructor(_,J,U){this.nzConfigService=_,this.cdr=J,this.directionality=U,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new D.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,F.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var _;null===(_=this.directionality.change)||void 0===_||_.pipe((0,F.R)(this.destroy$)).subscribe(J=>{this.dir=J,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(_){return new(_||N)(i.Y36(Z.jY),i.Y36(i.sBO),i.Y36(B.Is,8))},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card"]],contentQueries:function(_,J,U){if(1&_&&(i.Suo(U,Se,5),i.Suo(U,_e,4)),2&_){let ge;i.iGM(ge=i.CRH())&&(J.listOfNzCardTabComponent=ge.first),i.iGM(ge=i.CRH())&&(J.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(_,J){2&_&&i.ekj("ant-card-loading",J.nzLoading)("ant-card-bordered",!1===J.nzBorderless&&J.nzBordered)("ant-card-hoverable",J.nzHoverable)("ant-card-small","small"===J.nzSize)("ant-card-contain-grid",J.listOfNzCardGridDirective&&J.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===J.nzType)("ant-card-contain-tabs",!!J.listOfNzCardTabComponent)("ant-card-rtl","rtl"===J.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:G,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(_,J){if(1&_&&(i.F$t(),i.YNc(0,I,5,3,"div",0),i.YNc(1,ne,2,1,"div",1),i.TgZ(2,"div",2),i.YNc(3,X,2,0,"ng-container",3),i.YNc(4,de,1,0,"ng-template",null,4,i.W1O),i.qZA(),i.YNc(6,ue,2,1,"ul",5)),2&_){const U=i.MAs(5);i.Q6J("ngIf",J.nzTitle||J.nzExtra||J.listOfNzCardTabComponent),i.xp6(1),i.Q6J("ngIf",J.nzCover),i.xp6(1),i.Q6J("ngStyle",J.nzBodyStyle),i.xp6(1),i.Q6J("ngIf",!J.nzLoading)("ngIfElse",U),i.xp6(3),i.Q6J("ngIf",J.nzActions.length)}},directives:[Ee,q.O5,A.f,q.tP,q.PC,q.sg],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBordered",void 0),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBorderless",void 0),(0,o.gn)([(0,t.yF)()],N.prototype,"nzLoading",void 0),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzHoverable",void 0),(0,o.gn)([(0,Z.oS)()],N.prototype,"nzSize",void 0),N})(),Pe=(()=>{class N{}return N.\u0275fac=function(_){return new(_||N)},N.\u0275mod=i.oAB({type:N}),N.\u0275inj=i.cJS({imports:[[q.ez,A.T],B.vT]}),N})()},3677:(De,re,r)=>{r.d(re,{cm:()=>Se,b1:()=>Pe,wA:()=>Re,RR:()=>Ve});var o=r(655),i=r(1159),t=r(7429),D=r(5e3),F=r(8929),Z=r(591),B=r(6787),q=r(3753),A=r(8896),L=r(3426),G=r(7604),K=r(4850),H=r(7545),le=r(2198),te=r(7138),se=r(5778),oe=r(7625),V=r(9439),b=r(6950),I=r(1721),$=r(2845),ne=r(925),X=r(226),de=r(9808),fe=r(4182),pe=r(6042),ue=r(4832),W=r(969),Y=r(647),g=r(4219),w=r(8076);function O(_,J){if(1&_){const U=D.EpF();D.TgZ(0,"div",0),D.NdJ("@slideMotion.done",function(Ce){return D.CHM(U),D.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return D.CHM(U),D.oxw().setMouseState(!0)})("mouseleave",function(){return D.CHM(U),D.oxw().setMouseState(!1)}),D.Hsn(1),D.qZA()}if(2&_){const U=D.oxw();D.ekj("ant-dropdown-rtl","rtl"===U.dir),D.Q6J("ngClass",U.nzOverlayClassName)("ngStyle",U.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==U.noAnimation?null:U.noAnimation.nzNoAnimation)("nzNoAnimation",null==U.noAnimation?null:U.noAnimation.nzNoAnimation)}}const Q=["*"],_e=[b.yW.bottomLeft,b.yW.bottomRight,b.yW.topRight,b.yW.topLeft];let Se=(()=>{class _{constructor(U,ge,Ce,Ae,Me,Ie){this.nzConfigService=U,this.elementRef=ge,this.overlay=Ce,this.renderer=Ae,this.viewContainerRef=Me,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new F.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new Z.X(!1),this.nzTrigger$=new Z.X("hover"),this.overlayClose$=new F.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new D.vpe}setDropdownMenuValue(U,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(U,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const U=this.elementRef.nativeElement,ge=(0,B.T)((0,q.R)(U,"mouseenter").pipe((0,G.h)(!0)),(0,q.R)(U,"mouseleave").pipe((0,G.h)(!1))),Ae=(0,B.T)(this.nzDropdownMenu.mouseState$,ge),Me=(0,q.R)(U,"click").pipe((0,K.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,H.w)(ve=>"hover"===ve?Ae:"click"===ve?Me:A.E)),Le=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,le.h)(()=>this.nzClickHide),(0,G.h)(!1)),Ne=(0,B.T)(Ie,Le,this.overlayClose$).pipe((0,le.h)(()=>!this.nzDisabled)),Be=(0,B.T)(this.inputVisible$,Ne);(0,L.aj)([Be,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,K.U)(([ve,Ue])=>ve||Ue),(0,te.e)(150),(0,se.x)(),(0,le.h)(()=>this.platform.isBrowser),(0,oe.R)(this.destroy$)).subscribe(ve=>{const xe=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:U).getBoundingClientRect().width;this.nzVisible!==ve&&this.nzVisibleChange.emit(ve),this.nzVisible=ve,ve?(this.overlayRef?this.overlayRef.getConfig().minWidth=xe:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:xe,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,B.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,le.h)($e=>!this.elementRef.nativeElement.contains($e.target))),this.overlayRef.keydownEvents().pipe((0,le.h)($e=>$e.keyCode===i.hY&&!(0,i.Vb)($e)))).pipe((0,oe.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([b.yW[this.nzPlacement],..._e]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,oe.R)(this.destroy$)).subscribe(ve=>{"void"===ve.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(U){const{nzVisible:ge,nzDisabled:Ce,nzOverlayClassName:Ae,nzOverlayStyle:Me,nzTrigger:Ie}=U;if(Ie&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),Ce){const Le=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Le,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Le,"disabled")}Ae&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Me&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return _.\u0275fac=function(U){return new(U||_)(D.Y36(V.jY),D.Y36(D.SBq),D.Y36($.aV),D.Y36(D.Qsj),D.Y36(D.s_b),D.Y36(ne.t4))},_.\u0275dir=D.lG2({type:_,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[D.TTD]}),(0,o.gn)([(0,V.oS)(),(0,I.yF)()],_.prototype,"nzBackdrop",void 0),(0,o.gn)([(0,I.yF)()],_.prototype,"nzClickHide",void 0),(0,o.gn)([(0,I.yF)()],_.prototype,"nzDisabled",void 0),(0,o.gn)([(0,I.yF)()],_.prototype,"nzVisible",void 0),_})(),Ee=(()=>{class _{}return _.\u0275fac=function(U){return new(U||_)},_.\u0275mod=D.oAB({type:_}),_.\u0275inj=D.cJS({}),_})(),Re=(()=>{class _{constructor(U,ge,Ce){this.renderer=U,this.nzButtonGroupComponent=ge,this.elementRef=Ce}ngAfterViewInit(){const U=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&U&&this.renderer.addClass(U,"ant-dropdown-button")}}return _.\u0275fac=function(U){return new(U||_)(D.Y36(D.Qsj),D.Y36(pe.fY,9),D.Y36(D.SBq))},_.\u0275dir=D.lG2({type:_,selectors:[["","nz-button","","nz-dropdown",""]]}),_})(),Ve=(()=>{class _{constructor(U,ge,Ce,Ae,Me,Ie,Le){this.cdr=U,this.elementRef=ge,this.renderer=Ce,this.viewContainerRef=Ae,this.nzMenuService=Me,this.directionality=Ie,this.noAnimation=Le,this.mouseState$=new Z.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new D.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new F.xQ}onAnimationEvent(U){this.animationStateChange$.emit(U)}setMouseState(U){this.mouseState$.next(U)}setValue(U,ge){this[U]=ge,this.cdr.markForCheck()}ngOnInit(){var U;null===(U=this.directionality.change)||void 0===U||U.pipe((0,oe.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return _.\u0275fac=function(U){return new(U||_)(D.Y36(D.sBO),D.Y36(D.SBq),D.Y36(D.Qsj),D.Y36(D.s_b),D.Y36(g.hl),D.Y36(X.Is,8),D.Y36(ue.P,9))},_.\u0275cmp=D.Xpm({type:_,selectors:[["nz-dropdown-menu"]],viewQuery:function(U,ge){if(1&U&&D.Gf(D.Rgc,7),2&U){let Ce;D.iGM(Ce=D.CRH())&&(ge.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[D._Bn([g.hl,{provide:g.Cc,useValue:!0}])],ngContentSelectors:Q,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(U,ge){1&U&&(D.F$t(),D.YNc(0,O,2,7,"ng-template"))},directives:[de.mk,de.PC,ue.P],encapsulation:2,data:{animation:[w.mF]},changeDetection:0}),_})(),Pe=(()=>{class _{}return _.\u0275fac=function(U){return new(U||_)},_.\u0275mod=D.oAB({type:_}),_.\u0275inj=D.cJS({imports:[[X.vT,de.ez,$.U8,fe.u5,pe.sL,g.ip,Y.PV,ue.g,ne.ud,b.e4,Ee,W.T],g.ip]}),_})();new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new $.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new $.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(De,re,r)=>{r.d(re,{n_:()=>Qe,I2:()=>Fe,t4:()=>ke,AA:()=>je,yw:()=>ze,yi:()=>ie,IO:()=>m,Ph:()=>Xe});var o=r(5e3),i=r(6699),t=r(9808),D=r(969),F=r(655),Z=r(1721),B=r(8929),q=r(8514),A=r(1086),L=r(6787),G=r(591),K=r(2986),H=r(7545),le=r(7625),te=r(685),se=r(226),oe=r(7525),V=r(1894);const b=["*"];function I(f,E){if(1&f&&o._UZ(0,"nz-avatar",3),2&f){const C=o.oxw();o.Q6J("nzSrc",C.nzSrc)}}function $(f,E){1&f&&o.Hsn(0,0,["*ngIf","!nzSrc"])}function ne(f,E){if(1&f&&o._UZ(0,"nz-list-item-meta-avatar",3),2&f){const C=o.oxw();o.Q6J("nzSrc",C.avatarStr)}}function X(f,E){if(1&f&&(o.TgZ(0,"nz-list-item-meta-avatar"),o.GkF(1,4),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",C.avatarTpl)}}function de(f,E){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzTitle)}}function fe(f,E){if(1&f&&(o.TgZ(0,"nz-list-item-meta-title"),o.YNc(1,de,2,1,"ng-container",6),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzTitle)}}function pe(f,E){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzDescription)}}function ue(f,E){if(1&f&&(o.TgZ(0,"nz-list-item-meta-description"),o.YNc(1,pe,2,1,"ng-container",6),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzDescription)}}function W(f,E){if(1&f&&(o.TgZ(0,"div",5),o.YNc(1,fe,2,1,"nz-list-item-meta-title",1),o.YNc(2,ue,2,1,"nz-list-item-meta-description",1),o.Hsn(3,1),o.Hsn(4,2),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngIf",C.nzTitle&&!C.titleComponent),o.xp6(1),o.Q6J("ngIf",C.nzDescription&&!C.descriptionComponent)}}const Y=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],g=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function w(f,E){1&f&&o.Hsn(0)}const O=["nz-list-item-actions",""];function Q(f,E){}function ye(f,E){1&f&&o._UZ(0,"em",3)}function _e(f,E){if(1&f&&(o.TgZ(0,"li"),o.YNc(1,Q,0,0,"ng-template",1),o.YNc(2,ye,1,0,"em",2),o.qZA()),2&f){const C=E.$implicit,R=E.last;o.xp6(1),o.Q6J("ngTemplateOutlet",C),o.xp6(1),o.Q6J("ngIf",!R)}}function Se(f,E){}const Ee=function(f,E){return{$implicit:f,index:E}};function Oe(f,E){if(1&f&&(o.ynx(0),o.YNc(1,Se,0,0,"ng-template",9),o.BQk()),2&f){const C=E.$implicit,R=E.index,ce=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",o.WLB(2,Ee,C,R))}}function Re(f,E){if(1&f&&(o.TgZ(0,"div",7),o.YNc(1,Oe,2,5,"ng-container",8),o.Hsn(2,4),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngForOf",C.nzDataSource)}}function Ve(f,E){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Oqu(C.nzHeader)}}function Pe(f,E){if(1&f&&(o.TgZ(0,"nz-list-header"),o.YNc(1,Ve,2,1,"ng-container",10),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function N(f,E){1&f&&o._UZ(0,"div"),2&f&&o.Udp("min-height",53,"px")}function ee(f,E){}function _(f,E){if(1&f&&(o.TgZ(0,"div",13),o.YNc(1,ee,0,0,"ng-template",9),o.qZA()),2&f){const C=E.$implicit,R=E.index,ce=o.oxw(2);o.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),o.xp6(1),o.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",o.WLB(9,Ee,C,R))}}function J(f,E){if(1&f&&(o.TgZ(0,"div",11),o.YNc(1,_,2,12,"div",12),o.qZA()),2&f){const C=o.oxw();o.Q6J("nzGutter",C.nzGrid.gutter||null),o.xp6(1),o.Q6J("ngForOf",C.nzDataSource)}}function U(f,E){if(1&f&&o._UZ(0,"nz-list-empty",14),2&f){const C=o.oxw();o.Q6J("nzNoResult",C.nzNoResult)}}function ge(f,E){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Oqu(C.nzFooter)}}function Ce(f,E){if(1&f&&(o.TgZ(0,"nz-list-footer"),o.YNc(1,ge,2,1,"ng-container",10),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Ae(f,E){}function Me(f,E){}function Ie(f,E){if(1&f&&(o.TgZ(0,"nz-list-pagination"),o.YNc(1,Me,0,0,"ng-template",6),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzPagination)}}const Le=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Ne=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function Be(f,E){if(1&f&&o._UZ(0,"ul",6),2&f){const C=o.oxw(2);o.Q6J("nzActions",C.nzActions)}}function ve(f,E){if(1&f&&(o.YNc(0,Be,1,1,"ul",5),o.Hsn(1)),2&f){const C=o.oxw();o.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Ue(f,E){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzContent)}}function xe(f,E){if(1&f&&(o.ynx(0),o.YNc(1,Ue,2,1,"ng-container",8),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzContent)}}function $e(f,E){if(1&f&&(o.Hsn(0,1),o.Hsn(1,2),o.YNc(2,xe,2,1,"ng-container",7)),2&f){const C=o.oxw();o.xp6(2),o.Q6J("ngIf",C.nzContent)}}function it(f,E){1&f&&o.Hsn(0,3)}function ot(f,E){}function tt(f,E){}function rt(f,E){}function h(f,E){}function st(f,E){if(1&f&&(o.YNc(0,ot,0,0,"ng-template",9),o.YNc(1,tt,0,0,"ng-template",9),o.YNc(2,rt,0,0,"ng-template",9),o.YNc(3,h,0,0,"ng-template",9)),2&f){const C=o.oxw(),R=o.MAs(3),ce=o.MAs(5),he=o.MAs(1);o.Q6J("ngTemplateOutlet",R),o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzExtra),o.xp6(1),o.Q6J("ngTemplateOutlet",ce),o.xp6(1),o.Q6J("ngTemplateOutlet",he)}}function at(f,E){}function ct(f,E){}function lt(f,E){}function Ge(f,E){if(1&f&&(o.TgZ(0,"nz-list-item-extra"),o.YNc(1,lt,0,0,"ng-template",9),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(f,E){}function p(f,E){if(1&f&&(o.ynx(0),o.TgZ(1,"div",10),o.YNc(2,at,0,0,"ng-template",9),o.YNc(3,ct,0,0,"ng-template",9),o.qZA(),o.YNc(4,Ge,2,1,"nz-list-item-extra",7),o.YNc(5,pt,0,0,"ng-template",9),o.BQk()),2&f){const C=o.oxw(),R=o.MAs(3),ce=o.MAs(1),he=o.MAs(5);o.xp6(2),o.Q6J("ngTemplateOutlet",R),o.xp6(1),o.Q6J("ngTemplateOutlet",ce),o.xp6(1),o.Q6J("ngIf",C.nzExtra),o.xp6(1),o.Q6J("ngTemplateOutlet",he)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],j=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let m=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:b,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"h4",0),o.Hsn(1),o.qZA())},encapsulation:2,changeDetection:0}),f})(),l=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:b,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA())},encapsulation:2,changeDetection:0}),f})(),k=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:b,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,I,1,1,"nz-avatar",1),o.YNc(2,$,1,0,"ng-content",2),o.qZA()),2&C&&(o.xp6(1),o.Q6J("ngIf",R.nzSrc),o.xp6(1),o.Q6J("ngIf",!R.nzSrc))},directives:[i.Dz,t.O5],encapsulation:2,changeDetection:0}),f})(),ie=(()=>{class f{constructor(C,R){this.elementRef=C,this.renderer=R,this.avatarStr="",this.renderer.addClass(C.nativeElement,"ant-list-item-meta")}set nzAvatar(C){C instanceof o.Rgc?(this.avatarStr="",this.avatarTpl=C):this.avatarStr=C}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.SBq),o.Y36(o.Qsj))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(C,R,ce){if(1&C&&(o.Suo(ce,l,5),o.Suo(ce,m,5)),2&C){let he;o.iGM(he=o.CRH())&&(R.descriptionComponent=he.first),o.iGM(he=o.CRH())&&(R.titleComponent=he.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:g,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(C,R){1&C&&(o.F$t(Y),o.YNc(0,ne,1,1,"nz-list-item-meta-avatar",0),o.YNc(1,X,2,1,"nz-list-item-meta-avatar",1),o.Hsn(2),o.YNc(3,W,5,2,"div",2)),2&C&&(o.Q6J("ngIf",R.avatarStr),o.xp6(1),o.Q6J("ngIf",R.avatarTpl),o.xp6(2),o.Q6J("ngIf",R.nzTitle||R.nzDescription||R.descriptionComponent||R.titleComponent))},directives:[k,m,l,t.O5,t.tP,D.f],encapsulation:2,changeDetection:0}),f})(),ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:b,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-action"]],viewQuery:function(C,R){if(1&C&&o.Gf(o.Rgc,5),2&C){let ce;o.iGM(ce=o.CRH())&&(R.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:b,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.YNc(0,w,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),f})(),Te=(()=>{class f{constructor(C,R){this.ngZone=C,this.cdr=R,this.nzActions=[],this.actions=[],this.destroy$=new B.xQ,this.inputActionChanges$=new B.xQ,this.contentChildrenChanges$=(0,q.P)(()=>this.nzListItemActions?(0,A.of)(null):this.ngZone.onStable.asObservable().pipe((0,K.q)(1),(0,H.w)(()=>this.contentChildrenChanges$))),(0,L.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,le.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.R0b),o.Y36(o.sBO))},f.\u0275cmp=o.Xpm({type:f,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,R,ce){if(1&C&&o.Suo(ce,Ze,4),2&C){let he;o.iGM(he=o.CRH())&&(R.nzListItemActions=he)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[o.TTD],attrs:O,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,R){1&C&&o.YNc(0,_e,3,2,"li",0),2&C&&o.Q6J("ngForOf",R.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),f})(),Fe=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,R){1&C&&o._UZ(0,"nz-embed-empty",0),2&C&&o.Q6J("nzComponentName","list")("specificContent",R.nzNoResult)},directives:[te.gB],encapsulation:2,changeDetection:0}),f})(),ke=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:b,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ye=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:b,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Je=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:b,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),He=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275dir=o.lG2({type:f,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),f})(),Qe=(()=>{class f{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new G.X(this.nzItemLayout),this.destroy$=new B.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,le.R)(this.destroy$)).subscribe(R=>{this.dir=R})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(se.Is,8))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,R,ce){if(1&C&&(o.Suo(ce,Ye,5),o.Suo(ce,Je,5),o.Suo(ce,He,5)),2&C){let he;o.iGM(he=o.CRH())&&(R.nzListFooterComponent=he.first),o.iGM(he=o.CRH())&&(R.nzListPaginationComponent=he.first),o.iGM(he=o.CRH())&&(R.nzListLoadMoreDirective=he.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,R){2&C&&o.ekj("ant-list-rtl","rtl"===R.dir)("ant-list-vertical","vertical"===R.nzItemLayout)("ant-list-lg","large"===R.nzSize)("ant-list-sm","small"===R.nzSize)("ant-list-split",R.nzSplit)("ant-list-bordered",R.nzBordered)("ant-list-loading",R.nzLoading)("ant-list-something-after-last-item",R.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[o.TTD],ngContentSelectors:Ne,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,R){if(1&C&&(o.F$t(Le),o.YNc(0,Re,3,1,"ng-template",null,0,o.W1O),o.YNc(2,Pe,2,1,"nz-list-header",1),o.Hsn(3),o.TgZ(4,"nz-spin",2),o.ynx(5),o.YNc(6,N,1,2,"div",3),o.YNc(7,J,2,2,"div",4),o.YNc(8,U,1,1,"nz-list-empty",5),o.BQk(),o.qZA(),o.YNc(9,Ce,2,1,"nz-list-footer",1),o.Hsn(10,1),o.YNc(11,Ae,0,0,"ng-template",6),o.Hsn(12,2),o.YNc(13,Ie,2,1,"nz-list-pagination",1),o.Hsn(14,3)),2&C){const ce=o.MAs(1);o.xp6(2),o.Q6J("ngIf",R.nzHeader),o.xp6(2),o.Q6J("nzSpinning",R.nzLoading),o.xp6(2),o.Q6J("ngIf",R.nzLoading&&R.nzDataSource&&0===R.nzDataSource.length),o.xp6(1),o.Q6J("ngIf",R.nzGrid&&R.nzDataSource)("ngIfElse",ce),o.xp6(1),o.Q6J("ngIf",!R.nzLoading&&R.nzDataSource&&0===R.nzDataSource.length),o.xp6(1),o.Q6J("ngIf",R.nzFooter),o.xp6(2),o.Q6J("ngTemplateOutlet",R.nzLoadMore),o.xp6(2),o.Q6J("ngIf",R.nzPagination)}},directives:[ke,oe.W,Fe,Ye,Je,t.sg,t.tP,t.O5,D.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzBordered",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzLoading",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzSplit",void 0),f})(),je=(()=>{class f{constructor(C,R,ce,he){this.parentComp=ce,this.cdr=he,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,R.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(Qe),o.Y36(o.sBO))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,R,ce){if(1&C&&o.Suo(ce,ze,5),2&C){let he;o.iGM(he=o.CRH())&&(R.listItemExtraDirective=he.first)}},hostVars:2,hostBindings:function(C,R){2&C&&o.ekj("ant-list-item-no-flex",R.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:j,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,R){if(1&C&&(o.F$t(a),o.YNc(0,ve,2,1,"ng-template",null,0,o.W1O),o.YNc(2,$e,3,1,"ng-template",null,1,o.W1O),o.YNc(4,it,1,0,"ng-template",null,2,o.W1O),o.YNc(6,st,4,4,"ng-template",null,3,o.W1O),o.YNc(8,p,6,4,"ng-container",4)),2&C){const ce=o.MAs(7);o.xp6(8),o.Q6J("ngIf",R.isVerticalAndExtra)("ngIfElse",ce)}},directives:[Te,ze,t.O5,D.f,t.tP],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzNoFlex",void 0),f})(),Xe=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275mod=o.oAB({type:f}),f.\u0275inj=o.cJS({imports:[[se.vT,t.ez,oe.j,V.Jb,i.Rt,D.T,te.Xo]]}),f})()},4219:(De,re,r)=>{r.d(re,{hl:()=>ve,Cc:()=>Ne,wO:()=>ct,YV:()=>pt,uA:()=>Ge,r9:()=>xe,ip:()=>p});var o=r(655),i=r(5e3),t=r(8929),D=r(591),F=r(6787),Z=r(3426),B=r(4850),q=r(1709),A=r(2198),L=r(7604),G=r(7138),K=r(5778),H=r(7625),le=r(1059),te=r(7545),se=r(1721),oe=r(325),V=r(226),b=r(2845),I=r(6950),$=r(925),ne=r(4832),X=r(9808),de=r(647),fe=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function W(a,j){if(1&a&&i._UZ(0,"i",4),2&a){const m=i.oxw();i.Q6J("nzType",m.nzIcon)}}function Y(a,j){if(1&a&&(i.ynx(0),i.TgZ(1,"span"),i._uU(2),i.qZA(),i.BQk()),2&a){const m=i.oxw();i.xp6(2),i.Oqu(m.nzTitle)}}function g(a,j){1&a&&i._UZ(0,"i",8)}function w(a,j){1&a&&i._UZ(0,"i",9)}function O(a,j){if(1&a&&(i.TgZ(0,"span",5),i.YNc(1,g,1,0,"i",6),i.YNc(2,w,1,0,"i",7),i.qZA()),2&a){const m=i.oxw();i.Q6J("ngSwitch",m.dir),i.xp6(1),i.Q6J("ngSwitchCase","rtl")}}function Q(a,j){1&a&&i._UZ(0,"i",10)}const ye=["*"],_e=["nz-submenu-inline-child",""];function Se(a,j){}const Ee=["nz-submenu-none-inline-child",""];function Oe(a,j){}const Re=["nz-submenu",""];function Ve(a,j){1&a&&i.Hsn(0,0,["*ngIf","!nzTitle"])}function Pe(a,j){if(1&a&&i._UZ(0,"div",6),2&a){const m=i.oxw(),l=i.MAs(7);i.Q6J("mode",m.mode)("nzOpen",m.nzOpen)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("menuClass",m.nzMenuClassName)("templateOutlet",l)}}function N(a,j){if(1&a){const m=i.EpF();i.TgZ(0,"div",8),i.NdJ("subMenuMouseState",function(k){return i.CHM(m),i.oxw(2).setMouseEnterState(k)}),i.qZA()}if(2&a){const m=i.oxw(2),l=i.MAs(7);i.Q6J("theme",m.theme)("mode",m.mode)("nzOpen",m.nzOpen)("position",m.position)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("templateOutlet",l)("menuClass",m.nzMenuClassName)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)}}function ee(a,j){if(1&a){const m=i.EpF();i.YNc(0,N,1,10,"ng-template",7),i.NdJ("positionChange",function(k){return i.CHM(m),i.oxw().onPositionChange(k)})}if(2&a){const m=i.oxw(),l=i.MAs(1);i.Q6J("cdkConnectedOverlayPositions",m.overlayPositions)("cdkConnectedOverlayOrigin",l)("cdkConnectedOverlayWidth",m.triggerWidth)("cdkConnectedOverlayOpen",m.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function _(a,j){1&a&&i.Hsn(0,1)}const J=[[["","title",""]],"*"],U=["[title]","*"],ge=["titleElement"],Ce=["nz-menu-group",""];function Ae(a,j){if(1&a&&(i.ynx(0),i._uU(1),i.BQk()),2&a){const m=i.oxw();i.xp6(1),i.Oqu(m.nzTitle)}}function Me(a,j){1&a&&i.Hsn(0,1,["*ngIf","!nzTitle"])}const Ie=["*",[["","title",""]]],Le=["*","[title]"],Ne=new i.OlP("NzIsInDropDownMenuToken"),Be=new i.OlP("NzMenuServiceLocalToken");let ve=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new D.X("light"),this.mode$=new D.X("vertical"),this.inlineIndent$=new D.X(24),this.isChildSubMenuOpen$=new D.X(!1)}onDescendantMenuItemClick(m){this.descendantMenuItemClick$.next(m)}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setMode(m){this.mode$.next(m)}setTheme(m){this.theme$.next(m)}setInlineIndent(m){this.inlineIndent$.next(m)}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),Ue=(()=>{class a{constructor(m,l,k){this.nzHostSubmenuService=m,this.nzMenuService=l,this.isMenuInsideDropDown=k,this.mode$=this.nzMenuService.mode$.pipe((0,B.U)(Te=>"inline"===Te?"inline":"vertical"===Te||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new D.X(!1),this.isChildSubMenuOpen$=new D.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ie=this.childMenuItemClick$.pipe((0,q.zg)(()=>this.mode$),(0,A.h)(Te=>"inline"!==Te||this.isMenuInsideDropDown),(0,L.h)(!1)),ze=(0,F.T)(this.isMouseEnterTitleOrOverlay$,ie);(0,Z.aj)([this.isChildSubMenuOpen$,ze]).pipe((0,B.U)(([Te,Fe])=>Te||Fe),(0,G.e)(150),(0,K.x)(),(0,H.R)(this.destroy$)).pipe((0,K.x)()).subscribe(Te=>{this.setOpenStateWithoutDebounce(Te),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Te):this.nzMenuService.isChildSubMenuOpen$.next(Te)})}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setOpenStateWithoutDebounce(m){this.isCurrentSubMenuOpen$.next(m)}setMouseEnterTitleOrOverlayState(m){this.isMouseEnterTitleOrOverlay$.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.LFG(a,12),i.LFG(ve),i.LFG(Ne))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),xe=(()=>{class a{constructor(m,l,k,ie,ze,Ze,Te,Fe){this.nzMenuService=m,this.cdr=l,this.nzSubmenuService=k,this.isMenuInsideDropDown=ie,this.directionality=ze,this.routerLink=Ze,this.routerLinkWithHref=Te,this.router=Fe,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Fe&&this.router.events.pipe((0,H.R)(this.destroy$),(0,A.h)(ke=>ke instanceof oe.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(m){this.nzDisabled?(m.preventDefault(),m.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(m){this.nzSelected=m,this.selected$.next(m)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const m=this.hasActiveLinks();this.nzSelected!==m&&(this.nzSelected=m,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const m=this.isLinkActive(this.router);return this.routerLink&&m(this.routerLink)||this.routerLinkWithHref&&m(this.routerLinkWithHref)||this.listOfRouterLink.some(m)||this.listOfRouterLinkWithHref.some(m)}isLinkActive(m){return l=>m.isActive(l.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var m;(0,Z.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([l,k])=>{this.inlinePaddingLeft="inline"===l?this.level*k:null}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(m){m.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Ue,8),i.Y36(Ne),i.Y36(V.Is,8),i.Y36(oe.rH,8),i.Y36(oe.yS,8),i.Y36(oe.F0,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(m,l,k){if(1&m&&(i.Suo(k,oe.rH,5),i.Suo(k,oe.yS,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(l.listOfRouterLink=ie),i.iGM(ie=i.CRH())&&(l.listOfRouterLinkWithHref=ie)}},hostVars:20,hostBindings:function(m,l){1&m&&i.NdJ("click",function(ie){return l.clickMenuItem(ie)}),2&m&&(i.Udp("padding-left","rtl"===l.dir?null:l.nzPaddingLeft||l.inlinePaddingLeft,"px")("padding-right","rtl"===l.dir?l.nzPaddingLeft||l.inlinePaddingLeft:null,"px"),i.ekj("ant-dropdown-menu-item",l.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",l.isMenuInsideDropDown&&l.nzSelected)("ant-dropdown-menu-item-danger",l.isMenuInsideDropDown&&l.nzDanger)("ant-dropdown-menu-item-disabled",l.isMenuInsideDropDown&&l.nzDisabled)("ant-menu-item",!l.isMenuInsideDropDown)("ant-menu-item-selected",!l.isMenuInsideDropDown&&l.nzSelected)("ant-menu-item-danger",!l.isMenuInsideDropDown&&l.nzDanger)("ant-menu-item-disabled",!l.isMenuInsideDropDown&&l.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[i.TTD]}),(0,o.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzSelected",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzDanger",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),$e=(()=>{class a{constructor(m,l){this.cdr=m,this.directionality=l,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new i.vpe,this.subMenuMouseState=new i.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var m;this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(m,l){1&m&&i.NdJ("click",function(){return l.clickTitle()})("mouseenter",function(){return l.setMouseState(!0)})("mouseleave",function(){return l.setMouseState(!1)}),2&m&&(i.Udp("padding-left","rtl"===l.dir?null:l.paddingLeft,"px")("padding-right","rtl"===l.dir?l.paddingLeft:null,"px"),i.ekj("ant-dropdown-menu-submenu-title",l.isMenuInsideDropDown)("ant-menu-submenu-title",!l.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:ye,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(m,l){if(1&m&&(i.F$t(),i.YNc(0,W,1,1,"i",0),i.YNc(1,Y,3,1,"ng-container",1),i.Hsn(2),i.YNc(3,O,3,2,"span",2),i.YNc(4,Q,1,0,"ng-template",null,3,i.W1O)),2&m){const k=i.MAs(5);i.Q6J("ngIf",l.nzIcon),i.xp6(1),i.Q6J("nzStringTemplateOutlet",l.nzTitle),i.xp6(2),i.Q6J("ngIf",l.isMenuInsideDropDown)("ngIfElse",k)}},directives:[X.O5,de.Ls,fe.f,X.RF,X.n9,X.ED],encapsulation:2,changeDetection:0}),a})(),it=(()=>{class a{constructor(m,l,k){this.elementRef=m,this.renderer=l,this.directionality=k,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l})}ngOnChanges(m){const{mode:l,nzOpen:k,menuClass:ie}=m;(l||k)&&this.calcMotionState(),ie&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.removeClass(this.elementRef.nativeElement,ze)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.addClass(this.elementRef.nativeElement,ze)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(m,l){2&m&&(i.d8E("@collapseMotion",l.expandState),i.ekj("ant-menu-rtl","rtl"===l.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[i.TTD],attrs:_e,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(m,l){1&m&&i.YNc(0,Se,0,0,"ng-template",0),2&m&&i.Q6J("ngTemplateOutlet",l.templateOutlet)},directives:[X.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),ot=(()=>{class a{constructor(m){this.directionality=m,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new i.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l})}ngOnChanges(m){const{mode:l,nzOpen:k}=m;(l||k)&&this.calcMotionState()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(m,l){1&m&&i.NdJ("mouseenter",function(){return l.setMouseState(!0)})("mouseleave",function(){return l.setMouseState(!1)}),2&m&&(i.d8E("@slideMotion",l.expandState)("@zoomBigMotion",l.expandState),i.ekj("ant-menu-light","light"===l.theme)("ant-menu-dark","dark"===l.theme)("ant-menu-submenu-placement-bottom","horizontal"===l.mode)("ant-menu-submenu-placement-right","vertical"===l.mode&&"right"===l.position)("ant-menu-submenu-placement-left","vertical"===l.mode&&"left"===l.position)("ant-menu-submenu-rtl","rtl"===l.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[i.TTD],attrs:Ee,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(m,l){1&m&&(i.TgZ(0,"div",0),i.YNc(1,Oe,0,0,"ng-template",1),i.qZA()),2&m&&(i.ekj("ant-dropdown-menu",l.isMenuInsideDropDown)("ant-menu",!l.isMenuInsideDropDown)("ant-dropdown-menu-vertical",l.isMenuInsideDropDown)("ant-menu-vertical",!l.isMenuInsideDropDown)("ant-dropdown-menu-sub",l.isMenuInsideDropDown)("ant-menu-sub",!l.isMenuInsideDropDown)("ant-menu-rtl","rtl"===l.dir),i.Q6J("ngClass",l.menuClass),i.xp6(1),i.Q6J("ngTemplateOutlet",l.templateOutlet))},directives:[X.mk,X.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const tt=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],rt=[I.yW.bottomLeft];let h=(()=>{class a{constructor(m,l,k,ie,ze,Ze,Te){this.nzMenuService=m,this.cdr=l,this.nzSubmenuService=k,this.platform=ie,this.isMenuInsideDropDown=ze,this.directionality=Ze,this.noAnimation=Te,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new i.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=tt,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(m){this.nzSubmenuService.setOpenStateWithoutDebounce(m)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(m){this.isActive=m,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(m)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(m){const l=(0,I.d_)(m);"rightTop"===l||"rightBottom"===l||"right"===l?this.position="right":("leftTop"===l||"leftBottom"===l||"left"===l)&&(this.position="left")}ngOnInit(){var m;this.nzMenuService.theme$.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.theme=l,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.mode=l,"horizontal"===l?this.overlayPositions=rt:"vertical"===l&&(this.overlayPositions=tt),this.cdr.markForCheck()}),(0,Z.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([l,k])=>{this.inlinePaddingLeft="inline"===l?this.level*k:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.isActive=l,l!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=l,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const m=this.listOfNzMenuItemDirective,l=m.changes,k=(0,F.T)(l,...m.map(ie=>ie.selected$));l.pipe((0,le.O)(m),(0,te.w)(()=>k),(0,le.O)(!0),(0,B.U)(()=>m.some(ie=>ie.nzSelected)),(0,H.R)(this.destroy$)).subscribe(ie=>{this.isSelected=ie,this.cdr.markForCheck()})}ngOnChanges(m){const{nzOpen:l}=m;l&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Ue),i.Y36($.t4),i.Y36(Ne),i.Y36(V.Is,8),i.Y36(ne.P,9))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(m,l,k){if(1&m&&(i.Suo(k,a,5),i.Suo(k,xe,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(l.listOfNzSubMenuComponent=ie),i.iGM(ie=i.CRH())&&(l.listOfNzMenuItemDirective=ie)}},viewQuery:function(m,l){if(1&m&&i.Gf(b.xu,7,i.SBq),2&m){let k;i.iGM(k=i.CRH())&&(l.cdkOverlayOrigin=k.first)}},hostVars:34,hostBindings:function(m,l){2&m&&i.ekj("ant-dropdown-menu-submenu",l.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",l.isMenuInsideDropDown&&l.nzDisabled)("ant-dropdown-menu-submenu-open",l.isMenuInsideDropDown&&l.nzOpen)("ant-dropdown-menu-submenu-selected",l.isMenuInsideDropDown&&l.isSelected)("ant-dropdown-menu-submenu-vertical",l.isMenuInsideDropDown&&"vertical"===l.mode)("ant-dropdown-menu-submenu-horizontal",l.isMenuInsideDropDown&&"horizontal"===l.mode)("ant-dropdown-menu-submenu-inline",l.isMenuInsideDropDown&&"inline"===l.mode)("ant-dropdown-menu-submenu-active",l.isMenuInsideDropDown&&l.isActive)("ant-menu-submenu",!l.isMenuInsideDropDown)("ant-menu-submenu-disabled",!l.isMenuInsideDropDown&&l.nzDisabled)("ant-menu-submenu-open",!l.isMenuInsideDropDown&&l.nzOpen)("ant-menu-submenu-selected",!l.isMenuInsideDropDown&&l.isSelected)("ant-menu-submenu-vertical",!l.isMenuInsideDropDown&&"vertical"===l.mode)("ant-menu-submenu-horizontal",!l.isMenuInsideDropDown&&"horizontal"===l.mode)("ant-menu-submenu-inline",!l.isMenuInsideDropDown&&"inline"===l.mode)("ant-menu-submenu-active",!l.isMenuInsideDropDown&&l.isActive)("ant-menu-submenu-rtl","rtl"===l.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[i._Bn([Ue]),i.TTD],attrs:Re,ngContentSelectors:U,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(m,l){if(1&m&&(i.F$t(J),i.TgZ(0,"div",0,1),i.NdJ("subMenuMouseState",function(ie){return l.setMouseEnterState(ie)})("toggleSubMenu",function(){return l.toggleSubMenu()}),i.YNc(2,Ve,1,0,"ng-content",2),i.qZA(),i.YNc(3,Pe,1,6,"div",3),i.YNc(4,ee,1,5,"ng-template",null,4,i.W1O),i.YNc(6,_,1,0,"ng-template",null,5,i.W1O)),2&m){const k=i.MAs(5);i.Q6J("nzIcon",l.nzIcon)("nzTitle",l.nzTitle)("mode",l.mode)("nzDisabled",l.nzDisabled)("isMenuInsideDropDown",l.isMenuInsideDropDown)("paddingLeft",l.nzPaddingLeft||l.inlinePaddingLeft),i.xp6(2),i.Q6J("ngIf",!l.nzTitle),i.xp6(1),i.Q6J("ngIf","inline"===l.mode)("ngIfElse",k)}},directives:[$e,it,ot,b.xu,X.O5,ne.P,b.pI],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,se.yF)()],a.prototype,"nzOpen",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),a})();function st(a,j){return a||j}function at(a){return a||!1}let ct=(()=>{class a{constructor(m,l,k,ie){this.nzMenuService=m,this.isMenuInsideDropDown=l,this.cdr=k,this.directionality=ie,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new i.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new D.X(this.nzInlineCollapsed),this.mode$=new D.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(m){this.nzInlineCollapsed=m,this.inlineCollapsed$.next(m)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(m=>m.nzOpen),this.listOfNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var m;(0,Z.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,H.R)(this.destroy$)).subscribe(([l,k])=>{this.actualMode=l?"vertical":k,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.nzClick.emit(l),this.nzSelectable&&!l.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(k=>k.setSelectedState(k===l))}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(l=>{this.dir=l,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(m){const{nzInlineCollapsed:l,nzInlineIndent:k,nzTheme:ie,nzMode:ze}=m;l&&this.inlineCollapsed$.next(this.nzInlineCollapsed),k&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ie&&this.nzMenuService.setTheme(this.nzTheme),ze&&(this.mode$.next(this.nzMode),!m.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ze=>Ze.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(Ne),i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(m,l,k){if(1&m&&(i.Suo(k,xe,5),i.Suo(k,h,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(l.listOfNzMenuItemDirective=ie),i.iGM(ie=i.CRH())&&(l.listOfNzSubMenuComponent=ie)}},hostVars:34,hostBindings:function(m,l){2&m&&i.ekj("ant-dropdown-menu",l.isMenuInsideDropDown)("ant-dropdown-menu-root",l.isMenuInsideDropDown)("ant-dropdown-menu-light",l.isMenuInsideDropDown&&"light"===l.nzTheme)("ant-dropdown-menu-dark",l.isMenuInsideDropDown&&"dark"===l.nzTheme)("ant-dropdown-menu-vertical",l.isMenuInsideDropDown&&"vertical"===l.actualMode)("ant-dropdown-menu-horizontal",l.isMenuInsideDropDown&&"horizontal"===l.actualMode)("ant-dropdown-menu-inline",l.isMenuInsideDropDown&&"inline"===l.actualMode)("ant-dropdown-menu-inline-collapsed",l.isMenuInsideDropDown&&l.nzInlineCollapsed)("ant-menu",!l.isMenuInsideDropDown)("ant-menu-root",!l.isMenuInsideDropDown)("ant-menu-light",!l.isMenuInsideDropDown&&"light"===l.nzTheme)("ant-menu-dark",!l.isMenuInsideDropDown&&"dark"===l.nzTheme)("ant-menu-vertical",!l.isMenuInsideDropDown&&"vertical"===l.actualMode)("ant-menu-horizontal",!l.isMenuInsideDropDown&&"horizontal"===l.actualMode)("ant-menu-inline",!l.isMenuInsideDropDown&&"inline"===l.actualMode)("ant-menu-inline-collapsed",!l.isMenuInsideDropDown&&l.nzInlineCollapsed)("ant-menu-rtl","rtl"===l.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[i._Bn([{provide:Be,useClass:ve},{provide:ve,useFactory:st,deps:[[new i.tp0,new i.FiY,ve],Be]},{provide:Ne,useFactory:at,deps:[[new i.tp0,new i.FiY,Ne]]}]),i.TTD]}),(0,o.gn)([(0,se.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,o.gn)([(0,se.yF)()],a.prototype,"nzSelectable",void 0),a})();function lt(a){return a||!1}let Ge=(()=>{class a{constructor(m,l,k){this.elementRef=m,this.renderer=l,this.isMenuInsideDropDown=k,this.renderer.addClass(m.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const m=this.titleElement.nativeElement.nextElementSibling;m&&this.renderer.addClass(m,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Ne))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-menu-group",""]],viewQuery:function(m,l){if(1&m&&i.Gf(ge,5),2&m){let k;i.iGM(k=i.CRH())&&(l.titleElement=k.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[i._Bn([{provide:Ne,useFactory:lt,deps:[[new i.tp0,new i.FiY,Ne]]}])],attrs:Ce,ngContentSelectors:Le,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(m,l){1&m&&(i.F$t(Ie),i.TgZ(0,"div",null,0),i.YNc(2,Ae,2,1,"ng-container",1),i.YNc(3,Me,1,0,"ng-content",2),i.qZA(),i.Hsn(4)),2&m&&(i.ekj("ant-menu-item-group-title",!l.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",l.isMenuInsideDropDown),i.xp6(2),i.Q6J("nzStringTemplateOutlet",l.nzTitle),i.xp6(1),i.Q6J("ngIf",!l.nzTitle))},directives:[fe.f,X.O5],encapsulation:2,changeDetection:0}),a})(),pt=(()=>{class a{constructor(m,l){this.elementRef=m,this.renderer=l,this.renderer.addClass(m.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[V.vT,X.ez,$.ud,b.U8,de.PV,ne.g,fe.T]]}),a})()},8144:(De,re,r)=>{r.d(re,{NU:()=>oe,$1:()=>le,zf:()=>V});var o=r(226),i=r(9808),t=r(5e3),D=r(655),F=r(8929),Z=r(7625),B=r(9439),q=r(1721);function A(b,I){}const L=function(b){return{$implicit:b}};function G(b,I){if(1&b&&(t.TgZ(0,"span",4),t.YNc(1,A,0,0,"ng-template",5),t.qZA()),2&b){const $=t.oxw(),ne=$.last,X=$.index,de=t.oxw();t.Udp("margin-bottom","vertical"===de.nzDirection?ne?null:de.spaceSize:null,"px")("margin-right","horizontal"===de.nzDirection?ne?null:de.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",de.nzSplit)("ngTemplateOutletContext",t.VKq(6,L,X))}}function K(b,I){if(1&b&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,G,2,8,"span",3)),2&b){const $=I.$implicit,ne=I.last,X=t.oxw();t.Udp("margin-bottom","vertical"===X.nzDirection?ne?null:X.spaceSize:null,"px")("margin-right","horizontal"===X.nzDirection?ne?null:X.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",$),t.xp6(1),t.Q6J("ngIf",X.nzSplit&&!ne)}}const H=["*"];let le=(()=>{class b{constructor(){}}return b.\u0275fac=function($){return new($||b)},b.\u0275dir=t.lG2({type:b,selectors:[["","nzSpaceItem",""]]}),b})();const se={small:8,middle:16,large:24};let oe=(()=>{class b{constructor($,ne){this.nzConfigService=$,this.cdr=ne,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=se.small,this.destroy$=new F.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?se[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return b.\u0275fac=function($){return new($||b)(t.Y36(B.jY),t.Y36(t.sBO))},b.\u0275cmp=t.Xpm({type:b,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function($,ne,X){if(1&$&&t.Suo(X,le,4,t.Rgc),2&$){let de;t.iGM(de=t.CRH())&&(ne.items=de)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function($,ne){2&$&&(t.Udp("flex-wrap",ne.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===ne.nzDirection)("ant-space-vertical","vertical"===ne.nzDirection)("ant-space-align-start","start"===ne.mergedAlign)("ant-space-align-end","end"===ne.mergedAlign)("ant-space-align-center","center"===ne.mergedAlign)("ant-space-align-baseline","baseline"===ne.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:H,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function($,ne){1&$&&(t.F$t(),t.Hsn(0),t.YNc(1,K,3,6,"ng-template",0)),2&$&&(t.xp6(1),t.Q6J("ngForOf",ne.items))},directives:[i.sg,i.tP,i.O5],encapsulation:2,changeDetection:0}),(0,D.gn)([(0,q.yF)()],b.prototype,"nzWrap",void 0),(0,D.gn)([(0,B.oS)()],b.prototype,"nzSize",void 0),b})(),V=(()=>{class b{}return b.\u0275fac=function($){return new($||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[[o.vT,i.ez]]}),b})()},7525:(De,re,r)=>{r.d(re,{W:()=>ue,j:()=>W});var o=r(655),i=r(5e3),t=r(8929),D=r(591),F=r(839),Z=r(8723),B=r(1177);class A{constructor(g){this.durationSelector=g}call(g,w){return w.subscribe(new L(g,this.durationSelector))}}class L extends B.Ds{constructor(g,w){super(g),this.durationSelector=w,this.hasValue=!1}_next(g){try{const w=this.durationSelector.call(this,g);w&&this._tryNext(g,w)}catch(w){this.destination.error(w)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(g,w){let O=this.durationSubscription;this.value=g,this.hasValue=!0,O&&(O.unsubscribe(),this.remove(O)),O=(0,B.ft)(w,new B.IY(this)),O&&!O.closed&&this.add(this.durationSubscription=O)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const g=this.value,w=this.durationSubscription;w&&(this.durationSubscription=void 0,w.unsubscribe(),this.remove(w)),this.value=void 0,this.hasValue=!1,super._next(g)}}}var G=r(1059),K=r(5778),H=r(7545),le=r(7625),te=r(9439),se=r(1721),oe=r(226),V=r(9808),b=r(7144);function I(Y,g){1&Y&&(i.TgZ(0,"span",3),i._UZ(1,"i",4),i._UZ(2,"i",4),i._UZ(3,"i",4),i._UZ(4,"i",4),i.qZA())}function $(Y,g){}function ne(Y,g){if(1&Y&&(i.TgZ(0,"div",8),i._uU(1),i.qZA()),2&Y){const w=i.oxw(2);i.xp6(1),i.Oqu(w.nzTip)}}function X(Y,g){if(1&Y&&(i.TgZ(0,"div"),i.TgZ(1,"div",5),i.YNc(2,$,0,0,"ng-template",6),i.YNc(3,ne,2,1,"div",7),i.qZA(),i.qZA()),2&Y){const w=i.oxw(),O=i.MAs(1);i.xp6(1),i.ekj("ant-spin-rtl","rtl"===w.dir)("ant-spin-spinning",w.isLoading)("ant-spin-lg","large"===w.nzSize)("ant-spin-sm","small"===w.nzSize)("ant-spin-show-text",w.nzTip),i.xp6(1),i.Q6J("ngTemplateOutlet",w.nzIndicator||O),i.xp6(1),i.Q6J("ngIf",w.nzTip)}}function de(Y,g){if(1&Y&&(i.TgZ(0,"div",9),i.Hsn(1),i.qZA()),2&Y){const w=i.oxw();i.ekj("ant-spin-blur",w.isLoading)}}const fe=["*"];let ue=(()=>{class Y{constructor(w,O,Q){this.nzConfigService=w,this.cdr=O,this.directionality=Q,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new D.X(this.nzSpinning),this.delay$=new F.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var w;this.delay$.pipe((0,G.O)(this.nzDelay),(0,K.x)(),(0,H.w)(Q=>0===Q?this.spinning$:this.spinning$.pipe(function q(Y){return g=>g.lift(new A(Y))}(ye=>(0,Z.H)(ye?Q:0)))),(0,le.R)(this.destroy$)).subscribe(Q=>{this.isLoading=Q,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,le.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(w=this.directionality.change)||void 0===w||w.pipe((0,le.R)(this.destroy$)).subscribe(Q=>{this.dir=Q,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(w){const{nzSpinning:O,nzDelay:Q}=w;O&&this.spinning$.next(this.nzSpinning),Q&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Y.\u0275fac=function(w){return new(w||Y)(i.Y36(te.jY),i.Y36(i.sBO),i.Y36(oe.Is,8))},Y.\u0275cmp=i.Xpm({type:Y,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(w,O){2&w&&i.ekj("ant-spin-nested-loading",!O.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[i.TTD],ngContentSelectors:fe,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(w,O){1&w&&(i.F$t(),i.YNc(0,I,5,0,"ng-template",null,0,i.W1O),i.YNc(2,X,4,12,"div",1),i.YNc(3,de,2,2,"div",2)),2&w&&(i.xp6(2),i.Q6J("ngIf",O.isLoading),i.xp6(1),i.Q6J("ngIf",!O.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,o.gn)([(0,te.oS)()],Y.prototype,"nzIndicator",void 0),(0,o.gn)([(0,se.Rn)()],Y.prototype,"nzDelay",void 0),(0,o.gn)([(0,se.yF)()],Y.prototype,"nzSimple",void 0),(0,o.gn)([(0,se.yF)()],Y.prototype,"nzSpinning",void 0),Y})(),W=(()=>{class Y{}return Y.\u0275fac=function(w){return new(w||Y)},Y.\u0275mod=i.oAB({type:Y}),Y.\u0275inj=i.cJS({imports:[[oe.vT,V.ez,b.Q8]]}),Y})()}}]);