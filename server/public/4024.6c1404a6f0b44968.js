"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{1912:(Se,re,r)=>{r.d(re,{s:()=>le});var n=r(5e3),i=r(6042),t=r(2643),S=r(2683),R=r(3640),w=r(2160),X=r(3762),M=r(647);let L=(()=>{class te{constructor(ie){this.cookies=ie,this.location=function Z(te){return encodeURIComponent(te).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return te.\u0275fac=function(ie){return new(ie||te)(n.Y36(w.N))},te.\u0275cmp=n.Xpm({type:te,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(ie,V){1&ie&&(n.TgZ(0,"nz-list",0),n.TgZ(1,"nz-list-item"),n.TgZ(2,"form",1),n._UZ(3,"input",2),n.TgZ(4,"button",3),n._UZ(5,"i",4),n._uU(6," Sign In with a Google Account "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"nz-list-item"),n.TgZ(8,"form",1),n._UZ(9,"input",2),n.TgZ(10,"button",3),n._uU(11," Sign In with an ORCID Account "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(12,"nz-list-item"),n.TgZ(13,"form",1),n._UZ(14,"input",2),n.TgZ(15,"button",3),n._UZ(16,"i",5),n._uU(17," Sign In with a Github Account "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&ie&&(n.xp6(2),n.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken),n.xp6(5),n.MGl("action","/api/auth/orcid?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken),n.xp6(4),n.MGl("action","/api/auth/github?origin=",V.location,"",n.LSH),n.xp6(1),n.s9C("value",V.xsrfToken))},directives:[X.n_,X.AA,i.ix,t.dQ,S.w,M.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),te})();function G(te,se){1&te&&(n.ynx(0),n.TgZ(1,"p",5),n._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),n.qZA(),n._UZ(3,"cvc-auth-options-list"),n.BQk())}function K(te,se){1&te&&n._uU(0," Sign In\n")}function H(te,se){if(1&te){const ie=n.EpF();n.TgZ(0,"button",0),n.NdJ("click",function(){return n.CHM(ie),n.oxw().handleCancel()}),n._uU(1,"Cancel"),n.qZA()}}let le=(()=>{class te{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return te.\u0275fac=function(ie){return new(ie||te)},te.\u0275cmp=n.Xpm({type:te,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(ie,V){if(1&ie&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return V.showAuth()}),n.TgZ(1,"span"),n._uU(2,"Sign In"),n.qZA(),n.qZA(),n.TgZ(3,"nz-modal",1),n.NdJ("nzVisibleChange",function(I){return V.authVisible=I})("nzOnCancel",function(){return V.handleCancel()}),n.YNc(4,G,4,0,"ng-container",2),n.qZA(),n.YNc(5,K,1,0,"ng-template",null,3,n.W1O),n.YNc(7,H,2,0,"ng-template",null,4,n.W1O)),2&ie){const P=n.MAs(6),I=n.MAs(8);n.xp6(3),n.Q6J("nzVisible",V.authVisible)("nzTitle",P)("nzFooter",I)}},directives:[i.ix,t.dQ,S.w,R.du,R.Hf,L],styles:["[_nghost-%COMP%]{display:inline-block}"]}),te})()},1844:(Se,re,r)=>{r.d(re,{B:()=>X});var n=r(9808),i=r(6042),t=r(3640),S=r(3762),R=r(647),Z=r(5e3);let w=(()=>{class M{}return M.\u0275fac=function(G){return new(G||M)},M.\u0275mod=Z.oAB({type:M}),M.\u0275inj=Z.cJS({imports:[[n.ez,R.PV,S.Ph,i.sL]]}),M})(),X=(()=>{class M{}return M.\u0275fac=function(G){return new(G||M)},M.\u0275mod=Z.oAB({type:M}),M.\u0275inj=Z.cJS({imports:[[n.ez,i.sL,t.Qp,w]]}),M})()},7881:(Se,re,r)=>{r.d(re,{L:()=>Z});var n=r(5e3),i=r(9808),t=r(6699);function S(w,X){if(1&w&&n._UZ(0,"nz-avatar",2),2&w){const M=n.oxw();n.Q6J("nzSrc",M.user.profileImagePath)("nzSize",M.size)}}function R(w,X){if(1&w&&(n._UZ(0,"nz-avatar",3),n.ALo(1,"uppercase")),2&w){const M=n.oxw();n.Q6J("nzSize",M.size)("nzText",n.lcZ(1,2,M.user.displayName.charAt(0)))}}let Z=(()=>{class w{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return w.\u0275fac=function(M){return new(M||w)},w.\u0275cmp=n.Xpm({type:w,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(M,L){if(1&M&&(n.YNc(0,S,1,2,"nz-avatar",0),n.YNc(1,R,2,4,"ng-template",null,1,n.W1O)),2&M){const G=n.MAs(2);n.Q6J("ngIf",L.user.profileImagePath)("ngIfElse",G)}},directives:[i.O5,t.Dz],pipes:[i.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),w})()},5473:(Se,re,r)=>{r.d(re,{H:()=>S});var n=r(9808),i=r(6699),t=r(5e3);let S=(()=>{class R{}return R.\u0275fac=function(w){return new(w||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[n.ez,i.Rt]]}),R})()},9350:(Se,re,r)=>{r.d(re,{a:()=>M});var n=r(4850),i=r(5154),t=r(373),S=r(1059),R=r(712),Z=r(5e3),w=r(520);const X={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let M=(()=>{class L{constructor(K,H){function le(I){return!(!I||I.role!==R.i44.Admin)}function te(I){return!(!I||I.role!==R.i44.Editor&&I.role!==R.i44.Admin)}function se(I){return!(!I||I.role!==R.i44.Curator)}function ie(I){return!(!I||I.role!==R.i44.Curator&&I.role!==R.i44.Editor&&I.role!==R.i44.Admin)}function V(I){var b,ne;return!(!I||I.role!==R.i44.Editor&&I.role!==R.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===(b=I.mostRecentConflictOfInterestStatement)||void 0===b?void 0:b.coiStatus)!=R.Mgx.Conflict&&(null===(ne=I.mostRecentConflictOfInterestStatement)||void 0===ne?void 0:ne.coiStatus)!=R.Mgx.Valid)}function P(I){if(I.mostRecentOrganizationId)return I.organizations.find(b=>b.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=K,this.http=H,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,n.U)(I=>({data:I.data,loading:I.loading,networkStatus:I.networkStatus})),(0,i.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,S.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,n.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!==I,signedOut:null===I,canCurate:ie(I),canModerate:V(I),isAdmin:le(I),isEditor:te(I),isCurator:se(I),organizations:null===I?[]:I.organizations,mostRecentOrg:null===I?void 0:P(I),invalidCoi:te(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===R.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===R.Mgx.Missing)})),(0,S.O)(X),(0,i.d)(1)),this.signedIn$=this.viewer$.pipe((0,n.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,n.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,n.U)(I=>le(I))),this.isEditor$=this.viewer$.pipe((0,n.U)(I=>te(I))),this.isCurator$=this.viewer$.pipe((0,n.U)(I=>se(I))),this.canCurate$=this.viewer$.pipe((0,n.U)(I=>ie(I))),this.canModerate$=this.viewer$.pipe((0,n.U)(I=>V(I)))}signOut(){this.http.get("/api/sign_out").subscribe(K=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return L.\u0275fac=function(K){return new(K||L)(Z.LFG(R.Tt7),Z.LFG(w.eN))},L.\u0275prov=Z.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},6123:(Se,re,r)=>{r.d(re,{U:()=>R});var n=r(8929),i=r(591),t=r(7625),S=r(537);class R{constructor(w){this.networkErrorService=w}mutate(w,X,M){let L=new n.xQ,G={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{L.next(),L.complete()}};return G.isSubmitting$.next(!0),w.mutate(X).pipe((0,t.R)(L),(0,S.x)(()=>{G.isSubmitting$.next(!1)})).subscribe({next:K=>{K.data&&M&&M(K.data)},error:K=>{K.graphQLErrors.length>0?G.submitError$.next(K.graphQLErrors.map(H=>H.message)):K.networkError&&this.networkErrorService.networkError$.next(K.networkError),G.cleanup()},complete:()=>{G.submitError$.next([]),G.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),G.cleanup()}}),G}}},822:(Se,re,r)=>{r.d(re,{V:()=>X});var n=r(5e3),i=r(9808),t=r(2359);function S(M,L){if(1&M&&n._UZ(0,"nz-alert",4),2&M){const G=n.oxw();n.Q6J("nzDescription",G.errors[0])}}function R(M,L){if(1&M&&n._UZ(0,"nz-alert",5),2&M){n.oxw();const G=n.MAs(3);n.Q6J("nzDescription",G)}}function Z(M,L){if(1&M&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&M){const G=L.$implicit;n.xp6(1),n.Oqu(G)}}function w(M,L){if(1&M&&(n.TgZ(0,"ul",6),n.YNc(1,Z,2,1,"li",7),n.qZA()),2&M){const G=n.oxw();n.xp6(1),n.Q6J("ngForOf",G.errors)}}let X=(()=>{class M{constructor(){}ngOnInit(){}}return M.\u0275fac=function(G){return new(G||M)},M.\u0275cmp=n.Xpm({type:M,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(G,K){1&G&&(n.YNc(0,S,1,1,"nz-alert",0),n.YNc(1,R,1,1,"nz-alert",1),n.YNc(2,w,2,1,"ng-template",2,3,n.W1O)),2&G&&(n.Q6J("ngIf",1===K.errors.length),n.xp6(1),n.Q6J("ngIf",K.errors.length>1))},directives:[i.O5,t.r,i.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),M})()},7008:(Se,re,r)=>{r.d(re,{B:()=>S});var n=r(9808),i=r(2359),t=r(5e3);let S=(()=>{class R{}return R.\u0275fac=function(w){return new(w||R)},R.\u0275mod=t.oAB({type:R}),R.\u0275inj=t.cJS({imports:[[n.ez,i.L]]}),R})()},8785:(Se,re,r)=>{r.d(re,{t:()=>ne});var n=r(5e3),i=r(6123),t=r(8929),S=r(7625),R=r(712),Z=r(9169),w=r(7484),X=r(9808),M=r(2359),L=r(1894),G=r(4546),K=r(822),H=r(7525),le=r(3868),te=r(4182),se=r(6042),ie=r(2643),V=r(2683);function P(q,de){1&q&&n._UZ(0,"nz-alert",7)}function I(q,de){if(1&q&&(n.TgZ(0,"nz-form-item"),n._UZ(1,"cvc-form-errors-alert",8),n.qZA()),2&q){const ge=n.oxw();n.xp6(1),n.Q6J("errors",ge.errorMessages)}}function b(q,de){if(1&q){const ge=n.EpF();n.TgZ(0,"nz-form-item"),n.TgZ(1,"textarea",9),n.NdJ("ngModelChange",function(ue){return n.CHM(ge),n.oxw().coiText=ue}),n.qZA(),n.qZA()}if(2&q){const ge=n.oxw();n.xp6(1),n.Q6J("ngModel",ge.coiText)}}let ne=(()=>{class q{constructor(ge,pe){this.updateCoiGql=ge,this.coiUpdatedEvent=new n.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new i.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,S.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return q.\u0275fac=function(ge){return new(ge||q)(n.Y36(R.IP1),n.Y36(Z.Y))},q.\u0275cmp=n.Xpm({type:q,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(ge,pe){1&ge&&(n.TgZ(0,"nz-card"),n.YNc(1,P,1,0,"nz-alert",0),n.YNc(2,I,2,1,"nz-form-item",1),n.TgZ(3,"nz-spin",2),n.TgZ(4,"nz-form-item"),n.TgZ(5,"nz-radio-group",3),n.NdJ("ngModelChange",function(k){return pe.coiStatus=k}),n.TgZ(6,"label",4),n._uU(7,"I do not have any potential conflicts of interest."),n.qZA(),n.TgZ(8,"label",5),n._uU(9,"I do have a potential conflict of interest."),n.qZA(),n.qZA(),n.qZA(),n.YNc(10,b,2,1,"nz-form-item",1),n.TgZ(11,"nz-form-item"),n.TgZ(12,"button",6),n.NdJ("click",function(){return pe.updateCoi()}),n._uU(13," Save Conflict of Interest Statement "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&ge&&(n.xp6(1),n.Q6J("ngIf",pe.success),n.xp6(1),n.Q6J("ngIf",pe.errorMessages.length>0),n.xp6(1),n.Q6J("nzSpinning",pe.loading),n.xp6(2),n.Q6J("ngModel",pe.coiStatus),n.xp6(5),n.Q6J("ngIf","coiPresent"===pe.coiStatus),n.xp6(2),n.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[w.bd,X.O5,M.r,L.SK,G.Nx,K.V,H.W,le.Dg,te.JJ,te.On,le.Of,te.Fj,se.ix,ie.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),q})()},330:(Se,re,r)=>{r.d(re,{e:()=>K});var n=r(9808),i=r(4182),t=r(6949),S=r(7484),R=r(2359),Z=r(4546),w=r(7008),X=r(3868),M=r(7525),L=r(6042),G=r(5e3);let K=(()=>{class H{}return H.\u0275fac=function(te){return new(te||H)},H.\u0275mod=G.oAB({type:H}),H.\u0275inj=G.cJS({imports:[[n.ez,i.u5,Z.U5,i.UX,t.WG,S.vh,R.L,X.aF,L.sL,M.j,w.B]]}),H})()},712:(Se,re,r)=>{r.d(re,{ti:()=>Bi,$G1:()=>wo,iGM:()=>xo,iwm:()=>j,Vr2:()=>u,A94:()=>xr,mdl:()=>W,Gbq:()=>Hn,u4i:()=>oe,ejK:()=>Pr,uBv:()=>ze,td:()=>qn,Tq1:()=>di,q8c:()=>Ni,WRV:()=>io,IZ6:()=>ao,qf4:()=>fo,Rdc:()=>Do,fpJ:()=>er,k2T:()=>Xo,UWf:()=>to,cMj:()=>br,UIR:()=>ti,E8d:()=>Te,P_b:()=>ii,Mgx:()=>be,iST:()=>ri,Kk:()=>ai,OfU:()=>Ge,kQf:()=>ki,l4w:()=>Er,JQ3:()=>nr,db2:()=>os,h01:()=>ke,wg3:()=>Gr,k7O:()=>li,kv3:()=>Qo,R8w:()=>Ye,GB2:()=>wr,Zyn:()=>Ke,dUU:()=>mi,kq9:()=>He,vRc:()=>Zo,Ud2:()=>gi,GYx:()=>Go,AO2:()=>Je,BTF:()=>vi,eY8:()=>Ii,_Aq:()=>Xe,pHu:()=>Qr,tI1:()=>ct,Q_P:()=>cr,Sx0:()=>tt,Ybm:()=>yi,Cp0:()=>f,RTy:()=>E,sBY:()=>Zr,kqt:()=>C,B0s:()=>fr,rzy:()=>_i,BQZ:()=>F,sfv:()=>ce,TNk:()=>Wr,rJ8:()=>Si,FOU:()=>zr,Q4m:()=>Wo,Fvz:()=>he,cCu:()=>Jr,_jb:()=>qi,MYm:()=>Hi,oRL:()=>mt,lfy:()=>Jo,fow:()=>ft,X5f:()=>Li,WOS:()=>Kr,Lr0:()=>Xr,Del:()=>es,xlL:()=>gt,io:()=>Ri,WGV:()=>ns,OHm:()=>Fi,lYz:()=>ht,FKQ:()=>Ko,B97:()=>$i,mII:()=>Po,ghc:()=>Mi,NQC:()=>vt,JDX:()=>lt,VZq:()=>Ui,EwB:()=>hr,FJi:()=>Lt,L5n:()=>Yi,rZD:()=>zt,SrV:()=>yt,Bk6:()=>ss,TiL:()=>ro,yic:()=>Ct,F3s:()=>It,jw9:()=>Tt,g0X:()=>cs,kQl:()=>_t,LLl:()=>Ao,WFw:()=>pr,o71:()=>Dt,jMx:()=>zs,A4J:()=>ji,Vj7:()=>ur,D9L:()=>Cr,Xft:()=>Ar,mpB:()=>St,m$d:()=>hs,IP1:()=>Tr,LiH:()=>fs,wbP:()=>Dr,sLD:()=>us,yqR:()=>ps,cEv:()=>lo,i44:()=>Et,vMt:()=>bo,tJ6:()=>po,IRu:()=>Nt,Qzn:()=>Vi,iJT:()=>Es,qP7:()=>l,Qtd:()=>Cs,FB1:()=>A,q1D:()=>Ts,huM:()=>c,ZYZ:()=>Co,nnL:()=>Or,Bo4:()=>Os,ubO:()=>Ds,tw_:()=>ho,wpb:()=>g,BnY:()=>sr,_eC:()=>or,fwG:()=>zo,zwS:()=>To,pP7:()=>$,Tt7:()=>Eo,Kmw:()=>Oo});var n=r(655);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}var S=r(9245);function R(e,s){for(var z,o=/\r\n|[\n\r]/g,d=1,v=s+1;(z=o.exec(e.body))&&z.index<s;)d+=1,v=s+1-(z.index+z[0].length);return{line:d,column:v}}function Z(e){return w(e.source,R(e.source,e.start))}function w(e,s){var o=e.locationOffset.column-1,d=M(o)+e.body,v=s.line-1,T=s.line+(e.locationOffset.line-1),x=s.column+(1===s.line?o:0),me="".concat(e.name,":").concat(T,":").concat(x,"\n"),Le=d.split(/\r\n|[\n\r]/g),je=Le[v];if(je.length>120){for(var Ot=Math.floor(x/80),xt=x%80,We=[],Be=0;Be<je.length;Be+=80)We.push(je.slice(Be,Be+80));return me+X([["".concat(T),We[0]]].concat(We.slice(1,Ot+1).map(function(Rt){return["",Rt]}),[[" ",M(xt-1)+"^"],["",We[Ot+1]]]))}return me+X([["".concat(T-1),Le[v-1]],["".concat(T),je],["",M(x-1)+"^"],["".concat(T+1),Le[v+1]]])}function X(e){var s=e.filter(function(d){return void 0!==d[1]}),o=Math.max.apply(Math,s.map(function(d){return d[0].length}));return s.map(function(d){var z=d[1];return function L(e,s){return M(e-s.length)+s}(o,d[0])+(z?" | "+z:" |")}).join("\n")}function M(e){return Array(e+1).join(" ")}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}function H(e,s){for(var o=0;o<s.length;o++){var d=s[o];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function ie(e,s){return!s||"object"!==G(s)&&"function"!=typeof s?V(e):s}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){var s="function"==typeof Map?new Map:void 0;return P=function(d){if(null===d||!function ne(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(d))return d;if("function"!=typeof d)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(d))return s.get(d);s.set(d,v)}function v(){return I(d,arguments,de(this).constructor)}return v.prototype=Object.create(d.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),q(v,d)},P(e)}function I(e,s,o){return(I=b()?Reflect.construct:function(v,z,T){var D=[null];D.push.apply(D,z);var me=new(Function.bind.apply(v,D));return T&&q(me,T.prototype),me}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function q(e,s){return(q=Object.setPrototypeOf||function(d,v){return d.__proto__=v,d})(e,s)}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(e)}var ge=function(e){!function te(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&q(e,s)}(o,e);var s=function se(e){var s=b();return function(){var v,d=de(e);if(s){var z=de(this).constructor;v=Reflect.construct(d,arguments,z)}else v=d.apply(this,arguments);return ie(this,v)}}(o);function o(d,v,z,T,D,x,me){var Le,je,Ot,xt,We;(function K(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,o),We=s.call(this,d);var $t,Be=Array.isArray(v)?0!==v.length?v:void 0:v?[v]:void 0,Rt=z;!Rt&&Be&&(Rt=null===($t=Be[0].loc)||void 0===$t?void 0:$t.source);var Pt,Mt=T;!Mt&&Be&&(Mt=Be.reduce(function(ut,At){return At.loc&&ut.push(At.loc.start),ut},[])),Mt&&0===Mt.length&&(Mt=void 0),T&&z?Pt=T.map(function(ut){return R(z,ut)}):Be&&(Pt=Be.reduce(function(ut,At){return At.loc&&ut.push(R(At.loc.source,At.loc.start)),ut},[]));var Ft=me;if(null==Ft&&null!=x){var Vt=x.extensions;(function t(e){return"object"==i(e)&&null!==e})(Vt)&&(Ft=Vt)}return Object.defineProperties(V(We),{name:{value:"GraphQLError"},message:{value:d,enumerable:!0,writable:!0},locations:{value:null!==(Le=Pt)&&void 0!==Le?Le:void 0,enumerable:null!=Pt},path:{value:null!=D?D:void 0,enumerable:null!=D},nodes:{value:null!=Be?Be:void 0},source:{value:null!==(je=Rt)&&void 0!==je?je:void 0},positions:{value:null!==(Ot=Mt)&&void 0!==Ot?Ot:void 0},originalError:{value:x},extensions:{value:null!==(xt=Ft)&&void 0!==xt?xt:void 0,enumerable:null!=Ft}}),(null==x?void 0:x.stack)?(Object.defineProperty(V(We),"stack",{value:x.stack,writable:!0,configurable:!0}),ie(We)):(Error.captureStackTrace?Error.captureStackTrace(V(We),o):Object.defineProperty(V(We),"stack",{value:Error().stack,writable:!0,configurable:!0}),We)}return function le(e,s,o){s&&H(e.prototype,s),o&&H(e,o)}(o,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var o=0,d=e.nodes;o<d.length;o++){var v=d[o];v.loc&&(s+="\n\n"+Z(v.loc))}else if(e.source&&e.locations)for(var z=0,T=e.locations;z<T.length;z++)s+="\n\n"+w(e.source,T[z]);return s}(this)}},{key:S.YF,get:function(){return"Object"}}]),o}(P(Error));function ue(e,s,o){return new ge("Syntax Error: ".concat(o),void 0,e,[s])}var k=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),Y=r(848),p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),B=r(6261),O=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),U=r(2032),ye=function(){function e(o){var d=new Y.WU(p.SOF,0,0,0,0,null);this.source=o,this.lastToken=d,this.token=d,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var d=this.token;if(d.kind!==p.EOF)do{var v;d=null!==(v=d.next)&&void 0!==v?v:d.next=Ee(this,d)}while(d.kind===p.COMMENT);return d},e}();function De(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Ee(e,s){for(var o=e.source,d=o.body,v=d.length,z=s.end;z<v;){var T=d.charCodeAt(z),D=e.line,x=1+z-e.lineStart;switch(T){case 65279:case 9:case 32:case 44:++z;continue;case 10:++z,++e.line,e.lineStart=z;continue;case 13:10===d.charCodeAt(z+1)?z+=2:++z,++e.line,e.lineStart=z;continue;case 33:return new Y.WU(p.BANG,z,z+1,D,x,s);case 35:return xe(o,z,D,x,s);case 36:return new Y.WU(p.DOLLAR,z,z+1,D,x,s);case 38:return new Y.WU(p.AMP,z,z+1,D,x,s);case 40:return new Y.WU(p.PAREN_L,z,z+1,D,x,s);case 41:return new Y.WU(p.PAREN_R,z,z+1,D,x,s);case 46:if(46===d.charCodeAt(z+1)&&46===d.charCodeAt(z+2))return new Y.WU(p.SPREAD,z,z+3,D,x,s);break;case 58:return new Y.WU(p.COLON,z,z+1,D,x,s);case 61:return new Y.WU(p.EQUALS,z,z+1,D,x,s);case 64:return new Y.WU(p.AT,z,z+1,D,x,s);case 91:return new Y.WU(p.BRACKET_L,z,z+1,D,x,s);case 93:return new Y.WU(p.BRACKET_R,z,z+1,D,x,s);case 123:return new Y.WU(p.BRACE_L,z,z+1,D,x,s);case 124:return new Y.WU(p.PIPE,z,z+1,D,x,s);case 125:return new Y.WU(p.BRACE_R,z,z+1,D,x,s);case 34:return 34===d.charCodeAt(z+1)&&34===d.charCodeAt(z+2)?ee(o,z,D,x,s,e):N(o,z,D,x,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ve(o,z,T,D,x,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Q(o,z,D,x,s)}throw ue(o,z,Ne(T))}return new Y.WU(p.EOF,v,v,e.line,1+z-e.lineStart,s)}function Ne(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(De(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(De(e),".")}function xe(e,s,o,d,v){var T,z=e.body,D=s;do{T=z.charCodeAt(++D)}while(!isNaN(T)&&(T>31||9===T));return new Y.WU(p.COMMENT,s,D,o,d,v,z.slice(s+1,D))}function Ve(e,s,o,d,v,z){var T=e.body,D=o,x=s,me=!1;if(45===D&&(D=T.charCodeAt(++x)),48===D){if((D=T.charCodeAt(++x))>=48&&D<=57)throw ue(e,x,"Invalid number, unexpected digit after 0: ".concat(De(D),"."))}else x=$e(e,x,D),D=T.charCodeAt(x);if(46===D&&(me=!0,D=T.charCodeAt(++x),x=$e(e,x,D),D=T.charCodeAt(x)),(69===D||101===D)&&(me=!0,(43===(D=T.charCodeAt(++x))||45===D)&&(D=T.charCodeAt(++x)),x=$e(e,x,D),D=T.charCodeAt(x)),46===D||function fe(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(D))throw ue(e,x,"Invalid number, expected digit but got: ".concat(De(D),"."));return new Y.WU(me?p.FLOAT:p.INT,s,x,d,v,z,T.slice(s,x))}function $e(e,s,o){var d=e.body,v=s,z=o;if(z>=48&&z<=57){do{z=d.charCodeAt(++v)}while(z>=48&&z<=57);return v}throw ue(e,v,"Invalid number, expected digit but got: ".concat(De(z),"."))}function N(e,s,o,d,v){for(var z=e.body,T=s+1,D=T,x=0,me="";T<z.length&&!isNaN(x=z.charCodeAt(T))&&10!==x&&13!==x;){if(34===x)return me+=z.slice(D,T),new Y.WU(p.STRING,s,T+1,o,d,v,me);if(x<32&&9!==x)throw ue(e,T,"Invalid character within String: ".concat(De(x),"."));if(++T,92===x){switch(me+=z.slice(D,T-1),x=z.charCodeAt(T)){case 34:me+='"';break;case 47:me+="/";break;case 92:me+="\\";break;case 98:me+="\b";break;case 102:me+="\f";break;case 110:me+="\n";break;case 114:me+="\r";break;case 116:me+="\t";break;case 117:var Le=_(z.charCodeAt(T+1),z.charCodeAt(T+2),z.charCodeAt(T+3),z.charCodeAt(T+4));if(Le<0){var je=z.slice(T+1,T+5);throw ue(e,T,"Invalid character escape sequence: \\u".concat(je,"."))}me+=String.fromCharCode(Le),T+=4;break;default:throw ue(e,T,"Invalid character escape sequence: \\".concat(String.fromCharCode(x),"."))}D=++T}}throw ue(e,T,"Unterminated string.")}function ee(e,s,o,d,v,z){for(var T=e.body,D=s+3,x=D,me=0,Le="";D<T.length&&!isNaN(me=T.charCodeAt(D));){if(34===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2))return Le+=T.slice(x,D),new Y.WU(p.BLOCK_STRING,s,D+3,o,d,v,(0,U.W7)(Le));if(me<32&&9!==me&&10!==me&&13!==me)throw ue(e,D,"Invalid character within String: ".concat(De(me),"."));10===me?(++D,++z.line,z.lineStart=D):13===me?(10===T.charCodeAt(D+1)?D+=2:++D,++z.line,z.lineStart=D):92===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2)&&34===T.charCodeAt(D+3)?(Le+=T.slice(x,D)+'"""',x=D+=4):++D}throw ue(e,D,"Unterminated string.")}function _(e,s,o,d){return J(e)<<12|J(s)<<8|J(o)<<4|J(d)}function J(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Q(e,s,o,d,v){for(var z=e.body,T=z.length,D=s+1,x=0;D!==T&&!isNaN(x=z.charCodeAt(D))&&(95===x||x>=48&&x<=57||x>=65&&x<=90||x>=97&&x<=122);)++D;return new Y.WU(p.NAME,s,D,o,d,v,z.slice(s,D))}var Ie=function(){function e(o,d){var v=(0,B.T)(o)?o:new B.H(o);this._lexer=new ye(v),this._options=d}var s=e.prototype;return s.parseName=function(){var d=this.expectToken(p.NAME);return{kind:k.NAME,value:d.value,loc:this.loc(d)}},s.parseDocument=function(){var d=this._lexer.token;return{kind:k.DOCUMENT,definitions:this.many(p.SOF,this.parseDefinition,p.EOF),loc:this.loc(d)}},s.parseDefinition=function(){if(this.peek(p.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(p.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var d=this._lexer.token;if(this.peek(p.BRACE_L))return{kind:k.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(d)};var z,v=this.parseOperationType();return this.peek(p.NAME)&&(z=this.parseName()),{kind:k.OPERATION_DEFINITION,operation:v,name:z,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseOperationType=function(){var d=this.expectToken(p.NAME);switch(d.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(d)},s.parseVariableDefinitions=function(){return this.optionalMany(p.PAREN_L,this.parseVariableDefinition,p.PAREN_R)},s.parseVariableDefinition=function(){var d=this._lexer.token;return{kind:k.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(p.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(p.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(d)}},s.parseVariable=function(){var d=this._lexer.token;return this.expectToken(p.DOLLAR),{kind:k.VARIABLE,name:this.parseName(),loc:this.loc(d)}},s.parseSelectionSet=function(){var d=this._lexer.token;return{kind:k.SELECTION_SET,selections:this.many(p.BRACE_L,this.parseSelection,p.BRACE_R),loc:this.loc(d)}},s.parseSelection=function(){return this.peek(p.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var z,T,d=this._lexer.token,v=this.parseName();return this.expectOptionalToken(p.COLON)?(z=v,T=this.parseName()):T=v,{kind:k.FIELD,alias:z,name:T,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(p.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(d)}},s.parseArguments=function(d){return this.optionalMany(p.PAREN_L,d?this.parseConstArgument:this.parseArgument,p.PAREN_R)},s.parseArgument=function(){var d=this._lexer.token,v=this.parseName();return this.expectToken(p.COLON),{kind:k.ARGUMENT,name:v,value:this.parseValueLiteral(!1),loc:this.loc(d)}},s.parseConstArgument=function(){var d=this._lexer.token;return{kind:k.ARGUMENT,name:this.parseName(),value:(this.expectToken(p.COLON),this.parseValueLiteral(!0)),loc:this.loc(d)}},s.parseFragment=function(){var d=this._lexer.token;this.expectToken(p.SPREAD);var v=this.expectOptionalKeyword("on");return!v&&this.peek(p.NAME)?{kind:k.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(d)}:{kind:k.INLINE_FRAGMENT,typeCondition:v?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseFragmentDefinition=function(){var d,v=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(d=this._options)||void 0===d?void 0:d.experimentalFragmentVariables)?{kind:k.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(v)}:{kind:k.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(v)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(d){var v=this._lexer.token;switch(v.kind){case p.BRACKET_L:return this.parseList(d);case p.BRACE_L:return this.parseObject(d);case p.INT:return this._lexer.advance(),{kind:k.INT,value:v.value,loc:this.loc(v)};case p.FLOAT:return this._lexer.advance(),{kind:k.FLOAT,value:v.value,loc:this.loc(v)};case p.STRING:case p.BLOCK_STRING:return this.parseStringLiteral();case p.NAME:switch(this._lexer.advance(),v.value){case"true":return{kind:k.BOOLEAN,value:!0,loc:this.loc(v)};case"false":return{kind:k.BOOLEAN,value:!1,loc:this.loc(v)};case"null":return{kind:k.NULL,loc:this.loc(v)};default:return{kind:k.ENUM,value:v.value,loc:this.loc(v)}}case p.DOLLAR:if(!d)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var d=this._lexer.token;return this._lexer.advance(),{kind:k.STRING,value:d.value,block:d.kind===p.BLOCK_STRING,loc:this.loc(d)}},s.parseList=function(d){var v=this,z=this._lexer.token;return{kind:k.LIST,values:this.any(p.BRACKET_L,function(){return v.parseValueLiteral(d)},p.BRACKET_R),loc:this.loc(z)}},s.parseObject=function(d){var v=this,z=this._lexer.token;return{kind:k.OBJECT,fields:this.any(p.BRACE_L,function(){return v.parseObjectField(d)},p.BRACE_R),loc:this.loc(z)}},s.parseObjectField=function(d){var v=this._lexer.token,z=this.parseName();return this.expectToken(p.COLON),{kind:k.OBJECT_FIELD,name:z,value:this.parseValueLiteral(d),loc:this.loc(v)}},s.parseDirectives=function(d){for(var v=[];this.peek(p.AT);)v.push(this.parseDirective(d));return v},s.parseDirective=function(d){var v=this._lexer.token;return this.expectToken(p.AT),{kind:k.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(d),loc:this.loc(v)}},s.parseTypeReference=function(){var v,d=this._lexer.token;return this.expectOptionalToken(p.BRACKET_L)?(v=this.parseTypeReference(),this.expectToken(p.BRACKET_R),v={kind:k.LIST_TYPE,type:v,loc:this.loc(d)}):v=this.parseNamedType(),this.expectOptionalToken(p.BANG)?{kind:k.NON_NULL_TYPE,type:v,loc:this.loc(d)}:v},s.parseNamedType=function(){var d=this._lexer.token;return{kind:k.NAMED_TYPE,name:this.parseName(),loc:this.loc(d)}},s.parseTypeSystemDefinition=function(){var d=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(d.kind===p.NAME)switch(d.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(d)},s.peekDescription=function(){return this.peek(p.STRING)||this.peek(p.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("schema");var z=this.parseDirectives(!0),T=this.many(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);return{kind:k.SCHEMA_DEFINITION,description:v,directives:z,operationTypes:T,loc:this.loc(d)}},s.parseOperationTypeDefinition=function(){var d=this._lexer.token,v=this.parseOperationType();this.expectToken(p.COLON);var z=this.parseNamedType();return{kind:k.OPERATION_TYPE_DEFINITION,operation:v,type:z,loc:this.loc(d)}},s.parseScalarTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("scalar");var z=this.parseName(),T=this.parseDirectives(!0);return{kind:k.SCALAR_TYPE_DEFINITION,description:v,name:z,directives:T,loc:this.loc(d)}},s.parseObjectTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("type");var z=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:k.OBJECT_TYPE_DEFINITION,description:v,name:z,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseImplementsInterfaces=function(){var d;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLImplementsInterfaces)){var v=[];this.expectOptionalToken(p.AMP);do{v.push(this.parseNamedType())}while(this.expectOptionalToken(p.AMP)||this.peek(p.NAME));return v}return this.delimitedMany(p.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var d;return!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLEmptyFields)&&this.peek(p.BRACE_L)&&this._lexer.lookahead().kind===p.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(p.BRACE_L,this.parseFieldDefinition,p.BRACE_R)},s.parseFieldDefinition=function(){var d=this._lexer.token,v=this.parseDescription(),z=this.parseName(),T=this.parseArgumentDefs();this.expectToken(p.COLON);var D=this.parseTypeReference(),x=this.parseDirectives(!0);return{kind:k.FIELD_DEFINITION,description:v,name:z,arguments:T,type:D,directives:x,loc:this.loc(d)}},s.parseArgumentDefs=function(){return this.optionalMany(p.PAREN_L,this.parseInputValueDef,p.PAREN_R)},s.parseInputValueDef=function(){var d=this._lexer.token,v=this.parseDescription(),z=this.parseName();this.expectToken(p.COLON);var D,T=this.parseTypeReference();this.expectOptionalToken(p.EQUALS)&&(D=this.parseValueLiteral(!0));var x=this.parseDirectives(!0);return{kind:k.INPUT_VALUE_DEFINITION,description:v,name:z,type:T,defaultValue:D,directives:x,loc:this.loc(d)}},s.parseInterfaceTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("interface");var z=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:k.INTERFACE_TYPE_DEFINITION,description:v,name:z,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseUnionTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("union");var z=this.parseName(),T=this.parseDirectives(!0),D=this.parseUnionMemberTypes();return{kind:k.UNION_TYPE_DEFINITION,description:v,name:z,directives:T,types:D,loc:this.loc(d)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(p.EQUALS)?this.delimitedMany(p.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("enum");var z=this.parseName(),T=this.parseDirectives(!0),D=this.parseEnumValuesDefinition();return{kind:k.ENUM_TYPE_DEFINITION,description:v,name:z,directives:T,values:D,loc:this.loc(d)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseEnumValueDefinition,p.BRACE_R)},s.parseEnumValueDefinition=function(){var d=this._lexer.token,v=this.parseDescription(),z=this.parseName(),T=this.parseDirectives(!0);return{kind:k.ENUM_VALUE_DEFINITION,description:v,name:z,directives:T,loc:this.loc(d)}},s.parseInputObjectTypeDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("input");var z=this.parseName(),T=this.parseDirectives(!0),D=this.parseInputFieldsDefinition();return{kind:k.INPUT_OBJECT_TYPE_DEFINITION,description:v,name:z,directives:T,fields:D,loc:this.loc(d)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(p.BRACE_L,this.parseInputValueDef,p.BRACE_R)},s.parseTypeSystemExtension=function(){var d=this._lexer.lookahead();if(d.kind===p.NAME)switch(d.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(d)},s.parseSchemaExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var v=this.parseDirectives(!0),z=this.optionalMany(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);if(0===v.length&&0===z.length)throw this.unexpected();return{kind:k.SCHEMA_EXTENSION,directives:v,operationTypes:z,loc:this.loc(d)}},s.parseScalarTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var v=this.parseName(),z=this.parseDirectives(!0);if(0===z.length)throw this.unexpected();return{kind:k.SCALAR_TYPE_EXTENSION,name:v,directives:z,loc:this.loc(d)}},s.parseObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var v=this.parseName(),z=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===z.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:k.OBJECT_TYPE_EXTENSION,name:v,interfaces:z,directives:T,fields:D,loc:this.loc(d)}},s.parseInterfaceTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var v=this.parseName(),z=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===z.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:k.INTERFACE_TYPE_EXTENSION,name:v,interfaces:z,directives:T,fields:D,loc:this.loc(d)}},s.parseUnionTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var v=this.parseName(),z=this.parseDirectives(!0),T=this.parseUnionMemberTypes();if(0===z.length&&0===T.length)throw this.unexpected();return{kind:k.UNION_TYPE_EXTENSION,name:v,directives:z,types:T,loc:this.loc(d)}},s.parseEnumTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var v=this.parseName(),z=this.parseDirectives(!0),T=this.parseEnumValuesDefinition();if(0===z.length&&0===T.length)throw this.unexpected();return{kind:k.ENUM_TYPE_EXTENSION,name:v,directives:z,values:T,loc:this.loc(d)}},s.parseInputObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var v=this.parseName(),z=this.parseDirectives(!0),T=this.parseInputFieldsDefinition();if(0===z.length&&0===T.length)throw this.unexpected();return{kind:k.INPUT_OBJECT_TYPE_EXTENSION,name:v,directives:z,fields:T,loc:this.loc(d)}},s.parseDirectiveDefinition=function(){var d=this._lexer.token,v=this.parseDescription();this.expectKeyword("directive"),this.expectToken(p.AT);var z=this.parseName(),T=this.parseArgumentDefs(),D=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var x=this.parseDirectiveLocations();return{kind:k.DIRECTIVE_DEFINITION,description:v,name:z,arguments:T,repeatable:D,locations:x,loc:this.loc(d)}},s.parseDirectiveLocations=function(){return this.delimitedMany(p.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var d=this._lexer.token,v=this.parseName();if(void 0!==O[v.value])return v;throw this.unexpected(d)},s.loc=function(d){var v;if(!0!==(null===(v=this._options)||void 0===v?void 0:v.noLocation))return new Y.Ye(d,this._lexer.lastToken,this._lexer.source)},s.peek=function(d){return this._lexer.token.kind===d},s.expectToken=function(d){var v=this._lexer.token;if(v.kind===d)return this._lexer.advance(),v;throw ue(this._lexer.source,v.start,"Expected ".concat(Me(d),", found ").concat(Pe(v),"."))},s.expectOptionalToken=function(d){var v=this._lexer.token;if(v.kind===d)return this._lexer.advance(),v},s.expectKeyword=function(d){var v=this._lexer.token;if(v.kind!==p.NAME||v.value!==d)throw ue(this._lexer.source,v.start,'Expected "'.concat(d,'", found ').concat(Pe(v),"."));this._lexer.advance()},s.expectOptionalKeyword=function(d){var v=this._lexer.token;return v.kind===p.NAME&&v.value===d&&(this._lexer.advance(),!0)},s.unexpected=function(d){var v=null!=d?d:this._lexer.token;return ue(this._lexer.source,v.start,"Unexpected ".concat(Pe(v),"."))},s.any=function(d,v,z){this.expectToken(d);for(var T=[];!this.expectOptionalToken(z);)T.push(v.call(this));return T},s.optionalMany=function(d,v,z){if(this.expectOptionalToken(d)){var T=[];do{T.push(v.call(this))}while(!this.expectOptionalToken(z));return T}return[]},s.many=function(d,v,z){this.expectToken(d);var T=[];do{T.push(v.call(this))}while(!this.expectOptionalToken(z));return T},s.delimitedMany=function(d,v){this.expectOptionalToken(d);var z=[];do{z.push(v.call(this))}while(this.expectOptionalToken(d));return z},e}();function Pe(e){var s=e.value;return Me(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function Me(e){return function _e(e){return e===p.BANG||e===p.DOLLAR||e===p.AMP||e===p.PAREN_L||e===p.PAREN_R||e===p.SPREAD||e===p.COLON||e===p.EQUALS||e===p.AT||e===p.BRACKET_L||e===p.BRACKET_R||e===p.BRACE_L||e===p.PIPE||e===p.BRACE_R}(e)?'"'.concat(e,'"'):e}var we=new Map,ve=new Map,Ue=!0,Ae=!1;function Fe(e){return e.replace(/[\s,]+/g," ").trim()}function ot(e){var s=Fe(e);if(!we.has(s)){var o=function Ce(e,s){return new Ie(e,s).parseDocument()}(e,{experimentalFragmentVariables:Ae,allowLegacyFragmentVariables:Ae});if(!o||"Document"!==o.kind)throw new Error("Not a valid GraphQL document.");we.set(s,function et(e){var s=new Set(e.definitions);s.forEach(function(d){d.loc&&delete d.loc,Object.keys(d).forEach(function(v){var z=d[v];z&&"object"==typeof z&&s.add(z)})});var o=e.loc;return o&&(delete o.startToken,delete o.endToken),e}(function it(e){var s=new Set,o=[];return e.definitions.forEach(function(d){if("FragmentDefinition"===d.kind){var v=d.name.value,z=function nt(e){return Fe(e.source.body.substring(e.start,e.end))}(d.loc),T=ve.get(v);T&&!T.has(z)?Ue&&console.warn("Warning: fragment with name "+v+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):T||ve.set(v,T=new Set),T.add(z),s.has(z)||(s.add(z),o.push(d))}else o.push(d)}),(0,n.pi)((0,n.pi)({},e),{definitions:o})}(o)))}return we.get(s)}function y(e){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];"string"==typeof e&&(e=[e]);var d=e[0];return s.forEach(function(v,z){d+=v&&"Document"===v.kind?v.loc.source.body:v,d+=e[z+1]}),ot(d)}var e,Qe_gql=y;(e=y||(y={})).gql=Qe_gql,e.resetCaches=function rt(){we.clear(),ve.clear()},e.disableFragmentWarnings=function st(){Ue=!1},e.enableExperimentalFragmentVariables=function at(){Ae=!0},e.disableExperimentalFragmentVariables=function dt(){Ae=!1},y.default=y;var h=r(9298),a=r(5e3),j=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(j||(j={})),j))(),u=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(u||(u={})),u))(),W=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(W||(W={})),W))(),oe=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(oe||(oe={})),oe))(),ze=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(ze||(ze={})),ze))(),Te=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Te||(Te={})),Te))(),be=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(be||(be={})),be))(),Ge=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Ge||(Ge={})),Ge))(),ke=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(ke||(ke={})),ke))(),Ye=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Ye||(Ye={})),Ye))(),Ke=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(Ke||(Ke={})),Ke))(),He=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(He||(He={})),He))(),Je=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(Je||(Je={})),Je))(),Xe=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(Xe||(Xe={})),Xe))(),ct=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(ct||(ct={})),ct))(),tt=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(tt||(tt={})),tt))(),f=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(f||(f={})),f))(),E=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(E||(E={})),E))(),C=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(C||(C={})),C))(),F=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(F||(F={})),F))(),ce=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(ce||(ce={})),ce))(),he=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(he||(he={})),he))(),mt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(mt||(mt={})),mt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),gt=(()=>(function(e){e.Id="ID",e.Name="NAME"}(gt||(gt={})),gt))(),ht=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(vt||(vt={})),vt))(),lt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(lt||(lt={})),lt))(),Lt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(Lt||(Lt={})),Lt))(),zt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(zt||(zt={})),zt))(),yt=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(Ct||(Ct={})),Ct))(),It=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(It||(It={})),It))(),Tt=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(Tt||(Tt={})),Tt))(),_t=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(_t||(_t={})),_t))(),Dt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Dt||(Dt={})),Dt))(),St=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(St||(St={})),St))(),Et=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(Et||(Et={})),Et))(),Nt=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(Nt||(Nt={})),Nt))(),l=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(l||(l={})),l))(),A=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(A||(A={})),A))(),c=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.GermlineOrSomatic="GERMLINE_OR_SOMATIC",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(c||(c={})),c))(),g=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(g||(g={})),g))(),$=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}($||($={})),$))();const qe=y`
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
    `,bt=y`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,wt=y`
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
    `,Zt=y`
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
    `,Yt=y`
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
    `,Wt=y`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
}
    `,Ut=y`
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
    `,kt=y`
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
    ${Ut}`,Jt=y`
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
    `,jt=y`
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
    `,Ht=y`
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
    ${y`
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
    `}`,Xt=y`
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
    `,qt=y`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,en=y`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,tn=y`
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
    `,nn=y`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
}
    `,on=y`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,rn=y`
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
    `,sn=y`
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
    `,an=y`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,cn=y`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,ln=y`
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
    `,un=y`
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
    `,dn=y`
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
    `,pn=y`
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
    `,mn=y`
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
    `,fn=y`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,gn=y`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,hn=y`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
}
    `,vn=y`
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
    `,zn=y`
    fragment menuVariant on Variant {
  id
  name
}
    `,yn=y`
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
    `,Cn=y`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,In=y`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Tn=y`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,_n=y`
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
    `,Dn=y`
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
    `,Sn=y`
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
    `,Nn=y`
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
    ${y`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `}`,On=y`
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
    `,Mn=y`
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
    `,An=y`
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
    `,Ln=y`
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
    `,xn=y`
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
    `,Rn=y`
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
    `,Pn=y`
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
    `,Fn=y`
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
    `,bn=y`
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
    `,$n=y`
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
    `,Gn=y`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Bn=y`
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
    `,wn=y`
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
    `,Un=y`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Qn=y`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Vn=y`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Qt=y`
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
    ${Ut}`,Zn=y`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Yn=y`
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
    `,Wn=y`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
}
    `,kn=y`
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
    `,jn=y`
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
    ${y`
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
    `}`,Kn=y`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${y`
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
    `}`;let Hn=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Kn}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xn=y`
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
    ${qe}`;let qn=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Xn}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ei=y`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${bt}`;let ti=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ei}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ni=y`
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
    `;let ii=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ni}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=y`
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
    ${wt}`;let ri=(()=>{class e extends h.AE{constructor(o){super(o),this.document=oi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const si=y`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Zt}`;let ai=(()=>{class e extends h.AE{constructor(o){super(o),this.document=si}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=y`
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
    `;let li=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ci}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=y`
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
    ${Yt}`;let di=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ui}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=y`
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
    `;let mi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=pi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=y`
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
    ${Wt}`;let gi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=fi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=y`
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
    ${kt}`;let vi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=hi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=y`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Jt}`;let yi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=zi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=y`
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
    ${jt}`;let Ii=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ci}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ti=y`
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
    ${Ht}`;let _i=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ti}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=y`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Xt}`;let Si=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Di}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=y`
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
    `;let Ni=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ei}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oi=y`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${qt}`;let Mi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Oi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=y`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${en}`;let Li=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ai}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=y`
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
    ${tn}`;let Ri=(()=>{class e extends h.AE{constructor(o){super(o),this.document=xi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=y`
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
    `;let Fi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Pi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=y`
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
    ${nn}`;let $i=(()=>{class e extends h.AE{constructor(o){super(o),this.document=bi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=y`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Bi=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Gi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wi=y`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ui=(()=>{class e extends h.mm{constructor(o){super(o),this.document=wi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=y`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${on}`;let Vi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Qi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=y`
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
    ${rn}`;let Yi=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Zi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wi=y`
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
    ${sn}`;let ki=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Wi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=y`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${an}`;let ji=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ji}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=y`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Hi=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Ki}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=y`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let qi=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Xi}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const eo=y`
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
    ${cn}`;let to=(()=>{class e extends h.AE{constructor(o){super(o),this.document=eo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=y`
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
    ${ln}`;let io=(()=>{class e extends h.AE{constructor(o){super(o),this.document=no}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const oo=y`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${un}`;let ro=(()=>{class e extends h.AE{constructor(o){super(o),this.document=oo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=y`
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
    ${dn}`;let ao=(()=>{class e extends h.AE{constructor(o){super(o),this.document=so}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=y`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${pn}`;let lo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=co}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=y`
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
    ${mn}`;let po=(()=>{class e extends h.AE{constructor(o){super(o),this.document=uo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=y`
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
    ${fn}`;let fo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=mo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const go=y`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${gn}`;let ho=(()=>{class e extends h.AE{constructor(o){super(o),this.document=go}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=y`
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
    ${hn}`;let zo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=vo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=y`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${vn}`;let Co=(()=>{class e extends h.AE{constructor(o){super(o),this.document=yo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=y`
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
    ${zn}`;let To=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Io}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=y`
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
    `;let Do=(()=>{class e extends h.AE{constructor(o){super(o),this.document=_o}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=y`
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
    `;let Eo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=So}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const No=y`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Oo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=No}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mo=y`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Ao=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Mo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=y`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${wt}`;let xo=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Lo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=y`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${yn}`;let Po=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ro}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=y`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let bo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Fo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $o=y`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Go=(()=>{class e extends h.AE{constructor(o){super(o),this.document=$o}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bo=y`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let wo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Bo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Uo=y`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let Qo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Uo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vo=y`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Zo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Vo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=y`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Cn}`;let Wo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Yo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ko=y`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let Jo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ko}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=y`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let Ko=(()=>{class e extends h.AE{constructor(o){super(o),this.document=jo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=y`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${In}`;let Xo=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ho}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=y`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let er=(()=>{class e extends h.AE{constructor(o){super(o),this.document=qo}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=y`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let nr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=tr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=y`
    query VariantTypeahead($name: String!) {
  variants(name: $name, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Tn}`;let or=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ir}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=y`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let sr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=rr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=y`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${_n}`;let cr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ar}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=y`
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
    `;let ur=(()=>{class e extends h.mm{constructor(o){super(o),this.document=lr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Dn}`;const dr=y`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let pr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=dr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=y`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let fr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=mr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gr=y`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let hr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=gr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=y`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Sn}`;let zr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=vr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=y`
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
    `;let Cr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=yr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=y`
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
    `;let Tr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Ir}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=y`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Dr=(()=>{class e extends h.mm{constructor(o){super(o),this.document=_r}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=y`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Er=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Sr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Nr=y`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Nn}`;let Or=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Nr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mr=y`
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
    `;let Ar=(()=>{class e extends h.mm{constructor(o){super(o),this.document=Mr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=y`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${On}`;let xr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Lr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rr=y`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Mn}`;let Pr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Rr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fr=y`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
  }
}
    `;let br=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Fr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $r=y`
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
    `;let Gr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=$r}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Br=y`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
  }
}
    `;let wr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Br}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ur=y`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${An}`;let Qr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ur}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vr=y`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Ln}`;let Zr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Vr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=y`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${xn}`;let Wr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Yr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kr=y`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Rn}`;let Jr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=kr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=y`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Pn}`;let Kr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=jr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=y`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Fn}`;let Xr=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Hr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=y`
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
    ${bn}`;let es=(()=>{class e extends h.AE{constructor(o){super(o),this.document=qr}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=y`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
  }
}
    `;let ns=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ts}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const is=y`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${$n}`;let os=(()=>{class e extends h.AE{constructor(o){super(o),this.document=is}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=y`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Gn}`;let ss=(()=>{class e extends h.AE{constructor(o){super(o),this.document=rs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=y`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Bn}`;let cs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=as}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=y`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${wn}`;let us=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ls}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=y`
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
    ${Vn}
${Qn}
${Un}
${Qt}`;let ps=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ds}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=y`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Qt}`;let fs=(()=>{class e extends h.mm{constructor(o){super(o),this.document=ms}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gs=y`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Zn}`;let hs=(()=>{class e extends h.mm{constructor(o){super(o),this.document=gs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=y`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let zs=(()=>{class e extends h.mm{constructor(o){super(o),this.document=vs}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=y`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Yn}`;let Cs=(()=>{class e extends h.AE{constructor(o){super(o),this.document=ys}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();y`
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
    `;const Is=y`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Wn}`;let Ts=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Is}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=y`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
  }
}
    `;let Ds=(()=>{class e extends h.AE{constructor(o){super(o),this.document=_s}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=y`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${kn}`;let Es=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ss}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ns=y`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${jn}`;let Os=(()=>{class e extends h.AE{constructor(o){super(o),this.document=Ns}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(h._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(Se,re,r)=>{r.r(re),r.d(re,{LayoutModule:()=>Nt});var n=r(9808),i=r(325),t=r(5e3),S=r(9350),R=r(8929),Z=r(7625),w=r(655),X=r(4090),M=r(1721),L=r(4219),G=r(925),K=r(647),H=r(226),le=r(5113);const te=["*"],se=["nz-sider-trigger",""];function ie(l,A){}function V(l,A){if(1&l&&(t.ynx(0),t.YNc(1,ie,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),g=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||g)}}function P(l,A){}function I(l,A){if(1&l&&(t.ynx(0),t.YNc(1,P,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),g=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||g)}}function b(l,A){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function ne(l,A){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function q(l,A){if(1&l&&(t.YNc(0,b,1,1,"i",4),t.YNc(1,ne,1,1,"i",4)),2&l){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function de(l,A){1&l&&t._UZ(0,"i",6)}function ge(l,A){if(1&l){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const $=t.oxw();return $.setCollapsed(!$.nzCollapsed)}),t.qZA()}if(2&l){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class l{constructor(c,g){this.elementRef=c,this.renderer=g,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:te,decls:1,vars:0,template:function(c,g){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),k=(()=>{class l{constructor(c,g){this.elementRef=c,this.renderer=g,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:te,decls:1,vars:0,template:function(c,g){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),Y=(()=>{class l{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,g){2&c&&(t.Udp("width",g.isNormalTrigger?g.siderWidth:null),t.ekj("ant-layout-sider-trigger",g.isNormalTrigger)("ant-layout-sider-zero-width-trigger",g.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",g.isZeroTrigger&&g.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",g.isZeroTrigger&&!g.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:se,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,g){1&c&&(t.YNc(0,V,2,1,"ng-container",0),t.YNc(1,I,2,1,"ng-container",0),t.YNc(2,q,2,2,"ng-template",null,1,t.W1O),t.YNc(4,de,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",g.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",g.isNormalTrigger))},directives:[n.O5,n.tP,K.Ls],encapsulation:2,changeDetection:0}),l})(),p=(()=>{class l{constructor(c,g,$){this.platform=c,this.cdr=g,this.breakpointService=$,this.destroy$=new R.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,M.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(X.ow,!0).pipe((0,Z.R)(this.destroy$)).subscribe(c=>{const g=this.nzBreakpoint;g&&(0,M.ov)().subscribe(()=>{this.matchBreakPoint=!c[g],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:g,nzCollapsedWidth:$,nzWidth:ae}=c;(g||$||ae)&&this.updateStyleMap(),g&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(G.t4),t.Y36(t.sBO),t.Y36(X.r3))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-sider"]],contentQueries:function(c,g,$){if(1&c&&t.Suo($,L.wO,5),2&c){let ae;t.iGM(ae=t.CRH())&&(g.nzMenuDirective=ae.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,g){2&c&&(t.Udp("flex",g.flexSetting)("max-width",g.widthSetting)("min-width",g.widthSetting)("width",g.widthSetting),t.ekj("ant-layout-sider-zero-width",g.nzCollapsed&&0===g.nzCollapsedWidth)("ant-layout-sider-light","light"===g.nzTheme)("ant-layout-sider-dark","dark"===g.nzTheme)("ant-layout-sider-collapsed",g.nzCollapsed)("ant-layout-sider-has-trigger",g.nzCollapsible&&null!==g.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:te,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,g){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,ge,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",g.nzCollapsible&&null!==g.nzTrigger))},directives:[Y,n.O5],encapsulation:2,changeDetection:0}),(0,w.gn)([(0,M.yF)()],l.prototype,"nzReverseArrow",void 0),(0,w.gn)([(0,M.yF)()],l.prototype,"nzCollapsible",void 0),(0,w.gn)([(0,M.yF)()],l.prototype,"nzCollapsed",void 0),l})(),B=(()=>{class l{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new R.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(g=>{this.dir=g})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(H.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-layout"]],contentQueries:function(c,g,$){if(1&c&&t.Suo($,p,4),2&c){let ae;t.iGM(ae=t.CRH())&&(g.listOfNzSiderComponent=ae)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,g){2&c&&t.ekj("ant-layout-rtl","rtl"===g.dir)("ant-layout-has-sider",g.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:te,decls:1,vars:0,template:function(c,g){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),O=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,n.ez,K.PV,le.xu,G.ud]]}),l})();var U=r(404),ye=r(1894),_e=r(712),De=r(373),Ee=r(1047),Ne=r(4182),xe=r(2845),Ve=r(4832),$e=r(969),N=r(3753),ee=r(2654),_=r(8514),J=r(6787),Q=r(2198),fe=r(2868),Ce=r(6792),Oe=r(2986),Re=r(7545),Ie=r(1159),Pe=r(7429),Me=r(8076);function we(l,A){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const ve=[[["nz-auto-option"]]],Ue=["nz-auto-option"],Ae=["*"],Fe=["panel"],nt=["content"];function it(l,A){}function et(l,A){1&l&&t.YNc(0,it,0,0,"ng-template")}function ot(l,A){1&l&&t.Hsn(0)}function y(l,A){if(1&l&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&l){const c=A.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function rt(l,A){if(1&l&&t.YNc(0,y,2,3,"nz-auto-option",7),2&l){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function st(l,A){if(1&l){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function($){return t.CHM(c),t.oxw().onAnimationEvent($)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,et,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&l){const c=t.MAs(6),g=t.MAs(8),$=t.oxw();t.ekj("ant-select-dropdown-hidden",!$.showPanel)("ant-select-dropdown-rtl","rtl"===$.dir),t.Q6J("ngClass",$.nzOverlayClassName)("ngStyle",$.nzOverlayStyle)("nzNoAnimation",null==$.noAnimation?null:$.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==$.noAnimation?null:$.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",$.nzDataSource?g:c)}}let at=(()=>{class l{constructor(){}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ue,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,g){1&c&&(t.F$t(ve),t.TgZ(0,"div",0),t.YNc(1,we,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",g.nzLabel))},directives:[$e.f],encapsulation:2,changeDetection:0}),l})();class dt{constructor(A,c=!1){this.source=A,this.isUserInput=c}}let Qe=(()=>{class l{constructor(c,g,$,ae){this.ngZone=c,this.changeDetectorRef=g,this.element=$,this.nzAutocompleteOptgroupComponent=ae,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new R.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,N.R)(this.element.nativeElement,"mouseenter").pipe((0,Q.h)(()=>this.mouseEntered.observers.length>0),(0,Z.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,N.R)(this.element.nativeElement,"mousedown").pipe((0,Z.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,M.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new dt(this,c))}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(at,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,g){1&c&&t.NdJ("click",function(){return g.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",g.selected.toString())("aria-disabled",g.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",g.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",g.selected)("ant-select-item-option-active",g.active)("ant-select-item-option-disabled",g.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Ae,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,g){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,w.gn)([(0,M.yF)()],l.prototype,"nzDisabled",void 0),l})();const pt={provide:Ne.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class l{constructor(c,g,$,ae,qe){this.elementRef=c,this.overlay=g,this.viewContainerRef=$,this.nzInputGroupWhitSuffixOrPrefixDirective=ae,this.document=qe,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new R.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,Z.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const g=c.keyCode,$=g===Ie.LH||g===Ie.JH;g===Ie.hY&&c.preventDefault(),!this.panelOpen||g!==Ie.hY&&g!==Ie.Mf?this.panelOpen&&g===Ie.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&$&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),g===Ie.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const g=c.target,$=this.document;let ae=g.value;"number"===g.type&&(ae=""===ae?null:parseFloat(ae)),this.previousValue!==ae&&(this.previousValue=ae,this.onChange(ae),this.canOpen()&&$.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,fe.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Ce.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,Q.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function h(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Pe.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new xe.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new xe.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new xe.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const g=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(g),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const g=this.nzAutocomplete.getOption(c),$=g?g.getLabel():c;this.elementRef.nativeElement.value=null!=$?$:"",this.nzAutocomplete.nzBackfill||(this.previousValue=$)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(xe.aV),t.Y36(t.s_b),t.Y36(Ee.ke,8),t.Y36(n.K0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,g){1&c&&t.NdJ("focusin",function(){return g.handleFocus()})("blur",function(){return g.handleBlur()})("input",function(ae){return g.handleInput(ae)})("keydown",function(ae){return g.handleKeydown(ae)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),l})(),j=(()=>{class l{constructor(c,g,$,ae){this.changeDetectorRef=c,this.ngZone=g,this.directionality=$,this.noAnimation=ae,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(qe,bt)=>qe===bt,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new R.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ee.w.EMPTY,this.optionMouseEnterSubscription=ee.w.EMPTY,this.dataSourceChangeSubscription=ee.w.EMPTY,this.optionSelectionChanges=(0,_.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Oe.q)(1),(0,Re.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,_.P)(()=>this.options?(0,J.T)(...this.options.map(qe=>qe.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Oe.q)(1),(0,Re.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(g=>{this.dir=g,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const g=this.options.get(c);g&&!g.active?(this.activeItem=g,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((g,$,ae)=>-1===g?this.compareWith(c,$.nzValue)?ae:-1:g,-1)}getOption(c){return this.options.find(g=>this.compareWith(c,g.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(g=>{!g.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,g=!1){this.options.forEach($=>{$!==c&&(g&&$.deselect(),$.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,Q.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(H.Is,8),t.Y36(Ve.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-autocomplete"]],contentQueries:function(c,g,$){if(1&c&&t.Suo($,Qe,5),2&c){let ae;t.iGM(ae=t.CRH())&&(g.fromContentOptions=ae)}},viewQuery:function(c,g){if(1&c&&(t.Gf(t.Rgc,5),t.Gf(Fe,5),t.Gf(nt,5),t.Gf(Qe,5)),2&c){let $;t.iGM($=t.CRH())&&(g.template=$.first),t.iGM($=t.CRH())&&(g.panel=$.first),t.iGM($=t.CRH())&&(g.content=$.first),t.iGM($=t.CRH())&&(g.fromDataSourceOptions=$)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Ae,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,g){1&c&&(t.F$t(),t.YNc(0,st,9,10,"ng-template"))},directives:[Qe,n.mk,n.PC,Ve.P,n.tP,n.sg],encapsulation:2,data:{animation:[Me.mF]},changeDetection:0}),(0,w.gn)([(0,M.yF)()],l.prototype,"nzDefaultActiveFirstOption",void 0),(0,w.gn)([(0,M.yF)()],l.prototype,"nzBackfill",void 0),l})(),m=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,n.ez,xe.U8,Ne.u5,$e.T,Ve.g,Ee.o7]]}),l})();var u=r(6949);function W(l,A){1&l&&t._UZ(0,"i",5)}function oe(l,A){if(1&l){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const $=t.oxw();return $.searchQuery="",$.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._UZ(5,"span",9),t._UZ(6,"br"),t._UZ(7,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&l){const c=A.$implicit,g=t.oxw();t.xp6(1),t.Q6J("routerLink",g.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",g.urlForResult(c)),t.xp6(2),t.Q6J("nzType",g.iconNameForResult(c)),t.xp6(1),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let ze=(()=>{class l{constructor(c,g){this.gql=c,this.router=g,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,De.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case _e.rZD.EvidenceItem:return"civic:evidence";case _e.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let g;switch(c.resultType){case _e.rZD.VariantGroup:g="variant-groups";break;case _e.rZD.EvidenceItem:g="evidence";break;default:g=`${c.resultType.toLowerCase()}s`}return`/${g}/${c.id}/summary`}quicksearchSelected(c){let g=c.target.value;this.searchQuery="",this.router.navigate([g])}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(_e.ghc),t.Y36(i.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,g){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(ae){return g.searchQuery=ae})("ngModelChange",function(){return g.refresh()})("keyup.enter",function(ae){return g.quicksearchSelected(ae)}),t.qZA(),t.qZA(),t.YNc(2,W,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,oe,8,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const $=t.MAs(3),ae=t.MAs(5);t.Q6J("nzSuffix",$),t.xp6(1),t.Q6J("ngModel",g.searchQuery)("nzAutocomplete",ae),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,g.searchResults$))}},directives:[Ee.gB,Ee.ke,Ee.Zp,Ne.Fj,a,Ne.JJ,Ne.On,K.Ls,j,n.sg,i.yS,Qe],pipes:[u.fM],styles:[""]}),l})();var Ze=r(1912),Te=r(4850),be=r(1059),Ge=r(8144),ke=r(4401),Ye=r(3677),Ke=r(7881),He=r(3640),Je=r(8785);function Xe(l,A){if(1&l&&(t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"i",10),t._UZ(3,"nz-badge",11),t.qZA(),t.BQk()),2&l){const c=A.ngrxLet;t.xp6(1),t.MGl("nzTooltipTitle","You have ",c," unread notification(s)."),t.xp6(2),t.Q6J("nzShowDot",c>0)}}function ct(l,A){if(1&l&&(t.TgZ(0,"a",7),t.YNc(1,Xe,4,2,"ng-container",8),t.qZA()),2&l){const c=t.oxw().ngIf,g=t.oxw();t.MGl("routerLink","/users/",c.id,"/notifications"),t.xp6(1),t.Q6J("ngrxLet",g.unreadCount$)}}function tt(l,A){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"i",13),t._UZ(2,"i",14),t.TgZ(3,"nz-dropdown-menu",null,15),t.TgZ(5,"ul",16),t.TgZ(6,"li",17),t.TgZ(7,"a",18),t._uU(8," Add Evidence "),t.qZA(),t.qZA(),t.TgZ(9,"li",17),t.TgZ(10,"a",19),t._uU(11," Add Assertion "),t.qZA(),t.qZA(),t.TgZ(12,"li",17),t.TgZ(13,"a",19),t._uU(14," Suggest Source "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const c=t.MAs(4);t.Q6J("nzDropdownMenu",c)}}function f(l,A){1&l&&t._UZ(0,"nz-badge",27),2&l&&t.Q6J("nzShowDot",!0)}function E(l,A){if(1&l){const c=t.EpF();t.TgZ(0,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(3).coiUpdateModalVisible=!0}),t.TgZ(1,"nz-badge",28),t.TgZ(2,"strong"),t._uU(3," Please provide an updated conflict of interest statement. "),t.qZA(),t.qZA(),t.qZA()}2&l&&(t.xp6(1),t.Q6J("nzShowDot",!0))}function C(l,A){1&l&&(t.TgZ(0,"li",17),t.TgZ(1,"a",29),t._uU(2," Admin Console "),t.qZA(),t.qZA())}function F(l,A){if(1&l){const c=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"cvc-user-avatar",20),t._UZ(2,"i",14),t.YNc(3,f,1,1,"nz-badge",21),t.TgZ(4,"nz-dropdown-menu",null,22),t.TgZ(6,"ul",16),t.TgZ(7,"li",17),t._uU(8,"Signed In as "),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t._UZ(11,"li",23),t.YNc(12,E,4,1,"li",24),t.TgZ(13,"li",17),t.TgZ(14,"a",7),t._uU(15," Your Profile "),t.qZA(),t.qZA(),t.YNc(16,C,3,0,"li",25),t._UZ(17,"li",23),t.TgZ(18,"li",26),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).signOut()}),t._uU(19,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const c=t.MAs(5),g=t.oxw().ngIf;t.Q6J("nzDropdownMenu",c),t.xp6(1),t.Q6J("user",g),t.xp6(2),t.Q6J("ngIf",g.invalidCoi),t.xp6(7),t.Oqu(g.username),t.xp6(2),t.Q6J("ngIf",g.invalidCoi),t.xp6(2),t.MGl("routerLink","/users/",g.id,""),t.xp6(2),t.Q6J("ngIf",g.isAdmin)}}function ce(l,A){1&l&&(t.ynx(0),t.TgZ(1,"nz-space",4),t.YNc(2,ct,2,2,"a",5),t.YNc(3,tt,15,1,"div",6),t.YNc(4,F,20,7,"div",6),t.qZA(),t.BQk())}function he(l,A){1&l&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function Gt(l,A){if(1&l){const c=t.EpF();t.TgZ(0,"cvc-user-coi-form",30),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let mt=(()=>{class l{constructor(c,g){this.queryService=c,this.unreadCountGql=g,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0,{pollInterval:3e3}).valueChanges.pipe((0,Te.U)(({data:$})=>$.notifications.unreadCount),(0,be.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(S.a),t.Y36(_e.Kmw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink",4,"nzSpaceItem"],["class","topMenuIcon","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"routerLink"],[4,"ngrxLet"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(c,g){if(1&c&&(t.YNc(0,ce,5,0,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(ae){return g.coiUpdateModalVisible=ae})("nzOnCancel",function(){return g.handleCoiModalCancel()}),t.YNc(3,he,2,0,"ng-template",null,2,t.W1O),t.YNc(5,Gt,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const $=t.MAs(4),ae=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,g.viewer$)),t.xp6(2),t.Q6J("nzVisible",g.coiUpdateModalVisible)("nzContent",ae)("nzTitle",$)("nzFooter",null)}},directives:[n.O5,Ge.NU,Ge.$1,i.yS,u.eJ,U.SY,K.Ls,ke.x7,Ye.cm,Ye.RR,L.wO,L.r9,Ke.L,L.YV,He.du,Je.t],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),l})();function ft(l,A){1&l&&t._UZ(0,"img",62)}function gt(l,A){1&l&&t._UZ(0,"img",63)}function ht(l,A){1&l&&t._UZ(0,"cvc-login-button")}function vt(l,A){1&l&&t._UZ(0,"cvc-viewer-button")}const lt=function(l){return{"is-collapsed":l}},zt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class l{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(S.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-layout"]],decls:137,vars:44,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"menu-group",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","file-add"],["routerLink","/source-suggestions"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-revision"],["routerLink","/revisions"],["nz-icon","","nzType","civic-comment"],["routerLink","/comments"],["nz-icon","","nzType","civic-flag"],["routerLink","/flags"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/pages/about"],["routerLink","/pages/help"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(c,g){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(ae){return g.isCollapsed=ae}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,ft,1,0,"img",4),t.YNc(5,gt,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t._UZ(8,"i",8),t.TgZ(9,"span"),t.TgZ(10,"a",9),t._uU(11,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"li",7),t._UZ(13,"i",10),t.TgZ(14,"span"),t.TgZ(15,"a",11),t._uU(16,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"li",7),t._UZ(18,"i",12),t.TgZ(19,"span"),t.TgZ(20,"a",13),t._uU(21,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"li",7),t._UZ(23,"i",14),t.TgZ(24,"span"),t.TgZ(25,"a",15),t._uU(26,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"li",7),t._UZ(28,"i",16),t.TgZ(29,"span"),t.TgZ(30,"a",17),t._uU(31,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ul",6),t.TgZ(33,"li",7),t._UZ(34,"i",18),t.TgZ(35,"span"),t.TgZ(36,"a",19),t._uU(37,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"li",7),t._UZ(39,"i",20),t.TgZ(40,"span"),t.TgZ(41,"a",21),t._uU(42,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"li",7),t._UZ(44,"i",22),t.TgZ(45,"span"),t.TgZ(46,"a",23),t._uU(47,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"li",7),t._UZ(49,"i",24),t.TgZ(50,"span"),t.TgZ(51,"a",25),t._uU(52,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"li",7),t._UZ(54,"i",26),t.TgZ(55,"span"),t.TgZ(56,"a",27),t._uU(57,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"li",7),t._UZ(59,"i",28),t.TgZ(60,"span"),t.TgZ(61,"a",29),t._uU(62,"Source Suggestions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"li",7),t._UZ(64,"i",30),t.TgZ(65,"span"),t.TgZ(66,"a",31),t._uU(67,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"ul",6),t.TgZ(69,"li",7),t._UZ(70,"i",32),t.TgZ(71,"span"),t.TgZ(72,"a",33),t._uU(73,"Revisions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"li",7),t._UZ(75,"i",34),t.TgZ(76,"span"),t.TgZ(77,"a",35),t._uU(78,"Comments"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"li",7),t._UZ(80,"i",36),t.TgZ(81,"span"),t.TgZ(82,"a",37),t._uU(83,"Flags"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(84,"ul",6),t.TgZ(85,"li",7),t._UZ(86,"i",38),t.TgZ(87,"span"),t.TgZ(88,"a",39),t._uU(89,"Community"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"li",7),t._UZ(91,"i",40),t.TgZ(92,"span"),t.TgZ(93,"a",41),t._uU(94,"Users"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"li",7),t._UZ(96,"i",42),t.TgZ(97,"span"),t.TgZ(98,"a",43),t._uU(99,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(100,"ul",6),t.TgZ(101,"li",7),t._UZ(102,"i",44),t.TgZ(103,"span"),t.TgZ(104,"a",45),t._uU(105,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"li",7),t._UZ(107,"i",46),t.TgZ(108,"span"),t.TgZ(109,"a",47),t._uU(110,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(111,"nz-layout",48),t.TgZ(112,"nz-header"),t.TgZ(113,"div",49),t.TgZ(114,"div",50),t.TgZ(115,"span",51),t.NdJ("click",function(){return g.isCollapsed=!g.isCollapsed}),t._UZ(116,"i",52),t.qZA(),t.qZA(),t.TgZ(117,"div",53),t._UZ(118,"cvc-quicksearch"),t.qZA(),t.TgZ(119,"div",54),t.TgZ(120,"ul",55),t.TgZ(121,"li",56),t.TgZ(122,"a",57),t._uU(123,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(124,"li",56),t.TgZ(125,"a",58),t._uU(126,"Help"),t.qZA(),t.qZA(),t.TgZ(127,"li",56),t.TgZ(128,"a",59),t._uU(129,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(130,"div",60),t.YNc(131,ht,1,0,"cvc-login-button",61),t.ALo(132,"async"),t.YNc(133,vt,1,0,"cvc-viewer-button",61),t.ALo(134,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(135,"nz-content"),t._UZ(136,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",g.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(40,lt,g.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!g.isCollapsed),t.xp6(1),t.Q6J("ngIf",g.isCollapsed),t.xp6(1),t.Q6J("nzInlineCollapsed",g.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",g.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Variant Groups":""),t.xp6(5),t.Q6J("nzInlineCollapsed",g.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",g.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Source Suggestions":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzInlineCollapsed",g.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",g.isCollapsed?"Revisions":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Comments":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Flags":""),t.xp6(5),t.Q6J("nzInlineCollapsed",g.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",g.isCollapsed?"Community":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzInlineCollapsed",g.isCollapsed),t.xp6(1),t.Q6J("nzTooltipTitle",g.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("nzTooltipTitle",g.isCollapsed?"Statistics":""),t.xp6(5),t.Q6J("ngClass",t.VKq(42,lt,g.isCollapsed)),t.xp6(5),t.Q6J("nzType",g.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(132,36,g.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(134,38,g.signedIn$)))},directives:[B,p,i.yS,n.mk,n.O5,L.wO,L.r9,U.SY,K.Ls,k,ye.SK,ye.t3,ze,Ze.s,mt,pe,i.lC],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.menu-group[_ngcontent-%COMP%]{margin-bottom:1.5em}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),l})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9397),r.e(1679),r.e(3883),r.e(5968),r.e(9606),r.e(9341),r.e(8592),r.e(5478)]).then(r.bind(r,136)).then(l=>l.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(1346),r.e(6471),r.e(8604),r.e(4702),r.e(8592),r.e(6618)]).then(r.bind(r,3553)).then(l=>l.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([r.e(1945),r.e(1854)]).then(r.bind(r,1854)).then(l=>l.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([r.e(1945),r.e(9946)]).then(r.bind(r,9946)).then(l=>l.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(9397),r.e(1346),r.e(3883),r.e(8604),r.e(9246),r.e(4702),r.e(8592),r.e(1398)]).then(r.bind(r,1398)).then(l=>l.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(9397),r.e(3883),r.e(635)]).then(r.bind(r,9450)).then(l=>l.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1346)]).then(r.bind(r,7727)).then(l=>l.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([r.e(1945),r.e(3133)]).then(r.bind(r,3133)).then(l=>l.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(681)]).then(r.bind(r,681)).then(l=>l.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(9397),r.e(1346),r.e(3883),r.e(3061),r.e(8604),r.e(7581),r.e(8592),r.e(4592)]).then(r.bind(r,4592)).then(l=>l.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(9397),r.e(3883),r.e(8865)]).then(r.bind(r,7180)).then(l=>l.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([r.e(1945),r.e(166)]).then(r.bind(r,166)).then(l=>l.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(1346),r.e(6471),r.e(8604),r.e(4702),r.e(8592),r.e(266)]).then(r.bind(r,5943)).then(l=>l.SourcesModule),data:{breadcrumb:"Sources"}},{path:"source-suggestions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(1346),r.e(6471),r.e(8604),r.e(2168)]).then(r.bind(r,4039)).then(l=>l.SourceSuggestionsModule),data:{breadcrumb:"SourceSuggestions"}},{path:"users",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(9397),r.e(1346),r.e(3883),r.e(3061),r.e(8604),r.e(7581),r.e(8592),r.e(2764)]).then(r.bind(r,2764)).then(l=>l.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(5951),r.e(9001),r.e(305),r.e(1720),r.e(9397),r.e(1346),r.e(6471),r.e(1679),r.e(8190),r.e(9246),r.e(8592),r.e(6614)]).then(r.bind(r,4373)).then(l=>l.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(8592),r.e(4415)]).then(r.bind(r,6295)).then(l=>l.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(5951),r.e(9246),r.e(5551)]).then(r.bind(r,5951)).then(l=>l.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>r.e(6528).then(r.bind(r,6528)).then(l=>l.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6412)]).then(r.bind(r,6412)).then(l=>l.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(329)]).then(r.bind(r,329)).then(l=>l.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([r.e(1945),r.e(229)]).then(r.bind(r,229)).then(l=>l.PagesModule),data:{breadcrumb:"Pages"}}]}];let yt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.Bz.forChild(zt)],i.Bz]}),l})();var Ct=r(3618),It=r(5109),Tt=r(4546);let _t=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,Ne.u5,i.Bz,u.WG,Ee.o7,Tt.U5,K.PV,m]]}),l})();var Bt=r(1844),Dt=r(5473),St=r(330);let Et=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,u.WG,Ye.b1,i.Bz,Ge.zf,K.PV,ke.mS,U.cg,He.Qp,Dt.H,St.e]]}),l})(),Nt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[n.ez,yt,K.PV,ye.Jb,O,L.ip,U.cg,Ct.ZJ,It.s,Bt.B,Et,_t]]}),l})()},6792:(Se,re,r)=>{r.d(re,{g:()=>R});var n=r(353),t=r(3489),S=r(9312);function R(M,L=n.P){const K=function i(M){return M instanceof Date&&!isNaN(+M)}(M)?+M-L.now():Math.abs(M);return H=>H.lift(new Z(K,L))}class Z{constructor(L,G){this.delay=L,this.scheduler=G}call(L,G){return G.subscribe(new w(L,this.delay,this.scheduler))}}class w extends t.L{constructor(L,G,K){super(L),this.delay=G,this.scheduler=K,this.queue=[],this.active=!1,this.errored=!1}static dispatch(L){const G=L.source,K=G.queue,H=L.scheduler,le=L.destination;for(;K.length>0&&K[0].time-H.now()<=0;)K.shift().notification.observe(le);if(K.length>0){const te=Math.max(0,K[0].time-H.now());this.schedule(L,te)}else this.unsubscribe(),G.active=!1}_schedule(L){this.active=!0,this.destination.add(L.schedule(w.dispatch,this.delay,{source:this,destination:this.destination,scheduler:L}))}scheduleNotification(L){if(!0===this.errored)return;const G=this.scheduler,K=new X(G.now()+this.delay,L);this.queue.push(K),!1===this.active&&this._schedule(G)}_next(L){this.scheduleNotification(S.P.createNext(L))}_error(L){this.errored=!0,this.queue=[],this.destination.error(L),this.unsubscribe()}_complete(){this.scheduleNotification(S.P.createComplete()),this.unsubscribe()}}class X{constructor(L,G){this.time=L,this.notification=G}}},373:(Se,re,r)=>{r.d(re,{j:()=>i});var n=r(4850);function i(...S){const R=S.length;if(0===R)throw new Error("list of properties cannot be empty.");return Z=>(0,n.U)(function t(S,R){return w=>{let X=w;for(let M=0;M<R;M++){const L=null!=X?X[S[M]]:void 0;if(void 0===L)return;X=L}return X}}(S,R))(Z)}},6699:(Se,re,r)=>{r.d(re,{Dz:()=>te,Rt:()=>ie});var n=r(655),i=r(5e3),t=r(9439),S=r(1721),R=r(925),Z=r(9808),w=r(647),X=r(226);const M=["textEl"];function L(V,P){if(1&V&&i._UZ(0,"i",3),2&V){const I=i.oxw();i.Q6J("nzType",I.nzIcon)}}function G(V,P){if(1&V){const I=i.EpF();i.TgZ(0,"img",4),i.NdJ("error",function(ne){return i.CHM(I),i.oxw().imgError(ne)}),i.qZA()}if(2&V){const I=i.oxw();i.Q6J("src",I.nzSrc,i.LSH),i.uIk("srcset",I.nzSrcSet,i.LSH)("alt",I.nzAlt)}}function K(V,P){if(1&V&&(i.TgZ(0,"span",5,6),i._uU(2),i.qZA()),2&V){const I=i.oxw();i.Q6J("ngStyle",I.textStyles),i.xp6(2),i.Oqu(I.nzText)}}let te=(()=>{class V{constructor(I,b,ne,q){this.nzConfigService=I,this.elementRef=b,this.cdr=ne,this.platform=q,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new i.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,b=this.el.getBoundingClientRect().width,ne=2*this.nzGap<b?2*this.nzGap:8;this.textStyles={transform:`scale(${b-ne<I?(b-ne)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(I){return new(I||V)(i.Y36(t.jY),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(R.t4))},V.\u0275cmp=i.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(I,b){if(1&I&&i.Gf(M,5),2&I){let ne;i.iGM(ne=i.CRH())&&(b.textEl=ne.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,b){2&I&&(i.Udp("width",b.customSize)("height",b.customSize)("line-height",b.customSize)("font-size",b.hasIcon&&b.customSize?b.nzSize/2:null,"px"),i.ekj("ant-avatar-lg","large"===b.nzSize)("ant-avatar-sm","small"===b.nzSize)("ant-avatar-square","square"===b.nzShape)("ant-avatar-circle","circle"===b.nzShape)("ant-avatar-icon",b.nzIcon)("ant-avatar-image",b.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[i.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,b){1&I&&(i.YNc(0,L,1,1,"i",0),i.YNc(1,G,1,3,"img",1),i.YNc(2,K,3,2,"span",2)),2&I&&(i.Q6J("ngIf",b.nzIcon&&b.hasIcon),i.xp6(1),i.Q6J("ngIf",b.nzSrc&&b.hasSrc),i.xp6(1),i.Q6J("ngIf",b.nzText&&b.hasText))},directives:[Z.O5,w.Ls,Z.PC],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,t.oS)()],V.prototype,"nzShape",void 0),(0,n.gn)([(0,t.oS)()],V.prototype,"nzSize",void 0),(0,n.gn)([(0,t.oS)(),(0,S.Rn)()],V.prototype,"nzGap",void 0),V})(),ie=(()=>{class V{}return V.\u0275fac=function(I){return new(I||V)},V.\u0275mod=i.oAB({type:V}),V.\u0275inj=i.cJS({imports:[[X.vT,Z.ez,w.PV,R.ud]]}),V})()},4401:(Se,re,r)=>{r.d(re,{x7:()=>ue,mS:()=>Y,F9:()=>k});var n=r(655),i=r(5e3),t=r(8929),S=r(7625),R=r(8076),Z=r(9439),w=r(1721),X=r(226),M=r(4832),L=r(9808),G=r(969),K=r(7144);function H(p,B){if(1&p&&(i.TgZ(0,"p",6),i._uU(1),i.qZA()),2&p){const O=B.$implicit,U=i.oxw(2).index,ye=i.oxw(2);i.ekj("current",O===ye.countArray[U]),i.xp6(1),i.hij(" ",O," ")}}function le(p,B){if(1&p&&(i.ynx(0),i.YNc(1,H,2,3,"p",5),i.BQk()),2&p){const O=i.oxw(3);i.xp6(1),i.Q6J("ngForOf",O.countSingleArray)}}function te(p,B){if(1&p&&(i.TgZ(0,"span",3),i.YNc(1,le,2,1,"ng-container",4),i.qZA()),2&p){const O=B.index,U=i.oxw(2);i.Udp("transform","translateY("+100*-U.countArray[O]+"%)"),i.Q6J("nzNoAnimation",U.noAnimation),i.xp6(1),i.Q6J("ngIf",!U.nzDot&&void 0!==U.countArray[O])}}function se(p,B){if(1&p&&(i.ynx(0),i.YNc(1,te,2,4,"span",2),i.BQk()),2&p){const O=i.oxw();i.xp6(1),i.Q6J("ngForOf",O.maxNumberArray)}}function ie(p,B){if(1&p&&i._uU(0),2&p){const O=i.oxw();i.hij("",O.nzOverflowCount,"+")}}function V(p,B){if(1&p&&(i.ynx(0),i._uU(1),i.BQk()),2&p){const O=i.oxw(2);i.xp6(1),i.Oqu(O.nzText)}}function P(p,B){if(1&p&&(i.ynx(0),i._UZ(1,"span",2),i.TgZ(2,"span",3),i.YNc(3,V,2,1,"ng-container",1),i.qZA(),i.BQk()),2&p){const O=i.oxw();i.xp6(1),i.Gre("ant-badge-status-dot ant-badge-status-",O.nzStatus||O.presetColor,""),i.Udp("background",!O.presetColor&&O.nzColor),i.Q6J("ngStyle",O.nzStyle),i.xp6(2),i.Q6J("nzStringTemplateOutlet",O.nzText)}}function I(p,B){if(1&p&&i._UZ(0,"nz-badge-sup",5),2&p){const O=i.oxw(2);i.Q6J("nzOffset",O.nzOffset)("nzTitle",O.nzTitle)("nzStyle",O.nzStyle)("nzDot",O.nzDot)("nzOverflowCount",O.nzOverflowCount)("disableAnimation",!!(O.nzStandalone||O.nzStatus||O.nzColor||null!=O.noAnimation&&O.noAnimation.nzNoAnimation))("nzCount",O.nzCount)("noAnimation",!(null==O.noAnimation||!O.noAnimation.nzNoAnimation))}}function b(p,B){if(1&p&&(i.ynx(0),i.YNc(1,I,1,8,"nz-badge-sup",4),i.BQk()),2&p){const O=i.oxw();i.xp6(1),i.Q6J("ngIf",O.showSup)}}const ne=["*"];function q(p,B){if(1&p&&(i.ynx(0),i._uU(1),i.BQk()),2&p){const O=i.oxw();i.xp6(1),i.Oqu(O.nzText)}}const de=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let ge=(()=>{class p{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(O){const{nzOverflowCount:U,nzCount:ye}=O;ye&&"number"==typeof ye.currentValue&&(this.count=Math.max(0,ye.currentValue),this.countArray=this.count.toString().split("").map(_e=>+_e)),U&&this.generateMaxNumberArray()}}return p.\u0275fac=function(O){return new(O||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(O,U){2&O&&(i.uIk("title",null===U.nzTitle?"":U.nzTitle||U.nzCount),i.d8E("@.disabled",U.disableAnimation)("@zoomBadgeMotion",void 0),i.Akn(U.nzStyle),i.Udp("right",U.nzOffset&&U.nzOffset[0]?-U.nzOffset[0]:null,"px")("margin-top",U.nzOffset&&U.nzOffset[1]?U.nzOffset[1]:null,"px"),i.ekj("ant-badge-count",!U.nzDot)("ant-badge-dot",U.nzDot)("ant-badge-multiple-words",U.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[i.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(O,U){if(1&O&&(i.YNc(0,se,2,1,"ng-container",0),i.YNc(1,ie,1,1,"ng-template",null,1,i.W1O)),2&O){const ye=i.MAs(2);i.Q6J("ngIf",U.count<=U.nzOverflowCount)("ngIfElse",ye)}},directives:[L.O5,L.sg,M.P],encapsulation:2,data:{animation:[R.Ev]},changeDetection:0}),p})(),ue=(()=>{class p{constructor(O,U,ye,_e,De,Ee){this.nzConfigService=O,this.renderer=U,this.cdr=ye,this.elementRef=_e,this.directionality=De,this.noAnimation=Ee,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var O;null===(O=this.directionality.change)||void 0===O||O.pipe((0,S.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(O){const{nzColor:U,nzShowDot:ye,nzDot:_e,nzCount:De,nzShowZero:Ee}=O;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null),(ye||_e||De||Ee)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(O){return new(O||p)(i.Y36(Z.jY),i.Y36(i.Qsj),i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(X.Is,8),i.Y36(M.P,9))},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(O,U){2&O&&i.ekj("ant-badge-status",U.nzStatus)("ant-badge-not-a-wrapper",!!(U.nzStandalone||U.nzStatus||U.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[i.TTD],ngContentSelectors:ne,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(O,U){1&O&&(i.F$t(),i.YNc(0,P,4,7,"ng-container",0),i.Hsn(1),i.YNc(2,b,2,1,"ng-container",1)),2&O&&(i.Q6J("ngIf",U.nzStatus||U.nzColor),i.xp6(2),i.Q6J("nzStringTemplateOutlet",U.nzCount))},directives:[ge,L.O5,L.PC,G.f],encapsulation:2,data:{animation:[R.Ev]},changeDetection:0}),(0,n.gn)([(0,w.yF)()],p.prototype,"nzShowZero",void 0),(0,n.gn)([(0,w.yF)()],p.prototype,"nzShowDot",void 0),(0,n.gn)([(0,w.yF)()],p.prototype,"nzStandalone",void 0),(0,n.gn)([(0,w.yF)()],p.prototype,"nzDot",void 0),(0,n.gn)([(0,Z.oS)()],p.prototype,"nzOverflowCount",void 0),(0,n.gn)([(0,Z.oS)()],p.prototype,"nzColor",void 0),p})(),k=(()=>{class p{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(O){const{nzColor:U}=O;U&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null)}}return p.\u0275fac=function(O){return new(O||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[i.TTD],ngContentSelectors:ne,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(O,U){1&O&&(i.F$t(),i.Hsn(0),i.TgZ(1,"div",0),i.YNc(2,q,2,1,"ng-container",1),i._UZ(3,"div",2),i.qZA()),2&O&&(i.xp6(1),i.Tol(U.presetColor&&"ant-ribbon-color-"+U.presetColor),i.Udp("background-color",!U.presetColor&&U.nzColor),i.ekj("ant-ribbon-placement-end","end"===U.nzPlacement)("ant-ribbon-placement-start","start"===U.nzPlacement),i.xp6(1),i.Q6J("nzStringTemplateOutlet",U.nzText),i.xp6(1),i.Udp("color",!U.presetColor&&U.nzColor))},directives:[G.f],encapsulation:2,changeDetection:0}),p})(),Y=(()=>{class p{}return p.\u0275fac=function(O){return new(O||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[[X.vT,L.ez,K.Q8,G.T,M.g]]}),p})()},7484:(Se,re,r)=>{r.d(re,{bd:()=>xe,vh:()=>$e,_i:()=>De});var n=r(655),i=r(5e3),t=r(1721),S=r(8929),R=r(7625),Z=r(9439),w=r(226),X=r(9808),M=r(969);function L(N,ee){1&N&&i.Hsn(0)}const G=["*"];function K(N,ee){1&N&&(i.TgZ(0,"div",4),i._UZ(1,"div",5),i.qZA()),2&N&&i.Q6J("ngClass",ee.$implicit)}function H(N,ee){if(1&N&&(i.TgZ(0,"div",2),i.YNc(1,K,2,1,"div",3),i.qZA()),2&N){const _=ee.$implicit;i.xp6(1),i.Q6J("ngForOf",_)}}function le(N,ee){if(1&N&&(i.ynx(0),i._uU(1),i.BQk()),2&N){const _=i.oxw(3);i.xp6(1),i.Oqu(_.nzTitle)}}function te(N,ee){if(1&N&&(i.TgZ(0,"div",11),i.YNc(1,le,2,1,"ng-container",12),i.qZA()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",_.nzTitle)}}function se(N,ee){if(1&N&&(i.ynx(0),i._uU(1),i.BQk()),2&N){const _=i.oxw(3);i.xp6(1),i.Oqu(_.nzExtra)}}function ie(N,ee){if(1&N&&(i.TgZ(0,"div",13),i.YNc(1,se,2,1,"ng-container",12),i.qZA()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",_.nzExtra)}}function V(N,ee){}function P(N,ee){if(1&N&&(i.ynx(0),i.YNc(1,V,0,0,"ng-template",14),i.BQk()),2&N){const _=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",_.listOfNzCardTabComponent.template)}}function I(N,ee){if(1&N&&(i.TgZ(0,"div",6),i.TgZ(1,"div",7),i.YNc(2,te,2,1,"div",8),i.YNc(3,ie,2,1,"div",9),i.qZA(),i.YNc(4,P,2,1,"ng-container",10),i.qZA()),2&N){const _=i.oxw();i.xp6(2),i.Q6J("ngIf",_.nzTitle),i.xp6(1),i.Q6J("ngIf",_.nzExtra),i.xp6(1),i.Q6J("ngIf",_.listOfNzCardTabComponent)}}function b(N,ee){}function ne(N,ee){if(1&N&&(i.TgZ(0,"div",15),i.YNc(1,b,0,0,"ng-template",14),i.qZA()),2&N){const _=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",_.nzCover)}}function q(N,ee){1&N&&(i.ynx(0),i.Hsn(1),i.BQk())}function de(N,ee){1&N&&i._UZ(0,"nz-card-loading")}function ge(N,ee){}function pe(N,ee){if(1&N&&(i.TgZ(0,"li"),i.TgZ(1,"span"),i.YNc(2,ge,0,0,"ng-template",14),i.qZA(),i.qZA()),2&N){const _=ee.$implicit,J=i.oxw(2);i.Udp("width",100/J.nzActions.length,"%"),i.xp6(2),i.Q6J("ngTemplateOutlet",_)}}function ue(N,ee){if(1&N&&(i.TgZ(0,"ul",16),i.YNc(1,pe,3,3,"li",17),i.qZA()),2&N){const _=i.oxw();i.xp6(1),i.Q6J("ngForOf",_.nzActions)}}let _e=(()=>{class N{constructor(){this.nzHoverable=!0}}return N.\u0275fac=function(_){return new(_||N)},N.\u0275dir=i.lG2({type:N,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(_,J){2&_&&i.ekj("ant-card-hoverable",J.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,n.gn)([(0,t.yF)()],N.prototype,"nzHoverable",void 0),N})(),De=(()=>{class N{}return N.\u0275fac=function(_){return new(_||N)},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card-tab"]],viewQuery:function(_,J){if(1&_&&i.Gf(i.Rgc,7),2&_){let Q;i.iGM(Q=i.CRH())&&(J.template=Q.first)}},exportAs:["nzCardTab"],ngContentSelectors:G,decls:1,vars:0,template:function(_,J){1&_&&(i.F$t(),i.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),N})(),Ee=(()=>{class N{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return N.\u0275fac=function(_){return new(_||N)},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(_,J){1&_&&(i.TgZ(0,"div",0),i.YNc(1,H,2,1,"div",1),i.qZA()),2&_&&(i.xp6(1),i.Q6J("ngForOf",J.listOfLoading))},directives:[X.sg,X.mk],encapsulation:2,changeDetection:0}),N})(),xe=(()=>{class N{constructor(_,J,Q){this.nzConfigService=_,this.cdr=J,this.directionality=Q,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new S.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,R.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var _;null===(_=this.directionality.change)||void 0===_||_.pipe((0,R.R)(this.destroy$)).subscribe(J=>{this.dir=J,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return N.\u0275fac=function(_){return new(_||N)(i.Y36(Z.jY),i.Y36(i.sBO),i.Y36(w.Is,8))},N.\u0275cmp=i.Xpm({type:N,selectors:[["nz-card"]],contentQueries:function(_,J,Q){if(1&_&&(i.Suo(Q,De,5),i.Suo(Q,_e,4)),2&_){let fe;i.iGM(fe=i.CRH())&&(J.listOfNzCardTabComponent=fe.first),i.iGM(fe=i.CRH())&&(J.listOfNzCardGridDirective=fe)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(_,J){2&_&&i.ekj("ant-card-loading",J.nzLoading)("ant-card-bordered",!1===J.nzBorderless&&J.nzBordered)("ant-card-hoverable",J.nzHoverable)("ant-card-small","small"===J.nzSize)("ant-card-contain-grid",J.listOfNzCardGridDirective&&J.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===J.nzType)("ant-card-contain-tabs",!!J.listOfNzCardTabComponent)("ant-card-rtl","rtl"===J.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:G,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(_,J){if(1&_&&(i.F$t(),i.YNc(0,I,5,3,"div",0),i.YNc(1,ne,2,1,"div",1),i.TgZ(2,"div",2),i.YNc(3,q,2,0,"ng-container",3),i.YNc(4,de,1,0,"ng-template",null,4,i.W1O),i.qZA(),i.YNc(6,ue,2,1,"ul",5)),2&_){const Q=i.MAs(5);i.Q6J("ngIf",J.nzTitle||J.nzExtra||J.listOfNzCardTabComponent),i.xp6(1),i.Q6J("ngIf",J.nzCover),i.xp6(1),i.Q6J("ngStyle",J.nzBodyStyle),i.xp6(1),i.Q6J("ngIf",!J.nzLoading)("ngIfElse",Q),i.xp6(3),i.Q6J("ngIf",J.nzActions.length)}},directives:[Ee,X.O5,M.f,X.tP,X.PC,X.sg],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBordered",void 0),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzBorderless",void 0),(0,n.gn)([(0,t.yF)()],N.prototype,"nzLoading",void 0),(0,n.gn)([(0,Z.oS)(),(0,t.yF)()],N.prototype,"nzHoverable",void 0),(0,n.gn)([(0,Z.oS)()],N.prototype,"nzSize",void 0),N})(),$e=(()=>{class N{}return N.\u0275fac=function(_){return new(_||N)},N.\u0275mod=i.oAB({type:N}),N.\u0275inj=i.cJS({imports:[[X.ez,M.T],w.vT]}),N})()},3677:(Se,re,r)=>{r.d(re,{cm:()=>De,b1:()=>$e,wA:()=>xe,RR:()=>Ve});var n=r(655),i=r(1159),t=r(7429),S=r(5e3),R=r(8929),Z=r(591),w=r(6787),X=r(3753),M=r(8896),L=r(3426),G=r(7604),K=r(4850),H=r(7545),le=r(2198),te=r(7138),se=r(5778),ie=r(7625),V=r(9439),P=r(6950),I=r(1721),b=r(2845),ne=r(925),q=r(226),de=r(9808),ge=r(4182),pe=r(6042),ue=r(4832),k=r(969),Y=r(647),p=r(4219),B=r(8076);function O(_,J){if(1&_){const Q=S.EpF();S.TgZ(0,"div",0),S.NdJ("@slideMotion.done",function(Ce){return S.CHM(Q),S.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return S.CHM(Q),S.oxw().setMouseState(!0)})("mouseleave",function(){return S.CHM(Q),S.oxw().setMouseState(!1)}),S.Hsn(1),S.qZA()}if(2&_){const Q=S.oxw();S.ekj("ant-dropdown-rtl","rtl"===Q.dir),S.Q6J("ngClass",Q.nzOverlayClassName)("ngStyle",Q.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("nzNoAnimation",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)}}const U=["*"],_e=[P.yW.bottomLeft,P.yW.bottomRight,P.yW.topRight,P.yW.topLeft];let De=(()=>{class _{constructor(Q,fe,Ce,Oe,Re,Ie){this.nzConfigService=Q,this.elementRef=fe,this.overlay=Ce,this.renderer=Oe,this.viewContainerRef=Re,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new R.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new Z.X(!1),this.nzTrigger$=new Z.X("hover"),this.overlayClose$=new R.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new S.vpe}setDropdownMenuValue(Q,fe){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(Q,fe)}ngAfterViewInit(){if(this.nzDropdownMenu){const Q=this.elementRef.nativeElement,fe=(0,w.T)((0,X.R)(Q,"mouseenter").pipe((0,G.h)(!0)),(0,X.R)(Q,"mouseleave").pipe((0,G.h)(!1))),Oe=(0,w.T)(this.nzDropdownMenu.mouseState$,fe),Re=(0,X.R)(Q,"click").pipe((0,K.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,H.w)(ve=>"hover"===ve?Oe:"click"===ve?Re:M.E)),Pe=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,le.h)(()=>this.nzClickHide),(0,G.h)(!1)),Me=(0,w.T)(Ie,Pe,this.overlayClose$).pipe((0,le.h)(()=>!this.nzDisabled)),we=(0,w.T)(this.inputVisible$,Me);(0,L.aj)([we,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,K.U)(([ve,Ue])=>ve||Ue),(0,te.e)(150),(0,se.x)(),(0,le.h)(()=>this.platform.isBrowser),(0,ie.R)(this.destroy$)).subscribe(ve=>{const Ae=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:Q).getBoundingClientRect().width;this.nzVisible!==ve&&this.nzVisibleChange.emit(ve),this.nzVisible=ve,ve?(this.overlayRef?this.overlayRef.getConfig().minWidth=Ae:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:Ae,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,w.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,le.h)(Fe=>!this.elementRef.nativeElement.contains(Fe.target))),this.overlayRef.keydownEvents().pipe((0,le.h)(Fe=>Fe.keyCode===i.hY&&!(0,i.Vb)(Fe)))).pipe((0,ie.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([P.yW[this.nzPlacement],..._e]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,ie.R)(this.destroy$)).subscribe(ve=>{"void"===ve.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(Q){const{nzVisible:fe,nzDisabled:Ce,nzOverlayClassName:Oe,nzOverlayStyle:Re,nzTrigger:Ie}=Q;if(Ie&&this.nzTrigger$.next(this.nzTrigger),fe&&this.inputVisible$.next(this.nzVisible),Ce){const Pe=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Pe,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Pe,"disabled")}Oe&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Re&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return _.\u0275fac=function(Q){return new(Q||_)(S.Y36(V.jY),S.Y36(S.SBq),S.Y36(b.aV),S.Y36(S.Qsj),S.Y36(S.s_b),S.Y36(ne.t4))},_.\u0275dir=S.lG2({type:_,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[S.TTD]}),(0,n.gn)([(0,V.oS)(),(0,I.yF)()],_.prototype,"nzBackdrop",void 0),(0,n.gn)([(0,I.yF)()],_.prototype,"nzClickHide",void 0),(0,n.gn)([(0,I.yF)()],_.prototype,"nzDisabled",void 0),(0,n.gn)([(0,I.yF)()],_.prototype,"nzVisible",void 0),_})(),Ee=(()=>{class _{}return _.\u0275fac=function(Q){return new(Q||_)},_.\u0275mod=S.oAB({type:_}),_.\u0275inj=S.cJS({}),_})(),xe=(()=>{class _{constructor(Q,fe,Ce){this.renderer=Q,this.nzButtonGroupComponent=fe,this.elementRef=Ce}ngAfterViewInit(){const Q=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&Q&&this.renderer.addClass(Q,"ant-dropdown-button")}}return _.\u0275fac=function(Q){return new(Q||_)(S.Y36(S.Qsj),S.Y36(pe.fY,9),S.Y36(S.SBq))},_.\u0275dir=S.lG2({type:_,selectors:[["","nz-button","","nz-dropdown",""]]}),_})(),Ve=(()=>{class _{constructor(Q,fe,Ce,Oe,Re,Ie,Pe){this.cdr=Q,this.elementRef=fe,this.renderer=Ce,this.viewContainerRef=Oe,this.nzMenuService=Re,this.directionality=Ie,this.noAnimation=Pe,this.mouseState$=new Z.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new S.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new R.xQ}onAnimationEvent(Q){this.animationStateChange$.emit(Q)}setMouseState(Q){this.mouseState$.next(Q)}setValue(Q,fe){this[Q]=fe,this.cdr.markForCheck()}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,ie.R)(this.destroy$)).subscribe(fe=>{this.dir=fe,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return _.\u0275fac=function(Q){return new(Q||_)(S.Y36(S.sBO),S.Y36(S.SBq),S.Y36(S.Qsj),S.Y36(S.s_b),S.Y36(p.hl),S.Y36(q.Is,8),S.Y36(ue.P,9))},_.\u0275cmp=S.Xpm({type:_,selectors:[["nz-dropdown-menu"]],viewQuery:function(Q,fe){if(1&Q&&S.Gf(S.Rgc,7),2&Q){let Ce;S.iGM(Ce=S.CRH())&&(fe.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[S._Bn([p.hl,{provide:p.Cc,useValue:!0}])],ngContentSelectors:U,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(Q,fe){1&Q&&(S.F$t(),S.YNc(0,O,2,7,"ng-template"))},directives:[de.mk,de.PC,ue.P],encapsulation:2,data:{animation:[B.mF]},changeDetection:0}),_})(),$e=(()=>{class _{}return _.\u0275fac=function(Q){return new(Q||_)},_.\u0275mod=S.oAB({type:_}),_.\u0275inj=S.cJS({imports:[[q.vT,de.ez,b.U8,ge.u5,pe.sL,p.ip,Y.PV,ue.g,ne.ud,P.e4,Ee,k.T],p.ip]}),_})();new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new b.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(Se,re,r)=>{r.d(re,{n_:()=>Je,I2:()=>be,t4:()=>Ge,AA:()=>Xe,yw:()=>ze,yi:()=>oe,Pb:()=>u,IO:()=>m,Ph:()=>tt});var n=r(5e3),i=r(6699),t=r(9808),S=r(969),R=r(655),Z=r(1721),w=r(8929),X=r(8514),M=r(1086),L=r(6787),G=r(591),K=r(2986),H=r(7545),le=r(7625),te=r(685),se=r(226),ie=r(7525),V=r(1894);const P=["*"];function I(f,E){if(1&f&&n._UZ(0,"nz-avatar",3),2&f){const C=n.oxw();n.Q6J("nzSrc",C.nzSrc)}}function b(f,E){1&f&&n.Hsn(0,0,["*ngIf","!nzSrc"])}function ne(f,E){if(1&f&&n._UZ(0,"nz-list-item-meta-avatar",3),2&f){const C=n.oxw();n.Q6J("nzSrc",C.avatarStr)}}function q(f,E){if(1&f&&(n.TgZ(0,"nz-list-item-meta-avatar"),n.GkF(1,4),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",C.avatarTpl)}}function de(f,E){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzTitle)}}function ge(f,E){if(1&f&&(n.TgZ(0,"nz-list-item-meta-title"),n.YNc(1,de,2,1,"ng-container",6),n.qZA()),2&f){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzTitle)}}function pe(f,E){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzDescription)}}function ue(f,E){if(1&f&&(n.TgZ(0,"nz-list-item-meta-description"),n.YNc(1,pe,2,1,"ng-container",6),n.qZA()),2&f){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzDescription)}}function k(f,E){if(1&f&&(n.TgZ(0,"div",5),n.YNc(1,ge,2,1,"nz-list-item-meta-title",1),n.YNc(2,ue,2,1,"nz-list-item-meta-description",1),n.Hsn(3,1),n.Hsn(4,2),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("ngIf",C.nzTitle&&!C.titleComponent),n.xp6(1),n.Q6J("ngIf",C.nzDescription&&!C.descriptionComponent)}}const Y=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],p=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function B(f,E){1&f&&n.Hsn(0)}const O=["nz-list-item-actions",""];function U(f,E){}function ye(f,E){1&f&&n._UZ(0,"em",3)}function _e(f,E){if(1&f&&(n.TgZ(0,"li"),n.YNc(1,U,0,0,"ng-template",1),n.YNc(2,ye,1,0,"em",2),n.qZA()),2&f){const C=E.$implicit,F=E.last;n.xp6(1),n.Q6J("ngTemplateOutlet",C),n.xp6(1),n.Q6J("ngIf",!F)}}function De(f,E){}const Ee=function(f,E){return{$implicit:f,index:E}};function Ne(f,E){if(1&f&&(n.ynx(0),n.YNc(1,De,0,0,"ng-template",9),n.BQk()),2&f){const C=E.$implicit,F=E.index,ce=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",n.WLB(2,Ee,C,F))}}function xe(f,E){if(1&f&&(n.TgZ(0,"div",7),n.YNc(1,Ne,2,5,"ng-container",8),n.Hsn(2,4),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("ngForOf",C.nzDataSource)}}function Ve(f,E){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const C=n.oxw(2);n.xp6(1),n.Oqu(C.nzHeader)}}function $e(f,E){if(1&f&&(n.TgZ(0,"nz-list-header"),n.YNc(1,Ve,2,1,"ng-container",10),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function N(f,E){1&f&&n._UZ(0,"div"),2&f&&n.Udp("min-height",53,"px")}function ee(f,E){}function _(f,E){if(1&f&&(n.TgZ(0,"div",13),n.YNc(1,ee,0,0,"ng-template",9),n.qZA()),2&f){const C=E.$implicit,F=E.index,ce=n.oxw(2);n.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),n.xp6(1),n.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",n.WLB(9,Ee,C,F))}}function J(f,E){if(1&f&&(n.TgZ(0,"div",11),n.YNc(1,_,2,12,"div",12),n.qZA()),2&f){const C=n.oxw();n.Q6J("nzGutter",C.nzGrid.gutter||null),n.xp6(1),n.Q6J("ngForOf",C.nzDataSource)}}function Q(f,E){if(1&f&&n._UZ(0,"nz-list-empty",14),2&f){const C=n.oxw();n.Q6J("nzNoResult",C.nzNoResult)}}function fe(f,E){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const C=n.oxw(2);n.xp6(1),n.Oqu(C.nzFooter)}}function Ce(f,E){if(1&f&&(n.TgZ(0,"nz-list-footer"),n.YNc(1,fe,2,1,"ng-container",10),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Oe(f,E){}function Re(f,E){}function Ie(f,E){if(1&f&&(n.TgZ(0,"nz-list-pagination"),n.YNc(1,Re,0,0,"ng-template",6),n.qZA()),2&f){const C=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzPagination)}}const Pe=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],Me=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function we(f,E){if(1&f&&n._UZ(0,"ul",6),2&f){const C=n.oxw(2);n.Q6J("nzActions",C.nzActions)}}function ve(f,E){if(1&f&&(n.YNc(0,we,1,1,"ul",5),n.Hsn(1)),2&f){const C=n.oxw();n.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Ue(f,E){if(1&f&&(n.ynx(0),n._uU(1),n.BQk()),2&f){const C=n.oxw(3);n.xp6(1),n.Oqu(C.nzContent)}}function Ae(f,E){if(1&f&&(n.ynx(0),n.YNc(1,Ue,2,1,"ng-container",8),n.BQk()),2&f){const C=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",C.nzContent)}}function Fe(f,E){if(1&f&&(n.Hsn(0,1),n.Hsn(1,2),n.YNc(2,Ae,2,1,"ng-container",7)),2&f){const C=n.oxw();n.xp6(2),n.Q6J("ngIf",C.nzContent)}}function nt(f,E){1&f&&n.Hsn(0,3)}function it(f,E){}function et(f,E){}function ot(f,E){}function y(f,E){}function rt(f,E){if(1&f&&(n.YNc(0,it,0,0,"ng-template",9),n.YNc(1,et,0,0,"ng-template",9),n.YNc(2,ot,0,0,"ng-template",9),n.YNc(3,y,0,0,"ng-template",9)),2&f){const C=n.oxw(),F=n.MAs(3),ce=n.MAs(5),he=n.MAs(1);n.Q6J("ngTemplateOutlet",F),n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzExtra),n.xp6(1),n.Q6J("ngTemplateOutlet",ce),n.xp6(1),n.Q6J("ngTemplateOutlet",he)}}function st(f,E){}function at(f,E){}function dt(f,E){}function Qe(f,E){if(1&f&&(n.TgZ(0,"nz-list-item-extra"),n.YNc(1,dt,0,0,"ng-template",9),n.qZA()),2&f){const C=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(f,E){}function h(f,E){if(1&f&&(n.ynx(0),n.TgZ(1,"div",10),n.YNc(2,st,0,0,"ng-template",9),n.YNc(3,at,0,0,"ng-template",9),n.qZA(),n.YNc(4,Qe,2,1,"nz-list-item-extra",7),n.YNc(5,pt,0,0,"ng-template",9),n.BQk()),2&f){const C=n.oxw(),F=n.MAs(3),ce=n.MAs(1),he=n.MAs(5);n.xp6(2),n.Q6J("ngTemplateOutlet",F),n.xp6(1),n.Q6J("ngTemplateOutlet",ce),n.xp6(1),n.Q6J("ngIf",C.nzExtra),n.xp6(1),n.Q6J("ngTemplateOutlet",he)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],j=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let m=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:P,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(C,F){1&C&&(n.F$t(),n.TgZ(0,"h4",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),f})(),u=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:P,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(C,F){1&C&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},encapsulation:2,changeDetection:0}),f})(),W=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:P,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(C,F){1&C&&(n.F$t(),n.TgZ(0,"div",0),n.YNc(1,I,1,1,"nz-avatar",1),n.YNc(2,b,1,0,"ng-content",2),n.qZA()),2&C&&(n.xp6(1),n.Q6J("ngIf",F.nzSrc),n.xp6(1),n.Q6J("ngIf",!F.nzSrc))},directives:[i.Dz,t.O5],encapsulation:2,changeDetection:0}),f})(),oe=(()=>{class f{constructor(C,F){this.elementRef=C,this.renderer=F,this.avatarStr="",this.renderer.addClass(C.nativeElement,"ant-list-item-meta")}set nzAvatar(C){C instanceof n.Rgc?(this.avatarStr="",this.avatarTpl=C):this.avatarStr=C}}return f.\u0275fac=function(C){return new(C||f)(n.Y36(n.SBq),n.Y36(n.Qsj))},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(C,F,ce){if(1&C&&(n.Suo(ce,u,5),n.Suo(ce,m,5)),2&C){let he;n.iGM(he=n.CRH())&&(F.descriptionComponent=he.first),n.iGM(he=n.CRH())&&(F.titleComponent=he.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:p,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(C,F){1&C&&(n.F$t(Y),n.YNc(0,ne,1,1,"nz-list-item-meta-avatar",0),n.YNc(1,q,2,1,"nz-list-item-meta-avatar",1),n.Hsn(2),n.YNc(3,k,5,2,"div",2)),2&C&&(n.Q6J("ngIf",F.avatarStr),n.xp6(1),n.Q6J("ngIf",F.avatarTpl),n.xp6(2),n.Q6J("ngIf",F.nzTitle||F.nzDescription||F.descriptionComponent||F.titleComponent))},directives:[W,m,u,t.O5,t.tP,S.f],encapsulation:2,changeDetection:0}),f})(),ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:P,decls:1,vars:0,template:function(C,F){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item-action"]],viewQuery:function(C,F){if(1&C&&n.Gf(n.Rgc,5),2&C){let ce;n.iGM(ce=n.CRH())&&(F.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:P,decls:1,vars:0,template:function(C,F){1&C&&(n.F$t(),n.YNc(0,B,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),f})(),Te=(()=>{class f{constructor(C,F){this.ngZone=C,this.cdr=F,this.nzActions=[],this.actions=[],this.destroy$=new w.xQ,this.inputActionChanges$=new w.xQ,this.contentChildrenChanges$=(0,X.P)(()=>this.nzListItemActions?(0,M.of)(null):this.ngZone.onStable.asObservable().pipe((0,K.q)(1),(0,H.w)(()=>this.contentChildrenChanges$))),(0,L.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,le.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(C){return new(C||f)(n.Y36(n.R0b),n.Y36(n.sBO))},f.\u0275cmp=n.Xpm({type:f,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,F,ce){if(1&C&&n.Suo(ce,Ze,4),2&C){let he;n.iGM(he=n.CRH())&&(F.nzListItemActions=he)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[n.TTD],attrs:O,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,F){1&C&&n.YNc(0,_e,3,2,"li",0),2&C&&n.Q6J("ngForOf",F.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),f})(),be=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,F){1&C&&n._UZ(0,"nz-embed-empty",0),2&C&&n.Q6J("nzComponentName","list")("specificContent",F.nzNoResult)},directives:[te.gB],encapsulation:2,changeDetection:0}),f})(),Ge=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:P,decls:1,vars:0,template:function(C,F){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),ke=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:P,decls:1,vars:0,template:function(C,F){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ye=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:P,decls:1,vars:0,template:function(C,F){1&C&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ke=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275dir=n.lG2({type:f,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),f})(),Je=(()=>{class f{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new G.X(this.nzItemLayout),this.destroy$=new w.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,le.R)(this.destroy$)).subscribe(F=>{this.dir=F})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return f.\u0275fac=function(C){return new(C||f)(n.Y36(se.Is,8))},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,F,ce){if(1&C&&(n.Suo(ce,ke,5),n.Suo(ce,Ye,5),n.Suo(ce,Ke,5)),2&C){let he;n.iGM(he=n.CRH())&&(F.nzListFooterComponent=he.first),n.iGM(he=n.CRH())&&(F.nzListPaginationComponent=he.first),n.iGM(he=n.CRH())&&(F.nzListLoadMoreDirective=he.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,F){2&C&&n.ekj("ant-list-rtl","rtl"===F.dir)("ant-list-vertical","vertical"===F.nzItemLayout)("ant-list-lg","large"===F.nzSize)("ant-list-sm","small"===F.nzSize)("ant-list-split",F.nzSplit)("ant-list-bordered",F.nzBordered)("ant-list-loading",F.nzLoading)("ant-list-something-after-last-item",F.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[n.TTD],ngContentSelectors:Me,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,F){if(1&C&&(n.F$t(Pe),n.YNc(0,xe,3,1,"ng-template",null,0,n.W1O),n.YNc(2,$e,2,1,"nz-list-header",1),n.Hsn(3),n.TgZ(4,"nz-spin",2),n.ynx(5),n.YNc(6,N,1,2,"div",3),n.YNc(7,J,2,2,"div",4),n.YNc(8,Q,1,1,"nz-list-empty",5),n.BQk(),n.qZA(),n.YNc(9,Ce,2,1,"nz-list-footer",1),n.Hsn(10,1),n.YNc(11,Oe,0,0,"ng-template",6),n.Hsn(12,2),n.YNc(13,Ie,2,1,"nz-list-pagination",1),n.Hsn(14,3)),2&C){const ce=n.MAs(1);n.xp6(2),n.Q6J("ngIf",F.nzHeader),n.xp6(2),n.Q6J("nzSpinning",F.nzLoading),n.xp6(2),n.Q6J("ngIf",F.nzLoading&&F.nzDataSource&&0===F.nzDataSource.length),n.xp6(1),n.Q6J("ngIf",F.nzGrid&&F.nzDataSource)("ngIfElse",ce),n.xp6(1),n.Q6J("ngIf",!F.nzLoading&&F.nzDataSource&&0===F.nzDataSource.length),n.xp6(1),n.Q6J("ngIf",F.nzFooter),n.xp6(2),n.Q6J("ngTemplateOutlet",F.nzLoadMore),n.xp6(2),n.Q6J("ngIf",F.nzPagination)}},directives:[Ge,ie.W,be,ke,Ye,t.sg,t.tP,t.O5,S.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,R.gn)([(0,Z.yF)()],f.prototype,"nzBordered",void 0),(0,R.gn)([(0,Z.yF)()],f.prototype,"nzLoading",void 0),(0,R.gn)([(0,Z.yF)()],f.prototype,"nzSplit",void 0),f})(),Xe=(()=>{class f{constructor(C,F,ce,he){this.parentComp=ce,this.cdr=he,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,F.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return f.\u0275fac=function(C){return new(C||f)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(Je),n.Y36(n.sBO))},f.\u0275cmp=n.Xpm({type:f,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,F,ce){if(1&C&&n.Suo(ce,ze,5),2&C){let he;n.iGM(he=n.CRH())&&(F.listItemExtraDirective=he.first)}},hostVars:2,hostBindings:function(C,F){2&C&&n.ekj("ant-list-item-no-flex",F.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:j,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,F){if(1&C&&(n.F$t(a),n.YNc(0,ve,2,1,"ng-template",null,0,n.W1O),n.YNc(2,Fe,3,1,"ng-template",null,1,n.W1O),n.YNc(4,nt,1,0,"ng-template",null,2,n.W1O),n.YNc(6,rt,4,4,"ng-template",null,3,n.W1O),n.YNc(8,h,6,4,"ng-container",4)),2&C){const ce=n.MAs(7);n.xp6(8),n.Q6J("ngIf",F.isVerticalAndExtra)("ngIfElse",ce)}},directives:[Te,ze,t.O5,S.f,t.tP],encapsulation:2,changeDetection:0}),(0,R.gn)([(0,Z.yF)()],f.prototype,"nzNoFlex",void 0),f})(),tt=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[se.vT,t.ez,ie.j,V.Jb,i.Rt,S.T,te.Xo]]}),f})()},4219:(Se,re,r)=>{r.d(re,{hl:()=>ve,Cc:()=>Me,wO:()=>at,YV:()=>pt,r9:()=>Ae,ip:()=>h});var n=r(655),i=r(5e3),t=r(8929),S=r(591),R=r(6787),Z=r(3426),w=r(4850),X=r(1709),M=r(2198),L=r(7604),G=r(7138),K=r(5778),H=r(7625),le=r(1059),te=r(7545),se=r(1721),ie=r(325),V=r(226),P=r(2845),I=r(6950),b=r(925),ne=r(4832),q=r(9808),de=r(647),ge=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function k(a,j){if(1&a&&i._UZ(0,"i",4),2&a){const m=i.oxw();i.Q6J("nzType",m.nzIcon)}}function Y(a,j){if(1&a&&(i.ynx(0),i.TgZ(1,"span"),i._uU(2),i.qZA(),i.BQk()),2&a){const m=i.oxw();i.xp6(2),i.Oqu(m.nzTitle)}}function p(a,j){1&a&&i._UZ(0,"i",8)}function B(a,j){1&a&&i._UZ(0,"i",9)}function O(a,j){if(1&a&&(i.TgZ(0,"span",5),i.YNc(1,p,1,0,"i",6),i.YNc(2,B,1,0,"i",7),i.qZA()),2&a){const m=i.oxw();i.Q6J("ngSwitch",m.dir),i.xp6(1),i.Q6J("ngSwitchCase","rtl")}}function U(a,j){1&a&&i._UZ(0,"i",10)}const ye=["*"],_e=["nz-submenu-inline-child",""];function De(a,j){}const Ee=["nz-submenu-none-inline-child",""];function Ne(a,j){}const xe=["nz-submenu",""];function Ve(a,j){1&a&&i.Hsn(0,0,["*ngIf","!nzTitle"])}function $e(a,j){if(1&a&&i._UZ(0,"div",6),2&a){const m=i.oxw(),u=i.MAs(7);i.Q6J("mode",m.mode)("nzOpen",m.nzOpen)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("menuClass",m.nzMenuClassName)("templateOutlet",u)}}function N(a,j){if(1&a){const m=i.EpF();i.TgZ(0,"div",8),i.NdJ("subMenuMouseState",function(W){return i.CHM(m),i.oxw(2).setMouseEnterState(W)}),i.qZA()}if(2&a){const m=i.oxw(2),u=i.MAs(7);i.Q6J("theme",m.theme)("mode",m.mode)("nzOpen",m.nzOpen)("position",m.position)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("templateOutlet",u)("menuClass",m.nzMenuClassName)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)}}function ee(a,j){if(1&a){const m=i.EpF();i.YNc(0,N,1,10,"ng-template",7),i.NdJ("positionChange",function(W){return i.CHM(m),i.oxw().onPositionChange(W)})}if(2&a){const m=i.oxw(),u=i.MAs(1);i.Q6J("cdkConnectedOverlayPositions",m.overlayPositions)("cdkConnectedOverlayOrigin",u)("cdkConnectedOverlayWidth",m.triggerWidth)("cdkConnectedOverlayOpen",m.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function _(a,j){1&a&&i.Hsn(0,1)}const J=[[["","title",""]],"*"],Q=["[title]","*"],Me=new i.OlP("NzIsInDropDownMenuToken"),we=new i.OlP("NzMenuServiceLocalToken");let ve=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new S.X("light"),this.mode$=new S.X("vertical"),this.inlineIndent$=new S.X(24),this.isChildSubMenuOpen$=new S.X(!1)}onDescendantMenuItemClick(m){this.descendantMenuItemClick$.next(m)}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setMode(m){this.mode$.next(m)}setTheme(m){this.theme$.next(m)}setInlineIndent(m){this.inlineIndent$.next(m)}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),Ue=(()=>{class a{constructor(m,u,W){this.nzHostSubmenuService=m,this.nzMenuService=u,this.isMenuInsideDropDown=W,this.mode$=this.nzMenuService.mode$.pipe((0,w.U)(Te=>"inline"===Te?"inline":"vertical"===Te||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new S.X(!1),this.isChildSubMenuOpen$=new S.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const oe=this.childMenuItemClick$.pipe((0,X.zg)(()=>this.mode$),(0,M.h)(Te=>"inline"!==Te||this.isMenuInsideDropDown),(0,L.h)(!1)),ze=(0,R.T)(this.isMouseEnterTitleOrOverlay$,oe);(0,Z.aj)([this.isChildSubMenuOpen$,ze]).pipe((0,w.U)(([Te,be])=>Te||be),(0,G.e)(150),(0,K.x)(),(0,H.R)(this.destroy$)).pipe((0,K.x)()).subscribe(Te=>{this.setOpenStateWithoutDebounce(Te),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Te):this.nzMenuService.isChildSubMenuOpen$.next(Te)})}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setOpenStateWithoutDebounce(m){this.isCurrentSubMenuOpen$.next(m)}setMouseEnterTitleOrOverlayState(m){this.isMouseEnterTitleOrOverlay$.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.LFG(a,12),i.LFG(ve),i.LFG(Me))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),Ae=(()=>{class a{constructor(m,u,W,oe,ze,Ze,Te,be){this.nzMenuService=m,this.cdr=u,this.nzSubmenuService=W,this.isMenuInsideDropDown=oe,this.directionality=ze,this.routerLink=Ze,this.routerLinkWithHref=Te,this.router=be,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,be&&this.router.events.pipe((0,H.R)(this.destroy$),(0,M.h)(Ge=>Ge instanceof ie.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(m){this.nzDisabled?(m.preventDefault(),m.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(m){this.nzSelected=m,this.selected$.next(m)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const m=this.hasActiveLinks();this.nzSelected!==m&&(this.nzSelected=m,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const m=this.isLinkActive(this.router);return this.routerLink&&m(this.routerLink)||this.routerLinkWithHref&&m(this.routerLinkWithHref)||this.listOfRouterLink.some(m)||this.listOfRouterLinkWithHref.some(m)}isLinkActive(m){return u=>m.isActive(u.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var m;(0,Z.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,W])=>{this.inlinePaddingLeft="inline"===u?this.level*W:null}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(m){m.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Ue,8),i.Y36(Me),i.Y36(V.Is,8),i.Y36(ie.rH,8),i.Y36(ie.yS,8),i.Y36(ie.F0,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(m,u,W){if(1&m&&(i.Suo(W,ie.rH,5),i.Suo(W,ie.yS,5)),2&m){let oe;i.iGM(oe=i.CRH())&&(u.listOfRouterLink=oe),i.iGM(oe=i.CRH())&&(u.listOfRouterLinkWithHref=oe)}},hostVars:20,hostBindings:function(m,u){1&m&&i.NdJ("click",function(oe){return u.clickMenuItem(oe)}),2&m&&(i.Udp("padding-left","rtl"===u.dir?null:u.nzPaddingLeft||u.inlinePaddingLeft,"px")("padding-right","rtl"===u.dir?u.nzPaddingLeft||u.inlinePaddingLeft:null,"px"),i.ekj("ant-dropdown-menu-item",u.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",u.isMenuInsideDropDown&&u.nzSelected)("ant-dropdown-menu-item-danger",u.isMenuInsideDropDown&&u.nzDanger)("ant-dropdown-menu-item-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-item",!u.isMenuInsideDropDown)("ant-menu-item-selected",!u.isMenuInsideDropDown&&u.nzSelected)("ant-menu-item-danger",!u.isMenuInsideDropDown&&u.nzDanger)("ant-menu-item-disabled",!u.isMenuInsideDropDown&&u.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[i.TTD]}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzSelected",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDanger",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),Fe=(()=>{class a{constructor(m,u){this.cdr=m,this.directionality=u,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new i.vpe,this.subMenuMouseState=new i.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var m;this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(m,u){1&m&&i.NdJ("click",function(){return u.clickTitle()})("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&m&&(i.Udp("padding-left","rtl"===u.dir?null:u.paddingLeft,"px")("padding-right","rtl"===u.dir?u.paddingLeft:null,"px"),i.ekj("ant-dropdown-menu-submenu-title",u.isMenuInsideDropDown)("ant-menu-submenu-title",!u.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:ye,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(m,u){if(1&m&&(i.F$t(),i.YNc(0,k,1,1,"i",0),i.YNc(1,Y,3,1,"ng-container",1),i.Hsn(2),i.YNc(3,O,3,2,"span",2),i.YNc(4,U,1,0,"ng-template",null,3,i.W1O)),2&m){const W=i.MAs(5);i.Q6J("ngIf",u.nzIcon),i.xp6(1),i.Q6J("nzStringTemplateOutlet",u.nzTitle),i.xp6(2),i.Q6J("ngIf",u.isMenuInsideDropDown)("ngIfElse",W)}},directives:[q.O5,de.Ls,ge.f,q.RF,q.n9,q.ED],encapsulation:2,changeDetection:0}),a})(),nt=(()=>{class a{constructor(m,u,W){this.elementRef=m,this.renderer=u,this.directionality=W,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(m){const{mode:u,nzOpen:W,menuClass:oe}=m;(u||W)&&this.calcMotionState(),oe&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.removeClass(this.elementRef.nativeElement,ze)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.addClass(this.elementRef.nativeElement,ze)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(m,u){2&m&&(i.d8E("@collapseMotion",u.expandState),i.ekj("ant-menu-rtl","rtl"===u.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[i.TTD],attrs:_e,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(m,u){1&m&&i.YNc(0,De,0,0,"ng-template",0),2&m&&i.Q6J("ngTemplateOutlet",u.templateOutlet)},directives:[q.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),it=(()=>{class a{constructor(m){this.directionality=m,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new i.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(m){const{mode:u,nzOpen:W}=m;(u||W)&&this.calcMotionState()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(m,u){1&m&&i.NdJ("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&m&&(i.d8E("@slideMotion",u.expandState)("@zoomBigMotion",u.expandState),i.ekj("ant-menu-light","light"===u.theme)("ant-menu-dark","dark"===u.theme)("ant-menu-submenu-placement-bottom","horizontal"===u.mode)("ant-menu-submenu-placement-right","vertical"===u.mode&&"right"===u.position)("ant-menu-submenu-placement-left","vertical"===u.mode&&"left"===u.position)("ant-menu-submenu-rtl","rtl"===u.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[i.TTD],attrs:Ee,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(m,u){1&m&&(i.TgZ(0,"div",0),i.YNc(1,Ne,0,0,"ng-template",1),i.qZA()),2&m&&(i.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-menu",!u.isMenuInsideDropDown)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown)("ant-menu-vertical",!u.isMenuInsideDropDown)("ant-dropdown-menu-sub",u.isMenuInsideDropDown)("ant-menu-sub",!u.isMenuInsideDropDown)("ant-menu-rtl","rtl"===u.dir),i.Q6J("ngClass",u.menuClass),i.xp6(1),i.Q6J("ngTemplateOutlet",u.templateOutlet))},directives:[q.mk,q.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const et=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],ot=[I.yW.bottomLeft];let y=(()=>{class a{constructor(m,u,W,oe,ze,Ze,Te){this.nzMenuService=m,this.cdr=u,this.nzSubmenuService=W,this.platform=oe,this.isMenuInsideDropDown=ze,this.directionality=Ze,this.noAnimation=Te,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new i.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=et,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(m){this.nzSubmenuService.setOpenStateWithoutDebounce(m)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(m){this.isActive=m,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(m)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(m){const u=(0,I.d_)(m);"rightTop"===u||"rightBottom"===u||"right"===u?this.position="right":("leftTop"===u||"leftBottom"===u||"left"===u)&&(this.position="left")}ngOnInit(){var m;this.nzMenuService.theme$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.theme=u,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.mode=u,"horizontal"===u?this.overlayPositions=ot:"vertical"===u&&(this.overlayPositions=et),this.cdr.markForCheck()}),(0,Z.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,W])=>{this.inlinePaddingLeft="inline"===u?this.level*W:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.isActive=u,u!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=u,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const m=this.listOfNzMenuItemDirective,u=m.changes,W=(0,R.T)(u,...m.map(oe=>oe.selected$));u.pipe((0,le.O)(m),(0,te.w)(()=>W),(0,le.O)(!0),(0,w.U)(()=>m.some(oe=>oe.nzSelected)),(0,H.R)(this.destroy$)).subscribe(oe=>{this.isSelected=oe,this.cdr.markForCheck()})}ngOnChanges(m){const{nzOpen:u}=m;u&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Ue),i.Y36(b.t4),i.Y36(Me),i.Y36(V.Is,8),i.Y36(ne.P,9))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(m,u,W){if(1&m&&(i.Suo(W,a,5),i.Suo(W,Ae,5)),2&m){let oe;i.iGM(oe=i.CRH())&&(u.listOfNzSubMenuComponent=oe),i.iGM(oe=i.CRH())&&(u.listOfNzMenuItemDirective=oe)}},viewQuery:function(m,u){if(1&m&&i.Gf(P.xu,7,i.SBq),2&m){let W;i.iGM(W=i.CRH())&&(u.cdkOverlayOrigin=W.first)}},hostVars:34,hostBindings:function(m,u){2&m&&i.ekj("ant-dropdown-menu-submenu",u.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-dropdown-menu-submenu-open",u.isMenuInsideDropDown&&u.nzOpen)("ant-dropdown-menu-submenu-selected",u.isMenuInsideDropDown&&u.isSelected)("ant-dropdown-menu-submenu-vertical",u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-dropdown-menu-submenu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-dropdown-menu-submenu-inline",u.isMenuInsideDropDown&&"inline"===u.mode)("ant-dropdown-menu-submenu-active",u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu",!u.isMenuInsideDropDown)("ant-menu-submenu-disabled",!u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-submenu-open",!u.isMenuInsideDropDown&&u.nzOpen)("ant-menu-submenu-selected",!u.isMenuInsideDropDown&&u.isSelected)("ant-menu-submenu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-menu-submenu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-menu-submenu-inline",!u.isMenuInsideDropDown&&"inline"===u.mode)("ant-menu-submenu-active",!u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu-rtl","rtl"===u.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[i._Bn([Ue]),i.TTD],attrs:xe,ngContentSelectors:Q,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(m,u){if(1&m&&(i.F$t(J),i.TgZ(0,"div",0,1),i.NdJ("subMenuMouseState",function(oe){return u.setMouseEnterState(oe)})("toggleSubMenu",function(){return u.toggleSubMenu()}),i.YNc(2,Ve,1,0,"ng-content",2),i.qZA(),i.YNc(3,$e,1,6,"div",3),i.YNc(4,ee,1,5,"ng-template",null,4,i.W1O),i.YNc(6,_,1,0,"ng-template",null,5,i.W1O)),2&m){const W=i.MAs(5);i.Q6J("nzIcon",u.nzIcon)("nzTitle",u.nzTitle)("mode",u.mode)("nzDisabled",u.nzDisabled)("isMenuInsideDropDown",u.isMenuInsideDropDown)("paddingLeft",u.nzPaddingLeft||u.inlinePaddingLeft),i.xp6(2),i.Q6J("ngIf",!u.nzTitle),i.xp6(1),i.Q6J("ngIf","inline"===u.mode)("ngIfElse",W)}},directives:[Fe,nt,it,P.xu,q.O5,ne.P,P.pI],encapsulation:2,changeDetection:0}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzOpen",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzDisabled",void 0),a})();function rt(a,j){return a||j}function st(a){return a||!1}let at=(()=>{class a{constructor(m,u,W,oe){this.nzMenuService=m,this.isMenuInsideDropDown=u,this.cdr=W,this.directionality=oe,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new i.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new S.X(this.nzInlineCollapsed),this.mode$=new S.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(m){this.nzInlineCollapsed=m,this.inlineCollapsed$.next(m)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(m=>m.nzOpen),this.listOfNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var m;(0,Z.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,W])=>{this.actualMode=u?"vertical":W,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.nzClick.emit(u),this.nzSelectable&&!u.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(W=>W.setSelectedState(W===u))}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(m){const{nzInlineCollapsed:u,nzInlineIndent:W,nzTheme:oe,nzMode:ze}=m;u&&this.inlineCollapsed$.next(this.nzInlineCollapsed),W&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),oe&&this.nzMenuService.setTheme(this.nzTheme),ze&&(this.mode$.next(this.nzMode),!m.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ze=>Ze.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(Me),i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(m,u,W){if(1&m&&(i.Suo(W,Ae,5),i.Suo(W,y,5)),2&m){let oe;i.iGM(oe=i.CRH())&&(u.listOfNzMenuItemDirective=oe),i.iGM(oe=i.CRH())&&(u.listOfNzSubMenuComponent=oe)}},hostVars:34,hostBindings:function(m,u){2&m&&i.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-dropdown-menu-root",u.isMenuInsideDropDown)("ant-dropdown-menu-light",u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-dropdown-menu-dark",u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-dropdown-menu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-dropdown-menu-inline",u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-dropdown-menu-inline-collapsed",u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu",!u.isMenuInsideDropDown)("ant-menu-root",!u.isMenuInsideDropDown)("ant-menu-light",!u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-menu-dark",!u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-menu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-menu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-menu-inline",!u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-menu-inline-collapsed",!u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu-rtl","rtl"===u.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[i._Bn([{provide:we,useClass:ve},{provide:ve,useFactory:rt,deps:[[new i.tp0,new i.FiY,ve],we]},{provide:Me,useFactory:st,deps:[[new i.tp0,new i.FiY,Me]]}]),i.TTD]}),(0,n.gn)([(0,se.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,n.gn)([(0,se.yF)()],a.prototype,"nzSelectable",void 0),a})(),pt=(()=>{class a{constructor(m,u){this.elementRef=m,this.renderer=u,this.renderer.addClass(m.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),h=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[V.vT,q.ez,b.ud,P.U8,de.PV,ne.g,ge.T]]}),a})()},8144:(Se,re,r)=>{r.d(re,{NU:()=>ie,$1:()=>le,zf:()=>V});var n=r(226),i=r(9808),t=r(5e3),S=r(655),R=r(8929),Z=r(7625),w=r(9439),X=r(1721);function M(P,I){}const L=function(P){return{$implicit:P}};function G(P,I){if(1&P&&(t.TgZ(0,"span",4),t.YNc(1,M,0,0,"ng-template",5),t.qZA()),2&P){const b=t.oxw(),ne=b.last,q=b.index,de=t.oxw();t.Udp("margin-bottom","vertical"===de.nzDirection?ne?null:de.spaceSize:null,"px")("margin-right","horizontal"===de.nzDirection?ne?null:de.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",de.nzSplit)("ngTemplateOutletContext",t.VKq(6,L,q))}}function K(P,I){if(1&P&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,G,2,8,"span",3)),2&P){const b=I.$implicit,ne=I.last,q=t.oxw();t.Udp("margin-bottom","vertical"===q.nzDirection?ne?null:q.spaceSize:null,"px")("margin-right","horizontal"===q.nzDirection?ne?null:q.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",b),t.xp6(1),t.Q6J("ngIf",q.nzSplit&&!ne)}}const H=["*"];let le=(()=>{class P{constructor(){}}return P.\u0275fac=function(b){return new(b||P)},P.\u0275dir=t.lG2({type:P,selectors:[["","nzSpaceItem",""]]}),P})();const se={small:8,middle:16,large:24};let ie=(()=>{class P{constructor(b,ne){this.nzConfigService=b,this.cdr=ne,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=se.small,this.destroy$=new R.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?se[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return P.\u0275fac=function(b){return new(b||P)(t.Y36(w.jY),t.Y36(t.sBO))},P.\u0275cmp=t.Xpm({type:P,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(b,ne,q){if(1&b&&t.Suo(q,le,4,t.Rgc),2&b){let de;t.iGM(de=t.CRH())&&(ne.items=de)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(b,ne){2&b&&(t.Udp("flex-wrap",ne.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===ne.nzDirection)("ant-space-vertical","vertical"===ne.nzDirection)("ant-space-align-start","start"===ne.mergedAlign)("ant-space-align-end","end"===ne.mergedAlign)("ant-space-align-center","center"===ne.mergedAlign)("ant-space-align-baseline","baseline"===ne.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:H,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(b,ne){1&b&&(t.F$t(),t.Hsn(0),t.YNc(1,K,3,6,"ng-template",0)),2&b&&(t.xp6(1),t.Q6J("ngForOf",ne.items))},directives:[i.sg,i.tP,i.O5],encapsulation:2,changeDetection:0}),(0,S.gn)([(0,X.yF)()],P.prototype,"nzWrap",void 0),(0,S.gn)([(0,w.oS)()],P.prototype,"nzSize",void 0),P})(),V=(()=>{class P{}return P.\u0275fac=function(b){return new(b||P)},P.\u0275mod=t.oAB({type:P}),P.\u0275inj=t.cJS({imports:[[n.vT,i.ez]]}),P})()},7525:(Se,re,r)=>{r.d(re,{W:()=>ue,j:()=>k});var n=r(655),i=r(5e3),t=r(8929),S=r(591),R=r(839),Z=r(8723),w=r(1177);class M{constructor(p){this.durationSelector=p}call(p,B){return B.subscribe(new L(p,this.durationSelector))}}class L extends w.Ds{constructor(p,B){super(p),this.durationSelector=B,this.hasValue=!1}_next(p){try{const B=this.durationSelector.call(this,p);B&&this._tryNext(p,B)}catch(B){this.destination.error(B)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(p,B){let O=this.durationSubscription;this.value=p,this.hasValue=!0,O&&(O.unsubscribe(),this.remove(O)),O=(0,w.ft)(B,new w.IY(this)),O&&!O.closed&&this.add(this.durationSubscription=O)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const p=this.value,B=this.durationSubscription;B&&(this.durationSubscription=void 0,B.unsubscribe(),this.remove(B)),this.value=void 0,this.hasValue=!1,super._next(p)}}}var G=r(1059),K=r(5778),H=r(7545),le=r(7625),te=r(9439),se=r(1721),ie=r(226),V=r(9808),P=r(7144);function I(Y,p){1&Y&&(i.TgZ(0,"span",3),i._UZ(1,"i",4),i._UZ(2,"i",4),i._UZ(3,"i",4),i._UZ(4,"i",4),i.qZA())}function b(Y,p){}function ne(Y,p){if(1&Y&&(i.TgZ(0,"div",8),i._uU(1),i.qZA()),2&Y){const B=i.oxw(2);i.xp6(1),i.Oqu(B.nzTip)}}function q(Y,p){if(1&Y&&(i.TgZ(0,"div"),i.TgZ(1,"div",5),i.YNc(2,b,0,0,"ng-template",6),i.YNc(3,ne,2,1,"div",7),i.qZA(),i.qZA()),2&Y){const B=i.oxw(),O=i.MAs(1);i.xp6(1),i.ekj("ant-spin-rtl","rtl"===B.dir)("ant-spin-spinning",B.isLoading)("ant-spin-lg","large"===B.nzSize)("ant-spin-sm","small"===B.nzSize)("ant-spin-show-text",B.nzTip),i.xp6(1),i.Q6J("ngTemplateOutlet",B.nzIndicator||O),i.xp6(1),i.Q6J("ngIf",B.nzTip)}}function de(Y,p){if(1&Y&&(i.TgZ(0,"div",9),i.Hsn(1),i.qZA()),2&Y){const B=i.oxw();i.ekj("ant-spin-blur",B.isLoading)}}const ge=["*"];let ue=(()=>{class Y{constructor(B,O,U){this.nzConfigService=B,this.cdr=O,this.directionality=U,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new S.X(this.nzSpinning),this.delay$=new R.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var B;this.delay$.pipe((0,G.O)(this.nzDelay),(0,K.x)(),(0,H.w)(U=>0===U?this.spinning$:this.spinning$.pipe(function X(Y){return p=>p.lift(new M(Y))}(ye=>(0,Z.H)(ye?U:0)))),(0,le.R)(this.destroy$)).subscribe(U=>{this.isLoading=U,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,le.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(B=this.directionality.change)||void 0===B||B.pipe((0,le.R)(this.destroy$)).subscribe(U=>{this.dir=U,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzSpinning:O,nzDelay:U}=B;O&&this.spinning$.next(this.nzSpinning),U&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return Y.\u0275fac=function(B){return new(B||Y)(i.Y36(te.jY),i.Y36(i.sBO),i.Y36(ie.Is,8))},Y.\u0275cmp=i.Xpm({type:Y,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(B,O){2&B&&i.ekj("ant-spin-nested-loading",!O.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[i.TTD],ngContentSelectors:ge,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(B,O){1&B&&(i.F$t(),i.YNc(0,I,5,0,"ng-template",null,0,i.W1O),i.YNc(2,q,4,12,"div",1),i.YNc(3,de,2,2,"div",2)),2&B&&(i.xp6(2),i.Q6J("ngIf",O.isLoading),i.xp6(1),i.Q6J("ngIf",!O.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,n.gn)([(0,te.oS)()],Y.prototype,"nzIndicator",void 0),(0,n.gn)([(0,se.Rn)()],Y.prototype,"nzDelay",void 0),(0,n.gn)([(0,se.yF)()],Y.prototype,"nzSimple",void 0),(0,n.gn)([(0,se.yF)()],Y.prototype,"nzSpinning",void 0),Y})(),k=(()=>{class Y{}return Y.\u0275fac=function(B){return new(B||Y)},Y.\u0275mod=i.oAB({type:Y}),Y.\u0275inj=i.cJS({imports:[[ie.vT,V.ez,P.Q8]]}),Y})()}}]);