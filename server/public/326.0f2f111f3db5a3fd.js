"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[326],{9543:(y,x,a)=>{a.d(x,{e:()=>U});var n=a(1635),C=a(9145),P=a(1413),d=a(5964),g=a(6354),R=a(6977),f=a(9085),I=a(3294),h=a(6697),L=a(5312),E=a(9199),z=a(9894),t=a(3953);const u=()=>[];function F(_,i){if(1&_&&(t.qex(0),t.nrm(1,"cvc-event-timeline",15),t.bVm()),2&_){const e=t.XpG().ngIf,s=t.XpG(3);t.R7$(),t.Y8G("events",e)("tagDisplay",s.tagDisplay)}}function D(_,i){if(1&_){const e=t.RV6();t.j41(0,"div",17)(1,"button",18),t.bIt("click",function(){t.eBV(e);const l=t.XpG().ngIf,m=t.XpG(4);return t.Njj(m.fetchMore(l.endCursor))}),t.EFF(2," Load More "),t.k0s()()}}function c(_,i){if(1&_&&(t.qex(0),t.DNE(1,D,3,0,"div",16),t.bVm()),2&_){const e=i.ngIf;t.R7$(),t.Y8G("ngIf",e.hasNextPage&&e.endCursor)}}function v(_,i){if(1&_&&(t.qex(0),t.j41(1,"nz-row",6)(2,"nz-col",14),t.DNE(3,F,2,2,"ng-container",5)(4,c,2,1,"ng-container",13),t.nI1(5,"ngrxPush"),t.k0s()(),t.bVm()),2&_){const e=i.ngIf,s=t.XpG(3),l=t.sdS(5);t.R7$(),t.Y8G("nzGutter",16),t.R7$(2),t.Y8G("ngIf",e.length)("ngIfElse",l),t.R7$(),t.Y8G("ngIf",t.bMT(5,4,s.pageInfo$))}}function o(_,i){if(1&_){const e=t.RV6();t.j41(0,"nz-badge",21)(1,"button",22),t.bIt("click",function(){t.eBV(e);const l=t.XpG(6);return t.Njj(l.refresh())}),t.EFF(2," New Event(s) "),t.k0s()()}if(2&_){const e=t.XpG().ngrxLet,s=t.XpG(5);t.Y8G("nzCount",e-s.originalEventCount)}}function r(_,i){if(1&_&&(t.qex(0),t.DNE(1,o,3,1,"nz-badge",20),t.bVm()),2&_){const e=i.ngrxLet,s=t.XpG(5);t.R7$(),t.Y8G("ngIf",e&&e>s.originalEventCount)}}function p(_,i){if(1&_&&(t.qex(0),t.DNE(1,r,2,1,"ng-container",19),t.bVm()),2&_){const e=t.XpG(4);t.R7$(),t.Y8G("ngrxLet",e.newEventCount$)}}function T(_,i){if(1&_&&t.DNE(0,p,2,1,"ng-container",13),2&_){const e=t.XpG(3);t.Y8G("ngIf",e.pollForNewEvents&&e.originalEventCount)}}function M(_,i){if(1&_&&(t.j41(0,"nz-card",12),t.DNE(1,v,6,6,"ng-container",13),t.nI1(2,"ngrxPush"),t.DNE(3,T,1,1,"ng-template",null,1,t.C5r),t.k0s()),2&_){const e=t.sdS(4),s=t.XpG(2);t.Y8G("nzTitle",s.showFilters?"Events":void 0)("nzExtra",e),t.R7$(),t.Y8G("ngIf",t.bMT(2,3,s.events$))}}function G(_,i){if(1&_){const e=t.RV6();t.j41(0,"span"),t.EFF(1," Show Child Events "),t.j41(2,"nz-switch",24),t.mxI("ngModelChange",function(l){t.eBV(e);const m=t.XpG(3);return t.DH7(m.showChildren,l)||(m.showChildren=l),t.Njj(l)}),t.bIt("ngModelChange",function(){t.eBV(e);const l=t.XpG(3);return t.Njj(l.onShowChildrenToggle())}),t.k0s()()}if(2&_){const e=t.XpG(3);t.R7$(2),t.R50("ngModel",e.showChildren)}}function S(_,i){1&_&&(t.EFF(0),t.nI1(1,"eventVerbiage")),2&_&&t.SpI(" ",t.i5U(1,1,i.$implicit.id,"action-filter")," ")}function B(_,i){if(1&_&&t.nrm(0,"nz-avatar",30),2&_){const e=t.XpG().$implicit;t.Y8G("nzSrc",e.profileImagePath)}}function A(_,i){if(1&_&&(t.nrm(0,"nz-avatar",31),t.nI1(1,"uppercase")),2&_){const e=t.XpG().$implicit;t.Y8G("nzText",t.bMT(1,1,e.displayName.charAt(0)))}}function O(_,i){if(1&_&&(t.DNE(0,B,1,1,"nz-avatar",29)(1,A,2,3,"ng-template",null,3,t.C5r),t.j41(3,"span"),t.EFF(4),t.k0s()),2&_){const e=i.$implicit,s=t.sdS(2);t.Y8G("ngIf",e.profileImagePath)("ngIfElse",s),t.R7$(4),t.JRh(e.displayName)}}function K(_,i){if(1&_){const e=t.RV6();t.j41(0,"cvc-participant-list",28),t.nI1(1,"ngrxPush"),t.bIt("participantSelectedEvent",function(l){t.eBV(e);const m=t.XpG(4);return t.Njj(m.onOriginatingUserSelected(l))}),t.DNE(2,O,5,3,"ng-template",null,2,t.C5r),t.k0s()}if(2&_){const e=t.XpG(4);t.Y8G("participantList",t.bMT(1,1,e.participants$)||t.lJ4(3,u))}}function j(_,i){if(1&_&&(t.j41(0,"nz-col"),t.EFF(1),t.k0s()),2&_){const e=i.$implicit;t.R7$(),t.SpI(" ",e.name," ")}}function $(_,i){if(1&_){const e=t.RV6();t.j41(0,"cvc-participant-list",32),t.nI1(1,"ngrxPush"),t.bIt("participantSelectedEvent",function(l){t.eBV(e);const m=t.XpG(4);return t.Njj(m.onOrganizationSelected(l))}),t.DNE(2,j,2,1,"ng-template",null,2,t.C5r),t.k0s()}if(2&_){const e=t.XpG(4);t.Y8G("participantList",t.bMT(1,1,e.organizations$)||t.lJ4(3,u))}}function W(_,i){if(1&_){const e=t.RV6();t.qex(0),t.j41(1,"cvc-participant-list",25),t.nI1(2,"ngrxPush"),t.bIt("participantSelectedEvent",function(l){t.eBV(e);const m=t.XpG(3);return t.Njj(m.onActionSelected(l))}),t.DNE(3,S,2,4,"ng-template",null,2,t.C5r),t.k0s(),t.DNE(5,K,4,4,"cvc-participant-list",26)(6,$,4,4,"cvc-participant-list",27),t.bVm()}if(2&_){const e=t.XpG(3);t.R7$(),t.Y8G("participantList",t.bMT(2,3,e.actions$)||t.lJ4(5,u)),t.R7$(4),t.Y8G("ngIf",!e.userId),t.R7$(),t.Y8G("ngIf",!e.organizationId)}}function N(_,i){1&_&&(t.j41(0,"nz-space",8),t.DNE(1,G,3,1,"span",23)(2,W,7,6,"ng-container",23),t.k0s())}function V(_,i){if(1&_&&(t.qex(0),t.j41(1,"nz-row",6)(2,"nz-col",7)(3,"nz-space",8),t.DNE(4,M,5,5,"nz-card",9),t.k0s()(),t.j41(5,"nz-col",10),t.DNE(6,N,3,0,"nz-space",11),t.k0s()(),t.bVm()),2&_){const e=t.XpG();t.R7$(),t.Y8G("nzGutter",16),t.R7$(),t.Y8G("nzSpan",e.showFilters?"18":"24"),t.R7$(4),t.Y8G("ngIf",e.showFilters)}}function X(_,i){1&_&&t.nrm(0,"nz-empty",33)}let U=class b{constructor(i,e){this.gql=i,this.eventCountGql=e,this.tagDisplay="displayAll",this.mode=C.Qt1.Subject,this.showFilters=!0,this.pageSize=15,this.pollForNewEvents=!0,this.includeAutomatedEvents=!0,this.destroy$=new P.B,this.showChildren=!1}ngOnInit(){this.initialQueryVars={subject:this.subscribable,organizationId:this.organizationId,originatingUserId:this.userId,first:this.pageSize,mode:this.mode,showFilters:this.showFilters,includeAutomatedEvents:this.includeAutomatedEvents},this.queryRef=this.gql.watch(this.initialQueryVars),this.pollForNewEvents&&L.c.production&&(this.newEventCount$=this.eventCountGql.watch(this.initialQueryVars,{fetchPolicy:"no-cache",pollInterval:3e4}).valueChanges.pipe((0,d.p)(E.kP),(0,g.T)(({data:i})=>i?.events?.unfilteredCount),(0,R.Q)(this.destroy$))),this.results$=this.queryRef.valueChanges,this.pageInfo$=this.results$.pipe((0,g.T)(({data:i})=>i.events.pageInfo)),this.events$=this.results$.pipe((0,f.E)("data","events","edges"),(0,d.p)(E.kP),(0,g.T)(i=>i.map(e=>e.node))),this.loading$=this.results$.pipe((0,g.T)(({loading:i})=>i),(0,I.F)()),this.unfilteredCount$=this.results$.pipe((0,g.T)(i=>i.data),(0,d.p)(E.kP),(0,g.T)(({events:i})=>i.unfilteredCount)),this.unfilteredCount$.pipe((0,h.s)(1),(0,z.s)(this)).subscribe(i=>this.originalEventCount=i),this.showFilters&&(this.participants$=this.results$.pipe((0,d.p)(E.kP),(0,g.T)(({data:i})=>i.events.uniqueParticipants)),this.organizations$=this.results$.pipe((0,d.p)(E.kP),(0,g.T)(({data:i})=>i.events.participatingOrganizations)),this.actions$=this.results$.pipe((0,d.p)(E.kP),(0,g.T)(({data:i})=>i.events?.eventTypes?.map(e=>({id:e}))||[])))}fetchMore(i){this.queryRef.fetchMore({variables:{first:this.pageSize,after:i}})}onOrganizationSelected(i){this.queryRef.refetch({organizationId:i?.id,showFilters:this.showFilters})}onActionSelected(i){this.queryRef.refetch({eventType:i?i.id:void 0,showFilters:this.showFilters})}onOriginatingUserSelected(i){this.queryRef.refetch({originatingUserId:i?.id,showFilters:this.showFilters})}refresh(){this.queryRef.refetch().then(({data:i})=>{this.originalEventCount=i.events.unfilteredCount})}onShowChildrenToggle(){let i;this.subscribable?(i={id:this.subscribable.id,entityType:this.subscribable.entityType,includeChildren:this.showChildren},this.tagDisplay=this.showChildren?"displayAll":"hideSubject"):i=void 0,this.queryRef.refetch({...this.initialQueryVars,subject:i,showFilters:this.showFilters})}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||b)(t.rXU(C.XxZ),t.rXU(C.Ei5))};static#n=this.\u0275cmp=t.VBU({type:b,selectors:[["cvc-event-feed"]],inputs:{subscribable:"subscribable",subscribableName:"subscribableName",organizationId:"organizationId",userId:"userId",tagDisplay:"tagDisplay",mode:"mode",showFilters:"showFilters",pageSize:"pageSize",pollForNewEvents:"pollForNewEvents",includeAutomatedEvents:"includeAutomatedEvents"},decls:6,vars:7,consts:[["noEvents",""],["refreshFeed",""],["itemTemplate",""],["noAvatar",""],["nzTip","Loading",3,"nzSpinning"],[4,"ngIf","ngIfElse"],[3,"nzGutter"],[3,"nzSpan"],["nzDirection","vertical",2,"width","100%"],[3,"nzTitle","nzExtra",4,"nzSpaceItem"],["nzSpan","6"],["nzDirection","vertical","style","width: 100%",4,"ngIf"],[3,"nzTitle","nzExtra"],[4,"ngIf"],["nzSpan","24",1,"timeline"],[3,"events","tagDisplay"],["nz-list-load-more","",4,"ngIf"],["nz-list-load-more",""],["nz-button","","nzType","default","nzSize","small","nzBlock","",3,"click"],[4,"ngrxLet"],[3,"nzCount",4,"ngIf"],[3,"nzCount"],["nz-button","","nz-tooltip","Click to Refresh",3,"click"],[4,"nzSpaceItem"],["nzSize","small",3,"ngModelChange","ngModel"],["listTitle","Action",3,"participantSelectedEvent","participantList"],["listTitle","Curator",3,"participantList","participantSelectedEvent",4,"ngIf"],["listTitle","Organization",3,"participantList","participantSelectedEvent",4,"ngIf"],["listTitle","Curator",3,"participantSelectedEvent","participantList"],["nz-comment-avatar","",3,"nzSrc",4,"ngIf","ngIfElse"],["nz-comment-avatar","",3,"nzSrc"],["nz-comment-avatar","",3,"nzText"],["listTitle","Organization",3,"participantSelectedEvent","participantList"],["nzNotFoundImage","simple","nzNotFoundContent","No Events"]],template:function(e,s){if(1&e&&(t.j41(0,"nz-spin",4),t.nI1(1,"ngrxPush"),t.DNE(2,V,7,3,"ng-container",5),t.nI1(3,"ngrxPush"),t.DNE(4,X,1,0,"ng-template",null,0,t.C5r),t.k0s()),2&e){const l=t.sdS(5);t.Y8G("nzSpinning",t.bMT(1,3,s.loading$)),t.R7$(2),t.Y8G("ngIf",t.bMT(3,5,s.unfilteredCount$))("ngIfElse",l)}},styles:["[_nghost-%COMP%]{display:block}.timeline[_ngcontent-%COMP%]{padding-top:6px;padding-left:6px}#event-filters[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%]:last-child{margin-right:0}#event-filters[_ngcontent-%COMP%]   #participant-filter[_ngcontent-%COMP%]{width:200px}#event-filters[_ngcontent-%COMP%]   #organization-filter[_ngcontent-%COMP%]{width:250px}"]})};U=(0,n.Cg)([(0,z.d)()],U)},326:(y,x,a)=>{a.d(x,{p:()=>A});var n=a(177),C=a(9543),P=a(1774),d=a(5703),g=a(5103),R=a(8927),f=a(9417),I=a(7481),h=a(7529),L=a(1997),E=a(2172),z=a(513),t=a(4917),u=a(7685),F=a(2968),D=a(9438),c=a(1672),v=a(2983),o=a(3146),r=a(5154),p=a(3953),T=a(6389),M=a(5930),G=a(9588),S=a(9365),B=a(7793);let A=(()=>{class O{static#t=this.\u0275fac=function($){return new($||O)};static#n=this.\u0275mod=p.$C({type:O});static#e=this.\u0275inj=p.G2t({imports:[n.MD,f.YN,z.Zw,d.Ti,g.Y3,R.PQ,L.DH,I.$,h.f3,u.pc,c._v,D.Yb,v.V,o.W2,r.Qt,E.a,t.i,F.K,t.i]})}return O})();p.wjB(C.e,[n.bT,f.BC,f.vS,P.Nj,z.aO,T.c,M.p,d.cK,h.Uq,h.e,I.u,u.U5,u.Dq,c.RW,D.PM,v.a,o.dz,r.LH,G.p,S.T],[n.Pc,P.L9,B.s])},9365:(y,x,a)=>{a.d(x,{T:()=>D});var n=a(3953),C=a(177),P=a(5703),d=a(2617),g=a(5103),R=a(513),f=a(6389),I=a(5930);const h=["itemTemplate"],L=c=>({$implicit:c});function E(c,v){if(1&c){const o=n.RV6();n.j41(0,"nz-list-item",5),n.bIt("click",function(){n.eBV(o);const p=n.XpG().$implicit,T=n.XpG(2);return n.Njj(T.onParticipantSelected(p))}),n.eu8(1,6),n.k0s()}if(2&c){const o=n.XpG().$implicit,r=n.XpG(2);n.AVh("selected-participant",o.id==(null==r.selectedItem?null:r.selectedItem.id)),n.R7$(),n.Y8G("ngTemplateOutlet",r.itemTemplateRef||null)("ngTemplateOutletContext",n.eq3(4,L,o))}}function z(c,v){if(1&c&&(n.qex(0),n.DNE(1,E,2,6,"nz-list-item",4),n.bVm()),2&c){const o=v.index,r=n.XpG(2);n.R7$(),n.Y8G("ngIf",o+1<=r.defaultListSize)}}function t(c,v){if(1&c){const o=n.RV6();n.j41(0,"button",7),n.bIt("click",function(){n.eBV(o);const p=n.XpG(2);return n.Njj(p.onExpandClicked())}),n.nrm(1,"i",8),n.EFF(2," Expand "),n.k0s()}}function u(c,v){if(1&c){const o=n.RV6();n.j41(0,"button",7),n.bIt("click",function(){n.eBV(o);const p=n.XpG(2);return n.Njj(p.onCollapseClicked())}),n.nrm(1,"i",9),n.EFF(2," Collapse "),n.k0s()}}function F(c,v){if(1&c&&(n.qex(0),n.j41(1,"nz-card",1)(2,"nz-list"),n.DNE(3,z,2,1,"ng-container",2),n.k0s(),n.DNE(4,t,3,0,"button",3)(5,u,3,0,"button",3),n.k0s(),n.bVm()),2&c){const o=n.XpG();n.R7$(),n.Y8G("nzTitle",o.listTitle),n.R7$(2),n.Y8G("ngForOf",o.participantList),n.R7$(),n.Y8G("ngIf",o.participantList.length>o.defaultListSize),n.R7$(),n.Y8G("ngIf",o.isExpanded)}}let D=(()=>{class c{constructor(){this.defaultListSize=5,this.participantSelectedEvent=new n.bkB,this.isExpanded=!1}ngOnInit(){this.preselectedOption&&(this.selectedItem=this.preselectedOption)}onParticipantSelected(o){this.selectedItem=o.id==this.selectedItem?.id?void 0:o,this.participantSelectedEvent.emit(this.selectedItem)}onExpandClicked(){this.originalDefaultListSize=this.defaultListSize,this.defaultListSize=this.participantList.length,this.isExpanded=!0}onCollapseClicked(){this.originalDefaultListSize&&(this.defaultListSize=this.originalDefaultListSize,this.isExpanded=!1)}static#t=this.\u0275fac=function(r){return new(r||c)};static#n=this.\u0275cmp=n.VBU({type:c,selectors:[["cvc-participant-list"]],contentQueries:function(r,p,T){if(1&r&&n.wni(T,h,5),2&r){let M;n.mGM(M=n.lsd())&&(p.itemTemplateRef=M.first)}},inputs:{participantList:"participantList",listTitle:"listTitle",defaultListSize:"defaultListSize",preselectedOption:"preselectedOption"},outputs:{participantSelectedEvent:"participantSelectedEvent"},decls:1,vars:1,consts:[[4,"ngIf"],["nz-type","inner",2,"margin-bottom","1em",3,"nzTitle"],[4,"ngFor","ngForOf"],["nz-button","","nzType","default","nzSize","small",3,"click",4,"ngIf"],["nzSize","small","class","participant-list-item",3,"selected-participant","click",4,"ngIf"],["nzSize","small",1,"participant-list-item",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-button","","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","vertical-align-bottom"],["nz-icon","","nzType","vertical-align-top"]],template:function(r,p){1&r&&n.DNE(0,F,6,4,"ng-container",0),2&r&&n.Y8G("ngIf",p.participantList&&p.participantList.length>0)},dependencies:[C.Sq,C.bT,C.T3,P.cK,d.eE,d.lQ,g.Dn,R.aO,f.c,I.p],styles:[".participant-list-item[_ngcontent-%COMP%]:hover{border:1px solid #40a9ff;cursor:pointer}.participant-list-item[_ngcontent-%COMP%]{padding:2px;margin:2px}.selected-participant[_ngcontent-%COMP%]{background:#40a9ff;color:#fff}"]})}return c})()}}]);