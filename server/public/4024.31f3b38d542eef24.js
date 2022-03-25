"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{1912:(Ee,re,r)=>{r.d(re,{s:()=>le});var i=r(5e3),o=r(6042),t=r(2643),E=r(2683),F=r(3640),w=r(2160),X=r(3762),O=r(647);let L=(()=>{class te{constructor(ie){this.cookies=ie,this.location=function Z(te){return encodeURIComponent(te).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return te.\u0275fac=function(ie){return new(ie||te)(i.Y36(w.N))},te.\u0275cmp=i.Xpm({type:te,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(ie,V){1&ie&&(i.TgZ(0,"nz-list",0),i.TgZ(1,"nz-list-item"),i.TgZ(2,"form",1),i._UZ(3,"input",2),i.TgZ(4,"button",3),i._UZ(5,"i",4),i._uU(6," Sign In with a Google Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"nz-list-item"),i.TgZ(8,"form",1),i._UZ(9,"input",2),i.TgZ(10,"button",3),i._uU(11," Sign In with an ORCID Account "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"nz-list-item"),i.TgZ(13,"form",1),i._UZ(14,"input",2),i.TgZ(15,"button",3),i._UZ(16,"i",5),i._uU(17," Sign In with a Github Account "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&ie&&(i.xp6(2),i.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(5),i.MGl("action","/api/auth/orcid?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken),i.xp6(4),i.MGl("action","/api/auth/github?origin=",V.location,"",i.LSH),i.xp6(1),i.s9C("value",V.xsrfToken))},directives:[X.n_,X.AA,o.ix,t.dQ,E.w,O.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),te})();function G(te,se){1&te&&(i.ynx(0),i.TgZ(1,"p",5),i._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),i.qZA(),i._UZ(3,"cvc-auth-options-list"),i.BQk())}function K(te,se){1&te&&i._uU(0," Sign In\n")}function H(te,se){if(1&te){const ie=i.EpF();i.TgZ(0,"button",0),i.NdJ("click",function(){return i.CHM(ie),i.oxw().handleCancel()}),i._uU(1,"Cancel"),i.qZA()}}let le=(()=>{class te{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return te.\u0275fac=function(ie){return new(ie||te)},te.\u0275cmp=i.Xpm({type:te,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(ie,V){if(1&ie&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return V.showAuth()}),i.TgZ(1,"span"),i._uU(2,"Sign In"),i.qZA(),i.qZA(),i.TgZ(3,"nz-modal",1),i.NdJ("nzVisibleChange",function(I){return V.authVisible=I})("nzOnCancel",function(){return V.handleCancel()}),i.YNc(4,G,4,0,"ng-container",2),i.qZA(),i.YNc(5,K,1,0,"ng-template",null,3,i.W1O),i.YNc(7,H,2,0,"ng-template",null,4,i.W1O)),2&ie){const R=i.MAs(6),I=i.MAs(8);i.xp6(3),i.Q6J("nzVisible",V.authVisible)("nzTitle",R)("nzFooter",I)}},directives:[o.ix,t.dQ,E.w,F.du,F.Hf,L],styles:["[_nghost-%COMP%]{display:inline-block}"]}),te})()},1844:(Ee,re,r)=>{r.d(re,{B:()=>X});var i=r(9808),o=r(6042),t=r(3640),E=r(3762),F=r(647),Z=r(5e3);let w=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[i.ez,F.PV,E.Ph,o.sL]]}),O})(),X=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[i.ez,o.sL,t.Qp,w]]}),O})()},7881:(Ee,re,r)=>{r.d(re,{L:()=>Z});var i=r(5e3),o=r(9808),t=r(6699);function E(w,X){if(1&w&&i._UZ(0,"nz-avatar",2),2&w){const O=i.oxw();i.Q6J("nzSrc",O.user.profileImagePath)("nzSize",O.size)}}function F(w,X){if(1&w&&(i._UZ(0,"nz-avatar",3),i.ALo(1,"uppercase")),2&w){const O=i.oxw();i.Q6J("nzSize",O.size)("nzText",i.lcZ(1,2,O.user.displayName.charAt(0)))}}let Z=(()=>{class w{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return w.\u0275fac=function(O){return new(O||w)},w.\u0275cmp=i.Xpm({type:w,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(O,L){if(1&O&&(i.YNc(0,E,1,2,"nz-avatar",0),i.YNc(1,F,2,4,"ng-template",null,1,i.W1O)),2&O){const G=i.MAs(2);i.Q6J("ngIf",L.user.profileImagePath)("ngIfElse",G)}},directives:[o.O5,t.Dz],pipes:[o.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),w})()},5473:(Ee,re,r)=>{r.d(re,{H:()=>E});var i=r(9808),o=r(6699),t=r(5e3);let E=(()=>{class F{}return F.\u0275fac=function(w){return new(w||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[i.ez,o.Rt]]}),F})()},9350:(Ee,re,r)=>{r.d(re,{a:()=>O});var i=r(4850),o=r(5154),t=r(373),E=r(1059),F=r(712),Z=r(5e3),w=r(520);const X={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let O=(()=>{class L{constructor(K,H){function le(I){return!(!I||I.role!==F.i44.Admin)}function te(I){return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function se(I){return!(!I||I.role!==F.i44.Curator)}function ie(I){return!(!I||I.role!==F.i44.Curator&&I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function V(I){var P,ne;return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===(P=I.mostRecentConflictOfInterestStatement)||void 0===P?void 0:P.coiStatus)!=F.Mgx.Conflict&&(null===(ne=I.mostRecentConflictOfInterestStatement)||void 0===ne?void 0:ne.coiStatus)!=F.Mgx.Valid)}function R(I){if(I.mostRecentOrganizationId)return I.organizations.find(P=>P.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=K,this.http=H,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,i.U)(I=>({data:I.data,loading:I.loading,networkStatus:I.networkStatus})),(0,o.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,E.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,i.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!==I,signedOut:null===I,canCurate:ie(I),canModerate:V(I),isAdmin:le(I),isEditor:te(I),isCurator:se(I),organizations:null===I?[]:I.organizations,mostRecentOrg:null===I?void 0:R(I),invalidCoi:te(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Missing)})),(0,E.O)(X),(0,o.d)(1)),this.signedIn$=this.viewer$.pipe((0,i.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,i.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,i.U)(I=>le(I))),this.isEditor$=this.viewer$.pipe((0,i.U)(I=>te(I))),this.isCurator$=this.viewer$.pipe((0,i.U)(I=>se(I))),this.canCurate$=this.viewer$.pipe((0,i.U)(I=>ie(I))),this.canModerate$=this.viewer$.pipe((0,i.U)(I=>V(I)))}signOut(){this.http.get("/api/sign_out").subscribe(K=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return L.\u0275fac=function(K){return new(K||L)(Z.LFG(F.Tt7),Z.LFG(w.eN))},L.\u0275prov=Z.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},6123:(Ee,re,r)=>{r.d(re,{U:()=>F});var i=r(8929),o=r(591),t=r(7625),E=r(537);class F{constructor(w){this.networkErrorService=w}mutate(w,X,O){let L=new i.xQ,G={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{L.next(),L.complete()}};return G.isSubmitting$.next(!0),w.mutate(X).pipe((0,t.R)(L),(0,E.x)(()=>{G.isSubmitting$.next(!1)})).subscribe({next:K=>{K.data&&O&&O(K.data)},error:K=>{K.graphQLErrors.length>0?G.submitError$.next(K.graphQLErrors.map(H=>H.message)):K.networkError&&this.networkErrorService.networkError$.next(K.networkError),G.cleanup()},complete:()=>{G.submitError$.next([]),G.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),G.cleanup()}}),G}}},822:(Ee,re,r)=>{r.d(re,{V:()=>X});var i=r(5e3),o=r(9808),t=r(2359);function E(O,L){if(1&O&&i._UZ(0,"nz-alert",4),2&O){const G=i.oxw();i.Q6J("nzDescription",G.errors[0])}}function F(O,L){if(1&O&&i._UZ(0,"nz-alert",5),2&O){i.oxw();const G=i.MAs(3);i.Q6J("nzDescription",G)}}function Z(O,L){if(1&O&&(i.TgZ(0,"li"),i._uU(1),i.qZA()),2&O){const G=L.$implicit;i.xp6(1),i.Oqu(G)}}function w(O,L){if(1&O&&(i.TgZ(0,"ul",6),i.YNc(1,Z,2,1,"li",7),i.qZA()),2&O){const G=i.oxw();i.xp6(1),i.Q6J("ngForOf",G.errors)}}let X=(()=>{class O{constructor(){}ngOnInit(){}}return O.\u0275fac=function(G){return new(G||O)},O.\u0275cmp=i.Xpm({type:O,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(G,K){1&G&&(i.YNc(0,E,1,1,"nz-alert",0),i.YNc(1,F,1,1,"nz-alert",1),i.YNc(2,w,2,1,"ng-template",2,3,i.W1O)),2&G&&(i.Q6J("ngIf",1===K.errors.length),i.xp6(1),i.Q6J("ngIf",K.errors.length>1))},directives:[o.O5,t.r,o.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),O})()},7008:(Ee,re,r)=>{r.d(re,{B:()=>E});var i=r(9808),o=r(2359),t=r(5e3);let E=(()=>{class F{}return F.\u0275fac=function(w){return new(w||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[i.ez,o.L]]}),F})()},8785:(Ee,re,r)=>{r.d(re,{t:()=>ne});var i=r(5e3),o=r(6123),t=r(8929),E=r(7625),F=r(712),Z=r(9169),w=r(7484),X=r(9808),O=r(2359),L=r(1894),G=r(4546),K=r(822),H=r(7525),le=r(3868),te=r(4182),se=r(6042),ie=r(2643),V=r(2683);function R(q,de){1&q&&i._UZ(0,"nz-alert",7)}function I(q,de){if(1&q&&(i.TgZ(0,"nz-form-item"),i._UZ(1,"cvc-form-errors-alert",8),i.qZA()),2&q){const fe=i.oxw();i.xp6(1),i.Q6J("errors",fe.errorMessages)}}function P(q,de){if(1&q){const fe=i.EpF();i.TgZ(0,"nz-form-item"),i.TgZ(1,"textarea",9),i.NdJ("ngModelChange",function(ue){return i.CHM(fe),i.oxw().coiText=ue}),i.qZA(),i.qZA()}if(2&q){const fe=i.oxw();i.xp6(1),i.Q6J("ngModel",fe.coiText)}}let ne=(()=>{class q{constructor(fe,pe){this.updateCoiGql=fe,this.coiUpdatedEvent=new i.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new o.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return q.\u0275fac=function(fe){return new(fe||q)(i.Y36(F.IP1),i.Y36(Z.Y))},q.\u0275cmp=i.Xpm({type:q,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(fe,pe){1&fe&&(i.TgZ(0,"nz-card"),i.YNc(1,R,1,0,"nz-alert",0),i.YNc(2,I,2,1,"nz-form-item",1),i.TgZ(3,"nz-spin",2),i.TgZ(4,"nz-form-item"),i.TgZ(5,"nz-radio-group",3),i.NdJ("ngModelChange",function(W){return pe.coiStatus=W}),i.TgZ(6,"label",4),i._uU(7,"I do not have any potential conflicts of interest."),i.qZA(),i.TgZ(8,"label",5),i._uU(9,"I do have a potential conflict of interest."),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,P,2,1,"nz-form-item",1),i.TgZ(11,"nz-form-item"),i.TgZ(12,"button",6),i.NdJ("click",function(){return pe.updateCoi()}),i._uU(13," Save Conflict of Interest Statement "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&fe&&(i.xp6(1),i.Q6J("ngIf",pe.success),i.xp6(1),i.Q6J("ngIf",pe.errorMessages.length>0),i.xp6(1),i.Q6J("nzSpinning",pe.loading),i.xp6(2),i.Q6J("ngModel",pe.coiStatus),i.xp6(5),i.Q6J("ngIf","coiPresent"===pe.coiStatus),i.xp6(2),i.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[w.bd,X.O5,O.r,L.SK,G.Nx,K.V,H.W,le.Dg,te.JJ,te.On,le.Of,te.Fj,se.ix,ie.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),q})()},330:(Ee,re,r)=>{r.d(re,{e:()=>K});var i=r(9808),o=r(4182),t=r(6949),E=r(7484),F=r(2359),Z=r(4546),w=r(7008),X=r(3868),O=r(7525),L=r(6042),G=r(5e3);let K=(()=>{class H{}return H.\u0275fac=function(te){return new(te||H)},H.\u0275mod=G.oAB({type:H}),H.\u0275inj=G.cJS({imports:[[i.ez,o.u5,Z.U5,o.UX,t.WG,E.vh,F.L,X.aF,L.sL,O.j,w.B]]}),H})()},712:(Ee,re,r)=>{r.d(re,{ti:()=>Ji,$G1:()=>Ho,iGM:()=>Vo,KNk:()=>tr,T97:()=>rr,RMv:()=>Er,LUc:()=>Lr,iwm:()=>j,Vr2:()=>u,A94:()=>ms,mdl:()=>k,Gbq:()=>si,u4i:()=>oe,ejK:()=>fs,uBv:()=>ze,td:()=>ci,Tq1:()=>Ci,q8c:()=>Pi,WRV:()=>mo,IZ6:()=>vo,qf4:()=>Eo,Rdc:()=>$o,gtM:()=>Sr,fpJ:()=>yr,k2T:()=>vr,UWf:()=>uo,cMj:()=>vs,UIR:()=>ui,E8d:()=>Te,P_b:()=>pi,Mgx:()=>Pe,iST:()=>gi,Kk:()=>hi,OfU:()=>Ge,kQf:()=>no,l4w:()=>ts,JQ3:()=>Ir,db2:()=>Bs,h01:()=>We,wg3:()=>ys,k7O:()=>zi,kv3:()=>qo,R8w:()=>Ye,GB2:()=>Is,Zyn:()=>Ke,dUU:()=>Ti,kq9:()=>He,vRc:()=>ir,Ud2:()=>Di,GYx:()=>jo,AO2:()=>Je,BTF:()=>_i,wJ2:()=>Xe,eY8:()=>Mi,_Aq:()=>ct,pHu:()=>Ss,tI1:()=>tt,Q_P:()=>$r,Sx0:()=>f,Ybm:()=>Ai,Cp0:()=>_,RTy:()=>C,sBY:()=>Es,zBv:()=>lr,kqt:()=>$,Zhw:()=>ar,B0s:()=>Ur,rzy:()=>xi,BQZ:()=>ce,sfv:()=>he,TNk:()=>Ns,rJ8:()=>Ri,FOU:()=>Yr,Q4m:()=>dr,Fvz:()=>mt,cCu:()=>Os,_jb:()=>co,MYm:()=>so,oRL:()=>gt,lfy:()=>mr,fow:()=>ft,X5f:()=>wi,WOS:()=>Ls,Lr0:()=>Fs,Del:()=>$s,xlL:()=>ht,io:()=>Qi,WGV:()=>bs,OHm:()=>Zi,lYz:()=>vt,FKQ:()=>fr,B97:()=>ki,mII:()=>Yo,ghc:()=>Gi,NQC:()=>zt,JDX:()=>lt,VZq:()=>Ki,EwB:()=>Vr,FJi:()=>xt,L5n:()=>eo,rZD:()=>yt,SrV:()=>Ct,Bk6:()=>Us,TiL:()=>fo,yic:()=>It,SJD:()=>Zt,F3s:()=>Tt,jw9:()=>St,g0X:()=>Vs,iXf:()=>On,NbY:()=>Nr,kQl:()=>Dt,LLl:()=>Uo,WFw:()=>Br,tji:()=>as,o71:()=>Et,jMx:()=>qs,A4J:()=>oo,Vj7:()=>br,D9L:()=>Wr,SWk:()=>jr,aw3:()=>is,Xft:()=>ds,mpB:()=>_t,m$d:()=>Hs,IP1:()=>Hr,LiH:()=>js,wbP:()=>qr,sLD:()=>Ys,yqR:()=>Ws,cEv:()=>yo,i44:()=>Nt,vMt:()=>Wo,tJ6:()=>Io,IRu:()=>At,Qzn:()=>Xi,iJT:()=>aa,qP7:()=>l,Qtd:()=>ta,Zo2:()=>So,ROj:()=>rs,FB1:()=>M,q1D:()=>ia,huM:()=>c,ZYZ:()=>Lo,nnL:()=>ls,Bo4:()=>la,ubO:()=>ra,tw_:()=>No,wpb:()=>h,BnY:()=>Fr,_eC:()=>Or,fwG:()=>Oo,zwS:()=>Fo,pP7:()=>b,Tt7:()=>bo,Kmw:()=>Bo});var i=r(655);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var E=r(9245);function F(e,s){for(var y,n=/\r\n|[\n\r]/g,d=1,z=s+1;(y=n.exec(e.body))&&y.index<s;)d+=1,z=s+1-(y.index+y[0].length);return{line:d,column:z}}function Z(e){return w(e.source,F(e.source,e.start))}function w(e,s){var n=e.locationOffset.column-1,d=O(n)+e.body,z=s.line-1,T=s.line+(e.locationOffset.line-1),x=s.column+(1===s.line?n:0),me="".concat(e.name,":").concat(T,":").concat(x,"\n"),Le=d.split(/\r\n|[\n\r]/g),je=Le[z];if(je.length>120){for(var Ot=Math.floor(x/80),Ft=x%80,ke=[],Be=0;Be<je.length;Be+=80)ke.push(je.slice(Be,Be+80));return me+X([["".concat(T),ke[0]]].concat(ke.slice(1,Ot+1).map(function(Rt){return["",Rt]}),[[" ",O(Ft-1)+"^"],["",ke[Ot+1]]]))}return me+X([["".concat(T-1),Le[z-1]],["".concat(T),je],["",O(x-1)+"^"],["".concat(T+1),Le[z+1]]])}function X(e){var s=e.filter(function(d){return void 0!==d[1]}),n=Math.max.apply(Math,s.map(function(d){return d[0].length}));return s.map(function(d){var y=d[1];return function L(e,s){return O(e-s.length)+s}(n,d[0])+(y?" | "+y:" |")}).join("\n")}function O(e){return Array(e+1).join(" ")}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function H(e,s){for(var n=0;n<s.length;n++){var d=s[n];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function ie(e,s){return!s||"object"!==G(s)&&"function"!=typeof s?V(e):s}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){var s="function"==typeof Map?new Map:void 0;return R=function(d){if(null===d||!function ne(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(d))return d;if("function"!=typeof d)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(d))return s.get(d);s.set(d,z)}function z(){return I(d,arguments,de(this).constructor)}return z.prototype=Object.create(d.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),q(z,d)},R(e)}function I(e,s,n){return(I=P()?Reflect.construct:function(z,y,T){var D=[null];D.push.apply(D,y);var me=new(Function.bind.apply(z,D));return T&&q(me,T.prototype),me}).apply(null,arguments)}function P(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function q(e,s){return(q=Object.setPrototypeOf||function(d,z){return d.__proto__=z,d})(e,s)}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(e)}var fe=function(e){!function te(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&q(e,s)}(n,e);var s=function se(e){var s=P();return function(){var z,d=de(e);if(s){var y=de(this).constructor;z=Reflect.construct(d,arguments,y)}else z=d.apply(this,arguments);return ie(this,z)}}(n);function n(d,z,y,T,D,x,me){var Le,je,Ot,Ft,ke;(function K(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),ke=s.call(this,d);var Gt,Be=Array.isArray(z)?0!==z.length?z:void 0:z?[z]:void 0,Rt=y;!Rt&&Be&&(Rt=null===(Gt=Be[0].loc)||void 0===Gt?void 0:Gt.source);var $t,Mt=T;!Mt&&Be&&(Mt=Be.reduce(function(ut,Lt){return Lt.loc&&ut.push(Lt.loc.start),ut},[])),Mt&&0===Mt.length&&(Mt=void 0),T&&y?$t=T.map(function(ut){return F(y,ut)}):Be&&($t=Be.reduce(function(ut,Lt){return Lt.loc&&ut.push(F(Lt.loc.source,Lt.loc.start)),ut},[]));var Pt=me;if(null==Pt&&null!=x){var Wt=x.extensions;(function t(e){return"object"==o(e)&&null!==e})(Wt)&&(Pt=Wt)}return Object.defineProperties(V(ke),{name:{value:"GraphQLError"},message:{value:d,enumerable:!0,writable:!0},locations:{value:null!==(Le=$t)&&void 0!==Le?Le:void 0,enumerable:null!=$t},path:{value:null!=D?D:void 0,enumerable:null!=D},nodes:{value:null!=Be?Be:void 0},source:{value:null!==(je=Rt)&&void 0!==je?je:void 0},positions:{value:null!==(Ot=Mt)&&void 0!==Ot?Ot:void 0},originalError:{value:x},extensions:{value:null!==(Ft=Pt)&&void 0!==Ft?Ft:void 0,enumerable:null!=Pt}}),(null==x?void 0:x.stack)?(Object.defineProperty(V(ke),"stack",{value:x.stack,writable:!0,configurable:!0}),ie(ke)):(Error.captureStackTrace?Error.captureStackTrace(V(ke),n):Object.defineProperty(V(ke),"stack",{value:Error().stack,writable:!0,configurable:!0}),ke)}return function le(e,s,n){s&&H(e.prototype,s),n&&H(e,n)}(n,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var n=0,d=e.nodes;n<d.length;n++){var z=d[n];z.loc&&(s+="\n\n"+Z(z.loc))}else if(e.source&&e.locations)for(var y=0,T=e.locations;y<T.length;y++)s+="\n\n"+w(e.source,T[y]);return s}(this)}},{key:E.YF,get:function(){return"Object"}}]),n}(R(Error));function ue(e,s,n){return new fe("Syntax Error: ".concat(n),void 0,e,[s])}var W=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),Y=r(848),m=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),B=r(6261),A=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),U=r(2032),ye=function(){function e(n){var d=new Y.WU(m.SOF,0,0,0,0,null);this.source=n,this.lastToken=d,this.token=d,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var d=this.token;if(d.kind!==m.EOF)do{var z;d=null!==(z=d.next)&&void 0!==z?z:d.next=_e(this,d)}while(d.kind===m.COMMENT);return d},e}();function De(e){return isNaN(e)?m.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function _e(e,s){for(var n=e.source,d=n.body,z=d.length,y=s.end;y<z;){var T=d.charCodeAt(y),D=e.line,x=1+y-e.lineStart;switch(T){case 65279:case 9:case 32:case 44:++y;continue;case 10:++y,++e.line,e.lineStart=y;continue;case 13:10===d.charCodeAt(y+1)?y+=2:++y,++e.line,e.lineStart=y;continue;case 33:return new Y.WU(m.BANG,y,y+1,D,x,s);case 35:return xe(n,y,D,x,s);case 36:return new Y.WU(m.DOLLAR,y,y+1,D,x,s);case 38:return new Y.WU(m.AMP,y,y+1,D,x,s);case 40:return new Y.WU(m.PAREN_L,y,y+1,D,x,s);case 41:return new Y.WU(m.PAREN_R,y,y+1,D,x,s);case 46:if(46===d.charCodeAt(y+1)&&46===d.charCodeAt(y+2))return new Y.WU(m.SPREAD,y,y+3,D,x,s);break;case 58:return new Y.WU(m.COLON,y,y+1,D,x,s);case 61:return new Y.WU(m.EQUALS,y,y+1,D,x,s);case 64:return new Y.WU(m.AT,y,y+1,D,x,s);case 91:return new Y.WU(m.BRACKET_L,y,y+1,D,x,s);case 93:return new Y.WU(m.BRACKET_R,y,y+1,D,x,s);case 123:return new Y.WU(m.BRACE_L,y,y+1,D,x,s);case 124:return new Y.WU(m.PIPE,y,y+1,D,x,s);case 125:return new Y.WU(m.BRACE_R,y,y+1,D,x,s);case 34:return 34===d.charCodeAt(y+1)&&34===d.charCodeAt(y+2)?ee(n,y,D,x,s,e):N(n,y,D,x,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ve(n,y,T,D,x,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Q(n,y,D,x,s)}throw ue(n,y,Ne(T))}return new Y.WU(m.EOF,z,z,e.line,1+y-e.lineStart,s)}function Ne(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(De(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(De(e),".")}function xe(e,s,n,d,z){var T,y=e.body,D=s;do{T=y.charCodeAt(++D)}while(!isNaN(T)&&(T>31||9===T));return new Y.WU(m.COMMENT,s,D,n,d,z,y.slice(s+1,D))}function Ve(e,s,n,d,z,y){var T=e.body,D=n,x=s,me=!1;if(45===D&&(D=T.charCodeAt(++x)),48===D){if((D=T.charCodeAt(++x))>=48&&D<=57)throw ue(e,x,"Invalid number, unexpected digit after 0: ".concat(De(D),"."))}else x=be(e,x,D),D=T.charCodeAt(x);if(46===D&&(me=!0,D=T.charCodeAt(++x),x=be(e,x,D),D=T.charCodeAt(x)),(69===D||101===D)&&(me=!0,(43===(D=T.charCodeAt(++x))||45===D)&&(D=T.charCodeAt(++x)),x=be(e,x,D),D=T.charCodeAt(x)),46===D||function ge(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(D))throw ue(e,x,"Invalid number, expected digit but got: ".concat(De(D),"."));return new Y.WU(me?m.FLOAT:m.INT,s,x,d,z,y,T.slice(s,x))}function be(e,s,n){var d=e.body,z=s,y=n;if(y>=48&&y<=57){do{y=d.charCodeAt(++z)}while(y>=48&&y<=57);return z}throw ue(e,z,"Invalid number, expected digit but got: ".concat(De(y),"."))}function N(e,s,n,d,z){for(var y=e.body,T=s+1,D=T,x=0,me="";T<y.length&&!isNaN(x=y.charCodeAt(T))&&10!==x&&13!==x;){if(34===x)return me+=y.slice(D,T),new Y.WU(m.STRING,s,T+1,n,d,z,me);if(x<32&&9!==x)throw ue(e,T,"Invalid character within String: ".concat(De(x),"."));if(++T,92===x){switch(me+=y.slice(D,T-1),x=y.charCodeAt(T)){case 34:me+='"';break;case 47:me+="/";break;case 92:me+="\\";break;case 98:me+="\b";break;case 102:me+="\f";break;case 110:me+="\n";break;case 114:me+="\r";break;case 116:me+="\t";break;case 117:var Le=S(y.charCodeAt(T+1),y.charCodeAt(T+2),y.charCodeAt(T+3),y.charCodeAt(T+4));if(Le<0){var je=y.slice(T+1,T+5);throw ue(e,T,"Invalid character escape sequence: \\u".concat(je,"."))}me+=String.fromCharCode(Le),T+=4;break;default:throw ue(e,T,"Invalid character escape sequence: \\".concat(String.fromCharCode(x),"."))}D=++T}}throw ue(e,T,"Unterminated string.")}function ee(e,s,n,d,z,y){for(var T=e.body,D=s+3,x=D,me=0,Le="";D<T.length&&!isNaN(me=T.charCodeAt(D));){if(34===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2))return Le+=T.slice(x,D),new Y.WU(m.BLOCK_STRING,s,D+3,n,d,z,(0,U.W7)(Le));if(me<32&&9!==me&&10!==me&&13!==me)throw ue(e,D,"Invalid character within String: ".concat(De(me),"."));10===me?(++D,++y.line,y.lineStart=D):13===me?(10===T.charCodeAt(D+1)?D+=2:++D,++y.line,y.lineStart=D):92===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2)&&34===T.charCodeAt(D+3)?(Le+=T.slice(x,D)+'"""',x=D+=4):++D}throw ue(e,D,"Unterminated string.")}function S(e,s,n,d){return J(e)<<12|J(s)<<8|J(n)<<4|J(d)}function J(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Q(e,s,n,d,z){for(var y=e.body,T=y.length,D=s+1,x=0;D!==T&&!isNaN(x=y.charCodeAt(D))&&(95===x||x>=48&&x<=57||x>=65&&x<=90||x>=97&&x<=122);)++D;return new Y.WU(m.NAME,s,D,n,d,z,y.slice(s,D))}var Ie=function(){function e(n,d){var z=(0,B.T)(n)?n:new B.H(n);this._lexer=new ye(z),this._options=d}var s=e.prototype;return s.parseName=function(){var d=this.expectToken(m.NAME);return{kind:W.NAME,value:d.value,loc:this.loc(d)}},s.parseDocument=function(){var d=this._lexer.token;return{kind:W.DOCUMENT,definitions:this.many(m.SOF,this.parseDefinition,m.EOF),loc:this.loc(d)}},s.parseDefinition=function(){if(this.peek(m.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(m.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var d=this._lexer.token;if(this.peek(m.BRACE_L))return{kind:W.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(d)};var y,z=this.parseOperationType();return this.peek(m.NAME)&&(y=this.parseName()),{kind:W.OPERATION_DEFINITION,operation:z,name:y,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseOperationType=function(){var d=this.expectToken(m.NAME);switch(d.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(d)},s.parseVariableDefinitions=function(){return this.optionalMany(m.PAREN_L,this.parseVariableDefinition,m.PAREN_R)},s.parseVariableDefinition=function(){var d=this._lexer.token;return{kind:W.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(m.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(m.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(d)}},s.parseVariable=function(){var d=this._lexer.token;return this.expectToken(m.DOLLAR),{kind:W.VARIABLE,name:this.parseName(),loc:this.loc(d)}},s.parseSelectionSet=function(){var d=this._lexer.token;return{kind:W.SELECTION_SET,selections:this.many(m.BRACE_L,this.parseSelection,m.BRACE_R),loc:this.loc(d)}},s.parseSelection=function(){return this.peek(m.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var y,T,d=this._lexer.token,z=this.parseName();return this.expectOptionalToken(m.COLON)?(y=z,T=this.parseName()):T=z,{kind:W.FIELD,alias:y,name:T,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(m.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(d)}},s.parseArguments=function(d){return this.optionalMany(m.PAREN_L,d?this.parseConstArgument:this.parseArgument,m.PAREN_R)},s.parseArgument=function(){var d=this._lexer.token,z=this.parseName();return this.expectToken(m.COLON),{kind:W.ARGUMENT,name:z,value:this.parseValueLiteral(!1),loc:this.loc(d)}},s.parseConstArgument=function(){var d=this._lexer.token;return{kind:W.ARGUMENT,name:this.parseName(),value:(this.expectToken(m.COLON),this.parseValueLiteral(!0)),loc:this.loc(d)}},s.parseFragment=function(){var d=this._lexer.token;this.expectToken(m.SPREAD);var z=this.expectOptionalKeyword("on");return!z&&this.peek(m.NAME)?{kind:W.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(d)}:{kind:W.INLINE_FRAGMENT,typeCondition:z?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseFragmentDefinition=function(){var d,z=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(d=this._options)||void 0===d?void 0:d.experimentalFragmentVariables)?{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}:{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(d){var z=this._lexer.token;switch(z.kind){case m.BRACKET_L:return this.parseList(d);case m.BRACE_L:return this.parseObject(d);case m.INT:return this._lexer.advance(),{kind:W.INT,value:z.value,loc:this.loc(z)};case m.FLOAT:return this._lexer.advance(),{kind:W.FLOAT,value:z.value,loc:this.loc(z)};case m.STRING:case m.BLOCK_STRING:return this.parseStringLiteral();case m.NAME:switch(this._lexer.advance(),z.value){case"true":return{kind:W.BOOLEAN,value:!0,loc:this.loc(z)};case"false":return{kind:W.BOOLEAN,value:!1,loc:this.loc(z)};case"null":return{kind:W.NULL,loc:this.loc(z)};default:return{kind:W.ENUM,value:z.value,loc:this.loc(z)}}case m.DOLLAR:if(!d)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var d=this._lexer.token;return this._lexer.advance(),{kind:W.STRING,value:d.value,block:d.kind===m.BLOCK_STRING,loc:this.loc(d)}},s.parseList=function(d){var z=this,y=this._lexer.token;return{kind:W.LIST,values:this.any(m.BRACKET_L,function(){return z.parseValueLiteral(d)},m.BRACKET_R),loc:this.loc(y)}},s.parseObject=function(d){var z=this,y=this._lexer.token;return{kind:W.OBJECT,fields:this.any(m.BRACE_L,function(){return z.parseObjectField(d)},m.BRACE_R),loc:this.loc(y)}},s.parseObjectField=function(d){var z=this._lexer.token,y=this.parseName();return this.expectToken(m.COLON),{kind:W.OBJECT_FIELD,name:y,value:this.parseValueLiteral(d),loc:this.loc(z)}},s.parseDirectives=function(d){for(var z=[];this.peek(m.AT);)z.push(this.parseDirective(d));return z},s.parseDirective=function(d){var z=this._lexer.token;return this.expectToken(m.AT),{kind:W.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(d),loc:this.loc(z)}},s.parseTypeReference=function(){var z,d=this._lexer.token;return this.expectOptionalToken(m.BRACKET_L)?(z=this.parseTypeReference(),this.expectToken(m.BRACKET_R),z={kind:W.LIST_TYPE,type:z,loc:this.loc(d)}):z=this.parseNamedType(),this.expectOptionalToken(m.BANG)?{kind:W.NON_NULL_TYPE,type:z,loc:this.loc(d)}:z},s.parseNamedType=function(){var d=this._lexer.token;return{kind:W.NAMED_TYPE,name:this.parseName(),loc:this.loc(d)}},s.parseTypeSystemDefinition=function(){var d=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(d.kind===m.NAME)switch(d.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(d)},s.peekDescription=function(){return this.peek(m.STRING)||this.peek(m.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("schema");var y=this.parseDirectives(!0),T=this.many(m.BRACE_L,this.parseOperationTypeDefinition,m.BRACE_R);return{kind:W.SCHEMA_DEFINITION,description:z,directives:y,operationTypes:T,loc:this.loc(d)}},s.parseOperationTypeDefinition=function(){var d=this._lexer.token,z=this.parseOperationType();this.expectToken(m.COLON);var y=this.parseNamedType();return{kind:W.OPERATION_TYPE_DEFINITION,operation:z,type:y,loc:this.loc(d)}},s.parseScalarTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("scalar");var y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.SCALAR_TYPE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("type");var y=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.OBJECT_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseImplementsInterfaces=function(){var d;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLImplementsInterfaces)){var z=[];this.expectOptionalToken(m.AMP);do{z.push(this.parseNamedType())}while(this.expectOptionalToken(m.AMP)||this.peek(m.NAME));return z}return this.delimitedMany(m.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var d;return!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLEmptyFields)&&this.peek(m.BRACE_L)&&this._lexer.lookahead().kind===m.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(m.BRACE_L,this.parseFieldDefinition,m.BRACE_R)},s.parseFieldDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseArgumentDefs();this.expectToken(m.COLON);var D=this.parseTypeReference(),x=this.parseDirectives(!0);return{kind:W.FIELD_DEFINITION,description:z,name:y,arguments:T,type:D,directives:x,loc:this.loc(d)}},s.parseArgumentDefs=function(){return this.optionalMany(m.PAREN_L,this.parseInputValueDef,m.PAREN_R)},s.parseInputValueDef=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName();this.expectToken(m.COLON);var D,T=this.parseTypeReference();this.expectOptionalToken(m.EQUALS)&&(D=this.parseValueLiteral(!0));var x=this.parseDirectives(!0);return{kind:W.INPUT_VALUE_DEFINITION,description:z,name:y,type:T,defaultValue:D,directives:x,loc:this.loc(d)}},s.parseInterfaceTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("interface");var y=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.INTERFACE_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseUnionTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("union");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseUnionMemberTypes();return{kind:W.UNION_TYPE_DEFINITION,description:z,name:y,directives:T,types:D,loc:this.loc(d)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(m.EQUALS)?this.delimitedMany(m.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("enum");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseEnumValuesDefinition();return{kind:W.ENUM_TYPE_DEFINITION,description:z,name:y,directives:T,values:D,loc:this.loc(d)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(m.BRACE_L,this.parseEnumValueDefinition,m.BRACE_R)},s.parseEnumValueDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.ENUM_VALUE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseInputObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("input");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseInputFieldsDefinition();return{kind:W.INPUT_OBJECT_TYPE_DEFINITION,description:z,name:y,directives:T,fields:D,loc:this.loc(d)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(m.BRACE_L,this.parseInputValueDef,m.BRACE_R)},s.parseTypeSystemExtension=function(){var d=this._lexer.lookahead();if(d.kind===m.NAME)switch(d.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(d)},s.parseSchemaExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var z=this.parseDirectives(!0),y=this.optionalMany(m.BRACE_L,this.parseOperationTypeDefinition,m.BRACE_R);if(0===z.length&&0===y.length)throw this.unexpected();return{kind:W.SCHEMA_EXTENSION,directives:z,operationTypes:y,loc:this.loc(d)}},s.parseScalarTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var z=this.parseName(),y=this.parseDirectives(!0);if(0===y.length)throw this.unexpected();return{kind:W.SCALAR_TYPE_EXTENSION,name:z,directives:y,loc:this.loc(d)}},s.parseObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:W.OBJECT_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:D,loc:this.loc(d)}},s.parseInterfaceTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:W.INTERFACE_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:D,loc:this.loc(d)}},s.parseUnionTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseUnionMemberTypes();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.UNION_TYPE_EXTENSION,name:z,directives:y,types:T,loc:this.loc(d)}},s.parseEnumTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseEnumValuesDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.ENUM_TYPE_EXTENSION,name:z,directives:y,values:T,loc:this.loc(d)}},s.parseInputObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseInputFieldsDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.INPUT_OBJECT_TYPE_EXTENSION,name:z,directives:y,fields:T,loc:this.loc(d)}},s.parseDirectiveDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("directive"),this.expectToken(m.AT);var y=this.parseName(),T=this.parseArgumentDefs(),D=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var x=this.parseDirectiveLocations();return{kind:W.DIRECTIVE_DEFINITION,description:z,name:y,arguments:T,repeatable:D,locations:x,loc:this.loc(d)}},s.parseDirectiveLocations=function(){return this.delimitedMany(m.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var d=this._lexer.token,z=this.parseName();if(void 0!==A[z.value])return z;throw this.unexpected(d)},s.loc=function(d){var z;if(!0!==(null===(z=this._options)||void 0===z?void 0:z.noLocation))return new Y.Ye(d,this._lexer.lastToken,this._lexer.source)},s.peek=function(d){return this._lexer.token.kind===d},s.expectToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z;throw ue(this._lexer.source,z.start,"Expected ".concat(Oe(d),", found ").concat(Re(z),"."))},s.expectOptionalToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z},s.expectKeyword=function(d){var z=this._lexer.token;if(z.kind!==m.NAME||z.value!==d)throw ue(this._lexer.source,z.start,'Expected "'.concat(d,'", found ').concat(Re(z),"."));this._lexer.advance()},s.expectOptionalKeyword=function(d){var z=this._lexer.token;return z.kind===m.NAME&&z.value===d&&(this._lexer.advance(),!0)},s.unexpected=function(d){var z=null!=d?d:this._lexer.token;return ue(this._lexer.source,z.start,"Unexpected ".concat(Re(z),"."))},s.any=function(d,z,y){this.expectToken(d);for(var T=[];!this.expectOptionalToken(y);)T.push(z.call(this));return T},s.optionalMany=function(d,z,y){if(this.expectOptionalToken(d)){var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T}return[]},s.many=function(d,z,y){this.expectToken(d);var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T},s.delimitedMany=function(d,z){this.expectOptionalToken(d);var y=[];do{y.push(z.call(this))}while(this.expectOptionalToken(d));return y},e}();function Re(e){var s=e.value;return Oe(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function Oe(e){return function Se(e){return e===m.BANG||e===m.DOLLAR||e===m.AMP||e===m.PAREN_L||e===m.PAREN_R||e===m.SPREAD||e===m.COLON||e===m.EQUALS||e===m.AT||e===m.BRACKET_L||e===m.BRACKET_R||e===m.BRACE_L||e===m.PIPE||e===m.BRACE_R}(e)?'"'.concat(e,'"'):e}var we=new Map,ve=new Map,Ue=!0,Me=!1;function $e(e){return e.replace(/[\s,]+/g," ").trim()}function ot(e){var s=$e(e);if(!we.has(s)){var n=function Ce(e,s){return new Ie(e,s).parseDocument()}(e,{experimentalFragmentVariables:Me,allowLegacyFragmentVariables:Me});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");we.set(s,function et(e){var s=new Set(e.definitions);s.forEach(function(d){d.loc&&delete d.loc,Object.keys(d).forEach(function(z){var y=d[z];y&&"object"==typeof y&&s.add(y)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function it(e){var s=new Set,n=[];return e.definitions.forEach(function(d){if("FragmentDefinition"===d.kind){var z=d.name.value,y=function nt(e){return $e(e.source.body.substring(e.start,e.end))}(d.loc),T=ve.get(z);T&&!T.has(y)?Ue&&console.warn("Warning: fragment with name "+z+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):T||ve.set(z,T=new Set),T.add(y),s.has(y)||(s.add(y),n.push(d))}else n.push(d)}),(0,i.pi)((0,i.pi)({},e),{definitions:n})}(n)))}return we.get(s)}function v(e){for(var s=[],n=1;n<arguments.length;n++)s[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var d=e[0];return s.forEach(function(z,y){d+=z&&"Document"===z.kind?z.loc.source.body:z,d+=e[y+1]}),ot(d)}var e,Qe_gql=v;(e=v||(v={})).gql=Qe_gql,e.resetCaches=function rt(){we.clear(),ve.clear()},e.disableFragmentWarnings=function st(){Ue=!1},e.enableExperimentalFragmentVariables=function at(){Me=!0},e.disableExperimentalFragmentVariables=function dt(){Me=!1},v.default=v;var p=r(9298),a=r(5e3),j=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(j||(j={})),j))(),u=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(u||(u={})),u))(),k=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(k||(k={})),k))(),oe=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(oe||(oe={})),oe))(),ze=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(ze||(ze={})),ze))(),Te=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Te||(Te={})),Te))(),Pe=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Pe||(Pe={})),Pe))(),Ge=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Ge||(Ge={})),Ge))(),We=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(We||(We={})),We))(),Ye=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Ye||(Ye={})),Ye))(),Ke=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(Ke||(Ke={})),Ke))(),He=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(He||(He={})),He))(),Je=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Je||(Je={})),Je))(),Xe=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(Xe||(Xe={})),Xe))(),ct=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(ct||(ct={})),ct))(),tt=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(tt||(tt={})),tt))(),f=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(f||(f={})),f))(),_=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(_||(_={})),_))(),C=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(C||(C={})),C))(),$=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}($||($={})),$))(),ce=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(ce||(ce={})),ce))(),he=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(he||(he={})),he))(),mt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(vt||(vt={})),vt))(),zt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(zt||(zt={})),zt))(),lt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(lt||(lt={})),lt))(),xt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(xt||(xt={})),xt))(),yt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Ct||(Ct={})),Ct))(),It=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(It||(It={})),It))(),Tt=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Tt||(Tt={})),Tt))(),St=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(St||(St={})),St))(),Dt=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Dt||(Dt={})),Dt))(),Et=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Et||(Et={})),Et))(),_t=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(_t||(_t={})),_t))(),Nt=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Nt||(Nt={})),Nt))(),At=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(At||(At={})),At))(),l=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(l||(l={})),l))(),M=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(M||(M={})),M))(),c=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(c||(c={})),c))(),h=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(h||(h={})),h))(),b=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(b||(b={})),b))();const ae=v`
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
    `,qe=v`
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
  nccnGuideline @include(if: $cardView)
  variantOrigin @include(if: $cardView)
}
    `,bt=v`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ut=v`
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
    `,Jt=v`
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
    `,jt=v`
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
    `,Kt=v`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,Qt=v`
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
    `,Ht=v`
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
    ${Qt}`,Xt=v`
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
    `,qt=v`
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
    `,tn=v`
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
    `}`,nn=v`
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
    `,on=v`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,rn=v`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,sn=v`
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
    `,an=v`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,cn=v`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,ln=v`
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
    `,un=v`
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
    `,dn=v`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,pn=v`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,mn=v`
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
    `,gn=v`
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
  link
}
    `,hn=v`
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
    `,vn=v`
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
    `,zn=v`
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
    `,yn=v`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Cn=v`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,In=v`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Tn=v`
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
    `,Sn=v`
    fragment menuVariant on Variant {
  id
  name
}
    `,Dn=v`
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
    `,En=v`
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
    `,Nn=v`
    fragment EvidenceTransferSearchFields on EvidenceItem {
  id
  name
}
    `,An=v`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Vt=v`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Zt=v`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,On=v`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Yt=v`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Mn=v`
    fragment AddVariantFields on AddVariantPayload {
  new
  variant {
    id
    name
  }
}
    `,Ln=(v`
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
    `),xn=v`
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
    `,Fn=v`
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
    `,Rn=v`
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
    `,Pn=v`
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
    `}`,bn=v`
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
    `,Gn=v`
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
    `,Bn=v`
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
    `,wn=v`
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
    `,Un=v`
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
    `,Qn=v`
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
    `,Vn=v`
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
    `,Zn=v`
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
    `,Yn=v`
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
    `,kn=v`
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
    `,Wn=v`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Jn=v`
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
    `,jn=v`
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
    `,Kn=v`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Hn=v`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Xn=v`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,kt=v`
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
    ${Qt}`,qn=v`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,ei=v`
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
    `,ti=v`
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
    `,ni=v`
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
    `,oi=v`
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
    `}`,ri=v`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ae}`;let si=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ri}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ai=v`
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
    ${qe}`;let ci=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ai}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const li=v`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${bt}`;let ui=(()=>{class e extends p.AE{constructor(n){super(n),this.document=li}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const di=v`
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
        link
      }
    }
  }
}
    `;let pi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=di}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mi=v`
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
    ${Ut}`;let gi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=mi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=v`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Jt}`;let hi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vi=v`
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
    `;let zi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yi=v`
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
    ${jt}`;let Ci=(()=>{class e extends p.AE{constructor(n){super(n),this.document=yi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ii=v`
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
    `;let Ti=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ii}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=v`
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
    ${Kt}`;let Di=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Si}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=v`
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
    ${Ht}`;let _i=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ei}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ni=v`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Xt}`;let Ai=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ni}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oi=v`
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
    ${qt}`;let Mi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Oi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Li=v`
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
    ${tn}`;let xi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Li}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fi=v`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${nn}`;let Ri=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=v`
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
    `;let Pi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=$i}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=v`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${on}`;let Gi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=bi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bi=v`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${rn}`;let wi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Bi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ui=v`
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
    ${sn}`;let Qi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ui}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vi=v`
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
    `;let Zi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Vi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yi=v`
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
    ${an}`;let ki=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Yi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wi=v`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ji=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Wi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ji=v`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ki=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ji}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hi=v`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${cn}`;let Xi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Hi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qi=v`
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
    ${ln}`;let eo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=qi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const to=v`
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
    ${un}`;let no=(()=>{class e extends p.AE{constructor(n){super(n),this.document=to}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const io=v`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${dn}`;let oo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=io}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ro=v`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let so=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ro}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ao=v`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let co=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ao}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lo=v`
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
    ${pn}`;let uo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=lo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const po=v`
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
    ${mn}`;let mo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=po}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const go=v`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${gn}`;let fo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=go}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ho=v`
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
    ${fn}`;let vo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ho}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zo=v`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${hn}`;let yo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=zo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Co=v`
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
    ${vn}`;let Io=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Co}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const To=v`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${zn}`;let So=(()=>{class e extends p.AE{constructor(n){super(n),this.document=To}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Do=v`
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
    ${yn}`;let Eo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Do}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=v`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Cn}`;let No=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_o}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ao=v`
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
    ${In}`;let Oo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ao}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mo=v`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Tn}`;let Lo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Mo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xo=v`
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
    ${Sn}`;let Fo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=xo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=v`
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
    `;let $o=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ro}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Po=v`
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
    `;let bo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Po}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Go=v`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Bo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Go}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=v`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Uo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=wo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qo=v`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Ut}`;let Vo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Qo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zo=v`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Dn}`;let Yo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Zo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=v`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Wo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ko}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Jo=v`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let jo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Jo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ko=v`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Ho=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ko}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xo=v`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let qo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Xo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const er=v`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${En}`;let tr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=er}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const nr=v`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let ir=(()=>{class e extends p.AE{constructor(n){super(n),this.document=nr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const or=v`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${_n}`;let rr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=or}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const sr=v`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let ar=(()=>{class e extends p.AE{constructor(n){super(n),this.document=sr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const cr=v`
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
    ${Nn}`;let lr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=cr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ur=v`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${An}`;let dr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ur}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pr=v`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let mr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=pr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gr=v`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let fr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=gr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hr=v`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Vt}`;let vr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=hr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zr=v`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let yr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=zr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cr=v`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Ir=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Cr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Tr=v`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Sr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Tr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dr=v`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Zt}`;let Er=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Dr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=v`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Vt}`;let Nr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_r}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ar=v`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Yt}`;let Or=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ar}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mr=v`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Mn}`;let Lr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Mr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Yt}`;const xr=v`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let Fr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=xr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rr=v`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Ln}`;let $r=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pr=v`
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
    `;let br=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Pr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${xn}`;const Gr=v`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Br=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Gr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=v`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Ur=(()=>{class e extends p.mm{constructor(n){super(n),this.document=wr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qr=v`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Vr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Qr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zr=v`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Fn}`;let Yr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Zr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kr=v`
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
    `;let Wr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=kr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Jr=v`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let jr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Jr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Kr=v`
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
    `;let Hr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Kr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xr=v`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let qr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Xr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const es=v`
    query Countries {
  countries {
    id
    name
  }
}
    `;let ts=(()=>{class e extends p.AE{constructor(n){super(n),this.document=es}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ns=v`
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
    `;let is=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ns}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const os=v`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Rn}`;let rs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=os}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ss=v`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let as=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ss}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const cs=v`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Pn}`;let ls=(()=>{class e extends p.AE{constructor(n){super(n),this.document=cs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const us=v`
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
    `;let ds=(()=>{class e extends p.mm{constructor(n){super(n),this.document=us}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ps=v`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${bn}`;let ms=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ps}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gs=v`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Gn}`;let fs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=gs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hs=v`
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
    `;let vs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=hs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zs=v`
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
    `;let ys=(()=>{class e extends p.AE{constructor(n){super(n),this.document=zs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cs=v`
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
    `;let Is=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Cs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ts=v`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Bn}`;let Ss=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ts}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ds=v`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${wn}`;let Es=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ds}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=v`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Un}`;let Ns=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_s}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const As=v`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Qn}`;let Os=(()=>{class e extends p.AE{constructor(n){super(n),this.document=As}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ms=v`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Vn}`;let Ls=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ms}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xs=v`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Zn}`;let Fs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=xs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rs=v`
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
    ${Yn}`;let $s=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ps=v`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let bs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ps}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gs=v`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${kn}`;let Bs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Gs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=v`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Wn}`;let Us=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ws}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qs=v`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Jn}`;let Vs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Qs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zs=v`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${jn}`;let Ys=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Zs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ks=v`
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
    ${Xn}
${Hn}
${Kn}
${kt}`;let Ws=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ks}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Js=v`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${kt}`;let js=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Js}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ks=v`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${qn}`;let Hs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ks}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xs=v`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let qs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Xs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ea=v`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${ei}`;let ta=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ea}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
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
    `;const na=v`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${ti}`;let ia=(()=>{class e extends p.AE{constructor(n){super(n),this.document=na}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oa=v`
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
    `;let ra=(()=>{class e extends p.AE{constructor(n){super(n),this.document=oa}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const sa=v`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${ni}`;let aa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=sa}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ca=v`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${oi}`;let la=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ca}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(Ee,re,r)=>{r.r(re),r.d(re,{LayoutModule:()=>At});var i=r(9808),o=r(325),t=r(5e3),E=r(9350),F=r(8929),Z=r(7625),w=r(655),X=r(4090),O=r(1721),L=r(4219),G=r(925),K=r(647),H=r(226),le=r(5113);const te=["*"],se=["nz-sider-trigger",""];function ie(l,M){}function V(l,M){if(1&l&&(t.ynx(0),t.YNc(1,ie,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||h)}}function R(l,M){}function I(l,M){if(1&l&&(t.ynx(0),t.YNc(1,R,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||h)}}function P(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function ne(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function q(l,M){if(1&l&&(t.YNc(0,P,1,1,"i",4),t.YNc(1,ne,1,1,"i",4)),2&l){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function de(l,M){1&l&&t._UZ(0,"i",6)}function fe(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.setCollapsed(!b.nzCollapsed)}),t.qZA()}if(2&l){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),W=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),Y=(()=>{class l{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,h){2&c&&(t.Udp("width",h.isNormalTrigger?h.siderWidth:null),t.ekj("ant-layout-sider-trigger",h.isNormalTrigger)("ant-layout-sider-zero-width-trigger",h.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",h.isZeroTrigger&&h.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",h.isZeroTrigger&&!h.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:se,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,h){1&c&&(t.YNc(0,V,2,1,"ng-container",0),t.YNc(1,I,2,1,"ng-container",0),t.YNc(2,q,2,2,"ng-template",null,1,t.W1O),t.YNc(4,de,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",h.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",h.isNormalTrigger))},directives:[i.O5,i.tP,K.Ls],encapsulation:2,changeDetection:0}),l})(),m=(()=>{class l{constructor(c,h,b){this.platform=c,this.cdr=h,this.breakpointService=b,this.destroy$=new F.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,O.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(X.ow,!0).pipe((0,Z.R)(this.destroy$)).subscribe(c=>{const h=this.nzBreakpoint;h&&(0,O.ov)().subscribe(()=>{this.matchBreakPoint=!c[h],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:h,nzCollapsedWidth:b,nzWidth:ae}=c;(h||b||ae)&&this.updateStyleMap(),h&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(G.t4),t.Y36(t.sBO),t.Y36(X.r3))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-sider"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,L.wO,5),2&c){let ae;t.iGM(ae=t.CRH())&&(h.nzMenuDirective=ae.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,h){2&c&&(t.Udp("flex",h.flexSetting)("max-width",h.widthSetting)("min-width",h.widthSetting)("width",h.widthSetting),t.ekj("ant-layout-sider-zero-width",h.nzCollapsed&&0===h.nzCollapsedWidth)("ant-layout-sider-light","light"===h.nzTheme)("ant-layout-sider-dark","dark"===h.nzTheme)("ant-layout-sider-collapsed",h.nzCollapsed)("ant-layout-sider-has-trigger",h.nzCollapsible&&null!==h.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:te,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,fe,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",h.nzCollapsible&&null!==h.nzTrigger))},directives:[Y,i.O5],encapsulation:2,changeDetection:0}),(0,w.gn)([(0,O.yF)()],l.prototype,"nzReverseArrow",void 0),(0,w.gn)([(0,O.yF)()],l.prototype,"nzCollapsible",void 0),(0,w.gn)([(0,O.yF)()],l.prototype,"nzCollapsed",void 0),l})(),B=(()=>{class l{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new F.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(H.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-layout"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,m,4),2&c){let ae;t.iGM(ae=t.CRH())&&(h.listOfNzSiderComponent=ae)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,h){2&c&&t.ekj("ant-layout-rtl","rtl"===h.dir)("ant-layout-has-sider",h.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),A=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,i.ez,K.PV,le.xu,G.ud]]}),l})();var U=r(404),ye=r(1894),Se=r(712),De=r(373),_e=r(1047),Ne=r(4182),xe=r(2845),Ve=r(4832),be=r(969),N=r(3753),ee=r(2654),S=r(8514),J=r(6787),Q=r(2198),ge=r(2868),Ce=r(6792),Ae=r(2986),Fe=r(7545),Ie=r(1159),Re=r(7429),Oe=r(8076);function we(l,M){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const ve=[[["nz-auto-option"]]],Ue=["nz-auto-option"],Me=["*"],$e=["panel"],nt=["content"];function it(l,M){}function et(l,M){1&l&&t.YNc(0,it,0,0,"ng-template")}function ot(l,M){1&l&&t.Hsn(0)}function v(l,M){if(1&l&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&l){const c=M.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function rt(l,M){if(1&l&&t.YNc(0,v,2,3,"nz-auto-option",7),2&l){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function st(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(b){return t.CHM(c),t.oxw().onAnimationEvent(b)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,et,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&l){const c=t.MAs(6),h=t.MAs(8),b=t.oxw();t.ekj("ant-select-dropdown-hidden",!b.showPanel)("ant-select-dropdown-rtl","rtl"===b.dir),t.Q6J("ngClass",b.nzOverlayClassName)("ngStyle",b.nzOverlayStyle)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",b.nzDataSource?h:c)}}let at=(()=>{class l{constructor(){}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ue,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,h){1&c&&(t.F$t(ve),t.TgZ(0,"div",0),t.YNc(1,we,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",h.nzLabel))},directives:[be.f],encapsulation:2,changeDetection:0}),l})();class dt{constructor(M,c=!1){this.source=M,this.isUserInput=c}}let Qe=(()=>{class l{constructor(c,h,b,ae){this.ngZone=c,this.changeDetectorRef=h,this.element=b,this.nzAutocompleteOptgroupComponent=ae,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new F.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,N.R)(this.element.nativeElement,"mouseenter").pipe((0,Q.h)(()=>this.mouseEntered.observers.length>0),(0,Z.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,N.R)(this.element.nativeElement,"mousedown").pipe((0,Z.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,O.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new dt(this,c))}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(at,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,h){1&c&&t.NdJ("click",function(){return h.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",h.selected.toString())("aria-disabled",h.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",h.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",h.selected)("ant-select-item-option-active",h.active)("ant-select-item-option-disabled",h.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Me,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,w.gn)([(0,O.yF)()],l.prototype,"nzDisabled",void 0),l})();const pt={provide:Ne.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class l{constructor(c,h,b,ae,qe){this.elementRef=c,this.overlay=h,this.viewContainerRef=b,this.nzInputGroupWhitSuffixOrPrefixDirective=ae,this.document=qe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new F.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,Z.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const h=c.keyCode,b=h===Ie.LH||h===Ie.JH;h===Ie.hY&&c.preventDefault(),!this.panelOpen||h!==Ie.hY&&h!==Ie.Mf?this.panelOpen&&h===Ie.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&b&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),h===Ie.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const h=c.target,b=this.document;let ae=h.value;"number"===h.type&&(ae=""===ae?null:parseFloat(ae)),this.previousValue!==ae&&(this.previousValue=ae,this.onChange(ae),this.canOpen()&&b.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,ge.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Ce.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,Q.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function p(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Re.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new xe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new xe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new xe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const h=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(h),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const h=this.nzAutocomplete.getOption(c),b=h?h.getLabel():c;this.elementRef.nativeElement.value=null!=b?b:"",this.nzAutocomplete.nzBackfill||(this.previousValue=b)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(xe.aV),t.Y36(t.s_b),t.Y36(_e.ke,8),t.Y36(i.K0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,h){1&c&&t.NdJ("focusin",function(){return h.handleFocus()})("blur",function(){return h.handleBlur()})("input",function(ae){return h.handleInput(ae)})("keydown",function(ae){return h.handleKeydown(ae)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),l})(),j=(()=>{class l{constructor(c,h,b,ae){this.changeDetectorRef=c,this.ngZone=h,this.directionality=b,this.noAnimation=ae,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(qe,bt)=>qe===bt,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new F.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ee.w.EMPTY,this.optionMouseEnterSubscription=ee.w.EMPTY,this.dataSourceChangeSubscription=ee.w.EMPTY,this.optionSelectionChanges=(0,S.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Fe.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,S.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Fe.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const h=this.options.get(c);h&&!h.active?(this.activeItem=h,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((h,b,ae)=>-1===h?this.compareWith(c,b.nzValue)?ae:-1:h,-1)}getOption(c){return this.options.find(h=>this.compareWith(c,h.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(h=>{!h.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,h=!1){this.options.forEach(b=>{b!==c&&(h&&b.deselect(),b.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,Q.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(H.Is,8),t.Y36(Ve.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-autocomplete"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,Qe,5),2&c){let ae;t.iGM(ae=t.CRH())&&(h.fromContentOptions=ae)}},viewQuery:function(c,h){if(1&c&&(t.Gf(t.Rgc,5),t.Gf($e,5),t.Gf(nt,5),t.Gf(Qe,5)),2&c){let b;t.iGM(b=t.CRH())&&(h.template=b.first),t.iGM(b=t.CRH())&&(h.panel=b.first),t.iGM(b=t.CRH())&&(h.content=b.first),t.iGM(b=t.CRH())&&(h.fromDataSourceOptions=b)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Me,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,h){1&c&&(t.F$t(),t.YNc(0,st,9,10,"ng-template"))},directives:[Qe,i.mk,i.PC,Ve.P,i.tP,i.sg],encapsulation:2,data:{animation:[Oe.mF]},changeDetection:0}),(0,w.gn)([(0,O.yF)()],l.prototype,"nzDefaultActiveFirstOption",void 0),(0,w.gn)([(0,O.yF)()],l.prototype,"nzBackfill",void 0),l})(),g=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,i.ez,xe.U8,Ne.u5,be.T,Ve.g,_e.o7]]}),l})();var u=r(6949);function k(l,M){1&l&&t._UZ(0,"i",5)}function oe(l,M){if(1&l){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.searchQuery="",b.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._UZ(5,"span",9),t._UZ(6,"br"),t._UZ(7,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&l){const c=M.$implicit,h=t.oxw();t.xp6(1),t.Q6J("routerLink",h.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",h.urlForResult(c)),t.xp6(2),t.Q6J("nzType",h.iconNameForResult(c)),t.xp6(1),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let ze=(()=>{class l{constructor(c,h){this.gql=c,this.router=h,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,De.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case Se.rZD.EvidenceItem:return"civic:evidence";case Se.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let h;switch(c.resultType){case Se.rZD.VariantGroup:h="variant-groups";break;case Se.rZD.EvidenceItem:h="evidence";break;default:h=`${c.resultType.toLowerCase()}s`}return`/${h}/${c.id}/summary`}quicksearchSelected(c){let h=c.target.value;this.searchQuery="",this.router.navigate([h])}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(Se.ghc),t.Y36(o.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,h){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(ae){return h.searchQuery=ae})("ngModelChange",function(){return h.refresh()})("keyup.enter",function(ae){return h.quicksearchSelected(ae)}),t.qZA(),t.qZA(),t.YNc(2,k,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,oe,8,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const b=t.MAs(3),ae=t.MAs(5);t.Q6J("nzSuffix",b),t.xp6(1),t.Q6J("ngModel",h.searchQuery)("nzAutocomplete",ae),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,h.searchResults$))}},directives:[_e.gB,_e.ke,_e.Zp,Ne.Fj,a,Ne.JJ,Ne.On,K.Ls,j,i.sg,o.yS,Qe],pipes:[u.fM],styles:[""]}),l})();var Ze=r(1912),Te=r(4850),Pe=r(1059),Ge=r(8144),We=r(4401),Ye=r(3677),Ke=r(7881),He=r(3640),Je=r(8785);function Xe(l,M){if(1&l&&(t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"i",10),t._UZ(3,"nz-badge",11),t.qZA(),t.BQk()),2&l){const c=M.ngrxLet;t.xp6(1),t.MGl("nzTooltipTitle","You have ",c," unread notification(s)."),t.xp6(2),t.Q6J("nzShowDot",c>0)}}function ct(l,M){if(1&l&&(t.TgZ(0,"a",7),t.YNc(1,Xe,4,2,"ng-container",8),t.qZA()),2&l){const c=t.oxw().ngIf,h=t.oxw();t.MGl("routerLink","/users/",c.id,"/notifications"),t.xp6(1),t.Q6J("ngrxLet",h.unreadCount$)}}function tt(l,M){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"i",13),t._UZ(2,"i",14),t.TgZ(3,"nz-dropdown-menu",null,15),t.TgZ(5,"ul",16),t.TgZ(6,"li",17),t.TgZ(7,"a",18),t._uU(8," Add Evidence "),t.qZA(),t.qZA(),t.TgZ(9,"li",17),t.TgZ(10,"a",19),t._uU(11," Add Assertion "),t.qZA(),t.qZA(),t.TgZ(12,"li",17),t.TgZ(13,"a",20),t._uU(14," Suggest Source "),t.qZA(),t.qZA(),t.TgZ(15,"li",17),t.TgZ(16,"a",21),t._uU(17," Add Variant Group "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const c=t.MAs(4);t.Q6J("nzDropdownMenu",c)}}function f(l,M){1&l&&t._UZ(0,"nz-badge",29),2&l&&t.Q6J("nzShowDot",!0)}function _(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"li",28),t.NdJ("click",function(){return t.CHM(c),t.oxw(3).coiUpdateModalVisible=!0}),t.TgZ(1,"nz-badge",30),t.TgZ(2,"strong"),t._uU(3," Please provide an updated conflict of interest statement. "),t.qZA(),t.qZA(),t.qZA()}2&l&&(t.xp6(1),t.Q6J("nzShowDot",!0))}function C(l,M){1&l&&(t.TgZ(0,"li",17),t.TgZ(1,"a",31),t._uU(2," Admin Console "),t.qZA(),t.qZA())}function $(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"cvc-user-avatar",22),t._UZ(2,"i",14),t.YNc(3,f,1,1,"nz-badge",23),t.TgZ(4,"nz-dropdown-menu",null,24),t.TgZ(6,"ul",16),t.TgZ(7,"li",17),t._uU(8,"Signed In as\xa0"),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t._UZ(11,"li",25),t.YNc(12,_,4,1,"li",26),t.TgZ(13,"li",17),t.TgZ(14,"a",7),t._uU(15," Your Profile "),t.qZA(),t.qZA(),t.YNc(16,C,3,0,"li",27),t._UZ(17,"li",25),t.TgZ(18,"li",28),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).signOut()}),t._uU(19,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const c=t.MAs(5),h=t.oxw().ngIf;t.Q6J("nzDropdownMenu",c),t.xp6(1),t.Q6J("user",h),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(7),t.Oqu(h.username),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(2),t.MGl("routerLink","/users/",h.id,""),t.xp6(2),t.Q6J("ngIf",h.isAdmin)}}function ce(l,M){1&l&&(t.ynx(0),t.TgZ(1,"nz-space",4),t.YNc(2,ct,2,2,"a",5),t.YNc(3,tt,18,1,"div",6),t.YNc(4,$,20,7,"div",6),t.qZA(),t.BQk())}function he(l,M){1&l&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function mt(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"cvc-user-coi-form",32),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let Bt=(()=>{class l{constructor(c,h){this.queryService=c,this.unreadCountGql=h,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Te.U)(({data:b})=>b.notifications.unreadCount),(0,Pe.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a),t.Y36(Se.Kmw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink",4,"nzSpaceItem"],["class","topMenuIcon","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"routerLink"],[4,"ngrxLet"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(c,h){if(1&c&&(t.YNc(0,ce,5,0,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return h.coiUpdateModalVisible=ae})("nzOnCancel",function(){return h.handleCoiModalCancel()}),t.YNc(3,he,2,0,"ng-template",null,2,t.W1O),t.YNc(5,mt,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const b=t.MAs(4),ae=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,h.viewer$)),t.xp6(2),t.Q6J("nzVisible",h.coiUpdateModalVisible)("nzContent",ae)("nzTitle",b)("nzFooter",null)}},directives:[i.O5,Ge.NU,Ge.$1,o.yS,u.eJ,U.SY,K.Ls,We.x7,Ye.cm,Ye.RR,L.wO,L.r9,Ke.L,L.YV,He.du,Je.t],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),l})();function gt(l,M){1&l&&t._UZ(0,"img",66)}function ft(l,M){1&l&&t._UZ(0,"img",67)}function ht(l,M){1&l&&t._UZ(0,"img",68)}function vt(l,M){1&l&&t._UZ(0,"cvc-login-button")}function zt(l,M){1&l&&t._UZ(0,"cvc-viewer-button")}const lt=function(l){return{"is-collapsed":l}},yt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class l{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-layout"]],decls:141,vars:45,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"menu-group",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","file-add"],["routerLink","/source-suggestions"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-revision"],["routerLink","/revisions"],["nz-icon","","nzType","civic-comment"],["routerLink","/comments"],["nz-icon","","nzType","civic-flag"],["routerLink","/flags"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],["nz-row","","nzJustify","center","nzAlign","bottom"],["nz-col",""],["href","https://creativecommons.org/publicdomain/zero/1.0/","target","_blank"],["width","100","src","assets/images/cc-zero.png","alt","CC0 1.0 Universal (CC0 1.0) Public Domain Dedication Logo",4,"ngIf"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["href","https://civic.readthedocs.io/en/latest/about.html","target","_blank"],["href","https://civic.readthedocs.io/en/latest/help.html","target","_blank"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["width","100","src","assets/images/cc-zero.png","alt","CC0 1.0 Universal (CC0 1.0) Public Domain Dedication Logo"]],template:function(c,h){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(ae){return h.isCollapsed=ae}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,gt,1,0,"img",4),t.YNc(5,ft,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t._UZ(8,"i",8),t.TgZ(9,"span"),t.TgZ(10,"a",9),t._uU(11,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"li",7),t._UZ(13,"i",10),t.TgZ(14,"span"),t.TgZ(15,"a",11),t._uU(16,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"li",7),t._UZ(18,"i",12),t.TgZ(19,"span"),t.TgZ(20,"a",13),t._uU(21,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"li",7),t._UZ(23,"i",14),t.TgZ(24,"span"),t.TgZ(25,"a",15),t._uU(26,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"li",7),t._UZ(28,"i",16),t.TgZ(29,"span"),t.TgZ(30,"a",17),t._uU(31,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ul",6),t.TgZ(33,"li",7),t._UZ(34,"i",18),t.TgZ(35,"span"),t.TgZ(36,"a",19),t._uU(37,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"li",7),t._UZ(39,"i",20),t.TgZ(40,"span"),t.TgZ(41,"a",21),t._uU(42,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"li",7),t._UZ(44,"i",22),t.TgZ(45,"span"),t.TgZ(46,"a",23),t._uU(47,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"li",7),t._UZ(49,"i",24),t.TgZ(50,"span"),t.TgZ(51,"a",25),t._uU(52,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"li",7),t._UZ(54,"i",26),t.TgZ(55,"span"),t.TgZ(56,"a",27),t._uU(57,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"li",7),t._UZ(59,"i",28),t.TgZ(60,"span"),t.TgZ(61,"a",29),t._uU(62,"Source Suggestions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"li",7),t._UZ(64,"i",30),t.TgZ(65,"span"),t.TgZ(66,"a",31),t._uU(67,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"ul",6),t.TgZ(69,"li",7),t._UZ(70,"i",32),t.TgZ(71,"span"),t.TgZ(72,"a",33),t._uU(73,"Revisions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"li",7),t._UZ(75,"i",34),t.TgZ(76,"span"),t.TgZ(77,"a",35),t._uU(78,"Comments"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"li",7),t._UZ(80,"i",36),t.TgZ(81,"span"),t.TgZ(82,"a",37),t._uU(83,"Flags"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(84,"ul",6),t.TgZ(85,"li",7),t._UZ(86,"i",38),t.TgZ(87,"span"),t.TgZ(88,"a",39),t._uU(89,"Community"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"li",7),t._UZ(91,"i",40),t.TgZ(92,"span"),t.TgZ(93,"a",41),t._uU(94,"Users"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"li",7),t._UZ(96,"i",42),t.TgZ(97,"span"),t.TgZ(98,"a",43),t._uU(99,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(100,"ul",6),t.TgZ(101,"li",7),t._UZ(102,"i",44),t.TgZ(103,"span"),t.TgZ(104,"a",45),t._uU(105,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"li",7),t._UZ(107,"i",46),t.TgZ(108,"span"),t.TgZ(109,"a",47),t._uU(110,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(111,"div",48),t.TgZ(112,"div",49),t.TgZ(113,"a",50),t.YNc(114,ht,1,0,"img",51),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(115,"nz-layout",52),t.TgZ(116,"nz-header"),t.TgZ(117,"div",53),t.TgZ(118,"div",54),t.TgZ(119,"span",55),t.NdJ("click",function(){return h.isCollapsed=!h.isCollapsed}),t._UZ(120,"i",56),t.qZA(),t.qZA(),t.TgZ(121,"div",57),t._UZ(122,"cvc-quicksearch"),t.qZA(),t.TgZ(123,"div",58),t.TgZ(124,"ul",59),t.TgZ(125,"li",60),t.TgZ(126,"a",61),t._uU(127,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(128,"li",60),t.TgZ(129,"a",62),t._uU(130,"Help"),t.qZA(),t.qZA(),t.TgZ(131,"li",60),t.TgZ(132,"a",63),t._uU(133,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(134,"div",64),t.YNc(135,vt,1,0,"cvc-login-button",65),t.ALo(136,"async"),t.YNc(137,zt,1,0,"cvc-viewer-button",65),t.ALo(138,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(139,"nz-content"),t._UZ(140,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",h.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(41,lt,h.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!h.isCollapsed),t.xp6(1),t.Q6J("ngIf",h.isCollapsed),t.xp6(1),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Groups":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Source Suggestions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Revisions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Comments":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Flags":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Community":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",h.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Statistics":""),t.xp6(8),t.Q6J("ngIf",!h.isCollapsed),t.xp6(1),t.Q6J("ngClass",t.VKq(43,lt,h.isCollapsed)),t.xp6(5),t.Q6J("nzType",h.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(136,37,h.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(138,39,h.signedIn$)))},directives:[B,m,o.yS,i.mk,i.O5,L.wO,L.r9,U.SY,K.Ls,ye.SK,ye.t3,W,ze,Ze.s,Bt,pe,o.lC],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.menu-group[_ngcontent-%COMP%]{margin-bottom:1.5em}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),l})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(1679),r.e(7468),r.e(3883),r.e(8776),r.e(4573),r.e(5307),r.e(8592),r.e(7014)]).then(r.bind(r,136)).then(l=>l.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(305),r.e(3458),r.e(9274)]).then(r.bind(r,3553)).then(l=>l.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([r.e(1945),r.e(1854)]).then(r.bind(r,1854)).then(l=>l.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([r.e(1945),r.e(9946)]).then(r.bind(r,5094)).then(l=>l.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(2826),r.e(4379),r.e(3883),r.e(392),r.e(14),r.e(9246),r.e(5131),r.e(8592),r.e(1629)]).then(r.bind(r,1398)).then(l=>l.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(2826),r.e(3883),r.e(4431)]).then(r.bind(r,9450)).then(l=>l.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(14)]).then(r.bind(r,7727)).then(l=>l.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([r.e(1945),r.e(3133)]).then(r.bind(r,3133)).then(l=>l.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(681)]).then(r.bind(r,681)).then(l=>l.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(2826),r.e(4352),r.e(4379),r.e(4292),r.e(3883),r.e(392),r.e(14),r.e(4067),r.e(4140),r.e(8592),r.e(4592)]).then(r.bind(r,4592)).then(l=>l.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(2826),r.e(3883),r.e(1037)]).then(r.bind(r,7180)).then(l=>l.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([r.e(1945),r.e(166)]).then(r.bind(r,166)).then(l=>l.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(1679),r.e(4352),r.e(7468),r.e(8776),r.e(4573),r.e(5131),r.e(3458),r.e(8592),r.e(7825)]).then(r.bind(r,1874)).then(l=>l.SourcesModule),data:{breadcrumb:"Sources"}},{path:"source-suggestions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(4352),r.e(4379),r.e(6471),r.e(14),r.e(7178)]).then(r.bind(r,4039)).then(l=>l.SourceSuggestionsModule),data:{breadcrumb:"SourceSuggestions"}},{path:"users",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(2826),r.e(4352),r.e(4379),r.e(4292),r.e(3883),r.e(14),r.e(4067),r.e(4140),r.e(8592),r.e(2764)]).then(r.bind(r,2764)).then(l=>l.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(4186),r.e(79)]).then(r.bind(r,79)).then(l=>l.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(9246),r.e(8592),r.e(5606)]).then(r.bind(r,6295)).then(l=>l.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(9246),r.e(290)]).then(r.bind(r,5951)).then(l=>l.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(2826),r.e(4352),r.e(4292),r.e(4067),r.e(3392)]).then(r.bind(r,6528)).then(l=>l.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6412)]).then(r.bind(r,6412)).then(l=>l.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(329)]).then(r.bind(r,329)).then(l=>l.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([r.e(1945),r.e(54)]).then(r.bind(r,54)).then(l=>l.PagesModule),data:{breadcrumb:"Pages"}}]}];let Ct=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[o.Bz.forChild(yt)],o.Bz]}),l})();var It=r(3618),Tt=r(5109),St=r(4546);let Dt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,Ne.u5,o.Bz,u.WG,_e.o7,St.U5,K.PV,g]]}),l})();var wt=r(1844),Et=r(5473),_t=r(330);let Nt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,u.WG,Ye.b1,o.Bz,Ge.zf,K.PV,We.mS,U.cg,He.Qp,Et.H,_t.e]]}),l})(),At=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.ez,Ct,K.PV,ye.Jb,A,L.ip,U.cg,It.ZJ,Tt.s,wt.B,Nt,Dt]]}),l})()},6792:(Ee,re,r)=>{r.d(re,{g:()=>F});var i=r(353),t=r(3489),E=r(9312);function F(O,L=i.P){const K=function o(O){return O instanceof Date&&!isNaN(+O)}(O)?+O-L.now():Math.abs(O);return H=>H.lift(new Z(K,L))}class Z{constructor(L,G){this.delay=L,this.scheduler=G}call(L,G){return G.subscribe(new w(L,this.delay,this.scheduler))}}class w extends t.L{constructor(L,G,K){super(L),this.delay=G,this.scheduler=K,this.queue=[],this.active=!1,this.errored=!1}static dispatch(L){const G=L.source,K=G.queue,H=L.scheduler,le=L.destination;for(;K.length>0&&K[0].time-H.now()<=0;)K.shift().notification.observe(le);if(K.length>0){const te=Math.max(0,K[0].time-H.now());this.schedule(L,te)}else this.unsubscribe(),G.active=!1}_schedule(L){this.active=!0,this.destination.add(L.schedule(w.dispatch,this.delay,{source:this,destination:this.destination,scheduler:L}))}scheduleNotification(L){if(!0===this.errored)return;const G=this.scheduler,K=new X(G.now()+this.delay,L);this.queue.push(K),!1===this.active&&this._schedule(G)}_next(L){this.scheduleNotification(E.P.createNext(L))}_error(L){this.errored=!0,this.queue=[],this.destination.error(L),this.unsubscribe()}_complete(){this.scheduleNotification(E.P.createComplete()),this.unsubscribe()}}class X{constructor(L,G){this.time=L,this.notification=G}}},373:(Ee,re,r)=>{r.d(re,{j:()=>o});var i=r(4850);function o(...E){const F=E.length;if(0===F)throw new Error("list of properties cannot be empty.");return Z=>(0,i.U)(function t(E,F){return w=>{let X=w;for(let O=0;O<F;O++){const L=null!=X?X[E[O]]:void 0;if(void 0===L)return;X=L}return X}}(E,F))(Z)}},6699:(Ee,re,r)=>{r.d(re,{Dz:()=>te,Rt:()=>ie});var i=r(655),o=r(5e3),t=r(9439),E=r(1721),F=r(925),Z=r(9808),w=r(647),X=r(226);const O=["textEl"];function L(V,R){if(1&V&&o._UZ(0,"i",3),2&V){const I=o.oxw();o.Q6J("nzType",I.nzIcon)}}function G(V,R){if(1&V){const I=o.EpF();o.TgZ(0,"img",4),o.NdJ("error",function(ne){return o.CHM(I),o.oxw().imgError(ne)}),o.qZA()}if(2&V){const I=o.oxw();o.Q6J("src",I.nzSrc,o.LSH),o.uIk("srcset",I.nzSrcSet,o.LSH)("alt",I.nzAlt)}}function K(V,R){if(1&V&&(o.TgZ(0,"span",5,6),o._uU(2),o.qZA()),2&V){const I=o.oxw();o.Q6J("ngStyle",I.textStyles),o.xp6(2),o.Oqu(I.nzText)}}let te=(()=>{class V{constructor(I,P,ne,q){this.nzConfigService=I,this.elementRef=P,this.cdr=ne,this.platform=q,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,P=this.el.getBoundingClientRect().width,ne=2*this.nzGap<P?2*this.nzGap:8;this.textStyles={transform:`scale(${P-ne<I?(P-ne)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(I){return new(I||V)(o.Y36(t.jY),o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(F.t4))},V.\u0275cmp=o.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(I,P){if(1&I&&o.Gf(O,5),2&I){let ne;o.iGM(ne=o.CRH())&&(P.textEl=ne.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,P){2&I&&(o.Udp("width",P.customSize)("height",P.customSize)("line-height",P.customSize)("font-size",P.hasIcon&&P.customSize?P.nzSize/2:null,"px"),o.ekj("ant-avatar-lg","large"===P.nzSize)("ant-avatar-sm","small"===P.nzSize)("ant-avatar-square","square"===P.nzShape)("ant-avatar-circle","circle"===P.nzShape)("ant-avatar-icon",P.nzIcon)("ant-avatar-image",P.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,P){1&I&&(o.YNc(0,L,1,1,"i",0),o.YNc(1,G,1,3,"img",1),o.YNc(2,K,3,2,"span",2)),2&I&&(o.Q6J("ngIf",P.nzIcon&&P.hasIcon),o.xp6(1),o.Q6J("ngIf",P.nzSrc&&P.hasSrc),o.xp6(1),o.Q6J("ngIf",P.nzText&&P.hasText))},directives:[Z.O5,w.Ls,Z.PC],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,t.oS)()],V.prototype,"nzShape",void 0),(0,i.gn)([(0,t.oS)()],V.prototype,"nzSize",void 0),(0,i.gn)([(0,t.oS)(),(0,E.Rn)()],V.prototype,"nzGap",void 0),V})(),ie=(()=>{class V{}return V.\u0275fac=function(I){return new(I||V)},V.\u0275mod=o.oAB({type:V}),V.\u0275inj=o.cJS({imports:[[X.vT,Z.ez,w.PV,F.ud]]}),V})()},4401:(Ee,re,r)=>{r.d(re,{x7:()=>ue,mS:()=>Y,F9:()=>W});var i=r(655),o=r(5e3),t=r(8929),E=r(7625),F=r(8076),Z=r(9439),w=r(1721),X=r(226),O=r(4832),L=r(9808),G=r(969),K=r(7144);function H(m,B){if(1&m&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&m){const A=B.$implicit,U=o.oxw(2).index,ye=o.oxw(2);o.ekj("current",A===ye.countArray[U]),o.xp6(1),o.hij(" ",A," ")}}function le(m,B){if(1&m&&(o.ynx(0),o.YNc(1,H,2,3,"p",5),o.BQk()),2&m){const A=o.oxw(3);o.xp6(1),o.Q6J("ngForOf",A.countSingleArray)}}function te(m,B){if(1&m&&(o.TgZ(0,"span",3),o.YNc(1,le,2,1,"ng-container",4),o.qZA()),2&m){const A=B.index,U=o.oxw(2);o.Udp("transform","translateY("+100*-U.countArray[A]+"%)"),o.Q6J("nzNoAnimation",U.noAnimation),o.xp6(1),o.Q6J("ngIf",!U.nzDot&&void 0!==U.countArray[A])}}function se(m,B){if(1&m&&(o.ynx(0),o.YNc(1,te,2,4,"span",2),o.BQk()),2&m){const A=o.oxw();o.xp6(1),o.Q6J("ngForOf",A.maxNumberArray)}}function ie(m,B){if(1&m&&o._uU(0),2&m){const A=o.oxw();o.hij("",A.nzOverflowCount,"+")}}function V(m,B){if(1&m&&(o.ynx(0),o._uU(1),o.BQk()),2&m){const A=o.oxw(2);o.xp6(1),o.Oqu(A.nzText)}}function R(m,B){if(1&m&&(o.ynx(0),o._UZ(1,"span",2),o.TgZ(2,"span",3),o.YNc(3,V,2,1,"ng-container",1),o.qZA(),o.BQk()),2&m){const A=o.oxw();o.xp6(1),o.Gre("ant-badge-status-dot ant-badge-status-",A.nzStatus||A.presetColor,""),o.Udp("background",!A.presetColor&&A.nzColor),o.Q6J("ngStyle",A.nzStyle),o.xp6(2),o.Q6J("nzStringTemplateOutlet",A.nzText)}}function I(m,B){if(1&m&&o._UZ(0,"nz-badge-sup",5),2&m){const A=o.oxw(2);o.Q6J("nzOffset",A.nzOffset)("nzTitle",A.nzTitle)("nzStyle",A.nzStyle)("nzDot",A.nzDot)("nzOverflowCount",A.nzOverflowCount)("disableAnimation",!!(A.nzStandalone||A.nzStatus||A.nzColor||null!=A.noAnimation&&A.noAnimation.nzNoAnimation))("nzCount",A.nzCount)("noAnimation",!(null==A.noAnimation||!A.noAnimation.nzNoAnimation))}}function P(m,B){if(1&m&&(o.ynx(0),o.YNc(1,I,1,8,"nz-badge-sup",4),o.BQk()),2&m){const A=o.oxw();o.xp6(1),o.Q6J("ngIf",A.showSup)}}const ne=["*"];function q(m,B){if(1&m&&(o.ynx(0),o._uU(1),o.BQk()),2&m){const A=o.oxw();o.xp6(1),o.Oqu(A.nzText)}}const de=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let fe=(()=>{class m{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(A){const{nzOverflowCount:U,nzCount:ye}=A;ye&&"number"==typeof ye.currentValue&&(this.count=Math.max(0,ye.currentValue),this.countArray=this.count.toString().split("").map(Se=>+Se)),U&&this.generateMaxNumberArray()}}return m.\u0275fac=function(A){return new(A||m)},m.\u0275cmp=o.Xpm({type:m,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(A,U){2&A&&(o.uIk("title",null===U.nzTitle?"":U.nzTitle||U.nzCount),o.d8E("@.disabled",U.disableAnimation)("@zoomBadgeMotion",void 0),o.Akn(U.nzStyle),o.Udp("right",U.nzOffset&&U.nzOffset[0]?-U.nzOffset[0]:null,"px")("margin-top",U.nzOffset&&U.nzOffset[1]?U.nzOffset[1]:null,"px"),o.ekj("ant-badge-count",!U.nzDot)("ant-badge-dot",U.nzDot)("ant-badge-multiple-words",U.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[o.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(A,U){if(1&A&&(o.YNc(0,se,2,1,"ng-container",0),o.YNc(1,ie,1,1,"ng-template",null,1,o.W1O)),2&A){const ye=o.MAs(2);o.Q6J("ngIf",U.count<=U.nzOverflowCount)("ngIfElse",ye)}},directives:[L.O5,L.sg,O.P],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),m})(),ue=(()=>{class m{constructor(A,U,ye,Se,De,_e){this.nzConfigService=A,this.renderer=U,this.cdr=ye,this.elementRef=Se,this.directionality=De,this.noAnimation=_e,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var A;null===(A=this.directionality.change)||void 0===A||A.pipe((0,E.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(A){const{nzColor:U,nzShowDot:ye,nzDot:Se,nzCount:De,nzShowZero:_e}=A;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null),(ye||Se||De||_e)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return m.\u0275fac=function(A){return new(A||m)(o.Y36(Z.jY),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(X.Is,8),o.Y36(O.P,9))},m.\u0275cmp=o.Xpm({type:m,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(A,U){2&A&&o.ekj("ant-badge-status",U.nzStatus)("ant-badge-not-a-wrapper",!!(U.nzStandalone||U.nzStatus||U.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[o.TTD],ngContentSelectors:ne,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(A,U){1&A&&(o.F$t(),o.YNc(0,R,4,7,"ng-container",0),o.Hsn(1),o.YNc(2,P,2,1,"ng-container",1)),2&A&&(o.Q6J("ngIf",U.nzStatus||U.nzColor),o.xp6(2),o.Q6J("nzStringTemplateOutlet",U.nzCount))},directives:[fe,L.O5,L.PC,G.f],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),(0,i.gn)([(0,w.yF)()],m.prototype,"nzShowZero",void 0),(0,i.gn)([(0,w.yF)()],m.prototype,"nzShowDot",void 0),(0,i.gn)([(0,w.yF)()],m.prototype,"nzStandalone",void 0),(0,i.gn)([(0,w.yF)()],m.prototype,"nzDot",void 0),(0,i.gn)([(0,Z.oS)()],m.prototype,"nzOverflowCount",void 0),(0,i.gn)([(0,Z.oS)()],m.prototype,"nzColor",void 0),m})(),W=(()=>{class m{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(A){const{nzColor:U}=A;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null)}}return m.\u0275fac=function(A){return new(A||m)},m.\u0275cmp=o.Xpm({type:m,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[o.TTD],ngContentSelectors:ne,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(A,U){1&A&&(o.F$t(),o.Hsn(0),o.TgZ(1,"div",0),o.YNc(2,q,2,1,"ng-container",1),o._UZ(3,"div",2),o.qZA()),2&A&&(o.xp6(1),o.Tol(U.presetColor&&"ant-ribbon-color-"+U.presetColor),o.Udp("background-color",!U.presetColor&&U.nzColor),o.ekj("ant-ribbon-placement-end","end"===U.nzPlacement)("ant-ribbon-placement-start","start"===U.nzPlacement),o.xp6(1),o.Q6J("nzStringTemplateOutlet",U.nzText),o.xp6(1),o.Udp("color",!U.presetColor&&U.nzColor))},directives:[G.f],encapsulation:2,changeDetection:0}),m})(),Y=(()=>{class m{}return m.\u0275fac=function(A){return new(A||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[[X.vT,L.ez,K.Q8,G.T,O.g]]}),m})()},7484:(Ee,re,r)=>{r.d(re,{bd:()=>xe,vh:()=>be,_i:()=>De});var i=r(655),o=r(5e3),t=r(1721),E=r(8929),F=r(7625),Z=r(9439),w=r(226),X=r(9808),O=r(969);function L(N,ee){1&N&&o.Hsn(0)}const G=["*"];function K(N,ee){1&N&&(o.TgZ(0,"div",4),o._UZ(1,"div",5),o.qZA()),2&N&&o.Q6J("ngClass",ee.$implicit)}function H(N,ee){if(1&N&&(o.TgZ(0,"div",2),o.YNc(1,K,2,1,"div",3),o.qZA()),2&N){const S=ee.$implicit;o.xp6(1),o.Q6J("ngForOf",S)}}function le(N,ee){if(1&N&&(o.ynx(0),o._uU(1),o.BQk()),2&N){const S=o.oxw(3);o.xp6(1),o.Oqu(S.nzTitle)}}function te(N,ee){if(1&N&&(o.TgZ(0,"div",11),o.YNc(1,le,2,1,"ng-container",12),o.qZA()),2&N){const S=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",S.nzTitle)}}function se(N,ee){if(1&N&&(o.ynx(0),o._uU(1),o.BQk()),2&N){const S=o.oxw(3);o.xp6(1),o.Oqu(S.nzExtra)}}function ie(N,ee){if(1&N&&(o.TgZ(0,"div",13),o.YNc(1,se,2,1,"ng-container",12),o.qZA()),2&N){const S=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",S.nzExtra)}}function V(N,ee){}function R(N,ee){if(1&N&&(o.ynx(0),o.YNc(1,V,0,0,"ng-template",14),o.BQk()),2&N){const S=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",S.listOfNzCardTabComponent.template)}}function I(N,ee){if(1&N&&(o.TgZ(0,"div",6),o.TgZ(1,"div",7),o.YNc(2,te,2,1,"div",8),o.YNc(3,ie,2,1,"div",9),o.qZA(),o.YNc(4,R,2,1,"ng-container",10),o.qZA()),2&N){const S=o.oxw();o.xp6(2),o.Q6J("ngIf",S.nzTitle),o.xp6(1),o.Q6J("ngIf",S.nzExtra),o.xp6(1),o.Q6J("ngIf",S.listOfNzCardTabComponent)}}function P(N,ee){}function ne(N,ee){if(1&N&&(o.TgZ(0,"div",15),o.YNc(1,P,0,0,"ng-template",14),o.qZA()),2&N){const S=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",S.nzCover)}}function q(N,ee){1&N&&(o.ynx(0),o.Hsn(1),o.BQk())}function de(N,ee){1&N&&o._UZ(0,"nz-card-loading")}function fe(N,ee){}function pe(N,ee){if(1&N&&(o.TgZ(0,"li"),o.TgZ(1,"span"),o.YNc(2,fe,0,0,"ng-template",14),o.qZA(),o.qZA()),2&N){const S=ee.$implicit,J=o.oxw(2);o.Udp("width",100/J.nzActions.length,"%"),o.xp6(2),o.Q6J("ngTemplateOutlet",S)}}function ue(N,ee){if(1&N&&(o.TgZ(0,"ul",16),o.YNc(1,pe,3,3,"li",17),o.qZA()),2&N){const S=o.oxw();o.xp6(1),o.Q6J("ngForOf",S.nzActions)}}let Se=(()=>{class N{constructor(){this.nzHoverable=!0}}return N.\u0275fac=function(S){return new(S||N)},N.\u0275dir=o.lG2({type:N,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(S,J){2&S&&o.ekj("ant-card-hoverable",J.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,i.gn)([(0,t.yF)()],N.prototype,"nzHoverable",void 0),N})(),De=(()=>{class N{}return N.\u0275fac=function(S){return new(S||N)},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card-tab"]],viewQuery:function(S,J){if(1&S&&o.Gf(o.Rgc,7),2&S){let Q;o.iGM(Q=o.CRH())&&(J.template=Q.first)}},exportAs:["nzCardTab"],ngContentSelectors:G,decls:1,vars:0,template:function(S,J){1&S&&(o.F$t(),o.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),N})(),_e=(()=>{class N{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return N.\u0275fac=function(S){return new(S||N)},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(S,J){1&S&&(o.TgZ(0,"div",0),o.YNc(1,H,2,1,"div",1),o.qZA()),2&S&&(o.xp6(1),o.Q6J("ngForOf",J.listOfLoading))},directives:[X.sg,X.mk],encapsulation:2,changeDetection:0}),N})(),xe=(()=>{class N{constructor(S,J,Q){this.nzConfigService=S,this.cdr=J,this.directionality=Q,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new E.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,F.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var S;null===(S=this.directionality.change)||void 0===S||S.pipe((0,F.R)(this.destroy$)).subscribe(J=>{this.dir=J,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(S){return new(S||N)(o.Y36(Z.jY),o.Y36(o.sBO),o.Y36(w.Is,8))},N.\u0275cmp=o.Xpm({type:N,selectors:[["nz-card"]],contentQueries:function(S,J,Q){if(1&S&&(o.Suo(Q,De,5),o.Suo(Q,Se,4)),2&S){let ge;o.iGM(ge=o.CRH())&&(J.listOfNzCardTabComponent=ge.first),o.iGM(ge=o.CRH())&&(J.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(S,J){2&S&&o.ekj("ant-card-loading",J.nzLoading)("ant-card-bordered",!1===J.nzBorderless&&J.nzBordered)("ant-card-hoverable",J.nzHoverable)("ant-card-small","small"===J.nzSize)("ant-card-contain-grid",J.listOfNzCardGridDirective&&J.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===J.nzType)("ant-card-contain-tabs",!!J.listOfNzCardTabComponent)("ant-card-rtl","rtl"===J.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:G,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(S,J){if(1&S&&(o.F$t(),o.YNc(0,I,5,3,"div",0),o.YNc(1,ne,2,1,"div",1),o.TgZ(2,"div",2),o.YNc(3,q,2,0,"ng-container",3),o.YNc(4,de,1,0,"ng-template",null,4,o.W1O),o.qZA(),o.YNc(6,ue,2,1,"ul",5)),2&S){const Q=o.MAs(5);o.Q6J("ngIf",J.nzTitle||J.nzExtra||J.listOfNzCardTabComponent),o.xp6(1),o.Q6J("ngIf",J.nzCover),o.xp6(1),o.Q6J("ngStyle",J.nzBodyStyle),o.xp6(1),o.Q6J("ngIf",!J.nzLoading)("ngIfElse",Q),o.xp6(3),o.Q6J("ngIf",J.nzActions.length)}},directives:[_e,X.O5,O.f,X.tP,X.PC,X.sg],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBordered",void 0),(0,i.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBorderless",void 0),(0,i.gn)([(0,t.yF)()],N.prototype,"nzLoading",void 0),(0,i.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzHoverable",void 0),(0,i.gn)([(0,Z.oS)()],N.prototype,"nzSize",void 0),N})(),be=(()=>{class N{}return N.\u0275fac=function(S){return new(S||N)},N.\u0275mod=o.oAB({type:N}),N.\u0275inj=o.cJS({imports:[[X.ez,O.T],w.vT]}),N})()},3677:(Ee,re,r)=>{r.d(re,{cm:()=>De,b1:()=>be,wA:()=>xe,RR:()=>Ve});var i=r(655),o=r(1159),t=r(7429),E=r(5e3),F=r(8929),Z=r(591),w=r(6787),X=r(3753),O=r(8896),L=r(3426),G=r(7604),K=r(4850),H=r(7545),le=r(2198),te=r(7138),se=r(5778),ie=r(7625),V=r(9439),R=r(6950),I=r(1721),P=r(2845),ne=r(925),q=r(226),de=r(9808),fe=r(4182),pe=r(6042),ue=r(4832),W=r(969),Y=r(647),m=r(4219),B=r(8076);function A(S,J){if(1&S){const Q=E.EpF();E.TgZ(0,"div",0),E.NdJ("@slideMotion.done",function(Ce){return E.CHM(Q),E.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return E.CHM(Q),E.oxw().setMouseState(!0)})("mouseleave",function(){return E.CHM(Q),E.oxw().setMouseState(!1)}),E.Hsn(1),E.qZA()}if(2&S){const Q=E.oxw();E.ekj("ant-dropdown-rtl","rtl"===Q.dir),E.Q6J("ngClass",Q.nzOverlayClassName)("ngStyle",Q.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("nzNoAnimation",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)}}const U=["*"],Se=[R.yW.bottomLeft,R.yW.bottomRight,R.yW.topRight,R.yW.topLeft];let De=(()=>{class S{constructor(Q,ge,Ce,Ae,Fe,Ie){this.nzConfigService=Q,this.elementRef=ge,this.overlay=Ce,this.renderer=Ae,this.viewContainerRef=Fe,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new F.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new Z.X(!1),this.nzTrigger$=new Z.X("hover"),this.overlayClose$=new F.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new E.vpe}setDropdownMenuValue(Q,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(Q,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const Q=this.elementRef.nativeElement,ge=(0,w.T)((0,X.R)(Q,"mouseenter").pipe((0,G.h)(!0)),(0,X.R)(Q,"mouseleave").pipe((0,G.h)(!1))),Ae=(0,w.T)(this.nzDropdownMenu.mouseState$,ge),Fe=(0,X.R)(Q,"click").pipe((0,K.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,H.w)(ve=>"hover"===ve?Ae:"click"===ve?Fe:O.E)),Re=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,le.h)(()=>this.nzClickHide),(0,G.h)(!1)),Oe=(0,w.T)(Ie,Re,this.overlayClose$).pipe((0,le.h)(()=>!this.nzDisabled)),we=(0,w.T)(this.inputVisible$,Oe);(0,L.aj)([we,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,K.U)(([ve,Ue])=>ve||Ue),(0,te.e)(150),(0,se.x)(),(0,le.h)(()=>this.platform.isBrowser),(0,ie.R)(this.destroy$)).subscribe(ve=>{const Me=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:Q).getBoundingClientRect().width;this.nzVisible!==ve&&this.nzVisibleChange.emit(ve),this.nzVisible=ve,ve?(this.overlayRef?this.overlayRef.getConfig().minWidth=Me:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Me,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,w.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,le.h)($e=>!this.elementRef.nativeElement.contains($e.target))),this.overlayRef.keydownEvents().pipe((0,le.h)($e=>$e.keyCode===o.hY&&!(0,o.Vb)($e)))).pipe((0,ie.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([R.yW[this.nzPlacement],...Se]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,ie.R)(this.destroy$)).subscribe(ve=>{"void"===ve.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(Q){const{nzVisible:ge,nzDisabled:Ce,nzOverlayClassName:Ae,nzOverlayStyle:Fe,nzTrigger:Ie}=Q;if(Ie&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),Ce){const Re=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Re,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Re,"disabled")}Ae&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Fe&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(V.jY),E.Y36(E.SBq),E.Y36(P.aV),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(ne.t4))},S.\u0275dir=E.lG2({type:S,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[E.TTD]}),(0,i.gn)([(0,V.oS)(),(0,I.yF)()],S.prototype,"nzBackdrop",void 0),(0,i.gn)([(0,I.yF)()],S.prototype,"nzClickHide",void 0),(0,i.gn)([(0,I.yF)()],S.prototype,"nzDisabled",void 0),(0,i.gn)([(0,I.yF)()],S.prototype,"nzVisible",void 0),S})(),_e=(()=>{class S{}return S.\u0275fac=function(Q){return new(Q||S)},S.\u0275mod=E.oAB({type:S}),S.\u0275inj=E.cJS({}),S})(),xe=(()=>{class S{constructor(Q,ge,Ce){this.renderer=Q,this.nzButtonGroupComponent=ge,this.elementRef=Ce}ngAfterViewInit(){const Q=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&Q&&this.renderer.addClass(Q,"ant-dropdown-button")}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(E.Qsj),E.Y36(pe.fY,9),E.Y36(E.SBq))},S.\u0275dir=E.lG2({type:S,selectors:[["","nz-button","","nz-dropdown",""]]}),S})(),Ve=(()=>{class S{constructor(Q,ge,Ce,Ae,Fe,Ie,Re){this.cdr=Q,this.elementRef=ge,this.renderer=Ce,this.viewContainerRef=Ae,this.nzMenuService=Fe,this.directionality=Ie,this.noAnimation=Re,this.mouseState$=new Z.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new E.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new F.xQ}onAnimationEvent(Q){this.animationStateChange$.emit(Q)}setMouseState(Q){this.mouseState$.next(Q)}setValue(Q,ge){this[Q]=ge,this.cdr.markForCheck()}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,ie.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(E.sBO),E.Y36(E.SBq),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(m.hl),E.Y36(q.Is,8),E.Y36(ue.P,9))},S.\u0275cmp=E.Xpm({type:S,selectors:[["nz-dropdown-menu"]],viewQuery:function(Q,ge){if(1&Q&&E.Gf(E.Rgc,7),2&Q){let Ce;E.iGM(Ce=E.CRH())&&(ge.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[E._Bn([m.hl,{provide:m.Cc,useValue:!0}])],ngContentSelectors:U,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(Q,ge){1&Q&&(E.F$t(),E.YNc(0,A,2,7,"ng-template"))},directives:[de.mk,de.PC,ue.P],encapsulation:2,data:{animation:[B.mF]},changeDetection:0}),S})(),be=(()=>{class S{}return S.\u0275fac=function(Q){return new(Q||S)},S.\u0275mod=E.oAB({type:S}),S.\u0275inj=E.cJS({imports:[[q.vT,de.ez,P.U8,fe.u5,pe.sL,m.ip,Y.PV,ue.g,ne.ud,R.e4,_e,W.T],m.ip]}),S})();new P.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new P.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new P.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new P.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(Ee,re,r)=>{r.d(re,{n_:()=>Je,I2:()=>Pe,t4:()=>Ge,AA:()=>Xe,yw:()=>ze,yi:()=>oe,IO:()=>g,Ph:()=>tt});var i=r(5e3),o=r(6699),t=r(9808),E=r(969),F=r(655),Z=r(1721),w=r(8929),X=r(8514),O=r(1086),L=r(6787),G=r(591),K=r(2986),H=r(7545),le=r(7625),te=r(685),se=r(226),ie=r(7525),V=r(1894);const R=["*"];function I(f,_){if(1&f&&i._UZ(0,"nz-avatar",3),2&f){const C=i.oxw();i.Q6J("nzSrc",C.nzSrc)}}function P(f,_){1&f&&i.Hsn(0,0,["*ngIf","!nzSrc"])}function ne(f,_){if(1&f&&i._UZ(0,"nz-list-item-meta-avatar",3),2&f){const C=i.oxw();i.Q6J("nzSrc",C.avatarStr)}}function q(f,_){if(1&f&&(i.TgZ(0,"nz-list-item-meta-avatar"),i.GkF(1,4),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",C.avatarTpl)}}function de(f,_){if(1&f&&(i.ynx(0),i._uU(1),i.BQk()),2&f){const C=i.oxw(3);i.xp6(1),i.Oqu(C.nzTitle)}}function fe(f,_){if(1&f&&(i.TgZ(0,"nz-list-item-meta-title"),i.YNc(1,de,2,1,"ng-container",6),i.qZA()),2&f){const C=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzTitle)}}function pe(f,_){if(1&f&&(i.ynx(0),i._uU(1),i.BQk()),2&f){const C=i.oxw(3);i.xp6(1),i.Oqu(C.nzDescription)}}function ue(f,_){if(1&f&&(i.TgZ(0,"nz-list-item-meta-description"),i.YNc(1,pe,2,1,"ng-container",6),i.qZA()),2&f){const C=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzDescription)}}function W(f,_){if(1&f&&(i.TgZ(0,"div",5),i.YNc(1,fe,2,1,"nz-list-item-meta-title",1),i.YNc(2,ue,2,1,"nz-list-item-meta-description",1),i.Hsn(3,1),i.Hsn(4,2),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("ngIf",C.nzTitle&&!C.titleComponent),i.xp6(1),i.Q6J("ngIf",C.nzDescription&&!C.descriptionComponent)}}const Y=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],m=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function B(f,_){1&f&&i.Hsn(0)}const A=["nz-list-item-actions",""];function U(f,_){}function ye(f,_){1&f&&i._UZ(0,"em",3)}function Se(f,_){if(1&f&&(i.TgZ(0,"li"),i.YNc(1,U,0,0,"ng-template",1),i.YNc(2,ye,1,0,"em",2),i.qZA()),2&f){const C=_.$implicit,$=_.last;i.xp6(1),i.Q6J("ngTemplateOutlet",C),i.xp6(1),i.Q6J("ngIf",!$)}}function De(f,_){}const _e=function(f,_){return{$implicit:f,index:_}};function Ne(f,_){if(1&f&&(i.ynx(0),i.YNc(1,De,0,0,"ng-template",9),i.BQk()),2&f){const C=_.$implicit,$=_.index,ce=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",i.WLB(2,_e,C,$))}}function xe(f,_){if(1&f&&(i.TgZ(0,"div",7),i.YNc(1,Ne,2,5,"ng-container",8),i.Hsn(2,4),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("ngForOf",C.nzDataSource)}}function Ve(f,_){if(1&f&&(i.ynx(0),i._uU(1),i.BQk()),2&f){const C=i.oxw(2);i.xp6(1),i.Oqu(C.nzHeader)}}function be(f,_){if(1&f&&(i.TgZ(0,"nz-list-header"),i.YNc(1,Ve,2,1,"ng-container",10),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function N(f,_){1&f&&i._UZ(0,"div"),2&f&&i.Udp("min-height",53,"px")}function ee(f,_){}function S(f,_){if(1&f&&(i.TgZ(0,"div",13),i.YNc(1,ee,0,0,"ng-template",9),i.qZA()),2&f){const C=_.$implicit,$=_.index,ce=i.oxw(2);i.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),i.xp6(1),i.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",i.WLB(9,_e,C,$))}}function J(f,_){if(1&f&&(i.TgZ(0,"div",11),i.YNc(1,S,2,12,"div",12),i.qZA()),2&f){const C=i.oxw();i.Q6J("nzGutter",C.nzGrid.gutter||null),i.xp6(1),i.Q6J("ngForOf",C.nzDataSource)}}function Q(f,_){if(1&f&&i._UZ(0,"nz-list-empty",14),2&f){const C=i.oxw();i.Q6J("nzNoResult",C.nzNoResult)}}function ge(f,_){if(1&f&&(i.ynx(0),i._uU(1),i.BQk()),2&f){const C=i.oxw(2);i.xp6(1),i.Oqu(C.nzFooter)}}function Ce(f,_){if(1&f&&(i.TgZ(0,"nz-list-footer"),i.YNc(1,ge,2,1,"ng-container",10),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Ae(f,_){}function Fe(f,_){}function Ie(f,_){if(1&f&&(i.TgZ(0,"nz-list-pagination"),i.YNc(1,Fe,0,0,"ng-template",6),i.qZA()),2&f){const C=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzPagination)}}const Re=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Oe=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function we(f,_){if(1&f&&i._UZ(0,"ul",6),2&f){const C=i.oxw(2);i.Q6J("nzActions",C.nzActions)}}function ve(f,_){if(1&f&&(i.YNc(0,we,1,1,"ul",5),i.Hsn(1)),2&f){const C=i.oxw();i.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Ue(f,_){if(1&f&&(i.ynx(0),i._uU(1),i.BQk()),2&f){const C=i.oxw(3);i.xp6(1),i.Oqu(C.nzContent)}}function Me(f,_){if(1&f&&(i.ynx(0),i.YNc(1,Ue,2,1,"ng-container",8),i.BQk()),2&f){const C=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",C.nzContent)}}function $e(f,_){if(1&f&&(i.Hsn(0,1),i.Hsn(1,2),i.YNc(2,Me,2,1,"ng-container",7)),2&f){const C=i.oxw();i.xp6(2),i.Q6J("ngIf",C.nzContent)}}function nt(f,_){1&f&&i.Hsn(0,3)}function it(f,_){}function et(f,_){}function ot(f,_){}function v(f,_){}function rt(f,_){if(1&f&&(i.YNc(0,it,0,0,"ng-template",9),i.YNc(1,et,0,0,"ng-template",9),i.YNc(2,ot,0,0,"ng-template",9),i.YNc(3,v,0,0,"ng-template",9)),2&f){const C=i.oxw(),$=i.MAs(3),ce=i.MAs(5),he=i.MAs(1);i.Q6J("ngTemplateOutlet",$),i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",ce),i.xp6(1),i.Q6J("ngTemplateOutlet",he)}}function st(f,_){}function at(f,_){}function dt(f,_){}function Qe(f,_){if(1&f&&(i.TgZ(0,"nz-list-item-extra"),i.YNc(1,dt,0,0,"ng-template",9),i.qZA()),2&f){const C=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(f,_){}function p(f,_){if(1&f&&(i.ynx(0),i.TgZ(1,"div",10),i.YNc(2,st,0,0,"ng-template",9),i.YNc(3,at,0,0,"ng-template",9),i.qZA(),i.YNc(4,Qe,2,1,"nz-list-item-extra",7),i.YNc(5,pt,0,0,"ng-template",9),i.BQk()),2&f){const C=i.oxw(),$=i.MAs(3),ce=i.MAs(1),he=i.MAs(5);i.xp6(2),i.Q6J("ngTemplateOutlet",$),i.xp6(1),i.Q6J("ngTemplateOutlet",ce),i.xp6(1),i.Q6J("ngIf",C.nzExtra),i.xp6(1),i.Q6J("ngTemplateOutlet",he)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],j=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let g=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(C,$){1&C&&(i.F$t(),i.TgZ(0,"h4",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),f})(),u=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:R,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(C,$){1&C&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},encapsulation:2,changeDetection:0}),f})(),k=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:R,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(C,$){1&C&&(i.F$t(),i.TgZ(0,"div",0),i.YNc(1,I,1,1,"nz-avatar",1),i.YNc(2,P,1,0,"ng-content",2),i.qZA()),2&C&&(i.xp6(1),i.Q6J("ngIf",$.nzSrc),i.xp6(1),i.Q6J("ngIf",!$.nzSrc))},directives:[o.Dz,t.O5],encapsulation:2,changeDetection:0}),f})(),oe=(()=>{class f{constructor(C,$){this.elementRef=C,this.renderer=$,this.avatarStr="",this.renderer.addClass(C.nativeElement,"ant-list-item-meta")}set nzAvatar(C){C instanceof i.Rgc?(this.avatarStr="",this.avatarTpl=C):this.avatarStr=C}}return f.\u0275fac=function(C){return new(C||f)(i.Y36(i.SBq),i.Y36(i.Qsj))},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(C,$,ce){if(1&C&&(i.Suo(ce,u,5),i.Suo(ce,g,5)),2&C){let he;i.iGM(he=i.CRH())&&($.descriptionComponent=he.first),i.iGM(he=i.CRH())&&($.titleComponent=he.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:m,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(C,$){1&C&&(i.F$t(Y),i.YNc(0,ne,1,1,"nz-list-item-meta-avatar",0),i.YNc(1,q,2,1,"nz-list-item-meta-avatar",1),i.Hsn(2),i.YNc(3,W,5,2,"div",2)),2&C&&(i.Q6J("ngIf",$.avatarStr),i.xp6(1),i.Q6J("ngIf",$.avatarTpl),i.xp6(2),i.Q6J("ngIf",$.nzTitle||$.nzDescription||$.descriptionComponent||$.titleComponent))},directives:[k,g,u,t.O5,t.tP,E.f],encapsulation:2,changeDetection:0}),f})(),ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:R,decls:1,vars:0,template:function(C,$){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item-action"]],viewQuery:function(C,$){if(1&C&&i.Gf(i.Rgc,5),2&C){let ce;i.iGM(ce=i.CRH())&&($.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:R,decls:1,vars:0,template:function(C,$){1&C&&(i.F$t(),i.YNc(0,B,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),f})(),Te=(()=>{class f{constructor(C,$){this.ngZone=C,this.cdr=$,this.nzActions=[],this.actions=[],this.destroy$=new w.xQ,this.inputActionChanges$=new w.xQ,this.contentChildrenChanges$=(0,X.P)(()=>this.nzListItemActions?(0,O.of)(null):this.ngZone.onStable.asObservable().pipe((0,K.q)(1),(0,H.w)(()=>this.contentChildrenChanges$))),(0,L.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,le.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(C){return new(C||f)(i.Y36(i.R0b),i.Y36(i.sBO))},f.\u0275cmp=i.Xpm({type:f,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,$,ce){if(1&C&&i.Suo(ce,Ze,4),2&C){let he;i.iGM(he=i.CRH())&&($.nzListItemActions=he)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.TTD],attrs:A,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,$){1&C&&i.YNc(0,Se,3,2,"li",0),2&C&&i.Q6J("ngForOf",$.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),f})(),Pe=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,$){1&C&&i._UZ(0,"nz-embed-empty",0),2&C&&i.Q6J("nzComponentName","list")("specificContent",$.nzNoResult)},directives:[te.gB],encapsulation:2,changeDetection:0}),f})(),Ge=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:R,decls:1,vars:0,template:function(C,$){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),We=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:R,decls:1,vars:0,template:function(C,$){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ye=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:R,decls:1,vars:0,template:function(C,$){1&C&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ke=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275dir=i.lG2({type:f,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),f})(),Je=(()=>{class f{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new G.X(this.nzItemLayout),this.destroy$=new w.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,le.R)(this.destroy$)).subscribe($=>{this.dir=$})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return f.\u0275fac=function(C){return new(C||f)(i.Y36(se.Is,8))},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,$,ce){if(1&C&&(i.Suo(ce,We,5),i.Suo(ce,Ye,5),i.Suo(ce,Ke,5)),2&C){let he;i.iGM(he=i.CRH())&&($.nzListFooterComponent=he.first),i.iGM(he=i.CRH())&&($.nzListPaginationComponent=he.first),i.iGM(he=i.CRH())&&($.nzListLoadMoreDirective=he.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,$){2&C&&i.ekj("ant-list-rtl","rtl"===$.dir)("ant-list-vertical","vertical"===$.nzItemLayout)("ant-list-lg","large"===$.nzSize)("ant-list-sm","small"===$.nzSize)("ant-list-split",$.nzSplit)("ant-list-bordered",$.nzBordered)("ant-list-loading",$.nzLoading)("ant-list-something-after-last-item",$.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.TTD],ngContentSelectors:Oe,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,$){if(1&C&&(i.F$t(Re),i.YNc(0,xe,3,1,"ng-template",null,0,i.W1O),i.YNc(2,be,2,1,"nz-list-header",1),i.Hsn(3),i.TgZ(4,"nz-spin",2),i.ynx(5),i.YNc(6,N,1,2,"div",3),i.YNc(7,J,2,2,"div",4),i.YNc(8,Q,1,1,"nz-list-empty",5),i.BQk(),i.qZA(),i.YNc(9,Ce,2,1,"nz-list-footer",1),i.Hsn(10,1),i.YNc(11,Ae,0,0,"ng-template",6),i.Hsn(12,2),i.YNc(13,Ie,2,1,"nz-list-pagination",1),i.Hsn(14,3)),2&C){const ce=i.MAs(1);i.xp6(2),i.Q6J("ngIf",$.nzHeader),i.xp6(2),i.Q6J("nzSpinning",$.nzLoading),i.xp6(2),i.Q6J("ngIf",$.nzLoading&&$.nzDataSource&&0===$.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",$.nzGrid&&$.nzDataSource)("ngIfElse",ce),i.xp6(1),i.Q6J("ngIf",!$.nzLoading&&$.nzDataSource&&0===$.nzDataSource.length),i.xp6(1),i.Q6J("ngIf",$.nzFooter),i.xp6(2),i.Q6J("ngTemplateOutlet",$.nzLoadMore),i.xp6(2),i.Q6J("ngIf",$.nzPagination)}},directives:[Ge,ie.W,Pe,We,Ye,t.sg,t.tP,t.O5,E.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzBordered",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzLoading",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzSplit",void 0),f})(),Xe=(()=>{class f{constructor(C,$,ce,he){this.parentComp=ce,this.cdr=he,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,$.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return f.\u0275fac=function(C){return new(C||f)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(Je),i.Y36(i.sBO))},f.\u0275cmp=i.Xpm({type:f,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,$,ce){if(1&C&&i.Suo(ce,ze,5),2&C){let he;i.iGM(he=i.CRH())&&($.listItemExtraDirective=he.first)}},hostVars:2,hostBindings:function(C,$){2&C&&i.ekj("ant-list-item-no-flex",$.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:j,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,$){if(1&C&&(i.F$t(a),i.YNc(0,ve,2,1,"ng-template",null,0,i.W1O),i.YNc(2,$e,3,1,"ng-template",null,1,i.W1O),i.YNc(4,nt,1,0,"ng-template",null,2,i.W1O),i.YNc(6,rt,4,4,"ng-template",null,3,i.W1O),i.YNc(8,p,6,4,"ng-container",4)),2&C){const ce=i.MAs(7);i.xp6(8),i.Q6J("ngIf",$.isVerticalAndExtra)("ngIfElse",ce)}},directives:[Te,ze,t.O5,E.f,t.tP],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzNoFlex",void 0),f})(),tt=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275mod=i.oAB({type:f}),f.\u0275inj=i.cJS({imports:[[se.vT,t.ez,ie.j,V.Jb,o.Rt,E.T,te.Xo]]}),f})()},4219:(Ee,re,r)=>{r.d(re,{hl:()=>ve,Cc:()=>Oe,wO:()=>at,YV:()=>pt,r9:()=>Me,ip:()=>p});var i=r(655),o=r(5e3),t=r(8929),E=r(591),F=r(6787),Z=r(3426),w=r(4850),X=r(1709),O=r(2198),L=r(7604),G=r(7138),K=r(5778),H=r(7625),le=r(1059),te=r(7545),se=r(1721),ie=r(325),V=r(226),R=r(2845),I=r(6950),P=r(925),ne=r(4832),q=r(9808),de=r(647),fe=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function W(a,j){if(1&a&&o._UZ(0,"i",4),2&a){const g=o.oxw();o.Q6J("nzType",g.nzIcon)}}function Y(a,j){if(1&a&&(o.ynx(0),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.BQk()),2&a){const g=o.oxw();o.xp6(2),o.Oqu(g.nzTitle)}}function m(a,j){1&a&&o._UZ(0,"i",8)}function B(a,j){1&a&&o._UZ(0,"i",9)}function A(a,j){if(1&a&&(o.TgZ(0,"span",5),o.YNc(1,m,1,0,"i",6),o.YNc(2,B,1,0,"i",7),o.qZA()),2&a){const g=o.oxw();o.Q6J("ngSwitch",g.dir),o.xp6(1),o.Q6J("ngSwitchCase","rtl")}}function U(a,j){1&a&&o._UZ(0,"i",10)}const ye=["*"],Se=["nz-submenu-inline-child",""];function De(a,j){}const _e=["nz-submenu-none-inline-child",""];function Ne(a,j){}const xe=["nz-submenu",""];function Ve(a,j){1&a&&o.Hsn(0,0,["*ngIf","!nzTitle"])}function be(a,j){if(1&a&&o._UZ(0,"div",6),2&a){const g=o.oxw(),u=o.MAs(7);o.Q6J("mode",g.mode)("nzOpen",g.nzOpen)("@.disabled",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("nzNoAnimation",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("menuClass",g.nzMenuClassName)("templateOutlet",u)}}function N(a,j){if(1&a){const g=o.EpF();o.TgZ(0,"div",8),o.NdJ("subMenuMouseState",function(k){return o.CHM(g),o.oxw(2).setMouseEnterState(k)}),o.qZA()}if(2&a){const g=o.oxw(2),u=o.MAs(7);o.Q6J("theme",g.theme)("mode",g.mode)("nzOpen",g.nzOpen)("position",g.position)("nzDisabled",g.nzDisabled)("isMenuInsideDropDown",g.isMenuInsideDropDown)("templateOutlet",u)("menuClass",g.nzMenuClassName)("@.disabled",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)("nzNoAnimation",null==g.noAnimation?null:g.noAnimation.nzNoAnimation)}}function ee(a,j){if(1&a){const g=o.EpF();o.YNc(0,N,1,10,"ng-template",7),o.NdJ("positionChange",function(k){return o.CHM(g),o.oxw().onPositionChange(k)})}if(2&a){const g=o.oxw(),u=o.MAs(1);o.Q6J("cdkConnectedOverlayPositions",g.overlayPositions)("cdkConnectedOverlayOrigin",u)("cdkConnectedOverlayWidth",g.triggerWidth)("cdkConnectedOverlayOpen",g.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function S(a,j){1&a&&o.Hsn(0,1)}const J=[[["","title",""]],"*"],Q=["[title]","*"],Oe=new o.OlP("NzIsInDropDownMenuToken"),we=new o.OlP("NzMenuServiceLocalToken");let ve=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new E.X("light"),this.mode$=new E.X("vertical"),this.inlineIndent$=new E.X(24),this.isChildSubMenuOpen$=new E.X(!1)}onDescendantMenuItemClick(g){this.descendantMenuItemClick$.next(g)}onChildMenuItemClick(g){this.childMenuItemClick$.next(g)}setMode(g){this.mode$.next(g)}setTheme(g){this.theme$.next(g)}setInlineIndent(g){this.inlineIndent$.next(g)}}return a.\u0275fac=function(g){return new(g||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac}),a})(),Ue=(()=>{class a{constructor(g,u,k){this.nzHostSubmenuService=g,this.nzMenuService=u,this.isMenuInsideDropDown=k,this.mode$=this.nzMenuService.mode$.pipe((0,w.U)(Te=>"inline"===Te?"inline":"vertical"===Te||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new E.X(!1),this.isChildSubMenuOpen$=new E.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const oe=this.childMenuItemClick$.pipe((0,X.zg)(()=>this.mode$),(0,O.h)(Te=>"inline"!==Te||this.isMenuInsideDropDown),(0,L.h)(!1)),ze=(0,F.T)(this.isMouseEnterTitleOrOverlay$,oe);(0,Z.aj)([this.isChildSubMenuOpen$,ze]).pipe((0,w.U)(([Te,Pe])=>Te||Pe),(0,G.e)(150),(0,K.x)(),(0,H.R)(this.destroy$)).pipe((0,K.x)()).subscribe(Te=>{this.setOpenStateWithoutDebounce(Te),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Te):this.nzMenuService.isChildSubMenuOpen$.next(Te)})}onChildMenuItemClick(g){this.childMenuItemClick$.next(g)}setOpenStateWithoutDebounce(g){this.isCurrentSubMenuOpen$.next(g)}setMouseEnterTitleOrOverlayState(g){this.isMouseEnterTitleOrOverlay$.next(g)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(g){return new(g||a)(o.LFG(a,12),o.LFG(ve),o.LFG(Oe))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac}),a})(),Me=(()=>{class a{constructor(g,u,k,oe,ze,Ze,Te,Pe){this.nzMenuService=g,this.cdr=u,this.nzSubmenuService=k,this.isMenuInsideDropDown=oe,this.directionality=ze,this.routerLink=Ze,this.routerLinkWithHref=Te,this.router=Pe,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Pe&&this.router.events.pipe((0,H.R)(this.destroy$),(0,O.h)(Ge=>Ge instanceof ie.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(g){this.nzDisabled?(g.preventDefault(),g.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(g){this.nzSelected=g,this.selected$.next(g)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const g=this.hasActiveLinks();this.nzSelected!==g&&(this.nzSelected=g,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const g=this.isLinkActive(this.router);return this.routerLink&&g(this.routerLink)||this.routerLinkWithHref&&g(this.routerLinkWithHref)||this.listOfRouterLink.some(g)||this.listOfRouterLinkWithHref.some(g)}isLinkActive(g){return u=>g.isActive(u.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var g;(0,Z.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.inlinePaddingLeft="inline"===u?this.level*k:null}),this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(g){g.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(ve),o.Y36(o.sBO),o.Y36(Ue,8),o.Y36(Oe),o.Y36(V.Is,8),o.Y36(ie.rH,8),o.Y36(ie.yS,8),o.Y36(ie.F0,8))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(g,u,k){if(1&g&&(o.Suo(k,ie.rH,5),o.Suo(k,ie.yS,5)),2&g){let oe;o.iGM(oe=o.CRH())&&(u.listOfRouterLink=oe),o.iGM(oe=o.CRH())&&(u.listOfRouterLinkWithHref=oe)}},hostVars:20,hostBindings:function(g,u){1&g&&o.NdJ("click",function(oe){return u.clickMenuItem(oe)}),2&g&&(o.Udp("padding-left","rtl"===u.dir?null:u.nzPaddingLeft||u.inlinePaddingLeft,"px")("padding-right","rtl"===u.dir?u.nzPaddingLeft||u.inlinePaddingLeft:null,"px"),o.ekj("ant-dropdown-menu-item",u.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",u.isMenuInsideDropDown&&u.nzSelected)("ant-dropdown-menu-item-danger",u.isMenuInsideDropDown&&u.nzDanger)("ant-dropdown-menu-item-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-item",!u.isMenuInsideDropDown)("ant-menu-item-selected",!u.isMenuInsideDropDown&&u.nzSelected)("ant-menu-item-danger",!u.isMenuInsideDropDown&&u.nzDanger)("ant-menu-item-disabled",!u.isMenuInsideDropDown&&u.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[o.TTD]}),(0,i.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzSelected",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzDanger",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),$e=(()=>{class a{constructor(g,u){this.cdr=g,this.directionality=u,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new o.vpe,this.subMenuMouseState=new o.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var g;this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(g){this.nzDisabled||this.subMenuMouseState.next(g)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(o.sBO),o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(g,u){1&g&&o.NdJ("click",function(){return u.clickTitle()})("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&g&&(o.Udp("padding-left","rtl"===u.dir?null:u.paddingLeft,"px")("padding-right","rtl"===u.dir?u.paddingLeft:null,"px"),o.ekj("ant-dropdown-menu-submenu-title",u.isMenuInsideDropDown)("ant-menu-submenu-title",!u.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:ye,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(g,u){if(1&g&&(o.F$t(),o.YNc(0,W,1,1,"i",0),o.YNc(1,Y,3,1,"ng-container",1),o.Hsn(2),o.YNc(3,A,3,2,"span",2),o.YNc(4,U,1,0,"ng-template",null,3,o.W1O)),2&g){const k=o.MAs(5);o.Q6J("ngIf",u.nzIcon),o.xp6(1),o.Q6J("nzStringTemplateOutlet",u.nzTitle),o.xp6(2),o.Q6J("ngIf",u.isMenuInsideDropDown)("ngIfElse",k)}},directives:[q.O5,de.Ls,fe.f,q.RF,q.n9,q.ED],encapsulation:2,changeDetection:0}),a})(),nt=(()=>{class a{constructor(g,u,k){this.elementRef=g,this.renderer=u,this.directionality=k,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var g;this.calcMotionState(),this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(g){const{mode:u,nzOpen:k,menuClass:oe}=g;(u||k)&&this.calcMotionState(),oe&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.removeClass(this.elementRef.nativeElement,ze)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.addClass(this.elementRef.nativeElement,ze)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(g,u){2&g&&(o.d8E("@collapseMotion",u.expandState),o.ekj("ant-menu-rtl","rtl"===u.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[o.TTD],attrs:Se,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(g,u){1&g&&o.YNc(0,De,0,0,"ng-template",0),2&g&&o.Q6J("ngTemplateOutlet",u.templateOutlet)},directives:[q.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),it=(()=>{class a{constructor(g){this.directionality=g,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new o.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(g){this.nzDisabled||this.subMenuMouseState.next(g)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var g;this.calcMotionState(),this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(g){const{mode:u,nzOpen:k}=g;(u||k)&&this.calcMotionState()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(V.Is,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(g,u){1&g&&o.NdJ("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&g&&(o.d8E("@slideMotion",u.expandState)("@zoomBigMotion",u.expandState),o.ekj("ant-menu-light","light"===u.theme)("ant-menu-dark","dark"===u.theme)("ant-menu-submenu-placement-bottom","horizontal"===u.mode)("ant-menu-submenu-placement-right","vertical"===u.mode&&"right"===u.position)("ant-menu-submenu-placement-left","vertical"===u.mode&&"left"===u.position)("ant-menu-submenu-rtl","rtl"===u.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[o.TTD],attrs:_e,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(g,u){1&g&&(o.TgZ(0,"div",0),o.YNc(1,Ne,0,0,"ng-template",1),o.qZA()),2&g&&(o.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-menu",!u.isMenuInsideDropDown)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown)("ant-menu-vertical",!u.isMenuInsideDropDown)("ant-dropdown-menu-sub",u.isMenuInsideDropDown)("ant-menu-sub",!u.isMenuInsideDropDown)("ant-menu-rtl","rtl"===u.dir),o.Q6J("ngClass",u.menuClass),o.xp6(1),o.Q6J("ngTemplateOutlet",u.templateOutlet))},directives:[q.mk,q.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const et=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],ot=[I.yW.bottomLeft];let v=(()=>{class a{constructor(g,u,k,oe,ze,Ze,Te){this.nzMenuService=g,this.cdr=u,this.nzSubmenuService=k,this.platform=oe,this.isMenuInsideDropDown=ze,this.directionality=Ze,this.noAnimation=Te,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new o.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=et,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(g){this.nzSubmenuService.setOpenStateWithoutDebounce(g)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(g){this.isActive=g,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(g)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(g){const u=(0,I.d_)(g);"rightTop"===u||"rightBottom"===u||"right"===u?this.position="right":("leftTop"===u||"leftBottom"===u||"left"===u)&&(this.position="left")}ngOnInit(){var g;this.nzMenuService.theme$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.theme=u,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.mode=u,"horizontal"===u?this.overlayPositions=ot:"vertical"===u&&(this.overlayPositions=et),this.cdr.markForCheck()}),(0,Z.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.inlinePaddingLeft="inline"===u?this.level*k:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.isActive=u,u!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=u,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const g=this.listOfNzMenuItemDirective,u=g.changes,k=(0,F.T)(u,...g.map(oe=>oe.selected$));u.pipe((0,le.O)(g),(0,te.w)(()=>k),(0,le.O)(!0),(0,w.U)(()=>g.some(oe=>oe.nzSelected)),(0,H.R)(this.destroy$)).subscribe(oe=>{this.isSelected=oe,this.cdr.markForCheck()})}ngOnChanges(g){const{nzOpen:u}=g;u&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(ve),o.Y36(o.sBO),o.Y36(Ue),o.Y36(P.t4),o.Y36(Oe),o.Y36(V.Is,8),o.Y36(ne.P,9))},a.\u0275cmp=o.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(g,u,k){if(1&g&&(o.Suo(k,a,5),o.Suo(k,Me,5)),2&g){let oe;o.iGM(oe=o.CRH())&&(u.listOfNzSubMenuComponent=oe),o.iGM(oe=o.CRH())&&(u.listOfNzMenuItemDirective=oe)}},viewQuery:function(g,u){if(1&g&&o.Gf(R.xu,7,o.SBq),2&g){let k;o.iGM(k=o.CRH())&&(u.cdkOverlayOrigin=k.first)}},hostVars:34,hostBindings:function(g,u){2&g&&o.ekj("ant-dropdown-menu-submenu",u.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-dropdown-menu-submenu-open",u.isMenuInsideDropDown&&u.nzOpen)("ant-dropdown-menu-submenu-selected",u.isMenuInsideDropDown&&u.isSelected)("ant-dropdown-menu-submenu-vertical",u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-dropdown-menu-submenu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-dropdown-menu-submenu-inline",u.isMenuInsideDropDown&&"inline"===u.mode)("ant-dropdown-menu-submenu-active",u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu",!u.isMenuInsideDropDown)("ant-menu-submenu-disabled",!u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-submenu-open",!u.isMenuInsideDropDown&&u.nzOpen)("ant-menu-submenu-selected",!u.isMenuInsideDropDown&&u.isSelected)("ant-menu-submenu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-menu-submenu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-menu-submenu-inline",!u.isMenuInsideDropDown&&"inline"===u.mode)("ant-menu-submenu-active",!u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu-rtl","rtl"===u.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[o._Bn([Ue]),o.TTD],attrs:xe,ngContentSelectors:Q,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(g,u){if(1&g&&(o.F$t(J),o.TgZ(0,"div",0,1),o.NdJ("subMenuMouseState",function(oe){return u.setMouseEnterState(oe)})("toggleSubMenu",function(){return u.toggleSubMenu()}),o.YNc(2,Ve,1,0,"ng-content",2),o.qZA(),o.YNc(3,be,1,6,"div",3),o.YNc(4,ee,1,5,"ng-template",null,4,o.W1O),o.YNc(6,S,1,0,"ng-template",null,5,o.W1O)),2&g){const k=o.MAs(5);o.Q6J("nzIcon",u.nzIcon)("nzTitle",u.nzTitle)("mode",u.mode)("nzDisabled",u.nzDisabled)("isMenuInsideDropDown",u.isMenuInsideDropDown)("paddingLeft",u.nzPaddingLeft||u.inlinePaddingLeft),o.xp6(2),o.Q6J("ngIf",!u.nzTitle),o.xp6(1),o.Q6J("ngIf","inline"===u.mode)("ngIfElse",k)}},directives:[$e,nt,it,R.xu,q.O5,ne.P,R.pI],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,se.yF)()],a.prototype,"nzOpen",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),a})();function rt(a,j){return a||j}function st(a){return a||!1}let at=(()=>{class a{constructor(g,u,k,oe){this.nzMenuService=g,this.isMenuInsideDropDown=u,this.cdr=k,this.directionality=oe,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new o.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new E.X(this.nzInlineCollapsed),this.mode$=new E.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(g){this.nzInlineCollapsed=g,this.inlineCollapsed$.next(g)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(g=>g.nzOpen),this.listOfNzSubMenuComponent.forEach(g=>g.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(g=>g.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var g;(0,Z.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,k])=>{this.actualMode=u?"vertical":k,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.nzClick.emit(u),this.nzSelectable&&!u.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(k=>k.setSelectedState(k===u))}),this.dir=this.directionality.value,null===(g=this.directionality.change)||void 0===g||g.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(g){const{nzInlineCollapsed:u,nzInlineIndent:k,nzTheme:oe,nzMode:ze}=g;u&&this.inlineCollapsed$.next(this.nzInlineCollapsed),k&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),oe&&this.nzMenuService.setTheme(this.nzTheme),ze&&(this.mode$.next(this.nzMode),!g.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ze=>Ze.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(ve),o.Y36(Oe),o.Y36(o.sBO),o.Y36(V.Is,8))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(g,u,k){if(1&g&&(o.Suo(k,Me,5),o.Suo(k,v,5)),2&g){let oe;o.iGM(oe=o.CRH())&&(u.listOfNzMenuItemDirective=oe),o.iGM(oe=o.CRH())&&(u.listOfNzSubMenuComponent=oe)}},hostVars:34,hostBindings:function(g,u){2&g&&o.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-dropdown-menu-root",u.isMenuInsideDropDown)("ant-dropdown-menu-light",u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-dropdown-menu-dark",u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-dropdown-menu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-dropdown-menu-inline",u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-dropdown-menu-inline-collapsed",u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu",!u.isMenuInsideDropDown)("ant-menu-root",!u.isMenuInsideDropDown)("ant-menu-light",!u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-menu-dark",!u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-menu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-menu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-menu-inline",!u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-menu-inline-collapsed",!u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu-rtl","rtl"===u.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[o._Bn([{provide:we,useClass:ve},{provide:ve,useFactory:rt,deps:[[new o.tp0,new o.FiY,ve],we]},{provide:Oe,useFactory:st,deps:[[new o.tp0,new o.FiY,Oe]]}]),o.TTD]}),(0,i.gn)([(0,se.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,i.gn)([(0,se.yF)()],a.prototype,"nzSelectable",void 0),a})(),pt=(()=>{class a{constructor(g,u){this.elementRef=g,this.renderer=u,this.renderer.addClass(g.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(g){return new(g||a)(o.Y36(o.SBq),o.Y36(o.Qsj))},a.\u0275dir=o.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[V.vT,q.ez,P.ud,R.U8,de.PV,ne.g,fe.T]]}),a})()},8144:(Ee,re,r)=>{r.d(re,{NU:()=>ie,$1:()=>le,zf:()=>V});var i=r(226),o=r(9808),t=r(5e3),E=r(655),F=r(8929),Z=r(7625),w=r(9439),X=r(1721);function O(R,I){}const L=function(R){return{$implicit:R}};function G(R,I){if(1&R&&(t.TgZ(0,"span",4),t.YNc(1,O,0,0,"ng-template",5),t.qZA()),2&R){const P=t.oxw(),ne=P.last,q=P.index,de=t.oxw();t.Udp("margin-bottom","vertical"===de.nzDirection?ne?null:de.spaceSize:null,"px")("margin-right","horizontal"===de.nzDirection?ne?null:de.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",de.nzSplit)("ngTemplateOutletContext",t.VKq(6,L,q))}}function K(R,I){if(1&R&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,G,2,8,"span",3)),2&R){const P=I.$implicit,ne=I.last,q=t.oxw();t.Udp("margin-bottom","vertical"===q.nzDirection?ne?null:q.spaceSize:null,"px")("margin-right","horizontal"===q.nzDirection?ne?null:q.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",P),t.xp6(1),t.Q6J("ngIf",q.nzSplit&&!ne)}}const H=["*"];let le=(()=>{class R{constructor(){}}return R.\u0275fac=function(P){return new(P||R)},R.\u0275dir=t.lG2({type:R,selectors:[["","nzSpaceItem",""]]}),R})();const se={small:8,middle:16,large:24};let ie=(()=>{class R{constructor(P,ne){this.nzConfigService=P,this.cdr=ne,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=se.small,this.destroy$=new F.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?se[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return R.\u0275fac=function(P){return new(P||R)(t.Y36(w.jY),t.Y36(t.sBO))},R.\u0275cmp=t.Xpm({type:R,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(P,ne,q){if(1&P&&t.Suo(q,le,4,t.Rgc),2&P){let de;t.iGM(de=t.CRH())&&(ne.items=de)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(P,ne){2&P&&(t.Udp("flex-wrap",ne.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===ne.nzDirection)("ant-space-vertical","vertical"===ne.nzDirection)("ant-space-align-start","start"===ne.mergedAlign)("ant-space-align-end","end"===ne.mergedAlign)("ant-space-align-center","center"===ne.mergedAlign)("ant-space-align-baseline","baseline"===ne.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:H,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(P,ne){1&P&&(t.F$t(),t.Hsn(0),t.YNc(1,K,3,6,"ng-template",0)),2&P&&(t.xp6(1),t.Q6J("ngForOf",ne.items))},directives:[o.sg,o.tP,o.O5],encapsulation:2,changeDetection:0}),(0,E.gn)([(0,X.yF)()],R.prototype,"nzWrap",void 0),(0,E.gn)([(0,w.oS)()],R.prototype,"nzSize",void 0),R})(),V=(()=>{class R{}return R.\u0275fac=function(P){return new(P||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[i.vT,o.ez]]}),R})()},7525:(Ee,re,r)=>{r.d(re,{W:()=>ue,j:()=>W});var i=r(655),o=r(5e3),t=r(8929),E=r(591),F=r(839),Z=r(8723),w=r(1177);class O{constructor(m){this.durationSelector=m}call(m,B){return B.subscribe(new L(m,this.durationSelector))}}class L extends w.Ds{constructor(m,B){super(m),this.durationSelector=B,this.hasValue=!1}_next(m){try{const B=this.durationSelector.call(this,m);B&&this._tryNext(m,B)}catch(B){this.destination.error(B)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(m,B){let A=this.durationSubscription;this.value=m,this.hasValue=!0,A&&(A.unsubscribe(),this.remove(A)),A=(0,w.ft)(B,new w.IY(this)),A&&!A.closed&&this.add(this.durationSubscription=A)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const m=this.value,B=this.durationSubscription;B&&(this.durationSubscription=void 0,B.unsubscribe(),this.remove(B)),this.value=void 0,this.hasValue=!1,super._next(m)}}}var G=r(1059),K=r(5778),H=r(7545),le=r(7625),te=r(9439),se=r(1721),ie=r(226),V=r(9808),R=r(7144);function I(Y,m){1&Y&&(o.TgZ(0,"span",3),o._UZ(1,"i",4),o._UZ(2,"i",4),o._UZ(3,"i",4),o._UZ(4,"i",4),o.qZA())}function P(Y,m){}function ne(Y,m){if(1&Y&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&Y){const B=o.oxw(2);o.xp6(1),o.Oqu(B.nzTip)}}function q(Y,m){if(1&Y&&(o.TgZ(0,"div"),o.TgZ(1,"div",5),o.YNc(2,P,0,0,"ng-template",6),o.YNc(3,ne,2,1,"div",7),o.qZA(),o.qZA()),2&Y){const B=o.oxw(),A=o.MAs(1);o.xp6(1),o.ekj("ant-spin-rtl","rtl"===B.dir)("ant-spin-spinning",B.isLoading)("ant-spin-lg","large"===B.nzSize)("ant-spin-sm","small"===B.nzSize)("ant-spin-show-text",B.nzTip),o.xp6(1),o.Q6J("ngTemplateOutlet",B.nzIndicator||A),o.xp6(1),o.Q6J("ngIf",B.nzTip)}}function de(Y,m){if(1&Y&&(o.TgZ(0,"div",9),o.Hsn(1),o.qZA()),2&Y){const B=o.oxw();o.ekj("ant-spin-blur",B.isLoading)}}const fe=["*"];let ue=(()=>{class Y{constructor(B,A,U){this.nzConfigService=B,this.cdr=A,this.directionality=U,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new E.X(this.nzSpinning),this.delay$=new F.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var B;this.delay$.pipe((0,G.O)(this.nzDelay),(0,K.x)(),(0,H.w)(U=>0===U?this.spinning$:this.spinning$.pipe(function X(Y){return m=>m.lift(new O(Y))}(ye=>(0,Z.H)(ye?U:0)))),(0,le.R)(this.destroy$)).subscribe(U=>{this.isLoading=U,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,le.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(B=this.directionality.change)||void 0===B||B.pipe((0,le.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzSpinning:A,nzDelay:U}=B;A&&this.spinning$.next(this.nzSpinning),U&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Y.\u0275fac=function(B){return new(B||Y)(o.Y36(te.jY),o.Y36(o.sBO),o.Y36(ie.Is,8))},Y.\u0275cmp=o.Xpm({type:Y,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(B,A){2&B&&o.ekj("ant-spin-nested-loading",!A.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[o.TTD],ngContentSelectors:fe,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(B,A){1&B&&(o.F$t(),o.YNc(0,I,5,0,"ng-template",null,0,o.W1O),o.YNc(2,q,4,12,"div",1),o.YNc(3,de,2,2,"div",2)),2&B&&(o.xp6(2),o.Q6J("ngIf",A.isLoading),o.xp6(1),o.Q6J("ngIf",!A.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,i.gn)([(0,te.oS)()],Y.prototype,"nzIndicator",void 0),(0,i.gn)([(0,se.Rn)()],Y.prototype,"nzDelay",void 0),(0,i.gn)([(0,se.yF)()],Y.prototype,"nzSimple",void 0),(0,i.gn)([(0,se.yF)()],Y.prototype,"nzSpinning",void 0),Y})(),W=(()=>{class Y{}return Y.\u0275fac=function(B){return new(B||Y)},Y.\u0275mod=o.oAB({type:Y}),Y.\u0275inj=o.cJS({imports:[[ie.vT,V.ez,R.Q8]]}),Y})()}}]);