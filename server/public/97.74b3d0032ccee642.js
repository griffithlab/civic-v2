"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[97],{5749:(J,_,e)=>{e.d(_,{m:()=>F});var n=e(5e3),m=e(9808),t=e(325),l=e(8481),z=e(3610),C=e(4850),x=e(712),P=e(7484),f=e(7881),y=e(1894),M=e(3098),w=e(6550),O=e(6949);const Z=function(a,d){return{displayName:a,profileImagePath:d}};function A(a,d){if(1&a&&(n._UZ(0,"cvc-user-avatar",12),n.TgZ(1,"span",13),n._uU(2),n.qZA()),2&a){const i=n.oxw().ngIf;n.Q6J("user",n.WLB(2,Z,i.name,i.profileImagePath)),n.xp6(2),n.Oqu(i.name)}}function T(a,d){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&a){const i=d.ngIf;n.xp6(1),n.Oqu(i)}}function b(a,d){if(1&a&&(n.ynx(0),n.TgZ(1,"cvc-link-tag",14),n._uU(2),n.qZA(),n.BQk()),2&a){const i=n.oxw().ngIf;n.xp6(1),n.Q6J("href",i.url),n.xp6(1),n.hij(" ",i.name," ")}}function E(a,d){if(1&a&&(n.ynx(0),n.TgZ(1,"nz-card",4),n.YNc(2,A,3,5,"ng-template",null,5,n.W1O),n.TgZ(4,"nz-row"),n.TgZ(5,"nz-col",6),n.TgZ(6,"div",7),n.TgZ(7,"p",8),n.YNc(8,T,2,1,"span",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"nz-descriptions",10),n.TgZ(10,"nz-descriptions-item",11),n.YNc(11,b,3,2,"ng-container",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&a){const i=d.ngIf,v=n.MAs(3);n.oxw();const D=n.MAs(4),W=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",v),n.xp6(7),n.Q6J("ngIf",i.description)("ngIfElse",D),n.xp6(1),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",i.url)("ngIfElse",W)}}function S(a,d){1&a&&n._uU(0," Organization has not provided a description.\n")}function Q(a,d){1&a&&n._uU(0," --\n")}let I=(()=>{class a{constructor(i){this.gql=i}ngOnInit(){if(void 0===this.orgId)throw new Error("cvc-org-popover requires orgId input.");this.org$=this.gql.watch({orgId:this.orgId}).valueChanges.pipe((0,C.U)(({data:i})=>i.organization))}}return a.\u0275fac=function(i){return new(i||a)(n.Y36(x.X5f))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-popover"]],inputs:{orgId:"orgId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDesc",""],["noHomepage",""],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Homepage"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],[3,"href"]],template:function(i,v){1&i&&(n.TgZ(0,"div",0),n.YNc(1,E,12,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,S,1,0,"ng-template",null,2,n.W1O),n.YNc(5,Q,1,0,"ng-template",null,3,n.W1O)),2&i&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,v.org$)))},directives:[m.O5,P.bd,f.L,y.SK,y.t3,M.R7,M.uj,w.l],pipes:[O.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),a})();var s=e(647);function o(a,d){}function r(a,d){if(1&a&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,o,0,0,"ng-template",6),n.qZA(),n.BQk()),2&a){const i=n.oxw(),v=n.MAs(2);n.xp6(1),n.MGl("routerLink","/organizations/",i.org.id,""),n.xp6(1),n.Q6J("ngTemplateOutlet",v)}}function g(a,d){}function p(a,d){if(1&a&&(n.TgZ(0,"nz-tag",9),n.YNc(1,g,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const i=n.MAs(2);n.oxw();const v=n.MAs(8);n.Q6J("nzPopoverContent",i),n.xp6(1),n.Q6J("ngTemplateOutlet",v)}}function h(a,d){if(1&a&&n._UZ(0,"cvc-organization-popover",11),2&a){const i=n.oxw(3);n.Q6J("orgId",i.org.id)}}function c(a,d){if(1&a&&n.YNc(0,h,1,1,"cvc-organization-popover",10),2&a){const i=n.oxw(2);n.Q6J("ngIf",i.enablePopover)}}function u(a,d){if(1&a&&(n.YNc(0,p,2,2,"nz-tag",7),n.YNc(1,c,1,1,"ng-template",null,8,n.W1O)),2&a){const i=n.oxw(),v=n.MAs(4);n.Q6J("ngIf",i.enablePopover)("ngIfElse",v)}}function U(a,d){}function B(a,d){if(1&a&&(n.TgZ(0,"nz-tag"),n.YNc(1,U,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const i=n.MAs(8);n.xp6(1),n.Q6J("ngTemplateOutlet",i)}}function N(a,d){}function R(a,d){if(1&a&&n.YNc(0,N,0,0,"ng-template",6),2&a){n.oxw();const i=n.MAs(2);n.Q6J("ngTemplateOutlet",i)}}function L(a,d){if(1&a&&(n._UZ(0,"i",12),n._uU(1)),2&a){const i=n.oxw();n.xp6(1),n.hij(" ",i.org.name,"\n")}}let F=(()=>{class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.org)throw new Error("cvc-org-tag requires valid TagLinkableOrganization input, none provided.")}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-tag"]],inputs:{org:"org",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverContent",4,"ngIf","ngIfElse"],["orgPopover",""],["nz-popover","",3,"nzPopoverContent"],[3,"orgId",4,"ngIf"],[3,"orgId"],["nz-icon","","nzType","civic-organization","nzTheme","twotone","nzTwotoneColor","#58A0C4"]],template:function(i,v){if(1&i&&(n.YNc(0,r,3,2,"ng-container",0),n.YNc(1,u,3,2,"ng-template",null,1,n.W1O),n.YNc(3,B,2,1,"ng-template",null,2,n.W1O),n.YNc(5,R,1,1,"ng-template",null,3,n.W1O),n.YNc(7,L,2,1,"ng-template",null,4,n.W1O)),2&i){const D=n.MAs(6);n.Q6J("ngIf",v.linked)("ngIfElse",D)}},directives:[m.O5,t.yS,m.tP,l.j,z.lU,I,s.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},8227:(J,_,e)=>{e.d(_,{q:()=>g});var n=e(5e3),m=e(8929),t=e(4850),l=e(373),z=e(2868),C=e(7625),x=e(1793),P=e(9350),f=e(9808),y=e(6042),M=e(2683),w=e(2643),O=e(3677),Z=e(8144),A=e(6699),T=e(4219);function b(p,h){1&p&&n.Hsn(0)}function E(p,h){1&p&&n.GkF(0)}function S(p,h){if(1&p&&(n.ynx(0),n.YNc(1,E,1,0,"ng-container",5),n.BQk()),2&p){n.oxw(2);const c=n.MAs(1);n.xp6(1),n.Q6J("ngTemplateOutlet",c)}}function Q(p,h){1&p&&n.GkF(0)}function I(p,h){if(1&p&&(n.ynx(0),n.TgZ(1,"nz-button-group",6),n.YNc(2,Q,1,0,"ng-container",5),n.TgZ(3,"button",7),n.TgZ(4,"nz-space",8),n.TgZ(5,"span"),n._uU(6,"for"),n.qZA(),n._UZ(7,"nz-avatar",9),n._UZ(8,"i",10),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&p){n.oxw();const c=n.MAs(4),u=n.oxw(),U=n.MAs(1);n.xp6(1),n.Q6J("nzSize",u.nzSize),n.xp6(1),n.Q6J("ngTemplateOutlet",U),n.xp6(1),n.Q6J("nzType",u.buttonType)("nzDanger",u.nzDanger)("disabled",u.disabled)("nzDropdownMenu",c),n.xp6(1),n.Q6J("nzSize",4),n.xp6(3),n.Q6J("nzSrc",null==u.selectedOrg?null:u.selectedOrg.profileImagePath)("nzSize",10)("nzShape","square")}}function s(p,h){if(1&p){const c=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){const B=n.CHM(c).$implicit;return n.oxw(2).selectOrg(B)}),n._UZ(1,"nz-avatar",12),n._uU(2),n.qZA()}if(2&p){const c=h.$implicit,u=n.oxw(2);n.Q6J("nzSelected",(null==u.selectedOrg?null:u.selectedOrg.id)===c.id),n.xp6(1),n.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),n.xp6(1),n.hij(" ",c.name," ")}}function o(p,h){if(1&p&&(n.ynx(0),n.YNc(1,S,2,1,"ng-container",1),n.YNc(2,I,9,10,"ng-container",1),n.TgZ(3,"nz-dropdown-menu",null,2),n.TgZ(5,"ul",3),n.YNc(6,s,3,5,"li",4),n.qZA(),n.qZA(),n.BQk()),2&p){const c=h.ngIf;n.xp6(1),n.Q6J("ngIf",c.length<=1),n.xp6(1),n.Q6J("ngIf",c.length>1),n.xp6(4),n.Q6J("ngForOf",c)}}const r=["*"];let g=(()=>{class p{constructor(c){this.viewerService=c,this.selectedOrgChange=new n.vpe,this.buttonType="primary",this.nzDanger=!1,this.nzSize="small",this.destroy$=new m.xQ}get disabled(){return this.button.disabled}selectOrg(c){this.selectedOrg=c,this.selectedOrgChange.emit(c)}refreshViewer(){setTimeout(()=>{this.viewerService.refetch()},2500)}ngOnInit(){this.organizations$=this.viewerService.viewer$.pipe((0,t.U)(c=>c.organizations)),this.mostRecentOrg$=this.viewerService.viewer$.pipe((0,l.j)("mostRecentOrg"),(0,z.b)(c=>{c&&(this.selectedOrg=c,this.selectedOrgChange.emit(c))})),this.mostRecentOrg$.pipe((0,C.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return p.\u0275fac=function(c){return new(c||p)(n.Y36(P.a))},p.\u0275cmp=n.Xpm({type:p,selectors:[["cvc-org-selector-btn-group"]],contentQueries:function(c,u,U){if(1&c&&n.Suo(U,x.m,5),2&c){let B;n.iGM(B=n.CRH())&&(u.button=B.first)}},inputs:{selectedOrg:"selectedOrg",buttonType:"buttonType",nzDanger:"nzDanger",nzSize:"nzSize"},outputs:{selectedOrgChange:"selectedOrgChange"},ngContentSelectors:r,decls:4,vars:3,consts:[["submitButton",""],[4,"ngIf"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"nzSize"],["type","button","nz-button","","nz-dropdown","",1,"org-dropdown-btn",3,"nzType","nzDanger","disabled","nzDropdownMenu"],["nzDirection","horizontal",3,"nzSize"],[3,"nzSrc","nzSize","nzShape"],["nz-icon","","nzType","down"],["nz-menu-item","",3,"nzSelected","click"],[2,"background-color","#f0f5ff",3,"nzSrc","nzSize","nzShape"]],template:function(c,u){1&c&&(n.F$t(),n.YNc(0,b,1,0,"ng-template",null,0,n.W1O),n.YNc(2,o,7,3,"ng-container",1),n.ALo(3,"async")),2&c&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,u.organizations$)))},directives:[f.O5,f.tP,y.fY,M.w,y.ix,w.dQ,O.wA,O.cm,Z.NU,A.Dz,O.RR,T.wO,f.sg,T.r9],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:inline-block}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:0 6px}"]}),p})()},7733:(J,_,e)=>{e.r(_),e.d(_,{CurationQueuesModule:()=>I});var n=e(9808),m=e(325),t=e(712),l=e(5e3),z=e(3756);let C=(()=>{class s{constructor(){this.status=t.m55.Submitted}ngOnInit(){}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=l.Xpm({type:s,selectors:[["cvc-pending-assertions-page"]],decls:1,vars:1,consts:[["cvcTitle","Browse Pending Assertions",3,"status"]],template:function(r,g){1&r&&l._UZ(0,"cvc-assertions-table",0),2&r&&l.Q6J("status",g.status)},directives:[z.x],styles:[""]}),s})();var x=e(3392);let P=(()=>{class s{constructor(){this.status=t.m55.Submitted}ngOnInit(){}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=l.Xpm({type:s,selectors:[["cvc-pending-evidence-page"]],decls:1,vars:1,consts:[["cvcTitle","Browse Pending Evidence",3,"status"]],template:function(r,g){1&r&&l._UZ(0,"cvc-evidence-table",0),2&r&&l.Q6J("status",g.status)},directives:[x.a],styles:[""]}),s})();var f=e(9814);const M=[{path:"",redirectTo:"pending-sources",pathMatch:"full"},{path:"pending-sources",component:(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=l.Xpm({type:s,selectors:[["cvc-pending-sources-page"]],decls:1,vars:0,consts:[["cvcTitle","Browse Suggested Sources"]],template:function(r,g){1&r&&l._UZ(0,"cvc-source-suggestions-table",0)},directives:[f.O],styles:[""]}),s})(),data:{breadcrumb:"Pending Source Suggestions"}},{path:"pending-evidence",component:P,data:{breadcrumb:"Pending Evidence Items"}},{path:"pending-assertions",component:C,data:{breadcrumb:"Pending Assertions"}}];let w=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[m.Bz.forChild(M)],m.Bz]}),s})();var O=e(5630),Z=e(1945),A=e(6949),T=e(8762),b=e(647),E=e(8144),S=e(3618),Q=e(1894);let I=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[n.ez,A.WG,w,Z.KJ,b.PV,E.zf,S.ZJ,Q.Jb,O.D,T.c]]}),s})()},7563:(J,_,e)=>{e.r(_),e.d(_,{CurationModule:()=>s});var n=e(9808),m=e(325),t=e(5e3),l=e(8992),z=e(1945),C=e(1894),x=e(647),P=e(3618),f=e(2233);const O=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(g){return new(g||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-view"]],decls:1,vars:0,template:function(g,p){1&g&&t._UZ(0,"router-outlet")},directives:[m.lC],styles:[""]}),o})(),children:[{path:"",redirectTo:"activity",pathMatch:"full"},{path:"activity",component:(()=>{class o{constructor(){this.tabs=[{routeName:"curation-timeline",iconName:"civic-event",tabLabel:"Timeline"}]}}return o.\u0275fac=function(g){return new(g||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-activity-view"]],decls:19,vars:4,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzType","civic:event"],["nzFlex","600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],[3,"nzSpan"],[3,"tabs"],[1,"content"]],template:function(g,p){1&g&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0),t.TgZ(2,"nz-page-header-content"),t.TgZ(3,"nz-row",1),t.TgZ(4,"nz-col",2),t._UZ(5,"i",3),t.qZA(),t.TgZ(6,"nz-col",4),t.TgZ(7,"h2"),t._uU(8,"Curation Event Timeline"),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"All CIViC curation activity is logged and publicly available, thus esablishing the provenance of its assertions, summaries, associations, and acknowledging the work of collaborators."),t.qZA(),t.qZA(),t._UZ(11,"nz-col",6),t.qZA(),t.TgZ(12,"nz-row"),t.TgZ(13,"nz-col",7),t._UZ(14,"cvc-tab-navigation",8),t.qZA(),t.qZA(),t.TgZ(15,"nz-row"),t.TgZ(16,"nz-col",7),t.TgZ(17,"div",9),t._UZ(18,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&g&&(t.xp6(9),t.Q6J("nzEllipsisRows",2),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("tabs",p.tabs),t.xp6(2),t.Q6J("nzSpan",24))},directives:[l.I,z.$O,z.u5,C.SK,C.t3,x.Ls,P.ZU,f.P,m.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),loadChildren:()=>Promise.all([e.e(9716),e.e(5291),e.e(3894)]).then(e.bind(e,6461)).then(o=>o.CurationActivityModule),data:{breadcrumb:"Activity"}},{path:"queues",component:(()=>{class o{constructor(){this.tabs=[{routeName:"pending-sources",iconName:"civic-source",tabLabel:"Sources Queue"},{routeName:"pending-evidence",iconName:"civic-evidence",tabLabel:"Evidence Queue"},{routeName:"pending-assertions",iconName:"civic-assertion",tabLabel:"Assertions Queue"}]}}return o.\u0275fac=function(g){return new(g||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-queues-view"]],decls:19,vars:4,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzType","civic:queue"],["nzFlex","600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],[3,"nzSpan"],[3,"tabs"],[1,"content"]],template:function(g,p){1&g&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0),t.TgZ(2,"nz-page-header-content"),t.TgZ(3,"nz-row",1),t.TgZ(4,"nz-col",2),t._UZ(5,"i",3),t.qZA(),t.TgZ(6,"nz-col",4),t.TgZ(7,"h2"),t._uU(8,"Curation Queues"),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"New submitted Evidence, Assertions, and Source Suggestions must be accepted by a CIViC Editor. These Curation Queues list items in need of Editor moderation."),t.qZA(),t.qZA(),t._UZ(11,"nz-col",6),t.qZA(),t.TgZ(12,"nz-row"),t.TgZ(13,"nz-col",7),t._UZ(14,"cvc-tab-navigation",8),t.qZA(),t.qZA(),t.TgZ(15,"nz-row"),t.TgZ(16,"nz-col",7),t.TgZ(17,"div",9),t._UZ(18,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&g&&(t.xp6(9),t.Q6J("nzEllipsisRows",2),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("tabs",p.tabs),t.xp6(2),t.Q6J("nzSpan",24))},directives:[l.I,z.$O,z.u5,C.SK,C.t3,x.Ls,P.ZU,f.P,m.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),loadChildren:()=>Promise.resolve().then(e.bind(e,7733)).then(o=>o.CurationQueuesModule),data:{breadcrumb:"Queues"}}]}];let Z=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(O)],m.Bz]}),o})();var A=e(7733),T=e(2832);let b=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,T.W]]}),o})();var E=e(767);let S=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,E.Q]]}),o})();var Q=e(9441);let I=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,Q.s]]}),o})(),s=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,Z,A.CurationQueuesModule,b,S,I]]}),o})()}}]);